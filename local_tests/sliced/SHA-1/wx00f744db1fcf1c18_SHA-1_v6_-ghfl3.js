/**
 * SHA-1 算法实现
 * App ID: wx00f744db1fcf1c18
 * 版本: v6
 * 代码哈希: -ghfl3e
 * 来源文件: output/wx00f744db1fcf1c18/common/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.98
 * 函数名: anonymous
 * 行数: 114
 * 生成时间: 2025-07-05T13:17:10.827Z
 */

Hasher.extend({
                    _doReset: function _doReset() {
                        this._hash = WordArray.create([ 1732584193, 4023233417, 2562383102, 271733878, 3285377520 ]);
                    },
                    _doProcessBlock: function _doProcessBlock(M, offset) {
                        // Swap endian
                        for (var i = 0; i < 16; i++) {
                            // Shortcuts
                            var offset_i = offset + i;
                            var M_offset_i = M[offset_i];
                            // Swap
                                                        M[offset_i] = (M_offset_i << 8 | M_offset_i >>> 24) & 16711935 | (M_offset_i << 24 | M_offset_i >>> 8) & 4278255360;
                        }
                        // Shortcut
                                                var H = this._hash.words;
                        var hl = _hl.words;
                        var hr = _hr.words;
                        var zl = _zl.words;
                        var zr = _zr.words;
                        var sl = _sl.words;
                        var sr = _sr.words;
                        // Working variables
                                                var al, bl, cl, dl, el;
                        var ar, br, cr, dr, er;
                        ar = al = H[0];
                        br = bl = H[1];
                        cr = cl = H[2];
                        dr = dl = H[3];
                        er = el = H[4];
                        // Computation
                                                var t;
                        for (var i = 0; i < 80; i += 1) {
                            t = al + M[offset + zl[i]] | 0;
                            if (i < 16) {
                                t += f1(bl, cl, dl) + hl[0];
                            } else if (i < 32) {
                                t += f2(bl, cl, dl) + hl[1];
                            } else if (i < 48) {
                                t += f3(bl, cl, dl) + hl[2];
                            } else if (i < 64) {
                                t += f4(bl, cl, dl) + hl[3];
                            } else {
                                // if (i<80) {
                                t += f5(bl, cl, dl) + hl[4];
                            }
                            t = t | 0;
                            t = rotl(t, sl[i]);
                            t = t + el | 0;
                            al = el;
                            el = dl;
                            dl = rotl(cl, 10);
                            cl = bl;
                            bl = t;
                            t = ar + M[offset + zr[i]] | 0;
                            if (i < 16) {
                                t += f5(br, cr, dr) + hr[0];
                            } else if (i < 32) {
                                t += f4(br, cr, dr) + hr[1];
                            } else if (i < 48) {
                                t += f3(br, cr, dr) + hr[2];
                            } else if (i < 64) {
                                t += f2(br, cr, dr) + hr[3];
                            } else {
                                // if (i<80) {
                                t += f1(br, cr, dr) + hr[4];
                            }
                            t = t | 0;
                            t = rotl(t, sr[i]);
                            t = t + er | 0;
                            ar = er;
                            er = dr;
                            dr = rotl(cr, 10);
                            cr = br;
                            br = t;
                        }
                        // Intermediate hash value
                                                t = H[1] + cl + dr | 0;
                        H[1] = H[2] + dl + er | 0;
                        H[2] = H[3] + el + ar | 0;
                        H[3] = H[4] + al + br | 0;
                        H[4] = H[0] + bl + cr | 0;
                        H[0] = t;
                    },
                    _doFinalize: function _doFinalize() {
                        // Shortcuts
                        var data = this._data;
                        var dataWords = data.words;
                        var nBitsTotal = this._nDataBytes * 8;
                        var nBitsLeft = data.sigBytes * 8;
                        // Add padding
                                                dataWords[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
                        dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = (nBitsTotal << 8 | nBitsTotal >>> 24) & 16711935 | (nBitsTotal << 24 | nBitsTotal >>> 8) & 4278255360;
                        data.sigBytes = (dataWords.length + 1) * 4;
                        // Hash final blocks
                                                this._process();
                        // Shortcuts
                                                var hash = this._hash;
                        var H = hash.words;
                        // Swap endian
                                                for (var i = 0; i < 5; i++) {
                            // Shortcut
                            var H_i = H[i];
                            // Swap
                                                        H[i] = (H_i << 8 | H_i >>> 24) & 16711935 | (H_i << 24 | H_i >>> 8) & 4278255360;
                        }
                        // Return final computed hash
                                                return hash;
                    },
                    clone: function clone() {
                        var clone = Hasher.clone.call(this);
                        clone._hash = this._hash.clone();
                        return clone;
                    }
                })

// ==================== 元数据 ====================
// 此文件包含从 wx00f744db1fcf1c18 提取的 SHA-1 算法实现
// 检测位置: 行 9410-9410
// 变量名: ___
// 检测源: static
