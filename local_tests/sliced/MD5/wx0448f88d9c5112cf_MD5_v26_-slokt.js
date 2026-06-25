/**
 * MD5 算法实现
 * App ID: wx0448f88d9c5112cf
 * 版本: v26
 * 代码哈希: -sloktw
 * 来源文件: output/wx0448f88d9c5112cf/573AF6C215136CDF315C9EC5CAABE570.js
 * 检测类型: Initial hash values
 * 置信度: 0.95
 * 函数名: anonymous
 * 行数: 29
 * 生成时间: 2025-07-05T13:17:10.769Z
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
                    var u = t[r + 2], l = t[r + 3], p = t[r + 4], h = t[r + 5], d = t[r + 6], v = t[r + 7], y = t[r + 8], _ = t[r + 9], g = t[r + 10], m = t[r + 11], b = t[r + 12], A = t[r + 13], w = t[r + 14], O = t[r + 15], S = a[0], $ = a[1], x = a[2], E = a[3];
                    $ = i($ = i($ = i($ = i($ = o($ = o($ = o($ = o($ = n($ = n($ = n($ = n($ = e($ = e($ = e($ = e($, x = e(x, E = e(E, S = e(S, $, x, E, s, 7, f[0]), $, x, c, 12, f[1]), S, $, u, 17, f[2]), E, S, l, 22, f[3]), x = e(x, E = e(E, S = e(S, $, x, E, p, 7, f[4]), $, x, h, 12, f[5]), S, $, d, 17, f[6]), E, S, v, 22, f[7]), x = e(x, E = e(E, S = e(S, $, x, E, y, 7, f[8]), $, x, _, 12, f[9]), S, $, g, 17, f[10]), E, S, m, 22, f[11]), x = e(x, E = e(E, S = e(S, $, x, E, b, 7, f[12]), $, x, A, 12, f[13]), S, $, w, 17, f[14]), E, S, O, 22, f[15]), x = n(x, E = n(E, S = n(S, $, x, E, c, 5, f[16]), $, x, d, 9, f[17]), S, $, m, 14, f[18]), E, S, s, 20, f[19]), x = n(x, E = n(E, S = n(S, $, x, E, h, 5, f[20]), $, x, g, 9, f[21]), S, $, O, 14, f[22]), E, S, p, 20, f[23]), x = n(x, E = n(E, S = n(S, $, x, E, _, 5, f[24]), $, x, w, 9, f[25]), S, $, l, 14, f[26]), E, S, y, 20, f[27]), x = n(x, E = n(E, S = n(S, $, x, E, A, 5, f[28]), $, x, u, 9, f[29]), S, $, v, 14, f[30]), E, S, b, 20, f[31]), x = o(x, E = o(E, S = o(S, $, x, E, h, 4, f[32]), $, x, y, 11, f[33]), S, $, m, 16, f[34]), E, S, w, 23, f[35]), x = o(x, E = o(E, S = o(S, $, x, E, c, 4, f[36]), $, x, p, 11, f[37]), S, $, v, 16, f[38]), E, S, g, 23, f[39]), x = o(x, E = o(E, S = o(S, $, x, E, A, 4, f[40]), $, x, s, 11, f[41]), S, $, l, 16, f[42]), E, S, d, 23, f[43]), x = o(x, E = o(E, S = o(S, $, x, E, _, 4, f[44]), $, x, b, 11, f[45]), S, $, O, 16, f[46]), E, S, u, 23, f[47]), x = i(x, E = i(E, S = i(S, $, x, E, s, 6, f[48]), $, x, v, 10, f[49]), S, $, w, 15, f[50]), E, S, h, 21, f[51]), x = i(x, E = i(E, S = i(S, $, x, E, b, 6, f[52]), $, x, l, 10, f[53]), S, $, g, 15, f[54]), E, S, c, 21, f[55]), x = i(x, E = i(E, S = i(S, $, x, E, y, 6, f[56]), $, x, O, 10, f[57]), S, $, d, 15, f[58]), E, S, A, 21, f[59]), x = i(x, E = i(E, S = i(S, $, x, E, p, 6, f[60]), $, x, m, 10, f[61]), S, $, u, 15, f[62]), E, S, _, 21, f[63]), 
                    a[0] = a[0] + S | 0, a[1] = a[1] + $ | 0, a[2] = a[2] + x | 0, a[3] = a[3] + E | 0;
                },
                _doFinalize: function() {
                    var e = this._data, n = e.words, r = 8 * this._nDataBytes, o = 8 * e.sigBytes;
                    n[o >>> 5] |= 128 << 24 - o % 32;
                    var i = t.floor(r / 4294967296);
                    for (n[15 + (o + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), 
                    n[14 + (o + 64 >>> 9 << 4)] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8), 
                    e.sigBytes = 4 * (n.length + 1), this._process(), n = (e = this._hash).words, r = 0; 4 > r; r++) o = n[r], 
                    n[r] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8);
                    return e;
                },
                clone: function() {
                    var t = u.clone.call(this);
                    return t._hash = this._hash.clone(), t;
                }
            })

// ==================== 元数据 ====================
// 此文件包含从 wx0448f88d9c5112cf 提取的 MD5 算法实现
// 检测位置: 行 3090-3090
// 变量名: ___
// 检测源: static
