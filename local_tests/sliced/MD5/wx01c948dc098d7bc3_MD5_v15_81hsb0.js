/**
 * MD5 算法实现
 * App ID: wx01c948dc098d7bc3
 * 版本: v15
 * 代码哈希: 81hsb0
 * 来源文件: output/wx01c948dc098d7bc3/common/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.95
 * 函数名: anonymous
 * 行数: 31
 * 生成时间: 2025-07-05T13:17:10.760Z
 */

s.extend({
                    _doReset: function() {
                        this._hash = new c.init([ 1732584193, 4023233417, 2562383102, 271733878 ]);
                    },
                    _doProcessBlock: function(e, t) {
                        for (var a = 0; a < 16; a++) {
                            var u = t + a, c = e[u];
                            e[u] = 16711935 & (c << 8 | c >>> 24) | 4278255360 & (c << 24 | c >>> 8);
                        }
                        var s = this._hash.words, l = e[t + 0], d = e[t + 1], p = e[t + 2], h = e[t + 3], v = e[t + 4], y = e[t + 5], m = e[t + 6], g = e[t + 7], b = e[t + 8], _ = e[t + 9], O = e[t + 10], S = e[t + 11], w = e[t + 12], E = e[t + 13], P = e[t + 14], T = e[t + 15], A = s[0], j = s[1], D = s[2], x = s[3];
                        j = i(j = i(j = i(j = i(j = o(j = o(j = o(j = o(j = n(j = n(j = n(j = n(j = r(j = r(j = r(j = r(j, D = r(D, x = r(x, A = r(A, j, D, x, l, 7, f[0]), j, D, d, 12, f[1]), A, j, p, 17, f[2]), x, A, h, 22, f[3]), D = r(D, x = r(x, A = r(A, j, D, x, v, 7, f[4]), j, D, y, 12, f[5]), A, j, m, 17, f[6]), x, A, g, 22, f[7]), D = r(D, x = r(x, A = r(A, j, D, x, b, 7, f[8]), j, D, _, 12, f[9]), A, j, O, 17, f[10]), x, A, S, 22, f[11]), D = r(D, x = r(x, A = r(A, j, D, x, w, 7, f[12]), j, D, E, 12, f[13]), A, j, P, 17, f[14]), x, A, T, 22, f[15]), D = n(D, x = n(x, A = n(A, j, D, x, d, 5, f[16]), j, D, m, 9, f[17]), A, j, S, 14, f[18]), x, A, l, 20, f[19]), D = n(D, x = n(x, A = n(A, j, D, x, y, 5, f[20]), j, D, O, 9, f[21]), A, j, T, 14, f[22]), x, A, v, 20, f[23]), D = n(D, x = n(x, A = n(A, j, D, x, _, 5, f[24]), j, D, P, 9, f[25]), A, j, h, 14, f[26]), x, A, b, 20, f[27]), D = n(D, x = n(x, A = n(A, j, D, x, E, 5, f[28]), j, D, p, 9, f[29]), A, j, g, 14, f[30]), x, A, w, 20, f[31]), D = o(D, x = o(x, A = o(A, j, D, x, y, 4, f[32]), j, D, b, 11, f[33]), A, j, S, 16, f[34]), x, A, P, 23, f[35]), D = o(D, x = o(x, A = o(A, j, D, x, d, 4, f[36]), j, D, v, 11, f[37]), A, j, g, 16, f[38]), x, A, O, 23, f[39]), D = o(D, x = o(x, A = o(A, j, D, x, E, 4, f[40]), j, D, l, 11, f[41]), A, j, h, 16, f[42]), x, A, m, 23, f[43]), D = o(D, x = o(x, A = o(A, j, D, x, _, 4, f[44]), j, D, w, 11, f[45]), A, j, T, 16, f[46]), x, A, p, 23, f[47]), D = i(D, x = i(x, A = i(A, j, D, x, l, 6, f[48]), j, D, g, 10, f[49]), A, j, P, 15, f[50]), x, A, y, 21, f[51]), D = i(D, x = i(x, A = i(A, j, D, x, w, 6, f[52]), j, D, h, 10, f[53]), A, j, O, 15, f[54]), x, A, d, 21, f[55]), D = i(D, x = i(x, A = i(A, j, D, x, b, 6, f[56]), j, D, T, 10, f[57]), A, j, m, 15, f[58]), x, A, E, 21, f[59]), D = i(D, x = i(x, A = i(A, j, D, x, v, 6, f[60]), j, D, S, 10, f[61]), A, j, p, 15, f[62]), x, A, _, 21, f[63]), 
                        s[0] = s[0] + A | 0, s[1] = s[1] + j | 0, s[2] = s[2] + D | 0, s[3] = s[3] + x | 0;
                    },
                    _doFinalize: function() {
                        var e = this._data, r = e.words, n = 8 * this._nDataBytes, o = 8 * e.sigBytes;
                        r[o >>> 5] |= 128 << 24 - o % 32;
                        var i = t.floor(n / 4294967296), a = n;
                        r[15 + (o + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), 
                        r[14 + (o + 64 >>> 9 << 4)] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8), 
                        e.sigBytes = 4 * (r.length + 1), this._process();
                        for (var u = this._hash, c = u.words, s = 0; s < 4; s++) {
                            var l = c[s];
                            c[s] = 16711935 & (l << 8 | l >>> 24) | 4278255360 & (l << 24 | l >>> 8);
                        }
                        return u;
                    },
                    clone: function() {
                        var e = s.clone.call(this);
                        return e._hash = this._hash.clone(), e;
                    }
                })

// ==================== 元数据 ====================
// 此文件包含从 wx01c948dc098d7bc3 提取的 MD5 算法实现
// 检测位置: 行 7081-7081
// 变量名: ___
// 检测源: static
