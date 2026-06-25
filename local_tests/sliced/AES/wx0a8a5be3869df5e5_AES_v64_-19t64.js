/**
 * AES 算法实现
 * App ID: wx0a8a5be3869df5e5
 * 版本: v64
 * 代码哈希: -19t64z
 * 来源文件: output/wx0a8a5be3869df5e5/common/vendor.js
 * 检测类型: Round constants
 * 置信度: 0.8
 * 函数名: anonymous
 * 行数: 52
 * 生成时间: 2025-07-05T13:17:10.704Z
 */

function() {
                    var e = t, a = e.lib.BlockCipher, r = e.algo, n = [], o = [], i = [], s = [], c = [], p = [], u = [], f = [], d = [], l = [];
                    !function() {
                        for (var t = [], e = 0; e < 256; e++) t[e] = e < 128 ? e << 1 : e << 1 ^ 283;
                        var a = 0, r = 0;
                        for (e = 0; e < 256; e++) {
                            var h = r ^ r << 1 ^ r << 2 ^ r << 3 ^ r << 4;
                            h = h >>> 8 ^ 255 & h ^ 99, n[a] = h, o[h] = a;
                            var y = t[a], g = t[y], v = t[g], m = 257 * t[h] ^ 16843008 * h;
                            i[a] = m << 24 | m >>> 8, s[a] = m << 16 | m >>> 16, c[a] = m << 8 | m >>> 24, p[a] = m;
                            m = 16843009 * v ^ 65537 * g ^ 257 * y ^ 16843008 * a;
                            u[h] = m << 24 | m >>> 8, f[h] = m << 16 | m >>> 16, d[h] = m << 8 | m >>> 24, l[h] = m, 
                            a ? (a = y ^ t[t[t[v ^ y]]], r ^= t[t[r]]) : a = r = 1;
                        }
                    }();
                    var h = [ 0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54 ], y = r.AES = a.extend({
                        _doReset: function() {
                            if (!this._nRounds || this._keyPriorReset !== this._key) {
                                for (var t = this._keyPriorReset = this._key, e = t.words, a = t.sigBytes / 4, r = 4 * ((this._nRounds = a + 6) + 1), o = this._keySchedule = [], i = 0; i < r; i++) i < a ? o[i] = e[i] : (p = o[i - 1], 
                                i % a ? a > 6 && i % a == 4 && (p = n[p >>> 24] << 24 | n[p >>> 16 & 255] << 16 | n[p >>> 8 & 255] << 8 | n[255 & p]) : (p = n[(p = p << 8 | p >>> 24) >>> 24] << 24 | n[p >>> 16 & 255] << 16 | n[p >>> 8 & 255] << 8 | n[255 & p], 
                                p ^= h[i / a | 0] << 24), o[i] = o[i - a] ^ p);
                                for (var s = this._invKeySchedule = [], c = 0; c < r; c++) {
                                    i = r - c;
                                    if (c % 4) var p = o[i]; else p = o[i - 4];
                                    s[c] = c < 4 || i <= 4 ? p : u[n[p >>> 24]] ^ f[n[p >>> 16 & 255]] ^ d[n[p >>> 8 & 255]] ^ l[n[255 & p]];
                                }
                            }
                        },
                        encryptBlock: function(t, e) {
                            this._doCryptBlock(t, e, this._keySchedule, i, s, c, p, n);
                        },
                        decryptBlock: function(t, e) {
                            var a = t[e + 1];
                            t[e + 1] = t[e + 3], t[e + 3] = a, this._doCryptBlock(t, e, this._invKeySchedule, u, f, d, l, o);
                            a = t[e + 1];
                            t[e + 1] = t[e + 3], t[e + 3] = a;
                        },
                        _doCryptBlock: function(t, e, a, r, n, o, i, s) {
                            for (var c = this._nRounds, p = t[e] ^ a[0], u = t[e + 1] ^ a[1], f = t[e + 2] ^ a[2], d = t[e + 3] ^ a[3], l = 4, h = 1; h < c; h++) {
                                var y = r[p >>> 24] ^ n[u >>> 16 & 255] ^ o[f >>> 8 & 255] ^ i[255 & d] ^ a[l++], g = r[u >>> 24] ^ n[f >>> 16 & 255] ^ o[d >>> 8 & 255] ^ i[255 & p] ^ a[l++], v = r[f >>> 24] ^ n[d >>> 16 & 255] ^ o[p >>> 8 & 255] ^ i[255 & u] ^ a[l++], m = r[d >>> 24] ^ n[p >>> 16 & 255] ^ o[u >>> 8 & 255] ^ i[255 & f] ^ a[l++];
                                p = y, u = g, f = v, d = m;
                            }
                            y = (s[p >>> 24] << 24 | s[u >>> 16 & 255] << 16 | s[f >>> 8 & 255] << 8 | s[255 & d]) ^ a[l++], 
                            g = (s[u >>> 24] << 24 | s[f >>> 16 & 255] << 16 | s[d >>> 8 & 255] << 8 | s[255 & p]) ^ a[l++], 
                            v = (s[f >>> 24] << 24 | s[d >>> 16 & 255] << 16 | s[p >>> 8 & 255] << 8 | s[255 & u]) ^ a[l++], 
                            m = (s[d >>> 24] << 24 | s[p >>> 16 & 255] << 16 | s[u >>> 8 & 255] << 8 | s[255 & f]) ^ a[l++];
                            t[e] = y, t[e + 1] = g, t[e + 2] = v, t[e + 3] = m;
                        },
                        keySize: 8
                    });
                    e.AES = a._createHelper(y);
                }

// ==================== 元数据 ====================
// 此文件包含从 wx0a8a5be3869df5e5 提取的 AES 算法实现
// 检测位置: 行 23271-23271
// 变量名: ___
// 检测源: static
