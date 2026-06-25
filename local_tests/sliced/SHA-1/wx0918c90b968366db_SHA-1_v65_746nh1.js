/**
 * SHA-1 算法实现
 * App ID: wx0918c90b968366db
 * 版本: v65
 * 代码哈希: 746nh1
 * 来源文件: output/wx0918c90b968366db/common/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.98
 * 函数名: anonymous
 * 行数: 36
 * 生成时间: 2025-07-05T13:17:10.847Z
 */

f.extend({
                    _doReset: function _doReset() {
                        this._hash = l.create([ 1732584193, 4023233417, 2562383102, 271733878, 3285377520 ]);
                    },
                    _doProcessBlock: function _doProcessBlock(t, e) {
                        for (var c = 0; c < 16; c++) {
                            var u = e + c, l = t[u];
                            t[u] = 16711935 & (l << 8 | l >>> 24) | 4278255360 & (l << 24 | l >>> 8);
                        }
                        var f, h, g, m, L, y, C, T, _, X, J = this._hash.words, D = Z.words, H = v.words, P = p.words, M = d.words, B = Y.words, Q = S.words;
                        y = f = J[0], C = h = J[1], T = g = J[2], _ = m = J[3], X = L = J[4];
                        var b;
                        for (c = 0; c < 80; c += 1) {
                            b = f + t[e + P[c]] | 0, b += c < 16 ? n(h, g, m) + D[0] : c < 32 ? r(h, g, m) + D[1] : c < 48 ? o(h, g, m) + D[2] : c < 64 ? i(h, g, m) + D[3] : a(h, g, m) + D[4], 
                            b |= 0, b = s(b, B[c]), b = b + L | 0, f = L, L = m, m = s(g, 10), g = h, h = b, 
                            b = y + t[e + M[c]] | 0, b += c < 16 ? a(C, T, _) + H[0] : c < 32 ? i(C, T, _) + H[1] : c < 48 ? o(C, T, _) + H[2] : c < 64 ? r(C, T, _) + H[3] : n(C, T, _) + H[4], 
                            b |= 0, b = s(b, Q[c]), b = b + X | 0, y = X, X = _, _ = s(T, 10), T = C, C = b;
                        }
                        b = J[1] + g + _ | 0, J[1] = J[2] + m + X | 0, J[2] = J[3] + L + y | 0, J[3] = J[4] + f + C | 0, 
                        J[4] = J[0] + h + T | 0, J[0] = b;
                    },
                    _doFinalize: function _doFinalize() {
                        var t = this._data, e = t.words, n = 8 * this._nDataBytes, r = 8 * t.sigBytes;
                        e[r >>> 5] |= 128 << 24 - r % 32, e[14 + (r + 64 >>> 9 << 4)] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8), 
                        t.sigBytes = 4 * (e.length + 1), this._process();
                        for (var o = this._hash, i = o.words, a = 0; a < 5; a++) {
                            var s = i[a];
                            i[a] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8);
                        }
                        return o;
                    },
                    clone: function clone() {
                        var t = f.clone.call(this);
                        return t._hash = this._hash.clone(), t;
                    }
                })

// ==================== 元数据 ====================
// 此文件包含从 wx0918c90b968366db 提取的 SHA-1 算法实现
// 检测位置: 行 8185-8185
// 变量名: ___
// 检测源: static
