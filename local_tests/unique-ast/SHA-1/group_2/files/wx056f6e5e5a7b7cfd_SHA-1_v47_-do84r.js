/**
 * SHA-1 算法实现
 * App ID: wx056f6e5e5a7b7cfd
 * 版本: v47
 * 代码哈希: -do84rs
 * 来源文件: output/wx056f6e5e5a7b7cfd/common/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.98
 * 函数名: anonymous
 * 行数: 33
 * 生成时间: 2025-07-05T13:17:10.840Z
 */

l.extend({
                    _doReset: function() {
                        this._hash = f.create([ 1732584193, 4023233417, 2562383102, 271733878, 3285377520 ]);
                    },
                    _doProcessBlock: function(t, e) {
                        for (var c = 0; c < 16; c++) {
                            var u = e + c, f = t[u];
                            t[u] = 16711935 & (f << 8 | f >>> 24) | 4278255360 & (f << 24 | f >>> 8);
                        }
                        var l, h, m, b, w, x, k, A, S, O, $, E = this._hash.words, B = _.words, C = g.words, j = p.words, P = d.words, M = v.words, D = y.words;
                        for (x = l = E[0], k = h = E[1], A = m = E[2], S = b = E[3], O = w = E[4], c = 0; c < 80; c += 1) $ = l + t[e + j[c]] | 0, 
                        $ += c < 16 ? n(h, m, b) + B[0] : c < 32 ? r(h, m, b) + B[1] : c < 48 ? o(h, m, b) + B[2] : c < 64 ? i(h, m, b) + B[3] : a(h, m, b) + B[4], 
                        $ = ($ = s($ |= 0, M[c])) + w | 0, l = w, w = b, b = s(m, 10), m = h, h = $, $ = x + t[e + P[c]] | 0, 
                        $ += c < 16 ? a(k, A, S) + C[0] : c < 32 ? i(k, A, S) + C[1] : c < 48 ? o(k, A, S) + C[2] : c < 64 ? r(k, A, S) + C[3] : n(k, A, S) + C[4], 
                        $ = ($ = s($ |= 0, D[c])) + O | 0, x = O, O = S, S = s(A, 10), A = k, k = $;
                        $ = E[1] + m + S | 0, E[1] = E[2] + b + O | 0, E[2] = E[3] + w + x | 0, E[3] = E[4] + l + k | 0, 
                        E[4] = E[0] + h + A | 0, E[0] = $;
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
                        var t = l.clone.call(this);
                        return t._hash = this._hash.clone(), t;
                    }
                })

// ==================== 元数据 ====================
// 此文件包含从 wx056f6e5e5a7b7cfd 提取的 SHA-1 算法实现
// 检测位置: 行 4245-4245
// 变量名: ___
// 检测源: static
