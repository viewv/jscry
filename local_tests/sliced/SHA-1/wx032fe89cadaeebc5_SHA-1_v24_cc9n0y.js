/**
 * SHA-1 算法实现
 * App ID: wx032fe89cadaeebc5
 * 版本: v24
 * 代码哈希: cc9n0y
 * 来源文件: output/wx032fe89cadaeebc5/common/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.98
 * 函数名: anonymous
 * 行数: 27
 * 生成时间: 2025-07-05T13:17:10.833Z
 */

i.extend({
                    _doReset: function _doReset() {
                        this._hash = new r.init([ 1732584193, 4023233417, 2562383102, 271733878, 3285377520 ]);
                    },
                    _doProcessBlock: function _doProcessBlock(t, e) {
                        for (var n = this._hash.words, r = n[0], i = n[1], o = n[2], s = n[3], c = n[4], u = 0; u < 80; u++) {
                            if (u < 16) a[u] = 0 | t[e + u]; else {
                                var f = a[u - 3] ^ a[u - 8] ^ a[u - 14] ^ a[u - 16];
                                a[u] = f << 1 | f >>> 31;
                            }
                            var l = (r << 5 | r >>> 27) + c + a[u];
                            l += u < 20 ? 1518500249 + (i & o | ~i & s) : u < 40 ? 1859775393 + (i ^ o ^ s) : u < 60 ? (i & o | i & s | o & s) - 1894007588 : (i ^ o ^ s) - 899497514, 
                            c = s, s = o, o = i << 30 | i >>> 2, i = r, r = l;
                        }
                        n[0] = n[0] + r | 0, n[1] = n[1] + i | 0, n[2] = n[2] + o | 0, n[3] = n[3] + s | 0, 
                        n[4] = n[4] + c | 0;
                    },
                    _doFinalize: function _doFinalize() {
                        var t = this._data, e = t.words, n = 8 * this._nDataBytes, r = 8 * t.sigBytes;
                        return e[r >>> 5] |= 128 << 24 - r % 32, e[14 + (r + 64 >>> 9 << 4)] = Math.floor(n / 4294967296), 
                        e[15 + (r + 64 >>> 9 << 4)] = n, t.sigBytes = 4 * e.length, this._process(), this._hash;
                    },
                    clone: function clone() {
                        var t = i.clone.call(this);
                        return t._hash = this._hash.clone(), t;
                    }
                })

// ==================== 元数据 ====================
// 此文件包含从 wx032fe89cadaeebc5 提取的 SHA-1 算法实现
// 检测位置: 行 311-311
// 变量名: ___
// 检测源: static
