/**
 * MD5 算法实现
 * App ID: wx0535b07817d80042
 * 版本: v33
 * 代码哈希: -ojieny
 * 来源文件: output/wx0535b07817d80042/common/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.95
 * 函数名: anonymous
 * 行数: 52
 * 生成时间: 2025-07-05T13:17:10.773Z
 */

n.extend({
                _doReset: function() {
                    this._hash = new r.init([ 1732584193, 4023233417, 2562383102, 271733878 ]);
                },
                _doProcessBlock: function(t, e) {
                    for (var r = 0; r < 16; r++) {
                        var n = e + r, o = t[n];
                        t[n] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8);
                    }
                    var i = this._hash.words, a = t[e + 0], s = t[e + 1], c = t[e + 2], u = t[e + 3], f = t[e + 4], l = t[e + 5], p = t[e + 6], h = t[e + 7], d = t[e + 8], v = t[e + 9], y = t[e + 10], _ = t[e + 11], g = t[e + 12], m = t[e + 13], b = t[e + 14], w = t[e + 15], k = i[0], x = i[1], A = i[2], $ = i[3];
                    k = S(k, x, A, $, a, 7, O[0]), $ = S($, k, x, A, s, 12, O[1]), A = S(A, $, k, x, c, 17, O[2]), 
                    x = S(x, A, $, k, u, 22, O[3]), k = S(k, x, A, $, f, 7, O[4]), $ = S($, k, x, A, l, 12, O[5]), 
                    A = S(A, $, k, x, p, 17, O[6]), x = S(x, A, $, k, h, 22, O[7]), k = S(k, x, A, $, d, 7, O[8]), 
                    $ = S($, k, x, A, v, 12, O[9]), A = S(A, $, k, x, y, 17, O[10]), x = S(x, A, $, k, _, 22, O[11]), 
                    k = S(k, x, A, $, g, 7, O[12]), $ = S($, k, x, A, m, 12, O[13]), A = S(A, $, k, x, b, 17, O[14]), 
                    x = S(x, A, $, k, w, 22, O[15]), k = B(k, x, A, $, s, 5, O[16]), $ = B($, k, x, A, p, 9, O[17]), 
                    A = B(A, $, k, x, _, 14, O[18]), x = B(x, A, $, k, a, 20, O[19]), k = B(k, x, A, $, l, 5, O[20]), 
                    $ = B($, k, x, A, y, 9, O[21]), A = B(A, $, k, x, w, 14, O[22]), x = B(x, A, $, k, f, 20, O[23]), 
                    k = B(k, x, A, $, v, 5, O[24]), $ = B($, k, x, A, b, 9, O[25]), A = B(A, $, k, x, u, 14, O[26]), 
                    x = B(x, A, $, k, d, 20, O[27]), k = B(k, x, A, $, m, 5, O[28]), $ = B($, k, x, A, c, 9, O[29]), 
                    A = B(A, $, k, x, h, 14, O[30]), x = B(x, A, $, k, g, 20, O[31]), k = C(k, x, A, $, l, 4, O[32]), 
                    $ = C($, k, x, A, d, 11, O[33]), A = C(A, $, k, x, _, 16, O[34]), x = C(x, A, $, k, b, 23, O[35]), 
                    k = C(k, x, A, $, s, 4, O[36]), $ = C($, k, x, A, f, 11, O[37]), A = C(A, $, k, x, h, 16, O[38]), 
                    x = C(x, A, $, k, y, 23, O[39]), k = C(k, x, A, $, m, 4, O[40]), $ = C($, k, x, A, a, 11, O[41]), 
                    A = C(A, $, k, x, u, 16, O[42]), x = C(x, A, $, k, p, 23, O[43]), k = C(k, x, A, $, v, 4, O[44]), 
                    $ = C($, k, x, A, g, 11, O[45]), A = C(A, $, k, x, w, 16, O[46]), x = C(x, A, $, k, c, 23, O[47]), 
                    k = j(k, x, A, $, a, 6, O[48]), $ = j($, k, x, A, h, 10, O[49]), A = j(A, $, k, x, b, 15, O[50]), 
                    x = j(x, A, $, k, l, 21, O[51]), k = j(k, x, A, $, g, 6, O[52]), $ = j($, k, x, A, u, 10, O[53]), 
                    A = j(A, $, k, x, y, 15, O[54]), x = j(x, A, $, k, s, 21, O[55]), k = j(k, x, A, $, d, 6, O[56]), 
                    $ = j($, k, x, A, w, 10, O[57]), A = j(A, $, k, x, p, 15, O[58]), x = j(x, A, $, k, m, 21, O[59]), 
                    k = j(k, x, A, $, f, 6, O[60]), $ = j($, k, x, A, _, 10, O[61]), A = j(A, $, k, x, c, 15, O[62]), 
                    x = j(x, A, $, k, v, 21, O[63]), i[0] = i[0] + k | 0, i[1] = i[1] + x | 0, i[2] = i[2] + A | 0, 
                    i[3] = i[3] + $ | 0;
                },
                _doFinalize: function() {
                    var t = this._data, e = t.words, r = 8 * this._nDataBytes, n = 8 * t.sigBytes;
                    e[n >>> 5] |= 128 << 24 - n % 32;
                    var o = f.floor(r / 4294967296), i = r;
                    e[15 + (n + 64 >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), 
                    e[14 + (n + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), 
                    t.sigBytes = 4 * (e.length + 1), this._process();
                    for (var a = this._hash, s = a.words, c = 0; c < 4; c++) {
                        var u = s[c];
                        s[c] = 16711935 & (u << 8 | u >>> 24) | 4278255360 & (u << 24 | u >>> 8);
                    }
                    return a;
                },
                clone: function() {
                    var t = n.clone.call(this);
                    return t._hash = this._hash.clone(), t;
                }
            })

// ==================== 元数据 ====================
// 此文件包含从 wx0535b07817d80042 提取的 MD5 算法实现
// 检测位置: 行 3226-3226
// 变量名: ___
// 检测源: static
