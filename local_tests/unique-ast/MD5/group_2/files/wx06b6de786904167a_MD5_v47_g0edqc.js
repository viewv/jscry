/**
 * MD5 算法实现
 * App ID: wx06b6de786904167a
 * 版本: v47
 * 代码哈希: g0edqc
 * 来源文件: output/wx06b6de786904167a/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.95
 * 函数名: anonymous
 * 行数: 31
 * 生成时间: 2025-07-05T13:17:10.796Z
 */

u.extend({
                    _doReset: function() {
                        this._hash = new c.init([ 1732584193, 4023233417, 2562383102, 271733878 ]);
                    },
                    _doProcessBlock: function(t, e) {
                        for (var a = 0; a < 16; a++) {
                            var s = e + a, c = t[s];
                            t[s] = 16711935 & (c << 8 | c >>> 24) | 4278255360 & (c << 24 | c >>> 8);
                        }
                        var u = this._hash.words, l = t[e + 0], f = t[e + 1], p = t[e + 2], h = t[e + 3], v = t[e + 4], g = t[e + 5], m = t[e + 6], y = t[e + 7], b = t[e + 8], _ = t[e + 9], A = t[e + 10], w = t[e + 11], x = t[e + 12], S = t[e + 13], k = t[e + 14], O = t[e + 15], C = u[0], P = u[1], E = u[2], T = u[3];
                        P = i(P = i(P = i(P = i(P = o(P = o(P = o(P = o(P = r(P = r(P = r(P = r(P = n(P = n(P = n(P = n(P, E = n(E, T = n(T, C = n(C, P, E, T, l, 7, d[0]), P, E, f, 12, d[1]), C, P, p, 17, d[2]), T, C, h, 22, d[3]), E = n(E, T = n(T, C = n(C, P, E, T, v, 7, d[4]), P, E, g, 12, d[5]), C, P, m, 17, d[6]), T, C, y, 22, d[7]), E = n(E, T = n(T, C = n(C, P, E, T, b, 7, d[8]), P, E, _, 12, d[9]), C, P, A, 17, d[10]), T, C, w, 22, d[11]), E = n(E, T = n(T, C = n(C, P, E, T, x, 7, d[12]), P, E, S, 12, d[13]), C, P, k, 17, d[14]), T, C, O, 22, d[15]), E = r(E, T = r(T, C = r(C, P, E, T, f, 5, d[16]), P, E, m, 9, d[17]), C, P, w, 14, d[18]), T, C, l, 20, d[19]), E = r(E, T = r(T, C = r(C, P, E, T, g, 5, d[20]), P, E, A, 9, d[21]), C, P, O, 14, d[22]), T, C, v, 20, d[23]), E = r(E, T = r(T, C = r(C, P, E, T, _, 5, d[24]), P, E, k, 9, d[25]), C, P, h, 14, d[26]), T, C, b, 20, d[27]), E = r(E, T = r(T, C = r(C, P, E, T, S, 5, d[28]), P, E, p, 9, d[29]), C, P, y, 14, d[30]), T, C, x, 20, d[31]), E = o(E, T = o(T, C = o(C, P, E, T, g, 4, d[32]), P, E, b, 11, d[33]), C, P, w, 16, d[34]), T, C, k, 23, d[35]), E = o(E, T = o(T, C = o(C, P, E, T, f, 4, d[36]), P, E, v, 11, d[37]), C, P, y, 16, d[38]), T, C, A, 23, d[39]), E = o(E, T = o(T, C = o(C, P, E, T, S, 4, d[40]), P, E, l, 11, d[41]), C, P, h, 16, d[42]), T, C, m, 23, d[43]), E = o(E, T = o(T, C = o(C, P, E, T, _, 4, d[44]), P, E, x, 11, d[45]), C, P, O, 16, d[46]), T, C, p, 23, d[47]), E = i(E, T = i(T, C = i(C, P, E, T, l, 6, d[48]), P, E, y, 10, d[49]), C, P, k, 15, d[50]), T, C, g, 21, d[51]), E = i(E, T = i(T, C = i(C, P, E, T, x, 6, d[52]), P, E, h, 10, d[53]), C, P, A, 15, d[54]), T, C, f, 21, d[55]), E = i(E, T = i(T, C = i(C, P, E, T, b, 6, d[56]), P, E, O, 10, d[57]), C, P, m, 15, d[58]), T, C, S, 21, d[59]), E = i(E, T = i(T, C = i(C, P, E, T, v, 6, d[60]), P, E, w, 10, d[61]), C, P, p, 15, d[62]), T, C, _, 21, d[63]), 
                        u[0] = u[0] + C | 0, u[1] = u[1] + P | 0, u[2] = u[2] + E | 0, u[3] = u[3] + T | 0;
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
                        var t = u.clone.call(this);
                        return t._hash = this._hash.clone(), t;
                    }
                })

// ==================== 元数据 ====================
// 此文件包含从 wx06b6de786904167a 提取的 MD5 算法实现
// 检测位置: 行 8660-8660
// 变量名: ___
// 检测源: static
