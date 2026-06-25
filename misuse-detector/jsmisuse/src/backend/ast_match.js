const fs = require("fs");
const path = require("path");
const { parse } = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const crypto = require("crypto");

/**
 * AST Structure Matcher - 批处理版本
 * 通过批处理和持久化存储优化内存使用
 */
class ASTMatcherBatchPersistent {
  constructor() {
    this.uniqueASTDir = path.join(process.cwd(), "local_tests", "unique-ast");
    this.slicedDir = path.join(process.cwd(), "local_tests", "sliced");

    // 批处理配置
    this.BATCH_SIZE = 100;
    this.SIMILARITY_THRESHOLD = 0.85;
    this.MAX_FILE_SIZE = 500000; // 500KB

    // 持久化存储路径
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
   * 提取AST结构特征
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
   * 获取包装器类型
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
   * 记录结构模式
   */
  recordStructuralPatterns(path, structure) {
    const node = path.node;

    if (structure.wasWrapped && path.isProgram()) {
      return;
    }

    // 函数模式
    if (
      node.type === "FunctionDeclaration" ||
      node.type === "FunctionExpression"
    ) {
      const paramCount = node.params ? node.params.length : 0;
      structure.patterns.push(`func_${paramCount}params`);
    }

    // 数组模式
    if (node.type === "ArrayExpression") {
      const elementCount = node.elements ? node.elements.length : 0;
      if (elementCount > 10) {
        structure.patterns.push(
          `large_array_${Math.floor(elementCount / 10) * 10}`
        );
      }
    }

    // 对象模式
    if (node.type === "ObjectExpression") {
      const propCount = node.properties ? node.properties.length : 0;
      structure.patterns.push(`obj_${propCount}props`);
    }

    // 循环模式
    if (node.type === "ForStatement" || node.type === "WhileStatement") {
      structure.patterns.push(`loop_${node.type}`);
    }

    // 条件模式
    if (node.type === "IfStatement") {
      const hasElse = node.alternate ? "else" : "noelse";
      structure.patterns.push(`if_${hasElse}`);
    }

    // 二元操作模式
    if (node.type === "BinaryExpression") {
      structure.patterns.push(`binary_${node.operator}`);
    }

    // 赋值操作模式
    if (node.type === "AssignmentExpression") {
      structure.patterns.push(`assign_${node.operator}`);
    }

    // 函数调用模式
    if (node.type === "CallExpression") {
      const argCount = node.arguments ? node.arguments.length : 0;
      structure.patterns.push(`call_${argCount}args`);
    }
  }

  /**
   * 生成结构签名
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
   * 计算相似度
   */
  calculateSimilarity(struct1, struct2) {
    if (!struct1 || !struct2) return 0;

    let similarity = 0;
    let totalWeight = 0;

    // 节点类型序列相似度 (40%)
    const nodeTypeSimilarity = this.calculateSequenceSimilarity(
      struct1.nodeTypes,
      struct2.nodeTypes
    );
    similarity += nodeTypeSimilarity * 0.4;
    totalWeight += 0.4;

    // 结构模式相似度 (30%)
    const patternSimilarity = this.calculateSetSimilarity(
      struct1.patterns,
      struct2.patterns
    );
    similarity += patternSimilarity * 0.3;
    totalWeight += 0.3;

    // 深度相似度 (15%)
    const depthSimilarity =
      1 -
      Math.abs(struct1.depth - struct2.depth) /
        Math.max(struct1.depth, struct2.depth, 1);
    similarity += depthSimilarity * 0.15;
    totalWeight += 0.15;

    // 复杂度相似度 (15%)
    const complexitySimilarity =
      1 -
      Math.abs(struct1.complexity - struct2.complexity) /
        Math.max(struct1.complexity, struct2.complexity, 1);
    similarity += complexitySimilarity * 0.15;
    totalWeight += 0.15;

    return similarity / totalWeight;
  }

  /**
   * 计算序列相似度
   */
  calculateSequenceSimilarity(seq1, seq2) {
    if (seq1.length === 0 && seq2.length === 0) return 1;
    if (seq1.length === 0 || seq2.length === 0) return 0;

    const lcs = this.longestCommonSubsequence(seq1, seq2);
    return (2 * lcs) / (seq1.length + seq2.length);
  }

  /**
   * 计算集合相似度
   */
  calculateSetSimilarity(set1, set2) {
    const s1 = new Set(set1);
    const s2 = new Set(set2);
    const intersection = new Set([...s1].filter((x) => s2.has(x)));
    const union = new Set([...s1, ...s2]);
    return union.size === 0 ? 1 : intersection.size / union.size;
  }

  /**
   * 最长公共子序列算法
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
   * 创建轻量级结构
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
   * 保存代表性结构到磁盘
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
      `💾 已保存 ${Object.keys(lightweightReps).length} 个代表性结构到磁盘`
    );
  }

  /**
   * 从磁盘加载代表性结构
   */
  async loadRepresentatives() {
    if (!fs.existsSync(this.representativesFile)) {
      console.log("📂 未找到现有代表性结构，从头开始");
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

      console.log(`📂 从磁盘加载了 ${representatives.size} 个现有代表性结构`);
      return representatives;
    } catch (error) {
      console.error(`❌ 加载代表性结构失败: ${error.message}`);
      return new Map();
    }
  }

  /**
   * 保存分组信息
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
    console.log(`💾 已保存 ${groups.size} 个分组信息 (${algorithmName})`);
  }

  /**
   * 复制文件到分组文件夹
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
        console.error(`❌ 复制文件失败 ${filePath}: ${error.message}`);
      }
    }
  }

  /**
   * 保存唯一结构到文件
   */
  async saveUniqueStructuresOptimized(algorithmName, uniqueGroups) {
    const outputDir = path.join(this.uniqueASTDir, algorithmName);

    let groupIndex = 1;
    for (const [signature, data] of uniqueGroups) {
      const groupDir = path.join(outputDir, `group_${groupIndex}`);
      if (!fs.existsSync(groupDir)) {
        fs.mkdirSync(groupDir, { recursive: true });
      }

      // 复制代表性文件
      const representativeCode = fs.readFileSync(
        data.representativePath,
        "utf8"
      );
      const representativeFileName = `representative_${path.basename(data.representativePath)}`;
      fs.writeFileSync(
        path.join(groupDir, representativeFileName),
        representativeCode
      );

      // 复制所有相似文件
      await this.copyFilesToGroup(groupDir, data.files);

      // 保存分组信息
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
        `💾 分组 ${groupIndex} 已保存，包含 ${data.files.length} 个文件`
      );
      groupIndex++;
    }
  }

  /**
   * 批处理算法核心方法
   */
  async processAlgorithmBatch(algorithmName) {
    const slicedAlgorithmDir = path.join(this.slicedDir, algorithmName);
    const uniqueAlgorithmDir = path.join(this.uniqueASTDir, algorithmName);

    if (!fs.existsSync(slicedAlgorithmDir)) {
      console.error(`切片目录不存在: ${slicedAlgorithmDir}`);
      return;
    }

    if (!fs.existsSync(uniqueAlgorithmDir)) {
      fs.mkdirSync(uniqueAlgorithmDir, { recursive: true });
    }

    // 获取所有文件
    const allFiles = fs
      .readdirSync(slicedAlgorithmDir)
      .filter((file) => file.endsWith(".js"))
      .map((file) => path.join(slicedAlgorithmDir, file));

    console.log(`🔍 开始批处理 ${algorithmName}，共 ${allFiles.length} 个文件`);
    console.log(`📦 批处理大小: ${this.BATCH_SIZE}`);

    // 加载已有的代表性结构
    let representatives = await this.loadRepresentatives();
    const uniqueGroups = new Map();

    // 初始化已有组
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

    // 分批处理文件
    for (let batchIndex = 0; batchIndex < totalBatches; batchIndex++) {
      const batchStart = batchIndex * this.BATCH_SIZE;
      const batchEnd = Math.min(batchStart + this.BATCH_SIZE, allFiles.length);
      const currentBatch = allFiles.slice(batchStart, batchEnd);

      console.log(
        `\n📦 处理批次 ${batchIndex + 1}/${totalBatches} (${currentBatch.length} 个文件)`
      );

      // 处理当前批次
      for (const filePath of currentBatch) {
        try {
          const code = fs.readFileSync(filePath, "utf8");

          // 跳过过大文件
          if (code.length > this.MAX_FILE_SIZE) {
            console.log(`⚠️ 跳过大文件: ${path.basename(filePath)}`);
            continue;
          }

          const structure = this.extractASTStructure(code);
          if (!structure) {
            console.warn(`⚠️ 跳过无法解析的文件: ${path.basename(filePath)}`);
            continue;
          }

          const signature = structure.signature;
          let foundMatch = false;

          // 检查完全相同的签名
          if (uniqueGroups.has(signature)) {
            uniqueGroups.get(signature).files.push(filePath);
            foundMatch = true;
          } else {
            // 与已有代表性结构比较相似度
            for (const [existingSignature, groupData] of uniqueGroups) {
              const similarity = this.calculateSimilarity(
                this.createLightweightStructure(structure),
                groupData.structure
              );

              if (similarity >= this.SIMILARITY_THRESHOLD) {
                groupData.files.push(filePath);
                foundMatch = true;
                console.log(
                  `📎 ${path.basename(filePath)} 匹配现有组 (${(similarity * 100).toFixed(1)}%)`
                );
                break;
              }
            }
          }

          // 如果没有找到匹配，创建新组
          if (!foundMatch) {
            const lightweightStructure =
              this.createLightweightStructure(structure);
            uniqueGroups.set(signature, {
              representativePath: filePath,
              files: [filePath],
              structure: lightweightStructure,
            });

            // 更新代表性结构映射
            representatives.set(signature, {
              representativePath: filePath,
              structure: lightweightStructure,
              fileCount: 1,
            });

            newUniqueCount++;
            console.log(`✨ 新的唯一结构: ${path.basename(filePath)}`);
          }

          processedFiles++;
        } catch (error) {
          console.error(`❌ 处理文件失败 ${filePath}: ${error.message}`);
        }
      }

      // 每批处理完后保存进度
      await this.saveRepresentatives(representatives);

      // 强制垃圾回收
      if (global.gc) {
        global.gc();
      }

      console.log(
        `✅ 批次 ${batchIndex + 1} 完成。进度: ${processedFiles}/${allFiles.length} (${uniqueGroups.size} 个唯一结构)`
      );
    }

    // 更新文件计数
    for (const [signature, groupData] of uniqueGroups) {
      if (representatives.has(signature)) {
        representatives.get(signature).fileCount = groupData.files.length;
      }
    }

    // 保存最终结果
    await this.saveRepresentatives(representatives);
    await this.saveGroups(algorithmName, uniqueGroups);
    await this.saveUniqueStructuresOptimized(algorithmName, uniqueGroups);

    console.log(`\n🎉 ${algorithmName} 批处理完成:`);
    console.log(`   📁 总文件数: ${allFiles.length}`);
    console.log(`   ✅ 成功处理: ${processedFiles}`);
    console.log(`   🔍 唯一结构总数: ${uniqueGroups.size}`);
    console.log(`   ✨ 本次新发现: ${newUniqueCount}`);
    console.log(`   📦 处理批次: ${totalBatches}`);

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
   * 清理持久化数据
   */
  async clearPersistentData() {
    const files = [this.representativesFile];
    for (const file of files) {
      if (fs.existsSync(file)) {
        fs.unlinkSync(file);
        console.log(`🗑️ 已清理 ${file}`);
      }
    }
  }
}

// 主执行逻辑
if (require.main === module) {
  const matcher = new ASTMatcherBatchPersistent();

  const args = process.argv.slice(2);
  if (args.length > 0) {
    const algorithm = args[0];
    matcher.processAlgorithmBatch(algorithm).catch(console.error);
  } else {
    console.log("请指定算法名称，例如: node ast_match.js AES");
  }
}

module.exports = { ASTMatcher: ASTMatcherBatchPersistent };
