/**
 * SHA-1 算法实现
 * App ID: wx01c948dc098d7bc3
 * 版本: v14
 * 代码哈希: zgzjjc
 * 来源文件: output/wx01c948dc098d7bc3/common/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.98
 * 函数名: anonymous
 * 行数: 27
 * 生成时间: 2025-07-05T13:17:10.830Z
 */

o.extend({
                    _doReset: function() {
                        this._hash = new n.init([ 1732584193, 4023233417, 2562383102, 271733878, 3285377520 ]);
                    },
                    _doProcessBlock: function(e, t) {
                        for (var r = this._hash.words, n = r[0], o = r[1], a = r[2], u = r[3], c = r[4], s = 0; s < 80; s++) {
                            if (s < 16) i[s] = 0 | e[t + s]; else {
                                var l = i[s - 3] ^ i[s - 8] ^ i[s - 14] ^ i[s - 16];
                                i[s] = l << 1 | l >>> 31;
                            }
                            var f = (n << 5 | n >>> 27) + c + i[s];
                            f += s < 20 ? 1518500249 + (o & a | ~o & u) : s < 40 ? 1859775393 + (o ^ a ^ u) : s < 60 ? (o & a | o & u | a & u) - 1894007588 : (o ^ a ^ u) - 899497514, 
                            c = u, u = a, a = o << 30 | o >>> 2, o = n, n = f;
                        }
                        r[0] = r[0] + n | 0, r[1] = r[1] + o | 0, r[2] = r[2] + a | 0, r[3] = r[3] + u | 0, 
                        r[4] = r[4] + c | 0;
                    },
                    _doFinalize: function() {
                        var e = this._data, t = e.words, r = 8 * this._nDataBytes, n = 8 * e.sigBytes;
                        return t[n >>> 5] |= 128 << 24 - n % 32, t[14 + (n + 64 >>> 9 << 4)] = Math.floor(r / 4294967296), 
                        t[15 + (n + 64 >>> 9 << 4)] = r, e.sigBytes = 4 * t.length, this._process(), this._hash;
                    },
                    clone: function() {
                        var e = o.clone.call(this);
                        return e._hash = this._hash.clone(), e;
                    }
                })

// ==================== 元数据 ====================
// 此文件包含从 wx01c948dc098d7bc3 提取的 SHA-1 算法实现
// 检测位置: 行 12332-12332
// 变量名: ___
// 检测源: static
