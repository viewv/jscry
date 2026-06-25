/**
 * MD5 算法实现
 * App ID: wx084dc96bc462831d
 * 版本: v52
 * 代码哈希: etoxhy
 * 来源文件: output/wx084dc96bc462831d/common/main.js
 * 检测类型: Initial hash values
 * 置信度: 0.95
 * 函数名: anonymous
 * 行数: 31
 * 生成时间: 2025-07-05T13:17:10.803Z
 */

u.extend({
                    _doReset: function() {
                        this._hash = new c.init([ 1732584193, 4023233417, 2562383102, 271733878 ]);
                    },
                    _doProcessBlock: function(e, t) {
                        for (var s = 0; s < 16; s++) {
                            var a = t + s, c = e[a];
                            e[a] = 16711935 & (c << 8 | c >>> 24) | 4278255360 & (c << 24 | c >>> 8);
                        }
                        var u = this._hash.words, l = e[t + 0], d = e[t + 1], f = e[t + 2], h = e[t + 3], m = e[t + 4], b = e[t + 5], _ = e[t + 6], g = e[t + 7], y = e[t + 8], v = e[t + 9], j = e[t + 10], B = e[t + 11], k = e[t + 12], U = e[t + 13], C = e[t + 14], w = e[t + 15], x = u[0], D = u[1], L = u[2], W = u[3];
                        D = i(D = i(D = i(D = i(D = r(D = r(D = r(D = r(D = n(D = n(D = n(D = n(D = o(D = o(D = o(D = o(D, L = o(L, W = o(W, x = o(x, D, L, W, l, 7, p[0]), D, L, d, 12, p[1]), x, D, f, 17, p[2]), W, x, h, 22, p[3]), L = o(L, W = o(W, x = o(x, D, L, W, m, 7, p[4]), D, L, b, 12, p[5]), x, D, _, 17, p[6]), W, x, g, 22, p[7]), L = o(L, W = o(W, x = o(x, D, L, W, y, 7, p[8]), D, L, v, 12, p[9]), x, D, j, 17, p[10]), W, x, B, 22, p[11]), L = o(L, W = o(W, x = o(x, D, L, W, k, 7, p[12]), D, L, U, 12, p[13]), x, D, C, 17, p[14]), W, x, w, 22, p[15]), L = n(L, W = n(W, x = n(x, D, L, W, d, 5, p[16]), D, L, _, 9, p[17]), x, D, B, 14, p[18]), W, x, l, 20, p[19]), L = n(L, W = n(W, x = n(x, D, L, W, b, 5, p[20]), D, L, j, 9, p[21]), x, D, w, 14, p[22]), W, x, m, 20, p[23]), L = n(L, W = n(W, x = n(x, D, L, W, v, 5, p[24]), D, L, C, 9, p[25]), x, D, h, 14, p[26]), W, x, y, 20, p[27]), L = n(L, W = n(W, x = n(x, D, L, W, U, 5, p[28]), D, L, f, 9, p[29]), x, D, g, 14, p[30]), W, x, k, 20, p[31]), L = r(L, W = r(W, x = r(x, D, L, W, b, 4, p[32]), D, L, y, 11, p[33]), x, D, B, 16, p[34]), W, x, C, 23, p[35]), L = r(L, W = r(W, x = r(x, D, L, W, d, 4, p[36]), D, L, m, 11, p[37]), x, D, g, 16, p[38]), W, x, j, 23, p[39]), L = r(L, W = r(W, x = r(x, D, L, W, U, 4, p[40]), D, L, l, 11, p[41]), x, D, h, 16, p[42]), W, x, _, 23, p[43]), L = r(L, W = r(W, x = r(x, D, L, W, v, 4, p[44]), D, L, k, 11, p[45]), x, D, w, 16, p[46]), W, x, f, 23, p[47]), L = i(L, W = i(W, x = i(x, D, L, W, l, 6, p[48]), D, L, g, 10, p[49]), x, D, C, 15, p[50]), W, x, b, 21, p[51]), L = i(L, W = i(W, x = i(x, D, L, W, k, 6, p[52]), D, L, h, 10, p[53]), x, D, j, 15, p[54]), W, x, d, 21, p[55]), L = i(L, W = i(W, x = i(x, D, L, W, y, 6, p[56]), D, L, w, 10, p[57]), x, D, _, 15, p[58]), W, x, U, 21, p[59]), L = i(L, W = i(W, x = i(x, D, L, W, m, 6, p[60]), D, L, B, 10, p[61]), x, D, f, 15, p[62]), W, x, v, 21, p[63]), 
                        u[0] = u[0] + x | 0, u[1] = u[1] + D | 0, u[2] = u[2] + L | 0, u[3] = u[3] + W | 0;
                    },
                    _doFinalize: function() {
                        var e = this._data, o = e.words, n = 8 * this._nDataBytes, r = 8 * e.sigBytes;
                        o[r >>> 5] |= 128 << 24 - r % 32;
                        var i = t.floor(n / 4294967296), s = n;
                        o[15 + (r + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), 
                        o[14 + (r + 64 >>> 9 << 4)] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8), 
                        e.sigBytes = 4 * (o.length + 1), this._process();
                        for (var a = this._hash, c = a.words, u = 0; u < 4; u++) {
                            var l = c[u];
                            c[u] = 16711935 & (l << 8 | l >>> 24) | 4278255360 & (l << 24 | l >>> 8);
                        }
                        return a;
                    },
                    clone: function() {
                        var e = u.clone.call(this);
                        return e._hash = this._hash.clone(), e;
                    }
                })

// ==================== 元数据 ====================
// 此文件包含从 wx084dc96bc462831d 提取的 MD5 算法实现
// 检测位置: 行 1201-1201
// 变量名: ___
// 检测源: static
