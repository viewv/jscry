/**
 * AES 算法实现
 * App ID: wx0611624cc959bd21
 * 版本: v46
 * 代码哈希: 8zbi8f
 * 来源文件: output/wx0611624cc959bd21/common/vendor.js
 * 检测类型: Round constants
 * 置信度: 0.8
 * 函数名: anonymous
 * 行数: 53
 * 生成时间: 2025-07-05T13:17:10.648Z
 */

function() {
                var t = e, r = t.lib, n = r.BlockCipher, i = t.algo, o = [], a = [], s = [], c = [], f = [], u = [], h = [], d = [], l = [], p = [];
                (function() {
                    for (var e = [], t = 0; t < 256; t++) e[t] = t < 128 ? t << 1 : t << 1 ^ 283;
                    var r = 0, n = 0;
                    for (t = 0; t < 256; t++) {
                        var i = n ^ n << 1 ^ n << 2 ^ n << 3 ^ n << 4;
                        i = i >>> 8 ^ 255 & i ^ 99, o[r] = i, a[i] = r;
                        var b = e[r], g = e[b], v = e[g], y = 257 * e[i] ^ 16843008 * i;
                        s[r] = y << 24 | y >>> 8, c[r] = y << 16 | y >>> 16, f[r] = y << 8 | y >>> 24, u[r] = y;
                        y = 16843009 * v ^ 65537 * g ^ 257 * b ^ 16843008 * r;
                        h[i] = y << 24 | y >>> 8, d[i] = y << 16 | y >>> 16, l[i] = y << 8 | y >>> 24, p[i] = y, 
                        r ? (r = b ^ e[e[e[v ^ b]]], n ^= e[e[n]]) : r = n = 1;
                    }
                })();
                var b = [ 0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54 ], g = i.AES = n.extend({
                    _doReset: function() {
                        if (!this._nRounds || this._keyPriorReset !== this._key) {
                            for (var e = this._keyPriorReset = this._key, t = e.words, r = e.sigBytes / 4, n = this._nRounds = r + 6, i = 4 * (n + 1), a = this._keySchedule = [], s = 0; s < i; s++) s < r ? a[s] = t[s] : (u = a[s - 1], 
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
                    encryptBlock: function(e, t) {
                        this._doCryptBlock(e, t, this._keySchedule, s, c, f, u, o);
                    },
                    decryptBlock: function(e, t) {
                        var r = e[t + 1];
                        e[t + 1] = e[t + 3], e[t + 3] = r, this._doCryptBlock(e, t, this._invKeySchedule, h, d, l, p, a);
                        r = e[t + 1];
                        e[t + 1] = e[t + 3], e[t + 3] = r;
                    },
                    _doCryptBlock: function(e, t, r, n, i, o, a, s) {
                        for (var c = this._nRounds, f = e[t] ^ r[0], u = e[t + 1] ^ r[1], h = e[t + 2] ^ r[2], d = e[t + 3] ^ r[3], l = 4, p = 1; p < c; p++) {
                            var b = n[f >>> 24] ^ i[u >>> 16 & 255] ^ o[h >>> 8 & 255] ^ a[255 & d] ^ r[l++], g = n[u >>> 24] ^ i[h >>> 16 & 255] ^ o[d >>> 8 & 255] ^ a[255 & f] ^ r[l++], v = n[h >>> 24] ^ i[d >>> 16 & 255] ^ o[f >>> 8 & 255] ^ a[255 & u] ^ r[l++], y = n[d >>> 24] ^ i[f >>> 16 & 255] ^ o[u >>> 8 & 255] ^ a[255 & h] ^ r[l++];
                            f = b, u = g, h = v, d = y;
                        }
                        b = (s[f >>> 24] << 24 | s[u >>> 16 & 255] << 16 | s[h >>> 8 & 255] << 8 | s[255 & d]) ^ r[l++], 
                        g = (s[u >>> 24] << 24 | s[h >>> 16 & 255] << 16 | s[d >>> 8 & 255] << 8 | s[255 & f]) ^ r[l++], 
                        v = (s[h >>> 24] << 24 | s[d >>> 16 & 255] << 16 | s[f >>> 8 & 255] << 8 | s[255 & u]) ^ r[l++], 
                        y = (s[d >>> 24] << 24 | s[f >>> 16 & 255] << 16 | s[u >>> 8 & 255] << 8 | s[255 & h]) ^ r[l++];
                        e[t] = b, e[t + 1] = g, e[t + 2] = v, e[t + 3] = y;
                    },
                    keySize: 8
                });
                t.AES = n._createHelper(g);
            }

// ==================== 元数据 ====================
// 此文件包含从 wx0611624cc959bd21 提取的 AES 算法实现
// 检测位置: 行 13856-13856
// 变量名: ___
// 检测源: static
