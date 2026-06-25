/**
 * SHA-1 算法实现
 * App ID: wx02b98b8ae5513413
 * 版本: v19
 * 代码哈希: -iegulq
 * 来源文件: output/wx02b98b8ae5513413/common/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.98
 * 函数名: anonymous
 * 行数: 33
 * 生成时间: 2025-07-05T13:17:10.831Z
 */

i.extend({
                    _doReset: function() {
                        this._hash = n.create([ 1732584193, 4023233417, 2562383102, 271733878, 3285377520 ]);
                    },
                    _doProcessBlock: function(e, t) {
                        for (var a = 0; a < 16; a++) {
                            var r = t + a, n = e[r];
                            e[r] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8);
                        }
                        var i, l, h, g, M, w, L, k, Y, S, D, T = this._hash.words, x = c.words, j = f.words, A = s.words, E = o.words, O = u.words, H = d.words;
                        w = i = T[0], L = l = T[1], k = h = T[2], Y = g = T[3], S = M = T[4];
                        for (a = 0; a < 80; a += 1) D = i + e[t + A[a]] | 0, D += a < 16 ? b(l, h, g) + x[0] : a < 32 ? _(l, h, g) + x[1] : a < 48 ? v(l, h, g) + x[2] : a < 64 ? p(l, h, g) + x[3] : m(l, h, g) + x[4], 
                        D |= 0, D = y(D, O[a]), D = D + M | 0, i = M, M = g, g = y(h, 10), h = l, l = D, 
                        D = w + e[t + E[a]] | 0, D += a < 16 ? m(L, k, Y) + j[0] : a < 32 ? p(L, k, Y) + j[1] : a < 48 ? v(L, k, Y) + j[2] : a < 64 ? _(L, k, Y) + j[3] : b(L, k, Y) + j[4], 
                        D |= 0, D = y(D, H[a]), D = D + S | 0, w = S, S = Y, Y = y(k, 10), k = L, L = D;
                        D = T[1] + h + Y | 0, T[1] = T[2] + g + S | 0, T[2] = T[3] + M + w | 0, T[3] = T[4] + i + L | 0, 
                        T[4] = T[0] + l + k | 0, T[0] = D;
                    },
                    _doFinalize: function() {
                        var e = this._data, t = e.words, a = 8 * this._nDataBytes, r = 8 * e.sigBytes;
                        t[r >>> 5] |= 128 << 24 - r % 32, t[14 + (r + 64 >>> 9 << 4)] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8), 
                        e.sigBytes = 4 * (t.length + 1), this._process();
                        for (var n = this._hash, i = n.words, l = 0; l < 5; l++) {
                            var s = i[l];
                            i[l] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8);
                        }
                        return n;
                    },
                    clone: function() {
                        var e = i.clone.call(this);
                        return e._hash = this._hash.clone(), e;
                    }
                })

// ==================== 元数据 ====================
// 此文件包含从 wx02b98b8ae5513413 提取的 SHA-1 算法实现
// 检测位置: 行 31098-31098
// 变量名: ___
// 检测源: static
