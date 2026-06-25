/**
 * SHA-1 算法实现
 * App ID: wx06f1de32ab045cf6
 * 版本: v60
 * 代码哈希: 8hhzuj
 * 来源文件: output/wx06f1de32ab045cf6/common/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.98
 * 函数名: anonymous
 * 行数: 33
 * 生成时间: 2025-07-05T13:17:10.845Z
 */

i.extend({
                    _doReset: function() {
                        this._hash = a.create([ 1732584193, 4023233417, 2562383102, 271733878, 3285377520 ]);
                    },
                    _doProcessBlock: function(e, t) {
                        for (var n = 0; n < 16; n++) {
                            var r = t + n, a = e[r];
                            e[r] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8);
                        }
                        var i, s, f, M, L, b, w, k, Y, D, T, S = this._hash.words, E = l.words, x = _.words, A = o.words, O = u.words, j = d.words, P = c.words;
                        b = i = S[0], w = s = S[1], k = f = S[2], Y = M = S[3], D = L = S[4];
                        for (n = 0; n < 80; n += 1) T = i + e[t + A[n]] | 0, T += n < 16 ? h(s, f, M) + E[0] : n < 32 ? m(s, f, M) + E[1] : n < 48 ? p(s, f, M) + E[2] : n < 64 ? y(s, f, M) + E[3] : g(s, f, M) + E[4], 
                        T |= 0, T = v(T, j[n]), T = T + L | 0, i = L, L = M, M = v(f, 10), f = s, s = T, 
                        T = b + e[t + O[n]] | 0, T += n < 16 ? g(w, k, Y) + x[0] : n < 32 ? y(w, k, Y) + x[1] : n < 48 ? p(w, k, Y) + x[2] : n < 64 ? m(w, k, Y) + x[3] : h(w, k, Y) + x[4], 
                        T |= 0, T = v(T, P[n]), T = T + D | 0, b = D, D = Y, Y = v(k, 10), k = w, w = T;
                        T = S[1] + f + Y | 0, S[1] = S[2] + M + D | 0, S[2] = S[3] + L + b | 0, S[3] = S[4] + i + w | 0, 
                        S[4] = S[0] + s + k | 0, S[0] = T;
                    },
                    _doFinalize: function() {
                        var e = this._data, t = e.words, n = 8 * this._nDataBytes, r = 8 * e.sigBytes;
                        t[r >>> 5] |= 128 << 24 - r % 32, t[14 + (r + 64 >>> 9 << 4)] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8), 
                        e.sigBytes = 4 * (t.length + 1), this._process();
                        for (var a = this._hash, i = a.words, s = 0; s < 5; s++) {
                            var o = i[s];
                            i[s] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8);
                        }
                        return a;
                    },
                    clone: function() {
                        var e = i.clone.call(this);
                        return e._hash = this._hash.clone(), e;
                    }
                })

// ==================== 元数据 ====================
// 此文件包含从 wx06f1de32ab045cf6 提取的 SHA-1 算法实现
// 检测位置: 行 1381-1381
// 变量名: ___
// 检测源: static
