/**
 * SHA-512 算法实现
 * App ID: wx04da6ac6acae26f6
 * 版本: v37
 * 代码哈希: -fp980l
 * 来源文件: output/wx04da6ac6acae26f6/common/vendor.js
 * 检测类型: Round constants
 * 置信度: 0.9
 * 函数名: eed
 * 行数: 28
 * 生成时间: 2025-07-05T13:17:10.913Z
 */

function eed(e, t, r) {
        "use strict";
        var n = r("c3c0"), i = r("edc9"), a = r("aa56"), o = r("da3e"), f = n.sum32, s = n.sum32_4, c = n.sum32_5, u = a.ch32, h = a.maj32, d = a.s0_256, l = a.s1_256, p = a.g0_256, b = a.g1_256, v = i.BlockHash, y = [ 1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298 ];
        function g() {
            if (!(this instanceof g)) return new g();
            v.call(this), this.h = [ 1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225 ], 
            this.k = y, this.W = new Array(64);
        }
        n.inherits(g, v), e.exports = g, g.blockSize = 512, g.outSize = 256, g.hmacStrength = 192, 
        g.padLength = 64, g.prototype._update = function(e, t) {
            for (var r = this.W, n = 0; n < 16; n++) {
                r[n] = e[t + n];
            }
            for (;n < r.length; n++) {
                r[n] = s(b(r[n - 2]), r[n - 7], p(r[n - 15]), r[n - 16]);
            }
            var i = this.h[0], a = this.h[1], v = this.h[2], y = this.h[3], g = this.h[4], m = this.h[5], _ = this.h[6], w = this.h[7];
            for (o(this.k.length === r.length), n = 0; n < r.length; n++) {
                var S = c(w, l(g), u(g, m, _), this.k[n], r[n]), A = f(d(i), h(i, a, v));
                w = _, _ = m, m = g, g = f(y, S), y = v, v = a, a = i, i = f(S, A);
            }
            this.h[0] = f(this.h[0], i), this.h[1] = f(this.h[1], a), this.h[2] = f(this.h[2], v), 
            this.h[3] = f(this.h[3], y), this.h[4] = f(this.h[4], g), this.h[5] = f(this.h[5], m), 
            this.h[6] = f(this.h[6], _), this.h[7] = f(this.h[7], w);
        }, g.prototype._digest = function(e) {
            return "hex" === e ? n.toHex32(this.h, "big") : n.split32(this.h, "big");
        };
    }

// ==================== 元数据 ====================
// 此文件包含从 wx04da6ac6acae26f6 提取的 SHA-512 算法实现
// 检测位置: 行 7658-7658
// 变量名: y
// 检测源: static
