/**
 * AES 算法实现
 * App ID: wx0757e6b02994b562
 * 版本: v54
 * 代码哈希: -2z1ad8
 * 来源文件: output/wx0757e6b02994b562/common/vendor.js
 * 检测类型: Round constants
 * 置信度: 0.8
 * 函数名: anonymous
 * 行数: 268
 * 生成时间: 2025-07-05T13:17:10.663Z
 */

function(e) {
            var u, t = Object.prototype, c = t.hasOwnProperty, n = "function" == typeof Symbol ? Symbol : {}, i = n.iterator || "@@iterator", r = n.asyncIterator || "@@asyncIterator", o = n.toStringTag || "@@toStringTag", a = "object" === (void 0 === j ? "undefined" : Un(j)), s = e.regeneratorRuntime;
            if (s) a && (j.exports = s); else {
                (s = e.regeneratorRuntime = a ? j.exports : {}).wrap = y;
                var f = "suspendedStart", p = "suspendedYield", d = "executing", h = "completed", g = {}, l = {};
                l[i] = function() {
                    return this;
                };
                var v = Object.getPrototypeOf, _ = v && v(v(C([])));
                _ && _ !== t && c.call(_, i) && (l = _);
                var m = x.prototype = w.prototype = Object.create(l);
                A.prototype = m.constructor = x, x.constructor = A, x[o] = A.displayName = "GeneratorFunction", 
                s.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === A || "GeneratorFunction" === (t.displayName || t.name));
                }, s.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, x) : (e.__proto__ = x, o in e || (e[o] = "GeneratorFunction")), 
                    e.prototype = Object.create(m), e;
                }, s.awrap = function(e) {
                    return {
                        __await: e
                    };
                }, O($.prototype), $.prototype[r] = function() {
                    return this;
                }, s.AsyncIterator = $, s.async = function(e, t, n, r) {
                    var i = new $(y(e, t, n, r));
                    return s.isGeneratorFunction(t) ? i : i.next().then(function(e) {
                        return e.done ? e.value : i.next();
                    });
                }, O(m), m[o] = "Generator", m[i] = function() {
                    return this;
                }, m.toString = function() {
                    return "[object Generator]";
                }, s.keys = function(n) {
                    var r = [];
                    for (var e in n) r.push(e);
                    return r.reverse(), function e() {
                        for (;r.length; ) {
                            var t = r.pop();
                            if (t in n) return e.value = t, e.done = !1, e;
                        }
                        return e.done = !0, e;
                    };
                }, s.values = C, D.prototype = {
                    constructor: D,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = u, this.done = !1, this.delegate = null, 
                        this.method = "next", this.arg = u, this.tryEntries.forEach(k), !e) for (var t in this) "t" === t.charAt(0) && c.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = u);
                    },
                    stop: function() {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval;
                    },
                    dispatchException: function(n) {
                        if (this.done) throw n;
                        var r = this;
                        function e(e, t) {
                            return o.type = "throw", o.arg = n, r.next = e, t && (r.method = "next", r.arg = u), 
                            !!t;
                        }
                        for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                            var i = this.tryEntries[t], o = i.completion;
                            if ("root" === i.tryLoc) return e("end");
                            if (i.tryLoc <= this.prev) {
                                var a = c.call(i, "catchLoc"), s = c.call(i, "finallyLoc");
                                if (a && s) {
                                    if (this.prev < i.catchLoc) return e(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return e(i.finallyLoc);
                                } else if (a) {
                                    if (this.prev < i.catchLoc) return e(i.catchLoc, !0);
                                } else {
                                    if (!s) throw new Error("try statement without catch or finally");
                                    if (this.prev < i.finallyLoc) return e(i.finallyLoc);
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var n = this.tryEntries.length - 1; 0 <= n; --n) {
                            var r = this.tryEntries[n];
                            if (r.tryLoc <= this.prev && c.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                                var i = r;
                                break;
                            }
                        }
                        i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                        var o = i ? i.completion : {};
                        return o.type = e, o.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, 
                        g) : this.complete(o);
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, 
                        this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), 
                        g;
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                            var n = this.tryEntries[t];
                            if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), k(n), g;
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                            var n = this.tryEntries[t];
                            if (n.tryLoc === e) {
                                var r = n.completion;
                                if ("throw" === r.type) {
                                    var i = r.arg;
                                    k(n);
                                }
                                return i;
                            }
                        }
                        throw new Error("illegal catch attempt");
                    },
                    delegateYield: function(e, t, n) {
                        return this.delegate = {
                            iterator: C(e),
                            resultName: t,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = u), g;
                    }
                };
            }
            function y(e, t, n, r) {
                var o, a, s, u, i = t && t.prototype instanceof w ? t : w, c = Object.create(i.prototype), l = new D(r || []);
                return c._invoke = (o = e, a = n, s = l, u = f, function(e, t) {
                    if (u === d) throw new Error("Generator is already running");
                    if (u === h) {
                        if ("throw" === e) throw t;
                        return I();
                    }
                    for (s.method = e, s.arg = t; ;) {
                        var n = s.delegate;
                        if (n) {
                            var r = S(n, s);
                            if (r) {
                                if (r === g) continue;
                                return r;
                            }
                        }
                        if ("next" === s.method) s.sent = s._sent = s.arg; else if ("throw" === s.method) {
                            if (u === f) throw u = h, s.arg;
                            s.dispatchException(s.arg);
                        } else "return" === s.method && s.abrupt("return", s.arg);
                        u = d;
                        var i = b(o, a, s);
                        if ("normal" === i.type) {
                            if (u = s.done ? h : p, i.arg === g) continue;
                            return {
                                value: i.arg,
                                done: s.done
                            };
                        }
                        "throw" === i.type && (u = h, s.method = "throw", s.arg = i.arg);
                    }
                }), c;
            }
            function b(e, t, n) {
                try {
                    return {
                        type: "normal",
                        arg: e.call(t, n)
                    };
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    return {
                        type: "throw",
                        arg: e
                    };
                }
            }
            function w() {}
            function A() {}
            function x() {}
            function O(e) {
                [ "next", "throw", "return" ].forEach(function(t) {
                    e[t] = function(e) {
                        return this._invoke(t, e);
                    };
                });
            }
            function $(u) {
                var t;
                this._invoke = function(n, r) {
                    function e() {
                        return new Promise(function(e, t) {
                            !function t(e, n, r, i) {
                                var o = b(u[e], u, n);
                                if ("throw" !== o.type) {
                                    var a = o.arg, s = a.value;
                                    return s && "object" === (void 0 === s ? "undefined" : Un(s)) && c.call(s, "__await") ? Promise.resolve(s.__await).then(function(e) {
                                        t("next", e, r, i);
                                    }, function(e) {
                                        t("throw", e, r, i);
                                    }) : Promise.resolve(s).then(function(e) {
                                        a.value = e, r(a);
                                    }, function(e) {
                                        return t("throw", e, r, i);
                                    });
                                }
                                i(o.arg);
                            }(n, r, e, t);
                        });
                    }
                    return t = t ? t.then(e, e) : e();
                };
            }
            function S(e, t) {
                var n = e.iterator[t.method];
                if (n === u) {
                    if (t.delegate = null, "throw" === t.method) {
                        if (e.iterator.return && (t.method = "return", t.arg = u, S(e, t), "throw" === t.method)) return g;
                        t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method");
                    }
                    return g;
                }
                var r = b(n, e.iterator, t.arg);
                if ("throw" === r.type) return t.method = "throw", t.arg = r.arg, t.delegate = null, 
                g;
                var i = r.arg;
                return i ? i.done ? (t[e.resultName] = i.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", 
                t.arg = u), t.delegate = null, g) : i : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), 
                t.delegate = null, g);
            }
            function P(e) {
                var t = {
                    tryLoc: e[0]
                };
                1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), 
                this.tryEntries.push(t);
            }
            function k(e) {
                var t = e.completion || {};
                t.type = "normal", delete t.arg, e.completion = t;
            }
            function D(e) {
                this.tryEntries = [ {
                    tryLoc: "root"
                } ], e.forEach(P, this), this.reset(!0);
            }
            function C(t) {
                if (t) {
                    var e = t[i];
                    if (e) return e.call(t);
                    if ("function" == typeof t.next) return t;
                    if (!isNaN(t.length)) {
                        var n = -1, r = function e() {
                            for (;++n < t.length; ) if (c.call(t, n)) return e.value = t[n], e.done = !1, e;
                            return e.value = u, e.done = !0, e;
                        };
                        return r.next = r;
                    }
                }
                return {
                    next: I
                };
            }
            function I() {
                return {
                    value: u,
                    done: !0
                };
            }
        }

// ==================== 元数据 ====================
// 此文件包含从 wx0757e6b02994b562 提取的 AES 算法实现
// 检测位置: 行 4582-4582
// 变量名: A
// 检测源: dynamic-function
