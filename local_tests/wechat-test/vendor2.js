(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "common/vendor" ], [ 
/* 0 */
/* 1 */
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ 
/* 1 */
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ , function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.createApp = createApp;
    exports.createComponent = createComponent;
    exports.createPage = createPage;
    exports.default = void 0;
    var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly) symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
            keys.push.apply(keys, symbols);
        }
        return keys;
    }
    function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            if (i % 2) {
                ownKeys(Object(source), true).forEach(function(key) {
                    _defineProperty(target, key, source[key]);
                });
            } else if (Object.getOwnPropertyDescriptors) {
                Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
            } else {
                ownKeys(Object(source)).forEach(function(key) {
                    Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                });
            }
        }
        return target;
    }
    function _slicedToArray(arr, i) {
        return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
    }
    function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _iterableToArrayLimit(arr, i) {
        if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = undefined;
        try {
            for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                _arr.push(_s.value);
                if (i && _arr.length === i) break;
            }
        } catch (err) {
            err = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(err);
            _d = true;
            _e = err;
        } finally {
            try {
                if (!_n && _i["return"] != null) _i["return"]();
            } finally {
                if (_d) throw _e;
            }
        }
        return _arr;
    }
    function _arrayWithHoles(arr) {
        if (Array.isArray(arr)) return arr;
    }
    function _defineProperty(obj, key, value) {
        if (key in obj) {
            Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
            });
        } else {
            obj[key] = value;
        }
        return obj;
    }
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        return Constructor;
    }
    function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
    }
    function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }
    function _iterableToArray(iter) {
        if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
    }
    function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) return _arrayLikeToArray(arr);
    }
    function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++) {
            arr2[i] = arr[i];
        }
        return arr2;
    }
    var _toString = Object.prototype.toString;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    function isFn(fn) {
        return typeof fn === "function";
    }
    function isStr(str) {
        return typeof str === "string";
    }
    function isPlainObject(obj) {
        return _toString.call(obj) === "[object Object]";
    }
    function hasOwn(obj, key) {
        return hasOwnProperty.call(obj, key);
    }
    function noop() {}
    /**
                    * Create a cached version of a pure function.
                    */    function cached(fn) {
        var cache = Object.create(null);
        return function cachedFn(str) {
            var hit = cache[str];
            return hit || (cache[str] = fn(str));
        };
    }
    /**
   * Camelize a hyphen-delimited string.
   */    var camelizeRE = /-(\w)/g;
    var camelize = cached(function(str) {
        return str.replace(camelizeRE, function(_, c) {
            return c ? c.toUpperCase() : "";
        });
    });
    var HOOKS = [ "invoke", "success", "fail", "complete", "returnValue" ];
    var globalInterceptors = {};
    var scopedInterceptors = {};
    function mergeHook(parentVal, childVal) {
        var res = childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [ childVal ] : parentVal;
        return res ? dedupeHooks(res) : res;
    }
    function dedupeHooks(hooks) {
        var res = [];
        for (var i = 0; i < hooks.length; i++) {
            if (res.indexOf(hooks[i]) === -1) {
                res.push(hooks[i]);
            }
        }
        return res;
    }
    function removeHook(hooks, hook) {
        var index = hooks.indexOf(hook);
        if (index !== -1) {
            hooks.splice(index, 1);
        }
    }
    function mergeInterceptorHook(interceptor, option) {
        Object.keys(option).forEach(function(hook) {
            if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
                interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
            }
        });
    }
    function removeInterceptorHook(interceptor, option) {
        if (!interceptor || !option) {
            return;
        }
        Object.keys(option).forEach(function(hook) {
            if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
                removeHook(interceptor[hook], option[hook]);
            }
        });
    }
    function addInterceptor(method, option) {
        if (typeof method === "string" && isPlainObject(option)) {
            mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
        } else if (isPlainObject(method)) {
            mergeInterceptorHook(globalInterceptors, method);
        }
    }
    function removeInterceptor(method, option) {
        if (typeof method === "string") {
            if (isPlainObject(option)) {
                removeInterceptorHook(scopedInterceptors[method], option);
            } else {
                delete scopedInterceptors[method];
            }
        } else if (isPlainObject(method)) {
            removeInterceptorHook(globalInterceptors, method);
        }
    }
    function wrapperHook(hook) {
        return function(data) {
            return hook(data) || data;
        };
    }
    function isPromise(obj) {
        return !!obj && (typeof obj === "object" || typeof obj === "function") && typeof obj.then === "function";
    }
    function queue(hooks, data) {
        var promise = false;
        for (var i = 0; i < hooks.length; i++) {
            var hook = hooks[i];
            if (promise) {
                promise = Promise.resolve(wrapperHook(hook));
            } else {
                var res = hook(data);
                if (isPromise(res)) {
                    promise = Promise.resolve(res);
                }
                if (res === false) {
                    return {
                        then: function then() {}
                    };
                }
            }
        }
        return promise || {
            then: function then(callback) {
                return callback(data);
            }
        };
    }
    function wrapperOptions(interceptor) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        [ "success", "fail", "complete" ].forEach(function(name) {
            if (Array.isArray(interceptor[name])) {
                var oldCallback = options[name];
                options[name] = function callbackInterceptor(res) {
                    queue(interceptor[name], res).then(function(res) {
                        /* eslint-disable no-mixed-operators */
                        return isFn(oldCallback) && oldCallback(res) || res;
                    });
                };
            }
        });
        return options;
    }
    function wrapperReturnValue(method, returnValue) {
        var returnValueHooks = [];
        if (Array.isArray(globalInterceptors.returnValue)) {
            returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(globalInterceptors.returnValue));
        }
        var interceptor = scopedInterceptors[method];
        if (interceptor && Array.isArray(interceptor.returnValue)) {
            returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(interceptor.returnValue));
        }
        returnValueHooks.forEach(function(hook) {
            returnValue = hook(returnValue) || returnValue;
        });
        return returnValue;
    }
    function getApiInterceptorHooks(method) {
        var interceptor = Object.create(null);
        Object.keys(globalInterceptors).forEach(function(hook) {
            if (hook !== "returnValue") {
                interceptor[hook] = globalInterceptors[hook].slice();
            }
        });
        var scopedInterceptor = scopedInterceptors[method];
        if (scopedInterceptor) {
            Object.keys(scopedInterceptor).forEach(function(hook) {
                if (hook !== "returnValue") {
                    interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
                }
            });
        }
        return interceptor;
    }
    function invokeApi(method, api, options) {
        for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
            params[_key - 3] = arguments[_key];
        }
        var interceptor = getApiInterceptorHooks(method);
        if (interceptor && Object.keys(interceptor).length) {
            if (Array.isArray(interceptor.invoke)) {
                var res = queue(interceptor.invoke, options);
                return res.then(function(options) {
                    return api.apply(void 0, [ wrapperOptions(interceptor, options) ].concat(params));
                });
            } else {
                return api.apply(void 0, [ wrapperOptions(interceptor, options) ].concat(params));
            }
        }
        return api.apply(void 0, [ options ].concat(params));
    }
    var promiseInterceptor = {
        returnValue: function returnValue(res) {
            if (!isPromise(res)) {
                return res;
            }
            return res.then(function(res) {
                return res[1];
            }).catch(function(res) {
                return res[0];
            });
        }
    };
    var SYNC_API_RE = /^\$|sendNativeEvent|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/;
    var CONTEXT_API_RE = /^create|Manager$/;
    // Context例外情况
        var CONTEXT_API_RE_EXC = [ "createBLEConnection" ];
    // 同步例外情况
        var ASYNC_API = [ "createBLEConnection" ];
    var CALLBACK_API_RE = /^on|^off/;
    function isContextApi(name) {
        return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
    }
    function isSyncApi(name) {
        return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
    }
    function isCallbackApi(name) {
        return CALLBACK_API_RE.test(name) && name !== "onPush";
    }
    function handlePromise(promise) {
        return promise.then(function(data) {
            return [ null, data ];
        }).catch(function(err) {
            return [ err ];
        });
    }
    function shouldPromise(name) {
        if (isContextApi(name) || isSyncApi(name) || isCallbackApi(name)) {
            return false;
        }
        return true;
    }
    /* eslint-disable no-extend-native */    if (!Promise.prototype.finally) {
        Promise.prototype.finally = function(callback) {
            var promise = this.constructor;
            return this.then(function(value) {
                return promise.resolve(callback()).then(function() {
                    return value;
                });
            }, function(reason) {
                return promise.resolve(callback()).then(function() {
                    throw reason;
                });
            });
        };
    }
    function promisify(name, api) {
        if (!shouldPromise(name)) {
            return api;
        }
        return function promiseApi() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                params[_key2 - 1] = arguments[_key2];
            }
            if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
                return wrapperReturnValue(name, invokeApi.apply(void 0, [ name, api, options ].concat(params)));
            }
            return wrapperReturnValue(name, handlePromise(new Promise(function(resolve, reject) {
                invokeApi.apply(void 0, [ name, api, Object.assign({}, options, {
                    success: resolve,
                    fail: reject
                }) ].concat(params));
            })));
        };
    }
    var EPS = 1e-4;
    var BASE_DEVICE_WIDTH = 750;
    var isIOS = false;
    var deviceWidth = 0;
    var deviceDPR = 0;
    function checkDeviceWidth() {
        var _wx$getSystemInfoSync = wx.getSystemInfoSync(), platform = _wx$getSystemInfoSync.platform, pixelRatio = _wx$getSystemInfoSync.pixelRatio, windowWidth = _wx$getSystemInfoSync.windowWidth;
        // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni
                deviceWidth = windowWidth;
        deviceDPR = pixelRatio;
        isIOS = platform === "ios";
    }
    function upx2px(number, newDeviceWidth) {
        if (deviceWidth === 0) {
            checkDeviceWidth();
        }
        number = Number(number);
        if (number === 0) {
            return 0;
        }
        var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
        if (result < 0) {
            result = -result;
        }
        result = Math.floor(result + EPS);
        if (result === 0) {
            if (deviceDPR === 1 || !isIOS) {
                result = 1;
            } else {
                result = .5;
            }
        }
        return number < 0 ? -result : result;
    }
    var interceptors = {
        promiseInterceptor: promiseInterceptor
    };
    var baseApi = /* */ Object.freeze({
        __proto__: null,
        upx2px: upx2px,
        addInterceptor: addInterceptor,
        removeInterceptor: removeInterceptor,
        interceptors: interceptors
    });
    var EventChannel = /* */ function() {
        function EventChannel(id, events) {
            var _this = this;
            _classCallCheck(this, EventChannel);
            this.id = id;
            this.listener = {};
            this.emitCache = {};
            if (events) {
                Object.keys(events).forEach(function(name) {
                    _this.on(name, events[name]);
                });
            }
        }
        _createClass(EventChannel, [ {
            key: "emit",
            value: function emit(eventName) {
                for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
                    args[_key3 - 1] = arguments[_key3];
                }
                var fns = this.listener[eventName];
                if (!fns) {
                    return (this.emitCache[eventName] || (this.emitCache[eventName] = [])).push(args);
                }
                fns.forEach(function(opt) {
                    opt.fn.apply(opt.fn, args);
                });
                this.listener[eventName] = fns.filter(function(opt) {
                    return opt.type !== "once";
                });
            }
        }, {
            key: "on",
            value: function on(eventName, fn) {
                this._addListener(eventName, "on", fn);
                this._clearCache(eventName);
            }
        }, {
            key: "once",
            value: function once(eventName, fn) {
                this._addListener(eventName, "once", fn);
                this._clearCache(eventName);
            }
        }, {
            key: "off",
            value: function off(eventName, fn) {
                var fns = this.listener[eventName];
                if (!fns) {
                    return;
                }
                if (fn) {
                    for (var i = 0; i < fns.length; ) {
                        if (fns[i].fn === fn) {
                            fns.splice(i, 1);
                            i--;
                        }
                        i++;
                    }
                } else {
                    delete this.listener[eventName];
                }
            }
        }, {
            key: "_clearCache",
            value: function _clearCache(eventName) {
                var cacheArgs = this.emitCache[eventName];
                if (cacheArgs) {
                    for (;cacheArgs.length > 0; ) {
                        this.emit.apply(this, [ eventName ].concat(cacheArgs.shift()));
                    }
                }
            }
        }, {
            key: "_addListener",
            value: function _addListener(eventName, type, fn) {
                (this.listener[eventName] || (this.listener[eventName] = [])).push({
                    fn: fn,
                    type: type
                });
            }
        } ]);
        return EventChannel;
    }();
    var eventChannels = {};
    var eventChannelStack = [];
    var id = 0;
    function initEventChannel(events) {
        var cache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        id++;
        var eventChannel = new EventChannel(id, events);
        if (cache) {
            eventChannels[id] = eventChannel;
            eventChannelStack.push(eventChannel);
        }
        return eventChannel;
    }
    function getEventChannel(id) {
        if (id) {
            var eventChannel = eventChannels[id];
            delete eventChannels[id];
            return eventChannel;
        }
        return eventChannelStack.shift();
    }
    var navigateTo = {
        args: function args(fromArgs, toArgs) {
            var id = initEventChannel(fromArgs.events).id;
            if (fromArgs.url) {
                fromArgs.url = fromArgs.url + (fromArgs.url.indexOf("?") === -1 ? "?" : "&") + "__id__=" + id;
            }
        },
        returnValue: function returnValue(fromRes, toRes) {
            fromRes.eventChannel = getEventChannel();
        }
    };
    function findExistsPageIndex(url) {
        var pages = getCurrentPages();
        var len = pages.length;
        while (len--) {
            var page = pages[len];
            if (page.$page && page.$page.fullPath === url) {
                return len;
            }
        }
        return -1;
    }
    var redirectTo = {
        name: function name(fromArgs) {
            if (fromArgs.exists === "back" && fromArgs.delta) {
                return "navigateBack";
            }
            return "redirectTo";
        },
        args: function args(fromArgs) {
            if (fromArgs.exists === "back" && fromArgs.url) {
                var existsPageIndex = findExistsPageIndex(fromArgs.url);
                if (existsPageIndex !== -1) {
                    var delta = getCurrentPages().length - 1 - existsPageIndex;
                    if (delta > 0) {
                        fromArgs.delta = delta;
                    }
                }
            }
        }
    };
    var previewImage = {
        args: function args(fromArgs) {
            var currentIndex = parseInt(fromArgs.current);
            if (isNaN(currentIndex)) {
                return;
            }
            var urls = fromArgs.urls;
            if (!Array.isArray(urls)) {
                return;
            }
            var len = urls.length;
            if (!len) {
                return;
            }
            if (currentIndex < 0) {
                currentIndex = 0;
            } else if (currentIndex >= len) {
                currentIndex = len - 1;
            }
            if (currentIndex > 0) {
                fromArgs.current = urls[currentIndex];
                fromArgs.urls = urls.filter(function(item, index) {
                    return index < currentIndex ? item !== urls[currentIndex] : true;
                });
            } else {
                fromArgs.current = urls[0];
            }
            return {
                indicator: false,
                loop: false
            };
        }
    };
    function addSafeAreaInsets(result) {
        if (result.safeArea) {
            var safeArea = result.safeArea;
            result.safeAreaInsets = {
                top: safeArea.top,
                left: safeArea.left,
                right: result.windowWidth - safeArea.right,
                bottom: result.windowHeight - safeArea.bottom
            };
        }
    }
    var protocols = {
        redirectTo: redirectTo,
        navigateTo: navigateTo,
        previewImage: previewImage,
        getSystemInfo: {
            returnValue: addSafeAreaInsets
        },
        getSystemInfoSync: {
            returnValue: addSafeAreaInsets
        }
    };
    var todos = [ "vibrate", "preloadPage", "unPreloadPage", "loadSubPackage" ];
    var canIUses = [];
    var CALLBACKS = [ "success", "fail", "cancel", "complete" ];
    function processCallback(methodName, method, returnValue) {
        return function(res) {
            return method(processReturnValue(methodName, res, returnValue));
        };
    }
    function processArgs(methodName, fromArgs) {
        var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
        var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
        if (isPlainObject(fromArgs)) {
            // 一般 api 的参数解析
            var toArgs = keepFromArgs === true ? fromArgs : {};
            // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
                        if (isFn(argsOption)) {
                argsOption = argsOption(fromArgs, toArgs) || {};
            }
            for (var key in fromArgs) {
                if (hasOwn(argsOption, key)) {
                    var keyOption = argsOption[key];
                    if (isFn(keyOption)) {
                        keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
                    }
                    if (!keyOption) {
                        // 不支持的参数
                        console.warn("微信小程序 ".concat(methodName, "暂不支持").concat(key));
                    } else if (isStr(keyOption)) {
                        // 重写参数 key
                        toArgs[keyOption] = fromArgs[key];
                    } else if (isPlainObject(keyOption)) {
                        // {name:newName,value:value}可重新指定参数 key:value
                        toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
                    }
                } else if (CALLBACKS.indexOf(key) !== -1) {
                    if (isFn(fromArgs[key])) {
                        toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
                    }
                } else {
                    if (!keepFromArgs) {
                        toArgs[key] = fromArgs[key];
                    }
                }
            }
            return toArgs;
        } else if (isFn(fromArgs)) {
            fromArgs = processCallback(methodName, fromArgs, returnValue);
        }
        return fromArgs;
    }
    function processReturnValue(methodName, res, returnValue) {
        var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        if (isFn(protocols.returnValue)) {
            // 处理通用 returnValue
            res = protocols.returnValue(methodName, res);
        }
        return processArgs(methodName, res, returnValue, {}, keepReturnValue);
    }
    function wrapper(methodName, method) {
        if (hasOwn(protocols, methodName)) {
            var protocol = protocols[methodName];
            if (!protocol) {
                // 暂不支持的 api
                return function() {
                    console.error("微信小程序 暂不支持".concat(methodName));
                };
            }
            return function(arg1, arg2) {
                // 目前 api 最多两个参数
                var options = protocol;
                if (isFn(protocol)) {
                    options = protocol(arg1);
                }
                arg1 = processArgs(methodName, arg1, options.args, options.returnValue);
                var args = [ arg1 ];
                if (typeof arg2 !== "undefined") {
                    args.push(arg2);
                }
                if (isFn(options.name)) {
                    methodName = options.name(arg1);
                } else if (isStr(options.name)) {
                    methodName = options.name;
                }
                var returnValue = wx[methodName].apply(wx, args);
                if (isSyncApi(methodName)) {
                    // 同步 api
                    return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
                }
                return returnValue;
            };
        }
        return method;
    }
    var todoApis = Object.create(null);
    var TODOS = [ "onTabBarMidButtonTap", "subscribePush", "unsubscribePush", "onPush", "offPush", "share" ];
    function createTodoApi(name) {
        return function todoApi(_ref) {
            var fail = _ref.fail, complete = _ref.complete;
            var res = {
                errMsg: "".concat(name, ":fail:暂不支持 ").concat(name, " 方法")
            };
            isFn(fail) && fail(res);
            isFn(complete) && complete(res);
        };
    }
    TODOS.forEach(function(name) {
        todoApis[name] = createTodoApi(name);
    });
    var providers = {
        oauth: [ "weixin" ],
        share: [ "weixin" ],
        payment: [ "wxpay" ],
        push: [ "weixin" ]
    };
    function getProvider(_ref2) {
        var service = _ref2.service, success = _ref2.success, fail = _ref2.fail, complete = _ref2.complete;
        var res = false;
        if (providers[service]) {
            res = {
                errMsg: "getProvider:ok",
                service: service,
                provider: providers[service]
            };
            isFn(success) && success(res);
        } else {
            res = {
                errMsg: "getProvider:fail:服务[" + service + "]不存在"
            };
            isFn(fail) && fail(res);
        }
        isFn(complete) && complete(res);
    }
    var extraApi = /* */ Object.freeze({
        __proto__: null,
        getProvider: getProvider
    });
    var getEmitter = function() {
        var Emitter;
        return function getUniEmitter() {
            if (!Emitter) {
                Emitter = new _vue.default();
            }
            return Emitter;
        };
    }();
    function apply(ctx, method, args) {
        return ctx[method].apply(ctx, args);
    }
    function $on() {
        return apply(getEmitter(), "$on", Array.prototype.slice.call(arguments));
    }
    function $off() {
        return apply(getEmitter(), "$off", Array.prototype.slice.call(arguments));
    }
    function $once() {
        return apply(getEmitter(), "$once", Array.prototype.slice.call(arguments));
    }
    function $emit() {
        return apply(getEmitter(), "$emit", Array.prototype.slice.call(arguments));
    }
    var eventApi = /* */ Object.freeze({
        __proto__: null,
        $on: $on,
        $off: $off,
        $once: $once,
        $emit: $emit
    });
    var api = /* */ Object.freeze({
        __proto__: null
    });
    var MPPage = Page;
    var MPComponent = Component;
    var customizeRE = /:/g;
    var customize = cached(function(str) {
        return camelize(str.replace(customizeRE, "-"));
    });
    function initTriggerEvent(mpInstance) {
        {
            if (!wx.canIUse("nextTick")) {
                return;
            }
        }
        var oldTriggerEvent = mpInstance.triggerEvent;
        mpInstance.triggerEvent = function(event) {
            for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
                args[_key4 - 1] = arguments[_key4];
            }
            return oldTriggerEvent.apply(mpInstance, [ customize(event) ].concat(args));
        };
    }
    function initHook(name, options) {
        var oldHook = options[name];
        if (!oldHook) {
            options[name] = function() {
                initTriggerEvent(this);
            };
        } else {
            options[name] = function() {
                initTriggerEvent(this);
                for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
                    args[_key5] = arguments[_key5];
                }
                return oldHook.apply(this, args);
            };
        }
    }
    Page = function Page() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        initHook("onLoad", options);
        return MPPage(options);
    };
    Component = function Component() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        initHook("created", options);
        return MPComponent(options);
    };
    var PAGE_EVENT_HOOKS = [ "onPullDownRefresh", "onReachBottom", "onAddToFavorites", "onShareTimeline", "onShareAppMessage", "onPageScroll", "onResize", "onTabItemTap" ];
    function initMocks(vm, mocks) {
        var mpInstance = vm.$mp[vm.mpType];
        mocks.forEach(function(mock) {
            if (hasOwn(mpInstance, mock)) {
                vm[mock] = mpInstance[mock];
            }
        });
    }
    function hasHook(hook, vueOptions) {
        if (!vueOptions) {
            return true;
        }
        if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
            return true;
        }
        vueOptions = vueOptions.default || vueOptions;
        if (isFn(vueOptions)) {
            if (isFn(vueOptions.extendOptions[hook])) {
                return true;
            }
            if (vueOptions.super && vueOptions.super.options && Array.isArray(vueOptions.super.options[hook])) {
                return true;
            }
            return false;
        }
        if (isFn(vueOptions[hook])) {
            return true;
        }
        var mixins = vueOptions.mixins;
        if (Array.isArray(mixins)) {
            return !!mixins.find(function(mixin) {
                return hasHook(hook, mixin);
            });
        }
    }
    function initHooks(mpOptions, hooks, vueOptions) {
        hooks.forEach(function(hook) {
            if (hasHook(hook, vueOptions)) {
                mpOptions[hook] = function(args) {
                    return this.$vm && this.$vm.__call_hook(hook, args);
                };
            }
        });
    }
    function initVueComponent(Vue, vueOptions) {
        vueOptions = vueOptions.default || vueOptions;
        var VueComponent;
        if (isFn(vueOptions)) {
            VueComponent = vueOptions;
        } else {
            VueComponent = Vue.extend(vueOptions);
        }
        vueOptions = VueComponent.options;
        return [ VueComponent, vueOptions ];
    }
    function initSlots(vm, vueSlots) {
        if (Array.isArray(vueSlots) && vueSlots.length) {
            var $slots = Object.create(null);
            vueSlots.forEach(function(slotName) {
                $slots[slotName] = true;
            });
            vm.$scopedSlots = vm.$slots = $slots;
        }
    }
    function initVueIds(vueIds, mpInstance) {
        vueIds = (vueIds || "").split(",");
        var len = vueIds.length;
        if (len === 1) {
            mpInstance._$vueId = vueIds[0];
        } else if (len === 2) {
            mpInstance._$vueId = vueIds[0];
            mpInstance._$vuePid = vueIds[1];
        }
    }
    function initData(vueOptions, context) {
        var data = vueOptions.data || {};
        var methods = vueOptions.methods || {};
        if (typeof data === "function") {
            try {
                data = data.call(context);
                // 支持 Vue.prototype 上挂的数据
                        } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                if (Object({
                    VUE_APP_PLATFORM: "mp-weixin",
                    NODE_ENV: "development",
                    BASE_URL: "/"
                }).VUE_APP_DEBUG) {
                    console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。", data);
                }
            }
        } else {
            try {
                // 对 data 格式化
                data = JSON.parse(JSON.stringify(data));
            } catch (e) {}
        }
        if (!isPlainObject(data)) {
            data = {};
        }
        Object.keys(methods).forEach(function(methodName) {
            if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
                data[methodName] = methods[methodName];
            }
        });
        return data;
    }
    var PROP_TYPES = [ String, Number, Boolean, Object, Array, null ];
    function createObserver(name) {
        return function observer(newVal, oldVal) {
            if (this.$vm) {
                this.$vm[name] = newVal;
                // 为了触发其他非 render watcher
                        }
        };
    }
    function initBehaviors(vueOptions, initBehavior) {
        var vueBehaviors = vueOptions.behaviors;
        var vueExtends = vueOptions.extends;
        var vueMixins = vueOptions.mixins;
        var vueProps = vueOptions.props;
        if (!vueProps) {
            vueOptions.props = vueProps = [];
        }
        var behaviors = [];
        if (Array.isArray(vueBehaviors)) {
            vueBehaviors.forEach(function(behavior) {
                behaviors.push(behavior.replace("uni://", "wx".concat("://")));
                if (behavior === "uni://form-field") {
                    if (Array.isArray(vueProps)) {
                        vueProps.push("name");
                        vueProps.push("value");
                    } else {
                        vueProps.name = {
                            type: String,
                            default: ""
                        };
                        vueProps.value = {
                            type: [ String, Number, Boolean, Array, Object, Date ],
                            default: ""
                        };
                    }
                }
            });
        }
        if (isPlainObject(vueExtends) && vueExtends.props) {
            behaviors.push(initBehavior({
                properties: initProperties(vueExtends.props, true)
            }));
        }
        if (Array.isArray(vueMixins)) {
            vueMixins.forEach(function(vueMixin) {
                if (isPlainObject(vueMixin) && vueMixin.props) {
                    behaviors.push(initBehavior({
                        properties: initProperties(vueMixin.props, true)
                    }));
                }
            });
        }
        return behaviors;
    }
    function parsePropType(key, type, defaultValue, file) {
        // [String]=>String
        if (Array.isArray(type) && type.length === 1) {
            return type[0];
        }
        return type;
    }
    function initProperties(props) {
        var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
        var properties = {};
        if (!isBehavior) {
            properties.vueId = {
                type: String,
                value: ""
            };
            // 用于字节跳动小程序模拟抽象节点
                        properties.generic = {
                type: Object,
                value: null
            };
            properties.vueSlots = {
                // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
                type: null,
                value: [],
                observer: function observer(newVal, oldVal) {
                    var $slots = Object.create(null);
                    newVal.forEach(function(slotName) {
                        $slots[slotName] = true;
                    });
                    this.setData({
                        $slots: $slots
                    });
                }
            };
        }
        if (Array.isArray(props)) {
            // ['title']
            props.forEach(function(key) {
                properties[key] = {
                    type: null,
                    observer: createObserver(key)
                };
            });
        } else if (isPlainObject(props)) {
            // {title:{type:String,default:''},content:String}
            Object.keys(props).forEach(function(key) {
                var opts = props[key];
                if (isPlainObject(opts)) {
                    // title:{type:String,default:''}
                    var value = opts.default;
                    if (isFn(value)) {
                        value = value();
                    }
                    opts.type = parsePropType(key, opts.type);
                    properties[key] = {
                        type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
                        value: value,
                        observer: createObserver(key)
                    };
                } else {
                    // content:String
                    var type = parsePropType(key, opts);
                    properties[key] = {
                        type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
                        observer: createObserver(key)
                    };
                }
            });
        }
        return properties;
    }
    function wrapper$1(event) {
        // TODO 又得兼容 mpvue 的 mp 对象
        try {
            event.mp = JSON.parse(JSON.stringify(event));
        } catch (e) {}
        event.stopPropagation = noop;
        event.preventDefault = noop;
        event.target = event.target || {};
        if (!hasOwn(event, "detail")) {
            event.detail = {};
        }
        if (hasOwn(event, "markerId")) {
            event.detail = typeof event.detail === "object" ? event.detail : {};
            event.detail.markerId = event.markerId;
        }
        if (isPlainObject(event.detail)) {
            event.target = Object.assign({}, event.target, event.detail);
        }
        return event;
    }
    function getExtraValue(vm, dataPathsArray) {
        var context = vm;
        dataPathsArray.forEach(function(dataPathArray) {
            var dataPath = dataPathArray[0];
            var value = dataPathArray[2];
            if (dataPath || typeof value !== "undefined") {
                // ['','',index,'disable']
                var propPath = dataPathArray[1];
                var valuePath = dataPathArray[3];
                var vFor;
                if (Number.isInteger(dataPath)) {
                    vFor = dataPath;
                } else if (!dataPath) {
                    vFor = context;
                } else if (typeof dataPath === "string" && dataPath) {
                    if (dataPath.indexOf("#s#") === 0) {
                        vFor = dataPath.substr(3);
                    } else {
                        vFor = vm.__get_value(dataPath, context);
                    }
                }
                if (Number.isInteger(vFor)) {
                    context = value;
                } else if (!propPath) {
                    context = vFor[value];
                } else {
                    if (Array.isArray(vFor)) {
                        context = vFor.find(function(vForItem) {
                            return vm.__get_value(propPath, vForItem) === value;
                        });
                    } else if (isPlainObject(vFor)) {
                        context = Object.keys(vFor).find(function(vForKey) {
                            return vm.__get_value(propPath, vFor[vForKey]) === value;
                        });
                    } else {
                        console.error("v-for 暂不支持循环数据：", vFor);
                    }
                }
                if (valuePath) {
                    context = vm.__get_value(valuePath, context);
                }
            }
        });
        return context;
    }
    function processEventExtra(vm, extra, event) {
        var extraObj = {};
        if (Array.isArray(extra) && extra.length) {
            /**
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *'test'
                                              */
            extra.forEach(function(dataPath, index) {
                if (typeof dataPath === "string") {
                    if (!dataPath) {
                        // model,prop.sync
                        extraObj["$" + index] = vm;
                    } else {
                        if (dataPath === "$event") {
                            // $event
                            extraObj["$" + index] = event;
                        } else if (dataPath === "arguments") {
                            if (event.detail && event.detail.__args__) {
                                extraObj["$" + index] = event.detail.__args__;
                            } else {
                                extraObj["$" + index] = [ event ];
                            }
                        } else if (dataPath.indexOf("$event.") === 0) {
                            // $event.target.value
                            extraObj["$" + index] = vm.__get_value(dataPath.replace("$event.", ""), event);
                        } else {
                            extraObj["$" + index] = vm.__get_value(dataPath);
                        }
                    }
                } else {
                    extraObj["$" + index] = getExtraValue(vm, dataPath);
                }
            });
        }
        return extraObj;
    }
    function getObjByArray(arr) {
        var obj = {};
        for (var i = 1; i < arr.length; i++) {
            var element = arr[i];
            obj[element[0]] = element[1];
        }
        return obj;
    }
    function processEventArgs(vm, event) {
        var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
        var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
        var isCustom = arguments.length > 4 ? arguments[4] : undefined;
        var methodName = arguments.length > 5 ? arguments[5] : undefined;
        var isCustomMPEvent = false;
        // wxcomponent 组件，传递原始 event 对象
                if (isCustom) {
            // 自定义事件
            isCustomMPEvent = event.currentTarget && event.currentTarget.dataset && event.currentTarget.dataset.comType === "wx";
            if (!args.length) {
                // 无参数，直接传入 event 或 detail 数组
                if (isCustomMPEvent) {
                    return [ event ];
                }
                return event.detail.__args__ || event.detail;
            }
        }
        var extraObj = processEventExtra(vm, extra, event);
        var ret = [];
        args.forEach(function(arg) {
            if (arg === "$event") {
                if (methodName === "__set_model" && !isCustom) {
                    // input v-model value
                    ret.push(event.target.value);
                } else {
                    if (isCustom && !isCustomMPEvent) {
                        ret.push(event.detail.__args__[0]);
                    } else {
                        // wxcomponent 组件或内置组件
                        ret.push(event);
                    }
                }
            } else {
                if (Array.isArray(arg) && arg[0] === "o") {
                    ret.push(getObjByArray(arg));
                } else if (typeof arg === "string" && hasOwn(extraObj, arg)) {
                    ret.push(extraObj[arg]);
                } else {
                    ret.push(arg);
                }
            }
        });
        return ret;
    }
    var ONCE = "~";
    var CUSTOM = "^";
    function isMatchEventType(eventType, optType) {
        return eventType === optType || optType === "regionchange" && (eventType === "begin" || eventType === "end");
    }
    function getContextVm(vm) {
        var $parent = vm.$parent;
        // 父组件是 scoped slots 或者其他自定义组件时继续查找
                while ($parent && $parent.$parent && ($parent.$options.generic || $parent.$parent.$options.generic || $parent.$scope._$vuePid)) {
            $parent = $parent.$parent;
        }
        return $parent && $parent.$parent;
    }
    function handleEvent(event) {
        var _this2 = this;
        event = wrapper$1(event);
        // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
                var dataset = (event.currentTarget || event.target).dataset;
        if (!dataset) {
            return console.warn("事件信息不存在");
        }
        var eventOpts = dataset.eventOpts || dataset["event-opts"];
        // 支付宝 web-view 组件 dataset 非驼峰
                if (!eventOpts) {
            return console.warn("事件信息不存在");
        }
        // [['handle',[1,2,a]],['handle1',[1,2,a]]]
                var eventType = event.type;
        var ret = [];
        eventOpts.forEach(function(eventOpt) {
            var type = eventOpt[0];
            var eventsArray = eventOpt[1];
            var isCustom = type.charAt(0) === CUSTOM;
            type = isCustom ? type.slice(1) : type;
            var isOnce = type.charAt(0) === ONCE;
            type = isOnce ? type.slice(1) : type;
            if (eventsArray && isMatchEventType(eventType, type)) {
                eventsArray.forEach(function(eventArray) {
                    var methodName = eventArray[0];
                    if (methodName) {
                        var handlerCtx = _this2.$vm;
                        if (handlerCtx.$options.generic) {
                            // mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
                            handlerCtx = getContextVm(handlerCtx) || handlerCtx;
                        }
                        if (methodName === "$emit") {
                            handlerCtx.$emit.apply(handlerCtx, processEventArgs(_this2.$vm, event, eventArray[1], eventArray[2], isCustom, methodName));
                            return;
                        }
                        var handler = handlerCtx[methodName];
                        if (!isFn(handler)) {
                            throw new Error(" _vm.".concat(methodName, " is not a function"));
                        }
                        if (isOnce) {
                            if (handler.once) {
                                return;
                            }
                            handler.once = true;
                        }
                        var params = processEventArgs(_this2.$vm, event, eventArray[1], eventArray[2], isCustom, methodName);
                        // 参数尾部增加原始事件对象用于复杂表达式内获取额外数据
                        // eslint-disable-next-line no-sparse-arrays
                                                ret.push(handler.apply(handlerCtx, (Array.isArray(params) ? params : []).concat([ , , , , , , , , , , event ])));
                    }
                });
            }
        });
        if (eventType === "input" && ret.length === 1 && typeof ret[0] !== "undefined") {
            return ret[0];
        }
    }
    var hooks = [ "onShow", "onHide", "onError", "onPageNotFound", "onThemeChange", "onUnhandledRejection" ];
    function parseBaseApp(vm, _ref3) {
        var mocks = _ref3.mocks, initRefs = _ref3.initRefs;
        if (vm.$options.store) {
            _vue.default.prototype.$store = vm.$options.store;
        }
        _vue.default.prototype.mpHost = "mp-weixin";
        _vue.default.mixin({
            beforeCreate: function beforeCreate() {
                if (!this.$options.mpType) {
                    return;
                }
                this.mpType = this.$options.mpType;
                this.$mp = _defineProperty({
                    data: {}
                }, this.mpType, this.$options.mpInstance);
                this.$scope = this.$options.mpInstance;
                delete this.$options.mpType;
                delete this.$options.mpInstance;
                if (this.mpType !== "app") {
                    initRefs(this);
                    initMocks(this, mocks);
                }
            }
        });
        var appOptions = {
            onLaunch: function onLaunch(args) {
                if (this.$vm) {
                    // 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
                    return;
                }
                {
                    if (!wx.canIUse("nextTick")) {
                        // 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
                        console.error("当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上");
                    }
                }
                this.$vm = vm;
                this.$vm.$mp = {
                    app: this
                };
                this.$vm.$scope = this;
                // vm 上也挂载 globalData
                                this.$vm.globalData = this.globalData;
                this.$vm._isMounted = true;
                this.$vm.__call_hook("mounted", args);
                this.$vm.__call_hook("onLaunch", args);
            }
        };
        // 兼容旧版本 globalData
                appOptions.globalData = vm.$options.globalData || {};
        // 将 methods 中的方法挂在 getApp() 中
                var methods = vm.$options.methods;
        if (methods) {
            Object.keys(methods).forEach(function(name) {
                appOptions[name] = methods[name];
            });
        }
        initHooks(appOptions, hooks);
        return appOptions;
    }
    var mocks = [ "__route__", "__wxExparserNodeId__", "__wxWebviewId__" ];
    function findVmByVueId(vm, vuePid) {
        var $children = vm.$children;
        // 优先查找直属(反向查找:https://github.com/dcloudio/uni-app/issues/1200)
                for (var i = $children.length - 1; i >= 0; i--) {
            var childVm = $children[i];
            if (childVm.$scope._$vueId === vuePid) {
                return childVm;
            }
        }
        // 反向递归查找
                var parentVm;
        for (var _i = $children.length - 1; _i >= 0; _i--) {
            parentVm = findVmByVueId($children[_i], vuePid);
            if (parentVm) {
                return parentVm;
            }
        }
    }
    function initBehavior(options) {
        return Behavior(options);
    }
    function isPage() {
        return !!this.route;
    }
    function initRelation(detail) {
        this.triggerEvent("__l", detail);
    }
    function initRefs(vm) {
        var mpInstance = vm.$scope;
        Object.defineProperty(vm, "$refs", {
            get: function get() {
                var $refs = {};
                var components = mpInstance.selectAllComponents(".vue-ref");
                components.forEach(function(component) {
                    var ref = component.dataset.ref;
                    $refs[ref] = component.$vm || component;
                });
                var forComponents = mpInstance.selectAllComponents(".vue-ref-in-for");
                forComponents.forEach(function(component) {
                    var ref = component.dataset.ref;
                    if (!$refs[ref]) {
                        $refs[ref] = [];
                    }
                    $refs[ref].push(component.$vm || component);
                });
                return $refs;
            }
        });
    }
    function handleLink(event) {
        var _ref4 = event.detail || event.value, vuePid = _ref4.vuePid, vueOptions = _ref4.vueOptions;
        // detail 是微信,value 是百度(dipatch)
                var parentVm;
        if (vuePid) {
            parentVm = findVmByVueId(this.$vm, vuePid);
        }
        if (!parentVm) {
            parentVm = this.$vm;
        }
        vueOptions.parent = parentVm;
    }
    function parseApp(vm) {
        return parseBaseApp(vm, {
            mocks: mocks,
            initRefs: initRefs
        });
    }
    function createApp(vm) {
        _vue.default.prototype.getOpenerEventChannel = function() {
            if (!this.__eventChannel__) {
                this.__eventChannel__ = new EventChannel();
            }
            return this.__eventChannel__;
        };
        var callHook = _vue.default.prototype.__call_hook;
        _vue.default.prototype.__call_hook = function(hook, args) {
            if (hook === "onLoad" && args && args.__id__) {
                this.__eventChannel__ = getEventChannel(args.__id__);
                delete args.__id__;
            }
            return callHook.call(this, hook, args);
        };
        App(parseApp(vm));
        return vm;
    }
    var encodeReserveRE = /[!'()*]/g;
    var encodeReserveReplacer = function encodeReserveReplacer(c) {
        return "%" + c.charCodeAt(0).toString(16);
    };
    var commaRE = /%2C/g;
    // fixed encodeURIComponent which is more conformant to RFC3986:
    // - escapes [!'()*]
    // - preserve commas
        var encode = function encode(str) {
        return encodeURIComponent(str).replace(encodeReserveRE, encodeReserveReplacer).replace(commaRE, ",");
    };
    function stringifyQuery(obj) {
        var encodeStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : encode;
        var res = obj ? Object.keys(obj).map(function(key) {
            var val = obj[key];
            if (val === undefined) {
                return "";
            }
            if (val === null) {
                return encodeStr(key);
            }
            if (Array.isArray(val)) {
                var result = [];
                val.forEach(function(val2) {
                    if (val2 === undefined) {
                        return;
                    }
                    if (val2 === null) {
                        result.push(encodeStr(key));
                    } else {
                        result.push(encodeStr(key) + "=" + encodeStr(val2));
                    }
                });
                return result.join("&");
            }
            return encodeStr(key) + "=" + encodeStr(val);
        }).filter(function(x) {
            return x.length > 0;
        }).join("&") : null;
        return res ? "?".concat(res) : "";
    }
    function parseBaseComponent(vueComponentOptions) {
        var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}, isPage = _ref5.isPage, initRelation = _ref5.initRelation;
        var _initVueComponent = initVueComponent(_vue.default, vueComponentOptions), _initVueComponent2 = _slicedToArray(_initVueComponent, 2), VueComponent = _initVueComponent2[0], vueOptions = _initVueComponent2[1];
        var options = _objectSpread({
            multipleSlots: true,
            addGlobalClass: true
        }, vueOptions.options || {});
        {
            // 微信 multipleSlots 部分情况有 bug，导致内容顺序错乱 如 u-list，提供覆盖选项
            if (vueOptions["mp-weixin"] && vueOptions["mp-weixin"].options) {
                Object.assign(options, vueOptions["mp-weixin"].options);
            }
        }
        var componentOptions = {
            options: options,
            data: initData(vueOptions, _vue.default.prototype),
            behaviors: initBehaviors(vueOptions, initBehavior),
            properties: initProperties(vueOptions.props, false, vueOptions.__file),
            lifetimes: {
                attached: function attached() {
                    var properties = this.properties;
                    var options = {
                        mpType: isPage.call(this) ? "page" : "component",
                        mpInstance: this,
                        propsData: properties
                    };
                    initVueIds(properties.vueId, this);
                    // 处理父子关系
                                        initRelation.call(this, {
                        vuePid: this._$vuePid,
                        vueOptions: options
                    });
                    // 初始化 vue 实例
                                        this.$vm = new VueComponent(options);
                    // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
                                        initSlots(this.$vm, properties.vueSlots);
                    // 触发首次 setData
                                        this.$vm.$mount();
                },
                ready: function ready() {
                    // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
                    // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
                    if (this.$vm) {
                        this.$vm._isMounted = true;
                        this.$vm.__call_hook("mounted");
                        this.$vm.__call_hook("onReady");
                    }
                },
                detached: function detached() {
                    this.$vm && this.$vm.$destroy();
                }
            },
            pageLifetimes: {
                show: function show(args) {
                    this.$vm && this.$vm.__call_hook("onPageShow", args);
                },
                hide: function hide() {
                    this.$vm && this.$vm.__call_hook("onPageHide");
                },
                resize: function resize(size) {
                    this.$vm && this.$vm.__call_hook("onPageResize", size);
                }
            },
            methods: {
                __l: handleLink,
                __e: handleEvent
            }
        };
        // externalClasses
                if (vueOptions.externalClasses) {
            componentOptions.externalClasses = vueOptions.externalClasses;
        }
        if (Array.isArray(vueOptions.wxsCallMethods)) {
            vueOptions.wxsCallMethods.forEach(function(callMethod) {
                componentOptions.methods[callMethod] = function(args) {
                    return this.$vm[callMethod](args);
                };
            });
        }
        if (isPage) {
            return componentOptions;
        }
        return [ componentOptions, VueComponent ];
    }
    function parseComponent(vueComponentOptions) {
        return parseBaseComponent(vueComponentOptions, {
            isPage: isPage,
            initRelation: initRelation
        });
    }
    var hooks$1 = [ "onShow", "onHide", "onUnload" ];
    hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);
    function parseBasePage(vuePageOptions, _ref6) {
        var isPage = _ref6.isPage, initRelation = _ref6.initRelation;
        var pageOptions = parseComponent(vuePageOptions);
        initHooks(pageOptions.methods, hooks$1, vuePageOptions);
        pageOptions.methods.onLoad = function(query) {
            this.options = query;
            var copyQuery = Object.assign({}, query);
            delete copyQuery.__id__;
            this.$page = {
                fullPath: "/" + (this.route || this.is) + stringifyQuery(copyQuery)
            };
            this.$vm.$mp.query = query;
            // 兼容 mpvue
                        this.$vm.__call_hook("onLoad", query);
        };
        return pageOptions;
    }
    function parsePage(vuePageOptions) {
        return parseBasePage(vuePageOptions, {
            isPage: isPage,
            initRelation: initRelation
        });
    }
    function createPage(vuePageOptions) {
        {
            return Component(parsePage(vuePageOptions));
        }
    }
    function createComponent(vueOptions) {
        {
            return Component(parseComponent(vueOptions));
        }
    }
    todos.forEach(function(todoApi) {
        protocols[todoApi] = false;
    });
    canIUses.forEach(function(canIUseApi) {
        var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name : canIUseApi;
        if (!wx.canIUse(apiName)) {
            protocols[canIUseApi] = false;
        }
    });
    var uni = {};
    if (typeof Proxy !== "undefined" && "mp-weixin" !== "app-plus") {
        uni = new Proxy({}, {
            get: function get(target, name) {
                if (hasOwn(target, name)) {
                    return target[name];
                }
                if (baseApi[name]) {
                    return baseApi[name];
                }
                if (api[name]) {
                    return promisify(name, api[name]);
                }
                {
                    if (extraApi[name]) {
                        return promisify(name, extraApi[name]);
                    }
                    if (todoApis[name]) {
                        return promisify(name, todoApis[name]);
                    }
                }
                if (eventApi[name]) {
                    return eventApi[name];
                }
                if (!hasOwn(wx, name) && !hasOwn(protocols, name)) {
                    return;
                }
                return promisify(name, wrapper(name, wx[name]));
            },
            set: function set(target, name, value) {
                target[name] = value;
                return true;
            }
        });
    } else {
        Object.keys(baseApi).forEach(function(name) {
            uni[name] = baseApi[name];
        });
        {
            Object.keys(todoApis).forEach(function(name) {
                uni[name] = promisify(name, todoApis[name]);
            });
            Object.keys(extraApi).forEach(function(name) {
                uni[name] = promisify(name, todoApis[name]);
            });
        }
        Object.keys(eventApi).forEach(function(name) {
            uni[name] = eventApi[name];
        });
        Object.keys(api).forEach(function(name) {
            uni[name] = promisify(name, api[name]);
        });
        Object.keys(wx).forEach(function(name) {
            if (hasOwn(wx, name) || hasOwn(protocols, name)) {
                uni[name] = promisify(name, wrapper(name, wx[name]));
            }
        });
    }
    wx.createApp = createApp;
    wx.createPage = createPage;
    wx.createComponent = createComponent;
    var uni$1 = uni;
    var _default = uni$1;
    exports.default = _default;
    /***/}, 
/* 2 */
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* WEBPACK VAR INJECTION */
    /* WEBPACK VAR INJECTION */    
    /* WEBPACK VAR INJECTION */
    /* WEBPACK VAR INJECTION */ (function(global) {
        /*!
 * Vue.js v2.6.11
 * (c) 2014-2020 Evan You
 * Released under the MIT License.
 */
        /*  */
        var emptyObject = Object.freeze({});
        // These helpers produce better VM code in JS engines due to their
        // explicitness and function inlining.
                function isUndef(v) {
            return v === undefined || v === null;
        }
        function isDef(v) {
            return v !== undefined && v !== null;
        }
        function isTrue(v) {
            return v === true;
        }
        function isFalse(v) {
            return v === false;
        }
        /**
 * Check if value is primitive.
 */        function isPrimitive(value) {
            return typeof value === "string" || typeof value === "number" || 
            // $flow-disable-line
            typeof value === "symbol" || typeof value === "boolean";
        }
        /**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */        function isObject(obj) {
            return obj !== null && typeof obj === "object";
        }
        /**
 * Get the raw type string of a value, e.g., [object Object].
 */        var _toString = Object.prototype.toString;
        function toRawType(value) {
            return _toString.call(value).slice(8, -1);
        }
        /**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */        function isPlainObject(obj) {
            return _toString.call(obj) === "[object Object]";
        }
        function isRegExp(v) {
            return _toString.call(v) === "[object RegExp]";
        }
        /**
 * Check if val is a valid array index.
 */        function isValidArrayIndex(val) {
            var n = parseFloat(String(val));
            return n >= 0 && Math.floor(n) === n && isFinite(val);
        }
        function isPromise(val) {
            return isDef(val) && typeof val.then === "function" && typeof val.catch === "function";
        }
        /**
 * Convert a value to a string that is actually rendered.
 */        function toString(val) {
            return val == null ? "" : Array.isArray(val) || isPlainObject(val) && val.toString === _toString ? JSON.stringify(val, null, 2) : String(val);
        }
        /**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */        function toNumber(val) {
            var n = parseFloat(val);
            return isNaN(n) ? val : n;
        }
        /**
 * Make a map and return a function for checking if a key
 * is in that map.
 */        function makeMap(str, expectsLowerCase) {
            var map = Object.create(null);
            var list = str.split(",");
            for (var i = 0; i < list.length; i++) {
                map[list[i]] = true;
            }
            return expectsLowerCase ? function(val) {
                return map[val.toLowerCase()];
            } : function(val) {
                return map[val];
            };
        }
        /**
 * Check if a tag is a built-in tag.
 */        var isBuiltInTag = makeMap("slot,component", true);
        /**
 * Check if an attribute is a reserved attribute.
 */        var isReservedAttribute = makeMap("key,ref,slot,slot-scope,is");
        /**
 * Remove an item from an array.
 */        function remove(arr, item) {
            if (arr.length) {
                var index = arr.indexOf(item);
                if (index > -1) {
                    return arr.splice(index, 1);
                }
            }
        }
        /**
 * Check whether an object has the property.
 */        var hasOwnProperty = Object.prototype.hasOwnProperty;
        function hasOwn(obj, key) {
            return hasOwnProperty.call(obj, key);
        }
        /**
 * Create a cached version of a pure function.
 */        function cached(fn) {
            var cache = Object.create(null);
            return function cachedFn(str) {
                var hit = cache[str];
                return hit || (cache[str] = fn(str));
            };
        }
        /**
 * Camelize a hyphen-delimited string.
 */        var camelizeRE = /-(\w)/g;
        var camelize = cached(function(str) {
            return str.replace(camelizeRE, function(_, c) {
                return c ? c.toUpperCase() : "";
            });
        });
        /**
 * Capitalize a string.
 */        var capitalize = cached(function(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        });
        /**
 * Hyphenate a camelCase string.
 */        var hyphenateRE = /\B([A-Z])/g;
        var hyphenate = cached(function(str) {
            return str.replace(hyphenateRE, "-$1").toLowerCase();
        });
        /**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */
        /* istanbul ignore next */        function polyfillBind(fn, ctx) {
            function boundFn(a) {
                var l = arguments.length;
                return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
            }
            boundFn._length = fn.length;
            return boundFn;
        }
        function nativeBind(fn, ctx) {
            return fn.bind(ctx);
        }
        var bind = Function.prototype.bind ? nativeBind : polyfillBind;
        /**
 * Convert an Array-like object to a real Array.
 */        function toArray(list, start) {
            start = start || 0;
            var i = list.length - start;
            var ret = new Array(i);
            while (i--) {
                ret[i] = list[i + start];
            }
            return ret;
        }
        /**
 * Mix properties into target object.
 */        function extend(to, _from) {
            for (var key in _from) {
                to[key] = _from[key];
            }
            return to;
        }
        /**
 * Merge an Array of Objects into a single Object.
 */        function toObject(arr) {
            var res = {};
            for (var i = 0; i < arr.length; i++) {
                if (arr[i]) {
                    extend(res, arr[i]);
                }
            }
            return res;
        }
        /* eslint-disable no-unused-vars */
        /**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */        function noop(a, b, c) {}
        /**
 * Always return false.
 */        var no = function(a, b, c) {
            return false;
        };
        /* eslint-enable no-unused-vars */
        /**
 * Return the same value.
 */        var identity = function(_) {
            return _;
        };
        /**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */        function looseEqual(a, b) {
            if (a === b) {
                return true;
            }
            var isObjectA = isObject(a);
            var isObjectB = isObject(b);
            if (isObjectA && isObjectB) {
                try {
                    var isArrayA = Array.isArray(a);
                    var isArrayB = Array.isArray(b);
                    if (isArrayA && isArrayB) {
                        return a.length === b.length && a.every(function(e, i) {
                            return looseEqual(e, b[i]);
                        });
                    } else if (a instanceof Date && b instanceof Date) {
                        return a.getTime() === b.getTime();
                    } else if (!isArrayA && !isArrayB) {
                        var keysA = Object.keys(a);
                        var keysB = Object.keys(b);
                        return keysA.length === keysB.length && keysA.every(function(key) {
                            return looseEqual(a[key], b[key]);
                        });
                    } else {
                        /* istanbul ignore next */
                        return false;
                    }
                } catch (e) {
                    /* istanbul ignore next */
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    return false;
                }
            } else if (!isObjectA && !isObjectB) {
                return String(a) === String(b);
            } else {
                return false;
            }
        }
        /**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */        function looseIndexOf(arr, val) {
            for (var i = 0; i < arr.length; i++) {
                if (looseEqual(arr[i], val)) {
                    return i;
                }
            }
            return -1;
        }
        /**
 * Ensure a function is called only once.
 */        function once(fn) {
            var called = false;
            return function() {
                if (!called) {
                    called = true;
                    fn.apply(this, arguments);
                }
            };
        }
        var ASSET_TYPES = [ "component", "directive", "filter" ];
        var LIFECYCLE_HOOKS = [ "beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured", "serverPrefetch" ];
        /*  */        var config = {
            /**
   * Option merge strategies (used in core/util/options)
   */
            // $flow-disable-line
            optionMergeStrategies: Object.create(null),
            /**
   * Whether to suppress warnings.
   */
            silent: false,
            /**
   * Show production mode tip message on boot?
   */
            productionTip: "development" !== "production",
            /**
   * Whether to enable devtools
   */
            devtools: "development" !== "production",
            /**
   * Whether to record perf
   */
            performance: false,
            /**
   * Error handler for watcher errors
   */
            errorHandler: null,
            /**
   * Warn handler for watcher warns
   */
            warnHandler: null,
            /**
   * Ignore certain custom elements
   */
            ignoredElements: [],
            /**
   * Custom user key aliases for v-on
   */
            // $flow-disable-line
            keyCodes: Object.create(null),
            /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
            isReservedTag: no,
            /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
            isReservedAttr: no,
            /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
            isUnknownElement: no,
            /**
   * Get the namespace of an element
   */
            getTagNamespace: noop,
            /**
   * Parse the real tag name for the specific platform.
   */
            parsePlatformTagName: identity,
            /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
            mustUseProp: no,
            /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
            async: true,
            /**
   * Exposed for legacy reasons
   */
            _lifecycleHooks: LIFECYCLE_HOOKS
        };
        /*  */
        /**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */        var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;
        /**
 * Check if a string starts with $ or _
 */        function isReserved(str) {
            var c = (str + "").charCodeAt(0);
            return c === 36 || c === 95;
        }
        /**
 * Define a property.
 */        function def(obj, key, val, enumerable) {
            Object.defineProperty(obj, key, {
                value: val,
                enumerable: !!enumerable,
                writable: true,
                configurable: true
            });
        }
        /**
 * Parse simple path.
 */        var bailRE = new RegExp("[^" + unicodeRegExp.source + ".$_\\d]");
        function parsePath(path) {
            if (bailRE.test(path)) {
                return;
            }
            var segments = path.split(".");
            return function(obj) {
                for (var i = 0; i < segments.length; i++) {
                    if (!obj) {
                        return;
                    }
                    obj = obj[segments[i]];
                }
                return obj;
            };
        }
        /*  */
        // can we use __proto__?
                var hasProto = "__proto__" in {};
        // Browser environment sniffing
                var inBrowser = typeof window !== "undefined";
        var inWeex = typeof WXEnvironment !== "undefined" && !!WXEnvironment.platform;
        var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
        var UA = inBrowser && window.navigator.userAgent.toLowerCase();
        var isIE = UA && /msie|trident/.test(UA);
        var isIE9 = UA && UA.indexOf("msie 9.0") > 0;
        var isEdge = UA && UA.indexOf("edge/") > 0;
        var isAndroid = UA && UA.indexOf("android") > 0 || weexPlatform === "android";
        var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA) || weexPlatform === "ios";
        var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
        var isPhantomJS = UA && /phantomjs/.test(UA);
        var isFF = UA && UA.match(/firefox\/(\d+)/);
        // Firefox has a "watch" function on Object.prototype...
                var nativeWatch = {}.watch;
        if (inBrowser) {
            try {
                var opts = {};
                Object.defineProperty(opts, "passive", {
                    get: function get() {}
                });
                // https://github.com/facebook/flow/issues/285
                                window.addEventListener("test-passive", null, opts);
            } catch (e) {}
        }
        // this needs to be lazy-evaled because vue may be required before
        // vue-server-renderer can set VUE_ENV
                var _isServer;
        var isServerRendering = function() {
            if (_isServer === undefined) {
                /* istanbul ignore if */
                if (!inBrowser && !inWeex && typeof global !== "undefined") {
                    // detect presence of vue-server-renderer and avoid
                    // Webpack shimming the process
                    _isServer = global["process"] && global["process"].env.VUE_ENV === "server";
                } else {
                    _isServer = false;
                }
            }
            return _isServer;
        };
        // detect devtools
                var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
        /* istanbul ignore next */        function isNative(Ctor) {
            return typeof Ctor === "function" && /native code/.test(Ctor.toString());
        }
        var hasSymbol = typeof Symbol !== "undefined" && isNative(Symbol) && typeof Reflect !== "undefined" && isNative(Reflect.ownKeys);
        var _Set;
        /* istanbul ignore if */ // $flow-disable-line
                if (typeof Set !== "undefined" && isNative(Set)) {
            // use native Set when available.
            _Set = Set;
        } else {
            // a non-standard Set polyfill that only works with primitive keys.
            _Set = /* */ function() {
                function Set() {
                    this.set = Object.create(null);
                }
                Set.prototype.has = function has(key) {
                    return this.set[key] === true;
                };
                Set.prototype.add = function add(key) {
                    this.set[key] = true;
                };
                Set.prototype.clear = function clear() {
                    this.set = Object.create(null);
                };
                return Set;
            }();
        }
        /*  */        var warn = noop;
        var tip = noop;
        var generateComponentTrace = noop;
        // work around flow check
                var formatComponentName = noop;
        if (true) {
            var hasConsole = typeof console !== "undefined";
            var classifyRE = /(?:^|[-_])(\w)/g;
            var classify = function(str) {
                return str.replace(classifyRE, function(c) {
                    return c.toUpperCase();
                }).replace(/[-_]/g, "");
            };
            warn = function(msg, vm) {
                var trace = vm ? generateComponentTrace(vm) : "";
                if (config.warnHandler) {
                    config.warnHandler.call(null, msg, vm, trace);
                } else if (hasConsole && !config.silent) {
                    console.error("[Vue warn]: " + msg + trace);
                }
            };
            tip = function(msg, vm) {
                if (hasConsole && !config.silent) {
                    console.warn("[Vue tip]: " + msg + (vm ? generateComponentTrace(vm) : ""));
                }
            };
            formatComponentName = function(vm, includeFile) {
                if (vm.$root === vm) {
                    if (vm.$options && vm.$options.__file) {
                        // fixed by xxxxxx
                        return "" + vm.$options.__file;
                    }
                    return "<Root>";
                }
                var options = typeof vm === "function" && vm.cid != null ? vm.options : vm._isVue ? vm.$options || vm.constructor.options : vm;
                var name = options.name || options._componentTag;
                var file = options.__file;
                if (!name && file) {
                    var match = file.match(/([^/\\]+)\.vue$/);
                    name = match && match[1];
                }
                return (name ? "<" + classify(name) + ">" : "<Anonymous>") + (file && includeFile !== false ? " at " + file : "");
            };
            var repeat = function(str, n) {
                var res = "";
                while (n) {
                    if (n % 2 === 1) {
                        res += str;
                    }
                    if (n > 1) {
                        str += str;
                    }
                    n >>= 1;
                }
                return res;
            };
            generateComponentTrace = function(vm) {
                if (vm._isVue && vm.$parent) {
                    var tree = [];
                    var currentRecursiveSequence = 0;
                    while (vm && vm.$options.name !== "PageBody") {
                        if (tree.length > 0) {
                            var last = tree[tree.length - 1];
                            if (last.constructor === vm.constructor) {
                                currentRecursiveSequence++;
                                vm = vm.$parent;
                                continue;
                            } else if (currentRecursiveSequence > 0) {
                                tree[tree.length - 1] = [ last, currentRecursiveSequence ];
                                currentRecursiveSequence = 0;
                            }
                        }
                        !vm.$options.isReserved && tree.push(vm);
                        vm = vm.$parent;
                    }
                    return "\n\nfound in\n\n" + tree.map(function(vm, i) {
                        return "" + (i === 0 ? "---\x3e " : repeat(" ", 5 + i * 2)) + (Array.isArray(vm) ? formatComponentName(vm[0]) + "... (" + vm[1] + " recursive calls)" : formatComponentName(vm));
                    }).join("\n");
                } else {
                    return "\n\n(found in " + formatComponentName(vm) + ")";
                }
            };
        }
        /*  */        var uid = 0;
        /**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */        var Dep = function Dep() {
            this.id = uid++;
            this.subs = [];
        };
        Dep.prototype.addSub = function addSub(sub) {
            this.subs.push(sub);
        };
        Dep.prototype.removeSub = function removeSub(sub) {
            remove(this.subs, sub);
        };
        Dep.prototype.depend = function depend() {
            if (Dep.SharedObject.target) {
                Dep.SharedObject.target.addDep(this);
            }
        };
        Dep.prototype.notify = function notify() {
            // stabilize the subscriber list first
            var subs = this.subs.slice();
            if (true && !config.async) {
                // subs aren't sorted in scheduler if not running async
                // we need to sort them now to make sure they fire in correct
                // order
                subs.sort(function(a, b) {
                    return a.id - b.id;
                });
            }
            for (var i = 0, l = subs.length; i < l; i++) {
                subs[i].update();
            }
        };
        // The current target watcher being evaluated.
        // This is globally unique because only one watcher
        // can be evaluated at a time.
        // fixed by xxxxxx (nvue shared vuex)
        /* eslint-disable no-undef */        Dep.SharedObject = {};
        Dep.SharedObject.target = null;
        Dep.SharedObject.targetStack = [];
        function pushTarget(target) {
            Dep.SharedObject.targetStack.push(target);
            Dep.SharedObject.target = target;
        }
        function popTarget() {
            Dep.SharedObject.targetStack.pop();
            Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
        }
        /*  */        var VNode = function VNode(tag, data, children, text, elm, context, componentOptions, asyncFactory) {
            this.tag = tag;
            this.data = data;
            this.children = children;
            this.text = text;
            this.elm = elm;
            this.ns = undefined;
            this.context = context;
            this.fnContext = undefined;
            this.fnOptions = undefined;
            this.fnScopeId = undefined;
            this.key = data && data.key;
            this.componentOptions = componentOptions;
            this.componentInstance = undefined;
            this.parent = undefined;
            this.raw = false;
            this.isStatic = false;
            this.isRootInsert = true;
            this.isComment = false;
            this.isCloned = false;
            this.isOnce = false;
            this.asyncFactory = asyncFactory;
            this.asyncMeta = undefined;
            this.isAsyncPlaceholder = false;
        };
        var prototypeAccessors = {
            child: {
                configurable: true
            }
        };
        // DEPRECATED: alias for componentInstance for backwards compat.
        /* istanbul ignore next */        prototypeAccessors.child.get = function() {
            return this.componentInstance;
        };
        Object.defineProperties(VNode.prototype, prototypeAccessors);
        var createEmptyVNode = function(text) {
            if (text === void 0) text = "";
            var node = new VNode();
            node.text = text;
            node.isComment = true;
            return node;
        };
        function createTextVNode(val) {
            return new VNode(undefined, undefined, undefined, String(val));
        }
        // optimized shallow clone
        // used for static nodes and slot nodes because they may be reused across
        // multiple renders, cloning them avoids errors when DOM manipulations rely
        // on their elm reference.
                function cloneVNode(vnode) {
            var cloned = new VNode(vnode.tag, vnode.data, 
            // #7975
            // clone children array to avoid mutating original in case of cloning
            // a child.
            vnode.children && vnode.children.slice(), vnode.text, vnode.elm, vnode.context, vnode.componentOptions, vnode.asyncFactory);
            cloned.ns = vnode.ns;
            cloned.isStatic = vnode.isStatic;
            cloned.key = vnode.key;
            cloned.isComment = vnode.isComment;
            cloned.fnContext = vnode.fnContext;
            cloned.fnOptions = vnode.fnOptions;
            cloned.fnScopeId = vnode.fnScopeId;
            cloned.asyncMeta = vnode.asyncMeta;
            cloned.isCloned = true;
            return cloned;
        }
        /*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */        var arrayProto = Array.prototype;
        var arrayMethods = Object.create(arrayProto);
        var methodsToPatch = [ "push", "pop", "shift", "unshift", "splice", "sort", "reverse" ];
        /**
 * Intercept mutating methods and emit events
 */        methodsToPatch.forEach(function(method) {
            // cache original method
            var original = arrayProto[method];
            def(arrayMethods, method, function mutator() {
                var args = [], len = arguments.length;
                while (len--) args[len] = arguments[len];
                var result = original.apply(this, args);
                var ob = this.__ob__;
                var inserted;
                switch (method) {
                  case "push":
                  case "unshift":
                    inserted = args;
                    break;

                  case "splice":
                    inserted = args.slice(2);
                    break;
                }
                if (inserted) {
                    ob.observeArray(inserted);
                }
                // notify change
                                ob.dep.notify();
                return result;
            });
        });
        /*  */        var arrayKeys = Object.getOwnPropertyNames(arrayMethods);
        /**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */        var shouldObserve = true;
        function toggleObserving(value) {
            shouldObserve = value;
        }
        /**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */        var Observer = function Observer(value) {
            this.value = value;
            this.dep = new Dep();
            this.vmCount = 0;
            def(value, "__ob__", this);
            if (Array.isArray(value)) {
                if (hasProto) {
                    {
                        // fixed by xxxxxx 微信小程序使用 plugins 之后，数组方法被直接挂载到了数组对象上，需要执行 copyAugment 逻辑
                        if (value.push !== value.__proto__.push) {
                            copyAugment(value, arrayMethods, arrayKeys);
                        } else {
                            protoAugment(value, arrayMethods);
                        }
                    }
                } else {
                    copyAugment(value, arrayMethods, arrayKeys);
                }
                this.observeArray(value);
            } else {
                this.walk(value);
            }
        };
        /**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */        Observer.prototype.walk = function walk(obj) {
            var keys = Object.keys(obj);
            for (var i = 0; i < keys.length; i++) {
                defineReactive$$1(obj, keys[i]);
            }
        };
        /**
 * Observe a list of Array items.
 */        Observer.prototype.observeArray = function observeArray(items) {
            for (var i = 0, l = items.length; i < l; i++) {
                observe(items[i]);
            }
        };
        // helpers
        /**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */        function protoAugment(target, src) {
            /* eslint-disable no-proto */
            target.__proto__ = src;
            /* eslint-enable no-proto */        }
        /**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
        /* istanbul ignore next */        function copyAugment(target, src, keys) {
            for (var i = 0, l = keys.length; i < l; i++) {
                var key = keys[i];
                def(target, key, src[key]);
            }
        }
        /**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */        function observe(value, asRootData) {
            if (!isObject(value) || value instanceof VNode) {
                return;
            }
            var ob;
            if (hasOwn(value, "__ob__") && value.__ob__ instanceof Observer) {
                ob = value.__ob__;
            } else if (shouldObserve && !isServerRendering() && (Array.isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
                ob = new Observer(value);
            }
            if (asRootData && ob) {
                ob.vmCount++;
            }
            return ob;
        }
        /**
 * Define a reactive property on an Object.
 */        function defineReactive$$1(obj, key, val, customSetter, shallow) {
            var dep = new Dep();
            var property = Object.getOwnPropertyDescriptor(obj, key);
            if (property && property.configurable === false) {
                return;
            }
            // cater for pre-defined getter/setters
                        var getter = property && property.get;
            var setter = property && property.set;
            if ((!getter || setter) && arguments.length === 2) {
                val = obj[key];
            }
            var childOb = !shallow && observe(val);
            Object.defineProperty(obj, key, {
                enumerable: true,
                configurable: true,
                get: function reactiveGetter() {
                    var value = getter ? getter.call(obj) : val;
                    if (Dep.SharedObject.target) {
                        // fixed by xxxxxx
                        dep.depend();
                        if (childOb) {
                            childOb.dep.depend();
                            if (Array.isArray(value)) {
                                dependArray(value);
                            }
                        }
                    }
                    return value;
                },
                set: function reactiveSetter(newVal) {
                    var value = getter ? getter.call(obj) : val;
                    /* eslint-disable no-self-compare */                    if (newVal === value || newVal !== newVal && value !== value) {
                        return;
                    }
                    /* eslint-enable no-self-compare */                    if (true && customSetter) {
                        customSetter();
                    }
                    // #7981: for accessor properties without setter
                                        if (getter && !setter) {
                        return;
                    }
                    if (setter) {
                        setter.call(obj, newVal);
                    } else {
                        val = newVal;
                    }
                    childOb = !shallow && observe(newVal);
                    dep.notify();
                }
            });
        }
        /**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */        function set(target, key, val) {
            if (true && (isUndef(target) || isPrimitive(target))) {
                warn("Cannot set reactive property on undefined, null, or primitive value: " + target);
            }
            if (Array.isArray(target) && isValidArrayIndex(key)) {
                target.length = Math.max(target.length, key);
                target.splice(key, 1, val);
                return val;
            }
            if (key in target && !(key in Object.prototype)) {
                target[key] = val;
                return val;
            }
            var ob = target.__ob__;
            if (target._isVue || ob && ob.vmCount) {
                true && warn("Avoid adding reactive properties to a Vue instance or its root $data " + "at runtime - declare it upfront in the data option.");
                return val;
            }
            if (!ob) {
                target[key] = val;
                return val;
            }
            defineReactive$$1(ob.value, key, val);
            ob.dep.notify();
            return val;
        }
        /**
 * Delete a property and trigger change if necessary.
 */        function del(target, key) {
            if (true && (isUndef(target) || isPrimitive(target))) {
                warn("Cannot delete reactive property on undefined, null, or primitive value: " + target);
            }
            if (Array.isArray(target) && isValidArrayIndex(key)) {
                target.splice(key, 1);
                return;
            }
            var ob = target.__ob__;
            if (target._isVue || ob && ob.vmCount) {
                true && warn("Avoid deleting properties on a Vue instance or its root $data " + "- just set it to null.");
                return;
            }
            if (!hasOwn(target, key)) {
                return;
            }
            delete target[key];
            if (!ob) {
                return;
            }
            ob.dep.notify();
        }
        /**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */        function dependArray(value) {
            for (var e = void 0, i = 0, l = value.length; i < l; i++) {
                e = value[i];
                e && e.__ob__ && e.__ob__.dep.depend();
                if (Array.isArray(e)) {
                    dependArray(e);
                }
            }
        }
        /*  */
        /**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */        var strats = config.optionMergeStrategies;
        /**
 * Options with restrictions
 */        if (true) {
            strats.el = strats.propsData = function(parent, child, vm, key) {
                if (!vm) {
                    warn('option "' + key + '" can only be used during instance ' + "creation with the `new` keyword.");
                }
                return defaultStrat(parent, child);
            };
        }
        /**
 * Helper that recursively merges two data objects together.
 */        function mergeData(to, from) {
            if (!from) {
                return to;
            }
            var key, toVal, fromVal;
            var keys = hasSymbol ? Reflect.ownKeys(from) : Object.keys(from);
            for (var i = 0; i < keys.length; i++) {
                key = keys[i];
                // in case the object is already observed...
                                if (key === "__ob__") {
                    continue;
                }
                toVal = to[key];
                fromVal = from[key];
                if (!hasOwn(to, key)) {
                    set(to, key, fromVal);
                } else if (toVal !== fromVal && isPlainObject(toVal) && isPlainObject(fromVal)) {
                    mergeData(toVal, fromVal);
                }
            }
            return to;
        }
        /**
 * Data
 */        function mergeDataOrFn(parentVal, childVal, vm) {
            if (!vm) {
                // in a Vue.extend merge, both should be functions
                if (!childVal) {
                    return parentVal;
                }
                if (!parentVal) {
                    return childVal;
                }
                // when parentVal & childVal are both present,
                // we need to return a function that returns the
                // merged result of both functions... no need to
                // check if parentVal is a function here because
                // it has to be a function to pass previous merges.
                                return function mergedDataFn() {
                    return mergeData(typeof childVal === "function" ? childVal.call(this, this) : childVal, typeof parentVal === "function" ? parentVal.call(this, this) : parentVal);
                };
            } else {
                return function mergedInstanceDataFn() {
                    // instance merge
                    var instanceData = typeof childVal === "function" ? childVal.call(vm, vm) : childVal;
                    var defaultData = typeof parentVal === "function" ? parentVal.call(vm, vm) : parentVal;
                    if (instanceData) {
                        return mergeData(instanceData, defaultData);
                    } else {
                        return defaultData;
                    }
                };
            }
        }
        strats.data = function(parentVal, childVal, vm) {
            if (!vm) {
                if (childVal && typeof childVal !== "function") {
                    true && warn('The "data" option should be a function ' + "that returns a per-instance value in component " + "definitions.", vm);
                    return parentVal;
                }
                return mergeDataOrFn(parentVal, childVal);
            }
            return mergeDataOrFn(parentVal, childVal, vm);
        };
        /**
 * Hooks and props are merged as arrays.
 */        function mergeHook(parentVal, childVal) {
            var res = childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [ childVal ] : parentVal;
            return res ? dedupeHooks(res) : res;
        }
        function dedupeHooks(hooks) {
            var res = [];
            for (var i = 0; i < hooks.length; i++) {
                if (res.indexOf(hooks[i]) === -1) {
                    res.push(hooks[i]);
                }
            }
            return res;
        }
        LIFECYCLE_HOOKS.forEach(function(hook) {
            strats[hook] = mergeHook;
        });
        /**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */        function mergeAssets(parentVal, childVal, vm, key) {
            var res = Object.create(parentVal || null);
            if (childVal) {
                true && assertObjectType(key, childVal, vm);
                return extend(res, childVal);
            } else {
                return res;
            }
        }
        ASSET_TYPES.forEach(function(type) {
            strats[type + "s"] = mergeAssets;
        });
        /**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */        strats.watch = function(parentVal, childVal, vm, key) {
            // work around Firefox's Object.prototype.watch...
            if (parentVal === nativeWatch) {
                parentVal = undefined;
            }
            if (childVal === nativeWatch) {
                childVal = undefined;
            }
            /* istanbul ignore if */            if (!childVal) {
                return Object.create(parentVal || null);
            }
            if (true) {
                assertObjectType(key, childVal, vm);
            }
            if (!parentVal) {
                return childVal;
            }
            var ret = {};
            extend(ret, parentVal);
            for (var key$1 in childVal) {
                var parent = ret[key$1];
                var child = childVal[key$1];
                if (parent && !Array.isArray(parent)) {
                    parent = [ parent ];
                }
                ret[key$1] = parent ? parent.concat(child) : Array.isArray(child) ? child : [ child ];
            }
            return ret;
        };
        /**
 * Other object hashes.
 */        strats.props = strats.methods = strats.inject = strats.computed = function(parentVal, childVal, vm, key) {
            if (childVal && "development" !== "production") {
                assertObjectType(key, childVal, vm);
            }
            if (!parentVal) {
                return childVal;
            }
            var ret = Object.create(null);
            extend(ret, parentVal);
            if (childVal) {
                extend(ret, childVal);
            }
            return ret;
        };
        strats.provide = mergeDataOrFn;
        /**
 * Default strategy.
 */        var defaultStrat = function(parentVal, childVal) {
            return childVal === undefined ? parentVal : childVal;
        };
        /**
 * Validate component names
 */        function checkComponents(options) {
            for (var key in options.components) {
                validateComponentName(key);
            }
        }
        function validateComponentName(name) {
            if (!new RegExp("^[a-zA-Z][\\-\\.0-9_" + unicodeRegExp.source + "]*$").test(name)) {
                warn('Invalid component name: "' + name + '". Component names ' + "should conform to valid custom element name in html5 specification.");
            }
            if (isBuiltInTag(name) || config.isReservedTag(name)) {
                warn("Do not use built-in or reserved HTML elements as component " + "id: " + name);
            }
        }
        /**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */        function normalizeProps(options, vm) {
            var props = options.props;
            if (!props) {
                return;
            }
            var res = {};
            var i, val, name;
            if (Array.isArray(props)) {
                i = props.length;
                while (i--) {
                    val = props[i];
                    if (typeof val === "string") {
                        name = camelize(val);
                        res[name] = {
                            type: null
                        };
                    } else if (true) {
                        warn("props must be strings when using array syntax.");
                    }
                }
            } else if (isPlainObject(props)) {
                for (var key in props) {
                    val = props[key];
                    name = camelize(key);
                    res[name] = isPlainObject(val) ? val : {
                        type: val
                    };
                }
            } else if (true) {
                warn('Invalid value for option "props": expected an Array or an Object, ' + "but got " + toRawType(props) + ".", vm);
            }
            options.props = res;
        }
        /**
 * Normalize all injections into Object-based format
 */        function normalizeInject(options, vm) {
            var inject = options.inject;
            if (!inject) {
                return;
            }
            var normalized = options.inject = {};
            if (Array.isArray(inject)) {
                for (var i = 0; i < inject.length; i++) {
                    normalized[inject[i]] = {
                        from: inject[i]
                    };
                }
            } else if (isPlainObject(inject)) {
                for (var key in inject) {
                    var val = inject[key];
                    normalized[key] = isPlainObject(val) ? extend({
                        from: key
                    }, val) : {
                        from: val
                    };
                }
            } else if (true) {
                warn('Invalid value for option "inject": expected an Array or an Object, ' + "but got " + toRawType(inject) + ".", vm);
            }
        }
        /**
 * Normalize raw function directives into object format.
 */        function normalizeDirectives(options) {
            var dirs = options.directives;
            if (dirs) {
                for (var key in dirs) {
                    var def$$1 = dirs[key];
                    if (typeof def$$1 === "function") {
                        dirs[key] = {
                            bind: def$$1,
                            update: def$$1
                        };
                    }
                }
            }
        }
        function assertObjectType(name, value, vm) {
            if (!isPlainObject(value)) {
                warn('Invalid value for option "' + name + '": expected an Object, ' + "but got " + toRawType(value) + ".", vm);
            }
        }
        /**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */        function mergeOptions(parent, child, vm) {
            if (true) {
                checkComponents(child);
            }
            if (typeof child === "function") {
                child = child.options;
            }
            normalizeProps(child, vm);
            normalizeInject(child, vm);
            normalizeDirectives(child);
            // Apply extends and mixins on the child options,
            // but only if it is a raw options object that isn't
            // the result of another mergeOptions call.
            // Only merged options has the _base property.
                        if (!child._base) {
                if (child.extends) {
                    parent = mergeOptions(parent, child.extends, vm);
                }
                if (child.mixins) {
                    for (var i = 0, l = child.mixins.length; i < l; i++) {
                        parent = mergeOptions(parent, child.mixins[i], vm);
                    }
                }
            }
            var options = {};
            var key;
            for (key in parent) {
                mergeField(key);
            }
            for (key in child) {
                if (!hasOwn(parent, key)) {
                    mergeField(key);
                }
            }
            function mergeField(key) {
                var strat = strats[key] || defaultStrat;
                options[key] = strat(parent[key], child[key], vm, key);
            }
            return options;
        }
        /**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */        function resolveAsset(options, type, id, warnMissing) {
            /* istanbul ignore if */
            if (typeof id !== "string") {
                return;
            }
            var assets = options[type];
            // check local registration variations first
                        if (hasOwn(assets, id)) {
                return assets[id];
            }
            var camelizedId = camelize(id);
            if (hasOwn(assets, camelizedId)) {
                return assets[camelizedId];
            }
            var PascalCaseId = capitalize(camelizedId);
            if (hasOwn(assets, PascalCaseId)) {
                return assets[PascalCaseId];
            }
            // fallback to prototype chain
                        var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
            if (true && warnMissing && !res) {
                warn("Failed to resolve " + type.slice(0, -1) + ": " + id, options);
            }
            return res;
        }
        /*  */        function validateProp(key, propOptions, propsData, vm) {
            var prop = propOptions[key];
            var absent = !hasOwn(propsData, key);
            var value = propsData[key];
            // boolean casting
                        var booleanIndex = getTypeIndex(Boolean, prop.type);
            if (booleanIndex > -1) {
                if (absent && !hasOwn(prop, "default")) {
                    value = false;
                } else if (value === "" || value === hyphenate(key)) {
                    // only cast empty string / same name to boolean if
                    // boolean has higher priority
                    var stringIndex = getTypeIndex(String, prop.type);
                    if (stringIndex < 0 || booleanIndex < stringIndex) {
                        value = true;
                    }
                }
            }
            // check default value
                        if (value === undefined) {
                value = getPropDefaultValue(vm, prop, key);
                // since the default value is a fresh copy,
                // make sure to observe it.
                                var prevShouldObserve = shouldObserve;
                toggleObserving(true);
                observe(value);
                toggleObserving(prevShouldObserve);
            }
            if (true) {
                assertProp(prop, key, value, vm, absent);
            }
            return value;
        }
        /**
 * Get the default value of a prop.
 */        function getPropDefaultValue(vm, prop, key) {
            // no default, return undefined
            if (!hasOwn(prop, "default")) {
                return undefined;
            }
            var def = prop.default;
            // warn against non-factory defaults for Object & Array
                        if (true && isObject(def)) {
                warn('Invalid default value for prop "' + key + '": ' + "Props with type Object/Array must use a factory function " + "to return the default value.", vm);
            }
            // the raw prop value was also undefined from previous render,
            // return previous default value to avoid unnecessary watcher trigger
                        if (vm && vm.$options.propsData && vm.$options.propsData[key] === undefined && vm._props[key] !== undefined) {
                return vm._props[key];
            }
            // call factory function for non-Function types
            // a value is Function if its prototype is function even across different execution context
                        return typeof def === "function" && getType(prop.type) !== "Function" ? def.call(vm) : def;
        }
        /**
 * Assert whether a prop is valid.
 */        function assertProp(prop, name, value, vm, absent) {
            if (prop.required && absent) {
                warn('Missing required prop: "' + name + '"', vm);
                return;
            }
            if (value == null && !prop.required) {
                return;
            }
            var type = prop.type;
            var valid = !type || type === true;
            var expectedTypes = [];
            if (type) {
                if (!Array.isArray(type)) {
                    type = [ type ];
                }
                for (var i = 0; i < type.length && !valid; i++) {
                    var assertedType = assertType(value, type[i]);
                    expectedTypes.push(assertedType.expectedType || "");
                    valid = assertedType.valid;
                }
            }
            if (!valid) {
                warn(getInvalidTypeMessage(name, value, expectedTypes), vm);
                return;
            }
            var validator = prop.validator;
            if (validator) {
                if (!validator(value)) {
                    warn('Invalid prop: custom validator check failed for prop "' + name + '".', vm);
                }
            }
        }
        var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;
        function assertType(value, type) {
            var valid;
            var expectedType = getType(type);
            if (simpleCheckRE.test(expectedType)) {
                var t = typeof value;
                valid = t === expectedType.toLowerCase();
                // for primitive wrapper objects
                                if (!valid && t === "object") {
                    valid = value instanceof type;
                }
            } else if (expectedType === "Object") {
                valid = isPlainObject(value);
            } else if (expectedType === "Array") {
                valid = Array.isArray(value);
            } else {
                valid = value instanceof type;
            }
            return {
                valid: valid,
                expectedType: expectedType
            };
        }
        /**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */        function getType(fn) {
            var match = fn && fn.toString().match(/^\s*function (\w+)/);
            return match ? match[1] : "";
        }
        function isSameType(a, b) {
            return getType(a) === getType(b);
        }
        function getTypeIndex(type, expectedTypes) {
            if (!Array.isArray(expectedTypes)) {
                return isSameType(expectedTypes, type) ? 0 : -1;
            }
            for (var i = 0, len = expectedTypes.length; i < len; i++) {
                if (isSameType(expectedTypes[i], type)) {
                    return i;
                }
            }
            return -1;
        }
        function getInvalidTypeMessage(name, value, expectedTypes) {
            var message = 'Invalid prop: type check failed for prop "' + name + '".' + " Expected " + expectedTypes.map(capitalize).join(", ");
            var expectedType = expectedTypes[0];
            var receivedType = toRawType(value);
            var expectedValue = styleValue(value, expectedType);
            var receivedValue = styleValue(value, receivedType);
            // check if we need to specify expected value
                        if (expectedTypes.length === 1 && isExplicable(expectedType) && !isBoolean(expectedType, receivedType)) {
                message += " with value " + expectedValue;
            }
            message += ", got " + receivedType + " ";
            // check if we need to specify received value
                        if (isExplicable(receivedType)) {
                message += "with value " + receivedValue + ".";
            }
            return message;
        }
        function styleValue(value, type) {
            if (type === "String") {
                return '"' + value + '"';
            } else if (type === "Number") {
                return "" + Number(value);
            } else {
                return "" + value;
            }
        }
        function isExplicable(value) {
            var explicitTypes = [ "string", "number", "boolean" ];
            return explicitTypes.some(function(elem) {
                return value.toLowerCase() === elem;
            });
        }
        function isBoolean() {
            var args = [], len = arguments.length;
            while (len--) args[len] = arguments[len];
            return args.some(function(elem) {
                return elem.toLowerCase() === "boolean";
            });
        }
        /*  */        function handleError(err, vm, info) {
            // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
            // See: https://github.com/vuejs/vuex/issues/1505
            pushTarget();
            try {
                if (vm) {
                    var cur = vm;
                    while (cur = cur.$parent) {
                        var hooks = cur.$options.errorCaptured;
                        if (hooks) {
                            for (var i = 0; i < hooks.length; i++) {
                                try {
                                    var capture = hooks[i].call(cur, err, vm, info) === false;
                                    if (capture) {
                                        return;
                                    }
                                } catch (e) {
                                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                    globalHandleError(e, cur, "errorCaptured hook");
                                }
                            }
                        }
                    }
                }
                globalHandleError(err, vm, info);
            } finally {
                popTarget();
            }
        }
        function invokeWithErrorHandling(handler, context, args, vm, info) {
            var res;
            try {
                res = args ? handler.apply(context, args) : handler.call(context);
                if (res && !res._isVue && isPromise(res) && !res._handled) {
                    res.catch(function(e) {
                        return handleError(e, vm, info + " (Promise/async)");
                    });
                    // issue #9511
                    // avoid catch triggering multiple times when nested calls
                                        res._handled = true;
                }
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                handleError(e, vm, info);
            }
            return res;
        }
        function globalHandleError(err, vm, info) {
            if (config.errorHandler) {
                try {
                    return config.errorHandler.call(null, err, vm, info);
                } catch (e) {
                    // if the user intentionally throws the original error in the handler,
                    // do not log it twice
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    if (e !== err) {
                        logError(e, null, "config.errorHandler");
                    }
                }
            }
            logError(err, vm, info);
        }
        function logError(err, vm, info) {
            if (true) {
                warn("Error in " + info + ': "' + err.toString() + '"', vm);
            }
            /* istanbul ignore else */            if ((inBrowser || inWeex) && typeof console !== "undefined") {
                console.error(err);
            } else {
                throw err;
            }
        }
        /*  */        var callbacks = [];
        var pending = false;
        function flushCallbacks() {
            pending = false;
            var copies = callbacks.slice(0);
            callbacks.length = 0;
            for (var i = 0; i < copies.length; i++) {
                copies[i]();
            }
        }
        // Here we have async deferring wrappers using microtasks.
        // In 2.5 we used (macro) tasks (in combination with microtasks).
        // However, it has subtle problems when state is changed right before repaint
        // (e.g. #6813, out-in transitions).
        // Also, using (macro) tasks in event handler would cause some weird behaviors
        // that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
        // So we now use microtasks everywhere, again.
        // A major drawback of this tradeoff is that there are some scenarios
        // where microtasks have too high a priority and fire in between supposedly
        // sequential events (e.g. #4521, #6690, which have workarounds)
        // or even between bubbling of the same event (#6566).
                var timerFunc;
        // The nextTick behavior leverages the microtask queue, which can be accessed
        // via either native Promise.then or MutationObserver.
        // MutationObserver has wider support, however it is seriously bugged in
        // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
        // completely stops working after triggering a few times... so, if native
        // Promise is available, we will use it:
        /* istanbul ignore next, $flow-disable-line */        if (typeof Promise !== "undefined" && isNative(Promise)) {
            var p = Promise.resolve();
            timerFunc = function() {
                p.then(flushCallbacks);
                // In problematic UIWebViews, Promise.then doesn't completely break, but
                // it can get stuck in a weird state where callbacks are pushed into the
                // microtask queue but the queue isn't being flushed, until the browser
                // needs to do some other work, e.g. handle a timer. Therefore we can
                // "force" the microtask queue to be flushed by adding an empty timer.
                                if (isIOS) {
                    setTimeout(noop);
                }
            };
        } else if (!isIE && typeof MutationObserver !== "undefined" && (isNative(MutationObserver) || 
        // PhantomJS and iOS 7.x
        MutationObserver.toString() === "[object MutationObserverConstructor]")) {
            // Use MutationObserver where native Promise is not available,
            // e.g. PhantomJS, iOS7, Android 4.4
            // (#6466 MutationObserver is unreliable in IE11)
            var counter = 1;
            var observer = new MutationObserver(flushCallbacks);
            var textNode = document.createTextNode(String(counter));
            observer.observe(textNode, {
                characterData: true
            });
            timerFunc = function() {
                counter = (counter + 1) % 2;
                textNode.data = String(counter);
            };
        } else if (typeof setImmediate !== "undefined" && isNative(setImmediate)) {
            // Fallback to setImmediate.
            // Technically it leverages the (macro) task queue,
            // but it is still a better choice than setTimeout.
            timerFunc = function() {
                setImmediate(flushCallbacks);
            };
        } else {
            // Fallback to setTimeout.
            timerFunc = function() {
                setTimeout(flushCallbacks, 0);
            };
        }
        function nextTick(cb, ctx) {
            var _resolve;
            callbacks.push(function() {
                if (cb) {
                    try {
                        cb.call(ctx);
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        handleError(e, ctx, "nextTick");
                    }
                } else if (_resolve) {
                    _resolve(ctx);
                }
            });
            if (!pending) {
                pending = true;
                timerFunc();
            }
            // $flow-disable-line
                        if (!cb && typeof Promise !== "undefined") {
                return new Promise(function(resolve) {
                    _resolve = resolve;
                });
            }
        }
        /*  */
        /* not type checking this file because flow doesn't play well with Proxy */        var initProxy;
        if (true) {
            var allowedGlobals = makeMap("Infinity,undefined,NaN,isFinite,isNaN," + "parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent," + "Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl," + "require");
            var warnNonPresent = function(target, key) {
                warn('Property or method "' + key + '" is not defined on the instance but ' + "referenced during render. Make sure that this property is reactive, " + "either in the data option, or for class-based components, by " + "initializing the property. " + "See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.", target);
            };
            var warnReservedPrefix = function(target, key) {
                warn('Property "' + key + '" must be accessed with "$data.' + key + '" because ' + 'properties starting with "$" or "_" are not proxied in the Vue instance to ' + "prevent conflicts with Vue internals. " + "See: https://vuejs.org/v2/api/#data", target);
            };
            var hasProxy = typeof Proxy !== "undefined" && isNative(Proxy);
            if (hasProxy) {
                var isBuiltInModifier = makeMap("stop,prevent,self,ctrl,shift,alt,meta,exact");
                config.keyCodes = new Proxy(config.keyCodes, {
                    set: function set(target, key, value) {
                        if (isBuiltInModifier(key)) {
                            warn("Avoid overwriting built-in modifier in config.keyCodes: ." + key);
                            return false;
                        } else {
                            target[key] = value;
                            return true;
                        }
                    }
                });
            }
            var hasHandler = {
                has: function has(target, key) {
                    var has = key in target;
                    var isAllowed = allowedGlobals(key) || typeof key === "string" && key.charAt(0) === "_" && !(key in target.$data);
                    if (!has && !isAllowed) {
                        if (key in target.$data) {
                            warnReservedPrefix(target, key);
                        } else {
                            warnNonPresent(target, key);
                        }
                    }
                    return has || !isAllowed;
                }
            };
            var getHandler = {
                get: function get(target, key) {
                    if (typeof key === "string" && !(key in target)) {
                        if (key in target.$data) {
                            warnReservedPrefix(target, key);
                        } else {
                            warnNonPresent(target, key);
                        }
                    }
                    return target[key];
                }
            };
            initProxy = function initProxy(vm) {
                if (hasProxy) {
                    // determine which proxy handler to use
                    var options = vm.$options;
                    var handlers = options.render && options.render._withStripped ? getHandler : hasHandler;
                    vm._renderProxy = new Proxy(vm, handlers);
                } else {
                    vm._renderProxy = vm;
                }
            };
        }
        /*  */        var seenObjects = new _Set();
        /**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */        function traverse(val) {
            _traverse(val, seenObjects);
            seenObjects.clear();
        }
        function _traverse(val, seen) {
            var i, keys;
            var isA = Array.isArray(val);
            if (!isA && !isObject(val) || Object.isFrozen(val) || val instanceof VNode) {
                return;
            }
            if (val.__ob__) {
                var depId = val.__ob__.dep.id;
                if (seen.has(depId)) {
                    return;
                }
                seen.add(depId);
            }
            if (isA) {
                i = val.length;
                while (i--) {
                    _traverse(val[i], seen);
                }
            } else {
                keys = Object.keys(val);
                i = keys.length;
                while (i--) {
                    _traverse(val[keys[i]], seen);
                }
            }
        }
        var mark;
        var measure;
        if (true) {
            var perf = inBrowser && window.performance;
            /* istanbul ignore if */            if (perf && perf.mark && perf.measure && perf.clearMarks && perf.clearMeasures) {
                mark = function(tag) {
                    return perf.mark(tag);
                };
                measure = function(name, startTag, endTag) {
                    perf.measure(name, startTag, endTag);
                    perf.clearMarks(startTag);
                    perf.clearMarks(endTag);
                    // perf.clearMeasures(name)
                                };
            }
        }
        /*  */        var normalizeEvent = cached(function(name) {
            var passive = name.charAt(0) === "&";
            name = passive ? name.slice(1) : name;
            var once$$1 = name.charAt(0) === "~";
            // Prefixed last, checked first
                        name = once$$1 ? name.slice(1) : name;
            var capture = name.charAt(0) === "!";
            name = capture ? name.slice(1) : name;
            return {
                name: name,
                once: once$$1,
                capture: capture,
                passive: passive
            };
        });
        function createFnInvoker(fns, vm) {
            function invoker() {
                var arguments$1 = arguments;
                var fns = invoker.fns;
                if (Array.isArray(fns)) {
                    var cloned = fns.slice();
                    for (var i = 0; i < cloned.length; i++) {
                        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
                    }
                } else {
                    // return handler return value for single handlers
                    return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler");
                }
            }
            invoker.fns = fns;
            return invoker;
        }
        function updateListeners(on, oldOn, add, remove$$1, createOnceHandler, vm) {
            var name, def$$1, cur, old, event;
            for (name in on) {
                def$$1 = cur = on[name];
                old = oldOn[name];
                event = normalizeEvent(name);
                if (isUndef(cur)) {
                    true && warn('Invalid handler for event "' + event.name + '": got ' + String(cur), vm);
                } else if (isUndef(old)) {
                    if (isUndef(cur.fns)) {
                        cur = on[name] = createFnInvoker(cur, vm);
                    }
                    if (isTrue(event.once)) {
                        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
                    }
                    add(event.name, cur, event.capture, event.passive, event.params);
                } else if (cur !== old) {
                    old.fns = cur;
                    on[name] = old;
                }
            }
            for (name in oldOn) {
                if (isUndef(on[name])) {
                    event = normalizeEvent(name);
                    remove$$1(event.name, oldOn[name], event.capture);
                }
            }
        }
        /*  */
        /*  */
        // fixed by xxxxxx (mp properties)
                function extractPropertiesFromVNodeData(data, Ctor, res, context) {
            var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
            if (isUndef(propOptions)) {
                return res;
            }
            var externalClasses = Ctor.options.mpOptions.externalClasses || [];
            var attrs = data.attrs;
            var props = data.props;
            if (isDef(attrs) || isDef(props)) {
                for (var key in propOptions) {
                    var altKey = hyphenate(key);
                    var result = checkProp(res, props, key, altKey, true) || checkProp(res, attrs, key, altKey, false);
                    // externalClass
                                        if (result && res[key] && externalClasses.indexOf(altKey) !== -1 && context[camelize(res[key])]) {
                        // 赋值 externalClass 真正的值(模板里 externalClass 的值可能是字符串)
                        res[key] = context[camelize(res[key])];
                    }
                }
            }
            return res;
        }
        function extractPropsFromVNodeData(data, Ctor, tag, context) {
            // we are only extracting raw values here.
            // validation and default values are handled in the child
            // component itself.
            var propOptions = Ctor.options.props;
            if (isUndef(propOptions)) {
                // fixed by xxxxxx
                return extractPropertiesFromVNodeData(data, Ctor, {}, context);
            }
            var res = {};
            var attrs = data.attrs;
            var props = data.props;
            if (isDef(attrs) || isDef(props)) {
                for (var key in propOptions) {
                    var altKey = hyphenate(key);
                    if (true) {
                        var keyInLowerCase = key.toLowerCase();
                        if (key !== keyInLowerCase && attrs && hasOwn(attrs, keyInLowerCase)) {
                            tip('Prop "' + keyInLowerCase + '" is passed to component ' + formatComponentName(tag || Ctor) + ", but the declared prop name is" + ' "' + key + '". ' + "Note that HTML attributes are case-insensitive and camelCased " + "props need to use their kebab-case equivalents when using in-DOM " + 'templates. You should probably use "' + altKey + '" instead of "' + key + '".');
                        }
                    }
                    checkProp(res, props, key, altKey, true) || checkProp(res, attrs, key, altKey, false);
                }
            }
            // fixed by xxxxxx
                        return extractPropertiesFromVNodeData(data, Ctor, res, context);
        }
        function checkProp(res, hash, key, altKey, preserve) {
            if (isDef(hash)) {
                if (hasOwn(hash, key)) {
                    res[key] = hash[key];
                    if (!preserve) {
                        delete hash[key];
                    }
                    return true;
                } else if (hasOwn(hash, altKey)) {
                    res[key] = hash[altKey];
                    if (!preserve) {
                        delete hash[altKey];
                    }
                    return true;
                }
            }
            return false;
        }
        /*  */
        // The template compiler attempts to minimize the need for normalization by
        // statically analyzing the template at compile time.
        //
        // For plain HTML markup, normalization can be completely skipped because the
        // generated render function is guaranteed to return Array<VNode>. There are
        // two cases where extra normalization is needed:
        // 1. When the children contains components - because a functional component
        // may return an Array instead of a single root. In this case, just a simple
        // normalization is needed - if any child is an Array, we flatten the whole
        // thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
        // because functional components already normalize their own children.
                function simpleNormalizeChildren(children) {
            for (var i = 0; i < children.length; i++) {
                if (Array.isArray(children[i])) {
                    return Array.prototype.concat.apply([], children);
                }
            }
            return children;
        }
        // 2. When the children contains constructs that always generated nested Arrays,
        // e.g. <template>, <slot>, v-for, or when the children is provided by user
        // with hand-written render functions / JSX. In such cases a full normalization
        // is needed to cater to all possible types of children values.
                function normalizeChildren(children) {
            return isPrimitive(children) ? [ createTextVNode(children) ] : Array.isArray(children) ? normalizeArrayChildren(children) : undefined;
        }
        function isTextNode(node) {
            return isDef(node) && isDef(node.text) && isFalse(node.isComment);
        }
        function normalizeArrayChildren(children, nestedIndex) {
            var res = [];
            var i, c, lastIndex, last;
            for (i = 0; i < children.length; i++) {
                c = children[i];
                if (isUndef(c) || typeof c === "boolean") {
                    continue;
                }
                lastIndex = res.length - 1;
                last = res[lastIndex];
                //  nested
                                if (Array.isArray(c)) {
                    if (c.length > 0) {
                        c = normalizeArrayChildren(c, (nestedIndex || "") + "_" + i);
                        // merge adjacent text nodes
                                                if (isTextNode(c[0]) && isTextNode(last)) {
                            res[lastIndex] = createTextVNode(last.text + c[0].text);
                            c.shift();
                        }
                        res.push.apply(res, c);
                    }
                } else if (isPrimitive(c)) {
                    if (isTextNode(last)) {
                        // merge adjacent text nodes
                        // this is necessary for SSR hydration because text nodes are
                        // essentially merged when rendered to HTML strings
                        res[lastIndex] = createTextVNode(last.text + c);
                    } else if (c !== "") {
                        // convert primitive to vnode
                        res.push(createTextVNode(c));
                    }
                } else {
                    if (isTextNode(c) && isTextNode(last)) {
                        // merge adjacent text nodes
                        res[lastIndex] = createTextVNode(last.text + c.text);
                    } else {
                        // default key for nested array children (likely generated by v-for)
                        if (isTrue(children._isVList) && isDef(c.tag) && isUndef(c.key) && isDef(nestedIndex)) {
                            c.key = "__vlist" + nestedIndex + "_" + i + "__";
                        }
                        res.push(c);
                    }
                }
            }
            return res;
        }
        /*  */        function initProvide(vm) {
            var provide = vm.$options.provide;
            if (provide) {
                vm._provided = typeof provide === "function" ? provide.call(vm) : provide;
            }
        }
        function initInjections(vm) {
            var result = resolveInject(vm.$options.inject, vm);
            if (result) {
                toggleObserving(false);
                Object.keys(result).forEach(function(key) {
                    /* istanbul ignore else */
                    if (true) {
                        defineReactive$$1(vm, key, result[key], function() {
                            warn("Avoid mutating an injected value directly since the changes will be " + "overwritten whenever the provided component re-renders. " + 'injection being mutated: "' + key + '"', vm);
                        });
                    } else {}
                });
                toggleObserving(true);
            }
        }
        function resolveInject(inject, vm) {
            if (inject) {
                // inject is :any because flow is not smart enough to figure out cached
                var result = Object.create(null);
                var keys = hasSymbol ? Reflect.ownKeys(inject) : Object.keys(inject);
                for (var i = 0; i < keys.length; i++) {
                    var key = keys[i];
                    // #6574 in case the inject object is observed...
                                        if (key === "__ob__") {
                        continue;
                    }
                    var provideKey = inject[key].from;
                    var source = vm;
                    while (source) {
                        if (source._provided && hasOwn(source._provided, provideKey)) {
                            result[key] = source._provided[provideKey];
                            break;
                        }
                        source = source.$parent;
                    }
                    if (!source) {
                        if ("default" in inject[key]) {
                            var provideDefault = inject[key].default;
                            result[key] = typeof provideDefault === "function" ? provideDefault.call(vm) : provideDefault;
                        } else if (true) {
                            warn('Injection "' + key + '" not found', vm);
                        }
                    }
                }
                return result;
            }
        }
        /*  */
        /**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */        function resolveSlots(children, context) {
            if (!children || !children.length) {
                return {};
            }
            var slots = {};
            for (var i = 0, l = children.length; i < l; i++) {
                var child = children[i];
                var data = child.data;
                // remove slot attribute if the node is resolved as a Vue slot node
                                if (data && data.attrs && data.attrs.slot) {
                    delete data.attrs.slot;
                }
                // named slots should only be respected if the vnode was rendered in the
                // same context.
                                if ((child.context === context || child.fnContext === context) && data && data.slot != null) {
                    var name = data.slot;
                    var slot = slots[name] || (slots[name] = []);
                    if (child.tag === "template") {
                        slot.push.apply(slot, child.children || []);
                    } else {
                        slot.push(child);
                    }
                } else {
                    // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
                    if (child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === "page") {
                        (slots["page"] || (slots["page"] = [])).push(child);
                    } else {
                        (slots.default || (slots.default = [])).push(child);
                    }
                }
            }
            // ignore slots that contains only whitespace
                        for (var name$1 in slots) {
                if (slots[name$1].every(isWhitespace)) {
                    delete slots[name$1];
                }
            }
            return slots;
        }
        function isWhitespace(node) {
            return node.isComment && !node.asyncFactory || node.text === " ";
        }
        /*  */        function normalizeScopedSlots(slots, normalSlots, prevSlots) {
            var res;
            var hasNormalSlots = Object.keys(normalSlots).length > 0;
            var isStable = slots ? !!slots.$stable : !hasNormalSlots;
            var key = slots && slots.$key;
            if (!slots) {
                res = {};
            } else if (slots._normalized) {
                // fast path 1: child component re-render only, parent did not change
                return slots._normalized;
            } else if (isStable && prevSlots && prevSlots !== emptyObject && key === prevSlots.$key && !hasNormalSlots && !prevSlots.$hasNormal) {
                // fast path 2: stable scoped slots w/ no normal slots to proxy,
                // only need to normalize once
                return prevSlots;
            } else {
                res = {};
                for (var key$1 in slots) {
                    if (slots[key$1] && key$1[0] !== "$") {
                        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
                    }
                }
            }
            // expose normal slots on scopedSlots
                        for (var key$2 in normalSlots) {
                if (!(key$2 in res)) {
                    res[key$2] = proxyNormalSlot(normalSlots, key$2);
                }
            }
            // avoriaz seems to mock a non-extensible $scopedSlots object
            // and when that is passed down this would cause an error
                        if (slots && Object.isExtensible(slots)) {
                slots._normalized = res;
            }
            def(res, "$stable", isStable);
            def(res, "$key", key);
            def(res, "$hasNormal", hasNormalSlots);
            return res;
        }
        function normalizeScopedSlot(normalSlots, key, fn) {
            var normalized = function() {
                var res = arguments.length ? fn.apply(null, arguments) : fn({});
                res = res && typeof res === "object" && !Array.isArray(res) ? [ res ] : normalizeChildren(res);
                return res && (res.length === 0 || res.length === 1 && res[0].isComment) ? undefined : res;
            };
            // this is a slot using the new v-slot syntax without scope. although it is
            // compiled as a scoped slot, render fn users would expect it to be present
            // on this.$slots because the usage is semantically a normal slot.
                        if (fn.proxy) {
                Object.defineProperty(normalSlots, key, {
                    get: normalized,
                    enumerable: true,
                    configurable: true
                });
            }
            return normalized;
        }
        function proxyNormalSlot(slots, key) {
            return function() {
                return slots[key];
            };
        }
        /*  */
        /**
 * Runtime helper for rendering v-for lists.
 */        function renderList(val, render) {
            var ret, i, l, keys, key;
            if (Array.isArray(val) || typeof val === "string") {
                ret = new Array(val.length);
                for (i = 0, l = val.length; i < l; i++) {
                    ret[i] = render(val[i], i, i, i);
                    // fixed by xxxxxx
                                }
            } else if (typeof val === "number") {
                ret = new Array(val);
                for (i = 0; i < val; i++) {
                    ret[i] = render(i + 1, i, i, i);
                    // fixed by xxxxxx
                                }
            } else if (isObject(val)) {
                if (hasSymbol && val[Symbol.iterator]) {
                    ret = [];
                    var iterator = val[Symbol.iterator]();
                    var result = iterator.next();
                    while (!result.done) {
                        ret.push(render(result.value, ret.length, i++, i));
                        // fixed by xxxxxx
                                                result = iterator.next();
                    }
                } else {
                    keys = Object.keys(val);
                    ret = new Array(keys.length);
                    for (i = 0, l = keys.length; i < l; i++) {
                        key = keys[i];
                        ret[i] = render(val[key], key, i, i);
                        // fixed by xxxxxx
                                        }
                }
            }
            if (!isDef(ret)) {
                ret = [];
            }
            ret._isVList = true;
            return ret;
        }
        /*  */
        /**
 * Runtime helper for rendering <slot>
 */        function renderSlot(name, fallback, props, bindObject) {
            var scopedSlotFn = this.$scopedSlots[name];
            var nodes;
            if (scopedSlotFn) {
                // scoped slot
                props = props || {};
                if (bindObject) {
                    if (true && !isObject(bindObject)) {
                        warn("slot v-bind without argument expects an Object", this);
                    }
                    props = extend(extend({}, bindObject), props);
                }
                // fixed by xxxxxx app-plus scopedSlot
                                nodes = scopedSlotFn(props, this, props._i) || fallback;
            } else {
                nodes = this.$slots[name] || fallback;
            }
            var target = props && props.slot;
            if (target) {
                return this.$createElement("template", {
                    slot: target
                }, nodes);
            } else {
                return nodes;
            }
        }
        /*  */
        /**
 * Runtime helper for resolving filters
 */        function resolveFilter(id) {
            return resolveAsset(this.$options, "filters", id, true) || identity;
        }
        /*  */        function isKeyNotMatch(expect, actual) {
            if (Array.isArray(expect)) {
                return expect.indexOf(actual) === -1;
            } else {
                return expect !== actual;
            }
        }
        /**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */        function checkKeyCodes(eventKeyCode, key, builtInKeyCode, eventKeyName, builtInKeyName) {
            var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
            if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
                return isKeyNotMatch(builtInKeyName, eventKeyName);
            } else if (mappedKeyCode) {
                return isKeyNotMatch(mappedKeyCode, eventKeyCode);
            } else if (eventKeyName) {
                return hyphenate(eventKeyName) !== key;
            }
        }
        /*  */
        /**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */        function bindObjectProps(data, tag, value, asProp, isSync) {
            if (value) {
                if (!isObject(value)) {
                    true && warn("v-bind without argument expects an Object or Array value", this);
                } else {
                    if (Array.isArray(value)) {
                        value = toObject(value);
                    }
                    var hash;
                    var loop = function(key) {
                        if (key === "class" || key === "style" || isReservedAttribute(key)) {
                            hash = data;
                        } else {
                            var type = data.attrs && data.attrs.type;
                            hash = asProp || config.mustUseProp(tag, type, key) ? data.domProps || (data.domProps = {}) : data.attrs || (data.attrs = {});
                        }
                        var camelizedKey = camelize(key);
                        var hyphenatedKey = hyphenate(key);
                        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
                            hash[key] = value[key];
                            if (isSync) {
                                var on = data.on || (data.on = {});
                                on["update:" + key] = function($event) {
                                    value[key] = $event;
                                };
                            }
                        }
                    };
                    for (var key in value) loop(key);
                }
            }
            return data;
        }
        /*  */
        /**
 * Runtime helper for rendering static trees.
 */        function renderStatic(index, isInFor) {
            var cached = this._staticTrees || (this._staticTrees = []);
            var tree = cached[index];
            // if has already-rendered static tree and not inside v-for,
            // we can reuse the same tree.
                        if (tree && !isInFor) {
                return tree;
            }
            // otherwise, render a fresh tree.
                        tree = cached[index] = this.$options.staticRenderFns[index].call(this._renderProxy, null, this);
            markStatic(tree, "__static__" + index, false);
            return tree;
        }
        /**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */        function markOnce(tree, index, key) {
            markStatic(tree, "__once__" + index + (key ? "_" + key : ""), true);
            return tree;
        }
        function markStatic(tree, key, isOnce) {
            if (Array.isArray(tree)) {
                for (var i = 0; i < tree.length; i++) {
                    if (tree[i] && typeof tree[i] !== "string") {
                        markStaticNode(tree[i], key + "_" + i, isOnce);
                    }
                }
            } else {
                markStaticNode(tree, key, isOnce);
            }
        }
        function markStaticNode(node, key, isOnce) {
            node.isStatic = true;
            node.key = key;
            node.isOnce = isOnce;
        }
        /*  */        function bindObjectListeners(data, value) {
            if (value) {
                if (!isPlainObject(value)) {
                    true && warn("v-on without argument expects an Object value", this);
                } else {
                    var on = data.on = data.on ? extend({}, data.on) : {};
                    for (var key in value) {
                        var existing = on[key];
                        var ours = value[key];
                        on[key] = existing ? [].concat(existing, ours) : ours;
                    }
                }
            }
            return data;
        }
        /*  */        function resolveScopedSlots(fns, // see flow/vnode
        res, 
        // the following are added in 2.6
        hasDynamicKeys, contentHashKey) {
            res = res || {
                $stable: !hasDynamicKeys
            };
            for (var i = 0; i < fns.length; i++) {
                var slot = fns[i];
                if (Array.isArray(slot)) {
                    resolveScopedSlots(slot, res, hasDynamicKeys);
                } else if (slot) {
                    // marker for reverse proxying v-slot without scope on this.$slots
                    if (slot.proxy) {
                        slot.fn.proxy = true;
                    }
                    res[slot.key] = slot.fn;
                }
            }
            if (contentHashKey) {
                res.$key = contentHashKey;
            }
            return res;
        }
        /*  */        function bindDynamicKeys(baseObj, values) {
            for (var i = 0; i < values.length; i += 2) {
                var key = values[i];
                if (typeof key === "string" && key) {
                    baseObj[values[i]] = values[i + 1];
                } else if (true && key !== "" && key !== null) {
                    // null is a special value for explicitly removing a binding
                    warn("Invalid value for dynamic directive argument (expected string or null): " + key, this);
                }
            }
            return baseObj;
        }
        // helper to dynamically append modifier runtime markers to event names.
        // ensure only append when value is already string, otherwise it will be cast
        // to string and cause the type check to miss.
                function prependModifier(value, symbol) {
            return typeof value === "string" ? symbol + value : value;
        }
        /*  */        function installRenderHelpers(target) {
            target._o = markOnce;
            target._n = toNumber;
            target._s = toString;
            target._l = renderList;
            target._t = renderSlot;
            target._q = looseEqual;
            target._i = looseIndexOf;
            target._m = renderStatic;
            target._f = resolveFilter;
            target._k = checkKeyCodes;
            target._b = bindObjectProps;
            target._v = createTextVNode;
            target._e = createEmptyVNode;
            target._u = resolveScopedSlots;
            target._g = bindObjectListeners;
            target._d = bindDynamicKeys;
            target._p = prependModifier;
        }
        /*  */        function FunctionalRenderContext(data, props, children, parent, Ctor) {
            var this$1 = this;
            var options = Ctor.options;
            // ensure the createElement function in functional components
            // gets a unique context - this is necessary for correct named slot check
                        var contextVm;
            if (hasOwn(parent, "_uid")) {
                contextVm = Object.create(parent);
                // $flow-disable-line
                                contextVm._original = parent;
            } else {
                // the context vm passed in is a functional context as well.
                // in this case we want to make sure we are able to get a hold to the
                // real context instance.
                contextVm = parent;
                // $flow-disable-line
                                parent = parent._original;
            }
            var isCompiled = isTrue(options._compiled);
            var needNormalization = !isCompiled;
            this.data = data;
            this.props = props;
            this.children = children;
            this.parent = parent;
            this.listeners = data.on || emptyObject;
            this.injections = resolveInject(options.inject, parent);
            this.slots = function() {
                if (!this$1.$slots) {
                    normalizeScopedSlots(data.scopedSlots, this$1.$slots = resolveSlots(children, parent));
                }
                return this$1.$slots;
            };
            Object.defineProperty(this, "scopedSlots", {
                enumerable: true,
                get: function get() {
                    return normalizeScopedSlots(data.scopedSlots, this.slots());
                }
            });
            // support for compiled functional template
                        if (isCompiled) {
                // exposing $options for renderStatic()
                this.$options = options;
                // pre-resolve slots for renderSlot()
                                this.$slots = this.slots();
                this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
            }
            if (options._scopeId) {
                this._c = function(a, b, c, d) {
                    var vnode = createElement(contextVm, a, b, c, d, needNormalization);
                    if (vnode && !Array.isArray(vnode)) {
                        vnode.fnScopeId = options._scopeId;
                        vnode.fnContext = parent;
                    }
                    return vnode;
                };
            } else {
                this._c = function(a, b, c, d) {
                    return createElement(contextVm, a, b, c, d, needNormalization);
                };
            }
        }
        installRenderHelpers(FunctionalRenderContext.prototype);
        function createFunctionalComponent(Ctor, propsData, data, contextVm, children) {
            var options = Ctor.options;
            var props = {};
            var propOptions = options.props;
            if (isDef(propOptions)) {
                for (var key in propOptions) {
                    props[key] = validateProp(key, propOptions, propsData || emptyObject);
                }
            } else {
                if (isDef(data.attrs)) {
                    mergeProps(props, data.attrs);
                }
                if (isDef(data.props)) {
                    mergeProps(props, data.props);
                }
            }
            var renderContext = new FunctionalRenderContext(data, props, children, contextVm, Ctor);
            var vnode = options.render.call(null, renderContext._c, renderContext);
            if (vnode instanceof VNode) {
                return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext);
            } else if (Array.isArray(vnode)) {
                var vnodes = normalizeChildren(vnode) || [];
                var res = new Array(vnodes.length);
                for (var i = 0; i < vnodes.length; i++) {
                    res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
                }
                return res;
            }
        }
        function cloneAndMarkFunctionalResult(vnode, data, contextVm, options, renderContext) {
            // #7817 clone node before setting fnContext, otherwise if the node is reused
            // (e.g. it was from a cached normal slot) the fnContext causes named slots
            // that should not be matched to match.
            var clone = cloneVNode(vnode);
            clone.fnContext = contextVm;
            clone.fnOptions = options;
            if (true) {
                (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
            }
            if (data.slot) {
                (clone.data || (clone.data = {})).slot = data.slot;
            }
            return clone;
        }
        function mergeProps(to, from) {
            for (var key in from) {
                to[camelize(key)] = from[key];
            }
        }
        /*  */
        /*  */
        /*  */
        /*  */
        // inline hooks to be invoked on component VNodes during patch
                var componentVNodeHooks = {
            init: function init(vnode, hydrating) {
                if (vnode.componentInstance && !vnode.componentInstance._isDestroyed && vnode.data.keepAlive) {
                    // kept-alive components, treat as a patch
                    var mountedNode = vnode;
                    // work around flow
                                        componentVNodeHooks.prepatch(mountedNode, mountedNode);
                } else {
                    var child = vnode.componentInstance = createComponentInstanceForVnode(vnode, activeInstance);
                    child.$mount(hydrating ? vnode.elm : undefined, hydrating);
                }
            },
            prepatch: function prepatch(oldVnode, vnode) {
                var options = vnode.componentOptions;
                var child = vnode.componentInstance = oldVnode.componentInstance;
                updateChildComponent(child, options.propsData, // updated props
                options.listeners, // updated listeners
                vnode, // new parent vnode
                options.children);
            },
            insert: function insert(vnode) {
                var context = vnode.context;
                var componentInstance = vnode.componentInstance;
                if (!componentInstance._isMounted) {
                    callHook(componentInstance, "onServiceCreated");
                    callHook(componentInstance, "onServiceAttached");
                    componentInstance._isMounted = true;
                    callHook(componentInstance, "mounted");
                }
                if (vnode.data.keepAlive) {
                    if (context._isMounted) {
                        // vue-router#1212
                        // During updates, a kept-alive component's child components may
                        // change, so directly walking the tree here may call activated hooks
                        // on incorrect children. Instead we push them into a queue which will
                        // be processed after the whole patch process ended.
                        queueActivatedComponent(componentInstance);
                    } else {
                        activateChildComponent(componentInstance, true /* direct */);
                    }
                }
            },
            destroy: function destroy(vnode) {
                var componentInstance = vnode.componentInstance;
                if (!componentInstance._isDestroyed) {
                    if (!vnode.data.keepAlive) {
                        componentInstance.$destroy();
                    } else {
                        deactivateChildComponent(componentInstance, true /* direct */);
                    }
                }
            }
        };
        var hooksToMerge = Object.keys(componentVNodeHooks);
        function createComponent(Ctor, data, context, children, tag) {
            if (isUndef(Ctor)) {
                return;
            }
            var baseCtor = context.$options._base;
            // plain options object: turn it into a constructor
                        if (isObject(Ctor)) {
                Ctor = baseCtor.extend(Ctor);
            }
            // if at this stage it's not a constructor or an async component factory,
            // reject.
                        if (typeof Ctor !== "function") {
                if (true) {
                    warn("Invalid Component definition: " + String(Ctor), context);
                }
                return;
            }
            // async component
                        var asyncFactory;
            if (isUndef(Ctor.cid)) {
                asyncFactory = Ctor;
                Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
                if (Ctor === undefined) {
                    // return a placeholder node for async component, which is rendered
                    // as a comment node but preserves all the raw information for the node.
                    // the information will be used for async server-rendering and hydration.
                    return createAsyncPlaceholder(asyncFactory, data, context, children, tag);
                }
            }
            data = data || {};
            // resolve constructor options in case global mixins are applied after
            // component constructor creation
                        resolveConstructorOptions(Ctor);
            // transform component v-model data into props & events
                        if (isDef(data.model)) {
                transformModel(Ctor.options, data);
            }
            // extract props
                        var propsData = extractPropsFromVNodeData(data, Ctor, tag, context);
            // fixed by xxxxxx
            // functional component
                        if (isTrue(Ctor.options.functional)) {
                return createFunctionalComponent(Ctor, propsData, data, context, children);
            }
            // extract listeners, since these needs to be treated as
            // child component listeners instead of DOM listeners
                        var listeners = data.on;
            // replace with listeners with .native modifier
            // so it gets processed during parent component patch.
                        data.on = data.nativeOn;
            if (isTrue(Ctor.options.abstract)) {
                // abstract components do not keep anything
                // other than props & listeners & slot
                // work around flow
                var slot = data.slot;
                data = {};
                if (slot) {
                    data.slot = slot;
                }
            }
            // install component management hooks onto the placeholder node
                        installComponentHooks(data);
            // return a placeholder vnode
                        var name = Ctor.options.name || tag;
            var vnode = new VNode("vue-component-" + Ctor.cid + (name ? "-" + name : ""), data, undefined, undefined, undefined, context, {
                Ctor: Ctor,
                propsData: propsData,
                listeners: listeners,
                tag: tag,
                children: children
            }, asyncFactory);
            return vnode;
        }
        function createComponentInstanceForVnode(vnode, // we know it's MountedComponentVNode but flow doesn't
        parent) {
            var options = {
                _isComponent: true,
                _parentVnode: vnode,
                parent: parent
            };
            // check inline-template render functions
                        var inlineTemplate = vnode.data.inlineTemplate;
            if (isDef(inlineTemplate)) {
                options.render = inlineTemplate.render;
                options.staticRenderFns = inlineTemplate.staticRenderFns;
            }
            return new vnode.componentOptions.Ctor(options);
        }
        function installComponentHooks(data) {
            var hooks = data.hook || (data.hook = {});
            for (var i = 0; i < hooksToMerge.length; i++) {
                var key = hooksToMerge[i];
                var existing = hooks[key];
                var toMerge = componentVNodeHooks[key];
                if (existing !== toMerge && !(existing && existing._merged)) {
                    hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
                }
            }
        }
        function mergeHook$1(f1, f2) {
            var merged = function(a, b) {
                // flow complains about extra args which is why we use any
                f1(a, b);
                f2(a, b);
            };
            merged._merged = true;
            return merged;
        }
        // transform component v-model info (value and callback) into
        // prop and event handler respectively.
                function transformModel(options, data) {
            var prop = options.model && options.model.prop || "value";
            var event = options.model && options.model.event || "input";
            (data.attrs || (data.attrs = {}))[prop] = data.model.value;
            var on = data.on || (data.on = {});
            var existing = on[event];
            var callback = data.model.callback;
            if (isDef(existing)) {
                if (Array.isArray(existing) ? existing.indexOf(callback) === -1 : existing !== callback) {
                    on[event] = [ callback ].concat(existing);
                }
            } else {
                on[event] = callback;
            }
        }
        /*  */        var SIMPLE_NORMALIZE = 1;
        var ALWAYS_NORMALIZE = 2;
        // wrapper function for providing a more flexible interface
        // without getting yelled at by flow
                function createElement(context, tag, data, children, normalizationType, alwaysNormalize) {
            if (Array.isArray(data) || isPrimitive(data)) {
                normalizationType = children;
                children = data;
                data = undefined;
            }
            if (isTrue(alwaysNormalize)) {
                normalizationType = ALWAYS_NORMALIZE;
            }
            return _createElement(context, tag, data, children, normalizationType);
        }
        function _createElement(context, tag, data, children, normalizationType) {
            if (isDef(data) && isDef(data.__ob__)) {
                true && warn("Avoid using observed data object as vnode data: " + JSON.stringify(data) + "\n" + "Always create fresh vnode data objects in each render!", context);
                return createEmptyVNode();
            }
            // object syntax in v-bind
                        if (isDef(data) && isDef(data.is)) {
                tag = data.is;
            }
            if (!tag) {
                // in case of component :is set to falsy value
                return createEmptyVNode();
            }
            // warn against non-primitive key
                        if (true && isDef(data) && isDef(data.key) && !isPrimitive(data.key)) {
                {
                    warn("Avoid using non-primitive value as key, " + "use string/number value instead.", context);
                }
            }
            // support single function children as default scoped slot
                        if (Array.isArray(children) && typeof children[0] === "function") {
                data = data || {};
                data.scopedSlots = {
                    default: children[0]
                };
                children.length = 0;
            }
            if (normalizationType === ALWAYS_NORMALIZE) {
                children = normalizeChildren(children);
            } else if (normalizationType === SIMPLE_NORMALIZE) {
                children = simpleNormalizeChildren(children);
            }
            var vnode, ns;
            if (typeof tag === "string") {
                var Ctor;
                ns = context.$vnode && context.$vnode.ns || config.getTagNamespace(tag);
                if (config.isReservedTag(tag)) {
                    // platform built-in elements
                    if (true && isDef(data) && isDef(data.nativeOn)) {
                        warn("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">.", context);
                    }
                    vnode = new VNode(config.parsePlatformTagName(tag), data, children, undefined, undefined, context);
                } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, "components", tag))) {
                    // component
                    vnode = createComponent(Ctor, data, context, children, tag);
                } else {
                    // unknown or unlisted namespaced elements
                    // check at runtime because it may get assigned a namespace when its
                    // parent normalizes children
                    vnode = new VNode(tag, data, children, undefined, undefined, context);
                }
            } else {
                // direct component options / constructor
                vnode = createComponent(tag, data, context, children);
            }
            if (Array.isArray(vnode)) {
                return vnode;
            } else if (isDef(vnode)) {
                if (isDef(ns)) {
                    applyNS(vnode, ns);
                }
                if (isDef(data)) {
                    registerDeepBindings(data);
                }
                return vnode;
            } else {
                return createEmptyVNode();
            }
        }
        function applyNS(vnode, ns, force) {
            vnode.ns = ns;
            if (vnode.tag === "foreignObject") {
                // use default namespace inside foreignObject
                ns = undefined;
                force = true;
            }
            if (isDef(vnode.children)) {
                for (var i = 0, l = vnode.children.length; i < l; i++) {
                    var child = vnode.children[i];
                    if (isDef(child.tag) && (isUndef(child.ns) || isTrue(force) && child.tag !== "svg")) {
                        applyNS(child, ns, force);
                    }
                }
            }
        }
        // ref #5318
        // necessary to ensure parent re-render when deep bindings like :style and
        // :class are used on slot nodes
                function registerDeepBindings(data) {
            if (isObject(data.style)) {
                traverse(data.style);
            }
            if (isObject(data.class)) {
                traverse(data.class);
            }
        }
        /*  */        function initRender(vm) {
            vm._vnode = null;
            // the root of the child tree
                        vm._staticTrees = null;
            // v-once cached trees
                        var options = vm.$options;
            var parentVnode = vm.$vnode = options._parentVnode;
            // the placeholder node in parent tree
                        var renderContext = parentVnode && parentVnode.context;
            vm.$slots = resolveSlots(options._renderChildren, renderContext);
            vm.$scopedSlots = emptyObject;
            // bind the createElement fn to this instance
            // so that we get proper render context inside it.
            // args order: tag, data, children, normalizationType, alwaysNormalize
            // internal version is used by render functions compiled from templates
                        vm._c = function(a, b, c, d) {
                return createElement(vm, a, b, c, d, false);
            };
            // normalization is always applied for the public version, used in
            // user-written render functions.
                        vm.$createElement = function(a, b, c, d) {
                return createElement(vm, a, b, c, d, true);
            };
            // $attrs & $listeners are exposed for easier HOC creation.
            // they need to be reactive so that HOCs using them are always updated
                        var parentData = parentVnode && parentVnode.data;
            /* istanbul ignore else */            if (true) {
                defineReactive$$1(vm, "$attrs", parentData && parentData.attrs || emptyObject, function() {
                    !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
                }, true);
                defineReactive$$1(vm, "$listeners", options._parentListeners || emptyObject, function() {
                    !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
                }, true);
            } else {}
        }
        var currentRenderingInstance = null;
        function renderMixin(Vue) {
            // install runtime convenience helpers
            installRenderHelpers(Vue.prototype);
            Vue.prototype.$nextTick = function(fn) {
                return nextTick(fn, this);
            };
            Vue.prototype._render = function() {
                var vm = this;
                var ref = vm.$options;
                var render = ref.render;
                var _parentVnode = ref._parentVnode;
                if (_parentVnode) {
                    vm.$scopedSlots = normalizeScopedSlots(_parentVnode.data.scopedSlots, vm.$slots, vm.$scopedSlots);
                }
                // set parent vnode. this allows render functions to have access
                // to the data on the placeholder node.
                                vm.$vnode = _parentVnode;
                // render self
                                var vnode;
                try {
                    // There's no need to maintain a stack because all render fns are called
                    // separately from one another. Nested component's render fns are called
                    // when parent component is patched.
                    currentRenderingInstance = vm;
                    vnode = render.call(vm._renderProxy, vm.$createElement);
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    handleError(e, vm, "render");
                    // return error render result,
                    // or previous vnode to prevent render error causing blank component
                    /* istanbul ignore else */                    if (true && vm.$options.renderError) {
                        try {
                            vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
                        } catch (e) {
                            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                            handleError(e, vm, "renderError");
                            vnode = vm._vnode;
                        }
                    } else {
                        vnode = vm._vnode;
                    }
                } finally {
                    currentRenderingInstance = null;
                }
                // if the returned array contains only a single node, allow it
                                if (Array.isArray(vnode) && vnode.length === 1) {
                    vnode = vnode[0];
                }
                // return empty vnode in case the render function errored out
                                if (!(vnode instanceof VNode)) {
                    if (true && Array.isArray(vnode)) {
                        warn("Multiple root nodes returned from render function. Render function " + "should return a single root node.", vm);
                    }
                    vnode = createEmptyVNode();
                }
                // set parent
                                vnode.parent = _parentVnode;
                return vnode;
            };
        }
        /*  */        function ensureCtor(comp, base) {
            if (comp.__esModule || hasSymbol && comp[Symbol.toStringTag] === "Module") {
                comp = comp.default;
            }
            return isObject(comp) ? base.extend(comp) : comp;
        }
        function createAsyncPlaceholder(factory, data, context, children, tag) {
            var node = createEmptyVNode();
            node.asyncFactory = factory;
            node.asyncMeta = {
                data: data,
                context: context,
                children: children,
                tag: tag
            };
            return node;
        }
        function resolveAsyncComponent(factory, baseCtor) {
            if (isTrue(factory.error) && isDef(factory.errorComp)) {
                return factory.errorComp;
            }
            if (isDef(factory.resolved)) {
                return factory.resolved;
            }
            var owner = currentRenderingInstance;
            if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
                // already pending
                factory.owners.push(owner);
            }
            if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
                return factory.loadingComp;
            }
            if (owner && !isDef(factory.owners)) {
                var owners = factory.owners = [ owner ];
                var sync = true;
                var timerLoading = null;
                var timerTimeout = null;
                owner.$on("hook:destroyed", function() {
                    return remove(owners, owner);
                });
                var forceRender = function(renderCompleted) {
                    for (var i = 0, l = owners.length; i < l; i++) {
                        owners[i].$forceUpdate();
                    }
                    if (renderCompleted) {
                        owners.length = 0;
                        if (timerLoading !== null) {
                            clearTimeout(timerLoading);
                            timerLoading = null;
                        }
                        if (timerTimeout !== null) {
                            clearTimeout(timerTimeout);
                            timerTimeout = null;
                        }
                    }
                };
                var resolve = once(function(res) {
                    // cache resolved
                    factory.resolved = ensureCtor(res, baseCtor);
                    // invoke callbacks only if this is not a synchronous resolve
                    // (async resolves are shimmed as synchronous during SSR)
                                        if (!sync) {
                        forceRender(true);
                    } else {
                        owners.length = 0;
                    }
                });
                var reject = once(function(reason) {
                    true && warn("Failed to resolve async component: " + String(factory) + (reason ? "\nReason: " + reason : ""));
                    if (isDef(factory.errorComp)) {
                        factory.error = true;
                        forceRender(true);
                    }
                });
                var res = factory(resolve, reject);
                if (isObject(res)) {
                    if (isPromise(res)) {
                        // () => Promise
                        if (isUndef(factory.resolved)) {
                            res.then(resolve, reject);
                        }
                    } else if (isPromise(res.component)) {
                        res.component.then(resolve, reject);
                        if (isDef(res.error)) {
                            factory.errorComp = ensureCtor(res.error, baseCtor);
                        }
                        if (isDef(res.loading)) {
                            factory.loadingComp = ensureCtor(res.loading, baseCtor);
                            if (res.delay === 0) {
                                factory.loading = true;
                            } else {
                                timerLoading = setTimeout(function() {
                                    timerLoading = null;
                                    if (isUndef(factory.resolved) && isUndef(factory.error)) {
                                        factory.loading = true;
                                        forceRender(false);
                                    }
                                }, res.delay || 200);
                            }
                        }
                        if (isDef(res.timeout)) {
                            timerTimeout = setTimeout(function() {
                                timerTimeout = null;
                                if (isUndef(factory.resolved)) {
                                    reject(true ? "timeout (" + res.timeout + "ms)" : undefined);
                                }
                            }, res.timeout);
                        }
                    }
                }
                sync = false;
                // return in case resolved synchronously
                                return factory.loading ? factory.loadingComp : factory.resolved;
            }
        }
        /*  */        function isAsyncPlaceholder(node) {
            return node.isComment && node.asyncFactory;
        }
        /*  */        function getFirstComponentChild(children) {
            if (Array.isArray(children)) {
                for (var i = 0; i < children.length; i++) {
                    var c = children[i];
                    if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
                        return c;
                    }
                }
            }
        }
        /*  */
        /*  */        function initEvents(vm) {
            vm._events = Object.create(null);
            vm._hasHookEvent = false;
            // init parent attached events
                        var listeners = vm.$options._parentListeners;
            if (listeners) {
                updateComponentListeners(vm, listeners);
            }
        }
        var target;
        function add(event, fn) {
            target.$on(event, fn);
        }
        function remove$1(event, fn) {
            target.$off(event, fn);
        }
        function createOnceHandler(event, fn) {
            var _target = target;
            return function onceHandler() {
                var res = fn.apply(null, arguments);
                if (res !== null) {
                    _target.$off(event, onceHandler);
                }
            };
        }
        function updateComponentListeners(vm, listeners, oldListeners) {
            target = vm;
            updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
            target = undefined;
        }
        function eventsMixin(Vue) {
            var hookRE = /^hook:/;
            Vue.prototype.$on = function(event, fn) {
                var vm = this;
                if (Array.isArray(event)) {
                    for (var i = 0, l = event.length; i < l; i++) {
                        vm.$on(event[i], fn);
                    }
                } else {
                    (vm._events[event] || (vm._events[event] = [])).push(fn);
                    // optimize hook:event cost by using a boolean flag marked at registration
                    // instead of a hash lookup
                                        if (hookRE.test(event)) {
                        vm._hasHookEvent = true;
                    }
                }
                return vm;
            };
            Vue.prototype.$once = function(event, fn) {
                var vm = this;
                function on() {
                    vm.$off(event, on);
                    fn.apply(vm, arguments);
                }
                on.fn = fn;
                vm.$on(event, on);
                return vm;
            };
            Vue.prototype.$off = function(event, fn) {
                var vm = this;
                // all
                                if (!arguments.length) {
                    vm._events = Object.create(null);
                    return vm;
                }
                // array of events
                                if (Array.isArray(event)) {
                    for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
                        vm.$off(event[i$1], fn);
                    }
                    return vm;
                }
                // specific event
                                var cbs = vm._events[event];
                if (!cbs) {
                    return vm;
                }
                if (!fn) {
                    vm._events[event] = null;
                    return vm;
                }
                // specific handler
                                var cb;
                var i = cbs.length;
                while (i--) {
                    cb = cbs[i];
                    if (cb === fn || cb.fn === fn) {
                        cbs.splice(i, 1);
                        break;
                    }
                }
                return vm;
            };
            Vue.prototype.$emit = function(event) {
                var vm = this;
                if (true) {
                    var lowerCaseEvent = event.toLowerCase();
                    if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
                        tip('Event "' + lowerCaseEvent + '" is emitted in component ' + formatComponentName(vm) + ' but the handler is registered for "' + event + '". ' + "Note that HTML attributes are case-insensitive and you cannot use " + "v-on to listen to camelCase events when using in-DOM templates. " + 'You should probably use "' + hyphenate(event) + '" instead of "' + event + '".');
                    }
                }
                var cbs = vm._events[event];
                if (cbs) {
                    cbs = cbs.length > 1 ? toArray(cbs) : cbs;
                    var args = toArray(arguments, 1);
                    var info = 'event handler for "' + event + '"';
                    for (var i = 0, l = cbs.length; i < l; i++) {
                        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
                    }
                }
                return vm;
            };
        }
        /*  */        var activeInstance = null;
        var isUpdatingChildComponent = false;
        function setActiveInstance(vm) {
            var prevActiveInstance = activeInstance;
            activeInstance = vm;
            return function() {
                activeInstance = prevActiveInstance;
            };
        }
        function initLifecycle(vm) {
            var options = vm.$options;
            // locate first non-abstract parent
                        var parent = options.parent;
            if (parent && !options.abstract) {
                while (parent.$options.abstract && parent.$parent) {
                    parent = parent.$parent;
                }
                parent.$children.push(vm);
            }
            vm.$parent = parent;
            vm.$root = parent ? parent.$root : vm;
            vm.$children = [];
            vm.$refs = {};
            vm._watcher = null;
            vm._inactive = null;
            vm._directInactive = false;
            vm._isMounted = false;
            vm._isDestroyed = false;
            vm._isBeingDestroyed = false;
        }
        function lifecycleMixin(Vue) {
            Vue.prototype._update = function(vnode, hydrating) {
                var vm = this;
                var prevEl = vm.$el;
                var prevVnode = vm._vnode;
                var restoreActiveInstance = setActiveInstance(vm);
                vm._vnode = vnode;
                // Vue.prototype.__patch__ is injected in entry points
                // based on the rendering backend used.
                                if (!prevVnode) {
                    // initial render
                    vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
                } else {
                    // updates
                    vm.$el = vm.__patch__(prevVnode, vnode);
                }
                restoreActiveInstance();
                // update __vue__ reference
                                if (prevEl) {
                    prevEl.__vue__ = null;
                }
                if (vm.$el) {
                    vm.$el.__vue__ = vm;
                }
                // if parent is an HOC, update its $el as well
                                if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
                    vm.$parent.$el = vm.$el;
                }
                // updated hook is called by the scheduler to ensure that children are
                // updated in a parent's updated hook.
                        };
            Vue.prototype.$forceUpdate = function() {
                var vm = this;
                if (vm._watcher) {
                    vm._watcher.update();
                }
            };
            Vue.prototype.$destroy = function() {
                var vm = this;
                if (vm._isBeingDestroyed) {
                    return;
                }
                callHook(vm, "beforeDestroy");
                vm._isBeingDestroyed = true;
                // remove self from parent
                                var parent = vm.$parent;
                if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
                    remove(parent.$children, vm);
                }
                // teardown watchers
                                if (vm._watcher) {
                    vm._watcher.teardown();
                }
                var i = vm._watchers.length;
                while (i--) {
                    vm._watchers[i].teardown();
                }
                // remove reference from data ob
                // frozen object may not have observer.
                                if (vm._data.__ob__) {
                    vm._data.__ob__.vmCount--;
                }
                // call the last hook...
                                vm._isDestroyed = true;
                // invoke destroy hooks on current rendered tree
                                vm.__patch__(vm._vnode, null);
                // fire destroyed hook
                                callHook(vm, "destroyed");
                // turn off all instance listeners.
                                vm.$off();
                // remove __vue__ reference
                                if (vm.$el) {
                    vm.$el.__vue__ = null;
                }
                // release circular reference (#6759)
                                if (vm.$vnode) {
                    vm.$vnode.parent = null;
                }
            };
        }
        function updateChildComponent(vm, propsData, listeners, parentVnode, renderChildren) {
            if (true) {
                isUpdatingChildComponent = true;
            }
            // determine whether component has slot children
            // we need to do this before overwriting $options._renderChildren.
            // check if there are dynamic scopedSlots (hand-written or compiled but with
            // dynamic slot names). Static scoped slots compiled from template has the
            // "$stable" marker.
                        var newScopedSlots = parentVnode.data.scopedSlots;
            var oldScopedSlots = vm.$scopedSlots;
            var hasDynamicScopedSlot = !!(newScopedSlots && !newScopedSlots.$stable || oldScopedSlots !== emptyObject && !oldScopedSlots.$stable || newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key);
            // Any static slot children from the parent may have changed during parent's
            // update. Dynamic scoped slots may also have changed. In such cases, a forced
            // update is necessary to ensure correctness.
                        var needsForceUpdate = !!(renderChildren || // has new static slots
            vm.$options._renderChildren || // has old static slots
            hasDynamicScopedSlot);
            vm.$options._parentVnode = parentVnode;
            vm.$vnode = parentVnode;
            // update vm's placeholder node without re-render
                        if (vm._vnode) {
                // update child tree's parent
                vm._vnode.parent = parentVnode;
            }
            vm.$options._renderChildren = renderChildren;
            // update $attrs and $listeners hash
            // these are also reactive so they may trigger child update if the child
            // used them during render
                        vm.$attrs = parentVnode.data.attrs || emptyObject;
            vm.$listeners = listeners || emptyObject;
            // update props
                        if (propsData && vm.$options.props) {
                toggleObserving(false);
                var props = vm._props;
                var propKeys = vm.$options._propKeys || [];
                for (var i = 0; i < propKeys.length; i++) {
                    var key = propKeys[i];
                    var propOptions = vm.$options.props;
                    // wtf flow?
                                        props[key] = validateProp(key, propOptions, propsData, vm);
                }
                toggleObserving(true);
                // keep a copy of raw propsData
                                vm.$options.propsData = propsData;
            }
            // fixed by xxxxxx update properties(mp runtime)
                        vm._$updateProperties && vm._$updateProperties(vm);
            // update listeners
                        listeners = listeners || emptyObject;
            var oldListeners = vm.$options._parentListeners;
            vm.$options._parentListeners = listeners;
            updateComponentListeners(vm, listeners, oldListeners);
            // resolve slots + force update if has children
                        if (needsForceUpdate) {
                vm.$slots = resolveSlots(renderChildren, parentVnode.context);
                vm.$forceUpdate();
            }
            if (true) {
                isUpdatingChildComponent = false;
            }
        }
        function isInInactiveTree(vm) {
            while (vm && (vm = vm.$parent)) {
                if (vm._inactive) {
                    return true;
                }
            }
            return false;
        }
        function activateChildComponent(vm, direct) {
            if (direct) {
                vm._directInactive = false;
                if (isInInactiveTree(vm)) {
                    return;
                }
            } else if (vm._directInactive) {
                return;
            }
            if (vm._inactive || vm._inactive === null) {
                vm._inactive = false;
                for (var i = 0; i < vm.$children.length; i++) {
                    activateChildComponent(vm.$children[i]);
                }
                callHook(vm, "activated");
            }
        }
        function deactivateChildComponent(vm, direct) {
            if (direct) {
                vm._directInactive = true;
                if (isInInactiveTree(vm)) {
                    return;
                }
            }
            if (!vm._inactive) {
                vm._inactive = true;
                for (var i = 0; i < vm.$children.length; i++) {
                    deactivateChildComponent(vm.$children[i]);
                }
                callHook(vm, "deactivated");
            }
        }
        function callHook(vm, hook) {
            // #7573 disable dep collection when invoking lifecycle hooks
            pushTarget();
            var handlers = vm.$options[hook];
            var info = hook + " hook";
            if (handlers) {
                for (var i = 0, j = handlers.length; i < j; i++) {
                    invokeWithErrorHandling(handlers[i], vm, null, vm, info);
                }
            }
            if (vm._hasHookEvent) {
                vm.$emit("hook:" + hook);
            }
            popTarget();
        }
        /*  */        var MAX_UPDATE_COUNT = 100;
        var queue = [];
        var activatedChildren = [];
        var has = {};
        var circular = {};
        var waiting = false;
        var flushing = false;
        var index = 0;
        /**
 * Reset the scheduler's state.
 */        function resetSchedulerState() {
            index = queue.length = activatedChildren.length = 0;
            has = {};
            if (true) {
                circular = {};
            }
            waiting = flushing = false;
        }
        // Async edge case #6566 requires saving the timestamp when event listeners are
        // attached. However, calling performance.now() has a perf overhead especially
        // if the page has thousands of event listeners. Instead, we take a timestamp
        // every time the scheduler flushes and use that for all event listeners
        // attached during that flush.
                var currentFlushTimestamp = 0;
        // Async edge case fix requires storing an event listener's attach timestamp.
                var getNow = Date.now;
        // Determine what event timestamp the browser is using. Annoyingly, the
        // timestamp can either be hi-res (relative to page load) or low-res
        // (relative to UNIX epoch), so in order to compare time we have to use the
        // same timestamp type when saving the flush timestamp.
        // All IE versions use low-res event timestamps, and have problematic clock
        // implementations (#9632)
                if (inBrowser && !isIE) {
            var performance = window.performance;
            if (performance && typeof performance.now === "function" && getNow() > document.createEvent("Event").timeStamp) {
                // if the event timestamp, although evaluated AFTER the Date.now(), is
                // smaller than it, it means the event is using a hi-res timestamp,
                // and we need to use the hi-res version for event listener timestamps as
                // well.
                getNow = function() {
                    return performance.now();
                };
            }
        }
        /**
 * Flush both queues and run the watchers.
 */        function flushSchedulerQueue() {
            currentFlushTimestamp = getNow();
            flushing = true;
            var watcher, id;
            // Sort queue before flush.
            // This ensures that:
            // 1. Components are updated from parent to child. (because parent is always
            //    created before the child)
            // 2. A component's user watchers are run before its render watcher (because
            //    user watchers are created before the render watcher)
            // 3. If a component is destroyed during a parent component's watcher run,
            //    its watchers can be skipped.
                        queue.sort(function(a, b) {
                return a.id - b.id;
            });
            // do not cache length because more watchers might be pushed
            // as we run existing watchers
                        for (index = 0; index < queue.length; index++) {
                watcher = queue[index];
                if (watcher.before) {
                    watcher.before();
                }
                id = watcher.id;
                has[id] = null;
                watcher.run();
                // in dev build, check and stop circular updates.
                                if (true && has[id] != null) {
                    circular[id] = (circular[id] || 0) + 1;
                    if (circular[id] > MAX_UPDATE_COUNT) {
                        warn("You may have an infinite update loop " + (watcher.user ? 'in watcher with expression "' + watcher.expression + '"' : "in a component render function."), watcher.vm);
                        break;
                    }
                }
            }
            // keep copies of post queues before resetting state
                        var activatedQueue = activatedChildren.slice();
            var updatedQueue = queue.slice();
            resetSchedulerState();
            // call component updated and activated hooks
                        callActivatedHooks(activatedQueue);
            callUpdatedHooks(updatedQueue);
            // devtool hook
            /* istanbul ignore if */            if (devtools && config.devtools) {
                devtools.emit("flush");
            }
        }
        function callUpdatedHooks(queue) {
            var i = queue.length;
            while (i--) {
                var watcher = queue[i];
                var vm = watcher.vm;
                if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
                    callHook(vm, "updated");
                }
            }
        }
        /**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */        function queueActivatedComponent(vm) {
            // setting _inactive to false here so that a render function can
            // rely on checking whether it's in an inactive tree (e.g. router-view)
            vm._inactive = false;
            activatedChildren.push(vm);
        }
        function callActivatedHooks(queue) {
            for (var i = 0; i < queue.length; i++) {
                queue[i]._inactive = true;
                activateChildComponent(queue[i], true /* true */);
            }
        }
        /**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */        function queueWatcher(watcher) {
            var id = watcher.id;
            if (has[id] == null) {
                has[id] = true;
                if (!flushing) {
                    queue.push(watcher);
                } else {
                    // if already flushing, splice the watcher based on its id
                    // if already past its id, it will be run next immediately.
                    var i = queue.length - 1;
                    while (i > index && queue[i].id > watcher.id) {
                        i--;
                    }
                    queue.splice(i + 1, 0, watcher);
                }
                // queue the flush
                                if (!waiting) {
                    waiting = true;
                    if (true && !config.async) {
                        flushSchedulerQueue();
                        return;
                    }
                    nextTick(flushSchedulerQueue);
                }
            }
        }
        /*  */        var uid$2 = 0;
        /**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */        var Watcher = function Watcher(vm, expOrFn, cb, options, isRenderWatcher) {
            this.vm = vm;
            if (isRenderWatcher) {
                vm._watcher = this;
            }
            vm._watchers.push(this);
            // options
                        if (options) {
                this.deep = !!options.deep;
                this.user = !!options.user;
                this.lazy = !!options.lazy;
                this.sync = !!options.sync;
                this.before = options.before;
            } else {
                this.deep = this.user = this.lazy = this.sync = false;
            }
            this.cb = cb;
            this.id = ++uid$2;
            // uid for batching
                        this.active = true;
            this.dirty = this.lazy;
            // for lazy watchers
                        this.deps = [];
            this.newDeps = [];
            this.depIds = new _Set();
            this.newDepIds = new _Set();
            this.expression = true ? expOrFn.toString() : undefined;
            // parse expression for getter
                        if (typeof expOrFn === "function") {
                this.getter = expOrFn;
            } else {
                this.getter = parsePath(expOrFn);
                if (!this.getter) {
                    this.getter = noop;
                    true && warn('Failed watching path: "' + expOrFn + '" ' + "Watcher only accepts simple dot-delimited paths. " + "For full control, use a function instead.", vm);
                }
            }
            this.value = this.lazy ? undefined : this.get();
        };
        /**
 * Evaluate the getter, and re-collect dependencies.
 */        Watcher.prototype.get = function get() {
            pushTarget(this);
            var value;
            var vm = this.vm;
            try {
                value = this.getter.call(vm, vm);
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                if (this.user) {
                    handleError(e, vm, 'getter for watcher "' + this.expression + '"');
                } else {
                    throw e;
                }
            } finally {
                // "touch" every property so they are all tracked as
                // dependencies for deep watching
                if (this.deep) {
                    traverse(value);
                }
                popTarget();
                this.cleanupDeps();
            }
            return value;
        };
        /**
 * Add a dependency to this directive.
 */        Watcher.prototype.addDep = function addDep(dep) {
            var id = dep.id;
            if (!this.newDepIds.has(id)) {
                this.newDepIds.add(id);
                this.newDeps.push(dep);
                if (!this.depIds.has(id)) {
                    dep.addSub(this);
                }
            }
        };
        /**
 * Clean up for dependency collection.
 */        Watcher.prototype.cleanupDeps = function cleanupDeps() {
            var i = this.deps.length;
            while (i--) {
                var dep = this.deps[i];
                if (!this.newDepIds.has(dep.id)) {
                    dep.removeSub(this);
                }
            }
            var tmp = this.depIds;
            this.depIds = this.newDepIds;
            this.newDepIds = tmp;
            this.newDepIds.clear();
            tmp = this.deps;
            this.deps = this.newDeps;
            this.newDeps = tmp;
            this.newDeps.length = 0;
        };
        /**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */        Watcher.prototype.update = function update() {
            /* istanbul ignore else */
            if (this.lazy) {
                this.dirty = true;
            } else if (this.sync) {
                this.run();
            } else {
                queueWatcher(this);
            }
        };
        /**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */        Watcher.prototype.run = function run() {
            if (this.active) {
                var value = this.get();
                if (value !== this.value || 
                // Deep watchers and watchers on Object/Arrays should fire even
                // when the value is the same, because the value may
                // have mutated.
                isObject(value) || this.deep) {
                    // set new value
                    var oldValue = this.value;
                    this.value = value;
                    if (this.user) {
                        try {
                            this.cb.call(this.vm, value, oldValue);
                        } catch (e) {
                            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                            handleError(e, this.vm, 'callback for watcher "' + this.expression + '"');
                        }
                    } else {
                        this.cb.call(this.vm, value, oldValue);
                    }
                }
            }
        };
        /**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */        Watcher.prototype.evaluate = function evaluate() {
            this.value = this.get();
            this.dirty = false;
        };
        /**
 * Depend on all deps collected by this watcher.
 */        Watcher.prototype.depend = function depend() {
            var i = this.deps.length;
            while (i--) {
                this.deps[i].depend();
            }
        };
        /**
 * Remove self from all dependencies' subscriber list.
 */        Watcher.prototype.teardown = function teardown() {
            if (this.active) {
                // remove self from vm's watcher list
                // this is a somewhat expensive operation so we skip it
                // if the vm is being destroyed.
                if (!this.vm._isBeingDestroyed) {
                    remove(this.vm._watchers, this);
                }
                var i = this.deps.length;
                while (i--) {
                    this.deps[i].removeSub(this);
                }
                this.active = false;
            }
        };
        /*  */        var sharedPropertyDefinition = {
            enumerable: true,
            configurable: true,
            get: noop,
            set: noop
        };
        function proxy(target, sourceKey, key) {
            sharedPropertyDefinition.get = function proxyGetter() {
                return this[sourceKey][key];
            };
            sharedPropertyDefinition.set = function proxySetter(val) {
                this[sourceKey][key] = val;
            };
            Object.defineProperty(target, key, sharedPropertyDefinition);
        }
        function initState(vm) {
            vm._watchers = [];
            var opts = vm.$options;
            if (opts.props) {
                initProps(vm, opts.props);
            }
            if (opts.methods) {
                initMethods(vm, opts.methods);
            }
            if (opts.data) {
                initData(vm);
            } else {
                observe(vm._data = {}, true /* asRootData */);
            }
            if (opts.computed) {
                initComputed(vm, opts.computed);
            }
            if (opts.watch && opts.watch !== nativeWatch) {
                initWatch(vm, opts.watch);
            }
        }
        function initProps(vm, propsOptions) {
            var propsData = vm.$options.propsData || {};
            var props = vm._props = {};
            // cache prop keys so that future props updates can iterate using Array
            // instead of dynamic object key enumeration.
                        var keys = vm.$options._propKeys = [];
            var isRoot = !vm.$parent;
            // root instance props should be converted
                        if (!isRoot) {
                toggleObserving(false);
            }
            var loop = function(key) {
                keys.push(key);
                var value = validateProp(key, propsOptions, propsData, vm);
                /* istanbul ignore else */                if (true) {
                    var hyphenatedKey = hyphenate(key);
                    if (isReservedAttribute(hyphenatedKey) || config.isReservedAttr(hyphenatedKey)) {
                        warn('"' + hyphenatedKey + '" is a reserved attribute and cannot be used as component prop.', vm);
                    }
                    defineReactive$$1(props, key, value, function() {
                        if (!isRoot && !isUpdatingChildComponent) {
                            {
                                if (vm.mpHost === "mp-baidu") {
                                    //百度 observer 在 setData callback 之后触发，直接忽略该 warn
                                    return;
                                }
                                //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
                                                                if (key === "value" && Array.isArray(vm.$options.behaviors) && vm.$options.behaviors.indexOf("uni://form-field") !== -1) {
                                    return;
                                }
                                if (vm._getFormData) {
                                    return;
                                }
                                var $parent = vm.$parent;
                                while ($parent) {
                                    if ($parent.__next_tick_pending) {
                                        return;
                                    }
                                    $parent = $parent.$parent;
                                }
                            }
                            warn("Avoid mutating a prop directly since the value will be " + "overwritten whenever the parent component re-renders. " + "Instead, use a data or computed property based on the prop's " + 'value. Prop being mutated: "' + key + '"', vm);
                        }
                    });
                } else {}
                // static props are already proxied on the component's prototype
                // during Vue.extend(). We only need to proxy props defined at
                // instantiation here.
                                if (!(key in vm)) {
                    proxy(vm, "_props", key);
                }
            };
            for (var key in propsOptions) loop(key);
            toggleObserving(true);
        }
        function initData(vm) {
            var data = vm.$options.data;
            data = vm._data = typeof data === "function" ? getData(data, vm) : data || {};
            if (!isPlainObject(data)) {
                data = {};
                true && warn("data functions should return an object:\n" + "https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function", vm);
            }
            // proxy data on instance
                        var keys = Object.keys(data);
            var props = vm.$options.props;
            var methods = vm.$options.methods;
            var i = keys.length;
            while (i--) {
                var key = keys[i];
                if (true) {
                    if (methods && hasOwn(methods, key)) {
                        warn('Method "' + key + '" has already been defined as a data property.', vm);
                    }
                }
                if (props && hasOwn(props, key)) {
                    true && warn('The data property "' + key + '" is already declared as a prop. ' + "Use prop default value instead.", vm);
                } else if (!isReserved(key)) {
                    proxy(vm, "_data", key);
                }
            }
            // observe data
                        observe(data, true /* asRootData */);
        }
        function getData(data, vm) {
            // #7573 disable dep collection when invoking data getters
            pushTarget();
            try {
                return data.call(vm, vm);
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                handleError(e, vm, "data()");
                return {};
            } finally {
                popTarget();
            }
        }
        var computedWatcherOptions = {
            lazy: true
        };
        function initComputed(vm, computed) {
            // $flow-disable-line
            var watchers = vm._computedWatchers = Object.create(null);
            // computed properties are just getters during SSR
                        var isSSR = isServerRendering();
            for (var key in computed) {
                var userDef = computed[key];
                var getter = typeof userDef === "function" ? userDef : userDef.get;
                if (true && getter == null) {
                    warn('Getter is missing for computed property "' + key + '".', vm);
                }
                if (!isSSR) {
                    // create internal watcher for the computed property.
                    watchers[key] = new Watcher(vm, getter || noop, noop, computedWatcherOptions);
                }
                // component-defined computed properties are already defined on the
                // component prototype. We only need to define computed properties defined
                // at instantiation here.
                                if (!(key in vm)) {
                    defineComputed(vm, key, userDef);
                } else if (true) {
                    if (key in vm.$data) {
                        warn('The computed property "' + key + '" is already defined in data.', vm);
                    } else if (vm.$options.props && key in vm.$options.props) {
                        warn('The computed property "' + key + '" is already defined as a prop.', vm);
                    }
                }
            }
        }
        function defineComputed(target, key, userDef) {
            var shouldCache = !isServerRendering();
            if (typeof userDef === "function") {
                sharedPropertyDefinition.get = shouldCache ? createComputedGetter(key) : createGetterInvoker(userDef);
                sharedPropertyDefinition.set = noop;
            } else {
                sharedPropertyDefinition.get = userDef.get ? shouldCache && userDef.cache !== false ? createComputedGetter(key) : createGetterInvoker(userDef.get) : noop;
                sharedPropertyDefinition.set = userDef.set || noop;
            }
            if (true && sharedPropertyDefinition.set === noop) {
                sharedPropertyDefinition.set = function() {
                    warn('Computed property "' + key + '" was assigned to but it has no setter.', this);
                };
            }
            Object.defineProperty(target, key, sharedPropertyDefinition);
        }
        function createComputedGetter(key) {
            return function computedGetter() {
                var watcher = this._computedWatchers && this._computedWatchers[key];
                if (watcher) {
                    if (watcher.dirty) {
                        watcher.evaluate();
                    }
                    if (Dep.SharedObject.target) {
                        // fixed by xxxxxx
                        watcher.depend();
                    }
                    return watcher.value;
                }
            };
        }
        function createGetterInvoker(fn) {
            return function computedGetter() {
                return fn.call(this, this);
            };
        }
        function initMethods(vm, methods) {
            var props = vm.$options.props;
            for (var key in methods) {
                if (true) {
                    if (typeof methods[key] !== "function") {
                        warn('Method "' + key + '" has type "' + typeof methods[key] + '" in the component definition. ' + "Did you reference the function correctly?", vm);
                    }
                    if (props && hasOwn(props, key)) {
                        warn('Method "' + key + '" has already been defined as a prop.', vm);
                    }
                    if (key in vm && isReserved(key)) {
                        warn('Method "' + key + '" conflicts with an existing Vue instance method. ' + "Avoid defining component methods that start with _ or $.");
                    }
                }
                vm[key] = typeof methods[key] !== "function" ? noop : bind(methods[key], vm);
            }
        }
        function initWatch(vm, watch) {
            for (var key in watch) {
                var handler = watch[key];
                if (Array.isArray(handler)) {
                    for (var i = 0; i < handler.length; i++) {
                        createWatcher(vm, key, handler[i]);
                    }
                } else {
                    createWatcher(vm, key, handler);
                }
            }
        }
        function createWatcher(vm, expOrFn, handler, options) {
            if (isPlainObject(handler)) {
                options = handler;
                handler = handler.handler;
            }
            if (typeof handler === "string") {
                handler = vm[handler];
            }
            return vm.$watch(expOrFn, handler, options);
        }
        function stateMixin(Vue) {
            // flow somehow has problems with directly declared definition object
            // when using Object.defineProperty, so we have to procedurally build up
            // the object here.
            var dataDef = {};
            dataDef.get = function() {
                return this._data;
            };
            var propsDef = {};
            propsDef.get = function() {
                return this._props;
            };
            if (true) {
                dataDef.set = function() {
                    warn("Avoid replacing instance root $data. " + "Use nested data properties instead.", this);
                };
                propsDef.set = function() {
                    warn("$props is readonly.", this);
                };
            }
            Object.defineProperty(Vue.prototype, "$data", dataDef);
            Object.defineProperty(Vue.prototype, "$props", propsDef);
            Vue.prototype.$set = set;
            Vue.prototype.$delete = del;
            Vue.prototype.$watch = function(expOrFn, cb, options) {
                var vm = this;
                if (isPlainObject(cb)) {
                    return createWatcher(vm, expOrFn, cb, options);
                }
                options = options || {};
                options.user = true;
                var watcher = new Watcher(vm, expOrFn, cb, options);
                if (options.immediate) {
                    try {
                        cb.call(vm, watcher.value);
                    } catch (error) {
                        error = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(error);
                        handleError(error, vm, 'callback for immediate watcher "' + watcher.expression + '"');
                    }
                }
                return function unwatchFn() {
                    watcher.teardown();
                };
            };
        }
        /*  */        var uid$3 = 0;
        function initMixin(Vue) {
            Vue.prototype._init = function(options) {
                var vm = this;
                // a uid
                                vm._uid = uid$3++;
                var startTag, endTag;
                /* istanbul ignore if */                if (true && config.performance && mark) {
                    startTag = "vue-perf-start:" + vm._uid;
                    endTag = "vue-perf-end:" + vm._uid;
                    mark(startTag);
                }
                // a flag to avoid this being observed
                                vm._isVue = true;
                // merge options
                                if (options && options._isComponent) {
                    // optimize internal component instantiation
                    // since dynamic options merging is pretty slow, and none of the
                    // internal component options needs special treatment.
                    initInternalComponent(vm, options);
                } else {
                    vm.$options = mergeOptions(resolveConstructorOptions(vm.constructor), options || {}, vm);
                }
                /* istanbul ignore else */                if (true) {
                    initProxy(vm);
                } else {}
                // expose real self
                                vm._self = vm;
                initLifecycle(vm);
                initEvents(vm);
                initRender(vm);
                callHook(vm, "beforeCreate");
                !vm._$fallback && initInjections(vm);
                // resolve injections before data/props  
                                initState(vm);
                !vm._$fallback && initProvide(vm);
                // resolve provide after data/props
                                !vm._$fallback && callHook(vm, "created");
                /* istanbul ignore if */                if (true && config.performance && mark) {
                    vm._name = formatComponentName(vm, false);
                    mark(endTag);
                    measure("vue " + vm._name + " init", startTag, endTag);
                }
                if (vm.$options.el) {
                    vm.$mount(vm.$options.el);
                }
            };
        }
        function initInternalComponent(vm, options) {
            var opts = vm.$options = Object.create(vm.constructor.options);
            // doing this because it's faster than dynamic enumeration.
                        var parentVnode = options._parentVnode;
            opts.parent = options.parent;
            opts._parentVnode = parentVnode;
            var vnodeComponentOptions = parentVnode.componentOptions;
            opts.propsData = vnodeComponentOptions.propsData;
            opts._parentListeners = vnodeComponentOptions.listeners;
            opts._renderChildren = vnodeComponentOptions.children;
            opts._componentTag = vnodeComponentOptions.tag;
            if (options.render) {
                opts.render = options.render;
                opts.staticRenderFns = options.staticRenderFns;
            }
        }
        function resolveConstructorOptions(Ctor) {
            var options = Ctor.options;
            if (Ctor.super) {
                var superOptions = resolveConstructorOptions(Ctor.super);
                var cachedSuperOptions = Ctor.superOptions;
                if (superOptions !== cachedSuperOptions) {
                    // super option changed,
                    // need to resolve new options.
                    Ctor.superOptions = superOptions;
                    // check if there are any late-modified/attached options (#4976)
                                        var modifiedOptions = resolveModifiedOptions(Ctor);
                    // update base extend options
                                        if (modifiedOptions) {
                        extend(Ctor.extendOptions, modifiedOptions);
                    }
                    options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
                    if (options.name) {
                        options.components[options.name] = Ctor;
                    }
                }
            }
            return options;
        }
        function resolveModifiedOptions(Ctor) {
            var modified;
            var latest = Ctor.options;
            var sealed = Ctor.sealedOptions;
            for (var key in latest) {
                if (latest[key] !== sealed[key]) {
                    if (!modified) {
                        modified = {};
                    }
                    modified[key] = latest[key];
                }
            }
            return modified;
        }
        function Vue(options) {
            if (true && !(this instanceof Vue)) {
                warn("Vue is a constructor and should be called with the `new` keyword");
            }
            this._init(options);
        }
        initMixin(Vue);
        stateMixin(Vue);
        eventsMixin(Vue);
        lifecycleMixin(Vue);
        renderMixin(Vue);
        /*  */        function initUse(Vue) {
            Vue.use = function(plugin) {
                var installedPlugins = this._installedPlugins || (this._installedPlugins = []);
                if (installedPlugins.indexOf(plugin) > -1) {
                    return this;
                }
                // additional parameters
                                var args = toArray(arguments, 1);
                args.unshift(this);
                if (typeof plugin.install === "function") {
                    plugin.install.apply(plugin, args);
                } else if (typeof plugin === "function") {
                    plugin.apply(null, args);
                }
                installedPlugins.push(plugin);
                return this;
            };
        }
        /*  */        function initMixin$1(Vue) {
            Vue.mixin = function(mixin) {
                this.options = mergeOptions(this.options, mixin);
                return this;
            };
        }
        /*  */        function initExtend(Vue) {
            /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
            Vue.cid = 0;
            var cid = 1;
            /**
   * Class inheritance
   */            Vue.extend = function(extendOptions) {
                extendOptions = extendOptions || {};
                var Super = this;
                var SuperId = Super.cid;
                var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
                if (cachedCtors[SuperId]) {
                    return cachedCtors[SuperId];
                }
                var name = extendOptions.name || Super.options.name;
                if (true && name) {
                    validateComponentName(name);
                }
                var Sub = function VueComponent(options) {
                    this._init(options);
                };
                Sub.prototype = Object.create(Super.prototype);
                Sub.prototype.constructor = Sub;
                Sub.cid = cid++;
                Sub.options = mergeOptions(Super.options, extendOptions);
                Sub["super"] = Super;
                // For props and computed properties, we define the proxy getters on
                // the Vue instances at extension time, on the extended prototype. This
                // avoids Object.defineProperty calls for each instance created.
                                if (Sub.options.props) {
                    initProps$1(Sub);
                }
                if (Sub.options.computed) {
                    initComputed$1(Sub);
                }
                // allow further extension/mixin/plugin usage
                                Sub.extend = Super.extend;
                Sub.mixin = Super.mixin;
                Sub.use = Super.use;
                // create asset registers, so extended classes
                // can have their private assets too.
                                ASSET_TYPES.forEach(function(type) {
                    Sub[type] = Super[type];
                });
                // enable recursive self-lookup
                                if (name) {
                    Sub.options.components[name] = Sub;
                }
                // keep a reference to the super options at extension time.
                // later at instantiation we can check if Super's options have
                // been updated.
                                Sub.superOptions = Super.options;
                Sub.extendOptions = extendOptions;
                Sub.sealedOptions = extend({}, Sub.options);
                // cache constructor
                                cachedCtors[SuperId] = Sub;
                return Sub;
            };
        }
        function initProps$1(Comp) {
            var props = Comp.options.props;
            for (var key in props) {
                proxy(Comp.prototype, "_props", key);
            }
        }
        function initComputed$1(Comp) {
            var computed = Comp.options.computed;
            for (var key in computed) {
                defineComputed(Comp.prototype, key, computed[key]);
            }
        }
        /*  */        function initAssetRegisters(Vue) {
            /**
   * Create asset registration methods.
   */
            ASSET_TYPES.forEach(function(type) {
                Vue[type] = function(id, definition) {
                    if (!definition) {
                        return this.options[type + "s"][id];
                    } else {
                        /* istanbul ignore if */
                        if (true && type === "component") {
                            validateComponentName(id);
                        }
                        if (type === "component" && isPlainObject(definition)) {
                            definition.name = definition.name || id;
                            definition = this.options._base.extend(definition);
                        }
                        if (type === "directive" && typeof definition === "function") {
                            definition = {
                                bind: definition,
                                update: definition
                            };
                        }
                        this.options[type + "s"][id] = definition;
                        return definition;
                    }
                };
            });
        }
        /*  */        function getComponentName(opts) {
            return opts && (opts.Ctor.options.name || opts.tag);
        }
        function matches(pattern, name) {
            if (Array.isArray(pattern)) {
                return pattern.indexOf(name) > -1;
            } else if (typeof pattern === "string") {
                return pattern.split(",").indexOf(name) > -1;
            } else if (isRegExp(pattern)) {
                return pattern.test(name);
            }
            /* istanbul ignore next */            return false;
        }
        function pruneCache(keepAliveInstance, filter) {
            var cache = keepAliveInstance.cache;
            var keys = keepAliveInstance.keys;
            var _vnode = keepAliveInstance._vnode;
            for (var key in cache) {
                var cachedNode = cache[key];
                if (cachedNode) {
                    var name = getComponentName(cachedNode.componentOptions);
                    if (name && !filter(name)) {
                        pruneCacheEntry(cache, key, keys, _vnode);
                    }
                }
            }
        }
        function pruneCacheEntry(cache, key, keys, current) {
            var cached$$1 = cache[key];
            if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
                cached$$1.componentInstance.$destroy();
            }
            cache[key] = null;
            remove(keys, key);
        }
        var patternTypes = [ String, RegExp, Array ];
        var KeepAlive = {
            name: "keep-alive",
            abstract: true,
            props: {
                include: patternTypes,
                exclude: patternTypes,
                max: [ String, Number ]
            },
            created: function created() {
                this.cache = Object.create(null);
                this.keys = [];
            },
            destroyed: function destroyed() {
                for (var key in this.cache) {
                    pruneCacheEntry(this.cache, key, this.keys);
                }
            },
            mounted: function mounted() {
                var this$1 = this;
                this.$watch("include", function(val) {
                    pruneCache(this$1, function(name) {
                        return matches(val, name);
                    });
                });
                this.$watch("exclude", function(val) {
                    pruneCache(this$1, function(name) {
                        return !matches(val, name);
                    });
                });
            },
            render: function render() {
                var slot = this.$slots.default;
                var vnode = getFirstComponentChild(slot);
                var componentOptions = vnode && vnode.componentOptions;
                if (componentOptions) {
                    // check pattern
                    var name = getComponentName(componentOptions);
                    var ref = this;
                    var include = ref.include;
                    var exclude = ref.exclude;
                    if (
                    // not included
                    include && (!name || !matches(include, name)) || 
                    // excluded
                    exclude && name && matches(exclude, name)) {
                        return vnode;
                    }
                    var ref$1 = this;
                    var cache = ref$1.cache;
                    var keys = ref$1.keys;
                    var key = vnode.key == null ? componentOptions.Ctor.cid + (componentOptions.tag ? "::" + componentOptions.tag : "") : vnode.key;
                    if (cache[key]) {
                        vnode.componentInstance = cache[key].componentInstance;
                        // make current key freshest
                                                remove(keys, key);
                        keys.push(key);
                    } else {
                        cache[key] = vnode;
                        keys.push(key);
                        // prune oldest entry
                                                if (this.max && keys.length > parseInt(this.max)) {
                            pruneCacheEntry(cache, keys[0], keys, this._vnode);
                        }
                    }
                    vnode.data.keepAlive = true;
                }
                return vnode || slot && slot[0];
            }
        };
        var builtInComponents = {
            KeepAlive: KeepAlive
        };
        /*  */        function initGlobalAPI(Vue) {
            // config
            var configDef = {};
            configDef.get = function() {
                return config;
            };
            if (true) {
                configDef.set = function() {
                    warn("Do not replace the Vue.config object, set individual fields instead.");
                };
            }
            Object.defineProperty(Vue, "config", configDef);
            // exposed util methods.
            // NOTE: these are not considered part of the public API - avoid relying on
            // them unless you are aware of the risk.
                        Vue.util = {
                warn: warn,
                extend: extend,
                mergeOptions: mergeOptions,
                defineReactive: defineReactive$$1
            };
            Vue.set = set;
            Vue.delete = del;
            Vue.nextTick = nextTick;
            // 2.6 explicit observable API
                        Vue.observable = function(obj) {
                observe(obj);
                return obj;
            };
            Vue.options = Object.create(null);
            ASSET_TYPES.forEach(function(type) {
                Vue.options[type + "s"] = Object.create(null);
            });
            // this is used to identify the "base" constructor to extend all plain-object
            // components with in Weex's multi-instance scenarios.
                        Vue.options._base = Vue;
            extend(Vue.options.components, builtInComponents);
            initUse(Vue);
            initMixin$1(Vue);
            initExtend(Vue);
            initAssetRegisters(Vue);
        }
        initGlobalAPI(Vue);
        Object.defineProperty(Vue.prototype, "$isServer", {
            get: isServerRendering
        });
        Object.defineProperty(Vue.prototype, "$ssrContext", {
            get: function get() {
                /* istanbul ignore next */
                return this.$vnode && this.$vnode.ssrContext;
            }
        });
        // expose FunctionalRenderContext for ssr runtime helper installation
                Object.defineProperty(Vue, "FunctionalRenderContext", {
            value: FunctionalRenderContext
        });
        Vue.version = "2.6.11";
        /**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */        var ARRAYTYPE = "[object Array]";
        var OBJECTTYPE = "[object Object]";
        // const FUNCTIONTYPE = '[object Function]'
                function diff(current, pre) {
            var result = {};
            syncKeys(current, pre);
            _diff(current, pre, "", result);
            return result;
        }
        function syncKeys(current, pre) {
            if (current === pre) {
                return;
            }
            var rootCurrentType = type(current);
            var rootPreType = type(pre);
            if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
                if (Object.keys(current).length >= Object.keys(pre).length) {
                    for (var key in pre) {
                        var currentValue = current[key];
                        if (currentValue === undefined) {
                            current[key] = null;
                        } else {
                            syncKeys(currentValue, pre[key]);
                        }
                    }
                }
            } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
                if (current.length >= pre.length) {
                    pre.forEach(function(item, index) {
                        syncKeys(current[index], item);
                    });
                }
            }
        }
        function _diff(current, pre, path, result) {
            if (current === pre) {
                return;
            }
            var rootCurrentType = type(current);
            var rootPreType = type(pre);
            if (rootCurrentType == OBJECTTYPE) {
                if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
                    setResult(result, path, current);
                } else {
                    var loop = function(key) {
                        var currentValue = current[key];
                        var preValue = pre[key];
                        var currentType = type(currentValue);
                        var preType = type(preValue);
                        if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                            if (currentValue != pre[key]) {
                                setResult(result, (path == "" ? "" : path + ".") + key, currentValue);
                            }
                        } else if (currentType == ARRAYTYPE) {
                            if (preType != ARRAYTYPE) {
                                setResult(result, (path == "" ? "" : path + ".") + key, currentValue);
                            } else {
                                if (currentValue.length < preValue.length) {
                                    setResult(result, (path == "" ? "" : path + ".") + key, currentValue);
                                } else {
                                    currentValue.forEach(function(item, index) {
                                        _diff(item, preValue[index], (path == "" ? "" : path + ".") + key + "[" + index + "]", result);
                                    });
                                }
                            }
                        } else if (currentType == OBJECTTYPE) {
                            if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                                setResult(result, (path == "" ? "" : path + ".") + key, currentValue);
                            } else {
                                for (var subKey in currentValue) {
                                    _diff(currentValue[subKey], preValue[subKey], (path == "" ? "" : path + ".") + key + "." + subKey, result);
                                }
                            }
                        }
                    };
                    for (var key in current) loop(key);
                }
            } else if (rootCurrentType == ARRAYTYPE) {
                if (rootPreType != ARRAYTYPE) {
                    setResult(result, path, current);
                } else {
                    if (current.length < pre.length) {
                        setResult(result, path, current);
                    } else {
                        current.forEach(function(item, index) {
                            _diff(item, pre[index], path + "[" + index + "]", result);
                        });
                    }
                }
            } else {
                setResult(result, path, current);
            }
        }
        function setResult(result, k, v) {
            // if (type(v) != FUNCTIONTYPE) {
            result[k] = v;
            // }
                }
        function type(obj) {
            return Object.prototype.toString.call(obj);
        }
        /*  */        function flushCallbacks$1(vm) {
            if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
                if (Object({
                    VUE_APP_PLATFORM: "mp-weixin",
                    NODE_ENV: "development",
                    BASE_URL: "/"
                }).VUE_APP_DEBUG) {
                    var mpInstance = vm.$scope;
                    console.log("[" + +new Date() + "][" + (mpInstance.is || mpInstance.route) + "][" + vm._uid + "]:flushCallbacks[" + vm.__next_tick_callbacks.length + "]");
                }
                var copies = vm.__next_tick_callbacks.slice(0);
                vm.__next_tick_callbacks.length = 0;
                for (var i = 0; i < copies.length; i++) {
                    copies[i]();
                }
            }
        }
        function hasRenderWatcher(vm) {
            return queue.find(function(watcher) {
                return vm._watcher === watcher;
            });
        }
        function nextTick$1(vm, cb) {
            //1.nextTick 之前 已 setData 且 setData 还未回调完成
            //2.nextTick 之前存在 render watcher
            if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
                if (Object({
                    VUE_APP_PLATFORM: "mp-weixin",
                    NODE_ENV: "development",
                    BASE_URL: "/"
                }).VUE_APP_DEBUG) {
                    var mpInstance = vm.$scope;
                    console.log("[" + +new Date() + "][" + (mpInstance.is || mpInstance.route) + "][" + vm._uid + "]:nextVueTick");
                }
                return nextTick(cb, vm);
            } else {
                if (Object({
                    VUE_APP_PLATFORM: "mp-weixin",
                    NODE_ENV: "development",
                    BASE_URL: "/"
                }).VUE_APP_DEBUG) {
                    var mpInstance$1 = vm.$scope;
                    console.log("[" + +new Date() + "][" + (mpInstance$1.is || mpInstance$1.route) + "][" + vm._uid + "]:nextMPTick");
                }
            }
            var _resolve;
            if (!vm.__next_tick_callbacks) {
                vm.__next_tick_callbacks = [];
            }
            vm.__next_tick_callbacks.push(function() {
                if (cb) {
                    try {
                        cb.call(vm);
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        handleError(e, vm, "nextTick");
                    }
                } else if (_resolve) {
                    _resolve(vm);
                }
            });
            // $flow-disable-line
                        if (!cb && typeof Promise !== "undefined") {
                return new Promise(function(resolve) {
                    _resolve = resolve;
                });
            }
        }
        /*  */        function cloneWithData(vm) {
            // 确保当前 vm 所有数据被同步
            var ret = Object.create(null);
            var dataKeys = [].concat(Object.keys(vm._data || {}), Object.keys(vm._computedWatchers || {}));
            dataKeys.reduce(function(ret, key) {
                ret[key] = vm[key];
                return ret;
            }, ret);
            // vue-composition-api
                        var rawBindings = vm.__secret_vfa_state__ && vm.__secret_vfa_state__.rawBindings;
            if (rawBindings) {
                Object.keys(rawBindings).forEach(function(key) {
                    ret[key] = vm[key];
                });
            }
            //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
                        Object.assign(ret, vm.$mp.data || {});
            if (Array.isArray(vm.$options.behaviors) && vm.$options.behaviors.indexOf("uni://form-field") !== -1) {
                //form-field
                ret["name"] = vm.name;
                ret["value"] = vm.value;
            }
            return JSON.parse(JSON.stringify(ret));
        }
        var patch = function(oldVnode, vnode) {
            var this$1 = this;
            if (vnode === null) {
                //destroy
                return;
            }
            if (this.mpType === "page" || this.mpType === "component") {
                var mpInstance = this.$scope;
                var data = Object.create(null);
                try {
                    data = cloneWithData(this);
                } catch (err) {
                    err = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(err);
                    console.error(err);
                }
                data.__webviewId__ = mpInstance.data.__webviewId__;
                var mpData = Object.create(null);
                Object.keys(data).forEach(function(key) {
                    //仅同步 data 中有的数据
                    mpData[key] = mpInstance.data[key];
                });
                var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);
                if (Object.keys(diffData).length) {
                    if (Object({
                        VUE_APP_PLATFORM: "mp-weixin",
                        NODE_ENV: "development",
                        BASE_URL: "/"
                    }).VUE_APP_DEBUG) {
                        console.log("[" + +new Date() + "][" + (mpInstance.is || mpInstance.route) + "][" + this._uid + "]差量更新", JSON.stringify(diffData));
                    }
                    this.__next_tick_pending = true;
                    mpInstance.setData(diffData, function() {
                        this$1.__next_tick_pending = false;
                        flushCallbacks$1(this$1);
                    });
                } else {
                    flushCallbacks$1(this);
                }
            }
        };
        /*  */        function createEmptyRender() {}
        function mountComponent$1(vm, el, hydrating) {
            if (!vm.mpType) {
                //main.js 中的 new Vue
                return vm;
            }
            if (vm.mpType === "app") {
                vm.$options.render = createEmptyRender;
            }
            if (!vm.$options.render) {
                vm.$options.render = createEmptyRender;
                if (true) {
                    /* istanbul ignore if */
                    if (vm.$options.template && vm.$options.template.charAt(0) !== "#" || vm.$options.el || el) {
                        warn("You are using the runtime-only build of Vue where the template " + "compiler is not available. Either pre-compile the templates into " + "render functions, or use the compiler-included build.", vm);
                    } else {
                        warn("Failed to mount component: template or render function not defined.", vm);
                    }
                }
            }
            !vm._$fallback && callHook(vm, "beforeMount");
            var updateComponent = function() {
                vm._update(vm._render(), hydrating);
            };
            // we set this to vm._watcher inside the watcher's constructor
            // since the watcher's initial patch may call $forceUpdate (e.g. inside child
            // component's mounted hook), which relies on vm._watcher being already defined
                        new Watcher(vm, updateComponent, noop, {
                before: function before() {
                    if (vm._isMounted && !vm._isDestroyed) {
                        callHook(vm, "beforeUpdate");
                    }
                }
            }, true /* isRenderWatcher */);
            hydrating = false;
            return vm;
        }
        /*  */        function renderClass(staticClass, dynamicClass) {
            if (isDef(staticClass) || isDef(dynamicClass)) {
                return concat(staticClass, stringifyClass(dynamicClass));
            }
            /* istanbul ignore next */            return "";
        }
        function concat(a, b) {
            return a ? b ? a + " " + b : a : b || "";
        }
        function stringifyClass(value) {
            if (Array.isArray(value)) {
                return stringifyArray(value);
            }
            if (isObject(value)) {
                return stringifyObject(value);
            }
            if (typeof value === "string") {
                return value;
            }
            /* istanbul ignore next */            return "";
        }
        function stringifyArray(value) {
            var res = "";
            var stringified;
            for (var i = 0, l = value.length; i < l; i++) {
                if (isDef(stringified = stringifyClass(value[i])) && stringified !== "") {
                    if (res) {
                        res += " ";
                    }
                    res += stringified;
                }
            }
            return res;
        }
        function stringifyObject(value) {
            var res = "";
            for (var key in value) {
                if (value[key]) {
                    if (res) {
                        res += " ";
                    }
                    res += key;
                }
            }
            return res;
        }
        /*  */        var parseStyleText = cached(function(cssText) {
            var res = {};
            var listDelimiter = /;(?![^(]*\))/g;
            var propertyDelimiter = /:(.+)/;
            cssText.split(listDelimiter).forEach(function(item) {
                if (item) {
                    var tmp = item.split(propertyDelimiter);
                    tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
                }
            });
            return res;
        });
        // normalize possible array / string values into Object
                function normalizeStyleBinding(bindingStyle) {
            if (Array.isArray(bindingStyle)) {
                return toObject(bindingStyle);
            }
            if (typeof bindingStyle === "string") {
                return parseStyleText(bindingStyle);
            }
            return bindingStyle;
        }
        /*  */        var MP_METHODS = [ "createSelectorQuery", "createIntersectionObserver", "selectAllComponents", "selectComponent" ];
        function getTarget(obj, path) {
            var parts = path.split(".");
            var key = parts[0];
            if (key.indexOf("__$n") === 0) {
                //number index
                key = parseInt(key.replace("__$n", ""));
            }
            if (parts.length === 1) {
                return obj[key];
            }
            return getTarget(obj[key], parts.slice(1).join("."));
        }
        function internalMixin(Vue) {
            Vue.config.errorHandler = function(err, vm, info) {
                Vue.util.warn("Error in " + info + ': "' + err.toString() + '"', vm);
                console.error(err);
                /* eslint-disable no-undef */                var app = getApp();
                if (app && app.onError) {
                    app.onError(err);
                }
            };
            var oldEmit = Vue.prototype.$emit;
            Vue.prototype.$emit = function(event) {
                if (this.$scope && event) {
                    this.$scope["triggerEvent"](event, {
                        __args__: toArray(arguments, 1)
                    });
                }
                return oldEmit.apply(this, arguments);
            };
            Vue.prototype.$nextTick = function(fn) {
                return nextTick$1(this, fn);
            };
            MP_METHODS.forEach(function(method) {
                Vue.prototype[method] = function(args) {
                    if (this.$scope && this.$scope[method]) {
                        return this.$scope[method](args);
                    }
                    // mp-alipay
                                        if (typeof my === "undefined") {
                        return;
                    }
                    if (method === "createSelectorQuery") {
                        /* eslint-disable no-undef */
                        return my.createSelectorQuery(args);
                    } else if (method === "createIntersectionObserver") {
                        /* eslint-disable no-undef */
                        return my.createIntersectionObserver(args);
                    }
                    // TODO mp-alipay 暂不支持 selectAllComponents,selectComponent
                                };
            });
            Vue.prototype.__init_provide = initProvide;
            Vue.prototype.__init_injections = initInjections;
            Vue.prototype.__call_hook = function(hook, args) {
                var vm = this;
                // #7573 disable dep collection when invoking lifecycle hooks
                                pushTarget();
                var handlers = vm.$options[hook];
                var info = hook + " hook";
                var ret;
                if (handlers) {
                    for (var i = 0, j = handlers.length; i < j; i++) {
                        ret = invokeWithErrorHandling(handlers[i], vm, args ? [ args ] : null, vm, info);
                    }
                }
                if (vm._hasHookEvent) {
                    vm.$emit("hook:" + hook, args);
                }
                popTarget();
                return ret;
            };
            Vue.prototype.__set_model = function(target, key, value, modifiers) {
                if (Array.isArray(modifiers)) {
                    if (modifiers.indexOf("trim") !== -1) {
                        value = value.trim();
                    }
                    if (modifiers.indexOf("number") !== -1) {
                        value = this._n(value);
                    }
                }
                if (!target) {
                    target = this;
                }
                target[key] = value;
            };
            Vue.prototype.__set_sync = function(target, key, value) {
                if (!target) {
                    target = this;
                }
                target[key] = value;
            };
            Vue.prototype.__get_orig = function(item) {
                if (isPlainObject(item)) {
                    return item["$orig"] || item;
                }
                return item;
            };
            Vue.prototype.__get_value = function(dataPath, target) {
                return getTarget(target || this, dataPath);
            };
            Vue.prototype.__get_class = function(dynamicClass, staticClass) {
                return renderClass(staticClass, dynamicClass);
            };
            Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
                if (!dynamicStyle && !staticStyle) {
                    return "";
                }
                var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
                var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
                return Object.keys(styleObj).map(function(name) {
                    return hyphenate(name) + ":" + styleObj[name];
                }).join(";");
            };
            Vue.prototype.__map = function(val, iteratee) {
                //TODO 暂不考虑 string
                var ret, i, l, keys, key;
                if (Array.isArray(val)) {
                    ret = new Array(val.length);
                    for (i = 0, l = val.length; i < l; i++) {
                        ret[i] = iteratee(val[i], i);
                    }
                    return ret;
                } else if (isObject(val)) {
                    keys = Object.keys(val);
                    ret = Object.create(null);
                    for (i = 0, l = keys.length; i < l; i++) {
                        key = keys[i];
                        ret[key] = iteratee(val[key], key, i);
                    }
                    return ret;
                } else if (typeof val === "number") {
                    ret = new Array(val);
                    for (i = 0, l = val; i < l; i++) {
                        // 第一个参数暂时仍和小程序一致
                        ret[i] = iteratee(i, i);
                    }
                    return ret;
                }
                return [];
            };
        }
        /*  */        var LIFECYCLE_HOOKS$1 = [ 
        //App
        "onLaunch", "onShow", "onHide", "onUniNViewMessage", "onPageNotFound", "onThemeChange", "onError", "onUnhandledRejection", 
        //Page
        "onLoad", 
        // 'onShow',
        "onReady", 
        // 'onHide',
        "onUnload", "onPullDownRefresh", "onReachBottom", "onTabItemTap", "onAddToFavorites", "onShareTimeline", "onShareAppMessage", "onResize", "onPageScroll", "onNavigationBarButtonTap", "onBackPress", "onNavigationBarSearchInputChanged", "onNavigationBarSearchInputConfirmed", "onNavigationBarSearchInputClicked", 
        //Component
        // 'onReady', // 兼容旧版本，应该移除该事件
        "onPageShow", "onPageHide", "onPageResize" ];
        function lifecycleMixin$1(Vue) {
            //fixed vue-class-component
            var oldExtend = Vue.extend;
            Vue.extend = function(extendOptions) {
                extendOptions = extendOptions || {};
                var methods = extendOptions.methods;
                if (methods) {
                    Object.keys(methods).forEach(function(methodName) {
                        if (LIFECYCLE_HOOKS$1.indexOf(methodName) !== -1) {
                            extendOptions[methodName] = methods[methodName];
                            delete methods[methodName];
                        }
                    });
                }
                return oldExtend.call(this, extendOptions);
            };
            var strategies = Vue.config.optionMergeStrategies;
            var mergeHook = strategies.created;
            LIFECYCLE_HOOKS$1.forEach(function(hook) {
                strategies[hook] = mergeHook;
            });
            Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
        }
        /*  */
        // install platform patch function
                Vue.prototype.__patch__ = patch;
        // public mount method
                Vue.prototype.$mount = function(el, hydrating) {
            return mountComponent$1(this, el, hydrating);
        };
        lifecycleMixin$1(Vue);
        internalMixin(Vue);
        /*  */
        /* harmony default export */        __webpack_exports__["default"] = Vue;
        /* WEBPACK VAR INJECTION */    }).call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3))
    /***/;
}, 
/* 3 */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ function(module, exports) {
    var g;
    // This works in non-strict mode
        g = function() {
        return this;
    }();
    try {
        // This works if eval is allowed (see CSP)
        g = g || new Function("return this")();
    } catch (e) {
        // This works if the window reference is available
        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        if (typeof window === "object") g = window;
    }
    // g can still be undefined, but nothing to do about it...
    // We return undefined, instead of nothing here, so it's
    // easier to handle this case. if(!global) { ...}
        module.exports = g;
    /***/}, 
/* 4 */
/*!**************************************************************!*\
  !*** C:/Users/Jack/Desktop/骑士人才网相关/Applet(3)最新版本/pages.json ***!
  \**************************************************************/
/*! no static exports found */
/***/ function(module, exports) {
    /***/}, 
/* 5 */
/* 6 */ 
/* 7 */ , 
/* 8 */ , 
/* 9 */ , 
/* 10 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ , 
/* 10 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ , function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */    __webpack_require__.d(__webpack_exports__, "default", function() {
        return normalizeComponent;
    });
    /* globals __VUE_SSR_CONTEXT__ */
    // IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
    // This module is a runtime utility for cleaner component module output and will
    // be included in the final webpack user bundle.
        function normalizeComponent(scriptExports, render, staticRenderFns, functionalTemplate, injectStyles, scopeId, moduleIdentifier, /* server only */
    shadowMode, /* vue-cli only */
    components, // fixed by xxxxxx auto components
    renderjs) {
        // Vue.extend constructor export interop
        var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
        // fixed by xxxxxx auto components
                if (components) {
            if (!options.components) {
                options.components = {};
            }
            var hasOwn = Object.prototype.hasOwnProperty;
            for (var name in components) {
                if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
                    options.components[name] = components[name];
                }
            }
        }
        // fixed by xxxxxx renderjs
                if (renderjs) {
            (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
                this[renderjs.__module] = this;
            });
            (options.mixins || (options.mixins = [])).push(renderjs);
        }
        // render functions
                if (render) {
            options.render = render;
            options.staticRenderFns = staticRenderFns;
            options._compiled = true;
        }
        // functional template
                if (functionalTemplate) {
            options.functional = true;
        }
        // scopedId
                if (scopeId) {
            options._scopeId = "data-v-" + scopeId;
        }
        var hook;
        if (moduleIdentifier) {
            // server build
            hook = function(context) {
                // 2.3 injection
                context = context || // cached call
                this.$vnode && this.$vnode.ssrContext || // stateful
                this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
                // functional
                // 2.2 with runInNewContext: true
                // functional
                // 2.2 with runInNewContext: true
                                if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
                    context = __VUE_SSR_CONTEXT__;
                }
                // inject component styles
                                if (injectStyles) {
                    injectStyles.call(this, context);
                }
                // register component module identifier for async chunk inferrence
                                if (context && context._registeredComponents) {
                    context._registeredComponents.add(moduleIdentifier);
                }
            }
            // used by ssr in case component is cached and beforeCreate
            // never gets called
            ;
            options._ssrRegister = hook;
        } else if (injectStyles) {
            hook = shadowMode ? function() {
                injectStyles.call(this, this.$root.$options.shadowRoot);
            } : injectStyles;
        }
        if (hook) {
            if (options.functional) {
                // for template-only hot-reload because in that case the render fn doesn't
                // go through the normalizer
                options._injectStyles = hook;
                // register for functioal component in vue file
                                var originalRender = options.render;
                options.render = function renderWithStyleInjection(h, context) {
                    hook.call(context);
                    return originalRender(h, context);
                };
            } else {
                // inject component registration as beforeCreate hook
                var existing = options.beforeCreate;
                options.beforeCreate = existing ? [].concat(existing, hook) : [ hook ];
            }
        }
        return {
            exports: scriptExports,
            options: options
        };
    }
    /***/}, 
/* 11 */
/*!******************************************************************!*\
  !*** C:/Users/Jack/Desktop/骑士人才网相关/Applet(3)最新版本/store/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    /* WEBPACK VAR INJECTION */
    /* WEBPACK VAR INJECTION */    
    /* WEBPACK VAR INJECTION */
    /* WEBPACK VAR INJECTION */ (function(uni) {
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = void 0;
        var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
        var _vuex = _interopRequireDefault(__webpack_require__(/*! vuex */ 12));
        var _jsBase = __webpack_require__(/*! js-base64 */ 13);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        _vue.default.use(_vuex.default);
        var store = new _vuex.default.Store({
            state: {
                memberType: 2,
                token: "",
                swichPage: 1
            },
            mutations: {
                qsLogin: function qsLogin(state, str) {
                    console.log(state);
                    var data = JSON.parse(_jsBase.Base64.decode(str.split(".")[1]));
                    console.log(data);
                    state.memberType = data.utype;
                    state.token = str;
                    uni.setStorage({
                        key: "token",
                        data: str
                    });
                    uni.setStorage({
                        key: "memberType",
                        data: data.utype
                    });
                },
                qsLogout: function qsLogout(state) {
                    state.memberType = 2;
                    state.token = "";
                    uni.removeStorage({
                        key: "token"
                    });
                    uni.removeStorage({
                        key: "memberType"
                    });
                },
                editSwichPage: function editSwichPage(state, type) {
                    state.swichPage = type;
                }
            },
            actions: {
                qsLogin: function qsLogin(context, str) {
                    context.commit("qsLogin", str);
                },
                qsLogout: function qsLogout(context) {
                    context.commit("qsLogout");
                }
            }
        });
        var _default = store;
        exports.default = _default;
        /* WEBPACK VAR INJECTION */    }).call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"])
    /***/;
}, 
/* 12 */
/*!********************************************!*\
  !*** ./node_modules/vuex/dist/vuex.esm.js ***!
  \********************************************/
/*! exports provided: default, Store, createNamespacedHelpers, install, mapActions, mapGetters, mapMutations, mapState */
/***/ function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* WEBPACK VAR INJECTION */
    /* WEBPACK VAR INJECTION */    
    /* WEBPACK VAR INJECTION */
    /* WEBPACK VAR INJECTION */ (function(global) {
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() {
            return Store;
        });
        /* harmony export (binding) */        __webpack_require__.d(__webpack_exports__, "createNamespacedHelpers", function() {
            return createNamespacedHelpers;
        });
        /* harmony export (binding) */        __webpack_require__.d(__webpack_exports__, "install", function() {
            return install;
        });
        /* harmony export (binding) */        __webpack_require__.d(__webpack_exports__, "mapActions", function() {
            return mapActions;
        });
        /* harmony export (binding) */        __webpack_require__.d(__webpack_exports__, "mapGetters", function() {
            return mapGetters;
        });
        /* harmony export (binding) */        __webpack_require__.d(__webpack_exports__, "mapMutations", function() {
            return mapMutations;
        });
        /* harmony export (binding) */        __webpack_require__.d(__webpack_exports__, "mapState", function() {
            return mapState;
        });
        /*!
 * vuex v3.4.0
 * (c) 2020 Evan You
 * @license MIT
 */        function applyMixin(Vue) {
            var version = Number(Vue.version.split(".")[0]);
            if (version >= 2) {
                Vue.mixin({
                    beforeCreate: vuexInit
                });
            } else {
                // override init and inject vuex init procedure
                // for 1.x backwards compatibility.
                var _init = Vue.prototype._init;
                Vue.prototype._init = function(options) {
                    if (options === void 0) options = {};
                    options.init = options.init ? [ vuexInit ].concat(options.init) : vuexInit;
                    _init.call(this, options);
                };
            }
            /**
   * Vuex init hook, injected into each instances init hooks list.
   */            function vuexInit() {
                var options = this.$options;
                // store injection
                                if (options.store) {
                    this.$store = typeof options.store === "function" ? options.store() : options.store;
                } else if (options.parent && options.parent.$store) {
                    this.$store = options.parent.$store;
                }
            }
        }
        var target = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
        var devtoolHook = target.__VUE_DEVTOOLS_GLOBAL_HOOK__;
        function devtoolPlugin(store) {
            if (!devtoolHook) {
                return;
            }
            store._devtoolHook = devtoolHook;
            devtoolHook.emit("vuex:init", store);
            devtoolHook.on("vuex:travel-to-state", function(targetState) {
                store.replaceState(targetState);
            });
            store.subscribe(function(mutation, state) {
                devtoolHook.emit("vuex:mutation", mutation, state);
            }, {
                prepend: true
            });
            store.subscribeAction(function(action, state) {
                devtoolHook.emit("vuex:action", action, state);
            }, {
                prepend: true
            });
        }
        /**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
        /**
 * forEach for object
 */        function forEachValue(obj, fn) {
            Object.keys(obj).forEach(function(key) {
                return fn(obj[key], key);
            });
        }
        function isObject(obj) {
            return obj !== null && typeof obj === "object";
        }
        function isPromise(val) {
            return val && typeof val.then === "function";
        }
        function assert(condition, msg) {
            if (!condition) {
                throw new Error("[vuex] " + msg);
            }
        }
        function partial(fn, arg) {
            return function() {
                return fn(arg);
            };
        }
        // Base data struct for store's module, package with some attribute and method
                var Module = function Module(rawModule, runtime) {
            this.runtime = runtime;
            // Store some children item
                        this._children = Object.create(null);
            // Store the origin module object which passed by programmer
                        this._rawModule = rawModule;
            var rawState = rawModule.state;
            // Store the origin module's state
                        this.state = (typeof rawState === "function" ? rawState() : rawState) || {};
        };
        var prototypeAccessors = {
            namespaced: {
                configurable: true
            }
        };
        prototypeAccessors.namespaced.get = function() {
            return !!this._rawModule.namespaced;
        };
        Module.prototype.addChild = function addChild(key, module) {
            this._children[key] = module;
        };
        Module.prototype.removeChild = function removeChild(key) {
            delete this._children[key];
        };
        Module.prototype.getChild = function getChild(key) {
            return this._children[key];
        };
        Module.prototype.hasChild = function hasChild(key) {
            return key in this._children;
        };
        Module.prototype.update = function update(rawModule) {
            this._rawModule.namespaced = rawModule.namespaced;
            if (rawModule.actions) {
                this._rawModule.actions = rawModule.actions;
            }
            if (rawModule.mutations) {
                this._rawModule.mutations = rawModule.mutations;
            }
            if (rawModule.getters) {
                this._rawModule.getters = rawModule.getters;
            }
        };
        Module.prototype.forEachChild = function forEachChild(fn) {
            forEachValue(this._children, fn);
        };
        Module.prototype.forEachGetter = function forEachGetter(fn) {
            if (this._rawModule.getters) {
                forEachValue(this._rawModule.getters, fn);
            }
        };
        Module.prototype.forEachAction = function forEachAction(fn) {
            if (this._rawModule.actions) {
                forEachValue(this._rawModule.actions, fn);
            }
        };
        Module.prototype.forEachMutation = function forEachMutation(fn) {
            if (this._rawModule.mutations) {
                forEachValue(this._rawModule.mutations, fn);
            }
        };
        Object.defineProperties(Module.prototype, prototypeAccessors);
        var ModuleCollection = function ModuleCollection(rawRootModule) {
            // register root module (Vuex.Store options)
            this.register([], rawRootModule, false);
        };
        ModuleCollection.prototype.get = function get(path) {
            return path.reduce(function(module, key) {
                return module.getChild(key);
            }, this.root);
        };
        ModuleCollection.prototype.getNamespace = function getNamespace(path) {
            var module = this.root;
            return path.reduce(function(namespace, key) {
                module = module.getChild(key);
                return namespace + (module.namespaced ? key + "/" : "");
            }, "");
        };
        ModuleCollection.prototype.update = function update$1(rawRootModule) {
            update([], this.root, rawRootModule);
        };
        ModuleCollection.prototype.register = function register(path, rawModule, runtime) {
            var this$1 = this;
            if (runtime === void 0) runtime = true;
            if (true) {
                assertRawModule(path, rawModule);
            }
            var newModule = new Module(rawModule, runtime);
            if (path.length === 0) {
                this.root = newModule;
            } else {
                var parent = this.get(path.slice(0, -1));
                parent.addChild(path[path.length - 1], newModule);
            }
            // register nested modules
                        if (rawModule.modules) {
                forEachValue(rawModule.modules, function(rawChildModule, key) {
                    this$1.register(path.concat(key), rawChildModule, runtime);
                });
            }
        };
        ModuleCollection.prototype.unregister = function unregister(path) {
            var parent = this.get(path.slice(0, -1));
            var key = path[path.length - 1];
            if (!parent.getChild(key).runtime) {
                return;
            }
            parent.removeChild(key);
        };
        ModuleCollection.prototype.isRegistered = function isRegistered(path) {
            var parent = this.get(path.slice(0, -1));
            var key = path[path.length - 1];
            return parent.hasChild(key);
        };
        function update(path, targetModule, newModule) {
            if (true) {
                assertRawModule(path, newModule);
            }
            // update target module
                        targetModule.update(newModule);
            // update nested modules
                        if (newModule.modules) {
                for (var key in newModule.modules) {
                    if (!targetModule.getChild(key)) {
                        if (true) {
                            console.warn("[vuex] trying to add a new module '" + key + "' on hot reloading, " + "manual reload is needed");
                        }
                        return;
                    }
                    update(path.concat(key), targetModule.getChild(key), newModule.modules[key]);
                }
            }
        }
        var functionAssert = {
            assert: function(value) {
                return typeof value === "function";
            },
            expected: "function"
        };
        var objectAssert = {
            assert: function(value) {
                return typeof value === "function" || typeof value === "object" && typeof value.handler === "function";
            },
            expected: 'function or object with "handler" function'
        };
        var assertTypes = {
            getters: functionAssert,
            mutations: functionAssert,
            actions: objectAssert
        };
        function assertRawModule(path, rawModule) {
            Object.keys(assertTypes).forEach(function(key) {
                if (!rawModule[key]) {
                    return;
                }
                var assertOptions = assertTypes[key];
                forEachValue(rawModule[key], function(value, type) {
                    assert(assertOptions.assert(value), makeAssertionMessage(path, key, type, value, assertOptions.expected));
                });
            });
        }
        function makeAssertionMessage(path, key, type, value, expected) {
            var buf = key + " should be " + expected + ' but "' + key + "." + type + '"';
            if (path.length > 0) {
                buf += ' in module "' + path.join(".") + '"';
            }
            buf += " is " + JSON.stringify(value) + ".";
            return buf;
        }
        var Vue;
        // bind on install
                var Store = function Store(options) {
            var this$1 = this;
            if (options === void 0) options = {};
            // Auto install if it is not done yet and `window` has `Vue`.
            // To allow users to avoid auto-installation in some cases,
            // this code should be placed here. See #731
                        if (!Vue && typeof window !== "undefined" && window.Vue) {
                install(window.Vue);
            }
            if (true) {
                assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
                assert(typeof Promise !== "undefined", "vuex requires a Promise polyfill in this browser.");
                assert(this instanceof Store, "store must be called with the new operator.");
            }
            var plugins = options.plugins;
            if (plugins === void 0) plugins = [];
            var strict = options.strict;
            if (strict === void 0) strict = false;
            // store internal state
                        this._committing = false;
            this._actions = Object.create(null);
            this._actionSubscribers = [];
            this._mutations = Object.create(null);
            this._wrappedGetters = Object.create(null);
            this._modules = new ModuleCollection(options);
            this._modulesNamespaceMap = Object.create(null);
            this._subscribers = [];
            this._watcherVM = new Vue();
            this._makeLocalGettersCache = Object.create(null);
            // bind commit and dispatch to self
                        var store = this;
            var ref = this;
            var dispatch = ref.dispatch;
            var commit = ref.commit;
            this.dispatch = function boundDispatch(type, payload) {
                return dispatch.call(store, type, payload);
            };
            this.commit = function boundCommit(type, payload, options) {
                return commit.call(store, type, payload, options);
            };
            // strict mode
                        this.strict = strict;
            var state = this._modules.root.state;
            // init root module.
            // this also recursively registers all sub-modules
            // and collects all module getters inside this._wrappedGetters
                        installModule(this, state, [], this._modules.root);
            // initialize the store vm, which is responsible for the reactivity
            // (also registers _wrappedGetters as computed properties)
                        resetStoreVM(this, state);
            // apply plugins
                        plugins.forEach(function(plugin) {
                return plugin(this$1);
            });
            var useDevtools = options.devtools !== undefined ? options.devtools : Vue.config.devtools;
            if (useDevtools) {
                devtoolPlugin(this);
            }
        };
        var prototypeAccessors$1 = {
            state: {
                configurable: true
            }
        };
        prototypeAccessors$1.state.get = function() {
            return this._vm._data.$$state;
        };
        prototypeAccessors$1.state.set = function(v) {
            if (true) {
                assert(false, "use store.replaceState() to explicit replace store state.");
            }
        };
        Store.prototype.commit = function commit(_type, _payload, _options) {
            var this$1 = this;
            // check object-style commit
                        var ref = unifyObjectStyle(_type, _payload, _options);
            var type = ref.type;
            var payload = ref.payload;
            var options = ref.options;
            var mutation = {
                type: type,
                payload: payload
            };
            var entry = this._mutations[type];
            if (!entry) {
                if (true) {
                    console.error("[vuex] unknown mutation type: " + type);
                }
                return;
            }
            this._withCommit(function() {
                entry.forEach(function commitIterator(handler) {
                    handler(payload);
                });
            });
            this._subscribers.slice().forEach(function(sub) {
                return sub(mutation, this$1.state);
            });
            if (true && options && options.silent) {
                console.warn("[vuex] mutation type: " + type + ". Silent option has been removed. " + "Use the filter functionality in the vue-devtools");
            }
        };
        Store.prototype.dispatch = function dispatch(_type, _payload) {
            var this$1 = this;
            // check object-style dispatch
                        var ref = unifyObjectStyle(_type, _payload);
            var type = ref.type;
            var payload = ref.payload;
            var action = {
                type: type,
                payload: payload
            };
            var entry = this._actions[type];
            if (!entry) {
                if (true) {
                    console.error("[vuex] unknown action type: " + type);
                }
                return;
            }
            try {
                this._actionSubscribers.slice().filter(function(sub) {
                    return sub.before;
                }).forEach(function(sub) {
                    return sub.before(action, this$1.state);
                });
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                if (true) {
                    console.warn("[vuex] error in before action subscribers: ");
                    console.error(e);
                }
            }
            var result = entry.length > 1 ? Promise.all(entry.map(function(handler) {
                return handler(payload);
            })) : entry[0](payload);
            return new Promise(function(resolve, reject) {
                result.then(function(res) {
                    try {
                        this$1._actionSubscribers.filter(function(sub) {
                            return sub.after;
                        }).forEach(function(sub) {
                            return sub.after(action, this$1.state);
                        });
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        if (true) {
                            console.warn("[vuex] error in after action subscribers: ");
                            console.error(e);
                        }
                    }
                    resolve(res);
                }, function(error) {
                    try {
                        this$1._actionSubscribers.filter(function(sub) {
                            return sub.error;
                        }).forEach(function(sub) {
                            return sub.error(action, this$1.state, error);
                        });
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        if (true) {
                            console.warn("[vuex] error in error action subscribers: ");
                            console.error(e);
                        }
                    }
                    reject(error);
                });
            });
        };
        Store.prototype.subscribe = function subscribe(fn, options) {
            return genericSubscribe(fn, this._subscribers, options);
        };
        Store.prototype.subscribeAction = function subscribeAction(fn, options) {
            var subs = typeof fn === "function" ? {
                before: fn
            } : fn;
            return genericSubscribe(subs, this._actionSubscribers, options);
        };
        Store.prototype.watch = function watch(getter, cb, options) {
            var this$1 = this;
            if (true) {
                assert(typeof getter === "function", "store.watch only accepts a function.");
            }
            return this._watcherVM.$watch(function() {
                return getter(this$1.state, this$1.getters);
            }, cb, options);
        };
        Store.prototype.replaceState = function replaceState(state) {
            var this$1 = this;
            this._withCommit(function() {
                this$1._vm._data.$$state = state;
            });
        };
        Store.prototype.registerModule = function registerModule(path, rawModule, options) {
            if (options === void 0) options = {};
            if (typeof path === "string") {
                path = [ path ];
            }
            if (true) {
                assert(Array.isArray(path), "module path must be a string or an Array.");
                assert(path.length > 0, "cannot register the root module by using registerModule.");
            }
            this._modules.register(path, rawModule);
            installModule(this, this.state, path, this._modules.get(path), options.preserveState);
            // reset store to update getters...
                        resetStoreVM(this, this.state);
        };
        Store.prototype.unregisterModule = function unregisterModule(path) {
            var this$1 = this;
            if (typeof path === "string") {
                path = [ path ];
            }
            if (true) {
                assert(Array.isArray(path), "module path must be a string or an Array.");
            }
            this._modules.unregister(path);
            this._withCommit(function() {
                var parentState = getNestedState(this$1.state, path.slice(0, -1));
                Vue.delete(parentState, path[path.length - 1]);
            });
            resetStore(this);
        };
        Store.prototype.hasModule = function hasModule(path) {
            if (typeof path === "string") {
                path = [ path ];
            }
            if (true) {
                assert(Array.isArray(path), "module path must be a string or an Array.");
            }
            return this._modules.isRegistered(path);
        };
        Store.prototype.hotUpdate = function hotUpdate(newOptions) {
            this._modules.update(newOptions);
            resetStore(this, true);
        };
        Store.prototype._withCommit = function _withCommit(fn) {
            var committing = this._committing;
            this._committing = true;
            fn();
            this._committing = committing;
        };
        Object.defineProperties(Store.prototype, prototypeAccessors$1);
        function genericSubscribe(fn, subs, options) {
            if (subs.indexOf(fn) < 0) {
                options && options.prepend ? subs.unshift(fn) : subs.push(fn);
            }
            return function() {
                var i = subs.indexOf(fn);
                if (i > -1) {
                    subs.splice(i, 1);
                }
            };
        }
        function resetStore(store, hot) {
            store._actions = Object.create(null);
            store._mutations = Object.create(null);
            store._wrappedGetters = Object.create(null);
            store._modulesNamespaceMap = Object.create(null);
            var state = store.state;
            // init all modules
                        installModule(store, state, [], store._modules.root, true);
            // reset vm
                        resetStoreVM(store, state, hot);
        }
        function resetStoreVM(store, state, hot) {
            var oldVm = store._vm;
            // bind store public getters
                        store.getters = {};
            // reset local getters cache
                        store._makeLocalGettersCache = Object.create(null);
            var wrappedGetters = store._wrappedGetters;
            var computed = {};
            forEachValue(wrappedGetters, function(fn, key) {
                // use computed to leverage its lazy-caching mechanism
                // direct inline function use will lead to closure preserving oldVm.
                // using partial to return function with only arguments preserved in closure environment.
                computed[key] = partial(fn, store);
                Object.defineProperty(store.getters, key, {
                    get: function() {
                        return store._vm[key];
                    },
                    enumerable: true
                });
            });
            // use a Vue instance to store the state tree
            // suppress warnings just in case the user has added
            // some funky global mixins
                        var silent = Vue.config.silent;
            Vue.config.silent = true;
            store._vm = new Vue({
                data: {
                    $$state: state
                },
                computed: computed
            });
            Vue.config.silent = silent;
            // enable strict mode for new vm
                        if (store.strict) {
                enableStrictMode(store);
            }
            if (oldVm) {
                if (hot) {
                    // dispatch changes in all subscribed watchers
                    // to force getter re-evaluation for hot reloading.
                    store._withCommit(function() {
                        oldVm._data.$$state = null;
                    });
                }
                Vue.nextTick(function() {
                    return oldVm.$destroy();
                });
            }
        }
        function installModule(store, rootState, path, module, hot) {
            var isRoot = !path.length;
            var namespace = store._modules.getNamespace(path);
            // register in namespace map
                        if (module.namespaced) {
                if (store._modulesNamespaceMap[namespace] && "development" !== "production") {
                    console.error("[vuex] duplicate namespace " + namespace + " for the namespaced module " + path.join("/"));
                }
                store._modulesNamespaceMap[namespace] = module;
            }
            // set state
                        if (!isRoot && !hot) {
                var parentState = getNestedState(rootState, path.slice(0, -1));
                var moduleName = path[path.length - 1];
                store._withCommit(function() {
                    if (true) {
                        if (moduleName in parentState) {
                            console.warn('[vuex] state field "' + moduleName + '" was overridden by a module with the same name at "' + path.join(".") + '"');
                        }
                    }
                    Vue.set(parentState, moduleName, module.state);
                });
            }
            var local = module.context = makeLocalContext(store, namespace, path);
            module.forEachMutation(function(mutation, key) {
                var namespacedType = namespace + key;
                registerMutation(store, namespacedType, mutation, local);
            });
            module.forEachAction(function(action, key) {
                var type = action.root ? key : namespace + key;
                var handler = action.handler || action;
                registerAction(store, type, handler, local);
            });
            module.forEachGetter(function(getter, key) {
                var namespacedType = namespace + key;
                registerGetter(store, namespacedType, getter, local);
            });
            module.forEachChild(function(child, key) {
                installModule(store, rootState, path.concat(key), child, hot);
            });
        }
        /**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */        function makeLocalContext(store, namespace, path) {
            var noNamespace = namespace === "";
            var local = {
                dispatch: noNamespace ? store.dispatch : function(_type, _payload, _options) {
                    var args = unifyObjectStyle(_type, _payload, _options);
                    var payload = args.payload;
                    var options = args.options;
                    var type = args.type;
                    if (!options || !options.root) {
                        type = namespace + type;
                        if (true && !store._actions[type]) {
                            console.error("[vuex] unknown local action type: " + args.type + ", global type: " + type);
                            return;
                        }
                    }
                    return store.dispatch(type, payload);
                },
                commit: noNamespace ? store.commit : function(_type, _payload, _options) {
                    var args = unifyObjectStyle(_type, _payload, _options);
                    var payload = args.payload;
                    var options = args.options;
                    var type = args.type;
                    if (!options || !options.root) {
                        type = namespace + type;
                        if (true && !store._mutations[type]) {
                            console.error("[vuex] unknown local mutation type: " + args.type + ", global type: " + type);
                            return;
                        }
                    }
                    store.commit(type, payload, options);
                }
            };
            // getters and state object must be gotten lazily
            // because they will be changed by vm update
                        Object.defineProperties(local, {
                getters: {
                    get: noNamespace ? function() {
                        return store.getters;
                    } : function() {
                        return makeLocalGetters(store, namespace);
                    }
                },
                state: {
                    get: function() {
                        return getNestedState(store.state, path);
                    }
                }
            });
            return local;
        }
        function makeLocalGetters(store, namespace) {
            if (!store._makeLocalGettersCache[namespace]) {
                var gettersProxy = {};
                var splitPos = namespace.length;
                Object.keys(store.getters).forEach(function(type) {
                    // skip if the target getter is not match this namespace
                    if (type.slice(0, splitPos) !== namespace) {
                        return;
                    }
                    // extract local getter type
                                        var localType = type.slice(splitPos);
                    // Add a port to the getters proxy.
                    // Define as getter property because
                    // we do not want to evaluate the getters in this time.
                                        Object.defineProperty(gettersProxy, localType, {
                        get: function() {
                            return store.getters[type];
                        },
                        enumerable: true
                    });
                });
                store._makeLocalGettersCache[namespace] = gettersProxy;
            }
            return store._makeLocalGettersCache[namespace];
        }
        function registerMutation(store, type, handler, local) {
            var entry = store._mutations[type] || (store._mutations[type] = []);
            entry.push(function wrappedMutationHandler(payload) {
                handler.call(store, local.state, payload);
            });
        }
        function registerAction(store, type, handler, local) {
            var entry = store._actions[type] || (store._actions[type] = []);
            entry.push(function wrappedActionHandler(payload) {
                var res = handler.call(store, {
                    dispatch: local.dispatch,
                    commit: local.commit,
                    getters: local.getters,
                    state: local.state,
                    rootGetters: store.getters,
                    rootState: store.state
                }, payload);
                if (!isPromise(res)) {
                    res = Promise.resolve(res);
                }
                if (store._devtoolHook) {
                    return res.catch(function(err) {
                        store._devtoolHook.emit("vuex:error", err);
                        throw err;
                    });
                } else {
                    return res;
                }
            });
        }
        function registerGetter(store, type, rawGetter, local) {
            if (store._wrappedGetters[type]) {
                if (true) {
                    console.error("[vuex] duplicate getter key: " + type);
                }
                return;
            }
            store._wrappedGetters[type] = function wrappedGetter(store) {
                return rawGetter(local.state, // local state
                local.getters, // local getters
                store.state, // root state
                store.getters);
            };
        }
        function enableStrictMode(store) {
            store._vm.$watch(function() {
                return this._data.$$state;
            }, function() {
                if (true) {
                    assert(store._committing, "do not mutate vuex store state outside mutation handlers.");
                }
            }, {
                deep: true,
                sync: true
            });
        }
        function getNestedState(state, path) {
            return path.reduce(function(state, key) {
                return state[key];
            }, state);
        }
        function unifyObjectStyle(type, payload, options) {
            if (isObject(type) && type.type) {
                options = payload;
                payload = type;
                type = type.type;
            }
            if (true) {
                assert(typeof type === "string", "expects string as the type, but found " + typeof type + ".");
            }
            return {
                type: type,
                payload: payload,
                options: options
            };
        }
        function install(_Vue) {
            if (Vue && _Vue === Vue) {
                if (true) {
                    console.error("[vuex] already installed. Vue.use(Vuex) should be called only once.");
                }
                return;
            }
            Vue = _Vue;
            applyMixin(Vue);
        }
        /**
 * Reduce the code which written in Vue.js for getting the state.
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} states # Object's item can be a function which accept state and getters for param, you can do something for state and getters in it.
 * @param {Object}
 */        var mapState = normalizeNamespace(function(namespace, states) {
            var res = {};
            if (true && !isValidMap(states)) {
                console.error("[vuex] mapState: mapper parameter must be either an Array or an Object");
            }
            normalizeMap(states).forEach(function(ref) {
                var key = ref.key;
                var val = ref.val;
                res[key] = function mappedState() {
                    var state = this.$store.state;
                    var getters = this.$store.getters;
                    if (namespace) {
                        var module = getModuleByNamespace(this.$store, "mapState", namespace);
                        if (!module) {
                            return;
                        }
                        state = module.context.state;
                        getters = module.context.getters;
                    }
                    return typeof val === "function" ? val.call(this, state, getters) : state[val];
                };
                // mark vuex getter for devtools
                                res[key].vuex = true;
            });
            return res;
        });
        /**
 * Reduce the code which written in Vue.js for committing the mutation
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept anthor params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */        var mapMutations = normalizeNamespace(function(namespace, mutations) {
            var res = {};
            if (true && !isValidMap(mutations)) {
                console.error("[vuex] mapMutations: mapper parameter must be either an Array or an Object");
            }
            normalizeMap(mutations).forEach(function(ref) {
                var key = ref.key;
                var val = ref.val;
                res[key] = function mappedMutation() {
                    var args = [], len = arguments.length;
                    while (len--) args[len] = arguments[len];
                    // Get the commit method from store
                                        var commit = this.$store.commit;
                    if (namespace) {
                        var module = getModuleByNamespace(this.$store, "mapMutations", namespace);
                        if (!module) {
                            return;
                        }
                        commit = module.context.commit;
                    }
                    return typeof val === "function" ? val.apply(this, [ commit ].concat(args)) : commit.apply(this.$store, [ val ].concat(args));
                };
            });
            return res;
        });
        /**
 * Reduce the code which written in Vue.js for getting the getters
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} getters
 * @return {Object}
 */        var mapGetters = normalizeNamespace(function(namespace, getters) {
            var res = {};
            if (true && !isValidMap(getters)) {
                console.error("[vuex] mapGetters: mapper parameter must be either an Array or an Object");
            }
            normalizeMap(getters).forEach(function(ref) {
                var key = ref.key;
                var val = ref.val;
                // The namespace has been mutated by normalizeNamespace
                                val = namespace + val;
                res[key] = function mappedGetter() {
                    if (namespace && !getModuleByNamespace(this.$store, "mapGetters", namespace)) {
                        return;
                    }
                    if (true && !(val in this.$store.getters)) {
                        console.error("[vuex] unknown getter: " + val);
                        return;
                    }
                    return this.$store.getters[val];
                };
                // mark vuex getter for devtools
                                res[key].vuex = true;
            });
            return res;
        });
        /**
 * Reduce the code which written in Vue.js for dispatch the action
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} actions # Object's item can be a function which accept `dispatch` function as the first param, it can accept anthor params. You can dispatch action and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */        var mapActions = normalizeNamespace(function(namespace, actions) {
            var res = {};
            if (true && !isValidMap(actions)) {
                console.error("[vuex] mapActions: mapper parameter must be either an Array or an Object");
            }
            normalizeMap(actions).forEach(function(ref) {
                var key = ref.key;
                var val = ref.val;
                res[key] = function mappedAction() {
                    var args = [], len = arguments.length;
                    while (len--) args[len] = arguments[len];
                    // get dispatch function from store
                                        var dispatch = this.$store.dispatch;
                    if (namespace) {
                        var module = getModuleByNamespace(this.$store, "mapActions", namespace);
                        if (!module) {
                            return;
                        }
                        dispatch = module.context.dispatch;
                    }
                    return typeof val === "function" ? val.apply(this, [ dispatch ].concat(args)) : dispatch.apply(this.$store, [ val ].concat(args));
                };
            });
            return res;
        });
        /**
 * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object
 * @param {String} namespace
 * @return {Object}
 */        var createNamespacedHelpers = function(namespace) {
            return {
                mapState: mapState.bind(null, namespace),
                mapGetters: mapGetters.bind(null, namespace),
                mapMutations: mapMutations.bind(null, namespace),
                mapActions: mapActions.bind(null, namespace)
            };
        };
        /**
 * Normalize the map
 * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
 * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
 * @param {Array|Object} map
 * @return {Object}
 */        function normalizeMap(map) {
            if (!isValidMap(map)) {
                return [];
            }
            return Array.isArray(map) ? map.map(function(key) {
                return {
                    key: key,
                    val: key
                };
            }) : Object.keys(map).map(function(key) {
                return {
                    key: key,
                    val: map[key]
                };
            });
        }
        /**
 * Validate whether given map is valid or not
 * @param {*} map
 * @return {Boolean}
 */        function isValidMap(map) {
            return Array.isArray(map) || isObject(map);
        }
        /**
 * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.
 * @param {Function} fn
 * @return {Function}
 */        function normalizeNamespace(fn) {
            return function(namespace, map) {
                if (typeof namespace !== "string") {
                    map = namespace;
                    namespace = "";
                } else if (namespace.charAt(namespace.length - 1) !== "/") {
                    namespace += "/";
                }
                return fn(namespace, map);
            };
        }
        /**
 * Search a special module from store by namespace. if module not exist, print error message.
 * @param {Object} store
 * @param {String} helper
 * @param {String} namespace
 * @return {Object}
 */        function getModuleByNamespace(store, helper, namespace) {
            var module = store._modulesNamespaceMap[namespace];
            if (true && !module) {
                console.error("[vuex] module namespace not found in " + helper + "(): " + namespace);
            }
            return module;
        }
        var index = {
            Store: Store,
            install: install,
            version: "3.4.0",
            mapState: mapState,
            mapMutations: mapMutations,
            mapGetters: mapGetters,
            mapActions: mapActions,
            createNamespacedHelpers: createNamespacedHelpers
        };
        /* harmony default export */        __webpack_exports__["default"] = index;
        /* WEBPACK VAR INJECTION */    }).call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ 3))
    /***/;
}, 
/* 13 */
/*!************************************************************************************!*\
  !*** C:/Users/Jack/Desktop/骑士人才网相关/Applet(3)最新版本/node_modules/js-base64/base64.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ function(module, exports, __webpack_require__) {
    /* WEBPACK VAR INJECTION */ (function(global) {
        var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
        /*
 *  base64.js
 *
 *  Licensed under the BSD 3-Clause License.
 *    http://opensource.org/licenses/BSD-3-Clause
 *
 *  References:
 *    http://en.wikipedia.org/wiki/Base64
 */        
        /*
 *  base64.js
 *
 *  Licensed under the BSD 3-Clause License.
 *    http://opensource.org/licenses/BSD-3-Clause
 *
 *  References:
 *    http://en.wikipedia.org/wiki/Base64
 */
        (function(global, factory) {
            true ? module.exports = factory(global) : undefined;
        })(typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : this, function(global) {
            "use strict";
            // existing version for noConflict()
                        global = global || {};
            var _Base64 = global.Base64;
            var version = "2.5.2";
            // if node.js and NOT React Native, we use Buffer
                        var buffer;
            if (true && module.exports) {
                try {
                    buffer = eval("require('buffer').Buffer");
                } catch (err) {
                    err = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(err);
                    buffer = undefined;
                }
            }
            // constants
                        var b64chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
            var b64tab = function(bin) {
                var t = {};
                for (var i = 0, l = bin.length; i < l; i++) t[bin.charAt(i)] = i;
                return t;
            }(b64chars);
            var fromCharCode = String.fromCharCode;
            // encoder stuff
                        var cb_utob = function(c) {
                if (c.length < 2) {
                    var cc = c.charCodeAt(0);
                    return cc < 128 ? c : cc < 2048 ? fromCharCode(192 | cc >>> 6) + fromCharCode(128 | cc & 63) : fromCharCode(224 | cc >>> 12 & 15) + fromCharCode(128 | cc >>> 6 & 63) + fromCharCode(128 | cc & 63);
                } else {
                    var cc = 65536 + (c.charCodeAt(0) - 55296) * 1024 + (c.charCodeAt(1) - 56320);
                    return fromCharCode(240 | cc >>> 18 & 7) + fromCharCode(128 | cc >>> 12 & 63) + fromCharCode(128 | cc >>> 6 & 63) + fromCharCode(128 | cc & 63);
                }
            };
            var re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;
            var utob = function(u) {
                return u.replace(re_utob, cb_utob);
            };
            var cb_encode = function(ccc) {
                var padlen = [ 0, 2, 1 ][ccc.length % 3], ord = ccc.charCodeAt(0) << 16 | (ccc.length > 1 ? ccc.charCodeAt(1) : 0) << 8 | (ccc.length > 2 ? ccc.charCodeAt(2) : 0), chars = [ b64chars.charAt(ord >>> 18), b64chars.charAt(ord >>> 12 & 63), padlen >= 2 ? "=" : b64chars.charAt(ord >>> 6 & 63), padlen >= 1 ? "=" : b64chars.charAt(ord & 63) ];
                return chars.join("");
            };
            var btoa = global.btoa ? function(b) {
                return global.btoa(b);
            } : function(b) {
                return b.replace(/[\s\S]{1,3}/g, cb_encode);
            };
            var _encode = function(u) {
                var isUint8Array = Object.prototype.toString.call(u) === "[object Uint8Array]";
                return isUint8Array ? u.toString("base64") : btoa(utob(String(u)));
            };
            var encode = function(u, urisafe) {
                return !urisafe ? _encode(u) : _encode(String(u)).replace(/[+\/]/g, function(m0) {
                    return m0 == "+" ? "-" : "_";
                }).replace(/=/g, "");
            };
            var encodeURI = function(u) {
                return encode(u, true);
            };
            // decoder stuff
                        var re_btou = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g;
            var cb_btou = function(cccc) {
                switch (cccc.length) {
                  case 4:
                    var cp = (7 & cccc.charCodeAt(0)) << 18 | (63 & cccc.charCodeAt(1)) << 12 | (63 & cccc.charCodeAt(2)) << 6 | 63 & cccc.charCodeAt(3), offset = cp - 65536;
                    return fromCharCode((offset >>> 10) + 55296) + fromCharCode((offset & 1023) + 56320);

                  case 3:
                    return fromCharCode((15 & cccc.charCodeAt(0)) << 12 | (63 & cccc.charCodeAt(1)) << 6 | 63 & cccc.charCodeAt(2));

                  default:
                    return fromCharCode((31 & cccc.charCodeAt(0)) << 6 | 63 & cccc.charCodeAt(1));
                }
            };
            var btou = function(b) {
                return b.replace(re_btou, cb_btou);
            };
            var cb_decode = function(cccc) {
                var len = cccc.length, padlen = len % 4, n = (len > 0 ? b64tab[cccc.charAt(0)] << 18 : 0) | (len > 1 ? b64tab[cccc.charAt(1)] << 12 : 0) | (len > 2 ? b64tab[cccc.charAt(2)] << 6 : 0) | (len > 3 ? b64tab[cccc.charAt(3)] : 0), chars = [ fromCharCode(n >>> 16), fromCharCode(n >>> 8 & 255), fromCharCode(n & 255) ];
                chars.length -= [ 0, 0, 2, 1 ][padlen];
                return chars.join("");
            };
            var _atob = global.atob ? function(a) {
                return global.atob(a);
            } : function(a) {
                return a.replace(/\S{1,4}/g, cb_decode);
            };
            var atob = function(a) {
                return _atob(String(a).replace(/[^A-Za-z0-9\+\/]/g, ""));
            };
            var _decode = buffer ? buffer.from && Uint8Array && buffer.from !== Uint8Array.from ? function(a) {
                return (a.constructor === buffer.constructor ? a : buffer.from(a, "base64")).toString();
            } : function(a) {
                return (a.constructor === buffer.constructor ? a : new buffer(a, "base64")).toString();
            } : function(a) {
                return btou(_atob(a));
            };
            var decode = function(a) {
                return _decode(String(a).replace(/[-_]/g, function(m0) {
                    return m0 == "-" ? "+" : "/";
                }).replace(/[^A-Za-z0-9\+\/]/g, ""));
            };
            var noConflict = function() {
                var Base64 = global.Base64;
                global.Base64 = _Base64;
                return Base64;
            };
            // export Base64
                        global.Base64 = {
                VERSION: version,
                atob: atob,
                btoa: btoa,
                fromBase64: decode,
                toBase64: encode,
                utob: utob,
                encode: encode,
                encodeURI: encodeURI,
                btou: btou,
                decode: decode,
                noConflict: noConflict,
                __buffer__: buffer
            };
            // if ES5 is available, make Base64.extendString() available
                        if (typeof Object.defineProperty === "function") {
                var noEnum = function(v) {
                    return {
                        value: v,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    };
                };
                global.Base64.extendString = function() {
                    Object.defineProperty(String.prototype, "fromBase64", noEnum(function() {
                        return decode(this);
                    }));
                    Object.defineProperty(String.prototype, "toBase64", noEnum(function(urisafe) {
                        return encode(this, urisafe);
                    }));
                    Object.defineProperty(String.prototype, "toBase64URI", noEnum(function() {
                        return encode(this, true);
                    }));
                };
            }
            //
            // export Base64 to the namespace
            //
                        if (global["Meteor"]) {
                // Meteor.js
                Base64 = global.Base64;
            }
            // module.exports and AMD are mutually exclusive.
            // module.exports has precedence.
                        if (true && module.exports) {
                module.exports.Base64 = global.Base64;
            } else if (true) {
                // AMD. Register as an anonymous module.
                !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
                    return global.Base64;
                }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
            }
            // that's it!
                        return {
                Base64: global.Base64
            };
        });
        /* WEBPACK VAR INJECTION */    }).call(this, __webpack_require__(/*! (webpack)/buildin/global.js */ 3))
    /***/;
}, 
/* 14 */
/* 15 */ 
/* 16 */ , 
/* 17 */ , 
/* 18 */ , 
/* 19 */ , 
/* 20 */
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ , 
/* 20 */
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ , function(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(/*! regenerator-runtime */ 21);
    /***/}, 
/* 21 */
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ function(module, exports, __webpack_require__) {
    /**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
    // This method of obtaining a reference to the global object needs to be
    // kept identical to the way it is obtained in runtime.js
    var g = function() {
        return this || typeof self === "object" && self;
    }() || Function("return this")();
    // Use `getOwnPropertyNames` because not all browsers support calling
    // `hasOwnProperty` on the global `self` object in a worker. See #183.
        var hadRuntime = g.regeneratorRuntime && Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;
    // Save the old regeneratorRuntime in case it needs to be restored later.
        var oldRuntime = hadRuntime && g.regeneratorRuntime;
    // Force reevalutation of runtime.js.
        g.regeneratorRuntime = undefined;
    module.exports = __webpack_require__(/*! ./runtime */ 22);
    if (hadRuntime) {
        // Restore the original runtime.
        g.regeneratorRuntime = oldRuntime;
    } else {
        // Remove the global property added by runtime.js.
        try {
            delete g.regeneratorRuntime;
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            g.regeneratorRuntime = undefined;
        }
    }
    /***/}, 
/* 22 */
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ function(module, exports) {
    /**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
    !function(global) {
        "use strict";
        var Op = Object.prototype;
        var hasOwn = Op.hasOwnProperty;
        var undefined;
        // More compressible than void 0.
                var $Symbol = typeof Symbol === "function" ? Symbol : {};
        var iteratorSymbol = $Symbol.iterator || "@@iterator";
        var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
        var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
        var inModule = typeof module === "object";
        var runtime = global.regeneratorRuntime;
        if (runtime) {
            if (inModule) {
                // If regeneratorRuntime is defined globally and we're in a module,
                // make the exports object identical to regeneratorRuntime.
                module.exports = runtime;
            }
            // Don't bother evaluating the rest of this file if the runtime was
            // already defined globally.
                        return;
        }
        // Define the runtime globally (as expected by generated code) as either
        // module.exports (if we're in a module) or a new, empty object.
                runtime = global.regeneratorRuntime = inModule ? module.exports : {};
        function wrap(innerFn, outerFn, self, tryLocsList) {
            // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
            var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
            var generator = Object.create(protoGenerator.prototype);
            var context = new Context(tryLocsList || []);
            // The ._invoke method unifies the implementations of the .next,
            // .throw, and .return methods.
                        generator._invoke = makeInvokeMethod(innerFn, self, context);
            return generator;
        }
        runtime.wrap = wrap;
        // Try/catch helper to minimize deoptimizations. Returns a completion
        // record like context.tryEntries[i].completion. This interface could
        // have been (and was previously) designed to take a closure to be
        // invoked without arguments, but in all the cases we care about we
        // already have an existing method we want to call, so there's no need
        // to create a new function object. We can even get away with assuming
        // the method takes exactly one argument, since that happens to be true
        // in every case, so we don't have to touch the arguments object. The
        // only additional allocation required is the completion record, which
        // has a stable shape and so hopefully should be cheap to allocate.
                function tryCatch(fn, obj, arg) {
            try {
                return {
                    type: "normal",
                    arg: fn.call(obj, arg)
                };
            } catch (err) {
                err = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(err);
                return {
                    type: "throw",
                    arg: err
                };
            }
        }
        var GenStateSuspendedStart = "suspendedStart";
        var GenStateSuspendedYield = "suspendedYield";
        var GenStateExecuting = "executing";
        var GenStateCompleted = "completed";
        // Returning this object from the innerFn has the same effect as
        // breaking out of the dispatch switch statement.
                var ContinueSentinel = {};
        // Dummy constructor functions that we use as the .constructor and
        // .constructor.prototype properties for functions that return Generator
        // objects. For full spec compliance, you may wish to configure your
        // minifier not to mangle the names of these two functions.
                function Generator() {}
        function GeneratorFunction() {}
        function GeneratorFunctionPrototype() {}
        // This is a polyfill for %IteratorPrototype% for environments that
        // don't natively support it.
                var IteratorPrototype = {};
        IteratorPrototype[iteratorSymbol] = function() {
            return this;
        };
        var getProto = Object.getPrototypeOf;
        var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
        if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
            // This environment has a native %IteratorPrototype%; use it instead
            // of the polyfill.
            IteratorPrototype = NativeIteratorPrototype;
        }
        var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
        GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
        GeneratorFunctionPrototype.constructor = GeneratorFunction;
        GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";
        // Helper for defining the .next, .throw, and .return methods of the
        // Iterator interface in terms of a single ._invoke method.
                function defineIteratorMethods(prototype) {
            [ "next", "throw", "return" ].forEach(function(method) {
                prototype[method] = function(arg) {
                    return this._invoke(method, arg);
                };
            });
        }
        runtime.isGeneratorFunction = function(genFun) {
            var ctor = typeof genFun === "function" && genFun.constructor;
            return ctor ? ctor === GeneratorFunction || 
            // For the native GeneratorFunction constructor, the best we can
            // do is to check its .name property.
            (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
        };
        runtime.mark = function(genFun) {
            if (Object.setPrototypeOf) {
                Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
            } else {
                genFun.__proto__ = GeneratorFunctionPrototype;
                if (!(toStringTagSymbol in genFun)) {
                    genFun[toStringTagSymbol] = "GeneratorFunction";
                }
            }
            genFun.prototype = Object.create(Gp);
            return genFun;
        };
        // Within the body of any async function, `await x` is transformed to
        // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
        // `hasOwn.call(value, "__await")` to determine if the yielded value is
        // meant to be awaited.
                runtime.awrap = function(arg) {
            return {
                __await: arg
            };
        };
        function AsyncIterator(generator) {
            function invoke(method, arg, resolve, reject) {
                var record = tryCatch(generator[method], generator, arg);
                if (record.type === "throw") {
                    reject(record.arg);
                } else {
                    var result = record.arg;
                    var value = result.value;
                    if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
                        return Promise.resolve(value.__await).then(function(value) {
                            invoke("next", value, resolve, reject);
                        }, function(err) {
                            invoke("throw", err, resolve, reject);
                        });
                    }
                    return Promise.resolve(value).then(function(unwrapped) {
                        // When a yielded Promise is resolved, its final value becomes
                        // the .value of the Promise<{value,done}> result for the
                        // current iteration.
                        result.value = unwrapped;
                        resolve(result);
                    }, function(error) {
                        // If a rejected Promise was yielded, throw the rejection back
                        // into the async generator function so it can be handled there.
                        return invoke("throw", error, resolve, reject);
                    });
                }
            }
            var previousPromise;
            function enqueue(method, arg) {
                function callInvokeWithMethodAndArg() {
                    return new Promise(function(resolve, reject) {
                        invoke(method, arg, resolve, reject);
                    });
                }
                return previousPromise = 
                // If enqueue has been called before, then we want to wait until
                // all previous Promises have been resolved before calling invoke,
                // so that results are always delivered in the correct order. If
                // enqueue has not been called before, then it is important to
                // call invoke immediately, without waiting on a callback to fire,
                // so that the async generator function has the opportunity to do
                // any necessary setup in a predictable way. This predictability
                // is why the Promise constructor synchronously invokes its
                // executor callback, and why async functions synchronously
                // execute code before the first await. Since we implement simple
                // async functions in terms of async generators, it is especially
                // important to get this right, even though it requires care.
                previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, 
                // Avoid propagating failures to Promises returned by later
                // invocations of the iterator.
                callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
            }
            // Define the unified helper method that is used to implement .next,
            // .throw, and .return (see defineIteratorMethods).
                        this._invoke = enqueue;
        }
        defineIteratorMethods(AsyncIterator.prototype);
        AsyncIterator.prototype[asyncIteratorSymbol] = function() {
            return this;
        };
        runtime.AsyncIterator = AsyncIterator;
        // Note that simple async functions are implemented on top of
        // AsyncIterator objects; they just return a Promise for the value of
        // the final result produced by the iterator.
                runtime.async = function(innerFn, outerFn, self, tryLocsList) {
            var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));
            return runtime.isGeneratorFunction(outerFn) ? iter : iter.next().then(function(result) {
                return result.done ? result.value : iter.next();
            });
        };
        function makeInvokeMethod(innerFn, self, context) {
            var state = GenStateSuspendedStart;
            return function invoke(method, arg) {
                if (state === GenStateExecuting) {
                    throw new Error("Generator is already running");
                }
                if (state === GenStateCompleted) {
                    if (method === "throw") {
                        throw arg;
                    }
                    // Be forgiving, per 25.3.3.3.3 of the spec:
                    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
                                        return doneResult();
                }
                context.method = method;
                context.arg = arg;
                while (true) {
                    var delegate = context.delegate;
                    if (delegate) {
                        var delegateResult = maybeInvokeDelegate(delegate, context);
                        if (delegateResult) {
                            if (delegateResult === ContinueSentinel) continue;
                            return delegateResult;
                        }
                    }
                    if (context.method === "next") {
                        // Setting context._sent for legacy support of Babel's
                        // function.sent implementation.
                        context.sent = context._sent = context.arg;
                    } else if (context.method === "throw") {
                        if (state === GenStateSuspendedStart) {
                            state = GenStateCompleted;
                            throw context.arg;
                        }
                        context.dispatchException(context.arg);
                    } else if (context.method === "return") {
                        context.abrupt("return", context.arg);
                    }
                    state = GenStateExecuting;
                    var record = tryCatch(innerFn, self, context);
                    if (record.type === "normal") {
                        // If an exception is thrown from innerFn, we leave state ===
                        // GenStateExecuting and loop back for another invocation.
                        state = context.done ? GenStateCompleted : GenStateSuspendedYield;
                        if (record.arg === ContinueSentinel) {
                            continue;
                        }
                        return {
                            value: record.arg,
                            done: context.done
                        };
                    } else if (record.type === "throw") {
                        state = GenStateCompleted;
                        // Dispatch the exception by looping back around to the
                        // context.dispatchException(context.arg) call above.
                                                context.method = "throw";
                        context.arg = record.arg;
                    }
                }
            };
        }
        // Call delegate.iterator[context.method](context.arg) and handle the
        // result, either by returning a { value, done } result from the
        // delegate iterator, or by modifying context.method and context.arg,
        // setting context.delegate to null, and returning the ContinueSentinel.
                function maybeInvokeDelegate(delegate, context) {
            var method = delegate.iterator[context.method];
            if (method === undefined) {
                // A .throw or .return when the delegate iterator has no .throw
                // method always terminates the yield* loop.
                context.delegate = null;
                if (context.method === "throw") {
                    if (delegate.iterator.return) {
                        // If the delegate iterator has a return method, give it a
                        // chance to clean up.
                        context.method = "return";
                        context.arg = undefined;
                        maybeInvokeDelegate(delegate, context);
                        if (context.method === "throw") {
                            // If maybeInvokeDelegate(context) changed context.method from
                            // "return" to "throw", let that override the TypeError below.
                            return ContinueSentinel;
                        }
                    }
                    context.method = "throw";
                    context.arg = new TypeError("The iterator does not provide a 'throw' method");
                }
                return ContinueSentinel;
            }
            var record = tryCatch(method, delegate.iterator, context.arg);
            if (record.type === "throw") {
                context.method = "throw";
                context.arg = record.arg;
                context.delegate = null;
                return ContinueSentinel;
            }
            var info = record.arg;
            if (!info) {
                context.method = "throw";
                context.arg = new TypeError("iterator result is not an object");
                context.delegate = null;
                return ContinueSentinel;
            }
            if (info.done) {
                // Assign the result of the finished delegate to the temporary
                // variable specified by delegate.resultName (see delegateYield).
                context[delegate.resultName] = info.value;
                // Resume execution at the desired location (see delegateYield).
                                context.next = delegate.nextLoc;
                // If context.method was "throw" but the delegate handled the
                // exception, let the outer generator proceed normally. If
                // context.method was "next", forget context.arg since it has been
                // "consumed" by the delegate iterator. If context.method was
                // "return", allow the original .return call to continue in the
                // outer generator.
                                if (context.method !== "return") {
                    context.method = "next";
                    context.arg = undefined;
                }
            } else {
                // Re-yield the result returned by the delegate method.
                return info;
            }
            // The delegate iterator is finished, so forget it and continue with
            // the outer generator.
                        context.delegate = null;
            return ContinueSentinel;
        }
        // Define Generator.prototype.{next,throw,return} in terms of the
        // unified ._invoke helper method.
                defineIteratorMethods(Gp);
        Gp[toStringTagSymbol] = "Generator";
        // A Generator should always return itself as the iterator object when the
        // @@iterator function is called on it. Some browsers' implementations of the
        // iterator prototype chain incorrectly implement this, causing the Generator
        // object to not be returned from this call. This ensures that doesn't happen.
        // See https://github.com/facebook/regenerator/issues/274 for more details.
                Gp[iteratorSymbol] = function() {
            return this;
        };
        Gp.toString = function() {
            return "[object Generator]";
        };
        function pushTryEntry(locs) {
            var entry = {
                tryLoc: locs[0]
            };
            if (1 in locs) {
                entry.catchLoc = locs[1];
            }
            if (2 in locs) {
                entry.finallyLoc = locs[2];
                entry.afterLoc = locs[3];
            }
            this.tryEntries.push(entry);
        }
        function resetTryEntry(entry) {
            var record = entry.completion || {};
            record.type = "normal";
            delete record.arg;
            entry.completion = record;
        }
        function Context(tryLocsList) {
            // The root entry object (effectively a try statement without a catch
            // or a finally block) gives us a place to store values thrown from
            // locations where there is no enclosing try statement.
            this.tryEntries = [ {
                tryLoc: "root"
            } ];
            tryLocsList.forEach(pushTryEntry, this);
            this.reset(true);
        }
        runtime.keys = function(object) {
            var keys = [];
            for (var key in object) {
                keys.push(key);
            }
            keys.reverse();
            // Rather than returning an object with a next method, we keep
            // things simple and return the next function itself.
                        return function next() {
                while (keys.length) {
                    var key = keys.pop();
                    if (key in object) {
                        next.value = key;
                        next.done = false;
                        return next;
                    }
                }
                // To avoid creating an additional object, we just hang the .value
                // and .done properties off the next function object itself. This
                // also ensures that the minifier will not anonymize the function.
                                next.done = true;
                return next;
            };
        };
        function values(iterable) {
            if (iterable) {
                var iteratorMethod = iterable[iteratorSymbol];
                if (iteratorMethod) {
                    return iteratorMethod.call(iterable);
                }
                if (typeof iterable.next === "function") {
                    return iterable;
                }
                if (!isNaN(iterable.length)) {
                    var i = -1, next = function next() {
                        while (++i < iterable.length) {
                            if (hasOwn.call(iterable, i)) {
                                next.value = iterable[i];
                                next.done = false;
                                return next;
                            }
                        }
                        next.value = undefined;
                        next.done = true;
                        return next;
                    };
                    return next.next = next;
                }
            }
            // Return an iterator with no values.
                        return {
                next: doneResult
            };
        }
        runtime.values = values;
        function doneResult() {
            return {
                value: undefined,
                done: true
            };
        }
        Context.prototype = {
            constructor: Context,
            reset: function(skipTempReset) {
                this.prev = 0;
                this.next = 0;
                // Resetting context._sent for legacy support of Babel's
                // function.sent implementation.
                                this.sent = this._sent = undefined;
                this.done = false;
                this.delegate = null;
                this.method = "next";
                this.arg = undefined;
                this.tryEntries.forEach(resetTryEntry);
                if (!skipTempReset) {
                    for (var name in this) {
                        // Not sure about the optimal order of these conditions:
                        if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
                            this[name] = undefined;
                        }
                    }
                }
            },
            stop: function() {
                this.done = true;
                var rootEntry = this.tryEntries[0];
                var rootRecord = rootEntry.completion;
                if (rootRecord.type === "throw") {
                    throw rootRecord.arg;
                }
                return this.rval;
            },
            dispatchException: function(exception) {
                if (this.done) {
                    throw exception;
                }
                var context = this;
                function handle(loc, caught) {
                    record.type = "throw";
                    record.arg = exception;
                    context.next = loc;
                    if (caught) {
                        // If the dispatched exception was caught by a catch block,
                        // then let that catch block handle the exception normally.
                        context.method = "next";
                        context.arg = undefined;
                    }
                    return !!caught;
                }
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                    var entry = this.tryEntries[i];
                    var record = entry.completion;
                    if (entry.tryLoc === "root") {
                        // Exception thrown outside of any try block that could handle
                        // it, so set the completion value of the entire function to
                        // throw the exception.
                        return handle("end");
                    }
                    if (entry.tryLoc <= this.prev) {
                        var hasCatch = hasOwn.call(entry, "catchLoc");
                        var hasFinally = hasOwn.call(entry, "finallyLoc");
                        if (hasCatch && hasFinally) {
                            if (this.prev < entry.catchLoc) {
                                return handle(entry.catchLoc, true);
                            } else if (this.prev < entry.finallyLoc) {
                                return handle(entry.finallyLoc);
                            }
                        } else if (hasCatch) {
                            if (this.prev < entry.catchLoc) {
                                return handle(entry.catchLoc, true);
                            }
                        } else if (hasFinally) {
                            if (this.prev < entry.finallyLoc) {
                                return handle(entry.finallyLoc);
                            }
                        } else {
                            throw new Error("try statement without catch or finally");
                        }
                    }
                }
            },
            abrupt: function(type, arg) {
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                    var entry = this.tryEntries[i];
                    if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                        var finallyEntry = entry;
                        break;
                    }
                }
                if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
                    // Ignore the finally entry if control is not jumping to a
                    // location outside the try/catch block.
                    finallyEntry = null;
                }
                var record = finallyEntry ? finallyEntry.completion : {};
                record.type = type;
                record.arg = arg;
                if (finallyEntry) {
                    this.method = "next";
                    this.next = finallyEntry.finallyLoc;
                    return ContinueSentinel;
                }
                return this.complete(record);
            },
            complete: function(record, afterLoc) {
                if (record.type === "throw") {
                    throw record.arg;
                }
                if (record.type === "break" || record.type === "continue") {
                    this.next = record.arg;
                } else if (record.type === "return") {
                    this.rval = this.arg = record.arg;
                    this.method = "return";
                    this.next = "end";
                } else if (record.type === "normal" && afterLoc) {
                    this.next = afterLoc;
                }
                return ContinueSentinel;
            },
            finish: function(finallyLoc) {
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                    var entry = this.tryEntries[i];
                    if (entry.finallyLoc === finallyLoc) {
                        this.complete(entry.completion, entry.afterLoc);
                        resetTryEntry(entry);
                        return ContinueSentinel;
                    }
                }
            },
            catch: function(tryLoc) {
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                    var entry = this.tryEntries[i];
                    if (entry.tryLoc === tryLoc) {
                        var record = entry.completion;
                        if (record.type === "throw") {
                            var thrown = record.arg;
                            resetTryEntry(entry);
                        }
                        return thrown;
                    }
                }
                // The context.catch method must only be called with a location
                // argument that corresponds to a known catch block.
                                throw new Error("illegal catch attempt");
            },
            delegateYield: function(iterable, resultName, nextLoc) {
                this.delegate = {
                    iterator: values(iterable),
                    resultName: resultName,
                    nextLoc: nextLoc
                };
                if (this.method === "next") {
                    // Deliberately forget the last sent value so that we don't
                    // accidentally pass it on to the delegate.
                    this.arg = undefined;
                }
                return ContinueSentinel;
            }
        };
    }(
    // In sloppy mode, unbound `this` refers to the global object, fallback to
    // Function constructor if we're in global strict mode. That is sadly a form
    // of indirect eval which violates Content Security Policy.
    function() {
        return this || typeof self === "object" && self;
    }() || Function("return this")());
    /***/}, 
/* 23 */
/*!***********************************************************************!*\
  !*** C:/Users/Jack/Desktop/骑士人才网相关/Applet(3)最新版本/server/api-index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 20));
    var _request = _interopRequireDefault(__webpack_require__(/*! ../utils/request.js */ 24));
    var _urlIndex = _interopRequireDefault(__webpack_require__(/*! ./url-index.js */ 26));
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
        try {
            var info = gen[key](arg);
            var value = info.value;
        } catch (error) {
            error = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(error);
            reject(error);
            return;
        }
        if (info.done) {
            resolve(value);
        } else {
            Promise.resolve(value).then(_next, _throw);
        }
    }
    function _asyncToGenerator(fn) {
        return function() {
            var self = this, args = arguments;
            return new Promise(function(resolve, reject) {
                var gen = fn.apply(self, args);
                function _next(value) {
                    asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
                }
                function _throw(err) {
                    asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
                }
                _next(undefined);
            });
        };
    }
    var http = {};
    var _loop = function _loop(key) {
        var api = _urlIndex.default[key];
        http[key] = /* */ function() {
            var _ref = _asyncToGenerator(/* */ _regenerator.default.mark(function _callee(params, headers) {
                var response;
                return _regenerator.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return _request.default.globalRequest(api.url, api.method, params, headers);

                          case 2:
                            response = _context.sent;
                            return _context.abrupt("return", response);

                          case 4:
                          case "end":
                            return _context.stop();
                        }
                    }
                }, _callee);
            }));
            return function(_x, _x2) {
                return _ref.apply(this, arguments);
            };
        }();
    };
    for (var key in _urlIndex.default) {
        _loop(key);
    }
    var _default = http;
    exports.default = _default;
    /***/}, 
/* 24 */
/*!********************************************************************!*\
  !*** C:/Users/Jack/Desktop/骑士人才网相关/Applet(3)最新版本/utils/request.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    /* WEBPACK VAR INJECTION */
    /* WEBPACK VAR INJECTION */    
    /* WEBPACK VAR INJECTION */
    /* WEBPACK VAR INJECTION */ (function(uni) {
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = void 0;
        var _config = _interopRequireDefault(__webpack_require__(/*! ./config.js */ 25));
        var _store = _interopRequireDefault(__webpack_require__(/*! ../store */ 11));
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        var request = {};
        request.globalRequest = function(url, method, data, headers, type) {
            /*权限判断 因为有的接口请求头可能需要添加的参数不一样，所以这里做了区分
                                                                     1 == 不通过access_token校验的接口
                                                                     2 == 文件下载接口列表
                                                                     3 == 验证码登录 */
            return uni.request({
                url: _config.default + url,
                method: method,
                data: data,
                header: headers,
                dataType: "json"
            }).then(function(res) {
                if (res[1].data.status == 200 || res[1].data.status == 900 && res[1].statusCode == 200) {
                    if (res[1].data.data || res[1].data.data === 0) return res[1].data.data; else return res[1].data;
                } else if (res[1].data.status == 0 && res[1].statusCode == 200) {
                    uni.showToast({
                        title: res[1].data.msg,
                        icon: "none"
                    });
                } else {
                    // return Promise.reject(res[1].data)
                    // throw res[1].data
                    throw res[1].data;
                }
            }).catch(function(parmas) {
                switch (parmas.status) {
                  case 401:
                  case 402:
                    _store.default.dispatch("qsLogout");
                    if (type == 1) {
                        uni.showToast({
                            title: "请登录",
                            icon: "none"
                        });
                    } else {
                        uni.navigateTo({
                            url: "/pages/personal/myLogin?login=true"
                        });
                    }
                    break;

                  case 110:
                    uni.navigateTo({
                        url: "/pages/personal/myRegister?notice=1"
                    });
                    break;

                  default:
                    uni.showToast({
                        title: parmas.msg,
                        icon: "none"
                    });
                    return Promise.reject();
                    break;
                }
                //return Promise.reject()
                        });
        };
        var _default = request;
        exports.default = _default;
        /* WEBPACK VAR INJECTION */    }).call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"])
    /***/;
}, 
/* 25 */
/*!*******************************************************************!*\
  !*** C:/Users/Jack/Desktop/骑士人才网相关/Applet(3)最新版本/utils/config.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var baseUrl = "";
    if (true) {
        baseUrl = "https://www.xjrc.cn/";
    } else {}
    var _default = baseUrl;
    exports.default = _default;
    /***/}, 
/* 26 */
/*!***********************************************************************!*\
  !*** C:/Users/Jack/Desktop/骑士人才网相关/Applet(3)最新版本/server/url-index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var CONSTAPI = {
        // 首页职位列表
        hotJobList: {
            url: "index.php?m=Applet&a=hot_job_list&c=WxIndex",
            method: "GET"
        },
        // 首页职位列表(最新)
        newestJobList: {
            url: "index.php?m=Applet&a=newest_job_list&c=WxIndex",
            method: "GET"
        },
        // 首页轮播广告
        indexAd: {
            url: "index.php?m=Applet&a=index_ad&c=WxIndex",
            method: "GET"
        },
        // 首页轮播广告企业详情通过UID 查询企业ID
        queryid: {
            url: "index.php?m=Applet&a=query_id&c=WxIndex",
            method: "GET"
        },
        // 首页点击职位搜索
        searchSpreadOut: {
            url: "index.php?m=Applet&a=search_spread_out&c=WxJobsSearch",
            method: "GET"
        },
        // 会话token
        userList: {
            url: "index.php?m=Applet&a=user_list&c=WxChat",
            method: "GET"
        },
        // 会话快捷回复
        quickReply: {
            url: "index.php?m=Applet&a=quick_reply&c=WxChat",
            method: "GET"
        },
        // 聊天自动发送
        message: {
            url: "index.php?m=Applet&a=message&c=WxChat",
            method: "GET"
        },
        // 职位详情页面职位收藏
        favoritejobs: {
            url: "index.php?m=Applet&a=favoritejobs&c=WxJobsDetails",
            method: "GET"
        },
        // 职位详情页面投递简历
        resumeApply: {
            url: "index.php?m=Applet&a=resume_apply&c=WxJobsDetails",
            method: "GET"
        },
        // 职位详情页面职位收藏
        delBase64Img: {
            url: "index.php?m=Applet&a=del_base64_img&c=WxChat",
            method: "GET"
        },
        // 网站配置信息
        webCfg: {
            url: "index.php?m=Applet&a=web_cfg&c=WxIndex",
            method: "GET"
        },
        // 企业首页广告
        adIndex: {
            url: "index.php?m=Applet&a=ad_index&c=WxIndex",
            method: "GET"
        },
        // 企业首页推荐
        hotResumeList: {
            url: "index.php?m=Applet&a=hot_resume_list&c=WxIndex",
            method: "GET"
        },
        // 企业首页最新
        newestResumeList: {
            url: "index.php?m=Applet&a=newest_resume_list&c=WxIndex",
            method: "GET"
        },
        // 企业候选人被投递
        jobsApply: {
            url: "index.php?m=Applet&a=jobs_apply&c=WxCandidate",
            method: "GET"
        },
        // 企业候选人下拉筛选(有效职位)
        jobsName: {
            url: "index.php?m=Applet&a=jobs_name&c=WxCandidate",
            method: "GET"
        },
        // 企业候选人所有下拉筛选条件
        totalCondition: {
            url: "index.php?m=Applet&a=condition&c=WxCandidate",
            method: "GET"
        },
        // 企业已下载简历
        resumeDown: {
            url: "index.php?m=Applet&a=resume_down&c=WxCandidate",
            method: "GET"
        },
        // 企业收藏的简历
        resumeFavorites: {
            url: "index.php?m=Applet&a=resume_favorites&c=WxCandidate",
            method: "GET"
        },
        // 企业面试邀请(列表)
        jobInterview: {
            url: "index.php?m=Applet&a=jobs_interview_list&c=WxCandidate",
            method: "GET"
        },
        // 企业收到简历删除
        jobsApplyDel: {
            url: "index.php?m=Applet&a=jobs_apply_del&c=WxCandidate",
            method: "GET"
        },
        // 企业删除面试邀请
        jobsInterviewDel: {
            url: "index.php?m=Applet&a=jobs_interview_del&c=WxCandidate",
            method: "GET"
        },
        // 企业删除收藏简历(取消收藏)
        resumeFavoritesDel: {
            url: "index.php?m=Applet&a=resume_favorites_del&c=WxCandidate",
            method: "GET"
        },
        // 企业拨打电话
        phoneNumber: {
            url: "index.php?m=Applet&a=phone_number&c=WxCandidate",
            method: "GET"
        },
        // 企业下载简历
        downResume: {
            url: "index.php?m=Applet&a=resume_down_confirm&c=WxCandidate",
            method: "GET"
        },
        // 百度APP搜索优化
        baiduSeo: {
            url: "index.php?m=Applet&a=baidu_seo&c=BaiduSeo",
            method: "GET"
        },
        // 检查企业职位发布数量
        jobsCountCheck: {
            url: "index.php?m=Applet&a=jobs_count_check&c=WxCJobs",
            method: "GET"
        },
        // 检查后台是否开启强制认证企业
        jobs_audit: {
            url: "index.php?m=Applet&a=jobs_audit&c=WxCJobs",
            method: "GET"
        },
        // 是否填写企业信息
        cmemberIndex: {
            url: "index.php?m=Applet&a=cmember_index&c=WxCMemberCenter",
            method: "GET"
        },
        // 会员中心页
        memberIndex: {
            url: "index.php?m=Applet&a=member_index&c=WxMemberCenter",
            method: "GET"
        }
    };
    var _default = CONSTAPI;
    exports.default = _default;
    /***/}, 
/* 27 */
/*!************************************************************************!*\
  !*** C:/Users/Jack/Desktop/骑士人才网相关/Applet(3)最新版本/server/api-person.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 20));
    var _request = _interopRequireDefault(__webpack_require__(/*! ../utils/request.js */ 24));
    var _urlPerson = _interopRequireDefault(__webpack_require__(/*! ./url-person.js */ 28));
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
        try {
            var info = gen[key](arg);
            var value = info.value;
        } catch (error) {
            error = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(error);
            reject(error);
            return;
        }
        if (info.done) {
            resolve(value);
        } else {
            Promise.resolve(value).then(_next, _throw);
        }
    }
    function _asyncToGenerator(fn) {
        return function() {
            var self = this, args = arguments;
            return new Promise(function(resolve, reject) {
                var gen = fn.apply(self, args);
                function _next(value) {
                    asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
                }
                function _throw(err) {
                    asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
                }
                _next(undefined);
            });
        };
    }
    var http = {};
    var _loop = function _loop(key) {
        var api = _urlPerson.default[key];
        http[key] = /* */ function() {
            var _ref = _asyncToGenerator(/* */ _regenerator.default.mark(function _callee(params, headers, type) {
                var response;
                return _regenerator.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return _request.default.globalRequest(api.url, api.method, params, headers, type);

                          case 2:
                            response = _context.sent;
                            return _context.abrupt("return", response);

                          case 4:
                          case "end":
                            return _context.stop();
                        }
                    }
                }, _callee);
            }));
            return function(_x, _x2, _x3) {
                return _ref.apply(this, arguments);
            };
        }();
    };
    for (var key in _urlPerson.default) {
        _loop(key);
    }
    var _default = http;
    exports.default = _default;
    /***/}, 
/* 28 */
/*!************************************************************************!*\
  !*** C:/Users/Jack/Desktop/骑士人才网相关/Applet(3)最新版本/server/url-person.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var CONSTAPI = {
        // 会员中心页
        memberIndex: {
            url: "index.php?m=Applet&a=member_index&c=WxMemberCenter",
            method: "GET"
        },
        // 刷新简历
        refreshResume: {
            url: "index.php?m=Applet&a=refresh_resume&c=WxResume",
            method: "GET"
        },
        // 公开 隐私设置
        resumePrivacy: {
            url: "index.php?m=Applet&a=resume_privacy&c=WxResume",
            method: "GET"
        },
        // 屏蔽回显
        shieldCompany: {
            url: "index.php?m=Applet&a=shield_company&c=WxMemberCenter",
            method: "GET"
        },
        // 屏蔽关键字添加
        shieldCompanyAdd: {
            url: "index.php?m=Applet&a=shield_company_add&c=WxMemberCenter",
            method: "GET"
        },
        // 屏蔽删除
        shieldCompanyDel: {
            url: "index.php?m=Applet&a=shield_company_del&c=WxMemberCenter",
            method: "GET"
        },
        // 我的申请
        myApply: {
            url: "index.php?m=Applet&a=my_apply&c=WxMemberCenter",
            method: "GET"
        },
        // 我的面试
        myInterview: {
            url: "index.php?m=Applet&a=my_interview&c=WxMemberCenter",
            method: "GET"
        },
        // 对我感兴趣
        attentionToMe: {
            url: "index.php?m=Applet&a=attention_to_me&c=WxMemberCenter",
            method: "GET"
        },
        // 职位收藏
        jobsFavorites: {
            url: "index.php?m=Applet&a=jobs_favorites&c=WxMemberCenter",
            method: "GET"
        },
        // 删除职位收藏
        jobsFavoritesDel: {
            url: "index.php?m=Applet&a=jobs_favorites_del&c=WxMemberCenter",
            method: "GET"
        },
        // 投递简历
        resumeApply: {
            url: "index.php?m=Applet&a=resume_apply&c=WxJobsDetails",
            method: "GET"
        },
        // 旧手机号码回显
        oldMobile: {
            url: "index.php?m=Applet&a=old_mobile&c=WxMemberCenter",
            method: "GET"
        },
        // 企业旧手机号码回显
        oldMobileTwo: {
            url: "index.php?m=Applet&a=old_mobile&c=WxCMemberCenter",
            method: "GET"
        },
        // 修改手机号码 验证码
        sendmobileSms: {
            url: "index.php?m=Applet&a=sendmobile_sms&c=WxMemberCenter",
            method: "GET"
        },
        // 企业修改手机号码 验证码
        sendmobileSmsTwo: {
            url: "index.php?m=Applet&a=sendmobile_sms&c=WxCMemberCenter",
            method: "GET"
        },
        // 修改手机号码
        editMobile: {
            url: "index.php?m=Applet&a=edit_mobile&c=WxMemberCenter",
            method: "GET"
        },
        // 企业修改手机号码
        editMobileTwo: {
            url: "index.php?m=Applet&a=edit_mobile&c=WxCMemberCenter",
            method: "GET"
        },
        // 修改密码
        editPassword: {
            url: "index.php?m=Applet&a=edit_password&c=WxMemberCenter",
            method: "GET"
        },
        // 企业修改密码
        editPasswordTwo: {
            url: "index.php?m=Applet&a=edit_password&c=WxCMemberCenter",
            method: "GET"
        },
        // 会员注册
        register: {
            url: "index.php?m=Applet&a=register&c=WxLogin",
            method: "POST"
        },
        // 用户登录
        login: {
            url: "index.php?m=Applet&a=login&c=WxLogin",
            method: "POST"
        },
        // 第三方微信登录
        WxLogin: {
            url: "index.php?m=Applet&a=WxLogin&c=WxLogin",
            method: "POST"
        },
        // 注册 登录 验证码
        regSendSms: {
            url: "index.php?m=Applet&a=reg_send_sms&c=WxLogin",
            method: "POST"
        },
        // 微信登录
        getUserInfo: {
            url: "index.php?m=Applet&a=get_user_info&c=WxLogin",
            method: "POST"
        },
        // 微信获取手机号登录
        quickLogin: {
            url: "index.php?m=Applet&a=quick_login&c=WxLogin",
            method: "POST"
        },
        // 验证码图片
        captcha: {
            url: "index.php?m=Applet&a=captcha&c=WxLogin",
            method: "POST"
        },
        // 验证码图片2
        makeMaptcha: {
            url: "index.php?m=Applet&a=make_captcha&c=WxLogin",
            method: "GET"
        },
        // 切换身份
        switchUtype: {
            url: "index.php?m=Applet&a=switch_utype&c=WxLogin",
            method: "GET"
        },
        // 切换身份
        cmemberIndex: {
            url: "index.php?m=Applet&a=cmember_index&c=WxCMemberCenter",
            method: "GET"
        },
        // 批量刷新
        jobsRefreshAll: {
            url: "index.php?m=Applet&a=jobs_refresh_all&c=WxCJobs",
            method: "GET"
        },
        // 选择身份
        registerUtype: {
            url: "index.php?m=Applet&a=register_utype&c=WxLogin",
            method: "GET"
        },
        // 判断后台支付开关是否开启 0是未开启 1是开启
        openPay: {
            url: "index.php?m=Applet&a=open_pay&c=WxLogin",
            method: "GET"
        },
        // 检查企业职位发布数量
        jobsCountCheck: {
            url: "index.php?m=Applet&a=jobs_count_check&c=WxCJobs",
            method: "GET"
        },
        // 检查后台是否开启强制认证企业
        jobs_audit: {
            url: "index.php?m=Applet&a=jobs_audit&c=WxCJobs",
            method: "GET"
        }
    };
    var _default = CONSTAPI;
    exports.default = _default;
    /***/}, 
/* 29 */
/*!********************************************************************!*\
  !*** C:/Users/Jack/Desktop/骑士人才网相关/Applet(3)最新版本/utils/useList.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    /* WEBPACK VAR INJECTION */
    /* WEBPACK VAR INJECTION */    
    /* WEBPACK VAR INJECTION */
    /* WEBPACK VAR INJECTION */ (function(uni) {
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.voluation = voluation;
        exports.source = source;
        exports.getDate = getDate;
        exports.encrypt = encrypt;
        exports.workList = workList;
        exports.changeIcon = changeIcon;
        exports.workListTwo = workListTwo;
        exports.timestampToTime = timestampToTime;
        var _cryptoJs = _interopRequireDefault(__webpack_require__(/*! ../node_modules/crypto-js/crypto-js.js */ 30));
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        function chooseItem(state, name) {
            var item = null;
            if (state == 1) {
                item = {
                    src: "/static/image/is_top.png",
                    name: "已置顶",
                    use: "qs_three_color",
                    imgStyle: "qre_two_img"
                };
            } else {
                item = {
                    src: "",
                    name: name,
                    use: "qs_four_color",
                    imgStyle: ""
                };
            }
            return item;
        }
        function voluation(res) {
            var arr = [];
            res.map(function(item) {
                arr.push({
                    job_name: item.jobs_name,
                    urgen: item.emergency,
                    pay: item.wage || item.wage_cn,
                    id: item.id,
                    uid: item.uid,
                    cont: item.district_cn + " | " + item.experience_cn + " | " + item.education_cn,
                    com_name: item.companyname,
                    tag: item.tag_cn,
                    xianyan: item.setmeal_id > 1 ? 1 : 0,
                    huiyuan: item.setmeal_id > 1 ? 1 : 0,
                    renzheng: item.audit,
                    toudi: "0",
                    is_top: item.stick,
                    item: chooseItem(item.stick, item.refreshtime),
                    distance: item.map_range
                });
            });
            return arr;
        }
        function source(res) {
            var arr = [];
            res.map(function(item) {
                var tags = [];
                if (item.tag != "") {
                    var t = item.tag.split(",");
                    t.map(function(item) {
                        tags.push(item.slice(item.indexOf("|") + 1));
                    });
                }
                var btns = [];
                btns.push(item.setmeal_id == 1 ? {
                    use: "tagc4",
                    name: "普通会员"
                } : {
                    use: "tagc1",
                    name: "名企会员"
                });
                if (item.audit == 1) {
                    btns.push({
                        use: "tagc2",
                        name: "执照认证"
                    });
                }
                if (item.report == 1) {
                    btns.push({
                        use: "tagc3",
                        name: "实地认证"
                    });
                }
                arr.push({
                    id: item.id,
                    logo: item.logo,
                    job_name: item.jobs,
                    cont: "".concat(item.nature_cn, " | ").concat(item.scale_cn, " | ").concat(item.trade_cn),
                    com_name: item.companyname,
                    tag: tags,
                    num: item.jobs_count,
                    btng: btns
                });
            });
            return arr;
        }
        function getDate(time) {
            var date = new Date(time);
            var y = date.getFullYear();
            var m = date.getMonth() + 1;
            var d = date.getDate();
            var h = date.getHours();
            var mi = date.getMinutes();
            var now = Date.parse(new Date());
            var y2 = new Date().getFullYear();
            var newday = Date.parse(new Date(y2 + "-01-01 00:00:00"));
            if (now - time < 3600 * 24 * 1e3) {
                mi = mi > 9 ? mi : "0" + mi;
                return h + ":" + mi;
            } else if (now - time > 3600 * 24 * 1e3 && now - time < 3600 * 48 * 1e3) {
                return "1天前";
            } else if (time > newday) {
                d = d > 9 ? d : "0" + d;
                return m + "-" + d;
            } else {
                m = m > 9 ? m : "0" + m;
                return y + "-" + m;
            }
        }
        /**
   * 接口数据加密函数
   */        function encrypt(text, eckey) {
            var key = _cryptoJs.default.enc.Latin1.parse(eckey + "qscms");
            //为了避免补位，直接用16位的秘钥
                        var iv = _cryptoJs.default.enc.Latin1.parse("Qs_CMs8RcXT00XcX");
            //16位初始向量
                        var encrypted = _cryptoJs.default.AES.encrypt(text, key, {
                iv: iv,
                mode: _cryptoJs.default.mode.CBC,
                padding: _cryptoJs.default.pad.ZeroPadding
            });
            return encrypted.toString();
        }
        function workList(res) {
            var arr = [];
            res.map(function(item) {
                arr.push({
                    id: item.id,
                    name: item.fullname,
                    info: "".concat(item.age, "岁|").concat(item.experience_cn, "|").concat(item.education_cn, "|").concat(item.wage_cn),
                    addr: item.district_cn,
                    intention: item.intention_jobs,
                    src: item.photo_img,
                    recjob: item.job_status,
                    update: item.refreshtime,
                    sex: item.sex
                });
            });
            return arr;
        }
        function changeIcon(utype) {
            var bar = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
            if (utype == 1) {
                uni.setTabBarItem({
                    index: 0,
                    iconPath: "/static/image/home1.png",
                    selectedIconPath: "/static/image/home2.png",
                    text: "首页"
                });
                uni.setTabBarItem({
                    index: 1,
                    iconPath: "/static/image/information1.png",
                    selectedIconPath: "/static/image/information2.png",
                    text: "职聊"
                });
                uni.setTabBarItem({
                    index: 2,
                    iconPath: "/static/image/candidate1.png",
                    selectedIconPath: "/static/image/candidate2.png",
                    text: "候选人"
                });
                uni.setTabBarItem({
                    index: 3,
                    iconPath: "/static/image/member1.png",
                    selectedIconPath: "/static/image/member2.png",
                    text: "我的"
                });
                if (bar != 1) {
                    uni.setNavigationBarColor({
                        frontColor: "#ffffff",
                        backgroundColor: "#1787FB"
                    });
                } else {
                    uni.setNavigationBarColor({
                        frontColor: "#000000",
                        backgroundColor: "#FFFFFF"
                    });
                }
            } else {
                uni.setTabBarItem({
                    index: 0,
                    iconPath: "/static/image/tab_channel_normal.png",
                    selectedIconPath: "/static/image/tab_channel_pressed.png",
                    text: "首页"
                });
                uni.setTabBarItem({
                    index: 1,
                    iconPath: "/static/image/tab_message_normal.png",
                    selectedIconPath: "/static/image/tab_message_pressed.png",
                    text: "消息"
                });
                uni.setTabBarItem({
                    index: 2,
                    iconPath: "/static/image/tab_better_normal.png",
                    selectedIconPath: "/static/image/tab_better_pressed.png",
                    text: "简历"
                });
                uni.setTabBarItem({
                    index: 3,
                    iconPath: "/static/image/tab_my_normal.png",
                    selectedIconPath: "/static/image/tab_my_pressed.png",
                    text: "我的"
                });
                uni.setNavigationBarColor({
                    frontColor: "#000000",
                    backgroundColor: "#FFFFFF"
                });
            }
        }
        function workListTwo(res) {
            var arr = [];
            res.map(function(item) {
                arr.push({
                    id: item.resume_id,
                    did: item.did || item.id,
                    uid: item.uid,
                    name: item.fullname,
                    info: "".concat(item.age, "岁|").concat(item.experience_cn, "|").concat(item.education_cn, "|").concat(item.wage_cn),
                    addr: item.district_cn,
                    intention: item.intention_jobs,
                    src: item.photo_img,
                    recjob: item.jobs_name,
                    sex: item.sex,
                    is_reply: item.is_reply,
                    is_reply_cn: item.is_reply_cn,
                    colour: item.colour,
                    personal_look: item.personal_look,
                    interview_time: item.interview_time,
                    job_status: item.job_status,
                    jobs_state: item.jobs_state,
                    tips: item.tips,
                    jobs_id: item.jobs_id
                });
            });
            return arr;
        }
        function timestampToTime(timestamp) {
            var date = new Date(timestamp * 1e3);
            //时间戳为10位需*1000，时间戳为13位的话不需乘1000
                        var Y = date.getFullYear() + "-";
            var M = (date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1) + "-";
            var D = date.getDate() < 10 ? "0" + date.getDate() : date.getDate() + " ";
            var h = date.getHours() + ":";
            var m = date.getMinutes() + ":";
            var s = date.getSeconds();
            return Y + M + D + h;
        }
        /* WEBPACK VAR INJECTION */    }).call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"])
    /***/;
}, 
/* 30 */
/*!***************************************************************************************!*\
  !*** C:/Users/Jack/Desktop/骑士人才网相关/Applet(3)最新版本/node_modules/crypto-js/crypto-js.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ function(module, exports, __webpack_require__) {
    (function(root, factory) {
        if (true) {
            // CommonJS
            module.exports = exports = factory();
        } else {}
    })(this, function() {
        /**
	 * CryptoJS core components.
	 */
        var CryptoJS = CryptoJS || function(Math, undefined) {
            /*
	     * Local polyfil of Object.create
	     */
            var create = Object.create || function() {
                function F() {}
                return function(obj) {
                    var subtype;
                    F.prototype = obj;
                    subtype = new F();
                    F.prototype = null;
                    return subtype;
                };
            }()
            /**
	     * CryptoJS namespace.
	     */;
            /**
	     * CryptoJS namespace.
	     */            var C = {};
            /**
	     * Library namespace.
	     */            var C_lib = C.lib = {};
            /**
	     * Base object for prototypal inheritance.
	     */            var Base = C_lib.Base = function() {
                return {
                    /**
	             * Creates a new object that inherits from this object.
	             *
	             * @param {Object} overrides Properties to copy into the new object.
	             *
	             * @return {Object} The new object.
	             *
	             * @static
	             *
	             * @example
	             *
	             *     var MyType = CryptoJS.lib.Base.extend({
	             *         field: 'value',
	             *
	             *         method: function () {
	             *         }
	             *     });
	             */
                    extend: function(overrides) {
                        // Spawn
                        var subtype = create(this);
                        // Augment
                                                if (overrides) {
                            subtype.mixIn(overrides);
                        }
                        // Create default initializer
                                                if (!subtype.hasOwnProperty("init") || this.init === subtype.init) {
                            subtype.init = function() {
                                subtype.$super.init.apply(this, arguments);
                            };
                        }
                        // Initializer's prototype is the subtype object
                                                subtype.init.prototype = subtype;
                        // Reference supertype
                                                subtype.$super = this;
                        return subtype;
                    },
                    /**
	             * Extends this object and runs the init method.
	             * Arguments to create() will be passed to init().
	             *
	             * @return {Object} The new object.
	             *
	             * @static
	             *
	             * @example
	             *
	             *     var instance = MyType.create();
	             */
                    create: function() {
                        var instance = this.extend();
                        instance.init.apply(instance, arguments);
                        return instance;
                    },
                    /**
	             * Initializes a newly created object.
	             * Override this method to add some logic when your objects are created.
	             *
	             * @example
	             *
	             *     var MyType = CryptoJS.lib.Base.extend({
	             *         init: function () {
	             *             // ...
	             *         }
	             *     });
	             */
                    init: function() {},
                    /**
	             * Copies properties into this object.
	             *
	             * @param {Object} properties The properties to mix in.
	             *
	             * @example
	             *
	             *     MyType.mixIn({
	             *         field: 'value'
	             *     });
	             */
                    mixIn: function(properties) {
                        for (var propertyName in properties) {
                            if (properties.hasOwnProperty(propertyName)) {
                                this[propertyName] = properties[propertyName];
                            }
                        }
                        // IE won't copy toString using the loop above
                                                if (properties.hasOwnProperty("toString")) {
                            this.toString = properties.toString;
                        }
                    },
                    /**
	             * Creates a copy of this object.
	             *
	             * @return {Object} The clone.
	             *
	             * @example
	             *
	             *     var clone = instance.clone();
	             */
                    clone: function() {
                        return this.init.prototype.extend(this);
                    }
                };
            }();
            /**
	     * An array of 32-bit words.
	     *
	     * @property {Array} words The array of 32-bit words.
	     * @property {number} sigBytes The number of significant bytes in this word array.
	     */            var WordArray = C_lib.WordArray = Base.extend({
                /**
	         * Initializes a newly created word array.
	         *
	         * @param {Array} words (Optional) An array of 32-bit words.
	         * @param {number} sigBytes (Optional) The number of significant bytes in the words.
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.lib.WordArray.create();
	         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
	         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
	         */
                init: function(words, sigBytes) {
                    words = this.words = words || [];
                    if (sigBytes != undefined) {
                        this.sigBytes = sigBytes;
                    } else {
                        this.sigBytes = words.length * 4;
                    }
                },
                /**
	         * Converts this word array to a string.
	         *
	         * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
	         *
	         * @return {string} The stringified word array.
	         *
	         * @example
	         *
	         *     var string = wordArray + '';
	         *     var string = wordArray.toString();
	         *     var string = wordArray.toString(CryptoJS.enc.Utf8);
	         */
                toString: function(encoder) {
                    return (encoder || Hex).stringify(this);
                },
                /**
	         * Concatenates a word array to this word array.
	         *
	         * @param {WordArray} wordArray The word array to append.
	         *
	         * @return {WordArray} This word array.
	         *
	         * @example
	         *
	         *     wordArray1.concat(wordArray2);
	         */
                concat: function(wordArray) {
                    // Shortcuts
                    var thisWords = this.words;
                    var thatWords = wordArray.words;
                    var thisSigBytes = this.sigBytes;
                    var thatSigBytes = wordArray.sigBytes;
                    // Clamp excess bits
                                        this.clamp();
                    // Concat
                                        if (thisSigBytes % 4) {
                        // Copy one byte at a time
                        for (var i = 0; i < thatSigBytes; i++) {
                            var thatByte = thatWords[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                            thisWords[thisSigBytes + i >>> 2] |= thatByte << 24 - (thisSigBytes + i) % 4 * 8;
                        }
                    } else {
                        // Copy one word at a time
                        for (var i = 0; i < thatSigBytes; i += 4) {
                            thisWords[thisSigBytes + i >>> 2] = thatWords[i >>> 2];
                        }
                    }
                    this.sigBytes += thatSigBytes;
                    // Chainable
                                        return this;
                },
                /**
	         * Removes insignificant bits.
	         *
	         * @example
	         *
	         *     wordArray.clamp();
	         */
                clamp: function() {
                    // Shortcuts
                    var words = this.words;
                    var sigBytes = this.sigBytes;
                    // Clamp
                                        words[sigBytes >>> 2] &= 4294967295 << 32 - sigBytes % 4 * 8;
                    words.length = Math.ceil(sigBytes / 4);
                },
                /**
	         * Creates a copy of this word array.
	         *
	         * @return {WordArray} The clone.
	         *
	         * @example
	         *
	         *     var clone = wordArray.clone();
	         */
                clone: function() {
                    var clone = Base.clone.call(this);
                    clone.words = this.words.slice(0);
                    return clone;
                },
                /**
	         * Creates a word array filled with random bytes.
	         *
	         * @param {number} nBytes The number of random bytes to generate.
	         *
	         * @return {WordArray} The random word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.lib.WordArray.random(16);
	         */
                random: function(nBytes) {
                    var words = [];
                    var r = function(m_w) {
                        var m_w = m_w;
                        var m_z = 987654321;
                        var mask = 4294967295;
                        return function() {
                            m_z = 36969 * (m_z & 65535) + (m_z >> 16) & mask;
                            m_w = 18e3 * (m_w & 65535) + (m_w >> 16) & mask;
                            var result = (m_z << 16) + m_w & mask;
                            result /= 4294967296;
                            result += .5;
                            return result * (Math.random() > .5 ? 1 : -1);
                        };
                    };
                    for (var i = 0, rcache; i < nBytes; i += 4) {
                        var _r = r((rcache || Math.random()) * 4294967296);
                        rcache = _r() * 987654071;
                        words.push(_r() * 4294967296 | 0);
                    }
                    return new WordArray.init(words, nBytes);
                }
            });
            /**
	     * Encoder namespace.
	     */            var C_enc = C.enc = {};
            /**
	     * Hex encoding strategy.
	     */            var Hex = C_enc.Hex = {
                /**
	         * Converts a word array to a hex string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The hex string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
	         */
                stringify: function(wordArray) {
                    // Shortcuts
                    var words = wordArray.words;
                    var sigBytes = wordArray.sigBytes;
                    // Convert
                                        var hexChars = [];
                    for (var i = 0; i < sigBytes; i++) {
                        var bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                        hexChars.push((bite >>> 4).toString(16));
                        hexChars.push((bite & 15).toString(16));
                    }
                    return hexChars.join("");
                },
                /**
	         * Converts a hex string to a word array.
	         *
	         * @param {string} hexStr The hex string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
	         */
                parse: function(hexStr) {
                    // Shortcut
                    var hexStrLength = hexStr.length;
                    // Convert
                                        var words = [];
                    for (var i = 0; i < hexStrLength; i += 2) {
                        words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << 24 - i % 8 * 4;
                    }
                    return new WordArray.init(words, hexStrLength / 2);
                }
            };
            /**
	     * Latin1 encoding strategy.
	     */            var Latin1 = C_enc.Latin1 = {
                /**
	         * Converts a word array to a Latin1 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The Latin1 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
	         */
                stringify: function(wordArray) {
                    // Shortcuts
                    var words = wordArray.words;
                    var sigBytes = wordArray.sigBytes;
                    // Convert
                                        var latin1Chars = [];
                    for (var i = 0; i < sigBytes; i++) {
                        var bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                        latin1Chars.push(String.fromCharCode(bite));
                    }
                    return latin1Chars.join("");
                },
                /**
	         * Converts a Latin1 string to a word array.
	         *
	         * @param {string} latin1Str The Latin1 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
	         */
                parse: function(latin1Str) {
                    // Shortcut
                    var latin1StrLength = latin1Str.length;
                    // Convert
                                        var words = [];
                    for (var i = 0; i < latin1StrLength; i++) {
                        words[i >>> 2] |= (latin1Str.charCodeAt(i) & 255) << 24 - i % 4 * 8;
                    }
                    return new WordArray.init(words, latin1StrLength);
                }
            };
            /**
	     * UTF-8 encoding strategy.
	     */            var Utf8 = C_enc.Utf8 = {
                /**
	         * Converts a word array to a UTF-8 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The UTF-8 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
	         */
                stringify: function(wordArray) {
                    try {
                        return decodeURIComponent(escape(Latin1.stringify(wordArray)));
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        throw new Error("Malformed UTF-8 data");
                    }
                },
                /**
	         * Converts a UTF-8 string to a word array.
	         *
	         * @param {string} utf8Str The UTF-8 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
	         */
                parse: function(utf8Str) {
                    return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
                }
            };
            /**
	     * Abstract buffered block algorithm template.
	     *
	     * The property blockSize must be implemented in a concrete subtype.
	     *
	     * @property {number} _minBufferSize The number of blocks that should be kept unprocessed in the buffer. Default: 0
	     */            var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
                /**
	         * Resets this block algorithm's data buffer to its initial state.
	         *
	         * @example
	         *
	         *     bufferedBlockAlgorithm.reset();
	         */
                reset: function() {
                    // Initial values
                    this._data = new WordArray.init();
                    this._nDataBytes = 0;
                },
                /**
	         * Adds new data to this block algorithm's buffer.
	         *
	         * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
	         *
	         * @example
	         *
	         *     bufferedBlockAlgorithm._append('data');
	         *     bufferedBlockAlgorithm._append(wordArray);
	         */
                _append: function(data) {
                    // Convert string to WordArray, else assume WordArray already
                    if (typeof data == "string") {
                        data = Utf8.parse(data);
                    }
                    // Append
                                        this._data.concat(data);
                    this._nDataBytes += data.sigBytes;
                },
                /**
	         * Processes available data blocks.
	         *
	         * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
	         *
	         * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
	         *
	         * @return {WordArray} The processed data.
	         *
	         * @example
	         *
	         *     var processedData = bufferedBlockAlgorithm._process();
	         *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
	         */
                _process: function(doFlush) {
                    // Shortcuts
                    var data = this._data;
                    var dataWords = data.words;
                    var dataSigBytes = data.sigBytes;
                    var blockSize = this.blockSize;
                    var blockSizeBytes = blockSize * 4;
                    // Count blocks ready
                                        var nBlocksReady = dataSigBytes / blockSizeBytes;
                    if (doFlush) {
                        // Round up to include partial blocks
                        nBlocksReady = Math.ceil(nBlocksReady);
                    } else {
                        // Round down to include only full blocks,
                        // less the number of blocks that must remain in the buffer
                        nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
                    }
                    // Count words ready
                                        var nWordsReady = nBlocksReady * blockSize;
                    // Count bytes ready
                                        var nBytesReady = Math.min(nWordsReady * 4, dataSigBytes);
                    // Process blocks
                                        if (nWordsReady) {
                        for (var offset = 0; offset < nWordsReady; offset += blockSize) {
                            // Perform concrete-algorithm logic
                            this._doProcessBlock(dataWords, offset);
                        }
                        // Remove processed words
                                                var processedWords = dataWords.splice(0, nWordsReady);
                        data.sigBytes -= nBytesReady;
                    }
                    // Return processed words
                                        return new WordArray.init(processedWords, nBytesReady);
                },
                /**
	         * Creates a copy of this object.
	         *
	         * @return {Object} The clone.
	         *
	         * @example
	         *
	         *     var clone = bufferedBlockAlgorithm.clone();
	         */
                clone: function() {
                    var clone = Base.clone.call(this);
                    clone._data = this._data.clone();
                    return clone;
                },
                _minBufferSize: 0
            });
            /**
	     * Abstract hasher template.
	     *
	     * @property {number} blockSize The number of 32-bit words this hasher operates on. Default: 16 (512 bits)
	     */            var Hasher = C_lib.Hasher = BufferedBlockAlgorithm.extend({
                /**
	         * Configuration options.
	         */
                cfg: Base.extend(),
                /**
	         * Initializes a newly created hasher.
	         *
	         * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
	         *
	         * @example
	         *
	         *     var hasher = CryptoJS.algo.SHA256.create();
	         */
                init: function(cfg) {
                    // Apply config defaults
                    this.cfg = this.cfg.extend(cfg);
                    // Set initial values
                                        this.reset();
                },
                /**
	         * Resets this hasher to its initial state.
	         *
	         * @example
	         *
	         *     hasher.reset();
	         */
                reset: function() {
                    // Reset data buffer
                    BufferedBlockAlgorithm.reset.call(this);
                    // Perform concrete-hasher logic
                                        this._doReset();
                },
                /**
	         * Updates this hasher with a message.
	         *
	         * @param {WordArray|string} messageUpdate The message to append.
	         *
	         * @return {Hasher} This hasher.
	         *
	         * @example
	         *
	         *     hasher.update('message');
	         *     hasher.update(wordArray);
	         */
                update: function(messageUpdate) {
                    // Append
                    this._append(messageUpdate);
                    // Update the hash
                                        this._process();
                    // Chainable
                                        return this;
                },
                /**
	         * Finalizes the hash computation.
	         * Note that the finalize operation is effectively a destructive, read-once operation.
	         *
	         * @param {WordArray|string} messageUpdate (Optional) A final message update.
	         *
	         * @return {WordArray} The hash.
	         *
	         * @example
	         *
	         *     var hash = hasher.finalize();
	         *     var hash = hasher.finalize('message');
	         *     var hash = hasher.finalize(wordArray);
	         */
                finalize: function(messageUpdate) {
                    // Final message update
                    if (messageUpdate) {
                        this._append(messageUpdate);
                    }
                    // Perform concrete-hasher logic
                                        var hash = this._doFinalize();
                    return hash;
                },
                blockSize: 512 / 32,
                /**
	         * Creates a shortcut function to a hasher's object interface.
	         *
	         * @param {Hasher} hasher The hasher to create a helper for.
	         *
	         * @return {Function} The shortcut function.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
	         */
                _createHelper: function(hasher) {
                    return function(message, cfg) {
                        return new hasher.init(cfg).finalize(message);
                    };
                },
                /**
	         * Creates a shortcut function to the HMAC's object interface.
	         *
	         * @param {Hasher} hasher The hasher to use in this HMAC helper.
	         *
	         * @return {Function} The shortcut function.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
	         */
                _createHmacHelper: function(hasher) {
                    return function(message, key) {
                        return new C_algo.HMAC.init(hasher, key).finalize(message);
                    };
                }
            });
            /**
	     * Algorithm namespace.
	     */            var C_algo = C.algo = {};
            return C;
        }(Math);
        (function() {
            // Shortcuts
            var C = CryptoJS;
            var C_lib = C.lib;
            var WordArray = C_lib.WordArray;
            var C_enc = C.enc;
            /**
	     * Base64 encoding strategy.
	     */            var Base64 = C_enc.Base64 = {
                /**
	         * Converts a word array to a Base64 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The Base64 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var base64String = CryptoJS.enc.Base64.stringify(wordArray);
	         */
                stringify: function(wordArray) {
                    // Shortcuts
                    var words = wordArray.words;
                    var sigBytes = wordArray.sigBytes;
                    var map = this._map;
                    // Clamp excess bits
                                        wordArray.clamp();
                    // Convert
                                        var base64Chars = [];
                    for (var i = 0; i < sigBytes; i += 3) {
                        var byte1 = words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                        var byte2 = words[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255;
                        var byte3 = words[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255;
                        var triplet = byte1 << 16 | byte2 << 8 | byte3;
                        for (var j = 0; j < 4 && i + j * .75 < sigBytes; j++) {
                            base64Chars.push(map.charAt(triplet >>> 6 * (3 - j) & 63));
                        }
                    }
                    // Add padding
                                        var paddingChar = map.charAt(64);
                    if (paddingChar) {
                        while (base64Chars.length % 4) {
                            base64Chars.push(paddingChar);
                        }
                    }
                    return base64Chars.join("");
                },
                /**
	         * Converts a Base64 string to a word array.
	         *
	         * @param {string} base64Str The Base64 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Base64.parse(base64String);
	         */
                parse: function(base64Str) {
                    // Shortcuts
                    var base64StrLength = base64Str.length;
                    var map = this._map;
                    var reverseMap = this._reverseMap;
                    if (!reverseMap) {
                        reverseMap = this._reverseMap = [];
                        for (var j = 0; j < map.length; j++) {
                            reverseMap[map.charCodeAt(j)] = j;
                        }
                    }
                    // Ignore padding
                                        var paddingChar = map.charAt(64);
                    if (paddingChar) {
                        var paddingIndex = base64Str.indexOf(paddingChar);
                        if (paddingIndex !== -1) {
                            base64StrLength = paddingIndex;
                        }
                    }
                    // Convert
                                        return parseLoop(base64Str, base64StrLength, reverseMap);
                },
                _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
            };
            function parseLoop(base64Str, base64StrLength, reverseMap) {
                var words = [];
                var nBytes = 0;
                for (var i = 0; i < base64StrLength; i++) {
                    if (i % 4) {
                        var bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << i % 4 * 2;
                        var bits2 = reverseMap[base64Str.charCodeAt(i)] >>> 6 - i % 4 * 2;
                        words[nBytes >>> 2] |= (bits1 | bits2) << 24 - nBytes % 4 * 8;
                        nBytes++;
                    }
                }
                return WordArray.create(words, nBytes);
            }
        })();
        (function(Math) {
            // Shortcuts
            var C = CryptoJS;
            var C_lib = C.lib;
            var WordArray = C_lib.WordArray;
            var Hasher = C_lib.Hasher;
            var C_algo = C.algo;
            // Constants table
                        var T = [];
            // Compute constants
            // Compute constants
                        // Compute constants
            // Compute constants
            (function() {
                for (var i = 0; i < 64; i++) {
                    T[i] = Math.abs(Math.sin(i + 1)) * 4294967296 | 0;
                }
            })();
            /**
	     * MD5 hash algorithm.
	     */            var MD5 = C_algo.MD5 = Hasher.extend({
                _doReset: function() {
                    this._hash = new WordArray.init([ 1732584193, 4023233417, 2562383102, 271733878 ]);
                },
                _doProcessBlock: function(M, offset) {
                    // Swap endian
                    for (var i = 0; i < 16; i++) {
                        // Shortcuts
                        var offset_i = offset + i;
                        var M_offset_i = M[offset_i];
                        M[offset_i] = (M_offset_i << 8 | M_offset_i >>> 24) & 16711935 | (M_offset_i << 24 | M_offset_i >>> 8) & 4278255360;
                    }
                    // Shortcuts
                                        var H = this._hash.words;
                    var M_offset_0 = M[offset + 0];
                    var M_offset_1 = M[offset + 1];
                    var M_offset_2 = M[offset + 2];
                    var M_offset_3 = M[offset + 3];
                    var M_offset_4 = M[offset + 4];
                    var M_offset_5 = M[offset + 5];
                    var M_offset_6 = M[offset + 6];
                    var M_offset_7 = M[offset + 7];
                    var M_offset_8 = M[offset + 8];
                    var M_offset_9 = M[offset + 9];
                    var M_offset_10 = M[offset + 10];
                    var M_offset_11 = M[offset + 11];
                    var M_offset_12 = M[offset + 12];
                    var M_offset_13 = M[offset + 13];
                    var M_offset_14 = M[offset + 14];
                    var M_offset_15 = M[offset + 15];
                    // Working varialbes
                                        var a = H[0];
                    var b = H[1];
                    var c = H[2];
                    var d = H[3];
                    // Computation
                                        a = FF(a, b, c, d, M_offset_0, 7, T[0]);
                    d = FF(d, a, b, c, M_offset_1, 12, T[1]);
                    c = FF(c, d, a, b, M_offset_2, 17, T[2]);
                    b = FF(b, c, d, a, M_offset_3, 22, T[3]);
                    a = FF(a, b, c, d, M_offset_4, 7, T[4]);
                    d = FF(d, a, b, c, M_offset_5, 12, T[5]);
                    c = FF(c, d, a, b, M_offset_6, 17, T[6]);
                    b = FF(b, c, d, a, M_offset_7, 22, T[7]);
                    a = FF(a, b, c, d, M_offset_8, 7, T[8]);
                    d = FF(d, a, b, c, M_offset_9, 12, T[9]);
                    c = FF(c, d, a, b, M_offset_10, 17, T[10]);
                    b = FF(b, c, d, a, M_offset_11, 22, T[11]);
                    a = FF(a, b, c, d, M_offset_12, 7, T[12]);
                    d = FF(d, a, b, c, M_offset_13, 12, T[13]);
                    c = FF(c, d, a, b, M_offset_14, 17, T[14]);
                    b = FF(b, c, d, a, M_offset_15, 22, T[15]);
                    a = GG(a, b, c, d, M_offset_1, 5, T[16]);
                    d = GG(d, a, b, c, M_offset_6, 9, T[17]);
                    c = GG(c, d, a, b, M_offset_11, 14, T[18]);
                    b = GG(b, c, d, a, M_offset_0, 20, T[19]);
                    a = GG(a, b, c, d, M_offset_5, 5, T[20]);
                    d = GG(d, a, b, c, M_offset_10, 9, T[21]);
                    c = GG(c, d, a, b, M_offset_15, 14, T[22]);
                    b = GG(b, c, d, a, M_offset_4, 20, T[23]);
                    a = GG(a, b, c, d, M_offset_9, 5, T[24]);
                    d = GG(d, a, b, c, M_offset_14, 9, T[25]);
                    c = GG(c, d, a, b, M_offset_3, 14, T[26]);
                    b = GG(b, c, d, a, M_offset_8, 20, T[27]);
                    a = GG(a, b, c, d, M_offset_13, 5, T[28]);
                    d = GG(d, a, b, c, M_offset_2, 9, T[29]);
                    c = GG(c, d, a, b, M_offset_7, 14, T[30]);
                    b = GG(b, c, d, a, M_offset_12, 20, T[31]);
                    a = HH(a, b, c, d, M_offset_5, 4, T[32]);
                    d = HH(d, a, b, c, M_offset_8, 11, T[33]);
                    c = HH(c, d, a, b, M_offset_11, 16, T[34]);
                    b = HH(b, c, d, a, M_offset_14, 23, T[35]);
                    a = HH(a, b, c, d, M_offset_1, 4, T[36]);
                    d = HH(d, a, b, c, M_offset_4, 11, T[37]);
                    c = HH(c, d, a, b, M_offset_7, 16, T[38]);
                    b = HH(b, c, d, a, M_offset_10, 23, T[39]);
                    a = HH(a, b, c, d, M_offset_13, 4, T[40]);
                    d = HH(d, a, b, c, M_offset_0, 11, T[41]);
                    c = HH(c, d, a, b, M_offset_3, 16, T[42]);
                    b = HH(b, c, d, a, M_offset_6, 23, T[43]);
                    a = HH(a, b, c, d, M_offset_9, 4, T[44]);
                    d = HH(d, a, b, c, M_offset_12, 11, T[45]);
                    c = HH(c, d, a, b, M_offset_15, 16, T[46]);
                    b = HH(b, c, d, a, M_offset_2, 23, T[47]);
                    a = II(a, b, c, d, M_offset_0, 6, T[48]);
                    d = II(d, a, b, c, M_offset_7, 10, T[49]);
                    c = II(c, d, a, b, M_offset_14, 15, T[50]);
                    b = II(b, c, d, a, M_offset_5, 21, T[51]);
                    a = II(a, b, c, d, M_offset_12, 6, T[52]);
                    d = II(d, a, b, c, M_offset_3, 10, T[53]);
                    c = II(c, d, a, b, M_offset_10, 15, T[54]);
                    b = II(b, c, d, a, M_offset_1, 21, T[55]);
                    a = II(a, b, c, d, M_offset_8, 6, T[56]);
                    d = II(d, a, b, c, M_offset_15, 10, T[57]);
                    c = II(c, d, a, b, M_offset_6, 15, T[58]);
                    b = II(b, c, d, a, M_offset_13, 21, T[59]);
                    a = II(a, b, c, d, M_offset_4, 6, T[60]);
                    d = II(d, a, b, c, M_offset_11, 10, T[61]);
                    c = II(c, d, a, b, M_offset_2, 15, T[62]);
                    b = II(b, c, d, a, M_offset_9, 21, T[63]);
                    // Intermediate hash value
                                        H[0] = H[0] + a | 0;
                    H[1] = H[1] + b | 0;
                    H[2] = H[2] + c | 0;
                    H[3] = H[3] + d | 0;
                },
                _doFinalize: function() {
                    // Shortcuts
                    var data = this._data;
                    var dataWords = data.words;
                    var nBitsTotal = this._nDataBytes * 8;
                    var nBitsLeft = data.sigBytes * 8;
                    // Add padding
                                        dataWords[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
                    var nBitsTotalH = Math.floor(nBitsTotal / 4294967296);
                    var nBitsTotalL = nBitsTotal;
                    dataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] = (nBitsTotalH << 8 | nBitsTotalH >>> 24) & 16711935 | (nBitsTotalH << 24 | nBitsTotalH >>> 8) & 4278255360;
                    dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = (nBitsTotalL << 8 | nBitsTotalL >>> 24) & 16711935 | (nBitsTotalL << 24 | nBitsTotalL >>> 8) & 4278255360;
                    data.sigBytes = (dataWords.length + 1) * 4;
                    // Hash final blocks
                                        this._process();
                    // Shortcuts
                                        var hash = this._hash;
                    var H = hash.words;
                    // Swap endian
                                        for (var i = 0; i < 4; i++) {
                        // Shortcut
                        var H_i = H[i];
                        H[i] = (H_i << 8 | H_i >>> 24) & 16711935 | (H_i << 24 | H_i >>> 8) & 4278255360;
                    }
                    // Return final computed hash
                                        return hash;
                },
                clone: function() {
                    var clone = Hasher.clone.call(this);
                    clone._hash = this._hash.clone();
                    return clone;
                }
            });
            function FF(a, b, c, d, x, s, t) {
                var n = a + (b & c | ~b & d) + x + t;
                return (n << s | n >>> 32 - s) + b;
            }
            function GG(a, b, c, d, x, s, t) {
                var n = a + (b & d | c & ~d) + x + t;
                return (n << s | n >>> 32 - s) + b;
            }
            function HH(a, b, c, d, x, s, t) {
                var n = a + (b ^ c ^ d) + x + t;
                return (n << s | n >>> 32 - s) + b;
            }
            function II(a, b, c, d, x, s, t) {
                var n = a + (c ^ (b | ~d)) + x + t;
                return (n << s | n >>> 32 - s) + b;
            }
            /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.MD5('message');
	     *     var hash = CryptoJS.MD5(wordArray);
	     */            C.MD5 = Hasher._createHelper(MD5);
            /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacMD5(message, key);
	     */            C.HmacMD5 = Hasher._createHmacHelper(MD5);
        })(Math);
        (function() {
            // Shortcuts
            var C = CryptoJS;
            var C_lib = C.lib;
            var WordArray = C_lib.WordArray;
            var Hasher = C_lib.Hasher;
            var C_algo = C.algo;
            // Reusable object
                        var W = [];
            /**
	     * SHA-1 hash algorithm.
	     */            var SHA1 = C_algo.SHA1 = Hasher.extend({
                _doReset: function() {
                    this._hash = new WordArray.init([ 1732584193, 4023233417, 2562383102, 271733878, 3285377520 ]);
                },
                _doProcessBlock: function(M, offset) {
                    // Shortcut
                    var H = this._hash.words;
                    // Working variables
                                        var a = H[0];
                    var b = H[1];
                    var c = H[2];
                    var d = H[3];
                    var e = H[4];
                    // Computation
                                        for (var i = 0; i < 80; i++) {
                        if (i < 16) {
                            W[i] = M[offset + i] | 0;
                        } else {
                            var n = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
                            W[i] = n << 1 | n >>> 31;
                        }
                        var t = (a << 5 | a >>> 27) + e + W[i];
                        if (i < 20) {
                            t += (b & c | ~b & d) + 1518500249;
                        } else if (i < 40) {
                            t += (b ^ c ^ d) + 1859775393;
                        } else if (i < 60) {
                            t += (b & c | b & d | c & d) - 1894007588;
                        } else /* if (i < 80) */ {
                            t += (b ^ c ^ d) - 899497514;
                        }
                        e = d;
                        d = c;
                        c = b << 30 | b >>> 2;
                        b = a;
                        a = t;
                    }
                    // Intermediate hash value
                                        H[0] = H[0] + a | 0;
                    H[1] = H[1] + b | 0;
                    H[2] = H[2] + c | 0;
                    H[3] = H[3] + d | 0;
                    H[4] = H[4] + e | 0;
                },
                _doFinalize: function() {
                    // Shortcuts
                    var data = this._data;
                    var dataWords = data.words;
                    var nBitsTotal = this._nDataBytes * 8;
                    var nBitsLeft = data.sigBytes * 8;
                    // Add padding
                                        dataWords[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
                    dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = Math.floor(nBitsTotal / 4294967296);
                    dataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] = nBitsTotal;
                    data.sigBytes = dataWords.length * 4;
                    // Hash final blocks
                                        this._process();
                    // Return final computed hash
                                        return this._hash;
                },
                clone: function() {
                    var clone = Hasher.clone.call(this);
                    clone._hash = this._hash.clone();
                    return clone;
                }
            });
            /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA1('message');
	     *     var hash = CryptoJS.SHA1(wordArray);
	     */            C.SHA1 = Hasher._createHelper(SHA1);
            /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA1(message, key);
	     */            C.HmacSHA1 = Hasher._createHmacHelper(SHA1);
        })();
        (function(Math) {
            // Shortcuts
            var C = CryptoJS;
            var C_lib = C.lib;
            var WordArray = C_lib.WordArray;
            var Hasher = C_lib.Hasher;
            var C_algo = C.algo;
            // Initialization and round constants tables
                        var H = [];
            var K = [];
            // Compute constants
            // Compute constants
                        // Compute constants
            // Compute constants
            (function() {
                function isPrime(n) {
                    var sqrtN = Math.sqrt(n);
                    for (var factor = 2; factor <= sqrtN; factor++) {
                        if (!(n % factor)) {
                            return false;
                        }
                    }
                    return true;
                }
                function getFractionalBits(n) {
                    return (n - (n | 0)) * 4294967296 | 0;
                }
                var n = 2;
                var nPrime = 0;
                while (nPrime < 64) {
                    if (isPrime(n)) {
                        if (nPrime < 8) {
                            H[nPrime] = getFractionalBits(Math.pow(n, 1 / 2));
                        }
                        K[nPrime] = getFractionalBits(Math.pow(n, 1 / 3));
                        nPrime++;
                    }
                    n++;
                }
            })();
            // Reusable object
                        var W = [];
            /**
	     * SHA-256 hash algorithm.
	     */            var SHA256 = C_algo.SHA256 = Hasher.extend({
                _doReset: function() {
                    this._hash = new WordArray.init(H.slice(0));
                },
                _doProcessBlock: function(M, offset) {
                    // Shortcut
                    var H = this._hash.words;
                    // Working variables
                                        var a = H[0];
                    var b = H[1];
                    var c = H[2];
                    var d = H[3];
                    var e = H[4];
                    var f = H[5];
                    var g = H[6];
                    var h = H[7];
                    // Computation
                                        for (var i = 0; i < 64; i++) {
                        if (i < 16) {
                            W[i] = M[offset + i] | 0;
                        } else {
                            var gamma0x = W[i - 15];
                            var gamma0 = (gamma0x << 25 | gamma0x >>> 7) ^ (gamma0x << 14 | gamma0x >>> 18) ^ gamma0x >>> 3;
                            var gamma1x = W[i - 2];
                            var gamma1 = (gamma1x << 15 | gamma1x >>> 17) ^ (gamma1x << 13 | gamma1x >>> 19) ^ gamma1x >>> 10;
                            W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
                        }
                        var ch = e & f ^ ~e & g;
                        var maj = a & b ^ a & c ^ b & c;
                        var sigma0 = (a << 30 | a >>> 2) ^ (a << 19 | a >>> 13) ^ (a << 10 | a >>> 22);
                        var sigma1 = (e << 26 | e >>> 6) ^ (e << 21 | e >>> 11) ^ (e << 7 | e >>> 25);
                        var t1 = h + sigma1 + ch + K[i] + W[i];
                        var t2 = sigma0 + maj;
                        h = g;
                        g = f;
                        f = e;
                        e = d + t1 | 0;
                        d = c;
                        c = b;
                        b = a;
                        a = t1 + t2 | 0;
                    }
                    // Intermediate hash value
                                        H[0] = H[0] + a | 0;
                    H[1] = H[1] + b | 0;
                    H[2] = H[2] + c | 0;
                    H[3] = H[3] + d | 0;
                    H[4] = H[4] + e | 0;
                    H[5] = H[5] + f | 0;
                    H[6] = H[6] + g | 0;
                    H[7] = H[7] + h | 0;
                },
                _doFinalize: function() {
                    // Shortcuts
                    var data = this._data;
                    var dataWords = data.words;
                    var nBitsTotal = this._nDataBytes * 8;
                    var nBitsLeft = data.sigBytes * 8;
                    // Add padding
                                        dataWords[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
                    dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = Math.floor(nBitsTotal / 4294967296);
                    dataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] = nBitsTotal;
                    data.sigBytes = dataWords.length * 4;
                    // Hash final blocks
                                        this._process();
                    // Return final computed hash
                                        return this._hash;
                },
                clone: function() {
                    var clone = Hasher.clone.call(this);
                    clone._hash = this._hash.clone();
                    return clone;
                }
            });
            /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA256('message');
	     *     var hash = CryptoJS.SHA256(wordArray);
	     */            C.SHA256 = Hasher._createHelper(SHA256);
            /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA256(message, key);
	     */            C.HmacSHA256 = Hasher._createHmacHelper(SHA256);
        })(Math);
        (function() {
            // Shortcuts
            var C = CryptoJS;
            var C_lib = C.lib;
            var WordArray = C_lib.WordArray;
            var C_enc = C.enc;
            /**
	     * UTF-16 BE encoding strategy.
	     */            var Utf16BE = C_enc.Utf16 = C_enc.Utf16BE = {
                /**
	         * Converts a word array to a UTF-16 BE string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The UTF-16 BE string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var utf16String = CryptoJS.enc.Utf16.stringify(wordArray);
	         */
                stringify: function(wordArray) {
                    // Shortcuts
                    var words = wordArray.words;
                    var sigBytes = wordArray.sigBytes;
                    // Convert
                                        var utf16Chars = [];
                    for (var i = 0; i < sigBytes; i += 2) {
                        var codePoint = words[i >>> 2] >>> 16 - i % 4 * 8 & 65535;
                        utf16Chars.push(String.fromCharCode(codePoint));
                    }
                    return utf16Chars.join("");
                },
                /**
	         * Converts a UTF-16 BE string to a word array.
	         *
	         * @param {string} utf16Str The UTF-16 BE string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Utf16.parse(utf16String);
	         */
                parse: function(utf16Str) {
                    // Shortcut
                    var utf16StrLength = utf16Str.length;
                    // Convert
                                        var words = [];
                    for (var i = 0; i < utf16StrLength; i++) {
                        words[i >>> 1] |= utf16Str.charCodeAt(i) << 16 - i % 2 * 16;
                    }
                    return WordArray.create(words, utf16StrLength * 2);
                }
            };
            /**
	     * UTF-16 LE encoding strategy.
	     */            C_enc.Utf16LE = {
                /**
	         * Converts a word array to a UTF-16 LE string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The UTF-16 LE string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var utf16Str = CryptoJS.enc.Utf16LE.stringify(wordArray);
	         */
                stringify: function(wordArray) {
                    // Shortcuts
                    var words = wordArray.words;
                    var sigBytes = wordArray.sigBytes;
                    // Convert
                                        var utf16Chars = [];
                    for (var i = 0; i < sigBytes; i += 2) {
                        var codePoint = swapEndian(words[i >>> 2] >>> 16 - i % 4 * 8 & 65535);
                        utf16Chars.push(String.fromCharCode(codePoint));
                    }
                    return utf16Chars.join("");
                },
                /**
	         * Converts a UTF-16 LE string to a word array.
	         *
	         * @param {string} utf16Str The UTF-16 LE string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Utf16LE.parse(utf16Str);
	         */
                parse: function(utf16Str) {
                    // Shortcut
                    var utf16StrLength = utf16Str.length;
                    // Convert
                                        var words = [];
                    for (var i = 0; i < utf16StrLength; i++) {
                        words[i >>> 1] |= swapEndian(utf16Str.charCodeAt(i) << 16 - i % 2 * 16);
                    }
                    return WordArray.create(words, utf16StrLength * 2);
                }
            };
            function swapEndian(word) {
                return word << 8 & 4278255360 | word >>> 8 & 16711935;
            }
        })();
        (function() {
            // Check if typed arrays are supported
            if (typeof ArrayBuffer != "function") {
                return;
            }
            // Shortcuts
                        var C = CryptoJS;
            var C_lib = C.lib;
            var WordArray = C_lib.WordArray;
            // Reference original init
                        var superInit = WordArray.init;
            // Augment WordArray.init to handle typed arrays
                        var subInit = WordArray.init = function(typedArray) {
                // Convert buffers to uint8
                if (typedArray instanceof ArrayBuffer) {
                    typedArray = new Uint8Array(typedArray);
                }
                // Convert other array views to uint8
                                if (typedArray instanceof Int8Array || typeof Uint8ClampedArray !== "undefined" && typedArray instanceof Uint8ClampedArray || typedArray instanceof Int16Array || typedArray instanceof Uint16Array || typedArray instanceof Int32Array || typedArray instanceof Uint32Array || typedArray instanceof Float32Array || typedArray instanceof Float64Array) {
                    typedArray = new Uint8Array(typedArray.buffer, typedArray.byteOffset, typedArray.byteLength);
                }
                // Handle Uint8Array
                                if (typedArray instanceof Uint8Array) {
                    // Shortcut
                    var typedArrayByteLength = typedArray.byteLength;
                    // Extract bytes
                                        var words = [];
                    for (var i = 0; i < typedArrayByteLength; i++) {
                        words[i >>> 2] |= typedArray[i] << 24 - i % 4 * 8;
                    }
                    // Initialize this word array
                                        superInit.call(this, words, typedArrayByteLength);
                } else {
                    // Else call normal init
                    superInit.apply(this, arguments);
                }
            };
            subInit.prototype = WordArray;
        })();
        /** @preserve
	(c) 2012 by Cédric Mesnil. All rights reserved.

	Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

	    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
	    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

	THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	*/
        /** @preserve
	(c) 2012 by Cédric Mesnil. All rights reserved.

	Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

	    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
	    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

	THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	*/        
        /** @preserve
	(c) 2012 by Cédric Mesnil. All rights reserved.

	Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

	    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
	    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

	THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	*/
        /** @preserve
	(c) 2012 by Cédric Mesnil. All rights reserved.

	Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

	    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
	    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

	THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	*/
        (function(Math) {
            // Shortcuts
            var C = CryptoJS;
            var C_lib = C.lib;
            var WordArray = C_lib.WordArray;
            var Hasher = C_lib.Hasher;
            var C_algo = C.algo;
            // Constants table
                        var _zl = WordArray.create([ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13 ]);
            var _zr = WordArray.create([ 5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11 ]);
            var _sl = WordArray.create([ 11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6 ]);
            var _sr = WordArray.create([ 8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11 ]);
            var _hl = WordArray.create([ 0, 1518500249, 1859775393, 2400959708, 2840853838 ]);
            var _hr = WordArray.create([ 1352829926, 1548603684, 1836072691, 2053994217, 0 ]);
            /**
	     * RIPEMD160 hash algorithm.
	     */            var RIPEMD160 = C_algo.RIPEMD160 = Hasher.extend({
                _doReset: function() {
                    this._hash = WordArray.create([ 1732584193, 4023233417, 2562383102, 271733878, 3285377520 ]);
                },
                _doProcessBlock: function(M, offset) {
                    // Swap endian
                    for (var i = 0; i < 16; i++) {
                        // Shortcuts
                        var offset_i = offset + i;
                        var M_offset_i = M[offset_i];
                        // Swap
                                                M[offset_i] = (M_offset_i << 8 | M_offset_i >>> 24) & 16711935 | (M_offset_i << 24 | M_offset_i >>> 8) & 4278255360;
                    }
                    // Shortcut
                                        var H = this._hash.words;
                    var hl = _hl.words;
                    var hr = _hr.words;
                    var zl = _zl.words;
                    var zr = _zr.words;
                    var sl = _sl.words;
                    var sr = _sr.words;
                    // Working variables
                                        var al, bl, cl, dl, el;
                    var ar, br, cr, dr, er;
                    ar = al = H[0];
                    br = bl = H[1];
                    cr = cl = H[2];
                    dr = dl = H[3];
                    er = el = H[4];
                    // Computation
                                        var t;
                    for (var i = 0; i < 80; i += 1) {
                        t = al + M[offset + zl[i]] | 0;
                        if (i < 16) {
                            t += f1(bl, cl, dl) + hl[0];
                        } else if (i < 32) {
                            t += f2(bl, cl, dl) + hl[1];
                        } else if (i < 48) {
                            t += f3(bl, cl, dl) + hl[2];
                        } else if (i < 64) {
                            t += f4(bl, cl, dl) + hl[3];
                        } else {
                            // if (i<80) {
                            t += f5(bl, cl, dl) + hl[4];
                        }
                        t = t | 0;
                        t = rotl(t, sl[i]);
                        t = t + el | 0;
                        al = el;
                        el = dl;
                        dl = rotl(cl, 10);
                        cl = bl;
                        bl = t;
                        t = ar + M[offset + zr[i]] | 0;
                        if (i < 16) {
                            t += f5(br, cr, dr) + hr[0];
                        } else if (i < 32) {
                            t += f4(br, cr, dr) + hr[1];
                        } else if (i < 48) {
                            t += f3(br, cr, dr) + hr[2];
                        } else if (i < 64) {
                            t += f2(br, cr, dr) + hr[3];
                        } else {
                            // if (i<80) {
                            t += f1(br, cr, dr) + hr[4];
                        }
                        t = t | 0;
                        t = rotl(t, sr[i]);
                        t = t + er | 0;
                        ar = er;
                        er = dr;
                        dr = rotl(cr, 10);
                        cr = br;
                        br = t;
                    }
                    // Intermediate hash value
                                        t = H[1] + cl + dr | 0;
                    H[1] = H[2] + dl + er | 0;
                    H[2] = H[3] + el + ar | 0;
                    H[3] = H[4] + al + br | 0;
                    H[4] = H[0] + bl + cr | 0;
                    H[0] = t;
                },
                _doFinalize: function() {
                    // Shortcuts
                    var data = this._data;
                    var dataWords = data.words;
                    var nBitsTotal = this._nDataBytes * 8;
                    var nBitsLeft = data.sigBytes * 8;
                    // Add padding
                                        dataWords[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
                    dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = (nBitsTotal << 8 | nBitsTotal >>> 24) & 16711935 | (nBitsTotal << 24 | nBitsTotal >>> 8) & 4278255360;
                    data.sigBytes = (dataWords.length + 1) * 4;
                    // Hash final blocks
                                        this._process();
                    // Shortcuts
                                        var hash = this._hash;
                    var H = hash.words;
                    // Swap endian
                                        for (var i = 0; i < 5; i++) {
                        // Shortcut
                        var H_i = H[i];
                        // Swap
                                                H[i] = (H_i << 8 | H_i >>> 24) & 16711935 | (H_i << 24 | H_i >>> 8) & 4278255360;
                    }
                    // Return final computed hash
                                        return hash;
                },
                clone: function() {
                    var clone = Hasher.clone.call(this);
                    clone._hash = this._hash.clone();
                    return clone;
                }
            });
            function f1(x, y, z) {
                return x ^ y ^ z;
            }
            function f2(x, y, z) {
                return x & y | ~x & z;
            }
            function f3(x, y, z) {
                return (x | ~y) ^ z;
            }
            function f4(x, y, z) {
                return x & z | y & ~z;
            }
            function f5(x, y, z) {
                return x ^ (y | ~z);
            }
            function rotl(x, n) {
                return x << n | x >>> 32 - n;
            }
            /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.RIPEMD160('message');
	     *     var hash = CryptoJS.RIPEMD160(wordArray);
	     */            C.RIPEMD160 = Hasher._createHelper(RIPEMD160);
            /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacRIPEMD160(message, key);
	     */            C.HmacRIPEMD160 = Hasher._createHmacHelper(RIPEMD160);
        })(Math);
        (function() {
            // Shortcuts
            var C = CryptoJS;
            var C_lib = C.lib;
            var Base = C_lib.Base;
            var C_enc = C.enc;
            var Utf8 = C_enc.Utf8;
            var C_algo = C.algo;
            /**
	     * HMAC algorithm.
	     */            var HMAC = C_algo.HMAC = Base.extend({
                /**
	         * Initializes a newly created HMAC.
	         *
	         * @param {Hasher} hasher The hash algorithm to use.
	         * @param {WordArray|string} key The secret key.
	         *
	         * @example
	         *
	         *     var hmacHasher = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, key);
	         */
                init: function(hasher, key) {
                    // Init hasher
                    hasher = this._hasher = new hasher.init();
                    // Convert string to WordArray, else assume WordArray already
                                        if (typeof key == "string") {
                        key = Utf8.parse(key);
                    }
                    // Shortcuts
                                        var hasherBlockSize = hasher.blockSize;
                    var hasherBlockSizeBytes = hasherBlockSize * 4;
                    // Allow arbitrary length keys
                                        if (key.sigBytes > hasherBlockSizeBytes) {
                        key = hasher.finalize(key);
                    }
                    // Clamp excess bits
                                        key.clamp();
                    // Clone key for inner and outer pads
                                        var oKey = this._oKey = key.clone();
                    var iKey = this._iKey = key.clone();
                    // Shortcuts
                                        var oKeyWords = oKey.words;
                    var iKeyWords = iKey.words;
                    // XOR keys with pad constants
                                        for (var i = 0; i < hasherBlockSize; i++) {
                        oKeyWords[i] ^= 1549556828;
                        iKeyWords[i] ^= 909522486;
                    }
                    oKey.sigBytes = iKey.sigBytes = hasherBlockSizeBytes;
                    // Set initial values
                                        this.reset();
                },
                /**
	         * Resets this HMAC to its initial state.
	         *
	         * @example
	         *
	         *     hmacHasher.reset();
	         */
                reset: function() {
                    // Shortcut
                    var hasher = this._hasher;
                    // Reset
                                        hasher.reset();
                    hasher.update(this._iKey);
                },
                /**
	         * Updates this HMAC with a message.
	         *
	         * @param {WordArray|string} messageUpdate The message to append.
	         *
	         * @return {HMAC} This HMAC instance.
	         *
	         * @example
	         *
	         *     hmacHasher.update('message');
	         *     hmacHasher.update(wordArray);
	         */
                update: function(messageUpdate) {
                    this._hasher.update(messageUpdate);
                    // Chainable
                                        return this;
                },
                /**
	         * Finalizes the HMAC computation.
	         * Note that the finalize operation is effectively a destructive, read-once operation.
	         *
	         * @param {WordArray|string} messageUpdate (Optional) A final message update.
	         *
	         * @return {WordArray} The HMAC.
	         *
	         * @example
	         *
	         *     var hmac = hmacHasher.finalize();
	         *     var hmac = hmacHasher.finalize('message');
	         *     var hmac = hmacHasher.finalize(wordArray);
	         */
                finalize: function(messageUpdate) {
                    // Shortcut
                    var hasher = this._hasher;
                    // Compute HMAC
                                        var innerHash = hasher.finalize(messageUpdate);
                    hasher.reset();
                    var hmac = hasher.finalize(this._oKey.clone().concat(innerHash));
                    return hmac;
                }
            });
        })();
        (function() {
            // Shortcuts
            var C = CryptoJS;
            var C_lib = C.lib;
            var Base = C_lib.Base;
            var WordArray = C_lib.WordArray;
            var C_algo = C.algo;
            var SHA1 = C_algo.SHA1;
            var HMAC = C_algo.HMAC;
            /**
	     * Password-Based Key Derivation Function 2 algorithm.
	     */            var PBKDF2 = C_algo.PBKDF2 = Base.extend({
                /**
	         * Configuration options.
	         *
	         * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
	         * @property {Hasher} hasher The hasher to use. Default: SHA1
	         * @property {number} iterations The number of iterations to perform. Default: 1
	         */
                cfg: Base.extend({
                    keySize: 128 / 32,
                    hasher: SHA1,
                    iterations: 1
                }),
                /**
	         * Initializes a newly created key derivation function.
	         *
	         * @param {Object} cfg (Optional) The configuration options to use for the derivation.
	         *
	         * @example
	         *
	         *     var kdf = CryptoJS.algo.PBKDF2.create();
	         *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8 });
	         *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8, iterations: 1000 });
	         */
                init: function(cfg) {
                    this.cfg = this.cfg.extend(cfg);
                },
                /**
	         * Computes the Password-Based Key Derivation Function 2.
	         *
	         * @param {WordArray|string} password The password.
	         * @param {WordArray|string} salt A salt.
	         *
	         * @return {WordArray} The derived key.
	         *
	         * @example
	         *
	         *     var key = kdf.compute(password, salt);
	         */
                compute: function(password, salt) {
                    // Shortcut
                    var cfg = this.cfg;
                    // Init HMAC
                                        var hmac = HMAC.create(cfg.hasher, password);
                    // Initial values
                                        var derivedKey = WordArray.create();
                    var blockIndex = WordArray.create([ 1 ]);
                    // Shortcuts
                                        var derivedKeyWords = derivedKey.words;
                    var blockIndexWords = blockIndex.words;
                    var keySize = cfg.keySize;
                    var iterations = cfg.iterations;
                    // Generate key
                                        while (derivedKeyWords.length < keySize) {
                        var block = hmac.update(salt).finalize(blockIndex);
                        hmac.reset();
                        // Shortcuts
                                                var blockWords = block.words;
                        var blockWordsLength = blockWords.length;
                        // Iterations
                                                var intermediate = block;
                        for (var i = 1; i < iterations; i++) {
                            intermediate = hmac.finalize(intermediate);
                            hmac.reset();
                            // Shortcut
                                                        var intermediateWords = intermediate.words;
                            // XOR intermediate with block
                                                        for (var j = 0; j < blockWordsLength; j++) {
                                blockWords[j] ^= intermediateWords[j];
                            }
                        }
                        derivedKey.concat(block);
                        blockIndexWords[0]++;
                    }
                    derivedKey.sigBytes = keySize * 4;
                    return derivedKey;
                }
            });
            /**
	     * Computes the Password-Based Key Derivation Function 2.
	     *
	     * @param {WordArray|string} password The password.
	     * @param {WordArray|string} salt A salt.
	     * @param {Object} cfg (Optional) The configuration options to use for this computation.
	     *
	     * @return {WordArray} The derived key.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var key = CryptoJS.PBKDF2(password, salt);
	     *     var key = CryptoJS.PBKDF2(password, salt, { keySize: 8 });
	     *     var key = CryptoJS.PBKDF2(password, salt, { keySize: 8, iterations: 1000 });
	     */            C.PBKDF2 = function(password, salt, cfg) {
                return PBKDF2.create(cfg).compute(password, salt);
            };
        })();
        (function() {
            // Shortcuts
            var C = CryptoJS;
            var C_lib = C.lib;
            var Base = C_lib.Base;
            var WordArray = C_lib.WordArray;
            var C_algo = C.algo;
            var MD5 = C_algo.MD5;
            /**
	     * This key derivation function is meant to conform with EVP_BytesToKey.
	     * www.openssl.org/docs/crypto/EVP_BytesToKey.html
	     */            var EvpKDF = C_algo.EvpKDF = Base.extend({
                /**
	         * Configuration options.
	         *
	         * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
	         * @property {Hasher} hasher The hash algorithm to use. Default: MD5
	         * @property {number} iterations The number of iterations to perform. Default: 1
	         */
                cfg: Base.extend({
                    keySize: 128 / 32,
                    hasher: MD5,
                    iterations: 1
                }),
                /**
	         * Initializes a newly created key derivation function.
	         *
	         * @param {Object} cfg (Optional) The configuration options to use for the derivation.
	         *
	         * @example
	         *
	         *     var kdf = CryptoJS.algo.EvpKDF.create();
	         *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8 });
	         *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8, iterations: 1000 });
	         */
                init: function(cfg) {
                    this.cfg = this.cfg.extend(cfg);
                },
                /**
	         * Derives a key from a password.
	         *
	         * @param {WordArray|string} password The password.
	         * @param {WordArray|string} salt A salt.
	         *
	         * @return {WordArray} The derived key.
	         *
	         * @example
	         *
	         *     var key = kdf.compute(password, salt);
	         */
                compute: function(password, salt) {
                    // Shortcut
                    var cfg = this.cfg;
                    // Init hasher
                                        var hasher = cfg.hasher.create();
                    // Initial values
                                        var derivedKey = WordArray.create();
                    // Shortcuts
                                        var derivedKeyWords = derivedKey.words;
                    var keySize = cfg.keySize;
                    var iterations = cfg.iterations;
                    // Generate key
                                        while (derivedKeyWords.length < keySize) {
                        if (block) {
                            hasher.update(block);
                        }
                        var block = hasher.update(password).finalize(salt);
                        hasher.reset();
                        // Iterations
                                                for (var i = 1; i < iterations; i++) {
                            block = hasher.finalize(block);
                            hasher.reset();
                        }
                        derivedKey.concat(block);
                    }
                    derivedKey.sigBytes = keySize * 4;
                    return derivedKey;
                }
            });
            /**
	     * Derives a key from a password.
	     *
	     * @param {WordArray|string} password The password.
	     * @param {WordArray|string} salt A salt.
	     * @param {Object} cfg (Optional) The configuration options to use for this computation.
	     *
	     * @return {WordArray} The derived key.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var key = CryptoJS.EvpKDF(password, salt);
	     *     var key = CryptoJS.EvpKDF(password, salt, { keySize: 8 });
	     *     var key = CryptoJS.EvpKDF(password, salt, { keySize: 8, iterations: 1000 });
	     */            C.EvpKDF = function(password, salt, cfg) {
                return EvpKDF.create(cfg).compute(password, salt);
            };
        })();
        (function() {
            // Shortcuts
            var C = CryptoJS;
            var C_lib = C.lib;
            var WordArray = C_lib.WordArray;
            var C_algo = C.algo;
            var SHA256 = C_algo.SHA256;
            /**
	     * SHA-224 hash algorithm.
	     */            var SHA224 = C_algo.SHA224 = SHA256.extend({
                _doReset: function() {
                    this._hash = new WordArray.init([ 3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428 ]);
                },
                _doFinalize: function() {
                    var hash = SHA256._doFinalize.call(this);
                    hash.sigBytes -= 4;
                    return hash;
                }
            });
            /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA224('message');
	     *     var hash = CryptoJS.SHA224(wordArray);
	     */            C.SHA224 = SHA256._createHelper(SHA224);
            /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA224(message, key);
	     */            C.HmacSHA224 = SHA256._createHmacHelper(SHA224);
        })();
        (function(undefined) {
            // Shortcuts
            var C = CryptoJS;
            var C_lib = C.lib;
            var Base = C_lib.Base;
            var X32WordArray = C_lib.WordArray;
            /**
	     * x64 namespace.
	     */            var C_x64 = C.x64 = {};
            /**
	     * A 64-bit word.
	     */            var X64Word = C_x64.Word = Base.extend({
                /**
	         * Initializes a newly created 64-bit word.
	         *
	         * @param {number} high The high 32 bits.
	         * @param {number} low The low 32 bits.
	         *
	         * @example
	         *
	         *     var x64Word = CryptoJS.x64.Word.create(0x00010203, 0x04050607);
	         */
                init: function(high, low) {
                    this.high = high;
                    this.low = low;
                }
                /**
	         * Bitwise NOTs this word.
	         *
	         * @return {X64Word} A new x64-Word object after negating.
	         *
	         * @example
	         *
	         *     var negated = x64Word.not();
	         */
                // not: function () {
                // var high = ~this.high;
                // var low = ~this.low;
                // return X64Word.create(high, low);
                // },
                /**
	         * Bitwise ANDs this word with the passed word.
	         *
	         * @param {X64Word} word The x64-Word to AND with this word.
	         *
	         * @return {X64Word} A new x64-Word object after ANDing.
	         *
	         * @example
	         *
	         *     var anded = x64Word.and(anotherX64Word);
	         */
                // and: function (word) {
                // var high = this.high & word.high;
                // var low = this.low & word.low;
                // return X64Word.create(high, low);
                // },
                /**
	         * Bitwise ORs this word with the passed word.
	         *
	         * @param {X64Word} word The x64-Word to OR with this word.
	         *
	         * @return {X64Word} A new x64-Word object after ORing.
	         *
	         * @example
	         *
	         *     var ored = x64Word.or(anotherX64Word);
	         */
                // or: function (word) {
                // var high = this.high | word.high;
                // var low = this.low | word.low;
                // return X64Word.create(high, low);
                // },
                /**
	         * Bitwise XORs this word with the passed word.
	         *
	         * @param {X64Word} word The x64-Word to XOR with this word.
	         *
	         * @return {X64Word} A new x64-Word object after XORing.
	         *
	         * @example
	         *
	         *     var xored = x64Word.xor(anotherX64Word);
	         */
                // xor: function (word) {
                // var high = this.high ^ word.high;
                // var low = this.low ^ word.low;
                // return X64Word.create(high, low);
                // },
                /**
	         * Shifts this word n bits to the left.
	         *
	         * @param {number} n The number of bits to shift.
	         *
	         * @return {X64Word} A new x64-Word object after shifting.
	         *
	         * @example
	         *
	         *     var shifted = x64Word.shiftL(25);
	         */
                // shiftL: function (n) {
                // if (n < 32) {
                // var high = (this.high << n) | (this.low >>> (32 - n));
                // var low = this.low << n;
                // } else {
                // var high = this.low << (n - 32);
                // var low = 0;
                // }
                // return X64Word.create(high, low);
                // },
                /**
	         * Shifts this word n bits to the right.
	         *
	         * @param {number} n The number of bits to shift.
	         *
	         * @return {X64Word} A new x64-Word object after shifting.
	         *
	         * @example
	         *
	         *     var shifted = x64Word.shiftR(7);
	         */
                // shiftR: function (n) {
                // if (n < 32) {
                // var low = (this.low >>> n) | (this.high << (32 - n));
                // var high = this.high >>> n;
                // } else {
                // var low = this.high >>> (n - 32);
                // var high = 0;
                // }
                // return X64Word.create(high, low);
                // },
                /**
	         * Rotates this word n bits to the left.
	         *
	         * @param {number} n The number of bits to rotate.
	         *
	         * @return {X64Word} A new x64-Word object after rotating.
	         *
	         * @example
	         *
	         *     var rotated = x64Word.rotL(25);
	         */
                // rotL: function (n) {
                // return this.shiftL(n).or(this.shiftR(64 - n));
                // },
                /**
	         * Rotates this word n bits to the right.
	         *
	         * @param {number} n The number of bits to rotate.
	         *
	         * @return {X64Word} A new x64-Word object after rotating.
	         *
	         * @example
	         *
	         *     var rotated = x64Word.rotR(7);
	         */
                // rotR: function (n) {
                // return this.shiftR(n).or(this.shiftL(64 - n));
                // },
                /**
	         * Adds this word with the passed word.
	         *
	         * @param {X64Word} word The x64-Word to add with this word.
	         *
	         * @return {X64Word} A new x64-Word object after adding.
	         *
	         * @example
	         *
	         *     var added = x64Word.add(anotherX64Word);
	         */
                // add: function (word) {
                // var low = (this.low + word.low) | 0;
                // var carry = (low >>> 0) < (this.low >>> 0) ? 1 : 0;
                // var high = (this.high + word.high + carry) | 0;
                // return X64Word.create(high, low);
                // }
                        });
            /**
	     * An array of 64-bit words.
	     *
	     * @property {Array} words The array of CryptoJS.x64.Word objects.
	     * @property {number} sigBytes The number of significant bytes in this word array.
	     */            var X64WordArray = C_x64.WordArray = Base.extend({
                /**
	         * Initializes a newly created word array.
	         *
	         * @param {Array} words (Optional) An array of CryptoJS.x64.Word objects.
	         * @param {number} sigBytes (Optional) The number of significant bytes in the words.
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.x64.WordArray.create();
	         *
	         *     var wordArray = CryptoJS.x64.WordArray.create([
	         *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
	         *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
	         *     ]);
	         *
	         *     var wordArray = CryptoJS.x64.WordArray.create([
	         *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
	         *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
	         *     ], 10);
	         */
                init: function(words, sigBytes) {
                    words = this.words = words || [];
                    if (sigBytes != undefined) {
                        this.sigBytes = sigBytes;
                    } else {
                        this.sigBytes = words.length * 8;
                    }
                },
                /**
	         * Converts this 64-bit word array to a 32-bit word array.
	         *
	         * @return {CryptoJS.lib.WordArray} This word array's data as a 32-bit word array.
	         *
	         * @example
	         *
	         *     var x32WordArray = x64WordArray.toX32();
	         */
                toX32: function() {
                    // Shortcuts
                    var x64Words = this.words;
                    var x64WordsLength = x64Words.length;
                    // Convert
                                        var x32Words = [];
                    for (var i = 0; i < x64WordsLength; i++) {
                        var x64Word = x64Words[i];
                        x32Words.push(x64Word.high);
                        x32Words.push(x64Word.low);
                    }
                    return X32WordArray.create(x32Words, this.sigBytes);
                },
                /**
	         * Creates a copy of this word array.
	         *
	         * @return {X64WordArray} The clone.
	         *
	         * @example
	         *
	         *     var clone = x64WordArray.clone();
	         */
                clone: function() {
                    var clone = Base.clone.call(this);
                    // Clone "words" array
                                        var words = clone.words = this.words.slice(0);
                    // Clone each X64Word object
                                        var wordsLength = words.length;
                    for (var i = 0; i < wordsLength; i++) {
                        words[i] = words[i].clone();
                    }
                    return clone;
                }
            });
        })();
        (function(Math) {
            // Shortcuts
            var C = CryptoJS;
            var C_lib = C.lib;
            var WordArray = C_lib.WordArray;
            var Hasher = C_lib.Hasher;
            var C_x64 = C.x64;
            var X64Word = C_x64.Word;
            var C_algo = C.algo;
            // Constants tables
                        var RHO_OFFSETS = [];
            var PI_INDEXES = [];
            var ROUND_CONSTANTS = [];
            // Compute Constants
            // Compute Constants
                        // Compute Constants
            // Compute Constants
            (function() {
                // Compute rho offset constants
                var x = 1, y = 0;
                for (var t = 0; t < 24; t++) {
                    RHO_OFFSETS[x + 5 * y] = (t + 1) * (t + 2) / 2 % 64;
                    var newX = y % 5;
                    var newY = (2 * x + 3 * y) % 5;
                    x = newX;
                    y = newY;
                }
                // Compute pi index constants
                                for (var x = 0; x < 5; x++) {
                    for (var y = 0; y < 5; y++) {
                        PI_INDEXES[x + 5 * y] = y + (2 * x + 3 * y) % 5 * 5;
                    }
                }
                // Compute round constants
                                var LFSR = 1;
                for (var i = 0; i < 24; i++) {
                    var roundConstantMsw = 0;
                    var roundConstantLsw = 0;
                    for (var j = 0; j < 7; j++) {
                        if (LFSR & 1) {
                            var bitPosition = (1 << j) - 1;
                            if (bitPosition < 32) {
                                roundConstantLsw ^= 1 << bitPosition;
                            } else /* if (bitPosition >= 32) */ {
                                roundConstantMsw ^= 1 << bitPosition - 32;
                            }
                        }
                        // Compute next LFSR
                                                if (LFSR & 128) {
                            // Primitive polynomial over GF(2): x^8 + x^6 + x^5 + x^4 + 1
                            LFSR = LFSR << 1 ^ 113;
                        } else {
                            LFSR <<= 1;
                        }
                    }
                    ROUND_CONSTANTS[i] = X64Word.create(roundConstantMsw, roundConstantLsw);
                }
            })();
            // Reusable objects for temporary values
                        var T = [];
            (function() {
                for (var i = 0; i < 25; i++) {
                    T[i] = X64Word.create();
                }
            })();
            /**
	     * SHA-3 hash algorithm.
	     */            var SHA3 = C_algo.SHA3 = Hasher.extend({
                /**
	         * Configuration options.
	         *
	         * @property {number} outputLength
	         *   The desired number of bits in the output hash.
	         *   Only values permitted are: 224, 256, 384, 512.
	         *   Default: 512
	         */
                cfg: Hasher.cfg.extend({
                    outputLength: 512
                }),
                _doReset: function() {
                    var state = this._state = [];
                    for (var i = 0; i < 25; i++) {
                        state[i] = new X64Word.init();
                    }
                    this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
                },
                _doProcessBlock: function(M, offset) {
                    // Shortcuts
                    var state = this._state;
                    var nBlockSizeLanes = this.blockSize / 2;
                    // Absorb
                                        for (var i = 0; i < nBlockSizeLanes; i++) {
                        // Shortcuts
                        var M2i = M[offset + 2 * i];
                        var M2i1 = M[offset + 2 * i + 1];
                        // Swap endian
                                                M2i = (M2i << 8 | M2i >>> 24) & 16711935 | (M2i << 24 | M2i >>> 8) & 4278255360;
                        M2i1 = (M2i1 << 8 | M2i1 >>> 24) & 16711935 | (M2i1 << 24 | M2i1 >>> 8) & 4278255360;
                        // Absorb message into state
                                                var lane = state[i];
                        lane.high ^= M2i1;
                        lane.low ^= M2i;
                    }
                    // Rounds
                                        for (var round = 0; round < 24; round++) {
                        // Theta
                        for (var x = 0; x < 5; x++) {
                            // Mix column lanes
                            var tMsw = 0, tLsw = 0;
                            for (var y = 0; y < 5; y++) {
                                var lane = state[x + 5 * y];
                                tMsw ^= lane.high;
                                tLsw ^= lane.low;
                            }
                            // Temporary values
                                                        var Tx = T[x];
                            Tx.high = tMsw;
                            Tx.low = tLsw;
                        }
                        for (var x = 0; x < 5; x++) {
                            // Shortcuts
                            var Tx4 = T[(x + 4) % 5];
                            var Tx1 = T[(x + 1) % 5];
                            var Tx1Msw = Tx1.high;
                            var Tx1Lsw = Tx1.low;
                            // Mix surrounding columns
                                                        var tMsw = Tx4.high ^ (Tx1Msw << 1 | Tx1Lsw >>> 31);
                            var tLsw = Tx4.low ^ (Tx1Lsw << 1 | Tx1Msw >>> 31);
                            for (var y = 0; y < 5; y++) {
                                var lane = state[x + 5 * y];
                                lane.high ^= tMsw;
                                lane.low ^= tLsw;
                            }
                        }
                        // Rho Pi
                                                for (var laneIndex = 1; laneIndex < 25; laneIndex++) {
                            // Shortcuts
                            var lane = state[laneIndex];
                            var laneMsw = lane.high;
                            var laneLsw = lane.low;
                            var rhoOffset = RHO_OFFSETS[laneIndex];
                            // Rotate lanes
                                                        if (rhoOffset < 32) {
                                var tMsw = laneMsw << rhoOffset | laneLsw >>> 32 - rhoOffset;
                                var tLsw = laneLsw << rhoOffset | laneMsw >>> 32 - rhoOffset;
                            } else /* if (rhoOffset >= 32) */ {
                                var tMsw = laneLsw << rhoOffset - 32 | laneMsw >>> 64 - rhoOffset;
                                var tLsw = laneMsw << rhoOffset - 32 | laneLsw >>> 64 - rhoOffset;
                            }
                            // Transpose lanes
                                                        var TPiLane = T[PI_INDEXES[laneIndex]];
                            TPiLane.high = tMsw;
                            TPiLane.low = tLsw;
                        }
                        // Rho pi at x = y = 0
                                                var T0 = T[0];
                        var state0 = state[0];
                        T0.high = state0.high;
                        T0.low = state0.low;
                        // Chi
                                                for (var x = 0; x < 5; x++) {
                            for (var y = 0; y < 5; y++) {
                                // Shortcuts
                                var laneIndex = x + 5 * y;
                                var lane = state[laneIndex];
                                var TLane = T[laneIndex];
                                var Tx1Lane = T[(x + 1) % 5 + 5 * y];
                                var Tx2Lane = T[(x + 2) % 5 + 5 * y];
                                // Mix rows
                                                                lane.high = TLane.high ^ ~Tx1Lane.high & Tx2Lane.high;
                                lane.low = TLane.low ^ ~Tx1Lane.low & Tx2Lane.low;
                            }
                        }
                        // Iota
                                                var lane = state[0];
                        var roundConstant = ROUND_CONSTANTS[round];
                        lane.high ^= roundConstant.high;
                        lane.low ^= roundConstant.low;
                    }
                },
                _doFinalize: function() {
                    // Shortcuts
                    var data = this._data;
                    var dataWords = data.words;
                    var nBitsTotal = this._nDataBytes * 8;
                    var nBitsLeft = data.sigBytes * 8;
                    var blockSizeBits = this.blockSize * 32;
                    // Add padding
                                        dataWords[nBitsLeft >>> 5] |= 1 << 24 - nBitsLeft % 32;
                    dataWords[(Math.ceil((nBitsLeft + 1) / blockSizeBits) * blockSizeBits >>> 5) - 1] |= 128;
                    data.sigBytes = dataWords.length * 4;
                    // Hash final blocks
                                        this._process();
                    // Shortcuts
                                        var state = this._state;
                    var outputLengthBytes = this.cfg.outputLength / 8;
                    var outputLengthLanes = outputLengthBytes / 8;
                    // Squeeze
                                        var hashWords = [];
                    for (var i = 0; i < outputLengthLanes; i++) {
                        // Shortcuts
                        var lane = state[i];
                        var laneMsw = lane.high;
                        var laneLsw = lane.low;
                        // Swap endian
                                                laneMsw = (laneMsw << 8 | laneMsw >>> 24) & 16711935 | (laneMsw << 24 | laneMsw >>> 8) & 4278255360;
                        laneLsw = (laneLsw << 8 | laneLsw >>> 24) & 16711935 | (laneLsw << 24 | laneLsw >>> 8) & 4278255360;
                        // Squeeze state to retrieve hash
                                                hashWords.push(laneLsw);
                        hashWords.push(laneMsw);
                    }
                    // Return final computed hash
                                        return new WordArray.init(hashWords, outputLengthBytes);
                },
                clone: function() {
                    var clone = Hasher.clone.call(this);
                    var state = clone._state = this._state.slice(0);
                    for (var i = 0; i < 25; i++) {
                        state[i] = state[i].clone();
                    }
                    return clone;
                }
            });
            /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA3('message');
	     *     var hash = CryptoJS.SHA3(wordArray);
	     */            C.SHA3 = Hasher._createHelper(SHA3);
            /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA3(message, key);
	     */            C.HmacSHA3 = Hasher._createHmacHelper(SHA3);
        })(Math);
        (function() {
            // Shortcuts
            var C = CryptoJS;
            var C_lib = C.lib;
            var Hasher = C_lib.Hasher;
            var C_x64 = C.x64;
            var X64Word = C_x64.Word;
            var X64WordArray = C_x64.WordArray;
            var C_algo = C.algo;
            function X64Word_create() {
                return X64Word.create.apply(X64Word, arguments);
            }
            // Constants
                        var K = [ X64Word_create(1116352408, 3609767458), X64Word_create(1899447441, 602891725), X64Word_create(3049323471, 3964484399), X64Word_create(3921009573, 2173295548), X64Word_create(961987163, 4081628472), X64Word_create(1508970993, 3053834265), X64Word_create(2453635748, 2937671579), X64Word_create(2870763221, 3664609560), X64Word_create(3624381080, 2734883394), X64Word_create(310598401, 1164996542), X64Word_create(607225278, 1323610764), X64Word_create(1426881987, 3590304994), X64Word_create(1925078388, 4068182383), X64Word_create(2162078206, 991336113), X64Word_create(2614888103, 633803317), X64Word_create(3248222580, 3479774868), X64Word_create(3835390401, 2666613458), X64Word_create(4022224774, 944711139), X64Word_create(264347078, 2341262773), X64Word_create(604807628, 2007800933), X64Word_create(770255983, 1495990901), X64Word_create(1249150122, 1856431235), X64Word_create(1555081692, 3175218132), X64Word_create(1996064986, 2198950837), X64Word_create(2554220882, 3999719339), X64Word_create(2821834349, 766784016), X64Word_create(2952996808, 2566594879), X64Word_create(3210313671, 3203337956), X64Word_create(3336571891, 1034457026), X64Word_create(3584528711, 2466948901), X64Word_create(113926993, 3758326383), X64Word_create(338241895, 168717936), X64Word_create(666307205, 1188179964), X64Word_create(773529912, 1546045734), X64Word_create(1294757372, 1522805485), X64Word_create(1396182291, 2643833823), X64Word_create(1695183700, 2343527390), X64Word_create(1986661051, 1014477480), X64Word_create(2177026350, 1206759142), X64Word_create(2456956037, 344077627), X64Word_create(2730485921, 1290863460), X64Word_create(2820302411, 3158454273), X64Word_create(3259730800, 3505952657), X64Word_create(3345764771, 106217008), X64Word_create(3516065817, 3606008344), X64Word_create(3600352804, 1432725776), X64Word_create(4094571909, 1467031594), X64Word_create(275423344, 851169720), X64Word_create(430227734, 3100823752), X64Word_create(506948616, 1363258195), X64Word_create(659060556, 3750685593), X64Word_create(883997877, 3785050280), X64Word_create(958139571, 3318307427), X64Word_create(1322822218, 3812723403), X64Word_create(1537002063, 2003034995), X64Word_create(1747873779, 3602036899), X64Word_create(1955562222, 1575990012), X64Word_create(2024104815, 1125592928), X64Word_create(2227730452, 2716904306), X64Word_create(2361852424, 442776044), X64Word_create(2428436474, 593698344), X64Word_create(2756734187, 3733110249), X64Word_create(3204031479, 2999351573), X64Word_create(3329325298, 3815920427), X64Word_create(3391569614, 3928383900), X64Word_create(3515267271, 566280711), X64Word_create(3940187606, 3454069534), X64Word_create(4118630271, 4000239992), X64Word_create(116418474, 1914138554), X64Word_create(174292421, 2731055270), X64Word_create(289380356, 3203993006), X64Word_create(460393269, 320620315), X64Word_create(685471733, 587496836), X64Word_create(852142971, 1086792851), X64Word_create(1017036298, 365543100), X64Word_create(1126000580, 2618297676), X64Word_create(1288033470, 3409855158), X64Word_create(1501505948, 4234509866), X64Word_create(1607167915, 987167468), X64Word_create(1816402316, 1246189591) ];
            // Reusable objects
                        var W = [];
            (function() {
                for (var i = 0; i < 80; i++) {
                    W[i] = X64Word_create();
                }
            })();
            /**
	     * SHA-512 hash algorithm.
	     */            var SHA512 = C_algo.SHA512 = Hasher.extend({
                _doReset: function() {
                    this._hash = new X64WordArray.init([ new X64Word.init(1779033703, 4089235720), new X64Word.init(3144134277, 2227873595), new X64Word.init(1013904242, 4271175723), new X64Word.init(2773480762, 1595750129), new X64Word.init(1359893119, 2917565137), new X64Word.init(2600822924, 725511199), new X64Word.init(528734635, 4215389547), new X64Word.init(1541459225, 327033209) ]);
                },
                _doProcessBlock: function(M, offset) {
                    // Shortcuts
                    var H = this._hash.words;
                    var H0 = H[0];
                    var H1 = H[1];
                    var H2 = H[2];
                    var H3 = H[3];
                    var H4 = H[4];
                    var H5 = H[5];
                    var H6 = H[6];
                    var H7 = H[7];
                    var H0h = H0.high;
                    var H0l = H0.low;
                    var H1h = H1.high;
                    var H1l = H1.low;
                    var H2h = H2.high;
                    var H2l = H2.low;
                    var H3h = H3.high;
                    var H3l = H3.low;
                    var H4h = H4.high;
                    var H4l = H4.low;
                    var H5h = H5.high;
                    var H5l = H5.low;
                    var H6h = H6.high;
                    var H6l = H6.low;
                    var H7h = H7.high;
                    var H7l = H7.low;
                    // Working variables
                                        var ah = H0h;
                    var al = H0l;
                    var bh = H1h;
                    var bl = H1l;
                    var ch = H2h;
                    var cl = H2l;
                    var dh = H3h;
                    var dl = H3l;
                    var eh = H4h;
                    var el = H4l;
                    var fh = H5h;
                    var fl = H5l;
                    var gh = H6h;
                    var gl = H6l;
                    var hh = H7h;
                    var hl = H7l;
                    // Rounds
                                        for (var i = 0; i < 80; i++) {
                        // Shortcut
                        var Wi = W[i];
                        // Extend message
                                                if (i < 16) {
                            var Wih = Wi.high = M[offset + i * 2] | 0;
                            var Wil = Wi.low = M[offset + i * 2 + 1] | 0;
                        } else {
                            // Gamma0
                            var gamma0x = W[i - 15];
                            var gamma0xh = gamma0x.high;
                            var gamma0xl = gamma0x.low;
                            var gamma0h = (gamma0xh >>> 1 | gamma0xl << 31) ^ (gamma0xh >>> 8 | gamma0xl << 24) ^ gamma0xh >>> 7;
                            var gamma0l = (gamma0xl >>> 1 | gamma0xh << 31) ^ (gamma0xl >>> 8 | gamma0xh << 24) ^ (gamma0xl >>> 7 | gamma0xh << 25);
                            // Gamma1
                                                        var gamma1x = W[i - 2];
                            var gamma1xh = gamma1x.high;
                            var gamma1xl = gamma1x.low;
                            var gamma1h = (gamma1xh >>> 19 | gamma1xl << 13) ^ (gamma1xh << 3 | gamma1xl >>> 29) ^ gamma1xh >>> 6;
                            var gamma1l = (gamma1xl >>> 19 | gamma1xh << 13) ^ (gamma1xl << 3 | gamma1xh >>> 29) ^ (gamma1xl >>> 6 | gamma1xh << 26);
                            // W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16]
                                                        var Wi7 = W[i - 7];
                            var Wi7h = Wi7.high;
                            var Wi7l = Wi7.low;
                            var Wi16 = W[i - 16];
                            var Wi16h = Wi16.high;
                            var Wi16l = Wi16.low;
                            var Wil = gamma0l + Wi7l;
                            var Wih = gamma0h + Wi7h + (Wil >>> 0 < gamma0l >>> 0 ? 1 : 0);
                            var Wil = Wil + gamma1l;
                            var Wih = Wih + gamma1h + (Wil >>> 0 < gamma1l >>> 0 ? 1 : 0);
                            var Wil = Wil + Wi16l;
                            var Wih = Wih + Wi16h + (Wil >>> 0 < Wi16l >>> 0 ? 1 : 0);
                            Wi.high = Wih;
                            Wi.low = Wil;
                        }
                        var chh = eh & fh ^ ~eh & gh;
                        var chl = el & fl ^ ~el & gl;
                        var majh = ah & bh ^ ah & ch ^ bh & ch;
                        var majl = al & bl ^ al & cl ^ bl & cl;
                        var sigma0h = (ah >>> 28 | al << 4) ^ (ah << 30 | al >>> 2) ^ (ah << 25 | al >>> 7);
                        var sigma0l = (al >>> 28 | ah << 4) ^ (al << 30 | ah >>> 2) ^ (al << 25 | ah >>> 7);
                        var sigma1h = (eh >>> 14 | el << 18) ^ (eh >>> 18 | el << 14) ^ (eh << 23 | el >>> 9);
                        var sigma1l = (el >>> 14 | eh << 18) ^ (el >>> 18 | eh << 14) ^ (el << 23 | eh >>> 9);
                        // t1 = h + sigma1 + ch + K[i] + W[i]
                                                var Ki = K[i];
                        var Kih = Ki.high;
                        var Kil = Ki.low;
                        var t1l = hl + sigma1l;
                        var t1h = hh + sigma1h + (t1l >>> 0 < hl >>> 0 ? 1 : 0);
                        var t1l = t1l + chl;
                        var t1h = t1h + chh + (t1l >>> 0 < chl >>> 0 ? 1 : 0);
                        var t1l = t1l + Kil;
                        var t1h = t1h + Kih + (t1l >>> 0 < Kil >>> 0 ? 1 : 0);
                        var t1l = t1l + Wil;
                        var t1h = t1h + Wih + (t1l >>> 0 < Wil >>> 0 ? 1 : 0);
                        // t2 = sigma0 + maj
                                                var t2l = sigma0l + majl;
                        var t2h = sigma0h + majh + (t2l >>> 0 < sigma0l >>> 0 ? 1 : 0);
                        // Update working variables
                                                hh = gh;
                        hl = gl;
                        gh = fh;
                        gl = fl;
                        fh = eh;
                        fl = el;
                        el = dl + t1l | 0;
                        eh = dh + t1h + (el >>> 0 < dl >>> 0 ? 1 : 0) | 0;
                        dh = ch;
                        dl = cl;
                        ch = bh;
                        cl = bl;
                        bh = ah;
                        bl = al;
                        al = t1l + t2l | 0;
                        ah = t1h + t2h + (al >>> 0 < t1l >>> 0 ? 1 : 0) | 0;
                    }
                    // Intermediate hash value
                                        H0l = H0.low = H0l + al;
                    H0.high = H0h + ah + (H0l >>> 0 < al >>> 0 ? 1 : 0);
                    H1l = H1.low = H1l + bl;
                    H1.high = H1h + bh + (H1l >>> 0 < bl >>> 0 ? 1 : 0);
                    H2l = H2.low = H2l + cl;
                    H2.high = H2h + ch + (H2l >>> 0 < cl >>> 0 ? 1 : 0);
                    H3l = H3.low = H3l + dl;
                    H3.high = H3h + dh + (H3l >>> 0 < dl >>> 0 ? 1 : 0);
                    H4l = H4.low = H4l + el;
                    H4.high = H4h + eh + (H4l >>> 0 < el >>> 0 ? 1 : 0);
                    H5l = H5.low = H5l + fl;
                    H5.high = H5h + fh + (H5l >>> 0 < fl >>> 0 ? 1 : 0);
                    H6l = H6.low = H6l + gl;
                    H6.high = H6h + gh + (H6l >>> 0 < gl >>> 0 ? 1 : 0);
                    H7l = H7.low = H7l + hl;
                    H7.high = H7h + hh + (H7l >>> 0 < hl >>> 0 ? 1 : 0);
                },
                _doFinalize: function() {
                    // Shortcuts
                    var data = this._data;
                    var dataWords = data.words;
                    var nBitsTotal = this._nDataBytes * 8;
                    var nBitsLeft = data.sigBytes * 8;
                    // Add padding
                                        dataWords[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
                    dataWords[(nBitsLeft + 128 >>> 10 << 5) + 30] = Math.floor(nBitsTotal / 4294967296);
                    dataWords[(nBitsLeft + 128 >>> 10 << 5) + 31] = nBitsTotal;
                    data.sigBytes = dataWords.length * 4;
                    // Hash final blocks
                                        this._process();
                    // Convert hash to 32-bit word array before returning
                                        var hash = this._hash.toX32();
                    // Return final computed hash
                                        return hash;
                },
                clone: function() {
                    var clone = Hasher.clone.call(this);
                    clone._hash = this._hash.clone();
                    return clone;
                },
                blockSize: 1024 / 32
            });
            /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA512('message');
	     *     var hash = CryptoJS.SHA512(wordArray);
	     */            C.SHA512 = Hasher._createHelper(SHA512);
            /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA512(message, key);
	     */            C.HmacSHA512 = Hasher._createHmacHelper(SHA512);
        })();
        (function() {
            // Shortcuts
            var C = CryptoJS;
            var C_x64 = C.x64;
            var X64Word = C_x64.Word;
            var X64WordArray = C_x64.WordArray;
            var C_algo = C.algo;
            var SHA512 = C_algo.SHA512;
            /**
	     * SHA-384 hash algorithm.
	     */            var SHA384 = C_algo.SHA384 = SHA512.extend({
                _doReset: function() {
                    this._hash = new X64WordArray.init([ new X64Word.init(3418070365, 3238371032), new X64Word.init(1654270250, 914150663), new X64Word.init(2438529370, 812702999), new X64Word.init(355462360, 4144912697), new X64Word.init(1731405415, 4290775857), new X64Word.init(2394180231, 1750603025), new X64Word.init(3675008525, 1694076839), new X64Word.init(1203062813, 3204075428) ]);
                },
                _doFinalize: function() {
                    var hash = SHA512._doFinalize.call(this);
                    hash.sigBytes -= 16;
                    return hash;
                }
            });
            /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA384('message');
	     *     var hash = CryptoJS.SHA384(wordArray);
	     */            C.SHA384 = SHA512._createHelper(SHA384);
            /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA384(message, key);
	     */            C.HmacSHA384 = SHA512._createHmacHelper(SHA384);
        })();
        /**
	 * Cipher core components.
	 */        CryptoJS.lib.Cipher || function(undefined) {
            // Shortcuts
            var C = CryptoJS;
            var C_lib = C.lib;
            var Base = C_lib.Base;
            var WordArray = C_lib.WordArray;
            var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm;
            var C_enc = C.enc;
            var Utf8 = C_enc.Utf8;
            var Base64 = C_enc.Base64;
            var C_algo = C.algo;
            var EvpKDF = C_algo.EvpKDF;
            /**
	     * Abstract base cipher template.
	     *
	     * @property {number} keySize This cipher's key size. Default: 4 (128 bits)
	     * @property {number} ivSize This cipher's IV size. Default: 4 (128 bits)
	     * @property {number} _ENC_XFORM_MODE A constant representing encryption mode.
	     * @property {number} _DEC_XFORM_MODE A constant representing decryption mode.
	     */            var Cipher = C_lib.Cipher = BufferedBlockAlgorithm.extend({
                /**
	         * Configuration options.
	         *
	         * @property {WordArray} iv The IV to use for this operation.
	         */
                cfg: Base.extend(),
                /**
	         * Creates this cipher in encryption mode.
	         *
	         * @param {WordArray} key The key.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {Cipher} A cipher instance.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var cipher = CryptoJS.algo.AES.createEncryptor(keyWordArray, { iv: ivWordArray });
	         */
                createEncryptor: function(key, cfg) {
                    return this.create(this._ENC_XFORM_MODE, key, cfg);
                },
                /**
	         * Creates this cipher in decryption mode.
	         *
	         * @param {WordArray} key The key.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {Cipher} A cipher instance.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var cipher = CryptoJS.algo.AES.createDecryptor(keyWordArray, { iv: ivWordArray });
	         */
                createDecryptor: function(key, cfg) {
                    return this.create(this._DEC_XFORM_MODE, key, cfg);
                },
                /**
	         * Initializes a newly created cipher.
	         *
	         * @param {number} xformMode Either the encryption or decryption transormation mode constant.
	         * @param {WordArray} key The key.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @example
	         *
	         *     var cipher = CryptoJS.algo.AES.create(CryptoJS.algo.AES._ENC_XFORM_MODE, keyWordArray, { iv: ivWordArray });
	         */
                init: function(xformMode, key, cfg) {
                    // Apply config defaults
                    this.cfg = this.cfg.extend(cfg);
                    // Store transform mode and key
                                        this._xformMode = xformMode;
                    this._key = key;
                    // Set initial values
                                        this.reset();
                },
                /**
	         * Resets this cipher to its initial state.
	         *
	         * @example
	         *
	         *     cipher.reset();
	         */
                reset: function() {
                    // Reset data buffer
                    BufferedBlockAlgorithm.reset.call(this);
                    // Perform concrete-cipher logic
                                        this._doReset();
                },
                /**
	         * Adds data to be encrypted or decrypted.
	         *
	         * @param {WordArray|string} dataUpdate The data to encrypt or decrypt.
	         *
	         * @return {WordArray} The data after processing.
	         *
	         * @example
	         *
	         *     var encrypted = cipher.process('data');
	         *     var encrypted = cipher.process(wordArray);
	         */
                process: function(dataUpdate) {
                    // Append
                    this._append(dataUpdate);
                    // Process available blocks
                                        return this._process();
                },
                /**
	         * Finalizes the encryption or decryption process.
	         * Note that the finalize operation is effectively a destructive, read-once operation.
	         *
	         * @param {WordArray|string} dataUpdate The final data to encrypt or decrypt.
	         *
	         * @return {WordArray} The data after final processing.
	         *
	         * @example
	         *
	         *     var encrypted = cipher.finalize();
	         *     var encrypted = cipher.finalize('data');
	         *     var encrypted = cipher.finalize(wordArray);
	         */
                finalize: function(dataUpdate) {
                    // Final data update
                    if (dataUpdate) {
                        this._append(dataUpdate);
                    }
                    // Perform concrete-cipher logic
                                        var finalProcessedData = this._doFinalize();
                    return finalProcessedData;
                },
                keySize: 128 / 32,
                ivSize: 128 / 32,
                _ENC_XFORM_MODE: 1,
                _DEC_XFORM_MODE: 2,
                /**
	         * Creates shortcut functions to a cipher's object interface.
	         *
	         * @param {Cipher} cipher The cipher to create a helper for.
	         *
	         * @return {Object} An object with encrypt and decrypt shortcut functions.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var AES = CryptoJS.lib.Cipher._createHelper(CryptoJS.algo.AES);
	         */
                _createHelper: function() {
                    function selectCipherStrategy(key) {
                        if (typeof key == "string") {
                            return PasswordBasedCipher;
                        } else {
                            return SerializableCipher;
                        }
                    }
                    return function(cipher) {
                        return {
                            encrypt: function(message, key, cfg) {
                                return selectCipherStrategy(key).encrypt(cipher, message, key, cfg);
                            },
                            decrypt: function(ciphertext, key, cfg) {
                                return selectCipherStrategy(key).decrypt(cipher, ciphertext, key, cfg);
                            }
                        };
                    };
                }()
            });
            /**
	     * Abstract base stream cipher template.
	     *
	     * @property {number} blockSize The number of 32-bit words this cipher operates on. Default: 1 (32 bits)
	     */            var StreamCipher = C_lib.StreamCipher = Cipher.extend({
                _doFinalize: function() {
                    // Process partial blocks
                    var finalProcessedBlocks = this._process(!!"flush");
                    return finalProcessedBlocks;
                },
                blockSize: 1
            });
            /**
	     * Mode namespace.
	     */            var C_mode = C.mode = {};
            /**
	     * Abstract base block cipher mode template.
	     */            var BlockCipherMode = C_lib.BlockCipherMode = Base.extend({
                /**
	         * Creates this mode for encryption.
	         *
	         * @param {Cipher} cipher A block cipher instance.
	         * @param {Array} iv The IV words.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var mode = CryptoJS.mode.CBC.createEncryptor(cipher, iv.words);
	         */
                createEncryptor: function(cipher, iv) {
                    return this.Encryptor.create(cipher, iv);
                },
                /**
	         * Creates this mode for decryption.
	         *
	         * @param {Cipher} cipher A block cipher instance.
	         * @param {Array} iv The IV words.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var mode = CryptoJS.mode.CBC.createDecryptor(cipher, iv.words);
	         */
                createDecryptor: function(cipher, iv) {
                    return this.Decryptor.create(cipher, iv);
                },
                /**
	         * Initializes a newly created mode.
	         *
	         * @param {Cipher} cipher A block cipher instance.
	         * @param {Array} iv The IV words.
	         *
	         * @example
	         *
	         *     var mode = CryptoJS.mode.CBC.Encryptor.create(cipher, iv.words);
	         */
                init: function(cipher, iv) {
                    this._cipher = cipher;
                    this._iv = iv;
                }
            });
            /**
	     * Cipher Block Chaining mode.
	     */            var CBC = C_mode.CBC = function() {
                /**
	         * Abstract base CBC mode.
	         */
                var CBC = BlockCipherMode.extend();
                /**
	         * CBC encryptor.
	         */                CBC.Encryptor = CBC.extend({
                    /**
	             * Processes the data block at offset.
	             *
	             * @param {Array} words The data words to operate on.
	             * @param {number} offset The offset where the block starts.
	             *
	             * @example
	             *
	             *     mode.processBlock(data.words, offset);
	             */
                    processBlock: function(words, offset) {
                        // Shortcuts
                        var cipher = this._cipher;
                        var blockSize = cipher.blockSize;
                        // XOR and encrypt
                                                xorBlock.call(this, words, offset, blockSize);
                        cipher.encryptBlock(words, offset);
                        // Remember this block to use with next block
                                                this._prevBlock = words.slice(offset, offset + blockSize);
                    }
                });
                /**
	         * CBC decryptor.
	         */                CBC.Decryptor = CBC.extend({
                    /**
	             * Processes the data block at offset.
	             *
	             * @param {Array} words The data words to operate on.
	             * @param {number} offset The offset where the block starts.
	             *
	             * @example
	             *
	             *     mode.processBlock(data.words, offset);
	             */
                    processBlock: function(words, offset) {
                        // Shortcuts
                        var cipher = this._cipher;
                        var blockSize = cipher.blockSize;
                        // Remember this block to use with next block
                                                var thisBlock = words.slice(offset, offset + blockSize);
                        // Decrypt and XOR
                                                cipher.decryptBlock(words, offset);
                        xorBlock.call(this, words, offset, blockSize);
                        // This block becomes the previous block
                                                this._prevBlock = thisBlock;
                    }
                });
                function xorBlock(words, offset, blockSize) {
                    // Shortcut
                    var iv = this._iv;
                    // Choose mixing block
                                        if (iv) {
                        var block = iv;
                        // Remove IV for subsequent blocks
                                                this._iv = undefined;
                    } else {
                        var block = this._prevBlock;
                    }
                    // XOR blocks
                                        for (var i = 0; i < blockSize; i++) {
                        words[offset + i] ^= block[i];
                    }
                }
                return CBC;
            }();
            /**
	     * Padding namespace.
	     */            var C_pad = C.pad = {};
            /**
	     * PKCS #5/7 padding strategy.
	     */            var Pkcs7 = C_pad.Pkcs7 = {
                /**
	         * Pads data using the algorithm defined in PKCS #5/7.
	         *
	         * @param {WordArray} data The data to pad.
	         * @param {number} blockSize The multiple that the data should be padded to.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     CryptoJS.pad.Pkcs7.pad(wordArray, 4);
	         */
                pad: function(data, blockSize) {
                    // Shortcut
                    var blockSizeBytes = blockSize * 4;
                    // Count padding bytes
                                        var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;
                    // Create padding word
                                        var paddingWord = nPaddingBytes << 24 | nPaddingBytes << 16 | nPaddingBytes << 8 | nPaddingBytes;
                    // Create padding
                                        var paddingWords = [];
                    for (var i = 0; i < nPaddingBytes; i += 4) {
                        paddingWords.push(paddingWord);
                    }
                    var padding = WordArray.create(paddingWords, nPaddingBytes);
                    // Add padding
                                        data.concat(padding);
                },
                /**
	         * Unpads data that had been padded using the algorithm defined in PKCS #5/7.
	         *
	         * @param {WordArray} data The data to unpad.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     CryptoJS.pad.Pkcs7.unpad(wordArray);
	         */
                unpad: function(data) {
                    // Get number of padding bytes from last byte
                    var nPaddingBytes = data.words[data.sigBytes - 1 >>> 2] & 255;
                    // Remove padding
                                        data.sigBytes -= nPaddingBytes;
                }
            };
            /**
	     * Abstract base block cipher template.
	     *
	     * @property {number} blockSize The number of 32-bit words this cipher operates on. Default: 4 (128 bits)
	     */            var BlockCipher = C_lib.BlockCipher = Cipher.extend({
                /**
	         * Configuration options.
	         *
	         * @property {Mode} mode The block mode to use. Default: CBC
	         * @property {Padding} padding The padding strategy to use. Default: Pkcs7
	         */
                cfg: Cipher.cfg.extend({
                    mode: CBC,
                    padding: Pkcs7
                }),
                reset: function() {
                    // Reset cipher
                    Cipher.reset.call(this);
                    // Shortcuts
                                        var cfg = this.cfg;
                    var iv = cfg.iv;
                    var mode = cfg.mode;
                    // Reset block mode
                                        if (this._xformMode == this._ENC_XFORM_MODE) {
                        var modeCreator = mode.createEncryptor;
                    } else /* if (this._xformMode == this._DEC_XFORM_MODE) */ {
                        var modeCreator = mode.createDecryptor;
                        // Keep at least one block in the buffer for unpadding
                                                this._minBufferSize = 1;
                    }
                    if (this._mode && this._mode.__creator == modeCreator) {
                        this._mode.init(this, iv && iv.words);
                    } else {
                        this._mode = modeCreator.call(mode, this, iv && iv.words);
                        this._mode.__creator = modeCreator;
                    }
                },
                _doProcessBlock: function(words, offset) {
                    this._mode.processBlock(words, offset);
                },
                _doFinalize: function() {
                    // Shortcut
                    var padding = this.cfg.padding;
                    // Finalize
                                        if (this._xformMode == this._ENC_XFORM_MODE) {
                        // Pad data
                        padding.pad(this._data, this.blockSize);
                        // Process final blocks
                                                var finalProcessedBlocks = this._process(!!"flush");
                    } else /* if (this._xformMode == this._DEC_XFORM_MODE) */ {
                        // Process final blocks
                        var finalProcessedBlocks = this._process(!!"flush");
                        // Unpad data
                                                padding.unpad(finalProcessedBlocks);
                    }
                    return finalProcessedBlocks;
                },
                blockSize: 128 / 32
            });
            /**
	     * A collection of cipher parameters.
	     *
	     * @property {WordArray} ciphertext The raw ciphertext.
	     * @property {WordArray} key The key to this ciphertext.
	     * @property {WordArray} iv The IV used in the ciphering operation.
	     * @property {WordArray} salt The salt used with a key derivation function.
	     * @property {Cipher} algorithm The cipher algorithm.
	     * @property {Mode} mode The block mode used in the ciphering operation.
	     * @property {Padding} padding The padding scheme used in the ciphering operation.
	     * @property {number} blockSize The block size of the cipher.
	     * @property {Format} formatter The default formatting strategy to convert this cipher params object to a string.
	     */            var CipherParams = C_lib.CipherParams = Base.extend({
                /**
	         * Initializes a newly created cipher params object.
	         *
	         * @param {Object} cipherParams An object with any of the possible cipher parameters.
	         *
	         * @example
	         *
	         *     var cipherParams = CryptoJS.lib.CipherParams.create({
	         *         ciphertext: ciphertextWordArray,
	         *         key: keyWordArray,
	         *         iv: ivWordArray,
	         *         salt: saltWordArray,
	         *         algorithm: CryptoJS.algo.AES,
	         *         mode: CryptoJS.mode.CBC,
	         *         padding: CryptoJS.pad.PKCS7,
	         *         blockSize: 4,
	         *         formatter: CryptoJS.format.OpenSSL
	         *     });
	         */
                init: function(cipherParams) {
                    this.mixIn(cipherParams);
                },
                /**
	         * Converts this cipher params object to a string.
	         *
	         * @param {Format} formatter (Optional) The formatting strategy to use.
	         *
	         * @return {string} The stringified cipher params.
	         *
	         * @throws Error If neither the formatter nor the default formatter is set.
	         *
	         * @example
	         *
	         *     var string = cipherParams + '';
	         *     var string = cipherParams.toString();
	         *     var string = cipherParams.toString(CryptoJS.format.OpenSSL);
	         */
                toString: function(formatter) {
                    return (formatter || this.formatter).stringify(this);
                }
            });
            /**
	     * Format namespace.
	     */            var C_format = C.format = {};
            /**
	     * OpenSSL formatting strategy.
	     */            var OpenSSLFormatter = C_format.OpenSSL = {
                /**
	         * Converts a cipher params object to an OpenSSL-compatible string.
	         *
	         * @param {CipherParams} cipherParams The cipher params object.
	         *
	         * @return {string} The OpenSSL-compatible string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var openSSLString = CryptoJS.format.OpenSSL.stringify(cipherParams);
	         */
                stringify: function(cipherParams) {
                    // Shortcuts
                    var ciphertext = cipherParams.ciphertext;
                    var salt = cipherParams.salt;
                    // Format
                                        if (salt) {
                        var wordArray = WordArray.create([ 1398893684, 1701076831 ]).concat(salt).concat(ciphertext);
                    } else {
                        var wordArray = ciphertext;
                    }
                    return wordArray.toString(Base64);
                },
                /**
	         * Converts an OpenSSL-compatible string to a cipher params object.
	         *
	         * @param {string} openSSLStr The OpenSSL-compatible string.
	         *
	         * @return {CipherParams} The cipher params object.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var cipherParams = CryptoJS.format.OpenSSL.parse(openSSLString);
	         */
                parse: function(openSSLStr) {
                    // Parse base64
                    var ciphertext = Base64.parse(openSSLStr);
                    // Shortcut
                                        var ciphertextWords = ciphertext.words;
                    // Test for salt
                                        if (ciphertextWords[0] == 1398893684 && ciphertextWords[1] == 1701076831) {
                        // Extract salt
                        var salt = WordArray.create(ciphertextWords.slice(2, 4));
                        // Remove salt from ciphertext
                                                ciphertextWords.splice(0, 4);
                        ciphertext.sigBytes -= 16;
                    }
                    return CipherParams.create({
                        ciphertext: ciphertext,
                        salt: salt
                    });
                }
            };
            /**
	     * A cipher wrapper that returns ciphertext as a serializable cipher params object.
	     */            var SerializableCipher = C_lib.SerializableCipher = Base.extend({
                /**
	         * Configuration options.
	         *
	         * @property {Formatter} format The formatting strategy to convert cipher param objects to and from a string. Default: OpenSSL
	         */
                cfg: Base.extend({
                    format: OpenSSLFormatter
                }),
                /**
	         * Encrypts a message.
	         *
	         * @param {Cipher} cipher The cipher algorithm to use.
	         * @param {WordArray|string} message The message to encrypt.
	         * @param {WordArray} key The key.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {CipherParams} A cipher params object.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key);
	         *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv });
	         *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv, format: CryptoJS.format.OpenSSL });
	         */
                encrypt: function(cipher, message, key, cfg) {
                    // Apply config defaults
                    cfg = this.cfg.extend(cfg);
                    // Encrypt
                                        var encryptor = cipher.createEncryptor(key, cfg);
                    var ciphertext = encryptor.finalize(message);
                    // Shortcut
                                        var cipherCfg = encryptor.cfg;
                    // Create and return serializable cipher params
                                        return CipherParams.create({
                        ciphertext: ciphertext,
                        key: key,
                        iv: cipherCfg.iv,
                        algorithm: cipher,
                        mode: cipherCfg.mode,
                        padding: cipherCfg.padding,
                        blockSize: cipher.blockSize,
                        formatter: cfg.format
                    });
                },
                /**
	         * Decrypts serialized ciphertext.
	         *
	         * @param {Cipher} cipher The cipher algorithm to use.
	         * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
	         * @param {WordArray} key The key.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {WordArray} The plaintext.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, key, { iv: iv, format: CryptoJS.format.OpenSSL });
	         *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, key, { iv: iv, format: CryptoJS.format.OpenSSL });
	         */
                decrypt: function(cipher, ciphertext, key, cfg) {
                    // Apply config defaults
                    cfg = this.cfg.extend(cfg);
                    // Convert string to CipherParams
                                        ciphertext = this._parse(ciphertext, cfg.format);
                    // Decrypt
                                        var plaintext = cipher.createDecryptor(key, cfg).finalize(ciphertext.ciphertext);
                    return plaintext;
                },
                /**
	         * Converts serialized ciphertext to CipherParams,
	         * else assumed CipherParams already and returns ciphertext unchanged.
	         *
	         * @param {CipherParams|string} ciphertext The ciphertext.
	         * @param {Formatter} format The formatting strategy to use to parse serialized ciphertext.
	         *
	         * @return {CipherParams} The unserialized ciphertext.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var ciphertextParams = CryptoJS.lib.SerializableCipher._parse(ciphertextStringOrParams, format);
	         */
                _parse: function(ciphertext, format) {
                    if (typeof ciphertext == "string") {
                        return format.parse(ciphertext, this);
                    } else {
                        return ciphertext;
                    }
                }
            });
            /**
	     * Key derivation function namespace.
	     */            var C_kdf = C.kdf = {};
            /**
	     * OpenSSL key derivation function.
	     */            var OpenSSLKdf = C_kdf.OpenSSL = {
                /**
	         * Derives a key and IV from a password.
	         *
	         * @param {string} password The password to derive from.
	         * @param {number} keySize The size in words of the key to generate.
	         * @param {number} ivSize The size in words of the IV to generate.
	         * @param {WordArray|string} salt (Optional) A 64-bit salt to use. If omitted, a salt will be generated randomly.
	         *
	         * @return {CipherParams} A cipher params object with the key, IV, and salt.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32);
	         *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32, 'saltsalt');
	         */
                execute: function(password, keySize, ivSize, salt) {
                    // Generate random salt
                    if (!salt) {
                        salt = WordArray.random(64 / 8);
                    }
                    // Derive key and IV
                                        var key = EvpKDF.create({
                        keySize: keySize + ivSize
                    }).compute(password, salt);
                    // Separate key and IV
                                        var iv = WordArray.create(key.words.slice(keySize), ivSize * 4);
                    key.sigBytes = keySize * 4;
                    // Return params
                                        return CipherParams.create({
                        key: key,
                        iv: iv,
                        salt: salt
                    });
                }
            };
            /**
	     * A serializable cipher wrapper that derives the key from a password,
	     * and returns ciphertext as a serializable cipher params object.
	     */            var PasswordBasedCipher = C_lib.PasswordBasedCipher = SerializableCipher.extend({
                /**
	         * Configuration options.
	         *
	         * @property {KDF} kdf The key derivation function to use to generate a key and IV from a password. Default: OpenSSL
	         */
                cfg: SerializableCipher.cfg.extend({
                    kdf: OpenSSLKdf
                }),
                /**
	         * Encrypts a message using a password.
	         *
	         * @param {Cipher} cipher The cipher algorithm to use.
	         * @param {WordArray|string} message The message to encrypt.
	         * @param {string} password The password.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {CipherParams} A cipher params object.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password');
	         *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password', { format: CryptoJS.format.OpenSSL });
	         */
                encrypt: function(cipher, message, password, cfg) {
                    // Apply config defaults
                    cfg = this.cfg.extend(cfg);
                    // Derive key and other params
                                        var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize);
                    // Add IV to config
                                        cfg.iv = derivedParams.iv;
                    // Encrypt
                                        var ciphertext = SerializableCipher.encrypt.call(this, cipher, message, derivedParams.key, cfg);
                    // Mix in derived params
                                        ciphertext.mixIn(derivedParams);
                    return ciphertext;
                },
                /**
	         * Decrypts serialized ciphertext using a password.
	         *
	         * @param {Cipher} cipher The cipher algorithm to use.
	         * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
	         * @param {string} password The password.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {WordArray} The plaintext.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, 'password', { format: CryptoJS.format.OpenSSL });
	         *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, 'password', { format: CryptoJS.format.OpenSSL });
	         */
                decrypt: function(cipher, ciphertext, password, cfg) {
                    // Apply config defaults
                    cfg = this.cfg.extend(cfg);
                    // Convert string to CipherParams
                                        ciphertext = this._parse(ciphertext, cfg.format);
                    // Derive key and other params
                                        var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize, ciphertext.salt);
                    // Add IV to config
                                        cfg.iv = derivedParams.iv;
                    // Decrypt
                                        var plaintext = SerializableCipher.decrypt.call(this, cipher, ciphertext, derivedParams.key, cfg);
                    return plaintext;
                }
            });
        }();
        /**
	 * Cipher Feedback block mode.
	 */        CryptoJS.mode.CFB = function() {
            var CFB = CryptoJS.lib.BlockCipherMode.extend();
            CFB.Encryptor = CFB.extend({
                processBlock: function(words, offset) {
                    // Shortcuts
                    var cipher = this._cipher;
                    var blockSize = cipher.blockSize;
                    generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher);
                    // Remember this block to use with next block
                                        this._prevBlock = words.slice(offset, offset + blockSize);
                }
            });
            CFB.Decryptor = CFB.extend({
                processBlock: function(words, offset) {
                    // Shortcuts
                    var cipher = this._cipher;
                    var blockSize = cipher.blockSize;
                    // Remember this block to use with next block
                                        var thisBlock = words.slice(offset, offset + blockSize);
                    generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher);
                    // This block becomes the previous block
                                        this._prevBlock = thisBlock;
                }
            });
            function generateKeystreamAndEncrypt(words, offset, blockSize, cipher) {
                // Shortcut
                var iv = this._iv;
                // Generate keystream
                                if (iv) {
                    var keystream = iv.slice(0);
                    // Remove IV for subsequent blocks
                                        this._iv = undefined;
                } else {
                    var keystream = this._prevBlock;
                }
                cipher.encryptBlock(keystream, 0);
                // Encrypt
                                for (var i = 0; i < blockSize; i++) {
                    words[offset + i] ^= keystream[i];
                }
            }
            return CFB;
        }();
        /**
	 * Electronic Codebook block mode.
	 */        CryptoJS.mode.ECB = function() {
            var ECB = CryptoJS.lib.BlockCipherMode.extend();
            ECB.Encryptor = ECB.extend({
                processBlock: function(words, offset) {
                    this._cipher.encryptBlock(words, offset);
                }
            });
            ECB.Decryptor = ECB.extend({
                processBlock: function(words, offset) {
                    this._cipher.decryptBlock(words, offset);
                }
            });
            return ECB;
        }();
        /**
	 * ANSI X.923 padding strategy.
	 */        CryptoJS.pad.AnsiX923 = {
            pad: function(data, blockSize) {
                // Shortcuts
                var dataSigBytes = data.sigBytes;
                var blockSizeBytes = blockSize * 4;
                // Count padding bytes
                                var nPaddingBytes = blockSizeBytes - dataSigBytes % blockSizeBytes;
                // Compute last byte position
                                var lastBytePos = dataSigBytes + nPaddingBytes - 1;
                // Pad
                                data.clamp();
                data.words[lastBytePos >>> 2] |= nPaddingBytes << 24 - lastBytePos % 4 * 8;
                data.sigBytes += nPaddingBytes;
            },
            unpad: function(data) {
                // Get number of padding bytes from last byte
                var nPaddingBytes = data.words[data.sigBytes - 1 >>> 2] & 255;
                // Remove padding
                                data.sigBytes -= nPaddingBytes;
            }
        };
        /**
	 * ISO 10126 padding strategy.
	 */        CryptoJS.pad.Iso10126 = {
            pad: function(data, blockSize) {
                // Shortcut
                var blockSizeBytes = blockSize * 4;
                // Count padding bytes
                                var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;
                // Pad
                                data.concat(CryptoJS.lib.WordArray.random(nPaddingBytes - 1)).concat(CryptoJS.lib.WordArray.create([ nPaddingBytes << 24 ], 1));
            },
            unpad: function(data) {
                // Get number of padding bytes from last byte
                var nPaddingBytes = data.words[data.sigBytes - 1 >>> 2] & 255;
                // Remove padding
                                data.sigBytes -= nPaddingBytes;
            }
        };
        /**
	 * ISO/IEC 9797-1 Padding Method 2.
	 */        CryptoJS.pad.Iso97971 = {
            pad: function(data, blockSize) {
                // Add 0x80 byte
                data.concat(CryptoJS.lib.WordArray.create([ 2147483648 ], 1));
                // Zero pad the rest
                                CryptoJS.pad.ZeroPadding.pad(data, blockSize);
            },
            unpad: function(data) {
                // Remove zero padding
                CryptoJS.pad.ZeroPadding.unpad(data);
                // Remove one more byte -- the 0x80 byte
                                data.sigBytes--;
            }
        };
        /**
	 * Output Feedback block mode.
	 */        CryptoJS.mode.OFB = function() {
            var OFB = CryptoJS.lib.BlockCipherMode.extend();
            var Encryptor = OFB.Encryptor = OFB.extend({
                processBlock: function(words, offset) {
                    // Shortcuts
                    var cipher = this._cipher;
                    var blockSize = cipher.blockSize;
                    var iv = this._iv;
                    var keystream = this._keystream;
                    // Generate keystream
                                        if (iv) {
                        keystream = this._keystream = iv.slice(0);
                        // Remove IV for subsequent blocks
                                                this._iv = undefined;
                    }
                    cipher.encryptBlock(keystream, 0);
                    // Encrypt
                                        for (var i = 0; i < blockSize; i++) {
                        words[offset + i] ^= keystream[i];
                    }
                }
            });
            OFB.Decryptor = Encryptor;
            return OFB;
        }();
        /**
	 * A noop padding strategy.
	 */        CryptoJS.pad.NoPadding = {
            pad: function() {},
            unpad: function() {}
        };
        (function(undefined) {
            // Shortcuts
            var C = CryptoJS;
            var C_lib = C.lib;
            var CipherParams = C_lib.CipherParams;
            var C_enc = C.enc;
            var Hex = C_enc.Hex;
            var C_format = C.format;
            var HexFormatter = C_format.Hex = {
                /**
	         * Converts the ciphertext of a cipher params object to a hexadecimally encoded string.
	         *
	         * @param {CipherParams} cipherParams The cipher params object.
	         *
	         * @return {string} The hexadecimally encoded string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var hexString = CryptoJS.format.Hex.stringify(cipherParams);
	         */
                stringify: function(cipherParams) {
                    return cipherParams.ciphertext.toString(Hex);
                },
                /**
	         * Converts a hexadecimally encoded ciphertext string to a cipher params object.
	         *
	         * @param {string} input The hexadecimally encoded string.
	         *
	         * @return {CipherParams} The cipher params object.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var cipherParams = CryptoJS.format.Hex.parse(hexString);
	         */
                parse: function(input) {
                    var ciphertext = Hex.parse(input);
                    return CipherParams.create({
                        ciphertext: ciphertext
                    });
                }
            };
        })();
        (function() {
            // Shortcuts
            var C = CryptoJS;
            var C_lib = C.lib;
            var BlockCipher = C_lib.BlockCipher;
            var C_algo = C.algo;
            // Lookup tables
                        var SBOX = [];
            var INV_SBOX = [];
            var SUB_MIX_0 = [];
            var SUB_MIX_1 = [];
            var SUB_MIX_2 = [];
            var SUB_MIX_3 = [];
            var INV_SUB_MIX_0 = [];
            var INV_SUB_MIX_1 = [];
            var INV_SUB_MIX_2 = [];
            var INV_SUB_MIX_3 = [];
            // Compute lookup tables
            // Compute lookup tables
                        // Compute lookup tables
            // Compute lookup tables
            (function() {
                // Compute double table
                var d = [];
                for (var i = 0; i < 256; i++) {
                    if (i < 128) {
                        d[i] = i << 1;
                    } else {
                        d[i] = i << 1 ^ 283;
                    }
                }
                // Walk GF(2^8)
                                var x = 0;
                var xi = 0;
                for (var i = 0; i < 256; i++) {
                    // Compute sbox
                    var sx = xi ^ xi << 1 ^ xi << 2 ^ xi << 3 ^ xi << 4;
                    sx = sx >>> 8 ^ sx & 255 ^ 99;
                    SBOX[x] = sx;
                    INV_SBOX[sx] = x;
                    // Compute multiplication
                                        var x2 = d[x];
                    var x4 = d[x2];
                    var x8 = d[x4];
                    // Compute sub bytes, mix columns tables
                                        var t = d[sx] * 257 ^ sx * 16843008;
                    SUB_MIX_0[x] = t << 24 | t >>> 8;
                    SUB_MIX_1[x] = t << 16 | t >>> 16;
                    SUB_MIX_2[x] = t << 8 | t >>> 24;
                    SUB_MIX_3[x] = t;
                    // Compute inv sub bytes, inv mix columns tables
                                        var t = x8 * 16843009 ^ x4 * 65537 ^ x2 * 257 ^ x * 16843008;
                    INV_SUB_MIX_0[sx] = t << 24 | t >>> 8;
                    INV_SUB_MIX_1[sx] = t << 16 | t >>> 16;
                    INV_SUB_MIX_2[sx] = t << 8 | t >>> 24;
                    INV_SUB_MIX_3[sx] = t;
                    // Compute next counter
                                        if (!x) {
                        x = xi = 1;
                    } else {
                        x = x2 ^ d[d[d[x8 ^ x2]]];
                        xi ^= d[d[xi]];
                    }
                }
            })();
            // Precomputed Rcon lookup
                        var RCON = [ 0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54 ];
            /**
	     * AES block cipher algorithm.
	     */            var AES = C_algo.AES = BlockCipher.extend({
                _doReset: function() {
                    // Skip reset of nRounds has been set before and key did not change
                    if (this._nRounds && this._keyPriorReset === this._key) {
                        return;
                    }
                    // Shortcuts
                                        var key = this._keyPriorReset = this._key;
                    var keyWords = key.words;
                    var keySize = key.sigBytes / 4;
                    // Compute number of rounds
                                        var nRounds = this._nRounds = keySize + 6;
                    // Compute number of key schedule rows
                                        var ksRows = (nRounds + 1) * 4;
                    // Compute key schedule
                                        var keySchedule = this._keySchedule = [];
                    for (var ksRow = 0; ksRow < ksRows; ksRow++) {
                        if (ksRow < keySize) {
                            keySchedule[ksRow] = keyWords[ksRow];
                        } else {
                            var t = keySchedule[ksRow - 1];
                            if (!(ksRow % keySize)) {
                                // Rot word
                                t = t << 8 | t >>> 24;
                                // Sub word
                                                                t = SBOX[t >>> 24] << 24 | SBOX[t >>> 16 & 255] << 16 | SBOX[t >>> 8 & 255] << 8 | SBOX[t & 255];
                                // Mix Rcon
                                                                t ^= RCON[ksRow / keySize | 0] << 24;
                            } else if (keySize > 6 && ksRow % keySize == 4) {
                                // Sub word
                                t = SBOX[t >>> 24] << 24 | SBOX[t >>> 16 & 255] << 16 | SBOX[t >>> 8 & 255] << 8 | SBOX[t & 255];
                            }
                            keySchedule[ksRow] = keySchedule[ksRow - keySize] ^ t;
                        }
                    }
                    // Compute inv key schedule
                                        var invKeySchedule = this._invKeySchedule = [];
                    for (var invKsRow = 0; invKsRow < ksRows; invKsRow++) {
                        var ksRow = ksRows - invKsRow;
                        if (invKsRow % 4) {
                            var t = keySchedule[ksRow];
                        } else {
                            var t = keySchedule[ksRow - 4];
                        }
                        if (invKsRow < 4 || ksRow <= 4) {
                            invKeySchedule[invKsRow] = t;
                        } else {
                            invKeySchedule[invKsRow] = INV_SUB_MIX_0[SBOX[t >>> 24]] ^ INV_SUB_MIX_1[SBOX[t >>> 16 & 255]] ^ INV_SUB_MIX_2[SBOX[t >>> 8 & 255]] ^ INV_SUB_MIX_3[SBOX[t & 255]];
                        }
                    }
                },
                encryptBlock: function(M, offset) {
                    this._doCryptBlock(M, offset, this._keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX);
                },
                decryptBlock: function(M, offset) {
                    // Swap 2nd and 4th rows
                    var t = M[offset + 1];
                    M[offset + 1] = M[offset + 3];
                    M[offset + 3] = t;
                    this._doCryptBlock(M, offset, this._invKeySchedule, INV_SUB_MIX_0, INV_SUB_MIX_1, INV_SUB_MIX_2, INV_SUB_MIX_3, INV_SBOX);
                    // Inv swap 2nd and 4th rows
                                        var t = M[offset + 1];
                    M[offset + 1] = M[offset + 3];
                    M[offset + 3] = t;
                },
                _doCryptBlock: function(M, offset, keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX) {
                    // Shortcut
                    var nRounds = this._nRounds;
                    // Get input, add round key
                                        var s0 = M[offset] ^ keySchedule[0];
                    var s1 = M[offset + 1] ^ keySchedule[1];
                    var s2 = M[offset + 2] ^ keySchedule[2];
                    var s3 = M[offset + 3] ^ keySchedule[3];
                    // Key schedule row counter
                                        var ksRow = 4;
                    // Rounds
                                        for (var round = 1; round < nRounds; round++) {
                        // Shift rows, sub bytes, mix columns, add round key
                        var t0 = SUB_MIX_0[s0 >>> 24] ^ SUB_MIX_1[s1 >>> 16 & 255] ^ SUB_MIX_2[s2 >>> 8 & 255] ^ SUB_MIX_3[s3 & 255] ^ keySchedule[ksRow++];
                        var t1 = SUB_MIX_0[s1 >>> 24] ^ SUB_MIX_1[s2 >>> 16 & 255] ^ SUB_MIX_2[s3 >>> 8 & 255] ^ SUB_MIX_3[s0 & 255] ^ keySchedule[ksRow++];
                        var t2 = SUB_MIX_0[s2 >>> 24] ^ SUB_MIX_1[s3 >>> 16 & 255] ^ SUB_MIX_2[s0 >>> 8 & 255] ^ SUB_MIX_3[s1 & 255] ^ keySchedule[ksRow++];
                        var t3 = SUB_MIX_0[s3 >>> 24] ^ SUB_MIX_1[s0 >>> 16 & 255] ^ SUB_MIX_2[s1 >>> 8 & 255] ^ SUB_MIX_3[s2 & 255] ^ keySchedule[ksRow++];
                        // Update state
                                                s0 = t0;
                        s1 = t1;
                        s2 = t2;
                        s3 = t3;
                    }
                    // Shift rows, sub bytes, add round key
                                        var t0 = (SBOX[s0 >>> 24] << 24 | SBOX[s1 >>> 16 & 255] << 16 | SBOX[s2 >>> 8 & 255] << 8 | SBOX[s3 & 255]) ^ keySchedule[ksRow++];
                    var t1 = (SBOX[s1 >>> 24] << 24 | SBOX[s2 >>> 16 & 255] << 16 | SBOX[s3 >>> 8 & 255] << 8 | SBOX[s0 & 255]) ^ keySchedule[ksRow++];
                    var t2 = (SBOX[s2 >>> 24] << 24 | SBOX[s3 >>> 16 & 255] << 16 | SBOX[s0 >>> 8 & 255] << 8 | SBOX[s1 & 255]) ^ keySchedule[ksRow++];
                    var t3 = (SBOX[s3 >>> 24] << 24 | SBOX[s0 >>> 16 & 255] << 16 | SBOX[s1 >>> 8 & 255] << 8 | SBOX[s2 & 255]) ^ keySchedule[ksRow++];
                    // Set output
                                        M[offset] = t0;
                    M[offset + 1] = t1;
                    M[offset + 2] = t2;
                    M[offset + 3] = t3;
                },
                keySize: 256 / 32
            });
            /**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.AES.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.AES.decrypt(ciphertext, key, cfg);
	     */            C.AES = BlockCipher._createHelper(AES);
        })();
        (function() {
            // Shortcuts
            var C = CryptoJS;
            var C_lib = C.lib;
            var WordArray = C_lib.WordArray;
            var BlockCipher = C_lib.BlockCipher;
            var C_algo = C.algo;
            // Permuted Choice 1 constants
                        var PC1 = [ 57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4 ];
            // Permuted Choice 2 constants
                        var PC2 = [ 14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32 ];
            // Cumulative bit shift constants
                        var BIT_SHIFTS = [ 1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28 ];
            // SBOXes and round permutation constants
                        var SBOX_P = [ {
                0: 8421888,
                268435456: 32768,
                536870912: 8421378,
                805306368: 2,
                1073741824: 512,
                1342177280: 8421890,
                1610612736: 8389122,
                1879048192: 8388608,
                2147483648: 514,
                2415919104: 8389120,
                2684354560: 33280,
                2952790016: 8421376,
                3221225472: 32770,
                3489660928: 8388610,
                3758096384: 0,
                4026531840: 33282,
                134217728: 0,
                402653184: 8421890,
                671088640: 33282,
                939524096: 32768,
                1207959552: 8421888,
                1476395008: 512,
                1744830464: 8421378,
                2013265920: 2,
                2281701376: 8389120,
                2550136832: 33280,
                2818572288: 8421376,
                3087007744: 8389122,
                3355443200: 8388610,
                3623878656: 32770,
                3892314112: 514,
                4160749568: 8388608,
                1: 32768,
                268435457: 2,
                536870913: 8421888,
                805306369: 8388608,
                1073741825: 8421378,
                1342177281: 33280,
                1610612737: 512,
                1879048193: 8389122,
                2147483649: 8421890,
                2415919105: 8421376,
                2684354561: 8388610,
                2952790017: 33282,
                3221225473: 514,
                3489660929: 8389120,
                3758096385: 32770,
                4026531841: 0,
                134217729: 8421890,
                402653185: 8421376,
                671088641: 8388608,
                939524097: 512,
                1207959553: 32768,
                1476395009: 8388610,
                1744830465: 2,
                2013265921: 33282,
                2281701377: 32770,
                2550136833: 8389122,
                2818572289: 514,
                3087007745: 8421888,
                3355443201: 8389120,
                3623878657: 0,
                3892314113: 33280,
                4160749569: 8421378
            }, {
                0: 1074282512,
                16777216: 16384,
                33554432: 524288,
                50331648: 1074266128,
                67108864: 1073741840,
                83886080: 1074282496,
                100663296: 1073758208,
                117440512: 16,
                134217728: 540672,
                150994944: 1073758224,
                167772160: 1073741824,
                184549376: 540688,
                201326592: 524304,
                218103808: 0,
                234881024: 16400,
                251658240: 1074266112,
                8388608: 1073758208,
                25165824: 540688,
                41943040: 16,
                58720256: 1073758224,
                75497472: 1074282512,
                92274688: 1073741824,
                109051904: 524288,
                125829120: 1074266128,
                142606336: 524304,
                159383552: 0,
                176160768: 16384,
                192937984: 1074266112,
                209715200: 1073741840,
                226492416: 540672,
                243269632: 1074282496,
                260046848: 16400,
                268435456: 0,
                285212672: 1074266128,
                301989888: 1073758224,
                318767104: 1074282496,
                335544320: 1074266112,
                352321536: 16,
                369098752: 540688,
                385875968: 16384,
                402653184: 16400,
                419430400: 524288,
                436207616: 524304,
                452984832: 1073741840,
                469762048: 540672,
                486539264: 1073758208,
                503316480: 1073741824,
                520093696: 1074282512,
                276824064: 540688,
                293601280: 524288,
                310378496: 1074266112,
                327155712: 16384,
                343932928: 1073758208,
                360710144: 1074282512,
                377487360: 16,
                394264576: 1073741824,
                411041792: 1074282496,
                427819008: 1073741840,
                444596224: 1073758224,
                461373440: 524304,
                478150656: 0,
                494927872: 16400,
                511705088: 1074266128,
                528482304: 540672
            }, {
                0: 260,
                1048576: 0,
                2097152: 67109120,
                3145728: 65796,
                4194304: 65540,
                5242880: 67108868,
                6291456: 67174660,
                7340032: 67174400,
                8388608: 67108864,
                9437184: 67174656,
                10485760: 65792,
                11534336: 67174404,
                12582912: 67109124,
                13631488: 65536,
                14680064: 4,
                15728640: 256,
                524288: 67174656,
                1572864: 67174404,
                2621440: 0,
                3670016: 67109120,
                4718592: 67108868,
                5767168: 65536,
                6815744: 65540,
                7864320: 260,
                8912896: 4,
                9961472: 256,
                11010048: 67174400,
                12058624: 65796,
                13107200: 65792,
                14155776: 67109124,
                15204352: 67174660,
                16252928: 67108864,
                16777216: 67174656,
                17825792: 65540,
                18874368: 65536,
                19922944: 67109120,
                20971520: 256,
                22020096: 67174660,
                23068672: 67108868,
                24117248: 0,
                25165824: 67109124,
                26214400: 67108864,
                27262976: 4,
                28311552: 65792,
                29360128: 67174400,
                30408704: 260,
                31457280: 65796,
                32505856: 67174404,
                17301504: 67108864,
                18350080: 260,
                19398656: 67174656,
                20447232: 0,
                21495808: 65540,
                22544384: 67109120,
                23592960: 256,
                24641536: 67174404,
                25690112: 65536,
                26738688: 67174660,
                27787264: 65796,
                28835840: 67108868,
                29884416: 67109124,
                30932992: 67174400,
                31981568: 4,
                33030144: 65792
            }, {
                0: 2151682048,
                65536: 2147487808,
                131072: 4198464,
                196608: 2151677952,
                262144: 0,
                327680: 4198400,
                393216: 2147483712,
                458752: 4194368,
                524288: 2147483648,
                589824: 4194304,
                655360: 64,
                720896: 2147487744,
                786432: 2151678016,
                851968: 4160,
                917504: 4096,
                983040: 2151682112,
                32768: 2147487808,
                98304: 64,
                163840: 2151678016,
                229376: 2147487744,
                294912: 4198400,
                360448: 2151682112,
                425984: 0,
                491520: 2151677952,
                557056: 4096,
                622592: 2151682048,
                688128: 4194304,
                753664: 4160,
                819200: 2147483648,
                884736: 4194368,
                950272: 4198464,
                1015808: 2147483712,
                1048576: 4194368,
                1114112: 4198400,
                1179648: 2147483712,
                1245184: 0,
                1310720: 4160,
                1376256: 2151678016,
                1441792: 2151682048,
                1507328: 2147487808,
                1572864: 2151682112,
                1638400: 2147483648,
                1703936: 2151677952,
                1769472: 4198464,
                1835008: 2147487744,
                1900544: 4194304,
                1966080: 64,
                2031616: 4096,
                1081344: 2151677952,
                1146880: 2151682112,
                1212416: 0,
                1277952: 4198400,
                1343488: 4194368,
                1409024: 2147483648,
                1474560: 2147487808,
                1540096: 64,
                1605632: 2147483712,
                1671168: 4096,
                1736704: 2147487744,
                1802240: 2151678016,
                1867776: 4160,
                1933312: 2151682048,
                1998848: 4194304,
                2064384: 4198464
            }, {
                0: 128,
                4096: 17039360,
                8192: 262144,
                12288: 536870912,
                16384: 537133184,
                20480: 16777344,
                24576: 553648256,
                28672: 262272,
                32768: 16777216,
                36864: 537133056,
                40960: 536871040,
                45056: 553910400,
                49152: 553910272,
                53248: 0,
                57344: 17039488,
                61440: 553648128,
                2048: 17039488,
                6144: 553648256,
                10240: 128,
                14336: 17039360,
                18432: 262144,
                22528: 537133184,
                26624: 553910272,
                30720: 536870912,
                34816: 537133056,
                38912: 0,
                43008: 553910400,
                47104: 16777344,
                51200: 536871040,
                55296: 553648128,
                59392: 16777216,
                63488: 262272,
                65536: 262144,
                69632: 128,
                73728: 536870912,
                77824: 553648256,
                81920: 16777344,
                86016: 553910272,
                90112: 537133184,
                94208: 16777216,
                98304: 553910400,
                102400: 553648128,
                106496: 17039360,
                110592: 537133056,
                114688: 262272,
                118784: 536871040,
                122880: 0,
                126976: 17039488,
                67584: 553648256,
                71680: 16777216,
                75776: 17039360,
                79872: 537133184,
                83968: 536870912,
                88064: 17039488,
                92160: 128,
                96256: 553910272,
                100352: 262272,
                104448: 553910400,
                108544: 0,
                112640: 553648128,
                116736: 16777344,
                120832: 262144,
                124928: 537133056,
                129024: 536871040
            }, {
                0: 268435464,
                256: 8192,
                512: 270532608,
                768: 270540808,
                1024: 268443648,
                1280: 2097152,
                1536: 2097160,
                1792: 268435456,
                2048: 0,
                2304: 268443656,
                2560: 2105344,
                2816: 8,
                3072: 270532616,
                3328: 2105352,
                3584: 8200,
                3840: 270540800,
                128: 270532608,
                384: 270540808,
                640: 8,
                896: 2097152,
                1152: 2105352,
                1408: 268435464,
                1664: 268443648,
                1920: 8200,
                2176: 2097160,
                2432: 8192,
                2688: 268443656,
                2944: 270532616,
                3200: 0,
                3456: 270540800,
                3712: 2105344,
                3968: 268435456,
                4096: 268443648,
                4352: 270532616,
                4608: 270540808,
                4864: 8200,
                5120: 2097152,
                5376: 268435456,
                5632: 268435464,
                5888: 2105344,
                6144: 2105352,
                6400: 0,
                6656: 8,
                6912: 270532608,
                7168: 8192,
                7424: 268443656,
                7680: 270540800,
                7936: 2097160,
                4224: 8,
                4480: 2105344,
                4736: 2097152,
                4992: 268435464,
                5248: 268443648,
                5504: 8200,
                5760: 270540808,
                6016: 270532608,
                6272: 270540800,
                6528: 270532616,
                6784: 8192,
                7040: 2105352,
                7296: 2097160,
                7552: 0,
                7808: 268435456,
                8064: 268443656
            }, {
                0: 1048576,
                16: 33555457,
                32: 1024,
                48: 1049601,
                64: 34604033,
                80: 0,
                96: 1,
                112: 34603009,
                128: 33555456,
                144: 1048577,
                160: 33554433,
                176: 34604032,
                192: 34603008,
                208: 1025,
                224: 1049600,
                240: 33554432,
                8: 34603009,
                24: 0,
                40: 33555457,
                56: 34604032,
                72: 1048576,
                88: 33554433,
                104: 33554432,
                120: 1025,
                136: 1049601,
                152: 33555456,
                168: 34603008,
                184: 1048577,
                200: 1024,
                216: 34604033,
                232: 1,
                248: 1049600,
                256: 33554432,
                272: 1048576,
                288: 33555457,
                304: 34603009,
                320: 1048577,
                336: 33555456,
                352: 34604032,
                368: 1049601,
                384: 1025,
                400: 34604033,
                416: 1049600,
                432: 1,
                448: 0,
                464: 34603008,
                480: 33554433,
                496: 1024,
                264: 1049600,
                280: 33555457,
                296: 34603009,
                312: 1,
                328: 33554432,
                344: 1048576,
                360: 1025,
                376: 34604032,
                392: 33554433,
                408: 34603008,
                424: 0,
                440: 34604033,
                456: 1049601,
                472: 1024,
                488: 33555456,
                504: 1048577
            }, {
                0: 134219808,
                1: 131072,
                2: 134217728,
                3: 32,
                4: 131104,
                5: 134350880,
                6: 134350848,
                7: 2048,
                8: 134348800,
                9: 134219776,
                10: 133120,
                11: 134348832,
                12: 2080,
                13: 0,
                14: 134217760,
                15: 133152,
                2147483648: 2048,
                2147483649: 134350880,
                2147483650: 134219808,
                2147483651: 134217728,
                2147483652: 134348800,
                2147483653: 133120,
                2147483654: 133152,
                2147483655: 32,
                2147483656: 134217760,
                2147483657: 2080,
                2147483658: 131104,
                2147483659: 134350848,
                2147483660: 0,
                2147483661: 134348832,
                2147483662: 134219776,
                2147483663: 131072,
                16: 133152,
                17: 134350848,
                18: 32,
                19: 2048,
                20: 134219776,
                21: 134217760,
                22: 134348832,
                23: 131072,
                24: 0,
                25: 131104,
                26: 134348800,
                27: 134219808,
                28: 134350880,
                29: 133120,
                30: 2080,
                31: 134217728,
                2147483664: 131072,
                2147483665: 2048,
                2147483666: 134348832,
                2147483667: 133152,
                2147483668: 32,
                2147483669: 134348800,
                2147483670: 134217728,
                2147483671: 134219808,
                2147483672: 134350880,
                2147483673: 134217760,
                2147483674: 134219776,
                2147483675: 0,
                2147483676: 133120,
                2147483677: 2080,
                2147483678: 131104,
                2147483679: 134350848
            } ];
            // Masks that select the SBOX input
                        var SBOX_MASK = [ 4160749569, 528482304, 33030144, 2064384, 129024, 8064, 504, 2147483679 ];
            /**
	     * DES block cipher algorithm.
	     */            var DES = C_algo.DES = BlockCipher.extend({
                _doReset: function() {
                    // Shortcuts
                    var key = this._key;
                    var keyWords = key.words;
                    // Select 56 bits according to PC1
                                        var keyBits = [];
                    for (var i = 0; i < 56; i++) {
                        var keyBitPos = PC1[i] - 1;
                        keyBits[i] = keyWords[keyBitPos >>> 5] >>> 31 - keyBitPos % 32 & 1;
                    }
                    // Assemble 16 subkeys
                                        var subKeys = this._subKeys = [];
                    for (var nSubKey = 0; nSubKey < 16; nSubKey++) {
                        // Create subkey
                        var subKey = subKeys[nSubKey] = [];
                        // Shortcut
                                                var bitShift = BIT_SHIFTS[nSubKey];
                        // Select 48 bits according to PC2
                                                for (var i = 0; i < 24; i++) {
                            // Select from the left 28 key bits
                            subKey[i / 6 | 0] |= keyBits[(PC2[i] - 1 + bitShift) % 28] << 31 - i % 6;
                            // Select from the right 28 key bits
                                                        subKey[4 + (i / 6 | 0)] |= keyBits[28 + (PC2[i + 24] - 1 + bitShift) % 28] << 31 - i % 6;
                        }
                        // Since each subkey is applied to an expanded 32-bit input,
                        // the subkey can be broken into 8 values scaled to 32-bits,
                        // which allows the key to be used without expansion
                                                subKey[0] = subKey[0] << 1 | subKey[0] >>> 31;
                        for (var i = 1; i < 7; i++) {
                            subKey[i] = subKey[i] >>> (i - 1) * 4 + 3;
                        }
                        subKey[7] = subKey[7] << 5 | subKey[7] >>> 27;
                    }
                    // Compute inverse subkeys
                                        var invSubKeys = this._invSubKeys = [];
                    for (var i = 0; i < 16; i++) {
                        invSubKeys[i] = subKeys[15 - i];
                    }
                },
                encryptBlock: function(M, offset) {
                    this._doCryptBlock(M, offset, this._subKeys);
                },
                decryptBlock: function(M, offset) {
                    this._doCryptBlock(M, offset, this._invSubKeys);
                },
                _doCryptBlock: function(M, offset, subKeys) {
                    // Get input
                    this._lBlock = M[offset];
                    this._rBlock = M[offset + 1];
                    // Initial permutation
                                        exchangeLR.call(this, 4, 252645135);
                    exchangeLR.call(this, 16, 65535);
                    exchangeRL.call(this, 2, 858993459);
                    exchangeRL.call(this, 8, 16711935);
                    exchangeLR.call(this, 1, 1431655765);
                    // Rounds
                                        for (var round = 0; round < 16; round++) {
                        // Shortcuts
                        var subKey = subKeys[round];
                        var lBlock = this._lBlock;
                        var rBlock = this._rBlock;
                        // Feistel function
                                                var f = 0;
                        for (var i = 0; i < 8; i++) {
                            f |= SBOX_P[i][((rBlock ^ subKey[i]) & SBOX_MASK[i]) >>> 0];
                        }
                        this._lBlock = rBlock;
                        this._rBlock = lBlock ^ f;
                    }
                    // Undo swap from last round
                                        var t = this._lBlock;
                    this._lBlock = this._rBlock;
                    this._rBlock = t;
                    // Final permutation
                                        exchangeLR.call(this, 1, 1431655765);
                    exchangeRL.call(this, 8, 16711935);
                    exchangeRL.call(this, 2, 858993459);
                    exchangeLR.call(this, 16, 65535);
                    exchangeLR.call(this, 4, 252645135);
                    // Set output
                                        M[offset] = this._lBlock;
                    M[offset + 1] = this._rBlock;
                },
                keySize: 64 / 32,
                ivSize: 64 / 32,
                blockSize: 64 / 32
            });
            // Swap bits across the left and right words
                        function exchangeLR(offset, mask) {
                var t = (this._lBlock >>> offset ^ this._rBlock) & mask;
                this._rBlock ^= t;
                this._lBlock ^= t << offset;
            }
            function exchangeRL(offset, mask) {
                var t = (this._rBlock >>> offset ^ this._lBlock) & mask;
                this._lBlock ^= t;
                this._rBlock ^= t << offset;
            }
            /**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.DES.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.DES.decrypt(ciphertext, key, cfg);
	     */            C.DES = BlockCipher._createHelper(DES);
            /**
	     * Triple-DES block cipher algorithm.
	     */            var TripleDES = C_algo.TripleDES = BlockCipher.extend({
                _doReset: function() {
                    // Shortcuts
                    var key = this._key;
                    var keyWords = key.words;
                    // Create DES instances
                                        this._des1 = DES.createEncryptor(WordArray.create(keyWords.slice(0, 2)));
                    this._des2 = DES.createEncryptor(WordArray.create(keyWords.slice(2, 4)));
                    this._des3 = DES.createEncryptor(WordArray.create(keyWords.slice(4, 6)));
                },
                encryptBlock: function(M, offset) {
                    this._des1.encryptBlock(M, offset);
                    this._des2.decryptBlock(M, offset);
                    this._des3.encryptBlock(M, offset);
                },
                decryptBlock: function(M, offset) {
                    this._des3.decryptBlock(M, offset);
                    this._des2.encryptBlock(M, offset);
                    this._des1.decryptBlock(M, offset);
                },
                keySize: 192 / 32,
                ivSize: 64 / 32,
                blockSize: 64 / 32
            });
            /**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.TripleDES.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.TripleDES.decrypt(ciphertext, key, cfg);
	     */            C.TripleDES = BlockCipher._createHelper(TripleDES);
        })();
        (function() {
            // Shortcuts
            var C = CryptoJS;
            var C_lib = C.lib;
            var StreamCipher = C_lib.StreamCipher;
            var C_algo = C.algo;
            /**
	     * RC4 stream cipher algorithm.
	     */            var RC4 = C_algo.RC4 = StreamCipher.extend({
                _doReset: function() {
                    // Shortcuts
                    var key = this._key;
                    var keyWords = key.words;
                    var keySigBytes = key.sigBytes;
                    // Init sbox
                                        var S = this._S = [];
                    for (var i = 0; i < 256; i++) {
                        S[i] = i;
                    }
                    // Key setup
                                        for (var i = 0, j = 0; i < 256; i++) {
                        var keyByteIndex = i % keySigBytes;
                        var keyByte = keyWords[keyByteIndex >>> 2] >>> 24 - keyByteIndex % 4 * 8 & 255;
                        j = (j + S[i] + keyByte) % 256;
                        // Swap
                                                var t = S[i];
                        S[i] = S[j];
                        S[j] = t;
                    }
                    // Counters
                                        this._i = this._j = 0;
                },
                _doProcessBlock: function(M, offset) {
                    M[offset] ^= generateKeystreamWord.call(this);
                },
                keySize: 256 / 32,
                ivSize: 0
            });
            function generateKeystreamWord() {
                // Shortcuts
                var S = this._S;
                var i = this._i;
                var j = this._j;
                // Generate keystream word
                                var keystreamWord = 0;
                for (var n = 0; n < 4; n++) {
                    i = (i + 1) % 256;
                    j = (j + S[i]) % 256;
                    // Swap
                                        var t = S[i];
                    S[i] = S[j];
                    S[j] = t;
                    keystreamWord |= S[(S[i] + S[j]) % 256] << 24 - n * 8;
                }
                // Update counters
                                this._i = i;
                this._j = j;
                return keystreamWord;
            }
            /**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.RC4.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.RC4.decrypt(ciphertext, key, cfg);
	     */            C.RC4 = StreamCipher._createHelper(RC4);
            /**
	     * Modified RC4 stream cipher algorithm.
	     */            var RC4Drop = C_algo.RC4Drop = RC4.extend({
                /**
	         * Configuration options.
	         *
	         * @property {number} drop The number of keystream words to drop. Default 192
	         */
                cfg: RC4.cfg.extend({
                    drop: 192
                }),
                _doReset: function() {
                    RC4._doReset.call(this);
                    // Drop
                                        for (var i = this.cfg.drop; i > 0; i--) {
                        generateKeystreamWord.call(this);
                    }
                }
            });
            /**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.RC4Drop.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.RC4Drop.decrypt(ciphertext, key, cfg);
	     */            C.RC4Drop = StreamCipher._createHelper(RC4Drop);
        })();
        /** @preserve
	 * Counter block mode compatible with  Dr Brian Gladman fileenc.c
	 * derived from CryptoJS.mode.CTR
	 * Jan Hruby jhruby.web@gmail.com
	 */        CryptoJS.mode.CTRGladman = function() {
            var CTRGladman = CryptoJS.lib.BlockCipherMode.extend();
            function incWord(word) {
                if ((word >> 24 & 255) === 255) {
                    //overflow
                    var b1 = word >> 16 & 255;
                    var b2 = word >> 8 & 255;
                    var b3 = word & 255;
                    if (b1 === 255) // overflow b1
                    {
                        b1 = 0;
                        if (b2 === 255) {
                            b2 = 0;
                            if (b3 === 255) {
                                b3 = 0;
                            } else {
                                ++b3;
                            }
                        } else {
                            ++b2;
                        }
                    } else {
                        ++b1;
                    }
                    word = 0;
                    word += b1 << 16;
                    word += b2 << 8;
                    word += b3;
                } else {
                    word += 1 << 24;
                }
                return word;
            }
            function incCounter(counter) {
                if ((counter[0] = incWord(counter[0])) === 0) {
                    // encr_data in fileenc.c from  Dr Brian Gladman's counts only with DWORD j < 8
                    counter[1] = incWord(counter[1]);
                }
                return counter;
            }
            var Encryptor = CTRGladman.Encryptor = CTRGladman.extend({
                processBlock: function(words, offset) {
                    // Shortcuts
                    var cipher = this._cipher;
                    var blockSize = cipher.blockSize;
                    var iv = this._iv;
                    var counter = this._counter;
                    // Generate keystream
                                        if (iv) {
                        counter = this._counter = iv.slice(0);
                        // Remove IV for subsequent blocks
                                                this._iv = undefined;
                    }
                    incCounter(counter);
                    var keystream = counter.slice(0);
                    cipher.encryptBlock(keystream, 0);
                    // Encrypt
                                        for (var i = 0; i < blockSize; i++) {
                        words[offset + i] ^= keystream[i];
                    }
                }
            });
            CTRGladman.Decryptor = Encryptor;
            return CTRGladman;
        }();
        (function() {
            // Shortcuts
            var C = CryptoJS;
            var C_lib = C.lib;
            var StreamCipher = C_lib.StreamCipher;
            var C_algo = C.algo;
            // Reusable objects
                        var S = [];
            var C_ = [];
            var G = [];
            /**
	     * Rabbit stream cipher algorithm
	     */            var Rabbit = C_algo.Rabbit = StreamCipher.extend({
                _doReset: function() {
                    // Shortcuts
                    var K = this._key.words;
                    var iv = this.cfg.iv;
                    // Swap endian
                                        for (var i = 0; i < 4; i++) {
                        K[i] = (K[i] << 8 | K[i] >>> 24) & 16711935 | (K[i] << 24 | K[i] >>> 8) & 4278255360;
                    }
                    // Generate initial state values
                                        var X = this._X = [ K[0], K[3] << 16 | K[2] >>> 16, K[1], K[0] << 16 | K[3] >>> 16, K[2], K[1] << 16 | K[0] >>> 16, K[3], K[2] << 16 | K[1] >>> 16 ];
                    // Generate initial counter values
                                        var C = this._C = [ K[2] << 16 | K[2] >>> 16, K[0] & 4294901760 | K[1] & 65535, K[3] << 16 | K[3] >>> 16, K[1] & 4294901760 | K[2] & 65535, K[0] << 16 | K[0] >>> 16, K[2] & 4294901760 | K[3] & 65535, K[1] << 16 | K[1] >>> 16, K[3] & 4294901760 | K[0] & 65535 ];
                    // Carry bit
                                        this._b = 0;
                    // Iterate the system four times
                                        for (var i = 0; i < 4; i++) {
                        nextState.call(this);
                    }
                    // Modify the counters
                                        for (var i = 0; i < 8; i++) {
                        C[i] ^= X[i + 4 & 7];
                    }
                    // IV setup
                                        if (iv) {
                        // Shortcuts
                        var IV = iv.words;
                        var IV_0 = IV[0];
                        var IV_1 = IV[1];
                        // Generate four subvectors
                                                var i0 = (IV_0 << 8 | IV_0 >>> 24) & 16711935 | (IV_0 << 24 | IV_0 >>> 8) & 4278255360;
                        var i2 = (IV_1 << 8 | IV_1 >>> 24) & 16711935 | (IV_1 << 24 | IV_1 >>> 8) & 4278255360;
                        var i1 = i0 >>> 16 | i2 & 4294901760;
                        var i3 = i2 << 16 | i0 & 65535;
                        // Modify counter values
                                                C[0] ^= i0;
                        C[1] ^= i1;
                        C[2] ^= i2;
                        C[3] ^= i3;
                        C[4] ^= i0;
                        C[5] ^= i1;
                        C[6] ^= i2;
                        C[7] ^= i3;
                        // Iterate the system four times
                                                for (var i = 0; i < 4; i++) {
                            nextState.call(this);
                        }
                    }
                },
                _doProcessBlock: function(M, offset) {
                    // Shortcut
                    var X = this._X;
                    // Iterate the system
                                        nextState.call(this);
                    // Generate four keystream words
                                        S[0] = X[0] ^ X[5] >>> 16 ^ X[3] << 16;
                    S[1] = X[2] ^ X[7] >>> 16 ^ X[5] << 16;
                    S[2] = X[4] ^ X[1] >>> 16 ^ X[7] << 16;
                    S[3] = X[6] ^ X[3] >>> 16 ^ X[1] << 16;
                    for (var i = 0; i < 4; i++) {
                        // Swap endian
                        S[i] = (S[i] << 8 | S[i] >>> 24) & 16711935 | (S[i] << 24 | S[i] >>> 8) & 4278255360;
                        // Encrypt
                                                M[offset + i] ^= S[i];
                    }
                },
                blockSize: 128 / 32,
                ivSize: 64 / 32
            });
            function nextState() {
                // Shortcuts
                var X = this._X;
                var C = this._C;
                // Save old counter values
                                for (var i = 0; i < 8; i++) {
                    C_[i] = C[i];
                }
                // Calculate new counter values
                                C[0] = C[0] + 1295307597 + this._b | 0;
                C[1] = C[1] + 3545052371 + (C[0] >>> 0 < C_[0] >>> 0 ? 1 : 0) | 0;
                C[2] = C[2] + 886263092 + (C[1] >>> 0 < C_[1] >>> 0 ? 1 : 0) | 0;
                C[3] = C[3] + 1295307597 + (C[2] >>> 0 < C_[2] >>> 0 ? 1 : 0) | 0;
                C[4] = C[4] + 3545052371 + (C[3] >>> 0 < C_[3] >>> 0 ? 1 : 0) | 0;
                C[5] = C[5] + 886263092 + (C[4] >>> 0 < C_[4] >>> 0 ? 1 : 0) | 0;
                C[6] = C[6] + 1295307597 + (C[5] >>> 0 < C_[5] >>> 0 ? 1 : 0) | 0;
                C[7] = C[7] + 3545052371 + (C[6] >>> 0 < C_[6] >>> 0 ? 1 : 0) | 0;
                this._b = C[7] >>> 0 < C_[7] >>> 0 ? 1 : 0;
                // Calculate the g-values
                                for (var i = 0; i < 8; i++) {
                    var gx = X[i] + C[i];
                    // Construct high and low argument for squaring
                                        var ga = gx & 65535;
                    var gb = gx >>> 16;
                    // Calculate high and low result of squaring
                                        var gh = ((ga * ga >>> 17) + ga * gb >>> 15) + gb * gb;
                    var gl = ((gx & 4294901760) * gx | 0) + ((gx & 65535) * gx | 0);
                    // High XOR low
                                        G[i] = gh ^ gl;
                }
                // Calculate new state values
                                X[0] = G[0] + (G[7] << 16 | G[7] >>> 16) + (G[6] << 16 | G[6] >>> 16) | 0;
                X[1] = G[1] + (G[0] << 8 | G[0] >>> 24) + G[7] | 0;
                X[2] = G[2] + (G[1] << 16 | G[1] >>> 16) + (G[0] << 16 | G[0] >>> 16) | 0;
                X[3] = G[3] + (G[2] << 8 | G[2] >>> 24) + G[1] | 0;
                X[4] = G[4] + (G[3] << 16 | G[3] >>> 16) + (G[2] << 16 | G[2] >>> 16) | 0;
                X[5] = G[5] + (G[4] << 8 | G[4] >>> 24) + G[3] | 0;
                X[6] = G[6] + (G[5] << 16 | G[5] >>> 16) + (G[4] << 16 | G[4] >>> 16) | 0;
                X[7] = G[7] + (G[6] << 8 | G[6] >>> 24) + G[5] | 0;
            }
            /**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.Rabbit.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.Rabbit.decrypt(ciphertext, key, cfg);
	     */            C.Rabbit = StreamCipher._createHelper(Rabbit);
        })();
        /**
	 * Counter block mode.
	 */        CryptoJS.mode.CTR = function() {
            var CTR = CryptoJS.lib.BlockCipherMode.extend();
            var Encryptor = CTR.Encryptor = CTR.extend({
                processBlock: function(words, offset) {
                    // Shortcuts
                    var cipher = this._cipher;
                    var blockSize = cipher.blockSize;
                    var iv = this._iv;
                    var counter = this._counter;
                    // Generate keystream
                                        if (iv) {
                        counter = this._counter = iv.slice(0);
                        // Remove IV for subsequent blocks
                                                this._iv = undefined;
                    }
                    var keystream = counter.slice(0);
                    cipher.encryptBlock(keystream, 0);
                    // Increment counter
                                        counter[blockSize - 1] = counter[blockSize - 1] + 1 | 0;
                    // Encrypt
                                        for (var i = 0; i < blockSize; i++) {
                        words[offset + i] ^= keystream[i];
                    }
                }
            });
            CTR.Decryptor = Encryptor;
            return CTR;
        }();
        (function() {
            // Shortcuts
            var C = CryptoJS;
            var C_lib = C.lib;
            var StreamCipher = C_lib.StreamCipher;
            var C_algo = C.algo;
            // Reusable objects
                        var S = [];
            var C_ = [];
            var G = [];
            /**
	     * Rabbit stream cipher algorithm.
	     *
	     * This is a legacy version that neglected to convert the key to little-endian.
	     * This error doesn't affect the cipher's security,
	     * but it does affect its compatibility with other implementations.
	     */            var RabbitLegacy = C_algo.RabbitLegacy = StreamCipher.extend({
                _doReset: function() {
                    // Shortcuts
                    var K = this._key.words;
                    var iv = this.cfg.iv;
                    // Generate initial state values
                                        var X = this._X = [ K[0], K[3] << 16 | K[2] >>> 16, K[1], K[0] << 16 | K[3] >>> 16, K[2], K[1] << 16 | K[0] >>> 16, K[3], K[2] << 16 | K[1] >>> 16 ];
                    // Generate initial counter values
                                        var C = this._C = [ K[2] << 16 | K[2] >>> 16, K[0] & 4294901760 | K[1] & 65535, K[3] << 16 | K[3] >>> 16, K[1] & 4294901760 | K[2] & 65535, K[0] << 16 | K[0] >>> 16, K[2] & 4294901760 | K[3] & 65535, K[1] << 16 | K[1] >>> 16, K[3] & 4294901760 | K[0] & 65535 ];
                    // Carry bit
                                        this._b = 0;
                    // Iterate the system four times
                                        for (var i = 0; i < 4; i++) {
                        nextState.call(this);
                    }
                    // Modify the counters
                                        for (var i = 0; i < 8; i++) {
                        C[i] ^= X[i + 4 & 7];
                    }
                    // IV setup
                                        if (iv) {
                        // Shortcuts
                        var IV = iv.words;
                        var IV_0 = IV[0];
                        var IV_1 = IV[1];
                        // Generate four subvectors
                                                var i0 = (IV_0 << 8 | IV_0 >>> 24) & 16711935 | (IV_0 << 24 | IV_0 >>> 8) & 4278255360;
                        var i2 = (IV_1 << 8 | IV_1 >>> 24) & 16711935 | (IV_1 << 24 | IV_1 >>> 8) & 4278255360;
                        var i1 = i0 >>> 16 | i2 & 4294901760;
                        var i3 = i2 << 16 | i0 & 65535;
                        // Modify counter values
                                                C[0] ^= i0;
                        C[1] ^= i1;
                        C[2] ^= i2;
                        C[3] ^= i3;
                        C[4] ^= i0;
                        C[5] ^= i1;
                        C[6] ^= i2;
                        C[7] ^= i3;
                        // Iterate the system four times
                                                for (var i = 0; i < 4; i++) {
                            nextState.call(this);
                        }
                    }
                },
                _doProcessBlock: function(M, offset) {
                    // Shortcut
                    var X = this._X;
                    // Iterate the system
                                        nextState.call(this);
                    // Generate four keystream words
                                        S[0] = X[0] ^ X[5] >>> 16 ^ X[3] << 16;
                    S[1] = X[2] ^ X[7] >>> 16 ^ X[5] << 16;
                    S[2] = X[4] ^ X[1] >>> 16 ^ X[7] << 16;
                    S[3] = X[6] ^ X[3] >>> 16 ^ X[1] << 16;
                    for (var i = 0; i < 4; i++) {
                        // Swap endian
                        S[i] = (S[i] << 8 | S[i] >>> 24) & 16711935 | (S[i] << 24 | S[i] >>> 8) & 4278255360;
                        // Encrypt
                                                M[offset + i] ^= S[i];
                    }
                },
                blockSize: 128 / 32,
                ivSize: 64 / 32
            });
            function nextState() {
                // Shortcuts
                var X = this._X;
                var C = this._C;
                // Save old counter values
                                for (var i = 0; i < 8; i++) {
                    C_[i] = C[i];
                }
                // Calculate new counter values
                                C[0] = C[0] + 1295307597 + this._b | 0;
                C[1] = C[1] + 3545052371 + (C[0] >>> 0 < C_[0] >>> 0 ? 1 : 0) | 0;
                C[2] = C[2] + 886263092 + (C[1] >>> 0 < C_[1] >>> 0 ? 1 : 0) | 0;
                C[3] = C[3] + 1295307597 + (C[2] >>> 0 < C_[2] >>> 0 ? 1 : 0) | 0;
                C[4] = C[4] + 3545052371 + (C[3] >>> 0 < C_[3] >>> 0 ? 1 : 0) | 0;
                C[5] = C[5] + 886263092 + (C[4] >>> 0 < C_[4] >>> 0 ? 1 : 0) | 0;
                C[6] = C[6] + 1295307597 + (C[5] >>> 0 < C_[5] >>> 0 ? 1 : 0) | 0;
                C[7] = C[7] + 3545052371 + (C[6] >>> 0 < C_[6] >>> 0 ? 1 : 0) | 0;
                this._b = C[7] >>> 0 < C_[7] >>> 0 ? 1 : 0;
                // Calculate the g-values
                                for (var i = 0; i < 8; i++) {
                    var gx = X[i] + C[i];
                    // Construct high and low argument for squaring
                                        var ga = gx & 65535;
                    var gb = gx >>> 16;
                    // Calculate high and low result of squaring
                                        var gh = ((ga * ga >>> 17) + ga * gb >>> 15) + gb * gb;
                    var gl = ((gx & 4294901760) * gx | 0) + ((gx & 65535) * gx | 0);
                    // High XOR low
                                        G[i] = gh ^ gl;
                }
                // Calculate new state values
                                X[0] = G[0] + (G[7] << 16 | G[7] >>> 16) + (G[6] << 16 | G[6] >>> 16) | 0;
                X[1] = G[1] + (G[0] << 8 | G[0] >>> 24) + G[7] | 0;
                X[2] = G[2] + (G[1] << 16 | G[1] >>> 16) + (G[0] << 16 | G[0] >>> 16) | 0;
                X[3] = G[3] + (G[2] << 8 | G[2] >>> 24) + G[1] | 0;
                X[4] = G[4] + (G[3] << 16 | G[3] >>> 16) + (G[2] << 16 | G[2] >>> 16) | 0;
                X[5] = G[5] + (G[4] << 8 | G[4] >>> 24) + G[3] | 0;
                X[6] = G[6] + (G[5] << 16 | G[5] >>> 16) + (G[4] << 16 | G[4] >>> 16) | 0;
                X[7] = G[7] + (G[6] << 8 | G[6] >>> 24) + G[5] | 0;
            }
            /**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.RabbitLegacy.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.RabbitLegacy.decrypt(ciphertext, key, cfg);
	     */            C.RabbitLegacy = StreamCipher._createHelper(RabbitLegacy);
        })();
        /**
	 * Zero padding strategy.
	 */        CryptoJS.pad.ZeroPadding = {
            pad: function(data, blockSize) {
                // Shortcut
                var blockSizeBytes = blockSize * 4;
                // Pad
                                data.clamp();
                data.sigBytes += blockSizeBytes - (data.sigBytes % blockSizeBytes || blockSizeBytes);
            },
            unpad: function(data) {
                // Shortcut
                var dataWords = data.words;
                // Unpad
                                var i = data.sigBytes - 1;
                while (!(dataWords[i >>> 2] >>> 24 - i % 4 * 8 & 255)) {
                    i--;
                }
                data.sigBytes = i + 1;
            }
        };
        return CryptoJS;
    });
    /***/}, 
/* 31 */
/* 32 */ 
/* 33 */ , 
/* 34 */ , 
/* 35 */ , 
/* 36 */ , 
/* 37 */ , 
/* 38 */ , 
/* 39 */ , 
/* 40 */ , 
/* 41 */ , 
/* 42 */ , 
/* 43 */ , 
/* 44 */ , 
/* 45 */
/*!************************************************************************!*\
  !*** C:/Users/Jack/Desktop/骑士人才网相关/Applet(3)最新版本/server/api-socket.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ , 
/* 45 */
/*!************************************************************************!*\
  !*** C:/Users/Jack/Desktop/骑士人才网相关/Applet(3)最新版本/server/api-socket.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ , function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 20));
    var _socket = _interopRequireDefault(__webpack_require__(/*! ../utils/socket.js */ 46));
    var _urlSocket = _interopRequireDefault(__webpack_require__(/*! ./url-socket.js */ 47));
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
        try {
            var info = gen[key](arg);
            var value = info.value;
        } catch (error) {
            error = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(error);
            reject(error);
            return;
        }
        if (info.done) {
            resolve(value);
        } else {
            Promise.resolve(value).then(_next, _throw);
        }
    }
    function _asyncToGenerator(fn) {
        return function() {
            var self = this, args = arguments;
            return new Promise(function(resolve, reject) {
                var gen = fn.apply(self, args);
                function _next(value) {
                    asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
                }
                function _throw(err) {
                    asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
                }
                _next(undefined);
            });
        };
    }
    var http = {};
    var _loop = function _loop(key) {
        var api = _urlSocket.default[key];
        http[key] = /* */ function() {
            var _ref = _asyncToGenerator(/* */ _regenerator.default.mark(function _callee(params) {
                var response;
                return _regenerator.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return _socket.default.globalRequest(api.url, api.method, params);

                          case 2:
                            response = _context.sent;
                            return _context.abrupt("return", response);

                          case 4:
                          case "end":
                            return _context.stop();
                        }
                    }
                }, _callee);
            }));
            return function(_x) {
                return _ref.apply(this, arguments);
            };
        }();
    };
    for (var key in _urlSocket.default) {
        _loop(key);
    }
    var _default = http;
    exports.default = _default;
    /***/}, 
/* 46 */
/*!*******************************************************************!*\
  !*** C:/Users/Jack/Desktop/骑士人才网相关/Applet(3)最新版本/utils/socket.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    /* WEBPACK VAR INJECTION */
    /* WEBPACK VAR INJECTION */    
    /* WEBPACK VAR INJECTION */
    /* WEBPACK VAR INJECTION */ (function(uni) {
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = void 0;
        var socket = {};
        var sb_url = "https://im.74cms.com";
        socket.globalRequest = function(url, method, data) {
            /*权限判断 因为有的接口请求头可能需要添加的参数不一样，所以这里做了区分
                                                     1 == 不通过access_token校验的接口
                                                     2 == 文件下载接口列表
                                                     3 == 验证码登录 */
            return uni.request({
                url: sb_url + url,
                method: method,
                data: data,
                header: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                dataType: "json"
            }).then(function(res) {
                console.log(res);
                if (res[1].data.status == 1 && res[1].statusCode == 200) {
                    return res[1].data;
                } else {
                    uni.showToast({
                        icon: "none",
                        title: res[1].data.msg
                    });
                }
            });
        };
        var _default = socket;
        exports.default = _default;
        /* WEBPACK VAR INJECTION */    }).call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"])
    /***/;
}, 
/* 47 */
/*!************************************************************************!*\
  !*** C:/Users/Jack/Desktop/骑士人才网相关/Applet(3)最新版本/server/url-socket.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var CONSTAPI = {
        // 聊天用户绑定
        bind: {
            url: "/bind",
            method: "POST"
        },
        // 聊天列表
        chatlist: {
            url: "/chatlist",
            method: "POST"
        },
        // 聊天对话列表
        messagelist: {
            url: "/messagelist",
            method: "POST"
        },
        // 聊天对话发送
        sendmsg: {
            url: "/sendmsg",
            method: "POST"
        },
        // 聊天图片发送
        uploadImg: {
            url: "/upload/image",
            method: "POST"
        },
        // 聊天对象是否在线
        online: {
            url: "/online",
            method: "POST"
        }
    };
    var _default = CONSTAPI;
    exports.default = _default;
    /***/}, 
/* 48 */
/* 49 */ 
/* 50 */ , 
/* 51 */ , 
/* 52 */ , 
/* 53 */ , 
/* 54 */ , 
/* 55 */ , 
/* 56 */
/*!************************************************************************!*\
  !*** C:/Users/Jack/Desktop/骑士人才网相关/Applet(3)最新版本/server/api-resume.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ , 
/* 56 */
/*!************************************************************************!*\
  !*** C:/Users/Jack/Desktop/骑士人才网相关/Applet(3)最新版本/server/api-resume.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ , function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 20));
    var _request = _interopRequireDefault(__webpack_require__(/*! ../utils/request.js */ 24));
    var _urlResume = _interopRequireDefault(__webpack_require__(/*! ./url-resume.js */ 57));
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
        try {
            var info = gen[key](arg);
            var value = info.value;
        } catch (error) {
            error = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(error);
            reject(error);
            return;
        }
        if (info.done) {
            resolve(value);
        } else {
            Promise.resolve(value).then(_next, _throw);
        }
    }
    function _asyncToGenerator(fn) {
        return function() {
            var self = this, args = arguments;
            return new Promise(function(resolve, reject) {
                var gen = fn.apply(self, args);
                function _next(value) {
                    asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
                }
                function _throw(err) {
                    asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
                }
                _next(undefined);
            });
        };
    }
    var http = {};
    var _loop = function _loop(key) {
        var api = _urlResume.default[key];
        http[key] = /* */ function() {
            var _ref = _asyncToGenerator(/* */ _regenerator.default.mark(function _callee(params, headers) {
                var response;
                return _regenerator.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return _request.default.globalRequest(api.url, api.method, params, headers);

                          case 2:
                            response = _context.sent;
                            return _context.abrupt("return", response);

                          case 4:
                          case "end":
                            return _context.stop();
                        }
                    }
                }, _callee);
            }));
            return function(_x, _x2) {
                return _ref.apply(this, arguments);
            };
        }();
    };
    for (var key in _urlResume.default) {
        _loop(key);
    }
    var _default = http;
    exports.default = _default;
    /***/}, 
/* 57 */
/*!************************************************************************!*\
  !*** C:/Users/Jack/Desktop/骑士人才网相关/Applet(3)最新版本/server/url-resume.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var CONSTAPI = {
        // 简历详情
        resumeDetails: {
            url: "index.php?m=Applet&a=resume_details&c=WxResume",
            method: "GET"
        },
        // 面试邀请
        jobsInterview: {
            url: "index.php?m=Applet&a=jobs_interview&c=WxResume",
            method: "GET"
        },
        // 删除面试邀请
        interviewDel: {
            url: "index.php?m=Applet&a=interview_del&c=WxResume",
            method: "GET"
        },
        // 我的投递
        myDelivery: {
            url: "index.php?m=Applet&a=my_delivery&c=WxResume",
            method: "GET"
        },
        // 删除我的投递
        jobsApplyDel: {
            url: "index.php?m=Applet&a=jobs_apply_del&c=WxResume",
            method: "GET"
        },
        // 对我感兴趣
        attentionMe: {
            url: "index.php?m=Applet&a=attention_me&c=WxResume",
            method: "GET"
        },
        // 删除对我感兴趣
        attentionMeDel: {
            url: "index.php?m=Applet&a=attention_me_del&c=WxResume",
            method: "GET"
        },
        // 简历基本信息添加
        ResumeBasicAdd: {
            url: "index.php?m=Applet&a=ResumeBasicAdd&c=WxResume",
            method: "POST"
        },
        // 简历基本信息添加
        ResumeExpAdd: {
            url: "index.php?m=Applet&a=ResumeExpAdd&c=WxResume",
            method: "POST"
        },
        // 当前简历id查询
        querypid: {
            url: "index.php?m=Applet&a=query_pid&c=WxResume",
            method: "POST"
        },
        // 筛选
        ResumeBasicChoice: {
            url: "index.php?m=Applet&a=ResumeBasicChoice&c=WxResume",
            method: "GET"
        },
        // 添加教育经历
        resumeEducation: {
            url: "index.php?m=Applet&a=resume_education&c=WxResume",
            method: "POST"
        },
        // 会显教育经历
        resumeDisplayEducation: {
            url: "index.php?m=Applet&a=resume_display_education&c=WxResume",
            method: "GET"
        },
        // 删除教育经历
        delEducation: {
            url: "index.php?m=Applet&a=del_education&c=WxResume",
            method: "POST"
        },
        // 求职意向回显
        resumeDisplayIntention: {
            url: "index.php?m=Applet&a=resume_display_intention&c=WxResume",
            method: "GET"
        },
        // 求职意向编辑
        resumeEditIntention: {
            url: "index.php?m=Applet&a=resume_edit_intention&c=WxResume",
            method: "POST"
        },
        // 工作经历添加/修改
        resumeWork: {
            url: "index.php?m=Applet&a=resume_work&c=WxResume",
            method: "POST"
        },
        // 工作经历回显
        resumeDisplayWork: {
            url: "index.php?m=Applet&a=resume_display_work&c=WxResume",
            method: "GET"
        },
        // 工作经历删除
        delWork: {
            url: "index.php?m=Applet&a=del_work&c=WxResume",
            method: "POST"
        },
        // 培训添加修改
        resumeTrain: {
            url: "index.php?m=Applet&a=resume_train&c=WxResume",
            method: "POST"
        },
        // 培训经历回显
        resumeDisplayTrain: {
            url: "index.php?m=Applet&a=resume_display_train&c=WxResume",
            method: "GET"
        },
        // 培训经历删除
        delTraining: {
            url: "index.php?m=Applet&a=del_training&c=WxResume",
            method: "POST"
        },
        // 项目经历添加修改
        resumeProject: {
            url: "index.php?m=Applet&a=resume_project&c=WxResume",
            method: "POST"
        },
        // 项目经历回显
        resumeDisplayProject: {
            url: "index.php?m=Applet&a=resume_display_project&c=WxResume",
            method: "GET"
        },
        // 项目经历删除
        delProject: {
            url: "index.php?m=Applet&a=del_project&c=WxResume",
            method: "POST"
        },
        // 自我描述添加修改
        resumeSpecialty: {
            url: "index.php?m=Applet&a=resume_specialty&c=WxResume",
            method: "POST"
        },
        // 个人描述回显
        resumeDisplaySpecialty: {
            url: "index.php?m=Applet&a=resume_display_specialty&c=WxResume",
            method: "GET"
        },
        // 证书添加
        resumeCertificate: {
            url: "index.php?m=Applet&a=resume_certificate&c=WxResume",
            method: "POST"
        },
        // 证书回显
        resumeDisplayCertificate: {
            url: "index.php?m=Applet&a=resume_display_certificate&c=WxResume",
            method: "GET"
        },
        // 证书删除
        delCredent: {
            url: "index.php?m=Applet&a=del_credent&c=WxResume",
            method: "POST"
        },
        // 语言添加修改
        resumeLanguage: {
            url: "index.php?m=Applet&a=resume_language&c=WxResume",
            method: "POST"
        },
        // 语言回显
        resumeDisplayLanguage: {
            url: "index.php?m=Applet&a=resume_display_language&c=WxResume",
            method: "GET"
        },
        // 语言删除
        delLanguage: {
            url: "index.php?m=Applet&a=del_language&c=WxResume",
            method: "POST"
        },
        // 特长标签保存
        resumeSpeciality: {
            url: "index.php?m=Applet&a=resume_speciality&c=WxResume",
            method: "POST"
        },
        // 标签回显
        resumeDisplaySpeciality: {
            url: "index.php?m=Applet&a=resume_display_speciality&c=WxResume",
            method: "GET"
        },
        // 照片作品
        resumeImg: {
            url: "index.php?m=Applet&a=resume_img&c=WxResume",
            method: "POST"
        },
        // 照片统计
        resumeImgCount: {
            url: "index.php?m=Applet&a=resume_img_count&c=WxResume",
            method: "GET"
        },
        // 图片保存数据库
        resumeImgSave: {
            url: "index.php?m=Applet&a=resume_img_save&c=WxResume",
            method: "POST"
        },
        // 我的作品回显
        resumeDisplayImg: {
            url: "index.php?m=Applet&a=resume_display_img&c=WxResume",
            method: "GET"
        },
        // 简历基本信息回显
        resumeDisplayBasis: {
            url: "index.php?m=Applet&a=resume_display_basis&c=WxResume",
            method: "GET"
        },
        // 简历基本信息编辑
        resumeEditBasis: {
            url: "index.php?m=Applet&a=resume_edit_basis&c=WxResume",
            method: "POST"
        },
        // 头像上传
        avatar: {
            url: "index.php?m=Applet&a=avatar&c=WxResume",
            method: "POST"
        },
        // 特长标签删除
        delSpeciality: {
            url: "index.php?m=Applet&a=del_speciality&c=WxResume",
            method: "POST"
        },
        // 我感兴趣的(职位收藏夹)
        jobsFavorites: {
            url: "index.php?m=Applet&a=jobs_favorites&c=WxResume",
            method: "GET"
        },
        // 删除我感兴趣的(职位收藏夹)
        jobsFavoritesDel: {
            url: "index.php?m=Applet&a=jobs_favorites_del&c=WxResume",
            method: "GET"
        },
        // 获取地区
        resumeEditResidence: {
            url: "index.php?m=Applet&a=resume_edit_residence&c=WxResume",
            method: "POST"
        },
        // 删除图片
        delImg: {
            url: "index.php?m=Applet&a=del_img&c=WxResume",
            method: "GET"
        }
    };
    var _default = CONSTAPI;
    exports.default = _default;
    /***/}, 
/* 58 */
/* 59 */ 
/* 60 */ , 
/* 61 */ , 
/* 62 */ , 
/* 63 */ , 
/* 64 */ , 
/* 65 */ , 
/* 66 */ , 
/* 67 */ , 
/* 68 */ , 
/* 69 */ , 
/* 70 */ , 
/* 71 */ , 
/* 72 */ , 
/* 73 */ , 
/* 74 */
/*!***************************************************************************!*\
  !*** C:/Users/Jack/Desktop/骑士人才网相关/Applet(3)最新版本/server/api-jobDeatil.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ , 
/* 74 */
/*!***************************************************************************!*\
  !*** C:/Users/Jack/Desktop/骑士人才网相关/Applet(3)最新版本/server/api-jobDeatil.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ , function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 20));
    var _request = _interopRequireDefault(__webpack_require__(/*! ../utils/request.js */ 24));
    var _urlJobDetail = _interopRequireDefault(__webpack_require__(/*! ./url-jobDetail.js */ 75));
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
        try {
            var info = gen[key](arg);
            var value = info.value;
        } catch (error) {
            error = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(error);
            reject(error);
            return;
        }
        if (info.done) {
            resolve(value);
        } else {
            Promise.resolve(value).then(_next, _throw);
        }
    }
    function _asyncToGenerator(fn) {
        return function() {
            var self = this, args = arguments;
            return new Promise(function(resolve, reject) {
                var gen = fn.apply(self, args);
                function _next(value) {
                    asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
                }
                function _throw(err) {
                    asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
                }
                _next(undefined);
            });
        };
    }
    var http = {};
    var _loop = function _loop(key) {
        var api = _urlJobDetail.default[key];
        http[key] = /* */ function() {
            var _ref = _asyncToGenerator(/* */ _regenerator.default.mark(function _callee(params, headers) {
                var response;
                return _regenerator.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return _request.default.globalRequest(api.url, api.method, params, headers);

                          case 2:
                            response = _context.sent;
                            return _context.abrupt("return", response);

                          case 4:
                          case "end":
                            return _context.stop();
                        }
                    }
                }, _callee);
            }));
            return function(_x, _x2) {
                return _ref.apply(this, arguments);
            };
        }();
    };
    for (var key in _urlJobDetail.default) {
        _loop(key);
    }
    var _default = http;
    exports.default = _default;
    /***/}, 
/* 75 */
/*!***************************************************************************!*\
  !*** C:/Users/Jack/Desktop/骑士人才网相关/Applet(3)最新版本/server/url-jobDetail.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var CONSTAPI = {
        // 职位详情
        jobsDetails: {
            url: "index.php?m=Applet&a=jobs_details&c=WxJobsDetails",
            method: "GET"
        },
        // 举报职位
        reportJobs: {
            url: "index.php?m=Applet&a=report_jobs&c=WxJobsDetails",
            method: "GET"
        },
        // 简历投递后查询职位电话
        telephone: {
            url: "index.php?m=Applet&a=telephone&c=WxJobsDetails",
            method: "GET"
        }
    };
    var _default = CONSTAPI;
    exports.default = _default;
    /***/}, 
/* 76 */
/* 77 */ 
/* 78 */ , 
/* 79 */ , 
/* 80 */ , 
/* 81 */ , 
/* 82 */ , 
/* 83 */ , 
/* 84 */
/*!*********************************************************************!*\
  !*** C:/Users/Jack/Desktop/骑士人才网相关/Applet(3)最新版本/server/api-job.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ , 
/* 84 */
/*!*********************************************************************!*\
  !*** C:/Users/Jack/Desktop/骑士人才网相关/Applet(3)最新版本/server/api-job.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ , function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 20));
    var _request = _interopRequireDefault(__webpack_require__(/*! ../utils/request.js */ 24));
    var _urlJob = _interopRequireDefault(__webpack_require__(/*! ./url-job.js */ 85));
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
        try {
            var info = gen[key](arg);
            var value = info.value;
        } catch (error) {
            error = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(error);
            reject(error);
            return;
        }
        if (info.done) {
            resolve(value);
        } else {
            Promise.resolve(value).then(_next, _throw);
        }
    }
    function _asyncToGenerator(fn) {
        return function() {
            var self = this, args = arguments;
            return new Promise(function(resolve, reject) {
                var gen = fn.apply(self, args);
                function _next(value) {
                    asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
                }
                function _throw(err) {
                    asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
                }
                _next(undefined);
            });
        };
    }
    var http = {};
    var _loop = function _loop(key) {
        var api = _urlJob.default[key];
        http[key] = /* */ function() {
            var _ref = _asyncToGenerator(/* */ _regenerator.default.mark(function _callee(params, headers) {
                var response;
                return _regenerator.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return _request.default.globalRequest(api.url, api.method, params, headers);

                          case 2:
                            response = _context.sent;
                            return _context.abrupt("return", response);

                          case 4:
                          case "end":
                            return _context.stop();
                        }
                    }
                }, _callee);
            }));
            return function(_x, _x2) {
                return _ref.apply(this, arguments);
            };
        }();
    };
    for (var key in _urlJob.default) {
        _loop(key);
    }
    var _default = http;
    exports.default = _default;
    /***/}, 
/* 85 */
/*!*********************************************************************!*\
  !*** C:/Users/Jack/Desktop/骑士人才网相关/Applet(3)最新版本/server/url-job.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var CONSTAPI = {
        // 职位列表
        searchJobsList: {
            url: "index.php?m=Applet&a=search_jobs_list&c=WxJobsSearch",
            method: "GET"
        },
        // 地区筛选
        searchJobsRegion: {
            url: "index.php?m=Applet&a=search_jobs_region&c=WxJobsSearch",
            method: "GET"
        },
        // 职位筛选
        searchJobsPosition: {
            url: "index.php?m=Applet&a=search_jobs_position&c=WxJobsSearch",
            method: "GET"
        },
        // 薪资筛选
        searchJobsSalary: {
            url: "index.php?m=Applet&a=search_jobs_salary&c=WxJobsSearch",
            method: "GET"
        },
        // 更多筛选条件
        searchJobsMore: {
            url: "index.php?m=Applet&a=search_jobs_more&c=WxJobsSearch",
            method: "GET"
        },
        // 同城招聘
        nearbyJobsList: {
            url: "index.php?m=Applet&a=nearby_jobs_list&c=WxIndex",
            method: "GET"
        },
        // 名企推荐
        searchCompanyList: {
            url: "index.php?m=Applet&a=search_company_list&c=WxCompanySearch",
            method: "GET"
        },
        // 广告位名企推荐
        ad_famous_list: {
            url: "index.php?m=Applet&a=ad_famous_list&c=WxCompanySearch",
            method: "GET"
        },
        // 企业搜索条件 行业
        searchCompanyPosition: {
            url: "index.php?m=Applet&a=search_company_position&c=WxCompanySearch",
            method: "GET"
        },
        // 企业搜索条件 性质
        searchCompanyNature: {
            url: "index.php?m=Applet&a=search_company_nature&c=WxCompanySearch",
            method: "GET"
        },
        // 企业搜索条件 规模
        searchCompanyScale: {
            url: "index.php?m=Applet&a=search_company_scale&c=WxCompanySearch",
            method: "GET"
        },
        // 判断是否添加过订阅
        haveSubscribe: {
            url: "index.php?m=Applet&a=have_subscribe&c=WxSubscribe",
            method: "GET"
        },
        // 查看订阅
        subscribeQuery: {
            url: "index.php?m=Applet&a=subscribe_query&c=WxSubscribe",
            method: "GET"
        },
        // 添加订阅
        subscribeAdd: {
            url: "index.php?m=Applet&a=subscribe_add&c=WxSubscribe",
            method: "GET"
        },
        // 修改订阅
        subscribeEdit: {
            url: "index.php?m=Applet&a=subscribe_edit&c=WxSubscribe",
            method: "GET"
        },
        // 删除订阅
        subscribeDel: {
            url: "index.php?m=Applet&a=subscribe_del&c=WxSubscribe",
            method: "GET"
        },
        // 企业详情
        companysDetails: {
            url: "index.php?m=Applet&a=companys_details&c=WxCompanyDetails",
            method: "GET"
        },
        // 企业实地认证报告
        companyReport: {
            url: "index.php?m=Applet&a=company_report&c=WxCompanyDetails",
            method: "GET"
        },
        // 微信模板id
        AppletTemplate: {
            url: "index.php?m=Applet&a=Applet_template&c=WxSubscribe",
            method: "GET"
        },
        // 百度判断是否添加过订阅
        bdhaveSubscribe: {
            url: "index.php?m=Applet&a=have_subscribe&c=BaiduSubscribe",
            method: "GET"
        },
        // 百度查看订阅
        bdsubscribeQuery: {
            url: "index.php?m=Applet&a=subscribe_query&c=BaiduSubscribe",
            method: "GET"
        },
        // 百度添加订阅
        bdsubscribeAdd: {
            url: "index.php?m=Applet&a=subscribe_add&c=BaiduSubscribe",
            method: "GET"
        },
        // 百度修改订阅
        bdsubscribeEdit: {
            url: "index.php?m=Applet&a=subscribe_edit&c=BaiduSubscribe",
            method: "GET"
        },
        // 百度删除订阅
        bdsubscribeDel: {
            url: "index.php?m=Applet&a=subscribe_del&c=BaiduSubscribe",
            method: "GET"
        },
        // 微信订阅模板
        weixinappTemplate: {
            url: "index.php?m=Applet&a=weixinapp_template&c=WxSubscribe",
            method: "GET"
        },
        // 微信订阅按钮清除
        authorize: {
            url: "index.php?m=Applet&a=authorize&c=WxSubscribe",
            method: "GET"
        },
        // 学历经验添加筛选条件
        ResumeBasicChoice: {
            url: "index.php?m=Applet&a=ResumeBasicChoice&c=WxResume",
            method: "GET"
        },
        // 默认地区
        defaultDistrict: {
            url: "index.php?m=Applet&a=default_district&c=WxJobsSearch",
            method: "GET"
        },
        // 企业详情页面——在招职位
        companyJobs: {
            url: "index.php?m=Applet&a=company_jobs&c=WxCompanyDetails",
            method: "GET"
        },
        // 个人首页同城职位——距离下拉筛选条件
        nearbyJobsSelect: {
            url: "index.php?m=Applet&a=nearby_jobs_select&c=WxIndex",
            method: "GET"
        }
    };
    var _default = CONSTAPI;
    exports.default = _default;
    /***/}, 
/* 86 */
/* 87 */ 
/* 88 */ , 
/* 89 */ , 
/* 90 */ , 
/* 91 */ , 
/* 92 */ , 
/* 93 */ , 
/* 94 */
/*!************************************************************************!*\
  !*** C:/Users/Jack/Desktop/骑士人才网相关/Applet(3)最新版本/server/api-upload.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ , 
/* 94 */
/*!************************************************************************!*\
  !*** C:/Users/Jack/Desktop/骑士人才网相关/Applet(3)最新版本/server/api-upload.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ , function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 20));
    var _upload = _interopRequireDefault(__webpack_require__(/*! ../utils/upload.js */ 95));
    var _urlUpload = _interopRequireDefault(__webpack_require__(/*! ./url-upload.js */ 96));
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
        try {
            var info = gen[key](arg);
            var value = info.value;
        } catch (error) {
            error = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(error);
            reject(error);
            return;
        }
        if (info.done) {
            resolve(value);
        } else {
            Promise.resolve(value).then(_next, _throw);
        }
    }
    function _asyncToGenerator(fn) {
        return function() {
            var self = this, args = arguments;
            return new Promise(function(resolve, reject) {
                var gen = fn.apply(self, args);
                function _next(value) {
                    asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
                }
                function _throw(err) {
                    asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
                }
                _next(undefined);
            });
        };
    }
    var http = {};
    var _loop = function _loop(key) {
        var api = _urlUpload.default[key];
        http[key] = /* */ function() {
            var _ref = _asyncToGenerator(/* */ _regenerator.default.mark(function _callee(params, headers, formData) {
                var response;
                return _regenerator.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return _upload.default.globalRequest(api.url, params, headers, formData);

                          case 2:
                            response = _context.sent;
                            return _context.abrupt("return", response);

                          case 4:
                          case "end":
                            return _context.stop();
                        }
                    }
                }, _callee);
            }));
            return function(_x, _x2, _x3) {
                return _ref.apply(this, arguments);
            };
        }();
    };
    for (var key in _urlUpload.default) {
        _loop(key);
    }
    var _default = http;
    exports.default = _default;
    /***/}, 
/* 95 */
/*!*******************************************************************!*\
  !*** C:/Users/Jack/Desktop/骑士人才网相关/Applet(3)最新版本/utils/upload.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    /* WEBPACK VAR INJECTION */
    /* WEBPACK VAR INJECTION */    
    /* WEBPACK VAR INJECTION */
    /* WEBPACK VAR INJECTION */ (function(uni) {
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = void 0;
        var _config = _interopRequireDefault(__webpack_require__(/*! ./config.js */ 25));
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        var upload = {};
        upload.globalRequest = function(url, filepath, headers, formData) {
            /*权限判断 因为有的接口请求头可能需要添加的参数不一样，所以这里做了区分
                                                                    1 == 不通过access_token校验的接口
                                                                    2 == 文件下载接口列表
                                                                    3 == 验证码登录 */
            return uni.uploadFile({
                url: _config.default + url,
                //仅为示例，非真实的接口地址
                filePath: filepath,
                name: "file",
                header: headers,
                formData: formData
            }).then(function(res) {
                var tdata = res[1].data;
                if (typeof tdata === "string") {
                    var json = JSON.parse(tdata);
                    if (json.status == 200 && res[1].statusCode == 200) {
                        if (json.data) return json.data; else return json;
                    } else if (json.status == 0 && res[1].statusCode == 200) {
                        uni.showToast({
                            title: json.msg,
                            icon: "none"
                        });
                    } else {
                        throw json;
                    }
                } else {
                    if (res[1].data.status == 200 && res[1].statusCode == 200) {
                        if (res[1].data.data) return res[1].data.data; else return res[1].data;
                    } else if (res[1].data.status == 0 && res[1].statusCode == 200) {
                        uni.showToast({
                            title: res[1].data.msg,
                            icon: "none"
                        });
                    } else {
                        throw res[1].data;
                    }
                }
            }).catch(function(parmas) {
                switch (parmas.status) {
                  case 401:
                  case 402:
                    uni.clearStorageSync();
                    if (type == 1) {
                        uni.showToast({
                            title: "请登录",
                            icon: "none"
                        });
                    } else {
                        uni.navigateTo({
                            url: "/pages/personal/myLogin"
                        });
                    }
                    break;

                  default:
                    uni.showToast({
                        title: parmas.msg,
                        icon: "none"
                    });
                    return Promise.reject();
                    break;
                }
            });
        };
        var _default = upload;
        exports.default = _default;
        /* WEBPACK VAR INJECTION */    }).call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"])
    /***/;
}, 
/* 96 */
/*!************************************************************************!*\
  !*** C:/Users/Jack/Desktop/骑士人才网相关/Applet(3)最新版本/server/url-upload.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var CONSTAPI = {
        // 百度作品上传
        resumeImgUpload: {
            url: "index.php?m=Applet&a=resume_img_upload&c=WxResume"
        },
        // 百度头像上传
        photoImgUpload: {
            url: "index.php?m=Applet&a=photo_img_upload&c=WxResume"
        },
        // 百度聊天图片上传
        imgtobase64: {
            url: "index.php?m=Applet&a=imgtobase64&c=WxChat"
        },
        // 企业Logo 上传
        logoImg: {
            url: "index.php?m=Applet&a=logo_img&c=WxCompanyInfo"
        },
        // 企业风采图片上传
        companyImg: {
            url: "index.php?m=Applet&a=company_img&c=WxCompanyInfo"
        },
        // 企业营业执照 上传
        companyCertificateImg: {
            url: "index.php?m=Applet&a=company_certificate_img&c=WxCMemberCenter"
        }
    };
    var _default = CONSTAPI;
    exports.default = _default;
    /***/}, 
/* 97 */
/*!***********************************************************************************************!*\
  !*** C:/Users/Jack/Desktop/骑士人才网相关/Applet(3)最新版本/js_sdk/gsq-image-tools/image-tools/index.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.pathToBase64 = pathToBase64;
    exports.base64ToPath = base64ToPath;
    function getLocalFilePath(path) {
        if (path.indexOf("_www") === 0 || path.indexOf("_doc") === 0 || path.indexOf("_documents") === 0 || path.indexOf("_downloads") === 0) {
            return path;
        }
        if (path.indexOf("file://") === 0) {
            return path;
        }
        if (path.indexOf("/storage/emulated/0/") === 0) {
            return path;
        }
        if (path.indexOf("/") === 0) {
            var localFilePath = plus.io.convertAbsoluteFileSystem(path);
            if (localFilePath !== path) {
                return localFilePath;
            } else {
                path = path.substr(1);
            }
        }
        return "_www/" + path;
    }
    function pathToBase64(path) {
        return new Promise(function(resolve, reject) {
            if (typeof window === "object" && "document" in window) {
                var canvas = document.createElement("canvas");
                var c2x = canvas.getContext("2d");
                var img = new Image();
                img.onload = function() {
                    canvas.width = img.width;
                    canvas.height = img.height;
                    c2x.drawImage(img, 0, 0);
                    resolve(canvas.toDataURL());
                };
                img.onerror = reject;
                img.src = path;
                return;
            }
            if (typeof plus === "object") {
                plus.io.resolveLocalFileSystemURL(getLocalFilePath(path), function(entry) {
                    entry.file(function(file) {
                        var fileReader = new plus.io.FileReader();
                        fileReader.onload = function(data) {
                            resolve(data.target.result);
                        };
                        fileReader.onerror = function(error) {
                            reject(error);
                        };
                        fileReader.readAsDataURL(file);
                    }, function(error) {
                        reject(error);
                    });
                }, function(error) {
                    reject(error);
                });
                return;
            }
            if (typeof wx === "object" && wx.canIUse("getFileSystemManager")) {
                wx.getFileSystemManager().readFile({
                    filePath: path,
                    encoding: "base64",
                    success: function success(res) {
                        resolve("data:image/png;base64," + res.data);
                    },
                    fail: function fail(error) {
                        reject(error);
                    }
                });
                return;
            }
            reject(new Error("not support"));
        });
    }
    function base64ToPath(base64) {
        return new Promise(function(resolve, reject) {
            if (typeof window === "object" && "document" in window) {
                base64 = base64.split(",");
                var type = base64[0].match(/:(.*?);/)[1];
                var str = atob(base64[1]);
                var n = str.length;
                var array = new Uint8Array(n);
                while (n--) {
                    array[n] = str.charCodeAt(n);
                }
                return resolve((window.URL || window.webkitURL).createObjectURL(new Blob([ array ], {
                    type: type
                })));
            }
            var extName = base64.match(/data\:\S+\/(\S+);/);
            if (extName) {
                extName = extName[1];
            } else {
                reject(new Error("base64 error"));
            }
            var fileName = Date.now() + "." + extName;
            if (typeof plus === "object") {
                var bitmap = new plus.nativeObj.Bitmap("bitmap" + Date.now());
                bitmap.loadBase64Data(base64, function() {
                    var filePath = "_doc/uniapp_temp/" + fileName;
                    bitmap.save(filePath, {}, function() {
                        bitmap.clear();
                        resolve(filePath);
                    }, function(error) {
                        bitmap.clear();
                        reject(error);
                    });
                }, function(error) {
                    bitmap.clear();
                    reject(error);
                });
                return;
            }
            if (typeof wx === "object" && wx.canIUse("getFileSystemManager")) {
                var filePath = wx.env.USER_DATA_PATH + "/" + fileName;
                wx.getFileSystemManager().writeFile({
                    filePath: filePath,
                    data: base64.replace(/^data:\S+\/\S+;base64,/, ""),
                    encoding: "base64",
                    success: function success() {
                        resolve(filePath);
                    },
                    fail: function fail(error) {
                        reject(error);
                    }
                });
                return;
            }
            reject(new Error("not support"));
        });
    }
    /***/} ] ]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map