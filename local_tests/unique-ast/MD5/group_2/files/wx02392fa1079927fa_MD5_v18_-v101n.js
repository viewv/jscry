/**
 * MD5 算法实现
 * App ID: wx02392fa1079927fa
 * 版本: v18
 * 代码哈希: -v101nl
 * 来源文件: output/wx02392fa1079927fa/common/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.95
 * 函数名: anonymous
 * 行数: 29
 * 生成时间: 2025-07-05T13:17:10.763Z
 */

r.extend({
                _doReset: function() {
                    this._hash = new n.init([ 1732584193, 4023233417, 2562383102, 271733878 ]);
                },
                _doProcessBlock: function(e, t) {
                    for (var n = 0; n < 16; n++) {
                        var r = t + n, i = e[r];
                        e[r] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8);
                    }
                    n = this._hash.words, r = e[t + 0], i = e[t + 1];
                    var o = e[t + 2], a = e[t + 3], s = e[t + 4], u = e[t + 5], c = e[t + 6], l = e[t + 7], f = e[t + 8], p = e[t + 9], d = e[t + 10], h = e[t + 11], g = e[t + 12], v = e[t + 13], _ = e[t + 14], m = e[t + 15], y = n[0], b = n[1], A = n[2], w = n[3];
                    b = S(b = S(b = S(b = S(b = $(b = $(b = $(b = $(b = O(b = O(b = O(b = O(b = x(b = x(b = x(b = x(b, A = x(A, w = x(w, y = x(y, b, A, w, r, 7, D[0]), b, A, i, 12, D[1]), y, b, o, 17, D[2]), w, y, a, 22, D[3]), A = x(A, w = x(w, y = x(y, b, A, w, s, 7, D[4]), b, A, u, 12, D[5]), y, b, c, 17, D[6]), w, y, l, 22, D[7]), A = x(A, w = x(w, y = x(y, b, A, w, f, 7, D[8]), b, A, p, 12, D[9]), y, b, d, 17, D[10]), w, y, h, 22, D[11]), A = x(A, w = x(w, y = x(y, b, A, w, g, 7, D[12]), b, A, v, 12, D[13]), y, b, _, 17, D[14]), w, y, m, 22, D[15]), A = O(A, w = O(w, y = O(y, b, A, w, i, 5, D[16]), b, A, c, 9, D[17]), y, b, h, 14, D[18]), w, y, r, 20, D[19]), A = O(A, w = O(w, y = O(y, b, A, w, u, 5, D[20]), b, A, d, 9, D[21]), y, b, m, 14, D[22]), w, y, s, 20, D[23]), A = O(A, w = O(w, y = O(y, b, A, w, p, 5, D[24]), b, A, _, 9, D[25]), y, b, a, 14, D[26]), w, y, f, 20, D[27]), A = O(A, w = O(w, y = O(y, b, A, w, v, 5, D[28]), b, A, o, 9, D[29]), y, b, l, 14, D[30]), w, y, g, 20, D[31]), A = $(A, w = $(w, y = $(y, b, A, w, u, 4, D[32]), b, A, f, 11, D[33]), y, b, h, 16, D[34]), w, y, _, 23, D[35]), A = $(A, w = $(w, y = $(y, b, A, w, i, 4, D[36]), b, A, s, 11, D[37]), y, b, l, 16, D[38]), w, y, d, 23, D[39]), A = $(A, w = $(w, y = $(y, b, A, w, v, 4, D[40]), b, A, r, 11, D[41]), y, b, a, 16, D[42]), w, y, c, 23, D[43]), A = $(A, w = $(w, y = $(y, b, A, w, p, 4, D[44]), b, A, g, 11, D[45]), y, b, m, 16, D[46]), w, y, o, 23, D[47]), A = S(A, w = S(w, y = S(y, b, A, w, r, 6, D[48]), b, A, l, 10, D[49]), y, b, _, 15, D[50]), w, y, u, 21, D[51]), A = S(A, w = S(w, y = S(y, b, A, w, g, 6, D[52]), b, A, a, 10, D[53]), y, b, d, 15, D[54]), w, y, i, 21, D[55]), A = S(A, w = S(w, y = S(y, b, A, w, f, 6, D[56]), b, A, m, 10, D[57]), y, b, c, 15, D[58]), w, y, v, 21, D[59]), A = S(A, w = S(w, y = S(y, b, A, w, s, 6, D[60]), b, A, h, 10, D[61]), y, b, o, 15, D[62]), w, y, p, 21, D[63]), 
                    n[0] = n[0] + y | 0, n[1] = n[1] + b | 0, n[2] = n[2] + A | 0, n[3] = n[3] + w | 0;
                },
                _doFinalize: function() {
                    var e = this._data, t = e.words, n = 8 * this._nDataBytes, r = 8 * e.sigBytes;
                    t[r >>> 5] |= 128 << 24 - r % 32;
                    var i = o.floor(n / 4294967296);
                    for (t[15 + (r + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), 
                    t[14 + (r + 64 >>> 9 << 4)] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8), 
                    e.sigBytes = 4 * (t.length + 1), this._process(), t = (e = this._hash).words, n = 0; n < 4; n++) r = t[n], 
                    t[n] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8);
                    return e;
                },
                clone: function() {
                    var e = r.clone.call(this);
                    return e._hash = this._hash.clone(), e;
                }
            })

// ==================== 元数据 ====================
// 此文件包含从 wx02392fa1079927fa 提取的 MD5 算法实现
// 检测位置: 行 6321-6321
// 变量名: ___
// 检测源: static
