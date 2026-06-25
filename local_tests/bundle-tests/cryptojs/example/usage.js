// 使用 UMD 版本的示例
// 在浏览器中可以直接通过 script 标签引入

// 如果在 Node.js 环境中
// const CryptoJS = require('../dist/cryptojs.cjs.js');

// 如果使用 ES 模块
// import CryptoJS, { encrypt, decrypt, hash } from '../dist/cryptojs.esm.js';

// 基本加密解密示例
const message = 'Hello World';
const key = 'secret-key';

// AES 加密
const encrypted = CryptoJS.AES.encrypt(message, key).toString();
console.log('Encrypted:', encrypted);

// AES 解密
const decrypted = CryptoJS.AES.decrypt(encrypted, key).toString(CryptoJS.enc.Utf8);
console.log('Decrypted:', decrypted);

// 哈希示例
const md5Hash = CryptoJS.MD5(message).toString();
const sha256Hash = CryptoJS.SHA256(message).toString();

console.log('MD5:', md5Hash);
console.log('SHA256:', sha256Hash);

// 使用便捷方法（如果导入了命名导出）
// const encryptedAES = encrypt.aes(message, key);
// const decryptedAES = decrypt.aes(encryptedAES, key);
// const hashMD5 = hash.md5(message);