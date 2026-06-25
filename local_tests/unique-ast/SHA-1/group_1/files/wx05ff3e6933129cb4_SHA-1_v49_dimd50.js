/**
 * SHA-1 算法实现
 * App ID: wx05ff3e6933129cb4
 * 版本: v49
 * 代码哈希: dimd50
 * 来源文件: output/wx05ff3e6933129cb4/common/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.98
 * 函数名: anonymous
 * 行数: 27
 * 生成时间: 2025-07-05T13:17:10.841Z
 */

i.extend({
                    _doReset: function() {
                        this._hash = new r.init([ 1732584193, 4023233417, 2562383102, 271733878, 3285377520 ]);
                    },
                    _doProcessBlock: function(t, e) {
                        for (var n = this._hash.words, r = n[0], i = n[1], a = n[2], s = n[3], c = n[4], u = 0; u < 80; u++) {
                            if (u < 16) o[u] = 0 | t[e + u]; else {
                                var l = o[u - 3] ^ o[u - 8] ^ o[u - 14] ^ o[u - 16];
                                o[u] = l << 1 | l >>> 31;
                            }
                            var f = (r << 5 | r >>> 27) + c + o[u];
                            f += u < 20 ? 1518500249 + (i & a | ~i & s) : u < 40 ? 1859775393 + (i ^ a ^ s) : u < 60 ? (i & a | i & s | a & s) - 1894007588 : (i ^ a ^ s) - 899497514, 
                            c = s, s = a, a = i << 30 | i >>> 2, i = r, r = f;
                        }
                        n[0] = n[0] + r | 0, n[1] = n[1] + i | 0, n[2] = n[2] + a | 0, n[3] = n[3] + s | 0, 
                        n[4] = n[4] + c | 0;
                    },
                    _doFinalize: function() {
                        var t = this._data, e = t.words, n = 8 * this._nDataBytes, r = 8 * t.sigBytes;
                        return e[r >>> 5] |= 128 << 24 - r % 32, e[14 + (r + 64 >>> 9 << 4)] = Math.floor(n / 4294967296), 
                        e[15 + (r + 64 >>> 9 << 4)] = n, t.sigBytes = 4 * e.length, this._process(), this._hash;
                    },
                    clone: function() {
                        var t = i.clone.call(this);
                        return t._hash = this._hash.clone(), t;
                    }
                })

// ==================== 元数据 ====================
// 此文件包含从 wx05ff3e6933129cb4 提取的 SHA-1 算法实现
// 检测位置: 行 3342-3342
// 变量名: ___
// 检测源: static
