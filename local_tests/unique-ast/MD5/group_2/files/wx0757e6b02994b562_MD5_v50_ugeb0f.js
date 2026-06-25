/**
 * MD5 算法实现
 * App ID: wx0757e6b02994b562
 * 版本: v50
 * 代码哈希: ugeb0f
 * 来源文件: output/wx0757e6b02994b562/common/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.95
 * 函数名: anonymous
 * 行数: 29
 * 生成时间: 2025-07-05T13:17:10.798Z
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
                    var o = e[t + 2], a = e[t + 3], s = e[t + 4], u = e[t + 5], c = e[t + 6], l = e[t + 7], f = e[t + 8], p = e[t + 9], d = e[t + 10], h = e[t + 11], g = e[t + 12], v = e[t + 13], _ = e[t + 14], m = e[t + 15], y = n[0], b = n[1], w = n[2], A = n[3];
                    b = S(b = S(b = S(b = S(b = $(b = $(b = $(b = $(b = O(b = O(b = O(b = O(b = x(b = x(b = x(b = x(b, w = x(w, A = x(A, y = x(y, b, w, A, r, 7, P[0]), b, w, i, 12, P[1]), y, b, o, 17, P[2]), A, y, a, 22, P[3]), w = x(w, A = x(A, y = x(y, b, w, A, s, 7, P[4]), b, w, u, 12, P[5]), y, b, c, 17, P[6]), A, y, l, 22, P[7]), w = x(w, A = x(A, y = x(y, b, w, A, f, 7, P[8]), b, w, p, 12, P[9]), y, b, d, 17, P[10]), A, y, h, 22, P[11]), w = x(w, A = x(A, y = x(y, b, w, A, g, 7, P[12]), b, w, v, 12, P[13]), y, b, _, 17, P[14]), A, y, m, 22, P[15]), w = O(w, A = O(A, y = O(y, b, w, A, i, 5, P[16]), b, w, c, 9, P[17]), y, b, h, 14, P[18]), A, y, r, 20, P[19]), w = O(w, A = O(A, y = O(y, b, w, A, u, 5, P[20]), b, w, d, 9, P[21]), y, b, m, 14, P[22]), A, y, s, 20, P[23]), w = O(w, A = O(A, y = O(y, b, w, A, p, 5, P[24]), b, w, _, 9, P[25]), y, b, a, 14, P[26]), A, y, f, 20, P[27]), w = O(w, A = O(A, y = O(y, b, w, A, v, 5, P[28]), b, w, o, 9, P[29]), y, b, l, 14, P[30]), A, y, g, 20, P[31]), w = $(w, A = $(A, y = $(y, b, w, A, u, 4, P[32]), b, w, f, 11, P[33]), y, b, h, 16, P[34]), A, y, _, 23, P[35]), w = $(w, A = $(A, y = $(y, b, w, A, i, 4, P[36]), b, w, s, 11, P[37]), y, b, l, 16, P[38]), A, y, d, 23, P[39]), w = $(w, A = $(A, y = $(y, b, w, A, v, 4, P[40]), b, w, r, 11, P[41]), y, b, a, 16, P[42]), A, y, c, 23, P[43]), w = $(w, A = $(A, y = $(y, b, w, A, p, 4, P[44]), b, w, g, 11, P[45]), y, b, m, 16, P[46]), A, y, o, 23, P[47]), w = S(w, A = S(A, y = S(y, b, w, A, r, 6, P[48]), b, w, l, 10, P[49]), y, b, _, 15, P[50]), A, y, u, 21, P[51]), w = S(w, A = S(A, y = S(y, b, w, A, g, 6, P[52]), b, w, a, 10, P[53]), y, b, d, 15, P[54]), A, y, i, 21, P[55]), w = S(w, A = S(A, y = S(y, b, w, A, f, 6, P[56]), b, w, m, 10, P[57]), y, b, c, 15, P[58]), A, y, v, 21, P[59]), w = S(w, A = S(A, y = S(y, b, w, A, s, 6, P[60]), b, w, h, 10, P[61]), y, b, o, 15, P[62]), A, y, p, 21, P[63]), 
                    n[0] = n[0] + y | 0, n[1] = n[1] + b | 0, n[2] = n[2] + w | 0, n[3] = n[3] + A | 0;
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
// 此文件包含从 wx0757e6b02994b562 提取的 MD5 算法实现
// 检测位置: 行 507-507
// 变量名: ___
// 检测源: static
