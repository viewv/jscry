const fs = require('fs');
const path = require('path');
const { detectCryptoConstantsStatic } = require('./src/checker/constant_detect_static');

/**
 * 分析单个JavaScript文件以检测加密常量（静态版本）
 * @param {string} inputFile - 输入文件路径
 * @param {string} outputFile - 输出文件路径
 */
function analyzeFile(inputFile, outputFile) {
    try {
        console.log('开始静态分析文件:', inputFile);

        // 读取文件内容
        const code = fs.readFileSync(inputFile, 'utf8');

        // 检测加密常量
        const results = detectCryptoConstantsStatic(code);

        // 格式化结果
        const output = {
            file: inputFile,
            timestamp: new Date().toISOString(),
            analysisMethod: 'static',
            success: results.detected.length > 0,
            results: {
                detected_count: results.detected.length,
                algorithms: results.detected.map(d => d.algorithm),
                detailed_results: results.constants
            }
        };

        // 保存结果
        if (outputFile) {
            fs.writeFileSync(outputFile, JSON.stringify(output, null, 2));
            console.log('静态分析结果已保存到:', outputFile);
        } else {
            // 如果没有指定输出文件，生成默认文件名
            const defaultOutput = inputFile.replace(/\\.js$/, '.crypto-analysis.json');
            fs.writeFileSync(defaultOutput, JSON.stringify(output, null, 2));
            console.log('静态分析结果已保存到:', defaultOutput);
        }

        return output;
    } catch (error) {
        console.error('静态分析失败:', error.message);

        const errorOutput = {
            file: inputFile,
            timestamp: new Date().toISOString(),
            analysisMethod: 'static',
            success: false,
            error: error.message,
            results: {
                detected_count: 0,
                algorithms: [],
                detailed_results: {}
            }
        };

        if (outputFile) {
            fs.writeFileSync(outputFile, JSON.stringify(errorOutput, null, 2));
        }

        return errorOutput;
    }
}

// 命令行接口
if (require.main === module) {
    const inputFile = process.argv[2];
    const outputFile = process.argv[3];

    if (!inputFile) {
        console.log('用法: node crypto-cli-tool-static.js <输入文件> [输出文件]');
        process.exit(1);
    }

    analyzeFile(inputFile, outputFile);
}

module.exports = { analyzeFile };
