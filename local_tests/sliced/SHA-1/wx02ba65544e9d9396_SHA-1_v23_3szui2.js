/**
 * SHA-1 算法实现
 * App ID: wx02ba65544e9d9396
 * 版本: v23
 * 代码哈希: 3szui2
 * 来源文件: output/wx02ba65544e9d9396/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.98
 * 函数名: anonymous
 * 行数: 33
 * 生成时间: 2025-07-05T13:17:10.832Z
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
                        var d, f, b, A, w, _, x, S, k, C, E, O = this._hash.words, T = m.words, I = y.words, R = p.words, P = h.words, D = v.words, j = g.words;
                        for (_ = d = O[0], x = f = O[1], S = b = O[2], k = A = O[3], C = w = O[4], c = 0; c < 80; c += 1) E = d + t[e + R[c]] | 0, 
                        E += c < 16 ? n(f, b, A) + T[0] : c < 32 ? r(f, b, A) + T[1] : c < 48 ? o(f, b, A) + T[2] : c < 64 ? i(f, b, A) + T[3] : a(f, b, A) + T[4], 
                        E = (E = s(E |= 0, D[c])) + w | 0, d = w, w = A, A = s(b, 10), b = f, f = E, E = _ + t[e + P[c]] | 0, 
                        E += c < 16 ? a(x, S, k) + I[0] : c < 32 ? i(x, S, k) + I[1] : c < 48 ? o(x, S, k) + I[2] : c < 64 ? r(x, S, k) + I[3] : n(x, S, k) + I[4], 
                        E = (E = s(E |= 0, j[c])) + C | 0, _ = C, C = k, k = s(S, 10), S = x, x = E;
                        E = O[1] + b + k | 0, O[1] = O[2] + A + C | 0, O[2] = O[3] + w + _ | 0, O[3] = O[4] + d + x | 0, 
                        O[4] = O[0] + f + S | 0, O[0] = E;
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
// 此文件包含从 wx02ba65544e9d9396 提取的 SHA-1 算法实现
// 检测位置: 行 8501-8501
// 变量名: ___
// 检测源: static
