/**
 * MD5 算法实现
 * App ID: wx05535ba41ddc8efc
 * 版本: v38
 * 代码哈希: -vewaqo
 * 来源文件: output/wx05535ba41ddc8efc/common/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.95
 * 函数名: anonymous
 * 行数: 51
 * 生成时间: 2025-07-05T13:17:10.779Z
 */

i.extend({
                        _doReset: function() {
                            this._hash = new o.init([ 1732584193, 4023233417, 2562383102, 271733878 ]);
                        },
                        _doProcessBlock: function(e, t) {
                            for (var n = 0; n < 16; n++) {
                                var r = t + n, o = e[r];
                                e[r] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8);
                            }
                            var i = this._hash.words, a = e[t + 0], s = e[t + 1], p = e[t + 2], h = e[t + 3], v = e[t + 4], y = e[t + 5], g = e[t + 6], m = e[t + 7], _ = e[t + 8], b = e[t + 9], w = e[t + 10], k = e[t + 11], S = e[t + 12], x = e[t + 13], O = e[t + 14], A = e[t + 15], P = i[0], E = i[1], j = i[2], T = i[3];
                            P = c(P, E, j, T, a, 7, u[0]), T = c(T, P, E, j, s, 12, u[1]), j = c(j, T, P, E, p, 17, u[2]), 
                            E = c(E, j, T, P, h, 22, u[3]), P = c(P, E, j, T, v, 7, u[4]), T = c(T, P, E, j, y, 12, u[5]), 
                            j = c(j, T, P, E, g, 17, u[6]), E = c(E, j, T, P, m, 22, u[7]), P = c(P, E, j, T, _, 7, u[8]), 
                            T = c(T, P, E, j, b, 12, u[9]), j = c(j, T, P, E, w, 17, u[10]), E = c(E, j, T, P, k, 22, u[11]), 
                            P = c(P, E, j, T, S, 7, u[12]), T = c(T, P, E, j, x, 12, u[13]), j = c(j, T, P, E, O, 17, u[14]), 
                            P = f(P, E = c(E, j, T, P, A, 22, u[15]), j, T, s, 5, u[16]), T = f(T, P, E, j, g, 9, u[17]), 
                            j = f(j, T, P, E, k, 14, u[18]), E = f(E, j, T, P, a, 20, u[19]), P = f(P, E, j, T, y, 5, u[20]), 
                            T = f(T, P, E, j, w, 9, u[21]), j = f(j, T, P, E, A, 14, u[22]), E = f(E, j, T, P, v, 20, u[23]), 
                            P = f(P, E, j, T, b, 5, u[24]), T = f(T, P, E, j, O, 9, u[25]), j = f(j, T, P, E, h, 14, u[26]), 
                            E = f(E, j, T, P, _, 20, u[27]), P = f(P, E, j, T, x, 5, u[28]), T = f(T, P, E, j, p, 9, u[29]), 
                            j = f(j, T, P, E, m, 14, u[30]), P = l(P, E = f(E, j, T, P, S, 20, u[31]), j, T, y, 4, u[32]), 
                            T = l(T, P, E, j, _, 11, u[33]), j = l(j, T, P, E, k, 16, u[34]), E = l(E, j, T, P, O, 23, u[35]), 
                            P = l(P, E, j, T, s, 4, u[36]), T = l(T, P, E, j, v, 11, u[37]), j = l(j, T, P, E, m, 16, u[38]), 
                            E = l(E, j, T, P, w, 23, u[39]), P = l(P, E, j, T, x, 4, u[40]), T = l(T, P, E, j, a, 11, u[41]), 
                            j = l(j, T, P, E, h, 16, u[42]), E = l(E, j, T, P, g, 23, u[43]), P = l(P, E, j, T, b, 4, u[44]), 
                            T = l(T, P, E, j, S, 11, u[45]), j = l(j, T, P, E, A, 16, u[46]), P = d(P, E = l(E, j, T, P, p, 23, u[47]), j, T, a, 6, u[48]), 
                            T = d(T, P, E, j, m, 10, u[49]), j = d(j, T, P, E, O, 15, u[50]), E = d(E, j, T, P, y, 21, u[51]), 
                            P = d(P, E, j, T, S, 6, u[52]), T = d(T, P, E, j, h, 10, u[53]), j = d(j, T, P, E, w, 15, u[54]), 
                            E = d(E, j, T, P, s, 21, u[55]), P = d(P, E, j, T, _, 6, u[56]), T = d(T, P, E, j, A, 10, u[57]), 
                            j = d(j, T, P, E, g, 15, u[58]), E = d(E, j, T, P, x, 21, u[59]), P = d(P, E, j, T, v, 6, u[60]), 
                            T = d(T, P, E, j, k, 10, u[61]), j = d(j, T, P, E, p, 15, u[62]), E = d(E, j, T, P, b, 21, u[63]), 
                            i[0] = i[0] + P | 0, i[1] = i[1] + E | 0, i[2] = i[2] + j | 0, i[3] = i[3] + T | 0;
                        },
                        _doFinalize: function() {
                            var t = this._data, n = t.words, r = 8 * this._nDataBytes, o = 8 * t.sigBytes;
                            n[o >>> 5] |= 128 << 24 - o % 32;
                            var i = e.floor(r / 4294967296), a = r;
                            n[15 + (o + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), 
                            n[14 + (o + 64 >>> 9 << 4)] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8), 
                            t.sigBytes = 4 * (n.length + 1), this._process();
                            for (var u = this._hash, s = u.words, c = 0; c < 4; c++) {
                                var f = s[c];
                                s[c] = 16711935 & (f << 8 | f >>> 24) | 4278255360 & (f << 24 | f >>> 8);
                            }
                            return u;
                        },
                        clone: function() {
                            var e = i.clone.call(this);
                            return e._hash = this._hash.clone(), e;
                        }
                    })

// ==================== 元数据 ====================
// 此文件包含从 wx05535ba41ddc8efc 提取的 MD5 算法实现
// 检测位置: 行 8883-8883
// 变量名: ___
// 检测源: static
