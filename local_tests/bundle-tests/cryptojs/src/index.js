// 导入 CryptoJS 的所有模块
import CryptoJS from 'crypto-js';

// 导出完整的 CryptoJS 对象
export default CryptoJS;

// 也可以导出常用的加密算法
export const {
  AES,
  DES,
  TripleDES,
  Rabbit,
  RC4,
  RC4Drop,
  MD5,
  SHA1,
  SHA256,
  SHA512,
  SHA224,
  SHA384,
  SHA3,
  RIPEMD160,
  HmacMD5,
  HmacSHA1,
  HmacSHA256,
  HmacSHA512,
  HmacSHA224,
  HmacSHA384,
  HmacSHA3,
  HmacRIPEMD160,
  PBKDF2,
  EvpKDF,
  format,
  enc,
  mode,
  pad,
  lib
} = CryptoJS;

// 添加一些便捷方法
export const encrypt = {
  aes: (message, key) => AES.encrypt(message, key).toString(),
  des: (message, key) => DES.encrypt(message, key).toString(),
  tripledes: (message, key) => TripleDES.encrypt(message, key).toString()
};

export const decrypt = {
  aes: (ciphertext, key) => AES.decrypt(ciphertext, key).toString(enc.Utf8),
  des: (ciphertext, key) => DES.decrypt(ciphertext, key).toString(enc.Utf8),
  tripledes: (ciphertext, key) => TripleDES.decrypt(ciphertext, key).toString(enc.Utf8)
};

export const hash = {
  md5: (message) => MD5(message).toString(),
  sha1: (message) => SHA1(message).toString(),
  sha256: (message) => SHA256(message).toString(),
  sha512: (message) => SHA512(message).toString()
};