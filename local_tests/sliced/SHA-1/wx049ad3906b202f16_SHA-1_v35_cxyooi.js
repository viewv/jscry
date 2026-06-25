/**
 * SHA-1 算法实现
 * App ID: wx049ad3906b202f16
 * 版本: v35
 * 代码哈希: cxyooi
 * 来源文件: output/wx049ad3906b202f16/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.98
 * 函数名: anonymous
 * 行数: 33
 * 生成时间: 2025-07-05T13:17:10.836Z
 */

d.extend({
                    _doReset: function() {
                        this._hash = l.create([ 1732584193, 4023233417, 2562383102, 271733878, 3285377520 ]);
                    },
                    _doProcessBlock: function(t, e) {
                        for (var c = 0; c < 16; c++) {
                            var u = e + c, l = t[u];
                            t[u] = 16711935 & (l << 8 | l >>> 24) | 4278255360 & (l << 24 | l >>> 8);
                        }
                        var d, f, b, A, _, w, x, k, S, C, E, O = this._hash.words, R = m.words, P = y.words, I = p.words, T = h.words, D = v.words, j = g.words;
                        for (w = d = O[0], x = f = O[1], k = b = O[2], S = A = O[3], C = _ = O[4], c = 0; c < 80; c += 1) E = d + t[e + I[c]] | 0, 
                        E += c < 16 ? n(f, b, A) + R[0] : c < 32 ? r(f, b, A) + R[1] : c < 48 ? o(f, b, A) + R[2] : c < 64 ? i(f, b, A) + R[3] : a(f, b, A) + R[4], 
                        E = (E = s(E |= 0, D[c])) + _ | 0, d = _, _ = A, A = s(b, 10), b = f, f = E, E = w + t[e + T[c]] | 0, 
                        E += c < 16 ? a(x, k, S) + P[0] : c < 32 ? i(x, k, S) + P[1] : c < 48 ? o(x, k, S) + P[2] : c < 64 ? r(x, k, S) + P[3] : n(x, k, S) + P[4], 
                        E = (E = s(E |= 0, j[c])) + C | 0, w = C, C = S, S = s(k, 10), k = x, x = E;
                        E = O[1] + b + S | 0, O[1] = O[2] + A + C | 0, O[2] = O[3] + _ + w | 0, O[3] = O[4] + d + x | 0, 
                        O[4] = O[0] + f + k | 0, O[0] = E;
                    },
                    _doFinalize: function() {
                        var t = this._data, e = t.words, n = 8 * this._nDataBytes, r = 8 * t.sigBytes;
                        e[r >>> 5] |= 128 << 24 - r % 32, e[14 + (r + 64 >>> 9 << 4)] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8), 
                        t.sigBytes = 4 * (e.length + 1), this._process();
                        for (var o = this._hash, i = o.words, a = 0; a < 5; a++) {
                            var s = i[a];
                            i[a] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8);
                        }
                        return o;
                    },
                    clone: function() {
                        var t = d.clone.call(this);
                        return t._hash = this._hash.clone(), t;
                    }
                })

// ==================== 元数据 ====================
// 此文件包含从 wx049ad3906b202f16 提取的 SHA-1 算法实现
// 检测位置: 行 9070-9070
// 变量名: ___
// 检测源: static
