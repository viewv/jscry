/**
 * MD5 算法实现
 * App ID: wx02ba65544e9d9396
 * 版本: v21
 * 代码哈希: -yidkm1
 * 来源文件: output/wx02ba65544e9d9396/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.95
 * 函数名: anonymous
 * 行数: 31
 * 生成时间: 2025-07-05T13:17:10.764Z
 */

u.extend({
                    _doReset: function() {
                        this._hash = new c.init([ 1732584193, 4023233417, 2562383102, 271733878 ]);
                    },
                    _doProcessBlock: function(t, e) {
                        for (var a = 0; a < 16; a++) {
                            var s = e + a, c = t[s];
                            t[s] = 16711935 & (c << 8 | c >>> 24) | 4278255360 & (c << 24 | c >>> 8);
                        }
                        var u = this._hash.words, l = t[e + 0], f = t[e + 1], p = t[e + 2], h = t[e + 3], v = t[e + 4], g = t[e + 5], m = t[e + 6], y = t[e + 7], b = t[e + 8], A = t[e + 9], w = t[e + 10], _ = t[e + 11], x = t[e + 12], S = t[e + 13], k = t[e + 14], C = t[e + 15], E = u[0], O = u[1], T = u[2], I = u[3];
                        O = i(O = i(O = i(O = i(O = o(O = o(O = o(O = o(O = r(O = r(O = r(O = r(O = n(O = n(O = n(O = n(O, T = n(T, I = n(I, E = n(E, O, T, I, l, 7, d[0]), O, T, f, 12, d[1]), E, O, p, 17, d[2]), I, E, h, 22, d[3]), T = n(T, I = n(I, E = n(E, O, T, I, v, 7, d[4]), O, T, g, 12, d[5]), E, O, m, 17, d[6]), I, E, y, 22, d[7]), T = n(T, I = n(I, E = n(E, O, T, I, b, 7, d[8]), O, T, A, 12, d[9]), E, O, w, 17, d[10]), I, E, _, 22, d[11]), T = n(T, I = n(I, E = n(E, O, T, I, x, 7, d[12]), O, T, S, 12, d[13]), E, O, k, 17, d[14]), I, E, C, 22, d[15]), T = r(T, I = r(I, E = r(E, O, T, I, f, 5, d[16]), O, T, m, 9, d[17]), E, O, _, 14, d[18]), I, E, l, 20, d[19]), T = r(T, I = r(I, E = r(E, O, T, I, g, 5, d[20]), O, T, w, 9, d[21]), E, O, C, 14, d[22]), I, E, v, 20, d[23]), T = r(T, I = r(I, E = r(E, O, T, I, A, 5, d[24]), O, T, k, 9, d[25]), E, O, h, 14, d[26]), I, E, b, 20, d[27]), T = r(T, I = r(I, E = r(E, O, T, I, S, 5, d[28]), O, T, p, 9, d[29]), E, O, y, 14, d[30]), I, E, x, 20, d[31]), T = o(T, I = o(I, E = o(E, O, T, I, g, 4, d[32]), O, T, b, 11, d[33]), E, O, _, 16, d[34]), I, E, k, 23, d[35]), T = o(T, I = o(I, E = o(E, O, T, I, f, 4, d[36]), O, T, v, 11, d[37]), E, O, y, 16, d[38]), I, E, w, 23, d[39]), T = o(T, I = o(I, E = o(E, O, T, I, S, 4, d[40]), O, T, l, 11, d[41]), E, O, h, 16, d[42]), I, E, m, 23, d[43]), T = o(T, I = o(I, E = o(E, O, T, I, A, 4, d[44]), O, T, x, 11, d[45]), E, O, C, 16, d[46]), I, E, p, 23, d[47]), T = i(T, I = i(I, E = i(E, O, T, I, l, 6, d[48]), O, T, y, 10, d[49]), E, O, k, 15, d[50]), I, E, g, 21, d[51]), T = i(T, I = i(I, E = i(E, O, T, I, x, 6, d[52]), O, T, h, 10, d[53]), E, O, w, 15, d[54]), I, E, f, 21, d[55]), T = i(T, I = i(I, E = i(E, O, T, I, b, 6, d[56]), O, T, C, 10, d[57]), E, O, m, 15, d[58]), I, E, S, 21, d[59]), T = i(T, I = i(I, E = i(E, O, T, I, v, 6, d[60]), O, T, _, 10, d[61]), E, O, p, 15, d[62]), I, E, A, 21, d[63]), 
                        u[0] = u[0] + E | 0, u[1] = u[1] + O | 0, u[2] = u[2] + T | 0, u[3] = u[3] + I | 0;
                    },
                    _doFinalize: function() {
                        var t = this._data, n = t.words, r = 8 * this._nDataBytes, o = 8 * t.sigBytes;
                        n[o >>> 5] |= 128 << 24 - o % 32;
                        var i = e.floor(r / 4294967296), a = r;
                        n[15 + (o + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), 
                        n[14 + (o + 64 >>> 9 << 4)] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8), 
                        t.sigBytes = 4 * (n.length + 1), this._process();
                        for (var s = this._hash, c = s.words, u = 0; u < 4; u++) {
                            var l = c[u];
                            c[u] = 16711935 & (l << 8 | l >>> 24) | 4278255360 & (l << 24 | l >>> 8);
                        }
                        return s;
                    },
                    clone: function() {
                        var t = u.clone.call(this);
                        return t._hash = this._hash.clone(), t;
                    }
                })

// ==================== 元数据 ====================
// 此文件包含从 wx02ba65544e9d9396 提取的 MD5 算法实现
// 检测位置: 行 8390-8390
// 变量名: ___
// 检测源: static
