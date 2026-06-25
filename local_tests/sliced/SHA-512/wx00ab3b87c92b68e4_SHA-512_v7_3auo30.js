/**
 * SHA-512 算法实现
 * App ID: wx00ab3b87c92b68e4
 * 版本: v7
 * 代码哈希: 3auo30
 * 来源文件: output/wx00ab3b87c92b68e4/common/vendor.js
 * 检测类型: Round constants
 * 置信度: 0.9
 * 函数名: a
 * 行数: 15
 * 生成时间: 2025-07-05T13:17:10.902Z
 */

function a(t) {
            return function() {
                var e = this, n = arguments;
                return new Promise(function(i, r) {
                    function a(t) {
                        o(u, i, r, a, s, "next", t);
                    }
                    function s(t) {
                        o(u, i, r, a, s, "throw", t);
                    }
                    var u = t.apply(e, n);
                    a(void 0);
                });
            };
        }

// ==================== 元数据 ====================
// 此文件包含从 wx00ab3b87c92b68e4 提取的 SHA-512 算法实现
// 检测位置: 行 5228-5240
// 变量名: a
// 检测源: dynamic-function
