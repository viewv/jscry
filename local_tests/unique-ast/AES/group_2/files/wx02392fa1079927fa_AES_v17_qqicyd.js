/**
 * AES 算法实现
 * App ID: wx02392fa1079927fa
 * 版本: v17
 * 代码哈希: qqicyd
 * 来源文件: output/wx02392fa1079927fa/common/vendor.js
 * 检测类型: Round constants
 * 置信度: 0.8
 * 函数名: anonymous
 * 行数: 47
 * 生成时间: 2025-07-05T13:17:10.547Z
 */

function() {
            for (var e = k, t = e.lib.BlockCipher, n = e.algo, a = [], r = [], i = [], o = [], s = [], u = [], c = [], l = [], f = [], p = [], d = [], h = 0; h < 256; h++) d[h] = h < 128 ? h << 1 : h << 1 ^ 283;
            var g = 0, v = 0;
            for (h = 0; h < 256; h++) {
                var _ = v ^ v << 1 ^ v << 2 ^ v << 3 ^ v << 4;
                _ = _ >>> 8 ^ 255 & _ ^ 99, a[g] = _;
                var m = d[r[_] = g], y = d[m], b = d[y], A = 257 * d[_] ^ 16843008 * _;
                i[g] = A << 24 | A >>> 8, o[g] = A << 16 | A >>> 16, s[g] = A << 8 | A >>> 24, u[g] = A, 
                A = 16843009 * b ^ 65537 * y ^ 257 * m ^ 16843008 * g, c[_] = A << 24 | A >>> 8, 
                l[_] = A << 16 | A >>> 16, f[_] = A << 8 | A >>> 24, p[_] = A, g ? (g = m ^ d[d[d[b ^ m]]], 
                v ^= d[d[v]]) : g = v = 1;
            }
            var w = [ 0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54 ];
            n = n.AES = t.extend({
                _doReset: function() {
                    for (var e = this._key, t = e.words, n = e.sigBytes / 4, r = (e = 4 * ((this._nRounds = n + 6) + 1), 
                    this._keySchedule = []), i = 0; i < e; i++) if (i < n) r[i] = t[i]; else {
                        var o = r[i - 1];
                        i % n ? 6 < n && 4 == i % n && (o = a[o >>> 24] << 24 | a[o >>> 16 & 255] << 16 | a[o >>> 8 & 255] << 8 | a[255 & o]) : (o = a[(o = o << 8 | o >>> 24) >>> 24] << 24 | a[o >>> 16 & 255] << 16 | a[o >>> 8 & 255] << 8 | a[255 & o], 
                        o ^= w[i / n | 0] << 24), r[i] = r[i - n] ^ o;
                    }
                    for (t = this._invKeySchedule = [], n = 0; n < e; n++) i = e - n, o = n % 4 ? r[i] : r[i - 4], 
                    t[n] = n < 4 || i <= 4 ? o : c[a[o >>> 24]] ^ l[a[o >>> 16 & 255]] ^ f[a[o >>> 8 & 255]] ^ p[a[255 & o]];
                },
                encryptBlock: function(e, t) {
                    this._doCryptBlock(e, t, this._keySchedule, i, o, s, u, a);
                },
                decryptBlock: function(e, t) {
                    var n = e[t + 1];
                    e[t + 1] = e[t + 3], e[t + 3] = n, this._doCryptBlock(e, t, this._invKeySchedule, c, l, f, p, r), 
                    n = e[t + 1], e[t + 1] = e[t + 3], e[t + 3] = n;
                },
                _doCryptBlock: function(e, t, n, r, i, o, a, s) {
                    for (var u = this._nRounds, c = e[t] ^ n[0], l = e[t + 1] ^ n[1], f = e[t + 2] ^ n[2], p = e[t + 3] ^ n[3], d = 4, h = 1; h < u; h++) {
                        var g = r[c >>> 24] ^ i[l >>> 16 & 255] ^ o[f >>> 8 & 255] ^ a[255 & p] ^ n[d++], v = r[l >>> 24] ^ i[f >>> 16 & 255] ^ o[p >>> 8 & 255] ^ a[255 & c] ^ n[d++], _ = r[f >>> 24] ^ i[p >>> 16 & 255] ^ o[c >>> 8 & 255] ^ a[255 & l] ^ n[d++];
                        p = r[p >>> 24] ^ i[c >>> 16 & 255] ^ o[l >>> 8 & 255] ^ a[255 & f] ^ n[d++], c = g, 
                        l = v, f = _;
                    }
                    g = (s[c >>> 24] << 24 | s[l >>> 16 & 255] << 16 | s[f >>> 8 & 255] << 8 | s[255 & p]) ^ n[d++], 
                    v = (s[l >>> 24] << 24 | s[f >>> 16 & 255] << 16 | s[p >>> 8 & 255] << 8 | s[255 & c]) ^ n[d++], 
                    _ = (s[f >>> 24] << 24 | s[p >>> 16 & 255] << 16 | s[c >>> 8 & 255] << 8 | s[255 & l]) ^ n[d++], 
                    p = (s[p >>> 24] << 24 | s[c >>> 16 & 255] << 16 | s[l >>> 8 & 255] << 8 | s[255 & f]) ^ n[d++], 
                    e[t] = g, e[t + 1] = v, e[t + 2] = _, e[t + 3] = p;
                },
                keySize: 8
            }), e.AES = t._createHelper(n);
        }

// ==================== 元数据 ====================
// 此文件包含从 wx02392fa1079927fa 提取的 AES 算法实现
// 检测位置: 行 6552-6552
// 变量名: w
// 检测源: static
