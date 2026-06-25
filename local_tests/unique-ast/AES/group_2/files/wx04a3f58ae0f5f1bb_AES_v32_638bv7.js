/**
 * AES 算法实现
 * App ID: wx04a3f58ae0f5f1bb
 * 版本: v32
 * 代码哈希: 638bv7
 * 来源文件: output/wx04a3f58ae0f5f1bb/common/vendor.js
 * 检测类型: Round constants
 * 置信度: 0.8
 * 函数名: anonymous
 * 行数: 46
 * 生成时间: 2025-07-05T13:17:10.617Z
 */

function() {
            for (var e = i, t = e.lib.BlockCipher, n = e.algo, r = [], o = [], a = [], s = [], u = [], c = [], l = [], p = [], f = [], h = [], d = [], g = 0; 256 > g; g++) d[g] = 128 > g ? g << 1 : g << 1 ^ 283;
            var m = 0, y = 0;
            for (g = 0; 256 > g; g++) {
                var v = (v = y ^ y << 1 ^ y << 2 ^ y << 3 ^ y << 4) >>> 8 ^ 255 & v ^ 99;
                r[m] = v, o[v] = m;
                var _ = d[m], C = d[_], S = d[C], b = 257 * d[v] ^ 16843008 * v;
                a[m] = b << 24 | b >>> 8, s[m] = b << 16 | b >>> 16, u[m] = b << 8 | b >>> 24, c[m] = b, 
                b = 16843009 * S ^ 65537 * C ^ 257 * _ ^ 16843008 * m, l[v] = b << 24 | b >>> 8, 
                p[v] = b << 16 | b >>> 16, f[v] = b << 8 | b >>> 24, h[v] = b, m ? (m = _ ^ d[d[d[S ^ _]]], 
                y ^= d[d[y]]) : m = y = 1;
            }
            var M = [ 0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54 ];
            n = n.AES = t.extend({
                _doReset: function() {
                    for (var e = (n = this._key).words, t = n.sigBytes / 4, n = 4 * ((this._nRounds = t + 6) + 1), o = this._keySchedule = [], i = 0; i < n; i++) if (i < t) o[i] = e[i]; else {
                        var a = o[i - 1];
                        i % t ? 6 < t && 4 == i % t && (a = r[a >>> 24] << 24 | r[a >>> 16 & 255] << 16 | r[a >>> 8 & 255] << 8 | r[255 & a]) : (a = r[(a = a << 8 | a >>> 24) >>> 24] << 24 | r[a >>> 16 & 255] << 16 | r[a >>> 8 & 255] << 8 | r[255 & a], 
                        a ^= M[i / t | 0] << 24), o[i] = o[i - t] ^ a;
                    }
                    for (e = this._invKeySchedule = [], t = 0; t < n; t++) i = n - t, a = t % 4 ? o[i] : o[i - 4], 
                    e[t] = 4 > t || 4 >= i ? a : l[r[a >>> 24]] ^ p[r[a >>> 16 & 255]] ^ f[r[a >>> 8 & 255]] ^ h[r[255 & a]];
                },
                encryptBlock: function(e, t) {
                    this._doCryptBlock(e, t, this._keySchedule, a, s, u, c, r);
                },
                decryptBlock: function(e, t) {
                    var n = e[t + 1];
                    e[t + 1] = e[t + 3], e[t + 3] = n, this._doCryptBlock(e, t, this._invKeySchedule, l, p, f, h, o), 
                    n = e[t + 1], e[t + 1] = e[t + 3], e[t + 3] = n;
                },
                _doCryptBlock: function(e, t, n, r, o, i, a, s) {
                    for (var u = this._nRounds, c = e[t] ^ n[0], l = e[t + 1] ^ n[1], p = e[t + 2] ^ n[2], f = e[t + 3] ^ n[3], h = 4, d = 1; d < u; d++) {
                        var g = r[c >>> 24] ^ o[l >>> 16 & 255] ^ i[p >>> 8 & 255] ^ a[255 & f] ^ n[h++], m = r[l >>> 24] ^ o[p >>> 16 & 255] ^ i[f >>> 8 & 255] ^ a[255 & c] ^ n[h++], y = r[p >>> 24] ^ o[f >>> 16 & 255] ^ i[c >>> 8 & 255] ^ a[255 & l] ^ n[h++];
                        f = r[f >>> 24] ^ o[c >>> 16 & 255] ^ i[l >>> 8 & 255] ^ a[255 & p] ^ n[h++], c = g, 
                        l = m, p = y;
                    }
                    g = (s[c >>> 24] << 24 | s[l >>> 16 & 255] << 16 | s[p >>> 8 & 255] << 8 | s[255 & f]) ^ n[h++], 
                    m = (s[l >>> 24] << 24 | s[p >>> 16 & 255] << 16 | s[f >>> 8 & 255] << 8 | s[255 & c]) ^ n[h++], 
                    y = (s[p >>> 24] << 24 | s[f >>> 16 & 255] << 16 | s[c >>> 8 & 255] << 8 | s[255 & l]) ^ n[h++], 
                    f = (s[f >>> 24] << 24 | s[c >>> 16 & 255] << 16 | s[l >>> 8 & 255] << 8 | s[255 & p]) ^ n[h++], 
                    e[t] = g, e[t + 1] = m, e[t + 2] = y, e[t + 3] = f;
                },
                keySize: 8
            }), e.AES = t._createHelper(n);
        }

// ==================== 元数据 ====================
// 此文件包含从 wx04a3f58ae0f5f1bb 提取的 AES 算法实现
// 检测位置: 行 24074-24074
// 变量名: M
// 检测源: static
