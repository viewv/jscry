/**
 * AES 算法实现
 * App ID: wx0936b0daef292a1f
 * 版本: v60
 * 代码哈希: -oo44a1
 * 来源文件: output/wx0936b0daef292a1f/common/vendor.js
 * 检测类型: Round constants
 * 置信度: 0.8
 * 函数名: anonymous
 * 行数: 47
 * 生成时间: 2025-07-05T13:17:10.687Z
 */

function() {
            for (var e = l, t = e.lib.BlockCipher, n = e.algo, r = [], i = [], o = [], a = [], s = [], u = [], c = [], f = [], p = [], d = [], h = [], g = 0; g < 256; g++) h[g] = g < 128 ? g << 1 : g << 1 ^ 283;
            var v = 0, _ = 0;
            for (g = 0; g < 256; g++) {
                var m = _ ^ _ << 1 ^ _ << 2 ^ _ << 3 ^ _ << 4;
                m = m >>> 8 ^ 255 & m ^ 99, r[v] = m;
                var y = h[i[m] = v], b = h[y], w = h[b], A = 257 * h[m] ^ 16843008 * m;
                o[v] = A << 24 | A >>> 8, a[v] = A << 16 | A >>> 16, s[v] = A << 8 | A >>> 24, u[v] = A, 
                A = 16843009 * w ^ 65537 * b ^ 257 * y ^ 16843008 * v, c[m] = A << 24 | A >>> 8, 
                f[m] = A << 16 | A >>> 16, p[m] = A << 8 | A >>> 24, d[m] = A, v ? (v = y ^ h[h[h[w ^ y]]], 
                _ ^= h[h[_]]) : v = _ = 1;
            }
            var O = [ 0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54 ];
            n = n.AES = t.extend({
                _doReset: function() {
                    for (var e = this._key, t = e.words, n = e.sigBytes / 4, i = (e = 4 * ((this._nRounds = n + 6) + 1), 
                    this._keySchedule = []), o = 0; o < e; o++) if (o < n) i[o] = t[o]; else {
                        var a = i[o - 1];
                        o % n ? 6 < n && 4 == o % n && (a = r[a >>> 24] << 24 | r[a >>> 16 & 255] << 16 | r[a >>> 8 & 255] << 8 | r[255 & a]) : (a = r[(a = a << 8 | a >>> 24) >>> 24] << 24 | r[a >>> 16 & 255] << 16 | r[a >>> 8 & 255] << 8 | r[255 & a], 
                        a ^= O[o / n | 0] << 24), i[o] = i[o - n] ^ a;
                    }
                    for (t = this._invKeySchedule = [], n = 0; n < e; n++) o = e - n, a = n % 4 ? i[o] : i[o - 4], 
                    t[n] = n < 4 || o <= 4 ? a : c[r[a >>> 24]] ^ f[r[a >>> 16 & 255]] ^ p[r[a >>> 8 & 255]] ^ d[r[255 & a]];
                },
                encryptBlock: function(e, t) {
                    this._doCryptBlock(e, t, this._keySchedule, o, a, s, u, r);
                },
                decryptBlock: function(e, t) {
                    var n = e[t + 1];
                    e[t + 1] = e[t + 3], e[t + 3] = n, this._doCryptBlock(e, t, this._invKeySchedule, c, f, p, d, i), 
                    n = e[t + 1], e[t + 1] = e[t + 3], e[t + 3] = n;
                },
                _doCryptBlock: function(e, t, n, r, i, o, a, s) {
                    for (var u = this._nRounds, c = e[t] ^ n[0], l = e[t + 1] ^ n[1], f = e[t + 2] ^ n[2], p = e[t + 3] ^ n[3], d = 4, h = 1; h < u; h++) {
                        var g = r[c >>> 24] ^ i[l >>> 16 & 255] ^ o[f >>> 8 & 255] ^ a[255 & p] ^ n[d++], v = r[l >>> 24] ^ i[f >>> 16 & 255] ^ o[p >>> 8 & 255] ^ a[255 & c] ^ n[d++], _ = r[f >>> 24] ^ i[p >>> 16 & 255] ^ o[c >>> 8 & 255] ^ a[255 & l] ^ n[d++];
                        p = r[p >>> 24] ^ i[c >>> 16 & 255] ^ o[l >>> 8 & 255] ^ a[255 & f] ^ n[d++], c = g, 
                        l = v, f = _;
                    }
                    g = (s[c >>> 24] << 24 | s[l >>> 16 & 255] << 16 | s[f >>> 8 & 255] << 8 | s[255 & p]) ^ n[d++], 
                    v = (s[l >>> 24] << 24 | s[f >>> 16 & 255] << 16 | s[p >>> 8 & 255] << 8 | s[255 & c]) ^ n[d++], 
                    _ = (s[f >>> 24] << 24 | s[p >>> 16 & 255] << 16 | s[c >>> 8 & 255] << 8 | s[255 & l]) ^ n[d++], 
                    p = (s[p >>> 24] << 24 | s[c >>> 16 & 255] << 16 | s[l >>> 8 & 255] << 8 | s[255 & f]) ^ n[d++], 
                    e[t] = g, e[t + 1] = v, e[t + 2] = _, e[t + 3] = p;
                },
                keySize: 8
            }), e.AES = t._createHelper(n);
        }

// ==================== 元数据 ====================
// 此文件包含从 wx0936b0daef292a1f 提取的 AES 算法实现
// 检测位置: 行 6463-6463
// 变量名: O
// 检测源: static
