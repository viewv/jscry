/**
 * SHA-1 算法实现
 * App ID: wx03bc60e1b437e39c
 * 版本: v29
 * 代码哈希: mnk6b
 * 来源文件: output/wx03bc60e1b437e39c/common/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.98
 * 函数名: anonymous
 * 行数: 33
 * 生成时间: 2025-07-05T13:17:10.834Z
 */

a.extend({
                        _doReset: function() {
                            this._hash = i.create([ 1732584193, 4023233417, 2562383102, 271733878, 3285377520 ]);
                        },
                        _doProcessBlock: function(e, t) {
                            for (var n = 0; n < 16; n++) {
                                var r = t + n, i = e[r];
                                e[r] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8);
                            }
                            var a, s, l, g, M, w, L, k, Y, S, D, T = this._hash.words, x = f.words, j = h.words, A = o.words, E = d.words, H = u.words, P = c.words;
                            w = a = T[0], L = s = T[1], k = l = T[2], Y = g = T[3], S = M = T[4];
                            for (n = 0; n < 80; n += 1) D = a + e[t + A[n]] | 0, D += n < 16 ? _(s, l, g) + x[0] : n < 32 ? m(s, l, g) + x[1] : n < 48 ? p(s, l, g) + x[2] : n < 64 ? y(s, l, g) + x[3] : b(s, l, g) + x[4], 
                            D |= 0, D = v(D, H[n]), D = D + M | 0, a = M, M = g, g = v(l, 10), l = s, s = D, 
                            D = w + e[t + E[n]] | 0, D += n < 16 ? b(L, k, Y) + j[0] : n < 32 ? y(L, k, Y) + j[1] : n < 48 ? p(L, k, Y) + j[2] : n < 64 ? m(L, k, Y) + j[3] : _(L, k, Y) + j[4], 
                            D |= 0, D = v(D, P[n]), D = D + S | 0, w = S, S = Y, Y = v(k, 10), k = L, L = D;
                            D = T[1] + l + Y | 0, T[1] = T[2] + g + S | 0, T[2] = T[3] + M + w | 0, T[3] = T[4] + a + L | 0, 
                            T[4] = T[0] + s + k | 0, T[0] = D;
                        },
                        _doFinalize: function() {
                            var e = this._data, t = e.words, n = 8 * this._nDataBytes, r = 8 * e.sigBytes;
                            t[r >>> 5] |= 128 << 24 - r % 32, t[14 + (r + 64 >>> 9 << 4)] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8), 
                            e.sigBytes = 4 * (t.length + 1), this._process();
                            for (var i = this._hash, a = i.words, s = 0; s < 5; s++) {
                                var o = a[s];
                                a[s] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8);
                            }
                            return i;
                        },
                        clone: function() {
                            var e = a.clone.call(this);
                            return e._hash = this._hash.clone(), e;
                        }
                    })

// ==================== 元数据 ====================
// 此文件包含从 wx03bc60e1b437e39c 提取的 SHA-1 算法实现
// 检测位置: 行 26013-26013
// 变量名: ___
// 检测源: static
