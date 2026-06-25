/**
 * SHA-1 算法实现
 * App ID: wx084dc96bc462831d
 * 版本: v63
 * 代码哈希: -v4ux9a
 * 来源文件: output/wx084dc96bc462831d/common/main.js
 * 检测类型: Initial hash values
 * 置信度: 0.98
 * 函数名: anonymous
 * 行数: 27
 * 生成时间: 2025-07-05T13:17:10.845Z
 */

r.extend({
                    _doReset: function() {
                        this._hash = new n.init([ 1732584193, 4023233417, 2562383102, 271733878, 3285377520 ]);
                    },
                    _doProcessBlock: function(e, t) {
                        for (var o = this._hash.words, n = o[0], r = o[1], s = o[2], a = o[3], c = o[4], u = 0; u < 80; u++) {
                            if (u < 16) i[u] = 0 | e[t + u]; else {
                                var l = i[u - 3] ^ i[u - 8] ^ i[u - 14] ^ i[u - 16];
                                i[u] = l << 1 | l >>> 31;
                            }
                            var p = (n << 5 | n >>> 27) + c + i[u];
                            p += u < 20 ? 1518500249 + (r & s | ~r & a) : u < 40 ? 1859775393 + (r ^ s ^ a) : u < 60 ? (r & s | r & a | s & a) - 1894007588 : (r ^ s ^ a) - 899497514, 
                            c = a, a = s, s = r << 30 | r >>> 2, r = n, n = p;
                        }
                        o[0] = o[0] + n | 0, o[1] = o[1] + r | 0, o[2] = o[2] + s | 0, o[3] = o[3] + a | 0, 
                        o[4] = o[4] + c | 0;
                    },
                    _doFinalize: function() {
                        var e = this._data, t = e.words, o = 8 * this._nDataBytes, n = 8 * e.sigBytes;
                        return t[n >>> 5] |= 128 << 24 - n % 32, t[14 + (n + 64 >>> 9 << 4)] = Math.floor(o / 4294967296), 
                        t[15 + (n + 64 >>> 9 << 4)] = o, e.sigBytes = 4 * t.length, this._process(), this._hash;
                    },
                    clone: function() {
                        var e = r.clone.call(this);
                        return e._hash = this._hash.clone(), e;
                    }
                })

// ==================== 元数据 ====================
// 此文件包含从 wx084dc96bc462831d 提取的 SHA-1 算法实现
// 检测位置: 行 1655-1655
// 变量名: ___
// 检测源: static
