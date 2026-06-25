/**
 * AES 算法实现
 * App ID: wx032fe89cadaeebc5
 * 版本: v23
 * 代码哈希: -kirilk
 * 来源文件: output/wx032fe89cadaeebc5/common/vendor.js
 * 检测类型: Inverse S-box
 * 置信度: 0.95
 * 函数名: anonymous
 * 行数: 59
 * 生成时间: 2025-07-05T13:17:10.585Z
 */

function() {
                var e = t, n = e.lib, r = n.BlockCipher, i = e.algo, o = [], a = [], s = [], c = [], u = [], f = [], l = [], p = [], h = [], d = [];
                (function() {
                    for (var t = [], e = 0; e < 256; e++) {
                        t[e] = e < 128 ? e << 1 : e << 1 ^ 283;
                    }
                    var n = 0, r = 0;
                    for (e = 0; e < 256; e++) {
                        var i = r ^ r << 1 ^ r << 2 ^ r << 3 ^ r << 4;
                        i = i >>> 8 ^ 255 & i ^ 99, o[n] = i, a[i] = n;
                        var v = t[n], g = t[v], _ = t[g], y = 257 * t[i] ^ 16843008 * i;
                        s[n] = y << 24 | y >>> 8, c[n] = y << 16 | y >>> 16, u[n] = y << 8 | y >>> 24, f[n] = y;
                        y = 16843009 * _ ^ 65537 * g ^ 257 * v ^ 16843008 * n;
                        l[i] = y << 24 | y >>> 8, p[i] = y << 16 | y >>> 16, h[i] = y << 8 | y >>> 24, d[i] = y, 
                        n ? (n = v ^ t[t[t[_ ^ v]]], r ^= t[t[r]]) : n = r = 1;
                    }
                })();
                var v = [ 0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54 ], g = i.AES = r.extend({
                    _doReset: function _doReset() {
                        if (!this._nRounds || this._keyPriorReset !== this._key) {
                            for (var t = this._keyPriorReset = this._key, e = t.words, n = t.sigBytes / 4, r = this._nRounds = n + 6, i = 4 * (r + 1), a = this._keySchedule = [], s = 0; s < i; s++) {
                                if (s < n) a[s] = e[s]; else {
                                    var c = a[s - 1];
                                    s % n ? n > 6 && s % n == 4 && (c = o[c >>> 24] << 24 | o[c >>> 16 & 255] << 16 | o[c >>> 8 & 255] << 8 | o[255 & c]) : (c = c << 8 | c >>> 24, 
                                    c = o[c >>> 24] << 24 | o[c >>> 16 & 255] << 16 | o[c >>> 8 & 255] << 8 | o[255 & c], 
                                    c ^= v[s / n | 0] << 24), a[s] = a[s - n] ^ c;
                                }
                            }
                            for (var u = this._invKeySchedule = [], f = 0; f < i; f++) {
                                s = i - f;
                                if (f % 4) c = a[s]; else c = a[s - 4];
                                u[f] = f < 4 || s <= 4 ? c : l[o[c >>> 24]] ^ p[o[c >>> 16 & 255]] ^ h[o[c >>> 8 & 255]] ^ d[o[255 & c]];
                            }
                        }
                    },
                    encryptBlock: function encryptBlock(t, e) {
                        this._doCryptBlock(t, e, this._keySchedule, s, c, u, f, o);
                    },
                    decryptBlock: function decryptBlock(t, e) {
                        var n = t[e + 1];
                        t[e + 1] = t[e + 3], t[e + 3] = n, this._doCryptBlock(t, e, this._invKeySchedule, l, p, h, d, a);
                        n = t[e + 1];
                        t[e + 1] = t[e + 3], t[e + 3] = n;
                    },
                    _doCryptBlock: function _doCryptBlock(t, e, n, r, i, o, a, s) {
                        for (var c = this._nRounds, u = t[e] ^ n[0], f = t[e + 1] ^ n[1], l = t[e + 2] ^ n[2], p = t[e + 3] ^ n[3], h = 4, d = 1; d < c; d++) {
                            var v = r[u >>> 24] ^ i[f >>> 16 & 255] ^ o[l >>> 8 & 255] ^ a[255 & p] ^ n[h++], g = r[f >>> 24] ^ i[l >>> 16 & 255] ^ o[p >>> 8 & 255] ^ a[255 & u] ^ n[h++], _ = r[l >>> 24] ^ i[p >>> 16 & 255] ^ o[u >>> 8 & 255] ^ a[255 & f] ^ n[h++], y = r[p >>> 24] ^ i[u >>> 16 & 255] ^ o[f >>> 8 & 255] ^ a[255 & l] ^ n[h++];
                            u = v, f = g, l = _, p = y;
                        }
                        v = (s[u >>> 24] << 24 | s[f >>> 16 & 255] << 16 | s[l >>> 8 & 255] << 8 | s[255 & p]) ^ n[h++], 
                        g = (s[f >>> 24] << 24 | s[l >>> 16 & 255] << 16 | s[p >>> 8 & 255] << 8 | s[255 & u]) ^ n[h++], 
                        _ = (s[l >>> 24] << 24 | s[p >>> 16 & 255] << 16 | s[u >>> 8 & 255] << 8 | s[255 & f]) ^ n[h++], 
                        y = (s[p >>> 24] << 24 | s[u >>> 16 & 255] << 16 | s[f >>> 8 & 255] << 8 | s[255 & l]) ^ n[h++];
                        t[e] = v, t[e + 1] = g, t[e + 2] = _, t[e + 3] = y;
                    },
                    keySize: 8
                });
                e.AES = r._createHelper(g);
            }

// ==================== 元数据 ====================
// 此文件包含从 wx032fe89cadaeebc5 提取的 AES 算法实现
// 检测位置: 行 1072-1086
// 变量名: a
// 检测源: dynamic-iife
