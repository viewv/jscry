// Modify import path, use accelerated version
const { extractConstantValue } = require('../pre/iife_constant_acc');
// Modify import path, use parallel version
const { extractConstantValueParallel } = require('../pre/iife_constant_acc_parallel');
const os = require('os');

const CRYPTO_SIGNATURES = {
    AES: {
        // AES S-box characteristic values
        SBOX_VALUES: [
            0x63, 0x7c, 0x77, 0x7b, 0xf2, 0x6b, 0x6f, 0xc5, 0x30, 0x01, 0x67, 0x2b, 0xfe, 0xd7, 0xab, 0x76,
            0xca, 0x82, 0xc9, 0x7d, 0xfa, 0x59, 0x47, 0xf0, 0xad, 0xd4, 0xa2, 0xaf, 0x9c, 0xa4, 0x72, 0xc0
        ],
        // AES inverse S-box characteristic values
        INV_SBOX_VALUES: [
            0x52, 0x09, 0x6a, 0xd5, 0x30, 0x36, 0xa5, 0x38, 0xbf, 0x40, 0xa3, 0x9e, 0x81, 0xf3, 0xd7, 0xfb,
            0x7c, 0xe3, 0x39, 0x82, 0x9b, 0x2f, 0xff, 0x87, 0x34, 0x8e, 0x43, 0x44, 0xc4, 0xde, 0xe9, 0xcb
        ],
        // AES round constants
        RCON_VALUES: [0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36],

        // Ahead 0
        RCON_VALUES_SP: [0x00, 0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36],

        // MixColumns matrix constants
        MIX_COLUMNS: [0x02, 0x03, 0x01, 0x01, 0x01, 0x02, 0x03, 0x01, 0x01, 0x01, 0x02, 0x03, 0x03, 0x01, 0x01, 0x02]
    },
    DES: {
        // DES S-box characteristic values (more complete)
        SBOX1_VALUES: [14, 4, 13, 1, 2, 15, 11, 8, 3, 10, 6, 12, 5, 9, 0, 7],
        // DES PC2 permutation table characteristic values
        PC2_VALUES: [14, 11, 17, 4, 27, 23, 25, 0, 13, 22, 7, 18, 5, 9, 16, 24],
        // DES S-box table characteristic sequence
        SBOX_SIGNATURE: [14, 0, 4, 15, 13, 7, 1, 4, 2, 14, 15, 2, 11, 13, 8, 1],
        // DES permutation table characteristics
        PERMUTE_VALUES: [16, 25, 12, 11, 3, 20, 4, 15, 31, 17, 9, 6, 27, 14, 1, 22]
    },
    SHA: {
        // SHA-1/SHA-256 constants
        SHA1_H: [0x67452301, 0xEFCDAB89, 0x98BADCFE, 0x10325476, 0xC3D2E1F0],
        SHA256_H: [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19],
        SHA512_K: [
            0x428a2f98, 0xd728ae22, 0x71374491, 0x23ef65cd,
            0xb5c0fbcf, 0xec4d3b2f, 0xe9b5dba5, 0x8189dbbc,
            0x3956c25b, 0xf348b538, 0x59f111f1, 0xb605d019,
            0x923f82a4, 0xaf194f9b, 0xab1c5ed5, 0xda6d8118
        ],
        // SHA-256 round constants part
        SHA256_K: [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5],
    },
    SHA3: {
        SHA3_ROUND_CONSTANTS: [
            0x00000000, 0x00000001,
            0x00000000, 0x00008082,
            0x80000000, 0x0000808a,
            0x80000000, 0x80008000,
            0x00000000, 0x0000808b,
            0x00000000, 0x80000001,
            0x80000000, 0x80008081,
            0x80000000, 0x00008009,
            0x00000000, 0x0000008a,
            0x00000000, 0x00000088,
            0x00000000, 0x80008009,
            0x00000000, 0x8000000a,
            0x00000000, 0x8000808b,
            0x80000000, 0x0000008b,
            0x80000000, 0x00008089,
            0x80000000, 0x00008003,
            0x80000000, 0x00008002,
            0x80000000, 0x00000080,
            0x00000000, 0x0000800a,
            0x80000000, 0x8000000a,
            0x80000000, 0x80008081,
            0x80000000, 0x00008080,
            0x00000000, 0x80000001,
            0x80000000, 0x80008008
        ],
        SHA3_RHO_OFFSET: [1, 3, 6, 10, 15, 21, 28, 36, 45, 55, 2, 14, 27, 41, 56, 8, 25, 43, 62, 18, 39, 61, 20, 44],
        SHA3_RHO_OFFSET_SP: [1, 62, 28, 27, 36, 44, 6, 55, 20, 3, 10, 43, 25, 39, 41, 45, 15, 21, 8, 18, 2, 61, 56, 14],
        SHA3_PI_INDEXES: [0, 10, 20, 5, 15, 16, 1, 11, 21, 6, 7, 17, 2, 12, 22, 23, 8, 18, 3, 13, 14, 24, 9, 19, 4],
        SHA3_PI_SHUFFLES: [10, 7, 11, 17, 18, 3, 5, 16, 8, 21, 24, 4, 15, 23, 19, 13, 12, 2, 20, 14, 22, 9, 6, 1]
    },
    MD5: {
        // MD5 initial hash values
        MD5_H: [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476],
        // MD5 round constants part
        MD5_T: [0xd76aa478, 0xe8c7b756, 0x242070db, 0xc1bdceee, 0xf57c0faf, 0x4787c62a, 0xa8304613, 0xfd469501]
    },
    RSA: {
        // Common RSA public exponents
        COMMON_E: [3, 17, 65537],
        // Fermat numbers
        FERMAT_NUMBERS: [3, 5, 17, 257, 65537]
    },
    Ed25519: {
        // Ed25519 curve parameters
        // Original 16-bit segmented format (TweetNaCl format)
        CURVE_D_SEGMENTS: [0x78a3, 0x1359, 0x4dca, 0x75eb, 0xd8ab, 0x4141, 0x0a4d, 0x0070, 0xe898, 0x7779, 0x4079, 0x8cc7, 0xfe73, 0x2b6f, 0x6cee, 0x5203],
        CURVE_2D_SEGMENTS: [0xf159, 0x26b2, 0x9b94, 0xebd6, 0xb156, 0x8283, 0x149a, 0x00e0, 0xd130, 0xeef3, 0x80f2, 0x198e, 0xfce7, 0x56df, 0xd9dc, 0x2406],
        BASE_X_SEGMENTS: [0xd51a, 0x8f25, 0x2d60, 0xc956, 0xa7b2, 0x9525, 0xc760, 0x692c, 0xdc5c, 0xfdd6, 0xe231, 0xc0a4, 0x53fe, 0xcd6e, 0x36d3, 0x2169],
        BASE_Y_SEGMENTS: [0x6658, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666],
        SQRT_M1_SEGMENTS: [0xa0b0, 0x4a0e, 0x1b27, 0xc4ee, 0xe478, 0xad2f, 0x1806, 0x2f43, 0xd7a7, 0x3dfb, 0x0099, 0x2b4d, 0xdf0b, 0x4fc1, 0x2480, 0x2b83],
        //TODO add g 216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a https://github.com/indutny/elliptic/blob/master/lib/elliptic/curves.js

        // Finite field modulus p = 2^255 - 19
        FIELD_PRIME: [0xed, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0x7f],
        // Edwards curve parameter d = -121665/121666
        CURVE_D: [0xa3, 0x78, 0x59, 0x13, 0xca, 0x4d, 0xeb, 0x75, 0xab, 0xd8, 0x41, 0x41, 0x4d, 0x0a, 0x70, 0x00, 0x98, 0xe8, 0x79, 0x77, 0x79, 0x40, 0xc7, 0x8c, 0x73, 0xfe, 0x6f, 0x2b, 0xee, 0x6c, 0x03, 0x52],
        // 2*d
        CURVE_2D: [0x59, 0xf1, 0xb2, 0x26, 0x94, 0x9b, 0xd6, 0xeb, 0x56, 0xb1, 0x83, 0x82, 0x9a, 0x14, 0xe0, 0x00, 0x30, 0xd1, 0xf3, 0xee, 0xf2, 0x80, 0x8e, 0x19, 0xe7, 0xfc, 0xdf, 0x56, 0xdc, 0xd9, 0x06, 0x24],
        // x-coordinate of base point G
        BASE_POINT_X: [0x1a, 0xd5, 0x25, 0x8f, 0x60, 0x2d, 0x56, 0xc9, 0xb2, 0xa7, 0x25, 0x95, 0x60, 0xc7, 0x2c, 0x69, 0x5c, 0xdc, 0xd6, 0xfd, 0x31, 0xe2, 0xa4, 0xc0, 0xfe, 0x53, 0x6e, 0xcd, 0xd3, 0x36, 0x69, 0x21],
        // y-coordinate of base point G
        BASE_POINT_Y: [0x58, 0x66, 0x66, 0x66, 0x66, 0x66, 0x66, 0x66, 0x66, 0x66, 0x66, 0x66, 0x66, 0x66, 0x66, 0x66, 0x66, 0x66, 0x66, 0x66, 0x66, 0x66, 0x66, 0x66, 0x66, 0x66, 0x66, 0x66, 0x66, 0x66, 0x66, 0x66],
        // sqrt(-1) mod p
        SQRT_MINUS_ONE: [0xb0, 0xa0, 0x0e, 0x4a, 0x27, 0x1b, 0xee, 0xc4, 0x78, 0xe4, 0x2f, 0xad, 0x06, 0x18, 0x43, 0x2f, 0xa7, 0xd7, 0xfb, 0x3d, 0x99, 0x00, 0x4d, 0x2b, 0x0b, 0xdf, 0xc1, 0x4f, 0x80, 0x24, 0x83, 0x2b],
    },
    Salsa20: {
        // Salsa20 constants
        // Sigma: "expand 32-byte k" (used for 32-byte keys)
        SIGMA: [0x65, 0x78, 0x70, 0x61, 0x6e, 0x64, 0x20, 0x33, 0x32, 0x2d, 0x62, 0x79, 0x74, 0x65, 0x20, 0x6b],

        // Tau: "expand 16-byte k" (used for 16-byte keys)
        TAU: [0x65, 0x78, 0x70, 0x61, 0x6e, 0x64, 0x20, 0x31, 0x36, 0x2d, 0x62, 0x79, 0x74, 0x65, 0x20, 0x6b],

        // Sigma in 32-bit integer format
        SIGMA_32BIT: [0x61707865, 0x3320646e, 0x79622d32, 0x6b206574],

        // Tau in 32-bit integer format
        TAU_32BIT: [0x61707865, 0x3120646e, 0x79622d36, 0x6b206574],

        // String format (used for detection)
        SIGMA_STRING: "expand 32-byte k",
        TAU_STRING: "expand 16-byte k",
    },
    RC2: {
        // RC2 piTable
        RC2_PI_TABLE: [
            0xd9, 0x78, 0xf9, 0xc4, 0x19, 0xdd, 0xb5, 0xed, 0x28, 0xe9, 0xfd, 0x79, 0x4a, 0xa0, 0xd8, 0x9d,
            0xc6, 0x7e, 0x37, 0x83, 0x2b, 0x76, 0x53, 0x8e, 0x62, 0x4c, 0x64, 0x88, 0x44, 0x8b, 0xfb, 0xa2,
            0x17, 0x9a, 0x59, 0xf5, 0x87, 0xb3, 0x4f, 0x13, 0x61, 0x45, 0x6d, 0x8d, 0x09, 0x81, 0x7d, 0x32,
            0xbd, 0x8f, 0x40, 0xeb, 0x86, 0xb7, 0x7b, 0x0b, 0xf0, 0x95, 0x21, 0x22, 0x5c, 0x6b, 0x4e, 0x82,
            0x54, 0xd6, 0x65, 0x93, 0xce, 0x60, 0xb2, 0x1c, 0x73, 0x56, 0xc0, 0x14, 0xa7, 0x8c, 0xf1, 0xdc,
            0x12, 0x75, 0xca, 0x1f, 0x3b, 0xbe, 0xe4, 0xd1, 0x42, 0x3d, 0xd4, 0x30, 0xa3, 0x3c, 0xb6, 0x26,
            0x6f, 0xbf, 0x0e, 0xda, 0x46, 0x69, 0x07, 0x57, 0x27, 0xf2, 0x1d, 0x9b, 0xbc, 0x94, 0x43, 0x03,
            0xf8, 0x11, 0xc7, 0xf6, 0x90, 0xef, 0x3e, 0xe7, 0x06, 0xc3, 0xd5, 0x2f, 0xc8, 0x66, 0x1e, 0xd7,
            0x08, 0xe8, 0xea, 0xde, 0x80, 0x52, 0xee, 0xf7, 0x84, 0xaa, 0x72, 0xac, 0x35, 0x4d, 0x6a, 0x2a,
            0x96, 0x1a, 0xd2, 0x71, 0x5a, 0x15, 0x49, 0x74, 0x4b, 0x9f, 0xd0, 0x5e, 0x04, 0x18, 0xa4, 0xec,
            0xc2, 0xe0, 0x41, 0x6e, 0x0f, 0x51, 0xcb, 0xcc, 0x24, 0x91, 0xaf, 0x50, 0xa1, 0xf4, 0x70, 0x39,
            0x99, 0x7c, 0x3a, 0x85, 0x23, 0xb8, 0xb4, 0x7a, 0xfc, 0x02, 0x36, 0x5b, 0x25, 0x55, 0x97, 0x31,
            0x2d, 0x5d, 0xfa, 0x98, 0xe3, 0x8a, 0x92, 0xae, 0x05, 0xdf, 0x29, 0x10, 0x67, 0x6c, 0xba, 0xc9,
            0xd3, 0x00, 0xe6, 0xcf, 0xe1, 0x9e, 0xa8, 0x2c, 0x63, 0x16, 0x01, 0x3f, 0x58, 0xe2, 0x89, 0xa9,
            0x0d, 0x38, 0x34, 0x1b, 0xab, 0x33, 0xff, 0xb0, 0xbb, 0x48, 0x0c, 0x5f, 0xb9, 0xb1, 0xcd, 0x2e,
            0xc5, 0xf3, 0xdb, 0x47, 0xe5, 0xa5, 0x9c, 0x77, 0x0a, 0xa6, 0x20, 0x68, 0xfe, 0x7f, 0xc1, 0xad
        ],
    }
};


/**
 * Check if the array contains the specified subsequence
 * @param {Array} array - Array to check
 * @param {Array} sequence - Subsequence to find
 * @param {number} minMatches - Minimum matches count
 * @returns {boolean}
 */
function containsSequence(array, sequence, minMatches = 8) {
    if (!Array.isArray(array) || !Array.isArray(sequence)) {
        return false;
    }

    let consecutiveMatches = 0;
    for (let i = 0; i < sequence.length && i < array.length; i++) {
        if (array[i] === sequence[i]) {
            consecutiveMatches++;
        } else {
            break;
        }
    }

    return consecutiveMatches >= minMatches;
}
// function containsSequence(array, sequence, minMatches = 8) {
//     if (!Array.isArray(array) || !Array.isArray(sequence)) {
//         return false;
//     }

//     let matches = 0;
//     for (let i = 0; i <= array.length - sequence.length; i++) {
//         let consecutiveMatches = 0;
//         for (let j = 0; j < sequence.length && i + j < array.length; j++) {
//             if (array[i + j] === sequence[j]) {
//                 consecutiveMatches++;
//             } else {
//                 break;
//             }
//         }
//         if (consecutiveMatches >= minMatches) {
//             return true;
//         }
//     }
//     return false;
// }

/**
 * Check if the array contains a certain proportion of the specified values
 * @param {Array} array - Array to check
 * @param {Array} targetValues - Target values array
 * @param {number} threshold - Matching threshold (between 0 and 1)
 * @returns {boolean}
 */
function containsValues(array, targetValues, threshold = 0.6) {
    if (!Array.isArray(array) || !Array.isArray(targetValues)) {
        return false;
    }

    // Convert target values to signed and unsigned formats
    const normalizedTargets = new Set();
    targetValues.forEach(val => {
        // Add original value
        normalizedTargets.add(val);
        // Add signed 32-bit representation
        normalizedTargets.add(val | 0);
        // Add unsigned 32-bit representation
        normalizedTargets.add(val >>> 0);
    });

    const matches = array.filter(val => {
        // Check original value
        if (normalizedTargets.has(val)) return true;
        // Check signed conversion
        if (normalizedTargets.has(val | 0)) return true;
        // Check unsigned conversion
        if (normalizedTargets.has(val >>> 0)) return true;
        return false;
    }).length;

    //const matches = array.filter(val => targetValues.includes(val)).length;
    return matches / targetValues.length >= threshold;
}


/**
 * Convert constant value to numeric array (if possible)
 * @param {*} value - Constant value
 * @returns {Array|null}
 */
function extractNumericArray(value) {
    if (Array.isArray(value)) {
        // Process nested arrays, flatten to 1D array
        const flattened = value.flat(Infinity);
        // Attempt to convert to numbers
        const numeric = flattened.map(v => {
            if (typeof v === 'number') return v;
            if (typeof v === 'string') {
                const num = parseInt(v, 16) || parseInt(v, 10);
                return isNaN(num) ? null : num;
            }
            return null;
        }).filter(v => v !== null);

        return numeric.length > 0 ? numeric : null;
    }
    return null;
}

/**
 * Detect cryptographic algorithm constants - modified to use parallel analyzer
 * @param {string} code - Code to analyze
 * @param {number} maxWorkers - Maximum worker threads (optional, default to CPU core count)
 * @returns {Promise<Object>} Detection result
 */
async function detectCryptoConstants(code, maxWorkers = os.cpus().length) {
    // 使用并行版本的 extractConstantValue
    const constantValueMap = await extractConstantValueParallel(code, maxWorkers);
    const detectionResults = {
        detected: [],
        constants: {},
        confidence: {}
    };

    // Iterate through all detected constants
    for (const [varName, constantEntries] of Object.entries(constantValueMap)) {
        for (const entry of constantEntries) {
            const numericArray = extractNumericArray(entry.value);
            if (!numericArray || numericArray.length < 4) {
                continue;
            }

            // Detect cryptographic algorithm
            const cryptoType = detectCryptoType(numericArray);
            if (cryptoType) {
                detectionResults.detected.push(cryptoType);
                if (!detectionResults.constants[cryptoType.algorithm]) {
                    detectionResults.constants[cryptoType.algorithm] = [];
                }
                detectionResults.constants[cryptoType.algorithm].push({
                    variable: varName,
                    type: cryptoType.type,
                    confidence: cryptoType.confidence,
                    position: entry.position,
                    source: entry.source || 'static'
                });

                // Update overall confidence
                if (!detectionResults.confidence[cryptoType.algorithm]) {
                    detectionResults.confidence[cryptoType.algorithm] = 0;
                }
                detectionResults.confidence[cryptoType.algorithm] = Math.max(
                    detectionResults.confidence[cryptoType.algorithm],
                    cryptoType.confidence
                );
            }
        }
    }

    return detectionResults;
}

/**
 * Detect which cryptographic algorithm a specific array belongs to
 * @param {Array} numericArray - Numeric array
 * @param {string} varName - Variable name
 * @returns {Object|null} Detection result
 */
function detectCryptoType(numericArray) {
    const detectionResults = [];

    // AES detection
    if (containsSequence(numericArray, CRYPTO_SIGNATURES.AES.SBOX_VALUES, 16)) {
        detectionResults.push({
            algorithm: 'AES',
            type: 'S-box',
            confidence: 0.95,
            reason: 'Contains AES S-box signature sequence'
        });
    }

    if (containsSequence(numericArray, CRYPTO_SIGNATURES.AES.INV_SBOX_VALUES, 16)) {
        detectionResults.push({
            algorithm: 'AES',
            type: 'Inverse S-box',
            confidence: 0.95,
            reason: 'Contains AES inverse S-box signature sequence'
        });
    }

    if (containsSequence(numericArray, CRYPTO_SIGNATURES.AES.RCON_VALUES, 10)) {
        detectionResults.push({
            algorithm: 'AES',
            type: 'Round constants',
            confidence: 0.8,
            reason: 'Contains AES round constants'
        });
    }

    if (containsSequence(numericArray, CRYPTO_SIGNATURES.AES.RCON_VALUES_SP, 11)) {
        detectionResults.push({
            algorithm: 'AES',
            type: 'Round constants',
            confidence: 0.8,
            reason: 'Contains AES round constants'
        });
    }

    // DES detection (more complete)
    if (containsSequence(numericArray, CRYPTO_SIGNATURES.DES.PC2_VALUES, 8)) {
        detectionResults.push({
            algorithm: 'DES',
            type: 'PC2 permutation table',
            confidence: 0.95,
            reason: 'Contains DES PC2 permutation table signature'
        });
    }

    if (containsSequence(numericArray, CRYPTO_SIGNATURES.DES.SBOX_SIGNATURE, 12)) {
        detectionResults.push({
            algorithm: 'DES',
            type: 'S-box',
            confidence: 0.9,
            reason: 'Contains DES S-box signature sequence'
        });
    }

    if (containsSequence(numericArray, CRYPTO_SIGNATURES.DES.PERMUTE_VALUES, 8)) {
        detectionResults.push({
            algorithm: 'DES',
            type: 'Permutation table',
            confidence: 0.85,
            reason: 'Contains DES permutation table signature'
        });
    }

    // SHA-1 detection
    if (containsValues(numericArray, CRYPTO_SIGNATURES.SHA.SHA1_H, 1.0)) {
        detectionResults.push({
            algorithm: 'SHA-1',
            type: 'Initial hash values',
            confidence: 0.98,
            reason: 'Contains complete SHA-1 initial hash values'
        });
    }

    // MD5 detection - only perform if it is not SHA-1
    if (!detectionResults.some(r => r.algorithm === 'SHA-1')) {
        if (containsValues(numericArray, CRYPTO_SIGNATURES.MD5.MD5_H, 1.0)) {
            detectionResults.push({
                algorithm: 'MD5',
                type: 'Initial hash values',
                confidence: 0.95,
                reason: 'Contains complete MD5 initial hash values'
            });
        } else if (containsValues(numericArray, CRYPTO_SIGNATURES.MD5.MD5_H, 0.75)) {
            detectionResults.push({
                algorithm: 'MD5',
                type: 'Initial hash values',
                confidence: 0.8,
                reason: 'Contains partial MD5 initial hash values'
            });
        }
    }

    if (containsValues(numericArray, CRYPTO_SIGNATURES.MD5.MD5_T, 0.6)) {
        detectionResults.push({
            algorithm: 'MD5',
            type: 'Round constants',
            confidence: 0.8,
            reason: 'Contains MD5 round constants'
        });
    }

    // SHA-256 detection
    if (containsValues(numericArray, CRYPTO_SIGNATURES.SHA.SHA256_H, 0.8)) {
        detectionResults.push({
            algorithm: 'SHA-256',
            type: 'Initial hash values',
            confidence: 0.9,
            reason: 'Contains SHA-256 initial hash values'
        });
    }

    if (containsValues(numericArray, CRYPTO_SIGNATURES.SHA.SHA256_K, 0.6)) {
        detectionResults.push({
            algorithm: 'SHA-256',
            type: 'Round constants',
            confidence: 0.8,
            reason: 'Contains SHA-256 round constants'
        });
    }

    // RSA detection
    // if (containsValues(numericArray, CRYPTO_SIGNATURES.RSA.COMMON_E, 1.0)) {
    //     detectionResults.push({
    //         algorithm: 'RSA',
    //         type: 'Public exponent',
    //         confidence: 0.7,
    //         reason: 'Contains common RSA public exponents'
    //     });
    // }

    // Added: Ed25519 detection
    if (containsValues(numericArray, CRYPTO_SIGNATURES.Ed25519.CURVE_D_SEGMENTS, 0.8)) {
        detectionResults.push({
            algorithm: 'Ed25519',
            type: 'Curve parameter D',
            confidence: 0.95,
            reason: 'Contains Ed25519 curve parameter D segments'
        });
    }

    if (containsValues(numericArray, CRYPTO_SIGNATURES.Ed25519.CURVE_2D_SEGMENTS, 0.8)) {
        detectionResults.push({
            algorithm: 'Ed25519',
            type: 'Curve parameter 2D',
            confidence: 0.95,
            reason: 'Contains Ed25519 curve parameter 2D segments'
        });
    }

    if (containsValues(numericArray, CRYPTO_SIGNATURES.Ed25519.BASE_Y_SEGMENTS, 0.9)) {
        detectionResults.push({
            algorithm: 'Ed25519',
            type: 'Base point Y coordinate',
            confidence: 0.98,
            reason: 'Contains Ed25519 base point Y coordinate (characteristic 0x6666 pattern)'
        });
    }

    if (containsValues(numericArray, CRYPTO_SIGNATURES.Ed25519.CHARACTERISTIC_VALUES, 0.6)) {
        detectionResults.push({
            algorithm: 'Ed25519',
            type: 'Characteristic values',
            confidence: 0.8,
            reason: 'Contains Ed25519 characteristic values'
        });
    }

    // Added: Salsa20 detection
    if (containsSequence(numericArray, CRYPTO_SIGNATURES.Salsa20.SIGMA, 16)) {
        detectionResults.push({
            algorithm: 'Salsa20',
            type: 'Sigma constant',
            confidence: 0.98,
            reason: 'Contains Salsa20 sigma constant "expand 32-byte k"'
        });
    }

    if (containsSequence(numericArray, CRYPTO_SIGNATURES.Salsa20.TAU, 16)) {
        detectionResults.push({
            algorithm: 'Salsa20',
            type: 'Tau constant',
            confidence: 0.98,
            reason: 'Contains Salsa20 tau constant "expand 16-byte k"'
        });
    }

    if (containsValues(numericArray, CRYPTO_SIGNATURES.Salsa20.SIGMA_32BIT, 1.0)) {
        detectionResults.push({
            algorithm: 'Salsa20',
            type: 'Sigma 32-bit',
            confidence: 0.95,
            reason: 'Contains Salsa20 sigma in 32-bit format'
        });
    }

    if (containsValues(numericArray, CRYPTO_SIGNATURES.Salsa20.TAU_32BIT, 1.0)) {
        detectionResults.push({
            algorithm: 'Salsa20',
            type: 'Tau 32-bit',
            confidence: 0.95,
            reason: 'Contains Salsa20 tau in 32-bit format'
        });
    }

    // Added: SHA-512 detection
    if (containsValues(numericArray, CRYPTO_SIGNATURES.SHA.SHA512_SIGNATURE, 1.0)) {
        detectionResults.push({
            algorithm: 'SHA-512',
            type: 'Round constants signature',
            confidence: 0.98,
            reason: 'Contains SHA-512 round constants signature'
        });
    }

    if (containsValues(numericArray, CRYPTO_SIGNATURES.SHA.SHA512_K, 0.8)) {
        detectionResults.push({
            algorithm: 'SHA-512',
            type: 'Round constants',
            confidence: 0.9,
            reason: 'Contains SHA-512 round constants'
        });
    }

    // RC2 detection
    if (containsSequence(numericArray, CRYPTO_SIGNATURES.RC2.RC2_PI_TABLE, 12)) {
        detectionResults.push({
            algorithm: 'RC2',
            type: 'Round constants',
            confidence: 0.9,
            reason: 'Contains RC2 round constants'
        });
    }

    // Return the result with the highest confidence
    if (detectionResults.length === 0) {
        return null;
    } else if (detectionResults.length === 1) {
        return detectionResults[0];
    } else {
        return detectionResults.sort((a, b) => b.confidence - a.confidence)[0];
    }
    // return detectionResults.sort((a, b) => b.confidence - a.confidence);
}

/**
 * Generate detection report
 * @param {Object} results - Detection results
 * @returns {string} Formatted report
 */
function generateReport(results) {
    if (results.detected.length === 0) {
        return 'No cryptographic constants detected.';
    }

    let report = `Detected ${results.detected.length} cryptographic constant(s):\n\n`;

    for (const [algorithm, confidence] of Object.entries(results.confidence)) {
        report += `${algorithm} (Confidence: ${(confidence * 100).toFixed(1)}%):\n`;

        const constants = results.constants[algorithm];
        for (const constant of constants) {
            report += `  - Variable: ${constant.variable}\n`;
            report += `    Type: ${constant.type}\n`;
            report += `    Confidence: ${(constant.confidence * 100).toFixed(1)}%\n`;
            report += `    Source: ${constant.source}\n`;
            if (constant.position) {
                report += `    Position: ${constant.position.start}-${constant.position.end}\n`;
            }
            report += '\n';
        }
    }

    return report;
}

module.exports = {
    detectCryptoConstants,
    generateReport,
    CRYPTO_SIGNATURES
};

// Example usage - modified to async
if (require.main === module) {
    const fs = require('fs');

    // Get file path from command line arguments
    const filePath = process.argv[2];
    if (!filePath) {
        console.log('Usage: node constant_detect_acc.js <file_path>');
        process.exit(1);
    }

    // Use async function
    (async () => {
        try {
            const code = fs.readFileSync(filePath, 'utf8');
            const results = await detectCryptoConstants(code);
            console.log(generateReport(results));
        } catch (error) {
            console.error('Error:', error);
        }
    })();
}
