var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.ISOLATE_POLYFILLS = !1;
$jscomp.FORCE_POLYFILL_PROMISE = !1;
$jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, b, c) {
    if (a == Array.prototype || a == Object.prototype)
        return a;
    a[b] = c.value;
    return a
}
    ;
$jscomp.getGlobal = function (a) {
    a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
    for (var b = 0; b < a.length; ++b) {
        var c = a[b];
        if (c && c.Math == Math)
            return c
    }
    throw Error("Cannot find global object");
}
    ;
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.IS_SYMBOL_NATIVE = "function" === typeof Symbol && "symbol" === typeof Symbol("x");
$jscomp.TRUST_ES6_POLYFILLS = !$jscomp.ISOLATE_POLYFILLS || $jscomp.IS_SYMBOL_NATIVE;
$jscomp.polyfills = {};
$jscomp.propertyToPolyfillSymbol = {};
$jscomp.POLYFILL_PREFIX = "$jscp$";
var $jscomp$lookupPolyfilledValue = function (a, b) {
    var c = $jscomp.propertyToPolyfillSymbol[b];
    if (null == c)
        return a[b];
    c = a[c];
    return void 0 !== c ? c : a[b]
};
$jscomp.polyfill = function (a, b, c, d) {
    b && ($jscomp.ISOLATE_POLYFILLS ? $jscomp.polyfillIsolated(a, b, c, d) : $jscomp.polyfillUnisolated(a, b, c, d))
}
    ;
$jscomp.polyfillUnisolated = function (a, b, c, d) {
    c = $jscomp.global;
    a = a.split(".");
    for (d = 0; d < a.length - 1; d++) {
        var e = a[d];
        if (!(e in c))
            return;
        c = c[e]
    }
    a = a[a.length - 1];
    d = c[a];
    b = b(d);
    b != d && null != b && $jscomp.defineProperty(c, a, {
        configurable: !0,
        writable: !0,
        value: b
    })
}
    ;
$jscomp.polyfillIsolated = function (a, b, c, d) {
    var e = a.split(".");
    a = 1 === e.length;
    d = e[0];
    d = !a && d in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global;
    for (var h = 0; h < e.length - 1; h++) {
        var m = e[h];
        if (!(m in d))
            return;
        d = d[m]
    }
    e = e[e.length - 1];
    c = $jscomp.IS_SYMBOL_NATIVE && "es6" === c ? d[e] : null;
    b = b(c);
    null != b && (a ? $jscomp.defineProperty($jscomp.polyfills, e, {
        configurable: !0,
        writable: !0,
        value: b
    }) : b !== c && (void 0 === $jscomp.propertyToPolyfillSymbol[e] && ($jscomp.propertyToPolyfillSymbol[e] = $jscomp.IS_SYMBOL_NATIVE ? $jscomp.global.Symbol(e) : $jscomp.POLYFILL_PREFIX + e),
        e = $jscomp.propertyToPolyfillSymbol[e],
        $jscomp.defineProperty(d, e, {
            configurable: !0,
            writable: !0,
            value: b
        })))
}
    ;
$jscomp.underscoreProtoCanBeSet = function () {
    var a = {
        a: !0
    }
        , b = {};
    try {
        return b.__proto__ = a,
            b.a
    } catch (c) { }
    return !1
}
    ;
$jscomp.setPrototypeOf = $jscomp.TRUST_ES6_POLYFILLS && "function" == typeof Object.setPrototypeOf ? Object.setPrototypeOf : $jscomp.underscoreProtoCanBeSet() ? function (a, b) {
    a.__proto__ = b;
    if (a.__proto__ !== b)
        throw new TypeError(a + " is not extensible");
    return a
}
    : null;
$jscomp.arrayIteratorImpl = function (a) {
    var b = 0;
    return function () {
        return b < a.length ? {
            done: !1,
            value: a[b++]
        } : {
            done: !0
        }
    }
}
    ;
$jscomp.arrayIterator = function (a) {
    return {
        next: $jscomp.arrayIteratorImpl(a)
    }
}
    ;
$jscomp.makeIterator = function (a) {
    var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
    return b ? b.call(a) : $jscomp.arrayIterator(a)
}
    ;
$jscomp.generator = {};
$jscomp.generator.ensureIteratorResultIsObject_ = function (a) {
    if (!(a instanceof Object))
        throw new TypeError("Iterator result " + a + " is not an object");
}
    ;
$jscomp.generator.Context = function () {
    this.isRunning_ = !1;
    this.yieldAllIterator_ = null;
    this.yieldResult = void 0;
    this.nextAddress = 1;
    this.finallyAddress_ = this.catchAddress_ = 0;
    this.finallyContexts_ = this.abruptCompletion_ = null
}
    ;
$jscomp.generator.Context.prototype.start_ = function () {
    if (this.isRunning_)
        throw new TypeError("Generator is already running");
    this.isRunning_ = !0
}
    ;
$jscomp.generator.Context.prototype.stop_ = function () {
    this.isRunning_ = !1
}
    ;
$jscomp.generator.Context.prototype.jumpToErrorHandler_ = function () {
    this.nextAddress = this.catchAddress_ || this.finallyAddress_
}
    ;
$jscomp.generator.Context.prototype.next_ = function (a) {
    this.yieldResult = a
}
    ;
$jscomp.generator.Context.prototype.throw_ = function (a) {
    this.abruptCompletion_ = {
        exception: a,
        isException: !0
    };
    this.jumpToErrorHandler_()
}
    ;
$jscomp.generator.Context.prototype.return = function (a) {
    this.abruptCompletion_ = {
        return: a
    };
    this.nextAddress = this.finallyAddress_
}
    ;
$jscomp.generator.Context.prototype.jumpThroughFinallyBlocks = function (a) {
    this.abruptCompletion_ = {
        jumpTo: a
    };
    this.nextAddress = this.finallyAddress_
}
    ;
$jscomp.generator.Context.prototype.yield = function (a, b) {
    this.nextAddress = b;
    return {
        value: a
    }
}
    ;
$jscomp.generator.Context.prototype.yieldAll = function (a, b) {
    a = $jscomp.makeIterator(a);
    var c = a.next();
    $jscomp.generator.ensureIteratorResultIsObject_(c);
    if (c.done)
        this.yieldResult = c.value,
            this.nextAddress = b;
    else
        return this.yieldAllIterator_ = a,
            this.yield(c.value, b)
}
    ;
$jscomp.generator.Context.prototype.jumpTo = function (a) {
    this.nextAddress = a
}
    ;
$jscomp.generator.Context.prototype.jumpToEnd = function () {
    this.nextAddress = 0
}
    ;
$jscomp.generator.Context.prototype.setCatchFinallyBlocks = function (a, b) {
    this.catchAddress_ = a;
    void 0 != b && (this.finallyAddress_ = b)
}
    ;
$jscomp.generator.Context.prototype.setFinallyBlock = function (a) {
    this.catchAddress_ = 0;
    this.finallyAddress_ = a || 0
}
    ;
$jscomp.generator.Context.prototype.leaveTryBlock = function (a, b) {
    this.nextAddress = a;
    this.catchAddress_ = b || 0
}
    ;
$jscomp.generator.Context.prototype.enterCatchBlock = function (a) {
    this.catchAddress_ = a || 0;
    a = this.abruptCompletion_.exception;
    this.abruptCompletion_ = null;
    return a
}
    ;
$jscomp.generator.Context.prototype.enterFinallyBlock = function (a, b, c) {
    c ? this.finallyContexts_[c] = this.abruptCompletion_ : this.finallyContexts_ = [this.abruptCompletion_];
    this.catchAddress_ = a || 0;
    this.finallyAddress_ = b || 0
}
    ;
$jscomp.generator.Context.prototype.leaveFinallyBlock = function (a, b) {
    b = this.finallyContexts_.splice(b || 0)[0];
    if (b = this.abruptCompletion_ = this.abruptCompletion_ || b) {
        if (b.isException)
            return this.jumpToErrorHandler_();
        void 0 != b.jumpTo && this.finallyAddress_ < b.jumpTo ? (this.nextAddress = b.jumpTo,
            this.abruptCompletion_ = null) : this.nextAddress = this.finallyAddress_
    } else
        this.nextAddress = a
}
    ;
$jscomp.generator.Context.prototype.forIn = function (a) {
    return new $jscomp.generator.Context.PropertyIterator(a)
}
    ;
$jscomp.generator.Context.PropertyIterator = function (a) {
    this.object_ = a;
    this.properties_ = [];
    for (var b in a)
        this.properties_.push(b);
    this.properties_.reverse()
}
    ;
$jscomp.generator.Context.PropertyIterator.prototype.getNext = function () {
    for (; 0 < this.properties_.length;) {
        var a = this.properties_.pop();
        if (a in this.object_)
            return a
    }
    return null
}
    ;
$jscomp.generator.Engine_ = function (a) {
    this.context_ = new $jscomp.generator.Context;
    this.program_ = a
}
    ;
$jscomp.generator.Engine_.prototype.next_ = function (a) {
    this.context_.start_();
    if (this.context_.yieldAllIterator_)
        return this.yieldAllStep_(this.context_.yieldAllIterator_.next, a, this.context_.next_);
    this.context_.next_(a);
    return this.nextStep_()
}
    ;
$jscomp.generator.Engine_.prototype.return_ = function (a) {
    this.context_.start_();
    var b = this.context_.yieldAllIterator_;
    if (b)
        return this.yieldAllStep_("return" in b ? b["return"] : function (c) {
            return {
                value: c,
                done: !0
            }
        }
            , a, this.context_.return);
    this.context_.return(a);
    return this.nextStep_()
}
    ;
$jscomp.generator.Engine_.prototype.throw_ = function (a) {
    this.context_.start_();
    if (this.context_.yieldAllIterator_)
        return this.yieldAllStep_(this.context_.yieldAllIterator_["throw"], a, this.context_.next_);
    this.context_.throw_(a);
    return this.nextStep_()
}
    ;
$jscomp.generator.Engine_.prototype.yieldAllStep_ = function (a, b, c) {
    try {
        var d = a.call(this.context_.yieldAllIterator_, b);
        $jscomp.generator.ensureIteratorResultIsObject_(d);
        if (!d.done)
            return this.context_.stop_(),
                d;
        var e = d.value
    } catch (h) {
        return this.context_.yieldAllIterator_ = null,
            this.context_.throw_(h),
            this.nextStep_()
    }
    this.context_.yieldAllIterator_ = null;
    c.call(this.context_, e);
    return this.nextStep_()
}
    ;
$jscomp.generator.Engine_.prototype.nextStep_ = function () {
    for (; this.context_.nextAddress;)
        try {
            var a = this.program_(this.context_);
            if (a)
                return this.context_.stop_(),
                {
                    value: a.value,
                    done: !1
                }
        } catch (b) {
            this.context_.yieldResult = void 0,
                this.context_.throw_(b)
        }
    this.context_.stop_();
    if (this.context_.abruptCompletion_) {
        a = this.context_.abruptCompletion_;
        this.context_.abruptCompletion_ = null;
        if (a.isException)
            throw a.exception;
        return {
            value: a.return,
            done: !0
        }
    }
    return {
        value: void 0,
        done: !0
    }
}
    ;
$jscomp.generator.Generator_ = function (a) {
    this.next = function (b) {
        return a.next_(b)
    }
        ;
    this.throw = function (b) {
        return a.throw_(b)
    }
        ;
    this.return = function (b) {
        return a.return_(b)
    }
        ;
    this[Symbol.iterator] = function () {
        return this
    }
}
    ;
$jscomp.generator.createGenerator = function (a, b) {
    b = new $jscomp.generator.Generator_(new $jscomp.generator.Engine_(b));
    $jscomp.setPrototypeOf && a.prototype && $jscomp.setPrototypeOf(b, a.prototype);
    return b
}
    ;
$jscomp.asyncExecutePromiseGenerator = function (a) {
    function b(d) {
        return a.next(d)
    }
    function c(d) {
        return a.throw(d)
    }
    return new Promise(function (d, e) {
        function h(m) {
            m.done ? d(m.value) : Promise.resolve(m.value).then(b, c).then(h, e)
        }
        h(a.next())
    }
    )
}
    ;
$jscomp.asyncExecutePromiseGeneratorFunction = function (a) {
    return $jscomp.asyncExecutePromiseGenerator(a())
}
    ;
$jscomp.asyncExecutePromiseGeneratorProgram = function (a) {
    return $jscomp.asyncExecutePromiseGenerator(new $jscomp.generator.Generator_(new $jscomp.generator.Engine_(a)))
}
    ;
window.Granite = window.Granite || {};
Granite.Sling = {
    SELECTOR_INFINITY: ".infinity",
    CHARSET: "_charset_",
    STATUS: ":status",
    STATUS_BROWSER: "browser",
    OPERATION: ":operation",
    OPERATION_DELETE: "delete",
    OPERATION_MOVE: "move",
    DELETE_SUFFIX: "@Delete",
    TYPEHINT_SUFFIX: "@TypeHint",
    COPY_SUFFIX: "@CopyFrom",
    MOVE_SUFFIX: "@MoveFrom",
    ORDER: ":order",
    REPLACE: ":replace",
    DESTINATION: ":dest",
    SAVE_PARAM_PREFIX: ":saveParamPrefix",
    IGNORE_PARAM: ":ignore",
    REQUEST_LOGIN_PARAM: "sling:authRequestLogin",
    LOGIN_URL: "/system/sling/login.html",
    LOGOUT_URL: "/system/sling/logout.html"
};
(function (a, b) {
    a.Util = function () {
        var c = {
            patchText: function (d, e) {
                if (e)
                    if (b.isArray(e))
                        for (var h = 0; h < e.length; h++)
                            d = d.replace("{" + h + "}", e[h]);
                    else
                        d = d.replace("{0}", e);
                return d
            },
            getTopWindow: function () {
                var d = window;
                if (this.iFrameTopWindow)
                    return this.iFrameTopWindow;
                try {
                    for (; d.parent && d !== d.parent && d.parent.location.href;)
                        d = d.parent
                } catch (e) { }
                return d
            },
            setIFrameMode: function (d) {
                this.iFrameTopWindow = d || window
            },
            applyDefaults: function () {
                for (var d, e = arguments[0] || {}, h = 1; h < arguments.length; h++) {
                    d = arguments[h];
                    for (var m in d) {
                        var u = d[m];
                        d.hasOwnProperty(m) && void 0 !== u && (e[m] = null === u || "object" !== typeof u || u instanceof Array ? u instanceof Array ? u.slice(0) : u : c.applyDefaults(e[m], u))
                    }
                }
                return e
            },
            getKeyCode: function (d) {
                return d.keyCode ? d.keyCode : d.which
            }
        };
        return c
    }()
}
)(Granite, jQuery);
(function (a, b, c, d) {
    a.HTTP = function () {
        var e = null
            , h = /^(?:http|https):\/\/[^\/]+(\/.*)\/(?:etc\.clientlibs|etc(\/.*)*\/clientlibs|libs(\/.*)*\/clientlibs|apps(\/.*)*\/clientlibs|etc\/designs).*\.js(\?.*)?$/
            , m = /[^\w-.~%:/?[\]@!$&'()*+,;=]/
            , u = /^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/
            , k = !1
            , f = {
                getSchemeAndAuthority: function (n) {
                    if (!n)
                        return "";
                    n = u.exec(n);
                    return null === n ? "" : [n[1], n[3]].join("")
                },
                getContextPath: function () {
                    return e
                },
                detectContextPath: function () {
                    try {
                        if (window.CQURLInfo)
                            e = CQURLInfo.contextPath || "";
                        else {
                            for (var n = document.getElementsByTagName("script"), r = 0; r < n.length; r++) {
                                var q = h.exec(n[r].src);
                                if (q) {
                                    e = q[1];
                                    return
                                }
                            }
                            e = ""
                        }
                    } catch (l) { }
                },
                externalize: function (n) {
                    try {
                        0 === n.indexOf("/") && e && 0 !== n.indexOf(e + "/") && (n = e + n)
                    } catch (r) { }
                    return n
                },
                internalize: function (n, r) {
                    if ("/" === n.charAt(0))
                        return e === n ? "" : e && 0 === n.indexOf(e + "/") ? n.substring(e.length) : n;
                    r || (r = document);
                    r = f.getSchemeAndAuthority(r.location.href);
                    var q = f.getSchemeAndAuthority(n);
                    return r === q ? n.substring(q.length + (e ? e.length : 0)) : n
                },
                getPath: function (n) {
                    if (n)
                        n = f.removeParameters(n),
                            n = f.removeAnchor(n);
                    else {
                        if (window.CQURLInfo && CQURLInfo.requestPath)
                            return CQURLInfo.requestPath;
                        n = window.location.pathname
                    }
                    n = f.internalize(n);
                    var r = n.indexOf(".", n.lastIndexOf("/"));
                    -1 !== r && (n = n.substring(0, r));
                    return n
                },
                removeAnchor: function (n) {
                    var r = n.indexOf("#");
                    return 0 <= r ? n.substring(0, r) : n
                },
                removeParameters: function (n) {
                    var r = n.indexOf("?");
                    return 0 <= r ? n.substring(0, r) : n
                },
                encodePathOfURI: function (n) {
                    for (var r = ["?", "#"], q = [n], l, t = 0, g = r.length; t < g; t++)
                        if (l = r[t],
                            0 <= n.indexOf(l)) {
                            q = n.split(l);
                            break
                        }
                    m.test(q[0]) && (q[0] = f.encodePath(q[0]));
                    return q.join(l)
                },
                encodePath: function (n) {
                    n = encodeURI(n);
                    n = n.replace(/%5B/g, "[").replace(/%5D/g, "]");
                    n = n.replace(/\?/g, "%3F");
                    return n = n.replace(/#/g, "%23")
                },
                handleLoginRedirect: function () {
                    if (!k) {
                        k = !0;
                        alert(a.I18n.get("Your request could not be completed because you have been signed out."));
                        var n = b.getTopWindow().document.location;
                        n.href = f.externalize(c.LOGIN_URL) + "?resource\x3d" + encodeURIComponent(n.pathname + n.search + n.hash)
                    }
                },
                getXhrHook: function (n, r, q) {
                    r = r || "GET";
                    return window.G_XHR_HOOK && d.isFunction(G_XHR_HOOK) ? (n = {
                        url: n,
                        method: r
                    },
                        q && (n.params = q),
                        G_XHR_HOOK(n)) : null
                },
                eval: function (n) {
                    "object" !== typeof n && (n = d.ajax({
                        url: n,
                        type: "get",
                        async: !1
                    }));
                    try {
                        return eval("(" + (n.body ? n.body : n.responseText) + ")")
                    } catch (r) { }
                    return null
                }
            };
        return f
    }()
}
)(Granite, Granite.Util, Granite.Sling, jQuery);
(function (a, b, c, d, e) {
    b.I18n = function () {
        var h = {}
            , m = "/libs/cq/i18n/dict."
            , u = ".json"
            , k = void 0
            , f = !1
            , n = null
            , r = {}
            , q = !1;
        r.LOCALE_DEFAULT = "en";
        r.PSEUDO_LANGUAGE = "zz";
        r.PSEUDO_PATTERN_KEY = "_pseudoPattern_";
        r.init = function (l) {
            l = l || {};
            this.setLocale(l.locale);
            this.setUrlPrefix(l.urlPrefix);
            this.setUrlSuffix(l.urlSuffix)
        }
            ;
        r.setLocale = function (l) {
            l && (k = l)
        }
            ;
        r.getLocale = function () {
            e.isFunction(k) && (k = k());
            return k || a.documentElement.lang || r.LOCALE_DEFAULT
        }
            ;
        r.setUrlPrefix = function (l) {
            l && (m = l,
                q = !0)
        }
            ;
        r.setUrlSuffix = function (l) {
            l && (u = l,
                q = !0)
        }
            ;
        r.getDictionary = function (l) {
            l = l || r.getLocale();
            if (!h[l]) {
                f = 0 === l.indexOf(r.PSEUDO_LANGUAGE);
                try {
                    var t = e.ajax;
                    var g = l;
                    if (q)
                        var p = m + g + u;
                    else {
                        var w = e("html").attr("data-i18n-dictionary-src");
                        p = w ? w.replace("{locale}", encodeURIComponent(g)).replace("{+locale}", g) : m + g + u
                    }
                    var x = t.call(e, p, {
                        async: !1,
                        dataType: "json"
                    });
                    h[l] = e.parseJSON(x.responseText)
                } catch (F) { }
                h[l] || (h[l] = {})
            }
            return h[l]
        }
            ;
        r.get = function (l, t, g) {
            var p;
            var w = r.getDictionary();
            var x = f ? r.PSEUDO_PATTERN_KEY : g ? l + " ((" + g + "))" : l;
            w && (p = w[x]);
            p || (p = l);
            f && (p = p.replace("{string}", l).replace("{comment}", g ? g : ""));
            return c.patchText(p, t)
        }
            ;
        r.getVar = function (l, t) {
            return l ? r.get(l, null, t) : null
        }
            ;
        r.getLanguages = function () {
            if (!n)
                try {
                    var l = d.eval("/libs/wcm/core/resources/languages.overlay.infinity.json");
                    e.each(l, function (t, g) {
                        g.title = r.getVar(g.language);
                        g.title && g.country && "*" !== g.country && (g.title += " (" + r.getVar(g.country) + ")")
                    });
                    n = l
                } catch (t) {
                    n = {}
                }
            return n
        }
            ;
        r.parseLocale = function (l) {
            if (!l)
                return null;
            var t = l.indexOf("_");
            0 > t && (t = l.indexOf("-"));
            if (0 > t) {
                var g = l;
                t = null
            } else
                g = l.substring(0, t),
                    t = l.substring(t + 1);
            return {
                code: l,
                language: g,
                country: t
            }
        }
            ;
        return r
    }()
}
)(document, Granite, Granite.Util, Granite.HTTP, jQuery);
(function (a, b) {
    a.TouchIndicator = new function () {
        var c = {
            visibility: "hidden",
            position: "absolute",
            width: "30px",
            height: "30px",
            "-webkit-border-radius": "20px",
            "border-radius": "20px",
            border: "5px solid orange",
            "-webkit-user-select": "none",
            "user-select": "none",
            opacity: "0.5",
            "z-index": "2000",
            "pointer-events": "none"
        }
            , d = {}
            , e = [];
        return {
            debugWithMouse: !1,
            init: function () {
                var h = this;
                b(document).on("touchstart.touchindicator touchmove.touchindicator touchend.touchindicator", function (m) {
                    h.update(m.originalEvent.touches);
                    return !0
                });
                if (this.debugWithMouse)
                    b(document).on("mousemove.touchindicator", function (m) {
                        m.identifer = "fake";
                        h.update([m]);
                        return !0
                    })
            },
            update: function (h) {
                for (var m = {}, u = 0; u < h.length; u++) {
                    var k = h[u]
                        , f = k.identifier
                        , n = d[f];
                    n || (n = e.pop(),
                        n || (n = b("\x3cdiv\x3e\x3c/div\x3e").css(c),
                            b("body").append(n)));
                    m[f] = n;
                    n.offset({
                        left: k.pageX - 20,
                        top: k.pageY - 20
                    });
                    n.css("visibility", "visible")
                }
                for (f in d)
                    d.hasOwnProperty(f) && !m[f] && (n = d[f],
                        n.css("visibility", "hidden"),
                        e.push(n));
                d = m
            }
        }
    }
}
)(Granite, jQuery);
(function (a, b, c, d) {
    a.OptOutUtil = function () {
        var e = {}
            , h = []
            , m = [];
        e.init = function (u) {
            u && (h = u.cookieNames ? u.cookieNames : h,
                m = u.whitelistCookieNames ? u.whitelistCookieNames : m)
        }
            ;
        e.getCookieNames = function () {
            return h
        }
            ;
        e.getWhitelistCookieNames = function () {
            return m
        }
            ;
        e.isOptedOut = function () {
            for (var u = document.cookie.split(";"), k = 0; k < u.length; k++) {
                var f = d.trim(u[k].split("\x3d")[0]);
                if (-1 < d.inArray(f, e.getCookieNames()))
                    return !0
            }
            return !1
        }
            ;
        e.maySetCookie = function (u) {
            return !(e.isOptedOut() && -1 === d.inArray(u, e.getWhitelistCookieNames()))
        }
            ;
        return e
    }()
}
)(Granite, Granite.Util, Granite.HTTP, jQuery);
Granite.OptOutUtil.init(window.GraniteOptOutConfig);
Granite.HTTP.detectContextPath();
var CryptoJS = CryptoJS || function (a, b) {
    var c = {}
        , d = c.lib = {}
        , e = function () { }
        , h = d.Base = {
            extend: function (l) {
                e.prototype = this;
                var t = new e;
                l && t.mixIn(l);
                t.hasOwnProperty("init") || (t.init = function () {
                    t.$super.init.apply(this, arguments)
                }
                );
                t.init.prototype = t;
                t.$super = this;
                return t
            },
            create: function () {
                var l = this.extend();
                l.init.apply(l, arguments);
                return l
            },
            init: function () { },
            mixIn: function (l) {
                for (var t in l)
                    l.hasOwnProperty(t) && (this[t] = l[t]);
                l.hasOwnProperty("toString") && (this.toString = l.toString)
            },
            clone: function () {
                return this.init.prototype.extend(this)
            }
        }
        , m = d.WordArray = h.extend({
            init: function (l, t) {
                l = this.words = l || [];
                this.sigBytes = t != b ? t : 4 * l.length
            },
            toString: function (l) {
                return (l || k).stringify(this)
            },
            concat: function (l) {
                var t = this.words
                    , g = l.words
                    , p = this.sigBytes;
                l = l.sigBytes;
                this.clamp();
                if (p % 4)
                    for (var w = 0; w < l; w++)
                        t[p + w >>> 2] |= (g[w >>> 2] >>> 24 - w % 4 * 8 & 255) << 24 - (p + w) % 4 * 8;
                else if (65535 < g.length)
                    for (w = 0; w < l; w += 4)
                        t[p + w >>> 2] = g[w >>> 2];
                else
                    t.push.apply(t, g);
                this.sigBytes += l;
                return this
            },
            clamp: function () {
                var l = this.words
                    , t = this.sigBytes;
                l[t >>> 2] &= 4294967295 << 32 - t % 4 * 8;
                l.length = a.ceil(t / 4)
            },
            clone: function () {
                var l = h.clone.call(this);
                l.words = this.words.slice(0);
                return l
            },
            random: function (l) {
                for (var t = [], g = 0; g < l; g += 4)
                    t.push(4294967296 * a.random() | 0);
                return new m.init(t, l)
            }
        })
        , u = c.enc = {}
        , k = u.Hex = {
            stringify: function (l) {
                var t = l.words;
                l = l.sigBytes;
                for (var g = [], p = 0; p < l; p++) {
                    var w = t[p >>> 2] >>> 24 - p % 4 * 8 & 255;
                    g.push((w >>> 4).toString(16));
                    g.push((w & 15).toString(16))
                }
                return g.join("")
            },
            parse: function (l) {
                for (var t = l.length, g = [], p = 0; p < t; p += 2)
                    g[p >>> 3] |= parseInt(l.substr(p, 2), 16) << 24 - p % 8 * 4;
                return new m.init(g, t / 2)
            }
        }
        , f = u.Latin1 = {
            stringify: function (l) {
                var t = l.words;
                l = l.sigBytes;
                for (var g = [], p = 0; p < l; p++)
                    g.push(String.fromCharCode(t[p >>> 2] >>> 24 - p % 4 * 8 & 255));
                return g.join("")
            },
            parse: function (l) {
                for (var t = l.length, g = [], p = 0; p < t; p++)
                    g[p >>> 2] |= (l.charCodeAt(p) & 255) << 24 - p % 4 * 8;
                return new m.init(g, t)
            }
        }
        , n = u.Utf8 = {
            stringify: function (l) {
                try {
                    return decodeURIComponent(escape(f.stringify(l)))
                } catch (t) {
                    throw Error("Malformed UTF-8 data");
                }
            },
            parse: function (l) {
                return f.parse(unescape(encodeURIComponent(l)))
            }
        }
        , r = d.BufferedBlockAlgorithm = h.extend({
            reset: function () {
                this._data = new m.init;
                this._nDataBytes = 0
            },
            _append: function (l) {
                "string" == typeof l && (l = n.parse(l));
                this._data.concat(l);
                this._nDataBytes += l.sigBytes
            },
            _process: function (l) {
                var t = this._data
                    , g = t.words
                    , p = t.sigBytes
                    , w = this.blockSize
                    , x = p / (4 * w);
                x = l ? a.ceil(x) : a.max((x | 0) - this._minBufferSize, 0);
                l = x * w;
                p = a.min(4 * l, p);
                if (l) {
                    for (var F = 0; F < l; F += w)
                        this._doProcessBlock(g, F);
                    F = g.splice(0, l);
                    t.sigBytes -= p
                }
                return new m.init(F, p)
            },
            clone: function () {
                var l = h.clone.call(this);
                l._data = this._data.clone();
                return l
            },
            _minBufferSize: 0
        });
    d.Hasher = r.extend({
        cfg: h.extend(),
        init: function (l) {
            this.cfg = this.cfg.extend(l);
            this.reset()
        },
        reset: function () {
            r.reset.call(this);
            this._doReset()
        },
        update: function (l) {
            this._append(l);
            this._process();
            return this
        },
        finalize: function (l) {
            l && this._append(l);
            return this._doFinalize()
        },
        blockSize: 16,
        _createHelper: function (l) {
            return function (t, g) {
                return (new l.init(g)).finalize(t)
            }
        },
        _createHmacHelper: function (l) {
            return function (t, g) {
                return (new q.HMAC.init(l, g)).finalize(t)
            }
        }
    });
    var q = c.algo = {};
    return c
}(Math);
(function () {
    var a = CryptoJS
        , b = a.lib.WordArray;
    a.enc.Base64 = {
        stringify: function (c) {
            var d = c.words
                , e = c.sigBytes
                , h = this._map;
            c.clamp();
            c = [];
            for (var m = 0; m < e; m += 3)
                for (var u = (d[m >>> 2] >>> 24 - m % 4 * 8 & 255) << 16 | (d[m + 1 >>> 2] >>> 24 - (m + 1) % 4 * 8 & 255) << 8 | d[m + 2 >>> 2] >>> 24 - (m + 2) % 4 * 8 & 255, k = 0; 4 > k && m + .75 * k < e; k++)
                    c.push(h.charAt(u >>> 6 * (3 - k) & 63));
            if (d = h.charAt(64))
                for (; c.length % 4;)
                    c.push(d);
            return c.join("")
        },
        parse: function (c) {
            var d = c.length
                , e = this._map
                , h = e.charAt(64);
            h && (h = c.indexOf(h),
                -1 != h && (d = h));
            h = [];
            for (var m = 0, u = 0; u < d; u++)
                if (u % 4) {
                    var k = e.indexOf(c.charAt(u - 1)) << u % 4 * 2
                        , f = e.indexOf(c.charAt(u)) >>> 6 - u % 4 * 2;
                    h[m >>> 2] |= (k | f) << 24 - m % 4 * 8;
                    m++
                }
            return b.create(h, m)
        },
        _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\x3d"
    }
}
)();
(function (a) {
    function b(r, q, l, t, g, p, w) {
        r = r + (q & l | ~q & t) + g + w;
        return (r << p | r >>> 32 - p) + q
    }
    function c(r, q, l, t, g, p, w) {
        r = r + (q & t | l & ~t) + g + w;
        return (r << p | r >>> 32 - p) + q
    }
    function d(r, q, l, t, g, p, w) {
        r = r + (q ^ l ^ t) + g + w;
        return (r << p | r >>> 32 - p) + q
    }
    function e(r, q, l, t, g, p, w) {
        r = r + (l ^ (q | ~t)) + g + w;
        return (r << p | r >>> 32 - p) + q
    }
    var h = CryptoJS
        , m = h.lib
        , u = m.WordArray
        , k = m.Hasher;
    m = h.algo;
    for (var f = [], n = 0; 64 > n; n++)
        f[n] = 4294967296 * a.abs(a.sin(n + 1)) | 0;
    m = m.MD5 = k.extend({
        _doReset: function () {
            this._hash = new u.init([1732584193, 4023233417, 2562383102, 271733878])
        },
        _doProcessBlock: function (r, q) {
            for (var l = 0; 16 > l; l++) {
                var t = q + l
                    , g = r[t];
                r[t] = (g << 8 | g >>> 24) & 16711935 | (g << 24 | g >>> 8) & 4278255360
            }
            l = this._hash.words;
            t = r[q + 0];
            g = r[q + 1];
            var p = r[q + 2]
                , w = r[q + 3]
                , x = r[q + 4]
                , F = r[q + 5]
                , L = r[q + 6]
                , M = r[q + 7]
                , P = r[q + 8]
                , v = r[q + 9]
                , E = r[q + 10]
                , J = r[q + 11]
                , y = r[q + 12]
                , H = r[q + 13]
                , N = r[q + 14];
            r = r[q + 15];
            q = l[0];
            var A = l[1]
                , z = l[2]
                , D = l[3];
            q = b(q, A, z, D, t, 7, f[0]);
            D = b(D, q, A, z, g, 12, f[1]);
            z = b(z, D, q, A, p, 17, f[2]);
            A = b(A, z, D, q, w, 22, f[3]);
            q = b(q, A, z, D, x, 7, f[4]);
            D = b(D, q, A, z, F, 12, f[5]);
            z = b(z, D, q, A, L, 17, f[6]);
            A = b(A, z, D, q, M, 22, f[7]);
            q = b(q, A, z, D, P, 7, f[8]);
            D = b(D, q, A, z, v, 12, f[9]);
            z = b(z, D, q, A, E, 17, f[10]);
            A = b(A, z, D, q, J, 22, f[11]);
            q = b(q, A, z, D, y, 7, f[12]);
            D = b(D, q, A, z, H, 12, f[13]);
            z = b(z, D, q, A, N, 17, f[14]);
            A = b(A, z, D, q, r, 22, f[15]);
            q = c(q, A, z, D, g, 5, f[16]);
            D = c(D, q, A, z, L, 9, f[17]);
            z = c(z, D, q, A, J, 14, f[18]);
            A = c(A, z, D, q, t, 20, f[19]);
            q = c(q, A, z, D, F, 5, f[20]);
            D = c(D, q, A, z, E, 9, f[21]);
            z = c(z, D, q, A, r, 14, f[22]);
            A = c(A, z, D, q, x, 20, f[23]);
            q = c(q, A, z, D, v, 5, f[24]);
            D = c(D, q, A, z, N, 9, f[25]);
            z = c(z, D, q, A, w, 14, f[26]);
            A = c(A, z, D, q, P, 20, f[27]);
            q = c(q, A, z, D, H, 5, f[28]);
            D = c(D, q, A, z, p, 9, f[29]);
            z = c(z, D, q, A, M, 14, f[30]);
            A = c(A, z, D, q, y, 20, f[31]);
            q = d(q, A, z, D, F, 4, f[32]);
            D = d(D, q, A, z, P, 11, f[33]);
            z = d(z, D, q, A, J, 16, f[34]);
            A = d(A, z, D, q, N, 23, f[35]);
            q = d(q, A, z, D, g, 4, f[36]);
            D = d(D, q, A, z, x, 11, f[37]);
            z = d(z, D, q, A, M, 16, f[38]);
            A = d(A, z, D, q, E, 23, f[39]);
            q = d(q, A, z, D, H, 4, f[40]);
            D = d(D, q, A, z, t, 11, f[41]);
            z = d(z, D, q, A, w, 16, f[42]);
            A = d(A, z, D, q, L, 23, f[43]);
            q = d(q, A, z, D, v, 4, f[44]);
            D = d(D, q, A, z, y, 11, f[45]);
            z = d(z, D, q, A, r, 16, f[46]);
            A = d(A, z, D, q, p, 23, f[47]);
            q = e(q, A, z, D, t, 6, f[48]);
            D = e(D, q, A, z, M, 10, f[49]);
            z = e(z, D, q, A, N, 15, f[50]);
            A = e(A, z, D, q, F, 21, f[51]);
            q = e(q, A, z, D, y, 6, f[52]);
            D = e(D, q, A, z, w, 10, f[53]);
            z = e(z, D, q, A, E, 15, f[54]);
            A = e(A, z, D, q, g, 21, f[55]);
            q = e(q, A, z, D, P, 6, f[56]);
            D = e(D, q, A, z, r, 10, f[57]);
            z = e(z, D, q, A, L, 15, f[58]);
            A = e(A, z, D, q, H, 21, f[59]);
            q = e(q, A, z, D, x, 6, f[60]);
            D = e(D, q, A, z, J, 10, f[61]);
            z = e(z, D, q, A, p, 15, f[62]);
            A = e(A, z, D, q, v, 21, f[63]);
            l[0] = l[0] + q | 0;
            l[1] = l[1] + A | 0;
            l[2] = l[2] + z | 0;
            l[3] = l[3] + D | 0
        },
        _doFinalize: function () {
            var r = this._data
                , q = r.words
                , l = 8 * this._nDataBytes
                , t = 8 * r.sigBytes;
            q[t >>> 5] |= 128 << 24 - t % 32;
            var g = a.floor(l / 4294967296);
            q[(t + 64 >>> 9 << 4) + 15] = (g << 8 | g >>> 24) & 16711935 | (g << 24 | g >>> 8) & 4278255360;
            q[(t + 64 >>> 9 << 4) + 14] = (l << 8 | l >>> 24) & 16711935 | (l << 24 | l >>> 8) & 4278255360;
            r.sigBytes = 4 * (q.length + 1);
            this._process();
            r = this._hash;
            q = r.words;
            for (l = 0; 4 > l; l++)
                t = q[l],
                    q[l] = (t << 8 | t >>> 24) & 16711935 | (t << 24 | t >>> 8) & 4278255360;
            return r
        },
        clone: function () {
            var r = k.clone.call(this);
            r._hash = this._hash.clone();
            return r
        }
    });
    h.MD5 = k._createHelper(m);
    h.HmacMD5 = k._createHmacHelper(m)
}
)(Math);
(function () {
    var a = CryptoJS
        , b = a.lib
        , c = b.Base
        , d = b.WordArray;
    b = a.algo;
    var e = b.EvpKDF = c.extend({
        cfg: c.extend({
            keySize: 4,
            hasher: b.MD5,
            iterations: 1
        }),
        init: function (h) {
            this.cfg = this.cfg.extend(h)
        },
        compute: function (h, m) {
            var u = this.cfg
                , k = u.hasher.create()
                , f = d.create()
                , n = f.words
                , r = u.keySize;
            for (u = u.iterations; n.length < r;) {
                q && k.update(q);
                var q = k.update(h).finalize(m);
                k.reset();
                for (var l = 1; l < u; l++)
                    q = k.finalize(q),
                        k.reset();
                f.concat(q)
            }
            f.sigBytes = 4 * r;
            return f
        }
    });
    a.EvpKDF = function (h, m, u) {
        return e.create(u).compute(h, m)
    }
}
)();
CryptoJS.lib.Cipher || function (a) {
    var b = CryptoJS
        , c = b.lib
        , d = c.Base
        , e = c.WordArray
        , h = c.BufferedBlockAlgorithm
        , m = b.enc.Base64
        , u = b.algo.EvpKDF
        , k = c.Cipher = h.extend({
            cfg: d.extend(),
            createEncryptor: function (g, p) {
                return this.create(this._ENC_XFORM_MODE, g, p)
            },
            createDecryptor: function (g, p) {
                return this.create(this._DEC_XFORM_MODE, g, p)
            },
            init: function (g, p, w) {
                this.cfg = this.cfg.extend(w);
                this._xformMode = g;
                this._key = p;
                this.reset()
            },
            reset: function () {
                h.reset.call(this);
                this._doReset()
            },
            process: function (g) {
                this._append(g);
                return this._process()
            },
            finalize: function (g) {
                g && this._append(g);
                return this._doFinalize()
            },
            keySize: 4,
            ivSize: 4,
            _ENC_XFORM_MODE: 1,
            _DEC_XFORM_MODE: 2,
            _createHelper: function (g) {
                return {
                    encrypt: function (p, w, x) {
                        return ("string" == typeof w ? t : l).encrypt(g, p, w, x)
                    },
                    decrypt: function (p, w, x) {
                        return ("string" == typeof w ? t : l).decrypt(g, p, w, x)
                    }
                }
            }
        });
    c.StreamCipher = k.extend({
        _doFinalize: function () {
            return this._process(!0)
        },
        blockSize: 1
    });
    var f = b.mode = {}
        , n = function (g, p, w) {
            var x = this._iv;
            x ? this._iv = a : x = this._prevBlock;
            for (var F = 0; F < w; F++)
                g[p + F] ^= x[F]
        }
        , r = (c.BlockCipherMode = d.extend({
            createEncryptor: function (g, p) {
                return this.Encryptor.create(g, p)
            },
            createDecryptor: function (g, p) {
                return this.Decryptor.create(g, p)
            },
            init: function (g, p) {
                this._cipher = g;
                this._iv = p
            }
        })).extend();
    r.Encryptor = r.extend({
        processBlock: function (g, p) {
            var w = this._cipher
                , x = w.blockSize;
            n.call(this, g, p, x);
            w.encryptBlock(g, p);
            this._prevBlock = g.slice(p, p + x)
        }
    });
    r.Decryptor = r.extend({
        processBlock: function (g, p) {
            var w = this._cipher
                , x = w.blockSize
                , F = g.slice(p, p + x);
            w.decryptBlock(g, p);
            n.call(this, g, p, x);
            this._prevBlock = F
        }
    });
    f = f.CBC = r;
    r = (b.pad = {}).Pkcs7 = {
        pad: function (g, p) {
            p *= 4;
            p -= g.sigBytes % p;
            for (var w = p << 24 | p << 16 | p << 8 | p, x = [], F = 0; F < p; F += 4)
                x.push(w);
            p = e.create(x, p);
            g.concat(p)
        },
        unpad: function (g) {
            g.sigBytes -= g.words[g.sigBytes - 1 >>> 2] & 255
        }
    };
    c.BlockCipher = k.extend({
        cfg: k.cfg.extend({
            mode: f,
            padding: r
        }),
        reset: function () {
            k.reset.call(this);
            var g = this.cfg
                , p = g.iv;
            g = g.mode;
            if (this._xformMode == this._ENC_XFORM_MODE)
                var w = g.createEncryptor;
            else
                w = g.createDecryptor,
                    this._minBufferSize = 1;
            this._mode = w.call(g, this, p && p.words)
        },
        _doProcessBlock: function (g, p) {
            this._mode.processBlock(g, p)
        },
        _doFinalize: function () {
            var g = this.cfg.padding;
            if (this._xformMode == this._ENC_XFORM_MODE) {
                g.pad(this._data, this.blockSize);
                var p = this._process(!0)
            } else
                p = this._process(!0),
                    g.unpad(p);
            return p
        },
        blockSize: 4
    });
    var q = c.CipherParams = d.extend({
        init: function (g) {
            this.mixIn(g)
        },
        toString: function (g) {
            return (g || this.formatter).stringify(this)
        }
    });
    f = (b.format = {}).OpenSSL = {
        stringify: function (g) {
            var p = g.ciphertext;
            g = g.salt;
            return (g ? e.create([1398893684, 1701076831]).concat(g).concat(p) : p).toString(m)
        },
        parse: function (g) {
            g = m.parse(g);
            var p = g.words;
            if (1398893684 == p[0] && 1701076831 == p[1]) {
                var w = e.create(p.slice(2, 4));
                p.splice(0, 4);
                g.sigBytes -= 16
            }
            return q.create({
                ciphertext: g,
                salt: w
            })
        }
    };
    var l = c.SerializableCipher = d.extend({
        cfg: d.extend({
            format: f
        }),
        encrypt: function (g, p, w, x) {
            x = this.cfg.extend(x);
            var F = g.createEncryptor(w, x);
            p = F.finalize(p);
            F = F.cfg;
            return q.create({
                ciphertext: p,
                key: w,
                iv: F.iv,
                algorithm: g,
                mode: F.mode,
                padding: F.padding,
                blockSize: g.blockSize,
                formatter: x.format
            })
        },
        decrypt: function (g, p, w, x) {
            x = this.cfg.extend(x);
            p = this._parse(p, x.format);
            return g.createDecryptor(w, x).finalize(p.ciphertext)
        },
        _parse: function (g, p) {
            return "string" == typeof g ? p.parse(g, this) : g
        }
    });
    b = (b.kdf = {}).OpenSSL = {
        execute: function (g, p, w, x) {
            x || (x = e.random(8));
            g = u.create({
                keySize: p + w
            }).compute(g, x);
            w = e.create(g.words.slice(p), 4 * w);
            g.sigBytes = 4 * p;
            return q.create({
                key: g,
                iv: w,
                salt: x
            })
        }
    };
    var t = c.PasswordBasedCipher = l.extend({
        cfg: l.cfg.extend({
            kdf: b
        }),
        encrypt: function (g, p, w, x) {
            x = this.cfg.extend(x);
            w = x.kdf.execute(w, g.keySize, g.ivSize);
            x.iv = w.iv;
            g = l.encrypt.call(this, g, p, w.key, x);
            g.mixIn(w);
            return g
        },
        decrypt: function (g, p, w, x) {
            x = this.cfg.extend(x);
            p = this._parse(p, x.format);
            w = x.kdf.execute(w, g.keySize, g.ivSize, p.salt);
            x.iv = w.iv;
            return l.decrypt.call(this, g, p, w.key, x)
        }
    })
}();
(function () {
    for (var a = CryptoJS, b = a.lib.BlockCipher, c = a.algo, d = [], e = [], h = [], m = [], u = [], k = [], f = [], n = [], r = [], q = [], l = [], t = 0; 256 > t; t++)
        l[t] = 128 > t ? t << 1 : t << 1 ^ 283;
    var g = 0
        , p = 0;
    for (t = 0; 256 > t; t++) {
        var w = p ^ p << 1 ^ p << 2 ^ p << 3 ^ p << 4;
        w = w >>> 8 ^ w & 255 ^ 99;
        d[g] = w;
        e[w] = g;
        var x = l[g]
            , F = l[x]
            , L = l[F]
            , M = 257 * l[w] ^ 16843008 * w;
        h[g] = M << 24 | M >>> 8;
        m[g] = M << 16 | M >>> 16;
        u[g] = M << 8 | M >>> 24;
        k[g] = M;
        M = 16843009 * L ^ 65537 * F ^ 257 * x ^ 16843008 * g;
        f[w] = M << 24 | M >>> 8;
        n[w] = M << 16 | M >>> 16;
        r[w] = M << 8 | M >>> 24;
        q[w] = M;
        g ? (g = x ^ l[l[l[L ^ x]]],
            p ^= l[l[p]]) : g = p = 1
    }
    var P = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
    c = c.AES = b.extend({
        _doReset: function () {
            var v = this._key
                , E = v.words
                , J = v.sigBytes / 4;
            v = 4 * ((this._nRounds = J + 6) + 1);
            for (var y = this._keySchedule = [], H = 0; H < v; H++)
                if (H < J)
                    y[H] = E[H];
                else {
                    var N = y[H - 1];
                    H % J ? 6 < J && 4 == H % J && (N = d[N >>> 24] << 24 | d[N >>> 16 & 255] << 16 | d[N >>> 8 & 255] << 8 | d[N & 255]) : (N = N << 8 | N >>> 24,
                        N = d[N >>> 24] << 24 | d[N >>> 16 & 255] << 16 | d[N >>> 8 & 255] << 8 | d[N & 255],
                        N ^= P[H / J | 0] << 24);
                    y[H] = y[H - J] ^ N
                }
            E = this._invKeySchedule = [];
            for (J = 0; J < v; J++)
                H = v - J,
                    N = J % 4 ? y[H] : y[H - 4],
                    E[J] = 4 > J || 4 >= H ? N : f[d[N >>> 24]] ^ n[d[N >>> 16 & 255]] ^ r[d[N >>> 8 & 255]] ^ q[d[N & 255]]
        },
        encryptBlock: function (v, E) {
            this._doCryptBlock(v, E, this._keySchedule, h, m, u, k, d)
        },
        decryptBlock: function (v, E) {
            var J = v[E + 1];
            v[E + 1] = v[E + 3];
            v[E + 3] = J;
            this._doCryptBlock(v, E, this._invKeySchedule, f, n, r, q, e);
            J = v[E + 1];
            v[E + 1] = v[E + 3];
            v[E + 3] = J
        },
        _doCryptBlock: function (v, E, J, y, H, N, A, z) {
            for (var D = this._nRounds, R = v[E] ^ J[0], T = v[E + 1] ^ J[1], V = v[E + 2] ^ J[2], S = v[E + 3] ^ J[3], U = 4, X = 1; X < D; X++) {
                var W = y[R >>> 24] ^ H[T >>> 16 & 255] ^ N[V >>> 8 & 255] ^ A[S & 255] ^ J[U++]
                    , I = y[T >>> 24] ^ H[V >>> 16 & 255] ^ N[S >>> 8 & 255] ^ A[R & 255] ^ J[U++]
                    , C = y[V >>> 24] ^ H[S >>> 16 & 255] ^ N[R >>> 8 & 255] ^ A[T & 255] ^ J[U++];
                S = y[S >>> 24] ^ H[R >>> 16 & 255] ^ N[T >>> 8 & 255] ^ A[V & 255] ^ J[U++];
                R = W;
                T = I;
                V = C
            }
            W = (z[R >>> 24] << 24 | z[T >>> 16 & 255] << 16 | z[V >>> 8 & 255] << 8 | z[S & 255]) ^ J[U++];
            I = (z[T >>> 24] << 24 | z[V >>> 16 & 255] << 16 | z[S >>> 8 & 255] << 8 | z[R & 255]) ^ J[U++];
            C = (z[V >>> 24] << 24 | z[S >>> 16 & 255] << 16 | z[R >>> 8 & 255] << 8 | z[T & 255]) ^ J[U++];
            S = (z[S >>> 24] << 24 | z[R >>> 16 & 255] << 16 | z[T >>> 8 & 255] << 8 | z[V & 255]) ^ J[U++];
            v[E] = W;
            v[E + 1] = I;
            v[E + 2] = C;
            v[E + 3] = S
        },
        keySize: 8
    });
    a.AES = b._createHelper(c)
}
)();
CryptoJS.mode.ECB = function () {
    var a = CryptoJS.lib.BlockCipherMode.extend();
    a.Encryptor = a.extend({
        processBlock: function (b, c) {
            this._cipher.encryptBlock(b, c)
        }
    });
    a.Decryptor = a.extend({
        processBlock: function (b, c) {
            this._cipher.decryptBlock(b, c)
        }
    });
    return a
}();
function fbLoginMethod() {
    var a = $("#j-login-form");
    FB.login(function (b) {
        b.authResponse ? FB.api("/me?fields\x3did,name,email,permissions", function (c) {
            $("#j_socialMediaEmail").val(c.email);
            $("#j_socilMediaUniqId").val(c.id);
            $("#j_socialMediaAccessToken").val(FB.getAuthResponse().accessToken);
            var d = $("#global-spinner-container.spinner-overlay");
            showSpinnerMobileApp(d, "spinner-full-page");
            "undefined" === typeof window.qrServiceRef && (c = $("#login-clientlib-js script").attr("src"),
                c = c.replace("login-clientlibs", "angular"),
                console.log("scriptLoaderPath " + c),
                c = '\x3cscript src\x3d"' + c + '" type\x3d"text/javascript"\x3e\x3c/script\x3e',
                document.createElement("script"),
                $("body").append(c));
            $.ajax({
                url: "/qr/j_security_check_qr_portal",
                type: "POST",
                data: a.serialize(),
                cache: !1,
                success: function (e, h, m, u) {
                    $("#j-login-form").addClass("hide");
                    $(".qbiz-login-section").addClass("visibilityHidden");
                    $(".is-logged").css("display", "block");
                    $(".create-profile-popup").hide();
                    $("#social-login-block").addClass("hide");
                    createSimpleCookie("loginSuccess", "facebook");
                    e = document.referrer;
                    "" != e && void 0 != e && (e = document.referrer.replace(".html", "").split("/"),
                        e = e[e.length - 1]);
                    addComponentPageEvent("login", "loggedin", "facebook", e);
                    e = getUserBasicInfoField("programCode");
                    setTimeout(function () {
                        hideSpinnerMobileApp(d, "spinner-full-page")
                    }, 500);
                    "QRPC" == e ? verifyOTP() : "PORTAL" == e ? redirectUser() : location.reload()
                },
                error: function (e, h, m, u) {
                    if (null != e.getResponseHeader("j_reason")) {
                        e = e.getResponseHeader("j_reason");
                        var k = JSON.parse(e);
                        hideLoginMessages();
                        if (void 0 != k[0] && void 0 != k[0].errorName && "FFP_AUTH_USR_EMAIL_NOT_VRFD" === k[0].errorName.trim())
                            return e = $("#email-verification-alert-message").val(),
                                h = $("#resend-verification-link-label").val(),
                                e = e.replace("${0}", '\x3ca href\x3d"javascript:void(0)" id\x3d"resend-verification-link"\x3e\x3cu\x3e' + h + "\x3c/u\x3e\x3c/a\x3e"),
                                $("#login-alert-message .alert-message").html(e),
                                $("#login-alert-message").removeClass("hidden"),
                                void 0 !== digitalData && void 0 !== digitalData.page && void 0 !== digitalData.page.pageInfo && void 0 !== digitalData.page.pageInfo.pageType && (digitalData.page.pageInfo.pageType = "facebook-login-without-email-verification"),
                                errorClick(window.location.href, "login-facebook", "privilegeclub-login", k[0].errorName),
                                setTimeout(function () {
                                    hideSpinnerMobileApp(d, "spinner-full-page")
                                }, 500),
                                !1;
                        window.qrServiceRef.zone.run(function () {
                            var f = setInterval(function () {
                                window.qrServiceRef.isGlobalI18nLoaded() && (clearInterval(f),
                                    window.qrServiceRef.translateErrorObject(k, "/content/Qatar/i18n/login.errorMessages.json").then(function (n) {
                                        void 0 !== s && "" !== s && null !== s && (s.events = "event110");
                                        var r = n[0].errorDescription;
                                        -1 != r.indexOf("\x3cspan class\x3d'errorCode'\x3e(") && -1 != r.indexOf(")\x3c/span\x3e") && (r = r.replace("\x3cspan class\x3d'errorCode'\x3e(", " "),
                                            r = r.replace(")\x3c/span\x3e", ""));
                                        s.eVar92 = r;
                                        $("#loginErrorBlock #errorId").html(n[0].errorDescription);
                                        $("#loginErrorBlock .input-base-msg-box").show().focus();
                                        void 0 !== digitalData && void 0 !== digitalData.page && void 0 !== digitalData.page.pageInfo && void 0 !== digitalData.page.pageInfo.pageType && (digitalData.page.pageInfo.pageType = "facebook-login-error");
                                        errorClick(window.location.href, "login-facebook", "privilegeclub-login", n[0].errorName);
                                        "true" == $("#sc_variable").val() && s.t()
                                    }))
                            }, 500)
                        })
                    } else
                        $("#loginErrorBlock .input-base-msg-box").hide();
                    setTimeout(function () {
                        hideSpinnerMobileApp(d, "spinner-full-page")
                    }, 500)
                }
            })
        }) : (void 0 !== digitalData && void 0 !== digitalData.page && void 0 !== digitalData.page.pageInfo && void 0 !== digitalData.page.pageInfo.pageType && (digitalData.page.pageInfo.pageType = "LOGIN_FB_ERROR"),
            errorClick(window.location.href, "login-facebook", "privilegeclub-login", "LOGIN_FB_ERROR"))
    }, {
        scope: "email"
    })
}
function socialLoginFB(a) {
    "undefined" == typeof FB && fbInitLogin();
    try {
        if (void 0 != $("#twittername").val()) {
            void 0 != $("#signOnLanguage").val() && $("#signOnLanguage").val();
            $("#j-login-form");
            0 == $("#j-login-form").find("#activity-login-code").length ? $("#j-login-form").append('\x3cinput type\x3d"hidden" id\x3d"activity-login-code" name\x3d"activity-login-code" value\x3d"' + mainActivityCode + '"/\x3e') : $("#j-login-form").find("#activity-login-code").val(mainActivityCode);
            $("#j_submitType").val("FACEBOOK");
            $("#j_socilMediaValue").val("FACEBOOK");
            var b = setInterval(function () {
                "undefined" != typeof FB && (clearInterval(b),
                    fbLoginMethod())
            }, 500)
        }
    } catch (c) { }
}
$(document).ready(function () {
    try {
        if (void 0 != $("#googleplusicon").val())
            $("#googlePlusLogin,#googlePlusLoginMobileApp").on("click", function () {
                "undefined" === typeof gapi && socialLoginGoogle(!0)
            })
    } catch (a) { }
});
var auth2;
function loadGoogleLoginService(a) {
    try {
        var b = $("#googlePlusKey").val();
        "undefined" !== typeof gapi && void 0 != gapi && null != gapi && gapi.load("auth2", function () {
            auth2 = gapi.auth2.init({
                client_id: b,
                cookiepolicy: "single_host_origin"
            });
            attachSignin(document.getElementById("googlePlusLogin"), a)
        });
        "undefined" === typeof gapi && ($("#social-login-desktop #googlePlusLogin").parent().addClass("hide"),
            $("#social-login-mobileapp #googlePlusLoginMobileApp").parent().addClass("hide"))
    } catch (c) { }
}
var socialLoginGoogle = function (a) {
    if ("undefined" === typeof gapi) {
        googleInitLogin();
        var b = setInterval(function () {
            "undefined" !== typeof gapi && void 0 != gapi && null != gapi && (clearInterval(b),
                loadGoogleLoginService(a))
        }, 500)
    } else
        attachSignin(document.getElementById("googlePlusLogin"), a)
};
function attachSignin(a, b) {
    try {
        $("#j_submitType").val("GOOGLE");
        $("#j_socilMediaValue").val("GOOGLE");
        void 0 != $("#signOnLanguage").val() && $("#signOnLanguage").val();
        var c = $("#j-login-form");
        auth2.attachClickHandler(a, {}, function (d) {
            var e = d.getBasicProfile();
            $("#j_socialMediaEmail").val(e.getEmail());
            $("#j_socilMediaUniqId").val(e.getId());
            $("#j_socialMediaAccessToken").val(d.getAuthResponse().id_token);
            var h = $("#global-spinner-container.spinner-overlay");
            showSpinnerMobileApp(h, "spinner-full-page");
            "undefined" === typeof window.qrServiceRef && (d = $("#login-clientlib-js script").attr("src"),
                d = d.replace("login-clientlibs", "angular"),
                console.log("scriptLoaderPath " + d),
                d = '\x3cscript src\x3d"' + d + '" type\x3d"text/javascript"\x3e\x3c/script\x3e',
                document.createElement("script"),
                $("body").append(d));
            0 == $("#j-login-form").find("#activity-login-code").length ? $("#j-login-form").append('\x3cinput type\x3d"hidden" id\x3d"activity-login-code" name\x3d"activity-login-code" value\x3d"' + mainActivityCode + '"/\x3e') : $("#j-login-form").find("#activity-login-code").val(mainActivityCode);
            d = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || -1 != navigator.userAgent.indexOf("Mobile");
            isMobileApp() ? $("#j_platform").val(mobilePlatform) : d ? $("#j_platform").val("MWEB") : $("#j_platform").val("WEB");
            0 == $("#j-login-form").find('[name\x3d"j_srcURL"]').length ? $("#j-login-form").append('\x3cinput type\x3d"hidden" name\x3d"j_srcURL" id\x3d"j_srcURL" value\x3d"' + window.location.href + '"/\x3e') : $("#j-login-form").find('[name\x3d"j_srcURL"]').val(window.location.href);
            "true" === $("#enable-accertify").val() && window.hasOwnProperty("_bcn") && (getGDI("login"),
                window._bcn.flush(),
                0 == $("#j-login-form").find('[name\x3d"tid"]').length ? $("#j-login-form").append('\x3cinput type\x3d"hidden" id\x3d"tid" name\x3d"tid" value\x3d"' + window._bcn.dvc.getTID() + '"/\x3e') : $("#j-login-form").find('[name\x3d"tid"]').val(window._bcn.dvc.getTID()),
                0 == $("#j-login-form").find('[name\x3d"ubaID"]').length ? $("#j-login-form").append('\x3cinput type\x3d"hidden" id\x3d"ubaID" name\x3d"ubaID" value\x3d"' + window._bcn.getToken() + '"/\x3e') : $("#j-login-form").find('[name\x3d"ubaID"]').val(window._bcn.getToken()),
                0 == $("#j-login-form").find('[name\x3d"ubaEvents"]').length ? $("#j-login-form").append('\x3cinput type\x3d"hidden" id\x3d"ubaEvents" name\x3d"ubaEvents" value\x3d"' + window._bcn.getEvents() + '"/\x3e') : $("#j-login-form").find('[name\x3d"ubaEvents"]').val(window._bcn.getEvents()),
                0 == $("#j-login-form").find('[name\x3d"pageID"]').length ? $("#j-login-form").append('\x3cinput type\x3d"hidden" id\x3d"pageID" name\x3d"pageID" value\x3d"' + window._bcn.getPageId() + '"/\x3e') : $("#j-login-form").find('[name\x3d"pageID"]').val(window._bcn.getPageId()),
                0 == $("#j-login-form").find('[name\x3d"sessionID"]').length ? $("#j-login-form").append('\x3cinput type\x3d"hidden" id\x3d"sessionID" name\x3d"sessionID" value\x3d"' + window._bcn.getSessionId() + '"/\x3e') : $("#j-login-form").find('[name\x3d"sessionID"]').val(window._bcn.getSessionId()),
                0 == $("#j-login-form").find('[name\x3d"ubaSessionID"]').length ? $("#j-login-form").append('\x3cinput type\x3d"hidden" id\x3d"ubaSessionID" name\x3d"ubaSessionID" value\x3d"' + window._bcn.getUbaSessionId() + '"/\x3e') : $("#j-login-form").find('[name\x3d"ubaSessionID"]').val(window._bcn.getUbaSessionId()));
            $.ajax({
                url: "/qr/j_security_check_qr_portal",
                type: "POST",
                data: c.serialize(),
                cache: !1,
                success: function (m, u, k, f) {
                    $("#j-login-form").addClass("hide");
                    $(".qbiz-login-section").addClass("visibilityHidden");
                    $(".is-logged").css("display", "block");
                    $(".create-profile-popup").hide();
                    $("#social-login-block").addClass("hide");
                    createSimpleCookie("loginSuccess", "google plus");
                    m = document.referrer;
                    "" != m && void 0 != m && (m = document.referrer.replace(".html", "").split("/"),
                        m = m[m.length - 1]);
                    addComponentPageEvent("login", "loggedin", "google", m);
                    setTimeout(function () {
                        hideSpinnerMobileApp(h, "spinner-full-page")
                    }, 500);
                    m = getUserBasicInfoField("programCode");
                    "QRPC" == m ? verifyOTP() : "PORTAL" == m ? redirectUser() : location.reload()
                },
                error: function (m, u, k, f) {
                    if (null != m.getResponseHeader("j_reason")) {
                        m = m.getResponseHeader("j_reason");
                        var n = JSON.parse(m);
                        hideLoginMessages();
                        if (void 0 != n[0] && void 0 != n[0].errorName && "FFP_AUTH_USR_EMAIL_NOT_VRFD" === n[0].errorName.trim())
                            return m = $("#email-verification-alert-message").val(),
                                u = $("#resend-verification-link-label").val(),
                                m = m.replace("${0}", '\x3ca href\x3d"javascript:void(0)" id\x3d"resend-verification-link"\x3e\x3cu\x3e' + u + "\x3c/u\x3e\x3c/a\x3e"),
                                $("#login-alert-message .alert-message").html(m),
                                $("#login-alert-message").removeClass("hidden"),
                                void 0 !== digitalData && void 0 !== digitalData.page && void 0 !== digitalData.page.pageInfo && void 0 !== digitalData.page.pageInfo.pageType && (digitalData.page.pageInfo.pageType = "google-login-without-email-verification"),
                                errorClick(window.location.href, "login-google", "privilegeclub-login", n[0].errorName),
                                setTimeout(function () {
                                    hideSpinnerMobileApp(h, "spinner-full-page")
                                }, 500),
                                !1;
                        window.qrServiceRef.zone.run(function () {
                            var r = setInterval(function () {
                                window.qrServiceRef.isGlobalI18nLoaded() && (clearInterval(r),
                                    window.qrServiceRef.translateErrorObject(n, "/content/Qatar/i18n/login.errorMessages.json").then(function (q) {
                                        var l = q[0].errorDescription;
                                        -1 != l.indexOf("\x3cspan class\x3d'errorCode'\x3e(") && -1 != l.indexOf(")\x3c/span\x3e") && (l = l.replace("\x3cspan class\x3d'errorCode'\x3e(", " "),
                                            l = l.replace(")\x3c/span\x3e", ""));
                                        void 0 !== s && "" !== s && null !== s && (s.events = "event110",
                                            s.eVar92 = l);
                                        $("#loginErrorBlock #errorId").html(q[0].errorDescription);
                                        $("#loginErrorBlock .input-base-msg-box").show().focus();
                                        void 0 !== digitalData && void 0 !== digitalData.page && void 0 !== digitalData.page.pageInfo && void 0 !== digitalData.page.pageInfo.pageType && (digitalData.page.pageInfo.pageType = "google-login-error");
                                        errorClick(window.location.href, "login-google", "privilegeclub-login", q[0].errorName);
                                        "true" == $("#sc_variable").val() && s.t()
                                    }))
                            }, 500)
                        })
                    } else
                        $("#loginErrorBlock .input-base-msg-box").hide();
                    setTimeout(function () {
                        hideSpinnerMobileApp(h, "spinner-full-page")
                    }, 500)
                }
            })
        }, function (d) { })
    } catch (d) { }
    b && $("#googlePlusLogin")[0].click()
}
function socialLoginTwitter(a, b) {
    try {
        var c = $("#signOnCurrentPagePath").val();
        $.ajax({
            url: "/qr/twitterlogin?currentPagePath\x3d" + c,
            type: "GET",
            dataType: "json",
            async: !1,
            cache: !1,
            success: function (d, e, h, m) { }
        }).done(function (d) {
            if ("undefined" != typeof d && d) {
                var e = d.redirecturl;
                d = d.oauthSecretTocken;
                void 0 != e && void 0 != d && twitterCallback(e + "\x26stocken\x3d" + d, b)
            }
        }).fail(function () { })
    } catch (d) { }
}
function twitterCallback(a, b) {
    try {
        var c = window.open(a, "_blank", "width\x3d600, height\x3d400")
            , d = setInterval(function () {
                null != c && c.closed && (clearInterval(d),
                    checkChild(c, b))
            }, 500)
    } catch (e) { }
}
function checkChild(a, b) {
    if (null != a && a.closed) {
        a = $("#twitterid").val();
        var c = $("#twitterscreenname").val();
        "dashboard" == b ? manageSocialMedia("LINK", "TWITTER", $("#twitterid").val(), "", $("#twitterAccessToken").val()) : "dashboard-delink" == b ? manageSocialMedia("DELINK", "TWITTER", $("#twitterid").val(), "", $("#twitterAccessToken").val()) : "undefined" != typeof a && a && "undefined" != typeof c && c && ($("#j_socilMediaUniqId").val($("#twitterid").val()),
            $("#j_submitType").val("TWITTER"),
            $("#j_socialMediaAccessToken").val($("#twitterAccessToken").val()),
            $("#j_socialMediaAccessTokenSecret").val($("#twitterAccessTokenSecret").val()),
            twitterLogin());
        clearInterval(timer)
    }
}
function twitterLogin() {
    try {
        var a = $("#global-spinner-container.spinner-overlay");
        showSpinnerMobileApp(a, "spinner-full-page");
        if ("undefined" === typeof window.qrServiceRef) {
            var b = $("#login-clientlib-js script").attr("src");
            b = b.replace("login-clientlibs", "angular");
            console.log("scriptLoaderPath " + b);
            b = '\x3cscript src\x3d"' + b + '" type\x3d"text/javascript"\x3e\x3c/script\x3e';
            document.createElement("script");
            $("body").append(b)
        }
        0 == $("#j-login-form").find("#activity-login-code").length ? $("#j-login-form").append('\x3cinput type\x3d"hidden" id\x3d"activity-login-code" name\x3d"activity-login-code" value\x3d"' + mainActivityCode + '"/\x3e') : $("#j-login-form").find("#activity-login-code").val(mainActivityCode);
        var c = $("#j-login-form");
        void 0 != $("#signOnLanguage").val() && $("#signOnLanguage").val();
        $.ajax({
            url: "/qr/j_security_check_qr_portal",
            type: "POST",
            data: c.serialize(),
            cache: !1,
            success: function (d, e, h, m) {
                $("#j-login-form").addClass("hide");
                $(".qbiz-login-section").addClass("visibilityHidden");
                $(".is-logged").css("display", "block");
                $(".create-profile-popup").hide();
                $("#social-login-block").addClass("hide");
                createSimpleCookie("loginSuccess", "twitter");
                d = document.referrer;
                "" != d && void 0 != d && (d = document.referrer.replace(".html", "").split("/"),
                    d = d[d.length - 1]);
                addComponentPageEvent("login", "loggedin", "twitter", d);
                d = getUserBasicInfoField("programCode");
                setTimeout(function () {
                    hideSpinnerMobileApp(a, "spinner-full-page")
                }, 500);
                "QRPC" == d ? verifyOTP() : "PORTAL" == d ? redirectUser() : location.reload()
            },
            error: function (d, e, h, m) {
                if (null != d.getResponseHeader("j_reason")) {
                    d = d.getResponseHeader("j_reason");
                    var u = JSON.parse(d);
                    window.qrServiceRef.zone.run(function () {
                        var k = setInterval(function () {
                            window.qrServiceRef.isGlobalI18nLoaded() && (clearInterval(k),
                                window.qrServiceRef.translateErrorObject(u, "/content/Qatar/i18n/login.errorMessages.json").then(function (f) {
                                    var n = f[0].errorDescription;
                                    -1 != n.indexOf("\x3cspan class\x3d'errorCode'\x3e(") && -1 != n.indexOf(")\x3c/span\x3e") && (n = n.replace("\x3cspan class\x3d'errorCode'\x3e(", " "),
                                        n = n.replace(")\x3c/span\x3e", ""));
                                    void 0 !== s && "" !== s && null !== s && (s.events = "event110",
                                        s.eVar92 = n);
                                    $("#loginErrorBlock #errorId").html(f[0].errorDescription);
                                    $("#loginErrorBlock .input-base-msg-box").show().focus();
                                    void 0 !== digitalData && void 0 !== digitalData.page && void 0 !== digitalData.page.pageInfo && void 0 !== digitalData.page.pageInfo.pageType && (digitalData.page.pageInfo.pageType = "twitter-login-error");
                                    errorClick(window.location.href, "login-twitter", "privilegeclub-login", f[0].errorName);
                                    "true" == $("#sc_variable").val() && s.t()
                                }))
                        }, 500)
                    })
                } else
                    $("#loginErrorBlock .input-base-msg-box").hide();
                setTimeout(function () {
                    hideSpinnerMobileApp(a, "spinner-full-page")
                }, 500)
            }
        })
    } catch (d) { }
}
var loginRequest, loginPage = "", eventName = "login", loginSource, portalDashboardURL, privilegeClubDashboardURL, eventLocation = "login-start-privilegeclub", authParameterName = "", basicBasicInfoVal = "", loginloginReq_headers = {}, loginReq_headers = {}, isRedirected = !1, availableData = "", studentDashboardURL, isFPFlow = !1, isSMELoginPage = !1, extAppRed = !1, ecbu = "", QRHFIFABKG = "QRHFIFABKG", FIFAMCRSTE = "FIFAMCRSTE", isFifaFlow = !1, loginUserNameType = "", loginUserType = "privilegeclub-login", mainActivityCode = "", mainFifaRedirectionUrl = "", mainFifaSource = "", crc = "", partnerCode = "", partnerState = "", partnerClientId = "", partnerRedirectUrl = "", isPartnerFlow = !1, vibeCode = "VIBE", isRevenueBooking = !1, sourceCode = "", ANCILLARIES = "ANCILLARIES", pageLocale = $("#page-locale").val(), custProfId = "", isGDIAvailable = !1, currentPageCookieNotify = $("#currentPageCookieNotify").val(), cookie_visited = void 0 != getCookieValue("cookie_visited") ? getCookieValue("cookie_visited") : !1, isOutageEnabled = !1;
setTimeout(function () {
    void 0 == currentPageCookieNotify || "true" != currentPageCookieNotify || void 0 == cookie_visited || cookie_visited || ($(".cookie-section").show(),
        $("#cookieContainer").removeClass("hide"),
        $("#cookieContainer").addClass("show"))
}, 2E3);
-1 != location.search.indexOf("activityCode\x3dSME") && (eventLocation = "login-start-beyondbusiness",
    loginUserType = "beyondbusiness-login");
var verifyCaptchaLogin = function (a) {
    availableData = a;
    $("#loginButtonInvoke").css({
        "pointer-events": "auto",
        opacity: "1"
    })
}
    , cryptoAlgorithmSelected = "AES";
function fbInitLogin() {
    var a = document.getElementsByTagName("script")[0];
    if (!document.getElementById("facebook-jssdk")) {
        var b = document.createElement("script");
        b.id = "facebook-jssdk";
        b.src = "https://connect.facebook.net/en_US/sdk.js";
        a.parentNode.insertBefore(b, a)
    }
}
function googleInitLogin() {
    var a = document.createElement("script");
    a.type = "text/javascript";
    a.src = "https://apis.google.com/js/api:client.js";
    a.async = !0;
    a.dataset.cfasync = !1;
    document.body.appendChild(a)
}
$(document).ready(function () {
    var a = location.search.indexOf("?");
    if (-1 != a) {
        var b = location.search.split("?")[1];
        b = b.split("\x26");
        $.each(b, function (k, f) {
            -1 != f.indexOf("crc\x3d") && (crc = f.split("\x3d")[1])
        })
    }
    "" !== crc && ($("#j-login-form").append('\x3cinput type\x3d"hidden" value\x3d"' + crc + '" name\x3d"crc" id\x3d"crc"/\x3e'),
        $(".create-profile-popup").addClass("hide"),
        $("#reset-account-link").addClass("hidden"),
        $(".login-drop-column:first-child").css("border-right", " 0"),
        $(".smeContainer").addClass("hide"));
    -1 != a && (b = location.search.split("?")[1],
        b = b.split("\x26"),
        $.each(b, function (k, f) {
            -1 != f.indexOf("redirectUrl\x3d") && (mainFifaRedirectionUrl = f.split("\x3d")[1],
                mainFifaRedirectionUrl = decodeURIComponent(mainFifaRedirectionUrl));
            -1 != f.indexOf("source\x3d") && (mainFifaSource = f.split("\x3d")[1],
                mainFifaSource = decodeURIComponent(mainFifaSource))
        }));
    if (mainFifaSource == QRHFIFABKG || mainFifaSource == FIFAMCRSTE)
        $(".qbiz-login-section").remove(),
            $(".student-joinnow-blk").removeClass("col-sm-6").addClass("col-sm-12"),
            a = $(".student-joinnow-blk a").attr("href"),
            b = "enrolSourceType\x3d" + mainFifaSource + "\x26redirectUrl\x3d" + mainFifaRedirectionUrl,
            a = -1 == a.indexOf("?") ? a + "?" + b : a + "\x26" + b,
            $(".student-joinnow-blk a").attr("href", a);
    -1 != location.search.indexOf("activityCode\x3dra") && ($("#social-login-block, form#j-login-form, .qbiz-login-section").addClass("hidden"),
        $("div#forgot-password").removeClass("back"));
    if (-1 != location.search.indexOf("evt\x3d")) {
        a = location.search.indexOf("?");
        var c = ""
            , d = "";
        b = location.search.split("?")[1];
        b = b.split("\x26");
        $.each(b, function (k, f) {
            -1 != f.indexOf("evt\x3d") && (c = f.split("\x3d")[1]);
            -1 != f.indexOf("source\x3d") && (d = f.split("\x3d")[1],
                d = decodeURIComponent(d))
        });
        "" !== c && (a = $("#verifyEmailVerificationTokenServiceURL").val(),
            $.ajax({
                url: a,
                type: "POST",
                cache: !1,
                contentType: "application/json; charset\x3dutf-8",
                processData: !1,
                data: JSON.stringify({
                    emailVerificatinToken: c
                }),
                success: function (k) {
                    var f = k.errorObject;
                    void 0 === f ? k.valid ? ($("#login-success-message span.success-message").text($("#email-verification-success-message").val()),
                        $("#login-success-message").removeClass("hidden").focus(),
                        "RESET" === d && "undefined" != typeof digitalData && "undefined" != typeof digitalData.page && "undefined" != digitalData.page.pageComponent && "undefined" != digitalData.page.pageComponent.componentAvailable && (digitalData.page.pageComponent.componentAvailable = "reset email verified|")) : ($("#loginErrorBlock #errorId").html(Granite.I18n.get(f[0].errorName)),
                            $("#loginErrorBlock .input-base-msg-box").show().focus()) : ($("#loginErrorBlock #errorId").html(Granite.I18n.get(f[0].errorName)),
                                $("#loginErrorBlock .input-base-msg-box").show().focus(),
                                void 0 !== digitalData && void 0 !== digitalData.page && void 0 !== digitalData.page.pageInfo && void 0 !== digitalData.page.pageInfo.pageType && (digitalData.page.pageInfo.pageType = "email-verification-error"),
                                errorClick(window.location.href, "email-verification", loginUserType, f[0].errorName))
                }
            }))
    }
    $(document).on("click", "#login-alert-message a", function (k) {
        hideLoginMessages();
        k = $("#sendVerificationEmailServiceURL").val();
        var f = $("#f1003").val();
        "" === f && (f = $("#j_socialMediaEmail").val(),
            "" === f && (f = $("#f1002").val()));
        $.ajax({
            url: k,
            type: "POST",
            cache: !1,
            contentType: "application/json; charset\x3dutf-8",
            processData: !1,
            data: JSON.stringify({
                userName: f
            }),
            success: function (n) {
                var r = n.errorObject;
                void 0 === r ? n.isVerificationEmailSent ? ($("#login-alert-message").addClass("hidden"),
                    $("#login-success-message span.success-message").text($("#resend-verification-link-success-message").val()),
                    $("#login-success-message").removeClass("hidden").focus()) : ($("#login-alert-message").addClass("hidden"),
                        $("#loginErrorBlock #errorId").html(Granite.I18n.get(r[0].errorName)),
                        $("#loginErrorBlock .input-base-msg-box").show().focus()) : ($("#login-alert-message").addClass("hidden"),
                            $("#loginErrorBlock #errorId").html(Granite.I18n.get(r[0].errorName)),
                            $("#loginErrorBlock .input-base-msg-box").show().focus(),
                            void 0 !== digitalData && void 0 !== digitalData.page && void 0 !== digitalData.page.pageInfo && void 0 !== digitalData.page.pageInfo.pageType && (digitalData.page.pageInfo.pageType = "resend-verification-email-error"),
                            errorClick(window.location.href, "resend-verification-email", loginUserType, r[0].errorName))
            }
        })
    });
    $("#loginCaptchaCode").on("validatecaptcha", function (k, f) {
        f ? (availableData = "cadkjjklsadjlk" + (new Date).getTime(),
            $("#loginButtonInvoke").css({
                "pointer-events": "auto",
                opacity: "1"
            })) : (availableData = "",
                $("#loginButtonInvoke").css({
                    "pointer-events": "none",
                    opacity: "0.4"
                }))
    });
    setTimeout(function () {
        -1 != location.search.indexOf("activityCode\x3dra") && $("#forgot-password-link").click()
    }, 200);
    "undefined" === typeof grecaptcha && ($("#loginCaptcha").hide(),
        $("#loginButtonInvoke").css({
            "pointer-events": "auto",
            opacity: "1"
        }));
    void 0 != $("#enableAlwaysCaptcha").val() && "" != $("#enableAlwaysCaptcha").val() && null != $("#enableAlwaysCaptcha").val() && "true" === $("#enableAlwaysCaptcha").val() && createCookie("SAC_ERROR", "4");
    a = getFFPCookieValue("SAC_ERROR");
    if (null !== a && void 0 !== a && 2 <= parseInt(a)) {
        if ("GOOGLE" === $("#FFP_CAPTCHA_LOGIN").val())
            $("#loginCaptcha").show(),
                $("#loginCaptcha").parent().removeClass("hide"),
                "undefined" === typeof grecaptcha ? $("body").append('\x3cscript src\x3d"https://www.recaptcha.net/recaptcha/api.js?onload\x3dreCaptchaLoad\x26render\x3dexplicit\x26hl\x3d' + pageLocale + '"\x3e\x3c/script\x3e') : grecaptcha.reset();
        else if ("BOT" === $("#FFP_CAPTCHA_LOGIN").val())
            if ($("#login-botdetect-captcha").parent().removeClass("hide"),
                "undefined" !== typeof loginBotCaptcha)
                try {
                    loginBotCaptcha.reloadImage()
                } catch (k) { }
            else if ("undefined" === typeof loginBotCaptcha)
                var e = setInterval(function () {
                    $.isFunction($.fn.captcha) && (clearInterval(e),
                        loginCaptchaBot = $("#login-botdetect-captcha").captcha({
                            captchaEndpoint: "/qr/bot/botqrwebcaptcha"
                        }))
                }, 200);
        -1 != location.search.indexOf("activityCode\x3dSME") && $("#social-login-block .no-gutter-left").remove();
        if ("undefined" !== typeof grecaptcha && !isMobileApp()) {
            try {
                grecaptcha.reset()
            } catch (k) { }
            $("#loginButtonInvoke").css({
                "pointer-events": "none",
                opacity: "0.4"
            })
        } else if ("undefined" !== typeof loginBotCaptcha && !isMobileApp())
            try {
                loginBotCaptcha.reloadImage()
            } catch (k) { }
        $("#loginButtonInvoke").css({
            "pointer-events": "none",
            opacity: "0.4"
        })
    }
    loginRequest = getFFPCookieValue("loginRequest");
    "" === document.referrer && "" !== loginRequest && void 0 !== loginRequest && null !== loginRequest && void 0 != JSON.parse(getFFPCookieValue("loginRequest"))[0] && void 0 !== JSON.parse(loginRequest)[0].callBackUrl && -1 === JSON.parse(loginRequest)[0].callBackUrl.indexOf(".qatarairways.com") && (document.cookie = "loginRequest\x3d; path\x3d/; domain\x3d.qatarairways.com; expires\x3dThu, 01 Jan 1970 00:00:01 GMT",
        loginRequest = null);
    -1 !== location.search.indexOf("activityCode\x3dQMILES_RETRIEVE_BKG") && (mainActivityCode = "QMILES_RETRIEVE_BKG",
        b = location.search.split("?")[1],
        b = b.split("\x26"),
        $.each(b, function (k, f) {
            -1 !== f.indexOf("ffpNo\x3d") && ($("#f1003").val(f.split("\x3d")[1]),
                $("#f1003").parent().addClass("filled"))
        }));
    if (-1 != location.search.indexOf("activityCode\x3dSME"))
        isSMELoginPage = !0,
            $("#reset-account-link").addClass("hidden"),
            $("#forgot-email-link").addClass("hidden"),
            isMobileApp() && $(".login-drop-column.j-login-action.flip-container").css("height", "350px"),
            $("#social-login-block .no-gutter-left").remove(),
            $("#f1003").parent().find(".user-name-label").remove(),
            $("#f1003").parent().find(".user-name-placeholder").remove(),
            $("#f1003").parent().find(".sme-user-name-placeholder").removeClass("hidden"),
            $("#f1002").parent().find(".user-fpl").remove(),
            $("#f1002").parent().find(".user-fp-placeholder").remove(),
            $("#f1002").parent().find(".sme-user-fp-placeholder").removeClass("hidden"),
            $(".qbiz-login-section").each(function () {
                $(this).remove()
            }),
            $(".sme-joinnow-info-msg").removeClass("hide"),
            $(".smeContainer").remove(),
            null != loginRequest && void 0 != loginRequest && "" != loginRequest && 0 < $("#j-login-form").length && (a = JSON.parse(loginRequest),
                "SME_MB_LOGIN" == a[0].activityCode && (mainActivityCode = "SME_MB_LOGIN",
                    $("#language-selector").find("#parentCheckinManage").closest(".alert-notice").remove(),
                    $(".login-drop-column.create-profile-popup,#div_guestuserlogin").remove(),
                    $("#footer").remove(),
                    $("#footer-nsp").removeClass("hide"),
                    $(".qbiz-login-section").addClass("hide"),
                    $(".j-login-action").parent().css({
                        display: "flex",
                        "justify-content": "center"
                    }),
                    $(".j-login-action").css({
                        "border-right": "none"
                    })));
    else if ($("#f1003").parent().find(".sme-user-name-label").remove(),
        $("#f1003").parent().find(".sme-user-name-placeholder").remove(),
        $("#f1002").parent().find(".user-fpl").remove(),
        $("#f1002").parent().find(".sme-user-fp-placeholder").remove(),
        null != loginRequest && void 0 != loginRequest && "" != loginRequest && 0 < $("#j-login-form").length)
        (a = JSON.parse(loginRequest),
            "RDM_BKG" != a[0].activityCode && "EXB_LOGIN" != a[0].activityCode || "ENROLL_LOGIN" === a[0].activityCode) ? "ENROLL_LOGIN" !== a[0].activityCode && (mainActivityCode = a[0].activityCode,
                $("#language-selector").find("#parentCheckinManage").closest(".alert-notice").remove(),
                $(".login-drop-column.create-profile-popup").remove(),
                $("#footer").remove(),
                $("#footer-nsp").removeClass("hide"),
                $(".qbiz-login-section").addClass("hide"),
                "QMILES_RETRIEVE_BKG" === a[0].activityCode || "RETRIEVE_BKG" === a[0].activityCode) && (console.log("Activity code is QMILES_RETRIEVE_BKG"),
                    $("#f1003").val(a[0].ffpNo),
                    $("#f1003").parent().addClass("filled")) : (mainActivityCode = a[0].activityCode,
                        $("#language-selector").find("#parentCheckinManage").closest(".alert-notice").remove(),
                        $(".login-drop-column.create-profile-popup,#div_guestuserlogin").remove(),
                        $("#footer").remove(),
                        $("#footer-nsp").removeClass("hide"),
                        $(".qbiz-login-section").addClass("hide"),
                        $(".j-login-action").parent().css({
                            display: "flex",
                            "justify-content": "center"
                        }),
                        $(".j-login-action").css({
                            "border-right": "none"
                        }));
    $(document).on("click", "#loginButtonInvoke", function (k) {
        invoke();
        "undefined" !== typeof window.appInsights && window.appInsights.trackEvent({
            name: "LOGIN_INITIATED"
        });
        addEvetnInfo(eventLocation, eventName, "clicked")
    });
    $("#loginshowpassword").on("click", function (k) {
        $(this).prop("checked") ? $("#f1001").attr("type", "text") : $("#f1001").attr("type", "password")
    });
    $(document).on("click", "#loginJoinButton", function (k) {
        if (mainFifaSource == FIFAMCRSTE || mainFifaSource == QRHFIFABKG) {
            k = $("#loginJoinButton").attr("data-joinnow-page");
            var f = "enrolSourceType\x3d" + mainFifaSource + "\x26redirectUrl\x3d" + mainFifaRedirectionUrl;
            k = -1 == k.indexOf("?") ? k + "?" + f : k + "\x26" + f;
            $("#loginJoinButton").attr("data-joinnow-page", k)
        }
        linkEventClickAction(window.location.href, "redirect-to-qrpc-joinnow", "privilegeclub-login");
        window.location = $("#loginJoinButton").attr("data-joinnow-page");
        k = document.referrer;
        if ("" === k || void 0 === k)
            k = window.location.href;
        "" != k && void 0 != k && (f = k.indexOf("?"),
            -1 !== f && (k = k.substr(0, f)),
            k = k.replace(".html", "").split("/"),
            k = k[k.length - 1]);
        addComponentPageEvent("signup", "signup start", "", k)
    });
    $(".student-logo a.btn").on("click", function () {
        linkEventClickAction(window.location.href, "redirect-to-qrsp-joinnow", "privilegeclub-login")
    });
    $("#reset-account-link").on("click", function () {
        linkEventClickAction(window.location.href, "redirect-to-reset-email", "privilegeclub-login")
    });
    $(document).on("click", ".back-to-login", function () {
        buttonClickAction(window.location.href, "back-to-login", loginUserType);
        $("#social-login-block").css({
            visibility: "visible"
        });
        setTimeout(function () {
            $("#social-login-block").find(".back-to-login").css({
                visibility: "hidden"
            });
            $("#social-login-block").find("div").eq(0).css({
                visibility: "visible"
            })
        }, 600);
        void 0 != $("#enableAlwaysCaptcha").val() && "" != $("#enableAlwaysCaptcha").val() && null != $("#enableAlwaysCaptcha").val() && "true" === $("#enableAlwaysCaptcha").val() && createCookie("SAC_ERROR", "4");
        var k = getFFPCookieValue("SAC_ERROR");
        if (!isMobileApp() && null !== k && void 0 !== k && 2 <= parseInt(k)) {
            if ("GOOGLE" === $("#FFP_CAPTCHA_LOGIN").val())
                $("#loginCaptcha").show(),
                    "undefined" === typeof grecaptcha ? $("body").append('\x3cscript src\x3d"https://www.recaptcha.net/recaptcha/api.js?onload\x3dreCaptchaLoad\x26render\x3dexplicit\x26hl\x3d' + pageLocale + '"\x3e\x3c/script\x3e') : grecaptcha.reset();
            else if ("BOT" === $("#FFP_CAPTCHA_LOGIN").val())
                if ($("#login-botdetect-captcha").parent().removeClass("hide"),
                    "undefined" !== typeof loginBotCaptcha)
                    try {
                        loginBotCaptcha.reloadImage()
                    } catch (f) { }
                else
                    "undefined" === typeof loginBotCaptcha && "BOT" === $("#FFP_CAPTCHA_LOGIN").val() && (loginCaptchaBot = $("#login-botdetect-captcha").captcha({
                        captchaEndpoint: "/qr/bot/botqrwebcaptcha"
                    }));
            "GOOGLE" === $("#FFP_CAPTCHA_FORGOT").val() ? $("#forgotCaptcha").hide() : "BOT" === $("#FFP_CAPTCHA_FORGOT").val() && $("#forgot-botdetect-captcha").parent().hide();
            $("#loginButtonInvoke").css({
                "pointer-events": "none",
                opacity: "0.4"
            })
        }
        $(".qbiz-login-section").show()
    });
    $(document).on("click", "#forgot-password-link", function () {
        $("#social-login-block").css({
            visibility: "hidden"
        });
        var k = "";
        if (-1 != location.search.indexOf("?")) {
            var f = location.search.split("?")[1].split("\x26");
            $.each(f, function (n, r) {
                -1 != r.indexOf("activityCode\x3d") && (k = r.split("\x3d")[1])
            })
        }
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && "SME" == k && $(".create-profile-popup").css({
            "margin-top": "70px"
        });
        isMobileApp() || ("GOOGLE" === $("#FFP_CAPTCHA_FORGOT").val() ? ($("#forgotCaptcha").show(),
            "undefined" === typeof grecaptcha ? $("body").append('\x3cscript src\x3d"https://www.recaptcha.net/recaptcha/api.js?onload\x3dreCaptchaLoad\x26render\x3dexplicit\x26hl\x3d' + pageLocale + '"\x3e\x3c/script\x3e') : grecaptcha.reset()) : "BOT" === $("#FFP_CAPTCHA_FORGOT").val() && ("undefined" != typeof forgotPasswordCaptcha ? forgotPasswordCaptcha.reloadImage() : $("#forgot-botdetect-captcha").captcha({
                captchaEndpoint: "/qr/bot/botcaptcha"
            }),
                $("#forgot-botdetect-captcha").parent().show()));
        setTimeout(function () {
            $("#social-login-block").find("div").eq(0).css({
                visibility: "hidden"
            });
            $("#social-login-block").find(".back-to-login").css({
                visibility: "visible"
            })
        }, 600);
        "GOOGLE" === $("#FFP_CAPTCHA_LOGIN").val() ? $("#loginCaptcha").hide() : "BOT" === $("#FFP_CAPTCHA_LOGIN").val() && $("#login-botdetect-captcha").parent().addClass("hide");
        $(".qbiz-login-section").hide()
    });
    $("#remember").click(function () {
        try {
            var k = $("#remember").is(":checked");
            $localstorage = void 0;
            if (k) {
                var f = $("#f1003").val();
                var n = window.localStorage;
                n.setItem("remembercheck", f)
            } else
                localStorage.removeItem("remembercheck")
        } catch (r) { }
    });
    var h = -1 < window.location.href.indexOf("/corporate-travel");
    a = "/qr/qrweb/banneroutage.json";
    h && (a = "/content/global/en/corporate-travel/qr-banner-config-page/jcr:content/banner-outage.json?bannerID");
    $.ajax({
        url: a,
        type: "GET",
        cache: !1,
        success: function (k) {
            isOutageEnabled = !1;
            if (h)
                h && k.isOutageRequired && outageBanner(k);
            else {
                var f = "object" == typeof k ? k : JSON.parse(k);
                if (f.isOutageRequired) {
                    k = f.outageFromdate;
                    k = k.substring(0, k.indexOf("."));
                    var n = f.outageTodate;
                    n = n.substring(0, n.indexOf("."));
                    k = new Date(k + ".000Z");
                    n = new Date(n + ".000Z");
                    k = k.getTime();
                    n = n.getTime();
                    var r = (new Date).getTime();
                    r > k && r < n && (isOutageEnabled = !0)
                }
            }
            if (isOutageEnabled)
                f = f.outageLinkPC,
                    f = void 0 != f ? f + ".html" : "/en/post-login-outage.html",
                    $("#OutageBannerValue").val("true"),
                    k = window.location.href,
                    k = k.split("/"),
                    k = k[k.length - 1],
                    "true" == $("#isPublishInstance").val() && 0 < $("#loginBannerOutageContainer").length && -1 == k.indexOf("post-login-outage") && !h ? window.location.href = f : -1 == k.indexOf("post-login-outage") || h || $("#header-signon-main #login-container").remove(),
                    $("#OutageBannerValue").val("true"),
                    h && ($("#loginMainComponent").addClass("hide"),
                        $("#loginBannerOutageContainer").removeClass("hide"));
            else {
                $("#loginMainComponent").removeClass("hide");
                $("#loginBannerOutageContainer").addClass("hide");
                authParameterName = $("#authparamName").val();
                basicBasicInfoVal = $("#basicBasicInfo").val();
                loginReq_headers = {
                    "Content-Type": "application/json"
                };
                "" != basicBasicInfoVal && "" != basicBasicInfoVal && (loginReq_headers.Authorization = "Basic " + $("#basicBasicInfo").val());
                loginReq_headers["" + authParameterName] = "Bearer " + getFFPCookieValue("QRTOKEN");
                try {
                    loginPage = $("#loginPage").val(),
                        void 0 !== $("#profile-otp-modal").val() && $("#otp-country-code, #otp-telephone-number, #otp-email").attr("disabled", "disabled"),
                        $("#remember").is(":checked") && $("#f1003").parent().find(".input-base-placeholder").addClass("rememberUser"),
                        getFFPCookieValue("QRTOKEN"),
                        applyNSPChanges(),
                        $("#loginErrorBlock,#loginErrorBlock .input-base-msg-box").removeAttr("hidden").focus()
                } catch (q) { }
            }
        }
    });
    a = location.search.indexOf("?");
    if (-1 != a) {
        var m = ""
            , u = "";
        a = $("#j_currentPage").val();
        b = location.search.split("?")[1];
        b = b.split("\x26");
        $.each(b, function (k, f) {
            -1 != f.indexOf("resource\x3d") && (m = f.split("\x3d")[1]);
            -1 != f.indexOf("activityCode\x3d") && (u = f.split("\x3d")[1]);
            -1 != f.indexOf("state\x3d") && (partnerState = f.split("\x3d")[1]);
            -1 != f.indexOf("partnerId\x3d") && (partnerClientId = f.split("\x3d")[1],
                partnerCode = u,
                isPartnerFlow = !0);
            -1 != f.indexOf("redirectUrl\x3d") && (partnerRedirectUrl = f.split("\x3d")[1])
        });
        b = $("#allowed-partlogin-codes").val();
        void 0 != b && "" != partnerCode && -1 != b.indexOf(partnerCode) && ($(".login-drop-column.create-profile-popup").addClass("hide"),
            $(".student-joinnow-blk").parent().addClass("hide"));
        "" !== m && (loginSource = m.substr(m.lastIndexOf("/") + 1),
            loginSource = loginSource.replace(".html", ""));
        "SME" === u && (loginSource = void 0 !== a ? a.substr(a.lastIndexOf("/") + 1) : "",
            eventLocation = "login-start-beyondbusiness")
    }
    applyNSPChanges();
    $(document).on("click", "#basicFifaLoginLink", function () {
        $("#portalloginfifainfo").parent().addClass("hide");
        $("#loginButtonInvoke").click()
    })
});
function otherSitesEnrollment() {
    try {
        var a = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || -1 != navigator.userAgent.indexOf("Mobile");
        isMobileApp() ? $("#j_platform").val(mobilePlatform) : a ? $("#j_platform").val("MWEB") : $("#j_platform").val("WEB");
        $("#loginErrorBlock .input-base-msg-box").hide();
        var b = $("#global-spinner-container.spinner-overlay");
        void 0 != $("#signOnLanguage").val() && $("#signOnLanguage").val();
        showSpinnerMobileApp(b, "spinner-full-page");
        ajaxLoginCall(!0)
    } catch (c) { }
}
function keepAliveExternalSession(a, b) {
    try {
        var c = $("#externalkeepAliveURL-form");
        c.attr("action", a);
        $("#externalkeepAliveURL-form :input[name\x3d'language']").attr("value", b);
        c.unbind("submit");
        jQuery.ajax({
            url: a,
            data: $(c).closest("form").serializeArray(),
            method: "POST",
            success: function (d) { }
        })
    } catch (d) { }
}
function delete_cookie(a, b, c) {
    try {
        document.cookie = encodeURIComponent(a) + "\x3d; expires\x3dThu, 01 Jan 1970 00:00:00 GMT" + (c ? "; domain\x3d" + c : "") + (b ? "; path\x3d" + b : "")
    } catch (d) { }
}
var isLoggedIn = !1, userProgramCode = "", sendOTPContactDetails, mobileNumber, countryCallingCode, ccc, cc, countryCode, email, isEmailValid = !1, secureOTPChannel = "", receiveOTPChannel = "", existingPreference = "", newPreference = "", newChannel = "", newCountryCallingCode, newCountryCode, newMobileNumber, newEmail, skipSaveOtpPreference = !1;
function hideOTPErrorMessages() {
    try {
        $(".otp-mobile-number-empty-message, .otp-mobile-calling-code-empty-message, .otp-email-empty-message, .otp-mobile_email-empty-message, .otp-invalid-email-message, .otp-preference-service-error-message, .invalid-otp-error-message, .empty-otp-error-message, .otp-verify-service-error-message").attr("hidden", "")
    } catch (a) { }
}
function hideLoginMessages() {
    try {
        $("#login-success-message, #login-alert-message").addClass("hidden")
    } catch (a) { }
}
function loginSuccessFunction() {
    var a = getUserBasicInfoField("programCode");
    $("#portalDashboardPage").val();
    addComponentPageEvent(eventName, "loggedin", "email", loginSource);
    var b = $.parseJSON(loginRequest)
        , c = $("#allowed-actlogin-codes").val().split(",");
    "QRPC" == a || "QRBB" == a || "NCP" == a ? null !== loginRequest && "" !== loginRequest && "undefined" !== typeof loginRequest ? (mainActivityCode = b[0].activityCode,
        -1 != c.indexOf(b[0].activityCode) ? verifyOTP() : "RVE_BKG" == b[0].activityCode && (isRevenueBooking = !0,
            redirectUser())) : verifyOTP() : "PORTAL" == a && redirectUser()
}
function setGDI(a, b) {
    var c = "";
    "login" === b ? (c = "#j-login-form",
        $(c).append('\x3cinput type\x3d"hidden" id\x3d"countryCode" name\x3d"countryCode" value\x3d"' + a.Countrycode + '"/\x3e'),
        $(c).append('\x3cinput type\x3d"hidden" id\x3d"city" name\x3d"city" value\x3d"' + a.City + '"/\x3e'),
        b = a.Regioncode,
        "" !== b && void 0 !== b && null !== b && $("#j-login-form").append('\x3cinput type\x3d"hidden" id\x3d"regionCode" name\x3d"regionCode" value\x3d"' + b + '"/\x3e')) : "logout" === b && (c = "body");
    $(c).append('\x3cinput type\x3d"hidden" id\x3d"longitude" name\x3d"longitude" value\x3d"' + a.Long + '"/\x3e');
    $(c).append('\x3cinput type\x3d"hidden" id\x3d"lat" name\x3d"lat" value\x3d"' + a.Lat + '"/\x3e')
}
function getGDI(a) {
    var b = $("#runmodes").val();
    void 0 === b || null === b || b.split(",").includes("author") || (b = "",
        b = "true" == $("#isProd").val() ? "https://www.qatarairways.com/iw-cc/qatar/servicelocate.jsp" : "https://stg.qatarairways.com/iw-cc/qatar/servicelocate.jsp",
        $.ajax({
            type: "GET",
            contentType: "application/json; charset\x3dutf-8",
            async: !1,
            url: b,
            success: function (c) {
                c = JSON.parse(c.trim());
                setGDI(c, a);
                isGDIAvailable = !0
            },
            error: function (c, d, e) {
                setGDI({
                    Long: "51.53",
                    City: "DOHA",
                    Countrycode: "QA",
                    Lat: "25.29"
                }, a);
                isGDIAvailable = !0
            }
        }))
}
function ajaxLoginCall(a) {
    0 == $("#j-login-form").find("#activity-login-code").length ? $("#j-login-form").append('\x3cinput type\x3d"hidden" id\x3d"activity-login-code" name\x3d"activity-login-code" value\x3d"' + mainActivityCode + '"/\x3e') : $("#j-login-form").find("#activity-login-code").val(mainActivityCode);
    0 == $("#j-login-form").find('[name\x3d"j_srcURL"]').length ? $("#j-login-form").append('\x3cinput type\x3d"hidden" name\x3d"j_srcURL" id\x3d"j_srcURL" value\x3d"' + window.location.href + '"/\x3e') : $("#j-login-form").find('[name\x3d"j_srcURL"]').val(window.location.href);
    isGDIAvailable || getGDI("login");
    "true" === $("#enable-accertify").val() && window.hasOwnProperty("_bcn") && (window._bcn.flush(),
        0 == $("#j-login-form").find('[name\x3d"tid"]').length ? $("#j-login-form").append('\x3cinput type\x3d"hidden" id\x3d"tid" name\x3d"tid" value\x3d"' + window._bcn.dvc.getTID() + '"/\x3e') : $("#j-login-form").find('[name\x3d"tid"]').val(window._bcn.dvc.getTID()),
        0 == $("#j-login-form").find('[name\x3d"ubaID"]').length ? $("#j-login-form").append('\x3cinput type\x3d"hidden" id\x3d"ubaID" name\x3d"ubaID" value\x3d"' + window._bcn.getToken() + '"/\x3e') : $("#j-login-form").find('[name\x3d"ubaID"]').val(window._bcn.getToken()),
        0 == $("#j-login-form").find('[name\x3d"ubaEvents"]').length ? $("#j-login-form").append('\x3cinput type\x3d"hidden" id\x3d"ubaEvents" name\x3d"ubaEvents" value\x3d"' + window._bcn.getEvents() + '"/\x3e') : $("#j-login-form").find('[name\x3d"ubaEvents"]').val(window._bcn.getEvents()),
        0 == $("#j-login-form").find('[name\x3d"pageID"]').length ? $("#j-login-form").append('\x3cinput type\x3d"hidden" id\x3d"pageID" name\x3d"pageID" value\x3d"' + window._bcn.getPageId() + '"/\x3e') : $("#j-login-form").find('[name\x3d"pageID"]').val(window._bcn.getPageId()),
        0 == $("#j-login-form").find('[name\x3d"sessionID"]').length ? $("#j-login-form").append('\x3cinput type\x3d"hidden" id\x3d"sessionID" name\x3d"sessionID" value\x3d"' + window._bcn.getSessionId() + '"/\x3e') : $("#j-login-form").find('[name\x3d"sessionID"]').val(window._bcn.getSessionId()),
        0 == $("#j-login-form").find('[name\x3d"ubaSessionID"]').length ? $("#j-login-form").append('\x3cinput type\x3d"hidden" id\x3d"ubaSessionID" name\x3d"ubaSessionID" value\x3d"' + window._bcn.getUbaSessionId() + '"/\x3e') : $("#j-login-form").find('[name\x3d"ubaSessionID"]').val(window._bcn.getUbaSessionId()));
    $.ajax({
        url: "/qr/j_security_check_qr_portal",
        type: "POST",
        data: $("#j-login-form").serialize(),
        cache: !1,
        success: function (b, c, d, e) {
            custProfId = getUserBasicInfoField("customerProfileId");
            "undefined" != typeof window.appInsights && window.appInsights.trackEvent({
                name: "LOGIN_SERVICE_SUCCESS",
                properties: {
                    custID: custProfId
                }
            });
            $("#j-login-form").find('[name\x3d"additionalInfo"]').val("");
            isMobileApp() && setLoginTokenApp();
            -1 != location.search.indexOf("responsys") && createSimpleCookie("comResponsys", "true");
            createSimpleCookie("loginSuccess", "direct");
            $("#j-login-form, .qbiz-login-section").addClass("visibilityHidden");
            $(".is-logged").css("display", "block");
            $(".create-profile-popup").hide();
            $("#social-login-block, #div_guestuserlogin").addClass("hide");
            loginSuccessFunction()
        },
        error: function (b, c, d, e) {
            c = $.parseJSON(loginRequest);
            $("#j-login-form").find('[name\x3d"additionalInfo"]').val("");
            void 0 != $("#enableAlwaysCaptcha").val() && "" != $("#enableAlwaysCaptcha").val() && null != $("#enableAlwaysCaptcha").val() && "true" === $("#enableAlwaysCaptcha").val() && createCookie("SAC_ERROR", "4");
            c = getFFPCookieValue("SAC_ERROR");
            if (null !== c && void 0 !== c && 2 <= parseInt(c)) {
                if ("GOOGLE" === $("#FFP_CAPTCHA_LOGIN").val())
                    $("#loginCaptcha").show(),
                        $("#loginCaptcha").parent().removeClass("hide"),
                        "undefined" === typeof grecaptcha ? $("body").append('\x3cscript src\x3d"https://www.recaptcha.net/recaptcha/api.js?onload\x3dreCaptchaLoad\x26render\x3dexplicit\x26hl\x3d' + pageLocale + '"\x3e\x3c/script\x3e') : grecaptcha.reset();
                else if ("BOT" === $("#FFP_CAPTCHA_LOGIN").val())
                    if ($("#login-botdetect-captcha").parent().removeClass("hide"),
                        "undefined" !== typeof loginBotCaptcha)
                        try {
                            loginBotCaptcha.reloadImage()
                        } catch (u) { }
                    else
                        "undefined" === typeof loginBotCaptcha && "BOT" === $("#FFP_CAPTCHA_LOGIN").val() && (loginCaptchaBot = $("#login-botdetect-captcha").captcha({
                            captchaEndpoint: "/qr/bot/botqrwebcaptcha"
                        }));
                $("#loginButtonInvoke").css({
                    "pointer-events": "none",
                    opacity: "0.4"
                })
            }
            c = getActualCookieValue("resetPassword");
            d = getActualCookieValue("resetMessageFlag");
            if (null != b.getResponseHeader("j_reason")) {
                b = b.getResponseHeader("j_reason");
                var h = JSON.parse(b);
                b = $("#isProd").attr("current-page-path");
                c = "";
                void 0 !== b && "" !== b && (c = b.substr(b.lastIndexOf("/") + 1),
                    c = c.replace(".html", ""));
                hideLoginMessages();
                if (void 0 != h[0] && void 0 != h[0].errorName && "FFP_AUTH_USR_EMAIL_NOT_VRFD" === h[0].errorName.trim())
                    return b = $("#email-verification-alert-message").val(),
                        c = $("#resend-verification-link-label").val(),
                        b = b.replace("${0}", '\x3ca href\x3d"javascript:void(0)" id\x3d"resend-verification-link"\x3e\x3cu\x3e' + c + "\x3c/u\x3e\x3c/a\x3e"),
                        $("#login-alert-message .alert-message").html(b),
                        $("#login-alert-message").removeClass("hidden"),
                        void 0 !== digitalData && void 0 !== digitalData.page && void 0 !== digitalData.page.pageInfo && void 0 !== digitalData.page.pageInfo.pageType && (digitalData.page.pageInfo.pageType = "login-without-email-verification"),
                        errorClick(window.location.href, "login-" + loginUserNameType, loginUserType, h[0].errorName),
                        "undefined" != typeof window.appInsights && window.appInsights.trackEvent({
                            name: "LOGIN_SERVICE_ERROR",
                            properties: {
                                custID: custProfId,
                                errorName: h[0].errorName
                            }
                        }),
                        setTimeout(function () {
                            hideSpinnerMobileApp(m, "spinner-full-page")
                        }, 500),
                        !1;
                if (void 0 != h[0] && void 0 != h[0].errorName && ("FFP_AUTH_AU_USR_ACCERTIFY_REJECT" === h[0].errorName.trim() || "FFP_AUTH_AU_USR_ACNT_BLKD" === h[0].errorName.trim()))
                    return b = $("#accertify-reject-msg").val(),
                        "" !== b && void 0 !== b && null !== b && (c = $("#accertify-reject-msg-link").val(),
                            d = $("#accertify-reject-msg-linkiid").val(),
                            "" !== d && void 0 !== d && null !== d && (c = c + "?iid\x3d" + d),
                            d = $("#accertify-reject-msg-compId").val(),
                            "" !== d && void 0 !== d && null !== d && (c = c + "#" + d),
                            c = '\x3ca href\x3d"' + c + '" target\x3d"' + ("true" === $("#accertify-reject-msg-linkTarget").val() ? "_blank" : "_self") + '"\x3e' + $("#accertify-reject-msg-linktext").val() + "\x3c/a\x3e",
                            b = b.replace("{0}", c)),
                        $("#loginErrorBlock #errorId").html(b),
                        $("#loginErrorBlock .input-base-msg-box").show().focus(),
                        void 0 !== digitalData && void 0 !== digitalData.page && void 0 !== digitalData.page.pageInfo && void 0 !== digitalData.page.pageInfo.pageType && (digitalData.page.pageInfo.pageType = "login-accertify-reject"),
                        errorClick(window.location.href, "login-" + loginUserNameType, loginUserType, h[0].errorName),
                        "undefined" != typeof window.appInsights && window.appInsights.trackEvent({
                            name: "LOGIN_SERVICE_ERROR",
                            properties: {
                                custID: custProfId,
                                errorName: h[0].errorName
                            }
                        }),
                        setTimeout(function () {
                            hideSpinnerMobileApp(m, "spinner-full-page")
                        }, 500),
                        !1;
                b = $("#isProd").attr("current-page-path");
                c = "";
                void 0 !== b && "" !== b && (c = b.substr(b.lastIndexOf("/") + 1),
                    c = c.replace(".html", ""));
                void 0 != $("#signOnLanguage").val() && $("#signOnLanguage").val();
                window.qrServiceRef.zone.run(function () {
                    var u = setInterval(function () {
                        window.qrServiceRef.isGlobalI18nLoaded() && (clearInterval(u),
                            window.qrServiceRef.translateErrorObject(h, "/content/Qatar/i18n/login.errorMessages.json").then(function (k) {
                                var f = k[0].errorDescription;
                                -1 != f.indexOf("\x3cspan class\x3d'errorCode'\x3e(") && -1 != f.indexOf(")\x3c/span\x3e") && (f = f.replace("\x3cspan class\x3d'errorCode'\x3e(", " "),
                                    f.replace(")\x3c/span\x3e", ""));
                                void 0 !== digitalData && void 0 !== digitalData.page && void 0 !== digitalData.page.pageInfo && void 0 !== digitalData.page.pageInfo.pageType && (digitalData.page.pageInfo.pageType = "login-error");
                                errorClick(window.location.href, "login-" + loginUserNameType, loginUserType, k[0].errorName);
                                "undefined" != typeof window.appInsights && window.appInsights.trackEvent({
                                    name: "LOGIN_SERVICE_ERROR",
                                    properties: {
                                        custID: custProfId,
                                        errorName: k[0].errorName
                                    }
                                });
                                $("#loginErrorBlock #errorId").html(k[0].errorDescription);
                                $("#loginErrorBlock .input-base-msg-box").show().focus()
                            }))
                    }, 500)
                })
            } else
                "undefined" != typeof c && "true" === c || "undefined" != typeof d && "true" === d ? (deleteCookie("resetPassword"),
                    deleteCookie("resetMessageFlag"),
                    deleteCookie("userName"),
                    logout(),
                    b = "",
                    "true" === c && "false" === d ? ($("#loginErrorBlock #errorId").html($("#sys-gen-password-error").val()),
                        b = "LOGIN_RESET_PASSWORD_ERROR") : "true" === d && ($("#loginErrorBlock #errorId").html($("#weak-password-error").val()),
                            b = "LOGIN_WEAK_PASSWORD_ERROR"),
                    $("#loginErrorBlock .input-base-msg-box").show().focus(),
                    "undefined" != typeof window.appInsights && window.appInsights.trackEvent({
                        name: "LOGIN_SERVICE_ERROR",
                        properties: {
                            custID: custProfId,
                            errorName: b
                        }
                    })) : $("#loginErrorBlock .input-base-msg-box").hide();
            var m = $("#global-spinner-container.spinner-overlay");
            setTimeout(function () {
                hideSpinnerMobileApp(m, "spinner-full-page")
            }, 500);
            c = $.parseJSON(loginRequest);
            a && null != c && ("AUTONSPLOGIN" == c[0].activityCode || "AUTO_LOGIN" == c[0].activityCode) && isMobileApp() && ($('#j-login-form [name\x3d"j_username"]').val(""),
                mobilePlatform == window.ANDROID_PLATFORM && JSInterface.autoLoginFailed(),
                mobilePlatform == window.IOS_PLATFORM && setupWebViewJavascriptBridge(function (u) {
                    u.callHandler("autoLoginFailed", "", function () {
                        console.log("Login failed")
                    })
                }))
        }
    })
}
function invoke() {
    $("#portalloginfifainfo").parent().addClass("hide");
    try {
        if ("undefined" === typeof window.qrServiceRef) {
            var a = $("#login-clientlib-js script").attr("src");
            a = a.replace("login-clientlibs", "angular");
            console.log("scriptLoaderPath " + a);
            a = '\x3cscript src\x3d"' + a + '" type\x3d"text/javascript"\x3e\x3c/script\x3e';
            document.createElement("script");
            $("body").append(a)
        }
        $("#j-login-form #additional_time")[0].value = new Date;
        $("#loginErrorBlock,#loginErrorBlock .input-base-msg-box").removeAttr("hidden").focus();
        if ($("#remember").is(":checked")) {
            var b = $("#f1003").val();
            localStorage.setItem("remembercheck", b)
        }
        isLoggedIn = !0;
        var c = void 0 != $("#signOnLanguage").val() ? $("#signOnLanguage").val() : "en";
        $("#j-login-form");
        var d = $(".usernameField").val()
            , e = $(".passwordField").val();
        b = "${currentPage.path @context\x3d'text'}";
        0 == $("#j-login-form").find('[name\x3d"additionalInfo"]').length ? $("#j-login-form").append('\x3cinput type\x3d"hidden" name\x3d"additionalInfo" value\x3d"' + availableData + '"/\x3e') : $("#j-login-form").find('[name\x3d"additionalInfo"]').val(availableData);
        sourceCode = getReqParam("source");
        if (-1 != location.search.indexOf("activityCode\x3d"))
            $("#j-login-form").append('\x3cinput type\x3d"hidden" name\x3d"activity-code" value\x3d"' + getReqParam("activityCode") + '"/\x3e');
        else if (-1 != location.search.indexOf("source\x3d"))
            getReqParam("source") === QRHFIFABKG || getReqParam("source") === FIFAMCRSTE ? 0 == $("#j-login-form").find('[name\x3d"activity-code"]').length ? $("#j-login-form").append('\x3cinput type\x3d"hidden" name\x3d"activity-code" value\x3d"FIFA"/\x3e') : $("#j-login-form").find('[name\x3d"activity-code"]').val("FIFA") : 0 === $("#j-login-form").find('[name\x3d"activity-code"]').length ? $("#j-login-form").append('\x3cinput type\x3d"hidden" name\x3d"activity-code" value\x3d"' + sourceCode + '"/\x3e') : $("#j-login-form").find('[name\x3d"activity-code"]').val(sourceCode);
        else {
            var h = getLoginReqCookieParam("activityCode");
            h = !1 === h ? "" : h;
            $("#j-login-form").append('\x3cinput type\x3d"hidden" name\x3d"activity-code" value\x3d"' + h + '"/\x3e')
        }
        if ("" !== d && "" !== e) {
            $("#loginErrorBlock .input-base-msg-box").hide();
            "" === loginRequest && (loginRequest = null);
            var m = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || -1 != navigator.userAgent.indexOf("Mobile");
            isMobileApp() ? $("#j_platform").val(mobilePlatform) : m ? $("#j_platform").val("MWEB") : $("#j_platform").val("WEB");
            $.parseJSON(loginRequest);
            u = !1;
            if (-1 !== d.indexOf("@")) {
                var u = validateEmail(d);
                if (u)
                    loginUserNameType = "email";
                else {
                    var k = getErrorMessage("Invalid_Email", c);
                    void 0 !== digitalData && void 0 !== digitalData.page && void 0 !== digitalData.page.pageInfo && void 0 !== digitalData.page.pageInfo.pageType && (digitalData.page.pageInfo.pageType = "LOGIN_INVALID_EMAIL");
                    errorClick(window.location.href, "login-email", loginUserType, "LOGIN_INVALID_EMAIL")
                }
            } else
                (u = validateQmileNumber(d)) ? loginUserNameType = "ffpNumber" : (k = "",
                    -1 != location.search.indexOf("activityCode\x3dSME") ? (k = getErrorMessage("Invalid_Email", c),
                        void 0 !== digitalData && void 0 !== digitalData.page && void 0 !== digitalData.page.pageInfo && void 0 !== digitalData.page.pageInfo.pageType && (digitalData.page.pageInfo.pageType = "SME_LOGIN_INVALID_EMAIL"),
                        errorClick(window.location.href, "sme-login-email", loginUserType, "SME_LOGIN_INVALID_EMAIL")) : (k = getErrorMessage("Invalid_Qmiles", c),
                            void 0 !== digitalData && void 0 !== digitalData.page && void 0 !== digitalData.page.pageInfo && void 0 !== digitalData.page.pageInfo.pageType && (digitalData.page.pageInfo.pageType = "LOGIN_INVALID_FFP_NO"),
                            errorClick(window.location.href, "login-ffp", loginUserType, "LOGIN_INVALID_FFP_NO")));
            if (u) {
                $("#loginErrorBlock .input-base-msg-box").hide();
                $("#j_submitType").val("DIRECT");
                var f = $("#global-spinner-container.spinner-overlay");
                showSpinnerMobileApp(f, "spinner-full-page");
                "BOT" === $("#FFP_CAPTCHA_LOGIN").val() && (0 == $("#j-login-form").find("#CP_L_TYPE").length ? $("#j-login-form").append('\x3cinput type\x3d"hidden" value\x3d"BOT" name\x3d"CP_L_TYPE" id\x3d"CP_L_TYPE"/\x3e') : $("#j-login-form").find("#CP_L_TYPE").val("BOT"));
                "GOOGLE" === $("#FFP_CAPTCHA_LOGIN").val() && (0 == $("#j-login-form").find("#CP_L_TYPE").length ? $("#j-login-form").append('\x3cinput type\x3d"hidden" value\x3d"GOOGLE" name\x3d"CP_L_TYPE" id\x3d"CP_L_TYPE"/\x3e') : $("#j-login-form").find("#CP_L_TYPE").val("GOOGLE"));
                ajaxLoginCall(!1)
            } else
                $("#loginErrorBlock #errorId").html(k),
                    $("#loginErrorBlock .input-base-msg-box").show().focus()
        } else {
            if ("GOOGLE" === $("#FFP_CAPTCHA_LOGIN").val())
                "undefined" === typeof grecaptcha ? $("body").append('\x3cscript src\x3d"https://www.recaptcha.net/recaptcha/api.js?onload\x3dreCaptchaLoad\x26render\x3dexplicit\x26hl\x3d' + pageLocale + '"\x3e\x3c/script\x3e') : grecaptcha.reset();
            else if ("BOT" === $("#FFP_CAPTCHA_LOGIN").val())
                if ($("#login-botdetect-captcha").parent().removeClass("hide"),
                    "undefined" !== typeof loginBotCaptcha)
                    try {
                        loginBotCaptcha.reloadImage()
                    } catch (n) { }
                else
                    "undefined" === typeof loginBotCaptcha && "BOT" === $("#FFP_CAPTCHA_LOGIN").val() && (loginCaptchaBot = $("#login-botdetect-captcha").captcha({
                        captchaEndpoint: "/qr/bot/botqrwebcaptcha"
                    }));
            b = $("#isProd").attr("current-page-path");
            d = "";
            void 0 !== b && "" !== b && (d = b.substr(b.lastIndexOf("/") + 1),
                d.replace(".html", ""));
            k = getErrorMessage("Blank_Fields", c);
            $("#loginErrorBlock #errorId").html(k);
            $("#loginErrorBlock .input-base-msg-box").show().focus();
            void 0 !== digitalData && void 0 !== digitalData.page && void 0 !== digitalData.page.pageInfo && void 0 !== digitalData.page.pageInfo.pageType && (digitalData.page.pageInfo.pageType = "LOGIN_BLANK_FIELDS");
            errorClick(window.location.href, "login", loginUserType, "LOGIN_BLANK_FIELDS")
        }
    } catch (n) { }
}
function validateEmail(a) {
    try {
        var b = a.indexOf("@")
            , c = a.lastIndexOf(".");
        return 1 > b || c < b + 2 || c + 2 >= a.length ? !1 : !0
    } catch (d) { }
}
function validateQmileNumber(a) {
    try {
        return isNaN(a) || 9 < a.length ? !1 : !0
    } catch (b) { }
}
function clearGrabInfo() {
    localStorage.removeItem("grabid:login_return_uri");
    localStorage.removeItem("grabid:code");
    localStorage.removeItem("grabid:nonce");
    localStorage.removeItem("grabid:state");
    localStorage.removeItem("grabid:code_verifier");
    localStorage.removeItem("grabid:access_token");
    localStorage.removeItem("grabid:id_token")
}
function getAccertifyInfo() {
    var a = $("#accertifyDataCollectorProxyURL").val()
        , b = document.createElement("script");
    b.setAttribute("type", "text/javascript");
    b.setAttribute("src", a);
    a = $("#accertifyDataCollectorTimeout").val();
    b.setAttribute("dvct", a);
    b.setAttribute("id", "bcn");
    a = $("#accertifyDataCollectorSubmitType").val();
    b.setAttribute("dvc", a);
    b.onload = function () {
        window.hasOwnProperty("_bcn") && window._bcn.hasOwnProperty("dvc") && window._bcn.dvc.setSubmissionCallback(setAccertifyInfo)
    }
        ;
    document.head.appendChild(b)
}
function setAccertifyInfo() {
    window.hasOwnProperty("_bcn") && window._bcn.hasOwnProperty("dvc") && ($("body").append('\x3cinput type\x3d"hidden" id\x3d"tid" name\x3d"tid" value\x3d"' + window._bcn.dvc.getTID() + '"/\x3e'),
        $("body").append('\x3cinput type\x3d"hidden" id\x3d"ubaID" name\x3d"ubaID" value\x3d"' + window._bcn.getToken() + '"/\x3e'),
        $("body").append('\x3cinput type\x3d"hidden" id\x3d"ubaEvents" name\x3d"ubaEvents" value\x3d"' + window._bcn.getEvents() + '"/\x3e'),
        $("body").append('\x3cinput type\x3d"hidden" id\x3d"pageID" name\x3d"pageID" value\x3d"' + window._bcn.getPageId() + '"/\x3e'),
        $("body").append('\x3cinput type\x3d"hidden" id\x3d"sessionID" name\x3d"sessionID" value\x3d"' + window._bcn.getSessionId() + '"/\x3e'),
        $("body").append('\x3cinput type\x3d"hidden" id\x3d"ubaSessionID" name\x3d"ubaSessionID" value\x3d"' + window._bcn.getUbaSessionId() + '"/\x3e'),
        logOutRedirectionFetcher())
}
function logout() {
    void 0 == localStorage.getItem("sessionLastAcitivity") && null == localStorage.getItem("sessionLastAcitivity") || localStorage.removeItem("sessionLastAcitivity");
    void 0 == sessionStorage.getItem("profilePicImage") && null == sessionStorage.getItem("profilePicImage") || sessionStorage.removeItem("profilePicImage");
    void 0 == localStorage.getItem("qmiceCities") && null == localStorage.getItem("qmiceCities") || localStorage.removeItem("qmiceCities");
    try {
        if (clearGrabInfo(),
            deleteCookie("swiftLinkStatus"),
            deleteCookie("opv"),
            userProgramCode = getUserBasicInfoField("programCode"),
            "on" != $("#isLateLogout").val() && showSpinnerMobileApp($("#global-spinner-container"), "spinner-active"),
            "true" == $("#isPublishInstance").val()) {
            var a = "";
            a = "GOOGLE" == $("#j_socilMediaValue").val() ? "email" : "FACEBOOK" == $("#j_socilMediaValue").val() ? "facebook" : "TWITTER" == $("#j_socilMediaValues").val() ? "twitter" : "social";
            addComponentPageEvent(eventName, "logged out", a, getCurrentPageName());
            "true" === $("#enableAccertifyLogout").val() ? getAccertifyInfo() : logOutRedirectionFetcher();
            getGDI("logout")
        }
    } catch (b) { }
}
function setPortalAndFFPUrl() {
    var a = getActualCookieValue("QMILESSITE");
    a = null === a ? "new" : a;
    null !== a && "" !== a && "undefined" !== typeof a && (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && "old" == a && (a = "new"),
        $("#megaMenuConfigPagePath").val(),
        "new" === a ? (privilegeClubDashboardURL = $("#new-privilege-club-dashboard-URL").val(),
            portalDashboardURL = $("#new-portal-dashboard-URL").val(),
            studentDashboardURL = $("#new-student-dashboard-URL").val()) : "old" === a ? (privilegeClubDashboardURL = $("#old-privilege-club-dashboard-URL").val(),
                portalDashboardURL = $("#old-portal-dashboard-URL").val(),
                studentDashboardURL = $("#old-student-dashboard-URL").val()) : "other" === a ? (privilegeClubDashboardURL = $("#global-privilege-club-dashboard-URL").val(),
                    portalDashboardURL = $("#global-portal-dashboard-URL").val(),
                    studentDashboardURL = $("#global-student-dashboard-URL").val()) : "other-en" === a && (privilegeClubDashboardURL = $("#english-privilege-club-dashboard-URL").val(),
                        portalDashboardURL = $("#english-portal-dashboard-URL").val(),
                        studentDashboardURL = $("#english-student-dashboard-URL").val()))
}
$(document).ready(function () {
    setPortalAndFFPUrl();
    try {
        $("#reset-password").addClass("hide"),
            isLoggedIn && ($(".is-not-logged").css("display", "none"),
                $(".is-logged").css("display", "block")),
            $("#forgot-password-link").on("click", function () {
                try {
                    $("#loginErrorBlock .input-base-msg-box").hide();
                    $(".forgetPasswordInputForm, .forgetPasswordSendButton").removeClass("hide");
                    if (isSMELoginPage)
                        $(".forgetPasswordNote ").removeClass("hide");
                    else {
                        var a = getCookieValueAsIs("tgtCookie");
                        null !== a && "" !== a && "veriCode" === a ? $(".forgetPasswordNote ").removeClass("hide") : $(".qrpc-forgetPasswordNote").removeClass("hide")
                    }
                    $(".forgotPasswordUserName").val("");
                    $(".forgetPasswordSuccessMessage, .forgetPasswordErrorMessage,.forgetPasswordNoInputErrorMessage").addClass("hide");
                    $(".forgetPasswordSuccessMessage").closest(".sucsmsg-bar").addClass("hide");
                    $(".forgetPasswordErrorMessage").closest(".error-box").addClass("hide");
                    $(".forgetPasswordNoInputErrorMessage").closest(".error-box").addClass("hide");
                    setTimeout(function () {
                        $(".back-to-login").closest(".form-action").parent().css({
                            visibility: "visible"
                        });
                        if ("undefined" === typeof window.qrServiceRef) {
                            var c = $("#login-clientlib-js script").attr("src");
                            c = c.replace("login-clientlibs", "angular");
                            c = '\x3cscript src\x3d"' + c + '" type\x3d"text/javascript"\x3e\x3c/script\x3e';
                            document.createElement("script");
                            $("body").append(c)
                        }
                    }, 500);
                    var b = $(".usernameField").val();
                    "" !== b && void 0 !== b && ($("#f1002").val(b),
                        $(".forgetPasswordInputForm").addClass("filled"));
                    $("#forgot-password").addClass("flip-side-1").removeClass("flip-side-2");
                    $("#j-login-form, #enter-otp, #update-new-password").addClass("flip-side-2").removeClass("flip-side-1");
                    buttonClickAction(window.location.href, "forgot-password", loginUserType)
                } catch (c) { }
            })
    } catch (a) { }
});
function logoutRedirection(a) {
    var b = "true" === $("#isQmicePage").val() ? "QMICE" : getUserBasicInfoField("programCode")
        , c = ""
        , d = ""
        , e = ""
        , h = void 0 != $("#page-path").val() ? $("#page-path").val().includes("/tradepartner") : !1;
    if (a) {
        a = getActualCookieValue("QMILESSITE");
        if ("true" == $("#isPublish").val() && "true" == $("#isPostLoginRedirectionRequired").val())
            return 0 < $("#loginHeader a").length ? $("#loginHeader a")[0].click() : $("#header-loginlink-redirect")[0].click(),
                !0;
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && "old" == a && (a = "new");
        "QRPC" == b ? ("new" === a ? d = $("#newPrivilegeClubUserLogoutURL").val() : "old" === a ? d = $("#oldPrivilegeClubUserLogoutURL").val() : "other" === a ? d = $("#globalPrivilegeClubUserLogoutURL").val() : "other-en" === a && (d = $("#englishPrivilegeClubUserLogoutURL").val()),
            e = d) : "PORTAL" == b ? ("new" === a ? c = $("#newPortalUserLogoutURL").val() : "old" === a ? c = $("#oldPortalUserLogoutURL").val() : "other" === a ? c = $("#globalPortalUserLogoutURL").val() : "other-en" === a ? c = $("#englishPortalUserLogoutURL").val() : "mobile-old" === a && (c = $("#mobilePortalUserLogoutURL").val()),
                e = c) : "QRBB" == b && (e = $("#smeLogoutLink").val());
        "NCP" == b && (e = $("#ncpLogoutLink").val());
        $("#join-form").length && (e = location.pathname);
        h && (e = $("#tradepartnerhomepagerdurl").val());
        "QMICE" == b && (e = $("#qmiceLogoutLink").val());
        if ("" === e || void 0 === e || null === e)
            e = $("#mmCurrentPage").val()
    } else
        e = $("#landed-page-path").val();
    -1 == e.indexOf(".html") && (e += ".html");
    var m = $("#tid").val()
        , u = $("#ubaID").val()
        , k = $("#ubaEvents").val()
        , f = $("#pageID").val()
        , n = $("#sessionID").val()
        , r = $("#ubaSessionID").val()
        , q = getUserBasicInfoField("ffpNumber")
        , l = $("#longitude").val()
        , t = $("#lat").val();
    $.ajax({
        url: "/qr/getShortURL?pagePath\x3d" + e.replace(".html", ""),
        type: "get",
        contentType: "application/json; charset\x3dutf-8",
        dataType: "json",
        async: !1,
        cache: !1,
        success: function (g) {
            g = g.shortURL;
            g = g.replace(window.location.origin, "");
            g = -1 == g.indexOf(".html") ? g + ".html" : g;
            if (h) {
                var p = getFFPCookieValue("QRTOKEN");
                $("body").append('\x3cform action\x3d"/qr/tpLogout" id\x3d"logoutFormSubmission" target\x3d"_self" method\x3d"post" class\x3d"hide"\x3e\x3cinput type\x3d"hidden" id\x3d"resource" name\x3d"resource" value\x3d"' + g + '"/\x3e\x3cinput type\x3d"hidden" id\x3d"sessionId" name\x3d"sessionId" value\x3d"' + p + '"\x3e\x3cinput type\x3d"hidden" id\x3d"logOut" name\x3d"logOut" value\x3d"logOut"\x3e\x3cinput type\x3d"hidden" name\x3d"type" value\x3d"INTERNAL"\x3e\x3cinput type\x3d"submit" value\x3d"Submit"\x3e')
            } else
                $("body").append('\x3cform action\x3d"/qr/Logout" id\x3d"logoutFormSubmission" target\x3d"_self" method\x3d"post" class\x3d"hide"\x3e\x3cinput type\x3d"hidden" id\x3d"resource" name\x3d"resource" value\x3d"' + g + '"/\x3e\x3cinput type\x3d"hidden" id\x3d"logOut" name\x3d"logOut" value\x3d"logOut"\x3e\x3cinput type\x3d"hidden" name\x3d"type" value\x3d"INTERNAL"\x3e\x3cinput type\x3d"submit" value\x3d"Submit"\x3e'),
                    $("#logoutFormSubmission").append('\x3cinput type\x3d"hidden" id\x3d"tid" name\x3d"tid" value\x3d"' + m + '"/\x3e'),
                    $("#logoutFormSubmission").append('\x3cinput type\x3d"hidden" id\x3d"ubaID" name\x3d"ubaID" value\x3d"' + u + '"/\x3e'),
                    $("#logoutFormSubmission").append('\x3cinput type\x3d"hidden" id\x3d"ubaEvents" name\x3d"ubaEvents" value\x3d"' + k + '"/\x3e'),
                    $("#logoutFormSubmission").append('\x3cinput type\x3d"hidden" id\x3d"pageID" name\x3d"pageID" value\x3d"' + f + '"/\x3e'),
                    $("#logoutFormSubmission").append('\x3cinput type\x3d"hidden" id\x3d"sessionID" name\x3d"sessionID" value\x3d"' + n + '"/\x3e'),
                    $("#logoutFormSubmission").append('\x3cinput type\x3d"hidden" id\x3d"ubaSessionID" name\x3d"ubaSessionID" value\x3d"' + r + '"/\x3e'),
                    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || -1 != navigator.userAgent.indexOf("Mobile") ? $("#logoutFormSubmission").append('\x3cinput type\x3d"hidden" id\x3d"platform" name\x3d"platform" value\x3d"MWEB"/\x3e') : $("#logoutFormSubmission").append('\x3cinput type\x3d"hidden" id\x3d"platform" name\x3d"platform" value\x3d"WEB"/\x3e'),
                    $("#logoutFormSubmission").append('\x3cinput type\x3d"hidden" id\x3d"accountID" name\x3d"accountID" value\x3d"' + q + '"/\x3e'),
                    $("#logoutFormSubmission").append('\x3cinput type\x3d"hidden" id\x3d"customerProfileID" name\x3d"customerProfileID" value\x3d"' + getUserBasicInfoField("customerProfileId") + '"/\x3e'),
                    $("#logoutFormSubmission").append('\x3cinput type\x3d"hidden" id\x3d"userName" name\x3d"userName" value\x3d"' + q + '"/\x3e'),
                    $("#logoutFormSubmission").append('\x3cinput type\x3d"hidden" id\x3d"longitude" name\x3d"longitude" value\x3d"' + l + '"/\x3e'),
                    $("#logoutFormSubmission").append('\x3cinput type\x3d"hidden" id\x3d"lat" name\x3d"lat" value\x3d"' + t + '"/\x3e');
            deleteCookie("newUser");
            deleteCookie("companion");
            document.getElementById("logoutFormSubmission").submit()
        },
        error: function (g) {
            $("body").append('\x3cform action\x3d"/qr/Logout" id\x3d"logoutFormSubmission" target\x3d"_self" method\x3d"post" class\x3d"hide"\x3e\x3cinput type\x3d"hidden" id\x3d"resource" name\x3d"resource" value\x3d"' + e + '"/\x3e\x3cinput type\x3d"hidden" id\x3d"logOut" name\x3d"logOut" value\x3d"logOut"\x3e\x3cinput type\x3d"submit" value\x3d"Submit"\x3e');
            $("#logoutFormSubmission").append('\x3cinput type\x3d"hidden" id\x3d"tid" name\x3d"tid" value\x3d"' + m + '"/\x3e');
            $("#logoutFormSubmission").append('\x3cinput type\x3d"hidden" id\x3d"ubaID" name\x3d"ubaID" value\x3d"' + u + '"/\x3e');
            $("#logoutFormSubmission").append('\x3cinput type\x3d"hidden" id\x3d"ubaEvents" name\x3d"ubaEvents" value\x3d"' + k + '"/\x3e');
            $("#logoutFormSubmission").append('\x3cinput type\x3d"hidden" id\x3d"pageID" name\x3d"pageID" value\x3d"' + f + '"/\x3e');
            $("#logoutFormSubmission").append('\x3cinput type\x3d"hidden" id\x3d"sessionID" name\x3d"sessionID" value\x3d"' + n + '"/\x3e');
            $("#logoutFormSubmission").append('\x3cinput type\x3d"hidden" id\x3d"ubaSessionID" name\x3d"ubaSessionID" value\x3d"' + r + '"/\x3e');
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || -1 != navigator.userAgent.indexOf("Mobile") ? $("#logoutFormSubmission").append('\x3cinput type\x3d"hidden" id\x3d"platform" name\x3d"platform" value\x3d"MWEB"/\x3e') : $("#logoutFormSubmission").append('\x3cinput type\x3d"hidden" id\x3d"platform" name\x3d"platform" value\x3d"WEB"/\x3e');
            $("#logoutFormSubmission").append('\x3cinput type\x3d"hidden" id\x3d"accountID" name\x3d"accountID" value\x3d"' + q + '"/\x3e');
            $("#logoutFormSubmission").append('\x3cinput type\x3d"hidden" id\x3d"customerProfileID" name\x3d"customerProfileID" value\x3d"' + getUserBasicInfoField("customerProfileId") + '"/\x3e');
            $("#logoutFormSubmission").append('\x3cinput type\x3d"hidden" id\x3d"userName" name\x3d"userName" value\x3d"' + q + '"/\x3e');
            $("#logoutFormSubmission").append('\x3cinput type\x3d"hidden" id\x3d"longitude" name\x3d"longitude" value\x3d"' + l + '"/\x3e');
            $("#logoutFormSubmission").append('\x3cinput type\x3d"hidden" id\x3d"lat" name\x3d"lat" value\x3d"' + t + '"/\x3e');
            deleteCookie("companion");
            document.getElementById("logoutFormSubmission").submit()
        }
    })
}
function logOutRedirectionFetcher() {
    try {
        document.cookie = "otpTriggered\x3d;expires\x3dThu, 01 Jan 1970 00:00:01 GMT;path\x3d/";
        var a = $("#landed-page-path").val();
        $.ajax({
            type: "get",
            url: a + ".json",
            success: function (b) {
                void 0 !== b ? (console.log(b["jcr:mixinTypes"]),
                    b = JSON.stringify(b["jcr:mixinTypes"]),
                    void 0 != b && -1 != b.indexOf("rep:CugMixin") ? logoutRedirection(!0) : logoutRedirection(!1)) : logoutRedirection(!1)
            },
            error: function () {
                alert("Error")
            }
        })
    } catch (b) { }
}
function parseUri(a) {
    var b = parseUri.options;
    a = b.parser[b.strictMode ? "strict" : "loose"].exec(a);
    for (var c = {}, d = 14; d--;)
        c[b.key[d]] = a[d] || "";
    c[b.q.name] = {};
    c[b.key[12]].replace(b.q.parser, function (e, h, m) {
        h && (c[b.q.name][h] = m)
    });
    return c
}
parseUri.options = {
    strictMode: !1,
    key: "source protocol authority userInfo user password hostname port relative path directory file query anchor".split(" "),
    q: {
        name: "queryKey",
        parser: /(?:^|&)([^&=]*)=?([^&]*)/g
    },
    parser: {
        strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
        loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
    }
};
function getOauthCodeFromService() {
    var a = $("#serviceAuthorizationCode").val();
    if (void 0 == a || "" == a || null === a)
        return !1;
    var b = {
        customerProfileId: getUserBasicInfoField("customerProfileId"),
        partnerCode: partnerCode,
        clientId: partnerClientId
    };
    req_headers.Authorization = "Bearer " + getFFPCookieValue("QRTOKEN");
    window.qrServiceRef.zone.run(function () {
        window.qrServiceRef.postReq(a, b, req_headers, "", {}).then(function (c) {
            void 0 === c.errorObject && (window.location = partnerRedirectUrl + "?code\x3d" + c.authorizationCode + "\x26state\x3d" + partnerState)
        })
    })
}
function validateLinkBRedirect(a, b) {
    var c = /^[A-Za-z]+$/;
    setPortalAndFFPUrl();
    if (/^(http|https):\/\/[^ "]+$/.test(a)) {
        var d = $("#travel-shop-uri").val();
        parseUri(d);
        d = parseUri(a).hostname;
        a.substr(0, parseInt(a.indexOf(d) + d.length) + 1);
        if (b || -1 != location.search.indexOf("resource\x3d") || "" === document.referrer)
            $.ajax({
                url: "/qr/qrweb/loginvalidator",
                data: {
                    dataUrl: b ? a : "EMPTY"
                },
                success: function (u, k, f) {
                    console.log(f.status);
                    if (0 !== f.status % 200) {
                        u = getUserBasicInfoField("programCode");
                        k = getActualCookieValue("QMILESSITE");
                        var n = f = ""
                            , r = "";
                        null !== k && "" !== k && "undefined" !== typeof k && (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && "old" == k && (k = "new"),
                            $("#megaMenuConfigPagePath").val(),
                            "new" === k ? (f = $("#new-privilege-club-dashboard-URL").val(),
                                n = $("#new-portal-dashboard-URL").val(),
                                r = $("#new-student-dashboard-URL").val()) : "old" === k ? (f = $("#old-privilege-club-dashboard-URL").val(),
                                    n = $("#old-portal-dashboard-URL").val(),
                                    r = $("#old-student-dashboard-URL").val()) : "other" === k ? (f = $("#global-privilege-club-dashboard-URL").val(),
                                        n = $("#global-portal-dashboard-URL").val(),
                                        r = $("#global-student-dashboard-URL").val()) : "other-en" === k && (f = $("#english-privilege-club-dashboard-URL").val(),
                                            n = $("#english-portal-dashboard-URL").val(),
                                            r = $("#english-student-dashboard-URL").val()));
                        "QRPC" == u ? a = "STUDENT" === getUserBasicInfoField("category") ? -1 != r.indexOf("html") ? r : r + ".html" : -1 != f.indexOf("html") ? f : f + ".html" : "PORTAL" == u && (a = -1 != n.indexOf("html") ? n : n + ".html");
                        b = !1
                    }
                    isPartnerFlow ? getOauthCodeFromService() : !b || -1 != location.search.indexOf("RDMHTLSTAY") || -1 != location.search.indexOf("RDMCARNTL") || isFifaFlow ? (b || -1 != a.indexOf("/postLogin") ? b || (a = getUserBasicInfoField("swiftOnboardingRequired") && "QRPC" === getUserBasicInfoField("programCode") && -1 === a.indexOf(".swiftpopup.") ? a.replace(".html", ".swiftpopup.html") : a) : a = getUserBasicInfoField("swiftOnboardingRequired") && "QRPC" === getUserBasicInfoField("programCode") && -1 === a.indexOf(".onboardpopup.") ? a.replace(".html", ".onboardpopup.html") : a,
                        window.location = a) : ($("#j-cookie-call-back-url-form").attr("action", a),
                            $("#j-cookie-call-back-url-form").submit())
                },
                error: function (u) { }
            });
        else {
            c = getUserBasicInfoField("programCode");
            var e = getActualCookieValue("QMILESSITE")
                , h = d = ""
                , m = "";
            null !== e && "" !== e && "undefined" !== typeof e && (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && "old" == e && (e = "new"),
                $("#megaMenuConfigPagePath").val(),
                "new" === e ? (d = $("#new-privilege-club-dashboard-URL").val(),
                    h = $("#new-portal-dashboard-URL").val(),
                    m = $("#new-student-dashboard-URL").val()) : "old" === e ? (d = $("#old-privilege-club-dashboard-URL").val(),
                        h = $("#old-portal-dashboard-URL").val(),
                        m = $("#old-student-dashboard-URL").val()) : "other" === e ? (d = $("#global-privilege-club-dashboard-URL").val(),
                            h = $("#global-portal-dashboard-URL").val(),
                            m = $("#global-student-dashboard-URL").val()) : "other-en" === e && (d = $("#english-privilege-club-dashboard-URL").val(),
                                h = $("#english-portal-dashboard-URL").val(),
                                m = $("#english-student-dashboard-URL").val()));
            "QRPC" == c ? a = "STUDENT" === getUserBasicInfoField("category") ? -1 != m.indexOf("html") ? m : m + ".html" : -1 != d.indexOf("html") ? d : d + ".html" : "PORTAL" == c && (a = -1 != h.indexOf("html") ? h : h + ".html");
            window.location = a
        }
    } else if (!a.startsWith("http://") || !c.test(a.split(".")[0].split("http://")[1]) || a.startsWith("https://") && c.test(a.split(".")[0].split("https://")[1]))
        c = getUserBasicInfoField("programCode"),
            "QRPC" == c ? a = "STUDENT" === getUserBasicInfoField("category") ? -1 != m.indexOf("html") ? m : m + ".html" : -1 != d.indexOf("html") ? d : d + ".html" : "PORTAL" == c && (a = -1 != h.indexOf("html") ? h : h + ".html"),
            b = !1,
            window.location = a
}
function fifaRedirectionMethod(a) {
    /^(http|https):\/\/[^ "]+$/.test(a) ? validateLinkBRedirect(a, !0) : $.ajax({
        url: "/qr/getShortURL?pagePath\x3d" + a,
        type: "get",
        contentType: "application/json; charset\x3dutf-8",
        dataType: "json",
        async: !1,
        cache: !1,
        success: function (b) {
            validateLinkBRedirect(b.shortURL, !0)
        }
    })
}
function afterCookieRedirection() {
    try {
        if (null != getActualCookieValue("ED") && void 0 != getActualCookieValue("ED")) {
            var a = getActualCookieValue("ED");
            document.cookie = "ED\x3dnull;expires\x3d" + (new Date((new Date).getTime() - 864E5)).toGMTString() + ";path\x3d/";
            validateLinkBRedirect(a, !1);
            return !1
        }
        var b = ""
            , c = ""
            , d = !1
            , e = ""
            , h = ""
            , m = ""
            , u = ""
            , k = "";
        if (-1 != location.search.indexOf("?")) {
            var f = location.search.split("?")[1]
                , n = f.split("\x26");
            $.each(n, function (C, O) {
                -1 != O.indexOf("resource\x3d") && (b = O.split("\x3d")[1]);
                -1 != O.indexOf("activityCode\x3d") && (c = O.split("\x3d")[1]);
                -1 != O.indexOf("redirectUri\x3d") && (h = O.split("\x3d")[1],
                    h = decodeURIComponent(h));
                -1 != O.indexOf("redirectUrl\x3d") && (m = O.split("\x3d")[1],
                    k = m = decodeURIComponent(m));
                -1 != O.indexOf("source\x3d") && (u = O.split("\x3d")[1],
                    u = decodeURIComponent(u))
            });
            if (3 === location.search.split("?").length) {
                var r = location.search.substr(1);
                if (-1 !== r.indexOf("?") && (b = r.split("resource\x3d")[1],
                    void 0 != b)) {
                    e = b.split("?")[1];
                    var q = e.split("\x26");
                    $.each(q, function (C, O) {
                        -1 != O.indexOf("activityCode\x3d") && "NSPBTM" === O.split("\x3d")[1] && (d = !0)
                    })
                }
            }
            void 0 === b && (b = "")
        }
        b.startsWith("%2Fcontent") && (b = decodeURIComponent(b));
        b.startsWith("/content") || -1 === getHostName(b).indexOf("qatarairways.com") && (b = "");
        var l = $("#qcal-adults-param").val()
            , t = $("#call-back-url").val()
            , g = getFFPCookieValue("loginRequest");
        isFPFlow && -1 == location.href.indexOf("loyalty_collections.mobile") && (b = "");
        if (-1 != location.href.indexOf("loyalty_collections.mobile") && "PORTAL" === getUserBasicInfoField("programCode")) {
            var p = Granite.I18n.get("PORTAL_ACCOUNT_PC_COLLECTIONS_ERROR");
            $("#loginErrorBlock #errorId").html(p);
            $("#loginErrorBlock .input-base-msg-box").show().focus();
            $("#global-spinner-container").removeClass("spinner-active");
            window.history.pushState("", "", location.pathname);
            handlePortalUser()
        } else {
            var w = $("#allowed-partlogin-codes").val();
            if (void 0 != w && "" != partnerCode && -1 != w.indexOf(partnerCode)) {
                if ("PORTAL" === getUserBasicInfoField("programCode"))
                    return handlePortalUser(),
                        !1;
                validateLinkBRedirect(partnerRedirectUrl, !0)
            } else if ("" !== b) {
                if (isRedirected = triggerEmailValidation(),
                    !isRedirected) {
                    if ("STUDENT" === getUserBasicInfoField("category") && 0 === $("#profile-otp-modal").length) {
                        var x = $("#isProfileCompleteSerURL").val()
                            , F = {
                                customerProfileId: getUserBasicInfoField("customerProfileId")
                            };
                        $.ajax({
                            url: x,
                            type: "POST",
                            contentType: "application/json; charset\x3dutf-8",
                            dataType: "json",
                            data: JSON.stringify(F),
                            headers: {
                                Authorization: "Bearer " + getFFPCookieValue("QRTOKEN")
                            },
                            cache: !1,
                            success: function (C) {
                                void 0 === C.errorObject && "INCOMPLETE" === C.studentCompleteness && (C = getActualCookieValue("QMILESSITE"),
                                    "new" === C ? window.location = $("#new-qrpc-sc-profile-URL").val() : "old" === C ? window.location = $("#old-qrpc-sc-profile-URL").val() : "other" === C ? window.location = $("#global-qrpc-sc-profile-URL").val() : "other-en" === C && (window.location = $("#english-qrpc-sc-profile-URL").val()))
                            }
                        })
                    }
                    var L = b.substring(b.indexOf("?"))
                        , M = b.substring(0, b.indexOf("?"));
                    -1 === b.indexOf("?") && (M = b);
                    $.ajax({
                        url: "/qr/getShortURL?pagePath\x3d" + M,
                        type: "get",
                        contentType: "application/json; charset\x3dutf-8",
                        dataType: "json",
                        async: !1,
                        cache: !1,
                        success: function (C) {
                            C = C.shortURL;
                            -1 != b.indexOf("isQcalRed") ? C = b : d && (C = C.substr(0, C.indexOf("?")) + "?" + e);
                            var O = window.location.search.substring(1)
                                , Y = O.replace("resource\x3d", "")
                                , Q = Y.indexOf("isQcalRed");
                            -1 !== b.indexOf("?") && b !== L && (C += L);
                            void 0 !== l && "" !== l || -1 !== Q ? (C = -1 !== Q ? Y.substring(0, Q - 1) + window.location.hash : O,
                                C = "QRPC" == getUserBasicInfoField("programCode") ? C : "PORTAL" == getUserBasicInfoField("programCode") ? portalDashboardURL + ".html#j-upgrade-portal-user" : "#",
                                C = '\x3ca href\x3d"' + C + '" id\x3d"anchorLoginLink" target\x3d"_self"\x3e\x3c/a\x3e',
                                $("#j-call-back-url-form").append(C),
                                $("#j-call-back-url-form").find("#anchorLoginLink")[0].click()) : void 0 !== C && "" !== C && C != b ? (O = -1 === C.indexOf("?"),
                                    C = -1 == C.indexOf("/postLogin") ? getUserBasicInfoField("swiftOnboardingRequired") && "QRPC" === getUserBasicInfoField("programCode") && -1 === C.indexOf(".onboardpopup.") ? C.replace(".html", ".onboardpopup.html") : C : getUserBasicInfoField("swiftOnboardingRequired") && "QRPC" === getUserBasicInfoField("programCode") && -1 === C.indexOf(".swiftpopup.") ? C.replace(".html", ".swiftpopup.html") : C,
                                    C = O ? C + "?qr_" + (new Date).getTime() : C + "\x26qrpl_" + (new Date).getTime(),
                                    validateLinkBRedirect(C, !1)) : (b = -1 == b.indexOf("/postLogin") ? getUserBasicInfoField("swiftOnboardingRequired") && "QRPC" === getUserBasicInfoField("programCode") && -1 === b.indexOf(".onboardpopup.") ? b.replace(".html", ".onboardpopup.html") : b : getUserBasicInfoField("swiftOnboardingRequired") && "QRPC" === getUserBasicInfoField("programCode") && -1 === b.indexOf(".swiftpopup.") ? b.replace(".html", ".swiftpopup.html") : b,
                                        0 === window.location.href.slice(window.location.href.indexOf("?") + 1).split("\x26").length ? validateLinkBRedirect(b + "?qr_" + (new Date).getTime(), !1) : validateLinkBRedirect(b, !1))
                        },
                        error: function (C, O, Y) {
                            b = -1 == b.indexOf("/postLogin") ? getUserBasicInfoField("swiftOnboardingRequired") && "QRPC" === getUserBasicInfoField("programCode") && -1 === b.indexOf(".onboardpopup.") ? b.replace(".html", ".onboardpopup.html") : b : getUserBasicInfoField("swiftOnboardingRequired") && "QRPC" === getUserBasicInfoField("programCode") && -1 === b.indexOf(".swiftpopup.") ? b.replace(".html", ".swiftpopup.html") : b;
                            0 === window.location.href.slice(window.location.href.indexOf("?") + 1).split("\x26").length ? validateLinkBRedirect(b + "?qr_" + (new Date).getTime(), !1) : validateLinkBRedirect(b, !1)
                        }
                    })
                }
            } else if ("" !== t) {
                var P = ""
                    , v = window.location.search.substring(1).split("\x26");
                for (g = 0; g < v.length; g++) {
                    var E = v[g].split("\x3d");
                    P += '\x3cinput type\x3d"hidden" value\x3d"' + E[1] + '" name\x3d"' + E[0] + '" /\x3e'
                }
                $("#j-cookie-call-back-url-form").empty();
                $("#j-cookie-call-back-url-form").append(P);
                validateLinkBRedirect(t, !0)
            } else if (null !== g && "" !== g && "undefined" !== typeof g || "QDF" === c || "QMILES_RETRIEVE_BKG" === c) {
                var J = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || -1 != navigator.userAgent.indexOf("Mobile")
                    , y = J ? $("#check-in-manage-mobile-link").val() : $("#check-in-manage-desktop-link").val();
                t = J ? "ffp" : "ffpNo";
                if (null !== g && "" !== g && "undefined" !== typeof g) {
                    var H = JSON.parse(g);
                    var N = H[0].activityCode;
                    var A = H[0].callBackUrl;
                    N = "RETRIEVE_BKG" === N ? "QMILES_RETRIEVE_BKG" : N
                } else
                    N = c,
                        A = "QDF" === c ? $("#qdf-redirection-page").val() : y;
                P = "";
                switch (N) {
                    case "QDF":
                        P += '\x3cinput type\x3d"hidden" value\x3d"' + getFFPCookieValue("QRTOKEN") + '" name\x3d"QRTOKEN" /\x3e';
                        P += '\x3cinput type\x3d"hidden" value\x3d"' + $("#page-locale").val() + '" name\x3d"selLang" /\x3e';
                        break;
                    case "QMILES_RETRIEVE_BKG":
                        P += '\x3cinput type\x3d"hidden" value\x3d"' + $("#page-locale").val() + '" name\x3d"selLang" /\x3e',
                            P += '\x3cinput type\x3d"hidden" value\x3d"' + getUserBasicInfoField("ffpNumber") + '" name\x3d"' + t + '" /\x3e',
                            P += '\x3cinput type\x3d"hidden" value\x3d"' + getUserBasicInfoField("lastName") + '" name\x3d"lastname" /\x3e'
                }
                document.cookie = "loginRequest\x3d;path\x3d/;domain\x3d.qatarairways.com.qa";
                $("#j-cookie-call-back-url-form").empty();
                $("#j-cookie-call-back-url-form").append(P);
                validateLinkBRedirect(A, !0)
            } else if ("ALMAHA" === c) {
                var z = "";
                f = location.search.replace("?", "");
                n = f.split("\x26");
                P = '\x3cinput type\x3d"hidden" value\x3d"' + getFFPCookieValue("QRTOKEN") + '" name\x3d"QRTOKEN" /\x3e';
                $.each(n, function (C, O) {
                    -1 != O.indexOf("url\x3d") ? (C = O.split("url\x3d")[1],
                        z = C.split("?")[0],
                        C = C.split("?")[1].split("\x26"),
                        1 === C.length && (P += '\x3cinput type\x3d"hidden" value\x3d"' + C[0].split("\x3d")[1] + '" name\x3d"' + C[0].split("\x3d")[0] + '" /\x3e')) : -1 === O.indexOf("activityCode\x3d") && (P += '\x3cinput type\x3d"hidden" value\x3d"' + O.split("\x3d")[1] + '" name\x3d"' + C.split("\x3d")[0] + '" /\x3e')
                });
                $("#j-cookie-call-back-url-form").empty();
                $("#j-cookie-call-back-url-form").append(P);
                validateLinkBRedirect(z, !0)
            } else if ("RDMCARNTL" === c || "RDMHTLSTAY" === c)
                if ("PORTAL" != getUserBasicInfoField("programCode")) {
                    var D = $("#travelShopSsoSerURL").val();
                    if (void 0 !== D) {
                        var R = $("#page-locale").val()
                            , T = getCookieValueAsIs("Language-Preferred");
                        null !== T && (R += "-" + T.split("/")[0]);
                        var V = {
                            customerProfileId: getUserBasicInfoField("customerProfileId"),
                            language: R,
                            activityCode: c
                        };
                        $.ajax({
                            url: D,
                            type: "POST",
                            contentType: "application/json; charset\x3dutf-8",
                            dataType: "json",
                            data: JSON.stringify(V),
                            headers: {
                                Authorization: "Bearer " + getFFPCookieValue("QRTOKEN")
                            },
                            cache: !1,
                            success: function (C) {
                                var O = C.errorObject;
                                void 0 === O ? (C = C.url,
                                    void 0 !== C && "" !== C ? "" !== h && (-1 == h.indexOf("?") ? validateLinkBRedirect(h + "?token\x3d" + C, !0) : validateLinkBRedirect(h + "\x26token\x3d" + C, !0)) : ($("#connection-failure-modal").modal(),
                                        logout())) : ($("#connection-failure-modal").modal(),
                                            void 0 !== digitalData && void 0 !== digitalData.page && void 0 !== digitalData.page.pageInfo && void 0 !== digitalData.page.pageInfo.pageType && (digitalData.page.pageInfo.pageType = "travel-shop-connection-failure"),
                                            errorClick(window.location.href, "travel-shop-sso-service-call", loginUserType, O[0].errorName),
                                            logout())
                            }
                        })
                    }
                } else
                    $("#travelshop-portal-user-error-message").removeClass("hide").addClass("show");
            else if (u === QRHFIFABKG || u === FIFAMCRSTE) {
                if ("PORTAL" === getUserBasicInfoField("programCode"))
                    return handlePortalUser(),
                        !1;
                if ("QRPC" === getUserBasicInfoField("programCode"))
                    if (isFifaFlow = !0,
                        u === QRHFIFABKG) {
                        var S = {
                            customerProfileId: getUserBasicInfoField("customerProfileId"),
                            activityCode: "FIFA"
                        };
                        $.ajax({
                            url: $("#serviceFifaSsoServiceURL").val(),
                            type: "POST",
                            contentType: "application/json; charset\x3dutf-8",
                            dataType: "json",
                            data: JSON.stringify(S),
                            headers: {
                                Authorization: "Bearer " + getFFPCookieValue("QRTOKEN")
                            },
                            cache: !1,
                            success: function (C) {
                                void 0 === C.errorObject ? (C = C.uniqueIdentifier,
                                    C = -1 != (/%/i.test(m) ? decodeURIComponent(m) : m).indexOf("?") ? m + "\x26uniqueIdentifier\x3d" + C : m + "?uniqueIdentifier\x3d" + C,
                                    fifaRedirectionMethod(C)) : void 0 != C.errorObject && void 0 != C.errorObject[0] && (hideSpinnerMobileApp($("#global-spinner-container"), "spinner-active"),
                                        C = Granite.I18n.get("" + C.errorObject[0].errorName),
                                        $("#loginErrorBlock #errorId").html(C),
                                        $("#loginErrorBlock .input-base-msg-box").show().focus())
                            }
                        })
                    } else
                        fifaRedirectionMethod(m)
            } else if ("HARMONIZEDUPGRADE" === getReqParam("source") || sourceCode === ANCILLARIES) {
                if ("PORTAL" === getUserBasicInfoField("programCode"))
                    return handlePortalUser(),
                        !1;
                fifaRedirectionMethod(k)
            } else {
                var U = getUserBasicInfoField("programCode"), X;
                null !== loginRequest && "" !== loginRequest && "undefined" !== typeof loginRequest && (X = $.parseJSON($.parseJSON(loginRequest)));
                delete_cookie("loginRequest", "/", ".qatarairways.com.qa");
                deleteCookie("otpTriggered");
                isRedirected = triggerEmailValidation();
                if (!isRedirected) {
                    "STUDENT" === getUserBasicInfoField("category") && 0 === $("#profile-otp-modal").length && (x = $("#isProfileCompleteSerURL").val(),
                        F = {
                            customerProfileId: getUserBasicInfoField("customerProfileId")
                        },
                        $.ajax({
                            url: x,
                            type: "POST",
                            contentType: "application/json; charset\x3dutf-8",
                            dataType: "json",
                            data: JSON.stringify(F),
                            headers: {
                                Authorization: "Bearer " + getFFPCookieValue("QRTOKEN")
                            },
                            cache: !1,
                            success: function (C) {
                                var O = C.errorObject;
                                void 0 === O && "INCOMPLETE" === C.studentCompleteness ? (C = getActualCookieValue("QMILESSITE"),
                                    "new" === C ? window.location = $("#new-qrpc-sc-profile-URL").val() : "old" === C ? window.location = $("#old-qrpc-sc-profile-URL").val() : "other" === C ? window.location = $("#global-qrpc-sc-profile-URL").val() : "other-en" === C && (window.location = $("#english-qrpc-sc-profile-URL").val())) : (void 0 !== digitalData && void 0 !== digitalData.page && void 0 !== digitalData.page.pageInfo && void 0 !== digitalData.page.pageInfo.pageType && (digitalData.page.pageInfo.pageType = "profile-complete-service-error"),
                                        errorClick(window.location.href, "profile-complete-service-call", loginUserType, O[0].errorName))
                            }
                        }));
                    "QRPC" != U && "PORTAL" != U || null === loginRequest || "" === loginRequest || "undefined" === typeof loginRequest || ($("#externalcallback-form").attr("action", X[0].callBackUrl),
                        $("#externalcallback-form :input[name\x3d'language']").attr("value", X[0].language),
                        $("#externalcallback-form").submit());
                    t = "";
                    switch (U) {
                        case "QRPC":
                            t = "STUDENT" === getUserBasicInfoField("category") ? "" !== studentDashboardURL ? studentDashboardURL : window.location.pathname : "" !== privilegeClubDashboardURL ? privilegeClubDashboardURL : window.location.pathname;
                            break;
                        case "PORTAL":
                            t = -1 == portalDashboardURL.indexOf("html") ? portalDashboardURL + ".html" : portalDashboardURL;
                            var W = $("#portalSuccessTrackingCode", "#join-form").val();
                            void 0 != W && "" != W && (t = t + "?" + W);
                            break;
                        case "QRBB":
                            t = $("#sme-dashboard-URL").val();
                            break;
                        case "NCP":
                            var I = getActualCookieValue("tausertype");
                            t = void 0 !== I && "true" === I ? $("#taUserDashboardURL").val() + ".html" : $("#ncp-dashboard-URL").val();
                            $("#sme-qrewards-wheel").addClass("hide");
                            break;
                        default:
                            location.reload()
                    }
                    t = -1 == t.indexOf("/postLogin") ? getUserBasicInfoField("swiftOnboardingRequired") && "QRPC" === getUserBasicInfoField("programCode") && -1 === t.indexOf(".onboardpopup.") ? t.replace(".html", ".onboardpopup.html") : t : getUserBasicInfoField("swiftOnboardingRequired") && "QRPC" === getUserBasicInfoField("programCode") && -1 === t.indexOf(".swiftpopup.") ? t.replace(".html", ".swiftpopup.html") : t;
                    validateLinkBRedirect(t, !1)
                }
            }
        }
    } catch (C) { }
}
function sendBXIdentity() {
    try {
        if (void 0 != getUserBasicInfoField("emailId") && "" != getUserBasicInfoField("emailId")) {
            var a = (void 0 != $(document).find("#langpagename").val() ? $(document).find("#langpagename").val() : "").toLocaleUpperCase()
                , b = void 0 != $("#boxeverCurrencyVal").val() ? $("#boxeverCurrencyVal").val() : ""
                , c = getUserBasicInfoField("dob");
            c = c.split("-");
            c = c[2] + "-" + c[1] + "-" + c[0] + "T00:00";
            var d = -1 != $("#runmodes").val().indexOf("uat") ? "qatarairways.com.qa" : "qatarairways.com";
            var e = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || -1 != navigator.userAgent.indexOf("Mobile") ? "MOBILE_WEB" : "WEB";
            var h = {
                identifiers: [{
                    provider: "FFP",
                    id: getUserBasicInfoField("ffpNumber")
                }],
                channel: e,
                type: "IDENTITY",
                page: "PC/login",
                language: a,
                currency: b,
                pos: d,
                browser_id: Boxever.getID(),
                title: void 0 != getUserBasicInfoField("title") ? getUserBasicInfoField("title") : "",
                firstname: void 0 != getUserBasicInfoField("firstName") ? getUserBasicInfoField("firstName") : "",
                lastname: void 0 != getUserBasicInfoField("lastName") ? getUserBasicInfoField("lastName") : "",
                email: void 0 !== getUserBasicInfoField("emailId") ? getUserBasicInfoField("emailId") : "",
                country: void 0 !== getUserBasicInfoField("country") ? getUserBasicInfoField("country") : "",
                nationality: "",
                dob: c
            };
            Boxever.eventCreate(h, function (m) { }, "json")
        }
    } catch (m) { }
}
function redirectUser() {
    void 0 == sessionStorage.getItem("profilePicImage") && null == sessionStorage.getItem("profilePicImage") || sessionStorage.removeItem("profilePicImage");
    void 0 == sessionStorage.getItem("qrOffers") && null == sessionStorage.getItem("qrOffers") || sessionStorage.removeItem("qrOffers");
    void 0 == sessionStorage.getItem("partnerOffers") && null == sessionStorage.getItem("partnerOffers") || sessionStorage.removeItem("partnerOffers");
    var a = "";
    -1 != location.search.indexOf("activityCode\x3dSME") && (a = "SME");
    a = {
        customerProfileId: getUserBasicInfoField("customerProfileId"),
        t: getFFPCookieValue("QRTOKEN"),
        programCode: getUserBasicInfoField("programCode"),
        "activity-code": a,
        j_destination: $("#j_destination").val(),
        j_alldestination: $("#j_alldestination").val()
    };
    $.ajax({
        url: "/qr/getAdditionalInfo",
        type: "POST",
        data: a,
        cache: !1,
        success: function (b) {
            sendBXIdentity();
            b = $("#j_socilMediaValue").val();
            loginSuccessEvent(window.location.href, "login-" + ("GOOGLE" == b ? "google" : "FACEBOOK" == b ? "facebook" : "TWITTER" == b ? "twitter" : loginUserNameType), loginUserType);
            "undefined" != typeof window.appInsights && window.appInsights.trackEvent({
                name: "LOGIN_COMPLETE",
                properties: {
                    custID: custProfId
                }
            });
            null !== getFFPCookieValue("QRTOKEN") && "" !== getFFPCookieValue("QRTOKEN") && void 0 !== getFFPCookieValue("QRTOKEN") || null === loginRequest || "" === loginRequest || "undefined" === typeof loginRequest || "RVE_BKG" != $.parseJSON(loginRequest)[0].activityCode || (isRevenueBooking = !0);
            if (isRevenueBooking)
                afterCookieRedirection();
            else {
                getUserBasicInfoField("swiftOnboardingRequired") && updateUserBasicInfoField("dashboardvisitedavios", "false");
                b = localStorage.getItem("lastfetchSVBDate");
                if (null === b || void 0 === b || "undefined" === b && null != getFFPCookieValue("QRTOKEN"))
                    tofetchsvbServiceCall(),
                        b = JSON.stringify({
                            customerProfileId: getUserBasicInfoField("customerProfileId"),
                            lastUpdatedDate: (new Date).getTime()
                        }),
                        b = fetchSVBcryptUserData(b),
                        localStorage.setItem("lastfetchSVBDate", b),
                        b = localStorage.getItem("lastfetchSVBDate");
                if (null != b)
                    try {
                        var c = (new Date).getTime()
                            , d = fetchSVBdecrypt(b);
                        if (null !== d)
                            try {
                                var e = JSON.parse(d);
                                24 < Math.floor((c - e.lastUpdatedDate) % 864E5 / 36E5) ? tofetchsvbServiceCall() : createSwiftLinkStatus()
                            } catch (h) {
                                createSwiftLinkStatus()
                            }
                        else
                            createSwiftLinkStatus()
                    } catch (h) {
                        createSwiftLinkStatus()
                    }
            }
        }
    })
}
function applyNSPChanges() {
    var a = $("#runmodes").val()
        , b = !1;
    if ("undefined" !== typeof a && (-1 < a.indexOf("publish") && (b = !0),
        b && null !== loginRequest && "" !== loginRequest && "undefined" !== typeof loginRequest)) {
        $(".smeContainer").remove();
        var c = $.parseJSON(loginRequest);
        $("#j-login-form :input[name\x3d'j_platform']").attr("value", c[0].platform);
        mainActivityCode = c[0].activityCode;
        if ("IOS" == c[0].platform || "ANDROID" == c[0].platform)
            mobilePlatform = c[0].platform,
                "false" == $("#mobileAppTriggerer").val() && ($("#mobileAppTriggerer").val("true"),
                    $("#mobileAppTriggerer").trigger("change"));
        $("#j-login-form :input[name\x3d'j_assignedDeviceId']").attr("value", c[0].assignedDeviceId);
        $("#j-login-form :input[name\x3d'j_authenticationMode']").attr("value", c[0].authenticationMode);
        if ("AUTONSPLOGIN" == c[0].activityCode || "AUTO_LOGIN" == c[0].activityCode)
            "WEB" == c[0].loginType.toUpperCase() ? ($("#j-login-form :input[name\x3d'j_username']").attr("value", c[0].loginUsername),
                $("#j-login-form :input[name\x3d'j_password']").attr("value", c[0].loginPassword),
                $("#j-login-form :input[name\x3d'j_submitType']").attr("value", "DIRECT")) : ($("#j-login-form :input[name\x3d'j_socialMediaEmail']").attr("value", c[0].loginSocialMediaEmail),
                    $("#j-login-form :input[name\x3d'j_socilMediaUniqId']").attr("value", c[0].loginSocialMediaUniqueId),
                    a = c[0].loginSocialMediaType,
                    a = void 0 != a && "FB" == a ? "FACEBOOK" : a,
                    a = void 0 != a && "GP" == a ? "GOOGLEPLUS" : a,
                    a = void 0 != a && "TW" == a ? "TWITTER" : a,
                    $("#j-login-form :input[name\x3d'j_submitType']").attr("value", a)),
                otherSitesEnrollment();
        else if ("LOGOUT" == c[0].activityCode) {
            var d = ""
                , e = "";
            $.each(c[0], function (k, f) {
                "callBackUrl" === k && (e = f);
                d += '\x3cinput type\x3d"hidden" value\x3d"' + f + '" name\x3d"' + k + '" /\x3e'
            });
            $("#j-cookie-call-back-url-form").attr("action", e);
            $("#j-cookie-call-back-url-form").empty();
            $("#j-cookie-call-back-url-form").append(d);
            signOut(!0, function (k) {
                $("#j-cookie-call-back-url-form").submit()
            })
        } else {
            a = "TRUE" == c[0].showGuest.toUpperCase();
            b = "TRUE" == c[0].transactional.toUpperCase();
            var h = "ENROLL_LOGIN" !== c[0].activityCode
                , m = c[0].showForgetPwd;
            m = void 0 !== m ? m.toUpperCase() : "";
            a && b && h ? ("" !== m ? ("TRUE" === m ? $("#forgot-password-link").removeClass("hide") : $("#forgot-password-link").addClass("hide"),
                $(".create-profile-popup").addClass("hide")) : $(".create-profile-popup, #forgot-password-link").addClass("hide"),
                $("#div_guestuserlogin").removeClass("hide"),
                $("#reset-account-link").addClass("hidden")) : a && h ? ("" !== m ? ("TRUE" === m ? $("#forgot-password-link").removeClass("hide") : $("#forgot-password-link").addClass("hide"),
                    $("#div_guestuserlogin").removeClass("hide")) : $("#div_guestuserlogin, #forgot-password-link").removeClass("hide"),
                    $(".create-profile-popup").addClass("hide"),
                    $("#reset-account-link").removeClass("hidden")) : h && ("" !== m ? ("TRUE" === m ? $("#forgot-password-link").removeClass("hide") : $("#forgot-password-link").addClass("hide"),
                        $(".create-profile-popup").removeClass("hide")) : $(".create-profile-popup, #forgot-password-link").removeClass("hide"),
                        $("#div_guestuserlogin").addClass("hide"),
                        $("#reset-account-link").removeClass("hidden"));
            a = $("#allowed-actlogin-codes").val() + ",AUTONSPLOGIN,AUTO_LOGIN";
            a = a.split(",");
            var u = c[0].keepAliveURL;
            b = c[0].keepAliveInterval;
            void 0 == b || null === b || "" === b ? b = 18E4 : void 0 !== b && 18E4 > b && (b = 18E4);
            void 0 != u && null != u && "" != u && void 0 != c[0].activityCode && null != c[0].activityCode && -1 != a.indexOf(c[0].activityCode) && setInterval(function () {
                keepAliveExternalSession(u, c[0].language)
            }, keepAliveInterval)
        }
    }
}
function handlePortalUser() {
    partnerClientId = partnerState = partnerCode = crc = mainFifaSource = mainFifaRedirectionUrl = mainActivityCode = "";
    isNSPFlow = !1;
    selLang = nspLanguage = keepAliveInterval = keepAliveURL = loginSocialMediaUniqueId = loginSocialMediaEmail = loginPassword = loginUsername = authenticationMode = assignedDeviceId = platform = loginSocialMediaType = showForgetPwd = transactional = showGuest = "";
    loginUserType = "privilegeclub-login";
    loginUserNameType = "";
    pageLocale = $("#page-locale").val();
    isEmbeddedLogin = "false";
    cashPlusAviosToken = "";
    hideSpinnerMobileApp($("#global-spinner-container"), "spinner-active");
    var a = $("#portalFifaErrorMessage").val()
        , b = '\x3ca href\x3d"javascript:void(0);" id\x3d"basicFifaLoginLink"\x3e' + $("#loginButtonInvoke").val() + "\x3c/a\x3e";
    a = a.replace("{0}", b);
    $("#portalloginfifainfo").html(a);
    $("#portalloginfifainfo").parent().removeClass("hide").focus();
    window.history.pushState({}, document.title, window.location.pathname);
    $.ajax({
        url: "/qr/Logout",
        type: "GET",
        data: {
            logOut: "logOut",
            type: "EXTERNAL"
        },
        cache: !1,
        success: function (c) {
            console.log("signout success!")
        }
    })
}
var istoFetchSVBServiceCalled = !1;
function tofetchsvbServiceCall() {
    istoFetchSVBServiceCalled = !0;
    if (null == getFFPCookieValue("QRTOKEN") || void 0 == getFFPCookieValue("QRTOKEN"))
        return !1;
    var a = $("#fetchSVBSerUrl").val();
    console.log("fetchSVBUrl", a);
    if (void 0 == a || "" == a || "#" == a)
        return !1;
    var b = getFFPCookieValue("QRTOKEN").substring(11, 22);
    b = encryptUserData(b);
    b = encodeURIComponent(b);
    b = {
        customerProfileId: getUserBasicInfoField("customerProfileId")
    };
    $.ajax({
        url: a,
        type: "POST",
        contentType: "application/json; charset\x3dutf-8",
        dataType: "json",
        data: JSON.stringify(b),
        headers: {
            Authorization: "Bearer " + getFFPCookieValue("QRTOKEN")
        },
        cache: !1,
        success: function (c) {
            void 0 === c.errorObject && (updateUserBasicInfoField("singleVirtualBalance", "" + c.singleVirtualBalance),
                c = c.linkedAccountsBalances,
                0 !== c.length ? document.cookie = "swiftLinkStatus\x3dtrue;path\x3d/" : 0 === c.length && (document.cookie = "swiftLinkStatus\x3dfalse;path\x3d/"),
                afterCookieRedirection())
        }
    })
}
function fetchSVBcryptUserData(a) {
    cryptoAlgorithmSelected = "AES";
    if ("AES" == cryptoAlgorithmSelected) {
        var b = getUserBasicInfoField("customerProfileId");
        if (void 0 == b)
            return null;
        b = CryptoJS.enc.Base64.parse(b);
        a = CryptoJS.AES.encrypt(a, b, {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7
        });
        a = CryptoJS.enc.Base64.stringify(a.ciphertext);
        console.log("AES encryption" + a);
        return a
    }
    if ("AES_GCM" == cryptoAlgorithmSelected)
        return console.log("string encrypt", a),
            AES_GCM_encrypt(a)
}
function fetchSVBdecrypt(a) {
    cryptoAlgorithmSelected = "AES";
    if ("AES" == cryptoAlgorithmSelected) {
        var b = getUserBasicInfoField("customerProfileId");
        if (void 0 == b || "" == b)
            return null;
        b = CryptoJS.enc.Base64.parse(b);
        var c = null;
        try {
            c = CryptoJS.AES.decrypt(a, b, {
                mode: CryptoJS.mode.ECB,
                padding: CryptoJS.pad.Pkcs7
            }).toString(CryptoJS.enc.Utf8)
        } catch (d) {
            console.log("decryption failed", d),
                console.log(a)
        }
        return c
    }
    if ("AES_GCM" == cryptoAlgorithmSelected)
        return AES_GCM_decrypt(a)
}
function createSwiftLinkStatus() {
    if (null == getFFPCookieValue("QRTOKEN") || void 0 == getFFPCookieValue("QRTOKEN"))
        return !1;
    var a = $("#fetchSVBSerUrl").val();
    if (void 0 == a || "" == a || "#" == a)
        return !1;
    var b = {
        customerProfileId: getUserBasicInfoField("customerProfileId")
    };
    $.ajax({
        url: a,
        type: "POST",
        contentType: "application/json; charset\x3dutf-8",
        dataType: "json",
        data: JSON.stringify(b),
        headers: {
            Authorization: "Bearer " + getFFPCookieValue("QRTOKEN")
        },
        cache: !1,
        success: function (c) {
            void 0 === c.errorObject && (c = c.linkedAccountsBalances,
                0 !== c.length ? document.cookie = "swiftLinkStatus\x3dtrue;path\x3d/" : 0 === c.length && (document.cookie = "swiftLinkStatus\x3dfalse;path\x3d/"));
            afterCookieRedirection()
        },
        error: function (c) {
            afterCookieRedirection()
        }
    })
}
function outageBanner(a) {
    var b = "object" == typeof a ? a : JSON.parse(a);
    isDateValid = getFromToDates(b);
    a.isOutageRequired && "true" === a.specificpages && isDateValid ? specificPageBanner(a) : a.isOutageRequired && "true" != a.specificpages && isDateValid ? allPageBanner() : ($("#loginBannerOutageContainer").addClass("hide"),
        $("#loginMainComponent").removeClass("hide"))
}
function allPageBanner() {
    $("#loginBannerOutageContainer").removeClass("hide");
    $("#loginMainComponent").addClass("hide");
    isOutageEnabled = !0
}
function getFromToDates(a) {
    var b = new Date(a.outageFromdate);
    a = new Date(a.outageTodate);
    b = b.getTime();
    a = a.getTime();
    var c = (new Date).getTime();
    c > b && c < a && (isDateValid = !0);
    return isDateValid
}
function specificPageBanner(a) {
    if ("string" === typeof a.pagepath || a.pagepath instanceof String) {
        var b = a.pagepath;
        var c = a.imagepath;
        displayOutageBanner(b, c)
    } else
        Array.isArray(a.pagepath) && (a = a.pagepath,
            a.map(function (d) {
                displayOutageBanner(d, c)
            }))
}
function displayOutageBanner(a, b) {
    var c = window.location.href;
    c = c.substring(c.lastIndexOf("/") + 1);
    c = c.substring(0, c.lastIndexOf(".html"));
    a = a.substring(1, a.lastIndexOf(".html"));
    c === a && ($("#loginBannerOutageContainer").removeClass("hide"),
        $("#loginMainComponent").addClass("hide"),
        b && $("#loginBannerOutageContainer .row img").attr("src", b),
        isOutageEnabled = !0)
}
function taRedirectUser(a) {
    console.log("taRedirectUser triggered!!");
    console.log("selectedCustomerProfileID\x3d" + a);
    taShowSpinner();
    $.ajax({
        url: "/qr/setTABasicInfo?customerProfile\x3d" + a,
        type: "GET",
        cache: !1,
        success: function (b) {
            console.log("basic info updated !!");
            setTimeout(function () {
                redirectUser()
            }, 4E3)
        }
    })
}
function taShowSpinner() {
    $(".ta-popup-choose-customer").html($(".global-loader").html())
}
function taPopulateCorpUserList(a) {
    console.log("taPopulateCorpUserList triggered!!");
    console.log("corpuserlistJSON\x3d" + a);
    a.map(function (b, c) {
        console.log("item\x3d" + b);
        console.log("item.companyName\x3d" + b.companyName);
        console.log("item.customerProfileId\x3d" + b.customerProfileId);
        var d = b.companyName.split("");
        c = d[0].charAt(0).toUpperCase();
        d = d[1].charAt(0).toUpperCase();
        var e = $("#taUserDashboardURL").val();
        console.log("taUserDashboardURL\x3d" + e);
        b = '\x3cdiv onclick\x3d"taRedirectUser(' + b.customerProfileId + ')" class\x3d"ta-agent-customer-list-name"\x3e\x3cspan class\x3d"ta-agent-name-icon"\x3e' + c + d + "\x3c/span\x3e" + b.companyName + "\x3c/div\x3e";
        $(".ta-popup-choose-customer .ta-popup-body").append(b)
    })
}
var secureOTPPref = "LOGIN";
custProfId = "";
var typeOfUser = "EXISTING"
    , otpFlow = "LOGIN";
$(document).ready(function () {
    function a() {
        try {
            var b = $("#otp-email").val();
            isEmailValid = isValidEmailID(b);
            return "" !== b && isEmailValid && b !== email ? !0 : !1
        } catch (c) {
            "undefined" != typeof window.appInsights && window.appInsights.trackEvent({
                name: "CONSOLE_ERROR",
                properties: {
                    custID: custProfId,
                    errorName: c,
                    functionName: "checkEmailupdate",
                    typeOfUser: typeOfUser,
                    otpFlow: otpFlow
                }
            })
        }
    }
    $("#otp-check-form").addClass("hide");
    $(document).on("change blur keypress keyup keydown", "#otp-telephone-number", function () {
        var b = $(this).val();
        $(".otp-email-empty-message").parent().find("#errorMsgOTPMobileZ").remove();
        0 == b.length || 0 != b.indexOf("0") && 0 !== Number(b) ? 5 > b.length ? ($(".otp-email-empty-message").parent().append('\x3cp id\x3d"errorMsgOTPMobileZ" style\x3d" color: red; border: 1px solid red; padding: 4px; "\x3e' + Granite.I18n.get("otp.login.mobilenumbermin") + "\x3c/p\x3e"),
            $("#otp-continue-button").css({
                "pointer-events": "none",
                opacity: "0.6"
            })) : ($(".otp-email-empty-message").parent().find("#errorMsgOTPMobileZ").remove(),
                $("#otp-continue-button").css({
                    "pointer-events": "auto",
                    opacity: "1"
                }),
                $(this).closest(".otp-telephone-number").css({
                    border: "1px solid transparent"
                })) : ($("#otp-continue-button").css({
                    "pointer-events": "none",
                    opacity: "0.6"
                }),
                    $(".otp-email-empty-message").parent().append('\x3cp id\x3d"errorMsgOTPMobileZ" style\x3d" color: red; border: 1px solid red; padding: 4px; "\x3e' + Granite.I18n.get("otp.login.mobilenumberzero") + "\x3c/p\x3e"),
                    $(this).closest(".otp-telephone-number").css({
                        border: "1px solid red"
                    }))
    });
    $(".otpLoginButton").on("click", function () {
        try {
            redirectUser()
        } catch (b) {
            "undefined" != typeof window.appInsights && window.appInsights.trackEvent({
                name: "CONSOLE_ERROR",
                properties: {
                    custID: custProfId,
                    errorName: b,
                    selector: "otpLoginButton",
                    typeOfUser: typeOfUser,
                    otpFlow: otpFlow
                }
            })
        }
    });
    $("#otp-email").on("blur", function () {
        a() ? ($("#login-otp-block").fadeOut("slow"),
            $("#otp-screen-spinner-container").hide(),
            $("#otp-modal-label").fadeOut("slow"),
            $("#emaileditalert").fadeIn("slow"),
            $("#otpemailchange-continue-btn").removeClass("hide"),
            $("#otp-continue-button").addClass("hide")) : ($("#emaileditalert").hide(),
                $("#otpemailchange-continue-btn").addClass("hide"),
                $("#otp-continue-button").removeClass("hide"),
                $("#login-otp-block").removeClass("hidden"),
                $("#otp-screen-spinner-container").removeAttr("style"))
    });
    $("#otpemailchange-continue-btn").on("click", function () {
        $("#login-otp-block").fadeOut("slow");
        $("#otp-screen-spinner-container").hide();
        $("#otp-modal-label").fadeOut("slow");
        $("#emaileditalert").fadeIn("slow");
        buttonClickAction(window.location.href, "continue button for OTP mail change", "login otp settings")
    });
    $("#email-cancel-button").on("click", function () {
        $("#login-otp-block").fadeIn("slow");
        $("#otp-modal-label").fadeIn("slow");
        $("#emaileditalert").fadeOut("slow");
        buttonClickAction(window.location.href, "Cancel button for OTP mail change", "login otp settings")
    });
    $("#email-confirm-button").on("click", function () {
        $("#emaileditalert").fadeOut("slow");
        $("#otp-modal-label").fadeIn("slow");
        $("#otp-screen-spinner-container").fadeIn("slow").removeClass("hidden");
        setTimeout(function () {
            $("#otp-continue-button").click()
        }, 1)
    });
    $("#otp-popup-close-button").click(function () {
        try {
            deleteCookie("otpFrom"),
                hideOTPErrorMessages(),
                location.reload()
        } catch (b) {
            "undefined" != typeof window.appInsights && window.appInsights.trackEvent({
                name: "CONSOLE_ERROR",
                properties: {
                    custID: custProfId,
                    errorName: b,
                    selector: "#otp-popup-close-button",
                    typeOfUser: typeOfUser,
                    otpFlow: otpFlow
                }
            })
        }
    });
    $("#otp-preference-0,#otp-preference-1").on("click", function () {
        try {
            $(".otp-channels").removeClass("hidden"),
                $(".otp-consent-checkbox").addClass("hidden"),
                "MYPROFILE" !== getActualCookieValue("otpFrom") ? $("#otp-continue-button").removeClass("disabled").removeAttr("disabled") : $("#sms-channel").prop("checked") || $("#email-channel").prop("checked") || $("#sms-email-channel").prop("checked") ? $("#otp-continue-button").removeClass("disabled").removeAttr("disabled") : $("#otp-continue-button").addClass("disabled").attr("disabled", "disabled")
        } catch (b) {
            "undefined" != typeof window.appInsights && window.appInsights.trackEvent({
                name: "CONSOLE_ERROR",
                properties: {
                    custID: custProfId,
                    errorName: b,
                    selector: "#otp-preference-0,#otp-preference-1",
                    typeOfUser: typeOfUser,
                    otpFlow: otpFlow
                }
            })
        }
    });
    $("#otp-preference-2").on("click", function () {
        try {
            $(".otp-channels").addClass("hidden"),
                $(".otp-consent-checkbox").removeClass("hidden"),
                $("#otp-consent-checkbox").prop("checked") ? $("#otp-continue-button").removeClass("disabled").removeAttr("disabled") : $("#otp-continue-button").addClass("disabled").attr("disabled", "disabled")
        } catch (b) {
            "undefined" != typeof window.appInsights && window.appInsights.trackEvent({
                name: "CONSOLE_ERROR",
                properties: {
                    custID: custProfId,
                    errorName: b,
                    selector: "#otp-preference-2",
                    typeOfUser: typeOfUser,
                    otpFlow: otpFlow
                }
            })
        }
    });
    $("#sms-channel").on("click", function () {
        try {
            $("#otp-countrycode-block").removeClass("hidden"),
                $("#otp-email-block").addClass("hidden"),
                $("#otp-telephone-number").val(mobileNumber),
                void 0 !== mobileNumber && "" !== mobileNumber && $("#otp-telephone-number").addClass("populated"),
                $("#otp-continue-button").removeClass("disabled").removeAttr("disabled"),
                $(".otp-mobile-number-empty-message, .otp-mobile-calling-code-empty-message, .otp-email-empty-message, .otp-mobile_email-empty-message, .otp-preference-service-error-message, .otp-invalid-email-message").attr("hidden", "")
        } catch (b) {
            "undefined" != typeof window.appInsights && window.appInsights.trackEvent({
                name: "CONSOLE_ERROR",
                properties: {
                    custID: custProfId,
                    errorName: b,
                    selector: "#sms-channel",
                    typeOfUser: typeOfUser,
                    otpFlow: otpFlow
                }
            })
        }
    });
    $("#email-channel").on("click", function () {
        try {
            $("#otp-countrycode-block").addClass("hidden"),
                $("#otp-email-block").removeClass("hidden"),
                $("#otp-email").val(email),
                void 0 !== email && "" !== email && $("#otp-email").addClass("populated"),
                $("#otp-continue-button").removeClass("disabled").removeAttr("disabled"),
                $(".otp-mobile-number-empty-message, .otp-mobile-calling-code-empty-message, .otp-email-empty-message, .otp-mobile_email-empty-message, .otp-preference-service-error-message, .otp-invalid-email-message").attr("hidden", "")
        } catch (b) {
            "undefined" != typeof window.appInsights && window.appInsights.trackEvent({
                name: "CONSOLE_ERROR",
                properties: {
                    custID: custProfId,
                    errorName: b,
                    selector: "#email-channel",
                    typeOfUser: typeOfUser,
                    otpFlow: otpFlow
                }
            })
        }
    });
    $("#sms-email-channel").on("click", function () {
        try {
            $("#otp-countrycode-block").removeClass("hidden"),
                $("#otp-email-block").removeClass("hidden"),
                $("#otp-telephone-number").val(mobileNumber),
                $("#otp-email").val(email),
                void 0 !== mobileNumber && "" !== mobileNumber && $("#otp-telephone-number").addClass("populated"),
                void 0 !== email && "" !== email && $("#otp-email").addClass("populated"),
                $("#otp-continue-button").removeClass("disabled").removeAttr("disabled"),
                $(".otp-mobile-number-empty-message, .otp-mobile-calling-code-empty-message, .otp-email-empty-message, .otp-mobile_email-empty-message, .otp-preference-service-error-message, .otp-invalid-email-message").attr("hidden", "")
        } catch (b) {
            "undefined" != typeof window.appInsights && window.appInsights.trackEvent({
                name: "CONSOLE_ERROR",
                properties: {
                    custID: custProfId,
                    errorName: b,
                    selector: "#sms-email-channel",
                    typeOfUser: typeOfUser,
                    otpFlow: otpFlow
                }
            })
        }
    });
    $("#otp-telephone-number").on("blur", function () {
        try {
            var b = $("#otp-telephone-number").val();
            $("#sms-channel").prop("checked") && "" === b ? ($(".otp-email-empty-message, .otp-mobile_email-empty-message, .otp-invalid-email-message").attr("hidden", ""),
                $(".otp-mobile-number-empty-message").removeClass("hidden").css({
                    background: "#f7e5e5",
                    color: "#b50000",
                    padding: "10px",
                    border: "1px solid"
                }).removeAttr("hidden").focus()) : $("#sms-email-channel").prop("checked") ? "" === $("#otp-email").val() && "" === b ? ($(".otp-mobile-number-empty-message, .otp-email-empty-message, .otp-invalid-email-message").attr("hidden", ""),
                    $(".otp-mobile_email-empty-message").removeClass("hidden").css({
                        background: "#f7e5e5",
                        color: "#b50000",
                        padding: "10px",
                        border: "1px solid"
                    }).removeAttr("hidden").focus()) : "" === b ? ($(".otp-email-empty-message, .otp-mobile_email-empty-message, .otp-invalid-email-message").attr("hidden", ""),
                        $(".otp-mobile-number-empty-message").removeClass("hidden").css({
                            background: "#f7e5e5",
                            color: "#b50000",
                            padding: "10px",
                            border: "1px solid"
                        }).removeAttr("hidden").focus()) : $(".otp-mobile-number-empty-message, .otp-email-empty-message, .otp-mobile_email-empty-message,.otp-invalid-email-message").attr("hidden", "") : $(".otp-mobile-number-empty-message, .otp-email-empty-message, .otp-mobile_email-empty-message,.otp-invalid-email-message").attr("hidden", "")
        } catch (c) {
            "undefined" != typeof window.appInsights && window.appInsights.trackEvent({
                name: "CONSOLE_ERROR",
                properties: {
                    custID: custProfId,
                    errorName: c,
                    selector: "#otp-telephone-number",
                    typeOfUser: typeOfUser,
                    otpFlow: otpFlow
                }
            })
        }
    });
    $("#otp-email").on("blur", function () {
        try {
            var b = $("#otp-email").val();
            isEmailValid = isValidEmailID(b);
            if ($("#email-channel").prop("checked"))
                "" === b ? ($(".otp-mobile-number-empty-message, .otp-mobile_email-empty-message, .otp-invalid-email-message").attr("hidden", ""),
                    $(".otp-email-empty-message").removeClass("hidden").css({
                        background: "#f7e5e5",
                        color: "#b50000",
                        padding: "10px",
                        border: "1px solid"
                    }).removeAttr("hidden").focus()) : $(".otp-mobile-number-empty-message, .otp-email-empty-message , .otp-mobile_email-empty-message, .otp-invalid-email-message").attr("hidden", ""),
                    isEmailValid ? $(".otp-mobile-number-empty-message, .otp-email-empty-message , .otp-mobile_email-empty-message, .otp-invalid-email-message").attr("hidden", "") : ($(".otp-mobile-number-empty-message,.otp-email-empty-message, .otp-mobile_email-empty-message, .otp-preference-service-error-message").attr("hidden", ""),
                        $(".otp-invalid-email-message").removeClass("hidden").css({
                            background: "#f7e5e5",
                            color: "#b50000",
                            padding: "10px",
                            border: "1px solid"
                        }).removeAttr("hidden").focus());
            else if ($("#sms-email-channel").prop("checked")) {
                var c = $("#otp-telephone-number").val();
                isEmailValid = isValidEmailID(b);
                "" === b || "" === c ? ($(".otp-mobile-number-empty-message, .otp-email-empty-message, .otp-invalid-email-message").attr("hidden", ""),
                    $(".otp-mobile_email-empty-message").removeClass("hidden").css({
                        background: "#f7e5e5",
                        color: "#b50000",
                        padding: "10px",
                        border: "1px solid"
                    }).removeAttr("hidden").focus()) : isEmailValid ? $(".otp-mobile-number-empty-message, .otp-email-empty-message , .otp-mobile_email-empty-message, .otp-invalid-email-message").attr("hidden", "") : ($(".otp-mobile-number-empty-message,.otp-email-empty-message, .otp-mobile_email-empty-message, .otp-preference-service-error-message").attr("hidden", ""),
                        $(".otp-invalid-email-message").removeClass("hidden").css({
                            background: "#f7e5e5",
                            color: "#b50000",
                            padding: "10px",
                            border: "1px solid"
                        }).removeAttr("hidden").focus())
            } else
                ($("#email-channel").prop("checked") || $("#sms-email-channel").prop("checked")) && "" !== b ? (isEmailValid = isValidEmailID(b)) ? $(".otp-invalid-email-message").attr("hidden", "") : ($(".otp-mobile-number-empty-message,.otp-email-empty-message, .otp-mobile_email-empty-message, .otp-preference-service-error-message").attr("hidden", ""),
                    $(".otp-invalid-email-message").removeClass("hidden").css({
                        background: "#f7e5e5",
                        color: "#b50000",
                        padding: "10px",
                        border: "1px solid"
                    }).removeAttr("hidden").focus()) : $(".otp-mobile-number-empty-message, .otp-email-empty-message , .otp-mobile_email-empty-message, .otp-invalid-email-message").attr("hidden", "")
        } catch (d) {
            "undefined" != typeof window.appInsights && window.appInsights.trackEvent({
                name: "CONSOLE_ERROR",
                properties: {
                    custID: custProfId,
                    errorName: d,
                    selector: "#otp-email",
                    typeOfUser: typeOfUser,
                    otpFlow: otpFlow
                }
            })
        }
    });
    $("#otp-consent-checkbox").on("click", function () {
        try {
            $("#otp-consent-checkbox").prop("checked") ? $("#otp-continue-button").removeClass("disabled").removeAttr("disabled") : $("#otp-continue-button").addClass("disabled").attr("disabled", "disabled")
        } catch (b) {
            "undefined" != typeof window.appInsights && window.appInsights.trackEvent({
                name: "CONSOLE_ERROR",
                properties: {
                    custID: custProfId,
                    errorName: b,
                    selector: "#otp-consent-checkbox",
                    typeOfUser: typeOfUser,
                    otpFlow: otpFlow
                }
            })
        }
    });
    $("#otp-continue-button").on("click", function () {
        try {
            $(".otp-preference-service-error-message").addClass("hidden");
            $("#otp-back-button").removeClass("hidden");
            $("#profile-settings-otp-cancel-button").addClass("hidden");
            hideOTPErrorMessages();
            showSpinnerMobileApp($("#otp-preferences-spinner-container"), "spinner-full-page");
            $("#otp-value").val("");
            existingPreference = getUserOtherInfoField("otpPreference");
            var b = $("#otp-preference-0").prop("checked") ? "LOGIN" : $("#otp-preference-1").prop("checked") ? "TRANSACTION" : $("#otp-preference-2").prop("checked") ? "BYPASS" : "";
            "" == b && (b = "LOGIN");
            newPreference = b;
            var c = getUserBasicInfoField("customerProfileId")
                , d = getUserBasicInfoField("ffpNumber")
                , e = $("#sms-channel").prop("checked") ? "SMS" : $("#email-channel").prop("checked") ? "EMAIL" : $("#sms-email-channel").prop("checked") ? "SMS_EMAIL" : "";
            newChannel = e;
            var h = $("#sms-channel").prop("checked") ? "sms" : $("#email-channel").prop("checked") ? "email" : $("#sms-email-channel").prop("checked") ? "sms+email" : ""
                , m = $("#otp-country-code").val()
                , u = ""
                , k = "";
            null !== m && void 0 !== m && (newCountryCallingCode = u = m.split("-")[0],
                newCountryCode = k = m.split("-")[1]);
            var f = $("#otp-telephone-number").val();
            newMobileNumber = f;
            var n = $("#otp-email").val();
            newEmail = n;
            var r = m = !1;
            if ("LOGIN" === b || "TRANSACTION" === b || "BYPASS" === b && "TRANSACTION" === existingPreference)
                if ("SMS" === e)
                    if ("" === f || "" === u)
                        m = !0,
                            "" === f && $(".otp-mobile-number-empty-message").removeClass("hidden").css({
                                background: "#f7e5e5",
                                color: "#b50000",
                                padding: "10px",
                                border: "1px solid"
                            }).removeAttr("hidden").focus(),
                            "" === u && $(".otp-mobile-calling-code-empty-message").removeClass("hidden").css({
                                background: "#f7e5e5",
                                color: "#b50000",
                                padding: "10px",
                                border: "1px solid"
                            }).removeAttr("hidden").focus();
                    else {
                        r = !0;
                        var q = $("#mobileShowMessageLogin").val();
                        q = q.replace("{0}", '\x3cspan class\x3d"bold-text"\x3e' + getShortMobileNumber(f, 4) + "\x3c/span\x3e");
                        q = q.replace("{2}", '\x3cspan class\x3d"bold-text"\x3e' + Granite.I18n.get("otp.timer.message") + "\x3c/span\x3e");
                        $(".mobile-help-text").removeClass("hidden").html(q);
                        $(".resend-mobile-help-text, .email-help-text, .resend-email-help-text,.mobile-email-help-text, .resend-mobile-email-help-text").addClass("hidden")
                    }
                else if ("EMAIL" === e)
                    if ("" === n)
                        m = !0,
                            $(".otp-email-empty-message").removeClass("hidden").css({
                                background: "#f7e5e5",
                                color: "#b50000",
                                padding: "10px",
                                border: "1px solid"
                            }).removeAttr("hidden").focus();
                    else {
                        (isEmailValid = isValidEmailID(n)) ? ($(".otp-invalid-email-message").attr("hidden", ""),
                            r = !0) : ($(".otp-mobile-number-empty-message,.otp-email-empty-message, .otp-mobile_email-empty-message, .otp-preference-service-error-message").attr("hidden", ""),
                                $(".otp-invalid-email-message").removeClass("hidden").css({
                                    background: "#f7e5e5",
                                    color: "#b50000",
                                    padding: "10px",
                                    border: "1px solid"
                                }).removeAttr("hidden").focus());
                        var l = $("#emailShowMessageLogin").val();
                        l = l.replace("{0}", '\x3cspan class\x3d"bold-text"\x3e' + getShortEmailID(n, 3) + "\x3c/span\x3e");
                        l = l.replace("{2}", '\x3cspan class\x3d"bold-text"\x3e' + Granite.I18n.get("otp.timer.message") + "\x3c/span\x3e");
                        $(".email-help-text").removeClass("hidden").html(l);
                        $(".mobile-help-text,.resend-mobile-help-text, .resend-email-help-text, .mobile-email-help-text, .resend-mobile-email-help-text").addClass("hidden")
                    }
                else {
                    if ("SMS_EMAIL" === e)
                        if ("" === f || "" === n || "" === u)
                            $(".otp-invalid-email-message").attr("hidden", ""),
                                m = !0,
                                "" === f && "" === n && "" === u ? $(".otp-mobile_email-empty-message").removeClass("hidden").css({
                                    background: "#f7e5e5",
                                    color: "#b50000",
                                    padding: "10px",
                                    border: "1px solid"
                                }).removeAttr("hidden").focus() : ("" === f && $(".otp-mobile-number-empty-message").removeClass("hidden").css({
                                    background: "#f7e5e5",
                                    color: "#b50000",
                                    padding: "10px",
                                    border: "1px solid"
                                }).removeAttr("hidden").focus(),
                                    "" === u && $(".otp-mobile-calling-code-empty-message").removeClass("hidden").css({
                                        background: "#f7e5e5",
                                        color: "#b50000",
                                        padding: "10px",
                                        border: "1px solid"
                                    }).removeAttr("hidden").focus(),
                                    "" === n && $(".otp-email-empty-message").removeClass("hidden").css({
                                        background: "#f7e5e5",
                                        color: "#b50000",
                                        padding: "10px",
                                        border: "1px solid"
                                    }).removeAttr("hidden").focus());
                        else {
                            (isEmailValid = isValidEmailID(n)) ? ($(".otp-invalid-email-message").attr("hidden", ""),
                                r = !0) : ($(".otp-mobile-number-empty-message, .otp-email-empty-message, .otp-mobile_email-empty-message, .otp-preference-service-error-message").attr("hidden", ""),
                                    $(".otp-invalid-email-message").removeClass("hidden").css({
                                        background: "#f7e5e5",
                                        color: "#b50000",
                                        padding: "10px",
                                        border: "1px solid"
                                    }).removeAttr("hidden").focus());
                            var t = $("#emailMobileShowMessageLogin").val();
                            t = t.replace("{0}", '\x3cspan class\x3d"bold-text"\x3e' + getShortMobileNumber(f, 4) + "\x3c/span\x3e");
                            t = t.replace("{1}", '\x3cspan class\x3d"bold-text"\x3e' + getShortEmailID(n, 3) + "\x3c/span\x3e");
                            t = t.replace("{2}", '\x3cspan class\x3d"bold-text"\x3e' + Granite.I18n.get("otp.timer.message") + "\x3c/span\x3e");
                            $(".mobile-email-help-text").html(t);
                            $(".mobile-email-help-text").removeClass("hidden");
                            $(".mobile-help-text, .resend-mobile-help-text, .email-help-text, .resend-email-help-text, .resend-mobile-email-help-text").addClass("hidden")
                        }
                }
            else
                m = !1,
                    r = !0;
            if (!m && r) {
                var g = $("#validateOTPPreferenceServiceURL").val();
                if ("" !== g && void 0 !== g) {
                    var p = {
                        customerProfileId: c
                    }
                        , w = getUserOtherInfoField("activity");
                    p = "BYPASS" === b ? {
                        customerProfileId: c,
                        secureOTP: b,
                        consentCheck: !0
                    } : {
                        customerProfileId: c,
                        secureOTP: secureOTPPref,
                        receiveOTP: e,
                        countryCode: k,
                        mobileNumber: f,
                        callingCode: u,
                        email: n,
                        activity: w
                    };
                    window.qrServiceRef.zone.run(function () {
                        Promise.all([window.qrServiceRef.postReq(g, p, loginReq_headers, "", {})]).then(function (x) {
                            if (!0 === x[0].valid)
                                if (deleteCookie("otpChannel"),
                                    $(".otp-preference-service-error-message").attr("hidden", ""),
                                    "BYPASS" === b && "TRANSACTION" !== existingPreference || "BYPASS" === existingPreference || "TRANSACTION" === b && "LOGIN" === existingPreference)
                                    saveNoOTPPreferences();
                                else {
                                    var F = $("#sendOTPServiceURL").val();
                                    if ("" !== F && void 0 !== F) {
                                        x = "LOGIN";
                                        void 0 !== $("#profile-otp-modal").val() && (x = "PROFUPD");
                                        var L = formSendOTPRequest(c, d, f, u, k, n, e, x);
                                        if (void 0 == getUserBasicInfoField("customerProfileId") || "" == getUserBasicInfoField("customerProfileId") || null == getUserBasicInfoField("customerProfileId"))
                                            return !1;
                                        window.qrServiceRef.zone.run(function () {
                                            Promise.all([window.qrServiceRef.postReq(F, L, loginReq_headers, "", {})]).then(function (M) {
                                                hideSpinnerMobileApp($("#otp-preferences-spinner-container"), "spinner-full-page");
                                                if (void 0 === M[0].errorObject)
                                                    if (showOtpTimer($("#otp-modal #otpcountdowntimer"), $("#otp-modal #otp-resend-button")),
                                                        $(".otp-preference-service-error-message").attr("hidden", ""),
                                                        sendOTPContactDetails = M[0].contactDetails,
                                                        $("#otp-popup-close-button, #otp-modal .login-secure-otp-block").addClass("hidden"),
                                                        $(".login-enter-otp-column").removeClass("hidden"),
                                                        "MYPROFILE" === getActualCookieValue("otpFrom")) {
                                                        M = getUserOtherInfoField("receiveOTP");
                                                        buttonClickAction(window.location.href, "send-OTP", "myprofile otp settings");
                                                        switch (M) {
                                                            case "SMS":
                                                                var P = $(".mobile-help-text");
                                                                var v = $("#mobileShowMessageLogin").val();
                                                                v = v.replace("{0}", '\x3cspan class\x3d"bold-text"\x3e' + getShortMobileNumber(f, 4) + "\x3c/span\x3e");
                                                                v = v.replace("{2}", '\x3cspan class\x3d"bold-text"\x3e' + Granite.I18n.get("otp.timer.message") + "\x3c/span\x3e");
                                                                $(".resend-mobile-help-text, .email-help-text, .resend-email-help-text, .mobile-email-help-text, .resend-mobile-email-help-text").addClass("hidden");
                                                                break;
                                                            case "EMAIL":
                                                                P = $(".email-help-text");
                                                                v = $("#emailShowMessageLogin").val();
                                                                v = v.replace("{0}", '\x3cspan class\x3d"bold-text"\x3e' + getShortEmailID(n, 3) + "\x3c/span\x3e");
                                                                v = v.replace("{2}", '\x3cspan class\x3d"bold-text"\x3e' + Granite.I18n.get("otp.timer.message") + "\x3c/span\x3e");
                                                                $(".mobile-help-text, .resend-mobile-help-text, .resend-email-help-text, .mobile-email-help-text, .resend-mobile-email-help-text").addClass("hidden");
                                                                break;
                                                            case "SMS_EMAIL":
                                                                P = $(".mobile-email-help-text"),
                                                                    v = $("#emailMobileShowMessageLogin").val(),
                                                                    v = v.replace("{0}", '\x3cspan class\x3d"bold-text"\x3e' + getShortMobileNumber(f, 4) + "\x3c/span\x3e"),
                                                                    v = v.replace("{1}", '\x3cspan class\x3d"bold-text"\x3e' + getShortEmailID(n, 3) + "\x3c/span\x3e"),
                                                                    v = v.replace("{2}", '\x3cspan class\x3d"bold-text"\x3e' + Granite.I18n.get("otp.timer.message") + "\x3c/span\x3e"),
                                                                    $(".mobile-help-text, .resend-mobile-help-text, .email-help-text, .resend-email-help-text, .resend-mobile-email-help-text").addClass("hidden")
                                                        }
                                                        $(P).removeClass("hidden").html(v)
                                                    } else
                                                        void 0 !== digitalData && void 0 !== digitalData.page && void 0 !== digitalData.page.pageComponent && void 0 !== digitalData.page.pageComponent.componentAvailable && (digitalData.page.pageComponent.componentAvailable = h),
                                                            buttonClickAction(window.location.href, "send-OTP", "login otp settings");
                                                else
                                                    void 0 !== digitalData && void 0 !== digitalData.page && void 0 !== digitalData.page.pageInfo && void 0 !== digitalData.page.pageInfo.pageType && (digitalData.page.pageInfo.pageType = "send-OTP-error"),
                                                        errorClick(window.location.href, "send-OTP", "login", M[0].errorObject[0].errorName),
                                                        "undefined" != typeof window.appInsights && window.appInsights.trackEvent({
                                                            name: "SEND_OTP_ERROR",
                                                            properties: {
                                                                custID: custProfId,
                                                                errorName: M[0].errorObject[0].errorName,
                                                                typeOfUser: typeOfUser,
                                                                otpFlow: otpFlow
                                                            }
                                                        }),
                                                        $("#otp-modal .login-secure-otp-block").removeClass("hidden"),
                                                        $(".login-enter-otp-column").addClass("hidden"),
                                                        $(".otp-preference-service-error-message").removeClass("hidden").html(M[0].errorObject[0].errorDescription),
                                                        $(".otp-preference-service-error-message").css({
                                                            background: "#f7e5e5",
                                                            color: "#b50000",
                                                            padding: "10px",
                                                            border: "1px solid"
                                                        }).removeAttr("hidden").focus(),
                                                        "SESSION_EXPIRED" === M[0].errorObject[0].errorName && ($(".otp-preference-service-error-message").fadeOut(3E3),
                                                            setTimeout(function () {
                                                                redirectToLogin(loginPage)
                                                            }, 3E3))
                                            })
                                        })
                                    }
                                }
                            else
                                hideSpinnerMobileApp($("#otp-preferences-spinner-container"), "spinner-full-page"),
                                    $("#otp-modal .login-secure-otp-block").removeClass("hidden"),
                                    a() && ($("#login-otp-block").fadeIn("slow"),
                                        $("#otp-screen-spinner-container").hide(),
                                        $("#otp-modal-label").fadeIn("slow"),
                                        $("#emaileditalert").fadeOut("slow"),
                                        $("#otpemailchange-continue-btn").addClass("hide"),
                                        $("#otp-continue-button").removeClass("hide")),
                                    $(".login-enter-otp-column").addClass("hidden"),
                                    $(".otp-preference-service-error-message").html(x[0].errorObject[0].errorDescription),
                                    $(".otp-preference-service-error-message").removeClass("hidden").css({
                                        background: "#f7e5e5",
                                        color: "#b50000",
                                        padding: "10px",
                                        border: "1px solid"
                                    }).removeAttr("hidden").focus(),
                                    void 0 != x[0] && void 0 != x[0].errorObject && void 0 != x[0].errorObject[0] && (void 0 !== digitalData && void 0 !== digitalData.page && void 0 !== digitalData.page.pageInfo && void 0 !== digitalData.page.pageInfo.pageType && (digitalData.page.pageInfo.pageType = "validate-OTP-preference-error"),
                                        errorClick(window.location.href, "validate-OTP-preference", "join-now", x[0].errorObject[0].errorName),
                                        "undefined" != typeof window.appInsights && window.appInsights.trackEvent({
                                            name: "VALIDATE_OTP_PREFERENCE_ERROR",
                                            properties: {
                                                custID: custProfId,
                                                errorName: x[0].errorObject[0].errorName,
                                                typeOfUser: typeOfUser,
                                                otpFlow: otpFlow
                                            }
                                        }))
                        })
                    })
                } else
                    "undefined" != typeof window.appInsights && window.appInsights.trackEvent({
                        name: "VALIDATE_OTP_PREFERENCE_NO_SER_URL",
                        properties: {
                            custID: custProfId,
                            typeOfUser: typeOfUser,
                            otpFlow: otpFlow
                        }
                    })
            } else
                hideSpinnerMobileApp($("#otp-preferences-spinner-container"), "spinner-full-page"),
                    "" == $("#otp-telephone-number").val() && $(".otp-mobile-number-empty-message").removeClass("hidden").removeAttr("hidden").css({
                        color: "red"
                    }),
                    "" == $("#otp-country-code").val() && $(".otp-mobile-calling-code-empty-message").removeClass("hidden").removeAttr("hidden").css({
                        color: "red"
                    }),
                    "" == $("#otp-email").val() && $(".otp-email-empty-message").removeClass("hidden").removeAttr("hidden")
        } catch (x) {
            "undefined" != typeof window.appInsights && window.appInsights.trackEvent({
                name: "CONSOLE_ERROR",
                properties: {
                    custID: custProfId,
                    errorName: x,
                    selector: "#otp-continue-button",
                    typeOfUser: typeOfUser,
                    otpFlow: otpFlow
                }
            })
        }
    });
    $("#otp-resend-button").on("click", function () {
        try {
            showSpinnerMobileApp($("#otp-screen-spinner-container"), "spinner-full-page");
            hideOTPErrorMessages();
            var b = getActualCookieValue("tausertype")
                , c = $("#sendOTPServiceURL").val();
            void 0 !== b && "" != b && "true" === b && (c = $("#sendCorpOTPServiceURL").val());
            var d = getUserBasicInfoField("customerProfileId")
                , e = getUserBasicInfoField("ffpNumber")
                , h = ""
                , m = getUserOtherInfoField("otpPreference");
            "NEW" === m || "" === m ? ($("#otp-preference-0").prop("checked") || $("#otp-preference-1").prop("checked") || $("#otp-preference-2").prop("checked"),
                h = $("#sms-channel").prop("checked") ? "SMS" : $("#email-channel").prop("checked") ? "EMAIL" : $("#sms-email-channel").prop("checked") ? "SMS_EMAIL" : "") : h = newChannel;
            m = "LOGIN";
            void 0 !== $("#profile-otp-modal").val() && (m = "PROFUPD");
            var u = newMobileNumber
                , k = newEmail
                , f = formSendOTPRequest(d, e, u, newCountryCallingCode, newCountryCode, k, h, m, b)
                , n = getUserBasicInfoField("programCode")
                , r = getUserBasicInfoField("loggedInUser");
            if ("QRBB" === n || "NCP" === n)
                f.programCode = n,
                    f.userName = r;
            if (void 0 == getUserBasicInfoField("customerProfileId") || "" == getUserBasicInfoField("customerProfileId") || null == getUserBasicInfoField("customerProfileId"))
                return !1;
            window.qrServiceRef.zone.run(function () {
                Promise.all([window.qrServiceRef.postReq(c, f, loginReq_headers, "", {})]).then(function (q) {
                    hideSpinnerMobileApp($("#otp-screen-spinner-container"), "spinner-full-page");
                    if (void 0 === q[0].errorObject) {
                        showOtpTimer($("#otp-modal #otpcountdowntimer"), $("#otp-modal #otp-resend-button"));
                        $(".otp-preference-service-error-message").attr("hidden", "");
                        sendOTPContactDetails = q[0].contactDetails;
                        var l = !1;
                        switch (getActualCookieValue("otpFrom")) {
                            case "MYPROFILE":
                                l = !0;
                                q = getUserOtherInfoField("receiveOTP");
                                buttonClickAction(window.location.href, "resend-OTP ", "myprofile otp settings");
                                break;
                            default:
                                l = !1,
                                    q = h,
                                    buttonClickAction(window.location.href, "resend-OTP ", "login otp settings")
                        }
                        switch (q) {
                            case "SMS":
                                var t = l ? $("#otp-modal .resend-mobile-help-text") : $(".resend-mobile-help-text");
                                var g = l ? $("#otp-modal .resend-mobile-help-text").text() : $(".resend-mobile-help-text").text();
                                g = g.replace("{0}", '\x3cspan class\x3d"bold-text"\x3e' + getShortMobileNumber(u, 4) + "\x3c/span\x3e");
                                g = g.replace("{2}", '\x3cspan class\x3d"bold-text"\x3e' + Granite.I18n.get("otp.timer.message") + "\x3c/span\x3e");
                                $(".mobile-help-text,.email-help-text,.mobile-email-help-text,.resend-email-help-text, .resend-mobile-email-help-text").addClass("hidden");
                                break;
                            case "EMAIL":
                                t = l ? $("#otp-modal .resend-email-help-text") : $(".resend-email-help-text");
                                g = l ? $("#otp-modal .resend-email-help-text").text() : $(".resend-email-help-text").text();
                                g = g.replace("{0}", '\x3cspan class\x3d"bold-text"\x3e' + getShortEmailID(k, 3) + "\x3c/span\x3e");
                                g = g.replace("{2}", '\x3cspan class\x3d"bold-text"\x3e' + Granite.I18n.get("otp.timer.message") + "\x3c/span\x3e");
                                $(".mobile-help-text, .resend-mobile-help-text, .email-help-text, .mobile-email-help-text, .resend-mobile-email-help-text").addClass("hidden");
                                break;
                            case "SMS_EMAIL":
                                t = l ? $("#otp-modal .resend-mobile-email-help-text") : $(".resend-mobile-email-help-text"),
                                    g = l ? $("#otp-modal .resend-mobile-email-help-text").text() : $(".resend-mobile-email-help-text").text(),
                                    g = g.replace("{0}", '\x3cspan class\x3d"bold-text"\x3e' + getShortMobileNumber(u, 4) + "\x3c/span\x3e"),
                                    g = g.replace("{1}", '\x3cspan class\x3d"bold-text"\x3e' + getShortEmailID(k, 3) + "\x3c/span\x3e"),
                                    g = g.replace("{2}", '\x3cspan class\x3d"bold-text"\x3e' + Granite.I18n.get("otp.timer.message") + "\x3c/span\x3e"),
                                    $(".mobile-help-text, .email-help-text, .resend-mobile-help-text, .resend-email-help-text, .mobile-email-help-text").addClass("hidden")
                        }
                        $(t).empty().removeClass("hidden").html(g)
                    } else
                        void 0 !== digitalData && void 0 !== digitalData.page && void 0 !== digitalData.page.pageInfo && void 0 !== digitalData.page.pageInfo.pageType && (digitalData.page.pageInfo.pageType = "send-OTP-error"),
                            errorClick(window.location.href, "send-OTP", "login", q[0].errorObject[0].errorName),
                            "undefined" != typeof window.appInsights && window.appInsights.trackEvent({
                                name: "RESEND_OTP_ERROR",
                                properties: {
                                    custID: custProfId,
                                    errorName: q[0].errorObject[0].errorName,
                                    typeOfUser: typeOfUser,
                                    otpFlow: otpFlow
                                }
                            }),
                            "FFP_MAX_OTP_ATTEMPTS_EXCEEDED_FOR_TIME" === q[0].errorObject[0].errorName ? $.ajax({
                                url: "/qr/Logout",
                                type: "POST",
                                data: {
                                    logOut: "logOut",
                                    resource: "/en/Privilege-Club/loginpage.html"
                                },
                                cache: !1,
                                success: function (p) {
                                    void 0 != p && void 0 != p.errorObject && void 0 != p.errorObject[0] && (void 0 !== digitalData && void 0 !== digitalData.page && void 0 !== digitalData.page.pageInfo && void 0 !== digitalData.page.pageInfo.pageType && (digitalData.page.pageInfo.pageType = "send-otp-maximum-attempts"),
                                        errorClick(window.location.href, "send-OTP", "login", p.errorObject[0].errorName));
                                    $(".otp-verify-account-locked-error-message").removeClass("hidden").attr("style", "background: rgb(247, 229, 229); color: rgb(181, 0, 0); padding: 10px; border: 1px solid;");
                                    $("#otp_acnt_locked_login").attr("href", $("#loginPage").val());
                                    $(".otp-receive-help,#otp-resend-button, #profile-settings-otp-resend-button,#otp-verify-button").addClass("hide");
                                    $(".login-enter-otp-column #otp-value").closest(".input-base").css({
                                        "pointer-events": "none"
                                    });
                                    $(".login-enter-otp-column #otp-value").closest(".input-base").find(".input-base-bg").css({
                                        "background-color": "#cccccc"
                                    })
                                },
                                error: function (p) {
                                    $(".otp-verify-account-locked-error-message").removeClass("hidden").attr("style", "background: rgb(247, 229, 229); color: rgb(181, 0, 0); padding: 10px; border: 1px solid;");
                                    $("#otp_acnt_locked_login").attr("href", $("#loginPage").val());
                                    $(".otp-receive-help,#otp-resend-button, #profile-settings-otp-resend-button,#otp-verify-button").addClass("hide");
                                    $(".login-enter-otp-column #otp-value").closest(".input-base").css({
                                        "pointer-events": "none"
                                    });
                                    $(".login-enter-otp-column #otp-value").closest(".input-base").find(".input-base-bg").css({
                                        "background-color": "#cccccc"
                                    })
                                }
                            }) : ($(".otp-verify-service-error-message").html(q[0].errorObject[0].errorDescription),
                                $(".otp-verify-service-error-message").removeClass("hidden").css({
                                    background: "#f7e5e5",
                                    color: "#b50000",
                                    padding: "10px",
                                    border: "1px solid"
                                }).removeAttr("hidden").focus(),
                                "SESSION_EXPIRED" === q[0].errorObject[0].errorName && ($(".otp-verify-service-error-message").fadeOut(3E3),
                                    setTimeout(function () {
                                        redirectToLogin(loginPage)
                                    }, 3E3)))
                })
            })
        } catch (q) {
            "undefined" != typeof window.appInsights && window.appInsights.trackEvent({
                name: "CONSOLE_ERROR",
                properties: {
                    custID: custProfId,
                    errorName: q,
                    selector: "#otp-resend-button",
                    typeOfUser: typeOfUser,
                    otpFlow: otpFlow
                }
            })
        }
    });
    $("#otp-back-button").on("click", function () {
        try {
            hideOTPErrorMessages(),
                hideVerifyOTPErrorMessages(),
                $("#otp-modal .login-secure-otp-block").removeClass("hidden"),
                $(".login-enter-otp-column").addClass("hidden"),
                $("#login-otp-block").removeAttr("style"),
                "MYPROFILE" === getActualCookieValue("otpFrom") && $("#otp-popup-close-button").removeClass("hidden")
        } catch (b) {
            "undefined" != typeof window.appInsights && window.appInsights.trackEvent({
                name: "CONSOLE_ERROR",
                properties: {
                    custID: custProfId,
                    errorName: b,
                    selector: "#otp-back-button",
                    typeOfUser: typeOfUser,
                    otpFlow: otpFlow
                }
            })
        }
        buttonClickAction(window.location.href, "Go back to OTP settings", "login otp settings")
    });
    $("#otp-verify-button").on("click", function () {
        try {
            if (6 < $(".login-enter-otp-column #otp-value").val().length)
                return hideSpinnerMobileApp($("#otp-screen-spinner-container"), "spinner-full-page"),
                    hideVerifyOTPErrorMessages(),
                    $(".invalid-otp-error-message").attr("hidden", "").removeClass("hidden").css({
                        background: "#f7e5e5",
                        color: "#b50000",
                        padding: "10px",
                        border: "1px solid"
                    }).removeAttr("hidden").focus(),
                    !1;
            showSpinnerMobileApp($("#otp-screen-spinner-container"), "spinner-full-page");
            var b = $("#verifyOTPServiceURL").val()
                , c = getActualCookieValue("tausertype");
            void 0 !== c && "" != c && "true" === c && (b = $("#verifyCorpOTPServiceURL").val());
            var d = getUserBasicInfoField("ffpNumber");
            if ("" !== b && void 0 !== b) {
                var e = getUserBasicInfoField("customerProfileId")
                    , h = $(".login-enter-otp-column #otp-value").val();
                $.each(sendOTPContactDetails, function (k, f) {
                    f.otpValue = h
                });
                if (void 0 !== h && "" !== h) {
                    hideVerifyOTPErrorMessages();
                    var m = "LOGIN";
                    void 0 !== $("#profile-otp-modal").val() && (m = "PROFUPD");
                    void 0 !== c && "" != c && "true" === c && (d = e = "");
                    var u = {
                        customerProfileId: e,
                        activity: m,
                        ffpNumber: d,
                        contactDetails: sendOTPContactDetails
                    };
                    window.qrServiceRef.zone.run(function () {
                        Promise.all([window.qrServiceRef.postReq(b, u, loginReq_headers, "", {})]).then(function (k) {
                            if (void 0 === k[0].errorObject) {
                                var f = k[0].cotactDetails
                                    , n = !1;
                                if (n = 1 == f.length ? f[0].otpVerified : f[0].otpVerified || f[1].otpVerified)
                                    if (skipSaveOtpPreference) {
                                        hideOTPErrorMessages();
                                        hideSpinnerMobileApp($("#otp-screen-spinner-container"), "spinner-full-page");
                                        $("#otp-verify-success-message").removeAttr("hidden").removeClass("hidden").fadeOut(4E3);
                                        showSpinnerMobileApp($("#otp-screen-spinner-container"), "spinner-full-page");
                                        buttonClickAction(window.location.href, "verify-OTP ", "login otp");
                                        k = getActualCookieValue("tausertype");
                                        f = getFFPCookieValue("corpuserlist");
                                        console.log("tausertype\x3d " + k);
                                        console.log("corpUserList\x3d " + f);
                                        var r;
                                        f && (r = JSON.parse(f));
                                        console.log("corpuserlistJSON\x3d " + r);
                                        r && 1 < r.length && k && "" != k && "true" === k ? (console.log("more than one corp!!"),
                                            $("#otp-modal").modal("hide"),
                                            $("#ta-popup-choose-customer").modal("show", {
                                                backdrop: "static",
                                                keyboard: !1
                                            }),
                                            taPopulateCorpUserList(r)) : setTimeout(function () {
                                                redirectUser()
                                            }, 4E3)
                                    } else {
                                        hideOTPErrorMessages();
                                        hideVerifyOTPErrorMessages();
                                        var q = $("#saveOTPPreferenceServiceURL").val();
                                        if ("" !== q && void 0 !== q) {
                                            var l = {
                                                customerProfileId: e
                                            };
                                            r = getUserOtherInfoField("activity");
                                            var t = "";
                                            t = $("#otp-preference-0").prop("checked") ? "LOGIN" : $("#otp-preference-1").prop("checked") ? "TRANSACTION" : $("#otp-preference-2").prop("checked") ? "BYPASS" : "";
                                            "" === t && "" != secureOTPChannel ? t = secureOTPChannel : "" === t && "" != getUserOtherInfoField("otpPreference") ? t = getUserOtherInfoField("otpPreference") : "" === t && (t = "LOGIN");
                                            var g = "";
                                            g = $("#sms-channel").prop("checked") ? "SMS" : $("#email-channel").prop("checked") ? "EMAIL" : $("#sms-email-channel").prop("checked") ? "SMS_EMAIL" : "";
                                            "" === g && "" != receiveOTPChannel ? g = receiveOTPChannel : "" === g && (g = newChannel);
                                            k = $("#otp-country-code").val();
                                            var p = ""
                                                , w = "";
                                            null !== k && void 0 !== k && "" !== k ? (p = k.split("-")[0],
                                                w = k.split("-")[1]) : (p = countryCallingCode,
                                                    w = countryCode);
                                            var x = $("#otp-telephone-number").val();
                                            "" === x && "undefined" != typeof mobileNumber ? x = mobileNumber : "" === x && (x = newMobileNumber);
                                            var F = $("#otp-email").val();
                                            "" === F && "undefined" != typeof email ? F = email : "" === F && (F = newEmail);
                                            l = "BYPASS" === t ? {
                                                customerProfileId: e,
                                                secureOTP: t,
                                                consentCheck: !0
                                            } : {
                                                customerProfileId: e,
                                                secureOTP: secureOTPPref,
                                                receiveOTP: g,
                                                countryCode: w,
                                                mobileNumber: x,
                                                callingCode: p,
                                                email: F,
                                                activity: r
                                            };
                                            window.qrServiceRef.zone.run(function () {
                                                Promise.all([window.qrServiceRef.postReq(q, l, loginReq_headers, "", {})]).then(function (L) {
                                                    if (!0 === L[0].status) {
                                                        updateUserOtherInfoField("otpPreference", t);
                                                        hideVerifyOTPErrorMessages();
                                                        "SMS_EMAIL" !== g && "EMAIL" !== g || updateUserBasicInfoField("emailId", F);
                                                        if ("SMS_EMAIL" === g || "SMS" === g)
                                                            updateUserBasicInfoField("mobile", x),
                                                                updateUserBasicInfoField("mobileCountryCode", w),
                                                                updateUserBasicInfoField("mobileCallingCode", p);
                                                        "MYPROFILE" === getActualCookieValue("otpFrom") ? (deleteCookie("otpFrom"),
                                                            $("#otp-settings-success-message").removeClass("hidden").removeAttr("hidden").fadeOut(4E3),
                                                            buttonClickAction(window.location.href, "verify-OTP ", "myprofile-otp"),
                                                            setTimeout(function () {
                                                                location.reload()
                                                            }, 4E3)) : (hideSpinnerMobileApp($("#otp-screen-spinner-container"), "spinner-full-page"),
                                                                $("#otp-verify-success-message").removeAttr("hidden").removeClass("hidden").fadeOut(4E3),
                                                                showSpinnerMobileApp($("#otp-screen-spinner-container"), "spinner-full-page"),
                                                                L = a(),
                                                                buttonClickAction(window.location.href, "verify-OTP ", "login otp"),
                                                                "NEW" == secureOTPChannel && L ? setTimeout(function () {
                                                                    logout()
                                                                }, 4E3) : setTimeout(function () {
                                                                    redirectUser()
                                                                }, 4E3));
                                                        hideSpinnerMobileApp($("#otp-screen-spinner-container"), "spinner-full-page")
                                                    } else
                                                        hideSpinnerMobileApp($("#otp-screen-spinner-container"), "spinner-full-page"),
                                                            $(".otp-verify-service-error-message").removeClass("hidden").html(L[0].errorObject[0].errorDescription),
                                                            $(".otp-verify-service-error-message").css({
                                                                background: "#f7e5e5",
                                                                color: "#b50000",
                                                                padding: "10px",
                                                                border: "1px solid"
                                                            }).removeAttr("hidden").focus(),
                                                            void 0 != L[0] && void 0 != L[0].errorObject && void 0 != L[0].errorObject[0] && (void 0 !== digitalData && void 0 !== digitalData.page && void 0 !== digitalData.page.pageInfo && void 0 !== digitalData.page.pageInfo.pageType && (digitalData.page.pageInfo.pageType = "save-OTP-preference-error"),
                                                                errorClick(window.location.href, "save-OTP-preference", "login", L[0].errorObject[0].errorName),
                                                                "undefined" != typeof window.appInsights && window.appInsights.trackEvent({
                                                                    name: "SAVE_OTP_ERROR",
                                                                    properties: {
                                                                        custID: custProfId,
                                                                        errorName: L[0].errorObject[0].errorName,
                                                                        typeOfUser: typeOfUser,
                                                                        otpFlow: otpFlow
                                                                    }
                                                                }))
                                                })
                                            })
                                        }
                                    }
                                else
                                    hideSpinnerMobileApp($("#otp-screen-spinner-container"), "spinner-full-page"),
                                        k[0].loggedOut ? ("undefined" != typeof window.appInsights && window.appInsights.trackEvent({
                                            name: "VERIFY_OTP_ERROR",
                                            properties: {
                                                custID: custProfId,
                                                errorName: "LOGOUT",
                                                typeOfUser: typeOfUser,
                                                otpFlow: otpFlow
                                            }
                                        }),
                                            $.ajax({
                                                url: "/qr/Logout",
                                                type: "POST",
                                                data: {
                                                    logOut: "logOut",
                                                    resource: "/en/Privilege-Club/loginpage.html"
                                                },
                                                cache: !1,
                                                success: function (L) {
                                                    void 0 != L && void 0 != L.errorObject && void 0 != L.errorobject[0] && (void 0 !== digitalData && void 0 !== digitalData.page && void 0 !== digitalData.page.pageInfo && void 0 !== digitalData.page.pageInfo.pageType && (digitalData.page.pageInfo.pageType = "verify-OTP-logOut-error"),
                                                        errorClick(window.location.href, "verify-OTP", "login", L.errorObject[0].errorName));
                                                    $(".otp-verify-account-locked-error-message").removeClass("hidden").attr("style", "background: rgb(247, 229, 229); color: rgb(181, 0, 0); padding: 10px; border: 1px solid;");
                                                    $("#otp_acnt_locked_login").attr("href", $("#loginPage").val());
                                                    $(".otp-receive-help,#otp-resend-button, #profile-settings-otp-resend-button,#otp-verify-button").addClass("hide");
                                                    $(".login-enter-otp-column #otp-value").closest(".input-base").css({
                                                        "pointer-events": "none"
                                                    });
                                                    $(".login-enter-otp-column #otp-value").closest(".input-base").find(".input-base-bg").css({
                                                        "background-color": "#cccccc"
                                                    })
                                                }
                                            })) : (hideVerifyOTPErrorMessages(),
                                                $(".invalid-otp-error-message").removeClass("hidden").css({
                                                    background: "#f7e5e5",
                                                    color: "#b50000",
                                                    padding: "10px",
                                                    border: "1px solid"
                                                }).removeAttr("hidden").focus(),
                                                "undefined" != typeof window.appInsights && window.appInsights.trackEvent({
                                                    name: "VERIFY_OTP_ERROR",
                                                    properties: {
                                                        custID: custProfId,
                                                        errorName: "INVALID_OTP",
                                                        typeOfUser: typeOfUser,
                                                        otpFlow: otpFlow
                                                    }
                                                }))
                            } else
                                void 0 !== digitalData && void 0 !== digitalData.page && void 0 !== digitalData.page.pageInfo && void 0 !== digitalData.page.pageInfo.pageType && (digitalData.page.pageInfo.pageType = "verify-OTP-error"),
                                    errorClick(window.location.href, "verify-OTP", "login", k[0].errorObject[0].errorName),
                                    "undefined" != typeof window.appInsights && window.appInsights.trackEvent({
                                        name: "VERIFY_OTP_ERROR",
                                        properties: {
                                            custID: custProfId,
                                            errorName: k[0].errorObject[0].errorName,
                                            typeOfUser: typeOfUser,
                                            otpFlow: otpFlow
                                        }
                                    }),
                                    $(".otp-verify-service-error-message").removeClass("hidden").css({
                                        background: "#f7e5e5",
                                        color: "#b50000",
                                        padding: "10px",
                                        border: "1px solid"
                                    }).removeAttr("hidden").focus(),
                                    $(".otp-verify-service-error-message").html(k[0].errorObject[0].errorDescription),
                                    hideSpinnerMobileApp($("#otp-screen-spinner-container"), "spinner-full-page"),
                                    k[0].loggedOut && $.ajax({
                                        url: "/qr/Logout",
                                        type: "POST",
                                        data: {
                                            logOut: "logOut",
                                            resource: "/en/Privilege-Club/loginpage.html"
                                        },
                                        cache: !1,
                                        success: function (L) {
                                            void 0 != L && void 0 != L.errorObject && void 0 != L.errorobject[0] && (void 0 !== digitalData && void 0 !== digitalData.page && void 0 !== digitalData.page.pageInfo && void 0 !== digitalData.page.pageInfo.pageType && (digitalData.page.pageInfo.pageType = "verify-OTP-logOut-error"),
                                                errorClick(window.location.href, "verify-OTP", "login", L.errorObject[0].errorName));
                                            $(".otp-verify-account-locked-error-message").removeClass("hidden").attr("style", "background: rgb(247, 229, 229); color: rgb(181, 0, 0); padding: 10px; border: 1px solid;");
                                            $("#otp_acnt_locked_login").attr("href", $("#loginPage").val());
                                            $(".otp-receive-help,#otp-resend-button, #profile-settings-otp-resend-button,#otp-verify-button,#otp-back-button").addClass("hide");
                                            $(".login-enter-otp-column #otp-value").closest(".input-base").css({
                                                "pointer-events": "none"
                                            });
                                            $(".login-enter-otp-column #otp-value").closest(".input-base").find(".input-base-bg").css({
                                                "background-color": "#cccccc"
                                            })
                                        }
                                    }),
                                    "SESSION_EXPIRED" === k[0].errorObject[0].errorName && ($(".otp-verify-service-error-message").fadeOut(3E3),
                                        setTimeout(function () {
                                            redirectToLogin(loginPage)
                                        }, 3E3),
                                        hideSpinnerMobileApp($("#otp-screen-spinner-container"), "spinner-full-page"))
                        })
                    })
                } else
                    hideVerifyOTPErrorMessages(),
                        hideSpinnerMobileApp($("#otp-screen-spinner-container"), "spinner-full-page"),
                        $(".empty-otp-error-message").removeClass("hidden").css({
                            background: "#f7e5e5",
                            color: "#b50000",
                            padding: "10px",
                            border: "1px solid"
                        }).removeAttr("hidden").focus()
            } else
                "undefined" != typeof window.appInsights && window.appInsights.trackEvent({
                    name: "VERIFY_OTP_NO_SER_URL",
                    properties: {
                        custID: custProfId,
                        typeOfUser: typeOfUser,
                        otpFlow: otpFlow
                    }
                })
        } catch (k) {
            "undefined" != typeof window.appInsights && window.appInsights.trackEvent({
                name: "CONSOLE_ERROR",
                properties: {
                    custID: custProfId,
                    errorName: k,
                    selector: "#otp-verify-button",
                    typeOfUser: typeOfUser,
                    otpFlow: otpFlow
                }
            })
        }
    })
});
function saveNoOTPPreferences() {
    try {
        var a = $("#saveOTPPreferenceServiceURL").val();
        if ("" !== a && void 0 !== a) {
            var b = getUserBasicInfoField("customerProfileId")
                , c = {
                    customerProfileId: b,
                    secureOTP: "BYPASS",
                    consentCheck: !0
                };
            "BYPASS" !== newPreference && (c = {
                customerProfileId: b,
                secureOTP: secureOTPPref,
                receiveOTP: newChannel,
                countryCode: newCountryCode,
                mobileNumber: newMobileNumber,
                callingCode: newCountryCallingCode,
                email: newEmail,
                activity: "UPDATE"
            });
            window.qrServiceRef.zone.run(function () {
                Promise.all([window.qrServiceRef.postReq(a, c, loginReq_headers, "", {})]).then(function (d) {
                    !0 === d[0].status ? (updateUserOtherInfoField("otpPreference", newPreference),
                        updateUserOtherInfoField("receiveOTP", newChannel),
                        "SMS_EMAIL" !== newChannel && "EMAIL" !== newChannel || updateUserBasicInfoField("emailId", newEmail),
                        "SMS_EMAIL" !== newChannel && "SMS" !== newChannel || updateUserBasicInfoField("mobile", "+" + parseInt(newCountryCallingCode) + "-" + newMobileNumber),
                        $(".otp-preference-service-error-message, .no-otp-preference-service-error-message").attr("hidden", ""),
                        "MYPROFILE" === getActualCookieValue("otpFrom") ? (hideSpinnerMobileApp($("#otp-screen-spinner-container"), "spinner-full-page"),
                            deleteCookie("otpFrom"),
                            $("#no-otp-settings-success-message").removeClass("hidden").removeAttr("hidden").fadeOut(4E3),
                            setTimeout(function () {
                                location.reload()
                            }, 4E3)) : (hideSpinnerMobileApp($("#otp-screen-spinner-container"), "spinner-full-page"),
                                $("#no-otp-settings-success-message").removeAttr("hidden").removeClass("hidden").fadeOut(4E3),
                                setTimeout(function () {
                                    redirectUser()
                                }, 4E3))) : ($(".no-otp-preference-service-error-message").html(d[0].errorObject[0].errorDescription),
                                    $(".no-otp-preference-service-error-message").removeClass("hidden"),
                                    $(".no-otp-preference-service-error-message").css({
                                        background: "#f7e5e5",
                                        color: "#b50000",
                                        padding: "10px",
                                        border: "1px solid"
                                    }).removeAttr("hidden").focus(),
                                    void 0 != d[0] && void 0 != d[0].errorObject && void 0 != d[0].errorObject[0] && (void 0 !== digitalData && void 0 !== digitalData.page && void 0 !== digitalData.page.pageInfo && void 0 !== digitalData.page.pageInfo.pageType && (digitalData.page.pageInfo.pageType = "save-OTP-preference-error"),
                                        errorClick(window.location.href, "save-OTP-preference", "login", d[0].errorObject[0].errorName),
                                        "undefined" != typeof window.appInsights && window.appInsights.trackEvent({
                                            name: "SAVE_OTP_PREFERENCE_ERROR",
                                            properties: {
                                                custID: custProfId,
                                                errorName: d[0].errorObject[0].errorName,
                                                typeOfUser: typeOfUser,
                                                otpFlow: otpFlow
                                            }
                                        })))
                })
            })
        } else
            "undefined" != typeof window.appInsights && window.appInsights.trackEvent({
                name: "SAVE_OTP_PREFERENCE_NO_SER_URL",
                properties: {
                    custID: custProfId,
                    typeOfUser: typeOfUser,
                    otpFlow: otpFlow
                }
            })
    } catch (d) {
        "undefined" != typeof window.appInsights && window.appInsights.trackEvent({
            name: "CONSOLE_ERROR",
            properties: {
                custID: custProfId,
                errorName: d,
                functionName: "saveNoOTPPreferences",
                typeOfUser: typeOfUser,
                otpFlow: otpFlow
            }
        })
    }
}
function updateOTPDetails(a) {
    try {
        var b = $("#updateOTPDetailsServiceURL").val();
        if ("" !== b && void 0 !== b) {
            var c = getFFPCookieValue("QRTOKEN")
                , d = {
                    customerProfileId: a,
                    otpVerified: !0,
                    token: c
                };
            window.qrServiceRef.zone.run(function () {
                Promise.all([window.qrServiceRef.postReq(b, d, loginReq_headers, "", {})]).then(function (e) {
                    hideVerifyOTPErrorMessages();
                    !0 === e[0].status ? "MYPROFILE" === getActualCookieValue("otpFrom") ? (deleteCookie("otpFrom"),
                        $("#otp-settings-success-message").removeClass("hidden").removeAttr("hidden").fadeOut(4E3),
                        buttonClickAction(window.location.href, "update-OTP-details", "myprofile otp"),
                        setTimeout(function () {
                            location.reload()
                        }, 4E3)) : (hideSpinnerMobileApp($("#otp-screen-spinner-container"), "spinner-full-page"),
                            buttonClickAction(window.location.href, "update-OTP-details", "login otp"),
                            $("#otp-verify-success-message").removeAttr("hidden").removeClass("hidden").fadeOut(4E3),
                            setTimeout(function () {
                                redirectUser()
                            }, 4E3)) : (hideSpinnerMobileApp($("#otp-screen-spinner-container"), "spinner-full-page"),
                                $(".otp-verify-service-error-message").css({
                                    background: "#f7e5e5",
                                    color: "#b50000",
                                    padding: "10px",
                                    border: "1px solid"
                                }).removeAttr("hidden").focus(),
                                $(".otp-verify-service-error-message").html(e[0].errorObject[0].errorDescription),
                                $(".otp-verify-service-error-message").removeClass("hidden"),
                                void 0 !== digitalData && void 0 !== digitalData.page && void 0 !== digitalData.page.pageInfo && void 0 !== digitalData.page.pageInfo.pageType && (digitalData.page.pageInfo.pageType = "update-OTP-details-error"),
                                errorClick(window.location.href, "update-OTP-details", "login", e[0].errorObject[0].errorName),
                                "undefined" != typeof window.appInsights && window.appInsights.trackEvent({
                                    name: "UPDATE_OTP_DETAILS_ERROR",
                                    properties: {
                                        custID: custProfId,
                                        errorName: e[0].errorObject[0].errorName,
                                        typeOfUser: typeOfUser,
                                        otpFlow: otpFlow
                                    }
                                }))
                })
            })
        } else
            "undefined" != typeof window.appInsights && window.appInsights.trackEvent({
                name: "UPDATE_OTP_DETAILS_NO_SER_URL",
                properties: {
                    custID: custProfId,
                    typeOfUser: typeOfUser,
                    otpFlow: otpFlow
                }
            })
    } catch (e) {
        "undefined" != typeof window.appInsights && window.appInsights.trackEvent({
            name: "CONSOLE_ERROR",
            properties: {
                custID: custProfId,
                errorName: e,
                functionName: "updateOTPDetails",
                typeOfUser: typeOfUser,
                otpFlow: otpFlow
            }
        })
    }
}
function verifyOTP() {
    try {
        location.hash = "OTRG";
        window.onhashchange = function () {
            location.hash = "OTRG"
        }
            ;
        $("#otp-modal #otp-modal-label").attr("tabindex", 0).focus();
        showSpinnerMobileApp($("#otp-preferences-spinner-container"), "spinner-full-page");
        var a = getActualCookieValue("otpFrom")
            , b = getUserBasicInfoField("customerProfileId");
        custProfId = b;
        var c = getUserBasicInfoField("ffpNumber")
            , d = $("#getOTPPreferenceServiceURL").val()
            , e = getActualCookieValue("tausertype");
        void 0 !== e && "" != e && "true" === e && (d = $("#getCorpOTPPreferenceServiceURL").val());
        var h = getUserBasicInfoField("programCode")
            , m = getUserBasicInfoField("loggedInUser");
        if ("" !== d && void 0 !== d) {
            var u = {
                customerProfileId: b
            };
            void 0 !== e && "" != e && "true" === e && (u.customerProfileId = "");
            if ("QRBB" === h || "NCP" === h)
                u.programCode = h,
                    u.userName = m;
            loginReq_headers["" + authParameterName] = "Bearer " + getFFPCookieValue("QRTOKEN");
            window.qrServiceRef.zone.run(function () {
                Promise.all([window.qrServiceRef.postReq(d, u, loginReq_headers, "", {})]).then(function (k) {
                    var f = k[0].secureOTP;
                    secureOTPChannel = f;
                    var n = k[0].receiveOTP;
                    receiveOTPChannel = newChannel = n;
                    mobileNumber = k[0].mobileNumber;
                    countryCallingCode = k[0].callingCode;
                    ccc = k[0].callingCode;
                    countryCode = k[0].countryCode;
                    cc = k[0].countryCode;
                    email = k[0].email;
                    if (void 0 == f && void 0 === n || "NEW" == f || "MYPROFILE" === a)
                        if ($("body").css({
                            display: "block"
                        }),
                            $("#otp-modal").modal({
                                backdrop: "static",
                                keyboard: !1
                            }),
                            $("#otp-modal .login-secure-otp-block").removeClass("hidden"),
                            $(".otp-mobile-number-empty-message").attr("hidden", ""),
                            $("#otp-modal").attr("tabindex", 0).focus(),
                            "MYPROFILE" === a) {
                            otpFlow = "MYPROFILE_OTP_SETTINGS";
                            $(".login-enter-otp-column").addClass("hidden");
                            "LOGIN" === f ? $("#otp-preference-0").attr("checked", "checked") : "TRANSACTION" === f ? $("#otp-preference-1").attr("checked", "checked") : "BYPASS" === f && $("#otp-preference-2").attr("checked", "checked");
                            var r = {}
                                , q = {}
                                , l = $("#getCountriesServiceURL").val()
                                , t = {
                                    name: "countries",
                                    srcDestMapcols: [{
                                        src: "twoLetterCode",
                                        dest: "countryName"
                                    }]
                                };
                            window.qrServiceRef.zone.run(function () {
                                Promise.all([window.qrServiceRef.postReq(l, r, q, "/content/Qatar/i18n/common.services.master.allCountries.json", t)]).then(function (F) {
                                    void 0 != F && void 0 != F[0] && void 0 != F[0].errorObject && void 0 != F[0].errorObject[0] && (void 0 !== digitalData && void 0 !== digitalData.page && void 0 !== digitalData.page.pageInfo && void 0 !== digitalData.page.pageInfo.pageType && (digitalData.page.pageInfo.pageType = "get-countries-error"),
                                        errorClick(window.location.href, "get-countries", "login", F[0].errorObject[0].errorName));
                                    F = customSortFunction(F[0].countries, "countryName", !0);
                                    $.each(F, function (L, M) {
                                        L = $("\x3coption/\x3e", {
                                            value: M.callingCode + "-" + M.twoLetterCode,
                                            "data-country-iso": M.twoLetterCode,
                                            text: M.countryName + " (" + M.callingCode + ")"
                                        });
                                        $("#otp-country-code").append(L)
                                    });
                                    countryCallingCode = $("#otp-country-code option[data-country-iso\x3d" + countryCode + "]").attr("value");
                                    $("#otp-country-code").selecter("refresh");
                                    $("#otp-country-code").val(countryCallingCode);
                                    $("#otp-country-code").trigger("change")
                                })
                            });
                            void 0 !== mobileNumber && "" !== mobileNumber ? ($("#otp-telephone-number").val(mobileNumber),
                                $("#otp-telephone-number").addClass("populated"),
                                $("#otp-telephone-number").parent().addClass("filled")) : $("#otp-telephone-number").val("");
                            void 0 !== email && "" !== email ? ($("#otp-email").val(email),
                                $("#otp-email").addClass("populated")) : $("#otp-email").val("");
                            "SMS" === n ? ($("#sms-channel").attr("checked", "checked"),
                                $("#otp-email-block").addClass("hidden")) : "EMAIL" === n ? ($("#otp-countrycode-block").addClass("hidden"),
                                    $("#email-channel").attr("checked", "checked")) : "SMS_EMAIL" === n ? $("#sms-email-channel").attr("checked", "checked") : ($(".otp-channels").addClass("hidden"),
                                        $(".otp-consent-checkbox").removeClass("hidden"),
                                        $("#otp-consent-checkbox").attr("checked", "checked"));
                            hideSpinnerMobileApp($("#otp-preferences-spinner-container"), "spinner-full-page")
                        } else
                            typeOfUser = "NEW",
                                updateUserOtherInfoField("activity", "LOGIN"),
                                $("#otp-preference-1").attr("checked", "checked"),
                                $("#otp-telephone-number").val(mobileNumber),
                                void 0 !== mobileNumber && "" !== mobileNumber ? ($("#otp-telephone-number").addClass("populated"),
                                    $("#otp-telephone-number").parent().addClass("filled")) : $("#otp-telephone-number").val(""),
                                void 0 !== email && "" !== email ? ($("#otp-email").val(email),
                                    $("#otp-email").addClass("populated")) : $("#otp-email").val(""),
                                r = {},
                                q = {},
                                l = $("#getCountriesServiceURL").val(),
                                t = {
                                    name: "countries",
                                    srcDestMapcols: [{
                                        src: "twoLetterCode",
                                        dest: "countryName"
                                    }]
                                },
                                window.qrServiceRef.zone.run(function () {
                                    Promise.all([window.qrServiceRef.postReq(l, r, q, "/content/Qatar/i18n/common.services.master.allCountries.json", t)]).then(function (F) {
                                        void 0 != F && void 0 != F[0] && void 0 != F[0].errorObject && void 0 != F[0].errorObject[0] && (void 0 !== digitalData && void 0 !== digitalData.page && void 0 !== digitalData.page.pageInfo && void 0 !== digitalData.page.pageInfo.pageType && (digitalData.page.pageInfo.pageType = "get-countries-error"),
                                            errorClick(window.location.href, "get-countries", "login", F[0].errorObject[0].errorName));
                                        F = customSortFunction(F[0].countries, "countryName", !0);
                                        $.each(F, function (L, M) {
                                            L = $("\x3coption/\x3e", {
                                                value: M.callingCode + "-" + M.twoLetterCode,
                                                "data-country-iso": M.twoLetterCode,
                                                text: M.countryName + " (" + M.callingCode + ")"
                                            });
                                            $("#otp-country-code").append(L)
                                        });
                                        countryCallingCode = $("#otp-country-code option[data-country-iso\x3d" + countryCode + "]").attr("value");
                                        0 == $("form#join-form").length && $("#otp-country-code").selecter();
                                        $("#otp-country-code").val(countryCallingCode);
                                        $("#otp-country-code").selecter("refresh");
                                        $("#otp-country-code").trigger("change")
                                    })
                                }),
                                hideSpinnerMobileApp($("#otp-preferences-spinner-container"), "spinner-full-page"),
                                void 0 !== mobileNumber && "" !== mobileNumber && $("#otp-country-code, #otp-telephone-number").attr("disabled", "disabled"),
                                void 0 !== email && "" !== email && $("#otp-email").attr("disabled", "disabled"),
                                $(document).bind("contextmenu", function (F) {
                                    return !1
                                }),
                                n = k[0].source,
                                "ADSGOOGLE" === n ? ($("#sms-channel").attr("disabled", "disabled"),
                                    $("#sms-email-channel").attr("disabled", "disabled"),
                                    $("#otp-countrycode-block").addClass("hidden"),
                                    $("#email-channel").attr("checked", "checked"),
                                    $(document).bind("contextmenu", function (F) {
                                        return !1
                                    }),
                                    buttonClickAction(window.location.href, n + "-get-OTP-details", "login otp")) : ($("#email-channel").attr("checked", "checked"),
                                        $("#email-channel").click());
                    else if ("LOGIN" == f) {
                        showSpinnerMobileApp($("#otp-screen-spinner-container"), "spinner-full-page");
                        skipSaveOtpPreference = !0;
                        var g = $("#sendOTPServiceURL").val();
                        void 0 !== e && "" != e && "true" === e && (g = $("#sendCorpOTPServiceURL").val());
                        updateUserOtherInfoField("activity", "LOGIN");
                        newMobileNumber = mobileNumber;
                        newEmail = email;
                        f = !0;
                        "EMAIL" !== n || void 0 !== email && "" !== email || (f = !1,
                            triggerEmailValidation());
                        if ("" !== g && void 0 !== g) {
                            var p = formSendOTPRequest(b, c, mobileNumber, countryCallingCode, countryCode, email, n, "LOGIN", e);
                            switch (n) {
                                case "SMS":
                                    var w = $(".mobile-help-text");
                                    var x = $(".mobile-help-text").text();
                                    x = x.replace("{0}", '\x3cspan class\x3d"bold-text"\x3e' + getShortMobileNumber(mobileNumber, 4) + "\x3c/span\x3e");
                                    x = x.replace("{2}", '\x3cspan class\x3d"bold-text"\x3e' + Granite.I18n.get("otp.timer.message") + "\x3c/span\x3e");
                                    break;
                                case "EMAIL":
                                    w = $(".email-help-text");
                                    x = $(".email-help-text").text();
                                    x = x.replace("{0}", '\x3cspan class\x3d"bold-text"\x3e' + getShortEmailID(email, 3) + "\x3c/span\x3e");
                                    x = x.replace("{2}", '\x3cspan class\x3d"bold-text"\x3e' + Granite.I18n.get("otp.timer.message") + "\x3c/span\x3e");
                                    break;
                                case "SMS_EMAIL":
                                    w = $(".mobile-email-help-text"),
                                        x = $(".mobile-email-help-text").text(),
                                        x = x.replace("{0}", '\x3cspan class\x3d"bold-text"\x3e' + getShortMobileNumber(mobileNumber, 4) + "\x3c/span\x3e"),
                                        x = x.replace("{1}", '\x3cspan class\x3d"bold-text"\x3e' + getShortEmailID(email, 3) + "\x3c/span\x3e"),
                                        x = x.replace("{2}", '\x3cspan class\x3d"bold-text"\x3e' + Granite.I18n.get("otp.timer.message") + "\x3c/span\x3e")
                            }
                            $(w).html(x);
                            $(w).removeClass("hidden");
                            if (f) {
                                $("body").css({
                                    display: "block"
                                });
                                $("#otp-modal").modal({
                                    backdrop: "static",
                                    keyboard: !1
                                });
                                $("#otp-modal .login-secure-otp-block").addClass("hidden");
                                $("#otp-back-button").addClass("hidden");
                                $(".login-enter-otp-column").removeClass("hidden");
                                $("#otp-modal").attr("tabindex", 0).focus();
                                if ("QRBB" === h || "NCP" === h)
                                    p.programCode = h,
                                        p.userName = m;
                                if (void 0 == getUserBasicInfoField("customerProfileId") || "" == getUserBasicInfoField("customerProfileId") || null == getUserBasicInfoField("customerProfileId"))
                                    return !1;
                                window.qrServiceRef.zone.run(function () {
                                    Promise.all([window.qrServiceRef.postReq(g, p, loginReq_headers, "", {})]).then(function (F) {
                                        hideSpinnerMobileApp($("#otp-screen-spinner-container"), "spinner-full-page");
                                        void 0 === F[0].errorObject ? ($(".otp-preference-service-error-message").attr("hidden", ""),
                                            sendOTPContactDetails = F[0].contactDetails,
                                            buttonClickAction(window.location.href, "send-OTP", "login otp"),
                                            showOtpTimer($("#otp-modal #otpcountdowntimer"), $("#otp-modal #otp-resend-button"))) : (void 0 !== digitalData && void 0 !== digitalData.page && void 0 !== digitalData.page.pageInfo && void 0 !== digitalData.page.pageInfo.pageType && (digitalData.page.pageInfo.pageType = "send-OTP-error"),
                                                errorClick(window.location.href, "send-OTP", "login", F[0].errorObject[0].errorName),
                                                "undefined" != typeof window.appInsights && window.appInsights.trackEvent({
                                                    name: "SEND_OTP_ERROR",
                                                    properties: {
                                                        custID: custProfId,
                                                        errorName: F[0].errorObject[0].errorName
                                                    },
                                                    typeOfUser: typeOfUser,
                                                    otpFlow: otpFlow
                                                }),
                                                "FFP_MAX_OTP_ATTEMPTS_EXCEEDED_FOR_TIME" === F[0].errorObject[0].errorName ? $.ajax({
                                                    url: "/qr/Logout",
                                                    type: "POST",
                                                    data: {
                                                        logOut: "logOut",
                                                        resource: "/en/Privilege-Club/loginpage.html"
                                                    },
                                                    cache: !1,
                                                    success: function (L) {
                                                        void 0 != L && void 0 != L.errorObject && void 0 != L.errorobject[0] && (void 0 !== digitalData && void 0 !== digitalData.page && void 0 !== digitalData.page.pageInfo && void 0 !== digitalData.page.pageInfo.pageType && (digitalData.page.pageInfo.pageType = "logOut-error"),
                                                            errorClick(window.location.href, "logOut", "login", L.errorObject[0].errorName));
                                                        $(".otp-verify-account-locked-error-message").removeClass("hidden").attr("style", "background: rgb(247, 229, 229); color: rgb(181, 0, 0); padding: 10px; border: 1px solid;");
                                                        $("#otp_acnt_locked_login").attr("href", $("#loginPage").val());
                                                        $(".otp-receive-help,#otp-resend-button, #profile-settings-otp-resend-button,#otp-verify-button").addClass("hide");
                                                        $(".login-enter-otp-column #otp-value").closest(".input-base").css({
                                                            "pointer-events": "none"
                                                        });
                                                        $(".login-enter-otp-column #otp-value").closest(".input-base").find(".input-base-bg").css({
                                                            "background-color": "#cccccc"
                                                        })
                                                    },
                                                    error: function (L) {
                                                        $(".otp-verify-account-locked-error-message").removeClass("hidden").attr("style", "background: rgb(247, 229, 229); color: rgb(181, 0, 0); padding: 10px; border: 1px solid;");
                                                        $("#otp_acnt_locked_login").attr("href", $("#loginPage").val());
                                                        $(".otp-receive-help,#otp-resend-button, #profile-settings-otp-resend-button,#otp-verify-button").addClass("hide");
                                                        $(".login-enter-otp-column #otp-value").closest(".input-base").css({
                                                            "pointer-events": "none"
                                                        });
                                                        $(".login-enter-otp-column #otp-value").closest(".input-base").find(".input-base-bg").css({
                                                            "background-color": "#cccccc"
                                                        })
                                                    }
                                                }) : ($(".otp-verify-service-error-message").removeClass("hidden"),
                                                    $(".otp-verify-service-error-message").html(F[0].errorObject[0].errorDescription),
                                                    $(".otp-verify-service-error-message").css({
                                                        background: "#f7e5e5",
                                                        color: "#b50000",
                                                        padding: "10px",
                                                        border: "1px solid"
                                                    }).removeAttr("hidden").focus(),
                                                    "SESSION_EXPIRED" === F[0].errorObject[0].errorName && ($(".otp-verify-service-error-message").fadeOut(3E3),
                                                        setTimeout(function () {
                                                            redirectToLogin(loginPage)
                                                        }, 3E3))))
                                    })
                                })
                            }
                        } else
                            "undefined" != typeof window.appInsights && window.appInsights.trackEvent({
                                name: "SEND_OTP_NO_SER_URL",
                                properties: {
                                    custID: custProfId,
                                    typeOfUser: typeOfUser,
                                    otpFlow: otpFlow
                                }
                            })
                    } else
                        "BYPASS" == f ? redirectUser() : "TRANSACTION" == f && redirectUser();
                    void 0 !== k && void 0 != k[0] && void 0 != k[0].errorObject && void 0 != k[0].errorObject[0] && (void 0 !== digitalData && void 0 !== digitalData.page && void 0 !== digitalData.page.pageInfo && void 0 !== digitalData.page.pageInfo.pageType && (digitalData.page.pageInfo.pageType = "get-OTP-preference-error"),
                        errorClick(window.location.href, "get-OTP-preference", "login", k[0].errorObject[0].errorName),
                        "undefined" != typeof window.appInsights && window.appInsights.trackEvent({
                            name: "GET_OTP_PREFERENCE_ERROR",
                            properties: {
                                custID: custProfId,
                                errorName: k[0].errorObject[0].errorName,
                                typeOfUser: typeOfUser,
                                otpFlow: otpFlow
                            }
                        }))
                })
            })
        } else
            "undefined" != typeof window.appInsights && window.appInsights.trackEvent({
                name: "GET_OTP_PREFERENCE_NO_SER_URL",
                properties: {
                    custID: custProfId,
                    typeOfUser: typeOfUser,
                    otpFlow: otpFlow
                }
            })
    } catch (k) {
        "undefined" != typeof window.appInsights && window.appInsights.trackEvent({
            name: "CONSOLE_ERROR",
            properties: {
                custID: custProfId,
                errorName: k,
                functionName: "verifyOTP",
                typeOfUser: typeOfUser,
                otpFlow: otpFlow
            }
        })
    }
}
function formSendOTPRequest(a, b, c, d, e, h, m, u, k) {
    a = {
        customerProfileId: a,
        activity: u,
        ffpNumber: b
    };
    void 0 !== k && "" != k && "true" === k && (a.customerProfileId = "",
        a.ffpNumber = "");
    switch (m) {
        case "SMS":
            a.contactDetails = [{
                contactType: "MOBILE",
                contactValue: c,
                countryCallingCode: d,
                countryCode: e
            }];
            break;
        case "EMAIL":
            a.contactDetails = [{
                contactType: "EMAIL",
                contactValue: h
            }];
            break;
        case "SMS_EMAIL":
            a.contactDetails = [{
                contactType: "EMAIL",
                contactValue: h
            }, {
                contactType: "MOBILE",
                contactValue: c,
                countryCallingCode: d,
                countryCode: e
            }]
    }
    return a
}
function hideVerifyOTPErrorMessages() {
    try {
        $(".invalid-otp-error-message, .empty-otp-error-message, .otp-verify-service-error-message").attr("hidden", "").addClass("hidden")
    } catch (a) {
        "undefined" != typeof window.appInsights && window.appInsights.trackEvent({
            name: "CONSOLE_ERROR",
            properties: {
                custID: custProfId,
                errorName: a,
                functionName: "hideVerifyOTPErrorMessages",
                typeOfUser: typeOfUser,
                otpFlow: otpFlow
            }
        })
    }
}
var availableDataForgot = ""
    , isSMEFlow = !1
    , userName = ""
    , fpOTP = ""
    , fpToken = ""
    , isPasswordsSame = !1
    , np = ""
    , forgotPasswordRequest = {}
    , isOfflineFlow = !1
    , fpUserType = "privilegeclub-forgot-password"
    , verifyCaptchaForgot = function (a) {
        availableDataForgot = a;
        0 < a.length ? ($(".forgetPasswordSendButton").css({
            "pointer-events": "auto",
            opacity: "1"
        }),
            $("#social-login-block").find("div").eq(0).css({
                visibility: "hidden"
            }),
            $("#social-login-block").find(".back-to-login").css({
                visibility: "visible"
            })) : isMobileApp() || $(".forgetPasswordSendButton").css({
                "pointer-events": "none",
                opacity: "0.4"
            })
    }
    , expiredCaptchaForgot = function () {
        availableDataForgot = "";
        isMobileApp() || $(".forgetPasswordSendButton").css({
            "pointer-events": "none",
            opacity: "0.4"
        })
    }
    , resetForgotCaptcha = function () {
        availableDataForgot = "";
        isMobileApp() || ("undefined" != typeof grecaptcha && grecaptcha.reset(widgetForgotId),
            $(".forgetPasswordSendButton").css({
                "pointer-events": "none",
                opacity: "0.4"
            }))
    };
function forgotPassword() {
    try {
        if (showSpinnerMobileApp($("#forgot-password-spinner-container"), "spinner-full-page"),
            userName = $(".forgotPasswordUserName").val(),
            $("#forgotPasswordServiceURL").val(),
            "" === userName)
            $(".forgetPasswordNoInputErrorMessage").removeClass("hide"),
                $(".forgetPasswordNoInputErrorMessage").closest(".error-box").removeClass("hide"),
                $("#f1002").focus(),
                $(".forgetPasswordSendButton").removeClass("hide"),
                $(".forgetPasswordNote").addClass("hide"),
                $(".forgetPasswordErrorMessage").addClass("hide"),
                $(".forgetPasswordErrorMessage").closest(".error-box").addClass("hide"),
                $(".forgetPasswordSuccessMessage").addClass("hide"),
                $(".forgetPasswordSuccessMessage").closest(".sucsmsg-bar").addClass("hide"),
                hideSpinnerMobileApp($("#forgot-password-spinner-container"), "spinner-full-page"),
                void 0 !== digitalData && void 0 !== digitalData.page && void 0 !== digitalData.page.pageInfo && void 0 !== digitalData.page.pageInfo.pageType && (digitalData.page.pageInfo.pageType = "FP_NO_INPUT"),
                errorClick(window.location.href, "forgot-password", fpUserType, "FP_NO_INPUT"),
                resetForgotCaptcha();
        else {
            forgotPasswordRequest = {
                userName: userName,
                additionalInfo: availableDataForgot
            };
            if (-1 != location.search.indexOf("activityCode\x3dSME"))
                isSMEFlow = !0,
                    forgotPasswordRequest.programCode = "QRBB",
                    forgotPasswordRequest["activity-code"] = "SME",
                    fpUserType = "beyondbusiness-forgot-password";
            else {
                fpUserType = "privilegeClub-forgot-password";
                var a = getCookieValueAsIs("tgtCookie");
                null !== a && "" !== a && "veriCode" === a ? isSMEFlow = !0 : forgotPasswordRequest.resetType = "OTP"
            }
            isMobileApp() ? forgotPasswordRequest.j_platform = mobilePlatform : /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? forgotPasswordRequest.j_platform = "MWEB" : forgotPasswordRequest.j_platform = "WEB";
            forgotPasswordRequest.C_FOR_TYPE = $("#FFP_CAPTCHA_FORGOT").val();
            "BOT" === $("#FFP_CAPTCHA_FORGOT").val() && (forgotPasswordRequest.C_BT_ID = forgotPasswordCaptcha.captchaId,
                forgotPasswordRequest.C_BT_CODE = $("#fpCaptchaCode").val());
            console.log("forgotPasswordRequest:", forgotPasswordRequest);
            $.ajax({
                url: "/qr/bot/forgotpassword",
                method: "POST",
                cache: !1,
                data: forgotPasswordRequest,
                success: function (b) {
                    hideLoginMessages();
                    b = JSON.parse(b);
                    deleteCookie("SAC_ERROR");
                    hideSpinnerMobileApp($("#forgot-password-spinner-container"), "spinner-full-page");
                    var c = b.isEmailSent;
                    void 0 != partnerCode && (void 0 != $("#allowed-partner-cash-plus-avios-codes").val() && -1 != $("#allowed-partner-cash-plus-avios-codes").val().indexOf(partnerCode) || "LOYALTYSOLUTIONS" === partnerCode || void 0 != $("#loyaltyCollectionsCodes").val() && -1 != $("#loyaltyCollectionsCodes").val().indexOf(partnerCode)) && $("#continue-dashboard").text(Granite.I18n.get("login.forgot.partnercontinueflow"));
                    fpToken = b.token;
                    if ("undefined" !== typeof c)
                        c && (isSMEFlow ? ($(".forgetPasswordNote").addClass("hide"),
                            $(".forgetPasswordErrorMessage").addClass("hide"),
                            $(".forgetPasswordErrorMessage").closest(".error-box").addClass("hide"),
                            $(".forgetPasswordNoInputErrorMessage").addClass("hide"),
                            $(".forgetPasswordNoInputErrorMessage").closest(".error-box").addClass("hide"),
                            $(".forgetPasswordSuccessMessage").removeClass("hide"),
                            $(".forgetPasswordSuccessMessage").closest(".sucsmsg-bar").removeClass("hide").focus(),
                            $(".forgetPasswordInputForm").addClass("hide"),
                            $(".forgetPasswordSendButton").addClass("hide"),
                            buttonClickAction(window.location.href, "forgot-password-email-success", fpUserType)) : (forgotPasswordRequest.otpSalt = fpToken,
                                forgotPasswordRequest.refreshToken = b.refreshToken,
                                $(".login-drop-column.j-login-action").addClass("delVertLine"),
                                $(".smeContainer").addClass("hide"),
                                $(".login-drop-column.create-profile-popup").addClass("hide"),
                                $("#fp-otp-success-message").removeClass("hide"),
                                $("#enter-otp").addClass("flip-side-1").removeClass("flip-side-2"),
                                $("#j-login-form, #forgot-password, #update-new-password").addClass("flip-side-2").removeClass("flip-side-1"),
                                buttonClickAction(window.location.href, "forgot-password-OTP-success", fpUserType),
                                showOtpTimer($("#fp-otpcountdowntimer"), $("#resend-fp-otp-btn"))),
                            "GOOGLE" === $("#FFP_CAPTCHA_FORGOT").val() ? ($("#forgotCaptcha").hide(),
                                resetForgotCaptcha()) : "BOT" === $("#FFP_CAPTCHA_FORGOT").val() && (forgotPasswordCaptcha.reloadImage(),
                                    resetForgotCaptcha(),
                                    $("#forgot-botdetect-captcha").parent().hide()));
                    else {
                        resetForgotCaptcha();
                        $(".forgetPasswordNote").addClass("hide");
                        $(".forgetPasswordNoInputErrorMessage").addClass("hide");
                        $(".forgetPasswordNoInputErrorMessage").closest(".error-box").addClass("hide");
                        c = b.errorObject[0];
                        if (void 0 != c && void 0 != c.errorName && "FFP_AUTH_USR_EMAIL_NOT_VRFD" === c.errorName.trim())
                            return $("#f1003").val(""),
                                $("#j_socialMediaEmail").val(""),
                                b = $("#email-verification-alert-message").val(),
                                c = $("#resend-verification-link-label").val(),
                                b = b.replace("${0}", '\x3ca href\x3d"javascript:void(0)" id\x3d"resend-verification-link"\x3e\x3cu\x3e' + c + "\x3c/u\x3e\x3c/a\x3e"),
                                $("#login-alert-message .alert-message").html(b),
                                $("#login-alert-message").removeClass("hidden"),
                                !1;
                        c = b.errorObject[0].errorDescription;
                        c = void 0 !== c ? c + "" : Granite.I18n.get(b.errorObject[0].errorName) + "";
                        void 0 !== digitalData && void 0 !== digitalData.page && void 0 !== digitalData.page.pageInfo && void 0 !== digitalData.page.pageInfo.pageType && (digitalData.page.pageInfo.pageType = "forgot-password-service-error");
                        errorClick(window.location.href, "forgot-password", fpUserType, b.errorObject[0].errorName);
                        $(".forgetPasswordErrorMessage").html(c);
                        $(".forgetPasswordErrorMessage").removeClass("hide");
                        $(".forgetPasswordErrorMessage").closest(".error-box").removeClass("hide").focus();
                        $(".back-to-login.j-login-action-toggle").parent().css({
                            "margin-top": "20px"
                        });
                        "GOOGLE" === $("#FFP_CAPTCHA_FORGOT").val() ? resetForgotCaptcha() : "BOT" === $("#FFP_CAPTCHA_FORGOT").val() && (forgotPasswordCaptcha.reloadImage(),
                            resetForgotCaptcha())
                    }
                }
            })
        }
    } catch (b) { }
}
function hidePswdErrorMessages() {
    $(".rpPswdEmptyErrMsg").addClass("hide");
    $(".rpPswdInvalidErrMsg").addClass("hide")
}
function hideCnfPswdErrorMessages() {
    $(".rpCnfPswdEmptyErrMsg").addClass("hide");
    $(".rpCnfPswdInvalidErrMsg").addClass("hide")
}
$(document).ready(function () {
    $(".j-login-action-toggle").on("click", function () {
        $("#fp-otp").val("");
        $(".j-login-action").toggleClass("toggled");
        $("#f1002").focus()
    });
    $("#qrpc-reset-password-btn").css({
        "pointer-events": "none",
        opacity: "0.4"
    });
    "false" === $("#isPublishInstance").val() && $("#update-new-password").removeClass("front-flip");
    $("#resetshowpassword").on("click", function (a) {
        $(this).prop("checked") ? $("#fp-pswd").attr("type", "text") : $("#fp-pswd").attr("type", "password")
    });
    $("#resetconfirmshowpassword").on("click", function (a) {
        $(this).prop("checked") ? $("#fp-confirm-pswd").attr("type", "text") : $("#fp-confirm-pswd").attr("type", "password")
    });
    $("#fpCaptchaCode").on("validatecaptcha", function (a, b) {
        b ? ($(".forgetPasswordSendButton").css({
            "pointer-events": "auto",
            opacity: "1"
        }),
            $("#social-login-block").find("div").eq(0).css({
                visibility: "hidden"
            }),
            $("#social-login-block").find(".back-to-login").css({
                visibility: "visible"
            })) : isMobileApp() || $(".forgetPasswordSendButton").css({
                "pointer-events": "none",
                opacity: "0.4"
            })
    });
    $(".submit-otp-btn").on("click", function () {
        showSpinnerMobileApp($("#forgot-password-spinner-container"), "spinner-full-page");
        $(".vrpServiceErrorMessage").addClass("hide");
        fpOTP = $("#fp-otp").val();
        if (void 0 !== fpOTP && "" !== fpOTP) {
            var a = $("#verifyRPTokenServiceURL").val();
            $.ajax({
                url: a,
                type: "POST",
                contentType: "application/json; charset\x3dutf-8",
                dataType: "json",
                data: JSON.stringify({
                    userName: userName,
                    resetPasswordToken: fpToken,
                    resetType: "OTP",
                    otp: fpOTP
                }),
                cache: !1,
                success: function (b) {
                    hideSpinnerMobileApp($("#forgot-password-spinner-container"), "spinner-full-page");
                    var c = b.errorObject;
                    if (void 0 === c) {
                        buttonClickAction(window.location.href, "fp-OTP-verification-success", "privilegeClub-forgot-password");
                        $("#update-new-password").addClass("flip-side-1").removeClass("flip-side-2");
                        $("#j-login-form, #forgot-password, #enter-otp").addClass("flip-side-2").removeClass("flip-side-1");
                        var d = !1;
                        c = b.consents.length;
                        void 0 != b.consents && 0 < c && (isOfflineFlow = !0,
                            $.each(b.consents, function (e, h) {
                                e = h.consentType;
                                var m = h.emailEnabled;
                                h = h.smsEnabled;
                                "ACCOUNTDETAILS" === e && (m || h) ? ($('[name\x3d"privilegeClubTerms"]').prop("checked", !0),
                                    $('[name\x3d"privilegeClubTerms"]').parent().addClass("hide"),
                                    $("#pcTerms").find(".simplify-consent-text").addClass("hide"),
                                    d = !0) : "QROFFERS" === e && m ? $('[name\x3d"privilegeClubNotifyTerms"]').prop("checked", !0) : "QRPCOFFERS" === e && m ? $('[name\x3d"privilegeClubNotifyTerms3"]').prop("checked", !0) : "QRPCPARTNEROFFERS" === e && m && $('[name\x3d"privilegeClubNotifyTerms2"]').prop("checked", !0)
                            }),
                            $("#fp-offline-tnc").removeClass("hidden"));
                        void 0 != b.consents && 1 == c && d && $(".pcnotifyTerms .simplified-consent-wrapper").addClass("hide")
                    } else
                        $(".vrpServiceErrorMessage").text(Granite.I18n.get(c[0].errorName)).removeClass("hide"),
                            void 0 !== digitalData && void 0 !== digitalData.page && void 0 !== digitalData.page.pageInfo && void 0 !== digitalData.page.pageInfo.pageType && (digitalData.page.pageInfo.pageType = "fp-verify-token-otp-validation-service-error"),
                            errorClick(window.location.href, "forgot-password-verify-OTP", fpUserType, c[0].errorName),
                            "true" == $("#sc_variable").val() && s.t()
                }
            })
        }
    });
    $("#qrpc-reset-password-btn").on("click", function () {
        showSpinnerMobileApp($("#forgot-password-spinner-container"), "spinner-full-page");
        $(".rpServiceErrorMessage").addClass("hide");
        var a = $("#resetPasswordServiceURL").val();
        np = $("#fp-pswd").val();
        var b = {
            newPassword: np,
            customerType: "INDV",
            userName: userName,
            token: fpToken,
            resetType: "OTP",
            otp: fpOTP
        };
        if (isOfflineFlow) {
            var c = [];
            if ($('[name\x3d"privilegeClubTerms"]').is(":checked")) {
                var d = {
                    consentType: "ACCOUNTDETAILS",
                    emailEnabled: !0,
                    smsEnabled: !0
                };
                c.push(d)
            }
            $('[name\x3d"privilegeClubNotifyTerms"]').is(":checked") && (d = {
                consentType: "QROFFERS",
                emailEnabled: !0,
                smsEnabled: !0
            },
                c.push(d));
            d = ("true" === $("#isQRPCOffersEnabled").val() && $('[name\x3d"privilegeClubNotifyTerms3"]').is(":checked"),
            {
                consentType: "QRPCOFFERS",
                emailEnabled: !0,
                smsEnabled: !0
            });
            c.push(d);
            $('[name\x3d"privilegeClubNotifyTerms2"]').is(":checked") && (d = {
                consentType: "QRPCPARTNEROFFERS",
                emailEnabled: !0,
                smsEnabled: !0
            },
                c.push(d));
            console.log("consents " + JSON.stringify(c));
            b.consents = c
        }
        $.ajax({
            url: a,
            type: "POST",
            contentType: "application/json; charset\x3dutf-8",
            dataType: "json",
            data: JSON.stringify(b),
            cache: !1,
            success: function (e) {
                hideSpinnerMobileApp($("#forgot-password-spinner-container"), "spinner-full-page");
                var h = e.errorObject;
                e = e.isPasswordReset;
                -1 != location.href.indexOf("loyalty_collections.mobile") && $("#continue-dashboard").text(Granite.I18n.get("login.pccollections.dashboard"));
                void 0 === h && e ? ($("#resetpassword-success-modal").modal(),
                    buttonClickAction(window.location.href, "fp-OTP-reset-password-success", "privilegeClub-forgot-password")) : ($(".rpServiceErrorMessage").text(Granite.I18n.get(h[0].errorName)).removeClass("hide"),
                        void 0 !== digitalData && void 0 !== digitalData.page && void 0 !== digitalData.page.pageInfo && void 0 !== digitalData.page.pageInfo.pageType && (digitalData.page.pageInfo.pageType = "reset-password-service-error"),
                        errorClick(window.location.href, "reset-password", fpUserType, h[0].errorName))
            }
        })
    });
    $("#fp-pswd").on("blur", function () {
        hidePswdErrorMessages();
        isPasswordsSame = !1;
        var a = $(this).val();
        if ("" !== a && void 0 !== a)
            if (isValidPassword(a)) {
                var b = $("#fp-confirm-pswd").val();
                "" !== b && void 0 !== b && (a !== b ? (isPasswordsSame = !1,
                    $(".rpMismatchErrMsg").removeClass("hide"),
                    void 0 !== digitalData && void 0 !== digitalData.page && void 0 !== digitalData.page.pageInfo && void 0 !== digitalData.page.pageInfo.pageType && (digitalData.page.pageInfo.pageType = "RP_OTP_PSWD_MISMATCH"),
                    errorClick(window.location.href, "reset-password", fpUserType, "RP_OTP_PSWD_MISMATCH")) : (isPasswordsSame = !0,
                        $(".rpMismatchErrMsg").addClass("hide")))
            } else
                $(".rpPswdInvalidErrMsg").removeClass("hide"),
                    void 0 !== digitalData && void 0 !== digitalData.page && void 0 !== digitalData.page.pageInfo && void 0 !== digitalData.page.pageInfo.pageType && (digitalData.page.pageInfo.pageType = "RP_OTP_INVALID_PSWD"),
                    errorClick(window.location.href, "reset-password", fpUserType, "RP_OTP_INVALID_PSWD");
        else
            $(".rpPswdEmptyErrMsg").removeClass("hide"),
                void 0 !== digitalData && void 0 !== digitalData.page && void 0 !== digitalData.page.pageInfo && void 0 !== digitalData.page.pageInfo.pageType && (digitalData.page.pageInfo.pageType = "RP_OTP_EMPTY_PSWD"),
                errorClick(window.location.href, "reset-password", fpUserType, "RP_OTP_EMPTY_PSWD");
        isPasswordsSame ? isOfflineFlow ? $("#f1211").is(":checked") ? $("#qrpc-reset-password-btn").css({
            "pointer-events": "auto",
            opacity: "1"
        }) : $("#qrpc-reset-password-btn").css({
            "pointer-events": "none",
            opacity: "0.4"
        }) : $("#qrpc-reset-password-btn").css({
            "pointer-events": "auto",
            opacity: "1"
        }) : $("#qrpc-reset-password-btn").css({
            "pointer-events": "none",
            opacity: "0.4"
        })
    });
    $("#fp-confirm-pswd").on("blur", function () {
        hideCnfPswdErrorMessages();
        isPasswordsSame = !1;
        var a = $(this).val();
        if ("" !== a && void 0 !== a)
            if (isValidPassword(a)) {
                var b = $("#fp-pswd").val();
                "" !== b && void 0 !== b && (b !== a ? (isPasswordsSame = !1,
                    $(".rpMismatchErrMsg").removeClass("hide"),
                    void 0 !== digitalData && void 0 !== digitalData.page && void 0 !== digitalData.page.pageInfo && void 0 !== digitalData.page.pageInfo.pageType && (digitalData.page.pageInfo.pageType = "RP_OTP_CNFPSWD_MISMATCH"),
                    errorClick(window.location.href, "reset-password", fpUserType, "RP_OTP_CNFPSWD_MISMATCH")) : (isPasswordsSame = !0,
                        $(".rpMismatchErrMsg").addClass("hide")))
            } else
                $(".rpCnfPswdInvalidErrMsg").removeClass("hide"),
                    void 0 !== digitalData && void 0 !== digitalData.page && void 0 !== digitalData.page.pageInfo && void 0 !== digitalData.page.pageInfo.pageType && (digitalData.page.pageInfo.pageType = "RP_OTP_INVALID_CNFPSWD"),
                    errorClick(window.location.href, "reset-password", fpUserType, "RP_OTP_INVALID_CNFPSWD");
        else
            $(".rpCnfPswdEmptyErrMsg").removeClass("hide"),
                void 0 !== digitalData && void 0 !== digitalData.page && void 0 !== digitalData.page.pageInfo && void 0 !== digitalData.page.pageInfo.pageType && (digitalData.page.pageInfo.pageType = "RP_OTP_EMPTY_CNFPSWD"),
                errorClick(window.location.href, "reset-password", fpUserType, "RP_OTP_EMPTY_CNFPSWD");
        isPasswordsSame ? isOfflineFlow ? $("#f1211").is(":checked") ? $("#qrpc-reset-password-btn").css({
            "pointer-events": "auto",
            opacity: "1"
        }) : $("#qrpc-reset-password-btn").css({
            "pointer-events": "none",
            opacity: "0.4"
        }) : $("#qrpc-reset-password-btn").css({
            "pointer-events": "auto",
            opacity: "1"
        }) : $("#qrpc-reset-password-btn").css({
            "pointer-events": "none",
            opacity: "0.4"
        })
    });
    $(".back-to-login").on("click", function () {
        $(".login-drop-column.j-login-action").removeClass("delVertLine");
        $(".smeContainer").removeClass("hide");
        $(".login-drop-column.create-profile-popup").removeClass("hide");
        $("#j-login-form").addClass("flip-side-1").removeClass("flip-side-2");
        $("#update-new-password, #forgot-password, #enter-otp").addClass("flip-side-2").removeClass("flip-side-1")
    });
    $("#continue-dashboard").on("click", function () {
        $("#continue-dashboard").css({
            "pointer-events": "none",
            opacity: "0.4"
        });
        $("#f1003").val(userName);
        $("#f1001").val(np);
        isFPFlow = !0;
        invoke()
    });
    $("#resend-fp-otp-btn").on("click", function () {
        $(".vrpServiceErrorMessage").text("").addClass("hide");
        showSpinnerMobileApp($("#forgot-password-spinner-container"), "spinner-full-page");
        $.ajax({
            url: "/qr/bot/forgotpassword",
            method: "POST",
            cache: !1,
            data: forgotPasswordRequest,
            success: function (a) {
                hideSpinnerMobileApp($("#forgot-password-spinner-container"), "spinner-full-page");
                a = JSON.parse(a);
                var b = a.errorObject;
                void 0 === b ? ($("#fp-otp-success-message").removeClass("hide"),
                    $("#fp-otp-success-message .send-fp-otp-success-message").addClass("hidden"),
                    $("#fp-otp-success-message .resend-fp-otp-success-message").removeClass("hidden"),
                    fpToken = a.token,
                    showOtpTimer($("#fp-otpcountdowntimer"), $("#resend-fp-otp-btn"))) : ($("#fp-otp-success-message").addClass("hide"),
                        $(".vrpServiceErrorMessage").text(Granite.I18n.get(b[0].errorName)).removeClass("hide"))
            }
        })
    });
    $("#fp-otp").on("keypress keydown", function (a) {
        isNumber(a.which) || a.preventDefault()
    });
    $("#f1211").on("click", function () {
        isPasswordsSame && $("#f1211").is(":checked") ? $("#qrpc-reset-password-btn").css({
            "pointer-events": "auto",
            opacity: "1"
        }) : $("#qrpc-reset-password-btn").css({
            "pointer-events": "none",
            opacity: "0.4"
        })
    })
});
var showQcreditExpiryModal = !1, showQmilesExpiryModal = !1, showTiertExpiryModal = !1, showQpointsExpiryModal = !1, showServiceRequestModal = !1, showCompanionConfirmationAlerts = !1, showCompanionExpiredAlerts = !1, showCompanionUsedAlerts = !1, showCompanionInvalidAlerts = !1, showCompanionSlotsFullAlerts = !1, showCompanionDuplicateAlerts = !1, showSwiftAlert = !1, companionConfirmationAlerts = [], companionExpiredAlerts = [], companionUsedAlerts = [], companionInvalidAlerts = [], companionSlotsFullAlerts = [], companionDuplicateAlerts = [], studentExpiryDate, reinstatedQmilesValue, reinstatedTierValue, qmileRequest = "", oneDay = 864E5, $todaydate = new Date, qpoints, qpointExpiryDate, qmilesExpiryDate, qcreditsExpiryDate, tiersExpiryDate, serReqExpiryDate, codeTierMatch, tierMatchJson = [{
    tier: "PLATINUM",
    code: "PL_EXP_MTCH",
    points: "300",
    messageID: "tierMatchQpointsPlatinum"
}, {
    tier: "SILVER",
    code: "SL_EXP_MTCH",
    points: "150",
    messageID: "tierMatchQpointsSilver"
}, {
    tier: "GOLD",
    code: "GL_EXP_MTCH",
    points: "75",
    messageID: "tierMatchQpointsGold"
}], getdaysDifferenceAlerts = function (a, b) {
    try {
        if (void 0 != a && null != a && 0 < b) {
            var c = a.split("-")
                , d = new Date
                , e = new Date(c[2], parseInt(c[1]) - 1, c[0], d.getHours(), d.getMinutes(), d.getSeconds());
            if (e > d)
                return Math.round(Math.abs((d.getTime() - e.getTime()) / oneDay)) < b
        }
        return !1
    } catch (h) { }
}, findDateisWithIntheRange = function (a, b) {
    try {
        var c = new Date
            , d = new Date(b);
        return c > new Date(a) && c < d
    } catch (e) { }
};
$(document).ready(function () {
    function a() {
        var v = $("#convertQrpcMemberToStudent").val();
        if ("" == v && void 0 == v)
            return !1;
        var E = {
            customerProfileId: getUserBasicInfoField("customerProfileId")
        };
        $("#alert-modal").modal("hide");
        showSpinnerMobileApp($("#global-spinner-container"), "spinner-active");
        window.qrServiceRef.zone.run(function () {
            window.qrServiceRef.postReq(v, E, req_headers, "", {}).then(function (J) {
                "true" == "" + J.status && ($("#studentUpgradeButton").addClass("hide"),
                    $(".studentConvertSuccess").removeClass("hide"),
                    mobilePlatform == window.ANDROID_PLATFORM ? JSInterface.SessionFailure() : mobilePlatform == window.IOS_PLATFORM ? setupWebViewJavascriptBridge(function (y) {
                        y.callHandler("SessionFailure", "", function () {
                            console.log("Session failure to go to home screen of app")
                        })
                    }) : logout())
            })
        })
    }
    function b() {
        $(".modal-alert-block.hide").remove();
        $(".modal-alert-container").not(".slick-initialized").slick({
            infinite: !1,
            centerMode: !1,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: !0
        });
        $(".modal-alert-container").on("afterChange", function () {
            $(".modal-alert-container .modal-alert-block.slick-current.slick-active").hasClass("studentupgrade") ? $(".modal-alert-block.studentupgrade").closest(".modal-alert-overlay").addClass("student-alert") : $(".modal-alert-block.studentupgrade").closest(".modal-alert-overlay").removeClass("student-alert")
        });
        var v = $(".modal-alert-block").not(".hide");
        $(".modal-alert-container").slick("slickFilter", v);
        setTimeout(function () {
            $(".modal-alert-container").slick("unslick").slick("reinit").slick({
                infinite: !1,
                centerMode: !1,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: !0
            })
        }, 500)
    }
    var c = $("#runmodes").val();
    if (void 0 != c && null != c && c.split(",").includes("author"))
        return !1;
    qpoints = getUserBasicInfoField("qpointsAmount");
    qpointExpiryDate = getUserBasicInfoField("qpointsExpiryDate");
    qmilesExpiryDate = getUserBasicInfoField("qmilesExpiryDate");
    qcreditsExpiryDate = getUserBasicInfoField("qcreditsExpiryDate");
    tiersExpiryDate = getUserOtherInfoField("tierExpiry");
    serReqExpiryDate = getUserBasicInfoField("serReqExpiryDate");
    if (void 0 === getUserBasicInfoField("tier") || null === getUserBasicInfoField("tier") || "" === getUserBasicInfoField("tier"))
        return !1;
    var d = window.location.pathname.split("/")[1].indexOf("-");
    -1 !== d ? (d = window.location.pathname.split("/"),
        c = d.length,
        d[c - 1].indexOf(".mobile.html") && (d[c - 1] = d[c - 1].replace(".mobile.html", ".html")),
        d[1] = getCookieValue("country")) : (d = window.location.pathname.split("/"),
            c = d.length,
            d[c - 1].indexOf(".mobile.html") && (d[c - 1] = d[c - 1].replace(".mobile.html", ".html")));
    d = d.join("/");
    c = void 0 != $("#campaignPageUrl").val() && "" != $("#campaignPageUrl").val() ? $("#campaignPageUrl").val().split("/") : "";
    var e = void 0 != $("#campaignRedirectionLink").val() && "" != $("#campaignRedirectionLink").val() ? $("#campaignRedirectionLink").val().split("/") : ""
        , h = void 0 != getUserBasicInfoField("qmilesExpiryDate") && null != getUserBasicInfoField("qmilesExpiryDate") ? getUserBasicInfoField("qmilesExpiryDate").split("-") : "2019-01-01";
    h = h[1] + "/" + h[0] + "/" + h[2];
    h = new Date(h);
    if ("" != c) {
        var m = c.length;
        c = c[m - 2] + "/" + c[m - 1]
    }
    "" != e && (m = e.length,
        e = e[m - 2] + "/" + e[m - 1]);
    var u = !1;
    if (-1 !== window.location.pathname.indexOf(c) || -1 !== window.location.pathname.indexOf(e))
        u = !0;
    e = void 0 != $("#campaignEndDate").val() ? new Date($("#campaignEndDate").val()) : new Date;
    m = new Date;
    var k = getUserBasicInfoField("tier").toLowerCase()
        , f = !1
        , n = "";
    if (void 0 == k || null == k || "" == k)
        return !1;
    var r = {
        burgundy: "campaignBGCheck",
        silver: "campaignSLCheck",
        gold: "campaignGLCheck",
        platinum: "campaignPLCheck"
    }[k];
    $(".previousNext").css("display", "none");
    var q = e.getDate() + "-" + (e.getMonth() + 1) + "-" + e.getFullYear();
    0 < $(".modal-alert-block.campaign").length && e.getTime() > m.getTime() && e.getTime() >= h.getTime() && "true" == $("#" + r).val() && u && 0 < getUserBasicInfoField("qmilesExpiryAmount") && (n = '{ "alertType": "QMILES_EXP_OFFER", "expiryDate": "' + q + '", "ignored": false,"promoCode":"' + $("#campaignPromoCode").val() + '"}',
        u = $(".modal-alert-block.campaign").find(".messageBody").html(),
        r = null != getUserBasicInfoField("qmilesExpiryAmount") && "" != getUserBasicInfoField("qmilesExpiryAmount") ? parseFloat(getUserBasicInfoField("qmilesExpiryAmount")) : 0,
        r = r.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
        u = u.replace("{qmiles}", r),
        $(".modal-alert-block.campaign").find(".messageBody").html(u));
    var l = !1;
    0 < $(".modal-alert-block.campaign").length && e.getTime() > m.getTime() && e.getTime() >= h.getTime() && -1 !== window.location.pathname.indexOf(c) && 0 < getUserBasicInfoField("qmilesExpiryAmount") && "burgundy" === k && (l = !0);
    "true" == getActualCookieValue("isCampFFP") && "undefined" !== typeof isProfileCampaign && (isProfileCampaign = !0);
    $(document).on("click", "#campaignActionButton", function () {
        var v = "";
        v = new Date;
        v.setTime(v.getTime() + -1728E5);
        v = "; expires\x3d" + v.toUTCString();
        document.cookie = "isCampFFP\x3dtrue" + v + "; path\x3d/";
        $.ajax({
            type: "GET",
            url: "/qr/qrweb/qmilesOffersRegisterservlet",
            data: {
                promoCode: $("#campaignPromoCode").val(),
                customerProfileId: getUserBasicInfoField("customerProfileId"),
                sessionID: getCookieValue("QRTOKEN")
            },
            cache: !1,
            success: function (E) {
                if ("true" === E) {
                    $("#campaignActionButton").text($("#campaignRegisteredButtonTxt").val());
                    E = $("#campaignRedirectionLink").val().split("/");
                    var J = $("#campaignRedirectionLink").val().split("/").length;
                    E = E[J - 2] + "/" + E[J - 1];
                    -1 === window.location.pathname.indexOf(E) ? setTimeout(function () {
                        $("body").append('\x3ca id\x3d"campaignRedirectionAnchor" href\x3d"' + $("#campaignRedirectionLink").val() + '?offerSuccess\x3dtrue"\x3eRedirection\x3c/a\x3e');
                        $("#campaignRedirectionAnchor")[0].click()
                    }, 500) : ($("#alert-modal").modal("hide"),
                        $(".myProfileCampaignSuccessMessage").removeClass("hide"),
                        $([document.documentElement, document.body]).animate({
                            scrollTop: $(".myProfileCampaignSuccessMessage").offset().top - 200
                        }, 500))
                }
            }
        });
        buttonClickAction(window.location.href, "Register-campaignAlert", "T3-alert")
    });
    $(document).on("click", "#alert-modal button.close,#modal-alert-container a,#modal-alert-container .messageBody a", function () {
        createCookie("alertModalExpiry", "true");
        buttonClickAction(window.location.href, "Close- alert", "T3-alert")
    });
    var t = !1;
    try {
        if (void 0 != $("#modal-alert-container").html()) {
            var g = $("#isdashboardAlertsRequired").val()
                , p = getUserBasicInfoField("qPointsSalesInfoVO")
                , w = null != p && void 0 != p ? p.activity : ""
                , x = null != p && void 0 != p ? p.requiredQPoints : "0"
                , F = null != p && void 0 != p ? p.activityAllowed : !1
                , L = null != p && void 0 != p ? p.allowedQPoints : "0"
                , M = null != p && void 0 != p ? p.consentRequired : !1
                , P = function () {
                    if (null !== getFFPCookieValue("alertModalExpiry") && "" !== getFFPCookieValue("alertModalExpiry") || null === getFFPCookieValue("otherInfo"))
                        return !1;
                    $("#isQpointExpiry").val();
                    $("#currencyExpiryDays").val();
                    var v = new Date
                        , E = JSON.parse(getFFPCookieValue("basicInfo")).qpointsExpiryDate;
                    if (null != getFFPCookieValue("basicInfo") && void 0 !== E && "" != E && null != E) {
                        E = JSON.parse(getFFPCookieValue("basicInfo")).qpointsExpiryDate.split("-");
                        E = E[1] + "/" + E[0] + "/" + E[2];
                        var J = ((new Date(E)).getTime() - v.getTime()) / 864E5
                    }
                    if (null != getFFPCookieValue("otherInfo") && void 0 !== JSON.parse(getFFPCookieValue("otherInfo")).tierExpiry && null !== JSON.parse(getFFPCookieValue("otherInfo")).tierExpiry) {
                        var y = JSON.parse(getFFPCookieValue("otherInfo")).tierExpiry.split("-");
                        y = y[1] + "/" + y[0] + "/" + y[2];
                        y = ((new Date(y)).getTime() - v.getTime()) / 864E5
                    }
                    var H = !1
                        , N = parseInt($("#qpointInitialDuration").val());
                    E = parseInt($("#tierduration").val());
                    if (null != getUserBasicInfoField("tier") && "burgundy" === getUserBasicInfoField("tier").toLowerCase() && !0 === F) {
                        $("#qpointBodyBurgundy").val();
                        $(".modal-alert-block.qpoint .messageBody").empty();
                        y = $("#qpointBodyBurgundy").val();
                        M && "0" === x && (y = $("#qpointsMsgBodyBurgundyConsent").val());
                        y = y.replace("{qpoints}", x);
                        y = y.replace("{purqpoints}", L);
                        E = v.getFullYear();
                        var A = v.getMonth();
                        v = v.getDate();
                        v = window.qrServiceRef.translateDate(v + "-" + (A + 1) + "-" + (E + 1)).replace(/-/g, " ");
                        y = y.replace("{date}", v);
                        $(".modal-alert-block.qpoint .messageBody").html(y);
                        $(".modal-alert-container .tier").remove();
                        H = !0
                    } else
                        null != getUserBasicInfoField("tier") && "RETENTION" === w && "burgundy" !== getUserBasicInfoField("tier").toLowerCase() && y < E && !0 === F && (-1 != $("#tierMatchQpointsAlertPage").val().indexOf(d.replace(".html", "")) || "STUDENT" === getUserBasicInfoField("category") && -1 != $("#tierMatchQpointsAlertSCPage").val().indexOf(d.replace(".html", ""))) ? ($(".modal-alert-container .qpoint").remove(),
                            H = t = !0) : null != getUserBasicInfoField("tier") && "UPGRADE" === w && "burgundy" !== getUserBasicInfoField("tier").toLowerCase() && y < E && !0 === F && (-1 != $("#tierMatchQpointsAlertPage").val().indexOf(d.replace(".html", "")) || "STUDENT" === getUserBasicInfoField("category") && -1 != $("#tierMatchQpointsAlertSCPage").val().indexOf(d.replace(".html", ""))) ? ($(".modal-alert-block.tier .messageBody").empty(),
                                y = $("#tierMessageBodyUpgrade").val(),
                                v = getUserBasicInfoField("tier"),
                                E = getUserOtherInfoField("tierExpiry"),
                                E = window.qrServiceRef.translateDate(E).replace(/-/g, " "),
                                A = x,
                                t = !0,
                                y = $("#tierMessageBodyUpgrade").val(),
                                y = y.replace("{tierType}", $("#flyout_tier_" + v.toLowerCase()).val()),
                                y = y.replace("{tierExpiryDate}", E),
                                y = y.replace("{tierRenewalPoints}", A),
                                y = y.replace("{tierThreshold}", L),
                                $(".modal-alert-block.tier .messageBody").html(y),
                                $(".modal-alert-container .qpoint").remove(),
                                H = !0) : null != getUserBasicInfoField("tier") && ("RETENTION" === w || "UPGRADE" === w) && "burgundy" !== getUserBasicInfoField("tier").toLowerCase() && y > E && !0 === F ? ($(".modal-alert-container .tier").remove(),
                                    y = $(".modal-alert-block.qpoint .messageBody p").html(),
                                    v = getUserBasicInfoField("tier"),
                                    E = getUserOtherInfoField("tierExpiry"),
                                    E = window.qrServiceRef.translateDate(E).replace(/-/g, " "),
                                    A = x,
                                    "platinum" === getUserBasicInfoField("tier").toLowerCase() && 0 === parseInt(qpoints) && (w = "RETENTION"),
                                    y = "RETENTION" === w ? $(".modal-alert-block.qpoint .messageBody p").html() : $("#qpointBodyBurgundy").val(),
                                    M && "0" === x && (y = $("#qpointsMsgBodyBurgundyConsent").val()),
                                    void 0 != y && (y = y.replace("{tier}", $("#flyout_tier_" + v.toLowerCase()).val()),
                                        y = y.replace("{tierExpiryDate}", E),
                                        y = y.replace("{qpointsEarn}", x),
                                        y = y.replace(/{qpointsType}/g, Granite.I18n.get(w)),
                                        y = y.replace("{tierThreshold}", L),
                                        y = y.replace("{qpoints}", x),
                                        "RETENTION" === w ? y = y.replace("{nextTier}", $("#qpointsRetentionText").val()) : "UPGRADE" === w && (y = y.replace("{nextTier}", $("#qpointsUpgradeText").val())),
                                        $(".modal-alert-block.qpoint .messageBody p").html(y),
                                        H = !0)) : null != getUserBasicInfoField("tier") && "burgundy" !== getUserBasicInfoField("tier").toLowerCase() && J > N && !0 === F && !t && ($(".modal-alert-container .tier").remove(),
                                            y = $(".modal-alert-block.qpoint .messageBody p").html(),
                                            M && "0" === x && (y = $("#qpointsMsgBodyBurgundyConsent").val()),
                                            v = getUserBasicInfoField("tier"),
                                            E = getUserOtherInfoField("tierExpiry"),
                                            E = window.qrServiceRef.translateDate(E).replace(/-/g, " "),
                                            A = x,
                                            y = y.replace("{tier}", $("#flyout_tier_" + v.toLowerCase()).val()),
                                            y = y.replace("{tierExpiryDate}", E),
                                            y = y.replace("{qpointsEarn}", x),
                                            y = y.replace(/{qpointsType}/g, Granite.I18n.get(w)),
                                            y = y.replace("{nextTier}", "next tier"),
                                            y = y.replace("{tierThreshold}", L),
                                            y = y.replace("{qpoints}", x),
                                            $(".modal-alert-block.qpoint .messageBody p").html(y),
                                            H = !0);
                    if (void 0 != getFFPCookieValue("QRTOKEN") && null != getFFPCookieValue("QRTOKEN") && g || isProfileCampaign && "undefined" !== typeof isProfileCampaign) {
                        A = E = y = v = !1;
                        qmileRequest = ' { "alertInformationVos": [';
                        "Platinum" != getUserBasicInfoField("tier") && getdaysDifferenceAlerts(qmilesExpiryDate, $("#qmileduration").val()) && (-1 != $("#qmileAlertPageURL").val().indexOf(d) || -1 != $("#qmileAlertSCPageURL").val().indexOf(d)) && null == getUserBasicInfoField("qmilesAlert") && 0 < getUserBasicInfoField("qmilesExpiryAmount") && (qmileRequest = l ? qmileRequest + '\t{ "alertType": "QMILES","expiryDate": "' + qmilesExpiryDate + '","promoCode":"' + $("#campaignPromoCode").val() + '"}' : qmileRequest + '\t{ "alertType": "QMILES","expiryDate": "' + qmilesExpiryDate + '"}',
                            v = !0);
                        "Platinum" != getUserBasicInfoField("tier") && 0 < getUserBasicInfoField("qcreditsExpiryAmount") && getdaysDifferenceAlerts(qcreditsExpiryDate, $("#qcreditsduration").val()) && (-1 != $("#qcreditsAlertPageURL").val().indexOf(d) || -1 != $("#qcreditsAlertSCPageURL").val().indexOf(d)) && null == getUserBasicInfoField("qcreditAlert") && (v && (qmileRequest += ","),
                            qmileRequest = qmileRequest + '\t{ "alertType": "QCREDITS","expiryDate": "' + qcreditsExpiryDate + '"}',
                            y = !0);
                        if ("Platinum" != getUserBasicInfoField("tier") && 0 < getUserOtherInfoField("tierRenewQpoints") && getdaysDifferenceAlerts(tiersExpiryDate, $("#tierduration").val()) && (-1 != $("#tiersAlertPageURL").val().indexOf(d) || -1 != $("#tiersAlertSCPageURL").val().indexOf(d))) {
                            if (v || y)
                                qmileRequest += ",";
                            qmileRequest = qmileRequest + '\t{ "alertType": "TIER","expiryDate": "' + tiersExpiryDate + '"}';
                            E = !0
                        }
                        if (!(null != getUserBasicInfoField("serReqAlert") && void 0 != getUserBasicInfoField("serReqAlert") || -1 == $("#serreqAlertPageUrl").val().indexOf(d) && -1 == $("#serreqAlertSCPageUrl").val().indexOf(d))) {
                            if (v || y || E)
                                qmileRequest += ",";
                            qmileRequest += ' { "alertType" : "SVCREQUEST" } ';
                            A = !0
                        }
                        if (!H || void 0 == qpointExpiryDate || "undefined" == qpointExpiryDate || -1 == $("#qpointAlertPageURL").val().indexOf(d) && -1 == $("#qpointAlertSCPageURL").val().indexOf(d))
                            H = !1;
                        else {
                            if (v || y || E || A)
                                qmileRequest += ",";
                            qmileRequest = qmileRequest + '\t{ "alertType": "QPOINTS","expiryDate": "' + (void 0 != qpointExpiryDate && "undefined" != qpointExpiryDate ? qpointExpiryDate : "") + '"}'
                        }
                        var z = !1
                            , D = !1;
                        if ("burgundy" !== getUserBasicInfoField("tier").toLowerCase() && (-1 != $("#tierMatchQpointsAlertPage").val().indexOf(d.replace(".html", "")) || -1 != $("#tierMatchQpointsAlertSCPage").val().indexOf(d.replace(".html", "")))) {
                            if (v || y || E || A || H)
                                qmileRequest += ",";
                            z = !0;
                            if ("true" === $("#isQPointsTierMatchEnabled").val()) {
                                var R = tierMatchJson.filter(function (I) {
                                    return I.tier === k.toUpperCase()
                                });
                                void 0 != R[0] && (codeTierMatch = R[0].code);
                                qmileRequest = qmileRequest + '\t{ "alertType": "' + codeTierMatch + '"}'
                            }
                        }
                        H || $(".modal-alert-container .qpoint").remove();
                        (v || y || E || A || H || z) && "" != n && (qmileRequest += ",");
                        qmileRequest += n;
                        console.log("qmilesRequest " + qmileRequest);
                        var T;
                        qmileRequest.endsWith(",") && (qmileRequest = qmileRequest.replace(/,\s*$/, ""));
                        qmileRequest = qmileRequest + ' ],"customerProfileId": "' + getUserBasicInfoField("customerProfileId") + '"}';
                        var V = !1, S, U = !1, X = !1, W = !1;
                        window.qrServiceRef.zone.run(function () {
                            window.qrServiceRef.postReq($("#getAlertInformation").val(), qmileRequest, req_headers, "", {}).then(function (I) {
                                var C, O = $("#studentCompanionAlertPageLocation").val() + ".html", Y = $("#studentCompanionAlertSCPageLocation").val() + ".html", Q = d;
                                -1 !== d.indexOf(".swiftpopup.") && (Q = d.replace(".swiftpopup", ""));
                                var Z = -1 != O.indexOf(Q) || -1 != Y.indexOf(Q);
                                O = $("#reinstatePCURL").val() + ".html";
                                Y = $("#reinstateSCURL").val() + ".html";
                                var aa = -1 != O.indexOf(Q) || -1 != Y.indexOf(Q);
                                void 0 == I.errorObject && (void 0 == I.alertInformationVOs ? D = showServiceRequestModal = showTiertExpiryModal = showQcreditExpiryModal = showQmilesExpiryModal = !1 : $.each(I.alertInformationVOs, function (G, B) {
                                    if ("QMILES" == B.alertType && !B.ignored)
                                        showQmilesExpiryModal = !0;
                                    else if ("QCREDITS" == B.alertType && !B.ignored)
                                        showQcreditExpiryModal = !0;
                                    else if ("TIER" == B.alertType && !B.ignored)
                                        showTiertExpiryModal = !0;
                                    else if ("SVCREQUEST" == B.alertType && !B.ignored)
                                        showServiceRequestModal = !0;
                                    else if ("QPOINTS" == B.alertType && !B.ignored)
                                        showQpointsExpiryModal = !0;
                                    else if ("QPOINTS" != B.alertType || !B.ignored)
                                        if ("QMILES_EXP_OFFER" != B.alertType || B.ignored)
                                            if (B.alertType != codeTierMatch || B.ignored)
                                                if ("STUDENT_CONVERSN" != B.alertType || B.ignored)
                                                    if ("TIER_EXTENSION_2021" != B.alertType || B.ignored)
                                                        if ("TIER_EXTENSION_2021" == B.alertType && B.ignored)
                                                            S = !1;
                                                        else if ("GCC_QMILES" == B.alertType && !B.ignored && aa)
                                                            U = !0,
                                                                reinstatedQmilesValue = B.reinstatedQmiles,
                                                                G = B.reinstatedTier,
                                                                void 0 !== G && (reinstatedTierValue = G[0] + G.substring(1).toLocaleLowerCase());
                                                        else if ("GCC_TIER" == B.alertType && !B.ignored && aa) {
                                                            X = !0;
                                                            var K = B.reinstatedTier;
                                                            void 0 !== K && (G = K.split(""),
                                                                reinstatedTierValue = G[0] + K.substring(1).toLocaleLowerCase())
                                                        } else
                                                            "GCCQMILES_TIER" == B.alertType && !B.ignored && aa ? (W = !0,
                                                                reinstatedQmilesValue = B.reinstatedQmiles,
                                                                K = B.reinstatedTier,
                                                                void 0 !== K && (G = K.split(""),
                                                                    reinstatedTierValue = G[0] + K.substring(1).toLocaleLowerCase())) : "CMPN_REF_CNFRM" == B.alertType && !B.ignored && Z ? (showCompanionConfirmationAlerts = !0,
                                                                        companionConfirmationAlerts.push({
                                                                            alertType: B.alertType,
                                                                            expiryDate: B.expiryDate,
                                                                            ignored: B.ignored,
                                                                            firstName: B.qualifier1,
                                                                            lastName: B.qualifier2,
                                                                            referrerProfileId: B.qualifier3
                                                                        })) : "CMPN_REF_EXPRD" == B.alertType && !B.ignored && Z ? (showCompanionExpiredAlerts = !0,
                                                                            companionExpiredAlerts.push({
                                                                                alertType: B.alertType,
                                                                                expiryDate: B.expiryDate,
                                                                                ignored: B.ignored,
                                                                                firstName: B.qualifier1,
                                                                                lastName: B.qualifier2,
                                                                                referrerProfileId: B.qualifier3
                                                                            })) : "CMPN_REF_USED" == B.alertType && !B.ignored && Z ? (showCompanionUsedAlerts = !0,
                                                                                companionUsedAlerts.push({
                                                                                    alertType: B.alertType,
                                                                                    expiryDate: B.expiryDate,
                                                                                    ignored: B.ignored,
                                                                                    firstName: B.qualifier1,
                                                                                    lastName: B.qualifier2,
                                                                                    referrerProfileId: B.qualifier3
                                                                                })) : "CMPN_REF_INV" == B.alertType && !B.ignored && Z ? (showCompanionInvalidAlerts = !0,
                                                                                    companionInvalidAlerts.push({
                                                                                        alertType: B.alertType,
                                                                                        ignored: B.ignored
                                                                                    })) : "CMPN_REF_SLTFUL" == B.alertType && !B.ignored && Z ? (showCompanionSlotsFullAlerts = !0,
                                                                                        companionSlotsFullAlerts.push({
                                                                                            alertType: B.alertType,
                                                                                            expiryDate: B.expiryDate,
                                                                                            ignored: B.ignored,
                                                                                            firstName: B.qualifier1,
                                                                                            lastName: B.qualifier2,
                                                                                            referrerProfileId: B.qualifier3
                                                                                        })) : "CMPN_REF_DUPL" == B.alertType && !B.ignored && Z ? (showCompanionDuplicateAlerts = !0,
                                                                                            companionDuplicateAlerts.push({
                                                                                                alertType: B.alertType,
                                                                                                expiryDate: B.expiryDate,
                                                                                                ignored: B.ignored,
                                                                                                firstName: B.qualifier1,
                                                                                                lastName: B.qualifier2,
                                                                                                referrerProfileId: B.qualifier3
                                                                                            })) : "SWIFT" != B.alertType || B.ignored || (showSwiftAlert = !0);
                                                    else
                                                        S = !0;
                                                else
                                                    V = !0,
                                                        studentExpiryDate = B.expiryDate;
                                            else
                                                D = !0;
                                        else
                                            T = f = !0;
                                    "QMILES_EXP_OFFER" == B.alertType && B.ignored && ($(".modal-alert-block.qmile").remove(),
                                        T = !0);
                                    "QPOINTS" == B.alertType && (C = B.lastModifiedDate,
                                        C = void 0 != C ? C.split("-") : "",
                                        C = void 0 != C && "" != C ? C[1] + "-" + C[0] + "-" + C[2] : void 0,
                                        C = void 0 != C && "" != C ? new Date(C) : void 0)
                                }));
                                S ? (O = $(".modal-alert-block.tierMatch").find("#modal-label-title").text(),
                                    I = $(".modal-alert-block.tierMatch").find(".messageBody").html(),
                                    Q = getUserBasicInfoField("tier"),
                                    Q = void 0 != $("#flyout_tier_" + Q.toLowerCase()).val() ? $("#flyout_tier_" + Q.toLowerCase()).val() : Q,
                                    O = O.replace("{tier}", Q),
                                    $(".modal-alert-block.tierMatch").find("#modal-label-title").text(O),
                                    O = window.qrServiceRef.translateDate(getUserOtherInfoField("tierExpiry")).replace(/-/g, " "),
                                    I = I.replace(/{tier}/g, Q),
                                    I = I.replace(/{tierEndDate}/g, O),
                                    $(".modal-alert-block.tierMatch").find(".messageBody").html(I),
                                    $(".modal-alert-block.tierMatch").removeClass("hide"),
                                    $(".modal-alert-block.tierMatch").css({
                                        display: "block"
                                    }),
                                    $(".modal-alert-block.qmile").remove()) : $(".modal-alert-block.tierMatch").remove();
                                U && (I = $("#modal-label-title.qmilesReinstate").text(),
                                    I = I.replace("{qmilesAmount}", reinstatedQmilesValue).replace("{tierLevel}", reinstatedTierValue),
                                    $("#modal-label-title.qmilesReinstate").text(I),
                                    I = $(".qmilesReinstate.messageBody").text(),
                                    I = I.replace("{qmilesAmount}", reinstatedQmilesValue).replace("{tierLevel}", reinstatedTierValue),
                                    $(".qmilesReinstate.messageBody").html(I),
                                    $(".modal-alert-block.reinstate-match").removeClass("hide").addClass("show"),
                                    $("#modal-label-title.qmilesReinstate").removeClass("hide").addClass("show"),
                                    $(".qmilesReinstate.messageBody").removeClass("hide").addClass("show"),
                                    $(".qmilesReinstate.button").removeClass("hide").addClass("show"));
                                X && (I = $("#modal-label-title.tierReinstate").text(),
                                    I = I.replace("{qmilesAmount}", reinstatedQmilesValue).replace("{tierLevel}", reinstatedTierValue),
                                    $("#modal-label-title.tierReinstate").text(I),
                                    I = $(".tierReinstate.messageBody").text(),
                                    I = I.replace("{qmilesAmount}", reinstatedQmilesValue).replace("{tierLevel}", reinstatedTierValue),
                                    $(".tierReinstate.messageBody").html(I),
                                    $(".modal-alert-block.reinstate-match").removeClass("hide").addClass("show"),
                                    $("#modal-label-title.tierReinstate").removeClass("hide").addClass("show"),
                                    $(".tierReinstate.messageBody").removeClass("hide").addClass("show"),
                                    $(".tierReinstate.button").removeClass("hide").addClass("show"));
                                W && (I = $("#modal-label-title.qmilesTierReinstate").text(),
                                    I = I.replace("{qmilesAmount}", reinstatedQmilesValue).replace("{tierLevel}", reinstatedTierValue),
                                    $("#modal-label-title.qmilesTierReinstate").html(I),
                                    I = $(".qmilesTierReinstate.messageBody").text(),
                                    I = I.replace("{qmilesAmount}", reinstatedQmilesValue).replace("{tierLevel}", reinstatedTierValue),
                                    $(".qmilesTierReinstate.messageBody").html(I),
                                    $(".modal-alert-block.reinstate-match").removeClass("hide").addClass("show"),
                                    $("#modal-label-title.qmilesTierReinstate").removeClass("hide").addClass("show"),
                                    $(".qmilesTierReinstate.messageBody").removeClass("hide").addClass("show"),
                                    $(".qmilesTierReinstate.button").removeClass("hide").addClass("show"));
                                U || X || W || $(".modal-alert-block.reinstate-match").remove();
                                D ? ($("#qpoints-tier-match").removeClass("hide").addClass("show"),
                                    void 0 != R[0] && (I = R[0].messageID,
                                        I = $("#" + I).val(),
                                        Q = window.qrServiceRef.translateDate(getUserOtherInfoField("tierExpiry")).replace(/-/g, " "),
                                        I = I.replace("{qpoints}", R[0].points),
                                        I = I.replace("{tierExpiryDate}", Q),
                                        $("#qpoints-tier-match").find(".messageBody").text(I))) : $("#qpoints-tier-match").remove();
                                T && (showQmilesExpiryModal = !1,
                                    $(".modal-alert-block.qmile").remove());
                                f ? ($(".modal-alert-block.qmile").remove(),
                                    $(".modal-alert-block.campaign").removeClass("hide")) : $(".modal-alert-block.campaign").remove();
                                showQmilesExpiryModal ? (updateUserBasicInfoField("qmilesAlert", "false"),
                                    $(".modal-alert-container .qmile .messageBody").text($(".modal-alert-container .qmile .messageBody").text().replace("{qmiles}", parseInt(getUserBasicInfoField("qmilesExpiryAmount")).toLocaleString())),
                                    $(".modal-alert-container .qmile .messageBody").text($(".modal-alert-container .qmile .messageBody").text().replace("{qmilesExpiryDate}", window.qrServiceRef.translateDate(qmilesExpiryDate).replace(/-/g, " ")))) : $(".modal-alert-container .qmile").remove();
                                showQcreditExpiryModal ? (updateUserBasicInfoField("qcreditAlert", "false"),
                                    $(".modal-alert-container .qcredit .messageBody").text($(".modal-alert-container .qcredit .messageBody").text().replace("{qcredits}", parseInt(getUserBasicInfoField("qcreditsExpiryAmount")).toLocaleString())),
                                    $(".modal-alert-container .qcredit .messageBody").text($(".modal-alert-container .qcredit .messageBody").text().replace("{qcreditsExpiryDate}", window.qrServiceRef.translateDate(qcreditsExpiryDate).replace(/-/g, " ")))) : $(".modal-alert-container .qcredit").remove();
                                showTiertExpiryModal || t ? (I = getUserBasicInfoField("tier"),
                                    I = $("#flyout_tier_" + I.toLowerCase()).val(),
                                    $(".modal-alert-container .tier").remove(),
                                    0 < $("#tier-upgrade-story").length && "UPGRADE" === w ? showTierUpgradeStory(p) : 0 < $("#tier-retention-story").length && "RETENTION" === w && showTierRetentionStory(p)) : $(".modal-alert-container .tier").remove();
                                showServiceRequestModal ? (updateUserBasicInfoField("serReqAlert", "false"),
                                    $(".modal-alert-container .serreq .messageBody").text($(".modal-alert-container .serreq .messageBody").text())) : $(".modal-alert-container .serreq").remove();
                                t && 0 !== parseInt(x) && void 0 == S ? V || $(".modal-alert-container .modal-alert-block.tier").addClass("show") : $(".modal-alert-container .modal-alert-block.tier").remove();
                                showCompanionConfirmationAlerts && $.each(companionConfirmationAlerts, function (G, B) {
                                    var K = $("#companion-alert-static").clone();
                                    0 == G ? K.insertAfter("#companion-alert-static").attr("id", "companion-confirmation-alert-" + G).removeClass("hide").addClass("companion-confirmation-alert") : K.insertAfter("#companion-confirmation-alert-" + (G - 1)).attr("id", "companion-confirmation-alert-" + G).removeClass("hide").addClass("companion-confirmation-alert");
                                    G = K.find("h3.companion-confirmation").text().trim();
                                    G = G.replace("{firstName}", B.firstName);
                                    K.find("h3.companion-confirmation").text(G);
                                    K.attr("data-info", JSON.stringify(B));
                                    K.find(".companion-accept-btn,.companion-reject-btn", JSON.stringify(B));
                                    K.find(".companion-confirmation").removeClass("hide")
                                });
                                showCompanionExpiredAlerts && $.each(companionExpiredAlerts, function (G, B) {
                                    var K = $("#companion-alert-static").clone();
                                    0 == G ? showCompanionConfirmationAlerts ? K.insertAfter(".companion-confirmation-alert").last().attr("id", "companion-expired-" + G).removeClass("hide") : K.insertAfter("#companion-alert-static").attr("id", "companion-expired-" + G).removeClass("hide") : K.insertAfter("#companion-expired-alert-" + (G - 1)).attr("id", "companion-expired-" + G).removeClass("hide");
                                    K.attr("data-info", JSON.stringify(B));
                                    G = K.find("h3.companion-expired").text().trim();
                                    G = G.replace("{firstName}", B.firstName);
                                    K.find("h3.companion-expired").text(G);
                                    K.find(".companion-expired").removeClass("hide")
                                });
                                showCompanionUsedAlerts && $.each(companionUsedAlerts, function (G, B) {
                                    var K = $("#companion-alert-static").clone();
                                    0 == G ? showCompanionConfirmationAlerts ? K.insertAfter(".companion-confirmation-alert").last().attr("id", "companion-used-" + G).removeClass("hide") : K.insertAfter("#companion-alert-static").attr("id", "companion-used-" + G).removeClass("hide") : K.insertAfter("#companion-used-alert-" + (G - 1)).attr("id", "companion-used-" + G).removeClass("hide");
                                    K.attr("data-info", JSON.stringify(B));
                                    G = K.find("h3.companion-used").text().trim();
                                    G = G.replace("{firstName}", B.firstName);
                                    K.find("h3.companion-used").text(G);
                                    K.find(".companion-used").removeClass("hide")
                                });
                                showCompanionInvalidAlerts && $.each(companionInvalidAlerts, function (G, B) {
                                    var K = $("#companion-alert-static").clone();
                                    0 == G ? showCompanionConfirmationAlerts ? K.insertAfter(".companion-confirmation-alert").last().attr("id", "companion-invalid-alert-" + G).removeClass("hide") : K.insertAfter("#companion-alert-static").attr("id", "companion-invalid-alert-" + G).removeClass("hide") : K.insertAfter("#companion-invalid-alert-" + (G - 1)).attr("id", "companion-invalid-alert-" + G).removeClass("hide");
                                    K.attr("data-info", JSON.stringify(B));
                                    K.find(".companion-invalid").removeClass("hide")
                                });
                                showCompanionSlotsFullAlerts && $.each(companionSlotsFullAlerts, function (G, B) {
                                    var K = $("#companion-alert-static").clone();
                                    0 == G ? showCompanionConfirmationAlerts ? K.insertAfter(".companion-confirmation-alert").last().attr("id", "companion-slotfull-alert-" + G).removeClass("hide") : K.insertAfter("#companion-alert-static").attr("id", "companion-slotfull-alert-" + G).removeClass("hide") : K.insertAfter("#companion-slotfull-alert-" + (G - 1)).attr("id", "companion-slotfull-alert-" + G).removeClass("hide");
                                    K.attr("data-info", JSON.stringify(B));
                                    G = K.find("h3.companion-slotfull").text().trim();
                                    G = G.replace("{firstName}", B.firstName);
                                    K.find("h3.companion-slotfull").text(G);
                                    K.find(".companion-slotfull").removeClass("hide")
                                });
                                showCompanionDuplicateAlerts && $.each(companionDuplicateAlerts, function (G, B) {
                                    var K = $("#companion-alert-static").clone();
                                    0 == G ? showCompanionConfirmationAlerts ? K.insertAfter(".companion-confirmation-alert").last().attr("id", "companion-duplicate-alert-" + G).removeClass("hide") : K.insertAfter("#companion-alert-static").attr("id", "companion-duplicate-alert-" + G).removeClass("hide") : K.insertAfter("#companion-duplicate-alert-" + (G - 1)).attr("id", "companion-duplicate-alert-" + G).removeClass("hide");
                                    K.attr("data-info", JSON.stringify(B));
                                    G = K.find("h3.companion-duplicate").text().trim();
                                    G = G.replace("{firstName}", B.firstName);
                                    K.find("h3.companion-duplicate").text(G);
                                    K.find(".companion-duplicate").removeClass("hide")
                                });
                                showCompanionDuplicateAlerts || showCompanionSlotsFullAlerts || showCompanionUsedAlerts || showCompanionInvalidAlerts || showCompanionExpiredAlerts || showCompanionConfirmationAlerts || $(".modal-alert-block#companion-alert-static").remove();
                                (!showSwiftAlert || showSwiftAlert && "" == $("#generalInfo-alert .messageBody").text()) && $(".modal-alert-block#generalInfo-alert").remove();
                                0 !== parseInt(x) && 0 < parseInt(qpoints) && (-1 !== $("#qpointAlertPageURL").val().indexOf(d) || -1 !== $("#qpointAlertSCPageURL").val().indexOf(d)) && (void 0 != C ? (I = ((new Date).getTime() - C.getTime()) / 864E5,
                                    Q = $("#qpointduration").val(),
                                    H && showQpointsExpiryModal && I < parseInt(void 0 != Q ? Q : "0") ? $(".modal-alert-container .modal-alert-block.qpoint").addClass("show").removeClass("hide") : $(".modal-alert-container .qpoint").remove()) : H && J < N ? $(".modal-alert-container .modal-alert-block.qpoint").addClass("show").removeClass("hide") : $(".modal-alert-container .qpoint").remove());
                                0 === parseInt(qpoints) && "burgundy" === getUserBasicInfoField("tier").toLowerCase() && $(".modal-alert-container .qpoint").remove();
                                I = $("#studentAlertPageLocation").val() + ".html";
                                Q = $("#studentAlertSCPageLocation").val() + ".html";
                                !V || -1 == I.indexOf(d) && -1 == Q.indexOf(d) || 0 != $(".modal-alert-container .modal-alert-block:visible").length ? $(".modal-alert-block.studentupgrade").remove() : ($("#showstudentUpgradeButton").attr("disabled", "disabled"),
                                    $(".modal-alert-block.studentupgrade").closest(".modal-alert-overlay").addClass("student-alert"),
                                    $(".modal-alert-block.studentupgrade").removeClass("hide").addClass("show"));
                                1 <= $(".modal-alert-container .modal-alert-block").length && (1 == $(".modal-alert-container .modal-alert-block").length && $("#alert-modal .previousNext").hide(),
                                    $("#alert-modal").modal(),
                                    $(".modal-alert-container .modal-alert-block").first().hasClass("studentupgrade") ? $(".modal-alert-block.studentupgrade").closest(".modal-alert-overlay").addClass("student-alert") : $(".modal-alert-block.studentupgrade").closest(".modal-alert-overlay").removeClass("student-alert"),
                                    b())
                            })
                        })
                    }
                };
            setTimeout(function () {
                "/apps/qrweb/templates/homepage" !== $("#current-page-template").val() && P()
            }, 800);
            $(document).on("click", ".donotdisturb", function () {
                try {
                    var v = ""
                        , E = ""
                        , J = "";
                    $(this);
                    if ($("#modal-alert-container").find(".slick-slide.slick-current.slick-active").hasClass("qmile"))
                        v = "QMILES",
                            E = qmilesExpiryDate;
                    else if ($("#modal-alert-container").find(".slick-slide.slick-current.slick-active").hasClass("qcredit"))
                        v = "QCREDITS",
                            E = qcreditsExpiryDate;
                    else if ($("#modal-alert-container").find(".slick-slide.slick-current.slick-active").hasClass("tier"))
                        v = "TIER",
                            E = tiersExpiryDate;
                    else if ($("#modal-alert-container").find(".slick-slide.slick-current.slick-active").hasClass("qpoint"))
                        v = "QPOINTS",
                            E = qpointExpiryDate;
                    else if ($("#modal-alert-container").find(".slick-slide.slick-current.slick-active").hasClass("serreq"))
                        v = "SVCREQUEST";
                    else if ($("#modal-alert-container").find(".slick-slide.slick-current.slick-active").hasClass("campaign")) {
                        v = "QMILES_EXP_OFFER";
                        var y = $("#campaignEndDate").val().split("/");
                        E = y[2] + "-" + y[1] + "-" + y[0]
                    } else
                        $("#modal-alert-container").find(".slick-slide.slick-current.slick-active").hasClass("qpoints-tier-match") ? v = codeTierMatch : $("#modal-alert-container").find(".slick-slide.slick-current.slick-active").hasClass("studentupgrade") ? v = "STUDENT_CONVERSN" : $("#modal-alert-container").find(".slick-slide.slick-current.slick-active").hasClass("tierMatch") ? v = "TIER_EXTENSION_2021" : ($("#modal-alert-container").find(".slick-slide.slick-current.slick-active").hasClass("qmilesReinstate") || $("#modal-alert-container").find(".slick-slide.slick-current.slick-active").hasClass("reinstate-match")) && $("#modal-alert-container").find(".qmilesReinstate.messageBody").is(":visible") ? v = "GCC_QMILES" : ($("#modal-alert-container").find(".slick-slide.slick-current.slick-active").hasClass("tierReinstate") || $("#modal-alert-container").find(".slick-slide.slick-current.slick-active").hasClass("reinstate-match")) && $("#modal-alert-container").find(".tierReinstate.messageBody").is(":visible") ? v = "GCC_TIER" : ($("#modal-alert-container").find(".slick-slide.slick-current.slick-active").hasClass("qmilesTierReinstate") || $("#modal-alert-container").find(".slick-slide.slick-current.slick-active").hasClass("reinstate-match")) && $("#modal-alert-container").find(".qmilesTierReinstate.messageBody").is(":visible") ? v = "GCCQMILES_TIER" : $("#modal-alert-container").find(".slick-slide.slick-current.slick-active").hasClass("companion-alert") ? (v = $("#modal-alert-container").find(".companion-alert:visible").data("info").alertType,
                            J = $("#modal-alert-container").find(".companion-alert:visible").data("info").referrerProfileId) : $("#modal-alert-container").find(".slick-slide.slick-current.slick-active").hasClass("generalInfo-alert") && (v = "SWIFT");
                    y = 0;
                    var H = !0;
                    if ("qpoint" == $(this).attr("data-text") || $("#modal-alert-container").find(".qpoint").is(":visible"))
                        y = 1;
                    for (var N = 0; N <= y; N++) {
                        1 === y && 0 == N ? H = !1 : 1 === y && 1 == N && (H = !0);
                        var A = '{"alertInformationVO": {"alertType": "' + v + '","expiryDate": "' + E + '","ignored": ' + H + '},"customerProfileId": "' + getUserBasicInfoField("customerProfileId") + '"}';
                        "SVCREQUEST" == v ? A = '{"alertInformationVO": {"alertType": "' + v + '","expiryDate": "","ignored": ' + H + '},"customerProfileId": "' + getUserBasicInfoField("customerProfileId") + '"}' : v == codeTierMatch || "TIER_EXTENSION_2021" == v ? A = '{"alertInformationVO": {"alertType": "' + v + '","ignored": ' + H + '},"customerProfileId": "' + getUserBasicInfoField("customerProfileId") + '"}' : "STUDENT_CONVERSN" == v ? A = '{"alertInformationVO": {"alertType": "' + v + '","expiryDate": "' + studentExpiryDate + '","ignored": ' + H + '},"customerProfileId": "' + getUserBasicInfoField("customerProfileId") + '"}' : "GCC_QMILES" == v ? A = '{"alertInformationVO": {"alertType": "' + v + '","ignored": ' + H + '},"customerProfileId": "' + getUserBasicInfoField("customerProfileId") + '"}' : "GCC_TIER" == v ? A = '{"alertInformationVO": {"alertType": "' + v + '","ignored": ' + H + '},"customerProfileId": "' + getUserBasicInfoField("customerProfileId") + '"}' : "GCCQMILES_TIER" == v ? A = '{"alertInformationVO": {"alertType": "' + v + '","ignored": ' + H + '},"customerProfileId": "' + getUserBasicInfoField("customerProfileId") + '"}' : "CMPN_REF_CNFRM" == v || "CMPN_REF_EXPRD" == v || "CMPN_REF_USED" == v || "CMPN_REF_INV" == v || "CMPN_REF_SLTFUL" == v || "CMPN_REF_DUPL" == v ? A = '{"alertInformationVO": {"alertType": "' + v + '","ignored": ' + H + ',"qualifier3":"' + J + '"},"customerProfileId": "' + getUserBasicInfoField("customerProfileId") + '"}' : "SWIFT" == v && (A = '{"alertInformationVO": {"alertType": "' + v + '","ignored": ' + H + '},"customerProfileId": "' + getUserBasicInfoField("customerProfileId") + '"}');
                        window.qrServiceRef.zone.run(function () {
                            window.qrServiceRef.postReq($("#updateAlertInformation").val(), A, req_headers, "", {}).then(function (z) {
                                void 0 != z.status && z.status && (z = new Date,
                                    z.setTime(z.getTime() + -1728E5),
                                    z.toUTCString(),
                                    $(".modal-alert-container").slick("slickRemove", $("#modal-alert-container").find(".slick-slide.slick-current.slick-active").attr("data-slick-index")),
                                    $(".modal-alert-container .modal-alert-block").first().addClass("show").removeClass("hide"),
                                    void 0 != $(".modal-alert-container .modal-alert-block") && 1 == $(".modal-alert-container .modal-alert-block").length ? ($(".previousNext").css("display", "none"),
                                        $(".modal-alert-container .modal-alert-block #modal-label-title").first().focus()) : void 0 != $(".modal-alert-container .modal-alert-block") && 0 == $(".modal-alert-container .modal-alert-block").length && ($("#alert-modal").css("display", "none"),
                                            $("body").removeClass("modal-open"),
                                            $(".modal-backdrop").removeClass("in"),
                                            $(".modal-backdrop").remove()))
                            })
                        })
                    }
                } catch (z) {
                    console.log("error " + z)
                }
                buttonClickAction(window.location.href, "Do not show again", "T3-alert")
            })
        }
    } catch (v) {
        console.log("error " + v)
    }
    $(document).on("change", ".modal-alert-block.studentupgrade #f1211000", function () {
        $(this).is(":checked") ? $("#showstudentUpgradeButton").removeAttr("disabled") : $("#showstudentUpgradeButton").attr("disabled", "disabled")
    });
    $(document).on("click", "#showstudentUpgradeButton", function () {
        if ("disabled" === $("#showstudentUpgradeButton").attr("disabled"))
            return !1;
        $("#showstudentUpgradeButton").hide();
        $(".student-upgrade-buttons").fadeIn("slow");
        buttonClickAction(window.location.href, "Convert to Student Club- alert", "T3-alert")
    });
    $(document).on("click", "#cancelStudentUpgrade", function () {
        $("#alert-modal").modal("hide");
        buttonClickAction(window.location.href, "cancel-StudentUpgrade- alert", "T3-alert")
    });
    $(document).on("click", "#studentUpgradeButton", function () {
        $(this).attr("data-link");
        if ("disabled" === $("#showstudentUpgradeButton").attr("disabled"))
            return !1;
        a();
        buttonClickAction(window.location.href, "Convert to Student Club-studentUpgrade- alert", "T3-alert")
    });
    $(document).on("click", ".companion-accept-btn", function () {
        showSpinnerMobileApp($(".companion-t3-spinner-container"), "spinner-full-page");
        var v = $(this)
            , E = $("#companionReferralServiceUri").val()
            , J = {
                customerProfileId: getUserBasicInfoField("customerProfileId"),
                companionAction: "ACCEPT",
                referrerProfileId: v.closest(".companion-alert").data("info").referrerProfileId
            };
        window.qrServiceRef.zone.run(function () {
            window.qrServiceRef.postReq(E, J, req_headers, "", {}).then(function (y) {
                var H = y.errorObject;
                void 0 === H ? y.referralSuccessful ? (y = v.closest(".companion-alert").find(".companion-confirmation-success").text(),
                    y = y.replace("{firstName}", $(".companion-accept-btn").closest(".companion-alert").data("info").firstName),
                    v.closest(".companion-alert").find(".companion-confirmation-success").text(y).removeClass("hide"),
                    v.parent().parent().find(".companion-confirmation-prompt").addClass("hide"),
                    v.parent().find(".companion-reject-btn").addClass("hide"),
                    v.addClass("hide"),
                    v.parent().find(".companion-okay-btn").removeClass("hide")) : v.closest(".companion-alert").find(".companion-confirmation-error").text(Granite.I18n.get(failureReason)).removeClass("hide") : v.closest(".companion-alert").find(".companion-confirmation-error").html(H[0].errorDescription).removeClass("hide");
                hideSpinnerMobileApp($(".companion-t3-spinner-container"), "spinner-full-page")
            })
        })
    });
    $(document).on("click", ".companion-reject-btn", function () {
        showSpinnerMobileApp($(".companion-t3-spinner-container"), "spinner-full-page");
        var v = $(this)
            , E = $("#companionReferralServiceUri").val()
            , J = {
                customerProfileId: getUserBasicInfoField("customerProfileId"),
                companionAction: "REJECT",
                referrerProfileId: v.closest(".companion-alert").data("info").referrerProfileId
            };
        window.qrServiceRef.zone.run(function () {
            window.qrServiceRef.postReq(E, J, req_headers, "", {}).then(function (y) {
                var H = y.errorObject;
                void 0 === H ? y.referralSuccessful ? (y = v.closest(".companion-alert").find(".companion-confirmation-failure").text(),
                    y = y.replace("{firstName}", v.closest(".companion-alert").data("info").firstName),
                    v.closest(".companion-alert").find(".companion-confirmation-failure").text(y).removeClass("hide"),
                    v.parent().parent().find(".companion-confirmation-prompt").addClass("hide"),
                    v.parent().find(".companion-accept-btn").addClass("hide"),
                    v.addClass("hide"),
                    v.parent().find(".companion-okay-btn").removeClass("hide")) : v.closest(".companion-confirmation-error").text(Granite.I18n.get(failureReason)).removeClass("hide") : v.closest(".companion-confirmation-error").html(H[0].errorDescription).removeClass("hide");
                hideSpinnerMobileApp($(".companion-t3-spinner-container"), "spinner-full-page")
            })
        })
    });
    $(document).on("click", ".companion-okay-btn", function () {
        $(this).parents(".modal-alert-container").find(".slick-next").hasClass("slick-disabled") || 0 == $(".modal-alert-container").find(".slick-next").length ? $("#alert-modal").modal("hide") : $(".modal-alert-container").slick("slickRemove", $(this).closest(".slick-slide").attr("data-slick-index"))
    });
    $(document).on("click", "#qmilesTierReinstate", function () {
        buttonClickAction(window.location.href, "Update now-qmilesTierReinstate- alert", "T3-alert")
    });
    $(document).on("click", "#tierReinstate", function () {
        buttonClickAction(window.location.href, "Update now-tierReinstate- alert", "T3-alert")
    });
    $(document).on("click", "#qmilesReinstate", function () {
        buttonClickAction(window.location.href, "Update now -qmilesReinstate- alert", "T3-alert")
    });
    $(document).on("click", "#tiermatchlink", function () {
        buttonClickAction($("#tiermatchlink").attr("href"), "Learn more-tiermatch- alert", "T3-alert")
    });
    $(document).on("click", "#ctaurl", function () {
        buttonClickAction($("#ctaurl").attr("href"), "Read now- reinstatealert", "T3-alert")
    });
    $(document).on("click", ".slick-next", function () {
        buttonClickAction(window.location.href, "next-arrow- alert", "T3-alert")
    });
    $(document).on("click", ".slick-prev", function () {
        buttonClickAction(window.location.href, "previous-arrow- alert", "T3-alert")
    })
});
function postQbizData() {
    try {
        var a = getFFPCookieValue("loginRequest")
            , b = $("#defaultURL").val();
        if (null !== a && "" !== a && "undefined" !== typeof a) {
            var c = JSON.parse(a)
                , d = ""
                , e = ""
                , h = $("#nspHostName").val()
                , m = $("#qrHomeHostName").val();
            $.each(c[0], function (u, k) {
                if ("callBackUrl" === u) {
                    var f = getHostName(k);
                    f === h ? e = "NSP" : f === m && (e = "QRHOME")
                }
                d += '\x3cinput type\x3d"hidden" value\x3d"' + k + '" name\x3d"' + u + '" /\x3e'
            });
            $("#j-qbiz-login-form").attr("action", "");
            $("#j-qbiz-login-form").empty();
            "NSP" === e ? $("#j-qbiz-login-form").attr("action", $("#nspURL").val()) : "QRHOME" === e ? $("#j-qbiz-login-form").attr("action", $("#qrHomeURL").val()) : $("#j-qbiz-login-form").attr("action", b);
            $("#j-qbiz-login-form").append(d)
        } else
            $("#j-qbiz-login-form").attr("action", b),
                $("#j-qbiz-login-form").empty();
        $("#j-qbiz-login-form").submit()
    } catch (u) { }
}
$(document).ready(function () {
    var a = getFFPCookieValue("flightBookings");
    null == getFFPCookieValue("QRTOKEN") || void 0 != $("#upcomingTripsJS").val() || isMobileApp() || null != a && void 0 != a || getupcomingTripsFlyout();
    a = $("#mobileeditProfileLink").val();
    var b = $("#mobiledashboardLink").val()
        , c = $("#desktopeditProfileLink").val()
        , d = $("#desktopdashboardLink").val()
        , e = $("#jointheprivilegeclub_desktop").val()
        , h = $("#jointheprivilegeclub_mobile").val();
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? ($("#dashboardLinkAnchor").attr("href", b),
        $("#editProfileLinkAnchor").attr("href", a + "?selLang\x3d"),
        $("#jointheprivilegeclub").attr("href", h)) : ($("#dashboardLinkAnchor").attr("href", d),
            $("#editProfileLinkAnchor").attr("href", c),
            $("#jointheprivilegeclub").attr("href", e));
    -1 != navigator.userAgent.indexOf("Mobile") ? ($("#dashboardLinkAnchor").attr("href", b),
        $("#editProfileLinkAnchor").attr("href", a + "?selLang\x3d"),
        $("#jointheprivilegeclub").attr("href", h)) : ($("#dashboardLinkAnchor").attr("href", d),
            $("#editProfileLinkAnchor").attr("href", c),
            $("#jointheprivilegeclub").attr("href", e));
    "fr" === $("#page-locale").val() ? ($(".personalized-drop .button-block .btn").css({
        "padding-left": "3px"
    }),
        $(".personalized-drop .button-block").css({
            "max-width": "initial"
        }),
        $(".personalized-drop .button-block").css({
            margin: "0 auto 10px"
        })) : "pt" === $("#page-locale").val() && ($(".personalized-drop .button-block .btn").css({
            "padding-left": "10px"
        }),
            $(".personalized-drop .button-block").css({
                "max-width": "initial"
            }),
            $(".personalized-drop .button-block").css({
                margin: "0 auto 10px"
            }))
});
function getupcomingTripsFlyout() {
    if ("release1B" === $("#loginType").val() && void 0 == $("#upcomingTripsJS").val() && !$(".personalized-drop").hasClass("processing-trips"))
        try {
            $(".personalized-drop").addClass("processing-trips");
            var a = "NO";
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && (a = "YES");
            var b = {
                pageIndex: 1,
                pageSize: 1,
                destinationRepoPath: $("#flyoutDestRepoPath").val(),
                allDestinationsPath: $("#alldestination_flyout").val(),
                updateLatestTripCookie: "true",
                flyoutRequest: "true",
                mobileSite: a,
                defaultImage: void 0 != $("#defaultImageDestinationPath").val() ? $("#defaultImageDestinationPath").val() : ""
            }
                , c = $("#flyout-upcomingtrips-spinner");
            showSpinnerMobileApp(c, "spinner-active");
            $.ajax({
                type: "GET",
                url: "/qr/qrweb/upcoming-trips",
                data: b,
                cache: !1,
                success: function (d) {
                    void 0 != window.showFlyoutTrip && window.showFlyoutTrip();
                    $(".personalized-drop").removeClass("processing-trips")
                },
                error: function (d) {
                    $(".personalized-drop").removeClass("processing-trips")
                }
            })
        } catch (d) { }
}
Granite.I18n.setLocale($("#page-locale").val());
var sess_pollInterval = 1E4, sess_expirationMinutes = 20, sess_warningMinutes = 19, sess_intervalID, sess_lastActivity;
cryptoAlgorithmSelected = $("#cryptoAlgorithm").val();
function sessionExtendMethod() {
    if ("true" == $("#isPublishInstance").val()) {
        var a = $("#verifyUserServiceURL").val();
        if ("" !== a && void 0 !== a) {
            var b = getFFPCookieValue("QRTOKEN")
                , c = {
                    token: b
                };
            "undefined" != typeof b && null != b && "" != b && window.qrServiceRef.postReq(a, c, req_headers, "", {}).then(function (d) {
                d.status ? (sess_lastActivity = new Date,
                    localStorage.setItem("sessionLastAcitivity", "" + sess_lastActivity)) : null != getFFPCookieValue("QRTOKEN") && (logout(),
                        addComponentPageEvent("login", "session expired", "", ""))
            })
        }
    }
}
window.initSession = function (a) {
    isMobileApp() || (sess_lastActivity = a || new Date,
        a = localStorage.getItem("sessionLastAcitivity"),
        null == a || void 0 === a ? localStorage.setItem("sessionLastAcitivity", "" + sess_lastActivity) : (localStorage.setItem("sessionLastAcitivity", "" + sess_lastActivity),
            sess_lastActivity = new Date(a)),
        "true" == $("#isPublishInstance").val() && sessSetInterval())
}
    ;
function sessSetInterval() {
    clearInterval(sess_intervalID);
    isMobileApp() || (sess_intervalID = setInterval("sessInterval()", sess_pollInterval))
}
function sessInterval() {
    if (void 0 == getFFPCookieValue("QRTOKEN") || null == getFFPCookieValue("QRTOKEN") || isMobileApp())
        a = localStorage.getItem("sessionLastAcitivity"),
            null !== a && void 0 !== a && localStorage.removeItem("sessionLastAcitivity"),
            clearInterval(sess_intervalID);
    else {
        var a = localStorage.getItem("sessionLastAcitivity");
        null == a || void 0 === a ? (localStorage.setItem("sessionLastAcitivity", "" + sess_lastActivity),
            sessSetInterval()) : sess_lastActivity = new Date(a);
        (new Date - sess_lastActivity) / 1E3 / 60 >= sess_warningMinutes && (localStorage.setItem("sessionExpired", "true"),
            logout(),
            addComponentPageEvent("login", "session expired", "", ""))
    }
}
var countriesFlagConfigPath = "/content/dam/images/custom/flags/"
    , removedCurrencies = ["AZN", "GEL", "IRR", "VND"]
    , removedCountries = ["AZ", "GE", "IR", "VN"];
window.ANDROID_PLATFORM = "ANDROID";
window.IOS_PLATFORM = "IOS";
var mobilePlatform;
function getFFPCookieValue(a) {
    if ("basicInfo" === a || "otherInfo" === a)
        document.cookie = a + "\x3d; Path\x3d/;domain\x3d.qatarairways.com; Expires\x3dThu, 01 Jan 1970 00:00:01 GMT;";
    var b = getCookieValueAsIs(a)
        , c = null;
    null != b && ("QRTOKEN" == a ? c = b : "loginRequest" == a || "SAC_ERROR" == a ? c = decrypt(b) : "AES_GCM" == cryptoAlgorithmSelected ? (c = getAesGcmEncryptedCookieValue(a),
        null == c && (c = AES_GCM_decrypt(b))) : c = decryptUserData(b));
    return c
}
function toCamelCase(a) {
    return void 0 != a && null != a && "" != a && 1 <= a.length ? a.charAt(0).toUpperCase() + a.slice(1).toLowerCase() : void 0 != a && null != a && "" != a && 1 == a.length ? a.charAt(0).toUpperCase() : ""
}
function getCookieValue(a) {
    var b = document.cookie
        , c = b.indexOf(" " + a + "\x3d");
    -1 == c && (c = b.indexOf(a + "\x3d"));
    -1 == c ? b = null : (c = b.indexOf("\x3d", c) + 1,
        a = b.indexOf(";", c),
        -1 == a && (a = b.length),
        b = unescape(b.substring(c, a)));
    return b
}
function getCookieValueAsIs(a) {
    var b = document.cookie
        , c = b.indexOf(" " + a + "\x3d");
    -1 == c && (c = b.indexOf(a + "\x3d"));
    -1 == c ? b = null : (c = b.indexOf("\x3d", c) + 1,
        a = b.indexOf(";", c),
        -1 == a && (a = b.length),
        b = unescape(b.substring(c, a)));
    return b
}
function setCookie(a, b, c) {
    var d = new Date;
    d.setTime(d.getTime() + 864E5 * c);
    c = "expires\x3d" + d.toGMTString();
    document.cookie = a + "\x3d" + b + ";" + c + ";"
}
function createSimpleCookie(a, b) {
    document.cookie = a + "\x3d" + b + "; path\x3d/"
}
function createCookie(a, b) {
    document.cookie = a + "\x3d; Path\x3d/;domain\x3d.qatarairways.com; Expires\x3dThu, 01 Jan 1970 00:00:01 GMT;";
    b = encryptUserData(b);
    document.cookie = a + "\x3d" + b + "; path\x3d/"
}
function deleteCookie(a) {
    var b = new Date;
    b.setDate(b.getDate() + -1);
    b = escape("") + ("; expires\x3d" + b.toUTCString());
    document.cookie = a + "\x3d" + b + "; path\x3d/"
}
function getUserBasicInfoField(a) {
    var b = getFFPCookieValue("basicInfo");
    if (null != b && "{}" != b)
        return b = JSON.parse(b),
            "object" != typeof b && (b = JSON.parse(b)),
            b[a]
}
function getActualUserBasicInfoField(a) {
    var b = getActualCookieValue("basicInfo");
    if (null != b && "{}" != b)
        return b = JSON.parse(b),
            "object" != typeof b && (b = JSON.parse(b)),
            b[a]
}
function getUserOtherInfoField(a) {
    var b = getFFPCookieValue("otherInfo");
    if (null != b)
        return b = JSON.parse(b),
            "object" != typeof b && (b = JSON.parse(b)),
            b[a]
}
function getUserOtpContactInfoField(a) {
    var b = getFFPCookieValue("otpContactInfo");
    return null != b && "{}" != b ? JSON.parse(b)[a] : ""
}
function updateUserBasicInfoField(a, b) {
    var c = getFFPCookieValue("basicInfo");
    null != c && "{}" != c && (c = JSON.parse(c),
        "string" == typeof c && (c = JSON.parse(c)),
        void 0 != b && "qPointsSalesInfoVO" === a && 0 == b ? (c.qPointsSalesInfoVO.activityAllowed = !1,
            delete c[a].activity,
            delete c[a].allowedQPoints,
            delete c[a].requiredQPoints) : void 0 != b && "" != b && 0 < b.length ? c[a] = b : delete c[a],
        a = JSON.stringify(c),
        createCookie("basicInfo", a),
        mobilePlatform == window.IOS_PLATFORM && setupWebViewJavascriptBridge(function (d) {
            d.callHandler("fetchAndCacheInfoCookie", "", function () { })
        }))
}
function updateUserOtherInfoField(a, b) {
    var c = getFFPCookieValue("otherInfo");
    null != c && "{}" != c && (c = JSON.parse(c),
        "string" == typeof basicInfo && (basicInfo = JSON.parse(basicInfo)),
        "" != b && 0 < b.length && (c[a] = b,
            a = JSON.stringify(c),
            createCookie("otherInfo", a),
            mobilePlatform == window.IOS_PLATFORM && setupWebViewJavascriptBridge(function (d) {
                d.callHandler("fetchAndCacheInfoCookie", "", function () { })
            })))
}
function asciiToUint8Array(a) {
    for (var b = [], c = 0; c < a.length; ++c)
        b.push(a.charCodeAt(c));
    return new Uint8Array(b)
}
function bytesToHexString(a) {
    if (!a)
        return null;
    a = new Uint8Array(a);
    for (var b = [], c = 0; c < a.length; ++c) {
        var d = a[c].toString(16);
        2 > d.length && (d = "0" + d);
        b.push(d)
    }
    return b.join("")
}
function hexToBase64(a) {
    return btoa(String.fromCharCode.apply(null, a.replace(/\r|\n/g, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" ")))
}
function getDecryptionKey() {
    return null != getCookieValueAsIs("QRTOKEN") ? hexToBase64(bytesToHexString(asciiToUint8Array(getCookieValueAsIs("QRTOKEN").substring(0, 16)))) : ""
}
function encryptUserData(a) {
    var b = getDecryptionKey();
    if (void 0 == b || "" == b)
        return null;
    b = CryptoJS.enc.Base64.parse(b);
    a = CryptoJS.AES.encrypt(a, b, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    return CryptoJS.enc.Base64.stringify(a.ciphertext)
}
function decryptUserData(a) {
    var b = getDecryptionKey();
    if (void 0 == b || "" == b)
        return null;
    b = CryptoJS.enc.Base64.parse(b);
    var c = null;
    try {
        c = CryptoJS.AES.decrypt(a, b, {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7
        }).toString(CryptoJS.enc.Utf8)
    } catch (d) { }
    return c
}
function decrypt(a) {
    var b = CryptoJS.enc.Base64.parse("R1hAcWF3NFUkWUhNbW40Mg\x3d\x3d")
        , c = null;
    try {
        c = CryptoJS.AES.decrypt(a, b, {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7
        }).toString(CryptoJS.enc.Utf8)
    } catch (d) { }
    return c
}
authParameterName = $("#authparamName").val();
basicBasicInfoVal = $("#basicBasicInfo").val();
var basicUsername = $("#basicUsername").val()
    , basicpassword = $("#basicPassword").val()
    , req_headers = {
        "Content-Type": "application/json"
    };
if ("" != basicBasicInfoVal) {
    if ("" != basicUsername && "" != basicpassword) {
        var basicAuth = btoa(basicUsername + ":" + basicpassword);
        $("#basicBasicInfo").val(basicAuth);
        void 0 != $("#basicBasicInfo").val() && "" != $("#basicBasicInfo").val() && (req_headers.Authorization = "Basic " + $("#basicBasicInfo").val())
    } else
        basicAuth = btoa(basicUsername + "" + basicpassword),
            $("#basicBasicInfo").val(basicAuth);
    $("#basicUsername").val("");
    $("#basicPassword").val("")
}
req_headers["" + authParameterName] = "Bearer " + getFFPCookieValue("QRTOKEN");
function getErrorMessage(a, b) {
    var c;
    $.ajax({
        type: "GET",
        async: !1,
        cache: !1,
        url: "/content/Qatar/i18n/common.services.errorCodes1.json",
        success: function (d, e, h) {
            void 0 != d[a] && void 0 != d[a]["sling:message"] && (c = d[a]["sling:message"])
        },
        error: function (d, e, h, m) {
            c = "No Error message configured"
        }
    });
    void 0 == c && $.ajax({
        type: "GET",
        async: !1,
        cache: !1,
        url: "/content/Qatar/i18n/common.services.errorCodes2.json",
        success: function (d, e, h) {
            c = void 0 != d[a] && void 0 != d[a]["sling:message"] ? d[a]["sling:message"] : "Due to some technical Issues we are unable to login, please try after some time"
        },
        error: function (d, e, h, m) {
            c = "No Error message configured"
        }
    });
    return c
}
function isValidPassword(a) {
    return validatePassword(a)
}
function validatePassword(a) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,25}$/.test(a)
}
function checkForNames(a) {
    a = a.toLowerCase();
    var b = getUserBasicInfoField("firstName");
    if (void 0 !== b && "" !== b && (b = b.toLowerCase(),
        -1 !== a.indexOf(b)))
        return !0;
    b = getUserBasicInfoField("lastName");
    if (void 0 !== b && "" !== b && (b = b.toLowerCase(),
        -1 !== a.indexOf(b)))
        return !0;
    b = getUserBasicInfoField("middleName");
    return void 0 !== b && "" !== b && (b = b.toLowerCase(),
        -1 !== a.indexOf(b)) ? !0 : !1
}
function customSortFunction(a, b, c) {
    return a.sort(function (d, e) {
        return c ? d[b] > e[b] ? 1 : d[b] < e[b] ? -1 : 0 : e[b] > d[b] ? 1 : e[b] < d[b] ? -1 : 0
    })
}
function getPricingResponse(a, b) {
    var c = "";
    try {
        $.ajax({
            type: "GET",
            dataType: "json",
            url: "/etc/qrweb/pricing/pricing.pricingData." + a + ".json",
            async: !1,
            success: function (d) {
                c = d
            }
        }).done(function () {
            b(c)
        })
    } catch (d) { }
}
function getDestinationRepoData(a, b, c) {
    var d = "";
    try {
        $.ajax({
            type: "GET",
            dataType: "json",
            url: b + ".destinationRepo." + a + ".json",
            async: !1,
            success: function (e) {
                d = e
            }
        }).done(function () {
            c(d)
        })
    } catch (e) { }
}
function getDestinationPricingData(a, b) {
    return a.filter(function (c) {
        return c.destination == b
    }) || null
}
function printPDF(a) {
    a = base64ToArrayBuffer(a);
    var b = new Blob([a], {
        type: "application/pdf"
    });
    a = URL.createObjectURL(b);
    var c = window.navigator.userAgent
        , d = c.indexOf("MSIE ")
        , e = c.indexOf("Trident/")
        , h = c.indexOf("Edge/");
    c = c.indexOf("Firefox");
    if (0 < d || 0 < e || 0 < h)
        $("#printPdf1").val(a),
            document.getElementById("printPdf1"),
            setTimeout(function () {
                newWin = window.navigator.msSaveOrOpenBlob(b, "ActivityStatement.pdf")
            }, 8E3),
            navigator.userAgent.match(/Trident/gi) ? newWin.document.execCommand("print", !1, null) : newWin.print(),
            newWin.close();
    else if (0 < c) {
        var m = window.open(a);
        window.focus();
        m.print();
        m.close()
    } else
        m = window.open(a, ""),
            setTimeout(function () {
                m.print()
            }, 2E3)
}
function validateFileFormats(a, b) {
    return void 0 !== b && void 0 != a && (b = b.toUpperCase().split("."),
        -1 != a.toUpperCase().indexOf(b[b.length - 1])) ? !0 : !1
}
function validateFileSize(a, b) {
    if (void 0 != a && null != a) {
        a = a.size / 1048576;
        if (0 == a)
            return !1;
        if (a <= parseInt(b))
            return !0
    }
    return !1
}
function getShortMobileNumber(a, b) {
    return a.replace(new RegExp("\\d(?\x3d\\d{" + b + "})", "g"), "X")
}
function getShortEmailID(a, b) {
    var c = void 0 !== a ? a.substr(0, a.indexOf("@")) : ""
        , d = "";
    "" !== c && (c = 3 <= c.length ? Array(c.length - b + 1).join("x") + c.slice(-b) : Array(c.length + 1).join("x"),
        a = a.substr(a.indexOf("@") + 1),
        b = a.substr(a.indexOf(".") + 1).length,
        a = a.substr(0, a.indexOf(".")) + "." + Array(b + 1).join("x"),
        d = c + "@" + a);
    return d
}
function isValidEmailID(a) {
    return /^(?:[a-z0-9A-Z$&'+/_-]+(?:\.[a-z0-9A-Z$&'+/_-]+)*@(?:[a-z0-9A-Z](?:[a-z0-9A-Z-]*[a-z0-9A-Z])?\.)+[a-z0-9A-Z](?:[a-z0-9A-Z-]*[a-z0-9A-Z])?)$/.test(a) ? !0 : !1
}
function OTPCheck(a, b, c) {
    var d = window.location.pathname + window.location.hash, e, h = "OPT-popup-" + Math.random().toString(36).substr(2, 10), m = $("#transaction-OTP-spinner.spinner-overlay");
    showSpinnerMobileApp($("#global-spinner-container"), "spinner-full-page");
    window.qrServiceRef.zone.run(function () {
        window.qrServiceRef.postReq($("#verifyUser").val(), {
            token: getFFPCookieValue("QRTOKEN")
        }, req_headers, "", "").then(function (u) {
            void 0 != u.errorObject ? "SESSION_EXPIRED" == u.errorObject[0].errorName && setTimeout(function () {
                redirectToLogin($("#loginPage").val() + "?resource\x3d" + d)
            }, 3E3) : u.otpVerified ? b() : (window.qrServiceRef.postReq($("#sendOTP").val(), a, req_headers, "", "").then(function (k) {
                hideSpinnerMobileApp($("#global-spinner-container"), "spinner-full-page");
                $(".j-transaction-OTP-check").modal("show");
                void 0 != k.errorObject && k.errorObject.length ? ($(".j-transaction-OTP-check").find(".error.transactionOTPerror").css("display", "block").find(".input-base-msg-box").html(k.errorObject[0].errorDescription),
                    "SESSION_EXPIRED" == k.errorObject[0].errorName && setTimeout(function () {
                        redirectToLogin($("#loginPage").val() + "?resource\x3d" + d)
                    }, 3E3)) : (e = k.contactDetails,
                        $(".j-transaction-OTP-check .otp-block p:last-child").text(Granite.I18n.get("transactions.opthelptext", [k.timeOutMinutes])))
            }),
                $(".j-transaction-OTP-check").addClass(h),
                $(".j-transaction-OTP-check input#otpValue").val("").trigger("keyup"),
                $(".j-OTP-verify").prop("disabled", !0),
                $(".j-transaction-OTP-check .error").css("display", "none"),
                $(".j-transaction-OTP-check").modal("show"),
                $(document).on("click", "." + h + " .j-OTP-cancel", function () {
                    c();
                    $(".j-transaction-OTP-check").modal("hide");
                    $(".j-transaction-OTP-check").find(".transotpText.sendText").css("display", "block");
                    $(".j-transaction-OTP-check").find(".error.transactionOTPerror").css("display", "none")
                }),
                $(document).on("click", "." + h + " .j-resend-otp", function () {
                    $(".j-transaction-OTP-check input#otpValue").val("").trigger("keyup");
                    $(".j-OTP-verify").prop("disabled", !0);
                    $(".j-transaction-OTP-check .error").css("display", "none");
                    showSpinnerMobileApp(m, "spinner-full-page");
                    window.qrServiceRef.postReq($("#sendOTP").val(), a, req_headers, "", "").then(function (k) {
                        hideSpinnerMobileApp(m, "spinner-full-page");
                        void 0 != k.errorObject && k.errorObject.length ? ($(".j-transaction-OTP-check").find(".error.transactionOTPerror").css("display", "block").find(".input-base-msg-box").html(k.errorObject[0].errorDescription),
                            "SESSION_EXPIRED" == k.errorObject[0].errorName && setTimeout(function () {
                                redirectToLogin($("#loginPage").val() + "?resource\x3d" + d)
                            }, 3E3)) : (e = k.contactDetails,
                                $(".j-transaction-OTP-check").find(".transotpText").css("display", "none"),
                                $(".j-transaction-OTP-check").find(".transotpText.resendText").css("display", "block"))
                    })
                }),
                $(document).on("click", "." + h + " .j-OTP-verify", function () {
                    showSpinnerMobileApp(m, "spinner-full-page");
                    window.qrServiceRef.zone.run(function () {
                        var k = {
                            customerProfileId: getUserBasicInfoField("customerProfileId"),
                            activity: a.activity,
                            otpValue: $(".j-transaction-OTP-check").find("#otpValue").val(),
                            ffpNumber: getUserBasicInfoField("ffpNumber"),
                            contactDetails: e
                        };
                        $.each(k.contactDetails, function (f, n) {
                            n.otpValue = k.otpValue
                        });
                        window.qrServiceRef.postReq($("#verifyOTPServiceURL").val(), k, req_headers, "", "").then(function (f) {
                            if (void 0 != f.errorObject && f.errorObject.length)
                                $(".j-transaction-OTP-check").find(".error.transactionOTPerror").css("display", "block").find(".input-base-msg-box").html(f.errorObject[0].errorDescription),
                                    hideSpinnerMobileApp(m, "spinner-full-page"),
                                    "SESSION_EXPIRED" == f.errorObject[0].errorName && setTimeout(function () {
                                        redirectToLogin($("#loginPage").val() + "?resource\x3d" + d)
                                    }, 3E3);
                            else if (void 0 != f.cotactDetails) {
                                var n = !1;
                                (n = 1 == f.cotactDetails.length ? f.cotactDetails[0].otpVerified : f.cotactDetails[0].otpVerified || f.cotactDetails[1].otpVerified) ? (hideSpinnerMobileApp(m, "spinner-full-page"),
                                    $(".j-transaction-OTP-check").modal("hide"),
                                    b()) : (hideSpinnerMobileApp(m, "spinner-full-page"),
                                        $(".j-transaction-OTP-check").find(".error.transactionOTPerror").css("display", "block").find(".input-base-msg-box").html(Granite.I18n.get("login.otp.invalidotpmessage")))
                            } else
                                hideSpinnerMobileApp(m, "spinner-full-page")
                        })
                    })
                }))
        })
    })
}
$(document).on("keyup", ".j-transaction-OTP-check input#otpValue", function () {
    $(this).val().trim().length ? $(".j-OTP-verify").prop("disabled", !1) : $(".j-OTP-verify").prop("disabled", !0)
});
$(document).on("keypress", ".j-transaction-OTP-check input#otpValue", function (a) {
    if (8 != a.which && 0 != a.which && (48 > a.which || 57 < a.which))
        return !1
});
function getHostName(a) {
    var b = "";
    a = a.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
    null != a && 2 < a.length && "string" === typeof a[2] && 0 < a[2].length && (b = a[2]);
    return b
}
function triggerEmailValidation() {
    if (isMobileApp() || mobilePlatform == window.ANDROID_PLATFORM || mobilePlatform == window.IOS_PLATFORM)
        return deleteCookie("InfoMissing"),
            !1;
    var a = JSON.parse(getFFPCookieValue("basicInfo")), b = $("#flyout-portalProfileOverview").val(), c = $("#flyout-privilegeProfileOverview").val(), d, e = !0;
    "QRPC" == getUserBasicInfoField("programCode") ? d = c : "PORTAL" == getUserBasicInfoField("programCode") && (d = b);
    if (void 0 != a && void 0 != d && "QRPC" == getUserBasicInfoField("programCode")) {
        if (void 0 == a.emailId || null == a.emailId || "" == a.emailId)
            e = !1,
                createCookie("InfoMissing", "EMAIL");
        if (void 0 == a.country || null == a.country || "" == a.country)
            e = !1,
                b = getFFPCookieValue("InfoMissing"),
                null != b && void 0 != b ? createCookie("InfoMissing", b + "COUNTRY") : createCookie("InfoMissing", "COUNTRY");
        if (void 0 == a.mobile || null == a.mobile || "" == a.mobile)
            e = !1,
                b = getFFPCookieValue("InfoMissing"),
                null != b && void 0 != b ? createCookie("InfoMissing", b + "MOBILE") : createCookie("InfoMissing", "MOBILE");
        if (e)
            null != getFFPCookieValue("InfoMissing") && void 0 != getFFPCookieValue("InfoMissing") && e && deleteCookie("InfoMissing");
        else if (window.location.pathname !== d + ".html")
            return window.location = d + ".html",
                !0
    }
}
function redirectToLogin(a) {
    $.ajax({
        url: "/qr/Logout",
        type: "POST",
        data: {
            logOut: "logOut"
        },
        success: function (b) {
            window.location = a
        },
        error: function (b, c, d) { }
    })
}
function formatString(a) {
    return null != a && void 0 != a ? a.charAt(0).toUpperCase() + a.slice(1).toLowerCase() : ""
}
function signOut(a, b) {
    $.ajax({
        url: "/qr/Logout",
        type: "GET",
        data: {
            logOut: "logOut"
        },
        cache: !1,
        success: function (c) {
            a && b()
        },
        error: function (c, d, e) { }
    })
}
function qmilesSiteValueInfo() {
    var a = $("#QmilesSitesJsonInformation").val();
    if (void 0 == a || "" == a || null == a)
        var b = "new";
    else {
        a = "object" != typeof a ? JSON.parse(a) : a;
        b = a.qmilesSites;
        b = void 0 != b && "" != b ? b : "";
        var c = a.globalSites;
        c = void 0 != c && "" != c ? c : "";
        a = a.localLiveEnglishSites;
        a = void 0 != a && "" != a ? a : "";
        var d = $("#page-locale").val() + "_" + $("#countryCodeVal").val();
        b = -1 != b.indexOf(d) ? "old" : "new";
        -1 != c.indexOf(d) && -1 != a.indexOf(d) && (b = "other-en");
        -1 != c.indexOf(d) && -1 == a.indexOf(d) && (b = "other")
    }
    if (void 0 == b || "" == b || null == b)
        b = "new";
    return b
}
function getActualCookieValue(a) {
    if ("QMILESSITE" == a)
        return qmilesSiteValueInfo();
    var b = document.cookie
        , c = b.indexOf(" " + a + "\x3d");
    -1 == c && (c = b.indexOf(a + "\x3d"));
    -1 == c ? b = null : (c = b.indexOf("\x3d", c) + 1,
        a = b.indexOf(";", c),
        -1 == a && (a = b.length),
        b = unescape(b.substring(c, a)));
    return b
}
function getGlobalPagePath(a) {
    var b = "";
    "" !== a && (a = a.split("/"),
        $.each(a, function (c, d) {
            0 !== c && (b = 2 === c ? b + "/global" : 3 === c ? b + "/en" : b + ("/" + d))
        }));
    return b
}
function getCountryLanguage(a, b, c) {
    var d = "";
    "" !== a && (a = a.split("/"),
        $.each(a, function (e, h) {
            0 !== e && (d = 2 === e ? "" != b ? d + ("/" + b) : d + ("/" + h) : 3 === e ? "" != c ? d + ("/" + c) : d + ("/" + h) : d + ("/" + h))
        }));
    return d
}
function getNodePropertyValue(a, b, c, d, e) {
    var h = "";
    if ("" !== a && "" !== b) {
        var m = !1;
        $.ajax({
            url: "/qr/findResource?path\x3d" + a + "\x26componentPath\x3d" + b + "\x26parentNodeName\x3d" + c,
            type: "get",
            contentType: "application/json; charset\x3dutf-8",
            dataType: "json",
            async: !1,
            success: function (u) {
                (m = u.isComponentAvailable) && $.ajax({
                    url: u.resourcePath + ".json",
                    type: "get",
                    contentType: "application/json; charset\x3dutf-8",
                    dataType: "json",
                    async: !1,
                    success: function (k) {
                        h = k[d];
                        e && $.ajax({
                            url: "/qr/getShortURL?pagePath\x3d" + h,
                            type: "get",
                            contentType: "application/json; charset\x3dutf-8",
                            dataType: "json",
                            async: !1,
                            success: function (f) {
                                f = f.shortURL;
                                void 0 !== f && "" !== f && (h = f)
                            },
                            error: function (f, n, r) {
                                console.error("Error while getting short URL")
                            }
                        })
                    },
                    error: function (k, f, n) {
                        console.error("Error while getting property")
                    }
                })
            },
            error: function (u, k, f) {
                console.error("Error while checking for component existence")
            }
        })
    }
    return h
}
function getShortURL(a) {
    var b = "";
    $.ajax({
        url: "/qr/getShortURL?pagePath\x3d" + a,
        type: "get",
        contentType: "application/json; charset\x3dutf-8",
        dataType: "json",
        async: !1,
        success: function (c) {
            b = c.shortURL
        },
        error: function (c, d, e) { }
    });
    return b
}
var locale = $("#page-locale").val();
if ("ar" == locale && void 0 != locale) {
    var jquery_translations, xhttp = new XMLHttpRequest;
    xhttp.onreadystatechange = function () {
        4 == this.readyState && 200 == this.status && (jquery_translations = JSON.parse(xhttp.responseText))
    }
        ;
    xhttp.open("GET", "/content/Qatar/common/json/jquery_translations.json", !0);
    xhttp.send();
    $(".hasDatepicker").click(function () {
        var a = $("#page-locale").val();
        "en" != a && void 0 == $.datepicker.regional[a] && ($.datepicker.regional[a] = {
            closeText: jquery_translations[a].closeText,
            currentText: jquery_translations[a].currentText,
            monthNames: jquery_translations[a].monthNames,
            monthNamesShort: jquery_translations[a].monthNamesShort,
            dayNames: jquery_translations[a].dayNames,
            dayNamesShort: jquery_translations[a].dayNamesShort,
            dayNamesMin: jquery_translations[a].dayNamesMin
        },
            $.datepicker.setDefaults($.datepicker.regional[a]))
    })
}
$(document).ready(function () {
    $("#isCUGEnabled").val() && "PORTAL" === getUserBasicInfoField("programCode") && $("#breadcrumb .breadcrumbs").find("li").eq(1).hide();
    "no" == $("#enableDevTools").val() && ($(document).on("contextmenu", function (b) {
        b.preventDefault()
    }),
        $(document).keydown(function (b) {
            if (123 == b.keyCode || b.ctrlKey && b.shiftKey && 73 == b.keyCode)
                return !1
        }));
    if ("true" == localStorage.getItem("sessionExpired") && (localStorage.removeItem("sessionExpired"),
        "true" == $("#isPublishInstance").val())) {
        var a = $("#internal-login-page-path").val();
        $("#session-expiry-generic-cta").attr("href", a);
        $("#modal-session-expiry").modal("show");
        $("#modal-session-expiry").attr("tabindex", 0).focus();
        $("#session-expiry-popup-title").attr("tabindex", 0).focus()
    }
    void 0 != getFFPCookieValue("QRTOKEN") && null != getFFPCookieValue("QRTOKEN") ? window.initSession() : (a = localStorage.getItem("sessionLastAcitivity"),
        null !== a && void 0 !== a && localStorage.removeItem("sessionLastAcitivity"));
    $(document).on("click", "#sessionExpiryCancel", function () {
        logout();
        addComponentPageEvent("login", "session expired", "", "")
    });
    $(document).on("click", "#sessionExpiryContinue", function () {
        sessionExtendMethod();
        window.initSession()
    });
    isMobileApp() && updateLoyaltyCurrencyInfo()
});
function saveAsImage(a, b, c) {
    b = new Blob([b], {
        type: "image/jpeg"
    });
    var d = window.navigator.userAgent
        , e = d.indexOf("MSIE ")
        , h = d.indexOf("Trident/");
    d = d.indexOf("Edge/");
    (0 < e || 0 < h || 0 < d) && window.navigator.msSaveOrOpenBlob(b, a + "." + c)
}
function getPropertyValue(a, b) {
    return b[a]
}
var localeMonthNames = [];
function formatLocaleDateToEN(a) {
    var b = $(document).find("#page-locale").val();
    if ("" != b && "en" != b && void 0 != a) {
        0 == localeMonthNames.length && (Granite.I18n.setLocale(b),
            localeMonthNames = [Granite.I18n.get("booking.month.january"), Granite.I18n.get("booking.month.february"), Granite.I18n.get("booking.month.march"), Granite.I18n.get("booking.month.april"), Granite.I18n.get("booking.month.may"), Granite.I18n.get("booking.month.june"), Granite.I18n.get("booking.month.july"), Granite.I18n.get("booking.month.august"), Granite.I18n.get("booking.month.september"), Granite.I18n.get("booking.month.october"), Granite.I18n.get("booking.month.november"), Granite.I18n.get("booking.month.december")]);
        var c = "January February March April May June July August September October November December".split(" "), d;
        var e = "ko" == b || "zh" == b || "ja" == b ? a.split(" ")[1] : a.replace(/[0-9]/g, "").trim();
        b = a.split(e);
        a = b[0].trim();
        b = b[1].trim();
        $.each(localeMonthNames, function (h, m) {
            e == m && (d = c[h])
        });
        return [a, d, b].join(" ")
    }
    return a
}
function redirectToPreviousPage() {
    var a = ""
        , b = getFFPCookieValue("loginRequest");
    null !== b && "" !== b && "undefined" !== typeof b ? (b = JSON.parse(b),
        $.each(b[0], function (c, d) {
            if ("callBackUrl" === c)
                return a = d,
                    !1
        })) : a = document.referrer;
    window.location.href = a
}
function verifySCMandatoryFields() {
    var a = $("#isProfileCompleteSerURL").val()
        , b = {
            customerProfileId: getUserBasicInfoField("customerProfileId")
        };
    $.ajax({
        url: a,
        type: "POST",
        contentType: "application/json; charset\x3dutf-8",
        dataType: "json",
        data: JSON.stringify(b),
        headers: {
            Authorization: "Bearer " + getFFPCookieValue("QRTOKEN")
        },
        cache: !1,
        success: function (c) {
            void 0 === c.errorObject && "INCOMPLETE" === c.studentCompleteness && (c = getActualCookieValue("QMILESSITE"),
                "new" === c ? window.location = $("#new-qrpc-sc-profile-URL").val() + ".html" : "old" === c ? window.location = $("#old-qrpc-sc-profile-URL").val() + ".html" : "other" === c ? window.location = $("#global-qrpc-sc-profile-URL").val() + ".html" : "other-en" === c && (window.location = $("#english-qrpc-sc-profile-URL").val() + ".html"))
        }
    })
}
function updateLoyaltyCurrencyInfo() {
    if (null == getFFPCookieValue("QRTOKEN") || void 0 == getFFPCookieValue("QRTOKEN"))
        return !1;
    var a = $("#getLoyaltyCurrencyInfo").val();
    if ("" !== getUserBasicInfoField("customerProfileId") && void 0 !== getUserBasicInfoField("customerProfileId"))
        var b = {
            customerProfileId: getUserBasicInfoField("customerProfileId")
        };
    "undefined" == typeof a && null == a && "" == a && console.log("GetLoyaltyCurrencyInfo URL is not configured");
    $.ajax({
        url: a,
        type: "POST",
        contentType: "application/json; charset\x3dutf-8",
        dataType: "json",
        data: JSON.stringify(b),
        headers: {
            Authorization: "Bearer " + getFFPCookieValue("QRTOKEN")
        },
        cache: !1,
        success: function (c) {
            if (void 0 === c.errorObject) {
                if (void 0 != c.balanceInfo) {
                    var d = c.balanceInfo[0];
                    c = void 0 != d ? d.loyaltyAmount : "";
                    d = void 0 != d ? d.loyaltyExpiry : "";
                    "" != c && "QMILES" == c.loyaltyCurrency ? (c = c.amount,
                        updateUserBasicInfoField("qmilesAmount", "" + c),
                        void 0 != c && ($("#qmiles").html(parseInt(c).toLocaleString()),
                            $(".personalized-drop-row .progress .progress-row strong").eq(1).html(parseInt(c).toLocaleString())),
                        updateUserBasicInfoField("qmilesExpiryAmount", "" + d.amount),
                        updateUserBasicInfoField("qmilesExpiryDate", "" + d.expiryDate),
                        console.log("loyaltyExpiryAmount inside cookie now ", getUserBasicInfoField("qmilesExpiryAmount"))) : (c = getUserBasicInfoField("qmilesAmount"),
                            void 0 != c && ($("#qmiles").html(parseInt(c).toLocaleString()),
                                $(".personalized-drop-row .progress .progress-row strong").eq(1).html(parseInt(c).toLocaleString())))
                } else
                    c = getUserBasicInfoField("qmilesAmount"),
                        void 0 != c && ($("#qmiles").html(parseInt(c).toLocaleString()),
                            $(".personalized-drop-row .progress .progress-row strong").eq(1).html(parseInt(c).toLocaleString()));
                isMobileApp() && (c = {},
                    c.basicInfo = getCookieValue("basicInfo"),
                    c.basicInfoDecrypted = getFFPCookieValue("basicInfo"),
                    mobilePlatform == window.ANDROID_PLATFORM && JSInterface.portalUpgradeSuccess(JSON.stringify(c)),
                    mobilePlatform == window.IOS_PLATFORM && setupWebViewJavascriptBridge(function (e) {
                        e.callHandler("fetchAndCacheInfoCookie", "", function () { })
                    }))
            }
        }
    })
}
function validateLinkMFABRedirect(a) {
    /^(http|https):\/\/[^ "]+$/.test(a) && $.ajax({
        url: "/qr/qrweb/loginvalidator",
        data: {
            dataUrl: a
        },
        success: function (b, c, d) {
            console.log(d.status);
            0 === d.status % 200 && (window.location.href = a)
        },
        error: function (b) { }
    })
}
function numberWithCommasRedemption(a) {
    return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}
function svbReauthenticationCall() {
    if (null == getFFPCookieValue("QRTOKEN") || void 0 == getFFPCookieValue("QRTOKEN"))
        return !1;
    var a = $("#getLoyaltyCurrencyInfo").val();
    console.log("getLoyaltyCurrencyInfo is:", a);
    a = $("#createPartnerLoginMainSerURL").val();
    void 0 != a && (a = "https://eisffp.qatarairways.com/ffp-services/partner/createPartnerLogin");
    var b = window.location.href
        , c = window.location.search
        , d = getFFPCookieValue("QRTOKEN").substring(11, 22);
    d = encryptUserData(d);
    d = encodeURIComponent(d);
    "" === c || void 0 === c ? (c = b + "?avexStatus\x3dsuccess\x26QRTKN\x3d" + d,
        b = b + "?avexStatus\x3dfailure\x26QRTKN\x3d" + d) : (c = b + "\x26avexStatus\x3dsuccess\x26QRTKN\x3d" + d,
            b = b + "\x26avexStatus\x3dfailure\x26QRTKN\x3d" + d);
    b = {
        customerProfileId: getUserBasicInfoField("customerProfileId"),
        partnerCode: "BA",
        successRedirectUrl: c,
        mfa: !1,
        failureRedirectUrl: b
    };
    $.ajax({
        url: a,
        type: "POST",
        contentType: "application/json; charset\x3dutf-8",
        dataType: "json",
        data: JSON.stringify(b),
        headers: {
            Authorization: "Bearer " + getFFPCookieValue("QRTOKEN")
        },
        cache: !1,
        success: function (e) {
            var h = e.errorObject;
            void 0 === h ? (console.log("partnerRes" + e),
                validateLinkMFABRedirect(e.redirectUrl)) : (console.log("error"),
                    $("#avios-alert-modal .button-wrapper .button").addClass("hide"),
                    $("#avios-alert-modal .button-wrapper .button#avex-try-again-btn").removeClass("hide"),
                    $("#avios-alert-modal h2").text(Granite.I18n.get("swift.avex.err-msg.title")),
                    $("#avios-alert-modal p").html(h[0].errorDescription),
                    $("#avios-alert-modal").modal())
        }
    })
}
var isFetchSVBServiceCalled = !1;
function fetchsvbServiceCall() {
    var a = 0
        , b = "."
        , c = setInterval(function () {
            $(".Qpoints-Qmiles #others-flyout-details #qmiles").text(b);
            b += ".";
            a++;
            6 == a && (a = 0,
                b = ".")
        }, 300);
    isFetchSVBServiceCalled = !0;
    if (null == getFFPCookieValue("QRTOKEN") || void 0 == getFFPCookieValue("QRTOKEN"))
        return !1;
    var d = $("#fetchSVBSerUrl").val();
    console.log("getLoyaltyCurrencyInfo is:", getLoyaltyCurrencyInfo);
    if (void 0 == d || "" == d || "#" == d)
        return !1;
    var e = getFFPCookieValue("QRTOKEN").substring(11, 22);
    e = encryptUserData(e);
    e = encodeURIComponent(e);
    e = $("#svb-partner-codes").val();
    e = void 0 != e && "" != e ? e.split(",") : ["BA", "IB"];
    e = {
        customerProfileId: getUserBasicInfoField("customerProfileId"),
        partnerCodes: e
    };
    $.ajax({
        url: d,
        type: "POST",
        contentType: "application/json; charset\x3dutf-8",
        dataType: "json",
        data: JSON.stringify(e),
        headers: {
            Authorization: "Bearer " + getFFPCookieValue("QRTOKEN")
        },
        cache: !1,
        success: function (h) {
            if (void 0 === h.errorObject) {
                var m = h.singleVirtualBalance
                    , u = h.baseAccountBalance
                    , k = h.baseAccountBalance;
                updateUserBasicInfoField("qmilesAmount", "" + u);
                $("#qmiles").html(parseInt(u).toLocaleString());
                $(".personalized-drop-row .progress .progress-row strong").eq(1).html(parseInt(u).toLocaleString());
                h = h.linkedAccountsBalances;
                $("#avios-dashboard-card").find(".avios-balance").text(numberWithCommasRedemption(m));
                $("#avioscard-bal-v2").text(numberWithCommasRedemption(m));
                $(".Qpoints-Qmiles #others-flyout-details #qmiles").text(numberWithCommasRedemption(m));
                clearInterval(c);
                0 != $(".al-meera-convert-avios").length && ($(".avios-count").find("span").text(numberWithCommasRedemption(k) + " " + Granite.I18n.get("almeera.avios.text")),
                    updateUserBasicInfoField("qmilesAmount", "" + k),
                    digitalData.page.userInfo.qmilesOrQrewardsAvailable = k,
                    isConversionAlmeera && buttonClickAction(window.location.href, "convert avios to Marriott Bonvoy\u00ae", "convert-".concat(aviosValueAlmeera)));
                0 !== h.length ? (m = h[0].accountId,
                    h[0].needsLogin && -1 == m.indexOf("OWVE") && (m = Granite.I18n.get("avios.account.reauthReqMsg"),
                        k = Granite.I18n.get("avios.account.reauthReqClickHere"),
                        m = m + '\x3ca href\x3d"javascript:void(0);" class\x3d"avios-dashboard-reauth-btn"\x3e' + k + "\x3c/a\x3e",
                        $("#avios-dashboard-card").find(".avios-content").removeClass("hide").empty().html("\x3cp\x3e" + m + "\x3c/p\x3e"),
                        $(".Qpoints-Qmiles #others-flyout-details").append('\x3cp class\x3d"reauth-message"\x3e' + m + "\x3c/p\x3e"),
                        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && $(".Qpoints-Qmiles #others-flyout-details").find(".avios-dashboard-reauth-btn").attr("style", "color: #5c0931 !important;font-size: 15px !important;"))) : 0 === h.length && $("#avios-dashboard-card").find(".avios-content").addClass("hide")
            }
        }
    })
}
$(document).ready(function () {
    showAccertifyProfileErrorPopup();
    0 < $("#avios-dashboard-card").length && !isFetchSVBServiceCalled && fetchsvbServiceCall();
    $(document).on("click", ".loggedinprofile", function () {
        console.log("dasdsad");
        isFetchSVBServiceCalled || fetchsvbServiceCall()
    });
    $(document).on("click", ".avios-dashboard-reauth-btn", function () {
        svbReauthenticationCall()
    });
    var a = getUserBasicInfoField("swiftOnboardingRequired")
        , b = getUserBasicInfoField("viewCount");
    getUserBasicInfoField("dashboardvisitedavios");
    0 == $("#avios-modal-curency").length && a && 2 > b && void 0 != $("#onboardpopupfragPath").val() && "" !== $("#onboardpopupfragPath").val() && null != $("#onboardpopupfragPath").val() && $.ajax({
        type: "GET",
        url: $("#onboardpopupfragPath").val() + ".onboardpopup.html",
        dataType: "html",
        success: function (c) {
            $("body").append(c);
            setTimeout(function () {
                var d = getUserBasicInfoField("ffpNumber")
                    , e = $("#swiftconfigurationOnboard").val();
                if ("" !== e && void 0 != e && null != e && -1 === e.indexOf(d))
                    return !1;
                updateUserBasicInfoField("dashboardvisitedavios", "false");
                $("#avios-modal-curency").modal()
            }, 400)
        }
    })
});
var downloadTimer;
function showOtpTimer(a, b) {
    $(b).addClass("hide");
    $(a).parent(".otp-timer-wrapper").removeClass("hide");
    var c = $("#otpTimerDelay").val()
        , d = c = void 0 !== c && "" !== c ? parseInt(c) : 60;
    "object" == typeof downloadTimer && clearInterval(downloadTimer);
    $(a).text(d);
    downloadTimer = setInterval(function () {
        c--;
        $(a).text(c);
        0 >= c && (clearInterval(downloadTimer),
            downloadTimer = void 0,
            $(b).removeClass("hide"),
            $(a).parent(".otp-timer-wrapper").addClass("hide"),
            $(a).text(d))
    }, 1E3)
}
function showAccertifyProfileErrorPopup() {
    var a = $("#countryCodeVal").val()
        , b = $("#page-locale").val()
        , c = sessionStorage.getItem("accertifyprofile");
    null !== c && void 0 !== c && "success" === c && ($("#session-expiry-title-generic").addClass("hide"),
        $("#session-expiry-popup-title").addClass("hide"),
        $("#session-expiry-generic-cta").addClass("hide"),
        $("#session-expiry-title-accertify").removeClass("hide"),
        $("#session-expiry-description-accertify").removeClass("hide"),
        "global" === a ? $("#session-expiry-accertify-cta").attr("href", "/" + b + "/help.html#help-tabs") : $("#session-expiry-accertify-cta").attr("href", "/" + b + "-" + a + "/help.html#help-tabs"),
        $("#session-expiry-accertify-cta").removeClass("hide"),
        $("#modal-session-expiry").modal("show"),
        sessionStorage.removeItem("accertifyprofile"))
}
$(document).ready(function (a) {
    (function () {
        var b;
        return $jscomp.asyncExecutePromiseGeneratorProgram(function (c) {
            b = new FontFace("jotia", "url(https://www.qatarairways.com/content/dam/assets/font/jotia_light.woff)", {
                style: "normal",
                weight: "400",
                display: "swap"
            });
            return c.yield(b.load().then(function () {
                document.fonts.add(b);
                console.log("fonts added")
            }).catch(function (d) {
                console.log(d)
            }), 0)
        })
    }
    )();
    $(window).on("load resize", function () {
        null != document.getElementById("openApp") && 768 > $(window).width() && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && !isCookiePresent("appStoreCookie") && (navigator.getInstalledRelatedApps ? navigator.getInstalledRelatedApps().then(function (b) {
            var c = !1;
            0 < b.length ? (b.forEach(function (d) {
                "com.m.qr" == d.id && (c = !0)
            }),
                showAppAlert(c)) : showAppAlert(!1)
        }) : showAppAlert(!1))
    });
    $(document).on("click tap touchstart", ".j-lang-opener", function (b) {
        if (480 >= $(window).width() && $(".header-top-row").is(":visible") && (0 < $("#closeAppStore").length || 0 < $("#matabarCookie").length)) {
            if ($("#closeAppStore").is(":visible") && $("#matabarCookie").is(":visible"))
                return $(".language-drop").css("top", "116px"),
                    0;
            if ($("#closeAppStore").is(":visible"))
                return $(".language-drop").css("top", "117px"),
                    0;
            if ($("#matabarCookie").is(":visible"))
                return $(".language-drop").css("top", "49px"),
                    0;
            if ($("#closeAppStore").is(":hidden") && $("#matabarCookie").is(":hidden"))
                return $(".language-drop").css("top", "48px"),
                    0
        }
    })
});
function redirectOnClickView() {
    var a = "https://play.google.com/store/apps/details?id\x3dcom.m.qr";
    /Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || (a = "https://itunes.apple.com/in/app/qatar-airways/id581264644?mt\x3d8");
    (-1 < navigator.userAgent.indexOf("L09") || -1 < navigator.userAgent.indexOf("L29") || -1 < navigator.userAgent.toLowerCase().indexOf("huawei")) && -1 < navigator.userAgent.indexOf("AppleWebKit") && (a = "https://appgallery.huawei.com/#/app/C104037677");
    window.location.assign(a)
}
function isCookiePresent(a) {
    return -1 != document.cookie.indexOf(a) ? !0 : !1
}
function appCloseCookie() {
    document.cookie = "appStoreCookie\x3d true; path\x3d/;expires\x3d" + getCookieExpire(50);
    document.getElementById("openApp").style.display = "none"
}
function showAppAlert(a) {
    a ? document.getElementById("openApp").style.display = "none" : document.getElementById("openApp").style.display = "block"
}
var loginToken;
function setLoginTokenApp() {
    $.ajax({
        url: "/qr/qrweb/accesslogintoken",
        type: "GET",
        async: !0,
        cache: !1,
        success: function (a, b, c) {
            loginToken = a;
            mobilePlatform == window.ANDROID_PLATFORM && JSInterface.setLoginToken(loginToken);
            mobilePlatform == window.IOS_PLATFORM && setupWebViewJavascriptBridge(function (d) { })
        }
    })
}
function socialLoginFailedCallback() {
    $("body").css({
        display: "block"
    })
}
function mobileAppLogin(a, b) {
    a = JSON.parse(a);
    void 0 != $("#signOnLanguage").val() && $("#signOnLanguage").val();
    $('[name\x3d"j_socilMediaUniqId"]').val(a.socialMediaUniqueId);
    $('[name\x3d"j_socialMediaEmail"]').val(a.socialmediaEmailId);
    $('[name\x3d"j_socialMediaAccessToken"]').val(a.accessToken);
    $('[name\x3d"j_socialMediaAccessTokenSecret"]').val(a.accessTokenSecret);
    $('[name\x3d"j_submitType"]').val(b);
    $("#platform,#j_platform").val(mobilePlatform);
    $.ajax({
        url: "/qr/j_security_check_qr_portal",
        type: "POST",
        data: $("#j-login-form").serialize(),
        cache: !1,
        success: function (c, d, e, h) {
            isMobileApp() && setLoginTokenApp();
            c = $.parseJSON(loginRequest);
            $("#j-login-form").addClass("visibilityHidden");
            $(".qbiz-login-section").addClass("visibilityHidden");
            $(".is-logged").css("display", "block");
            $(".create-profile-popup").hide();
            $("#social-login-block").addClass("hide");
            $("#div_guestuserlogin").addClass("hide");
            d = getUserBasicInfoField("programCode");
            $("#portalDashboardPage").val();
            "QRPC" == d ? null !== loginRequest && "" !== loginRequest && "undefined" !== typeof loginRequest ? "SEARCH_BKG" == c[0].activityCode ? verifyOTP() : "RDM_BKG" == c[0].activityCode || "EXB_LOGIN" == c[0].activityCode || "ENROLL_LOGIN" === c[0].activityCode ? verifyOTP() : "RVE_BKG" == c[0].activityCode ? redirectUser() : "TICKET_CONFIRM" == c[0].activityCode && verifyOTP() : verifyOTP() : "PORTAL" == d && redirectUser()
        },
        error: function (c, d, e, h) {
            $("body").css({
                display: "block"
            });
            d = getActualCookieValue("resetPassword");
            if (null != c.getResponseHeader("j_reason")) {
                c = c.getResponseHeader("j_reason");
                var m = JSON.parse(c);
                window.qrServiceRef.zone.run(function () {
                    window.qrServiceRef.translateErrorObject(m, "/content/Qatar/i18n/login.errorMessages.json").then(function (u) {
                        $("#loginErrorBlock #errorId").html(u[0].errorDescription);
                        $("#loginErrorBlock .input-base-msg-box").show()
                    })
                })
            } else
                "undefined" != typeof d && d ? ($(".create-profile-popup").hide(),
                    getActualCookieValue("resetPassword") && ($("#j-login-form").addClass("visibilityHidden"),
                        $(".qbiz-login-section").addClass("visibilityHidden"),
                        $("#social-login-block").addClass("hide"),
                        $(".is-logged").css("display", "block"),
                        $("#reset-password").removeClass("hide"),
                        $("#reset-password").show())) : $("#loginErrorBlock .input-base-msg-box").hide();
            setTimeout(function () {
                hideSpinnerMobileApp($("#global-spinner-container.spinner-overlay"), "spinner-full-page")
            }, 500)
        }
    })
}
function mobileAppEnrollment(a, b) {
    $("#j_platform").val(mobilePlatform);
    $("#platform,#j_platform").val(mobilePlatform);
    if ("FACEBOOK" === a) {
        var c = $("#join-form");
        $("#existingEnrollCheck", c).hide();
        $("#socialMediaType", c).val("FACEBOOK");
        $("#socialMediaId", c).val(b.socialMediaUniqueId);
        $("#socialMediaAccessToken", c).val(b.accessToken);
        $("#socialMediaEmail", c).val(b.email);
        $('input[name\x3d"customerProfileId"]', c).val("");
        $("#checkbox-slide", c).prop("checked", !1);
        null != b.firstname && ($("#f102", c).val(b.firstname).parent(".input-base").addClass("filled"),
            $("#f102", c).trigger("change"));
        null != b.lastname && ($("#f104", c).val(b.lastname).parent(".input-base").addClass("filled"),
            $("#f104", c).trigger("change"));
        null != b.email && $("#f105", c).val(b.email).parent(".input-base").addClass("filled");
        "M" == b.gender && ($("#f10", c).prop("checked", !0),
            $("#f240").parent().find(".custom-select-list li").each(function () {
                var e = $(this).find("span").attr("data-value")
                    , h = $(this).text();
                $(this).attr("data-control");
                if ("MR" === e)
                    return $("#f240").parent().find(".custom-select-opener").text(h),
                        $("#f240").parent().find(".input-base-placeholder").addClass("visible"),
                        $(this).find("span").addClass("selected"),
                        $("#f240").val(e),
                        !1
            }));
        "F" == b.gender && ($("#f11", c).prop("checked", !0),
            $("#f240").parent().find(".custom-select-list li").each(function () {
                var e = $(this).find("span").attr("data-value")
                    , h = $(this).text();
                $(this).attr("data-control");
                if ("MS" === e)
                    return $("#f240").parent().find(".custom-select-opener").text(h),
                        $("#f240").parent().find(".input-base-placeholder").addClass("visible"),
                        $(this).find("span").addClass("selected"),
                        $("#f240").val(e),
                        !1
            }));
        if (void 0 != b.birthday && null != b.birthday) {
            var d = new Date(Date.parse(b.birthday));
            void 0 !== d && "" != d && null != d && (d.indexOf("/"),
                d = d.split("/"),
                "" != d[1] && "" != d[0] && "" != d[2] && isNaN(d[1]) && isNaN(d[0]) && isNaN(d[2]) && (formattedDateString = d[1] + "/" + d[0] + "/" + d[2],
                    d = getDateDisplayFormat(formattedDateString),
                    $("#f109").val(d).parents(".input-base").addClass("filled")))
        }
        $("#f106", c).attr("required", !1);
        $("#f107", c).attr("required", !1);
        $("#f106").prop("readOnly", !0);
        $("#f107").prop("readOnly", !0);
        $("#f106", c).parent(".input-base").addClass("disabled");
        $("#f107", c).parent(".input-base").addClass("disabled");
        $("#f14").attr("disabled", !0);
        $("#f15").attr("disabled", !0)
    }
    "GOOGLE" === a && (c = $("#join-form"),
        $("#existingEnrollCheck", c).hide(),
        $("#socialMediaType", c).val("GOOGLE"),
        $("#socialMediaId", c).val(b.socialMediaUniqueId),
        $("#socialMediaEmail", c).val(b.socialmediaEmailId),
        $("#socialMediaAccessToken", c).val(b.accessToken),
        $('input[name\x3d"customerProfileId"]', c).val(""),
        $("#checkbox-slide", c).prop("checked", !1),
        null != b.email && $("#f105", c).val(b.email).parent(".input-base").addClass("filled"),
        null != b.firstname && ($("#f102", c).val(b.firstname).parent(".input-base").addClass("filled"),
            $("#f102", c).trigger("change")),
        null != b.lastname && ($("#f104", c).val(b.lastname).parent(".input-base").addClass("filled"),
            $("#f104", c).trigger("change")),
        $("#f106", c).attr("required", !1),
        $("#f107", c).attr("required", !1),
        $("#f106", c).parent(".input-base").addClass("disabled"),
        $("#f107", c).parent(".input-base").addClass("disabled"),
        $("#f106").prop("readOnly", !0),
        $("#f107").prop("readOnly", !0),
        $("#f14").attr("disabled", !0),
        $("#f15").attr("disabled", !0));
    "TWITTER" === a && (c = $("#join-form"),
        a = b.socialMediaUniqueId,
        d = b.firstname,
        "undefined" != typeof a && a && "undefined" != typeof d && d && ($("#socialMediaId", c).val(a),
            $("#socialMediaEmail", c).val(d),
            $("#socialMediaAccessToken", c).val(b.accessToken),
            $("#socialMediaAccessTokenSecret", c).val(b.accessTokenSecret),
            $("#j_socialMediaAccessTokenSecret").val(b.accessTokenSecret),
            $("#platform,#j_platform").val(mobilePlatform),
            void 0 != d && ($("#f102", c).val(d).parent(".input-base").addClass("filled"),
                $("#f102", c).trigger("change"),
                $("#f106", c).attr("required", !1),
                $("#f107", c).attr("required", !1),
                $("#f106", c).parent(".input-base").addClass("disabled"),
                $("#f107", c).parent(".input-base").addClass("disabled"),
                $("#f106").prop("readOnly", !0),
                $("#f107").prop("readOnly", !0),
                $("#f14").attr("disabled", !0),
                $("#f15").attr("disabled", !0)),
            $("#socialMediaType", c).val("TWITTER")))
}
function fbRedirectLoginCallback(a) {
    mobileAppLogin(a, "FACEBOOK")
}
function fbRedirectEnrollCallback(a) {
    mobileAppEnrollment("FACEBOOK", JSON.parse(a))
}
function googleRedirectLoginCallback(a) {
    mobileAppLogin(a, "GOOGLE")
}
function googleRedirectEnrollCallback(a) {
    mobileAppEnrollment("GOOGLE", JSON.parse(a))
}
function twitterRedirectLoginCallback(a) {
    mobileAppLogin(a, "TWITTER")
}
function twitterRedirectEnrollCallback(a) {
    mobileAppEnrollment("TWITTER", JSON.parse(a))
}
function facebookDBLinkCallBack(a) {
    a = JSON.parse(a);
    manageSocialMedia("LINK", "FACEBOOK", a.socialMediaUniqueId, void 0 !== a.socialmediaEmailId ? a.socialmediaEmailId : "", a.accessToken)
}
function googleDBLinkCallBack(a) {
    a = JSON.parse(a);
    manageSocialMedia("LINK", "GOOGLE", a.socialMediaUniqueId, void 0 !== a.socialmediaEmailId ? a.socialmediaEmailId : "", a.accessToken)
}
function twitterDBLinkCallBack(a) {
    a = JSON.parse(a);
    manageSocialMedia("LINK", "TWITTER", a.socialMediaUniqueId, void 0 !== a.socialmediaEmailId ? a.socialmediaEmailId : "", a.accessToken)
}
function redirectPageCallBack() {
    var a = "" != document.referrer ? document.referrer : null;
    mobilePlatform == window.ANDROID_PLATFORM && JSInterface.redirectPage(a)
}
function addToAppleWallet() {
    $("#family-membership-cards-parent-div").css({
        "margin-top": "60px"
    });
    $("#family-membership-cards-parent-div #family-membership-cards .col-md-4").css({
        "margin-bottom": "60px"
    });
    $(".j-C32-overlay").find(".j-C32-apple-wallet").parent().removeClass("hide");
    $(".j-C32-overlay").find(".j-C32-apple-wallet").parent().css({
        display: "block"
    });
    $("#family-membership-cards-parent-div .C32-membership-card .j-C32-apple-wallet-el").css({
        display: "block"
    });
    $("#family-membership-cards-parent-div .C32-membership-card-toolbar.family-member-toolbar").css({
        bottom: "-52px"
    });
    $("#family-membership-cards-parent-div .C32-membership-card-toolbar.family-member-toolbar .j-C32-apple-wallet-el").attr("style", "left: -50% !important; top: 44px !important;");
    0 == $("#family-membership-cards").children().length && ($(".C32-membership-card.main-member-card").parent().attr("style", "margin-bottom: 46px;"),
        $(".C32-membership-card.main-member-card").find(".C32-membership-card-toolbar li.j-C32-apple-wallet-el").attr("style", "left: 152% !important;"));
    $(".j-C32-overlay").find(".j-C32-apple-wallet").parent().on("click", function () {
        var a = $(this);
        void 0 != $(a).attr("data-applepass") && null != $(a).attr("data-applepass") && "" != $(a).attr("data-applepass") && setupWebViewJavascriptBridge(function (b) {
            b.callHandler("addToAppleWallet", $(a).attr("data-applepass"), function () { })
        })
    })
}
function FBRedirectionMobileApp(a) {
    "LOGIN" === a ? (showSpinnerMobileApp($("#global-spinner-container.spinner-overlay"), "spinner-full-page"),
        mobilePlatform == window.ANDROID_PLATFORM && JSInterface.fbRedirectLogin(),
        mobilePlatform == window.IOS_PLATFORM && (setupWebViewJavascriptBridge(function (b) {
            b.callHandler("fbRedirectLogin", function () { })
        }),
            setupWebViewJavascriptBridge(function (b) {
                b.registerHandler("fbRedirectLoginCallback", function (c) {
                    mobileAppLogin(c, "FACEBOOK")
                })
            }))) : "ENROLL" === a && (mobilePlatform == window.ANDROID_PLATFORM && JSInterface.fbRedirectEnroll(),
                mobilePlatform == window.IOS_PLATFORM && (setupWebViewJavascriptBridge(function (b) {
                    b.callHandler("fbRedirectEnroll", function () { })
                }),
                    setupWebViewJavascriptBridge(function (b) {
                        b.registerHandler("fbRedirectEnrollCallback", function (c) {
                            mobileAppEnrollment("FACEBOOK", JSON.parse(c))
                        })
                    })))
}
function googleRedirectionMobileApp(a) {
    "LOGIN" === a ? (showSpinnerMobileApp($("#global-spinner-container.spinner-overlay"), "spinner-full-page"),
        mobilePlatform == window.ANDROID_PLATFORM && JSInterface.googleRedirectLogin(),
        mobilePlatform == window.IOS_PLATFORM && (setupWebViewJavascriptBridge(function (b) {
            b.callHandler("googleRedirectLogin", function () { })
        }),
            setupWebViewJavascriptBridge(function (b) {
                b.registerHandler("googleRedirectLoginCallback", function (c) {
                    mobileAppLogin(c, "GOOGLE")
                })
            }))) : "ENROLL" === a && (mobilePlatform == window.ANDROID_PLATFORM && JSInterface.googleRedirectEnroll(),
                mobilePlatform == window.IOS_PLATFORM && (setupWebViewJavascriptBridge(function (b) {
                    b.callHandler("googleRedirectEnroll", function () { })
                }),
                    setupWebViewJavascriptBridge(function (b) {
                        b.registerHandler("googleRedirectEnrollCallback", function (c) {
                            mobileAppEnrollment("GOOGLE", JSON.parse(c))
                        })
                    })))
}
function twitterRedirectionMobileApp(a) {
    "LOGIN" === a ? (showSpinnerMobileApp($("#global-spinner-container.spinner-overlay"), "spinner-full-page"),
        mobilePlatform == window.ANDROID_PLATFORM && JSInterface.twitterRedirectLogin(),
        mobilePlatform == window.IOS_PLATFORM && (setupWebViewJavascriptBridge(function (b) {
            b.callHandler("twitterRedirectLogin", function () { })
        }),
            setupWebViewJavascriptBridge(function (b) {
                b.registerHandler("twitterRedirectLoginCallback", function (c) {
                    mobileAppLogin(c, "TWITTER")
                })
            }))) : "ENROLL" === a && (mobilePlatform == window.ANDROID_PLATFORM && JSInterface.twitterRedirectEnroll(),
                mobilePlatform == window.IOS_PLATFORM && (setupWebViewJavascriptBridge(function (b) {
                    b.callHandler("twitterRedirectEnroll", function () { })
                }),
                    setupWebViewJavascriptBridge(function (b) {
                        b.registerHandler("twitterRedirectEnrollCallback", function (c) {
                            mobileAppEnrollment("TWITTER", JSON.parse(c))
                        })
                    })))
}
function showSpinnerMobileApp(a, b) {
    "true" == $("#isPublish").val() && (isMobileApp() && null != a && void 0 != a ? "global-spinner-container" === a.attr("id") ? (mobilePlatform == window.ANDROID_PLATFORM && "undefined" != typeof JSInterface && JSInterface.showSpinner(),
        mobilePlatform == window.IOS_PLATFORM && setupWebViewJavascriptBridge(function (c) {
            c.callHandler("showSpinner", function () { })
        })) : a.addClass("spinner-active") : void 0 != a && ("global-spinner-container" === a.attr("id") || "otp-screen-spinner-container" === a.attr("id") || "otp-preferences-spinner-container" === a.attr("id") ? ("otp-screen-spinner-container" === a.attr("id") && 800 <= $(window).width() ? a.find(".spinner").css({
            left: "25%",
            top: "-21%"
        }) : "otp-screen-spinner-container" === a.attr("id") && a.find(".spinner").css({
            left: "0%",
            top: "2%"
        }),
            a.addClass("spinner-full-page"),
            a.find(".spinner").html($(".global-loader").html())) : "forgot-password-spinner-container" == a.attr("id") ? a.addClass("spinner-active") : a.addClass(b)),
        null == a && ($(".spinner-active").length || $(".spinner-full-page").length || $("#global-spinner-container").length) && ($(".spinner-active").removeClass("spinner-active"),
            $(".spinner-full-page").removeClass("spinner-full-page"),
            $("#global-spinner-container").removeClass("spinner-full-page")))
}
function hideSpinnerMobileApp(a, b) {
    "true" == $("#isPublish").val() && (isMobileApp() && null != a && void 0 != a ? "global-spinner-container" === a.attr("id") ? (mobilePlatform == window.ANDROID_PLATFORM && "undefined" != typeof JSInterface && JSInterface.closeSpinner(),
        mobilePlatform == window.IOS_PLATFORM && setupWebViewJavascriptBridge(function (c) {
            c.callHandler("closeSpinner", function () { })
        })) : a.removeClass("spinner-active") : void 0 != a && ("global-spinner-container" === a.attr("id") || "otp-screen-spinner-container" === a.attr("id") || "otp-preferences-spinner-container" === a.attr("id") ? (a.find(".spinner").html(""),
            a.removeClass("spinner-full-page")) : "forgot-password-spinner-container" == a.attr("id") ? a.removeClass("spinner-active") : a.removeClass(b)),
        null == a && ($(".spinner-active").length || $(".spinner-full-page").length || $("#global-spinner-container").length) && ($(".spinner-active").removeClass("spinner-active"),
            $(".spinner-full-page").removeClass("spinner-full-page"),
            $("#global-spinner-container").removeClass("spinner-full-page")))
}
function loginHeaderBackClick() {
    mobilePlatform == window.ANDROID_PLATFORM && JSInterface.loginHeaderBackClick();
    mobilePlatform == window.IOS_PLATFORM && setupWebViewJavascriptBridge(function (a) {
        a.callHandler("loginHeaderBackClick", function () { })
    })
}
function memberShipCardsDownload() {
    mobilePlatform == window.ANDROID_PLATFORM && JSInterface.memberShipCardsDownload();
    mobilePlatform == window.IOS_PLATFORM && setupWebViewJavascriptBridge(function (a) {
        a.callHandler("memberShipCardsDownload", function () { })
    })
}
function qCalculatorSearchFight() {
    var a = $("#qcalculator-from").val()
        , b = $("#qcalculator-to").val();
    a = a.substring(a.indexOf("(") + 1, a.length - 1);
    b = b.substring(b.indexOf("(") + 1, b.length - 1);
    var c = new Date;
    c = c.getFullYear() + "-" + (c.getMonth() + 1) + "-" + c.getDate();
    var d = new Date((new Date).getTime() + 432E6);
    d = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
    var e = {
        fromStation: a,
        toStation: b,
        tripType: $("#earnRoundCheck #radio-pressed").is(":checked") ? "RETURN" : "ONEWAY",
        cabinClass: $("#qCalculatorClass").val(),
        membership: $("#membership").val(),
        departureDate: c,
        returnDate: d,
        adultCount: "1",
        childCount: "0",
        infantCount: "0"
    };
    mobilePlatform == window.ANDROID_PLATFORM && JSInterface.qCalculatorSearchFight(JSON.stringify(e));
    mobilePlatform == window.IOS_PLATFORM && setupWebViewJavascriptBridge(function (h) {
        h.callHandler("qCalculatorSearchFight", e, function () { })
    })
}
function qCalculatorExcessBaggage() {
    mobilePlatform == window.ANDROID_PLATFORM && JSInterface.qCalculatorExcessBaggage();
    mobilePlatform == window.IOS_PLATFORM && setupWebViewJavascriptBridge(function (a) {
        a.callHandler("qCalculatorExcessBaggage", function () { })
    })
}
function qCalculatorUpgrade() {
    mobilePlatform == window.ANDROID_PLATFORM && JSInterface.qCalculatorUpgrade();
    mobilePlatform == window.IOS_PLATFORM && setupWebViewJavascriptBridge(function (a) {
        a.callHandler("qCalculatorUpgrade", function () { })
    })
}
function setTokenToApp() {
    var a = getFFPCookieValue("QRTOKEN");
    mobilePlatform == window.ANDROID_PLATFORM && JSInterface.setToken(a);
    mobilePlatform == window.IOS_PLATFORM && setupWebViewJavascriptBridge(function (b) { })
}
function findthePageTitle() {
    var a = document.getElementsByTagName("title")[0];
    mobilePlatform == window.ANDROID_PLATFORM && JSInterface.setPageTitle($(a).text());
    mobilePlatform == window.IOS_PLATFORM && setupWebViewJavascriptBridge(function (b) {
        b.callHandler("setPageTitle", $(a).text(), function () { })
    })
}
function enrollmentMobileApp() {
    $("#join-form #socialJoinMobileApp").attr("style", "display: block;");
    $("#join-form #socialJoin").remove();
    $("#facebookMobileApp").on("click", function () {
        FBRedirectionMobileApp("ENROLL")
    });
    $("#twitterMobileApp").on("click", function () {
        twitterRedirectionMobileApp("ENROLL")
    });
    $("#googlePlusMobileApp").on("click", function () {
        googleRedirectionMobileApp("ENROLL")
    })
}
function loginMobileApp() {
    $("#social-login-mobileapp").css({
        display: "block"
    });
    $("#social-login-desktop").css({
        display: "none"
    });
    $("#facebookLoginMobileApp").on("click", function () {
        $("body").css({
            display: "none"
        });
        FBRedirectionMobileApp("LOGIN")
    });
    $("#twitterLoginMobileApp").on("click", function () {
        $("body").css({
            display: "none"
        });
        twitterRedirectionMobileApp("LOGIN")
    });
    $("#googlePlusLoginMobileApp").on("click", function () {
        $("body").css({
            display: "none"
        });
        googleRedirectionMobileApp("LOGIN")
    });
    $("#social-login-block .remember-me").css({
        display: "none"
    })
}
function socialMediaLinkDelinkMobile(a) {
    "FACEBOOK" === a && (mobilePlatform == window.ANDROID_PLATFORM && JSInterface.facebookDBLinking(),
        mobilePlatform == window.IOS_PLATFORM && (setupWebViewJavascriptBridge(function (b) {
            b.callHandler("facebookDBLinking", function () { })
        }),
            setupWebViewJavascriptBridge(function (b) {
                b.registerHandler("facebookDBLinkCallBack", function (c) {
                    c = JSON.parse(c);
                    manageSocialMedia("LINK", "FACEBOOK", c.socialMediaUniqueId, void 0 !== c.socialmediaEmailId ? c.socialmediaEmailId : "", c.accessToken)
                })
            })));
    "GOOGLE" === a && (mobilePlatform == window.ANDROID_PLATFORM && JSInterface.googleDBLinking(),
        mobilePlatform == window.IOS_PLATFORM && (setupWebViewJavascriptBridge(function (b) {
            b.callHandler("googleDBLinking", function () { })
        }),
            setupWebViewJavascriptBridge(function (b) {
                b.registerHandler("googleDBLinkCallBack", function (c) {
                    c = JSON.parse(c);
                    manageSocialMedia("LINK", "GOOGLE", c.socialMediaUniqueId, void 0 !== c.socialmediaEmailId ? c.socialmediaEmailId : "", c.accessToken)
                })
            })));
    "TWITTER" === a && (mobilePlatform == window.ANDROID_PLATFORM && JSInterface.twitterDBLinking(),
        mobilePlatform == window.IOS_PLATFORM && (setupWebViewJavascriptBridge(function (b) {
            b.callHandler("twitterDBLinking", function () { })
        }),
            setupWebViewJavascriptBridge(function (b) {
                b.registerHandler("twitterDBLinkCallBack", function (c) {
                    c = JSON.parse(c);
                    var d = void 0 !== c.socialmediaEmailId ? c.socialmediaEmailId : "";
                    $("#twitterAccessTokenSecret").val(c.accessTokenSecret);
                    manageSocialMedia("LINK", "TWITTER", c.socialMediaUniqueId, d, c.accessToken)
                })
            })))
}
function mobileSocialMediaLink() {
    $("#dashboard-layover #mobileDBIcons").length && ($("#dashboard-layover #mobileDBIcons").attr("style", "display :block !important"),
        $("#dashboard-layover #desktopDBIcons").attr("style", "display:none !important"),
        $(document).on("click", "#mobileDBIcons #FACEBOOKMOBILE", function () {
            socialMediaLinkDelinkMobile("FACEBOOK");
            return !1
        }),
        $(document).on("click", "#mobileDBIcons #TWITTERMOBILE", function () {
            socialMediaLinkDelinkMobile("TWITTER");
            return !1
        }),
        $(document).on("click", "#mobileDBIcons #GOOGLEMOBILE", function () {
            socialMediaLinkDelinkMobile("GOOGLE");
            return !1
        }))
}
function enableUpcomingTripsEvents() {
    $(".enhanceMyFlight_Link").addClass("hide");
    $(".enhanceMyFlight_LinkMobile").removeClass("hide");
    $(document).on("change", "#upcomingMobileAppChanges", function () {
        $(".enhanceMyFlight_Link").addClass("hide");
        $(".enhanceMyFlight_LinkMobile").removeClass("hide")
    });
    $(document).on("click", ".upcoming_checkin_btn", function () {
        if (void 0 == $(this).attr("data-clicked")) {
            $(this).attr("data-clicked", "true");
            var a = $(this)
                , b = $(this).attr("data-lastname")
                , c = $(this).attr("data-reference")
                , d = {
                    lastName: b,
                    referenceNumber: c
                };
            mobilePlatform == window.ANDROID_PLATFORM && JSInterface.upcomingTripsCheckin(JSON.stringify(d));
            mobilePlatform == window.IOS_PLATFORM && setupWebViewJavascriptBridge(function (e) {
                e.callHandler("upcomingTripsCheckin", d, function () {
                    setTimeout(function () {
                        $(a).removeAttr("data-clicked")
                    }, 500)
                })
            })
        }
    });
    $(document).on("click", ".enhanceMyFlight_LinkMobile", function () {
        var a = $(this);
        if (void 0 == $(this).attr("data-clicked")) {
            $(this).attr("data-clicked", "true");
            a = $(this);
            var b = $(this).attr("data-lastname")
                , c = $(this).attr("data-reference")
                , d = {
                    lastName: b,
                    pnr: c
                };
            mobilePlatform == window.ANDROID_PLATFORM && JSInterface.appMBRedirection(JSON.stringify(d));
            mobilePlatform == window.IOS_PLATFORM && setupWebViewJavascriptBridge(function (e) {
                e.callHandler("appMBRedirection", d, function () {
                    setTimeout(function () {
                        $(a).removeAttr("data-clicked")
                    }, 500)
                })
            });
            setTimeout(function () {
                $(a).removeAttr("data-clicked")
            }, 1E3)
        }
    })
}
var isMobileAppSessionFailure = !1
    , validateSessionApp = function () {
        if ("true" !== $("#isCUGEnabled").val())
            return !1;
        var a = $("#verifyUserURL").val();
        isMobileAppSessionFailure = !0;
        if ("" !== a && void 0 !== a) {
            var b = {
                token: getFFPCookieValue("QRTOKEN")
            };
            window.qrServiceRef.postReq(a, b, req_headers, "", {}).then(function (c) {
                c.status ? (mobilePlatform == window.ANDROID_PLATFORM && JSInterface.SessionSuccess(),
                    mobilePlatform == window.IOS_PLATFORM && setupWebViewJavascriptBridge(function (d) {
                        d.callHandler("SessionSuccess", "", function () { })
                    })) : $.ajax({
                        url: "/qr/Logout",
                        type: "GET",
                        data: {
                            logOut: "logOut",
                            reasonApp: "FAILED_TO_VERIFY_QRTOKEN"
                        },
                        cache: !1,
                        success: function (d) {
                            mobilePlatform == window.ANDROID_PLATFORM && JSInterface.SessionFailure();
                            mobilePlatform == window.IOS_PLATFORM && setupWebViewJavascriptBridge(function (e) {
                                e.callHandler("SessionFailure", "", function () { })
                            })
                        },
                        error: function (d, e, h) {
                            mobilePlatform == window.ANDROID_PLATFORM && JSInterface.SessionFailure();
                            mobilePlatform == window.IOS_PLATFORM && setupWebViewJavascriptBridge(function (m) {
                                m.callHandler("SessionFailure", "", function () { })
                            })
                        }
                    })
            })
        }
    }
    , validateSessionMobileHTML = function () {
        if ("true" !== $("#isCUGEnabled").val())
            return !1;
        var a = $("#verifyUserURL").val();
        if ("" !== a && void 0 !== a) {
            var b = {
                token: getFFPCookieValue("QRTOKEN")
            };
            window.qrServiceRef.postReq(a, b, req_headers, "", {}).then(function (c) {
                c.status || $.ajax({
                    url: "/qr/Logout",
                    type: "GET",
                    data: {
                        logOut: "logOut",
                        reasonApp: "FAILED_TO_VERIFY_QRTOKEN"
                    },
                    cache: !1,
                    success: function (d) {
                        $("#sessionTimedoutMobileHTML").removeClass("hide");
                        $("#loginMainComponent").remove()
                    },
                    error: function (d, e, h) {
                        $("#sessionTimedoutMobileHTML").removeClass("hide");
                        $("#loginMainComponent").remove()
                    }
                })
            })
        }
    }
    , isMobileIntegrationLoaded = !1;
function mobileAppIntegrationMethods() {
    if (isMobileIntegrationLoaded)
        return !1;
    isMobileIntegrationLoaded = !0;
    $("#header-back").length && $("#header-back").removeAttr("onclick");
    $(".qbiz-login-section").length && $(".qbiz-login-section").css({
        display: "none"
    });
    setTokenToApp();
    findthePageTitle();
    0 == $("#j-login-form").length && 0 == $("#socialJoin").length && validateSessionApp();
    loginMobileApp();
    enrollmentMobileApp();
    hideSpinnerMobileApp(null, "");
    mobileSocialMediaLink();
    enableUpcomingTripsEvents();
    480 >= screen.width && document.getElementById("myViewport").setAttribute("content", "width\x3d480; user-scalable\x3dyes;");
    setupWebViewJavascriptBridge(function (h) {
        h.registerHandler("socialLoginFailedCallback", function () {
            $("body").css({
                display: "block"
            })
        })
    });
    $("#offersTeaserMobileOption").length && "true" === $("#offersTeaserMobileOption").val() && $(".offers-double-teaser").remove();
    if ($(".extenalLinkApp").length)
        $(".extenalLinkApp").on("click", function () {
            var h = $(this).attr("href");
            mobilePlatform == window.ANDROID_PLATFORM && JSInterface.externalLinkClick(h);
            mobilePlatform == window.IOS_PLATFORM && setupWebViewJavascriptBridge(function (m) {
                m.callHandler("externalLinkClick", h, function () { })
            });
            return !1
        });
    $(".login-drop").length && mobilePlatform == window.IOS_PLATFORM && ($("#main .contentmodule-signon.section").css({
        width: "90%"
    }),
        $("#forgot-password-link").attr("style", "font-size : 10px !important"),
        $("#main").on("touchmove", function (h) {
            h.preventDefault()
        }));
    $("#div_guestuserlogin").length && ($("#div_guestuserlogin").find("a.btn").removeAttr("onclick"),
        $("#div_guestuserlogin").find("a.btn").on("click", function () {
            mobilePlatform == window.ANDROID_PLATFORM && JSInterface.guestLoginApp();
            mobilePlatform == window.IOS_PLATFORM && setupWebViewJavascriptBridge(function (h) {
                h.callHandler("guestLoginApp", {}, function () { })
            })
        }));
    var a = window.location.hash;
    if ($("#j-poi-tab-content-bgt").length && -1 == a.indexOf("ps"))
        setTimeout(function () {
            $("#j-poi-tab-content-bgt").find(".tabset-accordion-item").each(function () {
                $(this).find(".j-T34-continue").prop("disabled", !0);
                $(this).removeClass("active");
                $(this).find(".accordion-module-content-holder").removeClass("in");
                $(this).find(".T34.tabset-accordion-content").removeClass("in")
            })
        }, 300);
    else {
        var b = window.location.hash
            , c = b.indexOf("#")
            , d = b.indexOf("?");
        if (-1 != d) {
            var e = b.substring(c, d);
            $('[href\x3d"' + e + '"]').click();
            setTimeout(function () {
                $(e).addClass("active")
            }, 600)
        }
    }
    $("#j-poi-tab-content1").length && -1 == a.indexOf("ps") ? setTimeout(function () {
        $("#j-poi-tab-content1").find(".tabset-accordion-item").each(function () {
            $(this).find(".j-T34-continue").prop("disabled", !0);
            $(this).removeClass("active");
            $(this).find(".accordion-module-content-holder").removeClass("in");
            $(this).find(".T34.tabset-accordion-content").removeClass("in")
        })
    }, 300) : (b = window.location.hash,
        c = b.indexOf("#"),
        d = b.indexOf("?"),
        -1 != d && (e = b.substring(c, d),
            $('[href\x3d"' + e + '"]').click(),
            setTimeout(function () {
                $(e).addClass("active")
            }, 600)));
    setTimeout(function () {
        $(".dashboard-layover").length && $("#double-teaser").length && $("#double-teaser #gen-twocolumn-content .two-columns-content-block-header").attr("style", "position: relative !important")
    }, 300);
    a = localStorage.getItem("sessionLastAcitivity");
    null !== a && void 0 !== a && localStorage.removeItem("sessionLastAcitivity");
    clearInterval(sess_intervalID);
    -1 != $(".T7_4-redeem #tabView-qatar-flight").length && $(".T7_4-redeem #tabView-qatar-flight #advanceBookingwidgt #multiCityRadio").parent().hide();
    $(document).on("click", "#upcomingtrips-spinner-container .trips-section-list .media-tabs .media-tabs-tab-content .media-tabs-text-holder a", function (h) {
        var m = $(this).attr("href");
        if (0 < m.indexOf("carrentals.qatarairways.com") || 0 < m.indexOf("hotels.qatarairways.com"))
            return h.preventDefault(),
                mobilePlatform == window.ANDROID_PLATFORM && JSInterface.externalLinkClick(m),
                mobilePlatform == window.IOS_PLATFORM && setupWebViewJavascriptBridge(function (u) {
                    u.callHandler("externalLinkClick", m, function () { })
                }),
                !1
    });
    null != getFFPCookieValue("QRTOKEN") && $.ajax({
        url: "/qr/qrweb/accesslogintoken",
        type: "GET",
        cache: !1,
        success: function (h, m, u) {
            void 0 != h && null != h && 0 != h.length || $.ajax({
                url: "/qr/Logout",
                type: "GET",
                data: {
                    logOut: "logOut",
                    reasonApp: "EMPTY_LOGIN_TOKEN"
                },
                cache: !1,
                success: function (k) {
                    mobilePlatform == window.ANDROID_PLATFORM && JSInterface.SessionFailure();
                    mobilePlatform == window.IOS_PLATFORM && setupWebViewJavascriptBridge(function (f) {
                        f.callHandler("SessionFailure", "", function () { })
                    })
                },
                error: function (k, f, n) {
                    mobilePlatform == window.ANDROID_PLATFORM && JSInterface.SessionFailure();
                    mobilePlatform == window.IOS_PLATFORM && setupWebViewJavascriptBridge(function (r) {
                        r.callHandler("SessionFailure", "", function () { })
                    })
                }
            })
        }
    })
}
function setupWebViewJavascriptBridge(a) {
    if (window.WebViewJavascriptBridge)
        return a(WebViewJavascriptBridge);
    if (window.WVJBCallbacks)
        return window.WVJBCallbacks.push(a);
    window.WVJBCallbacks = [a];
    var b = document.createElement("iframe");
    b.style.display = "none";
    b.src = "https://__bridge_loaded__";
    document.documentElement.appendChild(b);
    setTimeout(function () {
        document.documentElement.removeChild(b)
    }, 0)
}
function isURLContainsMobileSelector(a) {
    return window.JSInterface || window.WebViewJavascriptBridge ? !0 : !1
}
function registerHandlers() {
    var a = "" != document.referrer ? document.referrer : null;
    mobilePlatform == window.IOS_PLATFORM && setupWebViewJavascriptBridge(function (b) {
        b.registerHandler("backButtonClick", function (c) {
            setupWebViewJavascriptBridge(function (d) {
                d.callHandler("redirectPage", a, function () { })
            })
        })
    });
    mobileAppIntegrationMethods()
}
setupWebViewJavascriptBridge(function (a) {
    a.registerHandler("setPlatform", function (b) {
        mobilePlatform = window.IOS_PLATFORM;
        "false" == $("#mobileAppTriggerer").val() && ($("#mobileAppTriggerer").val("true"),
            $("#mobileAppTriggerer").trigger("change"));
        registerHandlers()
    })
});
function mobileAppPlatform() {
    window.JSInterface && (mobilePlatform = window.ANDROID_PLATFORM,
        "false" == $("#mobileAppTriggerer").val() && ($("#mobileAppTriggerer").val("true"),
            $("#mobileAppTriggerer").trigger("change")),
        registerHandlers());
    setupWebViewJavascriptBridge(function (a) {
        a.registerHandler("setPlatform", function (b) {
            mobilePlatform = window.IOS_PLATFORM;
            "false" == $("#mobileAppTriggerer").val() && ($("#mobileAppTriggerer").val("true"),
                $("#mobileAppTriggerer").trigger("change"));
            registerHandlers()
        })
    })
}
function isMobileApp() {
    return mobilePlatform == window.ANDROID_PLATFORM || mobilePlatform == window.IOS_PLATFORM ? !0 : !1
}
$(document).ready(function () {
    mobileAppPlatform()
});
$(document).ready(function () {
    $(document).on("change", "#mobileAppTriggerer", function () {
        mobileAppIntegrationMethods();
        $("#header-back").length && $("#header-back").removeAttr("onclick");
        $(".qbiz-login-section").length && $(".qbiz-login-section").css({
            display: "none"
        })
    });
    $("#header-back").length && ($("#header-back").removeAttr("onclick"),
        $(document).on("click", "#header-back a", function () {
            if (isMobileApp())
                return loginHeaderBackClick(),
                    !1
        }));
    $(".C32-membership-card-toolbar-dl.j-C32-dl").length && ($(".C32-membership-card-toolbar-dl.j-C32-dl").removeAttr("download"),
        $(".C32-membership-card-toolbar-dl.j-C32-dl").on("click", function () {
            if (isMobileApp())
                return memberShipCardsDownload(),
                    !1
        }));
    $("#earnSearchFlightButton").length && ($(document).on("click", "#earnSearchFlightButton", function () {
        if (isMobileApp())
            return qCalculatorSearchFight(),
                !1
    }),
        $(document).on("click", "#excessBaggage", function () {
            if (isMobileApp())
                return qCalculatorExcessBaggage(),
                    !1
        }));
    $(document).on("click", ".trip-history.popup button.close", function () {
        $(".trip-history-modal.j-trip-history").removeClass("in")
    });
    location.pathname.substring(location.pathname.lastIndexOf("/") + 1, location.pathname.length);
    -1 != location.pathname.indexOf(".mobile.html") && 0 == $("#j-login-form").length && "true" == $("#isCUGEnabled").val() && 0 == $("#socialJoin").length && setTimeout(function () {
        isMobileAppSessionFailure || validateSessionMobileHTML()
    }, 500);
    $(document).on("click", "#sessionTimedoutMobileHTML .btn", function () {
        if (isMobileApp())
            validateSessionApp();
        else {
            var a = $("#mobileSessionTimeoutLink").val() + ".mobile.html";
            window.location.href = a
        }
    })
});
$(document).ready(function () {
    var a = $("#current-page-template").val()
        , b = $("#isPublish").val();
    "true" === b && "/apps/qrweb/templates/withoutheaderfootertemplate" === a && signOut(!1, null);
    if ("true" == b && "release1B" !== $("#headerReleaseType").val()) {
        var c = getFFPCookieValue("QRTOKEN");
        "undefined" != typeof c && null != c && "" != c ? ($("#login-container").addClass("hidden"),
            $("#loginHeader").css("display", "none"),
            $("#loginScreen").removeClass("hidden")) : ($("#login-container .login-signup-block").removeClass("hidden"),
                $("#loginHeader").css("display", "block"),
                $("#loginScreen").addClass("hidden"))
    }
    c = getFFPCookieValue("loginRequest");
    "true" === b && "/apps/qrweb/templates/withoutheaderfootertemplate" !== a && null !== c && "" !== c && "undefined" !== typeof c && (document.cookie = "loginRequest\x3d;path\x3d/;domain\x3d.qatarairways.com")
});
$("#new-qrpc-megamenu-links").removeClass("hidden");
function nearestAirport() {
    var a = $("#runmodes").val();
    if (void 0 != a && null != a && -1 < !a.split(",").indexOf("author")) {
        var b, c, d, e = [], h, m, u;
        a = "true" == $("#isProd").val() ? "https://www.qatarairways.com/iw-cc/qatar/servicelocate.jsp" : "https://stg.qatarairways.com/iw-cc/qatar/servicelocate.jsp";
        $.ajax({
            type: "GET",
            contentType: "application/json; charset\x3dutf-8",
            async: !1,
            timeout: 5E3,
            url: a,
            success: function (g) {
                u = JSON.parse(g);
                b = u.Countrycode;
                d = u.Long.replace("-", "");
                c = u.Lat.replace("-", "")
            },
            error: function (g, p, w) {
                console.log("error in closest airport", g.status, w, g.responseText, p)
            }
        });
        if (null == b || "" == b) {
            var k = $("#origin-airport").val();
            $.each(r, function (g, p) {
                if (r[g].shorthand = k)
                    b = r[g].countrycode,
                        p = r[g].latitude,
                        g = r[g].longitude,
                        "" != p && "" != g && (p = p.split("\u00b0"),
                            g = g.split("\u00b0")),
                        c = p[0].replace("-", ""),
                        d = g[0].replace("-", "")
            })
        }
        var f, n, r = window.cityListJSON;
        $.each(r, function (g, p) {
            p = r[g].countryCode;
            if (p == b && (f = r[g].latitude,
                n = r[g].longitude,
                "" != f && "" != n)) {
                f = f.split("\u00b0");
                n = n.split("\u00b0");
                if (null != r[g].airport || "" != r[g].airport)
                    h = r[g].shorthand,
                        m = r[g].city;
                "" != f[0] && null != f[0] && "" != n[0] && null != n[0] && "qr" == r[g].priority && e.push({
                    shorthand: h,
                    city: m,
                    countryCode: p,
                    distance: getDistanceFromLatLonInKm(f[0], n[0], c, d)
                })
            }
        });
        0 != e.length && (e.sort(function (g, p) {
            return g.distance - p.distance
        }),
            1 < e.length && (e.length = 1));
        var q, l, t = "";
        $.each(e, function (g, p) {
            $("#destination-from").val(e[g].shorthand);
            q = e[g].shorthand;
            l = e[g].city;
            t = e[g].countryCode
        });
        try {
            "undefined" != typeof q && q != $("#boxeverDefaultOrigin").val() && ("undefined" != typeof regionToSend && "" != t && (regionToSend = t),
                sendAysncFlowcall(q, "undefined" != typeof friendlyIdHPFD && "" != friendlyIdHPFD ? friendlyIdHPFD : "homepage_destination_recommender*"))
        } catch (g) { }
        "" != q && void 0 != q && "" != l && void 0 != l && (window.shortHand = q,
            window.citycode = l.split("*")[0])
    }
}
function getDistanceFromLatLonInKm(a, b, c, d) {
    var e = deg2rad(c - a);
    b = deg2rad(d - b);
    a = Math.sin(e / 2) * Math.sin(e / 2) + Math.cos(deg2rad(a)) * Math.cos(deg2rad(c)) * Math.sin(b / 2) * Math.sin(b / 2);
    return 12742 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
}
function deg2rad(a) {
    return Math.PI / 180 * a
}
function ParseDMS(a) {
    var b = a.split(/[^\d\w\.]+/);
    a = ConvertDMSToDD(b[0], b[1], b[2], b[3]);
    b = ConvertDMSToDD(b[4], b[5], b[6], b[7]);
    getDistanceFromLatLonInKm(jsonlat, jsonlong, a, b)
}
function ConvertDMSToDD(a, b, c, d) {
    a += (60 * b + c) / 3600;
    if ("S" == d || "W" == d)
        a *= -1;
    return a
}
function ddToDms(a, b) {
    a = parseFloat(a);
    b = parseFloat(b);
    var c = getDms(a);
    c += 0 <= a ? "N" : "S";
    a = getDms(b);
    return c + " " + (a + (0 <= b ? "E" : "W"))
}
function getDms(a) {
    a = Math.abs(a);
    var b = Math.floor(a);
    var c = Math.floor(60 * (a - b));
    return a = b + "?" + (c + "'") + (Math.round(36E5 * (a - b - c / 60)) / 1E3 + '"')
}
$(document).ready(function () {
    $("a[href$\x3d'activityCode\x3dQDF']").on("click", function () {
        var a = getFFPCookieValue("QRTOKEN")
            , b = $("#qdf-redirection-page").val();
        if (null !== a && void 0 !== a && "" !== a)
            return a = '\x3cinput type\x3d"hidden" value\x3d"' + a + '" name\x3d"QRTOKEN" /\x3e\x3cinput type\x3d"hidden" value\x3d"' + ($("#page-locale").val() + '" name\x3d"selLang" /\x3e'),
                $("#j-cookie-call-back-url-form").attr("action", b),
                $("#j-cookie-call-back-url-form").empty(),
                $("#j-cookie-call-back-url-form").append(a),
                $("#j-cookie-call-back-url-form").submit(),
                !1
    })
});
