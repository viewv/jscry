/**
 * AES 算法实现
 * App ID: wx0448f88d9c5112cf
 * 版本: v31
 * 代码哈希: -l0qvt7
 * 来源文件: output/wx0448f88d9c5112cf/573AF6C215136CDF315C9EC5CAABE570.js
 * 检测类型: Round constants
 * 置信度: 0.8
 * 函数名: anonymous
 * 行数: 48
 * 生成时间: 2025-07-05T13:17:10.615Z
 */

function() {
            for (var t = r, e = t.lib.BlockCipher, n = t.algo, o = [], i = [], a = [], s = [], c = [], u = [], f = [], l = [], p = [], h = [], d = [], v = 0; 256 > v; v++) d[v] = 128 > v ? v << 1 : v << 1 ^ 283;
            var y = 0, _ = 0;
            for (v = 0; 256 > v; v++) {
                var g = _ ^ _ << 1 ^ _ << 2 ^ _ << 3 ^ _ << 4;
                g = g >>> 8 ^ 255 & g ^ 99, o[y] = g, i[g] = y;
                var m = d[y], b = d[m], A = d[b], w = 257 * d[g] ^ 16843008 * g;
                a[y] = w << 24 | w >>> 8, s[y] = w << 16 | w >>> 16, c[y] = w << 8 | w >>> 24, u[y] = w, 
                w = 16843009 * A ^ 65537 * b ^ 257 * m ^ 16843008 * y, f[g] = w << 24 | w >>> 8, 
                l[g] = w << 16 | w >>> 16, p[g] = w << 8 | w >>> 24, h[g] = w, y ? (y = m ^ d[d[d[A ^ m]]], 
                _ ^= d[d[_]]) : y = _ = 1;
            }
            var O = [ 0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54 ];
            n = n.AES = e.extend({
                _doReset: function() {
                    for (var t = this._key, e = t.words, n = t.sigBytes / 4, r = (t = 4 * ((this._nRounds = n + 6) + 1), 
                    this._keySchedule = []), i = 0; i < t; i++) if (i < n) r[i] = e[i]; else {
                        var a = r[i - 1];
                        i % n ? 6 < n && 4 == i % n && (a = o[a >>> 24] << 24 | o[a >>> 16 & 255] << 16 | o[a >>> 8 & 255] << 8 | o[255 & a]) : (a = a << 8 | a >>> 24, 
                        a = o[a >>> 24] << 24 | o[a >>> 16 & 255] << 16 | o[a >>> 8 & 255] << 8 | o[255 & a], 
                        a ^= O[i / n | 0] << 24), r[i] = r[i - n] ^ a;
                    }
                    for (e = this._invKeySchedule = [], n = 0; n < t; n++) i = t - n, a = n % 4 ? r[i] : r[i - 4], 
                    e[n] = 4 > n || 4 >= i ? a : f[o[a >>> 24]] ^ l[o[a >>> 16 & 255]] ^ p[o[a >>> 8 & 255]] ^ h[o[255 & a]];
                },
                encryptBlock: function(t, e) {
                    this._doCryptBlock(t, e, this._keySchedule, a, s, c, u, o);
                },
                decryptBlock: function(t, e) {
                    var n = t[e + 1];
                    t[e + 1] = t[e + 3], t[e + 3] = n, this._doCryptBlock(t, e, this._invKeySchedule, f, l, p, h, i), 
                    n = t[e + 1], t[e + 1] = t[e + 3], t[e + 3] = n;
                },
                _doCryptBlock: function(t, e, n, r, o, i, a, s) {
                    for (var c = this._nRounds, u = t[e] ^ n[0], f = t[e + 1] ^ n[1], l = t[e + 2] ^ n[2], p = t[e + 3] ^ n[3], h = 4, d = 1; d < c; d++) {
                        var v = r[u >>> 24] ^ o[f >>> 16 & 255] ^ i[l >>> 8 & 255] ^ a[255 & p] ^ n[h++], y = r[f >>> 24] ^ o[l >>> 16 & 255] ^ i[p >>> 8 & 255] ^ a[255 & u] ^ n[h++], _ = r[l >>> 24] ^ o[p >>> 16 & 255] ^ i[u >>> 8 & 255] ^ a[255 & f] ^ n[h++];
                        p = r[p >>> 24] ^ o[u >>> 16 & 255] ^ i[f >>> 8 & 255] ^ a[255 & l] ^ n[h++], u = v, 
                        f = y, l = _;
                    }
                    v = (s[u >>> 24] << 24 | s[f >>> 16 & 255] << 16 | s[l >>> 8 & 255] << 8 | s[255 & p]) ^ n[h++], 
                    y = (s[f >>> 24] << 24 | s[l >>> 16 & 255] << 16 | s[p >>> 8 & 255] << 8 | s[255 & u]) ^ n[h++], 
                    _ = (s[l >>> 24] << 24 | s[p >>> 16 & 255] << 16 | s[u >>> 8 & 255] << 8 | s[255 & f]) ^ n[h++], 
                    p = (s[p >>> 24] << 24 | s[u >>> 16 & 255] << 16 | s[f >>> 8 & 255] << 8 | s[255 & l]) ^ n[h++], 
                    t[e] = v, t[e + 1] = y, t[e + 2] = _, t[e + 3] = p;
                },
                keySize: 8
            }), t.AES = e._createHelper(n);
        }

// ==================== 元数据 ====================
// 此文件包含从 wx0448f88d9c5112cf 提取的 AES 算法实现
// 检测位置: 行 3324-3324
// 变量名: O
// 检测源: static
