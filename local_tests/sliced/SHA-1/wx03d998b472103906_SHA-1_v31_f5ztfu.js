/**
 * SHA-1 算法实现
 * App ID: wx03d998b472103906
 * 版本: v31
 * 代码哈希: f5ztfu
 * 来源文件: output/wx03d998b472103906/common/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.98
 * 函数名: anonymous
 * 行数: 27
 * 生成时间: 2025-07-05T13:17:10.835Z
 */

i.extend({
                    _doReset: function() {
                        this._hash = new n.init([ 1732584193, 4023233417, 2562383102, 271733878, 3285377520 ]);
                    },
                    _doProcessBlock: function(t, e) {
                        for (var r = this._hash.words, n = r[0], i = r[1], o = r[2], s = r[3], c = r[4], f = 0; f < 80; f++) {
                            if (f < 16) a[f] = 0 | t[e + f]; else {
                                var u = a[f - 3] ^ a[f - 8] ^ a[f - 14] ^ a[f - 16];
                                a[f] = u << 1 | u >>> 31;
                            }
                            var h = (n << 5 | n >>> 27) + c + a[f];
                            h += f < 20 ? 1518500249 + (i & o | ~i & s) : f < 40 ? 1859775393 + (i ^ o ^ s) : f < 60 ? (i & o | i & s | o & s) - 1894007588 : (i ^ o ^ s) - 899497514, 
                            c = s, s = o, o = i << 30 | i >>> 2, i = n, n = h;
                        }
                        r[0] = r[0] + n | 0, r[1] = r[1] + i | 0, r[2] = r[2] + o | 0, r[3] = r[3] + s | 0, 
                        r[4] = r[4] + c | 0;
                    },
                    _doFinalize: function() {
                        var t = this._data, e = t.words, r = 8 * this._nDataBytes, n = 8 * t.sigBytes;
                        return e[n >>> 5] |= 128 << 24 - n % 32, e[14 + (n + 64 >>> 9 << 4)] = Math.floor(r / 4294967296), 
                        e[15 + (n + 64 >>> 9 << 4)] = r, t.sigBytes = 4 * e.length, this._process(), this._hash;
                    },
                    clone: function() {
                        var t = i.clone.call(this);
                        return t._hash = this._hash.clone(), t;
                    }
                })

// ==================== 元数据 ====================
// 此文件包含从 wx03d998b472103906 提取的 SHA-1 算法实现
// 检测位置: 行 4642-4642
// 变量名: ___
// 检测源: static
