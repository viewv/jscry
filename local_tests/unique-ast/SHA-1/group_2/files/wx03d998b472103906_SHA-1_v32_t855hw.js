/**
 * SHA-1 算法实现
 * App ID: wx03d998b472103906
 * 版本: v32
 * 代码哈希: t855hw
 * 来源文件: output/wx03d998b472103906/common/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.98
 * 函数名: anonymous
 * 行数: 33
 * 生成时间: 2025-07-05T13:17:10.835Z
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
                        var o, a, l, _, w, S, E, A, k, x, M, O = this._hash.words, B = h.words, T = d.words, j = s.words, I = c.words, P = f.words, R = u.words;
                        S = o = O[0], E = a = O[1], A = l = O[2], k = _ = O[3], x = w = O[4];
                        for (r = 0; r < 80; r += 1) M = o + t[e + j[r]] | 0, M += r < 16 ? p(a, l, _) + B[0] : r < 32 ? b(a, l, _) + B[1] : r < 48 ? v(a, l, _) + B[2] : r < 64 ? g(a, l, _) + B[3] : y(a, l, _) + B[4], 
                        M |= 0, M = m(M, P[r]), M = M + w | 0, o = w, w = _, _ = m(l, 10), l = a, a = M, 
                        M = S + t[e + I[r]] | 0, M += r < 16 ? y(E, A, k) + T[0] : r < 32 ? g(E, A, k) + T[1] : r < 48 ? v(E, A, k) + T[2] : r < 64 ? b(E, A, k) + T[3] : p(E, A, k) + T[4], 
                        M |= 0, M = m(M, R[r]), M = M + x | 0, S = x, x = k, k = m(A, 10), A = E, E = M;
                        M = O[1] + l + k | 0, O[1] = O[2] + _ + x | 0, O[2] = O[3] + w + S | 0, O[3] = O[4] + o + E | 0, 
                        O[4] = O[0] + a + A | 0, O[0] = M;
                    },
                    _doFinalize: function() {
                        var t = this._data, e = t.words, r = 8 * this._nDataBytes, n = 8 * t.sigBytes;
                        e[n >>> 5] |= 128 << 24 - n % 32, e[14 + (n + 64 >>> 9 << 4)] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8), 
                        t.sigBytes = 4 * (e.length + 1), this._process();
                        for (var i = this._hash, o = i.words, a = 0; a < 5; a++) {
                            var s = o[a];
                            o[a] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8);
                        }
                        return i;
                    },
                    clone: function() {
                        var t = o.clone.call(this);
                        return t._hash = this._hash.clone(), t;
                    }
                })

// ==================== 元数据 ====================
// 此文件包含从 wx03d998b472103906 提取的 SHA-1 算法实现
// 检测位置: 行 9270-9270
// 变量名: ___
// 检测源: static
