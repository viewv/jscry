/**
 * MD5 算法实现
 * App ID: wx056f6e5e5a7b7cfd
 * 版本: v39
 * 代码哈希: -xy9td3
 * 来源文件: output/wx056f6e5e5a7b7cfd/common/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.95
 * 函数名: anonymous
 * 行数: 31
 * 生成时间: 2025-07-05T13:17:10.780Z
 */

u.extend({
                    _doReset: function() {
                        this._hash = new c.init([ 1732584193, 4023233417, 2562383102, 271733878 ]);
                    },
                    _doProcessBlock: function(t, e) {
                        for (var a = 0; a < 16; a++) {
                            var s = e + a, c = t[s];
                            t[s] = 16711935 & (c << 8 | c >>> 24) | 4278255360 & (c << 24 | c >>> 8);
                        }
                        var u = this._hash.words, f = t[e + 0], h = t[e + 1], p = t[e + 2], d = t[e + 3], v = t[e + 4], y = t[e + 5], _ = t[e + 6], g = t[e + 7], m = t[e + 8], b = t[e + 9], w = t[e + 10], x = t[e + 11], k = t[e + 12], A = t[e + 13], S = t[e + 14], O = t[e + 15], $ = u[0], E = u[1], B = u[2], C = u[3];
                        E = i(E = i(E = i(E = i(E = o(E = o(E = o(E = o(E = r(E = r(E = r(E = r(E = n(E = n(E = n(E = n(E, B = n(B, C = n(C, $ = n($, E, B, C, f, 7, l[0]), E, B, h, 12, l[1]), $, E, p, 17, l[2]), C, $, d, 22, l[3]), B = n(B, C = n(C, $ = n($, E, B, C, v, 7, l[4]), E, B, y, 12, l[5]), $, E, _, 17, l[6]), C, $, g, 22, l[7]), B = n(B, C = n(C, $ = n($, E, B, C, m, 7, l[8]), E, B, b, 12, l[9]), $, E, w, 17, l[10]), C, $, x, 22, l[11]), B = n(B, C = n(C, $ = n($, E, B, C, k, 7, l[12]), E, B, A, 12, l[13]), $, E, S, 17, l[14]), C, $, O, 22, l[15]), B = r(B, C = r(C, $ = r($, E, B, C, h, 5, l[16]), E, B, _, 9, l[17]), $, E, x, 14, l[18]), C, $, f, 20, l[19]), B = r(B, C = r(C, $ = r($, E, B, C, y, 5, l[20]), E, B, w, 9, l[21]), $, E, O, 14, l[22]), C, $, v, 20, l[23]), B = r(B, C = r(C, $ = r($, E, B, C, b, 5, l[24]), E, B, S, 9, l[25]), $, E, d, 14, l[26]), C, $, m, 20, l[27]), B = r(B, C = r(C, $ = r($, E, B, C, A, 5, l[28]), E, B, p, 9, l[29]), $, E, g, 14, l[30]), C, $, k, 20, l[31]), B = o(B, C = o(C, $ = o($, E, B, C, y, 4, l[32]), E, B, m, 11, l[33]), $, E, x, 16, l[34]), C, $, S, 23, l[35]), B = o(B, C = o(C, $ = o($, E, B, C, h, 4, l[36]), E, B, v, 11, l[37]), $, E, g, 16, l[38]), C, $, w, 23, l[39]), B = o(B, C = o(C, $ = o($, E, B, C, A, 4, l[40]), E, B, f, 11, l[41]), $, E, d, 16, l[42]), C, $, _, 23, l[43]), B = o(B, C = o(C, $ = o($, E, B, C, b, 4, l[44]), E, B, k, 11, l[45]), $, E, O, 16, l[46]), C, $, p, 23, l[47]), B = i(B, C = i(C, $ = i($, E, B, C, f, 6, l[48]), E, B, g, 10, l[49]), $, E, S, 15, l[50]), C, $, y, 21, l[51]), B = i(B, C = i(C, $ = i($, E, B, C, k, 6, l[52]), E, B, d, 10, l[53]), $, E, w, 15, l[54]), C, $, h, 21, l[55]), B = i(B, C = i(C, $ = i($, E, B, C, m, 6, l[56]), E, B, O, 10, l[57]), $, E, _, 15, l[58]), C, $, A, 21, l[59]), B = i(B, C = i(C, $ = i($, E, B, C, v, 6, l[60]), E, B, x, 10, l[61]), $, E, p, 15, l[62]), C, $, b, 21, l[63]), 
                        u[0] = u[0] + $ | 0, u[1] = u[1] + E | 0, u[2] = u[2] + B | 0, u[3] = u[3] + C | 0;
                    },
                    _doFinalize: function() {
                        var t = this._data, n = t.words, r = 8 * this._nDataBytes, o = 8 * t.sigBytes;
                        n[o >>> 5] |= 128 << 24 - o % 32;
                        var i = e.floor(r / 4294967296), a = r;
                        n[15 + (o + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), 
                        n[14 + (o + 64 >>> 9 << 4)] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8), 
                        t.sigBytes = 4 * (n.length + 1), this._process();
                        for (var s = this._hash, c = s.words, u = 0; u < 4; u++) {
                            var f = c[u];
                            c[u] = 16711935 & (f << 8 | f >>> 24) | 4278255360 & (f << 24 | f >>> 8);
                        }
                        return s;
                    },
                    clone: function() {
                        var t = u.clone.call(this);
                        return t._hash = this._hash.clone(), t;
                    }
                })

// ==================== 元数据 ====================
// 此文件包含从 wx056f6e5e5a7b7cfd 提取的 MD5 算法实现
// 检测位置: 行 93-93
// 变量名: ___
// 检测源: static
