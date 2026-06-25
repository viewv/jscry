/**
 * MD5 算法实现
 * App ID: wx03f03f8105d28e41
 * 版本: v25
 * 代码哈希: -jn6eon
 * 来源文件: output/wx03f03f8105d28e41/common/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.95
 * 函数名: anonymous
 * 行数: 51
 * 生成时间: 2025-07-05T13:17:10.768Z
 */

s.extend({
                        _doReset: function _doReset() {
                            this._hash = new o.init([ 1732584193, 4023233417, 2562383102, 271733878 ]);
                        },
                        _doProcessBlock: function _doProcessBlock(e, t) {
                            for (var n = 0; n < 16; n++) {
                                var r = t + n, o = e[r];
                                e[r] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8);
                            }
                            var s = this._hash.words, i = e[t + 0], c = e[t + 1], p = e[t + 2], d = e[t + 3], y = e[t + 4], g = e[t + 5], v = e[t + 6], _ = e[t + 7], m = e[t + 8], b = e[t + 9], w = e[t + 10], T = e[t + 11], S = e[t + 12], E = e[t + 13], k = e[t + 14], O = e[t + 15], A = s[0], P = s[1], I = s[2], N = s[3];
                            A = u(A, P, I, N, i, 7, a[0]), N = u(N, A, P, I, c, 12, a[1]), I = u(I, N, A, P, p, 17, a[2]), 
                            P = u(P, I, N, A, d, 22, a[3]), A = u(A, P, I, N, y, 7, a[4]), N = u(N, A, P, I, g, 12, a[5]), 
                            I = u(I, N, A, P, v, 17, a[6]), P = u(P, I, N, A, _, 22, a[7]), A = u(A, P, I, N, m, 7, a[8]), 
                            N = u(N, A, P, I, b, 12, a[9]), I = u(I, N, A, P, w, 17, a[10]), P = u(P, I, N, A, T, 22, a[11]), 
                            A = u(A, P, I, N, S, 7, a[12]), N = u(N, A, P, I, E, 12, a[13]), I = u(I, N, A, P, k, 17, a[14]), 
                            A = l(A, P = u(P, I, N, A, O, 22, a[15]), I, N, c, 5, a[16]), N = l(N, A, P, I, v, 9, a[17]), 
                            I = l(I, N, A, P, T, 14, a[18]), P = l(P, I, N, A, i, 20, a[19]), A = l(A, P, I, N, g, 5, a[20]), 
                            N = l(N, A, P, I, w, 9, a[21]), I = l(I, N, A, P, O, 14, a[22]), P = l(P, I, N, A, y, 20, a[23]), 
                            A = l(A, P, I, N, b, 5, a[24]), N = l(N, A, P, I, k, 9, a[25]), I = l(I, N, A, P, d, 14, a[26]), 
                            P = l(P, I, N, A, m, 20, a[27]), A = l(A, P, I, N, E, 5, a[28]), N = l(N, A, P, I, p, 9, a[29]), 
                            I = l(I, N, A, P, _, 14, a[30]), A = h(A, P = l(P, I, N, A, S, 20, a[31]), I, N, g, 4, a[32]), 
                            N = h(N, A, P, I, m, 11, a[33]), I = h(I, N, A, P, T, 16, a[34]), P = h(P, I, N, A, k, 23, a[35]), 
                            A = h(A, P, I, N, c, 4, a[36]), N = h(N, A, P, I, y, 11, a[37]), I = h(I, N, A, P, _, 16, a[38]), 
                            P = h(P, I, N, A, w, 23, a[39]), A = h(A, P, I, N, E, 4, a[40]), N = h(N, A, P, I, i, 11, a[41]), 
                            I = h(I, N, A, P, d, 16, a[42]), P = h(P, I, N, A, v, 23, a[43]), A = h(A, P, I, N, b, 4, a[44]), 
                            N = h(N, A, P, I, S, 11, a[45]), I = h(I, N, A, P, O, 16, a[46]), A = f(A, P = h(P, I, N, A, p, 23, a[47]), I, N, i, 6, a[48]), 
                            N = f(N, A, P, I, _, 10, a[49]), I = f(I, N, A, P, k, 15, a[50]), P = f(P, I, N, A, g, 21, a[51]), 
                            A = f(A, P, I, N, S, 6, a[52]), N = f(N, A, P, I, d, 10, a[53]), I = f(I, N, A, P, w, 15, a[54]), 
                            P = f(P, I, N, A, c, 21, a[55]), A = f(A, P, I, N, m, 6, a[56]), N = f(N, A, P, I, O, 10, a[57]), 
                            I = f(I, N, A, P, v, 15, a[58]), P = f(P, I, N, A, E, 21, a[59]), A = f(A, P, I, N, y, 6, a[60]), 
                            N = f(N, A, P, I, T, 10, a[61]), I = f(I, N, A, P, p, 15, a[62]), P = f(P, I, N, A, b, 21, a[63]), 
                            s[0] = s[0] + A | 0, s[1] = s[1] + P | 0, s[2] = s[2] + I | 0, s[3] = s[3] + N | 0;
                        },
                        _doFinalize: function _doFinalize() {
                            var t = this._data, n = t.words, r = 8 * this._nDataBytes, o = 8 * t.sigBytes;
                            n[o >>> 5] |= 128 << 24 - o % 32;
                            var s = e.floor(r / 4294967296), i = r;
                            n[15 + (o + 64 >>> 9 << 4)] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8), 
                            n[14 + (o + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), 
                            t.sigBytes = 4 * (n.length + 1), this._process();
                            for (var a = this._hash, c = a.words, u = 0; u < 4; u++) {
                                var l = c[u];
                                c[u] = 16711935 & (l << 8 | l >>> 24) | 4278255360 & (l << 24 | l >>> 8);
                            }
                            return a;
                        },
                        clone: function clone() {
                            var e = s.clone.call(this);
                            return e._hash = this._hash.clone(), e;
                        }
                    })

// ==================== 元数据 ====================
// 此文件包含从 wx03f03f8105d28e41 提取的 MD5 算法实现
// 检测位置: 行 14213-14213
// 变量名: ___
// 检测源: static
