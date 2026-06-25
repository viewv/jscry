#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { detectCryptoConstants } = require('./src/checker/constant_detect');

/**
 * Analyze cryptographic constants in a single file
 * @param {string} filePath - File path
 * @returns {Object} Detection result
 */
function analyzeFile(filePath) {
    try {
        console.log(`[crypto-cli-tool] Starting file analysis: ${filePath}`);

        // Check if the file exists
        if (!fs.existsSync(filePath)) {
            console.error(`[crypto-cli-tool] File does not exist: ${filePath}`);
            return {
                success: false,
                error: `File not found: ${filePath}`,
                file: filePath,
                results: null
            };
        }

        console.log(`[crypto-cli-tool] Reading file content...`);
        // Read file content
        const code = fs.readFileSync(filePath, 'utf8');
        console.log(`[crypto-cli-tool] File size: ${code.length} characters`);

        let results;
        try {
            console.log(`[crypto-cli-tool] Performing cryptographic constant detection...`);
            // Run detection
            results = detectCryptoConstants(code);
            console.log(`[crypto-cli-tool] Detection complete, found ${results.detected.length} cryptographic patterns`);
        } catch (error) {
            console.error(`[crypto-cli-tool] Error during detection process: ${error.message}`);
            return {
                success: false,
                error: error.message,
                file: filePath,
                results: null
            };
        }

        // Format results into a Python-friendly structure
        const formattedResults = {
            detected_count: results.detected.length,
            algorithms: Object.keys(results.confidence),
            confidence_scores: results.confidence,
            detailed_results: results.constants,
            summary: results.detected.length > 0 ?
                `Detected ${results.detected.length} cryptographic patterns in ${Object.keys(results.confidence).length} algorithms` :
                'No cryptographic constants detected'
        };

        console.log(`[crypto-cli-tool] Formatting results complete`);
        if (formattedResults.detected_count > 0) {
            console.log(`[crypto-cli-tool] Detected algorithms: ${formattedResults.algorithms.join(', ')}`);
        }

        return {
            success: true,
            error: null,
            file: filePath,
            results: formattedResults
        };

    } catch (error) {
        console.error(`[crypto-cli-tool] Analysis failed: ${error.message}`);
        return {
            success: false,
            error: error.message,
            file: filePath,
            results: null
        };
    }
}

/**
 * Generate output file path
 * @param {string} inputFilePath - Input file path
 * @returns {string} Output file path
 */
function generateOutputPath(inputFilePath) {
    const dir = path.dirname(inputFilePath);
    const basename = path.basename(inputFilePath, path.extname(inputFilePath));
    return path.join(dir, `${basename}.crypto-analysis.json`);
}

/**
 * Main function
 */
function main() {
    // Get command line arguments
    const args = process.argv.slice(2);

    if (args.length === 0) {
        console.error('Usage: node crypto-cli-tool.js <input_file_path> [output_file_path]');
        console.error('Examples:');
        console.error('  node crypto-cli-tool.js /path/to/file.js');
        console.error('  node crypto-cli-tool.js /path/to/file.js /path/to/output.json');
        console.error('');
        console.error('If output_file_path is not specified, it will be auto-generated as:');
        console.error('  <input_file_directory>/<input_file_name>.crypto-analysis.json');
        process.exit(1);
    }

    const inputFilePath = args[0];
    const outputFilePath = args[1] || generateOutputPath(inputFilePath);

    // Analyze file
    const result = analyzeFile(inputFilePath);

    try {
        // Write results to file
        fs.writeFileSync(outputFilePath, JSON.stringify(result, null, 2), 'utf8');

        // Print success message and file path
        if (result.success) {
            console.log(`✅ Analysis completed successfully`);
            console.log(`📁 Results saved to: ${outputFilePath}`);
            if (result.results.detected_count > 0) {
                console.log(`🔍 Found ${result.results.detected_count} cryptographic patterns in ${result.results.algorithms.length} algorithms`);
            } else {
                console.log(`ℹ️  No cryptographic constants detected`);
            }
        } else {
            console.log(`❌ Analysis failed: ${result.error}`);
            console.log(`📁 Error details saved to: ${outputFilePath}`);
        }
    } catch (writeError) {
        console.error(`❌ Failed to write results to file: ${writeError.message}`);
        process.exit(1);
    }
}

// Run main function
if (require.main === module) {
    main();
}

module.exports = { analyzeFile, generateOutputPath };