/**
 * AES 算法实现
 * App ID: wx06ef95130dd6a356
 * 版本: v51
 * 代码哈希: -8tdpxz
 * 来源文件: output/wx06ef95130dd6a356/common/vendor.js
 * 检测类型: Round constants
 * 置信度: 0.8
 * 函数名: anonymous
 * 行数: 73
 * 生成时间: 2025-07-05T13:17:10.660Z
 */

function(t, e, r) {
        var n = r("8707").Buffer;
        function i(t) {
            n.isBuffer(t) || (t = n.from(t));
            for (var e = t.length / 4 | 0, r = new Array(e), i = 0; i < e; i++) r[i] = t.readUInt32BE(4 * i);
            return r;
        }
        function o(t) {
            for (var e = 0; e < t.length; t++) t[e] = 0;
        }
        function a(t, e, r, n, i) {
            for (var o, a, f, s, c = r[0], u = r[1], h = r[2], d = r[3], l = t[0] ^ e[0], p = t[1] ^ e[1], b = t[2] ^ e[2], v = t[3] ^ e[3], y = 4, g = 1; g < i; g++) o = c[l >>> 24] ^ u[p >>> 16 & 255] ^ h[b >>> 8 & 255] ^ d[255 & v] ^ e[y++], 
            a = c[p >>> 24] ^ u[b >>> 16 & 255] ^ h[v >>> 8 & 255] ^ d[255 & l] ^ e[y++], f = c[b >>> 24] ^ u[v >>> 16 & 255] ^ h[l >>> 8 & 255] ^ d[255 & p] ^ e[y++], 
            s = c[v >>> 24] ^ u[l >>> 16 & 255] ^ h[p >>> 8 & 255] ^ d[255 & b] ^ e[y++], l = o, 
            p = a, b = f, v = s;
            return o = (n[l >>> 24] << 24 | n[p >>> 16 & 255] << 16 | n[b >>> 8 & 255] << 8 | n[255 & v]) ^ e[y++], 
            a = (n[p >>> 24] << 24 | n[b >>> 16 & 255] << 16 | n[v >>> 8 & 255] << 8 | n[255 & l]) ^ e[y++], 
            f = (n[b >>> 24] << 24 | n[v >>> 16 & 255] << 16 | n[l >>> 8 & 255] << 8 | n[255 & p]) ^ e[y++], 
            s = (n[v >>> 24] << 24 | n[l >>> 16 & 255] << 16 | n[p >>> 8 & 255] << 8 | n[255 & b]) ^ e[y++], 
            o >>>= 0, a >>>= 0, f >>>= 0, s >>>= 0, [ o, a, f, s ];
        }
        var f = [ 0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54 ], s = function() {
            for (var t = new Array(256), e = 0; e < 256; e++) t[e] = e < 128 ? e << 1 : e << 1 ^ 283;
            for (var r = [], n = [], i = [ [], [], [], [] ], o = [ [], [], [], [] ], a = 0, f = 0, s = 0; s < 256; ++s) {
                var c = f ^ f << 1 ^ f << 2 ^ f << 3 ^ f << 4;
                c = c >>> 8 ^ 255 & c ^ 99, r[a] = c, n[c] = a;
                var u = t[a], h = t[u], d = t[h], l = 257 * t[c] ^ 16843008 * c;
                i[0][a] = l << 24 | l >>> 8, i[1][a] = l << 16 | l >>> 16, i[2][a] = l << 8 | l >>> 24, 
                i[3][a] = l, l = 16843009 * d ^ 65537 * h ^ 257 * u ^ 16843008 * a, o[0][c] = l << 24 | l >>> 8, 
                o[1][c] = l << 16 | l >>> 16, o[2][c] = l << 8 | l >>> 24, o[3][c] = l, 0 === a ? a = f = 1 : (a = u ^ t[t[t[d ^ u]]], 
                f ^= t[t[f]]);
            }
            return {
                SBOX: r,
                INV_SBOX: n,
                SUB_MIX: i,
                INV_SUB_MIX: o
            };
        }();
        function c(t) {
            this._key = i(t), this._reset();
        }
        c.blockSize = 16, c.keySize = 32, c.prototype.blockSize = c.blockSize, c.prototype.keySize = c.keySize, 
        c.prototype._reset = function() {
            for (var t = this._key, e = t.length, r = e + 6, n = 4 * (r + 1), i = [], o = 0; o < e; o++) i[o] = t[o];
            for (o = e; o < n; o++) {
                var a = i[o - 1];
                o % e === 0 ? (a = a << 8 | a >>> 24, a = s.SBOX[a >>> 24] << 24 | s.SBOX[a >>> 16 & 255] << 16 | s.SBOX[a >>> 8 & 255] << 8 | s.SBOX[255 & a], 
                a ^= f[o / e | 0] << 24) : e > 6 && o % e === 4 && (a = s.SBOX[a >>> 24] << 24 | s.SBOX[a >>> 16 & 255] << 16 | s.SBOX[a >>> 8 & 255] << 8 | s.SBOX[255 & a]), 
                i[o] = i[o - e] ^ a;
            }
            for (var c = [], u = 0; u < n; u++) {
                var h = n - u, d = i[h - (u % 4 ? 0 : 4)];
                c[u] = u < 4 || h <= 4 ? d : s.INV_SUB_MIX[0][s.SBOX[d >>> 24]] ^ s.INV_SUB_MIX[1][s.SBOX[d >>> 16 & 255]] ^ s.INV_SUB_MIX[2][s.SBOX[d >>> 8 & 255]] ^ s.INV_SUB_MIX[3][s.SBOX[255 & d]];
            }
            this._nRounds = r, this._keySchedule = i, this._invKeySchedule = c;
        }, c.prototype.encryptBlockRaw = function(t) {
            return t = i(t), a(t, this._keySchedule, s.SUB_MIX, s.SBOX, this._nRounds);
        }, c.prototype.encryptBlock = function(t) {
            var e = this.encryptBlockRaw(t), r = n.allocUnsafe(16);
            return r.writeUInt32BE(e[0], 0), r.writeUInt32BE(e[1], 4), r.writeUInt32BE(e[2], 8), 
            r.writeUInt32BE(e[3], 12), r;
        }, c.prototype.decryptBlock = function(t) {
            t = i(t);
            var e = t[1];
            t[1] = t[3], t[3] = e;
            var r = a(t, this._invKeySchedule, s.INV_SUB_MIX, s.INV_SBOX, this._nRounds), o = n.allocUnsafe(16);
            return o.writeUInt32BE(r[0], 0), o.writeUInt32BE(r[3], 4), o.writeUInt32BE(r[2], 8), 
            o.writeUInt32BE(r[1], 12), o;
        }, c.prototype.scrub = function() {
            o(this._keySchedule), o(this._invKeySchedule), o(this._key);
        }, t.exports.AES = c;
    }

// ==================== 元数据 ====================
// 此文件包含从 wx06ef95130dd6a356 提取的 AES 算法实现
// 检测位置: 行 6613-6613
// 变量名: ___
// 检测源: static
