/**
 * SHA-1 算法实现
 * App ID: wx0535b07817d80042
 * 版本: v43
 * 代码哈希: -wdjxpc
 * 来源文件: output/wx0535b07817d80042/common/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.98
 * 函数名: anonymous
 * 行数: 33
 * 生成时间: 2025-07-05T13:17:10.838Z
 */

o.extend({
                _doReset: function() {
                    this._hash = n.create([ 1732584193, 4023233417, 2562383102, 271733878, 3285377520 ]);
                },
                _doProcessBlock: function(t, e) {
                    for (var r = 0; r < 16; r++) {
                        var n = e + r, o = t[n];
                        t[n] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8);
                    }
                    var i, a, s, c, u, f, l, p, h, d, v, y = this._hash.words, _ = S.words, g = B.words, m = x.words, b = A.words, w = $.words, k = O.words;
                    for (f = i = y[0], l = a = y[1], p = s = y[2], h = c = y[3], d = u = y[4], r = 0; r < 80; r += 1) v = i + t[e + m[r]] | 0, 
                    v += r < 16 ? C(a, s, c) + _[0] : r < 32 ? j(a, s, c) + _[1] : r < 48 ? E(a, s, c) + _[2] : r < 64 ? P(a, s, c) + _[3] : D(a, s, c) + _[4], 
                    v = (v = M(v |= 0, w[r])) + u | 0, i = u, u = c, c = M(s, 10), s = a, a = v, v = f + t[e + b[r]] | 0, 
                    v += r < 16 ? D(l, p, h) + g[0] : r < 32 ? P(l, p, h) + g[1] : r < 48 ? E(l, p, h) + g[2] : r < 64 ? j(l, p, h) + g[3] : C(l, p, h) + g[4], 
                    v = (v = M(v |= 0, k[r])) + d | 0, f = d, d = h, h = M(p, 10), p = l, l = v;
                    v = y[1] + s + h | 0, y[1] = y[2] + c + d | 0, y[2] = y[3] + u + f | 0, y[3] = y[4] + i + l | 0, 
                    y[4] = y[0] + a + p | 0, y[0] = v;
                },
                _doFinalize: function() {
                    var t = this._data, e = t.words, r = 8 * this._nDataBytes, n = 8 * t.sigBytes;
                    e[n >>> 5] |= 128 << 24 - n % 32, e[14 + (n + 64 >>> 9 << 4)] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8), 
                    t.sigBytes = 4 * (e.length + 1), this._process();
                    for (var o = this._hash, i = o.words, a = 0; a < 5; a++) {
                        var s = i[a];
                        i[a] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8);
                    }
                    return o;
                },
                clone: function() {
                    var t = o.clone.call(this);
                    return t._hash = this._hash.clone(), t;
                }
            })

// ==================== 元数据 ====================
// 此文件包含从 wx0535b07817d80042 提取的 SHA-1 算法实现
// 检测位置: 行 3404-3404
// 变量名: ___
// 检测源: static
