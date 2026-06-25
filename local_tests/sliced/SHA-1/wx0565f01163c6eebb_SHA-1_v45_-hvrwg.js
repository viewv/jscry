/**
 * SHA-1 算法实现
 * App ID: wx0565f01163c6eebb
 * 版本: v45
 * 代码哈希: -hvrwgb
 * 来源文件: output/wx0565f01163c6eebb/common/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.98
 * 函数名: anonymous
 * 行数: 26
 * 生成时间: 2025-07-05T13:17:10.839Z
 */

o.extend({
                            _doReset: function() {
                                this._hash = new r.init([ 1732584193, 4023233417, 2562383102, 271733878, 3285377520 ]);
                            },
                            _doProcessBlock: function(e, t) {
                                for (var n = this._hash.words, r = n[0], o = n[1], a = n[2], u = n[3], c = n[4], s = 0; 80 > s; s++) {
                                    if (16 > s) i[s] = 0 | e[t + s]; else {
                                        var l = i[s - 3] ^ i[s - 8] ^ i[s - 14] ^ i[s - 16];
                                        i[s] = l << 1 | l >>> 31;
                                    }
                                    l = (r << 5 | r >>> 27) + c + i[s], l = 20 > s ? l + (1518500249 + (o & a | ~o & u)) : 40 > s ? l + (1859775393 + (o ^ a ^ u)) : 60 > s ? l + ((o & a | o & u | a & u) - 1894007588) : l + ((o ^ a ^ u) - 899497514), 
                                    c = u, u = a, a = o << 30 | o >>> 2, o = r, r = l;
                                }
                                n[0] = n[0] + r | 0, n[1] = n[1] + o | 0, n[2] = n[2] + a | 0, n[3] = n[3] + u | 0, 
                                n[4] = n[4] + c | 0;
                            },
                            _doFinalize: function() {
                                var e = this._data, t = e.words, n = 8 * this._nDataBytes, r = 8 * e.sigBytes;
                                return t[r >>> 5] |= 128 << 24 - r % 32, t[14 + (r + 64 >>> 9 << 4)] = Math.floor(n / 4294967296), 
                                t[15 + (r + 64 >>> 9 << 4)] = n, e.sigBytes = 4 * t.length, this._process(), this._hash;
                            },
                            clone: function() {
                                var e = o.clone.call(this);
                                return e._hash = this._hash.clone(), e;
                            }
                        })

// ==================== 元数据 ====================
// 此文件包含从 wx0565f01163c6eebb 提取的 SHA-1 算法实现
// 检测位置: 行 8932-8932
// 变量名: ___
// 检测源: static
