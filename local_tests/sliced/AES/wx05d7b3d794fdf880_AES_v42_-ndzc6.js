/**
 * AES 算法实现
 * App ID: wx05d7b3d794fdf880
 * 版本: v42
 * 代码哈希: -ndzc62
 * 来源文件: output/wx05d7b3d794fdf880/common/vendor.js
 * 检测类型: Round constants
 * 置信度: 0.8
 * 函数名: anonymous
 * 行数: 42
 * 生成时间: 2025-07-05T13:17:10.643Z
 */

function() {
            for (var e = n, t = e.lib.BlockCipher, r = e.algo, o = [], i = [], a = [], s = [], c = [], u = [], f = [], p = [], l = [], d = [], h = [], v = 0; 256 > v; v++) h[v] = 128 > v ? v << 1 : v << 1 ^ 283;
            for (var y = 0, _ = 0, v = 0; 256 > v; v++) {
                var g = (g = _ ^ _ << 1 ^ _ << 2 ^ _ << 3 ^ _ << 4) >>> 8 ^ 255 & g ^ 99;
                o[y] = g, i[g] = y;
                var m = h[y], b = h[m], w = h[b], $ = 257 * h[g] ^ 16843008 * g;
                a[y] = $ << 24 | $ >>> 8, s[y] = $ << 16 | $ >>> 16, c[y] = $ << 8 | $ >>> 24, u[y] = $, 
                $ = 16843009 * w ^ 65537 * b ^ 257 * m ^ 16843008 * y, f[g] = $ << 24 | $ >>> 8, 
                p[g] = $ << 16 | $ >>> 16, l[g] = $ << 8 | $ >>> 24, d[g] = $, y ? (y = m ^ h[h[h[w ^ m]]], 
                _ ^= h[h[_]]) : y = _ = 1;
            }
            var x = [ 0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54 ], r = r.AES = t.extend({
                _doReset: function() {
                    for (var e = (n = this._key).words, t = n.sigBytes / 4, n = 4 * ((this._nRounds = t + 6) + 1), r = this._keySchedule = [], i = 0; i < n; i++) if (i < t) r[i] = e[i]; else {
                        var a = r[i - 1];
                        i % t ? 6 < t && 4 == i % t && (a = o[a >>> 24] << 24 | o[a >>> 16 & 255] << 16 | o[a >>> 8 & 255] << 8 | o[255 & a]) : (a = a << 8 | a >>> 24, 
                        a = o[a >>> 24] << 24 | o[a >>> 16 & 255] << 16 | o[a >>> 8 & 255] << 8 | o[255 & a], 
                        a ^= x[i / t | 0] << 24), r[i] = r[i - t] ^ a;
                    }
                    for (e = this._invKeySchedule = [], t = 0; t < n; t++) i = n - t, a = t % 4 ? r[i] : r[i - 4], 
                    e[t] = 4 > t || 4 >= i ? a : f[o[a >>> 24]] ^ p[o[a >>> 16 & 255]] ^ l[o[a >>> 8 & 255]] ^ d[o[255 & a]];
                },
                encryptBlock: function(e, t) {
                    this._doCryptBlock(e, t, this._keySchedule, a, s, c, u, o);
                },
                decryptBlock: function(e, t) {
                    var n = e[t + 1];
                    e[t + 1] = e[t + 3], e[t + 3] = n, this._doCryptBlock(e, t, this._invKeySchedule, f, p, l, d, i), 
                    n = e[t + 1], e[t + 1] = e[t + 3], e[t + 3] = n;
                },
                _doCryptBlock: function(e, t, n, r, o, i, a, s) {
                    for (var c = this._nRounds, u = e[t] ^ n[0], f = e[t + 1] ^ n[1], p = e[t + 2] ^ n[2], l = e[t + 3] ^ n[3], d = 4, h = 1; h < c; h++) var v = r[u >>> 24] ^ o[f >>> 16 & 255] ^ i[p >>> 8 & 255] ^ a[255 & l] ^ n[d++], y = r[f >>> 24] ^ o[p >>> 16 & 255] ^ i[l >>> 8 & 255] ^ a[255 & u] ^ n[d++], _ = r[p >>> 24] ^ o[l >>> 16 & 255] ^ i[u >>> 8 & 255] ^ a[255 & f] ^ n[d++], l = r[l >>> 24] ^ o[u >>> 16 & 255] ^ i[f >>> 8 & 255] ^ a[255 & p] ^ n[d++], u = v, f = y, p = _;
                    v = (s[u >>> 24] << 24 | s[f >>> 16 & 255] << 16 | s[p >>> 8 & 255] << 8 | s[255 & l]) ^ n[d++], 
                    y = (s[f >>> 24] << 24 | s[p >>> 16 & 255] << 16 | s[l >>> 8 & 255] << 8 | s[255 & u]) ^ n[d++], 
                    _ = (s[p >>> 24] << 24 | s[l >>> 16 & 255] << 16 | s[u >>> 8 & 255] << 8 | s[255 & f]) ^ n[d++], 
                    l = (s[l >>> 24] << 24 | s[u >>> 16 & 255] << 16 | s[f >>> 8 & 255] << 8 | s[255 & p]) ^ n[d++], 
                    e[t] = v, e[t + 1] = y, e[t + 2] = _, e[t + 3] = l;
                },
                keySize: 8
            });
            e.AES = t._createHelper(r);
        }

// ==================== 元数据 ====================
// 此文件包含从 wx05d7b3d794fdf880 提取的 AES 算法实现
// 检测位置: 行 3722-3750
// 变量名: x
// 检测源: static
