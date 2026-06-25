/**
 * AES 算法实现
 * App ID: wx08cd8aaa6d20597d
 * 版本: v57
 * 代码哈希: -l2kpj4
 * 来源文件: output/wx08cd8aaa6d20597d/common/vendor.js
 * 检测类型: Round constants
 * 置信度: 0.8
 * 函数名: anonymous
 * 行数: 73
 * 生成时间: 2025-07-05T13:17:10.674Z
 */

function(t, e, n) {
        var r = n("8707").Buffer;
        function o(t) {
            r.isBuffer(t) || (t = r.from(t));
            for (var e = t.length / 4 | 0, n = new Array(e), o = 0; o < e; o++) n[o] = t.readUInt32BE(4 * o);
            return n;
        }
        function i(t) {
            for (var e = 0; e < t.length; t++) t[e] = 0;
        }
        function a(t, e, n, r, o) {
            for (var i, a, s, c, u = n[0], f = n[1], d = n[2], h = n[3], l = t[0] ^ e[0], p = t[1] ^ e[1], g = t[2] ^ e[2], m = t[3] ^ e[3], y = 4, v = 1; v < o; v++) i = u[l >>> 24] ^ f[p >>> 16 & 255] ^ d[g >>> 8 & 255] ^ h[255 & m] ^ e[y++], 
            a = u[p >>> 24] ^ f[g >>> 16 & 255] ^ d[m >>> 8 & 255] ^ h[255 & l] ^ e[y++], s = u[g >>> 24] ^ f[m >>> 16 & 255] ^ d[l >>> 8 & 255] ^ h[255 & p] ^ e[y++], 
            c = u[m >>> 24] ^ f[l >>> 16 & 255] ^ d[p >>> 8 & 255] ^ h[255 & g] ^ e[y++], l = i, 
            p = a, g = s, m = c;
            return i = (r[l >>> 24] << 24 | r[p >>> 16 & 255] << 16 | r[g >>> 8 & 255] << 8 | r[255 & m]) ^ e[y++], 
            a = (r[p >>> 24] << 24 | r[g >>> 16 & 255] << 16 | r[m >>> 8 & 255] << 8 | r[255 & l]) ^ e[y++], 
            s = (r[g >>> 24] << 24 | r[m >>> 16 & 255] << 16 | r[l >>> 8 & 255] << 8 | r[255 & p]) ^ e[y++], 
            c = (r[m >>> 24] << 24 | r[l >>> 16 & 255] << 16 | r[p >>> 8 & 255] << 8 | r[255 & g]) ^ e[y++], 
            i >>>= 0, a >>>= 0, s >>>= 0, c >>>= 0, [ i, a, s, c ];
        }
        var s = [ 0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54 ], c = function() {
            for (var t = new Array(256), e = 0; e < 256; e++) t[e] = e < 128 ? e << 1 : e << 1 ^ 283;
            for (var n = [], r = [], o = [ [], [], [], [] ], i = [ [], [], [], [] ], a = 0, s = 0, c = 0; c < 256; ++c) {
                var u = s ^ s << 1 ^ s << 2 ^ s << 3 ^ s << 4;
                u = u >>> 8 ^ 255 & u ^ 99, n[a] = u, r[u] = a;
                var f = t[a], d = t[f], h = t[d], l = 257 * t[u] ^ 16843008 * u;
                o[0][a] = l << 24 | l >>> 8, o[1][a] = l << 16 | l >>> 16, o[2][a] = l << 8 | l >>> 24, 
                o[3][a] = l, l = 16843009 * h ^ 65537 * d ^ 257 * f ^ 16843008 * a, i[0][u] = l << 24 | l >>> 8, 
                i[1][u] = l << 16 | l >>> 16, i[2][u] = l << 8 | l >>> 24, i[3][u] = l, 0 === a ? a = s = 1 : (a = f ^ t[t[t[h ^ f]]], 
                s ^= t[t[s]]);
            }
            return {
                SBOX: n,
                INV_SBOX: r,
                SUB_MIX: o,
                INV_SUB_MIX: i
            };
        }();
        function u(t) {
            this._key = o(t), this._reset();
        }
        u.blockSize = 16, u.keySize = 32, u.prototype.blockSize = u.blockSize, u.prototype.keySize = u.keySize, 
        u.prototype._reset = function() {
            for (var t = this._key, e = t.length, n = e + 6, r = 4 * (n + 1), o = [], i = 0; i < e; i++) o[i] = t[i];
            for (i = e; i < r; i++) {
                var a = o[i - 1];
                i % e === 0 ? (a = a << 8 | a >>> 24, a = c.SBOX[a >>> 24] << 24 | c.SBOX[a >>> 16 & 255] << 16 | c.SBOX[a >>> 8 & 255] << 8 | c.SBOX[255 & a], 
                a ^= s[i / e | 0] << 24) : e > 6 && i % e === 4 && (a = c.SBOX[a >>> 24] << 24 | c.SBOX[a >>> 16 & 255] << 16 | c.SBOX[a >>> 8 & 255] << 8 | c.SBOX[255 & a]), 
                o[i] = o[i - e] ^ a;
            }
            for (var u = [], f = 0; f < r; f++) {
                var d = r - f, h = o[d - (f % 4 ? 0 : 4)];
                u[f] = f < 4 || d <= 4 ? h : c.INV_SUB_MIX[0][c.SBOX[h >>> 24]] ^ c.INV_SUB_MIX[1][c.SBOX[h >>> 16 & 255]] ^ c.INV_SUB_MIX[2][c.SBOX[h >>> 8 & 255]] ^ c.INV_SUB_MIX[3][c.SBOX[255 & h]];
            }
            this._nRounds = n, this._keySchedule = o, this._invKeySchedule = u;
        }, u.prototype.encryptBlockRaw = function(t) {
            return t = o(t), a(t, this._keySchedule, c.SUB_MIX, c.SBOX, this._nRounds);
        }, u.prototype.encryptBlock = function(t) {
            var e = this.encryptBlockRaw(t), n = r.allocUnsafe(16);
            return n.writeUInt32BE(e[0], 0), n.writeUInt32BE(e[1], 4), n.writeUInt32BE(e[2], 8), 
            n.writeUInt32BE(e[3], 12), n;
        }, u.prototype.decryptBlock = function(t) {
            t = o(t);
            var e = t[1];
            t[1] = t[3], t[3] = e;
            var n = a(t, this._invKeySchedule, c.INV_SUB_MIX, c.INV_SBOX, this._nRounds), i = r.allocUnsafe(16);
            return i.writeUInt32BE(n[0], 0), i.writeUInt32BE(n[3], 4), i.writeUInt32BE(n[2], 8), 
            i.writeUInt32BE(n[1], 12), i;
        }, u.prototype.scrub = function() {
            i(this._keySchedule), i(this._invKeySchedule), i(this._key);
        }, t.exports.AES = u;
    }

// ==================== 元数据 ====================
// 此文件包含从 wx08cd8aaa6d20597d 提取的 AES 算法实现
// 检测位置: 行 7993-8010
// 变量名: s
// 检测源: static
