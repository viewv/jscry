/**
 * AES 算法实现
 * App ID: wx01351a762d0efdf5
 * 版本: v10
 * 代码哈希: c3lj09
 * 来源文件: output/wx01351a762d0efdf5/common/vendor.js
 * 检测类型: Round constants
 * 置信度: 0.8
 * 函数名: anonymous
 * 行数: 73
 * 生成时间: 2025-07-05T13:17:10.520Z
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
            for (var o, a, s, c, u = r[0], f = r[1], d = r[2], h = r[3], l = e[0] ^ t[0], p = e[1] ^ t[1], b = e[2] ^ t[2], y = e[3] ^ t[3], g = 4, m = 1; m < i; m++) o = u[l >>> 24] ^ f[p >>> 16 & 255] ^ d[b >>> 8 & 255] ^ h[255 & y] ^ t[g++], 
            a = u[p >>> 24] ^ f[b >>> 16 & 255] ^ d[y >>> 8 & 255] ^ h[255 & l] ^ t[g++], s = u[b >>> 24] ^ f[y >>> 16 & 255] ^ d[l >>> 8 & 255] ^ h[255 & p] ^ t[g++], 
            c = u[y >>> 24] ^ f[l >>> 16 & 255] ^ d[p >>> 8 & 255] ^ h[255 & b] ^ t[g++], l = o, 
            p = a, b = s, y = c;
            return o = (n[l >>> 24] << 24 | n[p >>> 16 & 255] << 16 | n[b >>> 8 & 255] << 8 | n[255 & y]) ^ t[g++], 
            a = (n[p >>> 24] << 24 | n[b >>> 16 & 255] << 16 | n[y >>> 8 & 255] << 8 | n[255 & l]) ^ t[g++], 
            s = (n[b >>> 24] << 24 | n[y >>> 16 & 255] << 16 | n[l >>> 8 & 255] << 8 | n[255 & p]) ^ t[g++], 
            c = (n[y >>> 24] << 24 | n[l >>> 16 & 255] << 16 | n[p >>> 8 & 255] << 8 | n[255 & b]) ^ t[g++], 
            o >>>= 0, a >>>= 0, s >>>= 0, c >>>= 0, [ o, a, s, c ];
        }
        var s = [ 0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54 ], c = function() {
            for (var e = new Array(256), t = 0; t < 256; t++) e[t] = t < 128 ? t << 1 : t << 1 ^ 283;
            for (var r = [], n = [], i = [ [], [], [], [] ], o = [ [], [], [], [] ], a = 0, s = 0, c = 0; c < 256; ++c) {
                var u = s ^ s << 1 ^ s << 2 ^ s << 3 ^ s << 4;
                u = u >>> 8 ^ 255 & u ^ 99, r[a] = u, n[u] = a;
                var f = e[a], d = e[f], h = e[d], l = 257 * e[u] ^ 16843008 * u;
                i[0][a] = l << 24 | l >>> 8, i[1][a] = l << 16 | l >>> 16, i[2][a] = l << 8 | l >>> 24, 
                i[3][a] = l, l = 16843009 * h ^ 65537 * d ^ 257 * f ^ 16843008 * a, o[0][u] = l << 24 | l >>> 8, 
                o[1][u] = l << 16 | l >>> 16, o[2][u] = l << 8 | l >>> 24, o[3][u] = l, 0 === a ? a = s = 1 : (a = f ^ e[e[e[h ^ f]]], 
                s ^= e[e[s]]);
            }
            return {
                SBOX: r,
                INV_SBOX: n,
                SUB_MIX: i,
                INV_SUB_MIX: o
            };
        }();
        function u(e) {
            this._key = i(e), this._reset();
        }
        u.blockSize = 16, u.keySize = 32, u.prototype.blockSize = u.blockSize, u.prototype.keySize = u.keySize, 
        u.prototype._reset = function() {
            for (var e = this._key, t = e.length, r = t + 6, n = 4 * (r + 1), i = [], o = 0; o < t; o++) i[o] = e[o];
            for (o = t; o < n; o++) {
                var a = i[o - 1];
                o % t === 0 ? (a = a << 8 | a >>> 24, a = c.SBOX[a >>> 24] << 24 | c.SBOX[a >>> 16 & 255] << 16 | c.SBOX[a >>> 8 & 255] << 8 | c.SBOX[255 & a], 
                a ^= s[o / t | 0] << 24) : t > 6 && o % t === 4 && (a = c.SBOX[a >>> 24] << 24 | c.SBOX[a >>> 16 & 255] << 16 | c.SBOX[a >>> 8 & 255] << 8 | c.SBOX[255 & a]), 
                i[o] = i[o - t] ^ a;
            }
            for (var u = [], f = 0; f < n; f++) {
                var d = n - f, h = i[d - (f % 4 ? 0 : 4)];
                u[f] = f < 4 || d <= 4 ? h : c.INV_SUB_MIX[0][c.SBOX[h >>> 24]] ^ c.INV_SUB_MIX[1][c.SBOX[h >>> 16 & 255]] ^ c.INV_SUB_MIX[2][c.SBOX[h >>> 8 & 255]] ^ c.INV_SUB_MIX[3][c.SBOX[255 & h]];
            }
            this._nRounds = r, this._keySchedule = i, this._invKeySchedule = u;
        }, u.prototype.encryptBlockRaw = function(e) {
            return e = i(e), a(e, this._keySchedule, c.SUB_MIX, c.SBOX, this._nRounds);
        }, u.prototype.encryptBlock = function(e) {
            var t = this.encryptBlockRaw(e), r = n.allocUnsafe(16);
            return r.writeUInt32BE(t[0], 0), r.writeUInt32BE(t[1], 4), r.writeUInt32BE(t[2], 8), 
            r.writeUInt32BE(t[3], 12), r;
        }, u.prototype.decryptBlock = function(e) {
            e = i(e);
            var t = e[1];
            e[1] = e[3], e[3] = t;
            var r = a(e, this._invKeySchedule, c.INV_SUB_MIX, c.INV_SBOX, this._nRounds), o = n.allocUnsafe(16);
            return o.writeUInt32BE(r[0], 0), o.writeUInt32BE(r[3], 4), o.writeUInt32BE(r[2], 8), 
            o.writeUInt32BE(r[1], 12), o;
        }, u.prototype.scrub = function() {
            o(this._keySchedule), o(this._invKeySchedule), o(this._key);
        }, e.exports.AES = u;
    }

// ==================== 元数据 ====================
// 此文件包含从 wx01351a762d0efdf5 提取的 AES 算法实现
// 检测位置: 行 12277-12277
// 变量名: ___
// 检测源: static
