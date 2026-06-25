/**
 * MD5 算法实现
 * App ID: wx05ff3e6933129cb4
 * 版本: v44
 * 代码哈希: ab8ene
 * 来源文件: output/wx05ff3e6933129cb4/common/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.95
 * 函数名: anonymous
 * 行数: 31
 * 生成时间: 2025-07-05T13:17:10.791Z
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
                        var u = this._hash.words, l = t[e + 0], h = t[e + 1], d = t[e + 2], p = t[e + 3], g = t[e + 4], v = t[e + 5], y = t[e + 6], m = t[e + 7], _ = t[e + 8], b = t[e + 9], w = t[e + 10], S = t[e + 11], k = t[e + 12], x = t[e + 13], O = t[e + 14], A = t[e + 15], C = u[0], T = u[1], I = u[2], P = u[3];
                        T = o(T = o(T = o(T = o(T = i(T = i(T = i(T = i(T = r(T = r(T = r(T = r(T = n(T = n(T = n(T = n(T, I = n(I, P = n(P, C = n(C, T, I, P, l, 7, f[0]), T, I, h, 12, f[1]), C, T, d, 17, f[2]), P, C, p, 22, f[3]), I = n(I, P = n(P, C = n(C, T, I, P, g, 7, f[4]), T, I, v, 12, f[5]), C, T, y, 17, f[6]), P, C, m, 22, f[7]), I = n(I, P = n(P, C = n(C, T, I, P, _, 7, f[8]), T, I, b, 12, f[9]), C, T, w, 17, f[10]), P, C, S, 22, f[11]), I = n(I, P = n(P, C = n(C, T, I, P, k, 7, f[12]), T, I, x, 12, f[13]), C, T, O, 17, f[14]), P, C, A, 22, f[15]), I = r(I, P = r(P, C = r(C, T, I, P, h, 5, f[16]), T, I, y, 9, f[17]), C, T, S, 14, f[18]), P, C, l, 20, f[19]), I = r(I, P = r(P, C = r(C, T, I, P, v, 5, f[20]), T, I, w, 9, f[21]), C, T, A, 14, f[22]), P, C, g, 20, f[23]), I = r(I, P = r(P, C = r(C, T, I, P, b, 5, f[24]), T, I, O, 9, f[25]), C, T, p, 14, f[26]), P, C, _, 20, f[27]), I = r(I, P = r(P, C = r(C, T, I, P, x, 5, f[28]), T, I, d, 9, f[29]), C, T, m, 14, f[30]), P, C, k, 20, f[31]), I = i(I, P = i(P, C = i(C, T, I, P, v, 4, f[32]), T, I, _, 11, f[33]), C, T, S, 16, f[34]), P, C, O, 23, f[35]), I = i(I, P = i(P, C = i(C, T, I, P, h, 4, f[36]), T, I, g, 11, f[37]), C, T, m, 16, f[38]), P, C, w, 23, f[39]), I = i(I, P = i(P, C = i(C, T, I, P, x, 4, f[40]), T, I, l, 11, f[41]), C, T, p, 16, f[42]), P, C, y, 23, f[43]), I = i(I, P = i(P, C = i(C, T, I, P, b, 4, f[44]), T, I, k, 11, f[45]), C, T, A, 16, f[46]), P, C, d, 23, f[47]), I = o(I, P = o(P, C = o(C, T, I, P, l, 6, f[48]), T, I, m, 10, f[49]), C, T, O, 15, f[50]), P, C, v, 21, f[51]), I = o(I, P = o(P, C = o(C, T, I, P, k, 6, f[52]), T, I, p, 10, f[53]), C, T, w, 15, f[54]), P, C, h, 21, f[55]), I = o(I, P = o(P, C = o(C, T, I, P, _, 6, f[56]), T, I, A, 10, f[57]), C, T, y, 15, f[58]), P, C, x, 21, f[59]), I = o(I, P = o(P, C = o(C, T, I, P, g, 6, f[60]), T, I, S, 10, f[61]), C, T, d, 15, f[62]), P, C, b, 21, f[63]), 
                        u[0] = u[0] + C | 0, u[1] = u[1] + T | 0, u[2] = u[2] + I | 0, u[3] = u[3] + P | 0;
                    },
                    _doFinalize: function() {
                        var t = this._data, n = t.words, r = 8 * this._nDataBytes, i = 8 * t.sigBytes;
                        n[i >>> 5] |= 128 << 24 - i % 32;
                        var o = e.floor(r / 4294967296), a = r;
                        n[15 + (i + 64 >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), 
                        n[14 + (i + 64 >>> 9 << 4)] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8), 
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
// 此文件包含从 wx05ff3e6933129cb4 提取的 MD5 算法实现
// 检测位置: 行 3309-3309
// 变量名: ___
// 检测源: static
