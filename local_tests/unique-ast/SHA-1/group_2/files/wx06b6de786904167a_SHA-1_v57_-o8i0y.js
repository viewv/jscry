/**
 * SHA-1 算法实现
 * App ID: wx06b6de786904167a
 * 版本: v57
 * 代码哈希: -o8i0ya
 * 来源文件: output/wx06b6de786904167a/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.98
 * 函数名: anonymous
 * 行数: 33
 * 生成时间: 2025-07-05T13:17:10.844Z
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
                        var d, f, b, _, A, w, x, S, k, O, C, P = this._hash.words, E = m.words, T = y.words, I = p.words, R = h.words, D = v.words, j = g.words;
                        for (w = d = P[0], x = f = P[1], S = b = P[2], k = _ = P[3], O = A = P[4], c = 0; c < 80; c += 1) C = d + t[e + I[c]] | 0, 
                        C += c < 16 ? n(f, b, _) + E[0] : c < 32 ? r(f, b, _) + E[1] : c < 48 ? o(f, b, _) + E[2] : c < 64 ? i(f, b, _) + E[3] : a(f, b, _) + E[4], 
                        C = (C = s(C |= 0, D[c])) + A | 0, d = A, A = _, _ = s(b, 10), b = f, f = C, C = w + t[e + R[c]] | 0, 
                        C += c < 16 ? a(x, S, k) + T[0] : c < 32 ? i(x, S, k) + T[1] : c < 48 ? o(x, S, k) + T[2] : c < 64 ? r(x, S, k) + T[3] : n(x, S, k) + T[4], 
                        C = (C = s(C |= 0, j[c])) + O | 0, w = O, O = k, k = s(S, 10), S = x, x = C;
                        C = P[1] + b + k | 0, P[1] = P[2] + _ + O | 0, P[2] = P[3] + A + w | 0, P[3] = P[4] + d + x | 0, 
                        P[4] = P[0] + f + S | 0, P[0] = C;
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
// 此文件包含从 wx06b6de786904167a 提取的 SHA-1 算法实现
// 检测位置: 行 8779-8779
// 变量名: ___
// 检测源: static
