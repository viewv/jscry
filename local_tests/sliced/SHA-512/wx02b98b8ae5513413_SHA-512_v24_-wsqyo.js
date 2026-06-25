/**
 * SHA-512 算法实现
 * App ID: wx02b98b8ae5513413
 * 版本: v24
 * 代码哈希: -wsqyo3
 * 来源文件: output/wx02b98b8ae5513413/common/vendor.js
 * 检测类型: Round constants
 * 置信度: 0.9
 * 函数名: anonymous
 * 行数: 24
 * 生成时间: 2025-07-05T13:17:10.909Z
 */

function(e, t, a) {
        "use strict";
        var r = a("c3c0"), n = a("edc9"), i = a("aa56"), l = a("da3e"), s = r.sum32, o = r.sum32_4, u = r.sum32_5, d = i.ch32, c = i.maj32, f = i.s0_256, h = i.s1_256, b = i.g0_256, _ = i.g1_256, v = n.BlockHash, p = [ 1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298 ];
        function m() {
            if (!(this instanceof m)) return new m();
            v.call(this), this.h = [ 1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225 ], 
            this.k = p, this.W = new Array(64);
        }
        r.inherits(m, v), e.exports = m, m.blockSize = 512, m.outSize = 256, m.hmacStrength = 192, 
        m.padLength = 64, m.prototype._update = function(e, t) {
            for (var a = this.W, r = 0; r < 16; r++) a[r] = e[t + r];
            for (;r < a.length; r++) a[r] = o(_(a[r - 2]), a[r - 7], b(a[r - 15]), a[r - 16]);
            var n = this.h[0], i = this.h[1], v = this.h[2], p = this.h[3], m = this.h[4], y = this.h[5], g = this.h[6], M = this.h[7];
            for (l(this.k.length === a.length), r = 0; r < a.length; r++) {
                var w = u(M, h(m), d(m, y, g), this.k[r], a[r]), L = s(f(n), c(n, i, v));
                M = g, g = y, y = m, m = s(p, w), p = v, v = i, i = n, n = s(w, L);
            }
            this.h[0] = s(this.h[0], n), this.h[1] = s(this.h[1], i), this.h[2] = s(this.h[2], v), 
            this.h[3] = s(this.h[3], p), this.h[4] = s(this.h[4], m), this.h[5] = s(this.h[5], y), 
            this.h[6] = s(this.h[6], g), this.h[7] = s(this.h[7], M);
        }, m.prototype._digest = function(e) {
            return "hex" === e ? r.toHex32(this.h, "big") : r.split32(this.h, "big");
        };
    }

// ==================== 元数据 ====================
// 此文件包含从 wx02b98b8ae5513413 提取的 SHA-512 算法实现
// 检测位置: 行 27351-27351
// 变量名: p
// 检测源: static
