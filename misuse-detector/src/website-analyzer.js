/**
 * Website Analyzer Module
 * 
 * Analyzes top websites for cryptographic usage
 */

const fs = require('fs').promises;
const path = require('path');
const csv = require('csv-parser');
const { createReadStream } = require('fs');
const WebCrawler = require('./crawler');
const CryptoDetector = require('./crypto-detector');
const Database = require('./database');

class WebsiteAnalyzer {
    constructor(options = {}) {
        this.options = {
            rankingFile: options.rankingFile || path.join(process.cwd(), 'top-sites.csv'),
            outputDir: options.outputDir || path.join(process.cwd(), 'output'),
            dbPath: options.dbPath || path.join(process.cwd(), 'crypto_usage.db'),
            maxSites: options.maxSites || 10000,
            crawlDepth: options.crawlDepth || 2,
            maxPagesPerSite: options.maxPagesPerSite || 20,
            startRank: options.startRank || 1,
            endRank: options.endRank || 10000,
            scriptsDir: options.scriptsDir || path.join(process.cwd(), 'detected_scripts'),
            ...options
        };

        // Initialize crawler
        this.crawler = new WebCrawler({
            maxDepth: this.options.crawlDepth,
            maxPages: this.options.maxPagesPerSite,
            outputDir: this.options.outputDir
        });

        this.detector = new CryptoDetector({
            outputDir: this.options.scriptsDir
        });
        this.database = new Database({ dbPath: this.options.dbPath });
    }

    async initialize() {
        // Create output directory if it doesn't exist
        await fs.mkdir(this.options.outputDir, { recursive: true });

        // Initialize database
        await this.database.initialize();
    }

    async loadTopSites() {
        return new Promise((resolve, reject) => {
            try {
                if (!require('fs').existsSync(this.options.rankingFile)) {
                    console.error(`File not found: ${this.options.rankingFile}`);
                    return reject(new Error(`File not found: ${this.options.rankingFile}`));
                }

                console.log(`Reading from file: ${this.options.rankingFile}`);
                console.log(`Rank range: ${this.options.startRank} - ${this.options.endRank}`);

                const results = [];
                createReadStream(this.options.rankingFile)
                    .pipe(csv())
                    .on('data', (data) => {
                        // 添加数据结构调试
                        if (results.length === 0) {
                            console.log('CSV 数据结构:', data);
                        }

                        const rank = parseInt(data.rank);
                        const domain = data.domain;

                        // 添加数据处理调试
                        // console.log(`处理数据: rank=${rank}, domain=${domain}`);

                        if (rank >= this.options.startRank &&
                            rank <= this.options.endRank) {

                            if (domain) {
                                results.push({
                                    rank: rank,
                                    domain: domain.trim()
                                });
                                console.log(`添加网站: rank=${rank}, domain=${domain}`);
                            }
                        }
                    })
                    .on('end', () => {
                        console.log(`处理完成，找到 ${results.length} 个符合条件的网站`);
                        if (results.length > 0) {
                            console.log('首个网站:', results[0]);
                        }
                        resolve(results);
                    })
                    .on('error', (err) => {
                        console.error('CSV 读取错误:', err);
                        reject(err);
                    });
            } catch (err) {
                console.error('loadTopSites 错误:', err);
                reject(err);
            }
        });
    }


    async analyzeSite(site) {
        console.log(`Analyzing site ${site.rank}: ${site.domain}`);

        try {
            // Ensure domain has protocol
            const url = site.domain.startsWith('http') ? site.domain : `https://${site.domain}`;

            // Create site-specific output directory
            const siteOutputDir = path.join(this.options.outputDir, site.domain.replace(/[^a-z0-9]/gi, '_'));
            await fs.mkdir(siteOutputDir, { recursive: true });

            // Configure crawler for this site
            this.crawler.options.outputDir = siteOutputDir;

            // 确保爬虫状态被重置（虽然在 crawl 方法中已经添加了重置，这里为了安全起见再次调用）
            await this.crawler.reset();

            // Crawl the site
            const crawlResult = await this.crawler.crawl(url);

            // 获取脚本内容前先检查数量
            const scripts = this.crawler.getScriptContents();
            console.log(`实际提取到 ${scripts.size} 个脚本文件`);

            // Analyze scripts for crypto usage
            const analysisResults = await this.detector.analyzeScripts(scripts);

            // 确保 analysisResults 是数组
            if (!Array.isArray(analysisResults)) {
                console.warn(`Warning: analysisResults is not an array for ${site.domain}`);
                analysisResults = [];
            }

            // 检查是否有加密算法
            const hasCrypto = analysisResults.some(r => r && r.hasCrypto);

            // 提取所有检测到的算法
            const algorithms = [];
            analysisResults.forEach(result => {
                if (result && result.detectedAlgorithms) {
                    algorithms.push(...result.detectedAlgorithms);
                }
            });

            // 准备数据库结果
            const dbResult = {
                domain: site.domain,
                rank: site.rank,
                timestamp: new Date(),
                scriptCount: scripts.size,
                hasCrypto: hasCrypto,
                algorithms: algorithms
            };

            // 存储结果到数据库
            await this.database.storeDomainResults(dbResult);

            return {
                domain: site.domain,
                rank: site.rank,
                scriptCount: scripts.size,
                hasCrypto: hasCrypto,
                results: analysisResults
            };
        } catch (error) {
            console.error(`Error analyzing ${site.domain}:`, error);
            return {
                domain: site.domain,
                rank: site.rank,
                error: error.message
            };
        }
    }

    async analyzeTopSites() {
        try {
            await this.initialize();

            // Load top sites from CSV
            const sites = await this.loadTopSites();
            console.log(`Loaded ${sites.length} sites for analysis`);

            // Track progress
            let completed = 0;
            let withCrypto = 0;

            // Process sites sequentially to avoid overwhelming resources
            for (const site of sites) {
                const result = await this.analyzeSite(site);
                completed++;

                if (result.hasCrypto) {
                    withCrypto++;
                }

                // Log progress
                console.log(`Progress: ${completed}/${sites.length} sites analyzed (${withCrypto} with crypto)`);

                // Optional: save intermediate results
                if (completed % 100 === 0) {
                    await this.generateReport(`report_${completed}.json`);
                }
            }

            // Generate final report
            await this.generateReport('final_report.json');

            return {
                totalSites: sites.length,
                sitesWithCrypto: withCrypto
            };
        } finally {
            // Close resources
            await this.crawler.close();
            await this.database.close();
        }
    }

    async generateReport(filename) {
        const stats = {
            domainStats: await this.database.getDomainStats(),
            algorithmStats: await this.database.getAlgorithmStats(),
            misuseStats: await this.database.getMisuseStats()
        };

        await fs.writeFile(
            path.join(this.options.outputDir, filename),
            JSON.stringify(stats, null, 2)
        );

        return stats;
    }
}

module.exports = WebsiteAnalyzer;