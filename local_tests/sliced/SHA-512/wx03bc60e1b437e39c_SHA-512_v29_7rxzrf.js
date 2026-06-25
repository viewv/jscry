/**
 * SHA-512 算法实现
 * App ID: wx03bc60e1b437e39c
 * 版本: v29
 * 代码哈希: 7rxzrf
 * 来源文件: output/wx03bc60e1b437e39c/common/vendor.js
 * 检测类型: Round constants
 * 置信度: 0.9
 * 函数名: anonymous
 * 行数: 44
 * 生成时间: 2025-07-05T13:17:10.911Z
 */

function(e, t, n) {
        var r = n("3fb5"), i = n("b672"), a = n("8707").Buffer, s = [ 1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298 ], o = new Array(64);
        function d() {
            this.init(), this._w = o, i.call(this, 64, 56);
        }
        function u(e, t, n) {
            return n ^ e & (t ^ n);
        }
        function c(e, t, n) {
            return e & t | n & (e | t);
        }
        function f(e) {
            return (e >>> 2 | e << 30) ^ (e >>> 13 | e << 19) ^ (e >>> 22 | e << 10);
        }
        function h(e) {
            return (e >>> 6 | e << 26) ^ (e >>> 11 | e << 21) ^ (e >>> 25 | e << 7);
        }
        function l(e) {
            return (e >>> 7 | e << 25) ^ (e >>> 18 | e << 14) ^ e >>> 3;
        }
        function _(e) {
            return (e >>> 17 | e << 15) ^ (e >>> 19 | e << 13) ^ e >>> 10;
        }
        r(d, i), d.prototype.init = function() {
            return this._a = 1779033703, this._b = 3144134277, this._c = 1013904242, this._d = 2773480762, 
            this._e = 1359893119, this._f = 2600822924, this._g = 528734635, this._h = 1541459225, 
            this;
        }, d.prototype._update = function(e) {
            for (var t = this._w, n = 0 | this._a, r = 0 | this._b, i = 0 | this._c, a = 0 | this._d, o = 0 | this._e, d = 0 | this._f, m = 0 | this._g, p = 0 | this._h, y = 0; y < 16; ++y) t[y] = e.readInt32BE(4 * y);
            for (;y < 64; ++y) t[y] = _(t[y - 2]) + t[y - 7] + l(t[y - 15]) + t[y - 16] | 0;
            for (var b = 0; b < 64; ++b) {
                var v = p + h(o) + u(o, d, m) + s[b] + t[b] | 0, g = f(n) + c(n, r, i) | 0;
                p = m, m = d, d = o, o = a + v | 0, a = i, i = r, r = n, n = v + g | 0;
            }
            this._a = n + this._a | 0, this._b = r + this._b | 0, this._c = i + this._c | 0, 
            this._d = a + this._d | 0, this._e = o + this._e | 0, this._f = d + this._f | 0, 
            this._g = m + this._g | 0, this._h = p + this._h | 0;
        }, d.prototype._hash = function() {
            var e = a.allocUnsafe(32);
            return e.writeInt32BE(this._a, 0), e.writeInt32BE(this._b, 4), e.writeInt32BE(this._c, 8), 
            e.writeInt32BE(this._d, 12), e.writeInt32BE(this._e, 16), e.writeInt32BE(this._f, 20), 
            e.writeInt32BE(this._g, 24), e.writeInt32BE(this._h, 28), e;
        }, e.exports = d;
    }

// ==================== 元数据 ====================
// 此文件包含从 wx03bc60e1b437e39c 提取的 SHA-512 算法实现
// 检测位置: 行 19068-19068
// 变量名: s
// 检测源: static
