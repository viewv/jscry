/**
 * SHA-512 算法实现
 * App ID: wx0526b0432a899356
 * 版本: v41
 * 代码哈希: bmwr1d
 * 来源文件: output/wx0526b0432a899356/common/vendor.js
 * 检测类型: Round constants
 * 置信度: 0.9
 * 函数名: anonymous
 * 行数: 23
 * 生成时间: 2025-07-05T13:17:10.914Z
 */

function(t, e, r) {
        var n = r("c3c0"), i = r("edc9"), o = r("aa56"), p = r("da3e"), b = n.sum32, v = n.sum32_4, g = n.sum32_5, y = o.ch32, m = o.maj32, _ = o.s0_256, w = o.s1_256, x = o.g0_256, S = o.g1_256, a = i.BlockHash, s = [ 1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298 ];
        function c() {
            if (!(this instanceof c)) return new c();
            a.call(this), this.h = [ 1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225 ], 
            this.k = s, this.W = new Array(64);
        }
        n.inherits(c, a), (t.exports = c).blockSize = 512, c.outSize = 256, c.hmacStrength = 192, 
        c.padLength = 64, c.prototype._update = function(t, e) {
            for (var r = this.W, n = 0; n < 16; n++) r[n] = t[e + n];
            for (;n < r.length; n++) r[n] = v(S(r[n - 2]), r[n - 7], x(r[n - 15]), r[n - 16]);
            var i = this.h[0], o = this.h[1], a = this.h[2], s = this.h[3], c = this.h[4], f = this.h[5], u = this.h[6], h = this.h[7];
            for (p(this.k.length === r.length), n = 0; n < r.length; n++) {
                var d = g(h, w(c), y(c, f, u), this.k[n], r[n]), l = b(_(i), m(i, o, a));
                h = u, u = f, f = c, c = b(s, d), s = a, a = o, o = i, i = b(d, l);
            }
            this.h[0] = b(this.h[0], i), this.h[1] = b(this.h[1], o), this.h[2] = b(this.h[2], a), 
            this.h[3] = b(this.h[3], s), this.h[4] = b(this.h[4], c), this.h[5] = b(this.h[5], f), 
            this.h[6] = b(this.h[6], u), this.h[7] = b(this.h[7], h);
        }, c.prototype._digest = function(t) {
            return "hex" === t ? n.toHex32(this.h, "big") : n.split32(this.h, "big");
        };
    }

// ==================== 元数据 ====================
// 此文件包含从 wx0526b0432a899356 提取的 SHA-512 算法实现
// 检测位置: 行 7838-7838
// 变量名: s
// 检测源: static
