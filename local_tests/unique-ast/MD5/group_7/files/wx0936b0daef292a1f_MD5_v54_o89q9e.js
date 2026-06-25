/**
 * MD5 算法实现
 * App ID: wx0936b0daef292a1f
 * 版本: v54
 * 代码哈希: o89q9e
 * 来源文件: output/wx0936b0daef292a1f/src/lib/algorithm/qvsec.js
 * 检测类型: Initial hash values
 * 置信度: 0.95
 * 函数名: anonymous
 * 行数: 9
 * 生成时间: 2025-07-05T13:17:10.805Z
 */

function(r) {
        for (var n, a, o, u, c = [], h = decodeURIComponent(encodeURI(r)), f = h.length, 
        i = [ n = 1732584193, a = -271733879, ~n, ~a ], d = 0; d <= f; ) c[d >> 2] |= (h.charCodeAt(d) || 128) << d++ % 4 * 8;
        for (c[r = 16 * (f + 8 >> 6) + 14] = 8 * f, d = 0; d < r; d += 16) {
            for (f = i, u = 0; u < 64; ) f = [ o = f[3], t(n = f[1], (o = t(t(f[0], [ n & (a = f[2]) | ~n & o, o & n | ~o & a, n ^ a ^ o, a ^ (n | ~o) ][f = u >> 4]), t(e[u], c[[ u, 5 * u + 1, 3 * u + 5, 7 * u ][f] % 16 + d]))) << (f = [ 7, 12, 17, 22, 5, 9, 14, 20, 4, 11, 16, 23, 6, 10, 15, 21 ][4 * f + u++ % 4]) | o >>> 32 - f), n, a ];
            for (u = 4; u; ) i[--u] = t(i[u], f[u]);
        }
        for (r = ""; u < 32; ) r += (i[u >> 3] >> 4 * (1 ^ 7 & u++) & 15).toString(16);
        return r;
    }

// ==================== 元数据 ====================
// 此文件包含从 wx0936b0daef292a1f 提取的 MD5 算法实现
// 检测位置: 行 9-9
// 变量名: i
// 检测源: static
