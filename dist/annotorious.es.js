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
function se(e) {
  e.forEach(Jt);
}
function V(e) {
  return typeof e == "function";
}
function K(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function hn(e) {
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
function mn(e, t, n, o) {
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
function ce(e, t) {
  e.appendChild(t);
}
function O(e, t, n) {
  e.insertBefore(t, n || null);
}
function v(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function ht(e, t) {
  for (let n = 0; n < e.length; n += 1)
    e[n] && e[n].d(t);
}
function B(e) {
  return document.createElementNS("http://www.w3.org/2000/svg", e);
}
function $t(e) {
  return document.createTextNode(e);
}
function Z() {
  return $t(" ");
}
function de() {
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
function ge(e) {
  en().$$.on_mount.push(e);
}
function he() {
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
function ee(e, t) {
  const n = e.$$.callbacks[t.type];
  n && n.slice().forEach((o) => o.call(this, t));
}
const Te = [], Ye = [];
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
let Ee = 0;
function tn() {
  if (Ee !== 0)
    return;
  const e = Be;
  do {
    try {
      for (; Ee < Te.length; ) {
        const t = Te[Ee];
        Ee++, De(t), An(t.$$);
      }
    } catch (t) {
      throw Te.length = 0, Ee = 0, t;
    }
    for (De(null), Te.length = 0, Ee = 0; Ye.length; )
      Ye.pop()();
    for (let t = 0; t < ve.length; t += 1) {
      const n = ve[t];
      et.has(n) || (et.add(n), n());
    }
    ve.length = 0;
  } while (Te.length);
  for (; At.length; )
    At.pop()();
  at = !1, et.clear(), De(e);
}
function An(e) {
  if (e.fragment !== null) {
    e.update(), se(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(ct);
  }
}
function Sn(e) {
  const t = [], n = [];
  ve.forEach((o) => e.indexOf(o) === -1 ? t.push(o) : n.push(o)), n.forEach((o) => o()), ve = t;
}
const Je = /* @__PURE__ */ new Set();
let pe;
function fe() {
  pe = {
    r: 0,
    c: [],
    p: pe
    // parent group
  };
}
function ue() {
  pe.r || se(pe.c), pe = pe.p;
}
function H(e, t) {
  e && e.i && (Je.delete(e), e.i(t));
}
function G(e, t, n, o) {
  if (e && e.o) {
    if (Je.has(e))
      return;
    Je.add(e), pe.c.push(() => {
      Je.delete(e), o && (n && e.d(1), o());
    }), e.o(t);
  } else
    o && o();
}
function le(e) {
  e && e.c();
}
function ne(e, t, n, o) {
  const { fragment: i, after_update: r } = e.$$;
  i && i.m(t, n), o || ct(() => {
    const s = e.$$.on_mount.map(Jt).filter(V);
    e.$$.on_destroy ? e.$$.on_destroy.push(...s) : se(s), e.$$.on_mount = [];
  }), r.forEach(ct);
}
function oe(e, t) {
  const n = e.$$;
  n.fragment !== null && (Sn(n.after_update), se(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Mn(e, t) {
  e.$$.dirty[0] === -1 && (Te.push(e), En(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function J(e, t, n, o, i, r, s, a = [-1]) {
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
  let h = !1;
  if (u.ctx = n ? n(e, t.props || {}, (f, m, ...d) => {
    const g = d.length ? d[0] : m;
    return u.ctx && i(u.ctx[f], u.ctx[f] = g) && (!u.skip_bound && u.bound[f] && u.bound[f](g), h && Mn(e, f)), m;
  }) : [], u.update(), h = !0, se(u.before_update), u.fragment = o ? o(u.ctx) : !1, t.target) {
    if (t.hydrate) {
      const f = _n(t.target);
      u.fragment && u.fragment.l(f), f.forEach(v);
    } else
      u.fragment && u.fragment.c();
    t.intro && H(e.$$.fragment), ne(e, t.target, t.anchor, t.customElement), tn();
  }
  De(l);
}
class Q {
  $destroy() {
    oe(this, 1), this.$destroy = z;
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
    this.$$set && !hn(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
var F = /* @__PURE__ */ ((e) => (e.ELLIPSE = "ELLIPSE", e.POLYGON = "POLYGON", e.RECTANGLE = "RECTANGLE", e.FREEHAND = "FREEHAND", e.LINE = "LINE", e))(F || {});
const mt = {}, Re = (e, t) => mt[e] = t, ft = (e) => mt[e.type].area(e), Tn = (e, t, n) => mt[e.type].intersects(e, t, n), _e = (e) => {
  let t = 1 / 0, n = 1 / 0, o = -1 / 0, i = -1 / 0;
  return e.forEach(([r, s]) => {
    t = Math.min(t, r), n = Math.min(n, s), o = Math.max(o, r), i = Math.max(i, s);
  }), { minX: t, minY: n, maxX: o, maxY: i };
}, Ln = {
  area: (e) => Math.PI * e.geometry.rx * e.geometry.ry,
  intersects: (e, t, n) => {
    const { cx: o, cy: i, rx: r, ry: s } = e.geometry, a = 0, l = Math.cos(a), u = Math.sin(a), h = t - o, f = n - i, m = l * h + u * f, d = u * h - l * f;
    return m * m / (r * r) + d * d / (s * s) <= 1;
  }
};
Re(F.ELLIPSE, Ln);
const vn = {
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
      const a = o[r][0], l = o[r][1], u = o[s][0], h = o[s][1];
      l > n != h > n && t < (u - a) * (n - l) / (h - l) + a && (i = !i);
    }
    return i;
  }
};
Re(F.POLYGON, vn);
const On = {
  area: (e) => e.geometry.w * e.geometry.h,
  intersects: (e, t, n) => t >= e.geometry.x && t <= e.geometry.x + e.geometry.w && n >= e.geometry.y && n <= e.geometry.y + e.geometry.h
};
Re(F.RECTANGLE, On);
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
      const a = o[r][0], l = o[r][1], u = o[s][0], h = o[s][1];
      l > n != h > n && t < (u - a) * (n - l) / (h - l) + a && (i = !i);
    }
    return i;
  }
};
Re(F.FREEHAND, kn);
const Pn = {
  area: (e) => 0,
  intersects: (e, t, n) => {
    const o = e.geometry.x1, i = e.geometry.x2, r = e.geometry.y1, s = e.geometry.y2;
    var a = Math.sqrt(Math.pow(t - o, 2) + Math.pow(n - r, 2)), l = Math.sqrt(Math.pow(t - i, 2) + Math.pow(n - s, 2)), u = Math.sqrt(Math.pow(i - o, 2) + Math.pow(s - r, 2)), h = a + l;
    return Math.abs(h - u) <= 0.1;
  }
};
Re(F.LINE, Pn);
const In = (e, t = !1) => {
  const n = typeof e == "string" ? e : e.value, o = /^(xywh)=(pixel|percent)?:?(.+?),(.+?),(.+?),(.+)*/g, i = [...n.matchAll(o)][0], [r, s, a, l, u, h, f] = i;
  if (s !== "xywh")
    throw new Error("Unsupported MediaFragment: " + n);
  if (a && a !== "pixel")
    throw new Error(`Unsupported MediaFragment unit: ${a}`);
  const [m, d, g, S] = [l, u, h, f].map(parseFloat);
  return {
    type: F.RECTANGLE,
    geometry: {
      x: m,
      y: d,
      w: g,
      h: S,
      bounds: {
        minX: m,
        minY: t ? d - S : d,
        maxX: m + g,
        maxY: t ? d : d + S
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
      bounds: _e(s)
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
      bounds: _e(i)
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
let Ke;
const qn = new Uint8Array(16);
function Kn() {
  if (!Ke && (Ke = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Ke))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Ke(qn);
}
const x = [];
for (let e = 0; e < 256; ++e)
  x.push((e + 256).toString(16).slice(1));
function Wn(e, t = 0) {
  return x[e[t + 0]] + x[e[t + 1]] + x[e[t + 2]] + x[e[t + 3]] + "-" + x[e[t + 4]] + x[e[t + 5]] + "-" + x[e[t + 6]] + x[e[t + 7]] + "-" + x[e[t + 8]] + x[e[t + 9]] + "-" + x[e[t + 10]] + x[e[t + 11]] + x[e[t + 12]] + x[e[t + 13]] + x[e[t + 14]] + x[e[t + 15]];
}
const Zn = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Mt = {
  randomUUID: Zn
};
function rn(e, t, n) {
  if (Mt.randomUUID && !t && !e)
    return Mt.randomUUID();
  e = e || {};
  const o = e.random || (e.rng || Kn)();
  if (o[6] = o[6] & 15 | 64, o[8] = o[8] & 63 | 128, t) {
    n = n || 0;
    for (let i = 0; i < 16; ++i)
      t[n + i] = o[i];
    return t;
  }
  return Wn(o);
}
var Tt = Object.prototype.hasOwnProperty;
function ye(e, t) {
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
        for (; o-- && ye(e[o], t[o]); )
          ;
      return o === -1;
    }
    if (!n || typeof e == "object") {
      o = 0;
      for (n in e)
        if (Tt.call(e, n) && ++o && !Tt.call(t, n) || !(n in t) || !ye(e[n], t[n]))
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
const Ae = [];
function pt(e, t = tt) {
  let n;
  const o = /* @__PURE__ */ new Set();
  function i(a) {
    if (Jn(e, a) && (e = a, n)) {
      const l = !Ae.length;
      for (const u of o)
        u[1](), Ae.push(u, e);
      if (l) {
        for (let u = 0; u < Ae.length; u += 2)
          Ae[u][0](Ae[u + 1]);
        Ae.length = 0;
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
    const m = typeof f == "string" ? f : f.id;
    return i.selected.some((d) => d.id === m);
  }, l = (f, m) => {
    const d = e.getAnnotation(f);
    if (d) {
      const g = $n(d, t);
      o(g === "EDIT" ? { selected: [{ id: f, editable: !0 }], pointerEvent: m } : g === "SELECT" ? { selected: [{ id: f }], pointerEvent: m } : { selected: [], pointerEvent: m });
    } else
      console.warn("Invalid selection: " + f);
  }, u = (f, m = !0) => {
    const d = Array.isArray(f) ? f : [f], g = d.map((S) => e.getAnnotation(S)).filter((S) => S);
    o({ selected: g.map(({ id: S }) => ({ id: S, editable: m })) }), g.length !== d.length && console.warn("Invalid selection", f);
  }, h = (f) => {
    if (i.selected.length === 0)
      return !1;
    const { selected: m } = i;
    m.filter(({ id: d }) => f.includes(d)).length > 0 && o({ selected: m.filter(({ id: d }) => !f.includes(d)) });
  };
  return e.observe(({ changes: f }) => h(f.deleted.map((m) => m.id))), {
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
  return { newBody: n, oldBody: o && !ye(o, n) ? o : void 0 };
}).filter(({ oldBody: n }) => n), io = (e, t) => !ye(e.target, t.target), ln = (e, t) => {
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
var q = /* @__PURE__ */ ((e) => (e.LOCAL = "LOCAL", e.REMOTE = "REMOTE", e))(q || {});
const ro = (e, t) => {
  var n, o;
  const { changes: i, origin: r } = t;
  if (!(!e.options.origin || e.options.origin === r))
    return !1;
  if (e.options.ignore) {
    const { ignore: s } = e.options, a = (l) => (l == null ? void 0 : l.length) > 0;
    if (!(a(i.created) || a(i.deleted))) {
      const l = (n = i.updated) == null ? void 0 : n.some((h) => a(h.bodiesCreated) || a(h.bodiesDeleted) || a(h.bodiesUpdated)), u = (o = i.updated) == null ? void 0 : o.some((h) => h.targetUpdated);
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
    ...(e.created || []).filter((f) => !r.has(f.id)).map((f) => s.has(f.id) ? t.updated.find(({ oldValue: m }) => m.id === f.id).newValue : f),
    ...t.created || []
  ], u = [
    ...(e.deleted || []).filter((f) => !i.has(f.id)),
    ...(t.deleted || []).filter((f) => !n.has(f.id))
  ], h = [
    ...(e.updated || []).filter(({ newValue: f }) => !r.has(f.id)).map((f) => {
      const { oldValue: m, newValue: d } = f;
      if (s.has(d.id)) {
        const g = t.updated.find((S) => S.oldValue.id === d.id).newValue;
        return ln(m, g);
      } else
        return f;
    }),
    ...(t.updated || []).filter(({ oldValue: f }) => !a.has(f.id))
  ];
  return { created: l, deleted: u, updated: h };
}, lo = (e) => e.id !== void 0, ao = () => {
  const e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map(), n = [], o = (b, y = {}) => n.push({ onChange: b, options: y }), i = (b) => {
    const y = n.findIndex((E) => E.onChange == b);
    y > -1 && n.splice(y, 1);
  }, r = (b, y) => {
    const E = {
      origin: b,
      changes: {
        created: y.created || [],
        updated: y.updated || [],
        deleted: y.deleted || []
      },
      state: [...e.values()]
    };
    n.forEach((k) => {
      ro(k, E) && k.onChange(E);
    });
  }, s = (b, y = q.LOCAL) => {
    if (e.get(b.id))
      throw Error(`Cannot add annotation ${b.id} - exists already`);
    e.set(b.id, b), b.bodies.forEach((E) => t.set(E.id, b.id)), r(y, { created: [b] });
  }, a = (b, y) => {
    const E = typeof b == "string" ? y : b, k = typeof b == "string" ? b : b.id, P = e.get(k);
    if (P) {
      const C = ln(P, E);
      return k === E.id ? e.set(k, E) : (e.delete(k), e.set(E.id, E)), P.bodies.forEach((U) => t.delete(U.id)), E.bodies.forEach((U) => t.set(U.id, E.id)), C;
    } else
      console.warn(`Cannot update annotation ${k} - does not exist`);
  }, l = (b, y = q.LOCAL, E = q.LOCAL) => {
    const k = lo(y) ? E : y, P = a(b, y);
    P && r(k, { updated: [P] });
  }, u = (b, y = q.LOCAL) => {
    const E = b.reduce((k, P) => {
      const C = a(P);
      return C ? [...k, C] : k;
    }, []);
    E.length > 0 && r(y, { updated: E });
  }, h = (b, y = q.LOCAL) => {
    const E = e.get(b.annotation);
    if (E) {
      const k = {
        ...E,
        bodies: [...E.bodies, b]
      };
      e.set(E.id, k), t.set(b.id, k.id), r(y, { updated: [{
        oldValue: E,
        newValue: k,
        bodiesCreated: [b]
      }] });
    } else
      console.warn(`Attempt to add body to missing annotation: ${b.annotation}`);
  }, f = () => [...e.values()], m = (b = q.LOCAL) => {
    const y = [...e.values()];
    e.clear(), t.clear(), r(b, { deleted: y });
  }, d = (b, y = !0, E = q.LOCAL) => {
    if (y) {
      const k = [...e.values()];
      e.clear(), t.clear(), b.forEach((P) => {
        e.set(P.id, P), P.bodies.forEach((C) => t.set(C.id, P.id));
      }), r(E, { created: b, deleted: k });
    } else {
      const k = b.reduce((P, C) => {
        const U = e.get(C.id);
        return U ? [...P, U] : P;
      }, []);
      if (k.length > 0)
        throw Error(`Bulk insert would overwrite the following annotations: ${k.map((P) => P.id).join(", ")}`);
      b.forEach((P) => {
        e.set(P.id, P), P.bodies.forEach((C) => t.set(C.id, P.id));
      }), r(E, { created: b });
    }
  }, g = (b) => {
    const y = typeof b == "string" ? b : b.id, E = e.get(y);
    if (E)
      return e.delete(y), E.bodies.forEach((k) => t.delete(k.id)), E;
    console.warn(`Attempt to delete missing annotation: ${y}`);
  }, S = (b, y = q.LOCAL) => {
    const E = g(b);
    E && r(y, { deleted: [E] });
  }, A = (b, y = q.LOCAL) => {
    const E = b.reduce((k, P) => {
      const C = g(P);
      return C ? [...k, C] : k;
    }, []);
    E.length > 0 && r(y, { deleted: E });
  }, w = (b, y = q.LOCAL) => {
    const E = e.get(b.annotation);
    if (E) {
      const k = E.bodies.find((P) => P.id === b.id);
      if (k) {
        t.delete(k.id);
        const P = {
          ...E,
          bodies: E.bodies.filter((C) => C.id !== b.id)
        };
        e.set(E.id, P), r(y, { updated: [{
          oldValue: E,
          newValue: P,
          bodiesDeleted: [k]
        }] });
      } else
        console.warn(`Attempt to delete missing body ${b.id} from annotation ${b.annotation}`);
    } else
      console.warn(`Attempt to delete body from missing annotation ${b.annotation}`);
  }, p = (b) => {
    const y = e.get(b);
    return y ? { ...y } : void 0;
  }, _ = (b) => {
    const y = t.get(b);
    if (y) {
      const E = p(y).bodies.find((k) => k.id === b);
      if (E)
        return E;
      console.error(`Store integrity error: body ${b} in index, but not in annotation`);
    } else
      console.warn(`Attempt to retrieve missing body: ${b}`);
  }, M = (b, y) => {
    if (b.annotation !== y.annotation)
      throw "Annotation integrity violation: annotation ID must be the same when updating bodies";
    const E = e.get(b.annotation);
    if (E) {
      const k = E.bodies.find((C) => C.id === b.id), P = {
        ...E,
        bodies: E.bodies.map((C) => C.id === k.id ? y : C)
      };
      return e.set(E.id, P), k.id !== y.id && (t.delete(k.id), t.set(y.id, P.id)), {
        oldValue: E,
        newValue: P,
        bodiesUpdated: [{ oldBody: k, newBody: y }]
      };
    } else
      console.warn(`Attempt to add body to missing annotation ${b.annotation}`);
  }, L = (b, y, E = q.LOCAL) => {
    const k = M(b, y);
    r(E, { updated: [k] });
  }, I = (b, y = q.LOCAL) => {
    const E = b.map((k) => M({ id: k.id, annotation: k.annotation }, k));
    r(y, { updated: E });
  }, X = (b) => {
    const y = e.get(b.annotation);
    if (y) {
      const E = {
        ...y,
        target: {
          ...y.target,
          ...b
        }
      };
      return e.set(y.id, E), {
        oldValue: y,
        newValue: E,
        targetUpdated: {
          oldTarget: y.target,
          newTarget: b
        }
      };
    } else
      console.warn(`Attempt to update target on missing annotation: ${b.annotation}`);
  };
  return {
    addAnnotation: s,
    addBody: h,
    all: f,
    bulkAddAnnotation: d,
    bulkDeleteAnnotation: A,
    bulkUpdateAnnotation: u,
    bulkUpdateBodies: I,
    bulkUpdateTargets: (b, y = q.LOCAL) => {
      const E = b.map(X).filter((k) => k);
      E.length > 0 && r(y, { updated: E });
    },
    clear: m,
    deleteAnnotation: S,
    deleteBody: w,
    getAnnotation: p,
    getBody: _,
    observe: o,
    unobserve: i,
    updateAnnotation: l,
    updateBody: L,
    updateTarget: (b, y = q.LOCAL) => {
      const E = X(b);
      E && r(y, { updated: [E] });
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
const uo = 250, ho = (e) => {
  const t = fo(), n = [];
  let o = -1, i = !1, r = 0;
  const s = (d) => {
    if (!i) {
      const { changes: g } = d, S = performance.now();
      if (S - r > uo)
        n.splice(o + 1), n.push(g), o = n.length - 1;
      else {
        const A = n.length - 1;
        n[A] = so(n[A], g);
      }
      r = S;
    }
    i = !1;
  };
  e.observe(s, { origin: q.LOCAL });
  const a = (d) => (d == null ? void 0 : d.length) > 0 && e.bulkDeleteAnnotation(d), l = (d) => (d == null ? void 0 : d.length) > 0 && e.bulkAddAnnotation(d, !1), u = (d) => (d == null ? void 0 : d.length) > 0 && e.bulkUpdateAnnotation(d.map(({ oldValue: g }) => g)), h = (d) => (d == null ? void 0 : d.length) > 0 && e.bulkUpdateAnnotation(d.map(({ newValue: g }) => g)), f = (d) => (d == null ? void 0 : d.length) > 0 && e.bulkAddAnnotation(d, !1), m = (d) => (d == null ? void 0 : d.length) > 0 && e.bulkDeleteAnnotation(d);
  return {
    canRedo: () => n.length - 1 > o,
    canUndo: () => o > -1,
    destroy: () => e.unobserve(s),
    on: (d, g) => t.on(d, g),
    redo: () => {
      if (n.length - 1 > o) {
        i = !0;
        const { created: d, updated: g, deleted: S } = n[o + 1];
        l(d), h(g), m(S), t.emit("redo", n[o + 1]), o += 1;
      }
    },
    undo: () => {
      if (o > -1) {
        i = !0;
        const { created: d, updated: g, deleted: S } = n[o];
        a(d), u(g), f(S), t.emit("undo", n[o]), o -= 1;
      }
    }
  };
}, mo = () => {
  const { subscribe: e, set: t } = pt([]);
  return {
    subscribe: e,
    set: t
  };
}, go = (e, t, n, o) => {
  const { store: i, selection: r, hover: s, viewport: a } = e, l = /* @__PURE__ */ new Map();
  let u = [], h, f;
  const m = (w, p) => {
    l.has(w) ? l.get(w).push(p) : l.set(w, [p]);
  }, d = (w, p) => {
    const _ = l.get(w);
    _ && _.indexOf(p) > 0 && _.splice(_.indexOf(p), 1);
  }, g = (w, p, _) => {
    l.has(w) && setTimeout(() => {
      l.get(w).forEach((M) => {
        if (n) {
          const L = Array.isArray(p) ? p.map((X) => n.serialize(X)) : n.serialize(p), I = _ ? _ instanceof PointerEvent ? _ : n.serialize(_) : void 0;
          M(L, I);
        } else
          M(p, _);
      });
    }, 1);
  }, S = () => {
    const { selected: w } = r, p = w.map(({ id: _ }) => i.getAnnotation(_));
    p.forEach((_) => {
      const M = u.find((L) => L.id === _.id);
      (!M || !ye(M, _)) && g("updateAnnotation", _, M);
    }), u = u.map((_) => p.find(({ id: L }) => L === _.id) || _);
  };
  r.subscribe(({ selected: w }) => {
    if (!(u.length === 0 && w.length === 0)) {
      if (u.length === 0 && w.length > 0)
        u = w.map(({ id: p }) => i.getAnnotation(p));
      else if (u.length > 0 && w.length === 0)
        u.forEach((p) => {
          const _ = i.getAnnotation(p.id);
          _ && !ye(_, p) && g("updateAnnotation", _, p);
        }), u = [];
      else {
        const p = new Set(u.map((M) => M.id)), _ = new Set(w.map(({ id: M }) => M));
        u.filter((M) => !_.has(M.id)).forEach((M) => {
          const L = i.getAnnotation(M.id);
          L && !ye(L, M) && g("updateAnnotation", L, M);
        }), u = [
          // Remove annotations that were deselected
          ...u.filter((M) => _.has(M.id)),
          // Add editable annotations that were selected
          ...w.filter(({ id: M }) => !p.has(M)).map(({ id: M }) => i.getAnnotation(M))
        ];
      }
      g("selectionChanged", u);
    }
  }), s.subscribe((w) => {
    !h && w ? g("mouseEnterAnnotation", i.getAnnotation(w)) : h && !w ? g("mouseLeaveAnnotation", i.getAnnotation(h)) : h && w && (g("mouseLeaveAnnotation", i.getAnnotation(h)), g("mouseEnterAnnotation", i.getAnnotation(w))), h = w;
  }), a == null || a.subscribe((w) => g("viewportIntersect", w.map(i.getAnnotation))), i.observe((w) => {
    o && (f && clearTimeout(f), f = setTimeout(S, 1e3));
    const { created: p, deleted: _ } = w.changes;
    p.forEach((M) => g("createAnnotation", M)), _.forEach((M) => g("deleteAnnotation", M)), w.changes.updated.filter((M) => [
      ...M.bodiesCreated || [],
      ...M.bodiesDeleted || [],
      ...M.bodiesUpdated || []
    ].length > 0).forEach(({ oldValue: M, newValue: L }) => {
      const I = u.find((X) => X.id === M.id) || M;
      u = u.map((X) => X.id === M.id ? L : X), g("updateAnnotation", L, I);
    });
  }, { origin: q.LOCAL }), i.observe((w) => {
    if (u) {
      const p = new Set(u.map((M) => M.id)), _ = w.changes.updated.filter(({ newValue: M }) => p.has(M.id)).map(({ newValue: M }) => M);
      _.length > 0 && (u = u.map((M) => _.find((I) => I.id === M.id) || M));
    }
  }, { origin: q.REMOTE });
  const A = (w) => (p) => {
    const { created: _, deleted: M, updated: L } = p;
    _.forEach((I) => g("createAnnotation", I)), M.forEach((I) => g("deleteAnnotation", I)), w ? L.forEach((I) => g("updateAnnotation", I.oldValue, I.newValue)) : L.forEach((I) => g("updateAnnotation", I.newValue, I.oldValue));
  };
  return t.on("undo", A(!0)), t.on("redo", A(!1)), { on: m, off: d, emit: g };
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
      const { parsed: w, error: p } = n.parse(A);
      w ? o.addAnnotation(w, q.REMOTE) : console.error(p);
    } else
      o.addAnnotation(A, q.REMOTE);
  }, s = () => i.clear(), a = () => o.clear(), l = (A) => {
    const w = o.getAnnotation(A);
    return n && w ? n.serialize(w) : w;
  }, u = () => n ? o.all().map(n.serialize) : o.all(), h = () => {
    var A;
    const w = (((A = i.selected) == null ? void 0 : A.map((p) => p.id)) || []).map((p) => o.getAnnotation(p));
    return n ? w.map(n.serialize) : w;
  }, f = (A) => fetch(A).then((w) => w.json()).then((w) => (d(w), w)), m = (A) => {
    if (typeof A == "string") {
      const w = o.getAnnotation(A);
      return o.deleteAnnotation(A), n ? n.serialize(w) : w;
    } else {
      const w = n ? n.parse(A).parsed : A;
      return o.deleteAnnotation(w), A;
    }
  }, d = (A) => {
    if (n) {
      const { parsed: w, failed: p } = po(n)(A);
      p.length > 0 && console.warn(`Discarded ${p.length} invalid annotations`, p), o.bulkAddAnnotation(w, !0, q.REMOTE);
    } else
      o.bulkAddAnnotation(A, !0, q.REMOTE);
  }, g = (A) => {
    A ? i.setSelected(A) : i.clear();
  }, S = (A) => {
    if (n) {
      const w = n.parse(A).parsed, p = n.serialize(o.getAnnotation(w.id));
      return o.updateAnnotation(w), p;
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
    getSelected: h,
    loadAnnotations: f,
    redo: t.redo,
    removeAnnotation: m,
    setAnnotations: d,
    setSelected: g,
    undo: t.undo,
    updateAnnotation: S
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
const fr = (e, t = !1) => ({ parse: (i) => Lo(i, t), serialize: (i) => vo(i, e) }), Lo = (e, t = !1) => {
  const n = e.id || rn(), {
    creator: o,
    created: i,
    updatedBy: r,
    updated: s,
    body: a,
    ...l
  } = e, u = Mo(a, n), h = Array.isArray(e.target) ? e.target[0] : e.target, f = Array.isArray(h.selector) ? h.selector[0] : h.selector, m = f.type === "FragmentSelector" ? In(f, t) : f.type === "SvgSelector" ? zn(f) : void 0;
  return m ? {
    parsed: {
      ...l,
      id: n,
      bodies: u,
      target: {
        created: i ? new Date(i) : void 0,
        creator: an(o),
        ...l.target,
        annotation: n,
        selector: m
      }
    }
  } : {
    error: Error(`Unknown selector type: ${f.type}`)
  };
}, vo = (e, t) => {
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
function vt(e) {
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
      O(s, t, a), i || (r = j(t, "pointerdown", function() {
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
      s && v(t), i = !1, r();
    }
  };
}
function Oo(e) {
  let t, n, o, i, r, s, a, l, u, h, f = (
    /*geom*/
    e[4].points
  ), m = [];
  for (let d = 0; d < f.length; d += 1)
    m[d] = vt(Lt(e, f, d));
  return {
    c() {
      t = B("polygon"), i = Z(), r = B("polygon"), a = Z();
      for (let d = 0; d < m.length; d += 1)
        m[d].c();
      l = de(), c(t, "class", "a9s-outer"), c(t, "style", n = /*computedStyle*/
      e[1] ? "display:none;" : void 0), c(t, "points", o = /*geom*/
      e[4].points.map(Ot).join(" ")), c(r, "class", "a9s-inner a9s-shape-handle"), c(
        r,
        "style",
        /*computedStyle*/
        e[1]
      ), c(r, "points", s = /*geom*/
      e[4].points.map(kt).join(" "));
    },
    m(d, g) {
      O(d, t, g), O(d, i, g), O(d, r, g), O(d, a, g);
      for (let S = 0; S < m.length; S += 1)
        m[S] && m[S].m(d, g);
      O(d, l, g), u || (h = [
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
    p(d, g) {
      if (e = d, g & /*computedStyle*/
      2 && n !== (n = /*computedStyle*/
      e[1] ? "display:none;" : void 0) && c(t, "style", n), g & /*geom*/
      16 && o !== (o = /*geom*/
      e[4].points.map(Ot).join(" ")) && c(t, "points", o), g & /*computedStyle*/
      2 && c(
        r,
        "style",
        /*computedStyle*/
        e[1]
      ), g & /*geom*/
      16 && s !== (s = /*geom*/
      e[4].points.map(kt).join(" ")) && c(r, "points", s), g & /*geom, handleSize, grab, Handle*/
      1048) {
        f = /*geom*/
        e[4].points;
        let S;
        for (S = 0; S < f.length; S += 1) {
          const A = Lt(e, f, S);
          m[S] ? m[S].p(A, g) : (m[S] = vt(A), m[S].c(), m[S].m(l.parentNode, l));
        }
        for (; S < m.length; S += 1)
          m[S].d(1);
        m.length = f.length;
      }
    },
    d(d) {
      d && v(t), d && v(i), d && v(r), d && v(a), ht(m, d), d && v(l), u = !1, se(h);
    }
  };
}
function ko(e) {
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
          Oo,
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
      le(t.$$.fragment);
    },
    m(o, i) {
      ne(t, o, i), n = !0;
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
      oe(t, o);
    }
  };
}
const Ot = (e) => e.join(","), kt = (e) => e.join(",");
function Po(e, t, n) {
  let o, i, { shape: r } = t, { computedStyle: s = void 0 } = t, { transform: a } = t, { viewportScale: l = 1 } = t;
  const u = (d, g, S) => {
    let A;
    g === T.SHAPE ? A = d.geometry.points.map(([p, _]) => [p + S[0], _ + S[1]]) : A = d.geometry.points.map(([p, _], M) => g === T(M) ? [p + S[0], _ + S[1]] : [p, _]);
    const w = _e(A);
    return { ...d, geometry: { points: A, bounds: w } };
  };
  function h(d) {
    ee.call(this, e, d);
  }
  function f(d) {
    ee.call(this, e, d);
  }
  function m(d) {
    ee.call(this, e, d);
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
    h,
    f,
    m
  ];
}
class Io extends Q {
  constructor(t) {
    super(), J(this, t, Po, ko, K, {
      shape: 0,
      computedStyle: 1,
      transform: 2,
      viewportScale: 6
    });
  }
}
function Do(e) {
  let t, n, o, i, r, s, a, l, u, h, f, m, d, g, S, A, w, p, _, M, L, I, X, b, y, E, k, P, C, U, R, be, Oe, Y, $, W, me, ae, te, Ce, Ue, He, Qe, ie, Fe, Ge, Ve, xe, re, ze, je, qe, $e, _t;
  return {
    c() {
      t = B("rect"), a = Z(), l = B("rect"), d = Z(), g = B("rect"), p = Z(), _ = B("rect"), X = Z(), b = B("rect"), P = Z(), C = B("rect"), Oe = Z(), Y = B("circle"), ae = Z(), te = B("circle"), Qe = Z(), ie = B("circle"), xe = Z(), re = B("circle"), c(t, "class", "a9s-outer"), c(t, "style", n = /*computedStyle*/
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
      e[4].x), c(l, "y", h = /*geom*/
      e[4].y), c(l, "width", f = /*geom*/
      e[4].w), c(l, "height", m = /*geom*/
      e[4].h), c(g, "class", "a9s-edge-handle a9s-edge-handle-top"), c(g, "x", S = /*geom*/
      e[4].x), c(g, "y", A = /*geom*/
      e[4].y), c(g, "height", 1), c(g, "width", w = /*geom*/
      e[4].w), c(_, "class", "a9s-edge-handle a9s-edge-handle-right"), c(_, "x", M = /*geom*/
      e[4].x + /*geom*/
      e[4].w), c(_, "y", L = /*geom*/
      e[4].y), c(_, "height", I = /*geom*/
      e[4].h), c(_, "width", 1), c(b, "class", "a9s-edge-handle a9s-edge-handle-bottom"), c(b, "x", y = /*geom*/
      e[4].x), c(b, "y", E = /*geom*/
      e[4].y + /*geom*/
      e[4].h), c(b, "height", 1), c(b, "width", k = /*geom*/
      e[4].w), c(C, "class", "a9s-edge-handle a9s-edge-handle-left"), c(C, "x", U = /*geom*/
      e[4].x), c(C, "y", R = /*geom*/
      e[4].y), c(C, "height", be = /*geom*/
      e[4].h), c(C, "width", 1), c(Y, "class", "a9s-corner-handle a9s-corner-handle-topleft"), c(Y, "cx", $ = /*geom*/
      e[4].x), c(Y, "cy", W = /*geom*/
      e[4].y), c(Y, "r", me = /*handleSize*/
      e[3] / 2), c(te, "class", "a9s-corner-handle a9s-corner-handle-topright"), c(te, "cx", Ce = /*geom*/
      e[4].x + /*geom*/
      e[4].w), c(te, "cy", Ue = /*geom*/
      e[4].y), c(te, "r", He = /*handleSize*/
      e[3] / 2), c(ie, "class", "a9s-corner-handle a9s-corner-handle-bottomright"), c(ie, "cx", Fe = /*geom*/
      e[4].x + /*geom*/
      e[4].w), c(ie, "cy", Ge = /*geom*/
      e[4].y + /*geom*/
      e[4].h), c(ie, "r", Ve = /*handleSize*/
      e[3] / 2), c(re, "class", "a9s-corner-handle a9s-corner-handle-bottomleft"), c(re, "cx", ze = /*geom*/
      e[4].x), c(re, "cy", je = /*geom*/
      e[4].y + /*geom*/
      e[4].h), c(re, "r", qe = /*handleSize*/
      e[3] / 2);
    },
    m(N, D) {
      O(N, t, D), O(N, a, D), O(N, l, D), O(N, d, D), O(N, g, D), O(N, p, D), O(N, _, D), O(N, X, D), O(N, b, D), O(N, P, D), O(N, C, D), O(N, Oe, D), O(N, Y, D), O(N, ae, D), O(N, te, D), O(N, Qe, D), O(N, ie, D), O(N, xe, D), O(N, re, D), $e || (_t = [
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
        j(g, "pointerdown", function() {
          V(
            /*grab*/
            e[10](T.TOP)
          ) && e[10](T.TOP).apply(this, arguments);
        }),
        j(_, "pointerdown", function() {
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
        j(C, "pointerdown", function() {
          V(
            /*grab*/
            e[10](T.LEFT)
          ) && e[10](T.LEFT).apply(this, arguments);
        }),
        j(Y, "pointerdown", function() {
          V(
            /*grab*/
            e[10](T.TOP_LEFT)
          ) && e[10](T.TOP_LEFT).apply(this, arguments);
        }),
        j(te, "pointerdown", function() {
          V(
            /*grab*/
            e[10](T.TOP_RIGHT)
          ) && e[10](T.TOP_RIGHT).apply(this, arguments);
        }),
        j(ie, "pointerdown", function() {
          V(
            /*grab*/
            e[10](T.BOTTOM_RIGHT)
          ) && e[10](T.BOTTOM_RIGHT).apply(this, arguments);
        }),
        j(re, "pointerdown", function() {
          V(
            /*grab*/
            e[10](T.BOTTOM_LEFT)
          ) && e[10](T.BOTTOM_LEFT).apply(this, arguments);
        })
      ], $e = !0);
    },
    p(N, D) {
      e = N, D & /*computedStyle*/
      2 && n !== (n = /*computedStyle*/
      e[1] ? "display:none;" : void 0) && c(t, "style", n), D & /*geom*/
      16 && o !== (o = /*geom*/
      e[4].x) && c(t, "x", o), D & /*geom*/
      16 && i !== (i = /*geom*/
      e[4].y) && c(t, "y", i), D & /*geom*/
      16 && r !== (r = /*geom*/
      e[4].w) && c(t, "width", r), D & /*geom*/
      16 && s !== (s = /*geom*/
      e[4].h) && c(t, "height", s), D & /*computedStyle*/
      2 && c(
        l,
        "style",
        /*computedStyle*/
        e[1]
      ), D & /*geom*/
      16 && u !== (u = /*geom*/
      e[4].x) && c(l, "x", u), D & /*geom*/
      16 && h !== (h = /*geom*/
      e[4].y) && c(l, "y", h), D & /*geom*/
      16 && f !== (f = /*geom*/
      e[4].w) && c(l, "width", f), D & /*geom*/
      16 && m !== (m = /*geom*/
      e[4].h) && c(l, "height", m), D & /*geom*/
      16 && S !== (S = /*geom*/
      e[4].x) && c(g, "x", S), D & /*geom*/
      16 && A !== (A = /*geom*/
      e[4].y) && c(g, "y", A), D & /*geom*/
      16 && w !== (w = /*geom*/
      e[4].w) && c(g, "width", w), D & /*geom*/
      16 && M !== (M = /*geom*/
      e[4].x + /*geom*/
      e[4].w) && c(_, "x", M), D & /*geom*/
      16 && L !== (L = /*geom*/
      e[4].y) && c(_, "y", L), D & /*geom*/
      16 && I !== (I = /*geom*/
      e[4].h) && c(_, "height", I), D & /*geom*/
      16 && y !== (y = /*geom*/
      e[4].x) && c(b, "x", y), D & /*geom*/
      16 && E !== (E = /*geom*/
      e[4].y + /*geom*/
      e[4].h) && c(b, "y", E), D & /*geom*/
      16 && k !== (k = /*geom*/
      e[4].w) && c(b, "width", k), D & /*geom*/
      16 && U !== (U = /*geom*/
      e[4].x) && c(C, "x", U), D & /*geom*/
      16 && R !== (R = /*geom*/
      e[4].y) && c(C, "y", R), D & /*geom*/
      16 && be !== (be = /*geom*/
      e[4].h) && c(C, "height", be), D & /*geom*/
      16 && $ !== ($ = /*geom*/
      e[4].x) && c(Y, "cx", $), D & /*geom*/
      16 && W !== (W = /*geom*/
      e[4].y) && c(Y, "cy", W), D & /*handleSize*/
      8 && me !== (me = /*handleSize*/
      e[3] / 2) && c(Y, "r", me), D & /*geom*/
      16 && Ce !== (Ce = /*geom*/
      e[4].x + /*geom*/
      e[4].w) && c(te, "cx", Ce), D & /*geom*/
      16 && Ue !== (Ue = /*geom*/
      e[4].y) && c(te, "cy", Ue), D & /*handleSize*/
      8 && He !== (He = /*handleSize*/
      e[3] / 2) && c(te, "r", He), D & /*geom*/
      16 && Fe !== (Fe = /*geom*/
      e[4].x + /*geom*/
      e[4].w) && c(ie, "cx", Fe), D & /*geom*/
      16 && Ge !== (Ge = /*geom*/
      e[4].y + /*geom*/
      e[4].h) && c(ie, "cy", Ge), D & /*handleSize*/
      8 && Ve !== (Ve = /*handleSize*/
      e[3] / 2) && c(ie, "r", Ve), D & /*geom*/
      16 && ze !== (ze = /*geom*/
      e[4].x) && c(re, "cx", ze), D & /*geom*/
      16 && je !== (je = /*geom*/
      e[4].y + /*geom*/
      e[4].h) && c(re, "cy", je), D & /*handleSize*/
      8 && qe !== (qe = /*handleSize*/
      e[3] / 2) && c(re, "r", qe);
    },
    d(N) {
      N && v(t), N && v(a), N && v(l), N && v(d), N && v(g), N && v(p), N && v(_), N && v(X), N && v(b), N && v(P), N && v(C), N && v(Oe), N && v(Y), N && v(ae), N && v(te), N && v(Qe), N && v(ie), N && v(xe), N && v(re), $e = !1, se(_t);
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
      le(t.$$.fragment);
    },
    m(o, i) {
      ne(t, o, i), n = !0;
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
      oe(t, o);
    }
  };
}
function Yo(e, t, n) {
  let o, i, { shape: r } = t, { computedStyle: s = void 0 } = t, { transform: a } = t, { viewportScale: l = 1 } = t;
  const u = (d, g, S) => {
    const A = d.geometry.bounds;
    let [w, p] = [A.minX, A.minY], [_, M] = [A.maxX, A.maxY];
    const [L, I] = S;
    if (g === T.SHAPE)
      w += L, _ += L, p += I, M += I;
    else {
      switch (g) {
        case T.TOP:
        case T.TOP_LEFT:
        case T.TOP_RIGHT: {
          p += I;
          break;
        }
        case T.BOTTOM:
        case T.BOTTOM_LEFT:
        case T.BOTTOM_RIGHT: {
          M += I;
          break;
        }
      }
      switch (g) {
        case T.LEFT:
        case T.TOP_LEFT:
        case T.BOTTOM_LEFT: {
          w += L;
          break;
        }
        case T.RIGHT:
        case T.TOP_RIGHT:
        case T.BOTTOM_RIGHT: {
          _ += L;
          break;
        }
      }
    }
    const X = Math.min(w, _), b = Math.min(p, M), y = Math.abs(_ - w), E = Math.abs(M - p);
    return {
      ...d,
      geometry: {
        x: X,
        y: b,
        w: y,
        h: E,
        bounds: {
          minX: X,
          minY: b,
          maxX: X + y,
          maxY: b + E
        }
      }
    };
  };
  function h(d) {
    ee.call(this, e, d);
  }
  function f(d) {
    ee.call(this, e, d);
  }
  function m(d) {
    ee.call(this, e, d);
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
    h,
    f,
    m
  ];
}
class Xo extends Q {
  constructor(t) {
    super(), J(this, t, Yo, Bo, K, {
      shape: 0,
      computedStyle: 1,
      transform: 2,
      viewportScale: 6
    });
  }
}
function Ro(e) {
  let t, n, o, i, r, s, a, l, u, h, f, m, d, g, S, A, w, p, _, M, L, I, X, b, y, E, k, P, C;
  return {
    c() {
      t = B("ellipse"), s = Z(), a = B("ellipse"), m = Z(), d = B("rect"), A = Z(), w = B("rect"), M = Z(), L = B("rect"), b = Z(), y = B("rect"), c(t, "class", "a9s-outer"), c(t, "cx", n = /*geom*/
      e[3].cx), c(t, "cy", o = /*geom*/
      e[3].cy), c(t, "rx", i = /*geom*/
      e[3].rx), c(t, "ry", r = /*geom*/
      e[3].ry), c(a, "class", "a9s-inner a9s-shape-handle"), c(a, "cx", l = /*geom*/
      e[3].cx), c(a, "cy", u = /*geom*/
      e[3].cy), c(a, "rx", h = /*geom*/
      e[3].rx), c(a, "ry", f = /*geom*/
      e[3].ry), c(d, "class", "a9s-corner-handle a9s-corner-top"), c(d, "x", g = /*geom*/
      e[3].cx - /*handleSize*/
      e[2] / 2), c(d, "y", S = /*geom*/
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
      ), c(w, "class", "a9s-corner-handle a9s-corner-handle-right"), c(w, "x", p = /*geom*/
      e[3].cx + /*geom*/
      e[3].rx - /*handleSize*/
      e[2] / 2), c(w, "y", _ = /*geom*/
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
      ), c(L, "class", "a9s-corner-handle a9s-corner-handle-bottom"), c(L, "x", I = /*geom*/
      e[3].cx - /*handleSize*/
      e[2] / 2), c(L, "y", X = /*geom*/
      e[3].cy + /*geom*/
      e[3].ry - /*handleSize*/
      e[2] / 2), c(
        L,
        "height",
        /*handleSize*/
        e[2]
      ), c(
        L,
        "width",
        /*handleSize*/
        e[2]
      ), c(y, "class", "a9s-corner-handle a9s-corner-handle-left"), c(y, "x", E = /*geom*/
      e[3].cx - /*geom*/
      e[3].rx - /*handleSize*/
      e[2] / 2), c(y, "y", k = /*geom*/
      e[3].cy - /*handleSize*/
      e[2] / 2), c(
        y,
        "height",
        /*handleSize*/
        e[2]
      ), c(
        y,
        "width",
        /*handleSize*/
        e[2]
      );
    },
    m(U, R) {
      O(U, t, R), O(U, s, R), O(U, a, R), O(U, m, R), O(U, d, R), O(U, A, R), O(U, w, R), O(U, M, R), O(U, L, R), O(U, b, R), O(U, y, R), P || (C = [
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
        j(L, "pointerdown", function() {
          V(
            /*grab*/
            e[9](T.BOTTOM)
          ) && e[9](T.BOTTOM).apply(this, arguments);
        }),
        j(y, "pointerdown", function() {
          V(
            /*grab*/
            e[9](T.LEFT)
          ) && e[9](T.LEFT).apply(this, arguments);
        })
      ], P = !0);
    },
    p(U, R) {
      e = U, R & /*geom*/
      8 && n !== (n = /*geom*/
      e[3].cx) && c(t, "cx", n), R & /*geom*/
      8 && o !== (o = /*geom*/
      e[3].cy) && c(t, "cy", o), R & /*geom*/
      8 && i !== (i = /*geom*/
      e[3].rx) && c(t, "rx", i), R & /*geom*/
      8 && r !== (r = /*geom*/
      e[3].ry) && c(t, "ry", r), R & /*geom*/
      8 && l !== (l = /*geom*/
      e[3].cx) && c(a, "cx", l), R & /*geom*/
      8 && u !== (u = /*geom*/
      e[3].cy) && c(a, "cy", u), R & /*geom*/
      8 && h !== (h = /*geom*/
      e[3].rx) && c(a, "rx", h), R & /*geom*/
      8 && f !== (f = /*geom*/
      e[3].ry) && c(a, "ry", f), R & /*geom, handleSize*/
      12 && g !== (g = /*geom*/
      e[3].cx - /*handleSize*/
      e[2] / 2) && c(d, "x", g), R & /*geom, handleSize*/
      12 && S !== (S = /*geom*/
      e[3].cy - /*handleSize*/
      e[2] / 2 - /*geom*/
      e[3].ry) && c(d, "y", S), R & /*handleSize*/
      4 && c(
        d,
        "height",
        /*handleSize*/
        e[2]
      ), R & /*handleSize*/
      4 && c(
        d,
        "width",
        /*handleSize*/
        e[2]
      ), R & /*geom, handleSize*/
      12 && p !== (p = /*geom*/
      e[3].cx + /*geom*/
      e[3].rx - /*handleSize*/
      e[2] / 2) && c(w, "x", p), R & /*geom, handleSize*/
      12 && _ !== (_ = /*geom*/
      e[3].cy - /*handleSize*/
      e[2] / 2) && c(w, "y", _), R & /*handleSize*/
      4 && c(
        w,
        "height",
        /*handleSize*/
        e[2]
      ), R & /*handleSize*/
      4 && c(
        w,
        "width",
        /*handleSize*/
        e[2]
      ), R & /*geom, handleSize*/
      12 && I !== (I = /*geom*/
      e[3].cx - /*handleSize*/
      e[2] / 2) && c(L, "x", I), R & /*geom, handleSize*/
      12 && X !== (X = /*geom*/
      e[3].cy + /*geom*/
      e[3].ry - /*handleSize*/
      e[2] / 2) && c(L, "y", X), R & /*handleSize*/
      4 && c(
        L,
        "height",
        /*handleSize*/
        e[2]
      ), R & /*handleSize*/
      4 && c(
        L,
        "width",
        /*handleSize*/
        e[2]
      ), R & /*geom, handleSize*/
      12 && E !== (E = /*geom*/
      e[3].cx - /*geom*/
      e[3].rx - /*handleSize*/
      e[2] / 2) && c(y, "x", E), R & /*geom, handleSize*/
      12 && k !== (k = /*geom*/
      e[3].cy - /*handleSize*/
      e[2] / 2) && c(y, "y", k), R & /*handleSize*/
      4 && c(
        y,
        "height",
        /*handleSize*/
        e[2]
      ), R & /*handleSize*/
      4 && c(
        y,
        "width",
        /*handleSize*/
        e[2]
      );
    },
    d(U) {
      U && v(t), U && v(s), U && v(a), U && v(m), U && v(d), U && v(A), U && v(w), U && v(M), U && v(L), U && v(b), U && v(y), P = !1, se(C);
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
      le(t.$$.fragment);
    },
    m(o, i) {
      ne(t, o, i), n = !0;
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
      oe(t, o);
    }
  };
}
function Co(e, t, n) {
  let o, i, { shape: r } = t, { transform: s } = t, { viewportScale: a = 1 } = t;
  const l = (m, d, g) => {
    const S = m.geometry.bounds;
    let [A, w] = [S.minX, S.minY], [p, _] = [S.maxX, S.maxY];
    const [M, L] = g;
    if (d === T.SHAPE)
      A += M, p += M, w += L, _ += L;
    else
      switch (d) {
        case T.TOP: {
          w += L;
          break;
        }
        case T.BOTTOM: {
          _ += L;
          break;
        }
        case T.LEFT: {
          A += M;
          break;
        }
        case T.RIGHT: {
          p += M;
          break;
        }
      }
    const I = Math.min(A, p), X = Math.min(w, _), b = Math.abs(p - A), y = Math.abs(_ - w), E = (A + p) / 2, k = (w + _) / 2, P = b / 2, C = y / 2;
    return {
      ...m,
      geometry: {
        ...m.geometry,
        cx: E,
        cy: k,
        rx: P,
        ry: C,
        bounds: {
          minX: I,
          minY: X,
          maxX: I + b,
          maxY: X + y
        }
      }
    };
  };
  function u(m) {
    ee.call(this, e, m);
  }
  function h(m) {
    ee.call(this, e, m);
  }
  function f(m) {
    ee.call(this, e, m);
  }
  return e.$$set = (m) => {
    "shape" in m && n(0, r = m.shape), "transform" in m && n(1, s = m.transform), "viewportScale" in m && n(5, a = m.viewportScale);
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
    h,
    f
  ];
}
class Uo extends Q {
  constructor(t) {
    super(), J(this, t, Co, No, K, { shape: 0, transform: 1, viewportScale: 5 });
  }
}
const we = (e, t, n) => {
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
      O(i, t, r), n || (o = j(t, "pointerdown", function() {
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
      i && v(t), n = !1, o();
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
      le(t.$$.fragment);
    },
    m(o, i) {
      ne(t, o, i), n = !0;
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
      oe(t, o);
    }
  };
}
function Go(e, t, n) {
  let o, i, r, { shape: s } = t, { annotation: a } = t, { transform: l } = t, { viewportScale: u = 1 } = t, { style: h = void 0 } = t, f = { fillOpacity: 1 };
  const m = (A, w, p) => {
    let _;
    w === T.SHAPE && (_ = A.geometry.points.map(([L, I, X]) => [L + p[0], I + p[1], X]));
    const M = _e(_.map((L) => [L[0], L[1]]));
    return { ...A, geometry: { points: _, bounds: M } };
  };
  function d(A) {
    ee.call(this, e, A);
  }
  function g(A) {
    ee.call(this, e, A);
  }
  function S(A) {
    ee.call(this, e, A);
  }
  return e.$$set = (A) => {
    "shape" in A && n(0, s = A.shape), "annotation" in A && n(5, a = A.annotation), "transform" in A && n(1, l = A.transform), "viewportScale" in A && n(6, u = A.viewportScale), "style" in A && n(7, h = A.style);
  }, e.$$.update = () => {
    e.$$.dirty & /*shape*/
    1 && n(8, o = s.geometry), e.$$.dirty & /*viewportScale*/
    64, e.$$.dirty & /*annotation, style*/
    160 && n(3, i = we(a, h, f)), e.$$.dirty & /*geom*/
    256 && n(2, r = Xe(o.points, gt, !0));
  }, [
    s,
    l,
    r,
    i,
    m,
    a,
    u,
    h,
    o,
    d,
    g,
    S
  ];
}
class Vo extends Q {
  constructor(t) {
    super(), J(this, t, Go, Fo, K, {
      shape: 0,
      annotation: 5,
      transform: 1,
      viewportScale: 6,
      style: 7
    });
  }
}
function zo(e) {
  let t, n, o, i, r, s, a, l, u, h, f, m, d, g, S, A, w, p, _, M, L, I, X, b;
  return {
    c() {
      t = B("line"), a = Z(), l = B("line"), d = Z(), g = B("circle"), p = Z(), _ = B("circle"), c(t, "class", "a9s-outer"), c(t, "style", n = /*computedStyle*/
      e[1] ? "display:none;" : void 0), c(t, "x1", o = /*geom*/
      e[4].x1), c(t, "y1", i = /*geom*/
      e[4].y1), c(t, "x2", r = /*geom*/
      e[4].x2), c(t, "y2", s = /*geom*/
      e[4].y2), c(l, "class", "a9s-inner a9s-shape-handle"), c(
        l,
        "style",
        /*computedStyle*/
        e[1]
      ), c(l, "x1", u = /*geom*/
      e[4].x1), c(l, "y1", h = /*geom*/
      e[4].y1), c(l, "x2", f = /*geom*/
      e[4].x2), c(l, "y2", m = /*geom*/
      e[4].y2), c(g, "class", "a9s-corner-handle a9s-shape-handle"), c(g, "cx", S = /*geom*/
      e[4].x1), c(g, "cy", A = /*geom*/
      e[4].y1), c(g, "r", w = /*handleSize*/
      e[3] / 2), c(_, "class", "a9s-corner-handle a9s-shape-handle"), c(_, "cx", M = /*geom*/
      e[4].x2), c(_, "cy", L = /*geom*/
      e[4].y2), c(_, "r", I = /*handleSize*/
      e[3] / 2);
    },
    m(y, E) {
      O(y, t, E), O(y, a, E), O(y, l, E), O(y, d, E), O(y, g, E), O(y, p, E), O(y, _, E), X || (b = [
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
        j(g, "pointerdown", function() {
          V(
            /*grab*/
            e[10](T.LEFT)
          ) && e[10](T.LEFT).apply(this, arguments);
        }),
        j(_, "pointerdown", function() {
          V(
            /*grab*/
            e[10](T.RIGHT)
          ) && e[10](T.RIGHT).apply(this, arguments);
        })
      ], X = !0);
    },
    p(y, E) {
      e = y, E & /*computedStyle*/
      2 && n !== (n = /*computedStyle*/
      e[1] ? "display:none;" : void 0) && c(t, "style", n), E & /*geom*/
      16 && o !== (o = /*geom*/
      e[4].x1) && c(t, "x1", o), E & /*geom*/
      16 && i !== (i = /*geom*/
      e[4].y1) && c(t, "y1", i), E & /*geom*/
      16 && r !== (r = /*geom*/
      e[4].x2) && c(t, "x2", r), E & /*geom*/
      16 && s !== (s = /*geom*/
      e[4].y2) && c(t, "y2", s), E & /*computedStyle*/
      2 && c(
        l,
        "style",
        /*computedStyle*/
        e[1]
      ), E & /*geom*/
      16 && u !== (u = /*geom*/
      e[4].x1) && c(l, "x1", u), E & /*geom*/
      16 && h !== (h = /*geom*/
      e[4].y1) && c(l, "y1", h), E & /*geom*/
      16 && f !== (f = /*geom*/
      e[4].x2) && c(l, "x2", f), E & /*geom*/
      16 && m !== (m = /*geom*/
      e[4].y2) && c(l, "y2", m), E & /*geom*/
      16 && S !== (S = /*geom*/
      e[4].x1) && c(g, "cx", S), E & /*geom*/
      16 && A !== (A = /*geom*/
      e[4].y1) && c(g, "cy", A), E & /*handleSize*/
      8 && w !== (w = /*handleSize*/
      e[3] / 2) && c(g, "r", w), E & /*geom*/
      16 && M !== (M = /*geom*/
      e[4].x2) && c(_, "cx", M), E & /*geom*/
      16 && L !== (L = /*geom*/
      e[4].y2) && c(_, "cy", L), E & /*handleSize*/
      8 && I !== (I = /*handleSize*/
      e[3] / 2) && c(_, "r", I);
    },
    d(y) {
      y && v(t), y && v(a), y && v(l), y && v(d), y && v(g), y && v(p), y && v(_), X = !1, se(b);
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
      le(t.$$.fragment);
    },
    m(o, i) {
      ne(t, o, i), n = !0;
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
      oe(t, o);
    }
  };
}
function qo(e, t, n) {
  let o, i, { shape: r } = t, { computedStyle: s = void 0 } = t, { transform: a } = t, { viewportScale: l = 1 } = t;
  const u = (d, g, S) => {
    d.geometry.bounds;
    let A = d.geometry.x1, w = d.geometry.x2, p = d.geometry.y1, _ = d.geometry.y2;
    const [M, L] = S;
    if (g === T.SHAPE)
      A += M, w += M, p += L, _ += L;
    else
      switch (g) {
        case T.LEFT: {
          A += M, p += L;
          break;
        }
        case T.RIGHT: {
          w += M, _ += L;
          break;
        }
      }
    return {
      ...d,
      geometry: {
        x1: A,
        y1: p,
        x2: w,
        y2: _,
        bounds: {
          minX: Math.min(A, w),
          minY: Math.min(p, _),
          maxX: Math.max(A, w),
          maxY: Math.max(p, _)
        }
      }
    };
  };
  function h(d) {
    ee.call(this, e, d);
  }
  function f(d) {
    ee.call(this, e, d);
  }
  function m(d) {
    ee.call(this, e, d);
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
    h,
    f,
    m
  ];
}
class Ko extends Q {
  constructor(t) {
    super(), J(this, t, qo, jo, K, {
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
  [F.LINE, Ko]
]), Pt = (e) => cn.get(e.type), Wo = (e, t) => cn.set(e, t), T = (e) => `HANDLE-${e}`;
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
  ), s = mn(
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
      O(a, t, l), s && s.m(t, null), n = !0, o || (i = [
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
      a && v(t), s && s.d(a), o = !1, se(i);
    }
  };
}
function Qo(e, t, n) {
  let { $$slots: o = {}, $$scope: i } = t;
  const r = he();
  let { shape: s } = t, { editor: a } = t, { transform: l } = t, u = null, h, f = null;
  const m = (S) => (A) => {
    u = S, h = l.elementToImage(A.offsetX, A.offsetY), f = s, A.target.setPointerCapture(A.pointerId), r("grab");
  }, d = (S) => {
    if (u) {
      const [A, w] = l.elementToImage(S.offsetX, S.offsetY), p = [A - h[0], w - h[1]];
      n(3, s = a(f, u, p)), r("change", s);
    }
  }, g = (S) => {
    S.target.releasePointerCapture(S.pointerId), u = null, f = s, r("release");
  };
  return e.$$set = (S) => {
    "shape" in S && n(3, s = S.shape), "editor" in S && n(4, a = S.editor), "transform" in S && n(5, l = S.transform), "$$scope" in S && n(6, i = S.$$scope);
  }, [m, d, g, s, a, l, i, o];
}
class Ne extends Q {
  constructor(t) {
    super(), J(this, t, Qo, Jo, K, { shape: 3, editor: 4, transform: 5 });
  }
}
function xo(e, t, n) {
  let o;
  const i = he();
  let { annotation: r } = t, { editor: s } = t, { style: a = void 0 } = t, { target: l } = t, { transform: u } = t, { viewportScale: h } = t, f;
  return ge(() => (n(6, f = new s({
    target: l,
    props: {
      shape: r.target.selector,
      computedStyle: o,
      transform: u,
      viewportScale: h
    }
  })), f.$on("change", (m) => {
    f.$$set({ shape: m.detail }), i("change", m.detail);
  }), f.$on("grab", (m) => i("grab", m.detail)), f.$on("release", (m) => i("release", m.detail)), () => {
    f.$destroy();
  })), e.$$set = (m) => {
    "annotation" in m && n(0, r = m.annotation), "editor" in m && n(1, s = m.editor), "style" in m && n(2, a = m.style), "target" in m && n(3, l = m.target), "transform" in m && n(4, u = m.transform), "viewportScale" in m && n(5, h = m.viewportScale);
  }, e.$$.update = () => {
    e.$$.dirty & /*annotation, style*/
    5 && (o = we(r, a)), e.$$.dirty & /*annotation, editorComponent*/
    65 && r && (f == null || f.$set({ shape: r.target.selector })), e.$$.dirty & /*editorComponent, transform*/
    80 && f && f.$set({ transform: u }), e.$$.dirty & /*editorComponent, viewportScale*/
    96 && f && f.$set({ viewportScale: h });
  }, [r, s, a, l, u, h, f];
}
class $o extends Q {
  constructor(t) {
    super(), J(this, t, xo, null, K, {
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
  const o = he();
  let { drawingMode: i } = t, { target: r } = t, { tool: s } = t, { transform: a } = t, { viewportScale: l } = t, u;
  return ge(() => {
    const h = r.closest("svg"), f = [], m = (d, g, S) => {
      h.addEventListener(d, g, S), f.push(() => h.removeEventListener(d, g, S));
    };
    return n(5, u = new s({
      target: r,
      props: {
        addEventListener: m,
        drawingMode: i,
        transform: a,
        viewportScale: l
      }
    })), u.$on("create", (d) => o("create", d.detail)), () => {
      f.forEach((d) => d()), u.$destroy();
    };
  }), e.$$set = (h) => {
    "drawingMode" in h && n(0, i = h.drawingMode), "target" in h && n(1, r = h.target), "tool" in h && n(2, s = h.tool), "transform" in h && n(3, a = h.transform), "viewportScale" in h && n(4, l = h.viewportScale);
  }, e.$$.update = () => {
    e.$$.dirty & /*toolComponent, transform*/
    40 && u && u.$set({ transform: a }), e.$$.dirty & /*toolComponent, viewportScale*/
    48 && u && u.$set({ viewportScale: l });
  }, [i, r, s, a, l, u];
}
class ti extends Q {
  constructor(t) {
    super(), J(this, t, ei, null, K, {
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
      O(o, t, i), O(o, n, i);
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
      o && v(t), o && v(n);
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
      O(o, t, i), n && n.m(t, null);
    },
    p(o, [i]) {
      /*origin*/
      o[0] ? n ? n.p(o, i) : (n = Dt(o), n.c(), n.m(t, null)) : n && (n.d(1), n = null);
    },
    i: z,
    o: z,
    d(o) {
      o && v(t), n && n.d();
    }
  };
}
function oi(e, t, n) {
  const o = he();
  let { addEventListener: i } = t, { drawingMode: r } = t, { transform: s } = t, a, l, u, h, f, m, d;
  const g = (p) => {
    a = performance.now(), r === "drag" && (n(0, l = s.elementToImage(p.offsetX, p.offsetY)), u = l, n(1, h = l[0]), n(2, f = l[1]), n(3, m = 1), n(4, d = 1));
  }, S = (p) => {
    l && (u = s.elementToImage(p.offsetX, p.offsetY), n(1, h = Math.min(u[0], l[0])), n(2, f = Math.min(u[1], l[1])), n(3, m = Math.abs(u[0] - l[0])), n(4, d = Math.abs(u[1] - l[1])));
  }, A = (p) => {
    const _ = performance.now() - a;
    if (r === "click") {
      if (_ > 300)
        return;
      p.stopPropagation(), l ? w() : (n(0, l = s.elementToImage(p.offsetX, p.offsetY)), u = l, n(1, h = l[0]), n(2, f = l[1]), n(3, m = 1), n(4, d = 1));
    } else
      l && (_ > 300 || m * d > 100 ? (p.stopPropagation(), w()) : (n(0, l = null), u = null));
  }, w = () => {
    if (m * d > 15) {
      const p = {
        type: F.RECTANGLE,
        geometry: {
          bounds: {
            minX: h,
            minY: f,
            maxX: h + m,
            maxY: f + d
          },
          x: h,
          y: f,
          w: m,
          h: d
        }
      };
      o("create", p);
    }
    n(0, l = null), u = null;
  };
  return ge(() => {
    i("pointerdown", g), i("pointermove", S), i("pointerup", A, !0);
  }), e.$$set = (p) => {
    "addEventListener" in p && n(5, i = p.addEventListener), "drawingMode" in p && n(6, r = p.drawingMode), "transform" in p && n(7, s = p.transform);
  }, [l, h, f, m, d, i, r, s];
}
class ii extends Q {
  constructor(t) {
    super(), J(this, t, oi, ni, K, {
      addEventListener: 5,
      drawingMode: 6,
      transform: 7
    });
  }
}
const ot = (e, t) => {
  const n = Math.abs(t[0] - e[0]), o = Math.abs(t[1] - e[1]);
  return Math.sqrt(Math.pow(n, 2) + Math.pow(o, 2));
}, Se = [];
function ri(e, t = z) {
  let n;
  const o = /* @__PURE__ */ new Set();
  function i(a) {
    if (K(e, a) && (e = a, n)) {
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
      t = B("polygon"), o = B("polygon"), s && s.c(), r = de(), c(t, "class", "a9s-outer"), c(t, "points", n = /*coords*/
      e[15]), c(o, "class", "a9s-inner"), c(o, "points", i = /*coords*/
      e[15]);
    },
    m(a, l) {
      O(a, t, l), O(a, o, l), s && s.m(a, l), O(a, r, l);
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
      a && v(t), a && v(o), s && s.d(a), a && v(r);
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
      O(i, t, r);
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
      i && v(t);
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
      O(o, t, i), n && n.m(t, null);
    },
    p(o, [i]) {
      /*cursor*/
      o[1] ? n ? n.p(it(o), i) : (n = Bt(it(o)), n.c(), n.m(t, null)) : n && (n.d(1), n = null);
    },
    i: z,
    o: z,
    d(o) {
      o && v(t), n && n.d();
    }
  };
}
const ci = 20;
function fi(e, t, n) {
  let o;
  const i = he();
  let { addEventListener: r } = t, { drawingMode: s } = t, { transform: a } = t, { viewportScale: l = 1 } = t, u, h = [], f = null, m = !1;
  const d = (p) => {
    const { timeStamp: _, offsetX: M, offsetY: L } = p;
    if (u = { timeStamp: _, offsetX: M, offsetY: L }, s === "drag" && h.length === 0) {
      const I = a.elementToImage(p.offsetX, p.offsetY);
      h.push(I), n(1, f = I);
    }
  }, g = (p) => {
    if (h.length > 0 && (n(1, f = a.elementToImage(p.offsetX, p.offsetY)), h.length > 2)) {
      const _ = ot(f, h[0]) * l;
      n(2, m = _ < ci);
    }
  }, S = (p) => {
    if (s === "click") {
      const _ = p.timeStamp - u.timeStamp, M = ot([u.offsetX, u.offsetY], [p.offsetX, p.offsetY]);
      if (_ > 300 || M > 15)
        return;
      if (m)
        w();
      else if (h.length === 0) {
        const L = a.elementToImage(p.offsetX, p.offsetY);
        h.push(L), n(1, f = L);
      } else
        h.push(f);
    } else {
      if (h.length === 1 && ot(h[0], f) <= 4) {
        n(0, h = []), n(1, f = null);
        return;
      }
      p.stopImmediatePropagation(), m ? w() : h.push(f);
    }
  }, A = () => {
    const p = [...h, f], _ = {
      type: F.POLYGON,
      geometry: { bounds: _e(p), points: p }
    };
    ft(_) > 4 && (n(0, h = []), n(1, f = null), i("create", _));
  }, w = () => {
    const p = {
      type: F.POLYGON,
      geometry: {
        bounds: _e(h),
        points: [...h]
      }
    };
    n(0, h = []), n(1, f = null), i("create", p);
  };
  return ge(() => {
    r("pointerdown", d, !0), r("pointermove", g), r("pointerup", S, !0), r("dblclick", A, !0);
  }), e.$$set = (p) => {
    "addEventListener" in p && n(4, r = p.addEventListener), "drawingMode" in p && n(5, s = p.drawingMode), "transform" in p && n(6, a = p.transform), "viewportScale" in p && n(7, l = p.viewportScale);
  }, e.$$.update = () => {
    e.$$.dirty & /*viewportScale*/
    128 && n(3, o = 10 / l);
  }, [
    h,
    f,
    m,
    o,
    r,
    s,
    a,
    l
  ];
}
class ui extends Q {
  constructor(t) {
    super(), J(this, t, fi, ai, K, {
      addEventListener: 4,
      drawingMode: 5,
      transform: 6,
      viewportScale: 7
    });
  }
}
function Xt(e) {
  let t, n, o, i, r, s, a, l, u, h;
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
      e[4] / 2), c(s, "ry", h = /*h*/
      e[5] / 2);
    },
    m(f, m) {
      O(f, t, m), O(f, s, m);
    },
    p(f, m) {
      m & /*x, w*/
      20 && n !== (n = /*x*/
      f[2] + /*w*/
      f[4] / 2) && c(t, "cx", n), m & /*y, h*/
      40 && o !== (o = /*y*/
      f[3] + /*h*/
      f[5] / 2) && c(t, "cy", o), m & /*w*/
      16 && i !== (i = /*w*/
      f[4] / 2) && c(t, "rx", i), m & /*h*/
      32 && r !== (r = /*h*/
      f[5] / 2) && c(t, "ry", r), m & /*x, w*/
      20 && a !== (a = /*x*/
      f[2] + /*w*/
      f[4] / 2) && c(s, "cx", a), m & /*y, h*/
      40 && l !== (l = /*y*/
      f[3] + /*h*/
      f[5] / 2) && c(s, "cy", l), m & /*w*/
      16 && u !== (u = /*w*/
      f[4] / 2) && c(s, "rx", u), m & /*h*/
      32 && h !== (h = /*h*/
      f[5] / 2) && c(s, "ry", h);
    },
    d(f) {
      f && v(t), f && v(s);
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
      O(o, t, i), n && n.m(t, null), e[9](t);
    },
    p(o, [i]) {
      /*origin*/
      o[1] ? n ? n.p(o, i) : (n = Xt(o), n.c(), n.m(t, null)) : n && (n.d(1), n = null);
    },
    i: z,
    o: z,
    d(o) {
      o && v(t), n && n.d(), e[9](null);
    }
  };
}
function hi(e, t, n) {
  const o = he();
  let { addEventListener: i } = t, { drawingMode: r } = t, { transform: s } = t, a, l, u, h, f, m, d, g = !1, S = !1, A, w;
  const p = (y) => {
    A = performance.now(), r === "drag" && (n(1, l = s.elementToImage(y.offsetX, y.offsetY)), u = l, n(2, h = l[0]), n(3, f = l[1]), n(4, m = 1), n(5, d = 1));
  }, _ = (y) => {
    const E = y || w;
    if (l)
      if (u = s.elementToImage(E.offsetX, E.offsetY), S) {
        const k = 2 * Math.abs(u[0] - l[0]), P = 2 * Math.abs(u[1] - l[1]);
        n(4, m = g ? Math.max(k, P) : k), n(5, d = g ? m : P), n(2, h = Math.min(u[0], l[0] - m / 2)), n(3, f = Math.min(u[1], l[1] - d / 2));
      } else {
        const k = Math.abs(u[0] - l[0]), P = Math.abs(u[1] - l[1]);
        n(4, m = g ? Math.max(k, P) : k), n(5, d = g ? m : P), n(2, h = Math.min(u[0], l[0])), n(3, f = Math.min(u[1], l[1]));
      }
    y && (w = y);
  }, M = (y) => {
    r === "click" && y.stopImmediatePropagation();
    const E = performance.now() - A;
    if (r === "click") {
      if (E > 300)
        return;
      y.stopPropagation(), l ? L() : (n(1, l = s.elementToImage(y.offsetX, y.offsetY)), u = l, n(2, h = l[0]), n(3, f = l[1]), n(4, m = 1), n(5, d = 1));
    } else
      l && (E > 300 || m * d > 100 ? (y.stopPropagation(), L()) : (n(1, l = null), u = null, w = void 0));
  }, L = () => {
    if (m * d > 15) {
      const y = {
        type: F.ELLIPSE,
        geometry: {
          bounds: {
            minX: h,
            minY: f,
            maxX: h + m,
            maxY: f + d
          },
          cx: h + m / 2,
          cy: f + d / 2,
          rx: m / 2,
          ry: d / 2
        }
      };
      o("create", y);
    }
    n(1, l = null), u = null, w = void 0;
  }, I = (y) => {
    y.key === "Shift" && (g = !0, _()), y.key === "Control" && (S = !0, _());
  }, X = (y) => {
    y.key === "Shift" && (g = !1, _()), y.key === "Control" && (S = !1, _());
  };
  ge(() => (document.addEventListener("keyup", X), document.addEventListener("keydown", I), i("pointerdown", p), i("pointermove", _), i("pointerup", M), () => {
    document.removeEventListener("keyup", X), document.removeEventListener("keydown", I);
  }));
  function b(y) {
    Ye[y ? "unshift" : "push"](() => {
      a = y, n(0, a);
    });
  }
  return e.$$set = (y) => {
    "addEventListener" in y && n(6, i = y.addEventListener), "drawingMode" in y && n(7, r = y.drawingMode), "transform" in y && n(8, s = y.transform);
  }, [
    a,
    l,
    h,
    f,
    m,
    d,
    i,
    r,
    s,
    b
  ];
}
class mi extends Q {
  constructor(t) {
    super(), J(this, t, hi, di, K, {
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
      O(n, t, o);
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
      n && v(t);
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
      O(o, t, i), n && n.m(t, null);
    },
    p(o, [i]) {
      /*isDrawing*/
      o[1] ? n ? n.p(o, i) : (n = Rt(o), n.c(), n.m(t, null)) : n && (n.d(1), n = null);
    },
    i: z,
    o: z,
    d(o) {
      o && v(t), n && n.d();
    }
  };
}
function pi(e, t, n) {
  let o;
  const i = he();
  let { addEventListener: r } = t, { drawingMode: s } = t, { annotation: a } = t, { transform: l } = t, { viewportScale: u = 1 } = t, { style: h = void 0 } = t, f = { fillOpacity: 1 }, m = [], d = "", g = !1;
  const S = (_) => {
    if (s === "drag" && m.length === 0) {
      n(1, g = !0);
      const M = l.elementToImage(_.offsetX, _.offsetY);
      m.push([...M, _.pressure]), n(0, d = Xe(m));
    }
  }, A = (_) => {
    if (g) {
      const M = l.elementToImage(_.offsetX, _.offsetY);
      m.push([...M, _.pressure]), n(0, d = Xe(m, gt, !0));
    }
  }, w = (_) => {
    g && p();
  }, p = () => {
    const _ = {
      type: F.FREEHAND,
      geometry: {
        bounds: _e(m.map((M) => [M[0], M[1]])),
        points: m
      }
    };
    n(1, g = !1), m = [], i("create", _);
  };
  return ge(() => {
    r("pointerdown", S, !0), r("pointermove", A), r("pointerup", w, !0);
  }), e.$$set = (_) => {
    "addEventListener" in _ && n(3, r = _.addEventListener), "drawingMode" in _ && n(4, s = _.drawingMode), "annotation" in _ && n(5, a = _.annotation), "transform" in _ && n(6, l = _.transform), "viewportScale" in _ && n(7, u = _.viewportScale), "style" in _ && n(8, h = _.style);
  }, e.$$.update = () => {
    e.$$.dirty & /*viewportScale*/
    128, e.$$.dirty & /*annotation, style*/
    288 && n(2, o = we(a, h, f));
  }, [
    d,
    g,
    o,
    r,
    s,
    a,
    l,
    u,
    h
  ];
}
class yi extends Q {
  constructor(t) {
    super(), J(this, t, pi, gi, K, {
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
      O(o, t, i), O(o, n, i);
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
      o && v(t), o && v(n);
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
      O(o, t, i), n && n.m(t, null);
    },
    p(o, [i]) {
      /*origin*/
      o[0] ? n ? n.p(o, i) : (n = Nt(o), n.c(), n.m(t, null)) : n && (n.d(1), n = null);
    },
    i: z,
    o: z,
    d(o) {
      o && v(t), n && n.d();
    }
  };
}
function wi(e, t, n) {
  const o = he();
  let { addEventListener: i } = t, { drawingMode: r } = t, { transform: s } = t, a, l, u, h, f, m, d;
  const g = (p) => {
    a = performance.now(), r === "drag" && (n(0, l = s.elementToImage(p.offsetX, p.offsetY)), u = l, n(1, h = l[0]), n(2, f = l[1]), n(3, m = l[0] + 1), n(4, d = l[1] + 1));
  }, S = (p) => {
    l && (u = s.elementToImage(p.offsetX, p.offsetY), n(3, m = u[0]), n(4, d = u[1]));
  }, A = (p) => {
    const _ = performance.now() - a;
    if (r === "click") {
      if (_ > 300)
        return;
      p.stopPropagation(), l ? w() : (n(0, l = s.elementToImage(p.offsetX, p.offsetY)), u = l, n(1, h = l[0]), n(2, f = l[1]), n(3, m = l[0] + 1), n(4, d = l[1] + 1));
    } else
      l && (_ > 300 || Math.sqrt(Math.pow(m - h, 2) + Math.pow(d - f, 2)) > 8 ? (p.stopPropagation(), w()) : (n(0, l = null), u = null));
  }, w = () => {
    if (Math.sqrt(Math.pow(m - h, 2) + Math.pow(d - f, 2)) > 8) {
      const p = {
        type: F.LINE,
        geometry: {
          bounds: {
            minX: Math.min(h, m),
            minY: Math.min(f, d),
            maxX: Math.max(h, m),
            maxY: Math.max(f, d)
          },
          x1: h,
          y1: f,
          x2: m,
          y2: d
        }
      };
      o("create", p);
    }
    n(0, l = null), u = null;
  };
  return ge(() => {
    i("pointerdown", g), i("pointermove", S), i("pointerup", A, !0);
  }), e.$$set = (p) => {
    "addEventListener" in p && n(5, i = p.addEventListener), "drawingMode" in p && n(6, r = p.drawingMode), "transform" in p && n(7, s = p.transform);
  }, [l, h, f, m, d, i, r, s];
}
class bi extends Q {
  constructor(t) {
    super(), J(this, t, wi, _i, K, {
      addEventListener: 5,
      drawingMode: 6,
      transform: 7
    });
  }
}
const yt = /* @__PURE__ */ new Map([
  ["rectangle", { tool: ii }],
  ["polygon", { tool: ui }],
  ["ellipse", { tool: mi }],
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
      O(s, t, a), ce(t, n), ce(t, i);
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
      s && v(t);
    }
  };
}
function Si(e, t, n) {
  let o, { annotation: i } = t, { geom: r } = t, { style: s = void 0 } = t;
  const { cx: a, cy: l, rx: u, ry: h } = r;
  return e.$$set = (f) => {
    "annotation" in f && n(0, i = f.annotation), "geom" in f && n(6, r = f.geom), "style" in f && n(7, s = f.style);
  }, e.$$.update = () => {
    e.$$.dirty & /*annotation, style*/
    129 && n(1, o = we(i, s));
  }, [i, o, a, l, u, h, r, s];
}
class Mi extends Q {
  constructor(t) {
    super(), J(this, t, Si, Ai, K, { annotation: 0, geom: 6, style: 7 });
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
        e[2].map(vi).join(" ")
      ), c(t, "data-id", r = /*annotation*/
      e[0].id);
    },
    m(s, a) {
      O(s, t, a), ce(t, n), ce(t, i);
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
      s && v(t);
    }
  };
}
const Li = (e) => e.join(","), vi = (e) => e.join(",");
function Oi(e, t, n) {
  let o, { annotation: i } = t, { geom: r } = t, { style: s = void 0 } = t;
  const { points: a } = r;
  return e.$$set = (l) => {
    "annotation" in l && n(0, i = l.annotation), "geom" in l && n(3, r = l.geom), "style" in l && n(4, s = l.style);
  }, e.$$.update = () => {
    e.$$.dirty & /*annotation, style*/
    17 && n(1, o = we(i, s));
  }, [i, o, a, r, s];
}
class ki extends Q {
  constructor(t) {
    super(), J(this, t, Oi, Ti, K, { annotation: 0, geom: 3, style: 4 });
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
      O(s, t, a), ce(t, n), ce(t, i);
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
      s && v(t);
    }
  };
}
function Ii(e, t, n) {
  let o, i, r, s, a, { annotation: l } = t, { geom: u } = t, { style: h = void 0 } = t;
  return e.$$set = (f) => {
    "annotation" in f && n(0, l = f.annotation), "geom" in f && n(6, u = f.geom), "style" in f && n(7, h = f.style);
  }, e.$$.update = () => {
    e.$$.dirty & /*annotation, style*/
    129 && n(5, o = we(l, h)), e.$$.dirty & /*geom*/
    64 && n(4, { x: i, y: r, w: s, h: a } = u, i, (n(3, r), n(6, u)), (n(2, s), n(6, u)), (n(1, a), n(6, u)));
  }, [l, a, s, r, i, o, u, h];
}
class Di extends Q {
  constructor(t) {
    super(), J(this, t, Ii, Pi, K, { annotation: 0, geom: 6, style: 7 });
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
      O(i, t, r), ce(t, n);
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
      i && v(t);
    }
  };
}
function Yi(e, t, n) {
  let o, i, { annotation: r } = t, { geom: s } = t, { style: a = void 0 } = t, l = { fillOpacity: 1 };
  const { points: u } = s;
  return e.$$set = (h) => {
    "annotation" in h && n(0, r = h.annotation), "geom" in h && n(3, s = h.geom), "style" in h && n(4, a = h.style);
  }, e.$$.update = () => {
    e.$$.dirty & /*annotation, style*/
    17 && n(2, o = we(r, a, l));
  }, n(1, i = Xe(u, gt, !0)), [r, i, o, s, a];
}
class Xi extends Q {
  constructor(t) {
    super(), J(this, t, Yi, Bi, K, { annotation: 0, geom: 3, style: 4 });
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
  const n = he();
  let o;
  return { onPointerDown: () => o = performance.now(), onPointerUp: (s) => {
    if (performance.now() - o < Ni) {
      const { x: l, y: u } = Ui(s, e), h = t.getAt(l, u);
      h ? n("click", { originalEvent: s, annotation: h }) : n("click", { originalEvent: s });
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
      i.c(), n = de();
    },
    m(r, s) {
      i.m(r, s), O(r, n, s), o = !0;
    },
    p(r, s) {
      s[0] & /*$store*/
      8192 && K(t, t = /*annotation*/
      r[32].id) ? (fe(), G(i, 1, 1, z), ue(), i = Ft(r), i.c(), H(i, 1), i.m(n.parentNode, n)) : i.p(r, s);
    },
    i(r) {
      o || (H(i), o = !0);
    },
    o(r) {
      G(i), o = !1;
    },
    d(r) {
      r && v(n), i.d(r);
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
      le(t.$$.fragment);
    },
    m(o, i) {
      ne(t, o, i), n = !0;
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
      oe(t, o);
    }
  };
}
function Fi(e) {
  let t, n;
  return t = new ki({
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
      le(t.$$.fragment);
    },
    m(o, i) {
      ne(t, o, i), n = !0;
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
      oe(t, o);
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
      le(t.$$.fragment);
    },
    m(o, i) {
      ne(t, o, i), n = !0;
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
      oe(t, o);
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
      le(t.$$.fragment);
    },
    m(o, i) {
      ne(t, o, i), n = !0;
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
      oe(t, o);
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
      n && n.c(), o = de();
    },
    m(l, u) {
      ~t && s[t].m(l, u), O(l, o, u), i = !0;
    },
    p(l, u) {
      let h = t;
      t = a(l), t === h ? ~t && s[t].p(l, u) : (n && (fe(), G(s[h], 1, 1, () => {
        s[h] = null;
      }), ue()), ~t ? (n = s[t], n ? n.p(l, u) : (n = s[t] = r[t](l), n.c()), H(n, 1), n.m(o.parentNode, o)) : n = null);
    },
    i(l) {
      i || (H(n), i = !0);
    },
    o(l) {
      G(n), i = !1;
    },
    d(l) {
      ~t && s[t].d(l), l && v(o);
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
      i && i.c(), n = de();
    },
    m(r, s) {
      i && i.m(r, s), O(r, n, s), o = !0;
    },
    p(r, s) {
      s[0] & /*isEditable, $store*/
      8320 && (t = !/*isEditable*/
      r[7](
        /*annotation*/
        r[32]
      )), t ? i ? (i.p(rt(r), s), s[0] & /*isEditable, $store*/
      8320 && H(i, 1)) : (i = Ht(rt(r)), i.c(), H(i, 1), i.m(n.parentNode, n)) : i && (fe(), G(i, 1, 1, () => {
        i = null;
      }), ue());
    },
    i(r) {
      o || (H(i), o = !0);
    },
    o(r) {
      G(i), o = !1;
    },
    d(r) {
      i && i.d(r), r && v(n);
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
      n && n.c(), o = de();
    },
    m(l, u) {
      ~t && s[t].m(l, u), O(l, o, u), i = !0;
    },
    p(l, u) {
      let h = t;
      t = a(l), t === h ? ~t && s[t].p(l, u) : (n && (fe(), G(s[h], 1, 1, () => {
        s[h] = null;
      }), ue()), ~t ? (n = s[t], n ? n.p(l, u) : (n = s[t] = r[t](l), n.c()), H(n, 1), n.m(o.parentNode, o)) : n = null);
    },
    i(l) {
      i || (H(n), i = !0);
    },
    o(l) {
      G(n), i = !1;
    },
    d(l) {
      ~t && s[t].d(l), l && v(o);
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
      i.c(), n = de();
    },
    m(r, s) {
      i.m(r, s), O(r, n, s), o = !0;
    },
    p(r, s) {
      s[0] & /*toolName*/
      4 && K(t, t = /*toolName*/
      r[2]) ? (fe(), G(i, 1, 1, z), ue(), i = zt(r), i.c(), H(i, 1), i.m(n.parentNode, n)) : i.p(r, s);
    },
    i(r) {
      o || (H(i), o = !0);
    },
    o(r) {
      G(i), o = !1;
    },
    d(r) {
      r && v(n), i.d(r);
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
      t = de();
    },
    m(s, a) {
      for (let l = 0; l < i.length; l += 1)
        i[l] && i[l].m(s, a);
      O(s, t, a), n = !0;
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
        for (fe(), l = o.length; l < i.length; l += 1)
          r(l);
        ue();
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
      ht(i, s), s && v(t);
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
      le(t.$$.fragment);
    },
    m(o, i) {
      ne(t, o, i), n = !0;
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
      oe(t, o);
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
      le(t.$$.fragment);
    },
    m(o, i) {
      ne(t, o, i), n = !0;
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
      oe(t, o);
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
      i.c(), n = de();
    },
    m(r, s) {
      i.m(r, s), O(r, n, s), o = !0;
    },
    p(r, s) {
      s[0] & /*editableAnnotations*/
      64 && K(t, t = /*editable*/
      r[29].id) ? (fe(), G(i, 1, 1, z), ue(), i = jt(r), i.c(), H(i, 1), i.m(n.parentNode, n)) : i.p(r, s);
    },
    i(r) {
      o || (H(i), o = !0);
    },
    o(r) {
      G(i), o = !1;
    },
    d(r) {
      r && v(n), i.d(r);
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
  let h = (
    /*drawingEl*/
    e[4] && Vt(e)
  );
  return {
    c() {
      t = B("svg"), n = B("g");
      for (let f = 0; f < l.length; f += 1)
        l[f].c();
      o = B("g"), h && h.c(), c(o, "class", "drawing"), c(t, "class", "a9s-annotationlayer"), Et(
        t,
        "drawing",
        /*tool*/
        e[12]
      );
    },
    m(f, m) {
      O(f, t, m), ce(t, n);
      for (let d = 0; d < l.length; d += 1)
        l[d] && l[d].m(n, null);
      ce(t, o), h && h.m(o, null), e[25](o), e[26](t), i = !0, r || (s = [
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
    p(f, m) {
      if (e = f, m[0] & /*$store, style, isEditable*/
      8322) {
        a = /*$store*/
        e[13];
        let d;
        for (d = 0; d < a.length; d += 1) {
          const g = Ut(e, a, d);
          l[d] ? (l[d].p(g, m), H(l[d], 1)) : (l[d] = Gt(g), l[d].c(), H(l[d], 1), l[d].m(n, null));
        }
        for (fe(), d = a.length; d < l.length; d += 1)
          u(d);
        ue();
      }
      /*drawingEl*/
      e[4] ? h ? (h.p(e, m), m[0] & /*drawingEl*/
      16 && H(h, 1)) : (h = Vt(e), h.c(), H(h, 1), h.m(o, null)) : h && (fe(), G(h, 1, 1, () => {
        h = null;
      }), ue()), (!i || m[0] & /*tool*/
      4096) && Et(
        t,
        "drawing",
        /*tool*/
        e[12]
      );
    },
    i(f) {
      if (!i) {
        for (let m = 0; m < a.length; m += 1)
          H(l[m]);
        H(h), i = !0;
      }
    },
    o(f) {
      l = l.filter(Boolean);
      for (let m = 0; m < l.length; m += 1)
        G(l[m]);
      G(h), i = !1;
    },
    d(f) {
      f && v(t), ht(l, f), h && h.d(), e[25](null), e[26](null), r = !1, se(s);
    }
  };
}
function Ki(e, t, n) {
  let o, i, r, s, a, l, u, h, f, m, d = z, g = () => (d(), d = Qt(b, (Y) => n(14, m = Y)), b);
  e.$$.on_destroy.push(() => d());
  let { drawingEnabled: S } = t, { image: A } = t, { preferredDrawingMode: w } = t, { state: p } = t, { style: _ = void 0 } = t, { toolName: M = dt().length > 0 ? dt()[0] : void 0 } = t, { user: L } = t, I, X, b;
  ge(() => g(n(5, b = li(A, X))));
  const { selection: y, store: E } = p;
  bt(e, y, (Y) => n(24, h = Y)), bt(e, E, (Y) => n(13, f = Y));
  let k = null, P = null;
  const C = (Y) => {
    E.unobserve(k);
    const $ = Y.filter(({ editable: W }) => W).map(({ id: W }) => W);
    $.length > 0 ? (n(6, P = $.map((W) => E.getAnnotation(W))), k = (W) => {
      const { updated: me } = W.changes;
      n(6, P = me.map((ae) => ae.newValue));
    }, E.observe(k, { annotations: $ })) : n(6, P = null);
  }, U = (Y) => {
    const $ = rn(), W = {
      id: $,
      bodies: [],
      target: {
        annotation: $,
        selector: Y.detail,
        creator: L,
        created: /* @__PURE__ */ new Date()
      }
    };
    E.addAnnotation(W), y.setSelected(W.id);
  }, R = (Y) => ($) => {
    var te;
    const { target: W } = Y, me = 10 * 60 * 1e3, ae = ((te = W.creator) == null ? void 0 : te.id) !== L.id || !W.created || (/* @__PURE__ */ new Date()).getTime() - W.created.getTime() > me;
    E.updateTarget({
      ...W,
      selector: $.detail,
      created: ae ? W.created : /* @__PURE__ */ new Date(),
      updated: ae ? /* @__PURE__ */ new Date() : null,
      updatedBy: ae ? L : null
    });
  };
  function be(Y) {
    Ye[Y ? "unshift" : "push"](() => {
      I = Y, n(4, I);
    });
  }
  function Oe(Y) {
    Ye[Y ? "unshift" : "push"](() => {
      X = Y, n(3, X);
    });
  }
  return e.$$set = (Y) => {
    "drawingEnabled" in Y && n(0, S = Y.drawingEnabled), "image" in Y && n(19, A = Y.image), "preferredDrawingMode" in Y && n(20, w = Y.preferredDrawingMode), "state" in Y && n(21, p = Y.state), "style" in Y && n(1, _ = Y.style), "toolName" in Y && n(2, M = Y.toolName), "user" in Y && n(22, L = Y.user);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*toolName*/
    4 && n(12, { tool: o, opts: i } = fn(M), o, (n(23, i), n(2, M))), e.$$.dirty[0] & /*opts, preferredDrawingMode*/
    9437184 && n(11, r = (i == null ? void 0 : i.drawingMode) || w), e.$$.dirty[0] & /*svgEl*/
    8 && n(10, s = Ri(X)), e.$$.dirty[0] & /*svgEl*/
    8 && n(9, { onPointerDown: a, onPointerUp: l } = Ci(X, E), a, (n(8, l), n(3, X))), e.$$.dirty[0] & /*$selection*/
    16777216 && n(7, u = (Y) => h.selected.find(($) => $.id === Y.id && $.editable)), e.$$.dirty[0] & /*$selection*/
    16777216 && C(h.selected);
  }, [
    S,
    _,
    M,
    X,
    I,
    b,
    P,
    u,
    l,
    a,
    s,
    r,
    o,
    f,
    m,
    y,
    E,
    U,
    R,
    A,
    w,
    p,
    L,
    i,
    h,
    be,
    Oe
  ];
}
class Wi extends Q {
  constructor(t) {
    super(), J(
      this,
      t,
      Ki,
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
      var r = o - n + 1, s = t - n + 1, a = Math.log(r), l = 0.5 * Math.exp(2 * a / 3), u = 0.5 * Math.sqrt(a * l * (r - l) / r) * (s - r / 2 < 0 ? -1 : 1), h = Math.max(n, Math.floor(t - s * l / r + u)), f = Math.min(o, Math.floor(t + (r - s) * l / r + u));
      un(e, t, h, f, i);
    }
    var m = e[t], d = n, g = o;
    for (ke(e, n, t), i(e[o], m) > 0 && ke(e, n, o); d < g; ) {
      for (ke(e, d, g), d++, g--; i(e[d], m) < 0; )
        d++;
      for (; i(e[g], m) > 0; )
        g--;
    }
    i(e[n], m) === 0 ? ke(e, n, g) : (g++, ke(e, g, o)), g <= t && (n = g + 1), t <= g && (o = g - 1);
  }
}
function ke(e, t, n) {
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
    return this.data = Le([]), this;
  }
  remove(t, n) {
    if (!t)
      return this;
    let o = this.data;
    const i = this.toBBox(t), r = [], s = [];
    let a, l, u;
    for (; o || r.length; ) {
      if (o || (o = r.pop(), l = r[r.length - 1], a = s.pop(), u = !0), o.leaf) {
        const h = xi(t, o.children, n);
        if (h !== -1)
          return o.children.splice(h, 1), r.push(o), this._condense(r), this;
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
      return a = Le(t.slice(n, o + 1)), Me(a, this.toBBox), a;
    i || (i = Math.ceil(Math.log(r) / Math.log(s)), s = Math.ceil(r / Math.pow(s, i - 1))), a = Le([]), a.leaf = !1, a.height = i;
    const l = Math.ceil(r / s), u = l * Math.ceil(Math.sqrt(s));
    Kt(t, n, o, u, this.compareMinX);
    for (let h = n; h <= o; h += u) {
      const f = Math.min(h + u - 1, o);
      Kt(t, h, f, l, this.compareMinY);
      for (let m = h; m <= f; m += l) {
        const d = Math.min(m + l - 1, f);
        a.children.push(this._build(t, m, d, i - 1));
      }
    }
    return Me(a, this.toBBox), a;
  }
  _chooseSubtree(t, n, o, i) {
    for (; i.push(n), !(n.leaf || i.length - 1 === o); ) {
      let r = 1 / 0, s = 1 / 0, a;
      for (let l = 0; l < n.children.length; l++) {
        const u = n.children[l], h = st(u), f = tr(t, u) - h;
        f < s ? (s = f, r = h < r ? h : r, a = u) : f === s && h < r && (r = h, a = u);
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
    const s = this._chooseSplitIndex(o, r, i), a = Le(o.children.splice(s, o.children.length - s));
    a.height = o.height, a.leaf = o.leaf, Me(o, this.toBBox), Me(a, this.toBBox), n ? t[n - 1].children.push(a) : this._splitRoot(o, a);
  }
  _splitRoot(t, n) {
    this.data = Le([t, n]), this.data.height = t.height + 1, this.data.leaf = !1, Me(this.data, this.toBBox);
  }
  _chooseSplitIndex(t, n, o) {
    let i, r = 1 / 0, s = 1 / 0;
    for (let a = n; a <= o - n; a++) {
      const l = Pe(t, 0, a, this.toBBox), u = Pe(t, a, o, this.toBBox), h = nr(l, u), f = st(l) + st(u);
      h < r ? (r = h, i = a, s = f < s ? f : s) : h === r && f < s && (s = f, i = a);
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
    let l = We(s) + We(a);
    for (let u = n; u < o - n; u++) {
      const h = t.children[u];
      Ie(s, t.leaf ? r(h) : h), l += We(s);
    }
    for (let u = o - n - 1; u >= n; u--) {
      const h = t.children[u];
      Ie(a, t.leaf ? r(h) : h), l += We(a);
    }
    return l;
  }
  _adjustParentBBoxes(t, n, o) {
    for (let i = o; i >= 0; i--)
      Ie(n[i], t);
  }
  _condense(t) {
    for (let n = t.length - 1, o; n >= 0; n--)
      t[n].children.length === 0 ? n > 0 ? (o = t[n - 1].children, o.splice(o.indexOf(t[n]), 1)) : this.clear() : Me(t[n], this.toBBox);
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
function Me(e, t) {
  Pe(e, 0, e.children.length, t, e);
}
function Pe(e, t, n, o, i) {
  i || (i = Le(null)), i.minX = 1 / 0, i.minY = 1 / 0, i.maxX = -1 / 0, i.maxY = -1 / 0;
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
function We(e) {
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
function Le(e) {
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
function Kt(e, t, n, o, i) {
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
    const { minX: m, minY: d, maxX: g, maxY: S } = f.selector.geometry.bounds, A = { minX: m, minY: d, maxX: g, maxY: S, target: f };
    e.insert(A), t.set(f.annotation, A);
  }, r = (f) => {
    const m = t.get(f.annotation);
    e.remove(m), t.delete(f.annotation);
  };
  return {
    all: n,
    clear: o,
    getAt: (f, m) => {
      const g = e.search({
        minX: f,
        minY: m,
        maxX: f,
        maxY: m
      }).map((S) => S.target).filter((S) => S.selector.type === F.RECTANGLE || Tn(S.selector, f, m));
      if (g.length > 0)
        return g.sort((S, A) => ft(S.selector) - ft(A.selector)), g[0];
    },
    getIntersecting: (f, m, d, g) => e.search({
      minX: f,
      minY: m,
      maxX: f + d,
      maxY: m + g
    }).map((S) => S.target),
    insert: i,
    remove: r,
    set: (f, m = !0) => {
      m && o();
      const d = f.map((g) => {
        const { minX: S, minY: A, maxX: w, maxY: p } = g.selector.geometry.bounds;
        return { minX: S, minY: A, maxX: w, maxY: p, target: g };
      });
      d.forEach((g) => t.set(g.target.annotation, g)), e.load(d);
    },
    size: () => e.all().length,
    update: (f, m) => {
      r(f), i(m);
    }
  };
}, ir = (e) => {
  const t = ao(), n = or(), o = xn(t, e.pointerSelectAction), i = Qn(t), r = mo();
  return t.observe(({ changes: l }) => {
    n.set(l.created.map((u) => u.target), !1), l.deleted.forEach((u) => n.remove(u.target)), l.updated.forEach(({ oldValue: u, newValue: h }) => n.update(u.target, h.target));
  }), {
    store: {
      ...t,
      getAt: (l, u) => {
        const h = n.getAt(l, u);
        return h ? t.getAnnotation(h.annotation) : void 0;
      },
      getIntersecting: (l, u, h, f) => n.getIntersecting(l, u, h, f).map((m) => t.getAnnotation(m.annotation))
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
}, Wt = (e, t, n) => t.setAttribute("data-theme", n === "auto" ? lr(e) : n), ar = (e, t) => ({
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
const hr = (e, t = {}) => {
  if (!e)
    throw "Missing argument: image";
  const n = typeof e == "string" ? document.getElementById(e) : e, o = ar(t, {
    drawingEnabled: !0,
    drawingMode: "drag",
    pointerSelectAction: sn.EDIT,
    theme: "light"
  }), i = rr(o), { selection: r, store: s } = i, a = ho(s), l = go(
    i,
    a,
    o.adapter,
    o.autoSave
  ), u = document.createElement("DIV");
  u.style.position = "relative", u.style.display = "inline-block", n.style.display = "block", n.parentNode.insertBefore(u, n), u.appendChild(n);
  const h = cr(a);
  let f = Ao();
  Wt(n, u, o.theme);
  const m = new Wi({
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
  m.$on("click", (b) => {
    const { originalEvent: y, annotation: E } = b.detail;
    E ? r.clickSelect(E.id, y) : r.isEmpty() || r.clear();
  });
  const d = yo(i, a, o.adapter), g = () => {
    m.$destroy(), u.parentNode.insertBefore(n, u), u.parentNode.removeChild(u), h.destroy(), a.destroy();
  }, S = () => f, A = (b, y, E) => Ei(b, y, E), w = (b, y) => Wo(b, y), p = (b) => {
    if (!fn(b))
      throw `No drawing tool named ${b}`;
    m.$set({ toolName: b });
  }, _ = (b) => m.$set({ drawingEnabled: b }), M = (b) => {
    console.warn("Filter not implemented yet");
  }, L = (b) => m.$set({ style: b }), I = (b) => Wt(n, u, b), X = (b) => {
    f = b, m.$set({ user: b });
  };
  return {
    ...d,
    destroy: g,
    getUser: S,
    listDrawingTools: dt,
    on: l.on,
    off: l.off,
    registerDrawingTool: A,
    registerShapeEditor: w,
    setDrawingEnabled: _,
    setDrawingTool: p,
    setFilter: M,
    setStyle: L,
    setTheme: I,
    setUser: X,
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
  Ko as LineEditor,
  Pn as LineUtil,
  Io as PolygonEditor,
  Xo as RectangleEditor,
  On as RectangleUtil,
  ii as RubberbandRectangle,
  Wi as SVGAnnotationLayer,
  F as ShapeType,
  ti as ToolMount,
  fr as W3CImageFormat,
  Ci as addEventListeners,
  _e as boundsFromPoints,
  ft as computeArea,
  hr as createImageAnnotator,
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
  Wo as registerEditor,
  Re as registerShapeUtil,
  Ei as registerTool,
  sr as sampleBrightness,
  Dn as serializeFragmentSelector,
  jn as serializeSVGSelector,
  vo as serializeW3CImageAnnotation,
  Wt as setTheme
};
//# sourceMappingURL=annotorious.es.js.map
