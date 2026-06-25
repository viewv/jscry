/**
 * SHA-1 算法实现
 * App ID: wx0526b0432a899356
 * 版本: v40
 * 代码哈希: shnv5m
 * 来源文件: output/wx0526b0432a899356/common/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.98
 * 函数名: anonymous
 * 行数: 33
 * 生成时间: 2025-07-05T13:17:10.838Z
 */

i.extend({
                    _doReset: function() {
                        this._hash = n.create([ 1732584193, 4023233417, 2562383102, 271733878, 3285377520 ]);
                    },
                    _doProcessBlock: function(t, e) {
                        for (var r = 0; r < 16; r++) {
                            var n = e + r, i = t[n];
                            t[n] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8);
                        }
                        var o, a, s, c, f, u, h, d, l, p, b, v = this._hash.words, g = M.words, y = C.words, m = S.words, _ = A.words, w = k.words, x = E.words;
                        for (u = o = v[0], h = a = v[1], d = s = v[2], l = c = v[3], p = f = v[4], r = 0; r < 80; r += 1) b = o + t[e + m[r]] | 0, 
                        b += r < 16 ? O(a, s, c) + g[0] : r < 32 ? B(a, s, c) + g[1] : r < 48 ? I(a, s, c) + g[2] : r < 64 ? j(a, s, c) + g[3] : N(a, s, c) + g[4], 
                        b = (b = T(b |= 0, w[r])) + f | 0, o = f, f = c, c = T(s, 10), s = a, a = b, b = u + t[e + _[r]] | 0, 
                        b += r < 16 ? N(h, d, l) + y[0] : r < 32 ? j(h, d, l) + y[1] : r < 48 ? I(h, d, l) + y[2] : r < 64 ? B(h, d, l) + y[3] : O(h, d, l) + y[4], 
                        b = (b = T(b |= 0, x[r])) + p | 0, u = p, p = l, l = T(d, 10), d = h, h = b;
                        b = v[1] + s + l | 0, v[1] = v[2] + c + p | 0, v[2] = v[3] + f + u | 0, v[3] = v[4] + o + h | 0, 
                        v[4] = v[0] + a + d | 0, v[0] = b;
                    },
                    _doFinalize: function() {
                        var t = this._data, e = t.words, r = 8 * this._nDataBytes, n = 8 * t.sigBytes;
                        e[n >>> 5] |= 128 << 24 - n % 32, e[14 + (n + 64 >>> 9 << 4)] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8), 
                        t.sigBytes = 4 * (e.length + 1), this._process();
                        for (var i = this._hash, o = i.words, a = 0; a < 5; a++) {
                            var s = o[a];
                            o[a] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8);
                        }
                        return i;
                    },
                    clone: function() {
                        var t = i.clone.call(this);
                        return t._hash = this._hash.clone(), t;
                    }
                })

// ==================== 元数据 ====================
// 此文件包含从 wx0526b0432a899356 提取的 SHA-1 算法实现
// 检测位置: 行 10650-10650
// 变量名: ___
// 检测源: static
