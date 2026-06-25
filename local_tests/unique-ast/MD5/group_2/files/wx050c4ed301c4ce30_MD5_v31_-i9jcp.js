/**
 * MD5 算法实现
 * App ID: wx050c4ed301c4ce30
 * 版本: v31
 * 代码哈希: -i9jcp
 * 来源文件: output/wx050c4ed301c4ce30/common/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.95
 * 函数名: anonymous
 * 行数: 32
 * 生成时间: 2025-07-05T13:17:10.771Z
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
                            var u = this._hash.words, f = e[n + 0], p = e[n + 1], h = e[n + 2], d = e[n + 3], v = e[n + 4], y = e[n + 5], _ = e[n + 6], g = e[n + 7], m = e[n + 8], b = e[n + 9], w = e[n + 10], O = e[n + 11], S = e[n + 12], k = e[n + 13], A = e[n + 14], E = e[n + 15], $ = u[0], T = u[1], P = u[2], x = u[3];
                            $ = i($ = o($ = o($ = o($ = o($ = r($ = r($ = r($ = r($ = t($ = t($ = t($ = t($, T, P, x, f, 7, l[0]), T = t(T, P = t(P, x = t(x, $, T, P, p, 12, l[1]), $, T, h, 17, l[2]), x, $, d, 22, l[3]), P, x, v, 7, l[4]), T = t(T, P = t(P, x = t(x, $, T, P, y, 12, l[5]), $, T, _, 17, l[6]), x, $, g, 22, l[7]), P, x, m, 7, l[8]), T = t(T, P = t(P, x = t(x, $, T, P, b, 12, l[9]), $, T, w, 17, l[10]), x, $, O, 22, l[11]), P, x, S, 7, l[12]), T = t(T, P = t(P, x = t(x, $, T, P, k, 12, l[13]), $, T, A, 17, l[14]), x, $, E, 22, l[15]), P, x, p, 5, l[16]), T = r(T, P = r(P, x = r(x, $, T, P, _, 9, l[17]), $, T, O, 14, l[18]), x, $, f, 20, l[19]), P, x, y, 5, l[20]), T = r(T, P = r(P, x = r(x, $, T, P, w, 9, l[21]), $, T, E, 14, l[22]), x, $, v, 20, l[23]), P, x, b, 5, l[24]), T = r(T, P = r(P, x = r(x, $, T, P, A, 9, l[25]), $, T, d, 14, l[26]), x, $, m, 20, l[27]), P, x, k, 5, l[28]), T = r(T, P = r(P, x = r(x, $, T, P, h, 9, l[29]), $, T, g, 14, l[30]), x, $, S, 20, l[31]), P, x, y, 4, l[32]), T = o(T, P = o(P, x = o(x, $, T, P, m, 11, l[33]), $, T, O, 16, l[34]), x, $, A, 23, l[35]), P, x, p, 4, l[36]), T = o(T, P = o(P, x = o(x, $, T, P, v, 11, l[37]), $, T, g, 16, l[38]), x, $, w, 23, l[39]), P, x, k, 4, l[40]), T = o(T, P = o(P, x = o(x, $, T, P, f, 11, l[41]), $, T, d, 16, l[42]), x, $, _, 23, l[43]), P, x, b, 4, l[44]), T = o(T, P = o(P, x = o(x, $, T, P, S, 11, l[45]), $, T, E, 16, l[46]), x, $, h, 23, l[47]), P, x, f, 6, l[48]), 
                            T = i(T = i(T = i(T = i(T, P = i(P, x = i(x, $, T, P, g, 10, l[49]), $, T, A, 15, l[50]), x, $, y, 21, l[51]), P = i(P, x = i(x, $ = i($, T, P, x, S, 6, l[52]), T, P, d, 10, l[53]), $, T, w, 15, l[54]), x, $, p, 21, l[55]), P = i(P, x = i(x, $ = i($, T, P, x, m, 6, l[56]), T, P, E, 10, l[57]), $, T, _, 15, l[58]), x, $, k, 21, l[59]), P = i(P, x = i(x, $ = i($, T, P, x, v, 6, l[60]), T, P, O, 10, l[61]), $, T, h, 15, l[62]), x, $, b, 21, l[63]), 
                            u[0] = u[0] + $ | 0, u[1] = u[1] + T | 0, u[2] = u[2] + P | 0, u[3] = u[3] + x | 0;
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
// 此文件包含从 wx050c4ed301c4ce30 提取的 MD5 算法实现
// 检测位置: 行 3474-3474
// 变量名: ___
// 检测源: static
