/**
 * SHA-1 算法实现
 * App ID: wx04a3f58ae0f5f1bb
 * 版本: v36
 * 代码哈希: tvtazb
 * 来源文件: output/wx04a3f58ae0f5f1bb/common/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.98
 * 函数名: anonymous
 * 行数: 26
 * 生成时间: 2025-07-05T13:17:10.836Z
 */

r.extend({
                    _doReset: function() {
                        this._hash = new t.init([ 1732584193, 4023233417, 2562383102, 271733878, 3285377520 ]);
                    },
                    _doProcessBlock: function(e, t) {
                        for (var n = this._hash.words, r = n[0], i = n[1], a = n[2], s = n[3], u = n[4], c = 0; 80 > c; c++) {
                            if (16 > c) o[c] = 0 | e[t + c]; else {
                                var l = o[c - 3] ^ o[c - 8] ^ o[c - 14] ^ o[c - 16];
                                o[c] = l << 1 | l >>> 31;
                            }
                            l = (r << 5 | r >>> 27) + u + o[c], l = 20 > c ? l + (1518500249 + (i & a | ~i & s)) : 40 > c ? l + (1859775393 + (i ^ a ^ s)) : 60 > c ? l + ((i & a | i & s | a & s) - 1894007588) : l + ((i ^ a ^ s) - 899497514), 
                            u = s, s = a, a = i << 30 | i >>> 2, i = r, r = l;
                        }
                        n[0] = n[0] + r | 0, n[1] = n[1] + i | 0, n[2] = n[2] + a | 0, n[3] = n[3] + s | 0, 
                        n[4] = n[4] + u | 0;
                    },
                    _doFinalize: function() {
                        var e = this._data, t = e.words, n = 8 * this._nDataBytes, r = 8 * e.sigBytes;
                        return t[r >>> 5] |= 128 << 24 - r % 32, t[14 + (r + 64 >>> 9 << 4)] = Math.floor(n / 4294967296), 
                        t[15 + (r + 64 >>> 9 << 4)] = n, e.sigBytes = 4 * t.length, this._process(), this._hash;
                    },
                    clone: function() {
                        var e = r.clone.call(this);
                        return e._hash = this._hash.clone(), e;
                    }
                })

// ==================== 元数据 ====================
// 此文件包含从 wx04a3f58ae0f5f1bb 提取的 SHA-1 算法实现
// 检测位置: 行 5045-5045
// 变量名: ___
// 检测源: static
