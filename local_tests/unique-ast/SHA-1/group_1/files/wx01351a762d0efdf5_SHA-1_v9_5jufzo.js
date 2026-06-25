/**
 * SHA-1 算法实现
 * App ID: wx01351a762d0efdf5
 * 版本: v9
 * 代码哈希: 5jufzo
 * 来源文件: output/wx01351a762d0efdf5/common/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.98
 * 函数名: anonymous
 * 行数: 27
 * 生成时间: 2025-07-05T13:17:10.828Z
 */

i.extend({
                    _doReset: function() {
                        this._hash = new n.init([ 1732584193, 4023233417, 2562383102, 271733878, 3285377520 ]);
                    },
                    _doProcessBlock: function(e, t) {
                        for (var r = this._hash.words, n = r[0], i = r[1], o = r[2], s = r[3], c = r[4], u = 0; u < 80; u++) {
                            if (u < 16) a[u] = 0 | e[t + u]; else {
                                var f = a[u - 3] ^ a[u - 8] ^ a[u - 14] ^ a[u - 16];
                                a[u] = f << 1 | f >>> 31;
                            }
                            var d = (n << 5 | n >>> 27) + c + a[u];
                            d += u < 20 ? 1518500249 + (i & o | ~i & s) : u < 40 ? 1859775393 + (i ^ o ^ s) : u < 60 ? (i & o | i & s | o & s) - 1894007588 : (i ^ o ^ s) - 899497514, 
                            c = s, s = o, o = i << 30 | i >>> 2, i = n, n = d;
                        }
                        r[0] = r[0] + n | 0, r[1] = r[1] + i | 0, r[2] = r[2] + o | 0, r[3] = r[3] + s | 0, 
                        r[4] = r[4] + c | 0;
                    },
                    _doFinalize: function() {
                        var e = this._data, t = e.words, r = 8 * this._nDataBytes, n = 8 * e.sigBytes;
                        return t[n >>> 5] |= 128 << 24 - n % 32, t[14 + (n + 64 >>> 9 << 4)] = Math.floor(r / 4294967296), 
                        t[15 + (n + 64 >>> 9 << 4)] = r, e.sigBytes = 4 * t.length, this._process(), this._hash;
                    },
                    clone: function() {
                        var e = i.clone.call(this);
                        return e._hash = this._hash.clone(), e;
                    }
                })

// ==================== 元数据 ====================
// 此文件包含从 wx01351a762d0efdf5 提取的 SHA-1 算法实现
// 检测位置: 行 20981-20981
// 变量名: ___
// 检测源: static
