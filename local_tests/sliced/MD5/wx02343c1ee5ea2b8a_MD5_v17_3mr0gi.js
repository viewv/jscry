/**
 * MD5 算法实现
 * App ID: wx02343c1ee5ea2b8a
 * 版本: v17
 * 代码哈希: 3mr0gi
 * 来源文件: output/wx02343c1ee5ea2b8a/common/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.95
 * 函数名: anonymous
 * 行数: 31
 * 生成时间: 2025-07-05T13:17:10.763Z
 */

c.extend({
                        _doReset: function() {
                            this._hash = new s.init([ 1732584193, 4023233417, 2562383102, 271733878 ]);
                        },
                        _doProcessBlock: function(e, t) {
                            for (var a = 0; a < 16; a++) {
                                var f = t + a, s = e[f];
                                e[f] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8);
                            }
                            var c = this._hash.words, u = e[t + 0], d = e[t + 1], l = e[t + 2], p = e[t + 3], b = e[t + 4], v = e[t + 5], y = e[t + 6], g = e[t + 7], m = e[t + 8], _ = e[t + 9], w = e[t + 10], S = e[t + 11], A = e[t + 12], k = e[t + 13], E = e[t + 14], M = e[t + 15], x = c[0], B = c[1], I = c[2], O = c[3];
                            B = o(B = o(B = o(B = o(B = i(B = i(B = i(B = i(B = n(B = n(B = n(B = n(B = r(B = r(B = r(B = r(B, I = r(I, O = r(O, x = r(x, B, I, O, u, 7, h[0]), B, I, d, 12, h[1]), x, B, l, 17, h[2]), O, x, p, 22, h[3]), I = r(I, O = r(O, x = r(x, B, I, O, b, 7, h[4]), B, I, v, 12, h[5]), x, B, y, 17, h[6]), O, x, g, 22, h[7]), I = r(I, O = r(O, x = r(x, B, I, O, m, 7, h[8]), B, I, _, 12, h[9]), x, B, w, 17, h[10]), O, x, S, 22, h[11]), I = r(I, O = r(O, x = r(x, B, I, O, A, 7, h[12]), B, I, k, 12, h[13]), x, B, E, 17, h[14]), O, x, M, 22, h[15]), I = n(I, O = n(O, x = n(x, B, I, O, d, 5, h[16]), B, I, y, 9, h[17]), x, B, S, 14, h[18]), O, x, u, 20, h[19]), I = n(I, O = n(O, x = n(x, B, I, O, v, 5, h[20]), B, I, w, 9, h[21]), x, B, M, 14, h[22]), O, x, b, 20, h[23]), I = n(I, O = n(O, x = n(x, B, I, O, _, 5, h[24]), B, I, E, 9, h[25]), x, B, p, 14, h[26]), O, x, m, 20, h[27]), I = n(I, O = n(O, x = n(x, B, I, O, k, 5, h[28]), B, I, l, 9, h[29]), x, B, g, 14, h[30]), O, x, A, 20, h[31]), I = i(I, O = i(O, x = i(x, B, I, O, v, 4, h[32]), B, I, m, 11, h[33]), x, B, S, 16, h[34]), O, x, E, 23, h[35]), I = i(I, O = i(O, x = i(x, B, I, O, d, 4, h[36]), B, I, b, 11, h[37]), x, B, g, 16, h[38]), O, x, w, 23, h[39]), I = i(I, O = i(O, x = i(x, B, I, O, k, 4, h[40]), B, I, u, 11, h[41]), x, B, p, 16, h[42]), O, x, y, 23, h[43]), I = i(I, O = i(O, x = i(x, B, I, O, _, 4, h[44]), B, I, A, 11, h[45]), x, B, M, 16, h[46]), O, x, l, 23, h[47]), I = o(I, O = o(O, x = o(x, B, I, O, u, 6, h[48]), B, I, g, 10, h[49]), x, B, E, 15, h[50]), O, x, v, 21, h[51]), I = o(I, O = o(O, x = o(x, B, I, O, A, 6, h[52]), B, I, p, 10, h[53]), x, B, w, 15, h[54]), O, x, d, 21, h[55]), I = o(I, O = o(O, x = o(x, B, I, O, m, 6, h[56]), B, I, M, 10, h[57]), x, B, y, 15, h[58]), O, x, k, 21, h[59]), I = o(I, O = o(O, x = o(x, B, I, O, b, 6, h[60]), B, I, S, 10, h[61]), x, B, l, 15, h[62]), O, x, _, 21, h[63]), 
                            c[0] = c[0] + x | 0, c[1] = c[1] + B | 0, c[2] = c[2] + I | 0, c[3] = c[3] + O | 0;
                        },
                        _doFinalize: function() {
                            var e = this._data, r = e.words, n = 8 * this._nDataBytes, i = 8 * e.sigBytes;
                            r[i >>> 5] |= 128 << 24 - i % 32;
                            var o = t.floor(n / 4294967296), a = n;
                            r[15 + (i + 64 >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), 
                            r[14 + (i + 64 >>> 9 << 4)] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8), 
                            e.sigBytes = 4 * (r.length + 1), this._process();
                            for (var f = this._hash, s = f.words, c = 0; c < 4; c++) {
                                var u = s[c];
                                s[c] = 16711935 & (u << 8 | u >>> 24) | 4278255360 & (u << 24 | u >>> 8);
                            }
                            return f;
                        },
                        clone: function() {
                            var e = c.clone.call(this);
                            return e._hash = this._hash.clone(), e;
                        }
                    })

// ==================== 元数据 ====================
// 此文件包含从 wx02343c1ee5ea2b8a 提取的 MD5 算法实现
// 检测位置: 行 1211-1211
// 变量名: ___
// 检测源: static
