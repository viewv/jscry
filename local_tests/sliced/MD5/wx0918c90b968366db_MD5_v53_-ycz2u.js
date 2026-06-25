/**
 * MD5 算法实现
 * App ID: wx0918c90b968366db
 * 版本: v53
 * 代码哈希: -ycz2uc
 * 来源文件: output/wx0918c90b968366db/common/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.95
 * 函数名: anonymous
 * 行数: 52
 * 生成时间: 2025-07-05T13:17:10.804Z
 */

u.extend({
                    _doReset: function _doReset() {
                        this._hash = new c.init([ 1732584193, 4023233417, 2562383102, 271733878 ]);
                    },
                    _doProcessBlock: function _doProcessBlock(t, e) {
                        for (var a = 0; a < 16; a++) {
                            var s = e + a, c = t[s];
                            t[s] = 16711935 & (c << 8 | c >>> 24) | 4278255360 & (c << 24 | c >>> 8);
                        }
                        var u = this._hash.words, l = t[e + 0], h = t[e + 1], p = t[e + 2], d = t[e + 3], Y = t[e + 4], S = t[e + 5], Z = t[e + 6], v = t[e + 7], g = t[e + 8], m = t[e + 9], L = t[e + 10], y = t[e + 11], C = t[e + 12], T = t[e + 13], _ = t[e + 14], X = t[e + 15], J = u[0], D = u[1], H = u[2], P = u[3];
                        J = n(J, D, H, P, l, 7, f[0]), P = n(P, J, D, H, h, 12, f[1]), H = n(H, P, J, D, p, 17, f[2]), 
                        D = n(D, H, P, J, d, 22, f[3]), J = n(J, D, H, P, Y, 7, f[4]), P = n(P, J, D, H, S, 12, f[5]), 
                        H = n(H, P, J, D, Z, 17, f[6]), D = n(D, H, P, J, v, 22, f[7]), J = n(J, D, H, P, g, 7, f[8]), 
                        P = n(P, J, D, H, m, 12, f[9]), H = n(H, P, J, D, L, 17, f[10]), D = n(D, H, P, J, y, 22, f[11]), 
                        J = n(J, D, H, P, C, 7, f[12]), P = n(P, J, D, H, T, 12, f[13]), H = n(H, P, J, D, _, 17, f[14]), 
                        D = n(D, H, P, J, X, 22, f[15]), J = r(J, D, H, P, h, 5, f[16]), P = r(P, J, D, H, Z, 9, f[17]), 
                        H = r(H, P, J, D, y, 14, f[18]), D = r(D, H, P, J, l, 20, f[19]), J = r(J, D, H, P, S, 5, f[20]), 
                        P = r(P, J, D, H, L, 9, f[21]), H = r(H, P, J, D, X, 14, f[22]), D = r(D, H, P, J, Y, 20, f[23]), 
                        J = r(J, D, H, P, m, 5, f[24]), P = r(P, J, D, H, _, 9, f[25]), H = r(H, P, J, D, d, 14, f[26]), 
                        D = r(D, H, P, J, g, 20, f[27]), J = r(J, D, H, P, T, 5, f[28]), P = r(P, J, D, H, p, 9, f[29]), 
                        H = r(H, P, J, D, v, 14, f[30]), D = r(D, H, P, J, C, 20, f[31]), J = o(J, D, H, P, S, 4, f[32]), 
                        P = o(P, J, D, H, g, 11, f[33]), H = o(H, P, J, D, y, 16, f[34]), D = o(D, H, P, J, _, 23, f[35]), 
                        J = o(J, D, H, P, h, 4, f[36]), P = o(P, J, D, H, Y, 11, f[37]), H = o(H, P, J, D, v, 16, f[38]), 
                        D = o(D, H, P, J, L, 23, f[39]), J = o(J, D, H, P, T, 4, f[40]), P = o(P, J, D, H, l, 11, f[41]), 
                        H = o(H, P, J, D, d, 16, f[42]), D = o(D, H, P, J, Z, 23, f[43]), J = o(J, D, H, P, m, 4, f[44]), 
                        P = o(P, J, D, H, C, 11, f[45]), H = o(H, P, J, D, X, 16, f[46]), D = o(D, H, P, J, p, 23, f[47]), 
                        J = i(J, D, H, P, l, 6, f[48]), P = i(P, J, D, H, v, 10, f[49]), H = i(H, P, J, D, _, 15, f[50]), 
                        D = i(D, H, P, J, S, 21, f[51]), J = i(J, D, H, P, C, 6, f[52]), P = i(P, J, D, H, d, 10, f[53]), 
                        H = i(H, P, J, D, L, 15, f[54]), D = i(D, H, P, J, h, 21, f[55]), J = i(J, D, H, P, g, 6, f[56]), 
                        P = i(P, J, D, H, X, 10, f[57]), H = i(H, P, J, D, Z, 15, f[58]), D = i(D, H, P, J, T, 21, f[59]), 
                        J = i(J, D, H, P, Y, 6, f[60]), P = i(P, J, D, H, y, 10, f[61]), H = i(H, P, J, D, p, 15, f[62]), 
                        D = i(D, H, P, J, m, 21, f[63]), u[0] = u[0] + J | 0, u[1] = u[1] + D | 0, u[2] = u[2] + H | 0, 
                        u[3] = u[3] + P | 0;
                    },
                    _doFinalize: function _doFinalize() {
                        var t = this._data, n = t.words, r = 8 * this._nDataBytes, o = 8 * t.sigBytes;
                        n[o >>> 5] |= 128 << 24 - o % 32;
                        var i = e.floor(r / 4294967296), a = r;
                        n[15 + (o + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), 
                        n[14 + (o + 64 >>> 9 << 4)] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8), 
                        t.sigBytes = 4 * (n.length + 1), this._process();
                        for (var s = this._hash, c = s.words, u = 0; u < 4; u++) {
                            var l = c[u];
                            c[u] = 16711935 & (l << 8 | l >>> 24) | 4278255360 & (l << 24 | l >>> 8);
                        }
                        return s;
                    },
                    clone: function clone() {
                        var t = u.clone.call(this);
                        return t._hash = this._hash.clone(), t;
                    }
                })

// ==================== 元数据 ====================
// 此文件包含从 wx0918c90b968366db 提取的 MD5 算法实现
// 检测位置: 行 7994-7994
// 变量名: ___
// 检测源: static
