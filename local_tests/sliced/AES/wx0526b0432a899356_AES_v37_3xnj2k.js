/**
 * AES 算法实现
 * App ID: wx0526b0432a899356
 * 版本: v37
 * 代码哈希: 3xnj2k
 * 来源文件: output/wx0526b0432a899356/common/vendor.js
 * 检测类型: Round constants
 * 置信度: 0.8
 * 函数名: anonymous
 * 行数: 50
 * 生成时间: 2025-07-05T13:17:10.623Z
 */

function() {
                var t = _, e = t.lib, r = e.BlockCipher, n = t.algo, u = [], f = [], h = [], d = [], l = [], p = [], b = [], v = [], g = [], y = [];
                !function() {
                    for (var t = [], e = 0; e < 256; e++) t[e] = e < 128 ? e << 1 : e << 1 ^ 283;
                    var r = 0, n = 0;
                    for (e = 0; e < 256; e++) {
                        var i = n ^ n << 1 ^ n << 2 ^ n << 3 ^ n << 4;
                        i = i >>> 8 ^ 255 & i ^ 99, u[r] = i, f[i] = r;
                        var o = t[r], a = t[o], s = t[a], c = 257 * t[i] ^ 16843008 * i;
                        h[r] = c << 24 | c >>> 8, d[r] = c << 16 | c >>> 16, l[r] = c << 8 | c >>> 24, p[r] = c, 
                        c = 16843009 * s ^ 65537 * a ^ 257 * o ^ 16843008 * r, b[i] = c << 24 | c >>> 8, 
                        v[i] = c << 16 | c >>> 16, g[i] = c << 8 | c >>> 24, y[i] = c, r ? (r = o ^ t[t[t[s ^ o]]], 
                        n ^= t[t[n]]) : r = n = 1;
                    }
                }();
                var m = [ 0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54 ], i = n.AES = r.extend({
                    _doReset: function() {
                        if (!this._nRounds || this._keyPriorReset !== this._key) {
                            for (var t = this._keyPriorReset = this._key, e = t.words, r = t.sigBytes / 4, n = this._nRounds = r + 6, i = 4 * (n + 1), o = this._keySchedule = [], a = 0; a < i; a++) a < r ? o[a] = e[a] : (f = o[a - 1], 
                            a % r ? 6 < r && a % r == 4 && (f = u[f >>> 24] << 24 | u[f >>> 16 & 255] << 16 | u[f >>> 8 & 255] << 8 | u[255 & f]) : (f = u[(f = f << 8 | f >>> 24) >>> 24] << 24 | u[f >>> 16 & 255] << 16 | u[f >>> 8 & 255] << 8 | u[255 & f], 
                            f ^= m[a / r | 0] << 24), o[a] = o[a - r] ^ f);
                            for (var s = this._invKeySchedule = [], c = 0; c < i; c++) {
                                if (a = i - c, c % 4) var f = o[a]; else f = o[a - 4];
                                s[c] = c < 4 || a <= 4 ? f : b[u[f >>> 24]] ^ v[u[f >>> 16 & 255]] ^ g[u[f >>> 8 & 255]] ^ y[u[255 & f]];
                            }
                        }
                    },
                    encryptBlock: function(t, e) {
                        this._doCryptBlock(t, e, this._keySchedule, h, d, l, p, u);
                    },
                    decryptBlock: function(t, e) {
                        var r = t[e + 1];
                        t[e + 1] = t[e + 3], t[e + 3] = r, this._doCryptBlock(t, e, this._invKeySchedule, b, v, g, y, f), 
                        r = t[e + 1], t[e + 1] = t[e + 3], t[e + 3] = r;
                    },
                    _doCryptBlock: function(t, e, r, n, i, o, a, s) {
                        for (var c = this._nRounds, f = t[e] ^ r[0], u = t[e + 1] ^ r[1], h = t[e + 2] ^ r[2], d = t[e + 3] ^ r[3], l = 4, p = 1; p < c; p++) {
                            var b = n[f >>> 24] ^ i[u >>> 16 & 255] ^ o[h >>> 8 & 255] ^ a[255 & d] ^ r[l++], v = n[u >>> 24] ^ i[h >>> 16 & 255] ^ o[d >>> 8 & 255] ^ a[255 & f] ^ r[l++], g = n[h >>> 24] ^ i[d >>> 16 & 255] ^ o[f >>> 8 & 255] ^ a[255 & u] ^ r[l++], y = n[d >>> 24] ^ i[f >>> 16 & 255] ^ o[u >>> 8 & 255] ^ a[255 & h] ^ r[l++];
                            f = b, u = v, h = g, d = y;
                        }
                        b = (s[f >>> 24] << 24 | s[u >>> 16 & 255] << 16 | s[h >>> 8 & 255] << 8 | s[255 & d]) ^ r[l++], 
                        v = (s[u >>> 24] << 24 | s[h >>> 16 & 255] << 16 | s[d >>> 8 & 255] << 8 | s[255 & f]) ^ r[l++], 
                        g = (s[h >>> 24] << 24 | s[d >>> 16 & 255] << 16 | s[f >>> 8 & 255] << 8 | s[255 & u]) ^ r[l++], 
                        y = (s[d >>> 24] << 24 | s[f >>> 16 & 255] << 16 | s[u >>> 8 & 255] << 8 | s[255 & h]) ^ r[l++], 
                        t[e] = b, t[e + 1] = v, t[e + 2] = g, t[e + 3] = y;
                    },
                    keySize: 8
                });
                t.AES = r._createHelper(i);
            }

// ==================== 元数据 ====================
// 此文件包含从 wx0526b0432a899356 提取的 AES 算法实现
// 检测位置: 行 11202-11202
// 变量名: ___
// 检测源: static
