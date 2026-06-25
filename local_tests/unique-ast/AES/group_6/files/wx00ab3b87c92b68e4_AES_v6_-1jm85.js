/**
 * AES 算法实现
 * App ID: wx00ab3b87c92b68e4
 * 版本: v6
 * 代码哈希: -1jm85q
 * 来源文件: output/wx00ab3b87c92b68e4/common/vendor.js
 * 检测类型: S-box
 * 置信度: 0.95
 * 函数名: anonymous
 * 行数: 82
 * 生成时间: 2025-07-05T13:17:10.509Z
 */

function() {
            function t(t, e) {
                for (var n = 0, i = 0; i < 8; i++) {
                    1 & e && (n ^= t);
                    var r = 128 & t;
                    t = t << 1 & 255, r && (t ^= 27), e >>>= 1;
                }
                return n;
            }
            for (var e = "undefined" == typeof window ? n("05eb").Crypto : window.Crypto, i = e.util, r = e.charenc.UTF8, o = [ 99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22 ], a = [], s = 0; s < 256; s++) a[o[s]] = s;
            var u = [], c = [], d = [], f = [], l = [], p = [];
            for (s = 0; s < 256; s++) u[s] = t(s, 2), c[s] = t(s, 3), d[s] = t(s, 9), f[s] = t(s, 11), 
            l[s] = t(s, 13), p[s] = t(s, 14);
            var y, h, g, v = [ 0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54 ], m = [ [], [], [], [] ], b = e.AES = {
                encrypt: function(t, n, o) {
                    var a = (o = o || {}).mode || new e.mode.OFB();
                    a.fixOptions && a.fixOptions(o);
                    var s = t.constructor == String ? r.stringToBytes(t) : t, u = o.iv || i.randomBytes(4 * b._blocksize), c = n.constructor == String ? e.PBKDF2(n, u, 32, {
                        asBytes: !0
                    }) : n;
                    return b._init(c), a.encrypt(b, s, u), s = o.iv ? s : u.concat(s), o && o.asBytes ? s : i.bytesToBase64(s);
                },
                decrypt: function(t, n, o) {
                    var a = (o = o || {}).mode || new e.mode.OFB();
                    a.fixOptions && a.fixOptions(o);
                    var s = t.constructor == String ? i.base64ToBytes(t) : t, u = o.iv || s.splice(0, 4 * b._blocksize), c = n.constructor == String ? e.PBKDF2(n, u, 32, {
                        asBytes: !0
                    }) : n;
                    return b._init(c), a.decrypt(b, s, u), o && o.asBytes ? s : r.bytesToString(s);
                },
                _blocksize: 4,
                _encryptblock: function(t, e) {
                    for (var n = 0; n < b._blocksize; n++) for (var i = 0; i < 4; i++) m[n][i] = t[e + 4 * i + n];
                    for (n = 0; n < 4; n++) for (i = 0; i < 4; i++) m[n][i] ^= g[i][n];
                    for (var r = 1; r < h; r++) {
                        for (n = 0; n < 4; n++) for (i = 0; i < 4; i++) m[n][i] = o[m[n][i]];
                        for (m[1].push(m[1].shift()), m[2].push(m[2].shift()), m[2].push(m[2].shift()), 
                        m[3].unshift(m[3].pop()), i = 0; i < 4; i++) {
                            var a = m[0][i], s = m[1][i], d = m[2][i], f = m[3][i];
                            m[0][i] = u[a] ^ c[s] ^ d ^ f, m[1][i] = a ^ u[s] ^ c[d] ^ f, m[2][i] = a ^ s ^ u[d] ^ c[f], 
                            m[3][i] = c[a] ^ s ^ d ^ u[f];
                        }
                        for (n = 0; n < 4; n++) for (i = 0; i < 4; i++) m[n][i] ^= g[4 * r + i][n];
                    }
                    for (n = 0; n < 4; n++) for (i = 0; i < 4; i++) m[n][i] = o[m[n][i]];
                    for (m[1].push(m[1].shift()), m[2].push(m[2].shift()), m[2].push(m[2].shift()), 
                    m[3].unshift(m[3].pop()), n = 0; n < 4; n++) for (i = 0; i < 4; i++) m[n][i] ^= g[4 * h + i][n];
                    for (n = 0; n < b._blocksize; n++) for (i = 0; i < 4; i++) t[e + 4 * i + n] = m[n][i];
                },
                _decryptblock: function(t, e) {
                    for (var n = 0; n < b._blocksize; n++) for (var i = 0; i < 4; i++) m[n][i] = t[e + 4 * i + n];
                    for (n = 0; n < 4; n++) for (i = 0; i < 4; i++) m[n][i] ^= g[4 * h + i][n];
                    for (var r = 1; r < h; r++) {
                        for (m[1].unshift(m[1].pop()), m[2].push(m[2].shift()), m[2].push(m[2].shift()), 
                        m[3].push(m[3].shift()), n = 0; n < 4; n++) for (i = 0; i < 4; i++) m[n][i] = a[m[n][i]];
                        for (n = 0; n < 4; n++) for (i = 0; i < 4; i++) m[n][i] ^= g[4 * (h - r) + i][n];
                        for (i = 0; i < 4; i++) {
                            var o = m[0][i], s = m[1][i], u = m[2][i], c = m[3][i];
                            m[0][i] = p[o] ^ f[s] ^ l[u] ^ d[c], m[1][i] = d[o] ^ p[s] ^ f[u] ^ l[c], m[2][i] = l[o] ^ d[s] ^ p[u] ^ f[c], 
                            m[3][i] = f[o] ^ l[s] ^ d[u] ^ p[c];
                        }
                    }
                    for (m[1].unshift(m[1].pop()), m[2].push(m[2].shift()), m[2].push(m[2].shift()), 
                    m[3].push(m[3].shift()), n = 0; n < 4; n++) for (i = 0; i < 4; i++) m[n][i] = a[m[n][i]];
                    for (n = 0; n < 4; n++) for (i = 0; i < 4; i++) m[n][i] ^= g[i][n];
                    for (n = 0; n < b._blocksize; n++) for (i = 0; i < 4; i++) t[e + 4 * i + n] = m[n][i];
                },
                _init: function(t) {
                    y = t.length / 4, h = y + 6, b._keyexpansion(t);
                },
                _keyexpansion: function(t) {
                    g = [];
                    for (var e = 0; e < y; e++) g[e] = [ t[4 * e], t[4 * e + 1], t[4 * e + 2], t[4 * e + 3] ];
                    for (e = y; e < b._blocksize * (h + 1); e++) {
                        var n = [ g[e - 1][0], g[e - 1][1], g[e - 1][2], g[e - 1][3] ];
                        e % y == 0 ? (n.push(n.shift()), n[0] = o[n[0]], n[1] = o[n[1]], n[2] = o[n[2]], 
                        n[3] = o[n[3]], n[0] ^= v[e / y]) : y > 6 && e % y == 4 && (n[0] = o[n[0]], n[1] = o[n[1]], 
                        n[2] = o[n[2]], n[3] = o[n[3]]), g[e] = [ g[e - y][0] ^ n[0], g[e - y][1] ^ n[1], g[e - y][2] ^ n[2], g[e - y][3] ^ n[3] ];
                    }
                }
            };
        }

// ==================== 元数据 ====================
// 此文件包含从 wx00ab3b87c92b68e4 提取的 AES 算法实现
// 检测位置: 行 13868-13868
// 变量名: o
// 检测源: static
