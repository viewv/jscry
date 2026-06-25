/**
 * AES 算法实现
 * App ID: wx03bc60e1b437e39c
 * 版本: v27
 * 代码哈希: -myq4lw
 * 来源文件: output/wx03bc60e1b437e39c/common/vendor.js
 * 检测类型: Round constants
 * 置信度: 0.8
 * 函数名: anonymous
 * 行数: 53
 * 生成时间: 2025-07-05T13:17:10.607Z
 */

function() {
                    var t = e, n = t.lib, r = n.BlockCipher, i = t.algo, a = [], s = [], o = [], d = [], u = [], c = [], f = [], h = [], l = [], _ = [];
                    (function() {
                        for (var e = [], t = 0; t < 256; t++) e[t] = t < 128 ? t << 1 : t << 1 ^ 283;
                        var n = 0, r = 0;
                        for (t = 0; t < 256; t++) {
                            var i = r ^ r << 1 ^ r << 2 ^ r << 3 ^ r << 4;
                            i = i >>> 8 ^ 255 & i ^ 99, a[n] = i, s[i] = n;
                            var m = e[n], p = e[m], y = e[p], b = 257 * e[i] ^ 16843008 * i;
                            o[n] = b << 24 | b >>> 8, d[n] = b << 16 | b >>> 16, u[n] = b << 8 | b >>> 24, c[n] = b;
                            b = 16843009 * y ^ 65537 * p ^ 257 * m ^ 16843008 * n;
                            f[i] = b << 24 | b >>> 8, h[i] = b << 16 | b >>> 16, l[i] = b << 8 | b >>> 24, _[i] = b, 
                            n ? (n = m ^ e[e[e[y ^ m]]], r ^= e[e[r]]) : n = r = 1;
                        }
                    })();
                    var m = [ 0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54 ], p = i.AES = r.extend({
                        _doReset: function() {
                            if (!this._nRounds || this._keyPriorReset !== this._key) {
                                for (var e = this._keyPriorReset = this._key, t = e.words, n = e.sigBytes / 4, r = this._nRounds = n + 6, i = 4 * (r + 1), s = this._keySchedule = [], o = 0; o < i; o++) o < n ? s[o] = t[o] : (c = s[o - 1], 
                                o % n ? n > 6 && o % n == 4 && (c = a[c >>> 24] << 24 | a[c >>> 16 & 255] << 16 | a[c >>> 8 & 255] << 8 | a[255 & c]) : (c = c << 8 | c >>> 24, 
                                c = a[c >>> 24] << 24 | a[c >>> 16 & 255] << 16 | a[c >>> 8 & 255] << 8 | a[255 & c], 
                                c ^= m[o / n | 0] << 24), s[o] = s[o - n] ^ c);
                                for (var d = this._invKeySchedule = [], u = 0; u < i; u++) {
                                    o = i - u;
                                    if (u % 4) var c = s[o]; else c = s[o - 4];
                                    d[u] = u < 4 || o <= 4 ? c : f[a[c >>> 24]] ^ h[a[c >>> 16 & 255]] ^ l[a[c >>> 8 & 255]] ^ _[a[255 & c]];
                                }
                            }
                        },
                        encryptBlock: function(e, t) {
                            this._doCryptBlock(e, t, this._keySchedule, o, d, u, c, a);
                        },
                        decryptBlock: function(e, t) {
                            var n = e[t + 1];
                            e[t + 1] = e[t + 3], e[t + 3] = n, this._doCryptBlock(e, t, this._invKeySchedule, f, h, l, _, s);
                            n = e[t + 1];
                            e[t + 1] = e[t + 3], e[t + 3] = n;
                        },
                        _doCryptBlock: function(e, t, n, r, i, a, s, o) {
                            for (var d = this._nRounds, u = e[t] ^ n[0], c = e[t + 1] ^ n[1], f = e[t + 2] ^ n[2], h = e[t + 3] ^ n[3], l = 4, _ = 1; _ < d; _++) {
                                var m = r[u >>> 24] ^ i[c >>> 16 & 255] ^ a[f >>> 8 & 255] ^ s[255 & h] ^ n[l++], p = r[c >>> 24] ^ i[f >>> 16 & 255] ^ a[h >>> 8 & 255] ^ s[255 & u] ^ n[l++], y = r[f >>> 24] ^ i[h >>> 16 & 255] ^ a[u >>> 8 & 255] ^ s[255 & c] ^ n[l++], b = r[h >>> 24] ^ i[u >>> 16 & 255] ^ a[c >>> 8 & 255] ^ s[255 & f] ^ n[l++];
                                u = m, c = p, f = y, h = b;
                            }
                            m = (o[u >>> 24] << 24 | o[c >>> 16 & 255] << 16 | o[f >>> 8 & 255] << 8 | o[255 & h]) ^ n[l++], 
                            p = (o[c >>> 24] << 24 | o[f >>> 16 & 255] << 16 | o[h >>> 8 & 255] << 8 | o[255 & u]) ^ n[l++], 
                            y = (o[f >>> 24] << 24 | o[h >>> 16 & 255] << 16 | o[u >>> 8 & 255] << 8 | o[255 & c]) ^ n[l++], 
                            b = (o[h >>> 24] << 24 | o[u >>> 16 & 255] << 16 | o[c >>> 8 & 255] << 8 | o[255 & f]) ^ n[l++];
                            e[t] = m, e[t + 1] = p, e[t + 2] = y, e[t + 3] = b;
                        },
                        keySize: 8
                    });
                    t.AES = r._createHelper(p);
                }

// ==================== 元数据 ====================
// 此文件包含从 wx03bc60e1b437e39c 提取的 AES 算法实现
// 检测位置: 行 26602-26602
// 变量名: ___
// 检测源: static
