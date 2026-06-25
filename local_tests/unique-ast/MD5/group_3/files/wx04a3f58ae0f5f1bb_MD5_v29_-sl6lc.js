/**
 * MD5 算法实现
 * App ID: wx04a3f58ae0f5f1bb
 * 版本: v29
 * 代码哈希: -sl6lcl
 * 来源文件: output/wx04a3f58ae0f5f1bb/common/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.95
 * 函数名: anonymous
 * 行数: 47
 * 生成时间: 2025-07-05T13:17:10.770Z
 */

u.extend({
                _doReset: function() {
                    this._hash = new s.init([ 1732584193, 4023233417, 2562383102, 271733878 ]);
                },
                _doProcessBlock: function(e, i) {
                    for (var a = 0; 16 > a; a++) {
                        var s = e[u = i + a];
                        e[u] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8);
                    }
                    a = this._hash.words;
                    var u = e[i + 0], c = (s = e[i + 1], e[i + 2]), p = e[i + 3], f = e[i + 4], h = e[i + 5], d = e[i + 6], g = e[i + 7], m = e[i + 8], y = e[i + 9], v = e[i + 10], _ = e[i + 11], C = e[i + 12], S = e[i + 13], b = e[i + 14], M = e[i + 15], I = t(I = a[0], k = a[1], w = a[2], T = a[3], u, 7, l[0]), T = t(T, I, k, w, s, 12, l[1]), w = t(w, T, I, k, c, 17, l[2]), k = t(k, w, T, I, p, 22, l[3]);
                    I = t(I, k, w, T, f, 7, l[4]), T = t(T, I, k, w, h, 12, l[5]), w = t(w, T, I, k, d, 17, l[6]), 
                    k = t(k, w, T, I, g, 22, l[7]), I = t(I, k, w, T, m, 7, l[8]), T = t(T, I, k, w, y, 12, l[9]), 
                    w = t(w, T, I, k, v, 17, l[10]), k = t(k, w, T, I, _, 22, l[11]), I = t(I, k, w, T, C, 7, l[12]), 
                    T = t(T, I, k, w, S, 12, l[13]), w = t(w, T, I, k, b, 17, l[14]), I = n(I, k = t(k, w, T, I, M, 22, l[15]), w, T, s, 5, l[16]), 
                    T = n(T, I, k, w, d, 9, l[17]), w = n(w, T, I, k, _, 14, l[18]), k = n(k, w, T, I, u, 20, l[19]), 
                    I = n(I, k, w, T, h, 5, l[20]), T = n(T, I, k, w, v, 9, l[21]), w = n(w, T, I, k, M, 14, l[22]), 
                    k = n(k, w, T, I, f, 20, l[23]), I = n(I, k, w, T, y, 5, l[24]), T = n(T, I, k, w, b, 9, l[25]), 
                    w = n(w, T, I, k, p, 14, l[26]), k = n(k, w, T, I, m, 20, l[27]), I = n(I, k, w, T, S, 5, l[28]), 
                    T = n(T, I, k, w, c, 9, l[29]), w = n(w, T, I, k, g, 14, l[30]), I = r(I, k = n(k, w, T, I, C, 20, l[31]), w, T, h, 4, l[32]), 
                    T = r(T, I, k, w, m, 11, l[33]), w = r(w, T, I, k, _, 16, l[34]), k = r(k, w, T, I, b, 23, l[35]), 
                    I = r(I, k, w, T, s, 4, l[36]), T = r(T, I, k, w, f, 11, l[37]), w = r(w, T, I, k, g, 16, l[38]), 
                    k = r(k, w, T, I, v, 23, l[39]), I = r(I, k, w, T, S, 4, l[40]), T = r(T, I, k, w, u, 11, l[41]), 
                    w = r(w, T, I, k, p, 16, l[42]), k = r(k, w, T, I, d, 23, l[43]), I = r(I, k, w, T, y, 4, l[44]), 
                    T = r(T, I, k, w, C, 11, l[45]), w = r(w, T, I, k, M, 16, l[46]), I = o(I, k = r(k, w, T, I, c, 23, l[47]), w, T, u, 6, l[48]), 
                    T = o(T, I, k, w, g, 10, l[49]), w = o(w, T, I, k, b, 15, l[50]), k = o(k, w, T, I, h, 21, l[51]), 
                    I = o(I, k, w, T, C, 6, l[52]), T = o(T, I, k, w, p, 10, l[53]), w = o(w, T, I, k, v, 15, l[54]), 
                    k = o(k, w, T, I, s, 21, l[55]), I = o(I, k, w, T, m, 6, l[56]), T = o(T, I, k, w, M, 10, l[57]), 
                    w = o(w, T, I, k, d, 15, l[58]), k = o(k, w, T, I, S, 21, l[59]), I = o(I, k, w, T, f, 6, l[60]), 
                    T = o(T, I, k, w, _, 10, l[61]), w = o(w, T, I, k, c, 15, l[62]), k = o(k, w, T, I, y, 21, l[63]), 
                    a[0] = a[0] + I | 0, a[1] = a[1] + k | 0, a[2] = a[2] + w | 0, a[3] = a[3] + T | 0;
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
                    var e = u.clone.call(this);
                    return e._hash = this._hash.clone(), e;
                }
            })

// ==================== 元数据 ====================
// 此文件包含从 wx04a3f58ae0f5f1bb 提取的 MD5 算法实现
// 检测位置: 行 23823-23823
// 变量名: ___
// 检测源: static
