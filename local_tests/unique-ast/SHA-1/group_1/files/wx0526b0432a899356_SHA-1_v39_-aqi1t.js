/**
 * SHA-1 算法实现
 * App ID: wx0526b0432a899356
 * 版本: v39
 * 代码哈希: -aqi1tu
 * 来源文件: output/wx0526b0432a899356/common/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.98
 * 函数名: anonymous
 * 行数: 27
 * 生成时间: 2025-07-05T13:17:10.837Z
 */

wt.extend({
                _doReset: function() {
                    this._hash = new _t.init([ 1732584193, 4023233417, 2562383102, 271733878, 3285377520 ]);
                },
                _doProcessBlock: function(t, e) {
                    for (var r = this._hash.words, n = r[0], i = r[1], o = r[2], a = r[3], s = r[4], c = 0; c < 80; c++) {
                        if (c < 16) St[c] = 0 | t[e + c]; else {
                            var f = St[c - 3] ^ St[c - 8] ^ St[c - 14] ^ St[c - 16];
                            St[c] = f << 1 | f >>> 31;
                        }
                        var u = (n << 5 | n >>> 27) + s + St[c];
                        u += c < 20 ? 1518500249 + (i & o | ~i & a) : c < 40 ? 1859775393 + (i ^ o ^ a) : c < 60 ? (i & o | i & a | o & a) - 1894007588 : (i ^ o ^ a) - 899497514, 
                        s = a, a = o, o = i << 30 | i >>> 2, i = n, n = u;
                    }
                    r[0] = r[0] + n | 0, r[1] = r[1] + i | 0, r[2] = r[2] + o | 0, r[3] = r[3] + a | 0, 
                    r[4] = r[4] + s | 0;
                },
                _doFinalize: function() {
                    var t = this._data, e = t.words, r = 8 * this._nDataBytes, n = 8 * t.sigBytes;
                    return e[n >>> 5] |= 128 << 24 - n % 32, e[14 + (n + 64 >>> 9 << 4)] = Math.floor(r / 4294967296), 
                    e[15 + (n + 64 >>> 9 << 4)] = r, t.sigBytes = 4 * e.length, this._process(), this._hash;
                },
                clone: function() {
                    var t = wt.clone.call(this);
                    return t._hash = this._hash.clone(), t;
                }
            })

// ==================== 元数据 ====================
// 此文件包含从 wx0526b0432a899356 提取的 SHA-1 算法实现
// 检测位置: 行 10542-10542
// 变量名: ___
// 检测源: static
