/**
 * AES 算法实现
 * App ID: wx084dc96bc462831d
 * 版本: v56
 * 代码哈希: -5kcvya
 * 来源文件: output/wx084dc96bc462831d/common/main.js
 * 检测类型: S-box
 * 置信度: 0.95
 * 函数名: anonymous
 * 行数: 50
 * 生成时间: 2025-07-05T13:17:10.669Z
 */

function() {
                var t = e, o = t.lib.BlockCipher, n = t.algo, r = [], i = [], s = [], a = [], c = [], u = [], l = [], p = [], d = [], f = [];
                !function() {
                    for (var e = [], t = 0; t < 256; t++) e[t] = t < 128 ? t << 1 : t << 1 ^ 283;
                    for (var o = 0, n = 0, t = 0; t < 256; t++) {
                        var h = n ^ n << 1 ^ n << 2 ^ n << 3 ^ n << 4;
                        h = h >>> 8 ^ 255 & h ^ 99, r[o] = h, i[h] = o;
                        var m = e[o], b = e[m], _ = e[b], g = 257 * e[h] ^ 16843008 * h;
                        s[o] = g << 24 | g >>> 8, a[o] = g << 16 | g >>> 16, c[o] = g << 8 | g >>> 24, u[o] = g;
                        g = 16843009 * _ ^ 65537 * b ^ 257 * m ^ 16843008 * o;
                        l[h] = g << 24 | g >>> 8, p[h] = g << 16 | g >>> 16, d[h] = g << 8 | g >>> 24, f[h] = g, 
                        o ? (o = m ^ e[e[e[_ ^ m]]], n ^= e[e[n]]) : o = n = 1;
                    }
                }();
                var h = [ 0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54 ], m = n.AES = o.extend({
                    _doReset: function() {
                        if (!this._nRounds || this._keyPriorReset !== this._key) {
                            for (var e = this._keyPriorReset = this._key, t = e.words, o = e.sigBytes / 4, n = 4 * ((this._nRounds = o + 6) + 1), i = this._keySchedule = [], s = 0; s < n; s++) if (s < o) i[s] = t[s]; else {
                                u = i[s - 1];
                                s % o ? o > 6 && s % o == 4 && (u = r[u >>> 24] << 24 | r[u >>> 16 & 255] << 16 | r[u >>> 8 & 255] << 8 | r[255 & u]) : (u = r[(u = u << 8 | u >>> 24) >>> 24] << 24 | r[u >>> 16 & 255] << 16 | r[u >>> 8 & 255] << 8 | r[255 & u], 
                                u ^= h[s / o | 0] << 24), i[s] = i[s - o] ^ u;
                            }
                            for (var a = this._invKeySchedule = [], c = 0; c < n; c++) {
                                s = n - c;
                                if (c % 4) u = i[s]; else var u = i[s - 4];
                                a[c] = c < 4 || s <= 4 ? u : l[r[u >>> 24]] ^ p[r[u >>> 16 & 255]] ^ d[r[u >>> 8 & 255]] ^ f[r[255 & u]];
                            }
                        }
                    },
                    encryptBlock: function(e, t) {
                        this._doCryptBlock(e, t, this._keySchedule, s, a, c, u, r);
                    },
                    decryptBlock: function(e, t) {
                        o = e[t + 1];
                        e[t + 1] = e[t + 3], e[t + 3] = o, this._doCryptBlock(e, t, this._invKeySchedule, l, p, d, f, i);
                        var o = e[t + 1];
                        e[t + 1] = e[t + 3], e[t + 3] = o;
                    },
                    _doCryptBlock: function(e, t, o, n, r, i, s, a) {
                        for (var c = this._nRounds, u = e[t] ^ o[0], l = e[t + 1] ^ o[1], p = e[t + 2] ^ o[2], d = e[t + 3] ^ o[3], f = 4, h = 1; h < c; h++) {
                            var m = n[u >>> 24] ^ r[l >>> 16 & 255] ^ i[p >>> 8 & 255] ^ s[255 & d] ^ o[f++], b = n[l >>> 24] ^ r[p >>> 16 & 255] ^ i[d >>> 8 & 255] ^ s[255 & u] ^ o[f++], _ = n[p >>> 24] ^ r[d >>> 16 & 255] ^ i[u >>> 8 & 255] ^ s[255 & l] ^ o[f++], g = n[d >>> 24] ^ r[u >>> 16 & 255] ^ i[l >>> 8 & 255] ^ s[255 & p] ^ o[f++];
                            u = m, l = b, p = _, d = g;
                        }
                        var m = (a[u >>> 24] << 24 | a[l >>> 16 & 255] << 16 | a[p >>> 8 & 255] << 8 | a[255 & d]) ^ o[f++], b = (a[l >>> 24] << 24 | a[p >>> 16 & 255] << 16 | a[d >>> 8 & 255] << 8 | a[255 & u]) ^ o[f++], _ = (a[p >>> 24] << 24 | a[d >>> 16 & 255] << 16 | a[u >>> 8 & 255] << 8 | a[255 & l]) ^ o[f++], g = (a[d >>> 24] << 24 | a[u >>> 16 & 255] << 16 | a[l >>> 8 & 255] << 8 | a[255 & p]) ^ o[f++];
                        e[t] = m, e[t + 1] = b, e[t + 2] = _, e[t + 3] = g;
                    },
                    keySize: 8
                });
                t.AES = o._createHelper(m);
            }

// ==================== 元数据 ====================
// 此文件包含从 wx084dc96bc462831d 提取的 AES 算法实现
// 检测位置: 行 587-598
// 变量名: r
// 检测源: dynamic-iife
