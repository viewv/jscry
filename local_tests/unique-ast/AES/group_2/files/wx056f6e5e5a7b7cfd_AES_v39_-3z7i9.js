/**
 * AES 算法实现
 * App ID: wx056f6e5e5a7b7cfd
 * 版本: v39
 * 代码哈希: -3z7i9p
 * 来源文件: output/wx056f6e5e5a7b7cfd/common/vendor.js
 * 检测类型: S-box
 * 置信度: 0.95
 * 函数名: anonymous
 * 行数: 51
 * 生成时间: 2025-07-05T13:17:10.626Z
 */

function() {
                var e = t, n = e.lib.BlockCipher, r = e.algo, o = [], i = [], a = [], s = [], c = [], u = [], f = [], l = [], h = [], p = [];
                !function() {
                    for (var t = [], e = 0; e < 256; e++) t[e] = e < 128 ? e << 1 : e << 1 ^ 283;
                    var n = 0, r = 0;
                    for (e = 0; e < 256; e++) {
                        var d = r ^ r << 1 ^ r << 2 ^ r << 3 ^ r << 4;
                        d = d >>> 8 ^ 255 & d ^ 99, o[n] = d, i[d] = n;
                        var v = t[n], y = t[v], _ = t[y], g = 257 * t[d] ^ 16843008 * d;
                        a[n] = g << 24 | g >>> 8, s[n] = g << 16 | g >>> 16, c[n] = g << 8 | g >>> 24, u[n] = g, 
                        g = 16843009 * _ ^ 65537 * y ^ 257 * v ^ 16843008 * n, f[d] = g << 24 | g >>> 8, 
                        l[d] = g << 16 | g >>> 16, h[d] = g << 8 | g >>> 24, p[d] = g, n ? (n = v ^ t[t[t[_ ^ v]]], 
                        r ^= t[t[r]]) : n = r = 1;
                    }
                }();
                var d = [ 0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54 ], v = r.AES = n.extend({
                    _doReset: function() {
                        if (!this._nRounds || this._keyPriorReset !== this._key) {
                            for (var t = this._keyPriorReset = this._key, e = t.words, n = t.sigBytes / 4, r = 4 * ((this._nRounds = n + 6) + 1), i = this._keySchedule = [], a = 0; a < r; a++) if (a < n) i[a] = e[a]; else {
                                var s = i[a - 1];
                                a % n ? n > 6 && a % n == 4 && (s = o[s >>> 24] << 24 | o[s >>> 16 & 255] << 16 | o[s >>> 8 & 255] << 8 | o[255 & s]) : (s = s << 8 | s >>> 24, 
                                s = o[s >>> 24] << 24 | o[s >>> 16 & 255] << 16 | o[s >>> 8 & 255] << 8 | o[255 & s], 
                                s ^= d[a / n | 0] << 24), i[a] = i[a - n] ^ s;
                            }
                            for (var c = this._invKeySchedule = [], u = 0; u < r; u++) a = r - u, s = u % 4 ? i[a] : i[a - 4], 
                            c[u] = u < 4 || a <= 4 ? s : f[o[s >>> 24]] ^ l[o[s >>> 16 & 255]] ^ h[o[s >>> 8 & 255]] ^ p[o[255 & s]];
                        }
                    },
                    encryptBlock: function(t, e) {
                        this._doCryptBlock(t, e, this._keySchedule, a, s, c, u, o);
                    },
                    decryptBlock: function(t, e) {
                        var n = t[e + 1];
                        t[e + 1] = t[e + 3], t[e + 3] = n, this._doCryptBlock(t, e, this._invKeySchedule, f, l, h, p, i), 
                        n = t[e + 1], t[e + 1] = t[e + 3], t[e + 3] = n;
                    },
                    _doCryptBlock: function(t, e, n, r, o, i, a, s) {
                        for (var c = this._nRounds, u = t[e] ^ n[0], f = t[e + 1] ^ n[1], l = t[e + 2] ^ n[2], h = t[e + 3] ^ n[3], p = 4, d = 1; d < c; d++) {
                            var v = r[u >>> 24] ^ o[f >>> 16 & 255] ^ i[l >>> 8 & 255] ^ a[255 & h] ^ n[p++], y = r[f >>> 24] ^ o[l >>> 16 & 255] ^ i[h >>> 8 & 255] ^ a[255 & u] ^ n[p++], _ = r[l >>> 24] ^ o[h >>> 16 & 255] ^ i[u >>> 8 & 255] ^ a[255 & f] ^ n[p++], g = r[h >>> 24] ^ o[u >>> 16 & 255] ^ i[f >>> 8 & 255] ^ a[255 & l] ^ n[p++];
                            u = v, f = y, l = _, h = g;
                        }
                        v = (s[u >>> 24] << 24 | s[f >>> 16 & 255] << 16 | s[l >>> 8 & 255] << 8 | s[255 & h]) ^ n[p++], 
                        y = (s[f >>> 24] << 24 | s[l >>> 16 & 255] << 16 | s[h >>> 8 & 255] << 8 | s[255 & u]) ^ n[p++], 
                        _ = (s[l >>> 24] << 24 | s[h >>> 16 & 255] << 16 | s[u >>> 8 & 255] << 8 | s[255 & f]) ^ n[p++], 
                        g = (s[h >>> 24] << 24 | s[u >>> 16 & 255] << 16 | s[f >>> 8 & 255] << 8 | s[255 & l]) ^ n[p++], 
                        t[e] = v, t[e + 1] = y, t[e + 2] = _, t[e + 3] = g;
                    },
                    keySize: 8
                });
                e.AES = n._createHelper(v);
            }

// ==================== 元数据 ====================
// 此文件包含从 wx056f6e5e5a7b7cfd 提取的 AES 算法实现
// 检测位置: 行 15-27
// 变量名: o
// 检测源: dynamic-iife
