const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');

/**
 * Use webcrack to unpack Webpack/Rollup Bundle files
 * @param {string} filePath - Input JS Bundle file path
 * @param {string} outputDir - Output directory
 * @returns {Promise<{success: boolean, outputDir: string, error: string|null}>}
 */
function unpackBundle(filePath, outputDir) {
    return new Promise((resolve) => {
        const absoluteFilePath = path.resolve(filePath);
        const absoluteOutputDir = path.resolve(outputDir);

        console.log(`[unpacker] Start unpacking: ${absoluteFilePath}`);
        console.log(`[unpacker] Output directory: ${absoluteOutputDir}`);

        // Ensure output directory exists
        if (!fs.existsSync(absoluteOutputDir)) {
            fs.mkdirSync(absoluteOutputDir, { recursive: true });
        }

        // Build command
        // -f means force overwrite if the output directory already exists
        const cmd = `npx -y webcrack -o "${absoluteOutputDir}" -f "${absoluteFilePath}"`;

        exec(cmd, (error, stdout, stderr) => {
            if (error) {
                console.error(`[unpacker] Unpacking failed: ${error.message}`);
                console.error(`[unpacker] stderr: ${stderr}`);
                return resolve({
                    success: false,
                    outputDir: absoluteOutputDir,
                    error: error.message
                });
            }

            console.log(`[unpacker] Unpacking successful!`);
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

// Example usage: node src/utils/unpacker.js <filePath> [outputDir]
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
