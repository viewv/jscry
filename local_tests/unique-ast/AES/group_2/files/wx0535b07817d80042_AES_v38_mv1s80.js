/**
 * AES 算法实现
 * App ID: wx0535b07817d80042
 * 版本: v38
 * 代码哈希: mv1s80
 * 来源文件: output/wx0535b07817d80042/common/vendor.js
 * 检测类型: S-box
 * 置信度: 0.95
 * 函数名: anonymous
 * 行数: 50
 * 生成时间: 2025-07-05T13:17:10.624Z
 */

function() {
            var t = b, e = t.lib, r = e.BlockCipher, n = t.algo, f = [], u = [], l = [], p = [], h = [], d = [], v = [], y = [], _ = [], g = [];
            !function() {
                for (var t = [], e = 0; e < 256; e++) t[e] = e < 128 ? e << 1 : e << 1 ^ 283;
                var r = 0, n = 0;
                for (e = 0; e < 256; e++) {
                    var o = n ^ n << 1 ^ n << 2 ^ n << 3 ^ n << 4;
                    o = o >>> 8 ^ 255 & o ^ 99, f[r] = o, u[o] = r;
                    var i = t[r], a = t[i], s = t[a], c = 257 * t[o] ^ 16843008 * o;
                    l[r] = c << 24 | c >>> 8, p[r] = c << 16 | c >>> 16, h[r] = c << 8 | c >>> 24, d[r] = c, 
                    c = 16843009 * s ^ 65537 * a ^ 257 * i ^ 16843008 * r, v[o] = c << 24 | c >>> 8, 
                    y[o] = c << 16 | c >>> 16, _[o] = c << 8 | c >>> 24, g[o] = c, r ? (r = i ^ t[t[t[s ^ i]]], 
                    n ^= t[t[n]]) : r = n = 1;
                }
            }();
            var m = [ 0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54 ], o = n.AES = r.extend({
                _doReset: function() {
                    if (!this._nRounds || this._keyPriorReset !== this._key) {
                        for (var t = this._keyPriorReset = this._key, e = t.words, r = t.sigBytes / 4, n = this._nRounds = r + 6, o = 4 * (n + 1), i = this._keySchedule = [], a = 0; a < o; a++) if (a < r) i[a] = e[a]; else {
                            var s = i[a - 1];
                            a % r ? 6 < r && a % r == 4 && (s = f[s >>> 24] << 24 | f[s >>> 16 & 255] << 16 | f[s >>> 8 & 255] << 8 | f[255 & s]) : (s = f[(s = s << 8 | s >>> 24) >>> 24] << 24 | f[s >>> 16 & 255] << 16 | f[s >>> 8 & 255] << 8 | f[255 & s], 
                            s ^= m[a / r | 0] << 24), i[a] = i[a - r] ^ s;
                        }
                        for (var c = this._invKeySchedule = [], u = 0; u < o; u++) a = o - u, s = u % 4 ? i[a] : i[a - 4], 
                        c[u] = u < 4 || a <= 4 ? s : v[f[s >>> 24]] ^ y[f[s >>> 16 & 255]] ^ _[f[s >>> 8 & 255]] ^ g[f[255 & s]];
                    }
                },
                encryptBlock: function(t, e) {
                    this._doCryptBlock(t, e, this._keySchedule, l, p, h, d, f);
                },
                decryptBlock: function(t, e) {
                    var r = t[e + 1];
                    t[e + 1] = t[e + 3], t[e + 3] = r, this._doCryptBlock(t, e, this._invKeySchedule, v, y, _, g, u), 
                    r = t[e + 1], t[e + 1] = t[e + 3], t[e + 3] = r;
                },
                _doCryptBlock: function(t, e, r, n, o, i, a, s) {
                    for (var c = this._nRounds, u = t[e] ^ r[0], f = t[e + 1] ^ r[1], l = t[e + 2] ^ r[2], p = t[e + 3] ^ r[3], h = 4, d = 1; d < c; d++) {
                        var v = n[u >>> 24] ^ o[f >>> 16 & 255] ^ i[l >>> 8 & 255] ^ a[255 & p] ^ r[h++], y = n[f >>> 24] ^ o[l >>> 16 & 255] ^ i[p >>> 8 & 255] ^ a[255 & u] ^ r[h++], _ = n[l >>> 24] ^ o[p >>> 16 & 255] ^ i[u >>> 8 & 255] ^ a[255 & f] ^ r[h++], g = n[p >>> 24] ^ o[u >>> 16 & 255] ^ i[f >>> 8 & 255] ^ a[255 & l] ^ r[h++];
                        u = v, f = y, l = _, p = g;
                    }
                    v = (s[u >>> 24] << 24 | s[f >>> 16 & 255] << 16 | s[l >>> 8 & 255] << 8 | s[255 & p]) ^ r[h++], 
                    y = (s[f >>> 24] << 24 | s[l >>> 16 & 255] << 16 | s[p >>> 8 & 255] << 8 | s[255 & u]) ^ r[h++], 
                    _ = (s[l >>> 24] << 24 | s[p >>> 16 & 255] << 16 | s[u >>> 8 & 255] << 8 | s[255 & f]) ^ r[h++], 
                    g = (s[p >>> 24] << 24 | s[u >>> 16 & 255] << 16 | s[f >>> 8 & 255] << 8 | s[255 & l]) ^ r[h++], 
                    t[e] = v, t[e + 1] = y, t[e + 2] = _, t[e + 3] = g;
                },
                keySize: 8
            });
            t.AES = r._createHelper(o);
        }

// ==================== 元数据 ====================
// 此文件包含从 wx0535b07817d80042 提取的 AES 算法实现
// 检测位置: 行 3960-3972
// 变量名: f
// 检测源: dynamic-iife
