/**
 * MD5 算法实现
 * App ID: wx0611624cc959bd21
 * 版本: v45
 * 代码哈希: -ouowh5
 * 来源文件: output/wx0611624cc959bd21/common/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.95
 * 函数名: anonymous
 * 行数: 52
 * 生成时间: 2025-07-05T13:17:10.791Z
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
                        var o = this._hash.words, a = e[t + 0], c = e[t + 1], l = e[t + 2], p = e[t + 3], b = e[t + 4], g = e[t + 5], v = e[t + 6], y = e[t + 7], m = e[t + 8], _ = e[t + 9], w = e[t + 10], S = e[t + 11], E = e[t + 12], k = e[t + 13], A = e[t + 14], M = e[t + 15], x = o[0], B = o[1], O = o[2], T = o[3];
                        x = f(x, B, O, T, a, 7, s[0]), T = f(T, x, B, O, c, 12, s[1]), O = f(O, T, x, B, l, 17, s[2]), 
                        B = f(B, O, T, x, p, 22, s[3]), x = f(x, B, O, T, b, 7, s[4]), T = f(T, x, B, O, g, 12, s[5]), 
                        O = f(O, T, x, B, v, 17, s[6]), B = f(B, O, T, x, y, 22, s[7]), x = f(x, B, O, T, m, 7, s[8]), 
                        T = f(T, x, B, O, _, 12, s[9]), O = f(O, T, x, B, w, 17, s[10]), B = f(B, O, T, x, S, 22, s[11]), 
                        x = f(x, B, O, T, E, 7, s[12]), T = f(T, x, B, O, k, 12, s[13]), O = f(O, T, x, B, A, 17, s[14]), 
                        B = f(B, O, T, x, M, 22, s[15]), x = u(x, B, O, T, c, 5, s[16]), T = u(T, x, B, O, v, 9, s[17]), 
                        O = u(O, T, x, B, S, 14, s[18]), B = u(B, O, T, x, a, 20, s[19]), x = u(x, B, O, T, g, 5, s[20]), 
                        T = u(T, x, B, O, w, 9, s[21]), O = u(O, T, x, B, M, 14, s[22]), B = u(B, O, T, x, b, 20, s[23]), 
                        x = u(x, B, O, T, _, 5, s[24]), T = u(T, x, B, O, A, 9, s[25]), O = u(O, T, x, B, p, 14, s[26]), 
                        B = u(B, O, T, x, m, 20, s[27]), x = u(x, B, O, T, k, 5, s[28]), T = u(T, x, B, O, l, 9, s[29]), 
                        O = u(O, T, x, B, y, 14, s[30]), B = u(B, O, T, x, E, 20, s[31]), x = h(x, B, O, T, g, 4, s[32]), 
                        T = h(T, x, B, O, m, 11, s[33]), O = h(O, T, x, B, S, 16, s[34]), B = h(B, O, T, x, A, 23, s[35]), 
                        x = h(x, B, O, T, c, 4, s[36]), T = h(T, x, B, O, b, 11, s[37]), O = h(O, T, x, B, y, 16, s[38]), 
                        B = h(B, O, T, x, w, 23, s[39]), x = h(x, B, O, T, k, 4, s[40]), T = h(T, x, B, O, a, 11, s[41]), 
                        O = h(O, T, x, B, p, 16, s[42]), B = h(B, O, T, x, v, 23, s[43]), x = h(x, B, O, T, _, 4, s[44]), 
                        T = h(T, x, B, O, E, 11, s[45]), O = h(O, T, x, B, M, 16, s[46]), B = h(B, O, T, x, l, 23, s[47]), 
                        x = d(x, B, O, T, a, 6, s[48]), T = d(T, x, B, O, y, 10, s[49]), O = d(O, T, x, B, A, 15, s[50]), 
                        B = d(B, O, T, x, g, 21, s[51]), x = d(x, B, O, T, E, 6, s[52]), T = d(T, x, B, O, p, 10, s[53]), 
                        O = d(O, T, x, B, w, 15, s[54]), B = d(B, O, T, x, c, 21, s[55]), x = d(x, B, O, T, m, 6, s[56]), 
                        T = d(T, x, B, O, M, 10, s[57]), O = d(O, T, x, B, v, 15, s[58]), B = d(B, O, T, x, k, 21, s[59]), 
                        x = d(x, B, O, T, b, 6, s[60]), T = d(T, x, B, O, S, 10, s[61]), O = d(O, T, x, B, l, 15, s[62]), 
                        B = d(B, O, T, x, _, 21, s[63]), o[0] = o[0] + x | 0, o[1] = o[1] + B | 0, o[2] = o[2] + O | 0, 
                        o[3] = o[3] + T | 0;
                    },
                    _doFinalize: function() {
                        var e = this._data, r = e.words, n = 8 * this._nDataBytes, i = 8 * e.sigBytes;
                        r[i >>> 5] |= 128 << 24 - i % 32;
                        var o = t.floor(n / 4294967296), a = n;
                        r[15 + (i + 64 >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), 
                        r[14 + (i + 64 >>> 9 << 4)] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8), 
                        e.sigBytes = 4 * (r.length + 1), this._process();
                        for (var s = this._hash, c = s.words, f = 0; f < 4; f++) {
                            var u = c[f];
                            c[f] = 16711935 & (u << 8 | u >>> 24) | 4278255360 & (u << 24 | u >>> 8);
                        }
                        return s;
                    },
                    clone: function() {
                        var e = o.clone.call(this);
                        return e._hash = this._hash.clone(), e;
                    }
                })

// ==================== 元数据 ====================
// 此文件包含从 wx0611624cc959bd21 提取的 MD5 算法实现
// 检测位置: 行 9646-9646
// 变量名: ___
// 检测源: static
