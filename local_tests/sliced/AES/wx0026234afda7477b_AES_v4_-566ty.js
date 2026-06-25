/**
 * AES 算法实现
 * App ID: wx0026234afda7477b
 * 版本: v4
 * 代码哈希: -566tys
 * 来源文件: output/wx0026234afda7477b/common/vendor.js
 * 检测类型: Round constants
 * 置信度: 0.8
 * 函数名: anonymous
 * 行数: 71
 * 生成时间: 2025-07-05T13:17:10.501Z
 */

function(t, e, r) {
        function n(t) {
            s.isBuffer(t) || (t = s.from(t));
            for (var e = t.length / 4 | 0, r = new Array(e), n = 0; n < e; n++) r[n] = t.readUInt32BE(4 * n);
            return r;
        }
        function i(t) {
            for (;0 < t.length; t++) t[0] = 0;
        }
        function o(t, e, r, n, i) {
            for (var o, a, s, f, c = r[0], u = r[1], d = r[2], h = r[3], l = t[0] ^ e[0], p = t[1] ^ e[1], b = t[2] ^ e[2], v = t[3] ^ e[3], y = 4, g = 1; g < i; g++) o = c[l >>> 24] ^ u[p >>> 16 & 255] ^ d[b >>> 8 & 255] ^ h[255 & v] ^ e[y++], 
            a = c[p >>> 24] ^ u[b >>> 16 & 255] ^ d[v >>> 8 & 255] ^ h[255 & l] ^ e[y++], s = c[b >>> 24] ^ u[v >>> 16 & 255] ^ d[l >>> 8 & 255] ^ h[255 & p] ^ e[y++], 
            f = c[v >>> 24] ^ u[l >>> 16 & 255] ^ d[p >>> 8 & 255] ^ h[255 & b] ^ e[y++], l = o, 
            p = a, b = s, v = f;
            return o = (n[l >>> 24] << 24 | n[p >>> 16 & 255] << 16 | n[b >>> 8 & 255] << 8 | n[255 & v]) ^ e[y++], 
            a = (n[p >>> 24] << 24 | n[b >>> 16 & 255] << 16 | n[v >>> 8 & 255] << 8 | n[255 & l]) ^ e[y++], 
            s = (n[b >>> 24] << 24 | n[v >>> 16 & 255] << 16 | n[l >>> 8 & 255] << 8 | n[255 & p]) ^ e[y++], 
            f = (n[v >>> 24] << 24 | n[l >>> 16 & 255] << 16 | n[p >>> 8 & 255] << 8 | n[255 & b]) ^ e[y++], 
            o >>>= 0, a >>>= 0, s >>>= 0, f >>>= 0, [ o, a, s, f ];
        }
        function a(t) {
            this._key = n(t), this._reset();
        }
        var s = r("8707").Buffer, f = [ 0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54 ], c = function() {
            for (var t = new Array(256), e = 0; e < 256; e++) t[e] = e < 128 ? e << 1 : e << 1 ^ 283;
            for (var r = [], n = [], i = [ [], [], [], [] ], o = [ [], [], [], [] ], a = 0, s = 0, f = 0; f < 256; ++f) {
                var c = s ^ s << 1 ^ s << 2 ^ s << 3 ^ s << 4;
                c = c >>> 8 ^ 255 & c ^ 99, r[a] = c, n[c] = a;
                var u = t[a], d = t[u], h = t[d], l = 257 * t[c] ^ 16843008 * c;
                i[0][a] = l << 24 | l >>> 8, i[1][a] = l << 16 | l >>> 16, i[2][a] = l << 8 | l >>> 24, 
                i[3][a] = l, l = 16843009 * h ^ 65537 * d ^ 257 * u ^ 16843008 * a, o[0][c] = l << 24 | l >>> 8, 
                o[1][c] = l << 16 | l >>> 16, o[2][c] = l << 8 | l >>> 24, o[3][c] = l, 0 === a ? a = s = 1 : (a = u ^ t[t[t[h ^ u]]], 
                s ^= t[t[s]]);
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
            for (var t = this._key, e = t.length, r = e + 6, n = 4 * (r + 1), i = [], o = 0; o < e; o++) i[o] = t[o];
            for (o = e; o < n; o++) {
                var a = i[o - 1];
                o % e == 0 ? (a = a << 8 | a >>> 24, a = c.SBOX[a >>> 24] << 24 | c.SBOX[a >>> 16 & 255] << 16 | c.SBOX[a >>> 8 & 255] << 8 | c.SBOX[255 & a], 
                a ^= f[o / e | 0] << 24) : e > 6 && o % e == 4 && (a = c.SBOX[a >>> 24] << 24 | c.SBOX[a >>> 16 & 255] << 16 | c.SBOX[a >>> 8 & 255] << 8 | c.SBOX[255 & a]), 
                i[o] = i[o - e] ^ a;
            }
            for (var s = [], u = 0; u < n; u++) {
                var d = n - u, h = i[d - (u % 4 ? 0 : 4)];
                s[u] = u < 4 || d <= 4 ? h : c.INV_SUB_MIX[0][c.SBOX[h >>> 24]] ^ c.INV_SUB_MIX[1][c.SBOX[h >>> 16 & 255]] ^ c.INV_SUB_MIX[2][c.SBOX[h >>> 8 & 255]] ^ c.INV_SUB_MIX[3][c.SBOX[255 & h]];
            }
            this._nRounds = r, this._keySchedule = i, this._invKeySchedule = s;
        }, a.prototype.encryptBlockRaw = function(t) {
            return t = n(t), o(t, this._keySchedule, c.SUB_MIX, c.SBOX, this._nRounds);
        }, a.prototype.encryptBlock = function(t) {
            var e = this.encryptBlockRaw(t), r = s.allocUnsafe(16);
            return r.writeUInt32BE(e[0], 0), r.writeUInt32BE(e[1], 4), r.writeUInt32BE(e[2], 8), 
            r.writeUInt32BE(e[3], 12), r;
        }, a.prototype.decryptBlock = function(t) {
            var e = (t = n(t))[1];
            t[1] = t[3], t[3] = e;
            var r = o(t, this._invKeySchedule, c.INV_SUB_MIX, c.INV_SBOX, this._nRounds), i = s.allocUnsafe(16);
            return i.writeUInt32BE(r[0], 0), i.writeUInt32BE(r[3], 4), i.writeUInt32BE(r[2], 8), 
            i.writeUInt32BE(r[1], 12), i;
        }, a.prototype.scrub = function() {
            i(this._keySchedule), i(this._invKeySchedule), i(this._key);
        }, t.exports.AES = a;
    }

// ==================== 元数据 ====================
// 此文件包含从 wx0026234afda7477b 提取的 AES 算法实现
// 检测位置: 行 3063-3080
// 变量名: f
// 检测源: static
