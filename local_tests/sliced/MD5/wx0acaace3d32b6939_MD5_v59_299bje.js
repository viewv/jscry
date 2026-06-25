/**
 * MD5 算法实现
 * App ID: wx0acaace3d32b6939
 * 版本: v59
 * 代码哈希: 299bje
 * 来源文件: output/wx0acaace3d32b6939/common/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.95
 * 函数名: anonymous
 * 行数: 31
 * 生成时间: 2025-07-05T13:17:10.813Z
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
                        var u = this._hash.words, f = t[e + 0], h = t[e + 1], d = t[e + 2], p = t[e + 3], v = t[e + 4], y = t[e + 5], _ = t[e + 6], g = t[e + 7], m = t[e + 8], b = t[e + 9], w = t[e + 10], $ = t[e + 11], S = t[e + 12], x = t[e + 13], k = t[e + 14], O = t[e + 15], A = u[0], C = u[1], M = u[2], P = u[3];
                        C = i(C = i(C = i(C = i(C = o(C = o(C = o(C = o(C = r(C = r(C = r(C = r(C = n(C = n(C = n(C = n(C, M = n(M, P = n(P, A = n(A, C, M, P, f, 7, l[0]), C, M, h, 12, l[1]), A, C, d, 17, l[2]), P, A, p, 22, l[3]), M = n(M, P = n(P, A = n(A, C, M, P, v, 7, l[4]), C, M, y, 12, l[5]), A, C, _, 17, l[6]), P, A, g, 22, l[7]), M = n(M, P = n(P, A = n(A, C, M, P, m, 7, l[8]), C, M, b, 12, l[9]), A, C, w, 17, l[10]), P, A, $, 22, l[11]), M = n(M, P = n(P, A = n(A, C, M, P, S, 7, l[12]), C, M, x, 12, l[13]), A, C, k, 17, l[14]), P, A, O, 22, l[15]), M = r(M, P = r(P, A = r(A, C, M, P, h, 5, l[16]), C, M, _, 9, l[17]), A, C, $, 14, l[18]), P, A, f, 20, l[19]), M = r(M, P = r(P, A = r(A, C, M, P, y, 5, l[20]), C, M, w, 9, l[21]), A, C, O, 14, l[22]), P, A, v, 20, l[23]), M = r(M, P = r(P, A = r(A, C, M, P, b, 5, l[24]), C, M, k, 9, l[25]), A, C, p, 14, l[26]), P, A, m, 20, l[27]), M = r(M, P = r(P, A = r(A, C, M, P, x, 5, l[28]), C, M, d, 9, l[29]), A, C, g, 14, l[30]), P, A, S, 20, l[31]), M = o(M, P = o(P, A = o(A, C, M, P, y, 4, l[32]), C, M, m, 11, l[33]), A, C, $, 16, l[34]), P, A, k, 23, l[35]), M = o(M, P = o(P, A = o(A, C, M, P, h, 4, l[36]), C, M, v, 11, l[37]), A, C, g, 16, l[38]), P, A, w, 23, l[39]), M = o(M, P = o(P, A = o(A, C, M, P, x, 4, l[40]), C, M, f, 11, l[41]), A, C, p, 16, l[42]), P, A, _, 23, l[43]), M = o(M, P = o(P, A = o(A, C, M, P, b, 4, l[44]), C, M, S, 11, l[45]), A, C, O, 16, l[46]), P, A, d, 23, l[47]), M = i(M, P = i(P, A = i(A, C, M, P, f, 6, l[48]), C, M, g, 10, l[49]), A, C, k, 15, l[50]), P, A, y, 21, l[51]), M = i(M, P = i(P, A = i(A, C, M, P, S, 6, l[52]), C, M, p, 10, l[53]), A, C, w, 15, l[54]), P, A, h, 21, l[55]), M = i(M, P = i(P, A = i(A, C, M, P, m, 6, l[56]), C, M, O, 10, l[57]), A, C, _, 15, l[58]), P, A, x, 21, l[59]), M = i(M, P = i(P, A = i(A, C, M, P, v, 6, l[60]), C, M, $, 10, l[61]), A, C, d, 15, l[62]), P, A, b, 21, l[63]), 
                        u[0] = u[0] + A | 0, u[1] = u[1] + C | 0, u[2] = u[2] + M | 0, u[3] = u[3] + P | 0;
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
                        var t = u.clone.call(this);
                        return t._hash = this._hash.clone(), t;
                    }
                })

// ==================== 元数据 ====================
// 此文件包含从 wx0acaace3d32b6939 提取的 MD5 算法实现
// 检测位置: 行 3954-3954
// 变量名: ___
// 检测源: static
