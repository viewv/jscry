/**
 * MD5 算法实现
 * App ID: wx01412c13d250ec52
 * 版本: v9
 * 代码哈希: -rnfing
 * 来源文件: output/wx01412c13d250ec52/common/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.95
 * 函数名: i
 * 行数: 9
 * 生成时间: 2025-07-05T13:17:10.750Z
 */

function i(e) {
                        var n, o, i, a, s, c, u = e.length, l = [ 1732584193, -271733879, -1732584194, 271733878 ];
                        for (n = 64; n <= u; n += 64) t(l, r(e.subarray(n - 64, n)));
                        for (o = (e = n - 64 < u ? e.subarray(n - 64) : new Uint8Array(0)).length, i = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], 
                        n = 0; n < o; n += 1) i[n >> 2] |= e[n] << (n % 4 << 3);
                        if (i[n >> 2] |= 128 << (n % 4 << 3), n > 55) for (t(l, i), n = 0; n < 16; n += 1) i[n] = 0;
                        return a = 8 * u, a = a.toString(16).match(/(.*?)(.{0,8})$/), s = parseInt(a[2], 16), 
                        c = parseInt(a[1], 16) || 0, i[14] = s, i[15] = c, t(l, i), l;
                    }

// ==================== 元数据 ====================
// 此文件包含从 wx01412c13d250ec52 提取的 MD5 算法实现
// 检测位置: 行 1290-1290
// 变量名: l
// 检测源: static
