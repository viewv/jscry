/**
 * AES 算法实现
 * App ID: wx03bc60e1b437e39c
 * 版本: v25
 * 代码哈希: -ln1ip
 * 来源文件: output/wx03bc60e1b437e39c/common/vendor.js
 * 检测类型: S-box
 * 置信度: 0.95
 * 函数名: anonymous
 * 行数: 73
 * 生成时间: 2025-07-05T13:17:10.600Z
 */

function(e, t, n) {
        var r = n("8707").Buffer;
        function i(e) {
            r.isBuffer(e) || (e = r.from(e));
            for (var t = e.length / 4 | 0, n = new Array(t), i = 0; i < t; i++) n[i] = e.readUInt32BE(4 * i);
            return n;
        }
        function a(e) {
            for (var t = 0; t < e.length; e++) e[t] = 0;
        }
        function s(e, t, n, r, i) {
            for (var a, s, o, d, u = n[0], c = n[1], f = n[2], h = n[3], l = e[0] ^ t[0], _ = e[1] ^ t[1], m = e[2] ^ t[2], p = e[3] ^ t[3], y = 4, b = 1; b < i; b++) a = u[l >>> 24] ^ c[_ >>> 16 & 255] ^ f[m >>> 8 & 255] ^ h[255 & p] ^ t[y++], 
            s = u[_ >>> 24] ^ c[m >>> 16 & 255] ^ f[p >>> 8 & 255] ^ h[255 & l] ^ t[y++], o = u[m >>> 24] ^ c[p >>> 16 & 255] ^ f[l >>> 8 & 255] ^ h[255 & _] ^ t[y++], 
            d = u[p >>> 24] ^ c[l >>> 16 & 255] ^ f[_ >>> 8 & 255] ^ h[255 & m] ^ t[y++], l = a, 
            _ = s, m = o, p = d;
            return a = (r[l >>> 24] << 24 | r[_ >>> 16 & 255] << 16 | r[m >>> 8 & 255] << 8 | r[255 & p]) ^ t[y++], 
            s = (r[_ >>> 24] << 24 | r[m >>> 16 & 255] << 16 | r[p >>> 8 & 255] << 8 | r[255 & l]) ^ t[y++], 
            o = (r[m >>> 24] << 24 | r[p >>> 16 & 255] << 16 | r[l >>> 8 & 255] << 8 | r[255 & _]) ^ t[y++], 
            d = (r[p >>> 24] << 24 | r[l >>> 16 & 255] << 16 | r[_ >>> 8 & 255] << 8 | r[255 & m]) ^ t[y++], 
            a >>>= 0, s >>>= 0, o >>>= 0, d >>>= 0, [ a, s, o, d ];
        }
        var o = [ 0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54 ], d = function() {
            for (var e = new Array(256), t = 0; t < 256; t++) e[t] = t < 128 ? t << 1 : t << 1 ^ 283;
            for (var n = [], r = [], i = [ [], [], [], [] ], a = [ [], [], [], [] ], s = 0, o = 0, d = 0; d < 256; ++d) {
                var u = o ^ o << 1 ^ o << 2 ^ o << 3 ^ o << 4;
                u = u >>> 8 ^ 255 & u ^ 99, n[s] = u, r[u] = s;
                var c = e[s], f = e[c], h = e[f], l = 257 * e[u] ^ 16843008 * u;
                i[0][s] = l << 24 | l >>> 8, i[1][s] = l << 16 | l >>> 16, i[2][s] = l << 8 | l >>> 24, 
                i[3][s] = l, l = 16843009 * h ^ 65537 * f ^ 257 * c ^ 16843008 * s, a[0][u] = l << 24 | l >>> 8, 
                a[1][u] = l << 16 | l >>> 16, a[2][u] = l << 8 | l >>> 24, a[3][u] = l, 0 === s ? s = o = 1 : (s = c ^ e[e[e[h ^ c]]], 
                o ^= e[e[o]]);
            }
            return {
                SBOX: n,
                INV_SBOX: r,
                SUB_MIX: i,
                INV_SUB_MIX: a
            };
        }();
        function u(e) {
            this._key = i(e), this._reset();
        }
        u.blockSize = 16, u.keySize = 32, u.prototype.blockSize = u.blockSize, u.prototype.keySize = u.keySize, 
        u.prototype._reset = function() {
            for (var e = this._key, t = e.length, n = t + 6, r = 4 * (n + 1), i = [], a = 0; a < t; a++) i[a] = e[a];
            for (a = t; a < r; a++) {
                var s = i[a - 1];
                a % t === 0 ? (s = s << 8 | s >>> 24, s = d.SBOX[s >>> 24] << 24 | d.SBOX[s >>> 16 & 255] << 16 | d.SBOX[s >>> 8 & 255] << 8 | d.SBOX[255 & s], 
                s ^= o[a / t | 0] << 24) : t > 6 && a % t === 4 && (s = d.SBOX[s >>> 24] << 24 | d.SBOX[s >>> 16 & 255] << 16 | d.SBOX[s >>> 8 & 255] << 8 | d.SBOX[255 & s]), 
                i[a] = i[a - t] ^ s;
            }
            for (var u = [], c = 0; c < r; c++) {
                var f = r - c, h = i[f - (c % 4 ? 0 : 4)];
                u[c] = c < 4 || f <= 4 ? h : d.INV_SUB_MIX[0][d.SBOX[h >>> 24]] ^ d.INV_SUB_MIX[1][d.SBOX[h >>> 16 & 255]] ^ d.INV_SUB_MIX[2][d.SBOX[h >>> 8 & 255]] ^ d.INV_SUB_MIX[3][d.SBOX[255 & h]];
            }
            this._nRounds = n, this._keySchedule = i, this._invKeySchedule = u;
        }, u.prototype.encryptBlockRaw = function(e) {
            return e = i(e), s(e, this._keySchedule, d.SUB_MIX, d.SBOX, this._nRounds);
        }, u.prototype.encryptBlock = function(e) {
            var t = this.encryptBlockRaw(e), n = r.allocUnsafe(16);
            return n.writeUInt32BE(t[0], 0), n.writeUInt32BE(t[1], 4), n.writeUInt32BE(t[2], 8), 
            n.writeUInt32BE(t[3], 12), n;
        }, u.prototype.decryptBlock = function(e) {
            e = i(e);
            var t = e[1];
            e[1] = e[3], e[3] = t;
            var n = s(e, this._invKeySchedule, d.INV_SUB_MIX, d.INV_SBOX, this._nRounds), a = r.allocUnsafe(16);
            return a.writeUInt32BE(n[0], 0), a.writeUInt32BE(n[3], 4), a.writeUInt32BE(n[2], 8), 
            a.writeUInt32BE(n[1], 12), a;
        }, u.prototype.scrub = function() {
            a(this._keySchedule), a(this._invKeySchedule), a(this._key);
        }, e.exports.AES = u;
    }

// ==================== 元数据 ====================
// 此文件包含从 wx03bc60e1b437e39c 提取的 AES 算法实现
// 检测位置: 行 7785-7802
// 变量名: n
// 检测源: dynamic-iife-traced
