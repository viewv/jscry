/**
 * SHA-512 算法实现
 * App ID: wx08cd8aaa6d20597d
 * 版本: v65
 * 代码哈希: 5shdi
 * 来源文件: output/wx08cd8aaa6d20597d/common/vendor.js
 * 检测类型: Round constants
 * 置信度: 0.9
 * 函数名: anonymous
 * 行数: 24
 * 生成时间: 2025-07-05T13:17:10.923Z
 */

function(t, e, n) {
        "use strict";
        var r = n("c3c0"), o = n("edc9"), i = n("aa56"), a = n("da3e"), s = r.sum32, c = r.sum32_4, u = r.sum32_5, f = i.ch32, d = i.maj32, h = i.s0_256, l = i.s1_256, p = i.g0_256, g = i.g1_256, m = o.BlockHash, y = [ 1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298 ];
        function v() {
            if (!(this instanceof v)) return new v();
            m.call(this), this.h = [ 1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225 ], 
            this.k = y, this.W = new Array(64);
        }
        r.inherits(v, m), t.exports = v, v.blockSize = 512, v.outSize = 256, v.hmacStrength = 192, 
        v.padLength = 64, v.prototype._update = function(t, e) {
            for (var n = this.W, r = 0; r < 16; r++) n[r] = t[e + r];
            for (;r < n.length; r++) n[r] = c(g(n[r - 2]), n[r - 7], p(n[r - 15]), n[r - 16]);
            var o = this.h[0], i = this.h[1], m = this.h[2], y = this.h[3], v = this.h[4], b = this.h[5], I = this.h[6], _ = this.h[7];
            for (a(this.k.length === n.length), r = 0; r < n.length; r++) {
                var S = u(_, l(v), f(v, b, I), this.k[r], n[r]), T = s(h(o), d(o, i, m));
                _ = I, I = b, b = v, v = s(y, S), y = m, m = i, i = o, o = s(S, T);
            }
            this.h[0] = s(this.h[0], o), this.h[1] = s(this.h[1], i), this.h[2] = s(this.h[2], m), 
            this.h[3] = s(this.h[3], y), this.h[4] = s(this.h[4], v), this.h[5] = s(this.h[5], b), 
            this.h[6] = s(this.h[6], I), this.h[7] = s(this.h[7], _);
        }, v.prototype._digest = function(t) {
            return "hex" === t ? r.toHex32(this.h, "big") : r.split32(this.h, "big");
        };
    }

// ==================== 元数据 ====================
// 此文件包含从 wx08cd8aaa6d20597d 提取的 SHA-512 算法实现
// 检测位置: 行 16821-16821
// 变量名: y
// 检测源: static
