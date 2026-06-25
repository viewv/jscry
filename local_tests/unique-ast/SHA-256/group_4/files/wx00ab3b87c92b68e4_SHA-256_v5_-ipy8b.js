/**
 * SHA-256 算法实现
 * App ID: wx00ab3b87c92b68e4
 * 版本: v5
 * 代码哈希: -ipy8bn
 * 来源文件: output/wx00ab3b87c92b68e4/common/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.9
 * 函数名: anonymous
 * 行数: 19
 * 生成时间: 2025-07-05T13:17:10.871Z
 */

function(t) {
                t.constructor == String && (t = r.stringToBytes(t));
                var n, i, o, s, u, c, d, f, l, p = e.bytesToWords(t), y = 8 * t.length, h = [ 1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225 ], g = [];
                p[y >> 5] |= 128 << 24 - y % 32, p[15 + (y + 64 >> 9 << 4)] = y;
                for (var v = 0; v < p.length; v += 16) {
                    n = h[0], i = h[1], o = h[2], s = h[3], u = h[4], c = h[5], d = h[6], f = h[7];
                    for (var m = 0; m < 64; m++) {
                        if (m < 16) g[m] = p[m + v]; else {
                            var b = g[m - 15], A = g[m - 2], _ = (b << 25 | b >>> 7) ^ (b << 14 | b >>> 18) ^ b >>> 3, S = (A << 15 | A >>> 17) ^ (A << 13 | A >>> 19) ^ A >>> 10;
                            g[m] = _ + (g[m - 7] >>> 0) + S + (g[m - 16] >>> 0);
                        }
                        var P = n & i ^ n & o ^ i & o, x = (n << 30 | n >>> 2) ^ (n << 19 | n >>> 13) ^ (n << 10 | n >>> 22);
                        l = (f >>> 0) + ((u << 26 | u >>> 6) ^ (u << 21 | u >>> 11) ^ (u << 7 | u >>> 25)) + (u & c ^ ~u & d) + a[m] + (g[m] >>> 0), 
                        f = d, d = c, c = u, u = s + l >>> 0, s = o, o = i, i = n, n = l + (x + P) >>> 0;
                    }
                    h[0] += n, h[1] += i, h[2] += o, h[3] += s, h[4] += u, h[5] += c, h[6] += d, h[7] += f;
                }
                return h;
            }

// ==================== 元数据 ====================
// 此文件包含从 wx00ab3b87c92b68e4 提取的 SHA-256 算法实现
// 检测位置: 行 5185-5185
// 变量名: h
// 检测源: static
