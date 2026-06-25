var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};

(global.webpackJsonp = global.webpackJsonp || []).push([ [ "common/vendor" ], {
    "227c": function(e, t) {
        t.ad = {
            createRewardedVideoAd: "adunit-a0dcd312aaed16ac",
            createInterstitialAd: "adunit-76968da273ee3522",
            bannerAd: "adunit-01c696893c73c4ed",
            cardAd: "adunit-2009c04137f9a56c"
        }, t.appinf = {
            appname: "精选趣味测"
        };
    },
    2563: function _(module, exports, __webpack_require__) {
        (function(process, global) {
            var __WEBPACK_AMD_DEFINE_RESULT__;
            !function() {
                function Md5(e) {
                    if (e) blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0, 
                    this.blocks = blocks, this.buffer8 = buffer8; else if (ARRAY_BUFFER) {
                        var t = new ArrayBuffer(68);
                        this.buffer8 = new Uint8Array(t), this.blocks = new Uint32Array(t);
                    } else this.blocks = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
                    this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = this.hBytes = 0, 
                    this.finalized = this.hashed = !1, this.first = !0;
                }
                var ERROR = "input is invalid type", WINDOW = "object" === ("undefined" == typeof window ? "undefined" : _typeof(window)), root = WINDOW ? window : {};
                root.JS_MD5_NO_WINDOW && (WINDOW = !1);
                var WEB_WORKER = !WINDOW && "object" === ("undefined" == typeof self ? "undefined" : _typeof(self)), NODE_JS = !root.JS_MD5_NO_NODE_JS && "object" === (void 0 === process ? "undefined" : _typeof(process)) && process.versions && process.versions.node;
                NODE_JS ? root = global : WEB_WORKER && (root = self);
                var COMMON_JS = !root.JS_MD5_NO_COMMON_JS && "object" === (void 0 === module ? "undefined" : _typeof(module)) && module.exports, AMD = __webpack_require__("3c35"), ARRAY_BUFFER = !root.JS_MD5_NO_ARRAY_BUFFER && "undefined" != typeof ArrayBuffer, HEX_CHARS = "0123456789abcdef".split(""), EXTRA = [ 128, 32768, 8388608, -2147483648 ], SHIFT = [ 0, 8, 16, 24 ], OUTPUT_TYPES = [ "hex", "array", "digest", "buffer", "arrayBuffer", "base64" ], BASE64_ENCODE_CHAR = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), blocks = [], buffer8;
                if (ARRAY_BUFFER) {
                    var buffer = new ArrayBuffer(68);
                    buffer8 = new Uint8Array(buffer), blocks = new Uint32Array(buffer);
                }
                !root.JS_MD5_NO_NODE_JS && Array.isArray || (Array.isArray = function(e) {
                    return "[object Array]" === Object.prototype.toString.call(e);
                }), !ARRAY_BUFFER || !root.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW && ArrayBuffer.isView || (ArrayBuffer.isView = function(e) {
                    return "object" === (void 0 === e ? "undefined" : _typeof(e)) && e.buffer && e.buffer.constructor === ArrayBuffer;
                });
                var createOutputMethod = function(e) {
                    return function(t) {
                        return new Md5(!0).update(t)[e]();
                    };
                }, createMethod = function() {
                    var e = createOutputMethod("hex");
                    NODE_JS && (e = nodeWrap(e)), e.create = function() {
                        return new Md5();
                    }, e.update = function(t) {
                        return e.create().update(t);
                    };
                    for (var t = 0; t < OUTPUT_TYPES.length; ++t) {
                        var n = OUTPUT_TYPES[t];
                        e[n] = createOutputMethod(n);
                    }
                    return e;
                }, nodeWrap = function nodeWrap(method) {
                    var crypto = eval("require('crypto')"), Buffer = eval("require('buffer').Buffer"), nodeMethod = function(e) {
                        if ("string" == typeof e) return crypto.createHash("md5").update(e, "utf8").digest("hex");
                        if (null === e || void 0 === e) throw ERROR;
                        return e.constructor === ArrayBuffer && (e = new Uint8Array(e)), Array.isArray(e) || ArrayBuffer.isView(e) || e.constructor === Buffer ? crypto.createHash("md5").update(new Buffer(e)).digest("hex") : method(e);
                    };
                    return nodeMethod;
                };
                Md5.prototype.update = function(e) {
                    if (!this.finalized) {
                        var t, n = void 0 === e ? "undefined" : _typeof(e);
                        if ("string" !== n) {
                            if ("object" !== n) throw ERROR;
                            if (null === e) throw ERROR;
                            if (ARRAY_BUFFER && e.constructor === ArrayBuffer) e = new Uint8Array(e); else if (!(Array.isArray(e) || ARRAY_BUFFER && ArrayBuffer.isView(e))) throw ERROR;
                            t = !0;
                        }
                        for (var r, o, i = 0, s = e.length, a = this.blocks, c = this.buffer8; i < s; ) {
                            if (this.hashed && (this.hashed = !1, a[0] = a[16], a[16] = a[1] = a[2] = a[3] = a[4] = a[5] = a[6] = a[7] = a[8] = a[9] = a[10] = a[11] = a[12] = a[13] = a[14] = a[15] = 0), 
                            t) if (ARRAY_BUFFER) for (o = this.start; i < s && o < 64; ++i) c[o++] = e[i]; else for (o = this.start; i < s && o < 64; ++i) a[o >> 2] |= e[i] << SHIFT[3 & o++]; else if (ARRAY_BUFFER) for (o = this.start; i < s && o < 64; ++i) (r = e.charCodeAt(i)) < 128 ? c[o++] = r : r < 2048 ? (c[o++] = 192 | r >> 6, 
                            c[o++] = 128 | 63 & r) : r < 55296 || r >= 57344 ? (c[o++] = 224 | r >> 12, c[o++] = 128 | r >> 6 & 63, 
                            c[o++] = 128 | 63 & r) : (r = 65536 + ((1023 & r) << 10 | 1023 & e.charCodeAt(++i)), 
                            c[o++] = 240 | r >> 18, c[o++] = 128 | r >> 12 & 63, c[o++] = 128 | r >> 6 & 63, 
                            c[o++] = 128 | 63 & r); else for (o = this.start; i < s && o < 64; ++i) (r = e.charCodeAt(i)) < 128 ? a[o >> 2] |= r << SHIFT[3 & o++] : r < 2048 ? (a[o >> 2] |= (192 | r >> 6) << SHIFT[3 & o++], 
                            a[o >> 2] |= (128 | 63 & r) << SHIFT[3 & o++]) : r < 55296 || r >= 57344 ? (a[o >> 2] |= (224 | r >> 12) << SHIFT[3 & o++], 
                            a[o >> 2] |= (128 | r >> 6 & 63) << SHIFT[3 & o++], a[o >> 2] |= (128 | 63 & r) << SHIFT[3 & o++]) : (r = 65536 + ((1023 & r) << 10 | 1023 & e.charCodeAt(++i)), 
                            a[o >> 2] |= (240 | r >> 18) << SHIFT[3 & o++], a[o >> 2] |= (128 | r >> 12 & 63) << SHIFT[3 & o++], 
                            a[o >> 2] |= (128 | r >> 6 & 63) << SHIFT[3 & o++], a[o >> 2] |= (128 | 63 & r) << SHIFT[3 & o++]);
                            this.lastByteIndex = o, this.bytes += o - this.start, o >= 64 ? (this.start = o - 64, 
                            this.hash(), this.hashed = !0) : this.start = o;
                        }
                        return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0, 
                        this.bytes = this.bytes % 4294967296), this;
                    }
                }, Md5.prototype.finalize = function() {
                    if (!this.finalized) {
                        this.finalized = !0;
                        var e = this.blocks, t = this.lastByteIndex;
                        e[t >> 2] |= EXTRA[3 & t], t >= 56 && (this.hashed || this.hash(), e[0] = e[16], 
                        e[16] = e[1] = e[2] = e[3] = e[4] = e[5] = e[6] = e[7] = e[8] = e[9] = e[10] = e[11] = e[12] = e[13] = e[14] = e[15] = 0), 
                        e[14] = this.bytes << 3, e[15] = this.hBytes << 3 | this.bytes >>> 29, this.hash();
                    }
                }, Md5.prototype.hash = function() {
                    var e, t, n, r, o, i, s = this.blocks;
                    this.first ? (e = s[0] - 680876937, e = (e << 7 | e >>> 25) - 271733879 << 0, r = (-1732584194 ^ 2004318071 & e) + s[1] - 117830708, 
                    r = (r << 12 | r >>> 20) + e << 0, n = (-271733879 ^ r & (-271733879 ^ e)) + s[2] - 1126478375, 
                    n = (n << 17 | n >>> 15) + r << 0, t = (e ^ n & (r ^ e)) + s[3] - 1316259209, t = (t << 22 | t >>> 10) + n << 0) : (e = this.h0, 
                    t = this.h1, n = this.h2, r = this.h3, e += (r ^ t & (n ^ r)) + s[0] - 680876936, 
                    e = (e << 7 | e >>> 25) + t << 0, r += (n ^ e & (t ^ n)) + s[1] - 389564586, r = (r << 12 | r >>> 20) + e << 0, 
                    n += (t ^ r & (e ^ t)) + s[2] + 606105819, n = (n << 17 | n >>> 15) + r << 0, t += (e ^ n & (r ^ e)) + s[3] - 1044525330, 
                    t = (t << 22 | t >>> 10) + n << 0), t = ((t += ((e = ((e += (r ^ t & (n ^ r)) + s[4] - 176418897) << 7 | e >>> 25) + t << 0) ^ (n = ((n += (t ^ (r = ((r += (n ^ e & (t ^ n)) + s[5] + 1200080426) << 12 | r >>> 20) + e << 0) & (e ^ t)) + s[6] - 1473231341) << 17 | n >>> 15) + r << 0) & (r ^ e)) + s[7] - 45705983) << 22 | t >>> 10) + n << 0, 
                    t = ((t += ((e = ((e += (r ^ t & (n ^ r)) + s[8] + 1770035416) << 7 | e >>> 25) + t << 0) ^ (n = ((n += (t ^ (r = ((r += (n ^ e & (t ^ n)) + s[9] - 1958414417) << 12 | r >>> 20) + e << 0) & (e ^ t)) + s[10] - 42063) << 17 | n >>> 15) + r << 0) & (r ^ e)) + s[11] - 1990404162) << 22 | t >>> 10) + n << 0, 
                    t = ((t += ((e = ((e += (r ^ t & (n ^ r)) + s[12] + 1804603682) << 7 | e >>> 25) + t << 0) ^ (n = ((n += (t ^ (r = ((r += (n ^ e & (t ^ n)) + s[13] - 40341101) << 12 | r >>> 20) + e << 0) & (e ^ t)) + s[14] - 1502002290) << 17 | n >>> 15) + r << 0) & (r ^ e)) + s[15] + 1236535329) << 22 | t >>> 10) + n << 0, 
                    t = ((t += ((r = ((r += (t ^ n & ((e = ((e += (n ^ r & (t ^ n)) + s[1] - 165796510) << 5 | e >>> 27) + t << 0) ^ t)) + s[6] - 1069501632) << 9 | r >>> 23) + e << 0) ^ e & ((n = ((n += (e ^ t & (r ^ e)) + s[11] + 643717713) << 14 | n >>> 18) + r << 0) ^ r)) + s[0] - 373897302) << 20 | t >>> 12) + n << 0, 
                    t = ((t += ((r = ((r += (t ^ n & ((e = ((e += (n ^ r & (t ^ n)) + s[5] - 701558691) << 5 | e >>> 27) + t << 0) ^ t)) + s[10] + 38016083) << 9 | r >>> 23) + e << 0) ^ e & ((n = ((n += (e ^ t & (r ^ e)) + s[15] - 660478335) << 14 | n >>> 18) + r << 0) ^ r)) + s[4] - 405537848) << 20 | t >>> 12) + n << 0, 
                    t = ((t += ((r = ((r += (t ^ n & ((e = ((e += (n ^ r & (t ^ n)) + s[9] + 568446438) << 5 | e >>> 27) + t << 0) ^ t)) + s[14] - 1019803690) << 9 | r >>> 23) + e << 0) ^ e & ((n = ((n += (e ^ t & (r ^ e)) + s[3] - 187363961) << 14 | n >>> 18) + r << 0) ^ r)) + s[8] + 1163531501) << 20 | t >>> 12) + n << 0, 
                    t = ((t += ((r = ((r += (t ^ n & ((e = ((e += (n ^ r & (t ^ n)) + s[13] - 1444681467) << 5 | e >>> 27) + t << 0) ^ t)) + s[2] - 51403784) << 9 | r >>> 23) + e << 0) ^ e & ((n = ((n += (e ^ t & (r ^ e)) + s[7] + 1735328473) << 14 | n >>> 18) + r << 0) ^ r)) + s[12] - 1926607734) << 20 | t >>> 12) + n << 0, 
                    t = ((t += ((i = (r = ((r += ((o = t ^ n) ^ (e = ((e += (o ^ r) + s[5] - 378558) << 4 | e >>> 28) + t << 0)) + s[8] - 2022574463) << 11 | r >>> 21) + e << 0) ^ e) ^ (n = ((n += (i ^ t) + s[11] + 1839030562) << 16 | n >>> 16) + r << 0)) + s[14] - 35309556) << 23 | t >>> 9) + n << 0, 
                    t = ((t += ((i = (r = ((r += ((o = t ^ n) ^ (e = ((e += (o ^ r) + s[1] - 1530992060) << 4 | e >>> 28) + t << 0)) + s[4] + 1272893353) << 11 | r >>> 21) + e << 0) ^ e) ^ (n = ((n += (i ^ t) + s[7] - 155497632) << 16 | n >>> 16) + r << 0)) + s[10] - 1094730640) << 23 | t >>> 9) + n << 0, 
                    t = ((t += ((i = (r = ((r += ((o = t ^ n) ^ (e = ((e += (o ^ r) + s[13] + 681279174) << 4 | e >>> 28) + t << 0)) + s[0] - 358537222) << 11 | r >>> 21) + e << 0) ^ e) ^ (n = ((n += (i ^ t) + s[3] - 722521979) << 16 | n >>> 16) + r << 0)) + s[6] + 76029189) << 23 | t >>> 9) + n << 0, 
                    t = ((t += ((i = (r = ((r += ((o = t ^ n) ^ (e = ((e += (o ^ r) + s[9] - 640364487) << 4 | e >>> 28) + t << 0)) + s[12] - 421815835) << 11 | r >>> 21) + e << 0) ^ e) ^ (n = ((n += (i ^ t) + s[15] + 530742520) << 16 | n >>> 16) + r << 0)) + s[2] - 995338651) << 23 | t >>> 9) + n << 0, 
                    t = ((t += ((r = ((r += (t ^ ((e = ((e += (n ^ (t | ~r)) + s[0] - 198630844) << 6 | e >>> 26) + t << 0) | ~n)) + s[7] + 1126891415) << 10 | r >>> 22) + e << 0) ^ ((n = ((n += (e ^ (r | ~t)) + s[14] - 1416354905) << 15 | n >>> 17) + r << 0) | ~e)) + s[5] - 57434055) << 21 | t >>> 11) + n << 0, 
                    t = ((t += ((r = ((r += (t ^ ((e = ((e += (n ^ (t | ~r)) + s[12] + 1700485571) << 6 | e >>> 26) + t << 0) | ~n)) + s[3] - 1894986606) << 10 | r >>> 22) + e << 0) ^ ((n = ((n += (e ^ (r | ~t)) + s[10] - 1051523) << 15 | n >>> 17) + r << 0) | ~e)) + s[1] - 2054922799) << 21 | t >>> 11) + n << 0, 
                    t = ((t += ((r = ((r += (t ^ ((e = ((e += (n ^ (t | ~r)) + s[8] + 1873313359) << 6 | e >>> 26) + t << 0) | ~n)) + s[15] - 30611744) << 10 | r >>> 22) + e << 0) ^ ((n = ((n += (e ^ (r | ~t)) + s[6] - 1560198380) << 15 | n >>> 17) + r << 0) | ~e)) + s[13] + 1309151649) << 21 | t >>> 11) + n << 0, 
                    t = ((t += ((r = ((r += (t ^ ((e = ((e += (n ^ (t | ~r)) + s[4] - 145523070) << 6 | e >>> 26) + t << 0) | ~n)) + s[11] - 1120210379) << 10 | r >>> 22) + e << 0) ^ ((n = ((n += (e ^ (r | ~t)) + s[2] + 718787259) << 15 | n >>> 17) + r << 0) | ~e)) + s[9] - 343485551) << 21 | t >>> 11) + n << 0, 
                    this.first ? (this.h0 = e + 1732584193 << 0, this.h1 = t - 271733879 << 0, this.h2 = n - 1732584194 << 0, 
                    this.h3 = r + 271733878 << 0, this.first = !1) : (this.h0 = this.h0 + e << 0, this.h1 = this.h1 + t << 0, 
                    this.h2 = this.h2 + n << 0, this.h3 = this.h3 + r << 0);
                }, Md5.prototype.hex = function() {
                    this.finalize();
                    var e = this.h0, t = this.h1, n = this.h2, r = this.h3;
                    return HEX_CHARS[e >> 4 & 15] + HEX_CHARS[15 & e] + HEX_CHARS[e >> 12 & 15] + HEX_CHARS[e >> 8 & 15] + HEX_CHARS[e >> 20 & 15] + HEX_CHARS[e >> 16 & 15] + HEX_CHARS[e >> 28 & 15] + HEX_CHARS[e >> 24 & 15] + HEX_CHARS[t >> 4 & 15] + HEX_CHARS[15 & t] + HEX_CHARS[t >> 12 & 15] + HEX_CHARS[t >> 8 & 15] + HEX_CHARS[t >> 20 & 15] + HEX_CHARS[t >> 16 & 15] + HEX_CHARS[t >> 28 & 15] + HEX_CHARS[t >> 24 & 15] + HEX_CHARS[n >> 4 & 15] + HEX_CHARS[15 & n] + HEX_CHARS[n >> 12 & 15] + HEX_CHARS[n >> 8 & 15] + HEX_CHARS[n >> 20 & 15] + HEX_CHARS[n >> 16 & 15] + HEX_CHARS[n >> 28 & 15] + HEX_CHARS[n >> 24 & 15] + HEX_CHARS[r >> 4 & 15] + HEX_CHARS[15 & r] + HEX_CHARS[r >> 12 & 15] + HEX_CHARS[r >> 8 & 15] + HEX_CHARS[r >> 20 & 15] + HEX_CHARS[r >> 16 & 15] + HEX_CHARS[r >> 28 & 15] + HEX_CHARS[r >> 24 & 15];
                }, Md5.prototype.toString = Md5.prototype.hex, Md5.prototype.digest = function() {
                    this.finalize();
                    var e = this.h0, t = this.h1, n = this.h2, r = this.h3;
                    return [ 255 & e, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255, 255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255, 255 & n, n >> 8 & 255, n >> 16 & 255, n >> 24 & 255, 255 & r, r >> 8 & 255, r >> 16 & 255, r >> 24 & 255 ];
                }, Md5.prototype.array = Md5.prototype.digest, Md5.prototype.arrayBuffer = function() {
                    this.finalize();
                    var e = new ArrayBuffer(16), t = new Uint32Array(e);
                    return t[0] = this.h0, t[1] = this.h1, t[2] = this.h2, t[3] = this.h3, e;
                }, Md5.prototype.buffer = Md5.prototype.arrayBuffer, Md5.prototype.base64 = function() {
                    for (var e, t, n, r = "", o = this.array(), i = 0; i < 15; ) e = o[i++], t = o[i++], 
                    n = o[i++], r += BASE64_ENCODE_CHAR[e >>> 2] + BASE64_ENCODE_CHAR[63 & (e << 4 | t >>> 4)] + BASE64_ENCODE_CHAR[63 & (t << 2 | n >>> 6)] + BASE64_ENCODE_CHAR[63 & n];
                    return e = o[i], r += BASE64_ENCODE_CHAR[e >>> 2] + BASE64_ENCODE_CHAR[e << 4 & 63] + "==";
                };
                var exports = createMethod();
                COMMON_JS ? module.exports = exports : (root.md5 = exports, AMD && (void 0 === (__WEBPACK_AMD_DEFINE_RESULT__ = function() {
                    return exports;
                }.call(exports, __webpack_require__, exports, module)) || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)));
            }();
        }).call(this, __webpack_require__("4362"), __webpack_require__("c8ba"));
    },
    "3c35": function(e, t) {
        (function(t) {
            e.exports = t;
        }).call(this, {});
    },
    4362: function(e, t, n) {
        t.nextTick = function(e) {
            var t = Array.prototype.slice.call(arguments);
            t.shift(), setTimeout(function() {
                e.apply(null, t);
            }, 0);
        }, t.platform = t.arch = t.execPath = t.title = "browser", t.pid = 1, t.browser = !0, 
        t.env = {}, t.argv = [], t.binding = function(e) {
            throw new Error("No such module. (Possibly not yet loaded)");
        }, function() {
            var e, r = "/";
            t.cwd = function() {
                return r;
            }, t.chdir = function(t) {
                e || (e = n("df7c")), r = e.resolve(t, r);
            };
        }(), t.exit = t.kill = t.umask = t.dlopen = t.uptime = t.memoryUsage = t.uvCounters = function() {}, 
        t.features = {};
    },
    "543d": function(e, t, n) {
        function r(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })), n.push.apply(n, r);
            }
            return n;
        }
        function o(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? r(Object(n), !0).forEach(function(t) {
                    u(e, t, n[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
            }
            return e;
        }
        function i(e, t) {
            return c(e) || a(e, t) || p(e, t) || s();
        }
        function s() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function a(e, t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                var n = [], r = !0, o = !1, i = void 0;
                try {
                    for (var s, a = e[Symbol.iterator](); !(r = (s = a.next()).done) && (n.push(s.value), 
                    !t || n.length !== t); r = !0) ;
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    o = !0, i = e;
                } finally {
                    try {
                        r || null == a.return || a.return();
                    } finally {
                        if (o) throw i;
                    }
                }
                return n;
            }
        }
        function c(e) {
            if (Array.isArray(e)) return e;
        }
        function u(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        function f(e) {
            return d(e) || h(e) || p(e) || l();
        }
        function l() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function p(e, t) {
            if (e) {
                if ("string" == typeof e) return v(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? v(e, t) : void 0;
            }
        }
        function h(e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
        }
        function d(e) {
            if (Array.isArray(e)) return v(e);
        }
        function v(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r;
        }
        function y(e) {
            return "function" == typeof e;
        }
        function _(e) {
            return "string" == typeof e;
        }
        function g(e) {
            return "[object Object]" === Ce.call(e);
        }
        function m(e, t) {
            return Ie.call(e, t);
        }
        function b() {}
        function w(e) {
            var t = Object.create(null);
            return function(n) {
                return t[n] || (t[n] = e(n));
            };
        }
        function A(e, t) {
            var n = t ? e ? e.concat(t) : Array.isArray(t) ? t : [ t ] : e;
            return n ? O(n) : n;
        }
        function O(e) {
            for (var t = [], n = 0; n < e.length; n++) -1 === t.indexOf(e[n]) && t.push(e[n]);
            return t;
        }
        function S(e, t) {
            var n = e.indexOf(t);
            -1 !== n && e.splice(n, 1);
        }
        function E(e, t) {
            Object.keys(t).forEach(function(n) {
                -1 !== Ne.indexOf(n) && y(t[n]) && (e[n] = A(e[n], t[n]));
            });
        }
        function k(e, t) {
            e && t && Object.keys(t).forEach(function(n) {
                -1 !== Ne.indexOf(n) && y(t[n]) && S(e[n], t[n]);
            });
        }
        function T(e) {
            return function(t) {
                return e(t) || t;
            };
        }
        function P(e) {
            return !!e && ("object" === (void 0 === e ? "undefined" : _typeof(e)) || "function" == typeof e) && "function" == typeof e.then;
        }
        function x(e, t) {
            for (var n = !1, r = 0; r < e.length; r++) {
                var o = e[r];
                if (n) n = Promise.resolve(T(o)); else {
                    var i = o(t);
                    if (P(i) && (n = Promise.resolve(i)), !1 === i) return {
                        then: function() {}
                    };
                }
            }
            return n || {
                then: function(e) {
                    return e(t);
                }
            };
        }
        function j(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return [ "success", "fail", "complete" ].forEach(function(n) {
                if (Array.isArray(e[n])) {
                    var r = t[n];
                    t[n] = function(t) {
                        x(e[n], t).then(function(e) {
                            return y(r) && r(e) || e;
                        });
                    };
                }
            }), t;
        }
        function C(e, t) {
            var n = [];
            Array.isArray(De.returnValue) && n.push.apply(n, f(De.returnValue));
            var r = Ue[e];
            return r && Array.isArray(r.returnValue) && n.push.apply(n, f(r.returnValue)), n.forEach(function(e) {
                t = e(t) || t;
            }), t;
        }
        function I(e) {
            var t = Object.create(null);
            Object.keys(De).forEach(function(e) {
                "returnValue" !== e && (t[e] = De[e].slice());
            });
            var n = Ue[e];
            return n && Object.keys(n).forEach(function(e) {
                "returnValue" !== e && (t[e] = (t[e] || []).concat(n[e]));
            }), t;
        }
        function $(e, t, n) {
            for (var r = arguments.length, o = new Array(r > 3 ? r - 3 : 0), i = 3; i < r; i++) o[i - 3] = arguments[i];
            var s = I(e);
            return s && Object.keys(s).length ? Array.isArray(s.invoke) ? x(s.invoke, n).then(function(e) {
                return t.apply(void 0, [ j(s, e) ].concat(o));
            }) : t.apply(void 0, [ j(s, n) ].concat(o)) : t.apply(void 0, [ n ].concat(o));
        }
        function R(e) {
            return He.test(e) && -1 === Le.indexOf(e);
        }
        function N(e) {
            return Fe.test(e) && -1 === qe.indexOf(e);
        }
        function D(e) {
            return Be.test(e) && "onPush" !== e;
        }
        function U(e) {
            return e.then(function(e) {
                return [ null, e ];
            }).catch(function(e) {
                return [ e ];
            });
        }
        function M(e) {
            return !(R(e) || N(e) || D(e));
        }
        function F(e, t) {
            return M(e) ? function() {
                for (var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) o[i - 1] = arguments[i];
                return y(n.success) || y(n.fail) || y(n.complete) ? C(e, $.apply(void 0, [ e, t, n ].concat(o))) : C(e, U(new Promise(function(r, i) {
                    $.apply(void 0, [ e, t, Object.assign({}, n, {
                        success: r,
                        fail: i
                    }) ].concat(o));
                })));
            } : t;
        }
        function H() {
            var e = wx.getSystemInfoSync(), t = e.platform, n = e.pixelRatio, r = e.windowWidth;
            We = r, Ye = n, Ge = "ios" === t;
        }
        function L(e) {
            if (e.safeArea) {
                var t = e.safeArea;
                e.safeAreaInsets = {
                    top: t.top,
                    left: t.left,
                    right: e.windowWidth - t.right,
                    bottom: e.windowHeight - t.bottom
                };
            }
        }
        function q(e, t, n) {
            return function(r) {
                return t(K(e, r, n));
            };
        }
        function B(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            if (g(t)) {
                var i = !0 === o ? t : {};
                for (var s in y(n) && (n = n(t, i) || {}), t) if (m(n, s)) {
                    var a = n[s];
                    y(a) && (a = a(t[s], t, i)), a ? _(a) ? i[a] = t[s] : g(a) && (i[a.name ? a.name : s] = a.value) : console.warn("微信小程序 ".concat(e, "暂不支持").concat(s));
                } else -1 !== et.indexOf(s) ? y(t[s]) && (i[s] = q(e, t[s], r)) : o || (i[s] = t[s]);
                return i;
            }
            return y(t) && (t = q(e, t, r)), t;
        }
        function K(e, t, n) {
            var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            return y(Je.returnValue) && (t = Je.returnValue(e, t)), B(e, t, n, {}, r);
        }
        function V(e, t) {
            if (m(Je, e)) {
                var n = Je[e];
                return n ? function(t, r) {
                    var o = n;
                    y(n) && (o = n(t));
                    var i = [ t = B(e, t, o.args, o.returnValue) ];
                    void 0 !== r && i.push(r);
                    var s = wx[o.name || e].apply(wx, i);
                    return N(e) ? K(e, s, o.returnValue, R(e)) : s;
                } : function() {
                    console.error("微信小程序 暂不支持".concat(e));
                };
            }
            return t;
        }
        function G(e) {
            return function(t) {
                var n = t.fail, r = t.complete, o = {
                    errMsg: "".concat(e, ":fail:暂不支持 ").concat(e, " 方法")
                };
                y(n) && n(o), y(r) && r(o);
            };
        }
        function W(e, t, n) {
            return e[t].apply(e, n);
        }
        function Y(e) {
            if (wx.canIUse("nextTick")) {
                var t = e.triggerEvent;
                e.triggerEvent = function(n) {
                    for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) o[i - 1] = arguments[i];
                    return t.apply(e, [ ft(n) ].concat(o));
                };
            }
        }
        function z(e, t) {
            var n = t[e];
            t[e] = n ? function() {
                Y(this);
                for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                return n.apply(this, t);
            } : function() {
                Y(this);
            };
        }
        function X(e, t) {
            var n = e.$mp[e.mpType];
            t.forEach(function(t) {
                m(n, t) && (e[t] = n[t]);
            });
        }
        function J(e, t) {
            if (!t) return !0;
            if (je.default.options && Array.isArray(je.default.options[e])) return !0;
            if (t = t.default || t, y(t)) return !!y(t.extendOptions[e]) || !!(t.super && t.super.options && Array.isArray(t.super.options[e]));
            if (y(t[e])) return !0;
            var n = t.mixins;
            return Array.isArray(n) ? !!n.find(function(t) {
                return J(e, t);
            }) : void 0;
        }
        function Q(e, t, n) {
            t.forEach(function(t) {
                J(t, n) && (e[t] = function(e) {
                    return this.$vm && this.$vm.__call_hook(t, e);
                });
            });
        }
        function Z(e, t) {
            var n;
            return t = t.default || t, n = y(t) ? t : e.extend(t), t = n.options, [ n, t ];
        }
        function ee(e, t) {
            if (Array.isArray(t) && t.length) {
                var n = Object.create(null);
                t.forEach(function(e) {
                    n[e] = !0;
                }), e.$scopedSlots = e.$slots = n;
            }
        }
        function te(e, t) {
            var n = (e = (e || "").split(",")).length;
            1 === n ? t._$vueId = e[0] : 2 === n && (t._$vueId = e[0], t._$vuePid = e[1]);
        }
        function ne(e, t) {
            var n = e.data || {}, r = e.methods || {};
            if ("function" == typeof n) try {
                n = n.call(t);
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                Object({
                    VUE_APP_PLATFORM: "mp-weixin",
                    NODE_ENV: "production",
                    BASE_URL: "/"
                }).VUE_APP_DEBUG && console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。", n);
            } else try {
                n = JSON.parse(JSON.stringify(n));
            } catch (e) {}
            return g(n) || (n = {}), Object.keys(r).forEach(function(e) {
                -1 !== t.__lifecycle_hooks__.indexOf(e) || m(n, e) || (n[e] = r[e]);
            }), n;
        }
        function re(e) {
            return function(t, n) {
                this.$vm && (this.$vm[e] = t);
            };
        }
        function oe(e, t) {
            var n = e.behaviors, r = e.extends, o = e.mixins, i = e.props;
            i || (e.props = i = []);
            var s = [];
            return Array.isArray(n) && n.forEach(function(e) {
                s.push(e.replace("uni://", "wx".concat("://"))), "uni://form-field" === e && (Array.isArray(i) ? (i.push("name"), 
                i.push("value")) : (i.name = {
                    type: String,
                    default: ""
                }, i.value = {
                    type: [ String, Number, Boolean, Array, Object, Date ],
                    default: ""
                }));
            }), g(r) && r.props && s.push(t({
                properties: se(r.props, !0)
            })), Array.isArray(o) && o.forEach(function(e) {
                g(e) && e.props && s.push(t({
                    properties: se(e.props, !0)
                }));
            }), s;
        }
        function ie(e, t, n, r) {
            return Array.isArray(t) && 1 === t.length ? t[0] : t;
        }
        function se(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = (arguments.length > 2 && void 0 !== arguments[2] && arguments[2], 
            {});
            return t || (n.vueId = {
                type: String,
                value: ""
            }, n.vueSlots = {
                type: null,
                value: [],
                observer: function(e, t) {
                    var n = Object.create(null);
                    e.forEach(function(e) {
                        n[e] = !0;
                    }), this.setData({
                        $slots: n
                    });
                }
            }), Array.isArray(e) ? e.forEach(function(e) {
                n[e] = {
                    type: null,
                    observer: re(e)
                };
            }) : g(e) && Object.keys(e).forEach(function(t) {
                var r = e[t];
                if (g(r)) {
                    var o = r.default;
                    y(o) && (o = o()), r.type = ie(t, r.type), n[t] = {
                        type: -1 !== pt.indexOf(r.type) ? r.type : null,
                        value: o,
                        observer: re(t)
                    };
                } else {
                    var i = ie(t, r);
                    n[t] = {
                        type: -1 !== pt.indexOf(i) ? i : null,
                        observer: re(t)
                    };
                }
            }), n;
        }
        function ae(e) {
            try {
                e.mp = JSON.parse(JSON.stringify(e));
            } catch (e) {}
            return e.stopPropagation = b, e.preventDefault = b, e.target = e.target || {}, m(e, "detail") || (e.detail = {}), 
            m(e, "markerId") && (e.detail = "object" === _typeof(e.detail) ? e.detail : {}, 
            e.detail.markerId = e.markerId), g(e.detail) && (e.target = Object.assign({}, e.target, e.detail)), 
            e;
        }
        function ce(e, t) {
            var n = e;
            return t.forEach(function(t) {
                var r = t[0], o = t[2];
                if (r || void 0 !== o) {
                    var i, s = t[1], a = t[3];
                    Number.isInteger(r) ? i = r : r ? "string" == typeof r && r && (i = 0 === r.indexOf("#s#") ? r.substr(3) : e.__get_value(r, n)) : i = n, 
                    Number.isInteger(i) ? n = o : s ? Array.isArray(i) ? n = i.find(function(t) {
                        return e.__get_value(s, t) === o;
                    }) : g(i) ? n = Object.keys(i).find(function(t) {
                        return e.__get_value(s, i[t]) === o;
                    }) : console.error("v-for 暂不支持循环数据：", i) : n = i[o], a && (n = e.__get_value(a, n));
                }
            }), n;
        }
        function ue(e, t, n) {
            var r = {};
            return Array.isArray(t) && t.length && t.forEach(function(t, o) {
                "string" == typeof t ? t ? "$event" === t ? r["$" + o] = n : "arguments" === t ? n.detail && n.detail.__args__ ? r["$" + o] = n.detail.__args__ : r["$" + o] = [ n ] : 0 === t.indexOf("$event.") ? r["$" + o] = e.__get_value(t.replace("$event.", ""), n) : r["$" + o] = e.__get_value(t) : r["$" + o] = e : r["$" + o] = ce(e, t);
            }), r;
        }
        function fe(e) {
            for (var t = {}, n = 1; n < e.length; n++) {
                var r = e[n];
                t[r[0]] = r[1];
            }
            return t;
        }
        function le(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [], r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [], o = arguments.length > 4 ? arguments[4] : void 0, i = arguments.length > 5 ? arguments[5] : void 0, s = !1;
            if (o && (s = t.currentTarget && t.currentTarget.dataset && "wx" === t.currentTarget.dataset.comType, 
            !n.length)) return s ? [ t ] : t.detail.__args__ || t.detail;
            var a = ue(e, r, t), c = [];
            return n.forEach(function(e) {
                "$event" === e ? "__set_model" !== i || o ? o && !s ? c.push(t.detail.__args__[0]) : c.push(t) : c.push(t.target.value) : Array.isArray(e) && "o" === e[0] ? c.push(fe(e)) : "string" == typeof e && m(a, e) ? c.push(a[e]) : c.push(e);
            }), c;
        }
        function pe(e, t) {
            return e === t || "regionchange" === t && ("begin" === e || "end" === e);
        }
        function he(e) {
            for (var t = e.$parent; t && t.$parent && (t.$options.generic || t.$parent.$options.generic || t.$scope._$vuePid); ) t = t.$parent;
            return t && t.$parent;
        }
        function de(e) {
            var t = this, n = ((e = ae(e)).currentTarget || e.target).dataset;
            if (!n) return console.warn("事件信息不存在");
            var r = n.eventOpts || n["event-opts"];
            if (!r) return console.warn("事件信息不存在");
            var o = e.type, i = [];
            return r.forEach(function(n) {
                var r = n[0], s = n[1], a = r.charAt(0) === dt, c = (r = a ? r.slice(1) : r).charAt(0) === ht;
                r = c ? r.slice(1) : r, s && pe(o, r) && s.forEach(function(n) {
                    var r = n[0];
                    if (r) {
                        var o = t.$vm;
                        if (o.$options.generic && (o = he(o) || o), "$emit" === r) return void o.$emit.apply(o, le(t.$vm, e, n[1], n[2], a, r));
                        var s = o[r];
                        if (!y(s)) throw new Error(" _vm.".concat(r, " is not a function"));
                        if (c) {
                            if (s.once) return;
                            s.once = !0;
                        }
                        i.push(s.apply(o, le(t.$vm, e, n[1], n[2], a, r)));
                    }
                });
            }), "input" === o && 1 === i.length && void 0 !== i[0] ? i[0] : void 0;
        }
        function ve(e, t) {
            var n = t.mocks, r = t.initRefs;
            e.$options.store && (je.default.prototype.$store = e.$options.store), je.default.prototype.mpHost = "mp-weixin", 
            je.default.mixin({
                beforeCreate: function() {
                    this.$options.mpType && (this.mpType = this.$options.mpType, this.$mp = u({
                        data: {}
                    }, this.mpType, this.$options.mpInstance), this.$scope = this.$options.mpInstance, 
                    delete this.$options.mpType, delete this.$options.mpInstance, "app" !== this.mpType && (r(this), 
                    X(this, n)));
                }
            });
            var o = {
                onLaunch: function(t) {
                    this.$vm || (wx.canIUse("nextTick") || console.error("当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上"), 
                    this.$vm = e, this.$vm.$mp = {
                        app: this
                    }, this.$vm.$scope = this, this.$vm.globalData = this.globalData, this.$vm._isMounted = !0, 
                    this.$vm.__call_hook("mounted", t), this.$vm.__call_hook("onLaunch", t));
                }
            };
            o.globalData = e.$options.globalData || {};
            var i = e.$options.methods;
            return i && Object.keys(i).forEach(function(e) {
                o[e] = i[e];
            }), Q(o, vt), o;
        }
        function ye(e, t) {
            for (var n, r = e.$children, o = r.length - 1; o >= 0; o--) {
                var i = r[o];
                if (i.$scope._$vueId === t) return i;
            }
            for (var s = r.length - 1; s >= 0; s--) if (n = ye(r[s], t)) return n;
        }
        function _e(e) {
            return Behavior(e);
        }
        function ge() {
            return !!this.route;
        }
        function me(e) {
            this.triggerEvent("__l", e);
        }
        function be(e) {
            var t = e.$scope;
            Object.defineProperty(e, "$refs", {
                get: function() {
                    var e = {};
                    return t.selectAllComponents(".vue-ref").forEach(function(t) {
                        var n = t.dataset.ref;
                        e[n] = t.$vm || t;
                    }), t.selectAllComponents(".vue-ref-in-for").forEach(function(t) {
                        var n = t.dataset.ref;
                        e[n] || (e[n] = []), e[n].push(t.$vm || t);
                    }), e;
                }
            });
        }
        function we(e) {
            var t, n = e.detail || e.value, r = n.vuePid, o = n.vueOptions;
            r && (t = ye(this.$vm, r)), t || (t = this.$vm), o.parent = t;
        }
        function Ae(e) {
            return ve(e, {
                mocks: yt,
                initRefs: be
            });
        }
        function Oe(e) {
            return App(Ae(e)), e;
        }
        function Se(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = t.isPage, r = t.initRelation, s = i(Z(je.default, e), 2), a = s[0], c = s[1], u = o({
                multipleSlots: !0,
                addGlobalClass: !0
            }, c.options || {});
            c["mp-weixin"] && c["mp-weixin"].options && Object.assign(u, c["mp-weixin"].options);
            var f = {
                options: u,
                data: ne(c, je.default.prototype),
                behaviors: oe(c, _e),
                properties: se(c.props, !1, c.__file),
                lifetimes: {
                    attached: function() {
                        var e = this.properties, t = {
                            mpType: n.call(this) ? "page" : "component",
                            mpInstance: this,
                            propsData: e
                        };
                        te(e.vueId, this), r.call(this, {
                            vuePid: this._$vuePid,
                            vueOptions: t
                        }), this.$vm = new a(t), ee(this.$vm, e.vueSlots), this.$vm.$mount();
                    },
                    ready: function() {
                        this.$vm && (this.$vm._isMounted = !0, this.$vm.__call_hook("mounted"), this.$vm.__call_hook("onReady"));
                    },
                    detached: function() {
                        this.$vm && this.$vm.$destroy();
                    }
                },
                pageLifetimes: {
                    show: function(e) {
                        this.$vm && this.$vm.__call_hook("onPageShow", e);
                    },
                    hide: function() {
                        this.$vm && this.$vm.__call_hook("onPageHide");
                    },
                    resize: function(e) {
                        this.$vm && this.$vm.__call_hook("onPageResize", e);
                    }
                },
                methods: {
                    __l: we,
                    __e: de
                }
            };
            return c.externalClasses && (f.externalClasses = c.externalClasses), Array.isArray(c.wxsCallMethods) && c.wxsCallMethods.forEach(function(e) {
                f.methods[e] = function(t) {
                    return this.$vm[e](t);
                };
            }), n ? f : [ f, a ];
        }
        function Ee(e) {
            return Se(e, {
                isPage: ge,
                initRelation: me
            });
        }
        function ke(e, t) {
            t.isPage, t.initRelation;
            var n = Ee(e);
            return Q(n.methods, _t, e), n.methods.onLoad = function(e) {
                this.$vm.$mp.query = e, this.$vm.__call_hook("onLoad", e);
            }, n;
        }
        function Te(e) {
            return ke(e, {
                isPage: ge,
                initRelation: me
            });
        }
        function Pe(e) {
            return Component(Te(e));
        }
        function xe(e) {
            return Component(Ee(e));
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.createApp = Oe, t.createComponent = xe, t.createPage = Pe, t.default = void 0;
        var je = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(n("66fd")), Ce = Object.prototype.toString, Ie = Object.prototype.hasOwnProperty, $e = /-(\w)/g, Re = w(function(e) {
            return e.replace($e, function(e, t) {
                return t ? t.toUpperCase() : "";
            });
        }), Ne = [ "invoke", "success", "fail", "complete", "returnValue" ], De = {}, Ue = {}, Me = {
            returnValue: function(e) {
                return P(e) ? e.then(function(e) {
                    return e[1];
                }).catch(function(e) {
                    return e[0];
                }) : e;
            }
        }, Fe = /^\$|sendNativeEvent|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/, He = /^create|Manager$/, Le = [ "createBLEConnection" ], qe = [ "createBLEConnection" ], Be = /^on|^off/;
        Promise.prototype.finally || (Promise.prototype.finally = function(e) {
            var t = this.constructor;
            return this.then(function(n) {
                return t.resolve(e()).then(function() {
                    return n;
                });
            }, function(n) {
                return t.resolve(e()).then(function() {
                    throw n;
                });
            });
        });
        var Ke = 1e-4, Ve = 750, Ge = !1, We = 0, Ye = 0, ze = {
            promiseInterceptor: Me
        }, Xe = Object.freeze({
            __proto__: null,
            upx2px: function(e, t) {
                if (0 === We && H(), 0 === (e = Number(e))) return 0;
                var n = e / Ve * (t || We);
                return n < 0 && (n = -n), 0 === (n = Math.floor(n + Ke)) && (n = 1 !== Ye && Ge ? .5 : 1), 
                e < 0 ? -n : n;
            },
            addInterceptor: function(e, t) {
                "string" == typeof e && g(t) ? E(Ue[e] || (Ue[e] = {}), t) : g(e) && E(De, e);
            },
            removeInterceptor: function(e, t) {
                "string" == typeof e ? g(t) ? k(Ue[e], t) : delete Ue[e] : g(e) && k(De, e);
            },
            interceptors: ze
        }), Je = {
            previewImage: {
                args: function(e) {
                    var t = parseInt(e.current);
                    if (!isNaN(t)) {
                        var n = e.urls;
                        if (Array.isArray(n)) {
                            var r = n.length;
                            if (r) return t < 0 ? t = 0 : t >= r && (t = r - 1), t > 0 ? (e.current = n[t], 
                            e.urls = n.filter(function(e, r) {
                                return !(r < t) || e !== n[t];
                            })) : e.current = n[0], {
                                indicator: !1,
                                loop: !1
                            };
                        }
                    }
                }
            },
            getSystemInfo: {
                returnValue: L
            },
            getSystemInfoSync: {
                returnValue: L
            }
        }, Qe = [ "vibrate", "preloadPage", "unPreloadPage", "loadSubPackage" ], Ze = [], et = [ "success", "fail", "cancel", "complete" ], tt = Object.create(null);
        [ "onTabBarMidButtonTap", "subscribePush", "unsubscribePush", "onPush", "offPush", "share" ].forEach(function(e) {
            tt[e] = G(e);
        });
        var nt = {
            oauth: [ "weixin" ],
            share: [ "weixin" ],
            payment: [ "wxpay" ],
            push: [ "weixin" ]
        }, rt = Object.freeze({
            __proto__: null,
            getProvider: function(e) {
                var t = e.service, n = e.success, r = e.fail, o = e.complete, i = !1;
                nt[t] ? (i = {
                    errMsg: "getProvider:ok",
                    service: t,
                    provider: nt[t]
                }, y(n) && n(i)) : (i = {
                    errMsg: "getProvider:fail:服务[" + t + "]不存在"
                }, y(r) && r(i)), y(o) && o(i);
            }
        }), ot = function() {
            var e;
            return function() {
                return e || (e = new je.default()), e;
            };
        }(), it = Object.freeze({
            __proto__: null,
            $on: function() {
                return W(ot(), "$on", Array.prototype.slice.call(arguments));
            },
            $off: function() {
                return W(ot(), "$off", Array.prototype.slice.call(arguments));
            },
            $once: function() {
                return W(ot(), "$once", Array.prototype.slice.call(arguments));
            },
            $emit: function() {
                return W(ot(), "$emit", Array.prototype.slice.call(arguments));
            }
        }), st = Object.freeze({
            __proto__: null
        }), at = Page, ct = Component, ut = /:/g, ft = w(function(e) {
            return Re(e.replace(ut, "-"));
        });
        Page = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return z("onLoad", e), at(e);
        }, Component = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return z("created", e), ct(e);
        };
        var lt = [ "onPullDownRefresh", "onReachBottom", "onAddToFavorites", "onShareTimeline", "onShareAppMessage", "onPageScroll", "onResize", "onTabItemTap" ], pt = [ String, Number, Boolean, Object, Array, null ], ht = "~", dt = "^", vt = [ "onShow", "onHide", "onError", "onPageNotFound", "onThemeChange", "onUnhandledRejection" ], yt = [ "__route__", "__wxExparserNodeId__", "__wxWebviewId__" ], _t = [ "onShow", "onHide", "onUnload" ];
        _t.push.apply(_t, lt), Qe.forEach(function(e) {
            Je[e] = !1;
        }), Ze.forEach(function(e) {
            var t = Je[e] && Je[e].name ? Je[e].name : e;
            wx.canIUse(t) || (Je[e] = !1);
        });
        var gt = {};
        "undefined" != typeof Proxy ? gt = new Proxy({}, {
            get: function(e, t) {
                return m(e, t) ? e[t] : Xe[t] ? Xe[t] : st[t] ? F(t, st[t]) : rt[t] ? F(t, rt[t]) : tt[t] ? F(t, tt[t]) : it[t] ? it[t] : m(wx, t) || m(Je, t) ? F(t, V(t, wx[t])) : void 0;
            },
            set: function(e, t, n) {
                return e[t] = n, !0;
            }
        }) : (Object.keys(Xe).forEach(function(e) {
            gt[e] = Xe[e];
        }), Object.keys(tt).forEach(function(e) {
            gt[e] = F(e, tt[e]);
        }), Object.keys(rt).forEach(function(e) {
            gt[e] = F(e, tt[e]);
        }), Object.keys(it).forEach(function(e) {
            gt[e] = it[e];
        }), Object.keys(st).forEach(function(e) {
            gt[e] = F(e, st[e]);
        }), Object.keys(wx).forEach(function(e) {
            (m(wx, e) || m(Je, e)) && (gt[e] = F(e, V(e, wx[e])));
        })), wx.createApp = Oe, wx.createPage = Pe, wx.createComponent = xe;
        var mt = gt;
        t.default = mt;
    },
    "66fd": function(e, t, n) {
        n.r(t), function(e) {
            function n(e) {
                return void 0 === e || null === e;
            }
            function r(e) {
                return void 0 !== e && null !== e;
            }
            function o(e) {
                return !0 === e;
            }
            function i(e) {
                return !1 === e;
            }
            function s(e) {
                return "string" == typeof e || "number" == typeof e || "symbol" === (void 0 === e ? "undefined" : _typeof(e)) || "boolean" == typeof e;
            }
            function a(e) {
                return null !== e && "object" === (void 0 === e ? "undefined" : _typeof(e));
            }
            function c(e) {
                return "[object Object]" === _n.call(e);
            }
            function u(e) {
                return "[object RegExp]" === _n.call(e);
            }
            function f(e) {
                var t = parseFloat(String(e));
                return t >= 0 && Math.floor(t) === t && isFinite(e);
            }
            function l(e) {
                return r(e) && "function" == typeof e.then && "function" == typeof e.catch;
            }
            function p(e) {
                return null == e ? "" : Array.isArray(e) || c(e) && e.toString === _n ? JSON.stringify(e, null, 2) : String(e);
            }
            function h(e) {
                var t = parseFloat(e);
                return isNaN(t) ? e : t;
            }
            function d(e, t) {
                for (var n = Object.create(null), r = e.split(","), o = 0; o < r.length; o++) n[r[o]] = !0;
                return t ? function(e) {
                    return n[e.toLowerCase()];
                } : function(e) {
                    return n[e];
                };
            }
            function v(e, t) {
                if (e.length) {
                    var n = e.indexOf(t);
                    if (n > -1) return e.splice(n, 1);
                }
            }
            function y(e, t) {
                return bn.call(e, t);
            }
            function _(e) {
                var t = Object.create(null);
                return function(n) {
                    return t[n] || (t[n] = e(n));
                };
            }
            function g(e, t) {
                t = t || 0;
                for (var n = e.length - t, r = new Array(n); n--; ) r[n] = e[n + t];
                return r;
            }
            function m(e, t) {
                for (var n in t) e[n] = t[n];
                return e;
            }
            function b(e) {
                for (var t = {}, n = 0; n < e.length; n++) e[n] && m(t, e[n]);
                return t;
            }
            function w(e, t, n) {}
            function A(e, t) {
                if (e === t) return !0;
                var n = a(e), r = a(t);
                if (!n || !r) return !n && !r && String(e) === String(t);
                try {
                    var o = Array.isArray(e), i = Array.isArray(t);
                    if (o && i) return e.length === t.length && e.every(function(e, n) {
                        return A(e, t[n]);
                    });
                    if (e instanceof Date && t instanceof Date) return e.getTime() === t.getTime();
                    if (o || i) return !1;
                    var s = Object.keys(e), c = Object.keys(t);
                    return s.length === c.length && s.every(function(n) {
                        return A(e[n], t[n]);
                    });
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    return !1;
                }
            }
            function O(e, t) {
                for (var n = 0; n < e.length; n++) if (A(e[n], t)) return n;
                return -1;
            }
            function S(e) {
                var t = !1;
                return function() {
                    t || (t = !0, e.apply(this, arguments));
                };
            }
            function E(e) {
                var t = (e + "").charCodeAt(0);
                return 36 === t || 95 === t;
            }
            function k(e, t, n, r) {
                Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !!r,
                    writable: !0,
                    configurable: !0
                });
            }
            function T(e) {
                if (!$n.test(e)) {
                    var t = e.split(".");
                    return function(e) {
                        for (var n = 0; n < t.length; n++) {
                            if (!e) return;
                            e = e[t[n]];
                        }
                        return e;
                    };
                }
            }
            function P(e) {
                return "function" == typeof e && /native code/.test(e.toString());
            }
            function x(e) {
                zn.SharedObject.targetStack.push(e), zn.SharedObject.target = e;
            }
            function j() {
                zn.SharedObject.targetStack.pop(), zn.SharedObject.target = zn.SharedObject.targetStack[zn.SharedObject.targetStack.length - 1];
            }
            function C(e) {
                return new Xn(void 0, void 0, void 0, String(e));
            }
            function I(e) {
                var t = new Xn(e.tag, e.data, e.children && e.children.slice(), e.text, e.elm, e.context, e.componentOptions, e.asyncFactory);
                return t.ns = e.ns, t.isStatic = e.isStatic, t.key = e.key, t.isComment = e.isComment, 
                t.fnContext = e.fnContext, t.fnOptions = e.fnOptions, t.fnScopeId = e.fnScopeId, 
                t.asyncMeta = e.asyncMeta, t.isCloned = !0, t;
            }
            function $(e) {
                nr = e;
            }
            function R(e, t) {
                e.__proto__ = t;
            }
            function N(e, t, n) {
                for (var r = 0, o = n.length; r < o; r++) {
                    var i = n[r];
                    k(e, i, t[i]);
                }
            }
            function D(e, t) {
                var n;
                if (a(e) && !(e instanceof Xn)) return y(e, "__ob__") && e.__ob__ instanceof rr ? n = e.__ob__ : nr && !Kn() && (Array.isArray(e) || c(e)) && Object.isExtensible(e) && !e._isVue && (n = new rr(e)), 
                t && n && n.vmCount++, n;
            }
            function U(e, t, n, r, o) {
                var i = new zn(), s = Object.getOwnPropertyDescriptor(e, t);
                if (!s || !1 !== s.configurable) {
                    var a = s && s.get, c = s && s.set;
                    a && !c || 2 !== arguments.length || (n = e[t]);
                    var u = !o && D(n);
                    Object.defineProperty(e, t, {
                        enumerable: !0,
                        configurable: !0,
                        get: function() {
                            var t = a ? a.call(e) : n;
                            return zn.SharedObject.target && (i.depend(), u && (u.dep.depend(), Array.isArray(t) && H(t))), 
                            t;
                        },
                        set: function(t) {
                            var r = a ? a.call(e) : n;
                            t === r || t !== t && r !== r || a && !c || (c ? c.call(e, t) : n = t, u = !o && D(t), 
                            i.notify());
                        }
                    });
                }
            }
            function M(e, t, n) {
                if (Array.isArray(e) && f(t)) return e.length = Math.max(e.length, t), e.splice(t, 1, n), 
                n;
                if (t in e && !(t in Object.prototype)) return e[t] = n, n;
                var r = e.__ob__;
                return e._isVue || r && r.vmCount ? n : r ? (U(r.value, t, n), r.dep.notify(), n) : (e[t] = n, 
                n);
            }
            function F(e, t) {
                if (Array.isArray(e) && f(t)) e.splice(t, 1); else {
                    var n = e.__ob__;
                    e._isVue || n && n.vmCount || y(e, t) && (delete e[t], n && n.dep.notify());
                }
            }
            function H(e) {
                for (var t = void 0, n = 0, r = e.length; n < r; n++) (t = e[n]) && t.__ob__ && t.__ob__.dep.depend(), 
                Array.isArray(t) && H(t);
            }
            function L(e, t) {
                if (!t) return e;
                for (var n, r, o, i = Gn ? Reflect.ownKeys(t) : Object.keys(t), s = 0; s < i.length; s++) "__ob__" !== (n = i[s]) && (r = e[n], 
                o = t[n], y(e, n) ? r !== o && c(r) && c(o) && L(r, o) : M(e, n, o));
                return e;
            }
            function q(e, t, n) {
                return n ? function() {
                    var r = "function" == typeof t ? t.call(n, n) : t, o = "function" == typeof e ? e.call(n, n) : e;
                    return r ? L(r, o) : o;
                } : t ? e ? function() {
                    return L("function" == typeof t ? t.call(this, this) : t, "function" == typeof e ? e.call(this, this) : e);
                } : t : e;
            }
            function B(e, t) {
                var n = t ? e ? e.concat(t) : Array.isArray(t) ? t : [ t ] : e;
                return n ? K(n) : n;
            }
            function K(e) {
                for (var t = [], n = 0; n < e.length; n++) -1 === t.indexOf(e[n]) && t.push(e[n]);
                return t;
            }
            function V(e, t, n, r) {
                var o = Object.create(e || null);
                return t ? m(o, t) : o;
            }
            function G(e, t) {
                var n = e.props;
                if (n) {
                    var r, o, i, s = {};
                    if (Array.isArray(n)) for (r = n.length; r--; ) "string" == typeof (o = n[r]) && (i = An(o), 
                    s[i] = {
                        type: null
                    }); else if (c(n)) for (var a in n) o = n[a], s[i = An(a)] = c(o) ? o : {
                        type: o
                    };
                    e.props = s;
                }
            }
            function W(e, t) {
                var n = e.inject;
                if (n) {
                    var r = e.inject = {};
                    if (Array.isArray(n)) for (var o = 0; o < n.length; o++) r[n[o]] = {
                        from: n[o]
                    }; else if (c(n)) for (var i in n) {
                        var s = n[i];
                        r[i] = c(s) ? m({
                            from: i
                        }, s) : {
                            from: s
                        };
                    }
                }
            }
            function Y(e) {
                var t = e.directives;
                if (t) for (var n in t) {
                    var r = t[n];
                    "function" == typeof r && (t[n] = {
                        bind: r,
                        update: r
                    });
                }
            }
            function z(e, t, n) {
                function r(r) {
                    var o = or[r] || sr;
                    a[r] = o(e[r], t[r], n, r);
                }
                if ("function" == typeof t && (t = t.options), G(t, n), W(t, n), Y(t), !t._base && (t.extends && (e = z(e, t.extends, n)), 
                t.mixins)) for (var o = 0, i = t.mixins.length; o < i; o++) e = z(e, t.mixins[o], n);
                var s, a = {};
                for (s in e) r(s);
                for (s in t) y(e, s) || r(s);
                return a;
            }
            function X(e, t, n, r) {
                if ("string" == typeof n) {
                    var o = e[t];
                    if (y(o, n)) return o[n];
                    var i = An(n);
                    if (y(o, i)) return o[i];
                    var s = On(i);
                    return y(o, s) ? o[s] : o[n] || o[i] || o[s];
                }
            }
            function J(e, t, n, r) {
                var o = t[e], i = !y(n, e), s = n[e], a = te(Boolean, o.type);
                if (a > -1) if (i && !y(o, "default")) s = !1; else if ("" === s || s === En(e)) {
                    var c = te(String, o.type);
                    (c < 0 || a < c) && (s = !0);
                }
                if (void 0 === s) {
                    s = Q(r, o, e);
                    var u = nr;
                    $(!0), D(s), $(u);
                }
                return s;
            }
            function Q(e, t, n) {
                if (y(t, "default")) {
                    var r = t.default;
                    return e && e.$options.propsData && void 0 === e.$options.propsData[n] && void 0 !== e._props[n] ? e._props[n] : "function" == typeof r && "Function" !== Z(t.type) ? r.call(e) : r;
                }
            }
            function Z(e) {
                var t = e && e.toString().match(/^\s*function (\w+)/);
                return t ? t[1] : "";
            }
            function ee(e, t) {
                return Z(e) === Z(t);
            }
            function te(e, t) {
                if (!Array.isArray(t)) return ee(t, e) ? 0 : -1;
                for (var n = 0, r = t.length; n < r; n++) if (ee(t[n], e)) return n;
                return -1;
            }
            function ne(e, t, n) {
                x();
                try {
                    if (t) for (var r = t; r = r.$parent; ) {
                        var o = r.$options.errorCaptured;
                        if (o) for (var i = 0; i < o.length; i++) try {
                            if (!1 === o[i].call(r, e, t, n)) return;
                        } catch (e) {
                            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                            oe(e, r, "errorCaptured hook");
                        }
                    }
                    oe(e, t, n);
                } finally {
                    j();
                }
            }
            function re(e, t, n, r, o) {
                var i;
                try {
                    (i = n ? e.apply(t, n) : e.call(t)) && !i._isVue && l(i) && !i._handled && (i.catch(function(e) {
                        return ne(e, r, o + " (Promise/async)");
                    }), i._handled = !0);
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    ne(e, r, o);
                }
                return i;
            }
            function oe(e, t, n) {
                if (Cn.errorHandler) try {
                    return Cn.errorHandler.call(null, e, t, n);
                } catch (t) {
                    t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                    t !== e && ie(t, null, "config.errorHandler");
                }
                ie(e, t, n);
            }
            function ie(e, t, n) {
                if (!Nn && !Dn || "undefined" == typeof console) throw e;
                console.error(e);
            }
            function se() {
                cr = !1;
                var e = ar.slice(0);
                ar.length = 0;
                for (var t = 0; t < e.length; t++) e[t]();
            }
            function ae(e, t) {
                var n;
                if (ar.push(function() {
                    if (e) try {
                        e.call(t);
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        ne(e, t, "nextTick");
                    } else n && n(t);
                }), cr || (cr = !0, ir()), !e && "undefined" != typeof Promise) return new Promise(function(e) {
                    n = e;
                });
            }
            function ce(e) {
                ue(e, hr), hr.clear();
            }
            function ue(e, t) {
                var n, r, o = Array.isArray(e);
                if (!(!o && !a(e) || Object.isFrozen(e) || e instanceof Xn)) {
                    if (e.__ob__) {
                        var i = e.__ob__.dep.id;
                        if (t.has(i)) return;
                        t.add(i);
                    }
                    if (o) for (n = e.length; n--; ) ue(e[n], t); else for (n = (r = Object.keys(e)).length; n--; ) ue(e[r[n]], t);
                }
            }
            function fe(e, t) {
                function n() {
                    var e = arguments, r = n.fns;
                    if (!Array.isArray(r)) return re(r, null, arguments, t, "v-on handler");
                    for (var o = r.slice(), i = 0; i < o.length; i++) re(o[i], null, e, t, "v-on handler");
                }
                return n.fns = e, n;
            }
            function le(e, t, r, i, s, a) {
                var c, u, f, l;
                for (c in e) u = e[c], f = t[c], l = dr(c), n(u) || (n(f) ? (n(u.fns) && (u = e[c] = fe(u, a)), 
                o(l.once) && (u = e[c] = s(l.name, u, l.capture)), r(l.name, u, l.capture, l.passive, l.params)) : u !== f && (f.fns = u, 
                e[c] = f));
                for (c in t) n(e[c]) && (l = dr(c), i(l.name, t[c], l.capture));
            }
            function pe(e, t, o, i) {
                var s = t.options.mpOptions && t.options.mpOptions.properties;
                if (n(s)) return o;
                var a = t.options.mpOptions.externalClasses || [], c = e.attrs, u = e.props;
                if (r(c) || r(u)) for (var f in s) {
                    var l = En(f);
                    (de(o, u, f, l, !0) || de(o, c, f, l, !1)) && o[f] && -1 !== a.indexOf(l) && i[An(o[f])] && (o[f] = i[An(o[f])]);
                }
                return o;
            }
            function he(e, t, o, i) {
                var s = t.options.props;
                if (n(s)) return pe(e, t, {}, i);
                var a = {}, c = e.attrs, u = e.props;
                if (r(c) || r(u)) for (var f in s) {
                    var l = En(f);
                    de(a, u, f, l, !0) || de(a, c, f, l, !1);
                }
                return pe(e, t, a, i);
            }
            function de(e, t, n, o, i) {
                if (r(t)) {
                    if (y(t, n)) return e[n] = t[n], i || delete t[n], !0;
                    if (y(t, o)) return e[n] = t[o], i || delete t[o], !0;
                }
                return !1;
            }
            function ve(e) {
                for (var t = 0; t < e.length; t++) if (Array.isArray(e[t])) return Array.prototype.concat.apply([], e);
                return e;
            }
            function ye(e) {
                return s(e) ? [ C(e) ] : Array.isArray(e) ? ge(e) : void 0;
            }
            function _e(e) {
                return r(e) && r(e.text) && i(e.isComment);
            }
            function ge(e, t) {
                var i, a, c, u, f = [];
                for (i = 0; i < e.length; i++) n(a = e[i]) || "boolean" == typeof a || (c = f.length - 1, 
                u = f[c], Array.isArray(a) ? a.length > 0 && (a = ge(a, (t || "") + "_" + i), _e(a[0]) && _e(u) && (f[c] = C(u.text + a[0].text), 
                a.shift()), f.push.apply(f, a)) : s(a) ? _e(u) ? f[c] = C(u.text + a) : "" !== a && f.push(C(a)) : _e(a) && _e(u) ? f[c] = C(u.text + a.text) : (o(e._isVList) && r(a.tag) && n(a.key) && r(t) && (a.key = "__vlist" + t + "_" + i + "__"), 
                f.push(a)));
                return f;
            }
            function me(e) {
                var t = e.$options.provide;
                t && (e._provided = "function" == typeof t ? t.call(e) : t);
            }
            function be(e) {
                var t = we(e.$options.inject, e);
                t && ($(!1), Object.keys(t).forEach(function(n) {
                    U(e, n, t[n]);
                }), $(!0));
            }
            function we(e, t) {
                if (e) {
                    for (var n = Object.create(null), r = Gn ? Reflect.ownKeys(e) : Object.keys(e), o = 0; o < r.length; o++) {
                        var i = r[o];
                        if ("__ob__" !== i) {
                            for (var s = e[i].from, a = t; a; ) {
                                if (a._provided && y(a._provided, s)) {
                                    n[i] = a._provided[s];
                                    break;
                                }
                                a = a.$parent;
                            }
                            if (!a && "default" in e[i]) {
                                var c = e[i].default;
                                n[i] = "function" == typeof c ? c.call(t) : c;
                            }
                        }
                    }
                    return n;
                }
            }
            function Ae(e, t) {
                if (!e || !e.length) return {};
                for (var n = {}, r = 0, o = e.length; r < o; r++) {
                    var i = e[r], s = i.data;
                    if (s && s.attrs && s.attrs.slot && delete s.attrs.slot, i.context !== t && i.fnContext !== t || !s || null == s.slot) i.asyncMeta && i.asyncMeta.data && "page" === i.asyncMeta.data.slot ? (n.page || (n.page = [])).push(i) : (n.default || (n.default = [])).push(i); else {
                        var a = s.slot, c = n[a] || (n[a] = []);
                        "template" === i.tag ? c.push.apply(c, i.children || []) : c.push(i);
                    }
                }
                for (var u in n) n[u].every(Oe) && delete n[u];
                return n;
            }
            function Oe(e) {
                return e.isComment && !e.asyncFactory || " " === e.text;
            }
            function Se(e, t, n) {
                var r, o = Object.keys(t).length > 0, i = e ? !!e.$stable : !o, s = e && e.$key;
                if (e) {
                    if (e._normalized) return e._normalized;
                    if (i && n && n !== yn && s === n.$key && !o && !n.$hasNormal) return n;
                    for (var a in r = {}, e) e[a] && "$" !== a[0] && (r[a] = Ee(t, a, e[a]));
                } else r = {};
                for (var c in t) c in r || (r[c] = ke(t, c));
                return e && Object.isExtensible(e) && (e._normalized = r), k(r, "$stable", i), k(r, "$key", s), 
                k(r, "$hasNormal", o), r;
            }
            function Ee(e, t, n) {
                var r = function() {
                    var e = arguments.length ? n.apply(null, arguments) : n({});
                    return (e = e && "object" === (void 0 === e ? "undefined" : _typeof(e)) && !Array.isArray(e) ? [ e ] : ye(e)) && (0 === e.length || 1 === e.length && e[0].isComment) ? void 0 : e;
                };
                return n.proxy && Object.defineProperty(e, t, {
                    get: r,
                    enumerable: !0,
                    configurable: !0
                }), r;
            }
            function ke(e, t) {
                return function() {
                    return e[t];
                };
            }
            function Te(e, t) {
                var n, o, i, s, c;
                if (Array.isArray(e) || "string" == typeof e) for (n = new Array(e.length), o = 0, 
                i = e.length; o < i; o++) n[o] = t(e[o], o, o, o); else if ("number" == typeof e) for (n = new Array(e), 
                o = 0; o < e; o++) n[o] = t(o + 1, o, o, o); else if (a(e)) if (Gn && e[Symbol.iterator]) {
                    n = [];
                    for (var u = e[Symbol.iterator](), f = u.next(); !f.done; ) n.push(t(f.value, n.length, o++, o)), 
                    f = u.next();
                } else for (s = Object.keys(e), n = new Array(s.length), o = 0, i = s.length; o < i; o++) c = s[o], 
                n[o] = t(e[c], c, o, o);
                return r(n) || (n = []), n._isVList = !0, n;
            }
            function Pe(e, t, n, r) {
                var o, i = this.$scopedSlots[e];
                i ? (n = n || {}, r && (n = m(m({}, r), n)), o = i(n, this, n._i) || t) : o = this.$slots[e] || t;
                var s = n && n.slot;
                return s ? this.$createElement("template", {
                    slot: s
                }, o) : o;
            }
            function xe(e) {
                return X(this.$options, "filters", e, !0) || Pn;
            }
            function je(e, t) {
                return Array.isArray(e) ? -1 === e.indexOf(t) : e !== t;
            }
            function Ce(e, t, n, r, o) {
                var i = Cn.keyCodes[t] || n;
                return o && r && !Cn.keyCodes[t] ? je(o, r) : i ? je(i, e) : r ? En(r) !== t : void 0;
            }
            function Ie(e, t, n, r, o) {
                if (n && a(n)) {
                    var i;
                    Array.isArray(n) && (n = b(n));
                    for (var s in n) !function(s) {
                        if ("class" === s || "style" === s || mn(s)) i = e; else {
                            var a = e.attrs && e.attrs.type;
                            i = r || Cn.mustUseProp(t, a, s) ? e.domProps || (e.domProps = {}) : e.attrs || (e.attrs = {});
                        }
                        var c = An(s), u = En(s);
                        c in i || u in i || (i[s] = n[s], !o) || ((e.on || (e.on = {}))["update:" + s] = function(e) {
                            n[s] = e;
                        });
                    }(s);
                }
                return e;
            }
            function $e(e, t) {
                var n = this._staticTrees || (this._staticTrees = []), r = n[e];
                return r && !t ? r : (r = n[e] = this.$options.staticRenderFns[e].call(this._renderProxy, null, this), 
                Ne(r, "__static__" + e, !1), r);
            }
            function Re(e, t, n) {
                return Ne(e, "__once__" + t + (n ? "_" + n : ""), !0), e;
            }
            function Ne(e, t, n) {
                if (Array.isArray(e)) for (var r = 0; r < e.length; r++) e[r] && "string" != typeof e[r] && De(e[r], t + "_" + r, n); else De(e, t, n);
            }
            function De(e, t, n) {
                e.isStatic = !0, e.key = t, e.isOnce = n;
            }
            function Ue(e, t) {
                if (t && c(t)) {
                    var n = e.on = e.on ? m({}, e.on) : {};
                    for (var r in t) {
                        var o = n[r], i = t[r];
                        n[r] = o ? [].concat(o, i) : i;
                    }
                }
                return e;
            }
            function Me(e, t, n, r) {
                t = t || {
                    $stable: !n
                };
                for (var o = 0; o < e.length; o++) {
                    var i = e[o];
                    Array.isArray(i) ? Me(i, t, n) : i && (i.proxy && (i.fn.proxy = !0), t[i.key] = i.fn);
                }
                return r && (t.$key = r), t;
            }
            function Fe(e, t) {
                for (var n = 0; n < t.length; n += 2) {
                    var r = t[n];
                    "string" == typeof r && r && (e[t[n]] = t[n + 1]);
                }
                return e;
            }
            function He(e, t) {
                return "string" == typeof e ? t + e : e;
            }
            function Le(e) {
                e._o = Re, e._n = h, e._s = p, e._l = Te, e._t = Pe, e._q = A, e._i = O, e._m = $e, 
                e._f = xe, e._k = Ce, e._b = Ie, e._v = C, e._e = Qn, e._u = Me, e._g = Ue, e._d = Fe, 
                e._p = He;
            }
            function qe(e, t, n, r, i) {
                var s, a = this, c = i.options;
                y(r, "_uid") ? (s = Object.create(r), s._original = r) : (s = r, r = r._original);
                var u = o(c._compiled), f = !u;
                this.data = e, this.props = t, this.children = n, this.parent = r, this.listeners = e.on || yn, 
                this.injections = we(c.inject, r), this.slots = function() {
                    return a.$slots || Se(e.scopedSlots, a.$slots = Ae(n, r)), a.$slots;
                }, Object.defineProperty(this, "scopedSlots", {
                    enumerable: !0,
                    get: function() {
                        return Se(e.scopedSlots, this.slots());
                    }
                }), u && (this.$options = c, this.$slots = this.slots(), this.$scopedSlots = Se(e.scopedSlots, this.$slots)), 
                c._scopeId ? this._c = function(e, t, n, o) {
                    var i = Je(s, e, t, n, o, f);
                    return i && !Array.isArray(i) && (i.fnScopeId = c._scopeId, i.fnContext = r), i;
                } : this._c = function(e, t, n, r) {
                    return Je(s, e, t, n, r, f);
                };
            }
            function Be(e, t, n, o, i) {
                var s = e.options, a = {}, c = s.props;
                if (r(c)) for (var u in c) a[u] = J(u, c, t || yn); else r(n.attrs) && Ve(a, n.attrs), 
                r(n.props) && Ve(a, n.props);
                var f = new qe(n, a, i, o, e), l = s.render.call(null, f._c, f);
                if (l instanceof Xn) return Ke(l, n, f.parent, s, f);
                if (Array.isArray(l)) {
                    for (var p = ye(l) || [], h = new Array(p.length), d = 0; d < p.length; d++) h[d] = Ke(p[d], n, f.parent, s, f);
                    return h;
                }
            }
            function Ke(e, t, n, r, o) {
                var i = I(e);
                return i.fnContext = n, i.fnOptions = r, t.slot && ((i.data || (i.data = {})).slot = t.slot), 
                i;
            }
            function Ve(e, t) {
                for (var n in t) e[An(n)] = t[n];
            }
            function Ge(e, t, i, s, c) {
                if (!n(e)) {
                    var u = i.$options._base;
                    if (a(e) && (e = u.extend(e)), "function" == typeof e) {
                        var f;
                        if (n(e.cid) && (f = e, void 0 === (e = ot(f, u)))) return rt(f, t, i, s, c);
                        t = t || {}, Mt(e), r(t.model) && Xe(e.options, t);
                        var l = he(t, e, c, i);
                        if (o(e.options.functional)) return Be(e, l, t, i, s);
                        var p = t.on;
                        if (t.on = t.nativeOn, o(e.options.abstract)) {
                            var h = t.slot;
                            t = {}, h && (t.slot = h);
                        }
                        Ye(t);
                        var d = e.options.name || c;
                        return new Xn("vue-component-" + e.cid + (d ? "-" + d : ""), t, void 0, void 0, void 0, i, {
                            Ctor: e,
                            propsData: l,
                            listeners: p,
                            tag: c,
                            children: s
                        }, f);
                    }
                }
            }
            function We(e, t) {
                var n = {
                    _isComponent: !0,
                    _parentVnode: e,
                    parent: t
                }, o = e.data.inlineTemplate;
                return r(o) && (n.render = o.render, n.staticRenderFns = o.staticRenderFns), new e.componentOptions.Ctor(n);
            }
            function Ye(e) {
                for (var t = e.hook || (e.hook = {}), n = 0; n < _r.length; n++) {
                    var r = _r[n], o = t[r], i = yr[r];
                    o === i || o && o._merged || (t[r] = o ? ze(i, o) : i);
                }
            }
            function ze(e, t) {
                var n = function(n, r) {
                    e(n, r), t(n, r);
                };
                return n._merged = !0, n;
            }
            function Xe(e, t) {
                var n = e.model && e.model.prop || "value", o = e.model && e.model.event || "input";
                (t.attrs || (t.attrs = {}))[n] = t.model.value;
                var i = t.on || (t.on = {}), s = i[o], a = t.model.callback;
                r(s) ? (Array.isArray(s) ? -1 === s.indexOf(a) : s !== a) && (i[o] = [ a ].concat(s)) : i[o] = a;
            }
            function Je(e, t, n, r, i, a) {
                return (Array.isArray(n) || s(n)) && (i = r, r = n, n = void 0), o(a) && (i = mr), 
                Qe(e, t, n, r, i);
            }
            function Qe(e, t, n, o, i) {
                if (r(n) && r(n.__ob__)) return Qn();
                if (r(n) && r(n.is) && (t = n.is), !t) return Qn();
                var s, a, c;
                return Array.isArray(o) && "function" == typeof o[0] && (n = n || {}, n.scopedSlots = {
                    default: o[0]
                }, o.length = 0), i === mr ? o = ye(o) : i === gr && (o = ve(o)), "string" == typeof t ? (a = e.$vnode && e.$vnode.ns || Cn.getTagNamespace(t), 
                s = Cn.isReservedTag(t) ? new Xn(Cn.parsePlatformTagName(t), n, o, void 0, void 0, e) : n && n.pre || !r(c = X(e.$options, "components", t)) ? new Xn(t, n, o, void 0, void 0, e) : Ge(c, n, e, o, t)) : s = Ge(t, n, e, o), 
                Array.isArray(s) ? s : r(s) ? (r(a) && Ze(s, a), r(n) && et(n), s) : Qn();
            }
            function Ze(e, t, i) {
                if (e.ns = t, "foreignObject" === e.tag && (t = void 0, i = !0), r(e.children)) for (var s = 0, a = e.children.length; s < a; s++) {
                    var c = e.children[s];
                    r(c.tag) && (n(c.ns) || o(i) && "svg" !== c.tag) && Ze(c, t, i);
                }
            }
            function et(e) {
                a(e.style) && ce(e.style), a(e.class) && ce(e.class);
            }
            function tt(e) {
                e._vnode = null, e._staticTrees = null;
                var t = e.$options, n = e.$vnode = t._parentVnode, r = n && n.context;
                e.$slots = Ae(t._renderChildren, r), e.$scopedSlots = yn, e._c = function(t, n, r, o) {
                    return Je(e, t, n, r, o, !1);
                }, e.$createElement = function(t, n, r, o) {
                    return Je(e, t, n, r, o, !0);
                };
                var o = n && n.data;
                U(e, "$attrs", o && o.attrs || yn, null, !0), U(e, "$listeners", t._parentListeners || yn, null, !0);
            }
            function nt(e, t) {
                return (e.__esModule || Gn && "Module" === e[Symbol.toStringTag]) && (e = e.default), 
                a(e) ? t.extend(e) : e;
            }
            function rt(e, t, n, r, o) {
                var i = Qn();
                return i.asyncFactory = e, i.asyncMeta = {
                    data: t,
                    context: n,
                    children: r,
                    tag: o
                }, i;
            }
            function ot(e, t) {
                if (o(e.error) && r(e.errorComp)) return e.errorComp;
                if (r(e.resolved)) return e.resolved;
                var i = br;
                if (i && r(e.owners) && -1 === e.owners.indexOf(i) && e.owners.push(i), o(e.loading) && r(e.loadingComp)) return e.loadingComp;
                if (i && !r(e.owners)) {
                    var s = e.owners = [ i ], c = !0, u = null, f = null;
                    i.$on("hook:destroyed", function() {
                        return v(s, i);
                    });
                    var p = function(e) {
                        for (var t = 0, n = s.length; t < n; t++) s[t].$forceUpdate();
                        e && (s.length = 0, null !== u && (clearTimeout(u), u = null), null !== f && (clearTimeout(f), 
                        f = null));
                    }, h = S(function(n) {
                        e.resolved = nt(n, t), c ? s.length = 0 : p(!0);
                    }), d = S(function(t) {
                        r(e.errorComp) && (e.error = !0, p(!0));
                    }), y = e(h, d);
                    return a(y) && (l(y) ? n(e.resolved) && y.then(h, d) : l(y.component) && (y.component.then(h, d), 
                    r(y.error) && (e.errorComp = nt(y.error, t)), r(y.loading) && (e.loadingComp = nt(y.loading, t), 
                    0 === y.delay ? e.loading = !0 : u = setTimeout(function() {
                        u = null, n(e.resolved) && n(e.error) && (e.loading = !0, p(!1));
                    }, y.delay || 200)), r(y.timeout) && (f = setTimeout(function() {
                        f = null, n(e.resolved) && d(null);
                    }, y.timeout)))), c = !1, e.loading ? e.loadingComp : e.resolved;
                }
            }
            function it(e) {
                return e.isComment && e.asyncFactory;
            }
            function st(e) {
                if (Array.isArray(e)) for (var t = 0; t < e.length; t++) {
                    var n = e[t];
                    if (r(n) && (r(n.componentOptions) || it(n))) return n;
                }
            }
            function at(e) {
                e._events = Object.create(null), e._hasHookEvent = !1;
                var t = e.$options._parentListeners;
                t && lt(e, t);
            }
            function ct(e, t) {
                vr.$on(e, t);
            }
            function ut(e, t) {
                vr.$off(e, t);
            }
            function ft(e, t) {
                var n = vr;
                return function r() {
                    null !== t.apply(null, arguments) && n.$off(e, r);
                };
            }
            function lt(e, t, n) {
                vr = e, le(t, n || {}, ct, ut, ft, e), vr = void 0;
            }
            function pt(e) {
                var t = wr;
                return wr = e, function() {
                    wr = t;
                };
            }
            function ht(e) {
                var t = e.$options, n = t.parent;
                if (n && !t.abstract) {
                    for (;n.$options.abstract && n.$parent; ) n = n.$parent;
                    n.$children.push(e);
                }
                e.$parent = n, e.$root = n ? n.$root : e, e.$children = [], e.$refs = {}, e._watcher = null, 
                e._inactive = null, e._directInactive = !1, e._isMounted = !1, e._isDestroyed = !1, 
                e._isBeingDestroyed = !1;
            }
            function dt(e, t, n, r, o) {
                var i = r.data.scopedSlots, s = e.$scopedSlots, a = !!(i && !i.$stable || s !== yn && !s.$stable || i && e.$scopedSlots.$key !== i.$key), c = !!(o || e.$options._renderChildren || a);
                if (e.$options._parentVnode = r, e.$vnode = r, e._vnode && (e._vnode.parent = r), 
                e.$options._renderChildren = o, e.$attrs = r.data.attrs || yn, e.$listeners = n || yn, 
                t && e.$options.props) {
                    $(!1);
                    for (var u = e._props, f = e.$options._propKeys || [], l = 0; l < f.length; l++) {
                        var p = f[l], h = e.$options.props;
                        u[p] = J(p, h, t, e);
                    }
                    $(!0), e.$options.propsData = t;
                }
                e._$updateProperties && e._$updateProperties(e), n = n || yn;
                var d = e.$options._parentListeners;
                e.$options._parentListeners = n, lt(e, n, d), c && (e.$slots = Ae(o, r.context), 
                e.$forceUpdate());
            }
            function vt(e) {
                for (;e && (e = e.$parent); ) if (e._inactive) return !0;
                return !1;
            }
            function yt(e, t) {
                if (t) {
                    if (e._directInactive = !1, vt(e)) return;
                } else if (e._directInactive) return;
                if (e._inactive || null === e._inactive) {
                    e._inactive = !1;
                    for (var n = 0; n < e.$children.length; n++) yt(e.$children[n]);
                    gt(e, "activated");
                }
            }
            function _t(e, t) {
                if (!(t && (e._directInactive = !0, vt(e)) || e._inactive)) {
                    e._inactive = !0;
                    for (var n = 0; n < e.$children.length; n++) _t(e.$children[n]);
                    gt(e, "deactivated");
                }
            }
            function gt(e, t) {
                x();
                var n = e.$options[t], r = t + " hook";
                if (n) for (var o = 0, i = n.length; o < i; o++) re(n[o], e, null, e, r);
                e._hasHookEvent && e.$emit("hook:" + t), j();
            }
            function mt() {
                Tr = Ar.length = Or.length = 0, Sr = {}, Er = kr = !1;
            }
            function bt() {
                var e, t;
                for (Pr(), kr = !0, Ar.sort(function(e, t) {
                    return e.id - t.id;
                }), Tr = 0; Tr < Ar.length; Tr++) (e = Ar[Tr]).before && e.before(), t = e.id, Sr[t] = null, 
                e.run();
                var n = Or.slice(), r = Ar.slice();
                mt(), Ot(n), wt(r), Vn && Cn.devtools && Vn.emit("flush");
            }
            function wt(e) {
                for (var t = e.length; t--; ) {
                    var n = e[t], r = n.vm;
                    r._watcher === n && r._isMounted && !r._isDestroyed && gt(r, "updated");
                }
            }
            function At(e) {
                e._inactive = !1, Or.push(e);
            }
            function Ot(e) {
                for (var t = 0; t < e.length; t++) e[t]._inactive = !0, yt(e[t], !0);
            }
            function St(e) {
                var t = e.id;
                if (null == Sr[t]) {
                    if (Sr[t] = !0, kr) {
                        for (var n = Ar.length - 1; n > Tr && Ar[n].id > e.id; ) n--;
                        Ar.splice(n + 1, 0, e);
                    } else Ar.push(e);
                    Er || (Er = !0, ae(bt));
                }
            }
            function Et(e, t, n) {
                Ir.get = function() {
                    return this[t][n];
                }, Ir.set = function(e) {
                    this[t][n] = e;
                }, Object.defineProperty(e, n, Ir);
            }
            function kt(e) {
                e._watchers = [];
                var t = e.$options;
                t.props && Tt(e, t.props), t.methods && Rt(e, t.methods), t.data ? Pt(e) : D(e._data = {}, !0), 
                t.computed && jt(e, t.computed), t.watch && t.watch !== Ln && Nt(e, t.watch);
            }
            function Tt(e, t) {
                var n = e.$options.propsData || {}, r = e._props = {}, o = e.$options._propKeys = [];
                !e.$parent || $(!1);
                for (var i in t) !function(i) {
                    o.push(i);
                    var s = J(i, t, n, e);
                    U(r, i, s), i in e || Et(e, "_props", i);
                }(i);
                $(!0);
            }
            function Pt(e) {
                var t = e.$options.data;
                c(t = e._data = "function" == typeof t ? xt(t, e) : t || {}) || (t = {});
                for (var n = Object.keys(t), r = e.$options.props, o = (e.$options.methods, n.length); o--; ) {
                    var i = n[o];
                    r && y(r, i) || E(i) || Et(e, "_data", i);
                }
                D(t, !0);
            }
            function xt(e, t) {
                x();
                try {
                    return e.call(t, t);
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    return ne(e, t, "data()"), {};
                } finally {
                    j();
                }
            }
            function jt(e, t) {
                var n = e._computedWatchers = Object.create(null), r = Kn();
                for (var o in t) {
                    var i = t[o], s = "function" == typeof i ? i : i.get;
                    r || (n[o] = new Cr(e, s || w, w, $r)), o in e || Ct(e, o, i);
                }
            }
            function Ct(e, t, n) {
                var r = !Kn();
                "function" == typeof n ? (Ir.get = r ? It(t) : $t(n), Ir.set = w) : (Ir.get = n.get ? r && !1 !== n.cache ? It(t) : $t(n.get) : w, 
                Ir.set = n.set || w), Object.defineProperty(e, t, Ir);
            }
            function It(e) {
                return function() {
                    var t = this._computedWatchers && this._computedWatchers[e];
                    if (t) return t.dirty && t.evaluate(), zn.SharedObject.target && t.depend(), t.value;
                };
            }
            function $t(e) {
                return function() {
                    return e.call(this, this);
                };
            }
            function Rt(e, t) {
                e.$options.props;
                for (var n in t) e[n] = "function" != typeof t[n] ? w : kn(t[n], e);
            }
            function Nt(e, t) {
                for (var n in t) {
                    var r = t[n];
                    if (Array.isArray(r)) for (var o = 0; o < r.length; o++) Dt(e, n, r[o]); else Dt(e, n, r);
                }
            }
            function Dt(e, t, n, r) {
                return c(n) && (r = n, n = n.handler), "string" == typeof n && (n = e[n]), e.$watch(t, n, r);
            }
            function Ut(e, t) {
                var n = e.$options = Object.create(e.constructor.options), r = t._parentVnode;
                n.parent = t.parent, n._parentVnode = r;
                var o = r.componentOptions;
                n.propsData = o.propsData, n._parentListeners = o.listeners, n._renderChildren = o.children, 
                n._componentTag = o.tag, t.render && (n.render = t.render, n.staticRenderFns = t.staticRenderFns);
            }
            function Mt(e) {
                var t = e.options;
                if (e.super) {
                    var n = Mt(e.super);
                    if (n !== e.superOptions) {
                        e.superOptions = n;
                        var r = Ft(e);
                        r && m(e.extendOptions, r), (t = e.options = z(n, e.extendOptions)).name && (t.components[t.name] = e);
                    }
                }
                return t;
            }
            function Ft(e) {
                var t, n = e.options, r = e.sealedOptions;
                for (var o in n) n[o] !== r[o] && (t || (t = {}), t[o] = n[o]);
                return t;
            }
            function Ht(e) {
                this._init(e);
            }
            function Lt(e) {
                e.use = function(e) {
                    var t = this._installedPlugins || (this._installedPlugins = []);
                    if (t.indexOf(e) > -1) return this;
                    var n = g(arguments, 1);
                    return n.unshift(this), "function" == typeof e.install ? e.install.apply(e, n) : "function" == typeof e && e.apply(null, n), 
                    t.push(e), this;
                };
            }
            function qt(e) {
                e.mixin = function(e) {
                    return this.options = z(this.options, e), this;
                };
            }
            function Bt(e) {
                e.cid = 0;
                var t = 1;
                e.extend = function(e) {
                    e = e || {};
                    var n = this, r = n.cid, o = e._Ctor || (e._Ctor = {});
                    if (o[r]) return o[r];
                    var i = e.name || n.options.name, s = function(e) {
                        this._init(e);
                    };
                    return s.prototype = Object.create(n.prototype), s.prototype.constructor = s, s.cid = t++, 
                    s.options = z(n.options, e), s.super = n, s.options.props && Kt(s), s.options.computed && Vt(s), 
                    s.extend = n.extend, s.mixin = n.mixin, s.use = n.use, xn.forEach(function(e) {
                        s[e] = n[e];
                    }), i && (s.options.components[i] = s), s.superOptions = n.options, s.extendOptions = e, 
                    s.sealedOptions = m({}, s.options), o[r] = s, s;
                };
            }
            function Kt(e) {
                var t = e.options.props;
                for (var n in t) Et(e.prototype, "_props", n);
            }
            function Vt(e) {
                var t = e.options.computed;
                for (var n in t) Ct(e.prototype, n, t[n]);
            }
            function Gt(e) {
                xn.forEach(function(t) {
                    e[t] = function(e, n) {
                        return n ? ("component" === t && c(n) && (n.name = n.name || e, n = this.options._base.extend(n)), 
                        "directive" === t && "function" == typeof n && (n = {
                            bind: n,
                            update: n
                        }), this.options[t + "s"][e] = n, n) : this.options[t + "s"][e];
                    };
                });
            }
            function Wt(e) {
                return e && (e.Ctor.options.name || e.tag);
            }
            function Yt(e, t) {
                return Array.isArray(e) ? e.indexOf(t) > -1 : "string" == typeof e ? e.split(",").indexOf(t) > -1 : !!u(e) && e.test(t);
            }
            function zt(e, t) {
                var n = e.cache, r = e.keys, o = e._vnode;
                for (var i in n) {
                    var s = n[i];
                    if (s) {
                        var a = Wt(s.componentOptions);
                        a && !t(a) && Xt(n, i, r, o);
                    }
                }
            }
            function Xt(e, t, n, r) {
                var o = e[t];
                !o || r && o.tag === r.tag || o.componentInstance.$destroy(), e[t] = null, v(n, t);
            }
            function Jt(e, t) {
                var n = {};
                return Qt(e, t), Zt(e, t, "", n), n;
            }
            function Qt(e, t) {
                if (e !== t) {
                    var n = tn(e), r = tn(t);
                    if (n == Mr && r == Mr) {
                        if (Object.keys(e).length >= Object.keys(t).length) for (var o in t) {
                            var i = e[o];
                            void 0 === i ? e[o] = null : Qt(i, t[o]);
                        }
                    } else n == Ur && r == Ur && e.length >= t.length && t.forEach(function(t, n) {
                        Qt(e[n], t);
                    });
                }
            }
            function Zt(e, t, n, r) {
                if (e !== t) {
                    var o = tn(e), i = tn(t);
                    if (o == Mr) if (i != Mr || Object.keys(e).length < Object.keys(t).length) en(r, n, e); else {
                        for (var s in e) !function(o) {
                            var i = e[o], s = t[o], a = tn(i), c = tn(s);
                            if (a != Ur && a != Mr) i != t[o] && en(r, ("" == n ? "" : n + ".") + o, i); else if (a == Ur) c != Ur ? en(r, ("" == n ? "" : n + ".") + o, i) : i.length < s.length ? en(r, ("" == n ? "" : n + ".") + o, i) : i.forEach(function(e, t) {
                                Zt(e, s[t], ("" == n ? "" : n + ".") + o + "[" + t + "]", r);
                            }); else if (a == Mr) if (c != Mr || Object.keys(i).length < Object.keys(s).length) en(r, ("" == n ? "" : n + ".") + o, i); else for (var u in i) Zt(i[u], s[u], ("" == n ? "" : n + ".") + o + "." + u, r);
                        }(s);
                    } else o == Ur ? i != Ur ? en(r, n, e) : e.length < t.length ? en(r, n, e) : e.forEach(function(e, o) {
                        Zt(e, t[o], n + "[" + o + "]", r);
                    }) : en(r, n, e);
                }
            }
            function en(e, t, n) {
                e[t] = n;
            }
            function tn(e) {
                return Object.prototype.toString.call(e);
            }
            function nn(e) {
                if (e.__next_tick_callbacks && e.__next_tick_callbacks.length) {
                    if (Object({
                        VUE_APP_PLATFORM: "mp-weixin",
                        NODE_ENV: "production",
                        BASE_URL: "/"
                    }).VUE_APP_DEBUG) {
                        var t = e.$scope;
                        console.log("[" + +new Date() + "][" + (t.is || t.route) + "][" + e._uid + "]:flushCallbacks[" + e.__next_tick_callbacks.length + "]");
                    }
                    var n = e.__next_tick_callbacks.slice(0);
                    e.__next_tick_callbacks.length = 0;
                    for (var r = 0; r < n.length; r++) n[r]();
                }
            }
            function rn(e) {
                return Ar.find(function(t) {
                    return e._watcher === t;
                });
            }
            function on(e, t) {
                if (!e.__next_tick_pending && !rn(e)) {
                    if (Object({
                        VUE_APP_PLATFORM: "mp-weixin",
                        NODE_ENV: "production",
                        BASE_URL: "/"
                    }).VUE_APP_DEBUG) {
                        var n = e.$scope;
                        console.log("[" + +new Date() + "][" + (n.is || n.route) + "][" + e._uid + "]:nextVueTick");
                    }
                    return ae(t, e);
                }
                if (Object({
                    VUE_APP_PLATFORM: "mp-weixin",
                    NODE_ENV: "production",
                    BASE_URL: "/"
                }).VUE_APP_DEBUG) {
                    var r = e.$scope;
                    console.log("[" + +new Date() + "][" + (r.is || r.route) + "][" + e._uid + "]:nextMPTick");
                }
                var o;
                if (e.__next_tick_callbacks || (e.__next_tick_callbacks = []), e.__next_tick_callbacks.push(function() {
                    if (t) try {
                        t.call(e);
                    } catch (t) {
                        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                        ne(t, e, "nextTick");
                    } else o && o(e);
                }), !t && "undefined" != typeof Promise) return new Promise(function(e) {
                    o = e;
                });
            }
            function sn(e) {
                var t = Object.create(null);
                [].concat(Object.keys(e._data || {}), Object.keys(e._computedWatchers || {})).reduce(function(t, n) {
                    return t[n] = e[n], t;
                }, t);
                var n = e.__secret_vfa_state__ && e.__secret_vfa_state__.rawBindings;
                return n && Object.keys(n).forEach(function(n) {
                    t[n] = e[n];
                }), Object.assign(t, e.$mp.data || {}), Array.isArray(e.$options.behaviors) && -1 !== e.$options.behaviors.indexOf("uni://form-field") && (t.name = e.name, 
                t.value = e.value), JSON.parse(JSON.stringify(t));
            }
            function an() {}
            function cn(e, t, n) {
                if (!e.mpType) return e;
                "app" === e.mpType && (e.$options.render = an), e.$options.render || (e.$options.render = an), 
                !e._$fallback && gt(e, "beforeMount");
                return new Cr(e, function() {
                    e._update(e._render(), n);
                }, w, {
                    before: function() {
                        e._isMounted && !e._isDestroyed && gt(e, "beforeUpdate");
                    }
                }, !0), n = !1, e;
            }
            function un(e, t) {
                return r(e) || r(t) ? fn(e, ln(t)) : "";
            }
            function fn(e, t) {
                return e ? t ? e + " " + t : e : t || "";
            }
            function ln(e) {
                return Array.isArray(e) ? pn(e) : a(e) ? hn(e) : "string" == typeof e ? e : "";
            }
            function pn(e) {
                for (var t, n = "", o = 0, i = e.length; o < i; o++) r(t = ln(e[o])) && "" !== t && (n && (n += " "), 
                n += t);
                return n;
            }
            function hn(e) {
                var t = "";
                for (var n in e) e[n] && (t && (t += " "), t += n);
                return t;
            }
            function dn(e) {
                return Array.isArray(e) ? b(e) : "string" == typeof e ? Fr(e) : e;
            }
            function vn(e, t) {
                var n = t.split("."), r = n[0];
                return 0 === r.indexOf("__$n") && (r = parseInt(r.replace("__$n", ""))), 1 === n.length ? e[r] : vn(e[r], n.slice(1).join("."));
            }
            var yn = Object.freeze({}), _n = Object.prototype.toString;
            d("slot,component", !0);
            var gn, mn = d("key,ref,slot,slot-scope,is"), bn = Object.prototype.hasOwnProperty, wn = /-(\w)/g, An = _(function(e) {
                return e.replace(wn, function(e, t) {
                    return t ? t.toUpperCase() : "";
                });
            }), On = _(function(e) {
                return e.charAt(0).toUpperCase() + e.slice(1);
            }), Sn = /\B([A-Z])/g, En = _(function(e) {
                return e.replace(Sn, "-$1").toLowerCase();
            }), kn = Function.prototype.bind ? function(e, t) {
                return e.bind(t);
            } : function(e, t) {
                function n(n) {
                    var r = arguments.length;
                    return r ? r > 1 ? e.apply(t, arguments) : e.call(t, n) : e.call(t);
                }
                return n._length = e.length, n;
            }, Tn = function(e, t, n) {
                return !1;
            }, Pn = function(e) {
                return e;
            }, xn = [ "component", "directive", "filter" ], jn = [ "beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured", "serverPrefetch" ], Cn = {
                optionMergeStrategies: Object.create(null),
                silent: !1,
                productionTip: !1,
                devtools: !1,
                performance: !1,
                errorHandler: null,
                warnHandler: null,
                ignoredElements: [],
                keyCodes: Object.create(null),
                isReservedTag: Tn,
                isReservedAttr: Tn,
                isUnknownElement: Tn,
                getTagNamespace: w,
                parsePlatformTagName: Pn,
                mustUseProp: Tn,
                async: !0,
                _lifecycleHooks: jn
            }, In = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/, $n = new RegExp("[^" + In.source + ".$_\\d]"), Rn = "__proto__" in {}, Nn = "undefined" != typeof window, Dn = "undefined" != typeof WXEnvironment && !!WXEnvironment.platform, Un = Dn && WXEnvironment.platform.toLowerCase(), Mn = Nn && window.navigator.userAgent.toLowerCase(), Fn = Mn && /msie|trident/.test(Mn), Hn = (Mn && Mn.indexOf("msie 9.0"), 
            Mn && Mn.indexOf("edge/"), Mn && Mn.indexOf("android"), Mn && /iphone|ipad|ipod|ios/.test(Mn) || "ios" === Un), Ln = (Mn && /chrome\/\d+/.test(Mn), 
            Mn && /phantomjs/.test(Mn), Mn && Mn.match(/firefox\/(\d+)/), {}.watch);
            if (Nn) try {
                var qn = {};
                Object.defineProperty(qn, "passive", {
                    get: function() {}
                }), window.addEventListener("test-passive", null, qn);
            } catch (e) {}
            var Bn, Kn = function() {
                return void 0 === gn && (gn = !Nn && !Dn && void 0 !== e && e.process && "server" === e.process.env.VUE_ENV), 
                gn;
            }, Vn = Nn && window.__VUE_DEVTOOLS_GLOBAL_HOOK__, Gn = "undefined" != typeof Symbol && P(Symbol) && "undefined" != typeof Reflect && P(Reflect.ownKeys);
            Bn = "undefined" != typeof Set && P(Set) ? Set : function() {
                function e() {
                    this.set = Object.create(null);
                }
                return e.prototype.has = function(e) {
                    return !0 === this.set[e];
                }, e.prototype.add = function(e) {
                    this.set[e] = !0;
                }, e.prototype.clear = function() {
                    this.set = Object.create(null);
                }, e;
            }();
            var Wn = w, Yn = 0, zn = function() {
                this.id = Yn++, this.subs = [];
            };
            zn.prototype.addSub = function(e) {
                this.subs.push(e);
            }, zn.prototype.removeSub = function(e) {
                v(this.subs, e);
            }, zn.prototype.depend = function() {
                zn.SharedObject.target && zn.SharedObject.target.addDep(this);
            }, zn.prototype.notify = function() {
                for (var e = this.subs.slice(), t = 0, n = e.length; t < n; t++) e[t].update();
            }, zn.SharedObject = {}, zn.SharedObject.target = null, zn.SharedObject.targetStack = [];
            var Xn = function(e, t, n, r, o, i, s, a) {
                this.tag = e, this.data = t, this.children = n, this.text = r, this.elm = o, this.ns = void 0, 
                this.context = i, this.fnContext = void 0, this.fnOptions = void 0, this.fnScopeId = void 0, 
                this.key = t && t.key, this.componentOptions = s, this.componentInstance = void 0, 
                this.parent = void 0, this.raw = !1, this.isStatic = !1, this.isRootInsert = !0, 
                this.isComment = !1, this.isCloned = !1, this.isOnce = !1, this.asyncFactory = a, 
                this.asyncMeta = void 0, this.isAsyncPlaceholder = !1;
            }, Jn = {
                child: {
                    configurable: !0
                }
            };
            Jn.child.get = function() {
                return this.componentInstance;
            }, Object.defineProperties(Xn.prototype, Jn);
            var Qn = function(e) {
                void 0 === e && (e = "");
                var t = new Xn();
                return t.text = e, t.isComment = !0, t;
            }, Zn = Array.prototype, er = Object.create(Zn);
            [ "push", "pop", "shift", "unshift", "splice", "sort", "reverse" ].forEach(function(e) {
                var t = Zn[e];
                k(er, e, function() {
                    for (var n = [], r = arguments.length; r--; ) n[r] = arguments[r];
                    var o, i = t.apply(this, n), s = this.__ob__;
                    switch (e) {
                      case "push":
                      case "unshift":
                        o = n;
                        break;

                      case "splice":
                        o = n.slice(2);
                    }
                    return o && s.observeArray(o), s.dep.notify(), i;
                });
            });
            var tr = Object.getOwnPropertyNames(er), nr = !0, rr = function(e) {
                this.value = e, this.dep = new zn(), this.vmCount = 0, k(e, "__ob__", this), Array.isArray(e) ? (Rn ? e.push !== e.__proto__.push ? N(e, er, tr) : R(e, er) : N(e, er, tr), 
                this.observeArray(e)) : this.walk(e);
            };
            rr.prototype.walk = function(e) {
                for (var t = Object.keys(e), n = 0; n < t.length; n++) U(e, t[n]);
            }, rr.prototype.observeArray = function(e) {
                for (var t = 0, n = e.length; t < n; t++) D(e[t]);
            };
            var or = Cn.optionMergeStrategies;
            or.data = function(e, t, n) {
                return n ? q(e, t, n) : t && "function" != typeof t ? e : q(e, t);
            }, jn.forEach(function(e) {
                or[e] = B;
            }), xn.forEach(function(e) {
                or[e + "s"] = V;
            }), or.watch = function(e, t, n, r) {
                if (e === Ln && (e = void 0), t === Ln && (t = void 0), !t) return Object.create(e || null);
                if (!e) return t;
                var o = {};
                for (var i in m(o, e), t) {
                    var s = o[i], a = t[i];
                    s && !Array.isArray(s) && (s = [ s ]), o[i] = s ? s.concat(a) : Array.isArray(a) ? a : [ a ];
                }
                return o;
            }, or.props = or.methods = or.inject = or.computed = function(e, t, n, r) {
                if (!e) return t;
                var o = Object.create(null);
                return m(o, e), t && m(o, t), o;
            }, or.provide = q;
            var ir, sr = function(e, t) {
                return void 0 === t ? e : t;
            }, ar = [], cr = !1;
            if ("undefined" != typeof Promise && P(Promise)) {
                var ur = Promise.resolve();
                ir = function() {
                    ur.then(se), Hn && setTimeout(w);
                };
            } else if (Fn || "undefined" == typeof MutationObserver || !P(MutationObserver) && "[object MutationObserverConstructor]" !== MutationObserver.toString()) ir = "undefined" != typeof setImmediate && P(setImmediate) ? function() {
                setImmediate(se);
            } : function() {
                setTimeout(se, 0);
            }; else {
                var fr = 1, lr = new MutationObserver(se), pr = document.createTextNode(String(fr));
                lr.observe(pr, {
                    characterData: !0
                }), ir = function() {
                    fr = (fr + 1) % 2, pr.data = String(fr);
                };
            }
            var hr = new Bn(), dr = _(function(e) {
                var t = "&" === e.charAt(0), n = "~" === (e = t ? e.slice(1) : e).charAt(0), r = "!" === (e = n ? e.slice(1) : e).charAt(0);
                return e = r ? e.slice(1) : e, {
                    name: e,
                    once: n,
                    capture: r,
                    passive: t
                };
            });
            Le(qe.prototype);
            var vr, yr = {
                init: function(e, t) {
                    if (e.componentInstance && !e.componentInstance._isDestroyed && e.data.keepAlive) {
                        var n = e;
                        yr.prepatch(n, n);
                    } else (e.componentInstance = We(e, wr)).$mount(t ? e.elm : void 0, t);
                },
                prepatch: function(e, t) {
                    var n = t.componentOptions;
                    dt(t.componentInstance = e.componentInstance, n.propsData, n.listeners, t, n.children);
                },
                insert: function(e) {
                    var t = e.context, n = e.componentInstance;
                    n._isMounted || (gt(n, "onServiceCreated"), gt(n, "onServiceAttached"), n._isMounted = !0, 
                    gt(n, "mounted")), e.data.keepAlive && (t._isMounted ? At(n) : yt(n, !0));
                },
                destroy: function(e) {
                    var t = e.componentInstance;
                    t._isDestroyed || (e.data.keepAlive ? _t(t, !0) : t.$destroy());
                }
            }, _r = Object.keys(yr), gr = 1, mr = 2, br = null, wr = null, Ar = [], Or = [], Sr = {}, Er = !1, kr = !1, Tr = 0, Pr = Date.now;
            if (Nn && !Fn) {
                var xr = window.performance;
                xr && "function" == typeof xr.now && Pr() > document.createEvent("Event").timeStamp && (Pr = function() {
                    return xr.now();
                });
            }
            var jr = 0, Cr = function(e, t, n, r, o) {
                this.vm = e, o && (e._watcher = this), e._watchers.push(this), r ? (this.deep = !!r.deep, 
                this.user = !!r.user, this.lazy = !!r.lazy, this.sync = !!r.sync, this.before = r.before) : this.deep = this.user = this.lazy = this.sync = !1, 
                this.cb = n, this.id = ++jr, this.active = !0, this.dirty = this.lazy, this.deps = [], 
                this.newDeps = [], this.depIds = new Bn(), this.newDepIds = new Bn(), this.expression = "", 
                "function" == typeof t ? this.getter = t : (this.getter = T(t), this.getter || (this.getter = w)), 
                this.value = this.lazy ? void 0 : this.get();
            };
            Cr.prototype.get = function() {
                var e;
                x(this);
                var t = this.vm;
                try {
                    e = this.getter.call(t, t);
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    if (!this.user) throw e;
                    ne(e, t, 'getter for watcher "' + this.expression + '"');
                } finally {
                    this.deep && ce(e), j(), this.cleanupDeps();
                }
                return e;
            }, Cr.prototype.addDep = function(e) {
                var t = e.id;
                this.newDepIds.has(t) || (this.newDepIds.add(t), this.newDeps.push(e), this.depIds.has(t) || e.addSub(this));
            }, Cr.prototype.cleanupDeps = function() {
                for (var e = this.deps.length; e--; ) {
                    var t = this.deps[e];
                    this.newDepIds.has(t.id) || t.removeSub(this);
                }
                var n = this.depIds;
                this.depIds = this.newDepIds, this.newDepIds = n, this.newDepIds.clear(), n = this.deps, 
                this.deps = this.newDeps, this.newDeps = n, this.newDeps.length = 0;
            }, Cr.prototype.update = function() {
                this.lazy ? this.dirty = !0 : this.sync ? this.run() : St(this);
            }, Cr.prototype.run = function() {
                if (this.active) {
                    var e = this.get();
                    if (e !== this.value || a(e) || this.deep) {
                        var t = this.value;
                        if (this.value = e, this.user) try {
                            this.cb.call(this.vm, e, t);
                        } catch (e) {
                            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                            ne(e, this.vm, 'callback for watcher "' + this.expression + '"');
                        } else this.cb.call(this.vm, e, t);
                    }
                }
            }, Cr.prototype.evaluate = function() {
                this.value = this.get(), this.dirty = !1;
            }, Cr.prototype.depend = function() {
                for (var e = this.deps.length; e--; ) this.deps[e].depend();
            }, Cr.prototype.teardown = function() {
                if (this.active) {
                    this.vm._isBeingDestroyed || v(this.vm._watchers, this);
                    for (var e = this.deps.length; e--; ) this.deps[e].removeSub(this);
                    this.active = !1;
                }
            };
            var Ir = {
                enumerable: !0,
                configurable: !0,
                get: w,
                set: w
            }, $r = {
                lazy: !0
            }, Rr = 0;
            (function(e) {
                e.prototype._init = function(e) {
                    var t = this;
                    t._uid = Rr++, t._isVue = !0, e && e._isComponent ? Ut(t, e) : t.$options = z(Mt(t.constructor), e || {}, t), 
                    t._renderProxy = t, t._self = t, ht(t), at(t), tt(t), gt(t, "beforeCreate"), !t._$fallback && be(t), 
                    kt(t), !t._$fallback && me(t), !t._$fallback && gt(t, "created"), t.$options.el && t.$mount(t.$options.el);
                };
            })(Ht), function(e) {
                var t = {
                    get: function() {
                        return this._data;
                    }
                }, n = {
                    get: function() {
                        return this._props;
                    }
                };
                Object.defineProperty(e.prototype, "$data", t), Object.defineProperty(e.prototype, "$props", n), 
                e.prototype.$set = M, e.prototype.$delete = F, e.prototype.$watch = function(e, t, n) {
                    var r = this;
                    if (c(t)) return Dt(r, e, t, n);
                    (n = n || {}).user = !0;
                    var o = new Cr(r, e, t, n);
                    if (n.immediate) try {
                        t.call(r, o.value);
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        ne(e, r, 'callback for immediate watcher "' + o.expression + '"');
                    }
                    return function() {
                        o.teardown();
                    };
                };
            }(Ht), function(e) {
                var t = /^hook:/;
                e.prototype.$on = function(e, n) {
                    var r = this;
                    if (Array.isArray(e)) for (var o = 0, i = e.length; o < i; o++) r.$on(e[o], n); else (r._events[e] || (r._events[e] = [])).push(n), 
                    t.test(e) && (r._hasHookEvent = !0);
                    return r;
                }, e.prototype.$once = function(e, t) {
                    function n() {
                        r.$off(e, n), t.apply(r, arguments);
                    }
                    var r = this;
                    return n.fn = t, r.$on(e, n), r;
                }, e.prototype.$off = function(e, t) {
                    var n = this;
                    if (!arguments.length) return n._events = Object.create(null), n;
                    if (Array.isArray(e)) {
                        for (var r = 0, o = e.length; r < o; r++) n.$off(e[r], t);
                        return n;
                    }
                    var i, s = n._events[e];
                    if (!s) return n;
                    if (!t) return n._events[e] = null, n;
                    for (var a = s.length; a--; ) if ((i = s[a]) === t || i.fn === t) {
                        s.splice(a, 1);
                        break;
                    }
                    return n;
                }, e.prototype.$emit = function(e) {
                    var t = this, n = t._events[e];
                    if (n) {
                        n = n.length > 1 ? g(n) : n;
                        for (var r = g(arguments, 1), o = 'event handler for "' + e + '"', i = 0, s = n.length; i < s; i++) re(n[i], t, r, t, o);
                    }
                    return t;
                };
            }(Ht), function(e) {
                e.prototype._update = function(e, t) {
                    var n = this, r = n.$el, o = n._vnode, i = pt(n);
                    n._vnode = e, n.$el = o ? n.__patch__(o, e) : n.__patch__(n.$el, e, t, !1), i(), 
                    r && (r.__vue__ = null), n.$el && (n.$el.__vue__ = n), n.$vnode && n.$parent && n.$vnode === n.$parent._vnode && (n.$parent.$el = n.$el);
                }, e.prototype.$forceUpdate = function() {
                    var e = this;
                    e._watcher && e._watcher.update();
                }, e.prototype.$destroy = function() {
                    var e = this;
                    if (!e._isBeingDestroyed) {
                        gt(e, "beforeDestroy"), e._isBeingDestroyed = !0;
                        var t = e.$parent;
                        !t || t._isBeingDestroyed || e.$options.abstract || v(t.$children, e), e._watcher && e._watcher.teardown();
                        for (var n = e._watchers.length; n--; ) e._watchers[n].teardown();
                        e._data.__ob__ && e._data.__ob__.vmCount--, e._isDestroyed = !0, e.__patch__(e._vnode, null), 
                        gt(e, "destroyed"), e.$off(), e.$el && (e.$el.__vue__ = null), e.$vnode && (e.$vnode.parent = null);
                    }
                };
            }(Ht), function(e) {
                Le(e.prototype), e.prototype.$nextTick = function(e) {
                    return ae(e, this);
                }, e.prototype._render = function() {
                    var e, t = this, n = t.$options, r = n.render, o = n._parentVnode;
                    o && (t.$scopedSlots = Se(o.data.scopedSlots, t.$slots, t.$scopedSlots)), t.$vnode = o;
                    try {
                        br = t, e = r.call(t._renderProxy, t.$createElement);
                    } catch (n) {
                        n = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(n);
                        ne(n, t, "render"), e = t._vnode;
                    } finally {
                        br = null;
                    }
                    return Array.isArray(e) && 1 === e.length && (e = e[0]), e instanceof Xn || (e = Qn()), 
                    e.parent = o, e;
                };
            }(Ht);
            var Nr = [ String, RegExp, Array ], Dr = {
                KeepAlive: {
                    name: "keep-alive",
                    abstract: !0,
                    props: {
                        include: Nr,
                        exclude: Nr,
                        max: [ String, Number ]
                    },
                    created: function() {
                        this.cache = Object.create(null), this.keys = [];
                    },
                    destroyed: function() {
                        for (var e in this.cache) Xt(this.cache, e, this.keys);
                    },
                    mounted: function() {
                        var e = this;
                        this.$watch("include", function(t) {
                            zt(e, function(e) {
                                return Yt(t, e);
                            });
                        }), this.$watch("exclude", function(t) {
                            zt(e, function(e) {
                                return !Yt(t, e);
                            });
                        });
                    },
                    render: function() {
                        var e = this.$slots.default, t = st(e), n = t && t.componentOptions;
                        if (n) {
                            var r = Wt(n), o = this, i = o.include, s = o.exclude;
                            if (i && (!r || !Yt(i, r)) || s && r && Yt(s, r)) return t;
                            var a = this, c = a.cache, u = a.keys, f = null == t.key ? n.Ctor.cid + (n.tag ? "::" + n.tag : "") : t.key;
                            c[f] ? (t.componentInstance = c[f].componentInstance, v(u, f), u.push(f)) : (c[f] = t, 
                            u.push(f), this.max && u.length > parseInt(this.max) && Xt(c, u[0], u, this._vnode)), 
                            t.data.keepAlive = !0;
                        }
                        return t || e && e[0];
                    }
                }
            };
            (function(e) {
                var t = {
                    get: function() {
                        return Cn;
                    }
                };
                Object.defineProperty(e, "config", t), e.util = {
                    warn: Wn,
                    extend: m,
                    mergeOptions: z,
                    defineReactive: U
                }, e.set = M, e.delete = F, e.nextTick = ae, e.observable = function(e) {
                    return D(e), e;
                }, e.options = Object.create(null), xn.forEach(function(t) {
                    e.options[t + "s"] = Object.create(null);
                }), e.options._base = e, m(e.options.components, Dr), Lt(e), qt(e), Bt(e), Gt(e);
            })(Ht), Object.defineProperty(Ht.prototype, "$isServer", {
                get: Kn
            }), Object.defineProperty(Ht.prototype, "$ssrContext", {
                get: function() {
                    return this.$vnode && this.$vnode.ssrContext;
                }
            }), Object.defineProperty(Ht, "FunctionalRenderContext", {
                value: qe
            }), Ht.version = "2.6.11";
            var Ur = "[object Array]", Mr = "[object Object]", Fr = _(function(e) {
                var t = {}, n = /;(?![^(]*\))/g, r = /:(.+)/;
                return e.split(n).forEach(function(e) {
                    if (e) {
                        var n = e.split(r);
                        n.length > 1 && (t[n[0].trim()] = n[1].trim());
                    }
                }), t;
            }), Hr = [ "createSelectorQuery", "createIntersectionObserver", "selectAllComponents", "selectComponent" ], Lr = [ "onLaunch", "onShow", "onHide", "onUniNViewMessage", "onPageNotFound", "onThemeChange", "onError", "onUnhandledRejection", "onLoad", "onReady", "onUnload", "onPullDownRefresh", "onReachBottom", "onTabItemTap", "onAddToFavorites", "onShareTimeline", "onShareAppMessage", "onResize", "onPageScroll", "onNavigationBarButtonTap", "onBackPress", "onNavigationBarSearchInputChanged", "onNavigationBarSearchInputConfirmed", "onNavigationBarSearchInputClicked", "onPageShow", "onPageHide", "onPageResize" ];
            Ht.prototype.__patch__ = function(e, t) {
                var n = this;
                if (null !== t && ("page" === this.mpType || "component" === this.mpType)) {
                    var r = this.$scope, o = Object.create(null);
                    try {
                        o = sn(this);
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        console.error(e);
                    }
                    o.__webviewId__ = r.data.__webviewId__;
                    var i = Object.create(null);
                    Object.keys(o).forEach(function(e) {
                        i[e] = r.data[e];
                    });
                    var s = !1 === this.$shouldDiffData ? o : Jt(o, i);
                    Object.keys(s).length ? (Object({
                        VUE_APP_PLATFORM: "mp-weixin",
                        NODE_ENV: "production",
                        BASE_URL: "/"
                    }).VUE_APP_DEBUG && console.log("[" + +new Date() + "][" + (r.is || r.route) + "][" + this._uid + "]差量更新", JSON.stringify(s)), 
                    this.__next_tick_pending = !0, r.setData(s, function() {
                        n.__next_tick_pending = !1, nn(n);
                    })) : nn(this);
                }
            }, Ht.prototype.$mount = function(e, t) {
                return cn(this, 0, t);
            }, function(e) {
                var t = e.extend;
                e.extend = function(e) {
                    var n = (e = e || {}).methods;
                    return n && Object.keys(n).forEach(function(t) {
                        -1 !== Lr.indexOf(t) && (e[t] = n[t], delete n[t]);
                    }), t.call(this, e);
                };
                var n = e.config.optionMergeStrategies, r = n.created;
                Lr.forEach(function(e) {
                    n[e] = r;
                }), e.prototype.__lifecycle_hooks__ = Lr;
            }(Ht), function(e) {
                e.config.errorHandler = function(t, n, r) {
                    e.util.warn("Error in " + r + ': "' + t.toString() + '"', n), console.error(t);
                    var o = getApp();
                    o && o.onError && o.onError(t);
                };
                var t = e.prototype.$emit;
                e.prototype.$emit = function(e) {
                    return this.$scope && e && this.$scope.triggerEvent(e, {
                        __args__: g(arguments, 1)
                    }), t.apply(this, arguments);
                }, e.prototype.$nextTick = function(e) {
                    return on(this, e);
                }, Hr.forEach(function(t) {
                    e.prototype[t] = function(e) {
                        return this.$scope && this.$scope[t] ? this.$scope[t](e) : "undefined" != typeof my ? "createSelectorQuery" === t ? my.createSelectorQuery(e) : "createIntersectionObserver" === t ? my.createIntersectionObserver(e) : void 0 : void 0;
                    };
                }), e.prototype.__init_provide = me, e.prototype.__init_injections = be, e.prototype.__call_hook = function(e, t) {
                    var n = this;
                    x();
                    var r, o = n.$options[e], i = e + " hook";
                    if (o) for (var s = 0, a = o.length; s < a; s++) r = re(o[s], n, t ? [ t ] : null, n, i);
                    return n._hasHookEvent && n.$emit("hook:" + e, t), j(), r;
                }, e.prototype.__set_model = function(e, t, n, r) {
                    Array.isArray(r) && (-1 !== r.indexOf("trim") && (n = n.trim()), -1 !== r.indexOf("number") && (n = this._n(n))), 
                    e || (e = this), e[t] = n;
                }, e.prototype.__set_sync = function(e, t, n) {
                    e || (e = this), e[t] = n;
                }, e.prototype.__get_orig = function(e) {
                    return c(e) && e.$orig || e;
                }, e.prototype.__get_value = function(e, t) {
                    return vn(t || this, e);
                }, e.prototype.__get_class = function(e, t) {
                    return un(t, e);
                }, e.prototype.__get_style = function(e, t) {
                    if (!e && !t) return "";
                    var n = dn(e), r = t ? m(t, n) : n;
                    return Object.keys(r).map(function(e) {
                        return En(e) + ":" + r[e];
                    }).join(";");
                }, e.prototype.__map = function(e, t) {
                    var n, r, o, i, s;
                    if (Array.isArray(e)) {
                        for (n = new Array(e.length), r = 0, o = e.length; r < o; r++) n[r] = t(e[r], r);
                        return n;
                    }
                    if (a(e)) {
                        for (i = Object.keys(e), n = Object.create(null), r = 0, o = i.length; r < o; r++) n[s = i[r]] = t(e[s], s, r);
                        return n;
                    }
                    return [];
                };
            }(Ht), t.default = Ht;
        }.call(this, n("c8ba"));
    },
    9739: function(e, t) {},
    a9ff: function(e, t, n) {
        (function(e, r) {
            function o(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                    Object.defineProperty(e, r.key, r);
                }
            }
            function i(e, t, n) {
                return t && o(e.prototype, t), n && o(e, n), e;
            }
            function s(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            function a(e) {
                return function() {
                    var t, n = y(e);
                    if (h()) {
                        var r = y(this).constructor;
                        t = Reflect.construct(n, arguments, r);
                    } else t = n.apply(this, arguments);
                    return c(this, t);
                };
            }
            function c(e, t) {
                return !t || "object" !== (void 0 === t ? "undefined" : _typeof(t)) && "function" != typeof t ? u(e) : t;
            }
            function u(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e;
            }
            function f(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && v(e, t);
            }
            function l(e) {
                var t = "function" == typeof Map ? new Map() : void 0;
                return (l = function(e) {
                    function n() {
                        return p(e, arguments, y(this).constructor);
                    }
                    if (null === e || !d(e)) return e;
                    if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
                    if (void 0 !== t) {
                        if (t.has(e)) return t.get(e);
                        t.set(e, n);
                    }
                    return n.prototype = Object.create(e.prototype, {
                        constructor: {
                            value: n,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), v(n, e);
                })(e);
            }
            function p(e, t, n) {
                return (p = h() ? Reflect.construct : function(e, t, n) {
                    var r = [ null ];
                    r.push.apply(r, t);
                    var o = new (Function.bind.apply(e, r))();
                    return n && v(o, n.prototype), o;
                }).apply(null, arguments);
            }
            function h() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 
                    !0;
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    return !1;
                }
            }
            function d(e) {
                return -1 !== Function.toString.call(e).indexOf("[native code]");
            }
            function v(e, t) {
                return (v = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e;
                })(e, t);
            }
            function y(e) {
                return (y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
            }
            function _(e, t, n) {
                return e(n = {
                    path: t,
                    exports: {},
                    require: function(e, t) {
                        return function() {
                            throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
                        }(null == t && n.path);
                    }
                }, n.exports), n.exports;
            }
            function g(e) {
                return function(t) {
                    if (!((t = t || {}).success || t.fail || t.complete)) return e.call(this, t);
                    e.call(this, t).then(function(e) {
                        t.success && t.success(e), t.complete && t.complete(e);
                    }).catch(function(e) {
                        t.fail && t.fail(e), t.complete && t.complete(e);
                    });
                };
            }
            function m() {
                for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 8, t = ""; t.length < e; ) t += Math.random().toString(32).substring(2);
                return t.substring(0, e);
            }
            function b() {
                if ("n" === w()) {
                    try {
                        k = plus.runtime.getDCloudId();
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        k = "";
                    }
                    return k;
                }
                return k || (k = m(32), r.setStorage({
                    key: "__DC_CLOUD_UUID",
                    data: k
                })), k;
            }
            function w() {
                return {
                    "app-plus": "n",
                    h5: "h5",
                    "mp-weixin": "wx",
                    "mp-alipay": "ali",
                    "mp-baidu": "bd",
                    "mp-toutiao": "tt",
                    "mp-qq": "qq",
                    "quickapp-native": "qn"
                }["mp-weixin"];
            }
            function A(e) {
                return R[e.toLowerCase()];
            }
            function O(e, t, n) {
                void 0 === n && (n = {});
                var r = /\?/.test(t), o = "";
                for (var i in n) "" === o ? !r && (t += "?") : o += "&", o += i + "=" + encodeURIComponent(n[i]);
                return /^http(s)?\:\/\//.test(t += o) ? t : "" + e + t;
            }
            function S(e) {
                _e || (_e = {
                    PLATFORM: "mp-weixin",
                    OS: T,
                    APPID: E.appid,
                    CLIENT_SDK_VERSION: "1.0.0"
                }, ge = {
                    ak: E.appid,
                    p: "android" === T ? "a" : "i",
                    ut: w(),
                    uuid: b()
                });
                var t = JSON.parse(JSON.stringify(e.data || {})), n = e.name, r = this.config.spaceId, o = {
                    tencent: "t",
                    aliyun: "a"
                }[this.config.provider], i = Object.assign({}, ge, {
                    fn: n,
                    sid: r,
                    pvd: o
                });
                Object.assign(t, {
                    clientInfo: _e,
                    uniCloudClientInfo: encodeURIComponent(JSON.stringify(i))
                });
                var s = this.adapter.getStore("uni_id_token") || this.adapter.getStore("uniIdToken");
                return s && (t.uniIdToken = s), e.data = t, e;
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var E, k, T, P = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {}, x = _(function(e, t) {
                var n;
                e.exports = n = n || function(e, t) {
                    var n = Object.create || function() {
                        function e() {}
                        return function(t) {
                            var n;
                            return e.prototype = t, n = new e(), e.prototype = null, n;
                        };
                    }(), r = {}, o = r.lib = {}, i = o.Base = {
                        extend: function(e) {
                            var t = n(this);
                            return e && t.mixIn(e), t.hasOwnProperty("init") && this.init !== t.init || (t.init = function() {
                                t.$super.init.apply(this, arguments);
                            }), t.init.prototype = t, t.$super = this, t;
                        },
                        create: function() {
                            var e = this.extend();
                            return e.init.apply(e, arguments), e;
                        },
                        init: function() {},
                        mixIn: function(e) {
                            for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
                            e.hasOwnProperty("toString") && (this.toString = e.toString);
                        },
                        clone: function() {
                            return this.init.prototype.extend(this);
                        }
                    }, s = o.WordArray = i.extend({
                        init: function(e, t) {
                            e = this.words = e || [], this.sigBytes = null != t ? t : 4 * e.length;
                        },
                        toString: function(e) {
                            return (e || c).stringify(this);
                        },
                        concat: function(e) {
                            var t = this.words, n = e.words, r = this.sigBytes, o = e.sigBytes;
                            if (this.clamp(), r % 4) for (var i = 0; i < o; i++) {
                                var s = n[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                                t[r + i >>> 2] |= s << 24 - (r + i) % 4 * 8;
                            } else for (i = 0; i < o; i += 4) t[r + i >>> 2] = n[i >>> 2];
                            return this.sigBytes += o, this;
                        },
                        clamp: function() {
                            var t = this.words, n = this.sigBytes;
                            t[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, t.length = e.ceil(n / 4);
                        },
                        clone: function() {
                            var e = i.clone.call(this);
                            return e.words = this.words.slice(0), e;
                        },
                        random: function(t) {
                            for (var n, r = [], o = 0; o < t; o += 4) {
                                var i = function(t) {
                                    t = t;
                                    var n = 987654321, r = 4294967295;
                                    return function() {
                                        var o = ((n = 36969 * (65535 & n) + (n >> 16) & r) << 16) + (t = 18e3 * (65535 & t) + (t >> 16) & r) & r;
                                        return o /= 4294967296, (o += .5) * (e.random() > .5 ? 1 : -1);
                                    };
                                }(4294967296 * (n || e.random()));
                                n = 987654071 * i(), r.push(4294967296 * i() | 0);
                            }
                            return new s.init(r, t);
                        }
                    }), a = r.enc = {}, c = a.Hex = {
                        stringify: function(e) {
                            for (var t = e.words, n = e.sigBytes, r = [], o = 0; o < n; o++) {
                                var i = t[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                                r.push((i >>> 4).toString(16)), r.push((15 & i).toString(16));
                            }
                            return r.join("");
                        },
                        parse: function(e) {
                            for (var t = e.length, n = [], r = 0; r < t; r += 2) n[r >>> 3] |= parseInt(e.substr(r, 2), 16) << 24 - r % 8 * 4;
                            return new s.init(n, t / 2);
                        }
                    }, u = a.Latin1 = {
                        stringify: function(e) {
                            for (var t = e.words, n = e.sigBytes, r = [], o = 0; o < n; o++) {
                                var i = t[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                                r.push(String.fromCharCode(i));
                            }
                            return r.join("");
                        },
                        parse: function(e) {
                            for (var t = e.length, n = [], r = 0; r < t; r++) n[r >>> 2] |= (255 & e.charCodeAt(r)) << 24 - r % 4 * 8;
                            return new s.init(n, t);
                        }
                    }, f = a.Utf8 = {
                        stringify: function(e) {
                            try {
                                return decodeURIComponent(escape(u.stringify(e)));
                            } catch (e) {
                                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                throw new Error("Malformed UTF-8 data");
                            }
                        },
                        parse: function(e) {
                            return u.parse(unescape(encodeURIComponent(e)));
                        }
                    }, l = o.BufferedBlockAlgorithm = i.extend({
                        reset: function() {
                            this._data = new s.init(), this._nDataBytes = 0;
                        },
                        _append: function(e) {
                            "string" == typeof e && (e = f.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes;
                        },
                        _process: function(t) {
                            var n = this._data, r = n.words, o = n.sigBytes, i = this.blockSize, a = o / (4 * i), c = (a = t ? e.ceil(a) : e.max((0 | a) - this._minBufferSize, 0)) * i, u = e.min(4 * c, o);
                            if (c) {
                                for (var f = 0; f < c; f += i) this._doProcessBlock(r, f);
                                var l = r.splice(0, c);
                                n.sigBytes -= u;
                            }
                            return new s.init(l, u);
                        },
                        clone: function() {
                            var e = i.clone.call(this);
                            return e._data = this._data.clone(), e;
                        },
                        _minBufferSize: 0
                    }), p = (o.Hasher = l.extend({
                        cfg: i.extend(),
                        init: function(e) {
                            this.cfg = this.cfg.extend(e), this.reset();
                        },
                        reset: function() {
                            l.reset.call(this), this._doReset();
                        },
                        update: function(e) {
                            return this._append(e), this._process(), this;
                        },
                        finalize: function(e) {
                            return e && this._append(e), this._doFinalize();
                        },
                        blockSize: 16,
                        _createHelper: function(e) {
                            return function(t, n) {
                                return new e.init(n).finalize(t);
                            };
                        },
                        _createHmacHelper: function(e) {
                            return function(t, n) {
                                return new p.HMAC.init(e, n).finalize(t);
                            };
                        }
                    }), r.algo = {});
                    return r;
                }(Math);
            }), j = (_(function(e, t) {
                var n;
                e.exports = (n = x, function(e) {
                    function t(e, t, n, r, o, i, s) {
                        var a = e + (t & n | ~t & r) + o + s;
                        return (a << i | a >>> 32 - i) + t;
                    }
                    function r(e, t, n, r, o, i, s) {
                        var a = e + (t & r | n & ~r) + o + s;
                        return (a << i | a >>> 32 - i) + t;
                    }
                    function o(e, t, n, r, o, i, s) {
                        var a = e + (t ^ n ^ r) + o + s;
                        return (a << i | a >>> 32 - i) + t;
                    }
                    function i(e, t, n, r, o, i, s) {
                        var a = e + (n ^ (t | ~r)) + o + s;
                        return (a << i | a >>> 32 - i) + t;
                    }
                    var s = n, a = s.lib, c = a.WordArray, u = a.Hasher, f = s.algo, l = [];
                    !function() {
                        for (var t = 0; t < 64; t++) l[t] = 4294967296 * e.abs(e.sin(t + 1)) | 0;
                    }();
                    var p = f.MD5 = u.extend({
                        _doReset: function() {
                            this._hash = new c.init([ 1732584193, 4023233417, 2562383102, 271733878 ]);
                        },
                        _doProcessBlock: function(e, n) {
                            for (var s = 0; s < 16; s++) {
                                var a = n + s, c = e[a];
                                e[a] = 16711935 & (c << 8 | c >>> 24) | 4278255360 & (c << 24 | c >>> 8);
                            }
                            var u = this._hash.words, f = e[n + 0], p = e[n + 1], h = e[n + 2], d = e[n + 3], v = e[n + 4], y = e[n + 5], _ = e[n + 6], g = e[n + 7], m = e[n + 8], b = e[n + 9], w = e[n + 10], A = e[n + 11], O = e[n + 12], S = e[n + 13], E = e[n + 14], k = e[n + 15], T = u[0], P = u[1], x = u[2], j = u[3];
                            T = i(T = o(T = o(T = o(T = o(T = r(T = r(T = r(T = r(T = t(T = t(T = t(T = t(T, P, x, j, f, 7, l[0]), P = t(P, x = t(x, j = t(j, T, P, x, p, 12, l[1]), T, P, h, 17, l[2]), j, T, d, 22, l[3]), x, j, v, 7, l[4]), P = t(P, x = t(x, j = t(j, T, P, x, y, 12, l[5]), T, P, _, 17, l[6]), j, T, g, 22, l[7]), x, j, m, 7, l[8]), P = t(P, x = t(x, j = t(j, T, P, x, b, 12, l[9]), T, P, w, 17, l[10]), j, T, A, 22, l[11]), x, j, O, 7, l[12]), P = t(P, x = t(x, j = t(j, T, P, x, S, 12, l[13]), T, P, E, 17, l[14]), j, T, k, 22, l[15]), x, j, p, 5, l[16]), P = r(P, x = r(x, j = r(j, T, P, x, _, 9, l[17]), T, P, A, 14, l[18]), j, T, f, 20, l[19]), x, j, y, 5, l[20]), P = r(P, x = r(x, j = r(j, T, P, x, w, 9, l[21]), T, P, k, 14, l[22]), j, T, v, 20, l[23]), x, j, b, 5, l[24]), P = r(P, x = r(x, j = r(j, T, P, x, E, 9, l[25]), T, P, d, 14, l[26]), j, T, m, 20, l[27]), x, j, S, 5, l[28]), P = r(P, x = r(x, j = r(j, T, P, x, h, 9, l[29]), T, P, g, 14, l[30]), j, T, O, 20, l[31]), x, j, y, 4, l[32]), P = o(P, x = o(x, j = o(j, T, P, x, m, 11, l[33]), T, P, A, 16, l[34]), j, T, E, 23, l[35]), x, j, p, 4, l[36]), P = o(P, x = o(x, j = o(j, T, P, x, v, 11, l[37]), T, P, g, 16, l[38]), j, T, w, 23, l[39]), x, j, S, 4, l[40]), P = o(P, x = o(x, j = o(j, T, P, x, f, 11, l[41]), T, P, d, 16, l[42]), j, T, _, 23, l[43]), x, j, b, 4, l[44]), P = o(P, x = o(x, j = o(j, T, P, x, O, 11, l[45]), T, P, k, 16, l[46]), j, T, h, 23, l[47]), x, j, f, 6, l[48]), 
                            P = i(P = i(P = i(P = i(P, x = i(x, j = i(j, T, P, x, g, 10, l[49]), T, P, E, 15, l[50]), j, T, y, 21, l[51]), x = i(x, j = i(j, T = i(T, P, x, j, O, 6, l[52]), P, x, d, 10, l[53]), T, P, w, 15, l[54]), j, T, p, 21, l[55]), x = i(x, j = i(j, T = i(T, P, x, j, m, 6, l[56]), P, x, k, 10, l[57]), T, P, _, 15, l[58]), j, T, S, 21, l[59]), x = i(x, j = i(j, T = i(T, P, x, j, v, 6, l[60]), P, x, A, 10, l[61]), T, P, h, 15, l[62]), j, T, b, 21, l[63]), 
                            u[0] = u[0] + T | 0, u[1] = u[1] + P | 0, u[2] = u[2] + x | 0, u[3] = u[3] + j | 0;
                        },
                        _doFinalize: function() {
                            var t = this._data, n = t.words, r = 8 * this._nDataBytes, o = 8 * t.sigBytes;
                            n[o >>> 5] |= 128 << 24 - o % 32;
                            var i = e.floor(r / 4294967296), s = r;
                            n[15 + (o + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), 
                            n[14 + (o + 64 >>> 9 << 4)] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8), 
                            t.sigBytes = 4 * (n.length + 1), this._process();
                            for (var a = this._hash, c = a.words, u = 0; u < 4; u++) {
                                var f = c[u];
                                c[u] = 16711935 & (f << 8 | f >>> 24) | 4278255360 & (f << 24 | f >>> 8);
                            }
                            return a;
                        },
                        clone: function() {
                            var e = u.clone.call(this);
                            return e._hash = this._hash.clone(), e;
                        }
                    });
                    s.MD5 = u._createHelper(p), s.HmacMD5 = u._createHmacHelper(p);
                }(Math), n.MD5);
            }), _(function(e, t) {
                var n, r, o;
                e.exports = (r = (n = x).lib.Base, o = n.enc.Utf8, void (n.algo.HMAC = r.extend({
                    init: function(e, t) {
                        e = this._hasher = new e.init(), "string" == typeof t && (t = o.parse(t));
                        var n = e.blockSize, r = 4 * n;
                        t.sigBytes > r && (t = e.finalize(t)), t.clamp();
                        for (var i = this._oKey = t.clone(), s = this._iKey = t.clone(), a = i.words, c = s.words, u = 0; u < n; u++) a[u] ^= 1549556828, 
                        c[u] ^= 909522486;
                        i.sigBytes = s.sigBytes = r, this.reset();
                    },
                    reset: function() {
                        var e = this._hasher;
                        e.reset(), e.update(this._iKey);
                    },
                    update: function(e) {
                        return this._hasher.update(e), this;
                    },
                    finalize: function(e) {
                        var t = this._hasher, n = t.finalize(e);
                        return t.reset(), t.finalize(this._oKey.clone().concat(n));
                    }
                })));
            }), _(function(e, t) {
                e.exports = x.HmacMD5;
            })), C = function(e) {
                function t(e) {
                    var r;
                    return s(this, t), r = n.call(this, e.message), r.errMsg = e.message || "", Object.defineProperties(u(r), {
                        code: {
                            get: function() {
                                return e.code;
                            }
                        },
                        requestId: {
                            get: function() {
                                return e.requestId;
                            }
                        },
                        message: {
                            get: function() {
                                return this.errMsg;
                            },
                            set: function(e) {
                                this.errMsg = e;
                            }
                        }
                    }), r;
                }
                f(t, l(Error));
                var n = a(t);
                return t;
            }();
            try {
                E = n("fa95").default || n("fa95");
            } catch (P) {
                P = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(P);
                E = {
                    appid: ""
                };
            }
            var I, $ = {
                sign: function(e, t) {
                    var n = "";
                    return Object.keys(e).sort().forEach(function(t) {
                        e[t] && (n = n + "&" + t + "=" + e[t]);
                    }), n = n.slice(1), j(n, t).toString();
                },
                wrappedRequest: function(e, t) {
                    return new Promise(function(n, r) {
                        t(Object.assign(e, {
                            complete: function(e) {
                                e || (e = {});
                                var t = e.data && e.data.header && e.data.header["x-serverless-request-id"] || e.header && e.header["request-id"];
                                if (!e.statusCode || e.statusCode >= 400) return r(new C({
                                    code: "SYS_ERR",
                                    message: e.errMsg || "request:fail",
                                    requestId: t
                                }));
                                var o = e.data;
                                if (o.error) return r(new C({
                                    code: o.error.code,
                                    message: o.error.message,
                                    requestId: t
                                }));
                                o.result = o.data, o.requestId = t, delete o.data, n(o);
                            }
                        }));
                    });
                }
            }, R = {
                image: "image/*",
                jpg: "image/jpeg",
                jpeg: "image/jpeg",
                png: "image/png",
                gif: "image/gif",
                webp: "image/webp",
                svg: "image/svg+xml",
                mp3: "audio/mp3",
                mp4: "video/mp4",
                ogg: "audio/ogg",
                webm: "video/webm"
            }, N = function() {
                function e(t) {
                    s(this, e), [ "spaceId", "clientSecret" ].forEach(function(e) {
                        if (!Object.prototype.hasOwnProperty.call(t, e)) throw new Error("缺少参数" + e);
                    }), this.config = Object.assign({}, {
                        endpoint: "https://api.bspapp.com"
                    }, t), this.config.provider = "aliyun", this.config.requestUrl = this.config.endpoint + "/client", 
                    this.config.envType = this.config.envType || "public", this.config.accessTokenKey = "access_token_" + this.config.spaceId;
                }
                return i(e, [ {
                    key: "setAccessToken",
                    value: function(e) {
                        this.accessToken = e;
                    }
                }, {
                    key: "requestWrapped",
                    value: function(e) {
                        return $.wrappedRequest(e, this.adapter.request);
                    }
                }, {
                    key: "requestAuth",
                    value: function(e) {
                        return this.requestWrapped(e);
                    }
                }, {
                    key: "request",
                    value: function(e, t) {
                        var n = this;
                        return this.hasAccessToken ? t ? this.requestWrapped(e) : this.requestWrapped(e).catch(function(t) {
                            return new Promise(function(e, n) {
                                !t || "GATEWAY_INVALID_TOKEN" !== t.code && "InvalidParameter.InvalidToken" !== t.code ? n(t) : e();
                            }).then(function() {
                                return n.getAccessToken();
                            }).then(function() {
                                var t = n.rebuildRequest(e);
                                return n.request(t, !0);
                            });
                        }) : this.getAccessToken().then(function() {
                            var t = n.rebuildRequest(e);
                            return n.request(t, !0);
                        });
                    }
                }, {
                    key: "rebuildRequest",
                    value: function(e) {
                        var t = Object.assign({}, e);
                        return t.data.token = this.accessToken, t.header["x-basement-token"] = this.accessToken, 
                        t.header["x-serverless-sign"] = $.sign(t.data, this.config.clientSecret), t;
                    }
                }, {
                    key: "setupRequest",
                    value: function(e, t) {
                        var n = Object.assign({}, e, {
                            spaceId: this.config.spaceId,
                            timestamp: Date.now()
                        }), r = {
                            "Content-Type": "application/json"
                        };
                        return "auth" !== t && (n.token = this.accessToken, r["x-basement-token"] = this.accessToken), 
                        r["x-serverless-sign"] = $.sign(n, this.config.clientSecret), {
                            url: this.config.requestUrl,
                            method: "POST",
                            data: n,
                            dataType: "json",
                            header: r
                        };
                    }
                }, {
                    key: "getAccessToken",
                    value: function() {
                        var e = this;
                        return this.requestAuth(this.setupRequest({
                            method: "serverless.auth.user.anonymousAuthorize",
                            params: "{}"
                        }, "auth")).then(function(t) {
                            return new Promise(function(n, r) {
                                t.result && t.result.accessToken ? (e.setAccessToken(t.result.accessToken), n(e.accessToken)) : r(new C({
                                    code: "AUTH_FAILED",
                                    message: "获取accessToken失败"
                                }));
                            });
                        });
                    }
                }, {
                    key: "authorize",
                    value: function() {
                        this.getAccessToken();
                    }
                }, {
                    key: "callFunction",
                    value: function(e) {
                        var t = {
                            method: "serverless.function.runtime.invoke",
                            params: JSON.stringify({
                                functionTarget: e.name,
                                functionArgs: e.data || {}
                            })
                        };
                        return this.request(this.setupRequest(t));
                    }
                }, {
                    key: "getOSSUploadOptionsFromPath",
                    value: function(e) {
                        var t = {
                            method: "serverless.file.resource.generateProximalSign",
                            params: JSON.stringify(e)
                        };
                        return this.request(this.setupRequest(t));
                    }
                }, {
                    key: "uploadFileToOSS",
                    value: function(e) {
                        var t = this, n = e.url, r = e.formData, o = e.name, i = e.filePath, s = e.fileType, a = e.onUploadProgress;
                        return new Promise(function(e, c) {
                            var u = t.adapter.uploadFile({
                                url: n,
                                formData: r,
                                name: o,
                                filePath: i,
                                fileType: s,
                                header: {
                                    "X-OSS-server-side-encrpytion": "AES256"
                                },
                                success: function(t) {
                                    t && t.statusCode < 400 ? e(t) : c(new C({
                                        code: "UPLOAD_FAILED",
                                        message: "文件上传失败"
                                    }));
                                },
                                fail: function(e) {
                                    c(e);
                                }
                            });
                            "function" == typeof a && u && "function" == typeof u.onProgressUpdate && u.onProgressUpdate(function(e) {
                                a({
                                    loaded: e.totalBytesSent,
                                    total: e.totalBytesExpectedToSend
                                });
                            });
                        });
                    }
                }, {
                    key: "reportOSSUpload",
                    value: function(e) {
                        var t = {
                            method: "serverless.file.resource.report",
                            params: JSON.stringify(e)
                        };
                        return this.request(this.setupRequest(t));
                    }
                }, {
                    key: "uploadFile",
                    value: function(e) {
                        var t = this, n = e.filePath, r = e.cloudPath, o = e.fileType, i = void 0 === o ? "image" : o, s = e.onUploadProgress, a = e.config;
                        if (!r) throw new C({
                            code: "CLOUDPATH_REQUIRED",
                            message: "cloudPath不可为空"
                        });
                        var c, u, f, l = a && a.envType || this.config.envType, p = r.split("?")[0].split(".").pop();
                        if (!A(p)) throw new C({
                            code: "UNSUPPORTED_FILE_TYPE",
                            message: "不支持的文件类型"
                        });
                        return this.getOSSUploadOptionsFromPath({
                            env: l,
                            filename: r
                        }).then(function(e) {
                            var r = e.result;
                            c = A(p), u = r.id, f = "https://" + r.cdnDomain + "/" + r.ossPath;
                            var o = {
                                url: "https://" + r.host,
                                formData: {
                                    "Cache-Control": "max-age=2592000",
                                    "Content-Disposition": "attachment",
                                    OSSAccessKeyId: r.accessKeyId,
                                    Signature: r.signature,
                                    host: r.host,
                                    id: u,
                                    key: r.ossPath,
                                    policy: r.policy,
                                    success_action_status: 200
                                },
                                fileName: "file",
                                name: "file",
                                filePath: n,
                                fileType: i,
                                contentType: c
                            };
                            return t.uploadFileToOSS(Object.assign({}, o, {
                                onUploadProgress: s
                            }));
                        }).then(function() {
                            return t.reportOSSUpload({
                                id: u,
                                contentType: c
                            });
                        }).then(function(e) {
                            return new Promise(function(t, r) {
                                e.success ? t({
                                    success: !0,
                                    filePath: n,
                                    fileID: f
                                }) : r(new C({
                                    code: "UPLOAD_FAILED",
                                    message: "文件上传失败"
                                }));
                            });
                        });
                    }
                }, {
                    key: "deleteFile",
                    value: function(e) {
                        var t = e.fileList, n = {
                            method: "serverless.file.resource.delete",
                            params: JSON.stringify({
                                id: t[0]
                            })
                        };
                        return this.request(this.setupRequest(n));
                    }
                }, {
                    key: "hasAccessToken",
                    get: function() {
                        return !!this.accessToken;
                    }
                } ]), e;
            }(), D = {
                init: function(e) {
                    var t = new N(e);
                    [ "uploadFile", "deleteFile" ].forEach(function(e) {
                        t[e] = g(t[e]).bind(t);
                    });
                    var n = {
                        signInAnonymously: function() {
                            return t.authorize();
                        },
                        getLoginState: function() {
                            return Promise.resolve(!1);
                        }
                    };
                    return t.auth = function() {
                        return n;
                    }, t;
                }
            };
            !function(e) {
                e.local = "local", e.none = "none", e.session = "session";
            }(I || (I = {}));
            var U, M, F, H = (U = function(e, t) {
                return (U = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function(e, t) {
                    e.__proto__ = t;
                } || function(e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                })(e, t);
            }, function(e, t) {
                function n() {
                    this.constructor = e;
                }
                U(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, 
                new n());
            }), L = function() {
                return (L = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e;
                }).apply(this, arguments);
            }, q = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this;
                }
                return H(t, e), t.prototype.post = function(e) {
                    var t = e.url, n = e.data, o = e.headers;
                    return new Promise(function(e, i) {
                        r.request({
                            url: O("https:", t),
                            data: n,
                            method: "POST",
                            header: o,
                            success: function(t) {
                                e(t);
                            },
                            fail: function(e) {
                                i(e);
                            }
                        });
                    });
                }, t.prototype.upload = function(e) {
                    return new Promise(function(t, n) {
                        var o = e.url, i = e.file, s = e.data, a = e.headers, c = e.fileType, u = r.uploadFile({
                            url: O("https:", o),
                            name: "file",
                            formData: Object.assign({}, s),
                            filePath: i,
                            fileType: c,
                            header: a,
                            success: function(e) {
                                var n = {
                                    statusCode: e.statusCode,
                                    data: e.data || {}
                                };
                                200 === e.statusCode && s.success_action_status && (n.statusCode = parseInt(s.success_action_status, 10)), 
                                t(n);
                            },
                            fail: function(e) {
                                n(new Error(e.errMsg || "uploadFile:fail"));
                            }
                        });
                        "function" == typeof e.onUploadProgress && u && "function" == typeof u.onProgressUpdate && u.onProgressUpdate(function(t) {
                            e.onUploadProgress({
                                loaded: t.totalBytesSent,
                                total: t.totalBytesExpectedToSend
                            });
                        });
                    });
                }, t.prototype.download = function(e) {
                    var t = e.url, n = e.headers;
                    return new Promise(function(e, o) {
                        r.downloadFile({
                            url: O("https:", t),
                            header: n,
                            success: function(t) {
                                e(200 === t.statusCode && t.tempFilePath ? {
                                    statusCode: 200,
                                    tempFilePath: t.tempFilePath
                                } : t);
                            },
                            fail: function(e) {
                                o(e);
                            }
                        });
                    });
                }, t;
            }(function() {}), B = {
                setItem: function(e, t) {
                    r.setStorageSync(e, t);
                },
                getItem: function(e) {
                    return r.getStorageSync(e);
                },
                removeItem: function(e) {
                    r.removeStorageSync(e);
                },
                clear: function() {
                    r.clearStorageSync();
                }
            }, K = function(e, t) {
                void 0 === t && (t = {});
                var n = r.connectSocket(L({
                    url: e
                }, t));
                return {
                    set onopen(e) {
                        n.onOpen(e);
                    },
                    set onmessage(e) {
                        n.onMessage(e);
                    },
                    set onclose(e) {
                        n.onClose(e);
                    },
                    set onerror(e) {
                        n.onError(e);
                    },
                    send: function(e) {
                        return n.send({
                            data: e
                        });
                    },
                    close: function(e, t) {
                        return n.close({
                            code: e,
                            reason: t
                        });
                    },
                    get readyState() {
                        return n.readyState;
                    },
                    CONNECTING: 0,
                    OPEN: 1,
                    CLOSING: 2,
                    CLOSED: 3
                };
            }, V = {
                genAdapter: function() {
                    return {
                        root: {},
                        reqClass: q,
                        wsClass: K,
                        localStorage: B,
                        primaryStorage: I.local
                    };
                },
                isMatch: function() {
                    return void 0 !== r && !!r.request;
                },
                runtime: "uni_app"
            }, G = _(function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.getQuery = function(e, t) {
                    if ("undefined" == typeof window) return !1;
                    var n = t || window.location.search, r = new RegExp("(^|&)" + e + "=([^&]*)(&|$)"), o = n.substr(n.indexOf("?") + 1).match(r);
                    return null != o ? o[2] : "";
                }, t.getHash = function(e) {
                    var t = window.location.hash.match(new RegExp("[#?&/]" + e + "=([^&#]*)"));
                    return t ? t[1] : "";
                }, t.removeParam = function(e, t) {
                    var n = t.split("?")[0], r = [], o = -1 !== t.indexOf("?") ? t.split("?")[1] : "";
                    if ("" !== o) {
                        for (var i = (r = o.split("&")).length - 1; i >= 0; i -= 1) r[i].split("=")[0] === e && r.splice(i, 1);
                        n = n + "?" + r.join("&");
                    }
                    return n;
                }, t.createPromiseCallback = function() {
                    var e;
                    if (!Promise) {
                        (e = function() {}).promise = {};
                        var t = function() {
                            throw new Error('Your Node runtime does support ES6 Promises. Set "global.Promise" to your preferred implementation of promises.');
                        };
                        return Object.defineProperty(e.promise, "then", {
                            get: t
                        }), Object.defineProperty(e.promise, "catch", {
                            get: t
                        }), e;
                    }
                    var n = new Promise(function(t, n) {
                        e = function(e, r) {
                            return e ? n(e) : t(r);
                        };
                    });
                    return e.promise = n, e;
                }, t.getWeixinCode = function() {
                    return t.getQuery("code") || t.getHash("code");
                }, t.getMiniAppCode = function() {
                    return new Promise(function(e, t) {
                        wx.login({
                            success: function(t) {
                                e(t.code);
                            },
                            fail: function(e) {
                                t(e);
                            }
                        });
                    });
                }, t.isArray = function(e) {
                    return "[object Array]" === Object.prototype.toString.call(e);
                }, t.isString = function(e) {
                    return "string" == typeof e;
                }, t.isUndefined = function(e) {
                    return void 0 === e;
                }, t.isInstanceOf = function(e, t) {
                    return e instanceof t;
                }, t.isFormData = function(e) {
                    return "[object FormData]" === Object.prototype.toString.call(e);
                }, t.genSeqId = function() {
                    return Math.random().toString(16).slice(2);
                }, t.getArgNames = function(e) {
                    var t = e.toString();
                    return t.slice(t.indexOf("(") + 1, t.indexOf(")")).match(/([^\s,]+)/g);
                }, t.formatUrl = function(e, t, n) {
                    void 0 === n && (n = {});
                    var r = /\?/.test(t), o = "";
                    for (var i in n) "" === o ? !r && (t += "?") : o += "&", o += i + "=" + encodeURIComponent(n[i]);
                    return /^http(s)?\:\/\//.test(t += o) ? t : "" + e + t;
                };
            }), W = "dist/index.js", Y = "./dist/index.d.ts", z = {
                build: "npm run tsc && webpack",
                tsc: "tsc -p tsconfig.json",
                "tsc:w": "tsc -p tsconfig.json -w",
                test: "jest --verbose false -i",
                e2e: 'NODE_ENV=e2e webpack && jest --config="./jest.e2e.config.js"  --verbose false -i "e2e"',
                start: "webpack-dev-server --hot --open",
                eslint: 'eslint "./**/*.js" "./**/*.ts"',
                "eslint-fix": 'eslint --fix "./**/*.js" "./**/*.ts"',
                test_web: "npm run tsc && webpack-dev-server --devtool eval-source-map --progress --colors --hot --inline --content-base ./dist --host jimmytest-088bef.tcb.qcloud.la --port 80 --disableHostCheck true --mode development --config webpack.test.js"
            }, X = {
                type: "git",
                url: "https://github.com/TencentCloudBase/tcb-js-sdk"
            }, J = [ "tcb", "js-sdk" ], Q = {
                "@cloudbase/adapter-interface": "^0.2.0",
                "@cloudbase/adapter-wx_mp": "^0.2.1",
                "@cloudbase/database": "^0.9.8"
            }, Z = {
                "@babel/core": "^7.6.2",
                "@babel/plugin-proposal-class-properties": "^7.5.5",
                "@babel/plugin-proposal-object-rest-spread": "^7.6.2",
                "@babel/plugin-transform-runtime": "^7.6.2",
                "@babel/preset-env": "^7.6.2",
                "@babel/preset-typescript": "^7.6.0",
                "@babel/runtime": "^7.6.2",
                "@types/jest": "^23.1.4",
                "@types/node": "^10.14.4",
                "@types/superagent": "^4.1.4",
                axios: "^0.19.0",
                "babel-eslint": "^10.0.1",
                "babel-loader": "^8.0.6",
                "babel-polyfill": "^6.26.0",
                eslint: "^5.16.0",
                "eslint-config-alloy": "^1.4.2",
                "eslint-config-prettier": "^4.1.0",
                "eslint-plugin-prettier": "^3.0.1",
                "eslint-plugin-typescript": "^1.0.0-rc.3",
                express: "^4.17.1",
                husky: "^3.1.0",
                jest: "^24.7.1",
                "jest-puppeteer": "^4.3.0",
                "lint-staged": "^9.5.0",
                "power-assert": "^1.6.1",
                puppeteer: "^1.20.0",
                "serve-static": "^1.14.1",
                "ts-jest": "^23.10.4",
                "ts-loader": "^6.2.1",
                typescript: "^3.4.3",
                "typescript-eslint-parser": "^22.0.0",
                webpack: "^4.41.3",
                "webpack-bundle-analyzer": "^3.4.1",
                "webpack-cli": "^3.3.0",
                "webpack-dev-server": "^3.3.1",
                "webpack-merge": "^4.2.2",
                "webpack-visualizer-plugin": "^0.1.11"
            }, ee = {
                hooks: {
                    "pre-commit": "lint-staged"
                }
            }, te = {
                name: "tcb-js-sdk",
                version: "1.3.5",
                description: "js sdk for tcb",
                main: W,
                types: Y,
                scripts: z,
                repository: X,
                keywords: J,
                author: "jimmyjzhang",
                license: "ISC",
                dependencies: Q,
                devDependencies: Z,
                husky: ee,
                "lint-staged": {
                    "*.{js,ts}": [ "eslint --fix", "git add" ]
                }
            }, ne = (M = Object.freeze({
                __proto__: null,
                name: "tcb-js-sdk",
                version: "1.3.5",
                description: "js sdk for tcb",
                main: W,
                types: Y,
                scripts: z,
                repository: X,
                keywords: J,
                author: "jimmyjzhang",
                license: "ISC",
                dependencies: Q,
                devDependencies: Z,
                husky: ee,
                default: te
            })) && M.default || M, re = _(function(e, t) {
                var n = P && P.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e) for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t;
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = n(ne);
                t.SDK_VERISON = r.version, t.ACCESS_TOKEN = "access_token", t.ACCESS_TOKEN_Expire = "access_token_expire", 
                t.REFRESH_TOKEN = "refresh_token", t.ANONYMOUS_UUID = "anonymous_uuid", t.LOGIN_TYPE_KEY = "login_type", 
                t.protocol = "undefined" != typeof location && "http:" === location.protocol ? "http:" : "https:", 
                t.BASE_URL = "//tcb-api.tencentcloudapi.com/web";
            });
            !function(e) {
                e.local = "local", e.none = "none", e.session = "session";
            }(F || (F = {}));
            var oe = Object.freeze({
                __proto__: null,
                get StorageType() {
                    return F;
                },
                AbstractSDKRequest: function() {},
                AbstractStorage: function() {},
                formatUrl: function(e, t, n) {
                    void 0 === n && (n = {});
                    var r = /\?/.test(t), o = "";
                    for (var i in n) "" === o ? !r && (t += "?") : o += "&", o += i + "=" + encodeURIComponent(n[i]);
                    return /^http(s)?\:\/\//.test(t += o) ? t : "" + e + t;
                }
            }), ie = _(function(e, t) {
                var n = P && P.__extends || function() {
                    var e = function(t, n) {
                        return (e = Object.setPrototypeOf || {
                            __proto__: []
                        } instanceof Array && function(e, t) {
                            e.__proto__ = t;
                        } || function(e, t) {
                            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                        })(t, n);
                    };
                    return function(t, n) {
                        function r() {
                            this.constructor = t;
                        }
                        e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, 
                        new r());
                    };
                }(), r = P && P.__assign || function() {
                    return (r = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e;
                    }).apply(this, arguments);
                }, o = P && P.__awaiter || function(e, t, n, r) {
                    return new (n || (n = Promise))(function(o, i) {
                        function s(e) {
                            try {
                                c(r.next(e));
                            } catch (e) {
                                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                i(e);
                            }
                        }
                        function a(e) {
                            try {
                                c(r.throw(e));
                            } catch (e) {
                                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                i(e);
                            }
                        }
                        function c(e) {
                            var t;
                            e.done ? o(e.value) : ((t = e.value) instanceof n ? t : new n(function(e) {
                                e(t);
                            })).then(s, a);
                        }
                        c((r = r.apply(e, t || [])).next());
                    });
                }, i = P && P.__generator || function(e, t) {
                    function n(n) {
                        return function(s) {
                            return function(n) {
                                if (r) throw new TypeError("Generator is already executing.");
                                for (;a; ) try {
                                    if (r = 1, o && (i = 2 & n[0] ? o.return : n[0] ? o.throw || ((i = o.return) && i.call(o), 
                                    0) : o.next) && !(i = i.call(o, n[1])).done) return i;
                                    switch (o = 0, i && (n = [ 2 & n[0], i.value ]), n[0]) {
                                      case 0:
                                      case 1:
                                        i = n;
                                        break;

                                      case 4:
                                        return a.label++, {
                                            value: n[1],
                                            done: !1
                                        };

                                      case 5:
                                        a.label++, o = n[1], n = [ 0 ];
                                        continue;

                                      case 7:
                                        n = a.ops.pop(), a.trys.pop();
                                        continue;

                                      default:
                                        if (i = a.trys, !((i = i.length > 0 && i[i.length - 1]) || 6 !== n[0] && 2 !== n[0])) {
                                            a = 0;
                                            continue;
                                        }
                                        if (3 === n[0] && (!i || n[1] > i[0] && n[1] < i[3])) {
                                            a.label = n[1];
                                            break;
                                        }
                                        if (6 === n[0] && a.label < i[1]) {
                                            a.label = i[1], i = n;
                                            break;
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2], a.ops.push(n);
                                            break;
                                        }
                                        i[2] && a.ops.pop(), a.trys.pop();
                                        continue;
                                    }
                                    n = t.call(e, a);
                                } catch (e) {
                                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                    n = [ 6, e ], o = 0;
                                } finally {
                                    r = i = 0;
                                }
                                if (5 & n[0]) throw n[1];
                                return {
                                    value: n[0] ? n[1] : void 0,
                                    done: !0
                                };
                            }([ n, s ]);
                        };
                    }
                    var r, o, i, s, a = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1];
                        },
                        trys: [],
                        ops: []
                    };
                    return s = {
                        next: n(0),
                        throw: n(1),
                        return: n(2)
                    }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                        return this;
                    }), s;
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var s = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this;
                    }
                    return n(t, e), t.prototype.get = function(e) {
                        return this._request(r(r({}, e), {
                            method: "get"
                        }));
                    }, t.prototype.post = function(e) {
                        return this._request(r(r({}, e), {
                            method: "post"
                        }));
                    }, t.prototype.upload = function(e) {
                        var t = e.data, n = e.file, o = e.name, i = new FormData();
                        for (var s in t) i.append(s, t[s]);
                        return i.append("key", o), i.append("file", n), this._request(r(r({}, e), {
                            data: i,
                            method: "post"
                        }));
                    }, t.prototype.download = function(e) {
                        return o(this, void 0, void 0, function() {
                            var t, n;
                            return i(this, function(r) {
                                return t = decodeURIComponent(new URL(e.url).pathname.split("/").pop() || ""), (n = document.createElement("a")).href = e.url, 
                                n.setAttribute("download", t), n.setAttribute("target", "_blank"), document.body.appendChild(n), 
                                n.click(), [ 2, new Promise(function(t) {
                                    t({
                                        statusCode: 200,
                                        tempFilePath: e.url
                                    });
                                }) ];
                            });
                        });
                    }, t.prototype._request = function(e) {
                        var t = String(e.method).toLowerCase() || "get";
                        return new Promise(function(n) {
                            var r = e.url, o = e.headers, i = void 0 === o ? {} : o, s = e.data, a = e.responseType, c = G.formatUrl(re.protocol, r, "get" === t ? s : {}), u = new XMLHttpRequest();
                            for (var f in u.open(t, c), a && (u.responseType = a), i) u.setRequestHeader(f, i[f]);
                            u.onreadystatechange = function() {
                                if (4 === u.readyState) {
                                    var e = {
                                        statusCode: u.status
                                    };
                                    try {
                                        e.data = JSON.parse(u.responseText);
                                    } catch (e) {}
                                    n(e);
                                }
                            }, u.send("post" === t && G.isFormData(s) ? s : JSON.stringify(s || {}));
                        });
                    }, t;
                }(oe.AbstractSDKRequest);
                t.WebRequest = s, t.genAdapter = function() {
                    return {
                        root: window,
                        reqClass: s,
                        wsClass: WebSocket,
                        localStorage: localStorage,
                        sessionStorage: sessionStorage
                    };
                };
            }), se = _(function(e, t) {
                var n = P && P.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e) for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t;
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r, o = n(ie);
                !function(e) {
                    e.WEB = "web", e.WX_MP = "wx_mp";
                }(r = t.RUNTIME || (t.RUNTIME = {})), t.useAdapters = function(e) {
                    for (var t = 0, n = G.isArray(e) ? e : [ e ]; t < n.length; t++) {
                        var r = n[t], o = r.isMatch, i = r.genAdapter, s = r.runtime;
                        if (o()) return {
                            adapter: i(),
                            runtime: s
                        };
                    }
                }, t.useDefaultAdapter = function() {
                    return {
                        adapter: o.genAdapter(),
                        runtime: r.WEB
                    };
                }, t.Adapter = {
                    adapter: null,
                    runtime: void 0
                };
            }), ae = _(function(e, t) {
                var n = P && P.__extends || function() {
                    var e = function(t, n) {
                        return (e = Object.setPrototypeOf || {
                            __proto__: []
                        } instanceof Array && function(e, t) {
                            e.__proto__ = t;
                        } || function(e, t) {
                            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                        })(t, n);
                    };
                    return function(t, n) {
                        function r() {
                            this.constructor = t;
                        }
                        e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, 
                        new r());
                    };
                }();
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = function() {
                    function e(e) {
                        switch (se.Adapter.adapter.primaryStorage || e) {
                          case "local":
                            this.storageClass = se.Adapter.adapter.localStorage || new o();
                            break;

                          case "none":
                            this.storageClass = new o();
                            break;

                          default:
                            this.storageClass = se.Adapter.adapter.sessionStorage || new o();
                        }
                    }
                    return e.prototype.setStore = function(e, t, n) {
                        try {
                            if (!this.storageClass) return;
                        } catch (e) {
                            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                            return;
                        }
                        var r, o = {};
                        o.version = n || "localCachev1", o.content = t, r = JSON.stringify(o);
                        try {
                            this.storageClass.setItem(e, r);
                        } catch (e) {
                            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                            return;
                        }
                    }, e.prototype.getStore = function(e, t) {
                        try {
                            if (!this.storageClass) return;
                        } catch (e) {
                            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                            return "";
                        }
                        t = t || "localCachev1";
                        var n = this.storageClass.getItem(e);
                        return n && n.indexOf(t) >= 0 ? JSON.parse(n).content : "";
                    }, e.prototype.removeStore = function(e) {
                        this.storageClass.removeItem(e);
                    }, e;
                }();
                t.Cache = r;
                var o = function(e) {
                    function t() {
                        var t = e.call(this) || this;
                        return se.Adapter.adapter.root.tcbObject || (se.Adapter.adapter.root.tcbObject = {}), 
                        t;
                    }
                    return n(t, e), t.prototype.setItem = function(e, t) {
                        se.Adapter.adapter.root.tcbObject[e] = t;
                    }, t.prototype.getItem = function(e) {
                        return se.Adapter.adapter.root.tcbObject[e];
                    }, t.prototype.removeItem = function(e) {
                        delete se.Adapter.adapter.root.tcbObject[e];
                    }, t.prototype.clear = function() {
                        delete se.Adapter.adapter.root.tcbObject;
                    }, t;
                }(oe.AbstractStorage);
            }), ce = _(function(e, t) {
                var n = P && P.__extends || function() {
                    var e = function(t, n) {
                        return (e = Object.setPrototypeOf || {
                            __proto__: []
                        } instanceof Array && function(e, t) {
                            e.__proto__ = t;
                        } || function(e, t) {
                            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                        })(t, n);
                    };
                    return function(t, n) {
                        function r() {
                            this.constructor = t;
                        }
                        e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, 
                        new r());
                    };
                }(), r = P && P.__spreadArrays || function() {
                    for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
                    var r = Array(e), o = 0;
                    for (t = 0; t < n; t++) for (var i = arguments[t], s = 0, a = i.length; s < a; s++, 
                    o++) r[o] = i[s];
                    return r;
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var o = function(e, t) {
                    this.data = t || null, this.name = e;
                };
                t.IEvent = o;
                var i = function(e) {
                    function t(t, n) {
                        var r = e.call(this, "error", {
                            error: t,
                            data: n
                        }) || this;
                        return r.error = t, r;
                    }
                    return n(t, e), t;
                }(o);
                t.IErrorEvent = i;
                var s = function() {
                    function e() {
                        this._listeners = {};
                    }
                    return e.prototype.on = function(e, t) {
                        return function(e, t, n) {
                            n[e] = n[e] || [], n[e].push(t);
                        }(e, t, this._listeners), this;
                    }, e.prototype.off = function(e, t) {
                        return function(e, t, n) {
                            if (n && n[e]) {
                                var r = n[e].indexOf(t);
                                -1 !== r && n[e].splice(r, 1);
                            }
                        }(e, t, this._listeners), this;
                    }, e.prototype.fire = function(e, t) {
                        if (G.isInstanceOf(e, i)) return console.error(e.error), this;
                        var n = G.isString(e) ? new o(e, t || {}) : e, s = n.name;
                        if (this._listens(s)) {
                            n.target = this;
                            for (var a = 0, c = this._listeners[s] ? r(this._listeners[s]) : []; a < c.length; a++) c[a].call(this, n);
                        }
                        return this;
                    }, e.prototype._listens = function(e) {
                        return this._listeners[e] && this._listeners[e].length > 0;
                    }, e;
                }();
                t.IEventEmitter = s;
                var a = new s();
                t.addEventListener = function(e, t) {
                    a.on(e, t);
                }, t.activateEvent = function(e, t) {
                    void 0 === t && (t = {}), a.fire(e, t);
                }, t.removeEventListener = function(e, t) {
                    a.off(e, t);
                }, t.EVENTS = {
                    LOGIN_STATE_CHANGED: "loginStateChanged",
                    LOGIN_STATE_EXPIRE: "loginStateExpire",
                    LOGIN_TYPE_CHANGE: "loginTypeChanged",
                    ANONYMOUS_CONVERTED: "anonymousConverted",
                    REFRESH_ACCESS_TOKEN: "refreshAccessToken"
                };
            }), ue = _(function(e, t) {
                function n(e, t, n) {
                    var r = e[t];
                    e[t] = function(t) {
                        var i = {}, s = {};
                        n.forEach(function(n) {
                            var r = n.call(e, t), o = r.data, a = r.headers;
                            Object.assign(i, o), Object.assign(s, a);
                        });
                        var a = t.data;
                        return a && function() {
                            if (G.isFormData(a)) for (var e in i) a.append(e, i[e]); else t.data = o(o({}, a), i);
                        }(), t.headers = o(o({}, t.headers || {}), s), r.call(e, t);
                    };
                }
                function r() {
                    var e = G.genSeqId();
                    return {
                        data: {
                            seqId: e
                        },
                        headers: o(o({}, c), {
                            "x-seqid": e
                        })
                    };
                }
                var o = P && P.__assign || function() {
                    return (o = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e;
                    }).apply(this, arguments);
                }, i = P && P.__awaiter || function(e, t, n, r) {
                    return new (n || (n = Promise))(function(o, i) {
                        function s(e) {
                            try {
                                c(r.next(e));
                            } catch (e) {
                                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                i(e);
                            }
                        }
                        function a(e) {
                            try {
                                c(r.throw(e));
                            } catch (e) {
                                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                i(e);
                            }
                        }
                        function c(e) {
                            var t;
                            e.done ? o(e.value) : ((t = e.value) instanceof n ? t : new n(function(e) {
                                e(t);
                            })).then(s, a);
                        }
                        c((r = r.apply(e, t || [])).next());
                    });
                }, s = P && P.__generator || function(e, t) {
                    function n(n) {
                        return function(s) {
                            return function(n) {
                                if (r) throw new TypeError("Generator is already executing.");
                                for (;a; ) try {
                                    if (r = 1, o && (i = 2 & n[0] ? o.return : n[0] ? o.throw || ((i = o.return) && i.call(o), 
                                    0) : o.next) && !(i = i.call(o, n[1])).done) return i;
                                    switch (o = 0, i && (n = [ 2 & n[0], i.value ]), n[0]) {
                                      case 0:
                                      case 1:
                                        i = n;
                                        break;

                                      case 4:
                                        return a.label++, {
                                            value: n[1],
                                            done: !1
                                        };

                                      case 5:
                                        a.label++, o = n[1], n = [ 0 ];
                                        continue;

                                      case 7:
                                        n = a.ops.pop(), a.trys.pop();
                                        continue;

                                      default:
                                        if (i = a.trys, !((i = i.length > 0 && i[i.length - 1]) || 6 !== n[0] && 2 !== n[0])) {
                                            a = 0;
                                            continue;
                                        }
                                        if (3 === n[0] && (!i || n[1] > i[0] && n[1] < i[3])) {
                                            a.label = n[1];
                                            break;
                                        }
                                        if (6 === n[0] && a.label < i[1]) {
                                            a.label = i[1], i = n;
                                            break;
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2], a.ops.push(n);
                                            break;
                                        }
                                        i[2] && a.ops.pop(), a.trys.pop();
                                        continue;
                                    }
                                    n = t.call(e, a);
                                } catch (e) {
                                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                    n = [ 6, e ], o = 0;
                                } finally {
                                    r = i = 0;
                                }
                                if (5 & n[0]) throw n[1];
                                return {
                                    value: n[0] ? n[1] : void 0,
                                    done: !0
                                };
                            }([ n, s ]);
                        };
                    }
                    var r, o, i, s, a = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1];
                        },
                        trys: [],
                        ops: []
                    };
                    return s = {
                        next: n(0),
                        throw: n(1),
                        return: n(2)
                    }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                        return this;
                    }), s;
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var a = [ "auth.getJwt", "auth.logout", "auth.signInWithTicket", "auth.signInAnonymously" ], c = {
                    "X-SDK-Version": re.SDK_VERISON
                }, u = function() {
                    function e(e) {
                        void 0 === e && (e = {}), this.config = e, this.cache = new ae.Cache(e.persistence), 
                        this.accessTokenKey = re.ACCESS_TOKEN + "_" + e.env, this.accessTokenExpireKey = re.ACCESS_TOKEN_Expire + "_" + e.env, 
                        this.refreshTokenKey = re.REFRESH_TOKEN + "_" + e.env, this.anonymousUuidKey = re.ANONYMOUS_UUID + "_" + e.env, 
                        this.loginTypeKey = re.LOGIN_TYPE_KEY + "_" + e.env, this._reqClass = new se.Adapter.adapter.reqClass(), 
                        n(this._reqClass, "post", [ r ]), n(this._reqClass, "upload", [ r ]), n(this._reqClass, "download", [ r ]);
                    }
                    return e.prototype.post = function(e) {
                        return i(this, void 0, void 0, function() {
                            return s(this, function(t) {
                                switch (t.label) {
                                  case 0:
                                    return [ 4, this._reqClass.post(e) ];

                                  case 1:
                                    return [ 2, t.sent() ];
                                }
                            });
                        });
                    }, e.prototype.upload = function(e) {
                        return i(this, void 0, void 0, function() {
                            return s(this, function(t) {
                                switch (t.label) {
                                  case 0:
                                    return [ 4, this._reqClass.upload(e) ];

                                  case 1:
                                    return [ 2, t.sent() ];
                                }
                            });
                        });
                    }, e.prototype.download = function(e) {
                        return i(this, void 0, void 0, function() {
                            return s(this, function(t) {
                                switch (t.label) {
                                  case 0:
                                    return [ 4, this._reqClass.download(e) ];

                                  case 1:
                                    return [ 2, t.sent() ];
                                }
                            });
                        });
                    }, e.prototype.refreshAccessToken = function() {
                        return i(this, void 0, void 0, function() {
                            var e, t, n;
                            return s(this, function(r) {
                                switch (r.label) {
                                  case 0:
                                    this._refreshAccessTokenPromise || (this._refreshAccessTokenPromise = this._refreshAccessToken()), 
                                    r.label = 1;

                                  case 1:
                                    return r.trys.push([ 1, 3, , 4 ]), [ 4, this._refreshAccessTokenPromise ];

                                  case 2:
                                    return e = r.sent(), [ 3, 4 ];

                                  case 3:
                                    return n = r.sent(), t = n, [ 3, 4 ];

                                  case 4:
                                    if (this._refreshAccessTokenPromise = null, this._shouldRefreshAccessTokenHook = null, 
                                    t) throw t;
                                    return [ 2, e ];
                                }
                            });
                        });
                    }, e.prototype._refreshAccessToken = function() {
                        return i(this, void 0, void 0, function() {
                            var e, t, n, r;
                            return s(this, function(o) {
                                switch (o.label) {
                                  case 0:
                                    if (this.cache.removeStore(this.accessTokenKey), this.cache.removeStore(this.accessTokenExpireKey), 
                                    !(e = this.cache.getStore(this.refreshTokenKey))) throw new Error("[tcb-js-sdk] 未登录CloudBase");
                                    return t = {
                                        refresh_token: e
                                    }, this.cache.getStore(this.loginTypeKey) === fe.LOGINTYPE.ANONYMOUS && (t.anonymous_uuid = this.cache.getStore(this.anonymousUuidKey)), 
                                    [ 4, this.request("auth.getJwt", t) ];

                                  case 1:
                                    if ((n = o.sent()).data.code) throw "SIGN_PARAM_INVALID" !== (r = n.data.code) && "REFRESH_TOKEN_EXPIRED" !== r && "INVALID_REFRESH_TOKEN" !== r || (ce.activateEvent(ce.EVENTS.LOGIN_STATE_EXPIRE), 
                                    this.cache.removeStore(this.refreshTokenKey)), new Error("[tcb-js-sdk] 刷新access token失败：" + n.data.code);
                                    return n.data.access_token ? (ce.activateEvent(ce.EVENTS.REFRESH_ACCESS_TOKEN), 
                                    this.cache.setStore(this.accessTokenKey, n.data.access_token), this.cache.setStore(this.accessTokenExpireKey, n.data.access_token_expire + Date.now()), 
                                    ce.activateEvent(ce.EVENTS.LOGIN_TYPE_CHANGE, n.data.login_type), [ 2, {
                                        accessToken: n.data.access_token,
                                        accessTokenExpire: n.data.access_token_expire
                                    } ]) : (n.data.refresh_token && (this.cache.removeStore(this.refreshTokenKey), this.cache.setStore(this.refreshTokenKey, n.data.refresh_token), 
                                    this._refreshAccessToken()), [ 2 ]);
                                }
                            });
                        });
                    }, e.prototype.getAccessToken = function() {
                        return i(this, void 0, void 0, function() {
                            var e, t, n, r;
                            return s(this, function(o) {
                                switch (o.label) {
                                  case 0:
                                    return e = this.cache.getStore(this.accessTokenKey), t = this.cache.getStore(this.accessTokenExpireKey), 
                                    n = !0, (r = this._shouldRefreshAccessTokenHook) ? [ 4, this._shouldRefreshAccessTokenHook(e, t) ] : [ 3, 2 ];

                                  case 1:
                                    r = !o.sent(), o.label = 2;

                                  case 2:
                                    return r && (n = !1), (!e || !t || t < Date.now()) && n ? [ 2, this.refreshAccessToken() ] : [ 2, {
                                        accessToken: e,
                                        accessTokenExpire: t
                                    } ];
                                }
                            });
                        });
                    }, e.prototype.request = function(e, t, n) {
                        return i(this, void 0, void 0, function() {
                            var r, i, c, u, f, l, p, h, d, v, y, _;
                            return s(this, function(s) {
                                switch (s.label) {
                                  case 0:
                                    return r = "application/x-www-form-urlencoded", i = o({
                                        action: e,
                                        env: this.config.env,
                                        dataVersion: "2019-08-16"
                                    }, t), -1 !== a.indexOf(e) ? [ 3, 2 ] : (c = i, [ 4, this.getAccessToken() ]);

                                  case 1:
                                    c.access_token = s.sent().accessToken, s.label = 2;

                                  case 2:
                                    if ("storage.uploadFile" === e) {
                                        for (f in u = new FormData()) u.hasOwnProperty(f) && void 0 !== u[f] && u.append(f, i[f]);
                                        r = "multipart/form-data";
                                    } else r = "application/json;charset=UTF-8", u = i;
                                    return l = {
                                        headers: {
                                            "content-type": r
                                        }
                                    }, n && n.onUploadProgress && (l.onUploadProgress = n.onUploadProgress), p = t.parse, 
                                    h = t.query, d = t.search, v = {
                                        env: this.config.env
                                    }, p && (v.parse = !0), h && (v = o(o({}, h), v)), y = G.formatUrl(re.protocol, re.BASE_URL, v), 
                                    d && (y += d), [ 4, this.post(o({
                                        url: y,
                                        data: u
                                    }, l)) ];

                                  case 3:
                                    if (_ = s.sent(), 200 !== Number(_.status) && 200 !== Number(_.statusCode) || !_.data) throw new Error("network request error");
                                    return [ 2, _ ];
                                }
                            });
                        });
                    }, e.prototype.send = function(e, t) {
                        return void 0 === t && (t = {}), i(this, void 0, void 0, function() {
                            var n, r, o;
                            return s(this, function(i) {
                                switch (i.label) {
                                  case 0:
                                    return n = setTimeout(function() {
                                        console.warn("Database operation is longer than 3s. Please check query performance and your network environment.");
                                    }, 3e3), [ 4, this.request(e, t, {
                                        onUploadProgress: t.onUploadProgress
                                    }) ];

                                  case 1:
                                    return r = i.sent(), clearTimeout(n), "ACCESS_TOKEN_EXPIRED" !== r.data.code || -1 !== a.indexOf(e) ? [ 3, 4 ] : [ 4, this.refreshAccessToken() ];

                                  case 2:
                                    return i.sent(), [ 4, this.request(e, t, {
                                        onUploadProgress: t.onUploadProgress
                                    }) ];

                                  case 3:
                                    if ((o = i.sent()).data.code) throw new Error("[" + o.data.code + "] " + o.data.message);
                                    return [ 2, o.data ];

                                  case 4:
                                    if (r.data.code) throw new Error("[" + r.data.code + "] " + r.data.message);
                                    return [ 2, r.data ];
                                }
                            });
                        });
                    }, e;
                }();
                t.Request = u;
            }), fe = _(function(e, t) {
                var n, r = P && P.__awaiter || function(e, t, n, r) {
                    return new (n || (n = Promise))(function(o, i) {
                        function s(e) {
                            try {
                                c(r.next(e));
                            } catch (e) {
                                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                i(e);
                            }
                        }
                        function a(e) {
                            try {
                                c(r.throw(e));
                            } catch (e) {
                                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                i(e);
                            }
                        }
                        function c(e) {
                            var t;
                            e.done ? o(e.value) : ((t = e.value) instanceof n ? t : new n(function(e) {
                                e(t);
                            })).then(s, a);
                        }
                        c((r = r.apply(e, t || [])).next());
                    });
                }, o = P && P.__generator || function(e, t) {
                    function n(n) {
                        return function(s) {
                            return function(n) {
                                if (r) throw new TypeError("Generator is already executing.");
                                for (;a; ) try {
                                    if (r = 1, o && (i = 2 & n[0] ? o.return : n[0] ? o.throw || ((i = o.return) && i.call(o), 
                                    0) : o.next) && !(i = i.call(o, n[1])).done) return i;
                                    switch (o = 0, i && (n = [ 2 & n[0], i.value ]), n[0]) {
                                      case 0:
                                      case 1:
                                        i = n;
                                        break;

                                      case 4:
                                        return a.label++, {
                                            value: n[1],
                                            done: !1
                                        };

                                      case 5:
                                        a.label++, o = n[1], n = [ 0 ];
                                        continue;

                                      case 7:
                                        n = a.ops.pop(), a.trys.pop();
                                        continue;

                                      default:
                                        if (i = a.trys, !((i = i.length > 0 && i[i.length - 1]) || 6 !== n[0] && 2 !== n[0])) {
                                            a = 0;
                                            continue;
                                        }
                                        if (3 === n[0] && (!i || n[1] > i[0] && n[1] < i[3])) {
                                            a.label = n[1];
                                            break;
                                        }
                                        if (6 === n[0] && a.label < i[1]) {
                                            a.label = i[1], i = n;
                                            break;
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2], a.ops.push(n);
                                            break;
                                        }
                                        i[2] && a.ops.pop(), a.trys.pop();
                                        continue;
                                    }
                                    n = t.call(e, a);
                                } catch (e) {
                                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                    n = [ 6, e ], o = 0;
                                } finally {
                                    r = i = 0;
                                }
                                if (5 & n[0]) throw n[1];
                                return {
                                    value: n[0] ? n[1] : void 0,
                                    done: !0
                                };
                            }([ n, s ]);
                        };
                    }
                    var r, o, i, s, a = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1];
                        },
                        trys: [],
                        ops: []
                    };
                    return s = {
                        next: n(0),
                        throw: n(1),
                        return: n(2)
                    }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                        return this;
                    }), s;
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), function(e) {
                    e.ANONYMOUS = "ANONYMOUS", e.WECHAT = "WECHAT", e.CUSTOM = "CUSTOM", e.NULL = "NULL";
                }(n = t.LOGINTYPE || (t.LOGINTYPE = {}));
                var i = function() {
                    function e(e) {
                        this._loginType = n.NULL, this.config = e, this.onLoginTypeChanged = this.onLoginTypeChanged.bind(this), 
                        ce.addEventListener(ce.EVENTS.LOGIN_TYPE_CHANGE, this.onLoginTypeChanged);
                    }
                    return e.prototype.init = function() {
                        this.httpRequest = new ue.Request(this.config), this.cache = new ae.Cache(this.config.persistence), 
                        this.accessTokenKey = re.ACCESS_TOKEN + "_" + this.config.env, this.accessTokenExpireKey = re.ACCESS_TOKEN_Expire + "_" + this.config.env, 
                        this.refreshTokenKey = re.REFRESH_TOKEN + "_" + this.config.env, this.loginTypeKey = re.LOGIN_TYPE_KEY + "_" + this.config.env;
                    }, e.prototype.onLoginTypeChanged = function(e) {
                        this._loginType = e.data, this.cache.setStore(this.loginTypeKey, this._loginType);
                    }, Object.defineProperty(e.prototype, "loginType", {
                        get: function() {
                            return this._loginType;
                        },
                        enumerable: !0,
                        configurable: !0
                    }), e.prototype.setRefreshToken = function(e) {
                        this.cache.removeStore(this.accessTokenKey), this.cache.removeStore(this.accessTokenExpireKey), 
                        this.cache.setStore(this.refreshTokenKey, e);
                    }, e.prototype.getRefreshTokenByWXCode = function(e, t, n) {
                        return r(this, void 0, void 0, function() {
                            var r;
                            return o(this, function(o) {
                                return r = se.Adapter.runtime === se.RUNTIME.WX_MP ? "1" : "0", [ 2, this.httpRequest.send("auth.getJwt", {
                                    appid: e,
                                    loginType: t,
                                    code: n,
                                    hybridMiniapp: r
                                }).then(function(e) {
                                    if (e.code) throw new Error("[tcb-js-sdk] 微信登录失败: " + e.code);
                                    if (e.refresh_token) return {
                                        refreshToken: e.refresh_token,
                                        accessToken: e.access_token,
                                        accessTokenExpire: e.access_token_expire
                                    };
                                    throw new Error("[tcb-js-sdk] getJwt未返回refreshToken");
                                }) ];
                            });
                        });
                    }, e;
                }();
                t.default = i;
            }), le = _(function(e, t) {
                var n = P && P.__extends || function() {
                    var e = function(t, n) {
                        return (e = Object.setPrototypeOf || {
                            __proto__: []
                        } instanceof Array && function(e, t) {
                            e.__proto__ = t;
                        } || function(e, t) {
                            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                        })(t, n);
                    };
                    return function(t, n) {
                        function r() {
                            this.constructor = t;
                        }
                        e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, 
                        new r());
                    };
                }(), r = P && P.__awaiter || function(e, t, n, r) {
                    return new (n || (n = Promise))(function(o, i) {
                        function s(e) {
                            try {
                                c(r.next(e));
                            } catch (e) {
                                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                i(e);
                            }
                        }
                        function a(e) {
                            try {
                                c(r.throw(e));
                            } catch (e) {
                                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                i(e);
                            }
                        }
                        function c(e) {
                            var t;
                            e.done ? o(e.value) : ((t = e.value) instanceof n ? t : new n(function(e) {
                                e(t);
                            })).then(s, a);
                        }
                        c((r = r.apply(e, t || [])).next());
                    });
                }, o = P && P.__generator || function(e, t) {
                    function n(n) {
                        return function(s) {
                            return function(n) {
                                if (r) throw new TypeError("Generator is already executing.");
                                for (;a; ) try {
                                    if (r = 1, o && (i = 2 & n[0] ? o.return : n[0] ? o.throw || ((i = o.return) && i.call(o), 
                                    0) : o.next) && !(i = i.call(o, n[1])).done) return i;
                                    switch (o = 0, i && (n = [ 2 & n[0], i.value ]), n[0]) {
                                      case 0:
                                      case 1:
                                        i = n;
                                        break;

                                      case 4:
                                        return a.label++, {
                                            value: n[1],
                                            done: !1
                                        };

                                      case 5:
                                        a.label++, o = n[1], n = [ 0 ];
                                        continue;

                                      case 7:
                                        n = a.ops.pop(), a.trys.pop();
                                        continue;

                                      default:
                                        if (i = a.trys, !((i = i.length > 0 && i[i.length - 1]) || 6 !== n[0] && 2 !== n[0])) {
                                            a = 0;
                                            continue;
                                        }
                                        if (3 === n[0] && (!i || n[1] > i[0] && n[1] < i[3])) {
                                            a.label = n[1];
                                            break;
                                        }
                                        if (6 === n[0] && a.label < i[1]) {
                                            a.label = i[1], i = n;
                                            break;
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2], a.ops.push(n);
                                            break;
                                        }
                                        i[2] && a.ops.pop(), a.trys.pop();
                                        continue;
                                    }
                                    n = t.call(e, a);
                                } catch (e) {
                                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                    n = [ 6, e ], o = 0;
                                } finally {
                                    r = i = 0;
                                }
                                if (5 & n[0]) throw n[1];
                                return {
                                    value: n[0] ? n[1] : void 0,
                                    done: !0
                                };
                            }([ n, s ]);
                        };
                    }
                    var r, o, i, s, a = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1];
                        },
                        trys: [],
                        ops: []
                    };
                    return s = {
                        next: n(0),
                        throw: n(1),
                        return: n(2)
                    }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                        return this;
                    }), s;
                }, i = P && P.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e) for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t;
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var s, a, c = i(G), u = i(fe);
                !function(e) {
                    e.snsapi_base = "snsapi_base", e.snsapi_userinfo = "snsapi_userinfo", e.snsapi_login = "snsapi_login";
                }(s || (s = {})), function(e) {
                    e.redirect = "redirect", e.prompt = "prompt";
                }(a || (a = {}));
                var f = {}, l = function(e) {
                    function t(t, n, r, o, i) {
                        var s = e.call(this, t) || this;
                        return s.config = t, s.appid = n, s.scope = se.Adapter.runtime === se.RUNTIME.WX_MP ? "snsapi_base" : r, 
                        s.state = i || "weixin", s.loginMode = o || "redirect", s;
                    }
                    return n(t, e), t.prototype.signIn = function() {
                        return r(this, void 0, void 0, function() {
                            var e, t, n;
                            return o(this, function(r) {
                                switch (r.label) {
                                  case 0:
                                    f[this.config.env] || (f[this.config.env] = this._signIn()), r.label = 1;

                                  case 1:
                                    return r.trys.push([ 1, 3, , 4 ]), [ 4, f[this.config.env] ];

                                  case 2:
                                    return e = r.sent(), [ 3, 4 ];

                                  case 3:
                                    return n = r.sent(), t = n, [ 3, 4 ];

                                  case 4:
                                    if (f[this.config.env] = null, t) throw t;
                                    return [ 2, e ];
                                }
                            });
                        });
                    }, t.prototype._signIn = function() {
                        return r(this, void 0, void 0, function() {
                            var e, t, n, r, i, a;
                            return o(this, function(o) {
                                switch (o.label) {
                                  case 0:
                                    if (e = this.cache.getStore(this.accessTokenKey), t = this.cache.getStore(this.accessTokenExpireKey), 
                                    e) {
                                        if (t && t > Date.now()) return [ 2, {
                                            credential: {
                                                accessToken: e,
                                                refreshToken: this.cache.getStore(this.refreshTokenKey)
                                            }
                                        } ];
                                        this.cache.removeStore(this.accessTokenKey), this.cache.removeStore(this.accessTokenExpireKey);
                                    }
                                    if (!1 === Object.values(s).includes(s[this.scope])) throw new Error("错误的scope类型");
                                    return se.Adapter.runtime !== se.RUNTIME.WX_MP ? [ 3, 2 ] : [ 4, c.getMiniAppCode() ];

                                  case 1:
                                    return n = o.sent(), [ 3, 4 ];

                                  case 2:
                                    return [ 4, c.getWeixinCode() ];

                                  case 3:
                                    if (!(n = o.sent())) return [ 2, this.redirect() ];
                                    o.label = 4;

                                  case 4:
                                    return r = function(e) {
                                        switch (e) {
                                          case s.snsapi_login:
                                            return "WECHAT-OPEN";

                                          default:
                                            return "WECHAT-PUBLIC";
                                        }
                                    }(this.scope), [ 4, this.getRefreshTokenByWXCode(this.appid, r, n) ];

                                  case 5:
                                    return i = o.sent(), a = i.refreshToken, this.cache.setStore(this.refreshTokenKey, a), 
                                    i.accessToken && this.cache.setStore(this.accessTokenKey, i.accessToken), i.accessTokenExpire && this.cache.setStore(this.accessTokenExpireKey, i.accessTokenExpire + Date.now()), 
                                    ce.activateEvent(ce.EVENTS.LOGIN_STATE_CHANGED), ce.activateEvent(ce.EVENTS.LOGIN_TYPE_CHANGE, u.LOGINTYPE.WECHAT), 
                                    [ 2, {
                                        credential: {
                                            refreshToken: a
                                        }
                                    } ];
                                }
                            });
                        });
                    }, t.prototype.redirect = function() {
                        var e = c.removeParam("code", location.href);
                        e = c.removeParam("state", e), e = encodeURIComponent(e);
                        var t = "//open.weixin.qq.com/connect/oauth2/authorize";
                        "snsapi_login" === this.scope && (t = "//open.weixin.qq.com/connect/qrconnect"), 
                        "redirect" === a[this.loginMode] && (location.href = t + "?appid=" + this.appid + "&redirect_uri=" + e + "&response_type=code&scope=" + this.scope + "&state=" + this.state + "#wechat_redirect");
                    }, t;
                }(u.default);
                t.default = l;
            }), pe = _(function(e, t) {
                var n = P && P.__extends || function() {
                    var e = function(t, n) {
                        return (e = Object.setPrototypeOf || {
                            __proto__: []
                        } instanceof Array && function(e, t) {
                            e.__proto__ = t;
                        } || function(e, t) {
                            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                        })(t, n);
                    };
                    return function(t, n) {
                        function r() {
                            this.constructor = t;
                        }
                        e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, 
                        new r());
                    };
                }(), r = P && P.__assign || function() {
                    return (r = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e;
                    }).apply(this, arguments);
                }, o = P && P.__awaiter || function(e, t, n, r) {
                    return new (n || (n = Promise))(function(o, i) {
                        function s(e) {
                            try {
                                c(r.next(e));
                            } catch (e) {
                                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                i(e);
                            }
                        }
                        function a(e) {
                            try {
                                c(r.throw(e));
                            } catch (e) {
                                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                i(e);
                            }
                        }
                        function c(e) {
                            var t;
                            e.done ? o(e.value) : ((t = e.value) instanceof n ? t : new n(function(e) {
                                e(t);
                            })).then(s, a);
                        }
                        c((r = r.apply(e, t || [])).next());
                    });
                }, i = P && P.__generator || function(e, t) {
                    function n(n) {
                        return function(s) {
                            return function(n) {
                                if (r) throw new TypeError("Generator is already executing.");
                                for (;a; ) try {
                                    if (r = 1, o && (i = 2 & n[0] ? o.return : n[0] ? o.throw || ((i = o.return) && i.call(o), 
                                    0) : o.next) && !(i = i.call(o, n[1])).done) return i;
                                    switch (o = 0, i && (n = [ 2 & n[0], i.value ]), n[0]) {
                                      case 0:
                                      case 1:
                                        i = n;
                                        break;

                                      case 4:
                                        return a.label++, {
                                            value: n[1],
                                            done: !1
                                        };

                                      case 5:
                                        a.label++, o = n[1], n = [ 0 ];
                                        continue;

                                      case 7:
                                        n = a.ops.pop(), a.trys.pop();
                                        continue;

                                      default:
                                        if (i = a.trys, !((i = i.length > 0 && i[i.length - 1]) || 6 !== n[0] && 2 !== n[0])) {
                                            a = 0;
                                            continue;
                                        }
                                        if (3 === n[0] && (!i || n[1] > i[0] && n[1] < i[3])) {
                                            a.label = n[1];
                                            break;
                                        }
                                        if (6 === n[0] && a.label < i[1]) {
                                            a.label = i[1], i = n;
                                            break;
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2], a.ops.push(n);
                                            break;
                                        }
                                        i[2] && a.ops.pop(), a.trys.pop();
                                        continue;
                                    }
                                    n = t.call(e, a);
                                } catch (e) {
                                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                    n = [ 6, e ], o = 0;
                                } finally {
                                    r = i = 0;
                                }
                                if (5 & n[0]) throw n[1];
                                return {
                                    value: n[0] ? n[1] : void 0,
                                    done: !0
                                };
                            }([ n, s ]);
                        };
                    }
                    var r, o, i, s, a = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1];
                        },
                        trys: [],
                        ops: []
                    };
                    return s = {
                        next: n(0),
                        throw: n(1),
                        return: n(2)
                    }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                        return this;
                    }), s;
                }, s = P && P.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e) for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t;
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var a = s(fe), c = function(e) {
                    function t(t) {
                        var n = e.call(this, r(r({}, t), {
                            persistence: "local"
                        })) || this;
                        return n._anonymousUuidKey = re.ANONYMOUS_UUID + "_" + n.config.env, n._loginTypeKey = re.LOGIN_TYPE_KEY + "_" + n.config.env, 
                        n;
                    }
                    return n(t, e), t.prototype.init = function() {
                        e.prototype.init.call(this);
                    }, t.prototype.signIn = function() {
                        return o(this, void 0, void 0, function() {
                            var e, t, n;
                            return i(this, function(r) {
                                switch (r.label) {
                                  case 0:
                                    return e = this.cache.getStore(this._anonymousUuidKey) || void 0, t = this.cache.getStore(this.refreshTokenKey) || void 0, 
                                    [ 4, this.httpRequest.send("auth.signInAnonymously", {
                                        anonymous_uuid: e,
                                        refresh_token: t
                                    }) ];

                                  case 1:
                                    return (n = r.sent()).uuid && n.refresh_token ? (this._setAnonymousUUID(n.uuid), 
                                    this.setRefreshToken(n.refresh_token), [ 4, this.httpRequest.refreshAccessToken() ]) : [ 3, 3 ];

                                  case 2:
                                    return r.sent(), ce.activateEvent(ce.EVENTS.LOGIN_STATE_CHANGED), ce.activateEvent(ce.EVENTS.LOGIN_TYPE_CHANGE, a.LOGINTYPE.ANONYMOUS), 
                                    [ 2, {
                                        credential: {
                                            refreshToken: n.refresh_token
                                        }
                                    } ];

                                  case 3:
                                    throw new Error("[tcb-js-sdk] 匿名登录失败");
                                }
                            });
                        });
                    }, t.prototype.linkAndRetrieveDataWithTicket = function(e) {
                        return o(this, void 0, void 0, function() {
                            var t, n, r;
                            return i(this, function(o) {
                                switch (o.label) {
                                  case 0:
                                    return t = this.cache.getStore(this._anonymousUuidKey), n = this.cache.getStore(this.refreshTokenKey), 
                                    [ 4, this.httpRequest.send("auth.linkAndRetrieveDataWithTicket", {
                                        anonymous_uuid: t,
                                        refresh_token: n,
                                        ticket: e
                                    }) ];

                                  case 1:
                                    return (r = o.sent()).refresh_token ? (this._clearAnonymousUUID(), this.setRefreshToken(r.refresh_token), 
                                    [ 4, this.httpRequest.refreshAccessToken() ]) : [ 3, 3 ];

                                  case 2:
                                    return o.sent(), ce.activateEvent(ce.EVENTS.ANONYMOUS_CONVERTED, {
                                        refresh_token: r.refresh_token
                                    }), ce.activateEvent(ce.EVENTS.LOGIN_TYPE_CHANGE, a.LOGINTYPE.CUSTOM), [ 2, {
                                        credential: {
                                            refreshToken: r.refresh_token
                                        }
                                    } ];

                                  case 3:
                                    throw new Error("[tcb-js-sdk] 匿名转化失败");
                                }
                            });
                        });
                    }, t.prototype.getAllStore = function() {
                        var e = {};
                        return e[this.refreshTokenKey] = this.cache.getStore(this.refreshTokenKey) || "", 
                        e[this._loginTypeKey] = this.cache.getStore(this._loginTypeKey) || "", e[this.accessTokenKey] = this.cache.getStore(this.accessTokenKey) || "", 
                        e[this.accessTokenExpireKey] = this.cache.getStore(this.accessTokenExpireKey) || "", 
                        e;
                    }, t.prototype._setAnonymousUUID = function(e) {
                        this.cache.removeStore(this._anonymousUuidKey), this.cache.setStore(this._anonymousUuidKey, e), 
                        this.cache.setStore(this._loginTypeKey, a.LOGINTYPE.ANONYMOUS);
                    }, t.prototype._clearAnonymousUUID = function() {
                        this.cache.removeStore(this._anonymousUuidKey);
                    }, t;
                }(a.default);
                t.AnonymousAuthProvider = c;
            }), he = _(function(e, t) {
                var n = P && P.__extends || function() {
                    var e = function(t, n) {
                        return (e = Object.setPrototypeOf || {
                            __proto__: []
                        } instanceof Array && function(e, t) {
                            e.__proto__ = t;
                        } || function(e, t) {
                            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                        })(t, n);
                    };
                    return function(t, n) {
                        function r() {
                            this.constructor = t;
                        }
                        e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, 
                        new r());
                    };
                }(), r = P && P.__assign || function() {
                    return (r = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e;
                    }).apply(this, arguments);
                }, o = P && P.__awaiter || function(e, t, n, r) {
                    return new (n || (n = Promise))(function(o, i) {
                        function s(e) {
                            try {
                                c(r.next(e));
                            } catch (e) {
                                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                i(e);
                            }
                        }
                        function a(e) {
                            try {
                                c(r.throw(e));
                            } catch (e) {
                                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                i(e);
                            }
                        }
                        function c(e) {
                            var t;
                            e.done ? o(e.value) : ((t = e.value) instanceof n ? t : new n(function(e) {
                                e(t);
                            })).then(s, a);
                        }
                        c((r = r.apply(e, t || [])).next());
                    });
                }, i = P && P.__generator || function(e, t) {
                    function n(n) {
                        return function(s) {
                            return function(n) {
                                if (r) throw new TypeError("Generator is already executing.");
                                for (;a; ) try {
                                    if (r = 1, o && (i = 2 & n[0] ? o.return : n[0] ? o.throw || ((i = o.return) && i.call(o), 
                                    0) : o.next) && !(i = i.call(o, n[1])).done) return i;
                                    switch (o = 0, i && (n = [ 2 & n[0], i.value ]), n[0]) {
                                      case 0:
                                      case 1:
                                        i = n;
                                        break;

                                      case 4:
                                        return a.label++, {
                                            value: n[1],
                                            done: !1
                                        };

                                      case 5:
                                        a.label++, o = n[1], n = [ 0 ];
                                        continue;

                                      case 7:
                                        n = a.ops.pop(), a.trys.pop();
                                        continue;

                                      default:
                                        if (i = a.trys, !((i = i.length > 0 && i[i.length - 1]) || 6 !== n[0] && 2 !== n[0])) {
                                            a = 0;
                                            continue;
                                        }
                                        if (3 === n[0] && (!i || n[1] > i[0] && n[1] < i[3])) {
                                            a.label = n[1];
                                            break;
                                        }
                                        if (6 === n[0] && a.label < i[1]) {
                                            a.label = i[1], i = n;
                                            break;
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2], a.ops.push(n);
                                            break;
                                        }
                                        i[2] && a.ops.pop(), a.trys.pop();
                                        continue;
                                    }
                                    n = t.call(e, a);
                                } catch (e) {
                                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                    n = [ 6, e ], o = 0;
                                } finally {
                                    r = i = 0;
                                }
                                if (5 & n[0]) throw n[1];
                                return {
                                    value: n[0] ? n[1] : void 0,
                                    done: !0
                                };
                            }([ n, s ]);
                        };
                    }
                    var r, o, i, s, a = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1];
                        },
                        trys: [],
                        ops: []
                    };
                    return s = {
                        next: n(0),
                        throw: n(1),
                        return: n(2)
                    }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                        return this;
                    }), s;
                }, s = P && P.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }, a = P && P.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e) for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t;
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var c = s(le), u = a(fe), f = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.config = t, n;
                    }
                    return n(t, e), t.prototype.init = function() {
                        e.prototype.init.call(this), this.customAuthProvider = new u.default(this.config), 
                        this.customAuthProvider.init();
                    }, t.prototype.weixinAuthProvider = function(e) {
                        var t = e.appid, n = e.scope, r = e.loginMode, o = e.state, i = new c.default(this.config, t, n, r, o);
                        return i.init(), i;
                    }, t.prototype.signInAnonymously = function() {
                        return o(this, void 0, void 0, function() {
                            var e = this;
                            return i(this, function(t) {
                                switch (t.label) {
                                  case 0:
                                    return this._anonymousAuthProvider || (this._anonymousAuthProvider = new pe.AnonymousAuthProvider(this.config), 
                                    this._anonymousAuthProvider.init()), ce.addEventListener(ce.EVENTS.LOGIN_TYPE_CHANGE, function(t) {
                                        if (t && t.data === u.LOGINTYPE.ANONYMOUS) {
                                            var n = e._anonymousAuthProvider.getAllStore();
                                            for (var r in n) n[r] && e.httpRequest.cache.setStore(r, n[r]);
                                        }
                                    }), [ 4, this._anonymousAuthProvider.signIn() ];

                                  case 1:
                                    return [ 2, t.sent() ];
                                }
                            });
                        });
                    }, t.prototype.linkAndRetrieveDataWithTicket = function(e) {
                        return o(this, void 0, void 0, function() {
                            var t = this;
                            return i(this, function(n) {
                                switch (n.label) {
                                  case 0:
                                    return this._anonymousAuthProvider || (this._anonymousAuthProvider = new pe.AnonymousAuthProvider(this.config), 
                                    this._anonymousAuthProvider.init()), ce.addEventListener(ce.EVENTS.ANONYMOUS_CONVERTED, function(e) {
                                        var n = e.data.refresh_token;
                                        n && t.httpRequest.cache.setStore(t.refreshTokenKey, n);
                                    }), [ 4, this._anonymousAuthProvider.linkAndRetrieveDataWithTicket(e) ];

                                  case 1:
                                    return [ 2, n.sent() ];
                                }
                            });
                        });
                    }, t.prototype.signOut = function() {
                        return o(this, void 0, void 0, function() {
                            var e, t, n, r, o, s, a;
                            return i(this, function(i) {
                                switch (i.label) {
                                  case 0:
                                    if (this.loginType === u.LOGINTYPE.ANONYMOUS) throw new Error("[tcb-js-sdk] 匿名用户不支持登出操作");
                                    return e = this.httpRequest, t = e.cache, n = e.refreshTokenKey, r = e.accessTokenKey, 
                                    o = e.accessTokenExpireKey, (s = t.getStore(n)) ? [ 4, this.httpRequest.send("auth.logout", {
                                        refresh_token: s
                                    }) ] : [ 2 ];

                                  case 1:
                                    return a = i.sent(), t.removeStore(n), t.removeStore(r), t.removeStore(o), ce.activateEvent(ce.EVENTS.LOGIN_STATE_CHANGED), 
                                    ce.activateEvent(ce.EVENTS.LOGIN_TYPE_CHANGE, u.LOGINTYPE.NULL), [ 2, a ];
                                }
                            });
                        });
                    }, t.prototype.getAccessToken = function() {
                        return o(this, void 0, void 0, function() {
                            var e;
                            return i(this, function(t) {
                                switch (t.label) {
                                  case 0:
                                    return e = {}, [ 4, this.httpRequest.getAccessToken() ];

                                  case 1:
                                    return [ 2, (e.accessToken = t.sent().accessToken, e.env = this.config.env, e) ];
                                }
                            });
                        });
                    }, t.prototype.onLoginStateExpire = function(e) {
                        ce.addEventListener("loginStateExpire", e);
                    }, t.prototype.getLoginState = function() {
                        return o(this, void 0, void 0, function() {
                            var e, t, n, r, o;
                            return i(this, function(i) {
                                switch (i.label) {
                                  case 0:
                                    if (e = this.httpRequest, t = e.cache, n = e.refreshTokenKey, r = e.accessTokenKey, 
                                    !(o = t.getStore(n))) return [ 3, 5 ];
                                    i.label = 1;

                                  case 1:
                                    return i.trys.push([ 1, 3, , 4 ]), [ 4, this.httpRequest.refreshAccessToken() ];

                                  case 2:
                                    return i.sent(), [ 3, 4 ];

                                  case 3:
                                    return i.sent(), [ 2, null ];

                                  case 4:
                                    return [ 2, {
                                        isAnonymous: this.loginType === u.LOGINTYPE.ANONYMOUS,
                                        credential: {
                                            refreshToken: o,
                                            accessToken: t.getStore(r)
                                        }
                                    } ];

                                  case 5:
                                    return [ 2, null ];
                                }
                            });
                        });
                    }, t.prototype.signInWithTicket = function(e) {
                        return o(this, void 0, void 0, function() {
                            var t, n, r, o;
                            return i(this, function(i) {
                                switch (i.label) {
                                  case 0:
                                    if ("string" != typeof e) throw new Error("ticket must be a string");
                                    return t = this.httpRequest, n = t.cache, r = t.refreshTokenKey, [ 4, this.httpRequest.send("auth.signInWithTicket", {
                                        ticket: e,
                                        refresh_token: n.getStore(r) || ""
                                    }) ];

                                  case 1:
                                    return (o = i.sent()).refresh_token ? (this.customAuthProvider.setRefreshToken(o.refresh_token), 
                                    [ 4, this.httpRequest.refreshAccessToken() ]) : [ 3, 3 ];

                                  case 2:
                                    return i.sent(), ce.activateEvent(ce.EVENTS.LOGIN_STATE_CHANGED), ce.activateEvent(ce.EVENTS.LOGIN_TYPE_CHANGE, u.LOGINTYPE.CUSTOM), 
                                    [ 2, {
                                        credential: {
                                            refreshToken: o.refresh_token
                                        }
                                    } ];

                                  case 3:
                                    throw new Error("[tcb-js-sdk] 自定义登录失败");
                                }
                            });
                        });
                    }, t.prototype.shouldRefreshAccessToken = function(e) {
                        this.httpRequest._shouldRefreshAccessTokenHook = e.bind(this);
                    }, t.prototype.getUserInfo = function() {
                        return this.httpRequest.send("auth.getUserInfo", {}).then(function(e) {
                            return e.code ? e : r(r({}, e.data), {
                                requestId: e.seqId
                            });
                        });
                    }, t;
                }(u.default);
                t.default = f;
            }), de = _(function(e, t) {
                var n = P && P.__awaiter || function(e, t, n, r) {
                    return new (n || (n = Promise))(function(o, i) {
                        function s(e) {
                            try {
                                c(r.next(e));
                            } catch (e) {
                                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                i(e);
                            }
                        }
                        function a(e) {
                            try {
                                c(r.throw(e));
                            } catch (e) {
                                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                i(e);
                            }
                        }
                        function c(e) {
                            var t;
                            e.done ? o(e.value) : ((t = e.value) instanceof n ? t : new n(function(e) {
                                e(t);
                            })).then(s, a);
                        }
                        c((r = r.apply(e, t || [])).next());
                    });
                }, r = P && P.__generator || function(e, t) {
                    function n(n) {
                        return function(s) {
                            return function(n) {
                                if (r) throw new TypeError("Generator is already executing.");
                                for (;a; ) try {
                                    if (r = 1, o && (i = 2 & n[0] ? o.return : n[0] ? o.throw || ((i = o.return) && i.call(o), 
                                    0) : o.next) && !(i = i.call(o, n[1])).done) return i;
                                    switch (o = 0, i && (n = [ 2 & n[0], i.value ]), n[0]) {
                                      case 0:
                                      case 1:
                                        i = n;
                                        break;

                                      case 4:
                                        return a.label++, {
                                            value: n[1],
                                            done: !1
                                        };

                                      case 5:
                                        a.label++, o = n[1], n = [ 0 ];
                                        continue;

                                      case 7:
                                        n = a.ops.pop(), a.trys.pop();
                                        continue;

                                      default:
                                        if (i = a.trys, !((i = i.length > 0 && i[i.length - 1]) || 6 !== n[0] && 2 !== n[0])) {
                                            a = 0;
                                            continue;
                                        }
                                        if (3 === n[0] && (!i || n[1] > i[0] && n[1] < i[3])) {
                                            a.label = n[1];
                                            break;
                                        }
                                        if (6 === n[0] && a.label < i[1]) {
                                            a.label = i[1], i = n;
                                            break;
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2], a.ops.push(n);
                                            break;
                                        }
                                        i[2] && a.ops.pop(), a.trys.pop();
                                        continue;
                                    }
                                    n = t.call(e, a);
                                } catch (e) {
                                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                    n = [ 6, e ], o = 0;
                                } finally {
                                    r = i = 0;
                                }
                                if (5 & n[0]) throw n[1];
                                return {
                                    value: n[0] ? n[1] : void 0,
                                    done: !0
                                };
                            }([ n, s ]);
                        };
                    }
                    var r, o, i, s, a = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1];
                        },
                        trys: [],
                        ops: []
                    };
                    return s = {
                        next: n(0),
                        throw: n(1),
                        return: n(2)
                    }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                        return this;
                    }), s;
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.uploadFile = function(e, t) {
                    t = t || G.createPromiseCallback();
                    var n = new ue.Request(this.config), r = e.cloudPath, o = e.filePath, i = e.onUploadProgress, s = e.fileType || "image";
                    return n.send("storage.getUploadMetadata", {
                        path: r
                    }).then(function(e) {
                        var a = e.data, c = a.url, u = a.authorization, f = a.token, l = a.fileId, p = a.cosFileId, h = e.requestId, d = {
                            key: r,
                            signature: u,
                            "x-cos-meta-fileid": p,
                            success_action_status: "201",
                            "x-cos-security-token": f
                        };
                        n.upload({
                            url: c,
                            data: d,
                            file: o,
                            name: r,
                            fileType: s,
                            onUploadProgress: i
                        }).then(function(e) {
                            201 === e.statusCode ? t(null, {
                                fileID: l,
                                requestId: h
                            }) : t(new Error("STORAGE_REQUEST_FAIL: " + e.data));
                        }).catch(function(e) {
                            t(e);
                        });
                    }).catch(function(e) {
                        t(e);
                    }), t.promise;
                }, t.deleteFile = function(e, t) {
                    var n = e.fileList;
                    if (t = t || G.createPromiseCallback(), !n || !Array.isArray(n)) return {
                        code: "INVALID_PARAM",
                        message: "fileList必须是非空的数组"
                    };
                    for (var r = 0, o = n; r < o.length; r++) {
                        var i = o[r];
                        if (!i || "string" != typeof i) return {
                            code: "INVALID_PARAM",
                            message: "fileList的元素必须是非空的字符串"
                        };
                    }
                    var s = {
                        fileid_list: n
                    };
                    return new ue.Request(this.config).send("storage.batchDeleteFile", s).then(function(e) {
                        e.code ? t(null, e) : t(null, {
                            fileList: e.data.delete_list,
                            requestId: e.requestId
                        });
                    }).catch(function(e) {
                        t(e);
                    }), t.promise;
                }, t.getTempFileURL = function(e, t) {
                    var n = e.fileList;
                    t = t || G.createPromiseCallback(), n && Array.isArray(n) || t(null, {
                        code: "INVALID_PARAM",
                        message: "fileList必须是非空的数组"
                    });
                    for (var r = [], o = 0, i = n; o < i.length; o++) {
                        var s = i[o];
                        "object" == (void 0 === s ? "undefined" : _typeof(s)) ? (s.hasOwnProperty("fileID") && s.hasOwnProperty("maxAge") || t(null, {
                            code: "INVALID_PARAM",
                            message: "fileList的元素必须是包含fileID和maxAge的对象"
                        }), r.push({
                            fileid: s.fileID,
                            max_age: s.maxAge
                        })) : "string" == typeof s ? r.push({
                            fileid: s
                        }) : t(null, {
                            code: "INVALID_PARAM",
                            message: "fileList的元素必须是字符串"
                        });
                    }
                    var a = {
                        file_list: r
                    };
                    return new ue.Request(this.config).send("storage.batchGetDownloadUrl", a).then(function(e) {
                        e.code ? t(null, e) : t(null, {
                            fileList: e.data.download_list,
                            requestId: e.requestId
                        });
                    }).catch(function(e) {
                        t(e);
                    }), t.promise;
                }, t.downloadFile = function(e, o) {
                    var i = e.fileID;
                    return n(this, void 0, void 0, function() {
                        var e, n, s, a, c;
                        return r(this, function(r) {
                            switch (r.label) {
                              case 0:
                                return [ 4, t.getTempFileURL.call(this, {
                                    fileList: [ {
                                        fileID: i,
                                        maxAge: 600
                                    } ]
                                }) ];

                              case 1:
                                return e = r.sent(), "SUCCESS" !== (n = e.fileList[0]).code ? [ 2, o ? o(n) : new Promise(function(e) {
                                    e(n);
                                }) ] : (s = n.download_url, s = encodeURI(s), a = new ue.Request(this.config), o ? [ 4, a.download({
                                    url: s
                                }) ] : [ 3, 3 ]);

                              case 2:
                                return c = r.sent(), o(c), [ 3, 4 ];

                              case 3:
                                return [ 2, a.download({
                                    url: s
                                }) ];

                              case 4:
                                return [ 2 ];
                            }
                        });
                    });
                };
            }), ve = _(function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.callFunction = function(e, t) {
                    var n, r = e.name, o = e.data, i = e.query, s = e.parse, a = e.search, c = t || G.createPromiseCallback();
                    try {
                        n = o ? JSON.stringify(o) : "";
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        return Promise.reject(e);
                    }
                    if (!r) return Promise.reject(new Error("函数名不能为空"));
                    var u = {
                        query: i,
                        parse: s,
                        search: a,
                        function_name: r,
                        request_data: n
                    };
                    return new ue.Request(this.config).send("functions.invokeFunction", u).then(function(e) {
                        if (e.code) c(null, e); else {
                            var t = e.data.response_data;
                            if (s) c(null, {
                                result: t,
                                requestId: e.requestId
                            }); else try {
                                t = JSON.parse(e.data.response_data), c(null, {
                                    result: t,
                                    requestId: e.requestId
                                });
                            } catch (e) {
                                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                c(new Error("response data must be json"));
                            }
                        }
                        return c.promise;
                    }).catch(function(e) {
                        c(e);
                    }), c.promise;
                };
            }), ye = function(e) {
                return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
            }(_(function(e) {
                var t = P && P.__assign || function() {
                    return (t = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e;
                    }).apply(this, arguments);
                }, n = P && P.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }, r = P && P.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e) for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t;
                }, o = n(V), i = n(he), s = r(de), a = r(ve), c = {
                    timeout: 15e3
                }, u = new (function() {
                    function e(e) {
                        var t = this;
                        this.config = e || this.config, this.authObj = void 0, ce.addEventListener(ce.EVENTS.LOGIN_TYPE_CHANGE, function(e) {
                            e.data === fe.LOGINTYPE.ANONYMOUS && (t.config.persistence = "local");
                        });
                    }
                    return e.prototype.init = function(n) {
                        return this.config = t(t({}, c), n), se.Adapter.adapter || this._useDefaultAdapter(), 
                        new e(this.config);
                    }, e.prototype.auth = function(e) {
                        var n = (void 0 === e ? {} : e).persistence;
                        return this.authObj || (this.config = t(t({}, this.config), {
                            persistence: n || se.Adapter.adapter.primaryStorage || "session"
                        }), this.authObj = new i.default(this.config), this.authObj.init()), this.authObj;
                    }, e.prototype.on = function(e, t) {
                        return ce.addEventListener.apply(this, [ e, t ]);
                    }, e.prototype.off = function(e, t) {
                        return ce.removeEventListener.apply(this, [ e, t ]);
                    }, e.prototype.callFunction = function(e, t) {
                        return a.callFunction.apply(this, [ e, t ]);
                    }, e.prototype.deleteFile = function(e, t) {
                        return s.deleteFile.apply(this, [ e, t ]);
                    }, e.prototype.getTempFileURL = function(e, t) {
                        return s.getTempFileURL.apply(this, [ e, t ]);
                    }, e.prototype.downloadFile = function(e, t) {
                        return s.downloadFile.apply(this, [ e, t ]);
                    }, e.prototype.uploadFile = function(e, t) {
                        return s.uploadFile.apply(this, [ e, t ]);
                    }, e.prototype.useAdapters = function(e) {
                        var t = se.useAdapters(e) || {}, n = t.adapter, r = t.runtime;
                        n && (se.Adapter.adapter = n), r && (se.Adapter.runtime = r);
                    }, e.prototype._useDefaultAdapter = function() {
                        var e = se.useDefaultAdapter(), t = e.adapter, n = e.runtime;
                        se.Adapter.adapter = t, se.Adapter.runtime = n;
                    }, e;
                }())();
                u.useAdapters(o.default);
                try {
                    window.tcb = u;
                } catch (e) {}
                e.exports = u;
            }));
            ye.useAdapters(V);
            var _e, ge, me = ye, be = me.init;
            me.init = function(e) {
                e.env = e.spaceId;
                var t = be.call(this, e);
                t.config.provider = "tencent", t.config.spaceId = e.spaceId;
                var n = t.auth;
                return t.auth = function(e) {
                    var t = n.call(this, e);
                    return [ "linkAndRetrieveDataWithTicket", "signInAnonymously", "signOut", "getAccessToken", "getLoginState", "signInWithTicket", "getUserInfo" ].forEach(function(e) {
                        t[e] = g(t[e]).bind(t);
                    }), t;
                }, [ "uploadFile", "deleteFile", "getTempFileURL", "downloadFile" ].forEach(function(e) {
                    t[e] = g(t[e]).bind(t);
                }), t;
            };
            var we = {
                request: function(e) {
                    return r.request(e);
                },
                uploadFile: function(e) {
                    return r.uploadFile(e);
                },
                setStore: function(e, t) {
                    return r.setStorageSync(e, t);
                },
                getStore: function(e) {
                    return r.getStorageSync(e);
                }
            }, Ae = new (function() {
                function e() {
                    s(this, e), this.adapter = we;
                }
                return i(e, [ {
                    key: "init",
                    value: function(e) {
                        var t = {}, n = !1 !== e.debugFunction && !1;
                        switch (e.provider) {
                          case "tencent":
                            t = me.init(Object.assign(e, {
                                useDebugFunction: n
                            }));
                            break;

                          case "aliyun":
                            t = D.init(Object.assign(e, {
                                useDebugFunction: n
                            }));
                            break;

                          default:
                            throw new Error("未提供正确的provider参数");
                        }
                        if (t.isReady = !1, !1 !== e.autoSignIn) {
                            var o = t.auth();
                            t.initSignIn = o.getLoginState().then(function(e) {
                                return e ? Promise.resolve() : o.signInAnonymously();
                            }).then(function() {
                                return new Promise(function(e) {
                                    setTimeout(function() {
                                        T = r.getSystemInfoSync().platform, k = r.getStorageSync("__DC_CLOUD_UUID") || m(32), 
                                        e();
                                    }, 0);
                                });
                            }).then(function() {
                                t.isReady = !0;
                            });
                        }
                        return function(e) {
                            var t = e.callFunction;
                            e.callFunction = function(e) {
                                var n = this;
                                return (this.isReady ? Promise.resolve() : this.initSignIn).then(function() {
                                    var r = S.call(n, e), o = {
                                        aliyun: "aliyun",
                                        tencent: "tcb"
                                    }[n.config.provider];
                                    return new Promise(function(i, s) {
                                        t.call(n, r).then(function(t) {
                                            if (n.config.useDebugFunction && t && t.requestId) {
                                                var r = JSON.stringify({
                                                    spaceId: n.config.spaceId,
                                                    functionName: e.name,
                                                    requestId: t.requestId
                                                });
                                                console.log("[".concat(o, "-request]").concat(r, "[/").concat(o, "-request]"));
                                            }
                                            i(t);
                                        }).catch(function(t) {
                                            if (n.config.useDebugFunction && t && t.requestId) {
                                                var r = JSON.stringify({
                                                    spaceId: n.config.spaceId,
                                                    functionName: e.name,
                                                    requestId: t.requestId
                                                });
                                                console.log("[".concat(o, "-request]").concat(r, "[/").concat(o, "-request]"));
                                            }
                                            t && t.message && (t.message = "[".concat(e.name, "]: ").concat(t.message)), s(t);
                                        });
                                    });
                                });
                            };
                            var n = e.callFunction;
                            e.callFunction = function(e) {
                                return g(n).call(this, e);
                            };
                        }(t), t.init = this.init, t.adapter = this.adapter, t;
                    }
                }, {
                    key: "setAdapter",
                    value: function(e) {
                        this.adapter = e;
                    }
                } ]), e;
            }())();
            try {
                var Oe = {};
                1 === [ {
                    provider: "aliyun",
                    spaceName: "lemontest",
                    spaceId: "f176f218-5d5b-4eda-98c2-aa6229cb71db",
                    clientSecret: "PW4A67GKew5B24Nk8y35Rw==",
                    endpoint: "https://api.bspapp.com"
                } ].length && (Oe = [ {
                    provider: "aliyun",
                    spaceName: "lemontest",
                    spaceId: "f176f218-5d5b-4eda-98c2-aa6229cb71db",
                    clientSecret: "PW4A67GKew5B24Nk8y35Rw==",
                    endpoint: "https://api.bspapp.com"
                } ][0]), Ae = Ae.init(Oe);
            } catch (P) {
                P = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(P);
                [ "auth", "callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile" ].forEach(function(e) {
                    Ae[e] = function() {
                        var e = [ {
                            provider: "aliyun",
                            spaceName: "lemontest",
                            spaceId: "f176f218-5d5b-4eda-98c2-aa6229cb71db",
                            clientSecret: "PW4A67GKew5B24Nk8y35Rw==",
                            endpoint: "https://api.bspapp.com"
                        } ].length > 0 ? "应用有多个服务空间，请通过uniCloud.init方法指定要使用的服务空间" : "应用未关联服务空间，请在cloudfunctions目录右键关联服务空间";
                        return console.error(e), Promise.reject(new C({
                            code: "SYS_ERR",
                            message: e
                        }));
                    };
                });
            }
            var Se = Ae;
            t.default = Se;
        }).call(this, n("c8ba"), n("543d").default);
    },
    c8ba: function(e, t) {
        var n;
        n = function() {
            return this;
        }();
        try {
            n = n || new Function("return this")();
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            "object" === ("undefined" == typeof window ? "undefined" : _typeof(window)) && (n = window);
        }
        e.exports = n;
    },
    df7c: function(e, t, n) {
        (function(e) {
            function n(e, t) {
                for (var n = 0, r = e.length - 1; r >= 0; r--) {
                    var o = e[r];
                    "." === o ? e.splice(r, 1) : ".." === o ? (e.splice(r, 1), n++) : n && (e.splice(r, 1), 
                    n--);
                }
                if (t) for (;n--; n) e.unshift("..");
                return e;
            }
            function r(e) {
                "string" != typeof e && (e += "");
                var t, n = 0, r = -1, o = !0;
                for (t = e.length - 1; t >= 0; --t) if (47 === e.charCodeAt(t)) {
                    if (!o) {
                        n = t + 1;
                        break;
                    }
                } else -1 === r && (o = !1, r = t + 1);
                return -1 === r ? "" : e.slice(n, r);
            }
            function o(e, t) {
                if (e.filter) return e.filter(t);
                for (var n = [], r = 0; r < e.length; r++) t(e[r], r, e) && n.push(e[r]);
                return n;
            }
            t.resolve = function() {
                for (var t = "", r = !1, i = arguments.length - 1; i >= -1 && !r; i--) {
                    var s = i >= 0 ? arguments[i] : e.cwd();
                    if ("string" != typeof s) throw new TypeError("Arguments to path.resolve must be strings");
                    s && (t = s + "/" + t, r = "/" === s.charAt(0));
                }
                return t = n(o(t.split("/"), function(e) {
                    return !!e;
                }), !r).join("/"), (r ? "/" : "") + t || ".";
            }, t.normalize = function(e) {
                var r = t.isAbsolute(e), s = "/" === i(e, -1);
                return (e = n(o(e.split("/"), function(e) {
                    return !!e;
                }), !r).join("/")) || r || (e = "."), e && s && (e += "/"), (r ? "/" : "") + e;
            }, t.isAbsolute = function(e) {
                return "/" === e.charAt(0);
            }, t.join = function() {
                var e = Array.prototype.slice.call(arguments, 0);
                return t.normalize(o(e, function(e, t) {
                    if ("string" != typeof e) throw new TypeError("Arguments to path.join must be strings");
                    return e;
                }).join("/"));
            }, t.relative = function(e, n) {
                function r(e) {
                    for (var t = 0; t < e.length && "" === e[t]; t++) ;
                    for (var n = e.length - 1; n >= 0 && "" === e[n]; n--) ;
                    return t > n ? [] : e.slice(t, n - t + 1);
                }
                e = t.resolve(e).substr(1), n = t.resolve(n).substr(1);
                for (var o = r(e.split("/")), i = r(n.split("/")), s = Math.min(o.length, i.length), a = s, c = 0; c < s; c++) if (o[c] !== i[c]) {
                    a = c;
                    break;
                }
                var u = [];
                for (c = a; c < o.length; c++) u.push("..");
                return (u = u.concat(i.slice(a))).join("/");
            }, t.sep = "/", t.delimiter = ":", t.dirname = function(e) {
                if ("string" != typeof e && (e += ""), 0 === e.length) return ".";
                for (var t = e.charCodeAt(0), n = 47 === t, r = -1, o = !0, i = e.length - 1; i >= 1; --i) if (47 === (t = e.charCodeAt(i))) {
                    if (!o) {
                        r = i;
                        break;
                    }
                } else o = !1;
                return -1 === r ? n ? "/" : "." : n && 1 === r ? "/" : e.slice(0, r);
            }, t.basename = function(e, t) {
                var n = r(e);
                return t && n.substr(-1 * t.length) === t && (n = n.substr(0, n.length - t.length)), 
                n;
            }, t.extname = function(e) {
                "string" != typeof e && (e += "");
                for (var t = -1, n = 0, r = -1, o = !0, i = 0, s = e.length - 1; s >= 0; --s) {
                    var a = e.charCodeAt(s);
                    if (47 !== a) -1 === r && (o = !1, r = s + 1), 46 === a ? -1 === t ? t = s : 1 !== i && (i = 1) : -1 !== t && (i = -1); else if (!o) {
                        n = s + 1;
                        break;
                    }
                }
                return -1 === t || -1 === r || 0 === i || 1 === i && t === r - 1 && t === n + 1 ? "" : e.slice(t, r);
            };
            var i = "b" === "ab".substr(-1) ? function(e, t, n) {
                return e.substr(t, n);
            } : function(e, t, n) {
                return t < 0 && (t = e.length + t), e.substr(t, n);
            };
        }).call(this, n("4362"));
    },
    f0c5: function(e, t, n) {
        function r(e, t, n, r, o, i, s, a, c, u) {
            var f, l = "function" == typeof e ? e.options : e;
            if (c) {
                l.components || (l.components = {});
                var p = Object.prototype.hasOwnProperty;
                for (var h in c) p.call(c, h) && !p.call(l.components, h) && (l.components[h] = c[h]);
            }
            if (u && ((u.beforeCreate || (u.beforeCreate = [])).unshift(function() {
                this[u.__module] = this;
            }), (l.mixins || (l.mixins = [])).push(u)), t && (l.render = t, l.staticRenderFns = n, 
            l._compiled = !0), r && (l.functional = !0), i && (l._scopeId = "data-v-" + i), 
            s ? (f = function(e) {
                (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), 
                o && o.call(this, e), e && e._registeredComponents && e._registeredComponents.add(s);
            }, l._ssrRegister = f) : o && (f = a ? function() {
                o.call(this, this.$root.$options.shadowRoot);
            } : o), f) if (l.functional) {
                l._injectStyles = f;
                var d = l.render;
                l.render = function(e, t) {
                    return f.call(t), d(e, t);
                };
            } else {
                var v = l.beforeCreate;
                l.beforeCreate = v ? [].concat(v, f) : [ f ];
            }
            return {
                exports: e,
                options: l
            };
        }
        n.d(t, "a", function() {
            return r;
        });
    },
    fa95: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = {
            appid: "__UNI__4009FC0"
        };
        t.default = r;
    }
} ]);