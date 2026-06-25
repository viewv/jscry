/**
 * SHA-1 算法实现
 * App ID: wx02343c1ee5ea2b8a
 * 版本: v16
 * 代码哈希: -vlvgai
 * 来源文件: output/wx02343c1ee5ea2b8a/common/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.98
 * 函数名: anonymous
 * 行数: 27
 * 生成时间: 2025-07-05T13:17:10.830Z
 */

i.extend({
                        _doReset: function() {
                            this._hash = new n.init([ 1732584193, 4023233417, 2562383102, 271733878, 3285377520 ]);
                        },
                        _doProcessBlock: function(e, t) {
                            for (var r = this._hash.words, n = r[0], i = r[1], a = r[2], f = r[3], s = r[4], c = 0; c < 80; c++) {
                                if (c < 16) o[c] = 0 | e[t + c]; else {
                                    var u = o[c - 3] ^ o[c - 8] ^ o[c - 14] ^ o[c - 16];
                                    o[c] = u << 1 | u >>> 31;
                                }
                                var h = (n << 5 | n >>> 27) + s + o[c];
                                h += c < 20 ? 1518500249 + (i & a | ~i & f) : c < 40 ? 1859775393 + (i ^ a ^ f) : c < 60 ? (i & a | i & f | a & f) - 1894007588 : (i ^ a ^ f) - 899497514, 
                                s = f, f = a, a = i << 30 | i >>> 2, i = n, n = h;
                            }
                            r[0] = r[0] + n | 0, r[1] = r[1] + i | 0, r[2] = r[2] + a | 0, r[3] = r[3] + f | 0, 
                            r[4] = r[4] + s | 0;
                        },
                        _doFinalize: function() {
                            var e = this._data, t = e.words, r = 8 * this._nDataBytes, n = 8 * e.sigBytes;
                            return t[n >>> 5] |= 128 << 24 - n % 32, t[14 + (n + 64 >>> 9 << 4)] = Math.floor(r / 4294967296), 
                            t[15 + (n + 64 >>> 9 << 4)] = r, e.sigBytes = 4 * t.length, this._process(), this._hash;
                        },
                        clone: function() {
                            var e = i.clone.call(this);
                            return e._hash = this._hash.clone(), e;
                        }
                    })

// ==================== 元数据 ====================
// 此文件包含从 wx02343c1ee5ea2b8a 提取的 SHA-1 算法实现
// 检测位置: 行 1244-1244
// 变量名: ___
// 检测源: static
