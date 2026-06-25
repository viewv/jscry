/**
 * SHA-1 算法实现
 * App ID: wx05ff3e6933129cb4
 * 版本: v50
 * 代码哈希: a1c322
 * 来源文件: output/wx05ff3e6933129cb4/common/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.98
 * 函数名: anonymous
 * 行数: 33
 * 生成时间: 2025-07-05T13:17:10.841Z
 */

f.extend({
                    _doReset: function() {
                        this._hash = l.create([ 1732584193, 4023233417, 2562383102, 271733878, 3285377520 ]);
                    },
                    _doProcessBlock: function(t, e) {
                        for (var c = 0; c < 16; c++) {
                            var u = e + c, l = t[u];
                            t[u] = 16711935 & (l << 8 | l >>> 24) | 4278255360 & (l << 24 | l >>> 8);
                        }
                        var f, h, _, b, w, S, k, x, O, A, C, T = this._hash.words, I = y.words, P = m.words, D = d.words, $ = p.words, E = g.words, M = v.words;
                        for (S = f = T[0], k = h = T[1], x = _ = T[2], O = b = T[3], A = w = T[4], c = 0; c < 80; c += 1) C = f + t[e + D[c]] | 0, 
                        C += c < 16 ? n(h, _, b) + I[0] : c < 32 ? r(h, _, b) + I[1] : c < 48 ? i(h, _, b) + I[2] : c < 64 ? o(h, _, b) + I[3] : a(h, _, b) + I[4], 
                        C = (C = s(C |= 0, E[c])) + w | 0, f = w, w = b, b = s(_, 10), _ = h, h = C, C = S + t[e + $[c]] | 0, 
                        C += c < 16 ? a(k, x, O) + P[0] : c < 32 ? o(k, x, O) + P[1] : c < 48 ? i(k, x, O) + P[2] : c < 64 ? r(k, x, O) + P[3] : n(k, x, O) + P[4], 
                        C = (C = s(C |= 0, M[c])) + A | 0, S = A, A = O, O = s(x, 10), x = k, k = C;
                        C = T[1] + _ + O | 0, T[1] = T[2] + b + A | 0, T[2] = T[3] + w + S | 0, T[3] = T[4] + f + k | 0, 
                        T[4] = T[0] + h + x | 0, T[0] = C;
                    },
                    _doFinalize: function() {
                        var t = this._data, e = t.words, n = 8 * this._nDataBytes, r = 8 * t.sigBytes;
                        e[r >>> 5] |= 128 << 24 - r % 32, e[14 + (r + 64 >>> 9 << 4)] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8), 
                        t.sigBytes = 4 * (e.length + 1), this._process();
                        for (var i = this._hash, o = i.words, a = 0; a < 5; a++) {
                            var s = o[a];
                            o[a] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8);
                        }
                        return i;
                    },
                    clone: function() {
                        var t = f.clone.call(this);
                        return t._hash = this._hash.clone(), t;
                    }
                })

// ==================== 元数据 ====================
// 此文件包含从 wx05ff3e6933129cb4 提取的 SHA-1 算法实现
// 检测位置: 行 3468-3468
// 变量名: ___
// 检测源: static
