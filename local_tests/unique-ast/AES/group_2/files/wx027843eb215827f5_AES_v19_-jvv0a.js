/**
 * AES 算法实现
 * App ID: wx027843eb215827f5
 * 版本: v19
 * 代码哈希: -jvv0a2
 * 来源文件: output/wx027843eb215827f5/components/gsd-lib/crypto/crypto.js
 * 检测类型: Round constants
 * 置信度: 0.8
 * 函数名: anonymous
 * 行数: 42
 * 生成时间: 2025-07-05T13:17:10.574Z
 */

function() {
    for (var e = t, r = e.lib.BlockCipher, i = e.algo, n = [], o = [], s = [], c = [], a = [], f = [], h = [], u = [], p = [], d = [], l = [], y = 0; 256 > y; y++) l[y] = 128 > y ? y << 1 : y << 1 ^ 283;
    for (var _ = 0, v = 0, y = 0; 256 > y; y++) {
        var g = (g = v ^ v << 1 ^ v << 2 ^ v << 3 ^ v << 4) >>> 8 ^ 255 & g ^ 99;
        n[_] = g, o[g] = _;
        var B = l[_], k = l[B], x = l[k], m = 257 * l[g] ^ 16843008 * g;
        s[_] = m << 24 | m >>> 8, c[_] = m << 16 | m >>> 16, a[_] = m << 8 | m >>> 24, f[_] = m, 
        m = 16843009 * x ^ 65537 * k ^ 257 * B ^ 16843008 * _, h[g] = m << 24 | m >>> 8, 
        u[g] = m << 16 | m >>> 16, p[g] = m << 8 | m >>> 24, d[g] = m, _ ? (_ = B ^ l[l[l[x ^ B]]], 
        v ^= l[l[v]]) : _ = v = 1;
    }
    var S = [ 0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54 ], i = i.AES = r.extend({
        _doReset: function() {
            for (var t = (r = this._key).words, e = r.sigBytes / 4, r = 4 * ((this._nRounds = e + 6) + 1), i = this._keySchedule = [], o = 0; o < r; o++) if (o < e) i[o] = t[o]; else {
                var s = i[o - 1];
                o % e ? 6 < e && 4 == o % e && (s = n[s >>> 24] << 24 | n[s >>> 16 & 255] << 16 | n[s >>> 8 & 255] << 8 | n[255 & s]) : (s = s << 8 | s >>> 24, 
                s = n[s >>> 24] << 24 | n[s >>> 16 & 255] << 16 | n[s >>> 8 & 255] << 8 | n[255 & s], 
                s ^= S[o / e | 0] << 24), i[o] = i[o - e] ^ s;
            }
            for (t = this._invKeySchedule = [], e = 0; e < r; e++) o = r - e, s = e % 4 ? i[o] : i[o - 4], 
            t[e] = 4 > e || 4 >= o ? s : h[n[s >>> 24]] ^ u[n[s >>> 16 & 255]] ^ p[n[s >>> 8 & 255]] ^ d[n[255 & s]];
        },
        encryptBlock: function(t, e) {
            this._doCryptBlock(t, e, this._keySchedule, s, c, a, f, n);
        },
        decryptBlock: function(t, e) {
            var r = t[e + 1];
            t[e + 1] = t[e + 3], t[e + 3] = r, this._doCryptBlock(t, e, this._invKeySchedule, h, u, p, d, o), 
            r = t[e + 1], t[e + 1] = t[e + 3], t[e + 3] = r;
        },
        _doCryptBlock: function(t, e, r, i, n, o, s, c) {
            for (var a = this._nRounds, f = t[e] ^ r[0], h = t[e + 1] ^ r[1], u = t[e + 2] ^ r[2], p = t[e + 3] ^ r[3], d = 4, l = 1; l < a; l++) var y = i[f >>> 24] ^ n[h >>> 16 & 255] ^ o[u >>> 8 & 255] ^ s[255 & p] ^ r[d++], _ = i[h >>> 24] ^ n[u >>> 16 & 255] ^ o[p >>> 8 & 255] ^ s[255 & f] ^ r[d++], v = i[u >>> 24] ^ n[p >>> 16 & 255] ^ o[f >>> 8 & 255] ^ s[255 & h] ^ r[d++], p = i[p >>> 24] ^ n[f >>> 16 & 255] ^ o[h >>> 8 & 255] ^ s[255 & u] ^ r[d++], f = y, h = _, u = v;
            y = (c[f >>> 24] << 24 | c[h >>> 16 & 255] << 16 | c[u >>> 8 & 255] << 8 | c[255 & p]) ^ r[d++], 
            _ = (c[h >>> 24] << 24 | c[u >>> 16 & 255] << 16 | c[p >>> 8 & 255] << 8 | c[255 & f]) ^ r[d++], 
            v = (c[u >>> 24] << 24 | c[p >>> 16 & 255] << 16 | c[f >>> 8 & 255] << 8 | c[255 & h]) ^ r[d++], 
            p = (c[p >>> 24] << 24 | c[f >>> 16 & 255] << 16 | c[h >>> 8 & 255] << 8 | c[255 & u]) ^ r[d++], 
            t[e] = y, t[e + 1] = _, t[e + 2] = v, t[e + 3] = p;
        },
        keySize: 8
    });
    e.AES = r._createHelper(i);
}

// ==================== 元数据 ====================
// 此文件包含从 wx027843eb215827f5 提取的 AES 算法实现
// 检测位置: 行 402-430
// 变量名: S
// 检测源: static
