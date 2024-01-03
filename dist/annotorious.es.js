function j() {
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
function fe(e) {
  e.forEach(Jt);
}
function z(e) {
  return typeof e == "function";
}
function Z(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function mn(e) {
  return Object.keys(e).length === 0;
}
function Qt(e, ...t) {
  if (e == null)
    return j;
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
function ae(e, t) {
  e.appendChild(t);
}
function v(e, t, n) {
  e.insertBefore(t, n || null);
}
function k(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function mt(e, t) {
  for (let n = 0; n < e.length; n += 1)
    e[n] && e[n].d(t);
}
function I(e) {
  return document.createElementNS("http://www.w3.org/2000/svg", e);
}
function $t(e) {
  return document.createTextNode(e);
}
function Q() {
  return $t(" ");
}
function he() {
  return $t("");
}
function W(e, t, n, o) {
  return e.addEventListener(t, n, o), () => e.removeEventListener(t, n, o);
}
function f(e, t, n) {
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
function ne(e, t) {
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
function ft(e) {
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
    e.update(), fe(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(ft);
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
  _e.r || fe(_e.c), _e = _e.p;
}
function F(e, t) {
  e && e.i && (Je.delete(e), e.i(t));
}
function V(e, t, n, o) {
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
function ie(e, t, n, o) {
  const { fragment: i, after_update: r } = e.$$;
  i && i.m(t, n), o || ft(() => {
    const s = e.$$.on_mount.map(Jt).filter(z);
    e.$$.on_destroy ? e.$$.on_destroy.push(...s) : fe(s), e.$$.on_mount = [];
  }), r.forEach(ft);
}
function re(e, t) {
  const n = e.$$;
  n.fragment !== null && (Sn(n.after_update), fe(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Mn(e, t) {
  e.$$.dirty[0] === -1 && (Le.push(e), En(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function x(e, t, n, o, i, r, s, a = [-1]) {
  const l = Be;
  De(e);
  const u = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: r,
    update: j,
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
  if (u.ctx = n ? n(e, t.props || {}, (c, h, ...d) => {
    const p = d.length ? d[0] : h;
    return u.ctx && i(u.ctx[c], u.ctx[c] = p) && (!u.skip_bound && u.bound[c] && u.bound[c](p), m && Mn(e, c)), h;
  }) : [], u.update(), m = !0, fe(u.before_update), u.fragment = o ? o(u.ctx) : !1, t.target) {
    if (t.hydrate) {
      const c = _n(t.target);
      u.fragment && u.fragment.l(c), c.forEach(k);
    } else
      u.fragment && u.fragment.c();
    t.intro && F(e.$$.fragment), ie(e, t.target, t.anchor, t.customElement), tn();
  }
  De(l);
}
class $ {
  $destroy() {
    re(this, 1), this.$destroy = j;
  }
  $on(t, n) {
    if (!z(n))
      return j;
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
var G = /* @__PURE__ */ ((e) => (e.ELLIPSE = "ELLIPSE", e.POLYGON = "POLYGON", e.RECTANGLE = "RECTANGLE", e.FREEHAND = "FREEHAND", e.LINE = "LINE", e))(G || {});
const ht = {}, Re = (e, t) => ht[e] = t, ct = (e) => ht[e.type].area(e), Tn = (e, t, n) => ht[e.type].intersects(e, t, n), be = (e) => {
  let t = 1 / 0, n = 1 / 0, o = -1 / 0, i = -1 / 0;
  return e.forEach(([r, s]) => {
    t = Math.min(t, r), n = Math.min(n, s), o = Math.max(o, r), i = Math.max(i, s);
  }), { minX: t, minY: n, maxX: o, maxY: i };
}, Ln = {
  area: (e) => Math.PI * e.geometry.rx * e.geometry.ry,
  intersects: (e, t, n) => {
    const { cx: o, cy: i, rx: r, ry: s } = e.geometry, a = 0, l = Math.cos(a), u = Math.sin(a), m = t - o, c = n - i, h = l * m + u * c, d = u * m - l * c;
    return h * h / (r * r) + d * d / (s * s) <= 1;
  }
};
Re(G.ELLIPSE, Ln);
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
Re(G.POLYGON, kn);
const vn = {
  area: (e) => e.geometry.w * e.geometry.h,
  intersects: (e, t, n) => t >= e.geometry.x && t <= e.geometry.x + e.geometry.w && n >= e.geometry.y && n <= e.geometry.y + e.geometry.h
};
Re(G.RECTANGLE, vn);
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
Re(G.FREEHAND, On);
const Pn = {
  area: (e) => 0,
  intersects: (e, t, n) => {
    const o = e.geometry.x1, i = e.geometry.x2, r = e.geometry.y1, s = e.geometry.y2;
    var a = Math.sqrt(Math.pow(t - o, 2) + Math.pow(n - r, 2)), l = Math.sqrt(Math.pow(t - i, 2) + Math.pow(n - s, 2)), u = Math.sqrt(Math.pow(i - o, 2) + Math.pow(s - r, 2)), m = a + l;
    return Math.abs(m - u) <= 0.1;
  }
};
Re(G.LINE, Pn);
const In = (e, t = !1) => {
  const n = typeof e == "string" ? e : e.value, o = /^(xywh)=(pixel|percent)?:?(.+?),(.+?),(.+?),(.+)*/g, i = [...n.matchAll(o)][0], [r, s, a, l, u, m, c] = i;
  if (s !== "xywh")
    throw new Error("Unsupported MediaFragment: " + n);
  if (a && a !== "pixel")
    throw new Error(`Unsupported MediaFragment unit: ${a}`);
  const [h, d, p, _] = [l, u, m, c].map(parseFloat);
  return {
    type: G.RECTANGLE,
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
    type: G.FREEHAND,
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
    type: G.POLYGON,
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
    type: G.ELLIPSE,
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
    type: G.LINE,
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
  if (e.type === G.POLYGON) {
    const n = e.geometry, { points: o } = n;
    t = `<svg><polygon points="${o.map((i) => i.join(",")).join(" ")}" /></svg>`;
  } else if (e.type === G.FREEHAND) {
    const n = e.geometry;
    t = `<svg><path d="${Xe(n.points)}"/></svg>`;
  } else if (e.type === G.ELLIPSE) {
    const n = e.geometry;
    t = `<svg><ellipse cx="${n.cx}" cy="${n.cy}" rx="${n.rx}" ry="${n.ry}" /></svg>`;
  } else if (e.type === G.LINE) {
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
const ee = [];
for (let e = 0; e < 256; ++e)
  ee.push((e + 256).toString(16).slice(1));
function Kn(e, t = 0) {
  return ee[e[t + 0]] + ee[e[t + 1]] + ee[e[t + 2]] + ee[e[t + 3]] + "-" + ee[e[t + 4]] + ee[e[t + 5]] + "-" + ee[e[t + 6]] + ee[e[t + 7]] + "-" + ee[e[t + 8]] + ee[e[t + 9]] + "-" + ee[e[t + 10]] + ee[e[t + 11]] + ee[e[t + 12]] + ee[e[t + 13]] + ee[e[t + 14]] + ee[e[t + 15]];
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
  n((c) => i = c);
  const r = () => o(nt), s = () => {
    var c;
    return ((c = i.selected) == null ? void 0 : c.length) === 0;
  }, a = (c) => {
    if (i.selected.length === 0)
      return !1;
    const h = typeof c == "string" ? c : c.id;
    return i.selected.some((d) => d.id === h);
  }, l = (c, h) => {
    const d = e.getAnnotation(c);
    if (d) {
      const p = $n(d, t);
      o(p === "EDIT" ? { selected: [{ id: c, editable: !0 }], pointerEvent: h } : p === "SELECT" ? { selected: [{ id: c }], pointerEvent: h } : { selected: [], pointerEvent: h });
    } else
      console.warn("Invalid selection: " + c);
  }, u = (c, h = !0) => {
    const d = Array.isArray(c) ? c : [c], p = d.map((_) => e.getAnnotation(_)).filter((_) => _);
    o({ selected: p.map(({ id: _ }) => ({ id: _, editable: h })) }), p.length !== d.length && console.warn("Invalid selection", c);
  }, m = (c) => {
    if (i.selected.length === 0)
      return !1;
    const { selected: h } = i;
    h.filter(({ id: d }) => c.includes(d)).length > 0 && o({ selected: h.filter(({ id: d }) => !c.includes(d)) });
  };
  return e.observe(({ changes: c }) => m(c.deleted.map((h) => h.id))), {
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
var K = /* @__PURE__ */ ((e) => (e.LOCAL = "LOCAL", e.REMOTE = "REMOTE", e))(K || {});
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
  const n = new Set((e.created || []).map((c) => c.id)), o = new Set((e.updated || []).map(({ newValue: c }) => c.id)), i = new Set((t.created || []).map((c) => c.id)), r = new Set((t.deleted || []).map((c) => c.id)), s = new Set((t.updated || []).map(({ oldValue: c }) => c.id)), a = new Set((t.updated || []).filter(({ oldValue: c }) => n.has(c.id) || o.has(c.id)).map(({ oldValue: c }) => c.id)), l = [
    ...(e.created || []).filter((c) => !r.has(c.id)).map((c) => s.has(c.id) ? t.updated.find(({ oldValue: h }) => h.id === c.id).newValue : c),
    ...t.created || []
  ], u = [
    ...(e.deleted || []).filter((c) => !i.has(c.id)),
    ...(t.deleted || []).filter((c) => !n.has(c.id))
  ], m = [
    ...(e.updated || []).filter(({ newValue: c }) => !r.has(c.id)).map((c) => {
      const { oldValue: h, newValue: d } = c;
      if (s.has(d.id)) {
        const p = t.updated.find((_) => _.oldValue.id === d.id).newValue;
        return ln(h, p);
      } else
        return c;
    }),
    ...(t.updated || []).filter(({ oldValue: c }) => !a.has(c.id))
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
    n.forEach((O) => {
      ro(O, S) && O.onChange(S);
    });
  }, s = (b, E = K.LOCAL) => {
    if (e.get(b.id))
      throw Error(`Cannot add annotation ${b.id} - exists already`);
    e.set(b.id, b), b.bodies.forEach((S) => t.set(S.id, b.id)), r(E, { created: [b] });
  }, a = (b, E) => {
    const S = typeof b == "string" ? E : b, O = typeof b == "string" ? b : b.id, P = e.get(O);
    if (P) {
      const N = ln(P, S);
      return O === S.id ? e.set(O, S) : (e.delete(O), e.set(S.id, S)), P.bodies.forEach((C) => t.delete(C.id)), S.bodies.forEach((C) => t.set(C.id, S.id)), N;
    } else
      console.warn(`Cannot update annotation ${O} - does not exist`);
  }, l = (b, E = K.LOCAL, S = K.LOCAL) => {
    const O = lo(E) ? S : E, P = a(b, E);
    P && r(O, { updated: [P] });
  }, u = (b, E = K.LOCAL) => {
    const S = b.reduce((O, P) => {
      const N = a(P);
      return N ? [...O, N] : O;
    }, []);
    S.length > 0 && r(E, { updated: S });
  }, m = (b, E = K.LOCAL) => {
    const S = e.get(b.annotation);
    if (S) {
      const O = {
        ...S,
        bodies: [...S.bodies, b]
      };
      e.set(S.id, O), t.set(b.id, O.id), r(E, { updated: [{
        oldValue: S,
        newValue: O,
        bodiesCreated: [b]
      }] });
    } else
      console.warn(`Attempt to add body to missing annotation: ${b.annotation}`);
  }, c = () => [...e.values()], h = (b = K.LOCAL) => {
    const E = [...e.values()];
    e.clear(), t.clear(), r(b, { deleted: E });
  }, d = (b, E = !0, S = K.LOCAL) => {
    if (E) {
      const O = [...e.values()];
      e.clear(), t.clear(), b.forEach((P) => {
        e.set(P.id, P), P.bodies.forEach((N) => t.set(N.id, P.id));
      }), r(S, { created: b, deleted: O });
    } else {
      const O = b.reduce((P, N) => {
        const C = e.get(N.id);
        return C ? [...P, C] : P;
      }, []);
      if (O.length > 0)
        throw Error(`Bulk insert would overwrite the following annotations: ${O.map((P) => P.id).join(", ")}`);
      b.forEach((P) => {
        e.set(P.id, P), P.bodies.forEach((N) => t.set(N.id, P.id));
      }), r(S, { created: b });
    }
  }, p = (b) => {
    const E = typeof b == "string" ? b : b.id, S = e.get(E);
    if (S)
      return e.delete(E), S.bodies.forEach((O) => t.delete(O.id)), S;
    console.warn(`Attempt to delete missing annotation: ${E}`);
  }, _ = (b, E = K.LOCAL) => {
    const S = p(b);
    S && r(E, { deleted: [S] });
  }, A = (b, E = K.LOCAL) => {
    const S = b.reduce((O, P) => {
      const N = p(P);
      return N ? [...O, N] : O;
    }, []);
    S.length > 0 && r(E, { deleted: S });
  }, w = (b, E = K.LOCAL) => {
    const S = e.get(b.annotation);
    if (S) {
      const O = S.bodies.find((P) => P.id === b.id);
      if (O) {
        t.delete(O.id);
        const P = {
          ...S,
          bodies: S.bodies.filter((N) => N.id !== b.id)
        };
        e.set(S.id, P), r(E, { updated: [{
          oldValue: S,
          newValue: P,
          bodiesDeleted: [O]
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
      const S = g(E).bodies.find((O) => O.id === b);
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
      const O = S.bodies.find((N) => N.id === b.id), P = {
        ...S,
        bodies: S.bodies.map((N) => N.id === O.id ? E : N)
      };
      return e.set(S.id, P), O.id !== E.id && (t.delete(O.id), t.set(E.id, P.id)), {
        oldValue: S,
        newValue: P,
        bodiesUpdated: [{ oldBody: O, newBody: E }]
      };
    } else
      console.warn(`Attempt to add body to missing annotation ${b.annotation}`);
  }, T = (b, E, S = K.LOCAL) => {
    const O = M(b, E);
    r(S, { updated: [O] });
  }, D = (b, E = K.LOCAL) => {
    const S = b.map((O) => M({ id: O.id, annotation: O.annotation }, O));
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
    all: c,
    bulkAddAnnotation: d,
    bulkDeleteAnnotation: A,
    bulkUpdateAnnotation: u,
    bulkUpdateBodies: D,
    bulkUpdateTargets: (b, E = K.LOCAL) => {
      const S = b.map(R).filter((O) => O);
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
    updateBody: T,
    updateTarget: (b, E = K.LOCAL) => {
      const S = R(b);
      S && r(E, { updated: [S] });
    }
  };
}, fo = (e) => ({
  ...e,
  subscribe: (t) => {
    const n = (o) => t(o.state);
    return e.observe(n), t(e.all()), () => e.unobserve(n);
  }
});
let co = () => ({
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
  const t = co(), n = [];
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
  e.observe(s, { origin: K.LOCAL });
  const a = (d) => (d == null ? void 0 : d.length) > 0 && e.bulkDeleteAnnotation(d), l = (d) => (d == null ? void 0 : d.length) > 0 && e.bulkAddAnnotation(d, !1), u = (d) => (d == null ? void 0 : d.length) > 0 && e.bulkUpdateAnnotation(d.map(({ oldValue: p }) => p)), m = (d) => (d == null ? void 0 : d.length) > 0 && e.bulkUpdateAnnotation(d.map(({ newValue: p }) => p)), c = (d) => (d == null ? void 0 : d.length) > 0 && e.bulkAddAnnotation(d, !1), h = (d) => (d == null ? void 0 : d.length) > 0 && e.bulkDeleteAnnotation(d);
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
        a(d), u(p), c(_), t.emit("undo", n[o]), o -= 1;
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
  let u = [], m, c;
  const h = (w, g) => {
    l.has(w) ? l.get(w).push(g) : l.set(w, [g]);
  }, d = (w, g) => {
    const y = l.get(w);
    y && y.indexOf(g) > 0 && y.splice(y.indexOf(g), 1);
  }, p = (w, g, y) => {
    l.has(w) && setTimeout(() => {
      l.get(w).forEach((M) => {
        if (n) {
          const T = Array.isArray(g) ? g.map((R) => n.serialize(R)) : n.serialize(g), D = y ? y instanceof PointerEvent ? y : n.serialize(y) : void 0;
          M(T, D);
        } else
          M(g, y);
      });
    }, 1);
  }, _ = () => {
    const { selected: w } = r, g = w.map(({ id: y }) => i.getAnnotation(y));
    g.forEach((y) => {
      const M = u.find((T) => T.id === y.id);
      (!M || !we(M, y)) && p("updateAnnotation", y, M);
    }), u = u.map((y) => g.find(({ id: T }) => T === y.id) || y);
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
          const T = i.getAnnotation(M.id);
          T && !we(T, M) && p("updateAnnotation", T, M);
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
    o && (c && clearTimeout(c), c = setTimeout(_, 1e3));
    const { created: g, deleted: y } = w.changes;
    g.forEach((M) => p("createAnnotation", M)), y.forEach((M) => p("deleteAnnotation", M)), w.changes.updated.filter((M) => [
      ...M.bodiesCreated || [],
      ...M.bodiesDeleted || [],
      ...M.bodiesUpdated || []
    ].length > 0).forEach(({ oldValue: M, newValue: T }) => {
      const D = u.find((R) => R.id === M.id) || M;
      u = u.map((R) => R.id === M.id ? T : R), p("updateAnnotation", T, D);
    });
  }, { origin: K.LOCAL }), i.observe((w) => {
    if (u) {
      const g = new Set(u.map((M) => M.id)), y = w.changes.updated.filter(({ newValue: M }) => g.has(M.id)).map(({ newValue: M }) => M);
      y.length > 0 && (u = u.map((M) => y.find((D) => D.id === M.id) || M));
    }
  }, { origin: K.REMOTE });
  const A = (w) => (g) => {
    const { created: y, deleted: M, updated: T } = g;
    y.forEach((D) => p("createAnnotation", D)), M.forEach((D) => p("deleteAnnotation", D)), w ? T.forEach((D) => p("updateAnnotation", D.oldValue, D.newValue)) : T.forEach((D) => p("updateAnnotation", D.newValue, D.oldValue));
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
      w ? o.addAnnotation(w, K.REMOTE) : console.error(g);
    } else
      o.addAnnotation(A, K.REMOTE);
  }, s = () => i.clear(), a = () => o.clear(), l = (A) => {
    const w = o.getAnnotation(A);
    return n && w ? n.serialize(w) : w;
  }, u = () => n ? o.all().map(n.serialize) : o.all(), m = () => {
    var A;
    const w = (((A = i.selected) == null ? void 0 : A.map((g) => g.id)) || []).map((g) => o.getAnnotation(g));
    return n ? w.map(n.serialize) : w;
  }, c = (A) => fetch(A).then((w) => w.json()).then((w) => (d(w), w)), h = (A) => {
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
      g.length > 0 && console.warn(`Discarded ${g.length} invalid annotations`, g), o.bulkAddAnnotation(w, !0, K.REMOTE);
    } else
      o.bulkAddAnnotation(A, !0, K.REMOTE);
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
    loadAnnotations: c,
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
const cr = (e, t = !1) => ({ parse: (i) => Lo(i, t), serialize: (i) => ko(i, e) }), Lo = (e, t = !1) => {
  const n = e.id || rn(), {
    creator: o,
    created: i,
    updatedBy: r,
    updated: s,
    body: a,
    ...l
  } = e, u = Mo(a, n), m = Array.isArray(e.target) ? e.target[0] : e.target, c = Array.isArray(m.selector) ? m.selector[0] : m.selector, h = c.type === "FragmentSelector" ? In(c, t) : c.type === "SvgSelector" ? zn(c) : void 0;
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
    error: Error(`Unknown selector type: ${c.type}`)
  };
}, ko = (e, t) => {
  const {
    selector: n,
    creator: o,
    created: i,
    updated: r,
    updatedBy: s,
    ...a
  } = e.target, l = n.type == G.RECTANGLE ? Dn(n.geometry) : jn(n);
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
      t = I("rect"), f(t, "class", "a9s-corner-handle"), f(t, "x", n = /*point*/
      e[11][0] - /*handleSize*/
      e[3] / 2), f(t, "y", o = /*point*/
      e[11][1] - /*handleSize*/
      e[3] / 2), f(
        t,
        "height",
        /*handleSize*/
        e[3]
      ), f(
        t,
        "width",
        /*handleSize*/
        e[3]
      );
    },
    m(s, a) {
      v(s, t, a), i || (r = W(t, "pointerdown", function() {
        z(
          /*grab*/
          e[10](L(
            /*idx*/
            e[13]
          ))
        ) && e[10](L(
          /*idx*/
          e[13]
        )).apply(this, arguments);
      }), i = !0);
    },
    p(s, a) {
      e = s, a & /*geom, handleSize*/
      24 && n !== (n = /*point*/
      e[11][0] - /*handleSize*/
      e[3] / 2) && f(t, "x", n), a & /*geom, handleSize*/
      24 && o !== (o = /*point*/
      e[11][1] - /*handleSize*/
      e[3] / 2) && f(t, "y", o), a & /*handleSize*/
      8 && f(
        t,
        "height",
        /*handleSize*/
        e[3]
      ), a & /*handleSize*/
      8 && f(
        t,
        "width",
        /*handleSize*/
        e[3]
      );
    },
    d(s) {
      s && k(t), i = !1, r();
    }
  };
}
function vo(e) {
  let t, n, o, i, r, s, a, l, u, m, c = (
    /*geom*/
    e[4].points
  ), h = [];
  for (let d = 0; d < c.length; d += 1)
    h[d] = kt(Lt(e, c, d));
  return {
    c() {
      t = I("polygon"), i = Q(), r = I("polygon"), a = Q();
      for (let d = 0; d < h.length; d += 1)
        h[d].c();
      l = he(), f(t, "class", "a9s-outer"), f(t, "style", n = /*computedStyle*/
      e[1] ? "display:none;" : void 0), f(t, "points", o = /*geom*/
      e[4].points.map(vt).join(" ")), f(r, "class", "a9s-inner a9s-shape-handle"), f(
        r,
        "style",
        /*computedStyle*/
        e[1]
      ), f(r, "points", s = /*geom*/
      e[4].points.map(Ot).join(" "));
    },
    m(d, p) {
      v(d, t, p), v(d, i, p), v(d, r, p), v(d, a, p);
      for (let _ = 0; _ < h.length; _ += 1)
        h[_] && h[_].m(d, p);
      v(d, l, p), u || (m = [
        W(t, "pointerdown", function() {
          z(
            /*grab*/
            e[10](L.SHAPE)
          ) && e[10](L.SHAPE).apply(this, arguments);
        }),
        W(r, "pointerdown", function() {
          z(
            /*grab*/
            e[10](L.SHAPE)
          ) && e[10](L.SHAPE).apply(this, arguments);
        })
      ], u = !0);
    },
    p(d, p) {
      if (e = d, p & /*computedStyle*/
      2 && n !== (n = /*computedStyle*/
      e[1] ? "display:none;" : void 0) && f(t, "style", n), p & /*geom*/
      16 && o !== (o = /*geom*/
      e[4].points.map(vt).join(" ")) && f(t, "points", o), p & /*computedStyle*/
      2 && f(
        r,
        "style",
        /*computedStyle*/
        e[1]
      ), p & /*geom*/
      16 && s !== (s = /*geom*/
      e[4].points.map(Ot).join(" ")) && f(r, "points", s), p & /*geom, handleSize, grab, Handle*/
      1048) {
        c = /*geom*/
        e[4].points;
        let _;
        for (_ = 0; _ < c.length; _ += 1) {
          const A = Lt(e, c, _);
          h[_] ? h[_].p(A, p) : (h[_] = kt(A), h[_].c(), h[_].m(l.parentNode, l));
        }
        for (; _ < h.length; _ += 1)
          h[_].d(1);
        h.length = c.length;
      }
    },
    d(d) {
      d && k(t), d && k(i), d && k(r), d && k(a), mt(h, d), d && k(l), u = !1, fe(m);
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
      ie(t, o, i), n = !0;
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
      n || (F(t.$$.fragment, o), n = !0);
    },
    o(o) {
      V(t.$$.fragment, o), n = !1;
    },
    d(o) {
      re(t, o);
    }
  };
}
const vt = (e) => e.join(","), Ot = (e) => e.join(",");
function Po(e, t, n) {
  let o, i, { shape: r } = t, { computedStyle: s = void 0 } = t, { transform: a } = t, { viewportScale: l = 1 } = t;
  const u = (d, p, _) => {
    let A;
    p === L.SHAPE ? A = d.geometry.points.map(([g, y]) => [g + _[0], y + _[1]]) : A = d.geometry.points.map(([g, y], M) => p === L(M) ? [g + _[0], y + _[1]] : [g, y]);
    const w = be(A);
    return { ...d, geometry: { points: A, bounds: w } };
  };
  function m(d) {
    ne.call(this, e, d);
  }
  function c(d) {
    ne.call(this, e, d);
  }
  function h(d) {
    ne.call(this, e, d);
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
    c,
    h
  ];
}
class Io extends $ {
  constructor(t) {
    super(), x(this, t, Po, Oo, Z, {
      shape: 0,
      computedStyle: 1,
      transform: 2,
      viewportScale: 6
    });
  }
}
function Do(e) {
  let t, n, o, i, r, s, a, l, u, m, c, h, d, p, _, A, w, g, y, M, T, D, R, b, E, S, O, P, N, C, Y, q, H, X, te, J, pe, ue, oe, Ce, Ue, He, Qe, se, Fe, Ge, Ve, xe, le, ze, je, qe, $e, _t;
  return {
    c() {
      t = I("rect"), a = Q(), l = I("rect"), d = Q(), p = I("rect"), g = Q(), y = I("rect"), R = Q(), b = I("rect"), P = Q(), N = I("rect"), H = Q(), X = I("circle"), ue = Q(), oe = I("circle"), Qe = Q(), se = I("circle"), xe = Q(), le = I("circle"), f(t, "class", "a9s-outer"), f(t, "style", n = /*computedStyle*/
      e[1] ? "display:none;" : void 0), f(t, "x", o = /*geom*/
      e[4].x), f(t, "y", i = /*geom*/
      e[4].y), f(t, "width", r = /*geom*/
      e[4].w), f(t, "height", s = /*geom*/
      e[4].h), f(l, "class", "a9s-inner a9s-shape-handle"), f(
        l,
        "style",
        /*computedStyle*/
        e[1]
      ), f(l, "x", u = /*geom*/
      e[4].x), f(l, "y", m = /*geom*/
      e[4].y), f(l, "width", c = /*geom*/
      e[4].w), f(l, "height", h = /*geom*/
      e[4].h), f(p, "class", "a9s-edge-handle a9s-edge-handle-top"), f(p, "x", _ = /*geom*/
      e[4].x), f(p, "y", A = /*geom*/
      e[4].y), f(p, "height", 1), f(p, "width", w = /*geom*/
      e[4].w), f(y, "class", "a9s-edge-handle a9s-edge-handle-right"), f(y, "x", M = /*geom*/
      e[4].x + /*geom*/
      e[4].w), f(y, "y", T = /*geom*/
      e[4].y), f(y, "height", D = /*geom*/
      e[4].h), f(y, "width", 1), f(b, "class", "a9s-edge-handle a9s-edge-handle-bottom"), f(b, "x", E = /*geom*/
      e[4].x), f(b, "y", S = /*geom*/
      e[4].y + /*geom*/
      e[4].h), f(b, "height", 1), f(b, "width", O = /*geom*/
      e[4].w), f(N, "class", "a9s-edge-handle a9s-edge-handle-left"), f(N, "x", C = /*geom*/
      e[4].x), f(N, "y", Y = /*geom*/
      e[4].y), f(N, "height", q = /*geom*/
      e[4].h), f(N, "width", 1), f(X, "class", "a9s-corner-handle a9s-corner-handle-topleft"), f(X, "cx", te = /*geom*/
      e[4].x), f(X, "cy", J = /*geom*/
      e[4].y), f(X, "r", pe = /*handleSize*/
      e[3] / 2), f(oe, "class", "a9s-corner-handle a9s-corner-handle-topright"), f(oe, "cx", Ce = /*geom*/
      e[4].x + /*geom*/
      e[4].w), f(oe, "cy", Ue = /*geom*/
      e[4].y), f(oe, "r", He = /*handleSize*/
      e[3] / 2), f(se, "class", "a9s-corner-handle a9s-corner-handle-bottomright"), f(se, "cx", Fe = /*geom*/
      e[4].x + /*geom*/
      e[4].w), f(se, "cy", Ge = /*geom*/
      e[4].y + /*geom*/
      e[4].h), f(se, "r", Ve = /*handleSize*/
      e[3] / 2), f(le, "class", "a9s-corner-handle a9s-corner-handle-bottomleft"), f(le, "cx", ze = /*geom*/
      e[4].x), f(le, "cy", je = /*geom*/
      e[4].y + /*geom*/
      e[4].h), f(le, "r", qe = /*handleSize*/
      e[3] / 2);
    },
    m(U, B) {
      v(U, t, B), v(U, a, B), v(U, l, B), v(U, d, B), v(U, p, B), v(U, g, B), v(U, y, B), v(U, R, B), v(U, b, B), v(U, P, B), v(U, N, B), v(U, H, B), v(U, X, B), v(U, ue, B), v(U, oe, B), v(U, Qe, B), v(U, se, B), v(U, xe, B), v(U, le, B), $e || (_t = [
        W(t, "pointerdown", function() {
          z(
            /*grab*/
            e[10](L.SHAPE)
          ) && e[10](L.SHAPE).apply(this, arguments);
        }),
        W(l, "pointerdown", function() {
          z(
            /*grab*/
            e[10](L.SHAPE)
          ) && e[10](L.SHAPE).apply(this, arguments);
        }),
        W(p, "pointerdown", function() {
          z(
            /*grab*/
            e[10](L.TOP)
          ) && e[10](L.TOP).apply(this, arguments);
        }),
        W(y, "pointerdown", function() {
          z(
            /*grab*/
            e[10](L.RIGHT)
          ) && e[10](L.RIGHT).apply(this, arguments);
        }),
        W(b, "pointerdown", function() {
          z(
            /*grab*/
            e[10](L.BOTTOM)
          ) && e[10](L.BOTTOM).apply(this, arguments);
        }),
        W(N, "pointerdown", function() {
          z(
            /*grab*/
            e[10](L.LEFT)
          ) && e[10](L.LEFT).apply(this, arguments);
        }),
        W(X, "pointerdown", function() {
          z(
            /*grab*/
            e[10](L.TOP_LEFT)
          ) && e[10](L.TOP_LEFT).apply(this, arguments);
        }),
        W(oe, "pointerdown", function() {
          z(
            /*grab*/
            e[10](L.TOP_RIGHT)
          ) && e[10](L.TOP_RIGHT).apply(this, arguments);
        }),
        W(se, "pointerdown", function() {
          z(
            /*grab*/
            e[10](L.BOTTOM_RIGHT)
          ) && e[10](L.BOTTOM_RIGHT).apply(this, arguments);
        }),
        W(le, "pointerdown", function() {
          z(
            /*grab*/
            e[10](L.BOTTOM_LEFT)
          ) && e[10](L.BOTTOM_LEFT).apply(this, arguments);
        })
      ], $e = !0);
    },
    p(U, B) {
      e = U, B & /*computedStyle*/
      2 && n !== (n = /*computedStyle*/
      e[1] ? "display:none;" : void 0) && f(t, "style", n), B & /*geom*/
      16 && o !== (o = /*geom*/
      e[4].x) && f(t, "x", o), B & /*geom*/
      16 && i !== (i = /*geom*/
      e[4].y) && f(t, "y", i), B & /*geom*/
      16 && r !== (r = /*geom*/
      e[4].w) && f(t, "width", r), B & /*geom*/
      16 && s !== (s = /*geom*/
      e[4].h) && f(t, "height", s), B & /*computedStyle*/
      2 && f(
        l,
        "style",
        /*computedStyle*/
        e[1]
      ), B & /*geom*/
      16 && u !== (u = /*geom*/
      e[4].x) && f(l, "x", u), B & /*geom*/
      16 && m !== (m = /*geom*/
      e[4].y) && f(l, "y", m), B & /*geom*/
      16 && c !== (c = /*geom*/
      e[4].w) && f(l, "width", c), B & /*geom*/
      16 && h !== (h = /*geom*/
      e[4].h) && f(l, "height", h), B & /*geom*/
      16 && _ !== (_ = /*geom*/
      e[4].x) && f(p, "x", _), B & /*geom*/
      16 && A !== (A = /*geom*/
      e[4].y) && f(p, "y", A), B & /*geom*/
      16 && w !== (w = /*geom*/
      e[4].w) && f(p, "width", w), B & /*geom*/
      16 && M !== (M = /*geom*/
      e[4].x + /*geom*/
      e[4].w) && f(y, "x", M), B & /*geom*/
      16 && T !== (T = /*geom*/
      e[4].y) && f(y, "y", T), B & /*geom*/
      16 && D !== (D = /*geom*/
      e[4].h) && f(y, "height", D), B & /*geom*/
      16 && E !== (E = /*geom*/
      e[4].x) && f(b, "x", E), B & /*geom*/
      16 && S !== (S = /*geom*/
      e[4].y + /*geom*/
      e[4].h) && f(b, "y", S), B & /*geom*/
      16 && O !== (O = /*geom*/
      e[4].w) && f(b, "width", O), B & /*geom*/
      16 && C !== (C = /*geom*/
      e[4].x) && f(N, "x", C), B & /*geom*/
      16 && Y !== (Y = /*geom*/
      e[4].y) && f(N, "y", Y), B & /*geom*/
      16 && q !== (q = /*geom*/
      e[4].h) && f(N, "height", q), B & /*geom*/
      16 && te !== (te = /*geom*/
      e[4].x) && f(X, "cx", te), B & /*geom*/
      16 && J !== (J = /*geom*/
      e[4].y) && f(X, "cy", J), B & /*handleSize*/
      8 && pe !== (pe = /*handleSize*/
      e[3] / 2) && f(X, "r", pe), B & /*geom*/
      16 && Ce !== (Ce = /*geom*/
      e[4].x + /*geom*/
      e[4].w) && f(oe, "cx", Ce), B & /*geom*/
      16 && Ue !== (Ue = /*geom*/
      e[4].y) && f(oe, "cy", Ue), B & /*handleSize*/
      8 && He !== (He = /*handleSize*/
      e[3] / 2) && f(oe, "r", He), B & /*geom*/
      16 && Fe !== (Fe = /*geom*/
      e[4].x + /*geom*/
      e[4].w) && f(se, "cx", Fe), B & /*geom*/
      16 && Ge !== (Ge = /*geom*/
      e[4].y + /*geom*/
      e[4].h) && f(se, "cy", Ge), B & /*handleSize*/
      8 && Ve !== (Ve = /*handleSize*/
      e[3] / 2) && f(se, "r", Ve), B & /*geom*/
      16 && ze !== (ze = /*geom*/
      e[4].x) && f(le, "cx", ze), B & /*geom*/
      16 && je !== (je = /*geom*/
      e[4].y + /*geom*/
      e[4].h) && f(le, "cy", je), B & /*handleSize*/
      8 && qe !== (qe = /*handleSize*/
      e[3] / 2) && f(le, "r", qe);
    },
    d(U) {
      U && k(t), U && k(a), U && k(l), U && k(d), U && k(p), U && k(g), U && k(y), U && k(R), U && k(b), U && k(P), U && k(N), U && k(H), U && k(X), U && k(ue), U && k(oe), U && k(Qe), U && k(se), U && k(xe), U && k(le), $e = !1, fe(_t);
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
      ie(t, o, i), n = !0;
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
      n || (F(t.$$.fragment, o), n = !0);
    },
    o(o) {
      V(t.$$.fragment, o), n = !1;
    },
    d(o) {
      re(t, o);
    }
  };
}
function Yo(e, t, n) {
  let o, i, { shape: r } = t, { computedStyle: s = void 0 } = t, { transform: a } = t, { viewportScale: l = 1 } = t;
  const u = (d, p, _) => {
    const A = d.geometry.bounds;
    let [w, g] = [A.minX, A.minY], [y, M] = [A.maxX, A.maxY];
    const [T, D] = _;
    if (p === L.SHAPE)
      w += T, y += T, g += D, M += D;
    else {
      switch (p) {
        case L.TOP:
        case L.TOP_LEFT:
        case L.TOP_RIGHT: {
          g += D;
          break;
        }
        case L.BOTTOM:
        case L.BOTTOM_LEFT:
        case L.BOTTOM_RIGHT: {
          M += D;
          break;
        }
      }
      switch (p) {
        case L.LEFT:
        case L.TOP_LEFT:
        case L.BOTTOM_LEFT: {
          w += T;
          break;
        }
        case L.RIGHT:
        case L.TOP_RIGHT:
        case L.BOTTOM_RIGHT: {
          y += T;
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
    ne.call(this, e, d);
  }
  function c(d) {
    ne.call(this, e, d);
  }
  function h(d) {
    ne.call(this, e, d);
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
    c,
    h
  ];
}
class Xo extends $ {
  constructor(t) {
    super(), x(this, t, Yo, Bo, Z, {
      shape: 0,
      computedStyle: 1,
      transform: 2,
      viewportScale: 6
    });
  }
}
function Ro(e) {
  let t, n, o, i, r, s, a, l, u, m, c, h, d, p, _, A, w, g, y, M, T, D, R, b, E, S, O, P, N;
  return {
    c() {
      t = I("ellipse"), s = Q(), a = I("ellipse"), h = Q(), d = I("rect"), A = Q(), w = I("rect"), M = Q(), T = I("rect"), b = Q(), E = I("rect"), f(t, "class", "a9s-outer"), f(t, "cx", n = /*geom*/
      e[3].cx), f(t, "cy", o = /*geom*/
      e[3].cy), f(t, "rx", i = /*geom*/
      e[3].rx), f(t, "ry", r = /*geom*/
      e[3].ry), f(a, "class", "a9s-inner a9s-shape-handle"), f(a, "cx", l = /*geom*/
      e[3].cx), f(a, "cy", u = /*geom*/
      e[3].cy), f(a, "rx", m = /*geom*/
      e[3].rx), f(a, "ry", c = /*geom*/
      e[3].ry), f(d, "class", "a9s-corner-handle a9s-corner-top"), f(d, "x", p = /*geom*/
      e[3].cx - /*handleSize*/
      e[2] / 2), f(d, "y", _ = /*geom*/
      e[3].cy - /*handleSize*/
      e[2] / 2 - /*geom*/
      e[3].ry), f(
        d,
        "height",
        /*handleSize*/
        e[2]
      ), f(
        d,
        "width",
        /*handleSize*/
        e[2]
      ), f(w, "class", "a9s-corner-handle a9s-corner-handle-right"), f(w, "x", g = /*geom*/
      e[3].cx + /*geom*/
      e[3].rx - /*handleSize*/
      e[2] / 2), f(w, "y", y = /*geom*/
      e[3].cy - /*handleSize*/
      e[2] / 2), f(
        w,
        "height",
        /*handleSize*/
        e[2]
      ), f(
        w,
        "width",
        /*handleSize*/
        e[2]
      ), f(T, "class", "a9s-corner-handle a9s-corner-handle-bottom"), f(T, "x", D = /*geom*/
      e[3].cx - /*handleSize*/
      e[2] / 2), f(T, "y", R = /*geom*/
      e[3].cy + /*geom*/
      e[3].ry - /*handleSize*/
      e[2] / 2), f(
        T,
        "height",
        /*handleSize*/
        e[2]
      ), f(
        T,
        "width",
        /*handleSize*/
        e[2]
      ), f(E, "class", "a9s-corner-handle a9s-corner-handle-left"), f(E, "x", S = /*geom*/
      e[3].cx - /*geom*/
      e[3].rx - /*handleSize*/
      e[2] / 2), f(E, "y", O = /*geom*/
      e[3].cy - /*handleSize*/
      e[2] / 2), f(
        E,
        "height",
        /*handleSize*/
        e[2]
      ), f(
        E,
        "width",
        /*handleSize*/
        e[2]
      );
    },
    m(C, Y) {
      v(C, t, Y), v(C, s, Y), v(C, a, Y), v(C, h, Y), v(C, d, Y), v(C, A, Y), v(C, w, Y), v(C, M, Y), v(C, T, Y), v(C, b, Y), v(C, E, Y), P || (N = [
        W(t, "pointerdown", function() {
          z(
            /*grab*/
            e[9](L.SHAPE)
          ) && e[9](L.SHAPE).apply(this, arguments);
        }),
        W(a, "pointerdown", function() {
          z(
            /*grab*/
            e[9](L.SHAPE)
          ) && e[9](L.SHAPE).apply(this, arguments);
        }),
        W(d, "pointerdown", function() {
          z(
            /*grab*/
            e[9](L.TOP)
          ) && e[9](L.TOP).apply(this, arguments);
        }),
        W(w, "pointerdown", function() {
          z(
            /*grab*/
            e[9](L.RIGHT)
          ) && e[9](L.RIGHT).apply(this, arguments);
        }),
        W(T, "pointerdown", function() {
          z(
            /*grab*/
            e[9](L.BOTTOM)
          ) && e[9](L.BOTTOM).apply(this, arguments);
        }),
        W(E, "pointerdown", function() {
          z(
            /*grab*/
            e[9](L.LEFT)
          ) && e[9](L.LEFT).apply(this, arguments);
        })
      ], P = !0);
    },
    p(C, Y) {
      e = C, Y & /*geom*/
      8 && n !== (n = /*geom*/
      e[3].cx) && f(t, "cx", n), Y & /*geom*/
      8 && o !== (o = /*geom*/
      e[3].cy) && f(t, "cy", o), Y & /*geom*/
      8 && i !== (i = /*geom*/
      e[3].rx) && f(t, "rx", i), Y & /*geom*/
      8 && r !== (r = /*geom*/
      e[3].ry) && f(t, "ry", r), Y & /*geom*/
      8 && l !== (l = /*geom*/
      e[3].cx) && f(a, "cx", l), Y & /*geom*/
      8 && u !== (u = /*geom*/
      e[3].cy) && f(a, "cy", u), Y & /*geom*/
      8 && m !== (m = /*geom*/
      e[3].rx) && f(a, "rx", m), Y & /*geom*/
      8 && c !== (c = /*geom*/
      e[3].ry) && f(a, "ry", c), Y & /*geom, handleSize*/
      12 && p !== (p = /*geom*/
      e[3].cx - /*handleSize*/
      e[2] / 2) && f(d, "x", p), Y & /*geom, handleSize*/
      12 && _ !== (_ = /*geom*/
      e[3].cy - /*handleSize*/
      e[2] / 2 - /*geom*/
      e[3].ry) && f(d, "y", _), Y & /*handleSize*/
      4 && f(
        d,
        "height",
        /*handleSize*/
        e[2]
      ), Y & /*handleSize*/
      4 && f(
        d,
        "width",
        /*handleSize*/
        e[2]
      ), Y & /*geom, handleSize*/
      12 && g !== (g = /*geom*/
      e[3].cx + /*geom*/
      e[3].rx - /*handleSize*/
      e[2] / 2) && f(w, "x", g), Y & /*geom, handleSize*/
      12 && y !== (y = /*geom*/
      e[3].cy - /*handleSize*/
      e[2] / 2) && f(w, "y", y), Y & /*handleSize*/
      4 && f(
        w,
        "height",
        /*handleSize*/
        e[2]
      ), Y & /*handleSize*/
      4 && f(
        w,
        "width",
        /*handleSize*/
        e[2]
      ), Y & /*geom, handleSize*/
      12 && D !== (D = /*geom*/
      e[3].cx - /*handleSize*/
      e[2] / 2) && f(T, "x", D), Y & /*geom, handleSize*/
      12 && R !== (R = /*geom*/
      e[3].cy + /*geom*/
      e[3].ry - /*handleSize*/
      e[2] / 2) && f(T, "y", R), Y & /*handleSize*/
      4 && f(
        T,
        "height",
        /*handleSize*/
        e[2]
      ), Y & /*handleSize*/
      4 && f(
        T,
        "width",
        /*handleSize*/
        e[2]
      ), Y & /*geom, handleSize*/
      12 && S !== (S = /*geom*/
      e[3].cx - /*geom*/
      e[3].rx - /*handleSize*/
      e[2] / 2) && f(E, "x", S), Y & /*geom, handleSize*/
      12 && O !== (O = /*geom*/
      e[3].cy - /*handleSize*/
      e[2] / 2) && f(E, "y", O), Y & /*handleSize*/
      4 && f(
        E,
        "height",
        /*handleSize*/
        e[2]
      ), Y & /*handleSize*/
      4 && f(
        E,
        "width",
        /*handleSize*/
        e[2]
      );
    },
    d(C) {
      C && k(t), C && k(s), C && k(a), C && k(h), C && k(d), C && k(A), C && k(w), C && k(M), C && k(T), C && k(b), C && k(E), P = !1, fe(N);
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
      ie(t, o, i), n = !0;
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
      n || (F(t.$$.fragment, o), n = !0);
    },
    o(o) {
      V(t.$$.fragment, o), n = !1;
    },
    d(o) {
      re(t, o);
    }
  };
}
function Co(e, t, n) {
  let o, i, { shape: r } = t, { transform: s } = t, { viewportScale: a = 1 } = t;
  const l = (h, d, p) => {
    const _ = h.geometry.bounds;
    let [A, w] = [_.minX, _.minY], [g, y] = [_.maxX, _.maxY];
    const [M, T] = p;
    if (d === L.SHAPE)
      A += M, g += M, w += T, y += T;
    else
      switch (d) {
        case L.TOP: {
          w += T;
          break;
        }
        case L.BOTTOM: {
          y += T;
          break;
        }
        case L.LEFT: {
          A += M;
          break;
        }
        case L.RIGHT: {
          g += M;
          break;
        }
      }
    const D = Math.min(A, g), R = Math.min(w, y), b = Math.abs(g - A), E = Math.abs(y - w), S = (A + g) / 2, O = (w + y) / 2, P = b / 2, N = E / 2;
    return {
      ...h,
      geometry: {
        ...h.geometry,
        cx: S,
        cy: O,
        rx: P,
        ry: N,
        bounds: {
          minX: D,
          minY: R,
          maxX: D + b,
          maxY: R + E
        }
      }
    };
  };
  function u(h) {
    ne.call(this, e, h);
  }
  function m(h) {
    ne.call(this, e, h);
  }
  function c(h) {
    ne.call(this, e, h);
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
    c
  ];
}
class Uo extends $ {
  constructor(t) {
    super(), x(this, t, Co, No, Z, { shape: 0, transform: 1, viewportScale: 5 });
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
      t = I("path"), f(t, "class", "a9s-shape-handle"), f(
        t,
        "style",
        /*computedStyle*/
        e[3]
      ), f(
        t,
        "d",
        /*pathData*/
        e[2]
      );
    },
    m(i, r) {
      v(i, t, r), n || (o = W(t, "pointerdown", function() {
        z(
          /*grab*/
          e[14](L.SHAPE)
        ) && e[14](L.SHAPE).apply(this, arguments);
      }), n = !0);
    },
    p(i, r) {
      e = i, r & /*computedStyle*/
      8 && f(
        t,
        "style",
        /*computedStyle*/
        e[3]
      ), r & /*pathData*/
      4 && f(
        t,
        "d",
        /*pathData*/
        e[2]
      );
    },
    d(i) {
      i && k(t), n = !1, o();
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
      ie(t, o, i), n = !0;
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
      n || (F(t.$$.fragment, o), n = !0);
    },
    o(o) {
      V(t.$$.fragment, o), n = !1;
    },
    d(o) {
      re(t, o);
    }
  };
}
function Go(e, t, n) {
  let o, i, r, { shape: s } = t, { annotation: a } = t, { transform: l } = t, { viewportScale: u = 1 } = t, { style: m = void 0 } = t, c = { fillOpacity: 1 };
  const h = (A, w, g) => {
    let y;
    w === L.SHAPE && (y = A.geometry.points.map(([T, D, R]) => [T + g[0], D + g[1], R]));
    const M = be(y.map((T) => [T[0], T[1]]));
    return { ...A, geometry: { points: y, bounds: M } };
  };
  function d(A) {
    ne.call(this, e, A);
  }
  function p(A) {
    ne.call(this, e, A);
  }
  function _(A) {
    ne.call(this, e, A);
  }
  return e.$$set = (A) => {
    "shape" in A && n(0, s = A.shape), "annotation" in A && n(5, a = A.annotation), "transform" in A && n(1, l = A.transform), "viewportScale" in A && n(6, u = A.viewportScale), "style" in A && n(7, m = A.style);
  }, e.$$.update = () => {
    e.$$.dirty & /*shape*/
    1 && n(8, o = s.geometry), e.$$.dirty & /*viewportScale*/
    64, e.$$.dirty & /*annotation, style*/
    160 && n(3, i = Ee(a, m, c)), e.$$.dirty & /*geom*/
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
class Vo extends $ {
  constructor(t) {
    super(), x(this, t, Go, Fo, Z, {
      shape: 0,
      annotation: 5,
      transform: 1,
      viewportScale: 6,
      style: 7
    });
  }
}
function zo(e) {
  let t, n, o, i, r, s, a, l, u, m, c, h, d, p, _, A, w, g, y, M, T, D, R, b, E, S, O, P, N, C, Y;
  return {
    c() {
      t = I("defs"), n = I("marker"), o = I("path"), a = Q(), l = I("line"), p = Q(), _ = I("line"), M = Q(), T = I("circle"), E = Q(), S = I("circle"), f(o, "d", "M 0 0 L 10 5 L 0 10 z"), f(n, "class", "arrow"), f(n, "viewBox", i = "0 0 $" + /*handleSize*/
      e[3] / 2 + " $" + /*handleSize*/
      e[3] / 2), f(n, "markerWidth", r = "$" + /*handleSize*/
      e[3] / 2), f(n, "markerHeight", s = "$" + /*handleSize*/
      e[3] / 2), f(n, "orient", "auto-start-reverse"), f(l, "class", "a9s-outer"), f(l, "style", u = /*computedStyle*/
      e[1] ? "display:none;" : void 0), f(l, "x1", m = /*geom*/
      e[4].x1), f(l, "y1", c = /*geom*/
      e[4].y1), f(l, "x2", h = /*geom*/
      e[4].x2), f(l, "y2", d = /*geom*/
      e[4].y2), f(l, "marker-end", "url(.arrow)"), f(_, "class", "a9s-inner a9s-shape-handle"), f(
        _,
        "style",
        /*computedStyle*/
        e[1]
      ), f(_, "x1", A = /*geom*/
      e[4].x1), f(_, "y1", w = /*geom*/
      e[4].y1), f(_, "x2", g = /*geom*/
      e[4].x2), f(_, "y2", y = /*geom*/
      e[4].y2), f(T, "class", "a9s-corner-handle a9s-shape-handle"), f(T, "cx", D = /*geom*/
      e[4].x1), f(T, "cy", R = /*geom*/
      e[4].y1), f(T, "r", b = /*handleSize*/
      e[3] / 2), f(S, "class", "a9s-corner-handle a9s-shape-handle"), f(S, "cx", O = /*geom*/
      e[4].x2), f(S, "cy", P = /*geom*/
      e[4].y2), f(S, "r", N = /*handleSize*/
      e[3] / 2);
    },
    m(q, H) {
      v(q, t, H), ae(t, n), ae(n, o), v(q, a, H), v(q, l, H), v(q, p, H), v(q, _, H), v(q, M, H), v(q, T, H), v(q, E, H), v(q, S, H), C || (Y = [
        W(l, "pointerdown", function() {
          z(
            /*grab*/
            e[10](L.SHAPE)
          ) && e[10](L.SHAPE).apply(this, arguments);
        }),
        W(_, "pointerdown", function() {
          z(
            /*grab*/
            e[10](L.SHAPE)
          ) && e[10](L.SHAPE).apply(this, arguments);
        }),
        W(T, "pointerdown", function() {
          z(
            /*grab*/
            e[10](L.LEFT)
          ) && e[10](L.LEFT).apply(this, arguments);
        }),
        W(S, "pointerdown", function() {
          z(
            /*grab*/
            e[10](L.RIGHT)
          ) && e[10](L.RIGHT).apply(this, arguments);
        })
      ], C = !0);
    },
    p(q, H) {
      e = q, H & /*handleSize*/
      8 && i !== (i = "0 0 $" + /*handleSize*/
      e[3] / 2 + " $" + /*handleSize*/
      e[3] / 2) && f(n, "viewBox", i), H & /*handleSize*/
      8 && r !== (r = "$" + /*handleSize*/
      e[3] / 2) && f(n, "markerWidth", r), H & /*handleSize*/
      8 && s !== (s = "$" + /*handleSize*/
      e[3] / 2) && f(n, "markerHeight", s), H & /*computedStyle*/
      2 && u !== (u = /*computedStyle*/
      e[1] ? "display:none;" : void 0) && f(l, "style", u), H & /*geom*/
      16 && m !== (m = /*geom*/
      e[4].x1) && f(l, "x1", m), H & /*geom*/
      16 && c !== (c = /*geom*/
      e[4].y1) && f(l, "y1", c), H & /*geom*/
      16 && h !== (h = /*geom*/
      e[4].x2) && f(l, "x2", h), H & /*geom*/
      16 && d !== (d = /*geom*/
      e[4].y2) && f(l, "y2", d), H & /*computedStyle*/
      2 && f(
        _,
        "style",
        /*computedStyle*/
        e[1]
      ), H & /*geom*/
      16 && A !== (A = /*geom*/
      e[4].x1) && f(_, "x1", A), H & /*geom*/
      16 && w !== (w = /*geom*/
      e[4].y1) && f(_, "y1", w), H & /*geom*/
      16 && g !== (g = /*geom*/
      e[4].x2) && f(_, "x2", g), H & /*geom*/
      16 && y !== (y = /*geom*/
      e[4].y2) && f(_, "y2", y), H & /*geom*/
      16 && D !== (D = /*geom*/
      e[4].x1) && f(T, "cx", D), H & /*geom*/
      16 && R !== (R = /*geom*/
      e[4].y1) && f(T, "cy", R), H & /*handleSize*/
      8 && b !== (b = /*handleSize*/
      e[3] / 2) && f(T, "r", b), H & /*geom*/
      16 && O !== (O = /*geom*/
      e[4].x2) && f(S, "cx", O), H & /*geom*/
      16 && P !== (P = /*geom*/
      e[4].y2) && f(S, "cy", P), H & /*handleSize*/
      8 && N !== (N = /*handleSize*/
      e[3] / 2) && f(S, "r", N);
    },
    d(q) {
      q && k(t), q && k(a), q && k(l), q && k(p), q && k(_), q && k(M), q && k(T), q && k(E), q && k(S), C = !1, fe(Y);
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
      ie(t, o, i), n = !0;
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
      n || (F(t.$$.fragment, o), n = !0);
    },
    o(o) {
      V(t.$$.fragment, o), n = !1;
    },
    d(o) {
      re(t, o);
    }
  };
}
function qo(e, t, n) {
  let o, i, { shape: r } = t, { computedStyle: s = void 0 } = t, { transform: a } = t, { viewportScale: l = 1 } = t;
  const u = (d, p, _) => {
    d.geometry.bounds;
    let A = d.geometry.x1, w = d.geometry.x2, g = d.geometry.y1, y = d.geometry.y2;
    const [M, T] = _;
    if (p === L.SHAPE)
      A += M, w += M, g += T, y += T;
    else
      switch (p) {
        case L.LEFT: {
          A += M, g += T;
          break;
        }
        case L.RIGHT: {
          w += M, y += T;
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
    ne.call(this, e, d);
  }
  function c(d) {
    ne.call(this, e, d);
  }
  function h(d) {
    ne.call(this, e, d);
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
    c,
    h
  ];
}
class Wo extends $ {
  constructor(t) {
    super(), x(this, t, qo, jo, Z, {
      shape: 0,
      computedStyle: 1,
      transform: 2,
      viewportScale: 6
    });
  }
}
const fn = /* @__PURE__ */ new Map([
  [G.RECTANGLE, Xo],
  [G.POLYGON, Io],
  [G.ELLIPSE, Uo],
  [G.FREEHAND, Vo],
  [G.LINE, Wo]
]), Pt = (e) => fn.get(e.type), Ko = (e, t) => fn.set(e, t), L = (e) => `HANDLE-${e}`;
L.SHAPE = "SHAPE";
L.TOP = "TOP";
L.RIGHT = "RIGHT";
L.BOTTOM = "BOTTOM";
L.LEFT = "LEFT";
L.TOP_LEFT = "TOP_LEFT";
L.TOP_RIGHT = "TOP_RIGHT";
L.BOTTOM_RIGHT = "BOTTOM_RIGHT";
L.BOTTOM_LEFT = "BOTTOM_LEFT";
L.START = "START";
L.END = "END";
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
      t = I("g"), s && s.c(), f(t, "class", "a9s-annotation selected");
    },
    m(a, l) {
      v(a, t, l), s && s.m(t, null), n = !0, o || (i = [
        W(
          t,
          "pointerup",
          /*onRelease*/
          e[2]
        ),
        W(
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
      n || (F(s, a), n = !0);
    },
    o(a) {
      V(s, a), n = !1;
    },
    d(a) {
      a && k(t), s && s.d(a), o = !1, fe(i);
    }
  };
}
function Qo(e, t, n) {
  let { $$slots: o = {}, $$scope: i } = t;
  const r = ge();
  let { shape: s } = t, { editor: a } = t, { transform: l } = t, u = null, m, c = null;
  const h = (_) => (A) => {
    u = _, m = l.elementToImage(A.offsetX, A.offsetY), c = s, A.target.setPointerCapture(A.pointerId), r("grab");
  }, d = (_) => {
    if (u) {
      const [A, w] = l.elementToImage(_.offsetX, _.offsetY), g = [A - m[0], w - m[1]];
      n(3, s = a(c, u, g)), r("change", s);
    }
  }, p = (_) => {
    _.target.releasePointerCapture(_.pointerId), u = null, c = s, r("release");
  };
  return e.$$set = (_) => {
    "shape" in _ && n(3, s = _.shape), "editor" in _ && n(4, a = _.editor), "transform" in _ && n(5, l = _.transform), "$$scope" in _ && n(6, i = _.$$scope);
  }, [h, d, p, s, a, l, i, o];
}
class Ne extends $ {
  constructor(t) {
    super(), x(this, t, Qo, Jo, Z, { shape: 3, editor: 4, transform: 5 });
  }
}
function xo(e, t, n) {
  let o;
  const i = ge();
  let { annotation: r } = t, { editor: s } = t, { style: a = void 0 } = t, { target: l } = t, { transform: u } = t, { viewportScale: m } = t, c;
  return ye(() => (n(6, c = new s({
    target: l,
    props: {
      shape: r.target.selector,
      computedStyle: o,
      transform: u,
      viewportScale: m
    }
  })), c.$on("change", (h) => {
    c.$$set({ shape: h.detail }), i("change", h.detail);
  }), c.$on("grab", (h) => i("grab", h.detail)), c.$on("release", (h) => i("release", h.detail)), () => {
    c.$destroy();
  })), e.$$set = (h) => {
    "annotation" in h && n(0, r = h.annotation), "editor" in h && n(1, s = h.editor), "style" in h && n(2, a = h.style), "target" in h && n(3, l = h.target), "transform" in h && n(4, u = h.transform), "viewportScale" in h && n(5, m = h.viewportScale);
  }, e.$$.update = () => {
    e.$$.dirty & /*annotation, style*/
    5 && (o = Ee(r, a)), e.$$.dirty & /*annotation, editorComponent*/
    65 && r && (c == null || c.$set({ shape: r.target.selector })), e.$$.dirty & /*editorComponent, transform*/
    80 && c && c.$set({ transform: u }), e.$$.dirty & /*editorComponent, viewportScale*/
    96 && c && c.$set({ viewportScale: m });
  }, [r, s, a, l, u, m, c];
}
class $o extends $ {
  constructor(t) {
    super(), x(this, t, xo, null, Z, {
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
    const m = r.closest("svg"), c = [], h = (d, p, _) => {
      m.addEventListener(d, p, _), c.push(() => m.removeEventListener(d, p, _));
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
      c.forEach((d) => d()), u.$destroy();
    };
  }), e.$$set = (m) => {
    "drawingMode" in m && n(0, i = m.drawingMode), "target" in m && n(1, r = m.target), "tool" in m && n(2, s = m.tool), "transform" in m && n(3, a = m.transform), "viewportScale" in m && n(4, l = m.viewportScale);
  }, e.$$.update = () => {
    e.$$.dirty & /*toolComponent, transform*/
    40 && u && u.$set({ transform: a }), e.$$.dirty & /*toolComponent, viewportScale*/
    48 && u && u.$set({ viewportScale: l });
  }, [i, r, s, a, l, u];
}
class ti extends $ {
  constructor(t) {
    super(), x(this, t, ei, null, Z, {
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
      t = I("rect"), n = I("rect"), f(t, "class", "a9s-outer"), f(
        t,
        "x",
        /*x*/
        e[1]
      ), f(
        t,
        "y",
        /*y*/
        e[2]
      ), f(
        t,
        "width",
        /*w*/
        e[3]
      ), f(
        t,
        "height",
        /*h*/
        e[4]
      ), f(n, "class", "a9s-inner"), f(
        n,
        "x",
        /*x*/
        e[1]
      ), f(
        n,
        "y",
        /*y*/
        e[2]
      ), f(
        n,
        "width",
        /*w*/
        e[3]
      ), f(
        n,
        "height",
        /*h*/
        e[4]
      );
    },
    m(o, i) {
      v(o, t, i), v(o, n, i);
    },
    p(o, i) {
      i & /*x*/
      2 && f(
        t,
        "x",
        /*x*/
        o[1]
      ), i & /*y*/
      4 && f(
        t,
        "y",
        /*y*/
        o[2]
      ), i & /*w*/
      8 && f(
        t,
        "width",
        /*w*/
        o[3]
      ), i & /*h*/
      16 && f(
        t,
        "height",
        /*h*/
        o[4]
      ), i & /*x*/
      2 && f(
        n,
        "x",
        /*x*/
        o[1]
      ), i & /*y*/
      4 && f(
        n,
        "y",
        /*y*/
        o[2]
      ), i & /*w*/
      8 && f(
        n,
        "width",
        /*w*/
        o[3]
      ), i & /*h*/
      16 && f(
        n,
        "height",
        /*h*/
        o[4]
      );
    },
    d(o) {
      o && k(t), o && k(n);
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
      t = I("g"), n && n.c(), f(t, "class", "a9s-annotation a9s-rubberband");
    },
    m(o, i) {
      v(o, t, i), n && n.m(t, null);
    },
    p(o, [i]) {
      /*origin*/
      o[0] ? n ? n.p(o, i) : (n = Dt(o), n.c(), n.m(t, null)) : n && (n.d(1), n = null);
    },
    i: j,
    o: j,
    d(o) {
      o && k(t), n && n.d();
    }
  };
}
function oi(e, t, n) {
  const o = ge();
  let { addEventListener: i } = t, { drawingMode: r } = t, { transform: s } = t, a, l, u, m, c, h, d;
  const p = (g) => {
    a = performance.now(), r === "drag" && (n(0, l = s.elementToImage(g.offsetX, g.offsetY)), u = l, n(1, m = l[0]), n(2, c = l[1]), n(3, h = 1), n(4, d = 1));
  }, _ = (g) => {
    l && (u = s.elementToImage(g.offsetX, g.offsetY), n(1, m = Math.min(u[0], l[0])), n(2, c = Math.min(u[1], l[1])), n(3, h = Math.abs(u[0] - l[0])), n(4, d = Math.abs(u[1] - l[1])));
  }, A = (g) => {
    const y = performance.now() - a;
    if (r === "click") {
      if (y > 300)
        return;
      g.stopPropagation(), l ? w() : (n(0, l = s.elementToImage(g.offsetX, g.offsetY)), u = l, n(1, m = l[0]), n(2, c = l[1]), n(3, h = 1), n(4, d = 1));
    } else
      l && (y > 300 || h * d > 100 ? (g.stopPropagation(), w()) : (n(0, l = null), u = null));
  }, w = () => {
    if (h * d > 15) {
      const g = {
        type: G.RECTANGLE,
        geometry: {
          bounds: {
            minX: m,
            minY: c,
            maxX: m + h,
            maxY: c + d
          },
          x: m,
          y: c,
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
  }, [l, m, c, h, d, i, r, s];
}
class ii extends $ {
  constructor(t) {
    super(), x(this, t, oi, ni, Z, {
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
function ri(e, t = j) {
  let n;
  const o = /* @__PURE__ */ new Set();
  function i(a) {
    if (Z(e, a) && (e = a, n)) {
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
  function s(a, l = j) {
    const u = [a, l];
    return o.add(u), o.size === 1 && (n = t(i) || j), a(e), () => {
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
      t = I("polygon"), o = I("polygon"), s && s.c(), r = he(), f(t, "class", "a9s-outer"), f(t, "points", n = /*coords*/
      e[15]), f(o, "class", "a9s-inner"), f(o, "points", i = /*coords*/
      e[15]);
    },
    m(a, l) {
      v(a, t, l), v(a, o, l), s && s.m(a, l), v(a, r, l);
    },
    p(a, l) {
      l & /*isClosable, points, cursor*/
      7 && n !== (n = /*coords*/
      a[15]) && f(t, "points", n), l & /*isClosable, points, cursor*/
      7 && i !== (i = /*coords*/
      a[15]) && f(o, "points", i), /*isClosable*/
      a[2] ? s ? s.p(a, l) : (s = Yt(a), s.c(), s.m(r.parentNode, r)) : s && (s.d(1), s = null);
    },
    d(a) {
      a && k(t), a && k(o), s && s.d(a), a && k(r);
    }
  };
}
function Yt(e) {
  let t, n, o;
  return {
    c() {
      t = I("rect"), f(t, "class", "a9s-corner-handle"), f(t, "x", n = /*points*/
      e[0][0][0] - /*handleSize*/
      e[3] / 2), f(t, "y", o = /*points*/
      e[0][0][1] - /*handleSize*/
      e[3] / 2), f(
        t,
        "height",
        /*handleSize*/
        e[3]
      ), f(
        t,
        "width",
        /*handleSize*/
        e[3]
      );
    },
    m(i, r) {
      v(i, t, r);
    },
    p(i, r) {
      r & /*points, handleSize*/
      9 && n !== (n = /*points*/
      i[0][0][0] - /*handleSize*/
      i[3] / 2) && f(t, "x", n), r & /*points, handleSize*/
      9 && o !== (o = /*points*/
      i[0][0][1] - /*handleSize*/
      i[3] / 2) && f(t, "y", o), r & /*handleSize*/
      8 && f(
        t,
        "height",
        /*handleSize*/
        i[3]
      ), r & /*handleSize*/
      8 && f(
        t,
        "width",
        /*handleSize*/
        i[3]
      );
    },
    d(i) {
      i && k(t);
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
      t = I("g"), n && n.c(), f(t, "class", "a9s-annotation a9s-rubberband");
    },
    m(o, i) {
      v(o, t, i), n && n.m(t, null);
    },
    p(o, [i]) {
      /*cursor*/
      o[1] ? n ? n.p(it(o), i) : (n = Bt(it(o)), n.c(), n.m(t, null)) : n && (n.d(1), n = null);
    },
    i: j,
    o: j,
    d(o) {
      o && k(t), n && n.d();
    }
  };
}
const fi = 20;
function ci(e, t, n) {
  let o;
  const i = ge();
  let { addEventListener: r } = t, { drawingMode: s } = t, { transform: a } = t, { viewportScale: l = 1 } = t, u, m = [], c = null, h = !1;
  const d = (g) => {
    const { timeStamp: y, offsetX: M, offsetY: T } = g;
    if (u = { timeStamp: y, offsetX: M, offsetY: T }, s === "drag" && m.length === 0) {
      const D = a.elementToImage(g.offsetX, g.offsetY);
      m.push(D), n(1, c = D);
    }
  }, p = (g) => {
    if (m.length > 0 && (n(1, c = a.elementToImage(g.offsetX, g.offsetY)), m.length > 2)) {
      const y = ot(c, m[0]) * l;
      n(2, h = y < fi);
    }
  }, _ = (g) => {
    if (s === "click") {
      const y = g.timeStamp - u.timeStamp, M = ot([u.offsetX, u.offsetY], [g.offsetX, g.offsetY]);
      if (y > 300 || M > 15)
        return;
      if (h)
        w();
      else if (m.length === 0) {
        const T = a.elementToImage(g.offsetX, g.offsetY);
        m.push(T), n(1, c = T);
      } else
        m.push(c);
    } else {
      if (m.length === 1 && ot(m[0], c) <= 4) {
        n(0, m = []), n(1, c = null);
        return;
      }
      g.stopImmediatePropagation(), h ? w() : m.push(c);
    }
  }, A = () => {
    const g = [...m, c], y = {
      type: G.POLYGON,
      geometry: { bounds: be(g), points: g }
    };
    ct(y) > 4 && (n(0, m = []), n(1, c = null), i("create", y));
  }, w = () => {
    const g = {
      type: G.POLYGON,
      geometry: {
        bounds: be(m),
        points: [...m]
      }
    };
    n(0, m = []), n(1, c = null), i("create", g);
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
    c,
    h,
    o,
    r,
    s,
    a,
    l
  ];
}
class ui extends $ {
  constructor(t) {
    super(), x(this, t, ci, ai, Z, {
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
      t = I("ellipse"), s = I("ellipse"), f(t, "class", "a9s-outer"), f(t, "cx", n = /*x*/
      e[2] + /*w*/
      e[4] / 2), f(t, "cy", o = /*y*/
      e[3] + /*h*/
      e[5] / 2), f(t, "rx", i = /*w*/
      e[4] / 2), f(t, "ry", r = /*h*/
      e[5] / 2), f(s, "class", "a9s-inner"), f(s, "cx", a = /*x*/
      e[2] + /*w*/
      e[4] / 2), f(s, "cy", l = /*y*/
      e[3] + /*h*/
      e[5] / 2), f(s, "rx", u = /*w*/
      e[4] / 2), f(s, "ry", m = /*h*/
      e[5] / 2);
    },
    m(c, h) {
      v(c, t, h), v(c, s, h);
    },
    p(c, h) {
      h & /*x, w*/
      20 && n !== (n = /*x*/
      c[2] + /*w*/
      c[4] / 2) && f(t, "cx", n), h & /*y, h*/
      40 && o !== (o = /*y*/
      c[3] + /*h*/
      c[5] / 2) && f(t, "cy", o), h & /*w*/
      16 && i !== (i = /*w*/
      c[4] / 2) && f(t, "rx", i), h & /*h*/
      32 && r !== (r = /*h*/
      c[5] / 2) && f(t, "ry", r), h & /*x, w*/
      20 && a !== (a = /*x*/
      c[2] + /*w*/
      c[4] / 2) && f(s, "cx", a), h & /*y, h*/
      40 && l !== (l = /*y*/
      c[3] + /*h*/
      c[5] / 2) && f(s, "cy", l), h & /*w*/
      16 && u !== (u = /*w*/
      c[4] / 2) && f(s, "rx", u), h & /*h*/
      32 && m !== (m = /*h*/
      c[5] / 2) && f(s, "ry", m);
    },
    d(c) {
      c && k(t), c && k(s);
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
      t = I("g"), n && n.c(), f(t, "class", "a9s-annotation a9s-rubberband");
    },
    m(o, i) {
      v(o, t, i), n && n.m(t, null), e[9](t);
    },
    p(o, [i]) {
      /*origin*/
      o[1] ? n ? n.p(o, i) : (n = Xt(o), n.c(), n.m(t, null)) : n && (n.d(1), n = null);
    },
    i: j,
    o: j,
    d(o) {
      o && k(t), n && n.d(), e[9](null);
    }
  };
}
function mi(e, t, n) {
  const o = ge();
  let { addEventListener: i } = t, { drawingMode: r } = t, { transform: s } = t, a, l, u, m, c, h, d, p = !1, _ = !1, A, w;
  const g = (E) => {
    A = performance.now(), r === "drag" && (n(1, l = s.elementToImage(E.offsetX, E.offsetY)), u = l, n(2, m = l[0]), n(3, c = l[1]), n(4, h = 1), n(5, d = 1));
  }, y = (E) => {
    const S = E || w;
    if (l)
      if (u = s.elementToImage(S.offsetX, S.offsetY), _) {
        const O = 2 * Math.abs(u[0] - l[0]), P = 2 * Math.abs(u[1] - l[1]);
        n(4, h = p ? Math.max(O, P) : O), n(5, d = p ? h : P), n(2, m = Math.min(u[0], l[0] - h / 2)), n(3, c = Math.min(u[1], l[1] - d / 2));
      } else {
        const O = Math.abs(u[0] - l[0]), P = Math.abs(u[1] - l[1]);
        n(4, h = p ? Math.max(O, P) : O), n(5, d = p ? h : P), n(2, m = Math.min(u[0], l[0])), n(3, c = Math.min(u[1], l[1]));
      }
    E && (w = E);
  }, M = (E) => {
    r === "click" && E.stopImmediatePropagation();
    const S = performance.now() - A;
    if (r === "click") {
      if (S > 300)
        return;
      E.stopPropagation(), l ? T() : (n(1, l = s.elementToImage(E.offsetX, E.offsetY)), u = l, n(2, m = l[0]), n(3, c = l[1]), n(4, h = 1), n(5, d = 1));
    } else
      l && (S > 300 || h * d > 100 ? (E.stopPropagation(), T()) : (n(1, l = null), u = null, w = void 0));
  }, T = () => {
    if (h * d > 15) {
      const E = {
        type: G.ELLIPSE,
        geometry: {
          bounds: {
            minX: m,
            minY: c,
            maxX: m + h,
            maxY: c + d
          },
          cx: m + h / 2,
          cy: c + d / 2,
          rx: h / 2,
          ry: d / 2
        }
      };
      o("create", E);
    }
    n(1, l = null), u = null, w = void 0;
  }, D = (E) => {
    E.key === "Shift" && (p = !0, y()), E.key === "Control" && (_ = !0, y());
  }, R = (E) => {
    E.key === "Shift" && (p = !1, y()), E.key === "Control" && (_ = !1, y());
  };
  ye(() => (document.addEventListener("keyup", R), document.addEventListener("keydown", D), i("pointerdown", g), i("pointermove", y), i("pointerup", M), () => {
    document.removeEventListener("keyup", R), document.removeEventListener("keydown", D);
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
    c,
    h,
    d,
    i,
    r,
    s,
    b
  ];
}
class hi extends $ {
  constructor(t) {
    super(), x(this, t, mi, di, Z, {
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
      t = I("path"), f(
        t,
        "style",
        /*computedStyle*/
        e[2]
      ), f(
        t,
        "d",
        /*pathData*/
        e[0]
      );
    },
    m(n, o) {
      v(n, t, o);
    },
    p(n, o) {
      o & /*computedStyle*/
      4 && f(
        t,
        "style",
        /*computedStyle*/
        n[2]
      ), o & /*pathData*/
      1 && f(
        t,
        "d",
        /*pathData*/
        n[0]
      );
    },
    d(n) {
      n && k(t);
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
      t = I("g"), n && n.c(), f(t, "class", "a9s-annotation a9s-rubberband");
    },
    m(o, i) {
      v(o, t, i), n && n.m(t, null);
    },
    p(o, [i]) {
      /*isDrawing*/
      o[1] ? n ? n.p(o, i) : (n = Rt(o), n.c(), n.m(t, null)) : n && (n.d(1), n = null);
    },
    i: j,
    o: j,
    d(o) {
      o && k(t), n && n.d();
    }
  };
}
function pi(e, t, n) {
  let o;
  const i = ge();
  let { addEventListener: r } = t, { drawingMode: s } = t, { annotation: a } = t, { transform: l } = t, { viewportScale: u = 1 } = t, { style: m = void 0 } = t, c = { fillOpacity: 1 }, h = [], d = "", p = !1;
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
      type: G.FREEHAND,
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
    288 && n(2, o = Ee(a, m, c));
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
class yi extends $ {
  constructor(t) {
    super(), x(this, t, pi, gi, Z, {
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
      t = I("line"), n = I("line"), f(t, "class", "a9s-outer"), f(
        t,
        "x1",
        /*x1*/
        e[1]
      ), f(
        t,
        "y1",
        /*y1*/
        e[2]
      ), f(
        t,
        "x2",
        /*x2*/
        e[3]
      ), f(
        t,
        "y2",
        /*y2*/
        e[4]
      ), f(n, "class", "a9s-inner"), f(
        n,
        "x1",
        /*x1*/
        e[1]
      ), f(
        n,
        "y1",
        /*y1*/
        e[2]
      ), f(
        n,
        "x2",
        /*x2*/
        e[3]
      ), f(
        n,
        "y2",
        /*y2*/
        e[4]
      );
    },
    m(o, i) {
      v(o, t, i), v(o, n, i);
    },
    p(o, i) {
      i & /*x1*/
      2 && f(
        t,
        "x1",
        /*x1*/
        o[1]
      ), i & /*y1*/
      4 && f(
        t,
        "y1",
        /*y1*/
        o[2]
      ), i & /*x2*/
      8 && f(
        t,
        "x2",
        /*x2*/
        o[3]
      ), i & /*y2*/
      16 && f(
        t,
        "y2",
        /*y2*/
        o[4]
      ), i & /*x1*/
      2 && f(
        n,
        "x1",
        /*x1*/
        o[1]
      ), i & /*y1*/
      4 && f(
        n,
        "y1",
        /*y1*/
        o[2]
      ), i & /*x2*/
      8 && f(
        n,
        "x2",
        /*x2*/
        o[3]
      ), i & /*y2*/
      16 && f(
        n,
        "y2",
        /*y2*/
        o[4]
      );
    },
    d(o) {
      o && k(t), o && k(n);
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
      t = I("g"), n && n.c(), f(t, "class", "a9s-annotation a9s-rubberband");
    },
    m(o, i) {
      v(o, t, i), n && n.m(t, null);
    },
    p(o, [i]) {
      /*origin*/
      o[0] ? n ? n.p(o, i) : (n = Nt(o), n.c(), n.m(t, null)) : n && (n.d(1), n = null);
    },
    i: j,
    o: j,
    d(o) {
      o && k(t), n && n.d();
    }
  };
}
function wi(e, t, n) {
  const o = ge();
  let { addEventListener: i } = t, { drawingMode: r } = t, { transform: s } = t, a, l, u, m, c, h, d;
  const p = (g) => {
    a = performance.now(), r === "drag" && (n(0, l = s.elementToImage(g.offsetX, g.offsetY)), u = l, n(1, m = l[0]), n(2, c = l[1]), n(3, h = l[0] + 1), n(4, d = l[1] + 1));
  }, _ = (g) => {
    l && (u = s.elementToImage(g.offsetX, g.offsetY), n(3, h = u[0]), n(4, d = u[1]));
  }, A = (g) => {
    const y = performance.now() - a;
    if (r === "click") {
      if (y > 300)
        return;
      g.stopPropagation(), l ? w() : (n(0, l = s.elementToImage(g.offsetX, g.offsetY)), u = l, n(1, m = l[0]), n(2, c = l[1]), n(3, h = l[0] + 1), n(4, d = l[1] + 1));
    } else
      l && (y > 300 || Math.sqrt(Math.pow(h - m, 2) + Math.pow(d - c, 2)) > 8 ? (g.stopPropagation(), w()) : (n(0, l = null), u = null));
  }, w = () => {
    if (Math.sqrt(Math.pow(h - m, 2) + Math.pow(d - c, 2)) > 8) {
      const g = {
        type: G.LINE,
        geometry: {
          bounds: {
            minX: Math.min(m, h),
            minY: Math.min(c, d),
            maxX: Math.max(m, h),
            maxY: Math.max(c, d)
          },
          x1: m,
          y1: c,
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
  }, [l, m, c, h, d, i, r, s];
}
class bi extends $ {
  constructor(t) {
    super(), x(this, t, wi, _i, Z, {
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
]), dt = () => [...yt.keys()], cn = (e) => yt.get(e), Ei = (e, t, n) => yt.set(e, { tool: t, opts: n });
function Ai(e) {
  let t, n, o, i, r;
  return {
    c() {
      t = I("g"), n = I("ellipse"), i = I("ellipse"), f(n, "class", "a9s-outer"), f(n, "style", o = /*computedStyle*/
      e[1] ? "display:none;" : void 0), f(
        n,
        "cx",
        /*cx*/
        e[2]
      ), f(
        n,
        "cy",
        /*cy*/
        e[3]
      ), f(
        n,
        "rx",
        /*rx*/
        e[4]
      ), f(
        n,
        "ry",
        /*ry*/
        e[5]
      ), f(i, "class", "a9s-inner"), f(
        i,
        "style",
        /*computedStyle*/
        e[1]
      ), f(
        i,
        "cx",
        /*cx*/
        e[2]
      ), f(
        i,
        "cy",
        /*cy*/
        e[3]
      ), f(
        i,
        "rx",
        /*rx*/
        e[4]
      ), f(
        i,
        "ry",
        /*ry*/
        e[5]
      ), f(t, "data-id", r = /*annotation*/
      e[0].id);
    },
    m(s, a) {
      v(s, t, a), ae(t, n), ae(t, i);
    },
    p(s, [a]) {
      a & /*computedStyle*/
      2 && o !== (o = /*computedStyle*/
      s[1] ? "display:none;" : void 0) && f(n, "style", o), a & /*computedStyle*/
      2 && f(
        i,
        "style",
        /*computedStyle*/
        s[1]
      ), a & /*annotation*/
      1 && r !== (r = /*annotation*/
      s[0].id) && f(t, "data-id", r);
    },
    i: j,
    o: j,
    d(s) {
      s && k(t);
    }
  };
}
function Si(e, t, n) {
  let o, { annotation: i } = t, { geom: r } = t, { style: s = void 0 } = t;
  const { cx: a, cy: l, rx: u, ry: m } = r;
  return e.$$set = (c) => {
    "annotation" in c && n(0, i = c.annotation), "geom" in c && n(6, r = c.geom), "style" in c && n(7, s = c.style);
  }, e.$$.update = () => {
    e.$$.dirty & /*annotation, style*/
    129 && n(1, o = Ee(i, s));
  }, [i, o, a, l, u, m, r, s];
}
class Mi extends $ {
  constructor(t) {
    super(), x(this, t, Si, Ai, Z, { annotation: 0, geom: 6, style: 7 });
  }
}
function Ti(e) {
  let t, n, o, i, r;
  return {
    c() {
      t = I("g"), n = I("polygon"), i = I("polygon"), f(n, "class", "a9s-outer"), f(n, "style", o = /*computedStyle*/
      e[1] ? "display:none;" : void 0), f(
        n,
        "points",
        /*points*/
        e[2].map(Li).join(" ")
      ), f(i, "class", "a9s-inner"), f(
        i,
        "style",
        /*computedStyle*/
        e[1]
      ), f(
        i,
        "points",
        /*points*/
        e[2].map(ki).join(" ")
      ), f(t, "data-id", r = /*annotation*/
      e[0].id);
    },
    m(s, a) {
      v(s, t, a), ae(t, n), ae(t, i);
    },
    p(s, [a]) {
      a & /*computedStyle*/
      2 && o !== (o = /*computedStyle*/
      s[1] ? "display:none;" : void 0) && f(n, "style", o), a & /*computedStyle*/
      2 && f(
        i,
        "style",
        /*computedStyle*/
        s[1]
      ), a & /*annotation*/
      1 && r !== (r = /*annotation*/
      s[0].id) && f(t, "data-id", r);
    },
    i: j,
    o: j,
    d(s) {
      s && k(t);
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
class Oi extends $ {
  constructor(t) {
    super(), x(this, t, vi, Ti, Z, { annotation: 0, geom: 3, style: 4 });
  }
}
function Pi(e) {
  let t, n, o, i, r;
  return {
    c() {
      t = I("g"), n = I("rect"), i = I("rect"), f(n, "class", "a9s-outer"), f(n, "style", o = /*computedStyle*/
      e[5] ? "display:none;" : void 0), f(
        n,
        "x",
        /*x*/
        e[4]
      ), f(
        n,
        "y",
        /*y*/
        e[3]
      ), f(
        n,
        "width",
        /*w*/
        e[2]
      ), f(
        n,
        "height",
        /*h*/
        e[1]
      ), f(i, "class", "a9s-inner"), f(
        i,
        "style",
        /*computedStyle*/
        e[5]
      ), f(
        i,
        "x",
        /*x*/
        e[4]
      ), f(
        i,
        "y",
        /*y*/
        e[3]
      ), f(
        i,
        "width",
        /*w*/
        e[2]
      ), f(
        i,
        "height",
        /*h*/
        e[1]
      ), f(t, "data-id", r = /*annotation*/
      e[0].id);
    },
    m(s, a) {
      v(s, t, a), ae(t, n), ae(t, i);
    },
    p(s, [a]) {
      a & /*computedStyle*/
      32 && o !== (o = /*computedStyle*/
      s[5] ? "display:none;" : void 0) && f(n, "style", o), a & /*x*/
      16 && f(
        n,
        "x",
        /*x*/
        s[4]
      ), a & /*y*/
      8 && f(
        n,
        "y",
        /*y*/
        s[3]
      ), a & /*w*/
      4 && f(
        n,
        "width",
        /*w*/
        s[2]
      ), a & /*h*/
      2 && f(
        n,
        "height",
        /*h*/
        s[1]
      ), a & /*computedStyle*/
      32 && f(
        i,
        "style",
        /*computedStyle*/
        s[5]
      ), a & /*x*/
      16 && f(
        i,
        "x",
        /*x*/
        s[4]
      ), a & /*y*/
      8 && f(
        i,
        "y",
        /*y*/
        s[3]
      ), a & /*w*/
      4 && f(
        i,
        "width",
        /*w*/
        s[2]
      ), a & /*h*/
      2 && f(
        i,
        "height",
        /*h*/
        s[1]
      ), a & /*annotation*/
      1 && r !== (r = /*annotation*/
      s[0].id) && f(t, "data-id", r);
    },
    i: j,
    o: j,
    d(s) {
      s && k(t);
    }
  };
}
function Ii(e, t, n) {
  let o, i, r, s, a, { annotation: l } = t, { geom: u } = t, { style: m = void 0 } = t;
  return e.$$set = (c) => {
    "annotation" in c && n(0, l = c.annotation), "geom" in c && n(6, u = c.geom), "style" in c && n(7, m = c.style);
  }, e.$$.update = () => {
    e.$$.dirty & /*annotation, style*/
    129 && n(5, o = Ee(l, m)), e.$$.dirty & /*geom*/
    64 && n(4, { x: i, y: r, w: s, h: a } = u, i, (n(3, r), n(6, u)), (n(2, s), n(6, u)), (n(1, a), n(6, u)));
  }, [l, a, s, r, i, o, u, m];
}
class Di extends $ {
  constructor(t) {
    super(), x(this, t, Ii, Pi, Z, { annotation: 0, geom: 6, style: 7 });
  }
}
function Bi(e) {
  let t, n, o;
  return {
    c() {
      t = I("g"), n = I("path"), f(
        n,
        "style",
        /*computedStyle*/
        e[2]
      ), f(
        n,
        "d",
        /*pathData*/
        e[1]
      ), f(t, "data-id", o = /*annotation*/
      e[0].id);
    },
    m(i, r) {
      v(i, t, r), ae(t, n);
    },
    p(i, [r]) {
      r & /*computedStyle*/
      4 && f(
        n,
        "style",
        /*computedStyle*/
        i[2]
      ), r & /*pathData*/
      2 && f(
        n,
        "d",
        /*pathData*/
        i[1]
      ), r & /*annotation*/
      1 && o !== (o = /*annotation*/
      i[0].id) && f(t, "data-id", o);
    },
    i: j,
    o: j,
    d(i) {
      i && k(t);
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
class Xi extends $ {
  constructor(t) {
    super(), x(this, t, Yi, Bi, Z, { annotation: 0, geom: 3, style: 4 });
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
      i.m(r, s), v(r, n, s), o = !0;
    },
    p(r, s) {
      s[0] & /*$store*/
      8192 && Z(t, t = /*annotation*/
      r[32].id) ? (de(), V(i, 1, 1, j), me(), i = Ft(r), i.c(), F(i, 1), i.m(n.parentNode, n)) : i.p(r, s);
    },
    i(r) {
      o || (F(i), o = !0);
    },
    o(r) {
      V(i), o = !1;
    },
    d(r) {
      r && k(n), i.d(r);
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
      ie(t, o, i), n = !0;
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
      n || (F(t.$$.fragment, o), n = !0);
    },
    o(o) {
      V(t.$$.fragment, o), n = !1;
    },
    d(o) {
      re(t, o);
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
      ie(t, o, i), n = !0;
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
      n || (F(t.$$.fragment, o), n = !0);
    },
    o(o) {
      V(t.$$.fragment, o), n = !1;
    },
    d(o) {
      re(t, o);
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
      ie(t, o, i), n = !0;
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
      n || (F(t.$$.fragment, o), n = !0);
    },
    o(o) {
      V(t.$$.fragment, o), n = !1;
    },
    d(o) {
      re(t, o);
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
      ie(t, o, i), n = !0;
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
      n || (F(t.$$.fragment, o), n = !0);
    },
    o(o) {
      V(t.$$.fragment, o), n = !1;
    },
    d(o) {
      re(t, o);
    }
  };
}
function Ft(e) {
  let t, n, o, i;
  const r = [Vi, Gi, Fi, Hi], s = [];
  function a(l, u) {
    return (
      /*selector*/
      l[35].type === G.ELLIPSE ? 0 : (
        /*selector*/
        l[35].type === G.RECTANGLE ? 1 : (
          /*selector*/
          l[35].type === G.POLYGON ? 2 : (
            /*selector*/
            l[35].type === G.FREEHAND ? 3 : -1
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
      ~t && s[t].m(l, u), v(l, o, u), i = !0;
    },
    p(l, u) {
      let m = t;
      t = a(l), t === m ? ~t && s[t].p(l, u) : (n && (de(), V(s[m], 1, 1, () => {
        s[m] = null;
      }), me()), ~t ? (n = s[t], n ? n.p(l, u) : (n = s[t] = r[t](l), n.c()), F(n, 1), n.m(o.parentNode, o)) : n = null);
    },
    i(l) {
      i || (F(n), i = !0);
    },
    o(l) {
      V(n), i = !1;
    },
    d(l) {
      ~t && s[t].d(l), l && k(o);
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
      i && i.m(r, s), v(r, n, s), o = !0;
    },
    p(r, s) {
      s[0] & /*isEditable, $store*/
      8320 && (t = !/*isEditable*/
      r[7](
        /*annotation*/
        r[32]
      )), t ? i ? (i.p(rt(r), s), s[0] & /*isEditable, $store*/
      8320 && F(i, 1)) : (i = Ht(rt(r)), i.c(), F(i, 1), i.m(n.parentNode, n)) : i && (de(), V(i, 1, 1, () => {
        i = null;
      }), me());
    },
    i(r) {
      o || (F(i), o = !0);
    },
    o(r) {
      V(i), o = !1;
    },
    d(r) {
      i && i.d(r), r && k(n);
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
      ~t && s[t].m(l, u), v(l, o, u), i = !0;
    },
    p(l, u) {
      let m = t;
      t = a(l), t === m ? ~t && s[t].p(l, u) : (n && (de(), V(s[m], 1, 1, () => {
        s[m] = null;
      }), me()), ~t ? (n = s[t], n ? n.p(l, u) : (n = s[t] = r[t](l), n.c()), F(n, 1), n.m(o.parentNode, o)) : n = null);
    },
    i(l) {
      i || (F(n), i = !0);
    },
    o(l) {
      V(n), i = !1;
    },
    d(l) {
      ~t && s[t].d(l), l && k(o);
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
      i.m(r, s), v(r, n, s), o = !0;
    },
    p(r, s) {
      s[0] & /*toolName*/
      4 && Z(t, t = /*toolName*/
      r[2]) ? (de(), V(i, 1, 1, j), me(), i = zt(r), i.c(), F(i, 1), i.m(n.parentNode, n)) : i.p(r, s);
    },
    i(r) {
      o || (F(i), o = !0);
    },
    o(r) {
      V(i), o = !1;
    },
    d(r) {
      r && k(n), i.d(r);
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
  const r = (s) => V(i[s], 1, 1, () => {
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
      v(s, t, a), n = !0;
    },
    p(s, a) {
      if (a[0] & /*editableAnnotations, drawingEl, style, transform, $scale, onChangeSelected*/
      279634) {
        o = /*editableAnnotations*/
        s[6];
        let l;
        for (l = 0; l < o.length; l += 1) {
          const u = Ct(s, o, l);
          i[l] ? (i[l].p(u, a), F(i[l], 1)) : (i[l] = qt(u), i[l].c(), F(i[l], 1), i[l].m(t.parentNode, t));
        }
        for (de(), l = o.length; l < i.length; l += 1)
          r(l);
        me();
      }
    },
    i(s) {
      if (!n) {
        for (let a = 0; a < o.length; a += 1)
          F(i[a]);
        n = !0;
      }
    },
    o(s) {
      i = i.filter(Boolean);
      for (let a = 0; a < i.length; a += 1)
        V(i[a]);
      n = !1;
    },
    d(s) {
      mt(i, s), s && k(t);
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
      ie(t, o, i), n = !0;
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
      n || (F(t.$$.fragment, o), n = !0);
    },
    o(o) {
      V(t.$$.fragment, o), n = !1;
    },
    d(o) {
      re(t, o);
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
    z(
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
      ie(t, o, i), n = !0;
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
      n || (F(t.$$.fragment, o), n = !0);
    },
    o(o) {
      V(t.$$.fragment, o), n = !1;
    },
    d(o) {
      re(t, o);
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
      i.m(r, s), v(r, n, s), o = !0;
    },
    p(r, s) {
      s[0] & /*editableAnnotations*/
      64 && Z(t, t = /*editable*/
      r[29].id) ? (de(), V(i, 1, 1, j), me(), i = jt(r), i.c(), F(i, 1), i.m(n.parentNode, n)) : i.p(r, s);
    },
    i(r) {
      o || (F(i), o = !0);
    },
    o(r) {
      V(i), o = !1;
    },
    d(r) {
      r && k(n), i.d(r);
    }
  };
}
function qi(e) {
  let t, n, o, i, r, s, a = (
    /*$store*/
    e[13]
  ), l = [];
  for (let c = 0; c < a.length; c += 1)
    l[c] = Gt(Ut(e, a, c));
  const u = (c) => V(l[c], 1, 1, () => {
    l[c] = null;
  });
  let m = (
    /*drawingEl*/
    e[4] && Vt(e)
  );
  return {
    c() {
      t = I("svg"), n = I("g");
      for (let c = 0; c < l.length; c += 1)
        l[c].c();
      o = I("g"), m && m.c(), f(o, "class", "drawing"), f(t, "class", "a9s-annotationlayer"), Et(
        t,
        "drawing",
        /*tool*/
        e[12]
      );
    },
    m(c, h) {
      v(c, t, h), ae(t, n);
      for (let d = 0; d < l.length; d += 1)
        l[d] && l[d].m(n, null);
      ae(t, o), m && m.m(o, null), e[25](o), e[26](t), i = !0, r || (s = [
        W(t, "pointerup", function() {
          z(
            /*onPointerUp*/
            e[8]
          ) && e[8].apply(this, arguments);
        }),
        W(t, "pointerdown", function() {
          z(
            /*onPointerDown*/
            e[9]
          ) && e[9].apply(this, arguments);
        })
      ], r = !0);
    },
    p(c, h) {
      if (e = c, h[0] & /*$store, style, isEditable*/
      8322) {
        a = /*$store*/
        e[13];
        let d;
        for (d = 0; d < a.length; d += 1) {
          const p = Ut(e, a, d);
          l[d] ? (l[d].p(p, h), F(l[d], 1)) : (l[d] = Gt(p), l[d].c(), F(l[d], 1), l[d].m(n, null));
        }
        for (de(), d = a.length; d < l.length; d += 1)
          u(d);
        me();
      }
      /*drawingEl*/
      e[4] ? m ? (m.p(e, h), h[0] & /*drawingEl*/
      16 && F(m, 1)) : (m = Vt(e), m.c(), F(m, 1), m.m(o, null)) : m && (de(), V(m, 1, 1, () => {
        m = null;
      }), me()), (!i || h[0] & /*tool*/
      4096) && Et(
        t,
        "drawing",
        /*tool*/
        e[12]
      );
    },
    i(c) {
      if (!i) {
        for (let h = 0; h < a.length; h += 1)
          F(l[h]);
        F(m), i = !0;
      }
    },
    o(c) {
      l = l.filter(Boolean);
      for (let h = 0; h < l.length; h += 1)
        V(l[h]);
      V(m), i = !1;
    },
    d(c) {
      c && k(t), mt(l, c), m && m.d(), e[25](null), e[26](null), r = !1, fe(s);
    }
  };
}
function Wi(e, t, n) {
  let o, i, r, s, a, l, u, m, c, h, d = j, p = () => (d(), d = Qt(b, (X) => n(14, h = X)), b);
  e.$$.on_destroy.push(() => d());
  let { drawingEnabled: _ } = t, { image: A } = t, { preferredDrawingMode: w } = t, { state: g } = t, { style: y = void 0 } = t, { toolName: M = dt().length > 0 ? dt()[0] : void 0 } = t, { user: T } = t, D, R, b;
  ye(() => p(n(5, b = li(A, R))));
  const { selection: E, store: S } = g;
  bt(e, E, (X) => n(24, m = X)), bt(e, S, (X) => n(13, c = X));
  let O = null, P = null;
  const N = (X) => {
    S.unobserve(O);
    const te = X.filter(({ editable: J }) => J).map(({ id: J }) => J);
    te.length > 0 ? (n(6, P = te.map((J) => S.getAnnotation(J))), O = (J) => {
      const { updated: pe } = J.changes;
      n(6, P = pe.map((ue) => ue.newValue));
    }, S.observe(O, { annotations: te })) : n(6, P = null);
  }, C = (X) => {
    const te = rn(), J = {
      id: te,
      bodies: [],
      target: {
        annotation: te,
        selector: X.detail,
        creator: T,
        created: /* @__PURE__ */ new Date()
      }
    };
    S.addAnnotation(J), E.setSelected(J.id);
  }, Y = (X) => (te) => {
    var oe;
    const { target: J } = X, pe = 10 * 60 * 1e3, ue = ((oe = J.creator) == null ? void 0 : oe.id) !== T.id || !J.created || (/* @__PURE__ */ new Date()).getTime() - J.created.getTime() > pe;
    S.updateTarget({
      ...J,
      selector: te.detail,
      created: ue ? J.created : /* @__PURE__ */ new Date(),
      updated: ue ? /* @__PURE__ */ new Date() : null,
      updatedBy: ue ? T : null
    });
  };
  function q(X) {
    Ye[X ? "unshift" : "push"](() => {
      D = X, n(4, D);
    });
  }
  function H(X) {
    Ye[X ? "unshift" : "push"](() => {
      R = X, n(3, R);
    });
  }
  return e.$$set = (X) => {
    "drawingEnabled" in X && n(0, _ = X.drawingEnabled), "image" in X && n(19, A = X.image), "preferredDrawingMode" in X && n(20, w = X.preferredDrawingMode), "state" in X && n(21, g = X.state), "style" in X && n(1, y = X.style), "toolName" in X && n(2, M = X.toolName), "user" in X && n(22, T = X.user);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*toolName*/
    4 && n(12, { tool: o, opts: i } = cn(M), o, (n(23, i), n(2, M))), e.$$.dirty[0] & /*opts, preferredDrawingMode*/
    9437184 && n(11, r = (i == null ? void 0 : i.drawingMode) || w), e.$$.dirty[0] & /*svgEl*/
    8 && n(10, s = Ri(R)), e.$$.dirty[0] & /*svgEl*/
    8 && n(9, { onPointerDown: a, onPointerUp: l } = Ci(R, S), a, (n(8, l), n(3, R))), e.$$.dirty[0] & /*$selection*/
    16777216 && n(7, u = (X) => m.selected.find((te) => te.id === X.id && te.editable)), e.$$.dirty[0] & /*$selection*/
    16777216 && N(m.selected);
  }, [
    _,
    y,
    M,
    R,
    D,
    b,
    P,
    u,
    l,
    a,
    s,
    r,
    o,
    c,
    h,
    E,
    S,
    C,
    Y,
    A,
    w,
    g,
    T,
    i,
    m,
    q,
    H
  ];
}
class Ki extends $ {
  constructor(t) {
    super(), x(
      this,
      t,
      Wi,
      qi,
      Z,
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
      var r = o - n + 1, s = t - n + 1, a = Math.log(r), l = 0.5 * Math.exp(2 * a / 3), u = 0.5 * Math.sqrt(a * l * (r - l) / r) * (s - r / 2 < 0 ? -1 : 1), m = Math.max(n, Math.floor(t - s * l / r + u)), c = Math.min(o, Math.floor(t + (r - s) * l / r + u));
      un(e, t, m, c, i);
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
      const c = Math.min(m + u - 1, o);
      Wt(t, m, c, l, this.compareMinY);
      for (let h = m; h <= c; h += l) {
        const d = Math.min(h + l - 1, c);
        a.children.push(this._build(t, h, d, i - 1));
      }
    }
    return Te(a, this.toBBox), a;
  }
  _chooseSubtree(t, n, o, i) {
    for (; i.push(n), !(n.leaf || i.length - 1 === o); ) {
      let r = 1 / 0, s = 1 / 0, a;
      for (let l = 0; l < n.children.length; l++) {
        const u = n.children[l], m = st(u), c = tr(t, u) - m;
        c < s ? (s = c, r = m < r ? m : r, a = u) : c === s && m < r && (r = m, a = u);
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
      const l = Pe(t, 0, a, this.toBBox), u = Pe(t, a, o, this.toBBox), m = nr(l, u), c = st(l) + st(u);
      m < r ? (r = m, i = a, s = c < s ? c : s) : m === r && c < s && (s = c, i = a);
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
  }, i = (c) => {
    const { minX: h, minY: d, maxX: p, maxY: _ } = c.selector.geometry.bounds, A = { minX: h, minY: d, maxX: p, maxY: _, target: c };
    e.insert(A), t.set(c.annotation, A);
  }, r = (c) => {
    const h = t.get(c.annotation);
    e.remove(h), t.delete(c.annotation);
  };
  return {
    all: n,
    clear: o,
    getAt: (c, h) => {
      const p = e.search({
        minX: c,
        minY: h,
        maxX: c,
        maxY: h
      }).map((_) => _.target).filter((_) => _.selector.type === G.RECTANGLE || Tn(_.selector, c, h));
      if (p.length > 0)
        return p.sort((_, A) => ct(_.selector) - ct(A.selector)), p[0];
    },
    getIntersecting: (c, h, d, p) => e.search({
      minX: c,
      minY: h,
      maxX: c + d,
      maxY: h + p
    }).map((_) => _.target),
    insert: i,
    remove: r,
    set: (c, h = !0) => {
      h && o();
      const d = c.map((p) => {
        const { minX: _, minY: A, maxX: w, maxY: g } = p.selector.geometry.bounds;
        return { minX: _, minY: A, maxX: w, maxY: g, target: p };
      });
      d.forEach((p) => t.set(p.target.annotation, p)), e.load(d);
    },
    size: () => e.all().length,
    update: (c, h) => {
      r(c), i(h);
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
      getIntersecting: (l, u, m, c) => n.getIntersecting(l, u, m, c).map((h) => t.getAnnotation(h.annotation))
    },
    selection: o,
    hover: i,
    viewport: r
  };
}, rr = (e) => {
  const t = ir(e);
  return {
    ...t,
    store: fo(t.store)
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
}), Zt = navigator.userAgent.indexOf("Mac OS X") !== -1, fr = (e, t) => {
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
  const m = fr(a);
  let c = Ao();
  Kt(n, u, o.theme);
  const h = new Ki({
    target: u,
    props: {
      drawingEnabled: o.drawingEnabled,
      image: n,
      preferredDrawingMode: o.drawingMode,
      state: i,
      style: o.style,
      user: c
    }
  });
  h.$on("click", (b) => {
    const { originalEvent: E, annotation: S } = b.detail;
    S ? r.clickSelect(S.id, E) : r.isEmpty() || r.clear();
  });
  const d = yo(i, a, o.adapter), p = () => {
    h.$destroy(), u.parentNode.insertBefore(n, u), u.parentNode.removeChild(u), m.destroy(), a.destroy();
  }, _ = () => c, A = (b, E, S) => Ei(b, E, S), w = (b, E) => Ko(b, E), g = (b) => {
    if (!cn(b))
      throw `No drawing tool named ${b}`;
    h.$set({ toolName: b });
  }, y = (b) => h.$set({ drawingEnabled: b }), M = (b) => {
    console.warn("Filter not implemented yet");
  }, T = (b) => h.$set({ style: b }), D = (b) => Kt(n, u, b), R = (b) => {
    c = b, h.$set({ user: b });
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
    setStyle: T,
    setTheme: D,
    setUser: R,
    state: i
  };
};
export {
  Ne as Editor,
  $o as EditorMount,
  Uo as EllipseEditor,
  Vo as FreehandEditor,
  L as Handle,
  dr as IdentityTransform,
  Wo as LineEditor,
  Pn as LineUtil,
  Io as PolygonEditor,
  Xo as RectangleEditor,
  vn as RectangleUtil,
  ii as RubberbandRectangle,
  Ki as SVGAnnotationLayer,
  G as ShapeType,
  ti as ToolMount,
  cr as W3CImageFormat,
  Ci as addEventListeners,
  be as boundsFromPoints,
  ct as computeArea,
  mr as createImageAnnotator,
  ir as createImageAnnotatorState,
  Ri as createSVGTransform,
  rr as createSvelteImageAnnotatorState,
  lr as detectTheme,
  ot as distance,
  li as enableResponsive,
  ar as fillDefaults,
  Pt as getEditor,
  cn as getTool,
  fr as initKeyboardCommands,
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
