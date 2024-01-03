function V() {
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
function z(e) {
  return typeof e == "function";
}
function q(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function mn(e) {
  return Object.keys(e).length === 0;
}
function Qt(e, ...t) {
  if (e == null)
    return V;
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
      for (let f = 0; f < s; f += 1)
        r[f] = t.dirty[f] | i[f];
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
function ee(e, t) {
  e.appendChild(t);
}
function O(e, t, n) {
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
function Z() {
  return $t(" ");
}
function de() {
  return $t("");
}
function j(e, t, n, o) {
  return e.addEventListener(t, n, o), () => e.removeEventListener(t, n, o);
}
function l(e, t, n) {
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
function me() {
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
const Te = [], Ye = [];
let ke = [];
const At = [], bn = /* @__PURE__ */ Promise.resolve();
let at = !1;
function En() {
  at || (at = !0, bn.then(tn));
}
function ft(e) {
  ke.push(e);
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
    for (let t = 0; t < ke.length; t += 1) {
      const n = ke[t];
      et.has(n) || (et.add(n), n());
    }
    ke.length = 0;
  } while (Te.length);
  for (; At.length; )
    At.pop()();
  at = !1, et.clear(), De(e);
}
function An(e) {
  if (e.fragment !== null) {
    e.update(), ae(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(ft);
  }
}
function Sn(e) {
  const t = [], n = [];
  ke.forEach((o) => e.indexOf(o) === -1 ? t.push(o) : n.push(o)), n.forEach((o) => o()), ke = t;
}
const Je = /* @__PURE__ */ new Set();
let ye;
function ce() {
  ye = {
    r: 0,
    c: [],
    p: ye
    // parent group
  };
}
function ue() {
  ye.r || ae(ye.c), ye = ye.p;
}
function H(e, t) {
  e && e.i && (Je.delete(e), e.i(t));
}
function G(e, t, n, o) {
  if (e && e.o) {
    if (Je.has(e))
      return;
    Je.add(e), ye.c.push(() => {
      Je.delete(e), o && (n && e.d(1), o());
    }), e.o(t);
  } else
    o && o();
}
function re(e) {
  e && e.c();
}
function oe(e, t, n, o) {
  const { fragment: i, after_update: r } = e.$$;
  i && i.m(t, n), o || ft(() => {
    const s = e.$$.on_mount.map(Jt).filter(z);
    e.$$.on_destroy ? e.$$.on_destroy.push(...s) : ae(s), e.$$.on_mount = [];
  }), r.forEach(ft);
}
function ie(e, t) {
  const n = e.$$;
  n.fragment !== null && (Sn(n.after_update), ae(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Mn(e, t) {
  e.$$.dirty[0] === -1 && (Te.push(e), En(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function J(e, t, n, o, i, r, s, f = [-1]) {
  const a = Be;
  De(e);
  const c = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: r,
    update: V,
    not_equal: i,
    bound: wt(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (a ? a.$$.context : [])),
    // everything else
    callbacks: wt(),
    dirty: f,
    skip_bound: !1,
    root: t.target || a.$$.root
  };
  s && s(c.root);
  let m = !1;
  if (c.ctx = n ? n(e, t.props || {}, (u, h, ...d) => {
    const p = d.length ? d[0] : h;
    return c.ctx && i(c.ctx[u], c.ctx[u] = p) && (!c.skip_bound && c.bound[u] && c.bound[u](p), m && Mn(e, u)), h;
  }) : [], c.update(), m = !0, ae(c.before_update), c.fragment = o ? o(c.ctx) : !1, t.target) {
    if (t.hydrate) {
      const u = _n(t.target);
      c.fragment && c.fragment.l(u), u.forEach(k);
    } else
      c.fragment && c.fragment.c();
    t.intro && H(e.$$.fragment), oe(e, t.target, t.anchor, t.customElement), tn();
  }
  De(a);
}
class Q {
  $destroy() {
    ie(this, 1), this.$destroy = V;
  }
  $on(t, n) {
    if (!z(n))
      return V;
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
const ht = {}, Re = (e, t) => ht[e] = t, ct = (e) => ht[e.type].area(e), Tn = (e, t, n) => ht[e.type].intersects(e, t, n), we = (e) => {
  let t = 1 / 0, n = 1 / 0, o = -1 / 0, i = -1 / 0;
  return e.forEach(([r, s]) => {
    t = Math.min(t, r), n = Math.min(n, s), o = Math.max(o, r), i = Math.max(i, s);
  }), { minX: t, minY: n, maxX: o, maxY: i };
}, Ln = {
  area: (e) => Math.PI * e.geometry.rx * e.geometry.ry,
  intersects: (e, t, n) => {
    const { cx: o, cy: i, rx: r, ry: s } = e.geometry, f = 0, a = Math.cos(f), c = Math.sin(f), m = t - o, u = n - i, h = a * m + c * u, d = c * m - a * u;
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
      const f = o[r][0], a = o[r][1], c = o[s][0], m = o[s][1];
      a > n != m > n && t < (c - f) * (n - a) / (m - a) + f && (i = !i);
    }
    return i;
  }
};
Re(F.POLYGON, kn);
const On = {
  area: (e) => e.geometry.w * e.geometry.h,
  intersects: (e, t, n) => t >= e.geometry.x && t <= e.geometry.x + e.geometry.w && n >= e.geometry.y && n <= e.geometry.y + e.geometry.h
};
Re(F.RECTANGLE, On);
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
      const f = o[r][0], a = o[r][1], c = o[s][0], m = o[s][1];
      a > n != m > n && t < (c - f) * (n - a) / (m - a) + f && (i = !i);
    }
    return i;
  }
};
Re(F.FREEHAND, vn);
const Pn = {
  area: (e) => 0,
  intersects: (e, t, n) => {
    const o = e.geometry.x1, i = e.geometry.x2, r = e.geometry.y1, s = e.geometry.y2;
    var f = Math.sqrt(Math.pow(t - o, 2) + Math.pow(n - r, 2)), a = Math.sqrt(Math.pow(t - i, 2) + Math.pow(n - s, 2)), c = Math.sqrt(Math.pow(i - o, 2) + Math.pow(s - r, 2)), m = f + a;
    return Math.abs(m - c) <= 0.1;
  }
};
Re(F.LINE, Pn);
const In = (e, t = !1) => {
  const n = typeof e == "string" ? e : e.value, o = /^(xywh)=(pixel|percent)?:?(.+?),(.+?),(.+?),(.+)*/g, i = [...n.matchAll(o)][0], [r, s, f, a, c, m, u] = i;
  if (s !== "xywh")
    throw new Error("Unsupported MediaFragment: " + n);
  if (f && f !== "pixel")
    throw new Error(`Unsupported MediaFragment unit: ${f}`);
  const [h, d, p, A] = [a, c, m, u].map(parseFloat);
  return {
    type: F.RECTANGLE,
    geometry: {
      x: h,
      y: d,
      w: p,
      h: A,
      bounds: {
        minX: h,
        minY: t ? d - A : d,
        maxX: h + p,
        maxY: t ? d : d + A
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
    var f = ((e[0] - o) * r + (e[1] - i) * s) / (r * r + s * s);
    f > 1 ? (o = n[0], i = n[1]) : f > 0 && (o += r * f, i += s * f);
  }
  return r = e[0] - o, s = e[1] - i, r * r + s * s;
}
function Rn(e, t) {
  for (var n = e[0], o = [n], i, r = 1, s = e.length; r < s; r++)
    i = e[r], Yn(i, n) > t && (o.push(i), n = i);
  return n !== i && o.push(i), o;
}
function ut(e, t, n, o, i) {
  for (var r = o, s, f = t + 1; f < n; f++) {
    var a = Xn(e[f], e[t], e[n]);
    a > r && (s = f, r = a);
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
      const [f, a] = s[(r + 1) % s.length];
      return n.push(o, i, (o + f) / 2, (i + a) / 2), n;
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
  const i = /([MQZT])([^MQZT]*)/g, s = Array.from(o.matchAll(i)).map((f) => (f[1], f[2].trim().split(/\s+/).map(parseFloat)));
  return {
    type: F.FREEHAND,
    geometry: {
      points: s,
      bounds: we(s)
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
      bounds: we(i)
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
function _e(e, t) {
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
        for (; o-- && _e(e[o], t[o]); )
          ;
      return o === -1;
    }
    if (!n || typeof e == "object") {
      o = 0;
      for (n in e)
        if (Tt.call(e, n) && ++o && !Tt.call(t, n) || !(n in t) || !_e(e[n], t[n]))
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
  function i(f) {
    if (Jn(e, f) && (e = f, n)) {
      const a = !Ae.length;
      for (const c of o)
        c[1](), Ae.push(c, e);
      if (a) {
        for (let c = 0; c < Ae.length; c += 2)
          Ae[c][0](Ae[c + 1]);
        Ae.length = 0;
      }
    }
  }
  function r(f) {
    i(f(e));
  }
  function s(f, a = tt) {
    const c = [f, a];
    return o.add(c), o.size === 1 && (n = t(i) || tt), f(e), () => {
      o.delete(c), o.size === 0 && n && (n(), n = null);
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
  n((u) => i = u);
  const r = () => o(nt), s = () => {
    var u;
    return ((u = i.selected) == null ? void 0 : u.length) === 0;
  }, f = (u) => {
    if (i.selected.length === 0)
      return !1;
    const h = typeof u == "string" ? u : u.id;
    return i.selected.some((d) => d.id === h);
  }, a = (u, h) => {
    const d = e.getAnnotation(u);
    if (d) {
      const p = $n(d, t);
      o(p === "EDIT" ? { selected: [{ id: u, editable: !0 }], pointerEvent: h } : p === "SELECT" ? { selected: [{ id: u }], pointerEvent: h } : { selected: [], pointerEvent: h });
    } else
      console.warn("Invalid selection: " + u);
  }, c = (u, h = !0) => {
    const d = Array.isArray(u) ? u : [u], p = d.map((A) => e.getAnnotation(A)).filter((A) => A);
    o({ selected: p.map(({ id: A }) => ({ id: A, editable: h })) }), p.length !== d.length && console.warn("Invalid selection", u);
  }, m = (u) => {
    if (i.selected.length === 0)
      return !1;
    const { selected: h } = i;
    h.filter(({ id: d }) => u.includes(d)).length > 0 && o({ selected: h.filter(({ id: d }) => !u.includes(d)) });
  };
  return e.observe(({ changes: u }) => m(u.deleted.map((h) => h.id))), {
    clear: r,
    clickSelect: a,
    get selected() {
      return i ? [...i.selected] : null;
    },
    get pointerEvent() {
      return i ? i.pointerEvent : null;
    },
    isEmpty: s,
    isSelected: f,
    setSelected: c,
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
  return { newBody: n, oldBody: o && !_e(o, n) ? o : void 0 };
}).filter(({ oldBody: n }) => n), io = (e, t) => !_e(e.target, t.target), ln = (e, t) => {
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
    const { ignore: s } = e.options, f = (a) => (a == null ? void 0 : a.length) > 0;
    if (!(f(i.created) || f(i.deleted))) {
      const a = (n = i.updated) == null ? void 0 : n.some((m) => f(m.bodiesCreated) || f(m.bodiesDeleted) || f(m.bodiesUpdated)), c = (o = i.updated) == null ? void 0 : o.some((m) => m.targetUpdated);
      if (s === "BODY_ONLY" && a && !c || s === "TARGET_ONLY" && c && !a)
        return !1;
    }
  }
  if (e.options.annotations) {
    const s = /* @__PURE__ */ new Set([
      ...i.created.map((f) => f.id),
      ...i.deleted.map((f) => f.id),
      ...i.updated.map(({ oldValue: f }) => f.id)
    ]);
    return !!(Array.isArray(e.options.annotations) ? e.options.annotations : [e.options.annotations]).find((f) => s.has(f));
  } else
    return !0;
}, so = (e, t) => {
  const n = new Set((e.created || []).map((u) => u.id)), o = new Set((e.updated || []).map(({ newValue: u }) => u.id)), i = new Set((t.created || []).map((u) => u.id)), r = new Set((t.deleted || []).map((u) => u.id)), s = new Set((t.updated || []).map(({ oldValue: u }) => u.id)), f = new Set((t.updated || []).filter(({ oldValue: u }) => n.has(u.id) || o.has(u.id)).map(({ oldValue: u }) => u.id)), a = [
    ...(e.created || []).filter((u) => !r.has(u.id)).map((u) => s.has(u.id) ? t.updated.find(({ oldValue: h }) => h.id === u.id).newValue : u),
    ...t.created || []
  ], c = [
    ...(e.deleted || []).filter((u) => !i.has(u.id)),
    ...(t.deleted || []).filter((u) => !n.has(u.id))
  ], m = [
    ...(e.updated || []).filter(({ newValue: u }) => !r.has(u.id)).map((u) => {
      const { oldValue: h, newValue: d } = u;
      if (s.has(d.id)) {
        const p = t.updated.find((A) => A.oldValue.id === d.id).newValue;
        return ln(h, p);
      } else
        return u;
    }),
    ...(t.updated || []).filter(({ oldValue: u }) => !f.has(u.id))
  ];
  return { created: a, deleted: c, updated: m };
}, lo = (e) => e.id !== void 0, ao = () => {
  const e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map(), n = [], o = (w, b = {}) => n.push({ onChange: w, options: b }), i = (w) => {
    const b = n.findIndex((S) => S.onChange == w);
    b > -1 && n.splice(b, 1);
  }, r = (w, b) => {
    const S = {
      origin: w,
      changes: {
        created: b.created || [],
        updated: b.updated || [],
        deleted: b.deleted || []
      },
      state: [...e.values()]
    };
    n.forEach((v) => {
      ro(v, S) && v.onChange(S);
    });
  }, s = (w, b = K.LOCAL) => {
    if (e.get(w.id))
      throw Error(`Cannot add annotation ${w.id} - exists already`);
    e.set(w.id, w), w.bodies.forEach((S) => t.set(S.id, w.id)), r(b, { created: [w] });
  }, f = (w, b) => {
    const S = typeof w == "string" ? b : w, v = typeof w == "string" ? w : w.id, B = e.get(v);
    if (B) {
      const D = ln(B, S);
      return v === S.id ? e.set(v, S) : (e.delete(v), e.set(S.id, S)), B.bodies.forEach((P) => t.delete(P.id)), S.bodies.forEach((P) => t.set(P.id, S.id)), D;
    } else
      console.warn(`Cannot update annotation ${v} - does not exist`);
  }, a = (w, b = K.LOCAL, S = K.LOCAL) => {
    const v = lo(b) ? S : b, B = f(w, b);
    B && r(v, { updated: [B] });
  }, c = (w, b = K.LOCAL) => {
    const S = w.reduce((v, B) => {
      const D = f(B);
      return D ? [...v, D] : v;
    }, []);
    S.length > 0 && r(b, { updated: S });
  }, m = (w, b = K.LOCAL) => {
    const S = e.get(w.annotation);
    if (S) {
      const v = {
        ...S,
        bodies: [...S.bodies, w]
      };
      e.set(S.id, v), t.set(w.id, v.id), r(b, { updated: [{
        oldValue: S,
        newValue: v,
        bodiesCreated: [w]
      }] });
    } else
      console.warn(`Attempt to add body to missing annotation: ${w.annotation}`);
  }, u = () => [...e.values()], h = (w = K.LOCAL) => {
    const b = [...e.values()];
    e.clear(), t.clear(), r(w, { deleted: b });
  }, d = (w, b = !0, S = K.LOCAL) => {
    if (b) {
      const v = [...e.values()];
      e.clear(), t.clear(), w.forEach((B) => {
        e.set(B.id, B), B.bodies.forEach((D) => t.set(D.id, B.id));
      }), r(S, { created: w, deleted: v });
    } else {
      const v = w.reduce((B, D) => {
        const P = e.get(D.id);
        return P ? [...B, P] : B;
      }, []);
      if (v.length > 0)
        throw Error(`Bulk insert would overwrite the following annotations: ${v.map((B) => B.id).join(", ")}`);
      w.forEach((B) => {
        e.set(B.id, B), B.bodies.forEach((D) => t.set(D.id, B.id));
      }), r(S, { created: w });
    }
  }, p = (w) => {
    const b = typeof w == "string" ? w : w.id, S = e.get(b);
    if (S)
      return e.delete(b), S.bodies.forEach((v) => t.delete(v.id)), S;
    console.warn(`Attempt to delete missing annotation: ${b}`);
  }, A = (w, b = K.LOCAL) => {
    const S = p(w);
    S && r(b, { deleted: [S] });
  }, E = (w, b = K.LOCAL) => {
    const S = w.reduce((v, B) => {
      const D = p(B);
      return D ? [...v, D] : v;
    }, []);
    S.length > 0 && r(b, { deleted: S });
  }, _ = (w, b = K.LOCAL) => {
    const S = e.get(w.annotation);
    if (S) {
      const v = S.bodies.find((B) => B.id === w.id);
      if (v) {
        t.delete(v.id);
        const B = {
          ...S,
          bodies: S.bodies.filter((D) => D.id !== w.id)
        };
        e.set(S.id, B), r(b, { updated: [{
          oldValue: S,
          newValue: B,
          bodiesDeleted: [v]
        }] });
      } else
        console.warn(`Attempt to delete missing body ${w.id} from annotation ${w.annotation}`);
    } else
      console.warn(`Attempt to delete body from missing annotation ${w.annotation}`);
  }, g = (w) => {
    const b = e.get(w);
    return b ? { ...b } : void 0;
  }, y = (w) => {
    const b = t.get(w);
    if (b) {
      const S = g(b).bodies.find((v) => v.id === w);
      if (S)
        return S;
      console.error(`Store integrity error: body ${w} in index, but not in annotation`);
    } else
      console.warn(`Attempt to retrieve missing body: ${w}`);
  }, M = (w, b) => {
    if (w.annotation !== b.annotation)
      throw "Annotation integrity violation: annotation ID must be the same when updating bodies";
    const S = e.get(w.annotation);
    if (S) {
      const v = S.bodies.find((D) => D.id === w.id), B = {
        ...S,
        bodies: S.bodies.map((D) => D.id === v.id ? b : D)
      };
      return e.set(S.id, B), v.id !== b.id && (t.delete(v.id), t.set(b.id, B.id)), {
        oldValue: S,
        newValue: B,
        bodiesUpdated: [{ oldBody: v, newBody: b }]
      };
    } else
      console.warn(`Attempt to add body to missing annotation ${w.annotation}`);
  }, L = (w, b, S = K.LOCAL) => {
    const v = M(w, b);
    r(S, { updated: [v] });
  }, X = (w, b = K.LOCAL) => {
    const S = w.map((v) => M({ id: v.id, annotation: v.annotation }, v));
    r(b, { updated: S });
  }, R = (w) => {
    const b = e.get(w.annotation);
    if (b) {
      const S = {
        ...b,
        target: {
          ...b.target,
          ...w
        }
      };
      return e.set(b.id, S), {
        oldValue: b,
        newValue: S,
        targetUpdated: {
          oldTarget: b.target,
          newTarget: w
        }
      };
    } else
      console.warn(`Attempt to update target on missing annotation: ${w.annotation}`);
  };
  return {
    addAnnotation: s,
    addBody: m,
    all: u,
    bulkAddAnnotation: d,
    bulkDeleteAnnotation: E,
    bulkUpdateAnnotation: c,
    bulkUpdateBodies: X,
    bulkUpdateTargets: (w, b = K.LOCAL) => {
      const S = w.map(R).filter((v) => v);
      S.length > 0 && r(b, { updated: S });
    },
    clear: h,
    deleteAnnotation: A,
    deleteBody: _,
    getAnnotation: g,
    getBody: y,
    observe: o,
    unobserve: i,
    updateAnnotation: a,
    updateBody: L,
    updateTarget: (w, b = K.LOCAL) => {
      const S = R(w);
      S && r(b, { updated: [S] });
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
      const { changes: p } = d, A = performance.now();
      if (A - r > uo)
        n.splice(o + 1), n.push(p), o = n.length - 1;
      else {
        const E = n.length - 1;
        n[E] = so(n[E], p);
      }
      r = A;
    }
    i = !1;
  };
  e.observe(s, { origin: K.LOCAL });
  const f = (d) => (d == null ? void 0 : d.length) > 0 && e.bulkDeleteAnnotation(d), a = (d) => (d == null ? void 0 : d.length) > 0 && e.bulkAddAnnotation(d, !1), c = (d) => (d == null ? void 0 : d.length) > 0 && e.bulkUpdateAnnotation(d.map(({ oldValue: p }) => p)), m = (d) => (d == null ? void 0 : d.length) > 0 && e.bulkUpdateAnnotation(d.map(({ newValue: p }) => p)), u = (d) => (d == null ? void 0 : d.length) > 0 && e.bulkAddAnnotation(d, !1), h = (d) => (d == null ? void 0 : d.length) > 0 && e.bulkDeleteAnnotation(d);
  return {
    canRedo: () => n.length - 1 > o,
    canUndo: () => o > -1,
    destroy: () => e.unobserve(s),
    on: (d, p) => t.on(d, p),
    redo: () => {
      if (n.length - 1 > o) {
        i = !0;
        const { created: d, updated: p, deleted: A } = n[o + 1];
        a(d), m(p), h(A), t.emit("redo", n[o + 1]), o += 1;
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
}, ho = () => {
  const { subscribe: e, set: t } = pt([]);
  return {
    subscribe: e,
    set: t
  };
}, go = (e, t, n, o) => {
  const { store: i, selection: r, hover: s, viewport: f } = e, a = /* @__PURE__ */ new Map();
  let c = [], m, u;
  const h = (_, g) => {
    a.has(_) ? a.get(_).push(g) : a.set(_, [g]);
  }, d = (_, g) => {
    const y = a.get(_);
    y && y.indexOf(g) > 0 && y.splice(y.indexOf(g), 1);
  }, p = (_, g, y) => {
    a.has(_) && setTimeout(() => {
      a.get(_).forEach((M) => {
        if (n) {
          const L = Array.isArray(g) ? g.map((R) => n.serialize(R)) : n.serialize(g), X = y ? y instanceof PointerEvent ? y : n.serialize(y) : void 0;
          M(L, X);
        } else
          M(g, y);
      });
    }, 1);
  }, A = () => {
    const { selected: _ } = r, g = _.map(({ id: y }) => i.getAnnotation(y));
    g.forEach((y) => {
      const M = c.find((L) => L.id === y.id);
      (!M || !_e(M, y)) && p("updateAnnotation", y, M);
    }), c = c.map((y) => g.find(({ id: L }) => L === y.id) || y);
  };
  r.subscribe(({ selected: _ }) => {
    if (!(c.length === 0 && _.length === 0)) {
      if (c.length === 0 && _.length > 0)
        c = _.map(({ id: g }) => i.getAnnotation(g));
      else if (c.length > 0 && _.length === 0)
        c.forEach((g) => {
          const y = i.getAnnotation(g.id);
          y && !_e(y, g) && p("updateAnnotation", y, g);
        }), c = [];
      else {
        const g = new Set(c.map((M) => M.id)), y = new Set(_.map(({ id: M }) => M));
        c.filter((M) => !y.has(M.id)).forEach((M) => {
          const L = i.getAnnotation(M.id);
          L && !_e(L, M) && p("updateAnnotation", L, M);
        }), c = [
          // Remove annotations that were deselected
          ...c.filter((M) => y.has(M.id)),
          // Add editable annotations that were selected
          ..._.filter(({ id: M }) => !g.has(M)).map(({ id: M }) => i.getAnnotation(M))
        ];
      }
      p("selectionChanged", c);
    }
  }), s.subscribe((_) => {
    !m && _ ? p("mouseEnterAnnotation", i.getAnnotation(_)) : m && !_ ? p("mouseLeaveAnnotation", i.getAnnotation(m)) : m && _ && (p("mouseLeaveAnnotation", i.getAnnotation(m)), p("mouseEnterAnnotation", i.getAnnotation(_))), m = _;
  }), f == null || f.subscribe((_) => p("viewportIntersect", _.map(i.getAnnotation))), i.observe((_) => {
    o && (u && clearTimeout(u), u = setTimeout(A, 1e3));
    const { created: g, deleted: y } = _.changes;
    g.forEach((M) => p("createAnnotation", M)), y.forEach((M) => p("deleteAnnotation", M)), _.changes.updated.filter((M) => [
      ...M.bodiesCreated || [],
      ...M.bodiesDeleted || [],
      ...M.bodiesUpdated || []
    ].length > 0).forEach(({ oldValue: M, newValue: L }) => {
      const X = c.find((R) => R.id === M.id) || M;
      c = c.map((R) => R.id === M.id ? L : R), p("updateAnnotation", L, X);
    });
  }, { origin: K.LOCAL }), i.observe((_) => {
    if (c) {
      const g = new Set(c.map((M) => M.id)), y = _.changes.updated.filter(({ newValue: M }) => g.has(M.id)).map(({ newValue: M }) => M);
      y.length > 0 && (c = c.map((M) => y.find((X) => X.id === M.id) || M));
    }
  }, { origin: K.REMOTE });
  const E = (_) => (g) => {
    const { created: y, deleted: M, updated: L } = g;
    y.forEach((X) => p("createAnnotation", X)), M.forEach((X) => p("deleteAnnotation", X)), _ ? L.forEach((X) => p("updateAnnotation", X.oldValue, X.newValue)) : L.forEach((X) => p("updateAnnotation", X.newValue, X.oldValue));
  };
  return t.on("undo", E(!0)), t.on("redo", E(!1)), { on: h, off: d, emit: p };
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
  const { store: o, selection: i } = e, r = (E) => {
    if (n) {
      const { parsed: _, error: g } = n.parse(E);
      _ ? o.addAnnotation(_, K.REMOTE) : console.error(g);
    } else
      o.addAnnotation(E, K.REMOTE);
  }, s = () => i.clear(), f = () => o.clear(), a = (E) => {
    const _ = o.getAnnotation(E);
    return n && _ ? n.serialize(_) : _;
  }, c = () => n ? o.all().map(n.serialize) : o.all(), m = () => {
    var E;
    const _ = (((E = i.selected) == null ? void 0 : E.map((g) => g.id)) || []).map((g) => o.getAnnotation(g));
    return n ? _.map(n.serialize) : _;
  }, u = (E) => fetch(E).then((_) => _.json()).then((_) => (d(_), _)), h = (E) => {
    if (typeof E == "string") {
      const _ = o.getAnnotation(E);
      return o.deleteAnnotation(E), n ? n.serialize(_) : _;
    } else {
      const _ = n ? n.parse(E).parsed : E;
      return o.deleteAnnotation(_), E;
    }
  }, d = (E) => {
    if (n) {
      const { parsed: _, failed: g } = po(n)(E);
      g.length > 0 && console.warn(`Discarded ${g.length} invalid annotations`, g), o.bulkAddAnnotation(_, !0, K.REMOTE);
    } else
      o.bulkAddAnnotation(E, !0, K.REMOTE);
  }, p = (E) => {
    E ? i.setSelected(E) : i.clear();
  }, A = (E) => {
    if (n) {
      const _ = n.parse(E).parsed, g = n.serialize(o.getAnnotation(_.id));
      return o.updateAnnotation(_), g;
    } else {
      const _ = o.getAnnotation(E.id);
      return o.updateAnnotation(E), _;
    }
  };
  return {
    addAnnotation: r,
    cancelSelected: s,
    canRedo: t.canRedo,
    canUndo: t.canUndo,
    clearAnnotations: f,
    getAnnotationById: a,
    getAnnotations: c,
    getSelected: m,
    loadAnnotations: u,
    redo: t.redo,
    removeAnnotation: h,
    setAnnotations: d,
    setSelected: p,
    undo: t.undo,
    updateAnnotation: A
  };
};
let _o = (e) => crypto.getRandomValues(new Uint8Array(e)), wo = (e, t, n) => {
  let o = (2 << Math.log(e.length - 1) / Math.LN2) - 1, i = -~(1.6 * o * t / e.length);
  return (r = t) => {
    let s = "";
    for (; ; ) {
      let f = n(i), a = i;
      for (; a--; )
        if (s += e[f[a] & o] || "", s.length === r)
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
  const { id: o, type: i, purpose: r, value: s, created: f, creator: a, ...c } = n;
  return {
    id: o || `temp-${So(n)}`,
    annotation: t,
    type: i,
    purpose: r,
    value: s,
    created: f ? new Date(f) : void 0,
    creator: an(a),
    ...c
  };
}), To = (e) => e.map((t) => {
  var n;
  const o = { ...t };
  return delete o.annotation, (n = o.id) != null && n.startsWith("temp-") && delete o.id, o;
});
Eo();
const hr = (e, t = !1) => ({ parse: (i) => Lo(i, t), serialize: (i) => ko(i, e) }), Lo = (e, t = !1) => {
  const n = e.id || rn(), {
    creator: o,
    created: i,
    updatedBy: r,
    updated: s,
    body: f,
    ...a
  } = e, c = Mo(f, n), m = Array.isArray(e.target) ? e.target[0] : e.target, u = Array.isArray(m.selector) ? m.selector[0] : m.selector, h = u.type === "FragmentSelector" ? In(u, t) : u.type === "SvgSelector" ? zn(u) : void 0;
  return h ? {
    parsed: {
      ...a,
      id: n,
      bodies: c,
      target: {
        created: i ? new Date(i) : void 0,
        creator: an(o),
        ...a.target,
        annotation: n,
        selector: h
      }
    }
  } : {
    error: Error(`Unknown selector type: ${u.type}`)
  };
}, ko = (e, t) => {
  const {
    selector: n,
    creator: o,
    created: i,
    updated: r,
    updatedBy: s,
    ...f
  } = e.target, a = n.type == F.RECTANGLE ? Dn(n.geometry) : jn(n);
  return {
    ...e,
    "@context": "http://www.w3.org/ns/anno.jsonld",
    id: e.id,
    type: "Annotation",
    body: To(e.bodies),
    creator: o,
    created: i == null ? void 0 : i.toISOString(),
    target: {
      ...f,
      source: t,
      selector: a
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
      t = I("rect"), l(t, "class", "a9s-corner-handle"), l(t, "x", n = /*point*/
      e[11][0] - /*handleSize*/
      e[3] / 2), l(t, "y", o = /*point*/
      e[11][1] - /*handleSize*/
      e[3] / 2), l(
        t,
        "height",
        /*handleSize*/
        e[3]
      ), l(
        t,
        "width",
        /*handleSize*/
        e[3]
      );
    },
    m(s, f) {
      O(s, t, f), i || (r = j(t, "pointerdown", function() {
        z(
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
    p(s, f) {
      e = s, f & /*geom, handleSize*/
      24 && n !== (n = /*point*/
      e[11][0] - /*handleSize*/
      e[3] / 2) && l(t, "x", n), f & /*geom, handleSize*/
      24 && o !== (o = /*point*/
      e[11][1] - /*handleSize*/
      e[3] / 2) && l(t, "y", o), f & /*handleSize*/
      8 && l(
        t,
        "height",
        /*handleSize*/
        e[3]
      ), f & /*handleSize*/
      8 && l(
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
function Oo(e) {
  let t, n, o, i, r, s, f, a, c, m, u = (
    /*geom*/
    e[4].points
  ), h = [];
  for (let d = 0; d < u.length; d += 1)
    h[d] = kt(Lt(e, u, d));
  return {
    c() {
      t = I("polygon"), i = Z(), r = I("polygon"), f = Z();
      for (let d = 0; d < h.length; d += 1)
        h[d].c();
      a = de(), l(t, "class", "a9s-outer"), l(t, "style", n = /*computedStyle*/
      e[1] ? "display:none;" : void 0), l(t, "points", o = /*geom*/
      e[4].points.map(Ot).join(" ")), l(r, "class", "a9s-inner a9s-shape-handle"), l(
        r,
        "style",
        /*computedStyle*/
        e[1]
      ), l(r, "points", s = /*geom*/
      e[4].points.map(vt).join(" "));
    },
    m(d, p) {
      O(d, t, p), O(d, i, p), O(d, r, p), O(d, f, p);
      for (let A = 0; A < h.length; A += 1)
        h[A] && h[A].m(d, p);
      O(d, a, p), c || (m = [
        j(t, "pointerdown", function() {
          z(
            /*grab*/
            e[10](T.SHAPE)
          ) && e[10](T.SHAPE).apply(this, arguments);
        }),
        j(r, "pointerdown", function() {
          z(
            /*grab*/
            e[10](T.SHAPE)
          ) && e[10](T.SHAPE).apply(this, arguments);
        })
      ], c = !0);
    },
    p(d, p) {
      if (e = d, p & /*computedStyle*/
      2 && n !== (n = /*computedStyle*/
      e[1] ? "display:none;" : void 0) && l(t, "style", n), p & /*geom*/
      16 && o !== (o = /*geom*/
      e[4].points.map(Ot).join(" ")) && l(t, "points", o), p & /*computedStyle*/
      2 && l(
        r,
        "style",
        /*computedStyle*/
        e[1]
      ), p & /*geom*/
      16 && s !== (s = /*geom*/
      e[4].points.map(vt).join(" ")) && l(r, "points", s), p & /*geom, handleSize, grab, Handle*/
      1048) {
        u = /*geom*/
        e[4].points;
        let A;
        for (A = 0; A < u.length; A += 1) {
          const E = Lt(e, u, A);
          h[A] ? h[A].p(E, p) : (h[A] = kt(E), h[A].c(), h[A].m(a.parentNode, a));
        }
        for (; A < h.length; A += 1)
          h[A].d(1);
        h.length = u.length;
      }
    },
    d(d) {
      d && k(t), d && k(i), d && k(r), d && k(f), mt(h, d), d && k(a), c = !1, ae(m);
    }
  };
}
function vo(e) {
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
      re(t.$$.fragment);
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
const Ot = (e) => e.join(","), vt = (e) => e.join(",");
function Po(e, t, n) {
  let o, i, { shape: r } = t, { computedStyle: s = void 0 } = t, { transform: f } = t, { viewportScale: a = 1 } = t;
  const c = (d, p, A) => {
    let E;
    p === T.SHAPE ? E = d.geometry.points.map(([g, y]) => [g + A[0], y + A[1]]) : E = d.geometry.points.map(([g, y], M) => p === T(M) ? [g + A[0], y + A[1]] : [g, y]);
    const _ = we(E);
    return { ...d, geometry: { points: E, bounds: _ } };
  };
  function m(d) {
    te.call(this, e, d);
  }
  function u(d) {
    te.call(this, e, d);
  }
  function h(d) {
    te.call(this, e, d);
  }
  return e.$$set = (d) => {
    "shape" in d && n(0, r = d.shape), "computedStyle" in d && n(1, s = d.computedStyle), "transform" in d && n(2, f = d.transform), "viewportScale" in d && n(6, a = d.viewportScale);
  }, e.$$.update = () => {
    e.$$.dirty & /*shape*/
    1 && n(4, o = r.geometry), e.$$.dirty & /*viewportScale*/
    64 && n(3, i = 10 / a);
  }, [
    r,
    s,
    f,
    i,
    o,
    c,
    a,
    m,
    u,
    h
  ];
}
class Io extends Q {
  constructor(t) {
    super(), J(this, t, Po, vo, q, {
      shape: 0,
      computedStyle: 1,
      transform: 2,
      viewportScale: 6
    });
  }
}
function Do(e) {
  let t, n, o, i, r, s, f, a, c, m, u, h, d, p, A, E, _, g, y, M, L, X, R, w, b, S, v, B, D, P, C, be, Oe, N, $, W, he, fe, ne, Ce, Ue, He, Qe, se, Fe, Ge, Ve, xe, le, ze, je, qe, $e, _t;
  return {
    c() {
      t = I("rect"), f = Z(), a = I("rect"), d = Z(), p = I("rect"), g = Z(), y = I("rect"), R = Z(), w = I("rect"), B = Z(), D = I("rect"), Oe = Z(), N = I("circle"), fe = Z(), ne = I("circle"), Qe = Z(), se = I("circle"), xe = Z(), le = I("circle"), l(t, "class", "a9s-outer"), l(t, "style", n = /*computedStyle*/
      e[1] ? "display:none;" : void 0), l(t, "x", o = /*geom*/
      e[4].x), l(t, "y", i = /*geom*/
      e[4].y), l(t, "width", r = /*geom*/
      e[4].w), l(t, "height", s = /*geom*/
      e[4].h), l(a, "class", "a9s-inner a9s-shape-handle"), l(
        a,
        "style",
        /*computedStyle*/
        e[1]
      ), l(a, "x", c = /*geom*/
      e[4].x), l(a, "y", m = /*geom*/
      e[4].y), l(a, "width", u = /*geom*/
      e[4].w), l(a, "height", h = /*geom*/
      e[4].h), l(p, "class", "a9s-edge-handle a9s-edge-handle-top"), l(p, "x", A = /*geom*/
      e[4].x), l(p, "y", E = /*geom*/
      e[4].y), l(p, "height", 1), l(p, "width", _ = /*geom*/
      e[4].w), l(y, "class", "a9s-edge-handle a9s-edge-handle-right"), l(y, "x", M = /*geom*/
      e[4].x + /*geom*/
      e[4].w), l(y, "y", L = /*geom*/
      e[4].y), l(y, "height", X = /*geom*/
      e[4].h), l(y, "width", 1), l(w, "class", "a9s-edge-handle a9s-edge-handle-bottom"), l(w, "x", b = /*geom*/
      e[4].x), l(w, "y", S = /*geom*/
      e[4].y + /*geom*/
      e[4].h), l(w, "height", 1), l(w, "width", v = /*geom*/
      e[4].w), l(D, "class", "a9s-edge-handle a9s-edge-handle-left"), l(D, "x", P = /*geom*/
      e[4].x), l(D, "y", C = /*geom*/
      e[4].y), l(D, "height", be = /*geom*/
      e[4].h), l(D, "width", 1), l(N, "class", "a9s-corner-handle a9s-corner-handle-topleft"), l(N, "cx", $ = /*geom*/
      e[4].x), l(N, "cy", W = /*geom*/
      e[4].y), l(N, "r", he = /*handleSize*/
      e[3] / 2), l(ne, "class", "a9s-corner-handle a9s-corner-handle-topright"), l(ne, "cx", Ce = /*geom*/
      e[4].x + /*geom*/
      e[4].w), l(ne, "cy", Ue = /*geom*/
      e[4].y), l(ne, "r", He = /*handleSize*/
      e[3] / 2), l(se, "class", "a9s-corner-handle a9s-corner-handle-bottomright"), l(se, "cx", Fe = /*geom*/
      e[4].x + /*geom*/
      e[4].w), l(se, "cy", Ge = /*geom*/
      e[4].y + /*geom*/
      e[4].h), l(se, "r", Ve = /*handleSize*/
      e[3] / 2), l(le, "class", "a9s-corner-handle a9s-corner-handle-bottomleft"), l(le, "cx", ze = /*geom*/
      e[4].x), l(le, "cy", je = /*geom*/
      e[4].y + /*geom*/
      e[4].h), l(le, "r", qe = /*handleSize*/
      e[3] / 2);
    },
    m(U, Y) {
      O(U, t, Y), O(U, f, Y), O(U, a, Y), O(U, d, Y), O(U, p, Y), O(U, g, Y), O(U, y, Y), O(U, R, Y), O(U, w, Y), O(U, B, Y), O(U, D, Y), O(U, Oe, Y), O(U, N, Y), O(U, fe, Y), O(U, ne, Y), O(U, Qe, Y), O(U, se, Y), O(U, xe, Y), O(U, le, Y), $e || (_t = [
        j(t, "pointerdown", function() {
          z(
            /*grab*/
            e[10](T.SHAPE)
          ) && e[10](T.SHAPE).apply(this, arguments);
        }),
        j(a, "pointerdown", function() {
          z(
            /*grab*/
            e[10](T.SHAPE)
          ) && e[10](T.SHAPE).apply(this, arguments);
        }),
        j(p, "pointerdown", function() {
          z(
            /*grab*/
            e[10](T.TOP)
          ) && e[10](T.TOP).apply(this, arguments);
        }),
        j(y, "pointerdown", function() {
          z(
            /*grab*/
            e[10](T.RIGHT)
          ) && e[10](T.RIGHT).apply(this, arguments);
        }),
        j(w, "pointerdown", function() {
          z(
            /*grab*/
            e[10](T.BOTTOM)
          ) && e[10](T.BOTTOM).apply(this, arguments);
        }),
        j(D, "pointerdown", function() {
          z(
            /*grab*/
            e[10](T.LEFT)
          ) && e[10](T.LEFT).apply(this, arguments);
        }),
        j(N, "pointerdown", function() {
          z(
            /*grab*/
            e[10](T.TOP_LEFT)
          ) && e[10](T.TOP_LEFT).apply(this, arguments);
        }),
        j(ne, "pointerdown", function() {
          z(
            /*grab*/
            e[10](T.TOP_RIGHT)
          ) && e[10](T.TOP_RIGHT).apply(this, arguments);
        }),
        j(se, "pointerdown", function() {
          z(
            /*grab*/
            e[10](T.BOTTOM_RIGHT)
          ) && e[10](T.BOTTOM_RIGHT).apply(this, arguments);
        }),
        j(le, "pointerdown", function() {
          z(
            /*grab*/
            e[10](T.BOTTOM_LEFT)
          ) && e[10](T.BOTTOM_LEFT).apply(this, arguments);
        })
      ], $e = !0);
    },
    p(U, Y) {
      e = U, Y & /*computedStyle*/
      2 && n !== (n = /*computedStyle*/
      e[1] ? "display:none;" : void 0) && l(t, "style", n), Y & /*geom*/
      16 && o !== (o = /*geom*/
      e[4].x) && l(t, "x", o), Y & /*geom*/
      16 && i !== (i = /*geom*/
      e[4].y) && l(t, "y", i), Y & /*geom*/
      16 && r !== (r = /*geom*/
      e[4].w) && l(t, "width", r), Y & /*geom*/
      16 && s !== (s = /*geom*/
      e[4].h) && l(t, "height", s), Y & /*computedStyle*/
      2 && l(
        a,
        "style",
        /*computedStyle*/
        e[1]
      ), Y & /*geom*/
      16 && c !== (c = /*geom*/
      e[4].x) && l(a, "x", c), Y & /*geom*/
      16 && m !== (m = /*geom*/
      e[4].y) && l(a, "y", m), Y & /*geom*/
      16 && u !== (u = /*geom*/
      e[4].w) && l(a, "width", u), Y & /*geom*/
      16 && h !== (h = /*geom*/
      e[4].h) && l(a, "height", h), Y & /*geom*/
      16 && A !== (A = /*geom*/
      e[4].x) && l(p, "x", A), Y & /*geom*/
      16 && E !== (E = /*geom*/
      e[4].y) && l(p, "y", E), Y & /*geom*/
      16 && _ !== (_ = /*geom*/
      e[4].w) && l(p, "width", _), Y & /*geom*/
      16 && M !== (M = /*geom*/
      e[4].x + /*geom*/
      e[4].w) && l(y, "x", M), Y & /*geom*/
      16 && L !== (L = /*geom*/
      e[4].y) && l(y, "y", L), Y & /*geom*/
      16 && X !== (X = /*geom*/
      e[4].h) && l(y, "height", X), Y & /*geom*/
      16 && b !== (b = /*geom*/
      e[4].x) && l(w, "x", b), Y & /*geom*/
      16 && S !== (S = /*geom*/
      e[4].y + /*geom*/
      e[4].h) && l(w, "y", S), Y & /*geom*/
      16 && v !== (v = /*geom*/
      e[4].w) && l(w, "width", v), Y & /*geom*/
      16 && P !== (P = /*geom*/
      e[4].x) && l(D, "x", P), Y & /*geom*/
      16 && C !== (C = /*geom*/
      e[4].y) && l(D, "y", C), Y & /*geom*/
      16 && be !== (be = /*geom*/
      e[4].h) && l(D, "height", be), Y & /*geom*/
      16 && $ !== ($ = /*geom*/
      e[4].x) && l(N, "cx", $), Y & /*geom*/
      16 && W !== (W = /*geom*/
      e[4].y) && l(N, "cy", W), Y & /*handleSize*/
      8 && he !== (he = /*handleSize*/
      e[3] / 2) && l(N, "r", he), Y & /*geom*/
      16 && Ce !== (Ce = /*geom*/
      e[4].x + /*geom*/
      e[4].w) && l(ne, "cx", Ce), Y & /*geom*/
      16 && Ue !== (Ue = /*geom*/
      e[4].y) && l(ne, "cy", Ue), Y & /*handleSize*/
      8 && He !== (He = /*handleSize*/
      e[3] / 2) && l(ne, "r", He), Y & /*geom*/
      16 && Fe !== (Fe = /*geom*/
      e[4].x + /*geom*/
      e[4].w) && l(se, "cx", Fe), Y & /*geom*/
      16 && Ge !== (Ge = /*geom*/
      e[4].y + /*geom*/
      e[4].h) && l(se, "cy", Ge), Y & /*handleSize*/
      8 && Ve !== (Ve = /*handleSize*/
      e[3] / 2) && l(se, "r", Ve), Y & /*geom*/
      16 && ze !== (ze = /*geom*/
      e[4].x) && l(le, "cx", ze), Y & /*geom*/
      16 && je !== (je = /*geom*/
      e[4].y + /*geom*/
      e[4].h) && l(le, "cy", je), Y & /*handleSize*/
      8 && qe !== (qe = /*handleSize*/
      e[3] / 2) && l(le, "r", qe);
    },
    d(U) {
      U && k(t), U && k(f), U && k(a), U && k(d), U && k(p), U && k(g), U && k(y), U && k(R), U && k(w), U && k(B), U && k(D), U && k(Oe), U && k(N), U && k(fe), U && k(ne), U && k(Qe), U && k(se), U && k(xe), U && k(le), $e = !1, ae(_t);
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
      re(t.$$.fragment);
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
  let o, i, { shape: r } = t, { computedStyle: s = void 0 } = t, { transform: f } = t, { viewportScale: a = 1 } = t;
  const c = (d, p, A) => {
    const E = d.geometry.bounds;
    let [_, g] = [E.minX, E.minY], [y, M] = [E.maxX, E.maxY];
    const [L, X] = A;
    if (p === T.SHAPE)
      _ += L, y += L, g += X, M += X;
    else {
      switch (p) {
        case T.TOP:
        case T.TOP_LEFT:
        case T.TOP_RIGHT: {
          g += X;
          break;
        }
        case T.BOTTOM:
        case T.BOTTOM_LEFT:
        case T.BOTTOM_RIGHT: {
          M += X;
          break;
        }
      }
      switch (p) {
        case T.LEFT:
        case T.TOP_LEFT:
        case T.BOTTOM_LEFT: {
          _ += L;
          break;
        }
        case T.RIGHT:
        case T.TOP_RIGHT:
        case T.BOTTOM_RIGHT: {
          y += L;
          break;
        }
      }
    }
    const R = Math.min(_, y), w = Math.min(g, M), b = Math.abs(y - _), S = Math.abs(M - g);
    return {
      ...d,
      geometry: {
        x: R,
        y: w,
        w: b,
        h: S,
        bounds: {
          minX: R,
          minY: w,
          maxX: R + b,
          maxY: w + S
        }
      }
    };
  };
  function m(d) {
    te.call(this, e, d);
  }
  function u(d) {
    te.call(this, e, d);
  }
  function h(d) {
    te.call(this, e, d);
  }
  return e.$$set = (d) => {
    "shape" in d && n(0, r = d.shape), "computedStyle" in d && n(1, s = d.computedStyle), "transform" in d && n(2, f = d.transform), "viewportScale" in d && n(6, a = d.viewportScale);
  }, e.$$.update = () => {
    e.$$.dirty & /*shape*/
    1 && n(4, o = r.geometry), e.$$.dirty & /*viewportScale*/
    64 && n(3, i = 10 / a);
  }, [
    r,
    s,
    f,
    i,
    o,
    c,
    a,
    m,
    u,
    h
  ];
}
class Xo extends Q {
  constructor(t) {
    super(), J(this, t, Yo, Bo, q, {
      shape: 0,
      computedStyle: 1,
      transform: 2,
      viewportScale: 6
    });
  }
}
function Ro(e) {
  let t, n, o, i, r, s, f, a, c, m, u, h, d, p, A, E, _, g, y, M, L, X, R, w, b, S, v, B, D;
  return {
    c() {
      t = I("ellipse"), s = Z(), f = I("ellipse"), h = Z(), d = I("rect"), E = Z(), _ = I("rect"), M = Z(), L = I("rect"), w = Z(), b = I("rect"), l(t, "class", "a9s-outer"), l(t, "cx", n = /*geom*/
      e[3].cx), l(t, "cy", o = /*geom*/
      e[3].cy), l(t, "rx", i = /*geom*/
      e[3].rx), l(t, "ry", r = /*geom*/
      e[3].ry), l(f, "class", "a9s-inner a9s-shape-handle"), l(f, "cx", a = /*geom*/
      e[3].cx), l(f, "cy", c = /*geom*/
      e[3].cy), l(f, "rx", m = /*geom*/
      e[3].rx), l(f, "ry", u = /*geom*/
      e[3].ry), l(d, "class", "a9s-corner-handle a9s-corner-top"), l(d, "x", p = /*geom*/
      e[3].cx - /*handleSize*/
      e[2] / 2), l(d, "y", A = /*geom*/
      e[3].cy - /*handleSize*/
      e[2] / 2 - /*geom*/
      e[3].ry), l(
        d,
        "height",
        /*handleSize*/
        e[2]
      ), l(
        d,
        "width",
        /*handleSize*/
        e[2]
      ), l(_, "class", "a9s-corner-handle a9s-corner-handle-right"), l(_, "x", g = /*geom*/
      e[3].cx + /*geom*/
      e[3].rx - /*handleSize*/
      e[2] / 2), l(_, "y", y = /*geom*/
      e[3].cy - /*handleSize*/
      e[2] / 2), l(
        _,
        "height",
        /*handleSize*/
        e[2]
      ), l(
        _,
        "width",
        /*handleSize*/
        e[2]
      ), l(L, "class", "a9s-corner-handle a9s-corner-handle-bottom"), l(L, "x", X = /*geom*/
      e[3].cx - /*handleSize*/
      e[2] / 2), l(L, "y", R = /*geom*/
      e[3].cy + /*geom*/
      e[3].ry - /*handleSize*/
      e[2] / 2), l(
        L,
        "height",
        /*handleSize*/
        e[2]
      ), l(
        L,
        "width",
        /*handleSize*/
        e[2]
      ), l(b, "class", "a9s-corner-handle a9s-corner-handle-left"), l(b, "x", S = /*geom*/
      e[3].cx - /*geom*/
      e[3].rx - /*handleSize*/
      e[2] / 2), l(b, "y", v = /*geom*/
      e[3].cy - /*handleSize*/
      e[2] / 2), l(
        b,
        "height",
        /*handleSize*/
        e[2]
      ), l(
        b,
        "width",
        /*handleSize*/
        e[2]
      );
    },
    m(P, C) {
      O(P, t, C), O(P, s, C), O(P, f, C), O(P, h, C), O(P, d, C), O(P, E, C), O(P, _, C), O(P, M, C), O(P, L, C), O(P, w, C), O(P, b, C), B || (D = [
        j(t, "pointerdown", function() {
          z(
            /*grab*/
            e[9](T.SHAPE)
          ) && e[9](T.SHAPE).apply(this, arguments);
        }),
        j(f, "pointerdown", function() {
          z(
            /*grab*/
            e[9](T.SHAPE)
          ) && e[9](T.SHAPE).apply(this, arguments);
        }),
        j(d, "pointerdown", function() {
          z(
            /*grab*/
            e[9](T.TOP)
          ) && e[9](T.TOP).apply(this, arguments);
        }),
        j(_, "pointerdown", function() {
          z(
            /*grab*/
            e[9](T.RIGHT)
          ) && e[9](T.RIGHT).apply(this, arguments);
        }),
        j(L, "pointerdown", function() {
          z(
            /*grab*/
            e[9](T.BOTTOM)
          ) && e[9](T.BOTTOM).apply(this, arguments);
        }),
        j(b, "pointerdown", function() {
          z(
            /*grab*/
            e[9](T.LEFT)
          ) && e[9](T.LEFT).apply(this, arguments);
        })
      ], B = !0);
    },
    p(P, C) {
      e = P, C & /*geom*/
      8 && n !== (n = /*geom*/
      e[3].cx) && l(t, "cx", n), C & /*geom*/
      8 && o !== (o = /*geom*/
      e[3].cy) && l(t, "cy", o), C & /*geom*/
      8 && i !== (i = /*geom*/
      e[3].rx) && l(t, "rx", i), C & /*geom*/
      8 && r !== (r = /*geom*/
      e[3].ry) && l(t, "ry", r), C & /*geom*/
      8 && a !== (a = /*geom*/
      e[3].cx) && l(f, "cx", a), C & /*geom*/
      8 && c !== (c = /*geom*/
      e[3].cy) && l(f, "cy", c), C & /*geom*/
      8 && m !== (m = /*geom*/
      e[3].rx) && l(f, "rx", m), C & /*geom*/
      8 && u !== (u = /*geom*/
      e[3].ry) && l(f, "ry", u), C & /*geom, handleSize*/
      12 && p !== (p = /*geom*/
      e[3].cx - /*handleSize*/
      e[2] / 2) && l(d, "x", p), C & /*geom, handleSize*/
      12 && A !== (A = /*geom*/
      e[3].cy - /*handleSize*/
      e[2] / 2 - /*geom*/
      e[3].ry) && l(d, "y", A), C & /*handleSize*/
      4 && l(
        d,
        "height",
        /*handleSize*/
        e[2]
      ), C & /*handleSize*/
      4 && l(
        d,
        "width",
        /*handleSize*/
        e[2]
      ), C & /*geom, handleSize*/
      12 && g !== (g = /*geom*/
      e[3].cx + /*geom*/
      e[3].rx - /*handleSize*/
      e[2] / 2) && l(_, "x", g), C & /*geom, handleSize*/
      12 && y !== (y = /*geom*/
      e[3].cy - /*handleSize*/
      e[2] / 2) && l(_, "y", y), C & /*handleSize*/
      4 && l(
        _,
        "height",
        /*handleSize*/
        e[2]
      ), C & /*handleSize*/
      4 && l(
        _,
        "width",
        /*handleSize*/
        e[2]
      ), C & /*geom, handleSize*/
      12 && X !== (X = /*geom*/
      e[3].cx - /*handleSize*/
      e[2] / 2) && l(L, "x", X), C & /*geom, handleSize*/
      12 && R !== (R = /*geom*/
      e[3].cy + /*geom*/
      e[3].ry - /*handleSize*/
      e[2] / 2) && l(L, "y", R), C & /*handleSize*/
      4 && l(
        L,
        "height",
        /*handleSize*/
        e[2]
      ), C & /*handleSize*/
      4 && l(
        L,
        "width",
        /*handleSize*/
        e[2]
      ), C & /*geom, handleSize*/
      12 && S !== (S = /*geom*/
      e[3].cx - /*geom*/
      e[3].rx - /*handleSize*/
      e[2] / 2) && l(b, "x", S), C & /*geom, handleSize*/
      12 && v !== (v = /*geom*/
      e[3].cy - /*handleSize*/
      e[2] / 2) && l(b, "y", v), C & /*handleSize*/
      4 && l(
        b,
        "height",
        /*handleSize*/
        e[2]
      ), C & /*handleSize*/
      4 && l(
        b,
        "width",
        /*handleSize*/
        e[2]
      );
    },
    d(P) {
      P && k(t), P && k(s), P && k(f), P && k(h), P && k(d), P && k(E), P && k(_), P && k(M), P && k(L), P && k(w), P && k(b), B = !1, ae(D);
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
      re(t.$$.fragment);
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
  let o, i, { shape: r } = t, { transform: s } = t, { viewportScale: f = 1 } = t;
  const a = (h, d, p) => {
    const A = h.geometry.bounds;
    let [E, _] = [A.minX, A.minY], [g, y] = [A.maxX, A.maxY];
    const [M, L] = p;
    if (d === T.SHAPE)
      E += M, g += M, _ += L, y += L;
    else
      switch (d) {
        case T.TOP: {
          _ += L;
          break;
        }
        case T.BOTTOM: {
          y += L;
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
    const X = Math.min(E, g), R = Math.min(_, y), w = Math.abs(g - E), b = Math.abs(y - _), S = (E + g) / 2, v = (_ + y) / 2, B = w / 2, D = b / 2;
    return {
      ...h,
      geometry: {
        ...h.geometry,
        cx: S,
        cy: v,
        rx: B,
        ry: D,
        bounds: {
          minX: X,
          minY: R,
          maxX: X + w,
          maxY: R + b
        }
      }
    };
  };
  function c(h) {
    te.call(this, e, h);
  }
  function m(h) {
    te.call(this, e, h);
  }
  function u(h) {
    te.call(this, e, h);
  }
  return e.$$set = (h) => {
    "shape" in h && n(0, r = h.shape), "transform" in h && n(1, s = h.transform), "viewportScale" in h && n(5, f = h.viewportScale);
  }, e.$$.update = () => {
    e.$$.dirty & /*shape*/
    1 && n(3, o = r.geometry), e.$$.dirty & /*viewportScale*/
    32 && n(2, i = 10 / f);
  }, [
    r,
    s,
    i,
    o,
    a,
    f,
    c,
    m,
    u
  ];
}
class Uo extends Q {
  constructor(t) {
    super(), J(this, t, Co, No, q, { shape: 0, transform: 1, viewportScale: 5 });
  }
}
const pe = (e, t, n) => {
  const o = typeof t == "function" ? t(e) : t;
  if (o) {
    const { fill: i, fillOpacity: r } = o;
    let s = "", f;
    return i && (s += `fill:${i};stroke:${i};`), n && (f = n.fillOpacity), s += `fill-opacity:${f || r || "0.25"};`, s;
  }
};
function Ho(e) {
  let t, n, o;
  return {
    c() {
      t = I("path"), l(t, "class", "a9s-shape-handle"), l(
        t,
        "style",
        /*computedStyle*/
        e[3]
      ), l(
        t,
        "d",
        /*pathData*/
        e[2]
      );
    },
    m(i, r) {
      O(i, t, r), n || (o = j(t, "pointerdown", function() {
        z(
          /*grab*/
          e[14](T.SHAPE)
        ) && e[14](T.SHAPE).apply(this, arguments);
      }), n = !0);
    },
    p(i, r) {
      e = i, r & /*computedStyle*/
      8 && l(
        t,
        "style",
        /*computedStyle*/
        e[3]
      ), r & /*pathData*/
      4 && l(
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
      re(t.$$.fragment);
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
  let o, i, r, { shape: s } = t, { annotation: f } = t, { transform: a } = t, { viewportScale: c = 1 } = t, { style: m = void 0 } = t, u = { fillOpacity: 1 };
  const h = (E, _, g) => {
    let y;
    _ === T.SHAPE && (y = E.geometry.points.map(([L, X, R]) => [L + g[0], X + g[1], R]));
    const M = we(y.map((L) => [L[0], L[1]]));
    return { ...E, geometry: { points: y, bounds: M } };
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
    "shape" in E && n(0, s = E.shape), "annotation" in E && n(5, f = E.annotation), "transform" in E && n(1, a = E.transform), "viewportScale" in E && n(6, c = E.viewportScale), "style" in E && n(7, m = E.style);
  }, e.$$.update = () => {
    e.$$.dirty & /*shape*/
    1 && n(8, o = s.geometry), e.$$.dirty & /*viewportScale*/
    64, e.$$.dirty & /*annotation, style*/
    160 && n(3, i = pe(f, m, u)), e.$$.dirty & /*geom*/
    256 && n(2, r = Xe(o.points, gt, !0));
  }, [
    s,
    a,
    r,
    i,
    h,
    f,
    c,
    m,
    o,
    d,
    p,
    A
  ];
}
class Vo extends Q {
  constructor(t) {
    super(), J(this, t, Go, Fo, q, {
      shape: 0,
      annotation: 5,
      transform: 1,
      viewportScale: 6,
      style: 7
    });
  }
}
function zo(e) {
  let t, n, o, i, r, s, f, a, c, m, u, h, d, p, A, E, _, g, y, M, L, X, R, w, b, S, v, B;
  return {
    c() {
      t = I("defs"), n = I("marker"), o = I("path"), i = Z(), r = I("line"), u = Z(), h = I("line"), _ = Z(), g = I("circle"), X = Z(), R = I("circle"), l(o, "d", "M 0 0 L 10 5 L 0 10 z"), l(n, "id", "arrow"), l(n, "viewBox", "0 0 10 10"), l(n, "refX", "5"), l(n, "refY", "5"), l(n, "markerWidth", "6"), l(n, "markerHeight", "6"), l(n, "orient", "auto-start-reverse"), l(r, "class", "a9s-outer"), l(r, "style", s = /*computedStyle*/
      e[1] ? "display:none;" : void 0), l(r, "x1", f = /*geom*/
      e[4].x1), l(r, "y1", a = /*geom*/
      e[4].y1), l(r, "x2", c = /*geom*/
      e[4].x2), l(r, "y2", m = /*geom*/
      e[4].y2), l(r, "marker-end", "url(#arrow)"), l(h, "class", "a9s-inner a9s-shape-handle"), l(
        h,
        "style",
        /*computedStyle*/
        e[1]
      ), l(h, "marker-end", "url(#arrow)"), l(h, "x1", d = /*geom*/
      e[4].x1), l(h, "y1", p = /*geom*/
      e[4].y1), l(h, "x2", A = /*geom*/
      e[4].x2), l(h, "y2", E = /*geom*/
      e[4].y2), l(g, "class", "a9s-corner-handle"), l(g, "cx", y = /*geom*/
      e[4].x1), l(g, "cy", M = /*geom*/
      e[4].y1), l(g, "r", L = /*handleSize*/
      e[3] / 3), l(R, "class", "a9s-corner-handle"), l(R, "cx", w = /*geom*/
      e[4].x2), l(R, "cy", b = /*geom*/
      e[4].y2), l(R, "r", S = /*handleSize*/
      e[3] / 3);
    },
    m(D, P) {
      O(D, t, P), ee(t, n), ee(n, o), O(D, i, P), O(D, r, P), O(D, u, P), O(D, h, P), O(D, _, P), O(D, g, P), O(D, X, P), O(D, R, P), v || (B = [
        j(r, "pointerdown", function() {
          z(
            /*grab*/
            e[10](T.SHAPE)
          ) && e[10](T.SHAPE).apply(this, arguments);
        }),
        j(h, "pointerdown", function() {
          z(
            /*grab*/
            e[10](T.SHAPE)
          ) && e[10](T.SHAPE).apply(this, arguments);
        }),
        j(g, "pointerdown", function() {
          z(
            /*grab*/
            e[10](T.LEFT)
          ) && e[10](T.LEFT).apply(this, arguments);
        }),
        j(R, "pointerdown", function() {
          z(
            /*grab*/
            e[10](T.RIGHT)
          ) && e[10](T.RIGHT).apply(this, arguments);
        })
      ], v = !0);
    },
    p(D, P) {
      e = D, P & /*computedStyle*/
      2 && s !== (s = /*computedStyle*/
      e[1] ? "display:none;" : void 0) && l(r, "style", s), P & /*geom*/
      16 && f !== (f = /*geom*/
      e[4].x1) && l(r, "x1", f), P & /*geom*/
      16 && a !== (a = /*geom*/
      e[4].y1) && l(r, "y1", a), P & /*geom*/
      16 && c !== (c = /*geom*/
      e[4].x2) && l(r, "x2", c), P & /*geom*/
      16 && m !== (m = /*geom*/
      e[4].y2) && l(r, "y2", m), P & /*computedStyle*/
      2 && l(
        h,
        "style",
        /*computedStyle*/
        e[1]
      ), P & /*geom*/
      16 && d !== (d = /*geom*/
      e[4].x1) && l(h, "x1", d), P & /*geom*/
      16 && p !== (p = /*geom*/
      e[4].y1) && l(h, "y1", p), P & /*geom*/
      16 && A !== (A = /*geom*/
      e[4].x2) && l(h, "x2", A), P & /*geom*/
      16 && E !== (E = /*geom*/
      e[4].y2) && l(h, "y2", E), P & /*geom*/
      16 && y !== (y = /*geom*/
      e[4].x1) && l(g, "cx", y), P & /*geom*/
      16 && M !== (M = /*geom*/
      e[4].y1) && l(g, "cy", M), P & /*handleSize*/
      8 && L !== (L = /*handleSize*/
      e[3] / 3) && l(g, "r", L), P & /*geom*/
      16 && w !== (w = /*geom*/
      e[4].x2) && l(R, "cx", w), P & /*geom*/
      16 && b !== (b = /*geom*/
      e[4].y2) && l(R, "cy", b), P & /*handleSize*/
      8 && S !== (S = /*handleSize*/
      e[3] / 3) && l(R, "r", S);
    },
    d(D) {
      D && k(t), D && k(i), D && k(r), D && k(u), D && k(h), D && k(_), D && k(g), D && k(X), D && k(R), v = !1, ae(B);
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
      re(t.$$.fragment);
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
  let o, i, { shape: r } = t, { computedStyle: s = void 0 } = t, { transform: f } = t, { viewportScale: a = 1 } = t;
  const c = (d, p, A) => {
    d.geometry.bounds;
    let E = d.geometry.x1, _ = d.geometry.x2, g = d.geometry.y1, y = d.geometry.y2;
    const [M, L] = A;
    if (p === T.SHAPE)
      E += M, _ += M, g += L, y += L;
    else
      switch (p) {
        case T.LEFT: {
          E += M, g += L;
          break;
        }
        case T.RIGHT: {
          _ += M, y += L;
          break;
        }
      }
    return {
      ...d,
      geometry: {
        x1: E,
        y1: g,
        x2: _,
        y2: y,
        bounds: {
          minX: Math.min(E, _),
          minY: Math.min(g, y),
          maxX: Math.max(E, _),
          maxY: Math.max(g, y)
        }
      }
    };
  };
  function m(d) {
    te.call(this, e, d);
  }
  function u(d) {
    te.call(this, e, d);
  }
  function h(d) {
    te.call(this, e, d);
  }
  return e.$$set = (d) => {
    "shape" in d && n(0, r = d.shape), "computedStyle" in d && n(1, s = d.computedStyle), "transform" in d && n(2, f = d.transform), "viewportScale" in d && n(6, a = d.viewportScale);
  }, e.$$.update = () => {
    e.$$.dirty & /*shape*/
    1 && n(4, o = r.geometry), e.$$.dirty & /*viewportScale*/
    64 && n(3, i = 10 / a);
  }, [
    r,
    s,
    f,
    i,
    o,
    c,
    a,
    m,
    u,
    h
  ];
}
class Ko extends Q {
  constructor(t) {
    super(), J(this, t, qo, jo, q, {
      shape: 0,
      computedStyle: 1,
      transform: 2,
      viewportScale: 6
    });
  }
}
const fn = /* @__PURE__ */ new Map([
  [F.RECTANGLE, Xo],
  [F.POLYGON, Io],
  [F.ELLIPSE, Uo],
  [F.FREEHAND, Vo],
  [F.LINE, Ko]
]), Pt = (e) => fn.get(e.type), Wo = (e, t) => fn.set(e, t), T = (e) => `HANDLE-${e}`;
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
      t = I("g"), s && s.c(), l(t, "class", "a9s-annotation selected");
    },
    m(f, a) {
      O(f, t, a), s && s.m(t, null), n = !0, o || (i = [
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
    p(f, [a]) {
      s && s.p && (!n || a & /*$$scope*/
      64) && pn(
        s,
        r,
        f,
        /*$$scope*/
        f[6],
        n ? gn(
          r,
          /*$$scope*/
          f[6],
          a,
          Zo
        ) : yn(
          /*$$scope*/
          f[6]
        ),
        It
      );
    },
    i(f) {
      n || (H(s, f), n = !0);
    },
    o(f) {
      G(s, f), n = !1;
    },
    d(f) {
      f && k(t), s && s.d(f), o = !1, ae(i);
    }
  };
}
function Qo(e, t, n) {
  let { $$slots: o = {}, $$scope: i } = t;
  const r = me();
  let { shape: s } = t, { editor: f } = t, { transform: a } = t, c = null, m, u = null;
  const h = (A) => (E) => {
    c = A, m = a.elementToImage(E.offsetX, E.offsetY), u = s, E.target.setPointerCapture(E.pointerId), r("grab");
  }, d = (A) => {
    if (c) {
      const [E, _] = a.elementToImage(A.offsetX, A.offsetY), g = [E - m[0], _ - m[1]];
      n(3, s = f(u, c, g)), r("change", s);
    }
  }, p = (A) => {
    A.target.releasePointerCapture(A.pointerId), c = null, u = s, r("release");
  };
  return e.$$set = (A) => {
    "shape" in A && n(3, s = A.shape), "editor" in A && n(4, f = A.editor), "transform" in A && n(5, a = A.transform), "$$scope" in A && n(6, i = A.$$scope);
  }, [h, d, p, s, f, a, i, o];
}
class Ne extends Q {
  constructor(t) {
    super(), J(this, t, Qo, Jo, q, { shape: 3, editor: 4, transform: 5 });
  }
}
function xo(e, t, n) {
  let o;
  const i = me();
  let { annotation: r } = t, { editor: s } = t, { style: f = void 0 } = t, { target: a } = t, { transform: c } = t, { viewportScale: m } = t, u;
  return ge(() => (n(6, u = new s({
    target: a,
    props: {
      shape: r.target.selector,
      computedStyle: o,
      transform: c,
      viewportScale: m
    }
  })), u.$on("change", (h) => {
    u.$$set({ shape: h.detail }), i("change", h.detail);
  }), u.$on("grab", (h) => i("grab", h.detail)), u.$on("release", (h) => i("release", h.detail)), () => {
    u.$destroy();
  })), e.$$set = (h) => {
    "annotation" in h && n(0, r = h.annotation), "editor" in h && n(1, s = h.editor), "style" in h && n(2, f = h.style), "target" in h && n(3, a = h.target), "transform" in h && n(4, c = h.transform), "viewportScale" in h && n(5, m = h.viewportScale);
  }, e.$$.update = () => {
    e.$$.dirty & /*annotation, style*/
    5 && (o = pe(r, f)), e.$$.dirty & /*annotation, editorComponent*/
    65 && r && (u == null || u.$set({ shape: r.target.selector })), e.$$.dirty & /*editorComponent, transform*/
    80 && u && u.$set({ transform: c }), e.$$.dirty & /*editorComponent, viewportScale*/
    96 && u && u.$set({ viewportScale: m });
  }, [r, s, f, a, c, m, u];
}
class $o extends Q {
  constructor(t) {
    super(), J(this, t, xo, null, q, {
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
  const o = me();
  let { drawingMode: i } = t, { target: r } = t, { tool: s } = t, { transform: f } = t, { viewportScale: a } = t, c;
  return ge(() => {
    const m = r.closest("svg"), u = [], h = (d, p, A) => {
      m.addEventListener(d, p, A), u.push(() => m.removeEventListener(d, p, A));
    };
    return n(5, c = new s({
      target: r,
      props: {
        addEventListener: h,
        drawingMode: i,
        transform: f,
        viewportScale: a
      }
    })), c.$on("create", (d) => o("create", d.detail)), () => {
      u.forEach((d) => d()), c.$destroy();
    };
  }), e.$$set = (m) => {
    "drawingMode" in m && n(0, i = m.drawingMode), "target" in m && n(1, r = m.target), "tool" in m && n(2, s = m.tool), "transform" in m && n(3, f = m.transform), "viewportScale" in m && n(4, a = m.viewportScale);
  }, e.$$.update = () => {
    e.$$.dirty & /*toolComponent, transform*/
    40 && c && c.$set({ transform: f }), e.$$.dirty & /*toolComponent, viewportScale*/
    48 && c && c.$set({ viewportScale: a });
  }, [i, r, s, f, a, c];
}
class ti extends Q {
  constructor(t) {
    super(), J(this, t, ei, null, q, {
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
      t = I("rect"), n = I("rect"), l(t, "class", "a9s-outer"), l(
        t,
        "x",
        /*x*/
        e[1]
      ), l(
        t,
        "y",
        /*y*/
        e[2]
      ), l(
        t,
        "width",
        /*w*/
        e[3]
      ), l(
        t,
        "height",
        /*h*/
        e[4]
      ), l(n, "class", "a9s-inner"), l(
        n,
        "x",
        /*x*/
        e[1]
      ), l(
        n,
        "y",
        /*y*/
        e[2]
      ), l(
        n,
        "width",
        /*w*/
        e[3]
      ), l(
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
      2 && l(
        t,
        "x",
        /*x*/
        o[1]
      ), i & /*y*/
      4 && l(
        t,
        "y",
        /*y*/
        o[2]
      ), i & /*w*/
      8 && l(
        t,
        "width",
        /*w*/
        o[3]
      ), i & /*h*/
      16 && l(
        t,
        "height",
        /*h*/
        o[4]
      ), i & /*x*/
      2 && l(
        n,
        "x",
        /*x*/
        o[1]
      ), i & /*y*/
      4 && l(
        n,
        "y",
        /*y*/
        o[2]
      ), i & /*w*/
      8 && l(
        n,
        "width",
        /*w*/
        o[3]
      ), i & /*h*/
      16 && l(
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
      t = I("g"), n && n.c(), l(t, "class", "a9s-annotation a9s-rubberband");
    },
    m(o, i) {
      O(o, t, i), n && n.m(t, null);
    },
    p(o, [i]) {
      /*origin*/
      o[0] ? n ? n.p(o, i) : (n = Dt(o), n.c(), n.m(t, null)) : n && (n.d(1), n = null);
    },
    i: V,
    o: V,
    d(o) {
      o && k(t), n && n.d();
    }
  };
}
function oi(e, t, n) {
  const o = me();
  let { addEventListener: i } = t, { drawingMode: r } = t, { transform: s } = t, f, a, c, m, u, h, d;
  const p = (g) => {
    f = performance.now(), r === "drag" && (n(0, a = s.elementToImage(g.offsetX, g.offsetY)), c = a, n(1, m = a[0]), n(2, u = a[1]), n(3, h = 1), n(4, d = 1));
  }, A = (g) => {
    a && (c = s.elementToImage(g.offsetX, g.offsetY), n(1, m = Math.min(c[0], a[0])), n(2, u = Math.min(c[1], a[1])), n(3, h = Math.abs(c[0] - a[0])), n(4, d = Math.abs(c[1] - a[1])));
  }, E = (g) => {
    const y = performance.now() - f;
    if (r === "click") {
      if (y > 300)
        return;
      g.stopPropagation(), a ? _() : (n(0, a = s.elementToImage(g.offsetX, g.offsetY)), c = a, n(1, m = a[0]), n(2, u = a[1]), n(3, h = 1), n(4, d = 1));
    } else
      a && (y > 300 || h * d > 100 ? (g.stopPropagation(), _()) : (n(0, a = null), c = null));
  }, _ = () => {
    if (h * d > 15) {
      const g = {
        type: F.RECTANGLE,
        geometry: {
          bounds: {
            minX: m,
            minY: u,
            maxX: m + h,
            maxY: u + d
          },
          x: m,
          y: u,
          w: h,
          h: d
        }
      };
      o("create", g);
    }
    n(0, a = null), c = null;
  };
  return ge(() => {
    i("pointerdown", p), i("pointermove", A), i("pointerup", E, !0);
  }), e.$$set = (g) => {
    "addEventListener" in g && n(5, i = g.addEventListener), "drawingMode" in g && n(6, r = g.drawingMode), "transform" in g && n(7, s = g.transform);
  }, [a, m, u, h, d, i, r, s];
}
class ii extends Q {
  constructor(t) {
    super(), J(this, t, oi, ni, q, {
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
function ri(e, t = V) {
  let n;
  const o = /* @__PURE__ */ new Set();
  function i(f) {
    if (q(e, f) && (e = f, n)) {
      const a = !Se.length;
      for (const c of o)
        c[1](), Se.push(c, e);
      if (a) {
        for (let c = 0; c < Se.length; c += 2)
          Se[c][0](Se[c + 1]);
        Se.length = 0;
      }
    }
  }
  function r(f) {
    i(f(e));
  }
  function s(f, a = V) {
    const c = [f, a];
    return o.add(c), o.size === 1 && (n = t(i) || V), f(e), () => {
      o.delete(c), o.size === 0 && n && (n(), n = null);
    };
  }
  return { set: i, update: r, subscribe: s };
}
const si = (e, t) => {
  const { naturalWidth: n, naturalHeight: o } = e;
  if (!n && !o) {
    const { width: i, height: r } = e;
    t.setAttribute("viewBox", `0 0 ${i} ${r}`), e.addEventListener("load", (s) => {
      const f = s.target;
      t.setAttribute("viewBox", `0 0 ${f.naturalWidth} ${f.naturalHeight}`);
    });
  } else
    t.setAttribute("viewBox", `0 0 ${n} ${o}`);
}, li = (e, t) => {
  si(e, t);
  const { subscribe: n, set: o } = ri(1);
  let i;
  return window.ResizeObserver && (i = new ResizeObserver(() => {
    const s = t.getBoundingClientRect(), { width: f, height: a } = t.viewBox.baseVal, c = Math.max(
      s.width / f,
      s.height / a
    );
    o(c);
  }), i.observe(t.parentElement)), { destroy: () => {
    i && i.disconnect();
  }, subscribe: n };
}, gr = "ontouchstart" in window || navigator.maxTouchPoints > 0;
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
      t = I("polygon"), o = I("polygon"), s && s.c(), r = de(), l(t, "class", "a9s-outer"), l(t, "points", n = /*coords*/
      e[15]), l(o, "class", "a9s-inner"), l(o, "points", i = /*coords*/
      e[15]);
    },
    m(f, a) {
      O(f, t, a), O(f, o, a), s && s.m(f, a), O(f, r, a);
    },
    p(f, a) {
      a & /*isClosable, points, cursor*/
      7 && n !== (n = /*coords*/
      f[15]) && l(t, "points", n), a & /*isClosable, points, cursor*/
      7 && i !== (i = /*coords*/
      f[15]) && l(o, "points", i), /*isClosable*/
      f[2] ? s ? s.p(f, a) : (s = Yt(f), s.c(), s.m(r.parentNode, r)) : s && (s.d(1), s = null);
    },
    d(f) {
      f && k(t), f && k(o), s && s.d(f), f && k(r);
    }
  };
}
function Yt(e) {
  let t, n, o;
  return {
    c() {
      t = I("rect"), l(t, "class", "a9s-corner-handle"), l(t, "x", n = /*points*/
      e[0][0][0] - /*handleSize*/
      e[3] / 2), l(t, "y", o = /*points*/
      e[0][0][1] - /*handleSize*/
      e[3] / 2), l(
        t,
        "height",
        /*handleSize*/
        e[3]
      ), l(
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
      i[3] / 2) && l(t, "x", n), r & /*points, handleSize*/
      9 && o !== (o = /*points*/
      i[0][0][1] - /*handleSize*/
      i[3] / 2) && l(t, "y", o), r & /*handleSize*/
      8 && l(
        t,
        "height",
        /*handleSize*/
        i[3]
      ), r & /*handleSize*/
      8 && l(
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
      t = I("g"), n && n.c(), l(t, "class", "a9s-annotation a9s-rubberband");
    },
    m(o, i) {
      O(o, t, i), n && n.m(t, null);
    },
    p(o, [i]) {
      /*cursor*/
      o[1] ? n ? n.p(it(o), i) : (n = Bt(it(o)), n.c(), n.m(t, null)) : n && (n.d(1), n = null);
    },
    i: V,
    o: V,
    d(o) {
      o && k(t), n && n.d();
    }
  };
}
const fi = 20;
function ci(e, t, n) {
  let o;
  const i = me();
  let { addEventListener: r } = t, { drawingMode: s } = t, { transform: f } = t, { viewportScale: a = 1 } = t, c, m = [], u = null, h = !1;
  const d = (g) => {
    const { timeStamp: y, offsetX: M, offsetY: L } = g;
    if (c = { timeStamp: y, offsetX: M, offsetY: L }, s === "drag" && m.length === 0) {
      const X = f.elementToImage(g.offsetX, g.offsetY);
      m.push(X), n(1, u = X);
    }
  }, p = (g) => {
    if (m.length > 0 && (n(1, u = f.elementToImage(g.offsetX, g.offsetY)), m.length > 2)) {
      const y = ot(u, m[0]) * a;
      n(2, h = y < fi);
    }
  }, A = (g) => {
    if (s === "click") {
      const y = g.timeStamp - c.timeStamp, M = ot([c.offsetX, c.offsetY], [g.offsetX, g.offsetY]);
      if (y > 300 || M > 15)
        return;
      if (h)
        _();
      else if (m.length === 0) {
        const L = f.elementToImage(g.offsetX, g.offsetY);
        m.push(L), n(1, u = L);
      } else
        m.push(u);
    } else {
      if (m.length === 1 && ot(m[0], u) <= 4) {
        n(0, m = []), n(1, u = null);
        return;
      }
      g.stopImmediatePropagation(), h ? _() : m.push(u);
    }
  }, E = () => {
    const g = [...m, u], y = {
      type: F.POLYGON,
      geometry: { bounds: we(g), points: g }
    };
    ct(y) > 4 && (n(0, m = []), n(1, u = null), i("create", y));
  }, _ = () => {
    const g = {
      type: F.POLYGON,
      geometry: {
        bounds: we(m),
        points: [...m]
      }
    };
    n(0, m = []), n(1, u = null), i("create", g);
  };
  return ge(() => {
    r("pointerdown", d, !0), r("pointermove", p), r("pointerup", A, !0), r("dblclick", E, !0);
  }), e.$$set = (g) => {
    "addEventListener" in g && n(4, r = g.addEventListener), "drawingMode" in g && n(5, s = g.drawingMode), "transform" in g && n(6, f = g.transform), "viewportScale" in g && n(7, a = g.viewportScale);
  }, e.$$.update = () => {
    e.$$.dirty & /*viewportScale*/
    128 && n(3, o = 10 / a);
  }, [
    m,
    u,
    h,
    o,
    r,
    s,
    f,
    a
  ];
}
class ui extends Q {
  constructor(t) {
    super(), J(this, t, ci, ai, q, {
      addEventListener: 4,
      drawingMode: 5,
      transform: 6,
      viewportScale: 7
    });
  }
}
function Xt(e) {
  let t, n, o, i, r, s, f, a, c, m;
  return {
    c() {
      t = I("ellipse"), s = I("ellipse"), l(t, "class", "a9s-outer"), l(t, "cx", n = /*x*/
      e[2] + /*w*/
      e[4] / 2), l(t, "cy", o = /*y*/
      e[3] + /*h*/
      e[5] / 2), l(t, "rx", i = /*w*/
      e[4] / 2), l(t, "ry", r = /*h*/
      e[5] / 2), l(s, "class", "a9s-inner"), l(s, "cx", f = /*x*/
      e[2] + /*w*/
      e[4] / 2), l(s, "cy", a = /*y*/
      e[3] + /*h*/
      e[5] / 2), l(s, "rx", c = /*w*/
      e[4] / 2), l(s, "ry", m = /*h*/
      e[5] / 2);
    },
    m(u, h) {
      O(u, t, h), O(u, s, h);
    },
    p(u, h) {
      h & /*x, w*/
      20 && n !== (n = /*x*/
      u[2] + /*w*/
      u[4] / 2) && l(t, "cx", n), h & /*y, h*/
      40 && o !== (o = /*y*/
      u[3] + /*h*/
      u[5] / 2) && l(t, "cy", o), h & /*w*/
      16 && i !== (i = /*w*/
      u[4] / 2) && l(t, "rx", i), h & /*h*/
      32 && r !== (r = /*h*/
      u[5] / 2) && l(t, "ry", r), h & /*x, w*/
      20 && f !== (f = /*x*/
      u[2] + /*w*/
      u[4] / 2) && l(s, "cx", f), h & /*y, h*/
      40 && a !== (a = /*y*/
      u[3] + /*h*/
      u[5] / 2) && l(s, "cy", a), h & /*w*/
      16 && c !== (c = /*w*/
      u[4] / 2) && l(s, "rx", c), h & /*h*/
      32 && m !== (m = /*h*/
      u[5] / 2) && l(s, "ry", m);
    },
    d(u) {
      u && k(t), u && k(s);
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
      t = I("g"), n && n.c(), l(t, "class", "a9s-annotation a9s-rubberband");
    },
    m(o, i) {
      O(o, t, i), n && n.m(t, null), e[9](t);
    },
    p(o, [i]) {
      /*origin*/
      o[1] ? n ? n.p(o, i) : (n = Xt(o), n.c(), n.m(t, null)) : n && (n.d(1), n = null);
    },
    i: V,
    o: V,
    d(o) {
      o && k(t), n && n.d(), e[9](null);
    }
  };
}
function mi(e, t, n) {
  const o = me();
  let { addEventListener: i } = t, { drawingMode: r } = t, { transform: s } = t, f, a, c, m, u, h, d, p = !1, A = !1, E, _;
  const g = (b) => {
    E = performance.now(), r === "drag" && (n(1, a = s.elementToImage(b.offsetX, b.offsetY)), c = a, n(2, m = a[0]), n(3, u = a[1]), n(4, h = 1), n(5, d = 1));
  }, y = (b) => {
    const S = b || _;
    if (a)
      if (c = s.elementToImage(S.offsetX, S.offsetY), A) {
        const v = 2 * Math.abs(c[0] - a[0]), B = 2 * Math.abs(c[1] - a[1]);
        n(4, h = p ? Math.max(v, B) : v), n(5, d = p ? h : B), n(2, m = Math.min(c[0], a[0] - h / 2)), n(3, u = Math.min(c[1], a[1] - d / 2));
      } else {
        const v = Math.abs(c[0] - a[0]), B = Math.abs(c[1] - a[1]);
        n(4, h = p ? Math.max(v, B) : v), n(5, d = p ? h : B), n(2, m = Math.min(c[0], a[0])), n(3, u = Math.min(c[1], a[1]));
      }
    b && (_ = b);
  }, M = (b) => {
    r === "click" && b.stopImmediatePropagation();
    const S = performance.now() - E;
    if (r === "click") {
      if (S > 300)
        return;
      b.stopPropagation(), a ? L() : (n(1, a = s.elementToImage(b.offsetX, b.offsetY)), c = a, n(2, m = a[0]), n(3, u = a[1]), n(4, h = 1), n(5, d = 1));
    } else
      a && (S > 300 || h * d > 100 ? (b.stopPropagation(), L()) : (n(1, a = null), c = null, _ = void 0));
  }, L = () => {
    if (h * d > 15) {
      const b = {
        type: F.ELLIPSE,
        geometry: {
          bounds: {
            minX: m,
            minY: u,
            maxX: m + h,
            maxY: u + d
          },
          cx: m + h / 2,
          cy: u + d / 2,
          rx: h / 2,
          ry: d / 2
        }
      };
      o("create", b);
    }
    n(1, a = null), c = null, _ = void 0;
  }, X = (b) => {
    b.key === "Shift" && (p = !0, y()), b.key === "Control" && (A = !0, y());
  }, R = (b) => {
    b.key === "Shift" && (p = !1, y()), b.key === "Control" && (A = !1, y());
  };
  ge(() => (document.addEventListener("keyup", R), document.addEventListener("keydown", X), i("pointerdown", g), i("pointermove", y), i("pointerup", M), () => {
    document.removeEventListener("keyup", R), document.removeEventListener("keydown", X);
  }));
  function w(b) {
    Ye[b ? "unshift" : "push"](() => {
      f = b, n(0, f);
    });
  }
  return e.$$set = (b) => {
    "addEventListener" in b && n(6, i = b.addEventListener), "drawingMode" in b && n(7, r = b.drawingMode), "transform" in b && n(8, s = b.transform);
  }, [
    f,
    a,
    m,
    u,
    h,
    d,
    i,
    r,
    s,
    w
  ];
}
class hi extends Q {
  constructor(t) {
    super(), J(this, t, mi, di, q, {
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
      t = I("path"), l(
        t,
        "style",
        /*computedStyle*/
        e[2]
      ), l(
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
      4 && l(
        t,
        "style",
        /*computedStyle*/
        n[2]
      ), o & /*pathData*/
      1 && l(
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
      t = I("g"), n && n.c(), l(t, "class", "a9s-annotation a9s-rubberband");
    },
    m(o, i) {
      O(o, t, i), n && n.m(t, null);
    },
    p(o, [i]) {
      /*isDrawing*/
      o[1] ? n ? n.p(o, i) : (n = Rt(o), n.c(), n.m(t, null)) : n && (n.d(1), n = null);
    },
    i: V,
    o: V,
    d(o) {
      o && k(t), n && n.d();
    }
  };
}
function pi(e, t, n) {
  let o;
  const i = me();
  let { addEventListener: r } = t, { drawingMode: s } = t, { annotation: f } = t, { transform: a } = t, { viewportScale: c = 1 } = t, { style: m = void 0 } = t, u = { fillOpacity: 1 }, h = [], d = "", p = !1;
  const A = (y) => {
    if (s === "drag" && h.length === 0) {
      n(1, p = !0);
      const M = a.elementToImage(y.offsetX, y.offsetY);
      h.push([...M, y.pressure]), n(0, d = Xe(h));
    }
  }, E = (y) => {
    if (p) {
      const M = a.elementToImage(y.offsetX, y.offsetY);
      h.push([...M, y.pressure]), n(0, d = Xe(h, gt, !0));
    }
  }, _ = (y) => {
    p && g();
  }, g = () => {
    const y = {
      type: F.FREEHAND,
      geometry: {
        bounds: we(h.map((M) => [M[0], M[1]])),
        points: h
      }
    };
    n(1, p = !1), h = [], i("create", y);
  };
  return ge(() => {
    r("pointerdown", A, !0), r("pointermove", E), r("pointerup", _, !0);
  }), e.$$set = (y) => {
    "addEventListener" in y && n(3, r = y.addEventListener), "drawingMode" in y && n(4, s = y.drawingMode), "annotation" in y && n(5, f = y.annotation), "transform" in y && n(6, a = y.transform), "viewportScale" in y && n(7, c = y.viewportScale), "style" in y && n(8, m = y.style);
  }, e.$$.update = () => {
    e.$$.dirty & /*viewportScale*/
    128, e.$$.dirty & /*annotation, style*/
    288 && n(2, o = pe(f, m, u));
  }, [
    d,
    p,
    o,
    r,
    s,
    f,
    a,
    c,
    m
  ];
}
class yi extends Q {
  constructor(t) {
    super(), J(this, t, pi, gi, q, {
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
      t = I("line"), n = I("line"), l(t, "class", "a9s-outer"), l(
        t,
        "x1",
        /*x1*/
        e[1]
      ), l(
        t,
        "y1",
        /*y1*/
        e[2]
      ), l(
        t,
        "x2",
        /*x2*/
        e[3]
      ), l(
        t,
        "y2",
        /*y2*/
        e[4]
      ), l(n, "class", "a9s-inner"), l(
        n,
        "x1",
        /*x1*/
        e[1]
      ), l(
        n,
        "y1",
        /*y1*/
        e[2]
      ), l(
        n,
        "x2",
        /*x2*/
        e[3]
      ), l(
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
      2 && l(
        t,
        "x1",
        /*x1*/
        o[1]
      ), i & /*y1*/
      4 && l(
        t,
        "y1",
        /*y1*/
        o[2]
      ), i & /*x2*/
      8 && l(
        t,
        "x2",
        /*x2*/
        o[3]
      ), i & /*y2*/
      16 && l(
        t,
        "y2",
        /*y2*/
        o[4]
      ), i & /*x1*/
      2 && l(
        n,
        "x1",
        /*x1*/
        o[1]
      ), i & /*y1*/
      4 && l(
        n,
        "y1",
        /*y1*/
        o[2]
      ), i & /*x2*/
      8 && l(
        n,
        "x2",
        /*x2*/
        o[3]
      ), i & /*y2*/
      16 && l(
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
      t = I("g"), n && n.c(), l(t, "class", "a9s-annotation a9s-rubberband");
    },
    m(o, i) {
      O(o, t, i), n && n.m(t, null);
    },
    p(o, [i]) {
      /*origin*/
      o[0] ? n ? n.p(o, i) : (n = Nt(o), n.c(), n.m(t, null)) : n && (n.d(1), n = null);
    },
    i: V,
    o: V,
    d(o) {
      o && k(t), n && n.d();
    }
  };
}
function wi(e, t, n) {
  const o = me();
  let { addEventListener: i } = t, { drawingMode: r } = t, { transform: s } = t, f, a, c, m, u, h, d;
  const p = (g) => {
    f = performance.now(), r === "drag" && (n(0, a = s.elementToImage(g.offsetX, g.offsetY)), c = a, n(1, m = a[0]), n(2, u = a[1]), n(3, h = a[0] + 1), n(4, d = a[1] + 1));
  }, A = (g) => {
    a && (c = s.elementToImage(g.offsetX, g.offsetY), n(3, h = c[0]), n(4, d = c[1]));
  }, E = (g) => {
    const y = performance.now() - f;
    if (r === "click") {
      if (y > 300)
        return;
      g.stopPropagation(), a ? _() : (n(0, a = s.elementToImage(g.offsetX, g.offsetY)), c = a, n(1, m = a[0]), n(2, u = a[1]), n(3, h = a[0] + 1), n(4, d = a[1] + 1));
    } else
      a && (y > 300 || Math.sqrt(Math.pow(h - m, 2) + Math.pow(d - u, 2)) > 8 ? (g.stopPropagation(), _()) : (n(0, a = null), c = null));
  }, _ = () => {
    if (Math.sqrt(Math.pow(h - m, 2) + Math.pow(d - u, 2)) > 8) {
      const g = {
        type: F.LINE,
        geometry: {
          bounds: {
            minX: Math.min(m, h),
            minY: Math.min(u, d),
            maxX: Math.max(m, h),
            maxY: Math.max(u, d)
          },
          x1: m,
          y1: u,
          x2: h,
          y2: d
        }
      };
      o("create", g);
    }
    n(0, a = null), c = null;
  };
  return ge(() => {
    i("pointerdown", p), i("pointermove", A), i("pointerup", E, !0);
  }), e.$$set = (g) => {
    "addEventListener" in g && n(5, i = g.addEventListener), "drawingMode" in g && n(6, r = g.drawingMode), "transform" in g && n(7, s = g.transform);
  }, [a, m, u, h, d, i, r, s];
}
class bi extends Q {
  constructor(t) {
    super(), J(this, t, wi, _i, q, {
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
      t = I("g"), n = I("ellipse"), i = I("ellipse"), l(n, "class", "a9s-outer"), l(n, "style", o = /*computedStyle*/
      e[1] ? "display:none;" : void 0), l(
        n,
        "cx",
        /*cx*/
        e[2]
      ), l(
        n,
        "cy",
        /*cy*/
        e[3]
      ), l(
        n,
        "rx",
        /*rx*/
        e[4]
      ), l(
        n,
        "ry",
        /*ry*/
        e[5]
      ), l(i, "class", "a9s-inner"), l(
        i,
        "style",
        /*computedStyle*/
        e[1]
      ), l(
        i,
        "cx",
        /*cx*/
        e[2]
      ), l(
        i,
        "cy",
        /*cy*/
        e[3]
      ), l(
        i,
        "rx",
        /*rx*/
        e[4]
      ), l(
        i,
        "ry",
        /*ry*/
        e[5]
      ), l(t, "data-id", r = /*annotation*/
      e[0].id);
    },
    m(s, f) {
      O(s, t, f), ee(t, n), ee(t, i);
    },
    p(s, [f]) {
      f & /*computedStyle*/
      2 && o !== (o = /*computedStyle*/
      s[1] ? "display:none;" : void 0) && l(n, "style", o), f & /*computedStyle*/
      2 && l(
        i,
        "style",
        /*computedStyle*/
        s[1]
      ), f & /*annotation*/
      1 && r !== (r = /*annotation*/
      s[0].id) && l(t, "data-id", r);
    },
    i: V,
    o: V,
    d(s) {
      s && k(t);
    }
  };
}
function Si(e, t, n) {
  let o, { annotation: i } = t, { geom: r } = t, { style: s = void 0 } = t;
  const { cx: f, cy: a, rx: c, ry: m } = r;
  return e.$$set = (u) => {
    "annotation" in u && n(0, i = u.annotation), "geom" in u && n(6, r = u.geom), "style" in u && n(7, s = u.style);
  }, e.$$.update = () => {
    e.$$.dirty & /*annotation, style*/
    129 && n(1, o = pe(i, s));
  }, [i, o, f, a, c, m, r, s];
}
class Mi extends Q {
  constructor(t) {
    super(), J(this, t, Si, Ai, q, { annotation: 0, geom: 6, style: 7 });
  }
}
function Ti(e) {
  let t, n, o, i, r;
  return {
    c() {
      t = I("g"), n = I("polygon"), i = I("polygon"), l(n, "class", "a9s-outer"), l(n, "style", o = /*computedStyle*/
      e[1] ? "display:none;" : void 0), l(
        n,
        "points",
        /*points*/
        e[2].map(Li).join(" ")
      ), l(i, "class", "a9s-inner"), l(
        i,
        "style",
        /*computedStyle*/
        e[1]
      ), l(
        i,
        "points",
        /*points*/
        e[2].map(ki).join(" ")
      ), l(t, "data-id", r = /*annotation*/
      e[0].id);
    },
    m(s, f) {
      O(s, t, f), ee(t, n), ee(t, i);
    },
    p(s, [f]) {
      f & /*computedStyle*/
      2 && o !== (o = /*computedStyle*/
      s[1] ? "display:none;" : void 0) && l(n, "style", o), f & /*computedStyle*/
      2 && l(
        i,
        "style",
        /*computedStyle*/
        s[1]
      ), f & /*annotation*/
      1 && r !== (r = /*annotation*/
      s[0].id) && l(t, "data-id", r);
    },
    i: V,
    o: V,
    d(s) {
      s && k(t);
    }
  };
}
const Li = (e) => e.join(","), ki = (e) => e.join(",");
function Oi(e, t, n) {
  let o, { annotation: i } = t, { geom: r } = t, { style: s = void 0 } = t;
  const { points: f } = r;
  return e.$$set = (a) => {
    "annotation" in a && n(0, i = a.annotation), "geom" in a && n(3, r = a.geom), "style" in a && n(4, s = a.style);
  }, e.$$.update = () => {
    e.$$.dirty & /*annotation, style*/
    17 && n(1, o = pe(i, s));
  }, [i, o, f, r, s];
}
class vi extends Q {
  constructor(t) {
    super(), J(this, t, Oi, Ti, q, { annotation: 0, geom: 3, style: 4 });
  }
}
function Pi(e) {
  let t, n, o, i, r;
  return {
    c() {
      t = I("g"), n = I("rect"), i = I("rect"), l(n, "class", "a9s-outer"), l(n, "style", o = /*computedStyle*/
      e[5] ? "display:none;" : void 0), l(
        n,
        "x",
        /*x*/
        e[4]
      ), l(
        n,
        "y",
        /*y*/
        e[3]
      ), l(
        n,
        "width",
        /*w*/
        e[2]
      ), l(
        n,
        "height",
        /*h*/
        e[1]
      ), l(i, "class", "a9s-inner"), l(
        i,
        "style",
        /*computedStyle*/
        e[5]
      ), l(
        i,
        "x",
        /*x*/
        e[4]
      ), l(
        i,
        "y",
        /*y*/
        e[3]
      ), l(
        i,
        "width",
        /*w*/
        e[2]
      ), l(
        i,
        "height",
        /*h*/
        e[1]
      ), l(t, "data-id", r = /*annotation*/
      e[0].id);
    },
    m(s, f) {
      O(s, t, f), ee(t, n), ee(t, i);
    },
    p(s, [f]) {
      f & /*computedStyle*/
      32 && o !== (o = /*computedStyle*/
      s[5] ? "display:none;" : void 0) && l(n, "style", o), f & /*x*/
      16 && l(
        n,
        "x",
        /*x*/
        s[4]
      ), f & /*y*/
      8 && l(
        n,
        "y",
        /*y*/
        s[3]
      ), f & /*w*/
      4 && l(
        n,
        "width",
        /*w*/
        s[2]
      ), f & /*h*/
      2 && l(
        n,
        "height",
        /*h*/
        s[1]
      ), f & /*computedStyle*/
      32 && l(
        i,
        "style",
        /*computedStyle*/
        s[5]
      ), f & /*x*/
      16 && l(
        i,
        "x",
        /*x*/
        s[4]
      ), f & /*y*/
      8 && l(
        i,
        "y",
        /*y*/
        s[3]
      ), f & /*w*/
      4 && l(
        i,
        "width",
        /*w*/
        s[2]
      ), f & /*h*/
      2 && l(
        i,
        "height",
        /*h*/
        s[1]
      ), f & /*annotation*/
      1 && r !== (r = /*annotation*/
      s[0].id) && l(t, "data-id", r);
    },
    i: V,
    o: V,
    d(s) {
      s && k(t);
    }
  };
}
function Ii(e, t, n) {
  let o, i, r, s, f, { annotation: a } = t, { geom: c } = t, { style: m = void 0 } = t;
  return e.$$set = (u) => {
    "annotation" in u && n(0, a = u.annotation), "geom" in u && n(6, c = u.geom), "style" in u && n(7, m = u.style);
  }, e.$$.update = () => {
    e.$$.dirty & /*annotation, style*/
    129 && n(5, o = pe(a, m)), e.$$.dirty & /*geom*/
    64 && n(4, { x: i, y: r, w: s, h: f } = c, i, (n(3, r), n(6, c)), (n(2, s), n(6, c)), (n(1, f), n(6, c)));
  }, [a, f, s, r, i, o, c, m];
}
class Di extends Q {
  constructor(t) {
    super(), J(this, t, Ii, Pi, q, { annotation: 0, geom: 6, style: 7 });
  }
}
function Bi(e) {
  let t, n, o;
  return {
    c() {
      t = I("g"), n = I("path"), l(
        n,
        "style",
        /*computedStyle*/
        e[2]
      ), l(
        n,
        "d",
        /*pathData*/
        e[1]
      ), l(t, "data-id", o = /*annotation*/
      e[0].id);
    },
    m(i, r) {
      O(i, t, r), ee(t, n);
    },
    p(i, [r]) {
      r & /*computedStyle*/
      4 && l(
        n,
        "style",
        /*computedStyle*/
        i[2]
      ), r & /*pathData*/
      2 && l(
        n,
        "d",
        /*pathData*/
        i[1]
      ), r & /*annotation*/
      1 && o !== (o = /*annotation*/
      i[0].id) && l(t, "data-id", o);
    },
    i: V,
    o: V,
    d(i) {
      i && k(t);
    }
  };
}
function Yi(e, t, n) {
  let o, i, { annotation: r } = t, { geom: s } = t, { style: f = void 0 } = t, a = { fillOpacity: 1 };
  const { points: c } = s;
  return e.$$set = (m) => {
    "annotation" in m && n(0, r = m.annotation), "geom" in m && n(3, s = m.geom), "style" in m && n(4, f = m.style);
  }, e.$$.update = () => {
    e.$$.dirty & /*annotation, style*/
    17 && n(2, o = pe(r, f, a));
  }, n(1, i = Xe(c, gt, !0)), [r, i, o, s, f];
}
class Xi extends Q {
  constructor(t) {
    super(), J(this, t, Yi, Bi, q, { annotation: 0, geom: 3, style: 4 });
  }
}
function Ri(e) {
  let t, n, o, i, r, s, f, a;
  return {
    c() {
      t = I("g"), n = I("defs"), o = I("marker"), i = I("path"), r = I("line"), f = I("line"), l(i, "d", "M 0 0 L 10 5 L 0 10 z"), l(o, "id", "arrow"), l(o, "viewBox", "0 0 10 10"), l(o, "refX", "6"), l(o, "refY", "6"), l(o, "markerWidth", "6"), l(o, "markerHeight", "6"), l(o, "orient", "auto-start-reverse"), l(r, "class", "a9s-outer"), l(r, "style", s = /*computedStyle*/
      e[5] ? "display:none;" : void 0), l(
        r,
        "x1",
        /*x1*/
        e[4]
      ), l(
        r,
        "y1",
        /*y1*/
        e[3]
      ), l(
        r,
        "x2",
        /*x2*/
        e[2]
      ), l(
        r,
        "y2",
        /*y2*/
        e[1]
      ), l(r, "marker-end", "url(#arrow)"), l(f, "class", "a9s-inner"), l(
        f,
        "style",
        /*computedStyle*/
        e[5]
      ), l(
        f,
        "x1",
        /*x1*/
        e[4]
      ), l(
        f,
        "y1",
        /*y1*/
        e[3]
      ), l(
        f,
        "x2",
        /*x2*/
        e[2]
      ), l(
        f,
        "y2",
        /*y2*/
        e[1]
      ), l(f, "marker-end", "url(#arrow)"), l(t, "data-id", a = /*annotation*/
      e[0].id);
    },
    m(c, m) {
      O(c, t, m), ee(t, n), ee(n, o), ee(o, i), ee(t, r), ee(t, f);
    },
    p(c, [m]) {
      m & /*computedStyle*/
      32 && s !== (s = /*computedStyle*/
      c[5] ? "display:none;" : void 0) && l(r, "style", s), m & /*x1*/
      16 && l(
        r,
        "x1",
        /*x1*/
        c[4]
      ), m & /*y1*/
      8 && l(
        r,
        "y1",
        /*y1*/
        c[3]
      ), m & /*x2*/
      4 && l(
        r,
        "x2",
        /*x2*/
        c[2]
      ), m & /*y2*/
      2 && l(
        r,
        "y2",
        /*y2*/
        c[1]
      ), m & /*computedStyle*/
      32 && l(
        f,
        "style",
        /*computedStyle*/
        c[5]
      ), m & /*x1*/
      16 && l(
        f,
        "x1",
        /*x1*/
        c[4]
      ), m & /*y1*/
      8 && l(
        f,
        "y1",
        /*y1*/
        c[3]
      ), m & /*x2*/
      4 && l(
        f,
        "x2",
        /*x2*/
        c[2]
      ), m & /*y2*/
      2 && l(
        f,
        "y2",
        /*y2*/
        c[1]
      ), m & /*annotation*/
      1 && a !== (a = /*annotation*/
      c[0].id) && l(t, "data-id", a);
    },
    i: V,
    o: V,
    d(c) {
      c && k(t);
    }
  };
}
function Ni(e, t, n) {
  let o, i, r, s, f, { annotation: a } = t, { geom: c } = t, { style: m = void 0 } = t;
  return e.$$set = (u) => {
    "annotation" in u && n(0, a = u.annotation), "geom" in u && n(6, c = u.geom), "style" in u && n(7, m = u.style);
  }, e.$$.update = () => {
    e.$$.dirty & /*annotation, style*/
    129 && n(5, o = pe(a, m)), e.$$.dirty & /*geom*/
    64 && n(4, { x1: i, y1: r, x2: s, y2: f } = c, i, (n(3, r), n(6, c)), (n(2, s), n(6, c)), (n(1, f), n(6, c)));
  }, [a, f, s, r, i, o, c, m];
}
class Ci extends Q {
  constructor(t) {
    super(), J(this, t, Ni, Ri, q, { annotation: 0, geom: 6, style: 7 });
  }
}
const pr = {
  elementToImage: (e, t) => [e, t]
}, Ui = (e) => ({
  elementToImage: (t, n) => {
    const o = e.getBoundingClientRect(), i = e.createSVGPoint();
    i.x = t + o.x, i.y = n + o.y;
    const { x: r, y: s } = i.matrixTransform(e.getScreenCTM().inverse());
    return [r, s];
  }
}), Hi = 250, Fi = (e, t) => {
  const n = me();
  let o;
  return { onPointerDown: () => o = performance.now(), onPointerUp: (s) => {
    if (performance.now() - o < Hi) {
      const { x: a, y: c } = Gi(s, e), m = t.getAt(a, c);
      m ? n("click", { originalEvent: s, annotation: m }) : n("click", { originalEvent: s });
    }
  } };
}, Gi = (e, t) => {
  const n = t.createSVGPoint(), o = t.getBoundingClientRect(), i = e.clientX - o.x, r = e.clientY - o.y, { left: s, top: f } = t.getBoundingClientRect();
  return n.x = i + s, n.y = r + f, n.matrixTransform(t.getScreenCTM().inverse());
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
      8192 && q(t, t = /*annotation*/
      r[32].id) ? (ce(), G(i, 1, 1, V), ue(), i = Ft(r), i.c(), H(i, 1), i.m(n.parentNode, n)) : i.p(r, s);
    },
    i(r) {
      o || (H(i), o = !0);
    },
    o(r) {
      G(i), o = !1;
    },
    d(r) {
      r && k(n), i.d(r);
    }
  };
}
function Vi(e) {
  let t, n;
  return t = new Ci({
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
      re(t.$$.fragment);
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
function zi(e) {
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
      re(t.$$.fragment);
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
function ji(e) {
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
      re(t.$$.fragment);
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
function qi(e) {
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
      re(t.$$.fragment);
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
function Ki(e) {
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
      re(t.$$.fragment);
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
  const r = [
    Ki,
    qi,
    ji,
    zi,
    Vi
  ], s = [];
  function f(a, c) {
    return (
      /*selector*/
      a[35].type === F.ELLIPSE ? 0 : (
        /*selector*/
        a[35].type === F.RECTANGLE ? 1 : (
          /*selector*/
          a[35].type === F.POLYGON ? 2 : (
            /*selector*/
            a[35].type === F.FREEHAND ? 3 : (
              /*selector*/
              a[35].type === F.LINE ? 4 : -1
            )
          )
        )
      )
    );
  }
  return ~(t = f(e)) && (n = s[t] = r[t](e)), {
    c() {
      n && n.c(), o = de();
    },
    m(a, c) {
      ~t && s[t].m(a, c), O(a, o, c), i = !0;
    },
    p(a, c) {
      let m = t;
      t = f(a), t === m ? ~t && s[t].p(a, c) : (n && (ce(), G(s[m], 1, 1, () => {
        s[m] = null;
      }), ue()), ~t ? (n = s[t], n ? n.p(a, c) : (n = s[t] = r[t](a), n.c()), H(n, 1), n.m(o.parentNode, o)) : n = null);
    },
    i(a) {
      i || (H(n), i = !0);
    },
    o(a) {
      G(n), i = !1;
    },
    d(a) {
      ~t && s[t].d(a), a && k(o);
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
      8320 && H(i, 1)) : (i = Ht(rt(r)), i.c(), H(i, 1), i.m(n.parentNode, n)) : i && (ce(), G(i, 1, 1, () => {
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
      i && i.d(r), r && k(n);
    }
  };
}
function Vt(e) {
  let t, n, o, i;
  const r = [Zi, Wi], s = [];
  function f(a, c) {
    return (
      /*editableAnnotations*/
      a[6] ? 0 : (
        /*tool*/
        a[12] && /*drawingEnabled*/
        a[0] ? 1 : -1
      )
    );
  }
  return ~(t = f(e)) && (n = s[t] = r[t](e)), {
    c() {
      n && n.c(), o = de();
    },
    m(a, c) {
      ~t && s[t].m(a, c), O(a, o, c), i = !0;
    },
    p(a, c) {
      let m = t;
      t = f(a), t === m ? ~t && s[t].p(a, c) : (n && (ce(), G(s[m], 1, 1, () => {
        s[m] = null;
      }), ue()), ~t ? (n = s[t], n ? n.p(a, c) : (n = s[t] = r[t](a), n.c()), H(n, 1), n.m(o.parentNode, o)) : n = null);
    },
    i(a) {
      i || (H(n), i = !0);
    },
    o(a) {
      G(n), i = !1;
    },
    d(a) {
      ~t && s[t].d(a), a && k(o);
    }
  };
}
function Wi(e) {
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
      4 && q(t, t = /*toolName*/
      r[2]) ? (ce(), G(i, 1, 1, V), ue(), i = zt(r), i.c(), H(i, 1), i.m(n.parentNode, n)) : i.p(r, s);
    },
    i(r) {
      o || (H(i), o = !0);
    },
    o(r) {
      G(i), o = !1;
    },
    d(r) {
      r && k(n), i.d(r);
    }
  };
}
function Zi(e) {
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
    m(s, f) {
      for (let a = 0; a < i.length; a += 1)
        i[a] && i[a].m(s, f);
      O(s, t, f), n = !0;
    },
    p(s, f) {
      if (f[0] & /*editableAnnotations, drawingEl, style, transform, $scale, onChangeSelected*/
      279634) {
        o = /*editableAnnotations*/
        s[6];
        let a;
        for (a = 0; a < o.length; a += 1) {
          const c = Ct(s, o, a);
          i[a] ? (i[a].p(c, f), H(i[a], 1)) : (i[a] = qt(c), i[a].c(), H(i[a], 1), i[a].m(t.parentNode, t));
        }
        for (ce(), a = o.length; a < i.length; a += 1)
          r(a);
        ue();
      }
    },
    i(s) {
      if (!n) {
        for (let f = 0; f < o.length; f += 1)
          H(i[f]);
        n = !0;
      }
    },
    o(s) {
      i = i.filter(Boolean);
      for (let f = 0; f < i.length; f += 1)
        G(i[f]);
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
      re(t.$$.fragment);
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
      re(t.$$.fragment);
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
      i.c(), n = de();
    },
    m(r, s) {
      i.m(r, s), O(r, n, s), o = !0;
    },
    p(r, s) {
      s[0] & /*editableAnnotations*/
      64 && q(t, t = /*editable*/
      r[29].id) ? (ce(), G(i, 1, 1, V), ue(), i = jt(r), i.c(), H(i, 1), i.m(n.parentNode, n)) : i.p(r, s);
    },
    i(r) {
      o || (H(i), o = !0);
    },
    o(r) {
      G(i), o = !1;
    },
    d(r) {
      r && k(n), i.d(r);
    }
  };
}
function Ji(e) {
  let t, n, o, i, r, s, f = (
    /*$store*/
    e[13]
  ), a = [];
  for (let u = 0; u < f.length; u += 1)
    a[u] = Gt(Ut(e, f, u));
  const c = (u) => G(a[u], 1, 1, () => {
    a[u] = null;
  });
  let m = (
    /*drawingEl*/
    e[4] && Vt(e)
  );
  return {
    c() {
      t = I("svg"), n = I("g");
      for (let u = 0; u < a.length; u += 1)
        a[u].c();
      o = I("g"), m && m.c(), l(o, "class", "drawing"), l(t, "class", "a9s-annotationlayer"), Et(
        t,
        "drawing",
        /*tool*/
        e[12]
      );
    },
    m(u, h) {
      O(u, t, h), ee(t, n);
      for (let d = 0; d < a.length; d += 1)
        a[d] && a[d].m(n, null);
      ee(t, o), m && m.m(o, null), e[25](o), e[26](t), i = !0, r || (s = [
        j(t, "pointerup", function() {
          z(
            /*onPointerUp*/
            e[8]
          ) && e[8].apply(this, arguments);
        }),
        j(t, "pointerdown", function() {
          z(
            /*onPointerDown*/
            e[9]
          ) && e[9].apply(this, arguments);
        })
      ], r = !0);
    },
    p(u, h) {
      if (e = u, h[0] & /*$store, style, isEditable*/
      8322) {
        f = /*$store*/
        e[13];
        let d;
        for (d = 0; d < f.length; d += 1) {
          const p = Ut(e, f, d);
          a[d] ? (a[d].p(p, h), H(a[d], 1)) : (a[d] = Gt(p), a[d].c(), H(a[d], 1), a[d].m(n, null));
        }
        for (ce(), d = f.length; d < a.length; d += 1)
          c(d);
        ue();
      }
      /*drawingEl*/
      e[4] ? m ? (m.p(e, h), h[0] & /*drawingEl*/
      16 && H(m, 1)) : (m = Vt(e), m.c(), H(m, 1), m.m(o, null)) : m && (ce(), G(m, 1, 1, () => {
        m = null;
      }), ue()), (!i || h[0] & /*tool*/
      4096) && Et(
        t,
        "drawing",
        /*tool*/
        e[12]
      );
    },
    i(u) {
      if (!i) {
        for (let h = 0; h < f.length; h += 1)
          H(a[h]);
        H(m), i = !0;
      }
    },
    o(u) {
      a = a.filter(Boolean);
      for (let h = 0; h < a.length; h += 1)
        G(a[h]);
      G(m), i = !1;
    },
    d(u) {
      u && k(t), mt(a, u), m && m.d(), e[25](null), e[26](null), r = !1, ae(s);
    }
  };
}
function Qi(e, t, n) {
  let o, i, r, s, f, a, c, m, u, h, d = V, p = () => (d(), d = Qt(w, (N) => n(14, h = N)), w);
  e.$$.on_destroy.push(() => d());
  let { drawingEnabled: A } = t, { image: E } = t, { preferredDrawingMode: _ } = t, { state: g } = t, { style: y = void 0 } = t, { toolName: M = dt().length > 0 ? dt()[0] : void 0 } = t, { user: L } = t, X, R, w;
  ge(() => p(n(5, w = li(E, R))));
  const { selection: b, store: S } = g;
  bt(e, b, (N) => n(24, m = N)), bt(e, S, (N) => n(13, u = N));
  let v = null, B = null;
  const D = (N) => {
    S.unobserve(v);
    const $ = N.filter(({ editable: W }) => W).map(({ id: W }) => W);
    $.length > 0 ? (n(6, B = $.map((W) => S.getAnnotation(W))), v = (W) => {
      const { updated: he } = W.changes;
      n(6, B = he.map((fe) => fe.newValue));
    }, S.observe(v, { annotations: $ })) : n(6, B = null);
  }, P = (N) => {
    const $ = rn(), W = {
      id: $,
      bodies: [],
      target: {
        annotation: $,
        selector: N.detail,
        creator: L,
        created: /* @__PURE__ */ new Date()
      }
    };
    S.addAnnotation(W), b.setSelected(W.id);
  }, C = (N) => ($) => {
    var ne;
    const { target: W } = N, he = 10 * 60 * 1e3, fe = ((ne = W.creator) == null ? void 0 : ne.id) !== L.id || !W.created || (/* @__PURE__ */ new Date()).getTime() - W.created.getTime() > he;
    S.updateTarget({
      ...W,
      selector: $.detail,
      created: fe ? W.created : /* @__PURE__ */ new Date(),
      updated: fe ? /* @__PURE__ */ new Date() : null,
      updatedBy: fe ? L : null
    });
  };
  function be(N) {
    Ye[N ? "unshift" : "push"](() => {
      X = N, n(4, X);
    });
  }
  function Oe(N) {
    Ye[N ? "unshift" : "push"](() => {
      R = N, n(3, R);
    });
  }
  return e.$$set = (N) => {
    "drawingEnabled" in N && n(0, A = N.drawingEnabled), "image" in N && n(19, E = N.image), "preferredDrawingMode" in N && n(20, _ = N.preferredDrawingMode), "state" in N && n(21, g = N.state), "style" in N && n(1, y = N.style), "toolName" in N && n(2, M = N.toolName), "user" in N && n(22, L = N.user);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*toolName*/
    4 && n(12, { tool: o, opts: i } = cn(M), o, (n(23, i), n(2, M))), e.$$.dirty[0] & /*opts, preferredDrawingMode*/
    9437184 && n(11, r = (i == null ? void 0 : i.drawingMode) || _), e.$$.dirty[0] & /*svgEl*/
    8 && n(10, s = Ui(R)), e.$$.dirty[0] & /*svgEl*/
    8 && n(9, { onPointerDown: f, onPointerUp: a } = Fi(R, S), f, (n(8, a), n(3, R))), e.$$.dirty[0] & /*$selection*/
    16777216 && n(7, c = (N) => m.selected.find(($) => $.id === N.id && $.editable)), e.$$.dirty[0] & /*$selection*/
    16777216 && D(m.selected);
  }, [
    A,
    y,
    M,
    R,
    X,
    w,
    B,
    c,
    a,
    f,
    s,
    r,
    o,
    u,
    h,
    b,
    S,
    P,
    C,
    E,
    _,
    g,
    L,
    i,
    m,
    be,
    Oe
  ];
}
class xi extends Q {
  constructor(t) {
    super(), J(
      this,
      t,
      Qi,
      Ji,
      q,
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
function $i(e, t, n, o, i) {
  un(e, t, n || 0, o || e.length - 1, i || er);
}
function un(e, t, n, o, i) {
  for (; o > n; ) {
    if (o - n > 600) {
      var r = o - n + 1, s = t - n + 1, f = Math.log(r), a = 0.5 * Math.exp(2 * f / 3), c = 0.5 * Math.sqrt(f * a * (r - a) / r) * (s - r / 2 < 0 ? -1 : 1), m = Math.max(n, Math.floor(t - s * a / r + c)), u = Math.min(o, Math.floor(t + (r - s) * a / r + c));
      un(e, t, m, u, i);
    }
    var h = e[t], d = n, p = o;
    for (ve(e, n, t), i(e[o], h) > 0 && ve(e, n, o); d < p; ) {
      for (ve(e, d, p), d++, p--; i(e[d], h) < 0; )
        d++;
      for (; i(e[p], h) > 0; )
        p--;
    }
    i(e[n], h) === 0 ? ve(e, n, p) : (p++, ve(e, p, o)), p <= t && (n = p + 1), t <= p && (o = p - 1);
  }
}
function ve(e, t, n) {
  var o = e[t];
  e[t] = e[n], e[n] = o;
}
function er(e, t) {
  return e < t ? -1 : e > t ? 1 : 0;
}
class tr {
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
        const f = n.children[s], a = n.leaf ? i(f) : f;
        Ze(t, a) && (n.leaf ? o.push(f) : lt(t, a) ? this._all(f, o) : r.push(f));
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
    let f, a, c;
    for (; o || r.length; ) {
      if (o || (o = r.pop(), a = r[r.length - 1], f = s.pop(), c = !0), o.leaf) {
        const m = nr(t, o.children, n);
        if (m !== -1)
          return o.children.splice(m, 1), r.push(o), this._condense(r), this;
      }
      !c && !o.leaf && lt(o, i) ? (r.push(o), s.push(f), f = 0, a = o, o = o.children[0]) : a ? (f++, o = a.children[f], c = !1) : o = null;
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
    let s = this._maxEntries, f;
    if (r <= s)
      return f = Le(t.slice(n, o + 1)), Me(f, this.toBBox), f;
    i || (i = Math.ceil(Math.log(r) / Math.log(s)), s = Math.ceil(r / Math.pow(s, i - 1))), f = Le([]), f.leaf = !1, f.height = i;
    const a = Math.ceil(r / s), c = a * Math.ceil(Math.sqrt(s));
    Kt(t, n, o, c, this.compareMinX);
    for (let m = n; m <= o; m += c) {
      const u = Math.min(m + c - 1, o);
      Kt(t, m, u, a, this.compareMinY);
      for (let h = m; h <= u; h += a) {
        const d = Math.min(h + a - 1, u);
        f.children.push(this._build(t, h, d, i - 1));
      }
    }
    return Me(f, this.toBBox), f;
  }
  _chooseSubtree(t, n, o, i) {
    for (; i.push(n), !(n.leaf || i.length - 1 === o); ) {
      let r = 1 / 0, s = 1 / 0, f;
      for (let a = 0; a < n.children.length; a++) {
        const c = n.children[a], m = st(c), u = rr(t, c) - m;
        u < s ? (s = u, r = m < r ? m : r, f = c) : u === s && m < r && (r = m, f = c);
      }
      n = f || n.children[0];
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
    const s = this._chooseSplitIndex(o, r, i), f = Le(o.children.splice(s, o.children.length - s));
    f.height = o.height, f.leaf = o.leaf, Me(o, this.toBBox), Me(f, this.toBBox), n ? t[n - 1].children.push(f) : this._splitRoot(o, f);
  }
  _splitRoot(t, n) {
    this.data = Le([t, n]), this.data.height = t.height + 1, this.data.leaf = !1, Me(this.data, this.toBBox);
  }
  _chooseSplitIndex(t, n, o) {
    let i, r = 1 / 0, s = 1 / 0;
    for (let f = n; f <= o - n; f++) {
      const a = Pe(t, 0, f, this.toBBox), c = Pe(t, f, o, this.toBBox), m = sr(a, c), u = st(a) + st(c);
      m < r ? (r = m, i = f, s = u < s ? u : s) : m === r && u < s && (s = u, i = f);
    }
    return i || o - n;
  }
  // sorts node children by the best axis for split
  _chooseSplitAxis(t, n, o) {
    const i = t.leaf ? this.compareMinX : or, r = t.leaf ? this.compareMinY : ir, s = this._allDistMargin(t, n, o, i), f = this._allDistMargin(t, n, o, r);
    s < f && t.children.sort(i);
  }
  // total margin of all possible split distributions where each node is at least m full
  _allDistMargin(t, n, o, i) {
    t.children.sort(i);
    const r = this.toBBox, s = Pe(t, 0, n, r), f = Pe(t, o - n, o, r);
    let a = We(s) + We(f);
    for (let c = n; c < o - n; c++) {
      const m = t.children[c];
      Ie(s, t.leaf ? r(m) : m), a += We(s);
    }
    for (let c = o - n - 1; c >= n; c--) {
      const m = t.children[c];
      Ie(f, t.leaf ? r(m) : m), a += We(f);
    }
    return a;
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
function nr(e, t, n) {
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
function or(e, t) {
  return e.minX - t.minX;
}
function ir(e, t) {
  return e.minY - t.minY;
}
function st(e) {
  return (e.maxX - e.minX) * (e.maxY - e.minY);
}
function We(e) {
  return e.maxX - e.minX + (e.maxY - e.minY);
}
function rr(e, t) {
  return (Math.max(t.maxX, e.maxX) - Math.min(t.minX, e.minX)) * (Math.max(t.maxY, e.maxY) - Math.min(t.minY, e.minY));
}
function sr(e, t) {
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
    $i(e, s, t, n, i), r.push(t, s, s, n);
  }
}
const lr = () => {
  const e = new tr(), t = /* @__PURE__ */ new Map(), n = () => [...t.values()], o = () => {
    e.clear(), t.clear();
  }, i = (u) => {
    const { minX: h, minY: d, maxX: p, maxY: A } = u.selector.geometry.bounds, E = { minX: h, minY: d, maxX: p, maxY: A, target: u };
    e.insert(E), t.set(u.annotation, E);
  }, r = (u) => {
    const h = t.get(u.annotation);
    e.remove(h), t.delete(u.annotation);
  };
  return {
    all: n,
    clear: o,
    getAt: (u, h) => {
      const p = e.search({
        minX: u,
        minY: h,
        maxX: u,
        maxY: h
      }).map((A) => A.target).filter((A) => A.selector.type === F.RECTANGLE || Tn(A.selector, u, h));
      if (p.length > 0)
        return p.sort((A, E) => ct(A.selector) - ct(E.selector)), p[0];
    },
    getIntersecting: (u, h, d, p) => e.search({
      minX: u,
      minY: h,
      maxX: u + d,
      maxY: h + p
    }).map((A) => A.target),
    insert: i,
    remove: r,
    set: (u, h = !0) => {
      h && o();
      const d = u.map((p) => {
        const { minX: A, minY: E, maxX: _, maxY: g } = p.selector.geometry.bounds;
        return { minX: A, minY: E, maxX: _, maxY: g, target: p };
      });
      d.forEach((p) => t.set(p.target.annotation, p)), e.load(d);
    },
    size: () => e.all().length,
    update: (u, h) => {
      r(u), i(h);
    }
  };
}, ar = (e) => {
  const t = ao(), n = lr(), o = xn(t, e.pointerSelectAction), i = Qn(t), r = ho();
  return t.observe(({ changes: a }) => {
    n.set(a.created.map((c) => c.target), !1), a.deleted.forEach((c) => n.remove(c.target)), a.updated.forEach(({ oldValue: c, newValue: m }) => n.update(c.target, m.target));
  }), {
    store: {
      ...t,
      getAt: (a, c) => {
        const m = n.getAt(a, c);
        return m ? t.getAnnotation(m.annotation) : void 0;
      },
      getIntersecting: (a, c, m, u) => n.getIntersecting(a, c, m, u).map((h) => t.getAnnotation(h.annotation))
    },
    selection: o,
    hover: i,
    viewport: r
  };
}, fr = (e) => {
  const t = ar(e);
  return {
    ...t,
    store: fo(t.store)
  };
}, cr = (e) => {
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
      const s = Math.round(r * t.width / 10), f = Math.round(i * t.height / 10), a = n.getImageData(s, f, 1, 1).data, c = (0.299 * a[0] + 0.587 * a[1] + 0.114 * a[2]) / 255;
      o += c;
    }
  return o / 81;
}, ur = (e) => {
  const t = cr(e), n = t > 0.6 ? "dark" : "light";
  return console.log(`[Annotorious] Image brightness: ${t.toFixed(1)}. Setting ${n} theme.`), n;
}, Wt = (e, t, n) => t.setAttribute("data-theme", n === "auto" ? ur(e) : n), dr = (e, t) => ({
  ...e,
  drawingEnabled: e.drawingEnabled === void 0 ? t.drawingEnabled : e.drawingEnabled,
  drawingMode: e.drawingMode || t.drawingMode,
  pointerSelectAction: e.pointerSelectAction || t.pointerSelectAction,
  theme: e.theme || t.theme
}), Zt = navigator.userAgent.indexOf("Mac OS X") !== -1, mr = (e, t) => {
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
const yr = (e, t = {}) => {
  if (!e)
    throw "Missing argument: image";
  const n = typeof e == "string" ? document.getElementById(e) : e, o = dr(t, {
    drawingEnabled: !0,
    drawingMode: "drag",
    pointerSelectAction: sn.EDIT,
    theme: "light"
  }), i = fr(o), { selection: r, store: s } = i, f = mo(s), a = go(
    i,
    f,
    o.adapter,
    o.autoSave
  ), c = document.createElement("DIV");
  c.style.position = "relative", c.style.display = "inline-block", n.style.display = "block", n.parentNode.insertBefore(c, n), c.appendChild(n);
  const m = mr(f);
  let u = Ao();
  Wt(n, c, o.theme);
  const h = new xi({
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
  h.$on("click", (w) => {
    const { originalEvent: b, annotation: S } = w.detail;
    S ? r.clickSelect(S.id, b) : r.isEmpty() || r.clear();
  });
  const d = yo(i, f, o.adapter), p = () => {
    h.$destroy(), c.parentNode.insertBefore(n, c), c.parentNode.removeChild(c), m.destroy(), f.destroy();
  }, A = () => u, E = (w, b, S) => Ei(w, b, S), _ = (w, b) => Wo(w, b), g = (w) => {
    if (!cn(w))
      throw `No drawing tool named ${w}`;
    h.$set({ toolName: w });
  }, y = (w) => h.$set({ drawingEnabled: w }), M = (w) => {
    console.warn("Filter not implemented yet");
  }, L = (w) => h.$set({ style: w }), X = (w) => Wt(n, c, w), R = (w) => {
    u = w, h.$set({ user: w });
  };
  return {
    ...d,
    destroy: p,
    getUser: A,
    listDrawingTools: dt,
    on: a.on,
    off: a.off,
    registerDrawingTool: E,
    registerShapeEditor: _,
    setDrawingEnabled: y,
    setDrawingTool: g,
    setFilter: M,
    setStyle: L,
    setTheme: X,
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
  pr as IdentityTransform,
  Ko as LineEditor,
  Pn as LineUtil,
  Io as PolygonEditor,
  Xo as RectangleEditor,
  On as RectangleUtil,
  ii as RubberbandRectangle,
  xi as SVGAnnotationLayer,
  F as ShapeType,
  ti as ToolMount,
  hr as W3CImageFormat,
  Fi as addEventListeners,
  we as boundsFromPoints,
  ct as computeArea,
  yr as createImageAnnotator,
  ar as createImageAnnotatorState,
  Ui as createSVGTransform,
  fr as createSvelteImageAnnotatorState,
  ur as detectTheme,
  ot as distance,
  li as enableResponsive,
  dr as fillDefaults,
  Pt as getEditor,
  cn as getTool,
  mr as initKeyboardCommands,
  Tn as intersects,
  gr as isTouch,
  dt as listDrawingTools,
  In as parseFragmentSelector,
  zn as parseSVGSelector,
  Lo as parseW3CImageAnnotation,
  Wo as registerEditor,
  Re as registerShapeUtil,
  Ei as registerTool,
  cr as sampleBrightness,
  Dn as serializeFragmentSelector,
  jn as serializeSVGSelector,
  ko as serializeW3CImageAnnotation,
  Wt as setTheme
};
//# sourceMappingURL=annotorious.es.js.map
