/**
 * AES 算法实现
 * App ID: wx02343c1ee5ea2b8a
 * 版本: v16
 * 代码哈希: -5cpdqm
 * 来源文件: output/wx02343c1ee5ea2b8a/common/vendor.js
 * 检测类型: Round constants
 * 置信度: 0.8
 * 函数名: anonymous
 * 行数: 71
 * 生成时间: 2025-07-05T13:17:10.544Z
 */

function(e, t, r) {
        function n(e) {
            f.isBuffer(e) || (e = f.from(e));
            for (var t = e.length / 4 | 0, r = new Array(t), n = 0; n < t; n++) r[n] = e.readUInt32BE(4 * n);
            return r;
        }
        function i(e) {
            for (;0 < e.length; e++) e[0] = 0;
        }
        function o(e, t, r, n, i) {
            for (var o, a, f, s, c = r[0], u = r[1], h = r[2], d = r[3], l = e[0] ^ t[0], p = e[1] ^ t[1], b = e[2] ^ t[2], v = e[3] ^ t[3], y = 4, g = 1; g < i; g++) o = c[l >>> 24] ^ u[p >>> 16 & 255] ^ h[b >>> 8 & 255] ^ d[255 & v] ^ t[y++], 
            a = c[p >>> 24] ^ u[b >>> 16 & 255] ^ h[v >>> 8 & 255] ^ d[255 & l] ^ t[y++], f = c[b >>> 24] ^ u[v >>> 16 & 255] ^ h[l >>> 8 & 255] ^ d[255 & p] ^ t[y++], 
            s = c[v >>> 24] ^ u[l >>> 16 & 255] ^ h[p >>> 8 & 255] ^ d[255 & b] ^ t[y++], l = o, 
            p = a, b = f, v = s;
            return o = (n[l >>> 24] << 24 | n[p >>> 16 & 255] << 16 | n[b >>> 8 & 255] << 8 | n[255 & v]) ^ t[y++], 
            a = (n[p >>> 24] << 24 | n[b >>> 16 & 255] << 16 | n[v >>> 8 & 255] << 8 | n[255 & l]) ^ t[y++], 
            f = (n[b >>> 24] << 24 | n[v >>> 16 & 255] << 16 | n[l >>> 8 & 255] << 8 | n[255 & p]) ^ t[y++], 
            s = (n[v >>> 24] << 24 | n[l >>> 16 & 255] << 16 | n[p >>> 8 & 255] << 8 | n[255 & b]) ^ t[y++], 
            o >>>= 0, a >>>= 0, f >>>= 0, s >>>= 0, [ o, a, f, s ];
        }
        function a(e) {
            this._key = n(e), this._reset();
        }
        var f = r("8707").Buffer, s = [ 0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54 ], c = function() {
            for (var e = new Array(256), t = 0; t < 256; t++) e[t] = t < 128 ? t << 1 : t << 1 ^ 283;
            for (var r = [], n = [], i = [ [], [], [], [] ], o = [ [], [], [], [] ], a = 0, f = 0, s = 0; s < 256; ++s) {
                var c = f ^ f << 1 ^ f << 2 ^ f << 3 ^ f << 4;
                c = c >>> 8 ^ 255 & c ^ 99, r[a] = c, n[c] = a;
                var u = e[a], h = e[u], d = e[h], l = 257 * e[c] ^ 16843008 * c;
                i[0][a] = l << 24 | l >>> 8, i[1][a] = l << 16 | l >>> 16, i[2][a] = l << 8 | l >>> 24, 
                i[3][a] = l, l = 16843009 * d ^ 65537 * h ^ 257 * u ^ 16843008 * a, o[0][c] = l << 24 | l >>> 8, 
                o[1][c] = l << 16 | l >>> 16, o[2][c] = l << 8 | l >>> 24, o[3][c] = l, 0 === a ? a = f = 1 : (a = u ^ e[e[e[d ^ u]]], 
                f ^= e[e[f]]);
            }
            return {
                SBOX: r,
                INV_SBOX: n,
                SUB_MIX: i,
                INV_SUB_MIX: o
            };
        }();
        a.blockSize = 16, a.keySize = 32, a.prototype.blockSize = a.blockSize, a.prototype.keySize = a.keySize, 
        a.prototype._reset = function() {
            for (var e = this._key, t = e.length, r = t + 6, n = 4 * (r + 1), i = [], o = 0; o < t; o++) i[o] = e[o];
            for (o = t; o < n; o++) {
                var a = i[o - 1];
                o % t == 0 ? (a = a << 8 | a >>> 24, a = c.SBOX[a >>> 24] << 24 | c.SBOX[a >>> 16 & 255] << 16 | c.SBOX[a >>> 8 & 255] << 8 | c.SBOX[255 & a], 
                a ^= s[o / t | 0] << 24) : t > 6 && o % t == 4 && (a = c.SBOX[a >>> 24] << 24 | c.SBOX[a >>> 16 & 255] << 16 | c.SBOX[a >>> 8 & 255] << 8 | c.SBOX[255 & a]), 
                i[o] = i[o - t] ^ a;
            }
            for (var f = [], u = 0; u < n; u++) {
                var h = n - u, d = i[h - (u % 4 ? 0 : 4)];
                f[u] = u < 4 || h <= 4 ? d : c.INV_SUB_MIX[0][c.SBOX[d >>> 24]] ^ c.INV_SUB_MIX[1][c.SBOX[d >>> 16 & 255]] ^ c.INV_SUB_MIX[2][c.SBOX[d >>> 8 & 255]] ^ c.INV_SUB_MIX[3][c.SBOX[255 & d]];
            }
            this._nRounds = r, this._keySchedule = i, this._invKeySchedule = f;
        }, a.prototype.encryptBlockRaw = function(e) {
            return e = n(e), o(e, this._keySchedule, c.SUB_MIX, c.SBOX, this._nRounds);
        }, a.prototype.encryptBlock = function(e) {
            var t = this.encryptBlockRaw(e), r = f.allocUnsafe(16);
            return r.writeUInt32BE(t[0], 0), r.writeUInt32BE(t[1], 4), r.writeUInt32BE(t[2], 8), 
            r.writeUInt32BE(t[3], 12), r;
        }, a.prototype.decryptBlock = function(e) {
            var t = (e = n(e))[1];
            e[1] = e[3], e[3] = t;
            var r = o(e, this._invKeySchedule, c.INV_SUB_MIX, c.INV_SBOX, this._nRounds), i = f.allocUnsafe(16);
            return i.writeUInt32BE(r[0], 0), i.writeUInt32BE(r[3], 4), i.writeUInt32BE(r[2], 8), 
            i.writeUInt32BE(r[1], 12), i;
        }, a.prototype.scrub = function() {
            i(this._keySchedule), i(this._invKeySchedule), i(this._key);
        }, e.exports.AES = a;
    }

// ==================== 元数据 ====================
// 此文件包含从 wx02343c1ee5ea2b8a 提取的 AES 算法实现
// 检测位置: 行 4280-4280
// 变量名: ___
// 检测源: static
