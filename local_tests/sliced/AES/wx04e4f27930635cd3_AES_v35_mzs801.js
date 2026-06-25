/**
 * AES 算法实现
 * App ID: wx04e4f27930635cd3
 * 版本: v35
 * 代码哈希: mzs801
 * 来源文件: output/wx04e4f27930635cd3/common/vendor.js
 * 检测类型: S-box
 * 置信度: 0.95
 * 函数名: anonymous
 * 行数: 82
 * 生成时间: 2025-07-05T13:17:10.620Z
 */

function() {
            function t(t, e) {
                for (var n = 0, r = 0; r < 8; r++) {
                    1 & e && (n ^= t);
                    var i = 128 & t;
                    t = t << 1 & 255, i && (t ^= 27), e >>>= 1;
                }
                return n;
            }
            for (var e = "undefined" == typeof window ? n("9b9b").Crypto : window.Crypto, r = e.util, i = e.charenc.UTF8, o = [ 99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22 ], a = [], s = 0; s < 256; s++) a[o[s]] = s;
            var c = [], u = [], p = [], f = [], l = [], Y = [];
            for (s = 0; s < 256; s++) c[s] = t(s, 2), u[s] = t(s, 3), p[s] = t(s, 9), f[s] = t(s, 11), 
            l[s] = t(s, 13), Y[s] = t(s, 14);
            var d, h, Z, S = [ 0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54 ], L = [ [], [], [], [] ], g = e.AES = {
                encrypt: function(t, n, o) {
                    var a = (o = o || {}).mode || new e.mode.OFB();
                    a.fixOptions && a.fixOptions(o);
                    var s = t.constructor == String ? i.stringToBytes(t) : t, c = o.iv || r.randomBytes(4 * g._blocksize), u = n.constructor == String ? e.PBKDF2(n, c, 32, {
                        asBytes: !0
                    }) : n;
                    return g._init(u), a.encrypt(g, s, c), s = o.iv ? s : c.concat(s), o && o.asBytes ? s : r.bytesToBase64(s);
                },
                decrypt: function(t, n, o) {
                    var a = (o = o || {}).mode || new e.mode.OFB();
                    a.fixOptions && a.fixOptions(o);
                    var s = t.constructor == String ? r.base64ToBytes(t) : t, c = o.iv || s.splice(0, 4 * g._blocksize), u = n.constructor == String ? e.PBKDF2(n, c, 32, {
                        asBytes: !0
                    }) : n;
                    return g._init(u), a.decrypt(g, s, c), o && o.asBytes ? s : i.bytesToString(s);
                },
                _blocksize: 4,
                _encryptblock: function(t, e) {
                    for (var n = 0; n < g._blocksize; n++) for (var r = 0; r < 4; r++) L[n][r] = t[e + 4 * r + n];
                    for (n = 0; n < 4; n++) for (r = 0; r < 4; r++) L[n][r] ^= Z[r][n];
                    for (var i = 1; i < h; i++) {
                        for (n = 0; n < 4; n++) for (r = 0; r < 4; r++) L[n][r] = o[L[n][r]];
                        for (L[1].push(L[1].shift()), L[2].push(L[2].shift()), L[2].push(L[2].shift()), 
                        L[3].unshift(L[3].pop()), r = 0; r < 4; r++) {
                            var a = L[0][r], s = L[1][r], p = L[2][r], f = L[3][r];
                            L[0][r] = c[a] ^ u[s] ^ p ^ f, L[1][r] = a ^ c[s] ^ u[p] ^ f, L[2][r] = a ^ s ^ c[p] ^ u[f], 
                            L[3][r] = u[a] ^ s ^ p ^ c[f];
                        }
                        for (n = 0; n < 4; n++) for (r = 0; r < 4; r++) L[n][r] ^= Z[4 * i + r][n];
                    }
                    for (n = 0; n < 4; n++) for (r = 0; r < 4; r++) L[n][r] = o[L[n][r]];
                    for (L[1].push(L[1].shift()), L[2].push(L[2].shift()), L[2].push(L[2].shift()), 
                    L[3].unshift(L[3].pop()), n = 0; n < 4; n++) for (r = 0; r < 4; r++) L[n][r] ^= Z[4 * h + r][n];
                    for (n = 0; n < g._blocksize; n++) for (r = 0; r < 4; r++) t[e + 4 * r + n] = L[n][r];
                },
                _decryptblock: function(t, e) {
                    for (var n = 0; n < g._blocksize; n++) for (var r = 0; r < 4; r++) L[n][r] = t[e + 4 * r + n];
                    for (n = 0; n < 4; n++) for (r = 0; r < 4; r++) L[n][r] ^= Z[4 * h + r][n];
                    for (var i = 1; i < h; i++) {
                        for (L[1].unshift(L[1].pop()), L[2].push(L[2].shift()), L[2].push(L[2].shift()), 
                        L[3].push(L[3].shift()), n = 0; n < 4; n++) for (r = 0; r < 4; r++) L[n][r] = a[L[n][r]];
                        for (n = 0; n < 4; n++) for (r = 0; r < 4; r++) L[n][r] ^= Z[4 * (h - i) + r][n];
                        for (r = 0; r < 4; r++) {
                            var o = L[0][r], s = L[1][r], c = L[2][r], u = L[3][r];
                            L[0][r] = Y[o] ^ f[s] ^ l[c] ^ p[u], L[1][r] = p[o] ^ Y[s] ^ f[c] ^ l[u], L[2][r] = l[o] ^ p[s] ^ Y[c] ^ f[u], 
                            L[3][r] = f[o] ^ l[s] ^ p[c] ^ Y[u];
                        }
                    }
                    for (L[1].unshift(L[1].pop()), L[2].push(L[2].shift()), L[2].push(L[2].shift()), 
                    L[3].push(L[3].shift()), n = 0; n < 4; n++) for (r = 0; r < 4; r++) L[n][r] = a[L[n][r]];
                    for (n = 0; n < 4; n++) for (r = 0; r < 4; r++) L[n][r] ^= Z[r][n];
                    for (n = 0; n < g._blocksize; n++) for (r = 0; r < 4; r++) t[e + 4 * r + n] = L[n][r];
                },
                _init: function(t) {
                    d = t.length / 4, h = d + 6, g._keyexpansion(t);
                },
                _keyexpansion: function(t) {
                    Z = [];
                    for (var e = 0; e < d; e++) Z[e] = [ t[4 * e], t[4 * e + 1], t[4 * e + 2], t[4 * e + 3] ];
                    for (e = d; e < g._blocksize * (h + 1); e++) {
                        var n = [ Z[e - 1][0], Z[e - 1][1], Z[e - 1][2], Z[e - 1][3] ];
                        e % d == 0 ? (n.push(n.shift()), n[0] = o[n[0]], n[1] = o[n[1]], n[2] = o[n[2]], 
                        n[3] = o[n[3]], n[0] ^= S[e / d]) : d > 6 && e % d == 4 && (n[0] = o[n[0]], n[1] = o[n[1]], 
                        n[2] = o[n[2]], n[3] = o[n[3]]), Z[e] = [ Z[e - d][0] ^ n[0], Z[e - d][1] ^ n[1], Z[e - d][2] ^ n[2], Z[e - d][3] ^ n[3] ];
                    }
                }
            };
        }

// ==================== 元数据 ====================
// 此文件包含从 wx04e4f27930635cd3 提取的 AES 算法实现
// 检测位置: 行 106-106
// 变量名: o
// 检测源: static
