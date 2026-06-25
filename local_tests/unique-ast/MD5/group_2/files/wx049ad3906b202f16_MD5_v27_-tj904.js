/**
 * MD5 算法实现
 * App ID: wx049ad3906b202f16
 * 版本: v27
 * 代码哈希: -tj904n
 * 来源文件: output/wx049ad3906b202f16/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.95
 * 函数名: anonymous
 * 行数: 31
 * 生成时间: 2025-07-05T13:17:10.769Z
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
                        var u = this._hash.words, l = t[e + 0], f = t[e + 1], p = t[e + 2], h = t[e + 3], v = t[e + 4], g = t[e + 5], m = t[e + 6], y = t[e + 7], b = t[e + 8], A = t[e + 9], _ = t[e + 10], w = t[e + 11], x = t[e + 12], k = t[e + 13], S = t[e + 14], C = t[e + 15], E = u[0], O = u[1], R = u[2], P = u[3];
                        O = i(O = i(O = i(O = i(O = o(O = o(O = o(O = o(O = r(O = r(O = r(O = r(O = n(O = n(O = n(O = n(O, R = n(R, P = n(P, E = n(E, O, R, P, l, 7, d[0]), O, R, f, 12, d[1]), E, O, p, 17, d[2]), P, E, h, 22, d[3]), R = n(R, P = n(P, E = n(E, O, R, P, v, 7, d[4]), O, R, g, 12, d[5]), E, O, m, 17, d[6]), P, E, y, 22, d[7]), R = n(R, P = n(P, E = n(E, O, R, P, b, 7, d[8]), O, R, A, 12, d[9]), E, O, _, 17, d[10]), P, E, w, 22, d[11]), R = n(R, P = n(P, E = n(E, O, R, P, x, 7, d[12]), O, R, k, 12, d[13]), E, O, S, 17, d[14]), P, E, C, 22, d[15]), R = r(R, P = r(P, E = r(E, O, R, P, f, 5, d[16]), O, R, m, 9, d[17]), E, O, w, 14, d[18]), P, E, l, 20, d[19]), R = r(R, P = r(P, E = r(E, O, R, P, g, 5, d[20]), O, R, _, 9, d[21]), E, O, C, 14, d[22]), P, E, v, 20, d[23]), R = r(R, P = r(P, E = r(E, O, R, P, A, 5, d[24]), O, R, S, 9, d[25]), E, O, h, 14, d[26]), P, E, b, 20, d[27]), R = r(R, P = r(P, E = r(E, O, R, P, k, 5, d[28]), O, R, p, 9, d[29]), E, O, y, 14, d[30]), P, E, x, 20, d[31]), R = o(R, P = o(P, E = o(E, O, R, P, g, 4, d[32]), O, R, b, 11, d[33]), E, O, w, 16, d[34]), P, E, S, 23, d[35]), R = o(R, P = o(P, E = o(E, O, R, P, f, 4, d[36]), O, R, v, 11, d[37]), E, O, y, 16, d[38]), P, E, _, 23, d[39]), R = o(R, P = o(P, E = o(E, O, R, P, k, 4, d[40]), O, R, l, 11, d[41]), E, O, h, 16, d[42]), P, E, m, 23, d[43]), R = o(R, P = o(P, E = o(E, O, R, P, A, 4, d[44]), O, R, x, 11, d[45]), E, O, C, 16, d[46]), P, E, p, 23, d[47]), R = i(R, P = i(P, E = i(E, O, R, P, l, 6, d[48]), O, R, y, 10, d[49]), E, O, S, 15, d[50]), P, E, g, 21, d[51]), R = i(R, P = i(P, E = i(E, O, R, P, x, 6, d[52]), O, R, h, 10, d[53]), E, O, _, 15, d[54]), P, E, f, 21, d[55]), R = i(R, P = i(P, E = i(E, O, R, P, b, 6, d[56]), O, R, C, 10, d[57]), E, O, m, 15, d[58]), P, E, k, 21, d[59]), R = i(R, P = i(P, E = i(E, O, R, P, v, 6, d[60]), O, R, w, 10, d[61]), E, O, p, 15, d[62]), P, E, A, 21, d[63]), 
                        u[0] = u[0] + E | 0, u[1] = u[1] + O | 0, u[2] = u[2] + R | 0, u[3] = u[3] + P | 0;
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
// 此文件包含从 wx049ad3906b202f16 提取的 MD5 算法实现
// 检测位置: 行 8960-8960
// 变量名: ___
// 检测源: static
