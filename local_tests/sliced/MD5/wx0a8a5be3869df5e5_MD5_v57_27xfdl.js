/**
 * MD5 算法实现
 * App ID: wx0a8a5be3869df5e5
 * 版本: v57
 * 代码哈希: 27xfdl
 * 来源文件: output/wx0a8a5be3869df5e5/common/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.95
 * 函数名: anonymous
 * 行数: 31
 * 生成时间: 2025-07-05T13:17:10.811Z
 */

o.extend({
                        _doReset: function() {
                            this._hash = new n.init([ 1732584193, 4023233417, 2562383102, 271733878 ]);
                        },
                        _doProcessBlock: function(t, e) {
                            for (var a = 0; a < 16; a++) {
                                var r = e + a, n = t[r];
                                t[r] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8);
                            }
                            var o = this._hash.words, i = t[e + 0], c = t[e + 1], l = t[e + 2], h = t[e + 3], y = t[e + 4], g = t[e + 5], v = t[e + 6], m = t[e + 7], b = t[e + 8], w = t[e + 9], _ = t[e + 10], $ = t[e + 11], k = t[e + 12], T = t[e + 13], x = t[e + 14], A = t[e + 15], M = o[0], j = o[1], S = o[2], C = o[3];
                            j = d(j = d(j = d(j = d(j = f(j = f(j = f(j = f(j = u(j = u(j = u(j = u(j = p(j = p(j = p(j = p(j, S = p(S, C = p(C, M = p(M, j, S, C, i, 7, s[0]), j, S, c, 12, s[1]), M, j, l, 17, s[2]), C, M, h, 22, s[3]), S = p(S, C = p(C, M = p(M, j, S, C, y, 7, s[4]), j, S, g, 12, s[5]), M, j, v, 17, s[6]), C, M, m, 22, s[7]), S = p(S, C = p(C, M = p(M, j, S, C, b, 7, s[8]), j, S, w, 12, s[9]), M, j, _, 17, s[10]), C, M, $, 22, s[11]), S = p(S, C = p(C, M = p(M, j, S, C, k, 7, s[12]), j, S, T, 12, s[13]), M, j, x, 17, s[14]), C, M, A, 22, s[15]), S = u(S, C = u(C, M = u(M, j, S, C, c, 5, s[16]), j, S, v, 9, s[17]), M, j, $, 14, s[18]), C, M, i, 20, s[19]), S = u(S, C = u(C, M = u(M, j, S, C, g, 5, s[20]), j, S, _, 9, s[21]), M, j, A, 14, s[22]), C, M, y, 20, s[23]), S = u(S, C = u(C, M = u(M, j, S, C, w, 5, s[24]), j, S, x, 9, s[25]), M, j, h, 14, s[26]), C, M, b, 20, s[27]), S = u(S, C = u(C, M = u(M, j, S, C, T, 5, s[28]), j, S, l, 9, s[29]), M, j, m, 14, s[30]), C, M, k, 20, s[31]), S = f(S, C = f(C, M = f(M, j, S, C, g, 4, s[32]), j, S, b, 11, s[33]), M, j, $, 16, s[34]), C, M, x, 23, s[35]), S = f(S, C = f(C, M = f(M, j, S, C, c, 4, s[36]), j, S, y, 11, s[37]), M, j, m, 16, s[38]), C, M, _, 23, s[39]), S = f(S, C = f(C, M = f(M, j, S, C, T, 4, s[40]), j, S, i, 11, s[41]), M, j, h, 16, s[42]), C, M, v, 23, s[43]), S = f(S, C = f(C, M = f(M, j, S, C, w, 4, s[44]), j, S, k, 11, s[45]), M, j, A, 16, s[46]), C, M, l, 23, s[47]), S = d(S, C = d(C, M = d(M, j, S, C, i, 6, s[48]), j, S, m, 10, s[49]), M, j, x, 15, s[50]), C, M, g, 21, s[51]), S = d(S, C = d(C, M = d(M, j, S, C, k, 6, s[52]), j, S, h, 10, s[53]), M, j, _, 15, s[54]), C, M, c, 21, s[55]), S = d(S, C = d(C, M = d(M, j, S, C, b, 6, s[56]), j, S, A, 10, s[57]), M, j, v, 15, s[58]), C, M, T, 21, s[59]), S = d(S, C = d(C, M = d(M, j, S, C, y, 6, s[60]), j, S, $, 10, s[61]), M, j, l, 15, s[62]), C, M, w, 21, s[63]), 
                            o[0] = o[0] + M | 0, o[1] = o[1] + j | 0, o[2] = o[2] + S | 0, o[3] = o[3] + C | 0;
                        },
                        _doFinalize: function() {
                            var t = this._data, a = t.words, r = 8 * this._nDataBytes, n = 8 * t.sigBytes;
                            a[n >>> 5] |= 128 << 24 - n % 32;
                            var o = e.floor(r / 4294967296), i = r;
                            a[15 + (n + 64 >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), 
                            a[14 + (n + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), 
                            t.sigBytes = 4 * (a.length + 1), this._process();
                            for (var s = this._hash, c = s.words, p = 0; p < 4; p++) {
                                var u = c[p];
                                c[p] = 16711935 & (u << 8 | u >>> 24) | 4278255360 & (u << 24 | u >>> 8);
                            }
                            return s;
                        },
                        clone: function() {
                            var t = o.clone.call(this);
                            return t._hash = this._hash.clone(), t;
                        }
                    })

// ==================== 元数据 ====================
// 此文件包含从 wx0a8a5be3869df5e5 提取的 MD5 算法实现
// 检测位置: 行 22543-22543
// 变量名: ___
// 检测源: static
