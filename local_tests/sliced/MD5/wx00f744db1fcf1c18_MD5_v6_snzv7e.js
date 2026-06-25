/**
 * MD5 算法实现
 * App ID: wx00f744db1fcf1c18
 * 版本: v6
 * 代码哈希: snzv7e
 * 来源文件: output/wx00f744db1fcf1c18/common/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.95
 * 函数名: anonymous
 * 行数: 139
 * 生成时间: 2025-07-05T13:17:10.749Z
 */

Hasher.extend({
                    _doReset: function _doReset() {
                        this._hash = new WordArray.init([ 1732584193, 4023233417, 2562383102, 271733878 ]);
                    },
                    _doProcessBlock: function _doProcessBlock(M, offset) {
                        // Swap endian
                        for (var i = 0; i < 16; i++) {
                            // Shortcuts
                            var offset_i = offset + i;
                            var M_offset_i = M[offset_i];
                            M[offset_i] = (M_offset_i << 8 | M_offset_i >>> 24) & 16711935 | (M_offset_i << 24 | M_offset_i >>> 8) & 4278255360;
                        }
                        // Shortcuts
                                                var H = this._hash.words;
                        var M_offset_0 = M[offset + 0];
                        var M_offset_1 = M[offset + 1];
                        var M_offset_2 = M[offset + 2];
                        var M_offset_3 = M[offset + 3];
                        var M_offset_4 = M[offset + 4];
                        var M_offset_5 = M[offset + 5];
                        var M_offset_6 = M[offset + 6];
                        var M_offset_7 = M[offset + 7];
                        var M_offset_8 = M[offset + 8];
                        var M_offset_9 = M[offset + 9];
                        var M_offset_10 = M[offset + 10];
                        var M_offset_11 = M[offset + 11];
                        var M_offset_12 = M[offset + 12];
                        var M_offset_13 = M[offset + 13];
                        var M_offset_14 = M[offset + 14];
                        var M_offset_15 = M[offset + 15];
                        // Working varialbes
                                                var a = H[0];
                        var b = H[1];
                        var c = H[2];
                        var d = H[3];
                        // Computation
                                                a = FF(a, b, c, d, M_offset_0, 7, T[0]);
                        d = FF(d, a, b, c, M_offset_1, 12, T[1]);
                        c = FF(c, d, a, b, M_offset_2, 17, T[2]);
                        b = FF(b, c, d, a, M_offset_3, 22, T[3]);
                        a = FF(a, b, c, d, M_offset_4, 7, T[4]);
                        d = FF(d, a, b, c, M_offset_5, 12, T[5]);
                        c = FF(c, d, a, b, M_offset_6, 17, T[6]);
                        b = FF(b, c, d, a, M_offset_7, 22, T[7]);
                        a = FF(a, b, c, d, M_offset_8, 7, T[8]);
                        d = FF(d, a, b, c, M_offset_9, 12, T[9]);
                        c = FF(c, d, a, b, M_offset_10, 17, T[10]);
                        b = FF(b, c, d, a, M_offset_11, 22, T[11]);
                        a = FF(a, b, c, d, M_offset_12, 7, T[12]);
                        d = FF(d, a, b, c, M_offset_13, 12, T[13]);
                        c = FF(c, d, a, b, M_offset_14, 17, T[14]);
                        b = FF(b, c, d, a, M_offset_15, 22, T[15]);
                        a = GG(a, b, c, d, M_offset_1, 5, T[16]);
                        d = GG(d, a, b, c, M_offset_6, 9, T[17]);
                        c = GG(c, d, a, b, M_offset_11, 14, T[18]);
                        b = GG(b, c, d, a, M_offset_0, 20, T[19]);
                        a = GG(a, b, c, d, M_offset_5, 5, T[20]);
                        d = GG(d, a, b, c, M_offset_10, 9, T[21]);
                        c = GG(c, d, a, b, M_offset_15, 14, T[22]);
                        b = GG(b, c, d, a, M_offset_4, 20, T[23]);
                        a = GG(a, b, c, d, M_offset_9, 5, T[24]);
                        d = GG(d, a, b, c, M_offset_14, 9, T[25]);
                        c = GG(c, d, a, b, M_offset_3, 14, T[26]);
                        b = GG(b, c, d, a, M_offset_8, 20, T[27]);
                        a = GG(a, b, c, d, M_offset_13, 5, T[28]);
                        d = GG(d, a, b, c, M_offset_2, 9, T[29]);
                        c = GG(c, d, a, b, M_offset_7, 14, T[30]);
                        b = GG(b, c, d, a, M_offset_12, 20, T[31]);
                        a = HH(a, b, c, d, M_offset_5, 4, T[32]);
                        d = HH(d, a, b, c, M_offset_8, 11, T[33]);
                        c = HH(c, d, a, b, M_offset_11, 16, T[34]);
                        b = HH(b, c, d, a, M_offset_14, 23, T[35]);
                        a = HH(a, b, c, d, M_offset_1, 4, T[36]);
                        d = HH(d, a, b, c, M_offset_4, 11, T[37]);
                        c = HH(c, d, a, b, M_offset_7, 16, T[38]);
                        b = HH(b, c, d, a, M_offset_10, 23, T[39]);
                        a = HH(a, b, c, d, M_offset_13, 4, T[40]);
                        d = HH(d, a, b, c, M_offset_0, 11, T[41]);
                        c = HH(c, d, a, b, M_offset_3, 16, T[42]);
                        b = HH(b, c, d, a, M_offset_6, 23, T[43]);
                        a = HH(a, b, c, d, M_offset_9, 4, T[44]);
                        d = HH(d, a, b, c, M_offset_12, 11, T[45]);
                        c = HH(c, d, a, b, M_offset_15, 16, T[46]);
                        b = HH(b, c, d, a, M_offset_2, 23, T[47]);
                        a = II(a, b, c, d, M_offset_0, 6, T[48]);
                        d = II(d, a, b, c, M_offset_7, 10, T[49]);
                        c = II(c, d, a, b, M_offset_14, 15, T[50]);
                        b = II(b, c, d, a, M_offset_5, 21, T[51]);
                        a = II(a, b, c, d, M_offset_12, 6, T[52]);
                        d = II(d, a, b, c, M_offset_3, 10, T[53]);
                        c = II(c, d, a, b, M_offset_10, 15, T[54]);
                        b = II(b, c, d, a, M_offset_1, 21, T[55]);
                        a = II(a, b, c, d, M_offset_8, 6, T[56]);
                        d = II(d, a, b, c, M_offset_15, 10, T[57]);
                        c = II(c, d, a, b, M_offset_6, 15, T[58]);
                        b = II(b, c, d, a, M_offset_13, 21, T[59]);
                        a = II(a, b, c, d, M_offset_4, 6, T[60]);
                        d = II(d, a, b, c, M_offset_11, 10, T[61]);
                        c = II(c, d, a, b, M_offset_2, 15, T[62]);
                        b = II(b, c, d, a, M_offset_9, 21, T[63]);
                        // Intermediate hash value
                                                H[0] = H[0] + a | 0;
                        H[1] = H[1] + b | 0;
                        H[2] = H[2] + c | 0;
                        H[3] = H[3] + d | 0;
                    },
                    _doFinalize: function _doFinalize() {
                        // Shortcuts
                        var data = this._data;
                        var dataWords = data.words;
                        var nBitsTotal = this._nDataBytes * 8;
                        var nBitsLeft = data.sigBytes * 8;
                        // Add padding
                                                dataWords[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
                        var nBitsTotalH = Math.floor(nBitsTotal / 4294967296);
                        var nBitsTotalL = nBitsTotal;
                        dataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] = (nBitsTotalH << 8 | nBitsTotalH >>> 24) & 16711935 | (nBitsTotalH << 24 | nBitsTotalH >>> 8) & 4278255360;
                        dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = (nBitsTotalL << 8 | nBitsTotalL >>> 24) & 16711935 | (nBitsTotalL << 24 | nBitsTotalL >>> 8) & 4278255360;
                        data.sigBytes = (dataWords.length + 1) * 4;
                        // Hash final blocks
                                                this._process();
                        // Shortcuts
                                                var hash = this._hash;
                        var H = hash.words;
                        // Swap endian
                                                for (var i = 0; i < 4; i++) {
                            // Shortcut
                            var H_i = H[i];
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
// 此文件包含从 wx00f744db1fcf1c18 提取的 MD5 算法实现
// 检测位置: 行 2958-2958
// 变量名: ___
// 检测源: static
