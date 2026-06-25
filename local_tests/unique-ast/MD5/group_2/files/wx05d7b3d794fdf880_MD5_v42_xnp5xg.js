/**
 * MD5 算法实现
 * App ID: wx05d7b3d794fdf880
 * 版本: v42
 * 代码哈希: xnp5xg
 * 来源文件: output/wx05d7b3d794fdf880/common/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.95
 * 函数名: anonymous
 * 行数: 27
 * 生成时间: 2025-07-05T13:17:10.790Z
 */

c.extend({
                _doReset: function() {
                    this._hash = new s.init([ 1732584193, 4023233417, 2562383102, 271733878 ]);
                },
                _doProcessBlock: function(e, n) {
                    for (a = 0; 16 > a; a++) {
                        c = e[s = n + a];
                        e[s] = 16711935 & (c << 8 | c >>> 24) | 4278255360 & (c << 24 | c >>> 8);
                    }
                    var a = this._hash.words, s = e[n + 0], c = e[n + 1], u = e[n + 2], p = e[n + 3], l = e[n + 4], d = e[n + 5], h = e[n + 6], v = e[n + 7], y = e[n + 8], _ = e[n + 9], g = e[n + 10], m = e[n + 11], b = e[n + 12], w = e[n + 13], $ = e[n + 14], x = e[n + 15], O = a[0], A = a[1], S = a[2], k = a[3], A = i(A = i(A = i(A = i(A = o(A = o(A = o(A = o(A = r(A = r(A = r(A = r(A = t(A = t(A = t(A = t(A, S = t(S, k = t(k, O = t(O, A, S, k, s, 7, f[0]), A, S, c, 12, f[1]), O, A, u, 17, f[2]), k, O, p, 22, f[3]), S = t(S, k = t(k, O = t(O, A, S, k, l, 7, f[4]), A, S, d, 12, f[5]), O, A, h, 17, f[6]), k, O, v, 22, f[7]), S = t(S, k = t(k, O = t(O, A, S, k, y, 7, f[8]), A, S, _, 12, f[9]), O, A, g, 17, f[10]), k, O, m, 22, f[11]), S = t(S, k = t(k, O = t(O, A, S, k, b, 7, f[12]), A, S, w, 12, f[13]), O, A, $, 17, f[14]), k, O, x, 22, f[15]), S = r(S, k = r(k, O = r(O, A, S, k, c, 5, f[16]), A, S, h, 9, f[17]), O, A, m, 14, f[18]), k, O, s, 20, f[19]), S = r(S, k = r(k, O = r(O, A, S, k, d, 5, f[20]), A, S, g, 9, f[21]), O, A, x, 14, f[22]), k, O, l, 20, f[23]), S = r(S, k = r(k, O = r(O, A, S, k, _, 5, f[24]), A, S, $, 9, f[25]), O, A, p, 14, f[26]), k, O, y, 20, f[27]), S = r(S, k = r(k, O = r(O, A, S, k, w, 5, f[28]), A, S, u, 9, f[29]), O, A, v, 14, f[30]), k, O, b, 20, f[31]), S = o(S, k = o(k, O = o(O, A, S, k, d, 4, f[32]), A, S, y, 11, f[33]), O, A, m, 16, f[34]), k, O, $, 23, f[35]), S = o(S, k = o(k, O = o(O, A, S, k, c, 4, f[36]), A, S, l, 11, f[37]), O, A, v, 16, f[38]), k, O, g, 23, f[39]), S = o(S, k = o(k, O = o(O, A, S, k, w, 4, f[40]), A, S, s, 11, f[41]), O, A, p, 16, f[42]), k, O, h, 23, f[43]), S = o(S, k = o(k, O = o(O, A, S, k, _, 4, f[44]), A, S, b, 11, f[45]), O, A, x, 16, f[46]), k, O, u, 23, f[47]), S = i(S, k = i(k, O = i(O, A, S, k, s, 6, f[48]), A, S, v, 10, f[49]), O, A, $, 15, f[50]), k, O, d, 21, f[51]), S = i(S, k = i(k, O = i(O, A, S, k, b, 6, f[52]), A, S, p, 10, f[53]), O, A, g, 15, f[54]), k, O, c, 21, f[55]), S = i(S, k = i(k, O = i(O, A, S, k, y, 6, f[56]), A, S, x, 10, f[57]), O, A, h, 15, f[58]), k, O, w, 21, f[59]), S = i(S, k = i(k, O = i(O, A, S, k, l, 6, f[60]), A, S, m, 10, f[61]), O, A, u, 15, f[62]), k, O, _, 21, f[63]);
                    a[0] = a[0] + O | 0, a[1] = a[1] + A | 0, a[2] = a[2] + S | 0, a[3] = a[3] + k | 0;
                },
                _doFinalize: function() {
                    var t = this._data, n = t.words, r = 8 * this._nDataBytes, o = 8 * t.sigBytes;
                    n[o >>> 5] |= 128 << 24 - o % 32;
                    var i = e.floor(r / 4294967296);
                    for (n[15 + (o + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), 
                    n[14 + (o + 64 >>> 9 << 4)] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8), 
                    t.sigBytes = 4 * (n.length + 1), this._process(), n = (t = this._hash).words, r = 0; 4 > r; r++) o = n[r], 
                    n[r] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8);
                    return t;
                },
                clone: function() {
                    var e = c.clone.call(this);
                    return e._hash = this._hash.clone(), e;
                }
            })

// ==================== 元数据 ====================
// 此文件包含从 wx05d7b3d794fdf880 提取的 MD5 算法实现
// 检测位置: 行 3492-3492
// 变量名: ___
// 检测源: static
