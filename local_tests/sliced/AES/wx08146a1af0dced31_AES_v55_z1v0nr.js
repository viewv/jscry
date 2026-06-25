/**
 * AES 算法实现
 * App ID: wx08146a1af0dced31
 * 版本: v55
 * 代码哈希: z1v0nr
 * 来源文件: output/wx08146a1af0dced31/common/vendor.js
 * 检测类型: S-box
 * 置信度: 0.95
 * 函数名: anonymous
 * 行数: 81
 * 生成时间: 2025-07-05T13:17:10.667Z
 */

function() {
        function t(t, e) {
            for (var n = 0, r = 0; r < 8; r++) {
                1 & e && (n ^= t);
                var o = 128 & t;
                t = t << 1 & 255, o && (t ^= 27), e >>>= 1;
            }
            return n;
        }
        for (var e = "undefined" == typeof window ? n(100).Crypto : window.Crypto, r = e.util, o = e.charenc.UTF8, i = [ 99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22 ], a = [], s = 0; s < 256; s++) a[i[s]] = s;
        for (var u = [], c = [], f = [], l = [], p = [], h = [], s = 0; s < 256; s++) u[s] = t(s, 2), 
        c[s] = t(s, 3), f[s] = t(s, 9), l[s] = t(s, 11), p[s] = t(s, 13), h[s] = t(s, 14);
        var d, v, y, g = [ 0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54 ], m = [ [], [], [], [] ], _ = e.AES = {
            encrypt: function(t, n, i) {
                var a = (i = i || {}).mode || new e.mode.OFB();
                a.fixOptions && a.fixOptions(i);
                var s = t.constructor == String ? o.stringToBytes(t) : t, u = i.iv || r.randomBytes(4 * _._blocksize), c = n.constructor == String ? e.PBKDF2(n, u, 32, {
                    asBytes: !0
                }) : n;
                return _._init(c), a.encrypt(_, s, u), s = i.iv ? s : u.concat(s), i && i.asBytes ? s : r.bytesToBase64(s);
            },
            decrypt: function(t, n, i) {
                var a = (i = i || {}).mode || new e.mode.OFB();
                a.fixOptions && a.fixOptions(i);
                var s = t.constructor == String ? r.base64ToBytes(t) : t, u = i.iv || s.splice(0, 4 * _._blocksize), c = n.constructor == String ? e.PBKDF2(n, u, 32, {
                    asBytes: !0
                }) : n;
                return _._init(c), a.decrypt(_, s, u), i && i.asBytes ? s : o.bytesToString(s);
            },
            _blocksize: 4,
            _encryptblock: function(t, e) {
                for (f = 0; f < _._blocksize; f++) for (l = 0; l < 4; l++) m[f][l] = t[e + 4 * l + f];
                for (f = 0; f < 4; f++) for (l = 0; l < 4; l++) m[f][l] ^= y[l][f];
                for (var n = 1; n < v; n++) {
                    for (f = 0; f < 4; f++) for (l = 0; l < 4; l++) m[f][l] = i[m[f][l]];
                    m[1].push(m[1].shift()), m[2].push(m[2].shift()), m[2].push(m[2].shift()), m[3].unshift(m[3].pop());
                    for (l = 0; l < 4; l++) {
                        var r = m[0][l], o = m[1][l], a = m[2][l], s = m[3][l];
                        m[0][l] = u[r] ^ c[o] ^ a ^ s, m[1][l] = r ^ u[o] ^ c[a] ^ s, m[2][l] = r ^ o ^ u[a] ^ c[s], 
                        m[3][l] = c[r] ^ o ^ a ^ u[s];
                    }
                    for (f = 0; f < 4; f++) for (l = 0; l < 4; l++) m[f][l] ^= y[4 * n + l][f];
                }
                for (f = 0; f < 4; f++) for (l = 0; l < 4; l++) m[f][l] = i[m[f][l]];
                m[1].push(m[1].shift()), m[2].push(m[2].shift()), m[2].push(m[2].shift()), m[3].unshift(m[3].pop());
                for (f = 0; f < 4; f++) for (l = 0; l < 4; l++) m[f][l] ^= y[4 * v + l][f];
                for (var f = 0; f < _._blocksize; f++) for (var l = 0; l < 4; l++) t[e + 4 * l + f] = m[f][l];
            },
            _decryptblock: function(t, e) {
                for (u = 0; u < _._blocksize; u++) for (c = 0; c < 4; c++) m[u][c] = t[e + 4 * c + u];
                for (u = 0; u < 4; u++) for (c = 0; c < 4; c++) m[u][c] ^= y[4 * v + c][u];
                for (var n = 1; n < v; n++) {
                    m[1].unshift(m[1].pop()), m[2].push(m[2].shift()), m[2].push(m[2].shift()), m[3].push(m[3].shift());
                    for (u = 0; u < 4; u++) for (c = 0; c < 4; c++) m[u][c] = a[m[u][c]];
                    for (u = 0; u < 4; u++) for (c = 0; c < 4; c++) m[u][c] ^= y[4 * (v - n) + c][u];
                    for (c = 0; c < 4; c++) {
                        var r = m[0][c], o = m[1][c], i = m[2][c], s = m[3][c];
                        m[0][c] = h[r] ^ l[o] ^ p[i] ^ f[s], m[1][c] = f[r] ^ h[o] ^ l[i] ^ p[s], m[2][c] = p[r] ^ f[o] ^ h[i] ^ l[s], 
                        m[3][c] = l[r] ^ p[o] ^ f[i] ^ h[s];
                    }
                }
                m[1].unshift(m[1].pop()), m[2].push(m[2].shift()), m[2].push(m[2].shift()), m[3].push(m[3].shift());
                for (u = 0; u < 4; u++) for (c = 0; c < 4; c++) m[u][c] = a[m[u][c]];
                for (u = 0; u < 4; u++) for (c = 0; c < 4; c++) m[u][c] ^= y[c][u];
                for (var u = 0; u < _._blocksize; u++) for (var c = 0; c < 4; c++) t[e + 4 * c + u] = m[u][c];
            },
            _init: function(t) {
                d = t.length / 4, v = d + 6, _._keyexpansion(t);
            },
            _keyexpansion: function(t) {
                y = [];
                for (e = 0; e < d; e++) y[e] = [ t[4 * e], t[4 * e + 1], t[4 * e + 2], t[4 * e + 3] ];
                for (var e = d; e < _._blocksize * (v + 1); e++) {
                    var n = [ y[e - 1][0], y[e - 1][1], y[e - 1][2], y[e - 1][3] ];
                    e % d == 0 ? (n.push(n.shift()), n[0] = i[n[0]], n[1] = i[n[1]], n[2] = i[n[2]], 
                    n[3] = i[n[3]], n[0] ^= g[e / d]) : d > 6 && e % d == 4 && (n[0] = i[n[0]], n[1] = i[n[1]], 
                    n[2] = i[n[2]], n[3] = i[n[3]]), y[e] = [ y[e - d][0] ^ n[0], y[e - d][1] ^ n[1], y[e - d][2] ^ n[2], y[e - d][3] ^ n[3] ];
                }
            }
        };
    }

// ==================== 元数据 ====================
// 此文件包含从 wx08146a1af0dced31 提取的 AES 算法实现
// 检测位置: 行 4658-4658
// 变量名: i
// 检测源: static
