/**
 * AES 算法实现
 * App ID: wx06f1de32ab045cf6
 * 版本: v52
 * 代码哈希: -mwfduk
 * 来源文件: output/wx06f1de32ab045cf6/common/vendor.js
 * 检测类型: S-box
 * 置信度: 0.95
 * 函数名: anonymous
 * 行数: 55
 * 生成时间: 2025-07-05T13:17:10.661Z
 */

function() {
                var t = e, n = t.lib, r = n.BlockCipher, a = t.algo, i = [], s = [], o = [], u = [], d = [], c = [], l = [], _ = [], f = [], h = [];
                (function() {
                    for (var e = [], t = 0; t < 256; t++) e[t] = t < 128 ? t << 1 : t << 1 ^ 283;
                    var n = 0, r = 0;
                    for (t = 0; t < 256; t++) {
                        var a = r ^ r << 1 ^ r << 2 ^ r << 3 ^ r << 4;
                        a = a >>> 8 ^ 255 & a ^ 99, i[n] = a, s[a] = n;
                        var m = e[n], p = e[m], y = e[p], g = 257 * e[a] ^ 16843008 * a;
                        o[n] = g << 24 | g >>> 8, u[n] = g << 16 | g >>> 16, d[n] = g << 8 | g >>> 24, c[n] = g;
                        g = 16843009 * y ^ 65537 * p ^ 257 * m ^ 16843008 * n;
                        l[a] = g << 24 | g >>> 8, _[a] = g << 16 | g >>> 16, f[a] = g << 8 | g >>> 24, h[a] = g, 
                        n ? (n = m ^ e[e[e[y ^ m]]], r ^= e[e[r]]) : n = r = 1;
                    }
                })();
                var m = [ 0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54 ], p = a.AES = r.extend({
                    _doReset: function() {
                        if (!this._nRounds || this._keyPriorReset !== this._key) {
                            for (var e = this._keyPriorReset = this._key, t = e.words, n = e.sigBytes / 4, r = this._nRounds = n + 6, a = 4 * (r + 1), s = this._keySchedule = [], o = 0; o < a; o++) if (o < n) s[o] = t[o]; else {
                                var u = s[o - 1];
                                o % n ? n > 6 && o % n == 4 && (u = i[u >>> 24] << 24 | i[u >>> 16 & 255] << 16 | i[u >>> 8 & 255] << 8 | i[255 & u]) : (u = u << 8 | u >>> 24, 
                                u = i[u >>> 24] << 24 | i[u >>> 16 & 255] << 16 | i[u >>> 8 & 255] << 8 | i[255 & u], 
                                u ^= m[o / n | 0] << 24), s[o] = s[o - n] ^ u;
                            }
                            for (var d = this._invKeySchedule = [], c = 0; c < a; c++) {
                                o = a - c;
                                if (c % 4) u = s[o]; else u = s[o - 4];
                                d[c] = c < 4 || o <= 4 ? u : l[i[u >>> 24]] ^ _[i[u >>> 16 & 255]] ^ f[i[u >>> 8 & 255]] ^ h[i[255 & u]];
                            }
                        }
                    },
                    encryptBlock: function(e, t) {
                        this._doCryptBlock(e, t, this._keySchedule, o, u, d, c, i);
                    },
                    decryptBlock: function(e, t) {
                        var n = e[t + 1];
                        e[t + 1] = e[t + 3], e[t + 3] = n, this._doCryptBlock(e, t, this._invKeySchedule, l, _, f, h, s);
                        n = e[t + 1];
                        e[t + 1] = e[t + 3], e[t + 3] = n;
                    },
                    _doCryptBlock: function(e, t, n, r, a, i, s, o) {
                        for (var u = this._nRounds, d = e[t] ^ n[0], c = e[t + 1] ^ n[1], l = e[t + 2] ^ n[2], _ = e[t + 3] ^ n[3], f = 4, h = 1; h < u; h++) {
                            var m = r[d >>> 24] ^ a[c >>> 16 & 255] ^ i[l >>> 8 & 255] ^ s[255 & _] ^ n[f++], p = r[c >>> 24] ^ a[l >>> 16 & 255] ^ i[_ >>> 8 & 255] ^ s[255 & d] ^ n[f++], y = r[l >>> 24] ^ a[_ >>> 16 & 255] ^ i[d >>> 8 & 255] ^ s[255 & c] ^ n[f++], g = r[_ >>> 24] ^ a[d >>> 16 & 255] ^ i[c >>> 8 & 255] ^ s[255 & l] ^ n[f++];
                            d = m, c = p, l = y, _ = g;
                        }
                        m = (o[d >>> 24] << 24 | o[c >>> 16 & 255] << 16 | o[l >>> 8 & 255] << 8 | o[255 & _]) ^ n[f++], 
                        p = (o[c >>> 24] << 24 | o[l >>> 16 & 255] << 16 | o[_ >>> 8 & 255] << 8 | o[255 & d]) ^ n[f++], 
                        y = (o[l >>> 24] << 24 | o[_ >>> 16 & 255] << 16 | o[d >>> 8 & 255] << 8 | o[255 & c]) ^ n[f++], 
                        g = (o[_ >>> 24] << 24 | o[d >>> 16 & 255] << 16 | o[c >>> 8 & 255] << 8 | o[255 & l]) ^ n[f++];
                        e[t] = m, e[t + 1] = p, e[t + 2] = y, e[t + 3] = g;
                    },
                    keySize: 8
                });
                t.AES = r._createHelper(p);
            }

// ==================== 元数据 ====================
// 此文件包含从 wx06f1de32ab045cf6 提取的 AES 算法实现
// 检测位置: 行 20361-20373
// 变量名: i
// 检测源: dynamic-iife
