/**
 * SHA-1 算法实现
 * App ID: wx0a9e003b012f33db
 * 版本: v70
 * 代码哈希: jsvm2
 * 来源文件: output/wx0a9e003b012f33db/static/js/crypto-js.js
 * 检测类型: Initial hash values
 * 置信度: 0.98
 * 函数名: anonymous
 * 行数: 27
 * 生成时间: 2025-07-05T13:17:10.848Z
 */

r.extend({
                    _doReset: function() {
                        this._hash = new n.init([ 1732584193, 4023233417, 2562383102, 271733878, 3285377520 ]);
                    },
                    _doProcessBlock: function(t, e) {
                        for (var o = this._hash.words, n = o[0], r = o[1], s = o[2], c = o[3], a = o[4], u = 0; u < 80; u++) {
                            if (u < 16) i[u] = 0 | t[e + u]; else {
                                var f = i[u - 3] ^ i[u - 8] ^ i[u - 14] ^ i[u - 16];
                                i[u] = f << 1 | f >>> 31;
                            }
                            var d = (n << 5 | n >>> 27) + a + i[u];
                            d += u < 20 ? 1518500249 + (r & s | ~r & c) : u < 40 ? 1859775393 + (r ^ s ^ c) : u < 60 ? (r & s | r & c | s & c) - 1894007588 : (r ^ s ^ c) - 899497514, 
                            a = c, c = s, s = r << 30 | r >>> 2, r = n, n = d;
                        }
                        o[0] = o[0] + n | 0, o[1] = o[1] + r | 0, o[2] = o[2] + s | 0, o[3] = o[3] + c | 0, 
                        o[4] = o[4] + a | 0;
                    },
                    _doFinalize: function() {
                        var t = this._data, e = t.words, o = 8 * this._nDataBytes, n = 8 * t.sigBytes;
                        return e[n >>> 5] |= 128 << 24 - n % 32, e[14 + (n + 64 >>> 9 << 4)] = Math.floor(o / 4294967296), 
                        e[15 + (n + 64 >>> 9 << 4)] = o, t.sigBytes = 4 * e.length, this._process(), this._hash;
                    },
                    clone: function() {
                        var t = r.clone.call(this);
                        return t._hash = this._hash.clone(), t;
                    }
                })

// ==================== 元数据 ====================
// 此文件包含从 wx0a9e003b012f33db 提取的 SHA-1 算法实现
// 检测位置: 行 633-633
// 变量名: ___
// 检测源: static
