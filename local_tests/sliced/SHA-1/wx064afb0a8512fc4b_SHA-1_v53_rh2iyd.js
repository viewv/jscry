/**
 * SHA-1 算法实现
 * App ID: wx064afb0a8512fc4b
 * 版本: v53
 * 代码哈希: rh2iyd
 * 来源文件: output/wx064afb0a8512fc4b/common/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.98
 * 函数名: anonymous
 * 行数: 26
 * 生成时间: 2025-07-05T13:17:10.842Z
 */

o.extend({
                            _doReset: function() {
                                this._hash = new n.init([ 1732584193, 4023233417, 2562383102, 271733878, 3285377520 ]);
                            },
                            _doProcessBlock: function(e, t) {
                                for (var r = this._hash.words, n = r[0], o = r[1], a = r[2], s = r[3], c = r[4], u = 0; 80 > u; u++) {
                                    if (16 > u) i[u] = 0 | e[t + u]; else {
                                        var l = i[u - 3] ^ i[u - 8] ^ i[u - 14] ^ i[u - 16];
                                        i[u] = l << 1 | l >>> 31;
                                    }
                                    l = (n << 5 | n >>> 27) + c + i[u], l = 20 > u ? l + (1518500249 + (o & a | ~o & s)) : 40 > u ? l + (1859775393 + (o ^ a ^ s)) : 60 > u ? l + ((o & a | o & s | a & s) - 1894007588) : l + ((o ^ a ^ s) - 899497514), 
                                    c = s, s = a, a = o << 30 | o >>> 2, o = n, n = l;
                                }
                                r[0] = r[0] + n | 0, r[1] = r[1] + o | 0, r[2] = r[2] + a | 0, r[3] = r[3] + s | 0, 
                                r[4] = r[4] + c | 0;
                            },
                            _doFinalize: function() {
                                var e = this._data, t = e.words, r = 8 * this._nDataBytes, n = 8 * e.sigBytes;
                                return t[n >>> 5] |= 128 << 24 - n % 32, t[14 + (n + 64 >>> 9 << 4)] = Math.floor(r / 4294967296), 
                                t[15 + (n + 64 >>> 9 << 4)] = r, e.sigBytes = 4 * t.length, this._process(), this._hash;
                            },
                            clone: function() {
                                var e = o.clone.call(this);
                                return e._hash = this._hash.clone(), e;
                            }
                        })

// ==================== 元数据 ====================
// 此文件包含从 wx064afb0a8512fc4b 提取的 SHA-1 算法实现
// 检测位置: 行 15124-15124
// 变量名: ___
// 检测源: static
