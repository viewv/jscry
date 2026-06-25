// 导入goog兼容层
import './goog-shim.js';

// 导入所有加密库文件
import './closure-library/crypt.js';
import './closure-library/hash.js';
import './closure-library/md5.js';
import './closure-library/sha1.js';
import './closure-library/sha2.js';
import './closure-library/sha224.js';
import './closure-library/sha256.js';
import './closure-library/sha384.js';
import './closure-library/sha512.js';
import './closure-library/sha512_256.js';
import './closure-library/sha2_64bit.js';
import './closure-library/base64.js';
import './closure-library/aes.js';
import './closure-library/arc4.js';
import './closure-library/hmac.js';
import './closure-library/pbkdf2.js';
import './closure-library/blockcipher.js';
import './closure-library/cbc.js';
import './closure-library/ctr.js';
import './closure-library/basen.js';
import './closure-library/hash32.js';
import './closure-library/blobhasher.js';

// 导出API
export const CryptoLib = {
    // 哈希算法
    Md5: goog.crypt.Md5,
    Sha1: goog.crypt.Sha1,
    Sha224: goog.crypt.Sha224,
    Sha256: goog.crypt.Sha256,
    Sha384: goog.crypt.Sha384,
    Sha512: goog.crypt.Sha512,
    Sha512_256: goog.crypt.Sha512_256,

    // 加密算法
    Aes: goog.crypt.Aes,
    Arc4: goog.crypt.Arc4,

    // 工具
    base64: goog.crypt.base64,
    crypt: goog.crypt,
    Hmac: goog.crypt.Hmac,
    pbkdf2: goog.crypt.pbkdf2,

    // 模式
    Cbc: goog.crypt.Cbc,
    Ctr: goog.crypt.Ctr
};

export default CryptoLib;