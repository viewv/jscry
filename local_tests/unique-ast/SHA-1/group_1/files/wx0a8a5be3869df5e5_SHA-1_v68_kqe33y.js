/**
 * SHA-1 算法实现
 * App ID: wx0a8a5be3869df5e5
 * 版本: v68
 * 代码哈希: kqe33y
 * 来源文件: output/wx0a8a5be3869df5e5/common/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.98
 * 函数名: anonymous
 * 行数: 27
 * 生成时间: 2025-07-05T13:17:10.848Z
 */

n.extend({
                        _doReset: function() {
                            this._hash = new r.init([ 1732584193, 4023233417, 2562383102, 271733878, 3285377520 ]);
                        },
                        _doProcessBlock: function(t, e) {
                            for (var a = this._hash.words, r = a[0], n = a[1], i = a[2], s = a[3], c = a[4], p = 0; p < 80; p++) {
                                if (p < 16) o[p] = 0 | t[e + p]; else {
                                    var u = o[p - 3] ^ o[p - 8] ^ o[p - 14] ^ o[p - 16];
                                    o[p] = u << 1 | u >>> 31;
                                }
                                var f = (r << 5 | r >>> 27) + c + o[p];
                                f += p < 20 ? 1518500249 + (n & i | ~n & s) : p < 40 ? 1859775393 + (n ^ i ^ s) : p < 60 ? (n & i | n & s | i & s) - 1894007588 : (n ^ i ^ s) - 899497514, 
                                c = s, s = i, i = n << 30 | n >>> 2, n = r, r = f;
                            }
                            a[0] = a[0] + r | 0, a[1] = a[1] + n | 0, a[2] = a[2] + i | 0, a[3] = a[3] + s | 0, 
                            a[4] = a[4] + c | 0;
                        },
                        _doFinalize: function() {
                            var t = this._data, e = t.words, a = 8 * this._nDataBytes, r = 8 * t.sigBytes;
                            return e[r >>> 5] |= 128 << 24 - r % 32, e[14 + (r + 64 >>> 9 << 4)] = Math.floor(a / 4294967296), 
                            e[15 + (r + 64 >>> 9 << 4)] = a, t.sigBytes = 4 * e.length, this._process(), this._hash;
                        },
                        clone: function() {
                            var t = n.clone.call(this);
                            return t._hash = this._hash.clone(), t;
                        }
                    })

// ==================== 元数据 ====================
// 此文件包含从 wx0a8a5be3869df5e5 提取的 SHA-1 算法实现
// 检测位置: 行 22592-22592
// 变量名: ___
// 检测源: static
