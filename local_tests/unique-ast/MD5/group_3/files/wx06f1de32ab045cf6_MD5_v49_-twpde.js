/**
 * MD5 算法实现
 * App ID: wx06f1de32ab045cf6
 * 版本: v49
 * 代码哈希: -twpde8
 * 来源文件: output/wx06f1de32ab045cf6/common/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.95
 * 函数名: anonymous
 * 行数: 52
 * 生成时间: 2025-07-05T13:17:10.797Z
 */

i.extend({
                    _doReset: function() {
                        this._hash = new a.init([ 1732584193, 4023233417, 2562383102, 271733878 ]);
                    },
                    _doProcessBlock: function(e, t) {
                        for (var n = 0; n < 16; n++) {
                            var r = t + n, a = e[r];
                            e[r] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8);
                        }
                        var i = this._hash.words, s = e[t + 0], u = e[t + 1], f = e[t + 2], h = e[t + 3], m = e[t + 4], p = e[t + 5], y = e[t + 6], g = e[t + 7], v = e[t + 8], M = e[t + 9], L = e[t + 10], b = e[t + 11], w = e[t + 12], k = e[t + 13], Y = e[t + 14], D = e[t + 15], T = i[0], S = i[1], E = i[2], x = i[3];
                        T = d(T, S, E, x, s, 7, o[0]), x = d(x, T, S, E, u, 12, o[1]), E = d(E, x, T, S, f, 17, o[2]), 
                        S = d(S, E, x, T, h, 22, o[3]), T = d(T, S, E, x, m, 7, o[4]), x = d(x, T, S, E, p, 12, o[5]), 
                        E = d(E, x, T, S, y, 17, o[6]), S = d(S, E, x, T, g, 22, o[7]), T = d(T, S, E, x, v, 7, o[8]), 
                        x = d(x, T, S, E, M, 12, o[9]), E = d(E, x, T, S, L, 17, o[10]), S = d(S, E, x, T, b, 22, o[11]), 
                        T = d(T, S, E, x, w, 7, o[12]), x = d(x, T, S, E, k, 12, o[13]), E = d(E, x, T, S, Y, 17, o[14]), 
                        S = d(S, E, x, T, D, 22, o[15]), T = c(T, S, E, x, u, 5, o[16]), x = c(x, T, S, E, y, 9, o[17]), 
                        E = c(E, x, T, S, b, 14, o[18]), S = c(S, E, x, T, s, 20, o[19]), T = c(T, S, E, x, p, 5, o[20]), 
                        x = c(x, T, S, E, L, 9, o[21]), E = c(E, x, T, S, D, 14, o[22]), S = c(S, E, x, T, m, 20, o[23]), 
                        T = c(T, S, E, x, M, 5, o[24]), x = c(x, T, S, E, Y, 9, o[25]), E = c(E, x, T, S, h, 14, o[26]), 
                        S = c(S, E, x, T, v, 20, o[27]), T = c(T, S, E, x, k, 5, o[28]), x = c(x, T, S, E, f, 9, o[29]), 
                        E = c(E, x, T, S, g, 14, o[30]), S = c(S, E, x, T, w, 20, o[31]), T = l(T, S, E, x, p, 4, o[32]), 
                        x = l(x, T, S, E, v, 11, o[33]), E = l(E, x, T, S, b, 16, o[34]), S = l(S, E, x, T, Y, 23, o[35]), 
                        T = l(T, S, E, x, u, 4, o[36]), x = l(x, T, S, E, m, 11, o[37]), E = l(E, x, T, S, g, 16, o[38]), 
                        S = l(S, E, x, T, L, 23, o[39]), T = l(T, S, E, x, k, 4, o[40]), x = l(x, T, S, E, s, 11, o[41]), 
                        E = l(E, x, T, S, h, 16, o[42]), S = l(S, E, x, T, y, 23, o[43]), T = l(T, S, E, x, M, 4, o[44]), 
                        x = l(x, T, S, E, w, 11, o[45]), E = l(E, x, T, S, D, 16, o[46]), S = l(S, E, x, T, f, 23, o[47]), 
                        T = _(T, S, E, x, s, 6, o[48]), x = _(x, T, S, E, g, 10, o[49]), E = _(E, x, T, S, Y, 15, o[50]), 
                        S = _(S, E, x, T, p, 21, o[51]), T = _(T, S, E, x, w, 6, o[52]), x = _(x, T, S, E, h, 10, o[53]), 
                        E = _(E, x, T, S, L, 15, o[54]), S = _(S, E, x, T, u, 21, o[55]), T = _(T, S, E, x, v, 6, o[56]), 
                        x = _(x, T, S, E, D, 10, o[57]), E = _(E, x, T, S, y, 15, o[58]), S = _(S, E, x, T, k, 21, o[59]), 
                        T = _(T, S, E, x, m, 6, o[60]), x = _(x, T, S, E, b, 10, o[61]), E = _(E, x, T, S, f, 15, o[62]), 
                        S = _(S, E, x, T, M, 21, o[63]), i[0] = i[0] + T | 0, i[1] = i[1] + S | 0, i[2] = i[2] + E | 0, 
                        i[3] = i[3] + x | 0;
                    },
                    _doFinalize: function() {
                        var e = this._data, n = e.words, r = 8 * this._nDataBytes, a = 8 * e.sigBytes;
                        n[a >>> 5] |= 128 << 24 - a % 32;
                        var i = t.floor(r / 4294967296), s = r;
                        n[15 + (a + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), 
                        n[14 + (a + 64 >>> 9 << 4)] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8), 
                        e.sigBytes = 4 * (n.length + 1), this._process();
                        for (var o = this._hash, u = o.words, d = 0; d < 4; d++) {
                            var c = u[d];
                            u[d] = 16711935 & (c << 8 | c >>> 24) | 4278255360 & (c << 24 | c >>> 8);
                        }
                        return o;
                    },
                    clone: function() {
                        var e = i.clone.call(this);
                        return e._hash = this._hash.clone(), e;
                    }
                })

// ==================== 元数据 ====================
// 此文件包含从 wx06f1de32ab045cf6 提取的 MD5 算法实现
// 检测位置: 行 12595-12595
// 变量名: ___
// 检测源: static
