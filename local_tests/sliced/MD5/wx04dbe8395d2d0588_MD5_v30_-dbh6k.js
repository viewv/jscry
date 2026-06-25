/**
 * MD5 算法实现
 * App ID: wx04dbe8395d2d0588
 * 版本: v30
 * 代码哈希: -dbh6k
 * 来源文件: output/wx04dbe8395d2d0588/common/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.95
 * 函数名: anonymous
 * 行数: 31
 * 生成时间: 2025-07-05T13:17:10.770Z
 */

r.extend({
                    _doReset: function() {
                        this._hash = new s.init([ 1732584193, 4023233417, 2562383102, 271733878 ]);
                    },
                    _doProcessBlock: function(e, t) {
                        for (var a = 0; a < 16; a++) {
                            var n = t + a, s = e[n];
                            e[n] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8);
                        }
                        var r = this._hash.words, i = e[t + 0], o = e[t + 1], c = e[t + 2], h = e[t + 3], f = e[t + 4], M = e[t + 5], p = e[t + 6], L = e[t + 7], y = e[t + 8], Y = e[t + 9], k = e[t + 10], g = e[t + 11], v = e[t + 12], D = e[t + 13], T = e[t + 14], w = e[t + 15], b = r[0], S = r[1], H = r[2], j = r[3];
                        S = l(S = l(S = l(S = l(S = m(S = m(S = m(S = m(S = u(S = u(S = u(S = u(S = _(S = _(S = _(S = _(S, H = _(H, j = _(j, b = _(b, S, H, j, i, 7, d[0]), S, H, o, 12, d[1]), b, S, c, 17, d[2]), j, b, h, 22, d[3]), H = _(H, j = _(j, b = _(b, S, H, j, f, 7, d[4]), S, H, M, 12, d[5]), b, S, p, 17, d[6]), j, b, L, 22, d[7]), H = _(H, j = _(j, b = _(b, S, H, j, y, 7, d[8]), S, H, Y, 12, d[9]), b, S, k, 17, d[10]), j, b, g, 22, d[11]), H = _(H, j = _(j, b = _(b, S, H, j, v, 7, d[12]), S, H, D, 12, d[13]), b, S, T, 17, d[14]), j, b, w, 22, d[15]), H = u(H, j = u(j, b = u(b, S, H, j, o, 5, d[16]), S, H, p, 9, d[17]), b, S, g, 14, d[18]), j, b, i, 20, d[19]), H = u(H, j = u(j, b = u(b, S, H, j, M, 5, d[20]), S, H, k, 9, d[21]), b, S, w, 14, d[22]), j, b, f, 20, d[23]), H = u(H, j = u(j, b = u(b, S, H, j, Y, 5, d[24]), S, H, T, 9, d[25]), b, S, h, 14, d[26]), j, b, y, 20, d[27]), H = u(H, j = u(j, b = u(b, S, H, j, D, 5, d[28]), S, H, c, 9, d[29]), b, S, L, 14, d[30]), j, b, v, 20, d[31]), H = m(H, j = m(j, b = m(b, S, H, j, M, 4, d[32]), S, H, y, 11, d[33]), b, S, g, 16, d[34]), j, b, T, 23, d[35]), H = m(H, j = m(j, b = m(b, S, H, j, o, 4, d[36]), S, H, f, 11, d[37]), b, S, L, 16, d[38]), j, b, k, 23, d[39]), H = m(H, j = m(j, b = m(b, S, H, j, D, 4, d[40]), S, H, i, 11, d[41]), b, S, h, 16, d[42]), j, b, p, 23, d[43]), H = m(H, j = m(j, b = m(b, S, H, j, Y, 4, d[44]), S, H, v, 11, d[45]), b, S, w, 16, d[46]), j, b, c, 23, d[47]), H = l(H, j = l(j, b = l(b, S, H, j, i, 6, d[48]), S, H, L, 10, d[49]), b, S, T, 15, d[50]), j, b, M, 21, d[51]), H = l(H, j = l(j, b = l(b, S, H, j, v, 6, d[52]), S, H, h, 10, d[53]), b, S, k, 15, d[54]), j, b, o, 21, d[55]), H = l(H, j = l(j, b = l(b, S, H, j, y, 6, d[56]), S, H, w, 10, d[57]), b, S, p, 15, d[58]), j, b, D, 21, d[59]), H = l(H, j = l(j, b = l(b, S, H, j, f, 6, d[60]), S, H, g, 10, d[61]), b, S, c, 15, d[62]), j, b, Y, 21, d[63]), 
                        r[0] = r[0] + b | 0, r[1] = r[1] + S | 0, r[2] = r[2] + H | 0, r[3] = r[3] + j | 0;
                    },
                    _doFinalize: function() {
                        var e = this._data, a = e.words, n = 8 * this._nDataBytes, s = 8 * e.sigBytes;
                        a[s >>> 5] |= 128 << 24 - s % 32;
                        var r = t.floor(n / 4294967296), i = n;
                        a[15 + (s + 64 >>> 9 << 4)] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8), 
                        a[14 + (s + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), 
                        e.sigBytes = 4 * (a.length + 1), this._process();
                        for (var d = this._hash, o = d.words, _ = 0; _ < 4; _++) {
                            var u = o[_];
                            o[_] = 16711935 & (u << 8 | u >>> 24) | 4278255360 & (u << 24 | u >>> 8);
                        }
                        return d;
                    },
                    clone: function() {
                        var e = r.clone.call(this);
                        return e._hash = this._hash.clone(), e;
                    }
                })

// ==================== 元数据 ====================
// 此文件包含从 wx04dbe8395d2d0588 提取的 MD5 算法实现
// 检测位置: 行 13812-13812
// 变量名: ___
// 检测源: static
