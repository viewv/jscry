/**
 * AES 算法实现
 * App ID: wx0a9e003b012f33db
 * 版本: v65
 * 代码哈希: -j0zxu9
 * 来源文件: output/wx0a9e003b012f33db/static/js/crypto-js.js
 * 检测类型: S-box
 * 置信度: 0.95
 * 函数名: anonymous
 * 行数: 50
 * 生成时间: 2025-07-05T13:17:10.707Z
 */

function() {
                var e = t, o = e.lib.BlockCipher, n = e.algo, r = [], i = [], s = [], c = [], a = [], u = [], f = [], d = [], p = [], l = [];
                !function() {
                    for (var t = [], e = 0; e < 256; e++) t[e] = e < 128 ? e << 1 : e << 1 ^ 283;
                    for (var o = 0, n = 0, e = 0; e < 256; e++) {
                        var y = n ^ n << 1 ^ n << 2 ^ n << 3 ^ n << 4;
                        y = y >>> 8 ^ 255 & y ^ 99, r[o] = y, i[y] = o;
                        var h = t[o], _ = t[h], v = t[_], m = 257 * t[y] ^ 16843008 * y;
                        s[o] = m << 24 | m >>> 8, c[o] = m << 16 | m >>> 16, a[o] = m << 8 | m >>> 24, u[o] = m;
                        m = 16843009 * v ^ 65537 * _ ^ 257 * h ^ 16843008 * o;
                        f[y] = m << 24 | m >>> 8, d[y] = m << 16 | m >>> 16, p[y] = m << 8 | m >>> 24, l[y] = m, 
                        o ? (o = h ^ t[t[t[v ^ h]]], n ^= t[t[n]]) : o = n = 1;
                    }
                }();
                var y = [ 0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54 ], h = n.AES = o.extend({
                    _doReset: function() {
                        if (!this._nRounds || this._keyPriorReset !== this._key) {
                            for (var t = this._keyPriorReset = this._key, e = t.words, o = t.sigBytes / 4, n = 4 * ((this._nRounds = o + 6) + 1), i = this._keySchedule = [], s = 0; s < n; s++) if (s < o) i[s] = e[s]; else {
                                u = i[s - 1];
                                s % o ? o > 6 && s % o == 4 && (u = r[u >>> 24] << 24 | r[u >>> 16 & 255] << 16 | r[u >>> 8 & 255] << 8 | r[255 & u]) : (u = r[(u = u << 8 | u >>> 24) >>> 24] << 24 | r[u >>> 16 & 255] << 16 | r[u >>> 8 & 255] << 8 | r[255 & u], 
                                u ^= y[s / o | 0] << 24), i[s] = i[s - o] ^ u;
                            }
                            for (var c = this._invKeySchedule = [], a = 0; a < n; a++) {
                                s = n - a;
                                if (a % 4) u = i[s]; else var u = i[s - 4];
                                c[a] = a < 4 || s <= 4 ? u : f[r[u >>> 24]] ^ d[r[u >>> 16 & 255]] ^ p[r[u >>> 8 & 255]] ^ l[r[255 & u]];
                            }
                        }
                    },
                    encryptBlock: function(t, e) {
                        this._doCryptBlock(t, e, this._keySchedule, s, c, a, u, r);
                    },
                    decryptBlock: function(t, e) {
                        o = t[e + 1];
                        t[e + 1] = t[e + 3], t[e + 3] = o, this._doCryptBlock(t, e, this._invKeySchedule, f, d, p, l, i);
                        var o = t[e + 1];
                        t[e + 1] = t[e + 3], t[e + 3] = o;
                    },
                    _doCryptBlock: function(t, e, o, n, r, i, s, c) {
                        for (var a = this._nRounds, u = t[e] ^ o[0], f = t[e + 1] ^ o[1], d = t[e + 2] ^ o[2], p = t[e + 3] ^ o[3], l = 4, y = 1; y < a; y++) {
                            var h = n[u >>> 24] ^ r[f >>> 16 & 255] ^ i[d >>> 8 & 255] ^ s[255 & p] ^ o[l++], _ = n[f >>> 24] ^ r[d >>> 16 & 255] ^ i[p >>> 8 & 255] ^ s[255 & u] ^ o[l++], v = n[d >>> 24] ^ r[p >>> 16 & 255] ^ i[u >>> 8 & 255] ^ s[255 & f] ^ o[l++], m = n[p >>> 24] ^ r[u >>> 16 & 255] ^ i[f >>> 8 & 255] ^ s[255 & d] ^ o[l++];
                            u = h, f = _, d = v, p = m;
                        }
                        var h = (c[u >>> 24] << 24 | c[f >>> 16 & 255] << 16 | c[d >>> 8 & 255] << 8 | c[255 & p]) ^ o[l++], _ = (c[f >>> 24] << 24 | c[d >>> 16 & 255] << 16 | c[p >>> 8 & 255] << 8 | c[255 & u]) ^ o[l++], v = (c[d >>> 24] << 24 | c[p >>> 16 & 255] << 16 | c[u >>> 8 & 255] << 8 | c[255 & f]) ^ o[l++], m = (c[p >>> 24] << 24 | c[u >>> 16 & 255] << 16 | c[f >>> 8 & 255] << 8 | c[255 & d]) ^ o[l++];
                        t[e] = h, t[e + 1] = _, t[e + 2] = v, t[e + 3] = m;
                    },
                    keySize: 8
                });
                e.AES = o._createHelper(h);
            }

// ==================== 元数据 ====================
// 此文件包含从 wx0a9e003b012f33db 提取的 AES 算法实现
// 检测位置: 行 20-31
// 变量名: r
// 检测源: dynamic-iife
