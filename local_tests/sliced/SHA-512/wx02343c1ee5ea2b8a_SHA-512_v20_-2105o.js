/**
 * SHA-512 算法实现
 * App ID: wx02343c1ee5ea2b8a
 * 版本: v20
 * 代码哈希: -2105ow
 * 来源文件: output/wx02343c1ee5ea2b8a/common/vendor.js
 * 检测类型: Round constants
 * 置信度: 0.9
 * 函数名: anonymous
 * 行数: 23
 * 生成时间: 2025-07-05T13:17:10.907Z
 */

function(e, t, r) {
        function n() {
            if (!(this instanceof n)) return new n();
            y.call(this), this.h = [ 1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225 ], 
            this.k = g, this.W = new Array(64);
        }
        var i = r("c3c0"), o = r("edc9"), a = r("aa56"), f = r("da3e"), s = i.sum32, c = i.sum32_4, u = i.sum32_5, h = a.ch32, d = a.maj32, l = a.s0_256, p = a.s1_256, b = a.g0_256, v = a.g1_256, y = o.BlockHash, g = [ 1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298 ];
        i.inherits(n, y), e.exports = n, n.blockSize = 512, n.outSize = 256, n.hmacStrength = 192, 
        n.padLength = 64, n.prototype._update = function(e, t) {
            for (var r = this.W, n = 0; n < 16; n++) r[n] = e[t + n];
            for (;n < r.length; n++) r[n] = c(v(r[n - 2]), r[n - 7], b(r[n - 15]), r[n - 16]);
            var i = this.h[0], o = this.h[1], a = this.h[2], y = this.h[3], g = this.h[4], m = this.h[5], _ = this.h[6], w = this.h[7];
            for (f(this.k.length === r.length), n = 0; n < r.length; n++) {
                var S = u(w, p(g), h(g, m, _), this.k[n], r[n]), A = s(l(i), d(i, o, a));
                w = _, _ = m, m = g, g = s(y, S), y = a, a = o, o = i, i = s(S, A);
            }
            this.h[0] = s(this.h[0], i), this.h[1] = s(this.h[1], o), this.h[2] = s(this.h[2], a), 
            this.h[3] = s(this.h[3], y), this.h[4] = s(this.h[4], g), this.h[5] = s(this.h[5], m), 
            this.h[6] = s(this.h[6], _), this.h[7] = s(this.h[7], w);
        }, n.prototype._digest = function(e) {
            return "hex" === e ? i.toHex32(this.h, "big") : i.split32(this.h, "big");
        };
    }

// ==================== 元数据 ====================
// 此文件包含从 wx02343c1ee5ea2b8a 提取的 SHA-512 算法实现
// 检测位置: 行 8239-8239
// 变量名: g
// 检测源: static
