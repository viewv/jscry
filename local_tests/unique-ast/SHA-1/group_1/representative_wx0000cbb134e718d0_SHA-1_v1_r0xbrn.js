/**
 * SHA-1 算法实现
 * App ID: wx0000cbb134e718d0
 * 版本: v1
 * 代码哈希: r0xbrn
 * 来源文件: output/wx0000cbb134e718d0/common/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.98
 * 函数名: anonymous
 * 行数: 66
 * 生成时间: 2025-07-05T13:17:10.826Z
 */

Hasher.extend({
                _doReset: function() {
                    this._hash = new WordArray.init([ 1732584193, 4023233417, 2562383102, 271733878, 3285377520 ]);
                },
                _doProcessBlock: function(M, offset) {
                    // Shortcut
                    var H = this._hash.words;
                    // Working variables
                                        var a = H[0];
                    var b = H[1];
                    var c = H[2];
                    var d = H[3];
                    var e = H[4];
                    // Computation
                                        for (var i = 0; i < 80; i++) {
                        if (i < 16) {
                            W[i] = M[offset + i] | 0;
                        } else {
                            var n = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
                            W[i] = n << 1 | n >>> 31;
                        }
                        var t = (a << 5 | a >>> 27) + e + W[i];
                        if (i < 20) {
                            t += (b & c | ~b & d) + 1518500249;
                        } else if (i < 40) {
                            t += (b ^ c ^ d) + 1859775393;
                        } else if (i < 60) {
                            t += (b & c | b & d | c & d) - 1894007588;
                        } else /* if (i < 80) */ {
                            t += (b ^ c ^ d) - 899497514;
                        }
                        e = d;
                        d = c;
                        c = b << 30 | b >>> 2;
                        b = a;
                        a = t;
                    }
                    // Intermediate hash value
                                        H[0] = H[0] + a | 0;
                    H[1] = H[1] + b | 0;
                    H[2] = H[2] + c | 0;
                    H[3] = H[3] + d | 0;
                    H[4] = H[4] + e | 0;
                },
                _doFinalize: function() {
                    // Shortcuts
                    var data = this._data;
                    var dataWords = data.words;
                    var nBitsTotal = this._nDataBytes * 8;
                    var nBitsLeft = data.sigBytes * 8;
                    // Add padding
                                        dataWords[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
                    dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = Math.floor(nBitsTotal / 4294967296);
                    dataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] = nBitsTotal;
                    data.sigBytes = dataWords.length * 4;
                    // Hash final blocks
                                        this._process();
                    // Return final computed hash
                                        return this._hash;
                },
                clone: function() {
                    var clone = Hasher.clone.call(this);
                    clone._hash = this._hash.clone();
                    return clone;
                }
            })

// ==================== 元数据 ====================
// 此文件包含从 wx0000cbb134e718d0 提取的 SHA-1 算法实现
// 检测位置: 行 10548-10548
// 变量名: ___
// 检测源: static
