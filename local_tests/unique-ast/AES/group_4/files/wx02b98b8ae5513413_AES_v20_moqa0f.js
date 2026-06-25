/**
 * AES 算法实现
 * App ID: wx02b98b8ae5513413
 * 版本: v20
 * 代码哈希: moqa0f
 * 来源文件: output/wx02b98b8ae5513413/common/vendor.js
 * 检测类型: S-box
 * 置信度: 0.95
 * 函数名: anonymous
 * 行数: 73
 * 生成时间: 2025-07-05T13:17:10.576Z
 */

function(e, t, a) {
        var r = a("8707").Buffer;
        function n(e) {
            r.isBuffer(e) || (e = r.from(e));
            for (var t = e.length / 4 | 0, a = new Array(t), n = 0; n < t; n++) a[n] = e.readUInt32BE(4 * n);
            return a;
        }
        function i(e) {
            for (var t = 0; t < e.length; e++) e[t] = 0;
        }
        function l(e, t, a, r, n) {
            for (var i, l, s, o, u = a[0], d = a[1], c = a[2], f = a[3], h = e[0] ^ t[0], b = e[1] ^ t[1], _ = e[2] ^ t[2], v = e[3] ^ t[3], p = 4, m = 1; m < n; m++) i = u[h >>> 24] ^ d[b >>> 16 & 255] ^ c[_ >>> 8 & 255] ^ f[255 & v] ^ t[p++], 
            l = u[b >>> 24] ^ d[_ >>> 16 & 255] ^ c[v >>> 8 & 255] ^ f[255 & h] ^ t[p++], s = u[_ >>> 24] ^ d[v >>> 16 & 255] ^ c[h >>> 8 & 255] ^ f[255 & b] ^ t[p++], 
            o = u[v >>> 24] ^ d[h >>> 16 & 255] ^ c[b >>> 8 & 255] ^ f[255 & _] ^ t[p++], h = i, 
            b = l, _ = s, v = o;
            return i = (r[h >>> 24] << 24 | r[b >>> 16 & 255] << 16 | r[_ >>> 8 & 255] << 8 | r[255 & v]) ^ t[p++], 
            l = (r[b >>> 24] << 24 | r[_ >>> 16 & 255] << 16 | r[v >>> 8 & 255] << 8 | r[255 & h]) ^ t[p++], 
            s = (r[_ >>> 24] << 24 | r[v >>> 16 & 255] << 16 | r[h >>> 8 & 255] << 8 | r[255 & b]) ^ t[p++], 
            o = (r[v >>> 24] << 24 | r[h >>> 16 & 255] << 16 | r[b >>> 8 & 255] << 8 | r[255 & _]) ^ t[p++], 
            i >>>= 0, l >>>= 0, s >>>= 0, o >>>= 0, [ i, l, s, o ];
        }
        var s = [ 0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54 ], o = function() {
            for (var e = new Array(256), t = 0; t < 256; t++) e[t] = t < 128 ? t << 1 : t << 1 ^ 283;
            for (var a = [], r = [], n = [ [], [], [], [] ], i = [ [], [], [], [] ], l = 0, s = 0, o = 0; o < 256; ++o) {
                var u = s ^ s << 1 ^ s << 2 ^ s << 3 ^ s << 4;
                u = u >>> 8 ^ 255 & u ^ 99, a[l] = u, r[u] = l;
                var d = e[l], c = e[d], f = e[c], h = 257 * e[u] ^ 16843008 * u;
                n[0][l] = h << 24 | h >>> 8, n[1][l] = h << 16 | h >>> 16, n[2][l] = h << 8 | h >>> 24, 
                n[3][l] = h, h = 16843009 * f ^ 65537 * c ^ 257 * d ^ 16843008 * l, i[0][u] = h << 24 | h >>> 8, 
                i[1][u] = h << 16 | h >>> 16, i[2][u] = h << 8 | h >>> 24, i[3][u] = h, 0 === l ? l = s = 1 : (l = d ^ e[e[e[f ^ d]]], 
                s ^= e[e[s]]);
            }
            return {
                SBOX: a,
                INV_SBOX: r,
                SUB_MIX: n,
                INV_SUB_MIX: i
            };
        }();
        function u(e) {
            this._key = n(e), this._reset();
        }
        u.blockSize = 16, u.keySize = 32, u.prototype.blockSize = u.blockSize, u.prototype.keySize = u.keySize, 
        u.prototype._reset = function() {
            for (var e = this._key, t = e.length, a = t + 6, r = 4 * (a + 1), n = [], i = 0; i < t; i++) n[i] = e[i];
            for (i = t; i < r; i++) {
                var l = n[i - 1];
                i % t === 0 ? (l = l << 8 | l >>> 24, l = o.SBOX[l >>> 24] << 24 | o.SBOX[l >>> 16 & 255] << 16 | o.SBOX[l >>> 8 & 255] << 8 | o.SBOX[255 & l], 
                l ^= s[i / t | 0] << 24) : t > 6 && i % t === 4 && (l = o.SBOX[l >>> 24] << 24 | o.SBOX[l >>> 16 & 255] << 16 | o.SBOX[l >>> 8 & 255] << 8 | o.SBOX[255 & l]), 
                n[i] = n[i - t] ^ l;
            }
            for (var u = [], d = 0; d < r; d++) {
                var c = r - d, f = n[c - (d % 4 ? 0 : 4)];
                u[d] = d < 4 || c <= 4 ? f : o.INV_SUB_MIX[0][o.SBOX[f >>> 24]] ^ o.INV_SUB_MIX[1][o.SBOX[f >>> 16 & 255]] ^ o.INV_SUB_MIX[2][o.SBOX[f >>> 8 & 255]] ^ o.INV_SUB_MIX[3][o.SBOX[255 & f]];
            }
            this._nRounds = a, this._keySchedule = n, this._invKeySchedule = u;
        }, u.prototype.encryptBlockRaw = function(e) {
            return e = n(e), l(e, this._keySchedule, o.SUB_MIX, o.SBOX, this._nRounds);
        }, u.prototype.encryptBlock = function(e) {
            var t = this.encryptBlockRaw(e), a = r.allocUnsafe(16);
            return a.writeUInt32BE(t[0], 0), a.writeUInt32BE(t[1], 4), a.writeUInt32BE(t[2], 8), 
            a.writeUInt32BE(t[3], 12), a;
        }, u.prototype.decryptBlock = function(e) {
            e = n(e);
            var t = e[1];
            e[1] = e[3], e[3] = t;
            var a = l(e, this._invKeySchedule, o.INV_SUB_MIX, o.INV_SBOX, this._nRounds), i = r.allocUnsafe(16);
            return i.writeUInt32BE(a[0], 0), i.writeUInt32BE(a[3], 4), i.writeUInt32BE(a[2], 8), 
            i.writeUInt32BE(a[1], 12), i;
        }, u.prototype.scrub = function() {
            i(this._keySchedule), i(this._invKeySchedule), i(this._key);
        }, e.exports.AES = u;
    }

// ==================== 元数据 ====================
// 此文件包含从 wx02b98b8ae5513413 提取的 AES 算法实现
// 检测位置: 行 8178-8195
// 变量名: a
// 检测源: dynamic-iife-traced
