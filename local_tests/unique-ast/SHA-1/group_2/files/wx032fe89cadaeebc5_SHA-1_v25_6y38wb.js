/**
 * SHA-1 算法实现
 * App ID: wx032fe89cadaeebc5
 * 版本: v25
 * 代码哈希: 6y38wb
 * 来源文件: output/wx032fe89cadaeebc5/common/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.98
 * 函数名: anonymous
 * 行数: 35
 * 生成时间: 2025-07-05T13:17:10.833Z
 */

o.extend({
                    _doReset: function _doReset() {
                        this._hash = i.create([ 1732584193, 4023233417, 2562383102, 271733878, 3285377520 ]);
                    },
                    _doProcessBlock: function _doProcessBlock(t, e) {
                        for (var n = 0; n < 16; n++) {
                            var r = e + n, i = t[r];
                            t[r] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8);
                        }
                        var o, a, h, b, w, S, k, x, O, A, $, B = this._hash.words, P = l.words, T = p.words, j = s.words, C = c.words, D = u.words, E = f.words;
                        S = o = B[0], k = a = B[1], x = h = B[2], O = b = B[3], A = w = B[4];
                        for (n = 0; n < 80; n += 1) {
                            $ = o + t[e + j[n]] | 0, $ += n < 16 ? d(a, h, b) + P[0] : n < 32 ? v(a, h, b) + P[1] : n < 48 ? g(a, h, b) + P[2] : n < 64 ? _(a, h, b) + P[3] : y(a, h, b) + P[4], 
                            $ |= 0, $ = m($, D[n]), $ = $ + w | 0, o = w, w = b, b = m(h, 10), h = a, a = $, 
                            $ = S + t[e + C[n]] | 0, $ += n < 16 ? y(k, x, O) + T[0] : n < 32 ? _(k, x, O) + T[1] : n < 48 ? g(k, x, O) + T[2] : n < 64 ? v(k, x, O) + T[3] : d(k, x, O) + T[4], 
                            $ |= 0, $ = m($, E[n]), $ = $ + A | 0, S = A, A = O, O = m(x, 10), x = k, k = $;
                        }
                        $ = B[1] + h + O | 0, B[1] = B[2] + b + A | 0, B[2] = B[3] + w + S | 0, B[3] = B[4] + o + k | 0, 
                        B[4] = B[0] + a + x | 0, B[0] = $;
                    },
                    _doFinalize: function _doFinalize() {
                        var t = this._data, e = t.words, n = 8 * this._nDataBytes, r = 8 * t.sigBytes;
                        e[r >>> 5] |= 128 << 24 - r % 32, e[14 + (r + 64 >>> 9 << 4)] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8), 
                        t.sigBytes = 4 * (e.length + 1), this._process();
                        for (var i = this._hash, o = i.words, a = 0; a < 5; a++) {
                            var s = o[a];
                            o[a] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8);
                        }
                        return i;
                    },
                    clone: function clone() {
                        var t = o.clone.call(this);
                        return t._hash = this._hash.clone(), t;
                    }
                })

// ==================== 元数据 ====================
// 此文件包含从 wx032fe89cadaeebc5 提取的 SHA-1 算法实现
// 检测位置: 行 443-443
// 变量名: ___
// 检测源: static
