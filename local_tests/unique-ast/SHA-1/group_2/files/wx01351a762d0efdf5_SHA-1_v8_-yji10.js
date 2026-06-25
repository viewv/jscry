/**
 * SHA-1 算法实现
 * App ID: wx01351a762d0efdf5
 * 版本: v8
 * 代码哈希: -yji10v
 * 来源文件: output/wx01351a762d0efdf5/common/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.98
 * 函数名: anonymous
 * 行数: 33
 * 生成时间: 2025-07-05T13:17:10.828Z
 */

o.extend({
                    _doReset: function() {
                        this._hash = i.create([ 1732584193, 4023233417, 2562383102, 271733878, 3285377520 ]);
                    },
                    _doProcessBlock: function(e, t) {
                        for (var r = 0; r < 16; r++) {
                            var n = t + r, i = e[n];
                            e[n] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8);
                        }
                        var o, a, l, A, w, _, E, S, O, I, x, k = this._hash.words, M = d.words, N = h.words, j = s.words, C = c.words, R = u.words, T = f.words;
                        _ = o = k[0], E = a = k[1], S = l = k[2], O = A = k[3], I = w = k[4];
                        for (r = 0; r < 80; r += 1) x = o + e[t + j[r]] | 0, x += r < 16 ? p(a, l, A) + M[0] : r < 32 ? b(a, l, A) + M[1] : r < 48 ? y(a, l, A) + M[2] : r < 64 ? g(a, l, A) + M[3] : m(a, l, A) + M[4], 
                        x |= 0, x = v(x, R[r]), x = x + w | 0, o = w, w = A, A = v(l, 10), l = a, a = x, 
                        x = _ + e[t + C[r]] | 0, x += r < 16 ? m(E, S, O) + N[0] : r < 32 ? g(E, S, O) + N[1] : r < 48 ? y(E, S, O) + N[2] : r < 64 ? b(E, S, O) + N[3] : p(E, S, O) + N[4], 
                        x |= 0, x = v(x, T[r]), x = x + I | 0, _ = I, I = O, O = v(S, 10), S = E, E = x;
                        x = k[1] + l + O | 0, k[1] = k[2] + A + I | 0, k[2] = k[3] + w + _ | 0, k[3] = k[4] + o + E | 0, 
                        k[4] = k[0] + a + S | 0, k[0] = x;
                    },
                    _doFinalize: function() {
                        var e = this._data, t = e.words, r = 8 * this._nDataBytes, n = 8 * e.sigBytes;
                        t[n >>> 5] |= 128 << 24 - n % 32, t[14 + (n + 64 >>> 9 << 4)] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8), 
                        e.sigBytes = 4 * (t.length + 1), this._process();
                        for (var i = this._hash, o = i.words, a = 0; a < 5; a++) {
                            var s = o[a];
                            o[a] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8);
                        }
                        return i;
                    },
                    clone: function() {
                        var e = o.clone.call(this);
                        return e._hash = this._hash.clone(), e;
                    }
                })

// ==================== 元数据 ====================
// 此文件包含从 wx01351a762d0efdf5 提取的 SHA-1 算法实现
// 检测位置: 行 19307-19307
// 变量名: ___
// 检测源: static
