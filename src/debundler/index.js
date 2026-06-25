const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');

/**
 * Base Debundler orchestrator to handle JS web bundles.
 * Currently supports Webpack and Browserify via the Webcrack engine.
 * Future bundle formats (Rollup, Parcel, etc.) can be integrated here.
 */
class Debundler {
    /**
     * Debundle a JavaScript file.
     * @param {string} filePath - Path to the bundle JS file.
     * @param {string} outputDir - Directory to output the unpacked modules.
     * @param {Object} options - Custom options for debundling.
     * @returns {Promise<Object>} Debundling result with module lists.
     */
    async debundle(filePath, outputDir, options = {}) {
        // First try the WebcrackEngine (Webpack & Browserify)
        const engine = new WebcrackEngine();
        const webcrackResult = await engine.run(filePath, outputDir, options);
        
        if (webcrackResult.success && webcrackResult.isUnpacked) {
            return webcrackResult;
        }
        
        // If webcrack failed to unpack (or is a different format), run fallback GeneralDebundler
        console.log(`[Debundler] Webcrack did not unpack modules. Running fallback GeneralDebundler...`);
        const { GeneralDebundler } = require('./general_extractor');
        const fallbackEngine = new GeneralDebundler();
        return fallbackEngine.extract(filePath, outputDir);
    }
}

/**
 * Webcrack-based Debundling Engine
 */
class WebcrackEngine {
    /**
     * Run webcrack via NPX CLI.
     * @param {string} filePath - Input bundle file path.
     * @param {string} outputDir - Target output directory.
     * @param {Object} options - Options passed to webcrack.
     * @returns {Promise<Object>} Structured results.
     */
    run(filePath, outputDir, options = {}) {
        return new Promise((resolve) => {
            const absoluteFilePath = path.resolve(filePath);
            const absoluteOutputDir = path.resolve(outputDir);

            if (!fs.existsSync(absoluteFilePath)) {
                return resolve({
                    success: false,
                    error: `Input file not found: ${filePath}`
                });
            }

            // Ensure output directory exists
            if (!fs.existsSync(absoluteOutputDir)) {
                fs.mkdirSync(absoluteOutputDir, { recursive: true });
            }

            // Build command options
            let cmdOpts = '';
            if (options.force !== false) cmdOpts += ' -f'; // force overwrite by default
            if (options.mangle) cmdOpts += ' -m';
            if (options.jsx === false) cmdOpts += ' --no-jsx';
            if (options.unpack === false) cmdOpts += ' --no-unpack';
            if (options.deobfuscate === false) cmdOpts += ' --no-deobfuscate';
            if (options.unminify === false) cmdOpts += ' --no-unminify';

            const cmd = `npx -y webcrack -o "${absoluteOutputDir}"${cmdOpts} "${absoluteFilePath}"`;

            console.log(`[Debundler] Running: ${cmd}`);

            exec(cmd, (error, stdout, stderr) => {
                if (error) {
                    console.error(`[Debundler] Execution failed: ${error.message}`);
                    return resolve({
                        success: false,
                        error: error.message,
                        stderr
                    });
                }

                // Check for bundle.json metadata file
                const bundleJsonPath = path.join(absoluteOutputDir, 'bundle.json');
                const deobfuscatedPath = path.join(absoluteOutputDir, 'deobfuscated.js');
                
                let metadata = null;
                let isUnpacked = false;

                if (fs.existsSync(bundleJsonPath)) {
                    try {
                        metadata = JSON.parse(fs.readFileSync(bundleJsonPath, 'utf8'));
                        isUnpacked = true;
                    } catch (e) {
                        console.warn(`[Debundler] Failed to parse bundle.json: ${e.message}`);
                    }
                }

                const result = {
                    success: true,
                    outputDir: absoluteOutputDir,
                    deobfuscatedFile: fs.existsSync(deobfuscatedPath) ? deobfuscatedPath : null,
                    isUnpacked,
                    type: metadata ? metadata.type : 'unknown',
                    entryId: metadata ? metadata.entryId : null,
                    modules: []
                };

                if (metadata && metadata.modules) {
                    result.modules = metadata.modules.map(mod => ({
                        id: mod.id,
                        relativePath: mod.path,
                        absolutePath: path.join(absoluteOutputDir, mod.path)
                    }));
                }

                resolve(result);
            });
        });
    }
}

module.exports = {
    Debundler,
    WebcrackEngine
};

// CLI execution support
if (require.main === module) {
    const args = process.argv.slice(2);
    if (args.length === 0) {
        console.log('Usage: node src/debundler/index.js <bundle_file> [output_dir]');
        process.exit(1);
    }

    const file = args[0];
    const out = args[1] || path.join(process.cwd(), 'debundled_' + path.basename(file, '.js'));

    const debundler = new Debundler();
    debundler.debundle(file, out)
        .then(result => {
            console.log('Debundling Result:', JSON.stringify(result, null, 2));
        })
        .catch(err => {
            console.error('Error:', err);
        });
}
