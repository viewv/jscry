/**
 * MD5 算法实现
 * App ID: wx057df3eee04aeb5c
 * 版本: v40
 * 代码哈希: -m6ztyj
 * 来源文件: output/wx057df3eee04aeb5c/common/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.95
 * 函数名: anonymous
 * 行数: 51
 * 生成时间: 2025-07-05T13:17:10.781Z
 */

i.extend({
                    _doReset: function() {
                        this._hash = new r.init([ 1732584193, 4023233417, 2562383102, 271733878 ]);
                    },
                    _doProcessBlock: function(t, e) {
                        for (var n = 0; n < 16; n++) {
                            var o = e + n, r = t[o];
                            t[o] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8);
                        }
                        var i = this._hash.words, a = t[e + 0], c = t[e + 1], f = t[e + 2], h = t[e + 3], m = t[e + 4], y = t[e + 5], g = t[e + 6], v = t[e + 7], b = t[e + 8], w = t[e + 9], P = t[e + 10], x = t[e + 11], I = t[e + 12], _ = t[e + 13], O = t[e + 14], S = t[e + 15], A = i[0], L = i[1], k = i[2], j = i[3];
                        A = u(A, L, k, j, a, 7, s[0]), j = u(j, A, L, k, c, 12, s[1]), k = u(k, j, A, L, f, 17, s[2]), 
                        L = u(L, k, j, A, h, 22, s[3]), A = u(A, L, k, j, m, 7, s[4]), j = u(j, A, L, k, y, 12, s[5]), 
                        k = u(k, j, A, L, g, 17, s[6]), L = u(L, k, j, A, v, 22, s[7]), A = u(A, L, k, j, b, 7, s[8]), 
                        j = u(j, A, L, k, w, 12, s[9]), k = u(k, j, A, L, P, 17, s[10]), L = u(L, k, j, A, x, 22, s[11]), 
                        A = u(A, L, k, j, I, 7, s[12]), j = u(j, A, L, k, _, 12, s[13]), k = u(k, j, A, L, O, 17, s[14]), 
                        A = l(A, L = u(L, k, j, A, S, 22, s[15]), k, j, c, 5, s[16]), j = l(j, A, L, k, g, 9, s[17]), 
                        k = l(k, j, A, L, x, 14, s[18]), L = l(L, k, j, A, a, 20, s[19]), A = l(A, L, k, j, y, 5, s[20]), 
                        j = l(j, A, L, k, P, 9, s[21]), k = l(k, j, A, L, S, 14, s[22]), L = l(L, k, j, A, m, 20, s[23]), 
                        A = l(A, L, k, j, w, 5, s[24]), j = l(j, A, L, k, O, 9, s[25]), k = l(k, j, A, L, h, 14, s[26]), 
                        L = l(L, k, j, A, b, 20, s[27]), A = l(A, L, k, j, _, 5, s[28]), j = l(j, A, L, k, f, 9, s[29]), 
                        k = l(k, j, A, L, v, 14, s[30]), A = d(A, L = l(L, k, j, A, I, 20, s[31]), k, j, y, 4, s[32]), 
                        j = d(j, A, L, k, b, 11, s[33]), k = d(k, j, A, L, x, 16, s[34]), L = d(L, k, j, A, O, 23, s[35]), 
                        A = d(A, L, k, j, c, 4, s[36]), j = d(j, A, L, k, m, 11, s[37]), k = d(k, j, A, L, v, 16, s[38]), 
                        L = d(L, k, j, A, P, 23, s[39]), A = d(A, L, k, j, _, 4, s[40]), j = d(j, A, L, k, a, 11, s[41]), 
                        k = d(k, j, A, L, h, 16, s[42]), L = d(L, k, j, A, g, 23, s[43]), A = d(A, L, k, j, w, 4, s[44]), 
                        j = d(j, A, L, k, I, 11, s[45]), k = d(k, j, A, L, S, 16, s[46]), A = p(A, L = d(L, k, j, A, f, 23, s[47]), k, j, a, 6, s[48]), 
                        j = p(j, A, L, k, v, 10, s[49]), k = p(k, j, A, L, O, 15, s[50]), L = p(L, k, j, A, y, 21, s[51]), 
                        A = p(A, L, k, j, I, 6, s[52]), j = p(j, A, L, k, h, 10, s[53]), k = p(k, j, A, L, P, 15, s[54]), 
                        L = p(L, k, j, A, c, 21, s[55]), A = p(A, L, k, j, b, 6, s[56]), j = p(j, A, L, k, S, 10, s[57]), 
                        k = p(k, j, A, L, g, 15, s[58]), L = p(L, k, j, A, _, 21, s[59]), A = p(A, L, k, j, m, 6, s[60]), 
                        j = p(j, A, L, k, x, 10, s[61]), k = p(k, j, A, L, f, 15, s[62]), L = p(L, k, j, A, w, 21, s[63]), 
                        i[0] = i[0] + A | 0, i[1] = i[1] + L | 0, i[2] = i[2] + k | 0, i[3] = i[3] + j | 0;
                    },
                    _doFinalize: function() {
                        var t = this._data, n = t.words, o = 8 * this._nDataBytes, r = 8 * t.sigBytes;
                        n[r >>> 5] |= 128 << 24 - r % 32;
                        var i = e.floor(o / 4294967296), a = o;
                        n[15 + (r + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), 
                        n[14 + (r + 64 >>> 9 << 4)] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8), 
                        t.sigBytes = 4 * (n.length + 1), this._process();
                        for (var s = this._hash, c = s.words, u = 0; u < 4; u++) {
                            var l = c[u];
                            c[u] = 16711935 & (l << 8 | l >>> 24) | 4278255360 & (l << 24 | l >>> 8);
                        }
                        return s;
                    },
                    clone: function() {
                        var t = i.clone.call(this);
                        return t._hash = this._hash.clone(), t;
                    }
                })

// ==================== 元数据 ====================
// 此文件包含从 wx057df3eee04aeb5c 提取的 MD5 算法实现
// 检测位置: 行 8511-8511
// 变量名: ___
// 检测源: static
