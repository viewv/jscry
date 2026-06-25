/**
 * SHA-512 算法实现
 * App ID: wx03bc60e1b437e39c
 * 版本: v26
 * 代码哈希: nzne11
 * 来源文件: output/wx03bc60e1b437e39c/common/vendor.js
 * 检测类型: Round constants
 * 置信度: 0.9
 * 函数名: anonymous
 * 行数: 24
 * 生成时间: 2025-07-05T13:17:10.910Z
 */

function(e, t, n) {
        "use strict";
        var r = n("c3c0"), i = n("edc9"), a = n("aa56"), s = n("da3e"), o = r.sum32, d = r.sum32_4, u = r.sum32_5, c = a.ch32, f = a.maj32, h = a.s0_256, l = a.s1_256, _ = a.g0_256, m = a.g1_256, p = i.BlockHash, y = [ 1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298 ];
        function b() {
            if (!(this instanceof b)) return new b();
            p.call(this), this.h = [ 1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225 ], 
            this.k = y, this.W = new Array(64);
        }
        r.inherits(b, p), e.exports = b, b.blockSize = 512, b.outSize = 256, b.hmacStrength = 192, 
        b.padLength = 64, b.prototype._update = function(e, t) {
            for (var n = this.W, r = 0; r < 16; r++) n[r] = e[t + r];
            for (;r < n.length; r++) n[r] = d(m(n[r - 2]), n[r - 7], _(n[r - 15]), n[r - 16]);
            var i = this.h[0], a = this.h[1], p = this.h[2], y = this.h[3], b = this.h[4], v = this.h[5], g = this.h[6], M = this.h[7];
            for (s(this.k.length === n.length), r = 0; r < n.length; r++) {
                var w = u(M, l(b), c(b, v, g), this.k[r], n[r]), L = o(h(i), f(i, a, p));
                M = g, g = v, v = b, b = o(y, w), y = p, p = a, a = i, i = o(w, L);
            }
            this.h[0] = o(this.h[0], i), this.h[1] = o(this.h[1], a), this.h[2] = o(this.h[2], p), 
            this.h[3] = o(this.h[3], y), this.h[4] = o(this.h[4], b), this.h[5] = o(this.h[5], v), 
            this.h[6] = o(this.h[6], g), this.h[7] = o(this.h[7], M);
        }, b.prototype._digest = function(e) {
            return "hex" === e ? r.toHex32(this.h, "big") : r.split32(this.h, "big");
        };
    }

// ==================== 元数据 ====================
// 此文件包含从 wx03bc60e1b437e39c 提取的 SHA-512 算法实现
// 检测位置: 行 14774-14774
// 变量名: y
// 检测源: static
