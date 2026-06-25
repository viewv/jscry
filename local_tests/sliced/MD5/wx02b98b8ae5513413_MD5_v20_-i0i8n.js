/**
 * MD5 算法实现
 * App ID: wx02b98b8ae5513413
 * 版本: v20
 * 代码哈希: -i0i8n4
 * 来源文件: output/wx02b98b8ae5513413/common/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.95
 * 函数名: anonymous
 * 行数: 52
 * 生成时间: 2025-07-05T13:17:10.764Z
 */

i.extend({
                    _doReset: function() {
                        this._hash = new n.init([ 1732584193, 4023233417, 2562383102, 271733878 ]);
                    },
                    _doProcessBlock: function(e, t) {
                        for (var a = 0; a < 16; a++) {
                            var r = t + a, n = e[r];
                            e[r] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8);
                        }
                        var i = this._hash.words, l = e[t + 0], o = e[t + 1], h = e[t + 2], b = e[t + 3], _ = e[t + 4], v = e[t + 5], p = e[t + 6], m = e[t + 7], y = e[t + 8], g = e[t + 9], M = e[t + 10], w = e[t + 11], L = e[t + 12], k = e[t + 13], Y = e[t + 14], S = e[t + 15], D = i[0], T = i[1], x = i[2], j = i[3];
                        D = u(D, T, x, j, l, 7, s[0]), j = u(j, D, T, x, o, 12, s[1]), x = u(x, j, D, T, h, 17, s[2]), 
                        T = u(T, x, j, D, b, 22, s[3]), D = u(D, T, x, j, _, 7, s[4]), j = u(j, D, T, x, v, 12, s[5]), 
                        x = u(x, j, D, T, p, 17, s[6]), T = u(T, x, j, D, m, 22, s[7]), D = u(D, T, x, j, y, 7, s[8]), 
                        j = u(j, D, T, x, g, 12, s[9]), x = u(x, j, D, T, M, 17, s[10]), T = u(T, x, j, D, w, 22, s[11]), 
                        D = u(D, T, x, j, L, 7, s[12]), j = u(j, D, T, x, k, 12, s[13]), x = u(x, j, D, T, Y, 17, s[14]), 
                        T = u(T, x, j, D, S, 22, s[15]), D = d(D, T, x, j, o, 5, s[16]), j = d(j, D, T, x, p, 9, s[17]), 
                        x = d(x, j, D, T, w, 14, s[18]), T = d(T, x, j, D, l, 20, s[19]), D = d(D, T, x, j, v, 5, s[20]), 
                        j = d(j, D, T, x, M, 9, s[21]), x = d(x, j, D, T, S, 14, s[22]), T = d(T, x, j, D, _, 20, s[23]), 
                        D = d(D, T, x, j, g, 5, s[24]), j = d(j, D, T, x, Y, 9, s[25]), x = d(x, j, D, T, b, 14, s[26]), 
                        T = d(T, x, j, D, y, 20, s[27]), D = d(D, T, x, j, k, 5, s[28]), j = d(j, D, T, x, h, 9, s[29]), 
                        x = d(x, j, D, T, m, 14, s[30]), T = d(T, x, j, D, L, 20, s[31]), D = c(D, T, x, j, v, 4, s[32]), 
                        j = c(j, D, T, x, y, 11, s[33]), x = c(x, j, D, T, w, 16, s[34]), T = c(T, x, j, D, Y, 23, s[35]), 
                        D = c(D, T, x, j, o, 4, s[36]), j = c(j, D, T, x, _, 11, s[37]), x = c(x, j, D, T, m, 16, s[38]), 
                        T = c(T, x, j, D, M, 23, s[39]), D = c(D, T, x, j, k, 4, s[40]), j = c(j, D, T, x, l, 11, s[41]), 
                        x = c(x, j, D, T, b, 16, s[42]), T = c(T, x, j, D, p, 23, s[43]), D = c(D, T, x, j, g, 4, s[44]), 
                        j = c(j, D, T, x, L, 11, s[45]), x = c(x, j, D, T, S, 16, s[46]), T = c(T, x, j, D, h, 23, s[47]), 
                        D = f(D, T, x, j, l, 6, s[48]), j = f(j, D, T, x, m, 10, s[49]), x = f(x, j, D, T, Y, 15, s[50]), 
                        T = f(T, x, j, D, v, 21, s[51]), D = f(D, T, x, j, L, 6, s[52]), j = f(j, D, T, x, b, 10, s[53]), 
                        x = f(x, j, D, T, M, 15, s[54]), T = f(T, x, j, D, o, 21, s[55]), D = f(D, T, x, j, y, 6, s[56]), 
                        j = f(j, D, T, x, S, 10, s[57]), x = f(x, j, D, T, p, 15, s[58]), T = f(T, x, j, D, k, 21, s[59]), 
                        D = f(D, T, x, j, _, 6, s[60]), j = f(j, D, T, x, w, 10, s[61]), x = f(x, j, D, T, h, 15, s[62]), 
                        T = f(T, x, j, D, g, 21, s[63]), i[0] = i[0] + D | 0, i[1] = i[1] + T | 0, i[2] = i[2] + x | 0, 
                        i[3] = i[3] + j | 0;
                    },
                    _doFinalize: function() {
                        var e = this._data, a = e.words, r = 8 * this._nDataBytes, n = 8 * e.sigBytes;
                        a[n >>> 5] |= 128 << 24 - n % 32;
                        var i = t.floor(r / 4294967296), l = r;
                        a[15 + (n + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), 
                        a[14 + (n + 64 >>> 9 << 4)] = 16711935 & (l << 8 | l >>> 24) | 4278255360 & (l << 24 | l >>> 8), 
                        e.sigBytes = 4 * (a.length + 1), this._process();
                        for (var s = this._hash, o = s.words, u = 0; u < 4; u++) {
                            var d = o[u];
                            o[u] = 16711935 & (d << 8 | d >>> 24) | 4278255360 & (d << 24 | d >>> 8);
                        }
                        return s;
                    },
                    clone: function() {
                        var e = i.clone.call(this);
                        return e._hash = this._hash.clone(), e;
                    }
                })

// ==================== 元数据 ====================
// 此文件包含从 wx02b98b8ae5513413 提取的 MD5 算法实现
// 检测位置: 行 12546-12546
// 变量名: ___
// 检测源: static
