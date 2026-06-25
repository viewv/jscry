/**
 * SHA-256 算法实现
 * App ID: wx0a5c8b647fc311c3
 * 版本: v34
 * 代码哈希: -qifkk3
 * 来源文件: output/wx0a5c8b647fc311c3/common/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.9
 * 函数名: anonymous
 * 行数: 44
 * 生成时间: 2025-07-05T13:17:10.896Z
 */

function(message) {
                // Convert to byte array
                if (message.constructor == String) message = UTF8.stringToBytes(message);
                /* else, assume byte array already */                var m = util.bytesToWords(message), l = message.length * 8, H = [ 1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225 ], w = [], a, b, c, d, e, f, g, h, i, j, t1, t2;
                // Padding
                                m[l >> 5] |= 128 << 24 - l % 32;
                m[(l + 64 >> 9 << 4) + 15] = l;
                for (var i = 0; i < m.length; i += 16) {
                    a = H[0];
                    b = H[1];
                    c = H[2];
                    d = H[3];
                    e = H[4];
                    f = H[5];
                    g = H[6];
                    h = H[7];
                    for (var j = 0; j < 64; j++) {
                        if (j < 16) w[j] = m[j + i]; else {
                            var gamma0x = w[j - 15], gamma1x = w[j - 2], gamma0 = (gamma0x << 25 | gamma0x >>> 7) ^ (gamma0x << 14 | gamma0x >>> 18) ^ gamma0x >>> 3, gamma1 = (gamma1x << 15 | gamma1x >>> 17) ^ (gamma1x << 13 | gamma1x >>> 19) ^ gamma1x >>> 10;
                            w[j] = gamma0 + (w[j - 7] >>> 0) + gamma1 + (w[j - 16] >>> 0);
                        }
                        var ch = e & f ^ ~e & g, maj = a & b ^ a & c ^ b & c, sigma0 = (a << 30 | a >>> 2) ^ (a << 19 | a >>> 13) ^ (a << 10 | a >>> 22), sigma1 = (e << 26 | e >>> 6) ^ (e << 21 | e >>> 11) ^ (e << 7 | e >>> 25);
                        t1 = (h >>> 0) + sigma1 + ch + K[j] + (w[j] >>> 0);
                        t2 = sigma0 + maj;
                        h = g;
                        g = f;
                        f = e;
                        e = d + t1 >>> 0;
                        d = c;
                        c = b;
                        b = a;
                        a = t1 + t2 >>> 0;
                    }
                    H[0] += a;
                    H[1] += b;
                    H[2] += c;
                    H[3] += d;
                    H[4] += e;
                    H[5] += f;
                    H[6] += g;
                    H[7] += h;
                }
                return H;
            }

// ==================== 元数据 ====================
// 此文件包含从 wx0a5c8b647fc311c3 提取的 SHA-256 算法实现
// 检测位置: 行 17339-17339
// 变量名: H
// 检测源: static
