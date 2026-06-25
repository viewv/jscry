/**
 * SHA-512 算法实现
 * App ID: wx04da6ac6acae26f6
 * 版本: v36
 * 代码哈希: g5oeow
 * 来源文件: output/wx04da6ac6acae26f6/common/vendor.js
 * 检测类型: Round constants
 * 置信度: 0.9
 * 函数名: a255
 * 行数: 48
 * 生成时间: 2025-07-05T13:17:10.913Z
 */

function a255(e, t, r) {
        var n = r("3fb5"), i = r("b672"), a = r("8707").Buffer, o = [ 1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298 ], f = new Array(64);
        function s() {
            this.init(), this._w = f, i.call(this, 64, 56);
        }
        function c(e, t, r) {
            return r ^ e & (t ^ r);
        }
        function u(e, t, r) {
            return e & t | r & (e | t);
        }
        function h(e) {
            return (e >>> 2 | e << 30) ^ (e >>> 13 | e << 19) ^ (e >>> 22 | e << 10);
        }
        function d(e) {
            return (e >>> 6 | e << 26) ^ (e >>> 11 | e << 21) ^ (e >>> 25 | e << 7);
        }
        function l(e) {
            return (e >>> 7 | e << 25) ^ (e >>> 18 | e << 14) ^ e >>> 3;
        }
        function p(e) {
            return (e >>> 17 | e << 15) ^ (e >>> 19 | e << 13) ^ e >>> 10;
        }
        n(s, i), s.prototype.init = function() {
            return this._a = 1779033703, this._b = 3144134277, this._c = 1013904242, this._d = 2773480762, 
            this._e = 1359893119, this._f = 2600822924, this._g = 528734635, this._h = 1541459225, 
            this;
        }, s.prototype._update = function(e) {
            for (var t = this._w, r = 0 | this._a, n = 0 | this._b, i = 0 | this._c, a = 0 | this._d, f = 0 | this._e, s = 0 | this._f, b = 0 | this._g, v = 0 | this._h, y = 0; y < 16; ++y) {
                t[y] = e.readInt32BE(4 * y);
            }
            for (;y < 64; ++y) {
                t[y] = p(t[y - 2]) + t[y - 7] + l(t[y - 15]) + t[y - 16] | 0;
            }
            for (var g = 0; g < 64; ++g) {
                var m = v + d(f) + c(f, s, b) + o[g] + t[g] | 0, _ = h(r) + u(r, n, i) | 0;
                v = b, b = s, s = f, f = a + m | 0, a = i, i = n, n = r, r = m + _ | 0;
            }
            this._a = r + this._a | 0, this._b = n + this._b | 0, this._c = i + this._c | 0, 
            this._d = a + this._d | 0, this._e = f + this._e | 0, this._f = s + this._f | 0, 
            this._g = b + this._g | 0, this._h = v + this._h | 0;
        }, s.prototype._hash = function() {
            var e = a.allocUnsafe(32);
            return e.writeInt32BE(this._a, 0), e.writeInt32BE(this._b, 4), e.writeInt32BE(this._c, 8), 
            e.writeInt32BE(this._d, 12), e.writeInt32BE(this._e, 16), e.writeInt32BE(this._f, 20), 
            e.writeInt32BE(this._g, 24), e.writeInt32BE(this._h, 28), e;
        }, e.exports = s;
    }

// ==================== 元数据 ====================
// 此文件包含从 wx04da6ac6acae26f6 提取的 SHA-512 算法实现
// 检测位置: 行 9772-9772
// 变量名: o
// 检测源: static
