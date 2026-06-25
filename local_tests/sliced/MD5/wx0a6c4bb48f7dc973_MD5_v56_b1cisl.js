/**
 * MD5 算法实现
 * App ID: wx0a6c4bb48f7dc973
 * 版本: v56
 * 代码哈希: b1cisl
 * 来源文件: output/wx0a6c4bb48f7dc973/common/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.95
 * 函数名: anonymous
 * 行数: 51
 * 生成时间: 2025-07-05T13:17:10.810Z
 */

u.extend({
                _doReset: function _doReset() {
                    this._hash = new c.init([ 1732584193, 4023233417, 2562383102, 271733878 ]);
                },
                _doProcessBlock: function _doProcessBlock(t, n) {
                    for (var a = 0; 16 > a; a++) {
                        var s = n + a, c = t[s];
                        t[s] = 16711935 & (c << 8 | c >>> 24) | 4278255360 & (c << 24 | c >>> 8);
                    }
                    a = this._hash.words, s = t[n + 0], c = t[n + 1];
                    var u = t[n + 2], l = t[n + 3], h = t[n + 4], p = t[n + 5], d = t[n + 6], v = t[n + 7], y = t[n + 8], _ = t[n + 9], g = t[n + 10], m = t[n + 11], b = t[n + 12], w = t[n + 13], A = t[n + 14], O = t[n + 15], x = a[0], S = a[1], $ = a[2], k = a[3];
                    x = e(x, S, $, k, s, 7, f[0]), k = e(k, x, S, $, c, 12, f[1]), $ = e($, k, x, S, u, 17, f[2]), 
                    S = e(S, $, k, x, l, 22, f[3]), x = e(x, S, $, k, h, 7, f[4]), k = e(k, x, S, $, p, 12, f[5]), 
                    $ = e($, k, x, S, d, 17, f[6]), S = e(S, $, k, x, v, 22, f[7]), x = e(x, S, $, k, y, 7, f[8]), 
                    k = e(k, x, S, $, _, 12, f[9]), $ = e($, k, x, S, g, 17, f[10]), S = e(S, $, k, x, m, 22, f[11]), 
                    x = e(x, S, $, k, b, 7, f[12]), k = e(k, x, S, $, w, 12, f[13]), $ = e($, k, x, S, A, 17, f[14]), 
                    S = e(S, $, k, x, O, 22, f[15]), x = r(x, S, $, k, c, 5, f[16]), k = r(k, x, S, $, d, 9, f[17]), 
                    $ = r($, k, x, S, m, 14, f[18]), S = r(S, $, k, x, s, 20, f[19]), x = r(x, S, $, k, p, 5, f[20]), 
                    k = r(k, x, S, $, g, 9, f[21]), $ = r($, k, x, S, O, 14, f[22]), S = r(S, $, k, x, h, 20, f[23]), 
                    x = r(x, S, $, k, _, 5, f[24]), k = r(k, x, S, $, A, 9, f[25]), $ = r($, k, x, S, l, 14, f[26]), 
                    S = r(S, $, k, x, y, 20, f[27]), x = r(x, S, $, k, w, 5, f[28]), k = r(k, x, S, $, u, 9, f[29]), 
                    $ = r($, k, x, S, v, 14, f[30]), S = r(S, $, k, x, b, 20, f[31]), x = i(x, S, $, k, p, 4, f[32]), 
                    k = i(k, x, S, $, y, 11, f[33]), $ = i($, k, x, S, m, 16, f[34]), S = i(S, $, k, x, A, 23, f[35]), 
                    x = i(x, S, $, k, c, 4, f[36]), k = i(k, x, S, $, h, 11, f[37]), $ = i($, k, x, S, v, 16, f[38]), 
                    S = i(S, $, k, x, g, 23, f[39]), x = i(x, S, $, k, w, 4, f[40]), k = i(k, x, S, $, s, 11, f[41]), 
                    $ = i($, k, x, S, l, 16, f[42]), S = i(S, $, k, x, d, 23, f[43]), x = i(x, S, $, k, _, 4, f[44]), 
                    k = i(k, x, S, $, b, 11, f[45]), $ = i($, k, x, S, O, 16, f[46]), S = i(S, $, k, x, u, 23, f[47]), 
                    x = o(x, S, $, k, s, 6, f[48]), k = o(k, x, S, $, v, 10, f[49]), $ = o($, k, x, S, A, 15, f[50]), 
                    S = o(S, $, k, x, p, 21, f[51]), x = o(x, S, $, k, b, 6, f[52]), k = o(k, x, S, $, l, 10, f[53]), 
                    $ = o($, k, x, S, g, 15, f[54]), S = o(S, $, k, x, c, 21, f[55]), x = o(x, S, $, k, y, 6, f[56]), 
                    k = o(k, x, S, $, O, 10, f[57]), $ = o($, k, x, S, d, 15, f[58]), S = o(S, $, k, x, w, 21, f[59]), 
                    x = o(x, S, $, k, h, 6, f[60]), k = o(k, x, S, $, m, 10, f[61]), $ = o($, k, x, S, u, 15, f[62]), 
                    S = o(S, $, k, x, _, 21, f[63]);
                    a[0] = a[0] + x | 0, a[1] = a[1] + S | 0, a[2] = a[2] + $ | 0, a[3] = a[3] + k | 0;
                },
                _doFinalize: function _doFinalize() {
                    var e = this._data, r = e.words, n = 8 * this._nDataBytes, i = 8 * e.sigBytes;
                    r[i >>> 5] |= 128 << 24 - i % 32;
                    var o = t.floor(n / 4294967296);
                    for (r[15 + (i + 64 >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), 
                    r[14 + (i + 64 >>> 9 << 4)] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8), 
                    e.sigBytes = 4 * (r.length + 1), this._process(), e = this._hash, r = e.words, n = 0; 4 > n; n++) {
                        i = r[n], r[n] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8);
                    }
                    return e;
                },
                clone: function clone() {
                    var t = u.clone.call(this);
                    return t._hash = this._hash.clone(), t;
                }
            })

// ==================== 元数据 ====================
// 此文件包含从 wx0a6c4bb48f7dc973 提取的 MD5 算法实现
// 检测位置: 行 4502-4502
// 变量名: ___
// 检测源: static
