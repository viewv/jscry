/**
 * SHA-512 算法实现
 * App ID: wx0815558ab4f75bfc
 * 版本: v62
 * 代码哈希: x5tgim
 * 来源文件: output/wx0815558ab4f75bfc/common/vendor.js
 * 检测类型: Round constants
 * 置信度: 0.9
 * 函数名: anonymous
 * 行数: 162
 * 生成时间: 2025-07-05T13:17:10.921Z
 */

function() {
                function Sha256(e, l) {
                    l ? (blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0, 
                    this.blocks = blocks) : this.blocks = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], 
                    e ? (this.h0 = 3238371032, this.h1 = 914150663, this.h2 = 812702999, this.h3 = 4144912697, 
                    this.h4 = 4290775857, this.h5 = 1750603025, this.h6 = 1694076839, this.h7 = 3204075428) : (this.h0 = 1779033703, 
                    this.h1 = 3144134277, this.h2 = 1013904242, this.h3 = 2773480762, this.h4 = 1359893119, 
                    this.h5 = 2600822924, this.h6 = 528734635, this.h7 = 1541459225), this.block = this.start = this.bytes = this.hBytes = 0, 
                    this.finalized = this.hashed = !1, this.first = !0, this.is224 = e;
                }
                function HmacSha256(e, l, a) {
                    var u, t = void 0 === e ? "undefined" : _typeof(e);
                    if ("string" === t) {
                        var n, r = [], v = e.length, i = 0;
                        for (u = 0; u < v; ++u) (n = e.charCodeAt(u)) < 128 ? r[i++] = n : n < 2048 ? (r[i++] = 192 | n >> 6, 
                        r[i++] = 128 | 63 & n) : n < 55296 || n >= 57344 ? (r[i++] = 224 | n >> 12, r[i++] = 128 | n >> 6 & 63, 
                        r[i++] = 128 | 63 & n) : (n = 65536 + ((1023 & n) << 10 | 1023 & e.charCodeAt(++u)), 
                        r[i++] = 240 | n >> 18, r[i++] = 128 | n >> 12 & 63, r[i++] = 128 | n >> 6 & 63, 
                        r[i++] = 128 | 63 & n);
                        e = r;
                    } else {
                        if ("object" !== t) throw new Error(ERROR);
                        if (null === e) throw new Error(ERROR);
                        if (ARRAY_BUFFER && e.constructor === ArrayBuffer) e = new Uint8Array(e); else if (!(Array.isArray(e) || ARRAY_BUFFER && ArrayBuffer.isView(e))) throw new Error(ERROR);
                    }
                    e.length > 64 && (e = new Sha256(l, !0).update(e).array());
                    var b = [], o = [];
                    for (u = 0; u < 64; ++u) {
                        var c = e[u] || 0;
                        b[u] = 92 ^ c, o[u] = 54 ^ c;
                    }
                    Sha256.call(this, l, a), this.update(o), this.oKeyPad = b, this.inner = !0, this.sharedMemory = a;
                }
                var ERROR = "input is invalid type", WINDOW = "object" === ("undefined" == typeof window ? "undefined" : _typeof(window)), root = WINDOW ? window : {};
                root.JS_SHA256_NO_WINDOW && (WINDOW = !1);
                var WEB_WORKER = !WINDOW && "object" === ("undefined" == typeof self ? "undefined" : _typeof(self)), NODE_JS = !root.JS_SHA256_NO_NODE_JS && "object" === (void 0 === process ? "undefined" : _typeof(process)) && process.versions && process.versions.node;
                NODE_JS ? root = global : WEB_WORKER && (root = self);
                var COMMON_JS = !root.JS_SHA256_NO_COMMON_JS && "object" === (void 0 === module ? "undefined" : _typeof(module)) && module.exports, AMD = __webpack_require__(18), ARRAY_BUFFER = !root.JS_SHA256_NO_ARRAY_BUFFER && "undefined" != typeof ArrayBuffer, HEX_CHARS = "0123456789abcdef".split(""), EXTRA = [ -2147483648, 8388608, 32768, 128 ], SHIFT = [ 24, 16, 8, 0 ], K = [ 1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298 ], OUTPUT_TYPES = [ "hex", "array", "digest", "arrayBuffer" ], blocks = [];
                !root.JS_SHA256_NO_NODE_JS && Array.isArray || (Array.isArray = function(e) {
                    return "[object Array]" === Object.prototype.toString.call(e);
                }), !ARRAY_BUFFER || !root.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW && ArrayBuffer.isView || (ArrayBuffer.isView = function(e) {
                    return "object" === (void 0 === e ? "undefined" : _typeof(e)) && e.buffer && e.buffer.constructor === ArrayBuffer;
                });
                var createOutputMethod = function(e, l) {
                    return function(a) {
                        return new Sha256(l, !0).update(a)[e]();
                    };
                }, createMethod = function(e) {
                    var l = createOutputMethod("hex", e);
                    NODE_JS && (l = nodeWrap(l, e)), l.create = function() {
                        return new Sha256(e);
                    }, l.update = function(e) {
                        return l.create().update(e);
                    };
                    for (var a = 0; a < OUTPUT_TYPES.length; ++a) {
                        var u = OUTPUT_TYPES[a];
                        l[u] = createOutputMethod(u, e);
                    }
                    return l;
                }, nodeWrap = function nodeWrap(method, is224) {
                    var crypto = eval("require('crypto')"), Buffer = eval("require('buffer').Buffer"), algorithm = is224 ? "sha224" : "sha256", nodeMethod = function(e) {
                        if ("string" == typeof e) return crypto.createHash(algorithm).update(e, "utf8").digest("hex");
                        if (null === e || void 0 === e) throw new Error(ERROR);
                        return e.constructor === ArrayBuffer && (e = new Uint8Array(e)), Array.isArray(e) || ArrayBuffer.isView(e) || e.constructor === Buffer ? crypto.createHash(algorithm).update(new Buffer(e)).digest("hex") : method(e);
                    };
                    return nodeMethod;
                }, createHmacOutputMethod = function(e, l) {
                    return function(a, u) {
                        return new HmacSha256(a, l, !0).update(u)[e]();
                    };
                }, createHmacMethod = function(e) {
                    var l = createHmacOutputMethod("hex", e);
                    l.create = function(l) {
                        return new HmacSha256(l, e);
                    }, l.update = function(e, a) {
                        return l.create(e).update(a);
                    };
                    for (var a = 0; a < OUTPUT_TYPES.length; ++a) {
                        var u = OUTPUT_TYPES[a];
                        l[u] = createHmacOutputMethod(u, e);
                    }
                    return l;
                };
                Sha256.prototype.update = function(e) {
                    if (!this.finalized) {
                        var l, a = void 0 === e ? "undefined" : _typeof(e);
                        if ("string" !== a) {
                            if ("object" !== a) throw new Error(ERROR);
                            if (null === e) throw new Error(ERROR);
                            if (ARRAY_BUFFER && e.constructor === ArrayBuffer) e = new Uint8Array(e); else if (!(Array.isArray(e) || ARRAY_BUFFER && ArrayBuffer.isView(e))) throw new Error(ERROR);
                            l = !0;
                        }
                        for (var u, t, n = 0, r = e.length, v = this.blocks; n < r; ) {
                            if (this.hashed && (this.hashed = !1, v[0] = this.block, v[16] = v[1] = v[2] = v[3] = v[4] = v[5] = v[6] = v[7] = v[8] = v[9] = v[10] = v[11] = v[12] = v[13] = v[14] = v[15] = 0), 
                            l) for (t = this.start; n < r && t < 64; ++n) v[t >> 2] |= e[n] << SHIFT[3 & t++]; else for (t = this.start; n < r && t < 64; ++n) (u = e.charCodeAt(n)) < 128 ? v[t >> 2] |= u << SHIFT[3 & t++] : u < 2048 ? (v[t >> 2] |= (192 | u >> 6) << SHIFT[3 & t++], 
                            v[t >> 2] |= (128 | 63 & u) << SHIFT[3 & t++]) : u < 55296 || u >= 57344 ? (v[t >> 2] |= (224 | u >> 12) << SHIFT[3 & t++], 
                            v[t >> 2] |= (128 | u >> 6 & 63) << SHIFT[3 & t++], v[t >> 2] |= (128 | 63 & u) << SHIFT[3 & t++]) : (u = 65536 + ((1023 & u) << 10 | 1023 & e.charCodeAt(++n)), 
                            v[t >> 2] |= (240 | u >> 18) << SHIFT[3 & t++], v[t >> 2] |= (128 | u >> 12 & 63) << SHIFT[3 & t++], 
                            v[t >> 2] |= (128 | u >> 6 & 63) << SHIFT[3 & t++], v[t >> 2] |= (128 | 63 & u) << SHIFT[3 & t++]);
                            this.lastByteIndex = t, this.bytes += t - this.start, t >= 64 ? (this.block = v[16], 
                            this.start = t - 64, this.hash(), this.hashed = !0) : this.start = t;
                        }
                        return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0, 
                        this.bytes = this.bytes % 4294967296), this;
                    }
                }, Sha256.prototype.finalize = function() {
                    if (!this.finalized) {
                        this.finalized = !0;
                        var e = this.blocks, l = this.lastByteIndex;
                        e[16] = this.block, e[l >> 2] |= EXTRA[3 & l], this.block = e[16], l >= 56 && (this.hashed || this.hash(), 
                        e[0] = this.block, e[16] = e[1] = e[2] = e[3] = e[4] = e[5] = e[6] = e[7] = e[8] = e[9] = e[10] = e[11] = e[12] = e[13] = e[14] = e[15] = 0), 
                        e[14] = this.hBytes << 3 | this.bytes >>> 29, e[15] = this.bytes << 3, this.hash();
                    }
                }, Sha256.prototype.hash = function() {
                    var e, l, a, u, t, n, r, v, i, b = this.h0, o = this.h1, c = this.h2, s = this.h3, f = this.h4, h = this.h5, d = this.h6, p = this.h7, y = this.blocks;
                    for (e = 16; e < 64; ++e) l = ((t = y[e - 15]) >>> 7 | t << 25) ^ (t >>> 18 | t << 14) ^ t >>> 3, 
                    a = ((t = y[e - 2]) >>> 17 | t << 15) ^ (t >>> 19 | t << 13) ^ t >>> 10, y[e] = y[e - 16] + l + y[e - 7] + a << 0;
                    for (i = o & c, e = 0; e < 64; e += 4) this.first ? (this.is224 ? (n = 300032, p = (t = y[0] - 1413257819) - 150054599 << 0, 
                    s = t + 24177077 << 0) : (n = 704751109, p = (t = y[0] - 210244248) - 1521486534 << 0, 
                    s = t + 143694565 << 0), this.first = !1) : (l = (b >>> 2 | b << 30) ^ (b >>> 13 | b << 19) ^ (b >>> 22 | b << 10), 
                    u = (n = b & o) ^ b & c ^ i, p = s + (t = p + (a = (f >>> 6 | f << 26) ^ (f >>> 11 | f << 21) ^ (f >>> 25 | f << 7)) + (f & h ^ ~f & d) + K[e] + y[e]) << 0, 
                    s = t + (l + u) << 0), l = (s >>> 2 | s << 30) ^ (s >>> 13 | s << 19) ^ (s >>> 22 | s << 10), 
                    u = (r = s & b) ^ s & o ^ n, d = c + (t = d + (a = (p >>> 6 | p << 26) ^ (p >>> 11 | p << 21) ^ (p >>> 25 | p << 7)) + (p & f ^ ~p & h) + K[e + 1] + y[e + 1]) << 0, 
                    l = ((c = t + (l + u) << 0) >>> 2 | c << 30) ^ (c >>> 13 | c << 19) ^ (c >>> 22 | c << 10), 
                    u = (v = c & s) ^ c & b ^ r, h = o + (t = h + (a = (d >>> 6 | d << 26) ^ (d >>> 11 | d << 21) ^ (d >>> 25 | d << 7)) + (d & p ^ ~d & f) + K[e + 2] + y[e + 2]) << 0, 
                    l = ((o = t + (l + u) << 0) >>> 2 | o << 30) ^ (o >>> 13 | o << 19) ^ (o >>> 22 | o << 10), 
                    u = (i = o & c) ^ o & s ^ v, f = b + (t = f + (a = (h >>> 6 | h << 26) ^ (h >>> 11 | h << 21) ^ (h >>> 25 | h << 7)) + (h & d ^ ~h & p) + K[e + 3] + y[e + 3]) << 0, 
                    b = t + (l + u) << 0;
                    this.h0 = this.h0 + b << 0, this.h1 = this.h1 + o << 0, this.h2 = this.h2 + c << 0, 
                    this.h3 = this.h3 + s << 0, this.h4 = this.h4 + f << 0, this.h5 = this.h5 + h << 0, 
                    this.h6 = this.h6 + d << 0, this.h7 = this.h7 + p << 0;
                }, Sha256.prototype.hex = function() {
                    this.finalize();
                    var e = this.h0, l = this.h1, a = this.h2, u = this.h3, t = this.h4, n = this.h5, r = this.h6, v = this.h7, i = HEX_CHARS[e >> 28 & 15] + HEX_CHARS[e >> 24 & 15] + HEX_CHARS[e >> 20 & 15] + HEX_CHARS[e >> 16 & 15] + HEX_CHARS[e >> 12 & 15] + HEX_CHARS[e >> 8 & 15] + HEX_CHARS[e >> 4 & 15] + HEX_CHARS[15 & e] + HEX_CHARS[l >> 28 & 15] + HEX_CHARS[l >> 24 & 15] + HEX_CHARS[l >> 20 & 15] + HEX_CHARS[l >> 16 & 15] + HEX_CHARS[l >> 12 & 15] + HEX_CHARS[l >> 8 & 15] + HEX_CHARS[l >> 4 & 15] + HEX_CHARS[15 & l] + HEX_CHARS[a >> 28 & 15] + HEX_CHARS[a >> 24 & 15] + HEX_CHARS[a >> 20 & 15] + HEX_CHARS[a >> 16 & 15] + HEX_CHARS[a >> 12 & 15] + HEX_CHARS[a >> 8 & 15] + HEX_CHARS[a >> 4 & 15] + HEX_CHARS[15 & a] + HEX_CHARS[u >> 28 & 15] + HEX_CHARS[u >> 24 & 15] + HEX_CHARS[u >> 20 & 15] + HEX_CHARS[u >> 16 & 15] + HEX_CHARS[u >> 12 & 15] + HEX_CHARS[u >> 8 & 15] + HEX_CHARS[u >> 4 & 15] + HEX_CHARS[15 & u] + HEX_CHARS[t >> 28 & 15] + HEX_CHARS[t >> 24 & 15] + HEX_CHARS[t >> 20 & 15] + HEX_CHARS[t >> 16 & 15] + HEX_CHARS[t >> 12 & 15] + HEX_CHARS[t >> 8 & 15] + HEX_CHARS[t >> 4 & 15] + HEX_CHARS[15 & t] + HEX_CHARS[n >> 28 & 15] + HEX_CHARS[n >> 24 & 15] + HEX_CHARS[n >> 20 & 15] + HEX_CHARS[n >> 16 & 15] + HEX_CHARS[n >> 12 & 15] + HEX_CHARS[n >> 8 & 15] + HEX_CHARS[n >> 4 & 15] + HEX_CHARS[15 & n] + HEX_CHARS[r >> 28 & 15] + HEX_CHARS[r >> 24 & 15] + HEX_CHARS[r >> 20 & 15] + HEX_CHARS[r >> 16 & 15] + HEX_CHARS[r >> 12 & 15] + HEX_CHARS[r >> 8 & 15] + HEX_CHARS[r >> 4 & 15] + HEX_CHARS[15 & r];
                    return this.is224 || (i += HEX_CHARS[v >> 28 & 15] + HEX_CHARS[v >> 24 & 15] + HEX_CHARS[v >> 20 & 15] + HEX_CHARS[v >> 16 & 15] + HEX_CHARS[v >> 12 & 15] + HEX_CHARS[v >> 8 & 15] + HEX_CHARS[v >> 4 & 15] + HEX_CHARS[15 & v]), 
                    i;
                }, Sha256.prototype.toString = Sha256.prototype.hex, Sha256.prototype.digest = function() {
                    this.finalize();
                    var e = this.h0, l = this.h1, a = this.h2, u = this.h3, t = this.h4, n = this.h5, r = this.h6, v = this.h7, i = [ e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, l >> 24 & 255, l >> 16 & 255, l >> 8 & 255, 255 & l, a >> 24 & 255, a >> 16 & 255, a >> 8 & 255, 255 & a, u >> 24 & 255, u >> 16 & 255, u >> 8 & 255, 255 & u, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, 255 & n, r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, 255 & r ];
                    return this.is224 || i.push(v >> 24 & 255, v >> 16 & 255, v >> 8 & 255, 255 & v), 
                    i;
                }, Sha256.prototype.array = Sha256.prototype.digest, Sha256.prototype.arrayBuffer = function() {
                    this.finalize();
                    var e = new ArrayBuffer(this.is224 ? 28 : 32), l = new DataView(e);
                    return l.setUint32(0, this.h0), l.setUint32(4, this.h1), l.setUint32(8, this.h2), 
                    l.setUint32(12, this.h3), l.setUint32(16, this.h4), l.setUint32(20, this.h5), l.setUint32(24, this.h6), 
                    this.is224 || l.setUint32(28, this.h7), e;
                }, HmacSha256.prototype = new Sha256(), HmacSha256.prototype.finalize = function() {
                    if (Sha256.prototype.finalize.call(this), this.inner) {
                        this.inner = !1;
                        var e = this.array();
                        Sha256.call(this, this.is224, this.sharedMemory), this.update(this.oKeyPad), this.update(e), 
                        Sha256.prototype.finalize.call(this);
                    }
                };
                var exports = createMethod();
                exports.sha256 = exports, exports.sha224 = createMethod(!0), exports.sha256.hmac = createHmacMethod(), 
                exports.sha224.hmac = createHmacMethod(!0), COMMON_JS ? module.exports = exports : (root.sha256 = exports.sha256, 
                root.sha224 = exports.sha224, AMD && void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = function() {
                    return exports;
                }.call(exports, __webpack_require__, exports, module)) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
            }

// ==================== 元数据 ====================
// 此文件包含从 wx0815558ab4f75bfc 提取的 SHA-512 算法实现
// 检测位置: 行 1130-1130
// 变量名: K
// 检测源: static
