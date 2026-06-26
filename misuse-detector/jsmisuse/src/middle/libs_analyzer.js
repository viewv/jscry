const fs = require('fs');
const path = require('path');

/**
 * Libs analyzer - outputting each algorithm implementation as an independent JS file
 */
class LibsAnalyzer {
    constructor() {
        this.libsDir = path.join(process.cwd(), 'libs');
        this.outputDir = path.join(process.cwd(), 'analysis_output');
        this.stats = {
            totalApps: 0,
            totalAlgorithms: 0,
            totalFiles: 0,
            appAlgorithmMatrix: {},
            algorithmVersions: {}
        };
        this.ensureOutputDir();
    }

    /**
     * Ensure output directory exists
     */
    ensureOutputDir() {
        if (!fs.existsSync(this.outputDir)) {
            fs.mkdirSync(this.outputDir, { recursive: true });
            console.log(`Creating output directory: ${this.outputDir}`);
        }

        // Create subdirectories
        const subDirs = ['by_app', 'by_algorithm', 'reports'];
        subDirs.forEach(dir => {
            const dirPath = path.join(this.outputDir, dir);
            if (!fs.existsSync(dirPath)) {
                fs.mkdirSync(dirPath, { recursive: true });
            }
        });
    }

    /**
     * Get all algorithm directories
     */
    getAlgorithmDirs() {
        try {
            return fs.readdirSync(this.libsDir, { withFileTypes: true })
                .filter(dirent => dirent.isDirectory())
                .map(dirent => dirent.name);
        } catch (error) {
            console.error(`Failed to read libs directory: ${error.message}`);
            return [];
        }
    }

    /**
     * Read all slice files in the algorithm directory
     */
    readSliceFiles(algorithm) {
        const algorithmDir = path.join(this.libsDir, algorithm);
        const sliceFiles = [];

        try {
            const files = fs.readdirSync(algorithmDir)
                .filter(file => file.endsWith('.json') && !file.includes('summary'));

            for (const file of files) {
                const filePath = path.join(algorithmDir, file);
                try {
                    const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
                    if (content.slice && content.slice.code) {
                        sliceFiles.push({
                            fileName: file,
                            ...content
                        });
                    }
                } catch (error) {
                    console.warn(`Failed to read file ${file}: ${error.message}`);
                }
            }
        } catch (error) {
            console.error(`Failed to read algorithm directory ${algorithm}: ${error.message}`);
        }

        return sliceFiles;
    }

    /**
     * Generate code deduplication hash
     */
    generateCodeHash(code) {
        // Simple code standardization and hashing
        const normalized = code
            .replace(/\s+/g, ' ')
            .replace(/\/\*[\s\S]*?\*\//g, '')
            .replace(/\/\/.*$/gm, '')
            .trim();

        // Simple hash function
        let hash = 0;
        for (let i = 0; i < normalized.length; i++) {
            const char = normalized.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // Convert to 32-bit integer
        }
        return hash.toString(36);
    }

    /**
     * Generate JS file for a single algorithm implementation
     */
    generateSingleAlgorithmFile(slice, versionIndex) {
        const { appId, algorithm } = slice;
        const codeHash = this.generateCodeHash(slice.slice.code);

        // Create App directory
        const appDir = path.join(this.outputDir, 'by_app', appId);
        if (!fs.existsSync(appDir)) {
            fs.mkdirSync(appDir, { recursive: true });
        }

        // Create algorithm directory
        const algorithmDir = path.join(this.outputDir, 'by_algorithm', algorithm);
        if (!fs.existsSync(algorithmDir)) {
            fs.mkdirSync(algorithmDir, { recursive: true });
        }

        // Generate file name
        const baseFileName = `${appId}_${algorithm}_v${versionIndex}_${codeHash.substring(0, 6)}`;

        // Generate JS file content
        const jsContent = this.generateJSFileContent(slice, versionIndex, codeHash);

        // Save to by_app directory
        const appFilePath = path.join(appDir, `${baseFileName}.js`);
        fs.writeFileSync(appFilePath, jsContent);

        // Save to by_algorithm directory
        const algorithmFilePath = path.join(algorithmDir, `${baseFileName}.js`);
        fs.writeFileSync(algorithmFilePath, jsContent);

        console.log(`✅ Generated algorithm file: ${baseFileName}.js`);

        this.stats.totalFiles++;

        return {
            fileName: `${baseFileName}.js`,
            appId,
            algorithm,
            version: versionIndex,
            codeHash,
            appFilePath,
            algorithmFilePath,
            lineCount: slice.slice.lineCount || 0,
            sourceFile: slice.sourceFile
        };
    }

    /**
     * Generate JS file content
     */
    generateJSFileContent(slice, versionIndex, codeHash) {
        const { appId, algorithm } = slice;

        let content = `/**\n`;
        content += ` * ${algorithm} algorithm implementation\n`;
        content += ` * App ID: ${appId}\n`;
        content += ` * Version: v${versionIndex}\n`;
        content += ` * Code hash: ${codeHash}\n`;
        content += ` * Source file: ${slice.sourceFile}\n`;
        content += ` * Detection type: ${slice.detection.type}\n`;
        content += ` * Confidence: ${slice.detection.confidence}\n`;
        content += ` * Function name: ${slice.slice.name || 'anonymous'}\n`;
        content += ` * Line count: ${slice.slice.lineCount || 0}\n`;
        content += ` * Generated time: ${new Date().toISOString()}\n`;
        content += ` */\n\n`;

        // Directly output original code
        content += slice.slice.code;

        // Add metadata comments
        content += `\n\n// ==================== Metadata ====================\n`;
        content += `// This file contains the ${algorithm} algorithm implementation extracted from ${appId}\n`;
        content += `// Detection position: lines ${slice.detection.position.start.line}-${slice.detection.position.end.line}\n`;
        content += `// Variable name: ${slice.detection.variable}\n`;
        content += `// Detection source: ${slice.detection.source || 'unknown'}\n`;

        return content;
    }

    /**
     * Group slices by App
     */
    groupSlicesByApp(slices) {
        const grouped = {};

        slices.forEach(slice => {
            const appId = slice.appId;
            if (!grouped[appId]) {
                grouped[appId] = [];
            }
            grouped[appId].push(slice);
        });

        return grouped;
    }

    /**
     * Process all slices of a single algorithm
     */
    processAlgorithmSlices(algorithm, slices) {
        console.log(`\n🔄 Processing algorithm: ${algorithm} (${slices.length} slices)`);

        const processedFiles = [];
        const seenHashes = new Set();
        let versionIndex = 1;

        // Group by App
        const appGroups = this.groupSlicesByApp(slices);

        for (const [appId, appSlices] of Object.entries(appGroups)) {
            console.log(`  📱 Processing App: ${appId} (${appSlices.length} slices)`);

            for (const slice of appSlices) {
                const codeHash = this.generateCodeHash(slice.slice.code);

                // Skip duplicate code
                if (seenHashes.has(codeHash)) {
                    console.log(`    ⏭️  Skip duplicate code: ${codeHash.substring(0, 6)}`);
                    continue;
                }

                seenHashes.add(codeHash);

                // Generate independent JS file
                const fileInfo = this.generateSingleAlgorithmFile(slice, versionIndex);
                processedFiles.push(fileInfo);

                // Update stats
                if (!this.stats.appAlgorithmMatrix[appId]) {
                    this.stats.appAlgorithmMatrix[appId] = [];
                }
                if (!this.stats.appAlgorithmMatrix[appId].includes(algorithm)) {
                    this.stats.appAlgorithmMatrix[appId].push(algorithm);
                }

                versionIndex++;
            }
        }

        // Update algorithm version stats
        this.stats.algorithmVersions[algorithm] = {
            totalVersions: processedFiles.length,
            appCount: Object.keys(appGroups).length,
            apps: Object.keys(appGroups)
        };

        console.log(`  ✅ ${algorithm} processing completed: ${processedFiles.length} versions`);
        return processedFiles;
    }

    /**
     * Generate algorithm summary report
     */
    generateAlgorithmSummary(algorithm, processedFiles) {
        const summaryPath = path.join(this.outputDir, 'reports', `${algorithm}_summary.json`);

        const summary = {
            algorithm,
            totalVersions: processedFiles.length,
            totalApps: this.stats.algorithmVersions[algorithm].appCount,
            timestamp: new Date().toISOString(),
            versions: processedFiles.map(file => ({
                fileName: file.fileName,
                appId: file.appId,
                version: file.version,
                codeHash: file.codeHash,
                lineCount: file.lineCount,
                sourceFile: file.sourceFile
            }))
        };

        fs.writeFileSync(summaryPath, JSON.stringify(summary, null, 2));
        console.log(`📊 Generated algorithm summary: ${algorithm}_summary.json`);
    }

    /**
     * Generate global analysis report
     */
    generateGlobalReport() {
        const reportPath = path.join(this.outputDir, 'reports', 'global_analysis.json');

        const report = {
            timestamp: new Date().toISOString(),
            summary: {
                totalApps: Object.keys(this.stats.appAlgorithmMatrix).length,
                totalAlgorithms: this.stats.totalAlgorithms,
                totalFiles: this.stats.totalFiles
            },
            appAlgorithmMatrix: this.stats.appAlgorithmMatrix,
            algorithmVersions: this.stats.algorithmVersions,
            fileStructure: {
                description: "Each algorithm implementation is output as an independent JS file",
                byApp: "analysis_output/by_app/{appId}/{appId}_{algorithm}_v{version}_{hash}.js",
                byAlgorithm: "analysis_output/by_algorithm/{algorithm}/{appId}_{algorithm}_v{version}_{hash}.js",
                reports: "analysis_output/reports/"
            }
        };

        fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
        console.log(`📈 Generated global report: global_analysis.json`);

        // Generate Markdown report
        this.generateMarkdownReport(report);
    }

    /**
     * Generate Markdown report
     */
    generateMarkdownReport(report) {
        const reportPath = path.join(this.outputDir, 'reports', 'analysis_report.md');

        let content = `# 算法库分析报告\n\n`;
        content += `生成时间: ${report.timestamp}\n\n`;

        content += `## 概览\n\n`;
        content += `- 总App数量: ${report.summary.totalApps}\n`;
        content += `- 总算法数量: ${report.summary.totalAlgorithms}\n`;
        content += `- 总文件数量: ${report.summary.totalFiles}\n\n`;

        content += `## 算法版本统计\n\n`;
        Object.entries(report.algorithmVersions).forEach(([algorithm, stats]) => {
            content += `### ${algorithm}\n`;
            content += `- 使用的App数量: ${stats.appCount}\n`;
            content += `- 总版本数: ${stats.totalVersions}\n`;
            content += `- 平均每App版本数: ${(stats.totalVersions / stats.appCount).toFixed(2)}\n`;
            content += `- 使用的App: ${stats.apps.join(', ')}\n\n`;
        });

        content += `## App算法矩阵\n\n`;
        content += `| AppID | 算法数量 | 使用的算法 |\n`;
        content += `|-------|----------|------------|\n`;
        Object.entries(report.appAlgorithmMatrix).forEach(([appId, algorithms]) => {
            content += `| ${appId} | ${algorithms.length} | ${algorithms.join(', ')} |\n`;
        });

        content += `\n## 文件结构说明\n\n`;
        content += `每个算法实现都输出为独立的JS文件，文件命名格式：\n`;
        content += `\`{appId}_{algorithm}_v{version}_{hash}.js\`\n\n`;
        content += `- \`appId\`: 小程序ID\n`;
        content += `- \`algorithm\`: 算法名称\n`;
        content += `- \`version\`: 版本号\n`;
        content += `- \`hash\`: 代码哈希值前6位\n`;

        fs.writeFileSync(reportPath, content);
        console.log(`📝 Generated Markdown report: analysis_report.md`);
    }

    /**
     * Main analysis process
     */
    async analyze() {
        console.log('🚀 Starting analysis of libs directory...');

        const algorithms = this.getAlgorithmDirs();
        if (algorithms.length === 0) {
            console.log('❌ No algorithm directory found');
            return;
        }

        console.log(`📁 Found ${algorithms.length} algorithms: ${algorithms.join(', ')}`);
        this.stats.totalAlgorithms = algorithms.length;

        // Process each algorithm
        for (const algorithm of algorithms) {
            const slices = this.readSliceFiles(algorithm);
            if (slices.length === 0) {
                console.warn(`⚠️  Algorithm ${algorithm} has no valid slice files`);
                continue;
            }

            const processedFiles = this.processAlgorithmSlices(algorithm, slices);
            this.generateAlgorithmSummary(algorithm, processedFiles);
        }

        // Generate global report
        this.generateGlobalReport();

        console.log('\n🎉 Analysis completed!');
        console.log(`📊 Statistics:`);
        console.log(`   - Processed algorithms: ${this.stats.totalAlgorithms}`);
        console.log(`   - Involved apps: ${Object.keys(this.stats.appAlgorithmMatrix).length}`);
        console.log(`   - Generated files: ${this.stats.totalFiles}`);
        console.log(`   - File structure:`);
        console.log(`     * analysis_output/by_app/{appId}/{appId}_{algorithm}_v{version}_{hash}.js`);
        console.log(`     * analysis_output/by_algorithm/{algorithm}/{appId}_{algorithm}_v{version}_{hash}.js`);
        console.log(`     * analysis_output/reports/`);

        return this.stats;
    }
}

// 导出和执行
module.exports = LibsAnalyzer;

// If running this file directly
if (require.main === module) {
    const analyzer = new LibsAnalyzer();
    analyzer.analyze().catch(console.error);
}