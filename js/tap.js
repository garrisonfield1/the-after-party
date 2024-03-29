!(function (t, e) {
  function i(t) {
    var e = t.length,
      i = he.type(t);
    return he.isWindow(t)
      ? !1
      : 1 === t.nodeType && e
      ? !0
      : "array" === i ||
        ("function" !== i &&
          (0 === e || ("number" == typeof e && e > 0 && e - 1 in t)));
  }
  function n(t) {
    var e = (Se[t] = {});
    return (
      he.each(t.match(de) || [], function (t, i) {
        e[i] = !0;
      }),
      e
    );
  }
  function s(t, i, n, s) {
    if (he.acceptData(t)) {
      var o,
        r,
        a = he.expando,
        l = t.nodeType,
        u = l ? he.cache : t,
        h = l ? t[a] : t[a] && a;
      if ((h && u[h] && (s || u[h].data)) || n !== e || "string" != typeof i)
        return (
          h || (h = l ? (t[a] = ee.pop() || he.guid++) : a),
          u[h] || (u[h] = l ? {} : { toJSON: he.noop }),
          ("object" == typeof i || "function" == typeof i) &&
            (s
              ? (u[h] = he.extend(u[h], i))
              : (u[h].data = he.extend(u[h].data, i))),
          (r = u[h]),
          s || (r.data || (r.data = {}), (r = r.data)),
          n !== e && (r[he.camelCase(i)] = n),
          "string" == typeof i
            ? ((o = r[i]), null == o && (o = r[he.camelCase(i)]))
            : (o = r),
          o
        );
    }
  }
  function o(t, e, i) {
    if (he.acceptData(t)) {
      var n,
        s,
        o = t.nodeType,
        r = o ? he.cache : t,
        l = o ? t[he.expando] : he.expando;
      if (r[l]) {
        if (e && (n = i ? r[l] : r[l].data)) {
          he.isArray(e)
            ? (e = e.concat(he.map(e, he.camelCase)))
            : e in n
            ? (e = [e])
            : ((e = he.camelCase(e)), (e = e in n ? [e] : e.split(" "))),
            (s = e.length);
          for (; s--; ) delete n[e[s]];
          if (i ? !a(n) : !he.isEmptyObject(n)) return;
        }
        (i || (delete r[l].data, a(r[l]))) &&
          (o
            ? he.cleanData([t], !0)
            : he.support.deleteExpando || r != r.window
            ? delete r[l]
            : (r[l] = null));
      }
    }
  }
  function r(t, i, n) {
    if (n === e && 1 === t.nodeType) {
      var s = "data-" + i.replace(Te, "-$1").toLowerCase();
      if (((n = t.getAttribute(s)), "string" == typeof n)) {
        try {
          n =
            "true" === n
              ? !0
              : "false" === n
              ? !1
              : "null" === n
              ? null
              : +n + "" === n
              ? +n
              : De.test(n)
              ? he.parseJSON(n)
              : n;
        } catch (o) {}
        he.data(t, i, n);
      } else n = e;
    }
    return n;
  }
  function a(t) {
    var e;
    for (e in t)
      if (("data" !== e || !he.isEmptyObject(t[e])) && "toJSON" !== e)
        return !1;
    return !0;
  }
  function l() {
    return !0;
  }
  function u() {
    return !1;
  }
  function h() {
    try {
      return X.activeElement;
    } catch (t) {}
  }
  function c(t, e) {
    do t = t[e];
    while (t && 1 !== t.nodeType);
    return t;
  }
  function d(t, e, i) {
    if (he.isFunction(e))
      return he.grep(t, function (t, n) {
        return !!e.call(t, n, t) !== i;
      });
    if (e.nodeType)
      return he.grep(t, function (t) {
        return (t === e) !== i;
      });
    if ("string" == typeof e) {
      if (qe.test(e)) return he.filter(e, t, i);
      e = he.filter(e, t);
    }
    return he.grep(t, function (t) {
      return he.inArray(t, e) >= 0 !== i;
    });
  }
  function p(t) {
    var e = Ye.split("|"),
      i = t.createDocumentFragment();
    if (i.createElement) for (; e.length; ) i.createElement(e.pop());
    return i;
  }
  function f(t, e) {
    return he.nodeName(t, "table") &&
      he.nodeName(1 === e.nodeType ? e : e.firstChild, "tr")
      ? t.getElementsByTagName("tbody")[0] ||
          t.appendChild(t.ownerDocument.createElement("tbody"))
      : t;
  }
  function m(t) {
    return (t.type = (null !== he.find.attr(t, "type")) + "/" + t.type), t;
  }
  function g(t) {
    var e = si.exec(t.type);
    return e ? (t.type = e[1]) : t.removeAttribute("type"), t;
  }
  function v(t, e) {
    for (var i, n = 0; null != (i = t[n]); n++)
      he._data(i, "globalEval", !e || he._data(e[n], "globalEval"));
  }
  function y(t, e) {
    if (1 === e.nodeType && he.hasData(t)) {
      var i,
        n,
        s,
        o = he._data(t),
        r = he._data(e, o),
        a = o.events;
      if (a) {
        delete r.handle, (r.events = {});
        for (i in a)
          for (n = 0, s = a[i].length; s > n; n++) he.event.add(e, i, a[i][n]);
      }
      r.data && (r.data = he.extend({}, r.data));
    }
  }
  function b(t, e) {
    var i, n, s;
    if (1 === e.nodeType) {
      if (
        ((i = e.nodeName.toLowerCase()),
        !he.support.noCloneEvent && e[he.expando])
      ) {
        s = he._data(e);
        for (n in s.events) he.removeEvent(e, n, s.handle);
        e.removeAttribute(he.expando);
      }
      "script" === i && e.text !== t.text
        ? ((m(e).text = t.text), g(e))
        : "object" === i
        ? (e.parentNode && (e.outerHTML = t.outerHTML),
          he.support.html5Clone &&
            t.innerHTML &&
            !he.trim(e.innerHTML) &&
            (e.innerHTML = t.innerHTML))
        : "input" === i && ei.test(t.type)
        ? ((e.defaultChecked = e.checked = t.checked),
          e.value !== t.value && (e.value = t.value))
        : "option" === i
        ? (e.defaultSelected = e.selected = t.defaultSelected)
        : ("input" === i || "textarea" === i) &&
          (e.defaultValue = t.defaultValue);
    }
  }
  function _(t, i) {
    var n,
      s,
      o = 0,
      r =
        typeof t.getElementsByTagName !== V
          ? t.getElementsByTagName(i || "*")
          : typeof t.querySelectorAll !== V
          ? t.querySelectorAll(i || "*")
          : e;
    if (!r)
      for (r = [], n = t.childNodes || t; null != (s = n[o]); o++)
        !i || he.nodeName(s, i) ? r.push(s) : he.merge(r, _(s, i));
    return i === e || (i && he.nodeName(t, i)) ? he.merge([t], r) : r;
  }
  function w(t) {
    ei.test(t.type) && (t.defaultChecked = t.checked);
  }
  function x(t, e) {
    if (e in t) return e;
    for (
      var i = e.charAt(0).toUpperCase() + e.slice(1), n = e, s = Ci.length;
      s--;

    )
      if (((e = Ci[s] + i), e in t)) return e;
    return n;
  }
  function k(t, e) {
    return (
      (t = e || t),
      "none" === he.css(t, "display") || !he.contains(t.ownerDocument, t)
    );
  }
  function C(t, e) {
    for (var i, n, s, o = [], r = 0, a = t.length; a > r; r++)
      (n = t[r]),
        n.style &&
          ((o[r] = he._data(n, "olddisplay")),
          (i = n.style.display),
          e
            ? (o[r] || "none" !== i || (n.style.display = ""),
              "" === n.style.display &&
                k(n) &&
                (o[r] = he._data(n, "olddisplay", E(n.nodeName))))
            : o[r] ||
              ((s = k(n)),
              ((i && "none" !== i) || !s) &&
                he._data(n, "olddisplay", s ? i : he.css(n, "display"))));
    for (r = 0; a > r; r++)
      (n = t[r]),
        n.style &&
          ((e && "none" !== n.style.display && "" !== n.style.display) ||
            (n.style.display = e ? o[r] || "" : "none"));
    return t;
  }
  function S(t, e, i) {
    var n = vi.exec(e);
    return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : e;
  }
  function D(t, e, i, n, s) {
    for (
      var o = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0,
        r = 0;
      4 > o;
      o += 2
    )
      "margin" === i && (r += he.css(t, i + ki[o], !0, s)),
        n
          ? ("content" === i && (r -= he.css(t, "padding" + ki[o], !0, s)),
            "margin" !== i &&
              (r -= he.css(t, "border" + ki[o] + "Width", !0, s)))
          : ((r += he.css(t, "padding" + ki[o], !0, s)),
            "padding" !== i &&
              (r += he.css(t, "border" + ki[o] + "Width", !0, s)));
    return r;
  }
  function T(t, e, i) {
    var n = !0,
      s = "width" === e ? t.offsetWidth : t.offsetHeight,
      o = hi(t),
      r =
        he.support.boxSizing && "border-box" === he.css(t, "boxSizing", !1, o);
    if (0 >= s || null == s) {
      if (
        ((s = ci(t, e, o)),
        (0 > s || null == s) && (s = t.style[e]),
        yi.test(s))
      )
        return s;
      (n = r && (he.support.boxSizingReliable || s === t.style[e])),
        (s = parseFloat(s) || 0);
    }
    return s + D(t, e, i || (r ? "border" : "content"), n, o) + "px";
  }
  function E(t) {
    var e = X,
      i = _i[t];
    return (
      i ||
        ((i = P(t, e)),
        ("none" !== i && i) ||
          ((ui = (
            ui ||
            he("<iframe frameborder='0' width='0' height='0'/>").css(
              "cssText",
              "display:block !important"
            )
          ).appendTo(e.documentElement)),
          (e = (ui[0].contentWindow || ui[0].contentDocument).document),
          e.write("<!doctype html><html><body>"),
          e.close(),
          (i = P(t, e)),
          ui.detach()),
        (_i[t] = i)),
      i
    );
  }
  function P(t, e) {
    var i = he(e.createElement(t)).appendTo(e.body),
      n = he.css(i[0], "display");
    return i.remove(), n;
  }
  function I(t, e, i, n) {
    var s;
    if (he.isArray(e))
      he.each(e, function (e, s) {
        i || Di.test(t)
          ? n(t, s)
          : I(t + "[" + ("object" == typeof s ? e : "") + "]", s, i, n);
      });
    else if (i || "object" !== he.type(e)) n(t, e);
    else for (s in e) I(t + "[" + s + "]", e[s], i, n);
  }
  function M(t) {
    return function (e, i) {
      "string" != typeof e && ((i = e), (e = "*"));
      var n,
        s = 0,
        o = e.toLowerCase().match(de) || [];
      if (he.isFunction(i))
        for (; (n = o[s++]); )
          "+" === n[0]
            ? ((n = n.slice(1) || "*"), (t[n] = t[n] || []).unshift(i))
            : (t[n] = t[n] || []).push(i);
    };
  }
  function N(t, i, n, s) {
    function o(l) {
      var u;
      return (
        (r[l] = !0),
        he.each(t[l] || [], function (t, l) {
          var h = l(i, n, s);
          return "string" != typeof h || a || r[h]
            ? a
              ? !(u = h)
              : e
            : (i.dataTypes.unshift(h), o(h), !1);
        }),
        u
      );
    }
    var r = {},
      a = t === Bi;
    return o(i.dataTypes[0]) || (!r["*"] && o("*"));
  }
  function A(t, i) {
    var n,
      s,
      o = he.ajaxSettings.flatOptions || {};
    for (s in i) i[s] !== e && ((o[s] ? t : n || (n = {}))[s] = i[s]);
    return n && he.extend(!0, t, n), t;
  }
  function j(t, i, n) {
    for (var s, o, r, a, l = t.contents, u = t.dataTypes; "*" === u[0]; )
      u.shift(),
        o === e && (o = t.mimeType || i.getResponseHeader("Content-Type"));
    if (o)
      for (a in l)
        if (l[a] && l[a].test(o)) {
          u.unshift(a);
          break;
        }
    if (u[0] in n) r = u[0];
    else {
      for (a in n) {
        if (!u[0] || t.converters[a + " " + u[0]]) {
          r = a;
          break;
        }
        s || (s = a);
      }
      r = r || s;
    }
    return r ? (r !== u[0] && u.unshift(r), n[r]) : e;
  }
  function H(t, e, i, n) {
    var s,
      o,
      r,
      a,
      l,
      u = {},
      h = t.dataTypes.slice();
    if (h[1]) for (r in t.converters) u[r.toLowerCase()] = t.converters[r];
    for (o = h.shift(); o; )
      if (
        (t.responseFields[o] && (i[t.responseFields[o]] = e),
        !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)),
        (l = o),
        (o = h.shift()))
      )
        if ("*" === o) o = l;
        else if ("*" !== l && l !== o) {
          if (((r = u[l + " " + o] || u["* " + o]), !r))
            for (s in u)
              if (
                ((a = s.split(" ")),
                a[1] === o && (r = u[l + " " + a[0]] || u["* " + a[0]]))
              ) {
                r === !0
                  ? (r = u[s])
                  : u[s] !== !0 && ((o = a[0]), h.unshift(a[1]));
                break;
              }
          if (r !== !0)
            if (r && t["throws"]) e = r(e);
            else
              try {
                e = r(e);
              } catch (c) {
                return {
                  state: "parsererror",
                  error: r ? c : "No conversion from " + l + " to " + o,
                };
              }
        }
    return { state: "success", data: e };
  }
  function O() {
    try {
      return new t.XMLHttpRequest();
    } catch (e) {}
  }
  function z() {
    try {
      return new t.ActiveXObject("Microsoft.XMLHTTP");
    } catch (e) {}
  }
  function L() {
    return (
      setTimeout(function () {
        Ji = e;
      }),
      (Ji = he.now())
    );
  }
  function W(t, e, i) {
    for (
      var n, s = (on[e] || []).concat(on["*"]), o = 0, r = s.length;
      r > o;
      o++
    )
      if ((n = s[o].call(i, e, t))) return n;
  }
  function F(t, e, i) {
    var n,
      s,
      o = 0,
      r = sn.length,
      a = he.Deferred().always(function () {
        delete l.elem;
      }),
      l = function () {
        if (s) return !1;
        for (
          var e = Ji || L(),
            i = Math.max(0, u.startTime + u.duration - e),
            n = i / u.duration || 0,
            o = 1 - n,
            r = 0,
            l = u.tweens.length;
          l > r;
          r++
        )
          u.tweens[r].run(o);
        return (
          a.notifyWith(t, [u, o, i]),
          1 > o && l ? i : (a.resolveWith(t, [u]), !1)
        );
      },
      u = a.promise({
        elem: t,
        props: he.extend({}, e),
        opts: he.extend(!0, { specialEasing: {} }, i),
        originalProperties: e,
        originalOptions: i,
        startTime: Ji || L(),
        duration: i.duration,
        tweens: [],
        createTween: function (e, i) {
          var n = he.Tween(
            t,
            u.opts,
            e,
            i,
            u.opts.specialEasing[e] || u.opts.easing
          );
          return u.tweens.push(n), n;
        },
        stop: function (e) {
          var i = 0,
            n = e ? u.tweens.length : 0;
          if (s) return this;
          for (s = !0; n > i; i++) u.tweens[i].run(1);
          return e ? a.resolveWith(t, [u, e]) : a.rejectWith(t, [u, e]), this;
        },
      }),
      h = u.props;
    for (R(h, u.opts.specialEasing); r > o; o++)
      if ((n = sn[o].call(u, t, h, u.opts))) return n;
    return (
      he.map(h, W, u),
      he.isFunction(u.opts.start) && u.opts.start.call(t, u),
      he.fx.timer(he.extend(l, { elem: t, anim: u, queue: u.opts.queue })),
      u
        .progress(u.opts.progress)
        .done(u.opts.done, u.opts.complete)
        .fail(u.opts.fail)
        .always(u.opts.always)
    );
  }
  function R(t, e) {
    var i, n, s, o, r;
    for (i in t)
      if (
        ((n = he.camelCase(i)),
        (s = e[n]),
        (o = t[i]),
        he.isArray(o) && ((s = o[1]), (o = t[i] = o[0])),
        i !== n && ((t[n] = o), delete t[i]),
        (r = he.cssHooks[n]),
        r && "expand" in r)
      ) {
        (o = r.expand(o)), delete t[n];
        for (i in o) i in t || ((t[i] = o[i]), (e[i] = s));
      } else e[n] = s;
  }
  function q(t, e, i) {
    var n,
      s,
      o,
      r,
      a,
      l,
      u = this,
      h = {},
      c = t.style,
      d = t.nodeType && k(t),
      p = he._data(t, "fxshow");
    i.queue ||
      ((a = he._queueHooks(t, "fx")),
      null == a.unqueued &&
        ((a.unqueued = 0),
        (l = a.empty.fire),
        (a.empty.fire = function () {
          a.unqueued || l();
        })),
      a.unqueued++,
      u.always(function () {
        u.always(function () {
          a.unqueued--, he.queue(t, "fx").length || a.empty.fire();
        });
      })),
      1 === t.nodeType &&
        ("height" in e || "width" in e) &&
        ((i.overflow = [c.overflow, c.overflowX, c.overflowY]),
        "inline" === he.css(t, "display") &&
          "none" === he.css(t, "float") &&
          (he.support.inlineBlockNeedsLayout && "inline" !== E(t.nodeName)
            ? (c.zoom = 1)
            : (c.display = "inline-block"))),
      i.overflow &&
        ((c.overflow = "hidden"),
        he.support.shrinkWrapBlocks ||
          u.always(function () {
            (c.overflow = i.overflow[0]),
              (c.overflowX = i.overflow[1]),
              (c.overflowY = i.overflow[2]);
          }));
    for (n in e)
      if (((s = e[n]), tn.exec(s))) {
        if (
          (delete e[n], (o = o || "toggle" === s), s === (d ? "hide" : "show"))
        )
          continue;
        h[n] = (p && p[n]) || he.style(t, n);
      }
    if (!he.isEmptyObject(h)) {
      p ? "hidden" in p && (d = p.hidden) : (p = he._data(t, "fxshow", {})),
        o && (p.hidden = !d),
        d
          ? he(t).show()
          : u.done(function () {
              he(t).hide();
            }),
        u.done(function () {
          var e;
          he._removeData(t, "fxshow");
          for (e in h) he.style(t, e, h[e]);
        });
      for (n in h)
        (r = W(d ? p[n] : 0, n, u)),
          n in p ||
            ((p[n] = r.start),
            d &&
              ((r.end = r.start),
              (r.start = "width" === n || "height" === n ? 1 : 0)));
    }
  }
  function B(t, e, i, n, s) {
    return new B.prototype.init(t, e, i, n, s);
  }
  function $(t, e) {
    var i,
      n = { height: t },
      s = 0;
    for (e = e ? 1 : 0; 4 > s; s += 2 - e)
      (i = ki[s]), (n["margin" + i] = n["padding" + i] = t);
    return e && (n.opacity = n.width = t), n;
  }
  function Q(t) {
    return he.isWindow(t)
      ? t
      : 9 === t.nodeType
      ? t.defaultView || t.parentWindow
      : !1;
  }
  var Y,
    U,
    V = typeof e,
    K = t.location,
    X = t.document,
    G = X.documentElement,
    J = t.jQuery,
    Z = t.$,
    te = {},
    ee = [],
    ie = "1.10.2",
    ne = ee.concat,
    se = ee.push,
    oe = ee.slice,
    re = ee.indexOf,
    ae = te.toString,
    le = te.hasOwnProperty,
    ue = ie.trim,
    he = function (t, e) {
      return new he.fn.init(t, e, U);
    },
    ce = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    de = /\S+/g,
    pe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    fe = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    me = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    ge = /^[\],:{}\s]*$/,
    ve = /(?:^|:|,)(?:\s*\[)+/g,
    ye = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
    be = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
    _e = /^-ms-/,
    we = /-([\da-z])/gi,
    xe = function (t, e) {
      return e.toUpperCase();
    },
    ke = function (t) {
      (X.addEventListener ||
        "load" === t.type ||
        "complete" === X.readyState) &&
        (Ce(), he.ready());
    },
    Ce = function () {
      X.addEventListener
        ? (X.removeEventListener("DOMContentLoaded", ke, !1),
          t.removeEventListener("load", ke, !1))
        : (X.detachEvent("onreadystatechange", ke),
          t.detachEvent("onload", ke));
    };
  (he.fn = he.prototype =
    {
      jquery: ie,
      constructor: he,
      init: function (t, i, n) {
        var s, o;
        if (!t) return this;
        if ("string" == typeof t) {
          if (
            ((s =
              "<" === t.charAt(0) &&
              ">" === t.charAt(t.length - 1) &&
              t.length >= 3
                ? [null, t, null]
                : fe.exec(t)),
            !s || (!s[1] && i))
          )
            return !i || i.jquery
              ? (i || n).find(t)
              : this.constructor(i).find(t);
          if (s[1]) {
            if (
              ((i = i instanceof he ? i[0] : i),
              he.merge(
                this,
                he.parseHTML(
                  s[1],
                  i && i.nodeType ? i.ownerDocument || i : X,
                  !0
                )
              ),
              me.test(s[1]) && he.isPlainObject(i))
            )
              for (s in i)
                he.isFunction(this[s]) ? this[s](i[s]) : this.attr(s, i[s]);
            return this;
          }
          if (((o = X.getElementById(s[2])), o && o.parentNode)) {
            if (o.id !== s[2]) return n.find(t);
            (this.length = 1), (this[0] = o);
          }
          return (this.context = X), (this.selector = t), this;
        }
        return t.nodeType
          ? ((this.context = this[0] = t), (this.length = 1), this)
          : he.isFunction(t)
          ? n.ready(t)
          : (t.selector !== e &&
              ((this.selector = t.selector), (this.context = t.context)),
            he.makeArray(t, this));
      },
      selector: "",
      length: 0,
      toArray: function () {
        return oe.call(this);
      },
      get: function (t) {
        return null == t
          ? this.toArray()
          : 0 > t
          ? this[this.length + t]
          : this[t];
      },
      pushStack: function (t) {
        var e = he.merge(this.constructor(), t);
        return (e.prevObject = this), (e.context = this.context), e;
      },
      each: function (t, e) {
        return he.each(this, t, e);
      },
      ready: function (t) {
        return he.ready.promise().done(t), this;
      },
      slice: function () {
        return this.pushStack(oe.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (t) {
        var e = this.length,
          i = +t + (0 > t ? e : 0);
        return this.pushStack(i >= 0 && e > i ? [this[i]] : []);
      },
      map: function (t) {
        return this.pushStack(
          he.map(this, function (e, i) {
            return t.call(e, i, e);
          })
        );
      },
      end: function () {
        return this.prevObject || this.constructor(null);
      },
      push: se,
      sort: [].sort,
      splice: [].splice,
    }),
    (he.fn.init.prototype = he.fn),
    (he.extend = he.fn.extend =
      function () {
        var t,
          i,
          n,
          s,
          o,
          r,
          a = arguments[0] || {},
          l = 1,
          u = arguments.length,
          h = !1;
        for (
          "boolean" == typeof a && ((h = a), (a = arguments[1] || {}), (l = 2)),
            "object" == typeof a || he.isFunction(a) || (a = {}),
            u === l && ((a = this), --l);
          u > l;
          l++
        )
          if (null != (o = arguments[l]))
            for (s in o)
              (t = a[s]),
                (n = o[s]),
                a !== n &&
                  (h && n && (he.isPlainObject(n) || (i = he.isArray(n)))
                    ? (i
                        ? ((i = !1), (r = t && he.isArray(t) ? t : []))
                        : (r = t && he.isPlainObject(t) ? t : {}),
                      (a[s] = he.extend(h, r, n)))
                    : n !== e && (a[s] = n));
        return a;
      }),
    he.extend({
      expando: "jQuery" + (ie + Math.random()).replace(/\D/g, ""),
      noConflict: function (e) {
        return (
          t.$ === he && (t.$ = Z), e && t.jQuery === he && (t.jQuery = J), he
        );
      },
      isReady: !1,
      readyWait: 1,
      holdReady: function (t) {
        t ? he.readyWait++ : he.ready(!0);
      },
      ready: function (t) {
        if (t === !0 ? !--he.readyWait : !he.isReady) {
          if (!X.body) return setTimeout(he.ready);
          (he.isReady = !0),
            (t !== !0 && --he.readyWait > 0) ||
              (Y.resolveWith(X, [he]),
              he.fn.trigger && he(X).trigger("ready").off("ready"));
        }
      },
      isFunction: function (t) {
        return "function" === he.type(t);
      },
      isArray:
        Array.isArray ||
        function (t) {
          return "array" === he.type(t);
        },
      isWindow: function (t) {
        return null != t && t == t.window;
      },
      isNumeric: function (t) {
        return !isNaN(parseFloat(t)) && isFinite(t);
      },
      type: function (t) {
        return null == t
          ? t + ""
          : "object" == typeof t || "function" == typeof t
          ? te[ae.call(t)] || "object"
          : typeof t;
      },
      isPlainObject: function (t) {
        var i;
        if (!t || "object" !== he.type(t) || t.nodeType || he.isWindow(t))
          return !1;
        try {
          if (
            t.constructor &&
            !le.call(t, "constructor") &&
            !le.call(t.constructor.prototype, "isPrototypeOf")
          )
            return !1;
        } catch (n) {
          return !1;
        }
        if (he.support.ownLast) for (i in t) return le.call(t, i);
        for (i in t);
        return i === e || le.call(t, i);
      },
      isEmptyObject: function (t) {
        var e;
        for (e in t) return !1;
        return !0;
      },
      error: function (t) {
        throw Error(t);
      },
      parseHTML: function (t, e, i) {
        if (!t || "string" != typeof t) return null;
        "boolean" == typeof e && ((i = e), (e = !1)), (e = e || X);
        var n = me.exec(t),
          s = !i && [];
        return n
          ? [e.createElement(n[1])]
          : ((n = he.buildFragment([t], e, s)),
            s && he(s).remove(),
            he.merge([], n.childNodes));
      },
      parseJSON: function (i) {
        return t.JSON && t.JSON.parse
          ? t.JSON.parse(i)
          : null === i
          ? i
          : "string" == typeof i &&
            ((i = he.trim(i)),
            i && ge.test(i.replace(ye, "@").replace(be, "]").replace(ve, "")))
          ? Function("return " + i)()
          : (he.error("Invalid JSON: " + i), e);
      },
      parseXML: function (i) {
        var n, s;
        if (!i || "string" != typeof i) return null;
        try {
          t.DOMParser
            ? ((s = new DOMParser()), (n = s.parseFromString(i, "text/xml")))
            : ((n = new ActiveXObject("Microsoft.XMLDOM")),
              (n.async = "false"),
              n.loadXML(i));
        } catch (o) {
          n = e;
        }
        return (
          (n &&
            n.documentElement &&
            !n.getElementsByTagName("parsererror").length) ||
            he.error("Invalid XML: " + i),
          n
        );
      },
      noop: function () {},
      globalEval: function (e) {
        e &&
          he.trim(e) &&
          (
            t.execScript ||
            function (e) {
              t.eval.call(t, e);
            }
          )(e);
      },
      camelCase: function (t) {
        return t.replace(_e, "ms-").replace(we, xe);
      },
      nodeName: function (t, e) {
        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
      },
      each: function (t, e, n) {
        var s,
          o = 0,
          r = t.length,
          a = i(t);
        if (n) {
          if (a) for (; r > o && ((s = e.apply(t[o], n)), s !== !1); o++);
          else for (o in t) if (((s = e.apply(t[o], n)), s === !1)) break;
        } else if (a)
          for (; r > o && ((s = e.call(t[o], o, t[o])), s !== !1); o++);
        else for (o in t) if (((s = e.call(t[o], o, t[o])), s === !1)) break;
        return t;
      },
      trim:
        ue && !ue.call("﻿ ")
          ? function (t) {
              return null == t ? "" : ue.call(t);
            }
          : function (t) {
              return null == t ? "" : (t + "").replace(pe, "");
            },
      makeArray: function (t, e) {
        var n = e || [];
        return (
          null != t &&
            (i(Object(t))
              ? he.merge(n, "string" == typeof t ? [t] : t)
              : se.call(n, t)),
          n
        );
      },
      inArray: function (t, e, i) {
        var n;
        if (e) {
          if (re) return re.call(e, t, i);
          for (
            n = e.length, i = i ? (0 > i ? Math.max(0, n + i) : i) : 0;
            n > i;
            i++
          )
            if (i in e && e[i] === t) return i;
        }
        return -1;
      },
      merge: function (t, i) {
        var n = i.length,
          s = t.length,
          o = 0;
        if ("number" == typeof n) for (; n > o; o++) t[s++] = i[o];
        else for (; i[o] !== e; ) t[s++] = i[o++];
        return (t.length = s), t;
      },
      grep: function (t, e, i) {
        var n,
          s = [],
          o = 0,
          r = t.length;
        for (i = !!i; r > o; o++) (n = !!e(t[o], o)), i !== n && s.push(t[o]);
        return s;
      },
      map: function (t, e, n) {
        var s,
          o = 0,
          r = t.length,
          a = i(t),
          l = [];
        if (a)
          for (; r > o; o++)
            (s = e(t[o], o, n)), null != s && (l[l.length] = s);
        else for (o in t) (s = e(t[o], o, n)), null != s && (l[l.length] = s);
        return ne.apply([], l);
      },
      guid: 1,
      proxy: function (t, i) {
        var n, s, o;
        return (
          "string" == typeof i && ((o = t[i]), (i = t), (t = o)),
          he.isFunction(t)
            ? ((n = oe.call(arguments, 2)),
              (s = function () {
                return t.apply(i || this, n.concat(oe.call(arguments)));
              }),
              (s.guid = t.guid = t.guid || he.guid++),
              s)
            : e
        );
      },
      access: function (t, i, n, s, o, r, a) {
        var l = 0,
          u = t.length,
          h = null == n;
        if ("object" === he.type(n)) {
          o = !0;
          for (l in n) he.access(t, i, l, n[l], !0, r, a);
        } else if (
          s !== e &&
          ((o = !0),
          he.isFunction(s) || (a = !0),
          h &&
            (a
              ? (i.call(t, s), (i = null))
              : ((h = i),
                (i = function (t, e, i) {
                  return h.call(he(t), i);
                }))),
          i)
        )
          for (; u > l; l++) i(t[l], n, a ? s : s.call(t[l], l, i(t[l], n)));
        return o ? t : h ? i.call(t) : u ? i(t[0], n) : r;
      },
      now: function () {
        return new Date().getTime();
      },
      swap: function (t, e, i, n) {
        var s,
          o,
          r = {};
        for (o in e) (r[o] = t.style[o]), (t.style[o] = e[o]);
        s = i.apply(t, n || []);
        for (o in e) t.style[o] = r[o];
        return s;
      },
    }),
    (he.ready.promise = function (e) {
      if (!Y)
        if (((Y = he.Deferred()), "complete" === X.readyState))
          setTimeout(he.ready);
        else if (X.addEventListener)
          X.addEventListener("DOMContentLoaded", ke, !1),
            t.addEventListener("load", ke, !1);
        else {
          X.attachEvent("onreadystatechange", ke), t.attachEvent("onload", ke);
          var i = !1;
          try {
            i = null == t.frameElement && X.documentElement;
          } catch (n) {}
          i &&
            i.doScroll &&
            (function s() {
              if (!he.isReady) {
                try {
                  i.doScroll("left");
                } catch (t) {
                  return setTimeout(s, 50);
                }
                Ce(), he.ready();
              }
            })();
        }
      return Y.promise(e);
    }),
    he.each(
      "Boolean Number String Function Array Date RegExp Object Error".split(
        " "
      ),
      function (t, e) {
        te["[object " + e + "]"] = e.toLowerCase();
      }
    ),
    (U = he(X)),
    (function (t, e) {
      function i(t, e, i, n) {
        var s, o, r, a, l, u, h, c, f, m;
        if (
          ((e ? e.ownerDocument || e : F) !== N && M(e),
          (e = e || N),
          (i = i || []),
          !t || "string" != typeof t)
        )
          return i;
        if (1 !== (a = e.nodeType) && 9 !== a) return [];
        if (j && !n) {
          if ((s = be.exec(t)))
            if ((r = s[1])) {
              if (9 === a) {
                if (((o = e.getElementById(r)), !o || !o.parentNode)) return i;
                if (o.id === r) return i.push(o), i;
              } else if (
                e.ownerDocument &&
                (o = e.ownerDocument.getElementById(r)) &&
                L(e, o) &&
                o.id === r
              )
                return i.push(o), i;
            } else {
              if (s[2]) return te.apply(i, e.getElementsByTagName(t)), i;
              if (
                (r = s[3]) &&
                k.getElementsByClassName &&
                e.getElementsByClassName
              )
                return te.apply(i, e.getElementsByClassName(r)), i;
            }
          if (k.qsa && (!H || !H.test(t))) {
            if (
              ((c = h = W),
              (f = e),
              (m = 9 === a && t),
              1 === a && "object" !== e.nodeName.toLowerCase())
            ) {
              for (
                u = d(t),
                  (h = e.getAttribute("id"))
                    ? (c = h.replace(xe, "\\$&"))
                    : e.setAttribute("id", c),
                  c = "[id='" + c + "'] ",
                  l = u.length;
                l--;

              )
                u[l] = c + p(u[l]);
              (f = (pe.test(t) && e.parentNode) || e), (m = u.join(","));
            }
            if (m)
              try {
                return te.apply(i, f.querySelectorAll(m)), i;
              } catch (g) {
              } finally {
                h || e.removeAttribute("id");
              }
          }
        }
        return w(t.replace(ue, "$1"), e, i, n);
      }
      function n() {
        function t(i, n) {
          return (
            e.push((i += " ")) > S.cacheLength && delete t[e.shift()],
            (t[i] = n)
          );
        }
        var e = [];
        return t;
      }
      function s(t) {
        return (t[W] = !0), t;
      }
      function o(t) {
        var e = N.createElement("div");
        try {
          return !!t(e);
        } catch (i) {
          return !1;
        } finally {
          e.parentNode && e.parentNode.removeChild(e), (e = null);
        }
      }
      function r(t, e) {
        for (var i = t.split("|"), n = t.length; n--; ) S.attrHandle[i[n]] = e;
      }
      function a(t, e) {
        var i = e && t,
          n =
            i &&
            1 === t.nodeType &&
            1 === e.nodeType &&
            (~e.sourceIndex || K) - (~t.sourceIndex || K);
        if (n) return n;
        if (i) for (; (i = i.nextSibling); ) if (i === e) return -1;
        return t ? 1 : -1;
      }
      function l(t) {
        return function (e) {
          var i = e.nodeName.toLowerCase();
          return "input" === i && e.type === t;
        };
      }
      function u(t) {
        return function (e) {
          var i = e.nodeName.toLowerCase();
          return ("input" === i || "button" === i) && e.type === t;
        };
      }
      function h(t) {
        return s(function (e) {
          return (
            (e = +e),
            s(function (i, n) {
              for (var s, o = t([], i.length, e), r = o.length; r--; )
                i[(s = o[r])] && (i[s] = !(n[s] = i[s]));
            })
          );
        });
      }
      function c() {}
      function d(t, e) {
        var n,
          s,
          o,
          r,
          a,
          l,
          u,
          h = $[t + " "];
        if (h) return e ? 0 : h.slice(0);
        for (a = t, l = [], u = S.preFilter; a; ) {
          (!n || (s = ce.exec(a))) &&
            (s && (a = a.slice(s[0].length) || a), l.push((o = []))),
            (n = !1),
            (s = de.exec(a)) &&
              ((n = s.shift()),
              o.push({ value: n, type: s[0].replace(ue, " ") }),
              (a = a.slice(n.length)));
          for (r in S.filter)
            !(s = ve[r].exec(a)) ||
              (u[r] && !(s = u[r](s))) ||
              ((n = s.shift()),
              o.push({ value: n, type: r, matches: s }),
              (a = a.slice(n.length)));
          if (!n) break;
        }
        return e ? a.length : a ? i.error(t) : $(t, l).slice(0);
      }
      function p(t) {
        for (var e = 0, i = t.length, n = ""; i > e; e++) n += t[e].value;
        return n;
      }
      function f(t, e, i) {
        var n = e.dir,
          s = i && "parentNode" === n,
          o = q++;
        return e.first
          ? function (e, i, o) {
              for (; (e = e[n]); ) if (1 === e.nodeType || s) return t(e, i, o);
            }
          : function (e, i, r) {
              var a,
                l,
                u,
                h = R + " " + o;
              if (r) {
                for (; (e = e[n]); )
                  if ((1 === e.nodeType || s) && t(e, i, r)) return !0;
              } else
                for (; (e = e[n]); )
                  if (1 === e.nodeType || s)
                    if (((u = e[W] || (e[W] = {})), (l = u[n]) && l[0] === h)) {
                      if ((a = l[1]) === !0 || a === C) return a === !0;
                    } else if (
                      ((l = u[n] = [h]), (l[1] = t(e, i, r) || C), l[1] === !0)
                    )
                      return !0;
            };
      }
      function m(t) {
        return t.length > 1
          ? function (e, i, n) {
              for (var s = t.length; s--; ) if (!t[s](e, i, n)) return !1;
              return !0;
            }
          : t[0];
      }
      function g(t, e, i, n, s) {
        for (var o, r = [], a = 0, l = t.length, u = null != e; l > a; a++)
          (o = t[a]) && (!i || i(o, n, s)) && (r.push(o), u && e.push(a));
        return r;
      }
      function v(t, e, i, n, o, r) {
        return (
          n && !n[W] && (n = v(n)),
          o && !o[W] && (o = v(o, r)),
          s(function (s, r, a, l) {
            var u,
              h,
              c,
              d = [],
              p = [],
              f = r.length,
              m = s || _(e || "*", a.nodeType ? [a] : a, []),
              v = !t || (!s && e) ? m : g(m, d, t, a, l),
              y = i ? (o || (s ? t : f || n) ? [] : r) : v;
            if ((i && i(v, y, a, l), n))
              for (u = g(y, p), n(u, [], a, l), h = u.length; h--; )
                (c = u[h]) && (y[p[h]] = !(v[p[h]] = c));
            if (s) {
              if (o || t) {
                if (o) {
                  for (u = [], h = y.length; h--; )
                    (c = y[h]) && u.push((v[h] = c));
                  o(null, (y = []), u, l);
                }
                for (h = y.length; h--; )
                  (c = y[h]) &&
                    (u = o ? ie.call(s, c) : d[h]) > -1 &&
                    (s[u] = !(r[u] = c));
              }
            } else (y = g(y === r ? y.splice(f, y.length) : y)), o ? o(null, r, y, l) : te.apply(r, y);
          })
        );
      }
      function y(t) {
        for (
          var e,
            i,
            n,
            s = t.length,
            o = S.relative[t[0].type],
            r = o || S.relative[" "],
            a = o ? 1 : 0,
            l = f(
              function (t) {
                return t === e;
              },
              r,
              !0
            ),
            u = f(
              function (t) {
                return ie.call(e, t) > -1;
              },
              r,
              !0
            ),
            h = [
              function (t, i, n) {
                return (
                  (!o && (n || i !== P)) ||
                  ((e = i).nodeType ? l(t, i, n) : u(t, i, n))
                );
              },
            ];
          s > a;
          a++
        )
          if ((i = S.relative[t[a].type])) h = [f(m(h), i)];
          else {
            if (((i = S.filter[t[a].type].apply(null, t[a].matches)), i[W])) {
              for (n = ++a; s > n && !S.relative[t[n].type]; n++);
              return v(
                a > 1 && m(h),
                a > 1 &&
                  p(
                    t
                      .slice(0, a - 1)
                      .concat({ value: " " === t[a - 2].type ? "*" : "" })
                  ).replace(ue, "$1"),
                i,
                n > a && y(t.slice(a, n)),
                s > n && y((t = t.slice(n))),
                s > n && p(t)
              );
            }
            h.push(i);
          }
        return m(h);
      }
      function b(t, e) {
        var n = 0,
          o = e.length > 0,
          r = t.length > 0,
          a = function (s, a, l, u, h) {
            var c,
              d,
              p,
              f = [],
              m = 0,
              v = "0",
              y = s && [],
              b = null != h,
              _ = P,
              w = s || (r && S.find.TAG("*", (h && a.parentNode) || a)),
              x = (R += null == _ ? 1 : Math.random() || 0.1);
            for (b && ((P = a !== N && a), (C = n)); null != (c = w[v]); v++) {
              if (r && c) {
                for (d = 0; (p = t[d++]); )
                  if (p(c, a, l)) {
                    u.push(c);
                    break;
                  }
                b && ((R = x), (C = ++n));
              }
              o && ((c = !p && c) && m--, s && y.push(c));
            }
            if (((m += v), o && v !== m)) {
              for (d = 0; (p = e[d++]); ) p(y, f, a, l);
              if (s) {
                if (m > 0) for (; v--; ) y[v] || f[v] || (f[v] = J.call(u));
                f = g(f);
              }
              te.apply(u, f),
                b && !s && f.length > 0 && m + e.length > 1 && i.uniqueSort(u);
            }
            return b && ((R = x), (P = _)), y;
          };
        return o ? s(a) : a;
      }
      function _(t, e, n) {
        for (var s = 0, o = e.length; o > s; s++) i(t, e[s], n);
        return n;
      }
      function w(t, e, i, n) {
        var s,
          o,
          r,
          a,
          l,
          u = d(t);
        if (!n && 1 === u.length) {
          if (
            ((o = u[0] = u[0].slice(0)),
            o.length > 2 &&
              "ID" === (r = o[0]).type &&
              k.getById &&
              9 === e.nodeType &&
              j &&
              S.relative[o[1].type])
          ) {
            if (
              ((e = (S.find.ID(r.matches[0].replace(ke, Ce), e) || [])[0]), !e)
            )
              return i;
            t = t.slice(o.shift().value.length);
          }
          for (
            s = ve.needsContext.test(t) ? 0 : o.length;
            s-- && ((r = o[s]), !S.relative[(a = r.type)]);

          )
            if (
              (l = S.find[a]) &&
              (n = l(
                r.matches[0].replace(ke, Ce),
                (pe.test(o[0].type) && e.parentNode) || e
              ))
            ) {
              if ((o.splice(s, 1), (t = n.length && p(o)), !t))
                return te.apply(i, n), i;
              break;
            }
        }
        return E(t, u)(n, e, !j, i, pe.test(t)), i;
      }
      var x,
        k,
        C,
        S,
        D,
        T,
        E,
        P,
        I,
        M,
        N,
        A,
        j,
        H,
        O,
        z,
        L,
        W = "sizzle" + -new Date(),
        F = t.document,
        R = 0,
        q = 0,
        B = n(),
        $ = n(),
        Q = n(),
        Y = !1,
        U = function (t, e) {
          return t === e ? ((Y = !0), 0) : 0;
        },
        V = typeof e,
        K = 1 << 31,
        X = {}.hasOwnProperty,
        G = [],
        J = G.pop,
        Z = G.push,
        te = G.push,
        ee = G.slice,
        ie =
          G.indexOf ||
          function (t) {
            for (var e = 0, i = this.length; i > e; e++)
              if (this[e] === t) return e;
            return -1;
          },
        ne =
          "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        se = "[\\x20\\t\\r\\n\\f]",
        oe = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        re = oe.replace("w", "w#"),
        ae =
          "\\[" +
          se +
          "*(" +
          oe +
          ")" +
          se +
          "*(?:([*^$|!~]?=)" +
          se +
          "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" +
          re +
          ")|)|)" +
          se +
          "*\\]",
        le =
          ":(" +
          oe +
          ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" +
          ae.replace(3, 8) +
          ")*)|.*)\\)|)",
        ue = RegExp("^" + se + "+|((?:^|[^\\\\])(?:\\\\.)*)" + se + "+$", "g"),
        ce = RegExp("^" + se + "*," + se + "*"),
        de = RegExp("^" + se + "*([>+~]|" + se + ")" + se + "*"),
        pe = RegExp(se + "*[+~]"),
        fe = RegExp("=" + se + "*([^\\]'\"]*)" + se + "*\\]", "g"),
        me = RegExp(le),
        ge = RegExp("^" + re + "$"),
        ve = {
          ID: RegExp("^#(" + oe + ")"),
          CLASS: RegExp("^\\.(" + oe + ")"),
          TAG: RegExp("^(" + oe.replace("w", "w*") + ")"),
          ATTR: RegExp("^" + ae),
          PSEUDO: RegExp("^" + le),
          CHILD: RegExp(
            "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
              se +
              "*(even|odd|(([+-]|)(\\d*)n|)" +
              se +
              "*(?:([+-]|)" +
              se +
              "*(\\d+)|))" +
              se +
              "*\\)|)",
            "i"
          ),
          bool: RegExp("^(?:" + ne + ")$", "i"),
          needsContext: RegExp(
            "^" +
              se +
              "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
              se +
              "*((?:-\\d)?\\d*)" +
              se +
              "*\\)|)(?=[^-]|$)",
            "i"
          ),
        },
        ye = /^[^{]+\{\s*\[native \w/,
        be = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        _e = /^(?:input|select|textarea|button)$/i,
        we = /^h\d$/i,
        xe = /'|\\/g,
        ke = RegExp("\\\\([\\da-f]{1,6}" + se + "?|(" + se + ")|.)", "ig"),
        Ce = function (t, e, i) {
          var n = "0x" + e - 65536;
          return n !== n || i
            ? e
            : 0 > n
            ? String.fromCharCode(n + 65536)
            : String.fromCharCode(55296 | (n >> 10), 56320 | (1023 & n));
        };
      try {
        te.apply((G = ee.call(F.childNodes)), F.childNodes),
          G[F.childNodes.length].nodeType;
      } catch (Se) {
        te = {
          apply: G.length
            ? function (t, e) {
                Z.apply(t, ee.call(e));
              }
            : function (t, e) {
                for (var i = t.length, n = 0; (t[i++] = e[n++]); );
                t.length = i - 1;
              },
        };
      }
      (T = i.isXML =
        function (t) {
          var e = t && (t.ownerDocument || t).documentElement;
          return e ? "HTML" !== e.nodeName : !1;
        }),
        (k = i.support = {}),
        (M = i.setDocument =
          function (t) {
            var i = t ? t.ownerDocument || t : F,
              n = i.defaultView;
            return i !== N && 9 === i.nodeType && i.documentElement
              ? ((N = i),
                (A = i.documentElement),
                (j = !T(i)),
                n &&
                  n.attachEvent &&
                  n !== n.top &&
                  n.attachEvent("onbeforeunload", function () {
                    M();
                  }),
                (k.attributes = o(function (t) {
                  return (t.className = "i"), !t.getAttribute("className");
                })),
                (k.getElementsByTagName = o(function (t) {
                  return (
                    t.appendChild(i.createComment("")),
                    !t.getElementsByTagName("*").length
                  );
                })),
                (k.getElementsByClassName = o(function (t) {
                  return (
                    (t.innerHTML =
                      "<div class='a'></div><div class='a i'></div>"),
                    (t.firstChild.className = "i"),
                    2 === t.getElementsByClassName("i").length
                  );
                })),
                (k.getById = o(function (t) {
                  return (
                    (A.appendChild(t).id = W),
                    !i.getElementsByName || !i.getElementsByName(W).length
                  );
                })),
                k.getById
                  ? ((S.find.ID = function (t, e) {
                      if (typeof e.getElementById !== V && j) {
                        var i = e.getElementById(t);
                        return i && i.parentNode ? [i] : [];
                      }
                    }),
                    (S.filter.ID = function (t) {
                      var e = t.replace(ke, Ce);
                      return function (t) {
                        return t.getAttribute("id") === e;
                      };
                    }))
                  : (delete S.find.ID,
                    (S.filter.ID = function (t) {
                      var e = t.replace(ke, Ce);
                      return function (t) {
                        var i =
                          typeof t.getAttributeNode !== V &&
                          t.getAttributeNode("id");
                        return i && i.value === e;
                      };
                    })),
                (S.find.TAG = k.getElementsByTagName
                  ? function (t, i) {
                      return typeof i.getElementsByTagName !== V
                        ? i.getElementsByTagName(t)
                        : e;
                    }
                  : function (t, e) {
                      var i,
                        n = [],
                        s = 0,
                        o = e.getElementsByTagName(t);
                      if ("*" === t) {
                        for (; (i = o[s++]); ) 1 === i.nodeType && n.push(i);
                        return n;
                      }
                      return o;
                    }),
                (S.find.CLASS =
                  k.getElementsByClassName &&
                  function (t, i) {
                    return typeof i.getElementsByClassName !== V && j
                      ? i.getElementsByClassName(t)
                      : e;
                  }),
                (O = []),
                (H = []),
                (k.qsa = ye.test(i.querySelectorAll)) &&
                  (o(function (t) {
                    (t.innerHTML =
                      "<select><option selected=''></option></select>"),
                      t.querySelectorAll("[selected]").length ||
                        H.push("\\[" + se + "*(?:value|" + ne + ")"),
                      t.querySelectorAll(":checked").length ||
                        H.push(":checked");
                  }),
                  o(function (t) {
                    var e = i.createElement("input");
                    e.setAttribute("type", "hidden"),
                      t.appendChild(e).setAttribute("t", ""),
                      t.querySelectorAll("[t^='']").length &&
                        H.push("[*^$]=" + se + "*(?:''|\"\")"),
                      t.querySelectorAll(":enabled").length ||
                        H.push(":enabled", ":disabled"),
                      t.querySelectorAll("*,:x"),
                      H.push(",.*:");
                  })),
                (k.matchesSelector = ye.test(
                  (z =
                    A.webkitMatchesSelector ||
                    A.mozMatchesSelector ||
                    A.oMatchesSelector ||
                    A.msMatchesSelector)
                )) &&
                  o(function (t) {
                    (k.disconnectedMatch = z.call(t, "div")),
                      z.call(t, "[s!='']:x"),
                      O.push("!=", le);
                  }),
                (H = H.length && RegExp(H.join("|"))),
                (O = O.length && RegExp(O.join("|"))),
                (L =
                  ye.test(A.contains) || A.compareDocumentPosition
                    ? function (t, e) {
                        var i = 9 === t.nodeType ? t.documentElement : t,
                          n = e && e.parentNode;
                        return (
                          t === n ||
                          !(
                            !n ||
                            1 !== n.nodeType ||
                            !(i.contains
                              ? i.contains(n)
                              : t.compareDocumentPosition &&
                                16 & t.compareDocumentPosition(n))
                          )
                        );
                      }
                    : function (t, e) {
                        if (e)
                          for (; (e = e.parentNode); ) if (e === t) return !0;
                        return !1;
                      }),
                (U = A.compareDocumentPosition
                  ? function (t, e) {
                      if (t === e) return (Y = !0), 0;
                      var n =
                        e.compareDocumentPosition &&
                        t.compareDocumentPosition &&
                        t.compareDocumentPosition(e);
                      return n
                        ? 1 & n ||
                          (!k.sortDetached &&
                            e.compareDocumentPosition(t) === n)
                          ? t === i || L(F, t)
                            ? -1
                            : e === i || L(F, e)
                            ? 1
                            : I
                            ? ie.call(I, t) - ie.call(I, e)
                            : 0
                          : 4 & n
                          ? -1
                          : 1
                        : t.compareDocumentPosition
                        ? -1
                        : 1;
                    }
                  : function (t, e) {
                      var n,
                        s = 0,
                        o = t.parentNode,
                        r = e.parentNode,
                        l = [t],
                        u = [e];
                      if (t === e) return (Y = !0), 0;
                      if (!o || !r)
                        return t === i
                          ? -1
                          : e === i
                          ? 1
                          : o
                          ? -1
                          : r
                          ? 1
                          : I
                          ? ie.call(I, t) - ie.call(I, e)
                          : 0;
                      if (o === r) return a(t, e);
                      for (n = t; (n = n.parentNode); ) l.unshift(n);
                      for (n = e; (n = n.parentNode); ) u.unshift(n);
                      for (; l[s] === u[s]; ) s++;
                      return s
                        ? a(l[s], u[s])
                        : l[s] === F
                        ? -1
                        : u[s] === F
                        ? 1
                        : 0;
                    }),
                i)
              : N;
          }),
        (i.matches = function (t, e) {
          return i(t, null, null, e);
        }),
        (i.matchesSelector = function (t, e) {
          if (
            ((t.ownerDocument || t) !== N && M(t),
            (e = e.replace(fe, "='$1']")),
            !(!k.matchesSelector || !j || (O && O.test(e)) || (H && H.test(e))))
          )
            try {
              var n = z.call(t, e);
              if (
                n ||
                k.disconnectedMatch ||
                (t.document && 11 !== t.document.nodeType)
              )
                return n;
            } catch (s) {}
          return i(e, N, null, [t]).length > 0;
        }),
        (i.contains = function (t, e) {
          return (t.ownerDocument || t) !== N && M(t), L(t, e);
        }),
        (i.attr = function (t, i) {
          (t.ownerDocument || t) !== N && M(t);
          var n = S.attrHandle[i.toLowerCase()],
            s = n && X.call(S.attrHandle, i.toLowerCase()) ? n(t, i, !j) : e;
          return s === e
            ? k.attributes || !j
              ? t.getAttribute(i)
              : (s = t.getAttributeNode(i)) && s.specified
              ? s.value
              : null
            : s;
        }),
        (i.error = function (t) {
          throw Error("Syntax error, unrecognized expression: " + t);
        }),
        (i.uniqueSort = function (t) {
          var e,
            i = [],
            n = 0,
            s = 0;
          if (
            ((Y = !k.detectDuplicates),
            (I = !k.sortStable && t.slice(0)),
            t.sort(U),
            Y)
          ) {
            for (; (e = t[s++]); ) e === t[s] && (n = i.push(s));
            for (; n--; ) t.splice(i[n], 1);
          }
          return t;
        }),
        (D = i.getText =
          function (t) {
            var e,
              i = "",
              n = 0,
              s = t.nodeType;
            if (s) {
              if (1 === s || 9 === s || 11 === s) {
                if ("string" == typeof t.textContent) return t.textContent;
                for (t = t.firstChild; t; t = t.nextSibling) i += D(t);
              } else if (3 === s || 4 === s) return t.nodeValue;
            } else for (; (e = t[n]); n++) i += D(e);
            return i;
          }),
        (S = i.selectors =
          {
            cacheLength: 50,
            createPseudo: s,
            match: ve,
            attrHandle: {},
            find: {},
            relative: {
              ">": { dir: "parentNode", first: !0 },
              " ": { dir: "parentNode" },
              "+": { dir: "previousSibling", first: !0 },
              "~": { dir: "previousSibling" },
            },
            preFilter: {
              ATTR: function (t) {
                return (
                  (t[1] = t[1].replace(ke, Ce)),
                  (t[3] = (t[4] || t[5] || "").replace(ke, Ce)),
                  "~=" === t[2] && (t[3] = " " + t[3] + " "),
                  t.slice(0, 4)
                );
              },
              CHILD: function (t) {
                return (
                  (t[1] = t[1].toLowerCase()),
                  "nth" === t[1].slice(0, 3)
                    ? (t[3] || i.error(t[0]),
                      (t[4] = +(t[4]
                        ? t[5] + (t[6] || 1)
                        : 2 * ("even" === t[3] || "odd" === t[3]))),
                      (t[5] = +(t[7] + t[8] || "odd" === t[3])))
                    : t[3] && i.error(t[0]),
                  t
                );
              },
              PSEUDO: function (t) {
                var i,
                  n = !t[5] && t[2];
                return ve.CHILD.test(t[0])
                  ? null
                  : (t[3] && t[4] !== e
                      ? (t[2] = t[4])
                      : n &&
                        me.test(n) &&
                        (i = d(n, !0)) &&
                        (i = n.indexOf(")", n.length - i) - n.length) &&
                        ((t[0] = t[0].slice(0, i)), (t[2] = n.slice(0, i))),
                    t.slice(0, 3));
              },
            },
            filter: {
              TAG: function (t) {
                var e = t.replace(ke, Ce).toLowerCase();
                return "*" === t
                  ? function () {
                      return !0;
                    }
                  : function (t) {
                      return t.nodeName && t.nodeName.toLowerCase() === e;
                    };
              },
              CLASS: function (t) {
                var e = B[t + " "];
                return (
                  e ||
                  ((e = RegExp("(^|" + se + ")" + t + "(" + se + "|$)")) &&
                    B(t, function (t) {
                      return e.test(
                        ("string" == typeof t.className && t.className) ||
                          (typeof t.getAttribute !== V &&
                            t.getAttribute("class")) ||
                          ""
                      );
                    }))
                );
              },
              ATTR: function (t, e, n) {
                return function (s) {
                  var o = i.attr(s, t);
                  return null == o
                    ? "!=" === e
                    : e
                    ? ((o += ""),
                      "=" === e
                        ? o === n
                        : "!=" === e
                        ? o !== n
                        : "^=" === e
                        ? n && 0 === o.indexOf(n)
                        : "*=" === e
                        ? n && o.indexOf(n) > -1
                        : "$=" === e
                        ? n && o.slice(-n.length) === n
                        : "~=" === e
                        ? (" " + o + " ").indexOf(n) > -1
                        : "|=" === e
                        ? o === n || o.slice(0, n.length + 1) === n + "-"
                        : !1)
                    : !0;
                };
              },
              CHILD: function (t, e, i, n, s) {
                var o = "nth" !== t.slice(0, 3),
                  r = "last" !== t.slice(-4),
                  a = "of-type" === e;
                return 1 === n && 0 === s
                  ? function (t) {
                      return !!t.parentNode;
                    }
                  : function (e, i, l) {
                      var u,
                        h,
                        c,
                        d,
                        p,
                        f,
                        m = o !== r ? "nextSibling" : "previousSibling",
                        g = e.parentNode,
                        v = a && e.nodeName.toLowerCase(),
                        y = !l && !a;
                      if (g) {
                        if (o) {
                          for (; m; ) {
                            for (c = e; (c = c[m]); )
                              if (
                                a
                                  ? c.nodeName.toLowerCase() === v
                                  : 1 === c.nodeType
                              )
                                return !1;
                            f = m = "only" === t && !f && "nextSibling";
                          }
                          return !0;
                        }
                        if (((f = [r ? g.firstChild : g.lastChild]), r && y)) {
                          for (
                            h = g[W] || (g[W] = {}),
                              u = h[t] || [],
                              p = u[0] === R && u[1],
                              d = u[0] === R && u[2],
                              c = p && g.childNodes[p];
                            (c = (++p && c && c[m]) || (d = p = 0) || f.pop());

                          )
                            if (1 === c.nodeType && ++d && c === e) {
                              h[t] = [R, p, d];
                              break;
                            }
                        } else if (
                          y &&
                          (u = (e[W] || (e[W] = {}))[t]) &&
                          u[0] === R
                        )
                          d = u[1];
                        else
                          for (
                            ;
                            (c =
                              (++p && c && c[m]) || (d = p = 0) || f.pop()) &&
                            ((a
                              ? c.nodeName.toLowerCase() !== v
                              : 1 !== c.nodeType) ||
                              !++d ||
                              (y && ((c[W] || (c[W] = {}))[t] = [R, d]),
                              c !== e));

                          );
                        return (d -= s), d === n || (0 === d % n && d / n >= 0);
                      }
                    };
              },
              PSEUDO: function (t, e) {
                var n,
                  o =
                    S.pseudos[t] ||
                    S.setFilters[t.toLowerCase()] ||
                    i.error("unsupported pseudo: " + t);
                return o[W]
                  ? o(e)
                  : o.length > 1
                  ? ((n = [t, t, "", e]),
                    S.setFilters.hasOwnProperty(t.toLowerCase())
                      ? s(function (t, i) {
                          for (var n, s = o(t, e), r = s.length; r--; )
                            (n = ie.call(t, s[r])), (t[n] = !(i[n] = s[r]));
                        })
                      : function (t) {
                          return o(t, 0, n);
                        })
                  : o;
              },
            },
            pseudos: {
              not: s(function (t) {
                var e = [],
                  i = [],
                  n = E(t.replace(ue, "$1"));
                return n[W]
                  ? s(function (t, e, i, s) {
                      for (var o, r = n(t, null, s, []), a = t.length; a--; )
                        (o = r[a]) && (t[a] = !(e[a] = o));
                    })
                  : function (t, s, o) {
                      return (e[0] = t), n(e, null, o, i), !i.pop();
                    };
              }),
              has: s(function (t) {
                return function (e) {
                  return i(t, e).length > 0;
                };
              }),
              contains: s(function (t) {
                return function (e) {
                  return (e.textContent || e.innerText || D(e)).indexOf(t) > -1;
                };
              }),
              lang: s(function (t) {
                return (
                  ge.test(t || "") || i.error("unsupported lang: " + t),
                  (t = t.replace(ke, Ce).toLowerCase()),
                  function (e) {
                    var i;
                    do
                      if (
                        (i = j
                          ? e.lang
                          : e.getAttribute("xml:lang") ||
                            e.getAttribute("lang"))
                      )
                        return (
                          (i = i.toLowerCase()),
                          i === t || 0 === i.indexOf(t + "-")
                        );
                    while ((e = e.parentNode) && 1 === e.nodeType);
                    return !1;
                  }
                );
              }),
              target: function (e) {
                var i = t.location && t.location.hash;
                return i && i.slice(1) === e.id;
              },
              root: function (t) {
                return t === A;
              },
              focus: function (t) {
                return (
                  t === N.activeElement &&
                  (!N.hasFocus || N.hasFocus()) &&
                  !!(t.type || t.href || ~t.tabIndex)
                );
              },
              enabled: function (t) {
                return t.disabled === !1;
              },
              disabled: function (t) {
                return t.disabled === !0;
              },
              checked: function (t) {
                var e = t.nodeName.toLowerCase();
                return (
                  ("input" === e && !!t.checked) ||
                  ("option" === e && !!t.selected)
                );
              },
              selected: function (t) {
                return (
                  t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                );
              },
              empty: function (t) {
                for (t = t.firstChild; t; t = t.nextSibling)
                  if (t.nodeName > "@" || 3 === t.nodeType || 4 === t.nodeType)
                    return !1;
                return !0;
              },
              parent: function (t) {
                return !S.pseudos.empty(t);
              },
              header: function (t) {
                return we.test(t.nodeName);
              },
              input: function (t) {
                return _e.test(t.nodeName);
              },
              button: function (t) {
                var e = t.nodeName.toLowerCase();
                return ("input" === e && "button" === t.type) || "button" === e;
              },
              text: function (t) {
                var e;
                return (
                  "input" === t.nodeName.toLowerCase() &&
                  "text" === t.type &&
                  (null == (e = t.getAttribute("type")) ||
                    e.toLowerCase() === t.type)
                );
              },
              first: h(function () {
                return [0];
              }),
              last: h(function (t, e) {
                return [e - 1];
              }),
              eq: h(function (t, e, i) {
                return [0 > i ? i + e : i];
              }),
              even: h(function (t, e) {
                for (var i = 0; e > i; i += 2) t.push(i);
                return t;
              }),
              odd: h(function (t, e) {
                for (var i = 1; e > i; i += 2) t.push(i);
                return t;
              }),
              lt: h(function (t, e, i) {
                for (var n = 0 > i ? i + e : i; --n >= 0; ) t.push(n);
                return t;
              }),
              gt: h(function (t, e, i) {
                for (var n = 0 > i ? i + e : i; e > ++n; ) t.push(n);
                return t;
              }),
            },
          }),
        (S.pseudos.nth = S.pseudos.eq);
      for (x in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
        S.pseudos[x] = l(x);
      for (x in { submit: !0, reset: !0 }) S.pseudos[x] = u(x);
      (c.prototype = S.filters = S.pseudos),
        (S.setFilters = new c()),
        (E = i.compile =
          function (t, e) {
            var i,
              n = [],
              s = [],
              o = Q[t + " "];
            if (!o) {
              for (e || (e = d(t)), i = e.length; i--; )
                (o = y(e[i])), o[W] ? n.push(o) : s.push(o);
              o = Q(t, b(s, n));
            }
            return o;
          }),
        (k.sortStable = W.split("").sort(U).join("") === W),
        (k.detectDuplicates = Y),
        M(),
        (k.sortDetached = o(function (t) {
          return 1 & t.compareDocumentPosition(N.createElement("div"));
        })),
        o(function (t) {
          return (
            (t.innerHTML = "<a href='#'></a>"),
            "#" === t.firstChild.getAttribute("href")
          );
        }) ||
          r("type|href|height|width", function (t, i, n) {
            return n
              ? e
              : t.getAttribute(i, "type" === i.toLowerCase() ? 1 : 2);
          }),
        (k.attributes &&
          o(function (t) {
            return (
              (t.innerHTML = "<input/>"),
              t.firstChild.setAttribute("value", ""),
              "" === t.firstChild.getAttribute("value")
            );
          })) ||
          r("value", function (t, i, n) {
            return n || "input" !== t.nodeName.toLowerCase()
              ? e
              : t.defaultValue;
          }),
        o(function (t) {
          return null == t.getAttribute("disabled");
        }) ||
          r(ne, function (t, i, n) {
            var s;
            return n
              ? e
              : (s = t.getAttributeNode(i)) && s.specified
              ? s.value
              : t[i] === !0
              ? i.toLowerCase()
              : null;
          }),
        (he.find = i),
        (he.expr = i.selectors),
        (he.expr[":"] = he.expr.pseudos),
        (he.unique = i.uniqueSort),
        (he.text = i.getText),
        (he.isXMLDoc = i.isXML),
        (he.contains = i.contains);
    })(t);
  var Se = {};
  (he.Callbacks = function (t) {
    t = "string" == typeof t ? Se[t] || n(t) : he.extend({}, t);
    var i,
      s,
      o,
      r,
      a,
      l,
      u = [],
      h = !t.once && [],
      c = function (e) {
        for (
          s = t.memory && e, o = !0, a = l || 0, l = 0, r = u.length, i = !0;
          u && r > a;
          a++
        )
          if (u[a].apply(e[0], e[1]) === !1 && t.stopOnFalse) {
            s = !1;
            break;
          }
        (i = !1),
          u && (h ? h.length && c(h.shift()) : s ? (u = []) : d.disable());
      },
      d = {
        add: function () {
          if (u) {
            var e = u.length;
            !(function n(e) {
              he.each(e, function (e, i) {
                var s = he.type(i);
                "function" === s
                  ? (t.unique && d.has(i)) || u.push(i)
                  : i && i.length && "string" !== s && n(i);
              });
            })(arguments),
              i ? (r = u.length) : s && ((l = e), c(s));
          }
          return this;
        },
        remove: function () {
          return (
            u &&
              he.each(arguments, function (t, e) {
                for (var n; (n = he.inArray(e, u, n)) > -1; )
                  u.splice(n, 1), i && (r >= n && r--, a >= n && a--);
              }),
            this
          );
        },
        has: function (t) {
          return t ? he.inArray(t, u) > -1 : !(!u || !u.length);
        },
        empty: function () {
          return (u = []), (r = 0), this;
        },
        disable: function () {
          return (u = h = s = e), this;
        },
        disabled: function () {
          return !u;
        },
        lock: function () {
          return (h = e), s || d.disable(), this;
        },
        locked: function () {
          return !h;
        },
        fireWith: function (t, e) {
          return (
            !u ||
              (o && !h) ||
              ((e = e || []),
              (e = [t, e.slice ? e.slice() : e]),
              i ? h.push(e) : c(e)),
            this
          );
        },
        fire: function () {
          return d.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!o;
        },
      };
    return d;
  }),
    he.extend({
      Deferred: function (t) {
        var e = [
            ["resolve", "done", he.Callbacks("once memory"), "resolved"],
            ["reject", "fail", he.Callbacks("once memory"), "rejected"],
            ["notify", "progress", he.Callbacks("memory")],
          ],
          i = "pending",
          n = {
            state: function () {
              return i;
            },
            always: function () {
              return s.done(arguments).fail(arguments), this;
            },
            then: function () {
              var t = arguments;
              return he
                .Deferred(function (i) {
                  he.each(e, function (e, o) {
                    var r = o[0],
                      a = he.isFunction(t[e]) && t[e];
                    s[o[1]](function () {
                      var t = a && a.apply(this, arguments);
                      t && he.isFunction(t.promise)
                        ? t
                            .promise()
                            .done(i.resolve)
                            .fail(i.reject)
                            .progress(i.notify)
                        : i[r + "With"](
                            this === n ? i.promise() : this,
                            a ? [t] : arguments
                          );
                    });
                  }),
                    (t = null);
                })
                .promise();
            },
            promise: function (t) {
              return null != t ? he.extend(t, n) : n;
            },
          },
          s = {};
        return (
          (n.pipe = n.then),
          he.each(e, function (t, o) {
            var r = o[2],
              a = o[3];
            (n[o[1]] = r.add),
              a &&
                r.add(
                  function () {
                    i = a;
                  },
                  e[1 ^ t][2].disable,
                  e[2][2].lock
                ),
              (s[o[0]] = function () {
                return s[o[0] + "With"](this === s ? n : this, arguments), this;
              }),
              (s[o[0] + "With"] = r.fireWith);
          }),
          n.promise(s),
          t && t.call(s, s),
          s
        );
      },
      when: function (t) {
        var e,
          i,
          n,
          s = 0,
          o = oe.call(arguments),
          r = o.length,
          a = 1 !== r || (t && he.isFunction(t.promise)) ? r : 0,
          l = 1 === a ? t : he.Deferred(),
          u = function (t, i, n) {
            return function (s) {
              (i[t] = this),
                (n[t] = arguments.length > 1 ? oe.call(arguments) : s),
                n === e ? l.notifyWith(i, n) : --a || l.resolveWith(i, n);
            };
          };
        if (r > 1)
          for (e = Array(r), i = Array(r), n = Array(r); r > s; s++)
            o[s] && he.isFunction(o[s].promise)
              ? o[s]
                  .promise()
                  .done(u(s, n, o))
                  .fail(l.reject)
                  .progress(u(s, i, e))
              : --a;
        return a || l.resolveWith(n, o), l.promise();
      },
    }),
    (he.support = (function (e) {
      var i,
        n,
        s,
        o,
        r,
        a,
        l,
        u,
        h,
        c = X.createElement("div");
      if (
        (c.setAttribute("className", "t"),
        (c.innerHTML =
          "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
        (i = c.getElementsByTagName("*") || []),
        (n = c.getElementsByTagName("a")[0]),
        !n || !n.style || !i.length)
      )
        return e;
      (o = X.createElement("select")),
        (a = o.appendChild(X.createElement("option"))),
        (s = c.getElementsByTagName("input")[0]),
        (n.style.cssText = "top:1px;float:left;opacity:.5"),
        (e.getSetAttribute = "t" !== c.className),
        (e.leadingWhitespace = 3 === c.firstChild.nodeType),
        (e.tbody = !c.getElementsByTagName("tbody").length),
        (e.htmlSerialize = !!c.getElementsByTagName("link").length),
        (e.style = /top/.test(n.getAttribute("style"))),
        (e.hrefNormalized = "/a" === n.getAttribute("href")),
        (e.opacity = /^0.5/.test(n.style.opacity)),
        (e.cssFloat = !!n.style.cssFloat),
        (e.checkOn = !!s.value),
        (e.optSelected = a.selected),
        (e.enctype = !!X.createElement("form").enctype),
        (e.html5Clone =
          "<:nav></:nav>" !== X.createElement("nav").cloneNode(!0).outerHTML),
        (e.inlineBlockNeedsLayout = !1),
        (e.shrinkWrapBlocks = !1),
        (e.pixelPosition = !1),
        (e.deleteExpando = !0),
        (e.noCloneEvent = !0),
        (e.reliableMarginRight = !0),
        (e.boxSizingReliable = !0),
        (s.checked = !0),
        (e.noCloneChecked = s.cloneNode(!0).checked),
        (o.disabled = !0),
        (e.optDisabled = !a.disabled);
      try {
        delete c.test;
      } catch (d) {
        e.deleteExpando = !1;
      }
      (s = X.createElement("input")),
        s.setAttribute("value", ""),
        (e.input = "" === s.getAttribute("value")),
        (s.value = "t"),
        s.setAttribute("type", "radio"),
        (e.radioValue = "t" === s.value),
        s.setAttribute("checked", "t"),
        s.setAttribute("name", "t"),
        (r = X.createDocumentFragment()),
        r.appendChild(s),
        (e.appendChecked = s.checked),
        (e.checkClone = r.cloneNode(!0).cloneNode(!0).lastChild.checked),
        c.attachEvent &&
          (c.attachEvent("onclick", function () {
            e.noCloneEvent = !1;
          }),
          c.cloneNode(!0).click());
      for (h in { submit: !0, change: !0, focusin: !0 })
        c.setAttribute((l = "on" + h), "t"),
          (e[h + "Bubbles"] = l in t || c.attributes[l].expando === !1);
      (c.style.backgroundClip = "content-box"),
        (c.cloneNode(!0).style.backgroundClip = ""),
        (e.clearCloneStyle = "content-box" === c.style.backgroundClip);
      for (h in he(e)) break;
      return (
        (e.ownLast = "0" !== h),
        he(function () {
          var i,
            n,
            s,
            o =
              "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
            r = X.getElementsByTagName("body")[0];
          r &&
            ((i = X.createElement("div")),
            (i.style.cssText =
              "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px"),
            r.appendChild(i).appendChild(c),
            (c.innerHTML = "<table><tr><td></td><td>t</td></tr></table>"),
            (s = c.getElementsByTagName("td")),
            (s[0].style.cssText = "padding:0;margin:0;border:0;display:none"),
            (u = 0 === s[0].offsetHeight),
            (s[0].style.display = ""),
            (s[1].style.display = "none"),
            (e.reliableHiddenOffsets = u && 0 === s[0].offsetHeight),
            (c.innerHTML = ""),
            (c.style.cssText =
              "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;"),
            he.swap(r, null != r.style.zoom ? { zoom: 1 } : {}, function () {
              e.boxSizing = 4 === c.offsetWidth;
            }),
            t.getComputedStyle &&
              ((e.pixelPosition =
                "1%" !== (t.getComputedStyle(c, null) || {}).top),
              (e.boxSizingReliable =
                "4px" ===
                (t.getComputedStyle(c, null) || { width: "4px" }).width),
              (n = c.appendChild(X.createElement("div"))),
              (n.style.cssText = c.style.cssText = o),
              (n.style.marginRight = n.style.width = "0"),
              (c.style.width = "1px"),
              (e.reliableMarginRight = !parseFloat(
                (t.getComputedStyle(n, null) || {}).marginRight
              ))),
            typeof c.style.zoom !== V &&
              ((c.innerHTML = ""),
              (c.style.cssText =
                o + "width:1px;padding:1px;display:inline;zoom:1"),
              (e.inlineBlockNeedsLayout = 3 === c.offsetWidth),
              (c.style.display = "block"),
              (c.innerHTML = "<div></div>"),
              (c.firstChild.style.width = "5px"),
              (e.shrinkWrapBlocks = 3 !== c.offsetWidth),
              e.inlineBlockNeedsLayout && (r.style.zoom = 1)),
            r.removeChild(i),
            (i = c = s = n = null));
        }),
        (i = o = r = a = n = s = null),
        e
      );
    })({}));
  var De = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
    Te = /([A-Z])/g;
  he.extend({
    cache: {},
    noData: {
      applet: !0,
      embed: !0,
      object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
    },
    hasData: function (t) {
      return (
        (t = t.nodeType ? he.cache[t[he.expando]] : t[he.expando]), !!t && !a(t)
      );
    },
    data: function (t, e, i) {
      return s(t, e, i);
    },
    removeData: function (t, e) {
      return o(t, e);
    },
    _data: function (t, e, i) {
      return s(t, e, i, !0);
    },
    _removeData: function (t, e) {
      return o(t, e, !0);
    },
    acceptData: function (t) {
      if (t.nodeType && 1 !== t.nodeType && 9 !== t.nodeType) return !1;
      var e = t.nodeName && he.noData[t.nodeName.toLowerCase()];
      return !e || (e !== !0 && t.getAttribute("classid") === e);
    },
  }),
    he.fn.extend({
      data: function (t, i) {
        var n,
          s,
          o = null,
          a = 0,
          l = this[0];
        if (t === e) {
          if (
            this.length &&
            ((o = he.data(l)), 1 === l.nodeType && !he._data(l, "parsedAttrs"))
          ) {
            for (n = l.attributes; n.length > a; a++)
              (s = n[a].name),
                0 === s.indexOf("data-") &&
                  ((s = he.camelCase(s.slice(5))), r(l, s, o[s]));
            he._data(l, "parsedAttrs", !0);
          }
          return o;
        }
        return "object" == typeof t
          ? this.each(function () {
              he.data(this, t);
            })
          : arguments.length > 1
          ? this.each(function () {
              he.data(this, t, i);
            })
          : l
          ? r(l, t, he.data(l, t))
          : null;
      },
      removeData: function (t) {
        return this.each(function () {
          he.removeData(this, t);
        });
      },
    }),
    he.extend({
      queue: function (t, i, n) {
        var s;
        return t
          ? ((i = (i || "fx") + "queue"),
            (s = he._data(t, i)),
            n &&
              (!s || he.isArray(n)
                ? (s = he._data(t, i, he.makeArray(n)))
                : s.push(n)),
            s || [])
          : e;
      },
      dequeue: function (t, e) {
        e = e || "fx";
        var i = he.queue(t, e),
          n = i.length,
          s = i.shift(),
          o = he._queueHooks(t, e),
          r = function () {
            he.dequeue(t, e);
          };
        "inprogress" === s && ((s = i.shift()), n--),
          s &&
            ("fx" === e && i.unshift("inprogress"),
            delete o.stop,
            s.call(t, r, o)),
          !n && o && o.empty.fire();
      },
      _queueHooks: function (t, e) {
        var i = e + "queueHooks";
        return (
          he._data(t, i) ||
          he._data(t, i, {
            empty: he.Callbacks("once memory").add(function () {
              he._removeData(t, e + "queue"), he._removeData(t, i);
            }),
          })
        );
      },
    }),
    he.fn.extend({
      queue: function (t, i) {
        var n = 2;
        return (
          "string" != typeof t && ((i = t), (t = "fx"), n--),
          n > arguments.length
            ? he.queue(this[0], t)
            : i === e
            ? this
            : this.each(function () {
                var e = he.queue(this, t, i);
                he._queueHooks(this, t),
                  "fx" === t && "inprogress" !== e[0] && he.dequeue(this, t);
              })
        );
      },
      dequeue: function (t) {
        return this.each(function () {
          he.dequeue(this, t);
        });
      },
      delay: function (t, e) {
        return (
          (t = he.fx ? he.fx.speeds[t] || t : t),
          (e = e || "fx"),
          this.queue(e, function (e, i) {
            var n = setTimeout(e, t);
            i.stop = function () {
              clearTimeout(n);
            };
          })
        );
      },
      clearQueue: function (t) {
        return this.queue(t || "fx", []);
      },
      promise: function (t, i) {
        var n,
          s = 1,
          o = he.Deferred(),
          r = this,
          a = this.length,
          l = function () {
            --s || o.resolveWith(r, [r]);
          };
        for ("string" != typeof t && ((i = t), (t = e)), t = t || "fx"; a--; )
          (n = he._data(r[a], t + "queueHooks")),
            n && n.empty && (s++, n.empty.add(l));
        return l(), o.promise(i);
      },
    });
  var Ee,
    Pe,
    Ie = /[\t\r\n\f]/g,
    Me = /\r/g,
    Ne = /^(?:input|select|textarea|button|object)$/i,
    Ae = /^(?:a|area)$/i,
    je = /^(?:checked|selected)$/i,
    He = he.support.getSetAttribute,
    Oe = he.support.input;
  he.fn.extend({
    attr: function (t, e) {
      return he.access(this, he.attr, t, e, arguments.length > 1);
    },
    removeAttr: function (t) {
      return this.each(function () {
        he.removeAttr(this, t);
      });
    },
    prop: function (t, e) {
      return he.access(this, he.prop, t, e, arguments.length > 1);
    },
    removeProp: function (t) {
      return (
        (t = he.propFix[t] || t),
        this.each(function () {
          try {
            (this[t] = e), delete this[t];
          } catch (i) {}
        })
      );
    },
    addClass: function (t) {
      var e,
        i,
        n,
        s,
        o,
        r = 0,
        a = this.length,
        l = "string" == typeof t && t;
      if (he.isFunction(t))
        return this.each(function (e) {
          he(this).addClass(t.call(this, e, this.className));
        });
      if (l)
        for (e = (t || "").match(de) || []; a > r; r++)
          if (
            ((i = this[r]),
            (n =
              1 === i.nodeType &&
              (i.className ? (" " + i.className + " ").replace(Ie, " ") : " ")))
          ) {
            for (o = 0; (s = e[o++]); )
              0 > n.indexOf(" " + s + " ") && (n += s + " ");
            i.className = he.trim(n);
          }
      return this;
    },
    removeClass: function (t) {
      var e,
        i,
        n,
        s,
        o,
        r = 0,
        a = this.length,
        l = 0 === arguments.length || ("string" == typeof t && t);
      if (he.isFunction(t))
        return this.each(function (e) {
          he(this).removeClass(t.call(this, e, this.className));
        });
      if (l)
        for (e = (t || "").match(de) || []; a > r; r++)
          if (
            ((i = this[r]),
            (n =
              1 === i.nodeType &&
              (i.className ? (" " + i.className + " ").replace(Ie, " ") : "")))
          ) {
            for (o = 0; (s = e[o++]); )
              for (; n.indexOf(" " + s + " ") >= 0; )
                n = n.replace(" " + s + " ", " ");
            i.className = t ? he.trim(n) : "";
          }
      return this;
    },
    toggleClass: function (t, e) {
      var i = typeof t;
      return "boolean" == typeof e && "string" === i
        ? e
          ? this.addClass(t)
          : this.removeClass(t)
        : this.each(
            he.isFunction(t)
              ? function (i) {
                  he(this).toggleClass(t.call(this, i, this.className, e), e);
                }
              : function () {
                  if ("string" === i)
                    for (
                      var e, n = 0, s = he(this), o = t.match(de) || [];
                      (e = o[n++]);

                    )
                      s.hasClass(e) ? s.removeClass(e) : s.addClass(e);
                  else
                    (i === V || "boolean" === i) &&
                      (this.className &&
                        he._data(this, "__className__", this.className),
                      (this.className =
                        this.className || t === !1
                          ? ""
                          : he._data(this, "__className__") || ""));
                }
          );
    },
    hasClass: function (t) {
      for (var e = " " + t + " ", i = 0, n = this.length; n > i; i++)
        if (
          1 === this[i].nodeType &&
          (" " + this[i].className + " ").replace(Ie, " ").indexOf(e) >= 0
        )
          return !0;
      return !1;
    },
    val: function (t) {
      var i,
        n,
        s,
        o = this[0];
      return arguments.length
        ? ((s = he.isFunction(t)),
          this.each(function (i) {
            var o;
            1 === this.nodeType &&
              ((o = s ? t.call(this, i, he(this).val()) : t),
              null == o
                ? (o = "")
                : "number" == typeof o
                ? (o += "")
                : he.isArray(o) &&
                  (o = he.map(o, function (t) {
                    return null == t ? "" : t + "";
                  })),
              (n =
                he.valHooks[this.type] ||
                he.valHooks[this.nodeName.toLowerCase()]),
              (n && "set" in n && n.set(this, o, "value") !== e) ||
                (this.value = o));
          }))
        : o
        ? ((n = he.valHooks[o.type] || he.valHooks[o.nodeName.toLowerCase()]),
          n && "get" in n && (i = n.get(o, "value")) !== e
            ? i
            : ((i = o.value),
              "string" == typeof i ? i.replace(Me, "") : null == i ? "" : i))
        : void 0;
    },
  }),
    he.extend({
      valHooks: {
        option: {
          get: function (t) {
            var e = he.find.attr(t, "value");
            return null != e ? e : t.text;
          },
        },
        select: {
          get: function (t) {
            for (
              var e,
                i,
                n = t.options,
                s = t.selectedIndex,
                o = "select-one" === t.type || 0 > s,
                r = o ? null : [],
                a = o ? s + 1 : n.length,
                l = 0 > s ? a : o ? s : 0;
              a > l;
              l++
            )
              if (
                ((i = n[l]),
                !(
                  (!i.selected && l !== s) ||
                  (he.support.optDisabled
                    ? i.disabled
                    : null !== i.getAttribute("disabled")) ||
                  (i.parentNode.disabled &&
                    he.nodeName(i.parentNode, "optgroup"))
                ))
              ) {
                if (((e = he(i).val()), o)) return e;
                r.push(e);
              }
            return r;
          },
          set: function (t, e) {
            for (
              var i, n, s = t.options, o = he.makeArray(e), r = s.length;
              r--;

            )
              (n = s[r]),
                (n.selected = he.inArray(he(n).val(), o) >= 0) && (i = !0);
            return i || (t.selectedIndex = -1), o;
          },
        },
      },
      attr: function (t, i, n) {
        var s,
          o,
          r = t.nodeType;
        return t && 3 !== r && 8 !== r && 2 !== r
          ? typeof t.getAttribute === V
            ? he.prop(t, i, n)
            : ((1 === r && he.isXMLDoc(t)) ||
                ((i = i.toLowerCase()),
                (s =
                  he.attrHooks[i] || (he.expr.match.bool.test(i) ? Pe : Ee))),
              n === e
                ? s && "get" in s && null !== (o = s.get(t, i))
                  ? o
                  : ((o = he.find.attr(t, i)), null == o ? e : o)
                : null !== n
                ? s && "set" in s && (o = s.set(t, n, i)) !== e
                  ? o
                  : (t.setAttribute(i, n + ""), n)
                : (he.removeAttr(t, i), e))
          : void 0;
      },
      removeAttr: function (t, e) {
        var i,
          n,
          s = 0,
          o = e && e.match(de);
        if (o && 1 === t.nodeType)
          for (; (i = o[s++]); )
            (n = he.propFix[i] || i),
              he.expr.match.bool.test(i)
                ? (Oe && He) || !je.test(i)
                  ? (t[n] = !1)
                  : (t[he.camelCase("default-" + i)] = t[n] = !1)
                : he.attr(t, i, ""),
              t.removeAttribute(He ? i : n);
      },
      attrHooks: {
        type: {
          set: function (t, e) {
            if (
              !he.support.radioValue &&
              "radio" === e &&
              he.nodeName(t, "input")
            ) {
              var i = t.value;
              return t.setAttribute("type", e), i && (t.value = i), e;
            }
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
      prop: function (t, i, n) {
        var s,
          o,
          r,
          a = t.nodeType;
        return t && 3 !== a && 8 !== a && 2 !== a
          ? ((r = 1 !== a || !he.isXMLDoc(t)),
            r && ((i = he.propFix[i] || i), (o = he.propHooks[i])),
            n !== e
              ? o && "set" in o && (s = o.set(t, n, i)) !== e
                ? s
                : (t[i] = n)
              : o && "get" in o && null !== (s = o.get(t, i))
              ? s
              : t[i])
          : void 0;
      },
      propHooks: {
        tabIndex: {
          get: function (t) {
            var e = he.find.attr(t, "tabindex");
            return e
              ? parseInt(e, 10)
              : Ne.test(t.nodeName) || (Ae.test(t.nodeName) && t.href)
              ? 0
              : -1;
          },
        },
      },
    }),
    (Pe = {
      set: function (t, e, i) {
        return (
          e === !1
            ? he.removeAttr(t, i)
            : (Oe && He) || !je.test(i)
            ? t.setAttribute((!He && he.propFix[i]) || i, i)
            : (t[he.camelCase("default-" + i)] = t[i] = !0),
          i
        );
      },
    }),
    he.each(he.expr.match.bool.source.match(/\w+/g), function (t, i) {
      var n = he.expr.attrHandle[i] || he.find.attr;
      he.expr.attrHandle[i] =
        (Oe && He) || !je.test(i)
          ? function (t, i, s) {
              var o = he.expr.attrHandle[i],
                r = s
                  ? e
                  : (he.expr.attrHandle[i] = e) != n(t, i, s)
                  ? i.toLowerCase()
                  : null;
              return (he.expr.attrHandle[i] = o), r;
            }
          : function (t, i, n) {
              return n
                ? e
                : t[he.camelCase("default-" + i)]
                ? i.toLowerCase()
                : null;
            };
    }),
    (Oe && He) ||
      (he.attrHooks.value = {
        set: function (t, i, n) {
          return he.nodeName(t, "input")
            ? ((t.defaultValue = i), e)
            : Ee && Ee.set(t, i, n);
        },
      }),
    He ||
      ((Ee = {
        set: function (t, i, n) {
          var s = t.getAttributeNode(n);
          return (
            s || t.setAttributeNode((s = t.ownerDocument.createAttribute(n))),
            (s.value = i += ""),
            "value" === n || i === t.getAttribute(n) ? i : e
          );
        },
      }),
      (he.expr.attrHandle.id =
        he.expr.attrHandle.name =
        he.expr.attrHandle.coords =
          function (t, i, n) {
            var s;
            return n
              ? e
              : (s = t.getAttributeNode(i)) && "" !== s.value
              ? s.value
              : null;
          }),
      (he.valHooks.button = {
        get: function (t, i) {
          var n = t.getAttributeNode(i);
          return n && n.specified ? n.value : e;
        },
        set: Ee.set,
      }),
      (he.attrHooks.contenteditable = {
        set: function (t, e, i) {
          Ee.set(t, "" === e ? !1 : e, i);
        },
      }),
      he.each(["width", "height"], function (t, i) {
        he.attrHooks[i] = {
          set: function (t, n) {
            return "" === n ? (t.setAttribute(i, "auto"), n) : e;
          },
        };
      })),
    he.support.hrefNormalized ||
      he.each(["href", "src"], function (t, e) {
        he.propHooks[e] = {
          get: function (t) {
            return t.getAttribute(e, 4);
          },
        };
      }),
    he.support.style ||
      (he.attrHooks.style = {
        get: function (t) {
          return t.style.cssText || e;
        },
        set: function (t, e) {
          return (t.style.cssText = e + "");
        },
      }),
    he.support.optSelected ||
      (he.propHooks.selected = {
        get: function (t) {
          var e = t.parentNode;
          return (
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex),
            null
          );
        },
      }),
    he.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        he.propFix[this.toLowerCase()] = this;
      }
    ),
    he.support.enctype || (he.propFix.enctype = "encoding"),
    he.each(["radio", "checkbox"], function () {
      (he.valHooks[this] = {
        set: function (t, i) {
          return he.isArray(i)
            ? (t.checked = he.inArray(he(t).val(), i) >= 0)
            : e;
        },
      }),
        he.support.checkOn ||
          (he.valHooks[this].get = function (t) {
            return null === t.getAttribute("value") ? "on" : t.value;
          });
    });
  var ze = /^(?:input|select|textarea)$/i,
    Le = /^key/,
    We = /^(?:mouse|contextmenu)|click/,
    Fe = /^(?:focusinfocus|focusoutblur)$/,
    Re = /^([^.]*)(?:\.(.+)|)$/;
  (he.event = {
    global: {},
    add: function (t, i, n, s, o) {
      var r,
        a,
        l,
        u,
        h,
        c,
        d,
        p,
        f,
        m,
        g,
        v = he._data(t);
      if (v) {
        for (
          n.handler && ((u = n), (n = u.handler), (o = u.selector)),
            n.guid || (n.guid = he.guid++),
            (a = v.events) || (a = v.events = {}),
            (c = v.handle) ||
              ((c = v.handle =
                function (t) {
                  return typeof he === V || (t && he.event.triggered === t.type)
                    ? e
                    : he.event.dispatch.apply(c.elem, arguments);
                }),
              (c.elem = t)),
            i = (i || "").match(de) || [""],
            l = i.length;
          l--;

        )
          (r = Re.exec(i[l]) || []),
            (f = g = r[1]),
            (m = (r[2] || "").split(".").sort()),
            f &&
              ((h = he.event.special[f] || {}),
              (f = (o ? h.delegateType : h.bindType) || f),
              (h = he.event.special[f] || {}),
              (d = he.extend(
                {
                  type: f,
                  origType: g,
                  data: s,
                  handler: n,
                  guid: n.guid,
                  selector: o,
                  needsContext: o && he.expr.match.needsContext.test(o),
                  namespace: m.join("."),
                },
                u
              )),
              (p = a[f]) ||
                ((p = a[f] = []),
                (p.delegateCount = 0),
                (h.setup && h.setup.call(t, s, m, c) !== !1) ||
                  (t.addEventListener
                    ? t.addEventListener(f, c, !1)
                    : t.attachEvent && t.attachEvent("on" + f, c))),
              h.add &&
                (h.add.call(t, d), d.handler.guid || (d.handler.guid = n.guid)),
              o ? p.splice(p.delegateCount++, 0, d) : p.push(d),
              (he.event.global[f] = !0));
        t = null;
      }
    },
    remove: function (t, e, i, n, s) {
      var o,
        r,
        a,
        l,
        u,
        h,
        c,
        d,
        p,
        f,
        m,
        g = he.hasData(t) && he._data(t);
      if (g && (h = g.events)) {
        for (e = (e || "").match(de) || [""], u = e.length; u--; )
          if (
            ((a = Re.exec(e[u]) || []),
            (p = m = a[1]),
            (f = (a[2] || "").split(".").sort()),
            p)
          ) {
            for (
              c = he.event.special[p] || {},
                p = (n ? c.delegateType : c.bindType) || p,
                d = h[p] || [],
                a =
                  a[2] &&
                  RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                l = o = d.length;
              o--;

            )
              (r = d[o]),
                (!s && m !== r.origType) ||
                  (i && i.guid !== r.guid) ||
                  (a && !a.test(r.namespace)) ||
                  (n && n !== r.selector && ("**" !== n || !r.selector)) ||
                  (d.splice(o, 1),
                  r.selector && d.delegateCount--,
                  c.remove && c.remove.call(t, r));
            l &&
              !d.length &&
              ((c.teardown && c.teardown.call(t, f, g.handle) !== !1) ||
                he.removeEvent(t, p, g.handle),
              delete h[p]);
          } else for (p in h) he.event.remove(t, p + e[u], i, n, !0);
        he.isEmptyObject(h) && (delete g.handle, he._removeData(t, "events"));
      }
    },
    trigger: function (i, n, s, o) {
      var r,
        a,
        l,
        u,
        h,
        c,
        d,
        p = [s || X],
        f = le.call(i, "type") ? i.type : i,
        m = le.call(i, "namespace") ? i.namespace.split(".") : [];
      if (
        ((l = c = s = s || X),
        3 !== s.nodeType &&
          8 !== s.nodeType &&
          !Fe.test(f + he.event.triggered) &&
          (f.indexOf(".") >= 0 &&
            ((m = f.split(".")), (f = m.shift()), m.sort()),
          (a = 0 > f.indexOf(":") && "on" + f),
          (i = i[he.expando] ? i : new he.Event(f, "object" == typeof i && i)),
          (i.isTrigger = o ? 2 : 3),
          (i.namespace = m.join(".")),
          (i.namespace_re = i.namespace
            ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (i.result = e),
          i.target || (i.target = s),
          (n = null == n ? [i] : he.makeArray(n, [i])),
          (h = he.event.special[f] || {}),
          o || !h.trigger || h.trigger.apply(s, n) !== !1))
      ) {
        if (!o && !h.noBubble && !he.isWindow(s)) {
          for (
            u = h.delegateType || f, Fe.test(u + f) || (l = l.parentNode);
            l;
            l = l.parentNode
          )
            p.push(l), (c = l);
          c === (s.ownerDocument || X) &&
            p.push(c.defaultView || c.parentWindow || t);
        }
        for (d = 0; (l = p[d++]) && !i.isPropagationStopped(); )
          (i.type = d > 1 ? u : h.bindType || f),
            (r =
              (he._data(l, "events") || {})[i.type] && he._data(l, "handle")),
            r && r.apply(l, n),
            (r = a && l[a]),
            r &&
              he.acceptData(l) &&
              r.apply &&
              r.apply(l, n) === !1 &&
              i.preventDefault();
        if (
          ((i.type = f),
          !o &&
            !i.isDefaultPrevented() &&
            (!h._default || h._default.apply(p.pop(), n) === !1) &&
            he.acceptData(s) &&
            a &&
            s[f] &&
            !he.isWindow(s))
        ) {
          (c = s[a]), c && (s[a] = null), (he.event.triggered = f);
          try {
            s[f]();
          } catch (g) {}
          (he.event.triggered = e), c && (s[a] = c);
        }
        return i.result;
      }
    },
    dispatch: function (t) {
      t = he.event.fix(t);
      var i,
        n,
        s,
        o,
        r,
        a = [],
        l = oe.call(arguments),
        u = (he._data(this, "events") || {})[t.type] || [],
        h = he.event.special[t.type] || {};
      if (
        ((l[0] = t),
        (t.delegateTarget = this),
        !h.preDispatch || h.preDispatch.call(this, t) !== !1)
      ) {
        for (
          a = he.event.handlers.call(this, t, u), i = 0;
          (o = a[i++]) && !t.isPropagationStopped();

        )
          for (
            t.currentTarget = o.elem, r = 0;
            (s = o.handlers[r++]) && !t.isImmediatePropagationStopped();

          )
            (!t.namespace_re || t.namespace_re.test(s.namespace)) &&
              ((t.handleObj = s),
              (t.data = s.data),
              (n = (
                (he.event.special[s.origType] || {}).handle || s.handler
              ).apply(o.elem, l)),
              n !== e &&
                (t.result = n) === !1 &&
                (t.preventDefault(), t.stopPropagation()));
        return h.postDispatch && h.postDispatch.call(this, t), t.result;
      }
    },
    handlers: function (t, i) {
      var n,
        s,
        o,
        r,
        a = [],
        l = i.delegateCount,
        u = t.target;
      if (l && u.nodeType && (!t.button || "click" !== t.type))
        for (; u != this; u = u.parentNode || this)
          if (1 === u.nodeType && (u.disabled !== !0 || "click" !== t.type)) {
            for (o = [], r = 0; l > r; r++)
              (s = i[r]),
                (n = s.selector + " "),
                o[n] === e &&
                  (o[n] = s.needsContext
                    ? he(n, this).index(u) >= 0
                    : he.find(n, this, null, [u]).length),
                o[n] && o.push(s);
            o.length && a.push({ elem: u, handlers: o });
          }
      return i.length > l && a.push({ elem: this, handlers: i.slice(l) }), a;
    },
    fix: function (t) {
      if (t[he.expando]) return t;
      var e,
        i,
        n,
        s = t.type,
        o = t,
        r = this.fixHooks[s];
      for (
        r ||
          (this.fixHooks[s] = r =
            We.test(s) ? this.mouseHooks : Le.test(s) ? this.keyHooks : {}),
          n = r.props ? this.props.concat(r.props) : this.props,
          t = new he.Event(o),
          e = n.length;
        e--;

      )
        (i = n[e]), (t[i] = o[i]);
      return (
        t.target || (t.target = o.srcElement || X),
        3 === t.target.nodeType && (t.target = t.target.parentNode),
        (t.metaKey = !!t.metaKey),
        r.filter ? r.filter(t, o) : t
      );
    },
    props:
      "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
        " "
      ),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function (t, e) {
        return (
          null == t.which &&
            (t.which = null != e.charCode ? e.charCode : e.keyCode),
          t
        );
      },
    },
    mouseHooks: {
      props:
        "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(
          " "
        ),
      filter: function (t, i) {
        var n,
          s,
          o,
          r = i.button,
          a = i.fromElement;
        return (
          null == t.pageX &&
            null != i.clientX &&
            ((s = t.target.ownerDocument || X),
            (o = s.documentElement),
            (n = s.body),
            (t.pageX =
              i.clientX +
              ((o && o.scrollLeft) || (n && n.scrollLeft) || 0) -
              ((o && o.clientLeft) || (n && n.clientLeft) || 0)),
            (t.pageY =
              i.clientY +
              ((o && o.scrollTop) || (n && n.scrollTop) || 0) -
              ((o && o.clientTop) || (n && n.clientTop) || 0))),
          !t.relatedTarget &&
            a &&
            (t.relatedTarget = a === t.target ? i.toElement : a),
          t.which ||
            r === e ||
            (t.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0),
          t
        );
      },
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          if (this !== h() && this.focus)
            try {
              return this.focus(), !1;
            } catch (t) {}
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          return this === h() && this.blur ? (this.blur(), !1) : e;
        },
        delegateType: "focusout",
      },
      click: {
        trigger: function () {
          return he.nodeName(this, "input") &&
            "checkbox" === this.type &&
            this.click
            ? (this.click(), !1)
            : e;
        },
        _default: function (t) {
          return he.nodeName(t.target, "a");
        },
      },
      beforeunload: {
        postDispatch: function (t) {
          t.result !== e && (t.originalEvent.returnValue = t.result);
        },
      },
    },
    simulate: function (t, e, i, n) {
      var s = he.extend(new he.Event(), i, {
        type: t,
        isSimulated: !0,
        originalEvent: {},
      });
      n ? he.event.trigger(s, null, e) : he.event.dispatch.call(e, s),
        s.isDefaultPrevented() && i.preventDefault();
    },
  }),
    (he.removeEvent = X.removeEventListener
      ? function (t, e, i) {
          t.removeEventListener && t.removeEventListener(e, i, !1);
        }
      : function (t, e, i) {
          var n = "on" + e;
          t.detachEvent &&
            (typeof t[n] === V && (t[n] = null), t.detachEvent(n, i));
        }),
    (he.Event = function (t, i) {
      return this instanceof he.Event
        ? (t && t.type
            ? ((this.originalEvent = t),
              (this.type = t.type),
              (this.isDefaultPrevented =
                t.defaultPrevented ||
                t.returnValue === !1 ||
                (t.getPreventDefault && t.getPreventDefault())
                  ? l
                  : u))
            : (this.type = t),
          i && he.extend(this, i),
          (this.timeStamp = (t && t.timeStamp) || he.now()),
          (this[he.expando] = !0),
          e)
        : new he.Event(t, i);
    }),
    (he.Event.prototype = {
      isDefaultPrevented: u,
      isPropagationStopped: u,
      isImmediatePropagationStopped: u,
      preventDefault: function () {
        var t = this.originalEvent;
        (this.isDefaultPrevented = l),
          t && (t.preventDefault ? t.preventDefault() : (t.returnValue = !1));
      },
      stopPropagation: function () {
        var t = this.originalEvent;
        (this.isPropagationStopped = l),
          t &&
            (t.stopPropagation && t.stopPropagation(), (t.cancelBubble = !0));
      },
      stopImmediatePropagation: function () {
        (this.isImmediatePropagationStopped = l), this.stopPropagation();
      },
    }),
    he.each(
      { mouseenter: "mouseover", mouseleave: "mouseout" },
      function (t, e) {
        he.event.special[t] = {
          delegateType: e,
          bindType: e,
          handle: function (t) {
            var i,
              n = this,
              s = t.relatedTarget,
              o = t.handleObj;
            return (
              (!s || (s !== n && !he.contains(n, s))) &&
                ((t.type = o.origType),
                (i = o.handler.apply(this, arguments)),
                (t.type = e)),
              i
            );
          },
        };
      }
    ),
    he.support.submitBubbles ||
      (he.event.special.submit = {
        setup: function () {
          return he.nodeName(this, "form")
            ? !1
            : (he.event.add(
                this,
                "click._submit keypress._submit",
                function (t) {
                  var i = t.target,
                    n =
                      he.nodeName(i, "input") || he.nodeName(i, "button")
                        ? i.form
                        : e;
                  n &&
                    !he._data(n, "submitBubbles") &&
                    (he.event.add(n, "submit._submit", function (t) {
                      t._submit_bubble = !0;
                    }),
                    he._data(n, "submitBubbles", !0));
                }
              ),
              e);
        },
        postDispatch: function (t) {
          t._submit_bubble &&
            (delete t._submit_bubble,
            this.parentNode &&
              !t.isTrigger &&
              he.event.simulate("submit", this.parentNode, t, !0));
        },
        teardown: function () {
          return he.nodeName(this, "form")
            ? !1
            : (he.event.remove(this, "._submit"), e);
        },
      }),
    he.support.changeBubbles ||
      (he.event.special.change = {
        setup: function () {
          return ze.test(this.nodeName)
            ? (("checkbox" === this.type || "radio" === this.type) &&
                (he.event.add(this, "propertychange._change", function (t) {
                  "checked" === t.originalEvent.propertyName &&
                    (this._just_changed = !0);
                }),
                he.event.add(this, "click._change", function (t) {
                  this._just_changed &&
                    !t.isTrigger &&
                    (this._just_changed = !1),
                    he.event.simulate("change", this, t, !0);
                })),
              !1)
            : (he.event.add(this, "beforeactivate._change", function (t) {
                var e = t.target;
                ze.test(e.nodeName) &&
                  !he._data(e, "changeBubbles") &&
                  (he.event.add(e, "change._change", function (t) {
                    !this.parentNode ||
                      t.isSimulated ||
                      t.isTrigger ||
                      he.event.simulate("change", this.parentNode, t, !0);
                  }),
                  he._data(e, "changeBubbles", !0));
              }),
              e);
        },
        handle: function (t) {
          var i = t.target;
          return this !== i ||
            t.isSimulated ||
            t.isTrigger ||
            ("radio" !== i.type && "checkbox" !== i.type)
            ? t.handleObj.handler.apply(this, arguments)
            : e;
        },
        teardown: function () {
          return he.event.remove(this, "._change"), !ze.test(this.nodeName);
        },
      }),
    he.support.focusinBubbles ||
      he.each({ focus: "focusin", blur: "focusout" }, function (t, e) {
        var i = 0,
          n = function (t) {
            he.event.simulate(e, t.target, he.event.fix(t), !0);
          };
        he.event.special[e] = {
          setup: function () {
            0 === i++ && X.addEventListener(t, n, !0);
          },
          teardown: function () {
            0 === --i && X.removeEventListener(t, n, !0);
          },
        };
      }),
    he.fn.extend({
      on: function (t, i, n, s, o) {
        var r, a;
        if ("object" == typeof t) {
          "string" != typeof i && ((n = n || i), (i = e));
          for (r in t) this.on(r, i, n, t[r], o);
          return this;
        }
        if (
          (null == n && null == s
            ? ((s = i), (n = i = e))
            : null == s &&
              ("string" == typeof i
                ? ((s = n), (n = e))
                : ((s = n), (n = i), (i = e))),
          s === !1)
        )
          s = u;
        else if (!s) return this;
        return (
          1 === o &&
            ((a = s),
            (s = function (t) {
              return he().off(t), a.apply(this, arguments);
            }),
            (s.guid = a.guid || (a.guid = he.guid++))),
          this.each(function () {
            he.event.add(this, t, s, n, i);
          })
        );
      },
      one: function (t, e, i, n) {
        return this.on(t, e, i, n, 1);
      },
      off: function (t, i, n) {
        var s, o;
        if (t && t.preventDefault && t.handleObj)
          return (
            (s = t.handleObj),
            he(t.delegateTarget).off(
              s.namespace ? s.origType + "." + s.namespace : s.origType,
              s.selector,
              s.handler
            ),
            this
          );
        if ("object" == typeof t) {
          for (o in t) this.off(o, i, t[o]);
          return this;
        }
        return (
          (i === !1 || "function" == typeof i) && ((n = i), (i = e)),
          n === !1 && (n = u),
          this.each(function () {
            he.event.remove(this, t, n, i);
          })
        );
      },
      trigger: function (t, e) {
        return this.each(function () {
          he.event.trigger(t, e, this);
        });
      },
      triggerHandler: function (t, i) {
        var n = this[0];
        return n ? he.event.trigger(t, i, n, !0) : e;
      },
    });
  var qe = /^.[^:#\[\.,]*$/,
    Be = /^(?:parents|prev(?:Until|All))/,
    $e = he.expr.match.needsContext,
    Qe = { children: !0, contents: !0, next: !0, prev: !0 };
  he.fn.extend({
    find: function (t) {
      var e,
        i = [],
        n = this,
        s = n.length;
      if ("string" != typeof t)
        return this.pushStack(
          he(t).filter(function () {
            for (e = 0; s > e; e++) if (he.contains(n[e], this)) return !0;
          })
        );
      for (e = 0; s > e; e++) he.find(t, n[e], i);
      return (
        (i = this.pushStack(s > 1 ? he.unique(i) : i)),
        (i.selector = this.selector ? this.selector + " " + t : t),
        i
      );
    },
    has: function (t) {
      var e,
        i = he(t, this),
        n = i.length;
      return this.filter(function () {
        for (e = 0; n > e; e++) if (he.contains(this, i[e])) return !0;
      });
    },
    not: function (t) {
      return this.pushStack(d(this, t || [], !0));
    },
    filter: function (t) {
      return this.pushStack(d(this, t || [], !1));
    },
    is: function (t) {
      return !!d(this, "string" == typeof t && $e.test(t) ? he(t) : t || [], !1)
        .length;
    },
    closest: function (t, e) {
      for (
        var i,
          n = 0,
          s = this.length,
          o = [],
          r = $e.test(t) || "string" != typeof t ? he(t, e || this.context) : 0;
        s > n;
        n++
      )
        for (i = this[n]; i && i !== e; i = i.parentNode)
          if (
            11 > i.nodeType &&
            (r
              ? r.index(i) > -1
              : 1 === i.nodeType && he.find.matchesSelector(i, t))
          ) {
            i = o.push(i);
            break;
          }
      return this.pushStack(o.length > 1 ? he.unique(o) : o);
    },
    index: function (t) {
      return t
        ? "string" == typeof t
          ? he.inArray(this[0], he(t))
          : he.inArray(t.jquery ? t[0] : t, this)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (t, e) {
      var i =
          "string" == typeof t
            ? he(t, e)
            : he.makeArray(t && t.nodeType ? [t] : t),
        n = he.merge(this.get(), i);
      return this.pushStack(he.unique(n));
    },
    addBack: function (t) {
      return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
    },
  }),
    he.each(
      {
        parent: function (t) {
          var e = t.parentNode;
          return e && 11 !== e.nodeType ? e : null;
        },
        parents: function (t) {
          return he.dir(t, "parentNode");
        },
        parentsUntil: function (t, e, i) {
          return he.dir(t, "parentNode", i);
        },
        next: function (t) {
          return c(t, "nextSibling");
        },
        prev: function (t) {
          return c(t, "previousSibling");
        },
        nextAll: function (t) {
          return he.dir(t, "nextSibling");
        },
        prevAll: function (t) {
          return he.dir(t, "previousSibling");
        },
        nextUntil: function (t, e, i) {
          return he.dir(t, "nextSibling", i);
        },
        prevUntil: function (t, e, i) {
          return he.dir(t, "previousSibling", i);
        },
        siblings: function (t) {
          return he.sibling((t.parentNode || {}).firstChild, t);
        },
        children: function (t) {
          return he.sibling(t.firstChild);
        },
        contents: function (t) {
          return he.nodeName(t, "iframe")
            ? t.contentDocument || t.contentWindow.document
            : he.merge([], t.childNodes);
        },
      },
      function (t, e) {
        he.fn[t] = function (i, n) {
          var s = he.map(this, e, i);
          return (
            "Until" !== t.slice(-5) && (n = i),
            n && "string" == typeof n && (s = he.filter(n, s)),
            this.length > 1 &&
              (Qe[t] || (s = he.unique(s)), Be.test(t) && (s = s.reverse())),
            this.pushStack(s)
          );
        };
      }
    ),
    he.extend({
      filter: function (t, e, i) {
        var n = e[0];
        return (
          i && (t = ":not(" + t + ")"),
          1 === e.length && 1 === n.nodeType
            ? he.find.matchesSelector(n, t)
              ? [n]
              : []
            : he.find.matches(
                t,
                he.grep(e, function (t) {
                  return 1 === t.nodeType;
                })
              )
        );
      },
      dir: function (t, i, n) {
        for (
          var s = [], o = t[i];
          o &&
          9 !== o.nodeType &&
          (n === e || 1 !== o.nodeType || !he(o).is(n));

        )
          1 === o.nodeType && s.push(o), (o = o[i]);
        return s;
      },
      sibling: function (t, e) {
        for (var i = []; t; t = t.nextSibling)
          1 === t.nodeType && t !== e && i.push(t);
        return i;
      },
    });
  var Ye =
      "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    Ue = / jQuery\d+="(?:null|\d+)"/g,
    Ve = RegExp("<(?:" + Ye + ")[\\s/>]", "i"),
    Ke = /^\s+/,
    Xe =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    Ge = /<([\w:]+)/,
    Je = /<tbody/i,
    Ze = /<|&#?\w+;/,
    ti = /<(?:script|style|link)/i,
    ei = /^(?:checkbox|radio)$/i,
    ii = /checked\s*(?:[^=]|=\s*.checked.)/i,
    ni = /^$|\/(?:java|ecma)script/i,
    si = /^true\/(.*)/,
    oi = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    ri = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      legend: [1, "<fieldset>", "</fieldset>"],
      area: [1, "<map>", "</map>"],
      param: [1, "<object>", "</object>"],
      thead: [1, "<table>", "</table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: he.support.htmlSerialize
        ? [0, "", ""]
        : [1, "X<div>", "</div>"],
    },
    ai = p(X),
    li = ai.appendChild(X.createElement("div"));
  (ri.optgroup = ri.option),
    (ri.tbody = ri.tfoot = ri.colgroup = ri.caption = ri.thead),
    (ri.th = ri.td),
    he.fn.extend({
      text: function (t) {
        return he.access(
          this,
          function (t) {
            return t === e
              ? he.text(this)
              : this.empty().append(
                  ((this[0] && this[0].ownerDocument) || X).createTextNode(t)
                );
          },
          null,
          t,
          arguments.length
        );
      },
      append: function () {
        return this.domManip(arguments, function (t) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var e = f(this, t);
            e.appendChild(t);
          }
        });
      },
      prepend: function () {
        return this.domManip(arguments, function (t) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var e = f(this, t);
            e.insertBefore(t, e.firstChild);
          }
        });
      },
      before: function () {
        return this.domManip(arguments, function (t) {
          this.parentNode && this.parentNode.insertBefore(t, this);
        });
      },
      after: function () {
        return this.domManip(arguments, function (t) {
          this.parentNode && this.parentNode.insertBefore(t, this.nextSibling);
        });
      },
      remove: function (t, e) {
        for (
          var i, n = t ? he.filter(t, this) : this, s = 0;
          null != (i = n[s]);
          s++
        )
          e || 1 !== i.nodeType || he.cleanData(_(i)),
            i.parentNode &&
              (e && he.contains(i.ownerDocument, i) && v(_(i, "script")),
              i.parentNode.removeChild(i));
        return this;
      },
      empty: function () {
        for (var t, e = 0; null != (t = this[e]); e++) {
          for (1 === t.nodeType && he.cleanData(_(t, !1)); t.firstChild; )
            t.removeChild(t.firstChild);
          t.options && he.nodeName(t, "select") && (t.options.length = 0);
        }
        return this;
      },
      clone: function (t, e) {
        return (
          (t = null == t ? !1 : t),
          (e = null == e ? t : e),
          this.map(function () {
            return he.clone(this, t, e);
          })
        );
      },
      html: function (t) {
        return he.access(
          this,
          function (t) {
            var i = this[0] || {},
              n = 0,
              s = this.length;
            if (t === e)
              return 1 === i.nodeType ? i.innerHTML.replace(Ue, "") : e;
            if (
              !(
                "string" != typeof t ||
                ti.test(t) ||
                (!he.support.htmlSerialize && Ve.test(t)) ||
                (!he.support.leadingWhitespace && Ke.test(t)) ||
                ri[(Ge.exec(t) || ["", ""])[1].toLowerCase()]
              )
            ) {
              t = t.replace(Xe, "<$1></$2>");
              try {
                for (; s > n; n++)
                  (i = this[n] || {}),
                    1 === i.nodeType &&
                      (he.cleanData(_(i, !1)), (i.innerHTML = t));
                i = 0;
              } catch (o) {}
            }
            i && this.empty().append(t);
          },
          null,
          t,
          arguments.length
        );
      },
      replaceWith: function () {
        var t = he.map(this, function (t) {
            return [t.nextSibling, t.parentNode];
          }),
          e = 0;
        return (
          this.domManip(
            arguments,
            function (i) {
              var n = t[e++],
                s = t[e++];
              s &&
                (n && n.parentNode !== s && (n = this.nextSibling),
                he(this).remove(),
                s.insertBefore(i, n));
            },
            !0
          ),
          e ? this : this.remove()
        );
      },
      detach: function (t) {
        return this.remove(t, !0);
      },
      domManip: function (t, e, i) {
        t = ne.apply([], t);
        var n,
          s,
          o,
          r,
          a,
          l,
          u = 0,
          h = this.length,
          c = this,
          d = h - 1,
          p = t[0],
          f = he.isFunction(p);
        if (
          f ||
          (!(1 >= h || "string" != typeof p || he.support.checkClone) &&
            ii.test(p))
        )
          return this.each(function (n) {
            var s = c.eq(n);
            f && (t[0] = p.call(this, n, s.html())), s.domManip(t, e, i);
          });
        if (
          h &&
          ((l = he.buildFragment(t, this[0].ownerDocument, !1, !i && this)),
          (n = l.firstChild),
          1 === l.childNodes.length && (l = n),
          n)
        ) {
          for (r = he.map(_(l, "script"), m), o = r.length; h > u; u++)
            (s = l),
              u !== d &&
                ((s = he.clone(s, !0, !0)), o && he.merge(r, _(s, "script"))),
              e.call(this[u], s, u);
          if (o)
            for (
              a = r[r.length - 1].ownerDocument, he.map(r, g), u = 0;
              o > u;
              u++
            )
              (s = r[u]),
                ni.test(s.type || "") &&
                  !he._data(s, "globalEval") &&
                  he.contains(a, s) &&
                  (s.src
                    ? he._evalUrl(s.src)
                    : he.globalEval(
                        (s.text || s.textContent || s.innerHTML || "").replace(
                          oi,
                          ""
                        )
                      ));
          l = n = null;
        }
        return this;
      },
    }),
    he.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (t, e) {
        he.fn[t] = function (t) {
          for (var i, n = 0, s = [], o = he(t), r = o.length - 1; r >= n; n++)
            (i = n === r ? this : this.clone(!0)),
              he(o[n])[e](i),
              se.apply(s, i.get());
          return this.pushStack(s);
        };
      }
    ),
    he.extend({
      clone: function (t, e, i) {
        var n,
          s,
          o,
          r,
          a,
          l = he.contains(t.ownerDocument, t);
        if (
          (he.support.html5Clone ||
          he.isXMLDoc(t) ||
          !Ve.test("<" + t.nodeName + ">")
            ? (o = t.cloneNode(!0))
            : ((li.innerHTML = t.outerHTML),
              li.removeChild((o = li.firstChild))),
          !(
            (he.support.noCloneEvent && he.support.noCloneChecked) ||
            (1 !== t.nodeType && 11 !== t.nodeType) ||
            he.isXMLDoc(t)
          ))
        )
          for (n = _(o), a = _(t), r = 0; null != (s = a[r]); ++r)
            n[r] && b(s, n[r]);
        if (e)
          if (i)
            for (a = a || _(t), n = n || _(o), r = 0; null != (s = a[r]); r++)
              y(s, n[r]);
          else y(t, o);
        return (
          (n = _(o, "script")),
          n.length > 0 && v(n, !l && _(t, "script")),
          (n = a = s = null),
          o
        );
      },
      buildFragment: function (t, e, i, n) {
        for (
          var s, o, r, a, l, u, h, c = t.length, d = p(e), f = [], m = 0;
          c > m;
          m++
        )
          if (((o = t[m]), o || 0 === o))
            if ("object" === he.type(o)) he.merge(f, o.nodeType ? [o] : o);
            else if (Ze.test(o)) {
              for (
                a = a || d.appendChild(e.createElement("div")),
                  l = (Ge.exec(o) || ["", ""])[1].toLowerCase(),
                  h = ri[l] || ri._default,
                  a.innerHTML = h[1] + o.replace(Xe, "<$1></$2>") + h[2],
                  s = h[0];
                s--;

              )
                a = a.lastChild;
              if (
                (!he.support.leadingWhitespace &&
                  Ke.test(o) &&
                  f.push(e.createTextNode(Ke.exec(o)[0])),
                !he.support.tbody)
              )
                for (
                  o =
                    "table" !== l || Je.test(o)
                      ? "<table>" !== h[1] || Je.test(o)
                        ? 0
                        : a
                      : a.firstChild,
                    s = o && o.childNodes.length;
                  s--;

                )
                  he.nodeName((u = o.childNodes[s]), "tbody") &&
                    !u.childNodes.length &&
                    o.removeChild(u);
              for (
                he.merge(f, a.childNodes), a.textContent = "";
                a.firstChild;

              )
                a.removeChild(a.firstChild);
              a = d.lastChild;
            } else f.push(e.createTextNode(o));
        for (
          a && d.removeChild(a),
            he.support.appendChecked || he.grep(_(f, "input"), w),
            m = 0;
          (o = f[m++]);

        )
          if (
            (!n || -1 === he.inArray(o, n)) &&
            ((r = he.contains(o.ownerDocument, o)),
            (a = _(d.appendChild(o), "script")),
            r && v(a),
            i)
          )
            for (s = 0; (o = a[s++]); ) ni.test(o.type || "") && i.push(o);
        return (a = null), d;
      },
      cleanData: function (t, e) {
        for (
          var i,
            n,
            s,
            o,
            r = 0,
            a = he.expando,
            l = he.cache,
            u = he.support.deleteExpando,
            h = he.event.special;
          null != (i = t[r]);
          r++
        )
          if ((e || he.acceptData(i)) && ((s = i[a]), (o = s && l[s]))) {
            if (o.events)
              for (n in o.events)
                h[n] ? he.event.remove(i, n) : he.removeEvent(i, n, o.handle);
            l[s] &&
              (delete l[s],
              u
                ? delete i[a]
                : typeof i.removeAttribute !== V
                ? i.removeAttribute(a)
                : (i[a] = null),
              ee.push(s));
          }
      },
      _evalUrl: function (t) {
        return he.ajax({
          url: t,
          type: "GET",
          dataType: "script",
          async: !1,
          global: !1,
          throws: !0,
        });
      },
    }),
    he.fn.extend({
      wrapAll: function (t) {
        if (he.isFunction(t))
          return this.each(function (e) {
            he(this).wrapAll(t.call(this, e));
          });
        if (this[0]) {
          var e = he(t, this[0].ownerDocument).eq(0).clone(!0);
          this[0].parentNode && e.insertBefore(this[0]),
            e
              .map(function () {
                for (
                  var t = this;
                  t.firstChild && 1 === t.firstChild.nodeType;

                )
                  t = t.firstChild;
                return t;
              })
              .append(this);
        }
        return this;
      },
      wrapInner: function (t) {
        return this.each(
          he.isFunction(t)
            ? function (e) {
                he(this).wrapInner(t.call(this, e));
              }
            : function () {
                var e = he(this),
                  i = e.contents();
                i.length ? i.wrapAll(t) : e.append(t);
              }
        );
      },
      wrap: function (t) {
        var e = he.isFunction(t);
        return this.each(function (i) {
          he(this).wrapAll(e ? t.call(this, i) : t);
        });
      },
      unwrap: function () {
        return this.parent()
          .each(function () {
            he.nodeName(this, "body") || he(this).replaceWith(this.childNodes);
          })
          .end();
      },
    });
  var ui,
    hi,
    ci,
    di = /alpha\([^)]*\)/i,
    pi = /opacity\s*=\s*([^)]*)/,
    fi = /^(top|right|bottom|left)$/,
    mi = /^(none|table(?!-c[ea]).+)/,
    gi = /^margin/,
    vi = RegExp("^(" + ce + ")(.*)$", "i"),
    yi = RegExp("^(" + ce + ")(?!px)[a-z%]+$", "i"),
    bi = RegExp("^([+-])=(" + ce + ")", "i"),
    _i = { BODY: "block" },
    wi = { position: "absolute", visibility: "hidden", display: "block" },
    xi = { letterSpacing: 0, fontWeight: 400 },
    ki = ["Top", "Right", "Bottom", "Left"],
    Ci = ["Webkit", "O", "Moz", "ms"];
  he.fn.extend({
    css: function (t, i) {
      return he.access(
        this,
        function (t, i, n) {
          var s,
            o,
            r = {},
            a = 0;
          if (he.isArray(i)) {
            for (o = hi(t), s = i.length; s > a; a++)
              r[i[a]] = he.css(t, i[a], !1, o);
            return r;
          }
          return n !== e ? he.style(t, i, n) : he.css(t, i);
        },
        t,
        i,
        arguments.length > 1
      );
    },
    show: function () {
      return C(this, !0);
    },
    hide: function () {
      return C(this);
    },
    toggle: function (t) {
      return "boolean" == typeof t
        ? t
          ? this.show()
          : this.hide()
        : this.each(function () {
            k(this) ? he(this).show() : he(this).hide();
          });
    },
  }),
    he.extend({
      cssHooks: {
        opacity: {
          get: function (t, e) {
            if (e) {
              var i = ci(t, "opacity");
              return "" === i ? "1" : i;
            }
          },
        },
      },
      cssNumber: {
        columnCount: !0,
        fillOpacity: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
      },
      cssProps: { float: he.support.cssFloat ? "cssFloat" : "styleFloat" },
      style: function (t, i, n, s) {
        if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
          var o,
            r,
            a,
            l = he.camelCase(i),
            u = t.style;
          if (
            ((i = he.cssProps[l] || (he.cssProps[l] = x(u, l))),
            (a = he.cssHooks[i] || he.cssHooks[l]),
            n === e)
          )
            return a && "get" in a && (o = a.get(t, !1, s)) !== e ? o : u[i];
          if (
            ((r = typeof n),
            "string" === r &&
              (o = bi.exec(n)) &&
              ((n = (o[1] + 1) * o[2] + parseFloat(he.css(t, i))),
              (r = "number")),
            !(
              null == n ||
              ("number" === r && isNaN(n)) ||
              ("number" !== r || he.cssNumber[l] || (n += "px"),
              he.support.clearCloneStyle ||
                "" !== n ||
                0 !== i.indexOf("background") ||
                (u[i] = "inherit"),
              a && "set" in a && (n = a.set(t, n, s)) === e)
            ))
          )
            try {
              u[i] = n;
            } catch (h) {}
        }
      },
      css: function (t, i, n, s) {
        var o,
          r,
          a,
          l = he.camelCase(i);
        return (
          (i = he.cssProps[l] || (he.cssProps[l] = x(t.style, l))),
          (a = he.cssHooks[i] || he.cssHooks[l]),
          a && "get" in a && (r = a.get(t, !0, n)),
          r === e && (r = ci(t, i, s)),
          "normal" === r && i in xi && (r = xi[i]),
          "" === n || n
            ? ((o = parseFloat(r)), n === !0 || he.isNumeric(o) ? o || 0 : r)
            : r
        );
      },
    }),
    t.getComputedStyle
      ? ((hi = function (e) {
          return t.getComputedStyle(e, null);
        }),
        (ci = function (t, i, n) {
          var s,
            o,
            r,
            a = n || hi(t),
            l = a ? a.getPropertyValue(i) || a[i] : e,
            u = t.style;
          return (
            a &&
              ("" !== l ||
                he.contains(t.ownerDocument, t) ||
                (l = he.style(t, i)),
              yi.test(l) &&
                gi.test(i) &&
                ((s = u.width),
                (o = u.minWidth),
                (r = u.maxWidth),
                (u.minWidth = u.maxWidth = u.width = l),
                (l = a.width),
                (u.width = s),
                (u.minWidth = o),
                (u.maxWidth = r))),
            l
          );
        }))
      : X.documentElement.currentStyle &&
        ((hi = function (t) {
          return t.currentStyle;
        }),
        (ci = function (t, i, n) {
          var s,
            o,
            r,
            a = n || hi(t),
            l = a ? a[i] : e,
            u = t.style;
          return (
            null == l && u && u[i] && (l = u[i]),
            yi.test(l) &&
              !fi.test(i) &&
              ((s = u.left),
              (o = t.runtimeStyle),
              (r = o && o.left),
              r && (o.left = t.currentStyle.left),
              (u.left = "fontSize" === i ? "1em" : l),
              (l = u.pixelLeft + "px"),
              (u.left = s),
              r && (o.left = r)),
            "" === l ? "auto" : l
          );
        })),
    he.each(["height", "width"], function (t, i) {
      he.cssHooks[i] = {
        get: function (t, n, s) {
          return n
            ? 0 === t.offsetWidth && mi.test(he.css(t, "display"))
              ? he.swap(t, wi, function () {
                  return T(t, i, s);
                })
              : T(t, i, s)
            : e;
        },
        set: function (t, e, n) {
          var s = n && hi(t);
          return S(
            t,
            e,
            n
              ? D(
                  t,
                  i,
                  n,
                  he.support.boxSizing &&
                    "border-box" === he.css(t, "boxSizing", !1, s),
                  s
                )
              : 0
          );
        },
      };
    }),
    he.support.opacity ||
      (he.cssHooks.opacity = {
        get: function (t, e) {
          return pi.test(
            (e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || ""
          )
            ? 0.01 * parseFloat(RegExp.$1) + ""
            : e
            ? "1"
            : "";
        },
        set: function (t, e) {
          var i = t.style,
            n = t.currentStyle,
            s = he.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
            o = (n && n.filter) || i.filter || "";
          (i.zoom = 1),
            ((e >= 1 || "" === e) &&
              "" === he.trim(o.replace(di, "")) &&
              i.removeAttribute &&
              (i.removeAttribute("filter"), "" === e || (n && !n.filter))) ||
              (i.filter = di.test(o) ? o.replace(di, s) : o + " " + s);
        },
      }),
    he(function () {
      he.support.reliableMarginRight ||
        (he.cssHooks.marginRight = {
          get: function (t, i) {
            return i
              ? he.swap(t, { display: "inline-block" }, ci, [t, "marginRight"])
              : e;
          },
        }),
        !he.support.pixelPosition &&
          he.fn.position &&
          he.each(["top", "left"], function (t, i) {
            he.cssHooks[i] = {
              get: function (t, n) {
                return n
                  ? ((n = ci(t, i)),
                    yi.test(n) ? he(t).position()[i] + "px" : n)
                  : e;
              },
            };
          });
    }),
    he.expr &&
      he.expr.filters &&
      ((he.expr.filters.hidden = function (t) {
        return (
          (0 >= t.offsetWidth && 0 >= t.offsetHeight) ||
          (!he.support.reliableHiddenOffsets &&
            "none" === ((t.style && t.style.display) || he.css(t, "display")))
        );
      }),
      (he.expr.filters.visible = function (t) {
        return !he.expr.filters.hidden(t);
      })),
    he.each({ margin: "", padding: "", border: "Width" }, function (t, e) {
      (he.cssHooks[t + e] = {
        expand: function (i) {
          for (
            var n = 0, s = {}, o = "string" == typeof i ? i.split(" ") : [i];
            4 > n;
            n++
          )
            s[t + ki[n] + e] = o[n] || o[n - 2] || o[0];
          return s;
        },
      }),
        gi.test(t) || (he.cssHooks[t + e].set = S);
    });
  var Si = /%20/g,
    Di = /\[\]$/,
    Ti = /\r?\n/g,
    Ei = /^(?:submit|button|image|reset|file)$/i,
    Pi = /^(?:input|select|textarea|keygen)/i;
  he.fn.extend({
    serialize: function () {
      return he.param(this.serializeArray());
    },
    serializeArray: function () {
      return this.map(function () {
        var t = he.prop(this, "elements");
        return t ? he.makeArray(t) : this;
      })
        .filter(function () {
          var t = this.type;
          return (
            this.name &&
            !he(this).is(":disabled") &&
            Pi.test(this.nodeName) &&
            !Ei.test(t) &&
            (this.checked || !ei.test(t))
          );
        })
        .map(function (t, e) {
          var i = he(this).val();
          return null == i
            ? null
            : he.isArray(i)
            ? he.map(i, function (t) {
                return { name: e.name, value: t.replace(Ti, "\r\n") };
              })
            : { name: e.name, value: i.replace(Ti, "\r\n") };
        })
        .get();
    },
  }),
    (he.param = function (t, i) {
      var n,
        s = [],
        o = function (t, e) {
          (e = he.isFunction(e) ? e() : null == e ? "" : e),
            (s[s.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e));
        };
      if (
        (i === e && (i = he.ajaxSettings && he.ajaxSettings.traditional),
        he.isArray(t) || (t.jquery && !he.isPlainObject(t)))
      )
        he.each(t, function () {
          o(this.name, this.value);
        });
      else for (n in t) I(n, t[n], i, o);
      return s.join("&").replace(Si, "+");
    }),
    he.each(
      "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
        " "
      ),
      function (t, e) {
        he.fn[e] = function (t, i) {
          return arguments.length > 0
            ? this.on(e, null, t, i)
            : this.trigger(e);
        };
      }
    ),
    he.fn.extend({
      hover: function (t, e) {
        return this.mouseenter(t).mouseleave(e || t);
      },
      bind: function (t, e, i) {
        return this.on(t, null, e, i);
      },
      unbind: function (t, e) {
        return this.off(t, null, e);
      },
      delegate: function (t, e, i, n) {
        return this.on(e, t, i, n);
      },
      undelegate: function (t, e, i) {
        return 1 === arguments.length
          ? this.off(t, "**")
          : this.off(e, t || "**", i);
      },
    });
  var Ii,
    Mi,
    Ni = he.now(),
    Ai = /\?/,
    ji = /#.*$/,
    Hi = /([?&])_=[^&]*/,
    Oi = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    zi = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Li = /^(?:GET|HEAD)$/,
    Wi = /^\/\//,
    Fi = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
    Ri = he.fn.load,
    qi = {},
    Bi = {},
    $i = "*/".concat("*");
  try {
    Mi = K.href;
  } catch (Qi) {
    (Mi = X.createElement("a")), (Mi.href = ""), (Mi = Mi.href);
  }
  (Ii = Fi.exec(Mi.toLowerCase()) || []),
    (he.fn.load = function (t, i, n) {
      if ("string" != typeof t && Ri) return Ri.apply(this, arguments);
      var s,
        o,
        r,
        a = this,
        l = t.indexOf(" ");
      return (
        l >= 0 && ((s = t.slice(l, t.length)), (t = t.slice(0, l))),
        he.isFunction(i)
          ? ((n = i), (i = e))
          : i && "object" == typeof i && (r = "POST"),
        a.length > 0 &&
          he
            .ajax({ url: t, type: r, dataType: "html", data: i })
            .done(function (t) {
              (o = arguments),
                a.html(s ? he("<div>").append(he.parseHTML(t)).find(s) : t);
            })
            .complete(
              n &&
                function (t, e) {
                  a.each(n, o || [t.responseText, e, t]);
                }
            ),
        this
      );
    }),
    he.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (t, e) {
        he.fn[e] = function (t) {
          return this.on(e, t);
        };
      }
    ),
    he.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Mi,
        type: "GET",
        isLocal: zi.test(Ii[1]),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": $i,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /xml/, html: /html/, json: /json/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": he.parseJSON,
          "text xml": he.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (t, e) {
        return e ? A(A(t, he.ajaxSettings), e) : A(he.ajaxSettings, t);
      },
      ajaxPrefilter: M(qi),
      ajaxTransport: M(Bi),
      ajax: function (t, i) {
        function n(t, i, n, s) {
          var o,
            c,
            y,
            b,
            w,
            k = i;
          2 !== _ &&
            ((_ = 2),
            l && clearTimeout(l),
            (h = e),
            (a = s || ""),
            (x.readyState = t > 0 ? 4 : 0),
            (o = (t >= 200 && 300 > t) || 304 === t),
            n && (b = j(d, x, n)),
            (b = H(d, b, x, o)),
            o
              ? (d.ifModified &&
                  ((w = x.getResponseHeader("Last-Modified")),
                  w && (he.lastModified[r] = w),
                  (w = x.getResponseHeader("etag")),
                  w && (he.etag[r] = w)),
                204 === t || "HEAD" === d.type
                  ? (k = "nocontent")
                  : 304 === t
                  ? (k = "notmodified")
                  : ((k = b.state), (c = b.data), (y = b.error), (o = !y)))
              : ((y = k), (t || !k) && ((k = "error"), 0 > t && (t = 0))),
            (x.status = t),
            (x.statusText = (i || k) + ""),
            o ? m.resolveWith(p, [c, k, x]) : m.rejectWith(p, [x, k, y]),
            x.statusCode(v),
            (v = e),
            u && f.trigger(o ? "ajaxSuccess" : "ajaxError", [x, d, o ? c : y]),
            g.fireWith(p, [x, k]),
            u &&
              (f.trigger("ajaxComplete", [x, d]),
              --he.active || he.event.trigger("ajaxStop")));
        }
        "object" == typeof t && ((i = t), (t = e)), (i = i || {});
        var s,
          o,
          r,
          a,
          l,
          u,
          h,
          c,
          d = he.ajaxSetup({}, i),
          p = d.context || d,
          f = d.context && (p.nodeType || p.jquery) ? he(p) : he.event,
          m = he.Deferred(),
          g = he.Callbacks("once memory"),
          v = d.statusCode || {},
          y = {},
          b = {},
          _ = 0,
          w = "canceled",
          x = {
            readyState: 0,
            getResponseHeader: function (t) {
              var e;
              if (2 === _) {
                if (!c)
                  for (c = {}; (e = Oi.exec(a)); ) c[e[1].toLowerCase()] = e[2];
                e = c[t.toLowerCase()];
              }
              return null == e ? null : e;
            },
            getAllResponseHeaders: function () {
              return 2 === _ ? a : null;
            },
            setRequestHeader: function (t, e) {
              var i = t.toLowerCase();
              return _ || ((t = b[i] = b[i] || t), (y[t] = e)), this;
            },
            overrideMimeType: function (t) {
              return _ || (d.mimeType = t), this;
            },
            statusCode: function (t) {
              var e;
              if (t)
                if (2 > _) for (e in t) v[e] = [v[e], t[e]];
                else x.always(t[x.status]);
              return this;
            },
            abort: function (t) {
              var e = t || w;
              return h && h.abort(e), n(0, e), this;
            },
          };
        if (
          ((m.promise(x).complete = g.add),
          (x.success = x.done),
          (x.error = x.fail),
          (d.url = ((t || d.url || Mi) + "")
            .replace(ji, "")
            .replace(Wi, Ii[1] + "//")),
          (d.type = i.method || i.type || d.method || d.type),
          (d.dataTypes = he
            .trim(d.dataType || "*")
            .toLowerCase()
            .match(de) || [""]),
          null == d.crossDomain &&
            ((s = Fi.exec(d.url.toLowerCase())),
            (d.crossDomain = !(
              !s ||
              (s[1] === Ii[1] &&
                s[2] === Ii[2] &&
                (s[3] || ("http:" === s[1] ? "80" : "443")) ===
                  (Ii[3] || ("http:" === Ii[1] ? "80" : "443")))
            ))),
          d.data &&
            d.processData &&
            "string" != typeof d.data &&
            (d.data = he.param(d.data, d.traditional)),
          N(qi, d, i, x),
          2 === _)
        )
          return x;
        (u = d.global),
          u && 0 === he.active++ && he.event.trigger("ajaxStart"),
          (d.type = d.type.toUpperCase()),
          (d.hasContent = !Li.test(d.type)),
          (r = d.url),
          d.hasContent ||
            (d.data &&
              ((r = d.url += (Ai.test(r) ? "&" : "?") + d.data), delete d.data),
            d.cache === !1 &&
              (d.url = Hi.test(r)
                ? r.replace(Hi, "$1_=" + Ni++)
                : r + (Ai.test(r) ? "&" : "?") + "_=" + Ni++)),
          d.ifModified &&
            (he.lastModified[r] &&
              x.setRequestHeader("If-Modified-Since", he.lastModified[r]),
            he.etag[r] && x.setRequestHeader("If-None-Match", he.etag[r])),
          ((d.data && d.hasContent && d.contentType !== !1) || i.contentType) &&
            x.setRequestHeader("Content-Type", d.contentType),
          x.setRequestHeader(
            "Accept",
            d.dataTypes[0] && d.accepts[d.dataTypes[0]]
              ? d.accepts[d.dataTypes[0]] +
                  ("*" !== d.dataTypes[0] ? ", " + $i + "; q=0.01" : "")
              : d.accepts["*"]
          );
        for (o in d.headers) x.setRequestHeader(o, d.headers[o]);
        if (d.beforeSend && (d.beforeSend.call(p, x, d) === !1 || 2 === _))
          return x.abort();
        w = "abort";
        for (o in { success: 1, error: 1, complete: 1 }) x[o](d[o]);
        if ((h = N(Bi, d, i, x))) {
          (x.readyState = 1),
            u && f.trigger("ajaxSend", [x, d]),
            d.async &&
              d.timeout > 0 &&
              (l = setTimeout(function () {
                x.abort("timeout");
              }, d.timeout));
          try {
            (_ = 1), h.send(y, n);
          } catch (k) {
            if (!(2 > _)) throw k;
            n(-1, k);
          }
        } else n(-1, "No Transport");
        return x;
      },
      getJSON: function (t, e, i) {
        return he.get(t, e, i, "json");
      },
      getScript: function (t, i) {
        return he.get(t, e, i, "script");
      },
    }),
    he.each(["get", "post"], function (t, i) {
      he[i] = function (t, n, s, o) {
        return (
          he.isFunction(n) && ((o = o || s), (s = n), (n = e)),
          he.ajax({ url: t, type: i, dataType: o, data: n, success: s })
        );
      };
    }),
    he.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /(?:java|ecma)script/ },
      converters: {
        "text script": function (t) {
          return he.globalEval(t), t;
        },
      },
    }),
    he.ajaxPrefilter("script", function (t) {
      t.cache === e && (t.cache = !1),
        t.crossDomain && ((t.type = "GET"), (t.global = !1));
    }),
    he.ajaxTransport("script", function (t) {
      if (t.crossDomain) {
        var i,
          n = X.head || he("head")[0] || X.documentElement;
        return {
          send: function (e, s) {
            (i = X.createElement("script")),
              (i.async = !0),
              t.scriptCharset && (i.charset = t.scriptCharset),
              (i.src = t.url),
              (i.onload = i.onreadystatechange =
                function (t, e) {
                  (e ||
                    !i.readyState ||
                    /loaded|complete/.test(i.readyState)) &&
                    ((i.onload = i.onreadystatechange = null),
                    i.parentNode && i.parentNode.removeChild(i),
                    (i = null),
                    e || s(200, "success"));
                }),
              n.insertBefore(i, n.firstChild);
          },
          abort: function () {
            i && i.onload(e, !0);
          },
        };
      }
    });
  var Yi = [],
    Ui = /(=)\?(?=&|$)|\?\?/;
  he.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var t = Yi.pop() || he.expando + "_" + Ni++;
      return (this[t] = !0), t;
    },
  }),
    he.ajaxPrefilter("json jsonp", function (i, n, s) {
      var o,
        r,
        a,
        l =
          i.jsonp !== !1 &&
          (Ui.test(i.url)
            ? "url"
            : "string" == typeof i.data &&
              !(i.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
              Ui.test(i.data) &&
              "data");
      return l || "jsonp" === i.dataTypes[0]
        ? ((o = i.jsonpCallback =
            he.isFunction(i.jsonpCallback)
              ? i.jsonpCallback()
              : i.jsonpCallback),
          l
            ? (i[l] = i[l].replace(Ui, "$1" + o))
            : i.jsonp !== !1 &&
              (i.url += (Ai.test(i.url) ? "&" : "?") + i.jsonp + "=" + o),
          (i.converters["script json"] = function () {
            return a || he.error(o + " was not called"), a[0];
          }),
          (i.dataTypes[0] = "json"),
          (r = t[o]),
          (t[o] = function () {
            a = arguments;
          }),
          s.always(function () {
            (t[o] = r),
              i[o] && ((i.jsonpCallback = n.jsonpCallback), Yi.push(o)),
              a && he.isFunction(r) && r(a[0]),
              (a = r = e);
          }),
          "script")
        : e;
    });
  var Vi,
    Ki,
    Xi = 0,
    Gi =
      t.ActiveXObject &&
      function () {
        var t;
        for (t in Vi) Vi[t](e, !0);
      };
  (he.ajaxSettings.xhr = t.ActiveXObject
    ? function () {
        return (!this.isLocal && O()) || z();
      }
    : O),
    (Ki = he.ajaxSettings.xhr()),
    (he.support.cors = !!Ki && "withCredentials" in Ki),
    (Ki = he.support.ajax = !!Ki),
    Ki &&
      he.ajaxTransport(function (i) {
        if (!i.crossDomain || he.support.cors) {
          var n;
          return {
            send: function (s, o) {
              var r,
                a,
                l = i.xhr();
              if (
                (i.username
                  ? l.open(i.type, i.url, i.async, i.username, i.password)
                  : l.open(i.type, i.url, i.async),
                i.xhrFields)
              )
                for (a in i.xhrFields) l[a] = i.xhrFields[a];
              i.mimeType &&
                l.overrideMimeType &&
                l.overrideMimeType(i.mimeType),
                i.crossDomain ||
                  s["X-Requested-With"] ||
                  (s["X-Requested-With"] = "XMLHttpRequest");
              try {
                for (a in s) l.setRequestHeader(a, s[a]);
              } catch (u) {}
              l.send((i.hasContent && i.data) || null),
                (n = function (t, s) {
                  var a, u, h, c;
                  try {
                    if (n && (s || 4 === l.readyState))
                      if (
                        ((n = e),
                        r &&
                          ((l.onreadystatechange = he.noop),
                          Gi && delete Vi[r]),
                        s)
                      )
                        4 !== l.readyState && l.abort();
                      else {
                        (c = {}),
                          (a = l.status),
                          (u = l.getAllResponseHeaders()),
                          "string" == typeof l.responseText &&
                            (c.text = l.responseText);
                        try {
                          h = l.statusText;
                        } catch (d) {
                          h = "";
                        }
                        a || !i.isLocal || i.crossDomain
                          ? 1223 === a && (a = 204)
                          : (a = c.text ? 200 : 404);
                      }
                  } catch (p) {
                    s || o(-1, p);
                  }
                  c && o(a, h, c, u);
                }),
                i.async
                  ? 4 === l.readyState
                    ? setTimeout(n)
                    : ((r = ++Xi),
                      Gi && (Vi || ((Vi = {}), he(t).unload(Gi)), (Vi[r] = n)),
                      (l.onreadystatechange = n))
                  : n();
            },
            abort: function () {
              n && n(e, !0);
            },
          };
        }
      });
  var Ji,
    Zi,
    tn = /^(?:toggle|show|hide)$/,
    en = RegExp("^(?:([+-])=|)(" + ce + ")([a-z%]*)$", "i"),
    nn = /queueHooks$/,
    sn = [q],
    on = {
      "*": [
        function (t, e) {
          var i = this.createTween(t, e),
            n = i.cur(),
            s = en.exec(e),
            o = (s && s[3]) || (he.cssNumber[t] ? "" : "px"),
            r =
              (he.cssNumber[t] || ("px" !== o && +n)) &&
              en.exec(he.css(i.elem, t)),
            a = 1,
            l = 20;
          if (r && r[3] !== o) {
            (o = o || r[3]), (s = s || []), (r = +n || 1);
            do (a = a || ".5"), (r /= a), he.style(i.elem, t, r + o);
            while (a !== (a = i.cur() / n) && 1 !== a && --l);
          }
          return (
            s &&
              ((r = i.start = +r || +n || 0),
              (i.unit = o),
              (i.end = s[1] ? r + (s[1] + 1) * s[2] : +s[2])),
            i
          );
        },
      ],
    };
  (he.Animation = he.extend(F, {
    tweener: function (t, e) {
      he.isFunction(t) ? ((e = t), (t = ["*"])) : (t = t.split(" "));
      for (var i, n = 0, s = t.length; s > n; n++)
        (i = t[n]), (on[i] = on[i] || []), on[i].unshift(e);
    },
    prefilter: function (t, e) {
      e ? sn.unshift(t) : sn.push(t);
    },
  })),
    (he.Tween = B),
    (B.prototype = {
      constructor: B,
      init: function (t, e, i, n, s, o) {
        (this.elem = t),
          (this.prop = i),
          (this.easing = s || "swing"),
          (this.options = e),
          (this.start = this.now = this.cur()),
          (this.end = n),
          (this.unit = o || (he.cssNumber[i] ? "" : "px"));
      },
      cur: function () {
        var t = B.propHooks[this.prop];
        return t && t.get ? t.get(this) : B.propHooks._default.get(this);
      },
      run: function (t) {
        var e,
          i = B.propHooks[this.prop];
        return (
          (this.pos = e =
            this.options.duration
              ? he.easing[this.easing](
                  t,
                  this.options.duration * t,
                  0,
                  1,
                  this.options.duration
                )
              : t),
          (this.now = (this.end - this.start) * e + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          i && i.set ? i.set(this) : B.propHooks._default.set(this),
          this
        );
      },
    }),
    (B.prototype.init.prototype = B.prototype),
    (B.propHooks = {
      _default: {
        get: function (t) {
          var e;
          return null == t.elem[t.prop] ||
            (t.elem.style && null != t.elem.style[t.prop])
            ? ((e = he.css(t.elem, t.prop, "")), e && "auto" !== e ? e : 0)
            : t.elem[t.prop];
        },
        set: function (t) {
          he.fx.step[t.prop]
            ? he.fx.step[t.prop](t)
            : t.elem.style &&
              (null != t.elem.style[he.cssProps[t.prop]] || he.cssHooks[t.prop])
            ? he.style(t.elem, t.prop, t.now + t.unit)
            : (t.elem[t.prop] = t.now);
        },
      },
    }),
    (B.propHooks.scrollTop = B.propHooks.scrollLeft =
      {
        set: function (t) {
          t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
        },
      }),
    he.each(["toggle", "show", "hide"], function (t, e) {
      var i = he.fn[e];
      he.fn[e] = function (t, n, s) {
        return null == t || "boolean" == typeof t
          ? i.apply(this, arguments)
          : this.animate($(e, !0), t, n, s);
      };
    }),
    he.fn.extend({
      fadeTo: function (t, e, i, n) {
        return this.filter(k)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: e }, t, i, n);
      },
      animate: function (t, e, i, n) {
        var s = he.isEmptyObject(t),
          o = he.speed(e, i, n),
          r = function () {
            var e = F(this, he.extend({}, t), o);
            (s || he._data(this, "finish")) && e.stop(!0);
          };
        return (
          (r.finish = r),
          s || o.queue === !1 ? this.each(r) : this.queue(o.queue, r)
        );
      },
      stop: function (t, i, n) {
        var s = function (t) {
          var e = t.stop;
          delete t.stop, e(n);
        };
        return (
          "string" != typeof t && ((n = i), (i = t), (t = e)),
          i && t !== !1 && this.queue(t || "fx", []),
          this.each(function () {
            var e = !0,
              i = null != t && t + "queueHooks",
              o = he.timers,
              r = he._data(this);
            if (i) r[i] && r[i].stop && s(r[i]);
            else for (i in r) r[i] && r[i].stop && nn.test(i) && s(r[i]);
            for (i = o.length; i--; )
              o[i].elem !== this ||
                (null != t && o[i].queue !== t) ||
                (o[i].anim.stop(n), (e = !1), o.splice(i, 1));
            (e || !n) && he.dequeue(this, t);
          })
        );
      },
      finish: function (t) {
        return (
          t !== !1 && (t = t || "fx"),
          this.each(function () {
            var e,
              i = he._data(this),
              n = i[t + "queue"],
              s = i[t + "queueHooks"],
              o = he.timers,
              r = n ? n.length : 0;
            for (
              i.finish = !0,
                he.queue(this, t, []),
                s && s.stop && s.stop.call(this, !0),
                e = o.length;
              e--;

            )
              o[e].elem === this &&
                o[e].queue === t &&
                (o[e].anim.stop(!0), o.splice(e, 1));
            for (e = 0; r > e; e++)
              n[e] && n[e].finish && n[e].finish.call(this);
            delete i.finish;
          })
        );
      },
    }),
    he.each(
      {
        slideDown: $("show"),
        slideUp: $("hide"),
        slideToggle: $("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (t, e) {
        he.fn[t] = function (t, i, n) {
          return this.animate(e, t, i, n);
        };
      }
    ),
    (he.speed = function (t, e, i) {
      var n =
        t && "object" == typeof t
          ? he.extend({}, t)
          : {
              complete: i || (!i && e) || (he.isFunction(t) && t),
              duration: t,
              easing: (i && e) || (e && !he.isFunction(e) && e),
            };
      return (
        (n.duration = he.fx.off
          ? 0
          : "number" == typeof n.duration
          ? n.duration
          : n.duration in he.fx.speeds
          ? he.fx.speeds[n.duration]
          : he.fx.speeds._default),
        (null == n.queue || n.queue === !0) && (n.queue = "fx"),
        (n.old = n.complete),
        (n.complete = function () {
          he.isFunction(n.old) && n.old.call(this),
            n.queue && he.dequeue(this, n.queue);
        }),
        n
      );
    }),
    (he.easing = {
      linear: function (t) {
        return t;
      },
      swing: function (t) {
        return 0.5 - Math.cos(t * Math.PI) / 2;
      },
    }),
    (he.timers = []),
    (he.fx = B.prototype.init),
    (he.fx.tick = function () {
      var t,
        i = he.timers,
        n = 0;
      for (Ji = he.now(); i.length > n; n++)
        (t = i[n]), t() || i[n] !== t || i.splice(n--, 1);
      i.length || he.fx.stop(), (Ji = e);
    }),
    (he.fx.timer = function (t) {
      t() && he.timers.push(t) && he.fx.start();
    }),
    (he.fx.interval = 13),
    (he.fx.start = function () {
      Zi || (Zi = setInterval(he.fx.tick, he.fx.interval));
    }),
    (he.fx.stop = function () {
      clearInterval(Zi), (Zi = null);
    }),
    (he.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (he.fx.step = {}),
    he.expr &&
      he.expr.filters &&
      (he.expr.filters.animated = function (t) {
        return he.grep(he.timers, function (e) {
          return t === e.elem;
        }).length;
      }),
    (he.fn.offset = function (t) {
      if (arguments.length)
        return t === e
          ? this
          : this.each(function (e) {
              he.offset.setOffset(this, t, e);
            });
      var i,
        n,
        s = { top: 0, left: 0 },
        o = this[0],
        r = o && o.ownerDocument;
      return r
        ? ((i = r.documentElement),
          he.contains(i, o)
            ? (typeof o.getBoundingClientRect !== V &&
                (s = o.getBoundingClientRect()),
              (n = Q(r)),
              {
                top:
                  s.top + (n.pageYOffset || i.scrollTop) - (i.clientTop || 0),
                left:
                  s.left +
                  (n.pageXOffset || i.scrollLeft) -
                  (i.clientLeft || 0),
              })
            : s)
        : void 0;
    }),
    (he.offset = {
      setOffset: function (t, e, i) {
        var n = he.css(t, "position");
        "static" === n && (t.style.position = "relative");
        var s,
          o,
          r = he(t),
          a = r.offset(),
          l = he.css(t, "top"),
          u = he.css(t, "left"),
          h =
            ("absolute" === n || "fixed" === n) &&
            he.inArray("auto", [l, u]) > -1,
          c = {},
          d = {};
        h
          ? ((d = r.position()), (s = d.top), (o = d.left))
          : ((s = parseFloat(l) || 0), (o = parseFloat(u) || 0)),
          he.isFunction(e) && (e = e.call(t, i, a)),
          null != e.top && (c.top = e.top - a.top + s),
          null != e.left && (c.left = e.left - a.left + o),
          "using" in e ? e.using.call(t, c) : r.css(c);
      },
    }),
    he.fn.extend({
      position: function () {
        if (this[0]) {
          var t,
            e,
            i = { top: 0, left: 0 },
            n = this[0];
          return (
            "fixed" === he.css(n, "position")
              ? (e = n.getBoundingClientRect())
              : ((t = this.offsetParent()),
                (e = this.offset()),
                he.nodeName(t[0], "html") || (i = t.offset()),
                (i.top += he.css(t[0], "borderTopWidth", !0)),
                (i.left += he.css(t[0], "borderLeftWidth", !0))),
            {
              top: e.top - i.top - he.css(n, "marginTop", !0),
              left: e.left - i.left - he.css(n, "marginLeft", !0),
            }
          );
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var t = this.offsetParent || G;
            t && !he.nodeName(t, "html") && "static" === he.css(t, "position");

          )
            t = t.offsetParent;
          return t || G;
        });
      },
    }),
    he.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (t, i) {
        var n = /Y/.test(i);
        he.fn[t] = function (s) {
          return he.access(
            this,
            function (t, s, o) {
              var r = Q(t);
              return o === e
                ? r
                  ? i in r
                    ? r[i]
                    : r.document.documentElement[s]
                  : t[s]
                : (r
                    ? r.scrollTo(
                        n ? he(r).scrollLeft() : o,
                        n ? o : he(r).scrollTop()
                      )
                    : (t[s] = o),
                  e);
            },
            t,
            s,
            arguments.length,
            null
          );
        };
      }
    ),
    he.each({ Height: "height", Width: "width" }, function (t, i) {
      he.each(
        { padding: "inner" + t, content: i, "": "outer" + t },
        function (n, s) {
          he.fn[s] = function (s, o) {
            var r = arguments.length && (n || "boolean" != typeof s),
              a = n || (s === !0 || o === !0 ? "margin" : "border");
            return he.access(
              this,
              function (i, n, s) {
                var o;
                return he.isWindow(i)
                  ? i.document.documentElement["client" + t]
                  : 9 === i.nodeType
                  ? ((o = i.documentElement),
                    Math.max(
                      i.body["scroll" + t],
                      o["scroll" + t],
                      i.body["offset" + t],
                      o["offset" + t],
                      o["client" + t]
                    ))
                  : s === e
                  ? he.css(i, n, a)
                  : he.style(i, n, s, a);
              },
              i,
              r ? s : e,
              r,
              null
            );
          };
        }
      );
    }),
    (he.fn.size = function () {
      return this.length;
    }),
    (he.fn.andSelf = he.fn.addBack),
    "object" == typeof module && module && "object" == typeof module.exports
      ? (module.exports = he)
      : ((t.jQuery = t.$ = he),
        "function" == typeof define &&
          define.amd &&
          define("jquery", [], function () {
            return he;
          }));
})(window),
  (window.Modernizr = (function (t, e, i) {
    function n(t) {
      f.cssText = t;
    }
    function s(t, e) {
      return typeof t === e;
    }
    var o,
      r,
      a,
      l = "2.6.2",
      u = {},
      h = !0,
      c = e.documentElement,
      d = "modernizr",
      p = e.createElement(d),
      f = p.style,
      m = ({}.toString, " -webkit- -moz- -o- -ms- ".split(" ")),
      g = {},
      v = [],
      y = v.slice,
      b = function (t, i, n, s) {
        var o,
          r,
          a,
          l,
          u = e.createElement("div"),
          h = e.body,
          p = h || e.createElement("body");
        if (parseInt(n, 10))
          for (; n--; )
            (a = e.createElement("div")),
              (a.id = s ? s[n] : d + (n + 1)),
              u.appendChild(a);
        return (
          (o = ["&#173;", '<style id="s', d, '">', t, "</style>"].join("")),
          (u.id = d),
          ((h ? u : p).innerHTML += o),
          p.appendChild(u),
          h ||
            ((p.style.background = ""),
            (p.style.overflow = "hidden"),
            (l = c.style.overflow),
            (c.style.overflow = "hidden"),
            c.appendChild(p)),
          (r = i(u, t)),
          h
            ? u.parentNode.removeChild(u)
            : (p.parentNode.removeChild(p), (c.style.overflow = l)),
          !!r
        );
      },
      _ = function (e) {
        var i = t.matchMedia || t.msMatchMedia;
        if (i) return i(e).matches;
        var n;
        return (
          b(
            "@media " + e + " { #" + d + " { position: absolute; } }",
            function (e) {
              n =
                "absolute" ==
                (t.getComputedStyle
                  ? getComputedStyle(e, null)
                  : e.currentStyle
                ).position;
            }
          ),
          n
        );
      },
      w = {}.hasOwnProperty;
    (a =
      s(w, "undefined") || s(w.call, "undefined")
        ? function (t, e) {
            return e in t && s(t.constructor.prototype[e], "undefined");
          }
        : function (t, e) {
            return w.call(t, e);
          }),
      Function.prototype.bind ||
        (Function.prototype.bind = function (t) {
          var e = this;
          if ("function" != typeof e) throw new TypeError();
          var i = y.call(arguments, 1),
            n = function () {
              if (this instanceof n) {
                var s = function () {};
                s.prototype = e.prototype;
                var o = new s(),
                  r = e.apply(o, i.concat(y.call(arguments)));
                return Object(r) === r ? r : o;
              }
              return e.apply(t, i.concat(y.call(arguments)));
            };
          return n;
        }),
      (g.touch = function () {
        var i;
        return (
          "ontouchstart" in t || (t.DocumentTouch && e instanceof DocumentTouch)
            ? (i = !0)
            : b(
                [
                  "@media (",
                  m.join("touch-enabled),("),
                  d,
                  ")",
                  "{#modernizr{top:9px;position:absolute}}",
                ].join(""),
                function (t) {
                  i = 9 === t.offsetTop;
                }
              ),
          i
        );
      }),
      (g.localstorage = function () {
        try {
          return localStorage.setItem(d, d), localStorage.removeItem(d), !0;
        } catch (t) {
          return !1;
        }
      });
    for (var x in g)
      a(g, x) &&
        ((r = x.toLowerCase()),
        (u[r] = g[x]()),
        v.push((u[r] ? "" : "no-") + r));
    return (
      (u.addTest = function (t, e) {
        if ("object" == typeof t)
          for (var n in t) a(t, n) && u.addTest(n, t[n]);
        else {
          if (((t = t.toLowerCase()), u[t] !== i)) return u;
          (e = "function" == typeof e ? e() : e),
            "undefined" != typeof h &&
              h &&
              (c.className += " " + (e ? "" : "no-") + t),
            (u[t] = e);
        }
        return u;
      }),
      n(""),
      (p = o = null),
      (function (t, e) {
        function i(t, e) {
          var i = t.createElement("p"),
            n = t.getElementsByTagName("head")[0] || t.documentElement;
          return (
            (i.innerHTML = "x<style>" + e + "</style>"),
            n.insertBefore(i.lastChild, n.firstChild)
          );
        }
        function n() {
          var t = v.elements;
          return "string" == typeof t ? t.split(" ") : t;
        }
        function s(t) {
          var e = g[t[f]];
          return e || ((e = {}), m++, (t[f] = m), (g[m] = e)), e;
        }
        function o(t, i, n) {
          if ((i || (i = e), h)) return i.createElement(t);
          n || (n = s(i));
          var o;
          return (
            (o = n.cache[t]
              ? n.cache[t].cloneNode()
              : p.test(t)
              ? (n.cache[t] = n.createElem(t)).cloneNode()
              : n.createElem(t)),
            o.canHaveChildren && !d.test(t) ? n.frag.appendChild(o) : o
          );
        }
        function r(t, i) {
          if ((t || (t = e), h)) return t.createDocumentFragment();
          i = i || s(t);
          for (
            var o = i.frag.cloneNode(), r = 0, a = n(), l = a.length;
            l > r;
            r++
          )
            o.createElement(a[r]);
          return o;
        }
        function a(t, e) {
          e.cache ||
            ((e.cache = {}),
            (e.createElem = t.createElement),
            (e.createFrag = t.createDocumentFragment),
            (e.frag = e.createFrag())),
            (t.createElement = function (i) {
              return v.shivMethods ? o(i, t, e) : e.createElem(i);
            }),
            (t.createDocumentFragment = Function(
              "h,f",
              "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" +
                n()
                  .join()
                  .replace(/\w+/g, function (t) {
                    return (
                      e.createElem(t), e.frag.createElement(t), 'c("' + t + '")'
                    );
                  }) +
                ");return n}"
            )(v, e.frag));
        }
        function l(t) {
          t || (t = e);
          var n = s(t);
          return (
            v.shivCSS &&
              !u &&
              !n.hasCSS &&
              (n.hasCSS = !!i(
                t,
                "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}"
              )),
            h || a(t, n),
            t
          );
        }
        var u,
          h,
          c = t.html5 || {},
          d =
            /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
          p =
            /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
          f = "_html5shiv",
          m = 0,
          g = {};
        !(function () {
          try {
            var t = e.createElement("a");
            (t.innerHTML = "<xyz></xyz>"),
              (u = "hidden" in t),
              (h =
                1 == t.childNodes.length ||
                (function () {
                  e.createElement("a");
                  var t = e.createDocumentFragment();
                  return (
                    "undefined" == typeof t.cloneNode ||
                    "undefined" == typeof t.createDocumentFragment ||
                    "undefined" == typeof t.createElement
                  );
                })());
          } catch (i) {
            (u = !0), (h = !0);
          }
        })();
        var v = {
          elements:
            c.elements ||
            "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
          shivCSS: c.shivCSS !== !1,
          supportsUnknownElements: h,
          shivMethods: c.shivMethods !== !1,
          type: "default",
          shivDocument: l,
          createElement: o,
          createDocumentFragment: r,
        };
        (t.html5 = v), l(e);
      })(this, e),
      (u._version = l),
      (u._prefixes = m),
      (u.mq = _),
      (u.testStyles = b),
      (c.className =
        c.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") +
        (h ? " js " + v.join(" ") : "")),
      u
    );
  })(this, this.document)),
  (function (t, e, i) {
    function n(t) {
      return "[object Function]" == g.call(t);
    }
    function s(t) {
      return "string" == typeof t;
    }
    function o() {}
    function r(t) {
      return !t || "loaded" == t || "complete" == t || "uninitialized" == t;
    }
    function a() {
      var t = v.shift();
      (y = 1),
        t
          ? t.t
            ? f(function () {
                ("c" == t.t
                  ? d.injectCss
                  : d.injectJs)(t.s, 0, t.a, t.x, t.e, 1);
              }, 0)
            : (t(), a())
          : (y = 0);
    }
    function l(t, i, n, s, o, l, u) {
      function h(e) {
        if (
          !p &&
          r(c.readyState) &&
          ((b.r = p = 1),
          !y && a(),
          (c.onload = c.onreadystatechange = null),
          e)
        ) {
          "img" != t &&
            f(function () {
              w.removeChild(c);
            }, 50);
          for (var n in D[i]) D[i].hasOwnProperty(n) && D[i][n].onload();
        }
      }
      var u = u || d.errorTimeout,
        c = e.createElement(t),
        p = 0,
        g = 0,
        b = { t: n, s: i, e: o, a: l, x: u };
      1 === D[i] && ((g = 1), (D[i] = [])),
        "object" == t ? (c.data = i) : ((c.src = i), (c.type = t)),
        (c.width = c.height = "0"),
        (c.onerror =
          c.onload =
          c.onreadystatechange =
            function () {
              h.call(this, g);
            }),
        v.splice(s, 0, b),
        "img" != t &&
          (g || 2 === D[i]
            ? (w.insertBefore(c, _ ? null : m), f(h, u))
            : D[i].push(c));
    }
    function u(t, e, i, n, o) {
      return (
        (y = 0),
        (e = e || "j"),
        s(t)
          ? l("c" == e ? k : x, t, e, this.i++, i, n, o)
          : (v.splice(this.i++, 0, t), 1 == v.length && a()),
        this
      );
    }
    function h() {
      var t = d;
      return (t.loader = { load: u, i: 0 }), t;
    }
    var c,
      d,
      p = e.documentElement,
      f = t.setTimeout,
      m = e.getElementsByTagName("script")[0],
      g = {}.toString,
      v = [],
      y = 0,
      b = "MozAppearance" in p.style,
      _ = b && !!e.createRange().compareNode,
      w = _ ? p : m.parentNode,
      p = t.opera && "[object Opera]" == g.call(t.opera),
      p = !!e.attachEvent && !p,
      x = b ? "object" : p ? "script" : "img",
      k = p ? "script" : x,
      C =
        Array.isArray ||
        function (t) {
          return "[object Array]" == g.call(t);
        },
      S = [],
      D = {},
      T = {
        timeout: function (t, e) {
          return e.length && (t.timeout = e[0]), t;
        },
      };
    (d = function (t) {
      function e(t) {
        var e,
          i,
          n,
          t = t.split("!"),
          s = S.length,
          o = t.pop(),
          r = t.length,
          o = { url: o, origUrl: o, prefixes: t };
        for (i = 0; r > i; i++)
          (n = t[i].split("=")), (e = T[n.shift()]) && (o = e(o, n));
        for (i = 0; s > i; i++) o = S[i](o);
        return o;
      }
      function r(t, s, o, r, a) {
        var l = e(t),
          u = l.autoCallback;
        l.url.split(".").pop().split("?").shift(),
          l.bypass ||
            (s &&
              (s = n(s)
                ? s
                : s[t] || s[r] || s[t.split("/").pop().split("?")[0]]),
            l.instead
              ? l.instead(t, s, o, r, a)
              : (D[l.url] ? (l.noexec = !0) : (D[l.url] = 1),
                o.load(
                  l.url,
                  l.forceCSS ||
                    (!l.forceJS &&
                      "css" == l.url.split(".").pop().split("?").shift())
                    ? "c"
                    : i,
                  l.noexec,
                  l.attrs,
                  l.timeout
                ),
                (n(s) || n(u)) &&
                  o.load(function () {
                    h(),
                      s && s(l.origUrl, a, r),
                      u && u(l.origUrl, a, r),
                      (D[l.url] = 2);
                  })));
      }
      function a(t, e) {
        function i(t, i) {
          if (t) {
            if (s(t))
              i ||
                (c = function () {
                  var t = [].slice.call(arguments);
                  d.apply(this, t), p();
                }),
                r(t, c, e, 0, u);
            else if (Object(t) === t)
              for (l in ((a = (function () {
                var e,
                  i = 0;
                for (e in t) t.hasOwnProperty(e) && i++;
                return i;
              })()),
              t))
                t.hasOwnProperty(l) &&
                  (!i &&
                    !--a &&
                    (n(c)
                      ? (c = function () {
                          var t = [].slice.call(arguments);
                          d.apply(this, t), p();
                        })
                      : (c[l] = (function (t) {
                          return function () {
                            var e = [].slice.call(arguments);
                            t && t.apply(this, e), p();
                          };
                        })(d[l]))),
                  r(t[l], c, e, l, u));
          } else !i && p();
        }
        var a,
          l,
          u = !!t.test,
          h = t.load || t.both,
          c = t.callback || o,
          d = c,
          p = t.complete || o;
        i(u ? t.yep : t.nope, !!h), h && i(h);
      }
      var l,
        u,
        c = this.yepnope.loader;
      if (s(t)) r(t, 0, c, 0);
      else if (C(t))
        for (l = 0; l < t.length; l++)
          (u = t[l]),
            s(u) ? r(u, 0, c, 0) : C(u) ? d(u) : Object(u) === u && a(u, c);
      else Object(t) === t && a(t, c);
    }),
      (d.addPrefix = function (t, e) {
        T[t] = e;
      }),
      (d.addFilter = function (t) {
        S.push(t);
      }),
      (d.errorTimeout = 1e4),
      null == e.readyState &&
        e.addEventListener &&
        ((e.readyState = "loading"),
        e.addEventListener(
          "DOMContentLoaded",
          (c = function () {
            e.removeEventListener("DOMContentLoaded", c, 0),
              (e.readyState = "complete");
          }),
          0
        )),
      (t.yepnope = h()),
      (t.yepnope.executeStack = a),
      (t.yepnope.injectJs = function (t, i, n, s, l, u) {
        var h,
          c,
          p = e.createElement("script"),
          s = s || d.errorTimeout;
        p.src = t;
        for (c in n) p.setAttribute(c, n[c]);
        (i = u ? a : i || o),
          (p.onreadystatechange = p.onload =
            function () {
              !h &&
                r(p.readyState) &&
                ((h = 1), i(), (p.onload = p.onreadystatechange = null));
            }),
          f(function () {
            h || ((h = 1), i(1));
          }, s),
          l ? p.onload() : m.parentNode.insertBefore(p, m);
      }),
      (t.yepnope.injectCss = function (t, i, n, s, r, l) {
        var u,
          s = e.createElement("link"),
          i = l ? a : i || o;
        (s.href = t), (s.rel = "stylesheet"), (s.type = "text/css");
        for (u in n) s.setAttribute(u, n[u]);
        r || (m.parentNode.insertBefore(s, m), f(i, 0));
      });
  })(this, document),
  (Modernizr.load = function () {
    yepnope.apply(window, [].slice.call(arguments, 0));
  }),
  (function (t) {
    return;
  })(this),
  window.matchMedia ||
    (window.matchMedia = (function () {
      "use strict";
      var t = window.styleMedia || window.media;
      if (!t) {
        var e = document.createElement("style"),
          i = document.getElementsByTagName("script")[0],
          n = null;
        (e.type = "text/css"),
          (e.id = "matchmediajs-test"),
          i.parentNode.insertBefore(e, i),
          (n =
            ("getComputedStyle" in window &&
              window.getComputedStyle(e, null)) ||
            e.currentStyle),
          (t = {
            matchMedium: function (t) {
              var i = "@media " + t + "{ #matchmediajs-test { width: 1px; } }";
              return (
                e.styleSheet ? (e.styleSheet.cssText = i) : (e.textContent = i),
                "1px" === n.width
              );
            },
          });
      }
      return function (e) {
        return { matches: t.matchMedium(e || "all"), media: e || "all" };
      };
    })()),
  (function () {
    if (window.matchMedia && window.matchMedia("all").addListener) return !1;
    var t = window.matchMedia,
      e = t("only all").matches,
      i = !1,
      n = 0,
      s = [],
      o = function () {
        clearTimeout(n),
          (n = setTimeout(function () {
            for (var e = 0, i = s.length; i > e; e++) {
              var n = s[e].mql,
                o = s[e].listeners || [],
                r = t(n.media).matches;
              if (r !== n.matches) {
                n.matches = r;
                for (var a = 0, l = o.length; l > a; a++) o[a].call(window, n);
              }
            }
          }, 30));
      };
    window.matchMedia = function (n) {
      var r = t(n),
        a = [],
        l = 0;
      return (
        (r.addListener = function (t) {
          e &&
            (i || ((i = !0), window.addEventListener("resize", o, !0)),
            0 === l && (l = s.push({ mql: r, listeners: a })),
            a.push(t));
        }),
        (r.removeListener = function (t) {
          for (var e = 0, i = a.length; i > e; e++)
            a[e] === t && a.splice(e, 1);
        }),
        r
      );
    };
  })(),
  (function (t, e, i) {
    var n = e.matchMedia;
    "undefined" != typeof module && module.exports
      ? (module.exports = i(n))
      : "function" == typeof define && define.amd
      ? define(function () {
          return (e[t] = i(n));
        })
      : (e[t] = i(n));
  })("enquire", this, function (t) {
    "use strict";
    function e(t, e) {
      var i,
        n = 0,
        s = t.length;
      for (n; s > n && ((i = e(t[n], n)), i !== !1); n++);
    }
    function i(t) {
      return "[object Array]" === Object.prototype.toString.apply(t);
    }
    function n(t) {
      return "function" == typeof t;
    }
    function s(t) {
      (this.options = t), !t.deferSetup && this.setup();
    }
    function o(e, i) {
      (this.query = e),
        (this.isUnconditional = i),
        (this.handlers = []),
        (this.mql = t(e));
      var n = this;
      (this.listener = function (t) {
        (n.mql = t), n.assess();
      }),
        this.mql.addListener(this.listener);
    }
    function r() {
      if (!t)
        throw new Error(
          "matchMedia not present, legacy browsers require a polyfill"
        );
      (this.queries = {}), (this.browserIsIncapable = !t("only all").matches);
    }
    return (
      (s.prototype = {
        setup: function () {
          this.options.setup && this.options.setup(), (this.initialised = !0);
        },
        on: function () {
          !this.initialised && this.setup(),
            this.options.match && this.options.match();
        },
        off: function () {
          this.options.unmatch && this.options.unmatch();
        },
        destroy: function () {
          this.options.destroy ? this.options.destroy() : this.off();
        },
        equals: function (t) {
          return this.options === t || this.options.match === t;
        },
      }),
      (o.prototype = {
        addHandler: function (t) {
          var e = new s(t);
          this.handlers.push(e), this.matches() && e.on();
        },
        removeHandler: function (t) {
          var i = this.handlers;
          e(i, function (e, n) {
            return e.equals(t) ? (e.destroy(), !i.splice(n, 1)) : void 0;
          });
        },
        matches: function () {
          return this.mql.matches || this.isUnconditional;
        },
        clear: function () {
          e(this.handlers, function (t) {
            t.destroy();
          }),
            this.mql.removeListener(this.listener),
            (this.handlers.length = 0);
        },
        assess: function () {
          var t = this.matches() ? "on" : "off";
          e(this.handlers, function (e) {
            e[t]();
          });
        },
      }),
      (r.prototype = {
        register: function (t, s, r) {
          var a = this.queries,
            l = r && this.browserIsIncapable;
          return (
            a[t] || (a[t] = new o(t, l)),
            n(s) && (s = { match: s }),
            i(s) || (s = [s]),
            e(s, function (e) {
              a[t].addHandler(e);
            }),
            this
          );
        },
        unregister: function (t, e) {
          var i = this.queries[t];
          return (
            i && (e ? i.removeHandler(e) : (i.clear(), delete this.queries[t])),
            this
          );
        },
      }),
      new r()
    );
  }),
  function () {
    function t() {}
    function e(t, e) {
      for (var i = t.length; i--; ) if (t[i].listener === e) return i;
      return -1;
    }
    function i(t) {
      return function () {
        return this[t].apply(this, arguments);
      };
    }
    var n = t.prototype,
      s = this,
      o = s.EventEmitter;
    (n.getListeners = function (t) {
      var e,
        i,
        n = this._getEvents();
      if ("object" == typeof t) {
        e = {};
        for (i in n) n.hasOwnProperty(i) && t.test(i) && (e[i] = n[i]);
      } else e = n[t] || (n[t] = []);
      return e;
    }),
      (n.flattenListeners = function (t) {
        var e,
          i = [];
        for (e = 0; t.length > e; e += 1) i.push(t[e].listener);
        return i;
      }),
      (n.getListenersAsObject = function (t) {
        var e,
          i = this.getListeners(t);
        return i instanceof Array && ((e = {}), (e[t] = i)), e || i;
      }),
      (n.addListener = function (t, i) {
        var n,
          s = this.getListenersAsObject(t),
          o = "object" == typeof i;
        for (n in s)
          s.hasOwnProperty(n) &&
            -1 === e(s[n], i) &&
            s[n].push(o ? i : { listener: i, once: !1 });
        return this;
      }),
      (n.on = i("addListener")),
      (n.addOnceListener = function (t, e) {
        return this.addListener(t, { listener: e, once: !0 });
      }),
      (n.once = i("addOnceListener")),
      (n.defineEvent = function (t) {
        return this.getListeners(t), this;
      }),
      (n.defineEvents = function (t) {
        for (var e = 0; t.length > e; e += 1) this.defineEvent(t[e]);
        return this;
      }),
      (n.removeListener = function (t, i) {
        var n,
          s,
          o = this.getListenersAsObject(t);
        for (s in o)
          o.hasOwnProperty(s) &&
            ((n = e(o[s], i)), -1 !== n && o[s].splice(n, 1));
        return this;
      }),
      (n.off = i("removeListener")),
      (n.addListeners = function (t, e) {
        return this.manipulateListeners(!1, t, e);
      }),
      (n.removeListeners = function (t, e) {
        return this.manipulateListeners(!0, t, e);
      }),
      (n.manipulateListeners = function (t, e, i) {
        var n,
          s,
          o = t ? this.removeListener : this.addListener,
          r = t ? this.removeListeners : this.addListeners;
        if ("object" != typeof e || e instanceof RegExp)
          for (n = i.length; n--; ) o.call(this, e, i[n]);
        else
          for (n in e)
            e.hasOwnProperty(n) &&
              (s = e[n]) &&
              ("function" == typeof s
                ? o.call(this, n, s)
                : r.call(this, n, s));
        return this;
      }),
      (n.removeEvent = function (t) {
        var e,
          i = typeof t,
          n = this._getEvents();
        if ("string" === i) delete n[t];
        else if ("object" === i)
          for (e in n) n.hasOwnProperty(e) && t.test(e) && delete n[e];
        else delete this._events;
        return this;
      }),
      (n.removeAllListeners = i("removeEvent")),
      (n.emitEvent = function (t, e) {
        var i,
          n,
          s,
          o,
          r = this.getListenersAsObject(t);
        for (s in r)
          if (r.hasOwnProperty(s))
            for (n = r[s].length; n--; )
              (i = r[s][n]),
                i.once === !0 && this.removeListener(t, i.listener),
                (o = i.listener.apply(this, e || [])),
                o === this._getOnceReturnValue() &&
                  this.removeListener(t, i.listener);
        return this;
      }),
      (n.trigger = i("emitEvent")),
      (n.emit = function (t) {
        var e = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(t, e);
      }),
      (n.setOnceReturnValue = function (t) {
        return (this._onceReturnValue = t), this;
      }),
      (n._getOnceReturnValue = function () {
        return this.hasOwnProperty("_onceReturnValue")
          ? this._onceReturnValue
          : !0;
      }),
      (n._getEvents = function () {
        return this._events || (this._events = {});
      }),
      (t.noConflict = function () {
        return (s.EventEmitter = o), t;
      }),
      "function" == typeof define && define.amd
        ? define("eventEmitter/EventEmitter", [], function () {
            return t;
          })
        : "object" == typeof module && module.exports
        ? (module.exports = t)
        : (this.EventEmitter = t);
  }.call(this),
  (function (t) {
    function e(e) {
      var i = t.event;
      return (i.target = i.target || i.srcElement || e), i;
    }
    var i = document.documentElement,
      n = function () {};
    i.addEventListener
      ? (n = function (t, e, i) {
          t.addEventListener(e, i, !1);
        })
      : i.attachEvent &&
        (n = function (t, i, n) {
          (t[i + n] = n.handleEvent
            ? function () {
                var i = e(t);
                n.handleEvent.call(n, i);
              }
            : function () {
                var i = e(t);
                n.call(t, i);
              }),
            t.attachEvent("on" + i, t[i + n]);
        });
    var s = function () {};
    i.removeEventListener
      ? (s = function (t, e, i) {
          t.removeEventListener(e, i, !1);
        })
      : i.detachEvent &&
        (s = function (t, e, i) {
          t.detachEvent("on" + e, t[e + i]);
          try {
            delete t[e + i];
          } catch (n) {
            t[e + i] = void 0;
          }
        });
    var o = { bind: n, unbind: s };
    "function" == typeof define && define.amd
      ? define("eventie/eventie", o)
      : (t.eventie = o);
  })(this),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          ["eventEmitter/EventEmitter", "eventie/eventie"],
          function (i, n) {
            return e(t, i, n);
          }
        )
      : "object" == typeof exports
      ? (module.exports = e(t, require("eventEmitter"), require("eventie")))
      : (t.imagesLoaded = e(t, t.EventEmitter, t.eventie));
  })(this, function (t, e, i) {
    function n(t, e) {
      for (var i in e) t[i] = e[i];
      return t;
    }
    function s(t) {
      return "[object Array]" === d.call(t);
    }
    function o(t) {
      var e = [];
      if (s(t)) e = t;
      else if ("number" == typeof t.length)
        for (var i = 0, n = t.length; n > i; i++) e.push(t[i]);
      else e.push(t);
      return e;
    }
    function r(t, e, i) {
      if (!(this instanceof r)) return new r(t, e);
      "string" == typeof t && (t = document.querySelectorAll(t)),
        (this.elements = o(t)),
        (this.options = n({}, this.options)),
        "function" == typeof e ? (i = e) : n(this.options, e),
        i && this.on("always", i),
        this.getImages(),
        u && (this.jqDeferred = new u.Deferred());
      var s = this;
      setTimeout(function () {
        s.check();
      });
    }
    function a(t) {
      this.img = t;
    }
    function l(t) {
      (this.src = t), (p[t] = this);
    }
    var u = t.jQuery,
      h = t.console,
      c = void 0 !== h,
      d = Object.prototype.toString;
    (r.prototype = new e()),
      (r.prototype.options = {}),
      (r.prototype.getImages = function () {
        this.images = [];
        for (var t = 0, e = this.elements.length; e > t; t++) {
          var i = this.elements[t];
          "IMG" === i.nodeName && this.addImage(i);
          for (
            var n = i.querySelectorAll("img"), s = 0, o = n.length;
            o > s;
            s++
          ) {
            var r = n[s];
            this.addImage(r);
          }
        }
      }),
      (r.prototype.addImage = function (t) {
        var e = new a(t);
        this.images.push(e);
      }),
      (r.prototype.check = function () {
        function t(t, s) {
          return (
            e.options.debug && c && h.log("confirm", t, s),
            e.progress(t),
            i++,
            i === n && e.complete(),
            !0
          );
        }
        var e = this,
          i = 0,
          n = this.images.length;
        if (((this.hasAnyBroken = !1), !n)) return void this.complete();
        for (var s = 0; n > s; s++) {
          var o = this.images[s];
          o.on("confirm", t), o.check();
        }
      }),
      (r.prototype.progress = function (t) {
        this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded;
        var e = this;
        setTimeout(function () {
          e.emit("progress", e, t),
            e.jqDeferred && e.jqDeferred.notify && e.jqDeferred.notify(e, t);
        });
      }),
      (r.prototype.complete = function () {
        var t = this.hasAnyBroken ? "fail" : "done";
        this.isComplete = !0;
        var e = this;
        setTimeout(function () {
          if ((e.emit(t, e), e.emit("always", e), e.jqDeferred)) {
            var i = e.hasAnyBroken ? "reject" : "resolve";
            e.jqDeferred[i](e);
          }
        });
      }),
      u &&
        (u.fn.imagesLoaded = function (t, e) {
          var i = new r(this, t, e);
          return i.jqDeferred.promise(u(this));
        }),
      (a.prototype = new e()),
      (a.prototype.check = function () {
        var t = p[this.img.src] || new l(this.img.src);
        if (t.isConfirmed)
          return void this.confirm(t.isLoaded, "cached was confirmed");
        if (this.img.complete && void 0 !== this.img.naturalWidth)
          return void this.confirm(0 !== this.img.naturalWidth, "naturalWidth");
        var e = this;
        t.on("confirm", function (t, i) {
          return e.confirm(t.isLoaded, i), !0;
        }),
          t.check();
      }),
      (a.prototype.confirm = function (t, e) {
        (this.isLoaded = t), this.emit("confirm", this, e);
      });
    var p = {};
    return (
      (l.prototype = new e()),
      (l.prototype.check = function () {
        if (!this.isChecked) {
          var t = new Image();
          i.bind(t, "load", this),
            i.bind(t, "error", this),
            (t.src = this.src),
            (this.isChecked = !0);
        }
      }),
      (l.prototype.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (l.prototype.onload = function (t) {
        this.confirm(!0, "onload"), this.unbindProxyEvents(t);
      }),
      (l.prototype.onerror = function (t) {
        this.confirm(!1, "onerror"), this.unbindProxyEvents(t);
      }),
      (l.prototype.confirm = function (t, e) {
        (this.isConfirmed = !0),
          (this.isLoaded = t),
          this.emit("confirm", this, e);
      }),
      (l.prototype.unbindProxyEvents = function (t) {
        i.unbind(t.target, "load", this), i.unbind(t.target, "error", this);
      }),
      r
    );
  }),
  (function (t) {
    "function" == typeof define && define.amd
      ? define(["jquery"], t)
      : t(jQuery);
  })(function (t) {
    function e(e, n) {
      var s,
        o,
        r,
        a = e.nodeName.toLowerCase();
      return "area" === a
        ? ((s = e.parentNode),
          (o = s.name),
          e.href && o && "map" === s.nodeName.toLowerCase()
            ? ((r = t("img[usemap='#" + o + "']")[0]), !!r && i(r))
            : !1)
        : (/input|select|textarea|button|object/.test(a)
            ? !e.disabled
            : "a" === a
            ? e.href || n
            : n) && i(e);
    }
    function i(e) {
      return (
        t.expr.filters.visible(e) &&
        !t(e)
          .parents()
          .addBack()
          .filter(function () {
            return "hidden" === t.css(this, "visibility");
          }).length
      );
    }
    function n(t) {
      for (var e, i; t.length && t[0] !== document; ) {
        if (
          ((e = t.css("position")),
          ("absolute" === e || "relative" === e || "fixed" === e) &&
            ((i = parseInt(t.css("zIndex"), 10)), !isNaN(i) && 0 !== i))
        )
          return i;
        t = t.parent();
      }
      return 0;
    }
    function s() {
      (this._curInst = null),
        (this._keyEvent = !1),
        (this._disabledInputs = []),
        (this._datepickerShowing = !1),
        (this._inDialog = !1),
        (this._mainDivId = "ui-datepicker-div"),
        (this._inlineClass = "ui-datepicker-inline"),
        (this._appendClass = "ui-datepicker-append"),
        (this._triggerClass = "ui-datepicker-trigger"),
        (this._dialogClass = "ui-datepicker-dialog"),
        (this._disableClass = "ui-datepicker-disabled"),
        (this._unselectableClass = "ui-datepicker-unselectable"),
        (this._currentClass = "ui-datepicker-current-day"),
        (this._dayOverClass = "ui-datepicker-days-cell-over"),
        (this.regional = []),
        (this.regional[""] = {
          closeText: "Done",
          prevText: "Prev",
          nextText: "Next",
          currentText: "Today",
          monthNames: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
          monthNamesShort: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          dayNames: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
          weekHeader: "Wk",
          dateFormat: "mm/dd/yy",
          firstDay: 0,
          isRTL: !1,
          showMonthAfterYear: !1,
          yearSuffix: "",
        }),
        (this._defaults = {
          showOn: "focus",
          showAnim: "fadeIn",
          showOptions: {},
          defaultDate: null,
          appendText: "",
          buttonText: "...",
          buttonImage: "",
          buttonImageOnly: !1,
          hideIfNoPrevNext: !1,
          navigationAsDateFormat: !1,
          gotoCurrent: !1,
          changeMonth: !1,
          changeYear: !1,
          yearRange: "c-10:c+10",
          showOtherMonths: !1,
          selectOtherMonths: !1,
          showWeek: !1,
          calculateWeek: this.iso8601Week,
          shortYearCutoff: "+10",
          minDate: null,
          maxDate: null,
          duration: "fast",
          beforeShowDay: null,
          beforeShow: null,
          onSelect: null,
          onChangeMonthYear: null,
          onClose: null,
          numberOfMonths: 1,
          showCurrentAtPos: 0,
          stepMonths: 1,
          stepBigMonths: 12,
          altField: "",
          altFormat: "",
          constrainInput: !0,
          showButtonPanel: !1,
          autoSize: !1,
          disabled: !1,
        }),
        t.extend(this._defaults, this.regional[""]),
        (this.regional.en = t.extend(!0, {}, this.regional[""])),
        (this.regional["en-US"] = t.extend(!0, {}, this.regional.en)),
        (this.dpDiv = o(
          t(
            "<div id='" +
              this._mainDivId +
              "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"
          )
        ));
    }
    function o(e) {
      var i =
        "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
      return e
        .delegate(i, "mouseout", function () {
          t(this).removeClass("ui-state-hover"),
            -1 !== this.className.indexOf("ui-datepicker-prev") &&
              t(this).removeClass("ui-datepicker-prev-hover"),
            -1 !== this.className.indexOf("ui-datepicker-next") &&
              t(this).removeClass("ui-datepicker-next-hover");
        })
        .delegate(i, "mouseover", r);
    }
    function r() {
      t.datepicker._isDisabledDatepicker(
        v.inline ? v.dpDiv.parent()[0] : v.input[0]
      ) ||
        (t(this)
          .parents(".ui-datepicker-calendar")
          .find("a")
          .removeClass("ui-state-hover"),
        t(this).addClass("ui-state-hover"),
        -1 !== this.className.indexOf("ui-datepicker-prev") &&
          t(this).addClass("ui-datepicker-prev-hover"),
        -1 !== this.className.indexOf("ui-datepicker-next") &&
          t(this).addClass("ui-datepicker-next-hover"));
    }
    function a(e, i) {
      t.extend(e, i);
      for (var n in i) null == i[n] && (e[n] = i[n]);
      return e;
    }
    function l(t) {
      return function () {
        var e = this.element.val();
        t.apply(this, arguments),
          this._refresh(),
          e !== this.element.val() && this._trigger("change");
      };
    }
    (t.ui = t.ui || {}),
      t.extend(t.ui, {
        version: "1.11.2",
        keyCode: {
          BACKSPACE: 8,
          COMMA: 188,
          DELETE: 46,
          DOWN: 40,
          END: 35,
          ENTER: 13,
          ESCAPE: 27,
          HOME: 36,
          LEFT: 37,
          PAGE_DOWN: 34,
          PAGE_UP: 33,
          PERIOD: 190,
          RIGHT: 39,
          SPACE: 32,
          TAB: 9,
          UP: 38,
        },
      }),
      t.fn.extend({
        scrollParent: function (e) {
          var i = this.css("position"),
            n = "absolute" === i,
            s = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
            o = this.parents()
              .filter(function () {
                var e = t(this);
                return n && "static" === e.css("position")
                  ? !1
                  : s.test(
                      e.css("overflow") +
                        e.css("overflow-y") +
                        e.css("overflow-x")
                    );
              })
              .eq(0);
          return "fixed" !== i && o.length
            ? o
            : t(this[0].ownerDocument || document);
        },
        uniqueId: (function () {
          var t = 0;
          return function () {
            return this.each(function () {
              this.id || (this.id = "ui-id-" + ++t);
            });
          };
        })(),
        removeUniqueId: function () {
          return this.each(function () {
            /^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id");
          });
        },
      }),
      t.extend(t.expr[":"], {
        data: t.expr.createPseudo
          ? t.expr.createPseudo(function (e) {
              return function (i) {
                return !!t.data(i, e);
              };
            })
          : function (e, i, n) {
              return !!t.data(e, n[3]);
            },
        focusable: function (i) {
          return e(i, !isNaN(t.attr(i, "tabindex")));
        },
        tabbable: function (i) {
          var n = t.attr(i, "tabindex"),
            s = isNaN(n);
          return (s || n >= 0) && e(i, !s);
        },
      }),
      t("<a>").outerWidth(1).jquery ||
        t.each(["Width", "Height"], function (e, i) {
          function n(e, i, n, o) {
            return (
              t.each(s, function () {
                (i -= parseFloat(t.css(e, "padding" + this)) || 0),
                  n &&
                    (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0),
                  o && (i -= parseFloat(t.css(e, "margin" + this)) || 0);
              }),
              i
            );
          }
          var s = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
            o = i.toLowerCase(),
            r = {
              innerWidth: t.fn.innerWidth,
              innerHeight: t.fn.innerHeight,
              outerWidth: t.fn.outerWidth,
              outerHeight: t.fn.outerHeight,
            };
          (t.fn["inner" + i] = function (e) {
            return void 0 === e
              ? r["inner" + i].call(this)
              : this.each(function () {
                  t(this).css(o, n(this, e) + "px");
                });
          }),
            (t.fn["outer" + i] = function (e, s) {
              return "number" != typeof e
                ? r["outer" + i].call(this, e)
                : this.each(function () {
                    t(this).css(o, n(this, e, !0, s) + "px");
                  });
            });
        }),
      t.fn.addBack ||
        (t.fn.addBack = function (t) {
          return this.add(
            null == t ? this.prevObject : this.prevObject.filter(t)
          );
        }),
      t("<a>").data("a-b", "a").removeData("a-b").data("a-b") &&
        (t.fn.removeData = (function (e) {
          return function (i) {
            return arguments.length
              ? e.call(this, t.camelCase(i))
              : e.call(this);
          };
        })(t.fn.removeData)),
      (t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase())),
      t.fn.extend({
        focus: (function (e) {
          return function (i, n) {
            return "number" == typeof i
              ? this.each(function () {
                  var e = this;
                  setTimeout(function () {
                    t(e).focus(), n && n.call(e);
                  }, i);
                })
              : e.apply(this, arguments);
          };
        })(t.fn.focus),
        disableSelection: (function () {
          var t =
            "onselectstart" in document.createElement("div")
              ? "selectstart"
              : "mousedown";
          return function () {
            return this.bind(t + ".ui-disableSelection", function (t) {
              t.preventDefault();
            });
          };
        })(),
        enableSelection: function () {
          return this.unbind(".ui-disableSelection");
        },
        zIndex: function (e) {
          if (void 0 !== e) return this.css("zIndex", e);
          if (this.length)
            for (var i, n, s = t(this[0]); s.length && s[0] !== document; ) {
              if (
                ((i = s.css("position")),
                ("absolute" === i || "relative" === i || "fixed" === i) &&
                  ((n = parseInt(s.css("zIndex"), 10)), !isNaN(n) && 0 !== n))
              )
                return n;
              s = s.parent();
            }
          return 0;
        },
      }),
      (t.ui.plugin = {
        add: function (e, i, n) {
          var s,
            o = t.ui[e].prototype;
          for (s in n)
            (o.plugins[s] = o.plugins[s] || []), o.plugins[s].push([i, n[s]]);
        },
        call: function (t, e, i, n) {
          var s,
            o = t.plugins[e];
          if (
            o &&
            (n ||
              (t.element[0].parentNode &&
                11 !== t.element[0].parentNode.nodeType))
          )
            for (s = 0; o.length > s; s++)
              t.options[o[s][0]] && o[s][1].apply(t.element, i);
        },
      });
    var u = 0,
      h = Array.prototype.slice;
    (t.cleanData = (function (e) {
      return function (i) {
        var n, s, o;
        for (o = 0; null != (s = i[o]); o++)
          try {
            (n = t._data(s, "events")),
              n && n.remove && t(s).triggerHandler("remove");
          } catch (r) {}
        e(i);
      };
    })(t.cleanData)),
      (t.widget = function (e, i, n) {
        var s,
          o,
          r,
          a,
          l = {},
          u = e.split(".")[0];
        return (
          (e = e.split(".")[1]),
          (s = u + "-" + e),
          n || ((n = i), (i = t.Widget)),
          (t.expr[":"][s.toLowerCase()] = function (e) {
            return !!t.data(e, s);
          }),
          (t[u] = t[u] || {}),
          (o = t[u][e]),
          (r = t[u][e] =
            function (t, e) {
              return this._createWidget
                ? void (arguments.length && this._createWidget(t, e))
                : new r(t, e);
            }),
          t.extend(r, o, {
            version: n.version,
            _proto: t.extend({}, n),
            _childConstructors: [],
          }),
          (a = new i()),
          (a.options = t.widget.extend({}, a.options)),
          t.each(n, function (e, n) {
            return t.isFunction(n)
              ? void (l[e] = (function () {
                  var t = function () {
                      return i.prototype[e].apply(this, arguments);
                    },
                    s = function (t) {
                      return i.prototype[e].apply(this, t);
                    };
                  return function () {
                    var e,
                      i = this._super,
                      o = this._superApply;
                    return (
                      (this._super = t),
                      (this._superApply = s),
                      (e = n.apply(this, arguments)),
                      (this._super = i),
                      (this._superApply = o),
                      e
                    );
                  };
                })())
              : void (l[e] = n);
          }),
          (r.prototype = t.widget.extend(
            a,
            { widgetEventPrefix: o ? a.widgetEventPrefix || e : e },
            l,
            { constructor: r, namespace: u, widgetName: e, widgetFullName: s }
          )),
          o
            ? (t.each(o._childConstructors, function (e, i) {
                var n = i.prototype;
                t.widget(n.namespace + "." + n.widgetName, r, i._proto);
              }),
              delete o._childConstructors)
            : i._childConstructors.push(r),
          t.widget.bridge(e, r),
          r
        );
      }),
      (t.widget.extend = function (e) {
        for (
          var i, n, s = h.call(arguments, 1), o = 0, r = s.length;
          r > o;
          o++
        )
          for (i in s[o])
            (n = s[o][i]),
              s[o].hasOwnProperty(i) &&
                void 0 !== n &&
                (e[i] = t.isPlainObject(n)
                  ? t.isPlainObject(e[i])
                    ? t.widget.extend({}, e[i], n)
                    : t.widget.extend({}, n)
                  : n);
        return e;
      }),
      (t.widget.bridge = function (e, i) {
        var n = i.prototype.widgetFullName || e;
        t.fn[e] = function (s) {
          var o = "string" == typeof s,
            r = h.call(arguments, 1),
            a = this;
          return (
            (s =
              !o && r.length ? t.widget.extend.apply(null, [s].concat(r)) : s),
            this.each(
              o
                ? function () {
                    var i,
                      o = t.data(this, n);
                    return "instance" === s
                      ? ((a = o), !1)
                      : o
                      ? t.isFunction(o[s]) && "_" !== s.charAt(0)
                        ? ((i = o[s].apply(o, r)),
                          i !== o && void 0 !== i
                            ? ((a = i && i.jquery ? a.pushStack(i.get()) : i),
                              !1)
                            : void 0)
                        : t.error(
                            "no such method '" +
                              s +
                              "' for " +
                              e +
                              " widget instance"
                          )
                      : t.error(
                          "cannot call methods on " +
                            e +
                            " prior to initialization; attempted to call method '" +
                            s +
                            "'"
                        );
                  }
                : function () {
                    var e = t.data(this, n);
                    e
                      ? (e.option(s || {}), e._init && e._init())
                      : t.data(this, n, new i(s, this));
                  }
            ),
            a
          );
        };
      }),
      (t.Widget = function () {}),
      (t.Widget._childConstructors = []),
      (t.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: { disabled: !1, create: null },
        _createWidget: function (e, i) {
          (i = t(i || this.defaultElement || this)[0]),
            (this.element = t(i)),
            (this.uuid = u++),
            (this.eventNamespace = "." + this.widgetName + this.uuid),
            (this.bindings = t()),
            (this.hoverable = t()),
            (this.focusable = t()),
            i !== this &&
              (t.data(i, this.widgetFullName, this),
              this._on(!0, this.element, {
                remove: function (t) {
                  t.target === i && this.destroy();
                },
              }),
              (this.document = t(i.style ? i.ownerDocument : i.document || i)),
              (this.window = t(
                this.document[0].defaultView || this.document[0].parentWindow
              ))),
            (this.options = t.widget.extend(
              {},
              this.options,
              this._getCreateOptions(),
              e
            )),
            this._create(),
            this._trigger("create", null, this._getCreateEventData()),
            this._init();
        },
        _getCreateOptions: t.noop,
        _getCreateEventData: t.noop,
        _create: t.noop,
        _init: t.noop,
        destroy: function () {
          this._destroy(),
            this.element
              .unbind(this.eventNamespace)
              .removeData(this.widgetFullName)
              .removeData(t.camelCase(this.widgetFullName)),
            this.widget()
              .unbind(this.eventNamespace)
              .removeAttr("aria-disabled")
              .removeClass(this.widgetFullName + "-disabled ui-state-disabled"),
            this.bindings.unbind(this.eventNamespace),
            this.hoverable.removeClass("ui-state-hover"),
            this.focusable.removeClass("ui-state-focus");
        },
        _destroy: t.noop,
        widget: function () {
          return this.element;
        },
        option: function (e, i) {
          var n,
            s,
            o,
            r = e;
          if (0 === arguments.length) return t.widget.extend({}, this.options);
          if ("string" == typeof e)
            if (((r = {}), (n = e.split(".")), (e = n.shift()), n.length)) {
              for (
                s = r[e] = t.widget.extend({}, this.options[e]), o = 0;
                n.length - 1 > o;
                o++
              )
                (s[n[o]] = s[n[o]] || {}), (s = s[n[o]]);
              if (((e = n.pop()), 1 === arguments.length))
                return void 0 === s[e] ? null : s[e];
              s[e] = i;
            } else {
              if (1 === arguments.length)
                return void 0 === this.options[e] ? null : this.options[e];
              r[e] = i;
            }
          return this._setOptions(r), this;
        },
        _setOptions: function (t) {
          var e;
          for (e in t) this._setOption(e, t[e]);
          return this;
        },
        _setOption: function (t, e) {
          return (
            (this.options[t] = e),
            "disabled" === t &&
              (this.widget().toggleClass(
                this.widgetFullName + "-disabled",
                !!e
              ),
              e &&
                (this.hoverable.removeClass("ui-state-hover"),
                this.focusable.removeClass("ui-state-focus"))),
            this
          );
        },
        enable: function () {
          return this._setOptions({ disabled: !1 });
        },
        disable: function () {
          return this._setOptions({ disabled: !0 });
        },
        _on: function (e, i, n) {
          var s,
            o = this;
          "boolean" != typeof e && ((n = i), (i = e), (e = !1)),
            n
              ? ((i = s = t(i)), (this.bindings = this.bindings.add(i)))
              : ((n = i), (i = this.element), (s = this.widget())),
            t.each(n, function (n, r) {
              function a() {
                return e ||
                  (o.options.disabled !== !0 &&
                    !t(this).hasClass("ui-state-disabled"))
                  ? ("string" == typeof r ? o[r] : r).apply(o, arguments)
                  : void 0;
              }
              "string" != typeof r &&
                (a.guid = r.guid = r.guid || a.guid || t.guid++);
              var l = n.match(/^([\w:-]*)\s*(.*)$/),
                u = l[1] + o.eventNamespace,
                h = l[2];
              h ? s.delegate(h, u, a) : i.bind(u, a);
            });
        },
        _off: function (e, i) {
          (i =
            (i || "").split(" ").join(this.eventNamespace + " ") +
            this.eventNamespace),
            e.unbind(i).undelegate(i),
            (this.bindings = t(this.bindings.not(e).get())),
            (this.focusable = t(this.focusable.not(e).get())),
            (this.hoverable = t(this.hoverable.not(e).get()));
        },
        _delay: function (t, e) {
          function i() {
            return ("string" == typeof t ? n[t] : t).apply(n, arguments);
          }
          var n = this;
          return setTimeout(i, e || 0);
        },
        _hoverable: function (e) {
          (this.hoverable = this.hoverable.add(e)),
            this._on(e, {
              mouseenter: function (e) {
                t(e.currentTarget).addClass("ui-state-hover");
              },
              mouseleave: function (e) {
                t(e.currentTarget).removeClass("ui-state-hover");
              },
            });
        },
        _focusable: function (e) {
          (this.focusable = this.focusable.add(e)),
            this._on(e, {
              focusin: function (e) {
                t(e.currentTarget).addClass("ui-state-focus");
              },
              focusout: function (e) {
                t(e.currentTarget).removeClass("ui-state-focus");
              },
            });
        },
        _trigger: function (e, i, n) {
          var s,
            o,
            r = this.options[e];
          if (
            ((n = n || {}),
            (i = t.Event(i)),
            (i.type = (
              e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e
            ).toLowerCase()),
            (i.target = this.element[0]),
            (o = i.originalEvent))
          )
            for (s in o) s in i || (i[s] = o[s]);
          return (
            this.element.trigger(i, n),
            !(
              (t.isFunction(r) &&
                r.apply(this.element[0], [i].concat(n)) === !1) ||
              i.isDefaultPrevented()
            )
          );
        },
      }),
      t.each({ show: "fadeIn", hide: "fadeOut" }, function (e, i) {
        t.Widget.prototype["_" + e] = function (n, s, o) {
          "string" == typeof s && (s = { effect: s });
          var r,
            a = s ? (s === !0 || "number" == typeof s ? i : s.effect || i) : e;
          (s = s || {}),
            "number" == typeof s && (s = { duration: s }),
            (r = !t.isEmptyObject(s)),
            (s.complete = o),
            s.delay && n.delay(s.delay),
            r && t.effects && t.effects.effect[a]
              ? n[e](s)
              : a !== e && n[a]
              ? n[a](s.duration, s.easing, o)
              : n.queue(function (i) {
                  t(this)[e](), o && o.call(n[0]), i();
                });
        };
      }),
      t.widget;
    var c = !1;
    t(document).mouseup(function () {
      c = !1;
    }),
      t.widget("ui.mouse", {
        version: "1.11.2",
        options: {
          cancel: "input,textarea,button,select,option",
          distance: 1,
          delay: 0,
        },
        _mouseInit: function () {
          var e = this;
          this.element
            .bind("mousedown." + this.widgetName, function (t) {
              return e._mouseDown(t);
            })
            .bind("click." + this.widgetName, function (i) {
              return !0 ===
                t.data(i.target, e.widgetName + ".preventClickEvent")
                ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"),
                  i.stopImmediatePropagation(),
                  !1)
                : void 0;
            }),
            (this.started = !1);
        },
        _mouseDestroy: function () {
          this.element.unbind("." + this.widgetName),
            this._mouseMoveDelegate &&
              this.document
                .unbind("mousemove." + this.widgetName, this._mouseMoveDelegate)
                .unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
        },
        _mouseDown: function (e) {
          if (!c) {
            (this._mouseMoved = !1),
              this._mouseStarted && this._mouseUp(e),
              (this._mouseDownEvent = e);
            var i = this,
              n = 1 === e.which,
              s =
                "string" == typeof this.options.cancel && e.target.nodeName
                  ? t(e.target).closest(this.options.cancel).length
                  : !1;
            return n && !s && this._mouseCapture(e)
              ? ((this.mouseDelayMet = !this.options.delay),
                this.mouseDelayMet ||
                  (this._mouseDelayTimer = setTimeout(function () {
                    i.mouseDelayMet = !0;
                  }, this.options.delay)),
                this._mouseDistanceMet(e) &&
                this._mouseDelayMet(e) &&
                ((this._mouseStarted = this._mouseStart(e) !== !1),
                !this._mouseStarted)
                  ? (e.preventDefault(), !0)
                  : (!0 ===
                      t.data(
                        e.target,
                        this.widgetName + ".preventClickEvent"
                      ) &&
                      t.removeData(
                        e.target,
                        this.widgetName + ".preventClickEvent"
                      ),
                    (this._mouseMoveDelegate = function (t) {
                      return i._mouseMove(t);
                    }),
                    (this._mouseUpDelegate = function (t) {
                      return i._mouseUp(t);
                    }),
                    this.document
                      .bind(
                        "mousemove." + this.widgetName,
                        this._mouseMoveDelegate
                      )
                      .bind(
                        "mouseup." + this.widgetName,
                        this._mouseUpDelegate
                      ),
                    e.preventDefault(),
                    (c = !0),
                    !0))
              : !0;
          }
        },
        _mouseMove: function (e) {
          if (this._mouseMoved) {
            if (
              t.ui.ie &&
              (!document.documentMode || 9 > document.documentMode) &&
              !e.button
            )
              return this._mouseUp(e);
            if (!e.which) return this._mouseUp(e);
          }
          return (
            (e.which || e.button) && (this._mouseMoved = !0),
            this._mouseStarted
              ? (this._mouseDrag(e), e.preventDefault())
              : (this._mouseDistanceMet(e) &&
                  this._mouseDelayMet(e) &&
                  ((this._mouseStarted =
                    this._mouseStart(this._mouseDownEvent, e) !== !1),
                  this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)),
                !this._mouseStarted)
          );
        },
        _mouseUp: function (e) {
          return (
            this.document
              .unbind("mousemove." + this.widgetName, this._mouseMoveDelegate)
              .unbind("mouseup." + this.widgetName, this._mouseUpDelegate),
            this._mouseStarted &&
              ((this._mouseStarted = !1),
              e.target === this._mouseDownEvent.target &&
                t.data(e.target, this.widgetName + ".preventClickEvent", !0),
              this._mouseStop(e)),
            (c = !1),
            !1
          );
        },
        _mouseDistanceMet: function (t) {
          return (
            Math.max(
              Math.abs(this._mouseDownEvent.pageX - t.pageX),
              Math.abs(this._mouseDownEvent.pageY - t.pageY)
            ) >= this.options.distance
          );
        },
        _mouseDelayMet: function () {
          return this.mouseDelayMet;
        },
        _mouseStart: function () {},
        _mouseDrag: function () {},
        _mouseStop: function () {},
        _mouseCapture: function () {
          return !0;
        },
      }),
      (function () {
        function e(t, e, i) {
          return [
            parseFloat(t[0]) * (p.test(t[0]) ? e / 100 : 1),
            parseFloat(t[1]) * (p.test(t[1]) ? i / 100 : 1),
          ];
        }
        function i(e, i) {
          return parseInt(t.css(e, i), 10) || 0;
        }
        function n(e) {
          var i = e[0];
          return 9 === i.nodeType
            ? {
                width: e.width(),
                height: e.height(),
                offset: { top: 0, left: 0 },
              }
            : t.isWindow(i)
            ? {
                width: e.width(),
                height: e.height(),
                offset: { top: e.scrollTop(), left: e.scrollLeft() },
              }
            : i.preventDefault
            ? { width: 0, height: 0, offset: { top: i.pageY, left: i.pageX } }
            : {
                width: e.outerWidth(),
                height: e.outerHeight(),
                offset: e.offset(),
              };
        }
        t.ui = t.ui || {};
        var s,
          o,
          r = Math.max,
          a = Math.abs,
          l = Math.round,
          u = /left|center|right/,
          h = /top|center|bottom/,
          c = /[\+\-]\d+(\.[\d]+)?%?/,
          d = /^\w+/,
          p = /%$/,
          f = t.fn.position;
        (t.position = {
          scrollbarWidth: function () {
            if (void 0 !== s) return s;
            var e,
              i,
              n = t(
                "<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"
              ),
              o = n.children()[0];
            return (
              t("body").append(n),
              (e = o.offsetWidth),
              n.css("overflow", "scroll"),
              (i = o.offsetWidth),
              e === i && (i = n[0].clientWidth),
              n.remove(),
              (s = e - i)
            );
          },
          getScrollInfo: function (e) {
            var i =
                e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"),
              n = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"),
              s =
                "scroll" === i ||
                ("auto" === i && e.width < e.element[0].scrollWidth),
              o =
                "scroll" === n ||
                ("auto" === n && e.height < e.element[0].scrollHeight);
            return {
              width: o ? t.position.scrollbarWidth() : 0,
              height: s ? t.position.scrollbarWidth() : 0,
            };
          },
          getWithinInfo: function (e) {
            var i = t(e || window),
              n = t.isWindow(i[0]),
              s = !!i[0] && 9 === i[0].nodeType;
            return {
              element: i,
              isWindow: n,
              isDocument: s,
              offset: i.offset() || { left: 0, top: 0 },
              scrollLeft: i.scrollLeft(),
              scrollTop: i.scrollTop(),
              width: n || s ? i.width() : i.outerWidth(),
              height: n || s ? i.height() : i.outerHeight(),
            };
          },
        }),
          (t.fn.position = function (s) {
            if (!s || !s.of) return f.apply(this, arguments);
            s = t.extend({}, s);
            var p,
              m,
              g,
              v,
              y,
              b,
              _ = t(s.of),
              w = t.position.getWithinInfo(s.within),
              x = t.position.getScrollInfo(w),
              k = (s.collision || "flip").split(" "),
              C = {};
            return (
              (b = n(_)),
              _[0].preventDefault && (s.at = "left top"),
              (m = b.width),
              (g = b.height),
              (v = b.offset),
              (y = t.extend({}, v)),
              t.each(["my", "at"], function () {
                var t,
                  e,
                  i = (s[this] || "").split(" ");
                1 === i.length &&
                  (i = u.test(i[0])
                    ? i.concat(["center"])
                    : h.test(i[0])
                    ? ["center"].concat(i)
                    : ["center", "center"]),
                  (i[0] = u.test(i[0]) ? i[0] : "center"),
                  (i[1] = h.test(i[1]) ? i[1] : "center"),
                  (t = c.exec(i[0])),
                  (e = c.exec(i[1])),
                  (C[this] = [t ? t[0] : 0, e ? e[0] : 0]),
                  (s[this] = [d.exec(i[0])[0], d.exec(i[1])[0]]);
              }),
              1 === k.length && (k[1] = k[0]),
              "right" === s.at[0]
                ? (y.left += m)
                : "center" === s.at[0] && (y.left += m / 2),
              "bottom" === s.at[1]
                ? (y.top += g)
                : "center" === s.at[1] && (y.top += g / 2),
              (p = e(C.at, m, g)),
              (y.left += p[0]),
              (y.top += p[1]),
              this.each(function () {
                var n,
                  u,
                  h = t(this),
                  c = h.outerWidth(),
                  d = h.outerHeight(),
                  f = i(this, "marginLeft"),
                  b = i(this, "marginTop"),
                  S = c + f + i(this, "marginRight") + x.width,
                  D = d + b + i(this, "marginBottom") + x.height,
                  T = t.extend({}, y),
                  E = e(C.my, h.outerWidth(), h.outerHeight());
                "right" === s.my[0]
                  ? (T.left -= c)
                  : "center" === s.my[0] && (T.left -= c / 2),
                  "bottom" === s.my[1]
                    ? (T.top -= d)
                    : "center" === s.my[1] && (T.top -= d / 2),
                  (T.left += E[0]),
                  (T.top += E[1]),
                  o || ((T.left = l(T.left)), (T.top = l(T.top))),
                  (n = { marginLeft: f, marginTop: b }),
                  t.each(["left", "top"], function (e, i) {
                    t.ui.position[k[e]] &&
                      t.ui.position[k[e]][i](T, {
                        targetWidth: m,
                        targetHeight: g,
                        elemWidth: c,
                        elemHeight: d,
                        collisionPosition: n,
                        collisionWidth: S,
                        collisionHeight: D,
                        offset: [p[0] + E[0], p[1] + E[1]],
                        my: s.my,
                        at: s.at,
                        within: w,
                        elem: h,
                      });
                  }),
                  s.using &&
                    (u = function (t) {
                      var e = v.left - T.left,
                        i = e + m - c,
                        n = v.top - T.top,
                        o = n + g - d,
                        l = {
                          target: {
                            element: _,
                            left: v.left,
                            top: v.top,
                            width: m,
                            height: g,
                          },
                          element: {
                            element: h,
                            left: T.left,
                            top: T.top,
                            width: c,
                            height: d,
                          },
                          horizontal:
                            0 > i ? "left" : e > 0 ? "right" : "center",
                          vertical: 0 > o ? "top" : n > 0 ? "bottom" : "middle",
                        };
                      c > m && m > a(e + i) && (l.horizontal = "center"),
                        d > g && g > a(n + o) && (l.vertical = "middle"),
                        (l.important =
                          r(a(e), a(i)) > r(a(n), a(o))
                            ? "horizontal"
                            : "vertical"),
                        s.using.call(this, t, l);
                    }),
                  h.offset(t.extend(T, { using: u }));
              })
            );
          }),
          (t.ui.position = {
            fit: {
              left: function (t, e) {
                var i,
                  n = e.within,
                  s = n.isWindow ? n.scrollLeft : n.offset.left,
                  o = n.width,
                  a = t.left - e.collisionPosition.marginLeft,
                  l = s - a,
                  u = a + e.collisionWidth - o - s;
                e.collisionWidth > o
                  ? l > 0 && 0 >= u
                    ? ((i = t.left + l + e.collisionWidth - o - s),
                      (t.left += l - i))
                    : (t.left =
                        u > 0 && 0 >= l
                          ? s
                          : l > u
                          ? s + o - e.collisionWidth
                          : s)
                  : l > 0
                  ? (t.left += l)
                  : u > 0
                  ? (t.left -= u)
                  : (t.left = r(t.left - a, t.left));
              },
              top: function (t, e) {
                var i,
                  n = e.within,
                  s = n.isWindow ? n.scrollTop : n.offset.top,
                  o = e.within.height,
                  a = t.top - e.collisionPosition.marginTop,
                  l = s - a,
                  u = a + e.collisionHeight - o - s;
                e.collisionHeight > o
                  ? l > 0 && 0 >= u
                    ? ((i = t.top + l + e.collisionHeight - o - s),
                      (t.top += l - i))
                    : (t.top =
                        u > 0 && 0 >= l
                          ? s
                          : l > u
                          ? s + o - e.collisionHeight
                          : s)
                  : l > 0
                  ? (t.top += l)
                  : u > 0
                  ? (t.top -= u)
                  : (t.top = r(t.top - a, t.top));
              },
            },
            flip: {
              left: function (t, e) {
                var i,
                  n,
                  s = e.within,
                  o = s.offset.left + s.scrollLeft,
                  r = s.width,
                  l = s.isWindow ? s.scrollLeft : s.offset.left,
                  u = t.left - e.collisionPosition.marginLeft,
                  h = u - l,
                  c = u + e.collisionWidth - r - l,
                  d =
                    "left" === e.my[0]
                      ? -e.elemWidth
                      : "right" === e.my[0]
                      ? e.elemWidth
                      : 0,
                  p =
                    "left" === e.at[0]
                      ? e.targetWidth
                      : "right" === e.at[0]
                      ? -e.targetWidth
                      : 0,
                  f = -2 * e.offset[0];
                0 > h
                  ? ((i = t.left + d + p + f + e.collisionWidth - r - o),
                    (0 > i || a(h) > i) && (t.left += d + p + f))
                  : c > 0 &&
                    ((n =
                      t.left - e.collisionPosition.marginLeft + d + p + f - l),
                    (n > 0 || c > a(n)) && (t.left += d + p + f));
              },
              top: function (t, e) {
                var i,
                  n,
                  s = e.within,
                  o = s.offset.top + s.scrollTop,
                  r = s.height,
                  l = s.isWindow ? s.scrollTop : s.offset.top,
                  u = t.top - e.collisionPosition.marginTop,
                  h = u - l,
                  c = u + e.collisionHeight - r - l,
                  d = "top" === e.my[1],
                  p = d
                    ? -e.elemHeight
                    : "bottom" === e.my[1]
                    ? e.elemHeight
                    : 0,
                  f =
                    "top" === e.at[1]
                      ? e.targetHeight
                      : "bottom" === e.at[1]
                      ? -e.targetHeight
                      : 0,
                  m = -2 * e.offset[1];
                0 > h
                  ? ((n = t.top + p + f + m + e.collisionHeight - r - o),
                    t.top + p + f + m > h &&
                      (0 > n || a(h) > n) &&
                      (t.top += p + f + m))
                  : c > 0 &&
                    ((i =
                      t.top - e.collisionPosition.marginTop + p + f + m - l),
                    t.top + p + f + m > c &&
                      (i > 0 || c > a(i)) &&
                      (t.top += p + f + m));
              },
            },
            flipfit: {
              left: function () {
                t.ui.position.flip.left.apply(this, arguments),
                  t.ui.position.fit.left.apply(this, arguments);
              },
              top: function () {
                t.ui.position.flip.top.apply(this, arguments),
                  t.ui.position.fit.top.apply(this, arguments);
              },
            },
          }),
          (function () {
            var e,
              i,
              n,
              s,
              r,
              a = document.getElementsByTagName("body")[0],
              l = document.createElement("div");
            (e = document.createElement(a ? "div" : "body")),
              (n = {
                visibility: "hidden",
                width: 0,
                height: 0,
                border: 0,
                margin: 0,
                background: "none",
              }),
              a &&
                t.extend(n, {
                  position: "absolute",
                  left: "-1000px",
                  top: "-1000px",
                });
            for (r in n) e.style[r] = n[r];
            e.appendChild(l),
              (i = a || document.documentElement),
              i.insertBefore(e, i.firstChild),
              (l.style.cssText = "position: absolute; left: 10.7432222px;"),
              (s = t(l).offset().left),
              (o = s > 10 && 11 > s),
              (e.innerHTML = ""),
              i.removeChild(e);
          })();
      })(),
      t.ui.position,
      t.widget("ui.draggable", t.ui.mouse, {
        version: "1.11.2",
        widgetEventPrefix: "drag",
        options: {
          addClasses: !0,
          appendTo: "parent",
          axis: !1,
          connectToSortable: !1,
          containment: !1,
          cursor: "auto",
          cursorAt: !1,
          grid: !1,
          handle: !1,
          helper: "original",
          iframeFix: !1,
          opacity: !1,
          refreshPositions: !1,
          revert: !1,
          revertDuration: 500,
          scope: "default",
          scroll: !0,
          scrollSensitivity: 20,
          scrollSpeed: 20,
          snap: !1,
          snapMode: "both",
          snapTolerance: 20,
          stack: !1,
          zIndex: !1,
          drag: null,
          start: null,
          stop: null,
        },
        _create: function () {
          "original" === this.options.helper && this._setPositionRelative(),
            this.options.addClasses && this.element.addClass("ui-draggable"),
            this.options.disabled &&
              this.element.addClass("ui-draggable-disabled"),
            this._setHandleClassName(),
            this._mouseInit();
        },
        _setOption: function (t, e) {
          this._super(t, e),
            "handle" === t &&
              (this._removeHandleClassName(), this._setHandleClassName());
        },
        _destroy: function () {
          return (this.helper || this.element).is(".ui-draggable-dragging")
            ? void (this.destroyOnClear = !0)
            : (this.element.removeClass(
                "ui-draggable ui-draggable-dragging ui-draggable-disabled"
              ),
              this._removeHandleClassName(),
              void this._mouseDestroy());
        },
        _mouseCapture: function (e) {
          var i = this.options;
          return (
            this._blurActiveElement(e),
            this.helper ||
            i.disabled ||
            t(e.target).closest(".ui-resizable-handle").length > 0
              ? !1
              : ((this.handle = this._getHandle(e)),
                this.handle
                  ? (this._blockFrames(
                      i.iframeFix === !0 ? "iframe" : i.iframeFix
                    ),
                    !0)
                  : !1)
          );
        },
        _blockFrames: function (e) {
          this.iframeBlocks = this.document.find(e).map(function () {
            var e = t(this);
            return t("<div>")
              .css("position", "absolute")
              .appendTo(e.parent())
              .outerWidth(e.outerWidth())
              .outerHeight(e.outerHeight())
              .offset(e.offset())[0];
          });
        },
        _unblockFrames: function () {
          this.iframeBlocks &&
            (this.iframeBlocks.remove(), delete this.iframeBlocks);
        },
        _blurActiveElement: function (e) {
          var i = this.document[0];
          if (this.handleElement.is(e.target))
            try {
              i.activeElement &&
                "body" !== i.activeElement.nodeName.toLowerCase() &&
                t(i.activeElement).blur();
            } catch (n) {}
        },
        _mouseStart: function (e) {
          var i = this.options;
          return (
            (this.helper = this._createHelper(e)),
            this.helper.addClass("ui-draggable-dragging"),
            this._cacheHelperProportions(),
            t.ui.ddmanager && (t.ui.ddmanager.current = this),
            this._cacheMargins(),
            (this.cssPosition = this.helper.css("position")),
            (this.scrollParent = this.helper.scrollParent(!0)),
            (this.offsetParent = this.helper.offsetParent()),
            (this.hasFixedAncestor =
              this.helper.parents().filter(function () {
                return "fixed" === t(this).css("position");
              }).length > 0),
            (this.positionAbs = this.element.offset()),
            this._refreshOffsets(e),
            (this.originalPosition = this.position =
              this._generatePosition(e, !1)),
            (this.originalPageX = e.pageX),
            (this.originalPageY = e.pageY),
            i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt),
            this._setContainment(),
            this._trigger("start", e) === !1
              ? (this._clear(), !1)
              : (this._cacheHelperProportions(),
                t.ui.ddmanager &&
                  !i.dropBehaviour &&
                  t.ui.ddmanager.prepareOffsets(this, e),
                this._normalizeRightBottom(),
                this._mouseDrag(e, !0),
                t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e),
                !0)
          );
        },
        _refreshOffsets: function (t) {
          (this.offset = {
            top: this.positionAbs.top - this.margins.top,
            left: this.positionAbs.left - this.margins.left,
            scroll: !1,
            parent: this._getParentOffset(),
            relative: this._getRelativeOffset(),
          }),
            (this.offset.click = {
              left: t.pageX - this.offset.left,
              top: t.pageY - this.offset.top,
            });
        },
        _mouseDrag: function (e, i) {
          if (
            (this.hasFixedAncestor &&
              (this.offset.parent = this._getParentOffset()),
            (this.position = this._generatePosition(e, !0)),
            (this.positionAbs = this._convertPositionTo("absolute")),
            !i)
          ) {
            var n = this._uiHash();
            if (this._trigger("drag", e, n) === !1)
              return this._mouseUp({}), !1;
            this.position = n.position;
          }
          return (
            (this.helper[0].style.left = this.position.left + "px"),
            (this.helper[0].style.top = this.position.top + "px"),
            t.ui.ddmanager && t.ui.ddmanager.drag(this, e),
            !1
          );
        },
        _mouseStop: function (e) {
          var i = this,
            n = !1;
          return (
            t.ui.ddmanager &&
              !this.options.dropBehaviour &&
              (n = t.ui.ddmanager.drop(this, e)),
            this.dropped && ((n = this.dropped), (this.dropped = !1)),
            ("invalid" === this.options.revert && !n) ||
            ("valid" === this.options.revert && n) ||
            this.options.revert === !0 ||
            (t.isFunction(this.options.revert) &&
              this.options.revert.call(this.element, n))
              ? t(this.helper).animate(
                  this.originalPosition,
                  parseInt(this.options.revertDuration, 10),
                  function () {
                    i._trigger("stop", e) !== !1 && i._clear();
                  }
                )
              : this._trigger("stop", e) !== !1 && this._clear(),
            !1
          );
        },
        _mouseUp: function (e) {
          return (
            this._unblockFrames(),
            t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e),
            this.handleElement.is(e.target) && this.element.focus(),
            t.ui.mouse.prototype._mouseUp.call(this, e)
          );
        },
        cancel: function () {
          return (
            this.helper.is(".ui-draggable-dragging")
              ? this._mouseUp({})
              : this._clear(),
            this
          );
        },
        _getHandle: function (e) {
          return this.options.handle
            ? !!t(e.target).closest(this.element.find(this.options.handle))
                .length
            : !0;
        },
        _setHandleClassName: function () {
          (this.handleElement = this.options.handle
            ? this.element.find(this.options.handle)
            : this.element),
            this.handleElement.addClass("ui-draggable-handle");
        },
        _removeHandleClassName: function () {
          this.handleElement.removeClass("ui-draggable-handle");
        },
        _createHelper: function (e) {
          var i = this.options,
            n = t.isFunction(i.helper),
            s = n
              ? t(i.helper.apply(this.element[0], [e]))
              : "clone" === i.helper
              ? this.element.clone().removeAttr("id")
              : this.element;
          return (
            s.parents("body").length ||
              s.appendTo(
                "parent" === i.appendTo
                  ? this.element[0].parentNode
                  : i.appendTo
              ),
            n && s[0] === this.element[0] && this._setPositionRelative(),
            s[0] === this.element[0] ||
              /(fixed|absolute)/.test(s.css("position")) ||
              s.css("position", "absolute"),
            s
          );
        },
        _setPositionRelative: function () {
          /^(?:r|a|f)/.test(this.element.css("position")) ||
            (this.element[0].style.position = "relative");
        },
        _adjustOffsetFromHelper: function (e) {
          "string" == typeof e && (e = e.split(" ")),
            t.isArray(e) && (e = { left: +e[0], top: +e[1] || 0 }),
            "left" in e &&
              (this.offset.click.left = e.left + this.margins.left),
            "right" in e &&
              (this.offset.click.left =
                this.helperProportions.width - e.right + this.margins.left),
            "top" in e && (this.offset.click.top = e.top + this.margins.top),
            "bottom" in e &&
              (this.offset.click.top =
                this.helperProportions.height - e.bottom + this.margins.top);
        },
        _isRootNode: function (t) {
          return /(html|body)/i.test(t.tagName) || t === this.document[0];
        },
        _getParentOffset: function () {
          var e = this.offsetParent.offset(),
            i = this.document[0];
          return (
            "absolute" === this.cssPosition &&
              this.scrollParent[0] !== i &&
              t.contains(this.scrollParent[0], this.offsetParent[0]) &&
              ((e.left += this.scrollParent.scrollLeft()),
              (e.top += this.scrollParent.scrollTop())),
            this._isRootNode(this.offsetParent[0]) && (e = { top: 0, left: 0 }),
            {
              top:
                e.top +
                (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
              left:
                e.left +
                (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0),
            }
          );
        },
        _getRelativeOffset: function () {
          if ("relative" !== this.cssPosition) return { top: 0, left: 0 };
          var t = this.element.position(),
            e = this._isRootNode(this.scrollParent[0]);
          return {
            top:
              t.top -
              (parseInt(this.helper.css("top"), 10) || 0) +
              (e ? 0 : this.scrollParent.scrollTop()),
            left:
              t.left -
              (parseInt(this.helper.css("left"), 10) || 0) +
              (e ? 0 : this.scrollParent.scrollLeft()),
          };
        },
        _cacheMargins: function () {
          this.margins = {
            left: parseInt(this.element.css("marginLeft"), 10) || 0,
            top: parseInt(this.element.css("marginTop"), 10) || 0,
            right: parseInt(this.element.css("marginRight"), 10) || 0,
            bottom: parseInt(this.element.css("marginBottom"), 10) || 0,
          };
        },
        _cacheHelperProportions: function () {
          this.helperProportions = {
            width: this.helper.outerWidth(),
            height: this.helper.outerHeight(),
          };
        },
        _setContainment: function () {
          var e,
            i,
            n,
            s = this.options,
            o = this.document[0];
          return (
            (this.relativeContainer = null),
            s.containment
              ? "window" === s.containment
                ? void (this.containment = [
                    t(window).scrollLeft() -
                      this.offset.relative.left -
                      this.offset.parent.left,
                    t(window).scrollTop() -
                      this.offset.relative.top -
                      this.offset.parent.top,
                    t(window).scrollLeft() +
                      t(window).width() -
                      this.helperProportions.width -
                      this.margins.left,
                    t(window).scrollTop() +
                      (t(window).height() || o.body.parentNode.scrollHeight) -
                      this.helperProportions.height -
                      this.margins.top,
                  ])
                : "document" === s.containment
                ? void (this.containment = [
                    0,
                    0,
                    t(o).width() -
                      this.helperProportions.width -
                      this.margins.left,
                    (t(o).height() || o.body.parentNode.scrollHeight) -
                      this.helperProportions.height -
                      this.margins.top,
                  ])
                : s.containment.constructor === Array
                ? void (this.containment = s.containment)
                : ("parent" === s.containment &&
                    (s.containment = this.helper[0].parentNode),
                  (i = t(s.containment)),
                  (n = i[0]),
                  void (
                    n &&
                    ((e = /(scroll|auto)/.test(i.css("overflow"))),
                    (this.containment = [
                      (parseInt(i.css("borderLeftWidth"), 10) || 0) +
                        (parseInt(i.css("paddingLeft"), 10) || 0),
                      (parseInt(i.css("borderTopWidth"), 10) || 0) +
                        (parseInt(i.css("paddingTop"), 10) || 0),
                      (e
                        ? Math.max(n.scrollWidth, n.offsetWidth)
                        : n.offsetWidth) -
                        (parseInt(i.css("borderRightWidth"), 10) || 0) -
                        (parseInt(i.css("paddingRight"), 10) || 0) -
                        this.helperProportions.width -
                        this.margins.left -
                        this.margins.right,
                      (e
                        ? Math.max(n.scrollHeight, n.offsetHeight)
                        : n.offsetHeight) -
                        (parseInt(i.css("borderBottomWidth"), 10) || 0) -
                        (parseInt(i.css("paddingBottom"), 10) || 0) -
                        this.helperProportions.height -
                        this.margins.top -
                        this.margins.bottom,
                    ]),
                    (this.relativeContainer = i))
                  ))
              : void (this.containment = null)
          );
        },
        _convertPositionTo: function (t, e) {
          e || (e = this.position);
          var i = "absolute" === t ? 1 : -1,
            n = this._isRootNode(this.scrollParent[0]);
          return {
            top:
              e.top +
              this.offset.relative.top * i +
              this.offset.parent.top * i -
              ("fixed" === this.cssPosition
                ? -this.offset.scroll.top
                : n
                ? 0
                : this.offset.scroll.top) *
                i,
            left:
              e.left +
              this.offset.relative.left * i +
              this.offset.parent.left * i -
              ("fixed" === this.cssPosition
                ? -this.offset.scroll.left
                : n
                ? 0
                : this.offset.scroll.left) *
                i,
          };
        },
        _generatePosition: function (t, e) {
          var i,
            n,
            s,
            o,
            r = this.options,
            a = this._isRootNode(this.scrollParent[0]),
            l = t.pageX,
            u = t.pageY;
          return (
            (a && this.offset.scroll) ||
              (this.offset.scroll = {
                top: this.scrollParent.scrollTop(),
                left: this.scrollParent.scrollLeft(),
              }),
            e &&
              (this.containment &&
                (this.relativeContainer
                  ? ((n = this.relativeContainer.offset()),
                    (i = [
                      this.containment[0] + n.left,
                      this.containment[1] + n.top,
                      this.containment[2] + n.left,
                      this.containment[3] + n.top,
                    ]))
                  : (i = this.containment),
                t.pageX - this.offset.click.left < i[0] &&
                  (l = i[0] + this.offset.click.left),
                t.pageY - this.offset.click.top < i[1] &&
                  (u = i[1] + this.offset.click.top),
                t.pageX - this.offset.click.left > i[2] &&
                  (l = i[2] + this.offset.click.left),
                t.pageY - this.offset.click.top > i[3] &&
                  (u = i[3] + this.offset.click.top)),
              r.grid &&
                ((s = r.grid[1]
                  ? this.originalPageY +
                    Math.round((u - this.originalPageY) / r.grid[1]) * r.grid[1]
                  : this.originalPageY),
                (u = i
                  ? s - this.offset.click.top >= i[1] ||
                    s - this.offset.click.top > i[3]
                    ? s
                    : s - this.offset.click.top >= i[1]
                    ? s - r.grid[1]
                    : s + r.grid[1]
                  : s),
                (o = r.grid[0]
                  ? this.originalPageX +
                    Math.round((l - this.originalPageX) / r.grid[0]) * r.grid[0]
                  : this.originalPageX),
                (l = i
                  ? o - this.offset.click.left >= i[0] ||
                    o - this.offset.click.left > i[2]
                    ? o
                    : o - this.offset.click.left >= i[0]
                    ? o - r.grid[0]
                    : o + r.grid[0]
                  : o)),
              "y" === r.axis && (l = this.originalPageX),
              "x" === r.axis && (u = this.originalPageY)),
            {
              top:
                u -
                this.offset.click.top -
                this.offset.relative.top -
                this.offset.parent.top +
                ("fixed" === this.cssPosition
                  ? -this.offset.scroll.top
                  : a
                  ? 0
                  : this.offset.scroll.top),
              left:
                l -
                this.offset.click.left -
                this.offset.relative.left -
                this.offset.parent.left +
                ("fixed" === this.cssPosition
                  ? -this.offset.scroll.left
                  : a
                  ? 0
                  : this.offset.scroll.left),
            }
          );
        },
        _clear: function () {
          this.helper.removeClass("ui-draggable-dragging"),
            this.helper[0] === this.element[0] ||
              this.cancelHelperRemoval ||
              this.helper.remove(),
            (this.helper = null),
            (this.cancelHelperRemoval = !1),
            this.destroyOnClear && this.destroy();
        },
        _normalizeRightBottom: function () {
          "y" !== this.options.axis &&
            "auto" !== this.helper.css("right") &&
            (this.helper.width(this.helper.width()),
            this.helper.css("right", "auto")),
            "x" !== this.options.axis &&
              "auto" !== this.helper.css("bottom") &&
              (this.helper.height(this.helper.height()),
              this.helper.css("bottom", "auto"));
        },
        _trigger: function (e, i, n) {
          return (
            (n = n || this._uiHash()),
            t.ui.plugin.call(this, e, [i, n, this], !0),
            /^(drag|start|stop)/.test(e) &&
              ((this.positionAbs = this._convertPositionTo("absolute")),
              (n.offset = this.positionAbs)),
            t.Widget.prototype._trigger.call(this, e, i, n)
          );
        },
        plugins: {},
        _uiHash: function () {
          return {
            helper: this.helper,
            position: this.position,
            originalPosition: this.originalPosition,
            offset: this.positionAbs,
          };
        },
      }),
      t.ui.plugin.add("draggable", "connectToSortable", {
        start: function (e, i, n) {
          var s = t.extend({}, i, { item: n.element });
          (n.sortables = []),
            t(n.options.connectToSortable).each(function () {
              var i = t(this).sortable("instance");
              i &&
                !i.options.disabled &&
                (n.sortables.push(i),
                i.refreshPositions(),
                i._trigger("activate", e, s));
            });
        },
        stop: function (e, i, n) {
          var s = t.extend({}, i, { item: n.element });
          (n.cancelHelperRemoval = !1),
            t.each(n.sortables, function () {
              var t = this;
              t.isOver
                ? ((t.isOver = 0),
                  (n.cancelHelperRemoval = !0),
                  (t.cancelHelperRemoval = !1),
                  (t._storedCSS = {
                    position: t.placeholder.css("position"),
                    top: t.placeholder.css("top"),
                    left: t.placeholder.css("left"),
                  }),
                  t._mouseStop(e),
                  (t.options.helper = t.options._helper))
                : ((t.cancelHelperRemoval = !0),
                  t._trigger("deactivate", e, s));
            });
        },
        drag: function (e, i, n) {
          t.each(n.sortables, function () {
            var s = !1,
              o = this;
            (o.positionAbs = n.positionAbs),
              (o.helperProportions = n.helperProportions),
              (o.offset.click = n.offset.click),
              o._intersectsWith(o.containerCache) &&
                ((s = !0),
                t.each(n.sortables, function () {
                  return (
                    (this.positionAbs = n.positionAbs),
                    (this.helperProportions = n.helperProportions),
                    (this.offset.click = n.offset.click),
                    this !== o &&
                      this._intersectsWith(this.containerCache) &&
                      t.contains(o.element[0], this.element[0]) &&
                      (s = !1),
                    s
                  );
                })),
              s
                ? (o.isOver ||
                    ((o.isOver = 1),
                    (o.currentItem = i.helper
                      .appendTo(o.element)
                      .data("ui-sortable-item", !0)),
                    (o.options._helper = o.options.helper),
                    (o.options.helper = function () {
                      return i.helper[0];
                    }),
                    (e.target = o.currentItem[0]),
                    o._mouseCapture(e, !0),
                    o._mouseStart(e, !0, !0),
                    (o.offset.click.top = n.offset.click.top),
                    (o.offset.click.left = n.offset.click.left),
                    (o.offset.parent.left -=
                      n.offset.parent.left - o.offset.parent.left),
                    (o.offset.parent.top -=
                      n.offset.parent.top - o.offset.parent.top),
                    n._trigger("toSortable", e),
                    (n.dropped = o.element),
                    t.each(n.sortables, function () {
                      this.refreshPositions();
                    }),
                    (n.currentItem = n.element),
                    (o.fromOutside = n)),
                  o.currentItem && (o._mouseDrag(e), (i.position = o.position)))
                : o.isOver &&
                  ((o.isOver = 0),
                  (o.cancelHelperRemoval = !0),
                  (o.options._revert = o.options.revert),
                  (o.options.revert = !1),
                  o._trigger("out", e, o._uiHash(o)),
                  o._mouseStop(e, !0),
                  (o.options.revert = o.options._revert),
                  (o.options.helper = o.options._helper),
                  o.placeholder && o.placeholder.remove(),
                  n._refreshOffsets(e),
                  (i.position = n._generatePosition(e, !0)),
                  n._trigger("fromSortable", e),
                  (n.dropped = !1),
                  t.each(n.sortables, function () {
                    this.refreshPositions();
                  }));
          });
        },
      }),
      t.ui.plugin.add("draggable", "cursor", {
        start: function (e, i, n) {
          var s = t("body"),
            o = n.options;
          s.css("cursor") && (o._cursor = s.css("cursor")),
            s.css("cursor", o.cursor);
        },
        stop: function (e, i, n) {
          var s = n.options;
          s._cursor && t("body").css("cursor", s._cursor);
        },
      }),
      t.ui.plugin.add("draggable", "opacity", {
        start: function (e, i, n) {
          var s = t(i.helper),
            o = n.options;
          s.css("opacity") && (o._opacity = s.css("opacity")),
            s.css("opacity", o.opacity);
        },
        stop: function (e, i, n) {
          var s = n.options;
          s._opacity && t(i.helper).css("opacity", s._opacity);
        },
      }),
      t.ui.plugin.add("draggable", "scroll", {
        start: function (t, e, i) {
          i.scrollParentNotHidden ||
            (i.scrollParentNotHidden = i.helper.scrollParent(!1)),
            i.scrollParentNotHidden[0] !== i.document[0] &&
              "HTML" !== i.scrollParentNotHidden[0].tagName &&
              (i.overflowOffset = i.scrollParentNotHidden.offset());
        },
        drag: function (e, i, n) {
          var s = n.options,
            o = !1,
            r = n.scrollParentNotHidden[0],
            a = n.document[0];
          r !== a && "HTML" !== r.tagName
            ? ((s.axis && "x" === s.axis) ||
                (n.overflowOffset.top + r.offsetHeight - e.pageY <
                s.scrollSensitivity
                  ? (r.scrollTop = o = r.scrollTop + s.scrollSpeed)
                  : e.pageY - n.overflowOffset.top < s.scrollSensitivity &&
                    (r.scrollTop = o = r.scrollTop - s.scrollSpeed)),
              (s.axis && "y" === s.axis) ||
                (n.overflowOffset.left + r.offsetWidth - e.pageX <
                s.scrollSensitivity
                  ? (r.scrollLeft = o = r.scrollLeft + s.scrollSpeed)
                  : e.pageX - n.overflowOffset.left < s.scrollSensitivity &&
                    (r.scrollLeft = o = r.scrollLeft - s.scrollSpeed)))
            : ((s.axis && "x" === s.axis) ||
                (e.pageY - t(a).scrollTop() < s.scrollSensitivity
                  ? (o = t(a).scrollTop(t(a).scrollTop() - s.scrollSpeed))
                  : t(window).height() - (e.pageY - t(a).scrollTop()) <
                      s.scrollSensitivity &&
                    (o = t(a).scrollTop(t(a).scrollTop() + s.scrollSpeed))),
              (s.axis && "y" === s.axis) ||
                (e.pageX - t(a).scrollLeft() < s.scrollSensitivity
                  ? (o = t(a).scrollLeft(t(a).scrollLeft() - s.scrollSpeed))
                  : t(window).width() - (e.pageX - t(a).scrollLeft()) <
                      s.scrollSensitivity &&
                    (o = t(a).scrollLeft(t(a).scrollLeft() + s.scrollSpeed)))),
            o !== !1 &&
              t.ui.ddmanager &&
              !s.dropBehaviour &&
              t.ui.ddmanager.prepareOffsets(n, e);
        },
      }),
      t.ui.plugin.add("draggable", "snap", {
        start: function (e, i, n) {
          var s = n.options;
          (n.snapElements = []),
            t(
              s.snap.constructor !== String
                ? s.snap.items || ":data(ui-draggable)"
                : s.snap
            ).each(function () {
              var e = t(this),
                i = e.offset();
              this !== n.element[0] &&
                n.snapElements.push({
                  item: this,
                  width: e.outerWidth(),
                  height: e.outerHeight(),
                  top: i.top,
                  left: i.left,
                });
            });
        },
        drag: function (e, i, n) {
          var s,
            o,
            r,
            a,
            l,
            u,
            h,
            c,
            d,
            p,
            f = n.options,
            m = f.snapTolerance,
            g = i.offset.left,
            v = g + n.helperProportions.width,
            y = i.offset.top,
            b = y + n.helperProportions.height;
          for (d = n.snapElements.length - 1; d >= 0; d--)
            (l = n.snapElements[d].left - n.margins.left),
              (u = l + n.snapElements[d].width),
              (h = n.snapElements[d].top - n.margins.top),
              (c = h + n.snapElements[d].height),
              l - m > v ||
              g > u + m ||
              h - m > b ||
              y > c + m ||
              !t.contains(
                n.snapElements[d].item.ownerDocument,
                n.snapElements[d].item
              )
                ? (n.snapElements[d].snapping &&
                    n.options.snap.release &&
                    n.options.snap.release.call(
                      n.element,
                      e,
                      t.extend(n._uiHash(), {
                        snapItem: n.snapElements[d].item,
                      })
                    ),
                  (n.snapElements[d].snapping = !1))
                : ("inner" !== f.snapMode &&
                    ((s = m >= Math.abs(h - b)),
                    (o = m >= Math.abs(c - y)),
                    (r = m >= Math.abs(l - v)),
                    (a = m >= Math.abs(u - g)),
                    s &&
                      (i.position.top = n._convertPositionTo("relative", {
                        top: h - n.helperProportions.height,
                        left: 0,
                      }).top),
                    o &&
                      (i.position.top = n._convertPositionTo("relative", {
                        top: c,
                        left: 0,
                      }).top),
                    r &&
                      (i.position.left = n._convertPositionTo("relative", {
                        top: 0,
                        left: l - n.helperProportions.width,
                      }).left),
                    a &&
                      (i.position.left = n._convertPositionTo("relative", {
                        top: 0,
                        left: u,
                      }).left)),
                  (p = s || o || r || a),
                  "outer" !== f.snapMode &&
                    ((s = m >= Math.abs(h - y)),
                    (o = m >= Math.abs(c - b)),
                    (r = m >= Math.abs(l - g)),
                    (a = m >= Math.abs(u - v)),
                    s &&
                      (i.position.top = n._convertPositionTo("relative", {
                        top: h,
                        left: 0,
                      }).top),
                    o &&
                      (i.position.top = n._convertPositionTo("relative", {
                        top: c - n.helperProportions.height,
                        left: 0,
                      }).top),
                    r &&
                      (i.position.left = n._convertPositionTo("relative", {
                        top: 0,
                        left: l,
                      }).left),
                    a &&
                      (i.position.left = n._convertPositionTo("relative", {
                        top: 0,
                        left: u - n.helperProportions.width,
                      }).left)),
                  !n.snapElements[d].snapping &&
                    (s || o || r || a || p) &&
                    n.options.snap.snap &&
                    n.options.snap.snap.call(
                      n.element,
                      e,
                      t.extend(n._uiHash(), {
                        snapItem: n.snapElements[d].item,
                      })
                    ),
                  (n.snapElements[d].snapping = s || o || r || a || p));
        },
      }),
      t.ui.plugin.add("draggable", "stack", {
        start: function (e, i, n) {
          var s,
            o = n.options,
            r = t.makeArray(t(o.stack)).sort(function (e, i) {
              return (
                (parseInt(t(e).css("zIndex"), 10) || 0) -
                (parseInt(t(i).css("zIndex"), 10) || 0)
              );
            });
          r.length &&
            ((s = parseInt(t(r[0]).css("zIndex"), 10) || 0),
            t(r).each(function (e) {
              t(this).css("zIndex", s + e);
            }),
            this.css("zIndex", s + r.length));
        },
      }),
      t.ui.plugin.add("draggable", "zIndex", {
        start: function (e, i, n) {
          var s = t(i.helper),
            o = n.options;
          s.css("zIndex") && (o._zIndex = s.css("zIndex")),
            s.css("zIndex", o.zIndex);
        },
        stop: function (e, i, n) {
          var s = n.options;
          s._zIndex && t(i.helper).css("zIndex", s._zIndex);
        },
      }),
      t.ui.draggable,
      t.widget("ui.droppable", {
        version: "1.11.2",
        widgetEventPrefix: "drop",
        options: {
          accept: "*",
          activeClass: !1,
          addClasses: !0,
          greedy: !1,
          hoverClass: !1,
          scope: "default",
          tolerance: "intersect",
          activate: null,
          deactivate: null,
          drop: null,
          out: null,
          over: null,
        },
        _create: function () {
          var e,
            i = this.options,
            n = i.accept;
          (this.isover = !1),
            (this.isout = !0),
            (this.accept = t.isFunction(n)
              ? n
              : function (t) {
                  return t.is(n);
                }),
            (this.proportions = function () {
              return arguments.length
                ? void (e = arguments[0])
                : e
                ? e
                : (e = {
                    width: this.element[0].offsetWidth,
                    height: this.element[0].offsetHeight,
                  });
            }),
            this._addToManager(i.scope),
            i.addClasses && this.element.addClass("ui-droppable");
        },
        _addToManager: function (e) {
          (t.ui.ddmanager.droppables[e] = t.ui.ddmanager.droppables[e] || []),
            t.ui.ddmanager.droppables[e].push(this);
        },
        _splice: function (t) {
          for (var e = 0; t.length > e; e++) t[e] === this && t.splice(e, 1);
        },
        _destroy: function () {
          var e = t.ui.ddmanager.droppables[this.options.scope];
          this._splice(e),
            this.element.removeClass("ui-droppable ui-droppable-disabled");
        },
        _setOption: function (e, i) {
          if ("accept" === e)
            this.accept = t.isFunction(i)
              ? i
              : function (t) {
                  return t.is(i);
                };
          else if ("scope" === e) {
            var n = t.ui.ddmanager.droppables[this.options.scope];
            this._splice(n), this._addToManager(i);
          }
          this._super(e, i);
        },
        _activate: function (e) {
          var i = t.ui.ddmanager.current;
          this.options.activeClass &&
            this.element.addClass(this.options.activeClass),
            i && this._trigger("activate", e, this.ui(i));
        },
        _deactivate: function (e) {
          var i = t.ui.ddmanager.current;
          this.options.activeClass &&
            this.element.removeClass(this.options.activeClass),
            i && this._trigger("deactivate", e, this.ui(i));
        },
        _over: function (e) {
          var i = t.ui.ddmanager.current;
          i &&
            (i.currentItem || i.element)[0] !== this.element[0] &&
            this.accept.call(this.element[0], i.currentItem || i.element) &&
            (this.options.hoverClass &&
              this.element.addClass(this.options.hoverClass),
            this._trigger("over", e, this.ui(i)));
        },
        _out: function (e) {
          var i = t.ui.ddmanager.current;
          i &&
            (i.currentItem || i.element)[0] !== this.element[0] &&
            this.accept.call(this.element[0], i.currentItem || i.element) &&
            (this.options.hoverClass &&
              this.element.removeClass(this.options.hoverClass),
            this._trigger("out", e, this.ui(i)));
        },
        _drop: function (e, i) {
          var n = i || t.ui.ddmanager.current,
            s = !1;
          return n && (n.currentItem || n.element)[0] !== this.element[0]
            ? (this.element
                .find(":data(ui-droppable)")
                .not(".ui-draggable-dragging")
                .each(function () {
                  var i = t(this).droppable("instance");
                  return i.options.greedy &&
                    !i.options.disabled &&
                    i.options.scope === n.options.scope &&
                    i.accept.call(i.element[0], n.currentItem || n.element) &&
                    t.ui.intersect(
                      n,
                      t.extend(i, { offset: i.element.offset() }),
                      i.options.tolerance,
                      e
                    )
                    ? ((s = !0), !1)
                    : void 0;
                }),
              s
                ? !1
                : this.accept.call(this.element[0], n.currentItem || n.element)
                ? (this.options.activeClass &&
                    this.element.removeClass(this.options.activeClass),
                  this.options.hoverClass &&
                    this.element.removeClass(this.options.hoverClass),
                  this._trigger("drop", e, this.ui(n)),
                  this.element)
                : !1)
            : !1;
        },
        ui: function (t) {
          return {
            draggable: t.currentItem || t.element,
            helper: t.helper,
            position: t.position,
            offset: t.positionAbs,
          };
        },
      }),
      (t.ui.intersect = (function () {
        function t(t, e, i) {
          return t >= e && e + i > t;
        }
        return function (e, i, n, s) {
          if (!i.offset) return !1;
          var o = (e.positionAbs || e.position.absolute).left + e.margins.left,
            r = (e.positionAbs || e.position.absolute).top + e.margins.top,
            a = o + e.helperProportions.width,
            l = r + e.helperProportions.height,
            u = i.offset.left,
            h = i.offset.top,
            c = u + i.proportions().width,
            d = h + i.proportions().height;
          switch (n) {
            case "fit":
              return o >= u && c >= a && r >= h && d >= l;
            case "intersect":
              return (
                o + e.helperProportions.width / 2 > u &&
                c > a - e.helperProportions.width / 2 &&
                r + e.helperProportions.height / 2 > h &&
                d > l - e.helperProportions.height / 2
              );
            case "pointer":
              return (
                t(s.pageY, h, i.proportions().height) &&
                t(s.pageX, u, i.proportions().width)
              );
            case "touch":
              return (
                ((r >= h && d >= r) ||
                  (l >= h && d >= l) ||
                  (h > r && l > d)) &&
                ((o >= u && c >= o) || (a >= u && c >= a) || (u > o && a > c))
              );
            default:
              return !1;
          }
        };
      })()),
      (t.ui.ddmanager = {
        current: null,
        droppables: { default: [] },
        prepareOffsets: function (e, i) {
          var n,
            s,
            o = t.ui.ddmanager.droppables[e.options.scope] || [],
            r = i ? i.type : null,
            a = (e.currentItem || e.element)
              .find(":data(ui-droppable)")
              .addBack();
          t: for (n = 0; o.length > n; n++)
            if (
              !(
                o[n].options.disabled ||
                (e &&
                  !o[n].accept.call(
                    o[n].element[0],
                    e.currentItem || e.element
                  ))
              )
            ) {
              for (s = 0; a.length > s; s++)
                if (a[s] === o[n].element[0]) {
                  o[n].proportions().height = 0;
                  continue t;
                }
              (o[n].visible = "none" !== o[n].element.css("display")),
                o[n].visible &&
                  ("mousedown" === r && o[n]._activate.call(o[n], i),
                  (o[n].offset = o[n].element.offset()),
                  o[n].proportions({
                    width: o[n].element[0].offsetWidth,
                    height: o[n].element[0].offsetHeight,
                  }));
            }
        },
        drop: function (e, i) {
          var n = !1;
          return (
            t.each(
              (t.ui.ddmanager.droppables[e.options.scope] || []).slice(),
              function () {
                this.options &&
                  (!this.options.disabled &&
                    this.visible &&
                    t.ui.intersect(e, this, this.options.tolerance, i) &&
                    (n = this._drop.call(this, i) || n),
                  !this.options.disabled &&
                    this.visible &&
                    this.accept.call(
                      this.element[0],
                      e.currentItem || e.element
                    ) &&
                    ((this.isout = !0),
                    (this.isover = !1),
                    this._deactivate.call(this, i)));
              }
            ),
            n
          );
        },
        dragStart: function (e, i) {
          e.element.parentsUntil("body").bind("scroll.droppable", function () {
            e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i);
          });
        },
        drag: function (e, i) {
          e.options.refreshPositions && t.ui.ddmanager.prepareOffsets(e, i),
            t.each(
              t.ui.ddmanager.droppables[e.options.scope] || [],
              function () {
                if (
                  !this.options.disabled &&
                  !this.greedyChild &&
                  this.visible
                ) {
                  var n,
                    s,
                    o,
                    r = t.ui.intersect(e, this, this.options.tolerance, i),
                    a =
                      !r && this.isover
                        ? "isout"
                        : r && !this.isover
                        ? "isover"
                        : null;
                  a &&
                    (this.options.greedy &&
                      ((s = this.options.scope),
                      (o = this.element
                        .parents(":data(ui-droppable)")
                        .filter(function () {
                          return (
                            t(this).droppable("instance").options.scope === s
                          );
                        })),
                      o.length &&
                        ((n = t(o[0]).droppable("instance")),
                        (n.greedyChild = "isover" === a))),
                    n &&
                      "isover" === a &&
                      ((n.isover = !1), (n.isout = !0), n._out.call(n, i)),
                    (this[a] = !0),
                    (this["isout" === a ? "isover" : "isout"] = !1),
                    this["isover" === a ? "_over" : "_out"].call(this, i),
                    n &&
                      "isout" === a &&
                      ((n.isout = !1), (n.isover = !0), n._over.call(n, i)));
                }
              }
            );
        },
        dragStop: function (e, i) {
          e.element.parentsUntil("body").unbind("scroll.droppable"),
            e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i);
        },
      }),
      t.ui.droppable,
      t.widget("ui.resizable", t.ui.mouse, {
        version: "1.11.2",
        widgetEventPrefix: "resize",
        options: {
          alsoResize: !1,
          animate: !1,
          animateDuration: "slow",
          animateEasing: "swing",
          aspectRatio: !1,
          autoHide: !1,
          containment: !1,
          ghost: !1,
          grid: !1,
          handles: "e,s,se",
          helper: !1,
          maxHeight: null,
          maxWidth: null,
          minHeight: 10,
          minWidth: 10,
          zIndex: 90,
          resize: null,
          start: null,
          stop: null,
        },
        _num: function (t) {
          return parseInt(t, 10) || 0;
        },
        _isNumber: function (t) {
          return !isNaN(parseInt(t, 10));
        },
        _hasScroll: function (e, i) {
          if ("hidden" === t(e).css("overflow")) return !1;
          var n = i && "left" === i ? "scrollLeft" : "scrollTop",
            s = !1;
          return e[n] > 0 ? !0 : ((e[n] = 1), (s = e[n] > 0), (e[n] = 0), s);
        },
        _create: function () {
          var e,
            i,
            n,
            s,
            o,
            r = this,
            a = this.options;
          if (
            (this.element.addClass("ui-resizable"),
            t.extend(this, {
              _aspectRatio: !!a.aspectRatio,
              aspectRatio: a.aspectRatio,
              originalElement: this.element,
              _proportionallyResizeElements: [],
              _helper:
                a.helper || a.ghost || a.animate
                  ? a.helper || "ui-resizable-helper"
                  : null,
            }),
            this.element[0].nodeName.match(
              /canvas|textarea|input|select|button|img/i
            ) &&
              (this.element.wrap(
                t(
                  "<div class='ui-wrapper' style='overflow: hidden;'></div>"
                ).css({
                  position: this.element.css("position"),
                  width: this.element.outerWidth(),
                  height: this.element.outerHeight(),
                  top: this.element.css("top"),
                  left: this.element.css("left"),
                })
              ),
              (this.element = this.element
                .parent()
                .data("ui-resizable", this.element.resizable("instance"))),
              (this.elementIsWrapper = !0),
              this.element.css({
                marginLeft: this.originalElement.css("marginLeft"),
                marginTop: this.originalElement.css("marginTop"),
                marginRight: this.originalElement.css("marginRight"),
                marginBottom: this.originalElement.css("marginBottom"),
              }),
              this.originalElement.css({
                marginLeft: 0,
                marginTop: 0,
                marginRight: 0,
                marginBottom: 0,
              }),
              (this.originalResizeStyle = this.originalElement.css("resize")),
              this.originalElement.css("resize", "none"),
              this._proportionallyResizeElements.push(
                this.originalElement.css({
                  position: "static",
                  zoom: 1,
                  display: "block",
                })
              ),
              this.originalElement.css({
                margin: this.originalElement.css("margin"),
              }),
              this._proportionallyResize()),
            (this.handles =
              a.handles ||
              (t(".ui-resizable-handle", this.element).length
                ? {
                    n: ".ui-resizable-n",
                    e: ".ui-resizable-e",
                    s: ".ui-resizable-s",
                    w: ".ui-resizable-w",
                    se: ".ui-resizable-se",
                    sw: ".ui-resizable-sw",
                    ne: ".ui-resizable-ne",
                    nw: ".ui-resizable-nw",
                  }
                : "e,s,se")),
            this.handles.constructor === String)
          )
            for (
              "all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"),
                e = this.handles.split(","),
                this.handles = {},
                i = 0;
              e.length > i;
              i++
            )
              (n = t.trim(e[i])),
                (o = "ui-resizable-" + n),
                (s = t("<div class='ui-resizable-handle " + o + "'></div>")),
                s.css({ zIndex: a.zIndex }),
                "se" === n &&
                  s.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),
                (this.handles[n] = ".ui-resizable-" + n),
                this.element.append(s);
          (this._renderAxis = function (e) {
            var i, n, s, o;
            e = e || this.element;
            for (i in this.handles)
              this.handles[i].constructor === String &&
                (this.handles[i] = this.element
                  .children(this.handles[i])
                  .first()
                  .show()),
                this.elementIsWrapper &&
                  this.originalElement[0].nodeName.match(
                    /textarea|input|select|button/i
                  ) &&
                  ((n = t(this.handles[i], this.element)),
                  (o = /sw|ne|nw|se|n|s/.test(i)
                    ? n.outerHeight()
                    : n.outerWidth()),
                  (s = [
                    "padding",
                    /ne|nw|n/.test(i)
                      ? "Top"
                      : /se|sw|s/.test(i)
                      ? "Bottom"
                      : /^e$/.test(i)
                      ? "Right"
                      : "Left",
                  ].join("")),
                  e.css(s, o),
                  this._proportionallyResize()),
                t(this.handles[i]).length;
          }),
            this._renderAxis(this.element),
            (this._handles = t(
              ".ui-resizable-handle",
              this.element
            ).disableSelection()),
            this._handles.mouseover(function () {
              r.resizing ||
                (this.className &&
                  (s = this.className.match(
                    /ui-resizable-(se|sw|ne|nw|n|e|s|w)/i
                  )),
                (r.axis = s && s[1] ? s[1] : "se"));
            }),
            a.autoHide &&
              (this._handles.hide(),
              t(this.element)
                .addClass("ui-resizable-autohide")
                .mouseenter(function () {
                  a.disabled ||
                    (t(this).removeClass("ui-resizable-autohide"),
                    r._handles.show());
                })
                .mouseleave(function () {
                  a.disabled ||
                    r.resizing ||
                    (t(this).addClass("ui-resizable-autohide"),
                    r._handles.hide());
                })),
            this._mouseInit();
        },
        _destroy: function () {
          this._mouseDestroy();
          var e,
            i = function (e) {
              t(e)
                .removeClass(
                  "ui-resizable ui-resizable-disabled ui-resizable-resizing"
                )
                .removeData("resizable")
                .removeData("ui-resizable")
                .unbind(".resizable")
                .find(".ui-resizable-handle")
                .remove();
            };
          return (
            this.elementIsWrapper &&
              (i(this.element),
              (e = this.element),
              this.originalElement
                .css({
                  position: e.css("position"),
                  width: e.outerWidth(),
                  height: e.outerHeight(),
                  top: e.css("top"),
                  left: e.css("left"),
                })
                .insertAfter(e),
              e.remove()),
            this.originalElement.css("resize", this.originalResizeStyle),
            i(this.originalElement),
            this
          );
        },
        _mouseCapture: function (e) {
          var i,
            n,
            s = !1;
          for (i in this.handles)
            (n = t(this.handles[i])[0]),
              (n === e.target || t.contains(n, e.target)) && (s = !0);
          return !this.options.disabled && s;
        },
        _mouseStart: function (e) {
          var i,
            n,
            s,
            o = this.options,
            r = this.element;
          return (
            (this.resizing = !0),
            this._renderProxy(),
            (i = this._num(this.helper.css("left"))),
            (n = this._num(this.helper.css("top"))),
            o.containment &&
              ((i += t(o.containment).scrollLeft() || 0),
              (n += t(o.containment).scrollTop() || 0)),
            (this.offset = this.helper.offset()),
            (this.position = { left: i, top: n }),
            (this.size = this._helper
              ? { width: this.helper.width(), height: this.helper.height() }
              : { width: r.width(), height: r.height() }),
            (this.originalSize = this._helper
              ? { width: r.outerWidth(), height: r.outerHeight() }
              : { width: r.width(), height: r.height() }),
            (this.sizeDiff = {
              width: r.outerWidth() - r.width(),
              height: r.outerHeight() - r.height(),
            }),
            (this.originalPosition = { left: i, top: n }),
            (this.originalMousePosition = { left: e.pageX, top: e.pageY }),
            (this.aspectRatio =
              "number" == typeof o.aspectRatio
                ? o.aspectRatio
                : this.originalSize.width / this.originalSize.height || 1),
            (s = t(".ui-resizable-" + this.axis).css("cursor")),
            t("body").css("cursor", "auto" === s ? this.axis + "-resize" : s),
            r.addClass("ui-resizable-resizing"),
            this._propagate("start", e),
            !0
          );
        },
        _mouseDrag: function (e) {
          var i,
            n,
            s = this.originalMousePosition,
            o = this.axis,
            r = e.pageX - s.left || 0,
            a = e.pageY - s.top || 0,
            l = this._change[o];
          return (
            this._updatePrevProperties(),
            l
              ? ((i = l.apply(this, [e, r, a])),
                this._updateVirtualBoundaries(e.shiftKey),
                (this._aspectRatio || e.shiftKey) &&
                  (i = this._updateRatio(i, e)),
                (i = this._respectSize(i, e)),
                this._updateCache(i),
                this._propagate("resize", e),
                (n = this._applyChanges()),
                !this._helper &&
                  this._proportionallyResizeElements.length &&
                  this._proportionallyResize(),
                t.isEmptyObject(n) ||
                  (this._updatePrevProperties(),
                  this._trigger("resize", e, this.ui()),
                  this._applyChanges()),
                !1)
              : !1
          );
        },
        _mouseStop: function (e) {
          this.resizing = !1;
          var i,
            n,
            s,
            o,
            r,
            a,
            l,
            u = this.options,
            h = this;
          return (
            this._helper &&
              ((i = this._proportionallyResizeElements),
              (n = i.length && /textarea/i.test(i[0].nodeName)),
              (s = n && this._hasScroll(i[0], "left") ? 0 : h.sizeDiff.height),
              (o = n ? 0 : h.sizeDiff.width),
              (r = {
                width: h.helper.width() - o,
                height: h.helper.height() - s,
              }),
              (a =
                parseInt(h.element.css("left"), 10) +
                  (h.position.left - h.originalPosition.left) || null),
              (l =
                parseInt(h.element.css("top"), 10) +
                  (h.position.top - h.originalPosition.top) || null),
              u.animate || this.element.css(t.extend(r, { top: l, left: a })),
              h.helper.height(h.size.height),
              h.helper.width(h.size.width),
              this._helper && !u.animate && this._proportionallyResize()),
            t("body").css("cursor", "auto"),
            this.element.removeClass("ui-resizable-resizing"),
            this._propagate("stop", e),
            this._helper && this.helper.remove(),
            !1
          );
        },
        _updatePrevProperties: function () {
          (this.prevPosition = {
            top: this.position.top,
            left: this.position.left,
          }),
            (this.prevSize = {
              width: this.size.width,
              height: this.size.height,
            });
        },
        _applyChanges: function () {
          var t = {};
          return (
            this.position.top !== this.prevPosition.top &&
              (t.top = this.position.top + "px"),
            this.position.left !== this.prevPosition.left &&
              (t.left = this.position.left + "px"),
            this.size.width !== this.prevSize.width &&
              (t.width = this.size.width + "px"),
            this.size.height !== this.prevSize.height &&
              (t.height = this.size.height + "px"),
            this.helper.css(t),
            t
          );
        },
        _updateVirtualBoundaries: function (t) {
          var e,
            i,
            n,
            s,
            o,
            r = this.options;
          (o = {
            minWidth: this._isNumber(r.minWidth) ? r.minWidth : 0,
            maxWidth: this._isNumber(r.maxWidth) ? r.maxWidth : 1 / 0,
            minHeight: this._isNumber(r.minHeight) ? r.minHeight : 0,
            maxHeight: this._isNumber(r.maxHeight) ? r.maxHeight : 1 / 0,
          }),
            (this._aspectRatio || t) &&
              ((e = o.minHeight * this.aspectRatio),
              (n = o.minWidth / this.aspectRatio),
              (i = o.maxHeight * this.aspectRatio),
              (s = o.maxWidth / this.aspectRatio),
              e > o.minWidth && (o.minWidth = e),
              n > o.minHeight && (o.minHeight = n),
              o.maxWidth > i && (o.maxWidth = i),
              o.maxHeight > s && (o.maxHeight = s)),
            (this._vBoundaries = o);
        },
        _updateCache: function (t) {
          (this.offset = this.helper.offset()),
            this._isNumber(t.left) && (this.position.left = t.left),
            this._isNumber(t.top) && (this.position.top = t.top),
            this._isNumber(t.height) && (this.size.height = t.height),
            this._isNumber(t.width) && (this.size.width = t.width);
        },
        _updateRatio: function (t) {
          var e = this.position,
            i = this.size,
            n = this.axis;
          return (
            this._isNumber(t.height)
              ? (t.width = t.height * this.aspectRatio)
              : this._isNumber(t.width) &&
                (t.height = t.width / this.aspectRatio),
            "sw" === n &&
              ((t.left = e.left + (i.width - t.width)), (t.top = null)),
            "nw" === n &&
              ((t.top = e.top + (i.height - t.height)),
              (t.left = e.left + (i.width - t.width))),
            t
          );
        },
        _respectSize: function (t) {
          var e = this._vBoundaries,
            i = this.axis,
            n = this._isNumber(t.width) && e.maxWidth && e.maxWidth < t.width,
            s =
              this._isNumber(t.height) && e.maxHeight && e.maxHeight < t.height,
            o = this._isNumber(t.width) && e.minWidth && e.minWidth > t.width,
            r =
              this._isNumber(t.height) && e.minHeight && e.minHeight > t.height,
            a = this.originalPosition.left + this.originalSize.width,
            l = this.position.top + this.size.height,
            u = /sw|nw|w/.test(i),
            h = /nw|ne|n/.test(i);
          return (
            o && (t.width = e.minWidth),
            r && (t.height = e.minHeight),
            n && (t.width = e.maxWidth),
            s && (t.height = e.maxHeight),
            o && u && (t.left = a - e.minWidth),
            n && u && (t.left = a - e.maxWidth),
            r && h && (t.top = l - e.minHeight),
            s && h && (t.top = l - e.maxHeight),
            t.width || t.height || t.left || !t.top
              ? t.width || t.height || t.top || !t.left || (t.left = null)
              : (t.top = null),
            t
          );
        },
        _getPaddingPlusBorderDimensions: function (t) {
          for (
            var e = 0,
              i = [],
              n = [
                t.css("borderTopWidth"),
                t.css("borderRightWidth"),
                t.css("borderBottomWidth"),
                t.css("borderLeftWidth"),
              ],
              s = [
                t.css("paddingTop"),
                t.css("paddingRight"),
                t.css("paddingBottom"),
                t.css("paddingLeft"),
              ];
            4 > e;
            e++
          )
            (i[e] = parseInt(n[e], 10) || 0), (i[e] += parseInt(s[e], 10) || 0);
          return { height: i[0] + i[2], width: i[1] + i[3] };
        },
        _proportionallyResize: function () {
          if (this._proportionallyResizeElements.length)
            for (
              var t, e = 0, i = this.helper || this.element;
              this._proportionallyResizeElements.length > e;
              e++
            )
              (t = this._proportionallyResizeElements[e]),
                this.outerDimensions ||
                  (this.outerDimensions =
                    this._getPaddingPlusBorderDimensions(t)),
                t.css({
                  height: i.height() - this.outerDimensions.height || 0,
                  width: i.width() - this.outerDimensions.width || 0,
                });
        },
        _renderProxy: function () {
          var e = this.element,
            i = this.options;
          (this.elementOffset = e.offset()),
            this._helper
              ? ((this.helper =
                  this.helper || t("<div style='overflow:hidden;'></div>")),
                this.helper.addClass(this._helper).css({
                  width: this.element.outerWidth() - 1,
                  height: this.element.outerHeight() - 1,
                  position: "absolute",
                  left: this.elementOffset.left + "px",
                  top: this.elementOffset.top + "px",
                  zIndex: ++i.zIndex,
                }),
                this.helper.appendTo("body").disableSelection())
              : (this.helper = this.element);
        },
        _change: {
          e: function (t, e) {
            return { width: this.originalSize.width + e };
          },
          w: function (t, e) {
            var i = this.originalSize,
              n = this.originalPosition;
            return { left: n.left + e, width: i.width - e };
          },
          n: function (t, e, i) {
            var n = this.originalSize,
              s = this.originalPosition;
            return { top: s.top + i, height: n.height - i };
          },
          s: function (t, e, i) {
            return { height: this.originalSize.height + i };
          },
          se: function (e, i, n) {
            return t.extend(
              this._change.s.apply(this, arguments),
              this._change.e.apply(this, [e, i, n])
            );
          },
          sw: function (e, i, n) {
            return t.extend(
              this._change.s.apply(this, arguments),
              this._change.w.apply(this, [e, i, n])
            );
          },
          ne: function (e, i, n) {
            return t.extend(
              this._change.n.apply(this, arguments),
              this._change.e.apply(this, [e, i, n])
            );
          },
          nw: function (e, i, n) {
            return t.extend(
              this._change.n.apply(this, arguments),
              this._change.w.apply(this, [e, i, n])
            );
          },
        },
        _propagate: function (e, i) {
          t.ui.plugin.call(this, e, [i, this.ui()]),
            "resize" !== e && this._trigger(e, i, this.ui());
        },
        plugins: {},
        ui: function () {
          return {
            originalElement: this.originalElement,
            element: this.element,
            helper: this.helper,
            position: this.position,
            size: this.size,
            originalSize: this.originalSize,
            originalPosition: this.originalPosition,
          };
        },
      }),
      t.ui.plugin.add("resizable", "animate", {
        stop: function (e) {
          var i = t(this).resizable("instance"),
            n = i.options,
            s = i._proportionallyResizeElements,
            o = s.length && /textarea/i.test(s[0].nodeName),
            r = o && i._hasScroll(s[0], "left") ? 0 : i.sizeDiff.height,
            a = o ? 0 : i.sizeDiff.width,
            l = { width: i.size.width - a, height: i.size.height - r },
            u =
              parseInt(i.element.css("left"), 10) +
                (i.position.left - i.originalPosition.left) || null,
            h =
              parseInt(i.element.css("top"), 10) +
                (i.position.top - i.originalPosition.top) || null;
          i.element.animate(t.extend(l, h && u ? { top: h, left: u } : {}), {
            duration: n.animateDuration,
            easing: n.animateEasing,
            step: function () {
              var n = {
                width: parseInt(i.element.css("width"), 10),
                height: parseInt(i.element.css("height"), 10),
                top: parseInt(i.element.css("top"), 10),
                left: parseInt(i.element.css("left"), 10),
              };
              s &&
                s.length &&
                t(s[0]).css({ width: n.width, height: n.height }),
                i._updateCache(n),
                i._propagate("resize", e);
            },
          });
        },
      }),
      t.ui.plugin.add("resizable", "containment", {
        start: function () {
          var e,
            i,
            n,
            s,
            o,
            r,
            a,
            l = t(this).resizable("instance"),
            u = l.options,
            h = l.element,
            c = u.containment,
            d =
              c instanceof t
                ? c.get(0)
                : /parent/.test(c)
                ? h.parent().get(0)
                : c;
          d &&
            ((l.containerElement = t(d)),
            /document/.test(c) || c === document
              ? ((l.containerOffset = { left: 0, top: 0 }),
                (l.containerPosition = { left: 0, top: 0 }),
                (l.parentData = {
                  element: t(document),
                  left: 0,
                  top: 0,
                  width: t(document).width(),
                  height:
                    t(document).height() ||
                    document.body.parentNode.scrollHeight,
                }))
              : ((e = t(d)),
                (i = []),
                t(["Top", "Right", "Left", "Bottom"]).each(function (t, n) {
                  i[t] = l._num(e.css("padding" + n));
                }),
                (l.containerOffset = e.offset()),
                (l.containerPosition = e.position()),
                (l.containerSize = {
                  height: e.innerHeight() - i[3],
                  width: e.innerWidth() - i[1],
                }),
                (n = l.containerOffset),
                (s = l.containerSize.height),
                (o = l.containerSize.width),
                (r = l._hasScroll(d, "left") ? d.scrollWidth : o),
                (a = l._hasScroll(d) ? d.scrollHeight : s),
                (l.parentData = {
                  element: d,
                  left: n.left,
                  top: n.top,
                  width: r,
                  height: a,
                })));
        },
        resize: function (e) {
          var i,
            n,
            s,
            o,
            r = t(this).resizable("instance"),
            a = r.options,
            l = r.containerOffset,
            u = r.position,
            h = r._aspectRatio || e.shiftKey,
            c = { top: 0, left: 0 },
            d = r.containerElement,
            p = !0;
          d[0] !== document && /static/.test(d.css("position")) && (c = l),
            u.left < (r._helper ? l.left : 0) &&
              ((r.size.width =
                r.size.width +
                (r._helper
                  ? r.position.left - l.left
                  : r.position.left - c.left)),
              h && ((r.size.height = r.size.width / r.aspectRatio), (p = !1)),
              (r.position.left = a.helper ? l.left : 0)),
            u.top < (r._helper ? l.top : 0) &&
              ((r.size.height =
                r.size.height +
                (r._helper ? r.position.top - l.top : r.position.top)),
              h && ((r.size.width = r.size.height * r.aspectRatio), (p = !1)),
              (r.position.top = r._helper ? l.top : 0)),
            (s = r.containerElement.get(0) === r.element.parent().get(0)),
            (o = /relative|absolute/.test(r.containerElement.css("position"))),
            s && o
              ? ((r.offset.left = r.parentData.left + r.position.left),
                (r.offset.top = r.parentData.top + r.position.top))
              : ((r.offset.left = r.element.offset().left),
                (r.offset.top = r.element.offset().top)),
            (i = Math.abs(
              r.sizeDiff.width +
                (r._helper ? r.offset.left - c.left : r.offset.left - l.left)
            )),
            (n = Math.abs(
              r.sizeDiff.height +
                (r._helper ? r.offset.top - c.top : r.offset.top - l.top)
            )),
            i + r.size.width >= r.parentData.width &&
              ((r.size.width = r.parentData.width - i),
              h && ((r.size.height = r.size.width / r.aspectRatio), (p = !1))),
            n + r.size.height >= r.parentData.height &&
              ((r.size.height = r.parentData.height - n),
              h && ((r.size.width = r.size.height * r.aspectRatio), (p = !1))),
            p ||
              ((r.position.left = r.prevPosition.left),
              (r.position.top = r.prevPosition.top),
              (r.size.width = r.prevSize.width),
              (r.size.height = r.prevSize.height));
        },
        stop: function () {
          var e = t(this).resizable("instance"),
            i = e.options,
            n = e.containerOffset,
            s = e.containerPosition,
            o = e.containerElement,
            r = t(e.helper),
            a = r.offset(),
            l = r.outerWidth() - e.sizeDiff.width,
            u = r.outerHeight() - e.sizeDiff.height;
          e._helper &&
            !i.animate &&
            /relative/.test(o.css("position")) &&
            t(this).css({
              left: a.left - s.left - n.left,
              width: l,
              height: u,
            }),
            e._helper &&
              !i.animate &&
              /static/.test(o.css("position")) &&
              t(this).css({
                left: a.left - s.left - n.left,
                width: l,
                height: u,
              });
        },
      }),
      t.ui.plugin.add("resizable", "alsoResize", {
        start: function () {
          var e = t(this).resizable("instance"),
            i = e.options,
            n = function (e) {
              t(e).each(function () {
                var e = t(this);
                e.data("ui-resizable-alsoresize", {
                  width: parseInt(e.width(), 10),
                  height: parseInt(e.height(), 10),
                  left: parseInt(e.css("left"), 10),
                  top: parseInt(e.css("top"), 10),
                });
              });
            };
          "object" != typeof i.alsoResize || i.alsoResize.parentNode
            ? n(i.alsoResize)
            : i.alsoResize.length
            ? ((i.alsoResize = i.alsoResize[0]), n(i.alsoResize))
            : t.each(i.alsoResize, function (t) {
                n(t);
              });
        },
        resize: function (e, i) {
          var n = t(this).resizable("instance"),
            s = n.options,
            o = n.originalSize,
            r = n.originalPosition,
            a = {
              height: n.size.height - o.height || 0,
              width: n.size.width - o.width || 0,
              top: n.position.top - r.top || 0,
              left: n.position.left - r.left || 0,
            },
            l = function (e, n) {
              t(e).each(function () {
                var e = t(this),
                  s = t(this).data("ui-resizable-alsoresize"),
                  o = {},
                  r =
                    n && n.length
                      ? n
                      : e.parents(i.originalElement[0]).length
                      ? ["width", "height"]
                      : ["width", "height", "top", "left"];
                t.each(r, function (t, e) {
                  var i = (s[e] || 0) + (a[e] || 0);
                  i && i >= 0 && (o[e] = i || null);
                }),
                  e.css(o);
              });
            };
          "object" != typeof s.alsoResize || s.alsoResize.nodeType
            ? l(s.alsoResize)
            : t.each(s.alsoResize, function (t, e) {
                l(t, e);
              });
        },
        stop: function () {
          t(this).removeData("resizable-alsoresize");
        },
      }),
      t.ui.plugin.add("resizable", "ghost", {
        start: function () {
          var e = t(this).resizable("instance"),
            i = e.options,
            n = e.size;
          (e.ghost = e.originalElement.clone()),
            e.ghost
              .css({
                opacity: 0.25,
                display: "block",
                position: "relative",
                height: n.height,
                width: n.width,
                margin: 0,
                left: 0,
                top: 0,
              })
              .addClass("ui-resizable-ghost")
              .addClass("string" == typeof i.ghost ? i.ghost : ""),
            e.ghost.appendTo(e.helper);
        },
        resize: function () {
          var e = t(this).resizable("instance");
          e.ghost &&
            e.ghost.css({
              position: "relative",
              height: e.size.height,
              width: e.size.width,
            });
        },
        stop: function () {
          var e = t(this).resizable("instance");
          e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0));
        },
      }),
      t.ui.plugin.add("resizable", "grid", {
        resize: function () {
          var e,
            i = t(this).resizable("instance"),
            n = i.options,
            s = i.size,
            o = i.originalSize,
            r = i.originalPosition,
            a = i.axis,
            l = "number" == typeof n.grid ? [n.grid, n.grid] : n.grid,
            u = l[0] || 1,
            h = l[1] || 1,
            c = Math.round((s.width - o.width) / u) * u,
            d = Math.round((s.height - o.height) / h) * h,
            p = o.width + c,
            f = o.height + d,
            m = n.maxWidth && p > n.maxWidth,
            g = n.maxHeight && f > n.maxHeight,
            v = n.minWidth && n.minWidth > p,
            y = n.minHeight && n.minHeight > f;
          (n.grid = l),
            v && (p += u),
            y && (f += h),
            m && (p -= u),
            g && (f -= h),
            /^(se|s|e)$/.test(a)
              ? ((i.size.width = p), (i.size.height = f))
              : /^(ne)$/.test(a)
              ? ((i.size.width = p),
                (i.size.height = f),
                (i.position.top = r.top - d))
              : /^(sw)$/.test(a)
              ? ((i.size.width = p),
                (i.size.height = f),
                (i.position.left = r.left - c))
              : ((0 >= f - h || 0 >= p - u) &&
                  (e = i._getPaddingPlusBorderDimensions(this)),
                f - h > 0
                  ? ((i.size.height = f), (i.position.top = r.top - d))
                  : ((f = h - e.height),
                    (i.size.height = f),
                    (i.position.top = r.top + o.height - f)),
                p - u > 0
                  ? ((i.size.width = p), (i.position.left = r.left - c))
                  : ((p = h - e.height),
                    (i.size.width = p),
                    (i.position.left = r.left + o.width - p)));
        },
      }),
      t.ui.resizable,
      t.widget("ui.selectable", t.ui.mouse, {
        version: "1.11.2",
        options: {
          appendTo: "body",
          autoRefresh: !0,
          distance: 0,
          filter: "*",
          tolerance: "touch",
          selected: null,
          selecting: null,
          start: null,
          stop: null,
          unselected: null,
          unselecting: null,
        },
        _create: function () {
          var e,
            i = this;
          this.element.addClass("ui-selectable"),
            (this.dragged = !1),
            (this.refresh = function () {
              (e = t(i.options.filter, i.element[0])),
                e.addClass("ui-selectee"),
                e.each(function () {
                  var e = t(this),
                    i = e.offset();
                  t.data(this, "selectable-item", {
                    element: this,
                    $element: e,
                    left: i.left,
                    top: i.top,
                    right: i.left + e.outerWidth(),
                    bottom: i.top + e.outerHeight(),
                    startselected: !1,
                    selected: e.hasClass("ui-selected"),
                    selecting: e.hasClass("ui-selecting"),
                    unselecting: e.hasClass("ui-unselecting"),
                  });
                });
            }),
            this.refresh(),
            (this.selectees = e.addClass("ui-selectee")),
            this._mouseInit(),
            (this.helper = t("<div class='ui-selectable-helper'></div>"));
        },
        _destroy: function () {
          this.selectees
            .removeClass("ui-selectee")
            .removeData("selectable-item"),
            this.element.removeClass("ui-selectable ui-selectable-disabled"),
            this._mouseDestroy();
        },
        _mouseStart: function (e) {
          var i = this,
            n = this.options;
          (this.opos = [e.pageX, e.pageY]),
            this.options.disabled ||
              ((this.selectees = t(n.filter, this.element[0])),
              this._trigger("start", e),
              t(n.appendTo).append(this.helper),
              this.helper.css({
                left: e.pageX,
                top: e.pageY,
                width: 0,
                height: 0,
              }),
              n.autoRefresh && this.refresh(),
              this.selectees.filter(".ui-selected").each(function () {
                var n = t.data(this, "selectable-item");
                (n.startselected = !0),
                  e.metaKey ||
                    e.ctrlKey ||
                    (n.$element.removeClass("ui-selected"),
                    (n.selected = !1),
                    n.$element.addClass("ui-unselecting"),
                    (n.unselecting = !0),
                    i._trigger("unselecting", e, { unselecting: n.element }));
              }),
              t(e.target)
                .parents()
                .addBack()
                .each(function () {
                  var n,
                    s = t.data(this, "selectable-item");
                  return s
                    ? ((n =
                        (!e.metaKey && !e.ctrlKey) ||
                        !s.$element.hasClass("ui-selected")),
                      s.$element
                        .removeClass(n ? "ui-unselecting" : "ui-selected")
                        .addClass(n ? "ui-selecting" : "ui-unselecting"),
                      (s.unselecting = !n),
                      (s.selecting = n),
                      (s.selected = n),
                      n
                        ? i._trigger("selecting", e, { selecting: s.element })
                        : i._trigger("unselecting", e, {
                            unselecting: s.element,
                          }),
                      !1)
                    : void 0;
                }));
        },
        _mouseDrag: function (e) {
          if (((this.dragged = !0), !this.options.disabled)) {
            var i,
              n = this,
              s = this.options,
              o = this.opos[0],
              r = this.opos[1],
              a = e.pageX,
              l = e.pageY;
            return (
              o > a && ((i = a), (a = o), (o = i)),
              r > l && ((i = l), (l = r), (r = i)),
              this.helper.css({ left: o, top: r, width: a - o, height: l - r }),
              this.selectees.each(function () {
                var i = t.data(this, "selectable-item"),
                  u = !1;
                i &&
                  i.element !== n.element[0] &&
                  ("touch" === s.tolerance
                    ? (u = !(
                        i.left > a ||
                        o > i.right ||
                        i.top > l ||
                        r > i.bottom
                      ))
                    : "fit" === s.tolerance &&
                      (u =
                        i.left > o && a > i.right && i.top > r && l > i.bottom),
                  u
                    ? (i.selected &&
                        (i.$element.removeClass("ui-selected"),
                        (i.selected = !1)),
                      i.unselecting &&
                        (i.$element.removeClass("ui-unselecting"),
                        (i.unselecting = !1)),
                      i.selecting ||
                        (i.$element.addClass("ui-selecting"),
                        (i.selecting = !0),
                        n._trigger("selecting", e, { selecting: i.element })))
                    : (i.selecting &&
                        ((e.metaKey || e.ctrlKey) && i.startselected
                          ? (i.$element.removeClass("ui-selecting"),
                            (i.selecting = !1),
                            i.$element.addClass("ui-selected"),
                            (i.selected = !0))
                          : (i.$element.removeClass("ui-selecting"),
                            (i.selecting = !1),
                            i.startselected &&
                              (i.$element.addClass("ui-unselecting"),
                              (i.unselecting = !0)),
                            n._trigger("unselecting", e, {
                              unselecting: i.element,
                            }))),
                      i.selected &&
                        (e.metaKey ||
                          e.ctrlKey ||
                          i.startselected ||
                          (i.$element.removeClass("ui-selected"),
                          (i.selected = !1),
                          i.$element.addClass("ui-unselecting"),
                          (i.unselecting = !0),
                          n._trigger("unselecting", e, {
                            unselecting: i.element,
                          })))));
              }),
              !1
            );
          }
        },
        _mouseStop: function (e) {
          var i = this;
          return (
            (this.dragged = !1),
            t(".ui-unselecting", this.element[0]).each(function () {
              var n = t.data(this, "selectable-item");
              n.$element.removeClass("ui-unselecting"),
                (n.unselecting = !1),
                (n.startselected = !1),
                i._trigger("unselected", e, { unselected: n.element });
            }),
            t(".ui-selecting", this.element[0]).each(function () {
              var n = t.data(this, "selectable-item");
              n.$element.removeClass("ui-selecting").addClass("ui-selected"),
                (n.selecting = !1),
                (n.selected = !0),
                (n.startselected = !0),
                i._trigger("selected", e, { selected: n.element });
            }),
            this._trigger("stop", e),
            this.helper.remove(),
            !1
          );
        },
      }),
      t.widget("ui.sortable", t.ui.mouse, {
        version: "1.11.2",
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
          appendTo: "parent",
          axis: !1,
          connectWith: !1,
          containment: !1,
          cursor: "auto",
          cursorAt: !1,
          dropOnEmpty: !0,
          forcePlaceholderSize: !1,
          forceHelperSize: !1,
          grid: !1,
          handle: !1,
          helper: "original",
          items: "> *",
          opacity: !1,
          placeholder: !1,
          revert: !1,
          scroll: !0,
          scrollSensitivity: 20,
          scrollSpeed: 20,
          scope: "default",
          tolerance: "intersect",
          zIndex: 1e3,
          activate: null,
          beforeStop: null,
          change: null,
          deactivate: null,
          out: null,
          over: null,
          receive: null,
          remove: null,
          sort: null,
          start: null,
          stop: null,
          update: null,
        },
        _isOverAxis: function (t, e, i) {
          return t >= e && e + i > t;
        },
        _isFloating: function (t) {
          return (
            /left|right/.test(t.css("float")) ||
            /inline|table-cell/.test(t.css("display"))
          );
        },
        _create: function () {
          var t = this.options;
          (this.containerCache = {}),
            this.element.addClass("ui-sortable"),
            this.refresh(),
            (this.floating = this.items.length
              ? "x" === t.axis || this._isFloating(this.items[0].item)
              : !1),
            (this.offset = this.element.offset()),
            this._mouseInit(),
            this._setHandleClassName(),
            (this.ready = !0);
        },
        _setOption: function (t, e) {
          this._super(t, e), "handle" === t && this._setHandleClassName();
        },
        _setHandleClassName: function () {
          this.element
            .find(".ui-sortable-handle")
            .removeClass("ui-sortable-handle"),
            t.each(this.items, function () {
              (this.instance.options.handle
                ? this.item.find(this.instance.options.handle)
                : this.item
              ).addClass("ui-sortable-handle");
            });
        },
        _destroy: function () {
          this.element
            .removeClass("ui-sortable ui-sortable-disabled")
            .find(".ui-sortable-handle")
            .removeClass("ui-sortable-handle"),
            this._mouseDestroy();
          for (var t = this.items.length - 1; t >= 0; t--)
            this.items[t].item.removeData(this.widgetName + "-item");
          return this;
        },
        _mouseCapture: function (e, i) {
          var n = null,
            s = !1,
            o = this;
          return this.reverting
            ? !1
            : this.options.disabled || "static" === this.options.type
            ? !1
            : (this._refreshItems(e),
              t(e.target)
                .parents()
                .each(function () {
                  return t.data(this, o.widgetName + "-item") === o
                    ? ((n = t(this)), !1)
                    : void 0;
                }),
              t.data(e.target, o.widgetName + "-item") === o &&
                (n = t(e.target)),
              n &&
              (!this.options.handle ||
                i ||
                (t(this.options.handle, n)
                  .find("*")
                  .addBack()
                  .each(function () {
                    this === e.target && (s = !0);
                  }),
                s))
                ? ((this.currentItem = n), this._removeCurrentsFromItems(), !0)
                : !1);
        },
        _mouseStart: function (e, i, n) {
          var s,
            o,
            r = this.options;
          if (
            ((this.currentContainer = this),
            this.refreshPositions(),
            (this.helper = this._createHelper(e)),
            this._cacheHelperProportions(),
            this._cacheMargins(),
            (this.scrollParent = this.helper.scrollParent()),
            (this.offset = this.currentItem.offset()),
            (this.offset = {
              top: this.offset.top - this.margins.top,
              left: this.offset.left - this.margins.left,
            }),
            t.extend(this.offset, {
              click: {
                left: e.pageX - this.offset.left,
                top: e.pageY - this.offset.top,
              },
              parent: this._getParentOffset(),
              relative: this._getRelativeOffset(),
            }),
            this.helper.css("position", "absolute"),
            (this.cssPosition = this.helper.css("position")),
            (this.originalPosition = this._generatePosition(e)),
            (this.originalPageX = e.pageX),
            (this.originalPageY = e.pageY),
            r.cursorAt && this._adjustOffsetFromHelper(r.cursorAt),
            (this.domPosition = {
              prev: this.currentItem.prev()[0],
              parent: this.currentItem.parent()[0],
            }),
            this.helper[0] !== this.currentItem[0] && this.currentItem.hide(),
            this._createPlaceholder(),
            r.containment && this._setContainment(),
            r.cursor &&
              "auto" !== r.cursor &&
              ((o = this.document.find("body")),
              (this.storedCursor = o.css("cursor")),
              o.css("cursor", r.cursor),
              (this.storedStylesheet = t(
                "<style>*{ cursor: " + r.cursor + " !important; }</style>"
              ).appendTo(o))),
            r.opacity &&
              (this.helper.css("opacity") &&
                (this._storedOpacity = this.helper.css("opacity")),
              this.helper.css("opacity", r.opacity)),
            r.zIndex &&
              (this.helper.css("zIndex") &&
                (this._storedZIndex = this.helper.css("zIndex")),
              this.helper.css("zIndex", r.zIndex)),
            this.scrollParent[0] !== document &&
              "HTML" !== this.scrollParent[0].tagName &&
              (this.overflowOffset = this.scrollParent.offset()),
            this._trigger("start", e, this._uiHash()),
            this._preserveHelperProportions || this._cacheHelperProportions(),
            !n)
          )
            for (s = this.containers.length - 1; s >= 0; s--)
              this.containers[s]._trigger("activate", e, this._uiHash(this));
          return (
            t.ui.ddmanager && (t.ui.ddmanager.current = this),
            t.ui.ddmanager &&
              !r.dropBehaviour &&
              t.ui.ddmanager.prepareOffsets(this, e),
            (this.dragging = !0),
            this.helper.addClass("ui-sortable-helper"),
            this._mouseDrag(e),
            !0
          );
        },
        _mouseDrag: function (e) {
          var i,
            n,
            s,
            o,
            r = this.options,
            a = !1;
          for (
            this.position = this._generatePosition(e),
              this.positionAbs = this._convertPositionTo("absolute"),
              this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs),
              this.options.scroll &&
                (this.scrollParent[0] !== document &&
                "HTML" !== this.scrollParent[0].tagName
                  ? (this.overflowOffset.top +
                      this.scrollParent[0].offsetHeight -
                      e.pageY <
                    r.scrollSensitivity
                      ? (this.scrollParent[0].scrollTop = a =
                          this.scrollParent[0].scrollTop + r.scrollSpeed)
                      : e.pageY - this.overflowOffset.top <
                          r.scrollSensitivity &&
                        (this.scrollParent[0].scrollTop = a =
                          this.scrollParent[0].scrollTop - r.scrollSpeed),
                    this.overflowOffset.left +
                      this.scrollParent[0].offsetWidth -
                      e.pageX <
                    r.scrollSensitivity
                      ? (this.scrollParent[0].scrollLeft = a =
                          this.scrollParent[0].scrollLeft + r.scrollSpeed)
                      : e.pageX - this.overflowOffset.left <
                          r.scrollSensitivity &&
                        (this.scrollParent[0].scrollLeft = a =
                          this.scrollParent[0].scrollLeft - r.scrollSpeed))
                  : (e.pageY - t(document).scrollTop() < r.scrollSensitivity
                      ? (a = t(document).scrollTop(
                          t(document).scrollTop() - r.scrollSpeed
                        ))
                      : t(window).height() -
                          (e.pageY - t(document).scrollTop()) <
                          r.scrollSensitivity &&
                        (a = t(document).scrollTop(
                          t(document).scrollTop() + r.scrollSpeed
                        )),
                    e.pageX - t(document).scrollLeft() < r.scrollSensitivity
                      ? (a = t(document).scrollLeft(
                          t(document).scrollLeft() - r.scrollSpeed
                        ))
                      : t(window).width() -
                          (e.pageX - t(document).scrollLeft()) <
                          r.scrollSensitivity &&
                        (a = t(document).scrollLeft(
                          t(document).scrollLeft() + r.scrollSpeed
                        ))),
                a !== !1 &&
                  t.ui.ddmanager &&
                  !r.dropBehaviour &&
                  t.ui.ddmanager.prepareOffsets(this, e)),
              this.positionAbs = this._convertPositionTo("absolute"),
              (this.options.axis && "y" === this.options.axis) ||
                (this.helper[0].style.left = this.position.left + "px"),
              (this.options.axis && "x" === this.options.axis) ||
                (this.helper[0].style.top = this.position.top + "px"),
              i = this.items.length - 1;
            i >= 0;
            i--
          )
            if (
              ((n = this.items[i]),
              (s = n.item[0]),
              (o = this._intersectsWithPointer(n)),
              o &&
                n.instance === this.currentContainer &&
                s !== this.currentItem[0] &&
                this.placeholder[1 === o ? "next" : "prev"]()[0] !== s &&
                !t.contains(this.placeholder[0], s) &&
                ("semi-dynamic" === this.options.type
                  ? !t.contains(this.element[0], s)
                  : !0))
            ) {
              if (
                ((this.direction = 1 === o ? "down" : "up"),
                "pointer" !== this.options.tolerance &&
                  !this._intersectsWithSides(n))
              )
                break;
              this._rearrange(e, n), this._trigger("change", e, this._uiHash());
              break;
            }
          return (
            this._contactContainers(e),
            t.ui.ddmanager && t.ui.ddmanager.drag(this, e),
            this._trigger("sort", e, this._uiHash()),
            (this.lastPositionAbs = this.positionAbs),
            !1
          );
        },
        _mouseStop: function (e, i) {
          if (e) {
            if (
              (t.ui.ddmanager &&
                !this.options.dropBehaviour &&
                t.ui.ddmanager.drop(this, e),
              this.options.revert)
            ) {
              var n = this,
                s = this.placeholder.offset(),
                o = this.options.axis,
                r = {};
              (o && "x" !== o) ||
                (r.left =
                  s.left -
                  this.offset.parent.left -
                  this.margins.left +
                  (this.offsetParent[0] === document.body
                    ? 0
                    : this.offsetParent[0].scrollLeft)),
                (o && "y" !== o) ||
                  (r.top =
                    s.top -
                    this.offset.parent.top -
                    this.margins.top +
                    (this.offsetParent[0] === document.body
                      ? 0
                      : this.offsetParent[0].scrollTop)),
                (this.reverting = !0),
                t(this.helper).animate(
                  r,
                  parseInt(this.options.revert, 10) || 500,
                  function () {
                    n._clear(e);
                  }
                );
            } else this._clear(e, i);
            return !1;
          }
        },
        cancel: function () {
          if (this.dragging) {
            this._mouseUp({ target: null }),
              "original" === this.options.helper
                ? this.currentItem
                    .css(this._storedCSS)
                    .removeClass("ui-sortable-helper")
                : this.currentItem.show();
            for (var e = this.containers.length - 1; e >= 0; e--)
              this.containers[e]._trigger(
                "deactivate",
                null,
                this._uiHash(this)
              ),
                this.containers[e].containerCache.over &&
                  (this.containers[e]._trigger("out", null, this._uiHash(this)),
                  (this.containers[e].containerCache.over = 0));
          }
          return (
            this.placeholder &&
              (this.placeholder[0].parentNode &&
                this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
              "original" !== this.options.helper &&
                this.helper &&
                this.helper[0].parentNode &&
                this.helper.remove(),
              t.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null,
              }),
              this.domPosition.prev
                ? t(this.domPosition.prev).after(this.currentItem)
                : t(this.domPosition.parent).prepend(this.currentItem)),
            this
          );
        },
        serialize: function (e) {
          var i = this._getItemsAsjQuery(e && e.connected),
            n = [];
          return (
            (e = e || {}),
            t(i).each(function () {
              var i = (t(e.item || this).attr(e.attribute || "id") || "").match(
                e.expression || /(.+)[\-=_](.+)/
              );
              i &&
                n.push(
                  (e.key || i[1] + "[]") +
                    "=" +
                    (e.key && e.expression ? i[1] : i[2])
                );
            }),
            !n.length && e.key && n.push(e.key + "="),
            n.join("&")
          );
        },
        toArray: function (e) {
          var i = this._getItemsAsjQuery(e && e.connected),
            n = [];
          return (
            (e = e || {}),
            i.each(function () {
              n.push(t(e.item || this).attr(e.attribute || "id") || "");
            }),
            n
          );
        },
        _intersectsWith: function (t) {
          var e = this.positionAbs.left,
            i = e + this.helperProportions.width,
            n = this.positionAbs.top,
            s = n + this.helperProportions.height,
            o = t.left,
            r = o + t.width,
            a = t.top,
            l = a + t.height,
            u = this.offset.click.top,
            h = this.offset.click.left,
            c = "x" === this.options.axis || (n + u > a && l > n + u),
            d = "y" === this.options.axis || (e + h > o && r > e + h),
            p = c && d;
          return "pointer" === this.options.tolerance ||
            this.options.forcePointerForContainers ||
            ("pointer" !== this.options.tolerance &&
              this.helperProportions[this.floating ? "width" : "height"] >
                t[this.floating ? "width" : "height"])
            ? p
            : e + this.helperProportions.width / 2 > o &&
                r > i - this.helperProportions.width / 2 &&
                n + this.helperProportions.height / 2 > a &&
                l > s - this.helperProportions.height / 2;
        },
        _intersectsWithPointer: function (t) {
          var e =
              "x" === this.options.axis ||
              this._isOverAxis(
                this.positionAbs.top + this.offset.click.top,
                t.top,
                t.height
              ),
            i =
              "y" === this.options.axis ||
              this._isOverAxis(
                this.positionAbs.left + this.offset.click.left,
                t.left,
                t.width
              ),
            n = e && i,
            s = this._getDragVerticalDirection(),
            o = this._getDragHorizontalDirection();
          return n
            ? this.floating
              ? (o && "right" === o) || "down" === s
                ? 2
                : 1
              : s && ("down" === s ? 2 : 1)
            : !1;
        },
        _intersectsWithSides: function (t) {
          var e = this._isOverAxis(
              this.positionAbs.top + this.offset.click.top,
              t.top + t.height / 2,
              t.height
            ),
            i = this._isOverAxis(
              this.positionAbs.left + this.offset.click.left,
              t.left + t.width / 2,
              t.width
            ),
            n = this._getDragVerticalDirection(),
            s = this._getDragHorizontalDirection();
          return this.floating && s
            ? ("right" === s && i) || ("left" === s && !i)
            : n && (("down" === n && e) || ("up" === n && !e));
        },
        _getDragVerticalDirection: function () {
          var t = this.positionAbs.top - this.lastPositionAbs.top;
          return 0 !== t && (t > 0 ? "down" : "up");
        },
        _getDragHorizontalDirection: function () {
          var t = this.positionAbs.left - this.lastPositionAbs.left;
          return 0 !== t && (t > 0 ? "right" : "left");
        },
        refresh: function (t) {
          return (
            this._refreshItems(t),
            this._setHandleClassName(),
            this.refreshPositions(),
            this
          );
        },
        _connectWith: function () {
          var t = this.options;
          return t.connectWith.constructor === String
            ? [t.connectWith]
            : t.connectWith;
        },
        _getItemsAsjQuery: function (e) {
          function i() {
            a.push(this);
          }
          var n,
            s,
            o,
            r,
            a = [],
            l = [],
            u = this._connectWith();
          if (u && e)
            for (n = u.length - 1; n >= 0; n--)
              for (o = t(u[n]), s = o.length - 1; s >= 0; s--)
                (r = t.data(o[s], this.widgetFullName)),
                  r &&
                    r !== this &&
                    !r.options.disabled &&
                    l.push([
                      t.isFunction(r.options.items)
                        ? r.options.items.call(r.element)
                        : t(r.options.items, r.element)
                            .not(".ui-sortable-helper")
                            .not(".ui-sortable-placeholder"),
                      r,
                    ]);
          for (
            l.push([
              t.isFunction(this.options.items)
                ? this.options.items.call(this.element, null, {
                    options: this.options,
                    item: this.currentItem,
                  })
                : t(this.options.items, this.element)
                    .not(".ui-sortable-helper")
                    .not(".ui-sortable-placeholder"),
              this,
            ]),
              n = l.length - 1;
            n >= 0;
            n--
          )
            l[n][0].each(i);
          return t(a);
        },
        _removeCurrentsFromItems: function () {
          var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
          this.items = t.grep(this.items, function (t) {
            for (var i = 0; e.length > i; i++)
              if (e[i] === t.item[0]) return !1;
            return !0;
          });
        },
        _refreshItems: function (e) {
          (this.items = []), (this.containers = [this]);
          var i,
            n,
            s,
            o,
            r,
            a,
            l,
            u,
            h = this.items,
            c = [
              [
                t.isFunction(this.options.items)
                  ? this.options.items.call(this.element[0], e, {
                      item: this.currentItem,
                    })
                  : t(this.options.items, this.element),
                this,
              ],
            ],
            d = this._connectWith();
          if (d && this.ready)
            for (i = d.length - 1; i >= 0; i--)
              for (s = t(d[i]), n = s.length - 1; n >= 0; n--)
                (o = t.data(s[n], this.widgetFullName)),
                  o &&
                    o !== this &&
                    !o.options.disabled &&
                    (c.push([
                      t.isFunction(o.options.items)
                        ? o.options.items.call(o.element[0], e, {
                            item: this.currentItem,
                          })
                        : t(o.options.items, o.element),
                      o,
                    ]),
                    this.containers.push(o));
          for (i = c.length - 1; i >= 0; i--)
            for (r = c[i][1], a = c[i][0], n = 0, u = a.length; u > n; n++)
              (l = t(a[n])),
                l.data(this.widgetName + "-item", r),
                h.push({
                  item: l,
                  instance: r,
                  width: 0,
                  height: 0,
                  left: 0,
                  top: 0,
                });
        },
        refreshPositions: function (e) {
          this.offsetParent &&
            this.helper &&
            (this.offset.parent = this._getParentOffset());
          var i, n, s, o;
          for (i = this.items.length - 1; i >= 0; i--)
            (n = this.items[i]),
              (n.instance !== this.currentContainer &&
                this.currentContainer &&
                n.item[0] !== this.currentItem[0]) ||
                ((s = this.options.toleranceElement
                  ? t(this.options.toleranceElement, n.item)
                  : n.item),
                e || ((n.width = s.outerWidth()), (n.height = s.outerHeight())),
                (o = s.offset()),
                (n.left = o.left),
                (n.top = o.top));
          if (this.options.custom && this.options.custom.refreshContainers)
            this.options.custom.refreshContainers.call(this);
          else
            for (i = this.containers.length - 1; i >= 0; i--)
              (o = this.containers[i].element.offset()),
                (this.containers[i].containerCache.left = o.left),
                (this.containers[i].containerCache.top = o.top),
                (this.containers[i].containerCache.width =
                  this.containers[i].element.outerWidth()),
                (this.containers[i].containerCache.height =
                  this.containers[i].element.outerHeight());
          return this;
        },
        _createPlaceholder: function (e) {
          e = e || this;
          var i,
            n = e.options;
          (n.placeholder && n.placeholder.constructor !== String) ||
            ((i = n.placeholder),
            (n.placeholder = {
              element: function () {
                var n = e.currentItem[0].nodeName.toLowerCase(),
                  s = t("<" + n + ">", e.document[0])
                    .addClass(
                      i ||
                        e.currentItem[0].className + " ui-sortable-placeholder"
                    )
                    .removeClass("ui-sortable-helper");
                return (
                  "tr" === n
                    ? e.currentItem.children().each(function () {
                        t("<td>&#160;</td>", e.document[0])
                          .attr("colspan", t(this).attr("colspan") || 1)
                          .appendTo(s);
                      })
                    : "img" === n && s.attr("src", e.currentItem.attr("src")),
                  i || s.css("visibility", "hidden"),
                  s
                );
              },
              update: function (t, s) {
                (!i || n.forcePlaceholderSize) &&
                  (s.height() ||
                    s.height(
                      e.currentItem.innerHeight() -
                        parseInt(e.currentItem.css("paddingTop") || 0, 10) -
                        parseInt(e.currentItem.css("paddingBottom") || 0, 10)
                    ),
                  s.width() ||
                    s.width(
                      e.currentItem.innerWidth() -
                        parseInt(e.currentItem.css("paddingLeft") || 0, 10) -
                        parseInt(e.currentItem.css("paddingRight") || 0, 10)
                    ));
              },
            })),
            (e.placeholder = t(
              n.placeholder.element.call(e.element, e.currentItem)
            )),
            e.currentItem.after(e.placeholder),
            n.placeholder.update(e, e.placeholder);
        },
        _contactContainers: function (e) {
          var i,
            n,
            s,
            o,
            r,
            a,
            l,
            u,
            h,
            c,
            d = null,
            p = null;
          for (i = this.containers.length - 1; i >= 0; i--)
            if (!t.contains(this.currentItem[0], this.containers[i].element[0]))
              if (this._intersectsWith(this.containers[i].containerCache)) {
                if (
                  d &&
                  t.contains(this.containers[i].element[0], d.element[0])
                )
                  continue;
                (d = this.containers[i]), (p = i);
              } else
                this.containers[i].containerCache.over &&
                  (this.containers[i]._trigger("out", e, this._uiHash(this)),
                  (this.containers[i].containerCache.over = 0));
          if (d)
            if (1 === this.containers.length)
              this.containers[p].containerCache.over ||
                (this.containers[p]._trigger("over", e, this._uiHash(this)),
                (this.containers[p].containerCache.over = 1));
            else {
              for (
                s = 1e4,
                  o = null,
                  h = d.floating || this._isFloating(this.currentItem),
                  r = h ? "left" : "top",
                  a = h ? "width" : "height",
                  c = h ? "clientX" : "clientY",
                  n = this.items.length - 1;
                n >= 0;
                n--
              )
                t.contains(
                  this.containers[p].element[0],
                  this.items[n].item[0]
                ) &&
                  this.items[n].item[0] !== this.currentItem[0] &&
                  ((l = this.items[n].item.offset()[r]),
                  (u = !1),
                  e[c] - l > this.items[n][a] / 2 && (u = !0),
                  s > Math.abs(e[c] - l) &&
                    ((s = Math.abs(e[c] - l)),
                    (o = this.items[n]),
                    (this.direction = u ? "up" : "down")));
              if (!o && !this.options.dropOnEmpty) return;
              if (this.currentContainer === this.containers[p])
                return void (
                  this.currentContainer.containerCache.over ||
                  (this.containers[p]._trigger("over", e, this._uiHash()),
                  (this.currentContainer.containerCache.over = 1))
                );
              o
                ? this._rearrange(e, o, null, !0)
                : this._rearrange(e, null, this.containers[p].element, !0),
                this._trigger("change", e, this._uiHash()),
                this.containers[p]._trigger("change", e, this._uiHash(this)),
                (this.currentContainer = this.containers[p]),
                this.options.placeholder.update(
                  this.currentContainer,
                  this.placeholder
                ),
                this.containers[p]._trigger("over", e, this._uiHash(this)),
                (this.containers[p].containerCache.over = 1);
            }
        },
        _createHelper: function (e) {
          var i = this.options,
            n = t.isFunction(i.helper)
              ? t(i.helper.apply(this.element[0], [e, this.currentItem]))
              : "clone" === i.helper
              ? this.currentItem.clone()
              : this.currentItem;
          return (
            n.parents("body").length ||
              t(
                "parent" !== i.appendTo
                  ? i.appendTo
                  : this.currentItem[0].parentNode
              )[0].appendChild(n[0]),
            n[0] === this.currentItem[0] &&
              (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left"),
              }),
            (!n[0].style.width || i.forceHelperSize) &&
              n.width(this.currentItem.width()),
            (!n[0].style.height || i.forceHelperSize) &&
              n.height(this.currentItem.height()),
            n
          );
        },
        _adjustOffsetFromHelper: function (e) {
          "string" == typeof e && (e = e.split(" ")),
            t.isArray(e) && (e = { left: +e[0], top: +e[1] || 0 }),
            "left" in e &&
              (this.offset.click.left = e.left + this.margins.left),
            "right" in e &&
              (this.offset.click.left =
                this.helperProportions.width - e.right + this.margins.left),
            "top" in e && (this.offset.click.top = e.top + this.margins.top),
            "bottom" in e &&
              (this.offset.click.top =
                this.helperProportions.height - e.bottom + this.margins.top);
        },
        _getParentOffset: function () {
          this.offsetParent = this.helper.offsetParent();
          var e = this.offsetParent.offset();
          return (
            "absolute" === this.cssPosition &&
              this.scrollParent[0] !== document &&
              t.contains(this.scrollParent[0], this.offsetParent[0]) &&
              ((e.left += this.scrollParent.scrollLeft()),
              (e.top += this.scrollParent.scrollTop())),
            (this.offsetParent[0] === document.body ||
              (this.offsetParent[0].tagName &&
                "html" === this.offsetParent[0].tagName.toLowerCase() &&
                t.ui.ie)) &&
              (e = { top: 0, left: 0 }),
            {
              top:
                e.top +
                (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
              left:
                e.left +
                (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0),
            }
          );
        },
        _getRelativeOffset: function () {
          if ("relative" === this.cssPosition) {
            var t = this.currentItem.position();
            return {
              top:
                t.top -
                (parseInt(this.helper.css("top"), 10) || 0) +
                this.scrollParent.scrollTop(),
              left:
                t.left -
                (parseInt(this.helper.css("left"), 10) || 0) +
                this.scrollParent.scrollLeft(),
            };
          }
          return { top: 0, left: 0 };
        },
        _cacheMargins: function () {
          this.margins = {
            left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
            top: parseInt(this.currentItem.css("marginTop"), 10) || 0,
          };
        },
        _cacheHelperProportions: function () {
          this.helperProportions = {
            width: this.helper.outerWidth(),
            height: this.helper.outerHeight(),
          };
        },
        _setContainment: function () {
          var e,
            i,
            n,
            s = this.options;
          "parent" === s.containment &&
            (s.containment = this.helper[0].parentNode),
            ("document" === s.containment || "window" === s.containment) &&
              (this.containment = [
                0 - this.offset.relative.left - this.offset.parent.left,
                0 - this.offset.relative.top - this.offset.parent.top,
                t("document" === s.containment ? document : window).width() -
                  this.helperProportions.width -
                  this.margins.left,
                (t("document" === s.containment ? document : window).height() ||
                  document.body.parentNode.scrollHeight) -
                  this.helperProportions.height -
                  this.margins.top,
              ]),
            /^(document|window|parent)$/.test(s.containment) ||
              ((e = t(s.containment)[0]),
              (i = t(s.containment).offset()),
              (n = "hidden" !== t(e).css("overflow")),
              (this.containment = [
                i.left +
                  (parseInt(t(e).css("borderLeftWidth"), 10) || 0) +
                  (parseInt(t(e).css("paddingLeft"), 10) || 0) -
                  this.margins.left,
                i.top +
                  (parseInt(t(e).css("borderTopWidth"), 10) || 0) +
                  (parseInt(t(e).css("paddingTop"), 10) || 0) -
                  this.margins.top,
                i.left +
                  (n ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) -
                  (parseInt(t(e).css("borderLeftWidth"), 10) || 0) -
                  (parseInt(t(e).css("paddingRight"), 10) || 0) -
                  this.helperProportions.width -
                  this.margins.left,
                i.top +
                  (n
                    ? Math.max(e.scrollHeight, e.offsetHeight)
                    : e.offsetHeight) -
                  (parseInt(t(e).css("borderTopWidth"), 10) || 0) -
                  (parseInt(t(e).css("paddingBottom"), 10) || 0) -
                  this.helperProportions.height -
                  this.margins.top,
              ]));
        },
        _convertPositionTo: function (e, i) {
          i || (i = this.position);
          var n = "absolute" === e ? 1 : -1,
            s =
              "absolute" !== this.cssPosition ||
              (this.scrollParent[0] !== document &&
                t.contains(this.scrollParent[0], this.offsetParent[0]))
                ? this.scrollParent
                : this.offsetParent,
            o = /(html|body)/i.test(s[0].tagName);
          return {
            top:
              i.top +
              this.offset.relative.top * n +
              this.offset.parent.top * n -
              ("fixed" === this.cssPosition
                ? -this.scrollParent.scrollTop()
                : o
                ? 0
                : s.scrollTop()) *
                n,
            left:
              i.left +
              this.offset.relative.left * n +
              this.offset.parent.left * n -
              ("fixed" === this.cssPosition
                ? -this.scrollParent.scrollLeft()
                : o
                ? 0
                : s.scrollLeft()) *
                n,
          };
        },
        _generatePosition: function (e) {
          var i,
            n,
            s = this.options,
            o = e.pageX,
            r = e.pageY,
            a =
              "absolute" !== this.cssPosition ||
              (this.scrollParent[0] !== document &&
                t.contains(this.scrollParent[0], this.offsetParent[0]))
                ? this.scrollParent
                : this.offsetParent,
            l = /(html|body)/i.test(a[0].tagName);
          return (
            "relative" !== this.cssPosition ||
              (this.scrollParent[0] !== document &&
                this.scrollParent[0] !== this.offsetParent[0]) ||
              (this.offset.relative = this._getRelativeOffset()),
            this.originalPosition &&
              (this.containment &&
                (e.pageX - this.offset.click.left < this.containment[0] &&
                  (o = this.containment[0] + this.offset.click.left),
                e.pageY - this.offset.click.top < this.containment[1] &&
                  (r = this.containment[1] + this.offset.click.top),
                e.pageX - this.offset.click.left > this.containment[2] &&
                  (o = this.containment[2] + this.offset.click.left),
                e.pageY - this.offset.click.top > this.containment[3] &&
                  (r = this.containment[3] + this.offset.click.top)),
              s.grid &&
                ((i =
                  this.originalPageY +
                  Math.round((r - this.originalPageY) / s.grid[1]) * s.grid[1]),
                (r = this.containment
                  ? i - this.offset.click.top >= this.containment[1] &&
                    i - this.offset.click.top <= this.containment[3]
                    ? i
                    : i - this.offset.click.top >= this.containment[1]
                    ? i - s.grid[1]
                    : i + s.grid[1]
                  : i),
                (n =
                  this.originalPageX +
                  Math.round((o - this.originalPageX) / s.grid[0]) * s.grid[0]),
                (o = this.containment
                  ? n - this.offset.click.left >= this.containment[0] &&
                    n - this.offset.click.left <= this.containment[2]
                    ? n
                    : n - this.offset.click.left >= this.containment[0]
                    ? n - s.grid[0]
                    : n + s.grid[0]
                  : n))),
            {
              top:
                r -
                this.offset.click.top -
                this.offset.relative.top -
                this.offset.parent.top +
                ("fixed" === this.cssPosition
                  ? -this.scrollParent.scrollTop()
                  : l
                  ? 0
                  : a.scrollTop()),
              left:
                o -
                this.offset.click.left -
                this.offset.relative.left -
                this.offset.parent.left +
                ("fixed" === this.cssPosition
                  ? -this.scrollParent.scrollLeft()
                  : l
                  ? 0
                  : a.scrollLeft()),
            }
          );
        },
        _rearrange: function (t, e, i, n) {
          i
            ? i[0].appendChild(this.placeholder[0])
            : e.item[0].parentNode.insertBefore(
                this.placeholder[0],
                "down" === this.direction ? e.item[0] : e.item[0].nextSibling
              ),
            (this.counter = this.counter ? ++this.counter : 1);
          var s = this.counter;
          this._delay(function () {
            s === this.counter && this.refreshPositions(!n);
          });
        },
        _clear: function (t, e) {
          function i(t, e, i) {
            return function (n) {
              i._trigger(t, n, e._uiHash(e));
            };
          }
          this.reverting = !1;
          var n,
            s = [];
          if (
            (!this._noFinalSort &&
              this.currentItem.parent().length &&
              this.placeholder.before(this.currentItem),
            (this._noFinalSort = null),
            this.helper[0] === this.currentItem[0])
          ) {
            for (n in this._storedCSS)
              ("auto" === this._storedCSS[n] ||
                "static" === this._storedCSS[n]) &&
                (this._storedCSS[n] = "");
            this.currentItem
              .css(this._storedCSS)
              .removeClass("ui-sortable-helper");
          } else this.currentItem.show();
          for (
            this.fromOutside &&
              !e &&
              s.push(function (t) {
                this._trigger("receive", t, this._uiHash(this.fromOutside));
              }),
              (!this.fromOutside &&
                this.domPosition.prev ===
                  this.currentItem.prev().not(".ui-sortable-helper")[0] &&
                this.domPosition.parent === this.currentItem.parent()[0]) ||
                e ||
                s.push(function (t) {
                  this._trigger("update", t, this._uiHash());
                }),
              this !== this.currentContainer &&
                (e ||
                  (s.push(function (t) {
                    this._trigger("remove", t, this._uiHash());
                  }),
                  s.push(
                    function (t) {
                      return function (e) {
                        t._trigger("receive", e, this._uiHash(this));
                      };
                    }.call(this, this.currentContainer)
                  ),
                  s.push(
                    function (t) {
                      return function (e) {
                        t._trigger("update", e, this._uiHash(this));
                      };
                    }.call(this, this.currentContainer)
                  ))),
              n = this.containers.length - 1;
            n >= 0;
            n--
          )
            e || s.push(i("deactivate", this, this.containers[n])),
              this.containers[n].containerCache.over &&
                (s.push(i("out", this, this.containers[n])),
                (this.containers[n].containerCache.over = 0));
          if (
            (this.storedCursor &&
              (this.document.find("body").css("cursor", this.storedCursor),
              this.storedStylesheet.remove()),
            this._storedOpacity &&
              this.helper.css("opacity", this._storedOpacity),
            this._storedZIndex &&
              this.helper.css(
                "zIndex",
                "auto" === this._storedZIndex ? "" : this._storedZIndex
              ),
            (this.dragging = !1),
            e || this._trigger("beforeStop", t, this._uiHash()),
            this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
            this.cancelHelperRemoval ||
              (this.helper[0] !== this.currentItem[0] && this.helper.remove(),
              (this.helper = null)),
            !e)
          ) {
            for (n = 0; s.length > n; n++) s[n].call(this, t);
            this._trigger("stop", t, this._uiHash());
          }
          return (this.fromOutside = !1), !this.cancelHelperRemoval;
        },
        _trigger: function () {
          t.Widget.prototype._trigger.apply(this, arguments) === !1 &&
            this.cancel();
        },
        _uiHash: function (e) {
          var i = e || this;
          return {
            helper: i.helper,
            placeholder: i.placeholder || t([]),
            position: i.position,
            originalPosition: i.originalPosition,
            offset: i.positionAbs,
            item: i.currentItem,
            sender: e ? e.element : null,
          };
        },
      }),
      t.widget("ui.accordion", {
        version: "1.11.2",
        options: {
          active: 0,
          animate: {},
          collapsible: !1,
          event: "click",
          header: "> li > :first-child,> :not(li):even",
          heightStyle: "auto",
          icons: {
            activeHeader: "ui-icon-triangle-1-s",
            header: "ui-icon-triangle-1-e",
          },
          activate: null,
          beforeActivate: null,
        },
        hideProps: {
          borderTopWidth: "hide",
          borderBottomWidth: "hide",
          paddingTop: "hide",
          paddingBottom: "hide",
          height: "hide",
        },
        showProps: {
          borderTopWidth: "show",
          borderBottomWidth: "show",
          paddingTop: "show",
          paddingBottom: "show",
          height: "show",
        },
        _create: function () {
          var e = this.options;
          (this.prevShow = this.prevHide = t()),
            this.element
              .addClass("ui-accordion ui-widget ui-helper-reset")
              .attr("role", "tablist"),
            e.collapsible ||
              (e.active !== !1 && null != e.active) ||
              (e.active = 0),
            this._processPanels(),
            0 > e.active && (e.active += this.headers.length),
            this._refresh();
        },
        _getCreateEventData: function () {
          return {
            header: this.active,
            panel: this.active.length ? this.active.next() : t(),
          };
        },
        _createIcons: function () {
          var e = this.options.icons;
          e &&
            (t("<span>")
              .addClass("ui-accordion-header-icon ui-icon " + e.header)
              .prependTo(this.headers),
            this.active
              .children(".ui-accordion-header-icon")
              .removeClass(e.header)
              .addClass(e.activeHeader),
            this.headers.addClass("ui-accordion-icons"));
        },
        _destroyIcons: function () {
          this.headers
            .removeClass("ui-accordion-icons")
            .children(".ui-accordion-header-icon")
            .remove();
        },
        _destroy: function () {
          var t;
          this.element
            .removeClass("ui-accordion ui-widget ui-helper-reset")
            .removeAttr("role"),
            this.headers
              .removeClass(
                "ui-accordion-header ui-accordion-header-active ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top"
              )
              .removeAttr("role")
              .removeAttr("aria-expanded")
              .removeAttr("aria-selected")
              .removeAttr("aria-controls")
              .removeAttr("tabIndex")
              .removeUniqueId(),
            this._destroyIcons(),
            (t = this.headers
              .next()
              .removeClass(
                "ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled"
              )
              .css("display", "")
              .removeAttr("role")
              .removeAttr("aria-hidden")
              .removeAttr("aria-labelledby")
              .removeUniqueId()),
            "content" !== this.options.heightStyle && t.css("height", "");
        },
        _setOption: function (t, e) {
          return "active" === t
            ? void this._activate(e)
            : ("event" === t &&
                (this.options.event &&
                  this._off(this.headers, this.options.event),
                this._setupEvents(e)),
              this._super(t, e),
              "collapsible" !== t ||
                e ||
                this.options.active !== !1 ||
                this._activate(0),
              "icons" === t && (this._destroyIcons(), e && this._createIcons()),
              void (
                "disabled" === t &&
                (this.element
                  .toggleClass("ui-state-disabled", !!e)
                  .attr("aria-disabled", e),
                this.headers
                  .add(this.headers.next())
                  .toggleClass("ui-state-disabled", !!e))
              ));
        },
        _keydown: function (e) {
          if (!e.altKey && !e.ctrlKey) {
            var i = t.ui.keyCode,
              n = this.headers.length,
              s = this.headers.index(e.target),
              o = !1;
            switch (e.keyCode) {
              case i.RIGHT:
              case i.DOWN:
                o = this.headers[(s + 1) % n];
                break;
              case i.LEFT:
              case i.UP:
                o = this.headers[(s - 1 + n) % n];
                break;
              case i.SPACE:
              case i.ENTER:
                this._eventHandler(e);
                break;
              case i.HOME:
                o = this.headers[0];
                break;
              case i.END:
                o = this.headers[n - 1];
            }
            o &&
              (t(e.target).attr("tabIndex", -1),
              t(o).attr("tabIndex", 0),
              o.focus(),
              e.preventDefault());
          }
        },
        _panelKeyDown: function (e) {
          e.keyCode === t.ui.keyCode.UP &&
            e.ctrlKey &&
            t(e.currentTarget).prev().focus();
        },
        refresh: function () {
          var e = this.options;
          this._processPanels(),
            (e.active === !1 && e.collapsible === !0) || !this.headers.length
              ? ((e.active = !1), (this.active = t()))
              : e.active === !1
              ? this._activate(0)
              : this.active.length &&
                !t.contains(this.element[0], this.active[0])
              ? this.headers.length ===
                this.headers.find(".ui-state-disabled").length
                ? ((e.active = !1), (this.active = t()))
                : this._activate(Math.max(0, e.active - 1))
              : (e.active = this.headers.index(this.active)),
            this._destroyIcons(),
            this._refresh();
        },
        _processPanels: function () {
          var t = this.headers,
            e = this.panels;
          (this.headers = this.element
            .find(this.options.header)
            .addClass("ui-accordion-header ui-state-default ui-corner-all")),
            (this.panels = this.headers
              .next()
              .addClass(
                "ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"
              )
              .filter(":not(.ui-accordion-content-active)")
              .hide()),
            e &&
              (this._off(t.not(this.headers)), this._off(e.not(this.panels)));
        },
        _refresh: function () {
          var e,
            i = this.options,
            n = i.heightStyle,
            s = this.element.parent();
          (this.active = this._findActive(i.active)
            .addClass(
              "ui-accordion-header-active ui-state-active ui-corner-top"
            )
            .removeClass("ui-corner-all")),
            this.active.next().addClass("ui-accordion-content-active").show(),
            this.headers
              .attr("role", "tab")
              .each(function () {
                var e = t(this),
                  i = e.uniqueId().attr("id"),
                  n = e.next(),
                  s = n.uniqueId().attr("id");
                e.attr("aria-controls", s), n.attr("aria-labelledby", i);
              })
              .next()
              .attr("role", "tabpanel"),
            this.headers
              .not(this.active)
              .attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1,
              })
              .next()
              .attr({ "aria-hidden": "true" })
              .hide(),
            this.active.length
              ? this.active
                  .attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0,
                  })
                  .next()
                  .attr({ "aria-hidden": "false" })
              : this.headers.eq(0).attr("tabIndex", 0),
            this._createIcons(),
            this._setupEvents(i.event),
            "fill" === n
              ? ((e = s.height()),
                this.element.siblings(":visible").each(function () {
                  var i = t(this),
                    n = i.css("position");
                  "absolute" !== n && "fixed" !== n && (e -= i.outerHeight(!0));
                }),
                this.headers.each(function () {
                  e -= t(this).outerHeight(!0);
                }),
                this.headers
                  .next()
                  .each(function () {
                    t(this).height(
                      Math.max(0, e - t(this).innerHeight() + t(this).height())
                    );
                  })
                  .css("overflow", "auto"))
              : "auto" === n &&
                ((e = 0),
                this.headers
                  .next()
                  .each(function () {
                    e = Math.max(e, t(this).css("height", "").height());
                  })
                  .height(e));
        },
        _activate: function (e) {
          var i = this._findActive(e)[0];
          i !== this.active[0] &&
            ((i = i || this.active[0]),
            this._eventHandler({
              target: i,
              currentTarget: i,
              preventDefault: t.noop,
            }));
        },
        _findActive: function (e) {
          return "number" == typeof e ? this.headers.eq(e) : t();
        },
        _setupEvents: function (e) {
          var i = { keydown: "_keydown" };
          e &&
            t.each(e.split(" "), function (t, e) {
              i[e] = "_eventHandler";
            }),
            this._off(this.headers.add(this.headers.next())),
            this._on(this.headers, i),
            this._on(this.headers.next(), { keydown: "_panelKeyDown" }),
            this._hoverable(this.headers),
            this._focusable(this.headers);
        },
        _eventHandler: function (e) {
          var i = this.options,
            n = this.active,
            s = t(e.currentTarget),
            o = s[0] === n[0],
            r = o && i.collapsible,
            a = r ? t() : s.next(),
            l = n.next(),
            u = {
              oldHeader: n,
              oldPanel: l,
              newHeader: r ? t() : s,
              newPanel: a,
            };
          e.preventDefault(),
            (o && !i.collapsible) ||
              this._trigger("beforeActivate", e, u) === !1 ||
              ((i.active = r ? !1 : this.headers.index(s)),
              (this.active = o ? t() : s),
              this._toggle(u),
              n.removeClass("ui-accordion-header-active ui-state-active"),
              i.icons &&
                n
                  .children(".ui-accordion-header-icon")
                  .removeClass(i.icons.activeHeader)
                  .addClass(i.icons.header),
              o ||
                (s
                  .removeClass("ui-corner-all")
                  .addClass(
                    "ui-accordion-header-active ui-state-active ui-corner-top"
                  ),
                i.icons &&
                  s
                    .children(".ui-accordion-header-icon")
                    .removeClass(i.icons.header)
                    .addClass(i.icons.activeHeader),
                s.next().addClass("ui-accordion-content-active")));
        },
        _toggle: function (e) {
          var i = e.newPanel,
            n = this.prevShow.length ? this.prevShow : e.oldPanel;
          this.prevShow.add(this.prevHide).stop(!0, !0),
            (this.prevShow = i),
            (this.prevHide = n),
            this.options.animate
              ? this._animate(i, n, e)
              : (n.hide(), i.show(), this._toggleComplete(e)),
            n.attr({ "aria-hidden": "true" }),
            n.prev().attr("aria-selected", "false"),
            i.length && n.length
              ? n.prev().attr({ tabIndex: -1, "aria-expanded": "false" })
              : i.length &&
                this.headers
                  .filter(function () {
                    return 0 === t(this).attr("tabIndex");
                  })
                  .attr("tabIndex", -1),
            i.attr("aria-hidden", "false").prev().attr({
              "aria-selected": "true",
              tabIndex: 0,
              "aria-expanded": "true",
            });
        },
        _animate: function (t, e, i) {
          var n,
            s,
            o,
            r = this,
            a = 0,
            l = t.length && (!e.length || t.index() < e.index()),
            u = this.options.animate || {},
            h = (l && u.down) || u,
            c = function () {
              r._toggleComplete(i);
            };
          return (
            "number" == typeof h && (o = h),
            "string" == typeof h && (s = h),
            (s = s || h.easing || u.easing),
            (o = o || h.duration || u.duration),
            e.length
              ? t.length
                ? ((n = t.show().outerHeight()),
                  e.animate(this.hideProps, {
                    duration: o,
                    easing: s,
                    step: function (t, e) {
                      e.now = Math.round(t);
                    },
                  }),
                  void t.hide().animate(this.showProps, {
                    duration: o,
                    easing: s,
                    complete: c,
                    step: function (t, i) {
                      (i.now = Math.round(t)),
                        "height" !== i.prop
                          ? (a += i.now)
                          : "content" !== r.options.heightStyle &&
                            ((i.now = Math.round(n - e.outerHeight() - a)),
                            (a = 0));
                    },
                  }))
                : e.animate(this.hideProps, o, s, c)
              : t.animate(this.showProps, o, s, c)
          );
        },
        _toggleComplete: function (t) {
          var e = t.oldPanel;
          e
            .removeClass("ui-accordion-content-active")
            .prev()
            .removeClass("ui-corner-top")
            .addClass("ui-corner-all"),
            e.length && (e.parent()[0].className = e.parent()[0].className),
            this._trigger("activate", null, t);
        },
      }),
      t.widget("ui.menu", {
        version: "1.11.2",
        defaultElement: "<ul>",
        delay: 300,
        options: {
          icons: { submenu: "ui-icon-carat-1-e" },
          items: "> *",
          menus: "ul",
          position: { my: "left-1 top", at: "right top" },
          role: "menu",
          blur: null,
          focus: null,
          select: null,
        },
        _create: function () {
          (this.activeMenu = this.element),
            (this.mouseHandled = !1),
            this.element
              .uniqueId()
              .addClass("ui-menu ui-widget ui-widget-content")
              .toggleClass(
                "ui-menu-icons",
                !!this.element.find(".ui-icon").length
              )
              .attr({ role: this.options.role, tabIndex: 0 }),
            this.options.disabled &&
              this.element
                .addClass("ui-state-disabled")
                .attr("aria-disabled", "true"),
            this._on({
              "mousedown .ui-menu-item": function (t) {
                t.preventDefault();
              },
              "click .ui-menu-item": function (e) {
                var i = t(e.target);
                !this.mouseHandled &&
                  i.not(".ui-state-disabled").length &&
                  (this.select(e),
                  e.isPropagationStopped() || (this.mouseHandled = !0),
                  i.has(".ui-menu").length
                    ? this.expand(e)
                    : !this.element.is(":focus") &&
                      t(this.document[0].activeElement).closest(".ui-menu")
                        .length &&
                      (this.element.trigger("focus", [!0]),
                      this.active &&
                        1 === this.active.parents(".ui-menu").length &&
                        clearTimeout(this.timer)));
              },
              "mouseenter .ui-menu-item": function (e) {
                if (!this.previousFilter) {
                  var i = t(e.currentTarget);
                  i.siblings(".ui-state-active").removeClass("ui-state-active"),
                    this.focus(e, i);
                }
              },
              mouseleave: "collapseAll",
              "mouseleave .ui-menu": "collapseAll",
              focus: function (t, e) {
                var i =
                  this.active || this.element.find(this.options.items).eq(0);
                e || this.focus(t, i);
              },
              blur: function (e) {
                this._delay(function () {
                  t.contains(this.element[0], this.document[0].activeElement) ||
                    this.collapseAll(e);
                });
              },
              keydown: "_keydown",
            }),
            this.refresh(),
            this._on(this.document, {
              click: function (t) {
                this._closeOnDocumentClick(t) && this.collapseAll(t),
                  (this.mouseHandled = !1);
              },
            });
        },
        _destroy: function () {
          this.element
            .removeAttr("aria-activedescendant")
            .find(".ui-menu")
            .addBack()
            .removeClass(
              "ui-menu ui-widget ui-widget-content ui-menu-icons ui-front"
            )
            .removeAttr("role")
            .removeAttr("tabIndex")
            .removeAttr("aria-labelledby")
            .removeAttr("aria-expanded")
            .removeAttr("aria-hidden")
            .removeAttr("aria-disabled")
            .removeUniqueId()
            .show(),
            this.element
              .find(".ui-menu-item")
              .removeClass("ui-menu-item")
              .removeAttr("role")
              .removeAttr("aria-disabled")
              .removeUniqueId()
              .removeClass("ui-state-hover")
              .removeAttr("tabIndex")
              .removeAttr("role")
              .removeAttr("aria-haspopup")
              .children()
              .each(function () {
                var e = t(this);
                e.data("ui-menu-submenu-carat") && e.remove();
              }),
            this.element
              .find(".ui-menu-divider")
              .removeClass("ui-menu-divider ui-widget-content");
        },
        _keydown: function (e) {
          var i,
            n,
            s,
            o,
            r = !0;
          switch (e.keyCode) {
            case t.ui.keyCode.PAGE_UP:
              this.previousPage(e);
              break;
            case t.ui.keyCode.PAGE_DOWN:
              this.nextPage(e);
              break;
            case t.ui.keyCode.HOME:
              this._move("first", "first", e);
              break;
            case t.ui.keyCode.END:
              this._move("last", "last", e);
              break;
            case t.ui.keyCode.UP:
              this.previous(e);
              break;
            case t.ui.keyCode.DOWN:
              this.next(e);
              break;
            case t.ui.keyCode.LEFT:
              this.collapse(e);
              break;
            case t.ui.keyCode.RIGHT:
              this.active &&
                !this.active.is(".ui-state-disabled") &&
                this.expand(e);
              break;
            case t.ui.keyCode.ENTER:
            case t.ui.keyCode.SPACE:
              this._activate(e);
              break;
            case t.ui.keyCode.ESCAPE:
              this.collapse(e);
              break;
            default:
              (r = !1),
                (n = this.previousFilter || ""),
                (s = String.fromCharCode(e.keyCode)),
                (o = !1),
                clearTimeout(this.filterTimer),
                s === n ? (o = !0) : (s = n + s),
                (i = this._filterMenuItems(s)),
                (i =
                  o && -1 !== i.index(this.active.next())
                    ? this.active.nextAll(".ui-menu-item")
                    : i),
                i.length ||
                  ((s = String.fromCharCode(e.keyCode)),
                  (i = this._filterMenuItems(s))),
                i.length
                  ? (this.focus(e, i),
                    (this.previousFilter = s),
                    (this.filterTimer = this._delay(function () {
                      delete this.previousFilter;
                    }, 1e3)))
                  : delete this.previousFilter;
          }
          r && e.preventDefault();
        },
        _activate: function (t) {
          this.active.is(".ui-state-disabled") ||
            (this.active.is("[aria-haspopup='true']")
              ? this.expand(t)
              : this.select(t));
        },
        refresh: function () {
          var e,
            i,
            n = this,
            s = this.options.icons.submenu,
            o = this.element.find(this.options.menus);
          this.element.toggleClass(
            "ui-menu-icons",
            !!this.element.find(".ui-icon").length
          ),
            o
              .filter(":not(.ui-menu)")
              .addClass("ui-menu ui-widget ui-widget-content ui-front")
              .hide()
              .attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false",
              })
              .each(function () {
                var e = t(this),
                  i = e.parent(),
                  n = t("<span>")
                    .addClass("ui-menu-icon ui-icon " + s)
                    .data("ui-menu-submenu-carat", !0);
                i.attr("aria-haspopup", "true").prepend(n),
                  e.attr("aria-labelledby", i.attr("id"));
              }),
            (e = o.add(this.element)),
            (i = e.find(this.options.items)),
            i.not(".ui-menu-item").each(function () {
              var e = t(this);
              n._isDivider(e) &&
                e.addClass("ui-widget-content ui-menu-divider");
            }),
            i
              .not(".ui-menu-item, .ui-menu-divider")
              .addClass("ui-menu-item")
              .uniqueId()
              .attr({ tabIndex: -1, role: this._itemRole() }),
            i.filter(".ui-state-disabled").attr("aria-disabled", "true"),
            this.active &&
              !t.contains(this.element[0], this.active[0]) &&
              this.blur();
        },
        _itemRole: function () {
          return { menu: "menuitem", listbox: "option" }[this.options.role];
        },
        _setOption: function (t, e) {
          "icons" === t &&
            this.element
              .find(".ui-menu-icon")
              .removeClass(this.options.icons.submenu)
              .addClass(e.submenu),
            "disabled" === t &&
              this.element
                .toggleClass("ui-state-disabled", !!e)
                .attr("aria-disabled", e),
            this._super(t, e);
        },
        focus: function (t, e) {
          var i, n;
          this.blur(t, t && "focus" === t.type),
            this._scrollIntoView(e),
            (this.active = e.first()),
            (n = this.active
              .addClass("ui-state-focus")
              .removeClass("ui-state-active")),
            this.options.role &&
              this.element.attr("aria-activedescendant", n.attr("id")),
            this.active
              .parent()
              .closest(".ui-menu-item")
              .addClass("ui-state-active"),
            t && "keydown" === t.type
              ? this._close()
              : (this.timer = this._delay(function () {
                  this._close();
                }, this.delay)),
            (i = e.children(".ui-menu")),
            i.length && t && /^mouse/.test(t.type) && this._startOpening(i),
            (this.activeMenu = e.parent()),
            this._trigger("focus", t, { item: e });
        },
        _scrollIntoView: function (e) {
          var i, n, s, o, r, a;
          this._hasScroll() &&
            ((i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0),
            (n = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0),
            (s = e.offset().top - this.activeMenu.offset().top - i - n),
            (o = this.activeMenu.scrollTop()),
            (r = this.activeMenu.height()),
            (a = e.outerHeight()),
            0 > s
              ? this.activeMenu.scrollTop(o + s)
              : s + a > r && this.activeMenu.scrollTop(o + s - r + a));
        },
        blur: function (t, e) {
          e || clearTimeout(this.timer),
            this.active &&
              (this.active.removeClass("ui-state-focus"),
              (this.active = null),
              this._trigger("blur", t, { item: this.active }));
        },
        _startOpening: function (t) {
          clearTimeout(this.timer),
            "true" === t.attr("aria-hidden") &&
              (this.timer = this._delay(function () {
                this._close(), this._open(t);
              }, this.delay));
        },
        _open: function (e) {
          var i = t.extend({ of: this.active }, this.options.position);
          clearTimeout(this.timer),
            this.element
              .find(".ui-menu")
              .not(e.parents(".ui-menu"))
              .hide()
              .attr("aria-hidden", "true"),
            e
              .show()
              .removeAttr("aria-hidden")
              .attr("aria-expanded", "true")
              .position(i);
        },
        collapseAll: function (e, i) {
          clearTimeout(this.timer),
            (this.timer = this._delay(function () {
              var n = i
                ? this.element
                : t(e && e.target).closest(this.element.find(".ui-menu"));
              n.length || (n = this.element),
                this._close(n),
                this.blur(e),
                (this.activeMenu = n);
            }, this.delay));
        },
        _close: function (t) {
          t || (t = this.active ? this.active.parent() : this.element),
            t
              .find(".ui-menu")
              .hide()
              .attr("aria-hidden", "true")
              .attr("aria-expanded", "false")
              .end()
              .find(".ui-state-active")
              .not(".ui-state-focus")
              .removeClass("ui-state-active");
        },
        _closeOnDocumentClick: function (e) {
          return !t(e.target).closest(".ui-menu").length;
        },
        _isDivider: function (t) {
          return !/[^\-\u2014\u2013\s]/.test(t.text());
        },
        collapse: function (t) {
          var e =
            this.active &&
            this.active.parent().closest(".ui-menu-item", this.element);
          e && e.length && (this._close(), this.focus(t, e));
        },
        expand: function (t) {
          var e =
            this.active &&
            this.active.children(".ui-menu ").find(this.options.items).first();
          e &&
            e.length &&
            (this._open(e.parent()),
            this._delay(function () {
              this.focus(t, e);
            }));
        },
        next: function (t) {
          this._move("next", "first", t);
        },
        previous: function (t) {
          this._move("prev", "last", t);
        },
        isFirstItem: function () {
          return this.active && !this.active.prevAll(".ui-menu-item").length;
        },
        isLastItem: function () {
          return this.active && !this.active.nextAll(".ui-menu-item").length;
        },
        _move: function (t, e, i) {
          var n;
          this.active &&
            (n =
              "first" === t || "last" === t
                ? this.active["first" === t ? "prevAll" : "nextAll"](
                    ".ui-menu-item"
                  ).eq(-1)
                : this.active[t + "All"](".ui-menu-item").eq(0)),
            (n && n.length && this.active) ||
              (n = this.activeMenu.find(this.options.items)[e]()),
            this.focus(i, n);
        },
        nextPage: function (e) {
          var i, n, s;
          return this.active
            ? void (
                this.isLastItem() ||
                (this._hasScroll()
                  ? ((n = this.active.offset().top),
                    (s = this.element.height()),
                    this.active.nextAll(".ui-menu-item").each(function () {
                      return (i = t(this)), 0 > i.offset().top - n - s;
                    }),
                    this.focus(e, i))
                  : this.focus(
                      e,
                      this.activeMenu
                        .find(this.options.items)
                        [this.active ? "last" : "first"]()
                    ))
              )
            : void this.next(e);
        },
        previousPage: function (e) {
          var i, n, s;
          return this.active
            ? void (
                this.isFirstItem() ||
                (this._hasScroll()
                  ? ((n = this.active.offset().top),
                    (s = this.element.height()),
                    this.active.prevAll(".ui-menu-item").each(function () {
                      return (i = t(this)), i.offset().top - n + s > 0;
                    }),
                    this.focus(e, i))
                  : this.focus(
                      e,
                      this.activeMenu.find(this.options.items).first()
                    ))
              )
            : void this.next(e);
        },
        _hasScroll: function () {
          return this.element.outerHeight() < this.element.prop("scrollHeight");
        },
        select: function (e) {
          this.active = this.active || t(e.target).closest(".ui-menu-item");
          var i = { item: this.active };
          this.active.has(".ui-menu").length || this.collapseAll(e, !0),
            this._trigger("select", e, i);
        },
        _filterMenuItems: function (e) {
          var i = e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
            n = RegExp("^" + i, "i");
          return this.activeMenu
            .find(this.options.items)
            .filter(".ui-menu-item")
            .filter(function () {
              return n.test(t.trim(t(this).text()));
            });
        },
      }),
      t.widget("ui.autocomplete", {
        version: "1.11.2",
        defaultElement: "<input>",
        options: {
          appendTo: null,
          autoFocus: !1,
          delay: 300,
          minLength: 1,
          position: { my: "left top", at: "left bottom", collision: "none" },
          source: null,
          change: null,
          close: null,
          focus: null,
          open: null,
          response: null,
          search: null,
          select: null,
        },
        requestIndex: 0,
        pending: 0,
        _create: function () {
          var e,
            i,
            n,
            s = this.element[0].nodeName.toLowerCase(),
            o = "textarea" === s,
            r = "input" === s;
          (this.isMultiLine = o
            ? !0
            : r
            ? !1
            : this.element.prop("isContentEditable")),
            (this.valueMethod = this.element[o || r ? "val" : "text"]),
            (this.isNewMenu = !0),
            this.element
              .addClass("ui-autocomplete-input")
              .attr("autocomplete", "off"),
            this._on(this.element, {
              keydown: function (s) {
                if (this.element.prop("readOnly"))
                  return (e = !0), (n = !0), void (i = !0);
                (e = !1), (n = !1), (i = !1);
                var o = t.ui.keyCode;
                switch (s.keyCode) {
                  case o.PAGE_UP:
                    (e = !0), this._move("previousPage", s);
                    break;
                  case o.PAGE_DOWN:
                    (e = !0), this._move("nextPage", s);
                    break;
                  case o.UP:
                    (e = !0), this._keyEvent("previous", s);
                    break;
                  case o.DOWN:
                    (e = !0), this._keyEvent("next", s);
                    break;
                  case o.ENTER:
                    this.menu.active &&
                      ((e = !0), s.preventDefault(), this.menu.select(s));
                    break;
                  case o.TAB:
                    this.menu.active && this.menu.select(s);
                    break;
                  case o.ESCAPE:
                    this.menu.element.is(":visible") &&
                      (this.isMultiLine || this._value(this.term),
                      this.close(s),
                      s.preventDefault());
                    break;
                  default:
                    (i = !0), this._searchTimeout(s);
                }
              },
              keypress: function (n) {
                if (e)
                  return (
                    (e = !1),
                    void (
                      (!this.isMultiLine || this.menu.element.is(":visible")) &&
                      n.preventDefault()
                    )
                  );
                if (!i) {
                  var s = t.ui.keyCode;
                  switch (n.keyCode) {
                    case s.PAGE_UP:
                      this._move("previousPage", n);
                      break;
                    case s.PAGE_DOWN:
                      this._move("nextPage", n);
                      break;
                    case s.UP:
                      this._keyEvent("previous", n);
                      break;
                    case s.DOWN:
                      this._keyEvent("next", n);
                  }
                }
              },
              input: function (t) {
                return n
                  ? ((n = !1), void t.preventDefault())
                  : void this._searchTimeout(t);
              },
              focus: function () {
                (this.selectedItem = null), (this.previous = this._value());
              },
              blur: function (t) {
                return this.cancelBlur
                  ? void delete this.cancelBlur
                  : (clearTimeout(this.searching),
                    this.close(t),
                    void this._change(t));
              },
            }),
            this._initSource(),
            (this.menu = t("<ul>")
              .addClass("ui-autocomplete ui-front")
              .appendTo(this._appendTo())
              .menu({ role: null })
              .hide()
              .menu("instance")),
            this._on(this.menu.element, {
              mousedown: function (e) {
                e.preventDefault(),
                  (this.cancelBlur = !0),
                  this._delay(function () {
                    delete this.cancelBlur;
                  });
                var i = this.menu.element[0];
                t(e.target).closest(".ui-menu-item").length ||
                  this._delay(function () {
                    var e = this;
                    this.document.one("mousedown", function (n) {
                      n.target === e.element[0] ||
                        n.target === i ||
                        t.contains(i, n.target) ||
                        e.close();
                    });
                  });
              },
              menufocus: function (e, i) {
                var n, s;
                return this.isNewMenu &&
                  ((this.isNewMenu = !1),
                  e.originalEvent && /^mouse/.test(e.originalEvent.type))
                  ? (this.menu.blur(),
                    void this.document.one("mousemove", function () {
                      t(e.target).trigger(e.originalEvent);
                    }))
                  : ((s = i.item.data("ui-autocomplete-item")),
                    !1 !== this._trigger("focus", e, { item: s }) &&
                      e.originalEvent &&
                      /^key/.test(e.originalEvent.type) &&
                      this._value(s.value),
                    (n = i.item.attr("aria-label") || s.value),
                    void (
                      n &&
                      t.trim(n).length &&
                      (this.liveRegion.children().hide(),
                      t("<div>").text(n).appendTo(this.liveRegion))
                    ));
              },
              menuselect: function (t, e) {
                var i = e.item.data("ui-autocomplete-item"),
                  n = this.previous;
                this.element[0] !== this.document[0].activeElement &&
                  (this.element.focus(),
                  (this.previous = n),
                  this._delay(function () {
                    (this.previous = n), (this.selectedItem = i);
                  })),
                  !1 !== this._trigger("select", t, { item: i }) &&
                    this._value(i.value),
                  (this.term = this._value()),
                  this.close(t),
                  (this.selectedItem = i);
              },
            }),
            (this.liveRegion = t("<span>", {
              role: "status",
              "aria-live": "assertive",
              "aria-relevant": "additions",
            })
              .addClass("ui-helper-hidden-accessible")
              .appendTo(this.document[0].body)),
            this._on(this.window, {
              beforeunload: function () {
                this.element.removeAttr("autocomplete");
              },
            });
        },
        _destroy: function () {
          clearTimeout(this.searching),
            this.element
              .removeClass("ui-autocomplete-input")
              .removeAttr("autocomplete"),
            this.menu.element.remove(),
            this.liveRegion.remove();
        },
        _setOption: function (t, e) {
          this._super(t, e),
            "source" === t && this._initSource(),
            "appendTo" === t && this.menu.element.appendTo(this._appendTo()),
            "disabled" === t && e && this.xhr && this.xhr.abort();
        },
        _appendTo: function () {
          var e = this.options.appendTo;
          return (
            e &&
              (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)),
            (e && e[0]) || (e = this.element.closest(".ui-front")),
            e.length || (e = this.document[0].body),
            e
          );
        },
        _initSource: function () {
          var e,
            i,
            n = this;
          t.isArray(this.options.source)
            ? ((e = this.options.source),
              (this.source = function (i, n) {
                n(t.ui.autocomplete.filter(e, i.term));
              }))
            : "string" == typeof this.options.source
            ? ((i = this.options.source),
              (this.source = function (e, s) {
                n.xhr && n.xhr.abort(),
                  (n.xhr = t.ajax({
                    url: i,
                    data: e,
                    dataType: "json",
                    success: function (t) {
                      s(t);
                    },
                    error: function () {
                      s([]);
                    },
                  }));
              }))
            : (this.source = this.options.source);
        },
        _searchTimeout: function (t) {
          clearTimeout(this.searching),
            (this.searching = this._delay(function () {
              var e = this.term === this._value(),
                i = this.menu.element.is(":visible"),
                n = t.altKey || t.ctrlKey || t.metaKey || t.shiftKey;
              (!e || (e && !i && !n)) &&
                ((this.selectedItem = null), this.search(null, t));
            }, this.options.delay));
        },
        search: function (t, e) {
          return (
            (t = null != t ? t : this._value()),
            (this.term = this._value()),
            t.length < this.options.minLength
              ? this.close(e)
              : this._trigger("search", e) !== !1
              ? this._search(t)
              : void 0
          );
        },
        _search: function (t) {
          this.pending++,
            this.element.addClass("ui-autocomplete-loading"),
            (this.cancelSearch = !1),
            this.source({ term: t }, this._response());
        },
        _response: function () {
          var e = ++this.requestIndex;
          return t.proxy(function (t) {
            e === this.requestIndex && this.__response(t),
              this.pending--,
              this.pending ||
                this.element.removeClass("ui-autocomplete-loading");
          }, this);
        },
        __response: function (t) {
          t && (t = this._normalize(t)),
            this._trigger("response", null, { content: t }),
            !this.options.disabled && t && t.length && !this.cancelSearch
              ? (this._suggest(t), this._trigger("open"))
              : this._close();
        },
        close: function (t) {
          (this.cancelSearch = !0), this._close(t);
        },
        _close: function (t) {
          this.menu.element.is(":visible") &&
            (this.menu.element.hide(),
            this.menu.blur(),
            (this.isNewMenu = !0),
            this._trigger("close", t));
        },
        _change: function (t) {
          this.previous !== this._value() &&
            this._trigger("change", t, { item: this.selectedItem });
        },
        _normalize: function (e) {
          return e.length && e[0].label && e[0].value
            ? e
            : t.map(e, function (e) {
                return "string" == typeof e
                  ? { label: e, value: e }
                  : t.extend({}, e, {
                      label: e.label || e.value,
                      value: e.value || e.label,
                    });
              });
        },
        _suggest: function (e) {
          var i = this.menu.element.empty();
          this._renderMenu(i, e),
            (this.isNewMenu = !0),
            this.menu.refresh(),
            i.show(),
            this._resizeMenu(),
            i.position(t.extend({ of: this.element }, this.options.position)),
            this.options.autoFocus && this.menu.next();
        },
        _resizeMenu: function () {
          var t = this.menu.element;
          t.outerWidth(
            Math.max(t.width("").outerWidth() + 1, this.element.outerWidth())
          );
        },
        _renderMenu: function (e, i) {
          var n = this;
          t.each(i, function (t, i) {
            n._renderItemData(e, i);
          });
        },
        _renderItemData: function (t, e) {
          return this._renderItem(t, e).data("ui-autocomplete-item", e);
        },
        _renderItem: function (e, i) {
          return t("<li>").text(i.label).appendTo(e);
        },
        _move: function (t, e) {
          return this.menu.element.is(":visible")
            ? (this.menu.isFirstItem() && /^previous/.test(t)) ||
              (this.menu.isLastItem() && /^next/.test(t))
              ? (this.isMultiLine || this._value(this.term),
                void this.menu.blur())
              : void this.menu[t](e)
            : void this.search(null, e);
        },
        widget: function () {
          return this.menu.element;
        },
        _value: function () {
          return this.valueMethod.apply(this.element, arguments);
        },
        _keyEvent: function (t, e) {
          (!this.isMultiLine || this.menu.element.is(":visible")) &&
            (this._move(t, e), e.preventDefault());
        },
      }),
      t.extend(t.ui.autocomplete, {
        escapeRegex: function (t) {
          return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
        },
        filter: function (e, i) {
          var n = RegExp(t.ui.autocomplete.escapeRegex(i), "i");
          return t.grep(e, function (t) {
            return n.test(t.label || t.value || t);
          });
        },
      }),
      t.widget("ui.autocomplete", t.ui.autocomplete, {
        options: {
          messages: {
            noResults: "No search results.",
            results: function (t) {
              return (
                t +
                (t > 1 ? " results are" : " result is") +
                " available, use up and down arrow keys to navigate."
              );
            },
          },
        },
        __response: function (e) {
          var i;
          this._superApply(arguments),
            this.options.disabled ||
              this.cancelSearch ||
              ((i =
                e && e.length
                  ? this.options.messages.results(e.length)
                  : this.options.messages.noResults),
              this.liveRegion.children().hide(),
              t("<div>").text(i).appendTo(this.liveRegion));
        },
      }),
      t.ui.autocomplete;
    var d,
      p = "ui-button ui-widget ui-state-default ui-corner-all",
      f =
        "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
      m = function () {
        var e = t(this);
        setTimeout(function () {
          e.find(":ui-button").button("refresh");
        }, 1);
      },
      g = function (e) {
        var i = e.name,
          n = e.form,
          s = t([]);
        return (
          i &&
            ((i = i.replace(/'/g, "\\'")),
            (s = n
              ? t(n).find("[name='" + i + "'][type=radio]")
              : t("[name='" + i + "'][type=radio]", e.ownerDocument).filter(
                  function () {
                    return !this.form;
                  }
                ))),
          s
        );
      };
    t.widget("ui.button", {
      version: "1.11.2",
      defaultElement: "<button>",
      options: {
        disabled: null,
        text: !0,
        label: null,
        icons: { primary: null, secondary: null },
      },
      _create: function () {
        this.element
          .closest("form")
          .unbind("reset" + this.eventNamespace)
          .bind("reset" + this.eventNamespace, m),
          "boolean" != typeof this.options.disabled
            ? (this.options.disabled = !!this.element.prop("disabled"))
            : this.element.prop("disabled", this.options.disabled),
          this._determineButtonType(),
          (this.hasTitle = !!this.buttonElement.attr("title"));
        var e = this,
          i = this.options,
          n = "checkbox" === this.type || "radio" === this.type,
          s = n ? "" : "ui-state-active";
        null === i.label &&
          (i.label =
            "input" === this.type
              ? this.buttonElement.val()
              : this.buttonElement.html()),
          this._hoverable(this.buttonElement),
          this.buttonElement
            .addClass(p)
            .attr("role", "button")
            .bind("mouseenter" + this.eventNamespace, function () {
              i.disabled || (this === d && t(this).addClass("ui-state-active"));
            })
            .bind("mouseleave" + this.eventNamespace, function () {
              i.disabled || t(this).removeClass(s);
            })
            .bind("click" + this.eventNamespace, function (t) {
              i.disabled && (t.preventDefault(), t.stopImmediatePropagation());
            }),
          this._on({
            focus: function () {
              this.buttonElement.addClass("ui-state-focus");
            },
            blur: function () {
              this.buttonElement.removeClass("ui-state-focus");
            },
          }),
          n &&
            this.element.bind("change" + this.eventNamespace, function () {
              e.refresh();
            }),
          "checkbox" === this.type
            ? this.buttonElement.bind(
                "click" + this.eventNamespace,
                function () {
                  return i.disabled ? !1 : void 0;
                }
              )
            : "radio" === this.type
            ? this.buttonElement.bind(
                "click" + this.eventNamespace,
                function () {
                  if (i.disabled) return !1;
                  t(this).addClass("ui-state-active"),
                    e.buttonElement.attr("aria-pressed", "true");
                  var n = e.element[0];
                  g(n)
                    .not(n)
                    .map(function () {
                      return t(this).button("widget")[0];
                    })
                    .removeClass("ui-state-active")
                    .attr("aria-pressed", "false");
                }
              )
            : (this.buttonElement
                .bind("mousedown" + this.eventNamespace, function () {
                  return i.disabled
                    ? !1
                    : (t(this).addClass("ui-state-active"),
                      (d = this),
                      void e.document.one("mouseup", function () {
                        d = null;
                      }));
                })
                .bind("mouseup" + this.eventNamespace, function () {
                  return i.disabled
                    ? !1
                    : void t(this).removeClass("ui-state-active");
                })
                .bind("keydown" + this.eventNamespace, function (e) {
                  return i.disabled
                    ? !1
                    : void (
                        (e.keyCode === t.ui.keyCode.SPACE ||
                          e.keyCode === t.ui.keyCode.ENTER) &&
                        t(this).addClass("ui-state-active")
                      );
                })
                .bind(
                  "keyup" + this.eventNamespace + " blur" + this.eventNamespace,
                  function () {
                    t(this).removeClass("ui-state-active");
                  }
                ),
              this.buttonElement.is("a") &&
                this.buttonElement.keyup(function (e) {
                  e.keyCode === t.ui.keyCode.SPACE && t(this).click();
                })),
          this._setOption("disabled", i.disabled),
          this._resetButton();
      },
      _determineButtonType: function () {
        var t, e, i;
        (this.type = this.element.is("[type=checkbox]")
          ? "checkbox"
          : this.element.is("[type=radio]")
          ? "radio"
          : this.element.is("input")
          ? "input"
          : "button"),
          "checkbox" === this.type || "radio" === this.type
            ? ((t = this.element.parents().last()),
              (e = "label[for='" + this.element.attr("id") + "']"),
              (this.buttonElement = t.find(e)),
              this.buttonElement.length ||
                ((t = t.length ? t.siblings() : this.element.siblings()),
                (this.buttonElement = t.filter(e)),
                this.buttonElement.length || (this.buttonElement = t.find(e))),
              this.element.addClass("ui-helper-hidden-accessible"),
              (i = this.element.is(":checked")),
              i && this.buttonElement.addClass("ui-state-active"),
              this.buttonElement.prop("aria-pressed", i))
            : (this.buttonElement = this.element);
      },
      widget: function () {
        return this.buttonElement;
      },
      _destroy: function () {
        this.element.removeClass("ui-helper-hidden-accessible"),
          this.buttonElement
            .removeClass(p + " ui-state-active " + f)
            .removeAttr("role")
            .removeAttr("aria-pressed")
            .html(this.buttonElement.find(".ui-button-text").html()),
          this.hasTitle || this.buttonElement.removeAttr("title");
      },
      _setOption: function (t, e) {
        return (
          this._super(t, e),
          "disabled" === t
            ? (this.widget().toggleClass("ui-state-disabled", !!e),
              this.element.prop("disabled", !!e),
              void (
                e &&
                this.buttonElement.removeClass(
                  "checkbox" === this.type || "radio" === this.type
                    ? "ui-state-focus"
                    : "ui-state-focus ui-state-active"
                )
              ))
            : void this._resetButton()
        );
      },
      refresh: function () {
        var e = this.element.is("input, button")
          ? this.element.is(":disabled")
          : this.element.hasClass("ui-button-disabled");
        e !== this.options.disabled && this._setOption("disabled", e),
          "radio" === this.type
            ? g(this.element[0]).each(function () {
                t(this).is(":checked")
                  ? t(this)
                      .button("widget")
                      .addClass("ui-state-active")
                      .attr("aria-pressed", "true")
                  : t(this)
                      .button("widget")
                      .removeClass("ui-state-active")
                      .attr("aria-pressed", "false");
              })
            : "checkbox" === this.type &&
              (this.element.is(":checked")
                ? this.buttonElement
                    .addClass("ui-state-active")
                    .attr("aria-pressed", "true")
                : this.buttonElement
                    .removeClass("ui-state-active")
                    .attr("aria-pressed", "false"));
      },
      _resetButton: function () {
        if ("input" === this.type)
          return void (
            this.options.label && this.element.val(this.options.label)
          );
        var e = this.buttonElement.removeClass(f),
          i = t("<span></span>", this.document[0])
            .addClass("ui-button-text")
            .html(this.options.label)
            .appendTo(e.empty())
            .text(),
          n = this.options.icons,
          s = n.primary && n.secondary,
          o = [];
        n.primary || n.secondary
          ? (this.options.text &&
              o.push(
                "ui-button-text-icon" +
                  (s ? "s" : n.primary ? "-primary" : "-secondary")
              ),
            n.primary &&
              e.prepend(
                "<span class='ui-button-icon-primary ui-icon " +
                  n.primary +
                  "'></span>"
              ),
            n.secondary &&
              e.append(
                "<span class='ui-button-icon-secondary ui-icon " +
                  n.secondary +
                  "'></span>"
              ),
            this.options.text ||
              (o.push(s ? "ui-button-icons-only" : "ui-button-icon-only"),
              this.hasTitle || e.attr("title", t.trim(i))))
          : o.push("ui-button-text-only"),
          e.addClass(o.join(" "));
      },
    }),
      t.widget("ui.buttonset", {
        version: "1.11.2",
        options: {
          items:
            "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)",
        },
        _create: function () {
          this.element.addClass("ui-buttonset");
        },
        _init: function () {
          this.refresh();
        },
        _setOption: function (t, e) {
          "disabled" === t && this.buttons.button("option", t, e),
            this._super(t, e);
        },
        refresh: function () {
          var e = "rtl" === this.element.css("direction"),
            i = this.element.find(this.options.items),
            n = i.filter(":ui-button");
          i.not(":ui-button").button(),
            n.button("refresh"),
            (this.buttons = i
              .map(function () {
                return t(this).button("widget")[0];
              })
              .removeClass("ui-corner-all ui-corner-left ui-corner-right")
              .filter(":first")
              .addClass(e ? "ui-corner-right" : "ui-corner-left")
              .end()
              .filter(":last")
              .addClass(e ? "ui-corner-left" : "ui-corner-right")
              .end()
              .end());
        },
        _destroy: function () {
          this.element.removeClass("ui-buttonset"),
            this.buttons
              .map(function () {
                return t(this).button("widget")[0];
              })
              .removeClass("ui-corner-left ui-corner-right")
              .end()
              .button("destroy");
        },
      }),
      t.ui.button,
      t.extend(t.ui, { datepicker: { version: "1.11.2" } });
    var v;
    t.extend(s.prototype, {
      markerClassName: "hasDatepicker",
      maxRows: 4,
      _widgetDatepicker: function () {
        return this.dpDiv;
      },
      setDefaults: function (t) {
        return a(this._defaults, t || {}), this;
      },
      _attachDatepicker: function (e, i) {
        var n, s, o;
        (n = e.nodeName.toLowerCase()),
          (s = "div" === n || "span" === n),
          e.id || ((this.uuid += 1), (e.id = "dp" + this.uuid)),
          (o = this._newInst(t(e), s)),
          (o.settings = t.extend({}, i || {})),
          "input" === n
            ? this._connectDatepicker(e, o)
            : s && this._inlineDatepicker(e, o);
      },
      _newInst: function (e, i) {
        var n = e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
        return {
          id: n,
          input: e,
          selectedDay: 0,
          selectedMonth: 0,
          selectedYear: 0,
          drawMonth: 0,
          drawYear: 0,
          inline: i,
          dpDiv: i
            ? o(
                t(
                  "<div class='" +
                    this._inlineClass +
                    " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"
                )
              )
            : this.dpDiv,
        };
      },
      _connectDatepicker: function (e, i) {
        var n = t(e);
        (i.append = t([])),
          (i.trigger = t([])),
          n.hasClass(this.markerClassName) ||
            (this._attachments(n, i),
            n
              .addClass(this.markerClassName)
              .keydown(this._doKeyDown)
              .keypress(this._doKeyPress)
              .keyup(this._doKeyUp),
            this._autoSize(i),
            t.data(e, "datepicker", i),
            i.settings.disabled && this._disableDatepicker(e));
      },
      _attachments: function (e, i) {
        var n,
          s,
          o,
          r = this._get(i, "appendText"),
          a = this._get(i, "isRTL");
        i.append && i.append.remove(),
          r &&
            ((i.append = t(
              "<span class='" + this._appendClass + "'>" + r + "</span>"
            )),
            e[a ? "before" : "after"](i.append)),
          e.unbind("focus", this._showDatepicker),
          i.trigger && i.trigger.remove(),
          (n = this._get(i, "showOn")),
          ("focus" === n || "both" === n) && e.focus(this._showDatepicker),
          ("button" === n || "both" === n) &&
            ((s = this._get(i, "buttonText")),
            (o = this._get(i, "buttonImage")),
            (i.trigger = t(
              this._get(i, "buttonImageOnly")
                ? t("<img/>")
                    .addClass(this._triggerClass)
                    .attr({ src: o, alt: s, title: s })
                : t("<button type='button'></button>")
                    .addClass(this._triggerClass)
                    .html(
                      o ? t("<img/>").attr({ src: o, alt: s, title: s }) : s
                    )
            )),
            e[a ? "before" : "after"](i.trigger),
            i.trigger.click(function () {
              return (
                t.datepicker._datepickerShowing &&
                t.datepicker._lastInput === e[0]
                  ? t.datepicker._hideDatepicker()
                  : t.datepicker._datepickerShowing &&
                    t.datepicker._lastInput !== e[0]
                  ? (t.datepicker._hideDatepicker(),
                    t.datepicker._showDatepicker(e[0]))
                  : t.datepicker._showDatepicker(e[0]),
                !1
              );
            }));
      },
      _autoSize: function (t) {
        if (this._get(t, "autoSize") && !t.inline) {
          var e,
            i,
            n,
            s,
            o = new Date(2009, 11, 20),
            r = this._get(t, "dateFormat");
          r.match(/[DM]/) &&
            ((e = function (t) {
              for (i = 0, n = 0, s = 0; t.length > s; s++)
                t[s].length > i && ((i = t[s].length), (n = s));
              return n;
            }),
            o.setMonth(
              e(this._get(t, r.match(/MM/) ? "monthNames" : "monthNamesShort"))
            ),
            o.setDate(
              e(this._get(t, r.match(/DD/) ? "dayNames" : "dayNamesShort")) +
                20 -
                o.getDay()
            )),
            t.input.attr("size", this._formatDate(t, o).length);
        }
      },
      _inlineDatepicker: function (e, i) {
        var n = t(e);
        n.hasClass(this.markerClassName) ||
          (n.addClass(this.markerClassName).append(i.dpDiv),
          t.data(e, "datepicker", i),
          this._setDate(i, this._getDefaultDate(i), !0),
          this._updateDatepicker(i),
          this._updateAlternate(i),
          i.settings.disabled && this._disableDatepicker(e),
          i.dpDiv.css("display", "block"));
      },
      _dialogDatepicker: function (e, i, n, s, o) {
        var r,
          l,
          u,
          h,
          c,
          d = this._dialogInst;
        return (
          d ||
            ((this.uuid += 1),
            (r = "dp" + this.uuid),
            (this._dialogInput = t(
              "<input type='text' id='" +
                r +
                "' style='position: absolute; top: -100px; width: 0px;'/>"
            )),
            this._dialogInput.keydown(this._doKeyDown),
            t("body").append(this._dialogInput),
            (d = this._dialogInst = this._newInst(this._dialogInput, !1)),
            (d.settings = {}),
            t.data(this._dialogInput[0], "datepicker", d)),
          a(d.settings, s || {}),
          (i = i && i.constructor === Date ? this._formatDate(d, i) : i),
          this._dialogInput.val(i),
          (this._pos = o ? (o.length ? o : [o.pageX, o.pageY]) : null),
          this._pos ||
            ((l = document.documentElement.clientWidth),
            (u = document.documentElement.clientHeight),
            (h =
              document.documentElement.scrollLeft || document.body.scrollLeft),
            (c = document.documentElement.scrollTop || document.body.scrollTop),
            (this._pos = [l / 2 - 100 + h, u / 2 - 150 + c])),
          this._dialogInput
            .css("left", this._pos[0] + 20 + "px")
            .css("top", this._pos[1] + "px"),
          (d.settings.onSelect = n),
          (this._inDialog = !0),
          this.dpDiv.addClass(this._dialogClass),
          this._showDatepicker(this._dialogInput[0]),
          t.blockUI && t.blockUI(this.dpDiv),
          t.data(this._dialogInput[0], "datepicker", d),
          this
        );
      },
      _destroyDatepicker: function (e) {
        var i,
          n = t(e),
          s = t.data(e, "datepicker");
        n.hasClass(this.markerClassName) &&
          ((i = e.nodeName.toLowerCase()),
          t.removeData(e, "datepicker"),
          "input" === i
            ? (s.append.remove(),
              s.trigger.remove(),
              n
                .removeClass(this.markerClassName)
                .unbind("focus", this._showDatepicker)
                .unbind("keydown", this._doKeyDown)
                .unbind("keypress", this._doKeyPress)
                .unbind("keyup", this._doKeyUp))
            : ("div" === i || "span" === i) &&
              n.removeClass(this.markerClassName).empty());
      },
      _enableDatepicker: function (e) {
        var i,
          n,
          s = t(e),
          o = t.data(e, "datepicker");
        s.hasClass(this.markerClassName) &&
          ((i = e.nodeName.toLowerCase()),
          "input" === i
            ? ((e.disabled = !1),
              o.trigger
                .filter("button")
                .each(function () {
                  this.disabled = !1;
                })
                .end()
                .filter("img")
                .css({ opacity: "1.0", cursor: "" }))
            : ("div" === i || "span" === i) &&
              ((n = s.children("." + this._inlineClass)),
              n.children().removeClass("ui-state-disabled"),
              n
                .find("select.ui-datepicker-month, select.ui-datepicker-year")
                .prop("disabled", !1)),
          (this._disabledInputs = t.map(this._disabledInputs, function (t) {
            return t === e ? null : t;
          })));
      },
      _disableDatepicker: function (e) {
        var i,
          n,
          s = t(e),
          o = t.data(e, "datepicker");
        s.hasClass(this.markerClassName) &&
          ((i = e.nodeName.toLowerCase()),
          "input" === i
            ? ((e.disabled = !0),
              o.trigger
                .filter("button")
                .each(function () {
                  this.disabled = !0;
                })
                .end()
                .filter("img")
                .css({ opacity: "0.5", cursor: "default" }))
            : ("div" === i || "span" === i) &&
              ((n = s.children("." + this._inlineClass)),
              n.children().addClass("ui-state-disabled"),
              n
                .find("select.ui-datepicker-month, select.ui-datepicker-year")
                .prop("disabled", !0)),
          (this._disabledInputs = t.map(this._disabledInputs, function (t) {
            return t === e ? null : t;
          })),
          (this._disabledInputs[this._disabledInputs.length] = e));
      },
      _isDisabledDatepicker: function (t) {
        if (!t) return !1;
        for (var e = 0; this._disabledInputs.length > e; e++)
          if (this._disabledInputs[e] === t) return !0;
        return !1;
      },
      _getInst: function (e) {
        try {
          return t.data(e, "datepicker");
        } catch (i) {
          throw "Missing instance data for this datepicker";
        }
      },
      _optionDatepicker: function (e, i, n) {
        var s,
          o,
          r,
          l,
          u = this._getInst(e);
        return 2 === arguments.length && "string" == typeof i
          ? "defaults" === i
            ? t.extend({}, t.datepicker._defaults)
            : u
            ? "all" === i
              ? t.extend({}, u.settings)
              : this._get(u, i)
            : null
          : ((s = i || {}),
            "string" == typeof i && ((s = {}), (s[i] = n)),
            void (
              u &&
              (this._curInst === u && this._hideDatepicker(),
              (o = this._getDateDatepicker(e, !0)),
              (r = this._getMinMaxDate(u, "min")),
              (l = this._getMinMaxDate(u, "max")),
              a(u.settings, s),
              null !== r &&
                void 0 !== s.dateFormat &&
                void 0 === s.minDate &&
                (u.settings.minDate = this._formatDate(u, r)),
              null !== l &&
                void 0 !== s.dateFormat &&
                void 0 === s.maxDate &&
                (u.settings.maxDate = this._formatDate(u, l)),
              "disabled" in s &&
                (s.disabled
                  ? this._disableDatepicker(e)
                  : this._enableDatepicker(e)),
              this._attachments(t(e), u),
              this._autoSize(u),
              this._setDate(u, o),
              this._updateAlternate(u),
              this._updateDatepicker(u))
            ));
      },
      _changeDatepicker: function (t, e, i) {
        this._optionDatepicker(t, e, i);
      },
      _refreshDatepicker: function (t) {
        var e = this._getInst(t);
        e && this._updateDatepicker(e);
      },
      _setDateDatepicker: function (t, e) {
        var i = this._getInst(t);
        i &&
          (this._setDate(i, e),
          this._updateDatepicker(i),
          this._updateAlternate(i));
      },
      _getDateDatepicker: function (t, e) {
        var i = this._getInst(t);
        return (
          i && !i.inline && this._setDateFromField(i, e),
          i ? this._getDate(i) : null
        );
      },
      _doKeyDown: function (e) {
        var i,
          n,
          s,
          o = t.datepicker._getInst(e.target),
          r = !0,
          a = o.dpDiv.is(".ui-datepicker-rtl");
        if (((o._keyEvent = !0), t.datepicker._datepickerShowing))
          switch (e.keyCode) {
            case 9:
              t.datepicker._hideDatepicker(), (r = !1);
              break;
            case 13:
              return (
                (s = t(
                  "td." +
                    t.datepicker._dayOverClass +
                    ":not(." +
                    t.datepicker._currentClass +
                    ")",
                  o.dpDiv
                )),
                s[0] &&
                  t.datepicker._selectDay(
                    e.target,
                    o.selectedMonth,
                    o.selectedYear,
                    s[0]
                  ),
                (i = t.datepicker._get(o, "onSelect")),
                i
                  ? ((n = t.datepicker._formatDate(o)),
                    i.apply(o.input ? o.input[0] : null, [n, o]))
                  : t.datepicker._hideDatepicker(),
                !1
              );
            case 27:
              t.datepicker._hideDatepicker();
              break;
            case 33:
              t.datepicker._adjustDate(
                e.target,
                e.ctrlKey
                  ? -t.datepicker._get(o, "stepBigMonths")
                  : -t.datepicker._get(o, "stepMonths"),
                "M"
              );
              break;
            case 34:
              t.datepicker._adjustDate(
                e.target,
                e.ctrlKey
                  ? +t.datepicker._get(o, "stepBigMonths")
                  : +t.datepicker._get(o, "stepMonths"),
                "M"
              );
              break;
            case 35:
              (e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target),
                (r = e.ctrlKey || e.metaKey);
              break;
            case 36:
              (e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target),
                (r = e.ctrlKey || e.metaKey);
              break;
            case 37:
              (e.ctrlKey || e.metaKey) &&
                t.datepicker._adjustDate(e.target, a ? 1 : -1, "D"),
                (r = e.ctrlKey || e.metaKey),
                e.originalEvent.altKey &&
                  t.datepicker._adjustDate(
                    e.target,
                    e.ctrlKey
                      ? -t.datepicker._get(o, "stepBigMonths")
                      : -t.datepicker._get(o, "stepMonths"),
                    "M"
                  );
              break;
            case 38:
              (e.ctrlKey || e.metaKey) &&
                t.datepicker._adjustDate(e.target, -7, "D"),
                (r = e.ctrlKey || e.metaKey);
              break;
            case 39:
              (e.ctrlKey || e.metaKey) &&
                t.datepicker._adjustDate(e.target, a ? -1 : 1, "D"),
                (r = e.ctrlKey || e.metaKey),
                e.originalEvent.altKey &&
                  t.datepicker._adjustDate(
                    e.target,
                    e.ctrlKey
                      ? +t.datepicker._get(o, "stepBigMonths")
                      : +t.datepicker._get(o, "stepMonths"),
                    "M"
                  );
              break;
            case 40:
              (e.ctrlKey || e.metaKey) &&
                t.datepicker._adjustDate(e.target, 7, "D"),
                (r = e.ctrlKey || e.metaKey);
              break;
            default:
              r = !1;
          }
        else
          36 === e.keyCode && e.ctrlKey
            ? t.datepicker._showDatepicker(this)
            : (r = !1);
        r && (e.preventDefault(), e.stopPropagation());
      },
      _doKeyPress: function (e) {
        var i,
          n,
          s = t.datepicker._getInst(e.target);
        return t.datepicker._get(s, "constrainInput")
          ? ((i = t.datepicker._possibleChars(
              t.datepicker._get(s, "dateFormat")
            )),
            (n = String.fromCharCode(
              null == e.charCode ? e.keyCode : e.charCode
            )),
            e.ctrlKey || e.metaKey || " " > n || !i || i.indexOf(n) > -1)
          : void 0;
      },
      _doKeyUp: function (e) {
        var i,
          n = t.datepicker._getInst(e.target);
        if (n.input.val() !== n.lastVal)
          try {
            (i = t.datepicker.parseDate(
              t.datepicker._get(n, "dateFormat"),
              n.input ? n.input.val() : null,
              t.datepicker._getFormatConfig(n)
            )),
              i &&
                (t.datepicker._setDateFromField(n),
                t.datepicker._updateAlternate(n),
                t.datepicker._updateDatepicker(n));
          } catch (s) {}
        return !0;
      },
      _showDatepicker: function (e) {
        if (
          ((e = e.target || e),
          "input" !== e.nodeName.toLowerCase() &&
            (e = t("input", e.parentNode)[0]),
          !t.datepicker._isDisabledDatepicker(e) &&
            t.datepicker._lastInput !== e)
        ) {
          var i, s, o, r, l, u, h;
          (i = t.datepicker._getInst(e)),
            t.datepicker._curInst &&
              t.datepicker._curInst !== i &&
              (t.datepicker._curInst.dpDiv.stop(!0, !0),
              i &&
                t.datepicker._datepickerShowing &&
                t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])),
            (s = t.datepicker._get(i, "beforeShow")),
            (o = s ? s.apply(e, [e, i]) : {}),
            o !== !1 &&
              (a(i.settings, o),
              (i.lastVal = null),
              (t.datepicker._lastInput = e),
              t.datepicker._setDateFromField(i),
              t.datepicker._inDialog && (e.value = ""),
              t.datepicker._pos ||
                ((t.datepicker._pos = t.datepicker._findPos(e)),
                (t.datepicker._pos[1] += e.offsetHeight)),
              (r = !1),
              t(e)
                .parents()
                .each(function () {
                  return (r |= "fixed" === t(this).css("position")), !r;
                }),
              (l = { left: t.datepicker._pos[0], top: t.datepicker._pos[1] }),
              (t.datepicker._pos = null),
              i.dpDiv.empty(),
              i.dpDiv.css({
                position: "absolute",
                display: "block",
                top: "-1000px",
              }),
              t.datepicker._updateDatepicker(i),
              (l = t.datepicker._checkOffset(i, l, r)),
              i.dpDiv.css({
                position:
                  t.datepicker._inDialog && t.blockUI
                    ? "static"
                    : r
                    ? "fixed"
                    : "absolute",
                display: "none",
                left: l.left + "px",
                top: l.top + "px",
              }),
              i.inline ||
                ((u = t.datepicker._get(i, "showAnim")),
                (h = t.datepicker._get(i, "duration")),
                i.dpDiv.css("z-index", n(t(e)) + 1),
                (t.datepicker._datepickerShowing = !0),
                t.effects && t.effects.effect[u]
                  ? i.dpDiv.show(u, t.datepicker._get(i, "showOptions"), h)
                  : i.dpDiv[u || "show"](u ? h : null),
                t.datepicker._shouldFocusInput(i) && i.input.focus(),
                (t.datepicker._curInst = i)));
        }
      },
      _updateDatepicker: function (e) {
        (this.maxRows = 4),
          (v = e),
          e.dpDiv.empty().append(this._generateHTML(e)),
          this._attachHandlers(e);
        var i,
          n = this._getNumberOfMonths(e),
          s = n[1],
          o = 17,
          a = e.dpDiv.find("." + this._dayOverClass + " a");
        a.length > 0 && r.apply(a.get(0)),
          e.dpDiv
            .removeClass(
              "ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4"
            )
            .width(""),
          s > 1 &&
            e.dpDiv
              .addClass("ui-datepicker-multi-" + s)
              .css("width", o * s + "em"),
          e.dpDiv[(1 !== n[0] || 1 !== n[1] ? "add" : "remove") + "Class"](
            "ui-datepicker-multi"
          ),
          e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"](
            "ui-datepicker-rtl"
          ),
          e === t.datepicker._curInst &&
            t.datepicker._datepickerShowing &&
            t.datepicker._shouldFocusInput(e) &&
            e.input.focus(),
          e.yearshtml &&
            ((i = e.yearshtml),
            setTimeout(function () {
              i === e.yearshtml &&
                e.yearshtml &&
                e.dpDiv
                  .find("select.ui-datepicker-year:first")
                  .replaceWith(e.yearshtml),
                (i = e.yearshtml = null);
            }, 0));
      },
      _shouldFocusInput: function (t) {
        return (
          t.input &&
          t.input.is(":visible") &&
          !t.input.is(":disabled") &&
          !t.input.is(":focus")
        );
      },
      _checkOffset: function (e, i, n) {
        var s = e.dpDiv.outerWidth(),
          o = e.dpDiv.outerHeight(),
          r = e.input ? e.input.outerWidth() : 0,
          a = e.input ? e.input.outerHeight() : 0,
          l =
            document.documentElement.clientWidth +
            (n ? 0 : t(document).scrollLeft()),
          u =
            document.documentElement.clientHeight +
            (n ? 0 : t(document).scrollTop());
        return (
          (i.left -= this._get(e, "isRTL") ? s - r : 0),
          (i.left -=
            n && i.left === e.input.offset().left
              ? t(document).scrollLeft()
              : 0),
          (i.top -=
            n && i.top === e.input.offset().top + a
              ? t(document).scrollTop()
              : 0),
          (i.left -= Math.min(
            i.left,
            i.left + s > l && l > s ? Math.abs(i.left + s - l) : 0
          )),
          (i.top -= Math.min(
            i.top,
            i.top + o > u && u > o ? Math.abs(o + a) : 0
          )),
          i
        );
      },
      _findPos: function (e) {
        for (
          var i, n = this._getInst(e), s = this._get(n, "isRTL");
          e &&
          ("hidden" === e.type || 1 !== e.nodeType || t.expr.filters.hidden(e));

        )
          e = e[s ? "previousSibling" : "nextSibling"];
        return (i = t(e).offset()), [i.left, i.top];
      },
      _hideDatepicker: function (e) {
        var i,
          n,
          s,
          o,
          r = this._curInst;
        !r ||
          (e && r !== t.data(e, "datepicker")) ||
          (this._datepickerShowing &&
            ((i = this._get(r, "showAnim")),
            (n = this._get(r, "duration")),
            (s = function () {
              t.datepicker._tidyDialog(r);
            }),
            t.effects && (t.effects.effect[i] || t.effects[i])
              ? r.dpDiv.hide(i, t.datepicker._get(r, "showOptions"), n, s)
              : r.dpDiv[
                  "slideDown" === i
                    ? "slideUp"
                    : "fadeIn" === i
                    ? "fadeOut"
                    : "hide"
                ](i ? n : null, s),
            i || s(),
            (this._datepickerShowing = !1),
            (o = this._get(r, "onClose")),
            o &&
              o.apply(r.input ? r.input[0] : null, [
                r.input ? r.input.val() : "",
                r,
              ]),
            (this._lastInput = null),
            this._inDialog &&
              (this._dialogInput.css({
                position: "absolute",
                left: "0",
                top: "-100px",
              }),
              t.blockUI && (t.unblockUI(), t("body").append(this.dpDiv))),
            (this._inDialog = !1)));
      },
      _tidyDialog: function (t) {
        t.dpDiv
          .removeClass(this._dialogClass)
          .unbind(".ui-datepicker-calendar");
      },
      _checkExternalClick: function (e) {
        if (t.datepicker._curInst) {
          var i = t(e.target),
            n = t.datepicker._getInst(i[0]);
          ((i[0].id !== t.datepicker._mainDivId &&
            0 === i.parents("#" + t.datepicker._mainDivId).length &&
            !i.hasClass(t.datepicker.markerClassName) &&
            !i.closest("." + t.datepicker._triggerClass).length &&
            t.datepicker._datepickerShowing &&
            (!t.datepicker._inDialog || !t.blockUI)) ||
            (i.hasClass(t.datepicker.markerClassName) &&
              t.datepicker._curInst !== n)) &&
            t.datepicker._hideDatepicker();
        }
      },
      _adjustDate: function (e, i, n) {
        var s = t(e),
          o = this._getInst(s[0]);
        this._isDisabledDatepicker(s[0]) ||
          (this._adjustInstDate(
            o,
            i + ("M" === n ? this._get(o, "showCurrentAtPos") : 0),
            n
          ),
          this._updateDatepicker(o));
      },
      _gotoToday: function (e) {
        var i,
          n = t(e),
          s = this._getInst(n[0]);
        this._get(s, "gotoCurrent") && s.currentDay
          ? ((s.selectedDay = s.currentDay),
            (s.drawMonth = s.selectedMonth = s.currentMonth),
            (s.drawYear = s.selectedYear = s.currentYear))
          : ((i = new Date()),
            (s.selectedDay = i.getDate()),
            (s.drawMonth = s.selectedMonth = i.getMonth()),
            (s.drawYear = s.selectedYear = i.getFullYear())),
          this._notifyChange(s),
          this._adjustDate(n);
      },
      _selectMonthYear: function (e, i, n) {
        var s = t(e),
          o = this._getInst(s[0]);
        (o["selected" + ("M" === n ? "Month" : "Year")] = o[
          "draw" + ("M" === n ? "Month" : "Year")
        ] =
          parseInt(i.options[i.selectedIndex].value, 10)),
          this._notifyChange(o),
          this._adjustDate(s);
      },
      _selectDay: function (e, i, n, s) {
        var o,
          r = t(e);
        t(s).hasClass(this._unselectableClass) ||
          this._isDisabledDatepicker(r[0]) ||
          ((o = this._getInst(r[0])),
          (o.selectedDay = o.currentDay = t("a", s).html()),
          (o.selectedMonth = o.currentMonth = i),
          (o.selectedYear = o.currentYear = n),
          this._selectDate(
            e,
            this._formatDate(o, o.currentDay, o.currentMonth, o.currentYear)
          ));
      },
      _clearDate: function (e) {
        var i = t(e);
        this._selectDate(i, "");
      },
      _selectDate: function (e, i) {
        var n,
          s = t(e),
          o = this._getInst(s[0]);
        (i = null != i ? i : this._formatDate(o)),
          o.input && o.input.val(i),
          this._updateAlternate(o),
          (n = this._get(o, "onSelect")),
          n
            ? n.apply(o.input ? o.input[0] : null, [i, o])
            : o.input && o.input.trigger("change"),
          o.inline
            ? this._updateDatepicker(o)
            : (this._hideDatepicker(),
              (this._lastInput = o.input[0]),
              "object" != typeof o.input[0] && o.input.focus(),
              (this._lastInput = null));
      },
      _updateAlternate: function (e) {
        var i,
          n,
          s,
          o = this._get(e, "altField");
        o &&
          ((i = this._get(e, "altFormat") || this._get(e, "dateFormat")),
          (n = this._getDate(e)),
          (s = this.formatDate(i, n, this._getFormatConfig(e))),
          t(o).each(function () {
            t(this).val(s);
          }));
      },
      noWeekends: function (t) {
        var e = t.getDay();
        return [e > 0 && 6 > e, ""];
      },
      iso8601Week: function (t) {
        var e,
          i = new Date(t.getTime());
        return (
          i.setDate(i.getDate() + 4 - (i.getDay() || 7)),
          (e = i.getTime()),
          i.setMonth(0),
          i.setDate(1),
          Math.floor(Math.round((e - i) / 864e5) / 7) + 1
        );
      },
      parseDate: function (e, i, n) {
        if (null == e || null == i) throw "Invalid arguments";
        if (((i = "object" == typeof i ? "" + i : i + ""), "" === i))
          return null;
        var s,
          o,
          r,
          a,
          l = 0,
          u = (n ? n.shortYearCutoff : null) || this._defaults.shortYearCutoff,
          h =
            "string" != typeof u
              ? u
              : (new Date().getFullYear() % 100) + parseInt(u, 10),
          c = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort,
          d = (n ? n.dayNames : null) || this._defaults.dayNames,
          p = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort,
          f = (n ? n.monthNames : null) || this._defaults.monthNames,
          m = -1,
          g = -1,
          v = -1,
          y = -1,
          b = !1,
          _ = function (t) {
            var i = e.length > s + 1 && e.charAt(s + 1) === t;
            return i && s++, i;
          },
          w = function (t) {
            var e = _(t),
              n =
                "@" === t
                  ? 14
                  : "!" === t
                  ? 20
                  : "y" === t && e
                  ? 4
                  : "o" === t
                  ? 3
                  : 2,
              s = "y" === t ? n : 1,
              o = RegExp("^\\d{" + s + "," + n + "}"),
              r = i.substring(l).match(o);
            if (!r) throw "Missing number at position " + l;
            return (l += r[0].length), parseInt(r[0], 10);
          },
          x = function (e, n, s) {
            var o = -1,
              r = t
                .map(_(e) ? s : n, function (t, e) {
                  return [[e, t]];
                })
                .sort(function (t, e) {
                  return -(t[1].length - e[1].length);
                });
            if (
              (t.each(r, function (t, e) {
                var n = e[1];
                return i.substr(l, n.length).toLowerCase() === n.toLowerCase()
                  ? ((o = e[0]), (l += n.length), !1)
                  : void 0;
              }),
              -1 !== o)
            )
              return o + 1;
            throw "Unknown name at position " + l;
          },
          k = function () {
            if (i.charAt(l) !== e.charAt(s))
              throw "Unexpected literal at position " + l;
            l++;
          };
        for (s = 0; e.length > s; s++)
          if (b) "'" !== e.charAt(s) || _("'") ? k() : (b = !1);
          else
            switch (e.charAt(s)) {
              case "d":
                v = w("d");
                break;
              case "D":
                x("D", c, d);
                break;
              case "o":
                y = w("o");
                break;
              case "m":
                g = w("m");
                break;
              case "M":
                g = x("M", p, f);
                break;
              case "y":
                m = w("y");
                break;
              case "@":
                (a = new Date(w("@"))),
                  (m = a.getFullYear()),
                  (g = a.getMonth() + 1),
                  (v = a.getDate());
                break;
              case "!":
                (a = new Date((w("!") - this._ticksTo1970) / 1e4)),
                  (m = a.getFullYear()),
                  (g = a.getMonth() + 1),
                  (v = a.getDate());
                break;
              case "'":
                _("'") ? k() : (b = !0);
                break;
              default:
                k();
            }
        if (i.length > l && ((r = i.substr(l)), !/^\s+/.test(r)))
          throw "Extra/unparsed characters found in date: " + r;
        if (
          (-1 === m
            ? (m = new Date().getFullYear())
            : 100 > m &&
              (m +=
                new Date().getFullYear() -
                (new Date().getFullYear() % 100) +
                (h >= m ? 0 : -100)),
          y > -1)
        )
          for (g = 1, v = y; (o = this._getDaysInMonth(m, g - 1)), !(o >= v); )
            g++, (v -= o);
        if (
          ((a = this._daylightSavingAdjust(new Date(m, g - 1, v))),
          a.getFullYear() !== m || a.getMonth() + 1 !== g || a.getDate() !== v)
        )
          throw "Invalid date";
        return a;
      },
      ATOM: "yy-mm-dd",
      COOKIE: "D, dd M yy",
      ISO_8601: "yy-mm-dd",
      RFC_822: "D, d M y",
      RFC_850: "DD, dd-M-y",
      RFC_1036: "D, d M y",
      RFC_1123: "D, d M yy",
      RFC_2822: "D, d M yy",
      RSS: "D, d M y",
      TICKS: "!",
      TIMESTAMP: "@",
      W3C: "yy-mm-dd",
      _ticksTo1970:
        864e9 *
        (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
      formatDate: function (t, e, i) {
        if (!e) return "";
        var n,
          s = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
          o = (i ? i.dayNames : null) || this._defaults.dayNames,
          r = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
          a = (i ? i.monthNames : null) || this._defaults.monthNames,
          l = function (e) {
            var i = t.length > n + 1 && t.charAt(n + 1) === e;
            return i && n++, i;
          },
          u = function (t, e, i) {
            var n = "" + e;
            if (l(t)) for (; i > n.length; ) n = "0" + n;
            return n;
          },
          h = function (t, e, i, n) {
            return l(t) ? n[e] : i[e];
          },
          c = "",
          d = !1;
        if (e)
          for (n = 0; t.length > n; n++)
            if (d)
              "'" !== t.charAt(n) || l("'") ? (c += t.charAt(n)) : (d = !1);
            else
              switch (t.charAt(n)) {
                case "d":
                  c += u("d", e.getDate(), 2);
                  break;
                case "D":
                  c += h("D", e.getDay(), s, o);
                  break;
                case "o":
                  c += u(
                    "o",
                    Math.round(
                      (new Date(
                        e.getFullYear(),
                        e.getMonth(),
                        e.getDate()
                      ).getTime() -
                        new Date(e.getFullYear(), 0, 0).getTime()) /
                        864e5
                    ),
                    3
                  );
                  break;
                case "m":
                  c += u("m", e.getMonth() + 1, 2);
                  break;
                case "M":
                  c += h("M", e.getMonth(), r, a);
                  break;
                case "y":
                  c += l("y")
                    ? e.getFullYear()
                    : (10 > e.getYear() % 100 ? "0" : "") + (e.getYear() % 100);
                  break;
                case "@":
                  c += e.getTime();
                  break;
                case "!":
                  c += 1e4 * e.getTime() + this._ticksTo1970;
                  break;
                case "'":
                  l("'") ? (c += "'") : (d = !0);
                  break;
                default:
                  c += t.charAt(n);
              }
        return c;
      },
      _possibleChars: function (t) {
        var e,
          i = "",
          n = !1,
          s = function (i) {
            var n = t.length > e + 1 && t.charAt(e + 1) === i;
            return n && e++, n;
          };
        for (e = 0; t.length > e; e++)
          if (n) "'" !== t.charAt(e) || s("'") ? (i += t.charAt(e)) : (n = !1);
          else
            switch (t.charAt(e)) {
              case "d":
              case "m":
              case "y":
              case "@":
                i += "0123456789";
                break;
              case "D":
              case "M":
                return null;
              case "'":
                s("'") ? (i += "'") : (n = !0);
                break;
              default:
                i += t.charAt(e);
            }
        return i;
      },
      _get: function (t, e) {
        return void 0 !== t.settings[e] ? t.settings[e] : this._defaults[e];
      },
      _setDateFromField: function (t, e) {
        if (t.input.val() !== t.lastVal) {
          var i = this._get(t, "dateFormat"),
            n = (t.lastVal = t.input ? t.input.val() : null),
            s = this._getDefaultDate(t),
            o = s,
            r = this._getFormatConfig(t);
          try {
            o = this.parseDate(i, n, r) || s;
          } catch (a) {
            n = e ? "" : n;
          }
          (t.selectedDay = o.getDate()),
            (t.drawMonth = t.selectedMonth = o.getMonth()),
            (t.drawYear = t.selectedYear = o.getFullYear()),
            (t.currentDay = n ? o.getDate() : 0),
            (t.currentMonth = n ? o.getMonth() : 0),
            (t.currentYear = n ? o.getFullYear() : 0),
            this._adjustInstDate(t);
        }
      },
      _getDefaultDate: function (t) {
        return this._restrictMinMax(
          t,
          this._determineDate(t, this._get(t, "defaultDate"), new Date())
        );
      },
      _determineDate: function (e, i, n) {
        var s = function (t) {
            var e = new Date();
            return e.setDate(e.getDate() + t), e;
          },
          o = function (i) {
            try {
              return t.datepicker.parseDate(
                t.datepicker._get(e, "dateFormat"),
                i,
                t.datepicker._getFormatConfig(e)
              );
            } catch (n) {}
            for (
              var s =
                  (i.toLowerCase().match(/^c/)
                    ? t.datepicker._getDate(e)
                    : null) || new Date(),
                o = s.getFullYear(),
                r = s.getMonth(),
                a = s.getDate(),
                l = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,
                u = l.exec(i);
              u;

            ) {
              switch (u[2] || "d") {
                case "d":
                case "D":
                  a += parseInt(u[1], 10);
                  break;
                case "w":
                case "W":
                  a += 7 * parseInt(u[1], 10);
                  break;
                case "m":
                case "M":
                  (r += parseInt(u[1], 10)),
                    (a = Math.min(a, t.datepicker._getDaysInMonth(o, r)));
                  break;
                case "y":
                case "Y":
                  (o += parseInt(u[1], 10)),
                    (a = Math.min(a, t.datepicker._getDaysInMonth(o, r)));
              }
              u = l.exec(i);
            }
            return new Date(o, r, a);
          },
          r =
            null == i || "" === i
              ? n
              : "string" == typeof i
              ? o(i)
              : "number" == typeof i
              ? isNaN(i)
                ? n
                : s(i)
              : new Date(i.getTime());
        return (
          (r = r && "Invalid Date" == "" + r ? n : r),
          r &&
            (r.setHours(0),
            r.setMinutes(0),
            r.setSeconds(0),
            r.setMilliseconds(0)),
          this._daylightSavingAdjust(r)
        );
      },
      _daylightSavingAdjust: function (t) {
        return t
          ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t)
          : null;
      },
      _setDate: function (t, e, i) {
        var n = !e,
          s = t.selectedMonth,
          o = t.selectedYear,
          r = this._restrictMinMax(t, this._determineDate(t, e, new Date()));
        (t.selectedDay = t.currentDay = r.getDate()),
          (t.drawMonth = t.selectedMonth = t.currentMonth = r.getMonth()),
          (t.drawYear = t.selectedYear = t.currentYear = r.getFullYear()),
          (s === t.selectedMonth && o === t.selectedYear) ||
            i ||
            this._notifyChange(t),
          this._adjustInstDate(t),
          t.input && t.input.val(n ? "" : this._formatDate(t));
      },
      _getDate: function (t) {
        var e =
          !t.currentYear || (t.input && "" === t.input.val())
            ? null
            : this._daylightSavingAdjust(
                new Date(t.currentYear, t.currentMonth, t.currentDay)
              );
        return e;
      },
      _attachHandlers: function (e) {
        var i = this._get(e, "stepMonths"),
          n = "#" + e.id.replace(/\\\\/g, "\\");
        e.dpDiv.find("[data-handler]").map(function () {
          var e = {
            prev: function () {
              t.datepicker._adjustDate(n, -i, "M");
            },
            next: function () {
              t.datepicker._adjustDate(n, +i, "M");
            },
            hide: function () {
              t.datepicker._hideDatepicker();
            },
            today: function () {
              t.datepicker._gotoToday(n);
            },
            selectDay: function () {
              return (
                t.datepicker._selectDay(
                  n,
                  +this.getAttribute("data-month"),
                  +this.getAttribute("data-year"),
                  this
                ),
                !1
              );
            },
            selectMonth: function () {
              return t.datepicker._selectMonthYear(n, this, "M"), !1;
            },
            selectYear: function () {
              return t.datepicker._selectMonthYear(n, this, "Y"), !1;
            },
          };
          t(this).bind(
            this.getAttribute("data-event"),
            e[this.getAttribute("data-handler")]
          );
        });
      },
      _generateHTML: function (t) {
        var e,
          i,
          n,
          s,
          o,
          r,
          a,
          l,
          u,
          h,
          c,
          d,
          p,
          f,
          m,
          g,
          v,
          y,
          b,
          _,
          w,
          x,
          k,
          C,
          S,
          D,
          T,
          E,
          P,
          I,
          M,
          N,
          A,
          j,
          H,
          O,
          z,
          L,
          W,
          F = new Date(),
          R = this._daylightSavingAdjust(
            new Date(F.getFullYear(), F.getMonth(), F.getDate())
          ),
          q = this._get(t, "isRTL"),
          B = this._get(t, "showButtonPanel"),
          $ = this._get(t, "hideIfNoPrevNext"),
          Q = this._get(t, "navigationAsDateFormat"),
          Y = this._getNumberOfMonths(t),
          U = this._get(t, "showCurrentAtPos"),
          V = this._get(t, "stepMonths"),
          K = 1 !== Y[0] || 1 !== Y[1],
          X = this._daylightSavingAdjust(
            t.currentDay
              ? new Date(t.currentYear, t.currentMonth, t.currentDay)
              : new Date(9999, 9, 9)
          ),
          G = this._getMinMaxDate(t, "min"),
          J = this._getMinMaxDate(t, "max"),
          Z = t.drawMonth - U,
          te = t.drawYear;
        if ((0 > Z && ((Z += 12), te--), J))
          for (
            e = this._daylightSavingAdjust(
              new Date(
                J.getFullYear(),
                J.getMonth() - Y[0] * Y[1] + 1,
                J.getDate()
              )
            ),
              e = G && G > e ? G : e;
            this._daylightSavingAdjust(new Date(te, Z, 1)) > e;

          )
            Z--, 0 > Z && ((Z = 11), te--);
        for (
          t.drawMonth = Z,
            t.drawYear = te,
            i = this._get(t, "prevText"),
            i = Q
              ? this.formatDate(
                  i,
                  this._daylightSavingAdjust(new Date(te, Z - V, 1)),
                  this._getFormatConfig(t)
                )
              : i,
            n = this._canAdjustMonth(t, -1, te, Z)
              ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" +
                i +
                "'><span class='ui-icon ui-icon-circle-triangle-" +
                (q ? "e" : "w") +
                "'>" +
                i +
                "</span></a>"
              : $
              ? ""
              : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" +
                i +
                "'><span class='ui-icon ui-icon-circle-triangle-" +
                (q ? "e" : "w") +
                "'>" +
                i +
                "</span></a>",
            s = this._get(t, "nextText"),
            s = Q
              ? this.formatDate(
                  s,
                  this._daylightSavingAdjust(new Date(te, Z + V, 1)),
                  this._getFormatConfig(t)
                )
              : s,
            o = this._canAdjustMonth(t, 1, te, Z)
              ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" +
                s +
                "'><span class='ui-icon ui-icon-circle-triangle-" +
                (q ? "w" : "e") +
                "'>" +
                s +
                "</span></a>"
              : $
              ? ""
              : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" +
                s +
                "'><span class='ui-icon ui-icon-circle-triangle-" +
                (q ? "w" : "e") +
                "'>" +
                s +
                "</span></a>",
            r = this._get(t, "currentText"),
            a = this._get(t, "gotoCurrent") && t.currentDay ? X : R,
            r = Q ? this.formatDate(r, a, this._getFormatConfig(t)) : r,
            l = t.inline
              ? ""
              : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" +
                this._get(t, "closeText") +
                "</button>",
            u = B
              ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" +
                (q ? l : "") +
                (this._isInRange(t, a)
                  ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" +
                    r +
                    "</button>"
                  : "") +
                (q ? "" : l) +
                "</div>"
              : "",
            h = parseInt(this._get(t, "firstDay"), 10),
            h = isNaN(h) ? 0 : h,
            c = this._get(t, "showWeek"),
            d = this._get(t, "dayNames"),
            p = this._get(t, "dayNamesMin"),
            f = this._get(t, "monthNames"),
            m = this._get(t, "monthNamesShort"),
            g = this._get(t, "beforeShowDay"),
            v = this._get(t, "showOtherMonths"),
            y = this._get(t, "selectOtherMonths"),
            b = this._getDefaultDate(t),
            _ = "",
            x = 0;
          Y[0] > x;
          x++
        ) {
          for (k = "", this.maxRows = 4, C = 0; Y[1] > C; C++) {
            if (
              ((S = this._daylightSavingAdjust(new Date(te, Z, t.selectedDay))),
              (D = " ui-corner-all"),
              (T = ""),
              K)
            ) {
              if (((T += "<div class='ui-datepicker-group"), Y[1] > 1))
                switch (C) {
                  case 0:
                    (T += " ui-datepicker-group-first"),
                      (D = " ui-corner-" + (q ? "right" : "left"));
                    break;
                  case Y[1] - 1:
                    (T += " ui-datepicker-group-last"),
                      (D = " ui-corner-" + (q ? "left" : "right"));
                    break;
                  default:
                    (T += " ui-datepicker-group-middle"), (D = "");
                }
              T += "'>";
            }
            for (
              T +=
                "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" +
                D +
                "'>" +
                (/all|left/.test(D) && 0 === x ? (q ? o : n) : "") +
                (/all|right/.test(D) && 0 === x ? (q ? n : o) : "") +
                this._generateMonthYearHeader(
                  t,
                  Z,
                  te,
                  G,
                  J,
                  x > 0 || C > 0,
                  f,
                  m
                ) +
                "</div><table class='ui-datepicker-calendar'><thead><tr>",
                E = c
                  ? "<th class='ui-datepicker-week-col'>" +
                    this._get(t, "weekHeader") +
                    "</th>"
                  : "",
                w = 0;
              7 > w;
              w++
            )
              (P = (w + h) % 7),
                (E +=
                  "<th scope='col'" +
                  ((w + h + 6) % 7 >= 5
                    ? " class='ui-datepicker-week-end'"
                    : "") +
                  "><span title='" +
                  d[P] +
                  "'>" +
                  p[P] +
                  "</span></th>");
            for (
              T += E + "</tr></thead><tbody>",
                I = this._getDaysInMonth(te, Z),
                te === t.selectedYear &&
                  Z === t.selectedMonth &&
                  (t.selectedDay = Math.min(t.selectedDay, I)),
                M = (this._getFirstDayOfMonth(te, Z) - h + 7) % 7,
                N = Math.ceil((M + I) / 7),
                A = K && this.maxRows > N ? this.maxRows : N,
                this.maxRows = A,
                j = this._daylightSavingAdjust(new Date(te, Z, 1 - M)),
                H = 0;
              A > H;
              H++
            ) {
              for (
                T += "<tr>",
                  O = c
                    ? "<td class='ui-datepicker-week-col'>" +
                      this._get(t, "calculateWeek")(j) +
                      "</td>"
                    : "",
                  w = 0;
                7 > w;
                w++
              )
                (z = g ? g.apply(t.input ? t.input[0] : null, [j]) : [!0, ""]),
                  (L = j.getMonth() !== Z),
                  (W = (L && !y) || !z[0] || (G && G > j) || (J && j > J)),
                  (O +=
                    "<td class='" +
                    ((w + h + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") +
                    (L ? " ui-datepicker-other-month" : "") +
                    ((j.getTime() === S.getTime() &&
                      Z === t.selectedMonth &&
                      t._keyEvent) ||
                    (b.getTime() === j.getTime() && b.getTime() === S.getTime())
                      ? " " + this._dayOverClass
                      : "") +
                    (W
                      ? " " + this._unselectableClass + " ui-state-disabled"
                      : "") +
                    (L && !v
                      ? ""
                      : " " +
                        z[1] +
                        (j.getTime() === X.getTime()
                          ? " " + this._currentClass
                          : "") +
                        (j.getTime() === R.getTime()
                          ? " ui-datepicker-today"
                          : "")) +
                    "'" +
                    ((L && !v) || !z[2]
                      ? ""
                      : " title='" + z[2].replace(/'/g, "&#39;") + "'") +
                    (W
                      ? ""
                      : " data-handler='selectDay' data-event='click' data-month='" +
                        j.getMonth() +
                        "' data-year='" +
                        j.getFullYear() +
                        "'") +
                    ">" +
                    (L && !v
                      ? "&#xa0;"
                      : W
                      ? "<span class='ui-state-default'>" +
                        j.getDate() +
                        "</span>"
                      : "<a class='ui-state-default" +
                        (j.getTime() === R.getTime()
                          ? " ui-state-highlight"
                          : "") +
                        (j.getTime() === X.getTime()
                          ? " ui-state-active"
                          : "") +
                        (L ? " ui-priority-secondary" : "") +
                        "' href='#'>" +
                        j.getDate() +
                        "</a>") +
                    "</td>"),
                  j.setDate(j.getDate() + 1),
                  (j = this._daylightSavingAdjust(j));
              T += O + "</tr>";
            }
            Z++,
              Z > 11 && ((Z = 0), te++),
              (T +=
                "</tbody></table>" +
                (K
                  ? "</div>" +
                    (Y[0] > 0 && C === Y[1] - 1
                      ? "<div class='ui-datepicker-row-break'></div>"
                      : "")
                  : "")),
              (k += T);
          }
          _ += k;
        }
        return (_ += u), (t._keyEvent = !1), _;
      },
      _generateMonthYearHeader: function (t, e, i, n, s, o, r, a) {
        var l,
          u,
          h,
          c,
          d,
          p,
          f,
          m,
          g = this._get(t, "changeMonth"),
          v = this._get(t, "changeYear"),
          y = this._get(t, "showMonthAfterYear"),
          b = "<div class='ui-datepicker-title'>",
          _ = "";
        if (o || !g)
          _ += "<span class='ui-datepicker-month'>" + r[e] + "</span>";
        else {
          for (
            l = n && n.getFullYear() === i,
              u = s && s.getFullYear() === i,
              _ +=
                "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",
              h = 0;
            12 > h;
            h++
          )
            (!l || h >= n.getMonth()) &&
              (!u || s.getMonth() >= h) &&
              (_ +=
                "<option value='" +
                h +
                "'" +
                (h === e ? " selected='selected'" : "") +
                ">" +
                a[h] +
                "</option>");
          _ += "</select>";
        }
        if ((y || (b += _ + (!o && g && v ? "" : "&#xa0;")), !t.yearshtml))
          if (((t.yearshtml = ""), o || !v))
            b += "<span class='ui-datepicker-year'>" + i + "</span>";
          else {
            for (
              c = this._get(t, "yearRange").split(":"),
                d = new Date().getFullYear(),
                p = function (t) {
                  var e = t.match(/c[+\-].*/)
                    ? i + parseInt(t.substring(1), 10)
                    : t.match(/[+\-].*/)
                    ? d + parseInt(t, 10)
                    : parseInt(t, 10);
                  return isNaN(e) ? d : e;
                },
                f = p(c[0]),
                m = Math.max(f, p(c[1] || "")),
                f = n ? Math.max(f, n.getFullYear()) : f,
                m = s ? Math.min(m, s.getFullYear()) : m,
                t.yearshtml +=
                  "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";
              m >= f;
              f++
            )
              t.yearshtml +=
                "<option value='" +
                f +
                "'" +
                (f === i ? " selected='selected'" : "") +
                ">" +
                f +
                "</option>";
            (t.yearshtml += "</select>"),
              (b += t.yearshtml),
              (t.yearshtml = null);
          }
        return (
          (b += this._get(t, "yearSuffix")),
          y && (b += (!o && g && v ? "" : "&#xa0;") + _),
          (b += "</div>")
        );
      },
      _adjustInstDate: function (t, e, i) {
        var n = t.drawYear + ("Y" === i ? e : 0),
          s = t.drawMonth + ("M" === i ? e : 0),
          o =
            Math.min(t.selectedDay, this._getDaysInMonth(n, s)) +
            ("D" === i ? e : 0),
          r = this._restrictMinMax(
            t,
            this._daylightSavingAdjust(new Date(n, s, o))
          );
        (t.selectedDay = r.getDate()),
          (t.drawMonth = t.selectedMonth = r.getMonth()),
          (t.drawYear = t.selectedYear = r.getFullYear()),
          ("M" === i || "Y" === i) && this._notifyChange(t);
      },
      _restrictMinMax: function (t, e) {
        var i = this._getMinMaxDate(t, "min"),
          n = this._getMinMaxDate(t, "max"),
          s = i && i > e ? i : e;
        return n && s > n ? n : s;
      },
      _notifyChange: function (t) {
        var e = this._get(t, "onChangeMonthYear");
        e &&
          e.apply(t.input ? t.input[0] : null, [
            t.selectedYear,
            t.selectedMonth + 1,
            t,
          ]);
      },
      _getNumberOfMonths: function (t) {
        var e = this._get(t, "numberOfMonths");
        return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e;
      },
      _getMinMaxDate: function (t, e) {
        return this._determineDate(t, this._get(t, e + "Date"), null);
      },
      _getDaysInMonth: function (t, e) {
        return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate();
      },
      _getFirstDayOfMonth: function (t, e) {
        return new Date(t, e, 1).getDay();
      },
      _canAdjustMonth: function (t, e, i, n) {
        var s = this._getNumberOfMonths(t),
          o = this._daylightSavingAdjust(
            new Date(i, n + (0 > e ? e : s[0] * s[1]), 1)
          );
        return (
          0 > e &&
            o.setDate(this._getDaysInMonth(o.getFullYear(), o.getMonth())),
          this._isInRange(t, o)
        );
      },
      _isInRange: function (t, e) {
        var i,
          n,
          s = this._getMinMaxDate(t, "min"),
          o = this._getMinMaxDate(t, "max"),
          r = null,
          a = null,
          l = this._get(t, "yearRange");
        return (
          l &&
            ((i = l.split(":")),
            (n = new Date().getFullYear()),
            (r = parseInt(i[0], 10)),
            (a = parseInt(i[1], 10)),
            i[0].match(/[+\-].*/) && (r += n),
            i[1].match(/[+\-].*/) && (a += n)),
          (!s || e.getTime() >= s.getTime()) &&
            (!o || e.getTime() <= o.getTime()) &&
            (!r || e.getFullYear() >= r) &&
            (!a || a >= e.getFullYear())
        );
      },
      _getFormatConfig: function (t) {
        var e = this._get(t, "shortYearCutoff");
        return (
          (e =
            "string" != typeof e
              ? e
              : (new Date().getFullYear() % 100) + parseInt(e, 10)),
          {
            shortYearCutoff: e,
            dayNamesShort: this._get(t, "dayNamesShort"),
            dayNames: this._get(t, "dayNames"),
            monthNamesShort: this._get(t, "monthNamesShort"),
            monthNames: this._get(t, "monthNames"),
          }
        );
      },
      _formatDate: function (t, e, i, n) {
        e ||
          ((t.currentDay = t.selectedDay),
          (t.currentMonth = t.selectedMonth),
          (t.currentYear = t.selectedYear));
        var s = e
          ? "object" == typeof e
            ? e
            : this._daylightSavingAdjust(new Date(n, i, e))
          : this._daylightSavingAdjust(
              new Date(t.currentYear, t.currentMonth, t.currentDay)
            );
        return this.formatDate(
          this._get(t, "dateFormat"),
          s,
          this._getFormatConfig(t)
        );
      },
    }),
      (t.fn.datepicker = function (e) {
        if (!this.length) return this;
        t.datepicker.initialized ||
          (t(document).mousedown(t.datepicker._checkExternalClick),
          (t.datepicker.initialized = !0)),
          0 === t("#" + t.datepicker._mainDivId).length &&
            t("body").append(t.datepicker.dpDiv);
        var i = Array.prototype.slice.call(arguments, 1);
        return "string" != typeof e ||
          ("isDisabled" !== e && "getDate" !== e && "widget" !== e)
          ? "option" === e &&
            2 === arguments.length &&
            "string" == typeof arguments[1]
            ? t.datepicker["_" + e + "Datepicker"].apply(
                t.datepicker,
                [this[0]].concat(i)
              )
            : this.each(function () {
                "string" == typeof e
                  ? t.datepicker["_" + e + "Datepicker"].apply(
                      t.datepicker,
                      [this].concat(i)
                    )
                  : t.datepicker._attachDatepicker(this, e);
              })
          : t.datepicker["_" + e + "Datepicker"].apply(
              t.datepicker,
              [this[0]].concat(i)
            );
      }),
      (t.datepicker = new s()),
      (t.datepicker.initialized = !1),
      (t.datepicker.uuid = new Date().getTime()),
      (t.datepicker.version = "1.11.2"),
      t.datepicker,
      t.widget("ui.dialog", {
        version: "1.11.2",
        options: {
          appendTo: "body",
          autoOpen: !0,
          buttons: [],
          closeOnEscape: !0,
          closeText: "Close",
          dialogClass: "",
          draggable: !0,
          hide: null,
          height: "auto",
          maxHeight: null,
          maxWidth: null,
          minHeight: 150,
          minWidth: 150,
          modal: !1,
          position: {
            my: "center",
            at: "center",
            of: window,
            collision: "fit",
            using: function (e) {
              var i = t(this).css(e).offset().top;
              0 > i && t(this).css("top", e.top - i);
            },
          },
          resizable: !0,
          show: null,
          title: null,
          width: 300,
          beforeClose: null,
          close: null,
          drag: null,
          dragStart: null,
          dragStop: null,
          focus: null,
          open: null,
          resize: null,
          resizeStart: null,
          resizeStop: null,
        },
        sizeRelatedOptions: {
          buttons: !0,
          height: !0,
          maxHeight: !0,
          maxWidth: !0,
          minHeight: !0,
          minWidth: !0,
          width: !0,
        },
        resizableRelatedOptions: {
          maxHeight: !0,
          maxWidth: !0,
          minHeight: !0,
          minWidth: !0,
        },
        _create: function () {
          (this.originalCss = {
            display: this.element[0].style.display,
            width: this.element[0].style.width,
            minHeight: this.element[0].style.minHeight,
            maxHeight: this.element[0].style.maxHeight,
            height: this.element[0].style.height,
          }),
            (this.originalPosition = {
              parent: this.element.parent(),
              index: this.element.parent().children().index(this.element),
            }),
            (this.originalTitle = this.element.attr("title")),
            (this.options.title = this.options.title || this.originalTitle),
            this._createWrapper(),
            this.element
              .show()
              .removeAttr("title")
              .addClass("ui-dialog-content ui-widget-content")
              .appendTo(this.uiDialog),
            this._createTitlebar(),
            this._createButtonPane(),
            this.options.draggable && t.fn.draggable && this._makeDraggable(),
            this.options.resizable && t.fn.resizable && this._makeResizable(),
            (this._isOpen = !1),
            this._trackFocus();
        },
        _init: function () {
          this.options.autoOpen && this.open();
        },
        _appendTo: function () {
          var e = this.options.appendTo;
          return e && (e.jquery || e.nodeType)
            ? t(e)
            : this.document.find(e || "body").eq(0);
        },
        _destroy: function () {
          var t,
            e = this.originalPosition;
          this._destroyOverlay(),
            this.element
              .removeUniqueId()
              .removeClass("ui-dialog-content ui-widget-content")
              .css(this.originalCss)
              .detach(),
            this.uiDialog.stop(!0, !0).remove(),
            this.originalTitle &&
              this.element.attr("title", this.originalTitle),
            (t = e.parent.children().eq(e.index)),
            t.length && t[0] !== this.element[0]
              ? t.before(this.element)
              : e.parent.append(this.element);
        },
        widget: function () {
          return this.uiDialog;
        },
        disable: t.noop,
        enable: t.noop,
        close: function (e) {
          var i,
            n = this;
          if (this._isOpen && this._trigger("beforeClose", e) !== !1) {
            if (
              ((this._isOpen = !1),
              (this._focusedElement = null),
              this._destroyOverlay(),
              this._untrackInstance(),
              !this.opener.filter(":focusable").focus().length)
            )
              try {
                (i = this.document[0].activeElement),
                  i && "body" !== i.nodeName.toLowerCase() && t(i).blur();
              } catch (s) {}
            this._hide(this.uiDialog, this.options.hide, function () {
              n._trigger("close", e);
            });
          }
        },
        isOpen: function () {
          return this._isOpen;
        },
        moveToTop: function () {
          this._moveToTop();
        },
        _moveToTop: function (e, i) {
          var n = !1,
            s = this.uiDialog
              .siblings(".ui-front:visible")
              .map(function () {
                return +t(this).css("z-index");
              })
              .get(),
            o = Math.max.apply(null, s);
          return (
            o >= +this.uiDialog.css("z-index") &&
              (this.uiDialog.css("z-index", o + 1), (n = !0)),
            n && !i && this._trigger("focus", e),
            n
          );
        },
        open: function () {
          var e = this;
          return this._isOpen
            ? void (this._moveToTop() && this._focusTabbable())
            : ((this._isOpen = !0),
              (this.opener = t(this.document[0].activeElement)),
              this._size(),
              this._position(),
              this._createOverlay(),
              this._moveToTop(null, !0),
              this.overlay &&
                this.overlay.css("z-index", this.uiDialog.css("z-index") - 1),
              this._show(this.uiDialog, this.options.show, function () {
                e._focusTabbable(), e._trigger("focus");
              }),
              this._makeFocusTarget(),
              void this._trigger("open"));
        },
        _focusTabbable: function () {
          var t = this._focusedElement;
          t || (t = this.element.find("[autofocus]")),
            t.length || (t = this.element.find(":tabbable")),
            t.length || (t = this.uiDialogButtonPane.find(":tabbable")),
            t.length || (t = this.uiDialogTitlebarClose.filter(":tabbable")),
            t.length || (t = this.uiDialog),
            t.eq(0).focus();
        },
        _keepFocus: function (e) {
          function i() {
            var e = this.document[0].activeElement,
              i = this.uiDialog[0] === e || t.contains(this.uiDialog[0], e);
            i || this._focusTabbable();
          }
          e.preventDefault(), i.call(this), this._delay(i);
        },
        _createWrapper: function () {
          (this.uiDialog = t("<div>")
            .addClass(
              "ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " +
                this.options.dialogClass
            )
            .hide()
            .attr({ tabIndex: -1, role: "dialog" })
            .appendTo(this._appendTo())),
            this._on(this.uiDialog, {
              keydown: function (e) {
                if (
                  this.options.closeOnEscape &&
                  !e.isDefaultPrevented() &&
                  e.keyCode &&
                  e.keyCode === t.ui.keyCode.ESCAPE
                )
                  return e.preventDefault(), void this.close(e);
                if (e.keyCode === t.ui.keyCode.TAB && !e.isDefaultPrevented()) {
                  var i = this.uiDialog.find(":tabbable"),
                    n = i.filter(":first"),
                    s = i.filter(":last");
                  (e.target !== s[0] && e.target !== this.uiDialog[0]) ||
                  e.shiftKey
                    ? (e.target !== n[0] && e.target !== this.uiDialog[0]) ||
                      !e.shiftKey ||
                      (this._delay(function () {
                        s.focus();
                      }),
                      e.preventDefault())
                    : (this._delay(function () {
                        n.focus();
                      }),
                      e.preventDefault());
                }
              },
              mousedown: function (t) {
                this._moveToTop(t) && this._focusTabbable();
              },
            }),
            this.element.find("[aria-describedby]").length ||
              this.uiDialog.attr({
                "aria-describedby": this.element.uniqueId().attr("id"),
              });
        },
        _createTitlebar: function () {
          var e;
          (this.uiDialogTitlebar = t("<div>")
            .addClass(
              "ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix"
            )
            .prependTo(this.uiDialog)),
            this._on(this.uiDialogTitlebar, {
              mousedown: function (e) {
                t(e.target).closest(".ui-dialog-titlebar-close") ||
                  this.uiDialog.focus();
              },
            }),
            (this.uiDialogTitlebarClose = t("<button type='button'></button>")
              .button({
                label: this.options.closeText,
                icons: { primary: "ui-icon-closethick" },
                text: !1,
              })
              .addClass("ui-dialog-titlebar-close")
              .appendTo(this.uiDialogTitlebar)),
            this._on(this.uiDialogTitlebarClose, {
              click: function (t) {
                t.preventDefault(), this.close(t);
              },
            }),
            (e = t("<span>")
              .uniqueId()
              .addClass("ui-dialog-title")
              .prependTo(this.uiDialogTitlebar)),
            this._title(e),
            this.uiDialog.attr({ "aria-labelledby": e.attr("id") });
        },
        _title: function (t) {
          this.options.title || t.html("&#160;"), t.text(this.options.title);
        },
        _createButtonPane: function () {
          (this.uiDialogButtonPane = t("<div>").addClass(
            "ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"
          )),
            (this.uiButtonSet = t("<div>")
              .addClass("ui-dialog-buttonset")
              .appendTo(this.uiDialogButtonPane)),
            this._createButtons();
        },
        _createButtons: function () {
          var e = this,
            i = this.options.buttons;
          return (
            this.uiDialogButtonPane.remove(),
            this.uiButtonSet.empty(),
            t.isEmptyObject(i) || (t.isArray(i) && !i.length)
              ? void this.uiDialog.removeClass("ui-dialog-buttons")
              : (t.each(i, function (i, n) {
                  var s, o;
                  (n = t.isFunction(n) ? { click: n, text: i } : n),
                    (n = t.extend({ type: "button" }, n)),
                    (s = n.click),
                    (n.click = function () {
                      s.apply(e.element[0], arguments);
                    }),
                    (o = { icons: n.icons, text: n.showText }),
                    delete n.icons,
                    delete n.showText,
                    t("<button></button>", n).button(o).appendTo(e.uiButtonSet);
                }),
                this.uiDialog.addClass("ui-dialog-buttons"),
                void this.uiDialogButtonPane.appendTo(this.uiDialog))
          );
        },
        _makeDraggable: function () {
          function e(t) {
            return { position: t.position, offset: t.offset };
          }
          var i = this,
            n = this.options;
          this.uiDialog.draggable({
            cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
            handle: ".ui-dialog-titlebar",
            containment: "document",
            start: function (n, s) {
              t(this).addClass("ui-dialog-dragging"),
                i._blockFrames(),
                i._trigger("dragStart", n, e(s));
            },
            drag: function (t, n) {
              i._trigger("drag", t, e(n));
            },
            stop: function (s, o) {
              var r = o.offset.left - i.document.scrollLeft(),
                a = o.offset.top - i.document.scrollTop();
              (n.position = {
                my: "left top",
                at:
                  "left" +
                  (r >= 0 ? "+" : "") +
                  r +
                  " top" +
                  (a >= 0 ? "+" : "") +
                  a,
                of: i.window,
              }),
                t(this).removeClass("ui-dialog-dragging"),
                i._unblockFrames(),
                i._trigger("dragStop", s, e(o));
            },
          });
        },
        _makeResizable: function () {
          function e(t) {
            return {
              originalPosition: t.originalPosition,
              originalSize: t.originalSize,
              position: t.position,
              size: t.size,
            };
          }
          var i = this,
            n = this.options,
            s = n.resizable,
            o = this.uiDialog.css("position"),
            r = "string" == typeof s ? s : "n,e,s,w,se,sw,ne,nw";
          this.uiDialog
            .resizable({
              cancel: ".ui-dialog-content",
              containment: "document",
              alsoResize: this.element,
              maxWidth: n.maxWidth,
              maxHeight: n.maxHeight,
              minWidth: n.minWidth,
              minHeight: this._minHeight(),
              handles: r,
              start: function (n, s) {
                t(this).addClass("ui-dialog-resizing"),
                  i._blockFrames(),
                  i._trigger("resizeStart", n, e(s));
              },
              resize: function (t, n) {
                i._trigger("resize", t, e(n));
              },
              stop: function (s, o) {
                var r = i.uiDialog.offset(),
                  a = r.left - i.document.scrollLeft(),
                  l = r.top - i.document.scrollTop();
                (n.height = i.uiDialog.height()),
                  (n.width = i.uiDialog.width()),
                  (n.position = {
                    my: "left top",
                    at:
                      "left" +
                      (a >= 0 ? "+" : "") +
                      a +
                      " top" +
                      (l >= 0 ? "+" : "") +
                      l,
                    of: i.window,
                  }),
                  t(this).removeClass("ui-dialog-resizing"),
                  i._unblockFrames(),
                  i._trigger("resizeStop", s, e(o));
              },
            })
            .css("position", o);
        },
        _trackFocus: function () {
          this._on(this.widget(), {
            focusin: function (e) {
              this._makeFocusTarget(), (this._focusedElement = t(e.target));
            },
          });
        },
        _makeFocusTarget: function () {
          this._untrackInstance(), this._trackingInstances().unshift(this);
        },
        _untrackInstance: function () {
          var e = this._trackingInstances(),
            i = t.inArray(this, e);
          -1 !== i && e.splice(i, 1);
        },
        _trackingInstances: function () {
          var t = this.document.data("ui-dialog-instances");
          return (
            t || ((t = []), this.document.data("ui-dialog-instances", t)), t
          );
        },
        _minHeight: function () {
          var t = this.options;
          return "auto" === t.height
            ? t.minHeight
            : Math.min(t.minHeight, t.height);
        },
        _position: function () {
          var t = this.uiDialog.is(":visible");
          t || this.uiDialog.show(),
            this.uiDialog.position(this.options.position),
            t || this.uiDialog.hide();
        },
        _setOptions: function (e) {
          var i = this,
            n = !1,
            s = {};
          t.each(e, function (t, e) {
            i._setOption(t, e),
              t in i.sizeRelatedOptions && (n = !0),
              t in i.resizableRelatedOptions && (s[t] = e);
          }),
            n && (this._size(), this._position()),
            this.uiDialog.is(":data(ui-resizable)") &&
              this.uiDialog.resizable("option", s);
        },
        _setOption: function (t, e) {
          var i,
            n,
            s = this.uiDialog;
          "dialogClass" === t &&
            s.removeClass(this.options.dialogClass).addClass(e),
            "disabled" !== t &&
              (this._super(t, e),
              "appendTo" === t && this.uiDialog.appendTo(this._appendTo()),
              "buttons" === t && this._createButtons(),
              "closeText" === t &&
                this.uiDialogTitlebarClose.button({ label: "" + e }),
              "draggable" === t &&
                ((i = s.is(":data(ui-draggable)")),
                i && !e && s.draggable("destroy"),
                !i && e && this._makeDraggable()),
              "position" === t && this._position(),
              "resizable" === t &&
                ((n = s.is(":data(ui-resizable)")),
                n && !e && s.resizable("destroy"),
                n &&
                  "string" == typeof e &&
                  s.resizable("option", "handles", e),
                n || e === !1 || this._makeResizable()),
              "title" === t &&
                this._title(this.uiDialogTitlebar.find(".ui-dialog-title")));
        },
        _size: function () {
          var t,
            e,
            i,
            n = this.options;
          this.element
            .show()
            .css({ width: "auto", minHeight: 0, maxHeight: "none", height: 0 }),
            n.minWidth > n.width && (n.width = n.minWidth),
            (t = this.uiDialog
              .css({ height: "auto", width: n.width })
              .outerHeight()),
            (e = Math.max(0, n.minHeight - t)),
            (i =
              "number" == typeof n.maxHeight
                ? Math.max(0, n.maxHeight - t)
                : "none"),
            "auto" === n.height
              ? this.element.css({ minHeight: e, maxHeight: i, height: "auto" })
              : this.element.height(Math.max(0, n.height - t)),
            this.uiDialog.is(":data(ui-resizable)") &&
              this.uiDialog.resizable("option", "minHeight", this._minHeight());
        },
        _blockFrames: function () {
          this.iframeBlocks = this.document.find("iframe").map(function () {
            var e = t(this);
            return t("<div>")
              .css({
                position: "absolute",
                width: e.outerWidth(),
                height: e.outerHeight(),
              })
              .appendTo(e.parent())
              .offset(e.offset())[0];
          });
        },
        _unblockFrames: function () {
          this.iframeBlocks &&
            (this.iframeBlocks.remove(), delete this.iframeBlocks);
        },
        _allowInteraction: function (e) {
          return t(e.target).closest(".ui-dialog").length
            ? !0
            : !!t(e.target).closest(".ui-datepicker").length;
        },
        _createOverlay: function () {
          if (this.options.modal) {
            var e = !0;
            this._delay(function () {
              e = !1;
            }),
              this.document.data("ui-dialog-overlays") ||
                this._on(this.document, {
                  focusin: function (t) {
                    e ||
                      this._allowInteraction(t) ||
                      (t.preventDefault(),
                      this._trackingInstances()[0]._focusTabbable());
                  },
                }),
              (this.overlay = t("<div>")
                .addClass("ui-widget-overlay ui-front")
                .appendTo(this._appendTo())),
              this._on(this.overlay, { mousedown: "_keepFocus" }),
              this.document.data(
                "ui-dialog-overlays",
                (this.document.data("ui-dialog-overlays") || 0) + 1
              );
          }
        },
        _destroyOverlay: function () {
          if (this.options.modal && this.overlay) {
            var t = this.document.data("ui-dialog-overlays") - 1;
            t
              ? this.document.data("ui-dialog-overlays", t)
              : this.document
                  .unbind("focusin")
                  .removeData("ui-dialog-overlays"),
              this.overlay.remove(),
              (this.overlay = null);
          }
        },
      }),
      t.widget("ui.progressbar", {
        version: "1.11.2",
        options: { max: 100, value: 0, change: null, complete: null },
        min: 0,
        _create: function () {
          (this.oldValue = this.options.value = this._constrainedValue()),
            this.element
              .addClass(
                "ui-progressbar ui-widget ui-widget-content ui-corner-all"
              )
              .attr({ role: "progressbar", "aria-valuemin": this.min }),
            (this.valueDiv = t(
              "<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>"
            ).appendTo(this.element)),
            this._refreshValue();
        },
        _destroy: function () {
          this.element
            .removeClass(
              "ui-progressbar ui-widget ui-widget-content ui-corner-all"
            )
            .removeAttr("role")
            .removeAttr("aria-valuemin")
            .removeAttr("aria-valuemax")
            .removeAttr("aria-valuenow"),
            this.valueDiv.remove();
        },
        value: function (t) {
          return void 0 === t
            ? this.options.value
            : ((this.options.value = this._constrainedValue(t)),
              void this._refreshValue());
        },
        _constrainedValue: function (t) {
          return (
            void 0 === t && (t = this.options.value),
            (this.indeterminate = t === !1),
            "number" != typeof t && (t = 0),
            this.indeterminate
              ? !1
              : Math.min(this.options.max, Math.max(this.min, t))
          );
        },
        _setOptions: function (t) {
          var e = t.value;
          delete t.value,
            this._super(t),
            (this.options.value = this._constrainedValue(e)),
            this._refreshValue();
        },
        _setOption: function (t, e) {
          "max" === t && (e = Math.max(this.min, e)),
            "disabled" === t &&
              this.element
                .toggleClass("ui-state-disabled", !!e)
                .attr("aria-disabled", e),
            this._super(t, e);
        },
        _percentage: function () {
          return this.indeterminate
            ? 100
            : (100 * (this.options.value - this.min)) /
                (this.options.max - this.min);
        },
        _refreshValue: function () {
          var e = this.options.value,
            i = this._percentage();
          this.valueDiv
            .toggle(this.indeterminate || e > this.min)
            .toggleClass("ui-corner-right", e === this.options.max)
            .width(i.toFixed(0) + "%"),
            this.element.toggleClass(
              "ui-progressbar-indeterminate",
              this.indeterminate
            ),
            this.indeterminate
              ? (this.element.removeAttr("aria-valuenow"),
                this.overlayDiv ||
                  (this.overlayDiv = t(
                    "<div class='ui-progressbar-overlay'></div>"
                  ).appendTo(this.valueDiv)))
              : (this.element.attr({
                  "aria-valuemax": this.options.max,
                  "aria-valuenow": e,
                }),
                this.overlayDiv &&
                  (this.overlayDiv.remove(), (this.overlayDiv = null))),
            this.oldValue !== e &&
              ((this.oldValue = e), this._trigger("change")),
            e === this.options.max && this._trigger("complete");
        },
      }),
      t.widget("ui.selectmenu", {
        version: "1.11.2",
        defaultElement: "<select>",
        options: {
          appendTo: null,
          disabled: null,
          icons: { button: "ui-icon-triangle-1-s" },
          position: { my: "left top", at: "left bottom", collision: "none" },
          width: null,
          change: null,
          close: null,
          focus: null,
          open: null,
          select: null,
        },
        _create: function () {
          var t = this.element.uniqueId().attr("id");
          (this.ids = { element: t, button: t + "-button", menu: t + "-menu" }),
            this._drawButton(),
            this._drawMenu(),
            this.options.disabled && this.disable();
        },
        _drawButton: function () {
          var e = this,
            i = this.element.attr("tabindex");
          (this.label = t("label[for='" + this.ids.element + "']").attr(
            "for",
            this.ids.button
          )),
            this._on(this.label, {
              click: function (t) {
                this.button.focus(), t.preventDefault();
              },
            }),
            this.element.hide(),
            (this.button = t("<span>", {
              class:
                "ui-selectmenu-button ui-widget ui-state-default ui-corner-all",
              tabindex: i || this.options.disabled ? -1 : 0,
              id: this.ids.button,
              role: "combobox",
              "aria-expanded": "false",
              "aria-autocomplete": "list",
              "aria-owns": this.ids.menu,
              "aria-haspopup": "true",
            }).insertAfter(this.element)),
            t("<span>", {
              class: "ui-icon " + this.options.icons.button,
            }).prependTo(this.button),
            (this.buttonText = t("<span>", {
              class: "ui-selectmenu-text",
            }).appendTo(this.button)),
            this._setText(
              this.buttonText,
              this.element.find("option:selected").text()
            ),
            this._resizeButton(),
            this._on(this.button, this._buttonEvents),
            this.button.one("focusin", function () {
              e.menuItems || e._refreshMenu();
            }),
            this._hoverable(this.button),
            this._focusable(this.button);
        },
        _drawMenu: function () {
          var e = this;
          (this.menu = t("<ul>", {
            "aria-hidden": "true",
            "aria-labelledby": this.ids.button,
            id: this.ids.menu,
          })),
            (this.menuWrap = t("<div>", {
              class: "ui-selectmenu-menu ui-front",
            })
              .append(this.menu)
              .appendTo(this._appendTo())),
            (this.menuInstance = this.menu
              .menu({
                role: "listbox",
                select: function (t, i) {
                  t.preventDefault(),
                    e._setSelection(),
                    e._select(i.item.data("ui-selectmenu-item"), t);
                },
                focus: function (t, i) {
                  var n = i.item.data("ui-selectmenu-item");
                  null != e.focusIndex &&
                    n.index !== e.focusIndex &&
                    (e._trigger("focus", t, { item: n }),
                    e.isOpen || e._select(n, t)),
                    (e.focusIndex = n.index),
                    e.button.attr(
                      "aria-activedescendant",
                      e.menuItems.eq(n.index).attr("id")
                    );
                },
              })
              .menu("instance")),
            this.menu.addClass("ui-corner-bottom").removeClass("ui-corner-all"),
            this.menuInstance._off(this.menu, "mouseleave"),
            (this.menuInstance._closeOnDocumentClick = function () {
              return !1;
            }),
            (this.menuInstance._isDivider = function () {
              return !1;
            });
        },
        refresh: function () {
          this._refreshMenu(),
            this._setText(this.buttonText, this._getSelectedItem().text()),
            this.options.width || this._resizeButton();
        },
        _refreshMenu: function () {
          this.menu.empty();
          var t,
            e = this.element.find("option");
          e.length &&
            (this._parseOptions(e),
            this._renderMenu(this.menu, this.items),
            this.menuInstance.refresh(),
            (this.menuItems = this.menu
              .find("li")
              .not(".ui-selectmenu-optgroup")),
            (t = this._getSelectedItem()),
            this.menuInstance.focus(null, t),
            this._setAria(t.data("ui-selectmenu-item")),
            this._setOption("disabled", this.element.prop("disabled")));
        },
        open: function (t) {
          this.options.disabled ||
            (this.menuItems
              ? (this.menu
                  .find(".ui-state-focus")
                  .removeClass("ui-state-focus"),
                this.menuInstance.focus(null, this._getSelectedItem()))
              : this._refreshMenu(),
            (this.isOpen = !0),
            this._toggleAttr(),
            this._resizeMenu(),
            this._position(),
            this._on(this.document, this._documentClick),
            this._trigger("open", t));
        },
        _position: function () {
          this.menuWrap.position(
            t.extend({ of: this.button }, this.options.position)
          );
        },
        close: function (t) {
          this.isOpen &&
            ((this.isOpen = !1),
            this._toggleAttr(),
            (this.range = null),
            this._off(this.document),
            this._trigger("close", t));
        },
        widget: function () {
          return this.button;
        },
        menuWidget: function () {
          return this.menu;
        },
        _renderMenu: function (e, i) {
          var n = this,
            s = "";
          t.each(i, function (i, o) {
            o.optgroup !== s &&
              (t("<li>", {
                class:
                  "ui-selectmenu-optgroup ui-menu-divider" +
                  (o.element.parent("optgroup").prop("disabled")
                    ? " ui-state-disabled"
                    : ""),
                text: o.optgroup,
              }).appendTo(e),
              (s = o.optgroup)),
              n._renderItemData(e, o);
          });
        },
        _renderItemData: function (t, e) {
          return this._renderItem(t, e).data("ui-selectmenu-item", e);
        },
        _renderItem: function (e, i) {
          var n = t("<li>");
          return (
            i.disabled && n.addClass("ui-state-disabled"),
            this._setText(n, i.label),
            n.appendTo(e)
          );
        },
        _setText: function (t, e) {
          e ? t.text(e) : t.html("&#160;");
        },
        _move: function (t, e) {
          var i,
            n,
            s = ".ui-menu-item";
          this.isOpen
            ? (i = this.menuItems.eq(this.focusIndex))
            : ((i = this.menuItems.eq(this.element[0].selectedIndex)),
              (s += ":not(.ui-state-disabled)")),
            (n =
              "first" === t || "last" === t
                ? i["first" === t ? "prevAll" : "nextAll"](s).eq(-1)
                : i[t + "All"](s).eq(0)),
            n.length && this.menuInstance.focus(e, n);
        },
        _getSelectedItem: function () {
          return this.menuItems.eq(this.element[0].selectedIndex);
        },
        _toggle: function (t) {
          this[this.isOpen ? "close" : "open"](t);
        },
        _setSelection: function () {
          var t;
          this.range &&
            (window.getSelection
              ? ((t = window.getSelection()),
                t.removeAllRanges(),
                t.addRange(this.range))
              : this.range.select(),
            this.button.focus());
        },
        _documentClick: {
          mousedown: function (e) {
            this.isOpen &&
              (t(e.target).closest(".ui-selectmenu-menu, #" + this.ids.button)
                .length ||
                this.close(e));
          },
        },
        _buttonEvents: {
          mousedown: function () {
            var t;
            window.getSelection
              ? ((t = window.getSelection()),
                t.rangeCount && (this.range = t.getRangeAt(0)))
              : (this.range = document.selection.createRange());
          },
          click: function (t) {
            this._setSelection(), this._toggle(t);
          },
          keydown: function (e) {
            var i = !0;
            switch (e.keyCode) {
              case t.ui.keyCode.TAB:
              case t.ui.keyCode.ESCAPE:
                this.close(e), (i = !1);
                break;
              case t.ui.keyCode.ENTER:
                this.isOpen && this._selectFocusedItem(e);
                break;
              case t.ui.keyCode.UP:
                e.altKey ? this._toggle(e) : this._move("prev", e);
                break;
              case t.ui.keyCode.DOWN:
                e.altKey ? this._toggle(e) : this._move("next", e);
                break;
              case t.ui.keyCode.SPACE:
                this.isOpen ? this._selectFocusedItem(e) : this._toggle(e);
                break;
              case t.ui.keyCode.LEFT:
                this._move("prev", e);
                break;
              case t.ui.keyCode.RIGHT:
                this._move("next", e);
                break;
              case t.ui.keyCode.HOME:
              case t.ui.keyCode.PAGE_UP:
                this._move("first", e);
                break;
              case t.ui.keyCode.END:
              case t.ui.keyCode.PAGE_DOWN:
                this._move("last", e);
                break;
              default:
                this.menu.trigger(e), (i = !1);
            }
            i && e.preventDefault();
          },
        },
        _selectFocusedItem: function (t) {
          var e = this.menuItems.eq(this.focusIndex);
          e.hasClass("ui-state-disabled") ||
            this._select(e.data("ui-selectmenu-item"), t);
        },
        _select: function (t, e) {
          var i = this.element[0].selectedIndex;
          (this.element[0].selectedIndex = t.index),
            this._setText(this.buttonText, t.label),
            this._setAria(t),
            this._trigger("select", e, { item: t }),
            t.index !== i && this._trigger("change", e, { item: t }),
            this.close(e);
        },
        _setAria: function (t) {
          var e = this.menuItems.eq(t.index).attr("id");
          this.button.attr({
            "aria-labelledby": e,
            "aria-activedescendant": e,
          }),
            this.menu.attr("aria-activedescendant", e);
        },
        _setOption: function (t, e) {
          "icons" === t &&
            this.button
              .find("span.ui-icon")
              .removeClass(this.options.icons.button)
              .addClass(e.button),
            this._super(t, e),
            "appendTo" === t && this.menuWrap.appendTo(this._appendTo()),
            "disabled" === t &&
              (this.menuInstance.option("disabled", e),
              this.button
                .toggleClass("ui-state-disabled", e)
                .attr("aria-disabled", e),
              this.element.prop("disabled", e),
              e
                ? (this.button.attr("tabindex", -1), this.close())
                : this.button.attr("tabindex", 0)),
            "width" === t && this._resizeButton();
        },
        _appendTo: function () {
          var e = this.options.appendTo;
          return (
            e &&
              (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)),
            (e && e[0]) || (e = this.element.closest(".ui-front")),
            e.length || (e = this.document[0].body),
            e
          );
        },
        _toggleAttr: function () {
          this.button
            .toggleClass("ui-corner-top", this.isOpen)
            .toggleClass("ui-corner-all", !this.isOpen)
            .attr("aria-expanded", this.isOpen),
            this.menuWrap.toggleClass("ui-selectmenu-open", this.isOpen),
            this.menu.attr("aria-hidden", !this.isOpen);
        },
        _resizeButton: function () {
          var t = this.options.width;
          t || ((t = this.element.show().outerWidth()), this.element.hide()),
            this.button.outerWidth(t);
        },
        _resizeMenu: function () {
          this.menu.outerWidth(
            Math.max(
              this.button.outerWidth(),
              this.menu.width("").outerWidth() + 1
            )
          );
        },
        _getCreateOptions: function () {
          return { disabled: this.element.prop("disabled") };
        },
        _parseOptions: function (e) {
          var i = [];
          e.each(function (e, n) {
            var s = t(n),
              o = s.parent("optgroup");
            i.push({
              element: s,
              index: e,
              value: s.attr("value"),
              label: s.text(),
              optgroup: o.attr("label") || "",
              disabled: o.prop("disabled") || s.prop("disabled"),
            });
          }),
            (this.items = i);
        },
        _destroy: function () {
          this.menuWrap.remove(),
            this.button.remove(),
            this.element.show(),
            this.element.removeUniqueId(),
            this.label.attr("for", this.ids.element);
        },
      }),
      t.widget("ui.slider", t.ui.mouse, {
        version: "1.11.2",
        widgetEventPrefix: "slide",
        options: {
          animate: !1,
          distance: 0,
          max: 100,
          min: 0,
          orientation: "horizontal",
          range: !1,
          step: 1,
          value: 0,
          values: null,
          change: null,
          slide: null,
          start: null,
          stop: null,
        },
        numPages: 5,
        _create: function () {
          (this._keySliding = !1),
            (this._mouseSliding = !1),
            (this._animateOff = !0),
            (this._handleIndex = null),
            this._detectOrientation(),
            this._mouseInit(),
            this._calculateNewMax(),
            this.element.addClass(
              "ui-slider ui-slider-" +
                this.orientation +
                " ui-widget ui-widget-content ui-corner-all"
            ),
            this._refresh(),
            this._setOption("disabled", this.options.disabled),
            (this._animateOff = !1);
        },
        _refresh: function () {
          this._createRange(),
            this._createHandles(),
            this._setupEvents(),
            this._refreshValue();
        },
        _createHandles: function () {
          var e,
            i,
            n = this.options,
            s = this.element
              .find(".ui-slider-handle")
              .addClass("ui-state-default ui-corner-all"),
            o =
              "<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>",
            r = [];
          for (
            i = (n.values && n.values.length) || 1,
              s.length > i && (s.slice(i).remove(), (s = s.slice(0, i))),
              e = s.length;
            i > e;
            e++
          )
            r.push(o);
          (this.handles = s.add(t(r.join("")).appendTo(this.element))),
            (this.handle = this.handles.eq(0)),
            this.handles.each(function (e) {
              t(this).data("ui-slider-handle-index", e);
            });
        },
        _createRange: function () {
          var e = this.options,
            i = "";
          e.range
            ? (e.range === !0 &&
                (e.values
                  ? e.values.length && 2 !== e.values.length
                    ? (e.values = [e.values[0], e.values[0]])
                    : t.isArray(e.values) && (e.values = e.values.slice(0))
                  : (e.values = [this._valueMin(), this._valueMin()])),
              this.range && this.range.length
                ? this.range
                    .removeClass("ui-slider-range-min ui-slider-range-max")
                    .css({ left: "", bottom: "" })
                : ((this.range = t("<div></div>").appendTo(this.element)),
                  (i = "ui-slider-range ui-widget-header ui-corner-all")),
              this.range.addClass(
                i +
                  ("min" === e.range || "max" === e.range
                    ? " ui-slider-range-" + e.range
                    : "")
              ))
            : (this.range && this.range.remove(), (this.range = null));
        },
        _setupEvents: function () {
          this._off(this.handles),
            this._on(this.handles, this._handleEvents),
            this._hoverable(this.handles),
            this._focusable(this.handles);
        },
        _destroy: function () {
          this.handles.remove(),
            this.range && this.range.remove(),
            this.element.removeClass(
              "ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"
            ),
            this._mouseDestroy();
        },
        _mouseCapture: function (e) {
          var i,
            n,
            s,
            o,
            r,
            a,
            l,
            u,
            h = this,
            c = this.options;
          return c.disabled
            ? !1
            : ((this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
              }),
              (this.elementOffset = this.element.offset()),
              (i = { x: e.pageX, y: e.pageY }),
              (n = this._normValueFromMouse(i)),
              (s = this._valueMax() - this._valueMin() + 1),
              this.handles.each(function (e) {
                var i = Math.abs(n - h.values(e));
                (s > i ||
                  (s === i &&
                    (e === h._lastChangedValue || h.values(e) === c.min))) &&
                  ((s = i), (o = t(this)), (r = e));
              }),
              (a = this._start(e, r)),
              a === !1
                ? !1
                : ((this._mouseSliding = !0),
                  (this._handleIndex = r),
                  o.addClass("ui-state-active").focus(),
                  (l = o.offset()),
                  (u = !t(e.target)
                    .parents()
                    .addBack()
                    .is(".ui-slider-handle")),
                  (this._clickOffset = u
                    ? { left: 0, top: 0 }
                    : {
                        left: e.pageX - l.left - o.width() / 2,
                        top:
                          e.pageY -
                          l.top -
                          o.height() / 2 -
                          (parseInt(o.css("borderTopWidth"), 10) || 0) -
                          (parseInt(o.css("borderBottomWidth"), 10) || 0) +
                          (parseInt(o.css("marginTop"), 10) || 0),
                      }),
                  this.handles.hasClass("ui-state-hover") ||
                    this._slide(e, r, n),
                  (this._animateOff = !0),
                  !0));
        },
        _mouseStart: function () {
          return !0;
        },
        _mouseDrag: function (t) {
          var e = { x: t.pageX, y: t.pageY },
            i = this._normValueFromMouse(e);
          return this._slide(t, this._handleIndex, i), !1;
        },
        _mouseStop: function (t) {
          return (
            this.handles.removeClass("ui-state-active"),
            (this._mouseSliding = !1),
            this._stop(t, this._handleIndex),
            this._change(t, this._handleIndex),
            (this._handleIndex = null),
            (this._clickOffset = null),
            (this._animateOff = !1),
            !1
          );
        },
        _detectOrientation: function () {
          this.orientation =
            "vertical" === this.options.orientation ? "vertical" : "horizontal";
        },
        _normValueFromMouse: function (t) {
          var e, i, n, s, o;
          return (
            "horizontal" === this.orientation
              ? ((e = this.elementSize.width),
                (i =
                  t.x -
                  this.elementOffset.left -
                  (this._clickOffset ? this._clickOffset.left : 0)))
              : ((e = this.elementSize.height),
                (i =
                  t.y -
                  this.elementOffset.top -
                  (this._clickOffset ? this._clickOffset.top : 0))),
            (n = i / e),
            n > 1 && (n = 1),
            0 > n && (n = 0),
            "vertical" === this.orientation && (n = 1 - n),
            (s = this._valueMax() - this._valueMin()),
            (o = this._valueMin() + n * s),
            this._trimAlignValue(o)
          );
        },
        _start: function (t, e) {
          var i = { handle: this.handles[e], value: this.value() };
          return (
            this.options.values &&
              this.options.values.length &&
              ((i.value = this.values(e)), (i.values = this.values())),
            this._trigger("start", t, i)
          );
        },
        _slide: function (t, e, i) {
          var n, s, o;
          this.options.values && this.options.values.length
            ? ((n = this.values(e ? 0 : 1)),
              2 === this.options.values.length &&
                this.options.range === !0 &&
                ((0 === e && i > n) || (1 === e && n > i)) &&
                (i = n),
              i !== this.values(e) &&
                ((s = this.values()),
                (s[e] = i),
                (o = this._trigger("slide", t, {
                  handle: this.handles[e],
                  value: i,
                  values: s,
                })),
                (n = this.values(e ? 0 : 1)),
                o !== !1 && this.values(e, i)))
            : i !== this.value() &&
              ((o = this._trigger("slide", t, {
                handle: this.handles[e],
                value: i,
              })),
              o !== !1 && this.value(i));
        },
        _stop: function (t, e) {
          var i = { handle: this.handles[e], value: this.value() };
          this.options.values &&
            this.options.values.length &&
            ((i.value = this.values(e)), (i.values = this.values())),
            this._trigger("stop", t, i);
        },
        _change: function (t, e) {
          if (!this._keySliding && !this._mouseSliding) {
            var i = { handle: this.handles[e], value: this.value() };
            this.options.values &&
              this.options.values.length &&
              ((i.value = this.values(e)), (i.values = this.values())),
              (this._lastChangedValue = e),
              this._trigger("change", t, i);
          }
        },
        value: function (t) {
          return arguments.length
            ? ((this.options.value = this._trimAlignValue(t)),
              this._refreshValue(),
              void this._change(null, 0))
            : this._value();
        },
        values: function (e, i) {
          var n, s, o;
          if (arguments.length > 1)
            return (
              (this.options.values[e] = this._trimAlignValue(i)),
              this._refreshValue(),
              void this._change(null, e)
            );
          if (!arguments.length) return this._values();
          if (!t.isArray(arguments[0]))
            return this.options.values && this.options.values.length
              ? this._values(e)
              : this.value();
          for (
            n = this.options.values, s = arguments[0], o = 0;
            n.length > o;
            o += 1
          )
            (n[o] = this._trimAlignValue(s[o])), this._change(null, o);
          this._refreshValue();
        },
        _setOption: function (e, i) {
          var n,
            s = 0;
          switch (
            ("range" === e &&
              this.options.range === !0 &&
              ("min" === i
                ? ((this.options.value = this._values(0)),
                  (this.options.values = null))
                : "max" === i &&
                  ((this.options.value = this._values(
                    this.options.values.length - 1
                  )),
                  (this.options.values = null))),
            t.isArray(this.options.values) && (s = this.options.values.length),
            "disabled" === e &&
              this.element.toggleClass("ui-state-disabled", !!i),
            this._super(e, i),
            e)
          ) {
            case "orientation":
              this._detectOrientation(),
                this.element
                  .removeClass("ui-slider-horizontal ui-slider-vertical")
                  .addClass("ui-slider-" + this.orientation),
                this._refreshValue(),
                this.handles.css("horizontal" === i ? "bottom" : "left", "");
              break;
            case "value":
              (this._animateOff = !0),
                this._refreshValue(),
                this._change(null, 0),
                (this._animateOff = !1);
              break;
            case "values":
              for (
                this._animateOff = !0, this._refreshValue(), n = 0;
                s > n;
                n += 1
              )
                this._change(null, n);
              this._animateOff = !1;
              break;
            case "step":
            case "min":
            case "max":
              (this._animateOff = !0),
                this._calculateNewMax(),
                this._refreshValue(),
                (this._animateOff = !1);
              break;
            case "range":
              (this._animateOff = !0), this._refresh(), (this._animateOff = !1);
          }
        },
        _value: function () {
          var t = this.options.value;
          return (t = this._trimAlignValue(t));
        },
        _values: function (t) {
          var e, i, n;
          if (arguments.length)
            return (e = this.options.values[t]), (e = this._trimAlignValue(e));
          if (this.options.values && this.options.values.length) {
            for (i = this.options.values.slice(), n = 0; i.length > n; n += 1)
              i[n] = this._trimAlignValue(i[n]);
            return i;
          }
          return [];
        },
        _trimAlignValue: function (t) {
          if (this._valueMin() >= t) return this._valueMin();
          if (t >= this._valueMax()) return this._valueMax();
          var e = this.options.step > 0 ? this.options.step : 1,
            i = (t - this._valueMin()) % e,
            n = t - i;
          return (
            2 * Math.abs(i) >= e && (n += i > 0 ? e : -e),
            parseFloat(n.toFixed(5))
          );
        },
        _calculateNewMax: function () {
          var t = (this.options.max - this._valueMin()) % this.options.step;
          this.max = this.options.max - t;
        },
        _valueMin: function () {
          return this.options.min;
        },
        _valueMax: function () {
          return this.max;
        },
        _refreshValue: function () {
          var e,
            i,
            n,
            s,
            o,
            r = this.options.range,
            a = this.options,
            l = this,
            u = this._animateOff ? !1 : a.animate,
            h = {};
          this.options.values && this.options.values.length
            ? this.handles.each(function (n) {
                (i =
                  100 *
                  ((l.values(n) - l._valueMin()) /
                    (l._valueMax() - l._valueMin()))),
                  (h["horizontal" === l.orientation ? "left" : "bottom"] =
                    i + "%"),
                  t(this).stop(1, 1)[u ? "animate" : "css"](h, a.animate),
                  l.options.range === !0 &&
                    ("horizontal" === l.orientation
                      ? (0 === n &&
                          l.range
                            .stop(1, 1)
                            [u ? "animate" : "css"](
                              { left: i + "%" },
                              a.animate
                            ),
                        1 === n &&
                          l.range[u ? "animate" : "css"](
                            { width: i - e + "%" },
                            { queue: !1, duration: a.animate }
                          ))
                      : (0 === n &&
                          l.range
                            .stop(1, 1)
                            [u ? "animate" : "css"](
                              { bottom: i + "%" },
                              a.animate
                            ),
                        1 === n &&
                          l.range[u ? "animate" : "css"](
                            { height: i - e + "%" },
                            { queue: !1, duration: a.animate }
                          ))),
                  (e = i);
              })
            : ((n = this.value()),
              (s = this._valueMin()),
              (o = this._valueMax()),
              (i = o !== s ? 100 * ((n - s) / (o - s)) : 0),
              (h["horizontal" === this.orientation ? "left" : "bottom"] =
                i + "%"),
              this.handle.stop(1, 1)[u ? "animate" : "css"](h, a.animate),
              "min" === r &&
                "horizontal" === this.orientation &&
                this.range
                  .stop(1, 1)
                  [u ? "animate" : "css"]({ width: i + "%" }, a.animate),
              "max" === r &&
                "horizontal" === this.orientation &&
                this.range[u ? "animate" : "css"](
                  { width: 100 - i + "%" },
                  { queue: !1, duration: a.animate }
                ),
              "min" === r &&
                "vertical" === this.orientation &&
                this.range
                  .stop(1, 1)
                  [u ? "animate" : "css"]({ height: i + "%" }, a.animate),
              "max" === r &&
                "vertical" === this.orientation &&
                this.range[u ? "animate" : "css"](
                  { height: 100 - i + "%" },
                  { queue: !1, duration: a.animate }
                ));
        },
        _handleEvents: {
          keydown: function (e) {
            var i,
              n,
              s,
              o,
              r = t(e.target).data("ui-slider-handle-index");
            switch (e.keyCode) {
              case t.ui.keyCode.HOME:
              case t.ui.keyCode.END:
              case t.ui.keyCode.PAGE_UP:
              case t.ui.keyCode.PAGE_DOWN:
              case t.ui.keyCode.UP:
              case t.ui.keyCode.RIGHT:
              case t.ui.keyCode.DOWN:
              case t.ui.keyCode.LEFT:
                if (
                  (e.preventDefault(),
                  !this._keySliding &&
                    ((this._keySliding = !0),
                    t(e.target).addClass("ui-state-active"),
                    (i = this._start(e, r)),
                    i === !1))
                )
                  return;
            }
            switch (
              ((o = this.options.step),
              (n = s =
                this.options.values && this.options.values.length
                  ? this.values(r)
                  : this.value()),
              e.keyCode)
            ) {
              case t.ui.keyCode.HOME:
                s = this._valueMin();
                break;
              case t.ui.keyCode.END:
                s = this._valueMax();
                break;
              case t.ui.keyCode.PAGE_UP:
                s = this._trimAlignValue(
                  n + (this._valueMax() - this._valueMin()) / this.numPages
                );
                break;
              case t.ui.keyCode.PAGE_DOWN:
                s = this._trimAlignValue(
                  n - (this._valueMax() - this._valueMin()) / this.numPages
                );
                break;
              case t.ui.keyCode.UP:
              case t.ui.keyCode.RIGHT:
                if (n === this._valueMax()) return;
                s = this._trimAlignValue(n + o);
                break;
              case t.ui.keyCode.DOWN:
              case t.ui.keyCode.LEFT:
                if (n === this._valueMin()) return;
                s = this._trimAlignValue(n - o);
            }
            this._slide(e, r, s);
          },
          keyup: function (e) {
            var i = t(e.target).data("ui-slider-handle-index");
            this._keySliding &&
              ((this._keySliding = !1),
              this._stop(e, i),
              this._change(e, i),
              t(e.target).removeClass("ui-state-active"));
          },
        },
      }),
      t.widget("ui.spinner", {
        version: "1.11.2",
        defaultElement: "<input>",
        widgetEventPrefix: "spin",
        options: {
          culture: null,
          icons: { down: "ui-icon-triangle-1-s", up: "ui-icon-triangle-1-n" },
          incremental: !0,
          max: null,
          min: null,
          numberFormat: null,
          page: 10,
          step: 1,
          change: null,
          spin: null,
          start: null,
          stop: null,
        },
        _create: function () {
          this._setOption("max", this.options.max),
            this._setOption("min", this.options.min),
            this._setOption("step", this.options.step),
            "" !== this.value() && this._value(this.element.val(), !0),
            this._draw(),
            this._on(this._events),
            this._refresh(),
            this._on(this.window, {
              beforeunload: function () {
                this.element.removeAttr("autocomplete");
              },
            });
        },
        _getCreateOptions: function () {
          var e = {},
            i = this.element;
          return (
            t.each(["min", "max", "step"], function (t, n) {
              var s = i.attr(n);
              void 0 !== s && s.length && (e[n] = s);
            }),
            e
          );
        },
        _events: {
          keydown: function (t) {
            this._start(t) && this._keydown(t) && t.preventDefault();
          },
          keyup: "_stop",
          focus: function () {
            this.previous = this.element.val();
          },
          blur: function (t) {
            return this.cancelBlur
              ? void delete this.cancelBlur
              : (this._stop(),
                this._refresh(),
                void (
                  this.previous !== this.element.val() &&
                  this._trigger("change", t)
                ));
          },
          mousewheel: function (t, e) {
            if (e) {
              if (!this.spinning && !this._start(t)) return !1;
              this._spin((e > 0 ? 1 : -1) * this.options.step, t),
                clearTimeout(this.mousewheelTimer),
                (this.mousewheelTimer = this._delay(function () {
                  this.spinning && this._stop(t);
                }, 100)),
                t.preventDefault();
            }
          },
          "mousedown .ui-spinner-button": function (e) {
            function i() {
              var t = this.element[0] === this.document[0].activeElement;
              t ||
                (this.element.focus(),
                (this.previous = n),
                this._delay(function () {
                  this.previous = n;
                }));
            }
            var n;
            (n =
              this.element[0] === this.document[0].activeElement
                ? this.previous
                : this.element.val()),
              e.preventDefault(),
              i.call(this),
              (this.cancelBlur = !0),
              this._delay(function () {
                delete this.cancelBlur, i.call(this);
              }),
              this._start(e) !== !1 &&
                this._repeat(
                  null,
                  t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1,
                  e
                );
          },
          "mouseup .ui-spinner-button": "_stop",
          "mouseenter .ui-spinner-button": function (e) {
            return t(e.currentTarget).hasClass("ui-state-active")
              ? this._start(e) === !1
                ? !1
                : void this._repeat(
                    null,
                    t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1,
                    e
                  )
              : void 0;
          },
          "mouseleave .ui-spinner-button": "_stop",
        },
        _draw: function () {
          var t = (this.uiSpinner = this.element
            .addClass("ui-spinner-input")
            .attr("autocomplete", "off")
            .wrap(this._uiSpinnerHtml())
            .parent()
            .append(this._buttonHtml()));
          this.element.attr("role", "spinbutton"),
            (this.buttons = t
              .find(".ui-spinner-button")
              .attr("tabIndex", -1)
              .button()
              .removeClass("ui-corner-all")),
            this.buttons.height() > Math.ceil(0.5 * t.height()) &&
              t.height() > 0 &&
              t.height(t.height()),
            this.options.disabled && this.disable();
        },
        _keydown: function (e) {
          var i = this.options,
            n = t.ui.keyCode;
          switch (e.keyCode) {
            case n.UP:
              return this._repeat(null, 1, e), !0;
            case n.DOWN:
              return this._repeat(null, -1, e), !0;
            case n.PAGE_UP:
              return this._repeat(null, i.page, e), !0;
            case n.PAGE_DOWN:
              return this._repeat(null, -i.page, e), !0;
          }
          return !1;
        },
        _uiSpinnerHtml: function () {
          return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>";
        },
        _buttonHtml: function () {
          return (
            "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " +
            this.options.icons.up +
            "'>&#9650;</span></a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon " +
            this.options.icons.down +
            "'>&#9660;</span></a>"
          );
        },
        _start: function (t) {
          return this.spinning || this._trigger("start", t) !== !1
            ? (this.counter || (this.counter = 1), (this.spinning = !0), !0)
            : !1;
        },
        _repeat: function (t, e, i) {
          (t = t || 500),
            clearTimeout(this.timer),
            (this.timer = this._delay(function () {
              this._repeat(40, e, i);
            }, t)),
            this._spin(e * this.options.step, i);
        },
        _spin: function (t, e) {
          var i = this.value() || 0;
          this.counter || (this.counter = 1),
            (i = this._adjustValue(i + t * this._increment(this.counter))),
            (this.spinning && this._trigger("spin", e, { value: i }) === !1) ||
              (this._value(i), this.counter++);
        },
        _increment: function (e) {
          var i = this.options.incremental;
          return i
            ? t.isFunction(i)
              ? i(e)
              : Math.floor(
                  (e * e * e) / 5e4 - (e * e) / 500 + (17 * e) / 200 + 1
                )
            : 1;
        },
        _precision: function () {
          var t = this._precisionOf(this.options.step);
          return (
            null !== this.options.min &&
              (t = Math.max(t, this._precisionOf(this.options.min))),
            t
          );
        },
        _precisionOf: function (t) {
          var e = "" + t,
            i = e.indexOf(".");
          return -1 === i ? 0 : e.length - i - 1;
        },
        _adjustValue: function (t) {
          var e,
            i,
            n = this.options;
          return (
            (e = null !== n.min ? n.min : 0),
            (i = t - e),
            (i = Math.round(i / n.step) * n.step),
            (t = e + i),
            (t = parseFloat(t.toFixed(this._precision()))),
            null !== n.max && t > n.max
              ? n.max
              : null !== n.min && n.min > t
              ? n.min
              : t
          );
        },
        _stop: function (t) {
          this.spinning &&
            (clearTimeout(this.timer),
            clearTimeout(this.mousewheelTimer),
            (this.counter = 0),
            (this.spinning = !1),
            this._trigger("stop", t));
        },
        _setOption: function (t, e) {
          if ("culture" === t || "numberFormat" === t) {
            var i = this._parse(this.element.val());
            return (
              (this.options[t] = e), void this.element.val(this._format(i))
            );
          }
          ("max" === t || "min" === t || "step" === t) &&
            "string" == typeof e &&
            (e = this._parse(e)),
            "icons" === t &&
              (this.buttons
                .first()
                .find(".ui-icon")
                .removeClass(this.options.icons.up)
                .addClass(e.up),
              this.buttons
                .last()
                .find(".ui-icon")
                .removeClass(this.options.icons.down)
                .addClass(e.down)),
            this._super(t, e),
            "disabled" === t &&
              (this.widget().toggleClass("ui-state-disabled", !!e),
              this.element.prop("disabled", !!e),
              this.buttons.button(e ? "disable" : "enable"));
        },
        _setOptions: l(function (t) {
          this._super(t);
        }),
        _parse: function (t) {
          return (
            "string" == typeof t &&
              "" !== t &&
              (t =
                window.Globalize && this.options.numberFormat
                  ? Globalize.parseFloat(t, 10, this.options.culture)
                  : +t),
            "" === t || isNaN(t) ? null : t
          );
        },
        _format: function (t) {
          return "" === t
            ? ""
            : window.Globalize && this.options.numberFormat
            ? Globalize.format(
                t,
                this.options.numberFormat,
                this.options.culture
              )
            : t;
        },
        _refresh: function () {
          this.element.attr({
            "aria-valuemin": this.options.min,
            "aria-valuemax": this.options.max,
            "aria-valuenow": this._parse(this.element.val()),
          });
        },
        isValid: function () {
          var t = this.value();
          return null === t ? !1 : t === this._adjustValue(t);
        },
        _value: function (t, e) {
          var i;
          "" !== t &&
            ((i = this._parse(t)),
            null !== i &&
              (e || (i = this._adjustValue(i)), (t = this._format(i)))),
            this.element.val(t),
            this._refresh();
        },
        _destroy: function () {
          this.element
            .removeClass("ui-spinner-input")
            .prop("disabled", !1)
            .removeAttr("autocomplete")
            .removeAttr("role")
            .removeAttr("aria-valuemin")
            .removeAttr("aria-valuemax")
            .removeAttr("aria-valuenow"),
            this.uiSpinner.replaceWith(this.element);
        },
        stepUp: l(function (t) {
          this._stepUp(t);
        }),
        _stepUp: function (t) {
          this._start() &&
            (this._spin((t || 1) * this.options.step), this._stop());
        },
        stepDown: l(function (t) {
          this._stepDown(t);
        }),
        _stepDown: function (t) {
          this._start() &&
            (this._spin((t || 1) * -this.options.step), this._stop());
        },
        pageUp: l(function (t) {
          this._stepUp((t || 1) * this.options.page);
        }),
        pageDown: l(function (t) {
          this._stepDown((t || 1) * this.options.page);
        }),
        value: function (t) {
          return arguments.length
            ? void l(this._value).call(this, t)
            : this._parse(this.element.val());
        },
        widget: function () {
          return this.uiSpinner;
        },
      }),
      t.widget("ui.tabs", {
        version: "1.11.2",
        delay: 300,
        options: {
          active: null,
          collapsible: !1,
          event: "click",
          heightStyle: "content",
          hide: null,
          show: null,
          activate: null,
          beforeActivate: null,
          beforeLoad: null,
          load: null,
        },
        _isLocal: (function () {
          var t = /#.*$/;
          return function (e) {
            var i, n;
            (e = e.cloneNode(!1)),
              (i = e.href.replace(t, "")),
              (n = location.href.replace(t, ""));
            try {
              i = decodeURIComponent(i);
            } catch (s) {}
            try {
              n = decodeURIComponent(n);
            } catch (s) {}
            return e.hash.length > 1 && i === n;
          };
        })(),
        _create: function () {
          var e = this,
            i = this.options;
          (this.running = !1),
            this.element
              .addClass("ui-tabs ui-widget ui-widget-content ui-corner-all")
              .toggleClass("ui-tabs-collapsible", i.collapsible),
            this._processTabs(),
            (i.active = this._initialActive()),
            t.isArray(i.disabled) &&
              (i.disabled = t
                .unique(
                  i.disabled.concat(
                    t.map(this.tabs.filter(".ui-state-disabled"), function (t) {
                      return e.tabs.index(t);
                    })
                  )
                )
                .sort()),
            (this.active =
              this.options.active !== !1 && this.anchors.length
                ? this._findActive(i.active)
                : t()),
            this._refresh(),
            this.active.length && this.load(i.active);
        },
        _initialActive: function () {
          var e = this.options.active,
            i = this.options.collapsible,
            n = location.hash.substring(1);
          return (
            null === e &&
              (n &&
                this.tabs.each(function (i, s) {
                  return t(s).attr("aria-controls") === n
                    ? ((e = i), !1)
                    : void 0;
                }),
              null === e &&
                (e = this.tabs.index(this.tabs.filter(".ui-tabs-active"))),
              (null === e || -1 === e) && (e = this.tabs.length ? 0 : !1)),
            e !== !1 &&
              ((e = this.tabs.index(this.tabs.eq(e))),
              -1 === e && (e = i ? !1 : 0)),
            !i && e === !1 && this.anchors.length && (e = 0),
            e
          );
        },
        _getCreateEventData: function () {
          return {
            tab: this.active,
            panel: this.active.length ? this._getPanelForTab(this.active) : t(),
          };
        },
        _tabKeydown: function (e) {
          var i = t(this.document[0].activeElement).closest("li"),
            n = this.tabs.index(i),
            s = !0;
          if (!this._handlePageNav(e)) {
            switch (e.keyCode) {
              case t.ui.keyCode.RIGHT:
              case t.ui.keyCode.DOWN:
                n++;
                break;
              case t.ui.keyCode.UP:
              case t.ui.keyCode.LEFT:
                (s = !1), n--;
                break;
              case t.ui.keyCode.END:
                n = this.anchors.length - 1;
                break;
              case t.ui.keyCode.HOME:
                n = 0;
                break;
              case t.ui.keyCode.SPACE:
                return (
                  e.preventDefault(),
                  clearTimeout(this.activating),
                  void this._activate(n)
                );
              case t.ui.keyCode.ENTER:
                return (
                  e.preventDefault(),
                  clearTimeout(this.activating),
                  void this._activate(n === this.options.active ? !1 : n)
                );
              default:
                return;
            }
            e.preventDefault(),
              clearTimeout(this.activating),
              (n = this._focusNextTab(n, s)),
              e.ctrlKey ||
                (i.attr("aria-selected", "false"),
                this.tabs.eq(n).attr("aria-selected", "true"),
                (this.activating = this._delay(function () {
                  this.option("active", n);
                }, this.delay)));
          }
        },
        _panelKeydown: function (e) {
          this._handlePageNav(e) ||
            (e.ctrlKey &&
              e.keyCode === t.ui.keyCode.UP &&
              (e.preventDefault(), this.active.focus()));
        },
        _handlePageNav: function (e) {
          return e.altKey && e.keyCode === t.ui.keyCode.PAGE_UP
            ? (this._activate(this._focusNextTab(this.options.active - 1, !1)),
              !0)
            : e.altKey && e.keyCode === t.ui.keyCode.PAGE_DOWN
            ? (this._activate(this._focusNextTab(this.options.active + 1, !0)),
              !0)
            : void 0;
        },
        _findNextTab: function (e, i) {
          function n() {
            return e > s && (e = 0), 0 > e && (e = s), e;
          }
          for (
            var s = this.tabs.length - 1;
            -1 !== t.inArray(n(), this.options.disabled);

          )
            e = i ? e + 1 : e - 1;
          return e;
        },
        _focusNextTab: function (t, e) {
          return (t = this._findNextTab(t, e)), this.tabs.eq(t).focus(), t;
        },
        _setOption: function (t, e) {
          return "active" === t
            ? void this._activate(e)
            : "disabled" === t
            ? void this._setupDisabled(e)
            : (this._super(t, e),
              "collapsible" === t &&
                (this.element.toggleClass("ui-tabs-collapsible", e),
                e || this.options.active !== !1 || this._activate(0)),
              "event" === t && this._setupEvents(e),
              void ("heightStyle" === t && this._setupHeightStyle(e)));
        },
        _sanitizeSelector: function (t) {
          return t
            ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&")
            : "";
        },
        refresh: function () {
          var e = this.options,
            i = this.tablist.children(":has(a[href])");
          (e.disabled = t.map(i.filter(".ui-state-disabled"), function (t) {
            return i.index(t);
          })),
            this._processTabs(),
            e.active !== !1 && this.anchors.length
              ? this.active.length &&
                !t.contains(this.tablist[0], this.active[0])
                ? this.tabs.length === e.disabled.length
                  ? ((e.active = !1), (this.active = t()))
                  : this._activate(
                      this._findNextTab(Math.max(0, e.active - 1), !1)
                    )
                : (e.active = this.tabs.index(this.active))
              : ((e.active = !1), (this.active = t())),
            this._refresh();
        },
        _refresh: function () {
          this._setupDisabled(this.options.disabled),
            this._setupEvents(this.options.event),
            this._setupHeightStyle(this.options.heightStyle),
            this.tabs.not(this.active).attr({
              "aria-selected": "false",
              "aria-expanded": "false",
              tabIndex: -1,
            }),
            this.panels
              .not(this._getPanelForTab(this.active))
              .hide()
              .attr({ "aria-hidden": "true" }),
            this.active.length
              ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
                  "aria-selected": "true",
                  "aria-expanded": "true",
                  tabIndex: 0,
                }),
                this._getPanelForTab(this.active)
                  .show()
                  .attr({ "aria-hidden": "false" }))
              : this.tabs.eq(0).attr("tabIndex", 0);
        },
        _processTabs: function () {
          var e = this,
            i = this.tabs,
            n = this.anchors,
            s = this.panels;
          (this.tablist = this._getList()
            .addClass(
              "ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"
            )
            .attr("role", "tablist")
            .delegate("> li", "mousedown" + this.eventNamespace, function (e) {
              t(this).is(".ui-state-disabled") && e.preventDefault();
            })
            .delegate(
              ".ui-tabs-anchor",
              "focus" + this.eventNamespace,
              function () {
                t(this).closest("li").is(".ui-state-disabled") && this.blur();
              }
            )),
            (this.tabs = this.tablist
              .find("> li:has(a[href])")
              .addClass("ui-state-default ui-corner-top")
              .attr({ role: "tab", tabIndex: -1 })),
            (this.anchors = this.tabs
              .map(function () {
                return t("a", this)[0];
              })
              .addClass("ui-tabs-anchor")
              .attr({ role: "presentation", tabIndex: -1 })),
            (this.panels = t()),
            this.anchors.each(function (i, n) {
              var s,
                o,
                r,
                a = t(n).uniqueId().attr("id"),
                l = t(n).closest("li"),
                u = l.attr("aria-controls");
              e._isLocal(n)
                ? ((s = n.hash),
                  (r = s.substring(1)),
                  (o = e.element.find(e._sanitizeSelector(s))))
                : ((r = l.attr("aria-controls") || t({}).uniqueId()[0].id),
                  (s = "#" + r),
                  (o = e.element.find(s)),
                  o.length ||
                    ((o = e._createPanel(r)),
                    o.insertAfter(e.panels[i - 1] || e.tablist)),
                  o.attr("aria-live", "polite")),
                o.length && (e.panels = e.panels.add(o)),
                u && l.data("ui-tabs-aria-controls", u),
                l.attr({ "aria-controls": r, "aria-labelledby": a }),
                o.attr("aria-labelledby", a);
            }),
            this.panels
              .addClass("ui-tabs-panel ui-widget-content ui-corner-bottom")
              .attr("role", "tabpanel"),
            i &&
              (this._off(i.not(this.tabs)),
              this._off(n.not(this.anchors)),
              this._off(s.not(this.panels)));
        },
        _getList: function () {
          return this.tablist || this.element.find("ol,ul").eq(0);
        },
        _createPanel: function (e) {
          return t("<div>")
            .attr("id", e)
            .addClass("ui-tabs-panel ui-widget-content ui-corner-bottom")
            .data("ui-tabs-destroy", !0);
        },
        _setupDisabled: function (e) {
          t.isArray(e) &&
            (e.length
              ? e.length === this.anchors.length && (e = !0)
              : (e = !1));
          for (var i, n = 0; (i = this.tabs[n]); n++)
            e === !0 || -1 !== t.inArray(n, e)
              ? t(i).addClass("ui-state-disabled").attr("aria-disabled", "true")
              : t(i)
                  .removeClass("ui-state-disabled")
                  .removeAttr("aria-disabled");
          this.options.disabled = e;
        },
        _setupEvents: function (e) {
          var i = {};
          e &&
            t.each(e.split(" "), function (t, e) {
              i[e] = "_eventHandler";
            }),
            this._off(this.anchors.add(this.tabs).add(this.panels)),
            this._on(!0, this.anchors, {
              click: function (t) {
                t.preventDefault();
              },
            }),
            this._on(this.anchors, i),
            this._on(this.tabs, { keydown: "_tabKeydown" }),
            this._on(this.panels, { keydown: "_panelKeydown" }),
            this._focusable(this.tabs),
            this._hoverable(this.tabs);
        },
        _setupHeightStyle: function (e) {
          var i,
            n = this.element.parent();
          "fill" === e
            ? ((i = n.height()),
              (i -= this.element.outerHeight() - this.element.height()),
              this.element.siblings(":visible").each(function () {
                var e = t(this),
                  n = e.css("position");
                "absolute" !== n && "fixed" !== n && (i -= e.outerHeight(!0));
              }),
              this.element
                .children()
                .not(this.panels)
                .each(function () {
                  i -= t(this).outerHeight(!0);
                }),
              this.panels
                .each(function () {
                  t(this).height(
                    Math.max(0, i - t(this).innerHeight() + t(this).height())
                  );
                })
                .css("overflow", "auto"))
            : "auto" === e &&
              ((i = 0),
              this.panels
                .each(function () {
                  i = Math.max(i, t(this).height("").height());
                })
                .height(i));
        },
        _eventHandler: function (e) {
          var i = this.options,
            n = this.active,
            s = t(e.currentTarget),
            o = s.closest("li"),
            r = o[0] === n[0],
            a = r && i.collapsible,
            l = a ? t() : this._getPanelForTab(o),
            u = n.length ? this._getPanelForTab(n) : t(),
            h = { oldTab: n, oldPanel: u, newTab: a ? t() : o, newPanel: l };
          e.preventDefault(),
            o.hasClass("ui-state-disabled") ||
              o.hasClass("ui-tabs-loading") ||
              this.running ||
              (r && !i.collapsible) ||
              this._trigger("beforeActivate", e, h) === !1 ||
              ((i.active = a ? !1 : this.tabs.index(o)),
              (this.active = r ? t() : o),
              this.xhr && this.xhr.abort(),
              u.length ||
                l.length ||
                t.error("jQuery UI Tabs: Mismatching fragment identifier."),
              l.length && this.load(this.tabs.index(o), e),
              this._toggle(e, h));
        },
        _toggle: function (e, i) {
          function n() {
            (o.running = !1), o._trigger("activate", e, i);
          }
          function s() {
            i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"),
              r.length && o.options.show
                ? o._show(r, o.options.show, n)
                : (r.show(), n());
          }
          var o = this,
            r = i.newPanel,
            a = i.oldPanel;
          (this.running = !0),
            a.length && this.options.hide
              ? this._hide(a, this.options.hide, function () {
                  i.oldTab
                    .closest("li")
                    .removeClass("ui-tabs-active ui-state-active"),
                    s();
                })
              : (i.oldTab
                  .closest("li")
                  .removeClass("ui-tabs-active ui-state-active"),
                a.hide(),
                s()),
            a.attr("aria-hidden", "true"),
            i.oldTab.attr({
              "aria-selected": "false",
              "aria-expanded": "false",
            }),
            r.length && a.length
              ? i.oldTab.attr("tabIndex", -1)
              : r.length &&
                this.tabs
                  .filter(function () {
                    return 0 === t(this).attr("tabIndex");
                  })
                  .attr("tabIndex", -1),
            r.attr("aria-hidden", "false"),
            i.newTab.attr({
              "aria-selected": "true",
              "aria-expanded": "true",
              tabIndex: 0,
            });
        },
        _activate: function (e) {
          var i,
            n = this._findActive(e);
          n[0] !== this.active[0] &&
            (n.length || (n = this.active),
            (i = n.find(".ui-tabs-anchor")[0]),
            this._eventHandler({
              target: i,
              currentTarget: i,
              preventDefault: t.noop,
            }));
        },
        _findActive: function (e) {
          return e === !1 ? t() : this.tabs.eq(e);
        },
        _getIndex: function (t) {
          return (
            "string" == typeof t &&
              (t = this.anchors.index(
                this.anchors.filter("[href$='" + t + "']")
              )),
            t
          );
        },
        _destroy: function () {
          this.xhr && this.xhr.abort(),
            this.element.removeClass(
              "ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"
            ),
            this.tablist
              .removeClass(
                "ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"
              )
              .removeAttr("role"),
            this.anchors
              .removeClass("ui-tabs-anchor")
              .removeAttr("role")
              .removeAttr("tabIndex")
              .removeUniqueId(),
            this.tablist.unbind(this.eventNamespace),
            this.tabs.add(this.panels).each(function () {
              t.data(this, "ui-tabs-destroy")
                ? t(this).remove()
                : t(this)
                    .removeClass(
                      "ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel"
                    )
                    .removeAttr("tabIndex")
                    .removeAttr("aria-live")
                    .removeAttr("aria-busy")
                    .removeAttr("aria-selected")
                    .removeAttr("aria-labelledby")
                    .removeAttr("aria-hidden")
                    .removeAttr("aria-expanded")
                    .removeAttr("role");
            }),
            this.tabs.each(function () {
              var e = t(this),
                i = e.data("ui-tabs-aria-controls");
              i
                ? e.attr("aria-controls", i).removeData("ui-tabs-aria-controls")
                : e.removeAttr("aria-controls");
            }),
            this.panels.show(),
            "content" !== this.options.heightStyle &&
              this.panels.css("height", "");
        },
        enable: function (e) {
          var i = this.options.disabled;
          i !== !1 &&
            (void 0 === e
              ? (i = !1)
              : ((e = this._getIndex(e)),
                (i = t.isArray(i)
                  ? t.map(i, function (t) {
                      return t !== e ? t : null;
                    })
                  : t.map(this.tabs, function (t, i) {
                      return i !== e ? i : null;
                    }))),
            this._setupDisabled(i));
        },
        disable: function (e) {
          var i = this.options.disabled;
          if (i !== !0) {
            if (void 0 === e) i = !0;
            else {
              if (((e = this._getIndex(e)), -1 !== t.inArray(e, i))) return;
              i = t.isArray(i) ? t.merge([e], i).sort() : [e];
            }
            this._setupDisabled(i);
          }
        },
        load: function (e, i) {
          e = this._getIndex(e);
          var n = this,
            s = this.tabs.eq(e),
            o = s.find(".ui-tabs-anchor"),
            r = this._getPanelForTab(s),
            a = { tab: s, panel: r };
          this._isLocal(o[0]) ||
            ((this.xhr = t.ajax(this._ajaxSettings(o, i, a))),
            this.xhr &&
              "canceled" !== this.xhr.statusText &&
              (s.addClass("ui-tabs-loading"),
              r.attr("aria-busy", "true"),
              this.xhr
                .success(function (t) {
                  setTimeout(function () {
                    r.html(t), n._trigger("load", i, a);
                  }, 1);
                })
                .complete(function (t, e) {
                  setTimeout(function () {
                    "abort" === e && n.panels.stop(!1, !0),
                      s.removeClass("ui-tabs-loading"),
                      r.removeAttr("aria-busy"),
                      t === n.xhr && delete n.xhr;
                  }, 1);
                })));
        },
        _ajaxSettings: function (e, i, n) {
          var s = this;
          return {
            url: e.attr("href"),
            beforeSend: function (e, o) {
              return s._trigger(
                "beforeLoad",
                i,
                t.extend({ jqXHR: e, ajaxSettings: o }, n)
              );
            },
          };
        },
        _getPanelForTab: function (e) {
          var i = t(e).attr("aria-controls");
          return this.element.find(this._sanitizeSelector("#" + i));
        },
      }),
      t.widget("ui.tooltip", {
        version: "1.11.2",
        options: {
          content: function () {
            var e = t(this).attr("title") || "";
            return t("<a>").text(e).html();
          },
          hide: !0,
          items: "[title]:not([disabled])",
          position: {
            my: "left top+15",
            at: "left bottom",
            collision: "flipfit flip",
          },
          show: !0,
          tooltipClass: null,
          track: !1,
          close: null,
          open: null,
        },
        _addDescribedBy: function (e, i) {
          var n = (e.attr("aria-describedby") || "").split(/\s+/);
          n.push(i),
            e
              .data("ui-tooltip-id", i)
              .attr("aria-describedby", t.trim(n.join(" ")));
        },
        _removeDescribedBy: function (e) {
          var i = e.data("ui-tooltip-id"),
            n = (e.attr("aria-describedby") || "").split(/\s+/),
            s = t.inArray(i, n);
          -1 !== s && n.splice(s, 1),
            e.removeData("ui-tooltip-id"),
            (n = t.trim(n.join(" "))),
            n
              ? e.attr("aria-describedby", n)
              : e.removeAttr("aria-describedby");
        },
        _create: function () {
          this._on({ mouseover: "open", focusin: "open" }),
            (this.tooltips = {}),
            (this.parents = {}),
            this.options.disabled && this._disable(),
            (this.liveRegion = t("<div>")
              .attr({
                role: "log",
                "aria-live": "assertive",
                "aria-relevant": "additions",
              })
              .addClass("ui-helper-hidden-accessible")
              .appendTo(this.document[0].body));
        },
        _setOption: function (e, i) {
          var n = this;
          return "disabled" === e
            ? (this[i ? "_disable" : "_enable"](), void (this.options[e] = i))
            : (this._super(e, i),
              void (
                "content" === e &&
                t.each(this.tooltips, function (t, e) {
                  n._updateContent(e.element);
                })
              ));
        },
        _disable: function () {
          var e = this;
          t.each(this.tooltips, function (i, n) {
            var s = t.Event("blur");
            (s.target = s.currentTarget = n.element[0]), e.close(s, !0);
          }),
            this.element
              .find(this.options.items)
              .addBack()
              .each(function () {
                var e = t(this);
                e.is("[title]") &&
                  e
                    .data("ui-tooltip-title", e.attr("title"))
                    .removeAttr("title");
              });
        },
        _enable: function () {
          this.element
            .find(this.options.items)
            .addBack()
            .each(function () {
              var e = t(this);
              e.data("ui-tooltip-title") &&
                e.attr("title", e.data("ui-tooltip-title"));
            });
        },
        open: function (e) {
          var i = this,
            n = t(e ? e.target : this.element).closest(this.options.items);
          n.length &&
            !n.data("ui-tooltip-id") &&
            (n.attr("title") && n.data("ui-tooltip-title", n.attr("title")),
            n.data("ui-tooltip-open", !0),
            e &&
              "mouseover" === e.type &&
              n.parents().each(function () {
                var e,
                  n = t(this);
                n.data("ui-tooltip-open") &&
                  ((e = t.Event("blur")),
                  (e.target = e.currentTarget = this),
                  i.close(e, !0)),
                  n.attr("title") &&
                    (n.uniqueId(),
                    (i.parents[this.id] = {
                      element: this,
                      title: n.attr("title"),
                    }),
                    n.attr("title", ""));
              }),
            this._updateContent(n, e));
        },
        _updateContent: function (t, e) {
          var i,
            n = this.options.content,
            s = this,
            o = e ? e.type : null;
          return "string" == typeof n
            ? this._open(e, t, n)
            : ((i = n.call(t[0], function (i) {
                t.data("ui-tooltip-open") &&
                  s._delay(function () {
                    e && (e.type = o), this._open(e, t, i);
                  });
              })),
              void (i && this._open(e, t, i)));
        },
        _open: function (e, i, n) {
          function s(t) {
            (h.of = t), r.is(":hidden") || r.position(h);
          }
          var o,
            r,
            a,
            l,
            u,
            h = t.extend({}, this.options.position);
          if (n) {
            if ((o = this._find(i)))
              return void o.tooltip.find(".ui-tooltip-content").html(n);
            i.is("[title]") &&
              (e && "mouseover" === e.type
                ? i.attr("title", "")
                : i.removeAttr("title")),
              (o = this._tooltip(i)),
              (r = o.tooltip),
              this._addDescribedBy(i, r.attr("id")),
              r.find(".ui-tooltip-content").html(n),
              this.liveRegion.children().hide(),
              n.clone
                ? ((u = n.clone()),
                  u.removeAttr("id").find("[id]").removeAttr("id"))
                : (u = n),
              t("<div>").html(u).appendTo(this.liveRegion),
              this.options.track && e && /^mouse/.test(e.type)
                ? (this._on(this.document, { mousemove: s }), s(e))
                : r.position(t.extend({ of: i }, this.options.position)),
              r.hide(),
              this._show(r, this.options.show),
              this.options.show &&
                this.options.show.delay &&
                (l = this.delayedShow =
                  setInterval(function () {
                    r.is(":visible") && (s(h.of), clearInterval(l));
                  }, t.fx.interval)),
              this._trigger("open", e, { tooltip: r }),
              (a = {
                keyup: function (e) {
                  if (e.keyCode === t.ui.keyCode.ESCAPE) {
                    var n = t.Event(e);
                    (n.currentTarget = i[0]), this.close(n, !0);
                  }
                },
              }),
              i[0] !== this.element[0] &&
                (a.remove = function () {
                  this._removeTooltip(r);
                }),
              (e && "mouseover" !== e.type) || (a.mouseleave = "close"),
              (e && "focusin" !== e.type) || (a.focusout = "close"),
              this._on(!0, i, a);
          }
        },
        close: function (e) {
          var i,
            n = this,
            s = t(e ? e.currentTarget : this.element),
            o = this._find(s);
          o &&
            ((i = o.tooltip),
            o.closing ||
              (clearInterval(this.delayedShow),
              s.data("ui-tooltip-title") &&
                !s.attr("title") &&
                s.attr("title", s.data("ui-tooltip-title")),
              this._removeDescribedBy(s),
              (o.hiding = !0),
              i.stop(!0),
              this._hide(i, this.options.hide, function () {
                n._removeTooltip(t(this));
              }),
              s.removeData("ui-tooltip-open"),
              this._off(s, "mouseleave focusout keyup"),
              s[0] !== this.element[0] && this._off(s, "remove"),
              this._off(this.document, "mousemove"),
              e &&
                "mouseleave" === e.type &&
                t.each(this.parents, function (e, i) {
                  t(i.element).attr("title", i.title), delete n.parents[e];
                }),
              (o.closing = !0),
              this._trigger("close", e, { tooltip: i }),
              o.hiding || (o.closing = !1)));
        },
        _tooltip: function (e) {
          var i = t("<div>")
              .attr("role", "tooltip")
              .addClass(
                "ui-tooltip ui-widget ui-corner-all ui-widget-content " +
                  (this.options.tooltipClass || "")
              ),
            n = i.uniqueId().attr("id");
          return (
            t("<div>").addClass("ui-tooltip-content").appendTo(i),
            i.appendTo(this.document[0].body),
            (this.tooltips[n] = { element: e, tooltip: i })
          );
        },
        _find: function (t) {
          var e = t.data("ui-tooltip-id");
          return e ? this.tooltips[e] : null;
        },
        _removeTooltip: function (t) {
          t.remove(), delete this.tooltips[t.attr("id")];
        },
        _destroy: function () {
          var e = this;
          t.each(this.tooltips, function (i, n) {
            var s = t.Event("blur"),
              o = n.element;
            (s.target = s.currentTarget = o[0]),
              e.close(s, !0),
              t("#" + i).remove(),
              o.data("ui-tooltip-title") &&
                (o.attr("title") || o.attr("title", o.data("ui-tooltip-title")),
                o.removeData("ui-tooltip-title"));
          }),
            this.liveRegion.remove();
        },
      });
    var y = "ui-effects-",
      b = t;
    (t.effects = { effect: {} }),
      (function (t, e) {
        function i(t, e, i) {
          var n = c[e.type] || {};
          return null == t
            ? i || !e.def
              ? null
              : e.def
            : ((t = n.floor ? ~~t : parseFloat(t)),
              isNaN(t)
                ? e.def
                : n.mod
                ? (t + n.mod) % n.mod
                : 0 > t
                ? 0
                : t > n.max
                ? n.max
                : t);
        }
        function n(i) {
          var n = u(),
            s = (n._rgba = []);
          return (
            (i = i.toLowerCase()),
            f(l, function (t, o) {
              var r,
                a = o.re.exec(i),
                l = a && o.parse(a),
                u = o.space || "rgba";
              return l
                ? ((r = n[u](l)),
                  (n[h[u].cache] = r[h[u].cache]),
                  (s = n._rgba = r._rgba),
                  !1)
                : e;
            }),
            s.length
              ? ("0,0,0,0" === s.join() && t.extend(s, o.transparent), n)
              : o[i]
          );
        }
        function s(t, e, i) {
          return (
            (i = (i + 1) % 1),
            1 > 6 * i
              ? t + 6 * (e - t) * i
              : 1 > 2 * i
              ? e
              : 2 > 3 * i
              ? t + 6 * (e - t) * (2 / 3 - i)
              : t
          );
        }
        var o,
          r =
            "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
          a = /^([\-+])=\s*(\d+\.?\d*)/,
          l = [
            {
              re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
              parse: function (t) {
                return [t[1], t[2], t[3], t[4]];
              },
            },
            {
              re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
              parse: function (t) {
                return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]];
              },
            },
            {
              re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
              parse: function (t) {
                return [
                  parseInt(t[1], 16),
                  parseInt(t[2], 16),
                  parseInt(t[3], 16),
                ];
              },
            },
            {
              re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
              parse: function (t) {
                return [
                  parseInt(t[1] + t[1], 16),
                  parseInt(t[2] + t[2], 16),
                  parseInt(t[3] + t[3], 16),
                ];
              },
            },
            {
              re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
              space: "hsla",
              parse: function (t) {
                return [t[1], t[2] / 100, t[3] / 100, t[4]];
              },
            },
          ],
          u = (t.Color = function (e, i, n, s) {
            return new t.Color.fn.parse(e, i, n, s);
          }),
          h = {
            rgba: {
              props: {
                red: { idx: 0, type: "byte" },
                green: { idx: 1, type: "byte" },
                blue: { idx: 2, type: "byte" },
              },
            },
            hsla: {
              props: {
                hue: { idx: 0, type: "degrees" },
                saturation: { idx: 1, type: "percent" },
                lightness: { idx: 2, type: "percent" },
              },
            },
          },
          c = {
            byte: { floor: !0, max: 255 },
            percent: { max: 1 },
            degrees: { mod: 360, floor: !0 },
          },
          d = (u.support = {}),
          p = t("<p>")[0],
          f = t.each;
        (p.style.cssText = "background-color:rgba(1,1,1,.5)"),
          (d.rgba = p.style.backgroundColor.indexOf("rgba") > -1),
          f(h, function (t, e) {
            (e.cache = "_" + t),
              (e.props.alpha = { idx: 3, type: "percent", def: 1 });
          }),
          (u.fn = t.extend(u.prototype, {
            parse: function (s, r, a, l) {
              if (s === e) return (this._rgba = [null, null, null, null]), this;
              (s.jquery || s.nodeType) && ((s = t(s).css(r)), (r = e));
              var c = this,
                d = t.type(s),
                p = (this._rgba = []);
              return (
                r !== e && ((s = [s, r, a, l]), (d = "array")),
                "string" === d
                  ? this.parse(n(s) || o._default)
                  : "array" === d
                  ? (f(h.rgba.props, function (t, e) {
                      p[e.idx] = i(s[e.idx], e);
                    }),
                    this)
                  : "object" === d
                  ? (s instanceof u
                      ? f(h, function (t, e) {
                          s[e.cache] && (c[e.cache] = s[e.cache].slice());
                        })
                      : f(h, function (e, n) {
                          var o = n.cache;
                          f(n.props, function (t, e) {
                            if (!c[o] && n.to) {
                              if ("alpha" === t || null == s[t]) return;
                              c[o] = n.to(c._rgba);
                            }
                            c[o][e.idx] = i(s[t], e, !0);
                          }),
                            c[o] &&
                              0 > t.inArray(null, c[o].slice(0, 3)) &&
                              ((c[o][3] = 1),
                              n.from && (c._rgba = n.from(c[o])));
                        }),
                    this)
                  : e
              );
            },
            is: function (t) {
              var i = u(t),
                n = !0,
                s = this;
              return (
                f(h, function (t, o) {
                  var r,
                    a = i[o.cache];
                  return (
                    a &&
                      ((r = s[o.cache] || (o.to && o.to(s._rgba)) || []),
                      f(o.props, function (t, i) {
                        return null != a[i.idx]
                          ? (n = a[i.idx] === r[i.idx])
                          : e;
                      })),
                    n
                  );
                }),
                n
              );
            },
            _space: function () {
              var t = [],
                e = this;
              return (
                f(h, function (i, n) {
                  e[n.cache] && t.push(i);
                }),
                t.pop()
              );
            },
            transition: function (t, e) {
              var n = u(t),
                s = n._space(),
                o = h[s],
                r = 0 === this.alpha() ? u("transparent") : this,
                a = r[o.cache] || o.to(r._rgba),
                l = a.slice();
              return (
                (n = n[o.cache]),
                f(o.props, function (t, s) {
                  var o = s.idx,
                    r = a[o],
                    u = n[o],
                    h = c[s.type] || {};
                  null !== u &&
                    (null === r
                      ? (l[o] = u)
                      : (h.mod &&
                          (u - r > h.mod / 2
                            ? (r += h.mod)
                            : r - u > h.mod / 2 && (r -= h.mod)),
                        (l[o] = i((u - r) * e + r, s))));
                }),
                this[s](l)
              );
            },
            blend: function (e) {
              if (1 === this._rgba[3]) return this;
              var i = this._rgba.slice(),
                n = i.pop(),
                s = u(e)._rgba;
              return u(
                t.map(i, function (t, e) {
                  return (1 - n) * s[e] + n * t;
                })
              );
            },
            toRgbaString: function () {
              var e = "rgba(",
                i = t.map(this._rgba, function (t, e) {
                  return null == t ? (e > 2 ? 1 : 0) : t;
                });
              return 1 === i[3] && (i.pop(), (e = "rgb(")), e + i.join() + ")";
            },
            toHslaString: function () {
              var e = "hsla(",
                i = t.map(this.hsla(), function (t, e) {
                  return (
                    null == t && (t = e > 2 ? 1 : 0),
                    e && 3 > e && (t = Math.round(100 * t) + "%"),
                    t
                  );
                });
              return 1 === i[3] && (i.pop(), (e = "hsl(")), e + i.join() + ")";
            },
            toHexString: function (e) {
              var i = this._rgba.slice(),
                n = i.pop();
              return (
                e && i.push(~~(255 * n)),
                "#" +
                  t
                    .map(i, function (t) {
                      return (
                        (t = (t || 0).toString(16)),
                        1 === t.length ? "0" + t : t
                      );
                    })
                    .join("")
              );
            },
            toString: function () {
              return 0 === this._rgba[3] ? "transparent" : this.toRgbaString();
            },
          })),
          (u.fn.parse.prototype = u.fn),
          (h.hsla.to = function (t) {
            if (null == t[0] || null == t[1] || null == t[2])
              return [null, null, null, t[3]];
            var e,
              i,
              n = t[0] / 255,
              s = t[1] / 255,
              o = t[2] / 255,
              r = t[3],
              a = Math.max(n, s, o),
              l = Math.min(n, s, o),
              u = a - l,
              h = a + l,
              c = 0.5 * h;
            return (
              (e =
                l === a
                  ? 0
                  : n === a
                  ? (60 * (s - o)) / u + 360
                  : s === a
                  ? (60 * (o - n)) / u + 120
                  : (60 * (n - s)) / u + 240),
              (i = 0 === u ? 0 : 0.5 >= c ? u / h : u / (2 - h)),
              [Math.round(e) % 360, i, c, null == r ? 1 : r]
            );
          }),
          (h.hsla.from = function (t) {
            if (null == t[0] || null == t[1] || null == t[2])
              return [null, null, null, t[3]];
            var e = t[0] / 360,
              i = t[1],
              n = t[2],
              o = t[3],
              r = 0.5 >= n ? n * (1 + i) : n + i - n * i,
              a = 2 * n - r;
            return [
              Math.round(255 * s(a, r, e + 1 / 3)),
              Math.round(255 * s(a, r, e)),
              Math.round(255 * s(a, r, e - 1 / 3)),
              o,
            ];
          }),
          f(h, function (n, s) {
            var o = s.props,
              r = s.cache,
              l = s.to,
              h = s.from;
            (u.fn[n] = function (n) {
              if ((l && !this[r] && (this[r] = l(this._rgba)), n === e))
                return this[r].slice();
              var s,
                a = t.type(n),
                c = "array" === a || "object" === a ? n : arguments,
                d = this[r].slice();
              return (
                f(o, function (t, e) {
                  var n = c["object" === a ? t : e.idx];
                  null == n && (n = d[e.idx]), (d[e.idx] = i(n, e));
                }),
                h ? ((s = u(h(d))), (s[r] = d), s) : u(d)
              );
            }),
              f(o, function (e, i) {
                u.fn[e] ||
                  (u.fn[e] = function (s) {
                    var o,
                      r = t.type(s),
                      l = "alpha" === e ? (this._hsla ? "hsla" : "rgba") : n,
                      u = this[l](),
                      h = u[i.idx];
                    return "undefined" === r
                      ? h
                      : ("function" === r &&
                          ((s = s.call(this, h)), (r = t.type(s))),
                        null == s && i.empty
                          ? this
                          : ("string" === r &&
                              ((o = a.exec(s)),
                              o &&
                                (s =
                                  h +
                                  parseFloat(o[2]) * ("+" === o[1] ? 1 : -1))),
                            (u[i.idx] = s),
                            this[l](u)));
                  });
              });
          }),
          (u.hook = function (e) {
            var i = e.split(" ");
            f(i, function (e, i) {
              (t.cssHooks[i] = {
                set: function (e, s) {
                  var o,
                    r,
                    a = "";
                  if (
                    "transparent" !== s &&
                    ("string" !== t.type(s) || (o = n(s)))
                  ) {
                    if (((s = u(o || s)), !d.rgba && 1 !== s._rgba[3])) {
                      for (
                        r = "backgroundColor" === i ? e.parentNode : e;
                        ("" === a || "transparent" === a) && r && r.style;

                      )
                        try {
                          (a = t.css(r, "backgroundColor")), (r = r.parentNode);
                        } catch (l) {}
                      s = s.blend(a && "transparent" !== a ? a : "_default");
                    }
                    s = s.toRgbaString();
                  }
                  try {
                    e.style[i] = s;
                  } catch (l) {}
                },
              }),
                (t.fx.step[i] = function (e) {
                  e.colorInit ||
                    ((e.start = u(e.elem, i)),
                    (e.end = u(e.end)),
                    (e.colorInit = !0)),
                    t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos));
                });
            });
          }),
          u.hook(r),
          (t.cssHooks.borderColor = {
            expand: function (t) {
              var e = {};
              return (
                f(["Top", "Right", "Bottom", "Left"], function (i, n) {
                  e["border" + n + "Color"] = t;
                }),
                e
              );
            },
          }),
          (o = t.Color.names =
            {
              aqua: "#00ffff",
              black: "#000000",
              blue: "#0000ff",
              fuchsia: "#ff00ff",
              gray: "#808080",
              green: "#008000",
              lime: "#00ff00",
              maroon: "#800000",
              navy: "#000080",
              olive: "#808000",
              purple: "#800080",
              red: "#ff0000",
              silver: "#c0c0c0",
              teal: "#008080",
              white: "#ffffff",
              yellow: "#ffff00",
              transparent: [null, null, null, 0],
              _default: "#ffffff",
            });
      })(b),
      (function () {
        function e(e) {
          var i,
            n,
            s = e.ownerDocument.defaultView
              ? e.ownerDocument.defaultView.getComputedStyle(e, null)
              : e.currentStyle,
            o = {};
          if (s && s.length && s[0] && s[s[0]])
            for (n = s.length; n--; )
              (i = s[n]), "string" == typeof s[i] && (o[t.camelCase(i)] = s[i]);
          else for (i in s) "string" == typeof s[i] && (o[i] = s[i]);
          return o;
        }
        function i(e, i) {
          var n,
            o,
            r = {};
          for (n in i)
            (o = i[n]),
              e[n] !== o &&
                (s[n] ||
                  ((t.fx.step[n] || !isNaN(parseFloat(o))) && (r[n] = o)));
          return r;
        }
        var n = ["add", "remove", "toggle"],
          s = {
            border: 1,
            borderBottom: 1,
            borderColor: 1,
            borderLeft: 1,
            borderRight: 1,
            borderTop: 1,
            borderWidth: 1,
            margin: 1,
            padding: 1,
          };
        t.each(
          [
            "borderLeftStyle",
            "borderRightStyle",
            "borderBottomStyle",
            "borderTopStyle",
          ],
          function (e, i) {
            t.fx.step[i] = function (t) {
              (("none" !== t.end && !t.setAttr) ||
                (1 === t.pos && !t.setAttr)) &&
                (b.style(t.elem, i, t.end), (t.setAttr = !0));
            };
          }
        ),
          t.fn.addBack ||
            (t.fn.addBack = function (t) {
              return this.add(
                null == t ? this.prevObject : this.prevObject.filter(t)
              );
            }),
          (t.effects.animateClass = function (s, o, r, a) {
            var l = t.speed(o, r, a);
            return this.queue(function () {
              var o,
                r = t(this),
                a = r.attr("class") || "",
                u = l.children ? r.find("*").addBack() : r;
              (u = u.map(function () {
                var i = t(this);
                return { el: i, start: e(this) };
              })),
                (o = function () {
                  t.each(n, function (t, e) {
                    s[e] && r[e + "Class"](s[e]);
                  });
                }),
                o(),
                (u = u.map(function () {
                  return (
                    (this.end = e(this.el[0])),
                    (this.diff = i(this.start, this.end)),
                    this
                  );
                })),
                r.attr("class", a),
                (u = u.map(function () {
                  var e = this,
                    i = t.Deferred(),
                    n = t.extend({}, l, {
                      queue: !1,
                      complete: function () {
                        i.resolve(e);
                      },
                    });
                  return this.el.animate(this.diff, n), i.promise();
                })),
                t.when.apply(t, u.get()).done(function () {
                  o(),
                    t.each(arguments, function () {
                      var e = this.el;
                      t.each(this.diff, function (t) {
                        e.css(t, "");
                      });
                    }),
                    l.complete.call(r[0]);
                });
            });
          }),
          t.fn.extend({
            addClass: (function (e) {
              return function (i, n, s, o) {
                return n
                  ? t.effects.animateClass.call(this, { add: i }, n, s, o)
                  : e.apply(this, arguments);
              };
            })(t.fn.addClass),
            removeClass: (function (e) {
              return function (i, n, s, o) {
                return arguments.length > 1
                  ? t.effects.animateClass.call(this, { remove: i }, n, s, o)
                  : e.apply(this, arguments);
              };
            })(t.fn.removeClass),
            toggleClass: (function (e) {
              return function (i, n, s, o, r) {
                return "boolean" == typeof n || void 0 === n
                  ? s
                    ? t.effects.animateClass.call(
                        this,
                        n ? { add: i } : { remove: i },
                        s,
                        o,
                        r
                      )
                    : e.apply(this, arguments)
                  : t.effects.animateClass.call(this, { toggle: i }, n, s, o);
              };
            })(t.fn.toggleClass),
            switchClass: function (e, i, n, s, o) {
              return t.effects.animateClass.call(
                this,
                { add: i, remove: e },
                n,
                s,
                o
              );
            },
          });
      })(),
      (function () {
        function e(e, i, n, s) {
          return (
            t.isPlainObject(e) && ((i = e), (e = e.effect)),
            (e = { effect: e }),
            null == i && (i = {}),
            t.isFunction(i) && ((s = i), (n = null), (i = {})),
            ("number" == typeof i || t.fx.speeds[i]) &&
              ((s = n), (n = i), (i = {})),
            t.isFunction(n) && ((s = n), (n = null)),
            i && t.extend(e, i),
            (n = n || i.duration),
            (e.duration = t.fx.off
              ? 0
              : "number" == typeof n
              ? n
              : n in t.fx.speeds
              ? t.fx.speeds[n]
              : t.fx.speeds._default),
            (e.complete = s || i.complete),
            e
          );
        }
        function i(e) {
          return !e || "number" == typeof e || t.fx.speeds[e]
            ? !0
            : "string" != typeof e || t.effects.effect[e]
            ? t.isFunction(e)
              ? !0
              : "object" != typeof e || e.effect
              ? !1
              : !0
            : !0;
        }
        t.extend(t.effects, {
          version: "1.11.2",
          save: function (t, e) {
            for (var i = 0; e.length > i; i++)
              null !== e[i] && t.data(y + e[i], t[0].style[e[i]]);
          },
          restore: function (t, e) {
            var i, n;
            for (n = 0; e.length > n; n++)
              null !== e[n] &&
                ((i = t.data(y + e[n])),
                void 0 === i && (i = ""),
                t.css(e[n], i));
          },
          setMode: function (t, e) {
            return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e;
          },
          getBaseline: function (t, e) {
            var i, n;
            switch (t[0]) {
              case "top":
                i = 0;
                break;
              case "middle":
                i = 0.5;
                break;
              case "bottom":
                i = 1;
                break;
              default:
                i = t[0] / e.height;
            }
            switch (t[1]) {
              case "left":
                n = 0;
                break;
              case "center":
                n = 0.5;
                break;
              case "right":
                n = 1;
                break;
              default:
                n = t[1] / e.width;
            }
            return { x: n, y: i };
          },
          createWrapper: function (e) {
            if (e.parent().is(".ui-effects-wrapper")) return e.parent();
            var i = {
                width: e.outerWidth(!0),
                height: e.outerHeight(!0),
                float: e.css("float"),
              },
              n = t("<div></div>").addClass("ui-effects-wrapper").css({
                fontSize: "100%",
                background: "transparent",
                border: "none",
                margin: 0,
                padding: 0,
              }),
              s = { width: e.width(), height: e.height() },
              o = document.activeElement;
            try {
              o.id;
            } catch (r) {
              o = document.body;
            }
            return (
              e.wrap(n),
              (e[0] === o || t.contains(e[0], o)) && t(o).focus(),
              (n = e.parent()),
              "static" === e.css("position")
                ? (n.css({ position: "relative" }),
                  e.css({ position: "relative" }))
                : (t.extend(i, {
                    position: e.css("position"),
                    zIndex: e.css("z-index"),
                  }),
                  t.each(["top", "left", "bottom", "right"], function (t, n) {
                    (i[n] = e.css(n)),
                      isNaN(parseInt(i[n], 10)) && (i[n] = "auto");
                  }),
                  e.css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    right: "auto",
                    bottom: "auto",
                  })),
              e.css(s),
              n.css(i).show()
            );
          },
          removeWrapper: function (e) {
            var i = document.activeElement;
            return (
              e.parent().is(".ui-effects-wrapper") &&
                (e.parent().replaceWith(e),
                (e[0] === i || t.contains(e[0], i)) && t(i).focus()),
              e
            );
          },
          setTransition: function (e, i, n, s) {
            return (
              (s = s || {}),
              t.each(i, function (t, i) {
                var o = e.cssUnit(i);
                o[0] > 0 && (s[i] = o[0] * n + o[1]);
              }),
              s
            );
          },
        }),
          t.fn.extend({
            effect: function () {
              function i(e) {
                function i() {
                  t.isFunction(o) && o.call(s[0]), t.isFunction(e) && e();
                }
                var s = t(this),
                  o = n.complete,
                  a = n.mode;
                (s.is(":hidden") ? "hide" === a : "show" === a)
                  ? (s[a](), i())
                  : r.call(s[0], n, i);
              }
              var n = e.apply(this, arguments),
                s = n.mode,
                o = n.queue,
                r = t.effects.effect[n.effect];
              return t.fx.off || !r
                ? s
                  ? this[s](n.duration, n.complete)
                  : this.each(function () {
                      n.complete && n.complete.call(this);
                    })
                : o === !1
                ? this.each(i)
                : this.queue(o || "fx", i);
            },
            show: (function (t) {
              return function (n) {
                if (i(n)) return t.apply(this, arguments);
                var s = e.apply(this, arguments);
                return (s.mode = "show"), this.effect.call(this, s);
              };
            })(t.fn.show),
            hide: (function (t) {
              return function (n) {
                if (i(n)) return t.apply(this, arguments);
                var s = e.apply(this, arguments);
                return (s.mode = "hide"), this.effect.call(this, s);
              };
            })(t.fn.hide),
            toggle: (function (t) {
              return function (n) {
                if (i(n) || "boolean" == typeof n)
                  return t.apply(this, arguments);
                var s = e.apply(this, arguments);
                return (s.mode = "toggle"), this.effect.call(this, s);
              };
            })(t.fn.toggle),
            cssUnit: function (e) {
              var i = this.css(e),
                n = [];
              return (
                t.each(["em", "px", "%", "pt"], function (t, e) {
                  i.indexOf(e) > 0 && (n = [parseFloat(i), e]);
                }),
                n
              );
            },
          });
      })(),
      (function () {
        var e = {};
        t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (t, i) {
          e[i] = function (e) {
            return Math.pow(e, t + 2);
          };
        }),
          t.extend(e, {
            Sine: function (t) {
              return 1 - Math.cos((t * Math.PI) / 2);
            },
            Circ: function (t) {
              return 1 - Math.sqrt(1 - t * t);
            },
            Elastic: function (t) {
              return 0 === t || 1 === t
                ? t
                : -Math.pow(2, 8 * (t - 1)) *
                    Math.sin(((80 * (t - 1) - 7.5) * Math.PI) / 15);
            },
            Back: function (t) {
              return t * t * (3 * t - 2);
            },
            Bounce: function (t) {
              for (var e, i = 4; ((e = Math.pow(2, --i)) - 1) / 11 > t; );
              return (
                1 / Math.pow(4, 3 - i) -
                7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
              );
            },
          }),
          t.each(e, function (e, i) {
            (t.easing["easeIn" + e] = i),
              (t.easing["easeOut" + e] = function (t) {
                return 1 - i(1 - t);
              }),
              (t.easing["easeInOut" + e] = function (t) {
                return 0.5 > t ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2;
              });
          });
      })(),
      t.effects,
      (t.effects.effect.blind = function (e, i) {
        var n,
          s,
          o,
          r = t(this),
          a = /up|down|vertical/,
          l = /up|left|vertical|horizontal/,
          u = ["position", "top", "bottom", "left", "right", "height", "width"],
          h = t.effects.setMode(r, e.mode || "hide"),
          c = e.direction || "up",
          d = a.test(c),
          p = d ? "height" : "width",
          f = d ? "top" : "left",
          m = l.test(c),
          g = {},
          v = "show" === h;
        r.parent().is(".ui-effects-wrapper")
          ? t.effects.save(r.parent(), u)
          : t.effects.save(r, u),
          r.show(),
          (n = t.effects.createWrapper(r).css({ overflow: "hidden" })),
          (s = n[p]()),
          (o = parseFloat(n.css(f)) || 0),
          (g[p] = v ? s : 0),
          m ||
            (r
              .css(d ? "bottom" : "right", 0)
              .css(d ? "top" : "left", "auto")
              .css({ position: "absolute" }),
            (g[f] = v ? o : s + o)),
          v && (n.css(p, 0), m || n.css(f, o + s)),
          n.animate(g, {
            duration: e.duration,
            easing: e.easing,
            queue: !1,
            complete: function () {
              "hide" === h && r.hide(),
                t.effects.restore(r, u),
                t.effects.removeWrapper(r),
                i();
            },
          });
      }),
      (t.effects.effect.bounce = function (e, i) {
        var n,
          s,
          o,
          r = t(this),
          a = ["position", "top", "bottom", "left", "right", "height", "width"],
          l = t.effects.setMode(r, e.mode || "effect"),
          u = "hide" === l,
          h = "show" === l,
          c = e.direction || "up",
          d = e.distance,
          p = e.times || 5,
          f = 2 * p + (h || u ? 1 : 0),
          m = e.duration / f,
          g = e.easing,
          v = "up" === c || "down" === c ? "top" : "left",
          y = "up" === c || "left" === c,
          b = r.queue(),
          _ = b.length;
        for (
          (h || u) && a.push("opacity"),
            t.effects.save(r, a),
            r.show(),
            t.effects.createWrapper(r),
            d || (d = r["top" === v ? "outerHeight" : "outerWidth"]() / 3),
            h &&
              ((o = { opacity: 1 }),
              (o[v] = 0),
              r
                .css("opacity", 0)
                .css(v, y ? 2 * -d : 2 * d)
                .animate(o, m, g)),
            u && (d /= Math.pow(2, p - 1)),
            o = {},
            o[v] = 0,
            n = 0;
          p > n;
          n++
        )
          (s = {}),
            (s[v] = (y ? "-=" : "+=") + d),
            r.animate(s, m, g).animate(o, m, g),
            (d = u ? 2 * d : d / 2);
        u &&
          ((s = { opacity: 0 }),
          (s[v] = (y ? "-=" : "+=") + d),
          r.animate(s, m, g)),
          r.queue(function () {
            u && r.hide(),
              t.effects.restore(r, a),
              t.effects.removeWrapper(r),
              i();
          }),
          _ > 1 && b.splice.apply(b, [1, 0].concat(b.splice(_, f + 1))),
          r.dequeue();
      }),
      (t.effects.effect.clip = function (e, i) {
        var n,
          s,
          o,
          r = t(this),
          a = ["position", "top", "bottom", "left", "right", "height", "width"],
          l = t.effects.setMode(r, e.mode || "hide"),
          u = "show" === l,
          h = e.direction || "vertical",
          c = "vertical" === h,
          d = c ? "height" : "width",
          p = c ? "top" : "left",
          f = {};
        t.effects.save(r, a),
          r.show(),
          (n = t.effects.createWrapper(r).css({ overflow: "hidden" })),
          (s = "IMG" === r[0].tagName ? n : r),
          (o = s[d]()),
          u && (s.css(d, 0), s.css(p, o / 2)),
          (f[d] = u ? o : 0),
          (f[p] = u ? 0 : o / 2),
          s.animate(f, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function () {
              u || r.hide(),
                t.effects.restore(r, a),
                t.effects.removeWrapper(r),
                i();
            },
          });
      }),
      (t.effects.effect.drop = function (e, i) {
        var n,
          s = t(this),
          o = [
            "position",
            "top",
            "bottom",
            "left",
            "right",
            "opacity",
            "height",
            "width",
          ],
          r = t.effects.setMode(s, e.mode || "hide"),
          a = "show" === r,
          l = e.direction || "left",
          u = "up" === l || "down" === l ? "top" : "left",
          h = "up" === l || "left" === l ? "pos" : "neg",
          c = { opacity: a ? 1 : 0 };
        t.effects.save(s, o),
          s.show(),
          t.effects.createWrapper(s),
          (n =
            e.distance ||
            s["top" === u ? "outerHeight" : "outerWidth"](!0) / 2),
          a && s.css("opacity", 0).css(u, "pos" === h ? -n : n),
          (c[u] =
            (a ? ("pos" === h ? "+=" : "-=") : "pos" === h ? "-=" : "+=") + n),
          s.animate(c, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function () {
              "hide" === r && s.hide(),
                t.effects.restore(s, o),
                t.effects.removeWrapper(s),
                i();
            },
          });
      }),
      (t.effects.effect.explode = function (e, i) {
        function n() {
          b.push(this), b.length === c * d && s();
        }
        function s() {
          p.css({ visibility: "visible" }), t(b).remove(), m || p.hide(), i();
        }
        var o,
          r,
          a,
          l,
          u,
          h,
          c = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3,
          d = c,
          p = t(this),
          f = t.effects.setMode(p, e.mode || "hide"),
          m = "show" === f,
          g = p.show().css("visibility", "hidden").offset(),
          v = Math.ceil(p.outerWidth() / d),
          y = Math.ceil(p.outerHeight() / c),
          b = [];
        for (o = 0; c > o; o++)
          for (l = g.top + o * y, h = o - (c - 1) / 2, r = 0; d > r; r++)
            (a = g.left + r * v),
              (u = r - (d - 1) / 2),
              p
                .clone()
                .appendTo("body")
                .wrap("<div></div>")
                .css({
                  position: "absolute",
                  visibility: "visible",
                  left: -r * v,
                  top: -o * y,
                })
                .parent()
                .addClass("ui-effects-explode")
                .css({
                  position: "absolute",
                  overflow: "hidden",
                  width: v,
                  height: y,
                  left: a + (m ? u * v : 0),
                  top: l + (m ? h * y : 0),
                  opacity: m ? 0 : 1,
                })
                .animate(
                  {
                    left: a + (m ? 0 : u * v),
                    top: l + (m ? 0 : h * y),
                    opacity: m ? 1 : 0,
                  },
                  e.duration || 500,
                  e.easing,
                  n
                );
      }),
      (t.effects.effect.fade = function (e, i) {
        var n = t(this),
          s = t.effects.setMode(n, e.mode || "toggle");
        n.animate(
          { opacity: s },
          { queue: !1, duration: e.duration, easing: e.easing, complete: i }
        );
      }),
      (t.effects.effect.fold = function (e, i) {
        var n,
          s,
          o = t(this),
          r = ["position", "top", "bottom", "left", "right", "height", "width"],
          a = t.effects.setMode(o, e.mode || "hide"),
          l = "show" === a,
          u = "hide" === a,
          h = e.size || 15,
          c = /([0-9]+)%/.exec(h),
          d = !!e.horizFirst,
          p = l !== d,
          f = p ? ["width", "height"] : ["height", "width"],
          m = e.duration / 2,
          g = {},
          v = {};
        t.effects.save(o, r),
          o.show(),
          (n = t.effects.createWrapper(o).css({ overflow: "hidden" })),
          (s = p ? [n.width(), n.height()] : [n.height(), n.width()]),
          c && (h = (parseInt(c[1], 10) / 100) * s[u ? 0 : 1]),
          l && n.css(d ? { height: 0, width: h } : { height: h, width: 0 }),
          (g[f[0]] = l ? s[0] : h),
          (v[f[1]] = l ? s[1] : 0),
          n.animate(g, m, e.easing).animate(v, m, e.easing, function () {
            u && o.hide(),
              t.effects.restore(o, r),
              t.effects.removeWrapper(o),
              i();
          });
      }),
      (t.effects.effect.highlight = function (e, i) {
        var n = t(this),
          s = ["backgroundImage", "backgroundColor", "opacity"],
          o = t.effects.setMode(n, e.mode || "show"),
          r = { backgroundColor: n.css("backgroundColor") };
        "hide" === o && (r.opacity = 0),
          t.effects.save(n, s),
          n
            .show()
            .css({
              backgroundImage: "none",
              backgroundColor: e.color || "#ffff99",
            })
            .animate(r, {
              queue: !1,
              duration: e.duration,
              easing: e.easing,
              complete: function () {
                "hide" === o && n.hide(), t.effects.restore(n, s), i();
              },
            });
      }),
      (t.effects.effect.size = function (e, i) {
        var n,
          s,
          o,
          r = t(this),
          a = [
            "position",
            "top",
            "bottom",
            "left",
            "right",
            "width",
            "height",
            "overflow",
            "opacity",
          ],
          l = [
            "position",
            "top",
            "bottom",
            "left",
            "right",
            "overflow",
            "opacity",
          ],
          u = ["width", "height", "overflow"],
          h = ["fontSize"],
          c = [
            "borderTopWidth",
            "borderBottomWidth",
            "paddingTop",
            "paddingBottom",
          ],
          d = [
            "borderLeftWidth",
            "borderRightWidth",
            "paddingLeft",
            "paddingRight",
          ],
          p = t.effects.setMode(r, e.mode || "effect"),
          f = e.restore || "effect" !== p,
          m = e.scale || "both",
          g = e.origin || ["middle", "center"],
          v = r.css("position"),
          y = f ? a : l,
          b = { height: 0, width: 0, outerHeight: 0, outerWidth: 0 };
        "show" === p && r.show(),
          (n = {
            height: r.height(),
            width: r.width(),
            outerHeight: r.outerHeight(),
            outerWidth: r.outerWidth(),
          }),
          "toggle" === e.mode && "show" === p
            ? ((r.from = e.to || b), (r.to = e.from || n))
            : ((r.from = e.from || ("show" === p ? b : n)),
              (r.to = e.to || ("hide" === p ? b : n))),
          (o = {
            from: { y: r.from.height / n.height, x: r.from.width / n.width },
            to: { y: r.to.height / n.height, x: r.to.width / n.width },
          }),
          ("box" === m || "both" === m) &&
            (o.from.y !== o.to.y &&
              ((y = y.concat(c)),
              (r.from = t.effects.setTransition(r, c, o.from.y, r.from)),
              (r.to = t.effects.setTransition(r, c, o.to.y, r.to))),
            o.from.x !== o.to.x &&
              ((y = y.concat(d)),
              (r.from = t.effects.setTransition(r, d, o.from.x, r.from)),
              (r.to = t.effects.setTransition(r, d, o.to.x, r.to)))),
          ("content" === m || "both" === m) &&
            o.from.y !== o.to.y &&
            ((y = y.concat(h).concat(u)),
            (r.from = t.effects.setTransition(r, h, o.from.y, r.from)),
            (r.to = t.effects.setTransition(r, h, o.to.y, r.to))),
          t.effects.save(r, y),
          r.show(),
          t.effects.createWrapper(r),
          r.css("overflow", "hidden").css(r.from),
          g &&
            ((s = t.effects.getBaseline(g, n)),
            (r.from.top = (n.outerHeight - r.outerHeight()) * s.y),
            (r.from.left = (n.outerWidth - r.outerWidth()) * s.x),
            (r.to.top = (n.outerHeight - r.to.outerHeight) * s.y),
            (r.to.left = (n.outerWidth - r.to.outerWidth) * s.x)),
          r.css(r.from),
          ("content" === m || "both" === m) &&
            ((c = c.concat(["marginTop", "marginBottom"]).concat(h)),
            (d = d.concat(["marginLeft", "marginRight"])),
            (u = a.concat(c).concat(d)),
            r.find("*[width]").each(function () {
              var i = t(this),
                n = {
                  height: i.height(),
                  width: i.width(),
                  outerHeight: i.outerHeight(),
                  outerWidth: i.outerWidth(),
                };
              f && t.effects.save(i, u),
                (i.from = {
                  height: n.height * o.from.y,
                  width: n.width * o.from.x,
                  outerHeight: n.outerHeight * o.from.y,
                  outerWidth: n.outerWidth * o.from.x,
                }),
                (i.to = {
                  height: n.height * o.to.y,
                  width: n.width * o.to.x,
                  outerHeight: n.height * o.to.y,
                  outerWidth: n.width * o.to.x,
                }),
                o.from.y !== o.to.y &&
                  ((i.from = t.effects.setTransition(i, c, o.from.y, i.from)),
                  (i.to = t.effects.setTransition(i, c, o.to.y, i.to))),
                o.from.x !== o.to.x &&
                  ((i.from = t.effects.setTransition(i, d, o.from.x, i.from)),
                  (i.to = t.effects.setTransition(i, d, o.to.x, i.to))),
                i.css(i.from),
                i.animate(i.to, e.duration, e.easing, function () {
                  f && t.effects.restore(i, u);
                });
            })),
          r.animate(r.to, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function () {
              0 === r.to.opacity && r.css("opacity", r.from.opacity),
                "hide" === p && r.hide(),
                t.effects.restore(r, y),
                f ||
                  ("static" === v
                    ? r.css({
                        position: "relative",
                        top: r.to.top,
                        left: r.to.left,
                      })
                    : t.each(["top", "left"], function (t, e) {
                        r.css(e, function (e, i) {
                          var n = parseInt(i, 10),
                            s = t ? r.to.left : r.to.top;
                          return "auto" === i ? s + "px" : n + s + "px";
                        });
                      })),
                t.effects.removeWrapper(r),
                i();
            },
          });
      }),
      (t.effects.effect.scale = function (e, i) {
        var n = t(this),
          s = t.extend(!0, {}, e),
          o = t.effects.setMode(n, e.mode || "effect"),
          r =
            parseInt(e.percent, 10) ||
            (0 === parseInt(e.percent, 10) ? 0 : "hide" === o ? 0 : 100),
          a = e.direction || "both",
          l = e.origin,
          u = {
            height: n.height(),
            width: n.width(),
            outerHeight: n.outerHeight(),
            outerWidth: n.outerWidth(),
          },
          h = {
            y: "horizontal" !== a ? r / 100 : 1,
            x: "vertical" !== a ? r / 100 : 1,
          };
        (s.effect = "size"),
          (s.queue = !1),
          (s.complete = i),
          "effect" !== o &&
            ((s.origin = l || ["middle", "center"]), (s.restore = !0)),
          (s.from =
            e.from ||
            ("show" === o
              ? { height: 0, width: 0, outerHeight: 0, outerWidth: 0 }
              : u)),
          (s.to = {
            height: u.height * h.y,
            width: u.width * h.x,
            outerHeight: u.outerHeight * h.y,
            outerWidth: u.outerWidth * h.x,
          }),
          s.fade &&
            ("show" === o && ((s.from.opacity = 0), (s.to.opacity = 1)),
            "hide" === o && ((s.from.opacity = 1), (s.to.opacity = 0))),
          n.effect(s);
      }),
      (t.effects.effect.puff = function (e, i) {
        var n = t(this),
          s = t.effects.setMode(n, e.mode || "hide"),
          o = "hide" === s,
          r = parseInt(e.percent, 10) || 150,
          a = r / 100,
          l = {
            height: n.height(),
            width: n.width(),
            outerHeight: n.outerHeight(),
            outerWidth: n.outerWidth(),
          };
        t.extend(e, {
          effect: "scale",
          queue: !1,
          fade: !0,
          mode: s,
          complete: i,
          percent: o ? r : 100,
          from: o
            ? l
            : {
                height: l.height * a,
                width: l.width * a,
                outerHeight: l.outerHeight * a,
                outerWidth: l.outerWidth * a,
              },
        }),
          n.effect(e);
      }),
      (t.effects.effect.pulsate = function (e, i) {
        var n,
          s = t(this),
          o = t.effects.setMode(s, e.mode || "show"),
          r = "show" === o,
          a = "hide" === o,
          l = r || "hide" === o,
          u = 2 * (e.times || 5) + (l ? 1 : 0),
          h = e.duration / u,
          c = 0,
          d = s.queue(),
          p = d.length;
        for (
          (r || !s.is(":visible")) && (s.css("opacity", 0).show(), (c = 1)),
            n = 1;
          u > n;
          n++
        )
          s.animate({ opacity: c }, h, e.easing), (c = 1 - c);
        s.animate({ opacity: c }, h, e.easing),
          s.queue(function () {
            a && s.hide(), i();
          }),
          p > 1 && d.splice.apply(d, [1, 0].concat(d.splice(p, u + 1))),
          s.dequeue();
      }),
      (t.effects.effect.shake = function (e, i) {
        var n,
          s = t(this),
          o = ["position", "top", "bottom", "left", "right", "height", "width"],
          r = t.effects.setMode(s, e.mode || "effect"),
          a = e.direction || "left",
          l = e.distance || 20,
          u = e.times || 3,
          h = 2 * u + 1,
          c = Math.round(e.duration / h),
          d = "up" === a || "down" === a ? "top" : "left",
          p = "up" === a || "left" === a,
          f = {},
          m = {},
          g = {},
          v = s.queue(),
          y = v.length;
        for (
          t.effects.save(s, o),
            s.show(),
            t.effects.createWrapper(s),
            f[d] = (p ? "-=" : "+=") + l,
            m[d] = (p ? "+=" : "-=") + 2 * l,
            g[d] = (p ? "-=" : "+=") + 2 * l,
            s.animate(f, c, e.easing),
            n = 1;
          u > n;
          n++
        )
          s.animate(m, c, e.easing).animate(g, c, e.easing);
        s
          .animate(m, c, e.easing)
          .animate(f, c / 2, e.easing)
          .queue(function () {
            "hide" === r && s.hide(),
              t.effects.restore(s, o),
              t.effects.removeWrapper(s),
              i();
          }),
          y > 1 && v.splice.apply(v, [1, 0].concat(v.splice(y, h + 1))),
          s.dequeue();
      }),
      (t.effects.effect.slide = function (e, i) {
        var n,
          s = t(this),
          o = ["position", "top", "bottom", "left", "right", "width", "height"],
          r = t.effects.setMode(s, e.mode || "show"),
          a = "show" === r,
          l = e.direction || "left",
          u = "up" === l || "down" === l ? "top" : "left",
          h = "up" === l || "left" === l,
          c = {};
        t.effects.save(s, o),
          s.show(),
          (n = e.distance || s["top" === u ? "outerHeight" : "outerWidth"](!0)),
          t.effects.createWrapper(s).css({ overflow: "hidden" }),
          a && s.css(u, h ? (isNaN(n) ? "-" + n : -n) : n),
          (c[u] = (a ? (h ? "+=" : "-=") : h ? "-=" : "+=") + n),
          s.animate(c, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function () {
              "hide" === r && s.hide(),
                t.effects.restore(s, o),
                t.effects.removeWrapper(s),
                i();
            },
          });
      }),
      (t.effects.effect.transfer = function (e, i) {
        var n = t(this),
          s = t(e.to),
          o = "fixed" === s.css("position"),
          r = t("body"),
          a = o ? r.scrollTop() : 0,
          l = o ? r.scrollLeft() : 0,
          u = s.offset(),
          h = {
            top: u.top - a,
            left: u.left - l,
            height: s.innerHeight(),
            width: s.innerWidth(),
          },
          c = n.offset(),
          d = t("<div class='ui-effects-transfer'></div>")
            .appendTo(document.body)
            .addClass(e.className)
            .css({
              top: c.top - a,
              left: c.left - l,
              height: n.innerHeight(),
              width: n.innerWidth(),
              position: o ? "fixed" : "absolute",
            })
            .animate(h, e.duration, e.easing, function () {
              d.remove(), i();
            });
      });
  }),
  (function (t, e) {
    function i(t, e, i) {
      var n = c[e.type] || {};
      return null == t
        ? i || !e.def
          ? null
          : e.def
        : ((t = n.floor ? ~~t : parseFloat(t)),
          isNaN(t)
            ? e.def
            : n.mod
            ? (t + n.mod) % n.mod
            : 0 > t
            ? 0
            : n.max < t
            ? n.max
            : t);
    }
    function n(e) {
      var i = u(),
        n = (i._rgba = []);
      return (
        (e = e.toLowerCase()),
        f(l, function (t, s) {
          var o,
            r = s.re.exec(e),
            a = r && s.parse(r),
            l = s.space || "rgba";
          return a
            ? ((o = i[l](a)),
              (i[h[l].cache] = o[h[l].cache]),
              (n = i._rgba = o._rgba),
              !1)
            : void 0;
        }),
        n.length
          ? ("0,0,0,0" === n.join() && t.extend(n, o.transparent), i)
          : o[e]
      );
    }
    function s(t, e, i) {
      return (
        (i = (i + 1) % 1),
        1 > 6 * i
          ? t + (e - t) * i * 6
          : 1 > 2 * i
          ? e
          : 2 > 3 * i
          ? t + (e - t) * (2 / 3 - i) * 6
          : t
      );
    }
    var o,
      r =
        "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
      a = /^([\-+])=\s*(\d+\.?\d*)/,
      l = [
        {
          re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
          parse: function (t) {
            return [t[1], t[2], t[3], t[4]];
          },
        },
        {
          re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
          parse: function (t) {
            return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]];
          },
        },
        {
          re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
          parse: function (t) {
            return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)];
          },
        },
        {
          re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
          parse: function (t) {
            return [
              parseInt(t[1] + t[1], 16),
              parseInt(t[2] + t[2], 16),
              parseInt(t[3] + t[3], 16),
            ];
          },
        },
        {
          re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
          space: "hsla",
          parse: function (t) {
            return [t[1], t[2] / 100, t[3] / 100, t[4]];
          },
        },
      ],
      u = (t.Color = function (e, i, n, s) {
        return new t.Color.fn.parse(e, i, n, s);
      }),
      h = {
        rgba: {
          props: {
            red: { idx: 0, type: "byte" },
            green: { idx: 1, type: "byte" },
            blue: { idx: 2, type: "byte" },
          },
        },
        hsla: {
          props: {
            hue: { idx: 0, type: "degrees" },
            saturation: { idx: 1, type: "percent" },
            lightness: { idx: 2, type: "percent" },
          },
        },
      },
      c = {
        byte: { floor: !0, max: 255 },
        percent: { max: 1 },
        degrees: { mod: 360, floor: !0 },
      },
      d = (u.support = {}),
      p = t("<p>")[0],
      f = t.each;
    (p.style.cssText = "background-color:rgba(1,1,1,.5)"),
      (d.rgba = p.style.backgroundColor.indexOf("rgba") > -1),
      f(h, function (t, e) {
        (e.cache = "_" + t),
          (e.props.alpha = { idx: 3, type: "percent", def: 1 });
      }),
      (u.fn = t.extend(u.prototype, {
        parse: function (s, r, a, l) {
          if (s === e) return (this._rgba = [null, null, null, null]), this;
          (s.jquery || s.nodeType) && ((s = t(s).css(r)), (r = e));
          var c = this,
            d = t.type(s),
            p = (this._rgba = []);
          return (
            r !== e && ((s = [s, r, a, l]), (d = "array")),
            "string" === d
              ? this.parse(n(s) || o._default)
              : "array" === d
              ? (f(h.rgba.props, function (t, e) {
                  p[e.idx] = i(s[e.idx], e);
                }),
                this)
              : "object" === d
              ? (s instanceof u
                  ? f(h, function (t, e) {
                      s[e.cache] && (c[e.cache] = s[e.cache].slice());
                    })
                  : f(h, function (e, n) {
                      var o = n.cache;
                      f(n.props, function (t, e) {
                        if (!c[o] && n.to) {
                          if ("alpha" === t || null == s[t]) return;
                          c[o] = n.to(c._rgba);
                        }
                        c[o][e.idx] = i(s[t], e, !0);
                      }),
                        c[o] &&
                          t.inArray(null, c[o].slice(0, 3)) < 0 &&
                          ((c[o][3] = 1), n.from && (c._rgba = n.from(c[o])));
                    }),
                this)
              : void 0
          );
        },
        is: function (t) {
          var e = u(t),
            i = !0,
            n = this;
          return (
            f(h, function (t, s) {
              var o,
                r = e[s.cache];
              return (
                r &&
                  ((o = n[s.cache] || (s.to && s.to(n._rgba)) || []),
                  f(s.props, function (t, e) {
                    return null != r[e.idx]
                      ? (i = r[e.idx] === o[e.idx])
                      : void 0;
                  })),
                i
              );
            }),
            i
          );
        },
        _space: function () {
          var t = [],
            e = this;
          return (
            f(h, function (i, n) {
              e[n.cache] && t.push(i);
            }),
            t.pop()
          );
        },
        transition: function (t, e) {
          var n = u(t),
            s = n._space(),
            o = h[s],
            r = 0 === this.alpha() ? u("transparent") : this,
            a = r[o.cache] || o.to(r._rgba),
            l = a.slice();
          return (
            (n = n[o.cache]),
            f(o.props, function (t, s) {
              var o = s.idx,
                r = a[o],
                u = n[o],
                h = c[s.type] || {};
              null !== u &&
                (null === r
                  ? (l[o] = u)
                  : (h.mod &&
                      (u - r > h.mod / 2
                        ? (r += h.mod)
                        : r - u > h.mod / 2 && (r -= h.mod)),
                    (l[o] = i((u - r) * e + r, s))));
            }),
            this[s](l)
          );
        },
        blend: function (e) {
          if (1 === this._rgba[3]) return this;
          var i = this._rgba.slice(),
            n = i.pop(),
            s = u(e)._rgba;
          return u(
            t.map(i, function (t, e) {
              return (1 - n) * s[e] + n * t;
            })
          );
        },
        toRgbaString: function () {
          var e = "rgba(",
            i = t.map(this._rgba, function (t, e) {
              return null == t ? (e > 2 ? 1 : 0) : t;
            });
          return 1 === i[3] && (i.pop(), (e = "rgb(")), e + i.join() + ")";
        },
        toHslaString: function () {
          var e = "hsla(",
            i = t.map(this.hsla(), function (t, e) {
              return (
                null == t && (t = e > 2 ? 1 : 0),
                e && 3 > e && (t = Math.round(100 * t) + "%"),
                t
              );
            });
          return 1 === i[3] && (i.pop(), (e = "hsl(")), e + i.join() + ")";
        },
        toHexString: function (e) {
          var i = this._rgba.slice(),
            n = i.pop();
          return (
            e && i.push(~~(255 * n)),
            "#" +
              t
                .map(i, function (t) {
                  return (
                    (t = (t || 0).toString(16)), 1 === t.length ? "0" + t : t
                  );
                })
                .join("")
          );
        },
        toString: function () {
          return 0 === this._rgba[3] ? "transparent" : this.toRgbaString();
        },
      })),
      (u.fn.parse.prototype = u.fn),
      (h.hsla.to = function (t) {
        if (null == t[0] || null == t[1] || null == t[2])
          return [null, null, null, t[3]];
        var e,
          i,
          n = t[0] / 255,
          s = t[1] / 255,
          o = t[2] / 255,
          r = t[3],
          a = Math.max(n, s, o),
          l = Math.min(n, s, o),
          u = a - l,
          h = a + l,
          c = 0.5 * h;
        return (
          (e =
            l === a
              ? 0
              : n === a
              ? (60 * (s - o)) / u + 360
              : s === a
              ? (60 * (o - n)) / u + 120
              : (60 * (n - s)) / u + 240),
          (i = 0 === u ? 0 : 0.5 >= c ? u / h : u / (2 - h)),
          [Math.round(e) % 360, i, c, null == r ? 1 : r]
        );
      }),
      (h.hsla.from = function (t) {
        if (null == t[0] || null == t[1] || null == t[2])
          return [null, null, null, t[3]];
        var e = t[0] / 360,
          i = t[1],
          n = t[2],
          o = t[3],
          r = 0.5 >= n ? n * (1 + i) : n + i - n * i,
          a = 2 * n - r;
        return [
          Math.round(255 * s(a, r, e + 1 / 3)),
          Math.round(255 * s(a, r, e)),
          Math.round(255 * s(a, r, e - 1 / 3)),
          o,
        ];
      }),
      f(h, function (n, s) {
        var o = s.props,
          r = s.cache,
          l = s.to,
          h = s.from;
        (u.fn[n] = function (n) {
          if ((l && !this[r] && (this[r] = l(this._rgba)), n === e))
            return this[r].slice();
          var s,
            a = t.type(n),
            c = "array" === a || "object" === a ? n : arguments,
            d = this[r].slice();
          return (
            f(o, function (t, e) {
              var n = c["object" === a ? t : e.idx];
              null == n && (n = d[e.idx]), (d[e.idx] = i(n, e));
            }),
            h ? ((s = u(h(d))), (s[r] = d), s) : u(d)
          );
        }),
          f(o, function (e, i) {
            u.fn[e] ||
              (u.fn[e] = function (s) {
                var o,
                  r = t.type(s),
                  l = "alpha" === e ? (this._hsla ? "hsla" : "rgba") : n,
                  u = this[l](),
                  h = u[i.idx];
                return "undefined" === r
                  ? h
                  : ("function" === r &&
                      ((s = s.call(this, h)), (r = t.type(s))),
                    null == s && i.empty
                      ? this
                      : ("string" === r &&
                          ((o = a.exec(s)),
                          o &&
                            (s =
                              h + parseFloat(o[2]) * ("+" === o[1] ? 1 : -1))),
                        (u[i.idx] = s),
                        this[l](u)));
              });
          });
      }),
      (u.hook = function (e) {
        var i = e.split(" ");
        f(i, function (e, i) {
          (t.cssHooks[i] = {
            set: function (e, s) {
              var o,
                r,
                a = "";
              if (
                "transparent" !== s &&
                ("string" !== t.type(s) || (o = n(s)))
              ) {
                if (((s = u(o || s)), !d.rgba && 1 !== s._rgba[3])) {
                  for (
                    r = "backgroundColor" === i ? e.parentNode : e;
                    ("" === a || "transparent" === a) && r && r.style;

                  )
                    try {
                      (a = t.css(r, "backgroundColor")), (r = r.parentNode);
                    } catch (l) {}
                  s = s.blend(a && "transparent" !== a ? a : "_default");
                }
                s = s.toRgbaString();
              }
              try {
                e.style[i] = s;
              } catch (l) {}
            },
          }),
            (t.fx.step[i] = function (e) {
              e.colorInit ||
                ((e.start = u(e.elem, i)),
                (e.end = u(e.end)),
                (e.colorInit = !0)),
                t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos));
            });
        });
      }),
      u.hook(r),
      (t.cssHooks.borderColor = {
        expand: function (t) {
          var e = {};
          return (
            f(["Top", "Right", "Bottom", "Left"], function (i, n) {
              e["border" + n + "Color"] = t;
            }),
            e
          );
        },
      }),
      (o = t.Color.names =
        {
          aqua: "#00ffff",
          black: "#000000",
          blue: "#0000ff",
          fuchsia: "#ff00ff",
          gray: "#808080",
          green: "#008000",
          lime: "#00ff00",
          maroon: "#800000",
          navy: "#000080",
          olive: "#808000",
          purple: "#800080",
          red: "#ff0000",
          silver: "#c0c0c0",
          teal: "#008080",
          white: "#ffffff",
          yellow: "#ffff00",
          transparent: [null, null, null, 0],
          _default: "#ffffff",
        });
  })(jQuery),
  (function (t) {
    "use strict";
    t.fn.extend({
      customSelect: function (e) {
        if ("undefined" == typeof document.body.style.maxHeight) return this;
        var i = { customClass: "customSelect", mapClass: !0, mapStyle: !0 },
          e = t.extend(i, e),
          n = e.customClass,
          s = function (e, i) {
            var n = e.find(":selected"),
              s = i.children(":first"),
              r = n.html() || "&nbsp;";
            s.html(r),
              n.attr("disabled")
                ? i.addClass(o("DisabledOption"))
                : i.removeClass(o("DisabledOption")),
              setTimeout(function () {
                i.removeClass(o("Open")),
                  t(document).off("mouseup.customSelect");
              }, 60);
          },
          o = function (t) {
            return n + t;
          };
        return this.each(function () {
          var i = t(this),
            r = t("<span />").addClass(o("Inner")),
            a = t("<span />");
          i.after(a.append(r)),
            a.addClass(n),
            e.mapClass && a.addClass(i.attr("class")),
            e.mapStyle && a.attr("style", i.attr("style")),
            i
              .addClass("hasCustomSelect")
              .on("render.customSelect", function () {
                s(i, a), i.css("width", "");
                var t =
                  parseInt(i.outerWidth(), 10) -
                  (parseInt(a.outerWidth(), 10) - parseInt(a.width(), 10));
                a.css({ display: "inline-block" });
                var e = a.outerHeight();
                i.attr("disabled")
                  ? a.addClass(o("Disabled"))
                  : a.removeClass(o("Disabled")),
                  r.css({ width: t, display: "inline-block" }),
                  i.css({
                    "-webkit-appearance": "menulist-button",
                    width: a.outerWidth(),
                    position: "absolute",
                    opacity: 0,
                    height: e,
                    fontSize: a.css("font-size"),
                  });
              })
              .on("change.customSelect", function () {
                a.addClass(o("Changed")), s(i, a);
              })
              .on("keyup.customSelect", function (t) {
                a.hasClass(o("Open"))
                  ? (13 == t.which || 27 == t.which) && s(i, a)
                  : (i.trigger("blur.customSelect"),
                    i.trigger("focus.customSelect"));
              })
              .on("mousedown.customSelect", function () {
                a.removeClass(o("Changed"));
              })
              .on("mouseup.customSelect", function (e) {
                a.hasClass(o("Open")) ||
                  (t("." + o("Open")).not(a).length > 0 &&
                  "undefined" != typeof InstallTrigger
                    ? i.trigger("focus.customSelect")
                    : (a.addClass(o("Open")),
                      e.stopPropagation(),
                      t(document).one("mouseup.customSelect", function (e) {
                        e.target != i.get(0) &&
                        t.inArray(e.target, i.find("*").get()) < 0
                          ? i.trigger("blur.customSelect")
                          : s(i, a);
                      })));
              })
              .on("focus.customSelect", function () {
                a.removeClass(o("Changed")).addClass(o("Focus"));
              })
              .on("blur.customSelect", function () {
                a.removeClass(o("Focus") + " " + o("Open"));
              })
              .on("mouseenter.customSelect", function () {
                a.addClass(o("Hover"));
              })
              .on("mouseleave.customSelect", function () {
                a.removeClass(o("Hover"));
              })
              .trigger("render.customSelect");
        });
      },
    });
  })(jQuery);
var bp = { xsmall: 479, small: 599, medium: 770, large: 979, xlarge: 1199 };
// (Varien.searchForm.prototype.initialize = function (t, e, i) {
//   (this.form = $(t)),
//     (this.field = $(e)),
//     (this.emptyText = i),
//     (this.validator = new Validation(this.form)),
//     Event.observe(this.form, "submit", this.submit.bind(this)),
//     Event.observe(this.field, "focus", this.focus.bind(this)),
//     Event.observe(this.field, "blur", this.blur.bind(this)),
//     this.blur();
// }),
//   (Varien.searchForm.prototype.submit = function (t) {
//     return this.validator && this.validator.validate()
//       ? !0
//       : (Event.stop(t), !1);
//   });
var $j = jQuery.noConflict();
$j(document).ready(function () {
  var t = ($j(window), $j(document), $j("body"), $j(".skip-content")),
    e = $j(".skip-link");
  e.on("click", function (i) {
    i.preventDefault();
    var n = $j(this),
      s = n.attr("href"),
      o = $j(s),
      r = o.hasClass("skip-active") ? 1 : 0;
    e.removeClass("skip-active"),
      t.removeClass("skip-active"),
      r
        ? n.removeClass("skip-active")
        : (n.addClass("skip-active"), o.addClass("skip-active"));
  }),
    $j("#header-cart").on("click", ".skip-link-close", function (t) {
      var e = $j(this).parents(".skip-content"),
        i = e.siblings(".skip-link");
      e.removeClass("skip-active"),
        i.removeClass("skip-active"),
        t.preventDefault();
    });
  var i = $j("#nav"),
    n = {
      TOUCH_SCROLL_THRESHOLD: 20,
      touchStartPosition: null,
      shouldCancelTouch: function () {
        if (!this.touchStartPosition) return !1;
        var t = $j(window).scrollTop() - this.touchStartPosition;
        return Math.abs(t) > this.TOUCH_SCROLL_THRESHOLD;
      },
    },
    s = "touchend";
  window.navigator.pointerEnabled
    ? (s = "pointerdown")
    : window.navigator.msPointerEnabled && (s = "MSPointerDown"),
    i
      .find("a.has-children.level0")
      .on(s, function (t) {
        if (!n.shouldCancelTouch()) {
          if (
            window.navigator.msPointerEnabled &&
            "mouse" == t.originalEvent.pointerType &&
            Modernizr.mq("screen and (min-width:" + (bp.medium + 1) + "px)")
          )
            return void $j(this).data("has-touch", !1);
          $j(this).data("has-touch", !0);
          var e = $j(this).parent(),
            s = e.hasClass("menu-active");
          i.find("li.level0").removeClass("menu-active"),
            i.find(".sub-menu-active").removeClass("sub-menu-active"),
            s || e.addClass("menu-active"),
            t.preventDefault();
        }
      })
      .on("click", function (t) {
        var e = $j(this);
        if (e.data("has-touch"))
          return e.data("has-touch", !1), void t.preventDefault();
        if (Modernizr.mq("screen and (max-width:" + bp.medium + "px)")) {
          var e = $j(this).parent(),
            n = e.hasClass("menu-active");
          i.find("li.level0").removeClass("menu-active"),
            i.find(".sub-menu-active").removeClass("sub-menu-active"),
            n || e.addClass("menu-active"),
            t.preventDefault();
        }
      })
      .on("touchstart", function () {
        $j(this).data("has-touch"),
          (n.touchStartPosition = $j(window).scrollTop());
      }),
    enquire.register("(max-width: " + bp.medium + "px)", {
      match: function () {
        $j(".page-header-container .store-language-container").prepend(
          $j(".form-language")
        );
      },
      unmatch: function () {
        $j(".header-language-container .store-language-container").prepend(
          $j(".form-language")
        );
      },
    }),
    enquire.register("screen and (min-width: " + (bp.medium + 1) + "px)", {
      match: function () {
        $j(".menu-active").removeClass("menu-active"),
          $j(".sub-menu-active").removeClass("sub-menu-active"),
          $j(".skip-active").removeClass("skip-active");
      },
      unmatch: function () {
        $j(".menu-active").removeClass("menu-active"),
          $j(".sub-menu-active").removeClass("sub-menu-active"),
          $j(".skip-active").removeClass("skip-active");
      },
    });
  var o = $j(".media-list").find("a"),
    r = $j(".primary-image").find("img");
  if (
    (o.length &&
      o.on("click", function (t) {
        t.preventDefault();
        var e = $j(this);
        r.attr("src", e.attr("href"));
      }),
    (jQuery.fn.toggleSingle = function (t) {
      var e = $j.extend({ destruct: !1 }, t);
      return this.each(function () {
        e.destruct
          ? ($j(this).off("click"),
            $j(this).removeClass("active").next().removeClass("no-display"))
          : ($j(this).on("click", function () {
              $j(this).toggleClass("active").next().toggleClass("no-display");
            }),
            $j(this).next().addClass("no-display"));
      });
    }),
    $j(".toggle-content").each(function () {
      function t(t, e) {
        var i,
          n = e.index(t);
        for (i = 0; i < a.length; i++)
          a[i].removeClass("current"), a[i].eq(n).addClass("current");
      }
      var e = jQuery(this),
        i = e.hasClass("tabs"),
        n = (e.hasClass("accordion"), e.hasClass("open")),
        s = e.children("dl:first"),
        o = s.children("dt"),
        r = s.children("dd"),
        a = new Array(o, r);
      if (i) {
        var l = jQuery('<ul class="toggle-tabs"></ul>');
        o.each(function () {
          var t = jQuery(this),
            e = jQuery("<li></li>");
          e.html(t.html()), l.append(e);
        }),
          l.insertBefore(s);
        var u = l.children();
        a.push(u);
      }
      var h;
      for (h = 0; h < a.length; h++) a[h].filter(":last").addClass("last");
      o.on("click", function () {
        jQuery(this).hasClass("current") && e.hasClass("accordion-open")
          ? e.removeClass("accordion-open")
          : e.addClass("accordion-open"),
          t(jQuery(this), o);
      }),
        i &&
          (u.on("click", function () {
            t(jQuery(this), u);
          }),
          u.eq(0).trigger("click")),
        n && o.eq(0).trigger("click");
    }),
    $j(".col-left-first > .block").length &&
      $j(".category-products").length &&
      enquire.register("screen and (max-width: " + bp.medium + "px)", {
        match: function () {
          $j(".col-left-first").insertBefore($j(".category-products"));
        },
        unmatch: function () {
          $j(".col-left-first").insertBefore($j(".col-main"));
        },
      }),
    $j(".main-container.col3-layout").length > 0 &&
      enquire.register("screen and (max-width: 1000px)", {
        match: function () {
          var t = $j(".col-right"),
            e = $j(".col-wrapper");
          t.appendTo(e);
        },
        unmatch: function () {
          var t = $j(".col-right"),
            e = $j(".main");
          t.appendTo(e);
        },
      }),
    enquire.register("(max-width: " + bp.medium + "px)", {
      setup: function () {
        this.toggleElements = $j(
          ".col-left-first .block:not(.block-layered-nav) .block-title, .col-left-first .block-layered-nav .block-subtitle--filter, .sidebar:not(.col-left-first) .block .block-title"
        );
      },
      match: function () {
        this.toggleElements.toggleSingle();
      },
      unmatch: function () {
        this.toggleElements.toggleSingle({ destruct: !0 });
      },
    }),
    $j("body.checkout-onepage-index").length &&
      enquire.register("(max-width: " + bp.large + "px)", {
        match: function () {
          $j("#checkout-step-review").prepend($j("#checkout-progress-wrapper"));
        },
        unmatch: function () {
          $j(".col-right").prepend($j("#checkout-progress-wrapper"));
        },
      }),
    $j("body.checkout-cart-index").length &&
      $j('input[name^="cart"]').focus(function () {
        $j(this).siblings("button").fadeIn();
      }),
    $j(".products-grid").length)
  ) {
    var a = function () {
      var t = [],
        e = [];
      (productGridElements = $j(".products-grid > li")),
        productGridElements.each(function (i) {
          "none" != $j(this).css("clear") && 0 != i && (t.push(e), (e = [])),
            e.push(this),
            productGridElements.length == i + 1 && t.push(e);
        }),
        $j.each(t, function () {
          var t = 0;
          $j.each(this, function () {
            $j(this).find(".product-info").css("min-height", ""),
              (elHeight = parseInt(
                $j(this).find(".product-info").css("height")
              )),
              elHeight > t && (t = elHeight);
          }),
            $j.each(this, function () {
              $j(this).find(".product-info").css("minHeight", t);
            });
        });
    };
    a(),
      $j(window).on("delayed-resize", function () {
        a();
      });
  }
  var l;
  $j(window).resize(function (t) {
    clearTimeout(l),
      (l = setTimeout(function () {
        $j(window).trigger("delayed-resize", t);
      }, 250));
  });
});
var ProductMediaManager = {
  IMAGE_ZOOM_THRESHOLD: 20,
  zoomEnabled: Modernizr.mq("screen and (min-width:768px)"),
  imageWrapper: null,
  destroyZoom: function () {
    $j(".zoomContainer").remove(),
      $j(".product-image-gallery .gallery-image").removeData("elevateZoom");
  },
  createZoom: function (t) {
    if (
      (ProductMediaManager.destroyZoom(),
      ProductMediaManager.zoomEnabled && !(t.length <= 0))
    ) {
      if (t[0].naturalWidth && t[0].naturalHeight) {
        var e =
            t[0].naturalWidth -
            t.width() -
            ProductMediaManager.IMAGE_ZOOM_THRESHOLD,
          i =
            t[0].naturalHeight -
            t.height() -
            ProductMediaManager.IMAGE_ZOOM_THRESHOLD;
        if (0 > e && 0 > i)
          return void t.parents(".product-image").removeClass("zoom-available");
        t.parents(".product-image").addClass("zoom-available");
      }
      t.elevateZoom();
    }
  },
  toggleZoomBox: function (t) {
    var e = $j(".zoomContainer");
    t.hasClass("show-zoom") ? e.show() : e.hide();
  },
  swapImage: function (t) {
    (t = $j(t)), t.addClass("gallery-image"), ProductMediaManager.destroyZoom();
    var e = $j(".product-image-gallery");
    t[0].complete
      ? (e.find(".gallery-image").removeClass("visible"),
        e.append(t),
        t.addClass("visible"),
        ProductMediaManager.createZoom(t))
      : (e.addClass("loading"),
        e.append(t),
        imagesLoaded(t, function () {
          e.removeClass("loading"),
            e.find(".gallery-image").removeClass("visible"),
            t.addClass("visible"),
            ProductMediaManager.createZoom(t);
        }));
  },
  zoomHint: function () {
    var t = '<div class="zoom-hint">Click to Zoom</div>',
      e = $j(".product-image-zoom"),
      i = 55,
      n = 155;
    e.append(t);
    var s = $j(".zoom-hint");
    e.hover(
      function (t) {
        var o = e.position();
        s.css("top", t.pageY - o.top - n + "px")
          .css("left", t.pageX - o.left - i + "px")
          .fadeIn("fast");
      },
      function () {
        s.fadeOut("fast");
      }
    ).mousemove(function (t) {
      var o = e.position();
      s.css("top", t.pageY - o.top - n + "px").css(
        "left",
        t.pageX - o.left - i + "px"
      );
    });
  },
  wireThumbnails: function () {
    $j(".product-image-thumbs .thumb-link").click(function (t) {
      t.preventDefault();
      var e = $j(this),
        i = $j("#image-" + e.data("image-index"));
      ProductMediaManager.swapImage(i);
    });
  },
  initZoom: function () {
    ProductMediaManager.createZoom($j(".gallery-image.visible")),
      ProductMediaManager.zoomHint();
  },
  init: function () {
    (ProductMediaManager.imageWrapper = $j(".product-img-box")),
      enquire.register("screen and (min-width:768px)", {
        match: function () {
          (ProductMediaManager.zoomEnabled = !0),
            ProductMediaManager.initZoom();
        },
        unmatch: function () {
          ProductMediaManager.destroyZoom(),
            (ProductMediaManager.zoomEnabled = !1);
        },
      }),
      $j(window).on("delayed-resize", function () {
        ProductMediaManager.destroyZoom(), ProductMediaManager.initZoom();
      }),
      ProductMediaManager.wireThumbnails(),
      $j(document).trigger("product-media-loaded", ProductMediaManager);
  },
};
$j(document).ready(function () {
  $j(".gallery-image").click(function () {
    $j(".gallery-image").not(".visible").removeClass("show-zoom");
    var t = $j(".gallery-image.visible");
    t.toggleClass("show-zoom"), ProductMediaManager.toggleZoomBox(t);
  }),
    ProductMediaManager.init();
}),
  function () {
    var t, e;
    if (
      ((t = {
        init: function () {
          return (
            "undefined" != typeof checkout &&
              null !== checkout &&
              checkout.gotoSection("cart"),
            "undefined" == typeof isUserLoggedIn ||
              null === isUserLoggedIn ||
              isUserLoggedIn ||
              jQuery(".skip-link.skip-account")
                .off()
                .on("click", function (t) {
                  return (
                    t.preventDefault(),
                    jQuery("#overlay, #modal-login-register").fadeIn("slow"),
                    !1
                  );
                }),
            t.Modal.init("#modal-login-register"),
            t.Header.init(),
            t.Tracking.init(),
            t.Search.init(),
            t.Capsule.init()
          );
        },
      }),
      null != window.App)
    )
      for (e in window.App) t[e] = window.App[e];
    (window.App = t),
      jQuery(function () {
        return (
          t.init(),
          jQuery("div.footer ul li h5.mobile").on("click", function (t) {
            return (
              t.preventDefault(),
              jQuery(this).parent().next().slideToggle("fast")
            );
          }),
          jQuery("body").is(".cms-index-index")
            ? jQuery(".flex-zone")
                .find("a.arrow")
                .on("click", function (t) {
                  var e, i, n, s;
                  return (
                    t.preventDefault(),
                    (i = jQuery(this).parent()),
                    (s = i.find("ul.boutiques-list")),
                    (e = s.find("li:first")),
                    (n = s.find("li:last")),
                    s.find("li").finish().css("marginLeft", 0),
                    jQuery(this).is(".arrow-prev")
                      ? (n
                          .css("marginLeft", "-" + n.width() + "px")
                          .prependTo(n.parent()),
                        n.animate({ marginLeft: 0 }, "fast"))
                      : e.animate(
                          { marginLeft: "-" + e.width() + "px" },
                          "fast",
                          function () {
                            return jQuery(this)
                              .css("marginLeft", 0)
                              .appendTo(jQuery(this).parent());
                          }
                        ),
                    !1
                  );
                })
            : void 0
        );
      });
  }.call(this),
  function () {
    var t;
    (window.App = window.App || {}),
      (window.App.Modal = window.App.Modal || {}),
      (t = {
        _showError: function (t) {
          return (
            jQuery(t).addClass("error").focus(),
            setTimeout(function () {
              return jQuery(t).removeClass("error");
            }, 1e3)
          );
        },
        setData: function (e) {
          return (t.boutique = e), t;
        },
        _getModal: function () {
          var e, i, n;
          return (
            null == t.$modal &&
              ((i = jQuery("#template-modal-boutique").html()),
              (n = Handlebars.compile(i)),
              (e = n(t.boutique)),
              (t.$modal = jQuery(e)),
              t.$modal.find(".btn-close").on("click", function (e) {
                return e.preventDefault(), t.hide(), !1;
              })),
            t.$modal
          );
        },
        show: function () {
          var e;
          return (
            (e = t._getModal()),
            jQuery.contains(document.documentElement, e.get(0)) && e.detach(),
            e.hide().appendTo("body"),
            e.fadeIn("fast"),
            jQuery("body").addClass("unscrollable"),
            App.Tracking.pushPage(
              "/virtual/modal/boutique/" + t.boutique.url_key
            )
          );
        },
        hide: function () {
          var e;
          return (
            (e = t._getModal()),
            e.fadeOut("fast"),
            jQuery("body").removeClass("unscrollable")
          );
        },
      }),
      (App.Modal.Boutique = t),
      (App.Boutique = t);
  }.call(this),
  function () {
    var t;
    (window.App = window.App || {}),
      (t = {
        init: function () {
          var t;
          return (
            (t = jQuery("div.showcase ul.products")),
            jQuery("body").is(".boutique-capsule-single")
              ? jQuery("div.showcase div.model .bullets li a").on(
                  "click",
                  function (e) {
                    var i;
                    return (
                      e.preventDefault(),
                      jQuery(this).is(".active")
                        ? !1
                        : (jQuery(this)
                            .parent()
                            .parent()
                            .find("a")
                            .removeClass("active"),
                          jQuery(this).addClass("active"),
                          (i = jQuery(this).parent().index()),
                          t.fadeTo("fast", 0.001, function () {
                            return (
                              t.find(">li").hide(),
                              t.find(">li:eq(" + i + ")").show(),
                              t.fadeTo("fast", 1)
                            );
                          }),
                          !1)
                    );
                  }
                )
              : void 0
          );
        },
      }),
      (App.Capsule = t);
  }.call(this),
  function () {
    var t;
    (window.App = window.App || {}),
      (t = {
        cart: {},
        config: { endpoint: "/ajax/cart/" },
        closeCartTimeout: null,
        showNewCart: function (e) {
          var i, n, s;
          return (
            null == e && (e = t.cart),
            (n = jQuery("#template-modal-cart").html()),
            (s = Handlebars.compile(n)),
            (e = s(e)),
            (i = jQuery(e)),
            jQuery("#header-cart").html(i)
          );
        },
        init: function (e) {
          return (
            null != e && (t.cart = e),
            t.updateCart(),
            jQuery(".links a.skip-link.skip-cart").on("click", function (e) {
              return e.preventDefault(), t.updateCart(), !1;
            }),
            jQuery("#header-cart-opener, .cart-toggle").on(
              "click",
              (function (e) {
                return function (i) {
                  var n;
                  return (
                    (n = !1),
                    i.stopPropagation(),
                    null == t.cart || null == t.cart.items
                      ? (App.Loading.load(null, 0.2),
                        i.preventDefault(),
                        i.stopPropagation(),
                        t.hide(),
                        (n = !0))
                      : t.show(),
                    jQuery.get(e.config.endpoint + "cart?v=3", function (i, s) {
                      return "success" === s &&
                        ((e.cart = i.response.cart),
                        e.updateCart(),
                        App.Loading.unload(),
                        n)
                        ? t.show()
                        : void 0;
                    })
                  );
                };
              })(this)
            ),
            jQuery("#header-cart").on("click", function () {
              return clearTimeout(t.closeCartTimeout);
            }),
            t.initProductPageHook()
          );
        },
        initProductPageHook: function () {
          var e, i, n, s, o, r, a, l, u, h, c;
          return (
            (l = jQuery(".product-infos")),
            (e = l.find(".btn-add-to-cart")),
            l.find("a.boutique, div.shipping a").on("click", function (t) {
              var e;
              return (
                t.preventDefault(),
                (e = jQuery.parseJSON(
                  jQuery("div.product-view").attr("data-boutique-data")
                )),
                App.Boutique.setData(e).show()
              );
            }),
            l.find(".product-description > .tab .tab-text").slideUp(0),
            l.find(".product-description > .tab:first .tab-text").slideDown(0),
            l
              .find(".product-description > .tab .tab-title")
              .on("click", function (t) {
                var e, i;
                return (
                  t.preventDefault(),
                  (i = jQuery(this).parent().parent().find(">.tab")),
                  (e = jQuery(this).parent()),
                  i.not(e).find(".tab-text").slideUp("fast"),
                  e.find(".tab-text").slideDown("fast")
                );
              }),
            l.find("div.options div.option").length > 0 &&
              !e.is(".waitlist") &&
              e.text(e.attr("data-text-picksize")).addClass("disabled"),
            l
              .find("div.options div.option a.btn-value")
              .on("click", function (t) {
                var i, n;
                return (
                  t.preventDefault(),
                  (i = jQuery(this).parent()),
                  (n = jQuery(this)),
                  i.find("a").removeClass("active"),
                  n.addClass("active"),
                  e.removeClass("disabled"),
                  n.is(".disabled")
                    ? e.addClass("waitlist").text(e.attr("data-text-waitlist"))
                    : e.removeClass("waitlist").text(e.attr("data-text-add"))
                );
              }),
            (n = l.find(".error-message .text")),
            e.on("click", function (e) {
              var i, s;
              return (
                e.preventDefault(),
                n.slideUp("fast"),
                (i = jQuery(
                  '#product_addtocart_form input[name="product"]'
                ).val()),
                (s = {}),
                l.find("div.options div.option").each(function () {
                  var t;
                  return (
                    (t = jQuery(this).find("a.active")),
                    t.length > 0
                      ? (s[jQuery(this).attr("data-attribute-id")] =
                          t.attr("data-value-id"))
                      : void 0
                  );
                }),
                jQuery(this).is(".waitlist")
                  ? void 0
                  : jQuery(this).is(".disabled")
                  ? n.text("Please pick a size").slideDown("fast")
                  : t.add(i, s, 1, function (t) {
                      return null != t && null != t.error
                        ? n.text(t.error).slideDown("fast")
                        : void 0;
                    })
              );
            }),
            jQuery(".btn-cart").click(function () {
              var e, i, n, s, o, r, a;
              for (
                i = jQuery("#product_addtocart_form").serializeArray(),
                  r = 0,
                  a = i.length;
                a > r;
                r++
              )
                (e = i[r]),
                  "product" === e.name
                    ? (s = e.value)
                    : e.name.indexOf("super_attribute") > -1 &&
                      ((o = {}),
                      (n = i[3].name.split("[")[1].split("]")[0]),
                      (o[n] = e.value));
              return t.add(s, o, 1, function (t) {
                return null != t.error
                  ? jQuery(".add-to-cart-error-message")
                      .addClass("messages error")
                      .text(t.error)
                  : void 0;
              });
            }),
            (r = jQuery(".product-gallery")),
            r.find(".bullet-points .bullets li a").on("click", function (t) {
              var e;
              return (
                t.preventDefault(),
                (e = jQuery(this).parent().index()),
                jQuery(this)
                  .parent()
                  .parent()
                  .find(".active")
                  .removeClass("active"),
                jQuery(this).addClass("active"),
                r.find(".gallery-holder").css("margin-left", -90 * e + "vw")
              );
            }),
            (u = jQuery(".product-upsell")),
            u.find(".bullets li a").on("click", function (t) {
              var e;
              return (
                t.preventDefault(),
                (e = jQuery(this).parent().index()),
                jQuery(this)
                  .parent()
                  .parent()
                  .find(".active")
                  .removeClass("active"),
                jQuery(this).addClass("active"),
                u.find(".upsell-list").css("margin-left", -90 * e + "vw")
              );
            }),
            (c = { x: null, y: null }),
            l.find(".options .option").on("touchstart", function (t) {
              return (
                (c.x = t.originalEvent.touches[0].clientX),
                (c.y = t.originalEvent.touches[0].clientY),
                !0
              );
            }),
            l.find(".options .option").on("touchmove", function (t) {
              var e, i, n, s, o, r, a, l, u;
              return null == c.x || null == c.y
                ? !0
                : ((r = t.originalEvent.touches[0].clientX),
                  (l = t.originalEvent.touches[0].clientY),
                  (a = r - c.x),
                  (u = l - c.y),
                  Math.abs(u) > Math.abs(a)
                    ? !0
                    : ((o = 70),
                      Math.abs(a) < o
                        ? !0
                        : ((i = jQuery(this)),
                          (n = 0),
                          i.find("a.current-touch").length > 0 &&
                            (n = i.find("a.current-touch").index()),
                          a > 0 ? n-- : n++,
                          n >= 0 &&
                            n < i.find("a").length &&
                            ((e = i.find("a").eq(n)),
                            (s =
                              e.position().left -
                              1 *
                                ("" + i.css("margin-left"))
                                  .split("px")
                                  .join("")),
                            (i.find("a:last").position().left +
                              1.5 * i.find("a:last").outerWidth() >
                              i.parent().width() ||
                              e.position().left < 0) &&
                              (i.find("a").removeClass("current-touch"),
                              i.css("margin-left", -s + "px"),
                              e.addClass("current-touch")),
                            (c.x = null),
                            (c.y = null)),
                          !0)));
            }),
            r.find(".gallery-holder li").on("touchstart", function (t) {
              return (
                (c.x = t.originalEvent.touches[0].clientX),
                (c.y = t.originalEvent.touches[0].clientY),
                !0
              );
            }),
            r.find(".gallery-holder li").on("touchmove", function (t) {
              var e, i, n, s, o, a, l;
              return null == c.x || null == c.y
                ? !0
                : ((s = t.originalEvent.touches[0].clientX),
                  (a = t.originalEvent.touches[0].clientY),
                  (o = s - c.x),
                  (l = a - c.y),
                  Math.abs(l) > Math.abs(o)
                    ? !0
                    : ((n = 70),
                      Math.abs(o) < n
                        ? void 0
                        : ((e = r.find(".bullet-points .bullets li")),
                          (i = e.find("a.active").parent().index()),
                          o > 0 ? i-- : i++,
                          i >= 0 &&
                            i < e.length &&
                            (e.eq(i).find("a").trigger("click"),
                            (c.x = null),
                            (c.y = null)),
                          !0)));
            }),
            u.find(".upsell-list li").on("touchstart", function (t) {
              return (
                (c.x = t.originalEvent.touches[0].clientX),
                (c.y = t.originalEvent.touches[0].clientY),
                !0
              );
            }),
            u.find(".upsell-list li").on("touchmove", function (t) {
              var e, i, n, s, o, r, a;
              return null == c.x || null == c.y
                ? !0
                : ((s = t.originalEvent.touches[0].clientX),
                  (r = t.originalEvent.touches[0].clientY),
                  (o = s - c.x),
                  (a = r - c.y),
                  Math.abs(a) > Math.abs(o)
                    ? !0
                    : ((n = 70),
                      Math.abs(o) < n
                        ? void 0
                        : ((e = u.find(".bullets li")),
                          (i = e.find("a.active").parent().index()),
                          o > 0 ? i-- : i++,
                          i >= 0 &&
                            i < e.length &&
                            (e.eq(i).find("a").trigger("click"),
                            (c.x = null),
                            (c.y = null)),
                          !0)));
            }),
            (o = jQuery("div.footer")),
            (a = jQuery("#header")),
            (s = jQuery(".product-essential")),
            (i = l.find(".product-description")),
            (h = jQuery(window)),
            jQuery("body").is(".catalog-product-view")
              ? (jQuery(window).on("scroll", function () {
                  var t, e, n, o;
                  return (
                    (e = h.scrollTop()),
                    (t =
                      s.offset().top +
                      s.outerHeight() -
                      l.outerHeight() -
                      a.outerHeight() -
                      52),
                    (n = l.parent().offset().top),
                    l.outerHeight() > 0.8 * h.height() - a.outerHeight() &&
                      ((n -= (e / t) * l.outerHeight()),
                      (o = i.position().top + i.height() - a.height()),
                      (o = a.height() + 52),
                      o > n && (n = o)),
                    e > t && (n -= Math.ceil(e - t)),
                    l.css("position", "fixed").css("top", n + "px"),
                    !0
                  );
                }),
                jQuery(window).scroll(),
                jQuery(window).on("resize", function () {
                  return jQuery(window).scroll(), !0;
                }))
              : void 0
          );
        },
        show: function () {
          return (
            t.updateCart(),
            clearTimeout(t.closeCartTimeout),
            jQuery("#header-cart .modal-cart").finish().show(),
            jQuery("#header-cart").addClass("open"),
            jQuery("body").addClass("has-overlay"),
            App.Tracking.pushPage("/virtual/cart"),
            App.Tracking.trackTwitterEvent("l4u0m")
          );
        },
        hide: function () {
          var e;
          return (
            clearTimeout(t.closeCartTimeout),
            (e = jQuery("#header-cart .modal-cart")),
            setTimeout(function () {
              return e.hide();
            }, 700),
            jQuery("#header-cart").removeClass("open"),
            jQuery("body").removeClass("has-overlay")
          );
        },
        _post: function (t, e, i) {
          return (
            null == i && (i = function () {}),
            jQuery.ajax({
              type: "POST",
              url: t,
              data: e,
              success: function (t) {
                return i(t);
              },
              error: function (t, e, n) {
                var s;
                return (s = { error: n }), i(s);
              },
            })
          );
        },
        add: function (e, i, n, s) {
          var o;
          return (
            null == n && (n = 1),
            App.Loading.load(null, 0.5),
            (o = { product: e, qty: n }),
            null != i && (o.super_attribute = i),
            null == s && (s = function () {}),
            t._post(
              t.config.endpoint + "add",
              o,
              function (o) {
                return (
                  null == o.error &&
                    ((t.cart = o.response.cart),
                    t.show(),
                    App.Tracking.pushEvent(
                      "add_to_cart",
                      { id: e, super_attributes: i, qty: n },
                      "Cart",
                      "add",
                      e,
                      n
                    ),
                    App.Tracking.trackTwitterEvent("l5u7d"),
                    (t.closeCartTimeout = setTimeout(t.hide, 5e3)),
                    t.updateCart()),
                  App.Loading.unload(),
                  s(o)
                );
              },
              "json"
            )
          );
        },
        waitlist: function (e, i, n) {
          var s;
          return (
            App.Loading.load(null, 0.5),
            (s = { product: e }),
            null != i && (s.super_attribute = i),
            null == n && (n = function () {}),
            t._post(
              t.config.endpoint + "addWishlist",
              s,
              function (t) {
                return (
                  null == t.error &&
                    App.Tracking.pushEvent(
                      "waitlist",
                      { id: e, super_attributes: i },
                      "Cart",
                      "waitlist",
                      e
                    ),
                  App.Loading.unload(),
                  n(t)
                );
              },
              "json"
            )
          );
        },
        _formatMoney: function (t, e, i, n) {
          var s;
          return (
            null == e && (e = 2),
            null == i && (i = "."),
            null == n && (n = ","),
            (s = 0 > t ? "-" : ""),
            t.toFixed(2)
          );
        },
        setQuantity: function (e, i, n, s) {
          var o;
          return (
            App.Loading.load(null, 0.5),
            (o = { product: e, qty: n }),
            null != i && (o.super_attribute = i),
            null == s && (s = function () {}),
            t._post(
              t.config.endpoint + "setQty",
              o,
              function (o) {
                return (
                  null != o.error ? alert(o.error) : (t.cart = o.response.cart),
                  n > 0
                    ? App.Tracking.pushEvent(
                        "update_cart",
                        { id: e, super_attributes: i, qty: n },
                        "Cart",
                        "change",
                        e,
                        n
                      )
                    : App.Tracking.pushEvent(
                        "remove_from_cart",
                        { id: e, super_attributes: i, qty: n },
                        "Cart",
                        "remove",
                        e,
                        n
                      ),
                  t.updateCart(),
                  App.Loading.unload(),
                  s(o)
                );
              },
              "json"
            )
          );
        },
        remove: function (e, i, n) {
          return t.setQuantity(e, i, 0, n);
        },
        updateCart: function (e) {
          var i, n, s;
          return (
            null == e && (e = t.cart),
            null != e.totals &&
              null != e.totals.subtotal &&
              jQuery(".cart-subtotal").text(t._formatMoney(e.totals.subtotal)),
            null != e.count && jQuery(".cart-qty").text(1 * e.count),
            null != e.items
              ? (null == e && (e = t.cart),
                (n = jQuery("#template-modal-cart").html()),
                (s = Handlebars.compile(n)),
                (e = s(e)),
                (i = jQuery(e)),
                i.find(".btn-remove").on("click", function (e) {
                  var i, n;
                  return (
                    e.preventDefault(),
                    (n = jQuery(this).attr("data-item-id")),
                    (i = jQuery(this).parents("li.item:first")),
                    i.fadeTo("fast", 0.3),
                    t.setQuantity(n, null, 0, function () {
                      return i.fadeOut("fast", function () {
                        return t.updateCart();
                      });
                    })
                  );
                }),
                jQuery("#header-cart").html(i),
                jQuery("#header-cart").is(".open") || i.hide(),
                App.Modal.initCartModalEvents("#modal-cart"))
              : void 0
          );
        },
      }),
      (App.Cart = t),
      jQuery(function () {
        return (
          t.init(window.cart_contents),
          jQuery("html, .closing-overlay").on("click", function () {
            return t.hide();
          }),
          jQuery("#header-cart").on("click", function (t) {
            return t.stopPropagation();
          })
        );
      });
  }.call(this),
  function () {
    var t;
    (window.App = window.App || {}),
      (t = {
        $header: null,
        init: function () {
          var e, i, n, s, o, r, a, l;
          return (
            (n = null),
            (o = jQuery("#template-mobile-nav").html()),
            null != o &&
              ((a = Handlebars.compile(o)), (s = a()), (i = jQuery(s))),
            (t.$header = jQuery("#header")),
            (e = t.$header),
            e.prepend(i),
            e.find(".mobile-collapse").on("click", function (t) {
              return (
                t.preventDefault(),
                App.Cart.hide(),
                e.toggleClass("open"),
                jQuery("body").addClass("has-overlay"),
                !1
              );
            }),
            jQuery("html, .closing-overlay").on("click", function (t) {
              return e.is(".open")
                ? (t.stopPropagation(),
                  e.removeClass("open"),
                  jQuery("body").removeClass("has-overlay"))
                : void 0;
            }),
            e.find(".mobile-nav").on("click", function (t) {
              return t.stopPropagation();
            }),
            e
              .find("li.link-men a, li.link-women a")
              .on("mouseover", function () {
                var t, i, s, o;
                return (
                  (i = jQuery(this)),
                  e.is(".white")
                    ? (clearTimeout(n),
                      (t = null),
                      (t = e.find(
                        jQuery(this).parent().is(".link-women")
                          ? ".category-links.women"
                          : ".category-links.men"
                      )),
                      (o = function (i) {
                        var n;
                        return (
                          (n = function () {
                            return e.addClass("white");
                          }),
                          "fade" === i
                            ? t.fadeIn("fast", n)
                            : t.slideDown("fast", n)
                        );
                      }),
                      e.find(".category-links").removeClass("active"),
                      (s = e.find(".category-links:visible").not(t)),
                      s.length > 0
                        ? e
                            .find(".category-links:visible")
                            .fadeOut("fast", function () {
                              return jQuery(this).hide(), o("fade");
                            })
                        : o("slide"),
                      t.addClass("active"))
                    : void (n = setTimeout(function () {
                        return i.trigger("mouseover");
                      }, 400))
                );
              }),
            e
              .find(".category-links, li.link-men a, li.link-women a")
              .on("mouseout", function () {
                return jQuery(this).is(".active") || jQuery(this).is("a")
                  ? (clearTimeout(n),
                    (n = setTimeout(function () {
                      return e
                        .find(".category-links.active")
                        .finish()
                        .slideUp("slow", function () {
                          return jQuery(window).scroll();
                        });
                    }, 400)))
                  : void 0;
              }),
            e.find(".category-links").on("mouseover", function () {
              return clearTimeout(n);
            }),
            e.find(".profile-links >li.has-menu >a").on("click", function (t) {
              return jQuery(this).parent().is(".lang")
                ? void 0
                : (t.preventDefault(),
                  jQuery(this).parent().toggleClass("active"),
                  jQuery(this).toggleClass("active"));
            }),
            (r = !1),
            e.find("a").on("mouseover", function () {
              return (
                (r = !0),
                (t._hoverTimer = setTimeout(function () {
                  return e.addClass("white");
                }, 400))
              );
            }),
            e.find("a").on("mouseout", function () {
              return (
                null != t._hoverTimer && clearTimeout(t._hoverTimer),
                (t._hoverTimer = setTimeout(function () {
                  return jQuery(window).scroll();
                }, 400))
              );
            }),
            jQuery(window).scroll(function () {
              return jQuery(this).scrollTop() > 40
                ? (e.addClass("white"), (r = !0))
                : 0 !== e.find(".category-links:visible").length ||
                  e.is(":hover")
                ? void 0
                : jQuery("#header").removeClass("white");
            }),
            (l = 550),
            0 === e.find(".mobile-nav .links").filter(".men, .women").length &&
              (l = 0),
            e.find(".mobile-nav .top-links a").on("click", function (t) {
              var i;
              return (
                t.preventDefault(),
                (i = jQuery(this)),
                e
                  .find(".mobile-nav .links")
                  .is("." + i.attr("data-filtered-class"))
                  ? void 0
                  : (e
                      .find(".mobile-nav .links")
                      .find(".men-only, .women-only")
                      .filter(":visible")
                      .fadeTo(250, 1e-4),
                    setTimeout(function () {
                      return (
                        e
                          .find(".mobile-nav .top-links a.active")
                          .removeClass("active"),
                        e
                          .find(".mobile-nav .links")
                          .removeClass("men")
                          .removeClass("women")
                          .addClass(i.attr("data-filtered-class")),
                        i.addClass("active"),
                        e
                          .find(".mobile-nav .links")
                          .find(".men-only, .women-only")
                          .hide(),
                        e
                          .find(".mobile-nav .links")
                          .find("." + i.attr("data-filtered-class") + "-only")
                          .fadeTo(250, 1)
                      );
                    }, l))
              );
            }),
            e.find(".mobile-nav .top-links a:first").trigger("click")
          );
        },
      }),
      (App.Header = t);
  }.call(this),
  function () {
    var t;
    (t = function (t) {
      var e, i, n, s, o, r;
      return (
        (e = jQuery(t)),
        (i = jQuery(window)),
        (s = i.scrollTop()),
        (n = s + i.height()),
        (r = e.offset().top + e.height() / 2),
        (o = r + e.height()),
        n >= o && r >= s
      );
    }),
      jQuery(function () {
        var e, i;
        return jQuery("body").is(".index")
          ? ((e = jQuery(".main")),
            (i = e.find(
              ".hero, div.value-props, div.large-prop, div.capsule-list"
            )),
            i
              .filter(".hero")
              .find("a.scroll")
              .on("click", function (t) {
                return (
                  t.preventDefault(),
                  jQuery("body,html").animate(
                    { scrollTop: jQuery(window).height() - 38 },
                    "slow"
                  ),
                  !1
                );
              }),
            e
              .find(".hero .text > *")
              .not(".lang")
              .fadeTo(0, 1e-4)
              .each(function (t) {
                return jQuery(this)
                  .delay(100 * (t + 1) + 700)
                  .fadeTo("slow", 1);
              }),
            jQuery(window).scroll(function () {
              var e;
              return (
                (e = null),
                i.each(function () {
                  return t(this) ? (e = this) : void 0;
                }),
                null != e && e.data("animated") !== !0 && e.is(".value-props")
                  ? (e
                      .find("h4,p")
                      .fadeTo(0, 1e-4)
                      .each(function (t) {
                        return jQuery(this)
                          .delay(100 * (t + 1) + 100)
                          .fadeTo("fast", 1);
                      }),
                    e
                      .find("a.btn")
                      .fadeTo(0, 1e-4)
                      .delay(700)
                      .fadeTo("fast", 1))
                  : void 0
              );
            }))
          : void 0;
      });
  }.call(this),
  function () {
    var t;
    (window.App = window.App || {}),
      (t = {
        init: function () {
          var t, e;
          return (
            (t = jQuery),
            t("body").is(".landing")
              ? ((e = t(".center-box .step")),
                t(".btn-action").on("click", function (t) {
                  return (
                    t.preventDefault(),
                    e.filter(":visible").fadeOut("fast", function () {
                      return (
                        e.filter(".step-2").fadeIn("fast"),
                        e.parent().addClass("open")
                      );
                    })
                  );
                }),
                t(".btn-fb").on("click", function (t) {
                  return t.preventDefault(), fblogin(!1, !0);
                }),
                t(".btn-signup").on("click", function (i) {
                  var n, s, o, r, a, l;
                  if (
                    (i.preventDefault(),
                    (l = function (e) {
                      return (
                        t(e).addClass("error").focus(),
                        setTimeout(function () {
                          return t(e).removeClass("error");
                        }, 1e3)
                      );
                    }),
                    (o = t(this).parent().find("form .email").val()),
                    null == o || "" === t.trim(o))
                  )
                    return void l(t(this).parent().find("form .email"));
                  (r = jQuery(this).parent().find("form")),
                    e.find(".error-msg").slideUp("fast"),
                    (s = {
                      email: r.find("input[name=email]"),
                      firstname: r.find("input[name=firstname]"),
                      lastname: r.find("input[name=lastname]"),
                      password: r.find("input[name=password]"),
                      password2: r.find("input[name=password2]"),
                    }),
                    (n = {});
                  for (a in s) {
                    if (
                      "" === jQuery.trim(s[a].val()) ||
                      (s[a].is("[name=password2]") &&
                        s.password.val() !== s[a].val())
                    )
                      return void l(s[a]);
                    n[a] = s[a].val();
                  }
                  r.find("input").prop("disabled", !0),
                    jQuery.post(
                      "/ajax/account/register?",
                      n,
                      function (t) {
                        return 200 !== t.code
                          ? (e
                              .find(".error-msg")
                              .text(t.response)
                              .slideDown("fast"),
                            r.find("input").prop("disabled", !1))
                          : (window.location = "/");
                      },
                      "json"
                    );
                }))
              : void 0
          );
        },
      }),
      (App.Landing = t),
      jQuery(function () {
        return App.Landing.init();
      });
  }.call(this),
  function () {
    var t;
    (window.App = window.App || {}),
      (t = {
        init: function (t, e) {
          return (
            null == e && (e = !0),
            (this.id = t),
            (this.$modal = jQuery(this.id)),
            e
              ? this.$modal.removeClass("invisible").addClass("visible")
              : this.$modal.removeClass("visible").addClass("invisible"),
            "#modal-size-guide-men" === t && this.initSizeGuideModalEvents(),
            "#modal-size-guide-women" === t && this.initSizeGuideModalEvents(),
            "#modal-login-register" === t && this.initRegisterModalEvents(),
            "#modal-cart" === t && this.initCartModalEvents(t),
            this.$modal.find(".close-btn").on(
              "click",
              (function (t) {
                return function (e) {
                  return e.preventDefault(), t.hideModal();
                };
              })(this)
            )
          );
        },
        initCartModalEvents: function (t) {
          (t += " .modal-content"),
            jQuery(t + " .minicart-wrapper").length > 0 &&
              jQuery(t + " .minicart-wrapper").remove(),
            jQuery(".minicart-wrapper").clone(!0).appendTo(t);
        },
        initSizeGuideModalEvents: function () {},
        initRegisterModalEvents: function () {},
        showModal: function (t, e) {
          return (
            null == e && (e = !0),
            null != t && (t = "#modal-" + t),
            null == t && (t = this.id),
            this.init(t, e),
            jQuery("#overlay, " + t).slideDown("slow"),
            e
              ? (jQuery("#overlay").addClass("visible"),
                jQuery("#overlay").removeClass("invisible"))
              : (jQuery("#overlay").addClass("invisible"),
                jQuery("#overlay").removeClass("visible")),
            jQuery("body").addClass("unscrollable")
          );
        },
        hideModal: function (t) {
          return (
            null != t && (t = "#modal-" + t),
            null == t && (t = this.id),
            jQuery("#overlay, " + t).slideUp("slow"),
            jQuery("body").removeClass("unscrollable")
          );
        },
      }),
      (App.Modal = t);
  }.call(this),
  function () {
    var t;
    (t = {
      breakpoints: { xs: 0, sm: 768, md: 992, lg: 1200 },
      timeout: null,
      init: function () {
        return (
          t.coverImages(),
          t.resize(),
          jQuery(window).on("resize", function () {
            return (
              clearTimeout(t.timeout), (t.timeout = setTimeout(t.resize, 150))
            );
          }),
          jQuery(window).on("scroll", function () {
            return (
              setTimeout(t.resize, 50),
              clearTimeout(t.timeout),
              (t.timeout = setTimeout(t.resize, 75))
            );
          })
        );
      },
      resize: function () {
        var e, i, n, s;
        return (
          (e = jQuery(window)),
          (n = e.width()),
          (i = 0.1),
          (s = {
            width: e.width(),
            height: e.height(),
            top: e.scrollTop(),
            bottom: e.scrollTop() + e.height(),
            left: e.scrollLeft(),
            right: e.scrollLeft() + e.width(),
          }),
          (s.top += (i * s.height) / 2),
          (s.bottom += (i * s.height) / 2),
          (s.left += (i * s.width) / 2),
          (s.right += (i * s.width) / 2),
          jQuery("img").each(function () {
            var e, i, o, r, a;
            if (
              ((e = jQuery(this)),
              (i = e.offset()),
              (i.right = i.left + e.outerWidth()),
              (i.bottom = i.top + e.outerHeight()),
              (a = { x: !1, y: !1 }),
              (a.y =
                (i.top >= s.top && i.top <= s.bottom) ||
                (i.bottom >= s.top && i.bottom <= s.bottom) ||
                (i.top <= s.top && i.bottom >= s.bottom)),
              a.y)
            ) {
              r = e.attr("src");
              for (o in t.breakpoints)
                t.breakpoints[o] <= n &&
                  null != e.attr("data-src-" + o) &&
                  (r = e.attr("data-src-" + o));
              return (
                e.attr("src") !== r && e.attr("src", r),
                e.is(".bg-cover") ? t._coverImage(this) : void 0
              );
            }
          }),
          jQuery(".adaptive-bg").each(function () {
            var e, i, o, r, a, l;
            if (
              ((i = jQuery(this)),
              !i.is("img") &&
                ((o = i.offset()),
                (o.right = o.left + i.outerWidth()),
                (o.bottom = o.top + i.outerHeight()),
                (l = { x: !1, y: !1 }),
                (l.y =
                  (o.top >= s.top && o.top <= s.bottom) ||
                  (o.bottom >= s.top && o.bottom <= s.bottom) ||
                  (o.top <= s.top && o.bottom >= s.bottom)),
                l.y))
            ) {
              a = null;
              for (r in t.breakpoints)
                t.breakpoints[r] <= n &&
                  null != i.attr("data-src-" + r) &&
                  (a = i.attr("data-src-" + r));
              return null != a
                ? (e = jQuery("<img />")
                    .attr("src", a)
                    .load(function () {
                      return i.css("background-image", "url(" + a + ")");
                    }))
                : void 0;
            }
          })
        );
      },
      _coverImage: function (t) {
        var e, i;
        return (
          (i = jQuery(t)),
          (e = jQuery("<img />")
            .data("realimage", i)
            .attr("src", i.attr("src"))
            .load(function () {
              var t, e, n, s, o, r, a, l;
              return (
                (e = jQuery(this)),
                (i = jQuery(e.data("realimage"))),
                (t = i.parent()),
                (r = t.width()),
                (o = t.height()),
                (l = r),
                (a = r * (this.height / this.width)),
                o > a && ((a = o), (l = o * (this.width / this.height))),
                (s = 0),
                (n = 0),
                i.is(".bg-cover-center") &&
                  ((s = (o - a) / 2), (n = (r - l) / 2)),
                i.css("width", l),
                i.css("height", a),
                i.css("marginTop", s),
                i.css("marginLeft", n)
              );
            }))
        );
      },
      coverImages: function () {
        var e;
        return (
          (e = jQuery("img.bg-cover")),
          e.each(function () {
            return t._coverImage(this);
          }),
          e.on("load", function () {
            return t._coverImage(this);
          })
        );
      },
    }),
      (window.ImageResizer = t),
      jQuery(function () {
        return t.init();
      });
  }.call(this),
  function () {
    var t;
    (window.App = window.App || {}),
      (t = {
        _algolia: null,
        $el: null,
        inputTimer: null,
        pastSearchValue: null,
        init: function () {
          var e;
          if ("undefined" != typeof algoliaConfig && null !== algoliaConfig)
            return (
              (e = algoliaConfig),
              (e.renderResults = t.renderResults),
              (t._config = e),
              (t._algolia = new AlgoliaSearch(e.applicationID, e.apiKey))
            );
        },
        _getElement: function () {
          var e, i, n, s;
          return (
            null == t.$el &&
              ((n = jQuery("#template-search").html()),
              (s = Handlebars.compile(n)),
              (i = s(t._config)),
              (e = jQuery(i)),
              jQuery(".search-overlay").on("click", function (e) {
                return e.preventDefault(), t.hide();
              }),
              e.find("a.btn-close").on("click", function () {
                return t.hide();
              }),
              e.find("input").on("keyup", function () {
                return jQuery(this).trigger("change");
              }),
              e.find("input").on("change", function () {
                var i;
                return (
                  (i = jQuery.trim(jQuery(this).val())),
                  i !== t.pastSearchValue
                    ? ((t.pastSearchValue = i),
                      0 === i.length
                        ? void e.find(".items-wrap").slideUp("fast")
                        : i.length >= t._config.minLength
                        ? (null != t.inputTimer && clearTimeout(t.inputTimer),
                          (t.inputTimer = setTimeout(function () {
                            return t.search(i);
                          }, t._config.searchDelay)))
                        : void 0)
                    : void 0
                );
              }),
              (t.$el = e)),
            t.$el
          );
        },
        show: function () {
          return (
            t._getElement().removeClass("open").appendTo("body"),
            t._getElement().show().finish().addClass("open"),
            setTimeout(function () {
              return t._getElement().find("input").focus();
            }, 500),
            jQuery(".search-overlay").addClass("open"),
            App.Tracking.pushPage("/virtual/search")
          );
        },
        hide: function () {
          return (
            t._getElement().removeClass("open"),
            jQuery(".search-overlay").removeClass("open"),
            setTimeout(function () {
              return t._getElement().detach();
            }, 500)
          );
        },
        search: function (e) {
          return (
            t._algolia.startQueriesBatch(),
            t._algolia.addQueryInBatch(
              t._config.indexName,
              e,
              t._config.queryOptions
            ),
            t._algolia.sendQueriesBatch(function (i, n) {
              var s, o, r;
              if (i) {
                for (
                  s = o = 0, r = n.results[0].hits.length;
                  r >= 0 ? r > o : o > r;
                  s = r >= 0 ? ++o : --o
                )
                  n.results[0].hits[s].name =
                    n.results[0].hits[s].name.split("|")[0];
                return (
                  t
                    ._getElement()
                    .find(".items-wrap")
                    .finish()
                    .slideUp("fast", function () {
                      var e, i, s, o;
                      return (
                        (s = jQuery("#template-search-items").html()),
                        (o = Handlebars.compile(s)),
                        (i = o(n.results[0])),
                        (e = jQuery(i)),
                        t
                          ._getElement()
                          .find(".items-wrap")
                          .html("")
                          .append(e)
                          .slideDown("fast")
                      );
                    }),
                  App.Tracking.pushEvent(
                    "search",
                    { term: e },
                    "Search",
                    "search",
                    e
                  )
                );
              }
            })
          );
        },
      }),
      (App.Search = t);
  }.call(this),
  function () {
    var t;
    (window.App = window.App || {}),
      (t = {
        _isProduction: !1,
        init: function () {
          var e;
          return (
            ("selectivefew.com" === window.location.host ||
              "www.selectivefew.com" === window.location.host) &&
              (t._isProduction = !0),
            t._isProduction && window.isUserLoggedIn && null != window.customer
              ? ((e = {}),
                (e.$first_name = window.customer.firstname),
                (e.$last_name = window.customer.lastname),
                (e.$email = window.customer.email),
                mixpanel.identify(window.customer.id),
                mixpanel.people.set(e),
                _kmq.push(["identify", window.customer.id]))
              : void 0
          );
        },
        pushEvent: function (t, e, i, n, s) {
          return (
            null == i && (i = ""),
            null == n && (n = ""),
            null == s && (s = 1),
            "" !== i && _gaq.push(["_trackEvent", t, i, n, s]),
            mixpanel.track(t, e),
            _kmq.push(["record", t, e])
          );
        },
        pushPage: function (t) {
          return (
            null == t && (t = ""),
            _gaq.push(["_trackPageview", t]),
            mixpanel.track_pageview(t),
            _kmq.push(["record", "Pageview", { Page: t }])
          );
        },
        trackTwitterEvent: function (e, i) {
          var n, s;
          return null == i
            ? ((i = { tw_sale_amount: 0, tw_order_quantity: 0 }),
              "undefined" != typeof twttr &&
              null !== twttr &&
              null != twttr.conversion &&
              null != twttr.conversion.trackPid
                ? twttr.conversion.trackPid(e, i)
                : (null == t._twttrData &&
                    ((t._twttrData = []),
                    jQuery.getScript(
                      "https://platform.twitter.com/oct.js",
                      (function () {
                        var e, i, o;
                        for (
                          o = [], s = e = 0, i = t._twttrData.length;
                          i >= 0 ? i > e : e > i;
                          s = i >= 0 ? ++e : --e
                        )
                          (n = t._twttrData.shift()),
                            o.push(twttr.conversion.trackPid(n[0], n[1]));
                        return o;
                      })()
                    )),
                  t._twttrData.push([e, i])))
            : void 0;
        },
      }),
      (App.Tracking = t);
  }.call(this),
  function () {
    var t,
      e,
      i,
      n,
      s,
      o,
      r,
      a = {}.hasOwnProperty,
      l = function (t, e) {
        function i() {
          this.constructor = t;
        }
        for (var n in e) a.call(e, n) && (t[n] = e[n]);
        return (
          (i.prototype = e.prototype),
          (t.prototype = new i()),
          (t.__super__ = e.prototype),
          t
        );
      };
    (t = (function () {
      function t() {
        return s;
      }
      var e, i, n, s;
      return (
        (s = new t()),
        (i = "/uimport/vendor/index/"),
        (n = "/uimport/vendor/capsule/"),
        (e = "/ajax/uimport/"),
        (t.prototype.requestCapsule = function (t, e) {
          var i;
          return (
            (i = { id: t }),
            this.get(
              n,
              i,
              (function () {
                return function (t) {
                  return null != e ? e(t) : void 0;
                };
              })(this)
            )
          );
        }),
        (t.prototype.requestBlock = function (t, e) {
          var n;
          return (
            (n = { block: t }),
            this.get(
              i,
              n,
              (function () {
                return function (t) {
                  return e(t);
                };
              })(this)
            )
          );
        }),
        (t.prototype.requestCategories = function (t, e) {
          var i;
          return (i = { gender: t }), this.ajaxGet("attributeset", i, e);
        }),
        (t.prototype.requestSizings = function (t, e) {
          var i;
          return (i = { set: t }), this.ajaxGet("sizing", i, e);
        }),
        (t.prototype.requestAttributeOptions = function (t, e, i) {
          var n;
          return (n = { code: t, label: e }), this.ajaxGet("attribute", n, i);
        }),
        (t.prototype.ajaxGet = function (t, i, n) {
          return this.get(
            e + t,
            i,
            (function () {
              return function (t) {
                return (t = JSON.parse(t)), n(t);
              };
            })(this)
          );
        }),
        (t.prototype.get = function (t, e, i) {
          var n, s, o;
          s = "";
          for (n in e) (o = e[n]), (s += n + "=" + o + "&");
          return jQuery.get(
            t + "?" + s,
            (function () {
              return function (t) {
                return null != i ? i(t) : void 0;
              };
            })(this)
          );
        }),
        (t.prototype.postSave = function (t, e) {
          return this.ajaxPost("save", t, e);
        }),
        (t.prototype.postColor = function (t, e) {
          return this.ajaxPost("color", t, e);
        }),
        (t.prototype.ajaxPost = function (t, i, n) {
          return this.post(e + t, i, n);
        }),
        (t.prototype.post = function (t, e, i) {
          return jQuery.post(
            t,
            e,
            (function () {
              return function (t) {
                return null != i ? i(t) : void 0;
              };
            })(this)
          );
        }),
        t
      );
    })()),
      (e = (function () {
        function t(t) {
          this.id = t;
        }
        return (
          (t.prototype.validateForm = function (t) {
            var e;
            return (
              null == t && (t = !1),
              (e = !0),
              null != this.elem &&
                this.elem.find(".mandatory").each(function () {
                  var i, n, s;
                  if (
                    ((i = jQuery(this)),
                    (s = jQuery.trim(i.val())),
                    (n = i.siblings("label")),
                    "" === s || "null" === s)
                  ) {
                    if (((e = !1), !t)) return n.addClass("error");
                  } else if (n.hasClass("error")) return n.removeClass("error");
                }),
              e
            );
          }),
          (t.prototype.initEvents = function () {
            return this.elem.find(".mandatory").change(
              (function (t) {
                return function () {
                  return t.validateForm(!0);
                };
              })(this)
            );
          }),
          (t.prototype.decorateForm = function () {
            return this.decorated
              ? void 0
              : (this.elem
                  .find(".mandatory")
                  .siblings("label")
                  .each(function () {
                    return jQuery(this).html(jQuery(this).html() + "*");
                  }),
                (this.decorated = !0));
          }),
          t
        );
      })()),
      (r = (function () {
        function t(t, e, i, n) {
          (this.name = t),
            (this.color = e),
            (this.elem = i),
            (this.qty = n),
            this.initElement();
        }
        return (
          (t.prototype.initElement = function () {
            return (
              (this.select_elem = this.elem.find("select")),
              this.updateName(this.color.id),
              (this.qty = parseInt(this.select_elem.val(), 10)),
              this.initEvents()
            );
          }),
          (t.prototype.initEvents = function () {
            return this.elem.change(
              (function (t) {
                return function () {
                  return (
                    (t.qty = parseInt(t.select_elem.val())),
                    t.color.validateForm(!0)
                  );
                };
              })(this)
            );
          }),
          (t.prototype.updateName = function () {
            return this.select_elem.attr(
              "name",
              "size-" + this.name + "-" + this.color.id
            );
          }),
          (t.prototype.setColorId = function (t) {
            return this.updateName(t);
          }),
          t
        );
      })()),
      (n = (function (e) {
        function i(t, e, i, n) {
          (this.id = t),
            (this.item = e),
            (this.elem = n),
            (this.name = ""),
            (this.sizes = new Array()),
            this.initDOM(i);
        }
        return (
          l(i, e),
          (i.prototype.initDOM = function (e) {
            return null == this.elem
              ? new t().requestBlock(
                  "color",
                  (function (t) {
                    return function (i) {
                      return (
                        (t.elem = jQuery(i)),
                        t.initElement(!0, function () {
                          return null != e ? e(t.elem) : void 0;
                        })
                      );
                    };
                  })(this)
                )
              : (this.initElement(!1), null != e ? e() : void 0);
          }),
          (i.prototype.initElement = function (t, e) {
            var i, n, s, o, a, l;
            if (
              ((this.color_select = this.elem.find("select[name='color']")),
              (this.remove_elem = this.elem.find("td.remove").detach()),
              (this.id = this.color_select.data("id")),
              null != this.id && this.updateId(this.id),
              t)
            ) {
              if (
                ((n = this.elem.find("td.qty:first")), null != this.item.sizes)
              )
                for (
                  this.elem.find("td.qty").remove(),
                    l = this.item.sizes,
                    o = 0,
                    a = l.length;
                  a > o;
                  o++
                )
                  (s = l[o]),
                    (i = n.clone()),
                    this.sizes.push(new r(s.value, this, i)),
                    this.elem.append(i);
            } else
              this.elem.find("td.qty").each(
                (function (t) {
                  return function (e, i) {
                    var n;
                    return (
                      (n = jQuery(i)),
                      null != t.item.sizes[t.sizes.length] &&
                        t.sizes.push(
                          new r(t.item.sizes[t.sizes.length].value, t, n)
                        ),
                      t.elem.append(n)
                    );
                  };
                })(this)
              );
            return (
              this.elem.append(this.remove_elem),
              this.initEvents(
                (function () {
                  return function () {
                    return null != e ? e() : void 0;
                  };
                })(this)
              )
            );
          }),
          (i.prototype.initEvents = function (t) {
            return (
              this.color_select.change(
                (function (t) {
                  return function () {
                    return "custom" === t.color_select.val()
                      ? t.createCustomOption(function () {
                          return this.validateForm(!0);
                        })
                      : (t.updateColor(
                          parseInt(t.color_select.val()),
                          t.color_select.find("option:selected").text()
                        ),
                        t.validateForm(!0));
                  };
                })(this)
              ),
              this.remove_elem.click(
                (function (t) {
                  return function () {
                    return t.item.removeColor(t);
                  };
                })(this)
              ),
              i.__super__.initEvents.apply(this, arguments),
              null != t ? t() : void 0
            );
          }),
          (i.prototype.updateColor = function (t, e) {
            var i;
            return (
              (i = this.color_select.children(":first")),
              i.val(t).html(e),
              this.color_select.append(i),
              this.color_select.val(i.val()),
              this.updateId(parseInt(i.val()))
            );
          }),
          (i.prototype.createCustomOption = function (e) {
            var i, n;
            return (
              (i = window.prompt("What's the name of your new color?")),
              null != i
                ? "" === jQuery.trim(i)
                  ? void alert("Please enter a valid color name")
                  : ((n = { color: i }),
                    new t().postColor(
                      n,
                      (function (t) {
                        return function (i) {
                          var n;
                          return (
                            (i = JSON.parse(i)),
                            (n = JSON.parse(i.color)),
                            t.updateColor(n.id, n.name),
                            null != e ? e() : void 0
                          );
                        };
                      })(this)
                    ))
                : void 0
            );
          }),
          (i.prototype.updateId = function (t) {
            return (
              (this.id = t),
              this.color_select.attr("name", "color-" + this.id),
              this.updateSizes()
            );
          }),
          (i.prototype.updateSizes = function () {
            var t, e, i, n, s;
            if (null != this.sizes) {
              for (n = this.sizes, s = [], e = 0, i = n.length; i > e; e++)
                (t = n[e]), s.push(t.setColorId(this.id));
              return s;
            }
          }),
          (i.prototype.validateForm = function (t) {
            var e, n, s, o, r, a, l;
            for (
              null == t && (t = !1),
                i.__super__.validateForm.call(this, t),
                o = !0,
                n = 0,
                l = this.sizes,
                r = 0,
                a = l.length;
              a > r;
              r++
            )
              (s = l[r]), (n += s.qty);
            return (
              (e = this.item.elem.find(".color-error")),
              0 === n && (o = !1),
              (null == this.color_select ||
                "null" === this.color_select.val() ||
                "custom" === this.color_select.val()) &&
                (o = !1),
              o ? e.hide() : t || e.show(),
              o
            );
          }),
          i
        );
      })(e)),
      (o = (function (e) {
        function i(t, e, i, n) {
          (this.id = t),
            (this.capsule = e),
            (this.elem = n),
            (this.colors = new Array()),
            (this.categories = new Array()),
            (this.sizing_types = new Array()),
            (this.current_color = 0),
            null != this.elem && this.initDOM(i);
        }
        return (
          l(i, e),
          (i.prototype.initDOM = function (e) {
            return null == this.elem
              ? ((this.domId = "item-" + this.id),
                (this.frontendId = this.id + 1),
                new t().requestBlock(
                  "item",
                  (function (t) {
                    return function (i) {
                      return (
                        (t.elem = jQuery(i)),
                        t.initElement(!0, function () {
                          return (
                            t.capsule.append(t.elem), null != e ? e() : void 0
                          );
                        })
                      );
                    };
                  })(this)
                ))
              : ((this.domId = this.elem.find('input[name="id"]').val()),
                this.initElement(!1),
                (this.sizes = new Array()),
                this.qtytable_elem.find("thead th").each(
                  (function (t) {
                    return function (e, i) {
                      var n;
                      return (
                        (n = new Object()),
                        (n.label = jQuery(i).html()),
                        (n.value = jQuery(i).data("id")),
                        null != n.value ? t.sizes.push(n) : void 0
                      );
                    };
                  })(this)
                ),
                this.qtytable_elem.find("tbody tr").each(
                  (function (t) {
                    return function (e, i) {
                      return t.colors.push(new n(null, t, null, jQuery(i)));
                    };
                  })(this)
                ),
                null != e ? e() : void 0);
          }),
          (i.prototype.initElement = function (t, e) {
            return (
              null == t && (t = !0),
              (this.gender_elem = this.elem.find("[name='gender']")),
              (this.category_elem = this.elem.find("[name='attribute_set']")),
              (this.sizing_elem = this.elem.find("[name='sizing_type']")),
              (this.qtytable_elem = this.elem.find("#qty-table")),
              (this.addcolorbtn_elem = this.elem.find(
                "[name='add-color-btn']"
              )),
              (this.saveitem_elem = this.elem.find("a.btn-save-item")),
              (this.price_elem = this.elem.find("input[name='price']")),
              this.elem.attr("id", this.domId),
              (this.id_elem = this.elem.find("input[name='id']")),
              this.decorateForm(),
              t
                ? ((this.pos_elem = this.elem
                    .find("input[name='position']")
                    .val(this.id)),
                  this.id_elem.val(""),
                  this.setTitle("Item " + this.frontendId),
                  this.pos_elem.val(this.id),
                  this.qtytable_elem.hide())
                : (this.db_id = parseInt(this.id_elem.val())),
              this.initEvents(),
              null != e ? e() : void 0
            );
          }),
          (i.prototype.initEvents = function () {
            var t;
            return (
              (t = !1),
              this.elem.find("a.btn-save-item").on(
                "click",
                (function (e) {
                  return function (i) {
                    var n;
                    return (
                      i.preventDefault(),
                      t
                        ? !1
                        : ((n = e.saveitem_elem),
                          e.saveitem_elem
                            .text(e.saveitem_elem.attr("data-saving-text"))
                            .fadeTo("fast", 0.5),
                          (t = !0),
                          e.capsule.draft(function () {
                            return (
                              n.text(n.attr("data-saved-text")),
                              setTimeout(
                                (function () {
                                  return function () {
                                    return (
                                      (t = !1),
                                      n
                                        .text(n.attr("data-save-text"))
                                        .fadeTo("fast", 1)
                                    );
                                  };
                                })(this),
                                1e3
                              )
                            );
                          }))
                    );
                  };
                })(this)
              ),
              this.elem.find("[name='add-color-btn']").click(
                (function (t) {
                  return function (e) {
                    return e.preventDefault(), t.addColor();
                  };
                })(this)
              ),
              this.elem.find(".item-remove").click(
                (function (t) {
                  return function () {
                    return t.capsule.removeItem(t);
                  };
                })(this)
              ),
              this.gender_elem.change(
                (function (t) {
                  return function () {
                    return (
                      (t.gender = t.gender_elem.val()),
                      t.updateCategories(function () {
                        return (
                          t.updateCategoryDisplay(), t.category_elem.change()
                        );
                      })
                    );
                  };
                })(this)
              ),
              this.category_elem.change(
                (function (t) {
                  return function () {
                    return (
                      (t.category = t.category_elem.val()),
                      t.updateSizings(function () {
                        return t.updateSizingDisplay(), t.sizing_elem.change();
                      })
                    );
                  };
                })(this)
              ),
              this.sizing_elem.change(
                (function (t) {
                  return function () {
                    return (
                      (t.sizing = t.sizing_elem.val()),
                      t.updateQtyTable(function () {
                        return t.updateQtyTableDisplay();
                      })
                    );
                  };
                })(this)
              ),
              (this.name_input = this.elem.find("input[name='name']")),
              this.name_input.change(
                (function (t) {
                  return function () {
                    return t.elem.find(".item-title").html(t.name_input.val());
                  };
                })(this)
              ),
              i.__super__.initEvents.apply(this, arguments)
            );
          }),
          (i.prototype.updateCategories = function (e) {
            return new t().requestCategories(
              this.gender,
              (function (t) {
                return function (i) {
                  return (
                    (t.categories = JSON.parse(i.categories)),
                    null != e ? e() : void 0
                  );
                };
              })(this)
            );
          }),
          (i.prototype.updateSizings = function (e) {
            var i;
            return (
              (i = this.category.split("-").pop()),
              new t().requestSizings(
                i,
                (function (t) {
                  return function (i) {
                    return (
                      (t.sizings = JSON.parse(i.sizings)),
                      null != e ? e() : void 0
                    );
                  };
                })(this)
              )
            );
          }),
          (i.prototype.updateQtyTable = function (e) {
            var i;
            return (
              (i = this.sizing.split("-").pop()),
              new t().requestAttributeOptions(
                i,
                void 0,
                (function (t) {
                  return function (i) {
                    return (
                      (t.sizes =
                        200 === i.code ? JSON.parse(i.options) : new Array()),
                      null != e ? e() : void 0
                    );
                  };
                })(this)
              )
            );
          }),
          (i.prototype.updateCategoryDisplay = function () {
            return null != this.categories
              ? this.updateSelectDisplay(
                  this.category_elem,
                  this.categories,
                  "attribute_set-"
                )
              : void 0;
          }),
          (i.prototype.updateSizingDisplay = function () {
            return null != this.sizings
              ? this.updateSelectDisplay(
                  this.sizing_elem,
                  this.sizings,
                  "sizing-"
                )
              : void 0;
          }),
          (i.prototype.updateQtyTableDisplay = function () {
            var t, e, i, n, s, o;
            if (
              (this.resetColors(), null != this.sizes && this.sizes.length > 0)
            ) {
              for (
                this.qtytable_elem.show(),
                  this.addcolorbtn_elem.show(),
                  t = this.qtytable_elem.find("thead tr"),
                  e = t.children("th:last-child").clone(),
                  t.children().remove("th:not(:first-child)"),
                  o = this.sizes,
                  n = 0,
                  s = o.length;
                s > n;
                n++
              )
                (i = o[n]), t.append("<th>" + i.label + "</th>");
              if (
                (t.append(e),
                this.qtytable_elem.children("tbody").children("tr").remove(),
                null != this.sizing && "null" !== this.sizing)
              )
                return this.addColor();
            }
          }),
          (i.prototype.updateSelectDisplay = function (t, e, i) {
            var n, s, o, r, a, l;
            for (
              s = t.children(":first"),
                t.children().remove(),
                t.append(s),
                l = [],
                r = 0,
                a = e.length;
              a > r;
              r++
            )
              (o = e[r]),
                (n = s.clone()),
                n.val(i + o.id),
                n.html(o.name),
                l.push(t.append(n));
            return l;
          }),
          (i.prototype.resetColors = function () {
            return (this.colors = new Array());
          }),
          (i.prototype.addColor = function (t) {
            return this.colors.push(
              new n(
                this.current_color,
                this,
                (function (e) {
                  return function (i) {
                    return (
                      e.current_color++,
                      e.appendElem(i),
                      null != t ? t() : void 0
                    );
                  };
                })(this)
              )
            );
          }),
          (i.prototype.appendElem = function (t) {
            return this.qtytable_elem.children("tbody").append(t);
          }),
          (i.prototype.removeColor = function (t) {
            var e;
            return (
              (e = this.colors.indexOf(t)),
              this.colors.splice(e, 1),
              t.elem.remove()
            );
          }),
          (i.prototype.setTitle = function (t) {
            return this.elem.find(".item-title").html(t);
          }),
          (i.prototype.setId = function (t) {
            return this.id_elem.val(t), (this.db_id = t);
          }),
          (i.prototype.getPosition = function () {
            return null != this.pos_elem ? this.pos_elem.val() : null;
          }),
          (i.prototype.decorateForm = function () {
            var t, e, n, s;
            for (s = this.colors, e = 0, n = s.length; n > e; e++)
              (t = s[e]), t.decorateForm();
            return i.__super__.decorateForm.call(this);
          }),
          (i.prototype.validateForm = function (t) {
            var e, n, s, o, r, a, l, u, h, c, d, p, f, m;
            if (
              (null == t && (t = !1),
              (l = !0),
              (s = Array()),
              (o = Array()),
              0 === this.colors.length)
            )
              o.push(this.elem.find(".nocolor-error")), (l = !1);
            else
              for (
                s.push(this.elem.find(".nocolor-error")),
                  m = this.colors,
                  u = 0,
                  d = m.length;
                d > u;
                u++
              )
                (e = m[u]), (l = l && e.validateForm(t));
            if (
              ((r = parseFloat(this.price_elem.val())),
              (a = this.price_elem.siblings("label")),
              isNaN(r) || 0 === r
                ? ("" !== this.price_elem.val() &&
                    o.push(this.elem.find(".price-error")),
                  (l = !1),
                  t || a.addClass("error"))
                : (s.push(this.elem.find(".price-error")),
                  this.price_elem.val(r),
                  a.hasClass("error") && a.removeClass("error")),
              !t)
            )
              for (h = 0, p = o.length; p > h; h++) (n = o[h]), n.show();
            for (c = 0, f = s.length; f > c; c++) (n = s[c]), n.hide();
            return i.__super__.validateForm.call(this, t) && l;
          }),
          (i.prototype.stringify = function () {
            var t, e;
            return null != this.elem
              ? ((e = !1),
                "" === this.name_input.val() &&
                  (this.name_input.val(this.elem.find(".item-title").html()),
                  (e = !0)),
                (t = {
                  form: this.elem.find("form").serializeArray(),
                  position: this.elem.find("input[name='position']").val(),
                  id: this.elem.find("input[name='id']").val(),
                }),
                e && this.name_input.val(""),
                JSON.stringify(t))
              : void 0;
          }),
          i
        );
      })(e)),
      (i = (function (e) {
        function i(t, e) {
          (this.uimport = t),
            (this.backend_id = null),
            (this.items = Array()),
            (this.current_id = 0),
            (this.removedItems = new Array()),
            this.initDOM(e);
        }
        return (
          l(i, e),
          (i.prototype.initDOM = function (e) {
            return this.uimport.elem.find(".capsule-box").length > 0
              ? ((this.elem = this.uimport.elem.find(".capsule-box")),
                this.initElement(!1),
                this.elem.find(".item-box").each(
                  (function (t) {
                    return function (e, i) {
                      return t.items.push(new o(null, t, null, jQuery(i)));
                    };
                  })(this)
                ),
                null != e ? e(this.elem) : void 0)
              : new t().requestBlock(
                  "form",
                  (function (t) {
                    return function (i) {
                      return (
                        (t.elem = jQuery(i)),
                        t.initElement(!0),
                        null != e ? e(t.elem) : void 0
                      );
                    };
                  })(this)
                );
          }),
          (i.prototype.initElement = function (t) {
            return (
              null == t && (t = !0),
              (this.saving_message = this.elem.find(".saving-message")),
              (this.new_item_btn = this.elem.find("[name='new-item-btn']")),
              t && this.decorateForm(),
              this.initEvents()
            );
          }),
          (i.prototype.initEvents = function () {
            return (
              this.new_item_btn.click(
                (function (t) {
                  return function (e) {
                    var i, n;
                    return (
                      e.preventDefault(),
                      null == t.new_item_btn.attr("disabled")
                        ? (t.new_item_btn.attr("disabled", !0),
                          (n = t.elem.find(".new-item-message")),
                          n.html("Loading item...").show(),
                          (i = new o(t.current_id, t)),
                          t.items.push(i),
                          i.initDOM(function () {
                            return (
                              n.fadeOut(),
                              t.draft(function () {
                                return t.new_item_btn.attr("disabled", !1);
                              })
                            );
                          }),
                          t.current_id++)
                        : void 0
                    );
                  };
                })(this)
              ),
              this.elem.find("[name='submit-capsule-btn']").click(
                (function (t) {
                  return function (e) {
                    return e.preventDefault(), t.submit();
                  };
                })(this)
              ),
              (this.draft_btn = this.elem.find("[name='draft-capsule-btn']")),
              this.draft_btn.click(
                (function (t) {
                  return function (e) {
                    return (
                      e.preventDefault(),
                      t.draft(function () {
                        return t.uimport.refreshHistory(function () {
                          return t.uimport.showHistory(!1);
                        });
                      })
                    );
                  };
                })(this)
              ),
              (window.onbeforeunload = function () {
                return "history" !== window.history.state
                  ? "Any new items will not be saved."
                  : void 0;
              }),
              i.__super__.initEvents.apply(this, arguments)
            );
          }),
          (i.prototype.removeItem = function (t) {
            var e;
            return (
              (e = this.items.indexOf(t)),
              e >= 0
                ? (this.items.splice(e, 1),
                  this.elem.find("#" + t.domId).remove(),
                  this.removedItems.push(t.db_id))
                : void 0
            );
          }),
          (i.prototype.append = function (t) {
            return this.elem.find(".items-list").append(t);
          }),
          (i.prototype.validateForm = function (t) {
            var e, n, s, o, r;
            for (
              null == t && (t = !1),
                n = !0,
                (null == this.items || 0 === this.items.length) && (n = !1),
                r = this.items,
                s = 0,
                o = r.length;
              o > s;
              s++
            )
              (e = r[s]), (n = n && e.validateForm(t));
            return i.__super__.validateForm.call(this, t) && n;
          }),
          (i.prototype.prepareSave = function () {
            var t, e, i, n, s, o, r, a, l, u, h;
            for (
              o = new Array(), h = this.items, l = 0, u = h.length;
              u > l;
              l++
            )
              (s = h[l]), o.push(s.stringify());
            return (
              (a = this.elem.find("input[name='vendor-id']").val()),
              (e = this.elem.find("select[name='capsule-month']").val()),
              (n = this.elem.find("input[name='capsule-status']").val()),
              (i = this.elem.find("input[name='capsule-name']").val()),
              (t = this.elem.find("input[name='capsule-id']").val()),
              (r = {
                "items[]": o,
                "vendor-id": a,
                "capsule-month": e,
                "capsule-status": n,
                "capsule-name": i,
                "capsule-id": t,
                "removed-items": this.removedItems,
              })
            );
          }),
          (i.prototype.submit = function () {
            var e;
            return (
              this.validateForm()
                ? window.confirm(
                    "Are you sure you want submit your capsule?"
                  ) &&
                  (this.saving_message.html("Submitting").fadeIn(),
                  this.elem
                    .find("input[name='capsule-status']")
                    .val("submitted"),
                  (e = this.prepareSave()),
                  new t().postSave(
                    e,
                    (function (t) {
                      return function () {
                        return t.resetCapsule();
                      };
                    })(this)
                  ))
                : this.saving_message
                    .addClass("error")
                    .html(
                      "Oops, one or more of the mandatory fields above have not been filled."
                    )
                    .fadeIn(),
              setTimeout(
                (function (t) {
                  return function () {
                    return t.saving_message.removeClass("error").fadeOut();
                  };
                })(this),
                4e3
              )
            );
          }),
          (i.prototype.draft = function (e) {
            var i, n;
            return (
              this.draft_btn.attr("disabled", !0),
              (n = this.elem.find(".saving-message")),
              n.html("Saving draft").fadeIn(),
              (i = this.prepareSave()),
              (i["capsule-status"] = "draft"),
              new t().postSave(
                i,
                (function (t) {
                  return function (i) {
                    return (
                      (i = JSON.parse(i)),
                      t.elem.find("input[name='capsule-id']").val(i.capsule_id),
                      t.setItemsIds(i.items_ids),
                      n.html("Draft saved").fadeIn(),
                      setTimeout(function () {
                        return n.fadeOut();
                      }, 4e3),
                      t.draft_btn.attr("disabled", !1),
                      null != e ? e() : void 0
                    );
                  };
                })(this)
              )
            );
          }),
          (i.prototype.resetCapsule = function () {
            return this.uimport.removeCapsule(this.elem);
          }),
          (i.prototype.setItemsIds = function (t) {
            var e, i, n, s, o;
            for (s = this.items, o = [], i = 0, n = s.length; n > i; i++)
              (e = s[i]),
                o.push(
                  null != t[e.getPosition()]
                    ? e.setId(t[e.getPosition()])
                    : void 0
                );
            return o;
          }),
          (i.prototype.getId = function () {
            return parseInt(this.elem.find('[name="capsule-id"]').val());
          }),
          i
        );
      })(e)),
      (s = (function () {
        function e() {
          (this.elem = jQuery("#capsule-tab")),
            (this.message = this.elem.find(".message")),
            (this.history_elem = this.elem.find("#history-capsule-box")),
            (this.back_history_elem = this.elem.find(
              "button[name='back-history']"
            )),
            (this.goto_history_elem = this.elem.find(
              "button[name='go-to-history']"
            )),
            (this.content_elem = this.elem.find(".capsule-content")),
            window.location.pathname.indexOf("id/") > -1 &&
              this.setupEventsForNewDOM(),
            this.pushState(),
            this.initEvents();
        }
        return (
          (e.prototype.initEvents = function () {
            return (
              this.initHistoryElemEvent(),
              this.back_history_elem.click(
                (function (t) {
                  return function (e) {
                    return e.preventDefault(), t.showHistory();
                  };
                })(this)
              ),
              this.goto_history_elem.click(
                (function (t) {
                  return function (e) {
                    return (
                      e.preventDefault(),
                      t.showHistory(),
                      t.goto_history_elem.hide()
                    );
                  };
                })(this)
              ),
              (window.onpopstate = (function (t) {
                return function (e) {
                  var i;
                  return "history" === e.state
                    ? t.showHistory(!0, !1)
                    : e.state.indexOf("capsule") > -1
                    ? ((i = parseInt(
                        e.state.substring(e.state.indexOf("-") + 1)
                      )),
                      t.showCapsule(i, !1))
                    : void 0;
                };
              })(this))
            );
          }),
          (e.prototype.initHistoryElemEvent = function () {
            var t;
            return (
              (t = this),
              this.history_elem.find("tr[data-id]").click(function () {
                var e;
                return (e = jQuery(this).data("id")), t.showCapsule(e);
              })
            );
          }),
          (e.prototype.appendElem = function (t) {
            return this.elem.append(t);
          }),
          (e.prototype.showCapsule = function (e, i) {
            return (
              null == i && (i = !0),
              null != this.isLoadingCapsule && this.isLoadingCapsule
                ? void 0
                : (this.pingInterval && clearInterval(this.pingInterval),
                  (this.pingInterval = setInterval(function () {
                    return jQuery.get("/ajax/uimport/ping", function () {});
                  }, 6e4)),
                  (this.isLoadingCapsule = !0),
                  this.message.show(),
                  new t().requestCapsule(
                    e,
                    (function (t) {
                      return function (e) {
                        return (
                          t.history_elem.hide(),
                          t.content_elem.prepend(e),
                          t.setupEventsForNewDOM(),
                          t.back_history_elem.show(),
                          t.message.hide(),
                          (t.isLoadingCapsule = !1),
                          i ? t.pushCapsuleState(t.capsule.getId()) : void 0
                        );
                      };
                    })(this)
                  ))
            );
          }),
          (e.prototype.removeCapsule = function (t) {
            return this.refreshHistory(
              (function (e) {
                return function () {
                  return (
                    t.remove(), (e.capsule = void 0), e.history_elem.show()
                  );
                };
              })(this)
            );
          }),
          (e.prototype.refreshHistory = function (e) {
            return new t().requestBlock(
              "history",
              (function (t) {
                return function (i) {
                  return (
                    t.history_elem.html(jQuery(i).html()),
                    t.initHistoryElemEvent(),
                    null != e ? e() : void 0
                  );
                };
              })(this)
            );
          }),
          (e.prototype.showHistory = function (t, e) {
            return (
              null == t && (t = !0),
              null == e && (e = !0),
              !t ||
              window.confirm(
                "Are you sure you want to leave? Any unsaved changes will be lost."
              )
                ? (this.history_elem.show(),
                  this.content_elem.find("#new-capsule-box").remove(),
                  this.back_history_elem.hide(),
                  e ? this.pushHistoryState() : void 0)
                : void 0
            );
          }),
          (e.prototype.pushState = function () {
            return window.location.pathname.indexOf("id/") > -1
              ? this.pushCapsuleState(this.capsule.getId())
              : this.pushHistoryState();
          }),
          (e.prototype.pushCapsuleState = function (t) {
            return window.history.pushState(
              "capsule-" + t,
              "Capsule " + t,
              "/uimport/vendor/index/id/" + t
            );
          }),
          (e.prototype.pushHistoryState = function () {
            return window.history.pushState(
              "history",
              "Capsule history",
              window.location.pathname.substring(
                0,
                window.location.pathname.indexOf("id")
              )
            );
          }),
          (e.prototype.setupEventsForNewDOM = function () {
            return (this.capsule = new i(this));
          }),
          e
        );
      })()),
      jQuery(function () {
        return jQuery("body").is(".udropship-vendor")
          ? (App.Uimport = new s())
          : void 0;
      });
  }.call(this),
  jQuery.noConflict(),
  (function (t) {
    function e() {
      t(".customer-navigation a").click(function (e) {
        e.preventDefault();
        var i = t(this).attr("href");
        t(".customer-content .each").each(function () {
          t(this).css("display", "none");
        }),
          t(i).css("display", "block"),
          t(".customer-navigation a").each(function () {
            t(this).removeClass("active");
          }),
          t(this).addClass("active"),
          t(window).width() < 768 &&
            t(".customer-navigation ul").css("display", "none");
      });
    }
    function i() {
      var e = new Array();
      t("#upsell-product-table li").each(function () {
        e.push(t("h3 a", this).height());
      });
      var i = Math.max.apply(null, e);
      t("#upsell-product-table li").each(function () {
        if (t("h3", this).height() != i) {
          var e = i - t("h3 a", this).height();
          (e += 2), t(".price-box", this).css("margin-top", e + "px");
        }
      });
    }
    var n = {
      changeConfigurableOptionsDefaultText: function () {
        t(".product-options .super-attribute-select").each(function () {
          "Choose an Option..." == t(this).find("option:first").text() &&
            t(this).find("option:first").text(t(this).attr("data-label"));
        });
      },
      run: function () {
        this.setupHeader(),
          this.setupModalMenu(),
          this.setupCategory(),
          this.setupProduct(),
          this.setupCheckout(),
          this.qtyButtons(),
          this.setupAccountNav(),
          this.setupModalLoginRegister(),
          this.profileAlign();
      },
      setupCategory: function () {
        this.setupLayeredNavigation();
      },
      setupCheckout: function () {
        this.setupBillingInformation(), this.setupShippingInformation();
      },
      setupBillingInformation: function () {
        var e = "body.checkout-onepage-index #billing\\:country_id",
          i = "body.checkout-onepage-index #billing\\:region_id";
        t(document).on("change", e, function () {
          t(i).is(":hidden")
            ? t(i).next(".customSelect").hide()
            : t(i).next(".customSelect").is(":hidden") &&
              t(i).next(".customSelect").show();
        });
      },
      setupShippingInformation: function () {
        var e = "body.checkout-onepage-index #shipping\\:country_id",
          i = "body.checkout-onepage-index #shipping\\:region_id";
        t(document).on("change", e, function () {
          t(i).is(":hidden")
            ? t(i).next(".customSelect").hide()
            : t(i).next(".customSelect").is(":hidden") &&
              t(i).next(".customSelect").show();
        });
      },
      setupConfigurableOptions: function () {
        this.changeConfigurableOptionsDefaultText();
        var e = this;
        t(".product-options .super-attribute-select").change(function () {
          e.changeConfigurableOptionsDefaultText();
        }),
          t(
            ".catalog-product-view .product-options .custom-select"
          ).customSelect();
      },
      setupHeader: function () {
        this.setupTopNav(), t(window).data("scrollTop", t(window).scrollTop());
        var e = this;
        t("#header-logo-wrapper").length > 0 &&
          t(window).scroll(function () {
            (0 == t(window).data("scrollTop") ||
              t(window).data("scrollTop") < 0) &&
            t(window).scrollTop() > 0
              ? (t("#header-logo").animate({ width: 28, height: 28 }),
                t("#header-outline").animate({ backgroundColor: "#fff" }),
                t("#header .name").animate({ top: 28 }),
                t("#header").css({
                  boxShadow: "0 0 3px 0 rgba(0, 0, 0, 0.22)",
                }),
                t(".page-header-container").animate({ height: 58 }),
                t("#header .left-container").animate({ height: 58 }),
                t("#header .right-container").animate({ height: 58 }),
                t("#header .wrapper").animate({ maxHeight: 58 }),
                t("#header .left-container .wrapper .links").animate({
                  marginTop: 20,
                }),
                t("#header .right-container .wrapper .links").animate({
                  lineHeight: 52,
                }),
                t("#header-dropdowns .dropdown").animate({
                  top:
                    parseInt(
                      t("#header .left-container .wrapper").position().top
                    ) + 26,
                }),
                t("#header .search-bar").animate({ marginTop: -8 }),
                t("#header-cart").animate({ top: 58 }),
                t("#header-account").animate({ top: 58 }))
              : (0 == t(window).scrollTop() || t(window).scrollTop() < 0) &&
                t(window).data("scrollTop") > 0 &&
                (t("#header-logo").animate({ width: 130, height: 130 }),
                t("#header-outline").animate({ backgroundColor: "#74d6d5" }),
                t("#header .name").animate({ top: -23 }),
                t("#header").css("box-shadow", "none"),
                t(".page-header-container").animate({ height: 78 }),
                t("#header .left-container").animate({ height: 78 }),
                t("#header .right-container").animate({ height: 78 }),
                t("#header .wrapper").animate({ maxHeight: 78 }),
                t("#header .left-container .wrapper .links").animate({
                  marginTop: 30,
                }),
                t("#header .right-container .wrapper .links").animate({
                  lineHeight: 72,
                }),
                t("#header-dropdowns .dropdown").animate({
                  top:
                    parseInt(
                      t("#header .left-container .wrapper").position().top
                    ) + 46,
                }),
                t("#header .search-bar").animate({ marginTop: 0 }),
                t("#header-cart").animate({ top: 78 }),
                t("#header-account").animate({ top: 78 })),
              t(window).data("scrollTop", t(window).scrollTop()),
              e.setupTopNav();
          }),
          t(window).resize(function () {
            e.setupTopNav();
          });
      },
      setupLayeredNavigation: function () {
        this.setupPriceSlider(),
          t("#toggle-layered-nav, #toggle-layered-nav-bottom").click(function (
            e
          ) {
            e.preventDefault(),
              t("#toggle-layered-nav a").toggleClass("active"),
              t(".main > .col-left.sidebar").slideToggle();
          });
      },
      setupPriceSlider: function () {
        t.ui.slider &&
          (t.extend(t.ui.slider.prototype.options, {
            minRangeSize: 0,
            maxRangeSize: 100,
            autoShift: !1,
            lowMax: 100,
            topMin: 0,
          }),
          t.extend(t.ui.slider.prototype, {
            _slide: function (t, e, i) {
              var n, s, o, r;
              this.options.values && this.options.values.length
                ? ((n = this.values(e ? 0 : 1)),
                  (r = 0 === e ? 1 : -1),
                  2 === this.options.values.length &&
                    this.options.range === !0 &&
                    (0 === e &&
                      i > this.options.lowMax &&
                      (i = this.options.lowMax),
                    1 === e &&
                      i < this.options.topMin &&
                      (i = this.options.topMin),
                    (n - i) * r < this.options.minRangeSize &&
                      (this.options.autoShift === !0
                        ? (n = i + this.options.minRangeSize * r)
                        : (i = n - this.options.minRangeSize * r)),
                    (n - i) * r > this.options.maxRangeSize &&
                      (this.options.autoShift === !0
                        ? (n = i + this.options.maxRangeSize * r)
                        : (i = n - this.options.maxRangeSize * r))),
                  i !== this.values(e) &&
                    ((s = this.values()),
                    (s[e] = i),
                    (s[e ? 0 : 1] = n),
                    (o = this._trigger("slide", t, {
                      handle: this.handles[e],
                      value: i,
                      values: s,
                    })),
                    o !== !1 &&
                      (this.values(e, i, !0), this.values(e ? 0 : 1, n, !0))))
                : i !== this.value() &&
                  ((o = this._trigger("slide", t, {
                    handle: this.handles[e],
                    value: i,
                  })),
                  o !== !1 && this.value(i));
            },
          }));
      },
      setupProductCarouselNav: function () {
        var e = ".catalog-product-view .carousel-mobile",
          i = ".catalog-product-view .carousel-mobile-nav";
        t(e + " .next").click(function (n) {
          n.preventDefault();
          var s = parseInt(t(e + " img.active").attr("data-index"));
          t(e + " img.active").removeClass("active"),
            t(i + " a.active").removeClass("active"),
            s < t(e + " img").length
              ? (t(e + " img.item-" + (s + 1)).addClass("active"),
                t(i + " a.item-" + (s + 1)).addClass("active"))
              : (t(e + " img.item-1").addClass("active"),
                t(i + " a.item-1").addClass("active"));
        }),
          t(e + " .prev").click(function (n) {
            n.preventDefault();
            var s = parseInt(t(e + " img.active").attr("data-index"));
            t(e + " img.active").removeClass("active"),
              t(i + " a.active").removeClass("active"),
              s > 1
                ? (t(e + " img.item-" + (s - 1)).addClass("active"),
                  t(i + " a.item-" + (s - 1)).addClass("active"))
                : (t(e + " img.item-" + t(e + " img").length).addClass(
                    "active"
                  ),
                  t(i + " a.item-" + t(e + " img").length).addClass("active"));
          }),
          t(i + " a").click(function (n) {
            n.preventDefault();
            var s = parseInt(t(this).attr("data-index"));
            t(e + " img.active").removeClass("active"),
              t(i + " a.active").removeClass("active"),
              t(e + " img.item-" + s).addClass("active"),
              t(i + " a.item-" + s).addClass("active");
          });
      },
      setupModalMenu: function () {
        t(".menu-modal").click(function (e) {
          e.preventDefault(), t("#overlay, #modal-menu").fadeIn("slow");
        }),
          t("#modal-menu .close-btn").click(function (e) {
            e.preventDefault(), t("#overlay, #modal-menu").fadeOut("slow");
          }),
          t("#modal-menu .modal-container").mouseup(function (e) {
            e.preventDefault(),
              "modal-container" == e.target.className &&
                t("#overlay, #modal-menu").fadeOut("slow");
          }),
          t("#modal-menu select.custom-select").customSelect();
      },
      setupModalLoginRegister: function () {
        var e = [];
        e.push(".product-img-box"),
          e.push(".zoomContainer"),
          e.push(".product-options"),
          e.push("#overlay"),
          e.push("#modal-login-register"),
          e.push(".customer-account-forgotpassword");
        for (var i = "", n = 0; n < e.length; n++) i = i + e[n] + ", ";
        (i = i.substring(0, i.length - 2)),
          t("body").click(function (e) {
            try {
              forceModalOnClick &&
                (t(e.target).parents(i).length ||
                  (App.Modal.showModal("login-register"),
                  e.stopPropagation(),
                  e.preventDefault()));
            } catch (n) {}
          });
      },
      setupProduct: function () {
        this.setupConfigurableOptions(),
          this.setupTiles(".catalog-product-view .boutique"),
          this.setupProductCarouselContainer(),
          this.setupProductCarouselNav();
        var e = this;
        t(window).on("resize", function () {
          e.setupTiles(".catalog-product-view .boutique"),
            e.setupProductCarouselContainer();
        }),
          t(".tabs-product-description").tabs();
      },
      setupProductCarouselContainer: function () {
        var e = ".catalog-product-view .carousel-mobile";
        t(e + " img").each(function () {
          t(this).height("auto");
        }),
          t(e).data("numToLoad", t(e + " img").length),
          t(e).data("maxHeight", 0),
          t(e + " img").each(function () {
            t("<img />", { src: t(this).attr("src") }).load(function () {
              var i = t(e).data("numToLoad") - 1;
              t(e).data("numToLoad", i),
                t(this).css({
                  position: "absolute",
                  visibility: "hidden",
                  display: "block",
                  width: t(e).width(),
                }),
                t("body").prepend(t(this)),
                t(this).height() > t(e).data("maxHeight") &&
                  t(e).data("maxHeight", t(this).height()),
                t(this).remove(),
                0 == i && t(e).height(t(e).data("maxHeight"));
            });
          });
      },
      setupTiles: function (e) {
        t(e + " img").each(function () {
          t(this).height("auto");
        }),
          t(e).data("numToLoad", t(e + " img").length),
          t(e + " img").each(function () {
            t("<img />", { src: t(this).attr("src") }).load(function () {
              var i = t(e).data("numToLoad") - 1;
              t(e).data("numToLoad", i),
                0 == i &&
                  t(e + " img").each(function () {
                    t(this).height(t(e).height());
                  });
            });
          });
      },
      setupTopNav: function () {
        this.setupTopNavDropdown("men"), this.setupTopNavDropdown("women");
      },
      setupTopNavDropdown: function (e) {
        var i = t("#header-dropdowns .dropdown." + e),
          n = t("#header .page-header-container .links ." + e);
        "undefined" == typeof i.data("hover-link") &&
          (i.data("hover-link", !1),
          i.css(
            "top",
            parseInt(t("#header .left-container .wrapper").position().top) + 47
          ),
          i.css("left", parseInt(n.offset().left))),
          "undefined" == typeof i.data("hover-dropdown") &&
            i.data("hover-dropdown", !1),
          n.unbind("hover").hover(
            function () {
              i.data("hover-link", !0);
            },
            function () {
              i.data("hover-link", !1);
            }
          ),
          i.unbind("hover").hover(
            function () {
              i.data("hover-dropdown", !0);
            },
            function () {
              i.data("hover-dropdown", !1);
            }
          ),
          i.hover(function () {
            i.data("hover-link") || i.data("hover-dropdown")
              ? i.show()
              : i.hide();
          }),
          n.hover(function () {
            i.data("hover-link") || i.data("hover-dropdown")
              ? i.show()
              : i.hide();
          });
      },
      qtyButtons: function () {
        var e =
          '<button class="qty-control" value="update_qty" name="update_cart_action" type="submit"></button>';
        t(".cart .qty")
          .focus(function () {
            t(this).siblings(".btn-update").hide();
          })
          .before(e)
          .after(e)
          .prev(".qty-control")
          .addClass("decr")
          .text("<")
          .end()
          .next(".qty-control")
          .addClass("incr")
          .text(">")
          .end(),
          t(".qty-control").click(function (e) {
            var i = t(this),
              n = parseInt(i.siblings(".qty").val());
            i.hasClass("incr") && i.prev(".qty").val(n + 1),
              i.hasClass("decr") && i.next(".qty").val(n - 1),
              i.parents("form").submit(),
              e.preventDefault();
          });
      },
      setupAccountNav: function () {
        t(window).scroll(function () {
          var e = t(".main-container").outerHeight(),
            i = t(".account-sidebar .block-content").height(),
            n = e - i - 110,
            s = t(".account-sidebar").height();
          t(".my-account").css("min-height", s),
            t(window).scrollTop() > 85 && t(window).scrollTop() < n
              ? (t(".account-sidebar .block-account").addClass(
                  "account-nav-fixed"
                ),
                t(".account-sidebar .block-account").removeClass(
                  "account-nav-fixed-bottom"
                ))
              : t(window).scrollTop() > 85 && t(window).scrollTop() > n
              ? t(".account-sidebar .block-account").addClass(
                  "account-nav-fixed-bottom"
                )
              : (t(".account-sidebar .block-account").removeClass(
                  "account-nav-fixed"
                ),
                t(".account-sidebar .block-account").removeClass(
                  "account-nav-fixed-bottom"
                ));
        });
      },
      profileAlign: function () {
        var e = t(".skip-cart").width() + 45;
        t("#header-account").css("right", e);
      },
    };
    t(document).ready(function () {
      n.run(),
        e(),
        i(),
        t("#checkoutSteps select").customSelect(),
        t(".customer-navigation .close-nav").click(function () {
          t(".customer-navigation ul").css("display", "none"),
            t(".customer-navigation .contact-button").css("display", "none"),
            t(".customer-navigation .close-nav").css("display", "none");
        }),
        t(".customer-navigation .subtitle").click(function () {
          t(window).width() < 768 &&
            ("none" == t(".customer-navigation ul").css("display")
              ? (t(".customer-navigation ul").css("display", "block"),
                t(".customer-navigation .contact-button").css(
                  "display",
                  "block"
                ),
                t(".customer-navigation .subtitle").addClass("bactive"),
                t(".customer-navigation .close-nav").css("display", "block"))
              : (t(".customer-navigation ul").css("display", "none"),
                t(".customer-navigation .contact-button").css(
                  "display",
                  "none"
                ),
                t(".customer-navigation .subtitle").removeClass("bactive"),
                t(".customer-navigation .close-nav").css("display", "none")));
        }),
        t(document).mouseup(function (e) {
          var i = t(".block-cart");
          i.hasClass("skip-active") &&
            (i.is(e.target) ||
              0 !== i.has(e.target).length ||
              (i.removeClass("skip-active"),
              t(".skip-cart").removeClass("skip-active")));
        });
    });
  })(jQuery),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define([], e)
      : "object" == typeof exports
      ? (module.exports = e())
      : (t.Handlebars = e());
  })(this, function () {
    var t = (function () {
        "use strict";
        function t(t) {
          return l[t];
        }
        function e(t) {
          for (var e = 1; e < arguments.length; e++)
            for (var i in arguments[e])
              Object.prototype.hasOwnProperty.call(arguments[e], i) &&
                (t[i] = arguments[e][i]);
          return t;
        }
        function i(t, e) {
          for (var i = 0, n = t.length; n > i; i++) if (t[i] === e) return i;
          return -1;
        }
        function n(e) {
          return e && e.toHTML
            ? e.toHTML()
            : null == e
            ? ""
            : e
            ? ((e = "" + e), h.test(e) ? e.replace(u, t) : e)
            : e + "";
        }
        function s(t) {
          return t || 0 === t ? (p(t) && 0 === t.length ? !0 : !1) : !0;
        }
        function o(t, e) {
          return (t.path = e), t;
        }
        function r(t, e) {
          return (t ? t + "." : "") + e;
        }
        var a = {},
          l = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;",
          },
          u = /[&<>"'`]/g,
          h = /[&<>"'`]/;
        a.extend = e;
        var c = Object.prototype.toString;
        a.toString = c;
        var d = function (t) {
          return "function" == typeof t;
        };
        d(/x/) &&
          (d = function (t) {
            return "function" == typeof t && "[object Function]" === c.call(t);
          });
        var d;
        a.isFunction = d;
        var p =
          Array.isArray ||
          function (t) {
            return t && "object" == typeof t
              ? "[object Array]" === c.call(t)
              : !1;
          };
        return (
          (a.isArray = p),
          (a.indexOf = i),
          (a.escapeExpression = n),
          (a.isEmpty = s),
          (a.blockParams = o),
          (a.appendContextPath = r),
          a
        );
      })(),
      e = (function () {
        "use strict";
        function t(t, e) {
          var n,
            s,
            o = e && e.loc;
          o &&
            ((n = o.start.line),
            (s = o.start.column),
            (t += " - " + n + ":" + s));
          for (
            var r = Error.prototype.constructor.call(this, t), a = 0;
            a < i.length;
            a++
          )
            this[i[a]] = r[i[a]];
          o && ((this.lineNumber = n), (this.column = s));
        }
        var e,
          i = [
            "description",
            "fileName",
            "lineNumber",
            "message",
            "name",
            "number",
            "stack",
          ];
        return (t.prototype = new Error()), (e = t);
      })(),
      i = (function (t, e) {
        "use strict";
        function i(t, e) {
          (this.helpers = t || {}), (this.partials = e || {}), n(this);
        }
        function n(t) {
          t.registerHelper("helperMissing", function () {
            if (1 === arguments.length) return void 0;
            throw new r(
              "Missing helper: '" + arguments[arguments.length - 1].name + "'"
            );
          }),
            t.registerHelper("blockHelperMissing", function (e, i) {
              var n = i.inverse,
                s = i.fn;
              if (e === !0) return s(this);
              if (e === !1 || null == e) return n(this);
              if (h(e))
                return e.length > 0
                  ? (i.ids && (i.ids = [i.name]), t.helpers.each(e, i))
                  : n(this);
              if (i.data && i.ids) {
                var r = g(i.data);
                (r.contextPath = o.appendContextPath(
                  i.data.contextPath,
                  i.name
                )),
                  (i = { data: r });
              }
              return s(e, i);
            }),
            t.registerHelper("each", function (t, e) {
              function i(e, i, r) {
                n &&
                  ((n.key = e),
                  (n.index = i),
                  (n.first = 0 === i),
                  (n.last = !!r),
                  s && (n.contextPath = s + e)),
                  (d += a(t[e], {
                    data: n,
                    blockParams: o.blockParams([t[e], e], [s + e, null]),
                  }));
              }
              if (!e) throw new r("Must pass iterator to #each");
              var n,
                s,
                a = e.fn,
                l = e.inverse,
                u = 0,
                d = "";
              if (
                (e.data &&
                  e.ids &&
                  (s = o.appendContextPath(e.data.contextPath, e.ids[0]) + "."),
                c(t) && (t = t.call(this)),
                e.data && (n = g(e.data)),
                t && "object" == typeof t)
              )
                if (h(t))
                  for (var p = t.length; p > u; u++)
                    i(u, u, u === t.length - 1);
                else {
                  var f;
                  for (var m in t)
                    t.hasOwnProperty(m) && (f && i(f, u - 1), (f = m), u++);
                  f && i(f, u - 1, !0);
                }
              return 0 === u && (d = l(this)), d;
            }),
            t.registerHelper("if", function (t, e) {
              return (
                c(t) && (t = t.call(this)),
                (!e.hash.includeZero && !t) || o.isEmpty(t)
                  ? e.inverse(this)
                  : e.fn(this)
              );
            }),
            t.registerHelper("unless", function (e, i) {
              return t.helpers["if"].call(this, e, {
                fn: i.inverse,
                inverse: i.fn,
                hash: i.hash,
              });
            }),
            t.registerHelper("with", function (t, e) {
              c(t) && (t = t.call(this));
              var i = e.fn;
              if (o.isEmpty(t)) return e.inverse(this);
              if (e.data && e.ids) {
                var n = g(e.data);
                (n.contextPath = o.appendContextPath(
                  e.data.contextPath,
                  e.ids[0]
                )),
                  (e = { data: n });
              }
              return i(t, e);
            }),
            t.registerHelper("log", function (e, i) {
              var n =
                i.data && null != i.data.level ? parseInt(i.data.level, 10) : 1;
              t.log(n, e);
            }),
            t.registerHelper("lookup", function (t, e) {
              return t && t[e];
            });
        }
        var s = {},
          o = t,
          r = e,
          a = "3.0.0";
        s.VERSION = a;
        var l = 6;
        s.COMPILER_REVISION = l;
        var u = {
          1: "<= 1.0.rc.2",
          2: "== 1.0.0-rc.3",
          3: "== 1.0.0-rc.4",
          4: "== 1.x.x",
          5: "== 2.0.0-alpha.x",
          6: ">= 2.0.0-beta.1",
        };
        s.REVISION_CHANGES = u;
        var h = o.isArray,
          c = o.isFunction,
          d = o.toString,
          p = "[object Object]";
        (s.HandlebarsEnvironment = i),
          (i.prototype = {
            constructor: i,
            logger: f,
            log: m,
            registerHelper: function (t, e) {
              if (d.call(t) === p) {
                if (e) throw new r("Arg not supported with multiple helpers");
                o.extend(this.helpers, t);
              } else this.helpers[t] = e;
            },
            unregisterHelper: function (t) {
              delete this.helpers[t];
            },
            registerPartial: function (t, e) {
              if (d.call(t) === p) o.extend(this.partials, t);
              else {
                if ("undefined" == typeof e)
                  throw new r("Attempting to register a partial as undefined");
                this.partials[t] = e;
              }
            },
            unregisterPartial: function (t) {
              delete this.partials[t];
            },
          });
        var f = {
          methodMap: { 0: "debug", 1: "info", 2: "warn", 3: "error" },
          DEBUG: 0,
          INFO: 1,
          WARN: 2,
          ERROR: 3,
          level: 1,
          log: function (t, e) {
            if ("undefined" != typeof console && f.level <= t) {
              var i = f.methodMap[t];
              (console[i] || console.log).call(console, e);
            }
          },
        };
        s.logger = f;
        var m = f.log;
        s.log = m;
        var g = function (t) {
          var e = o.extend({}, t);
          return (e._parent = t), e;
        };
        return (s.createFrame = g), s;
      })(t, e),
      n = (function () {
        "use strict";
        function t(t) {
          this.string = t;
        }
        var e;
        return (
          (t.prototype.toString = t.prototype.toHTML =
            function () {
              return "" + this.string;
            }),
          (e = t)
        );
      })(),
      s = (function (t, e, i) {
        "use strict";
        function n(t) {
          var e = (t && t[0]) || 1,
            i = p;
          if (e !== i) {
            if (i > e) {
              var n = f[i],
                s = f[e];
              throw new d(
                "Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" +
                  n +
                  ") or downgrade your runtime to an older version (" +
                  s +
                  ")."
              );
            }
            throw new d(
              "Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" +
                t[1] +
                ")."
            );
          }
        }
        function s(t, e) {
          if (!e) throw new d("No environment passed to template");
          if (!t || !t.main)
            throw new d("Unknown template object: " + typeof t);
          e.VM.checkRevision(t.compiler);
          var i = function (i, n, s) {
              s.hash && (n = c.extend({}, n, s.hash)),
                (i = e.VM.resolvePartial.call(this, i, n, s));
              var o = e.VM.invokePartial.call(this, i, n, s);
              if (
                (null == o &&
                  e.compile &&
                  ((s.partials[s.name] = e.compile(i, t.compilerOptions, e)),
                  (o = s.partials[s.name](n, s))),
                null != o)
              ) {
                if (s.indent) {
                  for (
                    var r = o.split("\n"), a = 0, l = r.length;
                    l > a && (r[a] || a + 1 !== l);
                    a++
                  )
                    r[a] = s.indent + r[a];
                  o = r.join("\n");
                }
                return o;
              }
              throw new d(
                "The partial " +
                  s.name +
                  " could not be compiled when running in runtime-only mode"
              );
            },
            n = {
              strict: function (t, e) {
                if (!(e in t)) throw new d('"' + e + '" not defined in ' + t);
                return t[e];
              },
              lookup: function (t, e) {
                for (var i = t.length, n = 0; i > n; n++)
                  if (t[n] && null != t[n][e]) return t[n][e];
              },
              lambda: function (t, e) {
                return "function" == typeof t ? t.call(e) : t;
              },
              escapeExpression: c.escapeExpression,
              invokePartial: i,
              fn: function (e) {
                return t[e];
              },
              programs: [],
              program: function (t, e, i, n, s) {
                var r = this.programs[t],
                  a = this.fn(t);
                return (
                  e || s || n || i
                    ? (r = o(this, t, a, e, i, n, s))
                    : r || (r = this.programs[t] = o(this, t, a)),
                  r
                );
              },
              data: function (t, e) {
                for (; t && e--; ) t = t._parent;
                return t;
              },
              merge: function (t, e) {
                var i = t || e;
                return t && e && t !== e && (i = c.extend({}, e, t)), i;
              },
              noop: e.VM.noop,
              compilerInfo: t.compiler,
            },
            s = function (e, i) {
              i = i || {};
              var o = i.data;
              s._setup(i), !i.partial && t.useData && (o = u(e, o));
              var r,
                a = t.useBlockParams ? [] : void 0;
              return (
                t.useDepths && (r = i.depths ? [e].concat(i.depths) : [e]),
                t.main.call(n, e, n.helpers, n.partials, o, a, r)
              );
            };
          return (
            (s.isTop = !0),
            (s._setup = function (i) {
              i.partial
                ? ((n.helpers = i.helpers), (n.partials = i.partials))
                : ((n.helpers = n.merge(i.helpers, e.helpers)),
                  t.usePartial &&
                    (n.partials = n.merge(i.partials, e.partials)));
            }),
            (s._child = function (e, i, s, r) {
              if (t.useBlockParams && !s) throw new d("must pass block params");
              if (t.useDepths && !r) throw new d("must pass parent depths");
              return o(n, e, t[e], i, 0, s, r);
            }),
            s
          );
        }
        function o(t, e, i, n, s, o, r) {
          var a = function (e, s) {
            return (
              (s = s || {}),
              i.call(
                t,
                e,
                t.helpers,
                t.partials,
                s.data || n,
                o && [s.blockParams].concat(o),
                r && [e].concat(r)
              )
            );
          };
          return (
            (a.program = e),
            (a.depth = r ? r.length : 0),
            (a.blockParams = s || 0),
            a
          );
        }
        function r(t, e, i) {
          return (
            t
              ? t.call || i.name || ((i.name = t), (t = i.partials[t]))
              : (t = i.partials[i.name]),
            t
          );
        }
        function a(t, e, i) {
          if (((i.partial = !0), void 0 === t))
            throw new d("The partial " + i.name + " could not be found");
          return t instanceof Function ? t(e, i) : void 0;
        }
        function l() {
          return "";
        }
        function u(t, e) {
          return (e && "root" in e) || ((e = e ? m(e) : {}), (e.root = t)), e;
        }
        var h = {},
          c = t,
          d = e,
          p = i.COMPILER_REVISION,
          f = i.REVISION_CHANGES,
          m = i.createFrame;
        return (
          (h.checkRevision = n),
          (h.template = s),
          (h.program = o),
          (h.resolvePartial = r),
          (h.invokePartial = a),
          (h.noop = l),
          h
        );
      })(t, e, i),
      o = (function (t, e, i, n, s) {
        "use strict";
        var o,
          r = t,
          a = e,
          l = i,
          u = n,
          h = s,
          c = function () {
            var t = new r.HandlebarsEnvironment();
            return (
              u.extend(t, r),
              (t.SafeString = a),
              (t.Exception = l),
              (t.Utils = u),
              (t.escapeExpression = u.escapeExpression),
              (t.VM = h),
              (t.template = function (e) {
                return h.template(e, t);
              }),
              t
            );
          },
          d = c();
        d.create = c;
        var p = "undefined" != typeof global ? global : window,
          f = p.Handlebars;
        return (
          (d.noConflict = function () {
            p.Handlebars === d && (p.Handlebars = f);
          }),
          (d["default"] = d),
          (o = d)
        );
      })(i, n, e, t, s),
      r = (function () {
        "use strict";
        var t,
          e = {
            Program: function (t, e, i, n) {
              (this.loc = n),
                (this.type = "Program"),
                (this.body = t),
                (this.blockParams = e),
                (this.strip = i);
            },
            MustacheStatement: function (t, e, i, n, s, o) {
              (this.loc = o),
                (this.type = "MustacheStatement"),
                (this.path = t),
                (this.params = e || []),
                (this.hash = i),
                (this.escaped = n),
                (this.strip = s);
            },
            BlockStatement: function (t, e, i, n, s, o, r, a, l) {
              (this.loc = l),
                (this.type = "BlockStatement"),
                (this.path = t),
                (this.params = e || []),
                (this.hash = i),
                (this.program = n),
                (this.inverse = s),
                (this.openStrip = o),
                (this.inverseStrip = r),
                (this.closeStrip = a);
            },
            PartialStatement: function (t, e, i, n, s) {
              (this.loc = s),
                (this.type = "PartialStatement"),
                (this.name = t),
                (this.params = e || []),
                (this.hash = i),
                (this.indent = ""),
                (this.strip = n);
            },
            ContentStatement: function (t, e) {
              (this.loc = e),
                (this.type = "ContentStatement"),
                (this.original = this.value = t);
            },
            CommentStatement: function (t, e, i) {
              (this.loc = i),
                (this.type = "CommentStatement"),
                (this.value = t),
                (this.strip = e);
            },
            SubExpression: function (t, e, i, n) {
              (this.loc = n),
                (this.type = "SubExpression"),
                (this.path = t),
                (this.params = e || []),
                (this.hash = i);
            },
            PathExpression: function (t, e, i, n, s) {
              (this.loc = s),
                (this.type = "PathExpression"),
                (this.data = t),
                (this.original = n),
                (this.parts = i),
                (this.depth = e);
            },
            StringLiteral: function (t, e) {
              (this.loc = e),
                (this.type = "StringLiteral"),
                (this.original = this.value = t);
            },
            NumberLiteral: function (t, e) {
              (this.loc = e),
                (this.type = "NumberLiteral"),
                (this.original = this.value = Number(t));
            },
            BooleanLiteral: function (t, e) {
              (this.loc = e),
                (this.type = "BooleanLiteral"),
                (this.original = this.value = "true" === t);
            },
            Hash: function (t, e) {
              (this.loc = e), (this.type = "Hash"), (this.pairs = t);
            },
            HashPair: function (t, e, i) {
              (this.loc = i),
                (this.type = "HashPair"),
                (this.key = t),
                (this.value = e);
            },
            helpers: {
              helperExpression: function (t) {
                return !(
                  "SubExpression" !== t.type &&
                  !t.params.length &&
                  !t.hash
                );
              },
              scopedId: function (t) {
                return /^\.|this\b/.test(t.original);
              },
              simpleId: function (t) {
                return (
                  1 === t.parts.length && !e.helpers.scopedId(t) && !t.depth
                );
              },
            },
          };
        return (t = e);
      })(),
      a = (function () {
        "use strict";
        var t,
          e = (function () {
            function t() {
              this.yy = {};
            }
            var e = {
                trace: function () {},
                yy: {},
                symbols_: {
                  error: 2,
                  root: 3,
                  program: 4,
                  EOF: 5,
                  program_repetition0: 6,
                  statement: 7,
                  mustache: 8,
                  block: 9,
                  rawBlock: 10,
                  partial: 11,
                  content: 12,
                  COMMENT: 13,
                  CONTENT: 14,
                  openRawBlock: 15,
                  END_RAW_BLOCK: 16,
                  OPEN_RAW_BLOCK: 17,
                  helperName: 18,
                  openRawBlock_repetition0: 19,
                  openRawBlock_option0: 20,
                  CLOSE_RAW_BLOCK: 21,
                  openBlock: 22,
                  block_option0: 23,
                  closeBlock: 24,
                  openInverse: 25,
                  block_option1: 26,
                  OPEN_BLOCK: 27,
                  openBlock_repetition0: 28,
                  openBlock_option0: 29,
                  openBlock_option1: 30,
                  CLOSE: 31,
                  OPEN_INVERSE: 32,
                  openInverse_repetition0: 33,
                  openInverse_option0: 34,
                  openInverse_option1: 35,
                  openInverseChain: 36,
                  OPEN_INVERSE_CHAIN: 37,
                  openInverseChain_repetition0: 38,
                  openInverseChain_option0: 39,
                  openInverseChain_option1: 40,
                  inverseAndProgram: 41,
                  INVERSE: 42,
                  inverseChain: 43,
                  inverseChain_option0: 44,
                  OPEN_ENDBLOCK: 45,
                  OPEN: 46,
                  mustache_repetition0: 47,
                  mustache_option0: 48,
                  OPEN_UNESCAPED: 49,
                  mustache_repetition1: 50,
                  mustache_option1: 51,
                  CLOSE_UNESCAPED: 52,
                  OPEN_PARTIAL: 53,
                  partialName: 54,
                  partial_repetition0: 55,
                  partial_option0: 56,
                  param: 57,
                  sexpr: 58,
                  OPEN_SEXPR: 59,
                  sexpr_repetition0: 60,
                  sexpr_option0: 61,
                  CLOSE_SEXPR: 62,
                  hash: 63,
                  hash_repetition_plus0: 64,
                  hashSegment: 65,
                  ID: 66,
                  EQUALS: 67,
                  blockParams: 68,
                  OPEN_BLOCK_PARAMS: 69,
                  blockParams_repetition_plus0: 70,
                  CLOSE_BLOCK_PARAMS: 71,
                  path: 72,
                  dataName: 73,
                  STRING: 74,
                  NUMBER: 75,
                  BOOLEAN: 76,
                  DATA: 77,
                  pathSegments: 78,
                  SEP: 79,
                  $accept: 0,
                  $end: 1,
                },
                terminals_: {
                  2: "error",
                  5: "EOF",
                  13: "COMMENT",
                  14: "CONTENT",
                  16: "END_RAW_BLOCK",
                  17: "OPEN_RAW_BLOCK",
                  21: "CLOSE_RAW_BLOCK",
                  27: "OPEN_BLOCK",
                  31: "CLOSE",
                  32: "OPEN_INVERSE",
                  37: "OPEN_INVERSE_CHAIN",
                  42: "INVERSE",
                  45: "OPEN_ENDBLOCK",
                  46: "OPEN",
                  49: "OPEN_UNESCAPED",
                  52: "CLOSE_UNESCAPED",
                  53: "OPEN_PARTIAL",
                  59: "OPEN_SEXPR",
                  62: "CLOSE_SEXPR",
                  66: "ID",
                  67: "EQUALS",
                  69: "OPEN_BLOCK_PARAMS",
                  71: "CLOSE_BLOCK_PARAMS",
                  74: "STRING",
                  75: "NUMBER",
                  76: "BOOLEAN",
                  77: "DATA",
                  79: "SEP",
                },
                productions_: [
                  0,
                  [3, 2],
                  [4, 1],
                  [7, 1],
                  [7, 1],
                  [7, 1],
                  [7, 1],
                  [7, 1],
                  [7, 1],
                  [12, 1],
                  [10, 3],
                  [15, 5],
                  [9, 4],
                  [9, 4],
                  [22, 6],
                  [25, 6],
                  [36, 6],
                  [41, 2],
                  [43, 3],
                  [43, 1],
                  [24, 3],
                  [8, 5],
                  [8, 5],
                  [11, 5],
                  [57, 1],
                  [57, 1],
                  [58, 5],
                  [63, 1],
                  [65, 3],
                  [68, 3],
                  [18, 1],
                  [18, 1],
                  [18, 1],
                  [18, 1],
                  [18, 1],
                  [54, 1],
                  [54, 1],
                  [73, 2],
                  [72, 1],
                  [78, 3],
                  [78, 1],
                  [6, 0],
                  [6, 2],
                  [19, 0],
                  [19, 2],
                  [20, 0],
                  [20, 1],
                  [23, 0],
                  [23, 1],
                  [26, 0],
                  [26, 1],
                  [28, 0],
                  [28, 2],
                  [29, 0],
                  [29, 1],
                  [30, 0],
                  [30, 1],
                  [33, 0],
                  [33, 2],
                  [34, 0],
                  [34, 1],
                  [35, 0],
                  [35, 1],
                  [38, 0],
                  [38, 2],
                  [39, 0],
                  [39, 1],
                  [40, 0],
                  [40, 1],
                  [44, 0],
                  [44, 1],
                  [47, 0],
                  [47, 2],
                  [48, 0],
                  [48, 1],
                  [50, 0],
                  [50, 2],
                  [51, 0],
                  [51, 1],
                  [55, 0],
                  [55, 2],
                  [56, 0],
                  [56, 1],
                  [60, 0],
                  [60, 2],
                  [61, 0],
                  [61, 1],
                  [64, 1],
                  [64, 2],
                  [70, 1],
                  [70, 2],
                ],
                performAction: function (t, e, i, n, s, o) {
                  var r = o.length - 1;
                  switch (s) {
                    case 1:
                      return o[r - 1];
                    case 2:
                      this.$ = new n.Program(
                        o[r],
                        null,
                        {},
                        n.locInfo(this._$)
                      );
                      break;
                    case 3:
                      this.$ = o[r];
                      break;
                    case 4:
                      this.$ = o[r];
                      break;
                    case 5:
                      this.$ = o[r];
                      break;
                    case 6:
                      this.$ = o[r];
                      break;
                    case 7:
                      this.$ = o[r];
                      break;
                    case 8:
                      this.$ = new n.CommentStatement(
                        n.stripComment(o[r]),
                        n.stripFlags(o[r], o[r]),
                        n.locInfo(this._$)
                      );
                      break;
                    case 9:
                      this.$ = new n.ContentStatement(o[r], n.locInfo(this._$));
                      break;
                    case 10:
                      this.$ = n.prepareRawBlock(
                        o[r - 2],
                        o[r - 1],
                        o[r],
                        this._$
                      );
                      break;
                    case 11:
                      this.$ = {
                        path: o[r - 3],
                        params: o[r - 2],
                        hash: o[r - 1],
                      };
                      break;
                    case 12:
                      this.$ = n.prepareBlock(
                        o[r - 3],
                        o[r - 2],
                        o[r - 1],
                        o[r],
                        !1,
                        this._$
                      );
                      break;
                    case 13:
                      this.$ = n.prepareBlock(
                        o[r - 3],
                        o[r - 2],
                        o[r - 1],
                        o[r],
                        !0,
                        this._$
                      );
                      break;
                    case 14:
                      this.$ = {
                        path: o[r - 4],
                        params: o[r - 3],
                        hash: o[r - 2],
                        blockParams: o[r - 1],
                        strip: n.stripFlags(o[r - 5], o[r]),
                      };
                      break;
                    case 15:
                      this.$ = {
                        path: o[r - 4],
                        params: o[r - 3],
                        hash: o[r - 2],
                        blockParams: o[r - 1],
                        strip: n.stripFlags(o[r - 5], o[r]),
                      };
                      break;
                    case 16:
                      this.$ = {
                        path: o[r - 4],
                        params: o[r - 3],
                        hash: o[r - 2],
                        blockParams: o[r - 1],
                        strip: n.stripFlags(o[r - 5], o[r]),
                      };
                      break;
                    case 17:
                      this.$ = {
                        strip: n.stripFlags(o[r - 1], o[r - 1]),
                        program: o[r],
                      };
                      break;
                    case 18:
                      var a = n.prepareBlock(
                          o[r - 2],
                          o[r - 1],
                          o[r],
                          o[r],
                          !1,
                          this._$
                        ),
                        l = new n.Program([a], null, {}, n.locInfo(this._$));
                      (l.chained = !0),
                        (this.$ = {
                          strip: o[r - 2].strip,
                          program: l,
                          chain: !0,
                        });
                      break;
                    case 19:
                      this.$ = o[r];
                      break;
                    case 20:
                      this.$ = {
                        path: o[r - 1],
                        strip: n.stripFlags(o[r - 2], o[r]),
                      };
                      break;
                    case 21:
                      this.$ = n.prepareMustache(
                        o[r - 3],
                        o[r - 2],
                        o[r - 1],
                        o[r - 4],
                        n.stripFlags(o[r - 4], o[r]),
                        this._$
                      );
                      break;
                    case 22:
                      this.$ = n.prepareMustache(
                        o[r - 3],
                        o[r - 2],
                        o[r - 1],
                        o[r - 4],
                        n.stripFlags(o[r - 4], o[r]),
                        this._$
                      );
                      break;
                    case 23:
                      this.$ = new n.PartialStatement(
                        o[r - 3],
                        o[r - 2],
                        o[r - 1],
                        n.stripFlags(o[r - 4], o[r]),
                        n.locInfo(this._$)
                      );
                      break;
                    case 24:
                      this.$ = o[r];
                      break;
                    case 25:
                      this.$ = o[r];
                      break;
                    case 26:
                      this.$ = new n.SubExpression(
                        o[r - 3],
                        o[r - 2],
                        o[r - 1],
                        n.locInfo(this._$)
                      );
                      break;
                    case 27:
                      this.$ = new n.Hash(o[r], n.locInfo(this._$));
                      break;
                    case 28:
                      this.$ = new n.HashPair(
                        o[r - 2],
                        o[r],
                        n.locInfo(this._$)
                      );
                      break;
                    case 29:
                      this.$ = o[r - 1];
                      break;
                    case 30:
                      this.$ = o[r];
                      break;
                    case 31:
                      this.$ = o[r];
                      break;
                    case 32:
                      this.$ = new n.StringLiteral(o[r], n.locInfo(this._$));
                      break;
                    case 33:
                      this.$ = new n.NumberLiteral(o[r], n.locInfo(this._$));
                      break;
                    case 34:
                      this.$ = new n.BooleanLiteral(o[r], n.locInfo(this._$));
                      break;
                    case 35:
                      this.$ = o[r];
                      break;
                    case 36:
                      this.$ = o[r];
                      break;
                    case 37:
                      this.$ = n.preparePath(!0, o[r], this._$);
                      break;
                    case 38:
                      this.$ = n.preparePath(!1, o[r], this._$);
                      break;
                    case 39:
                      o[r - 2].push({ part: o[r], separator: o[r - 1] }),
                        (this.$ = o[r - 2]);
                      break;
                    case 40:
                      this.$ = [{ part: o[r] }];
                      break;
                    case 41:
                      this.$ = [];
                      break;
                    case 42:
                      o[r - 1].push(o[r]);
                      break;
                    case 43:
                      this.$ = [];
                      break;
                    case 44:
                      o[r - 1].push(o[r]);
                      break;
                    case 51:
                      this.$ = [];
                      break;
                    case 52:
                      o[r - 1].push(o[r]);
                      break;
                    case 57:
                      this.$ = [];
                      break;
                    case 58:
                      o[r - 1].push(o[r]);
                      break;
                    case 63:
                      this.$ = [];
                      break;
                    case 64:
                      o[r - 1].push(o[r]);
                      break;
                    case 71:
                      this.$ = [];
                      break;
                    case 72:
                      o[r - 1].push(o[r]);
                      break;
                    case 75:
                      this.$ = [];
                      break;
                    case 76:
                      o[r - 1].push(o[r]);
                      break;
                    case 79:
                      this.$ = [];
                      break;
                    case 80:
                      o[r - 1].push(o[r]);
                      break;
                    case 83:
                      this.$ = [];
                      break;
                    case 84:
                      o[r - 1].push(o[r]);
                      break;
                    case 87:
                      this.$ = [o[r]];
                      break;
                    case 88:
                      o[r - 1].push(o[r]);
                      break;
                    case 89:
                      this.$ = [o[r]];
                      break;
                    case 90:
                      o[r - 1].push(o[r]);
                  }
                },
                table: [
                  {
                    3: 1,
                    4: 2,
                    5: [2, 41],
                    6: 3,
                    13: [2, 41],
                    14: [2, 41],
                    17: [2, 41],
                    27: [2, 41],
                    32: [2, 41],
                    46: [2, 41],
                    49: [2, 41],
                    53: [2, 41],
                  },
                  { 1: [3] },
                  { 5: [1, 4] },
                  {
                    5: [2, 2],
                    7: 5,
                    8: 6,
                    9: 7,
                    10: 8,
                    11: 9,
                    12: 10,
                    13: [1, 11],
                    14: [1, 18],
                    15: 16,
                    17: [1, 21],
                    22: 14,
                    25: 15,
                    27: [1, 19],
                    32: [1, 20],
                    37: [2, 2],
                    42: [2, 2],
                    45: [2, 2],
                    46: [1, 12],
                    49: [1, 13],
                    53: [1, 17],
                  },
                  { 1: [2, 1] },
                  {
                    5: [2, 42],
                    13: [2, 42],
                    14: [2, 42],
                    17: [2, 42],
                    27: [2, 42],
                    32: [2, 42],
                    37: [2, 42],
                    42: [2, 42],
                    45: [2, 42],
                    46: [2, 42],
                    49: [2, 42],
                    53: [2, 42],
                  },
                  {
                    5: [2, 3],
                    13: [2, 3],
                    14: [2, 3],
                    17: [2, 3],
                    27: [2, 3],
                    32: [2, 3],
                    37: [2, 3],
                    42: [2, 3],
                    45: [2, 3],
                    46: [2, 3],
                    49: [2, 3],
                    53: [2, 3],
                  },
                  {
                    5: [2, 4],
                    13: [2, 4],
                    14: [2, 4],
                    17: [2, 4],
                    27: [2, 4],
                    32: [2, 4],
                    37: [2, 4],
                    42: [2, 4],
                    45: [2, 4],
                    46: [2, 4],
                    49: [2, 4],
                    53: [2, 4],
                  },
                  {
                    5: [2, 5],
                    13: [2, 5],
                    14: [2, 5],
                    17: [2, 5],
                    27: [2, 5],
                    32: [2, 5],
                    37: [2, 5],
                    42: [2, 5],
                    45: [2, 5],
                    46: [2, 5],
                    49: [2, 5],
                    53: [2, 5],
                  },
                  {
                    5: [2, 6],
                    13: [2, 6],
                    14: [2, 6],
                    17: [2, 6],
                    27: [2, 6],
                    32: [2, 6],
                    37: [2, 6],
                    42: [2, 6],
                    45: [2, 6],
                    46: [2, 6],
                    49: [2, 6],
                    53: [2, 6],
                  },
                  {
                    5: [2, 7],
                    13: [2, 7],
                    14: [2, 7],
                    17: [2, 7],
                    27: [2, 7],
                    32: [2, 7],
                    37: [2, 7],
                    42: [2, 7],
                    45: [2, 7],
                    46: [2, 7],
                    49: [2, 7],
                    53: [2, 7],
                  },
                  {
                    5: [2, 8],
                    13: [2, 8],
                    14: [2, 8],
                    17: [2, 8],
                    27: [2, 8],
                    32: [2, 8],
                    37: [2, 8],
                    42: [2, 8],
                    45: [2, 8],
                    46: [2, 8],
                    49: [2, 8],
                    53: [2, 8],
                  },
                  {
                    18: 22,
                    66: [1, 30],
                    72: 23,
                    73: 24,
                    74: [1, 25],
                    75: [1, 26],
                    76: [1, 27],
                    77: [1, 29],
                    78: 28,
                  },
                  {
                    18: 31,
                    66: [1, 30],
                    72: 23,
                    73: 24,
                    74: [1, 25],
                    75: [1, 26],
                    76: [1, 27],
                    77: [1, 29],
                    78: 28,
                  },
                  {
                    4: 32,
                    6: 3,
                    13: [2, 41],
                    14: [2, 41],
                    17: [2, 41],
                    27: [2, 41],
                    32: [2, 41],
                    37: [2, 41],
                    42: [2, 41],
                    45: [2, 41],
                    46: [2, 41],
                    49: [2, 41],
                    53: [2, 41],
                  },
                  {
                    4: 33,
                    6: 3,
                    13: [2, 41],
                    14: [2, 41],
                    17: [2, 41],
                    27: [2, 41],
                    32: [2, 41],
                    42: [2, 41],
                    45: [2, 41],
                    46: [2, 41],
                    49: [2, 41],
                    53: [2, 41],
                  },
                  { 12: 34, 14: [1, 18] },
                  {
                    18: 36,
                    54: 35,
                    58: 37,
                    59: [1, 38],
                    66: [1, 30],
                    72: 23,
                    73: 24,
                    74: [1, 25],
                    75: [1, 26],
                    76: [1, 27],
                    77: [1, 29],
                    78: 28,
                  },
                  {
                    5: [2, 9],
                    13: [2, 9],
                    14: [2, 9],
                    16: [2, 9],
                    17: [2, 9],
                    27: [2, 9],
                    32: [2, 9],
                    37: [2, 9],
                    42: [2, 9],
                    45: [2, 9],
                    46: [2, 9],
                    49: [2, 9],
                    53: [2, 9],
                  },
                  {
                    18: 39,
                    66: [1, 30],
                    72: 23,
                    73: 24,
                    74: [1, 25],
                    75: [1, 26],
                    76: [1, 27],
                    77: [1, 29],
                    78: 28,
                  },
                  {
                    18: 40,
                    66: [1, 30],
                    72: 23,
                    73: 24,
                    74: [1, 25],
                    75: [1, 26],
                    76: [1, 27],
                    77: [1, 29],
                    78: 28,
                  },
                  {
                    18: 41,
                    66: [1, 30],
                    72: 23,
                    73: 24,
                    74: [1, 25],
                    75: [1, 26],
                    76: [1, 27],
                    77: [1, 29],
                    78: 28,
                  },
                  {
                    31: [2, 71],
                    47: 42,
                    59: [2, 71],
                    66: [2, 71],
                    74: [2, 71],
                    75: [2, 71],
                    76: [2, 71],
                    77: [2, 71],
                  },
                  {
                    21: [2, 30],
                    31: [2, 30],
                    52: [2, 30],
                    59: [2, 30],
                    62: [2, 30],
                    66: [2, 30],
                    69: [2, 30],
                    74: [2, 30],
                    75: [2, 30],
                    76: [2, 30],
                    77: [2, 30],
                  },
                  {
                    21: [2, 31],
                    31: [2, 31],
                    52: [2, 31],
                    59: [2, 31],
                    62: [2, 31],
                    66: [2, 31],
                    69: [2, 31],
                    74: [2, 31],
                    75: [2, 31],
                    76: [2, 31],
                    77: [2, 31],
                  },
                  {
                    21: [2, 32],
                    31: [2, 32],
                    52: [2, 32],
                    59: [2, 32],
                    62: [2, 32],
                    66: [2, 32],
                    69: [2, 32],
                    74: [2, 32],
                    75: [2, 32],
                    76: [2, 32],
                    77: [2, 32],
                  },
                  {
                    21: [2, 33],
                    31: [2, 33],
                    52: [2, 33],
                    59: [2, 33],
                    62: [2, 33],
                    66: [2, 33],
                    69: [2, 33],
                    74: [2, 33],
                    75: [2, 33],
                    76: [2, 33],
                    77: [2, 33],
                  },
                  {
                    21: [2, 34],
                    31: [2, 34],
                    52: [2, 34],
                    59: [2, 34],
                    62: [2, 34],
                    66: [2, 34],
                    69: [2, 34],
                    74: [2, 34],
                    75: [2, 34],
                    76: [2, 34],
                    77: [2, 34],
                  },
                  {
                    21: [2, 38],
                    31: [2, 38],
                    52: [2, 38],
                    59: [2, 38],
                    62: [2, 38],
                    66: [2, 38],
                    69: [2, 38],
                    74: [2, 38],
                    75: [2, 38],
                    76: [2, 38],
                    77: [2, 38],
                    79: [1, 43],
                  },
                  { 66: [1, 30], 78: 44 },
                  {
                    21: [2, 40],
                    31: [2, 40],
                    52: [2, 40],
                    59: [2, 40],
                    62: [2, 40],
                    66: [2, 40],
                    69: [2, 40],
                    74: [2, 40],
                    75: [2, 40],
                    76: [2, 40],
                    77: [2, 40],
                    79: [2, 40],
                  },
                  {
                    50: 45,
                    52: [2, 75],
                    59: [2, 75],
                    66: [2, 75],
                    74: [2, 75],
                    75: [2, 75],
                    76: [2, 75],
                    77: [2, 75],
                  },
                  {
                    23: 46,
                    36: 48,
                    37: [1, 50],
                    41: 49,
                    42: [1, 51],
                    43: 47,
                    45: [2, 47],
                  },
                  { 26: 52, 41: 53, 42: [1, 51], 45: [2, 49] },
                  { 16: [1, 54] },
                  {
                    31: [2, 79],
                    55: 55,
                    59: [2, 79],
                    66: [2, 79],
                    74: [2, 79],
                    75: [2, 79],
                    76: [2, 79],
                    77: [2, 79],
                  },
                  {
                    31: [2, 35],
                    59: [2, 35],
                    66: [2, 35],
                    74: [2, 35],
                    75: [2, 35],
                    76: [2, 35],
                    77: [2, 35],
                  },
                  {
                    31: [2, 36],
                    59: [2, 36],
                    66: [2, 36],
                    74: [2, 36],
                    75: [2, 36],
                    76: [2, 36],
                    77: [2, 36],
                  },
                  {
                    18: 56,
                    66: [1, 30],
                    72: 23,
                    73: 24,
                    74: [1, 25],
                    75: [1, 26],
                    76: [1, 27],
                    77: [1, 29],
                    78: 28,
                  },
                  {
                    28: 57,
                    31: [2, 51],
                    59: [2, 51],
                    66: [2, 51],
                    69: [2, 51],
                    74: [2, 51],
                    75: [2, 51],
                    76: [2, 51],
                    77: [2, 51],
                  },
                  {
                    31: [2, 57],
                    33: 58,
                    59: [2, 57],
                    66: [2, 57],
                    69: [2, 57],
                    74: [2, 57],
                    75: [2, 57],
                    76: [2, 57],
                    77: [2, 57],
                  },
                  {
                    19: 59,
                    21: [2, 43],
                    59: [2, 43],
                    66: [2, 43],
                    74: [2, 43],
                    75: [2, 43],
                    76: [2, 43],
                    77: [2, 43],
                  },
                  {
                    18: 63,
                    31: [2, 73],
                    48: 60,
                    57: 61,
                    58: 64,
                    59: [1, 38],
                    63: 62,
                    64: 65,
                    65: 66,
                    66: [1, 67],
                    72: 23,
                    73: 24,
                    74: [1, 25],
                    75: [1, 26],
                    76: [1, 27],
                    77: [1, 29],
                    78: 28,
                  },
                  { 66: [1, 68] },
                  {
                    21: [2, 37],
                    31: [2, 37],
                    52: [2, 37],
                    59: [2, 37],
                    62: [2, 37],
                    66: [2, 37],
                    69: [2, 37],
                    74: [2, 37],
                    75: [2, 37],
                    76: [2, 37],
                    77: [2, 37],
                    79: [1, 43],
                  },
                  {
                    18: 63,
                    51: 69,
                    52: [2, 77],
                    57: 70,
                    58: 64,
                    59: [1, 38],
                    63: 71,
                    64: 65,
                    65: 66,
                    66: [1, 67],
                    72: 23,
                    73: 24,
                    74: [1, 25],
                    75: [1, 26],
                    76: [1, 27],
                    77: [1, 29],
                    78: 28,
                  },
                  { 24: 72, 45: [1, 73] },
                  { 45: [2, 48] },
                  {
                    4: 74,
                    6: 3,
                    13: [2, 41],
                    14: [2, 41],
                    17: [2, 41],
                    27: [2, 41],
                    32: [2, 41],
                    37: [2, 41],
                    42: [2, 41],
                    45: [2, 41],
                    46: [2, 41],
                    49: [2, 41],
                    53: [2, 41],
                  },
                  { 45: [2, 19] },
                  {
                    18: 75,
                    66: [1, 30],
                    72: 23,
                    73: 24,
                    74: [1, 25],
                    75: [1, 26],
                    76: [1, 27],
                    77: [1, 29],
                    78: 28,
                  },
                  {
                    4: 76,
                    6: 3,
                    13: [2, 41],
                    14: [2, 41],
                    17: [2, 41],
                    27: [2, 41],
                    32: [2, 41],
                    45: [2, 41],
                    46: [2, 41],
                    49: [2, 41],
                    53: [2, 41],
                  },
                  { 24: 77, 45: [1, 73] },
                  { 45: [2, 50] },
                  {
                    5: [2, 10],
                    13: [2, 10],
                    14: [2, 10],
                    17: [2, 10],
                    27: [2, 10],
                    32: [2, 10],
                    37: [2, 10],
                    42: [2, 10],
                    45: [2, 10],
                    46: [2, 10],
                    49: [2, 10],
                    53: [2, 10],
                  },
                  {
                    18: 63,
                    31: [2, 81],
                    56: 78,
                    57: 79,
                    58: 64,
                    59: [1, 38],
                    63: 80,
                    64: 65,
                    65: 66,
                    66: [1, 67],
                    72: 23,
                    73: 24,
                    74: [1, 25],
                    75: [1, 26],
                    76: [1, 27],
                    77: [1, 29],
                    78: 28,
                  },
                  {
                    59: [2, 83],
                    60: 81,
                    62: [2, 83],
                    66: [2, 83],
                    74: [2, 83],
                    75: [2, 83],
                    76: [2, 83],
                    77: [2, 83],
                  },
                  {
                    18: 63,
                    29: 82,
                    31: [2, 53],
                    57: 83,
                    58: 64,
                    59: [1, 38],
                    63: 84,
                    64: 65,
                    65: 66,
                    66: [1, 67],
                    69: [2, 53],
                    72: 23,
                    73: 24,
                    74: [1, 25],
                    75: [1, 26],
                    76: [1, 27],
                    77: [1, 29],
                    78: 28,
                  },
                  {
                    18: 63,
                    31: [2, 59],
                    34: 85,
                    57: 86,
                    58: 64,
                    59: [1, 38],
                    63: 87,
                    64: 65,
                    65: 66,
                    66: [1, 67],
                    69: [2, 59],
                    72: 23,
                    73: 24,
                    74: [1, 25],
                    75: [1, 26],
                    76: [1, 27],
                    77: [1, 29],
                    78: 28,
                  },
                  {
                    18: 63,
                    20: 88,
                    21: [2, 45],
                    57: 89,
                    58: 64,
                    59: [1, 38],
                    63: 90,
                    64: 65,
                    65: 66,
                    66: [1, 67],
                    72: 23,
                    73: 24,
                    74: [1, 25],
                    75: [1, 26],
                    76: [1, 27],
                    77: [1, 29],
                    78: 28,
                  },
                  { 31: [1, 91] },
                  {
                    31: [2, 72],
                    59: [2, 72],
                    66: [2, 72],
                    74: [2, 72],
                    75: [2, 72],
                    76: [2, 72],
                    77: [2, 72],
                  },
                  { 31: [2, 74] },
                  {
                    21: [2, 24],
                    31: [2, 24],
                    52: [2, 24],
                    59: [2, 24],
                    62: [2, 24],
                    66: [2, 24],
                    69: [2, 24],
                    74: [2, 24],
                    75: [2, 24],
                    76: [2, 24],
                    77: [2, 24],
                  },
                  {
                    21: [2, 25],
                    31: [2, 25],
                    52: [2, 25],
                    59: [2, 25],
                    62: [2, 25],
                    66: [2, 25],
                    69: [2, 25],
                    74: [2, 25],
                    75: [2, 25],
                    76: [2, 25],
                    77: [2, 25],
                  },
                  {
                    21: [2, 27],
                    31: [2, 27],
                    52: [2, 27],
                    62: [2, 27],
                    65: 92,
                    66: [1, 93],
                    69: [2, 27],
                  },
                  {
                    21: [2, 87],
                    31: [2, 87],
                    52: [2, 87],
                    62: [2, 87],
                    66: [2, 87],
                    69: [2, 87],
                  },
                  {
                    21: [2, 40],
                    31: [2, 40],
                    52: [2, 40],
                    59: [2, 40],
                    62: [2, 40],
                    66: [2, 40],
                    67: [1, 94],
                    69: [2, 40],
                    74: [2, 40],
                    75: [2, 40],
                    76: [2, 40],
                    77: [2, 40],
                    79: [2, 40],
                  },
                  {
                    21: [2, 39],
                    31: [2, 39],
                    52: [2, 39],
                    59: [2, 39],
                    62: [2, 39],
                    66: [2, 39],
                    69: [2, 39],
                    74: [2, 39],
                    75: [2, 39],
                    76: [2, 39],
                    77: [2, 39],
                    79: [2, 39],
                  },
                  { 52: [1, 95] },
                  {
                    52: [2, 76],
                    59: [2, 76],
                    66: [2, 76],
                    74: [2, 76],
                    75: [2, 76],
                    76: [2, 76],
                    77: [2, 76],
                  },
                  { 52: [2, 78] },
                  {
                    5: [2, 12],
                    13: [2, 12],
                    14: [2, 12],
                    17: [2, 12],
                    27: [2, 12],
                    32: [2, 12],
                    37: [2, 12],
                    42: [2, 12],
                    45: [2, 12],
                    46: [2, 12],
                    49: [2, 12],
                    53: [2, 12],
                  },
                  {
                    18: 96,
                    66: [1, 30],
                    72: 23,
                    73: 24,
                    74: [1, 25],
                    75: [1, 26],
                    76: [1, 27],
                    77: [1, 29],
                    78: 28,
                  },
                  {
                    36: 48,
                    37: [1, 50],
                    41: 49,
                    42: [1, 51],
                    43: 98,
                    44: 97,
                    45: [2, 69],
                  },
                  {
                    31: [2, 63],
                    38: 99,
                    59: [2, 63],
                    66: [2, 63],
                    69: [2, 63],
                    74: [2, 63],
                    75: [2, 63],
                    76: [2, 63],
                    77: [2, 63],
                  },
                  { 45: [2, 17] },
                  {
                    5: [2, 13],
                    13: [2, 13],
                    14: [2, 13],
                    17: [2, 13],
                    27: [2, 13],
                    32: [2, 13],
                    37: [2, 13],
                    42: [2, 13],
                    45: [2, 13],
                    46: [2, 13],
                    49: [2, 13],
                    53: [2, 13],
                  },
                  { 31: [1, 100] },
                  {
                    31: [2, 80],
                    59: [2, 80],
                    66: [2, 80],
                    74: [2, 80],
                    75: [2, 80],
                    76: [2, 80],
                    77: [2, 80],
                  },
                  { 31: [2, 82] },
                  {
                    18: 63,
                    57: 102,
                    58: 64,
                    59: [1, 38],
                    61: 101,
                    62: [2, 85],
                    63: 103,
                    64: 65,
                    65: 66,
                    66: [1, 67],
                    72: 23,
                    73: 24,
                    74: [1, 25],
                    75: [1, 26],
                    76: [1, 27],
                    77: [1, 29],
                    78: 28,
                  },
                  { 30: 104, 31: [2, 55], 68: 105, 69: [1, 106] },
                  {
                    31: [2, 52],
                    59: [2, 52],
                    66: [2, 52],
                    69: [2, 52],
                    74: [2, 52],
                    75: [2, 52],
                    76: [2, 52],
                    77: [2, 52],
                  },
                  { 31: [2, 54], 69: [2, 54] },
                  { 31: [2, 61], 35: 107, 68: 108, 69: [1, 106] },
                  {
                    31: [2, 58],
                    59: [2, 58],
                    66: [2, 58],
                    69: [2, 58],
                    74: [2, 58],
                    75: [2, 58],
                    76: [2, 58],
                    77: [2, 58],
                  },
                  { 31: [2, 60], 69: [2, 60] },
                  { 21: [1, 109] },
                  {
                    21: [2, 44],
                    59: [2, 44],
                    66: [2, 44],
                    74: [2, 44],
                    75: [2, 44],
                    76: [2, 44],
                    77: [2, 44],
                  },
                  { 21: [2, 46] },
                  {
                    5: [2, 21],
                    13: [2, 21],
                    14: [2, 21],
                    17: [2, 21],
                    27: [2, 21],
                    32: [2, 21],
                    37: [2, 21],
                    42: [2, 21],
                    45: [2, 21],
                    46: [2, 21],
                    49: [2, 21],
                    53: [2, 21],
                  },
                  {
                    21: [2, 88],
                    31: [2, 88],
                    52: [2, 88],
                    62: [2, 88],
                    66: [2, 88],
                    69: [2, 88],
                  },
                  { 67: [1, 94] },
                  {
                    18: 63,
                    57: 110,
                    58: 64,
                    59: [1, 38],
                    66: [1, 30],
                    72: 23,
                    73: 24,
                    74: [1, 25],
                    75: [1, 26],
                    76: [1, 27],
                    77: [1, 29],
                    78: 28,
                  },
                  {
                    5: [2, 22],
                    13: [2, 22],
                    14: [2, 22],
                    17: [2, 22],
                    27: [2, 22],
                    32: [2, 22],
                    37: [2, 22],
                    42: [2, 22],
                    45: [2, 22],
                    46: [2, 22],
                    49: [2, 22],
                    53: [2, 22],
                  },
                  { 31: [1, 111] },
                  { 45: [2, 18] },
                  { 45: [2, 70] },
                  {
                    18: 63,
                    31: [2, 65],
                    39: 112,
                    57: 113,
                    58: 64,
                    59: [1, 38],
                    63: 114,
                    64: 65,
                    65: 66,
                    66: [1, 67],
                    69: [2, 65],
                    72: 23,
                    73: 24,
                    74: [1, 25],
                    75: [1, 26],
                    76: [1, 27],
                    77: [1, 29],
                    78: 28,
                  },
                  {
                    5: [2, 23],
                    13: [2, 23],
                    14: [2, 23],
                    17: [2, 23],
                    27: [2, 23],
                    32: [2, 23],
                    37: [2, 23],
                    42: [2, 23],
                    45: [2, 23],
                    46: [2, 23],
                    49: [2, 23],
                    53: [2, 23],
                  },
                  { 62: [1, 115] },
                  {
                    59: [2, 84],
                    62: [2, 84],
                    66: [2, 84],
                    74: [2, 84],
                    75: [2, 84],
                    76: [2, 84],
                    77: [2, 84],
                  },
                  { 62: [2, 86] },
                  { 31: [1, 116] },
                  { 31: [2, 56] },
                  { 66: [1, 118], 70: 117 },
                  { 31: [1, 119] },
                  { 31: [2, 62] },
                  { 14: [2, 11] },
                  {
                    21: [2, 28],
                    31: [2, 28],
                    52: [2, 28],
                    62: [2, 28],
                    66: [2, 28],
                    69: [2, 28],
                  },
                  {
                    5: [2, 20],
                    13: [2, 20],
                    14: [2, 20],
                    17: [2, 20],
                    27: [2, 20],
                    32: [2, 20],
                    37: [2, 20],
                    42: [2, 20],
                    45: [2, 20],
                    46: [2, 20],
                    49: [2, 20],
                    53: [2, 20],
                  },
                  { 31: [2, 67], 40: 120, 68: 121, 69: [1, 106] },
                  {
                    31: [2, 64],
                    59: [2, 64],
                    66: [2, 64],
                    69: [2, 64],
                    74: [2, 64],
                    75: [2, 64],
                    76: [2, 64],
                    77: [2, 64],
                  },
                  { 31: [2, 66], 69: [2, 66] },
                  {
                    21: [2, 26],
                    31: [2, 26],
                    52: [2, 26],
                    59: [2, 26],
                    62: [2, 26],
                    66: [2, 26],
                    69: [2, 26],
                    74: [2, 26],
                    75: [2, 26],
                    76: [2, 26],
                    77: [2, 26],
                  },
                  {
                    13: [2, 14],
                    14: [2, 14],
                    17: [2, 14],
                    27: [2, 14],
                    32: [2, 14],
                    37: [2, 14],
                    42: [2, 14],
                    45: [2, 14],
                    46: [2, 14],
                    49: [2, 14],
                    53: [2, 14],
                  },
                  { 66: [1, 123], 71: [1, 122] },
                  { 66: [2, 89], 71: [2, 89] },
                  {
                    13: [2, 15],
                    14: [2, 15],
                    17: [2, 15],
                    27: [2, 15],
                    32: [2, 15],
                    42: [2, 15],
                    45: [2, 15],
                    46: [2, 15],
                    49: [2, 15],
                    53: [2, 15],
                  },
                  { 31: [1, 124] },
                  { 31: [2, 68] },
                  { 31: [2, 29] },
                  { 66: [2, 90], 71: [2, 90] },
                  {
                    13: [2, 16],
                    14: [2, 16],
                    17: [2, 16],
                    27: [2, 16],
                    32: [2, 16],
                    37: [2, 16],
                    42: [2, 16],
                    45: [2, 16],
                    46: [2, 16],
                    49: [2, 16],
                    53: [2, 16],
                  },
                ],
                defaultActions: {
                  4: [2, 1],
                  47: [2, 48],
                  49: [2, 19],
                  53: [2, 50],
                  62: [2, 74],
                  71: [2, 78],
                  76: [2, 17],
                  80: [2, 82],
                  90: [2, 46],
                  97: [2, 18],
                  98: [2, 70],
                  103: [2, 86],
                  105: [2, 56],
                  108: [2, 62],
                  109: [2, 11],
                  121: [2, 68],
                  122: [2, 29],
                },
                parseError: function (t) {
                  throw new Error(t);
                },
                parse: function (t) {
                  function e() {
                    var t;
                    return (
                      (t = i.lexer.lex() || 1),
                      "number" != typeof t && (t = i.symbols_[t] || t),
                      t
                    );
                  }
                  var i = this,
                    n = [0],
                    s = [null],
                    o = [],
                    r = this.table,
                    a = "",
                    l = 0,
                    u = 0,
                    h = 0;
                  this.lexer.setInput(t),
                    (this.lexer.yy = this.yy),
                    (this.yy.lexer = this.lexer),
                    (this.yy.parser = this),
                    "undefined" == typeof this.lexer.yylloc &&
                      (this.lexer.yylloc = {});
                  var c = this.lexer.yylloc;
                  o.push(c);
                  var d = this.lexer.options && this.lexer.options.ranges;
                  "function" == typeof this.yy.parseError &&
                    (this.parseError = this.yy.parseError);
                  for (var p, f, m, g, v, y, b, _, w, x = {}; ; ) {
                    if (
                      ((m = n[n.length - 1]),
                      this.defaultActions[m]
                        ? (g = this.defaultActions[m])
                        : ((null === p || "undefined" == typeof p) && (p = e()),
                          (g = r[m] && r[m][p])),
                      "undefined" == typeof g || !g.length || !g[0])
                    ) {
                      var k = "";
                      if (!h) {
                        w = [];
                        for (y in r[m])
                          this.terminals_[y] &&
                            y > 2 &&
                            w.push("'" + this.terminals_[y] + "'");
                        (k = this.lexer.showPosition
                          ? "Parse error on line " +
                            (l + 1) +
                            ":\n" +
                            this.lexer.showPosition() +
                            "\nExpecting " +
                            w.join(", ") +
                            ", got '" +
                            (this.terminals_[p] || p) +
                            "'"
                          : "Parse error on line " +
                            (l + 1) +
                            ": Unexpected " +
                            (1 == p
                              ? "end of input"
                              : "'" + (this.terminals_[p] || p) + "'")),
                          this.parseError(k, {
                            text: this.lexer.match,
                            token: this.terminals_[p] || p,
                            line: this.lexer.yylineno,
                            loc: c,
                            expected: w,
                          });
                      }
                    }
                    if (g[0] instanceof Array && g.length > 1)
                      throw new Error(
                        "Parse Error: multiple actions possible at state: " +
                          m +
                          ", token: " +
                          p
                      );
                    switch (g[0]) {
                      case 1:
                        n.push(p),
                          s.push(this.lexer.yytext),
                          o.push(this.lexer.yylloc),
                          n.push(g[1]),
                          (p = null),
                          f
                            ? ((p = f), (f = null))
                            : ((u = this.lexer.yyleng),
                              (a = this.lexer.yytext),
                              (l = this.lexer.yylineno),
                              (c = this.lexer.yylloc),
                              h > 0 && h--);
                        break;
                      case 2:
                        if (
                          ((b = this.productions_[g[1]][1]),
                          (x.$ = s[s.length - b]),
                          (x._$ = {
                            first_line: o[o.length - (b || 1)].first_line,
                            last_line: o[o.length - 1].last_line,
                            first_column: o[o.length - (b || 1)].first_column,
                            last_column: o[o.length - 1].last_column,
                          }),
                          d &&
                            (x._$.range = [
                              o[o.length - (b || 1)].range[0],
                              o[o.length - 1].range[1],
                            ]),
                          (v = this.performAction.call(
                            x,
                            a,
                            u,
                            l,
                            this.yy,
                            g[1],
                            s,
                            o
                          )),
                          "undefined" != typeof v)
                        )
                          return v;
                        b &&
                          ((n = n.slice(0, -1 * b * 2)),
                          (s = s.slice(0, -1 * b)),
                          (o = o.slice(0, -1 * b))),
                          n.push(this.productions_[g[1]][0]),
                          s.push(x.$),
                          o.push(x._$),
                          (_ = r[n[n.length - 2]][n[n.length - 1]]),
                          n.push(_);
                        break;
                      case 3:
                        return !0;
                    }
                  }
                  return !0;
                },
              },
              i = (function () {
                var t = {
                  EOF: 1,
                  parseError: function (t, e) {
                    if (!this.yy.parser) throw new Error(t);
                    this.yy.parser.parseError(t, e);
                  },
                  setInput: function (t) {
                    return (
                      (this._input = t),
                      (this._more = this._less = this.done = !1),
                      (this.yylineno = this.yyleng = 0),
                      (this.yytext = this.matched = this.match = ""),
                      (this.conditionStack = ["INITIAL"]),
                      (this.yylloc = {
                        first_line: 1,
                        first_column: 0,
                        last_line: 1,
                        last_column: 0,
                      }),
                      this.options.ranges && (this.yylloc.range = [0, 0]),
                      (this.offset = 0),
                      this
                    );
                  },
                  input: function () {
                    var t = this._input[0];
                    (this.yytext += t),
                      this.yyleng++,
                      this.offset++,
                      (this.match += t),
                      (this.matched += t);
                    var e = t.match(/(?:\r\n?|\n).*/g);
                    return (
                      e
                        ? (this.yylineno++, this.yylloc.last_line++)
                        : this.yylloc.last_column++,
                      this.options.ranges && this.yylloc.range[1]++,
                      (this._input = this._input.slice(1)),
                      t
                    );
                  },
                  unput: function (t) {
                    var e = t.length,
                      i = t.split(/(?:\r\n?|\n)/g);
                    (this._input = t + this._input),
                      (this.yytext = this.yytext.substr(
                        0,
                        this.yytext.length - e - 1
                      )),
                      (this.offset -= e);
                    var n = this.match.split(/(?:\r\n?|\n)/g);
                    (this.match = this.match.substr(0, this.match.length - 1)),
                      (this.matched = this.matched.substr(
                        0,
                        this.matched.length - 1
                      )),
                      i.length - 1 && (this.yylineno -= i.length - 1);
                    var s = this.yylloc.range;
                    return (
                      (this.yylloc = {
                        first_line: this.yylloc.first_line,
                        last_line: this.yylineno + 1,
                        first_column: this.yylloc.first_column,
                        last_column: i
                          ? (i.length === n.length
                              ? this.yylloc.first_column
                              : 0) +
                            n[n.length - i.length].length -
                            i[0].length
                          : this.yylloc.first_column - e,
                      }),
                      this.options.ranges &&
                        (this.yylloc.range = [s[0], s[0] + this.yyleng - e]),
                      this
                    );
                  },
                  more: function () {
                    return (this._more = !0), this;
                  },
                  less: function (t) {
                    this.unput(this.match.slice(t));
                  },
                  pastInput: function () {
                    var t = this.matched.substr(
                      0,
                      this.matched.length - this.match.length
                    );
                    return (
                      (t.length > 20 ? "..." : "") +
                      t.substr(-20).replace(/\n/g, "")
                    );
                  },
                  upcomingInput: function () {
                    var t = this.match;
                    return (
                      t.length < 20 &&
                        (t += this._input.substr(0, 20 - t.length)),
                      (t.substr(0, 20) + (t.length > 20 ? "..." : "")).replace(
                        /\n/g,
                        ""
                      )
                    );
                  },
                  showPosition: function () {
                    var t = this.pastInput(),
                      e = new Array(t.length + 1).join("-");
                    return t + this.upcomingInput() + "\n" + e + "^";
                  },
                  next: function () {
                    if (this.done) return this.EOF;
                    this._input || (this.done = !0);
                    var t, e, i, n, s;
                    this._more || ((this.yytext = ""), (this.match = ""));
                    for (
                      var o = this._currentRules(), r = 0;
                      r < o.length &&
                      ((i = this._input.match(this.rules[o[r]])),
                      !i ||
                        (e && !(i[0].length > e[0].length)) ||
                        ((e = i), (n = r), this.options.flex));
                      r++
                    );
                    return e
                      ? ((s = e[0].match(/(?:\r\n?|\n).*/g)),
                        s && (this.yylineno += s.length),
                        (this.yylloc = {
                          first_line: this.yylloc.last_line,
                          last_line: this.yylineno + 1,
                          first_column: this.yylloc.last_column,
                          last_column: s
                            ? s[s.length - 1].length -
                              s[s.length - 1].match(/\r?\n?/)[0].length
                            : this.yylloc.last_column + e[0].length,
                        }),
                        (this.yytext += e[0]),
                        (this.match += e[0]),
                        (this.matches = e),
                        (this.yyleng = this.yytext.length),
                        this.options.ranges &&
                          (this.yylloc.range = [
                            this.offset,
                            (this.offset += this.yyleng),
                          ]),
                        (this._more = !1),
                        (this._input = this._input.slice(e[0].length)),
                        (this.matched += e[0]),
                        (t = this.performAction.call(
                          this,
                          this.yy,
                          this,
                          o[n],
                          this.conditionStack[this.conditionStack.length - 1]
                        )),
                        this.done && this._input && (this.done = !1),
                        t ? t : void 0)
                      : "" === this._input
                      ? this.EOF
                      : this.parseError(
                          "Lexical error on line " +
                            (this.yylineno + 1) +
                            ". Unrecognized text.\n" +
                            this.showPosition(),
                          { text: "", token: null, line: this.yylineno }
                        );
                  },
                  lex: function () {
                    var t = this.next();
                    return "undefined" != typeof t ? t : this.lex();
                  },
                  begin: function (t) {
                    this.conditionStack.push(t);
                  },
                  popState: function () {
                    return this.conditionStack.pop();
                  },
                  _currentRules: function () {
                    return this.conditions[
                      this.conditionStack[this.conditionStack.length - 1]
                    ].rules;
                  },
                  topState: function () {
                    return this.conditionStack[this.conditionStack.length - 2];
                  },
                  pushState: function (t) {
                    this.begin(t);
                  },
                };
                return (
                  (t.options = {}),
                  (t.performAction = function (t, e, i, n) {
                    function s(t, i) {
                      return (e.yytext = e.yytext.substr(t, e.yyleng - i));
                    }
                    switch (i) {
                      case 0:
                        if (
                          ("\\\\" === e.yytext.slice(-2)
                            ? (s(0, 1), this.begin("mu"))
                            : "\\" === e.yytext.slice(-1)
                            ? (s(0, 1), this.begin("emu"))
                            : this.begin("mu"),
                          e.yytext)
                        )
                          return 14;
                        break;
                      case 1:
                        return 14;
                      case 2:
                        return this.popState(), 14;
                      case 3:
                        return (
                          (e.yytext = e.yytext.substr(5, e.yyleng - 9)),
                          this.popState(),
                          16
                        );
                      case 4:
                        return 14;
                      case 5:
                        return this.popState(), 13;
                      case 6:
                        return 59;
                      case 7:
                        return 62;
                      case 8:
                        return 17;
                      case 9:
                        return this.popState(), this.begin("raw"), 21;
                      case 10:
                        return 53;
                      case 11:
                        return 27;
                      case 12:
                        return 45;
                      case 13:
                        return this.popState(), 42;
                      case 14:
                        return this.popState(), 42;
                      case 15:
                        return 32;
                      case 16:
                        return 37;
                      case 17:
                        return 49;
                      case 18:
                        return 46;
                      case 19:
                        this.unput(e.yytext),
                          this.popState(),
                          this.begin("com");
                        break;
                      case 20:
                        return this.popState(), 13;
                      case 21:
                        return 46;
                      case 22:
                        return 67;
                      case 23:
                        return 66;
                      case 24:
                        return 66;
                      case 25:
                        return 79;
                      case 26:
                        break;
                      case 27:
                        return this.popState(), 52;
                      case 28:
                        return this.popState(), 31;
                      case 29:
                        return (e.yytext = s(1, 2).replace(/\\"/g, '"')), 74;
                      case 30:
                        return (e.yytext = s(1, 2).replace(/\\'/g, "'")), 74;
                      case 31:
                        return 77;
                      case 32:
                        return 76;
                      case 33:
                        return 76;
                      case 34:
                        return 75;
                      case 35:
                        return 69;
                      case 36:
                        return 71;
                      case 37:
                        return 66;
                      case 38:
                        return (e.yytext = s(1, 2)), 66;
                      case 39:
                        return "INVALID";
                      case 40:
                        return 5;
                    }
                  }),
                  (t.rules = [
                    /^(?:[^\x00]*?(?=(\{\{)))/,
                    /^(?:[^\x00]+)/,
                    /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,
                    /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,
                    /^(?:[^\x00]*?(?=(\{\{\{\{\/)))/,
                    /^(?:[\s\S]*?--(~)?\}\})/,
                    /^(?:\()/,
                    /^(?:\))/,
                    /^(?:\{\{\{\{)/,
                    /^(?:\}\}\}\})/,
                    /^(?:\{\{(~)?>)/,
                    /^(?:\{\{(~)?#)/,
                    /^(?:\{\{(~)?\/)/,
                    /^(?:\{\{(~)?\^\s*(~)?\}\})/,
                    /^(?:\{\{(~)?\s*else\s*(~)?\}\})/,
                    /^(?:\{\{(~)?\^)/,
                    /^(?:\{\{(~)?\s*else\b)/,
                    /^(?:\{\{(~)?\{)/,
                    /^(?:\{\{(~)?&)/,
                    /^(?:\{\{(~)?!--)/,
                    /^(?:\{\{(~)?![\s\S]*?\}\})/,
                    /^(?:\{\{(~)?)/,
                    /^(?:=)/,
                    /^(?:\.\.)/,
                    /^(?:\.(?=([=~}\s\/.)|])))/,
                    /^(?:[\/.])/,
                    /^(?:\s+)/,
                    /^(?:\}(~)?\}\})/,
                    /^(?:(~)?\}\})/,
                    /^(?:"(\\["]|[^"])*")/,
                    /^(?:'(\\[']|[^'])*')/,
                    /^(?:@)/,
                    /^(?:true(?=([~}\s)])))/,
                    /^(?:false(?=([~}\s)])))/,
                    /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,
                    /^(?:as\s+\|)/,
                    /^(?:\|)/,
                    /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/,
                    /^(?:\[[^\]]*\])/,
                    /^(?:.)/,
                    /^(?:$)/,
                  ]),
                  (t.conditions = {
                    mu: {
                      rules: [
                        6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
                        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
                        35, 36, 37, 38, 39, 40,
                      ],
                      inclusive: !1,
                    },
                    emu: { rules: [2], inclusive: !1 },
                    com: { rules: [5], inclusive: !1 },
                    raw: { rules: [3, 4], inclusive: !1 },
                    INITIAL: { rules: [0, 1, 40], inclusive: !0 },
                  }),
                  t
                );
              })();
            return (e.lexer = i), (t.prototype = e), (e.Parser = t), new t();
          })();
        return (t = e);
      })(),
      l = (function (t, e) {
        "use strict";
        function i() {
          this.parents = [];
        }
        var n,
          s = t,
          o = e;
        return (
          (i.prototype = {
            constructor: i,
            mutating: !1,
            acceptKey: function (t, e) {
              var i = this.accept(t[e]);
              if (this.mutating) {
                if (i && (!i.type || !o[i.type]))
                  throw new s(
                    'Unexpected node type "' +
                      i.type +
                      '" found when accepting ' +
                      e +
                      " on " +
                      t.type
                  );
                t[e] = i;
              }
            },
            acceptRequired: function (t, e) {
              if ((this.acceptKey(t, e), !t[e]))
                throw new s(t.type + " requires " + e);
            },
            acceptArray: function (t) {
              for (var e = 0, i = t.length; i > e; e++)
                this.acceptKey(t, e), t[e] || (t.splice(e, 1), e--, i--);
            },
            accept: function (t) {
              if (t) {
                this.current && this.parents.unshift(this.current),
                  (this.current = t);
                var e = this[t.type](t);
                return (
                  (this.current = this.parents.shift()),
                  !this.mutating || e ? e : e !== !1 ? t : void 0
                );
              }
            },
            Program: function (t) {
              this.acceptArray(t.body);
            },
            MustacheStatement: function (t) {
              this.acceptRequired(t, "path"),
                this.acceptArray(t.params),
                this.acceptKey(t, "hash");
            },
            BlockStatement: function (t) {
              this.acceptRequired(t, "path"),
                this.acceptArray(t.params),
                this.acceptKey(t, "hash"),
                this.acceptKey(t, "program"),
                this.acceptKey(t, "inverse");
            },
            PartialStatement: function (t) {
              this.acceptRequired(t, "name"),
                this.acceptArray(t.params),
                this.acceptKey(t, "hash");
            },
            ContentStatement: function () {},
            CommentStatement: function () {},
            SubExpression: function (t) {
              this.acceptRequired(t, "path"),
                this.acceptArray(t.params),
                this.acceptKey(t, "hash");
            },
            PartialExpression: function (t) {
              this.acceptRequired(t, "name"),
                this.acceptArray(t.params),
                this.acceptKey(t, "hash");
            },
            PathExpression: function () {},
            StringLiteral: function () {},
            NumberLiteral: function () {},
            BooleanLiteral: function () {},
            Hash: function (t) {
              this.acceptArray(t.pairs);
            },
            HashPair: function (t) {
              this.acceptRequired(t, "value");
            },
          }),
          (n = i)
        );
      })(e, r),
      u = (function (t) {
        "use strict";
        function e() {}
        function i(t, e, i) {
          void 0 === e && (e = t.length);
          var n = t[e - 1],
            s = t[e - 2];
          return n
            ? "ContentStatement" === n.type
              ? (s || !i ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(n.original)
              : void 0
            : i;
        }
        function n(t, e, i) {
          void 0 === e && (e = -1);
          var n = t[e + 1],
            s = t[e + 2];
          return n
            ? "ContentStatement" === n.type
              ? (s || !i ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(n.original)
              : void 0
            : i;
        }
        function s(t, e, i) {
          var n = t[null == e ? 0 : e + 1];
          if (n && "ContentStatement" === n.type && (i || !n.rightStripped)) {
            var s = n.value;
            (n.value = n.value.replace(i ? /^\s+/ : /^[ \t]*\r?\n?/, "")),
              (n.rightStripped = n.value !== s);
          }
        }
        function o(t, e, i) {
          var n = t[null == e ? t.length - 1 : e - 1];
          if (n && "ContentStatement" === n.type && (i || !n.leftStripped)) {
            var s = n.value;
            return (
              (n.value = n.value.replace(i ? /\s+$/ : /[ \t]+$/, "")),
              (n.leftStripped = n.value !== s),
              n.leftStripped
            );
          }
        }
        var r,
          a = t;
        return (
          (e.prototype = new a()),
          (e.prototype.Program = function (t) {
            var e = !this.isRootSeen;
            this.isRootSeen = !0;
            for (var r = t.body, a = 0, l = r.length; l > a; a++) {
              var u = r[a],
                h = this.accept(u);
              if (h) {
                var c = i(r, a, e),
                  d = n(r, a, e),
                  p = h.openStandalone && c,
                  f = h.closeStandalone && d,
                  m = h.inlineStandalone && c && d;
                h.close && s(r, a, !0),
                  h.open && o(r, a, !0),
                  m &&
                    (s(r, a),
                    o(r, a) &&
                      "PartialStatement" === u.type &&
                      (u.indent = /([ \t]+$)/.exec(r[a - 1].original)[1])),
                  p && (s((u.program || u.inverse).body), o(r, a)),
                  f && (s(r, a), o((u.inverse || u.program).body));
              }
            }
            return t;
          }),
          (e.prototype.BlockStatement = function (t) {
            this.accept(t.program), this.accept(t.inverse);
            var e = t.program || t.inverse,
              r = t.program && t.inverse,
              a = r,
              l = r;
            if (r && r.chained)
              for (a = r.body[0].program; l.chained; )
                l = l.body[l.body.length - 1].program;
            var u = {
              open: t.openStrip.open,
              close: t.closeStrip.close,
              openStandalone: n(e.body),
              closeStandalone: i((a || e).body),
            };
            if ((t.openStrip.close && s(e.body, null, !0), r)) {
              var h = t.inverseStrip;
              h.open && o(e.body, null, !0),
                h.close && s(a.body, null, !0),
                t.closeStrip.open && o(l.body, null, !0),
                i(e.body) && n(a.body) && (o(e.body), s(a.body));
            } else t.closeStrip.open && o(e.body, null, !0);
            return u;
          }),
          (e.prototype.MustacheStatement = function (t) {
            return t.strip;
          }),
          (e.prototype.PartialStatement = e.prototype.CommentStatement =
            function (t) {
              var e = t.strip || {};
              return { inlineStandalone: !0, open: e.open, close: e.close };
            }),
          (r = e)
        );
      })(l),
      h = (function (t) {
        "use strict";
        function e(t, e) {
          (this.source = t),
            (this.start = { line: e.first_line, column: e.first_column }),
            (this.end = { line: e.last_line, column: e.last_column });
        }
        function i(t, e) {
          return {
            open: "~" === t.charAt(2),
            close: "~" === e.charAt(e.length - 3),
          };
        }
        function n(t) {
          return t.replace(/^\{\{~?\!-?-?/, "").replace(/-?-?~?\}\}$/, "");
        }
        function s(t, e, i) {
          i = this.locInfo(i);
          for (
            var n = t ? "@" : "", s = [], o = 0, r = "", a = 0, l = e.length;
            l > a;
            a++
          ) {
            var h = e[a].part;
            if (
              ((n += (e[a].separator || "") + h),
              ".." === h || "." === h || "this" === h)
            ) {
              if (s.length > 0) throw new u("Invalid path: " + n, { loc: i });
              ".." === h && (o++, (r += "../"));
            } else s.push(h);
          }
          return new this.PathExpression(t, o, s, n, i);
        }
        function o(t, e, i, n, s, o) {
          var r = n.charAt(3) || n.charAt(2),
            a = "{" !== r && "&" !== r;
          return new this.MustacheStatement(t, e, i, a, s, this.locInfo(o));
        }
        function r(t, e, i, n) {
          if (t.path.original !== i) {
            var s = { loc: t.path.loc };
            throw new u(t.path.original + " doesn't match " + i, s);
          }
          n = this.locInfo(n);
          var o = new this.Program([e], null, {}, n);
          return new this.BlockStatement(
            t.path,
            t.params,
            t.hash,
            o,
            void 0,
            {},
            {},
            {},
            n
          );
        }
        function a(t, e, i, n, s, o) {
          if (n && n.path && t.path.original !== n.path.original) {
            var r = { loc: t.path.loc };
            throw new u(
              t.path.original + " doesn't match " + n.path.original,
              r
            );
          }
          e.blockParams = t.blockParams;
          var a, l;
          return (
            i &&
              (i.chain && (i.program.body[0].closeStrip = n.strip),
              (l = i.strip),
              (a = i.program)),
            s && ((s = a), (a = e), (e = s)),
            new this.BlockStatement(
              t.path,
              t.params,
              t.hash,
              e,
              a,
              t.strip,
              l,
              n && n.strip,
              this.locInfo(o)
            )
          );
        }
        var l = {},
          u = t;
        return (
          (l.SourceLocation = e),
          (l.stripFlags = i),
          (l.stripComment = n),
          (l.preparePath = s),
          (l.prepareMustache = o),
          (l.prepareRawBlock = r),
          (l.prepareBlock = a),
          l
        );
      })(e),
      c = (function (t, e, i, n, s) {
        "use strict";
        function o(t, e) {
          if ("Program" === t.type) return t;
          (a.yy = d),
            (d.locInfo = function (t) {
              return new d.SourceLocation(e && e.srcName, t);
            });
          var i = new u();
          return i.accept(a.parse(t));
        }
        var r = {},
          a = t,
          l = e,
          u = i,
          h = n,
          c = s.extend;
        r.parser = a;
        var d = {};
        return c(d, h, l), (r.parse = o), r;
      })(a, r, u, h, t),
      d = (function (t, e, i) {
        "use strict";
        function n() {}
        function s(t, e, i) {
          if (null == t || ("string" != typeof t && "Program" !== t.type))
            throw new u(
              "You must pass a string or Handlebars AST to Handlebars.precompile. You passed " +
                t
            );
          (e = e || {}),
            "data" in e || (e.data = !0),
            e.compat && (e.useDepths = !0);
          var n = i.parse(t, e),
            s = new i.Compiler().compile(n, e);
          return new i.JavaScriptCompiler().compile(s, e);
        }
        function o(t, e, i) {
          function n() {
            var n = i.parse(t, e),
              s = new i.Compiler().compile(n, e),
              o = new i.JavaScriptCompiler().compile(s, e, void 0, !0);
            return i.template(o);
          }
          if (null == t || ("string" != typeof t && "Program" !== t.type))
            throw new u(
              "You must pass a string or Handlebars AST to Handlebars.compile. You passed " +
                t
            );
          (e = e || {}),
            "data" in e || (e.data = !0),
            e.compat && (e.useDepths = !0);
          var s,
            o = function (t, e) {
              return s || (s = n()), s.call(this, t, e);
            };
          return (
            (o._setup = function (t) {
              return s || (s = n()), s._setup(t);
            }),
            (o._child = function (t, e, i, o) {
              return s || (s = n()), s._child(t, e, i, o);
            }),
            o
          );
        }
        function r(t, e) {
          if (t === e) return !0;
          if (h(t) && h(e) && t.length === e.length) {
            for (var i = 0; i < t.length; i++) if (!r(t[i], e[i])) return !1;
            return !0;
          }
        }
        function a(t) {
          if (!t.path.parts) {
            var e = t.path;
            t.path = new d.PathExpression(
              !1,
              0,
              [e.original + ""],
              e.original + "",
              e.log
            );
          }
        }
        var l = {},
          u = t,
          h = e.isArray,
          c = e.indexOf,
          d = i,
          p = [].slice;
        return (
          (l.Compiler = n),
          (n.prototype = {
            compiler: n,
            equals: function (t) {
              var e = this.opcodes.length;
              if (t.opcodes.length !== e) return !1;
              for (var i = 0; e > i; i++) {
                var n = this.opcodes[i],
                  s = t.opcodes[i];
                if (n.opcode !== s.opcode || !r(n.args, s.args)) return !1;
              }
              for (e = this.children.length, i = 0; e > i; i++)
                if (!this.children[i].equals(t.children[i])) return !1;
              return !0;
            },
            guid: 0,
            compile: function (t, e) {
              (this.sourceNode = []),
                (this.opcodes = []),
                (this.children = []),
                (this.options = e),
                (this.stringParams = e.stringParams),
                (this.trackIds = e.trackIds),
                (e.blockParams = e.blockParams || []);
              var i = e.knownHelpers;
              if (
                ((e.knownHelpers = {
                  helperMissing: !0,
                  blockHelperMissing: !0,
                  each: !0,
                  if: !0,
                  unless: !0,
                  with: !0,
                  log: !0,
                  lookup: !0,
                }),
                i)
              )
                for (var n in i) e.knownHelpers[n] = i[n];
              return this.accept(t);
            },
            compileProgram: function (t) {
              var e = new this.compiler().compile(t, this.options),
                i = this.guid++;
              return (
                (this.usePartial = this.usePartial || e.usePartial),
                (this.children[i] = e),
                (this.useDepths = this.useDepths || e.useDepths),
                i
              );
            },
            accept: function (t) {
              this.sourceNode.unshift(t);
              var e = this[t.type](t);
              return this.sourceNode.shift(), e;
            },
            Program: function (t) {
              this.options.blockParams.unshift(t.blockParams);
              for (var e = t.body, i = 0, n = e.length; n > i; i++)
                this.accept(e[i]);
              return (
                this.options.blockParams.shift(),
                (this.isSimple = 1 === n),
                (this.blockParams = t.blockParams ? t.blockParams.length : 0),
                this
              );
            },
            BlockStatement: function (t) {
              a(t);
              var e = t.program,
                i = t.inverse;
              (e = e && this.compileProgram(e)),
                (i = i && this.compileProgram(i));
              var n = this.classifySexpr(t);
              "helper" === n
                ? this.helperSexpr(t, e, i)
                : "simple" === n
                ? (this.simpleSexpr(t),
                  this.opcode("pushProgram", e),
                  this.opcode("pushProgram", i),
                  this.opcode("emptyHash"),
                  this.opcode("blockValue", t.path.original))
                : (this.ambiguousSexpr(t, e, i),
                  this.opcode("pushProgram", e),
                  this.opcode("pushProgram", i),
                  this.opcode("emptyHash"),
                  this.opcode("ambiguousBlockValue")),
                this.opcode("append");
            },
            PartialStatement: function (t) {
              this.usePartial = !0;
              var e = t.params;
              if (e.length > 1)
                throw new u(
                  "Unsupported number of partial arguments: " + e.length,
                  t
                );
              e.length ||
                e.push({ type: "PathExpression", parts: [], depth: 0 });
              var i = t.name.original,
                n = "SubExpression" === t.name.type;
              n && this.accept(t.name),
                this.setupFullMustacheParams(t, void 0, void 0, !0);
              var s = t.indent || "";
              this.options.preventIndent &&
                s &&
                (this.opcode("appendContent", s), (s = "")),
                this.opcode("invokePartial", n, i, s),
                this.opcode("append");
            },
            MustacheStatement: function (t) {
              this.SubExpression(t),
                this.opcode(
                  t.escaped && !this.options.noEscape
                    ? "appendEscaped"
                    : "append"
                );
            },
            ContentStatement: function (t) {
              t.value && this.opcode("appendContent", t.value);
            },
            CommentStatement: function () {},
            SubExpression: function (t) {
              a(t);
              var e = this.classifySexpr(t);
              "simple" === e
                ? this.simpleSexpr(t)
                : "helper" === e
                ? this.helperSexpr(t)
                : this.ambiguousSexpr(t);
            },
            ambiguousSexpr: function (t, e, i) {
              var n = t.path,
                s = n.parts[0],
                o = null != e || null != i;
              this.opcode("getContext", n.depth),
                this.opcode("pushProgram", e),
                this.opcode("pushProgram", i),
                this.accept(n),
                this.opcode("invokeAmbiguous", s, o);
            },
            simpleSexpr: function (t) {
              this.accept(t.path), this.opcode("resolvePossibleLambda");
            },
            helperSexpr: function (t, e, i) {
              var n = this.setupFullMustacheParams(t, e, i),
                s = t.path,
                o = s.parts[0];
              if (this.options.knownHelpers[o])
                this.opcode("invokeKnownHelper", n.length, o);
              else {
                if (this.options.knownHelpersOnly)
                  throw new u(
                    "You specified knownHelpersOnly, but used the unknown helper " +
                      o,
                    t
                  );
                (s.falsy = !0),
                  this.accept(s),
                  this.opcode(
                    "invokeHelper",
                    n.length,
                    s.original,
                    d.helpers.simpleId(s)
                  );
              }
            },
            PathExpression: function (t) {
              this.addDepth(t.depth), this.opcode("getContext", t.depth);
              var e = t.parts[0],
                i = d.helpers.scopedId(t),
                n = !t.depth && !i && this.blockParamIndex(e);
              n
                ? this.opcode("lookupBlockParam", n, t.parts)
                : e
                ? t.data
                  ? ((this.options.data = !0),
                    this.opcode("lookupData", t.depth, t.parts))
                  : this.opcode("lookupOnContext", t.parts, t.falsy, i)
                : this.opcode("pushContext");
            },
            StringLiteral: function (t) {
              this.opcode("pushString", t.value);
            },
            NumberLiteral: function (t) {
              this.opcode("pushLiteral", t.value);
            },
            BooleanLiteral: function (t) {
              this.opcode("pushLiteral", t.value);
            },
            Hash: function (t) {
              var e,
                i,
                n = t.pairs;
              for (this.opcode("pushHash"), e = 0, i = n.length; i > e; e++)
                this.pushParam(n[e].value);
              for (; e--; ) this.opcode("assignToHash", n[e].key);
              this.opcode("popHash");
            },
            opcode: function (t) {
              this.opcodes.push({
                opcode: t,
                args: p.call(arguments, 1),
                loc: this.sourceNode[0].loc,
              });
            },
            addDepth: function (t) {
              t && (this.useDepths = !0);
            },
            classifySexpr: function (t) {
              var e = d.helpers.simpleId(t.path),
                i = e && !!this.blockParamIndex(t.path.parts[0]),
                n = !i && d.helpers.helperExpression(t),
                s = !i && (n || e),
                o = this.options;
              if (s && !n) {
                var r = t.path.parts[0];
                o.knownHelpers[r] ? (n = !0) : o.knownHelpersOnly && (s = !1);
              }
              return n ? "helper" : s ? "ambiguous" : "simple";
            },
            pushParams: function (t) {
              for (var e = 0, i = t.length; i > e; e++) this.pushParam(t[e]);
            },
            pushParam: function (t) {
              var e = null != t.value ? t.value : t.original || "";
              if (this.stringParams)
                e.replace &&
                  (e = e.replace(/^(\.?\.\/)*/g, "").replace(/\//g, ".")),
                  t.depth && this.addDepth(t.depth),
                  this.opcode("getContext", t.depth || 0),
                  this.opcode("pushStringParam", e, t.type),
                  "SubExpression" === t.type && this.accept(t);
              else {
                if (this.trackIds) {
                  var i;
                  if (
                    (!t.parts ||
                      d.helpers.scopedId(t) ||
                      t.depth ||
                      (i = this.blockParamIndex(t.parts[0])),
                    i)
                  ) {
                    var n = t.parts.slice(1).join(".");
                    this.opcode("pushId", "BlockParam", i, n);
                  } else
                    (e = t.original || e),
                      e.replace &&
                        (e = e.replace(/^\.\//g, "").replace(/^\.$/g, "")),
                      this.opcode("pushId", t.type, e);
                }
                this.accept(t);
              }
            },
            setupFullMustacheParams: function (t, e, i, n) {
              var s = t.params;
              return (
                this.pushParams(s),
                this.opcode("pushProgram", e),
                this.opcode("pushProgram", i),
                t.hash ? this.accept(t.hash) : this.opcode("emptyHash", n),
                s
              );
            },
            blockParamIndex: function (t) {
              for (var e = 0, i = this.options.blockParams.length; i > e; e++) {
                var n = this.options.blockParams[e],
                  s = n && c(n, t);
                if (n && s >= 0) return [e, s];
              }
            },
          }),
          (l.precompile = s),
          (l.compile = o),
          l
        );
      })(e, t, r),
      p = (function (t) {
        "use strict";
        function e(t, e, i) {
          if (s(t)) {
            for (var n = [], o = 0, r = t.length; r > o; o++)
              n.push(e.wrap(t[o], i));
            return n;
          }
          return "boolean" == typeof t || "number" == typeof t ? t + "" : t;
        }
        function i(t) {
          (this.srcFile = t), (this.source = []);
        }
        var n,
          s = t.isArray;
        try {
          var o = require("source-map"),
            r = o.SourceNode;
        } catch (a) {
          (r = function (t, e, i, n) {
            (this.src = ""), n && this.add(n);
          }),
            (r.prototype = {
              add: function (t) {
                s(t) && (t = t.join("")), (this.src += t);
              },
              prepend: function (t) {
                s(t) && (t = t.join("")), (this.src = t + this.src);
              },
              toStringWithSourceMap: function () {
                return { code: this.toString() };
              },
              toString: function () {
                return this.src;
              },
            });
        }
        return (
          (i.prototype = {
            prepend: function (t, e) {
              this.source.unshift(this.wrap(t, e));
            },
            push: function (t, e) {
              this.source.push(this.wrap(t, e));
            },
            merge: function () {
              var t = this.empty();
              return (
                this.each(function (e) {
                  t.add(["  ", e, "\n"]);
                }),
                t
              );
            },
            each: function (t) {
              for (var e = 0, i = this.source.length; i > e; e++)
                t(this.source[e]);
            },
            empty: function (t) {
              return (
                (t = t || this.currentLocation || { start: {} }),
                new r(t.start.line, t.start.column, this.srcFile)
              );
            },
            wrap: function (t, i) {
              return t instanceof r
                ? t
                : ((i = i || this.currentLocation || { start: {} }),
                  (t = e(t, this, i)),
                  new r(i.start.line, i.start.column, this.srcFile, t));
            },
            functionCall: function (t, e, i) {
              return (
                (i = this.generateList(i)),
                this.wrap([t, e ? "." + e + "(" : "(", i, ")"])
              );
            },
            quotedString: function (t) {
              return (
                '"' +
                (t + "")
                  .replace(/\\/g, "\\\\")
                  .replace(/"/g, '\\"')
                  .replace(/\n/g, "\\n")
                  .replace(/\r/g, "\\r")
                  .replace(/\u2028/g, "\\u2028")
                  .replace(/\u2029/g, "\\u2029") +
                '"'
              );
            },
            objectLiteral: function (t) {
              var i = [];
              for (var n in t)
                if (t.hasOwnProperty(n)) {
                  var s = e(t[n], this);
                  "undefined" !== s && i.push([this.quotedString(n), ":", s]);
                }
              var o = this.generateList(i);
              return o.prepend("{"), o.add("}"), o;
            },
            generateList: function (t, i) {
              for (var n = this.empty(i), s = 0, o = t.length; o > s; s++)
                s && n.add(","), n.add(e(t[s], this, i));
              return n;
            },
            generateArray: function (t, e) {
              var i = this.generateList(t, e);
              return i.prepend("["), i.add("]"), i;
            },
          }),
          (n = i)
        );
      })(t),
      f = (function (t, e, i, n) {
        "use strict";
        function s(t) {
          this.value = t;
        }
        function o() {}
        function r(t, e, i, n) {
          var s = e.popStack(),
            o = 0,
            r = i.length;
          for (t && r--; r > o; o++) s = e.nameLookup(s, i[o], n);
          return t
            ? [
                e.aliasable("this.strict"),
                "(",
                s,
                ", ",
                e.quotedString(i[o]),
                ")",
              ]
            : s;
        }
        var a,
          l = t.COMPILER_REVISION,
          u = t.REVISION_CHANGES,
          h = e,
          c = i.isArray,
          d = n;
        o.prototype = {
          nameLookup: function (t, e) {
            return o.isValidJavaScriptVariableName(e)
              ? [t, ".", e]
              : [t, "['", e, "']"];
          },
          depthedLookup: function (t) {
            return [this.aliasable("this.lookup"), '(depths, "', t, '")'];
          },
          compilerInfo: function () {
            var t = l,
              e = u[t];
            return [t, e];
          },
          appendToBuffer: function (t, e, i) {
            return (
              c(t) || (t = [t]),
              (t = this.source.wrap(t, e)),
              this.environment.isSimple
                ? ["return ", t, ";"]
                : i
                ? ["buffer += ", t, ";"]
                : ((t.appendToBuffer = !0), t)
            );
          },
          initializeBuffer: function () {
            return this.quotedString("");
          },
          compile: function (t, e, i, n) {
            (this.environment = t),
              (this.options = e),
              (this.stringParams = this.options.stringParams),
              (this.trackIds = this.options.trackIds),
              (this.precompile = !n),
              (this.name = this.environment.name),
              (this.isChild = !!i),
              (this.context = i || { programs: [], environments: [] }),
              this.preamble(),
              (this.stackSlot = 0),
              (this.stackVars = []),
              (this.aliases = {}),
              (this.registers = { list: [] }),
              (this.hashes = []),
              (this.compileStack = []),
              (this.inlineStack = []),
              (this.blockParams = []),
              this.compileChildren(t, e),
              (this.useDepths =
                this.useDepths || t.useDepths || this.options.compat),
              (this.useBlockParams = this.useBlockParams || t.useBlockParams);
            var s,
              o,
              r,
              a,
              l = t.opcodes;
            for (r = 0, a = l.length; a > r; r++)
              (s = l[r]),
                (this.source.currentLocation = s.loc),
                (o = o || s.loc),
                this[s.opcode].apply(this, s.args);
            if (
              ((this.source.currentLocation = o),
              this.pushSource(""),
              this.stackSlot ||
                this.inlineStack.length ||
                this.compileStack.length)
            )
              throw new h("Compile completed with content left on stack");
            var u = this.createFunctionContext(n);
            if (this.isChild) return u;
            var c = { compiler: this.compilerInfo(), main: u },
              d = this.context.programs;
            for (r = 0, a = d.length; a > r; r++) d[r] && (c[r] = d[r]);
            return (
              this.environment.usePartial && (c.usePartial = !0),
              this.options.data && (c.useData = !0),
              this.useDepths && (c.useDepths = !0),
              this.useBlockParams && (c.useBlockParams = !0),
              this.options.compat && (c.compat = !0),
              n
                ? (c.compilerOptions = this.options)
                : ((c.compiler = JSON.stringify(c.compiler)),
                  (this.source.currentLocation = {
                    start: { line: 1, column: 0 },
                  }),
                  (c = this.objectLiteral(c)),
                  e.srcName
                    ? ((c = c.toStringWithSourceMap({ file: e.destName })),
                      (c.map = c.map && c.map.toString()))
                    : (c = c.toString())),
              c
            );
          },
          preamble: function () {
            (this.lastContext = 0), (this.source = new d(this.options.srcName));
          },
          createFunctionContext: function (t) {
            var e = "",
              i = this.stackVars.concat(this.registers.list);
            i.length > 0 && (e += ", " + i.join(", "));
            var n = 0;
            for (var s in this.aliases) {
              var o = this.aliases[s];
              this.aliases.hasOwnProperty(s) &&
                o.children &&
                o.referenceCount > 1 &&
                ((e += ", alias" + ++n + "=" + s),
                (o.children[0] = "alias" + n));
            }
            var r = ["depth0", "helpers", "partials", "data"];
            (this.useBlockParams || this.useDepths) && r.push("blockParams"),
              this.useDepths && r.push("depths");
            var a = this.mergeSource(e);
            return t
              ? (r.push(a), Function.apply(this, r))
              : this.source.wrap(["function(", r.join(","), ") {\n  ", a, "}"]);
          },
          mergeSource: function (t) {
            var e,
              i,
              n,
              s,
              o = this.environment.isSimple,
              r = !this.forceBuffer;
            return (
              this.source.each(function (t) {
                t.appendToBuffer
                  ? (n ? t.prepend("  + ") : (n = t), (s = t))
                  : (n &&
                      (i ? n.prepend("buffer += ") : (e = !0),
                      s.add(";"),
                      (n = s = void 0)),
                    (i = !0),
                    o || (r = !1));
              }),
              r
                ? n
                  ? (n.prepend("return "), s.add(";"))
                  : i || this.source.push('return "";')
                : ((t += ", buffer = " + (e ? "" : this.initializeBuffer())),
                  n
                    ? (n.prepend("return buffer + "), s.add(";"))
                    : this.source.push("return buffer;")),
              t &&
                this.source.prepend("var " + t.substring(2) + (e ? "" : ";\n")),
              this.source.merge()
            );
          },
          blockValue: function (t) {
            var e = this.aliasable("helpers.blockHelperMissing"),
              i = [this.contextName(0)];
            this.setupHelperArgs(t, 0, i);
            var n = this.popStack();
            i.splice(1, 0, n),
              this.push(this.source.functionCall(e, "call", i));
          },
          ambiguousBlockValue: function () {
            var t = this.aliasable("helpers.blockHelperMissing"),
              e = [this.contextName(0)];
            this.setupHelperArgs("", 0, e, !0), this.flushInline();
            var i = this.topStack();
            e.splice(1, 0, i),
              this.pushSource([
                "if (!",
                this.lastHelper,
                ") { ",
                i,
                " = ",
                this.source.functionCall(t, "call", e),
                "}",
              ]);
          },
          appendContent: function (t) {
            this.pendingContent
              ? (t = this.pendingContent + t)
              : (this.pendingLocation = this.source.currentLocation),
              (this.pendingContent = t);
          },
          append: function () {
            if (this.isInline())
              this.replaceStack(function (t) {
                return [" != null ? ", t, ' : ""'];
              }),
                this.pushSource(this.appendToBuffer(this.popStack()));
            else {
              var t = this.popStack();
              this.pushSource([
                "if (",
                t,
                " != null) { ",
                this.appendToBuffer(t, void 0, !0),
                " }",
              ]),
                this.environment.isSimple &&
                  this.pushSource([
                    "else { ",
                    this.appendToBuffer("''", void 0, !0),
                    " }",
                  ]);
            }
          },
          appendEscaped: function () {
            this.pushSource(
              this.appendToBuffer([
                this.aliasable("this.escapeExpression"),
                "(",
                this.popStack(),
                ")",
              ])
            );
          },
          getContext: function (t) {
            this.lastContext = t;
          },
          pushContext: function () {
            this.pushStackLiteral(this.contextName(this.lastContext));
          },
          lookupOnContext: function (t, e, i) {
            var n = 0;
            i || !this.options.compat || this.lastContext
              ? this.pushContext()
              : this.push(this.depthedLookup(t[n++])),
              this.resolvePath("context", t, n, e);
          },
          lookupBlockParam: function (t, e) {
            (this.useBlockParams = !0),
              this.push(["blockParams[", t[0], "][", t[1], "]"]),
              this.resolvePath("context", e, 1);
          },
          lookupData: function (t, e) {
            this.pushStackLiteral(t ? "this.data(data, " + t + ")" : "data"),
              this.resolvePath("data", e, 0, !0);
          },
          resolvePath: function (t, e, i, n) {
            if (this.options.strict || this.options.assumeObjects)
              return void this.push(r(this.options.strict, this, e, t));
            for (var s = e.length; s > i; i++)
              this.replaceStack(function (s) {
                var o = this.nameLookup(s, e[i], t);
                return n ? [" && ", o] : [" != null ? ", o, " : ", s];
              });
          },
          resolvePossibleLambda: function () {
            this.push([
              this.aliasable("this.lambda"),
              "(",
              this.popStack(),
              ", ",
              this.contextName(0),
              ")",
            ]);
          },
          pushStringParam: function (t, e) {
            this.pushContext(),
              this.pushString(e),
              "SubExpression" !== e &&
                ("string" == typeof t
                  ? this.pushString(t)
                  : this.pushStackLiteral(t));
          },
          emptyHash: function (t) {
            this.trackIds && this.push("{}"),
              this.stringParams && (this.push("{}"), this.push("{}")),
              this.pushStackLiteral(t ? "undefined" : "{}");
          },
          pushHash: function () {
            this.hash && this.hashes.push(this.hash),
              (this.hash = { values: [], types: [], contexts: [], ids: [] });
          },
          popHash: function () {
            var t = this.hash;
            (this.hash = this.hashes.pop()),
              this.trackIds && this.push(this.objectLiteral(t.ids)),
              this.stringParams &&
                (this.push(this.objectLiteral(t.contexts)),
                this.push(this.objectLiteral(t.types))),
              this.push(this.objectLiteral(t.values));
          },
          pushString: function (t) {
            this.pushStackLiteral(this.quotedString(t));
          },
          pushLiteral: function (t) {
            this.pushStackLiteral(t);
          },
          pushProgram: function (t) {
            this.pushStackLiteral(null != t ? this.programExpression(t) : null);
          },
          invokeHelper: function (t, e, i) {
            var n = this.popStack(),
              s = this.setupHelper(t, e),
              o = i ? [s.name, " || "] : "",
              r = ["("].concat(o, n);
            this.options.strict ||
              r.push(" || ", this.aliasable("helpers.helperMissing")),
              r.push(")"),
              this.push(this.source.functionCall(r, "call", s.callParams));
          },
          invokeKnownHelper: function (t, e) {
            var i = this.setupHelper(t, e);
            this.push(this.source.functionCall(i.name, "call", i.callParams));
          },
          invokeAmbiguous: function (t, e) {
            this.useRegister("helper");
            var i = this.popStack();
            this.emptyHash();
            var n = this.setupHelper(0, t, e),
              s = (this.lastHelper = this.nameLookup("helpers", t, "helper")),
              o = ["(", "(helper = ", s, " || ", i, ")"];
            this.options.strict ||
              ((o[0] = "(helper = "),
              o.push(
                " != null ? helper : ",
                this.aliasable("helpers.helperMissing")
              )),
              this.push([
                "(",
                o,
                n.paramsInit ? ["),(", n.paramsInit] : [],
                "),",
                "(typeof helper === ",
                this.aliasable('"function"'),
                " ? ",
                this.source.functionCall("helper", "call", n.callParams),
                " : helper))",
              ]);
          },
          invokePartial: function (t, e, i) {
            var n = [],
              s = this.setupParams(e, 1, n, !1);
            t && ((e = this.popStack()), delete s.name),
              i && (s.indent = JSON.stringify(i)),
              (s.helpers = "helpers"),
              (s.partials = "partials"),
              n.unshift(t ? e : this.nameLookup("partials", e, "partial")),
              this.options.compat && (s.depths = "depths"),
              (s = this.objectLiteral(s)),
              n.push(s),
              this.push(this.source.functionCall("this.invokePartial", "", n));
          },
          assignToHash: function (t) {
            var e,
              i,
              n,
              s = this.popStack();
            this.trackIds && (n = this.popStack()),
              this.stringParams &&
                ((i = this.popStack()), (e = this.popStack()));
            var o = this.hash;
            e && (o.contexts[t] = e),
              i && (o.types[t] = i),
              n && (o.ids[t] = n),
              (o.values[t] = s);
          },
          pushId: function (t, e, i) {
            "BlockParam" === t
              ? this.pushStackLiteral(
                  "blockParams[" +
                    e[0] +
                    "].path[" +
                    e[1] +
                    "]" +
                    (i ? " + " + JSON.stringify("." + i) : "")
                )
              : "PathExpression" === t
              ? this.pushString(e)
              : this.pushStackLiteral("SubExpression" === t ? "true" : "null");
          },
          compiler: o,
          compileChildren: function (t, e) {
            for (var i, n, s = t.children, o = 0, r = s.length; r > o; o++) {
              (i = s[o]), (n = new this.compiler());
              var a = this.matchExistingProgram(i);
              null == a
                ? (this.context.programs.push(""),
                  (a = this.context.programs.length),
                  (i.index = a),
                  (i.name = "program" + a),
                  (this.context.programs[a] = n.compile(
                    i,
                    e,
                    this.context,
                    !this.precompile
                  )),
                  (this.context.environments[a] = i),
                  (this.useDepths = this.useDepths || n.useDepths),
                  (this.useBlockParams =
                    this.useBlockParams || n.useBlockParams))
                : ((i.index = a),
                  (i.name = "program" + a),
                  (this.useDepths = this.useDepths || i.useDepths),
                  (this.useBlockParams =
                    this.useBlockParams || i.useBlockParams));
            }
          },
          matchExistingProgram: function (t) {
            for (var e = 0, i = this.context.environments.length; i > e; e++) {
              var n = this.context.environments[e];
              if (n && n.equals(t)) return e;
            }
          },
          programExpression: function (t) {
            var e = this.environment.children[t],
              i = [e.index, "data", e.blockParams];
            return (
              (this.useBlockParams || this.useDepths) && i.push("blockParams"),
              this.useDepths && i.push("depths"),
              "this.program(" + i.join(", ") + ")"
            );
          },
          useRegister: function (t) {
            this.registers[t] ||
              ((this.registers[t] = !0), this.registers.list.push(t));
          },
          push: function (t) {
            return (
              t instanceof s || (t = this.source.wrap(t)),
              this.inlineStack.push(t),
              t
            );
          },
          pushStackLiteral: function (t) {
            this.push(new s(t));
          },
          pushSource: function (t) {
            this.pendingContent &&
              (this.source.push(
                this.appendToBuffer(
                  this.source.quotedString(this.pendingContent),
                  this.pendingLocation
                )
              ),
              (this.pendingContent = void 0)),
              t && this.source.push(t);
          },
          replaceStack: function (t) {
            var e,
              i,
              n,
              o = ["("];
            if (!this.isInline()) throw new h("replaceStack on non-inline");
            var r = this.popStack(!0);
            if (r instanceof s) (e = [r.value]), (o = ["(", e]), (n = !0);
            else {
              i = !0;
              var a = this.incrStack();
              (o = ["((", this.push(a), " = ", r, ")"]), (e = this.topStack());
            }
            var l = t.call(this, e);
            n || this.popStack(),
              i && this.stackSlot--,
              this.push(o.concat(l, ")"));
          },
          incrStack: function () {
            return (
              this.stackSlot++,
              this.stackSlot > this.stackVars.length &&
                this.stackVars.push("stack" + this.stackSlot),
              this.topStackName()
            );
          },
          topStackName: function () {
            return "stack" + this.stackSlot;
          },
          flushInline: function () {
            var t = this.inlineStack;
            this.inlineStack = [];
            for (var e = 0, i = t.length; i > e; e++) {
              var n = t[e];
              if (n instanceof s) this.compileStack.push(n);
              else {
                var o = this.incrStack();
                this.pushSource([o, " = ", n, ";"]), this.compileStack.push(o);
              }
            }
          },
          isInline: function () {
            return this.inlineStack.length;
          },
          popStack: function (t) {
            var e = this.isInline(),
              i = (e ? this.inlineStack : this.compileStack).pop();
            if (!t && i instanceof s) return i.value;
            if (!e) {
              if (!this.stackSlot) throw new h("Invalid stack pop");
              this.stackSlot--;
            }
            return i;
          },
          topStack: function () {
            var t = this.isInline() ? this.inlineStack : this.compileStack,
              e = t[t.length - 1];
            return e instanceof s ? e.value : e;
          },
          contextName: function (t) {
            return this.useDepths && t ? "depths[" + t + "]" : "depth" + t;
          },
          quotedString: function (t) {
            return this.source.quotedString(t);
          },
          objectLiteral: function (t) {
            return this.source.objectLiteral(t);
          },
          aliasable: function (t) {
            var e = this.aliases[t];
            return e
              ? (e.referenceCount++, e)
              : ((e = this.aliases[t] = this.source.wrap(t)),
                (e.aliasable = !0),
                (e.referenceCount = 1),
                e);
          },
          setupHelper: function (t, e, i) {
            var n = [],
              s = this.setupHelperArgs(e, t, n, i),
              o = this.nameLookup("helpers", e, "helper");
            return {
              params: n,
              paramsInit: s,
              name: o,
              callParams: [this.contextName(0)].concat(n),
            };
          },
          setupParams: function (t, e, i) {
            var n,
              s = {},
              o = [],
              r = [],
              a = [];
            (s.name = this.quotedString(t)),
              (s.hash = this.popStack()),
              this.trackIds && (s.hashIds = this.popStack()),
              this.stringParams &&
                ((s.hashTypes = this.popStack()),
                (s.hashContexts = this.popStack()));
            var l = this.popStack(),
              u = this.popStack();
            (u || l) &&
              ((s.fn = u || "this.noop"), (s.inverse = l || "this.noop"));
            for (var h = e; h--; )
              (n = this.popStack()),
                (i[h] = n),
                this.trackIds && (a[h] = this.popStack()),
                this.stringParams &&
                  ((r[h] = this.popStack()), (o[h] = this.popStack()));
            return (
              this.trackIds && (s.ids = this.source.generateArray(a)),
              this.stringParams &&
                ((s.types = this.source.generateArray(r)),
                (s.contexts = this.source.generateArray(o))),
              this.options.data && (s.data = "data"),
              this.useBlockParams && (s.blockParams = "blockParams"),
              s
            );
          },
          setupHelperArgs: function (t, e, i, n) {
            var s = this.setupParams(t, e, i, !0);
            return (
              (s = this.objectLiteral(s)),
              n
                ? (this.useRegister("options"),
                  i.push("options"),
                  ["options=", s])
                : (i.push(s), "")
            );
          },
        };
        for (
          var p =
              "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(
                " "
              ),
            f = (o.RESERVED_WORDS = {}),
            m = 0,
            g = p.length;
          g > m;
          m++
        )
          f[p[m]] = !0;
        return (
          (o.isValidJavaScriptVariableName = function (t) {
            return !o.RESERVED_WORDS[t] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(t);
          }),
          (a = o)
        );
      })(i, e, t, p),
      m = (function (t, e, i, n, s) {
        "use strict";
        var o,
          r = t,
          a = e,
          l = i.parser,
          u = i.parse,
          h = n.Compiler,
          c = n.compile,
          d = n.precompile,
          p = s,
          f = r.create,
          m = function () {
            var t = f();
            return (
              (t.compile = function (e, i) {
                return c(e, i, t);
              }),
              (t.precompile = function (e, i) {
                return d(e, i, t);
              }),
              (t.AST = a),
              (t.Compiler = h),
              (t.JavaScriptCompiler = p),
              (t.Parser = l),
              (t.parse = u),
              t
            );
          };
        (r = m()), (r.create = m);
        var g = "undefined" != typeof global ? global : window,
          v = g.Handlebars;
        return (
          (r.noConflict = function () {
            g.Handlebars === r && (g.Handlebars = v);
          }),
          (r["default"] = r),
          (o = r)
        );
      })(o, r, c, d, f);
    return m;
  });
