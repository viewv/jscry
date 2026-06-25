/**
 * SHA-1 算法实现
 * App ID: wx06ef95130dd6a356
 * 版本: v59
 * 代码哈希: -hqtr31
 * 来源文件: output/wx06ef95130dd6a356/common/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.98
 * 函数名: anonymous
 * 行数: 33
 * 生成时间: 2025-07-05T13:17:10.844Z
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
                        var o, a, l, m, w, S, k, A, x, E, M, B = this._hash.words, O = h.words, I = d.words, j = f.words, R = s.words, C = c.words, P = u.words;
                        S = o = B[0], k = a = B[1], A = l = B[2], x = m = B[3], E = w = B[4];
                        for (r = 0; r < 80; r += 1) M = o + t[e + j[r]] | 0, M += r < 16 ? p(a, l, m) + O[0] : r < 32 ? b(a, l, m) + O[1] : r < 48 ? v(a, l, m) + O[2] : r < 64 ? y(a, l, m) + O[3] : g(a, l, m) + O[4], 
                        M |= 0, M = _(M, C[r]), M = M + w | 0, o = w, w = m, m = _(l, 10), l = a, a = M, 
                        M = S + t[e + R[r]] | 0, M += r < 16 ? g(k, A, x) + I[0] : r < 32 ? y(k, A, x) + I[1] : r < 48 ? v(k, A, x) + I[2] : r < 64 ? b(k, A, x) + I[3] : p(k, A, x) + I[4], 
                        M |= 0, M = _(M, P[r]), M = M + E | 0, S = E, E = x, x = _(A, 10), A = k, k = M;
                        M = B[1] + l + x | 0, B[1] = B[2] + m + E | 0, B[2] = B[3] + w + S | 0, B[3] = B[4] + o + k | 0, 
                        B[4] = B[0] + a + A | 0, B[0] = M;
                    },
                    _doFinalize: function() {
                        var t = this._data, e = t.words, r = 8 * this._nDataBytes, n = 8 * t.sigBytes;
                        e[n >>> 5] |= 128 << 24 - n % 32, e[14 + (n + 64 >>> 9 << 4)] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8), 
                        t.sigBytes = 4 * (e.length + 1), this._process();
                        for (var i = this._hash, o = i.words, a = 0; a < 5; a++) {
                            var f = o[a];
                            o[a] = 16711935 & (f << 8 | f >>> 24) | 4278255360 & (f << 24 | f >>> 8);
                        }
                        return i;
                    },
                    clone: function() {
                        var t = o.clone.call(this);
                        return t._hash = this._hash.clone(), t;
                    }
                })

// ==================== 元数据 ====================
// 此文件包含从 wx06ef95130dd6a356 提取的 SHA-1 算法实现
// 检测位置: 行 1054-1054
// 变量名: ___
// 检测源: static
