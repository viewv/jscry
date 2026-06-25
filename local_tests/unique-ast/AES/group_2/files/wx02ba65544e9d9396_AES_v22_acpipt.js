/**
 * AES 算法实现
 * App ID: wx02ba65544e9d9396
 * 版本: v22
 * 代码哈希: acpipt
 * 来源文件: output/wx02ba65544e9d9396/vendor.js
 * 检测类型: S-box
 * 置信度: 0.95
 * 函数名: anonymous
 * 行数: 50
 * 生成时间: 2025-07-05T13:17:10.581Z
 */

function() {
                var e = t, n = e.lib.BlockCipher, r = e.algo, o = [], i = [], a = [], s = [], c = [], u = [], l = [], d = [], f = [], p = [];
                !function() {
                    for (var t = [], e = 0; e < 256; e++) t[e] = e < 128 ? e << 1 : e << 1 ^ 283;
                    var n = 0, r = 0;
                    for (e = 0; e < 256; e++) {
                        var h = r ^ r << 1 ^ r << 2 ^ r << 3 ^ r << 4;
                        h = h >>> 8 ^ 255 & h ^ 99, o[n] = h, i[h] = n;
                        var v = t[n], g = t[v], m = t[g], y = 257 * t[h] ^ 16843008 * h;
                        a[n] = y << 24 | y >>> 8, s[n] = y << 16 | y >>> 16, c[n] = y << 8 | y >>> 24, u[n] = y, 
                        y = 16843009 * m ^ 65537 * g ^ 257 * v ^ 16843008 * n, l[h] = y << 24 | y >>> 8, 
                        d[h] = y << 16 | y >>> 16, f[h] = y << 8 | y >>> 24, p[h] = y, n ? (n = v ^ t[t[t[m ^ v]]], 
                        r ^= t[t[r]]) : n = r = 1;
                    }
                }();
                var h = [ 0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54 ], v = r.AES = n.extend({
                    _doReset: function() {
                        if (!this._nRounds || this._keyPriorReset !== this._key) {
                            for (var t = this._keyPriorReset = this._key, e = t.words, n = t.sigBytes / 4, r = 4 * ((this._nRounds = n + 6) + 1), i = this._keySchedule = [], a = 0; a < r; a++) if (a < n) i[a] = e[a]; else {
                                var s = i[a - 1];
                                a % n ? n > 6 && a % n == 4 && (s = o[s >>> 24] << 24 | o[s >>> 16 & 255] << 16 | o[s >>> 8 & 255] << 8 | o[255 & s]) : (s = o[(s = s << 8 | s >>> 24) >>> 24] << 24 | o[s >>> 16 & 255] << 16 | o[s >>> 8 & 255] << 8 | o[255 & s], 
                                s ^= h[a / n | 0] << 24), i[a] = i[a - n] ^ s;
                            }
                            for (var c = this._invKeySchedule = [], u = 0; u < r; u++) a = r - u, s = u % 4 ? i[a] : i[a - 4], 
                            c[u] = u < 4 || a <= 4 ? s : l[o[s >>> 24]] ^ d[o[s >>> 16 & 255]] ^ f[o[s >>> 8 & 255]] ^ p[o[255 & s]];
                        }
                    },
                    encryptBlock: function(t, e) {
                        this._doCryptBlock(t, e, this._keySchedule, a, s, c, u, o);
                    },
                    decryptBlock: function(t, e) {
                        var n = t[e + 1];
                        t[e + 1] = t[e + 3], t[e + 3] = n, this._doCryptBlock(t, e, this._invKeySchedule, l, d, f, p, i), 
                        n = t[e + 1], t[e + 1] = t[e + 3], t[e + 3] = n;
                    },
                    _doCryptBlock: function(t, e, n, r, o, i, a, s) {
                        for (var c = this._nRounds, u = t[e] ^ n[0], l = t[e + 1] ^ n[1], d = t[e + 2] ^ n[2], f = t[e + 3] ^ n[3], p = 4, h = 1; h < c; h++) {
                            var v = r[u >>> 24] ^ o[l >>> 16 & 255] ^ i[d >>> 8 & 255] ^ a[255 & f] ^ n[p++], g = r[l >>> 24] ^ o[d >>> 16 & 255] ^ i[f >>> 8 & 255] ^ a[255 & u] ^ n[p++], m = r[d >>> 24] ^ o[f >>> 16 & 255] ^ i[u >>> 8 & 255] ^ a[255 & l] ^ n[p++], y = r[f >>> 24] ^ o[u >>> 16 & 255] ^ i[l >>> 8 & 255] ^ a[255 & d] ^ n[p++];
                            u = v, l = g, d = m, f = y;
                        }
                        v = (s[u >>> 24] << 24 | s[l >>> 16 & 255] << 16 | s[d >>> 8 & 255] << 8 | s[255 & f]) ^ n[p++], 
                        g = (s[l >>> 24] << 24 | s[d >>> 16 & 255] << 16 | s[f >>> 8 & 255] << 8 | s[255 & u]) ^ n[p++], 
                        m = (s[d >>> 24] << 24 | s[f >>> 16 & 255] << 16 | s[u >>> 8 & 255] << 8 | s[255 & l]) ^ n[p++], 
                        y = (s[f >>> 24] << 24 | s[u >>> 16 & 255] << 16 | s[l >>> 8 & 255] << 8 | s[255 & d]) ^ n[p++], 
                        t[e] = v, t[e + 1] = g, t[e + 2] = m, t[e + 3] = y;
                    },
                    keySize: 8
                });
                e.AES = n._createHelper(v);
            }

// ==================== 元数据 ====================
// 此文件包含从 wx02ba65544e9d9396 提取的 AES 算法实现
// 检测位置: 行 4559-4571
// 变量名: o
// 检测源: dynamic-iife
