/**
 * MD5 算法实现
 * App ID: wx0551abe2395c5dfb
 * 版本: v37
 * 代码哈希: c8weuh
 * 来源文件: output/wx0551abe2395c5dfb/common/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.95
 * 函数名: anonymous
 * 行数: 189
 * 生成时间: 2025-07-05T13:17:10.774Z
 */

function(e) {
                        "use strict";
                        var t = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f" ];
                        function n(e, t) {
                            var n = e[0], r = e[1], o = e[2], i = e[3];
                            n += (r & o | ~r & i) + t[0] - 680876936 | 0, n = (n << 7 | n >>> 25) + r | 0, i += (n & r | ~n & o) + t[1] - 389564586 | 0, 
                            i = (i << 12 | i >>> 20) + n | 0, o += (i & n | ~i & r) + t[2] + 606105819 | 0, 
                            o = (o << 17 | o >>> 15) + i | 0, r += (o & i | ~o & n) + t[3] - 1044525330 | 0, 
                            r = (r << 22 | r >>> 10) + o | 0, n += (r & o | ~r & i) + t[4] - 176418897 | 0, 
                            n = (n << 7 | n >>> 25) + r | 0, i += (n & r | ~n & o) + t[5] + 1200080426 | 0, 
                            i = (i << 12 | i >>> 20) + n | 0, o += (i & n | ~i & r) + t[6] - 1473231341 | 0, 
                            o = (o << 17 | o >>> 15) + i | 0, r += (o & i | ~o & n) + t[7] - 45705983 | 0, r = (r << 22 | r >>> 10) + o | 0, 
                            n += (r & o | ~r & i) + t[8] + 1770035416 | 0, n = (n << 7 | n >>> 25) + r | 0, 
                            i += (n & r | ~n & o) + t[9] - 1958414417 | 0, i = (i << 12 | i >>> 20) + n | 0, 
                            o += (i & n | ~i & r) + t[10] - 42063 | 0, o = (o << 17 | o >>> 15) + i | 0, r += (o & i | ~o & n) + t[11] - 1990404162 | 0, 
                            r = (r << 22 | r >>> 10) + o | 0, n += (r & o | ~r & i) + t[12] + 1804603682 | 0, 
                            n = (n << 7 | n >>> 25) + r | 0, i += (n & r | ~n & o) + t[13] - 40341101 | 0, i = (i << 12 | i >>> 20) + n | 0, 
                            o += (i & n | ~i & r) + t[14] - 1502002290 | 0, o = (o << 17 | o >>> 15) + i | 0, 
                            r += (o & i | ~o & n) + t[15] + 1236535329 | 0, r = (r << 22 | r >>> 10) + o | 0, 
                            n += (r & i | o & ~i) + t[1] - 165796510 | 0, n = (n << 5 | n >>> 27) + r | 0, i += (n & o | r & ~o) + t[6] - 1069501632 | 0, 
                            i = (i << 9 | i >>> 23) + n | 0, o += (i & r | n & ~r) + t[11] + 643717713 | 0, 
                            o = (o << 14 | o >>> 18) + i | 0, r += (o & n | i & ~n) + t[0] - 373897302 | 0, 
                            r = (r << 20 | r >>> 12) + o | 0, n += (r & i | o & ~i) + t[5] - 701558691 | 0, 
                            n = (n << 5 | n >>> 27) + r | 0, i += (n & o | r & ~o) + t[10] + 38016083 | 0, i = (i << 9 | i >>> 23) + n | 0, 
                            o += (i & r | n & ~r) + t[15] - 660478335 | 0, o = (o << 14 | o >>> 18) + i | 0, 
                            r += (o & n | i & ~n) + t[4] - 405537848 | 0, r = (r << 20 | r >>> 12) + o | 0, 
                            n += (r & i | o & ~i) + t[9] + 568446438 | 0, n = (n << 5 | n >>> 27) + r | 0, i += (n & o | r & ~o) + t[14] - 1019803690 | 0, 
                            i = (i << 9 | i >>> 23) + n | 0, o += (i & r | n & ~r) + t[3] - 187363961 | 0, o = (o << 14 | o >>> 18) + i | 0, 
                            r += (o & n | i & ~n) + t[8] + 1163531501 | 0, r = (r << 20 | r >>> 12) + o | 0, 
                            n += (r & i | o & ~i) + t[13] - 1444681467 | 0, n = (n << 5 | n >>> 27) + r | 0, 
                            i += (n & o | r & ~o) + t[2] - 51403784 | 0, i = (i << 9 | i >>> 23) + n | 0, o += (i & r | n & ~r) + t[7] + 1735328473 | 0, 
                            o = (o << 14 | o >>> 18) + i | 0, r += (o & n | i & ~n) + t[12] - 1926607734 | 0, 
                            r = (r << 20 | r >>> 12) + o | 0, n += (r ^ o ^ i) + t[5] - 378558 | 0, n = (n << 4 | n >>> 28) + r | 0, 
                            i += (n ^ r ^ o) + t[8] - 2022574463 | 0, i = (i << 11 | i >>> 21) + n | 0, o += (i ^ n ^ r) + t[11] + 1839030562 | 0, 
                            o = (o << 16 | o >>> 16) + i | 0, r += (o ^ i ^ n) + t[14] - 35309556 | 0, r = (r << 23 | r >>> 9) + o | 0, 
                            n += (r ^ o ^ i) + t[1] - 1530992060 | 0, n = (n << 4 | n >>> 28) + r | 0, i += (n ^ r ^ o) + t[4] + 1272893353 | 0, 
                            i = (i << 11 | i >>> 21) + n | 0, o += (i ^ n ^ r) + t[7] - 155497632 | 0, o = (o << 16 | o >>> 16) + i | 0, 
                            r += (o ^ i ^ n) + t[10] - 1094730640 | 0, r = (r << 23 | r >>> 9) + o | 0, n += (r ^ o ^ i) + t[13] + 681279174 | 0, 
                            n = (n << 4 | n >>> 28) + r | 0, i += (n ^ r ^ o) + t[0] - 358537222 | 0, i = (i << 11 | i >>> 21) + n | 0, 
                            o += (i ^ n ^ r) + t[3] - 722521979 | 0, o = (o << 16 | o >>> 16) + i | 0, r += (o ^ i ^ n) + t[6] + 76029189 | 0, 
                            r = (r << 23 | r >>> 9) + o | 0, n += (r ^ o ^ i) + t[9] - 640364487 | 0, n = (n << 4 | n >>> 28) + r | 0, 
                            i += (n ^ r ^ o) + t[12] - 421815835 | 0, i = (i << 11 | i >>> 21) + n | 0, o += (i ^ n ^ r) + t[15] + 530742520 | 0, 
                            o = (o << 16 | o >>> 16) + i | 0, r += (o ^ i ^ n) + t[2] - 995338651 | 0, r = (r << 23 | r >>> 9) + o | 0, 
                            n += (o ^ (r | ~i)) + t[0] - 198630844 | 0, n = (n << 6 | n >>> 26) + r | 0, i += (r ^ (n | ~o)) + t[7] + 1126891415 | 0, 
                            i = (i << 10 | i >>> 22) + n | 0, o += (n ^ (i | ~r)) + t[14] - 1416354905 | 0, 
                            o = (o << 15 | o >>> 17) + i | 0, r += (i ^ (o | ~n)) + t[5] - 57434055 | 0, r = (r << 21 | r >>> 11) + o | 0, 
                            n += (o ^ (r | ~i)) + t[12] + 1700485571 | 0, n = (n << 6 | n >>> 26) + r | 0, i += (r ^ (n | ~o)) + t[3] - 1894986606 | 0, 
                            i = (i << 10 | i >>> 22) + n | 0, o += (n ^ (i | ~r)) + t[10] - 1051523 | 0, o = (o << 15 | o >>> 17) + i | 0, 
                            r += (i ^ (o | ~n)) + t[1] - 2054922799 | 0, r = (r << 21 | r >>> 11) + o | 0, n += (o ^ (r | ~i)) + t[8] + 1873313359 | 0, 
                            n = (n << 6 | n >>> 26) + r | 0, i += (r ^ (n | ~o)) + t[15] - 30611744 | 0, i = (i << 10 | i >>> 22) + n | 0, 
                            o += (n ^ (i | ~r)) + t[6] - 1560198380 | 0, o = (o << 15 | o >>> 17) + i | 0, r += (i ^ (o | ~n)) + t[13] + 1309151649 | 0, 
                            r = (r << 21 | r >>> 11) + o | 0, n += (o ^ (r | ~i)) + t[4] - 145523070 | 0, n = (n << 6 | n >>> 26) + r | 0, 
                            i += (r ^ (n | ~o)) + t[11] - 1120210379 | 0, i = (i << 10 | i >>> 22) + n | 0, 
                            o += (n ^ (i | ~r)) + t[2] + 718787259 | 0, o = (o << 15 | o >>> 17) + i | 0, r += (i ^ (o | ~n)) + t[9] - 343485551 | 0, 
                            r = (r << 21 | r >>> 11) + o | 0, e[0] = n + e[0] | 0, e[1] = r + e[1] | 0, e[2] = o + e[2] | 0, 
                            e[3] = i + e[3] | 0;
                        }
                        function r(e) {
                            var t, n = [];
                            for (t = 0; t < 64; t += 4) n[t >> 2] = e.charCodeAt(t) + (e.charCodeAt(t + 1) << 8) + (e.charCodeAt(t + 2) << 16) + (e.charCodeAt(t + 3) << 24);
                            return n;
                        }
                        function o(e) {
                            var t, n = [];
                            for (t = 0; t < 64; t += 4) n[t >> 2] = e[t] + (e[t + 1] << 8) + (e[t + 2] << 16) + (e[t + 3] << 24);
                            return n;
                        }
                        function i(e) {
                            var t, o, i, s, a, c, u = e.length, 
                            l = [ 1732584193, -271733879, -1732584194, 271733878 ];
                            for (t = 64; t <= u; t += 64) n(l, r(e.substring(t - 64, t)));
                            for (e = e.substring(t - 64), o = e.length, i = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], 
                            t = 0; t < o; t += 1) i[t >> 2] |= e.charCodeAt(t) << (t % 4 << 3);
                            if (i[t >> 2] |= 128 << (t % 4 << 3), t > 55) for (n(l, i), t = 0; t < 16; t += 1) i[t] = 0;
                            return s = 8 * u, s = s.toString(16).match(/(.*?)(.{0,8})$/), a = parseInt(s[2], 16), 
                            c = parseInt(s[1], 16) || 0, i[14] = a, i[15] = c, n(l, i), l;
                        }
                        function s(e) {
                            var t, r, i, s, a, c, u = e.length, l = [ 1732584193, -271733879, -1732584194, 271733878 ];
                            for (t = 64; t <= u; t += 64) n(l, o(e.subarray(t - 64, t)));
                            for (e = t - 64 < u ? e.subarray(t - 64) : new Uint8Array(0), r = e.length, i = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], 
                            t = 0; t < r; t += 1) i[t >> 2] |= e[t] << (t % 4 << 3);
                            if (i[t >> 2] |= 128 << (t % 4 << 3), t > 55) for (n(l, i), t = 0; t < 16; t += 1) i[t] = 0;
                            return s = 8 * u, s = s.toString(16).match(/(.*?)(.{0,8})$/), a = parseInt(s[2], 16), 
                            c = parseInt(s[1], 16) || 0, i[14] = a, i[15] = c, n(l, i), l;
                        }
                        function a(e) {
                            var n, r = "";
                            for (n = 0; n < 4; n += 1) r += t[e >> 8 * n + 4 & 15] + t[e >> 8 * n & 15];
                            return r;
                        }
                        function c(e) {
                            var t;
                            for (t = 0; t < e.length; t += 1) e[t] = a(e[t]);
                            return e.join("");
                        }
                        function u(e) {
                            return /[\u0080-\uFFFF]/.test(e) && (e = unescape(encodeURIComponent(e))), e;
                        }
                        function l(e, t) {
                            var n, r = e.length, o = new ArrayBuffer(r), i = new Uint8Array(o);
                            for (n = 0; n < r; n += 1) i[n] = e.charCodeAt(n);
                            return t ? i : o;
                        }
                        function f(e) {
                            return String.fromCharCode.apply(null, new Uint8Array(e));
                        }
                        function d(e, t, n) {
                            var r = new Uint8Array(e.byteLength + t.byteLength);
                            return r.set(new Uint8Array(e)), r.set(new Uint8Array(t), e.byteLength), n ? r : r.buffer;
                        }
                        function p(e) {
                            var t, n = [], r = e.length;
                            for (t = 0; t < r - 1; t += 2) n.push(parseInt(e.substr(t, 2), 16));
                            return String.fromCharCode.apply(String, n);
                        }
                        function m() {
                            this.reset();
                        }
                        return "5d41402abc4b2a76b9719d911017c592" !== c(i("hello")) && function(e, t) {
                            var n = (65535 & e) + (65535 & t), r = (e >> 16) + (t >> 16) + (n >> 16);
                            return r << 16 | 65535 & n;
                        }, "undefined" === typeof ArrayBuffer || ArrayBuffer.prototype.slice || function() {
                            function t(e, t) {
                                return e = 0 | e || 0, e < 0 ? Math.max(e + t, 0) : Math.min(e, t);
                            }
                            ArrayBuffer.prototype.slice = function(n, r) {
                                var o, i, s, a, c = this.byteLength, u = t(n, c), l = c;
                                return r !== e && (l = t(r, c)), u > l ? new ArrayBuffer(0) : (o = l - u, i = new ArrayBuffer(o), 
                                s = new Uint8Array(i), a = new Uint8Array(this, u, o), s.set(a), i);
                            };
                        }(), m.prototype.append = function(e) {
                            return this.appendBinary(u(e)), this;
                        }, m.prototype.appendBinary = function(e) {
                            this._buff += e, this._length += e.length;
                            var t, o = this._buff.length;
                            for (t = 64; t <= o; t += 64) n(this._hash, r(this._buff.substring(t - 64, t)));
                            return this._buff = this._buff.substring(t - 64), this;
                        }, m.prototype.end = function(e) {
                            var t, n, r = this._buff, o = r.length, i = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
                            for (t = 0; t < o; t += 1) i[t >> 2] |= r.charCodeAt(t) << (t % 4 << 3);
                            return this._finish(i, o), n = c(this._hash), e && (n = p(n)), this.reset(), n;
                        }, m.prototype.reset = function() {
                            return this._buff = "", this._length = 0, this._hash = [ 1732584193, -271733879, -1732584194, 271733878 ], 
                            this;
                        }, m.prototype.getState = function() {
                            return {
                                buff: this._buff,
                                length: this._length,
                                hash: this._hash.slice()
                            };
                        }, m.prototype.setState = function(e) {
                            return this._buff = e.buff, this._length = e.length, this._hash = e.hash, this;
                        }, m.prototype.destroy = function() {
                            delete this._hash, delete this._buff, delete this._length;
                        }, m.prototype._finish = function(e, t) {
                            var r, o, i, s = t;
                            if (e[s >> 2] |= 128 << (s % 4 << 3), s > 55) for (n(this._hash, e), s = 0; s < 16; s += 1) e[s] = 0;
                            r = 8 * this._length, r = r.toString(16).match(/(.*?)(.{0,8})$/), o = parseInt(r[2], 16), 
                            i = parseInt(r[1], 16) || 0, e[14] = o, e[15] = i, n(this._hash, e);
                        }, m.hash = function(e, t) {
                            return m.hashBinary(u(e), t);
                        }, m.hashBinary = function(e, t) {
                            var n = i(e), r = c(n);
                            return t ? p(r) : r;
                        }, m.ArrayBuffer = function() {
                            this.reset();
                        }, m.ArrayBuffer.prototype.append = function(e) {
                            var t, r = d(this._buff.buffer, e, !0), i = r.length;
                            for (this._length += e.byteLength, t = 64; t <= i; t += 64) n(this._hash, o(r.subarray(t - 64, t)));
                            return this._buff = t - 64 < i ? new Uint8Array(r.buffer.slice(t - 64)) : new Uint8Array(0), 
                            this;
                        }, m.ArrayBuffer.prototype.end = function(e) {
                            var t, n, r = this._buff, o = r.length, i = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
                            for (t = 0; t < o; t += 1) i[t >> 2] |= r[t] << (t % 4 << 3);
                            return this._finish(i, o), n = c(this._hash), e && (n = p(n)), this.reset(), n;
                        }, m.ArrayBuffer.prototype.reset = function() {
                            return this._buff = new Uint8Array(0), this._length = 0, this._hash = [ 1732584193, -271733879, -1732584194, 271733878 ], 
                            this;
                        }, m.ArrayBuffer.prototype.getState = function() {
                            var e = m.prototype.getState.call(this);
                            return e.buff = f(e.buff), e;
                        }, m.ArrayBuffer.prototype.setState = function(e) {
                            return e.buff = l(e.buff, !0), m.prototype.setState.call(this, e);
                        }, m.ArrayBuffer.prototype.destroy = m.prototype.destroy, m.ArrayBuffer.prototype._finish = m.prototype._finish, 
                        m.ArrayBuffer.hash = function(e, t) {
                            var n = s(new Uint8Array(e)), r = c(n);
                            return t ? p(r) : r;
                        }, m;
                    }

// ==================== 元数据 ====================
// 此文件包含从 wx0551abe2395c5dfb 提取的 MD5 算法实现
// 检测位置: 行 31117-31120
// 变量名: __function_return_31117_59._hash
// 检测源: static
