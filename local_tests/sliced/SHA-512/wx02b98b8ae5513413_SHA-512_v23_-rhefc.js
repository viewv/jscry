/**
 * SHA-512 算法实现
 * App ID: wx02b98b8ae5513413
 * 版本: v23
 * 代码哈希: -rhefcv
 * 来源文件: output/wx02b98b8ae5513413/common/vendor.js
 * 检测类型: Round constants
 * 置信度: 0.9
 * 函数名: anonymous
 * 行数: 44
 * 生成时间: 2025-07-05T13:17:10.909Z
 */

function(e, t, a) {
        var r = a("3fb5"), n = a("b672"), i = a("8707").Buffer, l = [ 1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298 ], s = new Array(64);
        function o() {
            this.init(), this._w = s, n.call(this, 64, 56);
        }
        function u(e, t, a) {
            return a ^ e & (t ^ a);
        }
        function d(e, t, a) {
            return e & t | a & (e | t);
        }
        function c(e) {
            return (e >>> 2 | e << 30) ^ (e >>> 13 | e << 19) ^ (e >>> 22 | e << 10);
        }
        function f(e) {
            return (e >>> 6 | e << 26) ^ (e >>> 11 | e << 21) ^ (e >>> 25 | e << 7);
        }
        function h(e) {
            return (e >>> 7 | e << 25) ^ (e >>> 18 | e << 14) ^ e >>> 3;
        }
        function b(e) {
            return (e >>> 17 | e << 15) ^ (e >>> 19 | e << 13) ^ e >>> 10;
        }
        r(o, n), o.prototype.init = function() {
            return this._a = 1779033703, this._b = 3144134277, this._c = 1013904242, this._d = 2773480762, 
            this._e = 1359893119, this._f = 2600822924, this._g = 528734635, this._h = 1541459225, 
            this;
        }, o.prototype._update = function(e) {
            for (var t = this._w, a = 0 | this._a, r = 0 | this._b, n = 0 | this._c, i = 0 | this._d, s = 0 | this._e, o = 0 | this._f, _ = 0 | this._g, v = 0 | this._h, p = 0; p < 16; ++p) t[p] = e.readInt32BE(4 * p);
            for (;p < 64; ++p) t[p] = b(t[p - 2]) + t[p - 7] + h(t[p - 15]) + t[p - 16] | 0;
            for (var m = 0; m < 64; ++m) {
                var y = v + f(s) + u(s, o, _) + l[m] + t[m] | 0, g = c(a) + d(a, r, n) | 0;
                v = _, _ = o, o = s, s = i + y | 0, i = n, n = r, r = a, a = y + g | 0;
            }
            this._a = a + this._a | 0, this._b = r + this._b | 0, this._c = n + this._c | 0, 
            this._d = i + this._d | 0, this._e = s + this._e | 0, this._f = o + this._f | 0, 
            this._g = _ + this._g | 0, this._h = v + this._h | 0;
        }, o.prototype._hash = function() {
            var e = i.allocUnsafe(32);
            return e.writeInt32BE(this._a, 0), e.writeInt32BE(this._b, 4), e.writeInt32BE(this._c, 8), 
            e.writeInt32BE(this._d, 12), e.writeInt32BE(this._e, 16), e.writeInt32BE(this._f, 20), 
            e.writeInt32BE(this._g, 24), e.writeInt32BE(this._h, 28), e;
        }, e.exports = o;
    }

// ==================== 元数据 ====================
// 此文件包含从 wx02b98b8ae5513413 提取的 SHA-512 算法实现
// 检测位置: 行 31889-31889
// 变量名: l
// 检测源: static
