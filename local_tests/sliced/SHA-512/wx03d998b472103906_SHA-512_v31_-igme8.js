/**
 * SHA-512 算法实现
 * App ID: wx03d998b472103906
 * 版本: v31
 * 代码哈希: -igme84
 * 来源文件: output/wx03d998b472103906/common/vendor.js
 * 检测类型: Round constants
 * 置信度: 0.9
 * 函数名: anonymous
 * 行数: 44
 * 生成时间: 2025-07-05T13:17:10.912Z
 */

function(t, e, r) {
        var n = r("3fb5"), i = r("b672"), o = r("8707").Buffer, a = [ 1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298 ], s = new Array(64);
        function c() {
            this.init(), this._w = s, i.call(this, 64, 56);
        }
        function f(t, e, r) {
            return r ^ t & (e ^ r);
        }
        function u(t, e, r) {
            return t & e | r & (t | e);
        }
        function h(t) {
            return (t >>> 2 | t << 30) ^ (t >>> 13 | t << 19) ^ (t >>> 22 | t << 10);
        }
        function d(t) {
            return (t >>> 6 | t << 26) ^ (t >>> 11 | t << 21) ^ (t >>> 25 | t << 7);
        }
        function l(t) {
            return (t >>> 7 | t << 25) ^ (t >>> 18 | t << 14) ^ t >>> 3;
        }
        function p(t) {
            return (t >>> 17 | t << 15) ^ (t >>> 19 | t << 13) ^ t >>> 10;
        }
        n(c, i), c.prototype.init = function() {
            return this._a = 1779033703, this._b = 3144134277, this._c = 1013904242, this._d = 2773480762, 
            this._e = 1359893119, this._f = 2600822924, this._g = 528734635, this._h = 1541459225, 
            this;
        }, c.prototype._update = function(t) {
            for (var e = this._w, r = 0 | this._a, n = 0 | this._b, i = 0 | this._c, o = 0 | this._d, s = 0 | this._e, c = 0 | this._f, b = 0 | this._g, v = 0 | this._h, g = 0; g < 16; ++g) e[g] = t.readInt32BE(4 * g);
            for (;g < 64; ++g) e[g] = p(e[g - 2]) + e[g - 7] + l(e[g - 15]) + e[g - 16] | 0;
            for (var y = 0; y < 64; ++y) {
                var m = v + d(s) + f(s, c, b) + a[y] + e[y] | 0, _ = h(r) + u(r, n, i) | 0;
                v = b, b = c, c = s, s = o + m | 0, o = i, i = n, n = r, r = m + _ | 0;
            }
            this._a = r + this._a | 0, this._b = n + this._b | 0, this._c = i + this._c | 0, 
            this._d = o + this._d | 0, this._e = s + this._e | 0, this._f = c + this._f | 0, 
            this._g = b + this._g | 0, this._h = v + this._h | 0;
        }, c.prototype._hash = function() {
            var t = o.allocUnsafe(32);
            return t.writeInt32BE(this._a, 0), t.writeInt32BE(this._b, 4), t.writeInt32BE(this._c, 8), 
            t.writeInt32BE(this._d, 12), t.writeInt32BE(this._e, 16), t.writeInt32BE(this._f, 20), 
            t.writeInt32BE(this._g, 24), t.writeInt32BE(this._h, 28), t;
        }, t.exports = c;
    }

// ==================== 元数据 ====================
// 此文件包含从 wx03d998b472103906 提取的 SHA-512 算法实现
// 检测位置: 行 11724-11724
// 变量名: a
// 检测源: static
