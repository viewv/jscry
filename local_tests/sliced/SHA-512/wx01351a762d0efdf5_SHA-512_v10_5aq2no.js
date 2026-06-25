/**
 * SHA-512 算法实现
 * App ID: wx01351a762d0efdf5
 * 版本: v10
 * 代码哈希: 5aq2no
 * 来源文件: output/wx01351a762d0efdf5/common/vendor.js
 * 检测类型: Round constants
 * 置信度: 0.9
 * 函数名: g
 * 行数: 15
 * 生成时间: 2025-07-05T13:17:10.903Z
 */

function g(e) {
            return function() {
                var t = this, r = arguments;
                return new Promise(function(n, i) {
                    var o = e.apply(t, r);
                    function a(e) {
                        y(o, n, i, a, s, "next", e);
                    }
                    function s(e) {
                        y(o, n, i, a, s, "throw", e);
                    }
                    a(void 0);
                });
            };
        }

// ==================== 元数据 ====================
// 此文件包含从 wx01351a762d0efdf5 提取的 SHA-512 算法实现
// 检测位置: 行 21781-21793
// 变量名: a
// 检测源: dynamic-function
