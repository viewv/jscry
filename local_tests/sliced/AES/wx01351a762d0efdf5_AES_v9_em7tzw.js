/**
 * AES 算法实现
 * App ID: wx01351a762d0efdf5
 * 版本: v9
 * 代码哈希: em7tzw
 * 来源文件: output/wx01351a762d0efdf5/common/vendor.js
 * 检测类型: Inverse S-box
 * 置信度: 0.95
 * 函数名: anonymous
 * 行数: 53
 * 生成时间: 2025-07-05T13:17:10.519Z
 */

function() {
                var t = e, r = t.lib, n = r.BlockCipher, i = t.algo, o = [], a = [], s = [], c = [], u = [], f = [], d = [], h = [], l = [], p = [];
                (function() {
                    for (var e = [], t = 0; t < 256; t++) e[t] = t < 128 ? t << 1 : t << 1 ^ 283;
                    var r = 0, n = 0;
                    for (t = 0; t < 256; t++) {
                        var i = n ^ n << 1 ^ n << 2 ^ n << 3 ^ n << 4;
                        i = i >>> 8 ^ 255 & i ^ 99, o[r] = i, a[i] = r;
                        var b = e[r], y = e[b], g = e[y], m = 257 * e[i] ^ 16843008 * i;
                        s[r] = m << 24 | m >>> 8, c[r] = m << 16 | m >>> 16, u[r] = m << 8 | m >>> 24, f[r] = m;
                        m = 16843009 * g ^ 65537 * y ^ 257 * b ^ 16843008 * r;
                        d[i] = m << 24 | m >>> 8, h[i] = m << 16 | m >>> 16, l[i] = m << 8 | m >>> 24, p[i] = m, 
                        r ? (r = b ^ e[e[e[g ^ b]]], n ^= e[e[n]]) : r = n = 1;
                    }
                })();
                var b = [ 0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54 ], y = i.AES = n.extend({
                    _doReset: function() {
                        if (!this._nRounds || this._keyPriorReset !== this._key) {
                            for (var e = this._keyPriorReset = this._key, t = e.words, r = e.sigBytes / 4, n = this._nRounds = r + 6, i = 4 * (n + 1), a = this._keySchedule = [], s = 0; s < i; s++) s < r ? a[s] = t[s] : (f = a[s - 1], 
                            s % r ? r > 6 && s % r == 4 && (f = o[f >>> 24] << 24 | o[f >>> 16 & 255] << 16 | o[f >>> 8 & 255] << 8 | o[255 & f]) : (f = f << 8 | f >>> 24, 
                            f = o[f >>> 24] << 24 | o[f >>> 16 & 255] << 16 | o[f >>> 8 & 255] << 8 | o[255 & f], 
                            f ^= b[s / r | 0] << 24), a[s] = a[s - r] ^ f);
                            for (var c = this._invKeySchedule = [], u = 0; u < i; u++) {
                                s = i - u;
                                if (u % 4) var f = a[s]; else f = a[s - 4];
                                c[u] = u < 4 || s <= 4 ? f : d[o[f >>> 24]] ^ h[o[f >>> 16 & 255]] ^ l[o[f >>> 8 & 255]] ^ p[o[255 & f]];
                            }
                        }
                    },
                    encryptBlock: function(e, t) {
                        this._doCryptBlock(e, t, this._keySchedule, s, c, u, f, o);
                    },
                    decryptBlock: function(e, t) {
                        var r = e[t + 1];
                        e[t + 1] = e[t + 3], e[t + 3] = r, this._doCryptBlock(e, t, this._invKeySchedule, d, h, l, p, a);
                        r = e[t + 1];
                        e[t + 1] = e[t + 3], e[t + 3] = r;
                    },
                    _doCryptBlock: function(e, t, r, n, i, o, a, s) {
                        for (var c = this._nRounds, u = e[t] ^ r[0], f = e[t + 1] ^ r[1], d = e[t + 2] ^ r[2], h = e[t + 3] ^ r[3], l = 4, p = 1; p < c; p++) {
                            var b = n[u >>> 24] ^ i[f >>> 16 & 255] ^ o[d >>> 8 & 255] ^ a[255 & h] ^ r[l++], y = n[f >>> 24] ^ i[d >>> 16 & 255] ^ o[h >>> 8 & 255] ^ a[255 & u] ^ r[l++], g = n[d >>> 24] ^ i[h >>> 16 & 255] ^ o[u >>> 8 & 255] ^ a[255 & f] ^ r[l++], m = n[h >>> 24] ^ i[u >>> 16 & 255] ^ o[f >>> 8 & 255] ^ a[255 & d] ^ r[l++];
                            u = b, f = y, d = g, h = m;
                        }
                        b = (s[u >>> 24] << 24 | s[f >>> 16 & 255] << 16 | s[d >>> 8 & 255] << 8 | s[255 & h]) ^ r[l++], 
                        y = (s[f >>> 24] << 24 | s[d >>> 16 & 255] << 16 | s[h >>> 8 & 255] << 8 | s[255 & u]) ^ r[l++], 
                        g = (s[d >>> 24] << 24 | s[h >>> 16 & 255] << 16 | s[u >>> 8 & 255] << 8 | s[255 & f]) ^ r[l++], 
                        m = (s[h >>> 24] << 24 | s[u >>> 16 & 255] << 16 | s[f >>> 8 & 255] << 8 | s[255 & d]) ^ r[l++];
                        e[t] = b, e[t + 1] = y, e[t + 2] = g, e[t + 3] = m;
                    },
                    keySize: 8
                });
                t.AES = n._createHelper(y);
            }

// ==================== 元数据 ====================
// 此文件包含从 wx01351a762d0efdf5 提取的 AES 算法实现
// 检测位置: 行 1137-1149
// 变量名: a
// 检测源: dynamic-iife
