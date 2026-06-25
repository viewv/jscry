const fs = require('fs');
const path = require('path');
const { findContainingFunction } = require('./slice_code');

/**
 * 批量分析工具 - 流式处理版本，避免内存溢出
 */
class BatchAnalyzer {
    constructor() {
        this.tmpDir = path.join(process.env.HOME, 'miniapps', 'tmp');
        this.outputDir = path.join(process.cwd(), 'libs');
        this.stats = {
            totalSlices: 0,
            processedApps: 0,
            algorithms: new Set(),
            algorithmStats: {}
        };
        this.ensureOutputDir();
    }

    /**
     * 确保输出目录存在
     */
    ensureOutputDir() {
        if (!fs.existsSync(this.outputDir)) {
            fs.mkdirSync(this.outputDir, { recursive: true });
            console.log(`创建输出目录: ${this.outputDir}`);
        }
    }

    /**
     * 确保算法目录存在
     */
    ensureAlgorithmDir(algorithm) {
        const algorithmDir = path.join(this.outputDir, algorithm);
        if (!fs.existsSync(algorithmDir)) {
            fs.mkdirSync(algorithmDir, { recursive: true });
            console.log(`创建算法目录: ${algorithmDir}`);
        }
        return algorithmDir;
    }

    /**
     * 获取所有app_id文件夹
     */
    getAppIdFolders() {
        try {
            const folders = fs.readdirSync(this.tmpDir, { withFileTypes: true })
                .filter(dirent => dirent.isDirectory())
                .map(dirent => dirent.name)
                .filter(name => name.startsWith('wx'));

            console.log(`找到 ${folders.length} 个app_id文件夹`);
            return folders;
        } catch (error) {
            console.error(`读取tmp目录失败: ${error.message}`);
            return [];
        }
    }

    /**
     * 读取final_analysis.json文件
     */
    readFinalAnalysis(appId) {
        const analysisPath = path.join(this.tmpDir, appId, 'final_analysis.json');
        try {
            if (!fs.existsSync(analysisPath)) {
                console.warn(`文件不存在: ${analysisPath}`);
                return null;
            }

            const content = fs.readFileSync(analysisPath, 'utf8');
            return JSON.parse(content);
        } catch (error) {
            console.error(`读取分析文件失败 ${appId}: ${error.message}`);
            return null;
        }
    }

    /**
     * 立即保存单个切片结果
     */
    saveSliceImmediately(algorithm, appId, sliceIndex, sliceData) {
        const algorithmDir = this.ensureAlgorithmDir(algorithm);
        const fileName = `${appId}_${algorithm}_${sliceIndex}.json`;
        const outputPath = path.join(algorithmDir, fileName);

        const sliceFile = {
            id: `${appId}_${algorithm}_${sliceIndex}`,
            appId,
            algorithm,
            index: sliceIndex,
            timestamp: new Date().toISOString(),
            metadata: sliceData.metadata,
            sourceFile: sliceData.filePath,
            detection: sliceData.detection,
            slice: {
                type: sliceData.slice.type,
                name: sliceData.slice.name,
                range: sliceData.slice.range,
                loc: sliceData.slice.loc,
                code: sliceData.slice.code,
                lineCount: sliceData.slice.loc.end.line - sliceData.slice.loc.start.line + 1
            }
        };

        fs.writeFileSync(outputPath, JSON.stringify(sliceFile, null, 2));
        console.log(`✅ 保存切片: ${fileName}`);

        // 更新统计信息
        this.stats.totalSlices++;
        this.stats.algorithms.add(algorithm);
        if (!this.stats.algorithmStats[algorithm]) {
            this.stats.algorithmStats[algorithm] = { count: 0, apps: new Set() };
        }
        this.stats.algorithmStats[algorithm].count++;
        this.stats.algorithmStats[algorithm].apps.add(appId);

        return fileName;
    }

    /**
     * 处理单个文件的代码切片 - 流式处理
     */
    async processFileSlicingStream(filePath, detectionResults, algorithm, appId) {
        try {
            if (!fs.existsSync(filePath)) {
                console.warn(`源文件不存在: ${filePath}`);
                return [];
            }

            const code = fs.readFileSync(filePath, 'utf8');
            const savedFiles = [];
            let sliceIndex = 0;

            for (const detection of detectionResults) {
                try {
                    // 将行列位置转换为字符偏移
                    const lines = code.split('\n');
                    let startOffset = 0;

                    for (let i = 0; i < detection.position.start.line - 1; i++) {
                        startOffset += lines[i].length + 1;
                    }
                    startOffset += detection.position.start.column - 1;

                    let endOffset = 0;
                    for (let i = 0; i < detection.position.end.line - 1; i++) {
                        endOffset += lines[i].length + 1;
                    }
                    endOffset += detection.position.end.column - 1;

                    const position = {
                        start: startOffset,
                        end: endOffset
                    };

                    // 使用代码切片工具
                    const sliceResult = findContainingFunction(code, position);

                    if (sliceResult) {
                        const sliceData = {
                            appId,
                            filePath,
                            detection,
                            slice: sliceResult,
                            metadata: {
                                variable: detection.variable,
                                type: detection.type,
                                confidence: detection.confidence,
                                source: detection.source
                            }
                        };

                        // 立即保存切片
                        const fileName = this.saveSliceImmediately(algorithm, appId, sliceIndex, sliceData);
                        savedFiles.push(fileName);
                        sliceIndex++;

                        console.log(`✅ 成功切片 ${algorithm} - ${appId}: ${detection.type}`);
                    } else {
                        console.warn(`⚠️  切片失败 ${algorithm} - ${appId}: ${detection.type}`);
                    }
                } catch (error) {
                    console.error(`处理检测结果失败: ${error.message}`);
                }
            }

            // 立即保存app级别汇总
            if (savedFiles.length > 0) {
                this.saveAppSummaryImmediately(algorithm, appId, savedFiles);
            }

            return savedFiles;
        } catch (error) {
            console.error(`处理文件切片失败 ${filePath}: ${error.message}`);
            return [];
        }
    }

    /**
     * 立即保存app级别汇总
     */
    saveAppSummaryImmediately(algorithm, appId, savedFiles) {
        const algorithmDir = this.ensureAlgorithmDir(algorithm);
        const summaryFileName = `${appId}_${algorithm}_summary.json`;
        const summaryPath = path.join(algorithmDir, summaryFileName);

        const appSummary = {
            appId,
            algorithm,
            totalSlices: savedFiles.length,
            timestamp: new Date().toISOString(),
            sliceFiles: savedFiles
        };

        fs.writeFileSync(summaryPath, JSON.stringify(appSummary, null, 2));
        console.log(`📋 保存app汇总: ${summaryFileName}`);
    }

    /**
     * 处理单个app - 流式处理
     */
    async processAppStream(appId) {
        console.log(`\n🔄 处理 ${appId}...`);
        const analysis = this.readFinalAnalysis(appId);

        if (!analysis || !analysis.analyzed_files) {
            console.warn(`⚠️  跳过 ${appId}: 无有效分析数据`);
            return;
        }

        // 处理每个分析文件
        for (const fileAnalysis of analysis.analyzed_files) {
            if (!fileAnalysis.analysis.success || !fileAnalysis.analysis.results.detailed_results) {
                continue;
            }

            const detailedResults = fileAnalysis.analysis.results.detailed_results;

            // 按算法处理
            for (const algorithm of Object.keys(detailedResults)) {
                await this.processFileSlicingStream(
                    fileAnalysis.file_path,
                    detailedResults[algorithm],
                    algorithm,
                    appId
                );
            }
        }

        this.stats.processedApps++;
        console.log(`✅ 完成 ${appId}`);
    }

    /**
     * 生成最终汇总报告
     */
    generateFinalReport() {
        // 生成算法级别汇总
        for (const algorithm of this.stats.algorithms) {
            const algorithmDir = path.join(this.outputDir, algorithm);
            const summaryPath = path.join(algorithmDir, `${algorithm}_overall_summary.json`);

            const algorithmSummary = {
                algorithm,
                totalSlices: this.stats.algorithmStats[algorithm].count,
                totalApps: this.stats.algorithmStats[algorithm].apps.size,
                timestamp: new Date().toISOString(),
                apps: Array.from(this.stats.algorithmStats[algorithm].apps)
            };

            fs.writeFileSync(summaryPath, JSON.stringify(algorithmSummary, null, 2));
            console.log(`📊 生成算法汇总: ${algorithm}_overall_summary.json`);
        }

        // 生成全局报告
        const reportPath = path.join(this.outputDir, 'analysis_report.json');
        const report = {
            timestamp: new Date().toISOString(),
            processedApps: this.stats.processedApps,
            algorithms: Array.from(this.stats.algorithms),
            totalSlices: this.stats.totalSlices,
            algorithmStats: Object.keys(this.stats.algorithmStats).map(algorithm => ({
                algorithm,
                sliceCount: this.stats.algorithmStats[algorithm].count,
                appCount: this.stats.algorithmStats[algorithm].apps.size
            })),
            fileStructure: {
                description: "流式处理，每个切片立即保存，命名格式: {appId}_{algorithm}_{index}.json",
                memoryOptimized: true
            }
        };

        fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
        console.log(`📈 生成全局报告: analysis_report.json`);
    }

    /**
     * 主要分析流程 - 流式处理
     */
    async analyze() {
        console.log('🚀 开始流式批量分析...');

        const appIdFolders = this.getAppIdFolders();
        if (appIdFolders.length === 0) {
            console.log('❌ 没有找到app_id文件夹');
            return;
        }

        // 流式处理每个app
        for (const appId of appIdFolders) {
            await this.processAppStream(appId);

            // 可选：每处理一定数量的app后强制垃圾回收
            if (this.stats.processedApps % 10 === 0 && global.gc) {
                global.gc();
                console.log(`🧹 执行垃圾回收 (已处理 ${this.stats.processedApps} 个app)`);
            }
        }

        // 生成最终报告
        this.generateFinalReport();

        console.log('\n🎉 流式批量分析完成!');
        console.log(`📊 统计信息:`);
        console.log(`   - 处理的app数量: ${this.stats.processedApps}`);
        console.log(`   - 总切片数量: ${this.stats.totalSlices}`);
        console.log(`   - 发现的算法: ${Array.from(this.stats.algorithms).join(', ')}`);

        return this.stats;
    }
}

// 导出和执行
module.exports = BatchAnalyzer;

// 如果直接运行此文件
if (require.main === module) {
    const analyzer = new BatchAnalyzer();
    analyzer.analyze().catch(console.error);
}