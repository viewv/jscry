/**
 * MD5 算法实现
 * App ID: wx01412c13d250ec52
 * 版本: v8
 * 代码哈希: -8i6r4o
 * 来源文件: output/wx01412c13d250ec52/common/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.95
 * 函数名: o
 * 行数: 9
 * 生成时间: 2025-07-05T13:17:10.750Z
 */

function o(e) {
                        var r, o, i, a, s, c, u = e.length, l = [ 1732584193, -271733879, -1732584194, 271733878 ];
                        for (r = 64; r <= u; r += 64) t(l, n(e.substring(r - 64, r)));
                        for (o = (e = e.substring(r - 64)).length, i = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], 
                        r = 0; r < o; r += 1) i[r >> 2] |= e.charCodeAt(r) << (r % 4 << 3);
                        if (i[r >> 2] |= 128 << (r % 4 << 3), r > 55) for (t(l, i), r = 0; r < 16; r += 1) i[r] = 0;
                        return a = 8 * u, a = a.toString(16).match(/(.*?)(.{0,8})$/), s = parseInt(a[2], 16), 
                        c = parseInt(a[1], 16) || 0, i[14] = s, i[15] = c, t(l, i), l;
                    }

// ==================== 元数据 ====================
// 此文件包含从 wx01412c13d250ec52 提取的 MD5 算法实现
// 检测位置: 行 1281-1281
// 变量名: l
// 检测源: static
