/**
 * MD5 算法实现
 * App ID: wx0551abe2395c5dfb
 * 版本: v35
 * 代码哈希: eenavq
 * 来源文件: output/wx0551abe2395c5dfb/common/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.95
 * 函数名: i
 * 行数: 9
 * 生成时间: 2025-07-05T13:17:10.774Z
 */

function i(e) {
    var t, o, i, s, a, c, u = e.length, 
    l = [1732584193, -271733879, -1732584194, 271733878];
    for (t = 64; t <= u; t += 64) n(l, r(e.substring(t - 64, t)));
    for (e = e.substring(t - 64), o = e.length, i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        t = 0; t < o; t += 1) i[t >> 2] |= e.charCodeAt(t) << (t % 4 << 3);
    if (i[t >> 2] |= 128 << (t % 4 << 3), t > 55) for (n(l, i), t = 0; t < 16; t += 1) i[t] = 0;
    return s = 8 * u, s = s.toString(16).match(/(.*?)(.{0,8})$/), a = parseInt(s[2], 16),
        c = parseInt(s[1], 16) || 0, i[14] = a, i[15] = c, n(l, i), l;
}

// ==================== 元数据 ====================
// 此文件包含从 wx0551abe2395c5dfb 提取的 MD5 算法实现
// 检测位置: 行 31010-31010
// 变量名: l
// 检测源: static
