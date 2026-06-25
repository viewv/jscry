/**
 * MD5 算法实现
 * App ID: wx00f072e78f17f016
 * 版本: v5
 * 代码哈希: -cotxs7
 * 来源文件: output/wx00f072e78f17f016/common/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.95
 * 函数名: anonymous
 * 行数: 29
 * 生成时间: 2025-07-05T13:17:10.748Z
 */

u.extend({
                _doReset: function() {
                    this._hash = new s.init([ 1732584193, 4023233417, 2562383102, 271733878 ]);
                },
                _doProcessBlock: function(e, o) {
                    for (var a = 0; a < 16; a++) {
                        var s = o + a, u = e[s];
                        e[s] = 16711935 & (u << 8 | u >>> 24) | 4278255360 & (u << 24 | u >>> 8);
                    }
                    a = this._hash.words, s = e[o + 0], u = e[o + 1];
                    var l = e[o + 2], f = e[o + 3], p = e[o + 4], d = e[o + 5], h = e[o + 6], g = e[o + 7], v = e[o + 8], _ = e[o + 9], y = e[o + 10], m = e[o + 11], b = e[o + 12], w = e[o + 13], A = e[o + 14], x = e[o + 15], O = a[0], $ = a[1], S = a[2], k = a[3];
                    $ = i($ = i($ = i($ = i($ = r($ = r($ = r($ = r($ = n($ = n($ = n($ = n($ = t($ = t($ = t($ = t($, S = t(S, k = t(k, O = t(O, $, S, k, s, 7, c[0]), $, S, u, 12, c[1]), O, $, l, 17, c[2]), k, O, f, 22, c[3]), S = t(S, k = t(k, O = t(O, $, S, k, p, 7, c[4]), $, S, d, 12, c[5]), O, $, h, 17, c[6]), k, O, g, 22, c[7]), S = t(S, k = t(k, O = t(O, $, S, k, v, 7, c[8]), $, S, _, 12, c[9]), O, $, y, 17, c[10]), k, O, m, 22, c[11]), S = t(S, k = t(k, O = t(O, $, S, k, b, 7, c[12]), $, S, w, 12, c[13]), O, $, A, 17, c[14]), k, O, x, 22, c[15]), S = n(S, k = n(k, O = n(O, $, S, k, u, 5, c[16]), $, S, h, 9, c[17]), O, $, m, 14, c[18]), k, O, s, 20, c[19]), S = n(S, k = n(k, O = n(O, $, S, k, d, 5, c[20]), $, S, y, 9, c[21]), O, $, x, 14, c[22]), k, O, p, 20, c[23]), S = n(S, k = n(k, O = n(O, $, S, k, _, 5, c[24]), $, S, A, 9, c[25]), O, $, f, 14, c[26]), k, O, v, 20, c[27]), S = n(S, k = n(k, O = n(O, $, S, k, w, 5, c[28]), $, S, l, 9, c[29]), O, $, g, 14, c[30]), k, O, b, 20, c[31]), S = r(S, k = r(k, O = r(O, $, S, k, d, 4, c[32]), $, S, v, 11, c[33]), O, $, m, 16, c[34]), k, O, A, 23, c[35]), S = r(S, k = r(k, O = r(O, $, S, k, u, 4, c[36]), $, S, p, 11, c[37]), O, $, g, 16, c[38]), k, O, y, 23, c[39]), S = r(S, k = r(k, O = r(O, $, S, k, w, 4, c[40]), $, S, s, 11, c[41]), O, $, f, 16, c[42]), k, O, h, 23, c[43]), S = r(S, k = r(k, O = r(O, $, S, k, _, 4, c[44]), $, S, b, 11, c[45]), O, $, x, 16, c[46]), k, O, l, 23, c[47]), S = i(S, k = i(k, O = i(O, $, S, k, s, 6, c[48]), $, S, g, 10, c[49]), O, $, A, 15, c[50]), k, O, d, 21, c[51]), S = i(S, k = i(k, O = i(O, $, S, k, b, 6, c[52]), $, S, f, 10, c[53]), O, $, y, 15, c[54]), k, O, u, 21, c[55]), S = i(S, k = i(k, O = i(O, $, S, k, v, 6, c[56]), $, S, x, 10, c[57]), O, $, h, 15, c[58]), k, O, w, 21, c[59]), S = i(S, k = i(k, O = i(O, $, S, k, p, 6, c[60]), $, S, m, 10, c[61]), O, $, l, 15, c[62]), k, O, _, 21, c[63]), 
                    a[0] = a[0] + O | 0, a[1] = a[1] + $ | 0, a[2] = a[2] + S | 0, a[3] = a[3] + k | 0;
                },
                _doFinalize: function() {
                    var t = this._data, n = t.words, r = 8 * this._nDataBytes, i = 8 * t.sigBytes;
                    n[i >>> 5] |= 128 << 24 - i % 32;
                    var o = e.floor(r / 4294967296);
                    for (n[15 + (i + 64 >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), 
                    n[14 + (i + 64 >>> 9 << 4)] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8), 
                    t.sigBytes = 4 * (n.length + 1), this._process(), n = (t = this._hash).words, r = 0; r < 4; r++) i = n[r], 
                    n[r] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8);
                    return t;
                },
                clone: function() {
                    var e = u.clone.call(this);
                    return e._hash = this._hash.clone(), e;
                }
            })

// ==================== 元数据 ====================
// 此文件包含从 wx00f072e78f17f016 提取的 MD5 算法实现
// 检测位置: 行 504-504
// 变量名: ___
// 检测源: static
