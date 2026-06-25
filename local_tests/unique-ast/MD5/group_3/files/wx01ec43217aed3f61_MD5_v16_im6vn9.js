/**
 * MD5 算法实现
 * App ID: wx01ec43217aed3f61
 * 版本: v16
 * 代码哈希: im6vn9
 * 来源文件: output/wx01ec43217aed3f61/common/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.95
 * 函数名: anonymous
 * 行数: 49
 * 生成时间: 2025-07-05T13:17:10.761Z
 */

u.extend({
                _doReset: function() {
                    this._hash = new c.init([ 1732584193, 4023233417, 2562383102, 271733878 ]);
                },
                _doProcessBlock: function(t, n) {
                    for (var a = 0; 16 > a; a++) {
                        var s = n + a, c = t[s];
                        t[s] = 16711935 & (c << 8 | c >>> 24) | 4278255360 & (c << 24 | c >>> 8);
                    }
                    a = this._hash.words, s = t[n + 0], c = t[n + 1];
                    var u = t[n + 2], l = t[n + 3], h = t[n + 4], p = t[n + 5], d = t[n + 6], v = t[n + 7], y = t[n + 8], _ = t[n + 9], g = t[n + 10], m = t[n + 11], b = t[n + 12], w = t[n + 13], A = t[n + 14], O = t[n + 15], x = a[0], S = a[1], $ = a[2], C = a[3];
                    x = e(x, S, $, C, s, 7, f[0]), C = e(C, x, S, $, c, 12, f[1]), $ = e($, C, x, S, u, 17, f[2]), 
                    S = e(S, $, C, x, l, 22, f[3]), x = e(x, S, $, C, h, 7, f[4]), C = e(C, x, S, $, p, 12, f[5]), 
                    $ = e($, C, x, S, d, 17, f[6]), S = e(S, $, C, x, v, 22, f[7]), x = e(x, S, $, C, y, 7, f[8]), 
                    C = e(C, x, S, $, _, 12, f[9]), $ = e($, C, x, S, g, 17, f[10]), S = e(S, $, C, x, m, 22, f[11]), 
                    x = e(x, S, $, C, b, 7, f[12]), C = e(C, x, S, $, w, 12, f[13]), $ = e($, C, x, S, A, 17, f[14]), 
                    x = r(x, S = e(S, $, C, x, O, 22, f[15]), $, C, c, 5, f[16]), C = r(C, x, S, $, d, 9, f[17]), 
                    $ = r($, C, x, S, m, 14, f[18]), S = r(S, $, C, x, s, 20, f[19]), x = r(x, S, $, C, p, 5, f[20]), 
                    C = r(C, x, S, $, g, 9, f[21]), $ = r($, C, x, S, O, 14, f[22]), S = r(S, $, C, x, h, 20, f[23]), 
                    x = r(x, S, $, C, _, 5, f[24]), C = r(C, x, S, $, A, 9, f[25]), $ = r($, C, x, S, l, 14, f[26]), 
                    S = r(S, $, C, x, y, 20, f[27]), x = r(x, S, $, C, w, 5, f[28]), C = r(C, x, S, $, u, 9, f[29]), 
                    $ = r($, C, x, S, v, 14, f[30]), x = i(x, S = r(S, $, C, x, b, 20, f[31]), $, C, p, 4, f[32]), 
                    C = i(C, x, S, $, y, 11, f[33]), $ = i($, C, x, S, m, 16, f[34]), S = i(S, $, C, x, A, 23, f[35]), 
                    x = i(x, S, $, C, c, 4, f[36]), C = i(C, x, S, $, h, 11, f[37]), $ = i($, C, x, S, v, 16, f[38]), 
                    S = i(S, $, C, x, g, 23, f[39]), x = i(x, S, $, C, w, 4, f[40]), C = i(C, x, S, $, s, 11, f[41]), 
                    $ = i($, C, x, S, l, 16, f[42]), S = i(S, $, C, x, d, 23, f[43]), x = i(x, S, $, C, _, 4, f[44]), 
                    C = i(C, x, S, $, b, 11, f[45]), $ = i($, C, x, S, O, 16, f[46]), x = o(x, S = i(S, $, C, x, u, 23, f[47]), $, C, s, 6, f[48]), 
                    C = o(C, x, S, $, v, 10, f[49]), $ = o($, C, x, S, A, 15, f[50]), S = o(S, $, C, x, p, 21, f[51]), 
                    x = o(x, S, $, C, b, 6, f[52]), C = o(C, x, S, $, l, 10, f[53]), $ = o($, C, x, S, g, 15, f[54]), 
                    S = o(S, $, C, x, c, 21, f[55]), x = o(x, S, $, C, y, 6, f[56]), C = o(C, x, S, $, O, 10, f[57]), 
                    $ = o($, C, x, S, d, 15, f[58]), S = o(S, $, C, x, w, 21, f[59]), x = o(x, S, $, C, h, 6, f[60]), 
                    C = o(C, x, S, $, m, 10, f[61]), $ = o($, C, x, S, u, 15, f[62]), S = o(S, $, C, x, _, 21, f[63]), 
                    a[0] = a[0] + x | 0, a[1] = a[1] + S | 0, a[2] = a[2] + $ | 0, a[3] = a[3] + C | 0;
                },
                _doFinalize: function() {
                    var e = this._data, r = e.words, n = 8 * this._nDataBytes, i = 8 * e.sigBytes;
                    r[i >>> 5] |= 128 << 24 - i % 32;
                    var o = t.floor(n / 4294967296);
                    for (r[15 + (i + 64 >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), 
                    r[14 + (i + 64 >>> 9 << 4)] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8), 
                    e.sigBytes = 4 * (r.length + 1), this._process(), r = (e = this._hash).words, n = 0; 4 > n; n++) i = r[n], 
                    r[n] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8);
                    return e;
                },
                clone: function() {
                    var t = u.clone.call(this);
                    return t._hash = this._hash.clone(), t;
                }
            })

// ==================== 元数据 ====================
// 此文件包含从 wx01ec43217aed3f61 提取的 MD5 算法实现
// 检测位置: 行 3963-3963
// 变量名: ___
// 检测源: static
