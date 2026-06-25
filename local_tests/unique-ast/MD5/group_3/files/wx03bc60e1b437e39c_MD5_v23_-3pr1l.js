/**
 * MD5 算法实现
 * App ID: wx03bc60e1b437e39c
 * 版本: v23
 * 代码哈希: -3pr1lv
 * 来源文件: output/wx03bc60e1b437e39c/common/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.95
 * 函数名: anonymous
 * 行数: 52
 * 生成时间: 2025-07-05T13:17:10.767Z
 */

a.extend({
                        _doReset: function() {
                            this._hash = new i.init([ 1732584193, 4023233417, 2562383102, 271733878 ]);
                        },
                        _doProcessBlock: function(e, t) {
                            for (var n = 0; n < 16; n++) {
                                var r = t + n, i = e[r];
                                e[r] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8);
                            }
                            var a = this._hash.words, s = e[t + 0], d = e[t + 1], l = e[t + 2], _ = e[t + 3], m = e[t + 4], p = e[t + 5], y = e[t + 6], b = e[t + 7], v = e[t + 8], g = e[t + 9], M = e[t + 10], w = e[t + 11], L = e[t + 12], k = e[t + 13], Y = e[t + 14], S = e[t + 15], D = a[0], T = a[1], x = a[2], j = a[3];
                            D = u(D, T, x, j, s, 7, o[0]), j = u(j, D, T, x, d, 12, o[1]), x = u(x, j, D, T, l, 17, o[2]), 
                            T = u(T, x, j, D, _, 22, o[3]), D = u(D, T, x, j, m, 7, o[4]), j = u(j, D, T, x, p, 12, o[5]), 
                            x = u(x, j, D, T, y, 17, o[6]), T = u(T, x, j, D, b, 22, o[7]), D = u(D, T, x, j, v, 7, o[8]), 
                            j = u(j, D, T, x, g, 12, o[9]), x = u(x, j, D, T, M, 17, o[10]), T = u(T, x, j, D, w, 22, o[11]), 
                            D = u(D, T, x, j, L, 7, o[12]), j = u(j, D, T, x, k, 12, o[13]), x = u(x, j, D, T, Y, 17, o[14]), 
                            T = u(T, x, j, D, S, 22, o[15]), D = c(D, T, x, j, d, 5, o[16]), j = c(j, D, T, x, y, 9, o[17]), 
                            x = c(x, j, D, T, w, 14, o[18]), T = c(T, x, j, D, s, 20, o[19]), D = c(D, T, x, j, p, 5, o[20]), 
                            j = c(j, D, T, x, M, 9, o[21]), x = c(x, j, D, T, S, 14, o[22]), T = c(T, x, j, D, m, 20, o[23]), 
                            D = c(D, T, x, j, g, 5, o[24]), j = c(j, D, T, x, Y, 9, o[25]), x = c(x, j, D, T, _, 14, o[26]), 
                            T = c(T, x, j, D, v, 20, o[27]), D = c(D, T, x, j, k, 5, o[28]), j = c(j, D, T, x, l, 9, o[29]), 
                            x = c(x, j, D, T, b, 14, o[30]), T = c(T, x, j, D, L, 20, o[31]), D = f(D, T, x, j, p, 4, o[32]), 
                            j = f(j, D, T, x, v, 11, o[33]), x = f(x, j, D, T, w, 16, o[34]), T = f(T, x, j, D, Y, 23, o[35]), 
                            D = f(D, T, x, j, d, 4, o[36]), j = f(j, D, T, x, m, 11, o[37]), x = f(x, j, D, T, b, 16, o[38]), 
                            T = f(T, x, j, D, M, 23, o[39]), D = f(D, T, x, j, k, 4, o[40]), j = f(j, D, T, x, s, 11, o[41]), 
                            x = f(x, j, D, T, _, 16, o[42]), T = f(T, x, j, D, y, 23, o[43]), D = f(D, T, x, j, g, 4, o[44]), 
                            j = f(j, D, T, x, L, 11, o[45]), x = f(x, j, D, T, S, 16, o[46]), T = f(T, x, j, D, l, 23, o[47]), 
                            D = h(D, T, x, j, s, 6, o[48]), j = h(j, D, T, x, b, 10, o[49]), x = h(x, j, D, T, Y, 15, o[50]), 
                            T = h(T, x, j, D, p, 21, o[51]), D = h(D, T, x, j, L, 6, o[52]), j = h(j, D, T, x, _, 10, o[53]), 
                            x = h(x, j, D, T, M, 15, o[54]), T = h(T, x, j, D, d, 21, o[55]), D = h(D, T, x, j, v, 6, o[56]), 
                            j = h(j, D, T, x, S, 10, o[57]), x = h(x, j, D, T, y, 15, o[58]), T = h(T, x, j, D, k, 21, o[59]), 
                            D = h(D, T, x, j, m, 6, o[60]), j = h(j, D, T, x, w, 10, o[61]), x = h(x, j, D, T, l, 15, o[62]), 
                            T = h(T, x, j, D, g, 21, o[63]), a[0] = a[0] + D | 0, a[1] = a[1] + T | 0, a[2] = a[2] + x | 0, 
                            a[3] = a[3] + j | 0;
                        },
                        _doFinalize: function() {
                            var e = this._data, n = e.words, r = 8 * this._nDataBytes, i = 8 * e.sigBytes;
                            n[i >>> 5] |= 128 << 24 - i % 32;
                            var a = t.floor(r / 4294967296), s = r;
                            n[15 + (i + 64 >>> 9 << 4)] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8), 
                            n[14 + (i + 64 >>> 9 << 4)] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8), 
                            e.sigBytes = 4 * (n.length + 1), this._process();
                            for (var o = this._hash, d = o.words, u = 0; u < 4; u++) {
                                var c = d[u];
                                d[u] = 16711935 & (c << 8 | c >>> 24) | 4278255360 & (c << 24 | c >>> 8);
                            }
                            return o;
                        },
                        clone: function() {
                            var e = a.clone.call(this);
                            return e._hash = this._hash.clone(), e;
                        }
                    })

// ==================== 元数据 ====================
// 此文件包含从 wx03bc60e1b437e39c 提取的 MD5 算法实现
// 检测位置: 行 25820-25820
// 变量名: ___
// 检测源: static
