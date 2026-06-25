/**
 * AES 算法实现
 * App ID: wx0a5c8b647fc311c3
 * 版本: v61
 * 代码哈希: -vo0rjw
 * 来源文件: output/wx0a5c8b647fc311c3/common/vendor.js
 * 检测类型: S-box
 * 置信度: 0.95
 * 函数名: anonymous
 * 行数: 258
 * 生成时间: 2025-07-05T13:17:10.699Z
 */

function() {
            var C = typeof window === "undefined" ? __webpack_require__(/*! ./Crypto */ 36).Crypto : window.Crypto;
            // Shortcuts
                        var util = C.util, charenc = C.charenc, UTF8 = charenc.UTF8;
            // Precomputed SBOX
                        var SBOX = [ 99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22 ];
            // Compute inverse SBOX lookup table
                        for (var INVSBOX = [], i = 0; i < 256; i++) {
                INVSBOX[SBOX[i]] = i;
            }
            // Compute mulitplication in GF(2^8) lookup tables
                        var MULT2 = [], MULT3 = [], MULT9 = [], MULTB = [], MULTD = [], MULTE = [];
            function xtime(a, b) {
                for (var result = 0, i = 0; i < 8; i++) {
                    if (b & 1) result ^= a;
                    var hiBitSet = a & 128;
                    a = a << 1 & 255;
                    if (hiBitSet) a ^= 27;
                    b >>>= 1;
                }
                return result;
            }
            for (var i = 0; i < 256; i++) {
                MULT2[i] = xtime(i, 2);
                MULT3[i] = xtime(i, 3);
                MULT9[i] = xtime(i, 9);
                MULTB[i] = xtime(i, 11);
                MULTD[i] = xtime(i, 13);
                MULTE[i] = xtime(i, 14);
            }
            // Precomputed RCon lookup
                        var RCON = [ 0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54 ];
            // Inner state
                        var state = [ [], [], [], [] ], keylength, nrounds, keyschedule;
            var AES = C.AES = {
                /**
                       * Public API
                       */
                encrypt: function encrypt(message, password, options) {
                    options = options || {};
                    // Determine mode
                                        var mode = options.mode || new C.mode.OFB();
                    // Allow mode to override options
                                        if (mode.fixOptions) mode.fixOptions(options);
                    var 
                    // Convert to bytes if message is a string
                    m = message.constructor == String ? UTF8.stringToBytes(message) : message, 
                    // Generate random IV
                    iv = options.iv || util.randomBytes(AES._blocksize * 4), 
                    // Generate key
                    k = password.constructor == String ? 
                    // Derive key from passphrase
                    C.PBKDF2(password, iv, 32, {
                        asBytes: true
                    }) : 
                    // else, assume byte array representing cryptographic key
                    password;
                    // Encrypt
                                        AES._init(k);
                    mode.encrypt(AES, m, iv);
                    // Return ciphertext
                                        m = options.iv ? m : iv.concat(m);
                    return options && options.asBytes ? m : util.bytesToBase64(m);
                },
                decrypt: function decrypt(ciphertext, password, options) {
                    options = options || {};
                    // Determine mode
                                        var mode = options.mode || new C.mode.OFB();
                    // Allow mode to override options
                                        if (mode.fixOptions) mode.fixOptions(options);
                    var 
                    // Convert to bytes if ciphertext is a string
                    c = ciphertext.constructor == String ? util.base64ToBytes(ciphertext) : ciphertext, 
                    // Separate IV and message
                    iv = options.iv || c.splice(0, AES._blocksize * 4), 
                    // Generate key
                    k = password.constructor == String ? 
                    // Derive key from passphrase
                    C.PBKDF2(password, iv, 32, {
                        asBytes: true
                    }) : 
                    // else, assume byte array representing cryptographic key
                    password;
                    // Decrypt
                                        AES._init(k);
                    mode.decrypt(AES, c, iv);
                    // Return plaintext
                                        return options && options.asBytes ? c : UTF8.bytesToString(c);
                },
                /**
        * Package private methods and properties
        */
                _blocksize: 4,
                _encryptblock: function _encryptblock(m, offset) {
                    // Set input
                    for (var row = 0; row < AES._blocksize; row++) {
                        for (var col = 0; col < 4; col++) {
                            state[row][col] = m[offset + col * 4 + row];
                        }
                    }
                    // Add round key
                                        for (var row = 0; row < 4; row++) {
                        for (var col = 0; col < 4; col++) {
                            state[row][col] ^= keyschedule[col][row];
                        }
                    }
                    for (var round = 1; round < nrounds; round++) {
                        // Sub bytes
                        for (var row = 0; row < 4; row++) {
                            for (var col = 0; col < 4; col++) {
                                state[row][col] = SBOX[state[row][col]];
                            }
                        }
                        // Shift rows
                                                state[1].push(state[1].shift());
                        state[2].push(state[2].shift());
                        state[2].push(state[2].shift());
                        state[3].unshift(state[3].pop());
                        // Mix columns
                                                for (var col = 0; col < 4; col++) {
                            var s0 = state[0][col], s1 = state[1][col], s2 = state[2][col], s3 = state[3][col];
                            state[0][col] = MULT2[s0] ^ MULT3[s1] ^ s2 ^ s3;
                            state[1][col] = s0 ^ MULT2[s1] ^ MULT3[s2] ^ s3;
                            state[2][col] = s0 ^ s1 ^ MULT2[s2] ^ MULT3[s3];
                            state[3][col] = MULT3[s0] ^ s1 ^ s2 ^ MULT2[s3];
                        }
                        // Add round key
                                                for (var row = 0; row < 4; row++) {
                            for (var col = 0; col < 4; col++) {
                                state[row][col] ^= keyschedule[round * 4 + col][row];
                            }
                        }
                    }
                    // Sub bytes
                                        for (var row = 0; row < 4; row++) {
                        for (var col = 0; col < 4; col++) {
                            state[row][col] = SBOX[state[row][col]];
                        }
                    }
                    // Shift rows
                                        state[1].push(state[1].shift());
                    state[2].push(state[2].shift());
                    state[2].push(state[2].shift());
                    state[3].unshift(state[3].pop());
                    // Add round key
                                        for (var row = 0; row < 4; row++) {
                        for (var col = 0; col < 4; col++) {
                            state[row][col] ^= keyschedule[nrounds * 4 + col][row];
                        }
                    }
                    // Set output
                                        for (var row = 0; row < AES._blocksize; row++) {
                        for (var col = 0; col < 4; col++) {
                            m[offset + col * 4 + row] = state[row][col];
                        }
                    }
                },
                _decryptblock: function _decryptblock(c, offset) {
                    // Set input
                    for (var row = 0; row < AES._blocksize; row++) {
                        for (var col = 0; col < 4; col++) {
                            state[row][col] = c[offset + col * 4 + row];
                        }
                    }
                    // Add round key
                                        for (var row = 0; row < 4; row++) {
                        for (var col = 0; col < 4; col++) {
                            state[row][col] ^= keyschedule[nrounds * 4 + col][row];
                        }
                    }
                    for (var round = 1; round < nrounds; round++) {
                        // Inv shift rows
                        state[1].unshift(state[1].pop());
                        state[2].push(state[2].shift());
                        state[2].push(state[2].shift());
                        state[3].push(state[3].shift());
                        // Inv sub bytes
                                                for (var row = 0; row < 4; row++) {
                            for (var col = 0; col < 4; col++) {
                                state[row][col] = INVSBOX[state[row][col]];
                            }
                        }
                        // Add round key
                                                for (var row = 0; row < 4; row++) {
                            for (var col = 0; col < 4; col++) {
                                state[row][col] ^= keyschedule[(nrounds - round) * 4 + col][row];
                            }
                        }
                        // Inv mix columns
                                                for (var col = 0; col < 4; col++) {
                            var s0 = state[0][col], s1 = state[1][col], s2 = state[2][col], s3 = state[3][col];
                            state[0][col] = MULTE[s0] ^ MULTB[s1] ^ MULTD[s2] ^ MULT9[s3];
                            state[1][col] = MULT9[s0] ^ MULTE[s1] ^ MULTB[s2] ^ MULTD[s3];
                            state[2][col] = MULTD[s0] ^ MULT9[s1] ^ MULTE[s2] ^ MULTB[s3];
                            state[3][col] = MULTB[s0] ^ MULTD[s1] ^ MULT9[s2] ^ MULTE[s3];
                        }
                    }
                    // Inv shift rows
                                        state[1].unshift(state[1].pop());
                    state[2].push(state[2].shift());
                    state[2].push(state[2].shift());
                    state[3].push(state[3].shift());
                    // Inv sub bytes
                                        for (var row = 0; row < 4; row++) {
                        for (var col = 0; col < 4; col++) {
                            state[row][col] = INVSBOX[state[row][col]];
                        }
                    }
                    // Add round key
                                        for (var row = 0; row < 4; row++) {
                        for (var col = 0; col < 4; col++) {
                            state[row][col] ^= keyschedule[col][row];
                        }
                    }
                    // Set output
                                        for (var row = 0; row < AES._blocksize; row++) {
                        for (var col = 0; col < 4; col++) {
                            c[offset + col * 4 + row] = state[row][col];
                        }
                    }
                },
                /**
        * Private methods
        */
                _init: function _init(k) {
                    keylength = k.length / 4;
                    nrounds = keylength + 6;
                    AES._keyexpansion(k);
                },
                // Generate a key schedule
                _keyexpansion: function _keyexpansion(k) {
                    keyschedule = [];
                    for (var row = 0; row < keylength; row++) {
                        keyschedule[row] = [ k[row * 4], k[row * 4 + 1], k[row * 4 + 2], k[row * 4 + 3] ];
                    }
                    for (var row = keylength; row < AES._blocksize * (nrounds + 1); row++) {
                        var temp = [ keyschedule[row - 1][0], keyschedule[row - 1][1], keyschedule[row - 1][2], keyschedule[row - 1][3] ];
                        if (row % keylength == 0) {
                            // Rot word
                            temp.push(temp.shift());
                            // Sub word
                                                        temp[0] = SBOX[temp[0]];
                            temp[1] = SBOX[temp[1]];
                            temp[2] = SBOX[temp[2]];
                            temp[3] = SBOX[temp[3]];
                            temp[0] ^= RCON[row / keylength];
                        } else if (keylength > 6 && row % keylength == 4) {
                            // Sub word
                            temp[0] = SBOX[temp[0]];
                            temp[1] = SBOX[temp[1]];
                            temp[2] = SBOX[temp[2]];
                            temp[3] = SBOX[temp[3]];
                        }
                        keyschedule[row] = [ keyschedule[row - keylength][0] ^ temp[0], keyschedule[row - keylength][1] ^ temp[1], keyschedule[row - keylength][2] ^ temp[2], keyschedule[row - keylength][3] ^ temp[3] ];
                    }
                }
            };
        }

// ==================== 元数据 ====================
// 此文件包含从 wx0a5c8b647fc311c3 提取的 AES 算法实现
// 检测位置: 行 13446-13446
// 变量名: SBOX
// 检测源: static
