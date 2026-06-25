/**
 * SHA-1 算法实现
 * App ID: wx084dc96bc462831d
 * 版本: v62
 * 代码哈希: ijrtj
 * 来源文件: output/wx084dc96bc462831d/common/main.js
 * 检测类型: Initial hash values
 * 置信度: 0.98
 * 函数名: anonymous
 * 行数: 33
 * 生成时间: 2025-07-05T13:17:10.845Z
 */

p.extend({
                    _doReset: function() {
                        this._hash = l.create([ 1732584193, 4023233417, 2562383102, 271733878, 3285377520 ]);
                    },
                    _doProcessBlock: function(e, t) {
                        for (E = 0; E < 16; E++) {
                            var c = t + E, u = e[c];
                            e[c] = 16711935 & (u << 8 | u >>> 24) | 4278255360 & (u << 24 | u >>> 8);
                        }
                        var l, p, d, y, v, j, B, k, U, C, w = this._hash.words, x = _.words, D = g.words, L = f.words, W = h.words, S = m.words, Z = b.words;
                        j = l = w[0], B = p = w[1], k = d = w[2], U = y = w[3], C = v = w[4];
                        for (var A, E = 0; E < 80; E += 1) A = l + e[t + L[E]] | 0, A += E < 16 ? o(p, d, y) + x[0] : E < 32 ? n(p, d, y) + x[1] : E < 48 ? r(p, d, y) + x[2] : E < 64 ? i(p, d, y) + x[3] : s(p, d, y) + x[4], 
                        A = (A = a(A |= 0, S[E])) + v | 0, l = v, v = y, y = a(d, 10), d = p, p = A, A = j + e[t + W[E]] | 0, 
                        A += E < 16 ? s(B, k, U) + D[0] : E < 32 ? i(B, k, U) + D[1] : E < 48 ? r(B, k, U) + D[2] : E < 64 ? n(B, k, U) + D[3] : o(B, k, U) + D[4], 
                        A = (A = a(A |= 0, Z[E])) + C | 0, j = C, C = U, U = a(k, 10), k = B, B = A;
                        A = w[1] + d + U | 0, w[1] = w[2] + y + C | 0, w[2] = w[3] + v + j | 0, w[3] = w[4] + l + B | 0, 
                        w[4] = w[0] + p + k | 0, w[0] = A;
                    },
                    _doFinalize: function() {
                        var e = this._data, t = e.words, o = 8 * this._nDataBytes, n = 8 * e.sigBytes;
                        t[n >>> 5] |= 128 << 24 - n % 32, t[14 + (n + 64 >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), 
                        e.sigBytes = 4 * (t.length + 1), this._process();
                        for (var r = this._hash, i = r.words, s = 0; s < 5; s++) {
                            var a = i[s];
                            i[s] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8);
                        }
                        return r;
                    },
                    clone: function() {
                        var e = p.clone.call(this);
                        return e._hash = this._hash.clone(), e;
                    }
                })

// ==================== 元数据 ====================
// 此文件包含从 wx084dc96bc462831d 提取的 SHA-1 算法实现
// 检测位置: 行 1613-1613
// 变量名: ___
// 检测源: static
