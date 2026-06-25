/**
 * SHA-1 算法实现
 * App ID: wx0535b07817d80042
 * 版本: v42
 * 代码哈希: -5aekg7
 * 来源文件: output/wx0535b07817d80042/common/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.98
 * 函数名: anonymous
 * 行数: 27
 * 生成时间: 2025-07-05T13:17:10.838Z
 */

It.extend({
            _doReset: function() {
                this._hash = new Mt.init([ 1732584193, 4023233417, 2562383102, 271733878, 3285377520 ]);
            },
            _doProcessBlock: function(t, e) {
                for (var r = this._hash.words, n = r[0], o = r[1], i = r[2], a = r[3], s = r[4], c = 0; c < 80; c++) {
                    if (c < 16) Rt[c] = 0 | t[e + c]; else {
                        var u = Rt[c - 3] ^ Rt[c - 8] ^ Rt[c - 14] ^ Rt[c - 16];
                        Rt[c] = u << 1 | u >>> 31;
                    }
                    var f = (n << 5 | n >>> 27) + s + Rt[c];
                    f += c < 20 ? 1518500249 + (o & i | ~o & a) : c < 40 ? 1859775393 + (o ^ i ^ a) : c < 60 ? (o & i | o & a | i & a) - 1894007588 : (o ^ i ^ a) - 899497514, 
                    s = a, a = i, i = o << 30 | o >>> 2, o = n, n = f;
                }
                r[0] = r[0] + n | 0, r[1] = r[1] + o | 0, r[2] = r[2] + i | 0, r[3] = r[3] + a | 0, 
                r[4] = r[4] + s | 0;
            },
            _doFinalize: function() {
                var t = this._data, e = t.words, r = 8 * this._nDataBytes, n = 8 * t.sigBytes;
                return e[n >>> 5] |= 128 << 24 - n % 32, e[14 + (n + 64 >>> 9 << 4)] = Math.floor(r / 4294967296), 
                e[15 + (n + 64 >>> 9 << 4)] = r, t.sigBytes = 4 * e.length, this._process(), this._hash;
            },
            clone: function() {
                var t = It.clone.call(this);
                return t._hash = this._hash.clone(), t;
            }
        })

// ==================== 元数据 ====================
// 此文件包含从 wx0535b07817d80042 提取的 SHA-1 算法实现
// 检测位置: 行 3296-3296
// 变量名: ___
// 检测源: static
