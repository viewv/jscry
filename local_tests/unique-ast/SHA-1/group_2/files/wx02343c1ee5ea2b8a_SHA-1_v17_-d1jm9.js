/**
 * SHA-1 算法实现
 * App ID: wx02343c1ee5ea2b8a
 * 版本: v17
 * 代码哈希: -d1jm9x
 * 来源文件: output/wx02343c1ee5ea2b8a/common/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.98
 * 函数名: anonymous
 * 行数: 33
 * 生成时间: 2025-07-05T13:17:10.831Z
 */

h.extend({
                        _doReset: function() {
                            this._hash = u.create([ 1732584193, 4023233417, 2562383102, 271733878, 3285377520 ]);
                        },
                        _doProcessBlock: function(e, t) {
                            for (var s = 0; s < 16; s++) {
                                var c = t + s, u = e[c];
                                e[c] = 16711935 & (u << 8 | u >>> 24) | 4278255360 & (u << 24 | u >>> 8);
                            }
                            var h, d, m, _, w, S, A, k, E, M, x, B = this._hash.words, I = y.words, O = g.words, P = l.words, C = p.words, R = b.words, j = v.words;
                            for (S = h = B[0], A = d = B[1], k = m = B[2], E = _ = B[3], M = w = B[4], s = 0; s < 80; s += 1) x = h + e[t + P[s]] | 0, 
                            x += s < 16 ? r(d, m, _) + I[0] : s < 32 ? n(d, m, _) + I[1] : s < 48 ? i(d, m, _) + I[2] : s < 64 ? o(d, m, _) + I[3] : a(d, m, _) + I[4], 
                            x = (x = f(x |= 0, R[s])) + w | 0, h = w, w = _, _ = f(m, 10), m = d, d = x, x = S + e[t + C[s]] | 0, 
                            x += s < 16 ? a(A, k, E) + O[0] : s < 32 ? o(A, k, E) + O[1] : s < 48 ? i(A, k, E) + O[2] : s < 64 ? n(A, k, E) + O[3] : r(A, k, E) + O[4], 
                            x = (x = f(x |= 0, j[s])) + M | 0, S = M, M = E, E = f(k, 10), k = A, A = x;
                            x = B[1] + m + E | 0, B[1] = B[2] + _ + M | 0, B[2] = B[3] + w + S | 0, B[3] = B[4] + h + A | 0, 
                            B[4] = B[0] + d + k | 0, B[0] = x;
                        },
                        _doFinalize: function() {
                            var e = this._data, t = e.words, r = 8 * this._nDataBytes, n = 8 * e.sigBytes;
                            t[n >>> 5] |= 128 << 24 - n % 32, t[14 + (n + 64 >>> 9 << 4)] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8), 
                            e.sigBytes = 4 * (t.length + 1), this._process();
                            for (var i = this._hash, o = i.words, a = 0; a < 5; a++) {
                                var f = o[a];
                                o[a] = 16711935 & (f << 8 | f >>> 24) | 4278255360 & (f << 24 | f >>> 8);
                            }
                            return i;
                        },
                        clone: function() {
                            var e = h.clone.call(this);
                            return e._hash = this._hash.clone(), e;
                        }
                    })

// ==================== 元数据 ====================
// 此文件包含从 wx02343c1ee5ea2b8a 提取的 SHA-1 算法实现
// 检测位置: 行 1370-1370
// 变量名: ___
// 检测源: static
