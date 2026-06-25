/**
 * MD5 算法实现
 * App ID: wx015136adbe545972
 * 版本: v11
 * 代码哈希: qhboum
 * 来源文件: output/wx015136adbe545972/common/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.95
 * 函数名: anonymous
 * 行数: 32
 * 生成时间: 2025-07-05T13:17:10.754Z
 */

u.extend({
                        _doReset: function() {
                            this._hash = new c.init([ 1732584193, 4023233417, 2562383102, 271733878 ]);
                        },
                        _doProcessBlock: function(t, n) {
                            for (var a = 0; a < 16; a++) {
                                var s = n + a, c = t[s];
                                t[s] = 16711935 & (c << 8 | c >>> 24) | 4278255360 & (c << 24 | c >>> 8);
                            }
                            var u = this._hash.words, f = t[n + 0], p = t[n + 1], h = t[n + 2], d = t[n + 3], v = t[n + 4], y = t[n + 5], _ = t[n + 6], g = t[n + 7], m = t[n + 8], b = t[n + 9], w = t[n + 10], O = t[n + 11], k = t[n + 12], S = t[n + 13], A = t[n + 14], E = t[n + 15], x = u[0], T = u[1], j = u[2], P = u[3];
                            x = i(x = o(x = o(x = o(x = o(x = r(x = r(x = r(x = r(x = e(x = e(x = e(x = e(x, T, j, P, f, 7, l[0]), T = e(T, j = e(j, P = e(P, x, T, j, p, 12, l[1]), x, T, h, 17, l[2]), P, x, d, 22, l[3]), j, P, v, 7, l[4]), T = e(T, j = e(j, P = e(P, x, T, j, y, 12, l[5]), x, T, _, 17, l[6]), P, x, g, 22, l[7]), j, P, m, 7, l[8]), T = e(T, j = e(j, P = e(P, x, T, j, b, 12, l[9]), x, T, w, 17, l[10]), P, x, O, 22, l[11]), j, P, k, 7, l[12]), T = e(T, j = e(j, P = e(P, x, T, j, S, 12, l[13]), x, T, A, 17, l[14]), P, x, E, 22, l[15]), j, P, p, 5, l[16]), T = r(T, j = r(j, P = r(P, x, T, j, _, 9, l[17]), x, T, O, 14, l[18]), P, x, f, 20, l[19]), j, P, y, 5, l[20]), T = r(T, j = r(j, P = r(P, x, T, j, w, 9, l[21]), x, T, E, 14, l[22]), P, x, v, 20, l[23]), j, P, b, 5, l[24]), T = r(T, j = r(j, P = r(P, x, T, j, A, 9, l[25]), x, T, d, 14, l[26]), P, x, m, 20, l[27]), j, P, S, 5, l[28]), T = r(T, j = r(j, P = r(P, x, T, j, h, 9, l[29]), x, T, g, 14, l[30]), P, x, k, 20, l[31]), j, P, y, 4, l[32]), T = o(T, j = o(j, P = o(P, x, T, j, m, 11, l[33]), x, T, O, 16, l[34]), P, x, A, 23, l[35]), j, P, p, 4, l[36]), T = o(T, j = o(j, P = o(P, x, T, j, v, 11, l[37]), x, T, g, 16, l[38]), P, x, w, 23, l[39]), j, P, S, 4, l[40]), T = o(T, j = o(j, P = o(P, x, T, j, f, 11, l[41]), x, T, d, 16, l[42]), P, x, _, 23, l[43]), j, P, b, 4, l[44]), T = o(T, j = o(j, P = o(P, x, T, j, k, 11, l[45]), x, T, E, 16, l[46]), P, x, h, 23, l[47]), j, P, f, 6, l[48]), 
                            T = i(T = i(T = i(T = i(T, j = i(j, P = i(P, x, T, j, g, 10, l[49]), x, T, A, 15, l[50]), P, x, y, 21, l[51]), j = i(j, P = i(P, x = i(x, T, j, P, k, 6, l[52]), T, j, d, 10, l[53]), x, T, w, 15, l[54]), P, x, p, 21, l[55]), j = i(j, P = i(P, x = i(x, T, j, P, m, 6, l[56]), T, j, E, 10, l[57]), x, T, _, 15, l[58]), P, x, S, 21, l[59]), j = i(j, P = i(P, x = i(x, T, j, P, v, 6, l[60]), T, j, O, 10, l[61]), x, T, h, 15, l[62]), P, x, b, 21, l[63]), 
                            u[0] = u[0] + x | 0, u[1] = u[1] + T | 0, u[2] = u[2] + j | 0, u[3] = u[3] + P | 0;
                        },
                        _doFinalize: function() {
                            var e = this._data, n = e.words, r = 8 * this._nDataBytes, o = 8 * e.sigBytes;
                            n[o >>> 5] |= 128 << 24 - o % 32;
                            var i = t.floor(r / 4294967296), a = r;
                            n[15 + (o + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), 
                            n[14 + (o + 64 >>> 9 << 4)] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8), 
                            e.sigBytes = 4 * (n.length + 1), this._process();
                            for (var s = this._hash, c = s.words, u = 0; u < 4; u++) {
                                var f = c[u];
                                c[u] = 16711935 & (f << 8 | f >>> 24) | 4278255360 & (f << 24 | f >>> 8);
                            }
                            return s;
                        },
                        clone: function() {
                            var t = u.clone.call(this);
                            return t._hash = this._hash.clone(), t;
                        }
                    })

// ==================== 元数据 ====================
// 此文件包含从 wx015136adbe545972 提取的 MD5 算法实现
// 检测位置: 行 4257-4257
// 变量名: ___
// 检测源: static
