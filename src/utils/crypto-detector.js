/**
 * Crypto Detector Module
 *
 * This module will analyze JavaScript code to detect cryptographic implementations
 * and potential misuses.
 */

const fs = require("fs").promises;
const path = require("path");

class CryptoDetector {
  constructor(options = {}) {
    this.options = {
      // Default options
      outputDir:
        options.outputDir || path.join(process.cwd(), "detected_scripts"),
      ...options,
    };

    // Patterns for common crypto libraries and algorithms
    this.patterns = {
      // 1. Web Cryptography API
      // webCryptoAPI: {
      //   usage: /window\.crypto|navigator\.crypto|crypto\.subtle|SubtleCrypto|CryptoKey/g,
      //   methods: /(?:encrypt|decrypt|sign|verify|digest|generateKey|deriveKey|importKey|exportKey|wrapKey|unwrapKey)/g
      // },

      webCryptoAPI: {
        // Match usage of crypto.subtle.xxx or SubtleCrypto.xxx
        usage:
          /\b(?:crypto(?:\.subtle)?|SubtleCrypto|window\.crypto|navigator\.crypto)\.(?:encrypt|decrypt|sign|verify|digest|generateKey|deriveKey|importKey|exportKey|wrapKey|unwrapKey)\b/g,

        // Match method calls (prevent false positives when only the name is defined)
        methods:
          /\b(?:encrypt|decrypt|sign|verify|digest|generateKey|deriveKey|importKey|exportKey|wrapKey|unwrapKey)\s*\(/g,
      },

      // 2. Closure Generated API crypto library
      closureCrypto: {
        usage: /goog\.crypt|goog\.crypto/g,
        methods: /(?:Aes|Hmac|Md5|Sha1|Sha256|Sha512|Pbkdf2)/g,
      },

      // 3. Node.js crypto module
      nodeCrypto: {
        usage:
          /require\s*\(\s*['"]crypto['"]\s*\)|import\s+.*\s+from\s+['"]crypto['"]/g,
        methods:
          /crypto\.(?:createCipher|createDecipher|createCipheriv|createDecipheriv|createHash|createHmac|randomBytes|pbkdf2)/g,
      },

      // 4. CryptoJS library
      cryptoJS: {
        usage:
          /CryptoJS|require\s*\(\s*['"]crypto-js['"]\s*\)|import\s+.*\s+from\s+['"]crypto-js['"]/g,
        methods:
          /CryptoJS\.(?:AES|DES|TripleDES|Rabbit|RC4|MD5|SHA1|SHA256|SHA512|PBKDF2|HmacSHA1|HmacSHA256|HmacMD5)/g,
      },

      // Common crypto algorithms by pattern detection
      // Modify algorithms section in patterns:
      algorithms: {
        // MD5: only detect characteristic constants
        md5: {
          constants: [
            /[h_](?:[0-3]|[a-d])\s*[=:]\s*(?:0x67452301|67452301)/i,
            /[h_](?:[0-3]|[a-d])\s*[=:]\s*(?:0xEFCDAB89|EFCDAB89)/i,
            /[h_](?:[0-3]|[a-d])\s*[=:]\s*(?:0x98BADCFE|98BADCFE)/i,
            /[h_](?:[0-3]|[a-d])\s*[=:]\s*(?:0x10325476|10325476)/i,
          ],
          patterns: [],
          matchRule: 2, // Only need to match the first 2 constants
        },

        sha: {
          constants: [
            // Initialization constants
            /[h_](?:[0-4]|[a-e])\s*[=:]\s*(?:0x67452301|67452301)/i,
            /[h_](?:[0-4]|[a-e])\s*[=:]\s*(?:0xEFCDAB89|EFCDAB89)/i,
            /[h_](?:[0-4]|[a-e])\s*[=:]\s*(?:0x98BADCFE|98BADCFE)/i,
            /[h_](?:[0-4]|[a-e])\s*[=:]\s*(?:0x10325476|10325476)/i,
            /[h_](?:[0-4]|[a-e])\s*[=:]\s*(?:0xC3D2E1F0|C3D2E1F0)/i,
            // K constants
            /0x5[aA]827999|1518500249/,
            /0x6[eE][dD]9[eE][bB][aA]1|1859775393/,
            /0x8[fF]1[bB][bB][cC][dD][cC]|2400959708/,
            /0x[cC][aA]62[cC]1[dD]6|3395469782/,
          ],
          patterns: [],
          // Require matching of at least 6 constants (including initialization constants and K constants)
          matchRule: 6,
        },

        // SHA1: only detect characteristic constants
        sha1: {
          constants: [
            // Detect initialization magic numbers (decimal format)
            /1732584193|4023233417|2562383102|271733878|3285377520/,

            // Detect initialization magic numbers (hexadecimal format)
            /0x67452301|0xEFCDAB89|0x98BADCFE|0x10325476|0xC3D2E1F0/,
          ],
          patterns: [],
        },

        // AES: only detect S-box
        aes: {
          constants: [
            // Match first few numbers of S-box (supports both with 0x prefix and without)
            /(?:0x63|99)\s*,\s*(?:0x7[cC]|124)\s*,\s*(?:0x77|119)\s*,\s*(?:0x7[bB]|123)/,
            // Match first few numbers of Inverse S-box
            /(?:0x52|82)\s*,\s*(?:0x09|9)\s*,\s*(?:0x6[aA]|106)\s*,\s*(?:0xD5|213)/,
            // Match RCON variable definition
            /(?:0x01|1)\s*,\s*(?:0x02|2)\s*,\s*(?:0x04|4)\s*,\s*(?:0x08|8)\s*,\s*(?:0x10|16)/,
          ],
          patterns: [],
        },

        // DES: only detect permutation tables
        des: {
          constants: [
            // Beginning of Initial Permutation (IP) table
            /(?:58|0x3A)\s*,\s*(?:50|0x32)\s*,\s*(?:42|0x2A)\s*,\s*(?:34|0x22)/,
            // Partial characteristic values of S-box
            /(?:14|0x0E)\s*,\s*(?:4|0x04)\s*,\s*(?:13|0x0D)\s*,\s*(?:1|0x01)/,
          ],
          patterns: [],
        },
      },
    };
  }

  /**
   * Analyze a JavaScript file for cryptographic code
   * @param {string} scriptId - Identifier for the script
   * @param {string} content - JavaScript content to analyze
   * @returns {Object} Analysis results
   */
  async analyzeScript(scriptId, content) {
    const result = {
      scriptId,
      hasCrypto: false,
      detectedAlgorithms: [],
      potentialMisuses: [],
    };

    // Check algorithm implementations
    this._detectCryptoAlgorithms(content, result);

    // If cryptographic algorithm is detected, save code to file
    if (result.hasCrypto) {
      try {
        // Create output directory
        const scriptDir = path.join(
          this.options.outputDir,
          result.detectedAlgorithms.join("_")
        );
        await fs.mkdir(scriptDir, { recursive: true });

        // Generate filename - limit length to avoid ENAMETOOLONG error
        // Use scriptId hash instead of full scriptId
        const hash = require("crypto")
          .createHash("md5")
          .update(scriptId)
          .digest("hex")
          .substring(0, 8);
        const fileName = `script_${hash}.js`;
        const filePath = path.join(scriptDir, fileName);

        // Save code to file
        await fs.writeFile(filePath, content);

        // Create metadata file, recording original scriptId
        const metaFilePath = path.join(scriptDir, `script_${hash}_meta.json`);
        await fs.writeFile(
          metaFilePath,
          JSON.stringify(
            {
              originalId: scriptId,
              algorithms: result.detectedAlgorithms,
              timestamp: new Date().toISOString(),
            },
            null,
            2
          )
        );

        // Add file path to results
        result.savedPath = filePath;
      } catch (error) {
        console.error(`Error saving script ${scriptId}:`, error);
      }
    }

    return result;
  }

  /**
   * Detect crypto algorithms by patterns and magic numbers
   * @private
   */
  _detectCryptoAlgorithms(content, result) {
    // Check Web Cryptography API
    if (
      this.patterns.webCryptoAPI.usage.test(content) &&
      this.patterns.webCryptoAPI.methods.test(content)
    ) {
      result.detectedAlgorithms.push("WebCryptoAPI");
      result.hasCrypto = true;
    }

    const algorithms = this.patterns.algorithms;

    // Check for MD5
    if (this._checkAlgorithmPatterns(content, algorithms.md5)) {
      result.detectedAlgorithms.push("MD5");
      result.hasCrypto = true;
    }

    //check for SHA
    if (this._checkAlgorithmPatterns(content, algorithms.sha)) {
      result.detectedAlgorithms.push("SHA");
      result.hasCrypto = true;
    }

    // Check for SHA1
    if (this._checkAlgorithmPatterns(content, algorithms.sha1)) {
      result.detectedAlgorithms.push("SHA1");
      result.hasCrypto = true;
    }

    // Check for AES
    if (this._checkAlgorithmPatterns(content, algorithms.aes)) {
      result.detectedAlgorithms.push("AES");
      result.hasCrypto = true;
    }

    // Check for DES
    if (this._checkAlgorithmPatterns(content, algorithms.des)) {
      result.detectedAlgorithms.push("DES");
      result.hasCrypto = true;
    }

    // Reset regex lastIndex properties
    this._resetRegexState();
  }

  /**
   * Check if content matches algorithm patterns
   * @private
   */
  _checkAlgorithmPatterns(content, algorithmPatterns) {
    // If matchRule is defined (indicating number of constants to match)
    if (algorithmPatterns.matchRule) {
      let matchCount = 0;
      // Only check the first matchRule constants
      for (let i = 0; i < algorithmPatterns.matchRule; i++) {
        const pattern = algorithmPatterns.constants[i];
        pattern.lastIndex = 0;
        if (pattern.test(content)) {
          matchCount++;
        }
      }
      // Return whether the required match count is reached
      return matchCount === algorithmPatterns.matchRule;
    }

    // Keep original logic for other algorithms
    return algorithmPatterns.constants.some((pattern) => {
      pattern.lastIndex = 0;
      return pattern.test(content);
    });
  }

  /**
   * Reset regex lastIndex properties to avoid stateful regex issues
   * @private
   */
  _resetRegexState() {
    // Reset library patterns
    Object.values(this.patterns).forEach((category) => {
      if (category instanceof RegExp) {
        category.lastIndex = 0;
      } else if (typeof category === "object") {
        Object.values(category).forEach((pattern) => {
          if (pattern instanceof RegExp) {
            pattern.lastIndex = 0;
          } else if (Array.isArray(pattern)) {
            pattern.forEach((p) => {
              if (p instanceof RegExp) p.lastIndex = 0;
            });
          }
        });
      }
    });
  }

  /**
   * Detect potential cryptographic misuses
   * @private
   */
  _detectPotentialMisuses(content, result) {
    // Common misuses to check for:

    // 1. Hardcoded encryption keys
    const hardcodedKeyPattern =
      /(?:key|iv|salt|password|secret)\s*=\s*['"][0-9a-fA-F]{16,}['"]/g;
    if (hardcodedKeyPattern.test(content)) {
      result.potentialMisuses.push({
        type: "hardcoded_key",
        severity: "high",
        description: "Hardcoded encryption key or IV detected",
      });
    }

    // 2. Weak encryption modes (ECB)
    const ecbModePattern =
      /ECB|electronic\s+codebook|createCipher\(\s*['"]aes-\d+-ecb['"]/gi;
    if (ecbModePattern.test(content)) {
      result.potentialMisuses.push({
        type: "weak_mode",
        severity: "high",
        description:
          "ECB mode encryption detected, which is vulnerable to pattern analysis",
      });
    }

    // 3. Weak hash algorithms
    if (
      result.detectedAlgorithms.includes("MD5") ||
      result.detectedAlgorithms.includes("SHA1")
    ) {
      result.potentialMisuses.push({
        type: "weak_hash",
        severity: "medium",
        description: "Weak hash algorithm (MD5/SHA1) detected",
      });
    }

    // 4. Missing IV in CBC mode
    const cbcWithoutIvPattern =
      /CBC|cipher\s+block\s+chaining|createCipher\(\s*['"]aes-\d+-cbc['"].*(?!createCipheriv)/gi;
    if (
      cbcWithoutIvPattern.test(content) &&
      !/iv|initialization\s+vector|createCipheriv/.test(content)
    ) {
      result.potentialMisuses.push({
        type: "missing_iv",
        severity: "high",
        description: "CBC mode encryption without explicit IV detected",
      });
    }

    // Reset regex lastIndex
    hardcodedKeyPattern.lastIndex = 0;
    ecbModePattern.lastIndex = 0;
    cbcWithoutIvPattern.lastIndex = 0;
  }

  /**
   * Analyze multiple scripts
   * @param {Map<string, string>} scripts - Map of script IDs to content
   * @returns {Array<Object>} Analysis results for each script
   */
  async analyzeScripts(scripts) {
    const results = [];

    for (const [scriptId, content] of scripts.entries()) {
      const result = await this.analyzeScript(scriptId, content);
      results.push(result);
    }

    return results;
  }

  /**
   * Get cryptographic algorithm detection statistics
   * @returns {Object} Algorithm statistics
   */
  getAlgorithmStats() {
    const stats = {};
    this.patterns.algorithms.forEach((algo, name) => {
      stats[name] = {
        detected: 0,
        total: 0,
      };
    });
    return stats;
  }
}

module.exports = CryptoDetector;
