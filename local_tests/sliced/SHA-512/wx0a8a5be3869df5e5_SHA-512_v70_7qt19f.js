/**
 * SHA-512 算法实现
 * App ID: wx0a8a5be3869df5e5
 * 版本: v70
 * 代码哈希: 7qt19f
 * 来源文件: output/wx0a8a5be3869df5e5/common/vendor.js
 * 检测类型: Round constants
 * 置信度: 0.9
 * 函数名: anonymous
 * 行数: 44
 * 生成时间: 2025-07-05T13:17:10.924Z
 */

function(t, e, a) {
        var r = a("LC74"), n = a("CzQx"), o = a("X3l8").Buffer, i = [ 1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298 ], s = new Array(64);
        function c() {
            this.init(), this._w = s, n.call(this, 64, 56);
        }
        function p(t, e, a) {
            return a ^ t & (e ^ a);
        }
        function u(t, e, a) {
            return t & e | a & (t | e);
        }
        function f(t) {
            return (t >>> 2 | t << 30) ^ (t >>> 13 | t << 19) ^ (t >>> 22 | t << 10);
        }
        function d(t) {
            return (t >>> 6 | t << 26) ^ (t >>> 11 | t << 21) ^ (t >>> 25 | t << 7);
        }
        function l(t) {
            return (t >>> 7 | t << 25) ^ (t >>> 18 | t << 14) ^ t >>> 3;
        }
        function h(t) {
            return (t >>> 17 | t << 15) ^ (t >>> 19 | t << 13) ^ t >>> 10;
        }
        r(c, n), c.prototype.init = function() {
            return this._a = 1779033703, this._b = 3144134277, this._c = 1013904242, this._d = 2773480762, 
            this._e = 1359893119, this._f = 2600822924, this._g = 528734635, this._h = 1541459225, 
            this;
        }, c.prototype._update = function(t) {
            for (var e = this._w, a = 0 | this._a, r = 0 | this._b, n = 0 | this._c, o = 0 | this._d, s = 0 | this._e, c = 0 | this._f, y = 0 | this._g, g = 0 | this._h, v = 0; v < 16; ++v) e[v] = t.readInt32BE(4 * v);
            for (;v < 64; ++v) e[v] = h(e[v - 2]) + e[v - 7] + l(e[v - 15]) + e[v - 16] | 0;
            for (var m = 0; m < 64; ++m) {
                var b = g + d(s) + p(s, c, y) + i[m] + e[m] | 0, w = f(a) + u(a, r, n) | 0;
                g = y, y = c, c = s, s = o + b | 0, o = n, n = r, r = a, a = b + w | 0;
            }
            this._a = a + this._a | 0, this._b = r + this._b | 0, this._c = n + this._c | 0, 
            this._d = o + this._d | 0, this._e = s + this._e | 0, this._f = c + this._f | 0, 
            this._g = y + this._g | 0, this._h = g + this._h | 0;
        }, c.prototype._hash = function() {
            var t = o.allocUnsafe(32);
            return t.writeInt32BE(this._a, 0), t.writeInt32BE(this._b, 4), t.writeInt32BE(this._c, 8), 
            t.writeInt32BE(this._d, 12), t.writeInt32BE(this._e, 16), t.writeInt32BE(this._f, 20), 
            t.writeInt32BE(this._g, 24), t.writeInt32BE(this._h, 28), t;
        }, t.exports = c;
    }

// ==================== 元数据 ====================
// 此文件包含从 wx0a8a5be3869df5e5 提取的 SHA-512 算法实现
// 检测位置: 行 26851-26851
// 变量名: i
// 检测源: static
