/**
 * SHA-1 算法实现
 * App ID: wx0acaace3d32b6939
 * 版本: v71
 * 代码哈希: j3qkrt
 * 来源文件: output/wx0acaace3d32b6939/common/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.98
 * 函数名: anonymous
 * 行数: 34
 * 生成时间: 2025-07-05T13:17:10.849Z
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
                        var l, h, m, b, w, $, S, x, k, O, A = this._hash.words, C = _.words, M = g.words, P = d.words, B = p.words, j = v.words, E = y.words;
                        $ = l = A[0], S = h = A[1], x = m = A[2], k = b = A[3], O = w = A[4];
                        var D;
                        for (c = 0; c < 80; c += 1) D = l + t[e + P[c]] | 0, D += c < 16 ? n(h, m, b) + C[0] : c < 32 ? r(h, m, b) + C[1] : c < 48 ? o(h, m, b) + C[2] : c < 64 ? i(h, m, b) + C[3] : a(h, m, b) + C[4], 
                        D = (D = s(D |= 0, j[c])) + w | 0, l = w, w = b, b = s(m, 10), m = h, h = D, D = $ + t[e + B[c]] | 0, 
                        D += c < 16 ? a(S, x, k) + M[0] : c < 32 ? i(S, x, k) + M[1] : c < 48 ? o(S, x, k) + M[2] : c < 64 ? r(S, x, k) + M[3] : n(S, x, k) + M[4], 
                        D = (D = s(D |= 0, E[c])) + O | 0, $ = O, O = k, k = s(x, 10), x = S, S = D;
                        D = A[1] + m + k | 0, A[1] = A[2] + b + O | 0, A[2] = A[3] + w + $ | 0, A[3] = A[4] + l + S | 0, 
                        A[4] = A[0] + h + x | 0, A[0] = D;
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
// 此文件包含从 wx0acaace3d32b6939 提取的 SHA-1 算法实现
// 检测位置: 行 4113-4113
// 变量名: ___
// 检测源: static
