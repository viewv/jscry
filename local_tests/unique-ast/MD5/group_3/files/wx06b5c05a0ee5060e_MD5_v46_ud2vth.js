/**
 * MD5 算法实现
 * App ID: wx06b5c05a0ee5060e
 * 版本: v46
 * 代码哈希: ud2vth
 * 来源文件: output/wx06b5c05a0ee5060e/common/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.95
 * 函数名: anonymous
 * 行数: 52
 * 生成时间: 2025-07-05T13:17:10.796Z
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
                        var o = this._hash.words, a = t[e + 0], s = t[e + 1], l = t[e + 2], p = t[e + 3], b = t[e + 4], v = t[e + 5], m = t[e + 6], W = t[e + 7], g = t[e + 8], y = t[e + 9], _ = t[e + 10], k = t[e + 11], w = t[e + 12], S = t[e + 13], C = t[e + 14], x = t[e + 15], O = o[0], R = o[1], P = o[2], A = o[3];
                        O = f(O, R, P, A, a, 7, c[0]), A = f(A, O, R, P, s, 12, c[1]), P = f(P, A, O, R, l, 17, c[2]), 
                        R = f(R, P, A, O, p, 22, c[3]), O = f(O, R, P, A, b, 7, c[4]), A = f(A, O, R, P, v, 12, c[5]), 
                        P = f(P, A, O, R, m, 17, c[6]), R = f(R, P, A, O, W, 22, c[7]), O = f(O, R, P, A, g, 7, c[8]), 
                        A = f(A, O, R, P, y, 12, c[9]), P = f(P, A, O, R, _, 17, c[10]), R = f(R, P, A, O, k, 22, c[11]), 
                        O = f(O, R, P, A, w, 7, c[12]), A = f(A, O, R, P, S, 12, c[13]), P = f(P, A, O, R, C, 17, c[14]), 
                        R = f(R, P, A, O, x, 22, c[15]), O = u(O, R, P, A, s, 5, c[16]), A = u(A, O, R, P, m, 9, c[17]), 
                        P = u(P, A, O, R, k, 14, c[18]), R = u(R, P, A, O, a, 20, c[19]), O = u(O, R, P, A, v, 5, c[20]), 
                        A = u(A, O, R, P, _, 9, c[21]), P = u(P, A, O, R, x, 14, c[22]), R = u(R, P, A, O, b, 20, c[23]), 
                        O = u(O, R, P, A, y, 5, c[24]), A = u(A, O, R, P, C, 9, c[25]), P = u(P, A, O, R, p, 14, c[26]), 
                        R = u(R, P, A, O, g, 20, c[27]), O = u(O, R, P, A, S, 5, c[28]), A = u(A, O, R, P, l, 9, c[29]), 
                        P = u(P, A, O, R, W, 14, c[30]), R = u(R, P, A, O, w, 20, c[31]), O = d(O, R, P, A, v, 4, c[32]), 
                        A = d(A, O, R, P, g, 11, c[33]), P = d(P, A, O, R, k, 16, c[34]), R = d(R, P, A, O, C, 23, c[35]), 
                        O = d(O, R, P, A, s, 4, c[36]), A = d(A, O, R, P, b, 11, c[37]), P = d(P, A, O, R, W, 16, c[38]), 
                        R = d(R, P, A, O, _, 23, c[39]), O = d(O, R, P, A, S, 4, c[40]), A = d(A, O, R, P, a, 11, c[41]), 
                        P = d(P, A, O, R, p, 16, c[42]), R = d(R, P, A, O, m, 23, c[43]), O = d(O, R, P, A, y, 4, c[44]), 
                        A = d(A, O, R, P, w, 11, c[45]), P = d(P, A, O, R, x, 16, c[46]), R = d(R, P, A, O, l, 23, c[47]), 
                        O = h(O, R, P, A, a, 6, c[48]), A = h(A, O, R, P, W, 10, c[49]), P = h(P, A, O, R, C, 15, c[50]), 
                        R = h(R, P, A, O, v, 21, c[51]), O = h(O, R, P, A, w, 6, c[52]), A = h(A, O, R, P, p, 10, c[53]), 
                        P = h(P, A, O, R, _, 15, c[54]), R = h(R, P, A, O, s, 21, c[55]), O = h(O, R, P, A, g, 6, c[56]), 
                        A = h(A, O, R, P, x, 10, c[57]), P = h(P, A, O, R, m, 15, c[58]), R = h(R, P, A, O, S, 21, c[59]), 
                        O = h(O, R, P, A, b, 6, c[60]), A = h(A, O, R, P, k, 10, c[61]), P = h(P, A, O, R, l, 15, c[62]), 
                        R = h(R, P, A, O, y, 21, c[63]), o[0] = o[0] + O | 0, o[1] = o[1] + R | 0, o[2] = o[2] + P | 0, 
                        o[3] = o[3] + A | 0;
                    },
                    _doFinalize: function() {
                        var t = this._data, r = t.words, n = 8 * this._nDataBytes, i = 8 * t.sigBytes;
                        r[i >>> 5] |= 128 << 24 - i % 32;
                        var o = e.floor(n / 4294967296), a = n;
                        r[15 + (i + 64 >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), 
                        r[14 + (i + 64 >>> 9 << 4)] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8), 
                        t.sigBytes = 4 * (r.length + 1), this._process();
                        for (var c = this._hash, s = c.words, f = 0; f < 4; f++) {
                            var u = s[f];
                            s[f] = 16711935 & (u << 8 | u >>> 24) | 4278255360 & (u << 24 | u >>> 8);
                        }
                        return c;
                    },
                    clone: function() {
                        var t = o.clone.call(this);
                        return t._hash = this._hash.clone(), t;
                    }
                })

// ==================== 元数据 ====================
// 此文件包含从 wx06b5c05a0ee5060e 提取的 MD5 算法实现
// 检测位置: 行 6851-6851
// 变量名: ___
// 检测源: static
