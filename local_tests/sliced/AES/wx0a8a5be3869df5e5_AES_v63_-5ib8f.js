/**
 * AES 算法实现
 * App ID: wx0a8a5be3869df5e5
 * 版本: v63
 * 代码哈希: -5ib8f7
 * 来源文件: output/wx0a8a5be3869df5e5/common/vendor.js
 * 检测类型: Inverse S-box
 * 置信度: 0.95
 * 函数名: anonymous
 * 行数: 72
 * 生成时间: 2025-07-05T13:17:10.703Z
 */

function(t, e, a) {
        var r = a("X3l8").Buffer;
        function n(t) {
            r.isBuffer(t) || (t = r.from(t));
            for (var e = t.length / 4 | 0, a = new Array(e), n = 0; n < e; n++) a[n] = t.readUInt32BE(4 * n);
            return a;
        }
        function o(t) {
            for (;0 < t.length; t++) t[0] = 0;
        }
        function i(t, e, a, r, n) {
            for (var o, i, s, c, p = a[0], u = a[1], f = a[2], d = a[3], l = t[0] ^ e[0], h = t[1] ^ e[1], y = t[2] ^ e[2], g = t[3] ^ e[3], v = 4, m = 1; m < n; m++) o = p[l >>> 24] ^ u[h >>> 16 & 255] ^ f[y >>> 8 & 255] ^ d[255 & g] ^ e[v++], 
            i = p[h >>> 24] ^ u[y >>> 16 & 255] ^ f[g >>> 8 & 255] ^ d[255 & l] ^ e[v++], s = p[y >>> 24] ^ u[g >>> 16 & 255] ^ f[l >>> 8 & 255] ^ d[255 & h] ^ e[v++], 
            c = p[g >>> 24] ^ u[l >>> 16 & 255] ^ f[h >>> 8 & 255] ^ d[255 & y] ^ e[v++], l = o, 
            h = i, y = s, g = c;
            return o = (r[l >>> 24] << 24 | r[h >>> 16 & 255] << 16 | r[y >>> 8 & 255] << 8 | r[255 & g]) ^ e[v++], 
            i = (r[h >>> 24] << 24 | r[y >>> 16 & 255] << 16 | r[g >>> 8 & 255] << 8 | r[255 & l]) ^ e[v++], 
            s = (r[y >>> 24] << 24 | r[g >>> 16 & 255] << 16 | r[l >>> 8 & 255] << 8 | r[255 & h]) ^ e[v++], 
            c = (r[g >>> 24] << 24 | r[l >>> 16 & 255] << 16 | r[h >>> 8 & 255] << 8 | r[255 & y]) ^ e[v++], 
            [ o >>>= 0, i >>>= 0, s >>>= 0, c >>>= 0 ];
        }
        var s = [ 0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54 ], c = function() {
            for (var t = new Array(256), e = 0; e < 256; e++) t[e] = e < 128 ? e << 1 : e << 1 ^ 283;
            for (var a = [], r = [], n = [ [], [], [], [] ], o = [ [], [], [], [] ], i = 0, s = 0, c = 0; c < 256; ++c) {
                var p = s ^ s << 1 ^ s << 2 ^ s << 3 ^ s << 4;
                p = p >>> 8 ^ 255 & p ^ 99, a[i] = p, r[p] = i;
                var u = t[i], f = t[u], d = t[f], l = 257 * t[p] ^ 16843008 * p;
                n[0][i] = l << 24 | l >>> 8, n[1][i] = l << 16 | l >>> 16, n[2][i] = l << 8 | l >>> 24, 
                n[3][i] = l, l = 16843009 * d ^ 65537 * f ^ 257 * u ^ 16843008 * i, o[0][p] = l << 24 | l >>> 8, 
                o[1][p] = l << 16 | l >>> 16, o[2][p] = l << 8 | l >>> 24, o[3][p] = l, 0 === i ? i = s = 1 : (i = u ^ t[t[t[d ^ u]]], 
                s ^= t[t[s]]);
            }
            return {
                SBOX: a,
                INV_SBOX: r,
                SUB_MIX: n,
                INV_SUB_MIX: o
            };
        }();
        function p(t) {
            this._key = n(t), this._reset();
        }
        p.blockSize = 16, p.keySize = 32, p.prototype.blockSize = p.blockSize, p.prototype.keySize = p.keySize, 
        p.prototype._reset = function() {
            for (var t = this._key, e = t.length, a = e + 6, r = 4 * (a + 1), n = [], o = 0; o < e; o++) n[o] = t[o];
            for (o = e; o < r; o++) {
                var i = n[o - 1];
                o % e == 0 ? (i = i << 8 | i >>> 24, i = c.SBOX[i >>> 24] << 24 | c.SBOX[i >>> 16 & 255] << 16 | c.SBOX[i >>> 8 & 255] << 8 | c.SBOX[255 & i], 
                i ^= s[o / e | 0] << 24) : e > 6 && o % e == 4 && (i = c.SBOX[i >>> 24] << 24 | c.SBOX[i >>> 16 & 255] << 16 | c.SBOX[i >>> 8 & 255] << 8 | c.SBOX[255 & i]), 
                n[o] = n[o - e] ^ i;
            }
            for (var p = [], u = 0; u < r; u++) {
                var f = r - u, d = n[f - (u % 4 ? 0 : 4)];
                p[u] = u < 4 || f <= 4 ? d : c.INV_SUB_MIX[0][c.SBOX[d >>> 24]] ^ c.INV_SUB_MIX[1][c.SBOX[d >>> 16 & 255]] ^ c.INV_SUB_MIX[2][c.SBOX[d >>> 8 & 255]] ^ c.INV_SUB_MIX[3][c.SBOX[255 & d]];
            }
            this._nRounds = a, this._keySchedule = n, this._invKeySchedule = p;
        }, p.prototype.encryptBlockRaw = function(t) {
            return i(t = n(t), this._keySchedule, c.SUB_MIX, c.SBOX, this._nRounds);
        }, p.prototype.encryptBlock = function(t) {
            var e = this.encryptBlockRaw(t), a = r.allocUnsafe(16);
            return a.writeUInt32BE(e[0], 0), a.writeUInt32BE(e[1], 4), a.writeUInt32BE(e[2], 8), 
            a.writeUInt32BE(e[3], 12), a;
        }, p.prototype.decryptBlock = function(t) {
            var e = (t = n(t))[1];
            t[1] = t[3], t[3] = e;
            var a = i(t, this._invKeySchedule, c.INV_SUB_MIX, c.INV_SBOX, this._nRounds), o = r.allocUnsafe(16);
            return o.writeUInt32BE(a[0], 0), o.writeUInt32BE(a[3], 4), o.writeUInt32BE(a[2], 8), 
            o.writeUInt32BE(a[1], 12), o;
        }, p.prototype.scrub = function() {
            o(this._keySchedule), o(this._invKeySchedule), o(this._key);
        }, t.exports.AES = p;
    }

// ==================== 元数据 ====================
// 此文件包含从 wx0a8a5be3869df5e5 提取的 AES 算法实现
// 检测位置: 行 5432-5449
// 变量名: r
// 检测源: dynamic-iife-traced
