/**
 * AES 算法实现
 * App ID: wx06b5c05a0ee5060e
 * 版本: v48
 * 代码哈希: -9jb4pc
 * 来源文件: output/wx06b5c05a0ee5060e/common/vendor.js
 * 检测类型: Round constants
 * 置信度: 0.8
 * 函数名: anonymous
 * 行数: 53
 * 生成时间: 2025-07-05T13:17:10.652Z
 */

function() {
                var e = t, r = e.lib, n = r.BlockCipher, i = e.algo, o = [], a = [], c = [], s = [], f = [], u = [], d = [], h = [], l = [], p = [];
                (function() {
                    for (var t = [], e = 0; e < 256; e++) t[e] = e < 128 ? e << 1 : e << 1 ^ 283;
                    var r = 0, n = 0;
                    for (e = 0; e < 256; e++) {
                        var i = n ^ n << 1 ^ n << 2 ^ n << 3 ^ n << 4;
                        i = i >>> 8 ^ 255 & i ^ 99, o[r] = i, a[i] = r;
                        var b = t[r], v = t[b], m = t[v], W = 257 * t[i] ^ 16843008 * i;
                        c[r] = W << 24 | W >>> 8, s[r] = W << 16 | W >>> 16, f[r] = W << 8 | W >>> 24, u[r] = W;
                        W = 16843009 * m ^ 65537 * v ^ 257 * b ^ 16843008 * r;
                        d[i] = W << 24 | W >>> 8, h[i] = W << 16 | W >>> 16, l[i] = W << 8 | W >>> 24, p[i] = W, 
                        r ? (r = b ^ t[t[t[m ^ b]]], n ^= t[t[n]]) : r = n = 1;
                    }
                })();
                var b = [ 0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54 ], v = i.AES = n.extend({
                    _doReset: function() {
                        if (!this._nRounds || this._keyPriorReset !== this._key) {
                            for (var t = this._keyPriorReset = this._key, e = t.words, r = t.sigBytes / 4, n = this._nRounds = r + 6, i = 4 * (n + 1), a = this._keySchedule = [], c = 0; c < i; c++) c < r ? a[c] = e[c] : (u = a[c - 1], 
                            c % r ? r > 6 && c % r == 4 && (u = o[u >>> 24] << 24 | o[u >>> 16 & 255] << 16 | o[u >>> 8 & 255] << 8 | o[255 & u]) : (u = u << 8 | u >>> 24, 
                            u = o[u >>> 24] << 24 | o[u >>> 16 & 255] << 16 | o[u >>> 8 & 255] << 8 | o[255 & u], 
                            u ^= b[c / r | 0] << 24), a[c] = a[c - r] ^ u);
                            for (var s = this._invKeySchedule = [], f = 0; f < i; f++) {
                                c = i - f;
                                if (f % 4) var u = a[c]; else u = a[c - 4];
                                s[f] = f < 4 || c <= 4 ? u : d[o[u >>> 24]] ^ h[o[u >>> 16 & 255]] ^ l[o[u >>> 8 & 255]] ^ p[o[255 & u]];
                            }
                        }
                    },
                    encryptBlock: function(t, e) {
                        this._doCryptBlock(t, e, this._keySchedule, c, s, f, u, o);
                    },
                    decryptBlock: function(t, e) {
                        var r = t[e + 1];
                        t[e + 1] = t[e + 3], t[e + 3] = r, this._doCryptBlock(t, e, this._invKeySchedule, d, h, l, p, a);
                        r = t[e + 1];
                        t[e + 1] = t[e + 3], t[e + 3] = r;
                    },
                    _doCryptBlock: function(t, e, r, n, i, o, a, c) {
                        for (var s = this._nRounds, f = t[e] ^ r[0], u = t[e + 1] ^ r[1], d = t[e + 2] ^ r[2], h = t[e + 3] ^ r[3], l = 4, p = 1; p < s; p++) {
                            var b = n[f >>> 24] ^ i[u >>> 16 & 255] ^ o[d >>> 8 & 255] ^ a[255 & h] ^ r[l++], v = n[u >>> 24] ^ i[d >>> 16 & 255] ^ o[h >>> 8 & 255] ^ a[255 & f] ^ r[l++], m = n[d >>> 24] ^ i[h >>> 16 & 255] ^ o[f >>> 8 & 255] ^ a[255 & u] ^ r[l++], W = n[h >>> 24] ^ i[f >>> 16 & 255] ^ o[u >>> 8 & 255] ^ a[255 & d] ^ r[l++];
                            f = b, u = v, d = m, h = W;
                        }
                        b = (c[f >>> 24] << 24 | c[u >>> 16 & 255] << 16 | c[d >>> 8 & 255] << 8 | c[255 & h]) ^ r[l++], 
                        v = (c[u >>> 24] << 24 | c[d >>> 16 & 255] << 16 | c[h >>> 8 & 255] << 8 | c[255 & f]) ^ r[l++], 
                        m = (c[d >>> 24] << 24 | c[h >>> 16 & 255] << 16 | c[f >>> 8 & 255] << 8 | c[255 & u]) ^ r[l++], 
                        W = (c[h >>> 24] << 24 | c[f >>> 16 & 255] << 16 | c[u >>> 8 & 255] << 8 | c[255 & d]) ^ r[l++];
                        t[e] = b, t[e + 1] = v, t[e + 2] = m, t[e + 3] = W;
                    },
                    keySize: 8
                });
                e.AES = n._createHelper(v);
            }

// ==================== 元数据 ====================
// 此文件包含从 wx06b5c05a0ee5060e 提取的 AES 算法实现
// 检测位置: 行 7630-7630
// 变量名: ___
// 检测源: static
