const fs = require('fs');
const path = require('path');
const { parse } = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const crypto = require('crypto');

/**
 * AST Structure Matcher - Identifies crypto library implementations from the same source
 * Focuses on AST node type matching, ignoring specific variable names and values
 * Optimized version with representative code comparison
 */
class ASTMatcher {
    constructor() {
        this.uniqueASTDir = path.join(process.cwd(), 'local_tests', 'unique-ast');
        this.slicedDir = path.join(process.cwd(), 'local_tests', 'sliced');
        this.representativeCache = new Map(); // Cache for representative structures
        this.ensureDirectories();
    }

    ensureDirectories() {
        if (!fs.existsSync(this.uniqueASTDir)) {
            fs.mkdirSync(this.uniqueASTDir, { recursive: true });
        }
    }

    /**
     * Extract AST structural features, ignoring specific identifier names and literal values
     * @param {string} code - JavaScript code
     * @returns {Object} AST structural features
     */
    extractASTStructure(code) {
        // Try multiple code wrapping approaches to handle different code fragments
        const codeVariants = [
            code, // Original code
            `(${code})`, // IIFE wrapping
            `(function(){${code}})()`, // Function wrapping with immediate execution
            `var temp = ${code}`, // Variable assignment wrapping
            `(${code});`, // Expression wrapping
            `{${code}}`, // Block statement wrapping
            `function wrapper(){${code}}`, // Function declaration wrapping
        ];

        let ast = null;
        let usedVariant = null;

        // Try parsing each variant
        for (const variant of codeVariants) {
            try {
                ast = parse(variant, {
                    sourceType: 'unambiguous',
                    plugins: ['jsx', 'typescript'],
                    ranges: false,
                    locations: false,
                    strictMode: false,
                    allowImportExportEverywhere: true,
                    allowReturnOutsideFunction: true
                });
                usedVariant = variant;
                break; // Successfully parsed, break the loop
            } catch (error) {
                // Continue trying the next variant
                continue;
            }
        }

        if (!ast) {
            console.warn(`All parsing attempts failed`);
            return null;
        }

        // Record wrapper information if used
        if (usedVariant !== code) {
            console.log(`Successfully parsed using wrapper: ${usedVariant === `(${code})` ? 'IIFE wrapper' : 'Other wrapper'}`);
        }

        const structure = {
            nodeTypes: [],
            patterns: [],
            depth: 0,
            complexity: 0,
            wasWrapped: usedVariant !== code, // Mark if wrapper was used
            wrapperType: usedVariant === code ? 'none' :
                usedVariant === `(${code})` ? 'iife' :
                    usedVariant === `(function(){${code}})()` ? 'function_wrapper' :
                        usedVariant === `var temp = ${code}` ? 'variable_assignment' :
                            usedVariant === `(${code});` ? 'expression' :
                                usedVariant === `{${code}}` ? 'block_statement' :
                                    'function_declaration'
        };

        let currentDepth = 0;
        let maxDepth = 0;

        // Save this reference
        const self = this;

        traverse(ast, {
            enter(path) {
                currentDepth++;
                maxDepth = Math.max(maxDepth, currentDepth);

                const nodeType = path.node.type;
                structure.nodeTypes.push(nodeType);
                structure.complexity++;

                // Record important structural patterns - use self instead of this
                self.recordStructuralPatterns(path, structure);
            },
            exit() {
                currentDepth--;
            }
        });

        structure.depth = maxDepth;
        structure.signature = this.generateStructureSignature(structure);

        return structure;
    }

    /**
     * Record structural patterns
     */
    recordStructuralPatterns(path, structure) {
        const node = path.node;

        // Skip recording if it's a top-level node introduced by wrapper
        if (structure.wasWrapped && path.isProgram()) {
            return;
        }

        // Record function structure patterns
        if (node.type === 'FunctionDeclaration' || node.type === 'FunctionExpression') {
            const paramCount = node.params ? node.params.length : 0;
            // If it's a wrapper function with 0 parameters, it might be our added wrapper
            if (structure.wasWrapped && paramCount === 0 && path.getFunctionParent() === null) {
                structure.patterns.push(`wrapper_func_${paramCount}params`);
            } else {
                structure.patterns.push(`func_${paramCount}params`);
            }
        }

        // Record array structure patterns
        if (node.type === 'ArrayExpression') {
            const elementCount = node.elements ? node.elements.length : 0;
            if (elementCount > 10) { // Possibly a lookup table
                structure.patterns.push(`large_array_${Math.floor(elementCount / 10) * 10}`);
            }
        }

        // Record object structure patterns
        if (node.type === 'ObjectExpression') {
            const propCount = node.properties ? node.properties.length : 0;
            structure.patterns.push(`obj_${propCount}props`);
        }

        // Record loop structures
        if (node.type === 'ForStatement' || node.type === 'WhileStatement') {
            structure.patterns.push(`loop_${node.type}`);
        }

        // Record conditional structures
        if (node.type === 'IfStatement') {
            const hasElse = node.alternate ? 'else' : 'noelse';
            structure.patterns.push(`if_${hasElse}`);
        }

        // Record binary operation patterns
        if (node.type === 'BinaryExpression') {
            structure.patterns.push(`binary_${node.operator}`);
        }

        // Record assignment operation patterns
        if (node.type === 'AssignmentExpression') {
            structure.patterns.push(`assign_${node.operator}`);
        }

        // Record call expression patterns
        if (node.type === 'CallExpression') {
            const argCount = node.arguments ? node.arguments.length : 0;
            structure.patterns.push(`call_${argCount}args`);
        }
    }

    /**
     * Generate structure signature
     */
    generateStructureSignature(structure) {
        const signatureData = {
            nodeTypeSequence: structure.nodeTypes.slice(0, 50), // Limit length
            patterns: structure.patterns.sort(),
            depth: structure.depth,
            complexity: Math.floor(structure.complexity / 10) * 10, // Quantize complexity
            wrapperType: structure.wrapperType // Include wrapper type information
        };

        const signatureString = JSON.stringify(signatureData);
        return crypto.createHash('md5').update(signatureString).digest('hex');
    }

    /**
     * Calculate similarity between two AST structures
     */
    calculateSimilarity(struct1, struct2) {
        if (!struct1 || !struct2) return 0;

        let similarity = 0;
        let totalWeight = 0;

        // 1. Node type sequence similarity (weight: 40%)
        const nodeTypeSimilarity = this.calculateSequenceSimilarity(
            struct1.nodeTypes, struct2.nodeTypes
        );
        similarity += nodeTypeSimilarity * 0.4;
        totalWeight += 0.4;

        // 2. Structural pattern similarity (weight: 30%)
        const patternSimilarity = this.calculateSetSimilarity(
            struct1.patterns, struct2.patterns
        );
        similarity += patternSimilarity * 0.3;
        totalWeight += 0.3;

        // 3. Depth similarity (weight: 15%)
        const depthSimilarity = 1 - Math.abs(struct1.depth - struct2.depth) / Math.max(struct1.depth, struct2.depth, 1);
        similarity += depthSimilarity * 0.15;
        totalWeight += 0.15;

        // 4. Complexity similarity (weight: 15%)
        const complexitySimilarity = 1 - Math.abs(struct1.complexity - struct2.complexity) / Math.max(struct1.complexity, struct2.complexity, 1);
        similarity += complexitySimilarity * 0.15;
        totalWeight += 0.15;

        return similarity / totalWeight;
    }

    /**
     * Calculate sequence similarity (using Longest Common Subsequence)
     */
    calculateSequenceSimilarity(seq1, seq2) {
        if (seq1.length === 0 && seq2.length === 0) return 1;
        if (seq1.length === 0 || seq2.length === 0) return 0;

        const lcs = this.longestCommonSubsequence(seq1, seq2);
        return (2 * lcs) / (seq1.length + seq2.length);
    }

    /**
     * Calculate set similarity (Jaccard similarity)
     */
    calculateSetSimilarity(set1, set2) {
        const s1 = new Set(set1);
        const s2 = new Set(set2);

        const intersection = new Set([...s1].filter(x => s2.has(x)));
        const union = new Set([...s1, ...s2]);

        return union.size === 0 ? 1 : intersection.size / union.size;
    }

    /**
     * Longest Common Subsequence algorithm
     */
    longestCommonSubsequence(seq1, seq2) {
        const m = seq1.length;
        const n = seq2.length;
        const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));

        for (let i = 1; i <= m; i++) {
            for (let j = 1; j <= n; j++) {
                if (seq1[i - 1] === seq2[j - 1]) {
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                } else {
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
                }
            }
        }

        return dp[m][n];
    }

    /**
     * Copy files to group subfolder
     */
    async copyFilesToGroup(groupDir, files) {
        const filesDir = path.join(groupDir, 'files');
        if (!fs.existsSync(filesDir)) {
            fs.mkdirSync(filesDir, { recursive: true });
        }

        for (const filePath of files) {
            try {
                const fileName = path.basename(filePath);
                const destPath = path.join(filesDir, fileName);
                const code = fs.readFileSync(filePath, 'utf8');
                fs.writeFileSync(destPath, code);
                console.log(`📄 Copied file: ${fileName}`);
            } catch (error) {
                console.error(`❌ Failed to copy file ${filePath}: ${error.message}`);
            }
        }
    }

    /**
     * Process all sliced files for a specific algorithm (Optimized version)
     */
    async processAlgorithm(algorithmName) {
        const slicedAlgorithmDir = path.join(this.slicedDir, algorithmName);
        const uniqueAlgorithmDir = path.join(this.uniqueASTDir, algorithmName);

        if (!fs.existsSync(slicedAlgorithmDir)) {
            console.error(`Sliced directory does not exist: ${slicedAlgorithmDir}`);
            return;
        }

        // Ensure output directory exists
        if (!fs.existsSync(uniqueAlgorithmDir)) {
            fs.mkdirSync(uniqueAlgorithmDir, { recursive: true });
        }

        const files = fs.readdirSync(slicedAlgorithmDir)
            .filter(file => file.endsWith('.js'))
            .map(file => path.join(slicedAlgorithmDir, file));

        console.log(`🔍 Starting to process ${algorithmName} algorithm with ${files.length} files`);

        // Optimized structure: only store signature and representative info
        const uniqueStructures = new Map(); // signature -> {representativePath, files, cachedStructure}
        const processedCount = { total: files.length, processed: 0, unique: 0 };

        for (const filePath of files) {
            try {
                const code = fs.readFileSync(filePath, 'utf8');
                const structure = this.extractASTStructure(code);

                if (!structure) {
                    console.warn(`⚠️  Skipping unparseable file: ${path.basename(filePath)}`);
                    continue;
                }

                const signature = structure.signature;

                if (uniqueStructures.has(signature)) {
                    // Found exact same signature, add to existing group
                    uniqueStructures.get(signature).files.push(filePath);
                } else {
                    // Check for similar structures using representative comparison
                    let foundSimilar = false;
                    const similarityThreshold = 0.85;

                    // Optimized: Only compare with representatives, not all structures
                    for (const [existingSignature, existingData] of uniqueStructures) {
                        let existingStructure = existingData.cachedStructure;

                        // Lazy loading: only parse representative when needed
                        if (!existingStructure) {
                            const representativeCode = fs.readFileSync(existingData.representativePath, 'utf8');
                            existingStructure = this.extractASTStructure(representativeCode);
                            existingData.cachedStructure = existingStructure; // Cache it
                        }

                        if (existingStructure) {
                            const similarity = this.calculateSimilarity(structure, existingStructure);

                            if (similarity >= similarityThreshold) {
                                // Merge into similar group
                                existingData.files.push(filePath);
                                foundSimilar = true;
                                console.log(`📎 File ${path.basename(filePath)} is similar to existing structure (${(similarity * 100).toFixed(1)}%)`);
                                break;
                            }
                        }
                    }

                    if (!foundSimilar) {
                        // Create new unique structure group
                        uniqueStructures.set(signature, {
                            representativePath: filePath,
                            files: [filePath],
                            cachedStructure: structure // Cache the first one
                        });
                        processedCount.unique++;
                        console.log(`✨ Found new unique structure: ${path.basename(filePath)}`);
                    }
                }

                processedCount.processed++;

                if (processedCount.processed % 10 === 0) {
                    console.log(`📊 Progress: ${processedCount.processed}/${processedCount.total} (${processedCount.unique} unique structures)`);
                }

            } catch (error) {
                console.error(`❌ Failed to process file ${filePath}: ${error.message}`);
            }
        }

        // Save results
        await this.saveUniqueStructuresOptimized(algorithmName, uniqueStructures);

        console.log(`\n🎉 ${algorithmName} processing completed:`);
        console.log(`   📁 Total files: ${processedCount.total}`);
        console.log(`   ✅ Successfully processed: ${processedCount.processed}`);
        console.log(`   🔍 Unique structures: ${uniqueStructures.size}`);

        return {
            algorithm: algorithmName,
            totalFiles: processedCount.total,
            processedFiles: processedCount.processed,
            uniqueStructures: uniqueStructures.size,
            groups: Array.from(uniqueStructures.values()).map(group => ({
                fileCount: group.files.length,
                representative: path.basename(group.representativePath),
                files: group.files.map(f => path.basename(f))
            }))
        };
    }

    /**
     * Save unique structures to files (Optimized version)
     */
    async saveUniqueStructuresOptimized(algorithmName, uniqueStructures) {
        const outputDir = path.join(this.uniqueASTDir, algorithmName);

        let groupIndex = 1;
        for (const [signature, data] of uniqueStructures) {
            const groupDir = path.join(outputDir, `group_${groupIndex}`);
            if (!fs.existsSync(groupDir)) {
                fs.mkdirSync(groupDir, { recursive: true });
            }

            // Copy representative file
            const representativeCode = fs.readFileSync(data.representativePath, 'utf8');
            const representativeFileName = `representative_${path.basename(data.representativePath)}`;
            fs.writeFileSync(path.join(groupDir, representativeFileName), representativeCode);

            // Copy all similar files to the group subfolder
            await this.copyFilesToGroup(groupDir, data.files);

            // Get structure info (use cached if available)
            let structureInfo = data.cachedStructure;
            if (!structureInfo) {
                structureInfo = this.extractASTStructure(representativeCode);
            }

            // Save group information
            const groupInfo = {
                signature,
                fileCount: data.files.length,
                representative: data.representativePath,
                structure: {
                    depth: structureInfo.depth,
                    complexity: structureInfo.complexity,
                    patterns: structureInfo.patterns,
                    nodeTypeCount: structureInfo.nodeTypes.length,
                    wrapperType: structureInfo.wrapperType
                },
                files: data.files.map(f => ({
                    path: f,
                    name: path.basename(f)
                }))
            };

            fs.writeFileSync(
                path.join(groupDir, 'group_info.json'),
                JSON.stringify(groupInfo, null, 2)
            );

            console.log(`💾 Group ${groupIndex} saved with ${data.files.length} files`);
            groupIndex++;
        }

        // Save overall statistics
        const summary = {
            algorithm: algorithmName,
            timestamp: new Date().toISOString(),
            totalGroups: uniqueStructures.size,
            totalFiles: Array.from(uniqueStructures.values()).reduce((sum, group) => sum + group.files.length, 0),
            groups: Array.from(uniqueStructures.values()).map((group, index) => {
                const structureInfo = group.cachedStructure || this.extractASTStructure(fs.readFileSync(group.representativePath, 'utf8'));
                return {
                    groupId: index + 1,
                    signature: Array.from(uniqueStructures.keys())[index],
                    fileCount: group.files.length,
                    representative: path.basename(group.representativePath),
                    complexity: structureInfo.complexity,
                    depth: structureInfo.depth,
                    wrapperType: structureInfo.wrapperType
                };
            })
        };

        fs.writeFileSync(
            path.join(outputDir, 'analysis_summary.json'),
            JSON.stringify(summary, null, 2)
        );

        console.log(`💾 Results saved to: ${outputDir}`);
    }

    /**
     * Batch process all algorithms
     */
    async processAllAlgorithms() {
        const algorithms = fs.readdirSync(this.slicedDir)
            .filter(item => {
                const itemPath = path.join(this.slicedDir, item);
                return fs.statSync(itemPath).isDirectory();
            });

        console.log(`🚀 Starting to process all algorithms: ${algorithms.join(', ')}`);

        const results = [];
        for (const algorithm of algorithms) {
            console.log(`\n📂 Processing algorithm: ${algorithm}`);
            const result = await this.processAlgorithm(algorithm);
            if (result) {
                results.push(result);
            }
        }

        // Save global statistics
        const globalSummary = {
            timestamp: new Date().toISOString(),
            totalAlgorithms: results.length,
            results
        };

        fs.writeFileSync(
            path.join(this.uniqueASTDir, 'global_summary.json'),
            JSON.stringify(globalSummary, null, 2)
        );

        console.log(`\n🎊 All algorithms processing completed! Results saved in: ${this.uniqueASTDir}`);
        return results;
    }
}

module.exports = { ASTMatcher };

// If running this file directly
if (require.main === module) {
    const matcher = new ASTMatcher();

    // Check command line arguments
    const args = process.argv.slice(2);
    if (args.length > 0) {
        // Process specific algorithm
        const algorithm = args[0];
        matcher.processAlgorithm(algorithm).catch(console.error);
    } else {
        // Process all algorithms
        matcher.processAllAlgorithms().catch(console.error);
    }
}