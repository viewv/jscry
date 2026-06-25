/**
 * SHA-256 算法实现
 * App ID: wx04e4f27930635cd3
 * 版本: v21
 * 代码哈希: myxh0c
 * 来源文件: output/wx04e4f27930635cd3/common/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.9
 * 函数名: anonymous
 * 行数: 19
 * 生成时间: 2025-07-05T13:17:10.887Z
 */

function(t) {
                t.constructor == String && (t = i.stringToBytes(t));
                var n, r, o, s, c, u, p, f, l, Y = e.bytesToWords(t), d = 8 * t.length, h = [ 1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225 ], Z = [];
                Y[d >> 5] |= 128 << 24 - d % 32, Y[15 + (d + 64 >> 9 << 4)] = d;
                for (var S = 0; S < Y.length; S += 16) {
                    n = h[0], r = h[1], o = h[2], s = h[3], c = h[4], u = h[5], p = h[6], f = h[7];
                    for (var L = 0; L < 64; L++) {
                        if (L < 16) Z[L] = Y[L + S]; else {
                            var g = Z[L - 15], v = Z[L - 2], X = (g << 25 | g >>> 7) ^ (g << 14 | g >>> 18) ^ g >>> 3, J = (v << 15 | v >>> 17) ^ (v << 13 | v >>> 19) ^ v >>> 10;
                            Z[L] = X + (Z[L - 7] >>> 0) + J + (Z[L - 16] >>> 0);
                        }
                        var C = n & r ^ n & o ^ r & o, m = (n << 30 | n >>> 2) ^ (n << 19 | n >>> 13) ^ (n << 10 | n >>> 22);
                        l = (f >>> 0) + ((c << 26 | c >>> 6) ^ (c << 21 | c >>> 11) ^ (c << 7 | c >>> 25)) + (c & u ^ ~c & p) + a[L] + (Z[L] >>> 0), 
                        f = p, p = u, u = c, c = s + l >>> 0, s = o, o = r, r = n, n = l + (m + C) >>> 0;
                    }
                    h[0] += n, h[1] += r, h[2] += o, h[3] += s, h[4] += c, h[5] += u, h[6] += p, h[7] += f;
                }
                return h;
            }

// ==================== 元数据 ====================
// 此文件包含从 wx04e4f27930635cd3 提取的 SHA-256 算法实现
// 检测位置: 行 6376-6376
// 变量名: h
// 检测源: static
