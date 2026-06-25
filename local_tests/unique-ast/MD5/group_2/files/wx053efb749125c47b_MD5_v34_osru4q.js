/**
 * MD5 算法实现
 * App ID: wx053efb749125c47b
 * 版本: v34
 * 代码哈希: osru4q
 * 来源文件: output/wx053efb749125c47b/common/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.95
 * 函数名: anonymous
 * 行数: 32
 * 生成时间: 2025-07-05T13:17:10.773Z
 */

c.extend({
                        _doReset: function() {
                            this._hash = new u.init([ 1732584193, 4023233417, 2562383102, 271733878 ]);
                        },
                        _doProcessBlock: function(e, n) {
                            for (var a = 0; a < 16; a++) {
                                var s = n + a, u = e[s];
                                e[s] = 16711935 & (u << 8 | u >>> 24) | 4278255360 & (u << 24 | u >>> 8);
                            }
                            var c = this._hash.words, f = e[n + 0], h = e[n + 1], d = e[n + 2], p = e[n + 3], v = e[n + 4], g = e[n + 5], y = e[n + 6], m = e[n + 7], _ = e[n + 8], b = e[n + 9], w = e[n + 10], k = e[n + 11], x = e[n + 12], O = e[n + 13], A = e[n + 14], S = e[n + 15], T = c[0], P = c[1], $ = c[2], j = c[3];
                            T = o(T = i(T = i(T = i(T = i(T = r(T = r(T = r(T = r(T = t(T = t(T = t(T = t(T, P, $, j, f, 7, l[0]), P = t(P, $ = t($, j = t(j, T, P, $, h, 12, l[1]), T, P, d, 17, l[2]), j, T, p, 22, l[3]), $, j, v, 7, l[4]), P = t(P, $ = t($, j = t(j, T, P, $, g, 12, l[5]), T, P, y, 17, l[6]), j, T, m, 22, l[7]), $, j, _, 7, l[8]), P = t(P, $ = t($, j = t(j, T, P, $, b, 12, l[9]), T, P, w, 17, l[10]), j, T, k, 22, l[11]), $, j, x, 7, l[12]), P = t(P, $ = t($, j = t(j, T, P, $, O, 12, l[13]), T, P, A, 17, l[14]), j, T, S, 22, l[15]), $, j, h, 5, l[16]), P = r(P, $ = r($, j = r(j, T, P, $, y, 9, l[17]), T, P, k, 14, l[18]), j, T, f, 20, l[19]), $, j, g, 5, l[20]), P = r(P, $ = r($, j = r(j, T, P, $, w, 9, l[21]), T, P, S, 14, l[22]), j, T, v, 20, l[23]), $, j, b, 5, l[24]), P = r(P, $ = r($, j = r(j, T, P, $, A, 9, l[25]), T, P, p, 14, l[26]), j, T, _, 20, l[27]), $, j, O, 5, l[28]), P = r(P, $ = r($, j = r(j, T, P, $, d, 9, l[29]), T, P, m, 14, l[30]), j, T, x, 20, l[31]), $, j, g, 4, l[32]), P = i(P, $ = i($, j = i(j, T, P, $, _, 11, l[33]), T, P, k, 16, l[34]), j, T, A, 23, l[35]), $, j, h, 4, l[36]), P = i(P, $ = i($, j = i(j, T, P, $, v, 11, l[37]), T, P, m, 16, l[38]), j, T, w, 23, l[39]), $, j, O, 4, l[40]), P = i(P, $ = i($, j = i(j, T, P, $, f, 11, l[41]), T, P, p, 16, l[42]), j, T, y, 23, l[43]), $, j, b, 4, l[44]), P = i(P, $ = i($, j = i(j, T, P, $, x, 11, l[45]), T, P, S, 16, l[46]), j, T, d, 23, l[47]), $, j, f, 6, l[48]), 
                            P = o(P = o(P = o(P = o(P, $ = o($, j = o(j, T, P, $, m, 10, l[49]), T, P, A, 15, l[50]), j, T, g, 21, l[51]), $ = o($, j = o(j, T = o(T, P, $, j, x, 6, l[52]), P, $, p, 10, l[53]), T, P, w, 15, l[54]), j, T, h, 21, l[55]), $ = o($, j = o(j, T = o(T, P, $, j, _, 6, l[56]), P, $, S, 10, l[57]), T, P, y, 15, l[58]), j, T, O, 21, l[59]), $ = o($, j = o(j, T = o(T, P, $, j, v, 6, l[60]), P, $, k, 10, l[61]), T, P, d, 15, l[62]), j, T, b, 21, l[63]), 
                            c[0] = c[0] + T | 0, c[1] = c[1] + P | 0, c[2] = c[2] + $ | 0, c[3] = c[3] + j | 0;
                        },
                        _doFinalize: function() {
                            var t = this._data, n = t.words, r = 8 * this._nDataBytes, i = 8 * t.sigBytes;
                            n[i >>> 5] |= 128 << 24 - i % 32;
                            var o = e.floor(r / 4294967296), a = r;
                            n[15 + (i + 64 >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), 
                            n[14 + (i + 64 >>> 9 << 4)] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8), 
                            t.sigBytes = 4 * (n.length + 1), this._process();
                            for (var s = this._hash, u = s.words, c = 0; c < 4; c++) {
                                var f = u[c];
                                u[c] = 16711935 & (f << 8 | f >>> 24) | 4278255360 & (f << 24 | f >>> 8);
                            }
                            return s;
                        },
                        clone: function() {
                            var e = c.clone.call(this);
                            return e._hash = this._hash.clone(), e;
                        }
                    })

// ==================== 元数据 ====================
// 此文件包含从 wx053efb749125c47b 提取的 MD5 算法实现
// 检测位置: 行 5105-5105
// 变量名: ___
// 检测源: static
