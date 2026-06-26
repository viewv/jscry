/**
 * Code slicing utility methods
 * Slicing related functions ported from crypto-detector.js
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
   * Convert line/column position to character offset
   */
  convertPositionToOffset(code, position) {
    const lines = code.split("\n");
    let startOffset = 0;
    let endOffset = 0;

    // Calculate start offset
    for (let i = 0; i < position.start.line - 1; i++) {
      startOffset += lines[i].length + 1;
    }
    startOffset += position.start.column - 1;

    // Calculate end offset
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
   * Perform code slicing
   */
  async performCodeSlicing(code, detailedResults, scriptId) {
    const slices = [];

    try {
      for (const algorithm of Object.keys(detailedResults)) {
        const detections = detailedResults[algorithm];

        for (let i = 0; i < detections.length; i++) {
          const detection = detections[i];

          try {
            // Convert position information to character offset
            const position = this.convertPositionToOffset(
              code,
              detection.position
            );

            // Perform code slicing
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

              // Optional: save slice to file
              if (this.outputDir) {
                await this.saveSliceToFile(slice, scriptId, algorithm, i);
              }
            }
          } catch (sliceError) {
            console.warn(`Slicing failed for ${algorithm}[${i}]: ${sliceError.message}`);
          }
        }
      }
    } catch (error) {
      console.error(`Code slicing process failed: ${error.message}`);
    }

    return slices;
  }

  /**
   * Save slice to file
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
      console.log(`Saving slice file: ${fileName}`);

      return filePath;
    } catch (error) {
      console.error(`Failed to save slice file: ${error.message}`);
      return null;
    }
  }
}

module.exports = SliceUtils;
