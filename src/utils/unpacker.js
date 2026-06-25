const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');

/**
 * 使用 webcrack 解包 Webpack/Rollup Bundle 文件
 * @param {string} filePath - 输入的 JS Bundle 文件路径
 * @param {string} outputDir - 输出目录
 * @returns {Promise<{success: boolean, outputDir: string, error: string|null}>}
 */
function unpackBundle(filePath, outputDir) {
    return new Promise((resolve) => {
        const absoluteFilePath = path.resolve(filePath);
        const absoluteOutputDir = path.resolve(outputDir);

        console.log(`[unpacker] 开始解包: ${absoluteFilePath}`);
        console.log(`[unpacker] 输出目录: ${absoluteOutputDir}`);

        // 确保输出目录存在
        if (!fs.existsSync(absoluteOutputDir)) {
            fs.mkdirSync(absoluteOutputDir, { recursive: true });
        }

        // 构建命令
        // -f 表示如果输出目录已存在则强制覆盖
        const cmd = `npx -y webcrack -o "${absoluteOutputDir}" -f "${absoluteFilePath}"`;

        exec(cmd, (error, stdout, stderr) => {
            if (error) {
                console.error(`[unpacker] 解包失败: ${error.message}`);
                console.error(`[unpacker] stderr: ${stderr}`);
                return resolve({
                    success: false,
                    outputDir: absoluteOutputDir,
                    error: error.message
                });
            }

            console.log(`[unpacker] 解包成功!`);
            if (stdout) console.log(`[unpacker] stdout: ${stdout}`);

            resolve({
                success: true,
                outputDir: absoluteOutputDir,
                error: null
            });
        });
    });
}

module.exports = {
    unpackBundle
};

// 示例用法: node src/utils/unpacker.js <filePath> [outputDir]
if (require.main === module) {
    const args = process.argv.slice(2);
    if (args.length === 0) {
        console.log('Usage: node src/utils/unpacker.js <filePath> [outputDir]');
        process.exit(1);
    }

    const inputPath = args[0];
    const outputPath = args[1] || path.join(path.dirname(inputPath), 'unpacked_' + path.basename(inputPath, '.js'));

    unpackBundle(inputPath, outputPath).then((res) => {
        if (res.success) {
            console.log(`✅ Unpacked successfully. Output saved to: ${res.outputDir}`);
        } else {
            console.error(`❌ Unpacking failed: ${res.error}`);
        }
    });
}
