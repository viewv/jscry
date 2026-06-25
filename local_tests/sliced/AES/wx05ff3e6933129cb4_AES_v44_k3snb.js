/**
 * AES 算法实现
 * App ID: wx05ff3e6933129cb4
 * 版本: v44
 * 代码哈希: k3snb
 * 来源文件: output/wx05ff3e6933129cb4/common/vendor.js
 * 检测类型: Inverse S-box
 * 置信度: 0.95
 * 函数名: anonymous
 * 行数: 51
 * 生成时间: 2025-07-05T13:17:10.645Z
 */

function() {
                var e = t, n = e.lib.BlockCipher, r = e.algo, i = [], o = [], a = [], s = [], c = [], u = [], l = [], f = [], h = [], d = [];
                !function() {
                    for (var t = [], e = 0; e < 256; e++) t[e] = e < 128 ? e << 1 : e << 1 ^ 283;
                    var n = 0, r = 0;
                    for (e = 0; e < 256; e++) {
                        var p = r ^ r << 1 ^ r << 2 ^ r << 3 ^ r << 4;
                        p = p >>> 8 ^ 255 & p ^ 99, i[n] = p, o[p] = n;
                        var g = t[n], v = t[g], y = t[v], m = 257 * t[p] ^ 16843008 * p;
                        a[n] = m << 24 | m >>> 8, s[n] = m << 16 | m >>> 16, c[n] = m << 8 | m >>> 24, u[n] = m, 
                        m = 16843009 * y ^ 65537 * v ^ 257 * g ^ 16843008 * n, l[p] = m << 24 | m >>> 8, 
                        f[p] = m << 16 | m >>> 16, h[p] = m << 8 | m >>> 24, d[p] = m, n ? (n = g ^ t[t[t[y ^ g]]], 
                        r ^= t[t[r]]) : n = r = 1;
                    }
                }();
                var p = [ 0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54 ], g = r.AES = n.extend({
                    _doReset: function() {
                        if (!this._nRounds || this._keyPriorReset !== this._key) {
                            for (var t = this._keyPriorReset = this._key, e = t.words, n = t.sigBytes / 4, r = 4 * ((this._nRounds = n + 6) + 1), o = this._keySchedule = [], a = 0; a < r; a++) if (a < n) o[a] = e[a]; else {
                                var s = o[a - 1];
                                a % n ? n > 6 && a % n == 4 && (s = i[s >>> 24] << 24 | i[s >>> 16 & 255] << 16 | i[s >>> 8 & 255] << 8 | i[255 & s]) : (s = s << 8 | s >>> 24, 
                                s = i[s >>> 24] << 24 | i[s >>> 16 & 255] << 16 | i[s >>> 8 & 255] << 8 | i[255 & s], 
                                s ^= p[a / n | 0] << 24), o[a] = o[a - n] ^ s;
                            }
                            for (var c = this._invKeySchedule = [], u = 0; u < r; u++) a = r - u, s = u % 4 ? o[a] : o[a - 4], 
                            c[u] = u < 4 || a <= 4 ? s : l[i[s >>> 24]] ^ f[i[s >>> 16 & 255]] ^ h[i[s >>> 8 & 255]] ^ d[i[255 & s]];
                        }
                    },
                    encryptBlock: function(t, e) {
                        this._doCryptBlock(t, e, this._keySchedule, a, s, c, u, i);
                    },
                    decryptBlock: function(t, e) {
                        var n = t[e + 1];
                        t[e + 1] = t[e + 3], t[e + 3] = n, this._doCryptBlock(t, e, this._invKeySchedule, l, f, h, d, o), 
                        n = t[e + 1], t[e + 1] = t[e + 3], t[e + 3] = n;
                    },
                    _doCryptBlock: function(t, e, n, r, i, o, a, s) {
                        for (var c = this._nRounds, u = t[e] ^ n[0], l = t[e + 1] ^ n[1], f = t[e + 2] ^ n[2], h = t[e + 3] ^ n[3], d = 4, p = 1; p < c; p++) {
                            var g = r[u >>> 24] ^ i[l >>> 16 & 255] ^ o[f >>> 8 & 255] ^ a[255 & h] ^ n[d++], v = r[l >>> 24] ^ i[f >>> 16 & 255] ^ o[h >>> 8 & 255] ^ a[255 & u] ^ n[d++], y = r[f >>> 24] ^ i[h >>> 16 & 255] ^ o[u >>> 8 & 255] ^ a[255 & l] ^ n[d++], m = r[h >>> 24] ^ i[u >>> 16 & 255] ^ o[l >>> 8 & 255] ^ a[255 & f] ^ n[d++];
                            u = g, l = v, f = y, h = m;
                        }
                        g = (s[u >>> 24] << 24 | s[l >>> 16 & 255] << 16 | s[f >>> 8 & 255] << 8 | s[255 & h]) ^ n[d++], 
                        v = (s[l >>> 24] << 24 | s[f >>> 16 & 255] << 16 | s[h >>> 8 & 255] << 8 | s[255 & u]) ^ n[d++], 
                        y = (s[f >>> 24] << 24 | s[h >>> 16 & 255] << 16 | s[u >>> 8 & 255] << 8 | s[255 & l]) ^ n[d++], 
                        m = (s[h >>> 24] << 24 | s[u >>> 16 & 255] << 16 | s[l >>> 8 & 255] << 8 | s[255 & f]) ^ n[d++], 
                        t[e] = g, t[e + 1] = v, t[e + 2] = y, t[e + 3] = m;
                    },
                    keySize: 8
                });
                e.AES = n._createHelper(g);
            }

// ==================== 元数据 ====================
// 此文件包含从 wx05ff3e6933129cb4 提取的 AES 算法实现
// 检测位置: 行 4020-4032
// 变量名: o
// 检测源: dynamic-iife
