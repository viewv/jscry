/**
 * MD5 算法实现
 * App ID: wx00e15cd48026c2de
 * 版本: v4
 * 代码哈希: dlgyyl
 * 来源文件: output/wx00e15cd48026c2de/common/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.95
 * 函数名: anonymous
 * 行数: 29
 * 生成时间: 2025-07-05T13:17:10.748Z
 */

u.extend({
                _doReset: function() {
                    this._hash = new c.init([ 1732584193, 4023233417, 2562383102, 271733878 ]);
                },
                _doProcessBlock: function(t, r) {
                    for (var a = 0; 16 > a; a++) {
                        var s = r + a, c = t[s];
                        t[s] = 16711935 & (c << 8 | c >>> 24) | 4278255360 & (c << 24 | c >>> 8);
                    }
                    a = this._hash.words, s = t[r + 0], c = t[r + 1];
                    var u = t[r + 2], l = t[r + 3], h = t[r + 4], p = t[r + 5], d = t[r + 6], v = t[r + 7], y = t[r + 8], _ = t[r + 9], g = t[r + 10], m = t[r + 11], b = t[r + 12], A = t[r + 13], w = t[r + 14], O = t[r + 15], x = a[0], S = a[1], $ = a[2], C = a[3];
                    S = o(S = o(S = o(S = o(S = i(S = i(S = i(S = i(S = n(S = n(S = n(S = n(S = e(S = e(S = e(S = e(S, $ = e($, C = e(C, x = e(x, S, $, C, s, 7, f[0]), S, $, c, 12, f[1]), x, S, u, 17, f[2]), C, x, l, 22, f[3]), $ = e($, C = e(C, x = e(x, S, $, C, h, 7, f[4]), S, $, p, 12, f[5]), x, S, d, 17, f[6]), C, x, v, 22, f[7]), $ = e($, C = e(C, x = e(x, S, $, C, y, 7, f[8]), S, $, _, 12, f[9]), x, S, g, 17, f[10]), C, x, m, 22, f[11]), $ = e($, C = e(C, x = e(x, S, $, C, b, 7, f[12]), S, $, A, 12, f[13]), x, S, w, 17, f[14]), C, x, O, 22, f[15]), $ = n($, C = n(C, x = n(x, S, $, C, c, 5, f[16]), S, $, d, 9, f[17]), x, S, m, 14, f[18]), C, x, s, 20, f[19]), $ = n($, C = n(C, x = n(x, S, $, C, p, 5, f[20]), S, $, g, 9, f[21]), x, S, O, 14, f[22]), C, x, h, 20, f[23]), $ = n($, C = n(C, x = n(x, S, $, C, _, 5, f[24]), S, $, w, 9, f[25]), x, S, l, 14, f[26]), C, x, y, 20, f[27]), $ = n($, C = n(C, x = n(x, S, $, C, A, 5, f[28]), S, $, u, 9, f[29]), x, S, v, 14, f[30]), C, x, b, 20, f[31]), $ = i($, C = i(C, x = i(x, S, $, C, p, 4, f[32]), S, $, y, 11, f[33]), x, S, m, 16, f[34]), C, x, w, 23, f[35]), $ = i($, C = i(C, x = i(x, S, $, C, c, 4, f[36]), S, $, h, 11, f[37]), x, S, v, 16, f[38]), C, x, g, 23, f[39]), $ = i($, C = i(C, x = i(x, S, $, C, A, 4, f[40]), S, $, s, 11, f[41]), x, S, l, 16, f[42]), C, x, d, 23, f[43]), $ = i($, C = i(C, x = i(x, S, $, C, _, 4, f[44]), S, $, b, 11, f[45]), x, S, O, 16, f[46]), C, x, u, 23, f[47]), $ = o($, C = o(C, x = o(x, S, $, C, s, 6, f[48]), S, $, v, 10, f[49]), x, S, w, 15, f[50]), C, x, p, 21, f[51]), $ = o($, C = o(C, x = o(x, S, $, C, b, 6, f[52]), S, $, l, 10, f[53]), x, S, g, 15, f[54]), C, x, c, 21, f[55]), $ = o($, C = o(C, x = o(x, S, $, C, y, 6, f[56]), S, $, O, 10, f[57]), x, S, d, 15, f[58]), C, x, A, 21, f[59]), $ = o($, C = o(C, x = o(x, S, $, C, h, 6, f[60]), S, $, m, 10, f[61]), x, S, u, 15, f[62]), C, x, _, 21, f[63]), 
                    a[0] = a[0] + x | 0, a[1] = a[1] + S | 0, a[2] = a[2] + $ | 0, a[3] = a[3] + C | 0;
                },
                _doFinalize: function() {
                    var e = this._data, n = e.words, r = 8 * this._nDataBytes, i = 8 * e.sigBytes;
                    n[i >>> 5] |= 128 << 24 - i % 32;
                    var o = t.floor(r / 4294967296);
                    for (n[15 + (i + 64 >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), 
                    n[14 + (i + 64 >>> 9 << 4)] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8), 
                    e.sigBytes = 4 * (n.length + 1), this._process(), n = (e = this._hash).words, r = 0; 4 > r; r++) i = n[r], 
                    n[r] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8);
                    return e;
                },
                clone: function() {
                    var t = u.clone.call(this);
                    return t._hash = this._hash.clone(), t;
                }
            })

// ==================== 元数据 ====================
// 此文件包含从 wx00e15cd48026c2de 提取的 MD5 算法实现
// 检测位置: 行 1206-1206
// 变量名: ___
// 检测源: static
