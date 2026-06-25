/**
 * MD5 算法实现
 * App ID: wx05f54f79939f91b3
 * 版本: v43
 * 代码哈希: -q7qx6a
 * 来源文件: output/wx05f54f79939f91b3/common/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.95
 * 函数名: anonymous
 * 行数: 31
 * 生成时间: 2025-07-05T13:17:10.790Z
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
                            var u = this._hash.words, l = t[n + 0], d = t[n + 1], h = t[n + 2], p = t[n + 3], v = t[n + 4], g = t[n + 5], m = t[n + 6], _ = t[n + 7], y = t[n + 8], b = t[n + 9], w = t[n + 10], x = t[n + 11], k = t[n + 12], S = t[n + 13], C = t[n + 14], A = t[n + 15], D = u[0], I = u[1], E = u[2], T = u[3];
                            I = o(I = o(I = o(I = o(I = i(I = i(I = i(I = i(I = r(I = r(I = r(I = r(I = e(I = e(I = e(I = e(I, E = e(E, T = e(T, D = e(D, I, E, T, l, 7, f[0]), I, E, d, 12, f[1]), D, I, h, 17, f[2]), T, D, p, 22, f[3]), E = e(E, T = e(T, D = e(D, I, E, T, v, 7, f[4]), I, E, g, 12, f[5]), D, I, m, 17, f[6]), T, D, _, 22, f[7]), E = e(E, T = e(T, D = e(D, I, E, T, y, 7, f[8]), I, E, b, 12, f[9]), D, I, w, 17, f[10]), T, D, x, 22, f[11]), E = e(E, T = e(T, D = e(D, I, E, T, k, 7, f[12]), I, E, S, 12, f[13]), D, I, C, 17, f[14]), T, D, A, 22, f[15]), E = r(E, T = r(T, D = r(D, I, E, T, d, 5, f[16]), I, E, m, 9, f[17]), D, I, x, 14, f[18]), T, D, l, 20, f[19]), E = r(E, T = r(T, D = r(D, I, E, T, g, 5, f[20]), I, E, w, 9, f[21]), D, I, A, 14, f[22]), T, D, v, 20, f[23]), E = r(E, T = r(T, D = r(D, I, E, T, b, 5, f[24]), I, E, C, 9, f[25]), D, I, p, 14, f[26]), T, D, y, 20, f[27]), E = r(E, T = r(T, D = r(D, I, E, T, S, 5, f[28]), I, E, h, 9, f[29]), D, I, _, 14, f[30]), T, D, k, 20, f[31]), E = i(E, T = i(T, D = i(D, I, E, T, g, 4, f[32]), I, E, y, 11, f[33]), D, I, x, 16, f[34]), T, D, C, 23, f[35]), E = i(E, T = i(T, D = i(D, I, E, T, d, 4, f[36]), I, E, v, 11, f[37]), D, I, _, 16, f[38]), T, D, w, 23, f[39]), E = i(E, T = i(T, D = i(D, I, E, T, S, 4, f[40]), I, E, l, 11, f[41]), D, I, p, 16, f[42]), T, D, m, 23, f[43]), E = i(E, T = i(T, D = i(D, I, E, T, b, 4, f[44]), I, E, k, 11, f[45]), D, I, A, 16, f[46]), T, D, h, 23, f[47]), E = o(E, T = o(T, D = o(D, I, E, T, l, 6, f[48]), I, E, _, 10, f[49]), D, I, C, 15, f[50]), T, D, g, 21, f[51]), E = o(E, T = o(T, D = o(D, I, E, T, k, 6, f[52]), I, E, p, 10, f[53]), D, I, w, 15, f[54]), T, D, d, 21, f[55]), E = o(E, T = o(T, D = o(D, I, E, T, y, 6, f[56]), I, E, A, 10, f[57]), D, I, m, 15, f[58]), T, D, S, 21, f[59]), E = o(E, T = o(T, D = o(D, I, E, T, v, 6, f[60]), I, E, x, 10, f[61]), D, I, h, 15, f[62]), T, D, b, 21, f[63]), 
                            u[0] = u[0] + D | 0, u[1] = u[1] + I | 0, u[2] = u[2] + E | 0, u[3] = u[3] + T | 0;
                        },
                        _doFinalize: function() {
                            var e = this._data, n = e.words, r = 8 * this._nDataBytes, i = 8 * e.sigBytes;
                            n[i >>> 5] |= 128 << 24 - i % 32;
                            var o = t.floor(r / 4294967296), a = r;
                            n[15 + (i + 64 >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), 
                            n[14 + (i + 64 >>> 9 << 4)] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8), 
                            e.sigBytes = 4 * (n.length + 1), this._process();
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
// 此文件包含从 wx05f54f79939f91b3 提取的 MD5 算法实现
// 检测位置: 行 4757-4757
// 变量名: ___
// 检测源: static
