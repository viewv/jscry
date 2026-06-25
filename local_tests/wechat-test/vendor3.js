function e(e) {
    if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n;
    }
    return Array.from(e);
}

function t(e) {
    return function () {
        var t = e.apply(this, arguments);
        return new Promise(function (e, n) {
            function r(o, i) {
                try {
                    var a = t[o](i), s = a.value;
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    return void n(e);
                }
                if (!a.done) return Promise.resolve(s).then(function (e) {
                    r("next", e);
                }, function (e) {
                    r("throw", e);
                });
                e(s);
            }
            return r("next");
        });
    };
}

function n(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

var r = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
}, o = function () {
    function e(e, t) {
        var n = [], r = !0, o = !1, i = void 0;
        try {
            for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value),
                !t || n.length !== t); r = !0);
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            o = !0, i = e;
        } finally {
            try {
                !r && s.return && s.return();
            } finally {
                if (o) throw i;
            }
        }
        return n;
    }
    return function (t, n) {
        if (Array.isArray(t)) return t;
        if (Symbol.iterator in Object(t)) return e(t, n);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
}(), i = function () {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
        }
    }
    return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
    };
}(), a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
} : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};

(global.webpackJsonp = global.webpackJsonp || []).push([["common/vendor"], {
    "00a8": function (e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = n("cf45"), o = {
            data: function () {
                return {
                    isVideoPlaying: !1
                };
            },
            methods: {
                videoPlayHandler: function (e) {
                    var t = e.id, n = e.vid;
                    if (n || !t) {
                        if (n === this.videoPlayingModuleId) return;
                    } else if (t === this.videoPlayingModuleId) return;
                    (0, r.toggleSideBar)(!1);
                    var o = "#video_module_".concat(t), i = null, a = null;
                    t ? (i = this.selectComponent(o, this).$vm, a = i.selectComponent("#video_".concat(n), this).$vm) : a = this.selectComponent("#video_".concat(n), this).$vm,
                        this.videoPlayingModule && this.videoPlayingModule.pausePlay(), a ? (this.videoPlayingModule = a,
                            this.videoPlayingModuleId = n) : (this.videoPlayingModule = i, this.videoPlayingModuleId = t),
                        this.isVideoPlaying = !0;
                },
                videoPauseHandler: function (e) {
                    var t = e.id, n = e.vid;
                    if (n || !t) {
                        if (n !== this.videoPlayingModuleId) return;
                    } else if (t !== this.videoPlayingModuleId) return;
                    this.videoPlayingModule = null, this.videoPlayingModuleId = 0, this.isVideoPlaying = !1,
                        (0, r.toggleSideBar)(!0);
                },
                videoFullScreenHandler: function (e) {
                    var t = e.fullScreen;
                    (0, r.toggleTabBar)(!t);
                }
            }
        };
        t.default = o;
    },
    "083b": function (e, t, n) {
        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
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
        function a(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        var s = n("b101"), c = s.blankChar, u = n("2d6c"), l = wx.getSystemInfoSync(), f = l.screenWidth, p = l.system, d = function () {
            function e(t) {
                var n = this, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                r(this, e), a(this, "getName", function (e) {
                    return n.xml ? e : e.toLowerCase();
                }), a(this, "isClose", function () {
                    return ">" == n.data[n.i] || "/" == n.data[n.i] && ">" == n.data[n.i + 1];
                }), a(this, "section", function () {
                    return n.data.substring(n.start, n.i);
                }), a(this, "siblings", function () {
                    return n.STACK.length ? n.STACK[n.STACK.length - 1].children : n.DOM;
                }), this.attrs = {}, this.compress = o.compress, this.CssHandler = new u(o.tagStyle, f),
                    this.data = t, this.domain = o.domain, this.DOM = [], this.i = this.start = this.audioNum = this.imgNum = this.videoNum = 0,
                    this.protocol = this.domain && this.domain.includes("://") ? this.domain.split("://")[0] : "",
                    this.state = this.Text, this.STACK = [], this.useAnchor = o.useAnchor, this.xml = o.xml,
                    this.lineWrap = o.lineWrap, this.options = o;
            }
            return i(e, [{
                key: "parse",
                value: function () {
                    for (var e; e = this.data[this.i]; this.i++) this.state(e);
                    for (this.state == this.Text && this.setText(); this.STACK.length;) this.popNode(this.STACK.pop());
                    return this.DOM.length && (this.DOM[0].PoweredBy = "Parser", this.title && (this.DOM[0].title = this.title)),
                        this.DOM;
                }
            }, {
                key: "setAttr",
                value: function () {
                    var e = this.getName(this.attrName);
                    for (s.trustAttrs[e] && (this.attrVal ? this.attrs[e] = "src" == e ? this.getUrl(this.attrVal.replace(/&amp;/g, "&")) : this.attrVal : s.boolAttrs[e] && (this.attrs[e] = "T")),
                        this.attrVal = ""; c[this.data[this.i]];) this.i++;
                    this.isClose() ? this.setNode() : (this.start = this.i, this.state = this.AttrName);
                }
            }, {
                key: "setText",
                value: function () {
                    var e, t = this.section();
                    if (t) if (t = s.onText && s.onText(t, function () {
                        return e = !0;
                    }) || t, e) {
                        this.data = this.data.substr(0, this.start) + t + this.data.substr(this.i);
                        var n = this.start + t.length;
                        for (this.i = this.start; this.i < n; this.i++) this.state(this.data[this.i]);
                    } else {
                        if (!this.pre) {
                            for (var r, o = [], i = t.length; r = t[--i];) (!c[r] || !c[o[0]] && (r = " ")) && o.unshift(r);
                            if (" " == (t = o.join(""))) return;
                        }
                        for (var a, u, l = this.siblings(), f = -1; ;) {
                            if (-1 == (f = t.indexOf("&", f + 1))) break;
                            if (-1 == (a = t.indexOf(";", f + 2))) break;
                            "#" == t[f + 1] ? (u = parseInt(("x" == t[f + 2] ? "0" : "") + t.substring(f + 2, a)),
                                isNaN(u) || (t = t.substr(0, f) + String.fromCharCode(u) + t.substring(a + 1))) : "nbsp" == (u = t.substring(f + 1, a)) ? t = t.substr(0, f) + " " + t.substr(a + 1) : "lt" != u && "gt" != u && "amp" != u && "ensp" != u && "emsp" != u && "quot" != u && "apos" != u && (f && l.push({
                                    type: "text",
                                    text: t.substr(0, f)
                                }), l.push({
                                    type: "text",
                                    text: "&".concat(u, ";"),
                                    en: 1
                                }), t = t.substr(a + 1), f = -1);
                        }
                        t && l.push({
                            type: "text",
                            text: t
                        });
                    }
                }
            }, {
                key: "setNode",
                value: function () {
                    var e = {
                        name: this.tagName.toLowerCase(),
                        attrs: this.attrs
                    }, t = s.selfClosingTags[e.name] || this.xml && "/" == this.data[this.i];
                    if (this.options.nodes.length && (e.type = "node"), this.attrs = {}, s.ignoreTags[e.name]) if (t) if ("source" == e.name) {
                        var n = this.STACK[this.STACK.length - 1], r = e.attrs;
                        if (n && r.src) if ("video" == n.name || "audio" == n.name) n.attrs.source.push(r.src); else {
                            var o, i = r.media;
                            "picture" != n.name || n.attrs.src || r.src.indexOf(".webp") && p.includes("iOS") || !(!i || i.includes("px") && (-1 != (o = i.indexOf("min-width")) && -1 != (o = i.indexOf(":", o + 8)) && f > parseInt(i.substr(o + 1)) || -1 != (o = i.indexOf("max-width")) && -1 != (o = i.indexOf(":", o + 8)) && f < parseInt(i.substr(o + 1)))) || (n.attrs.src = r.src);
                        }
                    } else "base" != e.name || this.domain || (this.domain = e.attrs.href); else this.remove(e); else this.matchAttr(e),
                        t ? s.filter && 0 == s.filter(e, this) || this.siblings().push(e) : (e.children = [],
                            "pre" == e.name && s.highlight && (this.remove(e), this.pre = e.pre = !0), this.siblings().push(e),
                            this.STACK.push(e));
                    "/" == this.data[this.i] && this.i++, this.start = this.i + 1, this.state = this.Text;
                }
            }, {
                key: "remove",
                value: function (e) {
                    for (var t = e.name, n = this.i; ;) {
                        if (-1 == (this.i = this.data.indexOf("</", this.i + 1))) return void (this.i = "pre" == t || "svg" == t ? n : this.data.length);
                        for (this.start = this.i += 2; !c[this.data[this.i]] && !this.isClose();) this.i++;
                        if (this.getName(this.section()) == t) {
                            if ("pre" == t) return this.data = this.data.substr(0, n + 1) + s.highlight(this.data.substring(n + 1, this.i - 5), e.attrs) + this.data.substr(this.i - 5),
                                this.i = n;
                            if ("style" == t ? this.CssHandler.getStyle(this.data.substring(n + 1, this.i - 7)) : "title" == t && (this.title = this.data.substring(n + 1, this.i - 7)),
                                -1 == (this.i = this.data.indexOf(">", this.i)) && (this.i = this.data.length),
                                "svg" == t) {
                                var r = this.data.substring(n, this.i + 1);
                                e.attrs.xmlns || (r = ' xmlns="http://www.w3.org/2000/svg"' + r);
                                for (var o = n; "<" != this.data[n];) n--;
                                r = this.data.substring(n, o) + r;
                                var i = this.STACK[this.STACK.length - 1];
                                "100%" == e.attrs.width && i && (i.attrs.style || "").includes("inline") && (i.attrs.style = "width:300px;max-width:100%;" + i.attrs.style),
                                    this.siblings().push({
                                        name: "img",
                                        attrs: {
                                            src: "data:image/svg+xml;utf8," + r.replace(/#/g, "%23"),
                                            ignore: "T"
                                        }
                                    });
                            }
                            return;
                        }
                    }
                }
            }, {
                key: "matchAttr",
                value: function (e) {
                    var t = e.attrs, n = this.CssHandler.match(e.name, t, e) + (t.style || ""), r = {};
                    switch (t.id && (1 & this.compress ? t.id = void 0 : this.useAnchor && this.bubble()),
                    2 & this.compress && t.class && (t.class = void 0), e.name) {
                        case "img":
                            t["data-src"] && (t.src = t.src || t["data-src"], t["data-src"] = void 0), t.src && !t.ignore && (this.bubble() ? t.i = (this.imgNum++).toString() : t.ignore = "T");
                            break;

                        case "a":
                        case "ad":
                            this.bubble();
                            break;

                        case "font":
                            if (t.color && (r.color = t.color, t.color = void 0), t.face && (r["font-family"] = t.face,
                                t.face = void 0), t.size) {
                                var o = parseInt(t.size);
                                o < 1 ? o = 1 : o > 7 && (o = 7);
                                var i = ["xx-small", "x-small", "small", "medium", "large", "x-large", "xx-large"];
                                r["font-size"] = i[o - 1], t.size = void 0;
                            }
                            break;

                        case "video":
                        case "audio":
                            t.id ? this["".concat(e.name, "Num")]++ : t.id = e.name + ++this["".concat(e.name, "Num")],
                                "video" == e.name && (t.width && (n = "width:".concat(parseFloat(t.width) + (t.width.includes("%") ? "%" : "px"), ";").concat(n),
                                    t.width = void 0), t.height && (n = "height:".concat(parseFloat(t.height) + (t.height.includes("%") ? "%" : "px"), ";").concat(n),
                                        t.height = void 0), this.videoNum > 3 && (e.lazyLoad = !0)), t.source = [], t.src && t.source.push(t.src),
                                t.controls || t.autoplay || console.warn("存在没有 controls 属性的 ".concat(e.name, " 标签，可能导致无法播放"), e),
                                this.bubble();
                            break;

                        case "td":
                        case "th":
                            if (t.colspan || t.rowspan) for (var a, s = this.STACK.length; a = this.STACK[--s];) if ("table" == a.name) {
                                a.c = void 0;
                                break;
                            }
                    }
                    t.align && (r["text-align"] = t.align, t.align = void 0);
                    var u = n.replace(/&quot;/g, '"').replace(/&amp;/g, "&").split(";");
                    n = "";
                    for (var l = 0, p = u.length; l < p; l++) {
                        var d = u[l].split(":");
                        if (!(d.length < 2)) {
                            var h = d[0].trim().toLowerCase(), g = d.slice(1).join(":").trim();
                            g.includes("-webkit") || g.includes("-moz") || g.includes("-ms") || g.includes("-o") || g.includes("safe") ? n += ";".concat(h, ":").concat(g) : r[h] && !g.includes("import") && r[h].includes("import") || (r[h] = g);
                        }
                    }
                    for (var y in "img" == e.name && parseInt(r.width || t.width) > f && (r.height = "auto"),
                        r) {
                        var v = r[y];
                        if ((y.includes("flex") || "order" == y || "self-align" == y) && (e.c = 1), v.includes("url")) {
                            var m = v.indexOf("(");
                            if (-1 != m++) {
                                for (; '"' == v[m] || "'" == v[m] || c[v[m]];) m++;
                                v = v.substr(0, m) + this.getUrl(v.substr(m));
                            }
                        } else v.includes("rpx") ? v = v.replace(/[0-9.\s]*rpx/g, function (e) {
                            return parseFloat(e) * f / 750 + "px";
                        }) : "white-space" == y && v.includes("pre") && (this.pre = e.pre = !0);
                        n += ";".concat(y, ":").concat(v);
                    }
                    (n = n.substr(1)) && (t.style = n);
                }
            }, {
                key: "popNode",
                value: function (e) {
                    if (e.pre) {
                        e.pre = this.pre = void 0;
                        for (var t = this.STACK.length; t--;) this.STACK[t].pre && (this.pre = !0);
                    }
                    if ("head" == e.name || s.filter && 0 == s.filter(e, this)) return this.siblings().pop();
                    var n = e.attrs;
                    if ("picture" == e.name) return e.name = "img", n.src || "img" != (e.children[0] || "").name || (n.src = e.children[0].attrs.src),
                        n.src && !n.ignore && (n.i = (this.imgNum++).toString()), e.children = void 0;
                    if (s.blockTags[e.name] ? e.name = "div" : s.trustTags[e.name] || (e.name = "span"),
                        e.c) if ("ul" == e.name) {
                            for (var r = 1, o = this.STACK.length; o--;) "ul" == this.STACK[o].name && r++;
                            if (1 != r) for (var i = e.children.length; i--;) e.children[i].floor = r;
                        } else if ("ol" == e.name) for (var a, c = 0, u = 1; a = e.children[c++];) "li" == a.name && (a.type = "ol",
                            a.num = function (e, t) {
                                if ("a" == t) return String.fromCharCode(97 + (e - 1) % 26);
                                if ("A" == t) return String.fromCharCode(65 + (e - 1) % 26);
                                if ("i" == t || "I" == t) {
                                    e = (e - 1) % 99 + 1;
                                    var n = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"], r = (["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"][Math.floor(e / 10) - 1] || "") + (n[e % 10 - 1] || "");
                                    return "i" == t ? r.toLowerCase() : r;
                                }
                                return e;
                            }(u++, n.type) + ".");
                    if ("table" == e.name) {
                        var l = n.cellpadding, f = n.cellspacing, p = n.border;
                        e.c && (this.bubble(), l || (l = 2), f || (f = 2)), p && (n.style = "border:".concat(p, "px solid gray;").concat(n.style || "")),
                            f && (n.style = "border-spacing:".concat(f, "px;").concat(n.style || "")), (p || l) && function e(t) {
                                for (var n, r = 0; n = t[r]; r++) "th" == n.name || "td" == n.name ? (p && (n.attrs.style = "border:".concat(p, "px solid gray;").concat(n.attrs.style)),
                                    l && (n.attrs.style = "padding:".concat(l, "px;").concat(n.attrs.style))) : e(n.children || []);
                            }(e.children);
                    }
                    if (this.CssHandler.pop && this.CssHandler.pop(e), "div" == e.name && !Object.keys(n).length) {
                        var d = this.siblings();
                        !(e.children || []).length && this.lineWrap ? e.name = "br" : (e.children || []).length ? 1 == e.children.length && "div" == e.children[0].name && (d[d.length - 1] = e.children[0]) : d.pop();
                    }
                }
            }, {
                key: "bubble",
                value: function () {
                    for (var e, t = this.STACK.length; e = this.STACK[--t];) {
                        if (s.richOnlyTags[e.name]) return "table" != e.name || Object.hasOwnProperty.call(e, "c") || (e.c = 1),
                            !1;
                        e.c = 1;
                    }
                    return !0;
                }
            }, {
                key: "getUrl",
                value: function (e) {
                    return "/" == e[0] ? "/" == e[1] ? e = this.protocol + ":" + e : this.domain && (e = this.domain + e) : this.domain && 0 != e.indexOf("data:") && !e.includes("://") && (e = this.domain + "/" + e),
                        e;
                }
            }, {
                key: "Text",
                value: function (e) {
                    if ("<" == e) {
                        var t = this.data[this.i + 1], n = function (e) {
                            return e >= "a" && e <= "z" || e >= "A" && e <= "Z";
                        };
                        n(t) ? (this.setText(), this.start = this.i + 1, this.state = this.TagName) : "/" == t ? (this.setText(),
                            n(this.data[++this.i + 1]) ? (this.start = this.i + 1, this.state = this.EndTag) : this.Comment()) : "!" == t && (this.setText(),
                                this.Comment());
                    }
                }
            }, {
                key: "Comment",
                value: function () {
                    var e;
                    e = "--" == this.data.substring(this.i + 2, this.i + 4) ? "--\x3e" : "[CDATA[" == this.data.substring(this.i + 2, this.i + 9) ? "]]>" : ">",
                        -1 == (this.i = this.data.indexOf(e, this.i + 2)) ? this.i = this.data.length : this.i += e.length - 1,
                        this.start = this.i + 1, this.state = this.Text;
                }
            }, {
                key: "TagName",
                value: function (e) {
                    if (c[e]) {
                        for (this.tagName = this.section(); c[this.data[this.i]];) this.i++;
                        this.isClose() ? this.setNode() : (this.start = this.i, this.state = this.AttrName);
                    } else this.isClose() && (this.tagName = this.section(), this.setNode());
                }
            }, {
                key: "AttrName",
                value: function (e) {
                    var t = c[e];
                    if (t && (this.attrName = this.section(), e = this.data[this.i]), "=" == e) {
                        for (t || (this.attrName = this.section()); c[this.data[++this.i]];);
                        this.start = this.i--, this.state = this.AttrValue;
                    } else t ? this.setAttr() : this.isClose() && (this.attrName = this.section(), this.setAttr());
                }
            }, {
                key: "AttrValue",
                value: function (e) {
                    if ('"' == e || "'" == e) {
                        if (this.start++, -1 == (this.i = this.data.indexOf(e, this.i + 1))) return this.i = this.data.length;
                        this.attrVal = this.section(), this.i++;
                    } else {
                        for (; !c[this.data[this.i]] && !this.isClose(); this.i++);
                        this.attrVal = this.section();
                    }
                    this.setAttr();
                }
            }, {
                key: "EndTag",
                value: function (e) {
                    if (c[e] || ">" == e || "/" == e) {
                        for (var t = this.getName(this.section()), n = this.STACK.length; n-- && this.STACK[n].name != t;);
                        if (-1 != n) {
                            for (var r; (r = this.STACK.pop()).name != t;);
                            this.popNode(r);
                        } else "p" != t && "br" != t || this.siblings().push({
                            name: t,
                            attrs: {}
                        });
                        this.i = this.data.indexOf(">", this.i), this.start = this.i + 1, -1 == this.i ? this.i = this.data.length : this.state = this.Text;
                    }
                }
            }]), e;
        }();
        e.exports = d;
    },
    "104f": function (e, t) {
        function n(e) {
            return i(e) || o(e) || b(e) || r();
        }
        function r() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function o(e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
        }
        function i(e) {
            if (Array.isArray(e)) return w(e);
        }
        function s(e, t) {
            var n;
            if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                if (Array.isArray(e) || (n = b(e)) || t && e && "number" == typeof e.length) {
                    n && (e = n);
                    var r = 0, o = function () { };
                    return {
                        s: o,
                        n: function () {
                            return r >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[r++]
                            };
                        },
                        e: function (e) {
                            throw e;
                        },
                        f: o
                    };
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            var i, a = !0, s = !1;
            return {
                s: function () {
                    n = e[Symbol.iterator]();
                },
                n: function () {
                    var e = n.next();
                    return a = e.done, e;
                },
                e: function (e) {
                    s = !0, i = e;
                },
                f: function () {
                    try {
                        a || null == n.return || n.return();
                    } finally {
                        if (s) throw i;
                    }
                }
            };
        }
        function c(e) {
            return (c = "function" == typeof Symbol && "symbol" === a(Symbol.iterator) ? function (e) {
                return void 0 === e ? "undefined" : a(e);
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : a(e);
            })(e);
        }
        function u(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        function l(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && f(e, t);
        }
        function f(e, t) {
            return (f = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e;
            })(e, t);
        }
        function p(e) {
            var t = g();
            return function () {
                var n, r = y(e);
                if (t) {
                    var o = y(this).constructor;
                    n = Reflect.construct(r, arguments, o);
                } else n = r.apply(this, arguments);
                return d(this, n);
            };
        }
        function d(e, t) {
            return !t || "object" !== c(t) && "function" != typeof t ? h(e) : t;
        }
        function h(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e;
        }
        function g() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function () { })),
                    !0;
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                return !1;
            }
        }
        function y(e) {
            return (y = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
        }
        function v(e, t) {
            return _(e) || x(e, t) || b(e, t) || m();
        }
        function m() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function b(e, t) {
            if (e) {
                if ("string" == typeof e) return w(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? w(e, t) : void 0;
            }
        }
        function w(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r;
        }
        function x(e, t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                var n = [], r = !0, o = !1, i = void 0;
                try {
                    for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value),
                        !t || n.length !== t); r = !0);
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    o = !0, i = e;
                } finally {
                    try {
                        r || null == s.return || s.return();
                    } finally {
                        if (o) throw i;
                    }
                }
                return n;
            }
        }
        function _(e) {
            if (Array.isArray(e)) return e;
        }
        function I(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function A(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r);
            }
        }
        function S(e, t, n) {
            return t && A(e.prototype, t), n && A(e, n), e;
        }
        var O = {
            _MODULE: {
                _TYPE: {
                    PERFORMANCE_MODULE: 1
                },
                _KEY: {
                    PERFORMANCE_MODULE: "pe_m"
                }
            },
            _IDTYPE: {
                _PV_ID: 3
            },
            _REPORT: {
                _BASIC: {
                    _REPORT_TYPE: "b_rt",
                    _PV_ID: "b_pi",
                    _APP_ID: "b_a_i",
                    _SDK_VERSION: "b_sv",
                    _CLI_TIME: "b_ct",
                    _CROSS_DOMAIN_CLI_ID: "b_cdci",
                    _AID: "b_ai",
                    _BS_AID: "b_ba",
                    _BS_WID: "b_bw",
                    _BS_ID: "b_bi"
                },
                _URL: {
                    _URL: "u_u"
                },
                _CLIENT: {
                    _CLI_LANG: "c_l",
                    _CLI_SCREEN_TYPE: "c_st",
                    _CLI_DPR: "c_dpr"
                },
                _PERFORMANCE: {
                    _FINISH_TIME: "pe_ft"
                }
            }
        }, C = {
            host: "",
            ignores: [/log_h/i],
            reportUrl: ["http://monitor.aaa.cn/js/report", "https://report.fkw.com/js/report"],
            debug: !1
        }, D = [], k = {}, T = {}, E = new (function () {
            function e() {
                I(this, e), this.resetIt(), this.initData();
            }
            return S(e, [{
                key: "type",
                value: function (e) {
                    return Object.prototype.toString.call(e).match(/\[object\s(\w+)]/)[1].toLowerCase();
                }
            }, {
                key: "initData",
                value: function () {
                    T[O._REPORT._BASIC._PV_ID] = this.getId(O._IDTYPE._PV_ID), T[O._REPORT._BASIC._SDK_VERSION] = "1.1";
                    var e = wx.getSystemInfoSync();
                    T[O._REPORT._CLIENT._CLI_LANG] = e.language, T[O._REPORT._CLIENT._CLI_SCREEN_TYPE] = e.screenWidth * e.pixelRatio + "x" + e.screenHeight * e.pixelRatio,
                        T[O._REPORT._CLIENT._CLI_DPR] = e.pixelRatio;
                }
            }, {
                key: "resetIt",
                value: function () {
                    var e = wx.navigateTo, t = function (t) {
                        try {
                            getApp().globalData, getApp().globalData.jumpTime = new Date().getTime();
                        } catch (e) { }
                        return e.apply(this, arguments);
                    };
                    Object.defineProperty(wx, "navigateTo", {
                        get: function () {
                            return t;
                        }
                    });
                }
            }, {
                key: "ignore",
                value: function (e, t) {
                    var n = this;
                    return C.ignores.some(function (r) {
                        var o = n.type(r);
                        return "function" == o ? r(e, t) : "string" == o ? e.includes(r) : "regexp" == o && r.test(e);
                    });
                }
            }, {
                key: "sendReport",
                value: function (e) {
                    var t = Object.assign({}, T, e);
                    t[O._REPORT._BASIC._CLI_TIME] = new Date().getTime();
                    var n = t[O._REPORT._URL._URL];
                    if (!n || "currentUrl" == n) {
                        var r = this.getCurrentUrl();
                        t[O._REPORT._URL._URL] = r;
                        var o = wx.getSystemInfoSync();
                        if (/devtools/i.test(o.platform)) return;
                        if (-1 != r.indexOf("/index/index")) return;
                        if (-1 != r.indexOf("/videoList/videoList")) return;
                        if (-1 != r.indexOf("/advertising/advertising")) return;
                        if (-1 != r.indexOf("sourceOpenId")) return;
                    }
                    var i = {
                        header: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        url: C.reportUrl[C.debug ? 0 : 1],
                        data: t
                    };
                    wx.request(i);
                }
            }, {
                key: "getId",
                value: function (e) {
                    var t = e.toString(16);
                    if (t.length < 2) for (var n = 0; n < 2 - t.length; n++) t = "0" + t;
                    var r = ((4294967295 & new Date().getTime()) >>> 0).toString(16);
                    if (r.length < 8) for (n = 0; n < 8 - r.length; n++) r = "0" + r;
                    var o = (16777215 * Math.random() & 16777215).toString(16);
                    if (o.length < 6) for (n = 0; n < 6 - o.length; n++) o = "0" + o;
                    return t + r + o;
                }
            }, {
                key: "getCurrentUrl",
                value: function () {
                    var e = getCurrentPages().pop();
                    if (!e) return C.host + "/pages/error";
                    var t = C.host + "/" + e.route, n = Object.entries(e.options).map(function (e) {
                        var t = v(e, 2), n = t[0], r = t[1];
                        return encodeURIComponent(n) + "=" + encodeURIComponent(r);
                    }).join("&");
                    return n && (t += "?" + n), t;
                }
            }]), e;
        }())(), j = function () {
            function e() {
                I(this, e);
            }
            return S(e, [{
                key: "report",
                value: function (e) {
                    e[O._REPORT._BASIC._REPORT_TYPE] = this._type, E.sendReport(e);
                }
            }]), e;
        }(), P = function (e) {
            function t() {
                var e;
                return I(this, t), e = n.call(this), e._name = "性能监控模块", e._type = O._MODULE._TYPE.PERFORMANCE_MODULE,
                    e._key = O._MODULE._KEY.PERFORMANCE_MODULE, e;
            }
            l(t, j);
            var n = p(t);
            return S(t, [{
                key: "init",
                value: function () {
                    getApp().globalData;
                    var e = Date.now() - getApp().globalData.jumpTime;
                    e > 0 && this.report(u({}, O._REPORT._PERFORMANCE._FINISH_TIME, e));
                }
            }]), t;
        }();
        D.push(P);
        var L = new (function () {
            function e() {
                I(this, e);
            }
            return S(e, [{
                key: "install",
                value: function () {
                    var e, t = s(D);
                    try {
                        for (t.s(); !(e = t.n()).done;) {
                            var n = new (0, e.value)();
                            n.init(), k[n._key] = n;
                        }
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        t.e(e);
                    } finally {
                        t.f();
                    }
                    return this;
                }
            }, {
                key: "init",
                value: function () {
                    getApp().globalData;
                    var e, t = {
                        _APP_ID: 3031,
                        host: getApp().globalData.extConfigData.wxappDomainUrl
                    };
                    if (!t._APP_ID) throw "必须设置appid！";
                    return ["host", "debug"].forEach(function (e) {
                        t.hasOwnProperty(e) && (C[e] = t[e]);
                    }), t.ignores && Array.isArray(t.ignores) && (e = C.ignores).push.apply(e, n(t.ignores)),
                        this.set(t), this.install(), this;
                }
            }, {
                key: "set",
                value: function (e) {
                    for (var t = O._REPORT._BASIC, n = 0, r = Object.entries(e); n < r.length; n++) {
                        var o = v(r[n], 2), i = o[0], a = o[1];
                        t.hasOwnProperty(i) && (T[t[i]] = a);
                    }
                    return this;
                }
            }]), e;
        }())();
        e.exports = {
            sdk_version: "1.1",
            _DEF: O,
            _SETTINGS: C,
            _INTERFACE: L
        };
    },
    "133a": function (e, t, n) {
        function r(e) {
            return (r = "function" == typeof Symbol && "symbol" === a(Symbol.iterator) ? function (e) {
                return void 0 === e ? "undefined" : a(e);
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : a(e);
            })(e);
        }
        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function i(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r);
            }
        }
        function s(e, t, n) {
            return t && i(e.prototype, t), n && i(e, n), e;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var c = n("ca00"), u = n("cf45"), l = function (e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(n("5011")), f = n("503f"), p = new (function () {
            function e() {
                o(this, e), this.init();
            }
            return s(e, [{
                key: "init",
                value: function () {
                    var e = (0, c.getExtConfig)(), t = e.aid, n = e.isOem, r = e.wxappDomain;
                    this.isProduction = -1 == r.indexOf("wxapp.dev.faisco.com.cn"), f.setOptions({
                        appid: 3027,
                        canReport: this.isProduction,
                        url: n ? "https://report.webportal.top/js/report" : "https://report.fkw.com/js/report",
                        login_aid: t,
                        login_sid: 0
                    }), this.qzLog = f, this.handleMsg = f.handleMsg.bind(f), this.track = f.track.bind(f),
                        this.setOptions = f.setOptions.bind(f);
                }
            }, {
                key: "checkCanReport",
                value: function (e) {
                    var t = this;
                    this.cliId ? e && e() : (0, u.getWXAppInfo)().then(function () {
                        var n = getApp().globalData.wxappInfo;
                        t.cliId = n._cliid, t.config.cliId = t.cliId, e && e();
                    });
                }
            }, {
                key: "qzReport",
                value: function (e) {
                    var t = this;
                    this.checkCanReport(function () {
                        var n = e.eventName, o = e.properties;
                        "string" != typeof n && console.log("eventName类型要为string！！！");
                        var i = {}, a = l.default[n].properties, s = 0;
                        for (var c in a) {
                            if (a[c].type !== r(o[s])) return void console.log("".concat(c, "类型要为").concat(a[c].type, "！！！"));
                            var u = a[c].filter;
                            i[c] = u ? u(o[s]) : o[s], s++;
                        }
                        console.log(n, i), t.track(n, i);
                    });
                }
            }]), e;
        }())();
        t.default = p;
    },
    1819: function (e, t) {
        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function r(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r);
            }
        }
        function o(e, t, n) {
            return t && r(e.prototype, t), n && r(e, n), e;
        }
        var i = {
            KEY_ERR: 311,
            KEY_ERR_MSG: "key格式错误",
            PARAM_ERR: 310,
            PARAM_ERR_MSG: "请求参数信息有误",
            SYSTEM_ERR: 600,
            SYSTEM_ERR_MSG: "系统错误",
            WX_ERR_CODE: 1e3,
            WX_OK_CODE: 200
        }, a = "https://apis.map.qq.com/ws/", s = a + "geocoder/v1/", c = {
            location2query: function (e) {
                if ("string" == typeof e) return e;
                for (var t = "", n = 0; n < e.length; n++) {
                    var r = e[n];
                    t && (t += ";"), r.location && (t = t + r.location.lat + "," + r.location.lng),
                        r.latitude && r.longitude && (t = t + r.latitude + "," + r.longitude);
                }
                return t;
            },
            getWXLocation: function (e, t, n) {
                wx.getLocation({
                    type: "gcj02",
                    success: e,
                    fail: t,
                    complete: n
                });
            },
            getLocationParam: function (e) {
                return "string" == typeof e && (e = 2 === e.split(",").length ? {
                    latitude: e.split(",")[0],
                    longitude: e.split(",")[1]
                } : {}), e;
            },
            polyfillParam: function (e) {
                e.success = e.success || function () { }, e.fail = e.fail || function () { }, e.complete = e.complete || function () { };
            },
            checkParamKeyEmpty: function (e, t) {
                if (!e[t]) {
                    var n = this.buildErrorConfig(i.PARAM_ERR, i.PARAM_ERR_MSG + t + "参数格式有误");
                    return e.fail(n), e.complete(n), !0;
                }
                return !1;
            },
            checkKeyword: function (e) {
                return !this.checkParamKeyEmpty(e, "keyword");
            },
            checkLocation: function (e) {
                var t = this.getLocationParam(e.location);
                if (!t || !t.latitude || !t.longitude) {
                    var n = this.buildErrorConfig(i.PARAM_ERR, i.PARAM_ERR_MSG + " location参数格式有误");
                    return e.fail(n), e.complete(n), !1;
                }
                return !0;
            },
            buildErrorConfig: function (e, t) {
                return {
                    status: e,
                    message: t
                };
            },
            buildWxRequestConfig: function (e, t) {
                var n = this;
                return t.header = {
                    "content-type": "application/json"
                }, t.method = "GET", t.success = function (t) {
                    var n = t.data;
                    0 === n.status ? e.success(n) : e.fail(n);
                }, t.fail = function (t) {
                    t.statusCode = i.WX_ERR_CODE, e.fail(n.buildErrorConfig(i.WX_ERR_CODE, t.errMsg));
                }, t.complete = function (t) {
                    switch (+t.statusCode) {
                        case i.WX_ERR_CODE:
                            e.complete(n.buildErrorConfig(i.WX_ERR_CODE, t.errMsg));
                            break;

                        case i.WX_OK_CODE:
                            var r = t.data;
                            0 === r.status ? e.complete(r) : e.complete(n.buildErrorConfig(r.status, r.message));
                            break;

                        default:
                            e.complete(n.buildErrorConfig(i.SYSTEM_ERR, i.SYSTEM_ERR_MSG));
                    }
                }, t;
            },
            locationProcess: function (e, t, n, r) {
                var o = this;
                n = n || function (t) {
                    t.statusCode = i.WX_ERR_CODE, e.fail(o.buildErrorConfig(i.WX_ERR_CODE, t.errMsg));
                }, r = r || function (t) {
                    t.statusCode == i.WX_ERR_CODE && e.complete(o.buildErrorConfig(i.WX_ERR_CODE, t.errMsg));
                }, e.location ? o.checkLocation(e) && t(c.getLocationParam(e.location)) : o.getWXLocation(t, n, r);
            }
        }, u = function () {
            function e(t) {
                if (n(this, e), !t.key) throw Error("key值不能为空");
                this.key = t.key;
            }
            return o(e, [{
                key: "search",
                value: function (e) {
                    var t = this;
                    if (e = e || {}, c.polyfillParam(e), c.checkKeyword(e)) {
                        var n = {
                            keyword: e.keyword,
                            orderby: e.orderby || "_distance",
                            page_size: e.page_size || 10,
                            page_index: e.page_index || 1,
                            output: "json",
                            key: t.key
                        };
                        e.address_format && (n.address_format = e.address_format), e.filter && (n.filter = e.filter);
                        var r = e.distance || "1000", o = e.auto_extend || 1;
                        c.locationProcess(e, function (t) {
                            n.boundary = "nearby(" + t.latitude + "," + t.longitude + "," + r + "," + o + ")",
                                wx.request(c.buildWxRequestConfig(e, {
                                    url: "https://apis.map.qq.com/ws/place/v1/search",
                                    data: n
                                }));
                        });
                    }
                }
            }, {
                key: "getSuggestion",
                value: function (e) {
                    var t = this;
                    if (e = e || {}, c.polyfillParam(e), c.checkKeyword(e)) {
                        var n = {
                            keyword: e.keyword,
                            region: e.region || "全国",
                            region_fix: e.region_fix || 0,
                            policy: e.policy || 0,
                            output: "json",
                            key: t.key
                        };
                        wx.request(c.buildWxRequestConfig(e, {
                            url: "https://apis.map.qq.com/ws/place/v1/suggestion",
                            data: n
                        }));
                    }
                }
            }, {
                key: "reverseGeocoder",
                value: function (e) {
                    var t = this;
                    e = e || {}, c.polyfillParam(e);
                    var n = {
                        coord_type: e.coord_type || 5,
                        get_poi: e.get_poi || 0,
                        output: "json",
                        key: t.key
                    };
                    e.poi_options && (n.poi_options = e.poi_options);
                    c.locationProcess(e, function (t) {
                        n.location = t.latitude + "," + t.longitude, wx.request(c.buildWxRequestConfig(e, {
                            url: s,
                            data: n
                        }));
                    });
                }
            }, {
                key: "geocoder",
                value: function (e) {
                    var t = this;
                    if (e = e || {}, c.polyfillParam(e), !c.checkParamKeyEmpty(e, "address")) {
                        var n = {
                            address: e.address,
                            output: "json",
                            key: t.key
                        };
                        wx.request(c.buildWxRequestConfig(e, {
                            url: s,
                            data: n
                        }));
                    }
                }
            }, {
                key: "getCityList",
                value: function (e) {
                    var t = this;
                    e = e || {}, c.polyfillParam(e);
                    var n = {
                        output: "json",
                        key: t.key
                    };
                    wx.request(c.buildWxRequestConfig(e, {
                        url: "https://apis.map.qq.com/ws/district/v1/list",
                        data: n
                    }));
                }
            }, {
                key: "getDistrictByCityId",
                value: function (e) {
                    var t = this;
                    if (e = e || {}, c.polyfillParam(e), !c.checkParamKeyEmpty(e, "id")) {
                        var n = {
                            id: e.id || "",
                            output: "json",
                            key: t.key
                        };
                        wx.request(c.buildWxRequestConfig(e, {
                            url: "https://apis.map.qq.com/ws/district/v1/getchildren",
                            data: n
                        }));
                    }
                }
            }, {
                key: "calculateDistance",
                value: function (e) {
                    var t = this;
                    if (e = e || {}, c.polyfillParam(e), !c.checkParamKeyEmpty(e, "to")) {
                        var n = {
                            mode: e.mode || "walking",
                            to: c.location2query(e.to),
                            output: "json",
                            key: t.key
                        };
                        e.from && (e.location = e.from), c.locationProcess(e, function (t) {
                            n.from = t.latitude + "," + t.longitude, wx.request(c.buildWxRequestConfig(e, {
                                url: "https://apis.map.qq.com/ws/distance/v1/",
                                data: n
                            }));
                        });
                    }
                }
            }]), e;
        }();
        e.exports = u;
    },
    "19e7": function (e, t) {
        function n(e, t) {
            var n = (65535 & e) + (65535 & t);
            return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n;
        }
        function r(e, t) {
            return e << t | e >>> 32 - t;
        }
        function o(e, t, o, i, a, s) {
            return n(r(n(n(t, e), n(i, s)), a), o);
        }
        function i(e, t, n, r, i, a, s) {
            return o(t & n | ~t & r, e, t, i, a, s);
        }
        function a(e, t, n, r, i, a, s) {
            return o(t & r | n & ~r, e, t, i, a, s);
        }
        function s(e, t, n, r, i, a, s) {
            return o(t ^ n ^ r, e, t, i, a, s);
        }
        function c(e, t, n, r, i, a, s) {
            return o(n ^ (t | ~r), e, t, i, a, s);
        }
        function u(e) {
            for (var t = 1732584193, r = -271733879, o = -1732584194, u = 271733878, l = 0; l < e.length; l += 16) {
                var f = t, p = r, d = o, h = u;
                r = c(r = c(r = c(r = c(r = s(r = s(r = s(r = s(r = a(r = a(r = a(r = a(r = i(r = i(r = i(r = i(r, o = i(o, u = i(u, t = i(t, r, o, u, e[l + 0], 7, -680876936), r, o, e[l + 1], 12, -389564586), t, r, e[l + 2], 17, 606105819), u, t, e[l + 3], 22, -1044525330), o = i(o, u = i(u, t = i(t, r, o, u, e[l + 4], 7, -176418897), r, o, e[l + 5], 12, 1200080426), t, r, e[l + 6], 17, -1473231341), u, t, e[l + 7], 22, -45705983), o = i(o, u = i(u, t = i(t, r, o, u, e[l + 8], 7, 1770035416), r, o, e[l + 9], 12, -1958414417), t, r, e[l + 10], 17, -42063), u, t, e[l + 11], 22, -1990404162), o = i(o, u = i(u, t = i(t, r, o, u, e[l + 12], 7, 1804603682), r, o, e[l + 13], 12, -40341101), t, r, e[l + 14], 17, -1502002290), u, t, e[l + 15], 22, 1236535329), o = a(o, u = a(u, t = a(t, r, o, u, e[l + 1], 5, -165796510), r, o, e[l + 6], 9, -1069501632), t, r, e[l + 11], 14, 643717713), u, t, e[l + 0], 20, -373897302), o = a(o, u = a(u, t = a(t, r, o, u, e[l + 5], 5, -701558691), r, o, e[l + 10], 9, 38016083), t, r, e[l + 15], 14, -660478335), u, t, e[l + 4], 20, -405537848), o = a(o, u = a(u, t = a(t, r, o, u, e[l + 9], 5, 568446438), r, o, e[l + 14], 9, -1019803690), t, r, e[l + 3], 14, -187363961), u, t, e[l + 8], 20, 1163531501), o = a(o, u = a(u, t = a(t, r, o, u, e[l + 13], 5, -1444681467), r, o, e[l + 2], 9, -51403784), t, r, e[l + 7], 14, 1735328473), u, t, e[l + 12], 20, -1926607734), o = s(o, u = s(u, t = s(t, r, o, u, e[l + 5], 4, -378558), r, o, e[l + 8], 11, -2022574463), t, r, e[l + 11], 16, 1839030562), u, t, e[l + 14], 23, -35309556), o = s(o, u = s(u, t = s(t, r, o, u, e[l + 1], 4, -1530992060), r, o, e[l + 4], 11, 1272893353), t, r, e[l + 7], 16, -155497632), u, t, e[l + 10], 23, -1094730640), o = s(o, u = s(u, t = s(t, r, o, u, e[l + 13], 4, 681279174), r, o, e[l + 0], 11, -358537222), t, r, e[l + 3], 16, -722521979), u, t, e[l + 6], 23, 76029189), o = s(o, u = s(u, t = s(t, r, o, u, e[l + 9], 4, -640364487), r, o, e[l + 12], 11, -421815835), t, r, e[l + 15], 16, 530742520), u, t, e[l + 2], 23, -995338651), o = c(o, u = c(u, t = c(t, r, o, u, e[l + 0], 6, -198630844), r, o, e[l + 7], 10, 1126891415), t, r, e[l + 14], 15, -1416354905), u, t, e[l + 5], 21, -57434055), o = c(o, u = c(u, t = c(t, r, o, u, e[l + 12], 6, 1700485571), r, o, e[l + 3], 10, -1894986606), t, r, e[l + 10], 15, -1051523), u, t, e[l + 1], 21, -2054922799), o = c(o, u = c(u, t = c(t, r, o, u, e[l + 8], 6, 1873313359), r, o, e[l + 15], 10, -30611744), t, r, e[l + 6], 15, -1560198380), u, t, e[l + 13], 21, 1309151649), o = c(o, u = c(u, t = c(t, r, o, u, e[l + 4], 6, -145523070), r, o, e[l + 11], 10, -1120210379), t, r, e[l + 2], 15, 718787259), u, t, e[l + 9], 21, -343485551),
                    t = n(t, f), r = n(r, p), o = n(o, d), u = n(u, h);
            }
            return [t, r, o, u];
        }
        function l(e) {
            for (var t = "0123456789abcdef", n = "", r = 0; r < 4 * e.length; r++) n += t.charAt(e[r >> 2] >> r % 4 * 8 + 4 & 15) + t.charAt(e[r >> 2] >> r % 4 * 8 & 15);
            return n;
        }
        function f(e) {
            for (var t = 1 + (e.length + 8 >> 6), n = new Array(16 * t), r = 0; r < 16 * t; r++) n[r] = 0;
            for (r = 0; r < e.length; r++) n[r >> 2] |= (255 & e.charCodeAt(r)) << r % 4 * 8;
            return n[r >> 2] |= 128 << r % 4 * 8, n[16 * t - 2] = 8 * e.length, n;
        }
        e.exports = {
            hexMD5: function (e) {
                return l(u(f(e)));
            }
        };
    },
    "1c20": function (e, s, c) {
        c.r(s), function (e) {
            function c(e, t, n) {
                return n = {
                    path: t,
                    exports: {},
                    require: function (e, t) {
                        return u((void 0 === t || null === t) && n.path);
                    }
                }, e(n, n.exports), n.exports;
            }
            function u() {
                throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
            }
            function l() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = e.split("?"), r = Object.keys(t).map(function (e) {
                    return e + "=" + t[e];
                }).join("&");
                return r ? n[0] + "?" + r : n[0];
            }
            var f = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {}, p = c(function (e) {
                !function (t) {
                    var n, r = {};
                    r.VERSION = "1.6.0";
                    var o = {}, i = function (e, t) {
                        return function () {
                            return t.apply(e, arguments);
                        };
                    }, a = function () {
                        var e, t, n = arguments, r = n[0];
                        for (t = 1; t < n.length; t++) for (e in n[t]) !(e in r) && n[t].hasOwnProperty(e) && (r[e] = n[t][e]);
                        return r;
                    }, s = function (e, t) {
                        return {
                            value: e,
                            name: t
                        };
                    };
                    r.TRACE = s(1, "TRACE"), r.DEBUG = s(2, "DEBUG"), r.INFO = s(3, "INFO"), r.TIME = s(4, "TIME"),
                        r.WARN = s(5, "WARN"), r.ERROR = s(8, "ERROR"), r.OFF = s(99, "OFF");
                    var c = function (e) {
                        this.context = e, this.setLevel(e.filterLevel), this.log = this.info;
                    };
                    c.prototype = {
                        setLevel: function (e) {
                            e && "value" in e && (this.context.filterLevel = e);
                        },
                        getLevel: function () {
                            return this.context.filterLevel;
                        },
                        enabledFor: function (e) {
                            var t = this.context.filterLevel;
                            return e.value >= t.value;
                        },
                        trace: function () {
                            this.invoke(r.TRACE, arguments);
                        },
                        debug: function () {
                            this.invoke(r.DEBUG, arguments);
                        },
                        info: function () {
                            this.invoke(r.INFO, arguments);
                        },
                        warn: function () {
                            this.invoke(r.WARN, arguments);
                        },
                        error: function () {
                            this.invoke(r.ERROR, arguments);
                        },
                        time: function (e) {
                            "string" == typeof e && e.length > 0 && this.invoke(r.TIME, [e, "start"]);
                        },
                        timeEnd: function (e) {
                            "string" == typeof e && e.length > 0 && this.invoke(r.TIME, [e, "end"]);
                        },
                        invoke: function (e, t) {
                            n && this.enabledFor(e) && n(t, a({
                                level: e
                            }, this.context));
                        }
                    };
                    var u = new c({
                        filterLevel: r.OFF
                    });
                    (function () {
                        var e = r;
                        e.enabledFor = i(u, u.enabledFor), e.trace = i(u, u.trace), e.debug = i(u, u.debug),
                            e.time = i(u, u.time), e.timeEnd = i(u, u.timeEnd), e.info = i(u, u.info), e.warn = i(u, u.warn),
                            e.error = i(u, u.error), e.log = e.info;
                    })(), r.setHandler = function (e) {
                        n = e;
                    }, r.setLevel = function (e) {
                        for (var t in u.setLevel(e), o) o.hasOwnProperty(t) && o[t].setLevel(e);
                    }, r.getLevel = function () {
                        return u.getLevel();
                    }, r.get = function (e) {
                        return o[e] || (o[e] = new c(a({
                            name: e
                        }, u.context)));
                    }, r.createDefaultHandler = function (e) {
                        (e = e || {}).formatter = e.formatter || function (e, t) {
                            t.name && e.unshift("[" + t.name + "]");
                        };
                        var t = {}, n = function (e, t) {
                            Function.prototype.apply.call(e, console, t);
                        };
                        return "undefined" == typeof console ? function () { } : function (o, i) {
                            o = Array.prototype.slice.call(o);
                            var a, s = console.log;
                            i.level === r.TIME ? (a = (i.name ? "[" + i.name + "] " : "") + o[0], "start" === o[1] ? console.time ? console.time(a) : t[a] = new Date().getTime() : console.timeEnd ? console.timeEnd(a) : n(s, [a + ": " + (new Date().getTime() - t[a]) + "ms"])) : (i.level === r.WARN && console.warn ? s = console.warn : i.level === r.ERROR && console.error ? s = console.error : i.level === r.INFO && console.info ? s = console.info : i.level === r.DEBUG && console.debug ? s = console.debug : i.level === r.TRACE && console.trace && (s = console.trace),
                                e.formatter(o, i), n(s, o));
                        };
                    }, r.useDefaults = function (e) {
                        r.setLevel(e && e.defaultLevel || r.DEBUG), r.setHandler(r.createDefaultHandler(e));
                    }, e.exports ? e.exports = r : (r._prevLogger = t.Logger, r.noConflict = function () {
                        return t.Logger = r._prevLogger, r;
                    }, t.Logger = r);
                }(f);
            }), d = c(function (e, t) {
                !function (t) {
                    e.exports = t();
                }(function (e) {
                    function t(e, t) {
                        var n = e[0], r = e[1], o = e[2], i = e[3];
                        r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r & o | ~r & i) + t[0] - 680876936 | 0) << 7 | n >>> 25) + r | 0) & r | ~n & o) + t[1] - 389564586 | 0) << 12 | i >>> 20) + n | 0) & n | ~i & r) + t[2] + 606105819 | 0) << 17 | o >>> 15) + i | 0) & i | ~o & n) + t[3] - 1044525330 | 0) << 22 | r >>> 10) + o | 0,
                            r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r & o | ~r & i) + t[4] - 176418897 | 0) << 7 | n >>> 25) + r | 0) & r | ~n & o) + t[5] + 1200080426 | 0) << 12 | i >>> 20) + n | 0) & n | ~i & r) + t[6] - 1473231341 | 0) << 17 | o >>> 15) + i | 0) & i | ~o & n) + t[7] - 45705983 | 0) << 22 | r >>> 10) + o | 0,
                            r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r & o | ~r & i) + t[8] + 1770035416 | 0) << 7 | n >>> 25) + r | 0) & r | ~n & o) + t[9] - 1958414417 | 0) << 12 | i >>> 20) + n | 0) & n | ~i & r) + t[10] - 42063 | 0) << 17 | o >>> 15) + i | 0) & i | ~o & n) + t[11] - 1990404162 | 0) << 22 | r >>> 10) + o | 0,
                            r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r & o | ~r & i) + t[12] + 1804603682 | 0) << 7 | n >>> 25) + r | 0) & r | ~n & o) + t[13] - 40341101 | 0) << 12 | i >>> 20) + n | 0) & n | ~i & r) + t[14] - 1502002290 | 0) << 17 | o >>> 15) + i | 0) & i | ~o & n) + t[15] + 1236535329 | 0) << 22 | r >>> 10) + o | 0,
                            r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r & i | o & ~i) + t[1] - 165796510 | 0) << 5 | n >>> 27) + r | 0) & o | r & ~o) + t[6] - 1069501632 | 0) << 9 | i >>> 23) + n | 0) & r | n & ~r) + t[11] + 643717713 | 0) << 14 | o >>> 18) + i | 0) & n | i & ~n) + t[0] - 373897302 | 0) << 20 | r >>> 12) + o | 0,
                            r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r & i | o & ~i) + t[5] - 701558691 | 0) << 5 | n >>> 27) + r | 0) & o | r & ~o) + t[10] + 38016083 | 0) << 9 | i >>> 23) + n | 0) & r | n & ~r) + t[15] - 660478335 | 0) << 14 | o >>> 18) + i | 0) & n | i & ~n) + t[4] - 405537848 | 0) << 20 | r >>> 12) + o | 0,
                            r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r & i | o & ~i) + t[9] + 568446438 | 0) << 5 | n >>> 27) + r | 0) & o | r & ~o) + t[14] - 1019803690 | 0) << 9 | i >>> 23) + n | 0) & r | n & ~r) + t[3] - 187363961 | 0) << 14 | o >>> 18) + i | 0) & n | i & ~n) + t[8] + 1163531501 | 0) << 20 | r >>> 12) + o | 0,
                            r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r & i | o & ~i) + t[13] - 1444681467 | 0) << 5 | n >>> 27) + r | 0) & o | r & ~o) + t[2] - 51403784 | 0) << 9 | i >>> 23) + n | 0) & r | n & ~r) + t[7] + 1735328473 | 0) << 14 | o >>> 18) + i | 0) & n | i & ~n) + t[12] - 1926607734 | 0) << 20 | r >>> 12) + o | 0,
                            r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r ^ o ^ i) + t[5] - 378558 | 0) << 4 | n >>> 28) + r | 0) ^ r ^ o) + t[8] - 2022574463 | 0) << 11 | i >>> 21) + n | 0) ^ n ^ r) + t[11] + 1839030562 | 0) << 16 | o >>> 16) + i | 0) ^ i ^ n) + t[14] - 35309556 | 0) << 23 | r >>> 9) + o | 0,
                            r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r ^ o ^ i) + t[1] - 1530992060 | 0) << 4 | n >>> 28) + r | 0) ^ r ^ o) + t[4] + 1272893353 | 0) << 11 | i >>> 21) + n | 0) ^ n ^ r) + t[7] - 155497632 | 0) << 16 | o >>> 16) + i | 0) ^ i ^ n) + t[10] - 1094730640 | 0) << 23 | r >>> 9) + o | 0,
                            r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r ^ o ^ i) + t[13] + 681279174 | 0) << 4 | n >>> 28) + r | 0) ^ r ^ o) + t[0] - 358537222 | 0) << 11 | i >>> 21) + n | 0) ^ n ^ r) + t[3] - 722521979 | 0) << 16 | o >>> 16) + i | 0) ^ i ^ n) + t[6] + 76029189 | 0) << 23 | r >>> 9) + o | 0,
                            r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r ^ o ^ i) + t[9] - 640364487 | 0) << 4 | n >>> 28) + r | 0) ^ r ^ o) + t[12] - 421815835 | 0) << 11 | i >>> 21) + n | 0) ^ n ^ r) + t[15] + 530742520 | 0) << 16 | o >>> 16) + i | 0) ^ i ^ n) + t[2] - 995338651 | 0) << 23 | r >>> 9) + o | 0,
                            r = ((r += ((i = ((i += (r ^ ((n = ((n += (o ^ (r | ~i)) + t[0] - 198630844 | 0) << 6 | n >>> 26) + r | 0) | ~o)) + t[7] + 1126891415 | 0) << 10 | i >>> 22) + n | 0) ^ ((o = ((o += (n ^ (i | ~r)) + t[14] - 1416354905 | 0) << 15 | o >>> 17) + i | 0) | ~n)) + t[5] - 57434055 | 0) << 21 | r >>> 11) + o | 0,
                            r = ((r += ((i = ((i += (r ^ ((n = ((n += (o ^ (r | ~i)) + t[12] + 1700485571 | 0) << 6 | n >>> 26) + r | 0) | ~o)) + t[3] - 1894986606 | 0) << 10 | i >>> 22) + n | 0) ^ ((o = ((o += (n ^ (i | ~r)) + t[10] - 1051523 | 0) << 15 | o >>> 17) + i | 0) | ~n)) + t[1] - 2054922799 | 0) << 21 | r >>> 11) + o | 0,
                            r = ((r += ((i = ((i += (r ^ ((n = ((n += (o ^ (r | ~i)) + t[8] + 1873313359 | 0) << 6 | n >>> 26) + r | 0) | ~o)) + t[15] - 30611744 | 0) << 10 | i >>> 22) + n | 0) ^ ((o = ((o += (n ^ (i | ~r)) + t[6] - 1560198380 | 0) << 15 | o >>> 17) + i | 0) | ~n)) + t[13] + 1309151649 | 0) << 21 | r >>> 11) + o | 0,
                            r = ((r += ((i = ((i += (r ^ ((n = ((n += (o ^ (r | ~i)) + t[4] - 145523070 | 0) << 6 | n >>> 26) + r | 0) | ~o)) + t[11] - 1120210379 | 0) << 10 | i >>> 22) + n | 0) ^ ((o = ((o += (n ^ (i | ~r)) + t[2] + 718787259 | 0) << 15 | o >>> 17) + i | 0) | ~n)) + t[9] - 343485551 | 0) << 21 | r >>> 11) + o | 0,
                            e[0] = n + e[0] | 0, e[1] = r + e[1] | 0, e[2] = o + e[2] | 0, e[3] = i + e[3] | 0;
                    }
                    function n(e) {
                        var t, n = [];
                        for (t = 0; t < 64; t += 4) n[t >> 2] = e.charCodeAt(t) + (e.charCodeAt(t + 1) << 8) + (e.charCodeAt(t + 2) << 16) + (e.charCodeAt(t + 3) << 24);
                        return n;
                    }
                    function r(e) {
                        var t, n = [];
                        for (t = 0; t < 64; t += 4) n[t >> 2] = e[t] + (e[t + 1] << 8) + (e[t + 2] << 16) + (e[t + 3] << 24);
                        return n;
                    }
                    function o(e) {
                        var r, o, i, a, s, c, u = e.length, l = [1732584193, -271733879, -1732584194, 271733878];
                        for (r = 64; r <= u; r += 64) t(l, n(e.substring(r - 64, r)));
                        for (o = (e = e.substring(r - 64)).length, i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                            r = 0; r < o; r += 1) i[r >> 2] |= e.charCodeAt(r) << (r % 4 << 3);
                        if (i[r >> 2] |= 128 << (r % 4 << 3), r > 55) for (t(l, i), r = 0; r < 16; r += 1) i[r] = 0;
                        return a = 8 * u, a = a.toString(16).match(/(.*?)(.{0,8})$/), s = parseInt(a[2], 16),
                            c = parseInt(a[1], 16) || 0, i[14] = s, i[15] = c, t(l, i), l;
                    }
                    function i(e) {
                        var n, o, i, a, s, c, u = e.length, l = [1732584193, -271733879, -1732584194, 271733878];
                        for (n = 64; n <= u; n += 64) t(l, r(e.subarray(n - 64, n)));
                        for (o = (e = n - 64 < u ? e.subarray(n - 64) : new Uint8Array(0)).length, i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                            n = 0; n < o; n += 1) i[n >> 2] |= e[n] << (n % 4 << 3);
                        if (i[n >> 2] |= 128 << (n % 4 << 3), n > 55) for (t(l, i), n = 0; n < 16; n += 1) i[n] = 0;
                        return a = 8 * u, a = a.toString(16).match(/(.*?)(.{0,8})$/), s = parseInt(a[2], 16),
                            c = parseInt(a[1], 16) || 0, i[14] = s, i[15] = c, t(l, i), l;
                    }
                    function a(e) {
                        var t, n = "";
                        for (t = 0; t < 4; t += 1) n += h[e >> 8 * t + 4 & 15] + h[e >> 8 * t & 15];
                        return n;
                    }
                    function s(e) {
                        var t;
                        for (t = 0; t < e.length; t += 1) e[t] = a(e[t]);
                        return e.join("");
                    }
                    function c(e) {
                        return /[\u0080-\uFFFF]/.test(e) && (e = unescape(encodeURIComponent(e))), e;
                    }
                    function u(e, t) {
                        var n, r = e.length, o = new ArrayBuffer(r), i = new Uint8Array(o);
                        for (n = 0; n < r; n += 1) i[n] = e.charCodeAt(n);
                        return t ? i : o;
                    }
                    function l(e) {
                        return String.fromCharCode.apply(null, new Uint8Array(e));
                    }
                    function f(e, t, n) {
                        var r = new Uint8Array(e.byteLength + t.byteLength);
                        return r.set(new Uint8Array(e)), r.set(new Uint8Array(t), e.byteLength), n ? r : r.buffer;
                    }
                    function p(e) {
                        var t, n = [], r = e.length;
                        for (t = 0; t < r - 1; t += 2) n.push(parseInt(e.substr(t, 2), 16));
                        return String.fromCharCode.apply(String, n);
                    }
                    function d() {
                        this.reset();
                    }
                    var h = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
                    return s(o("hello")), "undefined" == typeof ArrayBuffer || ArrayBuffer.prototype.slice || function () {
                        function t(e, t) {
                            return (e = 0 | e || 0) < 0 ? Math.max(e + t, 0) : Math.min(e, t);
                        }
                        ArrayBuffer.prototype.slice = function (n, r) {
                            var o, i, a, s, c = this.byteLength, u = t(n, c), l = c;
                            return r !== e && (l = t(r, c)), u > l ? new ArrayBuffer(0) : (o = l - u, i = new ArrayBuffer(o),
                                a = new Uint8Array(i), s = new Uint8Array(this, u, o), a.set(s), i);
                        };
                    }(), d.prototype.append = function (e) {
                        return this.appendBinary(c(e)), this;
                    }, d.prototype.appendBinary = function (e) {
                        this._buff += e, this._length += e.length;
                        var r, o = this._buff.length;
                        for (r = 64; r <= o; r += 64) t(this._hash, n(this._buff.substring(r - 64, r)));
                        return this._buff = this._buff.substring(r - 64), this;
                    }, d.prototype.end = function (e) {
                        var t, n, r = this._buff, o = r.length, i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                        for (t = 0; t < o; t += 1) i[t >> 2] |= r.charCodeAt(t) << (t % 4 << 3);
                        return this._finish(i, o), n = s(this._hash), e && (n = p(n)), this.reset(), n;
                    }, d.prototype.reset = function () {
                        return this._buff = "", this._length = 0, this._hash = [1732584193, -271733879, -1732584194, 271733878],
                            this;
                    }, d.prototype.getState = function () {
                        return {
                            buff: this._buff,
                            length: this._length,
                            hash: this._hash.slice()
                        };
                    }, d.prototype.setState = function (e) {
                        return this._buff = e.buff, this._length = e.length, this._hash = e.hash, this;
                    }, d.prototype.destroy = function () {
                        delete this._hash, delete this._buff, delete this._length;
                    }, d.prototype._finish = function (e, n) {
                        var r, o, i, a = n;
                        if (e[a >> 2] |= 128 << (a % 4 << 3), a > 55) for (t(this._hash, e), a = 0; a < 16; a += 1) e[a] = 0;
                        r = (r = 8 * this._length).toString(16).match(/(.*?)(.{0,8})$/), o = parseInt(r[2], 16),
                            i = parseInt(r[1], 16) || 0, e[14] = o, e[15] = i, t(this._hash, e);
                    }, d.hash = function (e, t) {
                        return d.hashBinary(c(e), t);
                    }, d.hashBinary = function (e, t) {
                        var n = s(o(e));
                        return t ? p(n) : n;
                    }, d.ArrayBuffer = function () {
                        this.reset();
                    }, d.ArrayBuffer.prototype.append = function (e) {
                        var n, o = f(this._buff.buffer, e, !0), i = o.length;
                        for (this._length += e.byteLength, n = 64; n <= i; n += 64) t(this._hash, r(o.subarray(n - 64, n)));
                        return this._buff = n - 64 < i ? new Uint8Array(o.buffer.slice(n - 64)) : new Uint8Array(0),
                            this;
                    }, d.ArrayBuffer.prototype.end = function (e) {
                        var t, n, r = this._buff, o = r.length, i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                        for (t = 0; t < o; t += 1) i[t >> 2] |= r[t] << (t % 4 << 3);
                        return this._finish(i, o), n = s(this._hash), e && (n = p(n)), this.reset(), n;
                    }, d.ArrayBuffer.prototype.reset = function () {
                        return this._buff = new Uint8Array(0), this._length = 0, this._hash = [1732584193, -271733879, -1732584194, 271733878],
                            this;
                    }, d.ArrayBuffer.prototype.getState = function () {
                        var e = d.prototype.getState.call(this);
                        return e.buff = l(e.buff), e;
                    }, d.ArrayBuffer.prototype.setState = function (e) {
                        return e.buff = u(e.buff, !0), d.prototype.setState.call(this, e);
                    }, d.ArrayBuffer.prototype.destroy = d.prototype.destroy, d.ArrayBuffer.prototype._finish = d.prototype._finish,
                        d.ArrayBuffer.hash = function (e, t) {
                            var n = s(i(new Uint8Array(e)));
                            return t ? p(n) : n;
                        }, d;
                });
            }), h = {
                tempFilePath: "",
                totalSize: 0,
                fileName: "",
                verifyUrl: "",
                uploadUrl: "",
                mergeUrl: "",
                maxConcurrency: 5,
                generateIdentifier: null,
                chunkSize: 5242880,
                maxMemory: 104857600,
                query: "",
                header: {},
                testChunks: !1,
                chunkRetryInterval: 0,
                maxChunkRetries: 0,
                timeout: 1e4,
                successStatus: [200, 201, 202],
                failStatus: [404, 415, 500, 501],
                verbose: !1
            }, g = function () {
                function e() {
                    n(this, e), this.events = {};
                }
                return i(e, [{
                    key: "on",
                    value: function (e, t) {
                        var n = this;
                        return "object" !== a(this.events[e]) && (this.events[e] = []), this.events[e].push(t),
                            function () {
                                return n.off(e, t);
                            };
                    }
                }, {
                    key: "off",
                    value: function (e, t) {
                        if ("object" === a(this.events[e])) {
                            var n = this.events[e].indexOf(t);
                            n > -1 && this.events[e].splice(n, 1);
                        }
                    }
                }, {
                    key: "emit",
                    value: function (e) {
                        for (var t = this, n = arguments.length, r = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
                        "object" === a(this.events[e]) && this.events[e].forEach(function (e) {
                            return e.apply(t, r);
                        });
                    }
                }, {
                    key: "once",
                    value: function (e, t) {
                        var n = this, r = this.on(e, function () {
                            for (var e = arguments.length, o = Array(e), i = 0; i < e; i++) o[i] = arguments[i];
                            r(), t.apply(n, o);
                        });
                    }
                }]), e;
            }(), y = function (e) {
                return "function" == typeof e;
            }, v = function (e) {
                return e.then(function (e) {
                    return [null, e];
                }).catch(function (e) {
                    return [e, null];
                });
            }, m = function (e, t) {
                e = e.split("."), t = t.split(".");
                for (var n = Math.max(e.length, t.length); e.length < n;) e.push("0");
                for (; t.length < n;) t.push("0");
                for (var r = 0; r < n; r++) {
                    var o = parseInt(e[r], 10), i = parseInt(t[r], 10);
                    if (o > i) return 1;
                    if (o < i) return -1;
                }
                return 0;
            };
            p.useDefaults({
                defaultLevel: p.OFF,
                formatter: function (e) {
                    var t = new Date(), n = t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds();
                    e.unshift(n), e.unshift("[Uploader]");
                }
            });
            var b = function (e) {
                return y(e) ? function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return new Promise(function (n, r) {
                        e(Object.assign(t, {
                            success: n,
                            fail: r
                        }));
                    });
                } : e;
            }(wx.getFileSystemManager().readFile), w = wx.getAccountInfoSync(), x = wx.getSystemInfoSync(), _ = w.appId, I = function () {
                function e() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    n(this, e), t.verbose && p.setLevel(p.INFO), p.debug("construct option ", t), this.config = Object.assign(h, t),
                        this.emitter = new g(), this.totalSize = this.config.totalSize, this.chunkSize = this.config.chunkSize,
                        this.tempFilePath = this.config.tempFilePath, this.totalChunks = Math.ceil(this.totalSize / this.chunkSize),
                        this.maxLoadChunks = Math.floor(this.config.maxMemory / this.chunkSize), this._event();
                }
                return i(e, [{
                    key: "upload",
                    value: function () {
                        var e = t(regeneratorRuntime.mark(function e() {
                            var t, n, i, a, s, c, u;
                            return regeneratorRuntime.wrap(function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        if (this._reset(), p.info("start generateIdentifier"), e.prev = 1, p.time("[Uploader] generateIdentifier"),
                                            !this.config.testChunks) {
                                            e.next = 9;
                                            break;
                                        }
                                        return e.next = 6, this.computeMD5();

                                    case 6:
                                        this.identifier = e.sent, e.next = 10;
                                        break;

                                    case 9:
                                        this.identifier = this.generateIdentifier();

                                    case 10:
                                        p.timeEnd("[Uploader] generateIdentifier"), p.debug("generateIdentifier ", this.identifier),
                                            e.next = 17;
                                        break;

                                    case 14:
                                        return e.prev = 14, e.t0 = e.catch(1), e.abrupt("return", void this.handleFail({
                                            errCode: 10002,
                                            errMsg: e.t0.message
                                        }));

                                    case 17:
                                        if (p.info("generateIdentifier end"), !(this.config.testChunks && this.config.verifyUrl)) {
                                            e.next = 33;
                                            break;
                                        }
                                        return p.info("start verify uploaded chunks"), p.time("[Uploader] verifyRequest"),
                                            e.next = 21, v(this.verifyRequest());

                                    case 21:
                                        if (t = e.sent, n = o(t, 2), i = n[0], a = n[1], p.timeEnd("[Uploader] verifyRequest"),
                                            p.debug("verifyRequest", i, a), !i) {
                                            e.next = 27;
                                            break;
                                        }
                                        return e.abrupt("return", void this.handleFail({
                                            errCode: 20001,
                                            errMsg: i.errMsg
                                        }));

                                    case 27:
                                        if (s = a.data, c = s.needUpload, u = s.uploadedChunks, p.info("verify uploaded chunks end"),
                                            !!c) {
                                            e.next = 30;
                                            break;
                                        }
                                        return e.abrupt("return", (this.progress = 100, this.timeRemaining = 0, this.dispatchProgress(),
                                            this.emit("success", r({
                                                errCode: 0
                                            }, a.data)), void this.emit("complete", r({
                                                errCode: 0
                                            }, a.data))));

                                    case 30:
                                        if (u.length !== this.totalChunks) {
                                            e.next = 32;
                                            break;
                                        }
                                        return e.abrupt("return", (this.progress = 100, this.timeRemaining = 0, this.dispatchProgress(),
                                            void this.emit("uploadDone")));

                                    case 32:
                                        this.chunksIndexNeedRead = this.chunksIndexNeedRead.filter(function (e) {
                                            return !u.includes(e);
                                        }), this.chunksIndexNeedSend = this.chunksIndexNeedSend.filter(function (e) {
                                            return !u.includes(e);
                                        }), this.uploadedChunks = u.sort();

                                    case 33:
                                        this.chunksNeedSend = this.chunksIndexNeedSend.length, this.sizeNeedSend = this.chunksNeedSend * this.chunkSize,
                                            this.chunksIndexNeedSend.includes(this.totalChunks - 1) && (this.sizeNeedSend -= this.totalChunks * this.chunkSize - this.totalSize),
                                            p.debug("\n      start upload\n        uploadedChunks: " + this.uploadedChunks + ",\n        chunksQueue: " + this.chunksQueue + ",\n        chunksIndexNeedRead: " + this.chunksIndexNeedRead + ",\n        chunksNeedSend: " + this.chunksIndexNeedSend + ",\n        sizeNeedSend: " + this.sizeNeedSend + "\n    "),
                                            p.info("start upload chunks"), p.time("[Uploader] uploadChunks"), this.isUploading = !0,
                                            this._upload();

                                    case 34:
                                    case "end":
                                        return e.stop();
                                }
                            }, e, this, [[1, 14]]);
                        }));
                        return function () {
                            return e.apply(this, arguments);
                        };
                    }()
                }, {
                    key: "_requestAsync",
                    value: function () {
                        var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = arguments[1], o = this.config, i = o.chunkRetryInterval, a = o.maxChunkRetries, s = o.successStatus, c = o.failStatus, u = a;
                        return new Promise(function (o, a) {
                            !function l() {
                                var f = wx.request(r({}, t, {
                                    timeout: e.config.timeout,
                                    success: function (n) {
                                        var r = n.statusCode;
                                        s.includes(r) ? o(n) : c.includes(r) ? a(n) : u > 0 ? setTimeout(function () {
                                            e.emit("retry", {
                                                statusCode: r,
                                                url: t.url
                                            }), --u, l();
                                        }, i) : a(n);
                                    },
                                    fail: function (e) {
                                        a(e);
                                    }
                                }));
                                y(n) && n(f);
                            }();
                        });
                    }
                }, {
                    key: "handleFail",
                    value: function (e) {
                        this.isFail || (p.error("upload file fail: ", e), this.isFail = !0, this.cancel(),
                            this.emit("fail", e), this.emit("complete", e));
                    }
                }, {
                    key: "_event",
                    value: function () {
                        var e = this;
                        this.on("uploadDone", t(regeneratorRuntime.mark(function t() {
                            var n, i, a, s;
                            return regeneratorRuntime.wrap(function (t) {
                                for (; ;) switch (t.prev = t.next) {
                                    case 0:
                                        return p.timeEnd("[Uploader] uploadChunks"), p.info("upload chunks end"), e.isUploading = !1,
                                            p.info("start merge reqeust"), p.time("[Uploader] mergeRequest"), t.next = 3, v(e.mergeRequest());

                                    case 3:
                                        n = t.sent, i = o(n, 2), a = i[0], s = i[1], p.timeEnd("[Uploader] mergeRequest"),
                                            p.info("merge reqeust end"), p.debug("mergeRequest", a, s), a ? e.handleFail({
                                                errCode: 20003,
                                                errrMsg: a.errMsg
                                            }) : (p.info("upload file success"), e.emit("success", r({
                                                errCode: 0
                                            }, s.data)), e.emit("complete", r({
                                                errCode: 0
                                            }, s.data)));

                                    case 8:
                                    case "end":
                                        return t.stop();
                                }
                            }, t, e);
                        })));
                    }
                }, {
                    key: "_upload",
                    value: function () {
                        if (this.startUploadTime = Date.now(), this._uploadedSize = 0, this.chunksQueue.length) for (var e = this.config.maxConcurrency, t = 0; t < e; t++) this.uploadChunk(); else this.readFileChunk();
                    }
                }, {
                    key: "updateUploadSize",
                    value: function (e) {
                        this.uploadedSize += e, this._uploadedSize += e;
                        var t = Date.now() - this.startUploadTime, n = this._uploadedSize / t, r = this.sizeNeedSend - this.uploadedSize;
                        this.timeRemaining = parseInt(r / n, 10), this.averageSpeed = 1e3 * parseInt(n, 10),
                            this.progress = parseInt(100 * this.uploadedSize / this.sizeNeedSend, 10), this.dispatchProgress();
                    }
                }, {
                    key: "dispatchProgress",
                    value: function () {
                        this.emit("progress", {
                            totalSize: this.totalSize,
                            progress: this.progress,
                            uploadedSize: this.uploadedSize,
                            averageSpeed: this.averageSpeed,
                            timeRemaining: this.timeRemaining
                        });
                    }
                }, {
                    key: "pause",
                    value: function () {
                        var e = this;
                        p.info("** pause **"), this.isUploading = !1, Object.keys(this.uploadTasks).map(function (e) {
                            return 1 * e;
                        }).forEach(function (t) {
                            e.chunksIndexNeedRead.push(t), e.uploadTasks[t].abort();
                        }), this.uploadTasks = {};
                    }
                }, {
                    key: "resume",
                    value: function () {
                        p.info("** resume **"), this.isUploading = !0, this._upload();
                    }
                }, {
                    key: "cancel",
                    value: function () {
                        p.info("** cancel **"), this.pause(), this._reset();
                    }
                }, {
                    key: "_reset",
                    value: function () {
                        this.chunksIndexNeedRead = Array.from(Array(this.totalChunks).keys()), this.chunksIndexNeedSend = Array.from(Array(this.totalChunks).keys()),
                            this.chunksNeedSend = this.totalChunks, this.sizeNeedSend = this.totalSize, this.identifier = "",
                            this.chunksSend = 0, this.chunksQueue = [], this.uploadTasks = {}, this.pUploadList = [],
                            this.uploadedChunks = [], this.isUploading = !1, this.isFail = !1, this.progress = 0,
                            this.uploadedSize = 0, this.averageSpeed = 0, this.timeRemaining = Number.POSITIVE_INFINITY,
                            this.dispatchProgress();
                    }
                }, {
                    key: "readFileChunk",
                    value: function () {
                        var e = this, t = this.tempFilePath, n = this.chunkSize, r = this.maxLoadChunks, o = this.chunksQueue, i = this.chunksIndexNeedRead, a = this.totalSize, s = Math.min(i.length, r - o.length);
                        p.debug("readFileChunk chunks: " + s + ", chunksIndexNeedRead", this.chunksIndexNeedRead);
                        for (var c = 0; c < s && "break" !== function (r) {
                            var o = i.shift(), s = o * n, c = Math.min(a - s, n);
                            if (e.isFail) return "break";
                            b({
                                filePath: t,
                                position: s,
                                length: c
                            }).then(function (t) {
                                var n = t.data;
                                return e.chunksQueue.push({
                                    chunk: n,
                                    length: c,
                                    index: o
                                }), e.uploadChunk(), null;
                            }).catch(function (t) {
                                e.handleFail({
                                    errCode: 10001,
                                    errMsg: t.errMsg
                                });
                            });
                        }(); c++);
                    }
                }, {
                    key: "uploadChunk",
                    value: function () {
                        var e = this;
                        if (this.isUploading && !this.isFail && this.chunksQueue.length && Object.keys(this.uploadTasks).length !== this.config.maxConcurrency) {
                            var t = this.chunksQueue.shift(), n = t.chunk, o = t.index, i = t.length;
                            if (this.uploadedChunks.includes(o)) this.uploadChunk(); else {
                                var a = this.config, s = a.uploadUrl, c = a.query, u = a.header, f = this.identifier, d = l(s, r({}, c, {
                                    identifier: f,
                                    index: o,
                                    chunkSize: i,
                                    fileName: this.config.fileName,
                                    totalChunks: this.totalChunks,
                                    totalSize: this.totalSize
                                }));
                                p.debug("uploadChunk index: " + o + ", lenght " + i), p.time("[Uploader] uploadChunk index-" + o),
                                    this._requestAsync({
                                        url: d,
                                        data: n,
                                        header: r({}, u, {
                                            "content-type": "application/octet-stream"
                                        }),
                                        method: "POST"
                                    }, function (t) {
                                        e.uploadTasks[o] = t;
                                    }).then(function () {
                                        return e.chunksSend++, delete e.uploadTasks[o], e.updateUploadSize(i), p.debug("uploadChunk success chunksSend: " + e.chunksSend),
                                            p.timeEnd("[Uploader] uploadChunk index-" + o), e.readFileChunk(), e.uploadChunk(),
                                            e.chunksSend === e.chunksNeedSend && e.emit("uploadDone"), null;
                                    }).catch(function (t) {
                                        t.errMsg.includes("request:fail abort") ? p.info("chunk index-" + o + " will be aborted") : e.handleFail({
                                            errCode: 20002,
                                            errMsg: t.errMsg
                                        });
                                    });
                            }
                        }
                    }
                }, {
                    key: "emit",
                    value: function (e, t) {
                        this.emitter.emit(e, t);
                    }
                }, {
                    key: "on",
                    value: function (e, t) {
                        this.emitter.on(e, t);
                    }
                }, {
                    key: "off",
                    value: function (e, t) {
                        this.emitter.off(e, t);
                    }
                }, {
                    key: "generateIdentifier",
                    value: function () {
                        var e = "", t = this.config.generateIdentifier;
                        if (y(t)) e = t(); else {
                            var n = _ + "-" + Date.now() + "-" + Math.random();
                            e = d.hash(n);
                        }
                        return e;
                    }
                }, {
                    key: "computeMD5",
                    value: function () {
                        var e = t(regeneratorRuntime.mark(function e() {
                            var t, n, r, i, a, s, c, u, l, f, p, h, g, y, m, w;
                            return regeneratorRuntime.wrap(function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        t = this.tempFilePath, n = this.totalSize, r = this.chunkSize, i = n < this.config.maxMemory,
                                            a = i ? r : 10485760, s = Math.ceil(n / a), c = new d.ArrayBuffer(), u = 0;

                                    case 2:
                                        if (!(u < s)) {
                                            e.next = 18;
                                            break;
                                        }
                                        return l = u * a, f = Math.min(n - l, a), e.next = 7, v(b({
                                            filePath: t,
                                            position: l,
                                            length: f
                                        }));

                                    case 7:
                                        if (p = e.sent, h = o(p, 2), g = h[0], y = h[1], !g) {
                                            e.next = 13;
                                            break;
                                        }
                                        throw c.destroy(), new Error(g.errMsg);

                                    case 13:
                                        m = y.data, i && this.chunksQueue.push({
                                            chunk: m,
                                            length: f,
                                            index: u
                                        }), c.append(m);

                                    case 15:
                                        u++, e.next = 2;
                                        break;

                                    case 18:
                                        return this.chunksIndexNeedRead = [], w = c.end(), e.abrupt("return", (c.destroy(),
                                            w));

                                    case 21:
                                    case "end":
                                        return e.stop();
                                }
                            }, e, this);
                        }));
                        return function () {
                            return e.apply(this, arguments);
                        };
                    }()
                }, {
                    key: "verifyRequest",
                    value: function () {
                        var e = t(regeneratorRuntime.mark(function e() {
                            var t, n, r, o;
                            return regeneratorRuntime.wrap(function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = this.config, n = t.verifyUrl, r = t.fileName, e.next = 5, this._requestAsync({
                                            url: n,
                                            data: {
                                                fileName: r,
                                                identifier: this.identifier
                                            }
                                        });

                                    case 5:
                                        return o = e.sent, e.abrupt("return", o);

                                    case 7:
                                    case "end":
                                        return e.stop();
                                }
                            }, e, this);
                        }));
                        return function () {
                            return e.apply(this, arguments);
                        };
                    }()
                }, {
                    key: "mergeRequest",
                    value: function () {
                        var e = t(regeneratorRuntime.mark(function e() {
                            var t, n, r, o;
                            return regeneratorRuntime.wrap(function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = this.config, n = t.mergeUrl, r = t.fileName, e.next = 5, this._requestAsync({
                                            url: n,
                                            data: {
                                                fileName: r,
                                                identifier: this.identifier
                                            }
                                        });

                                    case 5:
                                        return o = e.sent, e.abrupt("return", o);

                                    case 7:
                                    case "end":
                                        return e.stop();
                                }
                            }, e, this);
                        }));
                        return function () {
                            return e.apply(this, arguments);
                        };
                    }()
                }], [{
                    key: "isSupport",
                    value: function () {
                        var e = x.SDKVersion;
                        return m(e, "2.10.0") >= 0;
                    }
                }]), e;
            }();
            s.default = I;
        }.call(this, c("c8ba"));
    },
    "2d6c": function (e, t, n) {
        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
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
        function a(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        var s = n("b101"), c = function () {
            function e(t) {
                var n = this;
                r(this, e), a(this, "getStyle", function (e) {
                    return n.styles = new u(e, n.styles).parse();
                });
                var o = Object.assign({}, s.userAgentStyles);
                for (var i in t) o[i] = (o[i] ? o[i] + ";" : "") + t[i];
                this.styles = o;
            }
            return i(e, [{
                key: "match",
                value: function (e, t) {
                    var n, r = (n = this.styles[e]) ? n + ";" : "";
                    if (t.class) for (var o, i = t.class.split(" "), a = 0; o = i[a]; a++) (n = this.styles["." + o]) && (r += n + ";");
                    return (n = this.styles["#" + t.id]) && (r += n + ";"), r;
                }
            }]), e;
        }();
        e.exports = c;
        var u = function () {
            function e(t, n) {
                var o = this;
                r(this, e), a(this, "section", function () {
                    return o.data.substring(o.start, o.i);
                }), a(this, "isLetter", function (e) {
                    return e >= "a" && e <= "z" || e >= "A" && e <= "Z";
                }), this.data = t, this.floor = 0, this.i = 0, this.list = [], this.res = n, this.state = this.Space;
            }
            return i(e, [{
                key: "parse",
                value: function () {
                    for (var e; e = this.data[this.i]; this.i++) this.state(e);
                    return this.res;
                }
            }, {
                key: "Space",
                value: function (e) {
                    "." == e || "#" == e || this.isLetter(e) ? (this.start = this.i, this.state = this.Name) : "/" == e && "*" == this.data[this.i + 1] ? this.Comment() : s.blankChar[e] || ";" == e || (this.state = this.Ignore);
                }
            }, {
                key: "Comment",
                value: function () {
                    this.i = this.data.indexOf("*/", this.i) + 1, this.i || (this.i = this.data.length),
                        this.state = this.Space;
                }
            }, {
                key: "Ignore",
                value: function (e) {
                    "{" == e ? this.floor++ : "}" != e || --this.floor || (this.state = this.Space);
                }
            }, {
                key: "Name",
                value: function (e) {
                    s.blankChar[e] ? (this.list.push(this.section()), this.state = this.NameSpace) : "{" == e ? (this.list.push(this.section()),
                        this.Content()) : "," == e ? (this.list.push(this.section()), this.Comma()) : !this.isLetter(e) && (e < "0" || e > "9") && "-" != e && "_" != e && (this.state = this.Ignore);
                }
            }, {
                key: "NameSpace",
                value: function (e) {
                    "{" == e ? this.Content() : "," == e ? this.Comma() : s.blankChar[e] || (this.state = this.Ignore);
                }
            }, {
                key: "Comma",
                value: function () {
                    for (; s.blankChar[this.data[++this.i]];);
                    "{" == this.data[this.i] ? this.Content() : (this.start = this.i--, this.state = this.Name);
                }
            }, {
                key: "Content",
                value: function () {
                    this.start = ++this.i, -1 == (this.i = this.data.indexOf("}", this.i)) && (this.i = this.data.length);
                    for (var e, t = this.section(), n = 0; e = this.list[n++];) this.res[e] ? this.res[e] += ";" + t : this.res[e] = t;
                    this.list = [], this.state = this.Space;
                }
            }]), e;
        }();
    },
    "477c": function (e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = {
            INDEX: "i",
            MY_PAGE: "mp",
            NEWS_PAGE: "np",
            BOOK_PAGE: "bp",
            INFOSYS_PAGE: "ip",
            AUDIO_PAGE: "ap",
            SUBMIT_FORM: "sf",
            NEWS_COMMENT: "nc",
            SUBMIT_ORDER: "so",
            VOTE: "v",
            WX_SERVICE: "ws",
            CALL: "c",
            CARD_PAGE: "cp",
            PHONE_SAVE: "ps",
            COUPON: "cn",
            MYCOUPON: "mc",
            NEWS_SUBSCRIBE: "ns",
            VIDEO_SUBSCRIBE: "vs"
        };
        t.default = r;
    },
    "47c8": function (e, t, n) {
        (function (e) {
            function r() {
                return (0, o.request)({
                    url: {
                        path: "appAjax/delivery.jsp"
                    },
                    data: {
                        cmd: "getInfoDeliveryList"
                    }
                }).then(function (e) {
                    if (!e.success) throw Error(e.msg);
                    return e;
                }).catch(function (t) {
                    console.error(t), e.showModal({
                        title: "提示",
                        content: t.message,
                        showCancel: !1
                    });
                });
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.formatTime = function (e) {
                function t(e) {
                    return e.toString().length > 1 ? "" + e : "0" + e;
                }
                if (!e) return "";
                var n = new Date(e), r = new Date(), o = t(n.getMinutes()), i = t(n.getHours()), a = t(n.getMonth() + 1), s = t(n.getDate()), c = n.getFullYear();
                return r.getFullYear() === n.getFullYear() && r.getMonth() === n.getMonth() && r.getDate() === n.getDate() ? "".concat(i, ":").concat(o) : n.getFullYear() - r.getFullYear() == 0 ? "".concat(a, "-").concat(s, " ").concat(i, ":").concat(o) : "".concat(c, "-").concat(a, "-").concat(s, " ").concat(i, ":").concat(o);
            }, t.formatCount = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                return e < 1e4 ? e : (e / 1e4).toFixed(2) + "w";
            }, t.getImageMode = function (e) {
                return 2 == e ? "aspectFit" : 1 == e ? "aspectFill" : "";
            }, t.getGlobalSetting = function () {
                return (0, o.request)({
                    url: {
                        path: "appAjax/delivery.jsp"
                    },
                    data: {
                        cmd: "getDeliverySetting"
                    }
                }).then(function (e) {
                    if (e.success) return e;
                    console.log(e);
                }).catch(function (e) {
                    console.error(e);
                });
            }, t.getSectionList = r, t.getDeliveryIdListWithPermission = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = getApp().globalData.userInfo, n = a.default.methods.checkMemberPower, o = e.key, s = [];
                return (!t || t && !t.nickName ? (0, i.getUserInfo)(!0) : Promise.resolve(!0)).then(function () {
                    return e.sectionList ? Promise.resolve(e.sectionList) : r().then(function (e) {
                        return e && e.success ? e.deliveryList : [];
                    });
                }).then(function (e) {
                    return e.forEach(function (e) {
                        n(e.setting[o]).isBan || s.push(e.id);
                    }), s;
                }).catch(function (e) {
                    console.error(e);
                });
            }, t.getViewPermission = function (e) {
                var t = e.setting, n = t.pp || {}, r = {};
                return Object.keys(n).forEach(function (e) {
                    var n = t[e];
                    void 0 !== n && (r[e] = n);
                }), r;
            }, t.auditTypes = t.eventTypes = void 0;
            var o = n("60e3"), i = n("cf45"), a = function (e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }(n("4dcb")), s = {
                REFRESH: "infoIssueModule_refresh",
                REFRESH_SINGLE: "infoIssue_refresh_single"
            };
            t.eventTypes = s;
            var c = {
                AUDITING: 0,
                RELEASED: 1,
                FAILED: 2
            };
            t.auditTypes = c;
        }).call(this, n("543d").default);
    },
    "4dcb": function (e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = n("cf45"), o = (getApp(), {
            data: function () {
                return {
                    isBan: !1,
                    isMember: !1,
                    setting: {
                        bp: 0,
                        bml: 1,
                        btype: 0,
                        bmtgs: []
                    },
                    userInfo: {}
                };
            },
            methods: {
                initUserInfo: function () {
                    var e = this;
                    return (0, r.getUserInfo)(!0).then(function (t) {
                        t && (e.userInfo = t);
                    });
                },
                banHandler: function () {
                    var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function () { }, n = getApp().globalData.userInfo, r = !n || n && !n.nickName ? this.initUserInfo() : Promise.resolve(!0);
                    console.log("ban--userInfo", n), r.then(function () {
                        var n = e.checkMemberPower();
                        e.isBan = n.isBan, e.isMember = n.isMember, t(n);
                    }).catch(function (e) {
                        console.error(e);
                    });
                },
                checkMemberPower: function (e) {
                    var t = getApp().globalData, n = t.wxappInfo, r = t.userInfo, o = e || this.setting, i = !1, a = !1;
                    if (!n.flag.memberOpen || !o.bp) return {
                        isBan: i,
                        isMember: a
                    };
                    if (r && (r.authPhone || this.userInfo.authPhone)) if (a = !0, void 0 == o.btype || 0 == o.btype) r.levelInfo.id < o.bml && (i = !0); else {
                        i = !0;
                        var s = o.bmtgs, c = r.memberTagIdList;
                        if (0 == s.length) i = !1; else if (c.length > 0) for (var u = 0; u < s.length; u++) for (var l = 0; l < c.length; l++) s[u] == c[l] && (i = !1);
                    } else i = !0;
                    return {
                        isBan: i,
                        isMember: a
                    };
                },
                loginHandler: function (e) {
                    this.banHandler();
                },
                memberHandler: function (e) { }
            }
        });
        t.default = o;
    },
    5011: function (e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = {};
        t.default = r;
    },
    "503f": function (e, t, n) {
        (function (t) {
            function n(e) {
                return (n = "function" == typeof Symbol && "symbol" === a(Symbol.iterator) ? function (e) {
                    return void 0 === e ? "undefined" : a(e);
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : a(e);
                })(e);
            }
            function r(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && o(e, t);
            }
            function o(e, t) {
                return (o = Object.setPrototypeOf || function (e, t) {
                    return e.__proto__ = t, e;
                })(e, t);
            }
            function i(e) {
                var t = u();
                return function () {
                    var n, r = l(e);
                    if (t) {
                        var o = l(this).constructor;
                        n = Reflect.construct(r, arguments, o);
                    } else n = r.apply(this, arguments);
                    return s(this, n);
                };
            }
            function s(e, t) {
                return !t || "object" !== n(t) && "function" != typeof t ? c(e) : t;
            }
            function c(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e;
            }
            function u() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function () { })),
                        !0;
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    return !1;
                }
            }
            function l(e) {
                return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
            }
            function f(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            function p(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0),
                        Object.defineProperty(e, r.key, r);
                }
            }
            function d(e, t, n) {
                return t && p(e.prototype, t), n && p(e, n), e;
            }
            var h = {
                typeDecide: function (e, t) {
                    return Object.prototype.toString.call(e) === "[object ".concat(t, "]");
                },
                isFunction: function (e) {
                    return h.typeDecide(e, "Function");
                },
                isString: function (e) {
                    return h.typeDecide(e, "String");
                },
                serializeObj: function (e) {
                    var t = "";
                    return Object.keys(e).forEach(function (n) {
                        h.typeDecide(e[n], "Object") ? t += "".concat(n, "=").concat(JSON.stringify(e[n])) : t += "".concat(n, "=").concat(e[n], "^");
                    }), encodeURIComponent(t.substr(0, t.length - 1));
                },
                noop: function () { },
                now: function () {
                    return new Date().getTime();
                },
                getId: function (e) {
                    var t = e.toString(16);
                    if (t.length < 2) for (var n = 0; n < 2 - t.length; n++) t = "0".concat(t);
                    var r = ((4294967295 & new Date().getTime()) >>> 0).toString(16);
                    if (r.length < 8) for (n = 0; n < 8 - r.length; n++) r = "0".concat(r);
                    var o = (16777215 * Math.random() & 16777215).toString(16);
                    if (o.length < 6) for (n = 0; n < 6 - o.length; n++) o = "0".concat(o);
                    return t + r + o;
                }
            }, g = function () {
                function e(t) {
                    f(this, e), this.config = {
                        version: "1.1",
                        platform: "wxapp",
                        setSystemInfo: !0,
                        appid: "",
                        mergeReport: !1,
                        delay: 1e3,
                        url: "https://report.fkw.com/js/report",
                        except: [/appServiceSDKScriptError/],
                        random: 1,
                        repeat: 5,
                        canReport: !0,
                        cliId: 0,
                        login_aid: 0,
                        login_sid: 0,
                        openid: 0,
                        eventCommProp: {}
                    }, this.config = Object.assign(this.config, t);
                }
                return d(e, [{
                    key: "get",
                    value: function (e) {
                        return this.config[e];
                    }
                }, {
                    key: "set",
                    value: function (e, t) {
                        return this.config[e] = t, this.config[e];
                    }
                }]), e;
            }(), y = function () {
                function e() {
                    f(this, e), this.handlers = {};
                }
                return d(e, [{
                    key: "on",
                    value: function (e, t) {
                        return this.handlers[e] = this.handlers[e] || [], this.handlers[e].push(t), this.handlers[e];
                    }
                }, {
                    key: "off",
                    value: function (e) {
                        this.handlers[e] && delete this.handlers[e];
                    }
                }, {
                    key: "trigger",
                    value: function (e, t) {
                        var n = this, r = t || [], o = this.handlers[e];
                        return !o || o.every(function (e) {
                            return !1 !== e.apply(n, r);
                        });
                    }
                }]), e;
            }(), v = function (e) {
                function n(e) {
                    var r;
                    return f(this, n), r = o.call(this, e), r.errorQueue = [], r.repeatList = {}, r.config = new g().config,
                        r.systemInfo = t.getSystemInfoSync(), ["log", "debug", "info", "warn", "error"].forEach(function (e, t) {
                            r[e] = function (n) {
                                return r.handleMsg(n, e, t);
                            };
                        }), r;
                }
                r(n, y);
                var o = i(n);
                return d(n, [{
                    key: "setOptions",
                    value: function (e) {
                        Object.assign(this.config, e);
                    }
                }, {
                    key: "repeat",
                    value: function (e) {
                        var t = e.rowNum || "", n = e.colNum || "", r = e.msg + t + n;
                        return this.repeatList[r] = this.repeatList[r] ? this.repeatList[r] + 1 : 1, this.repeatList[r] > this.config.repeat;
                    }
                }, {
                    key: "except",
                    value: function (e) {
                        var t = this.config.except, n = !1, r = null;
                        if (this.config.canReport || (n = !0), h.typeDecide(t, "Array")) for (var o = 0, i = t.length; o < i; o++) if (r = t[o],
                            h.typeDecide(r, "RegExp") && r.test(e.msg)) {
                            n = !0;
                            break;
                        }
                        return n;
                    }
                }, {
                    key: "request",
                    value: function (e, n, r) {
                        this.config.canReport && t.request({
                            url: e,
                            method: "get",
                            data: n,
                            success: r
                        });
                    }
                }, {
                    key: "setEventCommProp",
                    value: function (e) {
                        if (!e.constructor != Object) for (var t in e) this.config.eventCommProp[t] = e[t];
                    }
                }, {
                    key: "track",
                    value: function (e, t, n, r, o) {
                        var i = this, a = this.config, s = a.login_aid, c = a.login_sid, u = a.cliId, l = n || s, f = r || c, p = o || u, d = this.config, h = d.url, g = d.eventCommProp;
                        if (this.config.canReport) {
                            1;
                            var y = 0;
                            try {
                                y = this.systemInfo.SDKVersion;
                            } catch (e) { }
                            var v = 0;
                            try {
                                v = this.systemInfo.version;
                            } catch (e) { }
                            var m = {
                                $login_aid: l,
                                $login_sid: f,
                                $cliid: p.toString(),
                                $appid: this.config.appid,
                                $openid: this.config.openid,
                                $url: this.activePage.route || "manage",
                                $screen_height: this.systemInfo.screenHeight,
                                $screen_width: this.systemInfo.screenWidth,
                                $sdk_platform: this.config.platform,
                                $sdk_version: parseFloat(this.config.version),
                                $mp_type: 1,
                                $mp_version: y,
                                $app_version: v
                            };
                            for (var b in g) m[b] = g[b];
                            for (var b in t) m[b] = t[b];
                            var w = {
                                event: e,
                                properties: JSON.stringify(m),
                                b_rt: 9,
                                b_a_i: this.config.appid
                            };
                            return this.request(h, w, function () {
                                i.trigger("afterReport");
                            }), h;
                        }
                    }
                }, {
                    key: "report",
                    value: function (e, t, n) {
                        var r = this, o = t || 2, i = n || 0, a = this.config.mergeReport;
                        if (2 === o && 0 === this.errorQueue.length) return this.config.url;
                        var s = a ? this.errorQueue : [this.errorQueue.shift()];
                        a && (this.errorQueue = []);
                        var c = this.config.url;
                        if (this.config.canReport) {
                            var u = {
                                b_a_i: this.config.appid,
                                b_rt: o,
                                bs_t: Date.now(),
                                b_pi: h.getId(3),
                                b_ct: Date.now(),
                                u_u: this.activePage.route,
                                c_l: this.systemInfo.language,
                                b_ai: this.config.login_aid || 0,
                                b_ba: 0,
                                b_bw: 0,
                                b_bi: 0
                            };
                            return 2 === o ? Object.assign(u, {
                                e_t: 0,
                                e_sk: s,
                                e_m: this.systemInfo,
                                breadcrumbs: this.breadcrumbs
                            }) : 1 === o && Object.assign(u, {
                                pe_ft: i
                            }), this.request(c, u, function () {
                                e && e.call(r), r.trigger("afterReport");
                            }), c;
                        }
                    }
                }, {
                    key: "send",
                    value: function (e) {
                        var t = this;
                        if (this.trigger("beforeReport")) {
                            var n = e || h.noop, r = this.config.mergeReport ? this.config.delay : 0;
                            setTimeout(function () {
                                t.report(n);
                            }, r);
                        }
                    }
                }, {
                    key: "pageView",
                    value: function () {
                        var e = this, t = h.getId(3), n = this.config.url;
                        if (this.config.canReport) {
                            var r = {
                                b_rt: 0,
                                b_a_i: this.config.appid,
                                b_ci: 0,
                                b_pi: t,
                                b_sv: this.config.version,
                                u_u: this.activePage.route,
                                c_st: "".concat(Math.ceil(this.systemInfo.screenWidth), "x").concat(Math.ceil(this.systemInfo.screenHeight))
                            };
                            this.request(n, r, function () {
                                e.config.pageViewCB && e.config.pageViewCB.call(e);
                            });
                        }
                    }
                }, {
                    key: "catchError",
                    value: function (e) {
                        return !(Math.random() >= this.config.random) && !this.repeat(e) && !this.except(e) && (this.errorQueue.push(e),
                            this.errorQueue);
                    }
                }, {
                    key: "handleMsg",
                    value: function (e, t, n) {
                        if (!e) return !1;
                        var r = h.typeDecide(e, "Object") ? e : {
                            msg: e
                        };
                        return r.level = n, r.type = t, r.time = Date.now(), this.catchError(r) && this.send(),
                            r;
                    }
                }]), n;
            }(), m = new (function (e) {
                function n(e) {
                    var t;
                    return f(this, n), t = o.call(this, e), t.breadcrumbs = [], t.activePage = {}, t.rewriteApp(),
                        t.rewritePage(), t.rewriteComponent(), t;
                }
                r(n, v);
                var o = i(n);
                return d(n, [{
                    key: "rewriteApp",
                    value: function () {
                        var e = App, t = App, n = this;
                        App = function (t) {
                            return ["onLaunch", "onShow", "onHide", "onError"].forEach(function (e) {
                                var r = t[e];
                                "onLaunch" === e && (n.getNetworkType(), n.config.setSystemInfo && n.getSystemInfo(),
                                    n.reportPerformance()), t[e] = function (t) {
                                        var o = {
                                            type: "function",
                                            time: h.now(),
                                            belong: "App",
                                            method: e,
                                            path: t && t.path,
                                            query: t && t.query,
                                            scene: t && t.scene
                                        };
                                        return n.pushToBreadcrumb(o), "onError" === e && n.error({
                                            msg: t
                                        }), r && r.call(this, t);
                                    };
                            }), e(t);
                        }, Object.assign(App, t, App);
                    }
                }, {
                    key: "rewritePage",
                    value: function () {
                        var e = this, t = Page, n = Page;
                        Page = function (n) {
                            return Object.keys(n).forEach(function (t) {
                                "function" == typeof n[t] && e.recordPageFn(n, t);
                            }), n.onReady || e.recordPageFn(n, "onReady"), n.onLoad || e.recordPageFn(n, "onLoad"),
                                n.onShow || e.recordPageFn(n, "onShow"), t(n);
                        }, Object.assign(Page, n, Page);
                    }
                }, {
                    key: "rewriteComponent",
                    value: function () {
                        var e = this, t = Component;
                        Component = function (n) {
                            var r = n.methods || {};
                            return Object.keys(r).forEach(function (t) {
                                "function" == typeof r[t] && e.recordPageFn(r, t);
                            }), r.onReady || e.recordPageFn(r, "onReady"), r.onLoad || e.recordPageFn(r, "onLoad"),
                                r.onShow || e.recordPageFn(r, "onShow"), t(n);
                        };
                    }
                }, {
                    key: "getActivePage",
                    value: function () {
                        var e = getCurrentPages();
                        return e.length ? (e[e.length - 1].route = e[e.length - 1].route || e[e.length - 1].__route__,
                            e[e.length - 1]) : {};
                    }
                }, {
                    key: "pushToBreadcrumb",
                    value: function (e) {
                        this.breadcrumbs.push(e), this.breadcrumbs.length > 20 && this.breadcrumbs.shift();
                    }
                }, {
                    key: "recordPageFn",
                    value: function (e, t) {
                        var n = e[t], r = this;
                        e[t] = function () {
                            "onLoad" !== t && "onShow" !== t || (r.activePage = r.getActivePage()), "onShow" === t && r.pageView();
                            var e = {
                                type: "function",
                                time: h.now(),
                                belong: "Page",
                                method: t,
                                route: r.activePage && r.activePage.route,
                                options: r.activePage && r.activePage.options
                            };
                            return "onLoad" === t && (e.args = arguments), r.methodFilter(t) && r.pushToBreadcrumb(e),
                                n && n.apply(this, arguments);
                        };
                    }
                }, {
                    key: "methodFilter",
                    value: function (e) {
                        return "onPageScroll" !== e;
                    }
                }, {
                    key: "getNetworkType",
                    value: function () {
                        var e = this;
                        t.getNetworkType({
                            success: function (t) {
                                e.networkType = t.networkType;
                            }
                        });
                    }
                }, {
                    key: "getSystemInfo",
                    value: function () {
                        this.systemInfo = t.getSystemInfoSync();
                    }
                }, {
                    key: "getLocation",
                    value: function () {
                        var e = this;
                        t.getLocation({
                            type: "wgs84",
                            success: function (t) {
                                e.locationInfo = t;
                            }
                        });
                    }
                }, {
                    key: "reportPerformance",
                    value: function () {
                        var e = this;
                        wx.canIUse("getPerformance") && wx.getPerformance().createObserver(function (t) {
                            var n = 0;
                            try {
                                n = t.getEntries()[0].duration;
                            } catch (e) { }
                            e.report(null, 1, n);
                        }).observe({
                            entryTypes: ["render"]
                        });
                    }
                }]), n;
            }())();
            e.exports = m;
        }).call(this, n("543d").default);
    },
    "543d": function (e, t, n) {
        function r(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })), n.push.apply(n, r);
            }
            return n;
        }
        function o(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? r(Object(n), !0).forEach(function (t) {
                    l(e, t, n[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
            }
            return e;
        }
        function i(e, t) {
            return u(e) || c(e, t) || d(e, t) || s();
        }
        function s() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function c(e, t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                var n = [], r = !0, o = !1, i = void 0;
                try {
                    for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value),
                        !t || n.length !== t); r = !0);
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    o = !0, i = e;
                } finally {
                    try {
                        r || null == s.return || s.return();
                    } finally {
                        if (o) throw i;
                    }
                }
                return n;
            }
        }
        function u(e) {
            if (Array.isArray(e)) return e;
        }
        function l(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        function f(e) {
            return g(e) || h(e) || d(e) || p();
        }
        function p() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function d(e, t) {
            if (e) {
                if ("string" == typeof e) return y(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? y(e, t) : void 0;
            }
        }
        function h(e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
        }
        function g(e) {
            if (Array.isArray(e)) return y(e);
        }
        function y(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r;
        }
        function v(e) {
            return (v = "function" == typeof Symbol && "symbol" === a(Symbol.iterator) ? function (e) {
                return void 0 === e ? "undefined" : a(e);
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : a(e);
            })(e);
        }
        function m(e) {
            return "function" == typeof e;
        }
        function b(e) {
            return "string" == typeof e;
        }
        function w(e) {
            return "[object Object]" === Pe.call(e);
        }
        function x(e, t) {
            return Le.call(e, t);
        }
        function _() { }
        function I(e) {
            var t = Object.create(null);
            return function (n) {
                return t[n] || (t[n] = e(n));
            };
        }
        function A(e, t) {
            var n = t ? e ? e.concat(t) : Array.isArray(t) ? t : [t] : e;
            return n ? S(n) : n;
        }
        function S(e) {
            for (var t = [], n = 0; n < e.length; n++) -1 === t.indexOf(e[n]) && t.push(e[n]);
            return t;
        }
        function O(e, t) {
            var n = e.indexOf(t);
            -1 !== n && e.splice(n, 1);
        }
        function C(e, t) {
            Object.keys(t).forEach(function (n) {
                -1 !== Ue.indexOf(n) && m(t[n]) && (e[n] = A(e[n], t[n]));
            });
        }
        function D(e, t) {
            e && t && Object.keys(t).forEach(function (n) {
                -1 !== Ue.indexOf(n) && m(t[n]) && O(e[n], t[n]);
            });
        }
        function k(e) {
            return function (t) {
                return e(t) || t;
            };
        }
        function T(e) {
            return !!e && ("object" === v(e) || "function" == typeof e) && "function" == typeof e.then;
        }
        function E(e, t) {
            for (var n = !1, r = 0; r < e.length; r++) {
                var o = e[r];
                if (n) n = Promise.resolve(k(o)); else {
                    var i = o(t);
                    if (T(i) && (n = Promise.resolve(i)), !1 === i) return {
                        then: function () { }
                    };
                }
            }
            return n || {
                then: function (e) {
                    return e(t);
                }
            };
        }
        function j(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return ["success", "fail", "complete"].forEach(function (n) {
                if (Array.isArray(e[n])) {
                    var r = t[n];
                    t[n] = function (t) {
                        E(e[n], t).then(function (e) {
                            return m(r) && r(e) || e;
                        });
                    };
                }
            }), t;
        }
        function P(e, t) {
            var n = [];
            Array.isArray(Ne.returnValue) && n.push.apply(n, f(Ne.returnValue));
            var r = $e[e];
            return r && Array.isArray(r.returnValue) && n.push.apply(n, f(r.returnValue)), n.forEach(function (e) {
                t = e(t) || t;
            }), t;
        }
        function L(e) {
            var t = Object.create(null);
            Object.keys(Ne).forEach(function (e) {
                "returnValue" !== e && (t[e] = Ne[e].slice());
            });
            var n = $e[e];
            return n && Object.keys(n).forEach(function (e) {
                "returnValue" !== e && (t[e] = (t[e] || []).concat(n[e]));
            }), t;
        }
        function M(e, t, n) {
            for (var r = arguments.length, o = new Array(r > 3 ? r - 3 : 0), i = 3; i < r; i++) o[i - 3] = arguments[i];
            var a = L(e);
            return a && Object.keys(a).length ? Array.isArray(a.invoke) ? E(a.invoke, n).then(function (e) {
                return t.apply(void 0, [j(a, e)].concat(o));
            }) : t.apply(void 0, [j(a, n)].concat(o)) : t.apply(void 0, [n].concat(o));
        }
        function R(e) {
            return We.test(e) && -1 === Ve.indexOf(e);
        }
        function U(e) {
            return Be.test(e) && -1 === qe.indexOf(e);
        }
        function N(e) {
            return Ge.test(e) && "onPush" !== e;
        }
        function $(e) {
            return e.then(function (e) {
                return [null, e];
            }).catch(function (e) {
                return [e];
            });
        }
        function F(e) {
            return !(R(e) || U(e) || N(e));
        }
        function B(e, t) {
            return F(e) ? function () {
                for (var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) o[i - 1] = arguments[i];
                return m(n.success) || m(n.fail) || m(n.complete) ? P(e, M.apply(void 0, [e, t, n].concat(o))) : P(e, $(new Promise(function (r, i) {
                    M.apply(void 0, [e, t, Object.assign({}, n, {
                        success: r,
                        fail: i
                    })].concat(o));
                })));
            } : t;
        }
        function W() {
            var e = wx.getSystemInfoSync(), t = e.platform, n = e.pixelRatio, r = e.windowWidth;
            ze = r, Ye = n, Ke = "ios" === t;
        }
        function V(e) {
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
            return function (r) {
                return t(X(e, r, n));
            };
        }
        function G(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            if (w(t)) {
                var i = !0 === o ? t : {};
                for (var a in m(n) && (n = n(t, i) || {}), t) if (x(n, a)) {
                    var s = n[a];
                    m(s) && (s = s(t[a], t, i)), s ? b(s) ? i[s] = t[a] : w(s) && (i[s.name ? s.name : a] = s.value) : console.warn("微信小程序 ".concat(e, "暂不支持").concat(a));
                } else -1 !== nt.indexOf(a) ? m(t[a]) && (i[a] = q(e, t[a], r)) : o || (i[a] = t[a]);
                return i;
            }
            return m(t) && (t = q(e, t, r)), t;
        }
        function X(e, t, n) {
            var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            return m(Ze.returnValue) && (t = Ze.returnValue(e, t)), G(e, t, n, {}, r);
        }
        function H(e, t) {
            if (x(Ze, e)) {
                var n = Ze[e];
                return n ? function (t, r) {
                    var o = n;
                    m(n) && (o = n(t));
                    var i = [t = G(e, t, o.args, o.returnValue)];
                    void 0 !== r && i.push(r);
                    var a = wx[o.name || e].apply(wx, i);
                    return U(e) ? X(e, a, o.returnValue, R(e)) : a;
                } : function () {
                    console.error("微信小程序 暂不支持".concat(e));
                };
            }
            return t;
        }
        function K(e) {
            return function (t) {
                var n = t.fail, r = t.complete, o = {
                    errMsg: "".concat(e, ":fail:暂不支持 ").concat(e, " 方法")
                };
                m(n) && n(o), m(r) && r(o);
            };
        }
        function z(e, t, n) {
            return e[t].apply(e, n);
        }
        function Y(e) {
            if (wx.canIUse("nextTick")) {
                var t = e.triggerEvent;
                e.triggerEvent = function (n) {
                    for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) o[i - 1] = arguments[i];
                    return t.apply(e, [pt(n)].concat(o));
                };
            }
        }
        function J(e, t) {
            var n = t[e];
            t[e] = n ? function () {
                Y(this);
                for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                return n.apply(this, t);
            } : function () {
                Y(this);
            };
        }
        function Q(e, t) {
            var n = e.$mp[e.mpType];
            t.forEach(function (t) {
                x(n, t) && (e[t] = n[t]);
            });
        }
        function Z(e, t) {
            if (!t) return !0;
            if (je.default.options && Array.isArray(je.default.options[e])) return !0;
            if (t = t.default || t, m(t)) return !!m(t.extendOptions[e]) || !!(t.super && t.super.options && Array.isArray(t.super.options[e]));
            if (m(t[e])) return !0;
            var n = t.mixins;
            return Array.isArray(n) ? !!n.find(function (t) {
                return Z(e, t);
            }) : void 0;
        }
        function ee(e, t, n) {
            t.forEach(function (t) {
                Z(t, n) && (e[t] = function (e) {
                    return this.$vm && this.$vm.__call_hook(t, e);
                });
            });
        }
        function te(e, t) {
            var n;
            return t = t.default || t, n = m(t) ? t : e.extend(t), t = n.options, [n, t];
        }
        function ne(e, t) {
            if (Array.isArray(t) && t.length) {
                var n = Object.create(null);
                t.forEach(function (e) {
                    n[e] = !0;
                }), e.$scopedSlots = e.$slots = n;
            }
        }
        function re(e, t) {
            var n = (e = (e || "").split(",")).length;
            1 === n ? t._$vueId = e[0] : 2 === n && (t._$vueId = e[0], t._$vuePid = e[1]);
        }
        function oe(e, t) {
            var n = e.data || {}, r = e.methods || {};
            if ("function" == typeof n) try {
                n = n.call(t);
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                Object({
                    NODE_ENV: "production",
                    VUE_APP_PLATFORM: "mp-weixin",
                    BASE_URL: "/"
                }).VUE_APP_DEBUG && console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。", n);
            } else try {
                n = JSON.parse(JSON.stringify(n));
            } catch (e) { }
            return w(n) || (n = {}), Object.keys(r).forEach(function (e) {
                -1 !== t.__lifecycle_hooks__.indexOf(e) || x(n, e) || (n[e] = r[e]);
            }), n;
        }
        function ie(e) {
            return function (t, n) {
                this.$vm && (this.$vm[e] = t);
            };
        }
        function ae(e, t) {
            var n = e.behaviors, r = e.extends, o = e.mixins, i = e.props;
            i || (e.props = i = []);
            var a = [];
            return Array.isArray(n) && n.forEach(function (e) {
                a.push(e.replace("uni://", "wx".concat("://"))), "uni://form-field" === e && (Array.isArray(i) ? (i.push("name"),
                    i.push("value")) : (i.name = {
                        type: String,
                        default: ""
                    }, i.value = {
                        type: [String, Number, Boolean, Array, Object, Date],
                        default: ""
                    }));
            }), w(r) && r.props && a.push(t({
                properties: ce(r.props, !0)
            })), Array.isArray(o) && o.forEach(function (e) {
                w(e) && e.props && a.push(t({
                    properties: ce(e.props, !0)
                }));
            }), a;
        }
        function se(e, t, n, r) {
            return Array.isArray(t) && 1 === t.length ? t[0] : t;
        }
        function ce(e) {
            var t = {};
            return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] || (t.vueId = {
                type: String,
                value: ""
            }, t.generic = {
                type: Object,
                value: null
            }, t.vueSlots = {
                type: null,
                value: [],
                observer: function (e, t) {
                    var n = Object.create(null);
                    e.forEach(function (e) {
                        n[e] = !0;
                    }), this.setData({
                        $slots: n
                    });
                }
            }), Array.isArray(e) ? e.forEach(function (e) {
                t[e] = {
                    type: null,
                    observer: ie(e)
                };
            }) : w(e) && Object.keys(e).forEach(function (n) {
                var r = e[n];
                if (w(r)) {
                    var o = r.default;
                    m(o) && (o = o()), r.type = se(n, r.type), t[n] = {
                        type: -1 !== ht.indexOf(r.type) ? r.type : null,
                        value: o,
                        observer: ie(n)
                    };
                } else {
                    var i = se(n, r);
                    t[n] = {
                        type: -1 !== ht.indexOf(i) ? i : null,
                        observer: ie(n)
                    };
                }
            }), t;
        }
        function ue(e) {
            try {
                e.mp = JSON.parse(JSON.stringify(e));
            } catch (e) { }
            return e.stopPropagation = _, e.preventDefault = _, e.target = e.target || {}, x(e, "detail") || (e.detail = {}),
                x(e, "markerId") && (e.detail = "object" === v(e.detail) ? e.detail : {}, e.detail.markerId = e.markerId),
                w(e.detail) && (e.target = Object.assign({}, e.target, e.detail)), e;
        }
        function le(e, t) {
            var n = e;
            return t.forEach(function (t) {
                var r = t[0], o = t[2];
                if (r || void 0 !== o) {
                    var i, a = t[1], s = t[3];
                    Number.isInteger(r) ? i = r : r ? "string" == typeof r && r && (i = 0 === r.indexOf("#s#") ? r.substr(3) : e.__get_value(r, n)) : i = n,
                        Number.isInteger(i) ? n = o : a ? Array.isArray(i) ? n = i.find(function (t) {
                            return e.__get_value(a, t) === o;
                        }) : w(i) ? n = Object.keys(i).find(function (t) {
                            return e.__get_value(a, i[t]) === o;
                        }) : console.error("v-for 暂不支持循环数据：", i) : n = i[o], s && (n = e.__get_value(s, n));
                }
            }), n;
        }
        function fe(e, t, n) {
            var r = {};
            return Array.isArray(t) && t.length && t.forEach(function (t, o) {
                "string" == typeof t ? t ? "$event" === t ? r["$" + o] = n : "arguments" === t ? n.detail && n.detail.__args__ ? r["$" + o] = n.detail.__args__ : r["$" + o] = [n] : 0 === t.indexOf("$event.") ? r["$" + o] = e.__get_value(t.replace("$event.", ""), n) : r["$" + o] = e.__get_value(t) : r["$" + o] = e : r["$" + o] = le(e, t);
            }), r;
        }
        function pe(e) {
            for (var t = {}, n = 1; n < e.length; n++) {
                var r = e[n];
                t[r[0]] = r[1];
            }
            return t;
        }
        function de(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [], r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [], o = arguments.length > 4 ? arguments[4] : void 0, i = arguments.length > 5 ? arguments[5] : void 0, a = !1;
            if (o && (a = t.currentTarget && t.currentTarget.dataset && "wx" === t.currentTarget.dataset.comType,
                !n.length)) return a ? [t] : t.detail.__args__ || t.detail;
            var s = fe(e, r, t), c = [];
            return n.forEach(function (e) {
                "$event" === e ? "__set_model" !== i || o ? o && !a ? c.push(t.detail.__args__[0]) : c.push(t) : c.push(t.target.value) : Array.isArray(e) && "o" === e[0] ? c.push(pe(e)) : "string" == typeof e && x(s, e) ? c.push(s[e]) : c.push(e);
            }), c;
        }
        function he(e, t) {
            return e === t || "regionchange" === t && ("begin" === e || "end" === e);
        }
        function ge(e) {
            for (var t = e.$parent; t && t.$parent && (t.$options.generic || t.$parent.$options.generic || t.$scope._$vuePid);) t = t.$parent;
            return t && t.$parent;
        }
        function ye(e) {
            var t = this, n = ((e = ue(e)).currentTarget || e.target).dataset;
            if (!n) return console.warn("事件信息不存在");
            var r = n.eventOpts || n["event-opts"];
            if (!r) return console.warn("事件信息不存在");
            var o = e.type, i = [];
            return r.forEach(function (n) {
                var r = n[0], a = n[1], s = r.charAt(0) === yt, c = (r = s ? r.slice(1) : r).charAt(0) === gt;
                r = c ? r.slice(1) : r, a && he(o, r) && a.forEach(function (n) {
                    var r = n[0];
                    if (r) {
                        var o = t.$vm;
                        if (o.$options.generic && (o = ge(o) || o), "$emit" === r) return void o.$emit.apply(o, de(t.$vm, e, n[1], n[2], s, r));
                        var a = o[r];
                        if (!m(a)) throw new Error(" _vm.".concat(r, " is not a function"));
                        if (c) {
                            if (a.once) return;
                            a.once = !0;
                        }
                        var u = de(t.$vm, e, n[1], n[2], s, r);
                        i.push(a.apply(o, (Array.isArray(u) ? u : []).concat([, , , , , , , , , , e])));
                    }
                });
            }), "input" === o && 1 === i.length && void 0 !== i[0] ? i[0] : void 0;
        }
        function ve(e, t) {
            var n = t.mocks, r = t.initRefs;
            e.$options.store && (je.default.prototype.$store = e.$options.store), je.default.prototype.mpHost = "mp-weixin",
                je.default.mixin({
                    beforeCreate: function () {
                        this.$options.mpType && (this.mpType = this.$options.mpType, this.$mp = l({
                            data: {}
                        }, this.mpType, this.$options.mpInstance), this.$scope = this.$options.mpInstance,
                            delete this.$options.mpType, delete this.$options.mpInstance, "app" !== this.mpType && (r(this),
                                Q(this, n)));
                    }
                });
            var o = {
                onLaunch: function (t) {
                    this.$vm || (wx.canIUse("nextTick") || console.error("当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上"),
                        this.$vm = e, this.$vm.$mp = {
                            app: this
                        }, this.$vm.$scope = this, this.$vm.globalData = this.globalData, this.$vm._isMounted = !0,
                        this.$vm.__call_hook("mounted", t), this.$vm.__call_hook("onLaunch", t));
                }
            };
            o.globalData = e.$options.globalData || {};
            var i = e.$options.methods;
            return i && Object.keys(i).forEach(function (e) {
                o[e] = i[e];
            }), ee(o, vt), o;
        }
        function me(e, t) {
            for (var n, r = e.$children, o = r.length - 1; o >= 0; o--) {
                var i = r[o];
                if (i.$scope._$vueId === t) return i;
            }
            for (var a = r.length - 1; a >= 0; a--) if (n = me(r[a], t)) return n;
        }
        function be(e) {
            return Behavior(e);
        }
        function we() {
            return !!this.route;
        }
        function xe(e) {
            this.triggerEvent("__l", e);
        }
        function _e(e) {
            var t = e.$scope;
            Object.defineProperty(e, "$refs", {
                get: function () {
                    var e = {};
                    return t.selectAllComponents(".vue-ref").forEach(function (t) {
                        var n = t.dataset.ref;
                        e[n] = t.$vm || t;
                    }), t.selectAllComponents(".vue-ref-in-for").forEach(function (t) {
                        var n = t.dataset.ref;
                        e[n] || (e[n] = []), e[n].push(t.$vm || t);
                    }), e;
                }
            });
        }
        function Ie(e) {
            var t, n = e.detail || e.value, r = n.vuePid, o = n.vueOptions;
            r && (t = me(this.$vm, r)), t || (t = this.$vm), o.parent = t;
        }
        function Ae(e) {
            return ve(e, {
                mocks: mt,
                initRefs: _e
            });
        }
        function Se(e) {
            return App(Ae(e)), e;
        }
        function Oe(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = t.isPage, r = t.initRelation, a = i(te(je.default, e), 2), s = a[0], c = a[1], u = o({
                multipleSlots: !0,
                addGlobalClass: !0
            }, c.options || {});
            c["mp-weixin"] && c["mp-weixin"].options && Object.assign(u, c["mp-weixin"].options);
            var l = {
                options: u,
                data: oe(c, je.default.prototype),
                behaviors: ae(c, be),
                properties: ce(c.props, !1, c.__file),
                lifetimes: {
                    attached: function () {
                        var e = this.properties, t = {
                            mpType: n.call(this) ? "page" : "component",
                            mpInstance: this,
                            propsData: e
                        };
                        re(e.vueId, this), r.call(this, {
                            vuePid: this._$vuePid,
                            vueOptions: t
                        }), this.$vm = new s(t), ne(this.$vm, e.vueSlots), this.$vm.$mount();
                    },
                    ready: function () {
                        this.$vm && (this.$vm._isMounted = !0, this.$vm.__call_hook("mounted"), this.$vm.__call_hook("onReady"));
                    },
                    detached: function () {
                        this.$vm && this.$vm.$destroy();
                    }
                },
                pageLifetimes: {
                    show: function (e) {
                        this.$vm && this.$vm.__call_hook("onPageShow", e);
                    },
                    hide: function () {
                        this.$vm && this.$vm.__call_hook("onPageHide");
                    },
                    resize: function (e) {
                        this.$vm && this.$vm.__call_hook("onPageResize", e);
                    }
                },
                methods: {
                    __l: Ie,
                    __e: ye
                }
            };
            return c.externalClasses && (l.externalClasses = c.externalClasses), Array.isArray(c.wxsCallMethods) && c.wxsCallMethods.forEach(function (e) {
                l.methods[e] = function (t) {
                    return this.$vm[e](t);
                };
            }), n ? l : [l, s];
        }
        function Ce(e) {
            return Oe(e, {
                isPage: we,
                initRelation: xe
            });
        }
        function De(e, t) {
            t.isPage, t.initRelation;
            var n = Ce(e);
            return ee(n.methods, bt, e), n.methods.onLoad = function (e) {
                this.$vm.$mp.query = e, this.$vm.__call_hook("onLoad", e);
            }, n;
        }
        function ke(e) {
            return De(e, {
                isPage: we,
                initRelation: xe
            });
        }
        function Te(e) {
            return Component(ke(e));
        }
        function Ee(e) {
            return Component(Ce(e));
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.createApp = Se, t.createComponent = Ee, t.createPage = Te, t.default = void 0;
        var je = function (e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(n("66fd")), Pe = Object.prototype.toString, Le = Object.prototype.hasOwnProperty, Me = /-(\w)/g, Re = I(function (e) {
            return e.replace(Me, function (e, t) {
                return t ? t.toUpperCase() : "";
            });
        }), Ue = ["invoke", "success", "fail", "complete", "returnValue"], Ne = {}, $e = {}, Fe = {
            returnValue: function (e) {
                return T(e) ? e.then(function (e) {
                    return e[1];
                }).catch(function (e) {
                    return e[0];
                }) : e;
            }
        }, Be = /^\$|sendNativeEvent|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/, We = /^create|Manager$/, Ve = ["createBLEConnection"], qe = ["createBLEConnection"], Ge = /^on|^off/;
        Promise.prototype.finally || (Promise.prototype.finally = function (e) {
            var t = this.constructor;
            return this.then(function (n) {
                return t.resolve(e()).then(function () {
                    return n;
                });
            }, function (n) {
                return t.resolve(e()).then(function () {
                    throw n;
                });
            });
        });
        var Xe = 1e-4, He = 750, Ke = !1, ze = 0, Ye = 0, Je = {
            promiseInterceptor: Fe
        }, Qe = Object.freeze({
            __proto__: null,
            upx2px: function (e, t) {
                if (0 === ze && W(), 0 === (e = Number(e))) return 0;
                var n = e / He * (t || ze);
                return n < 0 && (n = -n), 0 === (n = Math.floor(n + Xe)) && (n = 1 !== Ye && Ke ? .5 : 1),
                    e < 0 ? -n : n;
            },
            addInterceptor: function (e, t) {
                "string" == typeof e && w(t) ? C($e[e] || ($e[e] = {}), t) : w(e) && C(Ne, e);
            },
            removeInterceptor: function (e, t) {
                "string" == typeof e ? w(t) ? D($e[e], t) : delete $e[e] : w(e) && D(Ne, e);
            },
            interceptors: Je
        }), Ze = {
            previewImage: {
                args: function (e) {
                    var t = parseInt(e.current);
                    if (!isNaN(t)) {
                        var n = e.urls;
                        if (Array.isArray(n)) {
                            var r = n.length;
                            if (r) return t < 0 ? t = 0 : t >= r && (t = r - 1), t > 0 ? (e.current = n[t],
                                e.urls = n.filter(function (e, r) {
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
                returnValue: V
            },
            getSystemInfoSync: {
                returnValue: V
            }
        }, et = ["vibrate", "preloadPage", "unPreloadPage", "loadSubPackage"], tt = [], nt = ["success", "fail", "cancel", "complete"], rt = Object.create(null);
        ["onTabBarMidButtonTap", "subscribePush", "unsubscribePush", "onPush", "offPush", "share"].forEach(function (e) {
            rt[e] = K(e);
        });
        var ot = {
            oauth: ["weixin"],
            share: ["weixin"],
            payment: ["wxpay"],
            push: ["weixin"]
        }, it = Object.freeze({
            __proto__: null,
            getProvider: function (e) {
                var t = e.service, n = e.success, r = e.fail, o = e.complete, i = !1;
                ot[t] ? (i = {
                    errMsg: "getProvider:ok",
                    service: t,
                    provider: ot[t]
                }, m(n) && n(i)) : (i = {
                    errMsg: "getProvider:fail:服务[" + t + "]不存在"
                }, m(r) && r(i)), m(o) && o(i);
            }
        }), at = function () {
            var e;
            return function () {
                return e || (e = new je.default()), e;
            };
        }(), st = Object.freeze({
            __proto__: null,
            $on: function () {
                return z(at(), "$on", Array.prototype.slice.call(arguments));
            },
            $off: function () {
                return z(at(), "$off", Array.prototype.slice.call(arguments));
            },
            $once: function () {
                return z(at(), "$once", Array.prototype.slice.call(arguments));
            },
            $emit: function () {
                return z(at(), "$emit", Array.prototype.slice.call(arguments));
            }
        }), ct = Object.freeze({
            __proto__: null
        }), ut = Page, lt = Component, ft = /:/g, pt = I(function (e) {
            return Re(e.replace(ft, "-"));
        });
        Page = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return J("onLoad", e), ut(e);
        }, Component = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return J("created", e), lt(e);
        };
        var dt = ["onPullDownRefresh", "onReachBottom", "onAddToFavorites", "onShareTimeline", "onShareAppMessage", "onPageScroll", "onResize", "onTabItemTap"], ht = [String, Number, Boolean, Object, Array, null], gt = "~", yt = "^", vt = ["onShow", "onHide", "onError", "onPageNotFound", "onThemeChange", "onUnhandledRejection"], mt = ["__route__", "__wxExparserNodeId__", "__wxWebviewId__"], bt = ["onShow", "onHide", "onUnload"];
        bt.push.apply(bt, dt), et.forEach(function (e) {
            Ze[e] = !1;
        }), tt.forEach(function (e) {
            var t = Ze[e] && Ze[e].name ? Ze[e].name : e;
            wx.canIUse(t) || (Ze[e] = !1);
        });
        var wt = {};
        "undefined" != typeof Proxy ? wt = new Proxy({}, {
            get: function (e, t) {
                return x(e, t) ? e[t] : Qe[t] ? Qe[t] : ct[t] ? B(t, ct[t]) : it[t] ? B(t, it[t]) : rt[t] ? B(t, rt[t]) : st[t] ? st[t] : x(wx, t) || x(Ze, t) ? B(t, H(t, wx[t])) : void 0;
            },
            set: function (e, t, n) {
                return e[t] = n, !0;
            }
        }) : (Object.keys(Qe).forEach(function (e) {
            wt[e] = Qe[e];
        }), Object.keys(rt).forEach(function (e) {
            wt[e] = B(e, rt[e]);
        }), Object.keys(it).forEach(function (e) {
            wt[e] = B(e, rt[e]);
        }), Object.keys(st).forEach(function (e) {
            wt[e] = st[e];
        }), Object.keys(ct).forEach(function (e) {
            wt[e] = B(e, ct[e]);
        }), Object.keys(wx).forEach(function (e) {
            (x(wx, e) || x(Ze, e)) && (wt[e] = B(e, H(e, wx[e])));
        })), wx.createApp = Se, wx.createPage = Te, wx.createComponent = Ee;
        var xt = wt;
        t.default = xt;
    },
    "5b60": function (e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.eventTypes = void 0;
        var r = {
            EVENT_UPDATE: "checkpointModuleUpdate"
        };
        t.eventTypes = r;
    },
    "60e3": function (e, t, n) {
        (function (e) {
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function o(e, t, n, r, o, i, a) {
                try {
                    var s = e[i](a), c = s.value;
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    return void n(e);
                }
                s.done ? t(c) : Promise.resolve(c).then(r, o);
            }
            function i(e) {
                return function () {
                    var t = this, n = arguments;
                    return new Promise(function (r, i) {
                        function a(e) {
                            o(c, r, i, a, s, "next", e);
                        }
                        function s(e) {
                            o(c, r, i, a, s, "throw", e);
                        }
                        var c = e.apply(t, n);
                        a(void 0);
                    });
                };
            }
            function s(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })), n.push.apply(n, r);
                }
                return n;
            }
            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? s(Object(n), !0).forEach(function (t) {
                        u(e, t, n[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach(function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                    });
                }
                return e;
            }
            function u(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e;
            }
            function l(e) {
                return (l = "function" == typeof Symbol && "symbol" === a(Symbol.iterator) ? function (e) {
                    return void 0 === e ? "undefined" : a(e);
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : a(e);
                })(e);
            }
            function f(e, t) {
                return y(e) || g(e, t) || d(e, t) || p();
            }
            function p() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            function d(e, t) {
                if (e) {
                    if ("string" == typeof e) return h(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? h(e, t) : void 0;
                }
            }
            function h(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r;
            }
            function g(e, t) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                    var n = [], r = !0, o = !1, i = void 0;
                    try {
                        for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value),
                            !t || n.length !== t); r = !0);
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        o = !0, i = e;
                    } finally {
                        try {
                            r || null == s.return || s.return();
                        } finally {
                            if (o) throw i;
                        }
                    }
                    return n;
                }
            }
            function y(e) {
                if (Array.isArray(e)) return e;
            }
            function v() {
                var t = getApp().globalData;
                return 0 === t.loginStatus && (t.loginStatus = 1), e.login().then(function (e) {
                    var t = f(e, 2), n = t[0], r = t[1];
                    if (n) throw n;
                    return r.code;
                }).catch(function (e) {
                    console.error(e);
                });
            }
            function m(t) {
                function n(e) {
                    console.log("--------------------"), console.log("request：".concat(i.url, "?cmd=").concat(i.data.cmd)),
                        console.log("error：", e), console.log("--------------------");
                }
                var r = E.getExtConfig(), o = {
                    url: "",
                    data: {
                        aid: r.aid,
                        wxappId: r.wxappId,
                        wxappAid: r.wxappAid,
                        isOem: r.isOem,
                        from: C.FROM,
                        isModel: r.isModel
                    },
                    method: "GET",
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                };
                o.data.wxappAppId = r.wxappAppId;
                var i = Object.assign({}, o), a = "";
                if ("[object String]" === j.call(t.url)) a = t.url; else if ("[object Object]" === j.call(t.url)) {
                    var s = t.url;
                    a = (a = s.domain ? s.domain : r.wxappDomainUrl) + (0 === a.lastIndexOf("/") ? "" : "/") + (s.path ? s.path : "wxAppConnectionV3.jsp");
                } else a = r.wxappDomain;
                if (i.url = a, i.data = Object.assign({}, i.data, t.data), t.method && (i.method = t.method),
                    t.header && (i.header = Object.assign({}, i.header, t.header)), "POST" == i.method || "post" == i.method) {
                    var c = i.url, u = -1 !== c.indexOf("?") ? "&" : "?";
                    i.url = c + u + "cmd=" + i.data.cmd;
                }
                return e.request(i).then(function (e) {
                    "getAudio" == i.data.cmd && (console.log("requestParams", i), console.log("data", e));
                    var r = f(e, 2), o = r[0], a = r[1];
                    if (t.raw) return e;
                    if (a.data.success || n(a.data.msg), o) throw o;
                    return a.data;
                }).catch(function (e) {
                    n(e);
                });
            }
            function b(t) {
                if (!t.openId) return m(t);
                var n = getApp().globalData;
                return n.openId ? (t.data = Object.assign({}, t.data, {
                    openId: n.openId,
                    from: C.FROM
                }), m(t)) : L().then(function (r) {
                    if (r) return t.data = Object.assign({}, t.data, {
                        openId: n.openId,
                        from: C.FROM
                    }), m(t);
                    e.showModal({
                        title: "请求失败",
                        content: "获取 openId 失败，请稍候再试",
                        showCancel: !1,
                        confirmText: "确定"
                    });
                }).catch(console.error);
            }
            function w(t) {
                var n = getApp();
                return b({
                    data: {
                        cmd: "getUserInfoByCode",
                        code: t
                    }
                }).then(function (t) {
                    if (!t || !t.success) throw new Error(t.msg);
                    console.log("getUserInfoByCode"), t.sessionKey && e.setStorageSync("_SESSION_KEY", t.sessionKey);
                    var r = n.globalData, o = t.userInfo;
                    return o ? (r.userInfo = o, r.openId = o.openId) : r.openId = t.openId, t;
                }).catch(function (e) {
                    console.error(e);
                });
            }
            function x() {
                function e() {
                    b({
                        url: {
                            path: "appAjax/wxAppConnectionVisitor.jsp"
                        },
                        data: c({
                            cmd: "addUpdatings",
                            visitorId: n.visitorId,
                            pageUrl: o
                        }, t)
                    });
                }
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = getApp().globalData, r = getCurrentPages(), o = r[r.length - 1].route, i = 0;
                if (n.visitorId) e(); else var a = setInterval(function () {
                    ++i >= 10 && clearInterval(a), n.visitorId && (clearInterval(a), e());
                }, 500);
            }
            function _(e) {
                var t, n = getApp().globalData, r = {
                    data: {
                        cmd: "addUserInfo"
                    },
                    method: "POST"
                };
                return n.openId ? (e.openId = n.openId, r.data.userInfo = JSON.stringify(e), t = b(r)) : t = L().then(function (t) {
                    if (t) return e.openId = n.openId, r.data.userInfo = JSON.stringify(e), b(r);
                }).catch(function (e) {
                    console.error(e);
                }), t.then(function (t) {
                    if (t) {
                        if (!t.success) throw console.error(t), Error(t.errMsg);
                        return n.openId = e.openId, n.userInfo = Object.assign({}, n.userInfo, e), !0;
                    }
                }).catch(function (e) {
                    console.error(e);
                }), t;
            }
            function I(t, n) {
                x({
                    type: 22
                }), e.showLoading(), new T({
                    key: E.getKey(n)
                }).geocoder({
                    address: t,
                    success: function (n) {
                        var r = n.result.location, o = r.lng, i = r.lat;
                        e.openLocation({
                            latitude: i,
                            longitude: o,
                            name: t
                        }), e.hideLoading();
                    },
                    fail: function (n) {
                        121 == n.status && -1 != n.message.indexOf("此key每日调用量已达到上限") ? I(t, !0) : (e.hideLoading(),
                            e.showModal({
                                title: "请求失败",
                                content: n.message,
                                showCancel: !1
                            }));
                    }
                });
            }
            function A() {
                return (A = i(O.default.mark(function t(n) {
                    var r, o, i, a, s, c, u, l, f;
                    return O.default.wrap(function (t) {
                        for (; ;) switch (t.prev = t.next) {
                            case 0:
                                return r = 1048576, o = E.getExtConfig(), i = o.wxappAid, a = o.wxappId, s = n.chunkOption,
                                    c = n.option, e.showLoading({
                                        title: "上传中",
                                        mask: !0
                                    }), u = function () {
                                        return b({
                                            url: {
                                                path: "wxAppAdvanceUpload.jsp"
                                            },
                                            data: {
                                                cmd: "getChunkUploadOption"
                                            }
                                        });
                                    }, t.next = 9, u();

                            case 9:
                                if (l = t.sent, f = l.data, console.log("defalutOption", f), !(s && s.fileSize > f.chunkSize && k.default.isSupport())) {
                                    t.next = 17;
                                    break;
                                }
                                return console.log("正在进行分片上传..."), t.abrupt("return", b({
                                    url: {
                                        path: "wxAppAdvanceUpload.jsp"
                                    },
                                    data: {
                                        cmd: "genTmpFileId",
                                        wxappAid: i,
                                        wxappId: a,
                                        fileType: c.fileType
                                    }
                                }).then(function (t) {
                                    if (!t.success) throw Error(t.msg);
                                    var n = {
                                        tempFilePath: s.filePath,
                                        totalSize: s.fileSize,
                                        maxConcurrency: f.maxConcurrency,
                                        chunkSize: f.chunkSize,
                                        maxMemory: f.maxMemory,
                                        maxChunkRetries: f.maxChunkRetries,
                                        timeout: f.timeout,
                                        uploadUrl: "".concat(o.wxappDomainUrl).concat(s.url),
                                        mergeUrl: "".concat(o.wxappDomainUrl).concat(s.url, "?cmd=").concat(s.cmd, "&fileType=").concat(s.fileType, "&wxappAid=").concat(i, "&wxappId=").concat(a),
                                        generateIdentifier: function () {
                                            return t.fileId;
                                        },
                                        query: {
                                            cmd: s.cmd,
                                            wxappAid: i,
                                            wxappId: a,
                                            fileType: s.fileType
                                        }
                                    };
                                    return new Promise(function (t) {
                                        var o = new k.default(n);
                                        o.upload(), o.on("complete", function (n) {
                                            console.log("upload complete", n), e.hideLoading(), t(n);
                                        }), o.on("progress", function (e) {
                                            console.log("上传速度：".concat((e.averageSpeed / r).toFixed(2), " MB/s"));
                                        });
                                    });
                                }));

                            case 17:
                                return t.abrupt("return", S(c));

                            case 18:
                            case "end":
                                return t.stop();
                        }
                    }, t);
                }))).apply(this, arguments);
            }
            function S(t) {
                console.log("正在上传...");
                var n = E.getExtConfig(), r = (0, D.stringifyUrl)({
                    url: "".concat(n.wxappDomainUrl, "/").concat(t.url),
                    query: c({
                        wxappAid: n.wxappAid,
                        wxappId: n.wxappId
                    }, t.query)
                });
                return e.uploadFile({
                    url: r,
                    filePath: t.filePath,
                    name: "ctrl",
                    header: {
                        "Content-Type": "multipart/form-data"
                    }
                }).then(function (t) {
                    e.hideLoading();
                    var n = f(t, 2), r = n[0], o = n[1];
                    if (r) throw Error(r.errMsg);
                    if ("" == o.data) throw Error("上传失败");
                    return "object" == l(o.data) ? o.data : JSON.parse(o.data);
                }).catch(function (t) {
                    console.log("upload err -- " + t), e.hideLoading(), e.showModal({
                        title: "上传失败",
                        showCancel: !1,
                        content: t.message
                    });
                });
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.initLogin = v, t.request = b, t.logDog = function (e, t) {
                var n = {};
                if ("object" === l(e)) {
                    if (!(n = e[C.fromTypes.WEIXIN])) return;
                } else n.dogId = e, n.srcId = t;
                b({
                    data: {
                        cmd: "logDog",
                        dogId: n.dogId,
                        srcId: n.srcId
                    }
                });
            }, t.logVisitDog = function (e, t) {
                var n = E.getExtConfig();
                if (!n.isOem) {
                    var r = {};
                    if ("object" === l(e)) {
                        if (!(r = e[C.fromTypes.WEIXIN])) return;
                    } else r.dogId = e, r.srcId = t;
                    b({
                        url: n.wxappDomainUrl + "appAjax/wxAppLogDog.jsp",
                        data: {
                            dogId: r.dogId,
                            srcId: r.srcId
                        },
                        header: {
                            cookie: "_cliid=" + getApp().globalData._cliid
                        }
                    });
                }
            }, t.getUserInfoByCode = w, t.reportVisitorBehavior = x, t.getPhoneNumber = function () {
                return b({
                    url: {
                        path: "appAjax/secureUtil.jsp"
                    },
                    data: c({
                        cmd: "decryptPhone"
                    }, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}),
                    method: "POST"
                }).then(function (e) {
                    if (!e.success) throw Error(e.msg);
                    var t = getApp().globalData;
                    return t.userInfo || (t.userInfo = {}), t.userInfo.authPhone = e.phone, e;
                }).catch(function (e) {
                    console.error(e.message);
                });
            }, t.getColInfo = function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (E.getExtConfig(), t.colId) return b({
                    data: {
                        cmd: "getWXAppColModuleInfo",
                        colId: t.colId
                    },
                    openId: !0,
                    raw: !0
                }).then(function (t) {
                    var n = f(t, 2), r = n[0], o = n[1];
                    if (r) throw r;
                    if (!o.data.success) {
                        var i = o.data.errCode, a = o.statusCode;
                        return a >= 400 && (i = a), void e.redirectTo({
                            url: "/pages/err/err?errCode=" + i
                        });
                    }
                    return o.data.colInfo;
                }).catch(function (t) {
                    console.error(t);
                    var n = getCurrentPages(), r = n[n.length - 1] || null;
                    if (r) {
                        var o = Object.keys(r.options).reduce(function (e, t) {
                            return e + "".concat(t, "=").concat(r.options[t]);
                        }, ""), i = encodeURIComponent("/".concat(r.route).concat(o ? "?" + o : ""));
                        e.redirectTo({
                            url: "/pages/err/err?requestFail=true&redirectFrom=".concat(i, "&errMsg=").concat(t.errMsg)
                        });
                    } else e.redirectTo({
                        url: "/pages/err/err?requestFail=true&errMsg=".concat(t.errMsg)
                    });
                });
                console.error("请传入正确的 colId");
            }, t.addUserInfo = _, t.setUserInfo = function () {
                return b({
                    url: {
                        path: "appAjax/wxLogin.jsp"
                    },
                    data: c({
                        cmd: "setUserInfo"
                    }, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}),
                    openId: !0,
                    method: "POST"
                });
            }, t.getLocationFromBaidu = I, t.memberLogin = function () {
                return b({
                    url: {
                        path: "appAjax/member.jsp"
                    },
                    data: {
                        cmd: "addLoginGrowthValue"
                    },
                    openId: !0
                }).then(function (t) {
                    if (!t.success) throw new Error(t.msg);
                    var n = "登录成功";
                    return t.growthName && t.growthValue && (n += "，".concat(t.growthName, "+").concat(t.growthValue)),
                        e.showToast({
                            title: n,
                            icon: "none",
                            duration: 2e3
                        }), t;
                }).catch(function (e) {
                    console.error(e);
                });
            }, t.getSessionKey = function () {
                return v().then(function (e) {
                    if (e) return b({
                        url: {
                            path: "appAjax/initInfo.jsp"
                        },
                        data: {
                            cmd: "getSessionKeyByCode",
                            code: e
                        }
                    });
                    console.error("请检查 code 是否正确");
                }).then(function (t) {
                    if (t) {
                        if (t.success) return e.setStorageSync("_SESSION_KEY", t.sessionKey), t;
                        console.error("获取 session key 失败", t);
                    }
                }).catch(function (e) {
                    console.error(e);
                });
            }, t.receiveCoupon = function (e) {
                return b({
                    url: {
                        path: "appAjax/coupon.jsp"
                    },
                    data: {
                        cmd: "receiveCoupon",
                        couponId: e.couponId
                    },
                    openId: !0
                });
            }, t.getCouponEntriesData = function (t) {
                return b({
                    url: {
                        path: "appAjax/coupon.jsp"
                    },
                    data: {
                        cmd: "getCouponEntriesData",
                        couponId: t
                    },
                    openId: !0
                }).then(function (e) {
                    if (!e.success) throw Error(e.msg);
                    return e;
                }).catch(function (t) {
                    console.error(t), e.showModal({
                        title: "提示",
                        content: t.message,
                        showCancel: !1
                    });
                });
            }, t.commonUpload = function (e) {
                return A.apply(this, arguments);
            }, t.getWXAppInfo = t.getUserInfoByOfficialApi = t.initUserInfo = void 0;
            var O = r(n("a34a")), C = n("85b1"), D = n("72bf"), k = r(n("1c20")), T = n("1819"), E = n("ca00"), j = Object.prototype.toString, P = E.mergeSamePromiseFunc(function () {
                return e.getUserInfo().then(function (e) {
                    var t = f(e, 2), n = t[0], r = t[1];
                    if (n) {
                        if (-1 !== n.errMsg.indexOf("deny")) return {
                            deny: !0
                        };
                        throw Error(n.errMsg);
                    }
                    var o = r.userInfo;
                    return _(o).then(function (e) {
                        if (e) return o;
                    });
                }).catch(function (e) {
                    console.error(e);
                });
            });
            t.getUserInfoByOfficialApi = P;
            var L = E.mergeSamePromiseFunc(function () {
                return 1154 === getApp().globalData.scene ? Promise.resolve(!0) : v().then(function (e) {
                    if (e) return w(e);
                }).then(function (e) {
                    if (e) return e;
                }).catch(function (e) {
                    console.error(e);
                });
            });
            t.initUserInfo = L;
            var M = E.mergeSamePromiseFunc(function () {
                var t = getApp().globalData;
                return b({
                    data: {
                        cmd: "getWXAppInfo"
                    },
                    raw: !0
                }).then(function (e) {
                    var n = f(e, 2), r = n[0], o = n[1];
                    if (r) throw r;
                    var i = o.data.wxappInfo;
                    return t.wxappInfo = i, t.globalColor = i.globalColor, i;
                }).catch(function (t) {
                    var n = getCurrentPages(), r = n[n.length - 1] || null;
                    if (r) {
                        var o = Object.keys(r.options).reduce(function (e, t) {
                            return e + "&".concat(t, "=").concat(r.options[t]);
                        }, ""), i = encodeURIComponent("/".concat(r.route).concat(o ? "?" + o : ""));
                        e.redirectTo({
                            url: "/pages/err/err?requestFail=true&redirectFrom=".concat(i, "&errMsg=").concat(t.errMsg)
                        });
                    } else e.redirectTo({
                        url: "/pages/err/err?requestFail=true&errMsg=".concat(t.errMsg)
                    });
                });
            });
            t.getWXAppInfo = M;
        }).call(this, n("543d").default);
    },
    6453: function (e, t, n) {
        e.exports = function (e) {
            return encodeURIComponent(e).replace(/[!'()*]/g, function (e) {
                return "%" + e.charCodeAt(0).toString(16).toUpperCase();
            });
        };
    },
    "66fd": function (e, t, n) {
        n.r(t), function (e) {
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
                return "string" == typeof e || "number" == typeof e || "symbol" === (void 0 === e ? "undefined" : a(e)) || "boolean" == typeof e;
            }
            function c(e) {
                return null !== e && "object" === (void 0 === e ? "undefined" : a(e));
            }
            function u(e) {
                return "[object Object]" === mn.call(e);
            }
            function l(e) {
                return "[object RegExp]" === mn.call(e);
            }
            function f(e) {
                var t = parseFloat(String(e));
                return t >= 0 && Math.floor(t) === t && isFinite(e);
            }
            function p(e) {
                return r(e) && "function" == typeof e.then && "function" == typeof e.catch;
            }
            function d(e) {
                return null == e ? "" : Array.isArray(e) || u(e) && e.toString === mn ? JSON.stringify(e, null, 2) : String(e);
            }
            function h(e) {
                var t = parseFloat(e);
                return isNaN(t) ? e : t;
            }
            function g(e, t) {
                for (var n = Object.create(null), r = e.split(","), o = 0; o < r.length; o++) n[r[o]] = !0;
                return t ? function (e) {
                    return n[e.toLowerCase()];
                } : function (e) {
                    return n[e];
                };
            }
            function y(e, t) {
                if (e.length) {
                    var n = e.indexOf(t);
                    if (n > -1) return e.splice(n, 1);
                }
            }
            function v(e, t) {
                return xn.call(e, t);
            }
            function m(e) {
                var t = Object.create(null);
                return function (n) {
                    return t[n] || (t[n] = e(n));
                };
            }
            function b(e, t) {
                t = t || 0;
                for (var n = e.length - t, r = new Array(n); n--;) r[n] = e[n + t];
                return r;
            }
            function w(e, t) {
                for (var n in t) e[n] = t[n];
                return e;
            }
            function x(e) {
                for (var t = {}, n = 0; n < e.length; n++) e[n] && w(t, e[n]);
                return t;
            }
            function _(e, t, n) { }
            function I(e, t) {
                if (e === t) return !0;
                var n = c(e), r = c(t);
                if (!n || !r) return !n && !r && String(e) === String(t);
                try {
                    var o = Array.isArray(e), i = Array.isArray(t);
                    if (o && i) return e.length === t.length && e.every(function (e, n) {
                        return I(e, t[n]);
                    });
                    if (e instanceof Date && t instanceof Date) return e.getTime() === t.getTime();
                    if (o || i) return !1;
                    var a = Object.keys(e), s = Object.keys(t);
                    return a.length === s.length && a.every(function (n) {
                        return I(e[n], t[n]);
                    });
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    return !1;
                }
            }
            function A(e, t) {
                for (var n = 0; n < e.length; n++) if (I(e[n], t)) return n;
                return -1;
            }
            function S(e) {
                var t = !1;
                return function () {
                    t || (t = !0, e.apply(this, arguments));
                };
            }
            function O(e) {
                var t = (e + "").charCodeAt(0);
                return 36 === t || 95 === t;
            }
            function C(e, t, n, r) {
                Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !!r,
                    writable: !0,
                    configurable: !0
                });
            }
            function D(e) {
                if (!Ln.test(e)) {
                    var t = e.split(".");
                    return function (e) {
                        for (var n = 0; n < t.length; n++) {
                            if (!e) return;
                            e = e[t[n]];
                        }
                        return e;
                    };
                }
            }
            function k(e) {
                return "function" == typeof e && /native code/.test(e.toString());
            }
            function T(e) {
                Yn.SharedObject.targetStack.push(e), Yn.SharedObject.target = e;
            }
            function E() {
                Yn.SharedObject.targetStack.pop(), Yn.SharedObject.target = Yn.SharedObject.targetStack[Yn.SharedObject.targetStack.length - 1];
            }
            function j(e) {
                return new Jn(void 0, void 0, void 0, String(e));
            }
            function P(e) {
                var t = new Jn(e.tag, e.data, e.children && e.children.slice(), e.text, e.elm, e.context, e.componentOptions, e.asyncFactory);
                return t.ns = e.ns, t.isStatic = e.isStatic, t.key = e.key, t.isComment = e.isComment,
                    t.fnContext = e.fnContext, t.fnOptions = e.fnOptions, t.fnScopeId = e.fnScopeId,
                    t.asyncMeta = e.asyncMeta, t.isCloned = !0, t;
            }
            function L(e) {
                rr = e;
            }
            function M(e, t) {
                e.__proto__ = t;
            }
            function R(e, t, n) {
                for (var r = 0, o = n.length; r < o; r++) {
                    var i = n[r];
                    C(e, i, t[i]);
                }
            }
            function U(e, t) {
                var n;
                if (c(e) && !(e instanceof Jn)) return v(e, "__ob__") && e.__ob__ instanceof or ? n = e.__ob__ : rr && !Gn() && (Array.isArray(e) || u(e)) && Object.isExtensible(e) && !e._isVue && (n = new or(e)),
                    t && n && n.vmCount++, n;
            }
            function N(e, t, n, r, o) {
                var i = new Yn(), a = Object.getOwnPropertyDescriptor(e, t);
                if (!a || !1 !== a.configurable) {
                    var s = a && a.get, c = a && a.set;
                    s && !c || 2 !== arguments.length || (n = e[t]);
                    var u = !o && U(n);
                    Object.defineProperty(e, t, {
                        enumerable: !0,
                        configurable: !0,
                        get: function () {
                            var t = s ? s.call(e) : n;
                            return Yn.SharedObject.target && (i.depend(), u && (u.dep.depend(), Array.isArray(t) && B(t))),
                                t;
                        },
                        set: function (t) {
                            var r = s ? s.call(e) : n;
                            t === r || t !== t && r !== r || s && !c || (c ? c.call(e, t) : n = t, u = !o && U(t),
                                i.notify());
                        }
                    });
                }
            }
            function $(e, t, n) {
                if (Array.isArray(e) && f(t)) return e.length = Math.max(e.length, t), e.splice(t, 1, n),
                    n;
                if (t in e && !(t in Object.prototype)) return e[t] = n, n;
                var r = e.__ob__;
                return e._isVue || r && r.vmCount ? n : r ? (N(r.value, t, n), r.dep.notify(), n) : (e[t] = n,
                    n);
            }
            function F(e, t) {
                if (Array.isArray(e) && f(t)) e.splice(t, 1); else {
                    var n = e.__ob__;
                    e._isVue || n && n.vmCount || v(e, t) && (delete e[t], n && n.dep.notify());
                }
            }
            function B(e) {
                for (var t = void 0, n = 0, r = e.length; n < r; n++) (t = e[n]) && t.__ob__ && t.__ob__.dep.depend(),
                    Array.isArray(t) && B(t);
            }
            function W(e, t) {
                if (!t) return e;
                for (var n, r, o, i = Hn ? Reflect.ownKeys(t) : Object.keys(t), a = 0; a < i.length; a++) "__ob__" !== (n = i[a]) && (r = e[n],
                    o = t[n], v(e, n) ? r !== o && u(r) && u(o) && W(r, o) : $(e, n, o));
                return e;
            }
            function V(e, t, n) {
                return n ? function () {
                    var r = "function" == typeof t ? t.call(n, n) : t, o = "function" == typeof e ? e.call(n, n) : e;
                    return r ? W(r, o) : o;
                } : t ? e ? function () {
                    return W("function" == typeof t ? t.call(this, this) : t, "function" == typeof e ? e.call(this, this) : e);
                } : t : e;
            }
            function q(e, t) {
                var n = t ? e ? e.concat(t) : Array.isArray(t) ? t : [t] : e;
                return n ? G(n) : n;
            }
            function G(e) {
                for (var t = [], n = 0; n < e.length; n++) -1 === t.indexOf(e[n]) && t.push(e[n]);
                return t;
            }
            function X(e, t, n, r) {
                var o = Object.create(e || null);
                return t ? w(o, t) : o;
            }
            function H(e, t) {
                var n = e.props;
                if (n) {
                    var r, o, i, a = {};
                    if (Array.isArray(n)) for (r = n.length; r--;) "string" == typeof (o = n[r]) && (i = In(o),
                        a[i] = {
                            type: null
                        }); else if (u(n)) for (var s in n) o = n[s], a[i = In(s)] = u(o) ? o : {
                            type: o
                        };
                    e.props = a;
                }
            }
            function K(e, t) {
                var n = e.inject;
                if (n) {
                    var r = e.inject = {};
                    if (Array.isArray(n)) for (var o = 0; o < n.length; o++) r[n[o]] = {
                        from: n[o]
                    }; else if (u(n)) for (var i in n) {
                        var a = n[i];
                        r[i] = u(a) ? w({
                            from: i
                        }, a) : {
                            from: a
                        };
                    }
                }
            }
            function z(e) {
                var t = e.directives;
                if (t) for (var n in t) {
                    var r = t[n];
                    "function" == typeof r && (t[n] = {
                        bind: r,
                        update: r
                    });
                }
            }
            function Y(e, t, n) {
                function r(r) {
                    var o = ir[r] || sr;
                    s[r] = o(e[r], t[r], n, r);
                }
                if ("function" == typeof t && (t = t.options), H(t, n), K(t, n), z(t), !t._base && (t.extends && (e = Y(e, t.extends, n)),
                    t.mixins)) for (var o = 0, i = t.mixins.length; o < i; o++) e = Y(e, t.mixins[o], n);
                var a, s = {};
                for (a in e) r(a);
                for (a in t) v(e, a) || r(a);
                return s;
            }
            function J(e, t, n, r) {
                if ("string" == typeof n) {
                    var o = e[t];
                    if (v(o, n)) return o[n];
                    var i = In(n);
                    if (v(o, i)) return o[i];
                    var a = An(i);
                    return v(o, a) ? o[a] : o[n] || o[i] || o[a];
                }
            }
            function Q(e, t, n, r) {
                var o = t[e], i = !v(n, e), a = n[e], s = ne(Boolean, o.type);
                if (s > -1) if (i && !v(o, "default")) a = !1; else if ("" === a || a === On(e)) {
                    var c = ne(String, o.type);
                    (c < 0 || s < c) && (a = !0);
                }
                if (void 0 === a) {
                    a = Z(r, o, e);
                    var u = rr;
                    L(!0), U(a), L(u);
                }
                return a;
            }
            function Z(e, t, n) {
                if (v(t, "default")) {
                    var r = t.default;
                    return e && e.$options.propsData && void 0 === e.$options.propsData[n] && void 0 !== e._props[n] ? e._props[n] : "function" == typeof r && "Function" !== ee(t.type) ? r.call(e) : r;
                }
            }
            function ee(e) {
                var t = e && e.toString().match(/^\s*function (\w+)/);
                return t ? t[1] : "";
            }
            function te(e, t) {
                return ee(e) === ee(t);
            }
            function ne(e, t) {
                if (!Array.isArray(t)) return te(t, e) ? 0 : -1;
                for (var n = 0, r = t.length; n < r; n++) if (te(t[n], e)) return n;
                return -1;
            }
            function re(e, t, n) {
                T();
                try {
                    if (t) for (var r = t; r = r.$parent;) {
                        var o = r.$options.errorCaptured;
                        if (o) for (var i = 0; i < o.length; i++) try {
                            if (!1 === o[i].call(r, e, t, n)) return;
                        } catch (e) {
                            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                            ie(e, r, "errorCaptured hook");
                        }
                    }
                    ie(e, t, n);
                } finally {
                    E();
                }
            }
            function oe(e, t, n, r, o) {
                var i;
                try {
                    (i = n ? e.apply(t, n) : e.call(t)) && !i._isVue && p(i) && !i._handled && (i.catch(function (e) {
                        return re(e, r, o + " (Promise/async)");
                    }), i._handled = !0);
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    re(e, r, o);
                }
                return i;
            }
            function ie(e, t, n) {
                if (jn.errorHandler) try {
                    return jn.errorHandler.call(null, e, t, n);
                } catch (t) {
                    t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                    t !== e && ae(t, null, "config.errorHandler");
                }
                ae(e, t, n);
            }
            function ae(e, t, n) {
                if (!Rn && !Un || "undefined" == typeof console) throw e;
                console.error(e);
            }
            function se() {
                ur = !1;
                var e = cr.slice(0);
                cr.length = 0;
                for (var t = 0; t < e.length; t++) e[t]();
            }
            function ce(e, t) {
                var n;
                if (cr.push(function () {
                    if (e) try {
                        e.call(t);
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        re(e, t, "nextTick");
                    } else n && n(t);
                }), ur || (ur = !0, ar()), !e && "undefined" != typeof Promise) return new Promise(function (e) {
                    n = e;
                });
            }
            function ue(e) {
                le(e, hr), hr.clear();
            }
            function le(e, t) {
                var n, r, o = Array.isArray(e);
                if (!(!o && !c(e) || Object.isFrozen(e) || e instanceof Jn)) {
                    if (e.__ob__) {
                        var i = e.__ob__.dep.id;
                        if (t.has(i)) return;
                        t.add(i);
                    }
                    if (o) for (n = e.length; n--;) le(e[n], t); else for (n = (r = Object.keys(e)).length; n--;) le(e[r[n]], t);
                }
            }
            function fe(e, t) {
                function n() {
                    var e = arguments, r = n.fns;
                    if (!Array.isArray(r)) return oe(r, null, arguments, t, "v-on handler");
                    for (var o = r.slice(), i = 0; i < o.length; i++) oe(o[i], null, e, t, "v-on handler");
                }
                return n.fns = e, n;
            }
            function pe(e, t, r, i, a, s) {
                var c, u, l, f;
                for (c in e) u = e[c], l = t[c], f = gr(c), n(u) || (n(l) ? (n(u.fns) && (u = e[c] = fe(u, s)),
                    o(f.once) && (u = e[c] = a(f.name, u, f.capture)), r(f.name, u, f.capture, f.passive, f.params)) : u !== l && (l.fns = u,
                        e[c] = l));
                for (c in t) n(e[c]) && (f = gr(c), i(f.name, t[c], f.capture));
            }
            function de(e, t, o, i) {
                var a = t.options.mpOptions && t.options.mpOptions.properties;
                if (n(a)) return o;
                var s = t.options.mpOptions.externalClasses || [], c = e.attrs, u = e.props;
                if (r(c) || r(u)) for (var l in a) {
                    var f = On(l);
                    (ge(o, u, l, f, !0) || ge(o, c, l, f, !1)) && o[l] && -1 !== s.indexOf(f) && i[In(o[l])] && (o[l] = i[In(o[l])]);
                }
                return o;
            }
            function he(e, t, o, i) {
                var a = t.options.props;
                if (n(a)) return de(e, t, {}, i);
                var s = {}, c = e.attrs, u = e.props;
                if (r(c) || r(u)) for (var l in a) {
                    var f = On(l);
                    ge(s, u, l, f, !0) || ge(s, c, l, f, !1);
                }
                return de(e, t, s, i);
            }
            function ge(e, t, n, o, i) {
                if (r(t)) {
                    if (v(t, n)) return e[n] = t[n], i || delete t[n], !0;
                    if (v(t, o)) return e[n] = t[o], i || delete t[o], !0;
                }
                return !1;
            }
            function ye(e) {
                for (var t = 0; t < e.length; t++) if (Array.isArray(e[t])) return Array.prototype.concat.apply([], e);
                return e;
            }
            function ve(e) {
                return s(e) ? [j(e)] : Array.isArray(e) ? be(e) : void 0;
            }
            function me(e) {
                return r(e) && r(e.text) && i(e.isComment);
            }
            function be(e, t) {
                var i, a, c, u, l = [];
                for (i = 0; i < e.length; i++) n(a = e[i]) || "boolean" == typeof a || (c = l.length - 1,
                    u = l[c], Array.isArray(a) ? a.length > 0 && (a = be(a, (t || "") + "_" + i), me(a[0]) && me(u) && (l[c] = j(u.text + a[0].text),
                        a.shift()), l.push.apply(l, a)) : s(a) ? me(u) ? l[c] = j(u.text + a) : "" !== a && l.push(j(a)) : me(a) && me(u) ? l[c] = j(u.text + a.text) : (o(e._isVList) && r(a.tag) && n(a.key) && r(t) && (a.key = "__vlist" + t + "_" + i + "__"),
                            l.push(a)));
                return l;
            }
            function we(e) {
                var t = e.$options.provide;
                t && (e._provided = "function" == typeof t ? t.call(e) : t);
            }
            function xe(e) {
                var t = _e(e.$options.inject, e);
                t && (L(!1), Object.keys(t).forEach(function (n) {
                    N(e, n, t[n]);
                }), L(!0));
            }
            function _e(e, t) {
                if (e) {
                    for (var n = Object.create(null), r = Hn ? Reflect.ownKeys(e) : Object.keys(e), o = 0; o < r.length; o++) {
                        var i = r[o];
                        if ("__ob__" !== i) {
                            for (var a = e[i].from, s = t; s;) {
                                if (s._provided && v(s._provided, a)) {
                                    n[i] = s._provided[a];
                                    break;
                                }
                                s = s.$parent;
                            }
                            if (!s && "default" in e[i]) {
                                var c = e[i].default;
                                n[i] = "function" == typeof c ? c.call(t) : c;
                            }
                        }
                    }
                    return n;
                }
            }
            function Ie(e, t) {
                if (!e || !e.length) return {};
                for (var n = {}, r = 0, o = e.length; r < o; r++) {
                    var i = e[r], a = i.data;
                    if (a && a.attrs && a.attrs.slot && delete a.attrs.slot, i.context !== t && i.fnContext !== t || !a || null == a.slot) i.asyncMeta && i.asyncMeta.data && "page" === i.asyncMeta.data.slot ? (n.page || (n.page = [])).push(i) : (n.default || (n.default = [])).push(i); else {
                        var s = a.slot, c = n[s] || (n[s] = []);
                        "template" === i.tag ? c.push.apply(c, i.children || []) : c.push(i);
                    }
                }
                for (var u in n) n[u].every(Ae) && delete n[u];
                return n;
            }
            function Ae(e) {
                return e.isComment && !e.asyncFactory || " " === e.text;
            }
            function Se(e, t, n) {
                var r, o = Object.keys(t).length > 0, i = e ? !!e.$stable : !o, a = e && e.$key;
                if (e) {
                    if (e._normalized) return e._normalized;
                    if (i && n && n !== vn && a === n.$key && !o && !n.$hasNormal) return n;
                    for (var s in r = {}, e) e[s] && "$" !== s[0] && (r[s] = Oe(t, s, e[s]));
                } else r = {};
                for (var c in t) c in r || (r[c] = Ce(t, c));
                return e && Object.isExtensible(e) && (e._normalized = r), C(r, "$stable", i), C(r, "$key", a),
                    C(r, "$hasNormal", o), r;
            }
            function Oe(e, t, n) {
                var r = function () {
                    var e = arguments.length ? n.apply(null, arguments) : n({});
                    return (e = e && "object" === (void 0 === e ? "undefined" : a(e)) && !Array.isArray(e) ? [e] : ve(e)) && (0 === e.length || 1 === e.length && e[0].isComment) ? void 0 : e;
                };
                return n.proxy && Object.defineProperty(e, t, {
                    get: r,
                    enumerable: !0,
                    configurable: !0
                }), r;
            }
            function Ce(e, t) {
                return function () {
                    return e[t];
                };
            }
            function De(e, t) {
                var n, o, i, a, s;
                if (Array.isArray(e) || "string" == typeof e) for (n = new Array(e.length), o = 0,
                    i = e.length; o < i; o++) n[o] = t(e[o], o, o, o); else if ("number" == typeof e) for (n = new Array(e),
                        o = 0; o < e; o++) n[o] = t(o + 1, o, o, o); else if (c(e)) if (Hn && e[Symbol.iterator]) {
                            n = [];
                            for (var u = e[Symbol.iterator](), l = u.next(); !l.done;) n.push(t(l.value, n.length, o++, o)),
                                l = u.next();
                        } else for (a = Object.keys(e), n = new Array(a.length), o = 0, i = a.length; o < i; o++) s = a[o],
                            n[o] = t(e[s], s, o, o);
                return r(n) || (n = []), n._isVList = !0, n;
            }
            function ke(e, t, n, r) {
                var o, i = this.$scopedSlots[e];
                i ? (n = n || {}, r && (n = w(w({}, r), n)), o = i(n, this, n._i) || t) : o = this.$slots[e] || t;
                var a = n && n.slot;
                return a ? this.$createElement("template", {
                    slot: a
                }, o) : o;
            }
            function Te(e) {
                return J(this.$options, "filters", e, !0) || kn;
            }
            function Ee(e, t) {
                return Array.isArray(e) ? -1 === e.indexOf(t) : e !== t;
            }
            function je(e, t, n, r, o) {
                var i = jn.keyCodes[t] || n;
                return o && r && !jn.keyCodes[t] ? Ee(o, r) : i ? Ee(i, e) : r ? On(r) !== t : void 0;
            }
            function Pe(e, t, n, r, o) {
                if (n && c(n)) {
                    var i;
                    Array.isArray(n) && (n = x(n));
                    for (var a in n) !function (a) {
                        if ("class" === a || "style" === a || wn(a)) i = e; else {
                            var s = e.attrs && e.attrs.type;
                            i = r || jn.mustUseProp(t, s, a) ? e.domProps || (e.domProps = {}) : e.attrs || (e.attrs = {});
                        }
                        var c = In(a), u = On(a);
                        c in i || u in i || (i[a] = n[a], !o) || ((e.on || (e.on = {}))["update:" + a] = function (e) {
                            n[a] = e;
                        });
                    }(a);
                }
                return e;
            }
            function Le(e, t) {
                var n = this._staticTrees || (this._staticTrees = []), r = n[e];
                return r && !t || (r = n[e] = this.$options.staticRenderFns[e].call(this._renderProxy, null, this),
                    Re(r, "__static__" + e, !1)), r;
            }
            function Me(e, t, n) {
                return Re(e, "__once__" + t + (n ? "_" + n : ""), !0), e;
            }
            function Re(e, t, n) {
                if (Array.isArray(e)) for (var r = 0; r < e.length; r++) e[r] && "string" != typeof e[r] && Ue(e[r], t + "_" + r, n); else Ue(e, t, n);
            }
            function Ue(e, t, n) {
                e.isStatic = !0, e.key = t, e.isOnce = n;
            }
            function Ne(e, t) {
                if (t && u(t)) {
                    var n = e.on = e.on ? w({}, e.on) : {};
                    for (var r in t) {
                        var o = n[r], i = t[r];
                        n[r] = o ? [].concat(o, i) : i;
                    }
                }
                return e;
            }
            function $e(e, t, n, r) {
                t = t || {
                    $stable: !n
                };
                for (var o = 0; o < e.length; o++) {
                    var i = e[o];
                    Array.isArray(i) ? $e(i, t, n) : i && (i.proxy && (i.fn.proxy = !0), t[i.key] = i.fn);
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
            function Be(e, t) {
                return "string" == typeof e ? t + e : e;
            }
            function We(e) {
                e._o = Me, e._n = h, e._s = d, e._l = De, e._t = ke, e._q = I, e._i = A, e._m = Le,
                    e._f = Te, e._k = je, e._b = Pe, e._v = j, e._e = Zn, e._u = $e, e._g = Ne, e._d = Fe,
                    e._p = Be;
            }
            function Ve(e, t, n, r, i) {
                var a, s = this, c = i.options;
                v(r, "_uid") ? (a = Object.create(r), a._original = r) : (a = r, r = r._original);
                var u = o(c._compiled), l = !u;
                this.data = e, this.props = t, this.children = n, this.parent = r, this.listeners = e.on || vn,
                    this.injections = _e(c.inject, r), this.slots = function () {
                        return s.$slots || Se(e.scopedSlots, s.$slots = Ie(n, r)), s.$slots;
                    }, Object.defineProperty(this, "scopedSlots", {
                        enumerable: !0,
                        get: function () {
                            return Se(e.scopedSlots, this.slots());
                        }
                    }), u && (this.$options = c, this.$slots = this.slots(), this.$scopedSlots = Se(e.scopedSlots, this.$slots)),
                    c._scopeId ? this._c = function (e, t, n, o) {
                        var i = Qe(a, e, t, n, o, l);
                        return i && !Array.isArray(i) && (i.fnScopeId = c._scopeId, i.fnContext = r), i;
                    } : this._c = function (e, t, n, r) {
                        return Qe(a, e, t, n, r, l);
                    };
            }
            function qe(e, t, n, o, i) {
                var a = e.options, s = {}, c = a.props;
                if (r(c)) for (var u in c) s[u] = Q(u, c, t || vn); else r(n.attrs) && Xe(s, n.attrs),
                    r(n.props) && Xe(s, n.props);
                var l = new Ve(n, s, i, o, e), f = a.render.call(null, l._c, l);
                if (f instanceof Jn) return Ge(f, n, l.parent, a, l);
                if (Array.isArray(f)) {
                    for (var p = ve(f) || [], d = new Array(p.length), h = 0; h < p.length; h++) d[h] = Ge(p[h], n, l.parent, a, l);
                    return d;
                }
            }
            function Ge(e, t, n, r, o) {
                var i = P(e);
                return i.fnContext = n, i.fnOptions = r, t.slot && ((i.data || (i.data = {})).slot = t.slot),
                    i;
            }
            function Xe(e, t) {
                for (var n in t) e[In(n)] = t[n];
            }
            function He(e, t, i, a, s) {
                if (!n(e)) {
                    var u = i.$options._base;
                    if (c(e) && (e = u.extend(e)), "function" == typeof e) {
                        var l;
                        if (n(e.cid) && (l = e, void 0 === (e = it(l, u)))) return ot(l, t, i, a, s);
                        t = t || {}, $t(e), r(t.model) && Je(e.options, t);
                        var f = he(t, e, s, i);
                        if (o(e.options.functional)) return qe(e, f, t, i, a);
                        var p = t.on;
                        if (t.on = t.nativeOn, o(e.options.abstract)) {
                            var d = t.slot;
                            t = {}, d && (t.slot = d);
                        }
                        ze(t);
                        var h = e.options.name || s;
                        return new Jn("vue-component-" + e.cid + (h ? "-" + h : ""), t, void 0, void 0, void 0, i, {
                            Ctor: e,
                            propsData: f,
                            listeners: p,
                            tag: s,
                            children: a
                        }, l);
                    }
                }
            }
            function Ke(e, t) {
                var n = {
                    _isComponent: !0,
                    _parentVnode: e,
                    parent: t
                }, o = e.data.inlineTemplate;
                return r(o) && (n.render = o.render, n.staticRenderFns = o.staticRenderFns), new e.componentOptions.Ctor(n);
            }
            function ze(e) {
                for (var t = e.hook || (e.hook = {}), n = 0; n < mr.length; n++) {
                    var r = mr[n], o = t[r], i = vr[r];
                    o === i || o && o._merged || (t[r] = o ? Ye(i, o) : i);
                }
            }
            function Ye(e, t) {
                var n = function (n, r) {
                    e(n, r), t(n, r);
                };
                return n._merged = !0, n;
            }
            function Je(e, t) {
                var n = e.model && e.model.prop || "value", o = e.model && e.model.event || "input";
                (t.attrs || (t.attrs = {}))[n] = t.model.value;
                var i = t.on || (t.on = {}), a = i[o], s = t.model.callback;
                r(a) ? (Array.isArray(a) ? -1 === a.indexOf(s) : a !== s) && (i[o] = [s].concat(a)) : i[o] = s;
            }
            function Qe(e, t, n, r, i, a) {
                return (Array.isArray(n) || s(n)) && (i = r, r = n, n = void 0), o(a) && (i = wr),
                    Ze(e, t, n, r, i);
            }
            function Ze(e, t, n, o, i) {
                if (r(n) && r(n.__ob__)) return Zn();
                if (r(n) && r(n.is) && (t = n.is), !t) return Zn();
                var a, s, c;
                return Array.isArray(o) && "function" == typeof o[0] && (n = n || {}, n.scopedSlots = {
                    default: o[0]
                }, o.length = 0), i === wr ? o = ve(o) : i === br && (o = ye(o)), "string" == typeof t ? (s = e.$vnode && e.$vnode.ns || jn.getTagNamespace(t),
                    a = jn.isReservedTag(t) ? new Jn(jn.parsePlatformTagName(t), n, o, void 0, void 0, e) : n && n.pre || !r(c = J(e.$options, "components", t)) ? new Jn(t, n, o, void 0, void 0, e) : He(c, n, e, o, t)) : a = He(t, n, e, o),
                    Array.isArray(a) ? a : r(a) ? (r(s) && et(a, s), r(n) && tt(n), a) : Zn();
            }
            function et(e, t, i) {
                if (e.ns = t, "foreignObject" === e.tag && (t = void 0, i = !0), r(e.children)) for (var a = 0, s = e.children.length; a < s; a++) {
                    var c = e.children[a];
                    r(c.tag) && (n(c.ns) || o(i) && "svg" !== c.tag) && et(c, t, i);
                }
            }
            function tt(e) {
                c(e.style) && ue(e.style), c(e.class) && ue(e.class);
            }
            function nt(e) {
                e._vnode = null, e._staticTrees = null;
                var t = e.$options, n = e.$vnode = t._parentVnode, r = n && n.context;
                e.$slots = Ie(t._renderChildren, r), e.$scopedSlots = vn, e._c = function (t, n, r, o) {
                    return Qe(e, t, n, r, o, !1);
                }, e.$createElement = function (t, n, r, o) {
                    return Qe(e, t, n, r, o, !0);
                };
                var o = n && n.data;
                N(e, "$attrs", o && o.attrs || vn, null, !0), N(e, "$listeners", t._parentListeners || vn, null, !0);
            }
            function rt(e, t) {
                return (e.__esModule || Hn && "Module" === e[Symbol.toStringTag]) && (e = e.default),
                    c(e) ? t.extend(e) : e;
            }
            function ot(e, t, n, r, o) {
                var i = Zn();
                return i.asyncFactory = e, i.asyncMeta = {
                    data: t,
                    context: n,
                    children: r,
                    tag: o
                }, i;
            }
            function it(e, t) {
                if (o(e.error) && r(e.errorComp)) return e.errorComp;
                if (r(e.resolved)) return e.resolved;
                var i = xr;
                if (i && r(e.owners) && -1 === e.owners.indexOf(i) && e.owners.push(i), o(e.loading) && r(e.loadingComp)) return e.loadingComp;
                if (i && !r(e.owners)) {
                    var a = e.owners = [i], s = !0, u = null, l = null;
                    i.$on("hook:destroyed", function () {
                        return y(a, i);
                    });
                    var f = function (e) {
                        for (var t = 0, n = a.length; t < n; t++) a[t].$forceUpdate();
                        e && (a.length = 0, null !== u && (clearTimeout(u), u = null), null !== l && (clearTimeout(l),
                            l = null));
                    }, d = S(function (n) {
                        e.resolved = rt(n, t), s ? a.length = 0 : f(!0);
                    }), h = S(function (t) {
                        r(e.errorComp) && (e.error = !0, f(!0));
                    }), g = e(d, h);
                    return c(g) && (p(g) ? n(e.resolved) && g.then(d, h) : p(g.component) && (g.component.then(d, h),
                        r(g.error) && (e.errorComp = rt(g.error, t)), r(g.loading) && (e.loadingComp = rt(g.loading, t),
                            0 === g.delay ? e.loading = !0 : u = setTimeout(function () {
                                u = null, n(e.resolved) && n(e.error) && (e.loading = !0, f(!1));
                            }, g.delay || 200)), r(g.timeout) && (l = setTimeout(function () {
                                l = null, n(e.resolved) && h(null);
                            }, g.timeout)))), s = !1, e.loading ? e.loadingComp : e.resolved;
                }
            }
            function at(e) {
                return e.isComment && e.asyncFactory;
            }
            function st(e) {
                if (Array.isArray(e)) for (var t = 0; t < e.length; t++) {
                    var n = e[t];
                    if (r(n) && (r(n.componentOptions) || at(n))) return n;
                }
            }
            function ct(e) {
                e._events = Object.create(null), e._hasHookEvent = !1;
                var t = e.$options._parentListeners;
                t && pt(e, t);
            }
            function ut(e, t) {
                yr.$on(e, t);
            }
            function lt(e, t) {
                yr.$off(e, t);
            }
            function ft(e, t) {
                var n = yr;
                return function r() {
                    null !== t.apply(null, arguments) && n.$off(e, r);
                };
            }
            function pt(e, t, n) {
                yr = e, pe(t, n || {}, ut, lt, ft, e), yr = void 0;
            }
            function dt(e) {
                var t = _r;
                return _r = e, function () {
                    _r = t;
                };
            }
            function ht(e) {
                var t = e.$options, n = t.parent;
                if (n && !t.abstract) {
                    for (; n.$options.abstract && n.$parent;) n = n.$parent;
                    n.$children.push(e);
                }
                e.$parent = n, e.$root = n ? n.$root : e, e.$children = [], e.$refs = {}, e._watcher = null,
                    e._inactive = null, e._directInactive = !1, e._isMounted = !1, e._isDestroyed = !1,
                    e._isBeingDestroyed = !1;
            }
            function gt(e, t, n, r, o) {
                var i = r.data.scopedSlots, a = e.$scopedSlots, s = !!(i && !i.$stable || a !== vn && !a.$stable || i && e.$scopedSlots.$key !== i.$key), c = !!(o || e.$options._renderChildren || s);
                if (e.$options._parentVnode = r, e.$vnode = r, e._vnode && (e._vnode.parent = r),
                    e.$options._renderChildren = o, e.$attrs = r.data.attrs || vn, e.$listeners = n || vn,
                    t && e.$options.props) {
                    L(!1);
                    for (var u = e._props, l = e.$options._propKeys || [], f = 0; f < l.length; f++) {
                        var p = l[f], d = e.$options.props;
                        u[p] = Q(p, d, t, e);
                    }
                    L(!0), e.$options.propsData = t;
                }
                e._$updateProperties && e._$updateProperties(e), n = n || vn;
                var h = e.$options._parentListeners;
                e.$options._parentListeners = n, pt(e, n, h), c && (e.$slots = Ie(o, r.context),
                    e.$forceUpdate());
            }
            function yt(e) {
                for (; e && (e = e.$parent);) if (e._inactive) return !0;
                return !1;
            }
            function vt(e, t) {
                if (t) {
                    if (e._directInactive = !1, yt(e)) return;
                } else if (e._directInactive) return;
                if (e._inactive || null === e._inactive) {
                    e._inactive = !1;
                    for (var n = 0; n < e.$children.length; n++) vt(e.$children[n]);
                    bt(e, "activated");
                }
            }
            function mt(e, t) {
                if (!(t && (e._directInactive = !0, yt(e)) || e._inactive)) {
                    e._inactive = !0;
                    for (var n = 0; n < e.$children.length; n++) mt(e.$children[n]);
                    bt(e, "deactivated");
                }
            }
            function bt(e, t) {
                T();
                var n = e.$options[t], r = t + " hook";
                if (n) for (var o = 0, i = n.length; o < i; o++) oe(n[o], e, null, e, r);
                e._hasHookEvent && e.$emit("hook:" + t), E();
            }
            function wt() {
                Dr = Ir.length = Ar.length = 0, Sr = {}, Or = Cr = !1;
            }
            function xt() {
                var e, t;
                for (kr(), Cr = !0, Ir.sort(function (e, t) {
                    return e.id - t.id;
                }), Dr = 0; Dr < Ir.length; Dr++) (e = Ir[Dr]).before && e.before(), t = e.id, Sr[t] = null,
                    e.run();
                var n = Ar.slice(), r = Ir.slice();
                wt(), At(n), _t(r), Xn && jn.devtools && Xn.emit("flush");
            }
            function _t(e) {
                for (var t = e.length; t--;) {
                    var n = e[t], r = n.vm;
                    r._watcher === n && r._isMounted && !r._isDestroyed && bt(r, "updated");
                }
            }
            function It(e) {
                e._inactive = !1, Ar.push(e);
            }
            function At(e) {
                for (var t = 0; t < e.length; t++) e[t]._inactive = !0, vt(e[t], !0);
            }
            function St(e) {
                var t = e.id;
                if (null == Sr[t]) {
                    if (Sr[t] = !0, Cr) {
                        for (var n = Ir.length - 1; n > Dr && Ir[n].id > e.id;) n--;
                        Ir.splice(n + 1, 0, e);
                    } else Ir.push(e);
                    Or || (Or = !0, ce(xt));
                }
            }
            function Ot(e, t, n) {
                Pr.get = function () {
                    return this[t][n];
                }, Pr.set = function (e) {
                    this[t][n] = e;
                }, Object.defineProperty(e, n, Pr);
            }
            function Ct(e) {
                e._watchers = [];
                var t = e.$options;
                t.props && Dt(e, t.props), t.methods && Mt(e, t.methods), t.data ? kt(e) : U(e._data = {}, !0),
                    t.computed && Et(e, t.computed), t.watch && t.watch !== Wn && Rt(e, t.watch);
            }
            function Dt(e, t) {
                var n = e.$options.propsData || {}, r = e._props = {}, o = e.$options._propKeys = [];
                !e.$parent || L(!1);
                for (var i in t) !function (i) {
                    o.push(i);
                    var a = Q(i, t, n, e);
                    N(r, i, a), i in e || Ot(e, "_props", i);
                }(i);
                L(!0);
            }
            function kt(e) {
                var t = e.$options.data;
                u(t = e._data = "function" == typeof t ? Tt(t, e) : t || {}) || (t = {});
                for (var n = Object.keys(t), r = e.$options.props, o = (e.$options.methods, n.length); o--;) {
                    var i = n[o];
                    r && v(r, i) || O(i) || Ot(e, "_data", i);
                }
                U(t, !0);
            }
            function Tt(e, t) {
                T();
                try {
                    return e.call(t, t);
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    return re(e, t, "data()"), {};
                } finally {
                    E();
                }
            }
            function Et(e, t) {
                var n = e._computedWatchers = Object.create(null), r = Gn();
                for (var o in t) {
                    var i = t[o], a = "function" == typeof i ? i : i.get;
                    r || (n[o] = new jr(e, a || _, _, Lr)), o in e || jt(e, o, i);
                }
            }
            function jt(e, t, n) {
                var r = !Gn();
                "function" == typeof n ? (Pr.get = r ? Pt(t) : Lt(n), Pr.set = _) : (Pr.get = n.get ? r && !1 !== n.cache ? Pt(t) : Lt(n.get) : _,
                    Pr.set = n.set || _), Object.defineProperty(e, t, Pr);
            }
            function Pt(e) {
                return function () {
                    var t = this._computedWatchers && this._computedWatchers[e];
                    if (t) return t.dirty && t.evaluate(), Yn.SharedObject.target && t.depend(), t.value;
                };
            }
            function Lt(e) {
                return function () {
                    return e.call(this, this);
                };
            }
            function Mt(e, t) {
                e.$options.props;
                for (var n in t) e[n] = "function" != typeof t[n] ? _ : Cn(t[n], e);
            }
            function Rt(e, t) {
                for (var n in t) {
                    var r = t[n];
                    if (Array.isArray(r)) for (var o = 0; o < r.length; o++) Ut(e, n, r[o]); else Ut(e, n, r);
                }
            }
            function Ut(e, t, n, r) {
                return u(n) && (r = n, n = n.handler), "string" == typeof n && (n = e[n]), e.$watch(t, n, r);
            }
            function Nt(e, t) {
                var n = e.$options = Object.create(e.constructor.options), r = t._parentVnode;
                n.parent = t.parent, n._parentVnode = r;
                var o = r.componentOptions;
                n.propsData = o.propsData, n._parentListeners = o.listeners, n._renderChildren = o.children,
                    n._componentTag = o.tag, t.render && (n.render = t.render, n.staticRenderFns = t.staticRenderFns);
            }
            function $t(e) {
                var t = e.options;
                if (e.super) {
                    var n = $t(e.super);
                    if (n !== e.superOptions) {
                        e.superOptions = n;
                        var r = Ft(e);
                        r && w(e.extendOptions, r), (t = e.options = Y(n, e.extendOptions)).name && (t.components[t.name] = e);
                    }
                }
                return t;
            }
            function Ft(e) {
                var t, n = e.options, r = e.sealedOptions;
                for (var o in n) n[o] !== r[o] && (t || (t = {}), t[o] = n[o]);
                return t;
            }
            function Bt(e) {
                this._init(e);
            }
            function Wt(e) {
                e.use = function (e) {
                    var t = this._installedPlugins || (this._installedPlugins = []);
                    if (t.indexOf(e) > -1) return this;
                    var n = b(arguments, 1);
                    return n.unshift(this), "function" == typeof e.install ? e.install.apply(e, n) : "function" == typeof e && e.apply(null, n),
                        t.push(e), this;
                };
            }
            function Vt(e) {
                e.mixin = function (e) {
                    return this.options = Y(this.options, e), this;
                };
            }
            function qt(e) {
                e.cid = 0;
                var t = 1;
                e.extend = function (e) {
                    e = e || {};
                    var n = this, r = n.cid, o = e._Ctor || (e._Ctor = {});
                    if (o[r]) return o[r];
                    var i = e.name || n.options.name, a = function (e) {
                        this._init(e);
                    };
                    return a.prototype = Object.create(n.prototype), a.prototype.constructor = a, a.cid = t++,
                        a.options = Y(n.options, e), a.super = n, a.options.props && Gt(a), a.options.computed && Xt(a),
                        a.extend = n.extend, a.mixin = n.mixin, a.use = n.use, Tn.forEach(function (e) {
                            a[e] = n[e];
                        }), i && (a.options.components[i] = a), a.superOptions = n.options, a.extendOptions = e,
                        a.sealedOptions = w({}, a.options), o[r] = a, a;
                };
            }
            function Gt(e) {
                var t = e.options.props;
                for (var n in t) Ot(e.prototype, "_props", n);
            }
            function Xt(e) {
                var t = e.options.computed;
                for (var n in t) jt(e.prototype, n, t[n]);
            }
            function Ht(e) {
                Tn.forEach(function (t) {
                    e[t] = function (e, n) {
                        return n ? ("component" === t && u(n) && (n.name = n.name || e, n = this.options._base.extend(n)),
                            "directive" === t && "function" == typeof n && (n = {
                                bind: n,
                                update: n
                            }), this.options[t + "s"][e] = n, n) : this.options[t + "s"][e];
                    };
                });
            }
            function Kt(e) {
                return e && (e.Ctor.options.name || e.tag);
            }
            function zt(e, t) {
                return Array.isArray(e) ? e.indexOf(t) > -1 : "string" == typeof e ? e.split(",").indexOf(t) > -1 : !!l(e) && e.test(t);
            }
            function Yt(e, t) {
                var n = e.cache, r = e.keys, o = e._vnode;
                for (var i in n) {
                    var a = n[i];
                    if (a) {
                        var s = Kt(a.componentOptions);
                        s && !t(s) && Jt(n, i, r, o);
                    }
                }
            }
            function Jt(e, t, n, r) {
                var o = e[t];
                !o || r && o.tag === r.tag || o.componentInstance.$destroy(), e[t] = null, y(n, t);
            }
            function Qt(e, t) {
                var n = {};
                return Zt(e, t), en(e, t, "", n), n;
            }
            function Zt(e, t) {
                if (e !== t) {
                    var n = nn(e), r = nn(t);
                    if (n == $r && r == $r) {
                        if (Object.keys(e).length >= Object.keys(t).length) for (var o in t) {
                            var i = e[o];
                            void 0 === i ? e[o] = null : Zt(i, t[o]);
                        }
                    } else n == Nr && r == Nr && e.length >= t.length && t.forEach(function (t, n) {
                        Zt(e[n], t);
                    });
                }
            }
            function en(e, t, n, r) {
                if (e !== t) {
                    var o = nn(e), i = nn(t);
                    if (o == $r) if (i != $r || Object.keys(e).length < Object.keys(t).length) tn(r, n, e); else {
                        for (var a in e) !function (o) {
                            var i = e[o], a = t[o], s = nn(i), c = nn(a);
                            if (s != Nr && s != $r) i != t[o] && tn(r, ("" == n ? "" : n + ".") + o, i); else if (s == Nr) c != Nr || i.length < a.length ? tn(r, ("" == n ? "" : n + ".") + o, i) : i.forEach(function (e, t) {
                                en(e, a[t], ("" == n ? "" : n + ".") + o + "[" + t + "]", r);
                            }); else if (s == $r) if (c != $r || Object.keys(i).length < Object.keys(a).length) tn(r, ("" == n ? "" : n + ".") + o, i); else for (var u in i) en(i[u], a[u], ("" == n ? "" : n + ".") + o + "." + u, r);
                        }(a);
                    } else o == Nr ? i != Nr || e.length < t.length ? tn(r, n, e) : e.forEach(function (e, o) {
                        en(e, t[o], n + "[" + o + "]", r);
                    }) : tn(r, n, e);
                }
            }
            function tn(e, t, n) {
                e[t] = n;
            }
            function nn(e) {
                return Object.prototype.toString.call(e);
            }
            function rn(e) {
                if (e.__next_tick_callbacks && e.__next_tick_callbacks.length) {
                    if (Object({
                        NODE_ENV: "production",
                        VUE_APP_PLATFORM: "mp-weixin",
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
            function on(e) {
                return Ir.find(function (t) {
                    return e._watcher === t;
                });
            }
            function an(e, t) {
                if (!e.__next_tick_pending && !on(e)) {
                    if (Object({
                        NODE_ENV: "production",
                        VUE_APP_PLATFORM: "mp-weixin",
                        BASE_URL: "/"
                    }).VUE_APP_DEBUG) {
                        var n = e.$scope;
                        console.log("[" + +new Date() + "][" + (n.is || n.route) + "][" + e._uid + "]:nextVueTick");
                    }
                    return ce(t, e);
                }
                if (Object({
                    NODE_ENV: "production",
                    VUE_APP_PLATFORM: "mp-weixin",
                    BASE_URL: "/"
                }).VUE_APP_DEBUG) {
                    var r = e.$scope;
                    console.log("[" + +new Date() + "][" + (r.is || r.route) + "][" + e._uid + "]:nextMPTick");
                }
                var o;
                if (e.__next_tick_callbacks || (e.__next_tick_callbacks = []), e.__next_tick_callbacks.push(function () {
                    if (t) try {
                        t.call(e);
                    } catch (t) {
                        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                        re(t, e, "nextTick");
                    } else o && o(e);
                }), !t && "undefined" != typeof Promise) return new Promise(function (e) {
                    o = e;
                });
            }
            function sn(e) {
                var t = Object.create(null);
                [].concat(Object.keys(e._data || {}), Object.keys(e._computedWatchers || {})).reduce(function (t, n) {
                    return t[n] = e[n], t;
                }, t);
                var n = e.__secret_vfa_state__ && e.__secret_vfa_state__.rawBindings;
                return n && Object.keys(n).forEach(function (n) {
                    t[n] = e[n];
                }), Object.assign(t, e.$mp.data || {}), Array.isArray(e.$options.behaviors) && -1 !== e.$options.behaviors.indexOf("uni://form-field") && (t.name = e.name,
                    t.value = e.value), JSON.parse(JSON.stringify(t));
            }
            function cn() { }
            function un(e, t, n) {
                if (!e.mpType) return e;
                "app" === e.mpType && (e.$options.render = cn), e.$options.render || (e.$options.render = cn),
                    !e._$fallback && bt(e, "beforeMount");
                return new jr(e, function () {
                    e._update(e._render(), n);
                }, _, {
                    before: function () {
                        e._isMounted && !e._isDestroyed && bt(e, "beforeUpdate");
                    }
                }, !0), n = !1, e;
            }
            function ln(e, t) {
                return r(e) || r(t) ? fn(e, pn(t)) : "";
            }
            function fn(e, t) {
                return e ? t ? e + " " + t : e : t || "";
            }
            function pn(e) {
                return Array.isArray(e) ? dn(e) : c(e) ? hn(e) : "string" == typeof e ? e : "";
            }
            function dn(e) {
                for (var t, n = "", o = 0, i = e.length; o < i; o++) r(t = pn(e[o])) && "" !== t && (n && (n += " "),
                    n += t);
                return n;
            }
            function hn(e) {
                var t = "";
                for (var n in e) e[n] && (t && (t += " "), t += n);
                return t;
            }
            function gn(e) {
                return Array.isArray(e) ? x(e) : "string" == typeof e ? Fr(e) : e;
            }
            function yn(e, t) {
                var n = t.split("."), r = n[0];
                return 0 === r.indexOf("__$n") && (r = parseInt(r.replace("__$n", ""))), 1 === n.length ? e[r] : yn(e[r], n.slice(1).join("."));
            }
            var vn = Object.freeze({}), mn = Object.prototype.toString;
            g("slot,component", !0);
            var bn, wn = g("key,ref,slot,slot-scope,is"), xn = Object.prototype.hasOwnProperty, _n = /-(\w)/g, In = m(function (e) {
                return e.replace(_n, function (e, t) {
                    return t ? t.toUpperCase() : "";
                });
            }), An = m(function (e) {
                return e.charAt(0).toUpperCase() + e.slice(1);
            }), Sn = /\B([A-Z])/g, On = m(function (e) {
                return e.replace(Sn, "-$1").toLowerCase();
            }), Cn = Function.prototype.bind ? function (e, t) {
                return e.bind(t);
            } : function (e, t) {
                function n(n) {
                    var r = arguments.length;
                    return r ? r > 1 ? e.apply(t, arguments) : e.call(t, n) : e.call(t);
                }
                return n._length = e.length, n;
            }, Dn = function (e, t, n) {
                return !1;
            }, kn = function (e) {
                return e;
            }, Tn = ["component", "directive", "filter"], En = ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured", "serverPrefetch"], jn = {
                optionMergeStrategies: Object.create(null),
                silent: !1,
                productionTip: !1,
                devtools: !1,
                performance: !1,
                errorHandler: null,
                warnHandler: null,
                ignoredElements: [],
                keyCodes: Object.create(null),
                isReservedTag: Dn,
                isReservedAttr: Dn,
                isUnknownElement: Dn,
                getTagNamespace: _,
                parsePlatformTagName: kn,
                mustUseProp: Dn,
                async: !0,
                _lifecycleHooks: En
            }, Pn = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/, Ln = new RegExp("[^" + Pn.source + ".$_\\d]"), Mn = "__proto__" in {}, Rn = "undefined" != typeof window, Un = "undefined" != typeof WXEnvironment && !!WXEnvironment.platform, Nn = Un && WXEnvironment.platform.toLowerCase(), $n = Rn && window.navigator.userAgent.toLowerCase(), Fn = $n && /msie|trident/.test($n), Bn = ($n && $n.indexOf("msie 9.0"),
                $n && $n.indexOf("edge/"), $n && $n.indexOf("android"), $n && /iphone|ipad|ipod|ios/.test($n) || "ios" === Nn), Wn = ($n && /chrome\/\d+/.test($n),
                    $n && /phantomjs/.test($n), $n && $n.match(/firefox\/(\d+)/), {}.watch);
            if (Rn) try {
                var Vn = {};
                Object.defineProperty(Vn, "passive", {
                    get: function () { }
                }), window.addEventListener("test-passive", null, Vn);
            } catch (e) { }
            var qn, Gn = function () {
                return void 0 === bn && (bn = !Rn && !Un && void 0 !== e && e.process && "server" === e.process.env.VUE_ENV),
                    bn;
            }, Xn = Rn && window.__VUE_DEVTOOLS_GLOBAL_HOOK__, Hn = "undefined" != typeof Symbol && k(Symbol) && "undefined" != typeof Reflect && k(Reflect.ownKeys);
            qn = "undefined" != typeof Set && k(Set) ? Set : function () {
                function e() {
                    this.set = Object.create(null);
                }
                return e.prototype.has = function (e) {
                    return !0 === this.set[e];
                }, e.prototype.add = function (e) {
                    this.set[e] = !0;
                }, e.prototype.clear = function () {
                    this.set = Object.create(null);
                }, e;
            }();
            var Kn = _, zn = 0, Yn = function () {
                this.id = zn++, this.subs = [];
            };
            Yn.prototype.addSub = function (e) {
                this.subs.push(e);
            }, Yn.prototype.removeSub = function (e) {
                y(this.subs, e);
            }, Yn.prototype.depend = function () {
                Yn.SharedObject.target && Yn.SharedObject.target.addDep(this);
            }, Yn.prototype.notify = function () {
                for (var e = this.subs.slice(), t = 0, n = e.length; t < n; t++) e[t].update();
            }, Yn.SharedObject = {}, Yn.SharedObject.target = null, Yn.SharedObject.targetStack = [];
            var Jn = function (e, t, n, r, o, i, a, s) {
                this.tag = e, this.data = t, this.children = n, this.text = r, this.elm = o, this.ns = void 0,
                    this.context = i, this.fnContext = void 0, this.fnOptions = void 0, this.fnScopeId = void 0,
                    this.key = t && t.key, this.componentOptions = a, this.componentInstance = void 0,
                    this.parent = void 0, this.raw = !1, this.isStatic = !1, this.isRootInsert = !0,
                    this.isComment = !1, this.isCloned = !1, this.isOnce = !1, this.asyncFactory = s,
                    this.asyncMeta = void 0, this.isAsyncPlaceholder = !1;
            }, Qn = {
                child: {
                    configurable: !0
                }
            };
            Qn.child.get = function () {
                return this.componentInstance;
            }, Object.defineProperties(Jn.prototype, Qn);
            var Zn = function (e) {
                void 0 === e && (e = "");
                var t = new Jn();
                return t.text = e, t.isComment = !0, t;
            }, er = Array.prototype, tr = Object.create(er);
            ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(function (e) {
                var t = er[e];
                C(tr, e, function () {
                    for (var n = [], r = arguments.length; r--;) n[r] = arguments[r];
                    var o, i = t.apply(this, n), a = this.__ob__;
                    switch (e) {
                        case "push":
                        case "unshift":
                            o = n;
                            break;

                        case "splice":
                            o = n.slice(2);
                    }
                    return o && a.observeArray(o), a.dep.notify(), i;
                });
            });
            var nr = Object.getOwnPropertyNames(tr), rr = !0, or = function (e) {
                this.value = e, this.dep = new Yn(), this.vmCount = 0, C(e, "__ob__", this), Array.isArray(e) ? (Mn ? e.push !== e.__proto__.push ? R(e, tr, nr) : M(e, tr) : R(e, tr, nr),
                    this.observeArray(e)) : this.walk(e);
            };
            or.prototype.walk = function (e) {
                for (var t = Object.keys(e), n = 0; n < t.length; n++) N(e, t[n]);
            }, or.prototype.observeArray = function (e) {
                for (var t = 0, n = e.length; t < n; t++) U(e[t]);
            };
            var ir = jn.optionMergeStrategies;
            ir.data = function (e, t, n) {
                return n ? V(e, t, n) : t && "function" != typeof t ? e : V(e, t);
            }, En.forEach(function (e) {
                ir[e] = q;
            }), Tn.forEach(function (e) {
                ir[e + "s"] = X;
            }), ir.watch = function (e, t, n, r) {
                if (e === Wn && (e = void 0), t === Wn && (t = void 0), !t) return Object.create(e || null);
                if (!e) return t;
                var o = {};
                for (var i in w(o, e), t) {
                    var a = o[i], s = t[i];
                    a && !Array.isArray(a) && (a = [a]), o[i] = a ? a.concat(s) : Array.isArray(s) ? s : [s];
                }
                return o;
            }, ir.props = ir.methods = ir.inject = ir.computed = function (e, t, n, r) {
                if (!e) return t;
                var o = Object.create(null);
                return w(o, e), t && w(o, t), o;
            }, ir.provide = V;
            var ar, sr = function (e, t) {
                return void 0 === t ? e : t;
            }, cr = [], ur = !1;
            if ("undefined" != typeof Promise && k(Promise)) {
                var lr = Promise.resolve();
                ar = function () {
                    lr.then(se), Bn && setTimeout(_);
                };
            } else if (Fn || "undefined" == typeof MutationObserver || !k(MutationObserver) && "[object MutationObserverConstructor]" !== MutationObserver.toString()) ar = "undefined" != typeof setImmediate && k(setImmediate) ? function () {
                setImmediate(se);
            } : function () {
                setTimeout(se, 0);
            }; else {
                var fr = 1, pr = new MutationObserver(se), dr = document.createTextNode(String(fr));
                pr.observe(dr, {
                    characterData: !0
                }), ar = function () {
                    fr = (fr + 1) % 2, dr.data = String(fr);
                };
            }
            var hr = new qn(), gr = m(function (e) {
                var t = "&" === e.charAt(0), n = "~" === (e = t ? e.slice(1) : e).charAt(0), r = "!" === (e = n ? e.slice(1) : e).charAt(0);
                return e = r ? e.slice(1) : e, {
                    name: e,
                    once: n,
                    capture: r,
                    passive: t
                };
            });
            We(Ve.prototype);
            var yr, vr = {
                init: function (e, t) {
                    if (e.componentInstance && !e.componentInstance._isDestroyed && e.data.keepAlive) {
                        var n = e;
                        vr.prepatch(n, n);
                    } else (e.componentInstance = Ke(e, _r)).$mount(t ? e.elm : void 0, t);
                },
                prepatch: function (e, t) {
                    var n = t.componentOptions;
                    gt(t.componentInstance = e.componentInstance, n.propsData, n.listeners, t, n.children);
                },
                insert: function (e) {
                    var t = e.context, n = e.componentInstance;
                    n._isMounted || (bt(n, "onServiceCreated"), bt(n, "onServiceAttached"), n._isMounted = !0,
                        bt(n, "mounted")), e.data.keepAlive && (t._isMounted ? It(n) : vt(n, !0));
                },
                destroy: function (e) {
                    var t = e.componentInstance;
                    t._isDestroyed || (e.data.keepAlive ? mt(t, !0) : t.$destroy());
                }
            }, mr = Object.keys(vr), br = 1, wr = 2, xr = null, _r = null, Ir = [], Ar = [], Sr = {}, Or = !1, Cr = !1, Dr = 0, kr = Date.now;
            if (Rn && !Fn) {
                var Tr = window.performance;
                Tr && "function" == typeof Tr.now && kr() > document.createEvent("Event").timeStamp && (kr = function () {
                    return Tr.now();
                });
            }
            var Er = 0, jr = function (e, t, n, r, o) {
                this.vm = e, o && (e._watcher = this), e._watchers.push(this), r ? (this.deep = !!r.deep,
                    this.user = !!r.user, this.lazy = !!r.lazy, this.sync = !!r.sync, this.before = r.before) : this.deep = this.user = this.lazy = this.sync = !1,
                    this.cb = n, this.id = ++Er, this.active = !0, this.dirty = this.lazy, this.deps = [],
                    this.newDeps = [], this.depIds = new qn(), this.newDepIds = new qn(), this.expression = "",
                    "function" == typeof t ? this.getter = t : (this.getter = D(t), this.getter || (this.getter = _)),
                    this.value = this.lazy ? void 0 : this.get();
            };
            jr.prototype.get = function () {
                var e;
                T(this);
                var t = this.vm;
                try {
                    e = this.getter.call(t, t);
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    if (!this.user) throw e;
                    re(e, t, 'getter for watcher "' + this.expression + '"');
                } finally {
                    this.deep && ue(e), E(), this.cleanupDeps();
                }
                return e;
            }, jr.prototype.addDep = function (e) {
                var t = e.id;
                this.newDepIds.has(t) || (this.newDepIds.add(t), this.newDeps.push(e), this.depIds.has(t) || e.addSub(this));
            }, jr.prototype.cleanupDeps = function () {
                for (var e = this.deps.length; e--;) {
                    var t = this.deps[e];
                    this.newDepIds.has(t.id) || t.removeSub(this);
                }
                var n = this.depIds;
                this.depIds = this.newDepIds, this.newDepIds = n, this.newDepIds.clear(), n = this.deps,
                    this.deps = this.newDeps, this.newDeps = n, this.newDeps.length = 0;
            }, jr.prototype.update = function () {
                this.lazy ? this.dirty = !0 : this.sync ? this.run() : St(this);
            }, jr.prototype.run = function () {
                if (this.active) {
                    var e = this.get();
                    if (e !== this.value || c(e) || this.deep) {
                        var t = this.value;
                        if (this.value = e, this.user) try {
                            this.cb.call(this.vm, e, t);
                        } catch (e) {
                            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                            re(e, this.vm, 'callback for watcher "' + this.expression + '"');
                        } else this.cb.call(this.vm, e, t);
                    }
                }
            }, jr.prototype.evaluate = function () {
                this.value = this.get(), this.dirty = !1;
            }, jr.prototype.depend = function () {
                for (var e = this.deps.length; e--;) this.deps[e].depend();
            }, jr.prototype.teardown = function () {
                if (this.active) {
                    this.vm._isBeingDestroyed || y(this.vm._watchers, this);
                    for (var e = this.deps.length; e--;) this.deps[e].removeSub(this);
                    this.active = !1;
                }
            };
            var Pr = {
                enumerable: !0,
                configurable: !0,
                get: _,
                set: _
            }, Lr = {
                lazy: !0
            }, Mr = 0;
            (function (e) {
                e.prototype._init = function (e) {
                    var t = this;
                    t._uid = Mr++, t._isVue = !0, e && e._isComponent ? Nt(t, e) : t.$options = Y($t(t.constructor), e || {}, t),
                        t._renderProxy = t, t._self = t, ht(t), ct(t), nt(t), bt(t, "beforeCreate"), !t._$fallback && xe(t),
                        Ct(t), !t._$fallback && we(t), !t._$fallback && bt(t, "created"), t.$options.el && t.$mount(t.$options.el);
                };
            })(Bt), function (e) {
                var t = {
                    get: function () {
                        return this._data;
                    }
                }, n = {
                    get: function () {
                        return this._props;
                    }
                };
                Object.defineProperty(e.prototype, "$data", t), Object.defineProperty(e.prototype, "$props", n),
                    e.prototype.$set = $, e.prototype.$delete = F, e.prototype.$watch = function (e, t, n) {
                        var r = this;
                        if (u(t)) return Ut(r, e, t, n);
                        (n = n || {}).user = !0;
                        var o = new jr(r, e, t, n);
                        if (n.immediate) try {
                            t.call(r, o.value);
                        } catch (e) {
                            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                            re(e, r, 'callback for immediate watcher "' + o.expression + '"');
                        }
                        return function () {
                            o.teardown();
                        };
                    };
            }(Bt), function (e) {
                var t = /^hook:/;
                e.prototype.$on = function (e, n) {
                    var r = this;
                    if (Array.isArray(e)) for (var o = 0, i = e.length; o < i; o++) r.$on(e[o], n); else (r._events[e] || (r._events[e] = [])).push(n),
                        t.test(e) && (r._hasHookEvent = !0);
                    return r;
                }, e.prototype.$once = function (e, t) {
                    function n() {
                        r.$off(e, n), t.apply(r, arguments);
                    }
                    var r = this;
                    return n.fn = t, r.$on(e, n), r;
                }, e.prototype.$off = function (e, t) {
                    var n = this;
                    if (!arguments.length) return n._events = Object.create(null), n;
                    if (Array.isArray(e)) {
                        for (var r = 0, o = e.length; r < o; r++) n.$off(e[r], t);
                        return n;
                    }
                    var i, a = n._events[e];
                    if (!a) return n;
                    if (!t) return n._events[e] = null, n;
                    for (var s = a.length; s--;) if ((i = a[s]) === t || i.fn === t) {
                        a.splice(s, 1);
                        break;
                    }
                    return n;
                }, e.prototype.$emit = function (e) {
                    var t = this, n = t._events[e];
                    if (n) {
                        n = n.length > 1 ? b(n) : n;
                        for (var r = b(arguments, 1), o = 'event handler for "' + e + '"', i = 0, a = n.length; i < a; i++) oe(n[i], t, r, t, o);
                    }
                    return t;
                };
            }(Bt), function (e) {
                e.prototype._update = function (e, t) {
                    var n = this, r = n.$el, o = n._vnode, i = dt(n);
                    n._vnode = e, n.$el = o ? n.__patch__(o, e) : n.__patch__(n.$el, e, t, !1), i(),
                        r && (r.__vue__ = null), n.$el && (n.$el.__vue__ = n), n.$vnode && n.$parent && n.$vnode === n.$parent._vnode && (n.$parent.$el = n.$el);
                }, e.prototype.$forceUpdate = function () {
                    var e = this;
                    e._watcher && e._watcher.update();
                }, e.prototype.$destroy = function () {
                    var e = this;
                    if (!e._isBeingDestroyed) {
                        bt(e, "beforeDestroy"), e._isBeingDestroyed = !0;
                        var t = e.$parent;
                        !t || t._isBeingDestroyed || e.$options.abstract || y(t.$children, e), e._watcher && e._watcher.teardown();
                        for (var n = e._watchers.length; n--;) e._watchers[n].teardown();
                        e._data.__ob__ && e._data.__ob__.vmCount--, e._isDestroyed = !0, e.__patch__(e._vnode, null),
                            bt(e, "destroyed"), e.$off(), e.$el && (e.$el.__vue__ = null), e.$vnode && (e.$vnode.parent = null);
                    }
                };
            }(Bt), function (e) {
                We(e.prototype), e.prototype.$nextTick = function (e) {
                    return ce(e, this);
                }, e.prototype._render = function () {
                    var e, t = this, n = t.$options, r = n.render, o = n._parentVnode;
                    o && (t.$scopedSlots = Se(o.data.scopedSlots, t.$slots, t.$scopedSlots)), t.$vnode = o;
                    try {
                        xr = t, e = r.call(t._renderProxy, t.$createElement);
                    } catch (n) {
                        n = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(n);
                        re(n, t, "render"), e = t._vnode;
                    } finally {
                        xr = null;
                    }
                    return Array.isArray(e) && 1 === e.length && (e = e[0]), e instanceof Jn || (e = Zn()),
                        e.parent = o, e;
                };
            }(Bt);
            var Rr = [String, RegExp, Array], Ur = {
                KeepAlive: {
                    name: "keep-alive",
                    abstract: !0,
                    props: {
                        include: Rr,
                        exclude: Rr,
                        max: [String, Number]
                    },
                    created: function () {
                        this.cache = Object.create(null), this.keys = [];
                    },
                    destroyed: function () {
                        for (var e in this.cache) Jt(this.cache, e, this.keys);
                    },
                    mounted: function () {
                        var e = this;
                        this.$watch("include", function (t) {
                            Yt(e, function (e) {
                                return zt(t, e);
                            });
                        }), this.$watch("exclude", function (t) {
                            Yt(e, function (e) {
                                return !zt(t, e);
                            });
                        });
                    },
                    render: function () {
                        var e = this.$slots.default, t = st(e), n = t && t.componentOptions;
                        if (n) {
                            var r = Kt(n), o = this, i = o.include, a = o.exclude;
                            if (i && (!r || !zt(i, r)) || a && r && zt(a, r)) return t;
                            var s = this, c = s.cache, u = s.keys, l = null == t.key ? n.Ctor.cid + (n.tag ? "::" + n.tag : "") : t.key;
                            c[l] ? (t.componentInstance = c[l].componentInstance, y(u, l), u.push(l)) : (c[l] = t,
                                u.push(l), this.max && u.length > parseInt(this.max) && Jt(c, u[0], u, this._vnode)),
                                t.data.keepAlive = !0;
                        }
                        return t || e && e[0];
                    }
                }
            };
            (function (e) {
                var t = {
                    get: function () {
                        return jn;
                    }
                };
                Object.defineProperty(e, "config", t), e.util = {
                    warn: Kn,
                    extend: w,
                    mergeOptions: Y,
                    defineReactive: N
                }, e.set = $, e.delete = F, e.nextTick = ce, e.observable = function (e) {
                    return U(e), e;
                }, e.options = Object.create(null), Tn.forEach(function (t) {
                    e.options[t + "s"] = Object.create(null);
                }), e.options._base = e, w(e.options.components, Ur), Wt(e), Vt(e), qt(e), Ht(e);
            })(Bt), Object.defineProperty(Bt.prototype, "$isServer", {
                get: Gn
            }), Object.defineProperty(Bt.prototype, "$ssrContext", {
                get: function () {
                    return this.$vnode && this.$vnode.ssrContext;
                }
            }), Object.defineProperty(Bt, "FunctionalRenderContext", {
                value: Ve
            }), Bt.version = "2.6.11";
            var Nr = "[object Array]", $r = "[object Object]", Fr = m(function (e) {
                var t = {}, n = /;(?![^(]*\))/g, r = /:(.+)/;
                return e.split(n).forEach(function (e) {
                    if (e) {
                        var n = e.split(r);
                        n.length > 1 && (t[n[0].trim()] = n[1].trim());
                    }
                }), t;
            }), Br = ["createSelectorQuery", "createIntersectionObserver", "selectAllComponents", "selectComponent"], Wr = ["onLaunch", "onShow", "onHide", "onUniNViewMessage", "onPageNotFound", "onThemeChange", "onError", "onUnhandledRejection", "onLoad", "onReady", "onUnload", "onPullDownRefresh", "onReachBottom", "onTabItemTap", "onAddToFavorites", "onShareTimeline", "onShareAppMessage", "onResize", "onPageScroll", "onNavigationBarButtonTap", "onBackPress", "onNavigationBarSearchInputChanged", "onNavigationBarSearchInputConfirmed", "onNavigationBarSearchInputClicked", "onPageShow", "onPageHide", "onPageResize"];
            Bt.prototype.__patch__ = function (e, t) {
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
                    Object.keys(o).forEach(function (e) {
                        i[e] = r.data[e];
                    });
                    var a = !1 === this.$shouldDiffData ? o : Qt(o, i);
                    Object.keys(a).length ? (Object({
                        NODE_ENV: "production",
                        VUE_APP_PLATFORM: "mp-weixin",
                        BASE_URL: "/"
                    }).VUE_APP_DEBUG && console.log("[" + +new Date() + "][" + (r.is || r.route) + "][" + this._uid + "]差量更新", JSON.stringify(a)),
                        this.__next_tick_pending = !0, r.setData(a, function () {
                            n.__next_tick_pending = !1, rn(n);
                        })) : rn(this);
                }
            }, Bt.prototype.$mount = function (e, t) {
                return un(this, 0, t);
            }, function (e) {
                var t = e.extend;
                e.extend = function (e) {
                    var n = (e = e || {}).methods;
                    return n && Object.keys(n).forEach(function (t) {
                        -1 !== Wr.indexOf(t) && (e[t] = n[t], delete n[t]);
                    }), t.call(this, e);
                };
                var n = e.config.optionMergeStrategies, r = n.created;
                Wr.forEach(function (e) {
                    n[e] = r;
                }), e.prototype.__lifecycle_hooks__ = Wr;
            }(Bt), function (e) {
                e.config.errorHandler = function (t, n, r) {
                    e.util.warn("Error in " + r + ': "' + t.toString() + '"', n), console.error(t);
                    var o = getApp();
                    o && o.onError && o.onError(t);
                };
                var t = e.prototype.$emit;
                e.prototype.$emit = function (e) {
                    return this.$scope && e && this.$scope.triggerEvent(e, {
                        __args__: b(arguments, 1)
                    }), t.apply(this, arguments);
                }, e.prototype.$nextTick = function (e) {
                    return an(this, e);
                }, Br.forEach(function (t) {
                    e.prototype[t] = function (e) {
                        return this.$scope && this.$scope[t] ? this.$scope[t](e) : "undefined" != typeof my ? "createSelectorQuery" === t ? my.createSelectorQuery(e) : "createIntersectionObserver" === t ? my.createIntersectionObserver(e) : void 0 : void 0;
                    };
                }), e.prototype.__init_provide = we, e.prototype.__init_injections = xe, e.prototype.__call_hook = function (e, t) {
                    var n = this;
                    T();
                    var r, o = n.$options[e], i = e + " hook";
                    if (o) for (var a = 0, s = o.length; a < s; a++) r = oe(o[a], n, t ? [t] : null, n, i);
                    return n._hasHookEvent && n.$emit("hook:" + e, t), E(), r;
                }, e.prototype.__set_model = function (e, t, n, r) {
                    Array.isArray(r) && (-1 !== r.indexOf("trim") && (n = n.trim()), -1 !== r.indexOf("number") && (n = this._n(n))),
                        e || (e = this), e[t] = n;
                }, e.prototype.__set_sync = function (e, t, n) {
                    e || (e = this), e[t] = n;
                }, e.prototype.__get_orig = function (e) {
                    return u(e) && e.$orig || e;
                }, e.prototype.__get_value = function (e, t) {
                    return yn(t || this, e);
                }, e.prototype.__get_class = function (e, t) {
                    return ln(t, e);
                }, e.prototype.__get_style = function (e, t) {
                    if (!e && !t) return "";
                    var n = gn(e), r = t ? w(t, n) : n;
                    return Object.keys(r).map(function (e) {
                        return On(e) + ":" + r[e];
                    }).join(";");
                }, e.prototype.__map = function (e, t) {
                    var n, r, o, i, a;
                    if (Array.isArray(e)) {
                        for (n = new Array(e.length), r = 0, o = e.length; r < o; r++) n[r] = t(e[r], r);
                        return n;
                    }
                    if (c(e)) {
                        for (i = Object.keys(e), n = Object.create(null), r = 0, o = i.length; r < o; r++) n[a = i[r]] = t(e[a], a, r);
                        return n;
                    }
                    if ("number" == typeof e) {
                        for (n = new Array(e), r = 0, o = e; r < o; r++) n[r] = t(r, r);
                        return n;
                    }
                    return [];
                };
            }(Bt), t.default = Bt;
        }.call(this, n("c8ba"));
    },
    "6cdc": function (e, t) { },
    "6d0a": function (e, t, n) {
        (function (e) {
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function o(e) {
                return (o = "function" == typeof Symbol && "symbol" === a(Symbol.iterator) ? function (e) {
                    return void 0 === e ? "undefined" : a(e);
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : a(e);
                })(e);
            }
            function i(e, t) {
                return f(e) || l(e, t) || c(e, t) || s();
            }
            function s() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            function c(e, t) {
                if (e) {
                    if ("string" == typeof e) return u(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? u(e, t) : void 0;
                }
            }
            function u(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r;
            }
            function l(e, t) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                    var n = [], r = !0, o = !1, i = void 0;
                    try {
                        for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value),
                            !t || n.length !== t); r = !0);
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        o = !0, i = e;
                    } finally {
                        try {
                            r || null == s.return || s.return();
                        } finally {
                            if (o) throw i;
                        }
                    }
                    return n;
                }
            }
            function f(e) {
                if (Array.isArray(e)) return e;
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var p = n("60e3"), d = n("cf45"), h = r(n("ca00")), g = r(n("7c15")), y = n("dcc5"), v = {
                data: function () {
                    return {
                        navigationBarTitle: "",
                        moduleInfoList: [],
                        setting: {},
                        skinStyle: {},
                        hasLoadModules: !1,
                        colId: 0,
                        wxappInfo: {},
                        globalColor: "",
                        isWebApp: !1,
                        webappUrl: ""
                    };
                },
                methods: {
                    initWXAppInfo: function () {
                        var e = this;
                        return (0, d.getWXAppInfo)().then(function (t) {
                            t && (e.wxappInfo = t, e.globalColor = t.globalColor, e.initSessionKey(), (0, d.setNavigationBarColor)(t.topSetting));
                        });
                    },
                    initSessionKey: function () {
                        var e = this.wxappInfo;
                        getApp().globalData, e.personalApp || (0, p.getSessionKey)().then(function (e) { });
                    },
                    initColModuleInfo: function (t) {
                        var n = this;
                        return (0, p.getColInfo)({
                            colId: t
                        }).then(function (t) {
                            if (t) {
                                var r = n.wxappInfo.skinStyle, o = t.colStyle, i = t.setting, a = t.moduleInfoList;
                                n.infoSysList = [], n.infoSysIndexList = [], n.serviceList = [], n.serviceIndexList = [],
                                    a = n.preProccessModuleList(a, o), (n.infoSysList.length > 0 || n.serviceList.length > 0) && n.getVisitorLocation(),
                                    e.setNavigationBarTitle({
                                        title: t.name
                                    }), n.navigationBarTitle = t.name, n.moduleInfoList = a, n.setting = i, n.banHandler && n.banHandler(),
                                    n.$nextTick(function () {
                                        n.hasLoadModules = !0, n.skinStyle = n.getFinalSkinStyle({
                                            globalSkinStyle: r,
                                            colSkinStyle: o
                                        });
                                    });
                            }
                        }).catch(function (e) {
                            console.error(e);
                        });
                    },
                    preProccessModuleList: function (e, t) {
                        var n = this, r = this.wxappInfo.skinStyle;
                        return this.infoSysList = [], this.infoSysIndexList = [], this.serviceList = [],
                            this.serviceIndexList = [], e.forEach(function (o, i) {
                                if (i == e.length - 1 ? o.isLastModule = !0 : o.isLastModule = !1, o.skinStyle = n.getFinalSkinStyle({
                                    globalSkinStyle: r,
                                    colSkinStyle: t
                                }), 10 == o.style) {
                                    if (o.isLoading = !1, !o.content.le) return;
                                    o.isLoading = !0, n.serviceList = n.serviceList.concat(o.content.selectedList),
                                        n.serviceIndexList.push(i);
                                } else if (13 == o.style) {
                                    if (o.isLoading = !1, !o.content.le) return;
                                    o.isLoading = !0, n.infoSysList = n.infoSysList.concat(o.content.selectedList),
                                        n.infoSysIndexList.push(i);
                                } else 19 == o.style && o.content.moduleList.forEach(function (e, t) {
                                    var r = e.moduleInfo;
                                    if (r) if (10 === r.style) {
                                        if (r.isLoading = !1, !r.content.le) return;
                                        0 === t && (r.isLoading = !0), n.serviceList = n.serviceList.concat(r.content.selectedList),
                                            n.serviceIndexList.push([i, t]);
                                    } else if (13 === r.style) {
                                        if (r.isLoading = !1, !r.content.le) return;
                                        0 === t && (r.isLoading = !0), n.infoSysList = n.infoSysList.concat(r.content.selectedList),
                                            n.infoSysIndexList.push([i, t]);
                                    }
                                });
                            }), e;
                    },
                    getFinalSkinStyle: function (e) {
                        var t = e.globalSkinStyle, n = void 0 === t ? {} : t, r = e.colSkinStyle, o = void 0 === r ? {} : r, i = e.specSkinStyle, a = {};
                        return [n, o, void 0 === i ? {} : i].reduce(function (e, t) {
                            return Object.keys(t).forEach(function (n) {
                                e[n] ? e[n] += t[n] : e[n] = t[n], "pageBgStyle" == n && (e[n] != t[n] && t[n] ? (e[n] = t[n],
                                    e.finalBackgroundStyle = t[n]) : e.finalBackgroundStyle = e[n]);
                            }), e;
                        }, a), a;
                    },
                    getVisitorLocation: function () {
                        var t = this, n = getApp().globalData, r = this.infoSysList, o = this.infoSysIndexList, a = this.serviceList, s = this.serviceIndexList;
                        e.getLocation({
                            type: "gcj02"
                        }).then(function (e) {
                            var n = i(e, 2), o = n[0], s = n[1];
                            if (o) throw Error(o.errMsg);
                            var c = {
                                latitude: s.latitude,
                                longitude: s.longitude
                            };
                            r.length > 0 && t.handlerInfoSysDistance(c), a.length > 0 && t.handlerServiceDistance(c);
                        }).catch(function (r) {
                            console.log(r);
                            var i = r.message;
                            console.log("get location Erro -- " + i), n._hasGetLocationPopup || !i.indexOf(!0) && -1 === i.indexOf("auth denied") && -1 === i.indexOf("no response") ? (t.closeModuleLoading(o),
                                t.closeModuleLoading(s)) : e.showModal({
                                    title: "获取位置信息失败",
                                    content: "获取位置信息需要您的授权",
                                    confirmText: "去授权",
                                    success: function (r) {
                                        if (n._hasGetLocationPopup = !0, !r.confirm) return t.closeModuleLoading(o), void t.closeModuleLoading(s);
                                        e.openSetting({
                                            success: function (e) {
                                                1 == e.authSetting["scope.userLocation"] && t.getVisitorLocation();
                                            }
                                        });
                                    }
                                });
                        });
                    },
                    handlerInfoSysDistance: function (e) {
                        for (var t = this, n = this.infoSysList, r = this.infoSysIndexList, o = [], i = Math.ceil(n.length / 50), a = 0, s = 0; s < i; s++) {
                            o[s] = [];
                            for (var c = a; c < n.length; c++) {
                                var u = n[c].other;
                                if (u && u.ds.showAddress && 0 != u.ds.lat && 0 != u.ds.lng) {
                                    var l = u.ds;
                                    if (o[s].push({
                                        latitude: l.lat,
                                        longitude: l.lng
                                    }), a = c + 1, o[s].length == 50 * (s + 1)) break;
                                }
                            }
                        }
                        0 != o[0].length ? g.default.getDistance(e, o, function (e) {
                            for (var n = e || [], o = t.moduleInfoList, i = 0, a = 0; a < r.length; a++) {
                                var s = [], c = void 0;
                                "number" == typeof r[a] ? (c = o[r[a]], s = c.content.selectedList) : (c = o[r[a][0]].content.moduleList[r[a][1]].moduleInfo,
                                    s = c.content.selectedList);
                                for (var u = 0; u < s.length; u++) for (var l = i; l < n.length; l++) {
                                    var f = s[u].other;
                                    if (f && f.ds.showAddress && 0 != f.ds.lat && 0 != f.ds.lng) {
                                        f.ds.distance = n[l].distance, i = l + 1;
                                        break;
                                    }
                                }
                                s = s.sort(function (e, t) {
                                    return e.other && e.other.ds.distance && t.other && t.other.ds.distance ? e.other.ds.distance - t.other.ds.distance : e.other && !e.other.ds.distance && t.other && t.other.ds.distance ? 1 : e.other && e.other.ds.distance && t.other && !t.other.ds.distance ? -1 : void 0;
                                }), c.content.selectedList = s, c.isLoading = !1;
                            }
                        }) : this.closeModuleLoading(r);
                    },
                    handlerServiceDistance: function (e) {
                        for (var t = this, n = this.serviceList, r = this.serviceIndexList, i = [], a = Math.ceil(n.length / 50), s = 0, c = 0; c < a; c++) {
                            i[c] = [];
                            for (var u = s; u < n.length; u++) {
                                var l = n[u].setting.cs;
                                if (l.ao && 0 != l.lat && 0 != l.lng && (i[c].push({
                                    latitude: l.lat,
                                    longitude: l.lng
                                }), s = u + 1, i[c].length == 50 * (c + 1))) break;
                            }
                        }
                        0 != i[0].length ? g.default.getDistance(e, i, function (e) {
                            for (var n = e || [], i = t.moduleInfoList, a = 0, s = 0; s < r.length; s++) {
                                var c = [], u = void 0;
                                "number" == typeof r[s] ? (u = i[r[s]], c = u.content.selectedList) : (u = i[r[s][0]].content.moduleList[r[s][1]].moduleInfo,
                                    c = u.content.selectedList);
                                for (var l = 0; l < c.length; l++) for (var f = a; f < n.length; f++) {
                                    var p = c[l].setting;
                                    if (p && p.cs.ao && 0 != p.cs.lat && 0 != p.cs.lng) {
                                        p.cs.distance = n[f].distance, a = f + 1;
                                        break;
                                    }
                                }
                                ("number" == typeof r[s] && u.content.sbl || "object" == o(r[s]) && u.content.sbl) && (c = c.sort(function (e, t) {
                                    return e.setting && e.setting.cs.distance && t.setting && t.setting.cs.distance ? e.setting.cs.distance - t.setting.cs.distance : e.setting && !e.setting.cs.distance && t.setting && t.setting.cs.distance ? 1 : e.setting && e.setting.cs.distance && t.setting && !t.setting.cs.distance ? -1 : void 0;
                                })), u.content.selectedList = c, u.isLoading = !1;
                            }
                        }) : this.closeModuleLoading(r);
                    },
                    toggleHighLevelView: function (e) {
                        h.default.getCurrentPageEventEmitter().emit(e ? y.SHOW_SHADOWVIEW : y.HIDE_SHADOWVIEW);
                    },
                    closeModuleLoading: function (e) {
                        var t = this.moduleInfoList;
                        e.forEach(function (e) {
                            "object" == o(e) ? t[e[0]].content.moduleList[e[1]].moduleInfo.isLoading = !1 : t[e].isLoading = !1;
                        });
                    },
                    reloadPage: function () {
                        return this.initWXAppInfo(), this.initColModuleInfo(this.colId);
                    },
                    afterCommitForm: function () {
                        this.newComerHandler && this.newComerHandler();
                    },
                    commonAuthPopupCancelHandler: d.commonAuthPopupCancelHandler,
                    commonAuthPopupCompleteHandler: d.commonAuthPopupCompleteHandler
                },
                onShareAppMessage: function (e) {
                    var t = getApp().globalData, n = t.wxappInfo, r = this.colId;
                    r && (0, p.reportVisitorBehavior)({
                        type: 24,
                        relationId: r
                    }), "menu" == e.from ? this._logDog("7000081", 0) : "button" == e.from && this._logDog("7000081", 6),
                        this._logDog("7000081", 2 === r ? 10 : 11);
                    var o = this.navigationBarTitle, i = "";
                    if (n.wxShare) {
                        var a = n.wxShare, s = a.tle, c = a.p, u = a.it, l = a.tt;
                        s && l && (o = s), c && u && (i = c);
                    }
                    var f = t.extConfigData, h = "";
                    f.isModel && (h = "&scene=" + f.wxappAid + "_" + f.wxappId);
                    var g = "cusColId=" + this.colId + h;
                    e.webViewUrl && (g += "&webViewUrl=" + encodeURIComponent(e.webViewUrl));
                    var y = (0, d.beforeShareAppMessage)({
                        params: g
                    }), v = {
                        title: o,
                        imageUrl: i
                    };
                    return Object.assign({}, v, y);
                },
                onPullDownRefresh: function () {
                    var t = getApp().globalData;
                    t.hasCommonPopup = !0, this.reloadPage().finally(function () {
                        getApp().globalData.hasAutoPopup && (0, d.selectComponent)("#authPopup").then(function (e) {
                            e && e.init();
                        }), e.stopPullDownRefresh();
                    }), t.isManage && (this.showActionSheet = !1);
                },
                onLoad: function (e) {
                    var t, n = this, r = getApp().globalData;
                    if (e._cliid && (r._cliid = e._cliid), this.initWXAppInfo().then(function (t) {
                        e.webViewUrl && (r.shareWebViewUrl = n.wxappInfo.webappUrl = decodeURIComponent(e.webViewUrl)),
                            n.wxappInfo.isWebApp && n.wxappInfo.webappUrl && (n.isWebApp = n.wxappInfo.isWebApp,
                                n.webappUrl = n.wxappInfo.webappUrl), console.log("-----isWebApp", n.isWebApp),
                            console.log("-----webappUrl", n.webappUrl);
                    }), this.colId ? (t = this.colId, this.initColModuleInfo(t), this.initJumpTemplate()) : e.cusColId ? (this.colId = t = e.cusColId,
                        this.initColModuleInfo(t)) : (0, d.getWXAppInfo)(["tabBarCusColList"]).then(function (e) {
                            var r = e.tabBarCusColList;
                            n.colId = t = r[n.tabBarColIndex].cusColId, n.initColModuleInfo(t);
                        }), t) {
                        var o = getCurrentPages(), i = o[o.length - 1].route;
                        -1 !== i.indexOf("cusCol") && (i = "pages/cusCol/cusCol"), (0, p.reportVisitorBehavior)({
                            pageUrl: i,
                            relationId: t
                        });
                    }
                },
                onShareTimeline: function (e) {
                    var t = getApp().globalData, n = this.wxappInfo, r = this.navigationBarTitle, o = t.extConfigData, i = "", a = "";
                    o.isModel && (i = "&scene=" + o.wxappAid + "_" + o.wxappId);
                    var s = "cusColId=" + this.colId + i;
                    e.webViewUrl && (s += "&webViewUrl=" + encodeURIComponent(e.webViewUrl));
                    var c = (0, d.beforeShareTimeline)({
                        params: s
                    });
                    if (n.shareTimeLine) {
                        var u = n.shareTimeLine, l = u.tt, f = u.tle, p = u.it, h = u.p;
                        l && f && (r = f), p && h && (a = h);
                    }
                    return Object.assign({
                        title: r,
                        imageUrl: a
                    }, c);
                },
                onShow: function () {
                    var e = getApp(), t = e.globalData;
                    (0, d.getWXAppInfo)().then(function (t) {
                        if (t) {
                            var n = t.isOemExpired, r = t.isOem, o = t.isVisitLimit;
                            r && n ? e.showOemExpired() : o && e.showVisitLimitFunc();
                        }
                    }).catch(function (e) {
                        console.error(e);
                    }), this._logDog("7000090", this.colId ? 3 : 4), t.hasAutoPopup && (0, d.selectComponent)("#authPopup").then(function (e) {
                        e && e.init();
                    }), (0, d.selectComponent)("#newcomerPopup").then(function (e) {
                        e && e.init();
                    });
                },
                onReady: function () {
                    var e = n("104f");
                    e && e._INTERFACE.init();
                }
            };
            t.default = v;
        }).call(this, n("543d").default);
    },
    "72bf": function (t, n, r) {
        function i(t) {
            switch (t.arrayFormat) {
                case "index":
                    return function (n) {
                        return function (r, o) {
                            var i = r.length;
                            return void 0 === o || t.skipNull && null === o || t.skipEmptyString && "" === o ? r : null === o ? [].concat(e(r), [[u(n, t), "[", i, "]"].join("")]) : [].concat(e(r), [[u(n, t), "[", u(i, t), "]=", u(o, t)].join("")]);
                        };
                    };

                case "bracket":
                    return function (n) {
                        return function (r, o) {
                            return void 0 === o || t.skipNull && null === o || t.skipEmptyString && "" === o ? r : null === o ? [].concat(e(r), [[u(n, t), "[]"].join("")]) : [].concat(e(r), [[u(n, t), "[]=", u(o, t)].join("")]);
                        };
                    };

                case "comma":
                case "separator":
                    return function (e) {
                        return function (n, r) {
                            return null === r || void 0 === r || 0 === r.length ? n : 0 === n.length ? [[u(e, t), "=", u(r, t)].join("")] : [[n, u(r, t)].join(t.arrayFormatSeparator)];
                        };
                    };

                default:
                    return function (n) {
                        return function (r, o) {
                            return void 0 === o || t.skipNull && null === o || t.skipEmptyString && "" === o ? r : null === o ? [].concat(e(r), [u(n, t)]) : [].concat(e(r), [[u(n, t), "=", u(o, t)].join("")]);
                        };
                    };
            }
        }
        function s(e) {
            var t = void 0;
            switch (e.arrayFormat) {
                case "index":
                    return function (e, n, r) {
                        t = /\[(\d*)\]$/.exec(e), e = e.replace(/\[\d*\]$/, ""), t ? (void 0 === r[e] && (r[e] = {}),
                            r[e][t[1]] = n) : r[e] = n;
                    };

                case "bracket":
                    return function (e, n, r) {
                        t = /(\[\])$/.exec(e), e = e.replace(/\[\]$/, ""), t ? void 0 !== r[e] ? r[e] = [].concat(r[e], n) : r[e] = [n] : r[e] = n;
                    };

                case "comma":
                case "separator":
                    return function (t, n, r) {
                        var o = "string" == typeof n && n.split("").indexOf(e.arrayFormatSeparator) > -1 ? n.split(e.arrayFormatSeparator).map(function (t) {
                            return l(t, e);
                        }) : null === n ? n : l(n, e);
                        r[t] = o;
                    };

                default:
                    return function (e, t, n) {
                        void 0 !== n[e] ? n[e] = [].concat(n[e], t) : n[e] = t;
                    };
            }
        }
        function c(e) {
            if ("string" != typeof e || 1 !== e.length) throw new TypeError("arrayFormatSeparator must be single character string");
        }
        function u(e, t) {
            return t.encode ? t.strict ? v(e) : encodeURIComponent(e) : e;
        }
        function l(e, t) {
            return t.decode ? m(e) : e;
        }
        function f(e) {
            return Array.isArray(e) ? e.sort() : "object" === (void 0 === e ? "undefined" : a(e)) ? f(Object.keys(e)).sort(function (e, t) {
                return Number(e) - Number(t);
            }).map(function (t) {
                return e[t];
            }) : e;
        }
        function p(e) {
            var t = e.indexOf("#");
            return -1 !== t && (e = e.slice(0, t)), e;
        }
        function d(e) {
            var t = "", n = e.indexOf("#");
            return -1 !== n && (t = e.slice(n)), t;
        }
        function h(e) {
            var t = (e = p(e)).indexOf("?");
            return -1 === t ? "" : e.slice(t + 1);
        }
        function g(e, t) {
            return t.parseNumbers && !Number.isNaN(Number(e)) && "string" == typeof e && "" !== e.trim() ? e = Number(e) : !t.parseBooleans || null === e || "true" !== e.toLowerCase() && "false" !== e.toLowerCase() || (e = "true" === e.toLowerCase()),
                e;
        }
        function y(e, t) {
            c((t = Object.assign({
                decode: !0,
                sort: !0,
                arrayFormat: "none",
                arrayFormatSeparator: ",",
                parseNumbers: !1,
                parseBooleans: !1
            }, t)).arrayFormatSeparator);
            var n = s(t), r = Object.create(null);
            if ("string" != typeof e) return r;
            if (!(e = e.trim().replace(/^[?#&]/, ""))) return r;
            var i = !0, u = !1, p = void 0;
            try {
                for (var d, h = e.split("&")[Symbol.iterator](); !(i = (d = h.next()).done); i = !0) {
                    var y = d.value, v = b(t.decode ? y.replace(/\+/g, " ") : y, "="), m = o(v, 2), w = m[0], x = m[1];
                    x = void 0 === x ? null : ["comma", "separator"].includes(t.arrayFormat) ? x : l(x, t),
                        n(l(w, t), x, r);
                }
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                u = !0, p = e;
            } finally {
                try {
                    !i && h.return && h.return();
                } finally {
                    if (u) throw p;
                }
            }
            var _ = !0, I = !1, A = void 0;
            try {
                for (var S, O = Object.keys(r)[Symbol.iterator](); !(_ = (S = O.next()).done); _ = !0) {
                    var C = S.value, D = r[C];
                    if ("object" === (void 0 === D ? "undefined" : a(D)) && null !== D) {
                        var k = !0, T = !1, E = void 0;
                        try {
                            for (var j, P = Object.keys(D)[Symbol.iterator](); !(k = (j = P.next()).done); k = !0) {
                                var L = j.value;
                                D[L] = g(D[L], t);
                            }
                        } catch (e) {
                            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                            T = !0, E = e;
                        } finally {
                            try {
                                !k && P.return && P.return();
                            } finally {
                                if (T) throw E;
                            }
                        }
                    } else r[C] = g(D, t);
                }
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                I = !0, A = e;
            } finally {
                try {
                    !_ && O.return && O.return();
                } finally {
                    if (I) throw A;
                }
            }
            return !1 === t.sort ? r : (!0 === t.sort ? Object.keys(r).sort() : Object.keys(r).sort(t.sort)).reduce(function (e, t) {
                var n = r[t];
                return Boolean(n) && "object" === (void 0 === n ? "undefined" : a(n)) && !Array.isArray(n) ? e[t] = f(n) : e[t] = n,
                    e;
            }, Object.create(null));
        }
        var v = r("6453"), m = r("f234"), b = r("f32c"), w = function (e) {
            return null === e || void 0 === e;
        };
        n.extract = h, n.parse = y, n.stringify = function (e, t) {
            if (!e) return "";
            c((t = Object.assign({
                encode: !0,
                strict: !0,
                arrayFormat: "none",
                arrayFormatSeparator: ","
            }, t)).arrayFormatSeparator);
            var n = i(t), r = {}, o = !0, a = !1, s = void 0;
            try {
                for (var l, f = Object.keys(e)[Symbol.iterator](); !(o = (l = f.next()).done); o = !0) {
                    var p = l.value;
                    (function (n) {
                        return t.skipNull && w(e[n]) || t.skipEmptyString && "" === e[n];
                    })(p) || (r[p] = e[p]);
                }
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                a = !0, s = e;
            } finally {
                try {
                    !o && f.return && f.return();
                } finally {
                    if (a) throw s;
                }
            }
            var d = Object.keys(r);
            return !1 !== t.sort && d.sort(t.sort), d.map(function (r) {
                var o = e[r];
                return void 0 === o ? "" : null === o ? u(r, t) : Array.isArray(o) ? o.reduce(n(r), []).join("&") : u(r, t) + "=" + u(o, t);
            }).filter(function (e) {
                return e.length > 0;
            }).join("&");
        }, n.parseUrl = function (e, t) {
            t = Object.assign({
                decode: !0
            }, t);
            var n = b(e, "#"), r = o(n, 2), i = r[0], a = r[1];
            return Object.assign({
                url: i.split("?")[0] || "",
                query: y(h(e), t)
            }, t && t.parseFragmentIdentifier && a ? {
                fragmentIdentifier: l(a, t)
            } : {});
        }, n.stringifyUrl = function (e, t) {
            t = Object.assign({
                encode: !0,
                strict: !0
            }, t);
            var r = p(e.url).split("?")[0] || "", o = n.extract(e.url), i = n.parse(o, {
                sort: !1
            }), a = Object.assign(i, e.query), s = n.stringify(a, t);
            s && (s = "?" + s);
            var c = d(e.url);
            return e.fragmentIdentifier && (c = "#" + u(e.fragmentIdentifier, t)), "" + r + s + c;
        };
    },
    "77fd": function (e, t, n) {
        var r = n("cf45");
        getApp().globalData, e.exports = {
            data: function () {
                return {
                    isTabBarWebView: !1,
                    tabBarWebViewIndex: 0,
                    wxappInfo: {},
                    pageUrl: "",
                    messageUrl: ""
                };
            },
            onLoad: function (e) {
                var t = this;
                if (this.isTabBarWebView) this.initWXAppInfo().then(function (e) {
                    t.initWebView();
                }); else {
                    var n = decodeURIComponent(e.pageUrl);
                    this.pageUrl = n;
                }
            },
            onShow: function () {
                this._logDog(7000090, 4);
            },
            onShareAppMessage: function (e) {
                var t = this.messageUrl ? decodeURIComponent(this.messageUrl) : e.webViewUrl ? e.webViewUrl : this.pageUrl;
                return {
                    path: "/pages/webview/webview?pageUrl=" + encodeURIComponent(t)
                };
            },
            methods: {
                initWXAppInfo: function () {
                    var e = this;
                    return (0, r.getWXAppInfo)().then(function (t) {
                        t && (e.wxappInfo = t);
                    });
                },
                initWebView: function () {
                    var e = this.wxappInfo.tabBarWebViewList[this.tabBarWebViewIndex].pageUrl;
                    this.pageUrl = e;
                },
                webViewMessage: function (e) {
                    if (e.detail && e.detail.data) {
                        var t = e.detail.data;
                        this.messageUrl = t[t.length - 1].gameUrl;
                    }
                }
            }
        };
    },
    "787c": function (e, t) {
        var n = {
            callbackObj: {}
        };
        (function (e) {
            e.requestPayment = function (e) {
                t(e);
            };
            var t = function (t) {
                n.callbackObj.complete = function (e) {
                    var t = e.errMsg;
                    "request:ok" != t && "requestPayment:fail cancel" != t && "requestPayment:cancel" != e.errMsg && "requestPayment:ok" != t && console.log("get wxpay err!!errMsg=" + t);
                }, Object.assign(t, e.callbackObj), wx.requestPayment(t);
            };
        })(n), e.exports = n;
    },
    "7b0a": function (e, t, n) {
        function r(e) {
            for (var t = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2), n = new Array("1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"), r = e.split(""), o = 0, i = 0; i < 17; i++) o += parseInt(r[i]) * parseInt(t[i]);
            return r[17].toUpperCase() == n[o % 11].toUpperCase();
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.verifyPhoneNumber = function (e) {
            return !0;
        }, t.verifyEmail = function (e) {
            return /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e);
        }, t.verifyIdentity = function (e) {
            var t = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X|x)$/;
            return 18 == e.length ? r(e) && t.test(e) : t.test(e);
        };
    },
    "7c15": function (e, t, n) {
        (function (t) {
            function r(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })), n.push.apply(n, r);
                }
                return n;
            }
            function o(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? r(Object(n), !0).forEach(function (t) {
                        i(e, t, n[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach(function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                    });
                }
                return e;
            }
            function i(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e;
            }
            function a(e, t, n) {
                return function (r) {
                    var i = getApp().globalData, a = i.extConfigData;
                    return u.promisify(wx.request)({
                        url: a.wxappDomainUrl + e,
                        data: o(o({
                            wxappAid: a.wxappAid,
                            wxappId: a.wxappId,
                            openId: i.openId || ""
                        }, n), r),
                        method: t,
                        header: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    }).then(function (e) {
                        if (e.data.success) return e.data;
                        throw e.data ? Error(e.data.msg) : Error("response nothing");
                    }).catch(function (e) {
                        console.error(e);
                    });
                };
            }
            var s = n("1819"), c = n("787c"), u = (n("19e7"), n("ca00")), l = s, f = {};
            f.getExtConfigData = function () {
                return u.promisify(wx.getExtConfig)().then(function (e) {
                    if ("getExtConfig: ok" == e.errMsg) return e.extConfig;
                }).catch(function (e) {
                    console.log("get extConfigData Erro -- " + e.errMsg);
                });
            }, f.issueRequest = function (e) {
                function t() {
                    var t = n.extConfigData, o = "", i = {
                        url: "",
                        data: {
                            aid: t.aid,
                            wxappId: t.wxappId,
                            wxappAid: t.wxappAid,
                            wxappAppId: t.wxappAppId,
                            isOem: t.isOem
                        },
                        method: "GET",
                        header: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    };
                    if ("[object String]" == r.call(e.url)) o = e.url; else if ("[object Object]" == r.call(e.url)) {
                        var a = e.url;
                        o = a.domain ? a.domain : t.wxappDomainUrl, o = (o += a.path ? a.path : "wxAppConnectionV3.jsp") + "?cmd=" + a.cmd;
                    }
                    return e.url = o, e.data && (e.data = Object.assign({}, i.data, e.data)), Object.assign({}, i, e);
                }
                getApp().globalData;
                var n = getApp().globalData, r = Object.prototype.toString, o = u.promisify(wx.request);
                if (e && 0 != Object.keys(e).length && e.url) return (n.extConfigData && n.extConfigData.wxappAid ? o(t()) : f.getExtConfigData().then(function (e) {
                    return getApp().globalData.extConfigData = e, o(t());
                })).then(function (e) {
                    return e.data;
                }).catch(function (e) {
                    console.log(e);
                });
            }, f.logDog = function (e, t) {
                f.getExtConfigData().then(function (n) {
                    var r = n.aid, o = n.wxappId, i = n.isOem, a = n.wxappDomain;
                    i || wx.request({
                        url: a + "?cmd=logDog",
                        data: {
                            aid: r,
                            wxappId: o,
                            dogId: e,
                            srcId: t
                        },
                        method: "GET",
                        header: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        },
                        success: function (e) { },
                        fail: function () { }
                    });
                });
            }, f.logVisitDog = function (e, t) {
                f.getExtConfigData().then(function (n) {
                    var r = n.aid, o = (n.wxappId, n.isOem), i = n.wxappDomainUrl;
                    o || wx.request({
                        url: i + "appAjax/wxAppLogDog.jsp?cmd=logDog",
                        data: {
                            aid: r,
                            dogId: e,
                            srcId: t
                        },
                        method: "GET",
                        header: {
                            "Content-Type": "application/x-www-form-urlencoded",
                            cookie: "_cliid=" + getApp().globalData._cliid
                        },
                        success: function (e) { },
                        fail: function () { }
                    });
                });
            }, f.getWXAppInfo = function () {
                wx.showLoading({});
                var e = getApp().globalData.extConfigData;
                return u.promisify(wx.request)({
                    url: e.wxappDomain + "?cmd=getWXAppInfo",
                    data: {
                        isModel: e.isModel,
                        isOem: e.isOem,
                        aid: e.aid,
                        wxappAid: e.wxappAid,
                        wxappId: e.wxappId,
                        wxappAppId: e.wxappAppId
                    },
                    method: "GET",
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                }).then(function (t) {
                    if (!t.data.success) {
                        var n = t.data.errCode, r = t.statusCode;
                        return r >= 400 && (n = r), void wx.redirectTo({
                            url: "/pages/err/err?errCode=" + n
                        });
                    }
                    var o = t.data.wxappInfo, i = getApp().globalData;
                    i.wxappInfo = o, console.log(o), i.isVisitLimit = o.isVisitLimit, i.isVerFree = o.isVerFree,
                        i.globalColor = o.globalColor, i.tabbar = o.modelTabBar, i._cliid = o._cliid, i.isWebApp = o.isWebApp,
                        i.webappUrl = o.webappUrl, i.isOemExpired = o.isOemExpired, i.isOem = o.isOem, i.couponOpen = !!o.trialSwitch && o.trialSwitch.couponOpen,
                        i.iOSVirtualPay = o.iOSVirtualPay, o.wxappAid && (e.wxappAid = o.wxappAid), o.wxappId && (e.wxappId = o.wxappId),
                        o.isOem && o.isOemExpired && getApp().globalData.showOemExpired(), o.isVisitLimit && getApp().globalData.showVisitLimitFunc();
                }).catch(function (e) {
                    var t = getCurrentPages(), n = t[t.length - 1] || null;
                    if (n) {
                        var r = Object.keys(n.options).reduce(function (e, t) {
                            return e + "&".concat(t, "=").concat(n.options[t]);
                        }, ""), o = encodeURIComponent("/".concat(n.route).concat(r ? "?" + r : ""));
                        wx.redirectTo({
                            url: "/pages/err/err?requestFail=true&redirectFrom=".concat(o, "&errMsg=").concat(e.errMsg)
                        });
                    } else wx.redirectTo({
                        url: "/pages/err/err?requestFail=true&errMsg=".concat(e.errMsg)
                    });
                }).finally(function () {
                    setTimeout(function () {
                        wx.hideLoading({});
                    }, 1);
                });
            }, f.getWXAppColModuleInfo = function (e) {
                wx.showLoading({});
                var t = getApp().globalData.extConfigData;
                return u.promisify(wx.request)({
                    url: t.wxappDomain + "?cmd=getWXAppColModuleInfo",
                    data: {
                        isModel: t.isModel,
                        wxappAid: t.wxappAid,
                        wxappId: t.wxappId,
                        wxappAppId: t.wxappAppId,
                        colId: e,
                        openId: getApp().globalData.openId
                    },
                    method: "GET",
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                }).then(function (e) {
                    if (e.data.success) return e.data.colInfo;
                    var t = e.data.errCode, n = e.statusCode;
                    return n >= 400 && (t = n), void wx.redirectTo({
                        url: "/pages/err/err?errCode=" + t
                    });
                }).catch(function (e) {
                    var t = getCurrentPages(), n = t[t.length - 1] || null;
                    if (n) {
                        var r = Object.keys(n.options).reduce(function (e, t) {
                            return e + "".concat(t, "=").concat(n.options[t]);
                        }, ""), o = encodeURIComponent("/".concat(n.route).concat(r ? "?" + r : ""));
                        wx.redirectTo({
                            url: "/pages/err/err?requestFail=true&redirectFrom=".concat(o, "&errMsg=").concat(e.errMsg)
                        });
                    } else wx.redirectTo({
                        url: "/pages/err/err?requestFail=true&errMsg=".concat(e.errMsg)
                    });
                }).finally(function () {
                    setTimeout(function () {
                        wx.hideLoading({});
                    }, 1);
                });
            }, f.getUserInfoByCode = function (e) {
                var t = getApp().globalData.extConfigData;
                return u.promisify(wx.request)({
                    url: t.wxappDomain + "?cmd=getUserInfoByCode",
                    data: {
                        wxappAid: t.wxappAid,
                        wxappId: t.wxappId,
                        wxappAppId: t.wxappAppId,
                        isOem: t.isOem,
                        code: e
                    },
                    method: "GET",
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                }).then(function (e) {
                    var t = e.data;
                    if (t.success) {
                        t.sessionKey && wx.setStorageSync("_SESSION_KEY", t.sessionKey);
                        var n = t.userInfo, r = getApp().globalData;
                        return n ? (r.userInfo = n, r.openId = n.openId) : r.openId = t.openId, e.data;
                    }
                    console.log(t);
                }).catch(function (e) {
                    console.log(e);
                });
            }, f.getSessionKeyByCode = function (e) {
                var t = getApp().globalData.extConfigData;
                return u.promisify(wx.request)({
                    url: t.wxappDomainUrl + "/appAjax/initInfo.jsp?cmd=getSessionKeyByCode",
                    data: {
                        wxappAid: t.wxappAid,
                        wxappId: t.wxappId,
                        wxappAppId: t.wxappAppId,
                        isOem: t.isOem,
                        code: e
                    },
                    method: "GET",
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                }).then(function (e) {
                    var t = e.data;
                    if (t.success) return t.sessionKey && wx.setStorageSync("_SESSION_KEY", t.sessionKey),
                        e.data;
                    console.log(t);
                }).catch(function (e) {
                    console.log(e);
                });
            }, f.getUserInfoByAuth = function (e) {
                var t = getApp().globalData;
                e.openId = t.openId;
                var n = t.extConfigData;
                return u.promisify(wx.request)({
                    url: n.wxappDomain + "?cmd=addUserInfo",
                    data: {
                        wxappAid: n.wxappAid,
                        wxappId: n.wxappId,
                        wxappAppId: n.wxappAppId,
                        userInfo: e
                    },
                    method: "GET",
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                }).then(function (n) {
                    var r = n.data;
                    if (r.success) return r.userInfo = e, u.isUserInfoEmpty() && (t.userInfo = e), r;
                    console.log(r);
                }).catch(function (e) {
                    console.log(e);
                });
            }, f.getOrAddUserInfo = function (e, t) {
                getApp().globalData;
                var n = getApp().globalData.extConfigData, r = u.promisify(wx.request);
                return wx.showLoading({
                    title: "登录中",
                    mask: !0
                }), r({
                    url: n.wxappDomain + "?cmd=getOrAddUserInfo",
                    data: {
                        wxappAid: n.wxappAid,
                        wxappId: n.wxappId,
                        wxappAppId: n.wxappAppId,
                        code: e,
                        userInfo: JSON.parse(t)
                    },
                    method: "GET",
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                }).then(function (e) {
                    var t = e.data;
                    if (!t.success) throw Error(e.errMsg);
                    t.sessionKey && wx.setStorageSync("_SESSION_KEY", t.sessionKey);
                    var n = t.dbUserInfo;
                    getApp().globalData.userInfo = n, getApp().globalData.openId = n.openId;
                }).catch(function (e) {
                    console.log(e), wx.showModal({
                        title: "",
                        showCancel: !1,
                        content: e.message
                    });
                }).finally(function () {
                    wx.hideLoading();
                });
            }, f.getLocationFromBaidu = function (e, t) {
                f.reportVisitorBehavior({
                    type: 22
                }), wx.showLoading({}), new s({
                    key: u.getKey(t)
                }).geocoder({
                    address: e,
                    success: function (t) {
                        var n = t.result.location, r = n.lng, o = n.lat;
                        wx.openLocation({
                            latitude: o,
                            longitude: r,
                            name: e
                        }), wx.hideLoading();
                    },
                    fail: function (t) {
                        121 == t.status && -1 != t.message.indexOf("此key每日调用量已达到上限") && f.getLocationFromBaidu(e, !0);
                    },
                    complete: function (e) { }
                });
            }, f.getLocationByAddr = function (e, t, n) {
                new s({
                    key: u.getKey(n)
                }).geocoder({
                    address: t,
                    success: function (t) {
                        var n = t.result.location, r = n.lng, o = n.lat;
                        e({
                            lng: r,
                            lat: o
                        });
                    },
                    fail: function (n) {
                        121 == n.status && -1 != n.message.indexOf("此key每日调用量已达到上限") && f.getLocationByAddr(e, t, !0),
                            e();
                    },
                    complete: function (e) { }
                });
            }, f.getLocation = function (e) {
                return new Promise(function (n, r) {
                    t.getLocation({
                        type: "gcj02",
                        success: function (t) {
                            n(t), e && e(t);
                        },
                        fail: function (t) {
                            console.error(t);
                            var n = new Error(t.message || t.errMsg || t.status || "请求出错");
                            r(n), e && e(n, t);
                        }
                    });
                });
            }, f.getAddrByLocation = function (e, t) {
                return new Promise(function (n, r) {
                    new l({
                        key: u.getMapKey()
                    }).reverseGeocoder({
                        location: "".concat(e.latitude, ",").concat(e.longitude),
                        success: function (e) {
                            n(e.result), t && t(e);
                        },
                        fail: function (e) {
                            var n = new Error(e.message || e.status || "请求出错");
                            r(n), t && t(n, e);
                        }
                    });
                });
            }, f.getLocationByAddrv2 = function (e, t) {
                return new Promise(function (n, r) {
                    new l({
                        key: u.getMapKey()
                    }).geocoder({
                        address: e,
                        success: function (e) {
                            n(e.result), t && t(e);
                        },
                        fail: function (e) {
                            var n = new Error(e.message || e.status || "请求出错");
                            r(n), t && t(n, e);
                        }
                    });
                });
            }, f.getDistance = function (e, t, n) {
                for (var r = [], o = [], i = 0; i < t.length; i++) o.push(function (t) {
                    var n = new s({
                        key: "KNWBZ-TWB6O-5DJWC-SPHN5-NQIT5-V7FHU"
                    }), r = u.promisify(n.calculateDistance, n)({
                        mode: "walking",
                        from: e,
                        to: t
                    }).then(function (e) {
                        return console.log("getDistance", e), e.result && e.result.elements ? e.result.elements : [];
                    }).catch(function (e) {
                        return console.log(e), !1;
                    });
                    return r;
                }(t[i]));
                Promise.all(o).then(function (e) {
                    r = e.reduce(function (e, t) {
                        return e.concat(t);
                    }), n(r);
                }).catch(function (e) {
                    console.log(e);
                });
            }, f.commitForm = function (e, t, n, r) {
                var o, i = getApp().globalData.extConfigData, a = u.promisify(wx.request), s = e.options;
                e.props.isIndexCol ? o = 2 : e.props.isCusCol ? o = s.cusColId : e.props.isTabBarCol && (getApp().globalData,
                    o = getApp().globalData.wxappInfo.tabBarCusColList[e.props.tabBarColIndex].cusColId);
                var c = getApp().globalData.openId, l = [];
                for (var p in r) {
                    var d = r[p];
                    d instanceof Array && (d = d.join("\n"));
                    var h = {
                        id: 1 * p,
                        val: d
                    };
                    l.push(h);
                }
                for (var g = e.data.moduleInfoList, y = [], v = [], m = {}, b = !1, w = 0, x = g.length; w < x; w++) {
                    var _ = g[w];
                    if (_.id == n) {
                        y = _.content.tmpFileList ? _.content.tmpFileList : [], m = _.content.jInfo;
                        for (var I = _.content.formData, A = 0; A < I.length; A++) {
                            if (6 == I[A].type && I[A].input && (b = !0), 6 == I[A].type && I[A].phoneSetting.ov && (f.logDog(7000110, 1),
                                I[A].input)) {
                                var S = {
                                    phone: I[A].input,
                                    code: I[A].phoneSetting.code,
                                    codeSign: I[A].phoneSetting.codeSign
                                };
                                v.push(S);
                            }
                            6 != I[A].type || I[A].phoneSetting.ov || f.logDog(7000110, 0);
                        }
                        break;
                    }
                }
                return a({
                    url: i.wxappDomain + "?cmd=addWXAppFormSubmit",
                    data: {
                        wxappAid: i.wxappAid,
                        wxappId: i.wxappId,
                        aid: i.aid,
                        formId: t,
                        colId: o,
                        openId: c,
                        submitContentList: JSON.stringify(l),
                        tmpFileList: JSON.stringify(y),
                        codeValidationList: JSON.stringify(v)
                    },
                    method: "POST",
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                }).then(function (e) {
                    var t = e.data;
                    if (t.success) {
                        var r = t.id;
                        return f.reportVisitorBehavior({
                            type: 17,
                            relationId: r
                        }), b && f.reportVisitorBehavior({
                            type: 18,
                            relationId: r
                        }), {
                            success: !0,
                            jInfo: m,
                            moduleid: n
                        };
                    }
                    return t;
                }).catch(function (e) {
                    wx.showToast({
                        title: "提交失败"
                    }), console.error(e);
                }).finally(function () {
                    wx.hideLoading();
                });
            }, f.uploadFile = function (e, t) {
                var n = getApp().globalData.extConfigData, r = n.wxappAid, o = n.wxappId, i = n.wxappDomainUrl, a = e.options;
                e.props.isIndexCol || (e.props.isCusCol ? a.cusColId : e.props.isTabBarCol && (getApp().globalData,
                    getApp().globalData.wxappInfo.tabBarCusColList[e.props.tabBarColIndex].cusColId)),
                    wx.showLoading({
                        title: "上传中",
                        mask: !0
                    });
                var s = "&wxappAid=" + r + "&wxappId=" + o + "&type=0&formId=" + t.formId + "&itemId=" + t.itemId + "&fileSize=" + t.fileSize + "&fileType=" + t.fileType, c = !1;
                wx.uploadFile({
                    url: i + "wxAppAdvanceUpload.jsp?cmd=formFileUpload" + s,
                    filePath: t.filePath,
                    name: "ctrl",
                    header: {
                        "Content-Type": "multipart/form-data"
                    },
                    success: function (n) {
                        if ("" != n.data) {
                            var r = JSON.parse(n.data);
                            if (r.success) {
                                var o = r.fileId;
                                wx.hideLoading(), wx.showToast({
                                    title: "上传成功"
                                });
                                for (var i = e.data.moduleInfoList, a = 0, s = i.length; a < s; a++) {
                                    var u = i[a];
                                    if (u.id == t.moduleid) {
                                        for (var l = u.content.formData, f = {}, p = "", d = 0; d < l.length; d++) l[d].id == t.itemId && (l[d].val = o,
                                            l[d].path = r.path, p = "moduleInfoList[" + a + "].content.formData[" + d + "]",
                                            f[p] = l[d]);
                                        u.content.tmpFileList = u.content.tmpFileList ? u.content.tmpFileList : [];
                                        var h = u.content.tmpFileList;
                                        h.push({
                                            tmpFileId: r.id,
                                            tmpFileName: r.name,
                                            fileId: r.fileId
                                        }), f["moduleInfoList[" + a + "].content.tmpFileList"] = h, e.setData(f);
                                    }
                                }
                            } else wx.showModal({
                                title: "上传失败",
                                showCancel: !1,
                                content: r.msg,
                                success: function (e) { }
                            }), wx.hideLoading();
                        } else c = !0;
                    },
                    fail: function (e) {
                        console.log(e), wx.hideLoading(), wx.showModal({
                            title: "上传失败",
                            showCancel: !1,
                            content: "系统繁忙，请稍后重试！",
                            success: function (e) { }
                        });
                    },
                    complete: function (e) {
                        c && (wx.hideLoading(), wx.showModal({
                            title: "上传失败",
                            showCancel: !1,
                            content: "系统繁忙，请稍后重试！",
                            success: function (e) { }
                        }));
                    }
                });
            }, f.getPhoneNumber = function (e, t) {
                var n = getApp().globalData.extConfigData;
                return u.promisify(wx.request)({
                    url: n.wxappDomainUrl + "/appAjax/secureUtil.jsp?cmd=decryptPhone",
                    data: {
                        encryptedData: t.encryptedData,
                        iv: t.iv,
                        sessionKey: t.sessionKey,
                        isOem: n.isOem,
                        wxappAid: n.wxappAid,
                        wxappAppId: n.wxappAppId
                    },
                    method: "POST",
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                }).then(function (n) {
                    var r = n.data;
                    if (!r.success) throw Error(r.msg);
                    for (var o = r.phone, i = e.data.moduleInfoList, a = 0, s = i.length; a < s; a++) {
                        var c = i[a];
                        if (c.id == t.moduleid) {
                            for (var u = c.content.formData, l = {}, f = "", p = 0; p < u.length; p++) u[p].id == t.itemId && (u[p].input = o,
                                u[p].hasAuth = !0, f = "moduleInfoList[" + a + "].content.formData[" + p + "]",
                                l[f] = u[p]);
                            e.setData(l);
                        }
                    }
                }).catch(function (e) {
                    wx.hideLoading(), wx.showModal({
                        title: "获取失败",
                        showCancel: !1,
                        content: e.message
                    });
                });
            }, f.getPhoneNumberV2 = function (e) {
                return f.issueRequest({
                    url: {
                        path: "appAjax/secureUtil.jsp",
                        cmd: "decryptPhone"
                    },
                    data: e,
                    method: "POST"
                }).then(function (e) {
                    if (!e.success) throw Error(e.msg);
                    var t = getApp().globalData;
                    return t.userInfo || (t.userInfo = {}), t.userInfo.authPhone = e.phone, e;
                }).catch(function (e) {
                    console.error(e.message);
                });
            }, f.getVerNumber = function (e, t) {
                var n = getApp().globalData.extConfigData;
                return u.promisify(wx.request)({
                    url: n.wxappDomainUrl + "/appAjax/wxAppConnectionForm.jsp?cmd=sendValidateCode",
                    data: {
                        aid: n.aid,
                        wxappAid: n.wxappAid,
                        wxappId: n.wxappId,
                        moduleId: t.moduleId,
                        formId: t.formId,
                        itemId: t.itemId,
                        phone: t.phone
                    },
                    method: "POST",
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                }).then(function (t) {
                    var n = t.data;
                    if (n.success) return n;
                    e.toast.showToast({
                        title: t.data.msg,
                        icon: "warning",
                        duration: 2e3
                    });
                }).catch(function (t) {
                    wx.hideLoading(), e.toast.showToast({
                        title: "获取失败",
                        icon: "warning",
                        duration: 2e3
                    });
                });
            }, f.getVisitedSimpleInfo = function (e) {
                function t(e) {
                    var t = {
                        wxappAid: e.wxappAid,
                        wxappId: e.wxappId,
                        wxappAppId: e.wxappAppId,
                        isOem: e.isOem
                    };
                    void 0 !== o.openId ? (t.openId = o.openId, n(t, e.wxappDomain)) : wx.login({
                        success: function (r) {
                            "login:ok" == r.errMsg && (t.code = r.code, n(t, e.wxappDomain));
                        }
                    });
                }
                function n(t, n) {
                    wx.request({
                        url: n + "?cmd=getCardVisitSimpleInfo",
                        data: t,
                        method: "GET",
                        header: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        },
                        success: function (t) {
                            var n = t.data;
                            n.success && (e && e(n.data), void 0 === o.openId && n.data.openId && (o.openId = n.data.openId));
                        },
                        fail: function () {
                            console.log("getCardInfo err");
                        }
                    });
                }
                var r, o = getApp().globalData;
                void 0 !== o.extConfigData && void 0 !== o.extConfigData.wxappAid ? (r = o.extConfigData,
                    t(r)) : wx.getExtConfig({
                        success: function (e) {
                            "getExtConfig: ok" == e.errMsg && (r = e.extConfig, t(r));
                        }
                    });
            }, f.getInfoSysDetailSetting = function (e) {
                var t = getApp().globalData.extConfigData;
                return u.promisify(wx.request)({
                    url: t.wxappDomain + "?cmd=getInfoSysSetting",
                    data: {
                        wxappAid: t.wxappAid,
                        wxappId: t.wxappId,
                        id: e,
                        isModel: t.isModel
                    },
                    method: "GET",
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                }).then(function (e) {
                    if (e.data.success) return e.data;
                }).catch(function (e) {
                    console.log("get InfoSysDetail Setting Erro -- " + e.errMsg);
                });
            }, f.getInfoSysDetail = function (e) {
                var t = getApp().globalData.extConfigData;
                return u.promisify(wx.request)({
                    url: t.wxappDomain + "?cmd=getInfoSysDetail",
                    data: {
                        wxappAid: t.wxappAid,
                        wxappId: t.wxappId,
                        id: e
                    },
                    method: "GET",
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                }).then(function (e) {
                    if (e.data.success) return e.data;
                }).catch(function (e) {
                    console.log("get InfoSysDetail Data Erro -- " + e.errMsg);
                });
            }, f.getWXAppForm = function (e) {
                var t = getApp().globalData.extConfigData;
                return u.promisify(wx.request)({
                    url: t.wxappDomain + "?cmd=getWXAppForm",
                    data: {
                        wxappAid: t.wxappAid,
                        wxappId: t.wxappId,
                        id: e
                    },
                    method: "GET",
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                }).then(function (e) {
                    if (e.data.success) return e.data;
                }).catch(function (e) {
                    console.log(e), console.log("get Form Data Erro -- " + e.errMsg);
                });
            }, f.uploadFile2 = function (e) {
                var t = getApp().globalData.extConfigData, n = (e.fromColId, u.promisify(wx.uploadFile));
                wx.showLoading({
                    title: "上传中",
                    mask: !0
                });
                var r = "&wxappAid=" + t.wxappAid + "&wxappId=" + t.wxappId + "&type=0&formId=" + e.formId + "&itemId=" + e.itemId + "&fileSize=" + e.fileSize + "&fileType=" + e.fileType;
                return n({
                    url: t.wxappDomainUrl + "wxAppAdvanceUpload.jsp?cmd=formFileUpload" + r,
                    filePath: e.filePath,
                    name: "ctrl",
                    header: {
                        "Content-Type": "multipart/form-data"
                    }
                }).then(function (e) {
                    if (wx.hideLoading(), "" == e.data) throw Error("上传失败");
                    var t = JSON.parse(e.data);
                    if (!t.success) throw Error(t.msg);
                    return {
                        id: t.id,
                        fileName: t.name,
                        fileId: t.fileId,
                        filePath: t.path
                    };
                }).catch(function (e) {
                    console.log("upload img err -- " + e), wx.showModal({
                        title: "上传失败",
                        showCancel: !1,
                        content: e.message
                    });
                });
            }, f.commitFormV2 = function (e, t) {
                var n = getApp().globalData, r = [], o = t.verificationList, i = t.data;
                for (var a in i) {
                    var s = i[a];
                    s instanceof Array && (s = s.join("\n")), r.push({
                        id: 1 * a,
                        val: s
                    });
                }
                return f.issueRequest({
                    url: {
                        cmd: "addWXAppFormSubmit"
                    },
                    data: {
                        formId: t.formId,
                        colId: t.fromColId,
                        openId: n.openId,
                        sourceType: t.sourceType,
                        tmpFileList: JSON.stringify(e),
                        submitContentList: JSON.stringify(r),
                        codeValidationList: JSON.stringify(o)
                    },
                    method: "POST"
                }).then(function (e) {
                    if (!e.success) throw Error(e.msg);
                    return e;
                }).catch(function (e) {
                    wx.showModal({
                        title: "提交失败",
                        showCancel: !1,
                        content: e.message
                    });
                });
            }, f.getWXAppUnionid = function (e) {
                var t = getApp().globalData.extConfigData;
                return u.promisify(wx.request)({
                    url: t.wxappDomainUrl + "appAjax/manage.jsp?cmd=checkWX",
                    data: {
                        code: e
                    },
                    method: "GET",
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                }).then(function (e) {
                    if (e.data.success) return e.data;
                    wx.showModal({
                        title: e.data.msg
                    });
                }).catch(function (e) {
                    console.log("getWXAppUnionid -- " + e.errMsg);
                });
            }, f.getLoginWXApp = function (e, t) {
                var n = this, r = getApp().globalData.extConfigData;
                return u.promisify(wx.request)({
                    url: r.wxappDomainUrl + "appAjax/manage.jsp?cmd=getLoginWXApp",
                    data: {
                        aid: e
                    },
                    method: "GET",
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded",
                        Cookie: "_FSESSIONID=" + t
                    }
                }).then(function (e) {
                    if (e.data.success || n.toast.showToast({
                        title: e.data.msg,
                        icon: "warning",
                        duration: 2e3
                    }), e.data.success) return e.data;
                }).catch(function (e) {
                    console.log("getLoginWXApp -- " + e.errMsg);
                });
            }, f.cloneWXApp = function (e) {
                var t = getApp().globalData.extConfigData;
                return u.promisify(wx.request)({
                    url: t.wxappDomainUrl + "appAjax/manage.jsp?cmd=cloneWXApp",
                    data: {
                        fromWXAppAid: e.fromWXAppAid,
                        fromWXAppId: e.fromWXAppId,
                        targetWXAppAId: e.targetWXAppAId,
                        targetWXAppId: e.targetWXAppId
                    },
                    method: "GET",
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded",
                        Cookie: "_FSESSIONID=" + e.sessionid
                    }
                }).then(function (e) {
                    return e.data;
                }).catch(function (e) {
                    console.log("cloneWXApp -- " + e.errMsg);
                });
            }, f.getWXAppEditInfo = function (e) {
                var t = getApp().globalData.extConfigData;
                return u.promisify(wx.request)({
                    url: t.wxappDomainUrl + "appAjax/manage.jsp?cmd=getWXAppEditInfo",
                    data: {
                        wxappAid: e.wxappAid,
                        wxappId: e.wxappId
                    },
                    method: "GET",
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded",
                        Cookie: "_FSESSIONID=" + e.sessionid
                    }
                }).then(function (e) {
                    return e.data;
                }).catch(function (e) {
                    console.log("getWXAppEditInfo -- " + e.errMsg);
                });
            }, f.setWXAppInfo = function (e) {
                var t = getApp().globalData.extConfigData;
                return u.promisify(wx.request)({
                    url: t.wxappDomainUrl + "appAjax/manage.jsp?cmd=setWXAppInfo",
                    data: e,
                    method: "GET",
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded",
                        Cookie: "_FSESSIONID=" + e.sessionid
                    }
                }).then(function (e) {
                    if (!e.data.success) throw Error(e.data.msg);
                    return e.data;
                }).catch(function (e) {
                    console.log("getWXAppEditInfo -- " + e.errMsg);
                });
            }, f.getAdvContent = function (e) {
                var t = getApp().globalData.extConfigData;
                return u.promisify(wx.request)({
                    url: t.wxappDomain + "?cmd=getAdvContent",
                    data: e,
                    method: "GET",
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                }).then(function (e) {
                    if (!e.data.success) throw Error(e.data.msg);
                    return e.data;
                }).catch(function (e) {
                    console.log("getAdvContent -- " + e.errMsg);
                });
            }, f.messageFileUpload = function (e) {
                var t = getApp().globalData.extConfigData, n = t.wxappDomainUrl, r = u.promisify(wx.uploadFile);
                return wx.showLoading({
                    title: "上传中",
                    mask: !0
                }), r({
                    url: n + "wxAppAdvanceUpload.jsp?cmd=messageFileUpload" + ("&wxappAid=" + t.wxappAid + "&wxappId=" + t.wxappId + "&fileSize=" + e.fileSize + "&type=0"),
                    filePath: e.filePath,
                    name: "ctrl",
                    header: {
                        "Content-Type": "multipart/form-data"
                    }
                }).then(function (e) {
                    if (wx.hideLoading(), "" == e.data) throw Error("上传失败");
                    return JSON.parse(e.data);
                }).catch(function (e) {
                    console.log("upload img err -- " + e), wx.showModal({
                        title: "上传失败",
                        showCancel: !1,
                        content: e.message
                    });
                });
            }, f.addMessage = function (e) {
                wx.showLoading({
                    title: "提交中",
                    mask: !0
                });
                var t = getApp().globalData, n = t.extConfigData, r = u.promisify(wx.request), o = e.formData || {}, i = e.fileData || [], a = e.fileIdList || [];
                return r({
                    url: n.wxappDomainUrl + "appAjax/wxAppConnectionMessage.jsp?cmd=addMessage",
                    data: {
                        wxappAid: n.wxappAid,
                        wxappId: n.wxappId,
                        from: 0,
                        openId: t.openId,
                        headImgUrl: t.userInfo.avatarUrl,
                        nickname: t.userInfo.nickName,
                        formData: JSON.stringify(o),
                        fileIdList: JSON.stringify(a),
                        tmpFileList: JSON.stringify(i)
                    },
                    method: "POST",
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                }).then(function (e) {
                    var t = e.data;
                    return wx.hideLoading(), t;
                }).catch(function (e) {
                    wx.hideLoading(), wx.showModal({
                        title: "提交失败",
                        showCancel: !1,
                        content: e.message
                    });
                });
            }, f.getMessageList = function (e) {
                wx.showLoading({
                    title: "加载中",
                    mask: !0
                });
                var t = getApp().globalData, n = t.extConfigData;
                return u.promisify(wx.request)({
                    url: n.wxappDomainUrl + "appAjax/wxAppConnectionMessage.jsp?cmd=getMessageList",
                    data: {
                        wxappAid: n.wxappAid,
                        wxappId: n.wxappId,
                        isOem: n.isOem,
                        from: 0,
                        openId: t.openId || "",
                        code: e.code || "",
                        wxappAppId: n.wxappAppId || "",
                        bdappAppId: n.bdappAppId || ""
                    },
                    method: "POST",
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                }).then(function (e) {
                    var t = e.data;
                    return wx.hideLoading(), t;
                }).catch(function (e) {
                    wx.hideLoading(), console.log("getMessageList -- " + e.errMsg);
                });
            }, f.reportVisitorBehavior = function () {
                function e() {
                    var e = getCurrentPages(), r = e[e.length - 1].route;
                    f.issueRequest({
                        url: {
                            path: "appAjax/wxAppConnectionVisitor.jsp",
                            cmd: "addUpdatings"
                        },
                        data: Object.assign({}, {
                            visitorId: n.visitorId,
                            pageUrl: r
                        }, t)
                    }).catch(function (e) {
                        console.log(e);
                    });
                }
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = getApp().globalData;
                if (n.visitorId, n.visitorId) e(); else var r = setInterval(function () {
                    n.visitorId && (clearInterval(r), e());
                }, 500);
            }, f.getVoteList = function () {
                var e = getApp().globalData, t = e.extConfigData;
                return u.promisify(wx.request)({
                    url: t.wxappDomainUrl + "appAjax/vote.jsp?cmd=list",
                    data: {
                        wxappAid: t.wxappAid,
                        wxappId: t.wxappId,
                        openId: e.openId || ""
                    },
                    method: "GET",
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                }).then(function (e) {
                    var t = e.data;
                    if (!t.success) throw getCurrentPages()[getCurrentPages().length - 1].setData({
                        votesList: -2
                    }), Error(t.msg);
                    return t.voteList;
                }).catch(function (e) {
                    getCurrentPages()[getCurrentPages().length - 1].setData({
                        votesList: -2
                    }), console.error(e);
                });
            }, f.validateSign = function () {
                var e = getApp().globalData.extConfigData;
                return u.promisify(wx.request)({
                    url: e.wxappDomainUrl + "appAjax/validateSign.jsp?cmd=get",
                    data: {},
                    method: "GET",
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                }).then(function (t) {
                    var n = t.data;
                    if (n.success) return {
                        wxappDomainUrl: e.wxappDomainUrl,
                        sign: n.sign,
                        code: n.code
                    };
                    getCurrentPages()[getCurrentPages().length - 1].dialog.show({
                        title: "提示",
                        content: n.msg,
                        confirmButton: "确 定"
                    });
                }).catch(function (e) {
                    console.error(e);
                });
            }, f.addGiftRecord = function (e) {
                var t = getApp().globalData, n = t.extConfigData;
                return u.promisify(wx.request)({
                    url: n.wxappDomainUrl + "appAjax/wxAppConnectionGift.jsp?cmd=addGiftRecord",
                    data: {
                        wxappAid: n.wxappAid,
                        wxappId: n.wxappId,
                        openId: t.openId || "",
                        name: e.name,
                        phone: e.phone,
                        giftId: e.giftId
                    },
                    method: "GET",
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                }).then(function (e) {
                    var t = e.data;
                    if (t.success || getCurrentPages()[getCurrentPages().length - 1].dialog.show({
                        title: "提示",
                        content: t.msg,
                        confirmButton: "确 定"
                    }), t.success) return f.reportVisitorBehavior({
                        type: 29,
                        relationId: t.id
                    }), t;
                }).catch(function (e) {
                    console.error(e);
                });
            }, f.checkUserPhoneExisted = function (e) {
                var t = getApp().globalData, n = t.extConfigData;
                return u.promisify(wx.request)({
                    url: n.wxappDomainUrl + "appAjax/initInfo.jsp?cmd=checkUserPhoneExisted",
                    data: {
                        wxappAid: n.wxappAid,
                        wxappId: n.wxappId,
                        openId: t.openId || "",
                        platform: 0
                    },
                    method: "GET",
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                }).then(function (e) {
                    var t = e.data;
                    if (t.success) return t;
                    console.log(t);
                }).catch(function (e) {
                    console.error(e);
                });
            }, f.sendGiftRecordSuccessWXMsg = function (e) {
                var t = getApp().globalData, n = t.extConfigData;
                return u.promisify(wx.request)({
                    url: n.wxappDomainUrl + "appAjax/wxAppConnectionGift.jsp?cmd=sendGiftRecordSuccessWXMsg",
                    data: {
                        wxappAid: n.wxappAid,
                        wxappId: n.wxappId,
                        openId: t.openId || "",
                        giftId: e.giftId,
                        formId: e.formId
                    },
                    method: "GET",
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                }).then(function (e) { }).catch(function (e) {
                    console.error(e);
                });
            }, f.getMyCouponList = function () {
                var e = getApp().globalData, t = e.extConfigData;
                return u.promisify(wx.request)({
                    url: t.wxappDomainUrl + "appAjax/mypage.jsp?cmd=myCoupon",
                    data: {
                        wxappAid: t.wxappAid,
                        wxappId: t.wxappId,
                        openId: e.openId,
                        from: 0
                    },
                    method: "GET",
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                }).then(function (e) {
                    var t = e.data;
                    if (!t.success) throw Error(t.msg);
                    return wx.hideLoading(), t;
                }).catch(function (e) {
                    console.error(e), wx.hideLoading();
                });
            }, f.receiveCoupon = function (e) {
                var t = getApp().globalData, n = t.extConfigData;
                return u.promisify(wx.request)({
                    url: n.wxappDomainUrl + "appAjax/coupon.jsp?cmd=receiveCoupon",
                    data: {
                        wxappAid: n.wxappAid,
                        wxappId: n.wxappId,
                        openId: t.openId || "",
                        couponId: e.couponId,
                        from: 0
                    },
                    method: "GET",
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                }).then(function (e) {
                    var t = e.data;
                    return t.success ? (f.reportVisitorBehavior({
                        type: 30,
                        relationId: t.couponRecordId
                    }), t) : t;
                }).catch(function (e) {
                    console.error(e);
                });
            }, f.getCouponEntriesData = function (e) {
                var t = getApp().globalData, n = t.extConfigData;
                return u.promisify(wx.request)({
                    url: n.wxappDomainUrl + "appAjax/coupon.jsp?cmd=getCouponEntriesData",
                    data: {
                        wxappAid: n.wxappAid,
                        wxappId: n.wxappId,
                        openId: t.openId || "",
                        couponId: e,
                        from: 0
                    },
                    method: "GET",
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                }).then(function (e) {
                    var t = e.data;
                    return t.success || getCurrentPages()[getCurrentPages().length - 1].dialog.show({
                        title: "提示",
                        content: t.msg,
                        confirmButton: "确 定"
                    }), t;
                }).catch(function (e) {
                    console.error(e);
                });
            }, f.getCouponList = function () {
                var e = getApp().globalData, t = e.extConfigData;
                return u.promisify(wx.request)({
                    url: t.wxappDomainUrl + "appAjax/coupon.jsp?cmd=getCouponList",
                    data: {
                        wxappAid: t.wxappAid,
                        wxappId: t.wxappId,
                        openId: e.openId || ""
                    },
                    method: "GET",
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                }).then(function (e) {
                    var t = e.data;
                    if (!t.success) throw getCurrentPages()[getCurrentPages().length - 1].setData({
                        allCoupon: -2
                    }), Error(t.msg);
                    return t.couponList;
                }).catch(function (e) {
                    getCurrentPages()[getCurrentPages().length - 1].setData({
                        votesList: -2
                    }), console.error(e);
                });
            }, f.getLatestInformation = function (e) {
                var t = getApp().globalData, n = t.extConfigData;
                return u.promisify(wx.request)({
                    url: n.wxappDomainUrl + "appAjax/mypage.jsp?cmd=getLatestInfo",
                    data: {
                        wxappAid: n.wxappAid,
                        wxappId: n.wxappId,
                        openId: t.openId || "",
                        from: 0,
                        start: e
                    },
                    method: "GET",
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                }).then(function (e) {
                    if (e.data.success) return {
                        orderList: e.data.myPageOrderList
                    };
                    throw e.data ? Error(e.data.msg) : Error("response nothing");
                }).catch(function (e) {
                    console.error(e);
                });
            }, f.getMyForm = function (e) {
                var t = getApp().globalData, n = t.extConfigData;
                return u.promisify(wx.request)({
                    url: n.wxappDomainUrl + "appAjax/wxAppConnectionForm.jsp?cmd=getFormSubmitList",
                    data: {
                        wxappAid: n.wxappAid,
                        wxappId: n.wxappId,
                        openId: t.openId || "",
                        from: 0,
                        start: e
                    },
                    method: "GET",
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                }).then(function (e) {
                    if (e.data.success) return {
                        formList: e.data.formSubmitList,
                        total: e.data.totalSize
                    };
                    throw e.data ? Error(e.data.msg) : Error("response nothing");
                }).catch(function (e) {
                    console.error(e);
                });
            }, f.addSubscribeOrder = function (e) {
                var t = getApp().globalData, n = t.extConfigData, r = t.openId, o = e.serviceId, i = e.serviceType, a = e.price, s = e.that, l = e.callback, p = u.promisify(wx.request);
                return wx.showLoading({
                    title: "加载中",
                    mask: !0
                }), p({
                    url: n.wxappDomainUrl + "/appAjax/order.jsp?cmd=addSubscribeOrder",
                    data: {
                        wxappAid: n.wxappAid,
                        wxappId: n.wxappId,
                        aid: n.aid,
                        from: 0,
                        openId: r,
                        serviceId: o,
                        serviceType: i,
                        price: a,
                        payType: 1
                    },
                    method: "GET",
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                }).then(function (e) {
                    var t = e.data;
                    if (t.success) {
                        var r = t.id, a = t.wxpayInfo;
                        if (!a) return s.toast.showToast({
                            title: t.msg,
                            icon: "success",
                            duration: 2e3,
                            maxWidth: 260
                        }), 1 == i ? (f.logDog(7000279, 1), f.reportVisitorBehavior({
                            type: 31,
                            relationId: o
                        })) : 2 == i ? (f.logDog(7000279, 0), f.reportVisitorBehavior({
                            type: 32,
                            relationId: o
                        })) : 4 == i && (f.logDog(7000279, 6), f.reportVisitorBehavior({
                            type: 37,
                            relationId: o
                        })), void (l && l());
                        c.callbackObj.fail = function (e) {
                            "requestPayment:fail cancel" != e.errMsg && "requestPayment:cancel" != e.errMsg && s.toast.showToast({
                                title: "发起支付失败",
                                icon: "warning",
                                duration: 2e3
                            });
                            var t = {
                                url: {
                                    path: "/appAjax/order.jsp",
                                    cmd: "cancelSubscibeOrder"
                                },
                                data: {
                                    wxappAid: n.wxappAid,
                                    wxappId: n.wxappId,
                                    orderId: r
                                }
                            };
                            f.issueRequest(t);
                        }, c.callbackObj.success = function (e) {
                            var n = e.errMsg;
                            if ("requestPayment:ok" == n) return 1 == i ? (f.logDog(7000279, 3), f.reportVisitorBehavior({
                                type: 33,
                                relationId: o
                            })) : 2 == i ? (f.logDog(7000279, 2), f.reportVisitorBehavior({
                                type: 34,
                                relationId: o
                            })) : 4 == i && (f.logDog(7000279, 7), f.reportVisitorBehavior({
                                type: 38,
                                relationId: o
                            })), s.toast.showToast({
                                title: t.msg,
                                icon: "success",
                                duration: 2e3,
                                maxWidth: 260
                            }), l && l(), n;
                        }, c.requestPayment(a);
                    } else s.toast.showToast({
                        title: t.msg,
                        icon: "warning",
                        duration: 2e3,
                        maxWidth: 260
                    });
                }).catch(function (e) {
                    s.toast.showToast({
                        title: "提交订单失败,请联系小程序管理员",
                        icon: "warning",
                        duration: 2e3,
                        maxWidth: 260
                    });
                }).finally(function () {
                    wx.hideLoading();
                });
            }, f.getVideoInfo = function (e) {
                void 0 === e && console.error("id is undefined.");
                var t = getApp().globalData, n = t.extConfigData;
                return u.promisify(wx.request)({
                    url: n.wxappDomainUrl + "appAjax/media.jsp?cmd=getVideo",
                    data: {
                        wxappAid: n.wxappAid,
                        wxappId: n.wxappId,
                        openId: t.openId || "",
                        id: e,
                        form: 0
                    },
                    method: "GET",
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                }).then(function (e) {
                    var t = e.data;
                    if (!t.success) throw Error(t.msg);
                    return t;
                }).catch(function (e) {
                    console.error(e);
                });
            }, f.getProvince = u.promiseMemorize(a("appAjax/city.jsp?cmd=getProvinceInfo", "GET", {
                Lcid: 2052
            })), f.getCities = u.promiseMemorize(a("appAjax/city.jsp?cmd=cityGetChildren", "GET", {
                Lcid: 2052,
                type: "cityOrCounty"
            })), f.getCounty = u.promiseMemorize(a("appAjax/city.jsp?cmd=cityGetChildren", "GET", {
                Lcid: 2052,
                type: "cityOrCounty"
            })), f.getNoticTmpId = function (e) {
                var t = e.checkpointId, n = getApp().globalData.extConfigData;
                return u.promisify(wx.request)({
                    url: n.wxappDomainUrl + "appAjax/checkpoint.jsp?cmd=getNoticTmpId",
                    data: {
                        wxappAid: n.wxappAid,
                        wxappId: n.wxappId,
                        checkpointId: t
                    },
                    method: "GET",
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                }).then(function (e) {
                    return e.data;
                }).catch(function (e) {
                    console.error(e), wx.hideLoading();
                });
            }, e.exports = f;
        }).call(this, n("543d").default);
    },
    "85b1": function (e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.FROM = t.fromTypes = void 0;
        var r = {
            WEIXIN: 0,
            BAIDU: 1,
            TOUTIAO: 2,
            H5: 3
        };
        t.fromTypes = r;
        var o = 0;
        t.FROM = o, t.FROM = o = r.WEIXIN;
    },
    "928a": function (e, t, n) {
        (function (e) {
            function n(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e;
            }
            function r() {
                return f || (f = e.getSystemInfoSync());
            }
            function o() {
                var e = r();
                return /iphone|ios/i.test(e.platform);
            }
            function i(e, t, n) {
                var r = "".concat(e, "-").concat(t, "-").concat(n);
                return o() && (r = "".concat(e, "/").concat(t, "/").concat(n)), new Date(r);
            }
            function a() {
                var e = getCurrentPages();
                return e[e.length - 1];
            }
            function s(e) {
                var t = this;
                e && e.length && (e.forEach(function (e) {
                    t[e] = h[e].bind(t);
                }), console.log("bind timepick", this));
            }
            function c() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                if (0 === e.length) return e;
                var t = this.timepicker, n = 60 * new Date().getHours() + new Date().getMinutes(), r = this.config, o = (r.disableTime,
                    r.isDisableBeforeCurrentHour), i = t.curYear, a = t.curMonth, s = t.curDate, c = t.selectedDay[0], u = !0;
                return c && (u = c.year == i && c.month == a && c.day == s), e.forEach(function (e) {
                    if (e.forbidden = !1, o && u) {
                        var t = e.time.split(":")[0], r = parseInt(e.time.split(":")[1]);
                        e.forbidden = 60 * t + r <= n, console.log(e), console.log("forbidden", e.forbidden);
                    }
                }), e;
            }
            function u() {
                var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], n = this.timepicker.selectedDay[0], r = n.year, o = n.month, i = n.day, a = (this.config.disableTimePoint || {}).t, s = this.timepicker.lastFiveDaysList;
                return void 0 == a ? t : s[0].year == r && s[0].month == o && s[0].day == i && s[0].disable ? (t.forEach(function (e) {
                    e.forbidden = !0;
                }), t) : (a.forEach(function (n, a) {
                    var s = new Date(n.d);
                    if (s.getFullYear() == r && s.getMonth() + 1 == o && s.getDate() == i) if (0 == e.config.selectTimeInterval) {
                        for (var c = [], u = 0; u < 24; u++) c.push(u + ":00");
                        n.i.forEach(function (e) {
                            t.forEach(function (t) {
                                t.time == c[e] && (t.forbidden = !0);
                            });
                        });
                    } else 1 == e.config.selectTimeInterval ? n.i.forEach(function (e) {
                        t.forEach(function (t) {
                            t.time == p[e] && (t.forbidden = !0);
                        });
                    }) : 2 == e.config.selectTimeInterval && n.i.forEach(function (e) {
                        t.forEach(function (t) {
                            t.time == d[e] && (t.forbidden = !0);
                        });
                    });
                }), t);
            }
            var l, f;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isIos = o, t.default = t.jumpTo = t.disableTimepickerDays = t.disableTime = void 0;
            var p = ["0:00", "0:30", "1:00", "1:30", "2:00", "2:30", "3:00", "3:30", "4:00", "4:30", "5:00", "5:30", "6:00", "6:30", "7:00", "7:30", "8:00", "8:30", "9:00", "9:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00", "23:30"], d = ["0:00", "0:15", "0:30", "0:45", "1:00", "1:15", "1:30", "1:45", "2:00", "2:15", "2:30", "2:45", "3:00", "3:15", "3:30", "3:45", "4:00", "4:15", "4:30", "4:45", "5:00", "5:15", "5:30", "5:45", "6:00", "6:15", "6:30", "6:45", "7:00", "7:15", "7:30", "7:45", "8:00", "8:15", "8:30", "8:45", "9:00", "9:15", "9:30", "9:45", "10:00", "10:15", "10:30", "10:45", "11:00", "11:15", "11:30", "11:45", "12:00", "12:15", "12:30", "12:45", "13:00", "13:15", "13:30", "13:45", "14:00", "14:15", "14:30", "14:45", "15:00", "15:15", "15:30", "15:45", "16:00", "16:15", "16:30", "16:45", "17:00", "17:15", "17:30", "17:45", "18:00", "18:15", "18:30", "18:45", "19:00", "19:15", "19:30", "19:45", "20:00", "20:15", "20:30", "20:45", "21:00", "21:15", "21:30", "21:45", "22:00", "22:15", "22:30", "22:45", "23:00", "23:15", "23:30", "23:45"], h = (l = {
                renderDays: function (e, t, n) {
                    for (var r = this, o = [], a = 5, s = h.getThisMonthDays(e, t), c = s - n + 1, u = n; u <= s && 0 != a; u++) o.push({
                        day: u,
                        choosed: !1,
                        disable: !1,
                        year: e,
                        month: t
                    }), a--;
                    if (c < 5) for (var l = 1 * t + 1 > 12 ? 1 : 1 * t + 1, f = 1 * t + 1 > 12 ? 1 * e + 1 : e, p = 1; p < 5 - c; p++) o.push({
                        day: p,
                        choosed: !1,
                        disable: !1,
                        year: f,
                        month: l
                    });
                    var d = [], g = (n ? [{
                        day: n,
                        choosed: !0,
                        year: e,
                        month: t
                    }] : this.timepicker.selectedDay).map(function (e) {
                        return "".concat(e.year, "-").concat(e.month, "-").concat(e.day);
                    }), y = this.config.enableDays, v = (void 0 === y ? [] : y).map(function (e) {
                        return "".concat(e.year, "-").concat(e.month, "-").concat(e.day);
                    }), m = this.config.disableDays, b = (void 0 === m ? [] : m).map(function (e) {
                        return "".concat(e.year, "-").concat(e.month, "-").concat(e.day);
                    }), w = ["日", "一", "二", "三", "四", "五", "六"], x = new Date(), _ = i(x.getFullYear(), x.getMonth() + 1, x.getDate()).getTime();
                    this.timepicker.todayTimestamp = _, o.map(function (e) {
                        var t = "".concat(e.year, "-").concat(e.month, "-").concat(e.day);
                        -1 !== g.indexOf(t) && (e.choosed = !0), r.config.disableAll && (e.disable = !0);
                        var n = i(e.year, e.month, e.day).getDay();
                        !r.config.disableWeekend || 0 != n && 6 != n || (e.disable = !0), r.config.disableWeekend || 0 != n && 6 != n || (e.disable = !1),
                            r.config.openWeek && -1 == r.config.openWeek.indexOf(n) && !e.disable && (e.disable = !0),
                            -1 !== b.indexOf(t) && (e.disable = !0), -1 !== v.indexOf(t) && (e.disable = !1);
                        var o = i(e.year, e.month, e.day).getTime();
                        r.config.openGrade && r.config.gradeDay && _ + 864e5 * (r.config.gradeDay - 1) - o < 0 && !e.disable && (e.disable = !0),
                            d.push({
                                weeks: w[n],
                                choosed: e.choosed,
                                disable: e.disable,
                                year: e.year,
                                month: e.month,
                                day: e.day,
                                date: e.month + "/" + e.day
                            });
                    }), this.timepicker.lastFiveDaysList = d;
                },
                jumpToToday: function () {
                    var e = this.timepicker, t = new Date(), n = t.getFullYear(), r = t.getMonth() + 1, o = t.getDate(), a = i(n, r, o).getTime();
                    e.curYear = n, e.curMonth = r, e.curDate = o, e.todayTimestamp = a, e.selectedDay = [{
                        day: o,
                        choosed: !0,
                        year: n,
                        month: r
                    }], e.selectedTime = {
                        year: n,
                        month: r,
                        day: o
                    }, h.renderDays.call(this, n, r, o), h.renderTimepicker.call(this, n, r, o);
                },
                renderTimepicker: function (e, t, n) {
                    h.calculateDays.call(this, e, t, n);
                },
                calculateDays: function (e, t, n) {
                    var r = this.timepicker, o = n ? [{
                        day: n,
                        choosed: !0,
                        year: e,
                        month: t
                    }] : r.selectedDay, i = o.map(function (e) {
                        return "".concat(e.year, "-").concat(e.month, "-").concat(e.day);
                    }), a = (r || []).lastFiveDaysList;
                    a.forEach(function (e) {
                        var t = "".concat(e.year, "-").concat(e.month, "-").concat(e.day);
                        e.choosed = -1 !== i.indexOf(t);
                    }), r.lastFiveDaysList = a, n && (r.selectedDay = o);
                    var s = this.timepicker || [], c = s.allTimeList, u = s.selectedTime;
                    if (u) {
                        var l = !1;
                        o[0].year == u.year && o[0].month == u.month && o[0].day == u.day && (l = !0), c.forEach(function (e) {
                            e.choosed = l && u.time == e.time;
                        }), r.allTimeList = c;
                    }
                },
                getThisMonthDays: function (e, t) {
                    return new Date(e, t, 0).getDate();
                },
                getThisDayTime: function () {
                    var e, t, n = this.config, r = n.disableTime, o = n.selectTimeInterval, i = [];
                    o ? (e = 1 == o ? 48 : 96, t = 1 == o ? p : d) : e = 24;
                    for (var a = 0, s = e; a < s; a++) if (-1 == r.indexOf(a)) {
                        var c = {
                            time: o ? t[a] : a + ":00",
                            choosed: !1,
                            disable: !1,
                            forbidden: !1
                        };
                        i.push(c);
                    }
                    return i;
                },
                getDayOfWeek: function (e, t, n) {
                    return new Date(Date.UTC(e, t - 1, n)).getDay();
                },
                tapTimeItem: function (t) {
                    var n = t.currentTarget.dataset, r = (n.idx, n.forbidden), o = (n.disable, n.time);
                    if (r) e.showModal({
                        content: "该时间不可选！",
                        showCancel: !1,
                        success: function (e) {
                            e.confirm;
                        }
                    }); else {
                        var i = this.timepicker.selectedDay[0], a = i.year, s = i.month, c = i.day;
                        h.selectTime.call(this, a, s, c, o);
                    }
                },
                comfirmTime: function (t) {
                    var n = this.config.comfirmTime, r = this.timepicker, o = r.selectedTime;
                    if (r.selectedDay[0].disable) e.showModal({
                        content: "当日时间不可选！！",
                        showCancel: !1,
                        success: function (e) {
                            e.confirm;
                        }
                    }); else {
                        if (o && o.time) return h.setTimepickerStatus.call(this, !1), n && "function" == typeof n ? this.config.comfirmTime(o, t) : void 0;
                        e.showModal({
                            content: "请选择对应的时间！",
                            showCancel: !1,
                            success: function (e) {
                                e.confirm;
                            }
                        });
                    }
                },
                disableTime: function (e) {
                    var t = this.timepicker.allTimeList;
                    if ("[object Array]" !== Object.prototype.toString.call(e)) return console.error("disableTime 参数为数组");
                    var n = e;
                    t.map(function (e) {
                        var t = 1 * e.time.split(":")[0];
                        -1 !== n.indexOf(t) && (e.disable = !0);
                    }), this.timepicker.allTimeList = t, this.timepicker.disableTimeList = n;
                },
                disableTimepickerDays: function (e) {
                    var t = this.timepicker, n = t.selectedDay, r = t.disableDays, o = void 0 === r ? [] : r, a = t.lastFiveDaysList;
                    if ("[object Array]" !== Object.prototype.toString.call(e)) return console.error("disableDays 参数为数组");
                    var s = e.concat(o), l = s.map(function (e) {
                        return "".concat(e.year, "-").concat(e.month, "-").concat(e.day);
                    });
                    a.forEach(function (e) {
                        var t = "".concat(e.year, "-").concat(e.month, "-").concat(e.day);
                        -1 !== l.indexOf(t) && (e.disable = !0);
                        var r = n.map(function (e) {
                            return "".concat(e.year, "-").concat(e.month, "-").concat(e.day);
                        });
                        -1 !== r.indexOf(t) && -1 !== l.indexOf(t) && (n[r.indexOf(t)].disable = !0);
                    });
                    var f = (t || []).allTimeList, p = "".concat(n[0].year, "-").concat(n[0].month, "-").concat(n[0].day);
                    this.config.disableAll && f.forEach(function (e) {
                        return e.forbidden = !0;
                    });
                    var d = this.config.enableDays, h = (void 0 === d ? [] : d).map(function (e) {
                        return "".concat(e.year, "-").concat(e.month, "-").concat(e.day);
                    });
                    -1 !== h.indexOf(p) && (f = c.call(this, f)), -1 !== l.indexOf(p) && f.forEach(function (e) {
                        return e.forbidden = !0;
                    });
                    var g = i(n[0].year, n[0].month, n[0].day).getDay(), y = "".concat(n[0].year, "-").concat(n[0].month, "-").concat(n[0].day);
                    this.config.disableWeekend || 0 != g && 6 != g || (f = c.call(this, f)), this.config.openWeek && (-1 !== this.config.openWeek.indexOf(g) || -1 !== h.indexOf(y) ? f = c.call(this, f) : 0 !== this.config.openWeek.length && -1 !== this.config.openWeek.indexOf(g) || f.forEach(function (e) {
                        return e.forbidden = !0;
                    })), this.config.disableTimePoint && 0 == this.config.tiemOrDate && (f = u.call(this, f)),
                        t.lastFiveDaysList = a, t.disableDays = s, t.selectedDay = n, t.allTimeList = f;
                },
                tapDayItem: function (e) {
                    this.timepicker;
                    var t = e.currentTarget.dataset, n = (t.idx, t.year), r = t.month, o = t.day;
                    t.disable || g(n, r, o, !1);
                },
                selectTime: function (e, t, n, r) {
                    var o = this.timepicker, i = o || [], a = i.allTimeList, s = (this.config, a);
                    s.forEach(function (e) {
                        return e.choosed = r == e.time;
                    });
                    var c = {
                        year: e,
                        month: t,
                        day: n,
                        time: r
                    };
                    o.allTimeList = s, o.selectedTime = c;
                },
                setTimepickerStatus: function (e) {
                    this.timepicker.show = e;
                }
            }, n(l, "selectTime", function (e, t, n, r) {
                var o = this.timepicker, i = o || [], a = i.allTimeList, s = (this.config, a);
                s.map(function (e) {
                    r == e.time ? e.choosed = !0 : e.choosed = !1;
                });
                var c = {
                    year: e,
                    month: t,
                    day: n,
                    time: r
                };
                o.allTimeList = s, o.selectedTime = c;
            }), n(l, "initCalendarDay", function (e) {
                var t = this.timepicker, n = {};
                t.selectedDay[0];
                var r, o, i, a = t.selectedDay[0], s = a.year, c = a.month, u = a.day;
                if ("prev" == e.currentTarget.dataset.type) {
                    var l = h.getThisMonthDays(s, c - 1);
                    i = --u > 0 ? u : l, o = u > 0 || --c > 0 ? c : 12, r = c > 0 ? s : --s;
                } else {
                    var f = h.getThisMonthDays(s, c);
                    i = ++u > f ? 1 : u, o = u > f && ++c > 12 ? 1 : c, r = c > 12 ? ++s : s;
                }
                n.year = r, n.month = o, n.day = i, h.setTimepickerStatus.call(this, !1);
                var p = this.config.initCalendarDay;
                if (p && "function" == typeof p) return this.config.initCalendarDay(n);
            }), n(l, "catchTouch", function () { }), n(l, "closeTimepicker", function (e) {
                h.setTimepickerStatus.call(this, !1);
                var t = this.config;
                console.log("closeTimepicker", t.closeTimepicker), t.closeTimepicker && "function" == typeof t.closeTimepicker && t.closeTimepicker(e);
            }), l);
            t.disableTime = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t = a();
                h.disableTime.call(t, e);
            };
            t.disableTimepickerDays = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t = a();
                h.disableTimepickerDays.call(t, e);
            };
            var g = function (e, t, n, r) {
                var o = a(), i = o.timepicker, s = i.selectedDay;
                if (!s || +s[0].year != +e || +s[0].month != +t || +s[0].day != +n || r) {
                    if (e && t) {
                        if ("number" != typeof +e || "number" != typeof +t) return console.error("jump 函数年月日参数必须为数字");
                        var l = i.allTimeList, f = new Date();
                        return f.getFullYear(), f.getMonth(), f.getDate(), f.getHours(), i.curYear = e,
                            i.curMonth = t, i.selectedDay = [{
                                day: n,
                                choosed: !0,
                                year: e,
                                month: t
                            }], l = c.call(o, l), l = u.call(o, l), i.allTimeList = l, void o.$nextTick(function () {
                                if ("number" == typeof +n) return h.renderTimepicker.call(o, e, t, n);
                                h.renderTimepicker.call(o, e, t);
                            });
                    }
                    h.jumpToToday.call(o);
                }
            };
            t.jumpTo = g;
            t.default = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = ["tapTimeItem", "comfirmTime", "tapDayItem", "initCalendarDay", "catchTouch", "closeTimepicker"];
                if (e.context) {
                    var n = e.context;
                    a = function () {
                        return n;
                    }, e.context = null, delete e.context;
                }
                var r = a();
                h.setTimepickerStatus.call(r, !0), r.config = e;
                var o = getApp().globalData, i = o.isManage || !1;
                if (r.isManage = i, r.isCusTabBarShow = o.isCusTabBarShow, r.isIphoneX = o.isIphoneX,
                    r.timepicker.allTimeList = h.getThisDayTime.call(r, e.disableTime, e.isDisableBeforeCurrentHour),
                    r.timepicker.timeInterval = e.selectTimeInterval, e.defaultDay && "string" == typeof e.defaultDay) {
                    var c = e.defaultDay.split(" "), u = c[1], l = c[0].split("-");
                    if (l.length < 3) return console.error("配置 jumpTo 格式应为: 2018-4-2 或 2018-04-02");
                    h.selectTime.call(r, l[0], l[1], l[2], u), h.renderDays.call(r, l[0], l[1], l[2]),
                        g(+l[0], +l[1], +l[2], !0);
                } else h.jumpToToday.call(r);
                s.call(r, t);
            };
        }).call(this, n("543d").default);
    },
    "96cf": function (e, t) {
        !function (t) {
            function n(e, t, n, r) {
                var i = t && t.prototype instanceof o ? t : o, a = Object.create(i.prototype), s = new h(r || []);
                return a._invoke = l(e, n, s), a;
            }
            function r(e, t, n) {
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
            function o() { }
            function i() { }
            function s() { }
            function c(e) {
                ["next", "throw", "return"].forEach(function (t) {
                    e[t] = function (e) {
                        return this._invoke(t, e);
                    };
                });
            }
            function u(e) {
                function t(n, o, i, s) {
                    var c = r(e[n], e, o);
                    if ("throw" !== c.type) {
                        var u = c.arg, l = u.value;
                        return l && "object" === (void 0 === l ? "undefined" : a(l)) && b.call(l, "__await") ? Promise.resolve(l.__await).then(function (e) {
                            t("next", e, i, s);
                        }, function (e) {
                            t("throw", e, i, s);
                        }) : Promise.resolve(l).then(function (e) {
                            u.value = e, i(u);
                        }, function (e) {
                            return t("throw", e, i, s);
                        });
                    }
                    s(c.arg);
                }
                var n;
                this._invoke = function (e, r) {
                    function o() {
                        return new Promise(function (n, o) {
                            t(e, r, n, o);
                        });
                    }
                    return n = n ? n.then(o, o) : o();
                };
            }
            function l(e, t, n) {
                var o = O;
                return function (i, a) {
                    if (o === D) throw new Error("Generator is already running");
                    if (o === k) {
                        if ("throw" === i) throw a;
                        return y();
                    }
                    for (n.method = i, n.arg = a; ;) {
                        var s = n.delegate;
                        if (s) {
                            var c = f(s, n);
                            if (c) {
                                if (c === T) continue;
                                return c;
                            }
                        }
                        if ("next" === n.method) n.sent = n._sent = n.arg; else if ("throw" === n.method) {
                            if (o === O) throw o = k, n.arg;
                            n.dispatchException(n.arg);
                        } else "return" === n.method && n.abrupt("return", n.arg);
                        o = D;
                        var u = r(e, t, n);
                        if ("normal" === u.type) {
                            if (o = n.done ? k : C, u.arg === T) continue;
                            return {
                                value: u.arg,
                                done: n.done
                            };
                        }
                        "throw" === u.type && (o = k, n.method = "throw", n.arg = u.arg);
                    }
                };
            }
            function f(e, t) {
                var n = e.iterator[t.method];
                if (n === v) {
                    if (t.delegate = null, "throw" === t.method) {
                        if (e.iterator.return && (t.method = "return", t.arg = v, f(e, t), "throw" === t.method)) return T;
                        t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method");
                    }
                    return T;
                }
                var o = r(n, e.iterator, t.arg);
                if ("throw" === o.type) return t.method = "throw", t.arg = o.arg, t.delegate = null,
                    T;
                var i = o.arg;
                return i ? i.done ? (t[e.resultName] = i.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next",
                    t.arg = v), t.delegate = null, T) : i : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"),
                        t.delegate = null, T);
            }
            function p(e) {
                var t = {
                    tryLoc: e[0]
                };
                1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]),
                    this.tryEntries.push(t);
            }
            function d(e) {
                var t = e.completion || {};
                t.type = "normal", delete t.arg, e.completion = t;
            }
            function h(e) {
                this.tryEntries = [{
                    tryLoc: "root"
                }], e.forEach(p, this), this.reset(!0);
            }
            function g(e) {
                if (e) {
                    var t = e[x];
                    if (t) return t.call(e);
                    if ("function" == typeof e.next) return e;
                    if (!isNaN(e.length)) {
                        var n = -1, r = function t() {
                            for (; ++n < e.length;) if (b.call(e, n)) return t.value = e[n], t.done = !1, t;
                            return t.value = v, t.done = !0, t;
                        };
                        return r.next = r;
                    }
                }
                return {
                    next: y
                };
            }
            function y() {
                return {
                    value: v,
                    done: !0
                };
            }
            var v, m = Object.prototype, b = m.hasOwnProperty, w = "function" == typeof Symbol ? Symbol : {}, x = w.iterator || "@@iterator", _ = w.asyncIterator || "@@asyncIterator", I = w.toStringTag || "@@toStringTag", A = "object" === (void 0 === e ? "undefined" : a(e)), S = t.regeneratorRuntime;
            if (S) A && (e.exports = S); else {
                (S = t.regeneratorRuntime = A ? e.exports : {}).wrap = n;
                var O = "suspendedStart", C = "suspendedYield", D = "executing", k = "completed", T = {}, E = {};
                E[x] = function () {
                    return this;
                };
                var j = Object.getPrototypeOf, P = j && j(j(g([])));
                P && P !== m && b.call(P, x) && (E = P);
                var L = s.prototype = o.prototype = Object.create(E);
                i.prototype = L.constructor = s, s.constructor = i, s[I] = i.displayName = "GeneratorFunction",
                    S.isGeneratorFunction = function (e) {
                        var t = "function" == typeof e && e.constructor;
                        return !!t && (t === i || "GeneratorFunction" === (t.displayName || t.name));
                    }, S.mark = function (e) {
                        return Object.setPrototypeOf ? Object.setPrototypeOf(e, s) : (e.__proto__ = s, I in e || (e[I] = "GeneratorFunction")),
                            e.prototype = Object.create(L), e;
                    }, S.awrap = function (e) {
                        return {
                            __await: e
                        };
                    }, c(u.prototype), u.prototype[_] = function () {
                        return this;
                    }, S.AsyncIterator = u, S.async = function (e, t, r, o) {
                        var i = new u(n(e, t, r, o));
                        return S.isGeneratorFunction(t) ? i : i.next().then(function (e) {
                            return e.done ? e.value : i.next();
                        });
                    }, c(L), L[I] = "Generator", L[x] = function () {
                        return this;
                    }, L.toString = function () {
                        return "[object Generator]";
                    }, S.keys = function (e) {
                        var t = [];
                        for (var n in e) t.push(n);
                        return t.reverse(), function n() {
                            for (; t.length;) {
                                var r = t.pop();
                                if (r in e) return n.value = r, n.done = !1, n;
                            }
                            return n.done = !0, n;
                        };
                    }, S.values = g, h.prototype = {
                        constructor: h,
                        reset: function (e) {
                            if (this.prev = 0, this.next = 0, this.sent = this._sent = v, this.done = !1, this.delegate = null,
                                this.method = "next", this.arg = v, this.tryEntries.forEach(d), !e) for (var t in this) "t" === t.charAt(0) && b.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = v);
                        },
                        stop: function () {
                            this.done = !0;
                            var e = this.tryEntries[0].completion;
                            if ("throw" === e.type) throw e.arg;
                            return this.rval;
                        },
                        dispatchException: function (e) {
                            function t(t, r) {
                                return i.type = "throw", i.arg = e, n.next = t, r && (n.method = "next", n.arg = v),
                                    !!r;
                            }
                            if (this.done) throw e;
                            for (var n = this, r = this.tryEntries.length - 1; r >= 0; --r) {
                                var o = this.tryEntries[r], i = o.completion;
                                if ("root" === o.tryLoc) return t("end");
                                if (o.tryLoc <= this.prev) {
                                    var a = b.call(o, "catchLoc"), s = b.call(o, "finallyLoc");
                                    if (a && s) {
                                        if (this.prev < o.catchLoc) return t(o.catchLoc, !0);
                                        if (this.prev < o.finallyLoc) return t(o.finallyLoc);
                                    } else if (a) {
                                        if (this.prev < o.catchLoc) return t(o.catchLoc, !0);
                                    } else {
                                        if (!s) throw new Error("try statement without catch or finally");
                                        if (this.prev < o.finallyLoc) return t(o.finallyLoc);
                                    }
                                }
                            }
                        },
                        abrupt: function (e, t) {
                            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                                var r = this.tryEntries[n];
                                if (r.tryLoc <= this.prev && b.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                                    var o = r;
                                    break;
                                }
                            }
                            o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                            var i = o ? o.completion : {};
                            return i.type = e, i.arg = t, o ? (this.method = "next", this.next = o.finallyLoc,
                                T) : this.complete(i);
                        },
                        complete: function (e, t) {
                            if ("throw" === e.type) throw e.arg;
                            return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg,
                                this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t),
                                T;
                        },
                        finish: function (e) {
                            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                var n = this.tryEntries[t];
                                if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), d(n), T;
                            }
                        },
                        catch: function (e) {
                            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                var n = this.tryEntries[t];
                                if (n.tryLoc === e) {
                                    var r = n.completion;
                                    if ("throw" === r.type) {
                                        var o = r.arg;
                                        d(n);
                                    }
                                    return o;
                                }
                            }
                            throw new Error("illegal catch attempt");
                        },
                        delegateYield: function (e, t, n) {
                            return this.delegate = {
                                iterator: g(e),
                                resultName: t,
                                nextLoc: n
                            }, "next" === this.method && (this.arg = v), T;
                        }
                    };
            }
        }(function () {
            return this || "object" === ("undefined" == typeof self ? "undefined" : a(self)) && self;
        }() || Function("return this")());
    },
    a34a: function (e, t, n) {
        e.exports = n("bbdd");
    },
    a422: function (e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.iOSVirtualPayTypes = t.collectSupportTargetTypes = void 0;
        var r = {
            NEWS: 0,
            AUDIO: 1,
            VEDIO: 2,
            CHECKPOINT: 3
        };
        t.collectSupportTargetTypes = r;
        var o = {
            CLOSE: 0,
            OPEN: 1,
            FREE: 2
        };
        t.iOSVirtualPayTypes = o;
    },
    b101: function (e, t) {
        function n(e) {
            for (var t = {}, n = e.split(","), r = n.length; r--;) t[n[r]] = !0;
            return t;
        }
        var r = wx.canIUse("editor");
        e.exports = {
            filter: function (e, t) {
                "pre" == e.name && t.bubble(), "iframe" == e.name && (t.bubble(), e.attrs.vid = function () {
                    var e, t = arguments.length;
                    if (2 !== t && 3 !== t) throw "必须为两个或者三个参数";
                    if (3 === t) {
                        var n = Array.prototype.slice.call(arguments), r = n[0], o = n[1], i = n[2];
                        e = r;
                    } else {
                        var a = Array.prototype.slice.call(arguments);
                        o = a[0], i = a[1];
                    }
                    if (!Array.isArray(o)) throw "参数有误，取值的keys必须为数组";
                    try {
                        o.forEach(function (e) {
                            i = i[e];
                        });
                    } catch (t) {
                        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                        return e;
                    }
                    return i;
                }([1], e.attrs.src.match(/https:\/\/v\.qq\.com.*vid=(\w*)/)) || "");
            },
            highlight: null,
            onText: null,
            blankChar: n(" , ,\t,\r,\n,\f"),
            blockTags: n("address,article,aside,body,caption,center,cite,footer,header,html,nav,section" + (r ? "" : ",pre")),
            ignoreTags: n("area,base,basefont,canvas,command,frame,input,isindex,keygen,link,map,meta,param,script,source,style,svg,textarea,title,track,use,wbr" + (r ? ",rp" : "")),
            richOnlyTags: n("a,colgroup,fieldset,legend,picture,table" + (r ? ",bdi,bdo,caption,rt,ruby" : "")),
            selfClosingTags: n("area,base,basefont,br,col,circle,ellipse,embed,frame,hr,img,input,isindex,keygen,line,link,meta,param,path,polygon,rect,source,track,use,wbr"),
            trustAttrs: n("vid, align,alt,app-id,author,autoplay,border,cellpadding,cellspacing,class,color,colspan,controls,data-src,dir,face,height,href,id,ignore,loop,media,muted,name,path,poster,rowspan,size,span,src,start,style,type,unit-id,width,xmlns,app_jinfo"),
            boolAttrs: n("autoplay,controls,ignore,loop,muted"),
            trustTags: n("a,abbr,ad,audio,b,blockquote,br,code,col,colgroup,dd,del,dl,dt,div,em,fieldset,h1,h2,h3,h4,h5,h6,hr,i,img,ins,label,legend,li,ol,p,q,source,span,strong,sub,sup,table,tbody,td,tfoot,th,thead,tr,title,ul,video" + (r ? ",bdi,bdo,caption,pre,rt,ruby" : "") + ",embed,iframe"),
            userAgentStyles: {
                address: "font-style:italic",
                big: "display:inline;font-size:1.2em",
                blockquote: "background-color:#f6f6f6;border-left:3px solid #dbdbdb;color:#6c6c6c;padding:5px 0 5px 10px",
                caption: "display:table-caption;text-align:center",
                center: "text-align:center",
                cite: "font-style:italic",
                dd: "margin-left:40px",
                img: "max-width:100%!important",
                mark: "background-color:yellow",
                picture: "max-width:100%",
                pre: "font-family:monospace;white-space:pre;overflow:scroll",
                s: "text-decoration:line-through",
                small: "display:inline;font-size:0.8em",
                u: "text-decoration:underline"
            }
        };
    },
    bbdd: function (e, t, n) {
        var r = function () {
            return this || "object" === ("undefined" == typeof self ? "undefined" : a(self)) && self;
        }() || Function("return this")(), o = r.regeneratorRuntime && Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime") >= 0, i = o && r.regeneratorRuntime;
        if (r.regeneratorRuntime = void 0, e.exports = n("96cf"), o) r.regeneratorRuntime = i; else try {
            delete r.regeneratorRuntime;
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            r.regeneratorRuntime = void 0;
        }
    },
    c8ba: function (e, t) {
        var n;
        n = function () {
            return this;
        }();
        try {
            n = n || new Function("return this")();
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            "object" === ("undefined" == typeof window ? "undefined" : a(window)) && (n = window);
        }
        e.exports = n;
    },
    ca00: function (e, t, n) {
        (function (t) {
            function r(e) {
                return (r = "function" == typeof Symbol && "symbol" === a(Symbol.iterator) ? function (e) {
                    return void 0 === e ? "undefined" : a(e);
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : a(e);
                })(e);
            }
            var o = function (e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }(n("66fd")), i = {
                formatTime: function (e) {
                    var t = e.getFullYear(), n = e.getMonth() + 1, r = e.getDate(), o = e.getHours(), i = e.getMinutes(), a = e.getSeconds();
                    return [t, n, r].map(s).join("/") + " " + [o, i, a].map(s).join(":");
                }
            }, s = function (e) {
                return (e = e.toString())[1] ? e : "0" + e;
            };
            i.isFun = function (e) {
                if ("undefined" != typeof window && e === window.alert) return !0;
                var t = Object.prototype.toString.call(e);
                return "[object Function]" === t || "[object GeneratorFunction]" === t || "[object AsyncFunction]" === t;
            };
            var c = function (e) {
                return "[object Object]" === Object.prototype.toString.call(e) && e.constructor === Object && !e.nodeType && !e.setInterval;
            }, u = Array.isArray || function (e) {
                return "[object Array]" === Object.prototype.toString.call(e);
            };
            i.extend = function e() {
                var t, n, o, a, s, l, f = arguments[0] || {}, p = 1, d = arguments.length, h = !1;
                for ("boolean" == typeof f && (h = f, f = arguments[1] || {}, p = 2), "object" === r(f) || i.isFun(f) || (f = {}); p < d; p++) if (null != (t = arguments[p])) for (n in "string" == typeof t && (t = t.split("")),
                    t) o = f[n], f !== (a = t[n]) && (h && a && (c(a) || (s = u(a))) ? (s ? (s = !1,
                        l = o && u(o) ? o : []) : l = o && c(o) ? o : {}, f[n] = e(h, l, a)) : void 0 !== a && (f[n] = a));
                return f;
            }, i.compareVersion = function (e, t) {
                e = e.split("."), t = t.split(".");
                for (var n = Math.max(e.length, t.length); e.length < n;) e.push("0");
                for (; t.length < n;) t.push("0");
                for (var r = 0; r < n; r++) {
                    var o = parseInt(e[r]), i = parseInt(t[r]);
                    if (o > i) return 1;
                    if (o < i) return -1;
                }
                return 0;
            }, i.promisify = function (e, t) {
                return function (n) {
                    for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) o[i - 1] = arguments[i];
                    return new Promise(function (r, i) {
                        e.call.apply(e, [t, Object.assign({}, n, {
                            success: r,
                            fail: i
                        })].concat(o));
                    });
                };
            }, i.hexToRgba = function (e, t) {
                if (e) return "rgba(" + parseInt("0x" + e.slice(1, 3)) + "," + parseInt("0x" + e.slice(3, 5)) + "," + parseInt("0x" + e.slice(5, 7)) + "," + t + ")";
            }, i.getGradientColor = function (e, t) {
                if (e) {
                    -1 !== e.indexOf("#") && (e = i.hexToRgba(e, 1));
                    var n = e.split(","), r = [];
                    r.push(n[0].substr(5)), r.push(n[1].substr(0)), r.push(n[2].substr(0)), r.push(n[3].substr(0, n[3].length - 1));
                    for (var o = 0; o < 3; o++) r[o] = Math.floor((255 - parseInt(r[o])) * t + parseInt(r[o]));
                    return "rgba(" + r[0] + "," + r[1] + "," + r[2] + "," + r[3] + ")";
                }
            }, i.RgbtoHex = function (e) {
                if (/#/g.test(e)) return e;
                e = e.replace(/[rgba\(\)]/g, "").split(",");
                for (var t, n = ["#"], r = 0; r < 3; r++) 1 === (t = parseInt(e[r]).toString(16)).length && (t = "0" + t),
                    n.push(t);
                return n.join("");
            }, i.isUserInfoEmpty = function () {
                var e = getApp().globalData;
                return !e.userInfo || !e.userInfo.nickName;
            }, i.isLogin = function () {
                return !!getApp().globalData.openId;
            }, i.debounce = function (e, t) {
                var n;
                return function () {
                    for (var r = this, o = arguments.length, i = new Array(o), a = 0; a < o; a++) i[a] = arguments[a];
                    n && clearTimeout(n), n = setTimeout(function () {
                        e.apply(r, i);
                    }, t);
                };
            };
            var l = ["KNWBZ-TWB6O-5DJWC-SPHN5-NQIT5-V7FHU"];
            i.getMapKey = function () {
                return l[0];
            };
            var f = ["TJ7BZ-JZKWD-XZ44I-HEYDM-RDJJJ-WHFVL", "NVRBZ-TPNLP-I2VDB-VTPCD-7DM7S-QOBJ7", "AGWBZ-M6YLD-TLZ44-P25FD-UADE5-7EB57"];
            i.getKey = function (e) {
                var t = getApp().globalData.isOem;
                return e ? f[2] : t ? f[1] : f[0];
            };
            var p = new o.default();
            i.getGlobalEventBus = function () {
                return p;
            }, i.getPageEventBus = function (e) {
                var t = e.eventBus;
                return t || (t = e.eventBus = new o.default()), t;
            }, i.getCurrentPageEventBus = function () {
                var e = getCurrentPages();
                return i.getPageEventBus(e[e.length - 1]);
            }, i.memorize = function (e) {
                var t = {};
                return function () {
                    for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                    var i = JSON.stringify(r);
                    return t[i] || (t[i] = e.apply(e, r));
                };
            }, i.promiseMemorize = function (e) {
                var t = {};
                return function () {
                    for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                    var i = JSON.stringify(r);
                    if (t[i]) return Promise.resolve(t[i]);
                    var a = e.apply(void 0, r);
                    return t[i] = a, a.then(function (e) {
                        return t[i] = e, e;
                    });
                };
            }, i.getQueryString = function (e, t) {
                if (-1 != e.indexOf("?")) {
                    for (var n = {}, r = e.split("?")[1].split("&"), o = 0; o < r.length; o++) n[r[o].split("=")[0]] = r[o].split("=")[1];
                    return t ? n[t] : n;
                }
            }, i.mergeSamePromiseFunc = function (e) {
                var t;
                return function () {
                    return t || (t = e.apply(void 0, arguments).finally(function () {
                        t = null;
                    }));
                };
            }, i.getExtConfig = function () {
                var e = (getApp() || {}).globalData;
                if (e && e.extConfigData && e.extConfigData.aid) return e.extConfigData;
                var n = {};
                try {
                    n = t.getExtConfigSync();
                } catch (e) { }
                return n || {};
            }, i.trim = function (e) {
                return e.replace(/(^\s*)|(\s*$)/g, "");
            }, e.exports = i;
        }).call(this, n("543d").default);
    },
    cd02: function (e, t, n) {
        function r(e) {
            return (r = "function" == typeof Symbol && "symbol" === a(Symbol.iterator) ? function (e) {
                return void 0 === e ? "undefined" : a(e);
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : a(e);
            })(e);
        }
        var o = n("7c15"), i = "http://m.fff.com/";
        wx.getExtConfig && wx.getExtConfig({
            success: function (e) {
                var t = e.extConfig.wxappAppId;
                "wxc761ccd5c7c182f9" == t ? i = "http://m.fff.com/" : "wx3e3322226cae5bb7" == t && (i = "https://m.fkw.com/");
            }
        });
        var s = function (e) {
            var t = e.url;
            t = (getApp().globalData, i) + t + (getApp().globalData.debug || !1 ? (t.includes("?") ? "&" : "?") + "_FaiDebug=true" : ""),
                e.url = t, c(e, 0);
        }, c = function e(t, n) {
            var r = t.header, o = void 0 === r ? {} : r, i = o.Cookie, a = void 0 === i ? "" : i, s = wx.getStorageInfoSync(), c = getApp().globalData._FSESSIONID || wx.getStorageSync("_FSESSIONID");
            (s.keys || []).forEach(function (e, t) {
                var n = u(e);
                n && (a += ";" + e + "=" + n);
            });
            var l = {
                Cookie: (a += "; _FSESSIONID=" + c) || "",
                "content-type": "application/x-www-form-urlencoded"
            };
            Object.assign(l, o), wx.request({
                url: t.url || "",
                data: t.data || {},
                header: l,
                method: t.method = "POST",
                dataType: t.dataType = "json",
                success: function (e) {
                    var n = e.data;
                    n.success, n.login, t.success && t.success(e);
                },
                fail: function (r) {
                    x("request err!count=".concat(n, ";res=").concat(JSON.stringify(r))), n > 2 ? t.fail && t.fail(r) : setTimeout(function () {
                        e(t, ++n);
                    }, 2e3 * (n + 1));
                },
                complete: function (r) {
                    var o = r.statusCode;
                    if (o && 200 != o) return x("request statusCode err!count=".concat(n, ";statusCode=").concat(o)),
                        n > 2 ? void (t.complete && t.complete(r)) : void setTimeout(function () {
                            e(t, ++n);
                        }, 2e3 * (n + 1));
                    200 == o && t.complete && t.complete(r), !o && n > 2 && t.complete && t.complete(r);
                }
            });
        }, u = function (e) {
            var t = wx.getStorageSync(e);
            if (!t) return null;
            if (!t.isCookie) return null;
            if (void 0 != r(t.expires)) {
                var n = new Date(t.expires);
                if (n && new Date().getTime() >= n.getTime()) return wx.removeStorageSync(e), null;
            }
            return t.value;
        }, l = function () {
            return new Promise(function (e, t) {
                wx.login({
                    success: function (t) {
                        getApp().globalData.code = t.code, e(t.code);
                    },
                    fail: function (e) {
                        t(e);
                    }
                });
            });
        }, f = function () {
            return getApp().globalData.code ? new Promise(function (e, t) {
                wx.checkSession({
                    success: function () {
                        e(getApp().globalData.code);
                    },
                    fail: function () {
                        wx.login({
                            success: function (t) {
                                getApp().globalData.code = t.code, e(t.code);
                            },
                            fail: function (e) {
                                t(e);
                            }
                        });
                    }
                });
            }) : l();
        }, p = function () {
            var e;
            return f().then(function (t) {
                return new Promise(function (n, r) {
                    (e = t) ? wx.getSetting({
                        success: function (e) {
                            n(e);
                        },
                        fail: function (e) {
                            r(e);
                        }
                    }) : r(null);
                });
            }).then(function (t) {
                return new Promise(function (n, r) {
                    t.authSetting["scope.userInfo"] ? wx.getUserInfo({
                        success: function (t) {
                            n({
                                code: e,
                                iv: t.iv,
                                encryptedData: t.encryptedData,
                                professionTpye: getApp().globalData.professionTpye
                            });
                        },
                        fail: function (e) {
                            r(e);
                        }
                    }) : n({
                        code: e,
                        professionTpye: getApp().globalData.professionTpye
                    });
                });
            }).then(function (e) {
                return new Promise(function (t, n) {
                    s({
                        url: "ajax/wxhome_h.jsp?cmd=wxLoginInfo",
                        data: e,
                        success: function (e) {
                            e.data && e.data.success ? (g(e.data), t(e.data)) : n(e);
                        },
                        fail: function (e) {
                            n(e);
                        }
                    });
                });
            }).catch(function (e) {
                x(e);
            });
        }, d = function (e) {
            return new Promise(function (t, n) {
                e && o.getLoginWXApp(e.aid, e.sessionId).then(function (n) {
                    if (n) {
                        var r = Object.assign(e, n);
                        getApp().globalData.fkUserInfo = {
                            wxappAid: n.wxappAid,
                            wxappId: n.wxappId,
                            isNewAdd: n.isNewAdd
                        }, t(r);
                    }
                });
            }).then(function (e) {
                return new Promise(function (t, n) {
                    e.success && (t(e), e.isNewAdd || wx.reLaunch({
                        url: "/pages/index/index?scene=" + e.wxappAid + "_" + e.wxappId + "&isManage=true&hasCopy=1"
                    }));
                });
            }).catch(function (e) {
                x(e);
            });
        }, h = function (e, t) {
            return new Promise(function (n, r) {
                "" == wx.getStorageSync("_UNIONID") || null == wx.getStorageSync("_UNIONID") || "undefined" == wx.getStorageSync("_UNIONID") ? s({
                    url: "ajax/wxhome_h.jsp?cmd=getUnionId",
                    data: {
                        iv: t,
                        encryptedData: e,
                        sessionKey: wx.getStorageSync("_SESSION_KEY_MD5")
                    },
                    success: function (e) {
                        if (e.data && e.data.success) {
                            var t = e.data;
                            n({
                                unionid: t.unionid,
                                exist: t.existedUnionId
                            });
                        } else r(e);
                    },
                    fail: function (e) {
                        r(e);
                    }
                }) : n({
                    unionid: wx.getStorageSync("_UNIONID"),
                    exist: wx.getStorageSync("_EXIST_UNOINID")
                });
            });
        }, g = function (e) {
            getApp().globalData, getApp().globalData._OPENID = e.openid, getApp().globalData._UNIONID = e.unionid,
                getApp().globalData._SESSION_KEY_MD5 = e.session_key, wx.setStorageSync("_OPENID", e.openid),
                wx.setStorageSync("_SESSION_KEY_MD5", e.session_key), wx.setStorageSync("_EXIST_UNOINID", e.existedUnionId),
                "" != e.unionid && null != e.unionid && "undefined" != e.unionid && wx.setStorageSync("_UNIONID", e.unionid);
        }, y = function (e) {
            getApp().globalData, getApp().globalData._LOGINTYPE = e.loginType, getApp().globalData._FSESSIONID = e.sessionId,
                getApp().globalData._TOKEN = e.token, wx.setStorage({
                    key: "_FSESSIONID",
                    data: e.sessionId
                }), wx.setStorage({
                    key: "_TOKEN",
                    data: e.token
                }), wx.setStorage({
                    key: "_LOGINTYPE",
                    data: e.loginType
                }), wx.setStorage({
                    key: "_AID",
                    data: e.aid
                }), "wxLogin" == e.loginType && wx.setStorage({
                    key: "_EXIST_UNOINID",
                    data: !0
                }), v();
        }, v = function () {
            var e = getApp().globalData.userInfo;
            if (e) {
                var t = e.avatarUrl, n = e.nickName;
                s({
                    url: "ajax/wxhome_h.jsp?cmd=updatePortraitAndName",
                    data: {
                        avatarUrl: t,
                        nickName: n
                    },
                    success: function (e) {
                        e.data;
                    }
                });
            }
        }, m = function () {
            wx.removeStorage({
                key: "_FSESSIONID"
            }), wx.removeStorage({
                key: "_TOKEN"
            }), wx.removeStorage({
                key: "_LOGINTYPE"
            });
        }, b = {
            SITE: 0,
            HD: 1,
            FLYER: 2,
            WXAST: 3,
            PROGRAM: 4,
            HOME: 5,
            KTU: 6
        }, w = function (e, t) {
            s({
                method: "GET",
                url: "ajax/wxhome_h.jsp?cmd=logDog&dogId=" + e + "&dogSrc=" + t
            });
        }, x = function (e) {
            console.error(e);
        };
        e.exports = {
            request: s,
            getCookie: u,
            setCookie: function (e, t, n) {
                if (n = parseInt(n), !isNaN(n) && n <= 0) wx.removeStorage({
                    key: e,
                    success: function (e) { }
                }); else {
                    var r = {
                        value: t
                    };
                    if (!isNaN(n) && n > 0) {
                        var o = new Date(), i = new Date(o.getTime() + n);
                        r.expires = i.toGMTString();
                    }
                    r.isCookie = !0, wx.setStorage({
                        key: e,
                        data: r
                    });
                }
            },
            isMobile: function (e) {
                return /^1[3456789]\d{9}$/.test(e);
            },
            check4Code: function (e) {
                return !!/\d{4}$/.test(e);
            },
            getInitCode: l,
            getCode: f,
            wxLoginInfo: p,
            wxLogin: function () {
                return p().then(function (e) {
                    return new Promise(function (t, n) {
                        wx.showLoading({
                            title: "自动登录中"
                        }), s({
                            url: "ajax/wxhome_h.jsp?cmd=wxAutoLogin",
                            data: e,
                            success: function (e) {
                                e.data && e.data.success ? (y(e.data), t(e.data)) : (m(), t(e.data)), wx.hideLoading();
                            },
                            fail: function (e) {
                                n(e);
                            }
                        });
                    });
                }).then(function (e) {
                    return d(e);
                }).catch(function (e) {
                    x(e);
                });
            },
            getLoginWXApp: d,
            getUnionId: function (e, t) {
                return "" == wx.getStorageSync("_SESSION_KEY_MD5") || null == wx.getStorageSync("_SESSION_KEY_MD5") || "undefined" == wx.getStorageSync("_SESSION_KEY_MD5") ? p().then(function (n) {
                    return h(e, t);
                }).catch(function (e) {
                    x(e);
                }) : h(e, t);
            },
            loginSuc: y,
            logoutSuc: m,
            Biz: b,
            logDog: w,
            log: x,
            logDogType: function (e) {
                var t = parseInt(e), n = (getApp().globalData, getApp().globalData.professionTpye);
                n == b.SITE ? t += 700 : n == b.HD ? t += 720 : n == b.FLYER ? t += 740 : n == b.PROGRAM && (t += 760),
                    w(4000087, t);
            },
            getBizName: function () {
                var e = getApp().globalData.professionTpye;
                return e == b.SITE ? "凡科建站" : e == b.HD ? "凡科互动" : e == b.PROGRAM ? "轻站小程序" : e == b.FLYER ? "微传单" : e == b.WXAST ? "公众号助手" : e == b.KTU ? "凡科快图" : "凡科";
            }
        };
    },
    cf45: function (e, t, n) {
        (function (e) {
            function r(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })), n.push.apply(n, r);
                }
                return n;
            }
            function o(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? r(Object(n), !0).forEach(function (t) {
                        i(e, t, n[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach(function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                    });
                }
                return e;
            }
            function i(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e;
            }
            function a(e, t) {
                return f(e) || l(e, t) || c(e, t) || s();
            }
            function s() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            function c(e, t) {
                if (e) {
                    if ("string" == typeof e) return u(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? u(e, t) : void 0;
                }
            }
            function u(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r;
            }
            function l(e, t) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                    var n = [], r = !0, o = !1, i = void 0;
                    try {
                        for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value),
                            !t || n.length !== t); r = !0);
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        o = !0, i = e;
                    } finally {
                        try {
                            r || null == s.return || s.return();
                        } finally {
                            if (o) throw i;
                        }
                    }
                    return n;
                }
            }
            function f(e) {
                if (Array.isArray(e)) return e;
            }
            function p(t) {
                function n() {
                    e.makePhoneCall({
                        phoneNumber: t,
                        success: function () {
                            (0, v.reportVisitorBehavior)({
                                type: 23
                            });
                        },
                        fail: function (e) {
                            console.log(e);
                        }
                    });
                }
                t && d(function () {
                    n();
                }, {
                    sceneKey: m.default.CALL
                });
            }
            function d(e, t) {
                var n = getApp().globalData.wxappInfo, r = t.sceneKey;
                if (r) {
                    var o = getCurrentPages(), i = o[o.length - 1].selectComponent("#authPopup");
                    i ? (t.baseAuth && (n.baseAuthInfo[r] = {
                        authType: t.baseAuth.type,
                        checked: !0
                    }), t.phoneAuth && (n.phoneAuthInfo[r] = t.phoneAuth), i.$vm._popupTemp = {
                        params: t,
                        next: e
                    }, i.$vm.show(r)) : e && "function" == typeof e && e(t);
                } else e && "function" == typeof e && e(t);
            }
            function h(t) {
                var n = getCurrentPages(), r = getCurrentPages();
                if (t != "/" + r[r.length - 1].route) {
                    if (r.length > 1) for (var o = r.length - 2; o >= 0; o--) if ("/" + r[o].route == t) return void e.navigateBack({
                        delta: r.length - 1 - o
                    });
                    n.length >= 10 ? e.reLaunch({
                        url: t
                    }) : e.navigateTo({
                        url: t
                    });
                }
            }
            function g(e) {
                var t = getCurrentPages(), n = t[t.length - 1].selectComponent("#sideBar");
                n && n.$vm.hideHandler(!e);
            }
            function y(e) {
                var t = getCurrentPages(), n = t[t.length - 1].selectComponent("#tabBar");
                n && n.$vm.hideHandler(!e);
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getUserInfo = function (t) {
                var n = getApp().globalData;
                if (!t && n.userInfo) {
                    if (1 == e.getStorageSync("promoterType")) {
                        var r = e.getStorageSync("openId");
                        console.log("绑定客户", r, "当前用户id", n.userInfo.openId), n.userInfo.openId != r && (0,
                            v.request)({
                                url: {
                                    path: "appAjax/promoter.jsp"
                                },
                                data: {
                                    cmd: "bindCustomer",
                                    openId: n.userInfo.openId,
                                    promoterOpenId: r
                                }
                            }).then(function (t) {
                                e.removeStorageSync("promoterType"), e.removeStorageSync("openId");
                            });
                    }
                    return Promise.resolve(n.userInfo);
                }
                return (0, v.initUserInfo)().then(function (t) {
                    if (t) {
                        if (1 == e.getStorageSync("promoterType")) {
                            var r = e.getStorageSync("openId");
                            console.log("绑定客户", r, "当前用户id", t.userInfo.openId), t.openId != r && (0, v.request)({
                                url: {
                                    path: "appAjax/promoter.jsp"
                                },
                                data: {
                                    cmd: "bindCustomer",
                                    openId: t.userInfo.openId,
                                    promoterOpenId: r
                                }
                            }).then(function (t) {
                                e.removeStorageSync("promoterType"), e.removeStorageSync("openId");
                            });
                        }
                        return console.log("userInfo -- ", n.userInfo), n.userInfo;
                    }
                });
            }, t.getWXAppInfo = function (t) {
                function n(t, n) {
                    var r = {}, o = t.topSetting;
                    if (o && o.s && o.s.h) {
                        var i = getCurrentPages(), a = i[i.length - 1];
                        a._hasHideShareMenu || (a._hasHideShareMenu = !0, e.hideShareMenu());
                    }
                    return n && 0 !== n.length ? (n.forEach(function (e) {
                        var n = t[e];
                        void 0 !== n && (r[e] = n);
                    }), r) : t;
                }
                var r = getApp().globalData, o = r.wxappInfo;
                return !r.isModel && o && Object.keys(o).length > 0 ? Promise.resolve(n(o, t)) : (0,
                    v.getWXAppInfo)().then(function (e) {
                        return n(e, t);
                    }).catch(function (e) {
                        console.error(e);
                    });
            }, t.getUserInfoByOfficialApi = function () {
                return e.getSetting().then(function (e) {
                    console.log(e);
                    var t = a(e, 2), n = t[0], r = t[1];
                    if (n) throw Error(n.errMsg);
                    return !!r.authSetting["scope.userInfo"];
                }).then(function (e) {
                    if (void 0 !== e) return console.log("isUserInfoEmpty", _.isUserInfoEmpty()), e && !_.isUserInfoEmpty() ? getApp().globalData.userInfo : (0,
                        v.getUserInfoByOfficialApi)().then(function (e) {
                            if (e) return e;
                        });
                }).catch(function (e) {
                    console.error(e);
                });
            }, t.navigateTo = h, t.commonMakePhoneCall = p, t.commonAuthPopupShowHandler = d,
                t.commonAuthPopupCancelHandler = function (t) {
                    var n, r = getCurrentPages(), o = r[r.length - 1].selectComponent("#authPopup").$vm;
                    if (o) {
                        var a = o._popupTemp;
                        if (a) {
                            var s = t.infoType, c = t.sceneKey, u = a.params.sceneKey;
                            if (c === u && 1 === o.getAuthInfo(s)[u].authType) {
                                var l = {
                                    title: "授权失败",
                                    content: (n = {}, i(n, m.default.SUBMIT_FORM, "取消授权将无法提交表单"), i(n, m.default.NEWS_COMMENT, "取消授权将无法提交评论"),
                                        i(n, m.default.SUBMIT_ORDER, "取消授权将无法提交订单"), i(n, m.default.VOTE, "取消授权将无法提交投票"),
                                        i(n, m.default.WX_SERVICE, "取消授权将无法呼叫客服"), i(n, m.default.CALL, "取消授权将无法拨打电话"),
                                        i(n, m.default.COUPON, "取消授权将无法领取优惠券"), i(n, m.default.MYCOUPON, "取消授权将无法进入页面"),
                                        n)[u]
                                };
                                a = o._popupTemp = null, l.content && e.showModal({
                                    title: l.title,
                                    content: l.content,
                                    showCancel: !1
                                });
                            }
                        }
                    }
                }, t.commonAuthPopupCompleteHandler = function () {
                    var e = getCurrentPages(), t = e[e.length - 1].selectComponent("#authPopup");
                    if (t) {
                        var n = t.$vm;
                        if (n._popupTemp) {
                            var r = n._popupTemp, o = r.params, i = r.next;
                            i && "function" == typeof i && i(o), r = n._popupTemp = null;
                        }
                    }
                }, t.commponOpenCalandar = function (e) {
                    y(!1), g(!1), _.getCurrentPageEventBus().$emit(b.SHOW_SHADOWVIEW);
                    var t = e.detail || e;
                    if (t && t.setting) {
                        var n = getCurrentPages(), r = n[n.length - 1], o = r.calendarComponent;
                        o || (o = r.calendarComponent = r.selectComponent("#calendar").$vm);
                        var i = {
                            defaultDate: "",
                            setting: {}
                        }, a = Object.assign({}, i, t);
                        o._callback = t.callback, o.open(a);
                    } else console.error("打开日历需要传入正确的 options 或者 date setting");
                }, t.commponCloseCalendar = function (e) {
                    y(!0), g(!0), _.getCurrentPageEventBus().$emit(b.HIDE_SHADOWVIEW);
                    var t = e.date, n = getCurrentPages(), r = n[n.length - 1], o = r.calendarComponent;
                    o || (o = r.calendarComponent = r.selectComponent("#calendar").$vm), o._callback && (o._callback(t),
                        o._callback = null);
                }, t.setNavigationBarColor = function (t) {
                    var n = t || getApp().globalData.wxappInfo.topSetting || {}, r = n.bg || {}, o = n.tc || {}, i = "#ffffff";
                    1 == r.t && (i = r.c), e.setNavigationBarColor({
                        frontColor: 1 == r.t ? o.c : "#000",
                        backgroundColor: i,
                        animation: {
                            duration: 400,
                            timingFunc: "easeOut"
                        }
                    });
                }, t.toggleSideBar = g, t.toggleTabBar = y, t.getOpenType = function (e) {
                    var t = "";
                    return e ? (5 === e.t ? t = "share" : 7 === e.t && (t = "contact"), t) : "";
                }, t.jumpTypeCtrl = function (t, n) {
                    console.log("jInfo", t);
                    var r = getApp().globalData.wxappInfo;
                    if (t) {
                        var o = t.t;
                        console.log("linkType", o);
                        var a = r.jumpAuth, s = r.tabBarCusColList;
                        if (!a[o - 1]) return void e.showToast({
                            title: "链接已失效",
                            icon: "none",
                            duration: 2e3
                        });
                        switch (o) {
                            case 1:
                                var c = t.colId, u = t.url;
                                if (r.personalApp && u.includes("/pages/infoIssueSys")) return void e.showModal({
                                    title: "温馨提示",
                                    showCancel: !1,
                                    content: "小程序账号主体不支持该功能，请联系客服进行反馈。"
                                });
                                s.some(function (e, t) {
                                    if (e.cusColId != c) return !1;
                                    var n = parseInt(t) + 1;
                                    return u = "/pages/cusCol".concat(n, "/cusCol").concat(n), !0;
                                }), h(u);
                                break;

                            case 2:
                                p(t.pho);
                                break;

                            case 3:
                                var l = t.addr;
                                (0, v.getLocationFromBaidu)(l);
                                break;

                            case 4:
                                h(t.bookDetailUrl);
                                break;

                            case 5:
                                break;

                            case 6:
                                h(t.newsDetailUrl);
                                break;

                            case 7:
                                (0, v.reportVisitorBehavior)({
                                    type: 21
                                });
                                break;

                            case 8:
                            case 9:
                            case 19:
                                var f;
                                f = t.extraData || {}, e.navigateToMiniProgram({
                                    appId: t.appid,
                                    path: t.page,
                                    envVersion: "release",
                                    extraData: f,
                                    fail: function (e) {
                                        console.log(e);
                                    }
                                });
                                break;

                            case 10:
                                var d;
                                d = t.extraData || {}, e.navigateToMiniProgram({
                                    appId: t.appid,
                                    path: t.page,
                                    envVersion: "release",
                                    extraData: d,
                                    fail: function (e) {
                                        console.log(e);
                                    }
                                });
                                break;

                            case 11:
                                h(t.cardUrl);
                                break;

                            case 12:
                            case 14:
                            case 13:
                                h(t.pageUrl);
                                break;

                            case 15:
                                h(t.bookGroupUrl);
                                break;

                            case 16:
                                h(t.newsGroupUrl);
                                break;

                            case 17:
                                h(t.infoSysDetailUrl);
                                break;

                            case 18:
                                if (r.onlyPersonalApp) return;
                                h(t.pageUrl);
                                break;

                            case 20:
                                e.setClipboardData({
                                    data: t.copyText,
                                    success: function () {
                                        e.showToast({
                                            title: "复制成功"
                                        }), (0, v.logDog)(i({}, w.fromTypes.WEIXIN, {
                                            dogId: 7000259,
                                            srcId: 1
                                        }));
                                    }
                                });
                                break;

                            case 21:
                            case 24:
                                h(t.jumpUrl);
                                break;

                            case 25:
                                if (r.personalApp) return void e.showModal({
                                    title: "温馨提示",
                                    showCancel: !1,
                                    content: "小程序账号主体不支持该功能，请联系客服进行反馈。"
                                });
                                h(t.jumpUrl);
                                break;

                            default:
                                h(t.jumpUrl);
                        }
                    } else n && h(n);
                }, t.beforeShareAppMessage = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = Object.prototype.toString, n = getApp().globalData, r = "", o = e.params;
                    if (e.path) r = e.path; else {
                        var i = getCurrentPages(), a = i[i.length - 1];
                        r = "/" + a.route;
                    }
                    return r += "?sourceOpenId=" + n.openId, "[object Object]" === t.call(o) ? Object.keys(o).forEach(function (e) {
                        r += "&".concat(e, "=").concat(o[e]);
                    }) : "[object String]" === t.call(o) && (r += "&" === o[0] ? "" : "&", r += o),
                    {
                        path: r
                    };
                }, t.beforeShareTimeline = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = Object.prototype.toString, n = getApp().globalData, r = "", o = e.params;
                    return r += "sourceOpenId=" + n.openId, "[object Object]" === t.call(o) ? Object.keys(o).forEach(function (e) {
                        r += "&".concat(e, "=").concat(o[e]);
                    }) : "[object String]" === t.call(o) && (r += "&" === o[0] ? "" : "&", r += o),
                    {
                        query: r
                    };
                }, t.selectComponent = function (e, t) {
                    if (!e) return console.error("传入的节点 id 有误，请检查"), Promise.resolve(!1);
                    if (!t) {
                        var n = getCurrentPages();
                        t = n[n.length - 1];
                    }
                    var r, o = 0, i = 0;
                    return new Promise(function (n, a) {
                        o = setInterval(function () {
                            (r = t.selectComponent(e, t)) || i > 3 ? (clearInterval(o), n(!!r && r.$vm)) : i++;
                        }, 500);
                    });
                }, t.onlyOneRequestQueue = function (e) {
                    function t(e) {
                        var r = I[e];
                        r.status === n.INIT && (r.status = n.RUNNING);
                        var o = r.queue.shift(), i = o.request.bind(null, function () {
                            0 !== r.queue.length ? t(e) : r.status = n.INIT;
                        });
                        o.interval ? setTimeout(i, o.interval) : i();
                    }
                    var n = {
                        INIT: 0,
                        RUNNING: 1
                    }, r = e.key;
                    if (r) {
                        var o = I[r];
                        o || (o = I[r] = {
                            status: n.INIT,
                            queue: []
                        }), o.queue.push(e), o.status === n.INIT && t(r);
                    } else console.error("key 参数异常，每个请求需要一个唯一的 key");
                }, t.requestOnce = function (e) {
                    var t = getApp().globalData, n = e.cache, r = e.url, o = e.data || {}, i = e.key, a = t._onlyRequestMap;
                    if (r) {
                        if (i) {
                            if (a || (a = t._onlyRequestMap = {}), n && a[i]) return Promise.resolve(a[i]);
                            if (!A[i]) {
                                var s = {
                                    url: r,
                                    data: o
                                };
                                e.openId && (s.openId = !0), A[i] = (0, v.request)(s).then(function (t) {
                                    if (t && t.success) {
                                        var r = e.resKey ? t[e.resKey] : t.data;
                                        return n && (a[i] = r), t;
                                    }
                                }).catch(function (e) {
                                    console.error(e);
                                }).finally(function () {
                                    return A[i] = null;
                                });
                            }
                            return A[i];
                        }
                        console.error("key 参数异常，每个请求需要一个唯一的 key");
                    } else console.error("url 参数异常");
                }, t.addSubscribeOrder = function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = t.serviceId, r = t.serviceType, o = t.price;
                    return (0, v.request)({
                        url: {
                            path: "appAjax/order.jsp"
                        },
                        data: {
                            cmd: "addSubscribeOrder",
                            serviceId: n,
                            serviceType: r,
                            price: o,
                            payType: 1
                        },
                        openId: !0
                    }).then(function (e) {
                        if (!e) return {
                            success: !1,
                            msg: "提交订单失败,请联系小程序管理员"
                        };
                        if (e.success) {
                            var t = e.id, o = e.wxpayInfo;
                            return o ? {
                                success: !0,
                                msg: e.msg,
                                orderId: t,
                                wxpayInfo: o
                            } : (1 == r ? ((0, v.logDog)(7000279, 1), (0, v.reportVisitorBehavior)({
                                type: 31,
                                relationId: n
                            })) : 2 == r ? ((0, v.logDog)(7000279, 0), (0, v.reportVisitorBehavior)({
                                type: 32,
                                relationId: n
                            })) : 4 == r && ((0, v.logDog)(7000279, 6), (0, v.reportVisitorBehavior)({
                                type: 37,
                                relationId: n
                            })), {
                                success: !0,
                                msg: e.msg
                            });
                        }
                        return {
                            success: !1,
                            msg: e.msg
                        };
                    }).catch(function (e) {
                        console.error(e);
                    }).finally(function () {
                        e.hideLoading();
                    });
                }, t.getQrCode = function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = t.query, r = t.success, i = t.fail, a = t.complete, s = getApp().globalData.extConfigData, c = s.wxappDomainUrl, u = (0,
                        x.stringifyUrl)({
                            url: "".concat(c, "/").concat("wxAppQRCode.jsp"),
                            query: o({
                                wxappAid: s.wxappAid,
                                wxappId: s.wxappId
                            }, n)
                        });
                    return e.downloadFile({
                        url: u,
                        success: r,
                        fail: i,
                        complete: a
                    });
                }, Object.defineProperty(t, "initLogin", {
                    enumerable: !0,
                    get: function () {
                        return v.initLogin;
                    }
                });
            var v = n("60e3"), m = function (e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }(n("477c")), b = n("dcc5"), w = n("85b1"), x = n("72bf"), _ = n("ca00"), I = {}, A = {};
        }).call(this, n("543d").default);
    },
    dcc5: function (e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.SYNC_DONE = t.HEAD_UPDATE = t.CHAT_UPDATE = t.CHAT_ROAMING = t.CHAT_DATA = t.VOTE_CHANGE = t.SHOW_DIALOG = t.HIDE_SHADOWVIEW = t.SHOW_SHADOWVIEW = t.AREAPICKER_CHANGE = t.OPEN_AREAPICKER = void 0;
        t.OPEN_AREAPICKER = "open-areapicker";
        t.AREAPICKER_CHANGE = "areapicker-change";
        t.SHOW_SHADOWVIEW = "show-shadowview";
        t.HIDE_SHADOWVIEW = "hide-shadowview";
        t.SHOW_DIALOG = "show-dialog";
        t.VOTE_CHANGE = "vote_change";
        t.CHAT_DATA = "chat-data";
        t.CHAT_ROAMING = "chat-roaming";
        t.CHAT_UPDATE = "chat-update";
        t.HEAD_UPDATE = "head-update";
        t.SYNC_DONE = "sync-done";
    },
    f0c5: function (e, t, n) {
        function r(e, t, n, r, o, i, a, s, c, u) {
            var l, f = "function" == typeof e ? e.options : e;
            if (c) {
                f.components || (f.components = {});
                var p = Object.prototype.hasOwnProperty;
                for (var d in c) p.call(c, d) && !p.call(f.components, d) && (f.components[d] = c[d]);
            }
            if (u && ((u.beforeCreate || (u.beforeCreate = [])).unshift(function () {
                this[u.__module] = this;
            }), (f.mixins || (f.mixins = [])).push(u)), t && (f.render = t, f.staticRenderFns = n,
                f._compiled = !0), r && (f.functional = !0), i && (f._scopeId = "data-v-" + i),
                a ? (l = function (e) {
                    (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__),
                        o && o.call(this, e), e && e._registeredComponents && e._registeredComponents.add(a);
                }, f._ssrRegister = l) : o && (l = s ? function () {
                    o.call(this, this.$root.$options.shadowRoot);
                } : o), l) if (f.functional) {
                    f._injectStyles = l;
                    var h = f.render;
                    f.render = function (e, t) {
                        return l.call(t), h(e, t);
                    };
                } else {
                    var g = f.beforeCreate;
                    f.beforeCreate = g ? [].concat(g, l) : [l];
                }
            return {
                exports: e,
                options: f
            };
        }
        n.d(t, "a", function () {
            return r;
        });
    },
    f1db: function (e, t, n) {
        function r() {
            return f || (f = wx.getSystemInfoSync());
        }
        function o(e, t, n) {
            var r = "".concat(e, "/").concat(t, "/").concat(n);
            return new Date(r);
        }
        function i(e) {
            var t = this.gesture, n = t.startX, r = t.startY;
            if (this.slideLock) {
                var o = e.touches[0], i = o.clientX - n, a = o.clientY - r;
                return i < -60 && a < 20 && a > -20 && (this.slideLock = !1, !0);
            }
        }
        function a(e) {
            var t = this.gesture, n = t.startX, r = t.startY;
            if (this.slideLock) {
                var o = e.touches[0], i = o.clientX - n, a = o.clientY - r;
                return i > 60 && a < 20 && a > -20 && (this.slideLock = !1, !0);
            }
        }
        function s() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t = {}, n = [];
            for (var r in e.forEach(function (e) {
                t["".concat(e.year, "-").concat(e.month, "-").concat(e.day)] = e;
            }), t) n.push(t[r]);
            return n;
        }
        function c(e) {
            var t = !1, n = this.calendar.todayTimestamp, r = this.config.disableDays, i = void 0 === r ? [] : r, a = this.config.enableDays, s = void 0 === a ? [] : a, c = i.map(function (e) {
                return "".concat(e.year, "-").concat(e.month, "-").concat(e.day);
            }), u = s.map(function (e) {
                return "".concat(e.year, "-").concat(e.month, "-").concat(e.day);
            }), l = "".concat(e.year, "-").concat(e.month, "-").concat(e.day), f = o(e.year, e.month, e.day).getTime();
            this.config.disableAll && (t = !0);
            var p = o(e.year, e.month, e.day).getDay();
            if (0 != p && 6 != p || (t = !!this.config.disableWeekend, f - n < 0 && this.config.isDisableWeekendInPastDay && (t = !0)),
                f - n < 0 && this.config.disablePastDay && (t = !!this.config.disablePastDay), -1 !== c.indexOf(l) && (t = !0),
                this.config.openWeek && -1 == this.config.openWeek.indexOf(p) && (t = !0), -1 !== u.indexOf(l) && (t = !1),
                this.config.openGrade && this.config.gradeDay && n + 864e5 * (this.config.gradeDay - 1) - f < 0 && (t = !0),
                this.config.disableTimePoint && 1 == this.config.tiemOrDate) {
                var d = this.config.disableTimePoint.d, h = e.year, g = e.month, y = e.day;
                void 0 != d && d.forEach(function (e) {
                    var n = new Date(e);
                    n.getFullYear() == h && n.getMonth() + 1 == g && n.getDate() == y && (t = !0);
                });
            }
            return 10 == e.month && 10 == e.day && (console.log("dayOpt", e), console.log("isDisable", t)),
                t;
        }
        function u() {
            var e = getCurrentPages();
            return e[e.length - 1];
        }
        function l(e) {
            var t = this;
            e && e.length && (e.forEach(function (e) {
                t[e] = p[e].bind(t);
            }), console.log("bind func", this));
        }
        var f;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.isIos = function () {
            var e = r();
            return /iphone|ios/i.test(e.platform);
        }, t.isUpSlide = function (e) {
            var t = this.gesture, n = t.startX, r = t.startY;
            if (this.slideLock) {
                var o = e.touches[0], i = o.clientX - n;
                return o.clientY - r < -60 && i < 20 && i > -20 && (this.slideLock = !1, !0);
            }
        }, t.isDownSlide = function (e) {
            var t = this.gesture, n = t.startX, r = t.startY;
            if (this.slideLock) {
                var o = e.touches[0], i = o.clientX - n;
                return o.clientY - r > 60 && i < 20 && i > -20 && (this.slideLock = !1, !0);
            }
        }, t.isLeftSlide = i, t.isRightSlide = a, t.default = t.enableDay = t.disableDay = t.switchView = t.clearTodoLabels = t.deleteTodoLabels = t.setTodoLabels = t.jump = t.getSelectedDay = void 0;
        var p = {
            getThisMonthDays: function (e, t) {
                return new Date(e, t, 0).getDate();
            },
            getFirstDayOfWeek: function (e, t) {
                return new Date(Date.UTC(e, t - 1, 1)).getDay();
            },
            getDayOfWeek: function (e, t, n) {
                return new Date(Date.UTC(e, t - 1, n)).getDay();
            },
            renderCalendar: function (e, t, n) {
                p.calculateEmptyGrids.call(this, e, t), p.calculateDays.call(this, e, t, n);
                var r = (this.calendar || {}).todoLabels, o = this.config.afterCalendarRender;
                r && r instanceof Array && p.setTodoLabels.call(this), o && "function" == typeof o && !this.firstRender && (o(),
                    this.firstRender = !0);
            },
            calculateEmptyGrids: function (e, t) {
                p.calculatePrevMonthGrids.call(this, e, t), p.calculateNextMonthGrids.call(this, e, t);
            },
            calculatePrevMonthGrids: function (e, t) {
                for (var n = [], r = p.getThisMonthDays(e, t - 1), o = r - p.getFirstDayOfWeek(e, t), i = r; i > o; i--) n.push(i);
                this.calendar.empytGrids = n.reverse();
            },
            calculateNextMonthGrids: function (e, t) {
                var n = [], r = p.getThisMonthDays(e, t), i = o(e, t, r).getDay(), a = 42 - this.calendar.empytGrids.length - r, s = 7 - (i + 1);
                a > s && (s = a);
                for (var c = 1; c <= s; c++) n.push(c);
                this.calendar.lastEmptyGrids = n;
            },
            calculateDays: function (e, t, n) {
                for (var r = this, i = [], a = this.calendar, s = a.todayTimestamp, u = p.getThisMonthDays(e, t), l = n ? [{
                    day: n,
                    choosed: !0,
                    year: e,
                    month: t
                }] : a.selectedDay, f = 1; f <= u; f++) i.push({
                    day: f,
                    choosed: !1,
                    year: e,
                    month: t
                });
                var d = this.config.disableDays, h = void 0 === d ? [] : d, g = this.config.enableDays, y = void 0 === g ? [] : g, v = (h.map(function (e) {
                    return "".concat(e.year, "-").concat(e.month, "-").concat(e.day);
                }), y.map(function (e) {
                    return "".concat(e.year, "-").concat(e.month, "-").concat(e.day);
                }), l.map(function (e) {
                    return "".concat(e.year, "-").concat(e.month, "-").concat(e.day);
                }));
                i.map(function (e) {
                    e.disable = c.call(r, e);
                    var t = "".concat(e.year, "-").concat(e.month, "-").concat(e.day);
                    -1 !== v.indexOf(t) && (e.choosed = !0), o(e.year, e.month, e.day).getTime() == s && (e.alias = "今");
                }), l[0].disable = c.call(this, l[0]), a.days = i, n && (a.selectedDay = l);
            },
            choosePrevMonth: function () {
                var e = this.calendar, t = e.curYear, n = t, r = e.curMonth - 1;
                r < 1 && (n = t - 1, r = 12), n < 1920 || (p.renderCalendar.call(this, n, r), e.curYear = n,
                    e.curMonth = r);
            },
            chooseNextMonth: function () {
                var e = this.calendar, t = e.curYear, n = e.curMonth + 1, r = t;
                n > 12 && (r = t + 1, n = 1), r > 2050 || (p.renderCalendar.call(this, r, n), e.curYear = r,
                    e.curMonth = n);
            },
            chooseMonth: function (e) {
                var t = e.detail.value.split("-"), n = 1 * t[0], r = 1 * t[1];
                p.renderCalendar.call(this, n, r), this.calendar.curYear = n, this.calendar.curMonth = r;
            },
            closeCalendar: function (e) {
                p.setCalendarStatus.call(this, !1);
                var t = this.config.closeCalendar;
                if (t && "function" == typeof t) return this.config.closeCalendar(e);
            },
            tapDayItem: function (e) {
                var t = e.currentTarget.dataset, n = t.idx;
                if (!t.disable) {
                    var r = {}, o = this.calendar || [], i = o.days, a = o.selectedDay, s = this.config, c = s.multi, u = {
                        e: e,
                        idx: n,
                        onTapDay: s.onTapDay,
                        currentSelected: r,
                        selectedDays: a,
                        days: i.slice()
                    };
                    c ? p.whenMulitSelect.call(this, u) : p.whenSingleSelect.call(this, u);
                }
            },
            comfirmDay: function (e) {
                var t = {}, n = this.config, r = (n.multi, n.comfirmDay);
                if (!(t = this.calendar.selectedDay[0]).disable) return p.setCalendarStatus.call(this, !1),
                    r && "function" == typeof r ? this.config.comfirmDay(t, e) : void 0;
                wx.showModal({
                    content: "当前日期不可选！请选择其他日期！",
                    showCancel: !1,
                    success: function (e) {
                        e.confirm;
                    }
                });
            },
            afterTapDay: function (e, t) {
                var n = this.config, r = n.multi, o = n.afterTapDay;
                o && "function" == typeof o && (r ? n.afterTapDay(e, t) : n.afterTapDay(e));
            },
            whenMulitSelect: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.currentSelected, n = e.selectedDays, r = e.days, o = e.idx, i = e.onTapDay, a = e.e;
                if (r[o].choosed = !r[o].choosed, r[o].choosed ? (t = r[o], n.push(t)) : (r[o].cancel = !0,
                    t = r[o], n = n.filter(function (e) {
                        return e.day !== r[o].day;
                    })), i && "function" == typeof i) return this.config.onTapDay(t, a);
                this.calendar.days = r, this.calendar.selectedDay = n, p.afterTapDay.call(this, t, n);
            },
            whenSingleSelect: function () {
                var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = t.currentSelected, r = t.selectedDays, o = [], i = t.days, a = t.idx, s = t.onTapDay, c = t.e, u = r[0], l = u.month, f = u.year, d = i[0], h = d.month, g = d.year, y = this.calendar;
                if (l !== h || f !== g || this.weekMode || (i[r[0].day - 1].choosed = !1), this.weekMode && i.map(function (e, t) {
                    e.day === r[0].day && (i[t].choosed = !1);
                }), y.todoLabels && (o = y.todoLabels.filter(function (e) {
                    return +e.year === g && +e.month === h;
                })), o.forEach(function (t) {
                    e.weekMode ? i.map(function (e, n) {
                        +e.day == +t.day && (i[n].hasTodo = !0, +r[0].day == +t.day && (i[n].showTodoLabel = !0));
                    }) : (i[t.day - 1].hasTodo = !0, +r[0].day == +t.day && (i[r[0].day - 1].showTodoLabel = !0));
                }), i[a].showTodoLabel && (i[a].showTodoLabel = !1), i[a].choosed = !0, n = i[a],
                    s && "function" == typeof s) return this.config.onTapDay(n, c);
                y.days = i, y.selectedDay = [n], p.afterTapDay.call(this, n);
            },
            setTodoLabels: function () {
                var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = this.calendar;
                if (!n || !n.days) return console.error("请等待日历初始化完成后再调用该方法");
                var r = n.days.slice(), o = n.curYear, i = n.curMonth, a = t.days, c = void 0 === a ? [] : a, u = t.pos, l = void 0 === u ? "bottom" : u, f = t.dotColor, p = void 0 === f ? "" : f, d = n.todoLabels, h = void 0 === d ? [] : d, g = n.todoLabelPos, y = n.todoLabelColor, v = c.filter(function (e) {
                    return +e.year === o && +e.month === i;
                });
                if (v && v.length || h.length) {
                    var m = h.filter(function (e) {
                        return +e.year === o && +e.month === i;
                    });
                    v.concat(m).forEach(function (t) {
                        var n = {};
                        (n = e.weekMode ? r.find(function (e) {
                            return +e.day == +t.day;
                        }) : r[t.day - 1]) && (n.showTodoLabel = !n.choosed);
                    }), n.days = r, n.todoLabels = s(c.concat(h)), l && l !== g && (n.todoLabelPos = l),
                        p && p !== y && (n.todoLabelColor = p);
                }
            },
            filterTodos: function (e) {
                var t = this.calendar.todoLabels, n = e.map(function (e) {
                    return "".concat(e.year, "-").concat(e.month, "-").concat(e.day);
                });
                return t.filter(function (e) {
                    return -1 === n.indexOf("".concat(e.year, "-").concat(e.month, "-").concat(e.day));
                });
            },
            deleteTodoLabels: function (e) {
                if (e instanceof Array && e.length) {
                    var t = p.filterTodos.call(this, e), n = this.calendar, r = n.days, o = n.curYear, i = n.curMonth, a = t.filter(function (e) {
                        return o === +e.year && i === +e.month;
                    });
                    r.map(function (e) {
                        e.showTodoLabel = !1;
                    }), a.forEach(function (e) {
                        r[e.day - 1].showTodoLabel = !r[e.day - 1].choosed;
                    }), this.calendar.days = r, this.calendar.todoLabels = t;
                }
            },
            clearTodoLabels: function () {
                var e = this.calendar.days, t = void 0 === e ? [] : e, n = [].concat(t);
                n.map(function (e) {
                    e.showTodoLabel = !1;
                }), this.calendar.days = n, this.calendar.todoLabels = [];
            },
            jumpToToday: function () {
                var e = new Date(), t = e.getFullYear(), n = e.getMonth() + 1, r = e.getDate(), i = o(t, n, r).getTime(), a = this.calendar;
                a.curYear = t, a.curMonth = n, a.selectedDay = [{
                    day: r,
                    choosed: !0,
                    year: t,
                    month: n
                }], a.todayTimestamp = i, p.renderCalendar.call(this, t, n, r);
            },
            calendarTouchstart: function (e) {
                var t = e.touches[0], n = t.clientX, r = t.clientY;
                this.slideLock = !0;
                var o = this.gesture;
                o || (o = this.gesture = {}), o.startX = n, o.startY = r;
            },
            calendarTouchmove: function (e) {
                if (i.call(this, e)) {
                    if (this.weekMode) return p.calculateNextWeekDays.call(this);
                    p.chooseNextMonth.call(this);
                }
                if (a.call(this, e)) {
                    if (this.weekMode) return p.calculatePrevWeekDays.call(this);
                    p.choosePrevMonth.call(this);
                }
            },
            updateCurrYearAndMonth: function (e) {
                var t = this.calendar, n = t.days, r = t.curYear, o = t.curMonth, i = r, a = o, s = n[0], c = s.month, u = s.year, l = n[n.length - 1], f = l.month, d = l.year;
                c !== f && ("prev" === e ? (r = u, a = c) : (r = d, a = f));
                var h = p.getThisMonthDays(r, o), g = n[n.length - 1], y = n[0];
                return (h === +g.day || g.day + 7 > h) && "next" === e ? (a += 1) > 12 && (i += 1,
                    a = 12) : +y.day <= 7 && "prev" === e && (a -= 1) <= 0 && (i -= 1, a = 12), {
                    Uyear: i,
                    Umonth: a
                };
            },
            calculateLastDay: function () {
                var e = this.calendar, t = e.days, n = e.curYear, r = e.curMonth;
                return {
                    lastDayInThisWeek: t[t.length - 1].day,
                    lastDayInThisMonth: p.getThisMonthDays(n, r)
                };
            },
            calculateFirstDay: function () {
                return {
                    firstDayInThisWeek: this.calendar.days[0].day
                };
            },
            firstWeekInMonth: function (e, t) {
                var n = [1, 6 - p.getDayOfWeek(e, t, 1) + 1];
                return this.calendar.days.slice(n[0] - 1, n[1]);
            },
            lastWeekInMonth: function (e, t) {
                var n = p.getThisMonthDays(e, t), r = [n - p.getDayOfWeek(e, t, n), n];
                return this.calendar.days.slice(r[0] - 1, r[1]);
            },
            initSelectedDay: function (e) {
                var t = e.slice(), n = this.calendar, r = n.selectedDay, o = void 0 === r ? [] : r, i = n.todoLabels, a = void 0 === i ? [] : i, s = o.map(function (e) {
                    return "".concat(e.year, "+").concat(e.month, "+").concat(e.day);
                }), c = a.map(function (e) {
                    return "".concat(e.year, "-").concat(e.month, "-").concat(e.day);
                });
                return t.map(function (e) {
                    -1 !== s.indexOf("".concat(e.year, "+").concat(e.month, "+").concat(e.day)) ? e.choosed = !0 : e.choosed = !1,
                        -1 !== c.indexOf("".concat(e.year, "-").concat(e.month, "-").concat(e.day)) && (e.showTodoLabel = !e.choosed);
                }), t;
            },
            calculateNextWeekDays: function () {
                var e = p.calculateLastDay.call(this), t = e.lastDayInThisWeek, n = e.lastDayInThisMonth, r = this.calendar, o = r.curYear, i = r.curMonth, a = [];
                if (n - t >= 7) {
                    var s = p.updateCurrYearAndMonth.call(this, "next");
                    o = s.Uyear, i = s.Umonth;
                    for (var c = t + 1; c <= t + 7; c++) a.push({
                        year: o,
                        month: i,
                        day: c
                    });
                } else {
                    for (var u = t + 1; u <= n; u++) a.push({
                        year: o,
                        month: i,
                        day: u
                    });
                    var l = p.updateCurrYearAndMonth.call(this, "next");
                    o = l.Uyear, i = l.Umonth;
                    for (var f = 1; f <= 7 - (n - t); f++) a.push({
                        year: o,
                        month: i,
                        day: f
                    });
                }
                a = p.initSelectedDay.call(this, a), this.calendar.curYear = o, this.calendar.curMonth = i,
                    this.calendar.days = a;
            },
            calculatePrevWeekDays: function () {
                var e = this.calendar, t = p.calculateFirstDay.call(this).firstDayInThisWeek, n = e.curYear, r = e.curMonth, o = [];
                if (t - 7 > 0) {
                    var i = p.updateCurrYearAndMonth.call(this, "prev");
                    n = i.Uyear, r = i.Umonth;
                    for (var a = t - 7; a < t; a++) o.push({
                        year: n,
                        month: r,
                        day: a
                    });
                } else {
                    for (var s = [], c = 1; c < t; c++) s.push({
                        year: n,
                        month: r,
                        day: c
                    });
                    var u = p.updateCurrYearAndMonth.call(this, "prev");
                    n = u.Uyear, r = u.Umonth;
                    for (var l = p.getThisMonthDays(n, r), f = l - Math.abs(t - 7); f <= l; f++) o.push({
                        year: n,
                        month: r,
                        day: f
                    });
                    o = o.concat(s);
                }
                o = p.initSelectedDay.call(this, o), e.curYear = n, e.curMonth = r, e.days = o;
            },
            selectedDayWeekAllDays: function (e) {
                var t = this.calendar, n = this.calendar, r = n.days, o = n.curYear, i = n.curMonth, a = e.year, s = e.month, c = e.day, u = p.lastWeekInMonth.call(this, a, s), l = [], f = [], d = p.firstWeekInMonth.call(this, a, s);
                if (o === a && i === s || (c = 1), o !== a && (a = o), i !== s && (s = i), d.find(function (e) {
                    return e.day === c;
                })) {
                    var h = [], g = p.getThisMonthDays(a, s - 1), y = p.updateCurrYearAndMonth.call(this, "prev");
                    o = y.Uyear, i = y.Umonth;
                    for (var v = g - (7 - d.length) + 1; v <= g; v++) h.push({
                        year: o,
                        month: i,
                        day: v
                    });
                    r = h.concat(d);
                } else if (u.find(function (e) {
                    return e.day === c;
                })) {
                    var m = [];
                    if (u && u.length < 7) {
                        var b = p.updateCurrYearAndMonth.call(this, "next");
                        o = b.Uyear, i = b.Umonth;
                        for (var w = 1, x = 7 - u.length; w <= x; w++) m.push({
                            year: o,
                            month: i,
                            day: w
                        });
                    }
                    r = u.concat(m);
                } else {
                    var _ = p.getDayOfWeek(a, s, c), I = [c - _, c + (6 - _)];
                    r = r.slice(I[0] - 1, I[1]);
                }
                r = p.initSelectedDay.call(this, r), t.days = r, t.empytGrids = l, t.lastEmptyGrids = f;
            },
            switchWeek: function (e) {
                if (this.config.multi) return console.error("多选模式不能切换周月视图");
                var t = this.calendar, n = t.selectedDay, r = void 0 === n ? [] : n, o = t.curYear, i = t.curMonth;
                if (r.length) {
                    var a = r[0];
                    if ("week" === e) {
                        if (this.weekMode) return;
                        this.weekMode = !0, p.selectedDayWeekAllDays.call(this, a);
                    } else {
                        this.weekMode = !1;
                        var s = a.year, c = a.month, u = a.day;
                        o === s && i === c || (u = 1), p.renderCalendar.call(this, o, i, u);
                    }
                }
            },
            disableDays: function (e) {
                var t = this.calendar, n = t.disableDays, r = void 0 === n ? [] : n, o = t.days;
                if ("[object Array]" !== Object.prototype.toString.call(e)) return console.error("disableDays 参数为数组");
                var i = e.concat(r), a = i.map(function (e) {
                    return "".concat(e.year, "-").concat(e.month, "-").concat(e.day);
                });
                o.map(function (e) {
                    var t = "".concat(e.year, "-").concat(e.month, "-").concat(e.day);
                    -1 !== a.indexOf(t) && (e.disable = !0);
                }), t.days = o, t.disableDays = i;
            },
            enableDays: function (e) {
                var t = this.calendar, n = t.enableDays, r = void 0 === n ? [] : n, o = t.days;
                if ("[object Array]" !== Object.prototype.toString.call(e)) return console.error("enableDays 参数为数组");
                var i = e.concat(r), a = i.map(function (e) {
                    return "".concat(e.year, "-").concat(e.month, "-").concat(e.day);
                });
                o.map(function (e) {
                    var t = "".concat(e.year, "-").concat(e.month, "-").concat(e.day);
                    -1 !== a.indexOf(t) && (e.disable = !1);
                }), t.days = o, t.enableDays = i;
            },
            setCalendarStatus: function (e) {
                this.calendar.show = e;
            },
            catchTouch: function () { }
        };
        t.getSelectedDay = function () {
            return u().calendar.selectedDay;
        };
        var d = function (e, t, n) {
            var r = u(), i = new Date(), a = o(i.getFullYear(), i.getMonth() + 1, i.getDate()).getTime(), s = r.calendar;
            s.todayTimestamp = a;
            var c = s.selectedDay;
            if (!c || +c[0].year != +e || +c[0].month != +t || +c[0].day != +n) return e && t ? "number" != typeof +e || "number" != typeof +t ? console.error("jump 函数年月日参数必须为数字") : (s.curYear = e,
                s.curMonth = t, void r.$nextTick(function () {
                    if ("number" == typeof +n) return p.renderCalendar.call(r, e, t, n);
                    p.renderCalendar.call(r, e, t);
                })) : void p.jumpToToday.call(r);
        };
        t.jump = d;
        t.setTodoLabels = function (e) {
            var t = u();
            p.setTodoLabels.call(t, e);
        };
        t.deleteTodoLabels = function (e) {
            var t = u();
            p.deleteTodoLabels.call(t, e);
        };
        t.clearTodoLabels = function () {
            var e = u();
            p.clearTodoLabels.call(e);
        };
        t.switchView = function (e) {
            var t = u();
            p.switchWeek.call(t, e);
        };
        t.disableDay = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t = u();
            p.disableDays.call(t, e);
        };
        t.enableDay = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t = u();
            p.enableDays.call(t, e);
        };
        t.default = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = ["日", "一", "二", "三", "四", "五", "六"], n = ["tapDayItem", "comfirmDay", "choosePrevMonth", "chooseNextMonth", "calendarTouchstart", "calendarTouchmove", "catchTouch", "chooseMonth", "closeCalendar"];
            if (e.context) {
                var r = e.context;
                u = function () {
                    return r;
                }, e.context = null, delete e.context;
            }
            var o = u();
            o.config = e, p.setCalendarStatus.call(o, !0);
            var i = getApp().globalData, a = i.isManage || !1;
            if (o.isManage = a, o.isCusTabBarShow = i.isCusTabBarShow, o.isIphoneX = i.isIphoneX,
                o.calendar.weeksCh = t, o.calendar.config = e, e.defaultDay && "string" == typeof e.defaultDay) {
                var s = e.defaultDay.split(" "), c = (s[1], s[0].split("-"));
                if (c.length < 3) return console.error("配置 jumpTo 格式应为: 2018-4-2 或 2018-04-02");
                d(+c[0], +c[1], +c[2]);
            } else p.jumpToToday.call(o);
            l.call(o, n);
        };
    },
    f234: function (e, t, n) {
        function r(e, t) {
            try {
                return decodeURIComponent(e.join(""));
            } catch (e) { }
            if (1 === e.length) return e;
            t = t || 1;
            var n = e.slice(0, t), o = e.slice(t);
            return Array.prototype.concat.call([], r(n), r(o));
        }
        function o(e) {
            try {
                return decodeURIComponent(e);
            } catch (o) {
                o = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(o);
                for (var t = e.match(c), n = 1; n < t.length; n++) e = r(t, n).join(""), t = e.match(c);
                return e;
            }
        }
        function i(e) {
            for (var t = {
                "%FE%FF": "��",
                "%FF%FE": "��"
            }, n = u.exec(e); n;) {
                try {
                    t[n[0]] = decodeURIComponent(n[0]);
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    var r = o(n[0]);
                    r !== n[0] && (t[n[0]] = r);
                }
                n = u.exec(e);
            }
            t["%C2"] = "�";
            for (var i = Object.keys(t), a = 0; a < i.length; a++) {
                var s = i[a];
                e = e.replace(new RegExp(s, "g"), t[s]);
            }
            return e;
        }
        var s = "%[a-f0-9]{2}", c = new RegExp(s, "gi"), u = new RegExp("(" + s + ")+", "gi");
        e.exports = function (e) {
            if ("string" != typeof e) throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + (void 0 === e ? "undefined" : a(e)) + "`");
            try {
                return e = e.replace(/\+/g, " "), decodeURIComponent(e);
            } catch (t) {
                t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                return i(e);
            }
        };
    },
    f32c: function (e, t, n) {
        e.exports = function (e, t) {
            if ("string" != typeof e || "string" != typeof t) throw new TypeError("Expected the arguments to be of type `string`");
            if ("" === t) return [e];
            var n = e.indexOf(t);
            return -1 === n ? [e] : [e.slice(0, n), e.slice(n + t.length)];
        };
    },
    f5fc: function (e, t) {
        var n = {
            EVENT_UPDATE: "answerModuleUpdate"
        };
        e.exports = {
            eventTypes: n
        };
    }
}]);