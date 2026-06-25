/**
 * MD5 算法实现
 * App ID: wx01875088f4bf6167
 * 版本: v12
 * 代码哈希: naflab
 * 来源文件: output/wx01875088f4bf6167/common/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.95
 * 函数名: anonymous
 * 行数: 51
 * 生成时间: 2025-07-05T13:17:10.754Z
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
                        var i = this._hash.words, a = e[t + 0], c = e[t + 1], p = e[t + 2], d = e[t + 3], v = e[t + 4], y = e[t + 5], g = e[t + 6], m = e[t + 7], _ = e[t + 8], b = e[t + 9], w = e[t + 10], k = e[t + 11], x = e[t + 12], A = e[t + 13], O = e[t + 14], S = e[t + 15], $ = i[0], P = i[1], E = i[2], T = i[3];
                        $ = u($, P, E, T, a, 7, s[0]), T = u(T, $, P, E, c, 12, s[1]), E = u(E, T, $, P, p, 17, s[2]), 
                        P = u(P, E, T, $, d, 22, s[3]), $ = u($, P, E, T, v, 7, s[4]), T = u(T, $, P, E, y, 12, s[5]), 
                        E = u(E, T, $, P, g, 17, s[6]), P = u(P, E, T, $, m, 22, s[7]), $ = u($, P, E, T, _, 7, s[8]), 
                        T = u(T, $, P, E, b, 12, s[9]), E = u(E, T, $, P, w, 17, s[10]), P = u(P, E, T, $, k, 22, s[11]), 
                        $ = u($, P, E, T, x, 7, s[12]), T = u(T, $, P, E, A, 12, s[13]), E = u(E, T, $, P, O, 17, s[14]), 
                        $ = f($, P = u(P, E, T, $, S, 22, s[15]), E, T, c, 5, s[16]), T = f(T, $, P, E, g, 9, s[17]), 
                        E = f(E, T, $, P, k, 14, s[18]), P = f(P, E, T, $, a, 20, s[19]), $ = f($, P, E, T, y, 5, s[20]), 
                        T = f(T, $, P, E, w, 9, s[21]), E = f(E, T, $, P, S, 14, s[22]), P = f(P, E, T, $, v, 20, s[23]), 
                        $ = f($, P, E, T, b, 5, s[24]), T = f(T, $, P, E, O, 9, s[25]), E = f(E, T, $, P, d, 14, s[26]), 
                        P = f(P, E, T, $, _, 20, s[27]), $ = f($, P, E, T, A, 5, s[28]), T = f(T, $, P, E, p, 9, s[29]), 
                        E = f(E, T, $, P, m, 14, s[30]), $ = l($, P = f(P, E, T, $, x, 20, s[31]), E, T, y, 4, s[32]), 
                        T = l(T, $, P, E, _, 11, s[33]), E = l(E, T, $, P, k, 16, s[34]), P = l(P, E, T, $, O, 23, s[35]), 
                        $ = l($, P, E, T, c, 4, s[36]), T = l(T, $, P, E, v, 11, s[37]), E = l(E, T, $, P, m, 16, s[38]), 
                        P = l(P, E, T, $, w, 23, s[39]), $ = l($, P, E, T, A, 4, s[40]), T = l(T, $, P, E, a, 11, s[41]), 
                        E = l(E, T, $, P, d, 16, s[42]), P = l(P, E, T, $, g, 23, s[43]), $ = l($, P, E, T, b, 4, s[44]), 
                        T = l(T, $, P, E, x, 11, s[45]), E = l(E, T, $, P, S, 16, s[46]), $ = h($, P = l(P, E, T, $, p, 23, s[47]), E, T, a, 6, s[48]), 
                        T = h(T, $, P, E, m, 10, s[49]), E = h(E, T, $, P, O, 15, s[50]), P = h(P, E, T, $, y, 21, s[51]), 
                        $ = h($, P, E, T, x, 6, s[52]), T = h(T, $, P, E, d, 10, s[53]), E = h(E, T, $, P, w, 15, s[54]), 
                        P = h(P, E, T, $, c, 21, s[55]), $ = h($, P, E, T, _, 6, s[56]), T = h(T, $, P, E, S, 10, s[57]), 
                        E = h(E, T, $, P, g, 15, s[58]), P = h(P, E, T, $, A, 21, s[59]), $ = h($, P, E, T, v, 6, s[60]), 
                        T = h(T, $, P, E, k, 10, s[61]), E = h(E, T, $, P, p, 15, s[62]), P = h(P, E, T, $, b, 21, s[63]), 
                        i[0] = i[0] + $ | 0, i[1] = i[1] + P | 0, i[2] = i[2] + E | 0, i[3] = i[3] + T | 0;
                    },
                    _doFinalize: function() {
                        var t = this._data, n = t.words, r = 8 * this._nDataBytes, o = 8 * t.sigBytes;
                        n[o >>> 5] |= 128 << 24 - o % 32;
                        var i = e.floor(r / 4294967296), a = r;
                        n[15 + (o + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), 
                        n[14 + (o + 64 >>> 9 << 4)] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8), 
                        t.sigBytes = 4 * (n.length + 1), this._process();
                        for (var s = this._hash, c = s.words, u = 0; u < 4; u++) {
                            var f = c[u];
                            c[u] = 16711935 & (f << 8 | f >>> 24) | 4278255360 & (f << 24 | f >>> 8);
                        }
                        return s;
                    },
                    clone: function() {
                        var e = i.clone.call(this);
                        return e._hash = this._hash.clone(), e;
                    }
                })

// ==================== 元数据 ====================
// 此文件包含从 wx01875088f4bf6167 提取的 MD5 算法实现
// 检测位置: 行 3330-3330
// 变量名: ___
// 检测源: static
