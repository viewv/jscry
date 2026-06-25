/**
 * AES 算法实现
 * App ID: wx06ef95130dd6a356
 * 版本: v50
 * 代码哈希: -5h5qek
 * 来源文件: output/wx06ef95130dd6a356/common/vendor.js
 * 检测类型: Inverse S-box
 * 置信度: 0.95
 * 函数名: anonymous
 * 行数: 53
 * 生成时间: 2025-07-05T13:17:10.659Z
 */

function() {
                var e = t, r = e.lib, n = r.BlockCipher, i = e.algo, o = [], a = [], f = [], s = [], c = [], u = [], h = [], d = [], l = [], p = [];
                (function() {
                    for (var t = [], e = 0; e < 256; e++) t[e] = e < 128 ? e << 1 : e << 1 ^ 283;
                    var r = 0, n = 0;
                    for (e = 0; e < 256; e++) {
                        var i = n ^ n << 1 ^ n << 2 ^ n << 3 ^ n << 4;
                        i = i >>> 8 ^ 255 & i ^ 99, o[r] = i, a[i] = r;
                        var b = t[r], v = t[b], y = t[v], g = 257 * t[i] ^ 16843008 * i;
                        f[r] = g << 24 | g >>> 8, s[r] = g << 16 | g >>> 16, c[r] = g << 8 | g >>> 24, u[r] = g;
                        g = 16843009 * y ^ 65537 * v ^ 257 * b ^ 16843008 * r;
                        h[i] = g << 24 | g >>> 8, d[i] = g << 16 | g >>> 16, l[i] = g << 8 | g >>> 24, p[i] = g, 
                        r ? (r = b ^ t[t[t[y ^ b]]], n ^= t[t[n]]) : r = n = 1;
                    }
                })();
                var b = [ 0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54 ], v = i.AES = n.extend({
                    _doReset: function() {
                        if (!this._nRounds || this._keyPriorReset !== this._key) {
                            for (var t = this._keyPriorReset = this._key, e = t.words, r = t.sigBytes / 4, n = this._nRounds = r + 6, i = 4 * (n + 1), a = this._keySchedule = [], f = 0; f < i; f++) f < r ? a[f] = e[f] : (u = a[f - 1], 
                            f % r ? r > 6 && f % r == 4 && (u = o[u >>> 24] << 24 | o[u >>> 16 & 255] << 16 | o[u >>> 8 & 255] << 8 | o[255 & u]) : (u = u << 8 | u >>> 24, 
                            u = o[u >>> 24] << 24 | o[u >>> 16 & 255] << 16 | o[u >>> 8 & 255] << 8 | o[255 & u], 
                            u ^= b[f / r | 0] << 24), a[f] = a[f - r] ^ u);
                            for (var s = this._invKeySchedule = [], c = 0; c < i; c++) {
                                f = i - c;
                                if (c % 4) var u = a[f]; else u = a[f - 4];
                                s[c] = c < 4 || f <= 4 ? u : h[o[u >>> 24]] ^ d[o[u >>> 16 & 255]] ^ l[o[u >>> 8 & 255]] ^ p[o[255 & u]];
                            }
                        }
                    },
                    encryptBlock: function(t, e) {
                        this._doCryptBlock(t, e, this._keySchedule, f, s, c, u, o);
                    },
                    decryptBlock: function(t, e) {
                        var r = t[e + 1];
                        t[e + 1] = t[e + 3], t[e + 3] = r, this._doCryptBlock(t, e, this._invKeySchedule, h, d, l, p, a);
                        r = t[e + 1];
                        t[e + 1] = t[e + 3], t[e + 3] = r;
                    },
                    _doCryptBlock: function(t, e, r, n, i, o, a, f) {
                        for (var s = this._nRounds, c = t[e] ^ r[0], u = t[e + 1] ^ r[1], h = t[e + 2] ^ r[2], d = t[e + 3] ^ r[3], l = 4, p = 1; p < s; p++) {
                            var b = n[c >>> 24] ^ i[u >>> 16 & 255] ^ o[h >>> 8 & 255] ^ a[255 & d] ^ r[l++], v = n[u >>> 24] ^ i[h >>> 16 & 255] ^ o[d >>> 8 & 255] ^ a[255 & c] ^ r[l++], y = n[h >>> 24] ^ i[d >>> 16 & 255] ^ o[c >>> 8 & 255] ^ a[255 & u] ^ r[l++], g = n[d >>> 24] ^ i[c >>> 16 & 255] ^ o[u >>> 8 & 255] ^ a[255 & h] ^ r[l++];
                            c = b, u = v, h = y, d = g;
                        }
                        b = (f[c >>> 24] << 24 | f[u >>> 16 & 255] << 16 | f[h >>> 8 & 255] << 8 | f[255 & d]) ^ r[l++], 
                        v = (f[u >>> 24] << 24 | f[h >>> 16 & 255] << 16 | f[d >>> 8 & 255] << 8 | f[255 & c]) ^ r[l++], 
                        y = (f[h >>> 24] << 24 | f[d >>> 16 & 255] << 16 | f[c >>> 8 & 255] << 8 | f[255 & u]) ^ r[l++], 
                        g = (f[d >>> 24] << 24 | f[c >>> 16 & 255] << 16 | f[u >>> 8 & 255] << 8 | f[255 & h]) ^ r[l++];
                        t[e] = b, t[e + 1] = v, t[e + 2] = y, t[e + 3] = g;
                    },
                    keySize: 8
                });
                e.AES = n._createHelper(v);
            }

// ==================== 元数据 ====================
// 此文件包含从 wx06ef95130dd6a356 提取的 AES 算法实现
// 检测位置: 行 12837-12849
// 变量名: a
// 检测源: dynamic-iife
