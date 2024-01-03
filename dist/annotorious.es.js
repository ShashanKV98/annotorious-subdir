function z() {
}
function an(e, t) {
  for (const n in t)
    e[n] = t[n];
  return e;
}
function qt(e) {
  return e();
}
function gt() {
  return /* @__PURE__ */ Object.create(null);
}
function re(e) {
  e.forEach(qt);
}
function V(e) {
  return typeof e == "function";
}
function K(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function fn(e) {
  return Object.keys(e).length === 0;
}
function Kt(e, ...t) {
  if (e == null)
    return z;
  const n = e.subscribe(...t);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function pt(e, t, n) {
  e.$$.on_destroy.push(Kt(t, n));
}
function un(e, t, n, o) {
  if (e) {
    const i = Wt(e, t, n, o);
    return e[0](i);
  }
}
function Wt(e, t, n, o) {
  return e[1] && o ? an(n.ctx.slice(), e[1](o(t))) : n.ctx;
}
function cn(e, t, n, o) {
  if (e[2] && o) {
    const i = e[2](o(n));
    if (t.dirty === void 0)
      return i;
    if (typeof i == "object") {
      const s = [], r = Math.max(t.dirty.length, i.length);
      for (let f = 0; f < r; f += 1)
        s[f] = t.dirty[f] | i[f];
      return s;
    }
    return t.dirty | i;
  }
  return t.dirty;
}
function dn(e, t, n, o, i, s) {
  if (i) {
    const r = Wt(t, n, o, s);
    e.p(r, i);
  }
}
function hn(e) {
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
function k(e, t, n) {
  e.insertBefore(t, n || null);
}
function O(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function ft(e, t) {
  for (let n = 0; n < e.length; n += 1)
    e[n] && e[n].d(t);
}
function Y(e) {
  return document.createElementNS("http://www.w3.org/2000/svg", e);
}
function Zt(e) {
  return document.createTextNode(e);
}
function J() {
  return Zt(" ");
}
function ce() {
  return Zt("");
}
function j(e, t, n, o) {
  return e.addEventListener(t, n, o), () => e.removeEventListener(t, n, o);
}
function a(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function mn(e) {
  return Array.from(e.childNodes);
}
function yt(e, t, n) {
  e.classList[n ? "add" : "remove"](t);
}
function gn(e, t, { bubbles: n = !1, cancelable: o = !1 } = {}) {
  const i = document.createEvent("CustomEvent");
  return i.initCustomEvent(e, n, o, t), i;
}
let Be;
function De(e) {
  Be = e;
}
function Jt() {
  if (!Be)
    throw new Error("Function called outside component initialization");
  return Be;
}
function he(e) {
  Jt().$$.on_mount.push(e);
}
function de() {
  const e = Jt();
  return (t, n, { cancelable: o = !1 } = {}) => {
    const i = e.$$.callbacks[t];
    if (i) {
      const s = gn(t, n, { cancelable: o });
      return i.slice().forEach((r) => {
        r.call(e, s);
      }), !s.defaultPrevented;
    }
    return !0;
  };
}
function te(e, t) {
  const n = e.$$.callbacks[t.type];
  n && n.slice().forEach((o) => o.call(this, t));
}
const Te = [], Ye = [];
let Oe = [];
const _t = [], pn = /* @__PURE__ */ Promise.resolve();
let it = !1;
function yn() {
  it || (it = !0, pn.then(Qt));
}
function st(e) {
  Oe.push(e);
}
const Je = /* @__PURE__ */ new Set();
let Ee = 0;
function Qt() {
  if (Ee !== 0)
    return;
  const e = Be;
  do {
    try {
      for (; Ee < Te.length; ) {
        const t = Te[Ee];
        Ee++, De(t), _n(t.$$);
      }
    } catch (t) {
      throw Te.length = 0, Ee = 0, t;
    }
    for (De(null), Te.length = 0, Ee = 0; Ye.length; )
      Ye.pop()();
    for (let t = 0; t < Oe.length; t += 1) {
      const n = Oe[t];
      Je.has(n) || (Je.add(n), n());
    }
    Oe.length = 0;
  } while (Te.length);
  for (; _t.length; )
    _t.pop()();
  it = !1, Je.clear(), De(e);
}
function _n(e) {
  if (e.fragment !== null) {
    e.update(), re(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(st);
  }
}
function wn(e) {
  const t = [], n = [];
  Oe.forEach((o) => e.indexOf(o) === -1 ? t.push(o) : n.push(o)), n.forEach((o) => o()), Oe = t;
}
const qe = /* @__PURE__ */ new Set();
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
  pe.r || re(pe.c), pe = pe.p;
}
function H(e, t) {
  e && e.i && (qe.delete(e), e.i(t));
}
function G(e, t, n, o) {
  if (e && e.o) {
    if (qe.has(e))
      return;
    qe.add(e), pe.c.push(() => {
      qe.delete(e), o && (n && e.d(1), o());
    }), e.o(t);
  } else
    o && o();
}
function le(e) {
  e && e.c();
}
function ie(e, t, n, o) {
  const { fragment: i, after_update: s } = e.$$;
  i && i.m(t, n), o || st(() => {
    const r = e.$$.on_mount.map(qt).filter(V);
    e.$$.on_destroy ? e.$$.on_destroy.push(...r) : re(r), e.$$.on_mount = [];
  }), s.forEach(st);
}
function se(e, t) {
  const n = e.$$;
  n.fragment !== null && (wn(n.after_update), re(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function bn(e, t) {
  e.$$.dirty[0] === -1 && (Te.push(e), yn(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function Q(e, t, n, o, i, s, r, f = [-1]) {
  const l = Be;
  De(e);
  const c = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: s,
    update: z,
    not_equal: i,
    bound: gt(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (l ? l.$$.context : [])),
    // everything else
    callbacks: gt(),
    dirty: f,
    skip_bound: !1,
    root: t.target || l.$$.root
  };
  r && r(c.root);
  let h = !1;
  if (c.ctx = n ? n(e, t.props || {}, (u, m, ...d) => {
    const p = d.length ? d[0] : m;
    return c.ctx && i(c.ctx[u], c.ctx[u] = p) && (!c.skip_bound && c.bound[u] && c.bound[u](p), h && bn(e, u)), m;
  }) : [], c.update(), h = !0, re(c.before_update), c.fragment = o ? o(c.ctx) : !1, t.target) {
    if (t.hydrate) {
      const u = mn(t.target);
      c.fragment && c.fragment.l(u), u.forEach(O);
    } else
      c.fragment && c.fragment.c();
    t.intro && H(e.$$.fragment), ie(e, t.target, t.anchor, t.customElement), Qt();
  }
  De(l);
}
class x {
  $destroy() {
    se(this, 1), this.$destroy = z;
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
    this.$$set && !fn(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
var F = /* @__PURE__ */ ((e) => (e.ELLIPSE = "ELLIPSE", e.POLYGON = "POLYGON", e.RECTANGLE = "RECTANGLE", e.FREEHAND = "FREEHAND", e.LINE = "LINE", e))(F || {});
const ut = {}, Re = (e, t) => ut[e] = t, rt = (e) => ut[e.type].area(e), En = (e, t, n) => ut[e.type].intersects(e, t, n), _e = (e) => {
  let t = 1 / 0, n = 1 / 0, o = -1 / 0, i = -1 / 0;
  return e.forEach(([s, r]) => {
    t = Math.min(t, s), n = Math.min(n, r), o = Math.max(o, s), i = Math.max(i, r);
  }), { minX: t, minY: n, maxX: o, maxY: i };
}, An = {
  area: (e) => Math.PI * e.geometry.rx * e.geometry.ry,
  intersects: (e, t, n) => {
    const { cx: o, cy: i, rx: s, ry: r } = e.geometry, f = 0, l = Math.cos(f), c = Math.sin(f), h = t - o, u = n - i, m = l * h + c * u, d = c * h - l * u;
    return m * m / (s * s) + d * d / (r * r) <= 1;
  }
};
Re(F.ELLIPSE, An);
const Sn = {
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
    for (let s = 0, r = o.length - 1; s < o.length; r = s++) {
      const f = o[s][0], l = o[s][1], c = o[r][0], h = o[r][1];
      l > n != h > n && t < (c - f) * (n - l) / (h - l) + f && (i = !i);
    }
    return i;
  }
};
Re(F.POLYGON, Sn);
const Mn = {
  area: (e) => e.geometry.w * e.geometry.h,
  intersects: (e, t, n) => t >= e.geometry.x && t <= e.geometry.x + e.geometry.w && n >= e.geometry.y && n <= e.geometry.y + e.geometry.h
};
Re(F.RECTANGLE, Mn);
const Tn = {
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
    for (let s = 0, r = o.length - 1; s < o.length; r = s++) {
      const f = o[s][0], l = o[s][1], c = o[r][0], h = o[r][1];
      l > n != h > n && t < (c - f) * (n - l) / (h - l) + f && (i = !i);
    }
    return i;
  }
};
Re(F.FREEHAND, Tn);
const Ln = {
  area: (e) => 0,
  intersects: (e, t, n) => t >= e.geometry.x1 && t <= e.geometry.x2 && n >= e.geometry.y1 && n <= e.geometry.y2
};
Re(F.LINE, Ln);
const On = (e, t = !1) => {
  const n = typeof e == "string" ? e : e.value, o = /^(xywh)=(pixel|percent)?:?(.+?),(.+?),(.+?),(.+)*/g, i = [...n.matchAll(o)][0], [s, r, f, l, c, h, u] = i;
  if (r !== "xywh")
    throw new Error("Unsupported MediaFragment: " + n);
  if (f && f !== "pixel")
    throw new Error(`Unsupported MediaFragment unit: ${f}`);
  const [m, d, p, A] = [l, c, h, u].map(parseFloat);
  return {
    type: F.RECTANGLE,
    geometry: {
      x: m,
      y: d,
      w: p,
      h: A,
      bounds: {
        minX: m,
        minY: t ? d - A : d,
        maxX: m + p,
        maxY: t ? d : d + A
      }
    }
  };
}, kn = (e) => {
  const { x: t, y: n, w: o, h: i } = e;
  return {
    type: "FragmentSelector",
    conformsTo: "http://www.w3.org/TR/media-frags/",
    value: `xywh=pixel:${t},${n},${o},${i}`
  };
}, xt = "http://www.w3.org/2000/svg", wt = (e) => {
  const t = (o) => {
    Array.from(o.attributes).forEach((i) => {
      i.name.startsWith("on") && o.removeAttribute(i.name);
    });
  }, n = e.getElementsByTagName("script");
  return Array.from(n).reverse().forEach((o) => o.parentNode.removeChild(o)), Array.from(e.querySelectorAll("*")).forEach(t), e;
}, Pn = (e) => {
  const o = new XMLSerializer().serializeToString(e.documentElement).replace("<svg>", `<svg xmlns="${xt}">`);
  return new DOMParser().parseFromString(o, "image/svg+xml").documentElement;
};
function In(e, t) {
  var n = e[0] - t[0], o = e[1] - t[1];
  return n * n + o * o;
}
function vn(e, t, n) {
  var o = t[0], i = t[1], s = n[0] - o, r = n[1] - i;
  if (s !== 0 || r !== 0) {
    var f = ((e[0] - o) * s + (e[1] - i) * r) / (s * s + r * r);
    f > 1 ? (o = n[0], i = n[1]) : f > 0 && (o += s * f, i += r * f);
  }
  return s = e[0] - o, r = e[1] - i, s * s + r * r;
}
function Dn(e, t) {
  for (var n = e[0], o = [n], i, s = 1, r = e.length; s < r; s++)
    i = e[s], In(i, n) > t && (o.push(i), n = i);
  return n !== i && o.push(i), o;
}
function lt(e, t, n, o, i) {
  for (var s = o, r, f = t + 1; f < n; f++) {
    var l = vn(e[f], e[t], e[n]);
    l > s && (r = f, s = l);
  }
  s > o && (r - t > 1 && lt(e, t, r, o, i), i.push(e[r]), n - r > 1 && lt(e, r, n, o, i));
}
function Bn(e, t) {
  var n = e.length - 1, o = [e[0]];
  return lt(e, 0, n, t, o), o.push(e[n]), o;
}
function Yn(e, t, n) {
  if (e.length <= 2)
    return e;
  var o = t !== void 0 ? t * t : 1;
  return e = n ? e : Dn(e, o), e = Bn(e, o), e;
}
const ct = {
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
function Xn(e) {
  if (!e.length)
    return "";
  const t = e.reduce(
    (n, [o, i], s, r) => {
      const [f, l] = r[(s + 1) % r.length];
      return n.push(o, i, (o + f) / 2, (i + l) / 2), n;
    },
    ["M", ...e[0], "Q"]
  );
  return t.push("Z"), t.join(" ");
}
function Xe(e, t, n = !1) {
  return Xn(
    n ? Yn(e, 1) : e
  );
}
const $t = (e) => {
  const n = new DOMParser().parseFromString(e, "image/svg+xml"), o = n.lookupPrefix(xt), i = n.lookupNamespaceURI(null);
  return o || i ? wt(n).firstChild : wt(Pn(n)).firstChild;
}, Rn = (e) => {
  const [t, n, o] = e.match(/(<path d=["|'])([^("|')]*)/) || [];
  if (!o)
    return;
  const i = /([MQZT])([^MQZT]*)/g, r = Array.from(o.matchAll(i)).map((f) => (f[1], f[2].trim().split(/\s+/).map(parseFloat)));
  return {
    type: F.FREEHAND,
    geometry: {
      points: r,
      bounds: _e(r)
    }
  };
}, Nn = (e) => {
  const [t, n, o] = e.match(/(<polygon points=["|'])([^("|')]*)/) || [];
  if (!o)
    return;
  const i = o.split(" ").map((s) => s.split(",").map(parseFloat));
  return {
    type: F.POLYGON,
    geometry: {
      points: i,
      bounds: _e(i)
    }
  };
}, Cn = (e) => {
  const t = $t(e), n = parseFloat(t.getAttribute("cx")), o = parseFloat(t.getAttribute("cy")), i = parseFloat(t.getAttribute("rx")), s = parseFloat(t.getAttribute("ry")), r = {
    minX: n - i,
    minY: o - s,
    maxX: n + i,
    maxY: o + s
  };
  return {
    type: F.ELLIPSE,
    geometry: {
      cx: n,
      cy: o,
      rx: i,
      ry: s,
      bounds: r
    }
  };
}, Un = (e) => {
  const t = $t(e), n = parseFloat(t.getAttribute("x1")), o = parseFloat(t.getAttribute("x2")), i = parseFloat(t.getAttribute("y1")), s = parseFloat(t.getAttribute("y2")), r = {
    minX: Math.min(n, o),
    minY: Math.min(i, s),
    maxX: Math.max(n, o),
    maxY: Math.max(i, s)
  };
  return {
    type: F.LINE,
    geometry: {
      x1: n,
      x2: o,
      y1: i,
      y2: s,
      bounds: r
    }
  };
}, Hn = (e) => {
  const t = typeof e == "string" ? e : e.value;
  if (t.includes("<polygon points="))
    return Nn(t);
  if (t.includes("<path d="))
    return Rn(t);
  if (t.includes("<ellipse "))
    return Cn(t);
  if (t.includes("<line "))
    return Un(t);
}, Fn = (e) => {
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
let Ve;
const Gn = new Uint8Array(16);
function Vn() {
  if (!Ve && (Ve = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Ve))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Ve(Gn);
}
const $ = [];
for (let e = 0; e < 256; ++e)
  $.push((e + 256).toString(16).slice(1));
function zn(e, t = 0) {
  return $[e[t + 0]] + $[e[t + 1]] + $[e[t + 2]] + $[e[t + 3]] + "-" + $[e[t + 4]] + $[e[t + 5]] + "-" + $[e[t + 6]] + $[e[t + 7]] + "-" + $[e[t + 8]] + $[e[t + 9]] + "-" + $[e[t + 10]] + $[e[t + 11]] + $[e[t + 12]] + $[e[t + 13]] + $[e[t + 14]] + $[e[t + 15]];
}
const jn = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), bt = {
  randomUUID: jn
};
function en(e, t, n) {
  if (bt.randomUUID && !t && !e)
    return bt.randomUUID();
  e = e || {};
  const o = e.random || (e.rng || Vn)();
  if (o[6] = o[6] & 15 | 64, o[8] = o[8] & 63 | 128, t) {
    n = n || 0;
    for (let i = 0; i < 16; ++i)
      t[n + i] = o[i];
    return t;
  }
  return zn(o);
}
var Et = Object.prototype.hasOwnProperty;
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
        if (Et.call(e, n) && ++o && !Et.call(t, n) || !(n in t) || !ye(e[n], t[n]))
          return !1;
      return Object.keys(t).length === o;
    }
  }
  return e !== e && t !== t;
}
function Qe() {
}
function qn(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
const Ae = [];
function dt(e, t = Qe) {
  let n;
  const o = /* @__PURE__ */ new Set();
  function i(f) {
    if (qn(e, f) && (e = f, n)) {
      const l = !Ae.length;
      for (const c of o)
        c[1](), Ae.push(c, e);
      if (l) {
        for (let c = 0; c < Ae.length; c += 2)
          Ae[c][0](Ae[c + 1]);
        Ae.length = 0;
      }
    }
  }
  function s(f) {
    i(f(e));
  }
  function r(f, l = Qe) {
    const c = [f, l];
    return o.add(c), o.size === 1 && (n = t(i) || Qe), f(e), () => {
      o.delete(c), o.size === 0 && n && (n(), n = null);
    };
  }
  return { set: i, update: s, subscribe: r };
}
const Kn = (e) => {
  const { subscribe: t, set: n } = dt(null);
  let o = null;
  return t((i) => o = i), e.observe(({ changes: i }) => {
    if (o) {
      i.deleted.some((r) => r.id === o) && n(null);
      const s = i.updated.find(({ oldValue: r }) => r.id === o);
      s && n(s.newValue.id);
    }
  }), {
    get current() {
      return o;
    },
    subscribe: t,
    set: n
  };
};
var tn = /* @__PURE__ */ ((e) => (e.EDIT = "EDIT", e.SELECT = "SELECT", e.NONE = "NONE", e))(tn || {});
const xe = { selected: [] }, Wn = (e, t = "EDIT") => {
  const { subscribe: n, set: o } = dt(xe);
  let i = xe;
  n((u) => i = u);
  const s = () => o(xe), r = () => {
    var u;
    return ((u = i.selected) == null ? void 0 : u.length) === 0;
  }, f = (u) => {
    if (i.selected.length === 0)
      return !1;
    const m = typeof u == "string" ? u : u.id;
    return i.selected.some((d) => d.id === m);
  }, l = (u, m) => {
    const d = e.getAnnotation(u);
    if (d) {
      const p = Zn(d, t);
      o(p === "EDIT" ? { selected: [{ id: u, editable: !0 }], pointerEvent: m } : p === "SELECT" ? { selected: [{ id: u }], pointerEvent: m } : { selected: [], pointerEvent: m });
    } else
      console.warn("Invalid selection: " + u);
  }, c = (u, m = !0) => {
    const d = Array.isArray(u) ? u : [u], p = d.map((A) => e.getAnnotation(A)).filter((A) => A);
    o({ selected: p.map(({ id: A }) => ({ id: A, editable: m })) }), p.length !== d.length && console.warn("Invalid selection", u);
  }, h = (u) => {
    if (i.selected.length === 0)
      return !1;
    const { selected: m } = i;
    m.filter(({ id: d }) => u.includes(d)).length > 0 && o({ selected: m.filter(({ id: d }) => !u.includes(d)) });
  };
  return e.observe(({ changes: u }) => h(u.deleted.map((m) => m.id))), {
    clear: s,
    clickSelect: l,
    get selected() {
      return i ? [...i.selected] : null;
    },
    get pointerEvent() {
      return i ? i.pointerEvent : null;
    },
    isEmpty: r,
    isSelected: f,
    setSelected: c,
    subscribe: n
  };
}, Zn = (e, t) => typeof t == "function" ? t(e) || "EDIT" : t || "EDIT", Jn = [];
for (let e = 0; e < 256; ++e)
  Jn.push((e + 256).toString(16).slice(1));
typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const Qn = (e, t) => {
  const n = new Set(e.bodies.map((o) => o.id));
  return t.bodies.filter((o) => !n.has(o.id));
}, xn = (e, t) => {
  const n = new Set(t.bodies.map((o) => o.id));
  return e.bodies.filter((o) => !n.has(o.id));
}, $n = (e, t) => t.bodies.map((n) => {
  const o = e.bodies.find((i) => i.id === n.id);
  return { newBody: n, oldBody: o && !ye(o, n) ? o : void 0 };
}).filter(({ oldBody: n }) => n), eo = (e, t) => !ye(e.target, t.target), nn = (e, t) => {
  const n = Qn(e, t), o = xn(e, t), i = $n(e, t);
  return {
    oldValue: e,
    newValue: t,
    bodiesCreated: n.length > 0 ? n : void 0,
    bodiesDeleted: o.length > 0 ? o : void 0,
    bodiesUpdated: i.length > 0 ? i : void 0,
    targetUpdated: eo(e, t) ? { oldTarget: e.target, newTarget: t.target } : void 0
  };
};
var q = /* @__PURE__ */ ((e) => (e.LOCAL = "LOCAL", e.REMOTE = "REMOTE", e))(q || {});
const to = (e, t) => {
  var n, o;
  const { changes: i, origin: s } = t;
  if (!(!e.options.origin || e.options.origin === s))
    return !1;
  if (e.options.ignore) {
    const { ignore: r } = e.options, f = (l) => (l == null ? void 0 : l.length) > 0;
    if (!(f(i.created) || f(i.deleted))) {
      const l = (n = i.updated) == null ? void 0 : n.some((h) => f(h.bodiesCreated) || f(h.bodiesDeleted) || f(h.bodiesUpdated)), c = (o = i.updated) == null ? void 0 : o.some((h) => h.targetUpdated);
      if (r === "BODY_ONLY" && l && !c || r === "TARGET_ONLY" && c && !l)
        return !1;
    }
  }
  if (e.options.annotations) {
    const r = /* @__PURE__ */ new Set([
      ...i.created.map((f) => f.id),
      ...i.deleted.map((f) => f.id),
      ...i.updated.map(({ oldValue: f }) => f.id)
    ]);
    return !!(Array.isArray(e.options.annotations) ? e.options.annotations : [e.options.annotations]).find((f) => r.has(f));
  } else
    return !0;
}, no = (e, t) => {
  const n = new Set((e.created || []).map((u) => u.id)), o = new Set((e.updated || []).map(({ newValue: u }) => u.id)), i = new Set((t.created || []).map((u) => u.id)), s = new Set((t.deleted || []).map((u) => u.id)), r = new Set((t.updated || []).map(({ oldValue: u }) => u.id)), f = new Set((t.updated || []).filter(({ oldValue: u }) => n.has(u.id) || o.has(u.id)).map(({ oldValue: u }) => u.id)), l = [
    ...(e.created || []).filter((u) => !s.has(u.id)).map((u) => r.has(u.id) ? t.updated.find(({ oldValue: m }) => m.id === u.id).newValue : u),
    ...t.created || []
  ], c = [
    ...(e.deleted || []).filter((u) => !i.has(u.id)),
    ...(t.deleted || []).filter((u) => !n.has(u.id))
  ], h = [
    ...(e.updated || []).filter(({ newValue: u }) => !s.has(u.id)).map((u) => {
      const { oldValue: m, newValue: d } = u;
      if (r.has(d.id)) {
        const p = t.updated.find((A) => A.oldValue.id === d.id).newValue;
        return nn(m, p);
      } else
        return u;
    }),
    ...(t.updated || []).filter(({ oldValue: u }) => !f.has(u.id))
  ];
  return { created: l, deleted: c, updated: h };
}, oo = (e) => e.id !== void 0, io = () => {
  const e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map(), n = [], o = (y, b = {}) => n.push({ onChange: y, options: b }), i = (y) => {
    const b = n.findIndex((S) => S.onChange == y);
    b > -1 && n.splice(b, 1);
  }, s = (y, b) => {
    const S = {
      origin: y,
      changes: {
        created: b.created || [],
        updated: b.updated || [],
        deleted: b.deleted || []
      },
      state: [...e.values()]
    };
    n.forEach((P) => {
      to(P, S) && P.onChange(S);
    });
  }, r = (y, b = q.LOCAL) => {
    if (e.get(y.id))
      throw Error(`Cannot add annotation ${y.id} - exists already`);
    e.set(y.id, y), y.bodies.forEach((S) => t.set(S.id, y.id)), s(b, { created: [y] });
  }, f = (y, b) => {
    const S = typeof y == "string" ? b : y, P = typeof y == "string" ? y : y.id, B = e.get(P);
    if (B) {
      const C = nn(B, S);
      return P === S.id ? e.set(P, S) : (e.delete(P), e.set(S.id, S)), B.bodies.forEach((U) => t.delete(U.id)), S.bodies.forEach((U) => t.set(U.id, S.id)), C;
    } else
      console.warn(`Cannot update annotation ${P} - does not exist`);
  }, l = (y, b = q.LOCAL, S = q.LOCAL) => {
    const P = oo(b) ? S : b, B = f(y, b);
    B && s(P, { updated: [B] });
  }, c = (y, b = q.LOCAL) => {
    const S = y.reduce((P, B) => {
      const C = f(B);
      return C ? [...P, C] : P;
    }, []);
    S.length > 0 && s(b, { updated: S });
  }, h = (y, b = q.LOCAL) => {
    const S = e.get(y.annotation);
    if (S) {
      const P = {
        ...S,
        bodies: [...S.bodies, y]
      };
      e.set(S.id, P), t.set(y.id, P.id), s(b, { updated: [{
        oldValue: S,
        newValue: P,
        bodiesCreated: [y]
      }] });
    } else
      console.warn(`Attempt to add body to missing annotation: ${y.annotation}`);
  }, u = () => [...e.values()], m = (y = q.LOCAL) => {
    const b = [...e.values()];
    e.clear(), t.clear(), s(y, { deleted: b });
  }, d = (y, b = !0, S = q.LOCAL) => {
    if (b) {
      const P = [...e.values()];
      e.clear(), t.clear(), y.forEach((B) => {
        e.set(B.id, B), B.bodies.forEach((C) => t.set(C.id, B.id));
      }), s(S, { created: y, deleted: P });
    } else {
      const P = y.reduce((B, C) => {
        const U = e.get(C.id);
        return U ? [...B, U] : B;
      }, []);
      if (P.length > 0)
        throw Error(`Bulk insert would overwrite the following annotations: ${P.map((B) => B.id).join(", ")}`);
      y.forEach((B) => {
        e.set(B.id, B), B.bodies.forEach((C) => t.set(C.id, B.id));
      }), s(S, { created: y });
    }
  }, p = (y) => {
    const b = typeof y == "string" ? y : y.id, S = e.get(b);
    if (S)
      return e.delete(b), S.bodies.forEach((P) => t.delete(P.id)), S;
    console.warn(`Attempt to delete missing annotation: ${b}`);
  }, A = (y, b = q.LOCAL) => {
    const S = p(y);
    S && s(b, { deleted: [S] });
  }, E = (y, b = q.LOCAL) => {
    const S = y.reduce((P, B) => {
      const C = p(B);
      return C ? [...P, C] : P;
    }, []);
    S.length > 0 && s(b, { deleted: S });
  }, w = (y, b = q.LOCAL) => {
    const S = e.get(y.annotation);
    if (S) {
      const P = S.bodies.find((B) => B.id === y.id);
      if (P) {
        t.delete(P.id);
        const B = {
          ...S,
          bodies: S.bodies.filter((C) => C.id !== y.id)
        };
        e.set(S.id, B), s(b, { updated: [{
          oldValue: S,
          newValue: B,
          bodiesDeleted: [P]
        }] });
      } else
        console.warn(`Attempt to delete missing body ${y.id} from annotation ${y.annotation}`);
    } else
      console.warn(`Attempt to delete body from missing annotation ${y.annotation}`);
  }, g = (y) => {
    const b = e.get(y);
    return b ? { ...b } : void 0;
  }, _ = (y) => {
    const b = t.get(y);
    if (b) {
      const S = g(b).bodies.find((P) => P.id === y);
      if (S)
        return S;
      console.error(`Store integrity error: body ${y} in index, but not in annotation`);
    } else
      console.warn(`Attempt to retrieve missing body: ${y}`);
  }, M = (y, b) => {
    if (y.annotation !== b.annotation)
      throw "Annotation integrity violation: annotation ID must be the same when updating bodies";
    const S = e.get(y.annotation);
    if (S) {
      const P = S.bodies.find((C) => C.id === y.id), B = {
        ...S,
        bodies: S.bodies.map((C) => C.id === P.id ? b : C)
      };
      return e.set(S.id, B), P.id !== b.id && (t.delete(P.id), t.set(b.id, B.id)), {
        oldValue: S,
        newValue: B,
        bodiesUpdated: [{ oldBody: P, newBody: b }]
      };
    } else
      console.warn(`Attempt to add body to missing annotation ${y.annotation}`);
  }, L = (y, b, S = q.LOCAL) => {
    const P = M(y, b);
    s(S, { updated: [P] });
  }, D = (y, b = q.LOCAL) => {
    const S = y.map((P) => M({ id: P.id, annotation: P.annotation }, P));
    s(b, { updated: S });
  }, I = (y) => {
    const b = e.get(y.annotation);
    if (b) {
      const S = {
        ...b,
        target: {
          ...b.target,
          ...y
        }
      };
      return e.set(b.id, S), {
        oldValue: b,
        newValue: S,
        targetUpdated: {
          oldTarget: b.target,
          newTarget: y
        }
      };
    } else
      console.warn(`Attempt to update target on missing annotation: ${y.annotation}`);
  };
  return {
    addAnnotation: r,
    addBody: h,
    all: u,
    bulkAddAnnotation: d,
    bulkDeleteAnnotation: E,
    bulkUpdateAnnotation: c,
    bulkUpdateBodies: D,
    bulkUpdateTargets: (y, b = q.LOCAL) => {
      const S = y.map(I).filter((P) => P);
      S.length > 0 && s(b, { updated: S });
    },
    clear: m,
    deleteAnnotation: A,
    deleteBody: w,
    getAnnotation: g,
    getBody: _,
    observe: o,
    unobserve: i,
    updateAnnotation: l,
    updateBody: L,
    updateTarget: (y, b = q.LOCAL) => {
      const S = I(y);
      S && s(b, { updated: [S] });
    }
  };
}, so = (e) => ({
  ...e,
  subscribe: (t) => {
    const n = (o) => t(o.state);
    return e.observe(n), t(e.all()), () => e.unobserve(n);
  }
});
let ro = () => ({
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
const lo = 250, ao = (e) => {
  const t = ro(), n = [];
  let o = -1, i = !1, s = 0;
  const r = (d) => {
    if (!i) {
      const { changes: p } = d, A = performance.now();
      if (A - s > lo)
        n.splice(o + 1), n.push(p), o = n.length - 1;
      else {
        const E = n.length - 1;
        n[E] = no(n[E], p);
      }
      s = A;
    }
    i = !1;
  };
  e.observe(r, { origin: q.LOCAL });
  const f = (d) => (d == null ? void 0 : d.length) > 0 && e.bulkDeleteAnnotation(d), l = (d) => (d == null ? void 0 : d.length) > 0 && e.bulkAddAnnotation(d, !1), c = (d) => (d == null ? void 0 : d.length) > 0 && e.bulkUpdateAnnotation(d.map(({ oldValue: p }) => p)), h = (d) => (d == null ? void 0 : d.length) > 0 && e.bulkUpdateAnnotation(d.map(({ newValue: p }) => p)), u = (d) => (d == null ? void 0 : d.length) > 0 && e.bulkAddAnnotation(d, !1), m = (d) => (d == null ? void 0 : d.length) > 0 && e.bulkDeleteAnnotation(d);
  return {
    canRedo: () => n.length - 1 > o,
    canUndo: () => o > -1,
    destroy: () => e.unobserve(r),
    on: (d, p) => t.on(d, p),
    redo: () => {
      if (n.length - 1 > o) {
        i = !0;
        const { created: d, updated: p, deleted: A } = n[o + 1];
        l(d), h(p), m(A), t.emit("redo", n[o + 1]), o += 1;
      }
    },
    undo: () => {
      if (o > -1) {
        i = !0;
        const { created: d, updated: p, deleted: A } = n[o];
        f(d), c(p), u(A), t.emit("undo", n[o]), o -= 1;
      }
    }
  };
}, fo = () => {
  const { subscribe: e, set: t } = dt([]);
  return {
    subscribe: e,
    set: t
  };
}, uo = (e, t, n, o) => {
  const { store: i, selection: s, hover: r, viewport: f } = e, l = /* @__PURE__ */ new Map();
  let c = [], h, u;
  const m = (w, g) => {
    l.has(w) ? l.get(w).push(g) : l.set(w, [g]);
  }, d = (w, g) => {
    const _ = l.get(w);
    _ && _.indexOf(g) > 0 && _.splice(_.indexOf(g), 1);
  }, p = (w, g, _) => {
    l.has(w) && setTimeout(() => {
      l.get(w).forEach((M) => {
        if (n) {
          const L = Array.isArray(g) ? g.map((I) => n.serialize(I)) : n.serialize(g), D = _ ? _ instanceof PointerEvent ? _ : n.serialize(_) : void 0;
          M(L, D);
        } else
          M(g, _);
      });
    }, 1);
  }, A = () => {
    const { selected: w } = s, g = w.map(({ id: _ }) => i.getAnnotation(_));
    g.forEach((_) => {
      const M = c.find((L) => L.id === _.id);
      (!M || !ye(M, _)) && p("updateAnnotation", _, M);
    }), c = c.map((_) => g.find(({ id: L }) => L === _.id) || _);
  };
  s.subscribe(({ selected: w }) => {
    if (!(c.length === 0 && w.length === 0)) {
      if (c.length === 0 && w.length > 0)
        c = w.map(({ id: g }) => i.getAnnotation(g));
      else if (c.length > 0 && w.length === 0)
        c.forEach((g) => {
          const _ = i.getAnnotation(g.id);
          _ && !ye(_, g) && p("updateAnnotation", _, g);
        }), c = [];
      else {
        const g = new Set(c.map((M) => M.id)), _ = new Set(w.map(({ id: M }) => M));
        c.filter((M) => !_.has(M.id)).forEach((M) => {
          const L = i.getAnnotation(M.id);
          L && !ye(L, M) && p("updateAnnotation", L, M);
        }), c = [
          // Remove annotations that were deselected
          ...c.filter((M) => _.has(M.id)),
          // Add editable annotations that were selected
          ...w.filter(({ id: M }) => !g.has(M)).map(({ id: M }) => i.getAnnotation(M))
        ];
      }
      p("selectionChanged", c);
    }
  }), r.subscribe((w) => {
    !h && w ? p("mouseEnterAnnotation", i.getAnnotation(w)) : h && !w ? p("mouseLeaveAnnotation", i.getAnnotation(h)) : h && w && (p("mouseLeaveAnnotation", i.getAnnotation(h)), p("mouseEnterAnnotation", i.getAnnotation(w))), h = w;
  }), f == null || f.subscribe((w) => p("viewportIntersect", w.map(i.getAnnotation))), i.observe((w) => {
    o && (u && clearTimeout(u), u = setTimeout(A, 1e3));
    const { created: g, deleted: _ } = w.changes;
    g.forEach((M) => p("createAnnotation", M)), _.forEach((M) => p("deleteAnnotation", M)), w.changes.updated.filter((M) => [
      ...M.bodiesCreated || [],
      ...M.bodiesDeleted || [],
      ...M.bodiesUpdated || []
    ].length > 0).forEach(({ oldValue: M, newValue: L }) => {
      const D = c.find((I) => I.id === M.id) || M;
      c = c.map((I) => I.id === M.id ? L : I), p("updateAnnotation", L, D);
    });
  }, { origin: q.LOCAL }), i.observe((w) => {
    if (c) {
      const g = new Set(c.map((M) => M.id)), _ = w.changes.updated.filter(({ newValue: M }) => g.has(M.id)).map(({ newValue: M }) => M);
      _.length > 0 && (c = c.map((M) => _.find((D) => D.id === M.id) || M));
    }
  }, { origin: q.REMOTE });
  const E = (w) => (g) => {
    const { created: _, deleted: M, updated: L } = g;
    _.forEach((D) => p("createAnnotation", D)), M.forEach((D) => p("deleteAnnotation", D)), w ? L.forEach((D) => p("updateAnnotation", D.oldValue, D.newValue)) : L.forEach((D) => p("updateAnnotation", D.newValue, D.oldValue));
  };
  return t.on("undo", E(!0)), t.on("redo", E(!1)), { on: m, off: d, emit: p };
}, co = (e) => (t) => t.reduce((n, o) => {
  const { parsed: i, error: s } = e.parse(o);
  return s ? {
    parsed: n.parsed,
    failed: [...n.failed, o]
  } : {
    parsed: [...n.parsed, i],
    failed: n.failed
  };
}, { parsed: [], failed: [] }), ho = (e, t, n) => {
  const { store: o, selection: i } = e, s = (E) => {
    if (n) {
      const { parsed: w, error: g } = n.parse(E);
      w ? o.addAnnotation(w, q.REMOTE) : console.error(g);
    } else
      o.addAnnotation(E, q.REMOTE);
  }, r = () => i.clear(), f = () => o.clear(), l = (E) => {
    const w = o.getAnnotation(E);
    return n && w ? n.serialize(w) : w;
  }, c = () => n ? o.all().map(n.serialize) : o.all(), h = () => {
    var E;
    const w = (((E = i.selected) == null ? void 0 : E.map((g) => g.id)) || []).map((g) => o.getAnnotation(g));
    return n ? w.map(n.serialize) : w;
  }, u = (E) => fetch(E).then((w) => w.json()).then((w) => (d(w), w)), m = (E) => {
    if (typeof E == "string") {
      const w = o.getAnnotation(E);
      return o.deleteAnnotation(E), n ? n.serialize(w) : w;
    } else {
      const w = n ? n.parse(E).parsed : E;
      return o.deleteAnnotation(w), E;
    }
  }, d = (E) => {
    if (n) {
      const { parsed: w, failed: g } = co(n)(E);
      g.length > 0 && console.warn(`Discarded ${g.length} invalid annotations`, g), o.bulkAddAnnotation(w, !0, q.REMOTE);
    } else
      o.bulkAddAnnotation(E, !0, q.REMOTE);
  }, p = (E) => {
    E ? i.setSelected(E) : i.clear();
  }, A = (E) => {
    if (n) {
      const w = n.parse(E).parsed, g = n.serialize(o.getAnnotation(w.id));
      return o.updateAnnotation(w), g;
    } else {
      const w = o.getAnnotation(E.id);
      return o.updateAnnotation(E), w;
    }
  };
  return {
    addAnnotation: s,
    cancelSelected: r,
    canRedo: t.canRedo,
    canUndo: t.canUndo,
    clearAnnotations: f,
    getAnnotationById: l,
    getAnnotations: c,
    getSelected: h,
    loadAnnotations: u,
    redo: t.redo,
    removeAnnotation: m,
    setAnnotations: d,
    setSelected: p,
    undo: t.undo,
    updateAnnotation: A
  };
};
let mo = (e) => crypto.getRandomValues(new Uint8Array(e)), go = (e, t, n) => {
  let o = (2 << Math.log(e.length - 1) / Math.LN2) - 1, i = -~(1.6 * o * t / e.length);
  return (s = t) => {
    let r = "";
    for (; ; ) {
      let f = n(i), l = i;
      for (; l--; )
        if (r += e[f[l] & o] || "", r.length === s)
          return r;
    }
  };
}, po = (e, t = 21) => go(e, t, mo), yo = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
const _o = () => ({ isGuest: !0, id: po("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_", 20)() }), wo = (e) => {
  const t = JSON.stringify(e);
  let n = 0;
  for (let o = 0, i = t.length; o < i; o++) {
    let s = t.charCodeAt(o);
    n = (n << 5) - n + s, n |= 0;
  }
  return `${n}`;
}, on = (e) => e ? typeof e == "object" ? { ...e } : e : void 0, bo = (e, t) => (Array.isArray(e) ? e : [e]).map((n) => {
  const { id: o, type: i, purpose: s, value: r, created: f, creator: l, ...c } = n;
  return {
    id: o || `temp-${wo(n)}`,
    annotation: t,
    type: i,
    purpose: s,
    value: r,
    created: f ? new Date(f) : void 0,
    creator: on(l),
    ...c
  };
}), Eo = (e) => e.map((t) => {
  var n;
  const o = { ...t };
  return delete o.annotation, (n = o.id) != null && n.startsWith("temp-") && delete o.id, o;
});
yo();
const rs = (e, t = !1) => ({ parse: (i) => Ao(i, t), serialize: (i) => So(i, e) }), Ao = (e, t = !1) => {
  const n = e.id || en(), {
    creator: o,
    created: i,
    updatedBy: s,
    updated: r,
    body: f,
    ...l
  } = e, c = bo(f, n), h = Array.isArray(e.target) ? e.target[0] : e.target, u = Array.isArray(h.selector) ? h.selector[0] : h.selector, m = u.type === "FragmentSelector" ? On(u, t) : u.type === "SvgSelector" ? Hn(u) : void 0;
  return m ? {
    parsed: {
      ...l,
      id: n,
      bodies: c,
      target: {
        created: i ? new Date(i) : void 0,
        creator: on(o),
        ...l.target,
        annotation: n,
        selector: m
      }
    }
  } : {
    error: Error(`Unknown selector type: ${u.type}`)
  };
}, So = (e, t) => {
  const {
    selector: n,
    creator: o,
    created: i,
    updated: s,
    updatedBy: r,
    ...f
  } = e.target, l = n.type == F.RECTANGLE ? kn(n.geometry) : Fn(n);
  return {
    ...e,
    "@context": "http://www.w3.org/ns/anno.jsonld",
    id: e.id,
    type: "Annotation",
    body: Eo(e.bodies),
    creator: o,
    created: i == null ? void 0 : i.toISOString(),
    target: {
      ...f,
      source: t,
      selector: l
    }
  };
};
function At(e, t, n) {
  const o = e.slice();
  return o[11] = t[n], o[13] = n, o;
}
function St(e) {
  let t, n, o, i, s;
  return {
    c() {
      t = Y("rect"), a(t, "class", "a9s-corner-handle"), a(t, "x", n = /*point*/
      e[11][0] - /*handleSize*/
      e[3] / 2), a(t, "y", o = /*point*/
      e[11][1] - /*handleSize*/
      e[3] / 2), a(
        t,
        "height",
        /*handleSize*/
        e[3]
      ), a(
        t,
        "width",
        /*handleSize*/
        e[3]
      );
    },
    m(r, f) {
      k(r, t, f), i || (s = j(t, "pointerdown", function() {
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
    p(r, f) {
      e = r, f & /*geom, handleSize*/
      24 && n !== (n = /*point*/
      e[11][0] - /*handleSize*/
      e[3] / 2) && a(t, "x", n), f & /*geom, handleSize*/
      24 && o !== (o = /*point*/
      e[11][1] - /*handleSize*/
      e[3] / 2) && a(t, "y", o), f & /*handleSize*/
      8 && a(
        t,
        "height",
        /*handleSize*/
        e[3]
      ), f & /*handleSize*/
      8 && a(
        t,
        "width",
        /*handleSize*/
        e[3]
      );
    },
    d(r) {
      r && O(t), i = !1, s();
    }
  };
}
function Mo(e) {
  let t, n, o, i, s, r, f, l, c, h, u = (
    /*geom*/
    e[4].points
  ), m = [];
  for (let d = 0; d < u.length; d += 1)
    m[d] = St(At(e, u, d));
  return {
    c() {
      t = Y("polygon"), i = J(), s = Y("polygon"), f = J();
      for (let d = 0; d < m.length; d += 1)
        m[d].c();
      l = ce(), a(t, "class", "a9s-outer"), a(t, "style", n = /*computedStyle*/
      e[1] ? "display:none;" : void 0), a(t, "points", o = /*geom*/
      e[4].points.map(Mt).join(" ")), a(s, "class", "a9s-inner a9s-shape-handle"), a(
        s,
        "style",
        /*computedStyle*/
        e[1]
      ), a(s, "points", r = /*geom*/
      e[4].points.map(Tt).join(" "));
    },
    m(d, p) {
      k(d, t, p), k(d, i, p), k(d, s, p), k(d, f, p);
      for (let A = 0; A < m.length; A += 1)
        m[A] && m[A].m(d, p);
      k(d, l, p), c || (h = [
        j(t, "pointerdown", function() {
          V(
            /*grab*/
            e[10](T.SHAPE)
          ) && e[10](T.SHAPE).apply(this, arguments);
        }),
        j(s, "pointerdown", function() {
          V(
            /*grab*/
            e[10](T.SHAPE)
          ) && e[10](T.SHAPE).apply(this, arguments);
        })
      ], c = !0);
    },
    p(d, p) {
      if (e = d, p & /*computedStyle*/
      2 && n !== (n = /*computedStyle*/
      e[1] ? "display:none;" : void 0) && a(t, "style", n), p & /*geom*/
      16 && o !== (o = /*geom*/
      e[4].points.map(Mt).join(" ")) && a(t, "points", o), p & /*computedStyle*/
      2 && a(
        s,
        "style",
        /*computedStyle*/
        e[1]
      ), p & /*geom*/
      16 && r !== (r = /*geom*/
      e[4].points.map(Tt).join(" ")) && a(s, "points", r), p & /*geom, handleSize, grab, Handle*/
      1048) {
        u = /*geom*/
        e[4].points;
        let A;
        for (A = 0; A < u.length; A += 1) {
          const E = At(e, u, A);
          m[A] ? m[A].p(E, p) : (m[A] = St(E), m[A].c(), m[A].m(l.parentNode, l));
        }
        for (; A < m.length; A += 1)
          m[A].d(1);
        m.length = u.length;
      }
    },
    d(d) {
      d && O(t), d && O(i), d && O(s), d && O(f), ft(m, d), d && O(l), c = !1, re(h);
    }
  };
}
function To(e) {
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
          Mo,
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
      ie(t, o, i), n = !0;
    },
    p(o, [i]) {
      const s = {};
      i & /*shape*/
      1 && (s.shape = /*shape*/
      o[0]), i & /*transform*/
      4 && (s.transform = /*transform*/
      o[2]), i & /*$$scope, geom, handleSize, grab, computedStyle*/
      17434 && (s.$$scope = { dirty: i, ctx: o }), t.$set(s);
    },
    i(o) {
      n || (H(t.$$.fragment, o), n = !0);
    },
    o(o) {
      G(t.$$.fragment, o), n = !1;
    },
    d(o) {
      se(t, o);
    }
  };
}
const Mt = (e) => e.join(","), Tt = (e) => e.join(",");
function Lo(e, t, n) {
  let o, i, { shape: s } = t, { computedStyle: r = void 0 } = t, { transform: f } = t, { viewportScale: l = 1 } = t;
  const c = (d, p, A) => {
    let E;
    p === T.SHAPE ? E = d.geometry.points.map(([g, _]) => [g + A[0], _ + A[1]]) : E = d.geometry.points.map(([g, _], M) => p === T(M) ? [g + A[0], _ + A[1]] : [g, _]);
    const w = _e(E);
    return { ...d, geometry: { points: E, bounds: w } };
  };
  function h(d) {
    te.call(this, e, d);
  }
  function u(d) {
    te.call(this, e, d);
  }
  function m(d) {
    te.call(this, e, d);
  }
  return e.$$set = (d) => {
    "shape" in d && n(0, s = d.shape), "computedStyle" in d && n(1, r = d.computedStyle), "transform" in d && n(2, f = d.transform), "viewportScale" in d && n(6, l = d.viewportScale);
  }, e.$$.update = () => {
    e.$$.dirty & /*shape*/
    1 && n(4, o = s.geometry), e.$$.dirty & /*viewportScale*/
    64 && n(3, i = 10 / l);
  }, [
    s,
    r,
    f,
    i,
    o,
    c,
    l,
    h,
    u,
    m
  ];
}
class Oo extends x {
  constructor(t) {
    super(), Q(this, t, Lo, To, K, {
      shape: 0,
      computedStyle: 1,
      transform: 2,
      viewportScale: 6
    });
  }
}
function ko(e) {
  let t, n, o, i, s, r, f, l, c, h, u, m, d, p, A, E, w, g, _, M, L, D, I, y, b, S, P, B, C, U, R, be, ke, X, ee, W, me, Z, ge, Ce, Ke, ne, Ue, He, We, oe, Fe, Ge, Ze, mt;
  return {
    c() {
      t = Y("rect"), f = J(), l = Y("rect"), d = J(), p = Y("rect"), g = J(), _ = Y("rect"), I = J(), y = Y("rect"), B = J(), C = Y("rect"), ke = J(), X = Y("rect"), me = J(), Z = Y("rect"), Ke = J(), ne = Y("rect"), We = J(), oe = Y("rect"), a(t, "class", "a9s-outer"), a(t, "style", n = /*computedStyle*/
      e[1] ? "display:none;" : void 0), a(t, "x", o = /*geom*/
      e[4].x), a(t, "y", i = /*geom*/
      e[4].y), a(t, "width", s = /*geom*/
      e[4].w), a(t, "height", r = /*geom*/
      e[4].h), a(l, "class", "a9s-inner a9s-shape-handle"), a(
        l,
        "style",
        /*computedStyle*/
        e[1]
      ), a(l, "x", c = /*geom*/
      e[4].x), a(l, "y", h = /*geom*/
      e[4].y), a(l, "width", u = /*geom*/
      e[4].w), a(l, "height", m = /*geom*/
      e[4].h), a(p, "class", "a9s-edge-handle a9s-edge-handle-top"), a(p, "x", A = /*geom*/
      e[4].x), a(p, "y", E = /*geom*/
      e[4].y), a(p, "height", 1), a(p, "width", w = /*geom*/
      e[4].w), a(_, "class", "a9s-edge-handle a9s-edge-handle-right"), a(_, "x", M = /*geom*/
      e[4].x + /*geom*/
      e[4].w), a(_, "y", L = /*geom*/
      e[4].y), a(_, "height", D = /*geom*/
      e[4].h), a(_, "width", 1), a(y, "class", "a9s-edge-handle a9s-edge-handle-bottom"), a(y, "x", b = /*geom*/
      e[4].x), a(y, "y", S = /*geom*/
      e[4].y + /*geom*/
      e[4].h), a(y, "height", 1), a(y, "width", P = /*geom*/
      e[4].w), a(C, "class", "a9s-edge-handle a9s-edge-handle-left"), a(C, "x", U = /*geom*/
      e[4].x), a(C, "y", R = /*geom*/
      e[4].y), a(C, "height", be = /*geom*/
      e[4].h), a(C, "width", 1), a(X, "class", "a9s-corner-handle a9s-corner-handle-topleft"), a(X, "x", ee = /*geom*/
      e[4].x - /*handleSize*/
      e[3] / 2), a(X, "y", W = /*geom*/
      e[4].y - /*handleSize*/
      e[3] / 2), a(
        X,
        "height",
        /*handleSize*/
        e[3]
      ), a(
        X,
        "width",
        /*handleSize*/
        e[3]
      ), a(Z, "class", "a9s-corner-handle a9s-corner-handle-topright"), a(Z, "x", ge = /*geom*/
      e[4].x + /*geom*/
      e[4].w - /*handleSize*/
      e[3] / 2), a(Z, "y", Ce = /*geom*/
      e[4].y - /*handleSize*/
      e[3] / 2), a(
        Z,
        "height",
        /*handleSize*/
        e[3]
      ), a(
        Z,
        "width",
        /*handleSize*/
        e[3]
      ), a(ne, "class", "a9s-corner-handle a9s-corner-handle-bottomright"), a(ne, "x", Ue = /*geom*/
      e[4].x + /*geom*/
      e[4].w - /*handleSize*/
      e[3] / 2), a(ne, "y", He = /*geom*/
      e[4].y + /*geom*/
      e[4].h - /*handleSize*/
      e[3] / 2), a(
        ne,
        "height",
        /*handleSize*/
        e[3]
      ), a(
        ne,
        "width",
        /*handleSize*/
        e[3]
      ), a(oe, "class", "a9s-corner-handle a9s-corner-handle-bottomleft"), a(oe, "x", Fe = /*geom*/
      e[4].x - /*handleSize*/
      e[3] / 2), a(oe, "y", Ge = /*geom*/
      e[4].y + /*geom*/
      e[4].h - /*handleSize*/
      e[3] / 2), a(
        oe,
        "height",
        /*handleSize*/
        e[3]
      ), a(
        oe,
        "width",
        /*handleSize*/
        e[3]
      );
    },
    m(N, v) {
      k(N, t, v), k(N, f, v), k(N, l, v), k(N, d, v), k(N, p, v), k(N, g, v), k(N, _, v), k(N, I, v), k(N, y, v), k(N, B, v), k(N, C, v), k(N, ke, v), k(N, X, v), k(N, me, v), k(N, Z, v), k(N, Ke, v), k(N, ne, v), k(N, We, v), k(N, oe, v), Ze || (mt = [
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
        j(_, "pointerdown", function() {
          V(
            /*grab*/
            e[10](T.RIGHT)
          ) && e[10](T.RIGHT).apply(this, arguments);
        }),
        j(y, "pointerdown", function() {
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
        j(X, "pointerdown", function() {
          V(
            /*grab*/
            e[10](T.TOP_LEFT)
          ) && e[10](T.TOP_LEFT).apply(this, arguments);
        }),
        j(Z, "pointerdown", function() {
          V(
            /*grab*/
            e[10](T.TOP_RIGHT)
          ) && e[10](T.TOP_RIGHT).apply(this, arguments);
        }),
        j(ne, "pointerdown", function() {
          V(
            /*grab*/
            e[10](T.BOTTOM_RIGHT)
          ) && e[10](T.BOTTOM_RIGHT).apply(this, arguments);
        }),
        j(oe, "pointerdown", function() {
          V(
            /*grab*/
            e[10](T.BOTTOM_LEFT)
          ) && e[10](T.BOTTOM_LEFT).apply(this, arguments);
        })
      ], Ze = !0);
    },
    p(N, v) {
      e = N, v & /*computedStyle*/
      2 && n !== (n = /*computedStyle*/
      e[1] ? "display:none;" : void 0) && a(t, "style", n), v & /*geom*/
      16 && o !== (o = /*geom*/
      e[4].x) && a(t, "x", o), v & /*geom*/
      16 && i !== (i = /*geom*/
      e[4].y) && a(t, "y", i), v & /*geom*/
      16 && s !== (s = /*geom*/
      e[4].w) && a(t, "width", s), v & /*geom*/
      16 && r !== (r = /*geom*/
      e[4].h) && a(t, "height", r), v & /*computedStyle*/
      2 && a(
        l,
        "style",
        /*computedStyle*/
        e[1]
      ), v & /*geom*/
      16 && c !== (c = /*geom*/
      e[4].x) && a(l, "x", c), v & /*geom*/
      16 && h !== (h = /*geom*/
      e[4].y) && a(l, "y", h), v & /*geom*/
      16 && u !== (u = /*geom*/
      e[4].w) && a(l, "width", u), v & /*geom*/
      16 && m !== (m = /*geom*/
      e[4].h) && a(l, "height", m), v & /*geom*/
      16 && A !== (A = /*geom*/
      e[4].x) && a(p, "x", A), v & /*geom*/
      16 && E !== (E = /*geom*/
      e[4].y) && a(p, "y", E), v & /*geom*/
      16 && w !== (w = /*geom*/
      e[4].w) && a(p, "width", w), v & /*geom*/
      16 && M !== (M = /*geom*/
      e[4].x + /*geom*/
      e[4].w) && a(_, "x", M), v & /*geom*/
      16 && L !== (L = /*geom*/
      e[4].y) && a(_, "y", L), v & /*geom*/
      16 && D !== (D = /*geom*/
      e[4].h) && a(_, "height", D), v & /*geom*/
      16 && b !== (b = /*geom*/
      e[4].x) && a(y, "x", b), v & /*geom*/
      16 && S !== (S = /*geom*/
      e[4].y + /*geom*/
      e[4].h) && a(y, "y", S), v & /*geom*/
      16 && P !== (P = /*geom*/
      e[4].w) && a(y, "width", P), v & /*geom*/
      16 && U !== (U = /*geom*/
      e[4].x) && a(C, "x", U), v & /*geom*/
      16 && R !== (R = /*geom*/
      e[4].y) && a(C, "y", R), v & /*geom*/
      16 && be !== (be = /*geom*/
      e[4].h) && a(C, "height", be), v & /*geom, handleSize*/
      24 && ee !== (ee = /*geom*/
      e[4].x - /*handleSize*/
      e[3] / 2) && a(X, "x", ee), v & /*geom, handleSize*/
      24 && W !== (W = /*geom*/
      e[4].y - /*handleSize*/
      e[3] / 2) && a(X, "y", W), v & /*handleSize*/
      8 && a(
        X,
        "height",
        /*handleSize*/
        e[3]
      ), v & /*handleSize*/
      8 && a(
        X,
        "width",
        /*handleSize*/
        e[3]
      ), v & /*geom, handleSize*/
      24 && ge !== (ge = /*geom*/
      e[4].x + /*geom*/
      e[4].w - /*handleSize*/
      e[3] / 2) && a(Z, "x", ge), v & /*geom, handleSize*/
      24 && Ce !== (Ce = /*geom*/
      e[4].y - /*handleSize*/
      e[3] / 2) && a(Z, "y", Ce), v & /*handleSize*/
      8 && a(
        Z,
        "height",
        /*handleSize*/
        e[3]
      ), v & /*handleSize*/
      8 && a(
        Z,
        "width",
        /*handleSize*/
        e[3]
      ), v & /*geom, handleSize*/
      24 && Ue !== (Ue = /*geom*/
      e[4].x + /*geom*/
      e[4].w - /*handleSize*/
      e[3] / 2) && a(ne, "x", Ue), v & /*geom, handleSize*/
      24 && He !== (He = /*geom*/
      e[4].y + /*geom*/
      e[4].h - /*handleSize*/
      e[3] / 2) && a(ne, "y", He), v & /*handleSize*/
      8 && a(
        ne,
        "height",
        /*handleSize*/
        e[3]
      ), v & /*handleSize*/
      8 && a(
        ne,
        "width",
        /*handleSize*/
        e[3]
      ), v & /*geom, handleSize*/
      24 && Fe !== (Fe = /*geom*/
      e[4].x - /*handleSize*/
      e[3] / 2) && a(oe, "x", Fe), v & /*geom, handleSize*/
      24 && Ge !== (Ge = /*geom*/
      e[4].y + /*geom*/
      e[4].h - /*handleSize*/
      e[3] / 2) && a(oe, "y", Ge), v & /*handleSize*/
      8 && a(
        oe,
        "height",
        /*handleSize*/
        e[3]
      ), v & /*handleSize*/
      8 && a(
        oe,
        "width",
        /*handleSize*/
        e[3]
      );
    },
    d(N) {
      N && O(t), N && O(f), N && O(l), N && O(d), N && O(p), N && O(g), N && O(_), N && O(I), N && O(y), N && O(B), N && O(C), N && O(ke), N && O(X), N && O(me), N && O(Z), N && O(Ke), N && O(ne), N && O(We), N && O(oe), Ze = !1, re(mt);
    }
  };
}
function Po(e) {
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
          ko,
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
      ie(t, o, i), n = !0;
    },
    p(o, [i]) {
      const s = {};
      i & /*shape*/
      1 && (s.shape = /*shape*/
      o[0]), i & /*transform*/
      4 && (s.transform = /*transform*/
      o[2]), i & /*$$scope, geom, handleSize, grab, computedStyle*/
      3098 && (s.$$scope = { dirty: i, ctx: o }), t.$set(s);
    },
    i(o) {
      n || (H(t.$$.fragment, o), n = !0);
    },
    o(o) {
      G(t.$$.fragment, o), n = !1;
    },
    d(o) {
      se(t, o);
    }
  };
}
function Io(e, t, n) {
  let o, i, { shape: s } = t, { computedStyle: r = void 0 } = t, { transform: f } = t, { viewportScale: l = 1 } = t;
  const c = (d, p, A) => {
    const E = d.geometry.bounds;
    let [w, g] = [E.minX, E.minY], [_, M] = [E.maxX, E.maxY];
    const [L, D] = A;
    if (p === T.SHAPE)
      w += L, _ += L, g += D, M += D;
    else {
      switch (p) {
        case T.TOP:
        case T.TOP_LEFT:
        case T.TOP_RIGHT: {
          g += D;
          break;
        }
        case T.BOTTOM:
        case T.BOTTOM_LEFT:
        case T.BOTTOM_RIGHT: {
          M += D;
          break;
        }
      }
      switch (p) {
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
    const I = Math.min(w, _), y = Math.min(g, M), b = Math.abs(_ - w), S = Math.abs(M - g);
    return {
      ...d,
      geometry: {
        x: I,
        y,
        w: b,
        h: S,
        bounds: {
          minX: I,
          minY: y,
          maxX: I + b,
          maxY: y + S
        }
      }
    };
  };
  function h(d) {
    te.call(this, e, d);
  }
  function u(d) {
    te.call(this, e, d);
  }
  function m(d) {
    te.call(this, e, d);
  }
  return e.$$set = (d) => {
    "shape" in d && n(0, s = d.shape), "computedStyle" in d && n(1, r = d.computedStyle), "transform" in d && n(2, f = d.transform), "viewportScale" in d && n(6, l = d.viewportScale);
  }, e.$$.update = () => {
    e.$$.dirty & /*shape*/
    1 && n(4, o = s.geometry), e.$$.dirty & /*viewportScale*/
    64 && n(3, i = 10 / l);
  }, [
    s,
    r,
    f,
    i,
    o,
    c,
    l,
    h,
    u,
    m
  ];
}
class vo extends x {
  constructor(t) {
    super(), Q(this, t, Io, Po, K, {
      shape: 0,
      computedStyle: 1,
      transform: 2,
      viewportScale: 6
    });
  }
}
function Do(e) {
  let t, n, o, i, s, r, f, l, c, h, u, m, d, p, A, E, w, g, _, M, L, D, I, y, b, S, P, B, C;
  return {
    c() {
      t = Y("ellipse"), r = J(), f = Y("ellipse"), m = J(), d = Y("rect"), E = J(), w = Y("rect"), M = J(), L = Y("rect"), y = J(), b = Y("rect"), a(t, "class", "a9s-outer"), a(t, "cx", n = /*geom*/
      e[3].cx), a(t, "cy", o = /*geom*/
      e[3].cy), a(t, "rx", i = /*geom*/
      e[3].rx), a(t, "ry", s = /*geom*/
      e[3].ry), a(f, "class", "a9s-inner a9s-shape-handle"), a(f, "cx", l = /*geom*/
      e[3].cx), a(f, "cy", c = /*geom*/
      e[3].cy), a(f, "rx", h = /*geom*/
      e[3].rx), a(f, "ry", u = /*geom*/
      e[3].ry), a(d, "class", "a9s-corner-handle a9s-corner-top"), a(d, "x", p = /*geom*/
      e[3].cx - /*handleSize*/
      e[2] / 2), a(d, "y", A = /*geom*/
      e[3].cy - /*handleSize*/
      e[2] / 2 - /*geom*/
      e[3].ry), a(
        d,
        "height",
        /*handleSize*/
        e[2]
      ), a(
        d,
        "width",
        /*handleSize*/
        e[2]
      ), a(w, "class", "a9s-corner-handle a9s-corner-handle-right"), a(w, "x", g = /*geom*/
      e[3].cx + /*geom*/
      e[3].rx - /*handleSize*/
      e[2] / 2), a(w, "y", _ = /*geom*/
      e[3].cy - /*handleSize*/
      e[2] / 2), a(
        w,
        "height",
        /*handleSize*/
        e[2]
      ), a(
        w,
        "width",
        /*handleSize*/
        e[2]
      ), a(L, "class", "a9s-corner-handle a9s-corner-handle-bottom"), a(L, "x", D = /*geom*/
      e[3].cx - /*handleSize*/
      e[2] / 2), a(L, "y", I = /*geom*/
      e[3].cy + /*geom*/
      e[3].ry - /*handleSize*/
      e[2] / 2), a(
        L,
        "height",
        /*handleSize*/
        e[2]
      ), a(
        L,
        "width",
        /*handleSize*/
        e[2]
      ), a(b, "class", "a9s-corner-handle a9s-corner-handle-left"), a(b, "x", S = /*geom*/
      e[3].cx - /*geom*/
      e[3].rx - /*handleSize*/
      e[2] / 2), a(b, "y", P = /*geom*/
      e[3].cy - /*handleSize*/
      e[2] / 2), a(
        b,
        "height",
        /*handleSize*/
        e[2]
      ), a(
        b,
        "width",
        /*handleSize*/
        e[2]
      );
    },
    m(U, R) {
      k(U, t, R), k(U, r, R), k(U, f, R), k(U, m, R), k(U, d, R), k(U, E, R), k(U, w, R), k(U, M, R), k(U, L, R), k(U, y, R), k(U, b, R), B || (C = [
        j(t, "pointerdown", function() {
          V(
            /*grab*/
            e[9](T.SHAPE)
          ) && e[9](T.SHAPE).apply(this, arguments);
        }),
        j(f, "pointerdown", function() {
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
        j(b, "pointerdown", function() {
          V(
            /*grab*/
            e[9](T.LEFT)
          ) && e[9](T.LEFT).apply(this, arguments);
        })
      ], B = !0);
    },
    p(U, R) {
      e = U, R & /*geom*/
      8 && n !== (n = /*geom*/
      e[3].cx) && a(t, "cx", n), R & /*geom*/
      8 && o !== (o = /*geom*/
      e[3].cy) && a(t, "cy", o), R & /*geom*/
      8 && i !== (i = /*geom*/
      e[3].rx) && a(t, "rx", i), R & /*geom*/
      8 && s !== (s = /*geom*/
      e[3].ry) && a(t, "ry", s), R & /*geom*/
      8 && l !== (l = /*geom*/
      e[3].cx) && a(f, "cx", l), R & /*geom*/
      8 && c !== (c = /*geom*/
      e[3].cy) && a(f, "cy", c), R & /*geom*/
      8 && h !== (h = /*geom*/
      e[3].rx) && a(f, "rx", h), R & /*geom*/
      8 && u !== (u = /*geom*/
      e[3].ry) && a(f, "ry", u), R & /*geom, handleSize*/
      12 && p !== (p = /*geom*/
      e[3].cx - /*handleSize*/
      e[2] / 2) && a(d, "x", p), R & /*geom, handleSize*/
      12 && A !== (A = /*geom*/
      e[3].cy - /*handleSize*/
      e[2] / 2 - /*geom*/
      e[3].ry) && a(d, "y", A), R & /*handleSize*/
      4 && a(
        d,
        "height",
        /*handleSize*/
        e[2]
      ), R & /*handleSize*/
      4 && a(
        d,
        "width",
        /*handleSize*/
        e[2]
      ), R & /*geom, handleSize*/
      12 && g !== (g = /*geom*/
      e[3].cx + /*geom*/
      e[3].rx - /*handleSize*/
      e[2] / 2) && a(w, "x", g), R & /*geom, handleSize*/
      12 && _ !== (_ = /*geom*/
      e[3].cy - /*handleSize*/
      e[2] / 2) && a(w, "y", _), R & /*handleSize*/
      4 && a(
        w,
        "height",
        /*handleSize*/
        e[2]
      ), R & /*handleSize*/
      4 && a(
        w,
        "width",
        /*handleSize*/
        e[2]
      ), R & /*geom, handleSize*/
      12 && D !== (D = /*geom*/
      e[3].cx - /*handleSize*/
      e[2] / 2) && a(L, "x", D), R & /*geom, handleSize*/
      12 && I !== (I = /*geom*/
      e[3].cy + /*geom*/
      e[3].ry - /*handleSize*/
      e[2] / 2) && a(L, "y", I), R & /*handleSize*/
      4 && a(
        L,
        "height",
        /*handleSize*/
        e[2]
      ), R & /*handleSize*/
      4 && a(
        L,
        "width",
        /*handleSize*/
        e[2]
      ), R & /*geom, handleSize*/
      12 && S !== (S = /*geom*/
      e[3].cx - /*geom*/
      e[3].rx - /*handleSize*/
      e[2] / 2) && a(b, "x", S), R & /*geom, handleSize*/
      12 && P !== (P = /*geom*/
      e[3].cy - /*handleSize*/
      e[2] / 2) && a(b, "y", P), R & /*handleSize*/
      4 && a(
        b,
        "height",
        /*handleSize*/
        e[2]
      ), R & /*handleSize*/
      4 && a(
        b,
        "width",
        /*handleSize*/
        e[2]
      );
    },
    d(U) {
      U && O(t), U && O(r), U && O(f), U && O(m), U && O(d), U && O(E), U && O(w), U && O(M), U && O(L), U && O(y), U && O(b), B = !1, re(C);
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
        e[1]
      ),
      editor: (
        /*editor*/
        e[4]
      ),
      $$slots: {
        default: [
          Do,
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
      ie(t, o, i), n = !0;
    },
    p(o, [i]) {
      const s = {};
      i & /*shape*/
      1 && (s.shape = /*shape*/
      o[0]), i & /*transform*/
      2 && (s.transform = /*transform*/
      o[1]), i & /*$$scope, geom, handleSize, grab*/
      1548 && (s.$$scope = { dirty: i, ctx: o }), t.$set(s);
    },
    i(o) {
      n || (H(t.$$.fragment, o), n = !0);
    },
    o(o) {
      G(t.$$.fragment, o), n = !1;
    },
    d(o) {
      se(t, o);
    }
  };
}
function Yo(e, t, n) {
  let o, i, { shape: s } = t, { transform: r } = t, { viewportScale: f = 1 } = t;
  const l = (m, d, p) => {
    const A = m.geometry.bounds;
    let [E, w] = [A.minX, A.minY], [g, _] = [A.maxX, A.maxY];
    const [M, L] = p;
    if (d === T.SHAPE)
      E += M, g += M, w += L, _ += L;
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
          E += M;
          break;
        }
        case T.RIGHT: {
          g += M;
          break;
        }
      }
    const D = Math.min(E, g), I = Math.min(w, _), y = Math.abs(g - E), b = Math.abs(_ - w), S = (E + g) / 2, P = (w + _) / 2, B = y / 2, C = b / 2;
    return {
      ...m,
      geometry: {
        ...m.geometry,
        cx: S,
        cy: P,
        rx: B,
        ry: C,
        bounds: {
          minX: D,
          minY: I,
          maxX: D + y,
          maxY: I + b
        }
      }
    };
  };
  function c(m) {
    te.call(this, e, m);
  }
  function h(m) {
    te.call(this, e, m);
  }
  function u(m) {
    te.call(this, e, m);
  }
  return e.$$set = (m) => {
    "shape" in m && n(0, s = m.shape), "transform" in m && n(1, r = m.transform), "viewportScale" in m && n(5, f = m.viewportScale);
  }, e.$$.update = () => {
    e.$$.dirty & /*shape*/
    1 && n(3, o = s.geometry), e.$$.dirty & /*viewportScale*/
    32 && n(2, i = 10 / f);
  }, [
    s,
    r,
    i,
    o,
    l,
    f,
    c,
    h,
    u
  ];
}
class Xo extends x {
  constructor(t) {
    super(), Q(this, t, Yo, Bo, K, { shape: 0, transform: 1, viewportScale: 5 });
  }
}
const we = (e, t, n) => {
  const o = typeof t == "function" ? t(e) : t;
  if (o) {
    const { fill: i, fillOpacity: s } = o;
    let r = "", f;
    return i && (r += `fill:${i};stroke:${i};`), n && (f = n.fillOpacity), r += `fill-opacity:${f || s || "0.25"};`, r;
  }
};
function Ro(e) {
  let t, n, o;
  return {
    c() {
      t = Y("path"), a(t, "class", "a9s-shape-handle"), a(
        t,
        "style",
        /*computedStyle*/
        e[3]
      ), a(
        t,
        "d",
        /*pathData*/
        e[2]
      );
    },
    m(i, s) {
      k(i, t, s), n || (o = j(t, "pointerdown", function() {
        V(
          /*grab*/
          e[14](T.SHAPE)
        ) && e[14](T.SHAPE).apply(this, arguments);
      }), n = !0);
    },
    p(i, s) {
      e = i, s & /*computedStyle*/
      8 && a(
        t,
        "style",
        /*computedStyle*/
        e[3]
      ), s & /*pathData*/
      4 && a(
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
      ie(t, o, i), n = !0;
    },
    p(o, [i]) {
      const s = {};
      i & /*shape*/
      1 && (s.shape = /*shape*/
      o[0]), i & /*transform*/
      2 && (s.transform = /*transform*/
      o[1]), i & /*$$scope, computedStyle, pathData, grab*/
      49164 && (s.$$scope = { dirty: i, ctx: o }), t.$set(s);
    },
    i(o) {
      n || (H(t.$$.fragment, o), n = !0);
    },
    o(o) {
      G(t.$$.fragment, o), n = !1;
    },
    d(o) {
      se(t, o);
    }
  };
}
function Co(e, t, n) {
  let o, i, s, { shape: r } = t, { annotation: f } = t, { transform: l } = t, { viewportScale: c = 1 } = t, { style: h = void 0 } = t, u = { fillOpacity: 1 };
  const m = (E, w, g) => {
    let _;
    w === T.SHAPE && (_ = E.geometry.points.map(([L, D, I]) => [L + g[0], D + g[1], I]));
    const M = _e(_.map((L) => [L[0], L[1]]));
    return { ...E, geometry: { points: _, bounds: M } };
  };
  function d(E) {
    te.call(this, e, E);
  }
  function p(E) {
    te.call(this, e, E);
  }
  function A(E) {
    te.call(this, e, E);
  }
  return e.$$set = (E) => {
    "shape" in E && n(0, r = E.shape), "annotation" in E && n(5, f = E.annotation), "transform" in E && n(1, l = E.transform), "viewportScale" in E && n(6, c = E.viewportScale), "style" in E && n(7, h = E.style);
  }, e.$$.update = () => {
    e.$$.dirty & /*shape*/
    1 && n(8, o = r.geometry), e.$$.dirty & /*viewportScale*/
    64, e.$$.dirty & /*annotation, style*/
    160 && n(3, i = we(f, h, u)), e.$$.dirty & /*geom*/
    256 && n(2, s = Xe(o.points, ct, !0));
  }, [
    r,
    l,
    s,
    i,
    m,
    f,
    c,
    h,
    o,
    d,
    p,
    A
  ];
}
class Uo extends x {
  constructor(t) {
    super(), Q(this, t, Co, No, K, {
      shape: 0,
      annotation: 5,
      transform: 1,
      viewportScale: 6,
      style: 7
    });
  }
}
function Ho(e) {
  let t, n, o, i, s, r, f, l, c, h, u, m, d, p, A, E, w, g, _, M, L, D;
  return {
    c() {
      t = Y("line"), f = J(), l = Y("line"), d = J(), p = Y("rect"), w = J(), g = Y("rect"), a(t, "class", "a9s-outer"), a(t, "style", n = /*computedStyle*/
      e[1] ? "display:none;" : void 0), a(t, "x1", o = /*geom*/
      e[4].x1), a(t, "y1", i = /*geom*/
      e[4].y1), a(t, "x2", s = /*geom*/
      e[4].x2), a(t, "y2", r = /*geom*/
      e[4].y2), a(l, "class", "a9s-inner a9s-shape-handle"), a(
        l,
        "style",
        /*computedStyle*/
        e[1]
      ), a(l, "x1", c = /*geom*/
      e[4].x1), a(l, "y1", h = /*geom*/
      e[4].y1), a(l, "x2", u = /*geom*/
      e[4].x2), a(l, "y2", m = /*geom*/
      e[4].y2), a(p, "class", "a9s-corner-handle a9s-shape-handle"), a(p, "x", A = /*geom*/
      e[4].x1 - /*handleSize*/
      e[3] / 2), a(p, "y", E = /*geom*/
      e[4].y1 - /*handleSize*/
      e[3] / 2), a(
        p,
        "height",
        /*handleSize*/
        e[3]
      ), a(
        p,
        "width",
        /*handleSize*/
        e[3]
      ), a(g, "class", "a9s-corner-handle a9s-shape-handle"), a(g, "x", _ = /*geom*/
      e[4].x2 - /*handleSize*/
      e[3] / 2), a(g, "y", M = /*geom*/
      e[4].y2 - /*handleSize*/
      e[3] / 2), a(
        g,
        "height",
        /*handleSize*/
        e[3]
      ), a(
        g,
        "width",
        /*handleSize*/
        e[3]
      );
    },
    m(I, y) {
      k(I, t, y), k(I, f, y), k(I, l, y), k(I, d, y), k(I, p, y), k(I, w, y), k(I, g, y), L || (D = [
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
            e[10](T.LEFT)
          ) && e[10](T.LEFT).apply(this, arguments);
        }),
        j(g, "pointerdown", function() {
          V(
            /*grab*/
            e[10](T.RIGHT)
          ) && e[10](T.RIGHT).apply(this, arguments);
        })
      ], L = !0);
    },
    p(I, y) {
      e = I, y & /*computedStyle*/
      2 && n !== (n = /*computedStyle*/
      e[1] ? "display:none;" : void 0) && a(t, "style", n), y & /*geom*/
      16 && o !== (o = /*geom*/
      e[4].x1) && a(t, "x1", o), y & /*geom*/
      16 && i !== (i = /*geom*/
      e[4].y1) && a(t, "y1", i), y & /*geom*/
      16 && s !== (s = /*geom*/
      e[4].x2) && a(t, "x2", s), y & /*geom*/
      16 && r !== (r = /*geom*/
      e[4].y2) && a(t, "y2", r), y & /*computedStyle*/
      2 && a(
        l,
        "style",
        /*computedStyle*/
        e[1]
      ), y & /*geom*/
      16 && c !== (c = /*geom*/
      e[4].x1) && a(l, "x1", c), y & /*geom*/
      16 && h !== (h = /*geom*/
      e[4].y1) && a(l, "y1", h), y & /*geom*/
      16 && u !== (u = /*geom*/
      e[4].x2) && a(l, "x2", u), y & /*geom*/
      16 && m !== (m = /*geom*/
      e[4].y2) && a(l, "y2", m), y & /*geom, handleSize*/
      24 && A !== (A = /*geom*/
      e[4].x1 - /*handleSize*/
      e[3] / 2) && a(p, "x", A), y & /*geom, handleSize*/
      24 && E !== (E = /*geom*/
      e[4].y1 - /*handleSize*/
      e[3] / 2) && a(p, "y", E), y & /*handleSize*/
      8 && a(
        p,
        "height",
        /*handleSize*/
        e[3]
      ), y & /*handleSize*/
      8 && a(
        p,
        "width",
        /*handleSize*/
        e[3]
      ), y & /*geom, handleSize*/
      24 && _ !== (_ = /*geom*/
      e[4].x2 - /*handleSize*/
      e[3] / 2) && a(g, "x", _), y & /*geom, handleSize*/
      24 && M !== (M = /*geom*/
      e[4].y2 - /*handleSize*/
      e[3] / 2) && a(g, "y", M), y & /*handleSize*/
      8 && a(
        g,
        "height",
        /*handleSize*/
        e[3]
      ), y & /*handleSize*/
      8 && a(
        g,
        "width",
        /*handleSize*/
        e[3]
      );
    },
    d(I) {
      I && O(t), I && O(f), I && O(l), I && O(d), I && O(p), I && O(w), I && O(g), L = !1, re(D);
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
        e[2]
      ),
      editor: (
        /*editor*/
        e[5]
      ),
      $$slots: {
        default: [
          Ho,
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
      ie(t, o, i), n = !0;
    },
    p(o, [i]) {
      const s = {};
      i & /*shape*/
      1 && (s.shape = /*shape*/
      o[0]), i & /*transform*/
      4 && (s.transform = /*transform*/
      o[2]), i & /*$$scope, geom, handleSize, grab, computedStyle*/
      3098 && (s.$$scope = { dirty: i, ctx: o }), t.$set(s);
    },
    i(o) {
      n || (H(t.$$.fragment, o), n = !0);
    },
    o(o) {
      G(t.$$.fragment, o), n = !1;
    },
    d(o) {
      se(t, o);
    }
  };
}
function Go(e, t, n) {
  let o, i, { shape: s } = t, { computedStyle: r = void 0 } = t, { transform: f } = t, { viewportScale: l = 1 } = t;
  const c = (d, p, A) => {
    const E = d.geometry.bounds;
    let [w, g] = [E.minX, E.minY], [_, M] = [E.maxX, E.maxY];
    const [L, D] = A;
    if (p === T.SHAPE)
      w += L, _ += L, g += D, M += D;
    else
      switch (p) {
        case T.LEFT: {
          w += L, g += D;
          break;
        }
        case T.RIGHT: {
          _ += L, M += D;
          break;
        }
      }
    const I = Math.min(w, _), y = Math.min(g, M), b = Math.max(w, _), S = Math.max(g, M);
    return {
      ...d,
      geometry: {
        x1: I,
        y1: b,
        x2: y,
        y2: S,
        bounds: {
          minX: Math.min(I, y),
          minY: Math.min(b, S),
          maxX: Math.max(I, y),
          maxY: Math.max(b, S)
        }
      }
    };
  };
  function h(d) {
    te.call(this, e, d);
  }
  function u(d) {
    te.call(this, e, d);
  }
  function m(d) {
    te.call(this, e, d);
  }
  return e.$$set = (d) => {
    "shape" in d && n(0, s = d.shape), "computedStyle" in d && n(1, r = d.computedStyle), "transform" in d && n(2, f = d.transform), "viewportScale" in d && n(6, l = d.viewportScale);
  }, e.$$.update = () => {
    e.$$.dirty & /*shape*/
    1 && n(4, o = s.geometry), e.$$.dirty & /*viewportScale*/
    64 && n(3, i = 10 / l);
  }, [
    s,
    r,
    f,
    i,
    o,
    c,
    l,
    h,
    u,
    m
  ];
}
class Vo extends x {
  constructor(t) {
    super(), Q(this, t, Go, Fo, K, {
      shape: 0,
      computedStyle: 1,
      transform: 2,
      viewportScale: 6
    });
  }
}
const sn = /* @__PURE__ */ new Map([
  [F.RECTANGLE, vo],
  [F.POLYGON, Oo],
  [F.ELLIPSE, Xo],
  [F.FREEHAND, Uo],
  [F.LINE, Vo]
]), Lt = (e) => sn.get(e.type), zo = (e, t) => sn.set(e, t), T = (e) => `HANDLE-${e}`;
T.SHAPE = "SHAPE";
T.TOP = "TOP";
T.RIGHT = "RIGHT";
T.BOTTOM = "BOTTOM";
T.LEFT = "LEFT";
T.TOP_LEFT = "TOP_LEFT";
T.TOP_RIGHT = "TOP_RIGHT";
T.BOTTOM_RIGHT = "BOTTOM_RIGHT";
T.BOTTOM_LEFT = "BOTTOM_LEFT";
const jo = (e) => ({}), Ot = (e) => ({ grab: (
  /*onGrab*/
  e[0]
) });
function qo(e) {
  let t, n, o, i;
  const s = (
    /*#slots*/
    e[7].default
  ), r = un(
    s,
    e,
    /*$$scope*/
    e[6],
    Ot
  );
  return {
    c() {
      t = Y("g"), r && r.c(), a(t, "class", "a9s-annotation selected");
    },
    m(f, l) {
      k(f, t, l), r && r.m(t, null), n = !0, o || (i = [
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
    p(f, [l]) {
      r && r.p && (!n || l & /*$$scope*/
      64) && dn(
        r,
        s,
        f,
        /*$$scope*/
        f[6],
        n ? cn(
          s,
          /*$$scope*/
          f[6],
          l,
          jo
        ) : hn(
          /*$$scope*/
          f[6]
        ),
        Ot
      );
    },
    i(f) {
      n || (H(r, f), n = !0);
    },
    o(f) {
      G(r, f), n = !1;
    },
    d(f) {
      f && O(t), r && r.d(f), o = !1, re(i);
    }
  };
}
function Ko(e, t, n) {
  let { $$slots: o = {}, $$scope: i } = t;
  const s = de();
  let { shape: r } = t, { editor: f } = t, { transform: l } = t, c = null, h, u = null;
  const m = (A) => (E) => {
    c = A, h = l.elementToImage(E.offsetX, E.offsetY), u = r, E.target.setPointerCapture(E.pointerId), s("grab");
  }, d = (A) => {
    if (c) {
      const [E, w] = l.elementToImage(A.offsetX, A.offsetY), g = [E - h[0], w - h[1]];
      n(3, r = f(u, c, g)), s("change", r);
    }
  }, p = (A) => {
    A.target.releasePointerCapture(A.pointerId), c = null, u = r, s("release");
  };
  return e.$$set = (A) => {
    "shape" in A && n(3, r = A.shape), "editor" in A && n(4, f = A.editor), "transform" in A && n(5, l = A.transform), "$$scope" in A && n(6, i = A.$$scope);
  }, [m, d, p, r, f, l, i, o];
}
class Ne extends x {
  constructor(t) {
    super(), Q(this, t, Ko, qo, K, { shape: 3, editor: 4, transform: 5 });
  }
}
function Wo(e, t, n) {
  let o;
  const i = de();
  let { annotation: s } = t, { editor: r } = t, { style: f = void 0 } = t, { target: l } = t, { transform: c } = t, { viewportScale: h } = t, u;
  return he(() => (n(6, u = new r({
    target: l,
    props: {
      shape: s.target.selector,
      computedStyle: o,
      transform: c,
      viewportScale: h
    }
  })), u.$on("change", (m) => {
    u.$$set({ shape: m.detail }), i("change", m.detail);
  }), u.$on("grab", (m) => i("grab", m.detail)), u.$on("release", (m) => i("release", m.detail)), () => {
    u.$destroy();
  })), e.$$set = (m) => {
    "annotation" in m && n(0, s = m.annotation), "editor" in m && n(1, r = m.editor), "style" in m && n(2, f = m.style), "target" in m && n(3, l = m.target), "transform" in m && n(4, c = m.transform), "viewportScale" in m && n(5, h = m.viewportScale);
  }, e.$$.update = () => {
    e.$$.dirty & /*annotation, style*/
    5 && (o = we(s, f)), e.$$.dirty & /*annotation, editorComponent*/
    65 && s && (u == null || u.$set({ shape: s.target.selector })), e.$$.dirty & /*editorComponent, transform*/
    80 && u && u.$set({ transform: c }), e.$$.dirty & /*editorComponent, viewportScale*/
    96 && u && u.$set({ viewportScale: h });
  }, [s, r, f, l, c, h, u];
}
class Zo extends x {
  constructor(t) {
    super(), Q(this, t, Wo, null, K, {
      annotation: 0,
      editor: 1,
      style: 2,
      target: 3,
      transform: 4,
      viewportScale: 5
    });
  }
}
function Jo(e, t, n) {
  const o = de();
  let { drawingMode: i } = t, { target: s } = t, { tool: r } = t, { transform: f } = t, { viewportScale: l } = t, c;
  return he(() => {
    const h = s.closest("svg"), u = [], m = (d, p, A) => {
      h.addEventListener(d, p, A), u.push(() => h.removeEventListener(d, p, A));
    };
    return n(5, c = new r({
      target: s,
      props: {
        addEventListener: m,
        drawingMode: i,
        transform: f,
        viewportScale: l
      }
    })), c.$on("create", (d) => o("create", d.detail)), () => {
      u.forEach((d) => d()), c.$destroy();
    };
  }), e.$$set = (h) => {
    "drawingMode" in h && n(0, i = h.drawingMode), "target" in h && n(1, s = h.target), "tool" in h && n(2, r = h.tool), "transform" in h && n(3, f = h.transform), "viewportScale" in h && n(4, l = h.viewportScale);
  }, e.$$.update = () => {
    e.$$.dirty & /*toolComponent, transform*/
    40 && c && c.$set({ transform: f }), e.$$.dirty & /*toolComponent, viewportScale*/
    48 && c && c.$set({ viewportScale: l });
  }, [i, s, r, f, l, c];
}
class Qo extends x {
  constructor(t) {
    super(), Q(this, t, Jo, null, K, {
      drawingMode: 0,
      target: 1,
      tool: 2,
      transform: 3,
      viewportScale: 4
    });
  }
}
function kt(e) {
  let t, n;
  return {
    c() {
      t = Y("rect"), n = Y("rect"), a(t, "class", "a9s-outer"), a(
        t,
        "x",
        /*x*/
        e[1]
      ), a(
        t,
        "y",
        /*y*/
        e[2]
      ), a(
        t,
        "width",
        /*w*/
        e[3]
      ), a(
        t,
        "height",
        /*h*/
        e[4]
      ), a(n, "class", "a9s-inner"), a(
        n,
        "x",
        /*x*/
        e[1]
      ), a(
        n,
        "y",
        /*y*/
        e[2]
      ), a(
        n,
        "width",
        /*w*/
        e[3]
      ), a(
        n,
        "height",
        /*h*/
        e[4]
      );
    },
    m(o, i) {
      k(o, t, i), k(o, n, i);
    },
    p(o, i) {
      i & /*x*/
      2 && a(
        t,
        "x",
        /*x*/
        o[1]
      ), i & /*y*/
      4 && a(
        t,
        "y",
        /*y*/
        o[2]
      ), i & /*w*/
      8 && a(
        t,
        "width",
        /*w*/
        o[3]
      ), i & /*h*/
      16 && a(
        t,
        "height",
        /*h*/
        o[4]
      ), i & /*x*/
      2 && a(
        n,
        "x",
        /*x*/
        o[1]
      ), i & /*y*/
      4 && a(
        n,
        "y",
        /*y*/
        o[2]
      ), i & /*w*/
      8 && a(
        n,
        "width",
        /*w*/
        o[3]
      ), i & /*h*/
      16 && a(
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
function xo(e) {
  let t, n = (
    /*origin*/
    e[0] && kt(e)
  );
  return {
    c() {
      t = Y("g"), n && n.c(), a(t, "class", "a9s-annotation a9s-rubberband");
    },
    m(o, i) {
      k(o, t, i), n && n.m(t, null);
    },
    p(o, [i]) {
      /*origin*/
      o[0] ? n ? n.p(o, i) : (n = kt(o), n.c(), n.m(t, null)) : n && (n.d(1), n = null);
    },
    i: z,
    o: z,
    d(o) {
      o && O(t), n && n.d();
    }
  };
}
function $o(e, t, n) {
  const o = de();
  let { addEventListener: i } = t, { drawingMode: s } = t, { transform: r } = t, f, l, c, h, u, m, d;
  const p = (g) => {
    f = performance.now(), s === "drag" && (n(0, l = r.elementToImage(g.offsetX, g.offsetY)), c = l, n(1, h = l[0]), n(2, u = l[1]), n(3, m = 1), n(4, d = 1));
  }, A = (g) => {
    l && (c = r.elementToImage(g.offsetX, g.offsetY), n(1, h = Math.min(c[0], l[0])), n(2, u = Math.min(c[1], l[1])), n(3, m = Math.abs(c[0] - l[0])), n(4, d = Math.abs(c[1] - l[1])));
  }, E = (g) => {
    const _ = performance.now() - f;
    if (s === "click") {
      if (_ > 300)
        return;
      g.stopPropagation(), l ? w() : (n(0, l = r.elementToImage(g.offsetX, g.offsetY)), c = l, n(1, h = l[0]), n(2, u = l[1]), n(3, m = 1), n(4, d = 1));
    } else
      l && (_ > 300 || m * d > 100 ? (g.stopPropagation(), w()) : (n(0, l = null), c = null));
  }, w = () => {
    if (m * d > 15) {
      const g = {
        type: F.RECTANGLE,
        geometry: {
          bounds: {
            minX: h,
            minY: u,
            maxX: h + m,
            maxY: u + d
          },
          x: h,
          y: u,
          w: m,
          h: d
        }
      };
      o("create", g);
    }
    n(0, l = null), c = null;
  };
  return he(() => {
    i("pointerdown", p), i("pointermove", A), i("pointerup", E, !0);
  }), e.$$set = (g) => {
    "addEventListener" in g && n(5, i = g.addEventListener), "drawingMode" in g && n(6, s = g.drawingMode), "transform" in g && n(7, r = g.transform);
  }, [l, h, u, m, d, i, s, r];
}
class ei extends x {
  constructor(t) {
    super(), Q(this, t, $o, xo, K, {
      addEventListener: 5,
      drawingMode: 6,
      transform: 7
    });
  }
}
const $e = (e, t) => {
  const n = Math.abs(t[0] - e[0]), o = Math.abs(t[1] - e[1]);
  return Math.sqrt(Math.pow(n, 2) + Math.pow(o, 2));
}, Se = [];
function ti(e, t = z) {
  let n;
  const o = /* @__PURE__ */ new Set();
  function i(f) {
    if (K(e, f) && (e = f, n)) {
      const l = !Se.length;
      for (const c of o)
        c[1](), Se.push(c, e);
      if (l) {
        for (let c = 0; c < Se.length; c += 2)
          Se[c][0](Se[c + 1]);
        Se.length = 0;
      }
    }
  }
  function s(f) {
    i(f(e));
  }
  function r(f, l = z) {
    const c = [f, l];
    return o.add(c), o.size === 1 && (n = t(i) || z), f(e), () => {
      o.delete(c), o.size === 0 && n && (n(), n = null);
    };
  }
  return { set: i, update: s, subscribe: r };
}
const ni = (e, t) => {
  const { naturalWidth: n, naturalHeight: o } = e;
  if (!n && !o) {
    const { width: i, height: s } = e;
    t.setAttribute("viewBox", `0 0 ${i} ${s}`), e.addEventListener("load", (r) => {
      const f = r.target;
      t.setAttribute("viewBox", `0 0 ${f.naturalWidth} ${f.naturalHeight}`);
    });
  } else
    t.setAttribute("viewBox", `0 0 ${n} ${o}`);
}, oi = (e, t) => {
  ni(e, t);
  const { subscribe: n, set: o } = ti(1);
  let i;
  return window.ResizeObserver && (i = new ResizeObserver(() => {
    const r = t.getBoundingClientRect(), { width: f, height: l } = t.viewBox.baseVal, c = Math.max(
      r.width / f,
      r.height / l
    );
    o(c);
  }), i.observe(t.parentElement)), { destroy: () => {
    i && i.disconnect();
  }, subscribe: n };
}, ls = "ontouchstart" in window || navigator.maxTouchPoints > 0;
function et(e) {
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
function Pt(e) {
  let t, n, o, i, s, r = (
    /*isClosable*/
    e[2] && It(e)
  );
  return {
    c() {
      t = Y("polygon"), o = Y("polygon"), r && r.c(), s = ce(), a(t, "class", "a9s-outer"), a(t, "points", n = /*coords*/
      e[15]), a(o, "class", "a9s-inner"), a(o, "points", i = /*coords*/
      e[15]);
    },
    m(f, l) {
      k(f, t, l), k(f, o, l), r && r.m(f, l), k(f, s, l);
    },
    p(f, l) {
      l & /*isClosable, points, cursor*/
      7 && n !== (n = /*coords*/
      f[15]) && a(t, "points", n), l & /*isClosable, points, cursor*/
      7 && i !== (i = /*coords*/
      f[15]) && a(o, "points", i), /*isClosable*/
      f[2] ? r ? r.p(f, l) : (r = It(f), r.c(), r.m(s.parentNode, s)) : r && (r.d(1), r = null);
    },
    d(f) {
      f && O(t), f && O(o), r && r.d(f), f && O(s);
    }
  };
}
function It(e) {
  let t, n, o;
  return {
    c() {
      t = Y("rect"), a(t, "class", "a9s-corner-handle"), a(t, "x", n = /*points*/
      e[0][0][0] - /*handleSize*/
      e[3] / 2), a(t, "y", o = /*points*/
      e[0][0][1] - /*handleSize*/
      e[3] / 2), a(
        t,
        "height",
        /*handleSize*/
        e[3]
      ), a(
        t,
        "width",
        /*handleSize*/
        e[3]
      );
    },
    m(i, s) {
      k(i, t, s);
    },
    p(i, s) {
      s & /*points, handleSize*/
      9 && n !== (n = /*points*/
      i[0][0][0] - /*handleSize*/
      i[3] / 2) && a(t, "x", n), s & /*points, handleSize*/
      9 && o !== (o = /*points*/
      i[0][0][1] - /*handleSize*/
      i[3] / 2) && a(t, "y", o), s & /*handleSize*/
      8 && a(
        t,
        "height",
        /*handleSize*/
        i[3]
      ), s & /*handleSize*/
      8 && a(
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
function ii(e) {
  let t, n = (
    /*cursor*/
    e[1] && Pt(et(e))
  );
  return {
    c() {
      t = Y("g"), n && n.c(), a(t, "class", "a9s-annotation a9s-rubberband");
    },
    m(o, i) {
      k(o, t, i), n && n.m(t, null);
    },
    p(o, [i]) {
      /*cursor*/
      o[1] ? n ? n.p(et(o), i) : (n = Pt(et(o)), n.c(), n.m(t, null)) : n && (n.d(1), n = null);
    },
    i: z,
    o: z,
    d(o) {
      o && O(t), n && n.d();
    }
  };
}
const si = 20;
function ri(e, t, n) {
  let o;
  const i = de();
  let { addEventListener: s } = t, { drawingMode: r } = t, { transform: f } = t, { viewportScale: l = 1 } = t, c, h = [], u = null, m = !1;
  const d = (g) => {
    const { timeStamp: _, offsetX: M, offsetY: L } = g;
    if (c = { timeStamp: _, offsetX: M, offsetY: L }, r === "drag" && h.length === 0) {
      const D = f.elementToImage(g.offsetX, g.offsetY);
      h.push(D), n(1, u = D);
    }
  }, p = (g) => {
    if (h.length > 0 && (n(1, u = f.elementToImage(g.offsetX, g.offsetY)), h.length > 2)) {
      const _ = $e(u, h[0]) * l;
      n(2, m = _ < si);
    }
  }, A = (g) => {
    if (r === "click") {
      const _ = g.timeStamp - c.timeStamp, M = $e([c.offsetX, c.offsetY], [g.offsetX, g.offsetY]);
      if (_ > 300 || M > 15)
        return;
      if (m)
        w();
      else if (h.length === 0) {
        const L = f.elementToImage(g.offsetX, g.offsetY);
        h.push(L), n(1, u = L);
      } else
        h.push(u);
    } else {
      if (h.length === 1 && $e(h[0], u) <= 4) {
        n(0, h = []), n(1, u = null);
        return;
      }
      g.stopImmediatePropagation(), m ? w() : h.push(u);
    }
  }, E = () => {
    const g = [...h, u], _ = {
      type: F.POLYGON,
      geometry: { bounds: _e(g), points: g }
    };
    rt(_) > 4 && (n(0, h = []), n(1, u = null), i("create", _));
  }, w = () => {
    const g = {
      type: F.POLYGON,
      geometry: {
        bounds: _e(h),
        points: [...h]
      }
    };
    n(0, h = []), n(1, u = null), i("create", g);
  };
  return he(() => {
    s("pointerdown", d, !0), s("pointermove", p), s("pointerup", A, !0), s("dblclick", E, !0);
  }), e.$$set = (g) => {
    "addEventListener" in g && n(4, s = g.addEventListener), "drawingMode" in g && n(5, r = g.drawingMode), "transform" in g && n(6, f = g.transform), "viewportScale" in g && n(7, l = g.viewportScale);
  }, e.$$.update = () => {
    e.$$.dirty & /*viewportScale*/
    128 && n(3, o = 10 / l);
  }, [
    h,
    u,
    m,
    o,
    s,
    r,
    f,
    l
  ];
}
class li extends x {
  constructor(t) {
    super(), Q(this, t, ri, ii, K, {
      addEventListener: 4,
      drawingMode: 5,
      transform: 6,
      viewportScale: 7
    });
  }
}
function vt(e) {
  let t, n, o, i, s, r, f, l, c, h;
  return {
    c() {
      t = Y("ellipse"), r = Y("ellipse"), a(t, "class", "a9s-outer"), a(t, "cx", n = /*x*/
      e[2] + /*w*/
      e[4] / 2), a(t, "cy", o = /*y*/
      e[3] + /*h*/
      e[5] / 2), a(t, "rx", i = /*w*/
      e[4] / 2), a(t, "ry", s = /*h*/
      e[5] / 2), a(r, "class", "a9s-inner"), a(r, "cx", f = /*x*/
      e[2] + /*w*/
      e[4] / 2), a(r, "cy", l = /*y*/
      e[3] + /*h*/
      e[5] / 2), a(r, "rx", c = /*w*/
      e[4] / 2), a(r, "ry", h = /*h*/
      e[5] / 2);
    },
    m(u, m) {
      k(u, t, m), k(u, r, m);
    },
    p(u, m) {
      m & /*x, w*/
      20 && n !== (n = /*x*/
      u[2] + /*w*/
      u[4] / 2) && a(t, "cx", n), m & /*y, h*/
      40 && o !== (o = /*y*/
      u[3] + /*h*/
      u[5] / 2) && a(t, "cy", o), m & /*w*/
      16 && i !== (i = /*w*/
      u[4] / 2) && a(t, "rx", i), m & /*h*/
      32 && s !== (s = /*h*/
      u[5] / 2) && a(t, "ry", s), m & /*x, w*/
      20 && f !== (f = /*x*/
      u[2] + /*w*/
      u[4] / 2) && a(r, "cx", f), m & /*y, h*/
      40 && l !== (l = /*y*/
      u[3] + /*h*/
      u[5] / 2) && a(r, "cy", l), m & /*w*/
      16 && c !== (c = /*w*/
      u[4] / 2) && a(r, "rx", c), m & /*h*/
      32 && h !== (h = /*h*/
      u[5] / 2) && a(r, "ry", h);
    },
    d(u) {
      u && O(t), u && O(r);
    }
  };
}
function ai(e) {
  let t, n = (
    /*origin*/
    e[1] && vt(e)
  );
  return {
    c() {
      t = Y("g"), n && n.c(), a(t, "class", "a9s-annotation a9s-rubberband");
    },
    m(o, i) {
      k(o, t, i), n && n.m(t, null), e[9](t);
    },
    p(o, [i]) {
      /*origin*/
      o[1] ? n ? n.p(o, i) : (n = vt(o), n.c(), n.m(t, null)) : n && (n.d(1), n = null);
    },
    i: z,
    o: z,
    d(o) {
      o && O(t), n && n.d(), e[9](null);
    }
  };
}
function fi(e, t, n) {
  const o = de();
  let { addEventListener: i } = t, { drawingMode: s } = t, { transform: r } = t, f, l, c, h, u, m, d, p = !1, A = !1, E, w;
  const g = (b) => {
    E = performance.now(), s === "drag" && (n(1, l = r.elementToImage(b.offsetX, b.offsetY)), c = l, n(2, h = l[0]), n(3, u = l[1]), n(4, m = 1), n(5, d = 1));
  }, _ = (b) => {
    const S = b || w;
    if (l)
      if (c = r.elementToImage(S.offsetX, S.offsetY), A) {
        const P = 2 * Math.abs(c[0] - l[0]), B = 2 * Math.abs(c[1] - l[1]);
        n(4, m = p ? Math.max(P, B) : P), n(5, d = p ? m : B), n(2, h = Math.min(c[0], l[0] - m / 2)), n(3, u = Math.min(c[1], l[1] - d / 2));
      } else {
        const P = Math.abs(c[0] - l[0]), B = Math.abs(c[1] - l[1]);
        n(4, m = p ? Math.max(P, B) : P), n(5, d = p ? m : B), n(2, h = Math.min(c[0], l[0])), n(3, u = Math.min(c[1], l[1]));
      }
    b && (w = b);
  }, M = (b) => {
    s === "click" && b.stopImmediatePropagation();
    const S = performance.now() - E;
    if (s === "click") {
      if (S > 300)
        return;
      b.stopPropagation(), l ? L() : (n(1, l = r.elementToImage(b.offsetX, b.offsetY)), c = l, n(2, h = l[0]), n(3, u = l[1]), n(4, m = 1), n(5, d = 1));
    } else
      l && (S > 300 || m * d > 100 ? (b.stopPropagation(), L()) : (n(1, l = null), c = null, w = void 0));
  }, L = () => {
    if (m * d > 15) {
      const b = {
        type: F.ELLIPSE,
        geometry: {
          bounds: {
            minX: h,
            minY: u,
            maxX: h + m,
            maxY: u + d
          },
          cx: h + m / 2,
          cy: u + d / 2,
          rx: m / 2,
          ry: d / 2
        }
      };
      o("create", b);
    }
    n(1, l = null), c = null, w = void 0;
  }, D = (b) => {
    b.key === "Shift" && (p = !0, _()), b.key === "Control" && (A = !0, _());
  }, I = (b) => {
    b.key === "Shift" && (p = !1, _()), b.key === "Control" && (A = !1, _());
  };
  he(() => (document.addEventListener("keyup", I), document.addEventListener("keydown", D), i("pointerdown", g), i("pointermove", _), i("pointerup", M), () => {
    document.removeEventListener("keyup", I), document.removeEventListener("keydown", D);
  }));
  function y(b) {
    Ye[b ? "unshift" : "push"](() => {
      f = b, n(0, f);
    });
  }
  return e.$$set = (b) => {
    "addEventListener" in b && n(6, i = b.addEventListener), "drawingMode" in b && n(7, s = b.drawingMode), "transform" in b && n(8, r = b.transform);
  }, [
    f,
    l,
    h,
    u,
    m,
    d,
    i,
    s,
    r,
    y
  ];
}
class ui extends x {
  constructor(t) {
    super(), Q(this, t, fi, ai, K, {
      addEventListener: 6,
      drawingMode: 7,
      transform: 8
    });
  }
}
function Dt(e) {
  let t;
  return {
    c() {
      t = Y("path"), a(
        t,
        "style",
        /*computedStyle*/
        e[2]
      ), a(
        t,
        "d",
        /*pathData*/
        e[0]
      );
    },
    m(n, o) {
      k(n, t, o);
    },
    p(n, o) {
      o & /*computedStyle*/
      4 && a(
        t,
        "style",
        /*computedStyle*/
        n[2]
      ), o & /*pathData*/
      1 && a(
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
function ci(e) {
  let t, n = (
    /*isDrawing*/
    e[1] && Dt(e)
  );
  return {
    c() {
      t = Y("g"), n && n.c(), a(t, "class", "a9s-annotation a9s-rubberband");
    },
    m(o, i) {
      k(o, t, i), n && n.m(t, null);
    },
    p(o, [i]) {
      /*isDrawing*/
      o[1] ? n ? n.p(o, i) : (n = Dt(o), n.c(), n.m(t, null)) : n && (n.d(1), n = null);
    },
    i: z,
    o: z,
    d(o) {
      o && O(t), n && n.d();
    }
  };
}
function di(e, t, n) {
  let o;
  const i = de();
  let { addEventListener: s } = t, { drawingMode: r } = t, { annotation: f } = t, { transform: l } = t, { viewportScale: c = 1 } = t, { style: h = void 0 } = t, u = { fillOpacity: 1 }, m = [], d = "", p = !1;
  const A = (_) => {
    if (r === "drag" && m.length === 0) {
      n(1, p = !0);
      const M = l.elementToImage(_.offsetX, _.offsetY);
      m.push([...M, _.pressure]), n(0, d = Xe(m));
    }
  }, E = (_) => {
    if (p) {
      const M = l.elementToImage(_.offsetX, _.offsetY);
      m.push([...M, _.pressure]), n(0, d = Xe(m, ct, !0));
    }
  }, w = (_) => {
    p && g();
  }, g = () => {
    const _ = {
      type: F.FREEHAND,
      geometry: {
        bounds: _e(m.map((M) => [M[0], M[1]])),
        points: m
      }
    };
    n(1, p = !1), m = [], i("create", _);
  };
  return he(() => {
    s("pointerdown", A, !0), s("pointermove", E), s("pointerup", w, !0);
  }), e.$$set = (_) => {
    "addEventListener" in _ && n(3, s = _.addEventListener), "drawingMode" in _ && n(4, r = _.drawingMode), "annotation" in _ && n(5, f = _.annotation), "transform" in _ && n(6, l = _.transform), "viewportScale" in _ && n(7, c = _.viewportScale), "style" in _ && n(8, h = _.style);
  }, e.$$.update = () => {
    e.$$.dirty & /*viewportScale*/
    128, e.$$.dirty & /*annotation, style*/
    288 && n(2, o = we(f, h, u));
  }, [
    d,
    p,
    o,
    s,
    r,
    f,
    l,
    c,
    h
  ];
}
class hi extends x {
  constructor(t) {
    super(), Q(this, t, di, ci, K, {
      addEventListener: 3,
      drawingMode: 4,
      annotation: 5,
      transform: 6,
      viewportScale: 7,
      style: 8
    });
  }
}
function Bt(e) {
  let t, n;
  return {
    c() {
      t = Y("line"), n = Y("line"), a(t, "class", "a9s-outer"), a(
        t,
        "x1",
        /*x1*/
        e[1]
      ), a(
        t,
        "y1",
        /*y1*/
        e[2]
      ), a(
        t,
        "x2",
        /*x2*/
        e[3]
      ), a(
        t,
        "y2",
        /*y2*/
        e[4]
      ), a(n, "class", "a9s-inner"), a(
        n,
        "x1",
        /*x1*/
        e[1]
      ), a(
        n,
        "y1",
        /*y1*/
        e[2]
      ), a(
        n,
        "x2",
        /*x2*/
        e[3]
      ), a(
        n,
        "y2",
        /*y2*/
        e[4]
      );
    },
    m(o, i) {
      k(o, t, i), k(o, n, i);
    },
    p(o, i) {
      i & /*x1*/
      2 && a(
        t,
        "x1",
        /*x1*/
        o[1]
      ), i & /*y1*/
      4 && a(
        t,
        "y1",
        /*y1*/
        o[2]
      ), i & /*x2*/
      8 && a(
        t,
        "x2",
        /*x2*/
        o[3]
      ), i & /*y2*/
      16 && a(
        t,
        "y2",
        /*y2*/
        o[4]
      ), i & /*x1*/
      2 && a(
        n,
        "x1",
        /*x1*/
        o[1]
      ), i & /*y1*/
      4 && a(
        n,
        "y1",
        /*y1*/
        o[2]
      ), i & /*x2*/
      8 && a(
        n,
        "x2",
        /*x2*/
        o[3]
      ), i & /*y2*/
      16 && a(
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
function mi(e) {
  let t, n = (
    /*origin*/
    e[0] && Bt(e)
  );
  return {
    c() {
      t = Y("g"), n && n.c(), a(t, "class", "a9s-annotation a9s-rubberband");
    },
    m(o, i) {
      k(o, t, i), n && n.m(t, null);
    },
    p(o, [i]) {
      /*origin*/
      o[0] ? n ? n.p(o, i) : (n = Bt(o), n.c(), n.m(t, null)) : n && (n.d(1), n = null);
    },
    i: z,
    o: z,
    d(o) {
      o && O(t), n && n.d();
    }
  };
}
function gi(e, t, n) {
  const o = de();
  let { addEventListener: i } = t, { drawingMode: s } = t, { transform: r } = t, f, l, c, h, u, m, d;
  const p = (g) => {
    f = performance.now(), s === "drag" && (n(0, l = r.elementToImage(g.offsetX, g.offsetY)), c = l, n(1, h = l[0]), n(2, u = l[1]), n(3, m = l[0] + 1), n(4, d = l[1] + 1));
  }, A = (g) => {
    l && (c = r.elementToImage(g.offsetX, g.offsetY), n(1, h = Math.min(c[0], l[0])), n(2, u = Math.min(c[1], l[1])), n(3, m = Math.max(c[0], l[0])), n(4, d = Math.max(c[1], l[1])));
  }, E = (g) => {
    const _ = performance.now() - f;
    if (s === "click") {
      if (_ > 300)
        return;
      g.stopPropagation(), l ? w() : (n(0, l = r.elementToImage(g.offsetX, g.offsetY)), c = l, n(1, h = l[0]), n(2, u = l[1]), n(3, m = l[0] + 1), n(4, d = l[1] + 1));
    } else
      l && (_ > 300 || Math.sqrt(Math.pow(m - h, 2) + Math.pow(d - u, 2)) > 8 ? (g.stopPropagation(), w()) : (n(0, l = null), c = null));
  }, w = () => {
    if (Math.sqrt(Math.pow(m - h, 2) + Math.pow(d - u, 2)) > 8) {
      const g = {
        type: F.LINE,
        geometry: {
          bounds: {
            minX: Math.min(h, m),
            minY: Math.min(u, d),
            maxX: Math.max(h, m),
            maxY: Math.max(u, d)
          },
          x1: h,
          y1: u,
          x2: m,
          y2: d
        }
      };
      o("create", g);
    }
    n(0, l = null), c = null;
  };
  return he(() => {
    i("pointerdown", p), i("pointermove", A), i("pointerup", E, !0);
  }), e.$$set = (g) => {
    "addEventListener" in g && n(5, i = g.addEventListener), "drawingMode" in g && n(6, s = g.drawingMode), "transform" in g && n(7, r = g.transform);
  }, [l, h, u, m, d, i, s, r];
}
class pi extends x {
  constructor(t) {
    super(), Q(this, t, gi, mi, K, {
      addEventListener: 5,
      drawingMode: 6,
      transform: 7
    });
  }
}
const ht = /* @__PURE__ */ new Map([
  ["rectangle", { tool: ei }],
  ["polygon", { tool: li }],
  ["ellipse", { tool: ui }],
  ["freehand", { tool: hi }],
  ["line", { tool: pi }]
]), at = () => [...ht.keys()], rn = (e) => ht.get(e), yi = (e, t, n) => ht.set(e, { tool: t, opts: n });
function _i(e) {
  let t, n, o, i, s;
  return {
    c() {
      t = Y("g"), n = Y("ellipse"), i = Y("ellipse"), a(n, "class", "a9s-outer"), a(n, "style", o = /*computedStyle*/
      e[1] ? "display:none;" : void 0), a(
        n,
        "cx",
        /*cx*/
        e[2]
      ), a(
        n,
        "cy",
        /*cy*/
        e[3]
      ), a(
        n,
        "rx",
        /*rx*/
        e[4]
      ), a(
        n,
        "ry",
        /*ry*/
        e[5]
      ), a(i, "class", "a9s-inner"), a(
        i,
        "style",
        /*computedStyle*/
        e[1]
      ), a(
        i,
        "cx",
        /*cx*/
        e[2]
      ), a(
        i,
        "cy",
        /*cy*/
        e[3]
      ), a(
        i,
        "rx",
        /*rx*/
        e[4]
      ), a(
        i,
        "ry",
        /*ry*/
        e[5]
      ), a(t, "data-id", s = /*annotation*/
      e[0].id);
    },
    m(r, f) {
      k(r, t, f), ae(t, n), ae(t, i);
    },
    p(r, [f]) {
      f & /*computedStyle*/
      2 && o !== (o = /*computedStyle*/
      r[1] ? "display:none;" : void 0) && a(n, "style", o), f & /*computedStyle*/
      2 && a(
        i,
        "style",
        /*computedStyle*/
        r[1]
      ), f & /*annotation*/
      1 && s !== (s = /*annotation*/
      r[0].id) && a(t, "data-id", s);
    },
    i: z,
    o: z,
    d(r) {
      r && O(t);
    }
  };
}
function wi(e, t, n) {
  let o, { annotation: i } = t, { geom: s } = t, { style: r = void 0 } = t;
  const { cx: f, cy: l, rx: c, ry: h } = s;
  return e.$$set = (u) => {
    "annotation" in u && n(0, i = u.annotation), "geom" in u && n(6, s = u.geom), "style" in u && n(7, r = u.style);
  }, e.$$.update = () => {
    e.$$.dirty & /*annotation, style*/
    129 && n(1, o = we(i, r));
  }, [i, o, f, l, c, h, s, r];
}
class bi extends x {
  constructor(t) {
    super(), Q(this, t, wi, _i, K, { annotation: 0, geom: 6, style: 7 });
  }
}
function Ei(e) {
  let t, n, o, i, s;
  return {
    c() {
      t = Y("g"), n = Y("polygon"), i = Y("polygon"), a(n, "class", "a9s-outer"), a(n, "style", o = /*computedStyle*/
      e[1] ? "display:none;" : void 0), a(
        n,
        "points",
        /*points*/
        e[2].map(Ai).join(" ")
      ), a(i, "class", "a9s-inner"), a(
        i,
        "style",
        /*computedStyle*/
        e[1]
      ), a(
        i,
        "points",
        /*points*/
        e[2].map(Si).join(" ")
      ), a(t, "data-id", s = /*annotation*/
      e[0].id);
    },
    m(r, f) {
      k(r, t, f), ae(t, n), ae(t, i);
    },
    p(r, [f]) {
      f & /*computedStyle*/
      2 && o !== (o = /*computedStyle*/
      r[1] ? "display:none;" : void 0) && a(n, "style", o), f & /*computedStyle*/
      2 && a(
        i,
        "style",
        /*computedStyle*/
        r[1]
      ), f & /*annotation*/
      1 && s !== (s = /*annotation*/
      r[0].id) && a(t, "data-id", s);
    },
    i: z,
    o: z,
    d(r) {
      r && O(t);
    }
  };
}
const Ai = (e) => e.join(","), Si = (e) => e.join(",");
function Mi(e, t, n) {
  let o, { annotation: i } = t, { geom: s } = t, { style: r = void 0 } = t;
  const { points: f } = s;
  return e.$$set = (l) => {
    "annotation" in l && n(0, i = l.annotation), "geom" in l && n(3, s = l.geom), "style" in l && n(4, r = l.style);
  }, e.$$.update = () => {
    e.$$.dirty & /*annotation, style*/
    17 && n(1, o = we(i, r));
  }, [i, o, f, s, r];
}
class Ti extends x {
  constructor(t) {
    super(), Q(this, t, Mi, Ei, K, { annotation: 0, geom: 3, style: 4 });
  }
}
function Li(e) {
  let t, n, o, i, s;
  return {
    c() {
      t = Y("g"), n = Y("rect"), i = Y("rect"), a(n, "class", "a9s-outer"), a(n, "style", o = /*computedStyle*/
      e[5] ? "display:none;" : void 0), a(
        n,
        "x",
        /*x*/
        e[4]
      ), a(
        n,
        "y",
        /*y*/
        e[3]
      ), a(
        n,
        "width",
        /*w*/
        e[2]
      ), a(
        n,
        "height",
        /*h*/
        e[1]
      ), a(i, "class", "a9s-inner"), a(
        i,
        "style",
        /*computedStyle*/
        e[5]
      ), a(
        i,
        "x",
        /*x*/
        e[4]
      ), a(
        i,
        "y",
        /*y*/
        e[3]
      ), a(
        i,
        "width",
        /*w*/
        e[2]
      ), a(
        i,
        "height",
        /*h*/
        e[1]
      ), a(t, "data-id", s = /*annotation*/
      e[0].id);
    },
    m(r, f) {
      k(r, t, f), ae(t, n), ae(t, i);
    },
    p(r, [f]) {
      f & /*computedStyle*/
      32 && o !== (o = /*computedStyle*/
      r[5] ? "display:none;" : void 0) && a(n, "style", o), f & /*x*/
      16 && a(
        n,
        "x",
        /*x*/
        r[4]
      ), f & /*y*/
      8 && a(
        n,
        "y",
        /*y*/
        r[3]
      ), f & /*w*/
      4 && a(
        n,
        "width",
        /*w*/
        r[2]
      ), f & /*h*/
      2 && a(
        n,
        "height",
        /*h*/
        r[1]
      ), f & /*computedStyle*/
      32 && a(
        i,
        "style",
        /*computedStyle*/
        r[5]
      ), f & /*x*/
      16 && a(
        i,
        "x",
        /*x*/
        r[4]
      ), f & /*y*/
      8 && a(
        i,
        "y",
        /*y*/
        r[3]
      ), f & /*w*/
      4 && a(
        i,
        "width",
        /*w*/
        r[2]
      ), f & /*h*/
      2 && a(
        i,
        "height",
        /*h*/
        r[1]
      ), f & /*annotation*/
      1 && s !== (s = /*annotation*/
      r[0].id) && a(t, "data-id", s);
    },
    i: z,
    o: z,
    d(r) {
      r && O(t);
    }
  };
}
function Oi(e, t, n) {
  let o, i, s, r, f, { annotation: l } = t, { geom: c } = t, { style: h = void 0 } = t;
  return e.$$set = (u) => {
    "annotation" in u && n(0, l = u.annotation), "geom" in u && n(6, c = u.geom), "style" in u && n(7, h = u.style);
  }, e.$$.update = () => {
    e.$$.dirty & /*annotation, style*/
    129 && n(5, o = we(l, h)), e.$$.dirty & /*geom*/
    64 && n(4, { x: i, y: s, w: r, h: f } = c, i, (n(3, s), n(6, c)), (n(2, r), n(6, c)), (n(1, f), n(6, c)));
  }, [l, f, r, s, i, o, c, h];
}
class ki extends x {
  constructor(t) {
    super(), Q(this, t, Oi, Li, K, { annotation: 0, geom: 6, style: 7 });
  }
}
function Pi(e) {
  let t, n, o;
  return {
    c() {
      t = Y("g"), n = Y("path"), a(
        n,
        "style",
        /*computedStyle*/
        e[2]
      ), a(
        n,
        "d",
        /*pathData*/
        e[1]
      ), a(t, "data-id", o = /*annotation*/
      e[0].id);
    },
    m(i, s) {
      k(i, t, s), ae(t, n);
    },
    p(i, [s]) {
      s & /*computedStyle*/
      4 && a(
        n,
        "style",
        /*computedStyle*/
        i[2]
      ), s & /*pathData*/
      2 && a(
        n,
        "d",
        /*pathData*/
        i[1]
      ), s & /*annotation*/
      1 && o !== (o = /*annotation*/
      i[0].id) && a(t, "data-id", o);
    },
    i: z,
    o: z,
    d(i) {
      i && O(t);
    }
  };
}
function Ii(e, t, n) {
  let o, i, { annotation: s } = t, { geom: r } = t, { style: f = void 0 } = t, l = { fillOpacity: 1 };
  const { points: c } = r;
  return e.$$set = (h) => {
    "annotation" in h && n(0, s = h.annotation), "geom" in h && n(3, r = h.geom), "style" in h && n(4, f = h.style);
  }, e.$$.update = () => {
    e.$$.dirty & /*annotation, style*/
    17 && n(2, o = we(s, f, l));
  }, n(1, i = Xe(c, ct, !0)), [s, i, o, r, f];
}
class vi extends x {
  constructor(t) {
    super(), Q(this, t, Ii, Pi, K, { annotation: 0, geom: 3, style: 4 });
  }
}
const as = {
  elementToImage: (e, t) => [e, t]
}, Di = (e) => ({
  elementToImage: (t, n) => {
    const o = e.getBoundingClientRect(), i = e.createSVGPoint();
    i.x = t + o.x, i.y = n + o.y;
    const { x: s, y: r } = i.matrixTransform(e.getScreenCTM().inverse());
    return [s, r];
  }
}), Bi = 250, Yi = (e, t) => {
  const n = de();
  let o;
  return { onPointerDown: () => o = performance.now(), onPointerUp: (r) => {
    if (performance.now() - o < Bi) {
      const { x: l, y: c } = Xi(r, e), h = t.getAt(l, c);
      h ? n("click", { originalEvent: r, annotation: h }) : n("click", { originalEvent: r });
    }
  } };
}, Xi = (e, t) => {
  const n = t.createSVGPoint(), o = t.getBoundingClientRect(), i = e.clientX - o.x, s = e.clientY - o.y, { left: r, top: f } = t.getBoundingClientRect();
  return n.x = i + r, n.y = s + f, n.matrixTransform(t.getScreenCTM().inverse());
};
function Yt(e, t, n) {
  const o = e.slice();
  return o[29] = t[n], o;
}
function Xt(e, t, n) {
  const o = e.slice();
  return o[32] = t[n], o;
}
function tt(e) {
  const t = e.slice(), n = (
    /*annotation*/
    t[32].target.selector
  );
  return t[35] = n, t;
}
function Rt(e) {
  let t = (
    /*annotation*/
    e[32].id
  ), n, o, i = Nt(e);
  return {
    c() {
      i.c(), n = ce();
    },
    m(s, r) {
      i.m(s, r), k(s, n, r), o = !0;
    },
    p(s, r) {
      r[0] & /*$store*/
      8192 && K(t, t = /*annotation*/
      s[32].id) ? (fe(), G(i, 1, 1, z), ue(), i = Nt(s), i.c(), H(i, 1), i.m(n.parentNode, n)) : i.p(s, r);
    },
    i(s) {
      o || (H(i), o = !0);
    },
    o(s) {
      G(i), o = !1;
    },
    d(s) {
      s && O(n), i.d(s);
    }
  };
}
function Ri(e) {
  let t, n;
  return t = new vi({
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
      ie(t, o, i), n = !0;
    },
    p(o, i) {
      const s = {};
      i[0] & /*$store*/
      8192 && (s.annotation = /*annotation*/
      o[32]), i[0] & /*$store*/
      8192 && (s.geom = /*selector*/
      o[35].geometry), i[0] & /*style*/
      2 && (s.style = /*style*/
      o[1]), t.$set(s);
    },
    i(o) {
      n || (H(t.$$.fragment, o), n = !0);
    },
    o(o) {
      G(t.$$.fragment, o), n = !1;
    },
    d(o) {
      se(t, o);
    }
  };
}
function Ni(e) {
  let t, n;
  return t = new Ti({
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
      ie(t, o, i), n = !0;
    },
    p(o, i) {
      const s = {};
      i[0] & /*$store*/
      8192 && (s.annotation = /*annotation*/
      o[32]), i[0] & /*$store*/
      8192 && (s.geom = /*selector*/
      o[35].geometry), i[0] & /*style*/
      2 && (s.style = /*style*/
      o[1]), t.$set(s);
    },
    i(o) {
      n || (H(t.$$.fragment, o), n = !0);
    },
    o(o) {
      G(t.$$.fragment, o), n = !1;
    },
    d(o) {
      se(t, o);
    }
  };
}
function Ci(e) {
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
      ie(t, o, i), n = !0;
    },
    p(o, i) {
      const s = {};
      i[0] & /*$store*/
      8192 && (s.annotation = /*annotation*/
      o[32]), i[0] & /*$store*/
      8192 && (s.geom = /*selector*/
      o[35].geometry), i[0] & /*style*/
      2 && (s.style = /*style*/
      o[1]), t.$set(s);
    },
    i(o) {
      n || (H(t.$$.fragment, o), n = !0);
    },
    o(o) {
      G(t.$$.fragment, o), n = !1;
    },
    d(o) {
      se(t, o);
    }
  };
}
function Ui(e) {
  let t, n;
  return t = new bi({
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
      ie(t, o, i), n = !0;
    },
    p(o, i) {
      const s = {};
      i[0] & /*$store*/
      8192 && (s.annotation = /*annotation*/
      o[32]), i[0] & /*$store*/
      8192 && (s.geom = /*selector*/
      o[35].geometry), i[0] & /*style*/
      2 && (s.style = /*style*/
      o[1]), t.$set(s);
    },
    i(o) {
      n || (H(t.$$.fragment, o), n = !0);
    },
    o(o) {
      G(t.$$.fragment, o), n = !1;
    },
    d(o) {
      se(t, o);
    }
  };
}
function Nt(e) {
  let t, n, o, i;
  const s = [Ui, Ci, Ni, Ri], r = [];
  function f(l, c) {
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
  return ~(t = f(e)) && (n = r[t] = s[t](e)), {
    c() {
      n && n.c(), o = ce();
    },
    m(l, c) {
      ~t && r[t].m(l, c), k(l, o, c), i = !0;
    },
    p(l, c) {
      let h = t;
      t = f(l), t === h ? ~t && r[t].p(l, c) : (n && (fe(), G(r[h], 1, 1, () => {
        r[h] = null;
      }), ue()), ~t ? (n = r[t], n ? n.p(l, c) : (n = r[t] = s[t](l), n.c()), H(n, 1), n.m(o.parentNode, o)) : n = null);
    },
    i(l) {
      i || (H(n), i = !0);
    },
    o(l) {
      G(n), i = !1;
    },
    d(l) {
      ~t && r[t].d(l), l && O(o);
    }
  };
}
function Ct(e) {
  let t = !/*isEditable*/
  e[7](
    /*annotation*/
    e[32]
  ), n, o, i = t && Rt(tt(e));
  return {
    c() {
      i && i.c(), n = ce();
    },
    m(s, r) {
      i && i.m(s, r), k(s, n, r), o = !0;
    },
    p(s, r) {
      r[0] & /*isEditable, $store*/
      8320 && (t = !/*isEditable*/
      s[7](
        /*annotation*/
        s[32]
      )), t ? i ? (i.p(tt(s), r), r[0] & /*isEditable, $store*/
      8320 && H(i, 1)) : (i = Rt(tt(s)), i.c(), H(i, 1), i.m(n.parentNode, n)) : i && (fe(), G(i, 1, 1, () => {
        i = null;
      }), ue());
    },
    i(s) {
      o || (H(i), o = !0);
    },
    o(s) {
      G(i), o = !1;
    },
    d(s) {
      i && i.d(s), s && O(n);
    }
  };
}
function Ut(e) {
  let t, n, o, i;
  const s = [Fi, Hi], r = [];
  function f(l, c) {
    return (
      /*editableAnnotations*/
      l[6] ? 0 : (
        /*tool*/
        l[12] && /*drawingEnabled*/
        l[0] ? 1 : -1
      )
    );
  }
  return ~(t = f(e)) && (n = r[t] = s[t](e)), {
    c() {
      n && n.c(), o = ce();
    },
    m(l, c) {
      ~t && r[t].m(l, c), k(l, o, c), i = !0;
    },
    p(l, c) {
      let h = t;
      t = f(l), t === h ? ~t && r[t].p(l, c) : (n && (fe(), G(r[h], 1, 1, () => {
        r[h] = null;
      }), ue()), ~t ? (n = r[t], n ? n.p(l, c) : (n = r[t] = s[t](l), n.c()), H(n, 1), n.m(o.parentNode, o)) : n = null);
    },
    i(l) {
      i || (H(n), i = !0);
    },
    o(l) {
      G(n), i = !1;
    },
    d(l) {
      ~t && r[t].d(l), l && O(o);
    }
  };
}
function Hi(e) {
  let t = (
    /*toolName*/
    e[2]
  ), n, o, i = Ht(e);
  return {
    c() {
      i.c(), n = ce();
    },
    m(s, r) {
      i.m(s, r), k(s, n, r), o = !0;
    },
    p(s, r) {
      r[0] & /*toolName*/
      4 && K(t, t = /*toolName*/
      s[2]) ? (fe(), G(i, 1, 1, z), ue(), i = Ht(s), i.c(), H(i, 1), i.m(n.parentNode, n)) : i.p(s, r);
    },
    i(s) {
      o || (H(i), o = !0);
    },
    o(s) {
      G(i), o = !1;
    },
    d(s) {
      s && O(n), i.d(s);
    }
  };
}
function Fi(e) {
  let t, n, o = (
    /*editableAnnotations*/
    e[6]
  ), i = [];
  for (let r = 0; r < o.length; r += 1)
    i[r] = Gt(Yt(e, o, r));
  const s = (r) => G(i[r], 1, 1, () => {
    i[r] = null;
  });
  return {
    c() {
      for (let r = 0; r < i.length; r += 1)
        i[r].c();
      t = ce();
    },
    m(r, f) {
      for (let l = 0; l < i.length; l += 1)
        i[l] && i[l].m(r, f);
      k(r, t, f), n = !0;
    },
    p(r, f) {
      if (f[0] & /*editableAnnotations, drawingEl, style, transform, $scale, onChangeSelected*/
      279634) {
        o = /*editableAnnotations*/
        r[6];
        let l;
        for (l = 0; l < o.length; l += 1) {
          const c = Yt(r, o, l);
          i[l] ? (i[l].p(c, f), H(i[l], 1)) : (i[l] = Gt(c), i[l].c(), H(i[l], 1), i[l].m(t.parentNode, t));
        }
        for (fe(), l = o.length; l < i.length; l += 1)
          s(l);
        ue();
      }
    },
    i(r) {
      if (!n) {
        for (let f = 0; f < o.length; f += 1)
          H(i[f]);
        n = !0;
      }
    },
    o(r) {
      i = i.filter(Boolean);
      for (let f = 0; f < i.length; f += 1)
        G(i[f]);
      n = !1;
    },
    d(r) {
      ft(i, r), r && O(t);
    }
  };
}
function Ht(e) {
  let t, n;
  return t = new Qo({
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
      ie(t, o, i), n = !0;
    },
    p(o, i) {
      const s = {};
      i[0] & /*drawingEl*/
      16 && (s.target = /*drawingEl*/
      o[4]), i[0] & /*tool*/
      4096 && (s.tool = /*tool*/
      o[12]), i[0] & /*drawingMode*/
      2048 && (s.drawingMode = /*drawingMode*/
      o[11]), i[0] & /*transform*/
      1024 && (s.transform = /*transform*/
      o[10]), i[0] & /*$scale*/
      16384 && (s.viewportScale = /*$scale*/
      o[14]), t.$set(s);
    },
    i(o) {
      n || (H(t.$$.fragment, o), n = !0);
    },
    o(o) {
      G(t.$$.fragment, o), n = !1;
    },
    d(o) {
      se(t, o);
    }
  };
}
function Ft(e) {
  let t, n;
  return t = new Zo({
    props: {
      target: (
        /*drawingEl*/
        e[4]
      ),
      editor: Lt(
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
      ie(t, o, i), n = !0;
    },
    p(o, i) {
      e = o;
      const s = {};
      i[0] & /*drawingEl*/
      16 && (s.target = /*drawingEl*/
      e[4]), i[0] & /*editableAnnotations*/
      64 && (s.editor = Lt(
        /*editable*/
        e[29].target.selector
      )), i[0] & /*editableAnnotations*/
      64 && (s.annotation = /*editable*/
      e[29]), i[0] & /*style*/
      2 && (s.style = /*style*/
      e[1]), i[0] & /*transform*/
      1024 && (s.transform = /*transform*/
      e[10]), i[0] & /*$scale*/
      16384 && (s.viewportScale = /*$scale*/
      e[14]), t.$set(s);
    },
    i(o) {
      n || (H(t.$$.fragment, o), n = !0);
    },
    o(o) {
      G(t.$$.fragment, o), n = !1;
    },
    d(o) {
      se(t, o);
    }
  };
}
function Gt(e) {
  let t = (
    /*editable*/
    e[29].id
  ), n, o, i = Ft(e);
  return {
    c() {
      i.c(), n = ce();
    },
    m(s, r) {
      i.m(s, r), k(s, n, r), o = !0;
    },
    p(s, r) {
      r[0] & /*editableAnnotations*/
      64 && K(t, t = /*editable*/
      s[29].id) ? (fe(), G(i, 1, 1, z), ue(), i = Ft(s), i.c(), H(i, 1), i.m(n.parentNode, n)) : i.p(s, r);
    },
    i(s) {
      o || (H(i), o = !0);
    },
    o(s) {
      G(i), o = !1;
    },
    d(s) {
      s && O(n), i.d(s);
    }
  };
}
function Gi(e) {
  let t, n, o, i, s, r, f = (
    /*$store*/
    e[13]
  ), l = [];
  for (let u = 0; u < f.length; u += 1)
    l[u] = Ct(Xt(e, f, u));
  const c = (u) => G(l[u], 1, 1, () => {
    l[u] = null;
  });
  let h = (
    /*drawingEl*/
    e[4] && Ut(e)
  );
  return {
    c() {
      t = Y("svg"), n = Y("g");
      for (let u = 0; u < l.length; u += 1)
        l[u].c();
      o = Y("g"), h && h.c(), a(o, "class", "drawing"), a(t, "class", "a9s-annotationlayer"), yt(
        t,
        "drawing",
        /*tool*/
        e[12]
      );
    },
    m(u, m) {
      k(u, t, m), ae(t, n);
      for (let d = 0; d < l.length; d += 1)
        l[d] && l[d].m(n, null);
      ae(t, o), h && h.m(o, null), e[25](o), e[26](t), i = !0, s || (r = [
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
      ], s = !0);
    },
    p(u, m) {
      if (e = u, m[0] & /*$store, style, isEditable*/
      8322) {
        f = /*$store*/
        e[13];
        let d;
        for (d = 0; d < f.length; d += 1) {
          const p = Xt(e, f, d);
          l[d] ? (l[d].p(p, m), H(l[d], 1)) : (l[d] = Ct(p), l[d].c(), H(l[d], 1), l[d].m(n, null));
        }
        for (fe(), d = f.length; d < l.length; d += 1)
          c(d);
        ue();
      }
      /*drawingEl*/
      e[4] ? h ? (h.p(e, m), m[0] & /*drawingEl*/
      16 && H(h, 1)) : (h = Ut(e), h.c(), H(h, 1), h.m(o, null)) : h && (fe(), G(h, 1, 1, () => {
        h = null;
      }), ue()), (!i || m[0] & /*tool*/
      4096) && yt(
        t,
        "drawing",
        /*tool*/
        e[12]
      );
    },
    i(u) {
      if (!i) {
        for (let m = 0; m < f.length; m += 1)
          H(l[m]);
        H(h), i = !0;
      }
    },
    o(u) {
      l = l.filter(Boolean);
      for (let m = 0; m < l.length; m += 1)
        G(l[m]);
      G(h), i = !1;
    },
    d(u) {
      u && O(t), ft(l, u), h && h.d(), e[25](null), e[26](null), s = !1, re(r);
    }
  };
}
function Vi(e, t, n) {
  let o, i, s, r, f, l, c, h, u, m, d = z, p = () => (d(), d = Kt(y, (X) => n(14, m = X)), y);
  e.$$.on_destroy.push(() => d());
  let { drawingEnabled: A } = t, { image: E } = t, { preferredDrawingMode: w } = t, { state: g } = t, { style: _ = void 0 } = t, { toolName: M = at().length > 0 ? at()[0] : void 0 } = t, { user: L } = t, D, I, y;
  he(() => p(n(5, y = oi(E, I))));
  const { selection: b, store: S } = g;
  pt(e, b, (X) => n(24, h = X)), pt(e, S, (X) => n(13, u = X));
  let P = null, B = null;
  const C = (X) => {
    S.unobserve(P);
    const ee = X.filter(({ editable: W }) => W).map(({ id: W }) => W);
    ee.length > 0 ? (n(6, B = ee.map((W) => S.getAnnotation(W))), P = (W) => {
      const { updated: me } = W.changes;
      n(6, B = me.map((Z) => Z.newValue));
    }, S.observe(P, { annotations: ee })) : n(6, B = null);
  }, U = (X) => {
    const ee = en(), W = {
      id: ee,
      bodies: [],
      target: {
        annotation: ee,
        selector: X.detail,
        creator: L,
        created: /* @__PURE__ */ new Date()
      }
    };
    S.addAnnotation(W), b.setSelected(W.id);
  }, R = (X) => (ee) => {
    var ge;
    const { target: W } = X, me = 10 * 60 * 1e3, Z = ((ge = W.creator) == null ? void 0 : ge.id) !== L.id || !W.created || (/* @__PURE__ */ new Date()).getTime() - W.created.getTime() > me;
    S.updateTarget({
      ...W,
      selector: ee.detail,
      created: Z ? W.created : /* @__PURE__ */ new Date(),
      updated: Z ? /* @__PURE__ */ new Date() : null,
      updatedBy: Z ? L : null
    });
  };
  function be(X) {
    Ye[X ? "unshift" : "push"](() => {
      D = X, n(4, D);
    });
  }
  function ke(X) {
    Ye[X ? "unshift" : "push"](() => {
      I = X, n(3, I);
    });
  }
  return e.$$set = (X) => {
    "drawingEnabled" in X && n(0, A = X.drawingEnabled), "image" in X && n(19, E = X.image), "preferredDrawingMode" in X && n(20, w = X.preferredDrawingMode), "state" in X && n(21, g = X.state), "style" in X && n(1, _ = X.style), "toolName" in X && n(2, M = X.toolName), "user" in X && n(22, L = X.user);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*toolName*/
    4 && n(12, { tool: o, opts: i } = rn(M), o, (n(23, i), n(2, M))), e.$$.dirty[0] & /*opts, preferredDrawingMode*/
    9437184 && n(11, s = (i == null ? void 0 : i.drawingMode) || w), e.$$.dirty[0] & /*svgEl*/
    8 && n(10, r = Di(I)), e.$$.dirty[0] & /*svgEl*/
    8 && n(9, { onPointerDown: f, onPointerUp: l } = Yi(I, S), f, (n(8, l), n(3, I))), e.$$.dirty[0] & /*$selection*/
    16777216 && n(7, c = (X) => h.selected.find((ee) => ee.id === X.id && ee.editable)), e.$$.dirty[0] & /*$selection*/
    16777216 && C(h.selected);
  }, [
    A,
    _,
    M,
    I,
    D,
    y,
    B,
    c,
    l,
    f,
    r,
    s,
    o,
    u,
    m,
    b,
    S,
    U,
    R,
    E,
    w,
    g,
    L,
    i,
    h,
    be,
    ke
  ];
}
class zi extends x {
  constructor(t) {
    super(), Q(
      this,
      t,
      Vi,
      Gi,
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
function ji(e, t, n, o, i) {
  ln(e, t, n || 0, o || e.length - 1, i || qi);
}
function ln(e, t, n, o, i) {
  for (; o > n; ) {
    if (o - n > 600) {
      var s = o - n + 1, r = t - n + 1, f = Math.log(s), l = 0.5 * Math.exp(2 * f / 3), c = 0.5 * Math.sqrt(f * l * (s - l) / s) * (r - s / 2 < 0 ? -1 : 1), h = Math.max(n, Math.floor(t - r * l / s + c)), u = Math.min(o, Math.floor(t + (s - r) * l / s + c));
      ln(e, t, h, u, i);
    }
    var m = e[t], d = n, p = o;
    for (Pe(e, n, t), i(e[o], m) > 0 && Pe(e, n, o); d < p; ) {
      for (Pe(e, d, p), d++, p--; i(e[d], m) < 0; )
        d++;
      for (; i(e[p], m) > 0; )
        p--;
    }
    i(e[n], m) === 0 ? Pe(e, n, p) : (p++, Pe(e, p, o)), p <= t && (n = p + 1), t <= p && (o = p - 1);
  }
}
function Pe(e, t, n) {
  var o = e[t];
  e[t] = e[n], e[n] = o;
}
function qi(e, t) {
  return e < t ? -1 : e > t ? 1 : 0;
}
class Ki {
  constructor(t = 9) {
    this._maxEntries = Math.max(4, t), this._minEntries = Math.max(2, Math.ceil(this._maxEntries * 0.4)), this.clear();
  }
  all() {
    return this._all(this.data, []);
  }
  search(t) {
    let n = this.data;
    const o = [];
    if (!je(t, n))
      return o;
    const i = this.toBBox, s = [];
    for (; n; ) {
      for (let r = 0; r < n.children.length; r++) {
        const f = n.children[r], l = n.leaf ? i(f) : f;
        je(t, l) && (n.leaf ? o.push(f) : ot(t, l) ? this._all(f, o) : s.push(f));
      }
      n = s.pop();
    }
    return o;
  }
  collides(t) {
    let n = this.data;
    if (!je(t, n))
      return !1;
    const o = [];
    for (; n; ) {
      for (let i = 0; i < n.children.length; i++) {
        const s = n.children[i], r = n.leaf ? this.toBBox(s) : s;
        if (je(t, r)) {
          if (n.leaf || ot(t, r))
            return !0;
          o.push(s);
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
    const i = this.toBBox(t), s = [], r = [];
    let f, l, c;
    for (; o || s.length; ) {
      if (o || (o = s.pop(), l = s[s.length - 1], f = r.pop(), c = !0), o.leaf) {
        const h = Wi(t, o.children, n);
        if (h !== -1)
          return o.children.splice(h, 1), s.push(o), this._condense(s), this;
      }
      !c && !o.leaf && ot(o, i) ? (s.push(o), r.push(f), f = 0, l = o, o = o.children[0]) : l ? (f++, o = l.children[f], c = !1) : o = null;
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
    const s = o - n + 1;
    let r = this._maxEntries, f;
    if (s <= r)
      return f = Le(t.slice(n, o + 1)), Me(f, this.toBBox), f;
    i || (i = Math.ceil(Math.log(s) / Math.log(r)), r = Math.ceil(s / Math.pow(r, i - 1))), f = Le([]), f.leaf = !1, f.height = i;
    const l = Math.ceil(s / r), c = l * Math.ceil(Math.sqrt(r));
    Vt(t, n, o, c, this.compareMinX);
    for (let h = n; h <= o; h += c) {
      const u = Math.min(h + c - 1, o);
      Vt(t, h, u, l, this.compareMinY);
      for (let m = h; m <= u; m += l) {
        const d = Math.min(m + l - 1, u);
        f.children.push(this._build(t, m, d, i - 1));
      }
    }
    return Me(f, this.toBBox), f;
  }
  _chooseSubtree(t, n, o, i) {
    for (; i.push(n), !(n.leaf || i.length - 1 === o); ) {
      let s = 1 / 0, r = 1 / 0, f;
      for (let l = 0; l < n.children.length; l++) {
        const c = n.children[l], h = nt(c), u = Qi(t, c) - h;
        u < r ? (r = u, s = h < s ? h : s, f = c) : u === r && h < s && (s = h, f = c);
      }
      n = f || n.children[0];
    }
    return n;
  }
  _insert(t, n, o) {
    const i = o ? t : this.toBBox(t), s = [], r = this._chooseSubtree(i, this.data, n, s);
    for (r.children.push(t), ve(r, i); n >= 0 && s[n].children.length > this._maxEntries; )
      this._split(s, n), n--;
    this._adjustParentBBoxes(i, s, n);
  }
  // split overflowed node into two
  _split(t, n) {
    const o = t[n], i = o.children.length, s = this._minEntries;
    this._chooseSplitAxis(o, s, i);
    const r = this._chooseSplitIndex(o, s, i), f = Le(o.children.splice(r, o.children.length - r));
    f.height = o.height, f.leaf = o.leaf, Me(o, this.toBBox), Me(f, this.toBBox), n ? t[n - 1].children.push(f) : this._splitRoot(o, f);
  }
  _splitRoot(t, n) {
    this.data = Le([t, n]), this.data.height = t.height + 1, this.data.leaf = !1, Me(this.data, this.toBBox);
  }
  _chooseSplitIndex(t, n, o) {
    let i, s = 1 / 0, r = 1 / 0;
    for (let f = n; f <= o - n; f++) {
      const l = Ie(t, 0, f, this.toBBox), c = Ie(t, f, o, this.toBBox), h = xi(l, c), u = nt(l) + nt(c);
      h < s ? (s = h, i = f, r = u < r ? u : r) : h === s && u < r && (r = u, i = f);
    }
    return i || o - n;
  }
  // sorts node children by the best axis for split
  _chooseSplitAxis(t, n, o) {
    const i = t.leaf ? this.compareMinX : Zi, s = t.leaf ? this.compareMinY : Ji, r = this._allDistMargin(t, n, o, i), f = this._allDistMargin(t, n, o, s);
    r < f && t.children.sort(i);
  }
  // total margin of all possible split distributions where each node is at least m full
  _allDistMargin(t, n, o, i) {
    t.children.sort(i);
    const s = this.toBBox, r = Ie(t, 0, n, s), f = Ie(t, o - n, o, s);
    let l = ze(r) + ze(f);
    for (let c = n; c < o - n; c++) {
      const h = t.children[c];
      ve(r, t.leaf ? s(h) : h), l += ze(r);
    }
    for (let c = o - n - 1; c >= n; c--) {
      const h = t.children[c];
      ve(f, t.leaf ? s(h) : h), l += ze(f);
    }
    return l;
  }
  _adjustParentBBoxes(t, n, o) {
    for (let i = o; i >= 0; i--)
      ve(n[i], t);
  }
  _condense(t) {
    for (let n = t.length - 1, o; n >= 0; n--)
      t[n].children.length === 0 ? n > 0 ? (o = t[n - 1].children, o.splice(o.indexOf(t[n]), 1)) : this.clear() : Me(t[n], this.toBBox);
  }
}
function Wi(e, t, n) {
  if (!n)
    return t.indexOf(e);
  for (let o = 0; o < t.length; o++)
    if (n(e, t[o]))
      return o;
  return -1;
}
function Me(e, t) {
  Ie(e, 0, e.children.length, t, e);
}
function Ie(e, t, n, o, i) {
  i || (i = Le(null)), i.minX = 1 / 0, i.minY = 1 / 0, i.maxX = -1 / 0, i.maxY = -1 / 0;
  for (let s = t; s < n; s++) {
    const r = e.children[s];
    ve(i, e.leaf ? o(r) : r);
  }
  return i;
}
function ve(e, t) {
  return e.minX = Math.min(e.minX, t.minX), e.minY = Math.min(e.minY, t.minY), e.maxX = Math.max(e.maxX, t.maxX), e.maxY = Math.max(e.maxY, t.maxY), e;
}
function Zi(e, t) {
  return e.minX - t.minX;
}
function Ji(e, t) {
  return e.minY - t.minY;
}
function nt(e) {
  return (e.maxX - e.minX) * (e.maxY - e.minY);
}
function ze(e) {
  return e.maxX - e.minX + (e.maxY - e.minY);
}
function Qi(e, t) {
  return (Math.max(t.maxX, e.maxX) - Math.min(t.minX, e.minX)) * (Math.max(t.maxY, e.maxY) - Math.min(t.minY, e.minY));
}
function xi(e, t) {
  const n = Math.max(e.minX, t.minX), o = Math.max(e.minY, t.minY), i = Math.min(e.maxX, t.maxX), s = Math.min(e.maxY, t.maxY);
  return Math.max(0, i - n) * Math.max(0, s - o);
}
function ot(e, t) {
  return e.minX <= t.minX && e.minY <= t.minY && t.maxX <= e.maxX && t.maxY <= e.maxY;
}
function je(e, t) {
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
function Vt(e, t, n, o, i) {
  const s = [t, n];
  for (; s.length; ) {
    if (n = s.pop(), t = s.pop(), n - t <= o)
      continue;
    const r = t + Math.ceil((n - t) / o / 2) * o;
    ji(e, r, t, n, i), s.push(t, r, r, n);
  }
}
const $i = () => {
  const e = new Ki(), t = /* @__PURE__ */ new Map(), n = () => [...t.values()], o = () => {
    e.clear(), t.clear();
  }, i = (u) => {
    const { minX: m, minY: d, maxX: p, maxY: A } = u.selector.geometry.bounds, E = { minX: m, minY: d, maxX: p, maxY: A, target: u };
    e.insert(E), t.set(u.annotation, E);
  }, s = (u) => {
    const m = t.get(u.annotation);
    e.remove(m), t.delete(u.annotation);
  };
  return {
    all: n,
    clear: o,
    getAt: (u, m) => {
      const p = e.search({
        minX: u,
        minY: m,
        maxX: u,
        maxY: m
      }).map((A) => A.target).filter((A) => A.selector.type === F.RECTANGLE || En(A.selector, u, m));
      if (p.length > 0)
        return p.sort((A, E) => rt(A.selector) - rt(E.selector)), p[0];
    },
    getIntersecting: (u, m, d, p) => e.search({
      minX: u,
      minY: m,
      maxX: u + d,
      maxY: m + p
    }).map((A) => A.target),
    insert: i,
    remove: s,
    set: (u, m = !0) => {
      m && o();
      const d = u.map((p) => {
        const { minX: A, minY: E, maxX: w, maxY: g } = p.selector.geometry.bounds;
        return { minX: A, minY: E, maxX: w, maxY: g, target: p };
      });
      d.forEach((p) => t.set(p.target.annotation, p)), e.load(d);
    },
    size: () => e.all().length,
    update: (u, m) => {
      s(u), i(m);
    }
  };
}, es = (e) => {
  const t = io(), n = $i(), o = Wn(t, e.pointerSelectAction), i = Kn(t), s = fo();
  return t.observe(({ changes: l }) => {
    n.set(l.created.map((c) => c.target), !1), l.deleted.forEach((c) => n.remove(c.target)), l.updated.forEach(({ oldValue: c, newValue: h }) => n.update(c.target, h.target));
  }), {
    store: {
      ...t,
      getAt: (l, c) => {
        const h = n.getAt(l, c);
        return h ? t.getAnnotation(h.annotation) : void 0;
      },
      getIntersecting: (l, c, h, u) => n.getIntersecting(l, c, h, u).map((m) => t.getAnnotation(m.annotation))
    },
    selection: o,
    hover: i,
    viewport: s
  };
}, ts = (e) => {
  const t = es(e);
  return {
    ...t,
    store: so(t.store)
  };
}, ns = (e) => {
  let t, n;
  if (e.nodeName === "CANVAS")
    t = e, n = t.getContext("2d", { willReadFrequently: !0 });
  else {
    const i = e;
    t = document.createElement("canvas"), t.width = i.width, t.height = i.height, n = t.getContext("2d", { willReadFrequently: !0 }), n.drawImage(i, 0, 0, i.width, i.height);
  }
  let o = 0;
  for (let i = 1; i < 10; i++)
    for (let s = 1; s < 10; s++) {
      const r = Math.round(s * t.width / 10), f = Math.round(i * t.height / 10), l = n.getImageData(r, f, 1, 1).data, c = (0.299 * l[0] + 0.587 * l[1] + 0.114 * l[2]) / 255;
      o += c;
    }
  return o / 81;
}, os = (e) => {
  const t = ns(e), n = t > 0.6 ? "dark" : "light";
  return console.log(`[Annotorious] Image brightness: ${t.toFixed(1)}. Setting ${n} theme.`), n;
}, zt = (e, t, n) => t.setAttribute("data-theme", n === "auto" ? os(e) : n), is = (e, t) => ({
  ...e,
  drawingEnabled: e.drawingEnabled === void 0 ? t.drawingEnabled : e.drawingEnabled,
  drawingMode: e.drawingMode || t.drawingMode,
  pointerSelectAction: e.pointerSelectAction || t.pointerSelectAction,
  theme: e.theme || t.theme
}), jt = navigator.userAgent.indexOf("Mac OS X") !== -1, ss = (e, t) => {
  const n = t || document, o = (r) => {
    r.key === "Z" && r.ctrlKey ? e.undo() : r.key === "Y" && r.ctrlKey && e.redo();
  }, i = (r) => {
    r.key === "z" && r.metaKey && (r.shiftKey ? e.redo() : e.undo());
  }, s = () => {
    jt ? n.removeEventListener("keydown", i) : n.removeEventListener("keydown", o);
  };
  return jt ? n.addEventListener("keydown", i) : n.addEventListener("keydown", o), {
    destroy: s
  };
};
const fs = (e, t = {}) => {
  if (!e)
    throw "Missing argument: image";
  const n = typeof e == "string" ? document.getElementById(e) : e, o = is(t, {
    drawingEnabled: !0,
    drawingMode: "drag",
    pointerSelectAction: tn.EDIT,
    theme: "light"
  }), i = ts(o), { selection: s, store: r } = i, f = ao(r), l = uo(
    i,
    f,
    o.adapter,
    o.autoSave
  ), c = document.createElement("DIV");
  c.style.position = "relative", c.style.display = "inline-block", n.style.display = "block", n.parentNode.insertBefore(c, n), c.appendChild(n);
  const h = ss(f);
  let u = _o();
  zt(n, c, o.theme);
  const m = new zi({
    target: c,
    props: {
      drawingEnabled: o.drawingEnabled,
      image: n,
      preferredDrawingMode: o.drawingMode,
      state: i,
      style: o.style,
      user: u
    }
  });
  m.$on("click", (y) => {
    const { originalEvent: b, annotation: S } = y.detail;
    S ? s.clickSelect(S.id, b) : s.isEmpty() || s.clear();
  });
  const d = ho(i, f, o.adapter), p = () => {
    m.$destroy(), c.parentNode.insertBefore(n, c), c.parentNode.removeChild(c), h.destroy(), f.destroy();
  }, A = () => u, E = (y, b, S) => yi(y, b, S), w = (y, b) => zo(y, b), g = (y) => {
    if (!rn(y))
      throw `No drawing tool named ${y}`;
    m.$set({ toolName: y });
  }, _ = (y) => m.$set({ drawingEnabled: y }), M = (y) => {
    console.warn("Filter not implemented yet");
  }, L = (y) => m.$set({ style: y }), D = (y) => zt(n, c, y), I = (y) => {
    u = y, m.$set({ user: y });
  };
  return {
    ...d,
    destroy: p,
    getUser: A,
    listDrawingTools: at,
    on: l.on,
    off: l.off,
    registerDrawingTool: E,
    registerShapeEditor: w,
    setDrawingEnabled: _,
    setDrawingTool: g,
    setFilter: M,
    setStyle: L,
    setTheme: D,
    setUser: I,
    state: i
  };
};
export {
  Ne as Editor,
  Zo as EditorMount,
  Xo as EllipseEditor,
  Uo as FreehandEditor,
  T as Handle,
  as as IdentityTransform,
  Vo as LineEditor,
  Ln as LineUtil,
  Oo as PolygonEditor,
  vo as RectangleEditor,
  Mn as RectangleUtil,
  ei as RubberbandRectangle,
  zi as SVGAnnotationLayer,
  F as ShapeType,
  Qo as ToolMount,
  rs as W3CImageFormat,
  Yi as addEventListeners,
  _e as boundsFromPoints,
  rt as computeArea,
  fs as createImageAnnotator,
  es as createImageAnnotatorState,
  Di as createSVGTransform,
  ts as createSvelteImageAnnotatorState,
  os as detectTheme,
  $e as distance,
  oi as enableResponsive,
  is as fillDefaults,
  Lt as getEditor,
  rn as getTool,
  ss as initKeyboardCommands,
  En as intersects,
  ls as isTouch,
  at as listDrawingTools,
  On as parseFragmentSelector,
  Hn as parseSVGSelector,
  Ao as parseW3CImageAnnotation,
  zo as registerEditor,
  Re as registerShapeUtil,
  yi as registerTool,
  ns as sampleBrightness,
  kn as serializeFragmentSelector,
  Fn as serializeSVGSelector,
  So as serializeW3CImageAnnotation,
  zt as setTheme
};
//# sourceMappingURL=annotorious.es.js.map
