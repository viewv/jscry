/**
 * AES 算法实现
 * App ID: wx01c948dc098d7bc3
 * 版本: v13
 * 代码哈希: -38oumq
 * 来源文件: output/wx01c948dc098d7bc3/common/vendor.js
 * 检测类型: S-box
 * 置信度: 0.95
 * 函数名: anonymous
 * 行数: 51
 * 生成时间: 2025-07-05T13:17:10.538Z
 */

function() {
                var t = e, r = t.lib.BlockCipher, n = t.algo, o = [], i = [], a = [], u = [], c = [], s = [], l = [], f = [], d = [], p = [];
                !function() {
                    for (var e = [], t = 0; t < 256; t++) e[t] = t < 128 ? t << 1 : t << 1 ^ 283;
                    var r = 0, n = 0;
                    for (t = 0; t < 256; t++) {
                        var h = n ^ n << 1 ^ n << 2 ^ n << 3 ^ n << 4;
                        h = h >>> 8 ^ 255 & h ^ 99, o[r] = h, i[h] = r;
                        var v = e[r], y = e[v], m = e[y], g = 257 * e[h] ^ 16843008 * h;
                        a[r] = g << 24 | g >>> 8, u[r] = g << 16 | g >>> 16, c[r] = g << 8 | g >>> 24, s[r] = g, 
                        g = 16843009 * m ^ 65537 * y ^ 257 * v ^ 16843008 * r, l[h] = g << 24 | g >>> 8, 
                        f[h] = g << 16 | g >>> 16, d[h] = g << 8 | g >>> 24, p[h] = g, r ? (r = v ^ e[e[e[m ^ v]]], 
                        n ^= e[e[n]]) : r = n = 1;
                    }
                }();
                var h = [ 0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54 ], v = n.AES = r.extend({
                    _doReset: function() {
                        if (!this._nRounds || this._keyPriorReset !== this._key) {
                            for (var e = this._keyPriorReset = this._key, t = e.words, r = e.sigBytes / 4, n = 4 * ((this._nRounds = r + 6) + 1), i = this._keySchedule = [], a = 0; a < n; a++) if (a < r) i[a] = t[a]; else {
                                var u = i[a - 1];
                                a % r ? r > 6 && a % r == 4 && (u = o[u >>> 24] << 24 | o[u >>> 16 & 255] << 16 | o[u >>> 8 & 255] << 8 | o[255 & u]) : (u = u << 8 | u >>> 24, 
                                u = o[u >>> 24] << 24 | o[u >>> 16 & 255] << 16 | o[u >>> 8 & 255] << 8 | o[255 & u], 
                                u ^= h[a / r | 0] << 24), i[a] = i[a - r] ^ u;
                            }
                            for (var c = this._invKeySchedule = [], s = 0; s < n; s++) a = n - s, u = s % 4 ? i[a] : i[a - 4], 
                            c[s] = s < 4 || a <= 4 ? u : l[o[u >>> 24]] ^ f[o[u >>> 16 & 255]] ^ d[o[u >>> 8 & 255]] ^ p[o[255 & u]];
                        }
                    },
                    encryptBlock: function(e, t) {
                        this._doCryptBlock(e, t, this._keySchedule, a, u, c, s, o);
                    },
                    decryptBlock: function(e, t) {
                        var r = e[t + 1];
                        e[t + 1] = e[t + 3], e[t + 3] = r, this._doCryptBlock(e, t, this._invKeySchedule, l, f, d, p, i), 
                        r = e[t + 1], e[t + 1] = e[t + 3], e[t + 3] = r;
                    },
                    _doCryptBlock: function(e, t, r, n, o, i, a, u) {
                        for (var c = this._nRounds, s = e[t] ^ r[0], l = e[t + 1] ^ r[1], f = e[t + 2] ^ r[2], d = e[t + 3] ^ r[3], p = 4, h = 1; h < c; h++) {
                            var v = n[s >>> 24] ^ o[l >>> 16 & 255] ^ i[f >>> 8 & 255] ^ a[255 & d] ^ r[p++], y = n[l >>> 24] ^ o[f >>> 16 & 255] ^ i[d >>> 8 & 255] ^ a[255 & s] ^ r[p++], m = n[f >>> 24] ^ o[d >>> 16 & 255] ^ i[s >>> 8 & 255] ^ a[255 & l] ^ r[p++], g = n[d >>> 24] ^ o[s >>> 16 & 255] ^ i[l >>> 8 & 255] ^ a[255 & f] ^ r[p++];
                            s = v, l = y, f = m, d = g;
                        }
                        v = (u[s >>> 24] << 24 | u[l >>> 16 & 255] << 16 | u[f >>> 8 & 255] << 8 | u[255 & d]) ^ r[p++], 
                        y = (u[l >>> 24] << 24 | u[f >>> 16 & 255] << 16 | u[d >>> 8 & 255] << 8 | u[255 & s]) ^ r[p++], 
                        m = (u[f >>> 24] << 24 | u[d >>> 16 & 255] << 16 | u[s >>> 8 & 255] << 8 | u[255 & l]) ^ r[p++], 
                        g = (u[d >>> 24] << 24 | u[s >>> 16 & 255] << 16 | u[l >>> 8 & 255] << 8 | u[255 & f]) ^ r[p++], 
                        e[t] = v, e[t + 1] = y, e[t + 2] = m, e[t + 3] = g;
                    },
                    keySize: 8
                });
                t.AES = r._createHelper(v);
            }

// ==================== 元数据 ====================
// 此文件包含从 wx01c948dc098d7bc3 提取的 AES 算法实现
// 检测位置: 行 10329-10341
// 变量名: o
// 检测源: dynamic-iife
