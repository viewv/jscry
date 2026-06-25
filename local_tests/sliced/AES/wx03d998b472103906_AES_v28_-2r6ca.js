/**
 * AES 算法实现
 * App ID: wx03d998b472103906
 * 版本: v28
 * 代码哈希: -2r6ca2
 * 来源文件: output/wx03d998b472103906/common/vendor.js
 * 检测类型: Inverse S-box
 * 置信度: 0.95
 * 函数名: anonymous
 * 行数: 53
 * 生成时间: 2025-07-05T13:17:10.609Z
 */

function() {
                var e = t, r = e.lib, n = r.BlockCipher, i = e.algo, o = [], a = [], s = [], c = [], f = [], u = [], h = [], d = [], l = [], p = [];
                (function() {
                    for (var t = [], e = 0; e < 256; e++) t[e] = e < 128 ? e << 1 : e << 1 ^ 283;
                    var r = 0, n = 0;
                    for (e = 0; e < 256; e++) {
                        var i = n ^ n << 1 ^ n << 2 ^ n << 3 ^ n << 4;
                        i = i >>> 8 ^ 255 & i ^ 99, o[r] = i, a[i] = r;
                        var b = t[r], v = t[b], g = t[v], y = 257 * t[i] ^ 16843008 * i;
                        s[r] = y << 24 | y >>> 8, c[r] = y << 16 | y >>> 16, f[r] = y << 8 | y >>> 24, u[r] = y;
                        y = 16843009 * g ^ 65537 * v ^ 257 * b ^ 16843008 * r;
                        h[i] = y << 24 | y >>> 8, d[i] = y << 16 | y >>> 16, l[i] = y << 8 | y >>> 24, p[i] = y, 
                        r ? (r = b ^ t[t[t[g ^ b]]], n ^= t[t[n]]) : r = n = 1;
                    }
                })();
                var b = [ 0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54 ], v = i.AES = n.extend({
                    _doReset: function() {
                        if (!this._nRounds || this._keyPriorReset !== this._key) {
                            for (var t = this._keyPriorReset = this._key, e = t.words, r = t.sigBytes / 4, n = this._nRounds = r + 6, i = 4 * (n + 1), a = this._keySchedule = [], s = 0; s < i; s++) s < r ? a[s] = e[s] : (u = a[s - 1], 
                            s % r ? r > 6 && s % r == 4 && (u = o[u >>> 24] << 24 | o[u >>> 16 & 255] << 16 | o[u >>> 8 & 255] << 8 | o[255 & u]) : (u = u << 8 | u >>> 24, 
                            u = o[u >>> 24] << 24 | o[u >>> 16 & 255] << 16 | o[u >>> 8 & 255] << 8 | o[255 & u], 
                            u ^= b[s / r | 0] << 24), a[s] = a[s - r] ^ u);
                            for (var c = this._invKeySchedule = [], f = 0; f < i; f++) {
                                s = i - f;
                                if (f % 4) var u = a[s]; else u = a[s - 4];
                                c[f] = f < 4 || s <= 4 ? u : h[o[u >>> 24]] ^ d[o[u >>> 16 & 255]] ^ l[o[u >>> 8 & 255]] ^ p[o[255 & u]];
                            }
                        }
                    },
                    encryptBlock: function(t, e) {
                        this._doCryptBlock(t, e, this._keySchedule, s, c, f, u, o);
                    },
                    decryptBlock: function(t, e) {
                        var r = t[e + 1];
                        t[e + 1] = t[e + 3], t[e + 3] = r, this._doCryptBlock(t, e, this._invKeySchedule, h, d, l, p, a);
                        r = t[e + 1];
                        t[e + 1] = t[e + 3], t[e + 3] = r;
                    },
                    _doCryptBlock: function(t, e, r, n, i, o, a, s) {
                        for (var c = this._nRounds, f = t[e] ^ r[0], u = t[e + 1] ^ r[1], h = t[e + 2] ^ r[2], d = t[e + 3] ^ r[3], l = 4, p = 1; p < c; p++) {
                            var b = n[f >>> 24] ^ i[u >>> 16 & 255] ^ o[h >>> 8 & 255] ^ a[255 & d] ^ r[l++], v = n[u >>> 24] ^ i[h >>> 16 & 255] ^ o[d >>> 8 & 255] ^ a[255 & f] ^ r[l++], g = n[h >>> 24] ^ i[d >>> 16 & 255] ^ o[f >>> 8 & 255] ^ a[255 & u] ^ r[l++], y = n[d >>> 24] ^ i[f >>> 16 & 255] ^ o[u >>> 8 & 255] ^ a[255 & h] ^ r[l++];
                            f = b, u = v, h = g, d = y;
                        }
                        b = (s[f >>> 24] << 24 | s[u >>> 16 & 255] << 16 | s[h >>> 8 & 255] << 8 | s[255 & d]) ^ r[l++], 
                        v = (s[u >>> 24] << 24 | s[h >>> 16 & 255] << 16 | s[d >>> 8 & 255] << 8 | s[255 & f]) ^ r[l++], 
                        g = (s[h >>> 24] << 24 | s[d >>> 16 & 255] << 16 | s[f >>> 8 & 255] << 8 | s[255 & u]) ^ r[l++], 
                        y = (s[d >>> 24] << 24 | s[f >>> 16 & 255] << 16 | s[u >>> 8 & 255] << 8 | s[255 & h]) ^ r[l++];
                        t[e] = b, t[e + 1] = v, t[e + 2] = g, t[e + 3] = y;
                    },
                    keySize: 8
                });
                e.AES = n._createHelper(v);
            }

// ==================== 元数据 ====================
// 此文件包含从 wx03d998b472103906 提取的 AES 算法实现
// 检测位置: 行 610-622
// 变量名: a
// 检测源: dynamic-iife
