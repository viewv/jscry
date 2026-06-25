/**
 * MD5 算法实现
 * App ID: wx07cab350e7bc124a
 * 版本: v51
 * 代码哈希: -qnj0i1
 * 来源文件: output/wx07cab350e7bc124a/common/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.95
 * 函数名: anonymous
 * 行数: 32
 * 生成时间: 2025-07-05T13:17:10.799Z
 */

u.extend({
                        _doReset: function() {
                            this._hash = new c.init([ 1732584193, 4023233417, 2562383102, 271733878 ]);
                        },
                        _doProcessBlock: function(e, n) {
                            for (var a = 0; a < 16; a++) {
                                var s = n + a, c = e[s];
                                e[s] = 16711935 & (c << 8 | c >>> 24) | 4278255360 & (c << 24 | c >>> 8);
                            }
                            var u = this._hash.words, f = e[n + 0], p = e[n + 1], h = e[n + 2], d = e[n + 3], v = e[n + 4], b = e[n + 5], g = e[n + 6], y = e[n + 7], m = e[n + 8], _ = e[n + 9], w = e[n + 10], k = e[n + 11], x = e[n + 12], O = e[n + 13], S = e[n + 14], A = e[n + 15], E = u[0], T = u[1], $ = u[2], j = u[3];
                            E = i(E = o(E = o(E = o(E = o(E = r(E = r(E = r(E = r(E = t(E = t(E = t(E = t(E, T, $, j, f, 7, l[0]), T = t(T, $ = t($, j = t(j, E, T, $, p, 12, l[1]), E, T, h, 17, l[2]), j, E, d, 22, l[3]), $, j, v, 7, l[4]), T = t(T, $ = t($, j = t(j, E, T, $, b, 12, l[5]), E, T, g, 17, l[6]), j, E, y, 22, l[7]), $, j, m, 7, l[8]), T = t(T, $ = t($, j = t(j, E, T, $, _, 12, l[9]), E, T, w, 17, l[10]), j, E, k, 22, l[11]), $, j, x, 7, l[12]), T = t(T, $ = t($, j = t(j, E, T, $, O, 12, l[13]), E, T, S, 17, l[14]), j, E, A, 22, l[15]), $, j, p, 5, l[16]), T = r(T, $ = r($, j = r(j, E, T, $, g, 9, l[17]), E, T, k, 14, l[18]), j, E, f, 20, l[19]), $, j, b, 5, l[20]), T = r(T, $ = r($, j = r(j, E, T, $, w, 9, l[21]), E, T, A, 14, l[22]), j, E, v, 20, l[23]), $, j, _, 5, l[24]), T = r(T, $ = r($, j = r(j, E, T, $, S, 9, l[25]), E, T, d, 14, l[26]), j, E, m, 20, l[27]), $, j, O, 5, l[28]), T = r(T, $ = r($, j = r(j, E, T, $, h, 9, l[29]), E, T, y, 14, l[30]), j, E, x, 20, l[31]), $, j, b, 4, l[32]), T = o(T, $ = o($, j = o(j, E, T, $, m, 11, l[33]), E, T, k, 16, l[34]), j, E, S, 23, l[35]), $, j, p, 4, l[36]), T = o(T, $ = o($, j = o(j, E, T, $, v, 11, l[37]), E, T, y, 16, l[38]), j, E, w, 23, l[39]), $, j, O, 4, l[40]), T = o(T, $ = o($, j = o(j, E, T, $, f, 11, l[41]), E, T, d, 16, l[42]), j, E, g, 23, l[43]), $, j, _, 4, l[44]), T = o(T, $ = o($, j = o(j, E, T, $, x, 11, l[45]), E, T, A, 16, l[46]), j, E, h, 23, l[47]), $, j, f, 6, l[48]), 
                            T = i(T = i(T = i(T = i(T, $ = i($, j = i(j, E, T, $, y, 10, l[49]), E, T, S, 15, l[50]), j, E, b, 21, l[51]), $ = i($, j = i(j, E = i(E, T, $, j, x, 6, l[52]), T, $, d, 10, l[53]), E, T, w, 15, l[54]), j, E, p, 21, l[55]), $ = i($, j = i(j, E = i(E, T, $, j, m, 6, l[56]), T, $, A, 10, l[57]), E, T, g, 15, l[58]), j, E, O, 21, l[59]), $ = i($, j = i(j, E = i(E, T, $, j, v, 6, l[60]), T, $, k, 10, l[61]), E, T, h, 15, l[62]), j, E, _, 21, l[63]), 
                            u[0] = u[0] + E | 0, u[1] = u[1] + T | 0, u[2] = u[2] + $ | 0, u[3] = u[3] + j | 0;
                        },
                        _doFinalize: function() {
                            var t = this._data, n = t.words, r = 8 * this._nDataBytes, o = 8 * t.sigBytes;
                            n[o >>> 5] |= 128 << 24 - o % 32;
                            var i = e.floor(r / 4294967296), a = r;
                            n[15 + (o + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), 
                            n[14 + (o + 64 >>> 9 << 4)] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8), 
                            t.sigBytes = 4 * (n.length + 1), this._process();
                            for (var s = this._hash, c = s.words, u = 0; u < 4; u++) {
                                var f = c[u];
                                c[u] = 16711935 & (f << 8 | f >>> 24) | 4278255360 & (f << 24 | f >>> 8);
                            }
                            return s;
                        },
                        clone: function() {
                            var e = u.clone.call(this);
                            return e._hash = this._hash.clone(), e;
                        }
                    })

// ==================== 元数据 ====================
// 此文件包含从 wx07cab350e7bc124a 提取的 MD5 算法实现
// 检测位置: 行 5409-5409
// 变量名: ___
// 检测源: static
