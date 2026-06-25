/**
 * AES 算法实现
 * App ID: wx05f54f79939f91b3
 * 版本: v43
 * 代码哈希: -b87qk2
 * 来源文件: output/wx05f54f79939f91b3/common/vendor.js
 * 检测类型: S-box
 * 置信度: 0.95
 * 函数名: anonymous
 * 行数: 50
 * 生成时间: 2025-07-05T13:17:10.644Z
 */

function() {
                    var t = n, e = t.lib.BlockCipher, r = t.algo, i = [], o = [], a = [], s = [], c = [], u = [], l = [], f = [], d = [], h = [];
                    !function() {
                        for (var t = [], e = 0; e < 256; e++) t[e] = e < 128 ? e << 1 : e << 1 ^ 283;
                        var n = 0, r = 0;
                        for (e = 0; e < 256; e++) {
                            var p = r ^ r << 1 ^ r << 2 ^ r << 3 ^ r << 4;
                            p = p >>> 8 ^ 255 & p ^ 99, i[n] = p, o[p] = n;
                            var v = t[n], g = t[v], m = t[g], _ = 257 * t[p] ^ 16843008 * p;
                            a[n] = _ << 24 | _ >>> 8, s[n] = _ << 16 | _ >>> 16, c[n] = _ << 8 | _ >>> 24, u[n] = _, 
                            _ = 16843009 * m ^ 65537 * g ^ 257 * v ^ 16843008 * n, l[p] = _ << 24 | _ >>> 8, 
                            f[p] = _ << 16 | _ >>> 16, d[p] = _ << 8 | _ >>> 24, h[p] = _, n ? (n = v ^ t[t[t[m ^ v]]], 
                            r ^= t[t[r]]) : n = r = 1;
                        }
                    }();
                    var p = [ 0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54 ], v = r.AES = e.extend({
                        _doReset: function() {
                            if (!this._nRounds || this._keyPriorReset !== this._key) {
                                for (var t = this._keyPriorReset = this._key, e = t.words, n = t.sigBytes / 4, r = 4 * ((this._nRounds = n + 6) + 1), o = this._keySchedule = [], a = 0; a < r; a++) if (a < n) o[a] = e[a]; else {
                                    var s = o[a - 1];
                                    a % n ? n > 6 && a % n == 4 && (s = i[s >>> 24] << 24 | i[s >>> 16 & 255] << 16 | i[s >>> 8 & 255] << 8 | i[255 & s]) : (s = i[(s = s << 8 | s >>> 24) >>> 24] << 24 | i[s >>> 16 & 255] << 16 | i[s >>> 8 & 255] << 8 | i[255 & s], 
                                    s ^= p[a / n | 0] << 24), o[a] = o[a - n] ^ s;
                                }
                                for (var c = this._invKeySchedule = [], u = 0; u < r; u++) a = r - u, s = u % 4 ? o[a] : o[a - 4], 
                                c[u] = u < 4 || a <= 4 ? s : l[i[s >>> 24]] ^ f[i[s >>> 16 & 255]] ^ d[i[s >>> 8 & 255]] ^ h[i[255 & s]];
                            }
                        },
                        encryptBlock: function(t, e) {
                            this._doCryptBlock(t, e, this._keySchedule, a, s, c, u, i);
                        },
                        decryptBlock: function(t, e) {
                            var n = t[e + 1];
                            t[e + 1] = t[e + 3], t[e + 3] = n, this._doCryptBlock(t, e, this._invKeySchedule, l, f, d, h, o), 
                            n = t[e + 1], t[e + 1] = t[e + 3], t[e + 3] = n;
                        },
                        _doCryptBlock: function(t, e, n, r, i, o, a, s) {
                            for (var c = this._nRounds, u = t[e] ^ n[0], l = t[e + 1] ^ n[1], f = t[e + 2] ^ n[2], d = t[e + 3] ^ n[3], h = 4, p = 1; p < c; p++) {
                                var v = r[u >>> 24] ^ i[l >>> 16 & 255] ^ o[f >>> 8 & 255] ^ a[255 & d] ^ n[h++], g = r[l >>> 24] ^ i[f >>> 16 & 255] ^ o[d >>> 8 & 255] ^ a[255 & u] ^ n[h++], m = r[f >>> 24] ^ i[d >>> 16 & 255] ^ o[u >>> 8 & 255] ^ a[255 & l] ^ n[h++], _ = r[d >>> 24] ^ i[u >>> 16 & 255] ^ o[l >>> 8 & 255] ^ a[255 & f] ^ n[h++];
                                u = v, l = g, f = m, d = _;
                            }
                            v = (s[u >>> 24] << 24 | s[l >>> 16 & 255] << 16 | s[f >>> 8 & 255] << 8 | s[255 & d]) ^ n[h++], 
                            g = (s[l >>> 24] << 24 | s[f >>> 16 & 255] << 16 | s[d >>> 8 & 255] << 8 | s[255 & u]) ^ n[h++], 
                            m = (s[f >>> 24] << 24 | s[d >>> 16 & 255] << 16 | s[u >>> 8 & 255] << 8 | s[255 & l]) ^ n[h++], 
                            _ = (s[d >>> 24] << 24 | s[u >>> 16 & 255] << 16 | s[l >>> 8 & 255] << 8 | s[255 & f]) ^ n[h++], 
                            t[e] = v, t[e + 1] = g, t[e + 2] = m, t[e + 3] = _;
                        },
                        keySize: 8
                    });
                    t.AES = e._createHelper(v);
                }

// ==================== 元数据 ====================
// 此文件包含从 wx05f54f79939f91b3 提取的 AES 算法实现
// 检测位置: 行 5060-5072
// 变量名: i
// 检测源: dynamic-iife
