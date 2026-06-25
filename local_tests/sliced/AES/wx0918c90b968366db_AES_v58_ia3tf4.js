/**
 * AES 算法实现
 * App ID: wx0918c90b968366db
 * 版本: v58
 * 代码哈希: ia3tf4
 * 来源文件: output/wx0918c90b968366db/common/vendor.js
 * 检测类型: S-box
 * 置信度: 0.95
 * 函数名: anonymous
 * 行数: 59
 * 生成时间: 2025-07-05T13:17:10.680Z
 */

function() {
                var e = t, n = e.lib, r = n.BlockCipher, o = e.algo, i = [], a = [], s = [], c = [], u = [], l = [], f = [], h = [], p = [], d = [];
                !function() {
                    for (var t = [], e = 0; e < 256; e++) {
                        t[e] = e < 128 ? e << 1 : e << 1 ^ 283;
                    }
                    var n = 0, r = 0;
                    for (e = 0; e < 256; e++) {
                        var o = r ^ r << 1 ^ r << 2 ^ r << 3 ^ r << 4;
                        o = o >>> 8 ^ 255 & o ^ 99, i[n] = o, a[o] = n;
                        var Y = t[n], S = t[Y], Z = t[S], v = 257 * t[o] ^ 16843008 * o;
                        s[n] = v << 24 | v >>> 8, c[n] = v << 16 | v >>> 16, u[n] = v << 8 | v >>> 24, l[n] = v;
                        v = 16843009 * Z ^ 65537 * S ^ 257 * Y ^ 16843008 * n;
                        f[o] = v << 24 | v >>> 8, h[o] = v << 16 | v >>> 16, p[o] = v << 8 | v >>> 24, d[o] = v, 
                        n ? (n = Y ^ t[t[t[Z ^ Y]]], r ^= t[t[r]]) : n = r = 1;
                    }
                }();
                var Y = [ 0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54 ], S = o.AES = r.extend({
                    _doReset: function _doReset() {
                        if (!this._nRounds || this._keyPriorReset !== this._key) {
                            for (var t = this._keyPriorReset = this._key, e = t.words, n = t.sigBytes / 4, r = this._nRounds = n + 6, o = 4 * (r + 1), a = this._keySchedule = [], s = 0; s < o; s++) {
                                if (s < n) a[s] = e[s]; else {
                                    var c = a[s - 1];
                                    s % n ? n > 6 && s % n == 4 && (c = i[c >>> 24] << 24 | i[c >>> 16 & 255] << 16 | i[c >>> 8 & 255] << 8 | i[255 & c]) : (c = c << 8 | c >>> 24, 
                                    c = i[c >>> 24] << 24 | i[c >>> 16 & 255] << 16 | i[c >>> 8 & 255] << 8 | i[255 & c], 
                                    c ^= Y[s / n | 0] << 24), a[s] = a[s - n] ^ c;
                                }
                            }
                            for (var u = this._invKeySchedule = [], l = 0; l < o; l++) {
                                s = o - l;
                                if (l % 4) c = a[s]; else c = a[s - 4];
                                u[l] = l < 4 || s <= 4 ? c : f[i[c >>> 24]] ^ h[i[c >>> 16 & 255]] ^ p[i[c >>> 8 & 255]] ^ d[i[255 & c]];
                            }
                        }
                    },
                    encryptBlock: function encryptBlock(t, e) {
                        this._doCryptBlock(t, e, this._keySchedule, s, c, u, l, i);
                    },
                    decryptBlock: function decryptBlock(t, e) {
                        var n = t[e + 1];
                        t[e + 1] = t[e + 3], t[e + 3] = n, this._doCryptBlock(t, e, this._invKeySchedule, f, h, p, d, a);
                        n = t[e + 1];
                        t[e + 1] = t[e + 3], t[e + 3] = n;
                    },
                    _doCryptBlock: function _doCryptBlock(t, e, n, r, o, i, a, s) {
                        for (var c = this._nRounds, u = t[e] ^ n[0], l = t[e + 1] ^ n[1], f = t[e + 2] ^ n[2], h = t[e + 3] ^ n[3], p = 4, d = 1; d < c; d++) {
                            var Y = r[u >>> 24] ^ o[l >>> 16 & 255] ^ i[f >>> 8 & 255] ^ a[255 & h] ^ n[p++], S = r[l >>> 24] ^ o[f >>> 16 & 255] ^ i[h >>> 8 & 255] ^ a[255 & u] ^ n[p++], Z = r[f >>> 24] ^ o[h >>> 16 & 255] ^ i[u >>> 8 & 255] ^ a[255 & l] ^ n[p++], v = r[h >>> 24] ^ o[u >>> 16 & 255] ^ i[l >>> 8 & 255] ^ a[255 & f] ^ n[p++];
                            u = Y, l = S, f = Z, h = v;
                        }
                        Y = (s[u >>> 24] << 24 | s[l >>> 16 & 255] << 16 | s[f >>> 8 & 255] << 8 | s[255 & h]) ^ n[p++], 
                        S = (s[l >>> 24] << 24 | s[f >>> 16 & 255] << 16 | s[h >>> 8 & 255] << 8 | s[255 & u]) ^ n[p++], 
                        Z = (s[f >>> 24] << 24 | s[h >>> 16 & 255] << 16 | s[u >>> 8 & 255] << 8 | s[255 & l]) ^ n[p++], 
                        v = (s[h >>> 24] << 24 | s[u >>> 16 & 255] << 16 | s[l >>> 8 & 255] << 8 | s[255 & f]) ^ n[p++];
                        t[e] = Y, t[e + 1] = S, t[e + 2] = Z, t[e + 3] = v;
                    },
                    keySize: 8
                });
                e.AES = r._createHelper(S);
            }

// ==================== 元数据 ====================
// 此文件包含从 wx0918c90b968366db 提取的 AES 算法实现
// 检测位置: 行 8794-8808
// 变量名: i
// 检测源: dynamic-iife
