/**
 * SHA-1 算法实现
 * App ID: wx03bc60e1b437e39c
 * 版本: v28
 * 代码哈希: fhqho7
 * 来源文件: output/wx03bc60e1b437e39c/common/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.98
 * 函数名: anonymous
 * 行数: 27
 * 生成时间: 2025-07-05T13:17:10.834Z
 */

i.extend({
                        _doReset: function() {
                            this._hash = new r.init([ 1732584193, 4023233417, 2562383102, 271733878, 3285377520 ]);
                        },
                        _doProcessBlock: function(e, t) {
                            for (var n = this._hash.words, r = n[0], i = n[1], a = n[2], o = n[3], d = n[4], u = 0; u < 80; u++) {
                                if (u < 16) s[u] = 0 | e[t + u]; else {
                                    var c = s[u - 3] ^ s[u - 8] ^ s[u - 14] ^ s[u - 16];
                                    s[u] = c << 1 | c >>> 31;
                                }
                                var f = (r << 5 | r >>> 27) + d + s[u];
                                f += u < 20 ? 1518500249 + (i & a | ~i & o) : u < 40 ? 1859775393 + (i ^ a ^ o) : u < 60 ? (i & a | i & o | a & o) - 1894007588 : (i ^ a ^ o) - 899497514, 
                                d = o, o = a, a = i << 30 | i >>> 2, i = r, r = f;
                            }
                            n[0] = n[0] + r | 0, n[1] = n[1] + i | 0, n[2] = n[2] + a | 0, n[3] = n[3] + o | 0, 
                            n[4] = n[4] + d | 0;
                        },
                        _doFinalize: function() {
                            var e = this._data, t = e.words, n = 8 * this._nDataBytes, r = 8 * e.sigBytes;
                            return t[r >>> 5] |= 128 << 24 - r % 32, t[14 + (r + 64 >>> 9 << 4)] = Math.floor(n / 4294967296), 
                            t[15 + (r + 64 >>> 9 << 4)] = n, e.sigBytes = 4 * t.length, this._process(), this._hash;
                        },
                        clone: function() {
                            var e = i.clone.call(this);
                            return e._hash = this._hash.clone(), e;
                        }
                    })

// ==================== 元数据 ====================
// 此文件包含从 wx03bc60e1b437e39c 提取的 SHA-1 算法实现
// 检测位置: 行 25890-25890
// 变量名: ___
// 检测源: static
