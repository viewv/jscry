/**
 * SHA-1 算法实现
 * App ID: wx03e0fe1b41c2ac20
 * 版本: v34
 * 代码哈希: wgbaqr
 * 来源文件: output/wx03e0fe1b41c2ac20/common/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.98
 * 函数名: anonymous
 * 行数: 26
 * 生成时间: 2025-07-05T13:17:10.836Z
 */

a.extend({
                        _doReset: function _doReset() {
                            this._hash = new i.init([ 1732584193, 4023233417, 2562383102, 271733878, 3285377520 ]);
                        },
                        _doProcessBlock: function _doProcessBlock(e, t) {
                            for (var n = this._hash.words, i = n[0], a = n[1], r = n[2], s = n[3], c = n[4], l = 0; 80 > l; l++) {
                                if (16 > l) o[l] = 0 | e[t + l]; else {
                                    var p = o[l - 3] ^ o[l - 8] ^ o[l - 14] ^ o[l - 16];
                                    o[l] = p << 1 | p >>> 31;
                                }
                                p = (i << 5 | i >>> 27) + c + o[l], p = 20 > l ? p + (1518500249 + (a & r | ~a & s)) : 40 > l ? p + (1859775393 + (a ^ r ^ s)) : 60 > l ? p + ((a & r | a & s | r & s) - 1894007588) : p + ((a ^ r ^ s) - 899497514), 
                                c = s, s = r, r = a << 30 | a >>> 2, a = i, i = p;
                            }
                            n[0] = n[0] + i | 0, n[1] = n[1] + a | 0, n[2] = n[2] + r | 0, n[3] = n[3] + s | 0, 
                            n[4] = n[4] + c | 0;
                        },
                        _doFinalize: function _doFinalize() {
                            var e = this._data, t = e.words, n = 8 * this._nDataBytes, i = 8 * e.sigBytes;
                            return t[i >>> 5] |= 128 << 24 - i % 32, t[14 + (i + 64 >>> 9 << 4)] = Math.floor(n / 4294967296), 
                            t[15 + (i + 64 >>> 9 << 4)] = n, e.sigBytes = 4 * t.length, this._process(), this._hash;
                        },
                        clone: function clone() {
                            var e = a.clone.call(this);
                            return e._hash = this._hash.clone(), e;
                        }
                    })

// ==================== 元数据 ====================
// 此文件包含从 wx03e0fe1b41c2ac20 提取的 SHA-1 算法实现
// 检测位置: 行 3498-3498
// 变量名: ___
// 检测源: static
