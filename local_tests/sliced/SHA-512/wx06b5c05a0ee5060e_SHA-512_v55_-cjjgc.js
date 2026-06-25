/**
 * SHA-512 算法实现
 * App ID: wx06b5c05a0ee5060e
 * 版本: v55
 * 代码哈希: -cjjgc8
 * 来源文件: output/wx06b5c05a0ee5060e/common/vendor.js
 * 检测类型: Round constants
 * 置信度: 0.9
 * 函数名: anonymous
 * 行数: 28
 * 生成时间: 2025-07-05T13:17:10.919Z
 */

function(t, e, r) {
    "use strict";
    var n = r(/*! ../utils */ 128), i = r(/*! ../common */ 129), o = r(/*! ./common */ 132), a = r(/*! minimalistic-assert */ 81), c = n.sum32, s = n.sum32_4, f = n.sum32_5, u = o.ch32, d = o.maj32, h = o.s0_256, l = o.s1_256, p = o.g0_256, b = o.g1_256, v = i.BlockHash, m = [ 1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298 ];
    function W() {
        if (!(this instanceof W)) return new W();
        v.call(this), this.h = [ 1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225 ], 
        this.k = m, this.W = new Array(64);
    }
    n.inherits(W, v), t.exports = W, W.blockSize = 512, W.outSize = 256, W.hmacStrength = 192, 
    W.padLength = 64, W.prototype._update = function(t, e) {
        for (var r = this.W, n = 0; n < 16; n++) r[n] = t[e + n];
        for (;n < r.length; n++) r[n] = s(b(r[n - 2]), r[n - 7], p(r[n - 15]), r[n - 16]);
        var i = this.h[0], o = this.h[1], v = this.h[2], m = this.h[3], W = this.h[4], g = this.h[5], y = this.h[6], _ = this.h[7];
        for (a(this.k.length === r.length), n = 0; n < r.length; n++) {
            var k = f(_, l(W), u(W, g, y), this.k[n], r[n]), w = c(h(i), d(i, o, v));
            _ = y, y = g, g = W, W = c(m, k), m = v, v = o, o = i, i = c(k, w);
        }
        this.h[0] = c(this.h[0], i), this.h[1] = c(this.h[1], o), this.h[2] = c(this.h[2], v), 
        this.h[3] = c(this.h[3], m), this.h[4] = c(this.h[4], W), this.h[5] = c(this.h[5], g), 
        this.h[6] = c(this.h[6], y), this.h[7] = c(this.h[7], _);
    }, W.prototype._digest = function(t) {
        return "hex" === t ? n.toHex32(this.h, "big") : n.split32(this.h, "big");
    }
    /*!**************************************************!*\
  !*** ./node_modules/hash.js/lib/hash/sha/384.js ***!
  \**************************************************/
    /*! no static exports found */;
}

// ==================== 元数据 ====================
// 此文件包含从 wx06b5c05a0ee5060e 提取的 SHA-512 算法实现
// 检测位置: 行 14986-14986
// 变量名: m
// 检测源: static
