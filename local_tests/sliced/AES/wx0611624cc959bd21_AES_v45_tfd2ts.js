/**
 * AES 算法实现
 * App ID: wx0611624cc959bd21
 * 版本: v45
 * 代码哈希: tfd2ts
 * 来源文件: output/wx0611624cc959bd21/common/vendor.js
 * 检测类型: S-box
 * 置信度: 0.95
 * 函数名: anonymous
 * 行数: 73
 * 生成时间: 2025-07-05T13:17:10.647Z
 */

function(e, t, r) {
        var n = r("8707").Buffer;
        function i(e) {
            n.isBuffer(e) || (e = n.from(e));
            for (var t = e.length / 4 | 0, r = new Array(t), i = 0; i < t; i++) r[i] = e.readUInt32BE(4 * i);
            return r;
        }
        function o(e) {
            for (var t = 0; t < e.length; e++) e[t] = 0;
        }
        function a(e, t, r, n, i) {
            for (var o, a, s, c, f = r[0], u = r[1], h = r[2], d = r[3], l = e[0] ^ t[0], p = e[1] ^ t[1], b = e[2] ^ t[2], g = e[3] ^ t[3], v = 4, y = 1; y < i; y++) o = f[l >>> 24] ^ u[p >>> 16 & 255] ^ h[b >>> 8 & 255] ^ d[255 & g] ^ t[v++], 
            a = f[p >>> 24] ^ u[b >>> 16 & 255] ^ h[g >>> 8 & 255] ^ d[255 & l] ^ t[v++], s = f[b >>> 24] ^ u[g >>> 16 & 255] ^ h[l >>> 8 & 255] ^ d[255 & p] ^ t[v++], 
            c = f[g >>> 24] ^ u[l >>> 16 & 255] ^ h[p >>> 8 & 255] ^ d[255 & b] ^ t[v++], l = o, 
            p = a, b = s, g = c;
            return o = (n[l >>> 24] << 24 | n[p >>> 16 & 255] << 16 | n[b >>> 8 & 255] << 8 | n[255 & g]) ^ t[v++], 
            a = (n[p >>> 24] << 24 | n[b >>> 16 & 255] << 16 | n[g >>> 8 & 255] << 8 | n[255 & l]) ^ t[v++], 
            s = (n[b >>> 24] << 24 | n[g >>> 16 & 255] << 16 | n[l >>> 8 & 255] << 8 | n[255 & p]) ^ t[v++], 
            c = (n[g >>> 24] << 24 | n[l >>> 16 & 255] << 16 | n[p >>> 8 & 255] << 8 | n[255 & b]) ^ t[v++], 
            o >>>= 0, a >>>= 0, s >>>= 0, c >>>= 0, [ o, a, s, c ];
        }
        var s = [ 0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54 ], c = function() {
            for (var e = new Array(256), t = 0; t < 256; t++) e[t] = t < 128 ? t << 1 : t << 1 ^ 283;
            for (var r = [], n = [], i = [ [], [], [], [] ], o = [ [], [], [], [] ], a = 0, s = 0, c = 0; c < 256; ++c) {
                var f = s ^ s << 1 ^ s << 2 ^ s << 3 ^ s << 4;
                f = f >>> 8 ^ 255 & f ^ 99, r[a] = f, n[f] = a;
                var u = e[a], h = e[u], d = e[h], l = 257 * e[f] ^ 16843008 * f;
                i[0][a] = l << 24 | l >>> 8, i[1][a] = l << 16 | l >>> 16, i[2][a] = l << 8 | l >>> 24, 
                i[3][a] = l, l = 16843009 * d ^ 65537 * h ^ 257 * u ^ 16843008 * a, o[0][f] = l << 24 | l >>> 8, 
                o[1][f] = l << 16 | l >>> 16, o[2][f] = l << 8 | l >>> 24, o[3][f] = l, 0 === a ? a = s = 1 : (a = u ^ e[e[e[d ^ u]]], 
                s ^= e[e[s]]);
            }
            return {
                SBOX: r,
                INV_SBOX: n,
                SUB_MIX: i,
                INV_SUB_MIX: o
            };
        }();
        function f(e) {
            this._key = i(e), this._reset();
        }
        f.blockSize = 16, f.keySize = 32, f.prototype.blockSize = f.blockSize, f.prototype.keySize = f.keySize, 
        f.prototype._reset = function() {
            for (var e = this._key, t = e.length, r = t + 6, n = 4 * (r + 1), i = [], o = 0; o < t; o++) i[o] = e[o];
            for (o = t; o < n; o++) {
                var a = i[o - 1];
                o % t === 0 ? (a = a << 8 | a >>> 24, a = c.SBOX[a >>> 24] << 24 | c.SBOX[a >>> 16 & 255] << 16 | c.SBOX[a >>> 8 & 255] << 8 | c.SBOX[255 & a], 
                a ^= s[o / t | 0] << 24) : t > 6 && o % t === 4 && (a = c.SBOX[a >>> 24] << 24 | c.SBOX[a >>> 16 & 255] << 16 | c.SBOX[a >>> 8 & 255] << 8 | c.SBOX[255 & a]), 
                i[o] = i[o - t] ^ a;
            }
            for (var f = [], u = 0; u < n; u++) {
                var h = n - u, d = i[h - (u % 4 ? 0 : 4)];
                f[u] = u < 4 || h <= 4 ? d : c.INV_SUB_MIX[0][c.SBOX[d >>> 24]] ^ c.INV_SUB_MIX[1][c.SBOX[d >>> 16 & 255]] ^ c.INV_SUB_MIX[2][c.SBOX[d >>> 8 & 255]] ^ c.INV_SUB_MIX[3][c.SBOX[255 & d]];
            }
            this._nRounds = r, this._keySchedule = i, this._invKeySchedule = f;
        }, f.prototype.encryptBlockRaw = function(e) {
            return e = i(e), a(e, this._keySchedule, c.SUB_MIX, c.SBOX, this._nRounds);
        }, f.prototype.encryptBlock = function(e) {
            var t = this.encryptBlockRaw(e), r = n.allocUnsafe(16);
            return r.writeUInt32BE(t[0], 0), r.writeUInt32BE(t[1], 4), r.writeUInt32BE(t[2], 8), 
            r.writeUInt32BE(t[3], 12), r;
        }, f.prototype.decryptBlock = function(e) {
            e = i(e);
            var t = e[1];
            e[1] = e[3], e[3] = t;
            var r = a(e, this._invKeySchedule, c.INV_SUB_MIX, c.INV_SBOX, this._nRounds), o = n.allocUnsafe(16);
            return o.writeUInt32BE(r[0], 0), o.writeUInt32BE(r[3], 4), o.writeUInt32BE(r[2], 8), 
            o.writeUInt32BE(r[1], 12), o;
        }, f.prototype.scrub = function() {
            o(this._keySchedule), o(this._invKeySchedule), o(this._key);
        }, e.exports.AES = f;
    }

// ==================== 元数据 ====================
// 此文件包含从 wx0611624cc959bd21 提取的 AES 算法实现
// 检测位置: 行 4163-4180
// 变量名: r
// 检测源: dynamic-iife-traced
