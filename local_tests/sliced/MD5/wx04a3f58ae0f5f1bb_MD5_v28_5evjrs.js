/**
 * MD5 算法实现
 * App ID: wx04a3f58ae0f5f1bb
 * 版本: v28
 * 代码哈希: 5evjrs
 * 来源文件: output/wx04a3f58ae0f5f1bb/common/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.95
 * 函数名: anonymous
 * 行数: 51
 * 生成时间: 2025-07-05T13:17:10.770Z
 */

i.extend({
                        _doReset: function() {
                            this._hash = new o.init([ 1732584193, 4023233417, 2562383102, 271733878 ]);
                        },
                        _doProcessBlock: function(e, t) {
                            for (var n = 0; n < 16; n++) {
                                var r = t + n, o = e[r];
                                e[r] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8);
                            }
                            var i = this._hash.words, a = e[t + 0], u = e[t + 1], h = e[t + 2], d = e[t + 3], g = e[t + 4], m = e[t + 5], y = e[t + 6], v = e[t + 7], _ = e[t + 8], C = e[t + 9], S = e[t + 10], b = e[t + 11], M = e[t + 12], I = e[t + 13], T = e[t + 14], w = e[t + 15], k = i[0], E = i[1], D = i[2], A = i[3];
                            k = c(k, E, D, A, a, 7, s[0]), A = c(A, k, E, D, u, 12, s[1]), D = c(D, A, k, E, h, 17, s[2]), 
                            E = c(E, D, A, k, d, 22, s[3]), k = c(k, E, D, A, g, 7, s[4]), A = c(A, k, E, D, m, 12, s[5]), 
                            D = c(D, A, k, E, y, 17, s[6]), E = c(E, D, A, k, v, 22, s[7]), k = c(k, E, D, A, _, 7, s[8]), 
                            A = c(A, k, E, D, C, 12, s[9]), D = c(D, A, k, E, S, 17, s[10]), E = c(E, D, A, k, b, 22, s[11]), 
                            k = c(k, E, D, A, M, 7, s[12]), A = c(A, k, E, D, I, 12, s[13]), D = c(D, A, k, E, T, 17, s[14]), 
                            k = l(k, E = c(E, D, A, k, w, 22, s[15]), D, A, u, 5, s[16]), A = l(A, k, E, D, y, 9, s[17]), 
                            D = l(D, A, k, E, b, 14, s[18]), E = l(E, D, A, k, a, 20, s[19]), k = l(k, E, D, A, m, 5, s[20]), 
                            A = l(A, k, E, D, S, 9, s[21]), D = l(D, A, k, E, w, 14, s[22]), E = l(E, D, A, k, g, 20, s[23]), 
                            k = l(k, E, D, A, C, 5, s[24]), A = l(A, k, E, D, T, 9, s[25]), D = l(D, A, k, E, d, 14, s[26]), 
                            E = l(E, D, A, k, _, 20, s[27]), k = l(k, E, D, A, I, 5, s[28]), A = l(A, k, E, D, h, 9, s[29]), 
                            D = l(D, A, k, E, v, 14, s[30]), k = p(k, E = l(E, D, A, k, M, 20, s[31]), D, A, m, 4, s[32]), 
                            A = p(A, k, E, D, _, 11, s[33]), D = p(D, A, k, E, b, 16, s[34]), E = p(E, D, A, k, T, 23, s[35]), 
                            k = p(k, E, D, A, u, 4, s[36]), A = p(A, k, E, D, g, 11, s[37]), D = p(D, A, k, E, v, 16, s[38]), 
                            E = p(E, D, A, k, S, 23, s[39]), k = p(k, E, D, A, I, 4, s[40]), A = p(A, k, E, D, a, 11, s[41]), 
                            D = p(D, A, k, E, d, 16, s[42]), E = p(E, D, A, k, y, 23, s[43]), k = p(k, E, D, A, C, 4, s[44]), 
                            A = p(A, k, E, D, M, 11, s[45]), D = p(D, A, k, E, w, 16, s[46]), k = f(k, E = p(E, D, A, k, h, 23, s[47]), D, A, a, 6, s[48]), 
                            A = f(A, k, E, D, v, 10, s[49]), D = f(D, A, k, E, T, 15, s[50]), E = f(E, D, A, k, m, 21, s[51]), 
                            k = f(k, E, D, A, M, 6, s[52]), A = f(A, k, E, D, d, 10, s[53]), D = f(D, A, k, E, S, 15, s[54]), 
                            E = f(E, D, A, k, u, 21, s[55]), k = f(k, E, D, A, _, 6, s[56]), A = f(A, k, E, D, w, 10, s[57]), 
                            D = f(D, A, k, E, y, 15, s[58]), E = f(E, D, A, k, I, 21, s[59]), k = f(k, E, D, A, g, 6, s[60]), 
                            A = f(A, k, E, D, b, 10, s[61]), D = f(D, A, k, E, h, 15, s[62]), E = f(E, D, A, k, C, 21, s[63]), 
                            i[0] = i[0] + k | 0, i[1] = i[1] + E | 0, i[2] = i[2] + D | 0, i[3] = i[3] + A | 0;
                        },
                        _doFinalize: function() {
                            var t = this._data, n = t.words, r = 8 * this._nDataBytes, o = 8 * t.sigBytes;
                            n[o >>> 5] |= 128 << 24 - o % 32;
                            var i = e.floor(r / 4294967296), a = r;
                            n[15 + (o + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), 
                            n[14 + (o + 64 >>> 9 << 4)] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8), 
                            t.sigBytes = 4 * (n.length + 1), this._process();
                            for (var s = this._hash, u = s.words, c = 0; c < 4; c++) {
                                var l = u[c];
                                u[c] = 16711935 & (l << 8 | l >>> 24) | 4278255360 & (l << 24 | l >>> 8);
                            }
                            return s;
                        },
                        clone: function() {
                            var e = i.clone.call(this);
                            return e._hash = this._hash.clone(), e;
                        }
                    })

// ==================== 元数据 ====================
// 此文件包含从 wx04a3f58ae0f5f1bb 提取的 MD5 算法实现
// 检测位置: 行 383-383
// 变量名: ___
// 检测源: static
