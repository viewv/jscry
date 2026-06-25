const fs = require('fs');
const path = require('path');

/**
 * Libs分析器 - 每个算法实现输出为独立JS文件
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
     * 确保输出目录存在
     */
    ensureOutputDir() {
        if (!fs.existsSync(this.outputDir)) {
            fs.mkdirSync(this.outputDir, { recursive: true });
            console.log(`创建输出目录: ${this.outputDir}`);
        }

        // 创建子目录
        const subDirs = ['by_app', 'by_algorithm', 'reports'];
        subDirs.forEach(dir => {
            const dirPath = path.join(this.outputDir, dir);
            if (!fs.existsSync(dirPath)) {
                fs.mkdirSync(dirPath, { recursive: true });
            }
        });
    }

    /**
     * 获取所有算法目录
     */
    getAlgorithmDirs() {
        try {
            return fs.readdirSync(this.libsDir, { withFileTypes: true })
                .filter(dirent => dirent.isDirectory())
                .map(dirent => dirent.name);
        } catch (error) {
            console.error(`读取libs目录失败: ${error.message}`);
            return [];
        }
    }

    /**
     * 读取算法目录下的所有切片文件
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
                    console.warn(`读取文件失败 ${file}: ${error.message}`);
                }
            }
        } catch (error) {
            console.error(`读取算法目录失败 ${algorithm}: ${error.message}`);
        }

        return sliceFiles;
    }

    /**
     * 生成代码去重哈希
     */
    generateCodeHash(code) {
        // 简单的代码标准化和哈希
        const normalized = code
            .replace(/\s+/g, ' ')
            .replace(/\/\*[\s\S]*?\*\//g, '')
            .replace(/\/\/.*$/gm, '')
            .trim();

        // 简单哈希函数
        let hash = 0;
        for (let i = 0; i < normalized.length; i++) {
            const char = normalized.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // 转换为32位整数
        }
        return hash.toString(36);
    }

    /**
     * 生成单个算法实现的JS文件
     */
    generateSingleAlgorithmFile(slice, versionIndex) {
        const { appId, algorithm } = slice;
        const codeHash = this.generateCodeHash(slice.slice.code);

        // 创建App目录
        const appDir = path.join(this.outputDir, 'by_app', appId);
        if (!fs.existsSync(appDir)) {
            fs.mkdirSync(appDir, { recursive: true });
        }

        // 创建算法目录
        const algorithmDir = path.join(this.outputDir, 'by_algorithm', algorithm);
        if (!fs.existsSync(algorithmDir)) {
            fs.mkdirSync(algorithmDir, { recursive: true });
        }

        // 生成文件名
        const baseFileName = `${appId}_${algorithm}_v${versionIndex}_${codeHash.substring(0, 6)}`;

        // 生成JS文件内容
        const jsContent = this.generateJSFileContent(slice, versionIndex, codeHash);

        // 保存到by_app目录
        const appFilePath = path.join(appDir, `${baseFileName}.js`);
        fs.writeFileSync(appFilePath, jsContent);

        // 保存到by_algorithm目录
        const algorithmFilePath = path.join(algorithmDir, `${baseFileName}.js`);
        fs.writeFileSync(algorithmFilePath, jsContent);

        console.log(`✅ 生成算法文件: ${baseFileName}.js`);

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
     * 生成JS文件内容
     */
    generateJSFileContent(slice, versionIndex, codeHash) {
        const { appId, algorithm } = slice;

        let content = `/**\n`;
        content += ` * ${algorithm} 算法实现\n`;
        content += ` * App ID: ${appId}\n`;
        content += ` * 版本: v${versionIndex}\n`;
        content += ` * 代码哈希: ${codeHash}\n`;
        content += ` * 来源文件: ${slice.sourceFile}\n`;
        content += ` * 检测类型: ${slice.detection.type}\n`;
        content += ` * 置信度: ${slice.detection.confidence}\n`;
        content += ` * 函数名: ${slice.slice.name || 'anonymous'}\n`;
        content += ` * 行数: ${slice.slice.lineCount || 0}\n`;
        content += ` * 生成时间: ${new Date().toISOString()}\n`;
        content += ` */\n\n`;

        // 直接输出原始代码
        content += slice.slice.code;

        // 添加元数据注释
        content += `\n\n// ==================== 元数据 ====================\n`;
        content += `// 此文件包含从 ${appId} 提取的 ${algorithm} 算法实现\n`;
        content += `// 检测位置: 行 ${slice.detection.position.start.line}-${slice.detection.position.end.line}\n`;
        content += `// 变量名: ${slice.detection.variable}\n`;
        content += `// 检测源: ${slice.detection.source || 'unknown'}\n`;

        return content;
    }

    /**
     * 按App分组切片
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
     * 处理单个算法的所有切片
     */
    processAlgorithmSlices(algorithm, slices) {
        console.log(`\n🔄 处理算法: ${algorithm} (${slices.length} 个切片)`);

        const processedFiles = [];
        const seenHashes = new Set();
        let versionIndex = 1;

        // 按App分组
        const appGroups = this.groupSlicesByApp(slices);

        for (const [appId, appSlices] of Object.entries(appGroups)) {
            console.log(`  📱 处理App: ${appId} (${appSlices.length} 个切片)`);

            for (const slice of appSlices) {
                const codeHash = this.generateCodeHash(slice.slice.code);

                // 跳过重复的代码
                if (seenHashes.has(codeHash)) {
                    console.log(`    ⏭️  跳过重复代码: ${codeHash.substring(0, 6)}`);
                    continue;
                }

                seenHashes.add(codeHash);

                // 生成独立的JS文件
                const fileInfo = this.generateSingleAlgorithmFile(slice, versionIndex);
                processedFiles.push(fileInfo);

                // 更新统计信息
                if (!this.stats.appAlgorithmMatrix[appId]) {
                    this.stats.appAlgorithmMatrix[appId] = [];
                }
                if (!this.stats.appAlgorithmMatrix[appId].includes(algorithm)) {
                    this.stats.appAlgorithmMatrix[appId].push(algorithm);
                }

                versionIndex++;
            }
        }

        // 更新算法版本统计
        this.stats.algorithmVersions[algorithm] = {
            totalVersions: processedFiles.length,
            appCount: Object.keys(appGroups).length,
            apps: Object.keys(appGroups)
        };

        console.log(`  ✅ ${algorithm} 处理完成: ${processedFiles.length} 个版本`);
        return processedFiles;
    }

    /**
     * 生成算法汇总报告
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
        console.log(`📊 生成算法汇总: ${algorithm}_summary.json`);
    }

    /**
     * 生成全局分析报告
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
                description: "每个算法实现输出为独立JS文件",
                byApp: "analysis_output/by_app/{appId}/{appId}_{algorithm}_v{version}_{hash}.js",
                byAlgorithm: "analysis_output/by_algorithm/{algorithm}/{appId}_{algorithm}_v{version}_{hash}.js",
                reports: "analysis_output/reports/"
            }
        };

        fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
        console.log(`📈 生成全局报告: global_analysis.json`);

        // 生成Markdown报告
        this.generateMarkdownReport(report);
    }

    /**
     * 生成Markdown报告
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
        console.log(`📝 生成Markdown报告: analysis_report.md`);
    }

    /**
     * 主要分析流程
     */
    async analyze() {
        console.log('🚀 开始分析libs目录...');

        const algorithms = this.getAlgorithmDirs();
        if (algorithms.length === 0) {
            console.log('❌ 没有找到算法目录');
            return;
        }

        console.log(`📁 找到 ${algorithms.length} 个算法: ${algorithms.join(', ')}`);
        this.stats.totalAlgorithms = algorithms.length;

        // 处理每个算法
        for (const algorithm of algorithms) {
            const slices = this.readSliceFiles(algorithm);
            if (slices.length === 0) {
                console.warn(`⚠️  算法 ${algorithm} 没有有效的切片文件`);
                continue;
            }

            const processedFiles = this.processAlgorithmSlices(algorithm, slices);
            this.generateAlgorithmSummary(algorithm, processedFiles);
        }

        // 生成全局报告
        this.generateGlobalReport();

        console.log('\n🎉 分析完成!');
        console.log(`📊 统计信息:`);
        console.log(`   - 处理的算法: ${this.stats.totalAlgorithms}`);
        console.log(`   - 涉及的App: ${Object.keys(this.stats.appAlgorithmMatrix).length}`);
        console.log(`   - 生成的文件: ${this.stats.totalFiles}`);
        console.log(`   - 文件结构:`);
        console.log(`     * analysis_output/by_app/{appId}/{appId}_{algorithm}_v{version}_{hash}.js`);
        console.log(`     * analysis_output/by_algorithm/{algorithm}/{appId}_{algorithm}_v{version}_{hash}.js`);
        console.log(`     * analysis_output/reports/`);

        return this.stats;
    }
}

// 导出和执行
module.exports = LibsAnalyzer;

// 如果直接运行此文件
if (require.main === module) {
    const analyzer = new LibsAnalyzer();
    analyzer.analyze().catch(console.error);
}