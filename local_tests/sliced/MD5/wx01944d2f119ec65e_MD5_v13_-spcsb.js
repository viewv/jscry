/**
 * MD5 算法实现
 * App ID: wx01944d2f119ec65e
 * 版本: v13
 * 代码哈希: -spcsb8
 * 来源文件: output/wx01944d2f119ec65e/common/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.95
 * 函数名: anonymous
 * 行数: 151
 * 生成时间: 2025-07-05T13:17:10.755Z
 */

function(e) {
                    function t(e, t) {
                        var n = e[0], r = e[1], o = e[2], i = e[3];
                        r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r & o | ~r & i) + t[0] - 680876936 | 0) << 7 | n >>> 25) + r | 0) & r | ~n & o) + t[1] - 389564586 | 0) << 12 | i >>> 20) + n | 0) & n | ~i & r) + t[2] + 606105819 | 0) << 17 | o >>> 15) + i | 0) & i | ~o & n) + t[3] - 1044525330 | 0) << 22 | r >>> 10) + o | 0, 
                        r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r & o | ~r & i) + t[4] - 176418897 | 0) << 7 | n >>> 25) + r | 0) & r | ~n & o) + t[5] + 1200080426 | 0) << 12 | i >>> 20) + n | 0) & n | ~i & r) + t[6] - 1473231341 | 0) << 17 | o >>> 15) + i | 0) & i | ~o & n) + t[7] - 45705983 | 0) << 22 | r >>> 10) + o | 0, 
                        r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r & o | ~r & i) + t[8] + 1770035416 | 0) << 7 | n >>> 25) + r | 0) & r | ~n & o) + t[9] - 1958414417 | 0) << 12 | i >>> 20) + n | 0) & n | ~i & r) + t[10] - 42063 | 0) << 17 | o >>> 15) + i | 0) & i | ~o & n) + t[11] - 1990404162 | 0) << 22 | r >>> 10) + o | 0, 
                        r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r & o | ~r & i) + t[12] + 1804603682 | 0) << 7 | n >>> 25) + r | 0) & r | ~n & o) + t[13] - 40341101 | 0) << 12 | i >>> 20) + n | 0) & n | ~i & r) + t[14] - 1502002290 | 0) << 17 | o >>> 15) + i | 0) & i | ~o & n) + t[15] + 1236535329 | 0) << 22 | r >>> 10) + o | 0, 
                        r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r & i | o & ~i) + t[1] - 165796510 | 0) << 5 | n >>> 27) + r | 0) & o | r & ~o) + t[6] - 1069501632 | 0) << 9 | i >>> 23) + n | 0) & r | n & ~r) + t[11] + 643717713 | 0) << 14 | o >>> 18) + i | 0) & n | i & ~n) + t[0] - 373897302 | 0) << 20 | r >>> 12) + o | 0, 
                        r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r & i | o & ~i) + t[5] - 701558691 | 0) << 5 | n >>> 27) + r | 0) & o | r & ~o) + t[10] + 38016083 | 0) << 9 | i >>> 23) + n | 0) & r | n & ~r) + t[15] - 660478335 | 0) << 14 | o >>> 18) + i | 0) & n | i & ~n) + t[4] - 405537848 | 0) << 20 | r >>> 12) + o | 0, 
                        r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r & i | o & ~i) + t[9] + 568446438 | 0) << 5 | n >>> 27) + r | 0) & o | r & ~o) + t[14] - 1019803690 | 0) << 9 | i >>> 23) + n | 0) & r | n & ~r) + t[3] - 187363961 | 0) << 14 | o >>> 18) + i | 0) & n | i & ~n) + t[8] + 1163531501 | 0) << 20 | r >>> 12) + o | 0, 
                        r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r & i | o & ~i) + t[13] - 1444681467 | 0) << 5 | n >>> 27) + r | 0) & o | r & ~o) + t[2] - 51403784 | 0) << 9 | i >>> 23) + n | 0) & r | n & ~r) + t[7] + 1735328473 | 0) << 14 | o >>> 18) + i | 0) & n | i & ~n) + t[12] - 1926607734 | 0) << 20 | r >>> 12) + o | 0, 
                        r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r ^ o ^ i) + t[5] - 378558 | 0) << 4 | n >>> 28) + r | 0) ^ r ^ o) + t[8] - 2022574463 | 0) << 11 | i >>> 21) + n | 0) ^ n ^ r) + t[11] + 1839030562 | 0) << 16 | o >>> 16) + i | 0) ^ i ^ n) + t[14] - 35309556 | 0) << 23 | r >>> 9) + o | 0, 
                        r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r ^ o ^ i) + t[1] - 1530992060 | 0) << 4 | n >>> 28) + r | 0) ^ r ^ o) + t[4] + 1272893353 | 0) << 11 | i >>> 21) + n | 0) ^ n ^ r) + t[7] - 155497632 | 0) << 16 | o >>> 16) + i | 0) ^ i ^ n) + t[10] - 1094730640 | 0) << 23 | r >>> 9) + o | 0, 
                        r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r ^ o ^ i) + t[13] + 681279174 | 0) << 4 | n >>> 28) + r | 0) ^ r ^ o) + t[0] - 358537222 | 0) << 11 | i >>> 21) + n | 0) ^ n ^ r) + t[3] - 722521979 | 0) << 16 | o >>> 16) + i | 0) ^ i ^ n) + t[6] + 76029189 | 0) << 23 | r >>> 9) + o | 0, 
                        r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r ^ o ^ i) + t[9] - 640364487 | 0) << 4 | n >>> 28) + r | 0) ^ r ^ o) + t[12] - 421815835 | 0) << 11 | i >>> 21) + n | 0) ^ n ^ r) + t[15] + 530742520 | 0) << 16 | o >>> 16) + i | 0) ^ i ^ n) + t[2] - 995338651 | 0) << 23 | r >>> 9) + o | 0, 
                        r = ((r += ((i = ((i += (r ^ ((n = ((n += (o ^ (r | ~i)) + t[0] - 198630844 | 0) << 6 | n >>> 26) + r | 0) | ~o)) + t[7] + 1126891415 | 0) << 10 | i >>> 22) + n | 0) ^ ((o = ((o += (n ^ (i | ~r)) + t[14] - 1416354905 | 0) << 15 | o >>> 17) + i | 0) | ~n)) + t[5] - 57434055 | 0) << 21 | r >>> 11) + o | 0, 
                        r = ((r += ((i = ((i += (r ^ ((n = ((n += (o ^ (r | ~i)) + t[12] + 1700485571 | 0) << 6 | n >>> 26) + r | 0) | ~o)) + t[3] - 1894986606 | 0) << 10 | i >>> 22) + n | 0) ^ ((o = ((o += (n ^ (i | ~r)) + t[10] - 1051523 | 0) << 15 | o >>> 17) + i | 0) | ~n)) + t[1] - 2054922799 | 0) << 21 | r >>> 11) + o | 0, 
                        r = ((r += ((i = ((i += (r ^ ((n = ((n += (o ^ (r | ~i)) + t[8] + 1873313359 | 0) << 6 | n >>> 26) + r | 0) | ~o)) + t[15] - 30611744 | 0) << 10 | i >>> 22) + n | 0) ^ ((o = ((o += (n ^ (i | ~r)) + t[6] - 1560198380 | 0) << 15 | o >>> 17) + i | 0) | ~n)) + t[13] + 1309151649 | 0) << 21 | r >>> 11) + o | 0, 
                        r = ((r += ((i = ((i += (r ^ ((n = ((n += (o ^ (r | ~i)) + t[4] - 145523070 | 0) << 6 | n >>> 26) + r | 0) | ~o)) + t[11] - 1120210379 | 0) << 10 | i >>> 22) + n | 0) ^ ((o = ((o += (n ^ (i | ~r)) + t[2] + 718787259 | 0) << 15 | o >>> 17) + i | 0) | ~n)) + t[9] - 343485551 | 0) << 21 | r >>> 11) + o | 0, 
                        e[0] = n + e[0] | 0, e[1] = r + e[1] | 0, e[2] = o + e[2] | 0, e[3] = i + e[3] | 0;
                    }
                    function n(e) {
                        var t, n = [];
                        for (t = 0; t < 64; t += 4) n[t >> 2] = e.charCodeAt(t) + (e.charCodeAt(t + 1) << 8) + (e.charCodeAt(t + 2) << 16) + (e.charCodeAt(t + 3) << 24);
                        return n;
                    }
                    function r(e) {
                        var t, n = [];
                        for (t = 0; t < 64; t += 4) n[t >> 2] = e[t] + (e[t + 1] << 8) + (e[t + 2] << 16) + (e[t + 3] << 24);
                        return n;
                    }
                    function o(e) {
                        var r, o, i, a, s, c, u = e.length, l = [ 1732584193, -271733879, -1732584194, 271733878 ];
                        for (r = 64; r <= u; r += 64) t(l, n(e.substring(r - 64, r)));
                        for (o = (e = e.substring(r - 64)).length, i = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], 
                        r = 0; r < o; r += 1) i[r >> 2] |= e.charCodeAt(r) << (r % 4 << 3);
                        if (i[r >> 2] |= 128 << (r % 4 << 3), r > 55) for (t(l, i), r = 0; r < 16; r += 1) i[r] = 0;
                        return a = 8 * u, a = a.toString(16).match(/(.*?)(.{0,8})$/), s = parseInt(a[2], 16), 
                        c = parseInt(a[1], 16) || 0, i[14] = s, i[15] = c, t(l, i), l;
                    }
                    function i(e) {
                        var n, o, i, a, s, c, u = e.length, l = [ 1732584193, -271733879, -1732584194, 271733878 ];
                        for (n = 64; n <= u; n += 64) t(l, r(e.subarray(n - 64, n)));
                        for (o = (e = n - 64 < u ? e.subarray(n - 64) : new Uint8Array(0)).length, i = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], 
                        n = 0; n < o; n += 1) i[n >> 2] |= e[n] << (n % 4 << 3);
                        if (i[n >> 2] |= 128 << (n % 4 << 3), n > 55) for (t(l, i), n = 0; n < 16; n += 1) i[n] = 0;
                        return a = 8 * u, a = a.toString(16).match(/(.*?)(.{0,8})$/), s = parseInt(a[2], 16), 
                        c = parseInt(a[1], 16) || 0, i[14] = s, i[15] = c, t(l, i), l;
                    }
                    function a(e) {
                        var t, n = "";
                        for (t = 0; t < 4; t += 1) n += h[e >> 8 * t + 4 & 15] + h[e >> 8 * t & 15];
                        return n;
                    }
                    function s(e) {
                        var t;
                        for (t = 0; t < e.length; t += 1) e[t] = a(e[t]);
                        return e.join("");
                    }
                    function c(e) {
                        return /[\u0080-\uFFFF]/.test(e) && (e = unescape(encodeURIComponent(e))), e;
                    }
                    function u(e, t) {
                        var n, r = e.length, o = new ArrayBuffer(r), i = new Uint8Array(o);
                        for (n = 0; n < r; n += 1) i[n] = e.charCodeAt(n);
                        return t ? i : o;
                    }
                    function l(e) {
                        return String.fromCharCode.apply(null, new Uint8Array(e));
                    }
                    function f(e, t, n) {
                        var r = new Uint8Array(e.byteLength + t.byteLength);
                        return r.set(new Uint8Array(e)), r.set(new Uint8Array(t), e.byteLength), n ? r : r.buffer;
                    }
                    function d(e) {
                        var t, n = [], r = e.length;
                        for (t = 0; t < r - 1; t += 2) n.push(parseInt(e.substr(t, 2), 16));
                        return String.fromCharCode.apply(String, n);
                    }
                    function p() {
                        this.reset();
                    }
                    var h = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f" ];
                    return s(o("hello")), "undefined" == typeof ArrayBuffer || ArrayBuffer.prototype.slice || function() {
                        function t(e, t) {
                            return (e = 0 | e || 0) < 0 ? Math.max(e + t, 0) : Math.min(e, t);
                        }
                        ArrayBuffer.prototype.slice = function(n, r) {
                            var o, i, a, s, c = this.byteLength, u = t(n, c), l = c;
                            return r !== e && (l = t(r, c)), u > l ? new ArrayBuffer(0) : (o = l - u, i = new ArrayBuffer(o), 
                            a = new Uint8Array(i), s = new Uint8Array(this, u, o), a.set(s), i);
                        };
                    }(), p.prototype.append = function(e) {
                        return this.appendBinary(c(e)), this;
                    }, p.prototype.appendBinary = function(e) {
                        this._buff += e, this._length += e.length;
                        var r, o = this._buff.length;
                        for (r = 64; r <= o; r += 64) t(this._hash, n(this._buff.substring(r - 64, r)));
                        return this._buff = this._buff.substring(r - 64), this;
                    }, p.prototype.end = function(e) {
                        var t, n, r = this._buff, o = r.length, i = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
                        for (t = 0; t < o; t += 1) i[t >> 2] |= r.charCodeAt(t) << (t % 4 << 3);
                        return this._finish(i, o), n = s(this._hash), e && (n = d(n)), this.reset(), n;
                    }, p.prototype.reset = function() {
                        return this._buff = "", this._length = 0, this._hash = [ 1732584193, -271733879, -1732584194, 271733878 ], 
                        this;
                    }, p.prototype.getState = function() {
                        return {
                            buff: this._buff,
                            length: this._length,
                            hash: this._hash.slice()
                        };
                    }, p.prototype.setState = function(e) {
                        return this._buff = e.buff, this._length = e.length, this._hash = e.hash, this;
                    }, p.prototype.destroy = function() {
                        delete this._hash, delete this._buff, delete this._length;
                    }, p.prototype._finish = function(e, n) {
                        var r, o, i, a = n;
                        if (e[a >> 2] |= 128 << (a % 4 << 3), a > 55) for (t(this._hash, e), a = 0; a < 16; a += 1) e[a] = 0;
                        r = (r = 8 * this._length).toString(16).match(/(.*?)(.{0,8})$/), o = parseInt(r[2], 16), 
                        i = parseInt(r[1], 16) || 0, e[14] = o, e[15] = i, t(this._hash, e);
                    }, p.hash = function(e, t) {
                        return p.hashBinary(c(e), t);
                    }, p.hashBinary = function(e, t) {
                        var n = s(o(e));
                        return t ? d(n) : n;
                    }, p.ArrayBuffer = function() {
                        this.reset();
                    }, p.ArrayBuffer.prototype.append = function(e) {
                        var n, o = f(this._buff.buffer, e, !0), i = o.length;
                        for (this._length += e.byteLength, n = 64; n <= i; n += 64) t(this._hash, r(o.subarray(n - 64, n)));
                        return this._buff = n - 64 < i ? new Uint8Array(o.buffer.slice(n - 64)) : new Uint8Array(0), 
                        this;
                    }, p.ArrayBuffer.prototype.end = function(e) {
                        var t, n, r = this._buff, o = r.length, i = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
                        for (t = 0; t < o; t += 1) i[t >> 2] |= r[t] << (t % 4 << 3);
                        return this._finish(i, o), n = s(this._hash), e && (n = d(n)), this.reset(), n;
                    }, p.ArrayBuffer.prototype.reset = function() {
                        return this._buff = new Uint8Array(0), this._length = 0, this._hash = [ 1732584193, -271733879, -1732584194, 271733878 ], 
                        this;
                    }, p.ArrayBuffer.prototype.getState = function() {
                        var e = p.prototype.getState.call(this);
                        return e.buff = l(e.buff), e;
                    }, p.ArrayBuffer.prototype.setState = function(e) {
                        return e.buff = u(e.buff, !0), p.prototype.setState.call(this, e);
                    }, p.ArrayBuffer.prototype.destroy = p.prototype.destroy, p.ArrayBuffer.prototype._finish = p.prototype._finish, 
                    p.ArrayBuffer.hash = function(e, t) {
                        var n = s(i(new Uint8Array(e)));
                        return t ? d(n) : n;
                    }, p;
                }

// ==================== 元数据 ====================
// 此文件包含从 wx01944d2f119ec65e 提取的 MD5 算法实现
// 检测位置: 行 1414-1417
// 变量名: __function_return_1414_55._hash
// 检测源: static
