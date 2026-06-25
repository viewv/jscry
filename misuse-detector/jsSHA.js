function __FAKE_NAME__FOR__DEBUG__JSSHA(d) {
    function l(n, m, r) {
        var t = n.length,
            p,
            v;
        m = m || [0];
        r = r || 0;
        var w = r >>> 3;
        if (0 !== t % 2)
            throw Error("String of HEX type must be in byte increments");
        for (p = 0; p < t; p += 2) {
            var x = parseInt(n.substr(p, 2), 16);
            if (isNaN(x))
                throw Error("String of HEX type contains invalid characters");
            var y = (p >>> 1) + w;
            for (v = y >>> 2; m.length <= v;) m.push(0);
            m[v] |= x << (8 * (3 - (y % 4)));
        }
        return { value: m, binLen: 4 * t + r };
    }
    function b(n, m, r) {
        var t;
        var p = m || [0];
        r = r || 0;
        var v = r >>> 3;
        for (t = 0; t < n.length; t += 1) {
            m = n.charCodeAt(t);
            var w = t + v;
            var x = w >>> 2;
            p.length <= x && p.push(0);
            p[x] |= m << (8 * (3 - (w % 4)));
        }
        return { value: p, binLen: 8 * n.length + r };
    }
    function a(n, m, r) {
        var t = 0,
            p,
            v;
        var w = m || [0];
        r = r || 0;
        m = r >>> 3;
        if (-1 === n.search(/^[a-zA-Z0-9=+\/]+$/))
            throw Error("Invalid character in base-64 string");
        var x = n.indexOf("=");
        n = n.replace(/=/g, "");
        if (-1 !== x && x < n.length)
            throw Error("Invalid '=' found in base-64 string");
        for (x = 0; x < n.length; x += 4) {
            var y = n.substr(x, 4);
            for (p = v = 0; p < y.length; p += 1) {
                var A =
                    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(
                        y[p]
                    );
                v |= A << (18 - 6 * p);
            }
            for (p = 0; p < y.length - 1; p += 1) {
                var H = t + m;
                for (A = H >>> 2; w.length <= A;) w.push(0);
                w[A] |= ((v >>> (16 - 8 * p)) & 255) << (8 * (3 - (H % 4)));
                t += 1;
            }
        }
        return { value: w, binLen: 8 * t + r };
    }
    function c(n) {
        var m = "",
            r = 4 * n.length,
            t;
        for (t = 0; t < r; t += 1) {
            var p = (n[t >>> 2] >>> (8 * (3 - (t % 4)))) & 255;
            m += String.fromCharCode(p);
        }
        return m;
    }
    function f(n) {
        var m = { outputUpper: !1, b64Pad: "=" };
        n = n || {};
        m.outputUpper = n.outputUpper || !1;
        m.b64Pad = n.b64Pad || "=";
        if ("boolean" !== typeof m.outputUpper)
            throw Error("Invalid outputUpper formatting option");
        if ("string" !== typeof m.b64Pad)
            throw Error("Invalid b64Pad formatting option");
        return m;
    }
    function e(n, m) {
        switch (m) {
            case "UTF8":
            case "UTF16BE":
            case "UTF16LE":
                break;
            default:
                throw Error("encoding must be UTF8, UTF16BE, or UTF16LE");
        }
        switch (n) {
            case "HEX":
                n = l;
                break;
            case "TEXT":
                n = function (r, t, p) {
                    var v = 0,
                        w,
                        x,
                        y;
                    var A = t || [0];
                    t = p || 0;
                    var H = t >>> 3;
                    if ("UTF8" === m)
                        for (w = 0; w < r.length; w += 1) {
                            p = r.charCodeAt(w);
                            var J = [];
                            128 > p
                                ? J.push(p)
                                : 2048 > p
                                    ? (J.push(192 | (p >>> 6)), J.push(128 | (p & 63)))
                                    : 55296 > p || 57344 <= p
                                        ? J.push(
                                            224 | (p >>> 12),
                                            128 | ((p >>> 6) & 63),
                                            128 | (p & 63)
                                        )
                                        : ((w += 1),
                                            (p = 65536 + (((p & 1023) << 10) | (r.charCodeAt(w) & 1023))),
                                            J.push(
                                                240 | (p >>> 18),
                                                128 | ((p >>> 12) & 63),
                                                128 | ((p >>> 6) & 63),
                                                128 | (p & 63)
                                            ));
                            for (x = 0; x < J.length; x += 1) {
                                var K = v + H;
                                for (y = K >>> 2; A.length <= y;) A.push(0);
                                A[y] |= J[x] << (8 * (3 - (K % 4)));
                                v += 1;
                            }
                        }
                    else if ("UTF16BE" === m || "UTF16LE" === m)
                        for (w = 0; w < r.length; w += 1) {
                            p = r.charCodeAt(w);
                            "UTF16LE" === m && ((x = p & 255), (p = (x << 8) | (p >>> 8)));
                            K = v + H;
                            for (y = K >>> 2; A.length <= y;) A.push(0);
                            A[y] |= p << (8 * (2 - (K % 4)));
                            v += 2;
                        }
                    return { value: A, binLen: 8 * v + t };
                };
                break;
            case "B64":
                n = a;
                break;
            case "BYTES":
                n = b;
                break;
            default:
                throw Error("format must be HEX, TEXT, B64, or BYTES");
        }
        return n;
    }
    function g(n, m) {
        return (n << m) | (n >>> (32 - m));
    }
    function h(n, m) {
        var r = (n & 65535) + (m & 65535);
        return (
            ((((n >>> 16) + (m >>> 16) + (r >>> 16)) & 65535) << 16) | (r & 65535)
        );
    }
    function k(n, m, r, t, p) {
        var v = (n & 65535) + (m & 65535) + (r & 65535) + (t & 65535) + (p & 65535);
        return (
            ((((n >>> 16) +
                (m >>> 16) +
                (r >>> 16) +
                (t >>> 16) +
                (p >>> 16) +
                (v >>> 16)) &
                65535) <<
                16) |
            (v & 65535)
        );
    }
    function q(n) {
        if ("SHA-1" === n)
            n = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
        else throw Error("No SHA variants supported");
        return n;
    }
    function z(n, m) {
        var r = [],
            t;
        var p = m[0];
        var v = m[1];
        var w = m[2];
        var x = m[3];
        var y = m[4];
        for (t = 0; 80 > t; t += 1) {
            r[t] = 16 > t ? n[t] : g(r[t - 3] ^ r[t - 8] ^ r[t - 14] ^ r[t - 16], 1);
            var A =
                20 > t
                    ? k(g(p, 5), (v & w) ^ (~v & x), y, 1518500249, r[t])
                    : 40 > t
                        ? k(g(p, 5), v ^ w ^ x, y, 1859775393, r[t])
                        : 60 > t
                            ? k(g(p, 5), (v & w) ^ (v & x) ^ (w & x), y, 2400959708, r[t])
                            : k(g(p, 5), v ^ w ^ x, y, 3395469782, r[t]);
            y = x;
            x = w;
            w = g(v, 30);
            v = p;
            p = A;
        }
        m[0] = h(p, m[0]);
        m[1] = h(v, m[1]);
        m[2] = h(w, m[2]);
        m[3] = h(x, m[3]);
        m[4] = h(y, m[4]);
        return m;
    }
    function B(n, m, r, t) {
        var p;
        for (p = (((m + 65) >>> 9) << 4) + 15; n.length <= p;) n.push(0);
        n[m >>> 5] |= 128 << (24 - (m % 32));
        n[p] = m + r;
        r = n.length;
        for (m = 0; m < r; m += 16) t = z(n.slice(m, m + 16), t);
        return t;
    }
    d.jsSHA = function (n, m, r) {
        var t = 0,
            p = [],
            v = 0,
            w = !1;
        r = r || {};
        var x = r.encoding || "UTF8";
        var y = r.numRounds || 1;
        var A = e(m, x);
        if (y !== parseInt(y, 10) || 1 > y)
            throw Error("numRounds must a integer >= 1");
        if ("SHA-1" === n) {
            var H = 512;
            var J = z;
            var K = B;
            var S = 160;
        } else throw Error("Chosen SHA variant is not supported");
        var L = q(n);
        this.update = function (G) {
            var I,
                M = 0,
                D = H >>> 5;
            var E = A(G, p, v);
            G = E.binLen;
            var N = E.value;
            E = G >>> 5;
            for (I = 0; I < E; I += D)
                M + H <= G && ((L = J(N.slice(I, I + D), L)), (M += H));
            t += M;
            p = N.slice(M >>> 5);
            v = G % H;
        };
        this.getHash = function (G, I) {
            var M = f(I);
            switch (G) {
                case "HEX":
                    G = function (D) {
                        var E = "",
                            N = 4 * D.length,
                            C;
                        for (C = 0; C < N; C += 1) {
                            var F = D[C >>> 2] >>> (8 * (3 - (C % 4)));
                            E +=
                                "0123456789abcdef".charAt((F >>> 4) & 15) +
                                "0123456789abcdef".charAt(F & 15);
                        }
                        return M.outputUpper ? E.toUpperCase() : E;
                    };
                    break;
                case "B64":
                    G = function (D) {
                        var E = "",
                            N = 4 * D.length,
                            C;
                        for (C = 0; C < N; C += 3) {
                            var F = (C + 1) >>> 2;
                            var O = D.length <= F ? 0 : D[F];
                            F = (C + 2) >>> 2;
                            F = D.length <= F ? 0 : D[F];
                            F =
                                (((D[C >>> 2] >>> (8 * (3 - (C % 4)))) & 255) << 16) |
                                (((O >>> (8 * (3 - ((C + 1) % 4)))) & 255) << 8) |
                                ((F >>> (8 * (3 - ((C + 2) % 4)))) & 255);
                            for (O = 0; 4 > O; O += 1)
                                8 * C + 6 * O <= 32 * D.length
                                    ? (E +=
                                        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(
                                            (F >>> (6 * (3 - O))) & 63
                                        ))
                                    : (E += M.b64Pad);
                        }
                        return E;
                    };
                    break;
                case "BYTES":
                    G = c;
                    break;
                default:
                    throw Error("format must be HEX, B64, or BYTES");
            }
            if (!1 === w)
                for (L = K(p, v, t, L), I = 1; I < y; I += 1) L = K(L, S, 0, q(n));
            w = !0;
            return G(L);
        };
    };
}
