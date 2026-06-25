/**
 * AES 算法实现
 * App ID: wx02b98b8ae5513413
 * 版本: v21
 * 代码哈希: e98hqw
 * 来源文件: output/wx02b98b8ae5513413/common/vendor.js
 * 检测类型: Round constants
 * 置信度: 0.8
 * 函数名: anonymous
 * 行数: 53
 * 生成时间: 2025-07-05T13:17:10.577Z
 */

function() {
                var t = e, a = t.lib, r = a.BlockCipher, n = t.algo, i = [], l = [], s = [], o = [], u = [], d = [], c = [], f = [], h = [], b = [];
                (function() {
                    for (var e = [], t = 0; t < 256; t++) e[t] = t < 128 ? t << 1 : t << 1 ^ 283;
                    var a = 0, r = 0;
                    for (t = 0; t < 256; t++) {
                        var n = r ^ r << 1 ^ r << 2 ^ r << 3 ^ r << 4;
                        n = n >>> 8 ^ 255 & n ^ 99, i[a] = n, l[n] = a;
                        var _ = e[a], v = e[_], p = e[v], m = 257 * e[n] ^ 16843008 * n;
                        s[a] = m << 24 | m >>> 8, o[a] = m << 16 | m >>> 16, u[a] = m << 8 | m >>> 24, d[a] = m;
                        m = 16843009 * p ^ 65537 * v ^ 257 * _ ^ 16843008 * a;
                        c[n] = m << 24 | m >>> 8, f[n] = m << 16 | m >>> 16, h[n] = m << 8 | m >>> 24, b[n] = m, 
                        a ? (a = _ ^ e[e[e[p ^ _]]], r ^= e[e[r]]) : a = r = 1;
                    }
                })();
                var _ = [ 0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54 ], v = n.AES = r.extend({
                    _doReset: function() {
                        if (!this._nRounds || this._keyPriorReset !== this._key) {
                            for (var e = this._keyPriorReset = this._key, t = e.words, a = e.sigBytes / 4, r = this._nRounds = a + 6, n = 4 * (r + 1), l = this._keySchedule = [], s = 0; s < n; s++) s < a ? l[s] = t[s] : (d = l[s - 1], 
                            s % a ? a > 6 && s % a == 4 && (d = i[d >>> 24] << 24 | i[d >>> 16 & 255] << 16 | i[d >>> 8 & 255] << 8 | i[255 & d]) : (d = d << 8 | d >>> 24, 
                            d = i[d >>> 24] << 24 | i[d >>> 16 & 255] << 16 | i[d >>> 8 & 255] << 8 | i[255 & d], 
                            d ^= _[s / a | 0] << 24), l[s] = l[s - a] ^ d);
                            for (var o = this._invKeySchedule = [], u = 0; u < n; u++) {
                                s = n - u;
                                if (u % 4) var d = l[s]; else d = l[s - 4];
                                o[u] = u < 4 || s <= 4 ? d : c[i[d >>> 24]] ^ f[i[d >>> 16 & 255]] ^ h[i[d >>> 8 & 255]] ^ b[i[255 & d]];
                            }
                        }
                    },
                    encryptBlock: function(e, t) {
                        this._doCryptBlock(e, t, this._keySchedule, s, o, u, d, i);
                    },
                    decryptBlock: function(e, t) {
                        var a = e[t + 1];
                        e[t + 1] = e[t + 3], e[t + 3] = a, this._doCryptBlock(e, t, this._invKeySchedule, c, f, h, b, l);
                        a = e[t + 1];
                        e[t + 1] = e[t + 3], e[t + 3] = a;
                    },
                    _doCryptBlock: function(e, t, a, r, n, i, l, s) {
                        for (var o = this._nRounds, u = e[t] ^ a[0], d = e[t + 1] ^ a[1], c = e[t + 2] ^ a[2], f = e[t + 3] ^ a[3], h = 4, b = 1; b < o; b++) {
                            var _ = r[u >>> 24] ^ n[d >>> 16 & 255] ^ i[c >>> 8 & 255] ^ l[255 & f] ^ a[h++], v = r[d >>> 24] ^ n[c >>> 16 & 255] ^ i[f >>> 8 & 255] ^ l[255 & u] ^ a[h++], p = r[c >>> 24] ^ n[f >>> 16 & 255] ^ i[u >>> 8 & 255] ^ l[255 & d] ^ a[h++], m = r[f >>> 24] ^ n[u >>> 16 & 255] ^ i[d >>> 8 & 255] ^ l[255 & c] ^ a[h++];
                            u = _, d = v, c = p, f = m;
                        }
                        _ = (s[u >>> 24] << 24 | s[d >>> 16 & 255] << 16 | s[c >>> 8 & 255] << 8 | s[255 & f]) ^ a[h++], 
                        v = (s[d >>> 24] << 24 | s[c >>> 16 & 255] << 16 | s[f >>> 8 & 255] << 8 | s[255 & u]) ^ a[h++], 
                        p = (s[c >>> 24] << 24 | s[f >>> 16 & 255] << 16 | s[u >>> 8 & 255] << 8 | s[255 & d]) ^ a[h++], 
                        m = (s[f >>> 24] << 24 | s[u >>> 16 & 255] << 16 | s[d >>> 8 & 255] << 8 | s[255 & c]) ^ a[h++];
                        e[t] = _, e[t + 1] = v, e[t + 2] = p, e[t + 3] = m;
                    },
                    keySize: 8
                });
                t.AES = r._createHelper(v);
            }

// ==================== 元数据 ====================
// 此文件包含从 wx02b98b8ae5513413 提取的 AES 算法实现
// 检测位置: 行 40590-40590
// 变量名: ___
// 检测源: static
