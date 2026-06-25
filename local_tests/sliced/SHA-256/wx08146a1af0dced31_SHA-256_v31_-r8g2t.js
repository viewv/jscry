/**
 * SHA-256 算法实现
 * App ID: wx08146a1af0dced31
 * 版本: v31
 * 代码哈希: -r8g2tg
 * 来源文件: output/wx08146a1af0dced31/common/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.9
 * 函数名: anonymous
 * 行数: 19
 * 生成时间: 2025-07-05T13:17:10.896Z
 */

function(t) {
            t.constructor == String && (t = o.stringToBytes(t));
            var n, r, i, s, u, c, f, l, p, h = e.bytesToWords(t), d = 8 * t.length, v = [ 1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225 ], y = [];
            h[d >> 5] |= 128 << 24 - d % 32, h[15 + (d + 64 >> 9 << 4)] = d;
            for (var g = 0; g < h.length; g += 16) {
                n = v[0], r = v[1], i = v[2], s = v[3], u = v[4], c = v[5], f = v[6], l = v[7];
                for (var m = 0; m < 64; m++) {
                    if (m < 16) y[m] = h[m + g]; else {
                        var _ = y[m - 15], b = y[m - 2], w = (_ << 25 | _ >>> 7) ^ (_ << 14 | _ >>> 18) ^ _ >>> 3, A = (b << 15 | b >>> 17) ^ (b << 13 | b >>> 19) ^ b >>> 10;
                        y[m] = w + (y[m - 7] >>> 0) + A + (y[m - 16] >>> 0);
                    }
                    var x = n & r ^ n & i ^ r & i, O = (n << 30 | n >>> 2) ^ (n << 19 | n >>> 13) ^ (n << 10 | n >>> 22);
                    p = (l >>> 0) + ((u << 26 | u >>> 6) ^ (u << 21 | u >>> 11) ^ (u << 7 | u >>> 25)) + (u & c ^ ~u & f) + a[m] + (y[m] >>> 0), 
                    l = f, f = c, c = u, u = s + p >>> 0, s = i, i = r, r = n, n = p + (O + x) >>> 0;
                }
                v[0] += n, v[1] += r, v[2] += i, v[3] += s, v[4] += u, v[5] += c, v[6] += f, v[7] += l;
            }
            return v;
        }

// ==================== 元数据 ====================
// 此文件包含从 wx08146a1af0dced31 提取的 SHA-256 算法实现
// 检测位置: 行 5426-5426
// 变量名: v
// 检测源: static
