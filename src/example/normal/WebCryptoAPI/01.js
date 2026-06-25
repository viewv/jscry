var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.createTemplateTagFirstArg = function (a) {
    return a.raw = a
}
    ;
$jscomp.createTemplateTagFirstArgWithRaw = function (a, b) {
    a.raw = b;
    return a
}
    ;
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
$jscomp.arrayFromIterator = function (a) {
    for (var b, d = []; !(b = a.next()).done;)
        d.push(b.value);
    return d
}
    ;
$jscomp.arrayFromIterable = function (a) {
    return a instanceof Array ? a : $jscomp.arrayFromIterator($jscomp.makeIterator(a))
}
    ;
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.ISOLATE_POLYFILLS = !1;
$jscomp.FORCE_POLYFILL_PROMISE = !1;
$jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, b, d) {
    if (a == Array.prototype || a == Object.prototype)
        return a;
    a[b] = d.value;
    return a
}
    ;
$jscomp.getGlobal = function (a) {
    a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
    for (var b = 0; b < a.length; ++b) {
        var d = a[b];
        if (d && d.Math == Math)
            return d
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
    var d = $jscomp.propertyToPolyfillSymbol[b];
    if (null == d)
        return a[b];
    d = a[d];
    return void 0 !== d ? d : a[b]
};
$jscomp.polyfill = function (a, b, d, c) {
    b && ($jscomp.ISOLATE_POLYFILLS ? $jscomp.polyfillIsolated(a, b, d, c) : $jscomp.polyfillUnisolated(a, b, d, c))
}
    ;
$jscomp.polyfillUnisolated = function (a, b, d, c) {
    d = $jscomp.global;
    a = a.split(".");
    for (c = 0; c < a.length - 1; c++) {
        var e = a[c];
        if (!(e in d))
            return;
        d = d[e]
    }
    a = a[a.length - 1];
    c = d[a];
    b = b(c);
    b != c && null != b && $jscomp.defineProperty(d, a, {
        configurable: !0,
        writable: !0,
        value: b
    })
}
    ;
$jscomp.polyfillIsolated = function (a, b, d, c) {
    var e = a.split(".");
    a = 1 === e.length;
    c = e[0];
    c = !a && c in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global;
    for (var g = 0; g < e.length - 1; g++) {
        var h = e[g];
        if (!(h in c))
            return;
        c = c[h]
    }
    e = e[e.length - 1];
    d = $jscomp.IS_SYMBOL_NATIVE && "es6" === d ? c[e] : null;
    b = b(d);
    null != b && (a ? $jscomp.defineProperty($jscomp.polyfills, e, {
        configurable: !0,
        writable: !0,
        value: b
    }) : b !== d && (void 0 === $jscomp.propertyToPolyfillSymbol[e] && ($jscomp.propertyToPolyfillSymbol[e] = $jscomp.IS_SYMBOL_NATIVE ? $jscomp.global.Symbol(e) : $jscomp.POLYFILL_PREFIX + e),
        e = $jscomp.propertyToPolyfillSymbol[e],
        $jscomp.defineProperty(c, e, {
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
    } catch (d) { }
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
    var d = a.next();
    $jscomp.generator.ensureIteratorResultIsObject_(d);
    if (d.done)
        this.yieldResult = d.value,
            this.nextAddress = b;
    else
        return this.yieldAllIterator_ = a,
            this.yield(d.value, b)
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
$jscomp.generator.Context.prototype.enterFinallyBlock = function (a, b, d) {
    d ? this.finallyContexts_[d] = this.abruptCompletion_ : this.finallyContexts_ = [this.abruptCompletion_];
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
        return this.yieldAllStep_("return" in b ? b["return"] : function (d) {
            return {
                value: d,
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
$jscomp.generator.Engine_.prototype.yieldAllStep_ = function (a, b, d) {
    try {
        var c = a.call(this.context_.yieldAllIterator_, b);
        $jscomp.generator.ensureIteratorResultIsObject_(c);
        if (!c.done)
            return this.context_.stop_(),
                c;
        var e = c.value
    } catch (g) {
        return this.context_.yieldAllIterator_ = null,
            this.context_.throw_(g),
            this.nextStep_()
    }
    this.context_.yieldAllIterator_ = null;
    d.call(this.context_, e);
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
    function b(c) {
        return a.next(c)
    }
    function d(c) {
        return a.throw(c)
    }
    return new Promise(function (c, e) {
        function g(h) {
            h.done ? c(h.value) : Promise.resolve(h.value).then(b, d).then(g, e)
        }
        g(a.next())
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
$(function () {
    $(".search-input .btn.search-btn").on("click", function () {
        searchResults()
    });
    $("#search-input-text").keypress(function (a) {
        if (13 == a.which)
            return $(".search-input .btn.search-btn").trigger("click"),
                !1
    })
});
function searchResults() {
    $("#searchpagePath").text();
    var a = $("#search-input-text").val()
        , b = $("#searchResultPage").text()
        , d = "";
    if (-1 != b.indexOf("http"))
        for (var c = b.split("/"), e = 3; e <= c.length; e++)
            void 0 != c[e] && "" != c[e] && (d = d + "/" + c[e]);
    "undefined" != typeof s && s && (s.events = "event74",
        s.eVar77 = a,
        "true" == $("#sc_variable").val() && s.t());
    window.location = b + "?searchString\x3d" + a + "\x26currentPagePath\x3d" + d
}
$(document).ready(function () {
    function a(g) {
        g = g.slice(0, 3);
        var h = $("#page-locale").val();
        Granite.I18n.setLocale(h);
        return Granite.I18n.get("fare.finder." + g.toLowerCase())
    }
    function b(g) {
        g = (new Date(Date.parse(g))).getMonth() + 1;
        var h = Array(13);
        h[1] = "January";
        h[2] = "February";
        h[3] = "March";
        h[4] = "April";
        h[5] = "May";
        h[6] = "June";
        h[7] = "July";
        h[8] = "August";
        h[9] = "September";
        h[10] = "October";
        h[11] = "November";
        h[12] = "December";
        return h[parseInt(g)]
    }
    var d = $("#setTabIndex").val()
        , c = $("#currentPageAlert").val()
        , e = "true" == d ? "0" : "";
    try {
        $.ajax({
            type: "GET",
            url: "/qr/qrweb/metabar-alert",
            async: !1,
            data: {
                currentPage: $("#currentPageAlert").val()
            },
            contentType: "application/json; charset\x3dUTF-8",
            success: function (g) {
                $("#metabarAlerts").closest(".exchange").removeClass("hide");
                g = JSON.stringify(g);
                var h = JSON.parse(g);
                g = h.alertPath;
                $("#metabarAlerts").append('\x3cinput type\x3d"hidden" id\x3d"metabarAlertPath" value\x3d"' + g + '"/\x3e');
                var k = h.alerts;
                g = 0;
                if (void 0 != k)
                    for (var l = 0; l < k.length; l++)
                        g += h.alerts[l].titles.length;
                if (0 < g) {
                    $("#metabarAlerts").append('\x3cspan class\x3d"span-hidden" tabindex\x3d"' + e + '"\x3eTravel alerts\x3c/span\x3e\x3cspan class\x3d"alertbg"\x3e\x3cspan class\x3d"icon icon-exclamation alert-notice-icon"\x3e\x3c/span\x3e\x3c/span\x3e\x3cul id\x3d"alerts"\x3e\x3c/ul\x3e');
                    $.each(k, function (v, r) {
                        var w = (new Date).getFullYear();
                        r.updationDate.split(" ");
                        r = b(r.updationDate + " " + w);
                        a(r);
                        var u;
                        $.each(k[v].titles, function (q, p) {
                            q = "#e9db21" == p.colorOption ? "#333" : "#fff";
                            var x = p.linkType
                                , t = p.linkInternalUri;
                            "internal" == x ? (-1 != c.indexOf("/content/tradepartners") && t.match("tradepartner.") && (t = t.replace("tradepartner.", "tradepartner/")),
                                u = '\x3ca tabindex\x3d"' + e + '" href\x3d"' + t + '.html" style\x3d"color:' + q + '"\x3e' + p.alertTitles + "\x3c/a\x3e") : u = "external" == x ? '\x3ca  tabindex\x3d"' + e + '" target\x3d"_blank" href\x3d"' + p.linkExternalUri + '" style\x3d"color:' + q + '"\x3e' + p.alertTitles + "\x3c/a\x3e" : '\x3ca   tabindex\x3d"' + e + '" href\x3d"' + h.alertDetailPath + '" style\x3d"color:' + q + '"\x3e' + p.alertTitles + "\x3c/a\x3e";
                            $("#alerts").append("\x3cli\x3e\x3c/li\x3e");
                            $("#alerts").find("li:last-child").append(u);
                            $("#alerts").find("li:last-child").find(".pull-right.date").css({
                                color: q
                            })
                        })
                    });
                    $("#metabarAlerts").append('\x3ca href\x3d"javascript:void(0);" id\x3d"matabarCookie" class\x3d"close icon" aria-label\x3d"Close the travel alerts bar"\x3e\x3c/a\x3e');
                    $("#metabarAlerts").append('\x3cdiv class\x3d"alert-gradient"\x3e\x3c/div\x3e');
                    -1 == c.indexOf("/content/tradepartners") && "global.alert.viewall.ctalink" != Granite.I18n.get("global.alert.viewall.ctalink") && "" != Granite.I18n.get("global.alert.viewall.ctalink").trim() && "global.alert.viewall" != Granite.I18n.get("global.alert.viewall") && "" != Granite.I18n.get("global.alert.viewall").trim() && $("#metabarAlerts").append('\x3ca href\x3d"' + Granite.I18n.get("global.alert.viewall.ctalink") + '" target\x3d"_blank" class\x3d"view-all" aria-label\x3d"View all"\x3e' + Granite.I18n.get("global.alert.viewall") + "\x3c/a\x3e");
                    g = $("#metabarAlerts ul li").length;
                    var f = $("#metabarAlerts ul li").outerHeight() + 5;
                    if (1 < g) {
                        var m = 0
                            , y = function () {
                                y = setInterval(function () {
                                    m++;
                                    5 == m && (moveTop(f),
                                        setTimeout(function () {
                                            $("#metabarAlerts ul li:first-child").appendTo("#alerts")
                                        }, 10),
                                        m = 0)
                                }, 1E3)
                            };
                        y()
                    }
                } else
                    $("#metabarAlerts").css({
                        padding: 0,
                        height: 0
                    }),
                        document.body.classList.add("no-alert-metabar");
                $("#metabarAlertPath").val();
                $(".exchange").find("#metabarAlerts").find("a#matabarCookie").on("click", function (v) {
                    closeAlertBarConsent();
                    $("html").hasClass("inner-homepage") || ($("body").hasClass("inner-page") ? $(".desktopLJPC .ljpcPopup").css("top", "80px") : $(".desktopLJPC .ljpcPopup").css("top", "67px"))
                })
            }
        })
    } catch (g) { }
});
function closeAlertBarConsent() {
    $("#metabarAlerts").closest("div.exchange").hide();
    addRemoveSpaceHeroImage()
}
function addRemoveSpaceHeroImage() {
    var a = 0;
    $(".home").find(".hero-image-new").length && 768 > $(window).width() && ("none" != $("#openApp").css("display") && (a += parseInt($("#openApp").height())),
        "none" != $("#exchange").css("display") && (a += parseInt($("#exchange").height())),
        $(".home #main").find(".main-holder-sm").css("margin-top", a));
    768 < $(window).width() && $(".header").find("#navbarSupportedContent").hasClass("headheight") && $(".header").find("#navbarSupportedContent").removeClass("headheight")
}
function moveTop(a) {
    function b(e) {
        void 0 === c && (c = e);
        e -= c;
        d.style.transform = "translateY(-" + Math.min(.1 * e, 30) + "px)";
        2E3 > e && window.requestAnimationFrame(b)
    }
    var d = document.getElementById("alerts"), c;
    window.requestAnimationFrame(b);
    $(document).on("click keydown", ".btn-back-to-top", function (e) {
        768 >= $(window).width() && ($(".btn-back-to-top+.tooltip").show(),
            setTimeout(function () {
                1 == $(".btn-back-to-top+.tooltip").length && $(".btn-back-to-top+.tooltip").hide()
            }, 500))
    });
    $(document).on("click keydown", ".btn-back-to-top", function (e) {
        768 < $(window).width() && !$("#setTabIndex").val() && ($("a.skip").blur(),
            $("a.skip").hide())
    })
}
$(window).on("load", function () {
    if ("undefined" != typeof jpcFlowResponce && void 0 != jpcFlowResponce) {
        var a = jpcFlowResponce.isPcMember
            , b = void 0 != jpcFlowResponce.recommendtoLogin ? jpcFlowResponce.recommendtoLogin : !0
            , d = void 0 != jpcFlowResponce.recommendtoJoinnow ? jpcFlowResponce.recommendtoJoinnow : !0
            , c = void 0 != getFFPCookieValue("QRTOKEN") && null != getFFPCookieValue("QRTOKEN")
            , e = $("#enable-ljp-modal").data("enable-login")
            , g = $("#enable-ljp-modal").data("enable-joinnow")
            , h = void 0 != $("#enable-ljp-modal").data("disable-jpcpopup") ? $("#enable-ljp-modal").data("disable-jpcpopup") : !0
            , k = void 0 != $("#page-path").val() ? $("#page-path").val().includes("/tradepartners/") : !1;
        if (e && a && b && !c) {
            var l = $("#current-page-name").val();
            showLoginModel("#LJPC-popupDesktop", "#LJPC-popupMobile", "PC_LOGIN_MODEL");
            $(".ljpcPopup .loginPC-btn1").click(function () {
                sendBoxeverLoginModelEvent("INTERACTION_CLICKED", "PC_LOGIN_MODEL");
                buttonClickAction($(this).attr("href"), "login-signup", l + "-ljpmodal")
            });
            $(".ljpcPopup .loginPC-btn").click(function () {
                sendBoxeverLoginModelEvent("INTERACTION_CLICKED", "PC_LOGIN_MODEL");
                buttonClickAction($(this).attr("href"), "login-signup", l + "-ljpmodal")
            })
        } else
            h && g && !a && !c && d ? (showLoginModel("#JJPC-popupDesktop", "#JJPC-popupMobile", "PC_JOIN_MODEL"),
                $("#JJPC-popupDesktop").is(":not(hide)") && $("#JJPC-popupDesktop").is(":not(d-none)") && "function" == typeof componentInfoOnPageLoad && componentInfoOnPageLoad("highlight-join"),
                $(".ljpcPopup .loginPC-btn1").click(function () {
                    sendBoxeverLoginModelEvent("INTERACTION_CLICKED", "PC_JOIN_MODEL")
                }),
                $(".ljpcPopup .loginPC-btn").click(function () {
                    sendBoxeverLoginModelEvent("INTERACTION_CLICKED", "PC_JOIN_MODEL")
                })) : e && k && !c && showLoginModel("#LJPC-popupDesktop", "#LJPC-popupMobile", "PC_LOGIN_MODEL")
    }
    a = $("#popover-embedded-login-page-path").val();
    var f = "";
    "" != a && void 0 != a && (f = a.replace(".html", ".mobile.html"));
    $(document).on("click", "#login-popover-embedded,#login-popover-embedded-mobile", function (m) {
        window.open(f, "", "width\x3d500,height\x3d600,top\x3d160,left\x3d350")
    })
});
function showLoginModel(a, b, d) {
    $(b + ", " + a).removeClass("d-none");
    $(b + ", " + a).removeClass("hide");
    sendBoxeverLoginModelEvent("INTERACTION_VIEWED", d);
    $(document).on("click keydown", a + " .jpcCloseIcon", function (c) {
        $(a).addClass("closeLJPC");
        sendBoxeverLoginModelEvent("INTERACTION_CLOSED", d)
    });
    $(document).on("click keydown", b + " .ljpcCloseIcon", function (c) {
        $(b).addClass("closeLJPC");
        $("body").removeClass("fixed-top");
        sendBoxeverLoginModelEvent("INTERACTION_CLOSED", d)
    });
    $("#navbarSupportedContent .nav-link").click(function () {
        var c = $("#navbarSupportedContent").find(".mega-dropdown").hasClass("show") ? "31" : "32";
        $(".inner-page .ljpcPopup-container").css("z-index", c)
    });
    $("body, .mega-dropdown .dismissDropdown").click(function () {
        $(".inner-page .ljpcPopup-container").css("z-index", "32")
    });
    $(document).mouseup(function (c) {
        if (!$("#JJPC-popupMobile").hasClass("closeLJPC")) {
            var e = $(b + " .ljpcPopup");
            $(b + " .ljpcCloseIcon").is(c.target) || e.is(c.target) || 0 != e.has(c.target).length || 0 < $(c.target).closest(".cookie-section").length || 0 < $(c.target).closest(".modal").length || ($(b).addClass("closeLJPC"),
                $("body").removeClass("fixed-top"))
        }
    });
    $(".jpcCloseIcon").click(function () {
        $(this).parents(".ljpcPopup-container").addClass("closeLJPC")
    })
}
function sendBoxeverLoginModelEvent(a, b) {
    try {
        var d = (void 0 != $(document).find("#langpagename").val() ? $(document).find("#langpagename").val() : "").toLocaleUpperCase();
        var c = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || -1 != navigator.userAgent.indexOf("Mobile") ? "MOBILE_WEB" : "WEB";
        if ("undefined" != typeof Boxever && void 0 != Boxever.client_key) {
            var e = {
                channel: c,
                page: bxpageName,
                language: d,
                pos: "qatarairways.com",
                browser_id: Boxever.getID(),
                type: a,
                interactionName: b
            };
            Boxever.eventCreate(e, function (g) { }, "json")
        }
    } catch (g) {
        console.log("Error occured at Cartrecovery widget " + a)
    }
}
function createJwtToken(a, b, d, c, e) {
    var g = this, h, k, l, f, m, y, v, r, w, u, q, p, x, t, E, F, G, H, I, A, B, J, K, L, C, M, z, D, N, O, P, Q, R;
    return $jscomp.asyncExecutePromiseGeneratorProgram(function (n) {
        switch (n.nextAddress) {
            case 1:
                return h = {
                    alg: "HS256",
                    typ: "JWT"
                },
                    k = Math.floor(Date.now() / 1E3),
                    l = Math.floor((Date.now() + 6E4 * c) / 1E3),
                    f = {
                        iss: e,
                        iat: k,
                        exp: l,
                        data: d
                    },
                    m = JSON.stringify(h),
                    y = JSON.stringify(f),
                    v = g.toBase64Url(g.toArray(m)),
                    r = g.toBase64Url(g.toArray(y)),
                    w = v + "." + r,
                    u = g.toArray(w),
                    q = g.fromBase64(b),
                    n.yield(crypto.subtle.importKey("raw", q, {
                        name: "HMAC",
                        hash: "SHA-256"
                    }, !0, ["sign"]), 2);
            case 2:
                return p = n.yieldResult,
                    n.yield(crypto.subtle.sign({
                        name: "HMAC",
                        hash: "SHA-256"
                    }, p, u), 3);
            case 3:
                return x = n.yieldResult,
                    t = g.toBase64Url(new Uint8Array(x)),
                    E = w + "." + t,
                    F = g.fromBase64(a),
                    n.yield(crypto.subtle.importKey("spki", F, {
                        name: "RSA-OAEP",
                        hash: "SHA-256"
                    }, !0, ["encrypt"]), 4);
            case 4:
                return G = n.yieldResult,
                    H = {
                        alg: "RSA-OAEP-256",
                        enc: "A256GCM",
                        cty: "JWT"
                    },
                    I = JSON.stringify(H),
                    A = g.toBase64Url(g.toArray(I)),
                    n.yield(crypto.subtle.generateKey({
                        name: "AES-GCM",
                        length: 256
                    }, !0, ["encrypt", "decrypt"]), 5);
            case 5:
                return B = n.yieldResult,
                    n.yield(crypto.subtle.exportKey("raw", B), 6);
            case 6:
                return J = n.yieldResult,
                    n.yield(crypto.subtle.encrypt({
                        name: "RSA-OAEP"
                    }, G, J), 7);
            case 7:
                return K = n.yieldResult,
                    L = g.toBase64Url(K),
                    C = window.crypto.getRandomValues(new Uint8Array(12)),
                    M = g.toBase64Url(C),
                    n.yield(window.crypto.subtle.encrypt({
                        name: "AES-GCM",
                        iv: C,
                        tagLength: 128,
                        additionalData: g.toArray(A)
                    }, B, g.toArray(E)), 8);
            case 8:
                return z = n.yieldResult,
                    D = $jscomp.makeIterator([z.slice(0, z.byteLength - 16), z.slice(z.byteLength - 16)]),
                    N = D.next().value,
                    O = D.next().value,
                    P = g.toBase64Url(N),
                    Q = g.toBase64Url(O),
                    R = A + "." + L + "." + M + "." + P + "." + Q,
                    n.return(R)
        }
    })
}
function toBase64Url(a) {
    return this.toBase64(a).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
}
function toArray(a) {
    return (new TextEncoder).encode(a)
}
function toBase64(a) {
    return btoa(String.fromCharCode.apply(String, $jscomp.arrayFromIterable(new Uint8Array(a))))
}
function fromBase64(a) {
    return Uint8Array.from(atob(a), function (b) {
        return b.charCodeAt(0)
    })
}
$(function () {
    var a = $(".sidebar-toggle")
        , b = $(".sidebar-container")
        , d = $(".sidebar-toggle").find("span").text().trim().toLowerCase()
        , c = $("#current-page-path").val();
    a.on("click keyup", function (e) {
        if ("click" === e.type || "keyup" === e.type && 13 === e.keyCode)
            $(this).toggleClass("active"),
                $(this).hasClass("active") ? (b.addClass("ease").addClass("active"),
                    $("body").append('\x3cdiv class\x3d"modal-bg"\x3e\x3c/div\x3e').addClass("modal-sidebar"),
                    $(this).find(".icon-text").attr("aria-label", "collapse"),
                    null != getFFPCookieValue("QRTOKEN") && 0 < $(".sidebar-appdownload.variant1").length ? "true" == $("#sc_variable").val() && s.tl("true", "o", "dashboard_get_the_app-open") : "true" == $("#sc_variable").val() && s.tl("true", "o", "get_the_app-open"),
                    buttonClickAction(c, d, "homepage-appdownlaodbanner"),
                    "click" != e.type && $(".sidebar-content").attr("tabindex", "0").focus()) : (b.removeClass("ease"),
                        setTimeout(function () {
                            b.removeClass("active")
                        }, 800),
                        $("body").find(".modal-bg").fadeOut(800, function () {
                            $("body").removeClass("modal-sidebar").find(".modal-bg").remove();
                            null != getFFPCookieValue("QRTOKEN") && 0 < $(".sidebar-appdownload.variant1").length ? "true" == $("#sc_variable").val() && s.tl("true", "o", "dashboard_get_the_app-close") : "true" == $("#sc_variable").val() && s.tl("true", "o", "get_the_app-close")
                        }),
                        $(this).find(".icon-text").attr("aria-label", "expand"),
                        $(".sidebar-content").attr("tabindex", ""))
    });
    $(document).on("keydown", ".sidebar-content", function (e) {
        "Tab" == e.key && 1 == e.shiftKey && "collapse" == $(this).parent().find(".icon-text").attr("aria-label") && setTimeout(function () {
            $(".sidebar-toggle").find(".icon-text").attr("tabindex", "0").focus()
        }, 50)
    });
    $(document).on("keydown", ".sidebar-toggle", function (e) {
        9 === e.keyCode && 0 == e.shiftKey && "collapse" == $(this).find(".icon-text").attr("aria-label") && $(".sidebar-content").attr("tabindex", "0").focus()
    });
    $(document).on("click", function (e) {
        !$(e.target).closest(".sidebar-container").length && $(".sidebar-container").hasClass("active") && (a.removeClass("active"),
            $("body").find(".modal-bg").fadeOut(800, function () {
                $("body").removeClass("modal-sidebar").find(".modal-bg").remove();
                a.find(".icon-text").attr("aria-label", "expand")
            }),
            b.removeClass("ease"),
            setTimeout(function () {
                b.removeClass("active")
            }, 800),
            $(".sidebar-content").attr("tabindex", ""),
            null != getFFPCookieValue("QRTOKEN") && 0 < $(".sidebar-appdownload.variant1").length && "true" == $("#sc_variable").val() && s.tl("true", "o", "dashboard_get_the_app-close"))
    });
    767 < $(window).width() && (null != getFFPCookieValue("QRTOKEN") || 0 < $(".register-form").length) && ($(".variant2 .topbar-toggle").on("click keyup", function (e) {
        if ("click" === e.type || "keyup" === e.type && 13 === e.keyCode)
            $(this).addClass("active"),
                $(".topbar-content").addClass("ease").addClass("active"),
                $("body").append('\x3cdiv class\x3d"modal-bg"\x3e\x3c/div\x3e').addClass("modal-sidebar"),
                $(this).find(".icon-text").attr("aria-label", "collapse"),
                "true" == $("#sc_variable").val() && s.tl("true", "o", "dashboard_get_the_app-open"),
                "click" != e.type && $(".topbar-content").attr("tabindex", "0").focus()
    }),
        $(".variant3 .topbar-toggle").on("click keyup", function (e) {
            if ("click" === e.type || "keyup" === e.type && 13 === e.keyCode)
                $(this).addClass("active"),
                    $(".topbar-content").addClass("active"),
                    $(".topbar-content").slideDown("slow"),
                    $(this).slideUp("slow"),
                    $(this).find(".icon-text").attr("aria-label", "collapse"),
                    "click" != e.type && $(".topbar-content").attr("tabindex", "0").focus()
        }),
        $(".close-appdownload").on("click keyup", function (e) {
            $(".topbar-toggle").removeClass("active");
            $(".topbar-content").removeClass("ease");
            setTimeout(function () {
                $(".topbar-content").removeClass("active")
            }, 800);
            $("body").find(".modal-bg").fadeOut(800, function () {
                $("body").removeClass("modal-sidebar").find(".modal-bg").remove();
                "true" == $("#sc_variable").val() && s.tl("true", "o", "dashboard_get_the_app-close")
            });
            $(this).find(".icon-text").attr("aria-label", "expand");
            $(".topbar-content").attr("tabindex", "")
        }),
        $(".closeapp-arrow").on("click keyup", function (e) {
            $(".topbar-content").slideUp("slow");
            setTimeout(function () {
                $(".topbar-content").removeClass("active");
                $(".topbar-toggle").removeClass("active")
            }, 800);
            $(".variant3 .topbar-toggle").slideDown("slow");
            $(this).find(".icon-text").attr("aria-label", "expand");
            $(".topbar-content").attr("tabindex", "")
        }),
        $(window).one("scroll", function () {
            $(".sidebar-appdownload.variant1").hasClass("hide") || $(".sidebar-appdownload.variant1 .sidebar-toggle").trigger("click")
        }))
});
var userIdleTime = 0, popupIdleInterval, bxsegmentId;
$(window).on("load", function () {
    popupIdleInterval = setInterval(function () {
        userIdleTime += 1;
        if (15 == userIdleTime) {
            var a = new URLSearchParams(window.location.search)
                , b = $("body").css("overflow");
            if ("visible" == b || "hidden auto" == b || void 0 == b)
                $("#join-pc-popup").data("joinpc-enabled") && "undefined" != typeof jpcFlowResponce && "true" != a.get("automationStart") && showJoinpcPopup(jpcFlowResponce),
                    clearTimeout(popupIdleInterval)
        }
    }, 1E3);
    $("html").bind("mousemove click mouseup mousedown keydown keypress keyup change mouseenter scroll resize dblclick touchmove touchstart", function () {
        userIdleTime = 0
    })
});
$(".close-privilege-banner").click(function () {
    sendJpcBoxeverEvent("INTERACTION_CLOSED", bxsegmentId);
    "true" == $("#sc_variable").val() && s.tl("true", "o", "Cancel PC Pop-up")
});
$(".btn-join-pc").click(function () {
    sendJpcBoxeverEvent("INTERACTION_CLICKED", bxsegmentId)
});
function sendJpcBoxeverEvent(a, b) {
    try {
        var d = (void 0 != $(document).find("#langpagename").val() ? $(document).find("#langpagename").val() : "").toLocaleUpperCase()
            , c = {
                channel: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || -1 != navigator.userAgent.indexOf("Mobile") ? "MOBILE_WEB" : "WEB",
                page: bxpageName,
                language: d,
                pos: "qatarairways.com",
                browser_id: Boxever.getID(),
                type: a,
                interactionID: b,
                interactionName: "JPC_POPUP"
            };
        Boxever.eventCreate(c, function (e) { }, "json")
    } catch (e) { }
}
function showJoinpcPopup(a) {
    if (void 0 != a) {
        var b = void 0 != a.memberSegment ? a.memberSegment : ""
            , d = void 0 != a.recommendtoUpgrade ? a.recommendtoUpgrade : !1
            , c = void 0 != a.showPopup ? a.showPopup : !0;
        a = $("#joinpc-link").val();
        var e = Granite.I18n.get("joinpc.title")
            , g = Granite.I18n.get("joinpc.ctatext");
        if (d && c && "" != b)
            if (d = getFFPCookieValue("QRTOKEN"),
                d = void 0 != d && null != d ? getUserBasicInfoField("programCode") : "",
                c = "PORTAL" == d ? !0 : !1,
                "" != d) {
                if (c) {
                    var h = Granite.I18n.get("joinpc.portalmember.msg");
                    var k = 768 >= $(window).width() ? $("#join-pc-popup").data("joinpc-portalimgmobile") : $("#join-pc-popup").data("joinpc-portalimg");
                    var l = void 0 != $("#join-pc-popup").data("joinpc-portaliid") ? $("#join-pc-popup").data("joinpc-portaliid") : "";
                    var f = void 0 != $("#join-pc-popup").data("joinpc-portalpromo") ? $("#join-pc-popup").data("joinpc-portalpromo") : "";
                    a = $("#joinpc-link").val() + "?portalUpgrade\x3dtrue\x26isAEMFlow\x3dtrue\x26P1\x3d" + f + "\x26iid\x3d" + l;
                    e = Granite.I18n.get("joinpc.upgrade.title");
                    k = void 0 != k ? k : "";
                    bxsegmentId = "JPC_BM";
                    b = 768 >= $(window).width() ? '\x3cimg class\x3d"d-md-block" src\x3d"' + k + '" /\x3e' : '\x3cimg class\x3d"d-block" src\x3d"' + k + '" /\x3e';
                    $("#join-pc-modal").find(".banner-image").append(b);
                    $("#join-pc-modal").find(".modal-title").text(e);
                    $("#join-pc-modal").find(".inner-banner p").text(h);
                    $("#join-pc-modal").find(".btn-join-pc").attr("href", a);
                    $("#join-pc-modal").find(".btn-join-pc").text(g);
                    $("#join-pc-modal").modal();
                    sendJpcBoxeverEvent("INTERACTION_VIEWED", bxsegmentId)
                }
            } else
                "Generic" == b && (h = Granite.I18n.get("joinpc.generictraveler.msg"),
                    k = 768 >= $(window).width() ? $("#join-pc-popup").data("joinpc-genericmob") : $("#join-pc-popup").data("joinpc-generic"),
                    l = $("#join-pc-popup").data("joinpc-genericiid"),
                    f = $("#join-pc-popup").data("joinpc-genericpromo"),
                    bxsegmentId = "JPC_GT"),
                    "Family Travellers" == b && (h = Granite.I18n.get("joinpc.familytraveler.msg"),
                        k = 768 >= $(window).width() ? $("#join-pc-popup").data("joinpc-familyimgmob") : $("#join-pc-popup").data("joinpc-familyimg"),
                        l = $("#join-pc-popup").data("joinpc-familyiid"),
                        f = $("#join-pc-popup").data("joinpc-familypromo"),
                        bxsegmentId = "JPC_FT"),
                    "Business Travellers" == b && (h = Granite.I18n.get("joinpc.businesstraveler.msg"),
                        k = 768 >= $(window).width() ? $("#join-pc-popup").data("joinpc-businessimgmob") : $("#join-pc-popup").data("joinpc-businessimg"),
                        l = $("#join-pc-popup").data("joinpc-businessiid"),
                        f = $("#join-pc-popup").data("joinpc-businesspromo"),
                        bxsegmentId = "JPC_BT"),
                    "New Travellers" == b && (h = Granite.I18n.get("joinpc.newtraveler.msg"),
                        k = 768 >= $(window).width() ? $("#join-pc-popup").data("joinpc-newtryoutimgmob") : $("#join-pc-popup").data("joinpc-newtryoutimg"),
                        l = $("#join-pc-popup").data("joinpc-newiid"),
                        f = $("#join-pc-popup").data("joinpc-newpromo"),
                        bxsegmentId = "JPC_NT"),
                    "Student Travellers" == b && (h = Granite.I18n.get("joinpc.studenttraveler.msg"),
                        k = 768 >= $(window).width() ? $("#join-pc-popup").data("joinpc-studentimgmob") : $("#join-pc-popup").data("joinpc-studentimg"),
                        a = $("#joinpc-student-link").val(),
                        e = Granite.I18n.get("joinpc.studentclub"),
                        l = $("#join-pc-popup").data("joinpc-studentiid"),
                        f = $("#join-pc-popup").data("joinpc-studentpromo"),
                        bxsegmentId = "JPC_ST"),
                    "Premium Travellers" == b && (h = Granite.I18n.get("joinpc.businesstraveler.msg"),
                        k = 768 >= $(window).width() ? $("#join-pc-popup").data("joinpc-businessimgmob") : $("#join-pc-popup").data("joinpc-businessimg"),
                        l = $("#join-pc-popup").data("joinpc-businessiid"),
                        f = $("#join-pc-popup").data("joinpc-businesspromo"),
                        bxsegmentId = "JPC_PT"),
                    k = void 0 != k ? k : "",
                    a = a + "?promocode\x3d" + (void 0 != f ? f : "") + "\x26iid\x3d" + (void 0 != l ? l : ""),
                    b = 768 >= $(window).width() ? '\x3cimg class\x3d"d-md-block" src\x3d"' + k + '" /\x3e' : '\x3cimg class\x3d"d-block" src\x3d"' + k + '" /\x3e',
                    $("#join-pc-modal").find(".banner-image").append(b),
                    $("#join-pc-modal").find(".modal-title").text(e),
                    $("#join-pc-modal").find(".inner-banner p").text(h),
                    $("#join-pc-modal").find(".btn-join-pc").attr("href", a),
                    $("#join-pc-modal").find(".btn-join-pc").text(g),
                    $("#join-pc-modal").modal(),
                    sendJpcBoxeverEvent("INTERACTION_VIEWED", bxsegmentId)
    }
}
var bxverTrendingDestins, varaitionValue, bxverclickEvnts = new Map, bxverViewEvnts = [], bxverInteraction = "HPNAV_DR", bxTrackingiid;
$(document).ready(function () {
    $(".mobile_Explore").click(function () {
        if (void 0 == varaitionValue && "undefined" != typeof headerAncilDestinResponce && void 0 != headerAncilDestinResponce && void 0 != headerAncilDestinResponce.personalizedHeaderResults) {
            var a = headerAncilDestinResponce.personalizedHeaderResults;
            bxverTrendingDestins = void 0 != a.recommendedDestinations ? a.recommendedDestinations : "";
            var b = $("#mlImgRepo").data("bx-trackingiid");
            if (void 0 != b) {
                if ("" == bxverTrendingDestins || 0 == bxverTrendingDestins.length)
                    bxverTrendingDestins = a.trendingDestinations,
                        bxverInteraction = "HPNAV_TDR",
                        b = $("#mlImgRepo").data("trending-iid");
                bxTrackingiid = b;
                var d = [];
                "" != bxverTrendingDestins && void 0 != bxverTrendingDestins && 0 < bxverTrendingDestins.length && (bxverTrendingDestins.forEach(function (c, e) {
                    bxverViewEvnts.push(bxverInteraction + "_" + c + "_POS" + e + "_VIEWED");
                    bxverclickEvnts.set(c, bxverInteraction + "_" + c + "_POS" + e + "_CLICKED");
                    d.push(c)
                }),
                    a = JSON.stringify(d),
                    getBoxeverDestinData(a))
            }
        }
    })
});
function getBoxeverDestinData(a) {
    var b = $("#mlImgRepo").data("bx-currentpage");
    b = b.replace(".html", "");
    b = b.replace(".mobile", "");
    $.ajax({
        type: "GET",
        url: b + ".navBarDestinations." + a + ".json",
        contentType: "application/json; charset\x3dutf-8",
        dataType: "json",
        success: function (d) {
            varaitionValue = d;
            void 0 == varaitionValue && "" == varaitionValue || populateBoxeverDestins(varaitionValue)
        }
    })
}
function populateBoxeverDestins(a) {
    var b = $("#mlImgRepo").data("bx-authorediatas")
        , d = $(".personalised-header").children();
    trendingDestLen = $("#mlImgRepo").data("bx-linkrequire") ? b.length - 1 : b.length;
    Object.keys(a).length < bxverTrendingDestins.length && bxverTrendingDestins.forEach(function (c, e) {
        void 0 == a[c] && bxverTrendingDestins.splice(e, 1)
    });
    bxverTrendingDestins.forEach(function (c, e) {
        if (4 < e)
            return !1;
        if (0 <= b.indexOf(c) && 6 > bxverTrendingDestins.length && void 0 != a[c]) {
            var g = d.eq(b.indexOf(c) + 1)
                , h = void 0 != bxTrackingiid && "" != bxTrackingiid ? a[c].destinationDetailPageUrl + "?iid\x3d" + bxTrackingiid : a[c].destinationDetailPageUrl;
            $(".personalised-header").find("li").eq(e).after('\x3cli\x3e\x3ca href\x3d"' + h + '" target\x3d"_self"' + (void 0 != bxverclickEvnts.get(a[c].iataCode) ? "onclick\x3d\"return sendBXTrackingEventNew('" + bxverclickEvnts.get(a[c].iataCode) + "');\"" : "") + ' tabindex\x3d"0" aria-selected\x3d"false"\x3e' + a[c].destinationTitle + '\x3cimg src\x3d"' + a[c].mainVerticalImage + '" alt\x3d""\x3e\x3c/a\x3e\x3c/li\x3e');
            g.remove()
        } else
            void 0 != a[c] && (g = $(".personalised-header").find("li").eq(trendingDestLen),
                h = void 0 != bxTrackingiid && "" != bxTrackingiid ? a[c].destinationDetailPageUrl + "?iid\x3d" + bxTrackingiid : a[c].destinationDetailPageUrl,
                g.remove(),
                $(".personalised-header").find("li").eq(e).after('\x3cli\x3e\x3ca href\x3d"' + h + '" target\x3d"_self"' + (void 0 != bxverclickEvnts.get(a[c].iataCode) ? "onclick\x3d\"return sendBXTrackingEventNew('" + bxverclickEvnts.get(a[c].iataCode) + "');\"" : "") + ' tabindex\x3d"0" aria-selected\x3d"false"\x3e' + a[c].destinationTitle + '\x3cimg src\x3d"' + a[c].mainVerticalImage + '" alt\x3d""\x3e\x3c/a\x3e\x3c/li\x3e'))
    });
    $(".personalised-header").find("li").removeClass("active");
    $(".personalised-header li:eq(1)").addClass("active");
    bxverViewEvnts.forEach(function (c) {
        sendBXTrackingEventNew(c)
    })
}
var ancillaries, viewdAncilary = !1;
$(document).ready(function () {
    $(".mobile_Experience").click(function () {
        if (void 0 == ancillaries && "undefined" != typeof headerAncilDestinResponce && void 0 != headerAncilDestinResponce && void 0 != headerAncilDestinResponce.personalizedHeaderResults) {
            var a = headerAncilDestinResponce.personalizedHeaderResults;
            ancillaries = "" != a.recommendedAcillaries ? a.recommendedAcillaries : "";
            if ("" != ancillaries && (a = $("#bxvranci").data("bx-ancilary")[ancillaries],
                viewdAncilary = !0,
                void 0 != a)) {
                var b = void 0 != a.boxeverTrackingCode && "" != a.boxeverTrackingCode ? a.ancilaryInternalUri + "?iid\x3d" + a.boxeverTrackingCode : a.ancilaryInternalUri;
                b = "internal" == a.ancilarylinkType ? b : a.ancilaryExternalUri;
                $(".personalised-ancilar img").attr("src", a.boxeverAncilaryImg);
                $(".personalised-ancilar img").attr("data-src", a.boxeverAncilaryImg);
                $(".personalised-ancilar img").attr("alt", a.ancilaryTitle);
                var d = '\x3ch5 class\x3d"card-title" tabindex\x3d"0"\x3e' + a.ancilaryTitle + "\x3c/h5\x3e";
                d = d + "\x3ca href\x3d" + b + ' target\x3d"_blank" onclick\x3d"return sendBXTrackingEventNew(\'HPNAV_AR_' + (ancillaries + "_EXPTAB_CLICKED');\"\x3e") + a.ancilarylinkText + '\x3cspan class\x3d"icon-arrow-right3"\x3e\x3c/span\x3e\x3c/a\x3e';
                $(".personalised-ancilar").find(".card-body").html(d);
                viewdAncilary && sendBXTrackingEventNew("HPNAV_AR_" + ancillaries + "_EXPTAB_VIEWED")
            }
        }
    })
});
$(document).ready(function () {
    void 0 != getCookieValue("cookie_visited") && getCookieValue("cookie_visited");
    document.getElementById("isEditMode");
    cjCookieTracking();
    -1 != document.URL.indexOf("?") && "function" === typeof getUrlTrackingParams && getUrlTrackingParams()
});
$(window).on("load", function () {
    seoReferrer()
});
function seoReferrer() {
    if (void 0 != getCookieValue("ref")) {
        var a = getCookieValue("ref");
        -1 == a.indexOf("www.qatarairways.com") && "undefined" != typeof s && (s.referrer = a,
            document.cookie = "ref\x3d;Domain\x3d.qatarairways.com;Expires\x3dThu, 01 Jan 1970 00:00:00 UTC;Path\x3d/;")
    }
}
function cjCookieTracking() {
    var a = void 0 == getCookieValue("accepted_marketing") || "no" == getCookieValue("accepted_marketing") || "No" == getCookieValue("accepted_marketing") ? "No" : "Yes";
    if ("Yes" == a && null != a) {
        a = "";
        var b = document.URL.indexOf("?");
        if (-1 != b) {
            b = document.URL.substring(b + 1, document.URL.length);
            for (var d = b.split("\x26"), c = 0; c < d.length; c++) {
                var e = d[c].split("\x3d");
                b = e.shift();
                b = b.toLowerCase();
                "cjevent" == b && (a = e.pop())
            }
            "" != a && trackingCJcookie("cje", a, 30)
        }
    }
}
function trackingCJcookie(a, b, d) {
    var c = new Date;
    c.setTime(c.getTime() + 864E5 * d);
    b = escape(b) + (null == d ? "" : "; expires\x3d" + c.toUTCString());
    d = document.domain;
    d = -1 != d.indexOf(".") ? d.slice(d.indexOf(".")) : d;
    document.cookie = a + "\x3d" + b + ";domain\x3d" + d + ";secure;path\x3d/"
}
function getCookieValueAB(a) {
    var b = document.cookie
        , d = b.indexOf(" " + a + "\x3d");
    -1 == d && (d = b.indexOf(a + "\x3d"));
    -1 == d ? b = null : (d = b.indexOf("\x3d", d) + 1,
        a = b.indexOf(";", d),
        -1 == a && (a = b.length),
        b = unescape(b.substring(d, a)));
    return b
}
function setCookiewithPath(a, b, d) {
    var c = new Date;
    c.setTime(c.getTime() + 864E5 * d);
    d = "expires\x3d" + c.toGMTString();
    c = document.domain;
    c = -1 != c.indexOf(".") ? c.slice(c.indexOf(".")) : c;
    document.cookie = a + "\x3d" + b + ";" + d + ";domain\x3d" + c + ";path\x3d/"
}
var dropDownOPened, headerTop;
$(function () {
    function a() {
        h.forEach(function (f) {
            f.classList.remove("on")
        });
        k.forEach(function (f) {
            f.setAttribute("class", "")
        })
    }
    if (810 <= window.screen.width && 1200 >= window.screen.width && -1 < window.location.href.indexOf("Privilege-Club")) {
        var b = $("#loginMenuHeader").html();
        $("#loginMenuHeader").html(b.replace("Login | \x3cp\x3eSign up\x3c/p\x3e", ""))
    }
    810 <= window.screen.width && 1024 >= window.screen.width && $("body").hasClass("inner-page") && document.getElementById("myViewport").setAttribute("content", "width\x3d1024");
    if (768 >= $(window).width())
        var d = document.querySelector(".chooseregionmobile .countysections")
            , c = null != document.querySelector("#myScrollspy li a.active") ? document.querySelector("#myScrollspy li a.active").getAttribute("href") : ""
            , e = document.querySelector(".chooseregionmobile .countysections " + c);
    else
        d = document.querySelector(".desktoplanguageSelector .chooseregionmobile .countysections"),
            c = null != document.querySelector("#myScrollspy li a.active") ? document.querySelector("#myScrollspy li a.active").getAttribute("href") : "",
            e = document.querySelector(".desktoplanguageSelector .chooseregionmobile .countysections " + c);
    768 < $(window).width() && ($("#header .nav-link").on("click", function (f) {
        if ($(this).next().attr("hidden")) {
            dropDownOPened = !1;
            f = $(this).attr("href");
            var m = $(this).attr("target");
            $(this).parent().removeClass("show");
            window.open(f, m)
        } else
            dropDownOPened = !0
    }),
        $(document).on("click", function (f) {
            $(".inner-page #header #navbarSupportedContent .mega-dropdown").hasClass("show") && $(".inner-page #header #navbarSupportedContent .dropdown-menu").hasClass("show") && ($(".inner-page #header").hasClass("scrolled") || $(".inner-page #header").addClass("scrolled"));
            headerTop = window.pageYOffset;
            dropDownOPened && 0 == headerTop && !$(f.target).closest("#header").length && $("#header").hasClass("scrolled") && ($(".inner-page #header #navbarSupportedContent .mega-dropdown").hasClass("show") && $(".inner-page #header #navbarSupportedContent .mega-dropdown").removeClass("show"),
                $(".inner-page #header #navbarSupportedContent .dropdown-menu").hasClass("show") && $(".inner-page #header #navbarSupportedContent .dropdown-menu").removeClass("show"),
                $("#header").hasClass("innerHeader") || $("#header").removeClass("scrolled"),
                dropDownOPened = !1)
        }));
    $("#header .nav-link").on("click", function (f) {
        $(this).parents().hasClass("loggedinprofile") && "block" == $("#exchange").css("display") ? $(".loggedinprofile").addClass("headheight") : $(".loggedinprofile").removeClass("headheight");
        $(this).parent().hasClass("helpLink") || $(this).parent().hasClass("loginprofile") || ($("#header").addClass("scrolled"),
            768 < $(window).width() ? $("#exchange").length && "block" == $("#exchange").css("display") ? $(this).closest("#navbarSupportedContent").addClass("headheight") : $(this).closest("#navbarSupportedContent").removeClass("headheight") : ($(this).closest("#navbarSupportedContent").removeClass("headheight"),
                $(this).hasClass("changeRegionMobile") && $("body").addClass("no-scroll")));
        $(this).hasClass("userImage") || ($(".profileflyout").removeClass("in show"),
            $(".userImage").attr("aria-expanded", !1));
        $(this).hasClass("changeRegionMobile") && setTimeout(function () {
            $("#myScrollspy li a").removeClass("active");
            $("#myScrollspy li a[href^\x3d'" + c + "']").addClass("active");
            "" != c && scrollToElm(d, e, 100)
        }, 50);
        $(this).hasClass("desktopLoginLink") && $(".desktopLJPC").addClass("closeLJPC")
    });
    $(".userImage").click(function () {
        var f = window.pageYOffset;
        "false" == $(this).attr("aria-expanded") ? ($(this).attr("aria-expanded", "true"),
            $(".profileflyout").addClass("show"),
            $("#header").addClass("scrolled")) : ($(this).attr("aria-expanded", "false"),
                $(".profileflyout").removeClass("show"),
                0 == f && ($("#header").hasClass("innerHeader") || $("#header").removeClass("scrolled")))
    });
    $(".loggedinprofile .dismissDropdown").click(function () {
        $(this).parents(".profileflyout").removeClass("in show");
        $(".userImage").attr("aria-expanded", !1)
    });
    $("#header").on("click", ".mega-dropdown .dropdown-menu", function (f) {
        f.target != $(this).find("a.go-back")[0] && "a" != f.target && f.stopPropagation()
    });
    $("#header .accordion-module-opener").on("click", function (f) {
        $("#header .accordion-module-opener").not(this).attr("aria-expanded", "false");
        $("#header .accordion-module-opener").not(this).next().removeClass("show in");
        "false" == $(this).attr("aria-expanded") ? ($(this).attr("aria-expanded", "true"),
            $(this).next().addClass("show in")) : ($(this).attr("aria-expanded", "false"),
                $(this).next().removeClass("show in"))
    });
    $(".desktoplanguageSelector .countysections").on("scroll", onScroll);
    $(".countysections").eq(0).on("scroll", onScroll);
    $("#header").on("click", ".chooseregionmobile", function (f) {
        "a" != f.target && f.stopPropagation()
    });
    $("#header .chooseregionmobile").on("click", '#myScrollspy .nav-pills a[href^\x3d"#"]', function (f) {
        f.stopPropagation();
        f.preventDefault();
        $("#myScrollspy li a").removeClass("active");
        $(this).addClass("active");
        f = $(this).attr("href");
        f = 768 >= $(window).width() ? document.querySelector(".chooseregionmobile .countysections " + f) : document.querySelector(".desktoplanguageSelector .chooseregionmobile .countysections " + f);
        scrollToElm(d, f, 100)
    });
    $(document).on("click keydown", '.desktoplanguageSelector #myScrollspy .nav-pills a[href^\x3d"#"]', function (f) {
        if ("Enter" === f.key) {
            var m = $(this).attr("href");
            setTimeout(function () {
                $(".desktoplanguageSelector .countysections " + m + " ul li:nth-of-type(1) a").attr("tabindex", "0");
                $(".desktoplanguageSelector .countysections " + m + " ul li:nth-of-type(1) a").focus()
            }, 200)
        }
    });
    var g;
    $(window).scroll(function (f) {
        g = !0
    });
    setInterval(function () {
        g && (hasScrolled(),
            g = !1)
    }, 250);
    b = document.querySelectorAll(".list-of-states li");
    var h = Array.prototype.slice.call(b);
    b = document.querySelectorAll("#states \x3e *");
    var k = Array.prototype.slice.call(b);
    h.forEach(function (f) {
        f.addEventListener("mouseenter", function () {
            addOnFromList(f)
        });
        f.addEventListener("mouseleave", function () {
            a()
        });
        f.addEventListener("touchstart", function () {
            a();
            addOnFromList(f)
        })
    });
    k.forEach(function (f) {
        f.addEventListener("mouseenter", function () {
            addOnFromState(f)
        });
        f.addEventListener("mouseleave", function () {
            a()
        });
        f.addEventListener("touchstart", function () {
            a();
            addOnFromState(f)
        })
    });
    $(".list-of-states li ").mouseenter(function () {
        $(this).attr("data-state");
        $("#states #" + $(this).attr("data-state")).hasClass("on") || $("#states #" + $(this).attr("data-state")).addClass("on");
        return $(this).toggleClass("mapPin").siblings().removeClass("mapPin")
    });
    var l = $(window);
    $("html");
    l.resize(function () {
        if (768 >= l.width())
            return $(".dropdown-menu", ".header").addClass("responsiveoverlay");
        $(".dropdown-menu", ".header").removeClass("responsiveoverlay")
    }).trigger("resize");
    $(".navbar-toggler").on("click", function () {
        768 >= $(window).width() && ($(".header").toggleClass("mobileheadershade"),
            $("body").toggleClass("fixed-top"),
            $(".header").hasClass("mobileheadershade") ? $(".loginprofile").hide() : ($("#header").hasClass("innerHeader") || $(".header").removeClass("scrolled"),
                $(".loginprofile").show()),
            setTimeout(function () {
                $(".header").hasClass("mobileheadershade") && $("#exchange").length && !$("#exchange").hasClass("hide") ? $("#exchange").addClass("hide") : $("#exchange").removeClass("hide");
                $(".header").hasClass("mobileheadershade") && $("#openApp").length && !$("#openApp").hasClass("hide") ? $("#openApp").addClass("hide") : $("#openApp").removeClass("hide")
            }, 50))
    });
    $(".changeRegionMobile").on("click", function () {
        if (768 >= $(window).width()) {
            var f = this;
            setTimeout(function () {
                showhidealert(f)
            }, 50)
        }
    });
    768 >= $(window).width() && (b = $(".header-nav-container").contents(),
        $(".header-nav-container").replaceWith(b));
    $(document).click(function (f) {
        768 < $(window).width() && !(0 < $(f.target).closest(".profileflyout").length || 0 < $(f.target).closest(".login-block-avatar").length || 0 < $(f.target).closest(".profileflyout .close.dismissDropdown").length) && $(".profileflyout").hasClass("show") && ($(".login-block-avatar").attr("aria-expanded", "false"),
            closeDropdown($(".profileflyout .close.dismissDropdown")))
    });
    -1 < window.location.href.indexOf("/Privilege-Club") && ($(".inner-homepage #header .header-logo-sme").css("display", "none"),
        $(".inner-homepage #header .privClubLogoSH").attr("style", "display : flex !important"),
        $(".inner-homepage #header .brand-qartarAirLogo").css("display", "inline-block"),
        $(".inner-homepage #header .brand-oneworld").css("display", "inline-block"));
    0 < $(".chooseregionmobile .countysections").length && headerLanguageLinks()
});
function headerLanguageLinks() {
    var a = ""
        , b = window.location.pathname
        , d = window.location.href
        , c = window.location.origin
        , e = "/" + b.split("/")[1];
    $(".chooseregionmobile .countysections li a").each(function () {
        var g = $(this).attr("data-code")
            , h = $(this).attr("data-path");
        void 0 == d || void 0 == g && void 0 == h || (-1 != e.indexOf("/content") ? a = e.concat(g) + "/" + b.replace(/(?:.*?\/){4}/, "") : -1 != d.indexOf("qatarairways.com") && (a = c.concat(h) + "/" + d.replace(/(?:.*?\/){4}/, "")),
            -1 != d.indexOf("?") && "" != a ? (a = a.split("?").shift(),
                $(this).attr("href", a)) : "" != a || void 0 != a ? $(this).attr("href", a) : $(this).attr("href", "/en/homepage.html"))
    })
}
function showhidealert(a) {
    768 >= $(window).width() && ($("#exchange").length && !$("#exchange").hasClass("hide") ? $("#exchange").addClass("hide") : $("#exchange").removeClass("hide"),
        $(a).next().hasClass("show") && $("#openApp").length && !$("#openApp").hasClass("hide") ? $("#openApp").addClass("hide") : $("#openApp").removeClass("hide"))
}
function closeDropdown(a) {
    headerTop = window.pageYOffset;
    dropDownOPened && 0 == headerTop && (dropDownOPened = !1);
    $(a).closest(".dropdown-menu").removeClass("show");
    $(a).closest(".mega-dropdown").removeClass("show");
    0 == headerTop && ($("#header").hasClass("innerHeader") || $("#header").removeClass("scrolled"));
    $("body").removeClass("no-scroll");
    if (!$(a).closest(".mobileSearchView").length && !$(a).closest(".profileflyout").length) {
        var b = $(a).closest(".chooseregionmobile").prev();
        setTimeout(function () {
            showhidealert(b)
        }, 50)
    }
}
function addOnFromList(a) {
    var b = a.getAttribute("data-state");
    console.log(b);
    b = document.querySelector("#" + b);
    a.classList.add("on");
    b.setAttribute("class", "on")
}
function addOnFromState(a) {
    var b = a.getAttribute("id");
    b = document.querySelector("[data-state\x3d'" + b + "']");
    a.setAttribute("class", "on");
    b.classList.add("on")
}
function onScroll(a) {
    if (768 >= $(window).width()) {
        a = $(".chooseregionmobile .countysections").scrollTop();
        var b = $(".chooseregionmobile #myScrollspy .nav-pills")
    } else
        a = $(".desktoplanguageSelector .countysections").scrollTop(),
            b = $(".desktoplanguageSelector #myScrollspy .nav-pills");
    b.find("a").removeClass("active");
    768 >= $(window).width() ? a <= $("#americas").outerHeight() ? b.find('a[href^\x3d"#americas"]').addClass("active") : a > $("#americas").outerHeight() && a <= $("#americas").outerHeight() + $("#europe").outerHeight() ? b.find('a[href^\x3d"#europe"]').addClass("active") : a > $("#americas").outerHeight() + $("#europe").outerHeight() && a <= $("#americas").outerHeight() + $("#europe").outerHeight() + $("#africa").outerHeight() ? b.find('a[href^\x3d"#africa"]').addClass("active") : a > $("#americas").outerHeight() + $("#europe").outerHeight() + $("#africa").outerHeight() && a <= $("#americas").outerHeight() + $("#europe").outerHeight() + $("#africa").outerHeight() + $("#gcc").outerHeight() ? b.find('a[href^\x3d"#gcc"]').addClass("active") : a > $("#americas").outerHeight() + $("#europe").outerHeight() + $("#africa").outerHeight() + $("#gcc").outerHeight() && b.find('a[href^\x3d"#asia"]').addClass("active") : $("body").hasClass("inner-page") ? 189 >= a ? b.find('a[href^\x3d"#americas"]').addClass("active") : 190 <= a && 865 >= a ? b.find('a[href^\x3d"#europe"]').addClass("active") : 866 <= a && 1320 >= a ? b.find('a[href^\x3d"#africa"]').addClass("active") : 1321 <= a && 1530 >= a ? b.find('a[href^\x3d"#gcc"]').addClass("active") : 1531 < a && b.find('a[href^\x3d"#asia"]').addClass("active") : 189 >= a ? b.find('a[href^\x3d"#americas"]').addClass("active") : 190 <= a && 820 >= a ? b.find('a[href^\x3d"#europe"]').addClass("active") : 821 <= a && 1355 >= a ? b.find('a[href^\x3d"#africa"]').addClass("active") : 1356 <= a && 1530 >= a ? b.find('a[href^\x3d"#gcc"]').addClass("active") : 1531 < a && b.find('a[href^\x3d"#asia"]').addClass("active")
}
function scrollToElm(a, b, d) {
    b = getRelativePos(b);
    scrollTo(a, b.top, 1)
}
function getRelativePos(a) {
    var b = a.parentNode.getBoundingClientRect()
        , d = a.getBoundingClientRect()
        , c = {};
    c.top = d.top - b.top + a.parentNode.scrollTop;
    c.right = d.right - b.right;
    c.bottom = d.bottom - b.bottom;
    c.left = d.left - b.left;
    return c
}
function scrollTo(a, b, d, c) {
    function e() {
        l = performance.now();
        f = (l - k) / 1E3;
        m = f / d;
        a.scrollTop = g + h * easeInOutQuad(m);
        1 > m ? window.requestAnimationFrame(e) : c && c()
    }
    var g = a.scrollTop, h = b - g, k = performance.now(), l, f, m;
    e()
}
function easeInOutQuad(a) {
    return .5 > a ? 2 * a * a : -1 + (4 - 2 * a) * a
}
var lastScrollTop = 0
    , delta = 5;
function hasScrolled() {
    var a = $("#header").outerHeight()
        , b = $(this).scrollTop();
    Math.abs(lastScrollTop - b) <= delta || (b > lastScrollTop && b > a ? ($("#header").removeClass("nav-down").addClass("nav-up"),
        (null != getFFPCookieValue("QRTOKEN") || 0 < $(".register-form").length) && $(".topbar-container").css("top", "0"),
        $("header#header").css("z-index", "-1"),
        $("#header").hasClass("innerHeader") || $("#header").removeClass("scrolled"),
        $(".mega-dropdown").find(".dropdown-menu").hasClass("show") || $("#header").hasClass("innerHeader") || $("#header").removeClass("scrolled"),
        768 >= $(window).width() && ($("#openApp").length && "block" == $("#openApp").css("display") ? $(".nav-up").css("top", "-122px") : $(".nav-up").css("top", "-65px"))) : (b + $(window).height() < $(document).height() && ($("#header").removeClass("nav-up").addClass("nav-down"),
            (null != getFFPCookieValue("QRTOKEN") || 0 < $(".register-form").length) && $(".topbar-container").css("top", "106px"),
            $("header#header").css("z-index", "32"),
            b > a ? $("#header").addClass("scrolled") : $("#header").hasClass("innerHeader") || $("#header").removeClass("scrolled"),
            $(".header").find("#navbarSupportedContent").removeClass("headheight"),
            $(".header").css("top", ""),
            (null != getFFPCookieValue("QRTOKEN") || 0 < $(".register-form").length) && $(".topbar-container").css("top", "70px")),
            $(".mega-dropdown,.usertype").find(".dropdown-menu").hasClass("show") && $("#header").addClass("scrolled"),
            0 == b && $("#exchange").length && "block" == $("#exchange").css("display") && ($(".header").find("#navbarSupportedContent").addClass("headheight"),
                (null != getFFPCookieValue("QRTOKEN") || 0 < $(".register-form").length) && $(".topbar-container").css("top", "106px"))),
        lastScrollTop = b)
}
function smallTeaserViewCaller() {
    750 >= jQuery(window).width() ? (jQuery(".fordesktop").addClass("hidden"),
        jQuery(".formobile").hasClass("hidden") && jQuery(".formobile").removeClass("hidden"),
        deleteView(".fordesktop")) : (jQuery(".formobile").addClass("hidden"),
            jQuery(".fordesktop").hasClass("hidden") && jQuery(".fordesktop").removeClass("hidden"),
            deleteView(".formobile"))
}
function deleteView(a) {
    $(a) && jQuery(a).length && $(a).remove()
}
$(function () {
    var a = navigator.userAgent
        , b = -1 < a.indexOf("Android ") && -1 < a.indexOf("AppleWebKit");
    768 > $(window).width() && (b ? ($(".appdownload .android-app-banner").css("display", "block"),
        $(".appdownload .ios-app-banner").css("display", "none"),
        $(".appdownload .huawei-app-banner").css("display", "none"),
        $(".appdownload .android-app-banner").html('\x3cimg src\x3d"/etc.clientlibs/qrweb/components/content/header-components/header-mega-menu/v1/header-mega-menu/client-lib/resources/android.png" alt\x3d"Android App" width\x3d"136px" height\x3d"45px"\x3e')) : ($(".appdownload .android-app-banner").css("display", "none"),
            $(".appdownload .huawei-app-banner").css("display", "none"),
            $(".appdownload .ios-app-banner").css("display", "block"),
            $(".appdownload .ios-app-banner").html('\x3cimg src\x3d"/etc.clientlibs/qrweb/components/content/header-components/header-mega-menu/v1/header-mega-menu/client-lib/resources/app-store.png" alt\x3d"Android App" width\x3d"136px" height\x3d"45px"\x3e')),
        (-1 < a.indexOf("ELE-L09") || -1 < a.indexOf("L29") || -1 < a.toLowerCase().indexOf("huawei")) && -1 < a.indexOf("AppleWebKit") && ($(".appdownload .android-app-banner").css("display", "none"),
            $(".appdownload .ios-app-banner").css("display", "none"),
            $(".appdownload .huawei-app-banner").css("display", "block"),
            $(".appdownload .huawei-app-banner").html('\x3cimg src\x3d"/etc.clientlibs/qrweb/components/content/header-components/header-mega-menu/v1/header-mega-menu/client-lib/resources/android.png" alt\x3d"Android App" width\x3d"136px" height\x3d"45px"\x3e')))
});
$(function () {
    var a = getUserBasicInfoField("programCode")
        , b = $("#page-path").val();
    if (void 0 != a) {
        $(".mobile_pclub").next().find(".complimentJourney").addClass("loggedin-priviledge");
        if ("QRPC" == a) {
            $(".anonymousUser").addClass("hide");
            $(".loggedInUser").removeClass("hide");
            $(".loggedInUser").removeAttr("hidden");
            $(".ffpUserInfo").removeClass("hide");
            $(".ffpUserInfo").removeAttr("hidden");
            b = getUserBasicInfoField("firstName");
            var d = getUserBasicInfoField("lastName")
                , c = getUserBasicInfoField("title");
            void 0 !== b ? ($(".usrLastname").html("Welcome, " + b),
                void 0 !== c && (c = capitalizeFirstLetter(c.toLowerCase()),
                    $(".usrLastname").html("Welcome, " + c + ". " + b))) : void 0 !== d && ($(".usrLastname").html("Welcome, " + d),
                        void 0 !== c && (c = capitalizeFirstLetter(c.toLowerCase()),
                            $(".usrLastname").html("Welcome, " + c + ". " + b)))
        }
        "PORTAL" == a && ($(".anonymousUser").addClass("hide"),
            $(".loggedInUser").removeClass("hide"),
            $(".loggedInUser").removeAttr("hidden"),
            $(".portalUserInfo").removeClass("hide"),
            $(".portalUserInfo").removeAttr("hidden"),
            b = getUserBasicInfoField("firstName"),
            d = getUserBasicInfoField("lastName"),
            c = getUserBasicInfoField("title"),
            void 0 !== b ? ($(".usrLastname").html("Welcome, " + b),
                void 0 !== c && (c = capitalizeFirstLetter(c.toLowerCase()),
                    $(".usrLastname").html("Welcome, " + c + ". " + b))) : void 0 !== d && ($(".usrLastname").html("Welcome, " + d),
                        void 0 !== c && (c = capitalizeFirstLetter(c.toLowerCase()),
                            $(".usrLastname").html("Welcome, " + c + ". " + b))));
        "QRBB" == a && "" !== getFFPCookieValue("QRTOKEN") && getFFPCookieValue("QRTOKEN")
    } else if (void 0 == b || -1 == b.indexOf("/content/tradepartners"))
        $(".mobile_pclub").next().find(".complimentJourney").removeClass("loggedin-priviledge"),
            $(".anonymousUser").removeClass("hide"),
            $(".loggedInUser").addClass("hide"),
            $(".loggedInUser").remove(),
            $(".loggedinprofile").remove()
});
function capitalizeFirstLetter(a) {
    return a.charAt(0).toUpperCase() + a.slice(1)
}
;