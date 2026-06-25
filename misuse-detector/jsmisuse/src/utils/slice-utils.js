/**
 * 代码切片工具方法
 * 从crypto-detector.js移植的切片相关功能
 */
const fs = require("fs").promises;
const path = require("path");
const crypto = require("crypto");
const { findContainingFunction } = require("../../src/middle/slice_code");

class SliceUtils {
  constructor(outputDir) {
    this.outputDir = outputDir;
  }

  /**
   * 转换行列位置为字符偏移
   */
  convertPositionToOffset(code, position) {
    const lines = code.split("\n");
    let startOffset = 0;
    let endOffset = 0;

    // 计算开始偏移
    for (let i = 0; i < position.start.line - 1; i++) {
      startOffset += lines[i].length + 1;
    }
    startOffset += position.start.column - 1;

    // 计算结束偏移
    for (let i = 0; i < position.end.line - 1; i++) {
      endOffset += lines[i].length + 1;
    }
    endOffset += position.end.column - 1;

    return {
      start: startOffset,
      end: endOffset,
    };
  }

  /**
   * 执行代码切片
   */
  async performCodeSlicing(code, detailedResults, scriptId) {
    const slices = [];

    try {
      for (const algorithm of Object.keys(detailedResults)) {
        const detections = detailedResults[algorithm];

        for (let i = 0; i < detections.length; i++) {
          const detection = detections[i];

          try {
            // 转换位置信息为字符偏移
            const position = this.convertPositionToOffset(
              code,
              detection.position
            );

            // 执行代码切片
            const sliceResult = findContainingFunction(code, position);

            if (sliceResult) {
              const slice = {
                algorithm,
                index: i,
                detection,
                slice: sliceResult,
                metadata: {
                  scriptId,
                  variable: detection.variable,
                  type: detection.type,
                  confidence: detection.confidence,
                  source: detection.source,
                },
              };

              slices.push(slice);

              // 可选：保存切片到文件
              if (this.outputDir) {
                await this.saveSliceToFile(slice, scriptId, algorithm, i);
              }
            }
          } catch (sliceError) {
            console.warn(`切片失败 ${algorithm}[${i}]: ${sliceError.message}`);
          }
        }
      }
    } catch (error) {
      console.error(`代码切片过程失败: ${error.message}`);
    }

    return slices;
  }

  /**
   * 保存切片到文件
   */
  async saveSliceToFile(slice, scriptId, algorithm, index) {
    try {
      const slicesDir = path.join(this.outputDir, "slices", algorithm);
      await fs.mkdir(slicesDir, { recursive: true });

      const hash = crypto
        .createHash("md5")
        .update(scriptId)
        .digest("hex")
        .substring(0, 8);

      const fileName = `slice_${hash}_${algorithm}_${index}.json`;
      const filePath = path.join(slicesDir, fileName);

      const sliceData = {
        id: `${hash}_${algorithm}_${index}`,
        scriptId,
        algorithm,
        index,
        timestamp: new Date().toISOString(),
        ...slice,
      };

      await fs.writeFile(filePath, JSON.stringify(sliceData, null, 2));
      console.log(`保存切片文件: ${fileName}`);

      return filePath;
    } catch (error) {
      console.error(`保存切片文件失败: ${error.message}`);
      return null;
    }
  }
}

module.exports = SliceUtils;
