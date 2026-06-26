const fs = require("fs");
const path = require("path");
const { parse } = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const crypto = require("crypto");

/**
 * AST Structure Matcher - Batch processing version
 * Optimize memory usage through batch processing and persistent storage
 */
class ASTMatcherBatchPersistent {
  constructor() {
    this.uniqueASTDir = path.join(process.cwd(), "local_tests", "unique-ast");
    this.slicedDir = path.join(process.cwd(), "local_tests", "sliced");

    // Batch configuration
    this.BATCH_SIZE = 100;
    this.SIMILARITY_THRESHOLD = 0.85;
    this.MAX_FILE_SIZE = 500000; // 500KB

    // Persistent storage path
    this.persistentDir = path.join(this.uniqueASTDir, "persistent");
    this.representativesFile = path.join(
      this.persistentDir,
      "representatives.json"
    );

    this.ensureDirectories();
  }

  ensureDirectories() {
    [this.uniqueASTDir, this.persistentDir].forEach((dir) => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  /**
   * Extract AST structure features
   */
  extractASTStructure(code) {
    const codeVariants = [
      code,
      `(${code})`,
      `(function(){${code}})()`,
      `var temp = ${code}`,
      `(${code});`,
      `{${code}}`,
      `function wrapper(){${code}}`,
    ];

    let ast = null;
    let usedVariant = null;

    for (const variant of codeVariants) {
      try {
        ast = parse(variant, {
          sourceType: "unambiguous",
          plugins: ["jsx", "typescript"],
          ranges: false,
          locations: false,
          strictMode: false,
          allowImportExportEverywhere: true,
          allowReturnOutsideFunction: true,
        });
        usedVariant = variant;
        break;
      } catch (error) {
        continue;
      }
    }

    if (!ast) {
      return null;
    }

    const structure = {
      nodeTypes: [],
      patterns: [],
      depth: 0,
      complexity: 0,
      wasWrapped: usedVariant !== code,
      wrapperType: this.getWrapperType(code, usedVariant),
    };

    let currentDepth = 0;
    let maxDepth = 0;

    traverse(ast, {
      enter: (path) => {
        currentDepth++;
        maxDepth = Math.max(maxDepth, currentDepth);

        const nodeType = path.node.type;
        structure.nodeTypes.push(nodeType);
        structure.complexity++;

        this.recordStructuralPatterns(path, structure);
      },
      exit: () => {
        currentDepth--;
      },
    });

    structure.depth = maxDepth;
    structure.signature = this.generateStructureSignature(structure);

    return structure;
  }

  /**
   * Get wrapper type
   */
  getWrapperType(originalCode, usedVariant) {
    if (usedVariant === originalCode) return "none";
    if (usedVariant === `(${originalCode})`) return "iife";
    if (usedVariant === `(function(){${originalCode}})()`)
      return "function_wrapper";
    if (usedVariant === `var temp = ${originalCode}`)
      return "variable_assignment";
    if (usedVariant === `(${originalCode});`) return "expression";
    if (usedVariant === `{${originalCode}}`) return "block_statement";
    return "function_declaration";
  }

  /**
   * Record structural patterns
   */
  recordStructuralPatterns(path, structure) {
    const node = path.node;

    if (structure.wasWrapped && path.isProgram()) {
      return;
    }

    // Function pattern
    if (
      node.type === "FunctionDeclaration" ||
      node.type === "FunctionExpression"
    ) {
      const paramCount = node.params ? node.params.length : 0;
      structure.patterns.push(`func_${paramCount}params`);
    }

    // Array pattern
    if (node.type === "ArrayExpression") {
      const elementCount = node.elements ? node.elements.length : 0;
      if (elementCount > 10) {
        structure.patterns.push(
          `large_array_${Math.floor(elementCount / 10) * 10}`
        );
      }
    }

    // Object pattern
    if (node.type === "ObjectExpression") {
      const propCount = node.properties ? node.properties.length : 0;
      structure.patterns.push(`obj_${propCount}props`);
    }

    // Loop pattern
    if (node.type === "ForStatement" || node.type === "WhileStatement") {
      structure.patterns.push(`loop_${node.type}`);
    }

    // Conditional pattern
    if (node.type === "IfStatement") {
      const hasElse = node.alternate ? "else" : "noelse";
      structure.patterns.push(`if_${hasElse}`);
    }

    // Binary operation pattern
    if (node.type === "BinaryExpression") {
      structure.patterns.push(`binary_${node.operator}`);
    }

    // Assignment operation pattern
    if (node.type === "AssignmentExpression") {
      structure.patterns.push(`assign_${node.operator}`);
    }

    // Call pattern
    if (node.type === "CallExpression") {
      const argCount = node.arguments ? node.arguments.length : 0;
      structure.patterns.push(`call_${argCount}args`);
    }
  }

  /**
   * Generate structure signature
   */
  generateStructureSignature(structure) {
    const signatureData = {
      nodeTypeSequence: structure.nodeTypes.slice(0, 50),
      patterns: structure.patterns.sort(),
      depth: structure.depth,
      complexity: Math.floor(structure.complexity / 10) * 10,
      wrapperType: structure.wrapperType,
    };

    const signatureString = JSON.stringify(signatureData);
    return crypto.createHash("md5").update(signatureString).digest("hex");
  }

  /**
   * Calculate similarity
   */
  calculateSimilarity(struct1, struct2) {
    if (!struct1 || !struct2) return 0;

    let similarity = 0;
    let totalWeight = 0;

    // Node type sequence similarity (40%)
    const nodeTypeSimilarity = this.calculateSequenceSimilarity(
      struct1.nodeTypes,
      struct2.nodeTypes
    );
    similarity += nodeTypeSimilarity * 0.4;
    totalWeight += 0.4;

    // Structural pattern similarity (30%)
    const patternSimilarity = this.calculateSetSimilarity(
      struct1.patterns,
      struct2.patterns
    );
    similarity += patternSimilarity * 0.3;
    totalWeight += 0.3;

    // Depth similarity (15%)
    const depthSimilarity =
      1 -
      Math.abs(struct1.depth - struct2.depth) /
        Math.max(struct1.depth, struct2.depth, 1);
    similarity += depthSimilarity * 0.15;
    totalWeight += 0.15;

    // Complexity similarity (15%)
    const complexitySimilarity =
      1 -
      Math.abs(struct1.complexity - struct2.complexity) /
        Math.max(struct1.complexity, struct2.complexity, 1);
    similarity += complexitySimilarity * 0.15;
    totalWeight += 0.15;

    return similarity / totalWeight;
  }

  /**
   * Calculate sequence similarity
   */
  calculateSequenceSimilarity(seq1, seq2) {
    if (seq1.length === 0 && seq2.length === 0) return 1;
    if (seq1.length === 0 || seq2.length === 0) return 0;

    const lcs = this.longestCommonSubsequence(seq1, seq2);
    return (2 * lcs) / (seq1.length + seq2.length);
  }

  /**
   * Calculate set similarity
   */
  calculateSetSimilarity(set1, set2) {
    const s1 = new Set(set1);
    const s2 = new Set(set2);
    const intersection = new Set([...s1].filter((x) => s2.has(x)));
    const union = new Set([...s1, ...s2]);
    return union.size === 0 ? 1 : intersection.size / union.size;
  }

  /**
   * Longest Common Subsequence algorithm
   */
  longestCommonSubsequence(seq1, seq2) {
    const m = seq1.length;
    const n = seq2.length;
    const dp = Array(m + 1)
      .fill()
      .map(() => Array(n + 1).fill(0));

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
   * Create lightweight structure
   */
  createLightweightStructure(fullStructure) {
    return {
      signature: fullStructure.signature,
      depth: fullStructure.depth,
      complexity: Math.floor(fullStructure.complexity / 10) * 10,
      patterns: fullStructure.patterns.slice(0, 15),
      nodeTypes: fullStructure.nodeTypes.slice(0, 30),
      wrapperType: fullStructure.wrapperType,
    };
  }

  /**
   * Save representative structures to disk
   */
  async saveRepresentatives(representatives) {
    const lightweightReps = {};

    for (const [signature, data] of representatives) {
      lightweightReps[signature] = {
        representativePath: data.representativePath,
        structure: this.createLightweightStructure(data.structure),
        fileCount: data.fileCount,
        lastUpdated: new Date().toISOString(),
      };
    }

    fs.writeFileSync(
      this.representativesFile,
      JSON.stringify(lightweightReps, null, 2)
    );

    console.log(
      `💾 Saved ${Object.keys(lightweightReps).length} representative structures to disk`
    );
  }

  /**
   * Load representative structures from disk
   */
  async loadRepresentatives() {
    if (!fs.existsSync(this.representativesFile)) {
      console.log("📂 Existing representative structures not found, starting from scratch");
      return new Map();
    }

    try {
      const data = JSON.parse(
        fs.readFileSync(this.representativesFile, "utf8")
      );
      const representatives = new Map();

      for (const [signature, repData] of Object.entries(data)) {
        representatives.set(signature, {
          representativePath: repData.representativePath,
          structure: repData.structure,
          fileCount: repData.fileCount,
          files: [],
        });
      }

      console.log(`📂 Loaded ${representatives.size} existing representative structures from disk`);
      return representatives;
    } catch (error) {
      console.error(`❌ Failed to load representative structures: ${error.message}`);
      return new Map();
    }
  }

  /**
   * Save grouping information
   */
  async saveGroups(algorithmName, groups) {
    const groupsData = {
      algorithm: algorithmName,
      timestamp: new Date().toISOString(),
      totalGroups: groups.size,
      groups: Array.from(groups.entries()).map(([signature, data]) => ({
        signature,
        representativePath: data.representativePath,
        fileCount: data.files.length,
        files: data.files,
      })),
    };

    const algorithmGroupsFile = path.join(
      this.persistentDir,
      `${algorithmName}_groups.json`
    );

    fs.writeFileSync(algorithmGroupsFile, JSON.stringify(groupsData, null, 2));
    console.log(`💾 Saved ${groups.size} group(s) info (${algorithmName})`);
  }

  /**
   * Copy files to group folder
   */
  async copyFilesToGroup(groupDir, files) {
    const filesDir = path.join(groupDir, "files");
    if (!fs.existsSync(filesDir)) {
      fs.mkdirSync(filesDir, { recursive: true });
    }

    for (const filePath of files) {
      try {
        const fileName = path.basename(filePath);
        const destPath = path.join(filesDir, fileName);
        const code = fs.readFileSync(filePath, "utf8");
        fs.writeFileSync(destPath, code);
      } catch (error) {
        console.error(`❌ Failed to copy file ${filePath}: ${error.message}`);
      }
    }
  }

  /**
   * Save unique structures to file
   */
  async saveUniqueStructuresOptimized(algorithmName, uniqueGroups) {
    const outputDir = path.join(this.uniqueASTDir, algorithmName);

    let groupIndex = 1;
    for (const [signature, data] of uniqueGroups) {
      const groupDir = path.join(outputDir, `group_${groupIndex}`);
      if (!fs.existsSync(groupDir)) {
        fs.mkdirSync(groupDir, { recursive: true });
      }

      // Copy representative file
      const representativeCode = fs.readFileSync(
        data.representativePath,
        "utf8"
      );
      const representativeFileName = `representative_${path.basename(data.representativePath)}`;
      fs.writeFileSync(
        path.join(groupDir, representativeFileName),
        representativeCode
      );

      // Copy all similar files
      await this.copyFilesToGroup(groupDir, data.files);

      // Save group info
      const groupInfo = {
        signature,
        fileCount: data.files.length,
        representative: data.representativePath,
        structure: {
          depth: data.structure.depth,
          complexity: data.structure.complexity,
          patterns: data.structure.patterns,
          nodeTypeCount: data.structure.nodeTypes
            ? data.structure.nodeTypes.length
            : 0,
          wrapperType: data.structure.wrapperType,
        },
        files: data.files.map((f) => ({
          path: f,
          name: path.basename(f),
        })),
      };

      fs.writeFileSync(
        path.join(groupDir, "group_info.json"),
        JSON.stringify(groupInfo, null, 2)
      );

      console.log(
        `💾 Group ${groupIndex} saved, containing ${data.files.length} files`
      );
      groupIndex++;
    }
  }

  /**
   * Core method for batch processing algorithm
   */
  async processAlgorithmBatch(algorithmName) {
    const slicedAlgorithmDir = path.join(this.slicedDir, algorithmName);
    const uniqueAlgorithmDir = path.join(this.uniqueASTDir, algorithmName);

    if (!fs.existsSync(slicedAlgorithmDir)) {
      console.error(`Sliced directory does not exist: ${slicedAlgorithmDir}`);
      return;
    }

    if (!fs.existsSync(uniqueAlgorithmDir)) {
      fs.mkdirSync(uniqueAlgorithmDir, { recursive: true });
    }

    // Get all files
    const allFiles = fs
      .readdirSync(slicedAlgorithmDir)
      .filter((file) => file.endsWith(".js"))
      .map((file) => path.join(slicedAlgorithmDir, file));

    console.log(`🔍 Starting batch processing for ${algorithmName}, total ${allFiles.length} files`);
    console.log(`📦 Batch size: ${this.BATCH_SIZE}`);

    // Load existing representative structures
    let representatives = await this.loadRepresentatives();
    const uniqueGroups = new Map();

    // Initialize existing groups
    for (const [signature, repData] of representatives) {
      uniqueGroups.set(signature, {
        representativePath: repData.representativePath,
        files: [],
        structure: repData.structure,
      });
    }

    const totalBatches = Math.ceil(allFiles.length / this.BATCH_SIZE);
    let processedFiles = 0;
    let newUniqueCount = 0;

    // Process files in batches
    for (let batchIndex = 0; batchIndex < totalBatches; batchIndex++) {
      const batchStart = batchIndex * this.BATCH_SIZE;
      const batchEnd = Math.min(batchStart + this.BATCH_SIZE, allFiles.length);
      const currentBatch = allFiles.slice(batchStart, batchEnd);

      console.log(
        `\n📦 Processing batch ${batchIndex + 1}/${totalBatches} (${currentBatch.length} files)`
      );

      // Process current batch
      for (const filePath of currentBatch) {
        try {
          const code = fs.readFileSync(filePath, "utf8");

          // Skip excessively large files
          if (code.length > this.MAX_FILE_SIZE) {
            console.log(`⚠️ Skipping large file: ${path.basename(filePath)}`);
            continue;
          }

          const structure = this.extractASTStructure(code);
          if (!structure) {
            console.warn(`⚠️ Skipping unparseable file: ${path.basename(filePath)}`);
            continue;
          }

          const signature = structure.signature;
          let foundMatch = false;

          // Check for identical signatures
          if (uniqueGroups.has(signature)) {
            uniqueGroups.get(signature).files.push(filePath);
            foundMatch = true;
          } else {
            // Compare similarity with existing representative structures
            for (const [existingSignature, groupData] of uniqueGroups) {
              const similarity = this.calculateSimilarity(
                this.createLightweightStructure(structure),
                groupData.structure
              );

              if (similarity >= this.SIMILARITY_THRESHOLD) {
                groupData.files.push(filePath);
                foundMatch = true;
                console.log(
                  `📎 ${path.basename(filePath)} matches existing group (${(similarity * 100).toFixed(1)}%)`
                );
                break;
              }
            }
          }

          // If no match is found, create a new group
          if (!foundMatch) {
            const lightweightStructure =
              this.createLightweightStructure(structure);
            uniqueGroups.set(signature, {
              representativePath: filePath,
              files: [filePath],
              structure: lightweightStructure,
            });

            // Update representative structures mapping
            representatives.set(signature, {
              representativePath: filePath,
              structure: lightweightStructure,
              fileCount: 1,
            });

            newUniqueCount++;
            console.log(`✨ New unique structure: ${path.basename(filePath)}`);
          }

          processedFiles++;
        } catch (error) {
          console.error(`❌ Failed to process file ${filePath}: ${error.message}`);
        }
      }

      // Save progress after processing each batch
      await this.saveRepresentatives(representatives);

      // Force garbage collection
      if (global.gc) {
        global.gc();
      }

      console.log(
        `✅ Batch ${batchIndex + 1} complete. Progress: ${processedFiles}/${allFiles.length} (${uniqueGroups.size} unique structures)`
      );
    }

    // Update file counts
    for (const [signature, groupData] of uniqueGroups) {
      if (representatives.has(signature)) {
        representatives.get(signature).fileCount = groupData.files.length;
      }
    }

    // Save final results
    await this.saveRepresentatives(representatives);
    await this.saveGroups(algorithmName, uniqueGroups);
    await this.saveUniqueStructuresOptimized(algorithmName, uniqueGroups);

    console.log(`\n🎉 ${algorithmName} batch processing complete:`);
    console.log(`   📁 Total files: ${allFiles.length}`);
    console.log(`   ✅ Successfully processed: ${processedFiles}`);
    console.log(`   🔍 Total unique structures: ${uniqueGroups.size}`);
    console.log(`   ✨ Newly discovered this time: ${newUniqueCount}`);
    console.log(`   📦 Processed batches: ${totalBatches}`);

    return {
      algorithm: algorithmName,
      totalFiles: allFiles.length,
      processedFiles: processedFiles,
      uniqueStructures: uniqueGroups.size,
      newUniqueStructures: newUniqueCount,
      batchCount: totalBatches,
    };
  }

  /**
   * Clear persistent data
   */
  async clearPersistentData() {
    const files = [this.representativesFile];
    for (const file of files) {
      if (fs.existsSync(file)) {
        fs.unlinkSync(file);
        console.log(`🗑️ Cleaned up ${file}`);
      }
    }
  }
}

// Main execution logic
if (require.main === module) {
  const matcher = new ASTMatcherBatchPersistent();

  const args = process.argv.slice(2);
  if (args.length > 0) {
    const algorithm = args[0];
    matcher.processAlgorithmBatch(algorithm).catch(console.error);
  } else {
    console.log("Please specify the algorithm name, e.g.: node ast_match.js AES");
  }
}

module.exports = { ASTMatcher: ASTMatcherBatchPersistent };
