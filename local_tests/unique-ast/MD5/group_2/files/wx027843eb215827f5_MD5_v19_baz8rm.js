/**
 * MD5 算法实现
 * App ID: wx027843eb215827f5
 * 版本: v19
 * 代码哈希: baz8rm
 * 来源文件: output/wx027843eb215827f5/components/gsd-lib/crypto/crypto.js
 * 检测类型: Initial hash values
 * 置信度: 0.95
 * 函数名: anonymous
 * 行数: 27
 * 生成时间: 2025-07-05T13:17:10.764Z
 */

a.extend({
        _doReset: function() {
            this._hash = new c.init([ 1732584193, 4023233417, 2562383102, 271733878 ]);
        },
        _doProcessBlock: function(t, e) {
            for (s = 0; 16 > s; s++) {
                a = t[c = e + s];
                t[c] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8);
            }
            var s = this._hash.words, c = t[e + 0], a = t[e + 1], f = t[e + 2], u = t[e + 3], p = t[e + 4], d = t[e + 5], l = t[e + 6], y = t[e + 7], _ = t[e + 8], v = t[e + 9], g = t[e + 10], B = t[e + 11], k = t[e + 12], x = t[e + 13], m = t[e + 14], S = t[e + 15], z = s[0], w = s[1], C = s[2], E = s[3], w = o(w = o(w = o(w = o(w = n(w = n(w = n(w = n(w = i(w = i(w = i(w = i(w = r(w = r(w = r(w = r(w, C = r(C, E = r(E, z = r(z, w, C, E, c, 7, h[0]), w, C, a, 12, h[1]), z, w, f, 17, h[2]), E, z, u, 22, h[3]), C = r(C, E = r(E, z = r(z, w, C, E, p, 7, h[4]), w, C, d, 12, h[5]), z, w, l, 17, h[6]), E, z, y, 22, h[7]), C = r(C, E = r(E, z = r(z, w, C, E, _, 7, h[8]), w, C, v, 12, h[9]), z, w, g, 17, h[10]), E, z, B, 22, h[11]), C = r(C, E = r(E, z = r(z, w, C, E, k, 7, h[12]), w, C, x, 12, h[13]), z, w, m, 17, h[14]), E, z, S, 22, h[15]), C = i(C, E = i(E, z = i(z, w, C, E, a, 5, h[16]), w, C, l, 9, h[17]), z, w, B, 14, h[18]), E, z, c, 20, h[19]), C = i(C, E = i(E, z = i(z, w, C, E, d, 5, h[20]), w, C, g, 9, h[21]), z, w, S, 14, h[22]), E, z, p, 20, h[23]), C = i(C, E = i(E, z = i(z, w, C, E, v, 5, h[24]), w, C, m, 9, h[25]), z, w, u, 14, h[26]), E, z, _, 20, h[27]), C = i(C, E = i(E, z = i(z, w, C, E, x, 5, h[28]), w, C, f, 9, h[29]), z, w, y, 14, h[30]), E, z, k, 20, h[31]), C = n(C, E = n(E, z = n(z, w, C, E, d, 4, h[32]), w, C, _, 11, h[33]), z, w, B, 16, h[34]), E, z, m, 23, h[35]), C = n(C, E = n(E, z = n(z, w, C, E, a, 4, h[36]), w, C, p, 11, h[37]), z, w, y, 16, h[38]), E, z, g, 23, h[39]), C = n(C, E = n(E, z = n(z, w, C, E, x, 4, h[40]), w, C, c, 11, h[41]), z, w, u, 16, h[42]), E, z, l, 23, h[43]), C = n(C, E = n(E, z = n(z, w, C, E, v, 4, h[44]), w, C, k, 11, h[45]), z, w, S, 16, h[46]), E, z, f, 23, h[47]), C = o(C, E = o(E, z = o(z, w, C, E, c, 6, h[48]), w, C, y, 10, h[49]), z, w, m, 15, h[50]), E, z, d, 21, h[51]), C = o(C, E = o(E, z = o(z, w, C, E, k, 6, h[52]), w, C, u, 10, h[53]), z, w, g, 15, h[54]), E, z, a, 21, h[55]), C = o(C, E = o(E, z = o(z, w, C, E, _, 6, h[56]), w, C, S, 10, h[57]), z, w, l, 15, h[58]), E, z, x, 21, h[59]), C = o(C, E = o(E, z = o(z, w, C, E, p, 6, h[60]), w, C, B, 10, h[61]), z, w, f, 15, h[62]), E, z, v, 21, h[63]);
            s[0] = s[0] + z | 0, s[1] = s[1] + w | 0, s[2] = s[2] + C | 0, s[3] = s[3] + E | 0;
        },
        _doFinalize: function() {
            var t = this._data, r = t.words, i = 8 * this._nDataBytes, n = 8 * t.sigBytes;
            r[n >>> 5] |= 128 << 24 - n % 32;
            var o = e.floor(i / 4294967296);
            for (r[15 + (n + 64 >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), 
            r[14 + (n + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), 
            t.sigBytes = 4 * (r.length + 1), this._process(), r = (t = this._hash).words, i = 0; 4 > i; i++) n = r[i], 
            r[i] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8);
            return t;
        },
        clone: function() {
            var t = a.clone.call(this);
            return t._hash = this._hash.clone(), t;
        }
    })

// ==================== 元数据 ====================
// 此文件包含从 wx027843eb215827f5 提取的 MD5 算法实现
// 检测位置: 行 172-172
// 变量名: ___
// 检测源: static
