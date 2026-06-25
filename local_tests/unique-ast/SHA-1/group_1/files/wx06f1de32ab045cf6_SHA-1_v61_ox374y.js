/**
 * SHA-1 算法实现
 * App ID: wx06f1de32ab045cf6
 * 版本: v61
 * 代码哈希: ox374y
 * 来源文件: output/wx06f1de32ab045cf6/common/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.98
 * 函数名: anonymous
 * 行数: 27
 * 生成时间: 2025-07-05T13:17:10.845Z
 */

a.extend({
                    _doReset: function() {
                        this._hash = new r.init([ 1732584193, 4023233417, 2562383102, 271733878, 3285377520 ]);
                    },
                    _doProcessBlock: function(e, t) {
                        for (var n = this._hash.words, r = n[0], a = n[1], i = n[2], o = n[3], u = n[4], d = 0; d < 80; d++) {
                            if (d < 16) s[d] = 0 | e[t + d]; else {
                                var c = s[d - 3] ^ s[d - 8] ^ s[d - 14] ^ s[d - 16];
                                s[d] = c << 1 | c >>> 31;
                            }
                            var l = (r << 5 | r >>> 27) + u + s[d];
                            l += d < 20 ? 1518500249 + (a & i | ~a & o) : d < 40 ? 1859775393 + (a ^ i ^ o) : d < 60 ? (a & i | a & o | i & o) - 1894007588 : (a ^ i ^ o) - 899497514, 
                            u = o, o = i, i = a << 30 | a >>> 2, a = r, r = l;
                        }
                        n[0] = n[0] + r | 0, n[1] = n[1] + a | 0, n[2] = n[2] + i | 0, n[3] = n[3] + o | 0, 
                        n[4] = n[4] + u | 0;
                    },
                    _doFinalize: function() {
                        var e = this._data, t = e.words, n = 8 * this._nDataBytes, r = 8 * e.sigBytes;
                        return t[r >>> 5] |= 128 << 24 - r % 32, t[14 + (r + 64 >>> 9 << 4)] = Math.floor(n / 4294967296), 
                        t[15 + (r + 64 >>> 9 << 4)] = n, e.sigBytes = 4 * t.length, this._process(), this._hash;
                    },
                    clone: function() {
                        var e = a.clone.call(this);
                        return e._hash = this._hash.clone(), e;
                    }
                })

// ==================== 元数据 ====================
// 此文件包含从 wx06f1de32ab045cf6 提取的 SHA-1 算法实现
// 检测位置: 行 24049-24049
// 变量名: ___
// 检测源: static
