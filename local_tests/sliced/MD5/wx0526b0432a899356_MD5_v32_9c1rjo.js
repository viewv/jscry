/**
 * MD5 算法实现
 * App ID: wx0526b0432a899356
 * 版本: v32
 * 代码哈希: 9c1rjo
 * 来源文件: output/wx0526b0432a899356/common/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.95
 * 函数名: anonymous
 * 行数: 52
 * 生成时间: 2025-07-05T13:17:10.771Z
 */

n.extend({
                    _doReset: function() {
                        this._hash = new r.init([ 1732584193, 4023233417, 2562383102, 271733878 ]);
                    },
                    _doProcessBlock: function(t, e) {
                        for (var r = 0; r < 16; r++) {
                            var n = e + r, i = t[n];
                            t[n] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8);
                        }
                        var o = this._hash.words, a = t[e + 0], s = t[e + 1], c = t[e + 2], f = t[e + 3], u = t[e + 4], h = t[e + 5], d = t[e + 6], l = t[e + 7], p = t[e + 8], b = t[e + 9], v = t[e + 10], g = t[e + 11], y = t[e + 12], m = t[e + 13], _ = t[e + 14], w = t[e + 15], x = o[0], S = o[1], A = o[2], k = o[3];
                        x = M(x, S, A, k, a, 7, E[0]), k = M(k, x, S, A, s, 12, E[1]), A = M(A, k, x, S, c, 17, E[2]), 
                        S = M(S, A, k, x, f, 22, E[3]), x = M(x, S, A, k, u, 7, E[4]), k = M(k, x, S, A, h, 12, E[5]), 
                        A = M(A, k, x, S, d, 17, E[6]), S = M(S, A, k, x, l, 22, E[7]), x = M(x, S, A, k, p, 7, E[8]), 
                        k = M(k, x, S, A, b, 12, E[9]), A = M(A, k, x, S, v, 17, E[10]), S = M(S, A, k, x, g, 22, E[11]), 
                        x = M(x, S, A, k, y, 7, E[12]), k = M(k, x, S, A, m, 12, E[13]), A = M(A, k, x, S, _, 17, E[14]), 
                        S = M(S, A, k, x, w, 22, E[15]), x = C(x, S, A, k, s, 5, E[16]), k = C(k, x, S, A, d, 9, E[17]), 
                        A = C(A, k, x, S, g, 14, E[18]), S = C(S, A, k, x, a, 20, E[19]), x = C(x, S, A, k, h, 5, E[20]), 
                        k = C(k, x, S, A, v, 9, E[21]), A = C(A, k, x, S, w, 14, E[22]), S = C(S, A, k, x, u, 20, E[23]), 
                        x = C(x, S, A, k, b, 5, E[24]), k = C(k, x, S, A, _, 9, E[25]), A = C(A, k, x, S, f, 14, E[26]), 
                        S = C(S, A, k, x, p, 20, E[27]), x = C(x, S, A, k, m, 5, E[28]), k = C(k, x, S, A, c, 9, E[29]), 
                        A = C(A, k, x, S, l, 14, E[30]), S = C(S, A, k, x, y, 20, E[31]), x = O(x, S, A, k, h, 4, E[32]), 
                        k = O(k, x, S, A, p, 11, E[33]), A = O(A, k, x, S, g, 16, E[34]), S = O(S, A, k, x, _, 23, E[35]), 
                        x = O(x, S, A, k, s, 4, E[36]), k = O(k, x, S, A, u, 11, E[37]), A = O(A, k, x, S, l, 16, E[38]), 
                        S = O(S, A, k, x, v, 23, E[39]), x = O(x, S, A, k, m, 4, E[40]), k = O(k, x, S, A, a, 11, E[41]), 
                        A = O(A, k, x, S, f, 16, E[42]), S = O(S, A, k, x, d, 23, E[43]), x = O(x, S, A, k, b, 4, E[44]), 
                        k = O(k, x, S, A, y, 11, E[45]), A = O(A, k, x, S, w, 16, E[46]), S = O(S, A, k, x, c, 23, E[47]), 
                        x = B(x, S, A, k, a, 6, E[48]), k = B(k, x, S, A, l, 10, E[49]), A = B(A, k, x, S, _, 15, E[50]), 
                        S = B(S, A, k, x, h, 21, E[51]), x = B(x, S, A, k, y, 6, E[52]), k = B(k, x, S, A, f, 10, E[53]), 
                        A = B(A, k, x, S, v, 15, E[54]), S = B(S, A, k, x, s, 21, E[55]), x = B(x, S, A, k, p, 6, E[56]), 
                        k = B(k, x, S, A, w, 10, E[57]), A = B(A, k, x, S, d, 15, E[58]), S = B(S, A, k, x, m, 21, E[59]), 
                        x = B(x, S, A, k, u, 6, E[60]), k = B(k, x, S, A, g, 10, E[61]), A = B(A, k, x, S, c, 15, E[62]), 
                        S = B(S, A, k, x, b, 21, E[63]), o[0] = o[0] + x | 0, o[1] = o[1] + S | 0, o[2] = o[2] + A | 0, 
                        o[3] = o[3] + k | 0;
                    },
                    _doFinalize: function() {
                        var t = this._data, e = t.words, r = 8 * this._nDataBytes, n = 8 * t.sigBytes;
                        e[n >>> 5] |= 128 << 24 - n % 32;
                        var i = u.floor(r / 4294967296), o = r;
                        e[15 + (n + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), 
                        e[14 + (n + 64 >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), 
                        t.sigBytes = 4 * (e.length + 1), this._process();
                        for (var a = this._hash, s = a.words, c = 0; c < 4; c++) {
                            var f = s[c];
                            s[c] = 16711935 & (f << 8 | f >>> 24) | 4278255360 & (f << 24 | f >>> 8);
                        }
                        return a;
                    },
                    clone: function() {
                        var t = n.clone.call(this);
                        return t._hash = this._hash.clone(), t;
                    }
                })

// ==================== 元数据 ====================
// 此文件包含从 wx0526b0432a899356 提取的 MD5 算法实现
// 检测位置: 行 10472-10472
// 变量名: ___
// 检测源: static
