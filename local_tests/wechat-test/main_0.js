var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
} : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
}, t = "function" == typeof Symbol && "symbol" == e(Symbol.iterator) ? function (t) {
    return void 0 === t ? "undefined" : e(t);
} : function (t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : e(t);
};

(global.webpackJsonp = global.webpackJsonp || []).push([["common/main"], {
    "05e5": function (e, t, o) {
        (function (e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = function (e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }(o("66fd")), r = {
                globalData: {
                    playbackRate: !0,
                    $wxverify: !0,
                    $config: [],
                    $scene: [],
                    $login: !1,
                    $getIP: !1,
                    ShowPlay: !0,
                    $points: !1,
                    $theme: "black",
                    systemInfo: [],
                    $platform: "android"
                },
                onLaunch: function () {
                    wx.cloud.init({
                        env: "dy-8gq8g39b977b89b0",
                        traceUser: !0
                    }), wx.cloud.database().collection("check").where({
                        query_id: 1
                    }).get().then(function (e) {
                        wx.setStorageSync("check", e.data[0].is_check), console.log(e.data);
                    });
                    var t = this, o = this.$scope.globalData, r = wx.getLaunchOptionsSync();
                    o.$scene = r, e.getStorageSync("$theme") && (o.$theme = e.getStorageSync("$theme")),
                        "white" == o.$theme && (e.setTabBarStyle({
                            color: "#A9A9A9",
                            selectedColor: "#f49c36",
                            backgroundColor: "#ffffff",
                            borderStyle: "black"
                        }), e.setBackgroundColor({
                            backgroundColor: "#ffffff",
                            backgroundColorTop: "#f9f9f9"
                        }));
                    var i = this;
                    e.getSystemInfo({
                        success: function (t) {
                            o.$platform = t.platform;
                            var n = i.md5(i.cjurl + i.mark + o.$platform + o.$scene.scene + "App.Mov.GetConfig"), r = i.cjurl + "wxApi/public/?service=App.Mov.GetConfig&host=" + i.cjurl + "&scene=" + o.$scene.scene + "&mark=" + i.mark + "&platform=" + o.$platform + "&sign=" + n;
                            i.api.apiRequest(r).then(function (t) {
                                200 == t.Code && (o.$config = t.Data, o.$wxverify = !o.$config.wxverify, "1" != o.$config.site.ip.radio || "boolean" == typeof e.getStorageSync("$ip") || o.$wxverify ? "1" == o.$config.site.ip.radio && 1 == e.getStorageSync("$ip") ? o.$wxverify = !0 : "0" == o.$config.site.ip.radio && e.removeStorageSync("$ip") : i.api.getIP(o.$config.site.ip.text).then(function (t) {
                                    t && (o.$wxverify = !0), e.setStorageSync("$ip", t);
                                }));
                            });
                            var a = wx.getMenuButtonBoundingClientRect();
                            o.systemInfo.windowWidth = t.windowWidth, o.systemInfo.windowHeight = t.windowHeight,
                                o.systemInfo.statusBarHeight = t.statusBarHeight, o.systemInfo.customWidth = a.width,
                                o.systemInfo.customHeight = a.height, o.systemInfo.customTop = a.top, o.systemInfo.customlLeft = a.left,
                                o.systemInfo.customBar = a.height + a.top + 10;
                        }
                    }), this.api.getSetting().then(function (r) {
                        if (e.getStorageSync("$userInfo").hasOwnProperty("openId") && o.$config.site.hasOwnProperty("login")) {
                            var i = e.getStorageSync("$userInfo").openId;
                            n.default.prototype.$user_login = r;
                            var a = o.$config.site.login, c = t.md5(i + o.$platform + o.$scene.scene + "App.User.WxLogin"), f = t.cjurl + "wxApi/public/?service=App.User.WxLogin&openid=" + i + "&scene=" + o.$scene.scene + "&platform=" + o.$platform + "&sign=" + c;
                            t.api.apiRequest(f).then(function (n) {
                                200 == n.Code && (0 == n.Data.user_status ? o.$wxverify = !0 : "1" == a.radio && n.Data.user_login_num >= Number(a.num) && ("android" != o.$platform && "ios" != o.$platform || (o.$wxverify = !1)),
                                    t.$user_login = !0, e.setStorageSync("$userInfo", n.Data)), o.$login = !0;
                            });
                        } else o.$login = !0, n.default.prototype.$user_login = !1;
                    });
                    var a = new Date();
                    a.getDate() !== e.getStorageSync("$adTime") && (e.setStorageSync("$adNum", 0), e.setStorageSync("$adTime", a.getDate()));
                },
                onShow: function () {
                    console.log("App Show");
                },
                onHide: function () {
                    console.log("App Hide");
                }
            };
            t.default = r;
        }).call(this, o("543d").default);
    },
    "390c": function (e, t, o) {
        var n = o("fad3");
        o.n(n).a;
    },
    a11b: function (e, t, o) {
        o.r(t);
        var n = o("05e5"), r = o.n(n);
        for (var i in n) "default" !== i && function (e) {
            o.d(t, e, function () {
                return n[e];
            });
        }(i);
        t.default = r.a;
    },
    c4be: function (e, o, n) {
        (function (e) {
            function o() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap();
                return o = function () {
                    return e;
                }, e;
            }
            function r(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" !== (void 0 === e ? "undefined" : t(e)) && "function" != typeof e) return {
                    default: e
                };
                var n = o();
                if (n && n.has(e)) return n.get(e);
                var r = {}, i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var a in e) if (Object.prototype.hasOwnProperty.call(e, a)) {
                    var c = i ? Object.getOwnPropertyDescriptor(e, a) : null;
                    c && (c.get || c.set) ? Object.defineProperty(r, a, c) : r[a] = e[a];
                }
                return r.default = e, n && n.set(e, r), r;
            }
            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function a(e, t) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })), o.push.apply(o, n);
                }
                return o;
            }
            function c(e, t, o) {
                return t in e ? Object.defineProperty(e, t, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = o, e;
            }
            n("3079");
            var f = i(n("66fd")), u = i(n("d64e")), l = i(n("a420")), p = r(n("4a78")), s = r(n("0996"));
            f.default.prototype.md5 = l.default, f.default.prototype.db = p, f.default.prototype.api = s,
                f.default.prototype.cjurl = "https://dy99.xinidc.net.cn/", f.default.prototype.mark = "d5",
                f.default.prototype.iv = "eq7U4nDJFMsaZFHC", f.default.prototype.key = "5m0hVqp39zNPd9qL",
                f.default.prototype.$user_login = !1, f.default.config.productionTip = !1, u.default.mpType = "app",
                e(new f.default(function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var o = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? a(Object(o), !0).forEach(function (t) {
                            c(e, t, o[t]);
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : a(Object(o)).forEach(function (t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t));
                        });
                    }
                    return e;
                }({}, u.default))).$mount();
        }).call(this, n("543d").createApp);
    },
    d64e: function (e, t, o) {
        o.r(t);
        var n = o("a11b");
        for (var r in n) "default" !== r && function (e) {
            o.d(t, e, function () {
                return n[e];
            });
        }(r);
        o("390c");
        var i = o("f0c5"), a = Object(i.a)(n.default, void 0, void 0, !1, null, null, null, !1, void 0, void 0);
        t.default = a.exports;
    },
    fad3: function (e, t, o) { }
}, [["c4be", "common/runtime", "common/vendor"]]]);