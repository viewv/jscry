/**
 * SHA-512 算法实现
 * App ID: wx0a8a5be3869df5e5
 * 版本: v71
 * 代码哈希: -p207z8
 * 来源文件: output/wx0a8a5be3869df5e5/common/vendor.js
 * 检测类型: Round constants
 * 置信度: 0.9
 * 函数名: anonymous
 * 行数: 24
 * 生成时间: 2025-07-05T13:17:10.924Z
 */

function(t, e, a) {
        "use strict";
        var r = a("1lLf"), n = a("YSDb"), o = a("3nYK"), i = a("08Lv"), s = r.sum32, c = r.sum32_4, p = r.sum32_5, u = o.ch32, f = o.maj32, d = o.s0_256, l = o.s1_256, h = o.g0_256, y = o.g1_256, g = n.BlockHash, v = [ 1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298 ];
        function m() {
            if (!(this instanceof m)) return new m();
            g.call(this), this.h = [ 1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225 ], 
            this.k = v, this.W = new Array(64);
        }
        r.inherits(m, g), t.exports = m, m.blockSize = 512, m.outSize = 256, m.hmacStrength = 192, 
        m.padLength = 64, m.prototype._update = function(t, e) {
            for (var a = this.W, r = 0; r < 16; r++) a[r] = t[e + r];
            for (;r < a.length; r++) a[r] = c(y(a[r - 2]), a[r - 7], h(a[r - 15]), a[r - 16]);
            var n = this.h[0], o = this.h[1], g = this.h[2], v = this.h[3], m = this.h[4], b = this.h[5], w = this.h[6], _ = this.h[7];
            for (i(this.k.length === a.length), r = 0; r < a.length; r++) {
                var $ = p(_, l(m), u(m, b, w), this.k[r], a[r]), k = s(d(n), f(n, o, g));
                _ = w, w = b, b = m, m = s(v, $), v = g, g = o, o = n, n = s($, k);
            }
            this.h[0] = s(this.h[0], n), this.h[1] = s(this.h[1], o), this.h[2] = s(this.h[2], g), 
            this.h[3] = s(this.h[3], v), this.h[4] = s(this.h[4], m), this.h[5] = s(this.h[5], b), 
            this.h[6] = s(this.h[6], w), this.h[7] = s(this.h[7], _);
        }, m.prototype._digest = function(t) {
            return "hex" === t ? r.toHex32(this.h, "big") : r.split32(this.h, "big");
        };
    }

// ==================== 元数据 ====================
// 此文件包含从 wx0a8a5be3869df5e5 提取的 SHA-512 算法实现
// 检测位置: 行 10104-10104
// 变量名: v
// 检测源: static
