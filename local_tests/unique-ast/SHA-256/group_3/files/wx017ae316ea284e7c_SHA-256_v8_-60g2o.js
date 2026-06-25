/**
 * SHA-256 算法实现
 * App ID: wx017ae316ea284e7c
 * 版本: v8
 * 代码哈希: -60g2oh
 * 来源文件: output/wx017ae316ea284e7c/common/vendor.js
 * 检测类型: Initial hash values
 * 置信度: 0.9
 * 函数名: SHA256
 * 行数: 7
 * 生成时间: 2025-07-05T13:17:10.872Z
 */

function SHA256() {
        if (!(this instanceof SHA256)) return new SHA256();
        BlockHash.call(this);
        this.h = [ 1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225 ];
        this.k = sha256_K;
        this.W = new Array(64);
    }

// ==================== 元数据 ====================
// 此文件包含从 wx017ae316ea284e7c 提取的 SHA-256 算法实现
// 检测位置: 行 16500-16500
// 变量名: ___
// 检测源: static
