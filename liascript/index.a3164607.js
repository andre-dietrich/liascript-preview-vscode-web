/**
@license @nocompile
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/ (function() {
    "use strict";
    var v;
    function ba(a1) {
        var b = 0;
        return function() {
            return b < a1.length ? {
                done: !1,
                value: a1[b++]
            } : {
                done: !0
            };
        };
    }
    var ca = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a1, b, c) {
        if (a1 == Array.prototype || a1 == Object.prototype) return a1;
        a1[b] = c.value;
        return a1;
    };
    function da(a1) {
        a1 = [
            "object" == typeof globalThis && globalThis,
            a1,
            "object" == typeof window && window,
            "object" == typeof self && self,
            "object" == typeof global && global
        ];
        for(var b = 0; b < a1.length; ++b){
            var c = a1[b];
            if (c && c.Math == Math) return c;
        }
        throw Error("Cannot find global object");
    }
    var ea = da(this);
    function fa(a1, b) {
        if (b) a: {
            var c = ea;
            a1 = a1.split(".");
            for(var d = 0; d < a1.length - 1; d++){
                var e = a1[d];
                if (!(e in c)) break a;
                c = c[e];
            }
            a1 = a1[a1.length - 1];
            d = c[a1];
            b = b(d);
            b != d && null != b && ca(c, a1, {
                configurable: !0,
                writable: !0,
                value: b
            });
        }
    }
    fa("Symbol", function(a1) {
        function b(e) {
            if (this instanceof b) throw new TypeError("Symbol is not a constructor");
            return new c("jscomp_symbol_" + (e || "") + "_" + d++, e);
        }
        function c(e, f) {
            this.g = e;
            ca(this, "description", {
                configurable: !0,
                writable: !0,
                value: f
            });
        }
        if (a1) return a1;
        c.prototype.toString = function() {
            return this.g;
        };
        var d = 0;
        return b;
    });
    fa("Symbol.iterator", function(a1) {
        if (a1) return a1;
        a1 = Symbol("Symbol.iterator");
        for(var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++){
            var d = ea[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a1] && ca(d.prototype, a1, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return ja(ba(this));
                }
            });
        }
        return a1;
    });
    function ja(a1) {
        a1 = {
            next: a1
        };
        a1[Symbol.iterator] = function() {
            return this;
        };
        return a1;
    }
    function ka(a1) {
        var b = "undefined" != typeof Symbol && Symbol.iterator && a1[Symbol.iterator];
        return b ? b.call(a1) : {
            next: ba(a1)
        };
    }
    function w(a1) {
        if (!(a1 instanceof Array)) {
            a1 = ka(a1);
            for(var b, c = []; !(b = a1.next()).done;)c.push(b.value);
            a1 = c;
        }
        return a1;
    }
    var la;
    if ("function" == typeof Object.setPrototypeOf) la = Object.setPrototypeOf;
    else {
        var na;
        a: {
            var oa = {
                a: !0
            }, pa = {};
            try {
                pa.__proto__ = oa;
                na = pa.a;
                break a;
            } catch (a1) {}
            na = !1;
        }
        la = na ? function(a1, b) {
            a1.__proto__ = b;
            if (a1.__proto__ !== b) throw new TypeError(a1 + " is not extensible");
            return a1;
        } : null;
    }
    var qa = la;
    function ra() {
        this.u = !1;
        this.h = null;
        this.Oa = void 0;
        this.g = 1;
        this.ea = 0;
        this.i = null;
    }
    function ua(a1) {
        if (a1.u) throw new TypeError("Generator is already running");
        a1.u = !0;
    }
    ra.prototype.O = function(a1) {
        this.Oa = a1;
    };
    function wa(a1, b) {
        a1.i = {
            ab: b,
            fb: !0
        };
        a1.g = a1.ea;
    }
    ra.prototype.return = function(a1) {
        this.i = {
            return: a1
        };
        this.g = this.ea;
    };
    function ya(a1, b) {
        a1.g = 3;
        return {
            value: b
        };
    }
    function za(a1) {
        this.g = new ra;
        this.h = a1;
    }
    function Aa(a1, b) {
        ua(a1.g);
        var c = a1.g.h;
        if (c) return Ba(a1, "return" in c ? c["return"] : function(d) {
            return {
                value: d,
                done: !0
            };
        }, b, a1.g.return);
        a1.g.return(b);
        return Ca(a1);
    }
    function Ba(a1, b, c, d) {
        try {
            var e = b.call(a1.g.h, c);
            if (!(e instanceof Object)) throw new TypeError("Iterator result " + e + " is not an object");
            if (!e.done) return a1.g.u = !1, e;
            var f = e.value;
        } catch (g) {
            return a1.g.h = null, wa(a1.g, g), Ca(a1);
        }
        a1.g.h = null;
        d.call(a1.g, f);
        return Ca(a1);
    }
    function Ca(a1) {
        for(; a1.g.g;)try {
            var b = a1.h(a1.g);
            if (b) return a1.g.u = !1, {
                value: b.value,
                done: !1
            };
        } catch (c) {
            a1.g.Oa = void 0, wa(a1.g, c);
        }
        a1.g.u = !1;
        if (a1.g.i) {
            b = a1.g.i;
            a1.g.i = null;
            if (b.fb) throw b.ab;
            return {
                value: b.return,
                done: !0
            };
        }
        return {
            value: void 0,
            done: !0
        };
    }
    function Da(a1) {
        this.next = function(b) {
            ua(a1.g);
            a1.g.h ? b = Ba(a1, a1.g.h.next, b, a1.g.O) : (a1.g.O(b), b = Ca(a1));
            return b;
        };
        this.throw = function(b) {
            ua(a1.g);
            a1.g.h ? b = Ba(a1, a1.g.h["throw"], b, a1.g.O) : (wa(a1.g, b), b = Ca(a1));
            return b;
        };
        this.return = function(b) {
            return Aa(a1, b);
        };
        this[Symbol.iterator] = function() {
            return this;
        };
    }
    function Ea(a1, b) {
        b = new Da(new za(b));
        qa && a1.prototype && qa(b, a1.prototype);
        return b;
    }
    Array.from || (Array.from = function(a1) {
        return [].slice.call(a1);
    });
    Object.assign || (Object.assign = function(a1) {
        for(var b = [].slice.call(arguments, 1), c = 0, d; c < b.length; c++)if (d = b[c]) for(var e = a1, f = Object.keys(d), g = 0; g < f.length; g++){
            var h = f[g];
            e[h] = d[h];
        }
        return a1;
    });
    var Fa = setTimeout;
    function Ga() {}
    function Ha(a1, b) {
        return function() {
            a1.apply(b, arguments);
        };
    }
    function A(a1) {
        if (!(this instanceof A)) throw new TypeError("Promises must be constructed via new");
        if ("function" !== typeof a1) throw new TypeError("not a function");
        this.N = 0;
        this.Ha = !1;
        this.I = void 0;
        this.ba = [];
        Ia(a1, this);
    }
    function Ja(a1, b) {
        for(; 3 === a1.N;)a1 = a1.I;
        0 === a1.N ? a1.ba.push(b) : (a1.Ha = !0, Ka(function() {
            var c = 1 === a1.N ? b.hb : b.ib;
            if (null === c) (1 === a1.N ? La : Ma)(b.promise, a1.I);
            else {
                try {
                    var d = c(a1.I);
                } catch (e) {
                    Ma(b.promise, e);
                    return;
                }
                La(b.promise, d);
            }
        }));
    }
    function La(a1, b) {
        try {
            if (b === a1) throw new TypeError("A promise cannot be resolved with itself.");
            if (b && ("object" === typeof b || "function" === typeof b)) {
                var c = b.then;
                if (b instanceof A) {
                    a1.N = 3;
                    a1.I = b;
                    Na(a1);
                    return;
                }
                if ("function" === typeof c) {
                    Ia(Ha(c, b), a1);
                    return;
                }
            }
            a1.N = 1;
            a1.I = b;
            Na(a1);
        } catch (d) {
            Ma(a1, d);
        }
    }
    function Ma(a1, b) {
        a1.N = 2;
        a1.I = b;
        Na(a1);
    }
    function Na(a1) {
        2 === a1.N && 0 === a1.ba.length && Ka(function() {
            a1.Ha || "undefined" !== typeof console && console && console.warn("Possible Unhandled Promise Rejection:", a1.I);
        });
        for(var b = 0, c = a1.ba.length; b < c; b++)Ja(a1, a1.ba[b]);
        a1.ba = null;
    }
    function Oa(a1, b, c) {
        this.hb = "function" === typeof a1 ? a1 : null;
        this.ib = "function" === typeof b ? b : null;
        this.promise = c;
    }
    function Ia(a1, b) {
        var c = !1;
        try {
            a1(function(d) {
                c || (c = !0, La(b, d));
            }, function(d) {
                c || (c = !0, Ma(b, d));
            });
        } catch (d) {
            c || (c = !0, Ma(b, d));
        }
    }
    A.prototype["catch"] = function(a1) {
        return this.then(null, a1);
    };
    A.prototype.then = function(a1, b) {
        var c = new this.constructor(Ga);
        Ja(this, new Oa(a1, b, c));
        return c;
    };
    A.prototype["finally"] = function(a1) {
        var b = this.constructor;
        return this.then(function(c) {
            return b.resolve(a1()).then(function() {
                return c;
            });
        }, function(c) {
            return b.resolve(a1()).then(function() {
                return b.reject(c);
            });
        });
    };
    function Pa(a1) {
        return new A(function(b, c) {
            function d(h, k) {
                try {
                    if (k && ("object" === typeof k || "function" === typeof k)) {
                        var l = k.then;
                        if ("function" === typeof l) {
                            l.call(k, function(m) {
                                d(h, m);
                            }, c);
                            return;
                        }
                    }
                    e[h] = k;
                    0 === --f && b(e);
                } catch (m) {
                    c(m);
                }
            }
            if (!a1 || "undefined" === typeof a1.length) return c(new TypeError("Promise.all accepts an array"));
            var e = Array.prototype.slice.call(a1);
            if (0 === e.length) return b([]);
            for(var f = e.length, g = 0; g < e.length; g++)d(g, e[g]);
        });
    }
    function Qa(a1) {
        return a1 && "object" === typeof a1 && a1.constructor === A ? a1 : new A(function(b) {
            b(a1);
        });
    }
    function Ra(a1) {
        return new A(function(b, c) {
            c(a1);
        });
    }
    function Sa(a1) {
        return new A(function(b, c) {
            if (!a1 || "undefined" === typeof a1.length) return c(new TypeError("Promise.race accepts an array"));
            for(var d = 0, e = a1.length; d < e; d++)Qa(a1[d]).then(b, c);
        });
    }
    var Ka = "function" === typeof setImmediate && function(a1) {
        setImmediate(a1);
    } || function(a1) {
        Fa(a1, 0);
    }; /*

Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/ 
    if (!window.Promise) {
        window.Promise = A;
        A.prototype.then = A.prototype.then;
        A.all = Pa;
        A.race = Sa;
        A.resolve = Qa;
        A.reject = Ra;
        var Ta = document.createTextNode(""), Ua = [];
        new MutationObserver(function() {
            for(var a1 = Ua.length, b = 0; b < a1; b++)Ua[b]();
            Ua.splice(0, a1);
        }).observe(Ta, {
            characterData: !0
        });
        Ka = function(a1) {
            Ua.push(a1);
            Ta.textContent = 0 < Ta.textContent.length ? "" : "a";
        };
    }
    (function(a1, b) {
        if (!(b in a1)) {
            var c = typeof global === typeof c ? window : global, d = 0, e = String(Math.random()), f = "__\x01symbol@@" + e, g = a1.getOwnPropertyNames, h = a1.getOwnPropertyDescriptor, k = a1.create, l = a1.keys, m = a1.freeze || a1, q = a1.defineProperty, H = a1.defineProperties, C = h(a1, "getOwnPropertyNames"), t1 = a1.prototype, F = t1.hasOwnProperty, E = t1.propertyIsEnumerable, N = t1.toString, y = function(I, u, G) {
                F.call(I, f) || q(I, f, {
                    enumerable: !1,
                    configurable: !1,
                    writable: !1,
                    value: {}
                });
                I[f]["@@" + u] = G;
            }, X = function(I, u) {
                var G = k(I);
                g(u).forEach(function(p) {
                    sa.call(u, p) && Va(G, p, u[p]);
                });
                return G;
            }, x = function() {}, ta = function(I) {
                return I != f && !F.call(ha, I);
            }, ia = function(I) {
                return I != f && F.call(ha, I);
            }, sa = function(I) {
                var u = String(I);
                return ia(u) ? F.call(this, u) && !!this[f] && this[f]["@@" + u] : E.call(this, I);
            }, n = function(I) {
                q(t1, I, {
                    enumerable: !1,
                    configurable: !0,
                    get: x,
                    set: function(u) {
                        xa(this, I, {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: u
                        });
                        y(this, I, !0);
                    }
                });
                ha[I] = q(a1(I), "constructor", kc);
                return m(ha[I]);
            }, J = function G(u) {
                if (this instanceof G) throw new TypeError("Symbol is not a constructor");
                return n("__\x01symbol:".concat(u || "", e, ++d));
            }, ha = k(null), kc = {
                value: J
            }, ib = function(u) {
                return ha[u];
            }, Va = function(u, G, p) {
                var r = String(G);
                if (ia(r)) {
                    G = xa;
                    if (p.enumerable) {
                        var B = k(p);
                        B.enumerable = !1;
                    } else B = p;
                    G(u, r, B);
                    y(u, r, !!p.enumerable);
                } else q(u, G, p);
                return u;
            }, jb = function(u) {
                return g(u).filter(ia).map(ib);
            };
            C.value = Va;
            q(a1, "defineProperty", C);
            C.value = jb;
            q(a1, b, C);
            C.value = function(u) {
                return g(u).filter(ta);
            };
            q(a1, "getOwnPropertyNames", C);
            C.value = function(u, G) {
                var p = jb(G);
                p.length ? l(G).concat(p).forEach(function(r) {
                    sa.call(G, r) && Va(u, r, G[r]);
                }) : H(u, G);
                return u;
            };
            q(a1, "defineProperties", C);
            C.value = sa;
            q(t1, "propertyIsEnumerable", C);
            C.value = J;
            q(c, "Symbol", C);
            C.value = function(u) {
                u = "__\x01symbol:".concat("__\x01symbol:", u, e);
                return u in t1 ? ha[u] : n(u);
            };
            q(J, "for", C);
            C.value = function(u) {
                if (ta(u)) throw new TypeError(u + " is not a symbol");
                if (F.call(ha, u) && (u = u.slice(10), "__\x01symbol:" === u.slice(0, 10) && (u = u.slice(10), u !== e))) return u = u.slice(0, u.length - e.length), 0 < u.length ? u : void 0;
            };
            q(J, "keyFor", C);
            C.value = function(u, G) {
                var p = h(u, G);
                p && ia(G) && (p.enumerable = sa.call(u, G));
                return p;
            };
            q(a1, "getOwnPropertyDescriptor", C);
            C.value = function(u, G) {
                return 1 === arguments.length || "undefined" === typeof G ? k(u) : X(u, G);
            };
            q(a1, "create", C);
            C.value = function() {
                var u = N.call(this);
                return "[object String]" === u && ia(this) ? "[object Symbol]" : u;
            };
            q(t1, "toString", C);
            try {
                if (!0 === k(q({}, "__\x01symbol:", {
                    get: function() {
                        return q(this, "__\x01symbol:", {
                            value: !0
                        })["__\x01symbol:"];
                    }
                }))["__\x01symbol:"]) var xa = q;
                else throw "IE11";
            } catch (u) {
                xa = function(G, p, r) {
                    var B = h(t1, p);
                    delete t1[p];
                    q(G, p, r);
                    q(t1, p, B);
                };
            }
        }
    })(Object, "getOwnPropertySymbols");
    (function(a1, b) {
        var c = a1.defineProperty, d = a1.prototype, e = d.toString, f;
        "iterator match replace search split hasInstance isConcatSpreadable unscopables species toPrimitive toStringTag".split(" ").forEach(function(g) {
            g in b || (c(b, g, {
                value: b(g)
            }), "toStringTag" === g && (f = a1.getOwnPropertyDescriptor(d, "toString"), f.value = function() {
                var h = e.call(this), k = null == this ? this : this[b.toStringTag];
                return null == k ? h : "[object " + k + "]";
            }, c(d, "toString", f)));
        });
    })(Object, Symbol);
    (function(a1, b, c) {
        function d() {
            return this;
        }
        b[a1] || (b[a1] = function() {
            var e = 0, f = this, g = {
                next: function() {
                    var h = f.length <= e;
                    return h ? {
                        done: h
                    } : {
                        done: h,
                        value: f[e++]
                    };
                }
            };
            g[a1] = d;
            return g;
        });
        c[a1] || (c[a1] = function() {
            var e = String.fromCodePoint, f = this, g = 0, h = f.length, k = {
                next: function() {
                    var l = h <= g, m = l ? "" : e(f.codePointAt(g));
                    g += m.length;
                    return l ? {
                        done: l
                    } : {
                        done: l,
                        value: m
                    };
                }
            };
            k[a1] = d;
            return k;
        });
    })(Symbol.iterator, Array.prototype, String.prototype); /*

Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/ 
    var Wa = Object.prototype.toString;
    Object.prototype.toString = function() {
        return void 0 === this ? "[object Undefined]" : null === this ? "[object Null]" : Wa.call(this);
    };
    Object.keys = function(a1) {
        return Object.getOwnPropertyNames(a1).filter(function(b) {
            return (b = Object.getOwnPropertyDescriptor(a1, b)) && b.enumerable;
        });
    };
    String.prototype[Symbol.iterator] && String.prototype.codePointAt || (String.prototype[Symbol.iterator] = function Xa() {
        var b, c = this;
        return Ea(Xa, function(d) {
            1 == d.g && (b = 0);
            if (3 != d.g) return b < c.length ? d = ya(d, c[b]) : (d.g = 0, d = void 0), d;
            b++;
            d.g = 2;
        });
    });
    Set.prototype[Symbol.iterator] || (Set.prototype[Symbol.iterator] = function Ya() {
        var b, c = this, d;
        return Ea(Ya, function(e) {
            1 == e.g && (b = [], c.forEach(function(f) {
                b.push(f);
            }), d = 0);
            if (3 != e.g) return d < b.length ? e = ya(e, b[d]) : (e.g = 0, e = void 0), e;
            d++;
            e.g = 2;
        });
    });
    Map.prototype[Symbol.iterator] || (Map.prototype[Symbol.iterator] = function Za() {
        var b, c = this, d;
        return Ea(Za, function(e) {
            1 == e.g && (b = [], c.forEach(function(f, g) {
                b.push([
                    g,
                    f
                ]);
            }), d = 0);
            if (3 != e.g) return d < b.length ? e = ya(e, b[d]) : (e.g = 0, e = void 0), e;
            d++;
            e.g = 2;
        });
    }); /*

Copyright (c) 2020 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/ 
    var $a = document.createEvent("Event");
    $a.initEvent("foo", !0, !0);
    $a.preventDefault();
    if (!$a.defaultPrevented) {
        var ab = Event.prototype.preventDefault;
        Event.prototype.preventDefault = function() {
            this.cancelable && (ab.call(this), Object.defineProperty(this, "defaultPrevented", {
                get: function() {
                    return !0;
                },
                configurable: !0
            }));
        };
    }
    var bb = /Trident/.test(navigator.userAgent);
    if (!window.Event || bb && "function" !== typeof window.Event) {
        var cb = window.Event;
        window.Event = function(a1, b) {
            b = b || {};
            var c = document.createEvent("Event");
            c.initEvent(a1, !!b.bubbles, !!b.cancelable);
            return c;
        };
        if (cb) {
            for(var db in cb)window.Event[db] = cb[db];
            window.Event.prototype = cb.prototype;
        }
    }
    if (!window.CustomEvent || bb && "function" !== typeof window.CustomEvent) window.CustomEvent = function(a1, b) {
        b = b || {};
        var c = document.createEvent("CustomEvent");
        c.initCustomEvent(a1, !!b.bubbles, !!b.cancelable, b.detail);
        return c;
    }, window.CustomEvent.prototype = window.Event.prototype;
    if (!window.MouseEvent || bb && "function" !== typeof window.MouseEvent) {
        var eb = window.MouseEvent;
        window.MouseEvent = function(a1, b) {
            b = b || {};
            var c = document.createEvent("MouseEvent");
            c.initMouseEvent(a1, !!b.bubbles, !!b.cancelable, b.view || window, b.detail, b.screenX, b.screenY, b.clientX, b.clientY, b.ctrlKey, b.altKey, b.shiftKey, b.metaKey, b.button, b.relatedTarget);
            return c;
        };
        if (eb) for(var fb in eb)window.MouseEvent[fb] = eb[fb];
        window.MouseEvent.prototype = eb.prototype;
    }
    var gb, hb = function() {
        function a1() {
            e++;
        }
        var b = !1, c = !1, d = {
            get capture () {
                return b = !0;
            },
            get once () {
                return c = !0;
            }
        }, e = 0, f = document.createElement("div");
        f.addEventListener("click", a1, d);
        var g = b && c;
        g && (f.dispatchEvent(new Event("click")), f.dispatchEvent(new Event("click")), g = 1 == e);
        f.removeEventListener("click", a1, d);
        return g;
    }(), kb = null !== (gb = window.EventTarget) && void 0 !== gb ? gb : window.Node;
    if (!hb && "addEventListener" in kb.prototype) {
        var lb = function(a1) {
            if (!a1 || "object" !== typeof a1 && "function" !== typeof a1) {
                var b = !!a1;
                a1 = !1;
            } else b = !!a1.capture, a1 = !!a1.once;
            return {
                capture: b,
                once: a1
            };
        }, mb = kb.prototype.addEventListener, nb = kb.prototype.removeEventListener, qb = new WeakMap, rb = new WeakMap, sb = function(a1, b, c) {
            var d = c ? qb : rb;
            c = d.get(a1);
            void 0 === c && d.set(a1, c = new Map);
            a1 = c.get(b);
            void 0 === a1 && c.set(b, a1 = new WeakMap);
            return a1;
        };
        kb.prototype.addEventListener = function(a1, b, c) {
            var d = this;
            if (null != b) {
                c = lb(c);
                var e = c.capture;
                c = c.once;
                var f = sb(this, a1, e);
                if (!f.has(b)) {
                    var g = c ? function(h) {
                        f.delete(b);
                        nb.call(d, a1, g, e);
                        if ("function" === typeof b) return b.call(d, h);
                        if ("function" === typeof (null === b || void 0 === b ? void 0 : b.handleEvent)) return b.handleEvent(h);
                    } : null;
                    f.set(b, g);
                    mb.call(this, a1, null !== g && void 0 !== g ? g : b, e);
                }
            }
        };
        kb.prototype.removeEventListener = function(a1, b, c) {
            if (null != b) {
                c = lb(c).capture;
                var d = sb(this, a1, c), e = d.get(b);
                void 0 !== e && (d.delete(b), nb.call(this, a1, null !== e && void 0 !== e ? e : b, c));
            }
        };
    }
    Object.getOwnPropertyDescriptor(Node.prototype, "baseURI") || Object.defineProperty(Node.prototype, "baseURI", {
        get: function() {
            var a1 = (this.ownerDocument || this).querySelector("base[href]");
            return a1 && a1.href || window.location.href;
        },
        configurable: !0,
        enumerable: !0
    }); /*

Copyright (c) 2020 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/ 
    var tb, ub, vb = Element.prototype, wb = null !== (tb = Object.getOwnPropertyDescriptor(vb, "attributes")) && void 0 !== tb ? tb : Object.getOwnPropertyDescriptor(Node.prototype, "attributes"), xb = null !== (ub = null === wb || void 0 === wb ? void 0 : wb.get) && void 0 !== ub ? ub : function() {
        return this.attributes;
    }, yb = Array.prototype.map;
    vb.hasOwnProperty("getAttributeNames") || (vb.getAttributeNames = function() {
        return yb.call(xb.call(this), function(a1) {
            return a1.name;
        });
    });
    var zb, Ab = Element.prototype;
    Ab.hasOwnProperty("matches") || (Ab.matches = null !== (zb = Ab.webkitMatchesSelector) && void 0 !== zb ? zb : Ab.msMatchesSelector);
    var Bb = Node.prototype.appendChild;
    function Cb(a1) {
        a1 = a1.prototype;
        a1.hasOwnProperty("append") || Object.defineProperty(a1, "append", {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            value: function(b) {
                for(var c = [], d = 0; d < arguments.length; ++d)c[d] = arguments[d];
                c = ka(c);
                for(d = c.next(); !d.done; d = c.next())d = d.value, Bb.call(this, "string" === typeof d ? document.createTextNode(d) : d);
            }
        });
    }
    Cb(Document);
    Cb(DocumentFragment);
    Cb(Element);
    var Db, Eb, Fb = Node.prototype.insertBefore, Gb = null !== (Eb = null === (Db = Object.getOwnPropertyDescriptor(Node.prototype, "firstChild")) || void 0 === Db ? void 0 : Db.get) && void 0 !== Eb ? Eb : function() {
        return this.firstChild;
    };
    function Hb(a1) {
        a1 = a1.prototype;
        a1.hasOwnProperty("prepend") || Object.defineProperty(a1, "prepend", {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            value: function(b) {
                for(var c = [], d = 0; d < arguments.length; ++d)c[d] = arguments[d];
                d = Gb.call(this);
                c = ka(c);
                for(var e = c.next(); !e.done; e = c.next())e = e.value, Fb.call(this, "string" === typeof e ? document.createTextNode(e) : e, d);
            }
        });
    }
    Hb(Document);
    Hb(DocumentFragment);
    Hb(Element);
    var Ib, Jb, Kb = Node.prototype.appendChild, Lb = Node.prototype.removeChild, Mb = null !== (Jb = null === (Ib = Object.getOwnPropertyDescriptor(Node.prototype, "firstChild")) || void 0 === Ib ? void 0 : Ib.get) && void 0 !== Jb ? Jb : function() {
        return this.firstChild;
    };
    function Nb(a1) {
        a1 = a1.prototype;
        a1.hasOwnProperty("replaceChildren") || Object.defineProperty(a1, "replaceChildren", {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            value: function(b) {
                for(var c = [], d = 0; d < arguments.length; ++d)c[d] = arguments[d];
                for(; null !== (d = Mb.call(this));)Lb.call(this, d);
                c = ka(c);
                for(d = c.next(); !d.done; d = c.next())d = d.value, Kb.call(this, "string" === typeof d ? document.createTextNode(d) : d);
            }
        });
    }
    Nb(Document);
    Nb(DocumentFragment);
    Nb(Element);
    var Ob, Pb, Qb, Rb, Sb = Node.prototype.insertBefore, Tb = null !== (Pb = null === (Ob = Object.getOwnPropertyDescriptor(Node.prototype, "parentNode")) || void 0 === Ob ? void 0 : Ob.get) && void 0 !== Pb ? Pb : function() {
        return this.parentNode;
    }, Ub = null !== (Rb = null === (Qb = Object.getOwnPropertyDescriptor(Node.prototype, "nextSibling")) || void 0 === Qb ? void 0 : Qb.get) && void 0 !== Rb ? Rb : function() {
        return this.nextSibling;
    };
    function Vb(a1) {
        a1 = a1.prototype;
        a1.hasOwnProperty("after") || Object.defineProperty(a1, "after", {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            value: function(b) {
                for(var c = [], d = 0; d < arguments.length; ++d)c[d] = arguments[d];
                d = Tb.call(this);
                if (null !== d) {
                    var e = Ub.call(this);
                    c = ka(c);
                    for(var f = c.next(); !f.done; f = c.next())f = f.value, Sb.call(d, "string" === typeof f ? document.createTextNode(f) : f, e);
                }
            }
        });
    }
    Vb(CharacterData);
    Vb(Element);
    var Wb, Xb, Yb = Node.prototype.insertBefore, Zb = null !== (Xb = null === (Wb = Object.getOwnPropertyDescriptor(Node.prototype, "parentNode")) || void 0 === Wb ? void 0 : Wb.get) && void 0 !== Xb ? Xb : function() {
        return this.parentNode;
    };
    function $b(a1) {
        a1 = a1.prototype;
        a1.hasOwnProperty("before") || Object.defineProperty(a1, "before", {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            value: function(b) {
                for(var c = [], d = 0; d < arguments.length; ++d)c[d] = arguments[d];
                d = Zb.call(this);
                if (null !== d) {
                    c = ka(c);
                    for(var e = c.next(); !e.done; e = c.next())e = e.value, Yb.call(d, "string" === typeof e ? document.createTextNode(e) : e, this);
                }
            }
        });
    }
    $b(CharacterData);
    $b(Element);
    var ac, bc, cc = Node.prototype.removeChild, dc = null !== (bc = null === (ac = Object.getOwnPropertyDescriptor(Node.prototype, "parentNode")) || void 0 === ac ? void 0 : ac.get) && void 0 !== bc ? bc : function() {
        return this.parentNode;
    };
    function ec(a1) {
        a1 = a1.prototype;
        a1.hasOwnProperty("remove") || Object.defineProperty(a1, "remove", {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            value: function() {
                var b = dc.call(this);
                b && cc.call(b, this);
            }
        });
    }
    ec(CharacterData);
    ec(Element);
    var fc, gc, hc = Node.prototype.insertBefore, ic = Node.prototype.removeChild, jc = null !== (gc = null === (fc = Object.getOwnPropertyDescriptor(Node.prototype, "parentNode")) || void 0 === fc ? void 0 : fc.get) && void 0 !== gc ? gc : function() {
        return this.parentNode;
    };
    function lc(a1) {
        a1 = a1.prototype;
        a1.hasOwnProperty("replaceWith") || Object.defineProperty(a1, "replaceWith", {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            value: function(b) {
                for(var c = [], d = 0; d < arguments.length; ++d)c[d] = arguments[d];
                d = jc.call(this);
                if (null !== d) {
                    c = ka(c);
                    for(var e = c.next(); !e.done; e = c.next())e = e.value, hc.call(d, "string" === typeof e ? document.createTextNode(e) : e, this);
                    ic.call(d, this);
                }
            }
        });
    }
    lc(CharacterData);
    lc(Element);
    var mc = window.Element.prototype, nc = window.HTMLElement.prototype, oc = window.SVGElement.prototype;
    !nc.hasOwnProperty("classList") || mc.hasOwnProperty("classList") || oc.hasOwnProperty("classList") || Object.defineProperty(mc, "classList", Object.getOwnPropertyDescriptor(nc, "classList"));
    var pc = Element.prototype, qc = Element.prototype.hasAttribute, rc = Element.prototype.setAttribute, sc = Element.prototype.removeAttribute;
    pc.hasOwnProperty("toggleAttribute") || (pc.toggleAttribute = function(a1, b) {
        if (void 0 === b) {
            if (qc.call(this, a1)) return sc.call(this, a1), !1;
            rc.call(this, a1, "");
            return !0;
        }
        if (b) return qc.call(this, a1) || rc.call(this, a1, ""), !0;
        sc.call(this, a1);
        return !1;
    }); /*

 Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at
 http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 Google as part of the polymer project is also subject to an additional IP
 rights grant found at http://polymer.github.io/PATENTS.txt
*/ 
    var tc = document.createElement("style");
    tc.textContent = "body {transition: opacity ease-in 0.2s; } \nbody[unresolved] {opacity: 0; display: block; overflow: hidden; position: relative; } \n";
    var uc = document.querySelector("head");
    uc.insertBefore(tc, uc.firstChild);
    var vc = window;
    vc.WebComponents = vc.WebComponents || {
        flags: {}
    };
    var wc = document.querySelector('script[src*="webcomponents-bundle"]'), xc = /wc-(.+)/, yc = {};
    if (!yc.noOpts) {
        location.search.slice(1).split("&").forEach(function(a1) {
            a1 = a1.split("=");
            var b;
            a1[0] && (b = a1[0].match(xc)) && (yc[b[1]] = a1[1] || !0);
        });
        if (wc) for(var zc = 0, Ac = void 0; Ac = wc.attributes[zc]; zc++)"src" !== Ac.name && (yc[Ac.name] = Ac.value || !0);
        var Bc = {};
        yc.log && yc.log.split && yc.log.split(",").forEach(function(a1) {
            Bc[a1] = !0;
        });
        yc.log = Bc;
    }
    vc.WebComponents.flags = yc;
    var Cc = yc.shadydom;
    if (Cc) {
        vc.ShadyDOM = vc.ShadyDOM || {};
        vc.ShadyDOM.force = Cc;
        var Dc = yc.noPatch;
        vc.ShadyDOM.noPatch = "true" === Dc ? !0 : Dc;
    }
    var Ec = yc.register || yc.ce;
    Ec && window.customElements && (vc.customElements.forcePolyfill = Ec); /*

 Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 Code distributed by Google as part of the polymer project is also
 subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/ 
    (function() {
        function a1() {}
        function b(p, r) {
            if (!p.childNodes.length) return [];
            switch(p.nodeType){
                case Node.DOCUMENT_NODE:
                    return F.call(p, r);
                case Node.DOCUMENT_FRAGMENT_NODE:
                    return E.call(p, r);
                default:
                    return t1.call(p, r);
            }
        }
        var c = "undefined" === typeof HTMLTemplateElement, d = !(document.createDocumentFragment().cloneNode() instanceof DocumentFragment), e = !1;
        /Trident/.test(navigator.userAgent) && function() {
            function p(z, R) {
                if (z instanceof DocumentFragment) for(var ob; ob = z.firstChild;)B.call(this, ob, R);
                else B.call(this, z, R);
                return z;
            }
            e = !0;
            var r = Node.prototype.cloneNode;
            Node.prototype.cloneNode = function(z) {
                z = r.call(this, z);
                this instanceof DocumentFragment && (z.__proto__ = DocumentFragment.prototype);
                return z;
            };
            DocumentFragment.prototype.querySelectorAll = HTMLElement.prototype.querySelectorAll;
            DocumentFragment.prototype.querySelector = HTMLElement.prototype.querySelector;
            Object.defineProperties(DocumentFragment.prototype, {
                nodeType: {
                    get: function() {
                        return Node.DOCUMENT_FRAGMENT_NODE;
                    },
                    configurable: !0
                },
                localName: {
                    get: function() {},
                    configurable: !0
                },
                nodeName: {
                    get: function() {
                        return "#document-fragment";
                    },
                    configurable: !0
                }
            });
            var B = Node.prototype.insertBefore;
            Node.prototype.insertBefore = p;
            var K = Node.prototype.appendChild;
            Node.prototype.appendChild = function(z) {
                z instanceof DocumentFragment ? p.call(this, z, null) : K.call(this, z);
                return z;
            };
            var aa = Node.prototype.removeChild, ma = Node.prototype.replaceChild;
            Node.prototype.replaceChild = function(z, R) {
                z instanceof DocumentFragment ? (p.call(this, z, R), aa.call(this, R)) : ma.call(this, z, R);
                return R;
            };
            Document.prototype.createDocumentFragment = function() {
                var z = this.createElement("df");
                z.__proto__ = DocumentFragment.prototype;
                return z;
            };
            var va = Document.prototype.importNode;
            Document.prototype.importNode = function(z, R) {
                R = va.call(this, z, R || !1);
                z instanceof DocumentFragment && (R.__proto__ = DocumentFragment.prototype);
                return R;
            };
        }();
        var f = Node.prototype.cloneNode, g = Document.prototype.createElement, h = Document.prototype.importNode, k = Node.prototype.removeChild, l = Node.prototype.appendChild, m = Node.prototype.replaceChild, q = DOMParser.prototype.parseFromString, H = Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, "innerHTML") || {
            get: function() {
                return this.innerHTML;
            },
            set: function(p) {
                this.innerHTML = p;
            }
        }, C = Object.getOwnPropertyDescriptor(window.Node.prototype, "childNodes") || {
            get: function() {
                return this.childNodes;
            }
        }, t1 = Element.prototype.querySelectorAll, F = Document.prototype.querySelectorAll, E = DocumentFragment.prototype.querySelectorAll, N = function() {
            if (!c) {
                var p = document.createElement("template"), r = document.createElement("template");
                r.content.appendChild(document.createElement("div"));
                p.content.appendChild(r);
                p = p.cloneNode(!0);
                return 0 === p.content.childNodes.length || 0 === p.content.firstChild.content.childNodes.length || d;
            }
        }();
        if (c) {
            var y = document.implementation.createHTMLDocument("template"), X = !0, x = document.createElement("style");
            x.textContent = "template{display:none;}";
            var ta = document.head;
            ta.insertBefore(x, ta.firstElementChild);
            a1.prototype = Object.create(HTMLElement.prototype);
            var ia = !document.createElement("div").hasOwnProperty("innerHTML");
            a1.Z = function(p) {
                if (!p.content && p.namespaceURI === document.documentElement.namespaceURI) {
                    p.content = y.createDocumentFragment();
                    for(var r; r = p.firstChild;)l.call(p.content, r);
                    if (ia) p.__proto__ = a1.prototype;
                    else if (p.cloneNode = function(B) {
                        return a1.va(this, B);
                    }, X) try {
                        n(p), J(p);
                    } catch (B) {
                        X = !1;
                    }
                    a1.bootstrap(p.content);
                }
            };
            var sa = {
                option: [
                    "select"
                ],
                thead: [
                    "table"
                ],
                col: [
                    "colgroup",
                    "table"
                ],
                tr: [
                    "tbody",
                    "table"
                ],
                th: [
                    "tr",
                    "tbody",
                    "table"
                ],
                td: [
                    "tr",
                    "tbody",
                    "table"
                ]
            }, n = function(p) {
                Object.defineProperty(p, "innerHTML", {
                    get: function() {
                        return xa(this);
                    },
                    set: function(r) {
                        var B = sa[(/<([a-z][^/\0>\x20\t\r\n\f]+)/i.exec(r) || [
                            "",
                            ""
                        ])[1].toLowerCase()];
                        if (B) for(var K = 0; K < B.length; K++)r = "<" + B[K] + ">" + r + "</" + B[K] + ">";
                        y.body.innerHTML = r;
                        for(a1.bootstrap(y); this.content.firstChild;)k.call(this.content, this.content.firstChild);
                        r = y.body;
                        if (B) for(K = 0; K < B.length; K++)r = r.lastChild;
                        for(; r.firstChild;)l.call(this.content, r.firstChild);
                    },
                    configurable: !0
                });
            }, J = function(p) {
                Object.defineProperty(p, "outerHTML", {
                    get: function() {
                        return "<template>" + this.innerHTML + "</template>";
                    },
                    set: function(r) {
                        if (this.parentNode) {
                            y.body.innerHTML = r;
                            for(r = this.ownerDocument.createDocumentFragment(); y.body.firstChild;)l.call(r, y.body.firstChild);
                            m.call(this.parentNode, r, this);
                        } else throw Error("Failed to set the 'outerHTML' property on 'Element': This element has no parent node.");
                    },
                    configurable: !0
                });
            };
            n(a1.prototype);
            J(a1.prototype);
            a1.bootstrap = function(p) {
                p = b(p, "template");
                for(var r = 0, B = p.length, K; r < B && (K = p[r]); r++)a1.Z(K);
            };
            document.addEventListener("DOMContentLoaded", function() {
                a1.bootstrap(document);
            });
            Document.prototype.createElement = function() {
                var p = g.apply(this, arguments);
                "template" === p.localName && a1.Z(p);
                return p;
            };
            DOMParser.prototype.parseFromString = function() {
                var p = q.apply(this, arguments);
                a1.bootstrap(p);
                return p;
            };
            Object.defineProperty(HTMLElement.prototype, "innerHTML", {
                get: function() {
                    return xa(this);
                },
                set: function(p) {
                    H.set.call(this, p);
                    a1.bootstrap(this);
                },
                configurable: !0,
                enumerable: !0
            });
            var ha = /[&\u00A0"]/g, kc = /[&\u00A0<>]/g, ib = function(p) {
                switch(p){
                    case "&":
                        return "&amp;";
                    case "<":
                        return "&lt;";
                    case ">":
                        return "&gt;";
                    case '"':
                        return "&quot;";
                    case "\xa0":
                        return "&nbsp;";
                }
            };
            x = function(p) {
                for(var r = {}, B = 0; B < p.length; B++)r[p[B]] = !0;
                return r;
            };
            var Va = x("area base br col command embed hr img input keygen link meta param source track wbr".split(" ")), jb = x("style script xmp iframe noembed noframes plaintext noscript".split(" ")), xa = function(p, r) {
                "template" === p.localName && (p = p.content);
                for(var B = "", K = r ? r(p) : C.get.call(p), aa = 0, ma = K.length, va; aa < ma && (va = K[aa]); aa++){
                    a: {
                        var z = va;
                        var R = p;
                        var ob = r;
                        switch(z.nodeType){
                            case Node.ELEMENT_NODE:
                                for(var Kc = z.localName, pb = "<" + Kc, Zh = z.attributes, He = 0; R = Zh[He]; He++)pb += " " + R.name + '="' + R.value.replace(ha, ib) + '"';
                                pb += ">";
                                z = Va[Kc] ? pb : pb + xa(z, ob) + "</" + Kc + ">";
                                break a;
                            case Node.TEXT_NODE:
                                z = z.data;
                                z = R && jb[R.localName] ? z : z.replace(kc, ib);
                                break a;
                            case Node.COMMENT_NODE:
                                z = "<!--" + z.data + "-->";
                                break a;
                            default:
                                throw window.console.error(z), Error("not implemented");
                        }
                    }
                    B += z;
                }
                return B;
            };
        }
        if (c || N) {
            a1.va = function(p, r) {
                var B = f.call(p, !1);
                this.Z && this.Z(B);
                r && (l.call(B.content, f.call(p.content, !0)), I(B.content, p.content));
                return B;
            };
            var I = function(p, r) {
                if (r.querySelectorAll && (r = b(r, "template"), 0 !== r.length)) {
                    p = b(p, "template");
                    for(var B = 0, K = p.length, aa, ma; B < K; B++)ma = r[B], aa = p[B], a1 && a1.Z && a1.Z(ma), m.call(aa.parentNode, u.call(ma, !0), aa);
                }
            }, u = Node.prototype.cloneNode = function(p) {
                if (!e && d && this instanceof DocumentFragment) {
                    if (p) var r = G.call(this.ownerDocument, this, !0);
                    else return this.ownerDocument.createDocumentFragment();
                } else this.nodeType === Node.ELEMENT_NODE && "template" === this.localName && this.namespaceURI == document.documentElement.namespaceURI ? r = a1.va(this, p) : r = f.call(this, p);
                p && I(r, this);
                return r;
            }, G = Document.prototype.importNode = function(p, r) {
                r = r || !1;
                if ("template" === p.localName) return a1.va(p, r);
                var B = h.call(this, p, r);
                if (r) {
                    I(B, p);
                    p = b(B, 'script:not([type]),script[type="application/javascript"],script[type="text/javascript"]');
                    for(var K, aa = 0; aa < p.length; aa++){
                        K = p[aa];
                        r = g.call(document, "script");
                        r.textContent = K.textContent;
                        for(var ma = K.attributes, va = 0, z; va < ma.length; va++)z = ma[va], r.setAttribute(z.name, z.value);
                        m.call(K.parentNode, r, K);
                    }
                }
                return B;
            };
        }
        c && (window.HTMLTemplateElement = a1);
    })(); /*

Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/ 
    function Fc() {}
    Fc.prototype.toJSON = function() {
        return {};
    };
    function D(a1) {
        a1.__shady || (a1.__shady = new Fc);
        return a1.__shady;
    }
    function L(a1) {
        return a1 && a1.__shady;
    }
    var M = window.ShadyDOM || {};
    M.cb = !(!Element.prototype.attachShadow || !Node.prototype.getRootNode);
    var Gc = Object.getOwnPropertyDescriptor(Node.prototype, "firstChild");
    M.D = !!(Gc && Gc.configurable && Gc.get);
    M.Ba = M.force || !M.cb;
    M.J = M.noPatch || !1;
    M.ha = M.preferPerformance;
    M.Da = "on-demand" === M.J;
    var Hc;
    var Ic = M.querySelectorImplementation;
    Hc = -1 < [
        "native",
        "selectorEngine"
    ].indexOf(Ic) ? Ic : void 0;
    M.wb = Hc;
    M.Ra = navigator.userAgent.match("Trident");
    function Jc() {
        return Document.prototype.msElementsFromPoint ? "msElementsFromPoint" : "elementsFromPoint";
    }
    function Lc(a1) {
        return (a1 = L(a1)) && void 0 !== a1.firstChild;
    }
    function O(a1) {
        return a1 instanceof ShadowRoot;
    }
    function Mc(a1) {
        return (a1 = (a1 = L(a1)) && a1.root) && Nc(a1);
    }
    var Oc = Element.prototype, Pc = Oc.matches || Oc.matchesSelector || Oc.mozMatchesSelector || Oc.msMatchesSelector || Oc.oMatchesSelector || Oc.webkitMatchesSelector, Qc = document.createTextNode(""), Rc = 0, Sc = [];
    new MutationObserver(function() {
        for(; Sc.length;)try {
            Sc.shift()();
        } catch (a1) {
            throw Qc.textContent = Rc++, a1;
        }
    }).observe(Qc, {
        characterData: !0
    });
    function Tc(a1) {
        Sc.push(a1);
        Qc.textContent = Rc++;
    }
    var Uc = document.contains ? function(a1, b) {
        return a1.__shady_native_contains(b);
    } : function(a1, b) {
        return a1 === b || a1.documentElement && a1.documentElement.__shady_native_contains(b);
    };
    function Vc(a1, b) {
        for(; b;){
            if (b == a1) return !0;
            b = b.__shady_parentNode;
        }
        return !1;
    }
    function Wc(a1) {
        for(var b = a1.length - 1; 0 <= b; b--){
            var c = a1[b], d = c.getAttribute("id") || c.getAttribute("name");
            d && "length" !== d && isNaN(d) && (a1[d] = c);
        }
        a1.item = function(e) {
            return a1[e];
        };
        a1.namedItem = function(e) {
            if ("length" !== e && isNaN(e) && a1[e]) return a1[e];
            for(var f = ka(a1), g = f.next(); !g.done; g = f.next())if (g = g.value, (g.getAttribute("id") || g.getAttribute("name")) == e) return g;
            return null;
        };
        return a1;
    }
    function Xc(a1) {
        var b = [];
        for(a1 = a1.__shady_native_firstChild; a1; a1 = a1.__shady_native_nextSibling)b.push(a1);
        return b;
    }
    function Yc(a1) {
        var b = [];
        for(a1 = a1.__shady_firstChild; a1; a1 = a1.__shady_nextSibling)b.push(a1);
        return b;
    }
    function Zc(a1, b, c) {
        c.configurable = !0;
        if (c.value) a1[b] = c.value;
        else try {
            Object.defineProperty(a1, b, c);
        } catch (d) {}
    }
    function P(a1, b, c, d) {
        c = void 0 === c ? "" : c;
        for(var e in b)d && 0 <= d.indexOf(e) || Zc(a1, c + e, b[e]);
    }
    function $c(a1, b) {
        for(var c in b)c in a1 && Zc(a1, c, b[c]);
    }
    function Q(a1) {
        var b = {};
        Object.getOwnPropertyNames(a1).forEach(function(c) {
            b[c] = Object.getOwnPropertyDescriptor(a1, c);
        });
        return b;
    }
    function ad(a1, b) {
        for(var c = Object.getOwnPropertyNames(b), d = 0, e; d < c.length; d++)e = c[d], a1[e] = b[e];
    }
    function bd(a1) {
        return a1 instanceof Node ? a1 : document.createTextNode("" + a1);
    }
    function cd(a1) {
        for(var b = [], c = 0; c < arguments.length; ++c)b[c] = arguments[c];
        if (1 === b.length) return bd(b[0]);
        c = document.createDocumentFragment();
        b = ka(b);
        for(var d = b.next(); !d.done; d = b.next())c.appendChild(bd(d.value));
        return c;
    }
    function dd(a1) {
        var b;
        for(b = void 0 === b ? 1 : b; 0 < b; b--)a1 = a1.reduce(function(c, d) {
            Array.isArray(d) ? c.push.apply(c, w(d)) : c.push(d);
            return c;
        }, []);
        return a1;
    }
    function ed(a1) {
        var b = [], c = new Set;
        a1 = ka(a1);
        for(var d = a1.next(); !d.done; d = a1.next())d = d.value, c.has(d) || (b.push(d), c.add(d));
        return b;
    }
    var fd = [], gd;
    function hd(a1) {
        gd || (gd = !0, Tc(id));
        fd.push(a1);
    }
    function id() {
        gd = !1;
        for(var a1 = !!fd.length; fd.length;)fd.shift()();
        return a1;
    }
    id.list = fd;
    function jd() {
        this.g = !1;
        this.addedNodes = [];
        this.removedNodes = [];
        this.qa = new Set;
    }
    function kd(a1) {
        a1.g || (a1.g = !0, Tc(function() {
            a1.flush();
        }));
    }
    jd.prototype.flush = function() {
        if (this.g) {
            this.g = !1;
            var a1 = this.takeRecords();
            a1.length && this.qa.forEach(function(b) {
                b(a1);
            });
        }
    };
    jd.prototype.takeRecords = function() {
        if (this.addedNodes.length || this.removedNodes.length) {
            var a1 = [
                {
                    addedNodes: this.addedNodes,
                    removedNodes: this.removedNodes
                }
            ];
            this.addedNodes = [];
            this.removedNodes = [];
            return a1;
        }
        return [];
    };
    function ld(a1, b) {
        var c = D(a1);
        c.ga || (c.ga = new jd);
        c.ga.qa.add(b);
        var d = c.ga;
        return {
            Va: b,
            X: d,
            Wa: a1,
            takeRecords: function() {
                return d.takeRecords();
            }
        };
    }
    function md(a1) {
        var b = a1 && a1.X;
        b && (b.qa.delete(a1.Va), b.qa.size || (D(a1.Wa).ga = null));
    }
    function nd(a1, b) {
        var c = b.getRootNode();
        return a1.map(function(d) {
            var e = c === d.target.getRootNode();
            if (e && d.addedNodes) {
                if (e = [].slice.call(d.addedNodes).filter(function(f) {
                    return c === f.getRootNode();
                }), e.length) return d = Object.create(d), Object.defineProperty(d, "addedNodes", {
                    value: e,
                    configurable: !0
                }), d;
            } else if (e) return d;
        }).filter(function(d) {
            return d;
        });
    }
    var od = /[&\u00A0"]/g, pd = /[&\u00A0<>]/g;
    function qd(a1) {
        switch(a1){
            case "&":
                return "&amp;";
            case "<":
                return "&lt;";
            case ">":
                return "&gt;";
            case '"':
                return "&quot;";
            case "\xa0":
                return "&nbsp;";
        }
    }
    function rd(a1) {
        for(var b = {}, c = 0; c < a1.length; c++)b[a1[c]] = !0;
        return b;
    }
    var sd = rd("area base br col command embed hr img input keygen link meta param source track wbr".split(" ")), td = rd("style script xmp iframe noembed noframes plaintext noscript".split(" "));
    function ud(a1, b) {
        "template" === a1.localName && (a1 = a1.content);
        for(var c = "", d = b ? b(a1) : a1.childNodes, e = 0, f = d.length, g = void 0; e < f && (g = d[e]); e++){
            a: {
                var h = g;
                var k = a1, l = b;
                switch(h.nodeType){
                    case Node.ELEMENT_NODE:
                        k = h.localName;
                        for(var m = "<" + k, q = h.attributes, H = 0, C; C = q[H]; H++)m += " " + C.name + '="' + C.value.replace(od, qd) + '"';
                        m += ">";
                        h = sd[k] ? m : m + ud(h, l) + "</" + k + ">";
                        break a;
                    case Node.TEXT_NODE:
                        h = h.data;
                        h = k && td[k.localName] ? h : h.replace(pd, qd);
                        break a;
                    case Node.COMMENT_NODE:
                        h = "<!--" + h.data + "-->";
                        break a;
                    default:
                        throw window.console.error(h), Error("not implemented");
                }
            }
            c += h;
        }
        return c;
    }
    var vd = M.D, wd = {
        querySelector: function(a1) {
            return this.__shady_native_querySelector(a1);
        },
        querySelectorAll: function(a1) {
            return this.__shady_native_querySelectorAll(a1);
        }
    }, xd = {};
    function yd(a1) {
        xd[a1] = function(b) {
            return b["__shady_native_" + a1];
        };
    }
    function zd(a1, b) {
        P(a1, b, "__shady_native_");
        for(var c in b)yd(c);
    }
    function S(a1, b) {
        b = void 0 === b ? [] : b;
        for(var c = 0; c < b.length; c++){
            var d = b[c], e = Object.getOwnPropertyDescriptor(a1, d);
            e && (Object.defineProperty(a1, "__shady_native_" + d, e), e.value ? wd[d] || (wd[d] = e.value) : yd(d));
        }
    }
    var Ad = document.createTreeWalker(document, NodeFilter.SHOW_ALL, null, !1), Bd = document.createTreeWalker(document, NodeFilter.SHOW_ELEMENT, null, !1), Cd = document.implementation.createHTMLDocument("inert");
    function Dd(a1) {
        for(var b; b = a1.__shady_native_firstChild;)a1.__shady_native_removeChild(b);
    }
    var Ed = [
        "firstElementChild",
        "lastElementChild",
        "children",
        "childElementCount"
    ], Fd = [
        "querySelector",
        "querySelectorAll",
        "append",
        "prepend",
        "replaceChildren"
    ];
    function Gd() {
        var a1 = [
            "dispatchEvent",
            "addEventListener",
            "removeEventListener"
        ];
        window.EventTarget ? (S(window.EventTarget.prototype, a1), void 0 === window.__shady_native_addEventListener && S(Window.prototype, a1)) : (S(Node.prototype, a1), S(Window.prototype, a1), S(XMLHttpRequest.prototype, a1));
        vd ? S(Node.prototype, "parentNode firstChild lastChild previousSibling nextSibling childNodes parentElement textContent".split(" ")) : zd(Node.prototype, {
            parentNode: {
                get: function() {
                    Ad.currentNode = this;
                    return Ad.parentNode();
                }
            },
            firstChild: {
                get: function() {
                    Ad.currentNode = this;
                    return Ad.firstChild();
                }
            },
            lastChild: {
                get: function() {
                    Ad.currentNode = this;
                    return Ad.lastChild();
                }
            },
            previousSibling: {
                get: function() {
                    Ad.currentNode = this;
                    return Ad.previousSibling();
                }
            },
            nextSibling: {
                get: function() {
                    Ad.currentNode = this;
                    return Ad.nextSibling();
                }
            },
            childNodes: {
                get: function() {
                    var b = [];
                    Ad.currentNode = this;
                    for(var c = Ad.firstChild(); c;)b.push(c), c = Ad.nextSibling();
                    return b;
                }
            },
            parentElement: {
                get: function() {
                    Bd.currentNode = this;
                    return Bd.parentNode();
                }
            },
            textContent: {
                get: function() {
                    switch(this.nodeType){
                        case Node.ELEMENT_NODE:
                        case Node.DOCUMENT_FRAGMENT_NODE:
                            for(var b = document.createTreeWalker(this, NodeFilter.SHOW_TEXT, null, !1), c = "", d; d = b.nextNode();)c += d.nodeValue;
                            return c;
                        default:
                            return this.nodeValue;
                    }
                },
                set: function(b) {
                    if ("undefined" === typeof b || null === b) b = "";
                    switch(this.nodeType){
                        case Node.ELEMENT_NODE:
                        case Node.DOCUMENT_FRAGMENT_NODE:
                            Dd(this);
                            (0 < b.length || this.nodeType === Node.ELEMENT_NODE) && this.__shady_native_insertBefore(document.createTextNode(b), void 0);
                            break;
                        default:
                            this.nodeValue = b;
                    }
                }
            }
        });
        S(Node.prototype, "appendChild insertBefore removeChild replaceChild cloneNode contains".split(" "));
        S(HTMLElement.prototype, [
            "parentElement",
            "contains"
        ]);
        a1 = {
            firstElementChild: {
                get: function() {
                    Bd.currentNode = this;
                    return Bd.firstChild();
                }
            },
            lastElementChild: {
                get: function() {
                    Bd.currentNode = this;
                    return Bd.lastChild();
                }
            },
            children: {
                get: function() {
                    var b = [];
                    Bd.currentNode = this;
                    for(var c = Bd.firstChild(); c;)b.push(c), c = Bd.nextSibling();
                    return Wc(b);
                }
            },
            childElementCount: {
                get: function() {
                    return this.children ? this.children.length : 0;
                }
            }
        };
        vd ? (S(Element.prototype, Ed), S(Element.prototype, [
            "previousElementSibling",
            "nextElementSibling",
            "innerHTML",
            "className"
        ]), S(HTMLElement.prototype, [
            "children",
            "innerHTML",
            "className"
        ])) : (zd(Element.prototype, a1), zd(Element.prototype, {
            previousElementSibling: {
                get: function() {
                    Bd.currentNode = this;
                    return Bd.previousSibling();
                }
            },
            nextElementSibling: {
                get: function() {
                    Bd.currentNode = this;
                    return Bd.nextSibling();
                }
            },
            innerHTML: {
                get: function() {
                    return ud(this, Xc);
                },
                set: function(b) {
                    var c = "template" === this.localName ? this.content : this;
                    Dd(c);
                    var d = this.localName || "div";
                    d = this.namespaceURI && this.namespaceURI !== Cd.namespaceURI ? Cd.createElementNS(this.namespaceURI, d) : Cd.createElement(d);
                    d.innerHTML = b;
                    for(b = "template" === this.localName ? d.content : d; d = b.__shady_native_firstChild;)c.__shady_native_insertBefore(d, void 0);
                }
            },
            className: {
                get: function() {
                    return this.getAttribute("class") || "";
                },
                set: function(b) {
                    this.setAttribute("class", b);
                }
            }
        }));
        S(Element.prototype, "setAttribute getAttribute hasAttribute removeAttribute toggleAttribute focus blur".split(" "));
        S(Element.prototype, Fd);
        S(HTMLElement.prototype, [
            "focus",
            "blur"
        ]);
        window.HTMLTemplateElement && S(window.HTMLTemplateElement.prototype, [
            "innerHTML"
        ]);
        vd ? S(DocumentFragment.prototype, Ed) : zd(DocumentFragment.prototype, a1);
        S(DocumentFragment.prototype, Fd);
        vd ? (S(Document.prototype, Ed), S(Document.prototype, [
            "activeElement"
        ])) : zd(Document.prototype, a1);
        S(Document.prototype, [
            "importNode",
            "getElementById",
            "elementFromPoint",
            Jc()
        ]);
        S(Document.prototype, Fd);
    }
    var Hd = Q({
        get childNodes () {
            return this.__shady_childNodes;
        },
        get firstChild () {
            return this.__shady_firstChild;
        },
        get lastChild () {
            return this.__shady_lastChild;
        },
        get childElementCount () {
            return this.__shady_childElementCount;
        },
        get children () {
            return this.__shady_children;
        },
        get firstElementChild () {
            return this.__shady_firstElementChild;
        },
        get lastElementChild () {
            return this.__shady_lastElementChild;
        },
        get shadowRoot () {
            return this.__shady_shadowRoot;
        }
    }), Id = Q({
        get textContent () {
            return this.__shady_textContent;
        },
        set textContent (a){
            this.__shady_textContent = a;
        },
        get innerHTML () {
            return this.__shady_innerHTML;
        },
        set innerHTML (a){
            this.__shady_innerHTML = a;
        }
    }), Jd = Q({
        get parentElement () {
            return this.__shady_parentElement;
        },
        get parentNode () {
            return this.__shady_parentNode;
        },
        get nextSibling () {
            return this.__shady_nextSibling;
        },
        get previousSibling () {
            return this.__shady_previousSibling;
        },
        get nextElementSibling () {
            return this.__shady_nextElementSibling;
        },
        get previousElementSibling () {
            return this.__shady_previousElementSibling;
        },
        get className () {
            return this.__shady_className;
        },
        set className (a){
            this.__shady_className = a;
        }
    });
    function Kd(a1) {
        for(var b in a1){
            var c = a1[b];
            c && (c.enumerable = !1);
        }
    }
    Kd(Hd);
    Kd(Id);
    Kd(Jd);
    var Ld = M.D || !0 === M.J, Md = Ld ? function() {} : function(a1) {
        var b = D(a1);
        b.Ta || (b.Ta = !0, $c(a1, Jd));
    }, Nd = Ld ? function() {} : function(a1) {
        var b = D(a1);
        b.Sa || (b.Sa = !0, $c(a1, Hd), window.customElements && window.customElements.polyfillWrapFlushCallback && !M.J || $c(a1, Id));
    };
    var Od = "__eventWrappers" + Date.now(), Pd = function() {
        var a1 = Object.getOwnPropertyDescriptor(Event.prototype, "composed");
        return a1 ? function(b) {
            return a1.get.call(b);
        } : null;
    }(), Qd = function() {
        function a1() {}
        var b = !1, c = {
            get capture () {
                b = !0;
                return !1;
            }
        };
        window.addEventListener("test", a1, c);
        window.removeEventListener("test", a1, c);
        return b;
    }();
    function Rd(a1) {
        if (null === a1 || "object" !== typeof a1 && "function" !== typeof a1) {
            var b = !!a1;
            var c = !1;
        } else {
            b = !!a1.capture;
            c = !!a1.once;
            var d = a1.U;
        }
        return {
            Pa: d,
            capture: b,
            once: c,
            Na: Qd ? a1 : b
        };
    }
    var Sd = {
        blur: !0,
        focus: !0,
        focusin: !0,
        focusout: !0,
        click: !0,
        dblclick: !0,
        mousedown: !0,
        mouseenter: !0,
        mouseleave: !0,
        mousemove: !0,
        mouseout: !0,
        mouseover: !0,
        mouseup: !0,
        wheel: !0,
        beforeinput: !0,
        input: !0,
        keydown: !0,
        keyup: !0,
        compositionstart: !0,
        compositionupdate: !0,
        compositionend: !0,
        touchstart: !0,
        touchend: !0,
        touchmove: !0,
        touchcancel: !0,
        pointerover: !0,
        pointerenter: !0,
        pointerdown: !0,
        pointermove: !0,
        pointerup: !0,
        pointercancel: !0,
        pointerout: !0,
        pointerleave: !0,
        gotpointercapture: !0,
        lostpointercapture: !0,
        dragstart: !0,
        drag: !0,
        dragenter: !0,
        dragleave: !0,
        dragover: !0,
        drop: !0,
        dragend: !0,
        DOMActivate: !0,
        DOMFocusIn: !0,
        DOMFocusOut: !0,
        keypress: !0
    }, Td = {
        DOMAttrModified: !0,
        DOMAttributeNameChanged: !0,
        DOMCharacterDataModified: !0,
        DOMElementNameChanged: !0,
        DOMNodeInserted: !0,
        DOMNodeInsertedIntoDocument: !0,
        DOMNodeRemoved: !0,
        DOMNodeRemovedFromDocument: !0,
        DOMSubtreeModified: !0
    };
    function Ud(a1) {
        return a1 instanceof Node ? a1.__shady_getRootNode() : a1;
    }
    function Vd(a1, b) {
        var c = [], d = a1;
        for(a1 = Ud(a1); d;)c.push(d), d = d.__shady_assignedSlot ? d.__shady_assignedSlot : d.nodeType === Node.DOCUMENT_FRAGMENT_NODE && d.host && (b || d !== a1) ? d.host : d.__shady_parentNode;
        c[c.length - 1] === document && c.push(window);
        return c;
    }
    function Wd(a1) {
        a1.__composedPath || (a1.__composedPath = Vd(a1.target, !0));
        return a1.__composedPath;
    }
    function Xd(a1, b) {
        if (!O) return a1;
        a1 = Vd(a1, !0);
        for(var c = 0, d, e = void 0, f, g = void 0; c < b.length; c++)if (d = b[c], f = Ud(d), f !== e && (g = a1.indexOf(f), e = f), !O(f) || -1 < g) return d;
    }
    var Yd = {
        get composed () {
            void 0 === this.__composed && (Pd ? this.__composed = "focusin" === this.type || "focusout" === this.type || Pd(this) : !1 !== this.isTrusted && (this.__composed = Sd[this.type]));
            return this.__composed || !1;
        },
        composedPath: function() {
            this.__composedPath || (this.__composedPath = Vd(this.__target, this.composed));
            return this.__composedPath;
        },
        get target () {
            return Xd(this.currentTarget || this.__previousCurrentTarget, this.composedPath());
        },
        get relatedTarget () {
            if (!this.__relatedTarget) return null;
            this.__relatedTargetComposedPath || (this.__relatedTargetComposedPath = Vd(this.__relatedTarget, !0));
            return Xd(this.currentTarget || this.__previousCurrentTarget, this.__relatedTargetComposedPath);
        },
        stopPropagation: function() {
            Event.prototype.stopPropagation.call(this);
            this.ua = !0;
        },
        stopImmediatePropagation: function() {
            Event.prototype.stopImmediatePropagation.call(this);
            this.ua = this.__immediatePropagationStopped = !0;
        }
    }, Zd = M.D && Object.getOwnPropertyDescriptor(Event.prototype, "eventPhase");
    Zd && (Object.defineProperty(Yd, "eventPhase", {
        get: function() {
            return this.currentTarget === this.target ? Event.AT_TARGET : this.__shady_native_eventPhase;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(Yd, "__shady_native_eventPhase", Zd));
    function $d(a1) {
        function b(c, d) {
            c = new a1(c, d);
            c.__composed = d && !!d.composed;
            return c;
        }
        b.__proto__ = a1;
        b.prototype = a1.prototype;
        return b;
    }
    var ae = {
        focus: !0,
        blur: !0
    };
    function be(a1) {
        return a1.__target !== a1.target || a1.__relatedTarget !== a1.relatedTarget;
    }
    function ce(a1, b, c) {
        if (c = b.__handlers && b.__handlers[a1.type] && b.__handlers[a1.type][c]) for(var d = 0, e; (e = c[d]) && (!be(a1) || a1.target !== a1.relatedTarget) && (e.call(b, a1), !a1.__immediatePropagationStopped); d++);
    }
    var de = new Event("e").hasOwnProperty("currentTarget");
    function ee(a1) {
        a1 = de ? Object.create(a1) : a1;
        var b = a1.composedPath(), c = b.map(function(m) {
            return Xd(m, b);
        }), d = a1.bubbles, e = Object.getOwnPropertyDescriptor(a1, "currentTarget");
        Object.defineProperty(a1, "currentTarget", {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return k;
            }
        });
        var f = Event.CAPTURING_PHASE, g = Object.getOwnPropertyDescriptor(a1, "eventPhase");
        Object.defineProperty(a1, "eventPhase", {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return f;
            }
        });
        try {
            for(var h = b.length - 1; 0 <= h; h--){
                var k = b[h];
                f = k === c[h] ? Event.AT_TARGET : Event.CAPTURING_PHASE;
                ce(a1, k, "capture");
                if (a1.ua) return;
            }
            for(h = 0; h < b.length; h++){
                k = b[h];
                var l = k === c[h];
                if (l || d) {
                    if (f = l ? Event.AT_TARGET : Event.BUBBLING_PHASE, ce(a1, k, "bubble"), a1.ua) break;
                }
            }
        } finally{
            de || (e ? Object.defineProperty(a1, "currentTarget", e) : delete a1.currentTarget, g ? Object.defineProperty(a1, "eventPhase", g) : delete a1.eventPhase);
        }
    }
    function fe(a1, b, c, d) {
        for(var e = 0; e < a1.length; e++){
            var f = a1[e], g = f.type, h = f.capture;
            if (b === f.node && c === g && d === h) return e;
        }
        return -1;
    }
    function ge(a1) {
        id();
        return !M.ha && this instanceof Node && !Uc(document, this) ? (a1.__target || he(a1, this), ee(a1)) : this.__shady_native_dispatchEvent(a1);
    }
    function ie(a1, b, c) {
        var d = this, e = Rd(c), f = e.capture, g = e.once, h = e.Pa;
        e = e.Na;
        if (b) {
            var k = typeof b;
            if ("function" === k || "object" === k) {
                if ("object" !== k || b.handleEvent && "function" === typeof b.handleEvent) {
                    if (Td[a1]) return this.__shady_native_addEventListener(a1, b, e);
                    var l = h || this;
                    if (h = b[Od]) {
                        if (-1 < fe(h, l, a1, f)) return;
                    } else b[Od] = [];
                    h = function(m) {
                        g && d.__shady_removeEventListener(a1, b, c);
                        m.__target || he(m);
                        if (l !== d) {
                            var q = Object.getOwnPropertyDescriptor(m, "currentTarget");
                            Object.defineProperty(m, "currentTarget", {
                                get: function() {
                                    return l;
                                },
                                configurable: !0
                            });
                            var H = Object.getOwnPropertyDescriptor(m, "eventPhase");
                            Object.defineProperty(m, "eventPhase", {
                                configurable: !0,
                                enumerable: !0,
                                get: function() {
                                    return f ? Event.CAPTURING_PHASE : Event.BUBBLING_PHASE;
                                }
                            });
                        }
                        m.__previousCurrentTarget = m.currentTarget;
                        if (!O(l) && "slot" !== l.localName || -1 != m.composedPath().indexOf(l)) {
                            if (m.composed || -1 < m.composedPath().indexOf(l)) {
                                if (be(m) && m.target === m.relatedTarget) m.eventPhase === Event.BUBBLING_PHASE && m.stopImmediatePropagation();
                                else if (m.eventPhase === Event.CAPTURING_PHASE || m.bubbles || m.target === l || l instanceof Window) {
                                    var C = "function" === k ? b.call(l, m) : b.handleEvent && b.handleEvent(m);
                                    l !== d && (q ? (Object.defineProperty(m, "currentTarget", q), q = null) : delete m.currentTarget, H ? (Object.defineProperty(m, "eventPhase", H), H = null) : delete m.eventPhase);
                                    return C;
                                }
                            }
                        }
                    };
                    b[Od].push({
                        node: l,
                        type: a1,
                        capture: f,
                        ub: h
                    });
                    this.__handlers = this.__handlers || {};
                    this.__handlers[a1] = this.__handlers[a1] || {
                        capture: [],
                        bubble: []
                    };
                    this.__handlers[a1][f ? "capture" : "bubble"].push(h);
                    ae[a1] || this.__shady_native_addEventListener(a1, h, e);
                }
            }
        }
    }
    function je(a1, b, c) {
        if (b) {
            var d = Rd(c);
            c = d.capture;
            var e = d.Pa;
            d = d.Na;
            if (Td[a1]) return this.__shady_native_removeEventListener(a1, b, d);
            var f = e || this;
            e = void 0;
            var g = null;
            try {
                g = b[Od];
            } catch (h) {}
            g && (f = fe(g, f, a1, c), -1 < f && (e = g.splice(f, 1)[0].ub, g.length || (b[Od] = void 0)));
            this.__shady_native_removeEventListener(a1, e || b, d);
            e && this.__handlers && this.__handlers[a1] && (a1 = this.__handlers[a1][c ? "capture" : "bubble"], b = a1.indexOf(e), -1 < b && a1.splice(b, 1));
        }
    }
    function ke() {
        for(var a1 in ae)window.__shady_native_addEventListener(a1, function(b) {
            b.__target || (he(b), ee(b));
        }, !0);
    }
    var le = Q(Yd);
    function he(a1, b) {
        b = void 0 === b ? a1.target : b;
        a1.__target = b;
        a1.__relatedTarget = a1.relatedTarget;
        if (M.D) {
            b = Object.getPrototypeOf(a1);
            if (!b.hasOwnProperty("__shady_patchedProto")) {
                var c = Object.create(b);
                c.__shady_sourceProto = b;
                P(c, le);
                b.__shady_patchedProto = c;
            }
            a1.__proto__ = b.__shady_patchedProto;
        } else P(a1, le);
    }
    var me = $d(Event), ne = $d(CustomEvent), oe = $d(MouseEvent);
    function pe() {
        if (!Pd && Object.getOwnPropertyDescriptor(Event.prototype, "isTrusted")) {
            var a1 = function() {
                var b = new MouseEvent("click", {
                    bubbles: !0,
                    cancelable: !0,
                    composed: !0
                });
                this.__shady_dispatchEvent(b);
            };
            Element.prototype.click ? Element.prototype.click = a1 : HTMLElement.prototype.click && (HTMLElement.prototype.click = a1);
        }
    }
    var qe = Object.getOwnPropertyNames(Element.prototype).filter(function(a1) {
        return "on" === a1.substring(0, 2);
    }), re = Object.getOwnPropertyNames(HTMLElement.prototype).filter(function(a1) {
        return "on" === a1.substring(0, 2);
    });
    function se(a1) {
        return {
            set: function(b) {
                var c = D(this), d = a1.substring(2);
                c.T || (c.T = {});
                c.T[a1] && this.removeEventListener(d, c.T[a1]);
                this.__shady_addEventListener(d, b);
                c.T[a1] = b;
            },
            get: function() {
                var b = L(this);
                return b && b.T && b.T[a1];
            },
            configurable: !0
        };
    }
    function te(a1, b) {
        return {
            index: a1,
            ia: [],
            pa: b
        };
    }
    function ue(a1, b, c, d) {
        var e = 0, f = 0, g = 0, h = 0, k = Math.min(b - e, d - f);
        if (0 == e && 0 == f) a: {
            for(g = 0; g < k; g++)if (a1[g] !== c[g]) break a;
            g = k;
        }
        if (b == a1.length && d == c.length) {
            h = a1.length;
            for(var l = c.length, m = 0; m < k - g && ve(a1[--h], c[--l]);)m++;
            h = m;
        }
        e += g;
        f += g;
        b -= h;
        d -= h;
        if (0 == b - e && 0 == d - f) return [];
        if (e == b) {
            for(b = te(e, 0); f < d;)b.ia.push(c[f++]);
            return [
                b
            ];
        }
        if (f == d) return [
            te(e, b - e)
        ];
        k = e;
        g = f;
        d = d - g + 1;
        h = b - k + 1;
        b = Array(d);
        for(l = 0; l < d; l++)b[l] = Array(h), b[l][0] = l;
        for(l = 0; l < h; l++)b[0][l] = l;
        for(l = 1; l < d; l++)for(m = 1; m < h; m++)if (a1[k + m - 1] === c[g + l - 1]) b[l][m] = b[l - 1][m - 1];
        else {
            var q = b[l - 1][m] + 1, H = b[l][m - 1] + 1;
            b[l][m] = q < H ? q : H;
        }
        k = b.length - 1;
        g = b[0].length - 1;
        d = b[k][g];
        for(a1 = []; 0 < k || 0 < g;)0 == k ? (a1.push(2), g--) : 0 == g ? (a1.push(3), k--) : (h = b[k - 1][g - 1], l = b[k - 1][g], m = b[k][g - 1], q = l < m ? l < h ? l : h : m < h ? m : h, q == h ? (h == d ? a1.push(0) : (a1.push(1), d = h), k--, g--) : q == l ? (a1.push(3), k--, d = l) : (a1.push(2), g--, d = m));
        a1.reverse();
        b = void 0;
        k = [];
        for(g = 0; g < a1.length; g++)switch(a1[g]){
            case 0:
                b && (k.push(b), b = void 0);
                e++;
                f++;
                break;
            case 1:
                b || (b = te(e, 0));
                b.pa++;
                e++;
                b.ia.push(c[f]);
                f++;
                break;
            case 2:
                b || (b = te(e, 0));
                b.pa++;
                e++;
                break;
            case 3:
                b || (b = te(e, 0)), b.ia.push(c[f]), f++;
        }
        b && k.push(b);
        return k;
    }
    function ve(a1, b) {
        return a1 === b;
    }
    var we = Q({
        dispatchEvent: ge,
        addEventListener: ie,
        removeEventListener: je
    });
    var xe = null;
    function ye() {
        xe || (xe = window.ShadyCSS && window.ShadyCSS.ScopingShim);
        return xe || null;
    }
    function ze(a1, b, c) {
        var d = ye();
        return d && "class" === b ? (d.setElementClass(a1, c), !0) : !1;
    }
    function Ae(a1, b) {
        var c = ye();
        c && c.unscopeNode(a1, b);
    }
    function Be(a1, b) {
        var c = ye();
        if (!c) return !0;
        if (a1.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
            c = !0;
            for(a1 = a1.__shady_firstChild; a1; a1 = a1.__shady_nextSibling)c = c && Be(a1, b);
            return c;
        }
        return a1.nodeType !== Node.ELEMENT_NODE ? !0 : c.currentScopeForNode(a1) === b;
    }
    function Ce(a1) {
        if (a1.nodeType !== Node.ELEMENT_NODE) return "";
        var b = ye();
        return b ? b.currentScopeForNode(a1) : "";
    }
    function De(a1, b) {
        if (a1) for(a1.nodeType === Node.ELEMENT_NODE && b(a1), a1 = a1.__shady_firstChild; a1; a1 = a1.__shady_nextSibling)a1.nodeType === Node.ELEMENT_NODE && De(a1, b);
    }
    var Ee = window.document, Fe = M.ha, Ge = Object.getOwnPropertyDescriptor(Node.prototype, "isConnected"), Ie = Ge && Ge.get;
    function Je(a1) {
        for(var b; b = a1.__shady_firstChild;)a1.__shady_removeChild(b);
    }
    function Ke(a1) {
        var b = L(a1);
        if (b && void 0 !== b.ta) for(b = a1.__shady_firstChild; b; b = b.__shady_nextSibling)Ke(b);
        if (a1 = L(a1)) a1.ta = void 0;
    }
    function Le(a1) {
        var b = a1;
        if (a1 && "slot" === a1.localName) {
            var c = L(a1);
            (c = c && c.aa) && (b = c.length ? c[0] : Le(a1.__shady_nextSibling));
        }
        return b;
    }
    function Me(a1, b, c) {
        if (a1 = (a1 = L(a1)) && a1.ga) {
            if (b) {
                if (b.nodeType === Node.DOCUMENT_FRAGMENT_NODE) for(var d = 0, e = b.childNodes.length; d < e; d++)a1.addedNodes.push(b.childNodes[d]);
                else a1.addedNodes.push(b);
            }
            c && a1.removedNodes.push(c);
            kd(a1);
        }
    }
    var Te = Q({
        get parentNode () {
            var a1 = L(this);
            a1 = a1 && a1.parentNode;
            return void 0 !== a1 ? a1 : this.__shady_native_parentNode;
        },
        get firstChild () {
            var a2 = L(this);
            a2 = a2 && a2.firstChild;
            return void 0 !== a2 ? a2 : this.__shady_native_firstChild;
        },
        get lastChild () {
            var a3 = L(this);
            a3 = a3 && a3.lastChild;
            return void 0 !== a3 ? a3 : this.__shady_native_lastChild;
        },
        get nextSibling () {
            var a4 = L(this);
            a4 = a4 && a4.nextSibling;
            return void 0 !== a4 ? a4 : this.__shady_native_nextSibling;
        },
        get previousSibling () {
            var a5 = L(this);
            a5 = a5 && a5.previousSibling;
            return void 0 !== a5 ? a5 : this.__shady_native_previousSibling;
        },
        get childNodes () {
            if (Lc(this)) {
                var a6 = L(this);
                if (!a6.childNodes) {
                    a6.childNodes = [];
                    for(var b = this.__shady_firstChild; b; b = b.__shady_nextSibling)a6.childNodes.push(b);
                }
                var c = a6.childNodes;
            } else c = this.__shady_native_childNodes;
            c.item = function(d) {
                return c[d];
            };
            return c;
        },
        get parentElement () {
            var a7 = L(this);
            (a7 = a7 && a7.parentNode) && a7.nodeType !== Node.ELEMENT_NODE && (a7 = null);
            return void 0 !== a7 ? a7 : this.__shady_native_parentElement;
        },
        get isConnected () {
            if (Ie && Ie.call(this)) return !0;
            if (this.nodeType == Node.DOCUMENT_FRAGMENT_NODE) return !1;
            var a8 = this.ownerDocument;
            if (null === a8 || Uc(a8, this)) return !0;
            for(a8 = this; a8 && !(a8 instanceof Document);)a8 = a8.__shady_parentNode || (O(a8) ? a8.host : void 0);
            return !!(a8 && a8 instanceof Document);
        },
        get textContent () {
            if (Lc(this)) {
                for(var a9 = [], b1 = this.__shady_firstChild; b1; b1 = b1.__shady_nextSibling)b1.nodeType !== Node.COMMENT_NODE && a9.push(b1.__shady_textContent);
                return a9.join("");
            }
            return this.__shady_native_textContent;
        },
        set textContent (a){
            if ("undefined" === typeof a || null === a) a = "";
            switch(this.nodeType){
                case Node.ELEMENT_NODE:
                case Node.DOCUMENT_FRAGMENT_NODE:
                    if (!Lc(this) && M.D) {
                        var b2 = this.__shady_firstChild;
                        (b2 != this.__shady_lastChild || b2 && b2.nodeType != Node.TEXT_NODE) && Je(this);
                        this.__shady_native_textContent = a;
                    } else Je(this), (0 < a.length || this.nodeType === Node.ELEMENT_NODE) && this.__shady_insertBefore(document.createTextNode(a));
                    break;
                default:
                    this.nodeValue = a;
            }
        },
        insertBefore: function(a1, b) {
            if (this.ownerDocument !== Ee && a1.ownerDocument !== Ee) return this.__shady_native_insertBefore(a1, b), a1;
            if (a1 === this) throw Error("Failed to execute 'appendChild' on 'Node': The new child element contains the parent.");
            if (b) {
                var c = L(b);
                c = c && c.parentNode;
                if (void 0 !== c && c !== this || void 0 === c && b.__shady_native_parentNode !== this) throw Error("Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.");
            }
            if (b === a1) return a1;
            Me(this, a1);
            var d = [], e = (c = Ne(this)) ? c.host.localName : Ce(this), f = a1.__shady_parentNode;
            if (f) {
                var g = Ce(a1);
                var h = !!c || !Ne(a1) || Fe && void 0 !== this.__noInsertionPoint;
                f.__shady_removeChild(a1, h);
            }
            f = !0;
            var k = (!Fe || void 0 === a1.__noInsertionPoint && void 0 === this.__noInsertionPoint) && !Be(a1, e), l = c && !a1.__noInsertionPoint && (!Fe || a1.nodeType === Node.DOCUMENT_FRAGMENT_NODE);
            if (l || k) k && (g = g || Ce(a1)), De(a1, function(m) {
                l && "slot" === m.localName && d.push(m);
                if (k) {
                    var q = g;
                    ye() && (q && Ae(m, q), (q = ye()) && q.scopeNode(m, e));
                }
            });
            d.length && (Oe(c), c.i.push.apply(c.i, w(d)), Pe(c));
            Lc(this) && (Qe(a1, this, b), h = L(this), h.root ? (f = !1, Mc(this) && Pe(h.root)) : c && "slot" === this.localName && (f = !1, Pe(c)));
            f ? (c = O(this) ? this.host : this, b ? (b = Le(b), c.__shady_native_insertBefore(a1, b)) : c.__shady_native_appendChild(a1)) : a1.ownerDocument !== this.ownerDocument && this.ownerDocument.adoptNode(a1);
            return a1;
        },
        appendChild: function(a1) {
            if (this != a1 || !O(a1)) return this.__shady_insertBefore(a1);
        },
        removeChild: function(a1, b) {
            b = void 0 === b ? !1 : b;
            if (this.ownerDocument !== Ee) return this.__shady_native_removeChild(a1);
            if (a1.__shady_parentNode !== this) throw Error("The node to be removed is not a child of this node: " + a1);
            Me(this, null, a1);
            var c = Ne(a1), d = c && Re(c, a1), e = L(this);
            if (Lc(this) && (Se(a1, this), Mc(this))) {
                Pe(e.root);
                var f = !0;
            }
            if (ye() && !b && c && a1.nodeType !== Node.TEXT_NODE) {
                var g = Ce(a1);
                De(a1, function(h) {
                    Ae(h, g);
                });
            }
            Ke(a1);
            c && ((b = "slot" === this.localName) && (f = !0), (d || b) && Pe(c));
            f || (f = O(this) ? this.host : this, (!e.root && "slot" !== a1.localName || f === a1.__shady_native_parentNode) && f.__shady_native_removeChild(a1));
            return a1;
        },
        replaceChild: function(a1, b) {
            this.__shady_insertBefore(a1, b);
            this.__shady_removeChild(b);
            return a1;
        },
        cloneNode: function(a1) {
            if ("template" == this.localName) return this.__shady_native_cloneNode(a1);
            var b = this.__shady_native_cloneNode(!1);
            if (a1 && b.nodeType !== Node.ATTRIBUTE_NODE) {
                a1 = this.__shady_firstChild;
                for(var c; a1; a1 = a1.__shady_nextSibling)c = a1.__shady_cloneNode(!0), b.__shady_appendChild(c);
            }
            return b;
        },
        getRootNode: function(a1) {
            if (this && this.nodeType) {
                var b = D(this), c = b.ta;
                void 0 === c && (O(this) ? (c = this, b.ta = c) : (c = (c = this.__shady_parentNode) ? c.__shady_getRootNode(a1) : this, document.documentElement.__shady_native_contains(this) && (b.ta = c)));
                return c;
            }
        },
        contains: function(a1) {
            return Vc(this, a1);
        }
    });
    var Ve = Q({
        get assignedSlot () {
            var a10 = this.__shady_parentNode;
            (a10 = a10 && a10.__shady_shadowRoot) && Ue(a10);
            return (a10 = L(this)) && a10.assignedSlot || null;
        }
    }); /*

 Copyright (c) 2022 The Polymer Project Authors
 SPDX-License-Identifier: BSD-3-Clause
*/ 
    var We = new Map;
    [
        [
            "(",
            {
                end: ")",
                sa: !0
            }
        ],
        [
            "[",
            {
                end: "]",
                sa: !0
            }
        ],
        [
            '"',
            {
                end: '"',
                sa: !1
            }
        ],
        [
            "'",
            {
                end: "'",
                sa: !1
            }
        ]
    ].forEach(function(a1) {
        var b = ka(a1);
        a1 = b.next().value;
        b = b.next().value;
        We.set(a1, b);
    });
    function Xe(a1, b, c, d) {
        for(d = void 0 === d ? !0 : d; b < a1.length; b++)if ("\\" === a1[b] && b < a1.length - 1 && "\n" !== a1[b + 1]) b++;
        else {
            if (-1 !== c.indexOf(a1[b])) return b;
            if (d && We.has(a1[b])) {
                var e = We.get(a1[b]);
                b = Xe(a1, b + 1, [
                    e.end
                ], e.sa);
            }
        }
        return a1.length;
    }
    function Ye(a1) {
        function b() {
            if (0 < d.length) {
                for(; " " === d[d.length - 1];)d.pop();
                c.push({
                    La: d.filter(function(k, l) {
                        return 0 === l % 2;
                    }),
                    Za: d.filter(function(k, l) {
                        return 1 === l % 2;
                    })
                });
                d.length = 0;
            }
        }
        for(var c = [], d = [], e = 0; e < a1.length;){
            var f = d[d.length - 1], g = Xe(a1, e, [
                ",",
                " ",
                ">",
                "+",
                "~"
            ]), h = g === e ? a1[e] : a1.substring(e, g);
            if ("," === h) b();
            else if (-1 === [
                void 0,
                " ",
                ">",
                "+",
                "~"
            ].indexOf(f) || " " !== h) " " === f && -1 !== [
                ">",
                "+",
                "~"
            ].indexOf(h) ? d[d.length - 1] = h : d.push(h);
            e = g + (g === e ? 1 : 0);
        }
        b();
        return c;
    }
    function Ze(a1, b, c) {
        var d = [];
        $e(a1, b, c, d);
        return d;
    }
    function $e(a1, b, c, d) {
        for(a1 = a1.__shady_firstChild; a1; a1 = a1.__shady_nextSibling){
            var e;
            if (e = a1.nodeType === Node.ELEMENT_NODE) {
                e = a1;
                var f = b, g = c, h = d, k = f(e);
                k && h.push(e);
                g && g(k) ? e = k : ($e(e, f, g, h), e = void 0);
            }
            if (e) break;
        }
    }
    var af = {
        get firstElementChild () {
            var a11 = L(this);
            if (a11 && void 0 !== a11.firstChild) {
                for(a11 = this.__shady_firstChild; a11 && a11.nodeType !== Node.ELEMENT_NODE;)a11 = a11.__shady_nextSibling;
                return a11;
            }
            return this.__shady_native_firstElementChild;
        },
        get lastElementChild () {
            var a12 = L(this);
            if (a12 && void 0 !== a12.lastChild) {
                for(a12 = this.__shady_lastChild; a12 && a12.nodeType !== Node.ELEMENT_NODE;)a12 = a12.__shady_previousSibling;
                return a12;
            }
            return this.__shady_native_lastElementChild;
        },
        get children () {
            return Lc(this) ? Wc(Array.prototype.filter.call(Yc(this), function(a1) {
                return a1.nodeType === Node.ELEMENT_NODE;
            })) : this.__shady_native_children;
        },
        get childElementCount () {
            var a13 = this.__shady_children;
            return a13 ? a13.length : 0;
        }
    }, bf = Q((af.append = function(a1) {
        for(var b = [], c = 0; c < arguments.length; ++c)b[c] = arguments[c];
        this.__shady_insertBefore(cd.apply(null, w(b)), null);
    }, af.prepend = function(a1) {
        for(var b = [], c = 0; c < arguments.length; ++c)b[c] = arguments[c];
        this.__shady_insertBefore(cd.apply(null, w(b)), this.__shady_firstChild);
    }, af.replaceChildren = function(a1) {
        for(var b = [], c = 0; c < arguments.length; ++c)b[c] = arguments[c];
        for(; null !== (c = this.__shady_firstChild);)this.__shady_removeChild(c);
        this.__shady_insertBefore(cd.apply(null, w(b)), null);
    }, af));
    function cf(a1, b) {
        function c(e, f) {
            return (e === a1 || -1 === f.indexOf(":scope")) && Pc.call(e, f);
        }
        var d = Ye(b);
        if (1 > d.length) return [];
        for(b = dd(Ze(a1, function() {
            return !0;
        }).map(function(e) {
            return dd(d.map(function(f) {
                var g = f.La, h = g.length - 1;
                return c(e, g[h]) ? {
                    target: e,
                    da: f,
                    fa: e,
                    index: h
                } : [];
            }));
        })); b.some(function(e) {
            return 0 < e.index;
        });)b = dd(b.map(function(e) {
            if (0 >= e.index) return e;
            var f = e.target, g = e.fa, h = e.da;
            e = e.index - 1;
            var k = h.Za[e], l = h.La[e];
            if (" " === k) {
                k = [];
                for(g = g.__shady_parentElement; g; g = g.__shady_parentElement)c(g, l) && k.push({
                    target: f,
                    da: h,
                    fa: g,
                    index: e
                });
                return k;
            }
            if (">" === k) return g = g.__shady_parentElement, c(g, l) ? {
                target: f,
                da: h,
                fa: g,
                index: e
            } : [];
            if ("+" === k) return (g = g.__shady_previousElementSibling) && c(g, l) ? {
                target: f,
                da: h,
                fa: g,
                index: e
            } : [];
            if ("~" === k) {
                k = [];
                for(g = g.__shady_previousElementSibling; g; g = g.__shady_previousElementSibling)c(g, l) && k.push({
                    target: f,
                    da: h,
                    fa: g,
                    index: e
                });
                return k;
            }
            throw Error("Unrecognized combinator: '" + k + "'.");
        }));
        return ed(b.map(function(e) {
            return e.target;
        }));
    }
    var df = M.querySelectorImplementation, ef = Q({
        querySelector: function(a1) {
            if ("native" === df) {
                var b = Array.prototype.slice.call((this instanceof ShadowRoot ? this.host : this).__shady_native_querySelectorAll(a1)), c = this.__shady_getRootNode();
                b = ka(b);
                for(var d = b.next(); !d.done; d = b.next())if (d = d.value, d.__shady_getRootNode() == c) return d;
                return null;
            }
            if ("selectorEngine" === df) return cf(this, a1)[0] || null;
            if (void 0 === df) return Ze(this, function(e) {
                return Pc.call(e, a1);
            }, function(e) {
                return !!e;
            })[0] || null;
            throw Error("Unrecognized value of ShadyDOM.querySelectorImplementation: '" + (df + "'"));
        },
        querySelectorAll: function(a1, b) {
            if (b || "native" === df) {
                b = Array.prototype.slice.call((this instanceof ShadowRoot ? this.host : this).__shady_native_querySelectorAll(a1));
                var c = this.__shady_getRootNode();
                return Wc(b.filter(function(d) {
                    return d.__shady_getRootNode() == c;
                }));
            }
            if ("selectorEngine" === df) return Wc(cf(this, a1));
            if (void 0 === df) return Wc(Ze(this, function(d) {
                return Pc.call(d, a1);
            }));
            throw Error("Unrecognized value of ShadyDOM.querySelectorImplementation: '" + (df + "'"));
        }
    }), ff = M.ha && !M.J ? ad({}, bf) : bf;
    ad(bf, ef);
    var gf = Q({
        after: function(a1) {
            for(var b = [], c = 0; c < arguments.length; ++c)b[c] = arguments[c];
            c = this.__shady_parentNode;
            if (null !== c) {
                var d = this.__shady_nextSibling;
                c.__shady_insertBefore(cd.apply(null, w(b)), d);
            }
        },
        before: function(a1) {
            for(var b = [], c = 0; c < arguments.length; ++c)b[c] = arguments[c];
            c = this.__shady_parentNode;
            null !== c && c.__shady_insertBefore(cd.apply(null, w(b)), this);
        },
        remove: function() {
            var a1 = this.__shady_parentNode;
            null !== a1 && a1.__shady_removeChild(this);
        },
        replaceWith: function(a1) {
            for(var b = [], c = 0; c < arguments.length; ++c)b[c] = arguments[c];
            c = this.__shady_parentNode;
            if (null !== c) {
                var d = this.__shady_nextSibling;
                c.__shady_removeChild(this);
                c.__shady_insertBefore(cd.apply(null, w(b)), d);
            }
        }
    });
    var hf = window.document;
    function jf(a1, b) {
        if ("slot" === b) a1 = a1.__shady_parentNode, Mc(a1) && Pe(L(a1).root);
        else if ("slot" === a1.localName && "name" === b && (b = Ne(a1))) {
            if (b.g) {
                kf(b);
                var c = a1.Ua, d = lf(a1);
                if (d !== c) {
                    c = b.h[c];
                    var e = c.indexOf(a1);
                    0 <= e && c.splice(e, 1);
                    c = b.h[d] || (b.h[d] = []);
                    c.push(a1);
                    1 < c.length && (b.h[d] = mf(c));
                }
            }
            Pe(b);
        }
    }
    var nf = Q({
        get previousElementSibling () {
            var a14 = L(this);
            if (a14 && void 0 !== a14.previousSibling) {
                for(a14 = this.__shady_previousSibling; a14 && a14.nodeType !== Node.ELEMENT_NODE;)a14 = a14.__shady_previousSibling;
                return a14;
            }
            return this.__shady_native_previousElementSibling;
        },
        get nextElementSibling () {
            var a15 = L(this);
            if (a15 && void 0 !== a15.nextSibling) {
                for(a15 = this.__shady_nextSibling; a15 && a15.nodeType !== Node.ELEMENT_NODE;)a15 = a15.__shady_nextSibling;
                return a15;
            }
            return this.__shady_native_nextElementSibling;
        },
        get slot () {
            return this.getAttribute("slot");
        },
        set slot (a){
            this.__shady_setAttribute("slot", a);
        },
        get className () {
            return this.getAttribute("class") || "";
        },
        set className (a){
            this.__shady_setAttribute("class", a);
        },
        setAttribute: function(a1, b) {
            this.ownerDocument !== hf ? this.__shady_native_setAttribute(a1, b) : ze(this, a1, b) || (this.__shady_native_setAttribute(a1, b), jf(this, a1));
        },
        removeAttribute: function(a1) {
            this.ownerDocument !== hf ? this.__shady_native_removeAttribute(a1) : ze(this, a1, "") ? "" === this.getAttribute(a1) && this.__shady_native_removeAttribute(a1) : (this.__shady_native_removeAttribute(a1), jf(this, a1));
        },
        toggleAttribute: function(a1, b) {
            if (this.ownerDocument !== hf) return this.__shady_native_toggleAttribute(a1, b);
            if (!ze(this, a1, "")) return b = this.__shady_native_toggleAttribute(a1, b), jf(this, a1), b;
            if ("" === this.getAttribute(a1) && !b) return this.__shady_native_toggleAttribute(a1, b);
        }
    });
    M.ha || qe.forEach(function(a1) {
        nf[a1] = se(a1);
    });
    var sf = Q({
        attachShadow: function(a1) {
            if (!this) throw Error("Must provide a host.");
            if (!a1) throw Error("Not enough arguments.");
            if (a1.shadyUpgradeFragment && !M.Ra) {
                var b = a1.shadyUpgradeFragment;
                b.__proto__ = ShadowRoot.prototype;
                of(b, this, a1);
                pf(b, b);
                a1 = b.__noInsertionPoint ? null : b.querySelectorAll("slot");
                b.__noInsertionPoint = void 0;
                if (a1 && a1.length) {
                    var c = b;
                    Oe(c);
                    c.i.push.apply(c.i, w(a1));
                    Pe(b);
                }
                b.host.__shady_native_appendChild(b);
            } else b = new qf(rf, this, a1);
            return this.__CE_shadowRoot = b;
        },
        get shadowRoot () {
            var a16 = L(this);
            return a16 && a16.lb || null;
        }
    });
    ad(nf, sf);
    var tf = document.implementation.createHTMLDocument("inert"), uf = Q({
        get innerHTML () {
            return Lc(this) ? ud("template" === this.localName ? this.content : this, Yc) : this.__shady_native_innerHTML;
        },
        set innerHTML (a){
            if ("template" === this.localName) this.__shady_native_innerHTML = a;
            else {
                Je(this);
                var b3 = this.localName || "div";
                b3 = this.namespaceURI && this.namespaceURI !== tf.namespaceURI ? tf.createElementNS(this.namespaceURI, b3) : tf.createElement(b3);
                for(M.D ? b3.__shady_native_innerHTML = a : b3.innerHTML = a; a = b3.__shady_firstChild;)this.__shady_insertBefore(a);
            }
        }
    });
    var vf = Q({
        blur: function() {
            var a1 = L(this);
            (a1 = (a1 = a1 && a1.root) && a1.activeElement) ? a1.__shady_blur() : this.__shady_native_blur();
        }
    });
    M.ha || re.forEach(function(a1) {
        vf[a1] = se(a1);
    });
    var wf = Q({
        assignedNodes: function(a1) {
            if ("slot" === this.localName) {
                var b = this.__shady_getRootNode();
                b && O(b) && Ue(b);
                return (b = L(this)) ? (a1 && a1.flatten ? b.aa : b.assignedNodes) || [] : [];
            }
        },
        addEventListener: function(a1, b, c) {
            if ("slot" !== this.localName || "slotchange" === a1) ie.call(this, a1, b, c);
            else {
                "object" !== typeof c && (c = {
                    capture: !!c
                });
                var d = this.__shady_parentNode;
                if (!d) throw Error("ShadyDOM cannot attach event to slot unless it has a `parentNode`");
                c.U = this;
                d.__shady_addEventListener(a1, b, c);
            }
        },
        removeEventListener: function(a1, b, c) {
            if ("slot" !== this.localName || "slotchange" === a1) je.call(this, a1, b, c);
            else {
                "object" !== typeof c && (c = {
                    capture: !!c
                });
                var d = this.__shady_parentNode;
                if (!d) throw Error("ShadyDOM cannot attach event to slot unless it has a `parentNode`");
                c.U = this;
                d.__shady_removeEventListener(a1, b, c);
            }
        }
    });
    var xf = Q({
        getElementById: function(a1) {
            return "" === a1 ? null : Ze(this, function(b) {
                return b.id == a1;
            }, function(b) {
                return !!b;
            })[0] || null;
        }
    });
    function yf(a1, b) {
        for(var c; b && !a1.has(c = b.__shady_getRootNode());)b = c.host;
        return b;
    }
    function zf(a1) {
        var b = new Set;
        for(b.add(a1); O(a1) && a1.host;)a1 = a1.host.__shady_getRootNode(), b.add(a1);
        return b;
    }
    var Af = "__shady_native_" + Jc(), Bf = Q({
        get activeElement () {
            var a17 = M.D ? document.__shady_native_activeElement : document.activeElement;
            if (!a17 || !a17.nodeType) return null;
            var b4 = !!O(this);
            if (!(this === document || b4 && this.host !== a17 && this.host.__shady_native_contains(a17))) return null;
            for(b4 = Ne(a17); b4 && b4 !== this;)a17 = b4.host, b4 = Ne(a17);
            return this === document ? b4 ? null : a17 : b4 === this ? a17 : null;
        },
        elementsFromPoint: function(a1, b) {
            a1 = document[Af](a1, b);
            if (this === document && M.useNativeDocumentEFP) return a1;
            a1 = [].slice.call(a1);
            b = zf(this);
            for(var c = new Set, d = 0; d < a1.length; d++)c.add(yf(b, a1[d]));
            var e = [];
            c.forEach(function(f) {
                return e.push(f);
            });
            return e;
        },
        elementFromPoint: function(a1, b) {
            return this === document && M.useNativeDocumentEFP ? this.__shady_native_elementFromPoint(a1, b) : this.__shady_elementsFromPoint(a1, b)[0] || null;
        }
    });
    var Cf = window.document, Df = Q({
        importNode: function(a1, b) {
            if (a1.ownerDocument !== Cf || "template" === a1.localName) return this.__shady_native_importNode(a1, b);
            var c = this.__shady_native_importNode(a1, !1);
            if (b) for(a1 = a1.__shady_firstChild; a1; a1 = a1.__shady_nextSibling)b = this.__shady_importNode(a1, !0), c.__shady_appendChild(b);
            return c;
        }
    });
    var Ef = Q({
        dispatchEvent: ge,
        addEventListener: ie.bind(window),
        removeEventListener: je.bind(window)
    });
    var Ff = {};
    Object.getOwnPropertyDescriptor(HTMLElement.prototype, "parentElement") && (Ff.parentElement = Te.parentElement);
    Object.getOwnPropertyDescriptor(HTMLElement.prototype, "contains") && (Ff.contains = Te.contains);
    Object.getOwnPropertyDescriptor(HTMLElement.prototype, "children") && (Ff.children = bf.children);
    Object.getOwnPropertyDescriptor(HTMLElement.prototype, "innerHTML") && (Ff.innerHTML = uf.innerHTML);
    Object.getOwnPropertyDescriptor(HTMLElement.prototype, "className") && (Ff.className = nf.className);
    var Gf = {
        EventTarget: [
            we
        ],
        Node: [
            Te,
            window.EventTarget ? null : we
        ],
        Text: [
            Ve
        ],
        Comment: [
            Ve
        ],
        CDATASection: [
            Ve
        ],
        ProcessingInstruction: [
            Ve
        ],
        Element: [
            nf,
            bf,
            gf,
            Ve,
            !M.D || "innerHTML" in Element.prototype ? uf : null,
            window.HTMLSlotElement ? null : wf
        ],
        HTMLElement: [
            vf,
            Ff
        ],
        HTMLSlotElement: [
            wf
        ],
        DocumentFragment: [
            ff,
            xf
        ],
        Document: [
            Df,
            ff,
            xf,
            Bf
        ],
        Window: [
            Ef
        ],
        CharacterData: [
            gf
        ],
        XMLHttpRequest: [
            window.EventTarget ? null : we
        ]
    }, Hf = M.D ? null : [
        "innerHTML",
        "textContent"
    ];
    function If(a1, b, c, d) {
        b.forEach(function(e) {
            return a1 && e && P(a1, e, c, d);
        });
    }
    function Jf(a1) {
        var b = a1 ? null : Hf, c;
        for(c in Gf)If(window[c] && window[c].prototype, Gf[c], a1, b);
    }
    [
        "Text",
        "Comment",
        "CDATASection",
        "ProcessingInstruction"
    ].forEach(function(a1) {
        var b = window[a1], c = Object.create(b.prototype);
        c.__shady_protoIsPatched = !0;
        If(c, Gf.EventTarget);
        If(c, Gf.Node);
        Gf[a1] && If(c, Gf[a1]);
        b.prototype.__shady_patchedProto = c;
    });
    function Kf(a1) {
        a1.__shady_protoIsPatched = !0;
        If(a1, Gf.EventTarget);
        If(a1, Gf.Node);
        If(a1, Gf.Element);
        If(a1, Gf.HTMLElement);
        If(a1, Gf.HTMLSlotElement);
        return a1;
    }
    var Lf = M.Da, Mf = M.D;
    function Nf(a1, b) {
        if (Lf && !a1.__shady_protoIsPatched && !O(a1)) {
            var c = Object.getPrototypeOf(a1), d = c.hasOwnProperty("__shady_patchedProto") && c.__shady_patchedProto;
            d || (d = Object.create(c), Kf(d), c.__shady_patchedProto = d);
            Object.setPrototypeOf(a1, d);
        }
        Mf || (1 === b ? Md(a1) : 2 === b && Nd(a1));
    }
    function Of(a1, b, c, d) {
        Nf(a1, 1);
        d = d || null;
        var e = D(a1), f = d ? D(d) : null;
        e.previousSibling = d ? f.previousSibling : b.__shady_lastChild;
        if (f = L(e.previousSibling)) f.nextSibling = a1;
        if (f = L(e.nextSibling = d)) f.previousSibling = a1;
        e.parentNode = b;
        d ? d === c.firstChild && (c.firstChild = a1) : (c.lastChild = a1, c.firstChild || (c.firstChild = a1));
        c.childNodes = null;
    }
    function Qe(a1, b, c) {
        Nf(b, 2);
        var d = D(b);
        void 0 !== d.firstChild && (d.childNodes = null);
        if (a1.nodeType === Node.DOCUMENT_FRAGMENT_NODE) for(a1 = a1.__shady_native_firstChild; a1; a1 = a1.__shady_native_nextSibling)Of(a1, b, d, c);
        else Of(a1, b, d, c);
    }
    function Se(a1, b) {
        var c = D(a1);
        b = D(b);
        a1 === b.firstChild && (b.firstChild = c.nextSibling);
        a1 === b.lastChild && (b.lastChild = c.previousSibling);
        a1 = c.previousSibling;
        var d = c.nextSibling;
        a1 && (D(a1).nextSibling = d);
        d && (D(d).previousSibling = a1);
        c.parentNode = c.previousSibling = c.nextSibling = void 0;
        void 0 !== b.childNodes && (b.childNodes = null);
    }
    function pf(a1, b) {
        var c = D(a1);
        if (b || void 0 === c.firstChild) {
            c.childNodes = null;
            var d = c.firstChild = a1.__shady_native_firstChild;
            c.lastChild = a1.__shady_native_lastChild;
            Nf(a1, 2);
            c = d;
            for(d = void 0; c; c = c.__shady_native_nextSibling){
                var e = D(c);
                e.parentNode = b || a1;
                e.nextSibling = c.__shady_native_nextSibling;
                e.previousSibling = d || null;
                d = c;
                Nf(c, 1);
            }
        }
    }
    var Pf = Q({
        addEventListener: function(a1, b, c) {
            "object" !== typeof c && (c = {
                capture: !!c
            });
            c.U = c.U || this;
            this.host.__shady_addEventListener(a1, b, c);
        },
        removeEventListener: function(a1, b, c) {
            "object" !== typeof c && (c = {
                capture: !!c
            });
            c.U = c.U || this;
            this.host.__shady_removeEventListener(a1, b, c);
        }
    });
    function Qf(a1, b) {
        P(a1, Pf, b);
        P(a1, Bf, b);
        P(a1, uf, b);
        P(a1, bf, b);
        M.J && !b ? (P(a1, Te, b), P(a1, xf, b)) : M.D || (P(a1, Jd), P(a1, Hd), P(a1, Id));
    }
    var rf = {}, Rf = M.deferConnectionCallbacks && "loading" === document.readyState, Sf;
    function Tf(a1) {
        var b = [];
        do b.unshift(a1);
        while (a1 = a1.__shady_parentNode);
        return b;
    }
    function qf(a1, b, c) {
        if (a1 !== rf) throw new TypeError("Illegal constructor");
        this.g = null;
        of(this, b, c);
    }
    function of(a1, b, c) {
        a1.host = b;
        a1.mode = c && c.mode;
        pf(a1.host);
        b = D(a1.host);
        b.root = a1;
        b.lb = "closed" !== a1.mode ? a1 : null;
        b = D(a1);
        b.firstChild = b.lastChild = b.parentNode = b.nextSibling = b.previousSibling = null;
        if (M.preferPerformance) for(; b = a1.host.__shady_native_firstChild;)a1.host.__shady_native_removeChild(b);
        else Pe(a1);
    }
    function Pe(a1) {
        a1.Y || (a1.Y = !0, hd(function() {
            return Ue(a1);
        }));
    }
    function Ue(a1) {
        var b;
        if (b = a1.Y) {
            for(var c; a1;)a: {
                a1.Y && (c = a1), b = a1;
                a1 = b.host.__shady_getRootNode();
                if (O(a1) && (b = L(b.host)) && 0 < b.ka) break a;
                a1 = void 0;
            }
            b = c;
        }
        (c = b) && c._renderSelf();
    }
    qf.prototype._renderSelf = function() {
        var a1 = Rf;
        Rf = !0;
        this.Y = !1;
        if (this.g) {
            kf(this);
            for(var b = 0, c; b < this.g.length; b++){
                c = this.g[b];
                var d = L(c), e = d.assignedNodes;
                d.assignedNodes = [];
                d.aa = [];
                if (d.Ja = e) for(d = 0; d < e.length; d++){
                    var f = L(e[d]);
                    f.xa = f.assignedSlot;
                    f.assignedSlot === c && (f.assignedSlot = null);
                }
            }
            for(b = this.host.__shady_firstChild; b; b = b.__shady_nextSibling)Uf(this, b);
            for(b = 0; b < this.g.length; b++){
                c = this.g[b];
                e = L(c);
                if (!e.assignedNodes.length) for(d = c.__shady_firstChild; d; d = d.__shady_nextSibling)Uf(this, d, c);
                (d = (d = L(c.__shady_parentNode)) && d.root) && (Nc(d) || d.Y) && d._renderSelf();
                Vf(this, e.aa, e.assignedNodes);
                if (d = e.Ja) {
                    for(f = 0; f < d.length; f++)L(d[f]).xa = null;
                    e.Ja = null;
                    d.length > e.assignedNodes.length && (e.Aa = !0);
                }
                e.Aa && (e.Aa = !1, Wf(this, c));
            }
            c = this.g;
            b = [];
            for(e = 0; e < c.length; e++)d = c[e].__shady_parentNode, (f = L(d)) && f.root || !(0 > b.indexOf(d)) || b.push(d);
            for(c = 0; c < b.length; c++){
                f = b[c];
                e = f === this ? this.host : f;
                d = [];
                for(f = f.__shady_firstChild; f; f = f.__shady_nextSibling)if ("slot" == f.localName) for(var g = L(f).aa, h = 0; h < g.length; h++)d.push(g[h]);
                else d.push(f);
                f = Xc(e);
                g = ue(d, d.length, f, f.length);
                for(var k = h = 0, l = void 0; h < g.length && (l = g[h]); h++){
                    for(var m = 0, q = void 0; m < l.ia.length && (q = l.ia[m]); m++)q.__shady_native_parentNode === e && e.__shady_native_removeChild(q), f.splice(l.index + k, 1);
                    k -= l.pa;
                }
                k = 0;
                for(l = void 0; k < g.length && (l = g[k]); k++)for(h = f[l.index], m = l.index; m < l.index + l.pa; m++)q = d[m], e.__shady_native_insertBefore(q, h), f.splice(m, 0, q);
            }
        }
        if (!M.preferPerformance && !this.Ia) for(b = this.host.__shady_firstChild; b; b = b.__shady_nextSibling)c = L(b), b.__shady_native_parentNode !== this.host || "slot" !== b.localName && c.assignedSlot || this.host.__shady_native_removeChild(b);
        this.Ia = !0;
        Rf = a1;
        Sf && Sf();
    };
    function Uf(a1, b, c) {
        var d = D(b), e = d.xa;
        d.xa = null;
        c || (c = (a1 = a1.h[b.__shady_slot || "__catchall"]) && a1[0]);
        c ? (D(c).assignedNodes.push(b), d.assignedSlot = c) : d.assignedSlot = void 0;
        e !== d.assignedSlot && d.assignedSlot && (D(d.assignedSlot).Aa = !0);
    }
    function Vf(a1, b, c) {
        for(var d = 0, e = void 0; d < c.length && (e = c[d]); d++)if ("slot" == e.localName) {
            var f = L(e).assignedNodes;
            f && f.length && Vf(a1, b, f);
        } else b.push(c[d]);
    }
    function Wf(a1, b) {
        b.__shady_native_dispatchEvent(new Event("slotchange"));
        b = L(b);
        b.assignedSlot && Wf(a1, b.assignedSlot);
    }
    function Oe(a1) {
        a1.i = a1.i || [];
        a1.g = a1.g || [];
        a1.h = a1.h || {};
    }
    function kf(a1) {
        if (a1.i && a1.i.length) {
            for(var b = a1.i, c, d = 0; d < b.length; d++){
                var e = b[d];
                pf(e);
                var f = e.__shady_parentNode;
                pf(f);
                f = L(f);
                f.ka = (f.ka || 0) + 1;
                f = lf(e);
                a1.h[f] ? (c = c || {}, c[f] = !0, a1.h[f].push(e)) : a1.h[f] = [
                    e
                ];
                a1.g.push(e);
            }
            if (c) for(var g in c)a1.h[g] = mf(a1.h[g]);
            a1.i = [];
        }
    }
    function lf(a1) {
        var b = a1.name || a1.getAttribute("name") || "__catchall";
        return a1.Ua = b;
    }
    function mf(a1) {
        return a1.sort(function(b, c) {
            b = Tf(b);
            for(var d = Tf(c), e = 0; e < b.length; e++){
                c = b[e];
                var f = d[e];
                if (c !== f) return b = Yc(c.__shady_parentNode), b.indexOf(c) - b.indexOf(f);
            }
        });
    }
    function Re(a1, b) {
        if (a1.g) {
            kf(a1);
            var c = a1.h, d;
            for(d in c)for(var e = c[d], f = 0; f < e.length; f++){
                var g = e[f];
                if (Vc(b, g)) {
                    e.splice(f, 1);
                    var h = a1.g.indexOf(g);
                    0 <= h && (a1.g.splice(h, 1), (h = L(g.__shady_parentNode)) && h.ka && h.ka--);
                    f--;
                    g = L(g);
                    if (h = g.aa) for(var k = 0; k < h.length; k++){
                        var l = h[k], m = l.__shady_native_parentNode;
                        m && m.__shady_native_removeChild(l);
                    }
                    g.aa = [];
                    g.assignedNodes = [];
                    h = !0;
                }
            }
            return h;
        }
    }
    function Nc(a1) {
        kf(a1);
        return !(!a1.g || !a1.g.length);
    }
    (function(a1) {
        a1.__proto__ = DocumentFragment.prototype;
        Qf(a1, "__shady_");
        Qf(a1);
        Object.defineProperties(a1, {
            nodeType: {
                value: Node.DOCUMENT_FRAGMENT_NODE,
                configurable: !0
            },
            nodeName: {
                value: "#document-fragment",
                configurable: !0
            },
            nodeValue: {
                value: null,
                configurable: !0
            }
        });
        [
            "localName",
            "namespaceURI",
            "prefix"
        ].forEach(function(b) {
            Object.defineProperty(a1, b, {
                value: void 0,
                configurable: !0
            });
        });
        [
            "ownerDocument",
            "baseURI",
            "isConnected"
        ].forEach(function(b) {
            Object.defineProperty(a1, b, {
                get: function() {
                    return this.host[b];
                },
                configurable: !0
            });
        });
    })(qf.prototype);
    if (window.customElements && window.customElements.define && M.Ba && !M.preferPerformance) {
        var Xf = new Map;
        Sf = function() {
            var a1 = [];
            Xf.forEach(function(d, e) {
                a1.push([
                    e,
                    d
                ]);
            });
            Xf.clear();
            for(var b = 0; b < a1.length; b++){
                var c = a1[b][0];
                a1[b][1] ? c.__shadydom_connectedCallback() : c.__shadydom_disconnectedCallback();
            }
        };
        Rf && document.addEventListener("readystatechange", function() {
            Rf = !1;
            Sf();
        }, {
            once: !0
        });
        var Yf = function(a1, b, c) {
            var d = 0, e = "__isConnected" + d++;
            if (b || c) a1.prototype.connectedCallback = a1.prototype.__shadydom_connectedCallback = function() {
                Rf ? Xf.set(this, !0) : this[e] || (this[e] = !0, b && b.call(this));
            }, a1.prototype.disconnectedCallback = a1.prototype.__shadydom_disconnectedCallback = function() {
                Rf ? this.isConnected || Xf.set(this, !1) : this[e] && (this[e] = !1, c && c.call(this));
            };
            return a1;
        }, Zf = window.customElements.define, $f = function(a1, b) {
            var c = b.prototype.connectedCallback, d = b.prototype.disconnectedCallback;
            Zf.call(window.customElements, a1, Yf(b, c, d));
            b.prototype.connectedCallback = c;
            b.prototype.disconnectedCallback = d;
        };
        window.customElements.define = $f;
        Object.defineProperty(window.CustomElementRegistry.prototype, "define", {
            value: $f,
            configurable: !0
        });
    }
    function Ne(a1) {
        a1 = a1.__shady_getRootNode();
        if (O(a1)) return a1;
    }
    function ag(a1) {
        this.node = a1;
    }
    v = ag.prototype;
    v.addEventListener = function(a1, b, c) {
        return this.node.__shady_addEventListener(a1, b, c);
    };
    v.removeEventListener = function(a1, b, c) {
        return this.node.__shady_removeEventListener(a1, b, c);
    };
    v.appendChild = function(a1) {
        return this.node.__shady_appendChild(a1);
    };
    v.insertBefore = function(a1, b) {
        return this.node.__shady_insertBefore(a1, b);
    };
    v.removeChild = function(a1) {
        return this.node.__shady_removeChild(a1);
    };
    v.replaceChild = function(a1, b) {
        return this.node.__shady_replaceChild(a1, b);
    };
    v.cloneNode = function(a1) {
        return this.node.__shady_cloneNode(a1);
    };
    v.getRootNode = function(a1) {
        return this.node.__shady_getRootNode(a1);
    };
    v.contains = function(a1) {
        return this.node.__shady_contains(a1);
    };
    v.dispatchEvent = function(a1) {
        return this.node.__shady_dispatchEvent(a1);
    };
    v.setAttribute = function(a1, b) {
        this.node.__shady_setAttribute(a1, b);
    };
    v.getAttribute = function(a1) {
        return this.node.__shady_native_getAttribute(a1);
    };
    v.hasAttribute = function(a1) {
        return this.node.__shady_native_hasAttribute(a1);
    };
    v.removeAttribute = function(a1) {
        this.node.__shady_removeAttribute(a1);
    };
    v.toggleAttribute = function(a1, b) {
        return this.node.__shady_toggleAttribute(a1, b);
    };
    v.attachShadow = function(a1) {
        return this.node.__shady_attachShadow(a1);
    };
    v.focus = function() {
        this.node.__shady_native_focus();
    };
    v.blur = function() {
        this.node.__shady_blur();
    };
    v.importNode = function(a1, b) {
        if (this.node.nodeType === Node.DOCUMENT_NODE) return this.node.__shady_importNode(a1, b);
    };
    v.getElementById = function(a1) {
        if (this.node.nodeType === Node.DOCUMENT_NODE) return this.node.__shady_getElementById(a1);
    };
    v.elementsFromPoint = function(a1, b) {
        return this.node.__shady_elementsFromPoint(a1, b);
    };
    v.elementFromPoint = function(a1, b) {
        return this.node.__shady_elementFromPoint(a1, b);
    };
    v.querySelector = function(a1) {
        return this.node.__shady_querySelector(a1);
    };
    v.querySelectorAll = function(a1, b) {
        return this.node.__shady_querySelectorAll(a1, b);
    };
    v.assignedNodes = function(a1) {
        if ("slot" === this.node.localName) return this.node.__shady_assignedNodes(a1);
    };
    v.append = function(a1) {
        for(var b = [], c = 0; c < arguments.length; ++c)b[c] = arguments[c];
        return this.node.__shady_append.apply(this.node, w(b));
    };
    v.prepend = function(a1) {
        for(var b = [], c = 0; c < arguments.length; ++c)b[c] = arguments[c];
        return this.node.__shady_prepend.apply(this.node, w(b));
    };
    v.after = function(a1) {
        for(var b = [], c = 0; c < arguments.length; ++c)b[c] = arguments[c];
        return this.node.__shady_after.apply(this.node, w(b));
    };
    v.before = function(a1) {
        for(var b = [], c = 0; c < arguments.length; ++c)b[c] = arguments[c];
        return this.node.__shady_before.apply(this.node, w(b));
    };
    v.remove = function() {
        return this.node.__shady_remove();
    };
    v.replaceWith = function(a1) {
        for(var b = [], c = 0; c < arguments.length; ++c)b[c] = arguments[c];
        return this.node.__shady_replaceWith.apply(this.node, w(b));
    };
    ea.Object.defineProperties(ag.prototype, {
        activeElement: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                if (O(this.node) || this.node.nodeType === Node.DOCUMENT_NODE) return this.node.__shady_activeElement;
            }
        },
        _activeElement: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.activeElement;
            }
        },
        host: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                if (O(this.node)) return this.node.host;
            }
        },
        parentNode: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.node.__shady_parentNode;
            }
        },
        firstChild: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.node.__shady_firstChild;
            }
        },
        lastChild: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.node.__shady_lastChild;
            }
        },
        nextSibling: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.node.__shady_nextSibling;
            }
        },
        previousSibling: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.node.__shady_previousSibling;
            }
        },
        childNodes: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.node.__shady_childNodes;
            }
        },
        parentElement: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.node.__shady_parentElement;
            }
        },
        firstElementChild: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.node.__shady_firstElementChild;
            }
        },
        lastElementChild: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.node.__shady_lastElementChild;
            }
        },
        nextElementSibling: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.node.__shady_nextElementSibling;
            }
        },
        previousElementSibling: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.node.__shady_previousElementSibling;
            }
        },
        children: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.node.__shady_children;
            }
        },
        childElementCount: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.node.__shady_childElementCount;
            }
        },
        shadowRoot: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.node.__shady_shadowRoot;
            }
        },
        assignedSlot: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.node.__shady_assignedSlot;
            }
        },
        isConnected: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.node.__shady_isConnected;
            }
        },
        innerHTML: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.node.__shady_innerHTML;
            },
            set: function(a1) {
                this.node.__shady_innerHTML = a1;
            }
        },
        textContent: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.node.__shady_textContent;
            },
            set: function(a1) {
                this.node.__shady_textContent = a1;
            }
        },
        slot: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.node.__shady_slot;
            },
            set: function(a1) {
                this.node.__shady_slot = a1;
            }
        },
        className: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.node.__shady_className;
            },
            set: function(a1) {
                this.node.__shady_className = a1;
            }
        }
    });
    function bg(a1) {
        Object.defineProperty(ag.prototype, a1, {
            get: function() {
                return this.node["__shady_" + a1];
            },
            set: function(b) {
                this.node["__shady_" + a1] = b;
            },
            configurable: !0
        });
    }
    qe.forEach(function(a1) {
        return bg(a1);
    });
    re.forEach(function(a1) {
        return bg(a1);
    });
    var cg = new WeakMap;
    function dg(a1) {
        if (O(a1) || a1 instanceof ag) return a1;
        var b = cg.get(a1);
        b || (b = new ag(a1), cg.set(a1, b));
        return b;
    }
    if (M.Ba) {
        var eg = M.D ? function(a1) {
            return a1;
        } : function(a1) {
            Nd(a1);
            Md(a1);
            return a1;
        }, ShadyDOM = {
            inUse: M.Ba,
            patch: eg,
            isShadyRoot: O,
            enqueue: hd,
            flush: id,
            flushInitial: function(a1) {
                !a1.Ia && a1.Y && Ue(a1);
            },
            settings: M,
            filterMutations: nd,
            observeChildren: ld,
            unobserveChildren: md,
            deferConnectionCallbacks: M.deferConnectionCallbacks,
            preferPerformance: M.preferPerformance,
            handlesDynamicScoping: !0,
            wrap: M.J ? dg : eg,
            wrapIfNeeded: !0 === M.J ? dg : function(a1) {
                return a1;
            },
            Wrapper: ag,
            composedPath: Wd,
            noPatch: M.J,
            patchOnDemand: M.Da,
            nativeMethods: wd,
            nativeTree: xd,
            patchElementProto: Kf,
            querySelectorImplementation: M.querySelectorImplementation
        };
        window.ShadyDOM = ShadyDOM;
        Gd();
        Jf("__shady_");
        Object.defineProperty(document, "_activeElement", Bf.activeElement);
        P(Window.prototype, Ef, "__shady_");
        M.J ? M.Da && P(Element.prototype, sf) : (Jf(), pe());
        ke();
        window.Event = me;
        window.CustomEvent = ne;
        window.MouseEvent = oe;
        window.ShadowRoot = qf;
    }
    var fg = window.Document.prototype.createElement, gg = window.Document.prototype.createElementNS, hg = window.Document.prototype.importNode, ig = window.Document.prototype.prepend, jg = window.Document.prototype.append, kg = window.DocumentFragment.prototype.prepend, lg = window.DocumentFragment.prototype.append, mg = window.Node.prototype.cloneNode, ng = window.Node.prototype.appendChild, og = window.Node.prototype.insertBefore, pg = window.Node.prototype.removeChild, qg = window.Node.prototype.replaceChild, rg = Object.getOwnPropertyDescriptor(window.Node.prototype, "textContent"), sg = window.Element.prototype.attachShadow, tg = Object.getOwnPropertyDescriptor(window.Element.prototype, "innerHTML"), ug = window.Element.prototype.getAttribute, vg = window.Element.prototype.setAttribute, wg = window.Element.prototype.removeAttribute, xg = window.Element.prototype.toggleAttribute, yg = window.Element.prototype.getAttributeNS, zg = window.Element.prototype.setAttributeNS, Ag = window.Element.prototype.removeAttributeNS, Bg = window.Element.prototype.insertAdjacentElement, Cg = window.Element.prototype.insertAdjacentHTML, Dg = window.Element.prototype.prepend, Eg = window.Element.prototype.append, Fg = window.Element.prototype.before, Gg = window.Element.prototype.after, Hg = window.Element.prototype.replaceWith, Ig = window.Element.prototype.remove, Jg = window.HTMLElement, Kg = Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, "innerHTML"), Lg = window.HTMLElement.prototype.insertAdjacentElement, Mg = window.HTMLElement.prototype.insertAdjacentHTML;
    var Ng = new Set;
    "annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" ").forEach(function(a1) {
        return Ng.add(a1);
    });
    function Og(a1) {
        var b = Ng.has(a1);
        a1 = /^[a-z][.0-9_a-z]*-[-.0-9_a-z]*$/.test(a1);
        return !b && a1;
    }
    var Pg = document.contains ? document.contains.bind(document) : document.documentElement.contains.bind(document.documentElement);
    function T(a1) {
        var b = a1.isConnected;
        if (void 0 !== b) return b;
        if (Pg(a1)) return !0;
        for(; a1 && !(a1.__CE_isImportDocument || a1 instanceof Document);)a1 = a1.parentNode || (window.ShadowRoot && a1 instanceof ShadowRoot ? a1.host : void 0);
        return !(!a1 || !(a1.__CE_isImportDocument || a1 instanceof Document));
    }
    function Qg(a1) {
        var b = a1.children;
        if (b) return Array.prototype.slice.call(b);
        b = [];
        for(a1 = a1.firstChild; a1; a1 = a1.nextSibling)a1.nodeType === Node.ELEMENT_NODE && b.push(a1);
        return b;
    }
    function Rg(a1, b) {
        for(; b && b !== a1 && !b.nextSibling;)b = b.parentNode;
        return b && b !== a1 ? b.nextSibling : null;
    }
    function Sg(a1, b, c) {
        for(var d = a1; d;){
            if (d.nodeType === Node.ELEMENT_NODE) {
                var e = d;
                b(e);
                var f = e.localName;
                if ("link" === f && "import" === e.getAttribute("rel")) {
                    d = e.import;
                    void 0 === c && (c = new Set);
                    if (d instanceof Node && !c.has(d)) for(c.add(d), d = d.firstChild; d; d = d.nextSibling)Sg(d, b, c);
                    d = Rg(a1, e);
                    continue;
                } else if ("template" === f) {
                    d = Rg(a1, e);
                    continue;
                }
                if (e = e.__CE_shadowRoot) for(e = e.firstChild; e; e = e.nextSibling)Sg(e, b, c);
            }
            d = d.firstChild ? d.firstChild : Rg(a1, d);
        }
    }
    function Tg() {
        var a1 = !(null === Ug || void 0 === Ug || !Ug.noDocumentConstructionObserver), b = !(null === Ug || void 0 === Ug || !Ug.shadyDomFastWalk);
        this.ca = [];
        this.g = [];
        this.W = !1;
        this.shadyDomFastWalk = b;
        this.sb = !a1;
    }
    function Vg(a1, b, c, d) {
        var e = window.ShadyDOM;
        if (a1.shadyDomFastWalk && e && e.inUse) {
            if (b.nodeType === Node.ELEMENT_NODE && c(b), b.querySelectorAll) for(a1 = e.nativeMethods.querySelectorAll.call(b, "*"), b = 0; b < a1.length; b++)c(a1[b]);
        } else Sg(b, c, d);
    }
    function Wg(a1, b) {
        a1.W = !0;
        a1.ca.push(b);
    }
    function Xg(a1, b) {
        a1.W = !0;
        a1.g.push(b);
    }
    function Yg(a1, b) {
        a1.W && Vg(a1, b, function(c) {
            return Zg(a1, c);
        });
    }
    function Zg(a1, b) {
        if (a1.W && !b.__CE_patched) {
            b.__CE_patched = !0;
            for(var c = 0; c < a1.ca.length; c++)a1.ca[c](b);
            for(c = 0; c < a1.g.length; c++)a1.g[c](b);
        }
    }
    function $g(a1, b) {
        var c = [];
        Vg(a1, b, function(e) {
            return c.push(e);
        });
        for(b = 0; b < c.length; b++){
            var d = c[b];
            1 === d.__CE_state ? a1.connectedCallback(d) : ah(a1, d);
        }
    }
    function bh(a1, b) {
        var c = [];
        Vg(a1, b, function(e) {
            return c.push(e);
        });
        for(b = 0; b < c.length; b++){
            var d = c[b];
            1 === d.__CE_state && a1.disconnectedCallback(d);
        }
    }
    function ch(a1, b, c) {
        c = void 0 === c ? {} : c;
        var d = c.tb, e = c.upgrade || function(g) {
            return ah(a1, g);
        }, f = [];
        Vg(a1, b, function(g) {
            a1.W && Zg(a1, g);
            if ("link" === g.localName && "import" === g.getAttribute("rel")) {
                var h = g.import;
                h instanceof Node && (h.__CE_isImportDocument = !0, h.__CE_registry = document.__CE_registry);
                h && "complete" === h.readyState ? h.__CE_documentLoadHandled = !0 : g.addEventListener("load", function() {
                    var k = g.import;
                    if (!k.__CE_documentLoadHandled) {
                        k.__CE_documentLoadHandled = !0;
                        var l = new Set;
                        d && (d.forEach(function(m) {
                            return l.add(m);
                        }), l.delete(k));
                        ch(a1, k, {
                            tb: l,
                            upgrade: e
                        });
                    }
                });
            } else f.push(g);
        }, d);
        for(b = 0; b < f.length; b++)e(f[b]);
    }
    function ah(a1, b) {
        try {
            var c = b.ownerDocument, d = c.__CE_registry;
            var e = d && (c.defaultView || c.__CE_isImportDocument) ? dh(d, b.localName) : void 0;
            if (e && void 0 === b.__CE_state) {
                e.constructionStack.push(b);
                try {
                    try {
                        if (new e.constructorFunction !== b) throw Error("The custom element constructor did not produce the element being upgraded.");
                    } finally{
                        e.constructionStack.pop();
                    }
                } catch (k) {
                    throw b.__CE_state = 2, k;
                }
                b.__CE_state = 1;
                b.__CE_definition = e;
                if (e.attributeChangedCallback && b.hasAttributes()) {
                    var f = e.observedAttributes;
                    for(e = 0; e < f.length; e++){
                        var g = f[e], h = b.getAttribute(g);
                        null !== h && a1.attributeChangedCallback(b, g, null, h, null);
                    }
                }
                T(b) && a1.connectedCallback(b);
            }
        } catch (k) {
            eh(k);
        }
    }
    Tg.prototype.connectedCallback = function(a1) {
        var b = a1.__CE_definition;
        if (b.connectedCallback) try {
            b.connectedCallback.call(a1);
        } catch (c) {
            eh(c);
        }
    };
    Tg.prototype.disconnectedCallback = function(a1) {
        var b = a1.__CE_definition;
        if (b.disconnectedCallback) try {
            b.disconnectedCallback.call(a1);
        } catch (c) {
            eh(c);
        }
    };
    Tg.prototype.attributeChangedCallback = function(a1, b, c, d, e) {
        var f = a1.__CE_definition;
        if (f.attributeChangedCallback && -1 < f.observedAttributes.indexOf(b)) try {
            f.attributeChangedCallback.call(a1, b, c, d, e);
        } catch (g) {
            eh(g);
        }
    };
    function fh(a1, b, c, d) {
        var e = b.__CE_registry;
        if (e && (null === d || "http://www.w3.org/1999/xhtml" === d) && (e = dh(e, c))) try {
            var f = new e.constructorFunction;
            if (void 0 === f.__CE_state || void 0 === f.__CE_definition) throw Error("Failed to construct '" + c + "': The returned value was not constructed with the HTMLElement constructor.");
            if ("http://www.w3.org/1999/xhtml" !== f.namespaceURI) throw Error("Failed to construct '" + c + "': The constructed element's namespace must be the HTML namespace.");
            if (f.hasAttributes()) throw Error("Failed to construct '" + c + "': The constructed element must not have any attributes.");
            if (null !== f.firstChild) throw Error("Failed to construct '" + c + "': The constructed element must not have any children.");
            if (null !== f.parentNode) throw Error("Failed to construct '" + c + "': The constructed element must not have a parent node.");
            if (f.ownerDocument !== b) throw Error("Failed to construct '" + c + "': The constructed element's owner document is incorrect.");
            if (f.localName !== c) throw Error("Failed to construct '" + c + "': The constructed element's local name is incorrect.");
            return f;
        } catch (g) {
            return eh(g), b = null === d ? fg.call(b, c) : gg.call(b, d, c), Object.setPrototypeOf(b, HTMLUnknownElement.prototype), b.__CE_state = 2, b.__CE_definition = void 0, Zg(a1, b), b;
        }
        b = null === d ? fg.call(b, c) : gg.call(b, d, c);
        Zg(a1, b);
        return b;
    }
    function eh(a1) {
        var b = "", c = "", d = 0, e = 0;
        a1 instanceof Error ? (b = a1.message, c = a1.sourceURL || a1.fileName || "", d = a1.line || a1.lineNumber || 0, e = a1.column || a1.columnNumber || 0) : b = "Uncaught " + String(a1);
        var f = void 0;
        void 0 === ErrorEvent.prototype.initErrorEvent ? f = new ErrorEvent("error", {
            cancelable: !0,
            message: b,
            filename: c,
            lineno: d,
            colno: e,
            error: a1
        }) : (f = document.createEvent("ErrorEvent"), f.initErrorEvent("error", !1, !0, b, c, d), f.preventDefault = function() {
            Object.defineProperty(this, "defaultPrevented", {
                configurable: !0,
                get: function() {
                    return !0;
                }
            });
        });
        void 0 === f.error && Object.defineProperty(f, "error", {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return a1;
            }
        });
        window.dispatchEvent(f);
        f.defaultPrevented || console.error(a1);
    }
    function gh() {
        var a1 = this;
        this.I = void 0;
        this.Ka = new Promise(function(b) {
            a1.g = b;
        });
    }
    gh.prototype.resolve = function(a1) {
        if (this.I) throw Error("Already resolved.");
        this.I = a1;
        this.g(a1);
    };
    function hh(a1) {
        var b = document;
        this.X = void 0;
        this.S = a1;
        this.g = b;
        ch(this.S, this.g);
        "loading" === this.g.readyState && (this.X = new MutationObserver(this.h.bind(this)), this.X.observe(this.g, {
            childList: !0,
            subtree: !0
        }));
    }
    function ih(a1) {
        a1.X && a1.X.disconnect();
    }
    hh.prototype.h = function(a1) {
        var b = this.g.readyState;
        "interactive" !== b && "complete" !== b || ih(this);
        for(b = 0; b < a1.length; b++)for(var c = a1[b].addedNodes, d = 0; d < c.length; d++)ch(this.S, c[d]);
    };
    function U(a1) {
        this.ma = new Map;
        this.na = new Map;
        this.Fa = new Map;
        this.wa = !1;
        this.za = new Map;
        this.la = function(b) {
            return b();
        };
        this.V = !1;
        this.oa = [];
        this.S = a1;
        this.Ga = a1.sb ? new hh(a1) : void 0;
    }
    v = U.prototype;
    v.jb = function(a1, b) {
        var c = this;
        if (!(b instanceof Function)) throw new TypeError("Custom element constructor getters must be functions.");
        jh(this, a1);
        this.ma.set(a1, b);
        this.oa.push(a1);
        this.V || (this.V = !0, this.la(function() {
            return kh(c);
        }));
    };
    v.define = function(a1, b) {
        var c = this;
        if (!(b instanceof Function)) throw new TypeError("Custom element constructors must be functions.");
        jh(this, a1);
        lh(this, a1, b);
        this.oa.push(a1);
        this.V || (this.V = !0, this.la(function() {
            return kh(c);
        }));
    };
    function jh(a1, b) {
        if (!Og(b)) throw new SyntaxError("The element name '" + b + "' is not valid.");
        if (dh(a1, b)) throw Error("A custom element with name '" + (b + "' has already been defined."));
        if (a1.wa) throw Error("A custom element is already being defined.");
    }
    function lh(a1, b, c) {
        a1.wa = !0;
        var d;
        try {
            var e = c.prototype;
            if (!(e instanceof Object)) throw new TypeError("The custom element constructor's prototype is not an object.");
            var f = function(m) {
                var q = e[m];
                if (void 0 !== q && !(q instanceof Function)) throw Error("The '" + m + "' callback must be a function.");
                return q;
            };
            var g = f("connectedCallback");
            var h = f("disconnectedCallback");
            var k = f("adoptedCallback");
            var l = (d = f("attributeChangedCallback")) && c.observedAttributes || [];
        } catch (m) {
            throw m;
        } finally{
            a1.wa = !1;
        }
        c = {
            localName: b,
            constructorFunction: c,
            connectedCallback: g,
            disconnectedCallback: h,
            adoptedCallback: k,
            attributeChangedCallback: d,
            observedAttributes: l,
            constructionStack: []
        };
        a1.na.set(b, c);
        a1.Fa.set(c.constructorFunction, c);
        return c;
    }
    v.upgrade = function(a1) {
        ch(this.S, a1);
    };
    function kh(a1) {
        if (!1 !== a1.V) {
            a1.V = !1;
            for(var b = [], c = a1.oa, d = new Map, e = 0; e < c.length; e++)d.set(c[e], []);
            ch(a1.S, document, {
                upgrade: function(k) {
                    if (void 0 === k.__CE_state) {
                        var l = k.localName, m = d.get(l);
                        m ? m.push(k) : a1.na.has(l) && b.push(k);
                    }
                }
            });
            for(e = 0; e < b.length; e++)ah(a1.S, b[e]);
            for(e = 0; e < c.length; e++){
                for(var f = c[e], g = d.get(f), h = 0; h < g.length; h++)ah(a1.S, g[h]);
                (f = a1.za.get(f)) && f.resolve(void 0);
            }
            c.length = 0;
        }
    }
    v.get = function(a1) {
        if (a1 = dh(this, a1)) return a1.constructorFunction;
    };
    v.whenDefined = function(a1) {
        if (!Og(a1)) return Promise.reject(new SyntaxError("'" + a1 + "' is not a valid custom element name."));
        var b = this.za.get(a1);
        if (b) return b.Ka;
        b = new gh;
        this.za.set(a1, b);
        var c = this.na.has(a1) || this.ma.has(a1);
        a1 = -1 === this.oa.indexOf(a1);
        c && a1 && b.resolve(void 0);
        return b.Ka;
    };
    v.polyfillWrapFlushCallback = function(a1) {
        this.Ga && ih(this.Ga);
        var b = this.la;
        this.la = function(c) {
            return a1(function() {
                return b(c);
            });
        };
    };
    function dh(a1, b) {
        var c = a1.na.get(b);
        if (c) return c;
        if (c = a1.ma.get(b)) {
            a1.ma.delete(b);
            try {
                return lh(a1, b, c());
            } catch (d) {
                eh(d);
            }
        }
    }
    U.prototype.define = U.prototype.define;
    U.prototype.upgrade = U.prototype.upgrade;
    U.prototype.get = U.prototype.get;
    U.prototype.whenDefined = U.prototype.whenDefined;
    U.prototype.polyfillDefineLazy = U.prototype.jb;
    U.prototype.polyfillWrapFlushCallback = U.prototype.polyfillWrapFlushCallback;
    function mh(a1, b, c) {
        function d(e) {
            return function(f) {
                for(var g = [], h = 0; h < arguments.length; ++h)g[h] = arguments[h];
                h = [];
                for(var k = [], l = 0; l < g.length; l++){
                    var m = g[l];
                    m instanceof Element && T(m) && k.push(m);
                    if (m instanceof DocumentFragment) for(m = m.firstChild; m; m = m.nextSibling)h.push(m);
                    else h.push(m);
                }
                e.apply(this, g);
                for(g = 0; g < k.length; g++)bh(a1, k[g]);
                if (T(this)) for(g = 0; g < h.length; g++)k = h[g], k instanceof Element && $g(a1, k);
            };
        }
        void 0 !== c.prepend && (b.prepend = d(c.prepend));
        void 0 !== c.append && (b.append = d(c.append));
    }
    function nh(a1) {
        Document.prototype.createElement = function(b) {
            return fh(a1, this, b, null);
        };
        Document.prototype.importNode = function(b, c) {
            b = hg.call(this, b, !!c);
            this.__CE_registry ? ch(a1, b) : Yg(a1, b);
            return b;
        };
        Document.prototype.createElementNS = function(b, c) {
            return fh(a1, this, c, b);
        };
        mh(a1, Document.prototype, {
            prepend: ig,
            append: jg
        });
    }
    function oh(a1) {
        function b(d) {
            return function(e) {
                for(var f = [], g = 0; g < arguments.length; ++g)f[g] = arguments[g];
                g = [];
                for(var h = [], k = 0; k < f.length; k++){
                    var l = f[k];
                    l instanceof Element && T(l) && h.push(l);
                    if (l instanceof DocumentFragment) for(l = l.firstChild; l; l = l.nextSibling)g.push(l);
                    else g.push(l);
                }
                d.apply(this, f);
                for(f = 0; f < h.length; f++)bh(a1, h[f]);
                if (T(this)) for(f = 0; f < g.length; f++)h = g[f], h instanceof Element && $g(a1, h);
            };
        }
        var c = Element.prototype;
        void 0 !== Fg && (c.before = b(Fg));
        void 0 !== Gg && (c.after = b(Gg));
        void 0 !== Hg && (c.replaceWith = function(d) {
            for(var e = [], f = 0; f < arguments.length; ++f)e[f] = arguments[f];
            f = [];
            for(var g = [], h = 0; h < e.length; h++){
                var k = e[h];
                k instanceof Element && T(k) && g.push(k);
                if (k instanceof DocumentFragment) for(k = k.firstChild; k; k = k.nextSibling)f.push(k);
                else f.push(k);
            }
            h = T(this);
            Hg.apply(this, e);
            for(e = 0; e < g.length; e++)bh(a1, g[e]);
            if (h) for(bh(a1, this), e = 0; e < f.length; e++)g = f[e], g instanceof Element && $g(a1, g);
        });
        void 0 !== Ig && (c.remove = function() {
            var d = T(this);
            Ig.call(this);
            d && bh(a1, this);
        });
    }
    function ph(a1) {
        function b(e, f) {
            Object.defineProperty(e, "innerHTML", {
                enumerable: f.enumerable,
                configurable: !0,
                get: f.get,
                set: function(g) {
                    var h = this, k = void 0;
                    T(this) && (k = [], Vg(a1, this, function(q) {
                        q !== h && k.push(q);
                    }));
                    f.set.call(this, g);
                    if (k) for(var l = 0; l < k.length; l++){
                        var m = k[l];
                        1 === m.__CE_state && a1.disconnectedCallback(m);
                    }
                    this.ownerDocument.__CE_registry ? ch(a1, this) : Yg(a1, this);
                    return g;
                }
            });
        }
        function c(e, f) {
            e.insertAdjacentElement = function(g, h) {
                var k = T(h);
                g = f.call(this, g, h);
                k && bh(a1, h);
                T(g) && $g(a1, h);
                return g;
            };
        }
        function d(e, f) {
            function g(h, k) {
                for(var l = []; h !== k; h = h.nextSibling)l.push(h);
                for(k = 0; k < l.length; k++)ch(a1, l[k]);
            }
            e.insertAdjacentHTML = function(h, k) {
                h = h.toLowerCase();
                if ("beforebegin" === h) {
                    var l = this.previousSibling;
                    f.call(this, h, k);
                    g(l || this.parentNode.firstChild, this);
                } else if ("afterbegin" === h) l = this.firstChild, f.call(this, h, k), g(this.firstChild, l);
                else if ("beforeend" === h) l = this.lastChild, f.call(this, h, k), g(l || this.firstChild, null);
                else if ("afterend" === h) l = this.nextSibling, f.call(this, h, k), g(this.nextSibling, l);
                else throw new SyntaxError("The value provided (" + String(h) + ") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.");
            };
        }
        sg && (Element.prototype.attachShadow = function(e) {
            e = sg.call(this, e);
            if (a1.W && !e.__CE_patched) {
                e.__CE_patched = !0;
                for(var f = 0; f < a1.ca.length; f++)a1.ca[f](e);
            }
            return this.__CE_shadowRoot = e;
        });
        tg && tg.get ? b(Element.prototype, tg) : Kg && Kg.get ? b(HTMLElement.prototype, Kg) : Xg(a1, function(e) {
            b(e, {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return mg.call(this, !0).innerHTML;
                },
                set: function(f) {
                    var g = "template" === this.localName, h = g ? this.content : this, k = gg.call(document, this.namespaceURI, this.localName);
                    for(k.innerHTML = f; 0 < h.childNodes.length;)pg.call(h, h.childNodes[0]);
                    for(f = g ? k.content : k; 0 < f.childNodes.length;)ng.call(h, f.childNodes[0]);
                }
            });
        });
        Element.prototype.setAttribute = function(e, f) {
            if (1 !== this.__CE_state) return vg.call(this, e, f);
            var g = ug.call(this, e);
            vg.call(this, e, f);
            f = ug.call(this, e);
            a1.attributeChangedCallback(this, e, g, f, null);
        };
        Element.prototype.setAttributeNS = function(e, f, g) {
            if (1 !== this.__CE_state) return zg.call(this, e, f, g);
            var h = yg.call(this, e, f);
            zg.call(this, e, f, g);
            g = yg.call(this, e, f);
            a1.attributeChangedCallback(this, f, h, g, e);
        };
        Element.prototype.removeAttribute = function(e) {
            if (1 !== this.__CE_state) return wg.call(this, e);
            var f = ug.call(this, e);
            wg.call(this, e);
            null !== f && a1.attributeChangedCallback(this, e, f, null, null);
        };
        xg && (Element.prototype.toggleAttribute = function(e, f) {
            if (1 !== this.__CE_state) return xg.call(this, e, f);
            var g = ug.call(this, e), h = null !== g;
            f = xg.call(this, e, f);
            h !== f && a1.attributeChangedCallback(this, e, g, f ? "" : null, null);
            return f;
        });
        Element.prototype.removeAttributeNS = function(e, f) {
            if (1 !== this.__CE_state) return Ag.call(this, e, f);
            var g = yg.call(this, e, f);
            Ag.call(this, e, f);
            var h = yg.call(this, e, f);
            g !== h && a1.attributeChangedCallback(this, f, g, h, e);
        };
        Lg ? c(HTMLElement.prototype, Lg) : Bg && c(Element.prototype, Bg);
        Mg ? d(HTMLElement.prototype, Mg) : Cg && d(Element.prototype, Cg);
        mh(a1, Element.prototype, {
            prepend: Dg,
            append: Eg
        });
        oh(a1);
    }
    var qh = {};
    function rh(a1) {
        function b() {
            var c = this.constructor;
            var d = document.__CE_registry.Fa.get(c);
            if (!d) throw Error("Failed to construct a custom element: The constructor was not registered with `customElements`.");
            var e = d.constructionStack;
            if (0 === e.length) return e = fg.call(document, d.localName), Object.setPrototypeOf(e, c.prototype), e.__CE_state = 1, e.__CE_definition = d, Zg(a1, e), e;
            var f = e.length - 1, g = e[f];
            if (g === qh) throw Error("Failed to construct '" + d.localName + "': This element was already constructed.");
            e[f] = qh;
            Object.setPrototypeOf(g, c.prototype);
            Zg(a1, g);
            return g;
        }
        b.prototype = Jg.prototype;
        Object.defineProperty(HTMLElement.prototype, "constructor", {
            writable: !0,
            configurable: !0,
            enumerable: !1,
            value: b
        });
        window.HTMLElement = b;
    }
    function sh(a1) {
        function b(c, d) {
            Object.defineProperty(c, "textContent", {
                enumerable: d.enumerable,
                configurable: !0,
                get: d.get,
                set: function(e) {
                    if (this.nodeType === Node.TEXT_NODE) d.set.call(this, e);
                    else {
                        var f = void 0;
                        if (this.firstChild) {
                            var g = this.childNodes, h = g.length;
                            if (0 < h && T(this)) {
                                f = Array(h);
                                for(var k = 0; k < h; k++)f[k] = g[k];
                            }
                        }
                        d.set.call(this, e);
                        if (f) for(e = 0; e < f.length; e++)bh(a1, f[e]);
                    }
                }
            });
        }
        Node.prototype.insertBefore = function(c, d) {
            if (c instanceof DocumentFragment) {
                var e = Qg(c);
                c = og.call(this, c, d);
                if (T(this)) for(d = 0; d < e.length; d++)$g(a1, e[d]);
                return c;
            }
            e = c instanceof Element && T(c);
            d = og.call(this, c, d);
            e && bh(a1, c);
            T(this) && $g(a1, c);
            return d;
        };
        Node.prototype.appendChild = function(c) {
            if (c instanceof DocumentFragment) {
                var d = Qg(c);
                c = ng.call(this, c);
                if (T(this)) for(var e = 0; e < d.length; e++)$g(a1, d[e]);
                return c;
            }
            d = c instanceof Element && T(c);
            e = ng.call(this, c);
            d && bh(a1, c);
            T(this) && $g(a1, c);
            return e;
        };
        Node.prototype.cloneNode = function(c) {
            c = mg.call(this, !!c);
            this.ownerDocument.__CE_registry ? ch(a1, c) : Yg(a1, c);
            return c;
        };
        Node.prototype.removeChild = function(c) {
            var d = c instanceof Element && T(c), e = pg.call(this, c);
            d && bh(a1, c);
            return e;
        };
        Node.prototype.replaceChild = function(c, d) {
            if (c instanceof DocumentFragment) {
                var e = Qg(c);
                c = qg.call(this, c, d);
                if (T(this)) for(bh(a1, d), d = 0; d < e.length; d++)$g(a1, e[d]);
                return c;
            }
            e = c instanceof Element && T(c);
            var f = qg.call(this, c, d), g = T(this);
            g && bh(a1, d);
            e && bh(a1, c);
            g && $g(a1, c);
            return f;
        };
        rg && rg.get ? b(Node.prototype, rg) : Wg(a1, function(c) {
            b(c, {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    for(var d = [], e = this.firstChild; e; e = e.nextSibling)e.nodeType !== Node.COMMENT_NODE && d.push(e.textContent);
                    return d.join("");
                },
                set: function(d) {
                    for(; this.firstChild;)pg.call(this, this.firstChild);
                    null != d && "" !== d && ng.call(this, document.createTextNode(d));
                }
            });
        });
    }
    var Ug = window.customElements;
    function th() {
        var a1 = new Tg;
        rh(a1);
        nh(a1);
        mh(a1, DocumentFragment.prototype, {
            prepend: kg,
            append: lg
        });
        sh(a1);
        ph(a1);
        window.CustomElementRegistry = U;
        a1 = new U(a1);
        document.__CE_registry = a1;
        Object.defineProperty(window, "customElements", {
            configurable: !0,
            enumerable: !0,
            value: a1
        });
    }
    Ug && !Ug.forcePolyfill && "function" == typeof Ug.define && "function" == typeof Ug.get || th();
    window.__CE_installPolyfill = th; /*

Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/ 
    function uh() {
        this.end = this.start = 0;
        this.rules = this.parent = this.previous = null;
        this.cssText = this.parsedCssText = "";
        this.atRule = !1;
        this.type = 0;
        this.parsedSelector = this.selector = this.keyframesName = "";
    }
    function vh(a1) {
        var b = a1 = a1.replace(wh, "").replace(xh, ""), c = new uh;
        c.start = 0;
        c.end = b.length;
        for(var d = c, e = 0, f = b.length; e < f; e++)if ("{" === b[e]) {
            d.rules || (d.rules = []);
            var g = d, h = g.rules[g.rules.length - 1] || null;
            d = new uh;
            d.start = e + 1;
            d.parent = g;
            d.previous = h;
            g.rules.push(d);
        } else "}" === b[e] && (d.end = e + 1, d = d.parent || c);
        return yh(c, a1);
    }
    function yh(a1, b) {
        var c = b.substring(a1.start, a1.end - 1);
        a1.parsedCssText = a1.cssText = c.trim();
        a1.parent && (c = b.substring(a1.previous ? a1.previous.end : a1.parent.start, a1.start - 1), c = zh(c), c = c.replace(Ah, " "), c = c.substring(c.lastIndexOf(";") + 1), c = a1.parsedSelector = a1.selector = c.trim(), a1.atRule = 0 === c.indexOf("@"), a1.atRule ? 0 === c.indexOf("@media") ? a1.type = Bh : c.match(Ch) && (a1.type = Dh, a1.keyframesName = a1.selector.split(Ah).pop()) : a1.type = 0 === c.indexOf("--") ? Eh : Fh);
        if (c = a1.rules) for(var d = 0, e = c.length, f = void 0; d < e && (f = c[d]); d++)yh(f, b);
        return a1;
    }
    function zh(a1) {
        return a1.replace(/\\([0-9a-f]{1,6})\s/gi, function(b, c) {
            b = c;
            for(c = 6 - b.length; c--;)b = "0" + b;
            return "\\" + b;
        });
    }
    function Gh(a1, b, c) {
        c = void 0 === c ? "" : c;
        var d = "";
        if (a1.cssText || a1.rules) {
            var e = a1.rules, f;
            if (f = e) f = e[0], f = !(f && f.selector && 0 === f.selector.indexOf("--"));
            if (f) {
                f = 0;
                for(var g = e.length, h = void 0; f < g && (h = e[f]); f++)d = Gh(h, b, d);
            } else b ? b = a1.cssText : (b = a1.cssText, b = b.replace(Hh, "").replace(Ih, ""), b = b.replace(Jh, "").replace(Kh, "")), (d = b.trim()) && (d = "  " + d + "\n");
        }
        d && (a1.selector && (c += a1.selector + " {\n"), c += d, a1.selector && (c += "}\n\n"));
        return c;
    }
    var Fh = 1, Dh = 7, Bh = 4, Eh = 1E3, wh = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim, xh = /@import[^;]*;/gim, Hh = /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim, Ih = /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim, Jh = /@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim, Kh = /[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim, Ch = /^@[^\s]*keyframes/, Ah = /\s+/g;
    var V = !(window.ShadyDOM && window.ShadyDOM.inUse), Lh;
    function Mh(a1) {
        Lh = a1 && a1.shimcssproperties ? !1 : V || !(navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/) || !window.CSS || !CSS.supports || !CSS.supports("box-shadow", "0 0 0 var(--foo)"));
    }
    var Nh;
    window.ShadyCSS && void 0 !== window.ShadyCSS.cssBuild && (Nh = window.ShadyCSS.cssBuild);
    var Oh = !(!window.ShadyCSS || !window.ShadyCSS.disableRuntime);
    window.ShadyCSS && void 0 !== window.ShadyCSS.nativeCss ? Lh = window.ShadyCSS.nativeCss : window.ShadyCSS ? (Mh(window.ShadyCSS), window.ShadyCSS = void 0) : Mh(window.WebComponents && window.WebComponents.flags);
    var W = Lh;
    var Ph = /(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi, Qh = /(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi, Rh = /(--[\w-]+)\s*([:,;)]|$)/gi, Sh = /(animation\s*:)|(animation-name\s*:)/, Th = /@media\s(.*)/, Uh = /\{[^}]*\}/g;
    var Vh = new Set;
    function Wh(a1, b) {
        if (!a1) return "";
        "string" === typeof a1 && (a1 = vh(a1));
        b && Xh(a1, b);
        return Gh(a1, W);
    }
    function Yh(a1) {
        !a1.__cssRules && a1.textContent && (a1.__cssRules = vh(a1.textContent));
        return a1.__cssRules || null;
    }
    function $h(a1) {
        return !!a1.parent && a1.parent.type === Dh;
    }
    function Xh(a1, b, c, d) {
        if (a1) {
            var e = !1, f = a1.type;
            if (d && f === Bh) {
                var g = a1.selector.match(Th);
                g && (window.matchMedia(g[1]).matches || (e = !0));
            }
            f === Fh ? b(a1) : c && f === Dh ? c(a1) : f === Eh && (e = !0);
            if ((a1 = a1.rules) && !e) for(e = 0, f = a1.length, g = void 0; e < f && (g = a1[e]); e++)Xh(g, b, c, d);
        }
    }
    function ai(a1, b, c, d) {
        var e = document.createElement("style");
        b && e.setAttribute("scope", b);
        e.textContent = a1;
        bi(e, c, d);
        return e;
    }
    var ci = null;
    function di(a1) {
        a1 = document.createComment(" Shady DOM styles for " + a1 + " ");
        var b = document.head;
        b.insertBefore(a1, (ci ? ci.nextSibling : null) || b.firstChild);
        return ci = a1;
    }
    function bi(a1, b, c) {
        b = b || document.head;
        b.insertBefore(a1, c && c.nextSibling || b.firstChild);
        ci ? a1.compareDocumentPosition(ci) === Node.DOCUMENT_POSITION_PRECEDING && (ci = a1) : ci = a1;
    }
    function ei(a1, b) {
        for(var c = 0, d = a1.length; b < d; b++)if ("(" === a1[b]) c++;
        else if (")" === a1[b] && 0 === --c) return b;
        return -1;
    }
    function fi(a1, b) {
        var c = a1.indexOf("var(");
        if (-1 === c) return b(a1, "", "", "");
        var d = ei(a1, c + 3), e = a1.substring(c + 4, d);
        c = a1.substring(0, c);
        a1 = fi(a1.substring(d + 1), b);
        d = e.indexOf(",");
        return -1 === d ? b(c, e.trim(), "", a1) : b(c, e.substring(0, d).trim(), e.substring(d + 1).trim(), a1);
    }
    function gi(a1, b) {
        V ? a1.setAttribute("class", b) : window.ShadyDOM.nativeMethods.setAttribute.call(a1, "class", b);
    }
    var hi = window.ShadyDOM && window.ShadyDOM.wrap || function(a1) {
        return a1;
    };
    function ii(a1) {
        var b = a1.localName, c = "";
        b ? -1 < b.indexOf("-") || (c = b, b = a1.getAttribute && a1.getAttribute("is") || "") : (b = a1.is, c = a1.extends);
        return {
            is: b,
            ja: c
        };
    }
    function ji(a1) {
        for(var b = [], c = "", d = 0; 0 <= d && d < a1.length; d++)if ("(" === a1[d]) {
            var e = ei(a1, d);
            c += a1.slice(d, e + 1);
            d = e;
        } else "," === a1[d] ? (b.push(c), c = "") : c += a1[d];
        c && b.push(c);
        return b;
    }
    function ki(a1) {
        if (void 0 !== Nh) return Nh;
        if (void 0 === a1.__cssBuild) {
            var b = a1.getAttribute("css-build");
            if (b) a1.__cssBuild = b;
            else {
                a: {
                    b = "template" === a1.localName ? a1.content.firstChild : a1.firstChild;
                    if (b instanceof Comment && (b = b.textContent.trim().split(":"), "css-build" === b[0])) {
                        b = b[1];
                        break a;
                    }
                    b = "";
                }
                if ("" !== b) {
                    var c = "template" === a1.localName ? a1.content.firstChild : a1.firstChild;
                    c.parentNode.removeChild(c);
                }
                a1.__cssBuild = b;
            }
        }
        return a1.__cssBuild || "";
    }
    function li(a1) {
        a1 = void 0 === a1 ? "" : a1;
        return "" !== a1 && W ? V ? "shadow" === a1 : "shady" === a1 : !1;
    }
    function mi() {}
    function ni(a1, b) {
        oi(pi, a1, function(c) {
            qi(c, b || "");
        });
    }
    function oi(a1, b, c) {
        b.nodeType === Node.ELEMENT_NODE && c(b);
        var d;
        "template" === b.localName ? d = (b.content || b._content || b).childNodes : d = b.children || b.childNodes;
        if (d) for(b = 0; b < d.length; b++)oi(a1, d[b], c);
    }
    function qi(a1, b, c) {
        if (b) {
            if (a1.classList) c ? (a1.classList.remove("style-scope"), a1.classList.remove(b)) : (a1.classList.add("style-scope"), a1.classList.add(b));
            else if (a1.getAttribute) {
                var d = a1.getAttribute("class");
                c ? d && (b = d.replace("style-scope", "").replace(b, ""), gi(a1, b)) : gi(a1, (d ? d + " " : "") + "style-scope " + b);
            }
        }
    }
    function ri(a1, b, c) {
        oi(pi, a1, function(d) {
            qi(d, b, !0);
            qi(d, c);
        });
    }
    function si(a1, b) {
        oi(pi, a1, function(c) {
            qi(c, b || "", !0);
        });
    }
    function ti(a1, b, c, d, e) {
        var f = pi;
        e = void 0 === e ? "" : e;
        "" === e && (V || "shady" === (void 0 === d ? "" : d) ? e = Wh(b, c) : (a1 = ii(a1), e = ui(f, b, a1.is, a1.ja, c) + "\n\n"));
        return e.trim();
    }
    function ui(a1, b, c, d, e) {
        var f = vi(c, d);
        c = c ? "." + c : "";
        return Wh(b, function(g) {
            g.i || (g.selector = g.G = wi(a1, g, a1.h, c, f), g.i = !0);
            e && e(g, c, f);
        });
    }
    function vi(a1, b) {
        return b ? "[is=" + a1 + "]" : a1;
    }
    function wi(a1, b, c, d, e) {
        var f = ji(b.selector);
        if (!$h(b)) {
            b = 0;
            for(var g = f.length, h = void 0; b < g && (h = f[b]); b++)f[b] = c.call(a1, h, d, e);
        }
        return f.filter(function(k) {
            return !!k;
        }).join(",");
    }
    function xi(a1) {
        return a1.replace(yi, function(b, c, d) {
            -1 < d.indexOf("+") ? d = d.replace(/\+/g, "___") : -1 < d.indexOf("___") && (d = d.replace(/___/g, "+"));
            return ":" + c + "(" + d + ")";
        });
    }
    function zi(a1) {
        for(var b = [], c; c = a1.match(Ai);){
            var d = c.index, e = ei(a1, d);
            if (-1 === e) throw Error(c.input + " selector missing ')'");
            c = a1.slice(d, e + 1);
            a1 = a1.replace(c, "");
            b.push(c);
        }
        return {
            Ea: a1,
            matches: b
        };
    }
    function Bi(a1, b) {
        var c = a1.split("");
        return b.reduce(function(d, e, f) {
            return d + e + c[f + 1];
        }, c[0]);
    }
    mi.prototype.h = function(a1, b, c) {
        var d = !1;
        a1 = a1.trim();
        var e = yi.test(a1);
        e && (a1 = a1.replace(yi, function(h, k, l) {
            return ":" + k + "(" + l.replace(/\s/g, "") + ")";
        }), a1 = xi(a1));
        var f = Ai.test(a1);
        if (f) {
            var g = zi(a1);
            a1 = g.Ea;
            g = g.matches;
        }
        a1 = a1.replace(Ci, ":host $1");
        a1 = a1.replace(Di, function(h, k, l) {
            d || (h = Ei(l, k, b, c), d = d || h.stop, k = h.Ya, l = h.value);
            return k + l;
        });
        f && (a1 = Bi(a1, g));
        e && (a1 = xi(a1));
        return a1 = a1.replace(Fi, function(h, k, l, m) {
            return '[dir="' + l + '"] ' + k + m + ", " + k + '[dir="' + l + '"]' + m;
        });
    };
    function Ei(a1, b, c, d) {
        var e = a1.indexOf("::slotted");
        0 <= a1.indexOf(":host") ? a1 = Gi(a1, d) : 0 !== e && (a1 = c ? Hi(a1, c) : a1);
        c = !1;
        0 <= e && (b = "", c = !0);
        if (c) {
            var f = !0;
            c && (a1 = a1.replace(Ii, function(g, h) {
                return " > " + h;
            }));
        }
        return {
            value: a1,
            Ya: b,
            stop: f
        };
    }
    function Hi(a1, b) {
        a1 = a1.split(/(\[.+?\])/);
        for(var c = [], d = 0; d < a1.length; d++)if (1 === d % 2) c.push(a1[d]);
        else {
            var e = a1[d];
            if ("" !== e || d !== a1.length - 1) e = e.split(":"), e[0] += b, c.push(e.join(":"));
        }
        return c.join("");
    }
    function Gi(a1, b) {
        var c = a1.match(Ji);
        return (c = c && c[2].trim() || "") ? c[0].match(Ki) ? a1.replace(Ji, function(d, e, f) {
            return b + f;
        }) : c.split(Ki)[0] === b ? c : "should_not_match" : a1.replace(":host", b);
    }
    function Li(a1) {
        ":root" === a1.selector && (a1.selector = "html");
    }
    mi.prototype.i = function(a1) {
        return a1.match(":host") ? "" : a1.match("::slotted") ? this.h(a1, ":not(.style-scope)") : Hi(a1.trim(), ":not(.style-scope)");
    };
    ea.Object.defineProperties(mi.prototype, {
        g: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return "style-scope";
            }
        }
    });
    var yi = /:(nth[-\w]+)\(([^)]+)\)/, Di = /(^|[\s>+~]+)((?:\[.+?\]|[^\s>+~=[])+)/g, Ki = /[[.:#*]/, Ci = /^(::slotted)/, Ji = /(:host)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/, Ii = /(?:::slotted)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/, Fi = /(.*):dir\((?:(ltr|rtl))\)(.*)/, Ai = /:(?:matches|any|-(?:webkit|moz)-any)/, pi = new mi;
    function Mi(a1, b, c, d, e) {
        this.M = a1 || null;
        this.h = b || null;
        this.Ca = c || [];
        this.K = null;
        this.cssBuild = e || "";
        this.ja = d || "";
        this.g = this.L = this.R = null;
    }
    function Ni(a1) {
        return a1 ? a1.__styleInfo : null;
    }
    function Oi(a1, b) {
        return a1.__styleInfo = b;
    }
    Mi.prototype.i = function() {
        return this.M;
    };
    Mi.prototype._getStyleRules = Mi.prototype.i;
    function Pi(a1) {
        var b = this.matches || this.matchesSelector || this.mozMatchesSelector || this.msMatchesSelector || this.oMatchesSelector || this.webkitMatchesSelector;
        return b && b.call(this, a1);
    }
    var Qi = /:host\s*>\s*/, Ri = navigator.userAgent.match("Trident");
    function Si() {}
    function Ti(a1) {
        var b = {}, c = [], d = 0;
        Xh(a1, function(f) {
            Ui(f);
            f.index = d++;
            f = f.F.cssText;
            for(var g; g = Rh.exec(f);){
                var h = g[1];
                ":" !== g[2] && (b[h] = !0);
            }
        }, function(f) {
            c.push(f);
        });
        a1.h = c;
        a1 = [];
        for(var e in b)a1.push(e);
        return a1;
    }
    function Ui(a1) {
        if (!a1.F) {
            var b = {}, c = {};
            Vi(a1, c) && (b.P = c, a1.rules = null);
            b.cssText = a1.parsedCssText.replace(Uh, "").replace(Ph, "");
            a1.F = b;
        }
    }
    function Vi(a1, b) {
        var c = a1.F;
        if (c) {
            if (c.P) return Object.assign(b, c.P), !0;
        } else {
            c = a1.parsedCssText;
            for(var d; a1 = Ph.exec(c);){
                d = (a1[2] || a1[3]).trim();
                if ("inherit" !== d || "unset" !== d) b[a1[1].trim()] = d;
                d = !0;
            }
            return d;
        }
    }
    function Wi(a1, b, c) {
        b && (b = 0 <= b.indexOf(";") ? Xi(a1, b, c) : fi(b, function(d, e, f, g) {
            if (!e) return d + g;
            (e = Wi(a1, c[e], c)) && "initial" !== e ? "apply-shim-inherit" === e && (e = "inherit") : e = Wi(a1, c[f] || f, c) || f;
            return d + (e || "") + g;
        }));
        return b && b.trim() || "";
    }
    function Xi(a1, b, c) {
        b = b.split(";");
        for(var d = 0, e, f; d < b.length; d++)if (e = b[d]) {
            Qh.lastIndex = 0;
            if (f = Qh.exec(e)) e = Wi(a1, c[f[1]], c);
            else if (f = e.indexOf(":"), -1 !== f) {
                var g = e.substring(f);
                g = g.trim();
                g = Wi(a1, g, c) || g;
                e = e.substring(0, f) + g;
            }
            b[d] = e && e.lastIndexOf(";") === e.length - 1 ? e.slice(0, -1) : e || "";
        }
        return b.join(";");
    }
    function Yi(a1, b) {
        var c = {}, d = [];
        Xh(a1, function(e) {
            e.F || Ui(e);
            var f = e.G || e.parsedSelector;
            b && e.F.P && f && Pi.call(b, f) && (Vi(e, c), e = e.index, f = parseInt(e / 32, 10), d[f] = (d[f] || 0) | 1 << e % 32);
        }, null, !0);
        return {
            P: c,
            key: d
        };
    }
    function Zi(a1, b, c, d) {
        b.F || Ui(b);
        if (b.F.P) {
            var e = ii(a1);
            a1 = e.is;
            e = e.ja;
            e = a1 ? vi(a1, e) : "html";
            var f = b.parsedSelector;
            var g = !!f.match(Qi) || "html" === e && -1 < f.indexOf("html");
            var h = 0 === f.indexOf(":host") && !g;
            "shady" === c && (g = f === e + " > *." + e || -1 !== f.indexOf("html"), h = !g && 0 === f.indexOf(e));
            if (g || h) c = e, h && (b.G || (b.G = wi(pi, b, pi.h, a1 ? "." + a1 : "", e)), c = b.G || e), g && "html" === e && (c = b.G || b.O), d({
                Ea: c,
                gb: h,
                vb: g
            });
        }
    }
    function $i(a1, b, c) {
        var d = {}, e = {};
        Xh(b, function(f) {
            Zi(a1, f, c, function(g) {
                Pi.call(a1._element || a1, g.Ea) && (g.gb ? Vi(f, d) : Vi(f, e));
            });
        }, null, !0);
        return {
            mb: e,
            eb: d
        };
    }
    function aj(a1, b, c, d) {
        var e = ii(b), f = vi(e.is, e.ja), g = new RegExp("(?:^|[^.#[:])" + (b.extends ? "\\" + f.slice(0, -1) + "\\]" : f) + "($|[.:[\\s>+~])"), h = Ni(b);
        e = h.M;
        h = h.cssBuild;
        var k = bj(e, d);
        return ti(b, e, function(l) {
            var m = "";
            l.F || Ui(l);
            l.F.cssText && (m = Xi(a1, l.F.cssText, c));
            l.cssText = m;
            if (!V && !$h(l) && l.cssText) {
                var q = m = l.cssText;
                null == l.Ma && (l.Ma = Sh.test(m));
                if (l.Ma) {
                    if (null == l.ra) {
                        l.ra = [];
                        for(var H in k)q = k[H], q = q(m), m !== q && (m = q, l.ra.push(H));
                    } else {
                        for(H = 0; H < l.ra.length; ++H)q = k[l.ra[H]], m = q(m);
                        q = m;
                    }
                }
                l.cssText = q;
                l.G = l.G || l.selector;
                m = "." + d;
                H = ji(l.G);
                q = 0;
                for(var C = H.length, t1 = void 0; q < C && (t1 = H[q]); q++)H[q] = t1.match(g) ? t1.replace(f, m) : m + " " + t1;
                l.selector = H.join(",");
            }
        }, h);
    }
    function bj(a1, b) {
        a1 = a1.h;
        var c = {};
        if (!V && a1) for(var d = 0, e = a1[d]; d < a1.length; e = a1[++d]){
            var f = e, g = b;
            f.u = new RegExp("\\b" + f.keyframesName + "(?!\\B|-)", "g");
            f.g = f.keyframesName + "-" + g;
            f.G = f.G || f.selector;
            f.selector = f.G.replace(f.keyframesName, f.g);
            c[e.keyframesName] = cj(e);
        }
        return c;
    }
    function cj(a1) {
        return function(b) {
            return b.replace(a1.u, a1.g);
        };
    }
    function dj(a1, b) {
        var c = ej, d = Yh(a1);
        a1.textContent = Wh(d, function(e) {
            var f = e.cssText = e.parsedCssText;
            e.F && e.F.cssText && (f = f.replace(Hh, "").replace(Ih, ""), e.cssText = Xi(c, f, b));
        });
    }
    ea.Object.defineProperties(Si.prototype, {
        g: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return "x-scope";
            }
        }
    });
    var ej = new Si;
    var fj = {}, gj = window.customElements;
    if (gj && !V && !Oh) {
        var hj = gj.define;
        gj.define = function(a1, b, c) {
            fj[a1] || (fj[a1] = di(a1));
            hj.call(gj, a1, b, c);
        };
    }
    function ij() {
        this.cache = {};
    }
    ij.prototype.store = function(a1, b, c, d) {
        var e = this.cache[a1] || [];
        e.push({
            P: b,
            styleElement: c,
            L: d
        });
        100 < e.length && e.shift();
        this.cache[a1] = e;
    };
    function jj() {}
    var kj = new RegExp(pi.g + "\\s*([^\\s]*)");
    function lj(a1) {
        return (a1 = (a1.classList && a1.classList.value ? a1.classList.value : a1.getAttribute("class") || "").match(kj)) ? a1[1] : "";
    }
    function mj(a1) {
        var b = hi(a1).getRootNode();
        return b === a1 || b === a1.ownerDocument ? "" : (a1 = b.host) ? ii(a1).is : "";
    }
    function nj(a1) {
        for(var b = 0; b < a1.length; b++){
            var c = a1[b];
            if (c.target !== document.documentElement && c.target !== document.head) for(var d = 0; d < c.addedNodes.length; d++){
                var e = c.addedNodes[d];
                if (e.nodeType === Node.ELEMENT_NODE) {
                    var f = e.getRootNode(), g = lj(e);
                    if (g && f === e.ownerDocument && ("style" !== e.localName && "template" !== e.localName || "" === ki(e))) si(e, g);
                    else if (f instanceof ShadowRoot) for(f = mj(e), f !== g && ri(e, g, f), e = window.ShadyDOM.nativeMethods.querySelectorAll.call(e, ":not(." + pi.g + ")"), g = 0; g < e.length; g++){
                        f = e[g];
                        var h = mj(f);
                        h && qi(f, h);
                    }
                }
            }
        }
    }
    if (!(V || window.ShadyDOM && window.ShadyDOM.handlesDynamicScoping)) {
        var oj = new MutationObserver(nj), pj = function(a1) {
            oj.observe(a1, {
                childList: !0,
                subtree: !0
            });
        };
        if (window.customElements && !window.customElements.polyfillWrapFlushCallback) pj(document);
        else {
            var qj = function() {
                pj(document.body);
            };
            window.HTMLImports ? window.HTMLImports.whenReady(qj) : requestAnimationFrame(function() {
                if ("loading" === document.readyState) {
                    var a1 = function() {
                        qj();
                        document.removeEventListener("readystatechange", a1);
                    };
                    document.addEventListener("readystatechange", a1);
                } else qj();
            });
        }
        jj = function() {
            nj(oj.takeRecords());
        };
    }
    var rj = {};
    var sj = Promise.resolve();
    function tj(a1) {
        if (a1 = rj[a1]) a1._applyShimCurrentVersion = a1._applyShimCurrentVersion || 0, a1._applyShimValidatingVersion = a1._applyShimValidatingVersion || 0, a1._applyShimNextVersion = (a1._applyShimNextVersion || 0) + 1;
    }
    function uj(a1) {
        return a1._applyShimCurrentVersion === a1._applyShimNextVersion;
    }
    function vj(a1) {
        a1._applyShimValidatingVersion = a1._applyShimNextVersion;
        a1._validating || (a1._validating = !0, sj.then(function() {
            a1._applyShimCurrentVersion = a1._applyShimNextVersion;
            a1._validating = !1;
        }));
    }
    var wj = {}, xj = new ij;
    function Y() {
        this.ea = {};
        this.i = document.documentElement;
        var a1 = new uh;
        a1.rules = [];
        this.u = Oi(this.i, new Mi(a1));
        this.O = !1;
        this.g = this.h = null;
    }
    v = Y.prototype;
    v.flush = function() {
        jj();
    };
    v.bb = function(a1) {
        return Yh(a1);
    };
    v.qb = function(a1) {
        return Wh(a1);
    };
    v.prepareTemplate = function(a1, b, c) {
        this.prepareTemplateDom(a1, b);
        this.prepareTemplateStyles(a1, b, c);
    };
    v.prepareTemplateStyles = function(a1, b, c) {
        if (!a1._prepared && !Oh) {
            V || fj[b] || (fj[b] = di(b));
            a1._prepared = !0;
            a1.name = b;
            a1.extends = c;
            rj[b] = a1;
            var d = ki(a1), e = li(d);
            c = {
                is: b,
                extends: c
            };
            for(var f = [], g = a1.content.querySelectorAll("style"), h = 0; h < g.length; h++){
                var k = g[h];
                if (k.hasAttribute("shady-unscoped")) {
                    if (!V) {
                        var l = k.textContent;
                        if (!Vh.has(l)) {
                            Vh.add(l);
                            var m = document.createElement("style");
                            m.setAttribute("shady-unscoped", "");
                            m.textContent = l;
                            document.head.appendChild(m);
                        }
                        k.parentNode.removeChild(k);
                    }
                } else f.push(k.textContent), k.parentNode.removeChild(k);
            }
            f = f.join("").trim() + (wj[b] || "");
            yj(this);
            if (!e) {
                if (g = !d) g = Qh.test(f) || Ph.test(f), Qh.lastIndex = 0, Ph.lastIndex = 0;
                h = vh(f);
                g && W && this.h && this.h.transformRules(h, b);
                a1._styleAst = h;
            }
            g = [];
            W || (g = Ti(a1._styleAst));
            if (!g.length || W) h = V ? a1.content : null, b = fj[b] || null, d = ti(c, a1._styleAst, null, d, e ? f : ""), d = d.length ? ai(d, c.is, h, b) : null, a1._style = d;
            a1.g = g;
        }
    };
    v.kb = function(a1, b) {
        wj[b] = a1.join(" ");
    };
    v.prepareTemplateDom = function(a1, b) {
        if (!Oh) {
            var c = ki(a1);
            V || "shady" === c || a1._domPrepared || (a1._domPrepared = !0, ni(a1.content, b));
        }
    };
    function zj(a1) {
        var b = ii(a1), c = b.is;
        b = b.ja;
        var d = fj[c] || null, e = rj[c];
        if (e) {
            c = e._styleAst;
            var f = e.g;
            e = ki(e);
            b = new Mi(c, d, f, b, e);
            Oi(a1, b);
            return b;
        }
    }
    function Aj(a1) {
        !a1.g && window.ShadyCSS && window.ShadyCSS.CustomStyleInterface && (a1.g = window.ShadyCSS.CustomStyleInterface, a1.g.transformCallback = function(b) {
            a1.Qa(b);
        }, a1.g.validateCallback = function() {
            requestAnimationFrame(function() {
                (a1.g.enqueued || a1.O) && a1.flushCustomStyles();
            });
        });
    }
    function yj(a1) {
        if (!a1.h && window.ShadyCSS && window.ShadyCSS.ApplyShim) {
            a1.h = window.ShadyCSS.ApplyShim;
            a1.h.invalidCallback = tj;
            var b = !0;
        } else b = !1;
        Aj(a1);
        return b;
    }
    v.flushCustomStyles = function() {
        if (!Oh) {
            var a1 = yj(this);
            if (this.g) {
                var b = this.g.processStyles();
                if ((a1 || this.g.enqueued) && !li(this.u.cssBuild)) {
                    if (W) {
                        if (!this.u.cssBuild) for(a1 = 0; a1 < b.length; a1++){
                            var c = this.g.getStyleForCustomStyle(b[a1]);
                            if (c && W && this.h) {
                                var d = Yh(c);
                                yj(this);
                                this.h.transformRules(d);
                                c.textContent = Wh(d);
                            }
                        }
                    } else {
                        Bj(this, b);
                        Cj(this, this.i, this.u);
                        for(a1 = 0; a1 < b.length; a1++)(c = this.g.getStyleForCustomStyle(b[a1])) && dj(c, this.u.R);
                        this.O && this.styleDocument();
                    }
                    this.g.enqueued = !1;
                }
            }
        }
    };
    function Bj(a1, b) {
        b = b.map(function(c) {
            return a1.g.getStyleForCustomStyle(c);
        }).filter(function(c) {
            return !!c;
        });
        b.sort(function(c, d) {
            c = d.compareDocumentPosition(c);
            return c & Node.DOCUMENT_POSITION_FOLLOWING ? 1 : c & Node.DOCUMENT_POSITION_PRECEDING ? -1 : 0;
        });
        a1.u.M.rules = b.map(function(c) {
            return Yh(c);
        });
    }
    v.styleElement = function(a1, b) {
        if (Oh) {
            if (b) {
                Ni(a1) || Oi(a1, new Mi(null));
                var c = Ni(a1);
                c.K = c.K || {};
                Object.assign(c.K, b);
                Dj(this, a1, c);
            }
        } else if (c = Ni(a1) || zj(a1)) {
            if (a1 !== this.i && (this.O = !0), b && (c.K = c.K || {}, Object.assign(c.K, b)), W) Dj(this, a1, c);
            else if (this.flush(), Cj(this, a1, c), c.Ca && c.Ca.length) {
                b = ii(a1).is;
                var d;
                a: {
                    if (d = xj.cache[b]) for(var e = d.length - 1; 0 <= e; e--){
                        var f = d[e];
                        b: {
                            var g = c.Ca;
                            for(var h = 0; h < g.length; h++){
                                var k = g[h];
                                if (f.P[k] !== c.R[k]) {
                                    g = !1;
                                    break b;
                                }
                            }
                            g = !0;
                        }
                        if (g) {
                            d = f;
                            break a;
                        }
                    }
                    d = void 0;
                }
                g = d ? d.styleElement : null;
                e = c.L;
                (f = d && d.L) || (f = this.ea[b] = (this.ea[b] || 0) + 1, f = b + "-" + f);
                c.L = f;
                f = c.L;
                h = ej;
                h = g ? g.textContent || "" : aj(h, a1, c.R, f);
                k = Ni(a1);
                var l = k.g;
                l && !V && l !== g && (l._useCount--, 0 >= l._useCount && l.parentNode && l.parentNode.removeChild(l));
                V ? k.g ? (k.g.textContent = h, g = k.g) : h && (g = ai(h, f, a1.shadowRoot, k.h)) : g ? g.parentNode || (Ri && -1 < h.indexOf("@media") && (g.textContent = h), bi(g, null, k.h)) : h && (g = ai(h, f, null, k.h));
                g && (g._useCount = g._useCount || 0, k.g != g && g._useCount++, k.g = g);
                f = g;
                V || (g = c.L, k = h = a1.getAttribute("class") || "", e && (k = h.replace(new RegExp("\\s*x-scope\\s*" + e + "\\s*", "g"), " ")), k += (k ? " " : "") + "x-scope " + g, h !== k && gi(a1, k));
                d || xj.store(b, c.R, f, c.L);
            }
        }
    };
    function Dj(a1, b, c) {
        var d = ii(b).is;
        if (c.K) {
            var e = c.K, f;
            for(f in e)null === f ? b.style.removeProperty(f) : b.style.setProperty(f, e[f]);
        }
        e = rj[d];
        if (!(!e && b !== a1.i || e && "" !== ki(e)) && e && e._style && !uj(e)) {
            if (uj(e) || e._applyShimValidatingVersion !== e._applyShimNextVersion) yj(a1), a1.h && a1.h.transformRules(e._styleAst, d), e._style.textContent = ti(b, c.M), vj(e);
            V && (a1 = b.shadowRoot) && (a1 = a1.querySelector("style")) && (a1.textContent = ti(b, c.M));
            c.M = e._styleAst;
        }
    }
    function Ej(a1, b) {
        return (b = hi(b).getRootNode().host) ? Ni(b) || zj(b) ? b : Ej(a1, b) : a1.i;
    }
    function Cj(a1, b, c) {
        var d = Ej(a1, b), e = Ni(d), f = e.R;
        d === a1.i || f || (Cj(a1, d, e), f = e.R);
        a1 = Object.create(f || null);
        d = $i(b, c.M, c.cssBuild);
        b = Yi(e.M, b).P;
        Object.assign(a1, d.eb, b, d.mb);
        b = c.K;
        for(var g in b)if ((e = b[g]) || 0 === e) a1[g] = e;
        g = ej;
        b = Object.getOwnPropertyNames(a1);
        for(e = 0; e < b.length; e++)d = b[e], a1[d] = Wi(g, a1[d], a1);
        c.R = a1;
    }
    v.styleDocument = function(a1) {
        this.styleSubtree(this.i, a1);
    };
    v.styleSubtree = function(a1, b) {
        var c = hi(a1), d = c.shadowRoot, e = a1 === this.i;
        (d || e) && this.styleElement(a1, b);
        if (a1 = e ? c : d) for(a1 = Array.from(a1.querySelectorAll("*")).filter(function(f) {
            return hi(f).shadowRoot;
        }), b = 0; b < a1.length; b++)this.styleSubtree(a1[b]);
    };
    v.Qa = function(a1) {
        var b = this, c = ki(a1);
        c !== this.u.cssBuild && (this.u.cssBuild = c);
        if (!li(c)) {
            var d = Yh(a1);
            Xh(d, function(e) {
                if (V) Li(e);
                else {
                    var f = pi;
                    e.selector = e.parsedSelector;
                    Li(e);
                    e.selector = e.G = wi(f, e, f.i, void 0, void 0);
                }
                W && "" === c && (yj(b), b.h && b.h.transformRule(e));
            });
            W ? a1.textContent = Wh(d) : this.u.M.rules.push(d);
        }
    };
    v.getComputedStyleValue = function(a1, b) {
        var c;
        W || (c = (Ni(a1) || Ni(Ej(this, a1))).R[b]);
        return (c = c || window.getComputedStyle(a1).getPropertyValue(b)) ? c.trim() : "";
    };
    v.pb = function(a1, b) {
        var c = hi(a1).getRootNode();
        b = b ? ("string" === typeof b ? b : String(b)).split(/\s/) : [];
        c = c.host && c.host.localName;
        if (!c) {
            var d = a1.getAttribute("class");
            if (d) {
                d = d.split(/\s/);
                for(var e = 0; e < d.length; e++)if (d[e] === pi.g) {
                    c = d[e + 1];
                    break;
                }
            }
        }
        c && b.push(pi.g, c);
        W || (c = Ni(a1)) && c.L && b.push(ej.g, c.L);
        gi(a1, b.join(" "));
    };
    v.Xa = function(a1) {
        return Ni(a1);
    };
    v.ob = function(a1, b) {
        qi(a1, b);
    };
    v.rb = function(a1, b) {
        qi(a1, b, !0);
    };
    v.nb = function(a1) {
        return mj(a1);
    };
    v.$a = function(a1) {
        return lj(a1);
    };
    Y.prototype.flush = Y.prototype.flush;
    Y.prototype.prepareTemplate = Y.prototype.prepareTemplate;
    Y.prototype.styleElement = Y.prototype.styleElement;
    Y.prototype.styleDocument = Y.prototype.styleDocument;
    Y.prototype.styleSubtree = Y.prototype.styleSubtree;
    Y.prototype.getComputedStyleValue = Y.prototype.getComputedStyleValue;
    Y.prototype.setElementClass = Y.prototype.pb;
    Y.prototype._styleInfoForNode = Y.prototype.Xa;
    Y.prototype.transformCustomStyleForDocument = Y.prototype.Qa;
    Y.prototype.getStyleAst = Y.prototype.bb;
    Y.prototype.styleAstToString = Y.prototype.qb;
    Y.prototype.flushCustomStyles = Y.prototype.flushCustomStyles;
    Y.prototype.scopeNode = Y.prototype.ob;
    Y.prototype.unscopeNode = Y.prototype.rb;
    Y.prototype.scopeForNode = Y.prototype.nb;
    Y.prototype.currentScopeForNode = Y.prototype.$a;
    Y.prototype.prepareAdoptedCssText = Y.prototype.kb;
    Object.defineProperties(Y.prototype, {
        nativeShadow: {
            get: function() {
                return V;
            }
        },
        nativeCss: {
            get: function() {
                return W;
            }
        }
    });
    var Z = new Y, Fj, Gj;
    window.ShadyCSS && (Fj = window.ShadyCSS.ApplyShim, Gj = window.ShadyCSS.CustomStyleInterface);
    window.ShadyCSS = {
        ScopingShim: Z,
        prepareTemplate: function(a1, b, c) {
            Z.flushCustomStyles();
            Z.prepareTemplate(a1, b, c);
        },
        prepareTemplateDom: function(a1, b) {
            Z.prepareTemplateDom(a1, b);
        },
        prepareTemplateStyles: function(a1, b, c) {
            Z.flushCustomStyles();
            Z.prepareTemplateStyles(a1, b, c);
        },
        styleSubtree: function(a1, b) {
            Z.flushCustomStyles();
            Z.styleSubtree(a1, b);
        },
        styleElement: function(a1) {
            Z.flushCustomStyles();
            Z.styleElement(a1);
        },
        styleDocument: function(a1) {
            Z.flushCustomStyles();
            Z.styleDocument(a1);
        },
        flushCustomStyles: function() {
            Z.flushCustomStyles();
        },
        getComputedStyleValue: function(a1, b) {
            return Z.getComputedStyleValue(a1, b);
        },
        nativeCss: W,
        nativeShadow: V,
        cssBuild: Nh,
        disableRuntime: Oh
    };
    Fj && (window.ShadyCSS.ApplyShim = Fj);
    Gj && (window.ShadyCSS.CustomStyleInterface = Gj);
    (function(a1) {
        function b(t1) {
            "" == t1 && (f.call(this), this.m = !0);
            return t1.toLowerCase();
        }
        function c(t1) {
            var F = t1.charCodeAt(0);
            return 32 < F && 127 > F && -1 == [
                34,
                35,
                60,
                62,
                63,
                96
            ].indexOf(F) ? t1 : encodeURIComponent(t1);
        }
        function d(t1) {
            var F = t1.charCodeAt(0);
            return 32 < F && 127 > F && -1 == [
                34,
                35,
                60,
                62,
                96
            ].indexOf(F) ? t1 : encodeURIComponent(t1);
        }
        function e(t1, F, E) {
            function N(ha) {
                sa.push(ha);
            }
            var y = F || "scheme start", X = 0, x = "", ta = !1, ia = !1, sa = [];
            a: for(; (void 0 != t1[X - 1] || 0 == X) && !this.m;){
                var n = t1[X];
                switch(y){
                    case "scheme start":
                        if (n && q.test(n)) x += n.toLowerCase(), y = "scheme";
                        else if (F) {
                            N("Invalid scheme.");
                            break a;
                        } else {
                            x = "";
                            y = "no scheme";
                            continue;
                        }
                        break;
                    case "scheme":
                        if (n && H.test(n)) x += n.toLowerCase();
                        else if (":" == n) {
                            this.l = x;
                            x = "";
                            if (F) break a;
                            void 0 !== l[this.l] && (this.H = !0);
                            y = "file" == this.l ? "relative" : this.H && E && E.l == this.l ? "relative or authority" : this.H ? "authority first slash" : "scheme data";
                        } else if (F) {
                            void 0 != n && N("Code point not allowed in scheme: " + n);
                            break a;
                        } else {
                            x = "";
                            X = 0;
                            y = "no scheme";
                            continue;
                        }
                        break;
                    case "scheme data":
                        "?" == n ? (this.A = "?", y = "query") : "#" == n ? (this.C = "#", y = "fragment") : void 0 != n && "	" != n && "\n" != n && "\r" != n && (this.ya += c(n));
                        break;
                    case "no scheme":
                        if (E && void 0 !== l[E.l]) {
                            y = "relative";
                            continue;
                        } else N("Missing scheme."), f.call(this), this.m = !0;
                        break;
                    case "relative or authority":
                        if ("/" == n && "/" == t1[X + 1]) y = "authority ignore slashes";
                        else {
                            N("Expected /, got: " + n);
                            y = "relative";
                            continue;
                        }
                        break;
                    case "relative":
                        this.H = !0;
                        "file" != this.l && (this.l = E.l);
                        if (void 0 == n) {
                            this.o = E.o;
                            this.v = E.v;
                            this.s = E.s.slice();
                            this.A = E.A;
                            this.B = E.B;
                            this.j = E.j;
                            break a;
                        } else if ("/" == n || "\\" == n) "\\" == n && N("\\ is an invalid code point."), y = "relative slash";
                        else if ("?" == n) this.o = E.o, this.v = E.v, this.s = E.s.slice(), this.A = "?", this.B = E.B, this.j = E.j, y = "query";
                        else if ("#" == n) this.o = E.o, this.v = E.v, this.s = E.s.slice(), this.A = E.A, this.C = "#", this.B = E.B, this.j = E.j, y = "fragment";
                        else {
                            y = t1[X + 1];
                            var J = t1[X + 2];
                            if ("file" != this.l || !q.test(n) || ":" != y && "|" != y || void 0 != J && "/" != J && "\\" != J && "?" != J && "#" != J) this.o = E.o, this.v = E.v, this.B = E.B, this.j = E.j, this.s = E.s.slice(), this.s.pop();
                            y = "relative path";
                            continue;
                        }
                        break;
                    case "relative slash":
                        if ("/" == n || "\\" == n) "\\" == n && N("\\ is an invalid code point."), y = "file" == this.l ? "file host" : "authority ignore slashes";
                        else {
                            "file" != this.l && (this.o = E.o, this.v = E.v, this.B = E.B, this.j = E.j);
                            y = "relative path";
                            continue;
                        }
                        break;
                    case "authority first slash":
                        if ("/" == n) y = "authority second slash";
                        else {
                            N("Expected '/', got: " + n);
                            y = "authority ignore slashes";
                            continue;
                        }
                        break;
                    case "authority second slash":
                        y = "authority ignore slashes";
                        if ("/" != n) {
                            N("Expected '/', got: " + n);
                            continue;
                        }
                        break;
                    case "authority ignore slashes":
                        if ("/" != n && "\\" != n) {
                            y = "authority";
                            continue;
                        } else N("Expected authority, got: " + n);
                        break;
                    case "authority":
                        if ("@" == n) {
                            ta && (N("@ already seen."), x += "%40");
                            ta = !0;
                            for(n = 0; n < x.length; n++)J = x[n], "	" == J || "\n" == J || "\r" == J ? N("Invalid whitespace in authority.") : ":" == J && null === this.j ? this.j = "" : (J = c(J), null !== this.j ? this.j += J : this.B += J);
                            x = "";
                        } else if (void 0 == n || "/" == n || "\\" == n || "?" == n || "#" == n) {
                            X -= x.length;
                            x = "";
                            y = "host";
                            continue;
                        } else x += n;
                        break;
                    case "file host":
                        if (void 0 == n || "/" == n || "\\" == n || "?" == n || "#" == n) {
                            2 != x.length || !q.test(x[0]) || ":" != x[1] && "|" != x[1] ? (0 != x.length && (this.o = b.call(this, x), x = ""), y = "relative path start") : y = "relative path";
                            continue;
                        } else "	" == n || "\n" == n || "\r" == n ? N("Invalid whitespace in file host.") : x += n;
                        break;
                    case "host":
                    case "hostname":
                        if (":" != n || ia) {
                            if (void 0 == n || "/" == n || "\\" == n || "?" == n || "#" == n) {
                                this.o = b.call(this, x);
                                x = "";
                                y = "relative path start";
                                if (F) break a;
                                continue;
                            } else "	" != n && "\n" != n && "\r" != n ? ("[" == n ? ia = !0 : "]" == n && (ia = !1), x += n) : N("Invalid code point in host/hostname: " + n);
                        } else if (this.o = b.call(this, x), x = "", y = "port", "hostname" == F) break a;
                        break;
                    case "port":
                        if (/[0-9]/.test(n)) x += n;
                        else if (void 0 == n || "/" == n || "\\" == n || "?" == n || "#" == n || F) {
                            "" != x && (x = parseInt(x, 10), x != l[this.l] && (this.v = x + ""), x = "");
                            if (F) break a;
                            y = "relative path start";
                            continue;
                        } else "	" == n || "\n" == n || "\r" == n ? N("Invalid code point in port: " + n) : (f.call(this), this.m = !0);
                        break;
                    case "relative path start":
                        "\\" == n && N("'\\' not allowed in path.");
                        y = "relative path";
                        if ("/" != n && "\\" != n) continue;
                        break;
                    case "relative path":
                        if (void 0 != n && "/" != n && "\\" != n && (F || "?" != n && "#" != n)) "	" != n && "\n" != n && "\r" != n && (x += c(n));
                        else {
                            "\\" == n && N("\\ not allowed in relative path.");
                            if (J = m[x.toLowerCase()]) x = J;
                            ".." == x ? (this.s.pop(), "/" != n && "\\" != n && this.s.push("")) : "." == x && "/" != n && "\\" != n ? this.s.push("") : "." != x && ("file" == this.l && 0 == this.s.length && 2 == x.length && q.test(x[0]) && "|" == x[1] && (x = x[0] + ":"), this.s.push(x));
                            x = "";
                            "?" == n ? (this.A = "?", y = "query") : "#" == n && (this.C = "#", y = "fragment");
                        }
                        break;
                    case "query":
                        F || "#" != n ? void 0 != n && "	" != n && "\n" != n && "\r" != n && (this.A += d(n)) : (this.C = "#", y = "fragment");
                        break;
                    case "fragment":
                        void 0 != n && "	" != n && "\n" != n && "\r" != n && (this.C += n);
                }
                X++;
            }
        }
        function f() {
            this.B = this.ya = this.l = "";
            this.j = null;
            this.v = this.o = "";
            this.s = [];
            this.C = this.A = "";
            this.H = this.m = !1;
        }
        function g(t1, F) {
            void 0 === F || F instanceof g || (F = new g(String(F)));
            this.g = t1;
            f.call(this);
            e.call(this, this.g.replace(/^[ \t\r\n\f]+|[ \t\r\n\f]+$/g, ""), null, F);
        }
        var h = !1;
        try {
            var k = new URL("b", "http://a");
            k.pathname = "c%20d";
            h = "http://a/c%20d" === k.href;
        } catch (t1) {}
        if (!h) {
            var l = Object.create(null);
            l.ftp = 21;
            l.file = 0;
            l.gopher = 70;
            l.http = 80;
            l.https = 443;
            l.ws = 80;
            l.wss = 443;
            var m = Object.create(null);
            m["%2e"] = ".";
            m[".%2e"] = "..";
            m["%2e."] = "..";
            m["%2e%2e"] = "..";
            var q = /[a-zA-Z]/, H = /[a-zA-Z0-9+\-.]/;
            g.prototype = {
                toString: function() {
                    return this.href;
                },
                get href () {
                    if (this.m) return this.g;
                    var t1 = "";
                    if ("" != this.B || null != this.j) t1 = this.B + (null != this.j ? ":" + this.j : "") + "@";
                    return this.protocol + (this.H ? "//" + t1 + this.host : "") + this.pathname + this.A + this.C;
                },
                set href (t){
                    f.call(this);
                    e.call(this, t);
                },
                get protocol () {
                    return this.l + ":";
                },
                set protocol (t){
                    this.m || e.call(this, t + ":", "scheme start");
                },
                get host () {
                    return this.m ? "" : this.v ? this.o + ":" + this.v : this.o;
                },
                set host (t){
                    !this.m && this.H && e.call(this, t, "host");
                },
                get hostname () {
                    return this.o;
                },
                set hostname (t){
                    !this.m && this.H && e.call(this, t, "hostname");
                },
                get port () {
                    return this.v;
                },
                set port (t){
                    !this.m && this.H && e.call(this, t, "port");
                },
                get pathname () {
                    return this.m ? "" : this.H ? "/" + this.s.join("/") : this.ya;
                },
                set pathname (t){
                    !this.m && this.H && (this.s = [], e.call(this, t, "relative path start"));
                },
                get search () {
                    return this.m || !this.A || "?" == this.A ? "" : this.A;
                },
                set search (t){
                    !this.m && this.H && (this.A = "?", "?" == t[0] && (t = t.slice(1)), e.call(this, t, "query"));
                },
                get hash () {
                    return this.m || !this.C || "#" == this.C ? "" : this.C;
                },
                set hash (t){
                    this.m || (t ? (this.C = "#", "#" == t[0] && (t = t.slice(1)), e.call(this, t, "fragment")) : this.C = "");
                },
                get origin () {
                    var t2;
                    if (this.m || !this.l) return "";
                    switch(this.l){
                        case "data":
                        case "file":
                        case "javascript":
                        case "mailto":
                            return "null";
                    }
                    return (t2 = this.host) ? this.l + "://" + t2 : "";
                }
            };
            var C = a1.URL;
            C && (g.createObjectURL = function(t1) {
                return C.createObjectURL.apply(C, arguments);
            }, g.revokeObjectURL = function(t1) {
                C.revokeObjectURL(t1);
            });
            a1.URL = g;
        }
    })(window); /*

Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/ 
    var Hj = window.customElements, Ij = !1, Jj = null;
    Hj.polyfillWrapFlushCallback && Hj.polyfillWrapFlushCallback(function(a1) {
        Jj = a1;
        Ij && a1();
    });
    function Kj() {
        window.HTMLTemplateElement.bootstrap && window.HTMLTemplateElement.bootstrap(window.document);
        Jj && Jj();
        Ij = !0;
        window.WebComponents.ready = !0;
        document.dispatchEvent(new CustomEvent("WebComponentsReady", {
            bubbles: !0
        }));
    }
    "complete" !== document.readyState ? (window.addEventListener("load", Kj), window.addEventListener("DOMContentLoaded", function() {
        window.removeEventListener("load", Kj);
        Kj();
    })) : Kj();
}).call(this);

//# sourceMappingURL=index.a3164607.js.map
