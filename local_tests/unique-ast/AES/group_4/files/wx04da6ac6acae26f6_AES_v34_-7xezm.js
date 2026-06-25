/**
 * AES 算法实现
 * App ID: wx04da6ac6acae26f6
 * 版本: v34
 * 代码哈希: -7xezmk
 * 来源文件: output/wx04da6ac6acae26f6/common/vendor.js
 * 检测类型: Round constants
 * 置信度: 0.8
 * 函数名: f5
 * 行数: 82
 * 生成时间: 2025-07-05T13:17:10.618Z
 */

function f5(e, t, r) {
        var n = r("8707").Buffer;
        function i(e) {
            n.isBuffer(e) || (e = n.from(e));
            for (var t = e.length / 4 | 0, r = new Array(t), i = 0; i < t; i++) {
                r[i] = e.readUInt32BE(4 * i);
            }
            return r;
        }
        function a(e) {
            for (var t = 0; t < e.length; e++) {
                e[t] = 0;
            }
        }
        function o(e, t, r, n, i) {
            for (var a, o, f, s, c = r[0], u = r[1], h = r[2], d = r[3], l = e[0] ^ t[0], p = e[1] ^ t[1], b = e[2] ^ t[2], v = e[3] ^ t[3], y = 4, g = 1; g < i; g++) {
                a = c[l >>> 24] ^ u[p >>> 16 & 255] ^ h[b >>> 8 & 255] ^ d[255 & v] ^ t[y++], o = c[p >>> 24] ^ u[b >>> 16 & 255] ^ h[v >>> 8 & 255] ^ d[255 & l] ^ t[y++], 
                f = c[b >>> 24] ^ u[v >>> 16 & 255] ^ h[l >>> 8 & 255] ^ d[255 & p] ^ t[y++], s = c[v >>> 24] ^ u[l >>> 16 & 255] ^ h[p >>> 8 & 255] ^ d[255 & b] ^ t[y++], 
                l = a, p = o, b = f, v = s;
            }
            return a = (n[l >>> 24] << 24 | n[p >>> 16 & 255] << 16 | n[b >>> 8 & 255] << 8 | n[255 & v]) ^ t[y++], 
            o = (n[p >>> 24] << 24 | n[b >>> 16 & 255] << 16 | n[v >>> 8 & 255] << 8 | n[255 & l]) ^ t[y++], 
            f = (n[b >>> 24] << 24 | n[v >>> 16 & 255] << 16 | n[l >>> 8 & 255] << 8 | n[255 & p]) ^ t[y++], 
            s = (n[v >>> 24] << 24 | n[l >>> 16 & 255] << 16 | n[p >>> 8 & 255] << 8 | n[255 & b]) ^ t[y++], 
            a >>>= 0, o >>>= 0, f >>>= 0, s >>>= 0, [ a, o, f, s ];
        }
        var f = [ 0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54 ], s = function() {
            for (var e = new Array(256), t = 0; t < 256; t++) {
                e[t] = t < 128 ? t << 1 : t << 1 ^ 283;
            }
            for (var r = [], n = [], i = [ [], [], [], [] ], a = [ [], [], [], [] ], o = 0, f = 0, s = 0; s < 256; ++s) {
                var c = f ^ f << 1 ^ f << 2 ^ f << 3 ^ f << 4;
                c = c >>> 8 ^ 255 & c ^ 99, r[o] = c, n[c] = o;
                var u = e[o], h = e[u], d = e[h], l = 257 * e[c] ^ 16843008 * c;
                i[0][o] = l << 24 | l >>> 8, i[1][o] = l << 16 | l >>> 16, i[2][o] = l << 8 | l >>> 24, 
                i[3][o] = l, l = 16843009 * d ^ 65537 * h ^ 257 * u ^ 16843008 * o, a[0][c] = l << 24 | l >>> 8, 
                a[1][c] = l << 16 | l >>> 16, a[2][c] = l << 8 | l >>> 24, a[3][c] = l, 0 === o ? o = f = 1 : (o = u ^ e[e[e[d ^ u]]], 
                f ^= e[e[f]]);
            }
            return {
                SBOX: r,
                INV_SBOX: n,
                SUB_MIX: i,
                INV_SUB_MIX: a
            };
        }();
        function c(e) {
            this._key = i(e), this._reset();
        }
        c.blockSize = 16, c.keySize = 32, c.prototype.blockSize = c.blockSize, c.prototype.keySize = c.keySize, 
        c.prototype._reset = function() {
            for (var e = this._key, t = e.length, r = t + 6, n = 4 * (r + 1), i = [], a = 0; a < t; a++) {
                i[a] = e[a];
            }
            for (a = t; a < n; a++) {
                var o = i[a - 1];
                a % t === 0 ? (o = o << 8 | o >>> 24, o = s.SBOX[o >>> 24] << 24 | s.SBOX[o >>> 16 & 255] << 16 | s.SBOX[o >>> 8 & 255] << 8 | s.SBOX[255 & o], 
                o ^= f[a / t | 0] << 24) : t > 6 && a % t === 4 && (o = s.SBOX[o >>> 24] << 24 | s.SBOX[o >>> 16 & 255] << 16 | s.SBOX[o >>> 8 & 255] << 8 | s.SBOX[255 & o]), 
                i[a] = i[a - t] ^ o;
            }
            for (var c = [], u = 0; u < n; u++) {
                var h = n - u, d = i[h - (u % 4 ? 0 : 4)];
                c[u] = u < 4 || h <= 4 ? d : s.INV_SUB_MIX[0][s.SBOX[d >>> 24]] ^ s.INV_SUB_MIX[1][s.SBOX[d >>> 16 & 255]] ^ s.INV_SUB_MIX[2][s.SBOX[d >>> 8 & 255]] ^ s.INV_SUB_MIX[3][s.SBOX[255 & d]];
            }
            this._nRounds = r, this._keySchedule = i, this._invKeySchedule = c;
        }, c.prototype.encryptBlockRaw = function(e) {
            return e = i(e), o(e, this._keySchedule, s.SUB_MIX, s.SBOX, this._nRounds);
        }, c.prototype.encryptBlock = function(e) {
            var t = this.encryptBlockRaw(e), r = n.allocUnsafe(16);
            return r.writeUInt32BE(t[0], 0), r.writeUInt32BE(t[1], 4), r.writeUInt32BE(t[2], 8), 
            r.writeUInt32BE(t[3], 12), r;
        }, c.prototype.decryptBlock = function(e) {
            e = i(e);
            var t = e[1];
            e[1] = e[3], e[3] = t;
            var r = o(e, this._invKeySchedule, s.INV_SUB_MIX, s.INV_SBOX, this._nRounds), a = n.allocUnsafe(16);
            return a.writeUInt32BE(r[0], 0), a.writeUInt32BE(r[3], 4), a.writeUInt32BE(r[2], 8), 
            a.writeUInt32BE(r[1], 12), a;
        }, c.prototype.scrub = function() {
            a(this._keySchedule), a(this._invKeySchedule), a(this._key);
        }, e.exports.AES = c;
    }

// ==================== 元数据 ====================
// 此文件包含从 wx04da6ac6acae26f6 提取的 AES 算法实现
// 检测位置: 行 3296-3315
// 变量名: f
// 检测源: static
