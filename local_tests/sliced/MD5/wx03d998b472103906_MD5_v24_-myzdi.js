/**
 * MD5 算法实现
 * App ID: wx03d998b472103906
 * 版本: v24
 * 代码哈希: -myzdi5
 * 来源文件: output/wx03d998b472103906/common/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.95
 * 函数名: anonymous
 * 行数: 52
 * 生成时间: 2025-07-05T13:17:10.768Z
 */

o.extend({
                    _doReset: function() {
                        this._hash = new i.init([ 1732584193, 4023233417, 2562383102, 271733878 ]);
                    },
                    _doProcessBlock: function(t, e) {
                        for (var r = 0; r < 16; r++) {
                            var n = e + r, i = t[n];
                            t[n] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8);
                        }
                        var o = this._hash.words, a = t[e + 0], c = t[e + 1], l = t[e + 2], p = t[e + 3], b = t[e + 4], v = t[e + 5], g = t[e + 6], y = t[e + 7], m = t[e + 8], _ = t[e + 9], w = t[e + 10], S = t[e + 11], E = t[e + 12], A = t[e + 13], k = t[e + 14], x = t[e + 15], M = o[0], O = o[1], B = o[2], T = o[3];
                        M = f(M, O, B, T, a, 7, s[0]), T = f(T, M, O, B, c, 12, s[1]), B = f(B, T, M, O, l, 17, s[2]), 
                        O = f(O, B, T, M, p, 22, s[3]), M = f(M, O, B, T, b, 7, s[4]), T = f(T, M, O, B, v, 12, s[5]), 
                        B = f(B, T, M, O, g, 17, s[6]), O = f(O, B, T, M, y, 22, s[7]), M = f(M, O, B, T, m, 7, s[8]), 
                        T = f(T, M, O, B, _, 12, s[9]), B = f(B, T, M, O, w, 17, s[10]), O = f(O, B, T, M, S, 22, s[11]), 
                        M = f(M, O, B, T, E, 7, s[12]), T = f(T, M, O, B, A, 12, s[13]), B = f(B, T, M, O, k, 17, s[14]), 
                        O = f(O, B, T, M, x, 22, s[15]), M = u(M, O, B, T, c, 5, s[16]), T = u(T, M, O, B, g, 9, s[17]), 
                        B = u(B, T, M, O, S, 14, s[18]), O = u(O, B, T, M, a, 20, s[19]), M = u(M, O, B, T, v, 5, s[20]), 
                        T = u(T, M, O, B, w, 9, s[21]), B = u(B, T, M, O, x, 14, s[22]), O = u(O, B, T, M, b, 20, s[23]), 
                        M = u(M, O, B, T, _, 5, s[24]), T = u(T, M, O, B, k, 9, s[25]), B = u(B, T, M, O, p, 14, s[26]), 
                        O = u(O, B, T, M, m, 20, s[27]), M = u(M, O, B, T, A, 5, s[28]), T = u(T, M, O, B, l, 9, s[29]), 
                        B = u(B, T, M, O, y, 14, s[30]), O = u(O, B, T, M, E, 20, s[31]), M = h(M, O, B, T, v, 4, s[32]), 
                        T = h(T, M, O, B, m, 11, s[33]), B = h(B, T, M, O, S, 16, s[34]), O = h(O, B, T, M, k, 23, s[35]), 
                        M = h(M, O, B, T, c, 4, s[36]), T = h(T, M, O, B, b, 11, s[37]), B = h(B, T, M, O, y, 16, s[38]), 
                        O = h(O, B, T, M, w, 23, s[39]), M = h(M, O, B, T, A, 4, s[40]), T = h(T, M, O, B, a, 11, s[41]), 
                        B = h(B, T, M, O, p, 16, s[42]), O = h(O, B, T, M, g, 23, s[43]), M = h(M, O, B, T, _, 4, s[44]), 
                        T = h(T, M, O, B, E, 11, s[45]), B = h(B, T, M, O, x, 16, s[46]), O = h(O, B, T, M, l, 23, s[47]), 
                        M = d(M, O, B, T, a, 6, s[48]), T = d(T, M, O, B, y, 10, s[49]), B = d(B, T, M, O, k, 15, s[50]), 
                        O = d(O, B, T, M, v, 21, s[51]), M = d(M, O, B, T, E, 6, s[52]), T = d(T, M, O, B, p, 10, s[53]), 
                        B = d(B, T, M, O, w, 15, s[54]), O = d(O, B, T, M, c, 21, s[55]), M = d(M, O, B, T, m, 6, s[56]), 
                        T = d(T, M, O, B, x, 10, s[57]), B = d(B, T, M, O, g, 15, s[58]), O = d(O, B, T, M, A, 21, s[59]), 
                        M = d(M, O, B, T, b, 6, s[60]), T = d(T, M, O, B, S, 10, s[61]), B = d(B, T, M, O, l, 15, s[62]), 
                        O = d(O, B, T, M, _, 21, s[63]), o[0] = o[0] + M | 0, o[1] = o[1] + O | 0, o[2] = o[2] + B | 0, 
                        o[3] = o[3] + T | 0;
                    },
                    _doFinalize: function() {
                        var t = this._data, r = t.words, n = 8 * this._nDataBytes, i = 8 * t.sigBytes;
                        r[i >>> 5] |= 128 << 24 - i % 32;
                        var o = e.floor(n / 4294967296), a = n;
                        r[15 + (i + 64 >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), 
                        r[14 + (i + 64 >>> 9 << 4)] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8), 
                        t.sigBytes = 4 * (r.length + 1), this._process();
                        for (var s = this._hash, c = s.words, f = 0; f < 4; f++) {
                            var u = c[f];
                            c[f] = 16711935 & (u << 8 | u >>> 24) | 4278255360 & (u << 24 | u >>> 8);
                        }
                        return s;
                    },
                    clone: function() {
                        var t = o.clone.call(this);
                        return t._hash = this._hash.clone(), t;
                    }
                })

// ==================== 元数据 ====================
// 此文件包含从 wx03d998b472103906 提取的 MD5 算法实现
// 检测位置: 行 11778-11778
// 变量名: ___
// 检测源: static
