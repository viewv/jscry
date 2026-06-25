/**
 * SHA-1 算法实现
 * App ID: wx06b5c05a0ee5060e
 * 版本: v55
 * 代码哈希: -nzwfxw
 * 来源文件: output/wx06b5c05a0ee5060e/common/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.98
 * 函数名: anonymous
 * 行数: 33
 * 生成时间: 2025-07-05T13:17:10.843Z
 */

o.extend({
                    _doReset: function() {
                        this._hash = i.create([ 1732584193, 4023233417, 2562383102, 271733878, 3285377520 ]);
                    },
                    _doProcessBlock: function(t, e) {
                        for (var r = 0; r < 16; r++) {
                            var n = e + r, i = t[n];
                            t[n] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8);
                        }
                        var o, a, l, y, _, k, w, S, C, x, O, R = this._hash.words, P = d.words, A = h.words, M = c.words, E = s.words, I = f.words, B = u.words;
                        k = o = R[0], w = a = R[1], S = l = R[2], C = y = R[3], x = _ = R[4];
                        for (r = 0; r < 80; r += 1) O = o + t[e + M[r]] | 0, O += r < 16 ? p(a, l, y) + P[0] : r < 32 ? b(a, l, y) + P[1] : r < 48 ? v(a, l, y) + P[2] : r < 64 ? m(a, l, y) + P[3] : W(a, l, y) + P[4], 
                        O |= 0, O = g(O, I[r]), O = O + _ | 0, o = _, _ = y, y = g(l, 10), l = a, a = O, 
                        O = k + t[e + E[r]] | 0, O += r < 16 ? W(w, S, C) + A[0] : r < 32 ? m(w, S, C) + A[1] : r < 48 ? v(w, S, C) + A[2] : r < 64 ? b(w, S, C) + A[3] : p(w, S, C) + A[4], 
                        O |= 0, O = g(O, B[r]), O = O + x | 0, k = x, x = C, C = g(S, 10), S = w, w = O;
                        O = R[1] + l + C | 0, R[1] = R[2] + y + x | 0, R[2] = R[3] + _ + k | 0, R[3] = R[4] + o + w | 0, 
                        R[4] = R[0] + a + S | 0, R[0] = O;
                    },
                    _doFinalize: function() {
                        var t = this._data, e = t.words, r = 8 * this._nDataBytes, n = 8 * t.sigBytes;
                        e[n >>> 5] |= 128 << 24 - n % 32, e[14 + (n + 64 >>> 9 << 4)] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8), 
                        t.sigBytes = 4 * (e.length + 1), this._process();
                        for (var i = this._hash, o = i.words, a = 0; a < 5; a++) {
                            var c = o[a];
                            o[a] = 16711935 & (c << 8 | c >>> 24) | 4278255360 & (c << 24 | c >>> 8);
                        }
                        return i;
                    },
                    clone: function() {
                        var t = o.clone.call(this);
                        return t._hash = this._hash.clone(), t;
                    }
                })

// ==================== 元数据 ====================
// 此文件包含从 wx06b5c05a0ee5060e 提取的 SHA-1 算法实现
// 检测位置: 行 7041-7041
// 变量名: ___
// 检测源: static
