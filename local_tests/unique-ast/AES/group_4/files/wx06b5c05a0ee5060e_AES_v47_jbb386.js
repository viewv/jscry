/**
 * AES 算法实现
 * App ID: wx06b5c05a0ee5060e
 * 版本: v47
 * 代码哈希: jbb386
 * 来源文件: output/wx06b5c05a0ee5060e/common/vendor.js
 * 检测类型: S-box
 * 置信度: 0.95
 * 函数名: anonymous
 * 行数: 77
 * 生成时间: 2025-07-05T13:17:10.652Z
 */

function(t, e, r) {
    var n = r(/*! safe-buffer */ 25).Buffer;
    function i(t) {
        n.isBuffer(t) || (t = n.from(t));
        for (var e = t.length / 4 | 0, r = new Array(e), i = 0; i < e; i++) r[i] = t.readUInt32BE(4 * i);
        return r;
    }
    function o(t) {
        for (var e = 0; e < t.length; t++) t[e] = 0;
    }
    function a(t, e, r, n, i) {
        for (var o, a, c, s, f = r[0], u = r[1], d = r[2], h = r[3], l = t[0] ^ e[0], p = t[1] ^ e[1], b = t[2] ^ e[2], v = t[3] ^ e[3], m = 4, W = 1; W < i; W++) o = f[l >>> 24] ^ u[p >>> 16 & 255] ^ d[b >>> 8 & 255] ^ h[255 & v] ^ e[m++], 
        a = f[p >>> 24] ^ u[b >>> 16 & 255] ^ d[v >>> 8 & 255] ^ h[255 & l] ^ e[m++], c = f[b >>> 24] ^ u[v >>> 16 & 255] ^ d[l >>> 8 & 255] ^ h[255 & p] ^ e[m++], 
        s = f[v >>> 24] ^ u[l >>> 16 & 255] ^ d[p >>> 8 & 255] ^ h[255 & b] ^ e[m++], l = o, 
        p = a, b = c, v = s;
        return o = (n[l >>> 24] << 24 | n[p >>> 16 & 255] << 16 | n[b >>> 8 & 255] << 8 | n[255 & v]) ^ e[m++], 
        a = (n[p >>> 24] << 24 | n[b >>> 16 & 255] << 16 | n[v >>> 8 & 255] << 8 | n[255 & l]) ^ e[m++], 
        c = (n[b >>> 24] << 24 | n[v >>> 16 & 255] << 16 | n[l >>> 8 & 255] << 8 | n[255 & p]) ^ e[m++], 
        s = (n[v >>> 24] << 24 | n[l >>> 16 & 255] << 16 | n[p >>> 8 & 255] << 8 | n[255 & b]) ^ e[m++], 
        o >>>= 0, a >>>= 0, c >>>= 0, s >>>= 0, [ o, a, c, s ];
    }
    var c = [ 0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54 ], s = function() {
        for (var t = new Array(256), e = 0; e < 256; e++) t[e] = e < 128 ? e << 1 : e << 1 ^ 283;
        for (var r = [], n = [], i = [ [], [], [], [] ], o = [ [], [], [], [] ], a = 0, c = 0, s = 0; s < 256; ++s) {
            var f = c ^ c << 1 ^ c << 2 ^ c << 3 ^ c << 4;
            f = f >>> 8 ^ 255 & f ^ 99, r[a] = f, n[f] = a;
            var u = t[a], d = t[u], h = t[d], l = 257 * t[f] ^ 16843008 * f;
            i[0][a] = l << 24 | l >>> 8, i[1][a] = l << 16 | l >>> 16, i[2][a] = l << 8 | l >>> 24, 
            i[3][a] = l, l = 16843009 * h ^ 65537 * d ^ 257 * u ^ 16843008 * a, o[0][f] = l << 24 | l >>> 8, 
            o[1][f] = l << 16 | l >>> 16, o[2][f] = l << 8 | l >>> 24, o[3][f] = l, 0 === a ? a = c = 1 : (a = u ^ t[t[t[h ^ u]]], 
            c ^= t[t[c]]);
        }
        return {
            SBOX: r,
            INV_SBOX: n,
            SUB_MIX: i,
            INV_SUB_MIX: o
        };
    }();
    function f(t) {
        this._key = i(t), this._reset();
    }
    f.blockSize = 16, f.keySize = 32, f.prototype.blockSize = f.blockSize, f.prototype.keySize = f.keySize, 
    f.prototype._reset = function() {
        for (var t = this._key, e = t.length, r = e + 6, n = 4 * (r + 1), i = [], o = 0; o < e; o++) i[o] = t[o];
        for (o = e; o < n; o++) {
            var a = i[o - 1];
            o % e === 0 ? (a = a << 8 | a >>> 24, a = s.SBOX[a >>> 24] << 24 | s.SBOX[a >>> 16 & 255] << 16 | s.SBOX[a >>> 8 & 255] << 8 | s.SBOX[255 & a], 
            a ^= c[o / e | 0] << 24) : e > 6 && o % e === 4 && (a = s.SBOX[a >>> 24] << 24 | s.SBOX[a >>> 16 & 255] << 16 | s.SBOX[a >>> 8 & 255] << 8 | s.SBOX[255 & a]), 
            i[o] = i[o - e] ^ a;
        }
        for (var f = [], u = 0; u < n; u++) {
            var d = n - u, h = i[d - (u % 4 ? 0 : 4)];
            f[u] = u < 4 || d <= 4 ? h : s.INV_SUB_MIX[0][s.SBOX[h >>> 24]] ^ s.INV_SUB_MIX[1][s.SBOX[h >>> 16 & 255]] ^ s.INV_SUB_MIX[2][s.SBOX[h >>> 8 & 255]] ^ s.INV_SUB_MIX[3][s.SBOX[255 & h]];
        }
        this._nRounds = r, this._keySchedule = i, this._invKeySchedule = f;
    }, f.prototype.encryptBlockRaw = function(t) {
        return t = i(t), a(t, this._keySchedule, s.SUB_MIX, s.SBOX, this._nRounds);
    }, f.prototype.encryptBlock = function(t) {
        var e = this.encryptBlockRaw(t), r = n.allocUnsafe(16);
        return r.writeUInt32BE(e[0], 0), r.writeUInt32BE(e[1], 4), r.writeUInt32BE(e[2], 8), 
        r.writeUInt32BE(e[3], 12), r;
    }, f.prototype.decryptBlock = function(t) {
        t = i(t);
        var e = t[1];
        t[1] = t[3], t[3] = e;
        var r = a(t, this._invKeySchedule, s.INV_SUB_MIX, s.INV_SBOX, this._nRounds), o = n.allocUnsafe(16);
        return o.writeUInt32BE(r[0], 0), o.writeUInt32BE(r[3], 4), o.writeUInt32BE(r[2], 8), 
        o.writeUInt32BE(r[1], 12), o;
    }, f.prototype.scrub = function() {
        o(this._keySchedule), o(this._invKeySchedule), o(this._key);
    }, t.exports.AES = f
    /*!**********************************************!*\
  !*** ./node_modules/browserify-aes/ghash.js ***!
  \**********************************************/
    /*! no static exports found */;
}

// ==================== 元数据 ====================
// 此文件包含从 wx06b5c05a0ee5060e 提取的 AES 算法实现
// 检测位置: 行 12082-12099
// 变量名: r
// 检测源: dynamic-iife-traced
