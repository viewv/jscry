/**
 * SHA-1 算法实现
 * App ID: wx0a8a5be3869df5e5
 * 版本: v69
 * 代码哈希: -eeruc2
 * 来源文件: output/wx0a8a5be3869df5e5/common/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.98
 * 函数名: anonymous
 * 行数: 33
 * 生成时间: 2025-07-05T13:17:10.848Z
 */

o.extend({
                        _doReset: function() {
                            this._hash = n.create([ 1732584193, 4023233417, 2562383102, 271733878, 3285377520 ]);
                        },
                        _doProcessBlock: function(t, e) {
                            for (var a = 0; a < 16; a++) {
                                var r = e + a, n = t[r];
                                t[r] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8);
                            }
                            var o, i, l, w, _, $, k, T, x, A, M, j = this._hash.words, S = f.words, C = d.words, P = s.words, E = c.words, D = p.words, B = u.words;
                            $ = o = j[0], k = i = j[1], T = l = j[2], x = w = j[3], A = _ = j[4];
                            for (a = 0; a < 80; a += 1) M = o + t[e + P[a]] | 0, M += a < 16 ? h(i, l, w) + S[0] : a < 32 ? y(i, l, w) + S[1] : a < 48 ? g(i, l, w) + S[2] : a < 64 ? v(i, l, w) + S[3] : m(i, l, w) + S[4], 
                            M = (M = b(M |= 0, D[a])) + _ | 0, o = _, _ = w, w = b(l, 10), l = i, i = M, M = $ + t[e + E[a]] | 0, 
                            M += a < 16 ? m(k, T, x) + C[0] : a < 32 ? v(k, T, x) + C[1] : a < 48 ? g(k, T, x) + C[2] : a < 64 ? y(k, T, x) + C[3] : h(k, T, x) + C[4], 
                            M = (M = b(M |= 0, B[a])) + A | 0, $ = A, A = x, x = b(T, 10), T = k, k = M;
                            M = j[1] + l + x | 0, j[1] = j[2] + w + A | 0, j[2] = j[3] + _ + $ | 0, j[3] = j[4] + o + k | 0, 
                            j[4] = j[0] + i + T | 0, j[0] = M;
                        },
                        _doFinalize: function() {
                            var t = this._data, e = t.words, a = 8 * this._nDataBytes, r = 8 * t.sigBytes;
                            e[r >>> 5] |= 128 << 24 - r % 32, e[14 + (r + 64 >>> 9 << 4)] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8), 
                            t.sigBytes = 4 * (e.length + 1), this._process();
                            for (var n = this._hash, o = n.words, i = 0; i < 5; i++) {
                                var s = o[i];
                                o[i] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8);
                            }
                            return n;
                        },
                        clone: function() {
                            var t = o.clone.call(this);
                            return t._hash = this._hash.clone(), t;
                        }
                    })

// ==================== 元数据 ====================
// 此文件包含从 wx0a8a5be3869df5e5 提取的 SHA-1 算法实现
// 检测位置: 行 22703-22703
// 变量名: ___
// 检测源: static
