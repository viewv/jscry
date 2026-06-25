/**
 * MD5 算法实现
 * App ID: wx09e4311abc960c36
 * 版本: v55
 * 代码哈希: uoityz
 * 来源文件: output/wx09e4311abc960c36/common/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.95
 * 函数名: anonymous
 * 行数: 32
 * 生成时间: 2025-07-05T13:17:10.807Z
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
                            var u = this._hash.words, l = e[n + 0], p = e[n + 1], d = e[n + 2], h = e[n + 3], v = e[n + 4], y = e[n + 5], _ = e[n + 6], g = e[n + 7], m = e[n + 8], b = e[n + 9], w = e[n + 10], O = e[n + 11], k = e[n + 12], A = e[n + 13], S = e[n + 14], E = e[n + 15], T = u[0], x = u[1], P = u[2], j = u[3];
                            T = i(T = o(T = o(T = o(T = o(T = r(T = r(T = r(T = r(T = t(T = t(T = t(T = t(T, x, P, j, l, 7, f[0]), x = t(x, P = t(P, j = t(j, T, x, P, p, 12, f[1]), T, x, d, 17, f[2]), j, T, h, 22, f[3]), P, j, v, 7, f[4]), x = t(x, P = t(P, j = t(j, T, x, P, y, 12, f[5]), T, x, _, 17, f[6]), j, T, g, 22, f[7]), P, j, m, 7, f[8]), x = t(x, P = t(P, j = t(j, T, x, P, b, 12, f[9]), T, x, w, 17, f[10]), j, T, O, 22, f[11]), P, j, k, 7, f[12]), x = t(x, P = t(P, j = t(j, T, x, P, A, 12, f[13]), T, x, S, 17, f[14]), j, T, E, 22, f[15]), P, j, p, 5, f[16]), x = r(x, P = r(P, j = r(j, T, x, P, _, 9, f[17]), T, x, O, 14, f[18]), j, T, l, 20, f[19]), P, j, y, 5, f[20]), x = r(x, P = r(P, j = r(j, T, x, P, w, 9, f[21]), T, x, E, 14, f[22]), j, T, v, 20, f[23]), P, j, b, 5, f[24]), x = r(x, P = r(P, j = r(j, T, x, P, S, 9, f[25]), T, x, h, 14, f[26]), j, T, m, 20, f[27]), P, j, A, 5, f[28]), x = r(x, P = r(P, j = r(j, T, x, P, d, 9, f[29]), T, x, g, 14, f[30]), j, T, k, 20, f[31]), P, j, y, 4, f[32]), x = o(x, P = o(P, j = o(j, T, x, P, m, 11, f[33]), T, x, O, 16, f[34]), j, T, S, 23, f[35]), P, j, p, 4, f[36]), x = o(x, P = o(P, j = o(j, T, x, P, v, 11, f[37]), T, x, g, 16, f[38]), j, T, w, 23, f[39]), P, j, A, 4, f[40]), x = o(x, P = o(P, j = o(j, T, x, P, l, 11, f[41]), T, x, h, 16, f[42]), j, T, _, 23, f[43]), P, j, b, 4, f[44]), x = o(x, P = o(P, j = o(j, T, x, P, k, 11, f[45]), T, x, E, 16, f[46]), j, T, d, 23, f[47]), P, j, l, 6, f[48]), 
                            x = i(x = i(x = i(x = i(x, P = i(P, j = i(j, T, x, P, g, 10, f[49]), T, x, S, 15, f[50]), j, T, y, 21, f[51]), P = i(P, j = i(j, T = i(T, x, P, j, k, 6, f[52]), x, P, h, 10, f[53]), T, x, w, 15, f[54]), j, T, p, 21, f[55]), P = i(P, j = i(j, T = i(T, x, P, j, m, 6, f[56]), x, P, E, 10, f[57]), T, x, _, 15, f[58]), j, T, A, 21, f[59]), P = i(P, j = i(j, T = i(T, x, P, j, v, 6, f[60]), x, P, O, 10, f[61]), T, x, d, 15, f[62]), j, T, b, 21, f[63]), 
                            u[0] = u[0] + T | 0, u[1] = u[1] + x | 0, u[2] = u[2] + P | 0, u[3] = u[3] + j | 0;
                        },
                        _doFinalize: function() {
                            var t = this._data, n = t.words, r = 8 * this._nDataBytes, o = 8 * t.sigBytes;
                            n[o >>> 5] |= 128 << 24 - o % 32;
                            var i = e.floor(r / 4294967296), a = r;
                            n[15 + (o + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), 
                            n[14 + (o + 64 >>> 9 << 4)] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8), 
                            t.sigBytes = 4 * (n.length + 1), this._process();
                            for (var s = this._hash, c = s.words, u = 0; u < 4; u++) {
                                var l = c[u];
                                c[u] = 16711935 & (l << 8 | l >>> 24) | 4278255360 & (l << 24 | l >>> 8);
                            }
                            return s;
                        },
                        clone: function() {
                            var e = u.clone.call(this);
                            return e._hash = this._hash.clone(), e;
                        }
                    })

// ==================== 元数据 ====================
// 此文件包含从 wx09e4311abc960c36 提取的 MD5 算法实现
// 检测位置: 行 1358-1358
// 变量名: ___
// 检测源: static
