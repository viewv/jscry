/**
 * SHA-1 算法实现
 * App ID: wx0611624cc959bd21
 * 版本: v51
 * 代码哈希: y7nszn
 * 来源文件: output/wx0611624cc959bd21/common/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.98
 * 函数名: anonymous
 * 行数: 33
 * 生成时间: 2025-07-05T13:17:10.842Z
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
                        var o, a, l, _, w, S, E, k, A, M, x, B = this._hash.words, O = h.words, T = d.words, P = s.words, I = c.words, C = f.words, R = u.words;
                        S = o = B[0], E = a = B[1], k = l = B[2], A = _ = B[3], M = w = B[4];
                        for (r = 0; r < 80; r += 1) x = o + e[t + P[r]] | 0, x += r < 16 ? p(a, l, _) + O[0] : r < 32 ? b(a, l, _) + O[1] : r < 48 ? g(a, l, _) + O[2] : r < 64 ? v(a, l, _) + O[3] : y(a, l, _) + O[4], 
                        x |= 0, x = m(x, C[r]), x = x + w | 0, o = w, w = _, _ = m(l, 10), l = a, a = x, 
                        x = S + e[t + I[r]] | 0, x += r < 16 ? y(E, k, A) + T[0] : r < 32 ? v(E, k, A) + T[1] : r < 48 ? g(E, k, A) + T[2] : r < 64 ? b(E, k, A) + T[3] : p(E, k, A) + T[4], 
                        x |= 0, x = m(x, R[r]), x = x + M | 0, S = M, M = A, A = m(k, 10), k = E, E = x;
                        x = B[1] + l + A | 0, B[1] = B[2] + _ + M | 0, B[2] = B[3] + w + S | 0, B[3] = B[4] + o + E | 0, 
                        B[4] = B[0] + a + k | 0, B[0] = x;
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
// 此文件包含从 wx0611624cc959bd21 提取的 SHA-1 算法实现
// 检测位置: 行 779-779
// 变量名: ___
// 检测源: static
