/**
 * AES 算法实现
 * App ID: wx059b3e571951341c
 * 版本: v40
 * 代码哈希: -qa3q9p
 * 来源文件: output/wx059b3e571951341c/common/vendor.js
 * 检测类型: S-box
 * 置信度: 0.95
 * 函数名: anonymous
 * 行数: 82
 * 生成时间: 2025-07-05T13:17:10.629Z
 */

function() {
            for (var t = "undefined" == typeof window ? n("IRxI").Crypto : window.Crypto, e = t.util, i = t.charenc.UTF8, r = [ 99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22 ], o = [], s = 0; s < 256; s++) o[r[s]] = s;
            var a = [], c = [], u = [], d = [], p = [], l = [];
            function f(t, e) {
                for (var n = 0, i = 0; i < 8; i++) {
                    1 & e && (n ^= t);
                    var r = 128 & t;
                    t = t << 1 & 255, r && (t ^= 27), e >>>= 1;
                }
                return n;
            }
            for (s = 0; s < 256; s++) a[s] = f(s, 2), c[s] = f(s, 3), u[s] = f(s, 9), d[s] = f(s, 11), 
            p[s] = f(s, 13), l[s] = f(s, 14);
            var h, g, m, v = [ 0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54 ], y = [ [], [], [], [] ], b = t.AES = {
                encrypt: function(n, r, o) {
                    var s = (o = o || {}).mode || new t.mode.OFB();
                    s.fixOptions && s.fixOptions(o);
                    var a = n.constructor == String ? i.stringToBytes(n) : n, c = o.iv || e.randomBytes(4 * b._blocksize), u = r.constructor == String ? t.PBKDF2(r, c, 32, {
                        asBytes: !0
                    }) : r;
                    return b._init(u), s.encrypt(b, a, c), a = o.iv ? a : c.concat(a), o && o.asBytes ? a : e.bytesToBase64(a);
                },
                decrypt: function(n, r, o) {
                    var s = (o = o || {}).mode || new t.mode.OFB();
                    s.fixOptions && s.fixOptions(o);
                    var a = n.constructor == String ? e.base64ToBytes(n) : n, c = o.iv || a.splice(0, 4 * b._blocksize), u = r.constructor == String ? t.PBKDF2(r, c, 32, {
                        asBytes: !0
                    }) : r;
                    return b._init(u), s.decrypt(b, a, c), o && o.asBytes ? a : i.bytesToString(a);
                },
                _blocksize: 4,
                _encryptblock: function(t, e) {
                    for (var n = 0; n < b._blocksize; n++) for (var i = 0; i < 4; i++) y[n][i] = t[e + 4 * i + n];
                    for (n = 0; n < 4; n++) for (i = 0; i < 4; i++) y[n][i] ^= m[i][n];
                    for (var o = 1; o < g; o++) {
                        for (n = 0; n < 4; n++) for (i = 0; i < 4; i++) y[n][i] = r[y[n][i]];
                        for (y[1].push(y[1].shift()), y[2].push(y[2].shift()), y[2].push(y[2].shift()), 
                        y[3].unshift(y[3].pop()), i = 0; i < 4; i++) {
                            var s = y[0][i], u = y[1][i], d = y[2][i], p = y[3][i];
                            y[0][i] = a[s] ^ c[u] ^ d ^ p, y[1][i] = s ^ a[u] ^ c[d] ^ p, y[2][i] = s ^ u ^ a[d] ^ c[p], 
                            y[3][i] = c[s] ^ u ^ d ^ a[p];
                        }
                        for (n = 0; n < 4; n++) for (i = 0; i < 4; i++) y[n][i] ^= m[4 * o + i][n];
                    }
                    for (n = 0; n < 4; n++) for (i = 0; i < 4; i++) y[n][i] = r[y[n][i]];
                    for (y[1].push(y[1].shift()), y[2].push(y[2].shift()), y[2].push(y[2].shift()), 
                    y[3].unshift(y[3].pop()), n = 0; n < 4; n++) for (i = 0; i < 4; i++) y[n][i] ^= m[4 * g + i][n];
                    for (n = 0; n < b._blocksize; n++) for (i = 0; i < 4; i++) t[e + 4 * i + n] = y[n][i];
                },
                _decryptblock: function(t, e) {
                    for (var n = 0; n < b._blocksize; n++) for (var i = 0; i < 4; i++) y[n][i] = t[e + 4 * i + n];
                    for (n = 0; n < 4; n++) for (i = 0; i < 4; i++) y[n][i] ^= m[4 * g + i][n];
                    for (var r = 1; r < g; r++) {
                        for (y[1].unshift(y[1].pop()), y[2].push(y[2].shift()), y[2].push(y[2].shift()), 
                        y[3].push(y[3].shift()), n = 0; n < 4; n++) for (i = 0; i < 4; i++) y[n][i] = o[y[n][i]];
                        for (n = 0; n < 4; n++) for (i = 0; i < 4; i++) y[n][i] ^= m[4 * (g - r) + i][n];
                        for (i = 0; i < 4; i++) {
                            var s = y[0][i], a = y[1][i], c = y[2][i], f = y[3][i];
                            y[0][i] = l[s] ^ d[a] ^ p[c] ^ u[f], y[1][i] = u[s] ^ l[a] ^ d[c] ^ p[f], y[2][i] = p[s] ^ u[a] ^ l[c] ^ d[f], 
                            y[3][i] = d[s] ^ p[a] ^ u[c] ^ l[f];
                        }
                    }
                    for (y[1].unshift(y[1].pop()), y[2].push(y[2].shift()), y[2].push(y[2].shift()), 
                    y[3].push(y[3].shift()), n = 0; n < 4; n++) for (i = 0; i < 4; i++) y[n][i] = o[y[n][i]];
                    for (n = 0; n < 4; n++) for (i = 0; i < 4; i++) y[n][i] ^= m[i][n];
                    for (n = 0; n < b._blocksize; n++) for (i = 0; i < 4; i++) t[e + 4 * i + n] = y[n][i];
                },
                _init: function(t) {
                    h = t.length / 4, g = h + 6, b._keyexpansion(t);
                },
                _keyexpansion: function(t) {
                    m = [];
                    for (var e = 0; e < h; e++) m[e] = [ t[4 * e], t[4 * e + 1], t[4 * e + 2], t[4 * e + 3] ];
                    for (e = h; e < b._blocksize * (g + 1); e++) {
                        var n = [ m[e - 1][0], m[e - 1][1], m[e - 1][2], m[e - 1][3] ];
                        e % h == 0 ? (n.push(n.shift()), n[0] = r[n[0]], n[1] = r[n[1]], n[2] = r[n[2]], 
                        n[3] = r[n[3]], n[0] ^= v[e / h]) : h > 6 && e % h == 4 && (n[0] = r[n[0]], n[1] = r[n[1]], 
                        n[2] = r[n[2]], n[3] = r[n[3]]), m[e] = [ m[e - h][0] ^ n[0], m[e - h][1] ^ n[1], m[e - h][2] ^ n[2], m[e - h][3] ^ n[3] ];
                    }
                }
            };
        }

// ==================== 元数据 ====================
// 此文件包含从 wx059b3e571951341c 提取的 AES 算法实现
// 检测位置: 行 4923-4923
// 变量名: r
// 检测源: static
