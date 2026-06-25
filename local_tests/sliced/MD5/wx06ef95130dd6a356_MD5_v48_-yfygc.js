/**
 * MD5 算法实现
 * App ID: wx06ef95130dd6a356
 * 版本: v48
 * 代码哈希: -yfygc5
 * 来源文件: output/wx06ef95130dd6a356/common/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.95
 * 函数名: anonymous
 * 行数: 52
 * 生成时间: 2025-07-05T13:17:10.797Z
 */

o.extend({
                    _doReset: function() {
                        this._hash = new i.init([ 1732584193, 4023233417, 2562383102, 271733878 ]);
                    },
                    _doProcessBlock: function(t, e) {
                        for (var r = 0; r < 16; r++) {
                            var n = e + r, i = t[n];
                            t[n] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8);
                        }
                        var o = this._hash.words, a = t[e + 0], s = t[e + 1], l = t[e + 2], p = t[e + 3], b = t[e + 4], v = t[e + 5], y = t[e + 6], g = t[e + 7], _ = t[e + 8], m = t[e + 9], w = t[e + 10], S = t[e + 11], k = t[e + 12], A = t[e + 13], x = t[e + 14], E = t[e + 15], M = o[0], B = o[1], O = o[2], I = o[3];
                        M = c(M, B, O, I, a, 7, f[0]), I = c(I, M, B, O, s, 12, f[1]), O = c(O, I, M, B, l, 17, f[2]), 
                        B = c(B, O, I, M, p, 22, f[3]), M = c(M, B, O, I, b, 7, f[4]), I = c(I, M, B, O, v, 12, f[5]), 
                        O = c(O, I, M, B, y, 17, f[6]), B = c(B, O, I, M, g, 22, f[7]), M = c(M, B, O, I, _, 7, f[8]), 
                        I = c(I, M, B, O, m, 12, f[9]), O = c(O, I, M, B, w, 17, f[10]), B = c(B, O, I, M, S, 22, f[11]), 
                        M = c(M, B, O, I, k, 7, f[12]), I = c(I, M, B, O, A, 12, f[13]), O = c(O, I, M, B, x, 17, f[14]), 
                        B = c(B, O, I, M, E, 22, f[15]), M = u(M, B, O, I, s, 5, f[16]), I = u(I, M, B, O, y, 9, f[17]), 
                        O = u(O, I, M, B, S, 14, f[18]), B = u(B, O, I, M, a, 20, f[19]), M = u(M, B, O, I, v, 5, f[20]), 
                        I = u(I, M, B, O, w, 9, f[21]), O = u(O, I, M, B, E, 14, f[22]), B = u(B, O, I, M, b, 20, f[23]), 
                        M = u(M, B, O, I, m, 5, f[24]), I = u(I, M, B, O, x, 9, f[25]), O = u(O, I, M, B, p, 14, f[26]), 
                        B = u(B, O, I, M, _, 20, f[27]), M = u(M, B, O, I, A, 5, f[28]), I = u(I, M, B, O, l, 9, f[29]), 
                        O = u(O, I, M, B, g, 14, f[30]), B = u(B, O, I, M, k, 20, f[31]), M = h(M, B, O, I, v, 4, f[32]), 
                        I = h(I, M, B, O, _, 11, f[33]), O = h(O, I, M, B, S, 16, f[34]), B = h(B, O, I, M, x, 23, f[35]), 
                        M = h(M, B, O, I, s, 4, f[36]), I = h(I, M, B, O, b, 11, f[37]), O = h(O, I, M, B, g, 16, f[38]), 
                        B = h(B, O, I, M, w, 23, f[39]), M = h(M, B, O, I, A, 4, f[40]), I = h(I, M, B, O, a, 11, f[41]), 
                        O = h(O, I, M, B, p, 16, f[42]), B = h(B, O, I, M, y, 23, f[43]), M = h(M, B, O, I, m, 4, f[44]), 
                        I = h(I, M, B, O, k, 11, f[45]), O = h(O, I, M, B, E, 16, f[46]), B = h(B, O, I, M, l, 23, f[47]), 
                        M = d(M, B, O, I, a, 6, f[48]), I = d(I, M, B, O, g, 10, f[49]), O = d(O, I, M, B, x, 15, f[50]), 
                        B = d(B, O, I, M, v, 21, f[51]), M = d(M, B, O, I, k, 6, f[52]), I = d(I, M, B, O, p, 10, f[53]), 
                        O = d(O, I, M, B, w, 15, f[54]), B = d(B, O, I, M, s, 21, f[55]), M = d(M, B, O, I, _, 6, f[56]), 
                        I = d(I, M, B, O, E, 10, f[57]), O = d(O, I, M, B, y, 15, f[58]), B = d(B, O, I, M, A, 21, f[59]), 
                        M = d(M, B, O, I, b, 6, f[60]), I = d(I, M, B, O, S, 10, f[61]), O = d(O, I, M, B, l, 15, f[62]), 
                        B = d(B, O, I, M, m, 21, f[63]), o[0] = o[0] + M | 0, o[1] = o[1] + B | 0, o[2] = o[2] + O | 0, 
                        o[3] = o[3] + I | 0;
                    },
                    _doFinalize: function() {
                        var t = this._data, r = t.words, n = 8 * this._nDataBytes, i = 8 * t.sigBytes;
                        r[i >>> 5] |= 128 << 24 - i % 32;
                        var o = e.floor(n / 4294967296), a = n;
                        r[15 + (i + 64 >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), 
                        r[14 + (i + 64 >>> 9 << 4)] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8), 
                        t.sigBytes = 4 * (r.length + 1), this._process();
                        for (var f = this._hash, s = f.words, c = 0; c < 4; c++) {
                            var u = s[c];
                            s[c] = 16711935 & (u << 8 | u >>> 24) | 4278255360 & (u << 24 | u >>> 8);
                        }
                        return f;
                    },
                    clone: function() {
                        var t = o.clone.call(this);
                        return t._hash = this._hash.clone(), t;
                    }
                })

// ==================== 元数据 ====================
// 此文件包含从 wx06ef95130dd6a356 提取的 MD5 算法实现
// 检测位置: 行 4645-4645
// 变量名: ___
// 检测源: static
