/**
 * AES 算法实现
 * App ID: wx02343c1ee5ea2b8a
 * 版本: v15
 * 代码哈希: -rw6wrq
 * 来源文件: output/wx02343c1ee5ea2b8a/common/vendor.js
 * 检测类型: S-box
 * 置信度: 0.95
 * 函数名: anonymous
 * 行数: 51
 * 生成时间: 2025-07-05T13:17:10.543Z
 */

function() {
                    var t = e, r = t.lib.BlockCipher, n = t.algo, i = [], o = [], a = [], f = [], s = [], c = [], u = [], h = [], d = [], l = [];
                    !function() {
                        for (var e = [], t = 0; t < 256; t++) e[t] = t < 128 ? t << 1 : t << 1 ^ 283;
                        var r = 0, n = 0;
                        for (t = 0; t < 256; t++) {
                            var p = n ^ n << 1 ^ n << 2 ^ n << 3 ^ n << 4;
                            p = p >>> 8 ^ 255 & p ^ 99, i[r] = p, o[p] = r;
                            var b = e[r], v = e[b], y = e[v], g = 257 * e[p] ^ 16843008 * p;
                            a[r] = g << 24 | g >>> 8, f[r] = g << 16 | g >>> 16, s[r] = g << 8 | g >>> 24, c[r] = g, 
                            g = 16843009 * y ^ 65537 * v ^ 257 * b ^ 16843008 * r, u[p] = g << 24 | g >>> 8, 
                            h[p] = g << 16 | g >>> 16, d[p] = g << 8 | g >>> 24, l[p] = g, r ? (r = b ^ e[e[e[y ^ b]]], 
                            n ^= e[e[n]]) : r = n = 1;
                        }
                    }();
                    var p = [ 0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54 ], b = n.AES = r.extend({
                        _doReset: function() {
                            if (!this._nRounds || this._keyPriorReset !== this._key) {
                                for (var e = this._keyPriorReset = this._key, t = e.words, r = e.sigBytes / 4, n = 4 * ((this._nRounds = r + 6) + 1), o = this._keySchedule = [], a = 0; a < n; a++) a < r ? o[a] = t[a] : (c = o[a - 1], 
                                a % r ? r > 6 && a % r == 4 && (c = i[c >>> 24] << 24 | i[c >>> 16 & 255] << 16 | i[c >>> 8 & 255] << 8 | i[255 & c]) : (c = c << 8 | c >>> 24, 
                                c = i[c >>> 24] << 24 | i[c >>> 16 & 255] << 16 | i[c >>> 8 & 255] << 8 | i[255 & c], 
                                c ^= p[a / r | 0] << 24), o[a] = o[a - r] ^ c);
                                for (var f = this._invKeySchedule = [], s = 0; s < n; s++) {
                                    if (a = n - s, s % 4) var c = o[a]; else c = o[a - 4];
                                    f[s] = s < 4 || a <= 4 ? c : u[i[c >>> 24]] ^ h[i[c >>> 16 & 255]] ^ d[i[c >>> 8 & 255]] ^ l[i[255 & c]];
                                }
                            }
                        },
                        encryptBlock: function(e, t) {
                            this._doCryptBlock(e, t, this._keySchedule, a, f, s, c, i);
                        },
                        decryptBlock: function(e, t) {
                            var r = e[t + 1];
                            e[t + 1] = e[t + 3], e[t + 3] = r, this._doCryptBlock(e, t, this._invKeySchedule, u, h, d, l, o), 
                            r = e[t + 1], e[t + 1] = e[t + 3], e[t + 3] = r;
                        },
                        _doCryptBlock: function(e, t, r, n, i, o, a, f) {
                            for (var s = this._nRounds, c = e[t] ^ r[0], u = e[t + 1] ^ r[1], h = e[t + 2] ^ r[2], d = e[t + 3] ^ r[3], l = 4, p = 1; p < s; p++) {
                                var b = n[c >>> 24] ^ i[u >>> 16 & 255] ^ o[h >>> 8 & 255] ^ a[255 & d] ^ r[l++], v = n[u >>> 24] ^ i[h >>> 16 & 255] ^ o[d >>> 8 & 255] ^ a[255 & c] ^ r[l++], y = n[h >>> 24] ^ i[d >>> 16 & 255] ^ o[c >>> 8 & 255] ^ a[255 & u] ^ r[l++], g = n[d >>> 24] ^ i[c >>> 16 & 255] ^ o[u >>> 8 & 255] ^ a[255 & h] ^ r[l++];
                                c = b, u = v, h = y, d = g;
                            }
                            b = (f[c >>> 24] << 24 | f[u >>> 16 & 255] << 16 | f[h >>> 8 & 255] << 8 | f[255 & d]) ^ r[l++], 
                            v = (f[u >>> 24] << 24 | f[h >>> 16 & 255] << 16 | f[d >>> 8 & 255] << 8 | f[255 & c]) ^ r[l++], 
                            y = (f[h >>> 24] << 24 | f[d >>> 16 & 255] << 16 | f[c >>> 8 & 255] << 8 | f[255 & u]) ^ r[l++], 
                            g = (f[d >>> 24] << 24 | f[c >>> 16 & 255] << 16 | f[u >>> 8 & 255] << 8 | f[255 & h]) ^ r[l++], 
                            e[t] = b, e[t + 1] = v, e[t + 2] = y, e[t + 3] = g;
                        },
                        keySize: 8
                    });
                    t.AES = r._createHelper(b);
                }

// ==================== 元数据 ====================
// 此文件包含从 wx02343c1ee5ea2b8a 提取的 AES 算法实现
// 检测位置: 行 1906-1918
// 变量名: i
// 检测源: dynamic-iife
