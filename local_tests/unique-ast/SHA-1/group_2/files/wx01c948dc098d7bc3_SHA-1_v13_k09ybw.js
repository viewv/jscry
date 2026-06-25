/**
 * SHA-1 算法实现
 * App ID: wx01c948dc098d7bc3
 * 版本: v13
 * 代码哈希: k09ybw
 * 来源文件: output/wx01c948dc098d7bc3/common/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.98
 * 函数名: anonymous
 * 行数: 33
 * 生成时间: 2025-07-05T13:17:10.829Z
 */

f.extend({
                    _doReset: function() {
                        this._hash = l.create([ 1732584193, 4023233417, 2562383102, 271733878, 3285377520 ]);
                    },
                    _doProcessBlock: function(e, t) {
                        for (var c = 0; c < 16; c++) {
                            var s = t + c, l = e[s];
                            e[s] = 16711935 & (l << 8 | l >>> 24) | 4278255360 & (l << 24 | l >>> 8);
                        }
                        var f, d, b, _, O, S, w, E, P, T, A, j = this._hash.words, D = m.words, x = g.words, I = p.words, R = h.words, k = v.words, C = y.words;
                        for (S = f = j[0], w = d = j[1], E = b = j[2], P = _ = j[3], T = O = j[4], c = 0; c < 80; c += 1) A = f + e[t + I[c]] | 0, 
                        A += c < 16 ? r(d, b, _) + D[0] : c < 32 ? n(d, b, _) + D[1] : c < 48 ? o(d, b, _) + D[2] : c < 64 ? i(d, b, _) + D[3] : a(d, b, _) + D[4], 
                        A = (A = u(A |= 0, k[c])) + O | 0, f = O, O = _, _ = u(b, 10), b = d, d = A, A = S + e[t + R[c]] | 0, 
                        A += c < 16 ? a(w, E, P) + x[0] : c < 32 ? i(w, E, P) + x[1] : c < 48 ? o(w, E, P) + x[2] : c < 64 ? n(w, E, P) + x[3] : r(w, E, P) + x[4], 
                        A = (A = u(A |= 0, C[c])) + T | 0, S = T, T = P, P = u(E, 10), E = w, w = A;
                        A = j[1] + b + P | 0, j[1] = j[2] + _ + T | 0, j[2] = j[3] + O + S | 0, j[3] = j[4] + f + w | 0, 
                        j[4] = j[0] + d + E | 0, j[0] = A;
                    },
                    _doFinalize: function() {
                        var e = this._data, t = e.words, r = 8 * this._nDataBytes, n = 8 * e.sigBytes;
                        t[n >>> 5] |= 128 << 24 - n % 32, t[14 + (n + 64 >>> 9 << 4)] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8), 
                        e.sigBytes = 4 * (t.length + 1), this._process();
                        for (var o = this._hash, i = o.words, a = 0; a < 5; a++) {
                            var u = i[a];
                            i[a] = 16711935 & (u << 8 | u >>> 24) | 4278255360 & (u << 24 | u >>> 8);
                        }
                        return o;
                    },
                    clone: function() {
                        var e = f.clone.call(this);
                        return e._hash = this._hash.clone(), e;
                    }
                })

// ==================== 元数据 ====================
// 此文件包含从 wx01c948dc098d7bc3 提取的 SHA-1 算法实现
// 检测位置: 行 777-777
// 变量名: ___
// 检测源: static
