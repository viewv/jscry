/**
 * MD5 算法实现
 * App ID: wx01351a762d0efdf5
 * 版本: v7
 * 代码哈希: tzzaxd
 * 来源文件: output/wx01351a762d0efdf5/common/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.95
 * 函数名: anonymous
 * 行数: 52
 * 生成时间: 2025-07-05T13:17:10.749Z
 */

o.extend({
                    _doReset: function() {
                        this._hash = new i.init([ 1732584193, 4023233417, 2562383102, 271733878 ]);
                    },
                    _doProcessBlock: function(e, t) {
                        for (var r = 0; r < 16; r++) {
                            var n = t + r, i = e[n];
                            e[n] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8);
                        }
                        var o = this._hash.words, a = e[t + 0], c = e[t + 1], l = e[t + 2], p = e[t + 3], b = e[t + 4], y = e[t + 5], g = e[t + 6], m = e[t + 7], v = e[t + 8], A = e[t + 9], w = e[t + 10], _ = e[t + 11], E = e[t + 12], S = e[t + 13], O = e[t + 14], I = e[t + 15], x = o[0], k = o[1], M = o[2], N = o[3];
                        x = u(x, k, M, N, a, 7, s[0]), N = u(N, x, k, M, c, 12, s[1]), M = u(M, N, x, k, l, 17, s[2]), 
                        k = u(k, M, N, x, p, 22, s[3]), x = u(x, k, M, N, b, 7, s[4]), N = u(N, x, k, M, y, 12, s[5]), 
                        M = u(M, N, x, k, g, 17, s[6]), k = u(k, M, N, x, m, 22, s[7]), x = u(x, k, M, N, v, 7, s[8]), 
                        N = u(N, x, k, M, A, 12, s[9]), M = u(M, N, x, k, w, 17, s[10]), k = u(k, M, N, x, _, 22, s[11]), 
                        x = u(x, k, M, N, E, 7, s[12]), N = u(N, x, k, M, S, 12, s[13]), M = u(M, N, x, k, O, 17, s[14]), 
                        k = u(k, M, N, x, I, 22, s[15]), x = f(x, k, M, N, c, 5, s[16]), N = f(N, x, k, M, g, 9, s[17]), 
                        M = f(M, N, x, k, _, 14, s[18]), k = f(k, M, N, x, a, 20, s[19]), x = f(x, k, M, N, y, 5, s[20]), 
                        N = f(N, x, k, M, w, 9, s[21]), M = f(M, N, x, k, I, 14, s[22]), k = f(k, M, N, x, b, 20, s[23]), 
                        x = f(x, k, M, N, A, 5, s[24]), N = f(N, x, k, M, O, 9, s[25]), M = f(M, N, x, k, p, 14, s[26]), 
                        k = f(k, M, N, x, v, 20, s[27]), x = f(x, k, M, N, S, 5, s[28]), N = f(N, x, k, M, l, 9, s[29]), 
                        M = f(M, N, x, k, m, 14, s[30]), k = f(k, M, N, x, E, 20, s[31]), x = d(x, k, M, N, y, 4, s[32]), 
                        N = d(N, x, k, M, v, 11, s[33]), M = d(M, N, x, k, _, 16, s[34]), k = d(k, M, N, x, O, 23, s[35]), 
                        x = d(x, k, M, N, c, 4, s[36]), N = d(N, x, k, M, b, 11, s[37]), M = d(M, N, x, k, m, 16, s[38]), 
                        k = d(k, M, N, x, w, 23, s[39]), x = d(x, k, M, N, S, 4, s[40]), N = d(N, x, k, M, a, 11, s[41]), 
                        M = d(M, N, x, k, p, 16, s[42]), k = d(k, M, N, x, g, 23, s[43]), x = d(x, k, M, N, A, 4, s[44]), 
                        N = d(N, x, k, M, E, 11, s[45]), M = d(M, N, x, k, I, 16, s[46]), k = d(k, M, N, x, l, 23, s[47]), 
                        x = h(x, k, M, N, a, 6, s[48]), N = h(N, x, k, M, m, 10, s[49]), M = h(M, N, x, k, O, 15, s[50]), 
                        k = h(k, M, N, x, y, 21, s[51]), x = h(x, k, M, N, E, 6, s[52]), N = h(N, x, k, M, p, 10, s[53]), 
                        M = h(M, N, x, k, w, 15, s[54]), k = h(k, M, N, x, c, 21, s[55]), x = h(x, k, M, N, v, 6, s[56]), 
                        N = h(N, x, k, M, I, 10, s[57]), M = h(M, N, x, k, g, 15, s[58]), k = h(k, M, N, x, S, 21, s[59]), 
                        x = h(x, k, M, N, b, 6, s[60]), N = h(N, x, k, M, _, 10, s[61]), M = h(M, N, x, k, l, 15, s[62]), 
                        k = h(k, M, N, x, A, 21, s[63]), o[0] = o[0] + x | 0, o[1] = o[1] + k | 0, o[2] = o[2] + M | 0, 
                        o[3] = o[3] + N | 0;
                    },
                    _doFinalize: function() {
                        var e = this._data, r = e.words, n = 8 * this._nDataBytes, i = 8 * e.sigBytes;
                        r[i >>> 5] |= 128 << 24 - i % 32;
                        var o = t.floor(n / 4294967296), a = n;
                        r[15 + (i + 64 >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), 
                        r[14 + (i + 64 >>> 9 << 4)] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8), 
                        e.sigBytes = 4 * (r.length + 1), this._process();
                        for (var s = this._hash, c = s.words, u = 0; u < 4; u++) {
                            var f = c[u];
                            c[u] = 16711935 & (f << 8 | f >>> 24) | 4278255360 & (f << 24 | f >>> 8);
                        }
                        return s;
                    },
                    clone: function() {
                        var e = o.clone.call(this);
                        return e._hash = this._hash.clone(), e;
                    }
                })

// ==================== 元数据 ====================
// 此文件包含从 wx01351a762d0efdf5 提取的 MD5 算法实现
// 检测位置: 行 10806-10806
// 变量名: ___
// 检测源: static
