function z() {
}
function dn(e, t) {
  for (const n in t)
    e[n] = t[n];
  return e;
}
function Jt(e) {
  return e();
}
function wt() {
  return /* @__PURE__ */ Object.create(null);
}
function ae(e) {
  e.forEach(Jt);
}
function V(e) {
  return typeof e == "function";
}
function K(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function mn(e) {
  return Object.keys(e).length === 0;
}
function Qt(e, ...t) {
  if (e == null)
    return z;
  const n = e.subscribe(...t);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function bt(e, t, n) {
  e.$$.on_destroy.push(Qt(t, n));
}
function hn(e, t, n, o) {
  if (e) {
    const i = xt(e, t, n, o);
    return e[0](i);
  }
}
function xt(e, t, n, o) {
  return e[1] && o ? dn(n.ctx.slice(), e[1](o(t))) : n.ctx;
}
function gn(e, t, n, o) {
  if (e[2] && o) {
    const i = e[2](o(n));
    if (t.dirty === void 0)
      return i;
    if (typeof i == "object") {
      const r = [], s = Math.max(t.dirty.length, i.length);
      for (let a = 0; a < s; a += 1)
        r[a] = t.dirty[a] | i[a];
      return r;
    }
    return t.dirty | i;
  }
  return t.dirty;
}
function pn(e, t, n, o, i, r) {
  if (i) {
    const s = xt(t, n, o, r);
    e.p(s, i);
  }
}
function yn(e) {
  if (e.ctx.length > 32) {
    const t = [], n = e.ctx.length / 32;
    for (let o = 0; o < n; o++)
      t[o] = -1;
    return t;
  }
  return -1;
}
function le(e, t) {
  e.appendChild(t);
}
function P(e, t, n) {
  e.insertBefore(t, n || null);
}
function O(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function mt(e, t) {
  for (let n = 0; n < e.length; n += 1)
    e[n] && e[n].d(t);
}
function B(e) {
  return document.createElementNS("http://www.w3.org/2000/svg", e);
}
function $t(e) {
  return document.createTextNode(e);
}
function J() {
  return $t(" ");
}
function he() {
  return $t("");
}
function j(e, t, n, o) {
  return e.addEventListener(t, n, o), () => e.removeEventListener(t, n, o);
}
function c(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function _n(e) {
  return Array.from(e.childNodes);
}
function Et(e, t, n) {
  e.classList[n ? "add" : "remove"](t);
}
function wn(e, t, { bubbles: n = !1, cancelable: o = !1 } = {}) {
  const i = document.createEvent("CustomEvent");
  return i.initCustomEvent(e, n, o, t), i;
}
let Be;
function De(e) {
  Be = e;
}
function en() {
  if (!Be)
    throw new Error("Function called outside component initialization");
  return Be;
}
function ye(e) {
  en().$$.on_mount.push(e);
}
function ge() {
  const e = en();
  return (t, n, { cancelable: o = !1 } = {}) => {
    const i = e.$$.callbacks[t];
    if (i) {
      const r = wn(t, n, { cancelable: o });
      return i.slice().forEach((s) => {
        s.call(e, r);
      }), !r.defaultPrevented;
    }
    return !0;
  };
}
function te(e, t) {
  const n = e.$$.callbacks[t.type];
  n && n.slice().forEach((o) => o.call(this, t));
}
const Le = [], Ye = [];
let ve = [];
const At = [], bn = /* @__PURE__ */ Promise.resolve();
let at = !1;
function En() {
  at || (at = !0, bn.then(tn));
}
function ct(e) {
  ve.push(e);
}
const et = /* @__PURE__ */ new Set();
let Ae = 0;
function tn() {
  if (Ae !== 0)
    return;
  const e = Be;
  do {
    try {
      for (; Ae < Le.length; ) {
        const t = Le[Ae];
        Ae++, De(t), An(t.$$);
      }
    } catch (t) {
      throw Le.length = 0, Ae = 0, t;
    }
    for (De(null), Le.length = 0, Ae = 0; Ye.length; )
      Ye.pop()();
    for (let t = 0; t < ve.length; t += 1) {
      const n = ve[t];
      et.has(n) || (et.add(n), n());
    }
    ve.length = 0;
  } while (Le.length);
  for (; At.length; )
    At.pop()();
  at = !1, et.clear(), De(e);
}
function An(e) {
  if (e.fragment !== null) {
    e.update(), ae(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(ct);
  }
}
function Sn(e) {
  const t = [], n = [];
  ve.forEach((o) => e.indexOf(o) === -1 ? t.push(o) : n.push(o)), n.forEach((o) => o()), ve = t;
}
const Je = /* @__PURE__ */ new Set();
let _e;
function de() {
  _e = {
    r: 0,
    c: [],
    p: _e
    // parent group
  };
}
function me() {
  _e.r || ae(_e.c), _e = _e.p;
}
function H(e, t) {
  e && e.i && (Je.delete(e), e.i(t));
}
function G(e, t, n, o) {
  if (e && e.o) {
    if (Je.has(e))
      return;
    Je.add(e), _e.c.push(() => {
      Je.delete(e), o && (n && e.d(1), o());
    }), e.o(t);
  } else
    o && o();
}
function ce(e) {
  e && e.c();
}
function oe(e, t, n, o) {
  const { fragment: i, after_update: r } = e.$$;
  i && i.m(t, n), o || ct(() => {
    const s = e.$$.on_mount.map(Jt).filter(V);
    e.$$.on_destroy ? e.$$.on_destroy.push(...s) : ae(s), e.$$.on_mount = [];
  }), r.forEach(ct);
}
function ie(e, t) {
  const n = e.$$;
  n.fragment !== null && (Sn(n.after_update), ae(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Mn(e, t) {
  e.$$.dirty[0] === -1 && (Le.push(e), En(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function Q(e, t, n, o, i, r, s, a = [-1]) {
  const l = Be;
  De(e);
  const u = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: r,
    update: z,
    not_equal: i,
    bound: wt(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (l ? l.$$.context : [])),
    // everything else
    callbacks: wt(),
    dirty: a,
    skip_bound: !1,
    root: t.target || l.$$.root
  };
  s && s(u.root);
  let m = !1;
  if (u.ctx = n ? n(e, t.props || {}, (f, h, ...d) => {
    const p = d.length ? d[0] : h;
    return u.ctx && i(u.ctx[f], u.ctx[f] = p) && (!u.skip_bound && u.bound[f] && u.bound[f](p), m && Mn(e, f)), h;
  }) : [], u.update(), m = !0, ae(u.before_update), u.fragment = o ? o(u.ctx) : !1, t.target) {
    if (t.hydrate) {
      const f = _n(t.target);
      u.fragment && u.fragment.l(f), f.forEach(O);
    } else
      u.fragment && u.fragment.c();
    t.intro && H(e.$$.fragment), oe(e, t.target, t.anchor, t.customElement), tn();
  }
  De(l);
}
class x {
  $destroy() {
    ie(this, 1), this.$destroy = z;
  }
  $on(t, n) {
    if (!V(n))
      return z;
    const o = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return o.push(n), () => {
      const i = o.indexOf(n);
      i !== -1 && o.splice(i, 1);
    };
  }
  $set(t) {
    this.$$set && !mn(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
var F = /* @__PURE__ */ ((e) => (e.ELLIPSE = "ELLIPSE", e.POLYGON = "POLYGON", e.RECTANGLE = "RECTANGLE", e.FREEHAND = "FREEHAND", e.LINE = "LINE", e))(F || {});
const ht = {}, Re = (e, t) => ht[e] = t, ft = (e) => ht[e.type].area(e), Tn = (e, t, n) => ht[e.type].intersects(e, t, n), be = (e) => {
  let t = 1 / 0, n = 1 / 0, o = -1 / 0, i = -1 / 0;
  return e.forEach(([r, s]) => {
    t = Math.min(t, r), n = Math.min(n, s), o = Math.max(o, r), i = Math.max(i, s);
  }), { minX: t, minY: n, maxX: o, maxY: i };
}, Ln = {
  area: (e) => Math.PI * e.geometry.rx * e.geometry.ry,
  intersects: (e, t, n) => {
    const { cx: o, cy: i, rx: r, ry: s } = e.geometry, a = 0, l = Math.cos(a), u = Math.sin(a), m = t - o, f = n - i, h = l * m + u * f, d = u * m - l * f;
    return h * h / (r * r) + d * d / (s * s) <= 1;
  }
};
Re(F.ELLIPSE, Ln);
const kn = {
  area: (e) => {
    const { points: t } = e.geometry;
    let n = 0, o = t.length - 1;
    for (let i = 0; i < t.length; i++)
      n += (t[o][0] + t[i][0]) * (t[o][1] - t[i][1]), o = i;
    return Math.abs(0.5 * n);
  },
  intersects: (e, t, n) => {
    const { points: o } = e.geometry;
    let i = !1;
    for (let r = 0, s = o.length - 1; r < o.length; s = r++) {
      const a = o[r][0], l = o[r][1], u = o[s][0], m = o[s][1];
      l > n != m > n && t < (u - a) * (n - l) / (m - l) + a && (i = !i);
    }
    return i;
  }
};
Re(F.POLYGON, kn);
const vn = {
  area: (e) => e.geometry.w * e.geometry.h,
  intersects: (e, t, n) => t >= e.geometry.x && t <= e.geometry.x + e.geometry.w && n >= e.geometry.y && n <= e.geometry.y + e.geometry.h
};
Re(F.RECTANGLE, vn);
const On = {
  area: (e) => {
    const { points: t } = e.geometry;
    let n = 0, o = t.length - 1;
    for (let i = 0; i < t.length; i++)
      n += (t[o][0] + t[i][0]) * (t[o][1] - t[i][1]), o = i;
    return Math.abs(0.5 * n);
  },
  intersects: (e, t, n) => {
    const { points: o } = e.geometry;
    let i = !1;
    for (let r = 0, s = o.length - 1; r < o.length; s = r++) {
      const a = o[r][0], l = o[r][1], u = o[s][0], m = o[s][1];
      l > n != m > n && t < (u - a) * (n - l) / (m - l) + a && (i = !i);
    }
    return i;
  }
};
Re(F.FREEHAND, On);
const Pn = {
  area: (e) => 0,
  intersects: (e, t, n) => {
    const o = e.geometry.x1, i = e.geometry.x2, r = e.geometry.y1, s = e.geometry.y2;
    var a = Math.sqrt(Math.pow(t - o, 2) + Math.pow(n - r, 2)), l = Math.sqrt(Math.pow(t - i, 2) + Math.pow(n - s, 2)), u = Math.sqrt(Math.pow(i - o, 2) + Math.pow(s - r, 2)), m = a + l;
    return Math.abs(m - u) <= 0.1;
  }
};
Re(F.LINE, Pn);
const In = (e, t = !1) => {
  const n = typeof e == "string" ? e : e.value, o = /^(xywh)=(pixel|percent)?:?(.+?),(.+?),(.+?),(.+)*/g, i = [...n.matchAll(o)][0], [r, s, a, l, u, m, f] = i;
  if (s !== "xywh")
    throw new Error("Unsupported MediaFragment: " + n);
  if (a && a !== "pixel")
    throw new Error(`Unsupported MediaFragment unit: ${a}`);
  const [h, d, p, _] = [l, u, m, f].map(parseFloat);
  return {
    type: F.RECTANGLE,
    geometry: {
      x: h,
      y: d,
      w: p,
      h: _,
      bounds: {
        minX: h,
        minY: t ? d - _ : d,
        maxX: h + p,
        maxY: t ? d : d + _
      }
    }
  };
}, Dn = (e) => {
  const { x: t, y: n, w: o, h: i } = e;
  return {
    type: "FragmentSelector",
    conformsTo: "http://www.w3.org/TR/media-frags/",
    value: `xywh=pixel:${t},${n},${o},${i}`
  };
}, nn = "http://www.w3.org/2000/svg", St = (e) => {
  const t = (o) => {
    Array.from(o.attributes).forEach((i) => {
      i.name.startsWith("on") && o.removeAttribute(i.name);
    });
  }, n = e.getElementsByTagName("script");
  return Array.from(n).reverse().forEach((o) => o.parentNode.removeChild(o)), Array.from(e.querySelectorAll("*")).forEach(t), e;
}, Bn = (e) => {
  const o = new XMLSerializer().serializeToString(e.documentElement).replace("<svg>", `<svg xmlns="${nn}">`);
  return new DOMParser().parseFromString(o, "image/svg+xml").documentElement;
};
function Yn(e, t) {
  var n = e[0] - t[0], o = e[1] - t[1];
  return n * n + o * o;
}
function Xn(e, t, n) {
  var o = t[0], i = t[1], r = n[0] - o, s = n[1] - i;
  if (r !== 0 || s !== 0) {
    var a = ((e[0] - o) * r + (e[1] - i) * s) / (r * r + s * s);
    a > 1 ? (o = n[0], i = n[1]) : a > 0 && (o += r * a, i += s * a);
  }
  return r = e[0] - o, s = e[1] - i, r * r + s * s;
}
function Rn(e, t) {
  for (var n = e[0], o = [n], i, r = 1, s = e.length; r < s; r++)
    i = e[r], Yn(i, n) > t && (o.push(i), n = i);
  return n !== i && o.push(i), o;
}
function ut(e, t, n, o, i) {
  for (var r = o, s, a = t + 1; a < n; a++) {
    var l = Xn(e[a], e[t], e[n]);
    l > r && (s = a, r = l);
  }
  r > o && (s - t > 1 && ut(e, t, s, o, i), i.push(e[s]), n - s > 1 && ut(e, s, n, o, i));
}
function Nn(e, t) {
  var n = e.length - 1, o = [e[0]];
  return ut(e, 0, n, t, o), o.push(e[n]), o;
}
function Cn(e, t, n) {
  if (e.length <= 2)
    return e;
  var o = t !== void 0 ? t * t : 1;
  return e = n ? e : Rn(e, o), e = Nn(e, o), e;
}
const gt = {
  size: 4,
  thinning: 0.3,
  smoothing: 0.5,
  streamline: 0.5,
  easing: (e) => e,
  start: {
    taper: 0,
    easing: (e) => e,
    cap: !0
  },
  end: {
    taper: 0,
    easing: (e) => e,
    cap: !0
  }
};
function Un(e) {
  if (!e.length)
    return "";
  const t = e.reduce(
    (n, [o, i], r, s) => {
      const [a, l] = s[(r + 1) % s.length];
      return n.push(o, i, (o + a) / 2, (i + l) / 2), n;
    },
    ["M", ...e[0], "Q"]
  );
  return t.push("Z"), t.join(" ");
}
function Xe(e, t, n = !1) {
  return Un(
    n ? Cn(e, 1) : e
  );
}
const on = (e) => {
  const n = new DOMParser().parseFromString(e, "image/svg+xml"), o = n.lookupPrefix(nn), i = n.lookupNamespaceURI(null);
  return o || i ? St(n).firstChild : St(Bn(n)).firstChild;
}, Hn = (e) => {
  const [t, n, o] = e.match(/(<path d=["|'])([^("|')]*)/) || [];
  if (!o)
    return;
  const i = /([MQZT])([^MQZT]*)/g, s = Array.from(o.matchAll(i)).map((a) => (a[1], a[2].trim().split(/\s+/).map(parseFloat)));
  return {
    type: F.FREEHAND,
    geometry: {
      points: s,
      bounds: be(s)
    }
  };
}, Fn = (e) => {
  const [t, n, o] = e.match(/(<polygon points=["|'])([^("|')]*)/) || [];
  if (!o)
    return;
  const i = o.split(" ").map((r) => r.split(",").map(parseFloat));
  return {
    type: F.POLYGON,
    geometry: {
      points: i,
      bounds: be(i)
    }
  };
}, Gn = (e) => {
  const t = on(e), n = parseFloat(t.getAttribute("cx")), o = parseFloat(t.getAttribute("cy")), i = parseFloat(t.getAttribute("rx")), r = parseFloat(t.getAttribute("ry")), s = {
    minX: n - i,
    minY: o - r,
    maxX: n + i,
    maxY: o + r
  };
  return {
    type: F.ELLIPSE,
    geometry: {
      cx: n,
      cy: o,
      rx: i,
      ry: r,
      bounds: s
    }
  };
}, Vn = (e) => {
  const t = on(e), n = parseFloat(t.getAttribute("x1")), o = parseFloat(t.getAttribute("x2")), i = parseFloat(t.getAttribute("y1")), r = parseFloat(t.getAttribute("y2")), s = {
    minX: Math.min(n, o),
    minY: Math.min(i, r),
    maxX: Math.max(n, o),
    maxY: Math.max(i, r)
  };
  return {
    type: F.LINE,
    geometry: {
      x1: n,
      x2: o,
      y1: i,
      y2: r,
      bounds: s
    }
  };
}, zn = (e) => {
  const t = typeof e == "string" ? e : e.value;
  if (t.includes("<polygon points="))
    return Fn(t);
  if (t.includes("<path d="))
    return Hn(t);
  if (t.includes("<ellipse "))
    return Gn(t);
  if (t.includes("<line "))
    return Vn(t);
}, jn = (e) => {
  let t;
  if (e.type === F.POLYGON) {
    const n = e.geometry, { points: o } = n;
    t = `<svg><polygon points="${o.map((i) => i.join(",")).join(" ")}" /></svg>`;
  } else if (e.type === F.FREEHAND) {
    const n = e.geometry;
    t = `<svg><path d="${Xe(n.points)}"/></svg>`;
  } else if (e.type === F.ELLIPSE) {
    const n = e.geometry;
    t = `<svg><ellipse cx="${n.cx}" cy="${n.cy}" rx="${n.rx}" ry="${n.ry}" /></svg>`;
  } else if (e.type === F.LINE) {
    const n = e.geometry;
    t = `<svg><line x1="${n.x1}" x2="${n.x2}" y1="${n.y1}" y2="${n.y2}" /></svg>`;
  }
  if (t)
    return { type: "SvgSelector", value: t };
  throw `Unsupported shape type: ${e.type}`;
};
let We;
const qn = new Uint8Array(16);
function Wn() {
  if (!We && (We = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !We))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return We(qn);
}
const $ = [];
for (let e = 0; e < 256; ++e)
  $.push((e + 256).toString(16).slice(1));
function Kn(e, t = 0) {
  return $[e[t + 0]] + $[e[t + 1]] + $[e[t + 2]] + $[e[t + 3]] + "-" + $[e[t + 4]] + $[e[t + 5]] + "-" + $[e[t + 6]] + $[e[t + 7]] + "-" + $[e[t + 8]] + $[e[t + 9]] + "-" + $[e[t + 10]] + $[e[t + 11]] + $[e[t + 12]] + $[e[t + 13]] + $[e[t + 14]] + $[e[t + 15]];
}
const Zn = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Mt = {
  randomUUID: Zn
};
function rn(e, t, n) {
  if (Mt.randomUUID && !t && !e)
    return Mt.randomUUID();
  e = e || {};
  const o = e.random || (e.rng || Wn)();
  if (o[6] = o[6] & 15 | 64, o[8] = o[8] & 63 | 128, t) {
    n = n || 0;
    for (let i = 0; i < 16; ++i)
      t[n + i] = o[i];
    return t;
  }
  return Kn(o);
}
var Tt = Object.prototype.hasOwnProperty;
function we(e, t) {
  var n, o;
  if (e === t)
    return !0;
  if (e && t && (n = e.constructor) === t.constructor) {
    if (n === Date)
      return e.getTime() === t.getTime();
    if (n === RegExp)
      return e.toString() === t.toString();
    if (n === Array) {
      if ((o = e.length) === t.length)
        for (; o-- && we(e[o], t[o]); )
          ;
      return o === -1;
    }
    if (!n || typeof e == "object") {
      o = 0;
      for (n in e)
        if (Tt.call(e, n) && ++o && !Tt.call(t, n) || !(n in t) || !we(e[n], t[n]))
          return !1;
      return Object.keys(t).length === o;
    }
  }
  return e !== e && t !== t;
}
function tt() {
}
function Jn(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
const Se = [];
function pt(e, t = tt) {
  let n;
  const o = /* @__PURE__ */ new Set();
  function i(a) {
    if (Jn(e, a) && (e = a, n)) {
      const l = !Se.length;
      for (const u of o)
        u[1](), Se.push(u, e);
      if (l) {
        for (let u = 0; u < Se.length; u += 2)
          Se[u][0](Se[u + 1]);
        Se.length = 0;
      }
    }
  }
  function r(a) {
    i(a(e));
  }
  function s(a, l = tt) {
    const u = [a, l];
    return o.add(u), o.size === 1 && (n = t(i) || tt), a(e), () => {
      o.delete(u), o.size === 0 && n && (n(), n = null);
    };
  }
  return { set: i, update: r, subscribe: s };
}
const Qn = (e) => {
  const { subscribe: t, set: n } = pt(null);
  let o = null;
  return t((i) => o = i), e.observe(({ changes: i }) => {
    if (o) {
      i.deleted.some((s) => s.id === o) && n(null);
      const r = i.updated.find(({ oldValue: s }) => s.id === o);
      r && n(r.newValue.id);
    }
  }), {
    get current() {
      return o;
    },
    subscribe: t,
    set: n
  };
};
var sn = /* @__PURE__ */ ((e) => (e.EDIT = "EDIT", e.SELECT = "SELECT", e.NONE = "NONE", e))(sn || {});
const nt = { selected: [] }, xn = (e, t = "EDIT") => {
  const { subscribe: n, set: o } = pt(nt);
  let i = nt;
  n((f) => i = f);
  const r = () => o(nt), s = () => {
    var f;
    return ((f = i.selected) == null ? void 0 : f.length) === 0;
  }, a = (f) => {
    if (i.selected.length === 0)
      return !1;
    const h = typeof f == "string" ? f : f.id;
    return i.selected.some((d) => d.id === h);
  }, l = (f, h) => {
    const d = e.getAnnotation(f);
    if (d) {
      const p = $n(d, t);
      o(p === "EDIT" ? { selected: [{ id: f, editable: !0 }], pointerEvent: h } : p === "SELECT" ? { selected: [{ id: f }], pointerEvent: h } : { selected: [], pointerEvent: h });
    } else
      console.warn("Invalid selection: " + f);
  }, u = (f, h = !0) => {
    const d = Array.isArray(f) ? f : [f], p = d.map((_) => e.getAnnotation(_)).filter((_) => _);
    o({ selected: p.map(({ id: _ }) => ({ id: _, editable: h })) }), p.length !== d.length && console.warn("Invalid selection", f);
  }, m = (f) => {
    if (i.selected.length === 0)
      return !1;
    const { selected: h } = i;
    h.filter(({ id: d }) => f.includes(d)).length > 0 && o({ selected: h.filter(({ id: d }) => !f.includes(d)) });
  };
  return e.observe(({ changes: f }) => m(f.deleted.map((h) => h.id))), {
    clear: r,
    clickSelect: l,
    get selected() {
      return i ? [...i.selected] : null;
    },
    get pointerEvent() {
      return i ? i.pointerEvent : null;
    },
    isEmpty: s,
    isSelected: a,
    setSelected: u,
    subscribe: n
  };
}, $n = (e, t) => typeof t == "function" ? t(e) || "EDIT" : t || "EDIT", eo = [];
for (let e = 0; e < 256; ++e)
  eo.push((e + 256).toString(16).slice(1));
typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const to = (e, t) => {
  const n = new Set(e.bodies.map((o) => o.id));
  return t.bodies.filter((o) => !n.has(o.id));
}, no = (e, t) => {
  const n = new Set(t.bodies.map((o) => o.id));
  return e.bodies.filter((o) => !n.has(o.id));
}, oo = (e, t) => t.bodies.map((n) => {
  const o = e.bodies.find((i) => i.id === n.id);
  return { newBody: n, oldBody: o && !we(o, n) ? o : void 0 };
}).filter(({ oldBody: n }) => n), io = (e, t) => !we(e.target, t.target), ln = (e, t) => {
  const n = to(e, t), o = no(e, t), i = oo(e, t);
  return {
    oldValue: e,
    newValue: t,
    bodiesCreated: n.length > 0 ? n : void 0,
    bodiesDeleted: o.length > 0 ? o : void 0,
    bodiesUpdated: i.length > 0 ? i : void 0,
    targetUpdated: io(e, t) ? { oldTarget: e.target, newTarget: t.target } : void 0
  };
};
var W = /* @__PURE__ */ ((e) => (e.LOCAL = "LOCAL", e.REMOTE = "REMOTE", e))(W || {});
const ro = (e, t) => {
  var n, o;
  const { changes: i, origin: r } = t;
  if (!(!e.options.origin || e.options.origin === r))
    return !1;
  if (e.options.ignore) {
    const { ignore: s } = e.options, a = (l) => (l == null ? void 0 : l.length) > 0;
    if (!(a(i.created) || a(i.deleted))) {
      const l = (n = i.updated) == null ? void 0 : n.some((m) => a(m.bodiesCreated) || a(m.bodiesDeleted) || a(m.bodiesUpdated)), u = (o = i.updated) == null ? void 0 : o.some((m) => m.targetUpdated);
      if (s === "BODY_ONLY" && l && !u || s === "TARGET_ONLY" && u && !l)
        return !1;
    }
  }
  if (e.options.annotations) {
    const s = /* @__PURE__ */ new Set([
      ...i.created.map((a) => a.id),
      ...i.deleted.map((a) => a.id),
      ...i.updated.map(({ oldValue: a }) => a.id)
    ]);
    return !!(Array.isArray(e.options.annotations) ? e.options.annotations : [e.options.annotations]).find((a) => s.has(a));
  } else
    return !0;
}, so = (e, t) => {
  const n = new Set((e.created || []).map((f) => f.id)), o = new Set((e.updated || []).map(({ newValue: f }) => f.id)), i = new Set((t.created || []).map((f) => f.id)), r = new Set((t.deleted || []).map((f) => f.id)), s = new Set((t.updated || []).map(({ oldValue: f }) => f.id)), a = new Set((t.updated || []).filter(({ oldValue: f }) => n.has(f.id) || o.has(f.id)).map(({ oldValue: f }) => f.id)), l = [
    ...(e.created || []).filter((f) => !r.has(f.id)).map((f) => s.has(f.id) ? t.updated.find(({ oldValue: h }) => h.id === f.id).newValue : f),
    ...t.created || []
  ], u = [
    ...(e.deleted || []).filter((f) => !i.has(f.id)),
    ...(t.deleted || []).filter((f) => !n.has(f.id))
  ], m = [
    ...(e.updated || []).filter(({ newValue: f }) => !r.has(f.id)).map((f) => {
      const { oldValue: h, newValue: d } = f;
      if (s.has(d.id)) {
        const p = t.updated.find((_) => _.oldValue.id === d.id).newValue;
        return ln(h, p);
      } else
        return f;
    }),
    ...(t.updated || []).filter(({ oldValue: f }) => !a.has(f.id))
  ];
  return { created: l, deleted: u, updated: m };
}, lo = (e) => e.id !== void 0, ao = () => {
  const e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map(), n = [], o = (b, E = {}) => n.push({ onChange: b, options: E }), i = (b) => {
    const E = n.findIndex((S) => S.onChange == b);
    E > -1 && n.splice(E, 1);
  }, r = (b, E) => {
    const S = {
      origin: b,
      changes: {
        created: E.created || [],
        updated: E.updated || [],
        deleted: E.deleted || []
      },
      state: [...e.values()]
    };
    n.forEach((L) => {
      ro(L, S) && L.onChange(S);
    });
  }, s = (b, E = W.LOCAL) => {
    if (e.get(b.id))
      throw Error(`Cannot add annotation ${b.id} - exists already`);
    e.set(b.id, b), b.bodies.forEach((S) => t.set(S.id, b.id)), r(E, { created: [b] });
  }, a = (b, E) => {
    const S = typeof b == "string" ? E : b, L = typeof b == "string" ? b : b.id, D = e.get(L);
    if (D) {
      const N = ln(D, S);
      return L === S.id ? e.set(L, S) : (e.delete(L), e.set(S.id, S)), D.bodies.forEach((C) => t.delete(C.id)), S.bodies.forEach((C) => t.set(C.id, S.id)), N;
    } else
      console.warn(`Cannot update annotation ${L} - does not exist`);
  }, l = (b, E = W.LOCAL, S = W.LOCAL) => {
    const L = lo(E) ? S : E, D = a(b, E);
    D && r(L, { updated: [D] });
  }, u = (b, E = W.LOCAL) => {
    const S = b.reduce((L, D) => {
      const N = a(D);
      return N ? [...L, N] : L;
    }, []);
    S.length > 0 && r(E, { updated: S });
  }, m = (b, E = W.LOCAL) => {
    const S = e.get(b.annotation);
    if (S) {
      const L = {
        ...S,
        bodies: [...S.bodies, b]
      };
      e.set(S.id, L), t.set(b.id, L.id), r(E, { updated: [{
        oldValue: S,
        newValue: L,
        bodiesCreated: [b]
      }] });
    } else
      console.warn(`Attempt to add body to missing annotation: ${b.annotation}`);
  }, f = () => [...e.values()], h = (b = W.LOCAL) => {
    const E = [...e.values()];
    e.clear(), t.clear(), r(b, { deleted: E });
  }, d = (b, E = !0, S = W.LOCAL) => {
    if (E) {
      const L = [...e.values()];
      e.clear(), t.clear(), b.forEach((D) => {
        e.set(D.id, D), D.bodies.forEach((N) => t.set(N.id, D.id));
      }), r(S, { created: b, deleted: L });
    } else {
      const L = b.reduce((D, N) => {
        const C = e.get(N.id);
        return C ? [...D, C] : D;
      }, []);
      if (L.length > 0)
        throw Error(`Bulk insert would overwrite the following annotations: ${L.map((D) => D.id).join(", ")}`);
      b.forEach((D) => {
        e.set(D.id, D), D.bodies.forEach((N) => t.set(N.id, D.id));
      }), r(S, { created: b });
    }
  }, p = (b) => {
    const E = typeof b == "string" ? b : b.id, S = e.get(E);
    if (S)
      return e.delete(E), S.bodies.forEach((L) => t.delete(L.id)), S;
    console.warn(`Attempt to delete missing annotation: ${E}`);
  }, _ = (b, E = W.LOCAL) => {
    const S = p(b);
    S && r(E, { deleted: [S] });
  }, A = (b, E = W.LOCAL) => {
    const S = b.reduce((L, D) => {
      const N = p(D);
      return N ? [...L, N] : L;
    }, []);
    S.length > 0 && r(E, { deleted: S });
  }, w = (b, E = W.LOCAL) => {
    const S = e.get(b.annotation);
    if (S) {
      const L = S.bodies.find((D) => D.id === b.id);
      if (L) {
        t.delete(L.id);
        const D = {
          ...S,
          bodies: S.bodies.filter((N) => N.id !== b.id)
        };
        e.set(S.id, D), r(E, { updated: [{
          oldValue: S,
          newValue: D,
          bodiesDeleted: [L]
        }] });
      } else
        console.warn(`Attempt to delete missing body ${b.id} from annotation ${b.annotation}`);
    } else
      console.warn(`Attempt to delete body from missing annotation ${b.annotation}`);
  }, g = (b) => {
    const E = e.get(b);
    return E ? { ...E } : void 0;
  }, y = (b) => {
    const E = t.get(b);
    if (E) {
      const S = g(E).bodies.find((L) => L.id === b);
      if (S)
        return S;
      console.error(`Store integrity error: body ${b} in index, but not in annotation`);
    } else
      console.warn(`Attempt to retrieve missing body: ${b}`);
  }, M = (b, E) => {
    if (b.annotation !== E.annotation)
      throw "Annotation integrity violation: annotation ID must be the same when updating bodies";
    const S = e.get(b.annotation);
    if (S) {
      const L = S.bodies.find((N) => N.id === b.id), D = {
        ...S,
        bodies: S.bodies.map((N) => N.id === L.id ? E : N)
      };
      return e.set(S.id, D), L.id !== E.id && (t.delete(L.id), t.set(E.id, D.id)), {
        oldValue: S,
        newValue: D,
        bodiesUpdated: [{ oldBody: L, newBody: E }]
      };
    } else
      console.warn(`Attempt to add body to missing annotation ${b.annotation}`);
  }, k = (b, E, S = W.LOCAL) => {
    const L = M(b, E);
    r(S, { updated: [L] });
  }, I = (b, E = W.LOCAL) => {
    const S = b.map((L) => M({ id: L.id, annotation: L.annotation }, L));
    r(E, { updated: S });
  }, R = (b) => {
    const E = e.get(b.annotation);
    if (E) {
      const S = {
        ...E,
        target: {
          ...E.target,
          ...b
        }
      };
      return e.set(E.id, S), {
        oldValue: E,
        newValue: S,
        targetUpdated: {
          oldTarget: E.target,
          newTarget: b
        }
      };
    } else
      console.warn(`Attempt to update target on missing annotation: ${b.annotation}`);
  };
  return {
    addAnnotation: s,
    addBody: m,
    all: f,
    bulkAddAnnotation: d,
    bulkDeleteAnnotation: A,
    bulkUpdateAnnotation: u,
    bulkUpdateBodies: I,
    bulkUpdateTargets: (b, E = W.LOCAL) => {
      const S = b.map(R).filter((L) => L);
      S.length > 0 && r(E, { updated: S });
    },
    clear: h,
    deleteAnnotation: _,
    deleteBody: w,
    getAnnotation: g,
    getBody: y,
    observe: o,
    unobserve: i,
    updateAnnotation: l,
    updateBody: k,
    updateTarget: (b, E = W.LOCAL) => {
      const S = R(b);
      S && r(E, { updated: [S] });
    }
  };
}, co = (e) => ({
  ...e,
  subscribe: (t) => {
    const n = (o) => t(o.state);
    return e.observe(n), t(e.all()), () => e.unobserve(n);
  }
});
let fo = () => ({
  emit(e, ...t) {
    let n = this.events[e] || [];
    for (let o = 0, i = n.length; o < i; o++)
      n[o](...t);
  },
  events: {},
  on(e, t) {
    var n;
    return (n = this.events[e]) != null && n.push(t) || (this.events[e] = [t]), () => {
      var o;
      this.events[e] = (o = this.events[e]) == null ? void 0 : o.filter((i) => t !== i);
    };
  }
});
const uo = 250, mo = (e) => {
  const t = fo(), n = [];
  let o = -1, i = !1, r = 0;
  const s = (d) => {
    if (!i) {
      const { changes: p } = d, _ = performance.now();
      if (_ - r > uo)
        n.splice(o + 1), n.push(p), o = n.length - 1;
      else {
        const A = n.length - 1;
        n[A] = so(n[A], p);
      }
      r = _;
    }
    i = !1;
  };
  e.observe(s, { origin: W.LOCAL });
  const a = (d) => (d == null ? void 0 : d.length) > 0 && e.bulkDeleteAnnotation(d), l = (d) => (d == null ? void 0 : d.length) > 0 && e.bulkAddAnnotation(d, !1), u = (d) => (d == null ? void 0 : d.length) > 0 && e.bulkUpdateAnnotation(d.map(({ oldValue: p }) => p)), m = (d) => (d == null ? void 0 : d.length) > 0 && e.bulkUpdateAnnotation(d.map(({ newValue: p }) => p)), f = (d) => (d == null ? void 0 : d.length) > 0 && e.bulkAddAnnotation(d, !1), h = (d) => (d == null ? void 0 : d.length) > 0 && e.bulkDeleteAnnotation(d);
  return {
    canRedo: () => n.length - 1 > o,
    canUndo: () => o > -1,
    destroy: () => e.unobserve(s),
    on: (d, p) => t.on(d, p),
    redo: () => {
      if (n.length - 1 > o) {
        i = !0;
        const { created: d, updated: p, deleted: _ } = n[o + 1];
        l(d), m(p), h(_), t.emit("redo", n[o + 1]), o += 1;
      }
    },
    undo: () => {
      if (o > -1) {
        i = !0;
        const { created: d, updated: p, deleted: _ } = n[o];
        a(d), u(p), f(_), t.emit("undo", n[o]), o -= 1;
      }
    }
  };
}, ho = () => {
  const { subscribe: e, set: t } = pt([]);
  return {
    subscribe: e,
    set: t
  };
}, go = (e, t, n, o) => {
  const { store: i, selection: r, hover: s, viewport: a } = e, l = /* @__PURE__ */ new Map();
  let u = [], m, f;
  const h = (w, g) => {
    l.has(w) ? l.get(w).push(g) : l.set(w, [g]);
  }, d = (w, g) => {
    const y = l.get(w);
    y && y.indexOf(g) > 0 && y.splice(y.indexOf(g), 1);
  }, p = (w, g, y) => {
    l.has(w) && setTimeout(() => {
      l.get(w).forEach((M) => {
        if (n) {
          const k = Array.isArray(g) ? g.map((R) => n.serialize(R)) : n.serialize(g), I = y ? y instanceof PointerEvent ? y : n.serialize(y) : void 0;
          M(k, I);
        } else
          M(g, y);
      });
    }, 1);
  }, _ = () => {
    const { selected: w } = r, g = w.map(({ id: y }) => i.getAnnotation(y));
    g.forEach((y) => {
      const M = u.find((k) => k.id === y.id);
      (!M || !we(M, y)) && p("updateAnnotation", y, M);
    }), u = u.map((y) => g.find(({ id: k }) => k === y.id) || y);
  };
  r.subscribe(({ selected: w }) => {
    if (!(u.length === 0 && w.length === 0)) {
      if (u.length === 0 && w.length > 0)
        u = w.map(({ id: g }) => i.getAnnotation(g));
      else if (u.length > 0 && w.length === 0)
        u.forEach((g) => {
          const y = i.getAnnotation(g.id);
          y && !we(y, g) && p("updateAnnotation", y, g);
        }), u = [];
      else {
        const g = new Set(u.map((M) => M.id)), y = new Set(w.map(({ id: M }) => M));
        u.filter((M) => !y.has(M.id)).forEach((M) => {
          const k = i.getAnnotation(M.id);
          k && !we(k, M) && p("updateAnnotation", k, M);
        }), u = [
          // Remove annotations that were deselected
          ...u.filter((M) => y.has(M.id)),
          // Add editable annotations that were selected
          ...w.filter(({ id: M }) => !g.has(M)).map(({ id: M }) => i.getAnnotation(M))
        ];
      }
      p("selectionChanged", u);
    }
  }), s.subscribe((w) => {
    !m && w ? p("mouseEnterAnnotation", i.getAnnotation(w)) : m && !w ? p("mouseLeaveAnnotation", i.getAnnotation(m)) : m && w && (p("mouseLeaveAnnotation", i.getAnnotation(m)), p("mouseEnterAnnotation", i.getAnnotation(w))), m = w;
  }), a == null || a.subscribe((w) => p("viewportIntersect", w.map(i.getAnnotation))), i.observe((w) => {
    o && (f && clearTimeout(f), f = setTimeout(_, 1e3));
    const { created: g, deleted: y } = w.changes;
    g.forEach((M) => p("createAnnotation", M)), y.forEach((M) => p("deleteAnnotation", M)), w.changes.updated.filter((M) => [
      ...M.bodiesCreated || [],
      ...M.bodiesDeleted || [],
      ...M.bodiesUpdated || []
    ].length > 0).forEach(({ oldValue: M, newValue: k }) => {
      const I = u.find((R) => R.id === M.id) || M;
      u = u.map((R) => R.id === M.id ? k : R), p("updateAnnotation", k, I);
    });
  }, { origin: W.LOCAL }), i.observe((w) => {
    if (u) {
      const g = new Set(u.map((M) => M.id)), y = w.changes.updated.filter(({ newValue: M }) => g.has(M.id)).map(({ newValue: M }) => M);
      y.length > 0 && (u = u.map((M) => y.find((I) => I.id === M.id) || M));
    }
  }, { origin: W.REMOTE });
  const A = (w) => (g) => {
    const { created: y, deleted: M, updated: k } = g;
    y.forEach((I) => p("createAnnotation", I)), M.forEach((I) => p("deleteAnnotation", I)), w ? k.forEach((I) => p("updateAnnotation", I.oldValue, I.newValue)) : k.forEach((I) => p("updateAnnotation", I.newValue, I.oldValue));
  };
  return t.on("undo", A(!0)), t.on("redo", A(!1)), { on: h, off: d, emit: p };
}, po = (e) => (t) => t.reduce((n, o) => {
  const { parsed: i, error: r } = e.parse(o);
  return r ? {
    parsed: n.parsed,
    failed: [...n.failed, o]
  } : {
    parsed: [...n.parsed, i],
    failed: n.failed
  };
}, { parsed: [], failed: [] }), yo = (e, t, n) => {
  const { store: o, selection: i } = e, r = (A) => {
    if (n) {
      const { parsed: w, error: g } = n.parse(A);
      w ? o.addAnnotation(w, W.REMOTE) : console.error(g);
    } else
      o.addAnnotation(A, W.REMOTE);
  }, s = () => i.clear(), a = () => o.clear(), l = (A) => {
    const w = o.getAnnotation(A);
    return n && w ? n.serialize(w) : w;
  }, u = () => n ? o.all().map(n.serialize) : o.all(), m = () => {
    var A;
    const w = (((A = i.selected) == null ? void 0 : A.map((g) => g.id)) || []).map((g) => o.getAnnotation(g));
    return n ? w.map(n.serialize) : w;
  }, f = (A) => fetch(A).then((w) => w.json()).then((w) => (d(w), w)), h = (A) => {
    if (typeof A == "string") {
      const w = o.getAnnotation(A);
      return o.deleteAnnotation(A), n ? n.serialize(w) : w;
    } else {
      const w = n ? n.parse(A).parsed : A;
      return o.deleteAnnotation(w), A;
    }
  }, d = (A) => {
    if (n) {
      const { parsed: w, failed: g } = po(n)(A);
      g.length > 0 && console.warn(`Discarded ${g.length} invalid annotations`, g), o.bulkAddAnnotation(w, !0, W.REMOTE);
    } else
      o.bulkAddAnnotation(A, !0, W.REMOTE);
  }, p = (A) => {
    A ? i.setSelected(A) : i.clear();
  }, _ = (A) => {
    if (n) {
      const w = n.parse(A).parsed, g = n.serialize(o.getAnnotation(w.id));
      return o.updateAnnotation(w), g;
    } else {
      const w = o.getAnnotation(A.id);
      return o.updateAnnotation(A), w;
    }
  };
  return {
    addAnnotation: r,
    cancelSelected: s,
    canRedo: t.canRedo,
    canUndo: t.canUndo,
    clearAnnotations: a,
    getAnnotationById: l,
    getAnnotations: u,
    getSelected: m,
    loadAnnotations: f,
    redo: t.redo,
    removeAnnotation: h,
    setAnnotations: d,
    setSelected: p,
    undo: t.undo,
    updateAnnotation: _
  };
};
let _o = (e) => crypto.getRandomValues(new Uint8Array(e)), wo = (e, t, n) => {
  let o = (2 << Math.log(e.length - 1) / Math.LN2) - 1, i = -~(1.6 * o * t / e.length);
  return (r = t) => {
    let s = "";
    for (; ; ) {
      let a = n(i), l = i;
      for (; l--; )
        if (s += e[a[l] & o] || "", s.length === r)
          return s;
    }
  };
}, bo = (e, t = 21) => wo(e, t, _o), Eo = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
const Ao = () => ({ isGuest: !0, id: bo("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_", 20)() }), So = (e) => {
  const t = JSON.stringify(e);
  let n = 0;
  for (let o = 0, i = t.length; o < i; o++) {
    let r = t.charCodeAt(o);
    n = (n << 5) - n + r, n |= 0;
  }
  return `${n}`;
}, an = (e) => e ? typeof e == "object" ? { ...e } : e : void 0, Mo = (e, t) => (Array.isArray(e) ? e : [e]).map((n) => {
  const { id: o, type: i, purpose: r, value: s, created: a, creator: l, ...u } = n;
  return {
    id: o || `temp-${So(n)}`,
    annotation: t,
    type: i,
    purpose: r,
    value: s,
    created: a ? new Date(a) : void 0,
    creator: an(l),
    ...u
  };
}), To = (e) => e.map((t) => {
  var n;
  const o = { ...t };
  return delete o.annotation, (n = o.id) != null && n.startsWith("temp-") && delete o.id, o;
});
Eo();
const fr = (e, t = !1) => ({ parse: (i) => Lo(i, t), serialize: (i) => ko(i, e) }), Lo = (e, t = !1) => {
  const n = e.id || rn(), {
    creator: o,
    created: i,
    updatedBy: r,
    updated: s,
    body: a,
    ...l
  } = e, u = Mo(a, n), m = Array.isArray(e.target) ? e.target[0] : e.target, f = Array.isArray(m.selector) ? m.selector[0] : m.selector, h = f.type === "FragmentSelector" ? In(f, t) : f.type === "SvgSelector" ? zn(f) : void 0;
  return h ? {
    parsed: {
      ...l,
      id: n,
      bodies: u,
      target: {
        created: i ? new Date(i) : void 0,
        creator: an(o),
        ...l.target,
        annotation: n,
        selector: h
      }
    }
  } : {
    error: Error(`Unknown selector type: ${f.type}`)
  };
}, ko = (e, t) => {
  const {
    selector: n,
    creator: o,
    created: i,
    updated: r,
    updatedBy: s,
    ...a
  } = e.target, l = n.type == F.RECTANGLE ? Dn(n.geometry) : jn(n);
  return {
    ...e,
    "@context": "http://www.w3.org/ns/anno.jsonld",
    id: e.id,
    type: "Annotation",
    body: To(e.bodies),
    creator: o,
    created: i == null ? void 0 : i.toISOString(),
    target: {
      ...a,
      source: t,
      selector: l
    }
  };
};
function Lt(e, t, n) {
  const o = e.slice();
  return o[11] = t[n], o[13] = n, o;
}
function kt(e) {
  let t, n, o, i, r;
  return {
    c() {
      t = B("rect"), c(t, "class", "a9s-corner-handle"), c(t, "x", n = /*point*/
      e[11][0] - /*handleSize*/
      e[3] / 2), c(t, "y", o = /*point*/
      e[11][1] - /*handleSize*/
      e[3] / 2), c(
        t,
        "height",
        /*handleSize*/
        e[3]
      ), c(
        t,
        "width",
        /*handleSize*/
        e[3]
      );
    },
    m(s, a) {
      P(s, t, a), i || (r = j(t, "pointerdown", function() {
        V(
          /*grab*/
          e[10](T(
            /*idx*/
            e[13]
          ))
        ) && e[10](T(
          /*idx*/
          e[13]
        )).apply(this, arguments);
      }), i = !0);
    },
    p(s, a) {
      e = s, a & /*geom, handleSize*/
      24 && n !== (n = /*point*/
      e[11][0] - /*handleSize*/
      e[3] / 2) && c(t, "x", n), a & /*geom, handleSize*/
      24 && o !== (o = /*point*/
      e[11][1] - /*handleSize*/
      e[3] / 2) && c(t, "y", o), a & /*handleSize*/
      8 && c(
        t,
        "height",
        /*handleSize*/
        e[3]
      ), a & /*handleSize*/
      8 && c(
        t,
        "width",
        /*handleSize*/
        e[3]
      );
    },
    d(s) {
      s && O(t), i = !1, r();
    }
  };
}
function vo(e) {
  let t, n, o, i, r, s, a, l, u, m, f = (
    /*geom*/
    e[4].points
  ), h = [];
  for (let d = 0; d < f.length; d += 1)
    h[d] = kt(Lt(e, f, d));
  return {
    c() {
      t = B("polygon"), i = J(), r = B("polygon"), a = J();
      for (let d = 0; d < h.length; d += 1)
        h[d].c();
      l = he(), c(t, "class", "a9s-outer"), c(t, "style", n = /*computedStyle*/
      e[1] ? "display:none;" : void 0), c(t, "points", o = /*geom*/
      e[4].points.map(vt).join(" ")), c(r, "class", "a9s-inner a9s-shape-handle"), c(
        r,
        "style",
        /*computedStyle*/
        e[1]
      ), c(r, "points", s = /*geom*/
      e[4].points.map(Ot).join(" "));
    },
    m(d, p) {
      P(d, t, p), P(d, i, p), P(d, r, p), P(d, a, p);
      for (let _ = 0; _ < h.length; _ += 1)
        h[_] && h[_].m(d, p);
      P(d, l, p), u || (m = [
        j(t, "pointerdown", function() {
          V(
            /*grab*/
            e[10](T.SHAPE)
          ) && e[10](T.SHAPE).apply(this, arguments);
        }),
        j(r, "pointerdown", function() {
          V(
            /*grab*/
            e[10](T.SHAPE)
          ) && e[10](T.SHAPE).apply(this, arguments);
        })
      ], u = !0);
    },
    p(d, p) {
      if (e = d, p & /*computedStyle*/
      2 && n !== (n = /*computedStyle*/
      e[1] ? "display:none;" : void 0) && c(t, "style", n), p & /*geom*/
      16 && o !== (o = /*geom*/
      e[4].points.map(vt).join(" ")) && c(t, "points", o), p & /*computedStyle*/
      2 && c(
        r,
        "style",
        /*computedStyle*/
        e[1]
      ), p & /*geom*/
      16 && s !== (s = /*geom*/
      e[4].points.map(Ot).join(" ")) && c(r, "points", s), p & /*geom, handleSize, grab, Handle*/
      1048) {
        f = /*geom*/
        e[4].points;
        let _;
        for (_ = 0; _ < f.length; _ += 1) {
          const A = Lt(e, f, _);
          h[_] ? h[_].p(A, p) : (h[_] = kt(A), h[_].c(), h[_].m(l.parentNode, l));
        }
        for (; _ < h.length; _ += 1)
          h[_].d(1);
        h.length = f.length;
      }
    },
    d(d) {
      d && O(t), d && O(i), d && O(r), d && O(a), mt(h, d), d && O(l), u = !1, ae(m);
    }
  };
}
function Oo(e) {
  let t, n;
  return t = new Ne({
    props: {
      shape: (
        /*shape*/
        e[0]
      ),
      transform: (
        /*transform*/
        e[2]
      ),
      editor: (
        /*editor*/
        e[5]
      ),
      $$slots: {
        default: [
          vo,
          ({ grab: o }) => ({ 10: o }),
          ({ grab: o }) => o ? 1024 : 0
        ]
      },
      $$scope: { ctx: e }
    }
  }), t.$on(
    "change",
    /*change_handler*/
    e[7]
  ), t.$on(
    "grab",
    /*grab_handler*/
    e[8]
  ), t.$on(
    "release",
    /*release_handler*/
    e[9]
  ), {
    c() {
      ce(t.$$.fragment);
    },
    m(o, i) {
      oe(t, o, i), n = !0;
    },
    p(o, [i]) {
      const r = {};
      i & /*shape*/
      1 && (r.shape = /*shape*/
      o[0]), i & /*transform*/
      4 && (r.transform = /*transform*/
      o[2]), i & /*$$scope, geom, handleSize, grab, computedStyle*/
      17434 && (r.$$scope = { dirty: i, ctx: o }), t.$set(r);
    },
    i(o) {
      n || (H(t.$$.fragment, o), n = !0);
    },
    o(o) {
      G(t.$$.fragment, o), n = !1;
    },
    d(o) {
      ie(t, o);
    }
  };
}
const vt = (e) => e.join(","), Ot = (e) => e.join(",");
function Po(e, t, n) {
  let o, i, { shape: r } = t, { computedStyle: s = void 0 } = t, { transform: a } = t, { viewportScale: l = 1 } = t;
  const u = (d, p, _) => {
    let A;
    p === T.SHAPE ? A = d.geometry.points.map(([g, y]) => [g + _[0], y + _[1]]) : A = d.geometry.points.map(([g, y], M) => p === T(M) ? [g + _[0], y + _[1]] : [g, y]);
    const w = be(A);
    return { ...d, geometry: { points: A, bounds: w } };
  };
  function m(d) {
    te.call(this, e, d);
  }
  function f(d) {
    te.call(this, e, d);
  }
  function h(d) {
    te.call(this, e, d);
  }
  return e.$$set = (d) => {
    "shape" in d && n(0, r = d.shape), "computedStyle" in d && n(1, s = d.computedStyle), "transform" in d && n(2, a = d.transform), "viewportScale" in d && n(6, l = d.viewportScale);
  }, e.$$.update = () => {
    e.$$.dirty & /*shape*/
    1 && n(4, o = r.geometry), e.$$.dirty & /*viewportScale*/
    64 && n(3, i = 10 / l);
  }, [
    r,
    s,
    a,
    i,
    o,
    u,
    l,
    m,
    f,
    h
  ];
}
class Io extends x {
  constructor(t) {
    super(), Q(this, t, Po, Oo, K, {
      shape: 0,
      computedStyle: 1,
      transform: 2,
      viewportScale: 6
    });
  }
}
function Do(e) {
  let t, n, o, i, r, s, a, l, u, m, f, h, d, p, _, A, w, g, y, M, k, I, R, b, E, S, L, D, N, C, X, fe, q, v, ee, Z, pe, ue, ne, Ce, Ue, He, Qe, re, Fe, Ge, Ve, xe, se, ze, je, qe, $e, _t;
  return {
    c() {
      t = B("rect"), a = J(), l = B("rect"), d = J(), p = B("rect"), g = J(), y = B("rect"), R = J(), b = B("rect"), D = J(), N = B("rect"), q = J(), v = B("circle"), ue = J(), ne = B("circle"), Qe = J(), re = B("circle"), xe = J(), se = B("circle"), c(t, "class", "a9s-outer"), c(t, "style", n = /*computedStyle*/
      e[1] ? "display:none;" : void 0), c(t, "x", o = /*geom*/
      e[4].x), c(t, "y", i = /*geom*/
      e[4].y), c(t, "width", r = /*geom*/
      e[4].w), c(t, "height", s = /*geom*/
      e[4].h), c(l, "class", "a9s-inner a9s-shape-handle"), c(
        l,
        "style",
        /*computedStyle*/
        e[1]
      ), c(l, "x", u = /*geom*/
      e[4].x), c(l, "y", m = /*geom*/
      e[4].y), c(l, "width", f = /*geom*/
      e[4].w), c(l, "height", h = /*geom*/
      e[4].h), c(p, "class", "a9s-edge-handle a9s-edge-handle-top"), c(p, "x", _ = /*geom*/
      e[4].x), c(p, "y", A = /*geom*/
      e[4].y), c(p, "height", 1), c(p, "width", w = /*geom*/
      e[4].w), c(y, "class", "a9s-edge-handle a9s-edge-handle-right"), c(y, "x", M = /*geom*/
      e[4].x + /*geom*/
      e[4].w), c(y, "y", k = /*geom*/
      e[4].y), c(y, "height", I = /*geom*/
      e[4].h), c(y, "width", 1), c(b, "class", "a9s-edge-handle a9s-edge-handle-bottom"), c(b, "x", E = /*geom*/
      e[4].x), c(b, "y", S = /*geom*/
      e[4].y + /*geom*/
      e[4].h), c(b, "height", 1), c(b, "width", L = /*geom*/
      e[4].w), c(N, "class", "a9s-edge-handle a9s-edge-handle-left"), c(N, "x", C = /*geom*/
      e[4].x), c(N, "y", X = /*geom*/
      e[4].y), c(N, "height", fe = /*geom*/
      e[4].h), c(N, "width", 1), c(v, "class", "a9s-corner-handle a9s-corner-handle-topleft"), c(v, "cx", ee = /*geom*/
      e[4].x), c(v, "cy", Z = /*geom*/
      e[4].y), c(v, "r", pe = /*handleSize*/
      e[3] / 2), c(ne, "class", "a9s-corner-handle a9s-corner-handle-topright"), c(ne, "cx", Ce = /*geom*/
      e[4].x + /*geom*/
      e[4].w), c(ne, "cy", Ue = /*geom*/
      e[4].y), c(ne, "r", He = /*handleSize*/
      e[3] / 2), c(re, "class", "a9s-corner-handle a9s-corner-handle-bottomright"), c(re, "cx", Fe = /*geom*/
      e[4].x + /*geom*/
      e[4].w), c(re, "cy", Ge = /*geom*/
      e[4].y + /*geom*/
      e[4].h), c(re, "r", Ve = /*handleSize*/
      e[3] / 2), c(se, "class", "a9s-corner-handle a9s-corner-handle-bottomleft"), c(se, "cx", ze = /*geom*/
      e[4].x), c(se, "cy", je = /*geom*/
      e[4].y + /*geom*/
      e[4].h), c(se, "r", qe = /*handleSize*/
      e[3] / 2);
    },
    m(U, Y) {
      P(U, t, Y), P(U, a, Y), P(U, l, Y), P(U, d, Y), P(U, p, Y), P(U, g, Y), P(U, y, Y), P(U, R, Y), P(U, b, Y), P(U, D, Y), P(U, N, Y), P(U, q, Y), P(U, v, Y), P(U, ue, Y), P(U, ne, Y), P(U, Qe, Y), P(U, re, Y), P(U, xe, Y), P(U, se, Y), $e || (_t = [
        j(t, "pointerdown", function() {
          V(
            /*grab*/
            e[10](T.SHAPE)
          ) && e[10](T.SHAPE).apply(this, arguments);
        }),
        j(l, "pointerdown", function() {
          V(
            /*grab*/
            e[10](T.SHAPE)
          ) && e[10](T.SHAPE).apply(this, arguments);
        }),
        j(p, "pointerdown", function() {
          V(
            /*grab*/
            e[10](T.TOP)
          ) && e[10](T.TOP).apply(this, arguments);
        }),
        j(y, "pointerdown", function() {
          V(
            /*grab*/
            e[10](T.RIGHT)
          ) && e[10](T.RIGHT).apply(this, arguments);
        }),
        j(b, "pointerdown", function() {
          V(
            /*grab*/
            e[10](T.BOTTOM)
          ) && e[10](T.BOTTOM).apply(this, arguments);
        }),
        j(N, "pointerdown", function() {
          V(
            /*grab*/
            e[10](T.LEFT)
          ) && e[10](T.LEFT).apply(this, arguments);
        }),
        j(v, "pointerdown", function() {
          V(
            /*grab*/
            e[10](T.TOP_LEFT)
          ) && e[10](T.TOP_LEFT).apply(this, arguments);
        }),
        j(ne, "pointerdown", function() {
          V(
            /*grab*/
            e[10](T.TOP_RIGHT)
          ) && e[10](T.TOP_RIGHT).apply(this, arguments);
        }),
        j(re, "pointerdown", function() {
          V(
            /*grab*/
            e[10](T.BOTTOM_RIGHT)
          ) && e[10](T.BOTTOM_RIGHT).apply(this, arguments);
        }),
        j(se, "pointerdown", function() {
          V(
            /*grab*/
            e[10](T.BOTTOM_LEFT)
          ) && e[10](T.BOTTOM_LEFT).apply(this, arguments);
        })
      ], $e = !0);
    },
    p(U, Y) {
      e = U, Y & /*computedStyle*/
      2 && n !== (n = /*computedStyle*/
      e[1] ? "display:none;" : void 0) && c(t, "style", n), Y & /*geom*/
      16 && o !== (o = /*geom*/
      e[4].x) && c(t, "x", o), Y & /*geom*/
      16 && i !== (i = /*geom*/
      e[4].y) && c(t, "y", i), Y & /*geom*/
      16 && r !== (r = /*geom*/
      e[4].w) && c(t, "width", r), Y & /*geom*/
      16 && s !== (s = /*geom*/
      e[4].h) && c(t, "height", s), Y & /*computedStyle*/
      2 && c(
        l,
        "style",
        /*computedStyle*/
        e[1]
      ), Y & /*geom*/
      16 && u !== (u = /*geom*/
      e[4].x) && c(l, "x", u), Y & /*geom*/
      16 && m !== (m = /*geom*/
      e[4].y) && c(l, "y", m), Y & /*geom*/
      16 && f !== (f = /*geom*/
      e[4].w) && c(l, "width", f), Y & /*geom*/
      16 && h !== (h = /*geom*/
      e[4].h) && c(l, "height", h), Y & /*geom*/
      16 && _ !== (_ = /*geom*/
      e[4].x) && c(p, "x", _), Y & /*geom*/
      16 && A !== (A = /*geom*/
      e[4].y) && c(p, "y", A), Y & /*geom*/
      16 && w !== (w = /*geom*/
      e[4].w) && c(p, "width", w), Y & /*geom*/
      16 && M !== (M = /*geom*/
      e[4].x + /*geom*/
      e[4].w) && c(y, "x", M), Y & /*geom*/
      16 && k !== (k = /*geom*/
      e[4].y) && c(y, "y", k), Y & /*geom*/
      16 && I !== (I = /*geom*/
      e[4].h) && c(y, "height", I), Y & /*geom*/
      16 && E !== (E = /*geom*/
      e[4].x) && c(b, "x", E), Y & /*geom*/
      16 && S !== (S = /*geom*/
      e[4].y + /*geom*/
      e[4].h) && c(b, "y", S), Y & /*geom*/
      16 && L !== (L = /*geom*/
      e[4].w) && c(b, "width", L), Y & /*geom*/
      16 && C !== (C = /*geom*/
      e[4].x) && c(N, "x", C), Y & /*geom*/
      16 && X !== (X = /*geom*/
      e[4].y) && c(N, "y", X), Y & /*geom*/
      16 && fe !== (fe = /*geom*/
      e[4].h) && c(N, "height", fe), Y & /*geom*/
      16 && ee !== (ee = /*geom*/
      e[4].x) && c(v, "cx", ee), Y & /*geom*/
      16 && Z !== (Z = /*geom*/
      e[4].y) && c(v, "cy", Z), Y & /*handleSize*/
      8 && pe !== (pe = /*handleSize*/
      e[3] / 2) && c(v, "r", pe), Y & /*geom*/
      16 && Ce !== (Ce = /*geom*/
      e[4].x + /*geom*/
      e[4].w) && c(ne, "cx", Ce), Y & /*geom*/
      16 && Ue !== (Ue = /*geom*/
      e[4].y) && c(ne, "cy", Ue), Y & /*handleSize*/
      8 && He !== (He = /*handleSize*/
      e[3] / 2) && c(ne, "r", He), Y & /*geom*/
      16 && Fe !== (Fe = /*geom*/
      e[4].x + /*geom*/
      e[4].w) && c(re, "cx", Fe), Y & /*geom*/
      16 && Ge !== (Ge = /*geom*/
      e[4].y + /*geom*/
      e[4].h) && c(re, "cy", Ge), Y & /*handleSize*/
      8 && Ve !== (Ve = /*handleSize*/
      e[3] / 2) && c(re, "r", Ve), Y & /*geom*/
      16 && ze !== (ze = /*geom*/
      e[4].x) && c(se, "cx", ze), Y & /*geom*/
      16 && je !== (je = /*geom*/
      e[4].y + /*geom*/
      e[4].h) && c(se, "cy", je), Y & /*handleSize*/
      8 && qe !== (qe = /*handleSize*/
      e[3] / 2) && c(se, "r", qe);
    },
    d(U) {
      U && O(t), U && O(a), U && O(l), U && O(d), U && O(p), U && O(g), U && O(y), U && O(R), U && O(b), U && O(D), U && O(N), U && O(q), U && O(v), U && O(ue), U && O(ne), U && O(Qe), U && O(re), U && O(xe), U && O(se), $e = !1, ae(_t);
    }
  };
}
function Bo(e) {
  let t, n;
  return t = new Ne({
    props: {
      shape: (
        /*shape*/
        e[0]
      ),
      transform: (
        /*transform*/
        e[2]
      ),
      editor: (
        /*editor*/
        e[5]
      ),
      $$slots: {
        default: [
          Do,
          ({ grab: o }) => ({ 10: o }),
          ({ grab: o }) => o ? 1024 : 0
        ]
      },
      $$scope: { ctx: e }
    }
  }), t.$on(
    "grab",
    /*grab_handler*/
    e[7]
  ), t.$on(
    "change",
    /*change_handler*/
    e[8]
  ), t.$on(
    "release",
    /*release_handler*/
    e[9]
  ), {
    c() {
      ce(t.$$.fragment);
    },
    m(o, i) {
      oe(t, o, i), n = !0;
    },
    p(o, [i]) {
      const r = {};
      i & /*shape*/
      1 && (r.shape = /*shape*/
      o[0]), i & /*transform*/
      4 && (r.transform = /*transform*/
      o[2]), i & /*$$scope, geom, handleSize, grab, computedStyle*/
      3098 && (r.$$scope = { dirty: i, ctx: o }), t.$set(r);
    },
    i(o) {
      n || (H(t.$$.fragment, o), n = !0);
    },
    o(o) {
      G(t.$$.fragment, o), n = !1;
    },
    d(o) {
      ie(t, o);
    }
  };
}
function Yo(e, t, n) {
  let o, i, { shape: r } = t, { computedStyle: s = void 0 } = t, { transform: a } = t, { viewportScale: l = 1 } = t;
  const u = (d, p, _) => {
    const A = d.geometry.bounds;
    let [w, g] = [A.minX, A.minY], [y, M] = [A.maxX, A.maxY];
    const [k, I] = _;
    if (p === T.SHAPE)
      w += k, y += k, g += I, M += I;
    else {
      switch (p) {
        case T.TOP:
        case T.TOP_LEFT:
        case T.TOP_RIGHT: {
          g += I;
          break;
        }
        case T.BOTTOM:
        case T.BOTTOM_LEFT:
        case T.BOTTOM_RIGHT: {
          M += I;
          break;
        }
      }
      switch (p) {
        case T.LEFT:
        case T.TOP_LEFT:
        case T.BOTTOM_LEFT: {
          w += k;
          break;
        }
        case T.RIGHT:
        case T.TOP_RIGHT:
        case T.BOTTOM_RIGHT: {
          y += k;
          break;
        }
      }
    }
    const R = Math.min(w, y), b = Math.min(g, M), E = Math.abs(y - w), S = Math.abs(M - g);
    return {
      ...d,
      geometry: {
        x: R,
        y: b,
        w: E,
        h: S,
        bounds: {
          minX: R,
          minY: b,
          maxX: R + E,
          maxY: b + S
        }
      }
    };
  };
  function m(d) {
    te.call(this, e, d);
  }
  function f(d) {
    te.call(this, e, d);
  }
  function h(d) {
    te.call(this, e, d);
  }
  return e.$$set = (d) => {
    "shape" in d && n(0, r = d.shape), "computedStyle" in d && n(1, s = d.computedStyle), "transform" in d && n(2, a = d.transform), "viewportScale" in d && n(6, l = d.viewportScale);
  }, e.$$.update = () => {
    e.$$.dirty & /*shape*/
    1 && n(4, o = r.geometry), e.$$.dirty & /*viewportScale*/
    64 && n(3, i = 10 / l);
  }, [
    r,
    s,
    a,
    i,
    o,
    u,
    l,
    m,
    f,
    h
  ];
}
class Xo extends x {
  constructor(t) {
    super(), Q(this, t, Yo, Bo, K, {
      shape: 0,
      computedStyle: 1,
      transform: 2,
      viewportScale: 6
    });
  }
}
function Ro(e) {
  let t, n, o, i, r, s, a, l, u, m, f, h, d, p, _, A, w, g, y, M, k, I, R, b, E, S, L, D, N;
  return {
    c() {
      t = B("ellipse"), s = J(), a = B("ellipse"), h = J(), d = B("rect"), A = J(), w = B("rect"), M = J(), k = B("rect"), b = J(), E = B("rect"), c(t, "class", "a9s-outer"), c(t, "cx", n = /*geom*/
      e[3].cx), c(t, "cy", o = /*geom*/
      e[3].cy), c(t, "rx", i = /*geom*/
      e[3].rx), c(t, "ry", r = /*geom*/
      e[3].ry), c(a, "class", "a9s-inner a9s-shape-handle"), c(a, "cx", l = /*geom*/
      e[3].cx), c(a, "cy", u = /*geom*/
      e[3].cy), c(a, "rx", m = /*geom*/
      e[3].rx), c(a, "ry", f = /*geom*/
      e[3].ry), c(d, "class", "a9s-corner-handle a9s-corner-top"), c(d, "x", p = /*geom*/
      e[3].cx - /*handleSize*/
      e[2] / 2), c(d, "y", _ = /*geom*/
      e[3].cy - /*handleSize*/
      e[2] / 2 - /*geom*/
      e[3].ry), c(
        d,
        "height",
        /*handleSize*/
        e[2]
      ), c(
        d,
        "width",
        /*handleSize*/
        e[2]
      ), c(w, "class", "a9s-corner-handle a9s-corner-handle-right"), c(w, "x", g = /*geom*/
      e[3].cx + /*geom*/
      e[3].rx - /*handleSize*/
      e[2] / 2), c(w, "y", y = /*geom*/
      e[3].cy - /*handleSize*/
      e[2] / 2), c(
        w,
        "height",
        /*handleSize*/
        e[2]
      ), c(
        w,
        "width",
        /*handleSize*/
        e[2]
      ), c(k, "class", "a9s-corner-handle a9s-corner-handle-bottom"), c(k, "x", I = /*geom*/
      e[3].cx - /*handleSize*/
      e[2] / 2), c(k, "y", R = /*geom*/
      e[3].cy + /*geom*/
      e[3].ry - /*handleSize*/
      e[2] / 2), c(
        k,
        "height",
        /*handleSize*/
        e[2]
      ), c(
        k,
        "width",
        /*handleSize*/
        e[2]
      ), c(E, "class", "a9s-corner-handle a9s-corner-handle-left"), c(E, "x", S = /*geom*/
      e[3].cx - /*geom*/
      e[3].rx - /*handleSize*/
      e[2] / 2), c(E, "y", L = /*geom*/
      e[3].cy - /*handleSize*/
      e[2] / 2), c(
        E,
        "height",
        /*handleSize*/
        e[2]
      ), c(
        E,
        "width",
        /*handleSize*/
        e[2]
      );
    },
    m(C, X) {
      P(C, t, X), P(C, s, X), P(C, a, X), P(C, h, X), P(C, d, X), P(C, A, X), P(C, w, X), P(C, M, X), P(C, k, X), P(C, b, X), P(C, E, X), D || (N = [
        j(t, "pointerdown", function() {
          V(
            /*grab*/
            e[9](T.SHAPE)
          ) && e[9](T.SHAPE).apply(this, arguments);
        }),
        j(a, "pointerdown", function() {
          V(
            /*grab*/
            e[9](T.SHAPE)
          ) && e[9](T.SHAPE).apply(this, arguments);
        }),
        j(d, "pointerdown", function() {
          V(
            /*grab*/
            e[9](T.TOP)
          ) && e[9](T.TOP).apply(this, arguments);
        }),
        j(w, "pointerdown", function() {
          V(
            /*grab*/
            e[9](T.RIGHT)
          ) && e[9](T.RIGHT).apply(this, arguments);
        }),
        j(k, "pointerdown", function() {
          V(
            /*grab*/
            e[9](T.BOTTOM)
          ) && e[9](T.BOTTOM).apply(this, arguments);
        }),
        j(E, "pointerdown", function() {
          V(
            /*grab*/
            e[9](T.LEFT)
          ) && e[9](T.LEFT).apply(this, arguments);
        })
      ], D = !0);
    },
    p(C, X) {
      e = C, X & /*geom*/
      8 && n !== (n = /*geom*/
      e[3].cx) && c(t, "cx", n), X & /*geom*/
      8 && o !== (o = /*geom*/
      e[3].cy) && c(t, "cy", o), X & /*geom*/
      8 && i !== (i = /*geom*/
      e[3].rx) && c(t, "rx", i), X & /*geom*/
      8 && r !== (r = /*geom*/
      e[3].ry) && c(t, "ry", r), X & /*geom*/
      8 && l !== (l = /*geom*/
      e[3].cx) && c(a, "cx", l), X & /*geom*/
      8 && u !== (u = /*geom*/
      e[3].cy) && c(a, "cy", u), X & /*geom*/
      8 && m !== (m = /*geom*/
      e[3].rx) && c(a, "rx", m), X & /*geom*/
      8 && f !== (f = /*geom*/
      e[3].ry) && c(a, "ry", f), X & /*geom, handleSize*/
      12 && p !== (p = /*geom*/
      e[3].cx - /*handleSize*/
      e[2] / 2) && c(d, "x", p), X & /*geom, handleSize*/
      12 && _ !== (_ = /*geom*/
      e[3].cy - /*handleSize*/
      e[2] / 2 - /*geom*/
      e[3].ry) && c(d, "y", _), X & /*handleSize*/
      4 && c(
        d,
        "height",
        /*handleSize*/
        e[2]
      ), X & /*handleSize*/
      4 && c(
        d,
        "width",
        /*handleSize*/
        e[2]
      ), X & /*geom, handleSize*/
      12 && g !== (g = /*geom*/
      e[3].cx + /*geom*/
      e[3].rx - /*handleSize*/
      e[2] / 2) && c(w, "x", g), X & /*geom, handleSize*/
      12 && y !== (y = /*geom*/
      e[3].cy - /*handleSize*/
      e[2] / 2) && c(w, "y", y), X & /*handleSize*/
      4 && c(
        w,
        "height",
        /*handleSize*/
        e[2]
      ), X & /*handleSize*/
      4 && c(
        w,
        "width",
        /*handleSize*/
        e[2]
      ), X & /*geom, handleSize*/
      12 && I !== (I = /*geom*/
      e[3].cx - /*handleSize*/
      e[2] / 2) && c(k, "x", I), X & /*geom, handleSize*/
      12 && R !== (R = /*geom*/
      e[3].cy + /*geom*/
      e[3].ry - /*handleSize*/
      e[2] / 2) && c(k, "y", R), X & /*handleSize*/
      4 && c(
        k,
        "height",
        /*handleSize*/
        e[2]
      ), X & /*handleSize*/
      4 && c(
        k,
        "width",
        /*handleSize*/
        e[2]
      ), X & /*geom, handleSize*/
      12 && S !== (S = /*geom*/
      e[3].cx - /*geom*/
      e[3].rx - /*handleSize*/
      e[2] / 2) && c(E, "x", S), X & /*geom, handleSize*/
      12 && L !== (L = /*geom*/
      e[3].cy - /*handleSize*/
      e[2] / 2) && c(E, "y", L), X & /*handleSize*/
      4 && c(
        E,
        "height",
        /*handleSize*/
        e[2]
      ), X & /*handleSize*/
      4 && c(
        E,
        "width",
        /*handleSize*/
        e[2]
      );
    },
    d(C) {
      C && O(t), C && O(s), C && O(a), C && O(h), C && O(d), C && O(A), C && O(w), C && O(M), C && O(k), C && O(b), C && O(E), D = !1, ae(N);
    }
  };
}
function No(e) {
  let t, n;
  return t = new Ne({
    props: {
      shape: (
        /*shape*/
        e[0]
      ),
      transform: (
        /*transform*/
        e[1]
      ),
      editor: (
        /*editor*/
        e[4]
      ),
      $$slots: {
        default: [
          Ro,
          ({ grab: o }) => ({ 9: o }),
          ({ grab: o }) => o ? 512 : 0
        ]
      },
      $$scope: { ctx: e }
    }
  }), t.$on(
    "grab",
    /*grab_handler*/
    e[6]
  ), t.$on(
    "change",
    /*change_handler*/
    e[7]
  ), t.$on(
    "release",
    /*release_handler*/
    e[8]
  ), {
    c() {
      ce(t.$$.fragment);
    },
    m(o, i) {
      oe(t, o, i), n = !0;
    },
    p(o, [i]) {
      const r = {};
      i & /*shape*/
      1 && (r.shape = /*shape*/
      o[0]), i & /*transform*/
      2 && (r.transform = /*transform*/
      o[1]), i & /*$$scope, geom, handleSize, grab*/
      1548 && (r.$$scope = { dirty: i, ctx: o }), t.$set(r);
    },
    i(o) {
      n || (H(t.$$.fragment, o), n = !0);
    },
    o(o) {
      G(t.$$.fragment, o), n = !1;
    },
    d(o) {
      ie(t, o);
    }
  };
}
function Co(e, t, n) {
  let o, i, { shape: r } = t, { transform: s } = t, { viewportScale: a = 1 } = t;
  const l = (h, d, p) => {
    const _ = h.geometry.bounds;
    let [A, w] = [_.minX, _.minY], [g, y] = [_.maxX, _.maxY];
    const [M, k] = p;
    if (d === T.SHAPE)
      A += M, g += M, w += k, y += k;
    else
      switch (d) {
        case T.TOP: {
          w += k;
          break;
        }
        case T.BOTTOM: {
          y += k;
          break;
        }
        case T.LEFT: {
          A += M;
          break;
        }
        case T.RIGHT: {
          g += M;
          break;
        }
      }
    const I = Math.min(A, g), R = Math.min(w, y), b = Math.abs(g - A), E = Math.abs(y - w), S = (A + g) / 2, L = (w + y) / 2, D = b / 2, N = E / 2;
    return {
      ...h,
      geometry: {
        ...h.geometry,
        cx: S,
        cy: L,
        rx: D,
        ry: N,
        bounds: {
          minX: I,
          minY: R,
          maxX: I + b,
          maxY: R + E
        }
      }
    };
  };
  function u(h) {
    te.call(this, e, h);
  }
  function m(h) {
    te.call(this, e, h);
  }
  function f(h) {
    te.call(this, e, h);
  }
  return e.$$set = (h) => {
    "shape" in h && n(0, r = h.shape), "transform" in h && n(1, s = h.transform), "viewportScale" in h && n(5, a = h.viewportScale);
  }, e.$$.update = () => {
    e.$$.dirty & /*shape*/
    1 && n(3, o = r.geometry), e.$$.dirty & /*viewportScale*/
    32 && n(2, i = 10 / a);
  }, [
    r,
    s,
    i,
    o,
    l,
    a,
    u,
    m,
    f
  ];
}
class Uo extends x {
  constructor(t) {
    super(), Q(this, t, Co, No, K, { shape: 0, transform: 1, viewportScale: 5 });
  }
}
const Ee = (e, t, n) => {
  const o = typeof t == "function" ? t(e) : t;
  if (o) {
    const { fill: i, fillOpacity: r } = o;
    let s = "", a;
    return i && (s += `fill:${i};stroke:${i};`), n && (a = n.fillOpacity), s += `fill-opacity:${a || r || "0.25"};`, s;
  }
};
function Ho(e) {
  let t, n, o;
  return {
    c() {
      t = B("path"), c(t, "class", "a9s-shape-handle"), c(
        t,
        "style",
        /*computedStyle*/
        e[3]
      ), c(
        t,
        "d",
        /*pathData*/
        e[2]
      );
    },
    m(i, r) {
      P(i, t, r), n || (o = j(t, "pointerdown", function() {
        V(
          /*grab*/
          e[14](T.SHAPE)
        ) && e[14](T.SHAPE).apply(this, arguments);
      }), n = !0);
    },
    p(i, r) {
      e = i, r & /*computedStyle*/
      8 && c(
        t,
        "style",
        /*computedStyle*/
        e[3]
      ), r & /*pathData*/
      4 && c(
        t,
        "d",
        /*pathData*/
        e[2]
      );
    },
    d(i) {
      i && O(t), n = !1, o();
    }
  };
}
function Fo(e) {
  let t, n;
  return t = new Ne({
    props: {
      shape: (
        /*shape*/
        e[0]
      ),
      transform: (
        /*transform*/
        e[1]
      ),
      editor: (
        /*editor*/
        e[4]
      ),
      $$slots: {
        default: [
          Ho,
          ({ grab: o }) => ({ 14: o }),
          ({ grab: o }) => o ? 16384 : 0
        ]
      },
      $$scope: { ctx: e }
    }
  }), t.$on(
    "change",
    /*change_handler*/
    e[9]
  ), t.$on(
    "grab",
    /*grab_handler*/
    e[10]
  ), t.$on(
    "release",
    /*release_handler*/
    e[11]
  ), {
    c() {
      ce(t.$$.fragment);
    },
    m(o, i) {
      oe(t, o, i), n = !0;
    },
    p(o, [i]) {
      const r = {};
      i & /*shape*/
      1 && (r.shape = /*shape*/
      o[0]), i & /*transform*/
      2 && (r.transform = /*transform*/
      o[1]), i & /*$$scope, computedStyle, pathData, grab*/
      49164 && (r.$$scope = { dirty: i, ctx: o }), t.$set(r);
    },
    i(o) {
      n || (H(t.$$.fragment, o), n = !0);
    },
    o(o) {
      G(t.$$.fragment, o), n = !1;
    },
    d(o) {
      ie(t, o);
    }
  };
}
function Go(e, t, n) {
  let o, i, r, { shape: s } = t, { annotation: a } = t, { transform: l } = t, { viewportScale: u = 1 } = t, { style: m = void 0 } = t, f = { fillOpacity: 1 };
  const h = (A, w, g) => {
    let y;
    w === T.SHAPE && (y = A.geometry.points.map(([k, I, R]) => [k + g[0], I + g[1], R]));
    const M = be(y.map((k) => [k[0], k[1]]));
    return { ...A, geometry: { points: y, bounds: M } };
  };
  function d(A) {
    te.call(this, e, A);
  }
  function p(A) {
    te.call(this, e, A);
  }
  function _(A) {
    te.call(this, e, A);
  }
  return e.$$set = (A) => {
    "shape" in A && n(0, s = A.shape), "annotation" in A && n(5, a = A.annotation), "transform" in A && n(1, l = A.transform), "viewportScale" in A && n(6, u = A.viewportScale), "style" in A && n(7, m = A.style);
  }, e.$$.update = () => {
    e.$$.dirty & /*shape*/
    1 && n(8, o = s.geometry), e.$$.dirty & /*viewportScale*/
    64, e.$$.dirty & /*annotation, style*/
    160 && n(3, i = Ee(a, m, f)), e.$$.dirty & /*geom*/
    256 && n(2, r = Xe(o.points, gt, !0));
  }, [
    s,
    l,
    r,
    i,
    h,
    a,
    u,
    m,
    o,
    d,
    p,
    _
  ];
}
class Vo extends x {
  constructor(t) {
    super(), Q(this, t, Go, Fo, K, {
      shape: 0,
      annotation: 5,
      transform: 1,
      viewportScale: 6,
      style: 7
    });
  }
}
function zo(e) {
  let t, n, o, i, r, s, a, l, u, m, f, h, d, p, _, A, w, g, y, M, k, I, R, b, E, S, L, D, N, C, X, fe;
  return {
    c() {
      t = B("defs"), n = B("marker"), o = B("path"), a = J(), l = B("line"), p = J(), _ = B("line"), k = J(), I = B("circle"), S = J(), L = B("circle"), c(o, "d", "M 0 0 L 10 5 L 0 10 z"), c(n, "class", "arrow"), c(n, "viewBox", i = `0 0 ${/*handleSize*/
      e[3] / 2} ${/*handleSize*/
      e[3] / 2}`), c(n, "markerWidth", r = `${/*handleSize*/
      e[3] / 2}`), c(n, "markerHeight", s = `${/*handleSize*/
      e[3] / 2}`), c(n, "orient", "auto-start-reverse"), c(l, "class", "a9s-outer"), c(l, "style", u = /*computedStyle*/
      e[1] ? "display:none;" : "stroke: black"), c(l, "x1", m = /*geom*/
      e[4].x1), c(l, "y1", f = /*geom*/
      e[4].y1), c(l, "x2", h = /*geom*/
      e[4].x2), c(l, "y2", d = /*geom*/
      e[4].y2), c(l, "marker-end", "url(.arrow)"), c(_, "class", "a9s-inner a9s-shape-handle"), c(_, "style", A = "stroke: black"), c(_, "x1", w = /*geom*/
      e[4].x1), c(_, "y1", g = /*geom*/
      e[4].y1), c(_, "x2", y = /*geom*/
      e[4].x2), c(_, "y2", M = /*geom*/
      e[4].y2), c(I, "class", "a9s-corner-handle"), c(I, "style", ""), c(I, "cx", R = /*geom*/
      e[4].x1), c(I, "cy", b = /*geom*/
      e[4].y1), c(I, "r", E = /*handleSize*/
      e[3] / 2), c(L, "class", "a9s-corner-handle"), c(L, "cx", D = /*geom*/
      e[4].x2), c(L, "cy", N = /*geom*/
      e[4].y2), c(L, "r", C = /*handleSize*/
      e[3] / 2);
    },
    m(q, v) {
      P(q, t, v), le(t, n), le(n, o), P(q, a, v), P(q, l, v), P(q, p, v), P(q, _, v), P(q, k, v), P(q, I, v), P(q, S, v), P(q, L, v), X || (fe = [
        j(l, "pointerdown", function() {
          V(
            /*grab*/
            e[10](T.SHAPE)
          ) && e[10](T.SHAPE).apply(this, arguments);
        }),
        j(_, "pointerdown", function() {
          V(
            /*grab*/
            e[10](T.SHAPE)
          ) && e[10](T.SHAPE).apply(this, arguments);
        }),
        j(I, "pointerdown", function() {
          V(
            /*grab*/
            e[10](T.LEFT)
          ) && e[10](T.LEFT).apply(this, arguments);
        }),
        j(L, "pointerdown", function() {
          V(
            /*grab*/
            e[10](T.RIGHT)
          ) && e[10](T.RIGHT).apply(this, arguments);
        })
      ], X = !0);
    },
    p(q, v) {
      e = q, v & /*handleSize*/
      8 && i !== (i = `0 0 ${/*handleSize*/
      e[3] / 2} ${/*handleSize*/
      e[3] / 2}`) && c(n, "viewBox", i), v & /*handleSize*/
      8 && r !== (r = `${/*handleSize*/
      e[3] / 2}`) && c(n, "markerWidth", r), v & /*handleSize*/
      8 && s !== (s = `${/*handleSize*/
      e[3] / 2}`) && c(n, "markerHeight", s), v & /*computedStyle*/
      2 && u !== (u = /*computedStyle*/
      e[1] ? "display:none;" : "stroke: black") && c(l, "style", u), v & /*geom*/
      16 && m !== (m = /*geom*/
      e[4].x1) && c(l, "x1", m), v & /*geom*/
      16 && f !== (f = /*geom*/
      e[4].y1) && c(l, "y1", f), v & /*geom*/
      16 && h !== (h = /*geom*/
      e[4].x2) && c(l, "x2", h), v & /*geom*/
      16 && d !== (d = /*geom*/
      e[4].y2) && c(l, "y2", d), v & /*computedStyle*/
      2 && A !== (A = "stroke: black") && c(_, "style", A), v & /*geom*/
      16 && w !== (w = /*geom*/
      e[4].x1) && c(_, "x1", w), v & /*geom*/
      16 && g !== (g = /*geom*/
      e[4].y1) && c(_, "y1", g), v & /*geom*/
      16 && y !== (y = /*geom*/
      e[4].x2) && c(_, "x2", y), v & /*geom*/
      16 && M !== (M = /*geom*/
      e[4].y2) && c(_, "y2", M), v & /*geom*/
      16 && R !== (R = /*geom*/
      e[4].x1) && c(I, "cx", R), v & /*geom*/
      16 && b !== (b = /*geom*/
      e[4].y1) && c(I, "cy", b), v & /*handleSize*/
      8 && E !== (E = /*handleSize*/
      e[3] / 2) && c(I, "r", E), v & /*geom*/
      16 && D !== (D = /*geom*/
      e[4].x2) && c(L, "cx", D), v & /*geom*/
      16 && N !== (N = /*geom*/
      e[4].y2) && c(L, "cy", N), v & /*handleSize*/
      8 && C !== (C = /*handleSize*/
      e[3] / 2) && c(L, "r", C);
    },
    d(q) {
      q && O(t), q && O(a), q && O(l), q && O(p), q && O(_), q && O(k), q && O(I), q && O(S), q && O(L), X = !1, ae(fe);
    }
  };
}
function jo(e) {
  let t, n;
  return t = new Ne({
    props: {
      shape: (
        /*shape*/
        e[0]
      ),
      transform: (
        /*transform*/
        e[2]
      ),
      editor: (
        /*editor*/
        e[5]
      ),
      $$slots: {
        default: [
          zo,
          ({ grab: o }) => ({ 10: o }),
          ({ grab: o }) => o ? 1024 : 0
        ]
      },
      $$scope: { ctx: e }
    }
  }), t.$on(
    "grab",
    /*grab_handler*/
    e[7]
  ), t.$on(
    "change",
    /*change_handler*/
    e[8]
  ), t.$on(
    "release",
    /*release_handler*/
    e[9]
  ), {
    c() {
      ce(t.$$.fragment);
    },
    m(o, i) {
      oe(t, o, i), n = !0;
    },
    p(o, [i]) {
      const r = {};
      i & /*shape*/
      1 && (r.shape = /*shape*/
      o[0]), i & /*transform*/
      4 && (r.transform = /*transform*/
      o[2]), i & /*$$scope, geom, handleSize, grab, computedStyle*/
      3098 && (r.$$scope = { dirty: i, ctx: o }), t.$set(r);
    },
    i(o) {
      n || (H(t.$$.fragment, o), n = !0);
    },
    o(o) {
      G(t.$$.fragment, o), n = !1;
    },
    d(o) {
      ie(t, o);
    }
  };
}
function qo(e, t, n) {
  let o, i, { shape: r } = t, { computedStyle: s = void 0 } = t, { transform: a } = t, { viewportScale: l = 1 } = t;
  const u = (d, p, _) => {
    d.geometry.bounds;
    let A = d.geometry.x1, w = d.geometry.x2, g = d.geometry.y1, y = d.geometry.y2;
    const [M, k] = _;
    if (p === T.SHAPE)
      A += M, w += M, g += k, y += k;
    else
      switch (p) {
        case T.LEFT: {
          A += M, g += k;
          break;
        }
        case T.RIGHT: {
          w += M, y += k;
          break;
        }
      }
    return {
      ...d,
      geometry: {
        x1: A,
        y1: g,
        x2: w,
        y2: y,
        bounds: {
          minX: Math.min(A, w),
          minY: Math.min(g, y),
          maxX: Math.max(A, w),
          maxY: Math.max(g, y)
        }
      }
    };
  };
  function m(d) {
    te.call(this, e, d);
  }
  function f(d) {
    te.call(this, e, d);
  }
  function h(d) {
    te.call(this, e, d);
  }
  return e.$$set = (d) => {
    "shape" in d && n(0, r = d.shape), "computedStyle" in d && n(1, s = d.computedStyle), "transform" in d && n(2, a = d.transform), "viewportScale" in d && n(6, l = d.viewportScale);
  }, e.$$.update = () => {
    e.$$.dirty & /*shape*/
    1 && n(4, o = r.geometry), e.$$.dirty & /*viewportScale*/
    64 && n(3, i = 10 / l);
  }, [
    r,
    s,
    a,
    i,
    o,
    u,
    l,
    m,
    f,
    h
  ];
}
class Wo extends x {
  constructor(t) {
    super(), Q(this, t, qo, jo, K, {
      shape: 0,
      computedStyle: 1,
      transform: 2,
      viewportScale: 6
    });
  }
}
const cn = /* @__PURE__ */ new Map([
  [F.RECTANGLE, Xo],
  [F.POLYGON, Io],
  [F.ELLIPSE, Uo],
  [F.FREEHAND, Vo],
  [F.LINE, Wo]
]), Pt = (e) => cn.get(e.type), Ko = (e, t) => cn.set(e, t), T = (e) => `HANDLE-${e}`;
T.SHAPE = "SHAPE";
T.TOP = "TOP";
T.RIGHT = "RIGHT";
T.BOTTOM = "BOTTOM";
T.LEFT = "LEFT";
T.TOP_LEFT = "TOP_LEFT";
T.TOP_RIGHT = "TOP_RIGHT";
T.BOTTOM_RIGHT = "BOTTOM_RIGHT";
T.BOTTOM_LEFT = "BOTTOM_LEFT";
T.START = "START";
T.END = "END";
const Zo = (e) => ({}), It = (e) => ({ grab: (
  /*onGrab*/
  e[0]
) });
function Jo(e) {
  let t, n, o, i;
  const r = (
    /*#slots*/
    e[7].default
  ), s = hn(
    r,
    e,
    /*$$scope*/
    e[6],
    It
  );
  return {
    c() {
      t = B("g"), s && s.c(), c(t, "class", "a9s-annotation selected");
    },
    m(a, l) {
      P(a, t, l), s && s.m(t, null), n = !0, o || (i = [
        j(
          t,
          "pointerup",
          /*onRelease*/
          e[2]
        ),
        j(
          t,
          "pointermove",
          /*onPointerMove*/
          e[1]
        )
      ], o = !0);
    },
    p(a, [l]) {
      s && s.p && (!n || l & /*$$scope*/
      64) && pn(
        s,
        r,
        a,
        /*$$scope*/
        a[6],
        n ? gn(
          r,
          /*$$scope*/
          a[6],
          l,
          Zo
        ) : yn(
          /*$$scope*/
          a[6]
        ),
        It
      );
    },
    i(a) {
      n || (H(s, a), n = !0);
    },
    o(a) {
      G(s, a), n = !1;
    },
    d(a) {
      a && O(t), s && s.d(a), o = !1, ae(i);
    }
  };
}
function Qo(e, t, n) {
  let { $$slots: o = {}, $$scope: i } = t;
  const r = ge();
  let { shape: s } = t, { editor: a } = t, { transform: l } = t, u = null, m, f = null;
  const h = (_) => (A) => {
    u = _, m = l.elementToImage(A.offsetX, A.offsetY), f = s, A.target.setPointerCapture(A.pointerId), r("grab");
  }, d = (_) => {
    if (u) {
      const [A, w] = l.elementToImage(_.offsetX, _.offsetY), g = [A - m[0], w - m[1]];
      n(3, s = a(f, u, g)), r("change", s);
    }
  }, p = (_) => {
    _.target.releasePointerCapture(_.pointerId), u = null, f = s, r("release");
  };
  return e.$$set = (_) => {
    "shape" in _ && n(3, s = _.shape), "editor" in _ && n(4, a = _.editor), "transform" in _ && n(5, l = _.transform), "$$scope" in _ && n(6, i = _.$$scope);
  }, [h, d, p, s, a, l, i, o];
}
class Ne extends x {
  constructor(t) {
    super(), Q(this, t, Qo, Jo, K, { shape: 3, editor: 4, transform: 5 });
  }
}
function xo(e, t, n) {
  let o;
  const i = ge();
  let { annotation: r } = t, { editor: s } = t, { style: a = void 0 } = t, { target: l } = t, { transform: u } = t, { viewportScale: m } = t, f;
  return ye(() => (n(6, f = new s({
    target: l,
    props: {
      shape: r.target.selector,
      computedStyle: o,
      transform: u,
      viewportScale: m
    }
  })), f.$on("change", (h) => {
    f.$$set({ shape: h.detail }), i("change", h.detail);
  }), f.$on("grab", (h) => i("grab", h.detail)), f.$on("release", (h) => i("release", h.detail)), () => {
    f.$destroy();
  })), e.$$set = (h) => {
    "annotation" in h && n(0, r = h.annotation), "editor" in h && n(1, s = h.editor), "style" in h && n(2, a = h.style), "target" in h && n(3, l = h.target), "transform" in h && n(4, u = h.transform), "viewportScale" in h && n(5, m = h.viewportScale);
  }, e.$$.update = () => {
    e.$$.dirty & /*annotation, style*/
    5 && (o = Ee(r, a)), e.$$.dirty & /*annotation, editorComponent*/
    65 && r && (f == null || f.$set({ shape: r.target.selector })), e.$$.dirty & /*editorComponent, transform*/
    80 && f && f.$set({ transform: u }), e.$$.dirty & /*editorComponent, viewportScale*/
    96 && f && f.$set({ viewportScale: m });
  }, [r, s, a, l, u, m, f];
}
class $o extends x {
  constructor(t) {
    super(), Q(this, t, xo, null, K, {
      annotation: 0,
      editor: 1,
      style: 2,
      target: 3,
      transform: 4,
      viewportScale: 5
    });
  }
}
function ei(e, t, n) {
  const o = ge();
  let { drawingMode: i } = t, { target: r } = t, { tool: s } = t, { transform: a } = t, { viewportScale: l } = t, u;
  return ye(() => {
    const m = r.closest("svg"), f = [], h = (d, p, _) => {
      m.addEventListener(d, p, _), f.push(() => m.removeEventListener(d, p, _));
    };
    return n(5, u = new s({
      target: r,
      props: {
        addEventListener: h,
        drawingMode: i,
        transform: a,
        viewportScale: l
      }
    })), u.$on("create", (d) => o("create", d.detail)), () => {
      f.forEach((d) => d()), u.$destroy();
    };
  }), e.$$set = (m) => {
    "drawingMode" in m && n(0, i = m.drawingMode), "target" in m && n(1, r = m.target), "tool" in m && n(2, s = m.tool), "transform" in m && n(3, a = m.transform), "viewportScale" in m && n(4, l = m.viewportScale);
  }, e.$$.update = () => {
    e.$$.dirty & /*toolComponent, transform*/
    40 && u && u.$set({ transform: a }), e.$$.dirty & /*toolComponent, viewportScale*/
    48 && u && u.$set({ viewportScale: l });
  }, [i, r, s, a, l, u];
}
class ti extends x {
  constructor(t) {
    super(), Q(this, t, ei, null, K, {
      drawingMode: 0,
      target: 1,
      tool: 2,
      transform: 3,
      viewportScale: 4
    });
  }
}
function Dt(e) {
  let t, n;
  return {
    c() {
      t = B("rect"), n = B("rect"), c(t, "class", "a9s-outer"), c(
        t,
        "x",
        /*x*/
        e[1]
      ), c(
        t,
        "y",
        /*y*/
        e[2]
      ), c(
        t,
        "width",
        /*w*/
        e[3]
      ), c(
        t,
        "height",
        /*h*/
        e[4]
      ), c(n, "class", "a9s-inner"), c(
        n,
        "x",
        /*x*/
        e[1]
      ), c(
        n,
        "y",
        /*y*/
        e[2]
      ), c(
        n,
        "width",
        /*w*/
        e[3]
      ), c(
        n,
        "height",
        /*h*/
        e[4]
      );
    },
    m(o, i) {
      P(o, t, i), P(o, n, i);
    },
    p(o, i) {
      i & /*x*/
      2 && c(
        t,
        "x",
        /*x*/
        o[1]
      ), i & /*y*/
      4 && c(
        t,
        "y",
        /*y*/
        o[2]
      ), i & /*w*/
      8 && c(
        t,
        "width",
        /*w*/
        o[3]
      ), i & /*h*/
      16 && c(
        t,
        "height",
        /*h*/
        o[4]
      ), i & /*x*/
      2 && c(
        n,
        "x",
        /*x*/
        o[1]
      ), i & /*y*/
      4 && c(
        n,
        "y",
        /*y*/
        o[2]
      ), i & /*w*/
      8 && c(
        n,
        "width",
        /*w*/
        o[3]
      ), i & /*h*/
      16 && c(
        n,
        "height",
        /*h*/
        o[4]
      );
    },
    d(o) {
      o && O(t), o && O(n);
    }
  };
}
function ni(e) {
  let t, n = (
    /*origin*/
    e[0] && Dt(e)
  );
  return {
    c() {
      t = B("g"), n && n.c(), c(t, "class", "a9s-annotation a9s-rubberband");
    },
    m(o, i) {
      P(o, t, i), n && n.m(t, null);
    },
    p(o, [i]) {
      /*origin*/
      o[0] ? n ? n.p(o, i) : (n = Dt(o), n.c(), n.m(t, null)) : n && (n.d(1), n = null);
    },
    i: z,
    o: z,
    d(o) {
      o && O(t), n && n.d();
    }
  };
}
function oi(e, t, n) {
  const o = ge();
  let { addEventListener: i } = t, { drawingMode: r } = t, { transform: s } = t, a, l, u, m, f, h, d;
  const p = (g) => {
    a = performance.now(), r === "drag" && (n(0, l = s.elementToImage(g.offsetX, g.offsetY)), u = l, n(1, m = l[0]), n(2, f = l[1]), n(3, h = 1), n(4, d = 1));
  }, _ = (g) => {
    l && (u = s.elementToImage(g.offsetX, g.offsetY), n(1, m = Math.min(u[0], l[0])), n(2, f = Math.min(u[1], l[1])), n(3, h = Math.abs(u[0] - l[0])), n(4, d = Math.abs(u[1] - l[1])));
  }, A = (g) => {
    const y = performance.now() - a;
    if (r === "click") {
      if (y > 300)
        return;
      g.stopPropagation(), l ? w() : (n(0, l = s.elementToImage(g.offsetX, g.offsetY)), u = l, n(1, m = l[0]), n(2, f = l[1]), n(3, h = 1), n(4, d = 1));
    } else
      l && (y > 300 || h * d > 100 ? (g.stopPropagation(), w()) : (n(0, l = null), u = null));
  }, w = () => {
    if (h * d > 15) {
      const g = {
        type: F.RECTANGLE,
        geometry: {
          bounds: {
            minX: m,
            minY: f,
            maxX: m + h,
            maxY: f + d
          },
          x: m,
          y: f,
          w: h,
          h: d
        }
      };
      o("create", g);
    }
    n(0, l = null), u = null;
  };
  return ye(() => {
    i("pointerdown", p), i("pointermove", _), i("pointerup", A, !0);
  }), e.$$set = (g) => {
    "addEventListener" in g && n(5, i = g.addEventListener), "drawingMode" in g && n(6, r = g.drawingMode), "transform" in g && n(7, s = g.transform);
  }, [l, m, f, h, d, i, r, s];
}
class ii extends x {
  constructor(t) {
    super(), Q(this, t, oi, ni, K, {
      addEventListener: 5,
      drawingMode: 6,
      transform: 7
    });
  }
}
const ot = (e, t) => {
  const n = Math.abs(t[0] - e[0]), o = Math.abs(t[1] - e[1]);
  return Math.sqrt(Math.pow(n, 2) + Math.pow(o, 2));
}, Me = [];
function ri(e, t = z) {
  let n;
  const o = /* @__PURE__ */ new Set();
  function i(a) {
    if (K(e, a) && (e = a, n)) {
      const l = !Me.length;
      for (const u of o)
        u[1](), Me.push(u, e);
      if (l) {
        for (let u = 0; u < Me.length; u += 2)
          Me[u][0](Me[u + 1]);
        Me.length = 0;
      }
    }
  }
  function r(a) {
    i(a(e));
  }
  function s(a, l = z) {
    const u = [a, l];
    return o.add(u), o.size === 1 && (n = t(i) || z), a(e), () => {
      o.delete(u), o.size === 0 && n && (n(), n = null);
    };
  }
  return { set: i, update: r, subscribe: s };
}
const si = (e, t) => {
  const { naturalWidth: n, naturalHeight: o } = e;
  if (!n && !o) {
    const { width: i, height: r } = e;
    t.setAttribute("viewBox", `0 0 ${i} ${r}`), e.addEventListener("load", (s) => {
      const a = s.target;
      t.setAttribute("viewBox", `0 0 ${a.naturalWidth} ${a.naturalHeight}`);
    });
  } else
    t.setAttribute("viewBox", `0 0 ${n} ${o}`);
}, li = (e, t) => {
  si(e, t);
  const { subscribe: n, set: o } = ri(1);
  let i;
  return window.ResizeObserver && (i = new ResizeObserver(() => {
    const s = t.getBoundingClientRect(), { width: a, height: l } = t.viewBox.baseVal, u = Math.max(
      s.width / a,
      s.height / l
    );
    o(u);
  }), i.observe(t.parentElement)), { destroy: () => {
    i && i.disconnect();
  }, subscribe: n };
}, ur = "ontouchstart" in window || navigator.maxTouchPoints > 0;
function it(e) {
  const t = e.slice(), n = (
    /*isClosable*/
    (t[2] ? (
      /*points*/
      t[0]
    ) : [
      .../*points*/
      t[0],
      /*cursor*/
      t[1]
    ]).map((o) => o.join(",")).join(" ")
  );
  return t[15] = n, t;
}
function Bt(e) {
  let t, n, o, i, r, s = (
    /*isClosable*/
    e[2] && Yt(e)
  );
  return {
    c() {
      t = B("polygon"), o = B("polygon"), s && s.c(), r = he(), c(t, "class", "a9s-outer"), c(t, "points", n = /*coords*/
      e[15]), c(o, "class", "a9s-inner"), c(o, "points", i = /*coords*/
      e[15]);
    },
    m(a, l) {
      P(a, t, l), P(a, o, l), s && s.m(a, l), P(a, r, l);
    },
    p(a, l) {
      l & /*isClosable, points, cursor*/
      7 && n !== (n = /*coords*/
      a[15]) && c(t, "points", n), l & /*isClosable, points, cursor*/
      7 && i !== (i = /*coords*/
      a[15]) && c(o, "points", i), /*isClosable*/
      a[2] ? s ? s.p(a, l) : (s = Yt(a), s.c(), s.m(r.parentNode, r)) : s && (s.d(1), s = null);
    },
    d(a) {
      a && O(t), a && O(o), s && s.d(a), a && O(r);
    }
  };
}
function Yt(e) {
  let t, n, o;
  return {
    c() {
      t = B("rect"), c(t, "class", "a9s-corner-handle"), c(t, "x", n = /*points*/
      e[0][0][0] - /*handleSize*/
      e[3] / 2), c(t, "y", o = /*points*/
      e[0][0][1] - /*handleSize*/
      e[3] / 2), c(
        t,
        "height",
        /*handleSize*/
        e[3]
      ), c(
        t,
        "width",
        /*handleSize*/
        e[3]
      );
    },
    m(i, r) {
      P(i, t, r);
    },
    p(i, r) {
      r & /*points, handleSize*/
      9 && n !== (n = /*points*/
      i[0][0][0] - /*handleSize*/
      i[3] / 2) && c(t, "x", n), r & /*points, handleSize*/
      9 && o !== (o = /*points*/
      i[0][0][1] - /*handleSize*/
      i[3] / 2) && c(t, "y", o), r & /*handleSize*/
      8 && c(
        t,
        "height",
        /*handleSize*/
        i[3]
      ), r & /*handleSize*/
      8 && c(
        t,
        "width",
        /*handleSize*/
        i[3]
      );
    },
    d(i) {
      i && O(t);
    }
  };
}
function ai(e) {
  let t, n = (
    /*cursor*/
    e[1] && Bt(it(e))
  );
  return {
    c() {
      t = B("g"), n && n.c(), c(t, "class", "a9s-annotation a9s-rubberband");
    },
    m(o, i) {
      P(o, t, i), n && n.m(t, null);
    },
    p(o, [i]) {
      /*cursor*/
      o[1] ? n ? n.p(it(o), i) : (n = Bt(it(o)), n.c(), n.m(t, null)) : n && (n.d(1), n = null);
    },
    i: z,
    o: z,
    d(o) {
      o && O(t), n && n.d();
    }
  };
}
const ci = 20;
function fi(e, t, n) {
  let o;
  const i = ge();
  let { addEventListener: r } = t, { drawingMode: s } = t, { transform: a } = t, { viewportScale: l = 1 } = t, u, m = [], f = null, h = !1;
  const d = (g) => {
    const { timeStamp: y, offsetX: M, offsetY: k } = g;
    if (u = { timeStamp: y, offsetX: M, offsetY: k }, s === "drag" && m.length === 0) {
      const I = a.elementToImage(g.offsetX, g.offsetY);
      m.push(I), n(1, f = I);
    }
  }, p = (g) => {
    if (m.length > 0 && (n(1, f = a.elementToImage(g.offsetX, g.offsetY)), m.length > 2)) {
      const y = ot(f, m[0]) * l;
      n(2, h = y < ci);
    }
  }, _ = (g) => {
    if (s === "click") {
      const y = g.timeStamp - u.timeStamp, M = ot([u.offsetX, u.offsetY], [g.offsetX, g.offsetY]);
      if (y > 300 || M > 15)
        return;
      if (h)
        w();
      else if (m.length === 0) {
        const k = a.elementToImage(g.offsetX, g.offsetY);
        m.push(k), n(1, f = k);
      } else
        m.push(f);
    } else {
      if (m.length === 1 && ot(m[0], f) <= 4) {
        n(0, m = []), n(1, f = null);
        return;
      }
      g.stopImmediatePropagation(), h ? w() : m.push(f);
    }
  }, A = () => {
    const g = [...m, f], y = {
      type: F.POLYGON,
      geometry: { bounds: be(g), points: g }
    };
    ft(y) > 4 && (n(0, m = []), n(1, f = null), i("create", y));
  }, w = () => {
    const g = {
      type: F.POLYGON,
      geometry: {
        bounds: be(m),
        points: [...m]
      }
    };
    n(0, m = []), n(1, f = null), i("create", g);
  };
  return ye(() => {
    r("pointerdown", d, !0), r("pointermove", p), r("pointerup", _, !0), r("dblclick", A, !0);
  }), e.$$set = (g) => {
    "addEventListener" in g && n(4, r = g.addEventListener), "drawingMode" in g && n(5, s = g.drawingMode), "transform" in g && n(6, a = g.transform), "viewportScale" in g && n(7, l = g.viewportScale);
  }, e.$$.update = () => {
    e.$$.dirty & /*viewportScale*/
    128 && n(3, o = 10 / l);
  }, [
    m,
    f,
    h,
    o,
    r,
    s,
    a,
    l
  ];
}
class ui extends x {
  constructor(t) {
    super(), Q(this, t, fi, ai, K, {
      addEventListener: 4,
      drawingMode: 5,
      transform: 6,
      viewportScale: 7
    });
  }
}
function Xt(e) {
  let t, n, o, i, r, s, a, l, u, m;
  return {
    c() {
      t = B("ellipse"), s = B("ellipse"), c(t, "class", "a9s-outer"), c(t, "cx", n = /*x*/
      e[2] + /*w*/
      e[4] / 2), c(t, "cy", o = /*y*/
      e[3] + /*h*/
      e[5] / 2), c(t, "rx", i = /*w*/
      e[4] / 2), c(t, "ry", r = /*h*/
      e[5] / 2), c(s, "class", "a9s-inner"), c(s, "cx", a = /*x*/
      e[2] + /*w*/
      e[4] / 2), c(s, "cy", l = /*y*/
      e[3] + /*h*/
      e[5] / 2), c(s, "rx", u = /*w*/
      e[4] / 2), c(s, "ry", m = /*h*/
      e[5] / 2);
    },
    m(f, h) {
      P(f, t, h), P(f, s, h);
    },
    p(f, h) {
      h & /*x, w*/
      20 && n !== (n = /*x*/
      f[2] + /*w*/
      f[4] / 2) && c(t, "cx", n), h & /*y, h*/
      40 && o !== (o = /*y*/
      f[3] + /*h*/
      f[5] / 2) && c(t, "cy", o), h & /*w*/
      16 && i !== (i = /*w*/
      f[4] / 2) && c(t, "rx", i), h & /*h*/
      32 && r !== (r = /*h*/
      f[5] / 2) && c(t, "ry", r), h & /*x, w*/
      20 && a !== (a = /*x*/
      f[2] + /*w*/
      f[4] / 2) && c(s, "cx", a), h & /*y, h*/
      40 && l !== (l = /*y*/
      f[3] + /*h*/
      f[5] / 2) && c(s, "cy", l), h & /*w*/
      16 && u !== (u = /*w*/
      f[4] / 2) && c(s, "rx", u), h & /*h*/
      32 && m !== (m = /*h*/
      f[5] / 2) && c(s, "ry", m);
    },
    d(f) {
      f && O(t), f && O(s);
    }
  };
}
function di(e) {
  let t, n = (
    /*origin*/
    e[1] && Xt(e)
  );
  return {
    c() {
      t = B("g"), n && n.c(), c(t, "class", "a9s-annotation a9s-rubberband");
    },
    m(o, i) {
      P(o, t, i), n && n.m(t, null), e[9](t);
    },
    p(o, [i]) {
      /*origin*/
      o[1] ? n ? n.p(o, i) : (n = Xt(o), n.c(), n.m(t, null)) : n && (n.d(1), n = null);
    },
    i: z,
    o: z,
    d(o) {
      o && O(t), n && n.d(), e[9](null);
    }
  };
}
function mi(e, t, n) {
  const o = ge();
  let { addEventListener: i } = t, { drawingMode: r } = t, { transform: s } = t, a, l, u, m, f, h, d, p = !1, _ = !1, A, w;
  const g = (E) => {
    A = performance.now(), r === "drag" && (n(1, l = s.elementToImage(E.offsetX, E.offsetY)), u = l, n(2, m = l[0]), n(3, f = l[1]), n(4, h = 1), n(5, d = 1));
  }, y = (E) => {
    const S = E || w;
    if (l)
      if (u = s.elementToImage(S.offsetX, S.offsetY), _) {
        const L = 2 * Math.abs(u[0] - l[0]), D = 2 * Math.abs(u[1] - l[1]);
        n(4, h = p ? Math.max(L, D) : L), n(5, d = p ? h : D), n(2, m = Math.min(u[0], l[0] - h / 2)), n(3, f = Math.min(u[1], l[1] - d / 2));
      } else {
        const L = Math.abs(u[0] - l[0]), D = Math.abs(u[1] - l[1]);
        n(4, h = p ? Math.max(L, D) : L), n(5, d = p ? h : D), n(2, m = Math.min(u[0], l[0])), n(3, f = Math.min(u[1], l[1]));
      }
    E && (w = E);
  }, M = (E) => {
    r === "click" && E.stopImmediatePropagation();
    const S = performance.now() - A;
    if (r === "click") {
      if (S > 300)
        return;
      E.stopPropagation(), l ? k() : (n(1, l = s.elementToImage(E.offsetX, E.offsetY)), u = l, n(2, m = l[0]), n(3, f = l[1]), n(4, h = 1), n(5, d = 1));
    } else
      l && (S > 300 || h * d > 100 ? (E.stopPropagation(), k()) : (n(1, l = null), u = null, w = void 0));
  }, k = () => {
    if (h * d > 15) {
      const E = {
        type: F.ELLIPSE,
        geometry: {
          bounds: {
            minX: m,
            minY: f,
            maxX: m + h,
            maxY: f + d
          },
          cx: m + h / 2,
          cy: f + d / 2,
          rx: h / 2,
          ry: d / 2
        }
      };
      o("create", E);
    }
    n(1, l = null), u = null, w = void 0;
  }, I = (E) => {
    E.key === "Shift" && (p = !0, y()), E.key === "Control" && (_ = !0, y());
  }, R = (E) => {
    E.key === "Shift" && (p = !1, y()), E.key === "Control" && (_ = !1, y());
  };
  ye(() => (document.addEventListener("keyup", R), document.addEventListener("keydown", I), i("pointerdown", g), i("pointermove", y), i("pointerup", M), () => {
    document.removeEventListener("keyup", R), document.removeEventListener("keydown", I);
  }));
  function b(E) {
    Ye[E ? "unshift" : "push"](() => {
      a = E, n(0, a);
    });
  }
  return e.$$set = (E) => {
    "addEventListener" in E && n(6, i = E.addEventListener), "drawingMode" in E && n(7, r = E.drawingMode), "transform" in E && n(8, s = E.transform);
  }, [
    a,
    l,
    m,
    f,
    h,
    d,
    i,
    r,
    s,
    b
  ];
}
class hi extends x {
  constructor(t) {
    super(), Q(this, t, mi, di, K, {
      addEventListener: 6,
      drawingMode: 7,
      transform: 8
    });
  }
}
function Rt(e) {
  let t;
  return {
    c() {
      t = B("path"), c(
        t,
        "style",
        /*computedStyle*/
        e[2]
      ), c(
        t,
        "d",
        /*pathData*/
        e[0]
      );
    },
    m(n, o) {
      P(n, t, o);
    },
    p(n, o) {
      o & /*computedStyle*/
      4 && c(
        t,
        "style",
        /*computedStyle*/
        n[2]
      ), o & /*pathData*/
      1 && c(
        t,
        "d",
        /*pathData*/
        n[0]
      );
    },
    d(n) {
      n && O(t);
    }
  };
}
function gi(e) {
  let t, n = (
    /*isDrawing*/
    e[1] && Rt(e)
  );
  return {
    c() {
      t = B("g"), n && n.c(), c(t, "class", "a9s-annotation a9s-rubberband");
    },
    m(o, i) {
      P(o, t, i), n && n.m(t, null);
    },
    p(o, [i]) {
      /*isDrawing*/
      o[1] ? n ? n.p(o, i) : (n = Rt(o), n.c(), n.m(t, null)) : n && (n.d(1), n = null);
    },
    i: z,
    o: z,
    d(o) {
      o && O(t), n && n.d();
    }
  };
}
function pi(e, t, n) {
  let o;
  const i = ge();
  let { addEventListener: r } = t, { drawingMode: s } = t, { annotation: a } = t, { transform: l } = t, { viewportScale: u = 1 } = t, { style: m = void 0 } = t, f = { fillOpacity: 1 }, h = [], d = "", p = !1;
  const _ = (y) => {
    if (s === "drag" && h.length === 0) {
      n(1, p = !0);
      const M = l.elementToImage(y.offsetX, y.offsetY);
      h.push([...M, y.pressure]), n(0, d = Xe(h));
    }
  }, A = (y) => {
    if (p) {
      const M = l.elementToImage(y.offsetX, y.offsetY);
      h.push([...M, y.pressure]), n(0, d = Xe(h, gt, !0));
    }
  }, w = (y) => {
    p && g();
  }, g = () => {
    const y = {
      type: F.FREEHAND,
      geometry: {
        bounds: be(h.map((M) => [M[0], M[1]])),
        points: h
      }
    };
    n(1, p = !1), h = [], i("create", y);
  };
  return ye(() => {
    r("pointerdown", _, !0), r("pointermove", A), r("pointerup", w, !0);
  }), e.$$set = (y) => {
    "addEventListener" in y && n(3, r = y.addEventListener), "drawingMode" in y && n(4, s = y.drawingMode), "annotation" in y && n(5, a = y.annotation), "transform" in y && n(6, l = y.transform), "viewportScale" in y && n(7, u = y.viewportScale), "style" in y && n(8, m = y.style);
  }, e.$$.update = () => {
    e.$$.dirty & /*viewportScale*/
    128, e.$$.dirty & /*annotation, style*/
    288 && n(2, o = Ee(a, m, f));
  }, [
    d,
    p,
    o,
    r,
    s,
    a,
    l,
    u,
    m
  ];
}
class yi extends x {
  constructor(t) {
    super(), Q(this, t, pi, gi, K, {
      addEventListener: 3,
      drawingMode: 4,
      annotation: 5,
      transform: 6,
      viewportScale: 7,
      style: 8
    });
  }
}
function Nt(e) {
  let t, n;
  return {
    c() {
      t = B("line"), n = B("line"), c(t, "class", "a9s-outer"), c(
        t,
        "x1",
        /*x1*/
        e[1]
      ), c(
        t,
        "y1",
        /*y1*/
        e[2]
      ), c(
        t,
        "x2",
        /*x2*/
        e[3]
      ), c(
        t,
        "y2",
        /*y2*/
        e[4]
      ), c(n, "class", "a9s-inner"), c(
        n,
        "x1",
        /*x1*/
        e[1]
      ), c(
        n,
        "y1",
        /*y1*/
        e[2]
      ), c(
        n,
        "x2",
        /*x2*/
        e[3]
      ), c(
        n,
        "y2",
        /*y2*/
        e[4]
      );
    },
    m(o, i) {
      P(o, t, i), P(o, n, i);
    },
    p(o, i) {
      i & /*x1*/
      2 && c(
        t,
        "x1",
        /*x1*/
        o[1]
      ), i & /*y1*/
      4 && c(
        t,
        "y1",
        /*y1*/
        o[2]
      ), i & /*x2*/
      8 && c(
        t,
        "x2",
        /*x2*/
        o[3]
      ), i & /*y2*/
      16 && c(
        t,
        "y2",
        /*y2*/
        o[4]
      ), i & /*x1*/
      2 && c(
        n,
        "x1",
        /*x1*/
        o[1]
      ), i & /*y1*/
      4 && c(
        n,
        "y1",
        /*y1*/
        o[2]
      ), i & /*x2*/
      8 && c(
        n,
        "x2",
        /*x2*/
        o[3]
      ), i & /*y2*/
      16 && c(
        n,
        "y2",
        /*y2*/
        o[4]
      );
    },
    d(o) {
      o && O(t), o && O(n);
    }
  };
}
function _i(e) {
  let t, n = (
    /*origin*/
    e[0] && Nt(e)
  );
  return {
    c() {
      t = B("g"), n && n.c(), c(t, "class", "a9s-annotation a9s-rubberband");
    },
    m(o, i) {
      P(o, t, i), n && n.m(t, null);
    },
    p(o, [i]) {
      /*origin*/
      o[0] ? n ? n.p(o, i) : (n = Nt(o), n.c(), n.m(t, null)) : n && (n.d(1), n = null);
    },
    i: z,
    o: z,
    d(o) {
      o && O(t), n && n.d();
    }
  };
}
function wi(e, t, n) {
  const o = ge();
  let { addEventListener: i } = t, { drawingMode: r } = t, { transform: s } = t, a, l, u, m, f, h, d;
  const p = (g) => {
    a = performance.now(), r === "drag" && (n(0, l = s.elementToImage(g.offsetX, g.offsetY)), u = l, n(1, m = l[0]), n(2, f = l[1]), n(3, h = l[0] + 1), n(4, d = l[1] + 1));
  }, _ = (g) => {
    l && (u = s.elementToImage(g.offsetX, g.offsetY), n(3, h = u[0]), n(4, d = u[1]));
  }, A = (g) => {
    const y = performance.now() - a;
    if (r === "click") {
      if (y > 300)
        return;
      g.stopPropagation(), l ? w() : (n(0, l = s.elementToImage(g.offsetX, g.offsetY)), u = l, n(1, m = l[0]), n(2, f = l[1]), n(3, h = l[0] + 1), n(4, d = l[1] + 1));
    } else
      l && (y > 300 || Math.sqrt(Math.pow(h - m, 2) + Math.pow(d - f, 2)) > 8 ? (g.stopPropagation(), w()) : (n(0, l = null), u = null));
  }, w = () => {
    if (Math.sqrt(Math.pow(h - m, 2) + Math.pow(d - f, 2)) > 8) {
      const g = {
        type: F.LINE,
        geometry: {
          bounds: {
            minX: Math.min(m, h),
            minY: Math.min(f, d),
            maxX: Math.max(m, h),
            maxY: Math.max(f, d)
          },
          x1: m,
          y1: f,
          x2: h,
          y2: d
        }
      };
      o("create", g);
    }
    n(0, l = null), u = null;
  };
  return ye(() => {
    i("pointerdown", p), i("pointermove", _), i("pointerup", A, !0);
  }), e.$$set = (g) => {
    "addEventListener" in g && n(5, i = g.addEventListener), "drawingMode" in g && n(6, r = g.drawingMode), "transform" in g && n(7, s = g.transform);
  }, [l, m, f, h, d, i, r, s];
}
class bi extends x {
  constructor(t) {
    super(), Q(this, t, wi, _i, K, {
      addEventListener: 5,
      drawingMode: 6,
      transform: 7
    });
  }
}
const yt = /* @__PURE__ */ new Map([
  ["rectangle", { tool: ii }],
  ["polygon", { tool: ui }],
  ["ellipse", { tool: hi }],
  ["freehand", { tool: yi }],
  ["line", { tool: bi }]
]), dt = () => [...yt.keys()], fn = (e) => yt.get(e), Ei = (e, t, n) => yt.set(e, { tool: t, opts: n });
function Ai(e) {
  let t, n, o, i, r;
  return {
    c() {
      t = B("g"), n = B("ellipse"), i = B("ellipse"), c(n, "class", "a9s-outer"), c(n, "style", o = /*computedStyle*/
      e[1] ? "display:none;" : void 0), c(
        n,
        "cx",
        /*cx*/
        e[2]
      ), c(
        n,
        "cy",
        /*cy*/
        e[3]
      ), c(
        n,
        "rx",
        /*rx*/
        e[4]
      ), c(
        n,
        "ry",
        /*ry*/
        e[5]
      ), c(i, "class", "a9s-inner"), c(
        i,
        "style",
        /*computedStyle*/
        e[1]
      ), c(
        i,
        "cx",
        /*cx*/
        e[2]
      ), c(
        i,
        "cy",
        /*cy*/
        e[3]
      ), c(
        i,
        "rx",
        /*rx*/
        e[4]
      ), c(
        i,
        "ry",
        /*ry*/
        e[5]
      ), c(t, "data-id", r = /*annotation*/
      e[0].id);
    },
    m(s, a) {
      P(s, t, a), le(t, n), le(t, i);
    },
    p(s, [a]) {
      a & /*computedStyle*/
      2 && o !== (o = /*computedStyle*/
      s[1] ? "display:none;" : void 0) && c(n, "style", o), a & /*computedStyle*/
      2 && c(
        i,
        "style",
        /*computedStyle*/
        s[1]
      ), a & /*annotation*/
      1 && r !== (r = /*annotation*/
      s[0].id) && c(t, "data-id", r);
    },
    i: z,
    o: z,
    d(s) {
      s && O(t);
    }
  };
}
function Si(e, t, n) {
  let o, { annotation: i } = t, { geom: r } = t, { style: s = void 0 } = t;
  const { cx: a, cy: l, rx: u, ry: m } = r;
  return e.$$set = (f) => {
    "annotation" in f && n(0, i = f.annotation), "geom" in f && n(6, r = f.geom), "style" in f && n(7, s = f.style);
  }, e.$$.update = () => {
    e.$$.dirty & /*annotation, style*/
    129 && n(1, o = Ee(i, s));
  }, [i, o, a, l, u, m, r, s];
}
class Mi extends x {
  constructor(t) {
    super(), Q(this, t, Si, Ai, K, { annotation: 0, geom: 6, style: 7 });
  }
}
function Ti(e) {
  let t, n, o, i, r;
  return {
    c() {
      t = B("g"), n = B("polygon"), i = B("polygon"), c(n, "class", "a9s-outer"), c(n, "style", o = /*computedStyle*/
      e[1] ? "display:none;" : void 0), c(
        n,
        "points",
        /*points*/
        e[2].map(Li).join(" ")
      ), c(i, "class", "a9s-inner"), c(
        i,
        "style",
        /*computedStyle*/
        e[1]
      ), c(
        i,
        "points",
        /*points*/
        e[2].map(ki).join(" ")
      ), c(t, "data-id", r = /*annotation*/
      e[0].id);
    },
    m(s, a) {
      P(s, t, a), le(t, n), le(t, i);
    },
    p(s, [a]) {
      a & /*computedStyle*/
      2 && o !== (o = /*computedStyle*/
      s[1] ? "display:none;" : void 0) && c(n, "style", o), a & /*computedStyle*/
      2 && c(
        i,
        "style",
        /*computedStyle*/
        s[1]
      ), a & /*annotation*/
      1 && r !== (r = /*annotation*/
      s[0].id) && c(t, "data-id", r);
    },
    i: z,
    o: z,
    d(s) {
      s && O(t);
    }
  };
}
const Li = (e) => e.join(","), ki = (e) => e.join(",");
function vi(e, t, n) {
  let o, { annotation: i } = t, { geom: r } = t, { style: s = void 0 } = t;
  const { points: a } = r;
  return e.$$set = (l) => {
    "annotation" in l && n(0, i = l.annotation), "geom" in l && n(3, r = l.geom), "style" in l && n(4, s = l.style);
  }, e.$$.update = () => {
    e.$$.dirty & /*annotation, style*/
    17 && n(1, o = Ee(i, s));
  }, [i, o, a, r, s];
}
class Oi extends x {
  constructor(t) {
    super(), Q(this, t, vi, Ti, K, { annotation: 0, geom: 3, style: 4 });
  }
}
function Pi(e) {
  let t, n, o, i, r;
  return {
    c() {
      t = B("g"), n = B("rect"), i = B("rect"), c(n, "class", "a9s-outer"), c(n, "style", o = /*computedStyle*/
      e[5] ? "display:none;" : void 0), c(
        n,
        "x",
        /*x*/
        e[4]
      ), c(
        n,
        "y",
        /*y*/
        e[3]
      ), c(
        n,
        "width",
        /*w*/
        e[2]
      ), c(
        n,
        "height",
        /*h*/
        e[1]
      ), c(i, "class", "a9s-inner"), c(
        i,
        "style",
        /*computedStyle*/
        e[5]
      ), c(
        i,
        "x",
        /*x*/
        e[4]
      ), c(
        i,
        "y",
        /*y*/
        e[3]
      ), c(
        i,
        "width",
        /*w*/
        e[2]
      ), c(
        i,
        "height",
        /*h*/
        e[1]
      ), c(t, "data-id", r = /*annotation*/
      e[0].id);
    },
    m(s, a) {
      P(s, t, a), le(t, n), le(t, i);
    },
    p(s, [a]) {
      a & /*computedStyle*/
      32 && o !== (o = /*computedStyle*/
      s[5] ? "display:none;" : void 0) && c(n, "style", o), a & /*x*/
      16 && c(
        n,
        "x",
        /*x*/
        s[4]
      ), a & /*y*/
      8 && c(
        n,
        "y",
        /*y*/
        s[3]
      ), a & /*w*/
      4 && c(
        n,
        "width",
        /*w*/
        s[2]
      ), a & /*h*/
      2 && c(
        n,
        "height",
        /*h*/
        s[1]
      ), a & /*computedStyle*/
      32 && c(
        i,
        "style",
        /*computedStyle*/
        s[5]
      ), a & /*x*/
      16 && c(
        i,
        "x",
        /*x*/
        s[4]
      ), a & /*y*/
      8 && c(
        i,
        "y",
        /*y*/
        s[3]
      ), a & /*w*/
      4 && c(
        i,
        "width",
        /*w*/
        s[2]
      ), a & /*h*/
      2 && c(
        i,
        "height",
        /*h*/
        s[1]
      ), a & /*annotation*/
      1 && r !== (r = /*annotation*/
      s[0].id) && c(t, "data-id", r);
    },
    i: z,
    o: z,
    d(s) {
      s && O(t);
    }
  };
}
function Ii(e, t, n) {
  let o, i, r, s, a, { annotation: l } = t, { geom: u } = t, { style: m = void 0 } = t;
  return e.$$set = (f) => {
    "annotation" in f && n(0, l = f.annotation), "geom" in f && n(6, u = f.geom), "style" in f && n(7, m = f.style);
  }, e.$$.update = () => {
    e.$$.dirty & /*annotation, style*/
    129 && n(5, o = Ee(l, m)), e.$$.dirty & /*geom*/
    64 && n(4, { x: i, y: r, w: s, h: a } = u, i, (n(3, r), n(6, u)), (n(2, s), n(6, u)), (n(1, a), n(6, u)));
  }, [l, a, s, r, i, o, u, m];
}
class Di extends x {
  constructor(t) {
    super(), Q(this, t, Ii, Pi, K, { annotation: 0, geom: 6, style: 7 });
  }
}
function Bi(e) {
  let t, n, o;
  return {
    c() {
      t = B("g"), n = B("path"), c(
        n,
        "style",
        /*computedStyle*/
        e[2]
      ), c(
        n,
        "d",
        /*pathData*/
        e[1]
      ), c(t, "data-id", o = /*annotation*/
      e[0].id);
    },
    m(i, r) {
      P(i, t, r), le(t, n);
    },
    p(i, [r]) {
      r & /*computedStyle*/
      4 && c(
        n,
        "style",
        /*computedStyle*/
        i[2]
      ), r & /*pathData*/
      2 && c(
        n,
        "d",
        /*pathData*/
        i[1]
      ), r & /*annotation*/
      1 && o !== (o = /*annotation*/
      i[0].id) && c(t, "data-id", o);
    },
    i: z,
    o: z,
    d(i) {
      i && O(t);
    }
  };
}
function Yi(e, t, n) {
  let o, i, { annotation: r } = t, { geom: s } = t, { style: a = void 0 } = t, l = { fillOpacity: 1 };
  const { points: u } = s;
  return e.$$set = (m) => {
    "annotation" in m && n(0, r = m.annotation), "geom" in m && n(3, s = m.geom), "style" in m && n(4, a = m.style);
  }, e.$$.update = () => {
    e.$$.dirty & /*annotation, style*/
    17 && n(2, o = Ee(r, a, l));
  }, n(1, i = Xe(u, gt, !0)), [r, i, o, s, a];
}
class Xi extends x {
  constructor(t) {
    super(), Q(this, t, Yi, Bi, K, { annotation: 0, geom: 3, style: 4 });
  }
}
const dr = {
  elementToImage: (e, t) => [e, t]
}, Ri = (e) => ({
  elementToImage: (t, n) => {
    const o = e.getBoundingClientRect(), i = e.createSVGPoint();
    i.x = t + o.x, i.y = n + o.y;
    const { x: r, y: s } = i.matrixTransform(e.getScreenCTM().inverse());
    return [r, s];
  }
}), Ni = 250, Ci = (e, t) => {
  const n = ge();
  let o;
  return { onPointerDown: () => o = performance.now(), onPointerUp: (s) => {
    if (performance.now() - o < Ni) {
      const { x: l, y: u } = Ui(s, e), m = t.getAt(l, u);
      m ? n("click", { originalEvent: s, annotation: m }) : n("click", { originalEvent: s });
    }
  } };
}, Ui = (e, t) => {
  const n = t.createSVGPoint(), o = t.getBoundingClientRect(), i = e.clientX - o.x, r = e.clientY - o.y, { left: s, top: a } = t.getBoundingClientRect();
  return n.x = i + s, n.y = r + a, n.matrixTransform(t.getScreenCTM().inverse());
};
function Ct(e, t, n) {
  const o = e.slice();
  return o[29] = t[n], o;
}
function Ut(e, t, n) {
  const o = e.slice();
  return o[32] = t[n], o;
}
function rt(e) {
  const t = e.slice(), n = (
    /*annotation*/
    t[32].target.selector
  );
  return t[35] = n, t;
}
function Ht(e) {
  let t = (
    /*annotation*/
    e[32].id
  ), n, o, i = Ft(e);
  return {
    c() {
      i.c(), n = he();
    },
    m(r, s) {
      i.m(r, s), P(r, n, s), o = !0;
    },
    p(r, s) {
      s[0] & /*$store*/
      8192 && K(t, t = /*annotation*/
      r[32].id) ? (de(), G(i, 1, 1, z), me(), i = Ft(r), i.c(), H(i, 1), i.m(n.parentNode, n)) : i.p(r, s);
    },
    i(r) {
      o || (H(i), o = !0);
    },
    o(r) {
      G(i), o = !1;
    },
    d(r) {
      r && O(n), i.d(r);
    }
  };
}
function Hi(e) {
  let t, n;
  return t = new Xi({
    props: {
      annotation: (
        /*annotation*/
        e[32]
      ),
      geom: (
        /*selector*/
        e[35].geometry
      ),
      style: (
        /*style*/
        e[1]
      )
    }
  }), {
    c() {
      ce(t.$$.fragment);
    },
    m(o, i) {
      oe(t, o, i), n = !0;
    },
    p(o, i) {
      const r = {};
      i[0] & /*$store*/
      8192 && (r.annotation = /*annotation*/
      o[32]), i[0] & /*$store*/
      8192 && (r.geom = /*selector*/
      o[35].geometry), i[0] & /*style*/
      2 && (r.style = /*style*/
      o[1]), t.$set(r);
    },
    i(o) {
      n || (H(t.$$.fragment, o), n = !0);
    },
    o(o) {
      G(t.$$.fragment, o), n = !1;
    },
    d(o) {
      ie(t, o);
    }
  };
}
function Fi(e) {
  let t, n;
  return t = new Oi({
    props: {
      annotation: (
        /*annotation*/
        e[32]
      ),
      geom: (
        /*selector*/
        e[35].geometry
      ),
      style: (
        /*style*/
        e[1]
      )
    }
  }), {
    c() {
      ce(t.$$.fragment);
    },
    m(o, i) {
      oe(t, o, i), n = !0;
    },
    p(o, i) {
      const r = {};
      i[0] & /*$store*/
      8192 && (r.annotation = /*annotation*/
      o[32]), i[0] & /*$store*/
      8192 && (r.geom = /*selector*/
      o[35].geometry), i[0] & /*style*/
      2 && (r.style = /*style*/
      o[1]), t.$set(r);
    },
    i(o) {
      n || (H(t.$$.fragment, o), n = !0);
    },
    o(o) {
      G(t.$$.fragment, o), n = !1;
    },
    d(o) {
      ie(t, o);
    }
  };
}
function Gi(e) {
  let t, n;
  return t = new Di({
    props: {
      annotation: (
        /*annotation*/
        e[32]
      ),
      geom: (
        /*selector*/
        e[35].geometry
      ),
      style: (
        /*style*/
        e[1]
      )
    }
  }), {
    c() {
      ce(t.$$.fragment);
    },
    m(o, i) {
      oe(t, o, i), n = !0;
    },
    p(o, i) {
      const r = {};
      i[0] & /*$store*/
      8192 && (r.annotation = /*annotation*/
      o[32]), i[0] & /*$store*/
      8192 && (r.geom = /*selector*/
      o[35].geometry), i[0] & /*style*/
      2 && (r.style = /*style*/
      o[1]), t.$set(r);
    },
    i(o) {
      n || (H(t.$$.fragment, o), n = !0);
    },
    o(o) {
      G(t.$$.fragment, o), n = !1;
    },
    d(o) {
      ie(t, o);
    }
  };
}
function Vi(e) {
  let t, n;
  return t = new Mi({
    props: {
      annotation: (
        /*annotation*/
        e[32]
      ),
      geom: (
        /*selector*/
        e[35].geometry
      ),
      style: (
        /*style*/
        e[1]
      )
    }
  }), {
    c() {
      ce(t.$$.fragment);
    },
    m(o, i) {
      oe(t, o, i), n = !0;
    },
    p(o, i) {
      const r = {};
      i[0] & /*$store*/
      8192 && (r.annotation = /*annotation*/
      o[32]), i[0] & /*$store*/
      8192 && (r.geom = /*selector*/
      o[35].geometry), i[0] & /*style*/
      2 && (r.style = /*style*/
      o[1]), t.$set(r);
    },
    i(o) {
      n || (H(t.$$.fragment, o), n = !0);
    },
    o(o) {
      G(t.$$.fragment, o), n = !1;
    },
    d(o) {
      ie(t, o);
    }
  };
}
function Ft(e) {
  let t, n, o, i;
  const r = [Vi, Gi, Fi, Hi], s = [];
  function a(l, u) {
    return (
      /*selector*/
      l[35].type === F.ELLIPSE ? 0 : (
        /*selector*/
        l[35].type === F.RECTANGLE ? 1 : (
          /*selector*/
          l[35].type === F.POLYGON ? 2 : (
            /*selector*/
            l[35].type === F.FREEHAND ? 3 : -1
          )
        )
      )
    );
  }
  return ~(t = a(e)) && (n = s[t] = r[t](e)), {
    c() {
      n && n.c(), o = he();
    },
    m(l, u) {
      ~t && s[t].m(l, u), P(l, o, u), i = !0;
    },
    p(l, u) {
      let m = t;
      t = a(l), t === m ? ~t && s[t].p(l, u) : (n && (de(), G(s[m], 1, 1, () => {
        s[m] = null;
      }), me()), ~t ? (n = s[t], n ? n.p(l, u) : (n = s[t] = r[t](l), n.c()), H(n, 1), n.m(o.parentNode, o)) : n = null);
    },
    i(l) {
      i || (H(n), i = !0);
    },
    o(l) {
      G(n), i = !1;
    },
    d(l) {
      ~t && s[t].d(l), l && O(o);
    }
  };
}
function Gt(e) {
  let t = !/*isEditable*/
  e[7](
    /*annotation*/
    e[32]
  ), n, o, i = t && Ht(rt(e));
  return {
    c() {
      i && i.c(), n = he();
    },
    m(r, s) {
      i && i.m(r, s), P(r, n, s), o = !0;
    },
    p(r, s) {
      s[0] & /*isEditable, $store*/
      8320 && (t = !/*isEditable*/
      r[7](
        /*annotation*/
        r[32]
      )), t ? i ? (i.p(rt(r), s), s[0] & /*isEditable, $store*/
      8320 && H(i, 1)) : (i = Ht(rt(r)), i.c(), H(i, 1), i.m(n.parentNode, n)) : i && (de(), G(i, 1, 1, () => {
        i = null;
      }), me());
    },
    i(r) {
      o || (H(i), o = !0);
    },
    o(r) {
      G(i), o = !1;
    },
    d(r) {
      i && i.d(r), r && O(n);
    }
  };
}
function Vt(e) {
  let t, n, o, i;
  const r = [ji, zi], s = [];
  function a(l, u) {
    return (
      /*editableAnnotations*/
      l[6] ? 0 : (
        /*tool*/
        l[12] && /*drawingEnabled*/
        l[0] ? 1 : -1
      )
    );
  }
  return ~(t = a(e)) && (n = s[t] = r[t](e)), {
    c() {
      n && n.c(), o = he();
    },
    m(l, u) {
      ~t && s[t].m(l, u), P(l, o, u), i = !0;
    },
    p(l, u) {
      let m = t;
      t = a(l), t === m ? ~t && s[t].p(l, u) : (n && (de(), G(s[m], 1, 1, () => {
        s[m] = null;
      }), me()), ~t ? (n = s[t], n ? n.p(l, u) : (n = s[t] = r[t](l), n.c()), H(n, 1), n.m(o.parentNode, o)) : n = null);
    },
    i(l) {
      i || (H(n), i = !0);
    },
    o(l) {
      G(n), i = !1;
    },
    d(l) {
      ~t && s[t].d(l), l && O(o);
    }
  };
}
function zi(e) {
  let t = (
    /*toolName*/
    e[2]
  ), n, o, i = zt(e);
  return {
    c() {
      i.c(), n = he();
    },
    m(r, s) {
      i.m(r, s), P(r, n, s), o = !0;
    },
    p(r, s) {
      s[0] & /*toolName*/
      4 && K(t, t = /*toolName*/
      r[2]) ? (de(), G(i, 1, 1, z), me(), i = zt(r), i.c(), H(i, 1), i.m(n.parentNode, n)) : i.p(r, s);
    },
    i(r) {
      o || (H(i), o = !0);
    },
    o(r) {
      G(i), o = !1;
    },
    d(r) {
      r && O(n), i.d(r);
    }
  };
}
function ji(e) {
  let t, n, o = (
    /*editableAnnotations*/
    e[6]
  ), i = [];
  for (let s = 0; s < o.length; s += 1)
    i[s] = qt(Ct(e, o, s));
  const r = (s) => G(i[s], 1, 1, () => {
    i[s] = null;
  });
  return {
    c() {
      for (let s = 0; s < i.length; s += 1)
        i[s].c();
      t = he();
    },
    m(s, a) {
      for (let l = 0; l < i.length; l += 1)
        i[l] && i[l].m(s, a);
      P(s, t, a), n = !0;
    },
    p(s, a) {
      if (a[0] & /*editableAnnotations, drawingEl, style, transform, $scale, onChangeSelected*/
      279634) {
        o = /*editableAnnotations*/
        s[6];
        let l;
        for (l = 0; l < o.length; l += 1) {
          const u = Ct(s, o, l);
          i[l] ? (i[l].p(u, a), H(i[l], 1)) : (i[l] = qt(u), i[l].c(), H(i[l], 1), i[l].m(t.parentNode, t));
        }
        for (de(), l = o.length; l < i.length; l += 1)
          r(l);
        me();
      }
    },
    i(s) {
      if (!n) {
        for (let a = 0; a < o.length; a += 1)
          H(i[a]);
        n = !0;
      }
    },
    o(s) {
      i = i.filter(Boolean);
      for (let a = 0; a < i.length; a += 1)
        G(i[a]);
      n = !1;
    },
    d(s) {
      mt(i, s), s && O(t);
    }
  };
}
function zt(e) {
  let t, n;
  return t = new ti({
    props: {
      target: (
        /*drawingEl*/
        e[4]
      ),
      tool: (
        /*tool*/
        e[12]
      ),
      drawingMode: (
        /*drawingMode*/
        e[11]
      ),
      transform: (
        /*transform*/
        e[10]
      ),
      viewportScale: (
        /*$scale*/
        e[14]
      )
    }
  }), t.$on(
    "create",
    /*onSelectionCreated*/
    e[17]
  ), {
    c() {
      ce(t.$$.fragment);
    },
    m(o, i) {
      oe(t, o, i), n = !0;
    },
    p(o, i) {
      const r = {};
      i[0] & /*drawingEl*/
      16 && (r.target = /*drawingEl*/
      o[4]), i[0] & /*tool*/
      4096 && (r.tool = /*tool*/
      o[12]), i[0] & /*drawingMode*/
      2048 && (r.drawingMode = /*drawingMode*/
      o[11]), i[0] & /*transform*/
      1024 && (r.transform = /*transform*/
      o[10]), i[0] & /*$scale*/
      16384 && (r.viewportScale = /*$scale*/
      o[14]), t.$set(r);
    },
    i(o) {
      n || (H(t.$$.fragment, o), n = !0);
    },
    o(o) {
      G(t.$$.fragment, o), n = !1;
    },
    d(o) {
      ie(t, o);
    }
  };
}
function jt(e) {
  let t, n;
  return t = new $o({
    props: {
      target: (
        /*drawingEl*/
        e[4]
      ),
      editor: Pt(
        /*editable*/
        e[29].target.selector
      ),
      annotation: (
        /*editable*/
        e[29]
      ),
      style: (
        /*style*/
        e[1]
      ),
      transform: (
        /*transform*/
        e[10]
      ),
      viewportScale: (
        /*$scale*/
        e[14]
      )
    }
  }), t.$on("change", function() {
    V(
      /*onChangeSelected*/
      e[18](
        /*editable*/
        e[29]
      )
    ) && e[18](
      /*editable*/
      e[29]
    ).apply(this, arguments);
  }), {
    c() {
      ce(t.$$.fragment);
    },
    m(o, i) {
      oe(t, o, i), n = !0;
    },
    p(o, i) {
      e = o;
      const r = {};
      i[0] & /*drawingEl*/
      16 && (r.target = /*drawingEl*/
      e[4]), i[0] & /*editableAnnotations*/
      64 && (r.editor = Pt(
        /*editable*/
        e[29].target.selector
      )), i[0] & /*editableAnnotations*/
      64 && (r.annotation = /*editable*/
      e[29]), i[0] & /*style*/
      2 && (r.style = /*style*/
      e[1]), i[0] & /*transform*/
      1024 && (r.transform = /*transform*/
      e[10]), i[0] & /*$scale*/
      16384 && (r.viewportScale = /*$scale*/
      e[14]), t.$set(r);
    },
    i(o) {
      n || (H(t.$$.fragment, o), n = !0);
    },
    o(o) {
      G(t.$$.fragment, o), n = !1;
    },
    d(o) {
      ie(t, o);
    }
  };
}
function qt(e) {
  let t = (
    /*editable*/
    e[29].id
  ), n, o, i = jt(e);
  return {
    c() {
      i.c(), n = he();
    },
    m(r, s) {
      i.m(r, s), P(r, n, s), o = !0;
    },
    p(r, s) {
      s[0] & /*editableAnnotations*/
      64 && K(t, t = /*editable*/
      r[29].id) ? (de(), G(i, 1, 1, z), me(), i = jt(r), i.c(), H(i, 1), i.m(n.parentNode, n)) : i.p(r, s);
    },
    i(r) {
      o || (H(i), o = !0);
    },
    o(r) {
      G(i), o = !1;
    },
    d(r) {
      r && O(n), i.d(r);
    }
  };
}
function qi(e) {
  let t, n, o, i, r, s, a = (
    /*$store*/
    e[13]
  ), l = [];
  for (let f = 0; f < a.length; f += 1)
    l[f] = Gt(Ut(e, a, f));
  const u = (f) => G(l[f], 1, 1, () => {
    l[f] = null;
  });
  let m = (
    /*drawingEl*/
    e[4] && Vt(e)
  );
  return {
    c() {
      t = B("svg"), n = B("g");
      for (let f = 0; f < l.length; f += 1)
        l[f].c();
      o = B("g"), m && m.c(), c(o, "class", "drawing"), c(t, "class", "a9s-annotationlayer"), Et(
        t,
        "drawing",
        /*tool*/
        e[12]
      );
    },
    m(f, h) {
      P(f, t, h), le(t, n);
      for (let d = 0; d < l.length; d += 1)
        l[d] && l[d].m(n, null);
      le(t, o), m && m.m(o, null), e[25](o), e[26](t), i = !0, r || (s = [
        j(t, "pointerup", function() {
          V(
            /*onPointerUp*/
            e[8]
          ) && e[8].apply(this, arguments);
        }),
        j(t, "pointerdown", function() {
          V(
            /*onPointerDown*/
            e[9]
          ) && e[9].apply(this, arguments);
        })
      ], r = !0);
    },
    p(f, h) {
      if (e = f, h[0] & /*$store, style, isEditable*/
      8322) {
        a = /*$store*/
        e[13];
        let d;
        for (d = 0; d < a.length; d += 1) {
          const p = Ut(e, a, d);
          l[d] ? (l[d].p(p, h), H(l[d], 1)) : (l[d] = Gt(p), l[d].c(), H(l[d], 1), l[d].m(n, null));
        }
        for (de(), d = a.length; d < l.length; d += 1)
          u(d);
        me();
      }
      /*drawingEl*/
      e[4] ? m ? (m.p(e, h), h[0] & /*drawingEl*/
      16 && H(m, 1)) : (m = Vt(e), m.c(), H(m, 1), m.m(o, null)) : m && (de(), G(m, 1, 1, () => {
        m = null;
      }), me()), (!i || h[0] & /*tool*/
      4096) && Et(
        t,
        "drawing",
        /*tool*/
        e[12]
      );
    },
    i(f) {
      if (!i) {
        for (let h = 0; h < a.length; h += 1)
          H(l[h]);
        H(m), i = !0;
      }
    },
    o(f) {
      l = l.filter(Boolean);
      for (let h = 0; h < l.length; h += 1)
        G(l[h]);
      G(m), i = !1;
    },
    d(f) {
      f && O(t), mt(l, f), m && m.d(), e[25](null), e[26](null), r = !1, ae(s);
    }
  };
}
function Wi(e, t, n) {
  let o, i, r, s, a, l, u, m, f, h, d = z, p = () => (d(), d = Qt(b, (v) => n(14, h = v)), b);
  e.$$.on_destroy.push(() => d());
  let { drawingEnabled: _ } = t, { image: A } = t, { preferredDrawingMode: w } = t, { state: g } = t, { style: y = void 0 } = t, { toolName: M = dt().length > 0 ? dt()[0] : void 0 } = t, { user: k } = t, I, R, b;
  ye(() => p(n(5, b = li(A, R))));
  const { selection: E, store: S } = g;
  bt(e, E, (v) => n(24, m = v)), bt(e, S, (v) => n(13, f = v));
  let L = null, D = null;
  const N = (v) => {
    S.unobserve(L);
    const ee = v.filter(({ editable: Z }) => Z).map(({ id: Z }) => Z);
    ee.length > 0 ? (n(6, D = ee.map((Z) => S.getAnnotation(Z))), L = (Z) => {
      const { updated: pe } = Z.changes;
      n(6, D = pe.map((ue) => ue.newValue));
    }, S.observe(L, { annotations: ee })) : n(6, D = null);
  }, C = (v) => {
    const ee = rn(), Z = {
      id: ee,
      bodies: [],
      target: {
        annotation: ee,
        selector: v.detail,
        creator: k,
        created: /* @__PURE__ */ new Date()
      }
    };
    S.addAnnotation(Z), E.setSelected(Z.id);
  }, X = (v) => (ee) => {
    var ne;
    const { target: Z } = v, pe = 10 * 60 * 1e3, ue = ((ne = Z.creator) == null ? void 0 : ne.id) !== k.id || !Z.created || (/* @__PURE__ */ new Date()).getTime() - Z.created.getTime() > pe;
    S.updateTarget({
      ...Z,
      selector: ee.detail,
      created: ue ? Z.created : /* @__PURE__ */ new Date(),
      updated: ue ? /* @__PURE__ */ new Date() : null,
      updatedBy: ue ? k : null
    });
  };
  function fe(v) {
    Ye[v ? "unshift" : "push"](() => {
      I = v, n(4, I);
    });
  }
  function q(v) {
    Ye[v ? "unshift" : "push"](() => {
      R = v, n(3, R);
    });
  }
  return e.$$set = (v) => {
    "drawingEnabled" in v && n(0, _ = v.drawingEnabled), "image" in v && n(19, A = v.image), "preferredDrawingMode" in v && n(20, w = v.preferredDrawingMode), "state" in v && n(21, g = v.state), "style" in v && n(1, y = v.style), "toolName" in v && n(2, M = v.toolName), "user" in v && n(22, k = v.user);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*toolName*/
    4 && n(12, { tool: o, opts: i } = fn(M), o, (n(23, i), n(2, M))), e.$$.dirty[0] & /*opts, preferredDrawingMode*/
    9437184 && n(11, r = (i == null ? void 0 : i.drawingMode) || w), e.$$.dirty[0] & /*svgEl*/
    8 && n(10, s = Ri(R)), e.$$.dirty[0] & /*svgEl*/
    8 && n(9, { onPointerDown: a, onPointerUp: l } = Ci(R, S), a, (n(8, l), n(3, R))), e.$$.dirty[0] & /*$selection*/
    16777216 && n(7, u = (v) => m.selected.find((ee) => ee.id === v.id && ee.editable)), e.$$.dirty[0] & /*$selection*/
    16777216 && N(m.selected);
  }, [
    _,
    y,
    M,
    R,
    I,
    b,
    D,
    u,
    l,
    a,
    s,
    r,
    o,
    f,
    h,
    E,
    S,
    C,
    X,
    A,
    w,
    g,
    k,
    i,
    m,
    fe,
    q
  ];
}
class Ki extends x {
  constructor(t) {
    super(), Q(
      this,
      t,
      Wi,
      qi,
      K,
      {
        drawingEnabled: 0,
        image: 19,
        preferredDrawingMode: 20,
        state: 21,
        style: 1,
        toolName: 2,
        user: 22
      },
      null,
      [-1, -1]
    );
  }
}
function Zi(e, t, n, o, i) {
  un(e, t, n || 0, o || e.length - 1, i || Ji);
}
function un(e, t, n, o, i) {
  for (; o > n; ) {
    if (o - n > 600) {
      var r = o - n + 1, s = t - n + 1, a = Math.log(r), l = 0.5 * Math.exp(2 * a / 3), u = 0.5 * Math.sqrt(a * l * (r - l) / r) * (s - r / 2 < 0 ? -1 : 1), m = Math.max(n, Math.floor(t - s * l / r + u)), f = Math.min(o, Math.floor(t + (r - s) * l / r + u));
      un(e, t, m, f, i);
    }
    var h = e[t], d = n, p = o;
    for (Oe(e, n, t), i(e[o], h) > 0 && Oe(e, n, o); d < p; ) {
      for (Oe(e, d, p), d++, p--; i(e[d], h) < 0; )
        d++;
      for (; i(e[p], h) > 0; )
        p--;
    }
    i(e[n], h) === 0 ? Oe(e, n, p) : (p++, Oe(e, p, o)), p <= t && (n = p + 1), t <= p && (o = p - 1);
  }
}
function Oe(e, t, n) {
  var o = e[t];
  e[t] = e[n], e[n] = o;
}
function Ji(e, t) {
  return e < t ? -1 : e > t ? 1 : 0;
}
class Qi {
  constructor(t = 9) {
    this._maxEntries = Math.max(4, t), this._minEntries = Math.max(2, Math.ceil(this._maxEntries * 0.4)), this.clear();
  }
  all() {
    return this._all(this.data, []);
  }
  search(t) {
    let n = this.data;
    const o = [];
    if (!Ze(t, n))
      return o;
    const i = this.toBBox, r = [];
    for (; n; ) {
      for (let s = 0; s < n.children.length; s++) {
        const a = n.children[s], l = n.leaf ? i(a) : a;
        Ze(t, l) && (n.leaf ? o.push(a) : lt(t, l) ? this._all(a, o) : r.push(a));
      }
      n = r.pop();
    }
    return o;
  }
  collides(t) {
    let n = this.data;
    if (!Ze(t, n))
      return !1;
    const o = [];
    for (; n; ) {
      for (let i = 0; i < n.children.length; i++) {
        const r = n.children[i], s = n.leaf ? this.toBBox(r) : r;
        if (Ze(t, s)) {
          if (n.leaf || lt(t, s))
            return !0;
          o.push(r);
        }
      }
      n = o.pop();
    }
    return !1;
  }
  load(t) {
    if (!(t && t.length))
      return this;
    if (t.length < this._minEntries) {
      for (let o = 0; o < t.length; o++)
        this.insert(t[o]);
      return this;
    }
    let n = this._build(t.slice(), 0, t.length - 1, 0);
    if (!this.data.children.length)
      this.data = n;
    else if (this.data.height === n.height)
      this._splitRoot(this.data, n);
    else {
      if (this.data.height < n.height) {
        const o = this.data;
        this.data = n, n = o;
      }
      this._insert(n, this.data.height - n.height - 1, !0);
    }
    return this;
  }
  insert(t) {
    return t && this._insert(t, this.data.height - 1), this;
  }
  clear() {
    return this.data = ke([]), this;
  }
  remove(t, n) {
    if (!t)
      return this;
    let o = this.data;
    const i = this.toBBox(t), r = [], s = [];
    let a, l, u;
    for (; o || r.length; ) {
      if (o || (o = r.pop(), l = r[r.length - 1], a = s.pop(), u = !0), o.leaf) {
        const m = xi(t, o.children, n);
        if (m !== -1)
          return o.children.splice(m, 1), r.push(o), this._condense(r), this;
      }
      !u && !o.leaf && lt(o, i) ? (r.push(o), s.push(a), a = 0, l = o, o = o.children[0]) : l ? (a++, o = l.children[a], u = !1) : o = null;
    }
    return this;
  }
  toBBox(t) {
    return t;
  }
  compareMinX(t, n) {
    return t.minX - n.minX;
  }
  compareMinY(t, n) {
    return t.minY - n.minY;
  }
  toJSON() {
    return this.data;
  }
  fromJSON(t) {
    return this.data = t, this;
  }
  _all(t, n) {
    const o = [];
    for (; t; )
      t.leaf ? n.push(...t.children) : o.push(...t.children), t = o.pop();
    return n;
  }
  _build(t, n, o, i) {
    const r = o - n + 1;
    let s = this._maxEntries, a;
    if (r <= s)
      return a = ke(t.slice(n, o + 1)), Te(a, this.toBBox), a;
    i || (i = Math.ceil(Math.log(r) / Math.log(s)), s = Math.ceil(r / Math.pow(s, i - 1))), a = ke([]), a.leaf = !1, a.height = i;
    const l = Math.ceil(r / s), u = l * Math.ceil(Math.sqrt(s));
    Wt(t, n, o, u, this.compareMinX);
    for (let m = n; m <= o; m += u) {
      const f = Math.min(m + u - 1, o);
      Wt(t, m, f, l, this.compareMinY);
      for (let h = m; h <= f; h += l) {
        const d = Math.min(h + l - 1, f);
        a.children.push(this._build(t, h, d, i - 1));
      }
    }
    return Te(a, this.toBBox), a;
  }
  _chooseSubtree(t, n, o, i) {
    for (; i.push(n), !(n.leaf || i.length - 1 === o); ) {
      let r = 1 / 0, s = 1 / 0, a;
      for (let l = 0; l < n.children.length; l++) {
        const u = n.children[l], m = st(u), f = tr(t, u) - m;
        f < s ? (s = f, r = m < r ? m : r, a = u) : f === s && m < r && (r = m, a = u);
      }
      n = a || n.children[0];
    }
    return n;
  }
  _insert(t, n, o) {
    const i = o ? t : this.toBBox(t), r = [], s = this._chooseSubtree(i, this.data, n, r);
    for (s.children.push(t), Ie(s, i); n >= 0 && r[n].children.length > this._maxEntries; )
      this._split(r, n), n--;
    this._adjustParentBBoxes(i, r, n);
  }
  // split overflowed node into two
  _split(t, n) {
    const o = t[n], i = o.children.length, r = this._minEntries;
    this._chooseSplitAxis(o, r, i);
    const s = this._chooseSplitIndex(o, r, i), a = ke(o.children.splice(s, o.children.length - s));
    a.height = o.height, a.leaf = o.leaf, Te(o, this.toBBox), Te(a, this.toBBox), n ? t[n - 1].children.push(a) : this._splitRoot(o, a);
  }
  _splitRoot(t, n) {
    this.data = ke([t, n]), this.data.height = t.height + 1, this.data.leaf = !1, Te(this.data, this.toBBox);
  }
  _chooseSplitIndex(t, n, o) {
    let i, r = 1 / 0, s = 1 / 0;
    for (let a = n; a <= o - n; a++) {
      const l = Pe(t, 0, a, this.toBBox), u = Pe(t, a, o, this.toBBox), m = nr(l, u), f = st(l) + st(u);
      m < r ? (r = m, i = a, s = f < s ? f : s) : m === r && f < s && (s = f, i = a);
    }
    return i || o - n;
  }
  // sorts node children by the best axis for split
  _chooseSplitAxis(t, n, o) {
    const i = t.leaf ? this.compareMinX : $i, r = t.leaf ? this.compareMinY : er, s = this._allDistMargin(t, n, o, i), a = this._allDistMargin(t, n, o, r);
    s < a && t.children.sort(i);
  }
  // total margin of all possible split distributions where each node is at least m full
  _allDistMargin(t, n, o, i) {
    t.children.sort(i);
    const r = this.toBBox, s = Pe(t, 0, n, r), a = Pe(t, o - n, o, r);
    let l = Ke(s) + Ke(a);
    for (let u = n; u < o - n; u++) {
      const m = t.children[u];
      Ie(s, t.leaf ? r(m) : m), l += Ke(s);
    }
    for (let u = o - n - 1; u >= n; u--) {
      const m = t.children[u];
      Ie(a, t.leaf ? r(m) : m), l += Ke(a);
    }
    return l;
  }
  _adjustParentBBoxes(t, n, o) {
    for (let i = o; i >= 0; i--)
      Ie(n[i], t);
  }
  _condense(t) {
    for (let n = t.length - 1, o; n >= 0; n--)
      t[n].children.length === 0 ? n > 0 ? (o = t[n - 1].children, o.splice(o.indexOf(t[n]), 1)) : this.clear() : Te(t[n], this.toBBox);
  }
}
function xi(e, t, n) {
  if (!n)
    return t.indexOf(e);
  for (let o = 0; o < t.length; o++)
    if (n(e, t[o]))
      return o;
  return -1;
}
function Te(e, t) {
  Pe(e, 0, e.children.length, t, e);
}
function Pe(e, t, n, o, i) {
  i || (i = ke(null)), i.minX = 1 / 0, i.minY = 1 / 0, i.maxX = -1 / 0, i.maxY = -1 / 0;
  for (let r = t; r < n; r++) {
    const s = e.children[r];
    Ie(i, e.leaf ? o(s) : s);
  }
  return i;
}
function Ie(e, t) {
  return e.minX = Math.min(e.minX, t.minX), e.minY = Math.min(e.minY, t.minY), e.maxX = Math.max(e.maxX, t.maxX), e.maxY = Math.max(e.maxY, t.maxY), e;
}
function $i(e, t) {
  return e.minX - t.minX;
}
function er(e, t) {
  return e.minY - t.minY;
}
function st(e) {
  return (e.maxX - e.minX) * (e.maxY - e.minY);
}
function Ke(e) {
  return e.maxX - e.minX + (e.maxY - e.minY);
}
function tr(e, t) {
  return (Math.max(t.maxX, e.maxX) - Math.min(t.minX, e.minX)) * (Math.max(t.maxY, e.maxY) - Math.min(t.minY, e.minY));
}
function nr(e, t) {
  const n = Math.max(e.minX, t.minX), o = Math.max(e.minY, t.minY), i = Math.min(e.maxX, t.maxX), r = Math.min(e.maxY, t.maxY);
  return Math.max(0, i - n) * Math.max(0, r - o);
}
function lt(e, t) {
  return e.minX <= t.minX && e.minY <= t.minY && t.maxX <= e.maxX && t.maxY <= e.maxY;
}
function Ze(e, t) {
  return t.minX <= e.maxX && t.minY <= e.maxY && t.maxX >= e.minX && t.maxY >= e.minY;
}
function ke(e) {
  return {
    children: e,
    height: 1,
    leaf: !0,
    minX: 1 / 0,
    minY: 1 / 0,
    maxX: -1 / 0,
    maxY: -1 / 0
  };
}
function Wt(e, t, n, o, i) {
  const r = [t, n];
  for (; r.length; ) {
    if (n = r.pop(), t = r.pop(), n - t <= o)
      continue;
    const s = t + Math.ceil((n - t) / o / 2) * o;
    Zi(e, s, t, n, i), r.push(t, s, s, n);
  }
}
const or = () => {
  const e = new Qi(), t = /* @__PURE__ */ new Map(), n = () => [...t.values()], o = () => {
    e.clear(), t.clear();
  }, i = (f) => {
    const { minX: h, minY: d, maxX: p, maxY: _ } = f.selector.geometry.bounds, A = { minX: h, minY: d, maxX: p, maxY: _, target: f };
    e.insert(A), t.set(f.annotation, A);
  }, r = (f) => {
    const h = t.get(f.annotation);
    e.remove(h), t.delete(f.annotation);
  };
  return {
    all: n,
    clear: o,
    getAt: (f, h) => {
      const p = e.search({
        minX: f,
        minY: h,
        maxX: f,
        maxY: h
      }).map((_) => _.target).filter((_) => _.selector.type === F.RECTANGLE || Tn(_.selector, f, h));
      if (p.length > 0)
        return p.sort((_, A) => ft(_.selector) - ft(A.selector)), p[0];
    },
    getIntersecting: (f, h, d, p) => e.search({
      minX: f,
      minY: h,
      maxX: f + d,
      maxY: h + p
    }).map((_) => _.target),
    insert: i,
    remove: r,
    set: (f, h = !0) => {
      h && o();
      const d = f.map((p) => {
        const { minX: _, minY: A, maxX: w, maxY: g } = p.selector.geometry.bounds;
        return { minX: _, minY: A, maxX: w, maxY: g, target: p };
      });
      d.forEach((p) => t.set(p.target.annotation, p)), e.load(d);
    },
    size: () => e.all().length,
    update: (f, h) => {
      r(f), i(h);
    }
  };
}, ir = (e) => {
  const t = ao(), n = or(), o = xn(t, e.pointerSelectAction), i = Qn(t), r = ho();
  return t.observe(({ changes: l }) => {
    n.set(l.created.map((u) => u.target), !1), l.deleted.forEach((u) => n.remove(u.target)), l.updated.forEach(({ oldValue: u, newValue: m }) => n.update(u.target, m.target));
  }), {
    store: {
      ...t,
      getAt: (l, u) => {
        const m = n.getAt(l, u);
        return m ? t.getAnnotation(m.annotation) : void 0;
      },
      getIntersecting: (l, u, m, f) => n.getIntersecting(l, u, m, f).map((h) => t.getAnnotation(h.annotation))
    },
    selection: o,
    hover: i,
    viewport: r
  };
}, rr = (e) => {
  const t = ir(e);
  return {
    ...t,
    store: co(t.store)
  };
}, sr = (e) => {
  let t, n;
  if (e.nodeName === "CANVAS")
    t = e, n = t.getContext("2d", { willReadFrequently: !0 });
  else {
    const i = e;
    t = document.createElement("canvas"), t.width = i.width, t.height = i.height, n = t.getContext("2d", { willReadFrequently: !0 }), n.drawImage(i, 0, 0, i.width, i.height);
  }
  let o = 0;
  for (let i = 1; i < 10; i++)
    for (let r = 1; r < 10; r++) {
      const s = Math.round(r * t.width / 10), a = Math.round(i * t.height / 10), l = n.getImageData(s, a, 1, 1).data, u = (0.299 * l[0] + 0.587 * l[1] + 0.114 * l[2]) / 255;
      o += u;
    }
  return o / 81;
}, lr = (e) => {
  const t = sr(e), n = t > 0.6 ? "dark" : "light";
  return console.log(`[Annotorious] Image brightness: ${t.toFixed(1)}. Setting ${n} theme.`), n;
}, Kt = (e, t, n) => t.setAttribute("data-theme", n === "auto" ? lr(e) : n), ar = (e, t) => ({
  ...e,
  drawingEnabled: e.drawingEnabled === void 0 ? t.drawingEnabled : e.drawingEnabled,
  drawingMode: e.drawingMode || t.drawingMode,
  pointerSelectAction: e.pointerSelectAction || t.pointerSelectAction,
  theme: e.theme || t.theme
}), Zt = navigator.userAgent.indexOf("Mac OS X") !== -1, cr = (e, t) => {
  const n = t || document, o = (s) => {
    s.key === "Z" && s.ctrlKey ? e.undo() : s.key === "Y" && s.ctrlKey && e.redo();
  }, i = (s) => {
    s.key === "z" && s.metaKey && (s.shiftKey ? e.redo() : e.undo());
  }, r = () => {
    Zt ? n.removeEventListener("keydown", i) : n.removeEventListener("keydown", o);
  };
  return Zt ? n.addEventListener("keydown", i) : n.addEventListener("keydown", o), {
    destroy: r
  };
};
const mr = (e, t = {}) => {
  if (!e)
    throw "Missing argument: image";
  const n = typeof e == "string" ? document.getElementById(e) : e, o = ar(t, {
    drawingEnabled: !0,
    drawingMode: "drag",
    pointerSelectAction: sn.EDIT,
    theme: "light"
  }), i = rr(o), { selection: r, store: s } = i, a = mo(s), l = go(
    i,
    a,
    o.adapter,
    o.autoSave
  ), u = document.createElement("DIV");
  u.style.position = "relative", u.style.display = "inline-block", n.style.display = "block", n.parentNode.insertBefore(u, n), u.appendChild(n);
  const m = cr(a);
  let f = Ao();
  Kt(n, u, o.theme);
  const h = new Ki({
    target: u,
    props: {
      drawingEnabled: o.drawingEnabled,
      image: n,
      preferredDrawingMode: o.drawingMode,
      state: i,
      style: o.style,
      user: f
    }
  });
  h.$on("click", (b) => {
    const { originalEvent: E, annotation: S } = b.detail;
    S ? r.clickSelect(S.id, E) : r.isEmpty() || r.clear();
  });
  const d = yo(i, a, o.adapter), p = () => {
    h.$destroy(), u.parentNode.insertBefore(n, u), u.parentNode.removeChild(u), m.destroy(), a.destroy();
  }, _ = () => f, A = (b, E, S) => Ei(b, E, S), w = (b, E) => Ko(b, E), g = (b) => {
    if (!fn(b))
      throw `No drawing tool named ${b}`;
    h.$set({ toolName: b });
  }, y = (b) => h.$set({ drawingEnabled: b }), M = (b) => {
    console.warn("Filter not implemented yet");
  }, k = (b) => h.$set({ style: b }), I = (b) => Kt(n, u, b), R = (b) => {
    f = b, h.$set({ user: b });
  };
  return {
    ...d,
    destroy: p,
    getUser: _,
    listDrawingTools: dt,
    on: l.on,
    off: l.off,
    registerDrawingTool: A,
    registerShapeEditor: w,
    setDrawingEnabled: y,
    setDrawingTool: g,
    setFilter: M,
    setStyle: k,
    setTheme: I,
    setUser: R,
    state: i
  };
};
export {
  Ne as Editor,
  $o as EditorMount,
  Uo as EllipseEditor,
  Vo as FreehandEditor,
  T as Handle,
  dr as IdentityTransform,
  Wo as LineEditor,
  Pn as LineUtil,
  Io as PolygonEditor,
  Xo as RectangleEditor,
  vn as RectangleUtil,
  ii as RubberbandRectangle,
  Ki as SVGAnnotationLayer,
  F as ShapeType,
  ti as ToolMount,
  fr as W3CImageFormat,
  Ci as addEventListeners,
  be as boundsFromPoints,
  ft as computeArea,
  mr as createImageAnnotator,
  ir as createImageAnnotatorState,
  Ri as createSVGTransform,
  rr as createSvelteImageAnnotatorState,
  lr as detectTheme,
  ot as distance,
  li as enableResponsive,
  ar as fillDefaults,
  Pt as getEditor,
  fn as getTool,
  cr as initKeyboardCommands,
  Tn as intersects,
  ur as isTouch,
  dt as listDrawingTools,
  In as parseFragmentSelector,
  zn as parseSVGSelector,
  Lo as parseW3CImageAnnotation,
  Ko as registerEditor,
  Re as registerShapeUtil,
  Ei as registerTool,
  sr as sampleBrightness,
  Dn as serializeFragmentSelector,
  jn as serializeSVGSelector,
  ko as serializeW3CImageAnnotation,
  Kt as setTheme
};
//# sourceMappingURL=annotorious.es.js.map
