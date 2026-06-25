/**
 * AES 算法实现
 * App ID: wx0526b0432a899356
 * 版本: v36
 * 代码哈希: -b27ica
 * 来源文件: output/wx0526b0432a899356/common/vendor.js
 * 检测类型: Round constants
 * 置信度: 0.8
 * 函数名: anonymous
 * 行数: 72
 * 生成时间: 2025-07-05T13:17:10.623Z
 */

function(t, e, r) {
        var i = r("8707").Buffer;
        function o(t) {
            i.isBuffer(t) || (t = i.from(t));
            for (var e = t.length / 4 | 0, r = new Array(e), n = 0; n < e; n++) r[n] = t.readUInt32BE(4 * n);
            return r;
        }
        function n(t) {
            for (;0 < t.length; t++) t[0] = 0;
        }
        function a(t, e, r, n, i) {
            for (var o, a, s, c, f = r[0], u = r[1], h = r[2], d = r[3], l = t[0] ^ e[0], p = t[1] ^ e[1], b = t[2] ^ e[2], v = t[3] ^ e[3], g = 4, y = 1; y < i; y++) o = f[l >>> 24] ^ u[p >>> 16 & 255] ^ h[b >>> 8 & 255] ^ d[255 & v] ^ e[g++], 
            a = f[p >>> 24] ^ u[b >>> 16 & 255] ^ h[v >>> 8 & 255] ^ d[255 & l] ^ e[g++], s = f[b >>> 24] ^ u[v >>> 16 & 255] ^ h[l >>> 8 & 255] ^ d[255 & p] ^ e[g++], 
            c = f[v >>> 24] ^ u[l >>> 16 & 255] ^ h[p >>> 8 & 255] ^ d[255 & b] ^ e[g++], l = o, 
            p = a, b = s, v = c;
            return o = (n[l >>> 24] << 24 | n[p >>> 16 & 255] << 16 | n[b >>> 8 & 255] << 8 | n[255 & v]) ^ e[g++], 
            a = (n[p >>> 24] << 24 | n[b >>> 16 & 255] << 16 | n[v >>> 8 & 255] << 8 | n[255 & l]) ^ e[g++], 
            s = (n[b >>> 24] << 24 | n[v >>> 16 & 255] << 16 | n[l >>> 8 & 255] << 8 | n[255 & p]) ^ e[g++], 
            c = (n[v >>> 24] << 24 | n[l >>> 16 & 255] << 16 | n[p >>> 8 & 255] << 8 | n[255 & b]) ^ e[g++], 
            [ o >>>= 0, a >>>= 0, s >>>= 0, c >>>= 0 ];
        }
        var h = [ 0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54 ], d = function() {
            for (var t = new Array(256), e = 0; e < 256; e++) t[e] = e < 128 ? e << 1 : e << 1 ^ 283;
            for (var r = [], n = [], i = [ [], [], [], [] ], o = [ [], [], [], [] ], a = 0, s = 0, c = 0; c < 256; ++c) {
                var f = s ^ s << 1 ^ s << 2 ^ s << 3 ^ s << 4;
                f = f >>> 8 ^ 255 & f ^ 99;
                var u = t[n[r[a] = f] = a], h = t[u], d = t[h], l = 257 * t[f] ^ 16843008 * f;
                i[0][a] = l << 24 | l >>> 8, i[1][a] = l << 16 | l >>> 16, i[2][a] = l << 8 | l >>> 24, 
                i[3][a] = l, l = 16843009 * d ^ 65537 * h ^ 257 * u ^ 16843008 * a, o[0][f] = l << 24 | l >>> 8, 
                o[1][f] = l << 16 | l >>> 16, o[2][f] = l << 8 | l >>> 24, o[3][f] = l, 0 === a ? a = s = 1 : (a = u ^ t[t[t[d ^ u]]], 
                s ^= t[t[s]]);
            }
            return {
                SBOX: r,
                INV_SBOX: n,
                SUB_MIX: i,
                INV_SUB_MIX: o
            };
        }();
        function s(t) {
            this._key = o(t), this._reset();
        }
        s.blockSize = 16, s.keySize = 32, s.prototype.blockSize = s.blockSize, s.prototype.keySize = s.keySize, 
        s.prototype._reset = function() {
            for (var t = this._key, e = t.length, r = e + 6, n = 4 * (r + 1), i = [], o = 0; o < e; o++) i[o] = t[o];
            for (o = e; o < n; o++) {
                var a = i[o - 1];
                o % e == 0 ? (a = a << 8 | a >>> 24, a = d.SBOX[a >>> 24] << 24 | d.SBOX[a >>> 16 & 255] << 16 | d.SBOX[a >>> 8 & 255] << 8 | d.SBOX[255 & a], 
                a ^= h[o / e | 0] << 24) : 6 < e && o % e == 4 && (a = d.SBOX[a >>> 24] << 24 | d.SBOX[a >>> 16 & 255] << 16 | d.SBOX[a >>> 8 & 255] << 8 | d.SBOX[255 & a]), 
                i[o] = i[o - e] ^ a;
            }
            for (var s = [], c = 0; c < n; c++) {
                var f = n - c, u = i[f - (c % 4 ? 0 : 4)];
                s[c] = c < 4 || f <= 4 ? u : d.INV_SUB_MIX[0][d.SBOX[u >>> 24]] ^ d.INV_SUB_MIX[1][d.SBOX[u >>> 16 & 255]] ^ d.INV_SUB_MIX[2][d.SBOX[u >>> 8 & 255]] ^ d.INV_SUB_MIX[3][d.SBOX[255 & u]];
            }
            this._nRounds = r, this._keySchedule = i, this._invKeySchedule = s;
        }, s.prototype.encryptBlockRaw = function(t) {
            return a(t = o(t), this._keySchedule, d.SUB_MIX, d.SBOX, this._nRounds);
        }, s.prototype.encryptBlock = function(t) {
            var e = this.encryptBlockRaw(t), r = i.allocUnsafe(16);
            return r.writeUInt32BE(e[0], 0), r.writeUInt32BE(e[1], 4), r.writeUInt32BE(e[2], 8), 
            r.writeUInt32BE(e[3], 12), r;
        }, s.prototype.decryptBlock = function(t) {
            var e = (t = o(t))[1];
            t[1] = t[3], t[3] = e;
            var r = a(t, this._invKeySchedule, d.INV_SUB_MIX, d.INV_SBOX, this._nRounds), n = i.allocUnsafe(16);
            return n.writeUInt32BE(r[0], 0), n.writeUInt32BE(r[3], 4), n.writeUInt32BE(r[2], 8), 
            n.writeUInt32BE(r[1], 12), n;
        }, s.prototype.scrub = function() {
            n(this._keySchedule), n(this._invKeySchedule), n(this._key);
        }, t.exports.AES = s;
    }

// ==================== 元数据 ====================
// 此文件包含从 wx0526b0432a899356 提取的 AES 算法实现
// 检测位置: 行 3898-3915
// 变量名: h
// 检测源: static
