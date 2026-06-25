/**
 * SHA-1 算法实现
 * App ID: wx017ae316ea284e7c
 * 版本: v12
 * 代码哈希: -srlzzb
 * 来源文件: output/wx017ae316ea284e7c/common/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.98
 * 函数名: RIPEMD160
 * 行数: 6
 * 生成时间: 2025-07-05T13:17:10.829Z
 */

function RIPEMD160() {
        if (!(this instanceof RIPEMD160)) return new RIPEMD160();
        BlockHash.call(this);
        this.h = [ 1732584193, 4023233417, 2562383102, 271733878, 3285377520 ];
        this.endian = "little";
    }

// ==================== 元数据 ====================
// 此文件包含从 wx017ae316ea284e7c 提取的 SHA-1 算法实现
// 检测位置: 行 27384-27384
// 变量名: ___
// 检测源: static
