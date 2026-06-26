const fs = require('fs');
const path = require('path');
const { detectCryptoConstantsStatic } = require('./src/checker/constant_detect_static');

/**
 * Analyze a single JavaScript file to detect cryptographic constants (static version)
 * @param {string} inputFile - Input file path
 * @param {string} outputFile - Output file path
 */
function analyzeFile(inputFile, outputFile) {
    try {
        console.log('Starting static analysis of file:', inputFile);

        // Read file content
        const code = fs.readFileSync(inputFile, 'utf8');

        // Detect cryptographic constants
        const results = detectCryptoConstantsStatic(code);

        // Format results
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

        // Save results
        if (outputFile) {
            fs.writeFileSync(outputFile, JSON.stringify(output, null, 2));
            console.log('Static analysis results saved to:', outputFile);
        } else {
            // If no output file is specified, generate a default file name
            const defaultOutput = inputFile.replace(/\.js$/, '.crypto-analysis.json');
            fs.writeFileSync(defaultOutput, JSON.stringify(output, null, 2));
            console.log('Static analysis results saved to:', defaultOutput);
        }

        return output;
    } catch (error) {
        console.error('Static analysis failed:', error.message);

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

// Command line interface
if (require.main === module) {
    const inputFile = process.argv[2];
    const outputFile = process.argv[3];

    if (!inputFile) {
        console.log('Usage: node crypto-cli-tool-static.js <input_file> [output_file]');
        process.exit(1);
    }

    analyzeFile(inputFile, outputFile);
}

module.exports = { analyzeFile };
