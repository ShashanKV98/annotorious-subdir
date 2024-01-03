function F() {
}
function sn(e, t) {
  for (const n in t)
    e[n] = t[n];
  return e;
}
function jt(e) {
  return e();
}
function gt() {
  return /* @__PURE__ */ Object.create(null);
}
function se(e) {
  e.forEach(jt);
}
function z(e) {
  return typeof e == "function";
}
function W(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function ln(e) {
  return Object.keys(e).length === 0;
}
function Kt(e, ...t) {
  if (e == null)
    return F;
  const n = e.subscribe(...t);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function pt(e, t, n) {
  e.$$.on_destroy.push(Kt(t, n));
}
function an(e, t, n, o) {
  if (e) {
    const i = qt(e, t, n, o);
    return e[0](i);
  }
}
function qt(e, t, n, o) {
  return e[1] && o ? sn(n.ctx.slice(), e[1](o(t))) : n.ctx;
}
function cn(e, t, n, o) {
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
function fn(e, t, n, o, i, r) {
  if (i) {
    const s = qt(t, n, o, r);
    e.p(s, i);
  }
}
function un(e) {
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
function ct(e, t) {
  for (let n = 0; n < e.length; n += 1)
    e[n] && e[n].d(t);
}
function Y(e) {
  return document.createElementNS("http://www.w3.org/2000/svg", e);
}
function Wt(e) {
  return document.createTextNode(e);
}
function x() {
  return Wt(" ");
}
function ue() {
  return Wt("");
}
function j(e, t, n, o) {
  return e.addEventListener(t, n, o), () => e.removeEventListener(t, n, o);
}
function c(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function dn(e) {
  return Array.from(e.childNodes);
}
function yt(e, t, n) {
  e.classList[n ? "add" : "remove"](t);
}
function hn(e, t, { bubbles: n = !1, cancelable: o = !1 } = {}) {
  const i = document.createEvent("CustomEvent");
  return i.initCustomEvent(e, n, o, t), i;
}
let Be;
function De(e) {
  Be = e;
}
function Zt() {
  if (!Be)
    throw new Error("Function called outside component initialization");
  return Be;
}
function _e(e) {
  Zt().$$.on_mount.push(e);
}
function de() {
  const e = Zt();
  return (t, n, { cancelable: o = !1 } = {}) => {
    const i = e.$$.callbacks[t];
    if (i) {
      const r = hn(t, n, { cancelable: o });
      return i.slice().forEach((s) => {
        s.call(e, r);
      }), !r.defaultPrevented;
    }
    return !0;
  };
}
function oe(e, t) {
  const n = e.$$.callbacks[t.type];
  n && n.slice().forEach((o) => o.call(this, t));
}
const Me = [], Ye = [];
let Oe = [];
const _t = [], mn = /* @__PURE__ */ Promise.resolve();
let it = !1;
function gn() {
  it || (it = !0, mn.then(Jt));
}
function rt(e) {
  Oe.push(e);
}
const Je = /* @__PURE__ */ new Set();
let Ee = 0;
function Jt() {
  if (Ee !== 0)
    return;
  const e = Be;
  do {
    try {
      for (; Ee < Me.length; ) {
        const t = Me[Ee];
        Ee++, De(t), pn(t.$$);
      }
    } catch (t) {
      throw Me.length = 0, Ee = 0, t;
    }
    for (De(null), Me.length = 0, Ee = 0; Ye.length; )
      Ye.pop()();
    for (let t = 0; t < Oe.length; t += 1) {
      const n = Oe[t];
      Je.has(n) || (Je.add(n), n());
    }
    Oe.length = 0;
  } while (Me.length);
  for (; _t.length; )
    _t.pop()();
  it = !1, Je.clear(), De(e);
}
function pn(e) {
  if (e.fragment !== null) {
    e.update(), se(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(rt);
  }
}
function yn(e) {
  const t = [], n = [];
  Oe.forEach((o) => e.indexOf(o) === -1 ? t.push(o) : n.push(o)), n.forEach((o) => o()), Oe = t;
}
const ze = /* @__PURE__ */ new Set();
let ge;
function ce() {
  ge = {
    r: 0,
    c: [],
    p: ge
    // parent group
  };
}
function fe() {
  ge.r || se(ge.c), ge = ge.p;
}
function V(e, t) {
  e && e.i && (ze.delete(e), e.i(t));
}
function G(e, t, n, o) {
  if (e && e.o) {
    if (ze.has(e))
      return;
    ze.add(e), ge.c.push(() => {
      ze.delete(e), o && (n && e.d(1), o());
    }), e.o(t);
  } else
    o && o();
}
function le(e) {
  e && e.c();
}
function ie(e, t, n, o) {
  const { fragment: i, after_update: r } = e.$$;
  i && i.m(t, n), o || rt(() => {
    const s = e.$$.on_mount.map(jt).filter(z);
    e.$$.on_destroy ? e.$$.on_destroy.push(...s) : se(s), e.$$.on_mount = [];
  }), r.forEach(rt);
}
function re(e, t) {
  const n = e.$$;
  n.fragment !== null && (yn(n.after_update), se(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function _n(e, t) {
  e.$$.dirty[0] === -1 && (Me.push(e), gn(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function $(e, t, n, o, i, r, s, a = [-1]) {
  const l = Be;
  De(e);
  const u = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: r,
    update: F,
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
    dirty: a,
    skip_bound: !1,
    root: t.target || l.$$.root
  };
  s && s(u.root);
  let h = !1;
  if (u.ctx = n ? n(e, t.props || {}, (f, m, ...d) => {
    const g = d.length ? d[0] : m;
    return u.ctx && i(u.ctx[f], u.ctx[f] = g) && (!u.skip_bound && u.bound[f] && u.bound[f](g), h && _n(e, f)), m;
  }) : [], u.update(), h = !0, se(u.before_update), u.fragment = o ? o(u.ctx) : !1, t.target) {
    if (t.hydrate) {
      const f = dn(t.target);
      u.fragment && u.fragment.l(f), f.forEach(k);
    } else
      u.fragment && u.fragment.c();
    t.intro && V(e.$$.fragment), ie(e, t.target, t.anchor, t.customElement), Jt();
  }
  De(l);
}
class ee {
  $destroy() {
    re(this, 1), this.$destroy = F;
  }
  $on(t, n) {
    if (!z(n))
      return F;
    const o = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return o.push(n), () => {
      const i = o.indexOf(n);
      i !== -1 && o.splice(i, 1);
    };
  }
  $set(t) {
    this.$$set && !ln(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
var H = /* @__PURE__ */ ((e) => (e.ELLIPSE = "ELLIPSE", e.POLYGON = "POLYGON", e.RECTANGLE = "RECTANGLE", e.FREEHAND = "FREEHAND", e))(H || {});
const ft = {}, je = (e, t) => ft[e] = t, st = (e) => ft[e.type].area(e), wn = (e, t, n) => ft[e.type].intersects(e, t, n), ye = (e) => {
  let t = 1 / 0, n = 1 / 0, o = -1 / 0, i = -1 / 0;
  return e.forEach(([r, s]) => {
    t = Math.min(t, r), n = Math.min(n, s), o = Math.max(o, r), i = Math.max(i, s);
  }), { minX: t, minY: n, maxX: o, maxY: i };
}, bn = {
  area: (e) => Math.PI * e.geometry.rx * e.geometry.ry,
  intersects: (e, t, n) => {
    const { cx: o, cy: i, rx: r, ry: s } = e.geometry, a = 0, l = Math.cos(a), u = Math.sin(a), h = t - o, f = n - i, m = l * h + u * f, d = u * h - l * f;
    return m * m / (r * r) + d * d / (s * s) <= 1;
  }
};
je(H.ELLIPSE, bn);
const En = {
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
je(H.POLYGON, En);
const An = {
  area: (e) => e.geometry.w * e.geometry.h,
  intersects: (e, t, n) => t >= e.geometry.x && t <= e.geometry.x + e.geometry.w && n >= e.geometry.y && n <= e.geometry.y + e.geometry.h
};
je(H.RECTANGLE, An);
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
    for (let r = 0, s = o.length - 1; r < o.length; s = r++) {
      const a = o[r][0], l = o[r][1], u = o[s][0], h = o[s][1];
      l > n != h > n && t < (u - a) * (n - l) / (h - l) + a && (i = !i);
    }
    return i;
  }
};
je(H.FREEHAND, Sn);
const Tn = (e, t = !1) => {
  const n = typeof e == "string" ? e : e.value, o = /^(xywh)=(pixel|percent)?:?(.+?),(.+?),(.+?),(.+)*/g, i = [...n.matchAll(o)][0], [r, s, a, l, u, h, f] = i;
  if (s !== "xywh")
    throw new Error("Unsupported MediaFragment: " + n);
  if (a && a !== "pixel")
    throw new Error(`Unsupported MediaFragment unit: ${a}`);
  const [m, d, g, E] = [l, u, h, f].map(parseFloat);
  return {
    type: H.RECTANGLE,
    geometry: {
      x: m,
      y: d,
      w: g,
      h: E,
      bounds: {
        minX: m,
        minY: t ? d - E : d,
        maxX: m + g,
        maxY: t ? d : d + E
      }
    }
  };
}, Mn = (e) => {
  const { x: t, y: n, w: o, h: i } = e;
  return {
    type: "FragmentSelector",
    conformsTo: "http://www.w3.org/TR/media-frags/",
    value: `xywh=pixel:${t},${n},${o},${i}`
  };
}, Qt = "http://www.w3.org/2000/svg", wt = (e) => {
  const t = (o) => {
    Array.from(o.attributes).forEach((i) => {
      i.name.startsWith("on") && o.removeAttribute(i.name);
    });
  }, n = e.getElementsByTagName("script");
  return Array.from(n).reverse().forEach((o) => o.parentNode.removeChild(o)), Array.from(e.querySelectorAll("*")).forEach(t), e;
}, Ln = (e) => {
  const o = new XMLSerializer().serializeToString(e.documentElement).replace("<svg>", `<svg xmlns="${Qt}">`);
  return new DOMParser().parseFromString(o, "image/svg+xml").documentElement;
};
function On(e, t) {
  var n = e[0] - t[0], o = e[1] - t[1];
  return n * n + o * o;
}
function kn(e, t, n) {
  var o = t[0], i = t[1], r = n[0] - o, s = n[1] - i;
  if (r !== 0 || s !== 0) {
    var a = ((e[0] - o) * r + (e[1] - i) * s) / (r * r + s * s);
    a > 1 ? (o = n[0], i = n[1]) : a > 0 && (o += r * a, i += s * a);
  }
  return r = e[0] - o, s = e[1] - i, r * r + s * s;
}
function vn(e, t) {
  for (var n = e[0], o = [n], i, r = 1, s = e.length; r < s; r++)
    i = e[r], On(i, n) > t && (o.push(i), n = i);
  return n !== i && o.push(i), o;
}
function lt(e, t, n, o, i) {
  for (var r = o, s, a = t + 1; a < n; a++) {
    var l = kn(e[a], e[t], e[n]);
    l > r && (s = a, r = l);
  }
  r > o && (s - t > 1 && lt(e, t, s, o, i), i.push(e[s]), n - s > 1 && lt(e, s, n, o, i));
}
function Pn(e, t) {
  var n = e.length - 1, o = [e[0]];
  return lt(e, 0, n, t, o), o.push(e[n]), o;
}
function In(e, t, n) {
  if (e.length <= 2)
    return e;
  var o = t !== void 0 ? t * t : 1;
  return e = n ? e : vn(e, o), e = Pn(e, o), e;
}
const ut = {
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
function Dn(e) {
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
function Re(e, t, n = !1) {
  return Dn(
    n ? In(e, 1) : e
  );
}
const Bn = (e) => {
  const n = new DOMParser().parseFromString(e, "image/svg+xml"), o = n.lookupPrefix(Qt), i = n.lookupNamespaceURI(null);
  return o || i ? wt(n).firstChild : wt(Ln(n)).firstChild;
}, Yn = (e) => {
  const [t, n, o] = e.match(/(<path d=["|'])([^("|')]*)/) || [];
  if (!o)
    return;
  const i = /([MQZT])([^MQZT]*)/g, s = Array.from(o.matchAll(i)).map((a) => (a[1], a[2].trim().split(/\s+/).map(parseFloat)));
  return {
    type: H.FREEHAND,
    geometry: {
      points: s,
      bounds: ye(s)
    }
  };
}, Rn = (e) => {
  const [t, n, o] = e.match(/(<polygon points=["|'])([^("|')]*)/) || [];
  if (!o)
    return;
  const i = o.split(" ").map((r) => r.split(",").map(parseFloat));
  return {
    type: H.POLYGON,
    geometry: {
      points: i,
      bounds: ye(i)
    }
  };
}, Xn = (e) => {
  const t = Bn(e), n = parseFloat(t.getAttribute("cx")), o = parseFloat(t.getAttribute("cy")), i = parseFloat(t.getAttribute("rx")), r = parseFloat(t.getAttribute("ry")), s = {
    minX: n - i,
    minY: o - r,
    maxX: n + i,
    maxY: o + r
  };
  return {
    type: H.ELLIPSE,
    geometry: {
      cx: n,
      cy: o,
      rx: i,
      ry: r,
      bounds: s
    }
  };
}, Cn = (e) => {
  const t = typeof e == "string" ? e : e.value;
  if (t.includes("<polygon points="))
    return Rn(t);
  if (t.includes("<path d="))
    return Yn(t);
  if (t.includes("<ellipse "))
    return Xn(t);
}, Nn = (e) => {
  let t;
  if (e.type === H.POLYGON) {
    const n = e.geometry, { points: o } = n;
    t = `<svg><polygon points="${o.map((i) => i.join(",")).join(" ")}" /></svg>`;
  } else if (e.type === H.FREEHAND) {
    const n = e.geometry;
    t = `<svg><path d="${Re(n.points)}"/></svg>`;
  } else if (e.type === H.ELLIPSE) {
    const n = e.geometry;
    t = `<svg><ellipse cx="${n.cx}" cy="${n.cy}" rx="${n.rx}" ry="${n.ry}" /></svg>`;
  }
  if (t)
    return { type: "SvgSelector", value: t };
  throw `Unsupported shape type: ${e.type}`;
};
let Ge;
const Un = new Uint8Array(16);
function Vn() {
  if (!Ge && (Ge = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Ge))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Ge(Un);
}
const J = [];
for (let e = 0; e < 256; ++e)
  J.push((e + 256).toString(16).slice(1));
function Gn(e, t = 0) {
  return J[e[t + 0]] + J[e[t + 1]] + J[e[t + 2]] + J[e[t + 3]] + "-" + J[e[t + 4]] + J[e[t + 5]] + "-" + J[e[t + 6]] + J[e[t + 7]] + "-" + J[e[t + 8]] + J[e[t + 9]] + "-" + J[e[t + 10]] + J[e[t + 11]] + J[e[t + 12]] + J[e[t + 13]] + J[e[t + 14]] + J[e[t + 15]];
}
const Hn = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), bt = {
  randomUUID: Hn
};
function xt(e, t, n) {
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
  return Gn(o);
}
var Et = Object.prototype.hasOwnProperty;
function pe(e, t) {
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
        for (; o-- && pe(e[o], t[o]); )
          ;
      return o === -1;
    }
    if (!n || typeof e == "object") {
      o = 0;
      for (n in e)
        if (Et.call(e, n) && ++o && !Et.call(t, n) || !(n in t) || !pe(e[n], t[n]))
          return !1;
      return Object.keys(t).length === o;
    }
  }
  return e !== e && t !== t;
}
function Qe() {
}
function Fn(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
const Ae = [];
function dt(e, t = Qe) {
  let n;
  const o = /* @__PURE__ */ new Set();
  function i(a) {
    if (Fn(e, a) && (e = a, n)) {
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
  function s(a, l = Qe) {
    const u = [a, l];
    return o.add(u), o.size === 1 && (n = t(i) || Qe), a(e), () => {
      o.delete(u), o.size === 0 && n && (n(), n = null);
    };
  }
  return { set: i, update: r, subscribe: s };
}
const zn = (e) => {
  const { subscribe: t, set: n } = dt(null);
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
var $t = /* @__PURE__ */ ((e) => (e.EDIT = "EDIT", e.SELECT = "SELECT", e.NONE = "NONE", e))($t || {});
const xe = { selected: [] }, jn = (e, t = "EDIT") => {
  const { subscribe: n, set: o } = dt(xe);
  let i = xe;
  n((f) => i = f);
  const r = () => o(xe), s = () => {
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
      const g = Kn(d, t);
      o(g === "EDIT" ? { selected: [{ id: f, editable: !0 }], pointerEvent: m } : g === "SELECT" ? { selected: [{ id: f }], pointerEvent: m } : { selected: [], pointerEvent: m });
    } else
      console.warn("Invalid selection: " + f);
  }, u = (f, m = !0) => {
    const d = Array.isArray(f) ? f : [f], g = d.map((E) => e.getAnnotation(E)).filter((E) => E);
    o({ selected: g.map(({ id: E }) => ({ id: E, editable: m })) }), g.length !== d.length && console.warn("Invalid selection", f);
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
}, Kn = (e, t) => typeof t == "function" ? t(e) || "EDIT" : t || "EDIT", qn = [];
for (let e = 0; e < 256; ++e)
  qn.push((e + 256).toString(16).slice(1));
typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const Wn = (e, t) => {
  const n = new Set(e.bodies.map((o) => o.id));
  return t.bodies.filter((o) => !n.has(o.id));
}, Zn = (e, t) => {
  const n = new Set(t.bodies.map((o) => o.id));
  return e.bodies.filter((o) => !n.has(o.id));
}, Jn = (e, t) => t.bodies.map((n) => {
  const o = e.bodies.find((i) => i.id === n.id);
  return { newBody: n, oldBody: o && !pe(o, n) ? o : void 0 };
}).filter(({ oldBody: n }) => n), Qn = (e, t) => !pe(e.target, t.target), en = (e, t) => {
  const n = Wn(e, t), o = Zn(e, t), i = Jn(e, t);
  return {
    oldValue: e,
    newValue: t,
    bodiesCreated: n.length > 0 ? n : void 0,
    bodiesDeleted: o.length > 0 ? o : void 0,
    bodiesUpdated: i.length > 0 ? i : void 0,
    targetUpdated: Qn(e, t) ? { oldTarget: e.target, newTarget: t.target } : void 0
  };
};
var K = /* @__PURE__ */ ((e) => (e.LOCAL = "LOCAL", e.REMOTE = "REMOTE", e))(K || {});
const xn = (e, t) => {
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
}, $n = (e, t) => {
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
        const g = t.updated.find((E) => E.oldValue.id === d.id).newValue;
        return en(m, g);
      } else
        return f;
    }),
    ...(t.updated || []).filter(({ oldValue: f }) => !a.has(f.id))
  ];
  return { created: l, deleted: u, updated: h };
}, eo = (e) => e.id !== void 0, to = () => {
  const e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map(), n = [], o = (y, _ = {}) => n.push({ onChange: y, options: _ }), i = (y) => {
    const _ = n.findIndex((S) => S.onChange == y);
    _ > -1 && n.splice(_, 1);
  }, r = (y, _) => {
    const S = {
      origin: y,
      changes: {
        created: _.created || [],
        updated: _.updated || [],
        deleted: _.deleted || []
      },
      state: [...e.values()]
    };
    n.forEach((O) => {
      xn(O, S) && O.onChange(S);
    });
  }, s = (y, _ = K.LOCAL) => {
    if (e.get(y.id))
      throw Error(`Cannot add annotation ${y.id} - exists already`);
    e.set(y.id, y), y.bodies.forEach((S) => t.set(S.id, y.id)), r(_, { created: [y] });
  }, a = (y, _) => {
    const S = typeof y == "string" ? _ : y, O = typeof y == "string" ? y : y.id, I = e.get(O);
    if (I) {
      const N = en(I, S);
      return O === S.id ? e.set(O, S) : (e.delete(O), e.set(S.id, S)), I.bodies.forEach((U) => t.delete(U.id)), S.bodies.forEach((U) => t.set(U.id, S.id)), N;
    } else
      console.warn(`Cannot update annotation ${O} - does not exist`);
  }, l = (y, _ = K.LOCAL, S = K.LOCAL) => {
    const O = eo(_) ? S : _, I = a(y, _);
    I && r(O, { updated: [I] });
  }, u = (y, _ = K.LOCAL) => {
    const S = y.reduce((O, I) => {
      const N = a(I);
      return N ? [...O, N] : O;
    }, []);
    S.length > 0 && r(_, { updated: S });
  }, h = (y, _ = K.LOCAL) => {
    const S = e.get(y.annotation);
    if (S) {
      const O = {
        ...S,
        bodies: [...S.bodies, y]
      };
      e.set(S.id, O), t.set(y.id, O.id), r(_, { updated: [{
        oldValue: S,
        newValue: O,
        bodiesCreated: [y]
      }] });
    } else
      console.warn(`Attempt to add body to missing annotation: ${y.annotation}`);
  }, f = () => [...e.values()], m = (y = K.LOCAL) => {
    const _ = [...e.values()];
    e.clear(), t.clear(), r(y, { deleted: _ });
  }, d = (y, _ = !0, S = K.LOCAL) => {
    if (_) {
      const O = [...e.values()];
      e.clear(), t.clear(), y.forEach((I) => {
        e.set(I.id, I), I.bodies.forEach((N) => t.set(N.id, I.id));
      }), r(S, { created: y, deleted: O });
    } else {
      const O = y.reduce((I, N) => {
        const U = e.get(N.id);
        return U ? [...I, U] : I;
      }, []);
      if (O.length > 0)
        throw Error(`Bulk insert would overwrite the following annotations: ${O.map((I) => I.id).join(", ")}`);
      y.forEach((I) => {
        e.set(I.id, I), I.bodies.forEach((N) => t.set(N.id, I.id));
      }), r(S, { created: y });
    }
  }, g = (y) => {
    const _ = typeof y == "string" ? y : y.id, S = e.get(_);
    if (S)
      return e.delete(_), S.bodies.forEach((O) => t.delete(O.id)), S;
    console.warn(`Attempt to delete missing annotation: ${_}`);
  }, E = (y, _ = K.LOCAL) => {
    const S = g(y);
    S && r(_, { deleted: [S] });
  }, A = (y, _ = K.LOCAL) => {
    const S = y.reduce((O, I) => {
      const N = g(I);
      return N ? [...O, N] : O;
    }, []);
    S.length > 0 && r(_, { deleted: S });
  }, b = (y, _ = K.LOCAL) => {
    const S = e.get(y.annotation);
    if (S) {
      const O = S.bodies.find((I) => I.id === y.id);
      if (O) {
        t.delete(O.id);
        const I = {
          ...S,
          bodies: S.bodies.filter((N) => N.id !== y.id)
        };
        e.set(S.id, I), r(_, { updated: [{
          oldValue: S,
          newValue: I,
          bodiesDeleted: [O]
        }] });
      } else
        console.warn(`Attempt to delete missing body ${y.id} from annotation ${y.annotation}`);
    } else
      console.warn(`Attempt to delete body from missing annotation ${y.annotation}`);
  }, p = (y) => {
    const _ = e.get(y);
    return _ ? { ..._ } : void 0;
  }, w = (y) => {
    const _ = t.get(y);
    if (_) {
      const S = p(_).bodies.find((O) => O.id === y);
      if (S)
        return S;
      console.error(`Store integrity error: body ${y} in index, but not in annotation`);
    } else
      console.warn(`Attempt to retrieve missing body: ${y}`);
  }, T = (y, _) => {
    if (y.annotation !== _.annotation)
      throw "Annotation integrity violation: annotation ID must be the same when updating bodies";
    const S = e.get(y.annotation);
    if (S) {
      const O = S.bodies.find((N) => N.id === y.id), I = {
        ...S,
        bodies: S.bodies.map((N) => N.id === O.id ? _ : N)
      };
      return e.set(S.id, I), O.id !== _.id && (t.delete(O.id), t.set(_.id, I.id)), {
        oldValue: S,
        newValue: I,
        bodiesUpdated: [{ oldBody: O, newBody: _ }]
      };
    } else
      console.warn(`Attempt to add body to missing annotation ${y.annotation}`);
  }, L = (y, _, S = K.LOCAL) => {
    const O = T(y, _);
    r(S, { updated: [O] });
  }, D = (y, _ = K.LOCAL) => {
    const S = y.map((O) => T({ id: O.id, annotation: O.annotation }, O));
    r(_, { updated: S });
  }, C = (y) => {
    const _ = e.get(y.annotation);
    if (_) {
      const S = {
        ..._,
        target: {
          ..._.target,
          ...y
        }
      };
      return e.set(_.id, S), {
        oldValue: _,
        newValue: S,
        targetUpdated: {
          oldTarget: _.target,
          newTarget: y
        }
      };
    } else
      console.warn(`Attempt to update target on missing annotation: ${y.annotation}`);
  };
  return {
    addAnnotation: s,
    addBody: h,
    all: f,
    bulkAddAnnotation: d,
    bulkDeleteAnnotation: A,
    bulkUpdateAnnotation: u,
    bulkUpdateBodies: D,
    bulkUpdateTargets: (y, _ = K.LOCAL) => {
      const S = y.map(C).filter((O) => O);
      S.length > 0 && r(_, { updated: S });
    },
    clear: m,
    deleteAnnotation: E,
    deleteBody: b,
    getAnnotation: p,
    getBody: w,
    observe: o,
    unobserve: i,
    updateAnnotation: l,
    updateBody: L,
    updateTarget: (y, _ = K.LOCAL) => {
      const S = C(y);
      S && r(_, { updated: [S] });
    }
  };
}, no = (e) => ({
  ...e,
  subscribe: (t) => {
    const n = (o) => t(o.state);
    return e.observe(n), t(e.all()), () => e.unobserve(n);
  }
});
let oo = () => ({
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
const io = 250, ro = (e) => {
  const t = oo(), n = [];
  let o = -1, i = !1, r = 0;
  const s = (d) => {
    if (!i) {
      const { changes: g } = d, E = performance.now();
      if (E - r > io)
        n.splice(o + 1), n.push(g), o = n.length - 1;
      else {
        const A = n.length - 1;
        n[A] = $n(n[A], g);
      }
      r = E;
    }
    i = !1;
  };
  e.observe(s, { origin: K.LOCAL });
  const a = (d) => (d == null ? void 0 : d.length) > 0 && e.bulkDeleteAnnotation(d), l = (d) => (d == null ? void 0 : d.length) > 0 && e.bulkAddAnnotation(d, !1), u = (d) => (d == null ? void 0 : d.length) > 0 && e.bulkUpdateAnnotation(d.map(({ oldValue: g }) => g)), h = (d) => (d == null ? void 0 : d.length) > 0 && e.bulkUpdateAnnotation(d.map(({ newValue: g }) => g)), f = (d) => (d == null ? void 0 : d.length) > 0 && e.bulkAddAnnotation(d, !1), m = (d) => (d == null ? void 0 : d.length) > 0 && e.bulkDeleteAnnotation(d);
  return {
    canRedo: () => n.length - 1 > o,
    canUndo: () => o > -1,
    destroy: () => e.unobserve(s),
    on: (d, g) => t.on(d, g),
    redo: () => {
      if (n.length - 1 > o) {
        i = !0;
        const { created: d, updated: g, deleted: E } = n[o + 1];
        l(d), h(g), m(E), t.emit("redo", n[o + 1]), o += 1;
      }
    },
    undo: () => {
      if (o > -1) {
        i = !0;
        const { created: d, updated: g, deleted: E } = n[o];
        a(d), u(g), f(E), t.emit("undo", n[o]), o -= 1;
      }
    }
  };
}, so = () => {
  const { subscribe: e, set: t } = dt([]);
  return {
    subscribe: e,
    set: t
  };
}, lo = (e, t, n, o) => {
  const { store: i, selection: r, hover: s, viewport: a } = e, l = /* @__PURE__ */ new Map();
  let u = [], h, f;
  const m = (b, p) => {
    l.has(b) ? l.get(b).push(p) : l.set(b, [p]);
  }, d = (b, p) => {
    const w = l.get(b);
    w && w.indexOf(p) > 0 && w.splice(w.indexOf(p), 1);
  }, g = (b, p, w) => {
    l.has(b) && setTimeout(() => {
      l.get(b).forEach((T) => {
        if (n) {
          const L = Array.isArray(p) ? p.map((C) => n.serialize(C)) : n.serialize(p), D = w ? w instanceof PointerEvent ? w : n.serialize(w) : void 0;
          T(L, D);
        } else
          T(p, w);
      });
    }, 1);
  }, E = () => {
    const { selected: b } = r, p = b.map(({ id: w }) => i.getAnnotation(w));
    p.forEach((w) => {
      const T = u.find((L) => L.id === w.id);
      (!T || !pe(T, w)) && g("updateAnnotation", w, T);
    }), u = u.map((w) => p.find(({ id: L }) => L === w.id) || w);
  };
  r.subscribe(({ selected: b }) => {
    if (!(u.length === 0 && b.length === 0)) {
      if (u.length === 0 && b.length > 0)
        u = b.map(({ id: p }) => i.getAnnotation(p));
      else if (u.length > 0 && b.length === 0)
        u.forEach((p) => {
          const w = i.getAnnotation(p.id);
          w && !pe(w, p) && g("updateAnnotation", w, p);
        }), u = [];
      else {
        const p = new Set(u.map((T) => T.id)), w = new Set(b.map(({ id: T }) => T));
        u.filter((T) => !w.has(T.id)).forEach((T) => {
          const L = i.getAnnotation(T.id);
          L && !pe(L, T) && g("updateAnnotation", L, T);
        }), u = [
          // Remove annotations that were deselected
          ...u.filter((T) => w.has(T.id)),
          // Add editable annotations that were selected
          ...b.filter(({ id: T }) => !p.has(T)).map(({ id: T }) => i.getAnnotation(T))
        ];
      }
      g("selectionChanged", u);
    }
  }), s.subscribe((b) => {
    !h && b ? g("mouseEnterAnnotation", i.getAnnotation(b)) : h && !b ? g("mouseLeaveAnnotation", i.getAnnotation(h)) : h && b && (g("mouseLeaveAnnotation", i.getAnnotation(h)), g("mouseEnterAnnotation", i.getAnnotation(b))), h = b;
  }), a == null || a.subscribe((b) => g("viewportIntersect", b.map(i.getAnnotation))), i.observe((b) => {
    o && (f && clearTimeout(f), f = setTimeout(E, 1e3));
    const { created: p, deleted: w } = b.changes;
    p.forEach((T) => g("createAnnotation", T)), w.forEach((T) => g("deleteAnnotation", T)), b.changes.updated.filter((T) => [
      ...T.bodiesCreated || [],
      ...T.bodiesDeleted || [],
      ...T.bodiesUpdated || []
    ].length > 0).forEach(({ oldValue: T, newValue: L }) => {
      const D = u.find((C) => C.id === T.id) || T;
      u = u.map((C) => C.id === T.id ? L : C), g("updateAnnotation", L, D);
    });
  }, { origin: K.LOCAL }), i.observe((b) => {
    if (u) {
      const p = new Set(u.map((T) => T.id)), w = b.changes.updated.filter(({ newValue: T }) => p.has(T.id)).map(({ newValue: T }) => T);
      w.length > 0 && (u = u.map((T) => w.find((D) => D.id === T.id) || T));
    }
  }, { origin: K.REMOTE });
  const A = (b) => (p) => {
    const { created: w, deleted: T, updated: L } = p;
    w.forEach((D) => g("createAnnotation", D)), T.forEach((D) => g("deleteAnnotation", D)), b ? L.forEach((D) => g("updateAnnotation", D.oldValue, D.newValue)) : L.forEach((D) => g("updateAnnotation", D.newValue, D.oldValue));
  };
  return t.on("undo", A(!0)), t.on("redo", A(!1)), { on: m, off: d, emit: g };
}, ao = (e) => (t) => t.reduce((n, o) => {
  const { parsed: i, error: r } = e.parse(o);
  return r ? {
    parsed: n.parsed,
    failed: [...n.failed, o]
  } : {
    parsed: [...n.parsed, i],
    failed: n.failed
  };
}, { parsed: [], failed: [] }), co = (e, t, n) => {
  const { store: o, selection: i } = e, r = (A) => {
    if (n) {
      const { parsed: b, error: p } = n.parse(A);
      b ? o.addAnnotation(b, K.REMOTE) : console.error(p);
    } else
      o.addAnnotation(A, K.REMOTE);
  }, s = () => i.clear(), a = () => o.clear(), l = (A) => {
    const b = o.getAnnotation(A);
    return n && b ? n.serialize(b) : b;
  }, u = () => n ? o.all().map(n.serialize) : o.all(), h = () => {
    var A;
    const b = (((A = i.selected) == null ? void 0 : A.map((p) => p.id)) || []).map((p) => o.getAnnotation(p));
    return n ? b.map(n.serialize) : b;
  }, f = (A) => fetch(A).then((b) => b.json()).then((b) => (d(b), b)), m = (A) => {
    if (typeof A == "string") {
      const b = o.getAnnotation(A);
      return o.deleteAnnotation(A), n ? n.serialize(b) : b;
    } else {
      const b = n ? n.parse(A).parsed : A;
      return o.deleteAnnotation(b), A;
    }
  }, d = (A) => {
    if (n) {
      const { parsed: b, failed: p } = ao(n)(A);
      p.length > 0 && console.warn(`Discarded ${p.length} invalid annotations`, p), o.bulkAddAnnotation(b, !0, K.REMOTE);
    } else
      o.bulkAddAnnotation(A, !0, K.REMOTE);
  }, g = (A) => {
    A ? i.setSelected(A) : i.clear();
  }, E = (A) => {
    if (n) {
      const b = n.parse(A).parsed, p = n.serialize(o.getAnnotation(b.id));
      return o.updateAnnotation(b), p;
    } else {
      const b = o.getAnnotation(A.id);
      return o.updateAnnotation(A), b;
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
    updateAnnotation: E
  };
};
let fo = (e) => crypto.getRandomValues(new Uint8Array(e)), uo = (e, t, n) => {
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
}, ho = (e, t = 21) => uo(e, t, fo), mo = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
const go = () => ({ isGuest: !0, id: ho("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_", 20)() }), po = (e) => {
  const t = JSON.stringify(e);
  let n = 0;
  for (let o = 0, i = t.length; o < i; o++) {
    let r = t.charCodeAt(o);
    n = (n << 5) - n + r, n |= 0;
  }
  return `${n}`;
}, tn = (e) => e ? typeof e == "object" ? { ...e } : e : void 0, yo = (e, t) => (Array.isArray(e) ? e : [e]).map((n) => {
  const { id: o, type: i, purpose: r, value: s, created: a, creator: l, ...u } = n;
  return {
    id: o || `temp-${po(n)}`,
    annotation: t,
    type: i,
    purpose: r,
    value: s,
    created: a ? new Date(a) : void 0,
    creator: tn(l),
    ...u
  };
}), _o = (e) => e.map((t) => {
  var n;
  const o = { ...t };
  return delete o.annotation, (n = o.id) != null && n.startsWith("temp-") && delete o.id, o;
});
mo();
const Ji = (e, t = !1) => ({ parse: (i) => wo(i, t), serialize: (i) => bo(i, e) }), wo = (e, t = !1) => {
  const n = e.id || xt(), {
    creator: o,
    created: i,
    updatedBy: r,
    updated: s,
    body: a,
    ...l
  } = e, u = yo(a, n), h = Array.isArray(e.target) ? e.target[0] : e.target, f = Array.isArray(h.selector) ? h.selector[0] : h.selector, m = f.type === "FragmentSelector" ? Tn(f, t) : f.type === "SvgSelector" ? Cn(f) : void 0;
  return m ? {
    parsed: {
      ...l,
      id: n,
      bodies: u,
      target: {
        created: i ? new Date(i) : void 0,
        creator: tn(o),
        ...l.target,
        annotation: n,
        selector: m
      }
    }
  } : {
    error: Error(`Unknown selector type: ${f.type}`)
  };
}, bo = (e, t) => {
  const {
    selector: n,
    creator: o,
    created: i,
    updated: r,
    updatedBy: s,
    ...a
  } = e.target, l = n.type == H.RECTANGLE ? Mn(n.geometry) : Nn(n);
  return {
    ...e,
    "@context": "http://www.w3.org/ns/anno.jsonld",
    id: e.id,
    type: "Annotation",
    body: _o(e.bodies),
    creator: o,
    created: i == null ? void 0 : i.toISOString(),
    target: {
      ...a,
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
  let t, n, o, i, r;
  return {
    c() {
      t = Y("rect"), c(t, "class", "a9s-corner-handle"), c(t, "x", n = /*point*/
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
      v(s, t, a), i || (r = j(t, "pointerdown", function() {
        z(
          /*grab*/
          e[10](M(
            /*idx*/
            e[13]
          ))
        ) && e[10](M(
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
      s && k(t), i = !1, r();
    }
  };
}
function Eo(e) {
  let t, n, o, i, r, s, a, l, u, h, f = (
    /*geom*/
    e[4].points
  ), m = [];
  for (let d = 0; d < f.length; d += 1)
    m[d] = St(At(e, f, d));
  return {
    c() {
      t = Y("polygon"), i = x(), r = Y("polygon"), a = x();
      for (let d = 0; d < m.length; d += 1)
        m[d].c();
      l = ue(), c(t, "class", "a9s-outer"), c(t, "style", n = /*computedStyle*/
      e[1] ? "display:none;" : void 0), c(t, "points", o = /*geom*/
      e[4].points.map(Tt).join(" ")), c(r, "class", "a9s-inner a9s-shape-handle"), c(
        r,
        "style",
        /*computedStyle*/
        e[1]
      ), c(r, "points", s = /*geom*/
      e[4].points.map(Mt).join(" "));
    },
    m(d, g) {
      v(d, t, g), v(d, i, g), v(d, r, g), v(d, a, g);
      for (let E = 0; E < m.length; E += 1)
        m[E] && m[E].m(d, g);
      v(d, l, g), u || (h = [
        j(t, "pointerdown", function() {
          z(
            /*grab*/
            e[10](M.SHAPE)
          ) && e[10](M.SHAPE).apply(this, arguments);
        }),
        j(r, "pointerdown", function() {
          z(
            /*grab*/
            e[10](M.SHAPE)
          ) && e[10](M.SHAPE).apply(this, arguments);
        })
      ], u = !0);
    },
    p(d, g) {
      if (e = d, g & /*computedStyle*/
      2 && n !== (n = /*computedStyle*/
      e[1] ? "display:none;" : void 0) && c(t, "style", n), g & /*geom*/
      16 && o !== (o = /*geom*/
      e[4].points.map(Tt).join(" ")) && c(t, "points", o), g & /*computedStyle*/
      2 && c(
        r,
        "style",
        /*computedStyle*/
        e[1]
      ), g & /*geom*/
      16 && s !== (s = /*geom*/
      e[4].points.map(Mt).join(" ")) && c(r, "points", s), g & /*geom, handleSize, grab, Handle*/
      1048) {
        f = /*geom*/
        e[4].points;
        let E;
        for (E = 0; E < f.length; E += 1) {
          const A = At(e, f, E);
          m[E] ? m[E].p(A, g) : (m[E] = St(A), m[E].c(), m[E].m(l.parentNode, l));
        }
        for (; E < m.length; E += 1)
          m[E].d(1);
        m.length = f.length;
      }
    },
    d(d) {
      d && k(t), d && k(i), d && k(r), d && k(a), ct(m, d), d && k(l), u = !1, se(h);
    }
  };
}
function Ao(e) {
  let t, n;
  return t = new Ke({
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
          Eo,
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
      const r = {};
      i & /*shape*/
      1 && (r.shape = /*shape*/
      o[0]), i & /*transform*/
      4 && (r.transform = /*transform*/
      o[2]), i & /*$$scope, geom, handleSize, grab, computedStyle*/
      17434 && (r.$$scope = { dirty: i, ctx: o }), t.$set(r);
    },
    i(o) {
      n || (V(t.$$.fragment, o), n = !0);
    },
    o(o) {
      G(t.$$.fragment, o), n = !1;
    },
    d(o) {
      re(t, o);
    }
  };
}
const Tt = (e) => e.join(","), Mt = (e) => e.join(",");
function So(e, t, n) {
  let o, i, { shape: r } = t, { computedStyle: s = void 0 } = t, { transform: a } = t, { viewportScale: l = 1 } = t;
  const u = (d, g, E) => {
    let A;
    g === M.SHAPE ? A = d.geometry.points.map(([p, w]) => [p + E[0], w + E[1]]) : A = d.geometry.points.map(([p, w], T) => g === M(T) ? [p + E[0], w + E[1]] : [p, w]);
    const b = ye(A);
    return { ...d, geometry: { points: A, bounds: b } };
  };
  function h(d) {
    oe.call(this, e, d);
  }
  function f(d) {
    oe.call(this, e, d);
  }
  function m(d) {
    oe.call(this, e, d);
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
class To extends ee {
  constructor(t) {
    super(), $(this, t, So, Ao, W, {
      shape: 0,
      computedStyle: 1,
      transform: 2,
      viewportScale: 6
    });
  }
}
function Mo(e) {
  let t, n, o, i, r, s, a, l, u, h, f, m, d, g, E, A, b, p, w, T, L, D, C, y, _, S, O, I, N, U, R, be, ke, B, Q, q, he, Z, me, Xe, qe, te, Ce, Ne, We, ne, Ue, Ve, Ze, mt;
  return {
    c() {
      t = Y("rect"), a = x(), l = Y("rect"), d = x(), g = Y("rect"), p = x(), w = Y("rect"), C = x(), y = Y("rect"), I = x(), N = Y("rect"), ke = x(), B = Y("rect"), he = x(), Z = Y("rect"), qe = x(), te = Y("rect"), We = x(), ne = Y("rect"), c(t, "class", "a9s-outer"), c(t, "style", n = /*computedStyle*/
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
      e[4].h), c(g, "class", "a9s-edge-handle a9s-edge-handle-top"), c(g, "x", E = /*geom*/
      e[4].x), c(g, "y", A = /*geom*/
      e[4].y), c(g, "height", 1), c(g, "width", b = /*geom*/
      e[4].w), c(w, "class", "a9s-edge-handle a9s-edge-handle-right"), c(w, "x", T = /*geom*/
      e[4].x + /*geom*/
      e[4].w), c(w, "y", L = /*geom*/
      e[4].y), c(w, "height", D = /*geom*/
      e[4].h), c(w, "width", 1), c(y, "class", "a9s-edge-handle a9s-edge-handle-bottom"), c(y, "x", _ = /*geom*/
      e[4].x), c(y, "y", S = /*geom*/
      e[4].y + /*geom*/
      e[4].h), c(y, "height", 1), c(y, "width", O = /*geom*/
      e[4].w), c(N, "class", "a9s-edge-handle a9s-edge-handle-left"), c(N, "x", U = /*geom*/
      e[4].x), c(N, "y", R = /*geom*/
      e[4].y), c(N, "height", be = /*geom*/
      e[4].h), c(N, "width", 1), c(B, "class", "a9s-corner-handle a9s-corner-handle-topleft"), c(B, "x", Q = /*geom*/
      e[4].x - /*handleSize*/
      e[3] / 2), c(B, "y", q = /*geom*/
      e[4].y - /*handleSize*/
      e[3] / 2), c(
        B,
        "height",
        /*handleSize*/
        e[3]
      ), c(
        B,
        "width",
        /*handleSize*/
        e[3]
      ), c(Z, "class", "a9s-corner-handle a9s-corner-handle-topright"), c(Z, "x", me = /*geom*/
      e[4].x + /*geom*/
      e[4].w - /*handleSize*/
      e[3] / 2), c(Z, "y", Xe = /*geom*/
      e[4].y - /*handleSize*/
      e[3] / 2), c(
        Z,
        "height",
        /*handleSize*/
        e[3]
      ), c(
        Z,
        "width",
        /*handleSize*/
        e[3]
      ), c(te, "class", "a9s-corner-handle a9s-corner-handle-bottomright"), c(te, "x", Ce = /*geom*/
      e[4].x + /*geom*/
      e[4].w - /*handleSize*/
      e[3] / 2), c(te, "y", Ne = /*geom*/
      e[4].y + /*geom*/
      e[4].h - /*handleSize*/
      e[3] / 2), c(
        te,
        "height",
        /*handleSize*/
        e[3]
      ), c(
        te,
        "width",
        /*handleSize*/
        e[3]
      ), c(ne, "class", "a9s-corner-handle a9s-corner-handle-bottomleft"), c(ne, "x", Ue = /*geom*/
      e[4].x - /*handleSize*/
      e[3] / 2), c(ne, "y", Ve = /*geom*/
      e[4].y + /*geom*/
      e[4].h - /*handleSize*/
      e[3] / 2), c(
        ne,
        "height",
        /*handleSize*/
        e[3]
      ), c(
        ne,
        "width",
        /*handleSize*/
        e[3]
      );
    },
    m(X, P) {
      v(X, t, P), v(X, a, P), v(X, l, P), v(X, d, P), v(X, g, P), v(X, p, P), v(X, w, P), v(X, C, P), v(X, y, P), v(X, I, P), v(X, N, P), v(X, ke, P), v(X, B, P), v(X, he, P), v(X, Z, P), v(X, qe, P), v(X, te, P), v(X, We, P), v(X, ne, P), Ze || (mt = [
        j(t, "pointerdown", function() {
          z(
            /*grab*/
            e[10](M.SHAPE)
          ) && e[10](M.SHAPE).apply(this, arguments);
        }),
        j(l, "pointerdown", function() {
          z(
            /*grab*/
            e[10](M.SHAPE)
          ) && e[10](M.SHAPE).apply(this, arguments);
        }),
        j(g, "pointerdown", function() {
          z(
            /*grab*/
            e[10](M.TOP)
          ) && e[10](M.TOP).apply(this, arguments);
        }),
        j(w, "pointerdown", function() {
          z(
            /*grab*/
            e[10](M.RIGHT)
          ) && e[10](M.RIGHT).apply(this, arguments);
        }),
        j(y, "pointerdown", function() {
          z(
            /*grab*/
            e[10](M.BOTTOM)
          ) && e[10](M.BOTTOM).apply(this, arguments);
        }),
        j(N, "pointerdown", function() {
          z(
            /*grab*/
            e[10](M.LEFT)
          ) && e[10](M.LEFT).apply(this, arguments);
        }),
        j(B, "pointerdown", function() {
          z(
            /*grab*/
            e[10](M.TOP_LEFT)
          ) && e[10](M.TOP_LEFT).apply(this, arguments);
        }),
        j(Z, "pointerdown", function() {
          z(
            /*grab*/
            e[10](M.TOP_RIGHT)
          ) && e[10](M.TOP_RIGHT).apply(this, arguments);
        }),
        j(te, "pointerdown", function() {
          z(
            /*grab*/
            e[10](M.BOTTOM_RIGHT)
          ) && e[10](M.BOTTOM_RIGHT).apply(this, arguments);
        }),
        j(ne, "pointerdown", function() {
          z(
            /*grab*/
            e[10](M.BOTTOM_LEFT)
          ) && e[10](M.BOTTOM_LEFT).apply(this, arguments);
        })
      ], Ze = !0);
    },
    p(X, P) {
      e = X, P & /*computedStyle*/
      2 && n !== (n = /*computedStyle*/
      e[1] ? "display:none;" : void 0) && c(t, "style", n), P & /*geom*/
      16 && o !== (o = /*geom*/
      e[4].x) && c(t, "x", o), P & /*geom*/
      16 && i !== (i = /*geom*/
      e[4].y) && c(t, "y", i), P & /*geom*/
      16 && r !== (r = /*geom*/
      e[4].w) && c(t, "width", r), P & /*geom*/
      16 && s !== (s = /*geom*/
      e[4].h) && c(t, "height", s), P & /*computedStyle*/
      2 && c(
        l,
        "style",
        /*computedStyle*/
        e[1]
      ), P & /*geom*/
      16 && u !== (u = /*geom*/
      e[4].x) && c(l, "x", u), P & /*geom*/
      16 && h !== (h = /*geom*/
      e[4].y) && c(l, "y", h), P & /*geom*/
      16 && f !== (f = /*geom*/
      e[4].w) && c(l, "width", f), P & /*geom*/
      16 && m !== (m = /*geom*/
      e[4].h) && c(l, "height", m), P & /*geom*/
      16 && E !== (E = /*geom*/
      e[4].x) && c(g, "x", E), P & /*geom*/
      16 && A !== (A = /*geom*/
      e[4].y) && c(g, "y", A), P & /*geom*/
      16 && b !== (b = /*geom*/
      e[4].w) && c(g, "width", b), P & /*geom*/
      16 && T !== (T = /*geom*/
      e[4].x + /*geom*/
      e[4].w) && c(w, "x", T), P & /*geom*/
      16 && L !== (L = /*geom*/
      e[4].y) && c(w, "y", L), P & /*geom*/
      16 && D !== (D = /*geom*/
      e[4].h) && c(w, "height", D), P & /*geom*/
      16 && _ !== (_ = /*geom*/
      e[4].x) && c(y, "x", _), P & /*geom*/
      16 && S !== (S = /*geom*/
      e[4].y + /*geom*/
      e[4].h) && c(y, "y", S), P & /*geom*/
      16 && O !== (O = /*geom*/
      e[4].w) && c(y, "width", O), P & /*geom*/
      16 && U !== (U = /*geom*/
      e[4].x) && c(N, "x", U), P & /*geom*/
      16 && R !== (R = /*geom*/
      e[4].y) && c(N, "y", R), P & /*geom*/
      16 && be !== (be = /*geom*/
      e[4].h) && c(N, "height", be), P & /*geom, handleSize*/
      24 && Q !== (Q = /*geom*/
      e[4].x - /*handleSize*/
      e[3] / 2) && c(B, "x", Q), P & /*geom, handleSize*/
      24 && q !== (q = /*geom*/
      e[4].y - /*handleSize*/
      e[3] / 2) && c(B, "y", q), P & /*handleSize*/
      8 && c(
        B,
        "height",
        /*handleSize*/
        e[3]
      ), P & /*handleSize*/
      8 && c(
        B,
        "width",
        /*handleSize*/
        e[3]
      ), P & /*geom, handleSize*/
      24 && me !== (me = /*geom*/
      e[4].x + /*geom*/
      e[4].w - /*handleSize*/
      e[3] / 2) && c(Z, "x", me), P & /*geom, handleSize*/
      24 && Xe !== (Xe = /*geom*/
      e[4].y - /*handleSize*/
      e[3] / 2) && c(Z, "y", Xe), P & /*handleSize*/
      8 && c(
        Z,
        "height",
        /*handleSize*/
        e[3]
      ), P & /*handleSize*/
      8 && c(
        Z,
        "width",
        /*handleSize*/
        e[3]
      ), P & /*geom, handleSize*/
      24 && Ce !== (Ce = /*geom*/
      e[4].x + /*geom*/
      e[4].w - /*handleSize*/
      e[3] / 2) && c(te, "x", Ce), P & /*geom, handleSize*/
      24 && Ne !== (Ne = /*geom*/
      e[4].y + /*geom*/
      e[4].h - /*handleSize*/
      e[3] / 2) && c(te, "y", Ne), P & /*handleSize*/
      8 && c(
        te,
        "height",
        /*handleSize*/
        e[3]
      ), P & /*handleSize*/
      8 && c(
        te,
        "width",
        /*handleSize*/
        e[3]
      ), P & /*geom, handleSize*/
      24 && Ue !== (Ue = /*geom*/
      e[4].x - /*handleSize*/
      e[3] / 2) && c(ne, "x", Ue), P & /*geom, handleSize*/
      24 && Ve !== (Ve = /*geom*/
      e[4].y + /*geom*/
      e[4].h - /*handleSize*/
      e[3] / 2) && c(ne, "y", Ve), P & /*handleSize*/
      8 && c(
        ne,
        "height",
        /*handleSize*/
        e[3]
      ), P & /*handleSize*/
      8 && c(
        ne,
        "width",
        /*handleSize*/
        e[3]
      );
    },
    d(X) {
      X && k(t), X && k(a), X && k(l), X && k(d), X && k(g), X && k(p), X && k(w), X && k(C), X && k(y), X && k(I), X && k(N), X && k(ke), X && k(B), X && k(he), X && k(Z), X && k(qe), X && k(te), X && k(We), X && k(ne), Ze = !1, se(mt);
    }
  };
}
function Lo(e) {
  let t, n;
  return t = new Ke({
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
      const r = {};
      i & /*shape*/
      1 && (r.shape = /*shape*/
      o[0]), i & /*transform*/
      4 && (r.transform = /*transform*/
      o[2]), i & /*$$scope, geom, handleSize, grab, computedStyle*/
      3098 && (r.$$scope = { dirty: i, ctx: o }), t.$set(r);
    },
    i(o) {
      n || (V(t.$$.fragment, o), n = !0);
    },
    o(o) {
      G(t.$$.fragment, o), n = !1;
    },
    d(o) {
      re(t, o);
    }
  };
}
function Oo(e, t, n) {
  let o, i, { shape: r } = t, { computedStyle: s = void 0 } = t, { transform: a } = t, { viewportScale: l = 1 } = t;
  const u = (d, g, E) => {
    const A = d.geometry.bounds;
    let [b, p] = [A.minX, A.minY], [w, T] = [A.maxX, A.maxY];
    const [L, D] = E;
    if (g === M.SHAPE)
      b += L, w += L, p += D, T += D;
    else {
      switch (g) {
        case M.TOP:
        case M.TOP_LEFT:
        case M.TOP_RIGHT: {
          p += D;
          break;
        }
        case M.BOTTOM:
        case M.BOTTOM_LEFT:
        case M.BOTTOM_RIGHT: {
          T += D;
          break;
        }
      }
      switch (g) {
        case M.LEFT:
        case M.TOP_LEFT:
        case M.BOTTOM_LEFT: {
          b += L;
          break;
        }
        case M.RIGHT:
        case M.TOP_RIGHT:
        case M.BOTTOM_RIGHT: {
          w += L;
          break;
        }
      }
    }
    const C = Math.min(b, w), y = Math.min(p, T), _ = Math.abs(w - b), S = Math.abs(T - p);
    return {
      ...d,
      geometry: {
        x: C,
        y,
        w: _,
        h: S,
        bounds: {
          minX: C,
          minY: y,
          maxX: C + _,
          maxY: y + S
        }
      }
    };
  };
  function h(d) {
    oe.call(this, e, d);
  }
  function f(d) {
    oe.call(this, e, d);
  }
  function m(d) {
    oe.call(this, e, d);
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
class ko extends ee {
  constructor(t) {
    super(), $(this, t, Oo, Lo, W, {
      shape: 0,
      computedStyle: 1,
      transform: 2,
      viewportScale: 6
    });
  }
}
function vo(e) {
  let t, n, o, i, r, s, a, l, u, h, f, m, d, g, E, A, b, p, w, T, L, D, C, y, _, S, O, I, N;
  return {
    c() {
      t = Y("ellipse"), s = x(), a = Y("ellipse"), m = x(), d = Y("rect"), A = x(), b = Y("rect"), T = x(), L = Y("rect"), y = x(), _ = Y("rect"), c(t, "class", "a9s-outer"), c(t, "cx", n = /*geom*/
      e[3].cx), c(t, "cy", o = /*geom*/
      e[3].cy), c(t, "rx", i = /*geom*/
      e[3].rx), c(t, "ry", r = /*geom*/
      e[3].ry), c(a, "class", "a9s-inner a9s-shape-handle"), c(a, "cx", l = /*geom*/
      e[3].cx), c(a, "cy", u = /*geom*/
      e[3].cy), c(a, "rx", h = /*geom*/
      e[3].rx), c(a, "ry", f = /*geom*/
      e[3].ry), c(d, "class", "a9s-corner-handle a9s-corner-top"), c(d, "x", g = /*geom*/
      e[3].cx - /*handleSize*/
      e[2] / 2), c(d, "y", E = /*geom*/
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
      ), c(b, "class", "a9s-corner-handle a9s-corner-handle-right"), c(b, "x", p = /*geom*/
      e[3].cx + /*geom*/
      e[3].rx - /*handleSize*/
      e[2] / 2), c(b, "y", w = /*geom*/
      e[3].cy - /*handleSize*/
      e[2] / 2), c(
        b,
        "height",
        /*handleSize*/
        e[2]
      ), c(
        b,
        "width",
        /*handleSize*/
        e[2]
      ), c(L, "class", "a9s-corner-handle a9s-corner-handle-bottom"), c(L, "x", D = /*geom*/
      e[3].cx - /*handleSize*/
      e[2] / 2), c(L, "y", C = /*geom*/
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
      ), c(_, "class", "a9s-corner-handle a9s-corner-handle-left"), c(_, "x", S = /*geom*/
      e[3].cx - /*geom*/
      e[3].rx - /*handleSize*/
      e[2] / 2), c(_, "y", O = /*geom*/
      e[3].cy - /*handleSize*/
      e[2] / 2), c(
        _,
        "height",
        /*handleSize*/
        e[2]
      ), c(
        _,
        "width",
        /*handleSize*/
        e[2]
      );
    },
    m(U, R) {
      v(U, t, R), v(U, s, R), v(U, a, R), v(U, m, R), v(U, d, R), v(U, A, R), v(U, b, R), v(U, T, R), v(U, L, R), v(U, y, R), v(U, _, R), I || (N = [
        j(t, "pointerdown", function() {
          z(
            /*grab*/
            e[9](M.SHAPE)
          ) && e[9](M.SHAPE).apply(this, arguments);
        }),
        j(a, "pointerdown", function() {
          z(
            /*grab*/
            e[9](M.SHAPE)
          ) && e[9](M.SHAPE).apply(this, arguments);
        }),
        j(d, "pointerdown", function() {
          z(
            /*grab*/
            e[9](M.TOP)
          ) && e[9](M.TOP).apply(this, arguments);
        }),
        j(b, "pointerdown", function() {
          z(
            /*grab*/
            e[9](M.RIGHT)
          ) && e[9](M.RIGHT).apply(this, arguments);
        }),
        j(L, "pointerdown", function() {
          z(
            /*grab*/
            e[9](M.BOTTOM)
          ) && e[9](M.BOTTOM).apply(this, arguments);
        }),
        j(_, "pointerdown", function() {
          z(
            /*grab*/
            e[9](M.LEFT)
          ) && e[9](M.LEFT).apply(this, arguments);
        })
      ], I = !0);
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
      12 && E !== (E = /*geom*/
      e[3].cy - /*handleSize*/
      e[2] / 2 - /*geom*/
      e[3].ry) && c(d, "y", E), R & /*handleSize*/
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
      e[2] / 2) && c(b, "x", p), R & /*geom, handleSize*/
      12 && w !== (w = /*geom*/
      e[3].cy - /*handleSize*/
      e[2] / 2) && c(b, "y", w), R & /*handleSize*/
      4 && c(
        b,
        "height",
        /*handleSize*/
        e[2]
      ), R & /*handleSize*/
      4 && c(
        b,
        "width",
        /*handleSize*/
        e[2]
      ), R & /*geom, handleSize*/
      12 && D !== (D = /*geom*/
      e[3].cx - /*handleSize*/
      e[2] / 2) && c(L, "x", D), R & /*geom, handleSize*/
      12 && C !== (C = /*geom*/
      e[3].cy + /*geom*/
      e[3].ry - /*handleSize*/
      e[2] / 2) && c(L, "y", C), R & /*handleSize*/
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
      12 && S !== (S = /*geom*/
      e[3].cx - /*geom*/
      e[3].rx - /*handleSize*/
      e[2] / 2) && c(_, "x", S), R & /*geom, handleSize*/
      12 && O !== (O = /*geom*/
      e[3].cy - /*handleSize*/
      e[2] / 2) && c(_, "y", O), R & /*handleSize*/
      4 && c(
        _,
        "height",
        /*handleSize*/
        e[2]
      ), R & /*handleSize*/
      4 && c(
        _,
        "width",
        /*handleSize*/
        e[2]
      );
    },
    d(U) {
      U && k(t), U && k(s), U && k(a), U && k(m), U && k(d), U && k(A), U && k(b), U && k(T), U && k(L), U && k(y), U && k(_), I = !1, se(N);
    }
  };
}
function Po(e) {
  let t, n;
  return t = new Ke({
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
          vo,
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
      const r = {};
      i & /*shape*/
      1 && (r.shape = /*shape*/
      o[0]), i & /*transform*/
      2 && (r.transform = /*transform*/
      o[1]), i & /*$$scope, geom, handleSize, grab*/
      1548 && (r.$$scope = { dirty: i, ctx: o }), t.$set(r);
    },
    i(o) {
      n || (V(t.$$.fragment, o), n = !0);
    },
    o(o) {
      G(t.$$.fragment, o), n = !1;
    },
    d(o) {
      re(t, o);
    }
  };
}
function Io(e, t, n) {
  let o, i, { shape: r } = t, { transform: s } = t, { viewportScale: a = 1 } = t;
  const l = (m, d, g) => {
    const E = m.geometry.bounds;
    let [A, b] = [E.minX, E.minY], [p, w] = [E.maxX, E.maxY];
    const [T, L] = g;
    if (d === M.SHAPE)
      A += T, p += T, b += L, w += L;
    else
      switch (d) {
        case M.TOP: {
          b += L;
          break;
        }
        case M.BOTTOM: {
          w += L;
          break;
        }
        case M.LEFT: {
          A += T;
          break;
        }
        case M.RIGHT: {
          p += T;
          break;
        }
      }
    const D = Math.min(A, p), C = Math.min(b, w), y = Math.abs(p - A), _ = Math.abs(w - b), S = (A + p) / 2, O = (b + w) / 2, I = y / 2, N = _ / 2;
    return {
      ...m,
      geometry: {
        ...m.geometry,
        cx: S,
        cy: O,
        rx: I,
        ry: N,
        bounds: {
          minX: D,
          minY: C,
          maxX: D + y,
          maxY: C + _
        }
      }
    };
  };
  function u(m) {
    oe.call(this, e, m);
  }
  function h(m) {
    oe.call(this, e, m);
  }
  function f(m) {
    oe.call(this, e, m);
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
class Do extends ee {
  constructor(t) {
    super(), $(this, t, Io, Po, W, { shape: 0, transform: 1, viewportScale: 5 });
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
function Bo(e) {
  let t, n, o;
  return {
    c() {
      t = Y("path"), c(t, "class", "a9s-shape-handle"), c(
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
      v(i, t, r), n || (o = j(t, "pointerdown", function() {
        z(
          /*grab*/
          e[14](M.SHAPE)
        ) && e[14](M.SHAPE).apply(this, arguments);
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
      i && k(t), n = !1, o();
    }
  };
}
function Yo(e) {
  let t, n;
  return t = new Ke({
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
          Bo,
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
      const r = {};
      i & /*shape*/
      1 && (r.shape = /*shape*/
      o[0]), i & /*transform*/
      2 && (r.transform = /*transform*/
      o[1]), i & /*$$scope, computedStyle, pathData, grab*/
      49164 && (r.$$scope = { dirty: i, ctx: o }), t.$set(r);
    },
    i(o) {
      n || (V(t.$$.fragment, o), n = !0);
    },
    o(o) {
      G(t.$$.fragment, o), n = !1;
    },
    d(o) {
      re(t, o);
    }
  };
}
function Ro(e, t, n) {
  let o, i, r, { shape: s } = t, { annotation: a } = t, { transform: l } = t, { viewportScale: u = 1 } = t, { style: h = void 0 } = t, f = { fillOpacity: 1 };
  const m = (A, b, p) => {
    let w;
    b === M.SHAPE && (w = A.geometry.points.map(([L, D, C]) => [L + p[0], D + p[1], C]));
    const T = ye(w.map((L) => [L[0], L[1]]));
    return { ...A, geometry: { points: w, bounds: T } };
  };
  function d(A) {
    oe.call(this, e, A);
  }
  function g(A) {
    oe.call(this, e, A);
  }
  function E(A) {
    oe.call(this, e, A);
  }
  return e.$$set = (A) => {
    "shape" in A && n(0, s = A.shape), "annotation" in A && n(5, a = A.annotation), "transform" in A && n(1, l = A.transform), "viewportScale" in A && n(6, u = A.viewportScale), "style" in A && n(7, h = A.style);
  }, e.$$.update = () => {
    e.$$.dirty & /*shape*/
    1 && n(8, o = s.geometry), e.$$.dirty & /*viewportScale*/
    64, e.$$.dirty & /*annotation, style*/
    160 && n(3, i = we(a, h, f)), e.$$.dirty & /*geom*/
    256 && n(2, r = Re(o.points, ut, !0));
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
    E
  ];
}
class Xo extends ee {
  constructor(t) {
    super(), $(this, t, Ro, Yo, W, {
      shape: 0,
      annotation: 5,
      transform: 1,
      viewportScale: 6,
      style: 7
    });
  }
}
const nn = /* @__PURE__ */ new Map([
  [H.RECTANGLE, ko],
  [H.POLYGON, To],
  [H.ELLIPSE, Do],
  [H.FREEHAND, Xo]
]), Lt = (e) => nn.get(e.type), Co = (e, t) => nn.set(e, t), M = (e) => `HANDLE-${e}`;
M.SHAPE = "SHAPE";
M.TOP = "TOP";
M.RIGHT = "RIGHT";
M.BOTTOM = "BOTTOM";
M.LEFT = "LEFT";
M.TOP_LEFT = "TOP_LEFT";
M.TOP_RIGHT = "TOP_RIGHT";
M.BOTTOM_RIGHT = "BOTTOM_RIGHT";
M.BOTTOM_LEFT = "BOTTOM_LEFT";
const No = (e) => ({}), Ot = (e) => ({ grab: (
  /*onGrab*/
  e[0]
) });
function Uo(e) {
  let t, n, o, i;
  const r = (
    /*#slots*/
    e[7].default
  ), s = an(
    r,
    e,
    /*$$scope*/
    e[6],
    Ot
  );
  return {
    c() {
      t = Y("g"), s && s.c(), c(t, "class", "a9s-annotation selected");
    },
    m(a, l) {
      v(a, t, l), s && s.m(t, null), n = !0, o || (i = [
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
      64) && fn(
        s,
        r,
        a,
        /*$$scope*/
        a[6],
        n ? cn(
          r,
          /*$$scope*/
          a[6],
          l,
          No
        ) : un(
          /*$$scope*/
          a[6]
        ),
        Ot
      );
    },
    i(a) {
      n || (V(s, a), n = !0);
    },
    o(a) {
      G(s, a), n = !1;
    },
    d(a) {
      a && k(t), s && s.d(a), o = !1, se(i);
    }
  };
}
function Vo(e, t, n) {
  let { $$slots: o = {}, $$scope: i } = t;
  const r = de();
  let { shape: s } = t, { editor: a } = t, { transform: l } = t, u = null, h, f = null;
  const m = (E) => (A) => {
    u = E, h = l.elementToImage(A.offsetX, A.offsetY), f = s, A.target.setPointerCapture(A.pointerId), r("grab");
  }, d = (E) => {
    if (u) {
      const [A, b] = l.elementToImage(E.offsetX, E.offsetY), p = [A - h[0], b - h[1]];
      n(3, s = a(f, u, p)), r("change", s);
    }
  }, g = (E) => {
    E.target.releasePointerCapture(E.pointerId), u = null, f = s, r("release");
  };
  return e.$$set = (E) => {
    "shape" in E && n(3, s = E.shape), "editor" in E && n(4, a = E.editor), "transform" in E && n(5, l = E.transform), "$$scope" in E && n(6, i = E.$$scope);
  }, [m, d, g, s, a, l, i, o];
}
class Ke extends ee {
  constructor(t) {
    super(), $(this, t, Vo, Uo, W, { shape: 3, editor: 4, transform: 5 });
  }
}
function Go(e, t, n) {
  let o;
  const i = de();
  let { annotation: r } = t, { editor: s } = t, { style: a = void 0 } = t, { target: l } = t, { transform: u } = t, { viewportScale: h } = t, f;
  return _e(() => (n(6, f = new s({
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
class Ho extends ee {
  constructor(t) {
    super(), $(this, t, Go, null, W, {
      annotation: 0,
      editor: 1,
      style: 2,
      target: 3,
      transform: 4,
      viewportScale: 5
    });
  }
}
function Fo(e, t, n) {
  const o = de();
  let { drawingMode: i } = t, { target: r } = t, { tool: s } = t, { transform: a } = t, { viewportScale: l } = t, u;
  return _e(() => {
    const h = r.closest("svg"), f = [], m = (d, g, E) => {
      h.addEventListener(d, g, E), f.push(() => h.removeEventListener(d, g, E));
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
class zo extends ee {
  constructor(t) {
    super(), $(this, t, Fo, null, W, {
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
      t = Y("rect"), n = Y("rect"), c(t, "class", "a9s-outer"), c(
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
      v(o, t, i), v(o, n, i);
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
      o && k(t), o && k(n);
    }
  };
}
function jo(e) {
  let t, n = (
    /*origin*/
    e[0] && kt(e)
  );
  return {
    c() {
      t = Y("g"), n && n.c(), c(t, "class", "a9s-annotation a9s-rubberband");
    },
    m(o, i) {
      v(o, t, i), n && n.m(t, null);
    },
    p(o, [i]) {
      /*origin*/
      o[0] ? n ? n.p(o, i) : (n = kt(o), n.c(), n.m(t, null)) : n && (n.d(1), n = null);
    },
    i: F,
    o: F,
    d(o) {
      o && k(t), n && n.d();
    }
  };
}
function Ko(e, t, n) {
  const o = de();
  let { addEventListener: i } = t, { drawingMode: r } = t, { transform: s } = t, a, l, u, h, f, m, d;
  const g = (p) => {
    a = performance.now(), r === "drag" && (n(0, l = s.elementToImage(p.offsetX, p.offsetY)), u = l, n(1, h = l[0]), n(2, f = l[1]), n(3, m = 1), n(4, d = 1));
  }, E = (p) => {
    l && (u = s.elementToImage(p.offsetX, p.offsetY), n(1, h = Math.min(u[0], l[0])), n(2, f = Math.min(u[1], l[1])), n(3, m = Math.abs(u[0] - l[0])), n(4, d = Math.abs(u[1] - l[1])));
  }, A = (p) => {
    const w = performance.now() - a;
    if (r === "click") {
      if (w > 300)
        return;
      p.stopPropagation(), l ? b() : (n(0, l = s.elementToImage(p.offsetX, p.offsetY)), u = l, n(1, h = l[0]), n(2, f = l[1]), n(3, m = 1), n(4, d = 1));
    } else
      l && (w > 300 || m * d > 100 ? (p.stopPropagation(), b()) : (n(0, l = null), u = null));
  }, b = () => {
    if (m * d > 15) {
      const p = {
        type: H.RECTANGLE,
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
  return _e(() => {
    i("pointerdown", g), i("pointermove", E), i("pointerup", A, !0);
  }), e.$$set = (p) => {
    "addEventListener" in p && n(5, i = p.addEventListener), "drawingMode" in p && n(6, r = p.drawingMode), "transform" in p && n(7, s = p.transform);
  }, [l, h, f, m, d, i, r, s];
}
class qo extends ee {
  constructor(t) {
    super(), $(this, t, Ko, jo, W, {
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
function Wo(e, t = F) {
  let n;
  const o = /* @__PURE__ */ new Set();
  function i(a) {
    if (W(e, a) && (e = a, n)) {
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
  function s(a, l = F) {
    const u = [a, l];
    return o.add(u), o.size === 1 && (n = t(i) || F), a(e), () => {
      o.delete(u), o.size === 0 && n && (n(), n = null);
    };
  }
  return { set: i, update: r, subscribe: s };
}
const Zo = (e, t) => {
  const { naturalWidth: n, naturalHeight: o } = e;
  if (!n && !o) {
    const { width: i, height: r } = e;
    t.setAttribute("viewBox", `0 0 ${i} ${r}`), e.addEventListener("load", (s) => {
      const a = s.target;
      t.setAttribute("viewBox", `0 0 ${a.naturalWidth} ${a.naturalHeight}`);
    });
  } else
    t.setAttribute("viewBox", `0 0 ${n} ${o}`);
}, Jo = (e, t) => {
  Zo(e, t);
  const { subscribe: n, set: o } = Wo(1);
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
}, Qi = "ontouchstart" in window || navigator.maxTouchPoints > 0;
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
function vt(e) {
  let t, n, o, i, r, s = (
    /*isClosable*/
    e[2] && Pt(e)
  );
  return {
    c() {
      t = Y("polygon"), o = Y("polygon"), s && s.c(), r = ue(), c(t, "class", "a9s-outer"), c(t, "points", n = /*coords*/
      e[15]), c(o, "class", "a9s-inner"), c(o, "points", i = /*coords*/
      e[15]);
    },
    m(a, l) {
      v(a, t, l), v(a, o, l), s && s.m(a, l), v(a, r, l);
    },
    p(a, l) {
      l & /*isClosable, points, cursor*/
      7 && n !== (n = /*coords*/
      a[15]) && c(t, "points", n), l & /*isClosable, points, cursor*/
      7 && i !== (i = /*coords*/
      a[15]) && c(o, "points", i), /*isClosable*/
      a[2] ? s ? s.p(a, l) : (s = Pt(a), s.c(), s.m(r.parentNode, r)) : s && (s.d(1), s = null);
    },
    d(a) {
      a && k(t), a && k(o), s && s.d(a), a && k(r);
    }
  };
}
function Pt(e) {
  let t, n, o;
  return {
    c() {
      t = Y("rect"), c(t, "class", "a9s-corner-handle"), c(t, "x", n = /*points*/
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
      v(i, t, r);
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
      i && k(t);
    }
  };
}
function Qo(e) {
  let t, n = (
    /*cursor*/
    e[1] && vt(et(e))
  );
  return {
    c() {
      t = Y("g"), n && n.c(), c(t, "class", "a9s-annotation a9s-rubberband");
    },
    m(o, i) {
      v(o, t, i), n && n.m(t, null);
    },
    p(o, [i]) {
      /*cursor*/
      o[1] ? n ? n.p(et(o), i) : (n = vt(et(o)), n.c(), n.m(t, null)) : n && (n.d(1), n = null);
    },
    i: F,
    o: F,
    d(o) {
      o && k(t), n && n.d();
    }
  };
}
const xo = 20;
function $o(e, t, n) {
  let o;
  const i = de();
  let { addEventListener: r } = t, { drawingMode: s } = t, { transform: a } = t, { viewportScale: l = 1 } = t, u, h = [], f = null, m = !1;
  const d = (p) => {
    const { timeStamp: w, offsetX: T, offsetY: L } = p;
    if (u = { timeStamp: w, offsetX: T, offsetY: L }, s === "drag" && h.length === 0) {
      const D = a.elementToImage(p.offsetX, p.offsetY);
      h.push(D), n(1, f = D);
    }
  }, g = (p) => {
    if (h.length > 0 && (n(1, f = a.elementToImage(p.offsetX, p.offsetY)), h.length > 2)) {
      const w = $e(f, h[0]) * l;
      n(2, m = w < xo);
    }
  }, E = (p) => {
    if (s === "click") {
      const w = p.timeStamp - u.timeStamp, T = $e([u.offsetX, u.offsetY], [p.offsetX, p.offsetY]);
      if (w > 300 || T > 15)
        return;
      if (m)
        b();
      else if (h.length === 0) {
        const L = a.elementToImage(p.offsetX, p.offsetY);
        h.push(L), n(1, f = L);
      } else
        h.push(f);
    } else {
      if (h.length === 1 && $e(h[0], f) <= 4) {
        n(0, h = []), n(1, f = null);
        return;
      }
      p.stopImmediatePropagation(), m ? b() : h.push(f);
    }
  }, A = () => {
    const p = [...h, f], w = {
      type: H.POLYGON,
      geometry: { bounds: ye(p), points: p }
    };
    st(w) > 4 && (n(0, h = []), n(1, f = null), i("create", w));
  }, b = () => {
    const p = {
      type: H.POLYGON,
      geometry: {
        bounds: ye(h),
        points: [...h]
      }
    };
    n(0, h = []), n(1, f = null), i("create", p);
  };
  return _e(() => {
    r("pointerdown", d, !0), r("pointermove", g), r("pointerup", E, !0), r("dblclick", A, !0);
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
class ei extends ee {
  constructor(t) {
    super(), $(this, t, $o, Qo, W, {
      addEventListener: 4,
      drawingMode: 5,
      transform: 6,
      viewportScale: 7
    });
  }
}
function It(e) {
  let t, n, o, i, r, s, a, l, u, h;
  return {
    c() {
      t = Y("ellipse"), s = Y("ellipse"), c(t, "class", "a9s-outer"), c(t, "cx", n = /*x*/
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
      v(f, t, m), v(f, s, m);
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
      f && k(t), f && k(s);
    }
  };
}
function ti(e) {
  let t, n = (
    /*origin*/
    e[1] && It(e)
  );
  return {
    c() {
      t = Y("g"), n && n.c(), c(t, "class", "a9s-annotation a9s-rubberband");
    },
    m(o, i) {
      v(o, t, i), n && n.m(t, null), e[9](t);
    },
    p(o, [i]) {
      /*origin*/
      o[1] ? n ? n.p(o, i) : (n = It(o), n.c(), n.m(t, null)) : n && (n.d(1), n = null);
    },
    i: F,
    o: F,
    d(o) {
      o && k(t), n && n.d(), e[9](null);
    }
  };
}
function ni(e, t, n) {
  const o = de();
  let { addEventListener: i } = t, { drawingMode: r } = t, { transform: s } = t, a, l, u, h, f, m, d, g = !1, E = !1, A, b;
  const p = (_) => {
    A = performance.now(), r === "drag" && (n(1, l = s.elementToImage(_.offsetX, _.offsetY)), u = l, n(2, h = l[0]), n(3, f = l[1]), n(4, m = 1), n(5, d = 1));
  }, w = (_) => {
    const S = _ || b;
    if (l)
      if (u = s.elementToImage(S.offsetX, S.offsetY), E) {
        const O = 2 * Math.abs(u[0] - l[0]), I = 2 * Math.abs(u[1] - l[1]);
        n(4, m = g ? Math.max(O, I) : O), n(5, d = g ? m : I), n(2, h = Math.min(u[0], l[0] - m / 2)), n(3, f = Math.min(u[1], l[1] - d / 2));
      } else {
        const O = Math.abs(u[0] - l[0]), I = Math.abs(u[1] - l[1]);
        n(4, m = g ? Math.max(O, I) : O), n(5, d = g ? m : I), n(2, h = Math.min(u[0], l[0])), n(3, f = Math.min(u[1], l[1]));
      }
    _ && (b = _);
  }, T = (_) => {
    r === "click" && _.stopImmediatePropagation();
    const S = performance.now() - A;
    if (r === "click") {
      if (S > 300)
        return;
      _.stopPropagation(), l ? L() : (n(1, l = s.elementToImage(_.offsetX, _.offsetY)), u = l, n(2, h = l[0]), n(3, f = l[1]), n(4, m = 1), n(5, d = 1));
    } else
      l && (S > 300 || m * d > 100 ? (_.stopPropagation(), L()) : (n(1, l = null), u = null, b = void 0));
  }, L = () => {
    if (m * d > 15) {
      const _ = {
        type: H.ELLIPSE,
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
      o("create", _);
    }
    n(1, l = null), u = null, b = void 0;
  }, D = (_) => {
    _.key === "Shift" && (g = !0, w()), _.key === "Control" && (E = !0, w());
  }, C = (_) => {
    _.key === "Shift" && (g = !1, w()), _.key === "Control" && (E = !1, w());
  };
  _e(() => (document.addEventListener("keyup", C), document.addEventListener("keydown", D), i("pointerdown", p), i("pointermove", w), i("pointerup", T), () => {
    document.removeEventListener("keyup", C), document.removeEventListener("keydown", D);
  }));
  function y(_) {
    Ye[_ ? "unshift" : "push"](() => {
      a = _, n(0, a);
    });
  }
  return e.$$set = (_) => {
    "addEventListener" in _ && n(6, i = _.addEventListener), "drawingMode" in _ && n(7, r = _.drawingMode), "transform" in _ && n(8, s = _.transform);
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
    y
  ];
}
class oi extends ee {
  constructor(t) {
    super(), $(this, t, ni, ti, W, {
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
      t = Y("path"), c(
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
      v(n, t, o);
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
      n && k(t);
    }
  };
}
function ii(e) {
  let t, n = (
    /*isDrawing*/
    e[1] && Dt(e)
  );
  return {
    c() {
      t = Y("g"), n && n.c(), c(t, "class", "a9s-annotation a9s-rubberband");
    },
    m(o, i) {
      v(o, t, i), n && n.m(t, null);
    },
    p(o, [i]) {
      /*isDrawing*/
      o[1] ? n ? n.p(o, i) : (n = Dt(o), n.c(), n.m(t, null)) : n && (n.d(1), n = null);
    },
    i: F,
    o: F,
    d(o) {
      o && k(t), n && n.d();
    }
  };
}
function ri(e, t, n) {
  let o;
  const i = de();
  let { addEventListener: r } = t, { drawingMode: s } = t, { annotation: a } = t, { transform: l } = t, { viewportScale: u = 1 } = t, { style: h = void 0 } = t, f = { fillOpacity: 1 }, m = [], d = "", g = !1;
  const E = (w) => {
    if (s === "drag" && m.length === 0) {
      n(1, g = !0);
      const T = l.elementToImage(w.offsetX, w.offsetY);
      m.push([...T, w.pressure]), n(0, d = Re(m));
    }
  }, A = (w) => {
    if (g) {
      const T = l.elementToImage(w.offsetX, w.offsetY);
      m.push([...T, w.pressure]), n(0, d = Re(m, ut, !0));
    }
  }, b = (w) => {
    g && p();
  }, p = () => {
    const w = {
      type: H.FREEHAND,
      geometry: {
        bounds: ye(m.map((T) => [T[0], T[1]])),
        points: m
      }
    };
    n(1, g = !1), m = [], i("create", w);
  };
  return _e(() => {
    r("pointerdown", E, !0), r("pointermove", A), r("pointerup", b, !0);
  }), e.$$set = (w) => {
    "addEventListener" in w && n(3, r = w.addEventListener), "drawingMode" in w && n(4, s = w.drawingMode), "annotation" in w && n(5, a = w.annotation), "transform" in w && n(6, l = w.transform), "viewportScale" in w && n(7, u = w.viewportScale), "style" in w && n(8, h = w.style);
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
class si extends ee {
  constructor(t) {
    super(), $(this, t, ri, ii, W, {
      addEventListener: 3,
      drawingMode: 4,
      annotation: 5,
      transform: 6,
      viewportScale: 7,
      style: 8
    });
  }
}
const ht = /* @__PURE__ */ new Map([
  ["rectangle", { tool: qo }],
  ["polygon", { tool: ei }],
  ["ellipse", { tool: oi }],
  ["freehand", { tool: si }]
]), at = () => [...ht.keys()], on = (e) => ht.get(e), li = (e, t, n) => ht.set(e, { tool: t, opts: n });
function ai(e) {
  let t, n, o, i, r;
  return {
    c() {
      t = Y("g"), n = Y("ellipse"), i = Y("ellipse"), c(n, "class", "a9s-outer"), c(n, "style", o = /*computedStyle*/
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
      v(s, t, a), ae(t, n), ae(t, i);
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
    i: F,
    o: F,
    d(s) {
      s && k(t);
    }
  };
}
function ci(e, t, n) {
  let o, { annotation: i } = t, { geom: r } = t, { style: s = void 0 } = t;
  const { cx: a, cy: l, rx: u, ry: h } = r;
  return e.$$set = (f) => {
    "annotation" in f && n(0, i = f.annotation), "geom" in f && n(6, r = f.geom), "style" in f && n(7, s = f.style);
  }, e.$$.update = () => {
    e.$$.dirty & /*annotation, style*/
    129 && n(1, o = we(i, s));
  }, [i, o, a, l, u, h, r, s];
}
class fi extends ee {
  constructor(t) {
    super(), $(this, t, ci, ai, W, { annotation: 0, geom: 6, style: 7 });
  }
}
function ui(e) {
  let t, n, o, i, r;
  return {
    c() {
      t = Y("g"), n = Y("polygon"), i = Y("polygon"), c(n, "class", "a9s-outer"), c(n, "style", o = /*computedStyle*/
      e[1] ? "display:none;" : void 0), c(
        n,
        "points",
        /*points*/
        e[2].map(di).join(" ")
      ), c(i, "class", "a9s-inner"), c(
        i,
        "style",
        /*computedStyle*/
        e[1]
      ), c(
        i,
        "points",
        /*points*/
        e[2].map(hi).join(" ")
      ), c(t, "data-id", r = /*annotation*/
      e[0].id);
    },
    m(s, a) {
      v(s, t, a), ae(t, n), ae(t, i);
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
    i: F,
    o: F,
    d(s) {
      s && k(t);
    }
  };
}
const di = (e) => e.join(","), hi = (e) => e.join(",");
function mi(e, t, n) {
  let o, { annotation: i } = t, { geom: r } = t, { style: s = void 0 } = t;
  const { points: a } = r;
  return e.$$set = (l) => {
    "annotation" in l && n(0, i = l.annotation), "geom" in l && n(3, r = l.geom), "style" in l && n(4, s = l.style);
  }, e.$$.update = () => {
    e.$$.dirty & /*annotation, style*/
    17 && n(1, o = we(i, s));
  }, [i, o, a, r, s];
}
class gi extends ee {
  constructor(t) {
    super(), $(this, t, mi, ui, W, { annotation: 0, geom: 3, style: 4 });
  }
}
function pi(e) {
  let t, n, o, i, r;
  return {
    c() {
      t = Y("g"), n = Y("rect"), i = Y("rect"), c(n, "class", "a9s-outer"), c(n, "style", o = /*computedStyle*/
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
      v(s, t, a), ae(t, n), ae(t, i);
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
    i: F,
    o: F,
    d(s) {
      s && k(t);
    }
  };
}
function yi(e, t, n) {
  let o, i, r, s, a, { annotation: l } = t, { geom: u } = t, { style: h = void 0 } = t;
  return e.$$set = (f) => {
    "annotation" in f && n(0, l = f.annotation), "geom" in f && n(6, u = f.geom), "style" in f && n(7, h = f.style);
  }, e.$$.update = () => {
    e.$$.dirty & /*annotation, style*/
    129 && n(5, o = we(l, h)), e.$$.dirty & /*geom*/
    64 && n(4, { x: i, y: r, w: s, h: a } = u, i, (n(3, r), n(6, u)), (n(2, s), n(6, u)), (n(1, a), n(6, u)));
  }, [l, a, s, r, i, o, u, h];
}
class _i extends ee {
  constructor(t) {
    super(), $(this, t, yi, pi, W, { annotation: 0, geom: 6, style: 7 });
  }
}
function wi(e) {
  let t, n, o;
  return {
    c() {
      t = Y("g"), n = Y("path"), c(
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
      v(i, t, r), ae(t, n);
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
    i: F,
    o: F,
    d(i) {
      i && k(t);
    }
  };
}
function bi(e, t, n) {
  let o, i, { annotation: r } = t, { geom: s } = t, { style: a = void 0 } = t, l = { fillOpacity: 1 };
  const { points: u } = s;
  return e.$$set = (h) => {
    "annotation" in h && n(0, r = h.annotation), "geom" in h && n(3, s = h.geom), "style" in h && n(4, a = h.style);
  }, e.$$.update = () => {
    e.$$.dirty & /*annotation, style*/
    17 && n(2, o = we(r, a, l));
  }, n(1, i = Re(u, ut, !0)), [r, i, o, s, a];
}
class Ei extends ee {
  constructor(t) {
    super(), $(this, t, bi, wi, W, { annotation: 0, geom: 3, style: 4 });
  }
}
const xi = {
  elementToImage: (e, t) => [e, t]
}, Ai = (e) => ({
  elementToImage: (t, n) => {
    const o = e.getBoundingClientRect(), i = e.createSVGPoint();
    i.x = t + o.x, i.y = n + o.y;
    const { x: r, y: s } = i.matrixTransform(e.getScreenCTM().inverse());
    return [r, s];
  }
}), Si = 250, Ti = (e, t) => {
  const n = de();
  let o;
  return { onPointerDown: () => o = performance.now(), onPointerUp: (s) => {
    if (performance.now() - o < Si) {
      const { x: l, y: u } = Mi(s, e), h = t.getAt(l, u);
      h ? n("click", { originalEvent: s, annotation: h }) : n("click", { originalEvent: s });
    }
  } };
}, Mi = (e, t) => {
  const n = t.createSVGPoint(), o = t.getBoundingClientRect(), i = e.clientX - o.x, r = e.clientY - o.y, { left: s, top: a } = t.getBoundingClientRect();
  return n.x = i + s, n.y = r + a, n.matrixTransform(t.getScreenCTM().inverse());
};
function Bt(e, t, n) {
  const o = e.slice();
  return o[29] = t[n], o;
}
function Yt(e, t, n) {
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
  ), n, o, i = Xt(e);
  return {
    c() {
      i.c(), n = ue();
    },
    m(r, s) {
      i.m(r, s), v(r, n, s), o = !0;
    },
    p(r, s) {
      s[0] & /*$store*/
      8192 && W(t, t = /*annotation*/
      r[32].id) ? (ce(), G(i, 1, 1, F), fe(), i = Xt(r), i.c(), V(i, 1), i.m(n.parentNode, n)) : i.p(r, s);
    },
    i(r) {
      o || (V(i), o = !0);
    },
    o(r) {
      G(i), o = !1;
    },
    d(r) {
      r && k(n), i.d(r);
    }
  };
}
function Li(e) {
  let t, n;
  return t = new Ei({
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
      n || (V(t.$$.fragment, o), n = !0);
    },
    o(o) {
      G(t.$$.fragment, o), n = !1;
    },
    d(o) {
      re(t, o);
    }
  };
}
function Oi(e) {
  let t, n;
  return t = new gi({
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
      n || (V(t.$$.fragment, o), n = !0);
    },
    o(o) {
      G(t.$$.fragment, o), n = !1;
    },
    d(o) {
      re(t, o);
    }
  };
}
function ki(e) {
  let t, n;
  return t = new _i({
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
      n || (V(t.$$.fragment, o), n = !0);
    },
    o(o) {
      G(t.$$.fragment, o), n = !1;
    },
    d(o) {
      re(t, o);
    }
  };
}
function vi(e) {
  let t, n;
  return t = new fi({
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
      n || (V(t.$$.fragment, o), n = !0);
    },
    o(o) {
      G(t.$$.fragment, o), n = !1;
    },
    d(o) {
      re(t, o);
    }
  };
}
function Xt(e) {
  let t, n, o, i;
  const r = [vi, ki, Oi, Li], s = [];
  function a(l, u) {
    return (
      /*selector*/
      l[35].type === H.ELLIPSE ? 0 : (
        /*selector*/
        l[35].type === H.RECTANGLE ? 1 : (
          /*selector*/
          l[35].type === H.POLYGON ? 2 : (
            /*selector*/
            l[35].type === H.FREEHAND ? 3 : -1
          )
        )
      )
    );
  }
  return ~(t = a(e)) && (n = s[t] = r[t](e)), {
    c() {
      n && n.c(), o = ue();
    },
    m(l, u) {
      ~t && s[t].m(l, u), v(l, o, u), i = !0;
    },
    p(l, u) {
      let h = t;
      t = a(l), t === h ? ~t && s[t].p(l, u) : (n && (ce(), G(s[h], 1, 1, () => {
        s[h] = null;
      }), fe()), ~t ? (n = s[t], n ? n.p(l, u) : (n = s[t] = r[t](l), n.c()), V(n, 1), n.m(o.parentNode, o)) : n = null);
    },
    i(l) {
      i || (V(n), i = !0);
    },
    o(l) {
      G(n), i = !1;
    },
    d(l) {
      ~t && s[t].d(l), l && k(o);
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
      i && i.c(), n = ue();
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
      )), t ? i ? (i.p(tt(r), s), s[0] & /*isEditable, $store*/
      8320 && V(i, 1)) : (i = Rt(tt(r)), i.c(), V(i, 1), i.m(n.parentNode, n)) : i && (ce(), G(i, 1, 1, () => {
        i = null;
      }), fe());
    },
    i(r) {
      o || (V(i), o = !0);
    },
    o(r) {
      G(i), o = !1;
    },
    d(r) {
      i && i.d(r), r && k(n);
    }
  };
}
function Nt(e) {
  let t, n, o, i;
  const r = [Ii, Pi], s = [];
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
      n && n.c(), o = ue();
    },
    m(l, u) {
      ~t && s[t].m(l, u), v(l, o, u), i = !0;
    },
    p(l, u) {
      let h = t;
      t = a(l), t === h ? ~t && s[t].p(l, u) : (n && (ce(), G(s[h], 1, 1, () => {
        s[h] = null;
      }), fe()), ~t ? (n = s[t], n ? n.p(l, u) : (n = s[t] = r[t](l), n.c()), V(n, 1), n.m(o.parentNode, o)) : n = null);
    },
    i(l) {
      i || (V(n), i = !0);
    },
    o(l) {
      G(n), i = !1;
    },
    d(l) {
      ~t && s[t].d(l), l && k(o);
    }
  };
}
function Pi(e) {
  let t = (
    /*toolName*/
    e[2]
  ), n, o, i = Ut(e);
  return {
    c() {
      i.c(), n = ue();
    },
    m(r, s) {
      i.m(r, s), v(r, n, s), o = !0;
    },
    p(r, s) {
      s[0] & /*toolName*/
      4 && W(t, t = /*toolName*/
      r[2]) ? (ce(), G(i, 1, 1, F), fe(), i = Ut(r), i.c(), V(i, 1), i.m(n.parentNode, n)) : i.p(r, s);
    },
    i(r) {
      o || (V(i), o = !0);
    },
    o(r) {
      G(i), o = !1;
    },
    d(r) {
      r && k(n), i.d(r);
    }
  };
}
function Ii(e) {
  let t, n, o = (
    /*editableAnnotations*/
    e[6]
  ), i = [];
  for (let s = 0; s < o.length; s += 1)
    i[s] = Gt(Bt(e, o, s));
  const r = (s) => G(i[s], 1, 1, () => {
    i[s] = null;
  });
  return {
    c() {
      for (let s = 0; s < i.length; s += 1)
        i[s].c();
      t = ue();
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
          const u = Bt(s, o, l);
          i[l] ? (i[l].p(u, a), V(i[l], 1)) : (i[l] = Gt(u), i[l].c(), V(i[l], 1), i[l].m(t.parentNode, t));
        }
        for (ce(), l = o.length; l < i.length; l += 1)
          r(l);
        fe();
      }
    },
    i(s) {
      if (!n) {
        for (let a = 0; a < o.length; a += 1)
          V(i[a]);
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
      ct(i, s), s && k(t);
    }
  };
}
function Ut(e) {
  let t, n;
  return t = new zo({
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
      n || (V(t.$$.fragment, o), n = !0);
    },
    o(o) {
      G(t.$$.fragment, o), n = !1;
    },
    d(o) {
      re(t, o);
    }
  };
}
function Vt(e) {
  let t, n;
  return t = new Ho({
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
      le(t.$$.fragment);
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
      64 && (r.editor = Lt(
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
      n || (V(t.$$.fragment, o), n = !0);
    },
    o(o) {
      G(t.$$.fragment, o), n = !1;
    },
    d(o) {
      re(t, o);
    }
  };
}
function Gt(e) {
  let t = (
    /*editable*/
    e[29].id
  ), n, o, i = Vt(e);
  return {
    c() {
      i.c(), n = ue();
    },
    m(r, s) {
      i.m(r, s), v(r, n, s), o = !0;
    },
    p(r, s) {
      s[0] & /*editableAnnotations*/
      64 && W(t, t = /*editable*/
      r[29].id) ? (ce(), G(i, 1, 1, F), fe(), i = Vt(r), i.c(), V(i, 1), i.m(n.parentNode, n)) : i.p(r, s);
    },
    i(r) {
      o || (V(i), o = !0);
    },
    o(r) {
      G(i), o = !1;
    },
    d(r) {
      r && k(n), i.d(r);
    }
  };
}
function Di(e) {
  let t, n, o, i, r, s, a = (
    /*$store*/
    e[13]
  ), l = [];
  for (let f = 0; f < a.length; f += 1)
    l[f] = Ct(Yt(e, a, f));
  const u = (f) => G(l[f], 1, 1, () => {
    l[f] = null;
  });
  let h = (
    /*drawingEl*/
    e[4] && Nt(e)
  );
  return {
    c() {
      t = Y("svg"), n = Y("g");
      for (let f = 0; f < l.length; f += 1)
        l[f].c();
      o = Y("g"), h && h.c(), c(o, "class", "drawing"), c(t, "class", "a9s-annotationlayer"), yt(
        t,
        "drawing",
        /*tool*/
        e[12]
      );
    },
    m(f, m) {
      v(f, t, m), ae(t, n);
      for (let d = 0; d < l.length; d += 1)
        l[d] && l[d].m(n, null);
      ae(t, o), h && h.m(o, null), e[25](o), e[26](t), i = !0, r || (s = [
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
    p(f, m) {
      if (e = f, m[0] & /*$store, style, isEditable*/
      8322) {
        a = /*$store*/
        e[13];
        let d;
        for (d = 0; d < a.length; d += 1) {
          const g = Yt(e, a, d);
          l[d] ? (l[d].p(g, m), V(l[d], 1)) : (l[d] = Ct(g), l[d].c(), V(l[d], 1), l[d].m(n, null));
        }
        for (ce(), d = a.length; d < l.length; d += 1)
          u(d);
        fe();
      }
      /*drawingEl*/
      e[4] ? h ? (h.p(e, m), m[0] & /*drawingEl*/
      16 && V(h, 1)) : (h = Nt(e), h.c(), V(h, 1), h.m(o, null)) : h && (ce(), G(h, 1, 1, () => {
        h = null;
      }), fe()), (!i || m[0] & /*tool*/
      4096) && yt(
        t,
        "drawing",
        /*tool*/
        e[12]
      );
    },
    i(f) {
      if (!i) {
        for (let m = 0; m < a.length; m += 1)
          V(l[m]);
        V(h), i = !0;
      }
    },
    o(f) {
      l = l.filter(Boolean);
      for (let m = 0; m < l.length; m += 1)
        G(l[m]);
      G(h), i = !1;
    },
    d(f) {
      f && k(t), ct(l, f), h && h.d(), e[25](null), e[26](null), r = !1, se(s);
    }
  };
}
function Bi(e, t, n) {
  let o, i, r, s, a, l, u, h, f, m, d = F, g = () => (d(), d = Kt(y, (B) => n(14, m = B)), y);
  e.$$.on_destroy.push(() => d());
  let { drawingEnabled: E } = t, { image: A } = t, { preferredDrawingMode: b } = t, { state: p } = t, { style: w = void 0 } = t, { toolName: T = at().length > 0 ? at()[0] : void 0 } = t, { user: L } = t, D, C, y;
  _e(() => g(n(5, y = Jo(A, C))));
  const { selection: _, store: S } = p;
  pt(e, _, (B) => n(24, h = B)), pt(e, S, (B) => n(13, f = B));
  let O = null, I = null;
  const N = (B) => {
    S.unobserve(O);
    const Q = B.filter(({ editable: q }) => q).map(({ id: q }) => q);
    Q.length > 0 ? (n(6, I = Q.map((q) => S.getAnnotation(q))), O = (q) => {
      const { updated: he } = q.changes;
      n(6, I = he.map((Z) => Z.newValue));
    }, S.observe(O, { annotations: Q })) : n(6, I = null);
  }, U = (B) => {
    const Q = xt(), q = {
      id: Q,
      bodies: [],
      target: {
        annotation: Q,
        selector: B.detail,
        creator: L,
        created: /* @__PURE__ */ new Date()
      }
    };
    S.addAnnotation(q), _.setSelected(q.id);
  }, R = (B) => (Q) => {
    var me;
    const { target: q } = B, he = 10 * 60 * 1e3, Z = ((me = q.creator) == null ? void 0 : me.id) !== L.id || !q.created || (/* @__PURE__ */ new Date()).getTime() - q.created.getTime() > he;
    S.updateTarget({
      ...q,
      selector: Q.detail,
      created: Z ? q.created : /* @__PURE__ */ new Date(),
      updated: Z ? /* @__PURE__ */ new Date() : null,
      updatedBy: Z ? L : null
    });
  };
  function be(B) {
    Ye[B ? "unshift" : "push"](() => {
      D = B, n(4, D);
    });
  }
  function ke(B) {
    Ye[B ? "unshift" : "push"](() => {
      C = B, n(3, C);
    });
  }
  return e.$$set = (B) => {
    "drawingEnabled" in B && n(0, E = B.drawingEnabled), "image" in B && n(19, A = B.image), "preferredDrawingMode" in B && n(20, b = B.preferredDrawingMode), "state" in B && n(21, p = B.state), "style" in B && n(1, w = B.style), "toolName" in B && n(2, T = B.toolName), "user" in B && n(22, L = B.user);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*toolName*/
    4 && n(12, { tool: o, opts: i } = on(T), o, (n(23, i), n(2, T))), e.$$.dirty[0] & /*opts, preferredDrawingMode*/
    9437184 && n(11, r = (i == null ? void 0 : i.drawingMode) || b), e.$$.dirty[0] & /*svgEl*/
    8 && n(10, s = Ai(C)), e.$$.dirty[0] & /*svgEl*/
    8 && n(9, { onPointerDown: a, onPointerUp: l } = Ti(C, S), a, (n(8, l), n(3, C))), e.$$.dirty[0] & /*$selection*/
    16777216 && n(7, u = (B) => h.selected.find((Q) => Q.id === B.id && Q.editable)), e.$$.dirty[0] & /*$selection*/
    16777216 && N(h.selected);
  }, [
    E,
    w,
    T,
    C,
    D,
    y,
    I,
    u,
    l,
    a,
    s,
    r,
    o,
    f,
    m,
    _,
    S,
    U,
    R,
    A,
    b,
    p,
    L,
    i,
    h,
    be,
    ke
  ];
}
class Yi extends ee {
  constructor(t) {
    super(), $(
      this,
      t,
      Bi,
      Di,
      W,
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
function Ri(e, t, n, o, i) {
  rn(e, t, n || 0, o || e.length - 1, i || Xi);
}
function rn(e, t, n, o, i) {
  for (; o > n; ) {
    if (o - n > 600) {
      var r = o - n + 1, s = t - n + 1, a = Math.log(r), l = 0.5 * Math.exp(2 * a / 3), u = 0.5 * Math.sqrt(a * l * (r - l) / r) * (s - r / 2 < 0 ? -1 : 1), h = Math.max(n, Math.floor(t - s * l / r + u)), f = Math.min(o, Math.floor(t + (r - s) * l / r + u));
      rn(e, t, h, f, i);
    }
    var m = e[t], d = n, g = o;
    for (ve(e, n, t), i(e[o], m) > 0 && ve(e, n, o); d < g; ) {
      for (ve(e, d, g), d++, g--; i(e[d], m) < 0; )
        d++;
      for (; i(e[g], m) > 0; )
        g--;
    }
    i(e[n], m) === 0 ? ve(e, n, g) : (g++, ve(e, g, o)), g <= t && (n = g + 1), t <= g && (o = g - 1);
  }
}
function ve(e, t, n) {
  var o = e[t];
  e[t] = e[n], e[n] = o;
}
function Xi(e, t) {
  return e < t ? -1 : e > t ? 1 : 0;
}
class Ci {
  constructor(t = 9) {
    this._maxEntries = Math.max(4, t), this._minEntries = Math.max(2, Math.ceil(this._maxEntries * 0.4)), this.clear();
  }
  all() {
    return this._all(this.data, []);
  }
  search(t) {
    let n = this.data;
    const o = [];
    if (!Fe(t, n))
      return o;
    const i = this.toBBox, r = [];
    for (; n; ) {
      for (let s = 0; s < n.children.length; s++) {
        const a = n.children[s], l = n.leaf ? i(a) : a;
        Fe(t, l) && (n.leaf ? o.push(a) : ot(t, l) ? this._all(a, o) : r.push(a));
      }
      n = r.pop();
    }
    return o;
  }
  collides(t) {
    let n = this.data;
    if (!Fe(t, n))
      return !1;
    const o = [];
    for (; n; ) {
      for (let i = 0; i < n.children.length; i++) {
        const r = n.children[i], s = n.leaf ? this.toBBox(r) : r;
        if (Fe(t, s)) {
          if (n.leaf || ot(t, s))
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
        const h = Ni(t, o.children, n);
        if (h !== -1)
          return o.children.splice(h, 1), r.push(o), this._condense(r), this;
      }
      !u && !o.leaf && ot(o, i) ? (r.push(o), s.push(a), a = 0, l = o, o = o.children[0]) : l ? (a++, o = l.children[a], u = !1) : o = null;
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
      return a = Le(t.slice(n, o + 1)), Te(a, this.toBBox), a;
    i || (i = Math.ceil(Math.log(r) / Math.log(s)), s = Math.ceil(r / Math.pow(s, i - 1))), a = Le([]), a.leaf = !1, a.height = i;
    const l = Math.ceil(r / s), u = l * Math.ceil(Math.sqrt(s));
    Ht(t, n, o, u, this.compareMinX);
    for (let h = n; h <= o; h += u) {
      const f = Math.min(h + u - 1, o);
      Ht(t, h, f, l, this.compareMinY);
      for (let m = h; m <= f; m += l) {
        const d = Math.min(m + l - 1, f);
        a.children.push(this._build(t, m, d, i - 1));
      }
    }
    return Te(a, this.toBBox), a;
  }
  _chooseSubtree(t, n, o, i) {
    for (; i.push(n), !(n.leaf || i.length - 1 === o); ) {
      let r = 1 / 0, s = 1 / 0, a;
      for (let l = 0; l < n.children.length; l++) {
        const u = n.children[l], h = nt(u), f = Gi(t, u) - h;
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
    a.height = o.height, a.leaf = o.leaf, Te(o, this.toBBox), Te(a, this.toBBox), n ? t[n - 1].children.push(a) : this._splitRoot(o, a);
  }
  _splitRoot(t, n) {
    this.data = Le([t, n]), this.data.height = t.height + 1, this.data.leaf = !1, Te(this.data, this.toBBox);
  }
  _chooseSplitIndex(t, n, o) {
    let i, r = 1 / 0, s = 1 / 0;
    for (let a = n; a <= o - n; a++) {
      const l = Pe(t, 0, a, this.toBBox), u = Pe(t, a, o, this.toBBox), h = Hi(l, u), f = nt(l) + nt(u);
      h < r ? (r = h, i = a, s = f < s ? f : s) : h === r && f < s && (s = f, i = a);
    }
    return i || o - n;
  }
  // sorts node children by the best axis for split
  _chooseSplitAxis(t, n, o) {
    const i = t.leaf ? this.compareMinX : Ui, r = t.leaf ? this.compareMinY : Vi, s = this._allDistMargin(t, n, o, i), a = this._allDistMargin(t, n, o, r);
    s < a && t.children.sort(i);
  }
  // total margin of all possible split distributions where each node is at least m full
  _allDistMargin(t, n, o, i) {
    t.children.sort(i);
    const r = this.toBBox, s = Pe(t, 0, n, r), a = Pe(t, o - n, o, r);
    let l = He(s) + He(a);
    for (let u = n; u < o - n; u++) {
      const h = t.children[u];
      Ie(s, t.leaf ? r(h) : h), l += He(s);
    }
    for (let u = o - n - 1; u >= n; u--) {
      const h = t.children[u];
      Ie(a, t.leaf ? r(h) : h), l += He(a);
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
function Ni(e, t, n) {
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
function Ui(e, t) {
  return e.minX - t.minX;
}
function Vi(e, t) {
  return e.minY - t.minY;
}
function nt(e) {
  return (e.maxX - e.minX) * (e.maxY - e.minY);
}
function He(e) {
  return e.maxX - e.minX + (e.maxY - e.minY);
}
function Gi(e, t) {
  return (Math.max(t.maxX, e.maxX) - Math.min(t.minX, e.minX)) * (Math.max(t.maxY, e.maxY) - Math.min(t.minY, e.minY));
}
function Hi(e, t) {
  const n = Math.max(e.minX, t.minX), o = Math.max(e.minY, t.minY), i = Math.min(e.maxX, t.maxX), r = Math.min(e.maxY, t.maxY);
  return Math.max(0, i - n) * Math.max(0, r - o);
}
function ot(e, t) {
  return e.minX <= t.minX && e.minY <= t.minY && t.maxX <= e.maxX && t.maxY <= e.maxY;
}
function Fe(e, t) {
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
function Ht(e, t, n, o, i) {
  const r = [t, n];
  for (; r.length; ) {
    if (n = r.pop(), t = r.pop(), n - t <= o)
      continue;
    const s = t + Math.ceil((n - t) / o / 2) * o;
    Ri(e, s, t, n, i), r.push(t, s, s, n);
  }
}
const Fi = () => {
  const e = new Ci(), t = /* @__PURE__ */ new Map(), n = () => [...t.values()], o = () => {
    e.clear(), t.clear();
  }, i = (f) => {
    const { minX: m, minY: d, maxX: g, maxY: E } = f.selector.geometry.bounds, A = { minX: m, minY: d, maxX: g, maxY: E, target: f };
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
      }).map((E) => E.target).filter((E) => E.selector.type === H.RECTANGLE || wn(E.selector, f, m));
      if (g.length > 0)
        return g.sort((E, A) => st(E.selector) - st(A.selector)), g[0];
    },
    getIntersecting: (f, m, d, g) => e.search({
      minX: f,
      minY: m,
      maxX: f + d,
      maxY: m + g
    }).map((E) => E.target),
    insert: i,
    remove: r,
    set: (f, m = !0) => {
      m && o();
      const d = f.map((g) => {
        const { minX: E, minY: A, maxX: b, maxY: p } = g.selector.geometry.bounds;
        return { minX: E, minY: A, maxX: b, maxY: p, target: g };
      });
      d.forEach((g) => t.set(g.target.annotation, g)), e.load(d);
    },
    size: () => e.all().length,
    update: (f, m) => {
      r(f), i(m);
    }
  };
}, zi = (e) => {
  const t = to(), n = Fi(), o = jn(t, e.pointerSelectAction), i = zn(t), r = so();
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
}, ji = (e) => {
  const t = zi(e);
  return {
    ...t,
    store: no(t.store)
  };
}, Ki = (e) => {
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
}, qi = (e) => {
  const t = Ki(e), n = t > 0.6 ? "dark" : "light";
  return console.log(`[Annotorious] Image brightness: ${t.toFixed(1)}. Setting ${n} theme.`), n;
}, Ft = (e, t, n) => t.setAttribute("data-theme", n === "auto" ? qi(e) : n), Wi = (e, t) => ({
  ...e,
  drawingEnabled: e.drawingEnabled === void 0 ? t.drawingEnabled : e.drawingEnabled,
  drawingMode: e.drawingMode || t.drawingMode,
  pointerSelectAction: e.pointerSelectAction || t.pointerSelectAction,
  theme: e.theme || t.theme
}), zt = navigator.userAgent.indexOf("Mac OS X") !== -1, Zi = (e, t) => {
  const n = t || document, o = (s) => {
    s.key === "Z" && s.ctrlKey ? e.undo() : s.key === "Y" && s.ctrlKey && e.redo();
  }, i = (s) => {
    s.key === "z" && s.metaKey && (s.shiftKey ? e.redo() : e.undo());
  }, r = () => {
    zt ? n.removeEventListener("keydown", i) : n.removeEventListener("keydown", o);
  };
  return zt ? n.addEventListener("keydown", i) : n.addEventListener("keydown", o), {
    destroy: r
  };
};
const $i = (e, t = {}) => {
  if (!e)
    throw "Missing argument: image";
  const n = typeof e == "string" ? document.getElementById(e) : e, o = Wi(t, {
    drawingEnabled: !0,
    drawingMode: "drag",
    pointerSelectAction: $t.EDIT,
    theme: "light"
  }), i = ji(o), { selection: r, store: s } = i, a = ro(s), l = lo(
    i,
    a,
    o.adapter,
    o.autoSave
  ), u = document.createElement("DIV");
  u.style.position = "relative", u.style.display = "inline-block", n.style.display = "block", n.parentNode.insertBefore(u, n), u.appendChild(n);
  const h = Zi(a);
  let f = go();
  Ft(n, u, o.theme);
  const m = new Yi({
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
  m.$on("click", (y) => {
    const { originalEvent: _, annotation: S } = y.detail;
    S ? r.clickSelect(S.id, _) : r.isEmpty() || r.clear();
  });
  const d = co(i, a, o.adapter), g = () => {
    m.$destroy(), u.parentNode.insertBefore(n, u), u.parentNode.removeChild(u), h.destroy(), a.destroy();
  }, E = () => f, A = (y, _, S) => li(y, _, S), b = (y, _) => Co(y, _), p = (y) => {
    if (!on(y))
      throw `No drawing tool named ${y}`;
    m.$set({ toolName: y });
  }, w = (y) => m.$set({ drawingEnabled: y }), T = (y) => {
    console.warn("Filter not implemented yet");
  }, L = (y) => m.$set({ style: y }), D = (y) => Ft(n, u, y), C = (y) => {
    f = y, m.$set({ user: y });
  };
  return {
    ...d,
    destroy: g,
    getUser: E,
    listDrawingTools: at,
    on: l.on,
    off: l.off,
    registerDrawingTool: A,
    registerShapeEditor: b,
    setDrawingEnabled: w,
    setDrawingTool: p,
    setFilter: T,
    setStyle: L,
    setTheme: D,
    setUser: C,
    state: i
  };
};
export {
  Ke as Editor,
  Ho as EditorMount,
  Do as EllipseEditor,
  Xo as FreehandEditor,
  M as Handle,
  xi as IdentityTransform,
  To as PolygonEditor,
  ko as RectangleEditor,
  An as RectangleUtil,
  qo as RubberbandRectangle,
  Yi as SVGAnnotationLayer,
  H as ShapeType,
  zo as ToolMount,
  Ji as W3CImageFormat,
  Ti as addEventListeners,
  ye as boundsFromPoints,
  st as computeArea,
  $i as createImageAnnotator,
  zi as createImageAnnotatorState,
  Ai as createSVGTransform,
  ji as createSvelteImageAnnotatorState,
  qi as detectTheme,
  $e as distance,
  Jo as enableResponsive,
  Wi as fillDefaults,
  Lt as getEditor,
  on as getTool,
  Zi as initKeyboardCommands,
  wn as intersects,
  Qi as isTouch,
  at as listDrawingTools,
  Tn as parseFragmentSelector,
  Cn as parseSVGSelector,
  wo as parseW3CImageAnnotation,
  Co as registerEditor,
  je as registerShapeUtil,
  li as registerTool,
  Ki as sampleBrightness,
  Mn as serializeFragmentSelector,
  Nn as serializeSVGSelector,
  bo as serializeW3CImageAnnotation,
  Ft as setTheme
};
//# sourceMappingURL=annotorious.es.js.map
