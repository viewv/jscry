/**
 * SHA-1 算法实现
 * App ID: wx02b98b8ae5513413
 * 版本: v21
 * 代码哈希: ivvn64
 * 来源文件: output/wx02b98b8ae5513413/common/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.98
 * 函数名: anonymous
 * 行数: 27
 * 生成时间: 2025-07-05T13:17:10.832Z
 */

n.extend({
                    _doReset: function() {
                        this._hash = new r.init([ 1732584193, 4023233417, 2562383102, 271733878, 3285377520 ]);
                    },
                    _doProcessBlock: function(e, t) {
                        for (var a = this._hash.words, r = a[0], n = a[1], i = a[2], s = a[3], o = a[4], u = 0; u < 80; u++) {
                            if (u < 16) l[u] = 0 | e[t + u]; else {
                                var d = l[u - 3] ^ l[u - 8] ^ l[u - 14] ^ l[u - 16];
                                l[u] = d << 1 | d >>> 31;
                            }
                            var c = (r << 5 | r >>> 27) + o + l[u];
                            c += u < 20 ? 1518500249 + (n & i | ~n & s) : u < 40 ? 1859775393 + (n ^ i ^ s) : u < 60 ? (n & i | n & s | i & s) - 1894007588 : (n ^ i ^ s) - 899497514, 
                            o = s, s = i, i = n << 30 | n >>> 2, n = r, r = c;
                        }
                        a[0] = a[0] + r | 0, a[1] = a[1] + n | 0, a[2] = a[2] + i | 0, a[3] = a[3] + s | 0, 
                        a[4] = a[4] + o | 0;
                    },
                    _doFinalize: function() {
                        var e = this._data, t = e.words, a = 8 * this._nDataBytes, r = 8 * e.sigBytes;
                        return t[r >>> 5] |= 128 << 24 - r % 32, t[14 + (r + 64 >>> 9 << 4)] = Math.floor(a / 4294967296), 
                        t[15 + (r + 64 >>> 9 << 4)] = a, e.sigBytes = 4 * t.length, this._process(), this._hash;
                    },
                    clone: function() {
                        var e = n.clone.call(this);
                        return e._hash = this._hash.clone(), e;
                    }
                })

// ==================== 元数据 ====================
// 此文件包含从 wx02b98b8ae5513413 提取的 SHA-1 算法实现
// 检测位置: 行 40097-40097
// 变量名: ___
// 检测源: static
