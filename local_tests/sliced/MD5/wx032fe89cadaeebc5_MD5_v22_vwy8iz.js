/**
 * MD5 算法实现
 * App ID: wx032fe89cadaeebc5
 * 版本: v22
 * 代码哈希: vwy8iz
 * 来源文件: output/wx032fe89cadaeebc5/common/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.95
 * 函数名: anonymous
 * 行数: 52
 * 生成时间: 2025-07-05T13:17:10.767Z
 */

o.extend({
                    _doReset: function _doReset() {
                        this._hash = new i.init([ 1732584193, 4023233417, 2562383102, 271733878 ]);
                    },
                    _doProcessBlock: function _doProcessBlock(t, e) {
                        for (var n = 0; n < 16; n++) {
                            var r = e + n, i = t[r];
                            t[r] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8);
                        }
                        var o = this._hash.words, a = t[e + 0], c = t[e + 1], h = t[e + 2], d = t[e + 3], v = t[e + 4], g = t[e + 5], _ = t[e + 6], y = t[e + 7], m = t[e + 8], b = t[e + 9], w = t[e + 10], S = t[e + 11], k = t[e + 12], x = t[e + 13], O = t[e + 14], A = t[e + 15], $ = o[0], B = o[1], P = o[2], T = o[3];
                        $ = u($, B, P, T, a, 7, s[0]), T = u(T, $, B, P, c, 12, s[1]), P = u(P, T, $, B, h, 17, s[2]), 
                        B = u(B, P, T, $, d, 22, s[3]), $ = u($, B, P, T, v, 7, s[4]), T = u(T, $, B, P, g, 12, s[5]), 
                        P = u(P, T, $, B, _, 17, s[6]), B = u(B, P, T, $, y, 22, s[7]), $ = u($, B, P, T, m, 7, s[8]), 
                        T = u(T, $, B, P, b, 12, s[9]), P = u(P, T, $, B, w, 17, s[10]), B = u(B, P, T, $, S, 22, s[11]), 
                        $ = u($, B, P, T, k, 7, s[12]), T = u(T, $, B, P, x, 12, s[13]), P = u(P, T, $, B, O, 17, s[14]), 
                        B = u(B, P, T, $, A, 22, s[15]), $ = f($, B, P, T, c, 5, s[16]), T = f(T, $, B, P, _, 9, s[17]), 
                        P = f(P, T, $, B, S, 14, s[18]), B = f(B, P, T, $, a, 20, s[19]), $ = f($, B, P, T, g, 5, s[20]), 
                        T = f(T, $, B, P, w, 9, s[21]), P = f(P, T, $, B, A, 14, s[22]), B = f(B, P, T, $, v, 20, s[23]), 
                        $ = f($, B, P, T, b, 5, s[24]), T = f(T, $, B, P, O, 9, s[25]), P = f(P, T, $, B, d, 14, s[26]), 
                        B = f(B, P, T, $, m, 20, s[27]), $ = f($, B, P, T, x, 5, s[28]), T = f(T, $, B, P, h, 9, s[29]), 
                        P = f(P, T, $, B, y, 14, s[30]), B = f(B, P, T, $, k, 20, s[31]), $ = l($, B, P, T, g, 4, s[32]), 
                        T = l(T, $, B, P, m, 11, s[33]), P = l(P, T, $, B, S, 16, s[34]), B = l(B, P, T, $, O, 23, s[35]), 
                        $ = l($, B, P, T, c, 4, s[36]), T = l(T, $, B, P, v, 11, s[37]), P = l(P, T, $, B, y, 16, s[38]), 
                        B = l(B, P, T, $, w, 23, s[39]), $ = l($, B, P, T, x, 4, s[40]), T = l(T, $, B, P, a, 11, s[41]), 
                        P = l(P, T, $, B, d, 16, s[42]), B = l(B, P, T, $, _, 23, s[43]), $ = l($, B, P, T, b, 4, s[44]), 
                        T = l(T, $, B, P, k, 11, s[45]), P = l(P, T, $, B, A, 16, s[46]), B = l(B, P, T, $, h, 23, s[47]), 
                        $ = p($, B, P, T, a, 6, s[48]), T = p(T, $, B, P, y, 10, s[49]), P = p(P, T, $, B, O, 15, s[50]), 
                        B = p(B, P, T, $, g, 21, s[51]), $ = p($, B, P, T, k, 6, s[52]), T = p(T, $, B, P, d, 10, s[53]), 
                        P = p(P, T, $, B, w, 15, s[54]), B = p(B, P, T, $, c, 21, s[55]), $ = p($, B, P, T, m, 6, s[56]), 
                        T = p(T, $, B, P, A, 10, s[57]), P = p(P, T, $, B, _, 15, s[58]), B = p(B, P, T, $, x, 21, s[59]), 
                        $ = p($, B, P, T, v, 6, s[60]), T = p(T, $, B, P, S, 10, s[61]), P = p(P, T, $, B, h, 15, s[62]), 
                        B = p(B, P, T, $, b, 21, s[63]), o[0] = o[0] + $ | 0, o[1] = o[1] + B | 0, o[2] = o[2] + P | 0, 
                        o[3] = o[3] + T | 0;
                    },
                    _doFinalize: function _doFinalize() {
                        var t = this._data, n = t.words, r = 8 * this._nDataBytes, i = 8 * t.sigBytes;
                        n[i >>> 5] |= 128 << 24 - i % 32;
                        var o = e.floor(r / 4294967296), a = r;
                        n[15 + (i + 64 >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), 
                        n[14 + (i + 64 >>> 9 << 4)] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8), 
                        t.sigBytes = 4 * (n.length + 1), this._process();
                        for (var s = this._hash, c = s.words, u = 0; u < 4; u++) {
                            var f = c[u];
                            c[u] = 16711935 & (f << 8 | f >>> 24) | 4278255360 & (f << 24 | f >>> 8);
                        }
                        return s;
                    },
                    clone: function clone() {
                        var t = o.clone.call(this);
                        return t._hash = this._hash.clone(), t;
                    }
                })

// ==================== 元数据 ====================
// 此文件包含从 wx032fe89cadaeebc5 提取的 MD5 算法实现
// 检测位置: 行 241-241
// 变量名: ___
// 检测源: static
