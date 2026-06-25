/**
 * MD5 算法实现
 * App ID: wx0a9e003b012f33db
 * 版本: v58
 * 代码哈希: 9znuq1
 * 来源文件: output/wx0a9e003b012f33db/static/js/crypto-js.js
 * 检测类型: Initial hash values
 * 置信度: 0.95
 * 函数名: anonymous
 * 行数: 31
 * 生成时间: 2025-07-05T13:17:10.812Z
 */

u.extend({
                    _doReset: function() {
                        this._hash = new a.init([ 1732584193, 4023233417, 2562383102, 271733878 ]);
                    },
                    _doProcessBlock: function(t, e) {
                        for (var s = 0; s < 16; s++) {
                            var c = e + s, a = t[c];
                            t[c] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8);
                        }
                        var u = this._hash.words, f = t[e + 0], p = t[e + 1], l = t[e + 2], y = t[e + 3], h = t[e + 4], _ = t[e + 5], v = t[e + 6], m = t[e + 7], b = t[e + 8], g = t[e + 9], S = t[e + 10], j = t[e + 11], x = t[e + 12], B = t[e + 13], k = t[e + 14], w = t[e + 15], z = u[0], C = u[1], M = u[2], D = u[3];
                        C = i(C = i(C = i(C = i(C = r(C = r(C = r(C = r(C = n(C = n(C = n(C = n(C = o(C = o(C = o(C = o(C, M = o(M, D = o(D, z = o(z, C, M, D, f, 7, d[0]), C, M, p, 12, d[1]), z, C, l, 17, d[2]), D, z, y, 22, d[3]), M = o(M, D = o(D, z = o(z, C, M, D, h, 7, d[4]), C, M, _, 12, d[5]), z, C, v, 17, d[6]), D, z, m, 22, d[7]), M = o(M, D = o(D, z = o(z, C, M, D, b, 7, d[8]), C, M, g, 12, d[9]), z, C, S, 17, d[10]), D, z, j, 22, d[11]), M = o(M, D = o(D, z = o(z, C, M, D, x, 7, d[12]), C, M, B, 12, d[13]), z, C, k, 17, d[14]), D, z, w, 22, d[15]), M = n(M, D = n(D, z = n(z, C, M, D, p, 5, d[16]), C, M, v, 9, d[17]), z, C, j, 14, d[18]), D, z, f, 20, d[19]), M = n(M, D = n(D, z = n(z, C, M, D, _, 5, d[20]), C, M, S, 9, d[21]), z, C, w, 14, d[22]), D, z, h, 20, d[23]), M = n(M, D = n(D, z = n(z, C, M, D, g, 5, d[24]), C, M, k, 9, d[25]), z, C, y, 14, d[26]), D, z, b, 20, d[27]), M = n(M, D = n(D, z = n(z, C, M, D, B, 5, d[28]), C, M, l, 9, d[29]), z, C, m, 14, d[30]), D, z, x, 20, d[31]), M = r(M, D = r(D, z = r(z, C, M, D, _, 4, d[32]), C, M, b, 11, d[33]), z, C, j, 16, d[34]), D, z, k, 23, d[35]), M = r(M, D = r(D, z = r(z, C, M, D, p, 4, d[36]), C, M, h, 11, d[37]), z, C, m, 16, d[38]), D, z, S, 23, d[39]), M = r(M, D = r(D, z = r(z, C, M, D, B, 4, d[40]), C, M, f, 11, d[41]), z, C, y, 16, d[42]), D, z, v, 23, d[43]), M = r(M, D = r(D, z = r(z, C, M, D, g, 4, d[44]), C, M, x, 11, d[45]), z, C, w, 16, d[46]), D, z, l, 23, d[47]), M = i(M, D = i(D, z = i(z, C, M, D, f, 6, d[48]), C, M, m, 10, d[49]), z, C, k, 15, d[50]), D, z, _, 21, d[51]), M = i(M, D = i(D, z = i(z, C, M, D, x, 6, d[52]), C, M, y, 10, d[53]), z, C, S, 15, d[54]), D, z, p, 21, d[55]), M = i(M, D = i(D, z = i(z, C, M, D, b, 6, d[56]), C, M, w, 10, d[57]), z, C, v, 15, d[58]), D, z, B, 21, d[59]), M = i(M, D = i(D, z = i(z, C, M, D, h, 6, d[60]), C, M, j, 10, d[61]), z, C, l, 15, d[62]), D, z, g, 21, d[63]), 
                        u[0] = u[0] + z | 0, u[1] = u[1] + C | 0, u[2] = u[2] + M | 0, u[3] = u[3] + D | 0;
                    },
                    _doFinalize: function() {
                        var t = this._data, o = t.words, n = 8 * this._nDataBytes, r = 8 * t.sigBytes;
                        o[r >>> 5] |= 128 << 24 - r % 32;
                        var i = e.floor(n / 4294967296), s = n;
                        o[15 + (r + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), 
                        o[14 + (r + 64 >>> 9 << 4)] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8), 
                        t.sigBytes = 4 * (o.length + 1), this._process();
                        for (var c = this._hash, a = c.words, u = 0; u < 4; u++) {
                            var f = a[u];
                            a[u] = 16711935 & (f << 8 | f >>> 24) | 4278255360 & (f << 24 | f >>> 8);
                        }
                        return c;
                    },
                    clone: function() {
                        var t = u.clone.call(this);
                        return t._hash = this._hash.clone(), t;
                    }
                })

// ==================== 元数据 ====================
// 此文件包含从 wx0a9e003b012f33db 提取的 MD5 算法实现
// 检测位置: 行 587-587
// 变量名: ___
// 检测源: static
