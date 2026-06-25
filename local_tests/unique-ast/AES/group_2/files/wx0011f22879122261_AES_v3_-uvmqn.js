/**
 * AES 算法实现
 * App ID: wx0011f22879122261
 * 版本: v3
 * 代码哈希: -uvmqnt
 * 来源文件: output/wx0011f22879122261/common/vendor.js
 * 检测类型: Round constants
 * 置信度: 0.8
 * 函数名: anonymous
 * 行数: 48
 * 生成时间: 2025-07-05T13:17:10.501Z
 */

function() {
            for (var t = r, e = t.lib.BlockCipher, n = t.algo, i = [], o = [], a = [], s = [], c = [], u = [], f = [], l = [], h = [], p = [], d = [], v = 0; 256 > v; v++) d[v] = 128 > v ? v << 1 : v << 1 ^ 283;
            var y = 0, _ = 0;
            for (v = 0; 256 > v; v++) {
                var g = _ ^ _ << 1 ^ _ << 2 ^ _ << 3 ^ _ << 4;
                g = g >>> 8 ^ 255 & g ^ 99, i[y] = g, o[g] = y;
                var m = d[y], b = d[m], w = d[b], A = 257 * d[g] ^ 16843008 * g;
                a[y] = A << 24 | A >>> 8, s[y] = A << 16 | A >>> 16, c[y] = A << 8 | A >>> 24, u[y] = A, 
                A = 16843009 * w ^ 65537 * b ^ 257 * m ^ 16843008 * y, f[g] = A << 24 | A >>> 8, 
                l[g] = A << 16 | A >>> 16, h[g] = A << 8 | A >>> 24, p[g] = A, y ? (y = m ^ d[d[d[w ^ m]]], 
                _ ^= d[d[_]]) : y = _ = 1;
            }
            var O = [ 0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54 ];
            n = n.AES = e.extend({
                _doReset: function() {
                    for (var t = this._key, e = t.words, n = t.sigBytes / 4, r = (t = 4 * ((this._nRounds = n + 6) + 1), 
                    this._keySchedule = []), o = 0; o < t; o++) if (o < n) r[o] = e[o]; else {
                        var a = r[o - 1];
                        o % n ? 6 < n && 4 == o % n && (a = i[a >>> 24] << 24 | i[a >>> 16 & 255] << 16 | i[a >>> 8 & 255] << 8 | i[255 & a]) : (a = a << 8 | a >>> 24, 
                        a = i[a >>> 24] << 24 | i[a >>> 16 & 255] << 16 | i[a >>> 8 & 255] << 8 | i[255 & a], 
                        a ^= O[o / n | 0] << 24), r[o] = r[o - n] ^ a;
                    }
                    for (e = this._invKeySchedule = [], n = 0; n < t; n++) o = t - n, a = n % 4 ? r[o] : r[o - 4], 
                    e[n] = 4 > n || 4 >= o ? a : f[i[a >>> 24]] ^ l[i[a >>> 16 & 255]] ^ h[i[a >>> 8 & 255]] ^ p[i[255 & a]];
                },
                encryptBlock: function(t, e) {
                    this._doCryptBlock(t, e, this._keySchedule, a, s, c, u, i);
                },
                decryptBlock: function(t, e) {
                    var n = t[e + 1];
                    t[e + 1] = t[e + 3], t[e + 3] = n, this._doCryptBlock(t, e, this._invKeySchedule, f, l, h, p, o), 
                    n = t[e + 1], t[e + 1] = t[e + 3], t[e + 3] = n;
                },
                _doCryptBlock: function(t, e, n, r, i, o, a, s) {
                    for (var c = this._nRounds, u = t[e] ^ n[0], f = t[e + 1] ^ n[1], l = t[e + 2] ^ n[2], h = t[e + 3] ^ n[3], p = 4, d = 1; d < c; d++) {
                        var v = r[u >>> 24] ^ i[f >>> 16 & 255] ^ o[l >>> 8 & 255] ^ a[255 & h] ^ n[p++], y = r[f >>> 24] ^ i[l >>> 16 & 255] ^ o[h >>> 8 & 255] ^ a[255 & u] ^ n[p++], _ = r[l >>> 24] ^ i[h >>> 16 & 255] ^ o[u >>> 8 & 255] ^ a[255 & f] ^ n[p++];
                        h = r[h >>> 24] ^ i[u >>> 16 & 255] ^ o[f >>> 8 & 255] ^ a[255 & l] ^ n[p++], u = v, 
                        f = y, l = _;
                    }
                    v = (s[u >>> 24] << 24 | s[f >>> 16 & 255] << 16 | s[l >>> 8 & 255] << 8 | s[255 & h]) ^ n[p++], 
                    y = (s[f >>> 24] << 24 | s[l >>> 16 & 255] << 16 | s[h >>> 8 & 255] << 8 | s[255 & u]) ^ n[p++], 
                    _ = (s[l >>> 24] << 24 | s[h >>> 16 & 255] << 16 | s[u >>> 8 & 255] << 8 | s[255 & f]) ^ n[p++], 
                    h = (s[h >>> 24] << 24 | s[u >>> 16 & 255] << 16 | s[f >>> 8 & 255] << 8 | s[255 & l]) ^ n[p++], 
                    t[e] = v, t[e + 1] = y, t[e + 2] = _, t[e + 3] = h;
                },
                keySize: 8
            }), t.AES = e._createHelper(n);
        }

// ==================== 元数据 ====================
// 此文件包含从 wx0011f22879122261 提取的 AES 算法实现
// 检测位置: 行 4221-4221
// 变量名: O
// 检测源: static
