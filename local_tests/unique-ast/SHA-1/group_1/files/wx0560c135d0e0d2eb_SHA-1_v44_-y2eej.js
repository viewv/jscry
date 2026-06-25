/**
 * SHA-1 算法实现
 * App ID: wx0560c135d0e0d2eb
 * 版本: v44
 * 代码哈希: -y2eeji
 * 来源文件: output/wx0560c135d0e0d2eb/common/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.98
 * 函数名: anonymous
 * 行数: 26
 * 生成时间: 2025-07-05T13:17:10.839Z
 */

r.extend({
                        _doReset: function() {
                            this._hash = new i.init([ 1732584193, 4023233417, 2562383102, 271733878, 3285377520 ]);
                        },
                        _doProcessBlock: function(e, t) {
                            for (var n = this._hash.words, i = n[0], r = n[1], a = n[2], s = n[3], u = n[4], c = 0; 80 > c; c++) {
                                if (16 > c) o[c] = 0 | e[t + c]; else {
                                    var l = o[c - 3] ^ o[c - 8] ^ o[c - 14] ^ o[c - 16];
                                    o[c] = l << 1 | l >>> 31;
                                }
                                l = (i << 5 | i >>> 27) + u + o[c], l = 20 > c ? l + (1518500249 + (r & a | ~r & s)) : 40 > c ? l + (1859775393 + (r ^ a ^ s)) : 60 > c ? l + ((r & a | r & s | a & s) - 1894007588) : l + ((r ^ a ^ s) - 899497514), 
                                u = s, s = a, a = r << 30 | r >>> 2, r = i, i = l;
                            }
                            n[0] = n[0] + i | 0, n[1] = n[1] + r | 0, n[2] = n[2] + a | 0, n[3] = n[3] + s | 0, 
                            n[4] = n[4] + u | 0;
                        },
                        _doFinalize: function() {
                            var e = this._data, t = e.words, n = 8 * this._nDataBytes, i = 8 * e.sigBytes;
                            return t[i >>> 5] |= 128 << 24 - i % 32, t[14 + (i + 64 >>> 9 << 4)] = Math.floor(n / 4294967296), 
                            t[15 + (i + 64 >>> 9 << 4)] = n, e.sigBytes = 4 * t.length, this._process(), this._hash;
                        },
                        clone: function() {
                            var e = r.clone.call(this);
                            return e._hash = this._hash.clone(), e;
                        }
                    })

// ==================== 元数据 ====================
// 此文件包含从 wx0560c135d0e0d2eb 提取的 SHA-1 算法实现
// 检测位置: 行 3813-3813
// 变量名: ___
// 检测源: static
