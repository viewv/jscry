/**
 * AES 算法实现
 * App ID: wx013b0e58fd2697ed
 * 版本: v11
 * 代码哈希: -dez86k
 * 来源文件: output/wx013b0e58fd2697ed/common/vendor.js
 * 检测类型: Round constants
 * 置信度: 0.8
 * 函数名: anonymous
 * 行数: 946
 * 生成时间: 2025-07-05T13:17:10.526Z
 */

function(t, e, n) {
        function r(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })), n.push.apply(n, r);
            }
            return n;
        }
        function i(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? r(Object(n), !0).forEach(function(e) {
                    u(t, e, n[e]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                });
            }
            return t;
        }
        function o(t, e) {
            return c(t) || s(t, e) || v(t, e) || a();
        }
        function a() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function s(t, e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
                var n = [], r = !0, i = !1, o = void 0;
                try {
                    for (var a, s = t[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), 
                    !e || n.length !== e); r = !0) ;
                } catch (t) {
                    t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                    i = !0, o = t;
                } finally {
                    try {
                        r || null == s.return || s.return();
                    } finally {
                        if (i) throw o;
                    }
                }
                return n;
            }
        }
        function c(t) {
            if (Array.isArray(t)) return t;
        }
        function u(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t;
        }
        function f(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }
        function l(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(t, r.key, r);
            }
        }
        function h(t, e, n) {
            return e && l(t.prototype, e), n && l(t, n), t;
        }
        function p(t) {
            return _(t) || y(t) || v(t) || d();
        }
        function d() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function v(t, e) {
            if (t) {
                if ("string" == typeof t) return g(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? g(t, e) : void 0;
            }
        }
        function y(t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
        }
        function _(t) {
            if (Array.isArray(t)) return g(t);
        }
        function g(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
            return r;
        }
        function m(t) {
            return "function" == typeof t;
        }
        function b(t) {
            return "string" == typeof t;
        }
        function A(t) {
            return "[object Object]" === Mt.call(t);
        }
        function w(t, e) {
            return Ht.call(t, e);
        }
        function O() {}
        function x(t) {
            var e = Object.create(null);
            return function(n) {
                return e[n] || (e[n] = t(n));
            };
        }
        function S(t, e) {
            var n = e ? t ? t.concat(e) : Array.isArray(e) ? e : [ e ] : t;
            return n ? $(n) : n;
        }
        function $(t) {
            for (var e = [], n = 0; n < t.length; n++) -1 === e.indexOf(t[n]) && e.push(t[n]);
            return e;
        }
        function C(t, e) {
            var n = t.indexOf(e);
            -1 !== n && t.splice(n, 1);
        }
        function k(t, e) {
            Object.keys(e).forEach(function(n) {
                -1 !== Lt.indexOf(n) && m(e[n]) && (t[n] = S(t[n], e[n]));
            });
        }
        function E(t, e) {
            t && e && Object.keys(e).forEach(function(n) {
                -1 !== Lt.indexOf(n) && m(e[n]) && C(t[n], e[n]);
            });
        }
        function j(t) {
            return function(e) {
                return t(e) || e;
            };
        }
        function P(t) {
            return !!t && ("object" === (void 0 === t ? "undefined" : _typeof(t)) || "function" == typeof t) && "function" == typeof t.then;
        }
        function T(t, e) {
            for (var n = !1, r = 0; r < t.length; r++) {
                var i = t[r];
                if (n) n = Promise.resolve(j(i)); else {
                    var o = i(e);
                    if (P(o) && (n = Promise.resolve(o)), !1 === o) return {
                        then: function() {}
                    };
                }
            }
            return n || {
                then: function(t) {
                    return t(e);
                }
            };
        }
        function R(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return [ "success", "fail", "complete" ].forEach(function(n) {
                if (Array.isArray(t[n])) {
                    var r = e[n];
                    e[n] = function(e) {
                        T(t[n], e).then(function(t) {
                            return m(r) && r(t) || t;
                        });
                    };
                }
            }), e;
        }
        function D(t, e) {
            var n = [];
            Array.isArray(zt.returnValue) && n.push.apply(n, p(zt.returnValue));
            var r = Vt[t];
            return r && Array.isArray(r.returnValue) && n.push.apply(n, p(r.returnValue)), n.forEach(function(t) {
                e = t(e) || e;
            }), e;
        }
        function I(t) {
            var e = Object.create(null);
            Object.keys(zt).forEach(function(t) {
                "returnValue" !== t && (e[t] = zt[t].slice());
            });
            var n = Vt[t];
            return n && Object.keys(n).forEach(function(t) {
                "returnValue" !== t && (e[t] = (e[t] || []).concat(n[t]));
            }), e;
        }
        function B(t, e, n) {
            for (var r = arguments.length, i = new Array(r > 3 ? r - 3 : 0), o = 3; o < r; o++) i[o - 3] = arguments[o];
            var a = I(t);
            return a && Object.keys(a).length ? Array.isArray(a.invoke) ? T(a.invoke, n).then(function(t) {
                return e.apply(void 0, [ R(a, t) ].concat(i));
            }) : e.apply(void 0, [ R(a, n) ].concat(i)) : e.apply(void 0, [ n ].concat(i));
        }
        function N(t) {
            return Jt.test(t) && -1 === Kt.indexOf(t);
        }
        function M(t) {
            return Wt.test(t) && -1 === qt.indexOf(t);
        }
        function H(t) {
            return Gt.test(t) && "onPush" !== t;
        }
        function F(t) {
            return t.then(function(t) {
                return [ null, t ];
            }).catch(function(t) {
                return [ t ];
            });
        }
        function U(t) {
            return !(N(t) || M(t) || H(t));
        }
        function L(t, e) {
            return U(t) ? function() {
                for (var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) i[o - 1] = arguments[o];
                return m(n.success) || m(n.fail) || m(n.complete) ? D(t, B.apply(void 0, [ t, e, n ].concat(i))) : D(t, F(new Promise(function(r, o) {
                    B.apply(void 0, [ t, e, Object.assign({}, n, {
                        success: r,
                        fail: o
                    }) ].concat(i));
                })));
            } : e;
        }
        function z() {
            var t = wx.getSystemInfoSync(), e = t.platform, n = t.pixelRatio, r = t.windowWidth;
            te = r, ee = n, Qt = "ios" === e;
        }
        function V(t) {
            var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], n = new ie(++se, t);
            return e && (oe[se] = n, ae.push(n)), n;
        }
        function X(t) {
            if (t) {
                var e = oe[t];
                return delete oe[t], e;
            }
            return ae.shift();
        }
        function W(t) {
            for (var e = getCurrentPages(), n = e.length; n--; ) {
                var r = e[n];
                if (r.$page && r.$page.fullPath === t) return n;
            }
            return -1;
        }
        function J(t) {
            if (t.safeArea) {
                var e = t.safeArea;
                t.safeAreaInsets = {
                    top: e.top,
                    left: e.left,
                    right: t.windowWidth - e.right,
                    bottom: t.windowHeight - e.bottom
                };
            }
        }
        function K(t, e, n) {
            return function(r) {
                return e(G(t, r, n));
            };
        }
        function q(t, e) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            if (A(e)) {
                var o = !0 === i ? e : {};
                for (var a in m(n) && (n = n(e, o) || {}), e) if (w(n, a)) {
                    var s = n[a];
                    m(s) && (s = s(e[a], e, o)), s ? b(s) ? o[s] = e[a] : A(s) && (o[s.name ? s.name : a] = s.value) : console.warn("微信小程序 ".concat(t, "暂不支持").concat(a));
                } else -1 !== le.indexOf(a) ? m(e[a]) && (o[a] = K(t, e[a], r)) : i || (o[a] = e[a]);
                return o;
            }
            return m(e) && (e = K(t, e, r)), e;
        }
        function G(t, e, n) {
            var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            return m(ce.returnValue) && (e = ce.returnValue(t, e)), q(t, e, n, {}, r);
        }
        function Y(t, e) {
            if (w(ce, t)) {
                var n = ce[t];
                return n ? function(e, r) {
                    var i = n;
                    m(n) && (i = n(e));
                    var o = [ e = q(t, e, i.args, i.returnValue) ];
                    void 0 !== r && o.push(r), m(i.name) ? t = i.name(e) : b(i.name) && (t = i.name);
                    var a = wx[t].apply(wx, o);
                    return M(t) ? G(t, a, i.returnValue, N(t)) : a;
                } : function() {
                    console.error("微信小程序 暂不支持".concat(t));
                };
            }
            return e;
        }
        function Z(t) {
            return function(e) {
                var n = e.fail, r = e.complete, i = {
                    errMsg: "".concat(t, ":fail:暂不支持 ").concat(t, " 方法")
                };
                m(n) && n(i), m(r) && r(i);
            };
        }
        function Q(t, e, n) {
            return t[e].apply(t, n);
        }
        function tt(t) {
            if (wx.canIUse("nextTick")) {
                var e = t.triggerEvent;
                t.triggerEvent = function(n) {
                    for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) i[o - 1] = arguments[o];
                    return e.apply(t, [ Ae(n) ].concat(i));
                };
            }
        }
        function et(t, e) {
            var n = e[t];
            e[t] = n ? function() {
                tt(this);
                for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                return n.apply(this, e);
            } : function() {
                tt(this);
            };
        }
        function nt(t, e) {
            var n = t.$mp[t.mpType];
            e.forEach(function(e) {
                w(n, e) && (t[e] = n[e]);
            });
        }
        function rt(t, e) {
            if (!e) return !0;
            if (Nt.default.options && Array.isArray(Nt.default.options[t])) return !0;
            if (e = e.default || e, m(e)) return !!m(e.extendOptions[t]) || !!(e.super && e.super.options && Array.isArray(e.super.options[t]));
            if (m(e[t])) return !0;
            var n = e.mixins;
            return Array.isArray(n) ? !!n.find(function(e) {
                return rt(t, e);
            }) : void 0;
        }
        function it(t, e, n) {
            e.forEach(function(e) {
                rt(e, n) && (t[e] = function(t) {
                    return this.$vm && this.$vm.__call_hook(e, t);
                });
            });
        }
        function ot(t, e) {
            var n;
            return e = e.default || e, n = m(e) ? e : t.extend(e), e = n.options, [ n, e ];
        }
        function at(t, e) {
            if (Array.isArray(e) && e.length) {
                var n = Object.create(null);
                e.forEach(function(t) {
                    n[t] = !0;
                }), t.$scopedSlots = t.$slots = n;
            }
        }
        function st(t, e) {
            var n = (t = (t || "").split(",")).length;
            1 === n ? e._$vueId = t[0] : 2 === n && (e._$vueId = t[0], e._$vuePid = t[1]);
        }
        function ct(t, e) {
            var n = t.data || {}, r = t.methods || {};
            if ("function" == typeof n) try {
                n = n.call(e);
            } catch (t) {
                t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                Object({
                    VUE_APP_NAME: "好看影视",
                    VUE_APP_PLATFORM: "mp-weixin",
                    NODE_ENV: "production",
                    BASE_URL: "/"
                }).VUE_APP_DEBUG && console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。", n);
            } else try {
                n = JSON.parse(JSON.stringify(n));
            } catch (t) {}
            return A(n) || (n = {}), Object.keys(r).forEach(function(t) {
                -1 !== e.__lifecycle_hooks__.indexOf(t) || w(n, t) || (n[t] = r[t]);
            }), n;
        }
        function ut(t) {
            return function(e, n) {
                this.$vm && (this.$vm[t] = e);
            };
        }
        function ft(t, e) {
            var n = t.behaviors, r = t.extends, i = t.mixins, o = t.props;
            o || (t.props = o = []);
            var a = [];
            return Array.isArray(n) && n.forEach(function(t) {
                a.push(t.replace("uni://", "wx".concat("://"))), "uni://form-field" === t && (Array.isArray(o) ? (o.push("name"), 
                o.push("value")) : (o.name = {
                    type: String,
                    default: ""
                }, o.value = {
                    type: [ String, Number, Boolean, Array, Object, Date ],
                    default: ""
                }));
            }), A(r) && r.props && a.push(e({
                properties: ht(r.props, !0)
            })), Array.isArray(i) && i.forEach(function(t) {
                A(t) && t.props && a.push(e({
                    properties: ht(t.props, !0)
                }));
            }), a;
        }
        function lt(t, e, n, r) {
            return Array.isArray(e) && 1 === e.length ? e[0] : e;
        }
        function ht(t) {
            var e = {};
            return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] || (e.vueId = {
                type: String,
                value: ""
            }, e.generic = {
                type: Object,
                value: null
            }, e.vueSlots = {
                type: null,
                value: [],
                observer: function(t, e) {
                    var n = Object.create(null);
                    t.forEach(function(t) {
                        n[t] = !0;
                    }), this.setData({
                        $slots: n
                    });
                }
            }), Array.isArray(t) ? t.forEach(function(t) {
                e[t] = {
                    type: null,
                    observer: ut(t)
                };
            }) : A(t) && Object.keys(t).forEach(function(n) {
                var r = t[n];
                if (A(r)) {
                    var i = r.default;
                    m(i) && (i = i()), r.type = lt(n, r.type), e[n] = {
                        type: -1 !== Oe.indexOf(r.type) ? r.type : null,
                        value: i,
                        observer: ut(n)
                    };
                } else {
                    var o = lt(n, r);
                    e[n] = {
                        type: -1 !== Oe.indexOf(o) ? o : null,
                        observer: ut(n)
                    };
                }
            }), e;
        }
        function pt(t) {
            try {
                t.mp = JSON.parse(JSON.stringify(t));
            } catch (t) {}
            return t.stopPropagation = O, t.preventDefault = O, t.target = t.target || {}, w(t, "detail") || (t.detail = {}), 
            w(t, "markerId") && (t.detail = "object" === _typeof(t.detail) ? t.detail : {}, 
            t.detail.markerId = t.markerId), A(t.detail) && (t.target = Object.assign({}, t.target, t.detail)), 
            t;
        }
        function dt(t, e) {
            var n = t;
            return e.forEach(function(e) {
                var r = e[0], i = e[2];
                if (r || void 0 !== i) {
                    var o, a = e[1], s = e[3];
                    Number.isInteger(r) ? o = r : r ? "string" == typeof r && r && (o = 0 === r.indexOf("#s#") ? r.substr(3) : t.__get_value(r, n)) : o = n, 
                    Number.isInteger(o) ? n = i : a ? Array.isArray(o) ? n = o.find(function(e) {
                        return t.__get_value(a, e) === i;
                    }) : A(o) ? n = Object.keys(o).find(function(e) {
                        return t.__get_value(a, o[e]) === i;
                    }) : console.error("v-for 暂不支持循环数据：", o) : n = o[i], s && (n = t.__get_value(s, n));
                }
            }), n;
        }
        function vt(t, e, n) {
            var r = {};
            return Array.isArray(e) && e.length && e.forEach(function(e, i) {
                "string" == typeof e ? e ? "$event" === e ? r["$" + i] = n : "arguments" === e ? n.detail && n.detail.__args__ ? r["$" + i] = n.detail.__args__ : r["$" + i] = [ n ] : 0 === e.indexOf("$event.") ? r["$" + i] = t.__get_value(e.replace("$event.", ""), n) : r["$" + i] = t.__get_value(e) : r["$" + i] = t : r["$" + i] = dt(t, e);
            }), r;
        }
        function yt(t) {
            for (var e = {}, n = 1; n < t.length; n++) {
                var r = t[n];
                e[r[0]] = r[1];
            }
            return e;
        }
        function _t(t, e) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [], r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [], i = arguments.length > 4 ? arguments[4] : void 0, o = arguments.length > 5 ? arguments[5] : void 0, a = !1;
            if (i && (a = e.currentTarget && e.currentTarget.dataset && "wx" === e.currentTarget.dataset.comType, 
            !n.length)) return a ? [ e ] : e.detail.__args__ || e.detail;
            var s = vt(t, r, e), c = [];
            return n.forEach(function(t) {
                "$event" === t ? "__set_model" !== o || i ? i && !a ? c.push(e.detail.__args__[0]) : c.push(e) : c.push(e.target.value) : Array.isArray(t) && "o" === t[0] ? c.push(yt(t)) : "string" == typeof t && w(s, t) ? c.push(s[t]) : c.push(t);
            }), c;
        }
        function gt(t, e) {
            return t === e || "regionchange" === e && ("begin" === t || "end" === t);
        }
        function mt(t) {
            for (var e = t.$parent; e && e.$parent && (e.$options.generic || e.$parent.$options.generic || e.$scope._$vuePid); ) e = e.$parent;
            return e && e.$parent;
        }
        function bt(t) {
            var e = this, n = ((t = pt(t)).currentTarget || t.target).dataset;
            if (!n) return console.warn("事件信息不存在");
            var r = n.eventOpts || n["event-opts"];
            if (!r) return console.warn("事件信息不存在");
            var i = t.type, o = [];
            return r.forEach(function(n) {
                var r = n[0], a = n[1], s = r.charAt(0) === Se, c = (r = s ? r.slice(1) : r).charAt(0) === xe;
                r = c ? r.slice(1) : r, a && gt(i, r) && a.forEach(function(n) {
                    var r = n[0];
                    if (r) {
                        var i = e.$vm;
                        if (i.$options.generic && (i = mt(i) || i), "$emit" === r) return void i.$emit.apply(i, _t(e.$vm, t, n[1], n[2], s, r));
                        var a = i[r];
                        if (!m(a)) throw new Error(" _vm.".concat(r, " is not a function"));
                        if (c) {
                            if (a.once) return;
                            a.once = !0;
                        }
                        var u = _t(e.$vm, t, n[1], n[2], s, r);
                        o.push(a.apply(i, (Array.isArray(u) ? u : []).concat([ , , , , , , , , , , t ])));
                    }
                });
            }), "input" === i && 1 === o.length && void 0 !== o[0] ? o[0] : void 0;
        }
        function At(t, e) {
            var n = e.mocks, r = e.initRefs;
            t.$options.store && (Nt.default.prototype.$store = t.$options.store), Nt.default.prototype.mpHost = "mp-weixin", 
            Nt.default.mixin({
                beforeCreate: function() {
                    this.$options.mpType && (this.mpType = this.$options.mpType, this.$mp = u({
                        data: {}
                    }, this.mpType, this.$options.mpInstance), this.$scope = this.$options.mpInstance, 
                    delete this.$options.mpType, delete this.$options.mpInstance, "app" !== this.mpType && (r(this), 
                    nt(this, n)));
                }
            });
            var i = {
                onLaunch: function(e) {
                    this.$vm || (wx.canIUse("nextTick") || console.error("当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上"), 
                    this.$vm = t, this.$vm.$mp = {
                        app: this
                    }, this.$vm.$scope = this, this.$vm.globalData = this.globalData, this.$vm._isMounted = !0, 
                    this.$vm.__call_hook("mounted", e), this.$vm.__call_hook("onLaunch", e));
                }
            };
            i.globalData = t.$options.globalData || {};
            var o = t.$options.methods;
            return o && Object.keys(o).forEach(function(t) {
                i[t] = o[t];
            }), it(i, $e), i;
        }
        function wt(t, e) {
            for (var n, r = t.$children, i = r.length - 1; i >= 0; i--) {
                var o = r[i];
                if (o.$scope._$vueId === e) return o;
            }
            for (var a = r.length - 1; a >= 0; a--) if (n = wt(r[a], e)) return n;
        }
        function Ot(t) {
            return Behavior(t);
        }
        function xt() {
            return !!this.route;
        }
        function St(t) {
            this.triggerEvent("__l", t);
        }
        function $t(t) {
            var e = t.$scope;
            Object.defineProperty(t, "$refs", {
                get: function() {
                    var t = {};
                    return e.selectAllComponents(".vue-ref").forEach(function(e) {
                        var n = e.dataset.ref;
                        t[n] = e.$vm || e;
                    }), e.selectAllComponents(".vue-ref-in-for").forEach(function(e) {
                        var n = e.dataset.ref;
                        t[n] || (t[n] = []), t[n].push(e.$vm || e);
                    }), t;
                }
            });
        }
        function Ct(t) {
            var e, n = t.detail || t.value, r = n.vuePid, i = n.vueOptions;
            r && (e = wt(this.$vm, r)), e || (e = this.$vm), i.parent = e;
        }
        function kt(t) {
            return At(t, {
                mocks: Ce,
                initRefs: $t
            });
        }
        function Et(t) {
            Nt.default.prototype.getOpenerEventChannel = function() {
                return this.__eventChannel__ || (this.__eventChannel__ = new ie()), this.__eventChannel__;
            };
            var e = Nt.default.prototype.__call_hook;
            return Nt.default.prototype.__call_hook = function(t, n) {
                return "onLoad" === t && n && n.__id__ && (this.__eventChannel__ = X(n.__id__), 
                delete n.__id__), e.call(this, t, n);
            }, App(kt(t)), t;
        }
        function jt(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Pe, n = t ? Object.keys(t).map(function(n) {
                var r = t[n];
                if (void 0 === r) return "";
                if (null === r) return e(n);
                if (Array.isArray(r)) {
                    var i = [];
                    return r.forEach(function(t) {
                        void 0 !== t && (null === t ? i.push(e(n)) : i.push(e(n) + "=" + e(t)));
                    }), i.join("&");
                }
                return e(n) + "=" + e(r);
            }).filter(function(t) {
                return t.length > 0;
            }).join("&") : null;
            return n ? "?".concat(n) : "";
        }
        function Pt(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = e.isPage, r = e.initRelation, a = o(ot(Nt.default, t), 2), s = a[0], c = a[1], u = i({
                multipleSlots: !0,
                addGlobalClass: !0
            }, c.options || {});
            c["mp-weixin"] && c["mp-weixin"].options && Object.assign(u, c["mp-weixin"].options);
            var f = {
                options: u,
                data: ct(c, Nt.default.prototype),
                behaviors: ft(c, Ot),
                properties: ht(c.props, !1, c.__file),
                lifetimes: {
                    attached: function() {
                        var t = this.properties, e = {
                            mpType: n.call(this) ? "page" : "component",
                            mpInstance: this,
                            propsData: t
                        };
                        st(t.vueId, this), r.call(this, {
                            vuePid: this._$vuePid,
                            vueOptions: e
                        }), this.$vm = new s(e), at(this.$vm, t.vueSlots), this.$vm.$mount();
                    },
                    ready: function() {
                        this.$vm && (this.$vm._isMounted = !0, this.$vm.__call_hook("mounted"), this.$vm.__call_hook("onReady"));
                    },
                    detached: function() {
                        this.$vm && this.$vm.$destroy();
                    }
                },
                pageLifetimes: {
                    show: function(t) {
                        this.$vm && this.$vm.__call_hook("onPageShow", t);
                    },
                    hide: function() {
                        this.$vm && this.$vm.__call_hook("onPageHide");
                    },
                    resize: function(t) {
                        this.$vm && this.$vm.__call_hook("onPageResize", t);
                    }
                },
                methods: {
                    __l: Ct,
                    __e: bt
                }
            };
            return c.externalClasses && (f.externalClasses = c.externalClasses), Array.isArray(c.wxsCallMethods) && c.wxsCallMethods.forEach(function(t) {
                f.methods[t] = function(e) {
                    return this.$vm[t](e);
                };
            }), n ? f : [ f, s ];
        }
        function Tt(t) {
            return Pt(t, {
                isPage: xt,
                initRelation: St
            });
        }
        function Rt(t, e) {
            e.isPage, e.initRelation;
            var n = Tt(t);
            return it(n.methods, Te, t), n.methods.onLoad = function(t) {
                this.options = t;
                var e = Object.assign({}, t);
                delete e.__id__, this.$page = {
                    fullPath: "/" + (this.route || this.is) + jt(e)
                }, this.$vm.$mp.query = t, this.$vm.__call_hook("onLoad", t);
            }, n;
        }
        function Dt(t) {
            return Rt(t, {
                isPage: xt,
                initRelation: St
            });
        }
        function It(t) {
            return Component(Dt(t));
        }
        function Bt(t) {
            return Component(Tt(t));
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.createApp = Et, e.createComponent = Bt, e.createPage = It, e.default = void 0;
        var Nt = function(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }(n("66fd")), Mt = Object.prototype.toString, Ht = Object.prototype.hasOwnProperty, Ft = /-(\w)/g, Ut = x(function(t) {
            return t.replace(Ft, function(t, e) {
                return e ? e.toUpperCase() : "";
            });
        }), Lt = [ "invoke", "success", "fail", "complete", "returnValue" ], zt = {}, Vt = {}, Xt = {
            returnValue: function(t) {
                return P(t) ? t.then(function(t) {
                    return t[1];
                }).catch(function(t) {
                    return t[0];
                }) : t;
            }
        }, Wt = /^\$|sendNativeEvent|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/, Jt = /^create|Manager$/, Kt = [ "createBLEConnection" ], qt = [ "createBLEConnection" ], Gt = /^on|^off/;
        Promise.prototype.finally || (Promise.prototype.finally = function(t) {
            var e = this.constructor;
            return this.then(function(n) {
                return e.resolve(t()).then(function() {
                    return n;
                });
            }, function(n) {
                return e.resolve(t()).then(function() {
                    throw n;
                });
            });
        });
        var Yt = 1e-4, Zt = 750, Qt = !1, te = 0, ee = 0, ne = {
            promiseInterceptor: Xt
        }, re = Object.freeze({
            __proto__: null,
            upx2px: function(t, e) {
                if (0 === te && z(), 0 === (t = Number(t))) return 0;
                var n = t / Zt * (e || te);
                return n < 0 && (n = -n), 0 === (n = Math.floor(n + Yt)) && (n = 1 !== ee && Qt ? .5 : 1), 
                t < 0 ? -n : n;
            },
            addInterceptor: function(t, e) {
                "string" == typeof t && A(e) ? k(Vt[t] || (Vt[t] = {}), e) : A(t) && k(zt, t);
            },
            removeInterceptor: function(t, e) {
                "string" == typeof t ? A(e) ? E(Vt[t], e) : delete Vt[t] : A(t) && E(zt, t);
            },
            interceptors: ne
        }), ie = function() {
            function t(e, n) {
                var r = this;
                f(this, t), this.id = e, this.listener = {}, this.emitCache = {}, n && Object.keys(n).forEach(function(t) {
                    r.on(t, n[t]);
                });
            }
            return h(t, [ {
                key: "emit",
                value: function(t) {
                    for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
                    var i = this.listener[t];
                    if (!i) return (this.emitCache[t] || (this.emitCache[t] = [])).push(n);
                    i.forEach(function(t) {
                        t.fn.apply(t.fn, n);
                    }), this.listener[t] = i.filter(function(t) {
                        return "once" !== t.type;
                    });
                }
            }, {
                key: "on",
                value: function(t, e) {
                    this._addListener(t, "on", e), this._clearCache(t);
                }
            }, {
                key: "once",
                value: function(t, e) {
                    this._addListener(t, "once", e), this._clearCache(t);
                }
            }, {
                key: "off",
                value: function(t, e) {
                    var n = this.listener[t];
                    if (n) if (e) for (var r = 0; r < n.length; ) n[r].fn === e && (n.splice(r, 1), 
                    r--), r++; else delete this.listener[t];
                }
            }, {
                key: "_clearCache",
                value: function(t) {
                    var e = this.emitCache[t];
                    if (e) for (;e.length > 0; ) this.emit.apply(this, [ t ].concat(e.shift()));
                }
            }, {
                key: "_addListener",
                value: function(t, e, n) {
                    (this.listener[t] || (this.listener[t] = [])).push({
                        fn: n,
                        type: e
                    });
                }
            } ]), t;
        }(), oe = {}, ae = [], se = 0, ce = {
            redirectTo: {
                name: function(t) {
                    return "back" === t.exists && t.delta ? "navigateBack" : "redirectTo";
                },
                args: function(t) {
                    if ("back" === t.exists && t.url) {
                        var e = W(t.url);
                        if (-1 !== e) {
                            var n = getCurrentPages().length - 1 - e;
                            n > 0 && (t.delta = n);
                        }
                    }
                }
            },
            navigateTo: {
                args: function(t, e) {
                    var n = V(t.events).id;
                    t.url && (t.url = t.url + (-1 === t.url.indexOf("?") ? "?" : "&") + "__id__=" + n);
                },
                returnValue: function(t, e) {
                    t.eventChannel = X();
                }
            },
            previewImage: {
                args: function(t) {
                    var e = parseInt(t.current);
                    if (!isNaN(e)) {
                        var n = t.urls;
                        if (Array.isArray(n)) {
                            var r = n.length;
                            if (r) return e < 0 ? e = 0 : e >= r && (e = r - 1), e > 0 ? (t.current = n[e], 
                            t.urls = n.filter(function(t, r) {
                                return !(r < e) || t !== n[e];
                            })) : t.current = n[0], {
                                indicator: !1,
                                loop: !1
                            };
                        }
                    }
                }
            },
            getSystemInfo: {
                returnValue: J
            },
            getSystemInfoSync: {
                returnValue: J
            }
        }, ue = [ "vibrate", "preloadPage", "unPreloadPage", "loadSubPackage" ], fe = [], le = [ "success", "fail", "cancel", "complete" ], he = Object.create(null);
        [ "onTabBarMidButtonTap", "subscribePush", "unsubscribePush", "onPush", "offPush", "share" ].forEach(function(t) {
            he[t] = Z(t);
        });
        var pe = {
            oauth: [ "weixin" ],
            share: [ "weixin" ],
            payment: [ "wxpay" ],
            push: [ "weixin" ]
        }, de = Object.freeze({
            __proto__: null,
            getProvider: function(t) {
                var e = t.service, n = t.success, r = t.fail, i = t.complete, o = !1;
                pe[e] ? (o = {
                    errMsg: "getProvider:ok",
                    service: e,
                    provider: pe[e]
                }, m(n) && n(o)) : (o = {
                    errMsg: "getProvider:fail:服务[" + e + "]不存在"
                }, m(r) && r(o)), m(i) && i(o);
            }
        }), ve = function() {
            var t;
            return function() {
                return t || (t = new Nt.default()), t;
            };
        }(), ye = Object.freeze({
            __proto__: null,
            $on: function() {
                return Q(ve(), "$on", Array.prototype.slice.call(arguments));
            },
            $off: function() {
                return Q(ve(), "$off", Array.prototype.slice.call(arguments));
            },
            $once: function() {
                return Q(ve(), "$once", Array.prototype.slice.call(arguments));
            },
            $emit: function() {
                return Q(ve(), "$emit", Array.prototype.slice.call(arguments));
            }
        }), _e = Object.freeze({
            __proto__: null
        }), ge = Page, me = Component, be = /:/g, Ae = x(function(t) {
            return Ut(t.replace(be, "-"));
        });
        Page = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return et("onLoad", t), ge(t);
        }, Component = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return et("created", t), me(t);
        };
        var we = [ "onPullDownRefresh", "onReachBottom", "onAddToFavorites", "onShareTimeline", "onShareAppMessage", "onPageScroll", "onResize", "onTabItemTap" ], Oe = [ String, Number, Boolean, Object, Array, null ], xe = "~", Se = "^", $e = [ "onShow", "onHide", "onError", "onPageNotFound", "onThemeChange", "onUnhandledRejection" ], Ce = [ "__route__", "__wxExparserNodeId__", "__wxWebviewId__" ], ke = /[!'()*]/g, Ee = function(t) {
            return "%" + t.charCodeAt(0).toString(16);
        }, je = /%2C/g, Pe = function(t) {
            return encodeURIComponent(t).replace(ke, Ee).replace(je, ",");
        }, Te = [ "onShow", "onHide", "onUnload" ];
        Te.push.apply(Te, we), ue.forEach(function(t) {
            ce[t] = !1;
        }), fe.forEach(function(t) {
            var e = ce[t] && ce[t].name ? ce[t].name : t;
            wx.canIUse(e) || (ce[t] = !1);
        });
        var Re = {};
        "undefined" != typeof Proxy ? Re = new Proxy({}, {
            get: function(t, e) {
                return w(t, e) ? t[e] : re[e] ? re[e] : _e[e] ? L(e, _e[e]) : de[e] ? L(e, de[e]) : he[e] ? L(e, he[e]) : ye[e] ? ye[e] : w(wx, e) || w(ce, e) ? L(e, Y(e, wx[e])) : void 0;
            },
            set: function(t, e, n) {
                return t[e] = n, !0;
            }
        }) : (Object.keys(re).forEach(function(t) {
            Re[t] = re[t];
        }), Object.keys(he).forEach(function(t) {
            Re[t] = L(t, he[t]);
        }), Object.keys(de).forEach(function(t) {
            Re[t] = L(t, he[t]);
        }), Object.keys(ye).forEach(function(t) {
            Re[t] = ye[t];
        }), Object.keys(_e).forEach(function(t) {
            Re[t] = L(t, _e[t]);
        }), Object.keys(wx).forEach(function(t) {
            (w(wx, t) || w(ce, t)) && (Re[t] = L(t, Y(t, wx[t])));
        })), wx.createApp = Et, wx.createPage = It, wx.createComponent = Bt;
        var De = Re;
        e.default = De;
    }

// ==================== 元数据 ====================
// 此文件包含从 wx013b0e58fd2697ed 提取的 AES 算法实现
// 检测位置: 行 1118-1118
// 变量名: O
// 检测源: dynamic-function
