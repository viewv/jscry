// Google Closure Library 兼容层
const goog = {
    global: (function () {
        if (typeof globalThis !== 'undefined') return globalThis;
        if (typeof window !== 'undefined') return window;
        if (typeof global !== 'undefined') return global;
        if (typeof self !== 'undefined') return self;
        throw new Error('Unable to locate global object');
    })(),

    DEBUG: false,

    // 模块系统
    provide: function (name) {
        const parts = name.split('.');
        let current = goog.global;
        for (let i = 0; i < parts.length; i++) {
            if (!current[parts[i]]) {
                current[parts[i]] = {};
            }
            current = current[parts[i]];
        }
    },

    require: function (name) {
        // 在webpack环境中，依赖通过ES6模块处理
        return true;
    },

    requireType: function (name) {
        return true;
    },

    define: function (name, defaultValue) {
        return defaultValue;
    },

    // 抽象方法
    abstractMethod: function () {
        throw new Error('Abstract method not implemented');
    },

    // 断言系统
    asserts: {
        assert: function (condition, message) {
            if (!condition) {
                throw new Error(message || 'Assertion failed');
            }
        }
    },

    // 异步异常
    async: {
        throwException: function (exception) {
            setTimeout(() => { throw exception; }, 0);
        }
    }
};

// 导出到全局
if (typeof module !== 'undefined' && module.exports) {
    module.exports = goog;
} else {
    goog.global.goog = goog;
}