/**
 * MD5 算法实现
 * App ID: wx05a8ab6ff8a518bc
 * 版本: v41
 * 代码哈希: -lvc9jn
 * 来源文件: output/wx05a8ab6ff8a518bc/common/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.95
 * 函数名: anonymous
 * 行数: 32
 * 生成时间: 2025-07-05T13:17:10.782Z
 */

u.extend({
                        _doReset: function() {
                            this._hash = new c.init([ 1732584193, 4023233417, 2562383102, 271733878 ]);
                        },
                        _doProcessBlock: function(e, n) {
                            for (var s = 0; s < 16; s++) {
                                var a = n + s, c = e[a];
                                e[a] = 16711935 & (c << 8 | c >>> 24) | 4278255360 & (c << 24 | c >>> 8);
                            }
                            var u = this._hash.words, f = e[n + 0], p = e[n + 1], h = e[n + 2], d = e[n + 3], v = e[n + 4], y = e[n + 5], _ = e[n + 6], g = e[n + 7], m = e[n + 8], b = e[n + 9], w = e[n + 10], A = e[n + 11], O = e[n + 12], S = e[n + 13], E = e[n + 14], k = e[n + 15], T = u[0], P = u[1], x = u[2], j = u[3];
                            T = i(T = o(T = o(T = o(T = o(T = r(T = r(T = r(T = r(T = t(T = t(T = t(T = t(T, P, x, j, f, 7, l[0]), P = t(P, x = t(x, j = t(j, T, P, x, p, 12, l[1]), T, P, h, 17, l[2]), j, T, d, 22, l[3]), x, j, v, 7, l[4]), P = t(P, x = t(x, j = t(j, T, P, x, y, 12, l[5]), T, P, _, 17, l[6]), j, T, g, 22, l[7]), x, j, m, 7, l[8]), P = t(P, x = t(x, j = t(j, T, P, x, b, 12, l[9]), T, P, w, 17, l[10]), j, T, A, 22, l[11]), x, j, O, 7, l[12]), P = t(P, x = t(x, j = t(j, T, P, x, S, 12, l[13]), T, P, E, 17, l[14]), j, T, k, 22, l[15]), x, j, p, 5, l[16]), P = r(P, x = r(x, j = r(j, T, P, x, _, 9, l[17]), T, P, A, 14, l[18]), j, T, f, 20, l[19]), x, j, y, 5, l[20]), P = r(P, x = r(x, j = r(j, T, P, x, w, 9, l[21]), T, P, k, 14, l[22]), j, T, v, 20, l[23]), x, j, b, 5, l[24]), P = r(P, x = r(x, j = r(j, T, P, x, E, 9, l[25]), T, P, d, 14, l[26]), j, T, m, 20, l[27]), x, j, S, 5, l[28]), P = r(P, x = r(x, j = r(j, T, P, x, h, 9, l[29]), T, P, g, 14, l[30]), j, T, O, 20, l[31]), x, j, y, 4, l[32]), P = o(P, x = o(x, j = o(j, T, P, x, m, 11, l[33]), T, P, A, 16, l[34]), j, T, E, 23, l[35]), x, j, p, 4, l[36]), P = o(P, x = o(x, j = o(j, T, P, x, v, 11, l[37]), T, P, g, 16, l[38]), j, T, w, 23, l[39]), x, j, S, 4, l[40]), P = o(P, x = o(x, j = o(j, T, P, x, f, 11, l[41]), T, P, d, 16, l[42]), j, T, _, 23, l[43]), x, j, b, 4, l[44]), P = o(P, x = o(x, j = o(j, T, P, x, O, 11, l[45]), T, P, k, 16, l[46]), j, T, h, 23, l[47]), x, j, f, 6, l[48]), 
                            P = i(P = i(P = i(P = i(P, x = i(x, j = i(j, T, P, x, g, 10, l[49]), T, P, E, 15, l[50]), j, T, y, 21, l[51]), x = i(x, j = i(j, T = i(T, P, x, j, O, 6, l[52]), P, x, d, 10, l[53]), T, P, w, 15, l[54]), j, T, p, 21, l[55]), x = i(x, j = i(j, T = i(T, P, x, j, m, 6, l[56]), P, x, k, 10, l[57]), T, P, _, 15, l[58]), j, T, S, 21, l[59]), x = i(x, j = i(j, T = i(T, P, x, j, v, 6, l[60]), P, x, A, 10, l[61]), T, P, h, 15, l[62]), j, T, b, 21, l[63]), 
                            u[0] = u[0] + T | 0, u[1] = u[1] + P | 0, u[2] = u[2] + x | 0, u[3] = u[3] + j | 0;
                        },
                        _doFinalize: function() {
                            var t = this._data, n = t.words, r = 8 * this._nDataBytes, o = 8 * t.sigBytes;
                            n[o >>> 5] |= 128 << 24 - o % 32;
                            var i = e.floor(r / 4294967296), s = r;
                            n[15 + (o + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), 
                            n[14 + (o + 64 >>> 9 << 4)] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8), 
                            t.sigBytes = 4 * (n.length + 1), this._process();
                            for (var a = this._hash, c = a.words, u = 0; u < 4; u++) {
                                var f = c[u];
                                c[u] = 16711935 & (f << 8 | f >>> 24) | 4278255360 & (f << 24 | f >>> 8);
                            }
                            return a;
                        },
                        clone: function() {
                            var e = u.clone.call(this);
                            return e._hash = this._hash.clone(), e;
                        }
                    })

// ==================== 元数据 ====================
// 此文件包含从 wx05a8ab6ff8a518bc 提取的 MD5 算法实现
// 检测位置: 行 3121-3121
// 变量名: ___
// 检测源: static
