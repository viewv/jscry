const fs = require('fs');
const path = require('path');
const { findContainingFunction } = require('./slice_code');

/**
 * Batch analysis tool - stream processing version, avoiding memory overflow
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
     * Ensure output directory exists
     */
    ensureOutputDir() {
        if (!fs.existsSync(this.outputDir)) {
            fs.mkdirSync(this.outputDir, { recursive: true });
            console.log(`Creating output directory: ${this.outputDir}`);
        }
    }

    /**
     * Ensure algorithm directory exists
     */
    ensureAlgorithmDir(algorithm) {
        const algorithmDir = path.join(this.outputDir, algorithm);
        if (!fs.existsSync(algorithmDir)) {
            fs.mkdirSync(algorithmDir, { recursive: true });
            console.log(`Creating algorithm directory: ${algorithmDir}`);
        }
        return algorithmDir;
    }

    /**
     * Get all app_id folders
     */
    getAppIdFolders() {
        try {
            const folders = fs.readdirSync(this.tmpDir, { withFileTypes: true })
                .filter(dirent => dirent.isDirectory())
                .map(dirent => dirent.name)
                .filter(name => name.startsWith('wx'));

            console.log(`Found ${folders.length} app_id folders`);
            return folders;
        } catch (error) {
            console.error(`Failed to read tmp directory: ${error.message}`);
            return [];
        }
    }

    /**
     * Read final_analysis.json file
     */
    readFinalAnalysis(appId) {
        const analysisPath = path.join(this.tmpDir, appId, 'final_analysis.json');
        try {
            if (!fs.existsSync(analysisPath)) {
                console.warn(`File does not exist: ${analysisPath}`);
                return null;
            }

            const content = fs.readFileSync(analysisPath, 'utf8');
            return JSON.parse(content);
        } catch (error) {
            console.error(`Failed to read analysis file for ${appId}: ${error.message}`);
            return null;
        }
    }

    /**
     * Save a single slice result immediately
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
        console.log(`✅ Slice saved: ${fileName}`);

        // Update stats
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
     * Process code slicing of a single file - stream processing
     */
    async processFileSlicingStream(filePath, detectionResults, algorithm, appId) {
        try {
            if (!fs.existsSync(filePath)) {
                console.warn(`Source file does not exist: ${filePath}`);
                return [];
            }

            const code = fs.readFileSync(filePath, 'utf8');
            const savedFiles = [];
            let sliceIndex = 0;

            for (const detection of detectionResults) {
                try {
                    // Convert row/column positions to character offsets
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

                    // Use code slicing tool
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

                        // Save slice immediately
                        const fileName = this.saveSliceImmediately(algorithm, appId, sliceIndex, sliceData);
                        savedFiles.push(fileName);
                        sliceIndex++;

                        console.log(`✅ Sliced successfully ${algorithm} - ${appId}: ${detection.type}`);
                    } else {
                        console.warn(`⚠️  Slicing failed ${algorithm} - ${appId}: ${detection.type}`);
                    }
                } catch (error) {
                    console.error(`Failed to process detection result: ${error.message}`);
                }
            }

            // Save app-level summary immediately
            if (savedFiles.length > 0) {
                this.saveAppSummaryImmediately(algorithm, appId, savedFiles);
            }

            return savedFiles;
        } catch (error) {
            console.error(`Failed to process file slice for ${filePath}: ${error.message}`);
            return [];
        }
    }

    /**
     * Save app-level summary immediately
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
        console.log(`📋 App summary saved: ${summaryFileName}`);
    }

    /**
     * Process a single app - stream processing
     */
    async processAppStream(appId) {
        console.log(`\n🔄 Processing ${appId}...`);
        const analysis = this.readFinalAnalysis(appId);

        if (!analysis || !analysis.analyzed_files) {
            console.warn(`⚠️  Skipping ${appId}: No valid analysis data`);
            return;
        }

        // Process each analysis file
        for (const fileAnalysis of analysis.analyzed_files) {
            if (!fileAnalysis.analysis.success || !fileAnalysis.analysis.results.detailed_results) {
                continue;
            }

            const detailedResults = fileAnalysis.analysis.results.detailed_results;

            // Process by algorithm
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
        console.log(`✅ Finished ${appId}`);
    }

    /**
     * Generate final summary report
     */
    generateFinalReport() {
        // Generate algorithm-level summary
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
            console.log(`📊 Generated algorithm summary: ${algorithm}_overall_summary.json`);
        }

        // Generate global report
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
                description: "Stream processing, each slice saved immediately, naming format: {appId}_{algorithm}_{index}.json",
                memoryOptimized: true
            }
        };

        fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
        console.log(`📈 Generated global report: analysis_report.json`);
    }

    /**
     * Main analysis pipeline - stream processing
     */
    async analyze() {
        console.log('🚀 Starting stream batch analysis...');

        const appIdFolders = this.getAppIdFolders();
        if (appIdFolders.length === 0) {
            console.log('❌ No app_id folder found');
            return;
        }

        // Process each app in a stream
        for (const appId of appIdFolders) {
            await this.processAppStream(appId);

            // Optional: force garbage collection after processing a certain number of apps
            if (this.stats.processedApps % 10 === 0 && global.gc) {
                global.gc();
                console.log(`🧹 Performing garbage collection (processed ${this.stats.processedApps} apps)`);
            }
        }

        // Generate final report
        this.generateFinalReport();

        console.log('\n🎉 Stream batch analysis completed!');
        console.log(`📊 Statistics:`);
        console.log(`   - Number of processed apps: ${this.stats.processedApps}`);
        console.log(`   - Total slice count: ${this.stats.totalSlices}`);
        console.log(`   - Algorithms discovered: ${Array.from(this.stats.algorithms).join(', ')}`);

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