function z() {
}
function tn(e, t) {
  for (const n in t)
    e[n] = t[n];
  return e;
}
function Gt(e) {
  return e();
}
function dt() {
  return /* @__PURE__ */ Object.create(null);
}
function oe(e) {
  e.forEach(Gt);
}
function H(e) {
  return typeof e == "function";
}
function Z(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function nn(e) {
  return Object.keys(e).length === 0;
}
function Ht(e, ...t) {
  if (e == null)
    return z;
  const n = e.subscribe(...t);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function ht(e, t, n) {
  e.$$.on_destroy.push(Ht(t, n));
}
function on(e, t, n, o) {
  if (e) {
    const i = Ft(e, t, n, o);
    return e[0](i);
  }
}
function Ft(e, t, n, o) {
  return e[1] && o ? tn(n.ctx.slice(), e[1](o(t))) : n.ctx;
}
function sn(e, t, n, o) {
  if (e[2] && o) {
    const i = e[2](o(n));
    if (t.dirty === void 0)
      return i;
    if (typeof i == "object") {
      const s = [], r = Math.max(t.dirty.length, i.length);
      for (let a = 0; a < r; a += 1)
        s[a] = t.dirty[a] | i[a];
      return s;
    }
    return t.dirty | i;
  }
  return t.dirty;
}
function rn(e, t, n, o, i, s) {
  if (i) {
    const r = Ft(t, n, o, s);
    e.p(r, i);
  }
}
function ln(e) {
  if (e.ctx.length > 32) {
    const t = [], n = e.ctx.length / 32;
    for (let o = 0; o < n; o++)
      t[o] = -1;
    return t;
  }
  return -1;
}
function fe(e, t) {
  e.appendChild(t);
}
function v(e, t, n) {
  e.insertBefore(t, n || null);
}
function k(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function st(e, t) {
  for (let n = 0; n < e.length; n += 1)
    e[n] && e[n].d(t);
}
function D(e) {
  return document.createElementNS("http://www.w3.org/2000/svg", e);
}
function zt(e) {
  return document.createTextNode(e);
}
function x() {
  return zt(" ");
}
function le() {
  return zt("");
}
function F(e, t, n, o) {
  return e.addEventListener(t, n, o), () => e.removeEventListener(t, n, o);
}
function c(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function an(e) {
  return Array.from(e.childNodes);
}
function mt(e, t, n) {
  e.classList[n ? "add" : "remove"](t);
}
function cn(e, t, { bubbles: n = !1, cancelable: o = !1 } = {}) {
  const i = document.createEvent("CustomEvent");
  return i.initCustomEvent(e, n, o, t), i;
}
let Be;
function Ie(e) {
  Be = e;
}
function jt() {
  if (!Be)
    throw new Error("Function called outside component initialization");
  return Be;
}
function Me(e) {
  jt().$$.on_mount.push(e);
}
function pe() {
  const e = jt();
  return (t, n, { cancelable: o = !1 } = {}) => {
    const i = e.$$.callbacks[t];
    if (i) {
      const s = cn(t, n, { cancelable: o });
      return i.slice().forEach((r) => {
        r.call(e, s);
      }), !s.defaultPrevented;
    }
    return !0;
  };
}
function ie(e, t) {
  const n = e.$$.callbacks[t.type];
  n && n.slice().forEach((o) => o.call(this, t));
}
const Ae = [], Pe = [];
let Se = [];
const gt = [], fn = /* @__PURE__ */ Promise.resolve();
let tt = !1;
function un() {
  tt || (tt = !0, fn.then(Kt));
}
function nt(e) {
  Se.push(e);
}
const qe = /* @__PURE__ */ new Set();
let ye = 0;
function Kt() {
  if (ye !== 0)
    return;
  const e = Be;
  do {
    try {
      for (; ye < Ae.length; ) {
        const t = Ae[ye];
        ye++, Ie(t), dn(t.$$);
      }
    } catch (t) {
      throw Ae.length = 0, ye = 0, t;
    }
    for (Ie(null), Ae.length = 0, ye = 0; Pe.length; )
      Pe.pop()();
    for (let t = 0; t < Se.length; t += 1) {
      const n = Se[t];
      qe.has(n) || (qe.add(n), n());
    }
    Se.length = 0;
  } while (Ae.length);
  for (; gt.length; )
    gt.pop()();
  tt = !1, qe.clear(), Ie(e);
}
function dn(e) {
  if (e.fragment !== null) {
    e.update(), oe(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(nt);
  }
}
function hn(e) {
  const t = [], n = [];
  Se.forEach((o) => e.indexOf(o) === -1 ? t.push(o) : n.push(o)), n.forEach((o) => o()), Se = t;
}
const Ge = /* @__PURE__ */ new Set();
let me;
function se() {
  me = {
    r: 0,
    c: [],
    p: me
    // parent group
  };
}
function re() {
  me.r || oe(me.c), me = me.p;
}
function V(e, t) {
  e && e.i && (Ge.delete(e), e.i(t));
}
function G(e, t, n, o) {
  if (e && e.o) {
    if (Ge.has(e))
      return;
    Ge.add(e), me.c.push(() => {
      Ge.delete(e), o && (n && e.d(1), o());
    }), e.o(t);
  } else
    o && o();
}
function ue(e) {
  e && e.c();
}
function ae(e, t, n, o) {
  const { fragment: i, after_update: s } = e.$$;
  i && i.m(t, n), o || nt(() => {
    const r = e.$$.on_mount.map(Gt).filter(H);
    e.$$.on_destroy ? e.$$.on_destroy.push(...r) : oe(r), e.$$.on_mount = [];
  }), s.forEach(nt);
}
function ce(e, t) {
  const n = e.$$;
  n.fragment !== null && (hn(n.after_update), oe(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function mn(e, t) {
  e.$$.dirty[0] === -1 && (Ae.push(e), un(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function te(e, t, n, o, i, s, r, a = [-1]) {
  const l = Be;
  Ie(e);
  const u = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: s,
    update: z,
    not_equal: i,
    bound: dt(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (l ? l.$$.context : [])),
    // everything else
    callbacks: dt(),
    dirty: a,
    skip_bound: !1,
    root: t.target || l.$$.root
  };
  r && r(u.root);
  let m = !1;
  if (u.ctx = n ? n(e, t.props || {}, (f, h, ...d) => {
    const g = d.length ? d[0] : h;
    return u.ctx && i(u.ctx[f], u.ctx[f] = g) && (!u.skip_bound && u.bound[f] && u.bound[f](g), m && mn(e, f)), h;
  }) : [], u.update(), m = !0, oe(u.before_update), u.fragment = o ? o(u.ctx) : !1, t.target) {
    if (t.hydrate) {
      const f = an(t.target);
      u.fragment && u.fragment.l(f), f.forEach(k);
    } else
      u.fragment && u.fragment.c();
    t.intro && V(e.$$.fragment), ae(e, t.target, t.anchor, t.customElement), Kt();
  }
  Ie(l);
}
class ne {
  $destroy() {
    ce(this, 1), this.$destroy = z;
  }
  $on(t, n) {
    if (!H(n))
      return z;
    const o = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return o.push(n), () => {
      const i = o.indexOf(n);
      i !== -1 && o.splice(i, 1);
    };
  }
  $set(t) {
    this.$$set && !nn(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
var q = /* @__PURE__ */ ((e) => (e.ELLIPSE = "ELLIPSE", e.POLYGON = "POLYGON", e.RECTANGLE = "RECTANGLE", e.FREEHAND = "FREEHAND", e))(q || {});
const rt = {}, lt = (e, t) => rt[e] = t, ot = (e) => rt[e.type].area(e), gn = (e, t, n) => rt[e.type].intersects(e, t, n), He = (e) => {
  let t = 1 / 0, n = 1 / 0, o = -1 / 0, i = -1 / 0;
  return e.forEach(([s, r]) => {
    t = Math.min(t, s), n = Math.min(n, r), o = Math.max(o, s), i = Math.max(i, r);
  }), { minX: t, minY: n, maxX: o, maxY: i };
}, pn = {
  area: (e) => Math.PI * e.geometry.rx * e.geometry.ry,
  intersects: (e, t, n) => {
    const { cx: o, cy: i, rx: s, ry: r } = e.geometry, a = 0, l = Math.cos(a), u = Math.sin(a), m = t - o, f = n - i, h = l * m + u * f, d = u * m - l * f;
    return h * h / (s * s) + d * d / (r * r) <= 1;
  }
};
lt(q.ELLIPSE, pn);
const _n = {
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
      const a = o[s][0], l = o[s][1], u = o[r][0], m = o[r][1];
      l > n != m > n && t < (u - a) * (n - l) / (m - l) + a && (i = !i);
    }
    return i;
  }
};
lt(q.POLYGON, _n);
const yn = {
  area: (e) => e.geometry.w * e.geometry.h,
  intersects: (e, t, n) => t >= e.geometry.x && t <= e.geometry.x + e.geometry.w && n >= e.geometry.y && n <= e.geometry.y + e.geometry.h
};
lt(q.RECTANGLE, yn);
const wn = (e, t = !1) => {
  const n = typeof e == "string" ? e : e.value, o = /^(xywh)=(pixel|percent)?:?(.+?),(.+?),(.+?),(.+)*/g, i = [...n.matchAll(o)][0], [s, r, a, l, u, m, f] = i;
  if (r !== "xywh")
    throw new Error("Unsupported MediaFragment: " + n);
  if (a && a !== "pixel")
    throw new Error(`Unsupported MediaFragment unit: ${a}`);
  const [h, d, g, b] = [l, u, m, f].map(parseFloat);
  return {
    type: q.RECTANGLE,
    geometry: {
      x: h,
      y: d,
      w: g,
      h: b,
      bounds: {
        minX: h,
        minY: t ? d - b : d,
        maxX: h + g,
        maxY: t ? d : d + b
      }
    }
  };
}, bn = (e) => {
  const { x: t, y: n, w: o, h: i } = e;
  return {
    type: "FragmentSelector",
    conformsTo: "http://www.w3.org/TR/media-frags/",
    value: `xywh=pixel:${t},${n},${o},${i}`
  };
}, qt = "http://www.w3.org/2000/svg", pt = (e) => {
  const t = (o) => {
    Array.from(o.attributes).forEach((i) => {
      i.name.startsWith("on") && o.removeAttribute(i.name);
    });
  }, n = e.getElementsByTagName("script");
  return Array.from(n).reverse().forEach((o) => o.parentNode.removeChild(o)), Array.from(e.querySelectorAll("*")).forEach(t), e;
}, En = (e) => {
  const o = new XMLSerializer().serializeToString(e.documentElement).replace("<svg>", `<svg xmlns="${qt}">`);
  return new DOMParser().parseFromString(o, "image/svg+xml").documentElement;
}, An = (e) => {
  const n = new DOMParser().parseFromString(e, "image/svg+xml"), o = n.lookupPrefix(qt), i = n.lookupNamespaceURI(null);
  return o || i ? pt(n).firstChild : pt(En(n)).firstChild;
}, Tn = (e) => {
  const [t, n, o] = e.match(/(<polygon points=["|'])([^("|')]*)/) || [];
  if (!o)
    return;
  const i = o.split(" ").map((s) => s.split(",").map(parseFloat));
  return {
    type: q.POLYGON,
    geometry: {
      points: i,
      bounds: He(i)
    }
  };
}, Sn = (e) => {
  const t = An(e), n = parseFloat(t.getAttribute("cx")), o = parseFloat(t.getAttribute("cy")), i = parseFloat(t.getAttribute("rx")), s = parseFloat(t.getAttribute("ry")), r = {
    minX: n - i,
    minY: o - s,
    maxX: n + i,
    maxY: o + s
  };
  return {
    type: q.ELLIPSE,
    geometry: {
      cx: n,
      cy: o,
      rx: i,
      ry: s,
      bounds: r
    }
  };
}, Mn = (e) => {
  const t = typeof e == "string" ? e : e.value;
  if (t.includes("<polygon points="))
    return Tn(t);
  if (t.includes("<ellipse "))
    return Sn(t);
}, Ln = (e) => {
  let t;
  if (e.type === q.POLYGON) {
    const n = e.geometry, { points: o } = n;
    t = `<svg><polygon points="${o.map((i) => i.join(",")).join(" ")}" /></svg>`;
  } else if (e.type === q.ELLIPSE) {
    const n = e.geometry;
    t = `<svg><ellipse cx="${n.cx}" cy="${n.cy}" rx="${n.rx}" ry="${n.ry}" /></svg>`;
  }
  if (t)
    return { type: "SvgSelector", value: t };
  throw `Unsupported shape type: ${e.type}`;
};
let Ue;
const On = new Uint8Array(16);
function kn() {
  if (!Ue && (Ue = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Ue))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Ue(On);
}
const J = [];
for (let e = 0; e < 256; ++e)
  J.push((e + 256).toString(16).slice(1));
function vn(e, t = 0) {
  return J[e[t + 0]] + J[e[t + 1]] + J[e[t + 2]] + J[e[t + 3]] + "-" + J[e[t + 4]] + J[e[t + 5]] + "-" + J[e[t + 6]] + J[e[t + 7]] + "-" + J[e[t + 8]] + J[e[t + 9]] + "-" + J[e[t + 10]] + J[e[t + 11]] + J[e[t + 12]] + J[e[t + 13]] + J[e[t + 14]] + J[e[t + 15]];
}
const In = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), _t = {
  randomUUID: In
};
function Wt(e, t, n) {
  if (_t.randomUUID && !t && !e)
    return _t.randomUUID();
  e = e || {};
  const o = e.random || (e.rng || kn)();
  if (o[6] = o[6] & 15 | 64, o[8] = o[8] & 63 | 128, t) {
    n = n || 0;
    for (let i = 0; i < 16; ++i)
      t[n + i] = o[i];
    return t;
  }
  return vn(o);
}
var yt = Object.prototype.hasOwnProperty;
function ge(e, t) {
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
        for (; o-- && ge(e[o], t[o]); )
          ;
      return o === -1;
    }
    if (!n || typeof e == "object") {
      o = 0;
      for (n in e)
        if (yt.call(e, n) && ++o && !yt.call(t, n) || !(n in t) || !ge(e[n], t[n]))
          return !1;
      return Object.keys(t).length === o;
    }
  }
  return e !== e && t !== t;
}
function We() {
}
function Bn(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
const we = [];
function at(e, t = We) {
  let n;
  const o = /* @__PURE__ */ new Set();
  function i(a) {
    if (Bn(e, a) && (e = a, n)) {
      const l = !we.length;
      for (const u of o)
        u[1](), we.push(u, e);
      if (l) {
        for (let u = 0; u < we.length; u += 2)
          we[u][0](we[u + 1]);
        we.length = 0;
      }
    }
  }
  function s(a) {
    i(a(e));
  }
  function r(a, l = We) {
    const u = [a, l];
    return o.add(u), o.size === 1 && (n = t(i) || We), a(e), () => {
      o.delete(u), o.size === 0 && n && (n(), n = null);
    };
  }
  return { set: i, update: s, subscribe: r };
}
const Pn = (e) => {
  const { subscribe: t, set: n } = at(null);
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
var Jt = /* @__PURE__ */ ((e) => (e.EDIT = "EDIT", e.SELECT = "SELECT", e.NONE = "NONE", e))(Jt || {});
const Je = { selected: [] }, Yn = (e, t = "EDIT") => {
  const { subscribe: n, set: o } = at(Je);
  let i = Je;
  n((f) => i = f);
  const s = () => o(Je), r = () => {
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
      const g = Xn(d, t);
      o(g === "EDIT" ? { selected: [{ id: f, editable: !0 }], pointerEvent: h } : g === "SELECT" ? { selected: [{ id: f }], pointerEvent: h } : { selected: [], pointerEvent: h });
    } else
      console.warn("Invalid selection: " + f);
  }, u = (f, h = !0) => {
    const d = Array.isArray(f) ? f : [f], g = d.map((b) => e.getAnnotation(b)).filter((b) => b);
    o({ selected: g.map(({ id: b }) => ({ id: b, editable: h })) }), g.length !== d.length && console.warn("Invalid selection", f);
  }, m = (f) => {
    if (i.selected.length === 0)
      return !1;
    const { selected: h } = i;
    h.filter(({ id: d }) => f.includes(d)).length > 0 && o({ selected: h.filter(({ id: d }) => !f.includes(d)) });
  };
  return e.observe(({ changes: f }) => m(f.deleted.map((h) => h.id))), {
    clear: s,
    clickSelect: l,
    get selected() {
      return i ? [...i.selected] : null;
    },
    get pointerEvent() {
      return i ? i.pointerEvent : null;
    },
    isEmpty: r,
    isSelected: a,
    setSelected: u,
    subscribe: n
  };
}, Xn = (e, t) => typeof t == "function" ? t(e) || "EDIT" : t || "EDIT", Dn = [];
for (let e = 0; e < 256; ++e)
  Dn.push((e + 256).toString(16).slice(1));
typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const Rn = (e, t) => {
  const n = new Set(e.bodies.map((o) => o.id));
  return t.bodies.filter((o) => !n.has(o.id));
}, Cn = (e, t) => {
  const n = new Set(t.bodies.map((o) => o.id));
  return e.bodies.filter((o) => !n.has(o.id));
}, Un = (e, t) => t.bodies.map((n) => {
  const o = e.bodies.find((i) => i.id === n.id);
  return { newBody: n, oldBody: o && !ge(o, n) ? o : void 0 };
}).filter(({ oldBody: n }) => n), Nn = (e, t) => !ge(e.target, t.target), Zt = (e, t) => {
  const n = Rn(e, t), o = Cn(e, t), i = Un(e, t);
  return {
    oldValue: e,
    newValue: t,
    bodiesCreated: n.length > 0 ? n : void 0,
    bodiesDeleted: o.length > 0 ? o : void 0,
    bodiesUpdated: i.length > 0 ? i : void 0,
    targetUpdated: Nn(e, t) ? { oldTarget: e.target, newTarget: t.target } : void 0
  };
};
var j = /* @__PURE__ */ ((e) => (e.LOCAL = "LOCAL", e.REMOTE = "REMOTE", e))(j || {});
const Vn = (e, t) => {
  var n, o;
  const { changes: i, origin: s } = t;
  if (!(!e.options.origin || e.options.origin === s))
    return !1;
  if (e.options.ignore) {
    const { ignore: r } = e.options, a = (l) => (l == null ? void 0 : l.length) > 0;
    if (!(a(i.created) || a(i.deleted))) {
      const l = (n = i.updated) == null ? void 0 : n.some((m) => a(m.bodiesCreated) || a(m.bodiesDeleted) || a(m.bodiesUpdated)), u = (o = i.updated) == null ? void 0 : o.some((m) => m.targetUpdated);
      if (r === "BODY_ONLY" && l && !u || r === "TARGET_ONLY" && u && !l)
        return !1;
    }
  }
  if (e.options.annotations) {
    const r = /* @__PURE__ */ new Set([
      ...i.created.map((a) => a.id),
      ...i.deleted.map((a) => a.id),
      ...i.updated.map(({ oldValue: a }) => a.id)
    ]);
    return !!(Array.isArray(e.options.annotations) ? e.options.annotations : [e.options.annotations]).find((a) => r.has(a));
  } else
    return !0;
}, Gn = (e, t) => {
  const n = new Set((e.created || []).map((f) => f.id)), o = new Set((e.updated || []).map(({ newValue: f }) => f.id)), i = new Set((t.created || []).map((f) => f.id)), s = new Set((t.deleted || []).map((f) => f.id)), r = new Set((t.updated || []).map(({ oldValue: f }) => f.id)), a = new Set((t.updated || []).filter(({ oldValue: f }) => n.has(f.id) || o.has(f.id)).map(({ oldValue: f }) => f.id)), l = [
    ...(e.created || []).filter((f) => !s.has(f.id)).map((f) => r.has(f.id) ? t.updated.find(({ oldValue: h }) => h.id === f.id).newValue : f),
    ...t.created || []
  ], u = [
    ...(e.deleted || []).filter((f) => !i.has(f.id)),
    ...(t.deleted || []).filter((f) => !n.has(f.id))
  ], m = [
    ...(e.updated || []).filter(({ newValue: f }) => !s.has(f.id)).map((f) => {
      const { oldValue: h, newValue: d } = f;
      if (r.has(d.id)) {
        const g = t.updated.find((b) => b.oldValue.id === d.id).newValue;
        return Zt(h, g);
      } else
        return f;
    }),
    ...(t.updated || []).filter(({ oldValue: f }) => !a.has(f.id))
  ];
  return { created: l, deleted: u, updated: m };
}, Hn = (e) => e.id !== void 0, Fn = () => {
  const e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map(), n = [], o = (p, _ = {}) => n.push({ onChange: p, options: _ }), i = (p) => {
    const _ = n.findIndex((E) => E.onChange == p);
    _ > -1 && n.splice(_, 1);
  }, s = (p, _) => {
    const E = {
      origin: p,
      changes: {
        created: _.created || [],
        updated: _.updated || [],
        deleted: _.deleted || []
      },
      state: [...e.values()]
    };
    n.forEach((M) => {
      Vn(M, E) && M.onChange(E);
    });
  }, r = (p, _ = j.LOCAL) => {
    if (e.get(p.id))
      throw Error(`Cannot add annotation ${p.id} - exists already`);
    e.set(p.id, p), p.bodies.forEach((E) => t.set(E.id, p.id)), s(_, { created: [p] });
  }, a = (p, _) => {
    const E = typeof p == "string" ? _ : p, M = typeof p == "string" ? p : p.id, B = e.get(M);
    if (B) {
      const C = Zt(B, E);
      return M === E.id ? e.set(M, E) : (e.delete(M), e.set(E.id, E)), B.bodies.forEach((U) => t.delete(U.id)), E.bodies.forEach((U) => t.set(U.id, E.id)), C;
    } else
      console.warn(`Cannot update annotation ${M} - does not exist`);
  }, l = (p, _ = j.LOCAL, E = j.LOCAL) => {
    const M = Hn(_) ? E : _, B = a(p, _);
    B && s(M, { updated: [B] });
  }, u = (p, _ = j.LOCAL) => {
    const E = p.reduce((M, B) => {
      const C = a(B);
      return C ? [...M, C] : M;
    }, []);
    E.length > 0 && s(_, { updated: E });
  }, m = (p, _ = j.LOCAL) => {
    const E = e.get(p.annotation);
    if (E) {
      const M = {
        ...E,
        bodies: [...E.bodies, p]
      };
      e.set(E.id, M), t.set(p.id, M.id), s(_, { updated: [{
        oldValue: E,
        newValue: M,
        bodiesCreated: [p]
      }] });
    } else
      console.warn(`Attempt to add body to missing annotation: ${p.annotation}`);
  }, f = () => [...e.values()], h = (p = j.LOCAL) => {
    const _ = [...e.values()];
    e.clear(), t.clear(), s(p, { deleted: _ });
  }, d = (p, _ = !0, E = j.LOCAL) => {
    if (_) {
      const M = [...e.values()];
      e.clear(), t.clear(), p.forEach((B) => {
        e.set(B.id, B), B.bodies.forEach((C) => t.set(C.id, B.id));
      }), s(E, { created: p, deleted: M });
    } else {
      const M = p.reduce((B, C) => {
        const U = e.get(C.id);
        return U ? [...B, U] : B;
      }, []);
      if (M.length > 0)
        throw Error(`Bulk insert would overwrite the following annotations: ${M.map((B) => B.id).join(", ")}`);
      p.forEach((B) => {
        e.set(B.id, B), B.bodies.forEach((C) => t.set(C.id, B.id));
      }), s(E, { created: p });
    }
  }, g = (p) => {
    const _ = typeof p == "string" ? p : p.id, E = e.get(_);
    if (E)
      return e.delete(_), E.bodies.forEach((M) => t.delete(M.id)), E;
    console.warn(`Attempt to delete missing annotation: ${_}`);
  }, b = (p, _ = j.LOCAL) => {
    const E = g(p);
    E && s(_, { deleted: [E] });
  }, T = (p, _ = j.LOCAL) => {
    const E = p.reduce((M, B) => {
      const C = g(B);
      return C ? [...M, C] : M;
    }, []);
    E.length > 0 && s(_, { deleted: E });
  }, w = (p, _ = j.LOCAL) => {
    const E = e.get(p.annotation);
    if (E) {
      const M = E.bodies.find((B) => B.id === p.id);
      if (M) {
        t.delete(M.id);
        const B = {
          ...E,
          bodies: E.bodies.filter((C) => C.id !== p.id)
        };
        e.set(E.id, B), s(_, { updated: [{
          oldValue: E,
          newValue: B,
          bodiesDeleted: [M]
        }] });
      } else
        console.warn(`Attempt to delete missing body ${p.id} from annotation ${p.annotation}`);
    } else
      console.warn(`Attempt to delete body from missing annotation ${p.annotation}`);
  }, y = (p) => {
    const _ = e.get(p);
    return _ ? { ..._ } : void 0;
  }, A = (p) => {
    const _ = t.get(p);
    if (_) {
      const E = y(_).bodies.find((M) => M.id === p);
      if (E)
        return E;
      console.error(`Store integrity error: body ${p} in index, but not in annotation`);
    } else
      console.warn(`Attempt to retrieve missing body: ${p}`);
  }, S = (p, _) => {
    if (p.annotation !== _.annotation)
      throw "Annotation integrity violation: annotation ID must be the same when updating bodies";
    const E = e.get(p.annotation);
    if (E) {
      const M = E.bodies.find((C) => C.id === p.id), B = {
        ...E,
        bodies: E.bodies.map((C) => C.id === M.id ? _ : C)
      };
      return e.set(E.id, B), M.id !== _.id && (t.delete(M.id), t.set(_.id, B.id)), {
        oldValue: E,
        newValue: B,
        bodiesUpdated: [{ oldBody: M, newBody: _ }]
      };
    } else
      console.warn(`Attempt to add body to missing annotation ${p.annotation}`);
  }, O = (p, _, E = j.LOCAL) => {
    const M = S(p, _);
    s(E, { updated: [M] });
  }, Y = (p, _ = j.LOCAL) => {
    const E = p.map((M) => S({ id: M.id, annotation: M.annotation }, M));
    s(_, { updated: E });
  }, N = (p) => {
    const _ = e.get(p.annotation);
    if (_) {
      const E = {
        ..._,
        target: {
          ..._.target,
          ...p
        }
      };
      return e.set(_.id, E), {
        oldValue: _,
        newValue: E,
        targetUpdated: {
          oldTarget: _.target,
          newTarget: p
        }
      };
    } else
      console.warn(`Attempt to update target on missing annotation: ${p.annotation}`);
  };
  return {
    addAnnotation: r,
    addBody: m,
    all: f,
    bulkAddAnnotation: d,
    bulkDeleteAnnotation: T,
    bulkUpdateAnnotation: u,
    bulkUpdateBodies: Y,
    bulkUpdateTargets: (p, _ = j.LOCAL) => {
      const E = p.map(N).filter((M) => M);
      E.length > 0 && s(_, { updated: E });
    },
    clear: h,
    deleteAnnotation: b,
    deleteBody: w,
    getAnnotation: y,
    getBody: A,
    observe: o,
    unobserve: i,
    updateAnnotation: l,
    updateBody: O,
    updateTarget: (p, _ = j.LOCAL) => {
      const E = N(p);
      E && s(_, { updated: [E] });
    }
  };
}, zn = (e) => ({
  ...e,
  subscribe: (t) => {
    const n = (o) => t(o.state);
    return e.observe(n), t(e.all()), () => e.unobserve(n);
  }
});
let jn = () => ({
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
const Kn = 250, qn = (e) => {
  const t = jn(), n = [];
  let o = -1, i = !1, s = 0;
  const r = (d) => {
    if (!i) {
      const { changes: g } = d, b = performance.now();
      if (b - s > Kn)
        n.splice(o + 1), n.push(g), o = n.length - 1;
      else {
        const T = n.length - 1;
        n[T] = Gn(n[T], g);
      }
      s = b;
    }
    i = !1;
  };
  e.observe(r, { origin: j.LOCAL });
  const a = (d) => (d == null ? void 0 : d.length) > 0 && e.bulkDeleteAnnotation(d), l = (d) => (d == null ? void 0 : d.length) > 0 && e.bulkAddAnnotation(d, !1), u = (d) => (d == null ? void 0 : d.length) > 0 && e.bulkUpdateAnnotation(d.map(({ oldValue: g }) => g)), m = (d) => (d == null ? void 0 : d.length) > 0 && e.bulkUpdateAnnotation(d.map(({ newValue: g }) => g)), f = (d) => (d == null ? void 0 : d.length) > 0 && e.bulkAddAnnotation(d, !1), h = (d) => (d == null ? void 0 : d.length) > 0 && e.bulkDeleteAnnotation(d);
  return {
    canRedo: () => n.length - 1 > o,
    canUndo: () => o > -1,
    destroy: () => e.unobserve(r),
    on: (d, g) => t.on(d, g),
    redo: () => {
      if (n.length - 1 > o) {
        i = !0;
        const { created: d, updated: g, deleted: b } = n[o + 1];
        l(d), m(g), h(b), t.emit("redo", n[o + 1]), o += 1;
      }
    },
    undo: () => {
      if (o > -1) {
        i = !0;
        const { created: d, updated: g, deleted: b } = n[o];
        a(d), u(g), f(b), t.emit("undo", n[o]), o -= 1;
      }
    }
  };
}, Wn = () => {
  const { subscribe: e, set: t } = at([]);
  return {
    subscribe: e,
    set: t
  };
}, Jn = (e, t, n, o) => {
  const { store: i, selection: s, hover: r, viewport: a } = e, l = /* @__PURE__ */ new Map();
  let u = [], m, f;
  const h = (w, y) => {
    l.has(w) ? l.get(w).push(y) : l.set(w, [y]);
  }, d = (w, y) => {
    const A = l.get(w);
    A && A.indexOf(y) > 0 && A.splice(A.indexOf(y), 1);
  }, g = (w, y, A) => {
    l.has(w) && setTimeout(() => {
      l.get(w).forEach((S) => {
        if (n) {
          const O = Array.isArray(y) ? y.map((N) => n.serialize(N)) : n.serialize(y), Y = A ? A instanceof PointerEvent ? A : n.serialize(A) : void 0;
          S(O, Y);
        } else
          S(y, A);
      });
    }, 1);
  }, b = () => {
    const { selected: w } = s, y = w.map(({ id: A }) => i.getAnnotation(A));
    y.forEach((A) => {
      const S = u.find((O) => O.id === A.id);
      (!S || !ge(S, A)) && g("updateAnnotation", A, S);
    }), u = u.map((A) => y.find(({ id: O }) => O === A.id) || A);
  };
  s.subscribe(({ selected: w }) => {
    if (!(u.length === 0 && w.length === 0)) {
      if (u.length === 0 && w.length > 0)
        u = w.map(({ id: y }) => i.getAnnotation(y));
      else if (u.length > 0 && w.length === 0)
        u.forEach((y) => {
          const A = i.getAnnotation(y.id);
          A && !ge(A, y) && g("updateAnnotation", A, y);
        }), u = [];
      else {
        const y = new Set(u.map((S) => S.id)), A = new Set(w.map(({ id: S }) => S));
        u.filter((S) => !A.has(S.id)).forEach((S) => {
          const O = i.getAnnotation(S.id);
          O && !ge(O, S) && g("updateAnnotation", O, S);
        }), u = [
          // Remove annotations that were deselected
          ...u.filter((S) => A.has(S.id)),
          // Add editable annotations that were selected
          ...w.filter(({ id: S }) => !y.has(S)).map(({ id: S }) => i.getAnnotation(S))
        ];
      }
      g("selectionChanged", u);
    }
  }), r.subscribe((w) => {
    !m && w ? g("mouseEnterAnnotation", i.getAnnotation(w)) : m && !w ? g("mouseLeaveAnnotation", i.getAnnotation(m)) : m && w && (g("mouseLeaveAnnotation", i.getAnnotation(m)), g("mouseEnterAnnotation", i.getAnnotation(w))), m = w;
  }), a == null || a.subscribe((w) => g("viewportIntersect", w.map(i.getAnnotation))), i.observe((w) => {
    o && (f && clearTimeout(f), f = setTimeout(b, 1e3));
    const { created: y, deleted: A } = w.changes;
    y.forEach((S) => g("createAnnotation", S)), A.forEach((S) => g("deleteAnnotation", S)), w.changes.updated.filter((S) => [
      ...S.bodiesCreated || [],
      ...S.bodiesDeleted || [],
      ...S.bodiesUpdated || []
    ].length > 0).forEach(({ oldValue: S, newValue: O }) => {
      const Y = u.find((N) => N.id === S.id) || S;
      u = u.map((N) => N.id === S.id ? O : N), g("updateAnnotation", O, Y);
    });
  }, { origin: j.LOCAL }), i.observe((w) => {
    if (u) {
      const y = new Set(u.map((S) => S.id)), A = w.changes.updated.filter(({ newValue: S }) => y.has(S.id)).map(({ newValue: S }) => S);
      A.length > 0 && (u = u.map((S) => A.find((Y) => Y.id === S.id) || S));
    }
  }, { origin: j.REMOTE });
  const T = (w) => (y) => {
    const { created: A, deleted: S, updated: O } = y;
    A.forEach((Y) => g("createAnnotation", Y)), S.forEach((Y) => g("deleteAnnotation", Y)), w ? O.forEach((Y) => g("updateAnnotation", Y.oldValue, Y.newValue)) : O.forEach((Y) => g("updateAnnotation", Y.newValue, Y.oldValue));
  };
  return t.on("undo", T(!0)), t.on("redo", T(!1)), { on: h, off: d, emit: g };
}, Zn = (e) => (t) => t.reduce((n, o) => {
  const { parsed: i, error: s } = e.parse(o);
  return s ? {
    parsed: n.parsed,
    failed: [...n.failed, o]
  } : {
    parsed: [...n.parsed, i],
    failed: n.failed
  };
}, { parsed: [], failed: [] }), Qn = (e, t, n) => {
  const { store: o, selection: i } = e, s = (T) => {
    if (n) {
      const { parsed: w, error: y } = n.parse(T);
      w ? o.addAnnotation(w, j.REMOTE) : console.error(y);
    } else
      o.addAnnotation(T, j.REMOTE);
  }, r = () => i.clear(), a = () => o.clear(), l = (T) => {
    const w = o.getAnnotation(T);
    return n && w ? n.serialize(w) : w;
  }, u = () => n ? o.all().map(n.serialize) : o.all(), m = () => {
    var T;
    const w = (((T = i.selected) == null ? void 0 : T.map((y) => y.id)) || []).map((y) => o.getAnnotation(y));
    return n ? w.map(n.serialize) : w;
  }, f = (T) => fetch(T).then((w) => w.json()).then((w) => (d(w), w)), h = (T) => {
    if (typeof T == "string") {
      const w = o.getAnnotation(T);
      return o.deleteAnnotation(T), n ? n.serialize(w) : w;
    } else {
      const w = n ? n.parse(T).parsed : T;
      return o.deleteAnnotation(w), T;
    }
  }, d = (T) => {
    if (n) {
      const { parsed: w, failed: y } = Zn(n)(T);
      y.length > 0 && console.warn(`Discarded ${y.length} invalid annotations`, y), o.bulkAddAnnotation(w, !0, j.REMOTE);
    } else
      o.bulkAddAnnotation(T, !0, j.REMOTE);
  }, g = (T) => {
    T ? i.setSelected(T) : i.clear();
  }, b = (T) => {
    if (n) {
      const w = n.parse(T).parsed, y = n.serialize(o.getAnnotation(w.id));
      return o.updateAnnotation(w), y;
    } else {
      const w = o.getAnnotation(T.id);
      return o.updateAnnotation(T), w;
    }
  };
  return {
    addAnnotation: s,
    cancelSelected: r,
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
    setSelected: g,
    undo: t.undo,
    updateAnnotation: b
  };
};
let xn = (e) => crypto.getRandomValues(new Uint8Array(e)), $n = (e, t, n) => {
  let o = (2 << Math.log(e.length - 1) / Math.LN2) - 1, i = -~(1.6 * o * t / e.length);
  return (s = t) => {
    let r = "";
    for (; ; ) {
      let a = n(i), l = i;
      for (; l--; )
        if (r += e[a[l] & o] || "", r.length === s)
          return r;
    }
  };
}, eo = (e, t = 21) => $n(e, t, xn), to = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
const no = () => ({ isGuest: !0, id: eo("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_", 20)() }), oo = (e) => {
  const t = JSON.stringify(e);
  let n = 0;
  for (let o = 0, i = t.length; o < i; o++) {
    let s = t.charCodeAt(o);
    n = (n << 5) - n + s, n |= 0;
  }
  return `${n}`;
}, Qt = (e) => e ? typeof e == "object" ? { ...e } : e : void 0, io = (e, t) => (Array.isArray(e) ? e : [e]).map((n) => {
  const { id: o, type: i, purpose: s, value: r, created: a, creator: l, ...u } = n;
  return {
    id: o || `temp-${oo(n)}`,
    annotation: t,
    type: i,
    purpose: s,
    value: r,
    created: a ? new Date(a) : void 0,
    creator: Qt(l),
    ...u
  };
}), so = (e) => e.map((t) => {
  var n;
  const o = { ...t };
  return delete o.annotation, (n = o.id) != null && n.startsWith("temp-") && delete o.id, o;
});
to();
const Oi = (e, t = !1) => ({ parse: (i) => ro(i, t), serialize: (i) => lo(i, e) }), ro = (e, t = !1) => {
  const n = e.id || Wt(), {
    creator: o,
    created: i,
    updatedBy: s,
    updated: r,
    body: a,
    ...l
  } = e, u = io(a, n), m = Array.isArray(e.target) ? e.target[0] : e.target, f = Array.isArray(m.selector) ? m.selector[0] : m.selector, h = f.type === "FragmentSelector" ? wn(f, t) : f.type === "SvgSelector" ? Mn(f) : void 0;
  return h ? {
    parsed: {
      ...l,
      id: n,
      bodies: u,
      target: {
        created: i ? new Date(i) : void 0,
        creator: Qt(o),
        ...l.target,
        annotation: n,
        selector: h
      }
    }
  } : {
    error: Error(`Unknown selector type: ${f.type}`)
  };
}, lo = (e, t) => {
  const {
    selector: n,
    creator: o,
    created: i,
    updated: s,
    updatedBy: r,
    ...a
  } = e.target, l = n.type == q.RECTANGLE ? bn(n.geometry) : Ln(n);
  return {
    ...e,
    "@context": "http://www.w3.org/ns/anno.jsonld",
    id: e.id,
    type: "Annotation",
    body: so(e.bodies),
    creator: o,
    created: i == null ? void 0 : i.toISOString(),
    target: {
      ...a,
      source: t,
      selector: l
    }
  };
};
function wt(e, t, n) {
  const o = e.slice();
  return o[11] = t[n], o[13] = n, o;
}
function bt(e) {
  let t, n, o, i, s;
  return {
    c() {
      t = D("rect"), c(t, "class", "a9s-corner-handle"), c(t, "x", n = /*point*/
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
    m(r, a) {
      v(r, t, a), i || (s = F(t, "pointerdown", function() {
        H(
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
    p(r, a) {
      e = r, a & /*geom, handleSize*/
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
    d(r) {
      r && k(t), i = !1, s();
    }
  };
}
function ao(e) {
  let t, n, o, i, s, r, a, l, u, m, f = (
    /*geom*/
    e[4].points
  ), h = [];
  for (let d = 0; d < f.length; d += 1)
    h[d] = bt(wt(e, f, d));
  return {
    c() {
      t = D("polygon"), i = x(), s = D("polygon"), a = x();
      for (let d = 0; d < h.length; d += 1)
        h[d].c();
      l = le(), c(t, "class", "a9s-outer"), c(t, "style", n = /*computedStyle*/
      e[1] ? "display:none;" : void 0), c(t, "points", o = /*geom*/
      e[4].points.map(Et).join(" ")), c(s, "class", "a9s-inner a9s-shape-handle"), c(
        s,
        "style",
        /*computedStyle*/
        e[1]
      ), c(s, "points", r = /*geom*/
      e[4].points.map(At).join(" "));
    },
    m(d, g) {
      v(d, t, g), v(d, i, g), v(d, s, g), v(d, a, g);
      for (let b = 0; b < h.length; b += 1)
        h[b] && h[b].m(d, g);
      v(d, l, g), u || (m = [
        F(t, "pointerdown", function() {
          H(
            /*grab*/
            e[10](L.SHAPE)
          ) && e[10](L.SHAPE).apply(this, arguments);
        }),
        F(s, "pointerdown", function() {
          H(
            /*grab*/
            e[10](L.SHAPE)
          ) && e[10](L.SHAPE).apply(this, arguments);
        })
      ], u = !0);
    },
    p(d, g) {
      if (e = d, g & /*computedStyle*/
      2 && n !== (n = /*computedStyle*/
      e[1] ? "display:none;" : void 0) && c(t, "style", n), g & /*geom*/
      16 && o !== (o = /*geom*/
      e[4].points.map(Et).join(" ")) && c(t, "points", o), g & /*computedStyle*/
      2 && c(
        s,
        "style",
        /*computedStyle*/
        e[1]
      ), g & /*geom*/
      16 && r !== (r = /*geom*/
      e[4].points.map(At).join(" ")) && c(s, "points", r), g & /*geom, handleSize, grab, Handle*/
      1048) {
        f = /*geom*/
        e[4].points;
        let b;
        for (b = 0; b < f.length; b += 1) {
          const T = wt(e, f, b);
          h[b] ? h[b].p(T, g) : (h[b] = bt(T), h[b].c(), h[b].m(l.parentNode, l));
        }
        for (; b < h.length; b += 1)
          h[b].d(1);
        h.length = f.length;
      }
    },
    d(d) {
      d && k(t), d && k(i), d && k(s), d && k(a), st(h, d), d && k(l), u = !1, oe(m);
    }
  };
}
function co(e) {
  let t, n;
  return t = new ct({
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
          ao,
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
      ue(t.$$.fragment);
    },
    m(o, i) {
      ae(t, o, i), n = !0;
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
      n || (V(t.$$.fragment, o), n = !0);
    },
    o(o) {
      G(t.$$.fragment, o), n = !1;
    },
    d(o) {
      ce(t, o);
    }
  };
}
const Et = (e) => e.join(","), At = (e) => e.join(",");
function fo(e, t, n) {
  let o, i, { shape: s } = t, { computedStyle: r = void 0 } = t, { transform: a } = t, { viewportScale: l = 1 } = t;
  const u = (d, g, b) => {
    let T;
    g === L.SHAPE ? T = d.geometry.points.map(([y, A]) => [y + b[0], A + b[1]]) : T = d.geometry.points.map(([y, A], S) => g === L(S) ? [y + b[0], A + b[1]] : [y, A]);
    const w = He(T);
    return { ...d, geometry: { points: T, bounds: w } };
  };
  function m(d) {
    ie.call(this, e, d);
  }
  function f(d) {
    ie.call(this, e, d);
  }
  function h(d) {
    ie.call(this, e, d);
  }
  return e.$$set = (d) => {
    "shape" in d && n(0, s = d.shape), "computedStyle" in d && n(1, r = d.computedStyle), "transform" in d && n(2, a = d.transform), "viewportScale" in d && n(6, l = d.viewportScale);
  }, e.$$.update = () => {
    e.$$.dirty & /*shape*/
    1 && n(4, o = s.geometry), e.$$.dirty & /*viewportScale*/
    64 && n(3, i = 10 / l);
  }, [
    s,
    r,
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
class uo extends ne {
  constructor(t) {
    super(), te(this, t, fo, co, Z, {
      shape: 0,
      computedStyle: 1,
      transform: 2,
      viewportScale: 6
    });
  }
}
function ho(e) {
  let t, n, o, i, s, r, a, l, u, m, f, h, d, g, b, T, w, y, A, S, O, Y, N, p, _, E, M, B, C, U, X, _e, Le, P, Q, K, de, W, he, Ye, ze, $, Xe, De, je, ee, Re, Ce, Ke, ut;
  return {
    c() {
      t = D("rect"), a = x(), l = D("rect"), d = x(), g = D("rect"), y = x(), A = D("rect"), N = x(), p = D("rect"), B = x(), C = D("rect"), Le = x(), P = D("rect"), de = x(), W = D("rect"), ze = x(), $ = D("rect"), je = x(), ee = D("rect"), c(t, "class", "a9s-outer"), c(t, "style", n = /*computedStyle*/
      e[1] ? "display:none;" : void 0), c(t, "x", o = /*geom*/
      e[4].x), c(t, "y", i = /*geom*/
      e[4].y), c(t, "width", s = /*geom*/
      e[4].w), c(t, "height", r = /*geom*/
      e[4].h), c(l, "class", "a9s-inner a9s-shape-handle"), c(
        l,
        "style",
        /*computedStyle*/
        e[1]
      ), c(l, "x", u = /*geom*/
      e[4].x), c(l, "y", m = /*geom*/
      e[4].y), c(l, "width", f = /*geom*/
      e[4].w), c(l, "height", h = /*geom*/
      e[4].h), c(g, "class", "a9s-edge-handle a9s-edge-handle-top"), c(g, "x", b = /*geom*/
      e[4].x), c(g, "y", T = /*geom*/
      e[4].y), c(g, "height", 1), c(g, "width", w = /*geom*/
      e[4].w), c(A, "class", "a9s-edge-handle a9s-edge-handle-right"), c(A, "x", S = /*geom*/
      e[4].x + /*geom*/
      e[4].w), c(A, "y", O = /*geom*/
      e[4].y), c(A, "height", Y = /*geom*/
      e[4].h), c(A, "width", 1), c(p, "class", "a9s-edge-handle a9s-edge-handle-bottom"), c(p, "x", _ = /*geom*/
      e[4].x), c(p, "y", E = /*geom*/
      e[4].y + /*geom*/
      e[4].h), c(p, "height", 1), c(p, "width", M = /*geom*/
      e[4].w), c(C, "class", "a9s-edge-handle a9s-edge-handle-left"), c(C, "x", U = /*geom*/
      e[4].x), c(C, "y", X = /*geom*/
      e[4].y), c(C, "height", _e = /*geom*/
      e[4].h), c(C, "width", 1), c(P, "class", "a9s-corner-handle a9s-corner-handle-topleft"), c(P, "x", Q = /*geom*/
      e[4].x - /*handleSize*/
      e[3] / 2), c(P, "y", K = /*geom*/
      e[4].y - /*handleSize*/
      e[3] / 2), c(
        P,
        "height",
        /*handleSize*/
        e[3]
      ), c(
        P,
        "width",
        /*handleSize*/
        e[3]
      ), c(W, "class", "a9s-corner-handle a9s-corner-handle-topright"), c(W, "x", he = /*geom*/
      e[4].x + /*geom*/
      e[4].w - /*handleSize*/
      e[3] / 2), c(W, "y", Ye = /*geom*/
      e[4].y - /*handleSize*/
      e[3] / 2), c(
        W,
        "height",
        /*handleSize*/
        e[3]
      ), c(
        W,
        "width",
        /*handleSize*/
        e[3]
      ), c($, "class", "a9s-corner-handle a9s-corner-handle-bottomright"), c($, "x", Xe = /*geom*/
      e[4].x + /*geom*/
      e[4].w - /*handleSize*/
      e[3] / 2), c($, "y", De = /*geom*/
      e[4].y + /*geom*/
      e[4].h - /*handleSize*/
      e[3] / 2), c(
        $,
        "height",
        /*handleSize*/
        e[3]
      ), c(
        $,
        "width",
        /*handleSize*/
        e[3]
      ), c(ee, "class", "a9s-corner-handle a9s-corner-handle-bottomleft"), c(ee, "x", Re = /*geom*/
      e[4].x - /*handleSize*/
      e[3] / 2), c(ee, "y", Ce = /*geom*/
      e[4].y + /*geom*/
      e[4].h - /*handleSize*/
      e[3] / 2), c(
        ee,
        "height",
        /*handleSize*/
        e[3]
      ), c(
        ee,
        "width",
        /*handleSize*/
        e[3]
      );
    },
    m(R, I) {
      v(R, t, I), v(R, a, I), v(R, l, I), v(R, d, I), v(R, g, I), v(R, y, I), v(R, A, I), v(R, N, I), v(R, p, I), v(R, B, I), v(R, C, I), v(R, Le, I), v(R, P, I), v(R, de, I), v(R, W, I), v(R, ze, I), v(R, $, I), v(R, je, I), v(R, ee, I), Ke || (ut = [
        F(t, "pointerdown", function() {
          H(
            /*grab*/
            e[10](L.SHAPE)
          ) && e[10](L.SHAPE).apply(this, arguments);
        }),
        F(l, "pointerdown", function() {
          H(
            /*grab*/
            e[10](L.SHAPE)
          ) && e[10](L.SHAPE).apply(this, arguments);
        }),
        F(g, "pointerdown", function() {
          H(
            /*grab*/
            e[10](L.TOP)
          ) && e[10](L.TOP).apply(this, arguments);
        }),
        F(A, "pointerdown", function() {
          H(
            /*grab*/
            e[10](L.RIGHT)
          ) && e[10](L.RIGHT).apply(this, arguments);
        }),
        F(p, "pointerdown", function() {
          H(
            /*grab*/
            e[10](L.BOTTOM)
          ) && e[10](L.BOTTOM).apply(this, arguments);
        }),
        F(C, "pointerdown", function() {
          H(
            /*grab*/
            e[10](L.LEFT)
          ) && e[10](L.LEFT).apply(this, arguments);
        }),
        F(P, "pointerdown", function() {
          H(
            /*grab*/
            e[10](L.TOP_LEFT)
          ) && e[10](L.TOP_LEFT).apply(this, arguments);
        }),
        F(W, "pointerdown", function() {
          H(
            /*grab*/
            e[10](L.TOP_RIGHT)
          ) && e[10](L.TOP_RIGHT).apply(this, arguments);
        }),
        F($, "pointerdown", function() {
          H(
            /*grab*/
            e[10](L.BOTTOM_RIGHT)
          ) && e[10](L.BOTTOM_RIGHT).apply(this, arguments);
        }),
        F(ee, "pointerdown", function() {
          H(
            /*grab*/
            e[10](L.BOTTOM_LEFT)
          ) && e[10](L.BOTTOM_LEFT).apply(this, arguments);
        })
      ], Ke = !0);
    },
    p(R, I) {
      e = R, I & /*computedStyle*/
      2 && n !== (n = /*computedStyle*/
      e[1] ? "display:none;" : void 0) && c(t, "style", n), I & /*geom*/
      16 && o !== (o = /*geom*/
      e[4].x) && c(t, "x", o), I & /*geom*/
      16 && i !== (i = /*geom*/
      e[4].y) && c(t, "y", i), I & /*geom*/
      16 && s !== (s = /*geom*/
      e[4].w) && c(t, "width", s), I & /*geom*/
      16 && r !== (r = /*geom*/
      e[4].h) && c(t, "height", r), I & /*computedStyle*/
      2 && c(
        l,
        "style",
        /*computedStyle*/
        e[1]
      ), I & /*geom*/
      16 && u !== (u = /*geom*/
      e[4].x) && c(l, "x", u), I & /*geom*/
      16 && m !== (m = /*geom*/
      e[4].y) && c(l, "y", m), I & /*geom*/
      16 && f !== (f = /*geom*/
      e[4].w) && c(l, "width", f), I & /*geom*/
      16 && h !== (h = /*geom*/
      e[4].h) && c(l, "height", h), I & /*geom*/
      16 && b !== (b = /*geom*/
      e[4].x) && c(g, "x", b), I & /*geom*/
      16 && T !== (T = /*geom*/
      e[4].y) && c(g, "y", T), I & /*geom*/
      16 && w !== (w = /*geom*/
      e[4].w) && c(g, "width", w), I & /*geom*/
      16 && S !== (S = /*geom*/
      e[4].x + /*geom*/
      e[4].w) && c(A, "x", S), I & /*geom*/
      16 && O !== (O = /*geom*/
      e[4].y) && c(A, "y", O), I & /*geom*/
      16 && Y !== (Y = /*geom*/
      e[4].h) && c(A, "height", Y), I & /*geom*/
      16 && _ !== (_ = /*geom*/
      e[4].x) && c(p, "x", _), I & /*geom*/
      16 && E !== (E = /*geom*/
      e[4].y + /*geom*/
      e[4].h) && c(p, "y", E), I & /*geom*/
      16 && M !== (M = /*geom*/
      e[4].w) && c(p, "width", M), I & /*geom*/
      16 && U !== (U = /*geom*/
      e[4].x) && c(C, "x", U), I & /*geom*/
      16 && X !== (X = /*geom*/
      e[4].y) && c(C, "y", X), I & /*geom*/
      16 && _e !== (_e = /*geom*/
      e[4].h) && c(C, "height", _e), I & /*geom, handleSize*/
      24 && Q !== (Q = /*geom*/
      e[4].x - /*handleSize*/
      e[3] / 2) && c(P, "x", Q), I & /*geom, handleSize*/
      24 && K !== (K = /*geom*/
      e[4].y - /*handleSize*/
      e[3] / 2) && c(P, "y", K), I & /*handleSize*/
      8 && c(
        P,
        "height",
        /*handleSize*/
        e[3]
      ), I & /*handleSize*/
      8 && c(
        P,
        "width",
        /*handleSize*/
        e[3]
      ), I & /*geom, handleSize*/
      24 && he !== (he = /*geom*/
      e[4].x + /*geom*/
      e[4].w - /*handleSize*/
      e[3] / 2) && c(W, "x", he), I & /*geom, handleSize*/
      24 && Ye !== (Ye = /*geom*/
      e[4].y - /*handleSize*/
      e[3] / 2) && c(W, "y", Ye), I & /*handleSize*/
      8 && c(
        W,
        "height",
        /*handleSize*/
        e[3]
      ), I & /*handleSize*/
      8 && c(
        W,
        "width",
        /*handleSize*/
        e[3]
      ), I & /*geom, handleSize*/
      24 && Xe !== (Xe = /*geom*/
      e[4].x + /*geom*/
      e[4].w - /*handleSize*/
      e[3] / 2) && c($, "x", Xe), I & /*geom, handleSize*/
      24 && De !== (De = /*geom*/
      e[4].y + /*geom*/
      e[4].h - /*handleSize*/
      e[3] / 2) && c($, "y", De), I & /*handleSize*/
      8 && c(
        $,
        "height",
        /*handleSize*/
        e[3]
      ), I & /*handleSize*/
      8 && c(
        $,
        "width",
        /*handleSize*/
        e[3]
      ), I & /*geom, handleSize*/
      24 && Re !== (Re = /*geom*/
      e[4].x - /*handleSize*/
      e[3] / 2) && c(ee, "x", Re), I & /*geom, handleSize*/
      24 && Ce !== (Ce = /*geom*/
      e[4].y + /*geom*/
      e[4].h - /*handleSize*/
      e[3] / 2) && c(ee, "y", Ce), I & /*handleSize*/
      8 && c(
        ee,
        "height",
        /*handleSize*/
        e[3]
      ), I & /*handleSize*/
      8 && c(
        ee,
        "width",
        /*handleSize*/
        e[3]
      );
    },
    d(R) {
      R && k(t), R && k(a), R && k(l), R && k(d), R && k(g), R && k(y), R && k(A), R && k(N), R && k(p), R && k(B), R && k(C), R && k(Le), R && k(P), R && k(de), R && k(W), R && k(ze), R && k($), R && k(je), R && k(ee), Ke = !1, oe(ut);
    }
  };
}
function mo(e) {
  let t, n;
  return t = new ct({
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
          ho,
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
      ue(t.$$.fragment);
    },
    m(o, i) {
      ae(t, o, i), n = !0;
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
      n || (V(t.$$.fragment, o), n = !0);
    },
    o(o) {
      G(t.$$.fragment, o), n = !1;
    },
    d(o) {
      ce(t, o);
    }
  };
}
function go(e, t, n) {
  let o, i, { shape: s } = t, { computedStyle: r = void 0 } = t, { transform: a } = t, { viewportScale: l = 1 } = t;
  const u = (d, g, b) => {
    const T = d.geometry.bounds;
    let [w, y] = [T.minX, T.minY], [A, S] = [T.maxX, T.maxY];
    const [O, Y] = b;
    if (g === L.SHAPE)
      w += O, A += O, y += Y, S += Y;
    else {
      switch (g) {
        case L.TOP:
        case L.TOP_LEFT:
        case L.TOP_RIGHT: {
          y += Y;
          break;
        }
        case L.BOTTOM:
        case L.BOTTOM_LEFT:
        case L.BOTTOM_RIGHT: {
          S += Y;
          break;
        }
      }
      switch (g) {
        case L.LEFT:
        case L.TOP_LEFT:
        case L.BOTTOM_LEFT: {
          w += O;
          break;
        }
        case L.RIGHT:
        case L.TOP_RIGHT:
        case L.BOTTOM_RIGHT: {
          A += O;
          break;
        }
      }
    }
    const N = Math.min(w, A), p = Math.min(y, S), _ = Math.abs(A - w), E = Math.abs(S - y);
    return {
      ...d,
      geometry: {
        x: N,
        y: p,
        w: _,
        h: E,
        bounds: {
          minX: N,
          minY: p,
          maxX: N + _,
          maxY: p + E
        }
      }
    };
  };
  function m(d) {
    ie.call(this, e, d);
  }
  function f(d) {
    ie.call(this, e, d);
  }
  function h(d) {
    ie.call(this, e, d);
  }
  return e.$$set = (d) => {
    "shape" in d && n(0, s = d.shape), "computedStyle" in d && n(1, r = d.computedStyle), "transform" in d && n(2, a = d.transform), "viewportScale" in d && n(6, l = d.viewportScale);
  }, e.$$.update = () => {
    e.$$.dirty & /*shape*/
    1 && n(4, o = s.geometry), e.$$.dirty & /*viewportScale*/
    64 && n(3, i = 10 / l);
  }, [
    s,
    r,
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
class po extends ne {
  constructor(t) {
    super(), te(this, t, go, mo, Z, {
      shape: 0,
      computedStyle: 1,
      transform: 2,
      viewportScale: 6
    });
  }
}
function _o(e) {
  let t, n, o, i, s, r, a, l, u, m, f, h, d, g, b, T, w, y, A, S, O, Y, N, p, _, E, M, B, C;
  return {
    c() {
      t = D("ellipse"), r = x(), a = D("ellipse"), h = x(), d = D("rect"), T = x(), w = D("rect"), S = x(), O = D("rect"), p = x(), _ = D("rect"), c(t, "class", "a9s-outer"), c(t, "cx", n = /*geom*/
      e[3].cx), c(t, "cy", o = /*geom*/
      e[3].cy), c(t, "rx", i = /*geom*/
      e[3].rx), c(t, "ry", s = /*geom*/
      e[3].ry), c(a, "class", "a9s-inner a9s-shape-handle"), c(a, "cx", l = /*geom*/
      e[3].cx), c(a, "cy", u = /*geom*/
      e[3].cy), c(a, "rx", m = /*geom*/
      e[3].rx), c(a, "ry", f = /*geom*/
      e[3].ry), c(d, "class", "a9s-corner-handle a9s-corner-top"), c(d, "x", g = /*geom*/
      e[3].cx - /*handleSize*/
      e[2] / 2), c(d, "y", b = /*geom*/
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
      ), c(w, "class", "a9s-corner-handle a9s-corner-handle-right"), c(w, "x", y = /*geom*/
      e[3].cx + /*geom*/
      e[3].rx - /*handleSize*/
      e[2] / 2), c(w, "y", A = /*geom*/
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
      ), c(O, "class", "a9s-corner-handle a9s-corner-handle-bottom"), c(O, "x", Y = /*geom*/
      e[3].cx - /*handleSize*/
      e[2] / 2), c(O, "y", N = /*geom*/
      e[3].cy + /*geom*/
      e[3].ry - /*handleSize*/
      e[2] / 2), c(
        O,
        "height",
        /*handleSize*/
        e[2]
      ), c(
        O,
        "width",
        /*handleSize*/
        e[2]
      ), c(_, "class", "a9s-corner-handle a9s-corner-handle-left"), c(_, "x", E = /*geom*/
      e[3].cx - /*geom*/
      e[3].rx - /*handleSize*/
      e[2] / 2), c(_, "y", M = /*geom*/
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
    m(U, X) {
      v(U, t, X), v(U, r, X), v(U, a, X), v(U, h, X), v(U, d, X), v(U, T, X), v(U, w, X), v(U, S, X), v(U, O, X), v(U, p, X), v(U, _, X), B || (C = [
        F(t, "pointerdown", function() {
          H(
            /*grab*/
            e[9](L.SHAPE)
          ) && e[9](L.SHAPE).apply(this, arguments);
        }),
        F(a, "pointerdown", function() {
          H(
            /*grab*/
            e[9](L.SHAPE)
          ) && e[9](L.SHAPE).apply(this, arguments);
        }),
        F(d, "pointerdown", function() {
          H(
            /*grab*/
            e[9](L.TOP)
          ) && e[9](L.TOP).apply(this, arguments);
        }),
        F(w, "pointerdown", function() {
          H(
            /*grab*/
            e[9](L.RIGHT)
          ) && e[9](L.RIGHT).apply(this, arguments);
        }),
        F(O, "pointerdown", function() {
          H(
            /*grab*/
            e[9](L.BOTTOM)
          ) && e[9](L.BOTTOM).apply(this, arguments);
        }),
        F(_, "pointerdown", function() {
          H(
            /*grab*/
            e[9](L.LEFT)
          ) && e[9](L.LEFT).apply(this, arguments);
        })
      ], B = !0);
    },
    p(U, X) {
      e = U, X & /*geom*/
      8 && n !== (n = /*geom*/
      e[3].cx) && c(t, "cx", n), X & /*geom*/
      8 && o !== (o = /*geom*/
      e[3].cy) && c(t, "cy", o), X & /*geom*/
      8 && i !== (i = /*geom*/
      e[3].rx) && c(t, "rx", i), X & /*geom*/
      8 && s !== (s = /*geom*/
      e[3].ry) && c(t, "ry", s), X & /*geom*/
      8 && l !== (l = /*geom*/
      e[3].cx) && c(a, "cx", l), X & /*geom*/
      8 && u !== (u = /*geom*/
      e[3].cy) && c(a, "cy", u), X & /*geom*/
      8 && m !== (m = /*geom*/
      e[3].rx) && c(a, "rx", m), X & /*geom*/
      8 && f !== (f = /*geom*/
      e[3].ry) && c(a, "ry", f), X & /*geom, handleSize*/
      12 && g !== (g = /*geom*/
      e[3].cx - /*handleSize*/
      e[2] / 2) && c(d, "x", g), X & /*geom, handleSize*/
      12 && b !== (b = /*geom*/
      e[3].cy - /*handleSize*/
      e[2] / 2 - /*geom*/
      e[3].ry) && c(d, "y", b), X & /*handleSize*/
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
      12 && y !== (y = /*geom*/
      e[3].cx + /*geom*/
      e[3].rx - /*handleSize*/
      e[2] / 2) && c(w, "x", y), X & /*geom, handleSize*/
      12 && A !== (A = /*geom*/
      e[3].cy - /*handleSize*/
      e[2] / 2) && c(w, "y", A), X & /*handleSize*/
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
      12 && Y !== (Y = /*geom*/
      e[3].cx - /*handleSize*/
      e[2] / 2) && c(O, "x", Y), X & /*geom, handleSize*/
      12 && N !== (N = /*geom*/
      e[3].cy + /*geom*/
      e[3].ry - /*handleSize*/
      e[2] / 2) && c(O, "y", N), X & /*handleSize*/
      4 && c(
        O,
        "height",
        /*handleSize*/
        e[2]
      ), X & /*handleSize*/
      4 && c(
        O,
        "width",
        /*handleSize*/
        e[2]
      ), X & /*geom, handleSize*/
      12 && E !== (E = /*geom*/
      e[3].cx - /*geom*/
      e[3].rx - /*handleSize*/
      e[2] / 2) && c(_, "x", E), X & /*geom, handleSize*/
      12 && M !== (M = /*geom*/
      e[3].cy - /*handleSize*/
      e[2] / 2) && c(_, "y", M), X & /*handleSize*/
      4 && c(
        _,
        "height",
        /*handleSize*/
        e[2]
      ), X & /*handleSize*/
      4 && c(
        _,
        "width",
        /*handleSize*/
        e[2]
      );
    },
    d(U) {
      U && k(t), U && k(r), U && k(a), U && k(h), U && k(d), U && k(T), U && k(w), U && k(S), U && k(O), U && k(p), U && k(_), B = !1, oe(C);
    }
  };
}
function yo(e) {
  let t, n;
  return t = new ct({
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
          _o,
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
      ue(t.$$.fragment);
    },
    m(o, i) {
      ae(t, o, i), n = !0;
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
      n || (V(t.$$.fragment, o), n = !0);
    },
    o(o) {
      G(t.$$.fragment, o), n = !1;
    },
    d(o) {
      ce(t, o);
    }
  };
}
function wo(e, t, n) {
  let o, i, { shape: s } = t, { transform: r } = t, { viewportScale: a = 1 } = t;
  const l = (h, d, g) => {
    const b = h.geometry.bounds;
    let [T, w] = [b.minX, b.minY], [y, A] = [b.maxX, b.maxY];
    const [S, O] = g;
    if (d === L.SHAPE)
      T += S, y += S, w += O, A += O;
    else
      switch (d) {
        case L.TOP: {
          w += O;
          break;
        }
        case L.BOTTOM: {
          A += O;
          break;
        }
        case L.LEFT: {
          T += S;
          break;
        }
        case L.RIGHT: {
          y += S;
          break;
        }
      }
    const Y = Math.min(T, y), N = Math.min(w, A), p = Math.abs(y - T), _ = Math.abs(A - w), E = (T + y) / 2, M = (w + A) / 2, B = p / 2, C = _ / 2;
    return {
      ...h,
      geometry: {
        ...h.geometry,
        cx: E,
        cy: M,
        rx: B,
        ry: C,
        bounds: {
          minX: Y,
          minY: N,
          maxX: Y + p,
          maxY: N + _
        }
      }
    };
  };
  function u(h) {
    ie.call(this, e, h);
  }
  function m(h) {
    ie.call(this, e, h);
  }
  function f(h) {
    ie.call(this, e, h);
  }
  return e.$$set = (h) => {
    "shape" in h && n(0, s = h.shape), "transform" in h && n(1, r = h.transform), "viewportScale" in h && n(5, a = h.viewportScale);
  }, e.$$.update = () => {
    e.$$.dirty & /*shape*/
    1 && n(3, o = s.geometry), e.$$.dirty & /*viewportScale*/
    32 && n(2, i = 10 / a);
  }, [
    s,
    r,
    i,
    o,
    l,
    a,
    u,
    m,
    f
  ];
}
class bo extends ne {
  constructor(t) {
    super(), te(this, t, wo, yo, Z, { shape: 0, transform: 1, viewportScale: 5 });
  }
}
const xt = /* @__PURE__ */ new Map([
  [q.RECTANGLE, po],
  [q.POLYGON, uo],
  [q.ELLIPSE, bo]
]), Tt = (e) => xt.get(e.type), Eo = (e, t) => xt.set(e, t), L = (e) => `HANDLE-${e}`;
L.SHAPE = "SHAPE";
L.TOP = "TOP";
L.RIGHT = "RIGHT";
L.BOTTOM = "BOTTOM";
L.LEFT = "LEFT";
L.TOP_LEFT = "TOP_LEFT";
L.TOP_RIGHT = "TOP_RIGHT";
L.BOTTOM_RIGHT = "BOTTOM_RIGHT";
L.BOTTOM_LEFT = "BOTTOM_LEFT";
const Ao = (e) => ({}), St = (e) => ({ grab: (
  /*onGrab*/
  e[0]
) });
function To(e) {
  let t, n, o, i;
  const s = (
    /*#slots*/
    e[7].default
  ), r = on(
    s,
    e,
    /*$$scope*/
    e[6],
    St
  );
  return {
    c() {
      t = D("g"), r && r.c(), c(t, "class", "a9s-annotation selected");
    },
    m(a, l) {
      v(a, t, l), r && r.m(t, null), n = !0, o || (i = [
        F(
          t,
          "pointerup",
          /*onRelease*/
          e[2]
        ),
        F(
          t,
          "pointermove",
          /*onPointerMove*/
          e[1]
        )
      ], o = !0);
    },
    p(a, [l]) {
      r && r.p && (!n || l & /*$$scope*/
      64) && rn(
        r,
        s,
        a,
        /*$$scope*/
        a[6],
        n ? sn(
          s,
          /*$$scope*/
          a[6],
          l,
          Ao
        ) : ln(
          /*$$scope*/
          a[6]
        ),
        St
      );
    },
    i(a) {
      n || (V(r, a), n = !0);
    },
    o(a) {
      G(r, a), n = !1;
    },
    d(a) {
      a && k(t), r && r.d(a), o = !1, oe(i);
    }
  };
}
function So(e, t, n) {
  let { $$slots: o = {}, $$scope: i } = t;
  const s = pe();
  let { shape: r } = t, { editor: a } = t, { transform: l } = t, u = null, m, f = null;
  const h = (b) => (T) => {
    u = b, m = l.elementToImage(T.offsetX, T.offsetY), f = r, T.target.setPointerCapture(T.pointerId), s("grab");
  }, d = (b) => {
    if (u) {
      const [T, w] = l.elementToImage(b.offsetX, b.offsetY), y = [T - m[0], w - m[1]];
      n(3, r = a(f, u, y)), s("change", r);
    }
  }, g = (b) => {
    b.target.releasePointerCapture(b.pointerId), u = null, f = r, s("release");
  };
  return e.$$set = (b) => {
    "shape" in b && n(3, r = b.shape), "editor" in b && n(4, a = b.editor), "transform" in b && n(5, l = b.transform), "$$scope" in b && n(6, i = b.$$scope);
  }, [h, d, g, r, a, l, i, o];
}
class ct extends ne {
  constructor(t) {
    super(), te(this, t, So, To, Z, { shape: 3, editor: 4, transform: 5 });
  }
}
const Fe = (e, t) => {
  const n = typeof t == "function" ? t(e) : t;
  if (n) {
    const { fill: o, fillOpacity: i } = n;
    let s = "";
    return o && (s += `fill:${o};stroke:${o};`), s += `fill-opacity:${i || "0.25"};`, s;
  }
};
function Mo(e, t, n) {
  let o;
  const i = pe();
  let { annotation: s } = t, { editor: r } = t, { style: a = void 0 } = t, { target: l } = t, { transform: u } = t, { viewportScale: m } = t, f;
  return Me(() => (n(6, f = new r({
    target: l,
    props: {
      shape: s.target.selector,
      computedStyle: o,
      transform: u,
      viewportScale: m
    }
  })), f.$on("change", (h) => {
    f.$$set({ shape: h.detail }), i("change", h.detail);
  }), f.$on("grab", (h) => i("grab", h.detail)), f.$on("release", (h) => i("release", h.detail)), () => {
    f.$destroy();
  })), e.$$set = (h) => {
    "annotation" in h && n(0, s = h.annotation), "editor" in h && n(1, r = h.editor), "style" in h && n(2, a = h.style), "target" in h && n(3, l = h.target), "transform" in h && n(4, u = h.transform), "viewportScale" in h && n(5, m = h.viewportScale);
  }, e.$$.update = () => {
    e.$$.dirty & /*annotation, style*/
    5 && (o = Fe(s, a)), e.$$.dirty & /*annotation, editorComponent*/
    65 && s && (f == null || f.$set({ shape: s.target.selector })), e.$$.dirty & /*editorComponent, transform*/
    80 && f && f.$set({ transform: u }), e.$$.dirty & /*editorComponent, viewportScale*/
    96 && f && f.$set({ viewportScale: m });
  }, [s, r, a, l, u, m, f];
}
class Lo extends ne {
  constructor(t) {
    super(), te(this, t, Mo, null, Z, {
      annotation: 0,
      editor: 1,
      style: 2,
      target: 3,
      transform: 4,
      viewportScale: 5
    });
  }
}
function Oo(e, t, n) {
  const o = pe();
  let { drawingMode: i } = t, { target: s } = t, { tool: r } = t, { transform: a } = t, { viewportScale: l } = t, u;
  return Me(() => {
    const m = s.closest("svg"), f = [], h = (d, g, b) => {
      m.addEventListener(d, g, b), f.push(() => m.removeEventListener(d, g, b));
    };
    return n(5, u = new r({
      target: s,
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
    "drawingMode" in m && n(0, i = m.drawingMode), "target" in m && n(1, s = m.target), "tool" in m && n(2, r = m.tool), "transform" in m && n(3, a = m.transform), "viewportScale" in m && n(4, l = m.viewportScale);
  }, e.$$.update = () => {
    e.$$.dirty & /*toolComponent, transform*/
    40 && u && u.$set({ transform: a }), e.$$.dirty & /*toolComponent, viewportScale*/
    48 && u && u.$set({ viewportScale: l });
  }, [i, s, r, a, l, u];
}
class ko extends ne {
  constructor(t) {
    super(), te(this, t, Oo, null, Z, {
      drawingMode: 0,
      target: 1,
      tool: 2,
      transform: 3,
      viewportScale: 4
    });
  }
}
function Mt(e) {
  let t, n;
  return {
    c() {
      t = D("rect"), n = D("rect"), c(t, "class", "a9s-outer"), c(
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
function vo(e) {
  let t, n = (
    /*origin*/
    e[0] && Mt(e)
  );
  return {
    c() {
      t = D("g"), n && n.c(), c(t, "class", "a9s-annotation a9s-rubberband");
    },
    m(o, i) {
      v(o, t, i), n && n.m(t, null);
    },
    p(o, [i]) {
      /*origin*/
      o[0] ? n ? n.p(o, i) : (n = Mt(o), n.c(), n.m(t, null)) : n && (n.d(1), n = null);
    },
    i: z,
    o: z,
    d(o) {
      o && k(t), n && n.d();
    }
  };
}
function Io(e, t, n) {
  const o = pe();
  let { addEventListener: i } = t, { drawingMode: s } = t, { transform: r } = t, a, l, u, m, f, h, d;
  const g = (y) => {
    a = performance.now(), s === "drag" && (n(0, l = r.elementToImage(y.offsetX, y.offsetY)), u = l, n(1, m = l[0]), n(2, f = l[1]), n(3, h = 1), n(4, d = 1));
  }, b = (y) => {
    l && (u = r.elementToImage(y.offsetX, y.offsetY), n(1, m = Math.min(u[0], l[0])), n(2, f = Math.min(u[1], l[1])), n(3, h = Math.abs(u[0] - l[0])), n(4, d = Math.abs(u[1] - l[1])));
  }, T = (y) => {
    const A = performance.now() - a;
    if (s === "click") {
      if (A > 300)
        return;
      y.stopPropagation(), l ? w() : (n(0, l = r.elementToImage(y.offsetX, y.offsetY)), u = l, n(1, m = l[0]), n(2, f = l[1]), n(3, h = 1), n(4, d = 1));
    } else
      l && (A > 300 || h * d > 100 ? (y.stopPropagation(), w()) : (n(0, l = null), u = null));
  }, w = () => {
    if (h * d > 15) {
      const y = {
        type: q.RECTANGLE,
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
      o("create", y);
    }
    n(0, l = null), u = null;
  };
  return Me(() => {
    i("pointerdown", g), i("pointermove", b), i("pointerup", T, !0);
  }), e.$$set = (y) => {
    "addEventListener" in y && n(5, i = y.addEventListener), "drawingMode" in y && n(6, s = y.drawingMode), "transform" in y && n(7, r = y.transform);
  }, [l, m, f, h, d, i, s, r];
}
class Bo extends ne {
  constructor(t) {
    super(), te(this, t, Io, vo, Z, {
      addEventListener: 5,
      drawingMode: 6,
      transform: 7
    });
  }
}
const Ze = (e, t) => {
  const n = Math.abs(t[0] - e[0]), o = Math.abs(t[1] - e[1]);
  return Math.sqrt(Math.pow(n, 2) + Math.pow(o, 2));
}, be = [];
function Po(e, t = z) {
  let n;
  const o = /* @__PURE__ */ new Set();
  function i(a) {
    if (Z(e, a) && (e = a, n)) {
      const l = !be.length;
      for (const u of o)
        u[1](), be.push(u, e);
      if (l) {
        for (let u = 0; u < be.length; u += 2)
          be[u][0](be[u + 1]);
        be.length = 0;
      }
    }
  }
  function s(a) {
    i(a(e));
  }
  function r(a, l = z) {
    const u = [a, l];
    return o.add(u), o.size === 1 && (n = t(i) || z), a(e), () => {
      o.delete(u), o.size === 0 && n && (n(), n = null);
    };
  }
  return { set: i, update: s, subscribe: r };
}
const Yo = (e, t) => {
  const { naturalWidth: n, naturalHeight: o } = e;
  if (!n && !o) {
    const { width: i, height: s } = e;
    t.setAttribute("viewBox", `0 0 ${i} ${s}`), e.addEventListener("load", (r) => {
      const a = r.target;
      t.setAttribute("viewBox", `0 0 ${a.naturalWidth} ${a.naturalHeight}`);
    });
  } else
    t.setAttribute("viewBox", `0 0 ${n} ${o}`);
}, Xo = (e, t) => {
  Yo(e, t);
  const { subscribe: n, set: o } = Po(1);
  let i;
  return window.ResizeObserver && (i = new ResizeObserver(() => {
    const r = t.getBoundingClientRect(), { width: a, height: l } = t.viewBox.baseVal, u = Math.max(
      r.width / a,
      r.height / l
    );
    o(u);
  }), i.observe(t.parentElement)), { destroy: () => {
    i && i.disconnect();
  }, subscribe: n };
}, ki = "ontouchstart" in window || navigator.maxTouchPoints > 0;
function Qe(e) {
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
function Lt(e) {
  let t, n, o, i, s, r = (
    /*isClosable*/
    e[2] && Ot(e)
  );
  return {
    c() {
      t = D("polygon"), o = D("polygon"), r && r.c(), s = le(), c(t, "class", "a9s-outer"), c(t, "points", n = /*coords*/
      e[15]), c(o, "class", "a9s-inner"), c(o, "points", i = /*coords*/
      e[15]);
    },
    m(a, l) {
      v(a, t, l), v(a, o, l), r && r.m(a, l), v(a, s, l);
    },
    p(a, l) {
      l & /*isClosable, points, cursor*/
      7 && n !== (n = /*coords*/
      a[15]) && c(t, "points", n), l & /*isClosable, points, cursor*/
      7 && i !== (i = /*coords*/
      a[15]) && c(o, "points", i), /*isClosable*/
      a[2] ? r ? r.p(a, l) : (r = Ot(a), r.c(), r.m(s.parentNode, s)) : r && (r.d(1), r = null);
    },
    d(a) {
      a && k(t), a && k(o), r && r.d(a), a && k(s);
    }
  };
}
function Ot(e) {
  let t, n, o;
  return {
    c() {
      t = D("rect"), c(t, "class", "a9s-corner-handle"), c(t, "x", n = /*points*/
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
    m(i, s) {
      v(i, t, s);
    },
    p(i, s) {
      s & /*points, handleSize*/
      9 && n !== (n = /*points*/
      i[0][0][0] - /*handleSize*/
      i[3] / 2) && c(t, "x", n), s & /*points, handleSize*/
      9 && o !== (o = /*points*/
      i[0][0][1] - /*handleSize*/
      i[3] / 2) && c(t, "y", o), s & /*handleSize*/
      8 && c(
        t,
        "height",
        /*handleSize*/
        i[3]
      ), s & /*handleSize*/
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
function Do(e) {
  let t, n = (
    /*cursor*/
    e[1] && Lt(Qe(e))
  );
  return {
    c() {
      t = D("g"), n && n.c(), c(t, "class", "a9s-annotation a9s-rubberband");
    },
    m(o, i) {
      v(o, t, i), n && n.m(t, null);
    },
    p(o, [i]) {
      /*cursor*/
      o[1] ? n ? n.p(Qe(o), i) : (n = Lt(Qe(o)), n.c(), n.m(t, null)) : n && (n.d(1), n = null);
    },
    i: z,
    o: z,
    d(o) {
      o && k(t), n && n.d();
    }
  };
}
const Ro = 20;
function Co(e, t, n) {
  let o;
  const i = pe();
  let { addEventListener: s } = t, { drawingMode: r } = t, { transform: a } = t, { viewportScale: l = 1 } = t, u, m = [], f = null, h = !1;
  const d = (y) => {
    const { timeStamp: A, offsetX: S, offsetY: O } = y;
    if (u = { timeStamp: A, offsetX: S, offsetY: O }, r === "drag" && m.length === 0) {
      const Y = a.elementToImage(y.offsetX, y.offsetY);
      m.push(Y), n(1, f = Y);
    }
  }, g = (y) => {
    if (m.length > 0 && (n(1, f = a.elementToImage(y.offsetX, y.offsetY)), m.length > 2)) {
      const A = Ze(f, m[0]) * l;
      n(2, h = A < Ro);
    }
  }, b = (y) => {
    if (r === "click") {
      const A = y.timeStamp - u.timeStamp, S = Ze([u.offsetX, u.offsetY], [y.offsetX, y.offsetY]);
      if (A > 300 || S > 15)
        return;
      if (h)
        w();
      else if (m.length === 0) {
        const O = a.elementToImage(y.offsetX, y.offsetY);
        m.push(O), n(1, f = O);
      } else
        m.push(f);
    } else {
      if (m.length === 1 && Ze(m[0], f) <= 4) {
        n(0, m = []), n(1, f = null);
        return;
      }
      y.stopImmediatePropagation(), h ? w() : m.push(f);
    }
  }, T = () => {
    const y = [...m, f], A = {
      type: q.POLYGON,
      geometry: { bounds: He(y), points: y }
    };
    ot(A) > 4 && (n(0, m = []), n(1, f = null), i("create", A));
  }, w = () => {
    const y = {
      type: q.POLYGON,
      geometry: {
        bounds: He(m),
        points: [...m]
      }
    };
    n(0, m = []), n(1, f = null), i("create", y);
  };
  return Me(() => {
    s("pointerdown", d, !0), s("pointermove", g), s("pointerup", b, !0), s("dblclick", T, !0);
  }), e.$$set = (y) => {
    "addEventListener" in y && n(4, s = y.addEventListener), "drawingMode" in y && n(5, r = y.drawingMode), "transform" in y && n(6, a = y.transform), "viewportScale" in y && n(7, l = y.viewportScale);
  }, e.$$.update = () => {
    e.$$.dirty & /*viewportScale*/
    128 && n(3, o = 10 / l);
  }, [
    m,
    f,
    h,
    o,
    s,
    r,
    a,
    l
  ];
}
class Uo extends ne {
  constructor(t) {
    super(), te(this, t, Co, Do, Z, {
      addEventListener: 4,
      drawingMode: 5,
      transform: 6,
      viewportScale: 7
    });
  }
}
function kt(e) {
  let t, n, o, i, s, r, a, l, u, m;
  return {
    c() {
      t = D("ellipse"), r = D("ellipse"), c(t, "class", "a9s-outer"), c(t, "cx", n = /*x*/
      e[2] + /*w*/
      e[4] / 2), c(t, "cy", o = /*y*/
      e[3] + /*h*/
      e[5] / 2), c(t, "rx", i = /*w*/
      e[4] / 2), c(t, "ry", s = /*h*/
      e[5] / 2), c(r, "class", "a9s-inner"), c(r, "cx", a = /*x*/
      e[2] + /*w*/
      e[4] / 2), c(r, "cy", l = /*y*/
      e[3] + /*h*/
      e[5] / 2), c(r, "rx", u = /*w*/
      e[4] / 2), c(r, "ry", m = /*h*/
      e[5] / 2);
    },
    m(f, h) {
      v(f, t, h), v(f, r, h);
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
      32 && s !== (s = /*h*/
      f[5] / 2) && c(t, "ry", s), h & /*x, w*/
      20 && a !== (a = /*x*/
      f[2] + /*w*/
      f[4] / 2) && c(r, "cx", a), h & /*y, h*/
      40 && l !== (l = /*y*/
      f[3] + /*h*/
      f[5] / 2) && c(r, "cy", l), h & /*w*/
      16 && u !== (u = /*w*/
      f[4] / 2) && c(r, "rx", u), h & /*h*/
      32 && m !== (m = /*h*/
      f[5] / 2) && c(r, "ry", m);
    },
    d(f) {
      f && k(t), f && k(r);
    }
  };
}
function No(e) {
  let t, n = (
    /*origin*/
    e[1] && kt(e)
  );
  return {
    c() {
      t = D("g"), n && n.c(), c(t, "class", "a9s-annotation a9s-rubberband");
    },
    m(o, i) {
      v(o, t, i), n && n.m(t, null), e[9](t);
    },
    p(o, [i]) {
      /*origin*/
      o[1] ? n ? n.p(o, i) : (n = kt(o), n.c(), n.m(t, null)) : n && (n.d(1), n = null);
    },
    i: z,
    o: z,
    d(o) {
      o && k(t), n && n.d(), e[9](null);
    }
  };
}
function Vo(e, t, n) {
  const o = pe();
  let { addEventListener: i } = t, { drawingMode: s } = t, { transform: r } = t, a, l, u, m, f, h, d, g = !1, b = !1, T, w;
  const y = (_) => {
    T = performance.now(), s === "drag" && (n(1, l = r.elementToImage(_.offsetX, _.offsetY)), u = l, n(2, m = l[0]), n(3, f = l[1]), n(4, h = 1), n(5, d = 1));
  }, A = (_) => {
    const E = _ || w;
    if (l)
      if (u = r.elementToImage(E.offsetX, E.offsetY), b) {
        const M = 2 * Math.abs(u[0] - l[0]), B = 2 * Math.abs(u[1] - l[1]);
        n(4, h = g ? Math.max(M, B) : M), n(5, d = g ? h : B), n(2, m = Math.min(u[0], l[0] - h / 2)), n(3, f = Math.min(u[1], l[1] - d / 2));
      } else {
        const M = Math.abs(u[0] - l[0]), B = Math.abs(u[1] - l[1]);
        n(4, h = g ? Math.max(M, B) : M), n(5, d = g ? h : B), n(2, m = Math.min(u[0], l[0])), n(3, f = Math.min(u[1], l[1]));
      }
    _ && (w = _);
  }, S = (_) => {
    s === "click" && _.stopImmediatePropagation();
    const E = performance.now() - T;
    if (s === "click") {
      if (E > 300)
        return;
      _.stopPropagation(), l ? O() : (n(1, l = r.elementToImage(_.offsetX, _.offsetY)), u = l, n(2, m = l[0]), n(3, f = l[1]), n(4, h = 1), n(5, d = 1));
    } else
      l && (E > 300 || h * d > 100 ? (_.stopPropagation(), O()) : (n(1, l = null), u = null, w = void 0));
  }, O = () => {
    if (h * d > 15) {
      const _ = {
        type: q.ELLIPSE,
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
      o("create", _);
    }
    n(1, l = null), u = null, w = void 0;
  }, Y = (_) => {
    _.key === "Shift" && (g = !0, A()), _.key === "Control" && (b = !0, A());
  }, N = (_) => {
    _.key === "Shift" && (g = !1, A()), _.key === "Control" && (b = !1, A());
  };
  Me(() => (document.addEventListener("keyup", N), document.addEventListener("keydown", Y), i("pointerdown", y), i("pointermove", A), i("pointerup", S), () => {
    document.removeEventListener("keyup", N), document.removeEventListener("keydown", Y);
  }));
  function p(_) {
    Pe[_ ? "unshift" : "push"](() => {
      a = _, n(0, a);
    });
  }
  return e.$$set = (_) => {
    "addEventListener" in _ && n(6, i = _.addEventListener), "drawingMode" in _ && n(7, s = _.drawingMode), "transform" in _ && n(8, r = _.transform);
  }, [
    a,
    l,
    m,
    f,
    h,
    d,
    i,
    s,
    r,
    p
  ];
}
class Go extends ne {
  constructor(t) {
    super(), te(this, t, Vo, No, Z, {
      addEventListener: 6,
      drawingMode: 7,
      transform: 8
    });
  }
}
const ft = /* @__PURE__ */ new Map([
  ["rectangle", { tool: Bo }],
  ["polygon", { tool: Uo }],
  ["ellipse", { tool: Go }]
]), it = () => [...ft.keys()], $t = (e) => ft.get(e), Ho = (e, t, n) => ft.set(e, { tool: t, opts: n });
function Fo(e) {
  let t, n, o, i, s;
  return {
    c() {
      t = D("g"), n = D("ellipse"), i = D("ellipse"), c(n, "class", "a9s-outer"), c(n, "style", o = /*computedStyle*/
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
      ), c(t, "data-id", s = /*annotation*/
      e[0].id);
    },
    m(r, a) {
      v(r, t, a), fe(t, n), fe(t, i);
    },
    p(r, [a]) {
      a & /*computedStyle*/
      2 && o !== (o = /*computedStyle*/
      r[1] ? "display:none;" : void 0) && c(n, "style", o), a & /*computedStyle*/
      2 && c(
        i,
        "style",
        /*computedStyle*/
        r[1]
      ), a & /*annotation*/
      1 && s !== (s = /*annotation*/
      r[0].id) && c(t, "data-id", s);
    },
    i: z,
    o: z,
    d(r) {
      r && k(t);
    }
  };
}
function zo(e, t, n) {
  let o, { annotation: i } = t, { geom: s } = t, { style: r = void 0 } = t;
  const { cx: a, cy: l, rx: u, ry: m } = s;
  return e.$$set = (f) => {
    "annotation" in f && n(0, i = f.annotation), "geom" in f && n(6, s = f.geom), "style" in f && n(7, r = f.style);
  }, e.$$.update = () => {
    e.$$.dirty & /*annotation, style*/
    129 && n(1, o = Fe(i, r));
  }, [i, o, a, l, u, m, s, r];
}
class jo extends ne {
  constructor(t) {
    super(), te(this, t, zo, Fo, Z, { annotation: 0, geom: 6, style: 7 });
  }
}
function Ko(e) {
  let t, n, o, i, s;
  return {
    c() {
      t = D("g"), n = D("polygon"), i = D("polygon"), c(n, "class", "a9s-outer"), c(n, "style", o = /*computedStyle*/
      e[1] ? "display:none;" : void 0), c(
        n,
        "points",
        /*points*/
        e[2].map(qo).join(" ")
      ), c(i, "class", "a9s-inner"), c(
        i,
        "style",
        /*computedStyle*/
        e[1]
      ), c(
        i,
        "points",
        /*points*/
        e[2].map(Wo).join(" ")
      ), c(t, "data-id", s = /*annotation*/
      e[0].id);
    },
    m(r, a) {
      v(r, t, a), fe(t, n), fe(t, i);
    },
    p(r, [a]) {
      a & /*computedStyle*/
      2 && o !== (o = /*computedStyle*/
      r[1] ? "display:none;" : void 0) && c(n, "style", o), a & /*computedStyle*/
      2 && c(
        i,
        "style",
        /*computedStyle*/
        r[1]
      ), a & /*annotation*/
      1 && s !== (s = /*annotation*/
      r[0].id) && c(t, "data-id", s);
    },
    i: z,
    o: z,
    d(r) {
      r && k(t);
    }
  };
}
const qo = (e) => e.join(","), Wo = (e) => e.join(",");
function Jo(e, t, n) {
  let o, { annotation: i } = t, { geom: s } = t, { style: r = void 0 } = t;
  const { points: a } = s;
  return e.$$set = (l) => {
    "annotation" in l && n(0, i = l.annotation), "geom" in l && n(3, s = l.geom), "style" in l && n(4, r = l.style);
  }, e.$$.update = () => {
    e.$$.dirty & /*annotation, style*/
    17 && n(1, o = Fe(i, r));
  }, [i, o, a, s, r];
}
class Zo extends ne {
  constructor(t) {
    super(), te(this, t, Jo, Ko, Z, { annotation: 0, geom: 3, style: 4 });
  }
}
function Qo(e) {
  let t, n, o, i, s;
  return {
    c() {
      t = D("g"), n = D("rect"), i = D("rect"), c(n, "class", "a9s-outer"), c(n, "style", o = /*computedStyle*/
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
      ), c(t, "data-id", s = /*annotation*/
      e[0].id);
    },
    m(r, a) {
      v(r, t, a), fe(t, n), fe(t, i);
    },
    p(r, [a]) {
      a & /*computedStyle*/
      32 && o !== (o = /*computedStyle*/
      r[5] ? "display:none;" : void 0) && c(n, "style", o), a & /*x*/
      16 && c(
        n,
        "x",
        /*x*/
        r[4]
      ), a & /*y*/
      8 && c(
        n,
        "y",
        /*y*/
        r[3]
      ), a & /*w*/
      4 && c(
        n,
        "width",
        /*w*/
        r[2]
      ), a & /*h*/
      2 && c(
        n,
        "height",
        /*h*/
        r[1]
      ), a & /*computedStyle*/
      32 && c(
        i,
        "style",
        /*computedStyle*/
        r[5]
      ), a & /*x*/
      16 && c(
        i,
        "x",
        /*x*/
        r[4]
      ), a & /*y*/
      8 && c(
        i,
        "y",
        /*y*/
        r[3]
      ), a & /*w*/
      4 && c(
        i,
        "width",
        /*w*/
        r[2]
      ), a & /*h*/
      2 && c(
        i,
        "height",
        /*h*/
        r[1]
      ), a & /*annotation*/
      1 && s !== (s = /*annotation*/
      r[0].id) && c(t, "data-id", s);
    },
    i: z,
    o: z,
    d(r) {
      r && k(t);
    }
  };
}
function xo(e, t, n) {
  let o, i, s, r, a, { annotation: l } = t, { geom: u } = t, { style: m = void 0 } = t;
  return e.$$set = (f) => {
    "annotation" in f && n(0, l = f.annotation), "geom" in f && n(6, u = f.geom), "style" in f && n(7, m = f.style);
  }, e.$$.update = () => {
    e.$$.dirty & /*annotation, style*/
    129 && n(5, o = Fe(l, m)), e.$$.dirty & /*geom*/
    64 && n(4, { x: i, y: s, w: r, h: a } = u, i, (n(3, s), n(6, u)), (n(2, r), n(6, u)), (n(1, a), n(6, u)));
  }, [l, a, r, s, i, o, u, m];
}
class $o extends ne {
  constructor(t) {
    super(), te(this, t, xo, Qo, Z, { annotation: 0, geom: 6, style: 7 });
  }
}
const vi = {
  elementToImage: (e, t) => [e, t]
}, ei = (e) => ({
  elementToImage: (t, n) => {
    const o = e.getBoundingClientRect(), i = e.createSVGPoint();
    i.x = t + o.x, i.y = n + o.y;
    const { x: s, y: r } = i.matrixTransform(e.getScreenCTM().inverse());
    return [s, r];
  }
}), ti = 250, ni = (e, t) => {
  const n = pe();
  let o;
  return { onPointerDown: () => o = performance.now(), onPointerUp: (r) => {
    if (performance.now() - o < ti) {
      const { x: l, y: u } = oi(r, e), m = t.getAt(l, u);
      m ? n("click", { originalEvent: r, annotation: m }) : n("click", { originalEvent: r });
    }
  } };
}, oi = (e, t) => {
  const n = t.createSVGPoint(), o = t.getBoundingClientRect(), i = e.clientX - o.x, s = e.clientY - o.y, { left: r, top: a } = t.getBoundingClientRect();
  return n.x = i + r, n.y = s + a, n.matrixTransform(t.getScreenCTM().inverse());
};
function vt(e, t, n) {
  const o = e.slice();
  return o[29] = t[n], o;
}
function It(e, t, n) {
  const o = e.slice();
  return o[32] = t[n], o;
}
function xe(e) {
  const t = e.slice(), n = (
    /*annotation*/
    t[32].target.selector
  );
  return t[35] = n, t;
}
function Bt(e) {
  let t = (
    /*annotation*/
    e[32].id
  ), n, o, i = Pt(e);
  return {
    c() {
      i.c(), n = le();
    },
    m(s, r) {
      i.m(s, r), v(s, n, r), o = !0;
    },
    p(s, r) {
      r[0] & /*$store*/
      8192 && Z(t, t = /*annotation*/
      s[32].id) ? (se(), G(i, 1, 1, z), re(), i = Pt(s), i.c(), V(i, 1), i.m(n.parentNode, n)) : i.p(s, r);
    },
    i(s) {
      o || (V(i), o = !0);
    },
    o(s) {
      G(i), o = !1;
    },
    d(s) {
      s && k(n), i.d(s);
    }
  };
}
function ii(e) {
  let t, n;
  return t = new Zo({
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
      ue(t.$$.fragment);
    },
    m(o, i) {
      ae(t, o, i), n = !0;
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
      n || (V(t.$$.fragment, o), n = !0);
    },
    o(o) {
      G(t.$$.fragment, o), n = !1;
    },
    d(o) {
      ce(t, o);
    }
  };
}
function si(e) {
  let t, n;
  return t = new $o({
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
      ue(t.$$.fragment);
    },
    m(o, i) {
      ae(t, o, i), n = !0;
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
      n || (V(t.$$.fragment, o), n = !0);
    },
    o(o) {
      G(t.$$.fragment, o), n = !1;
    },
    d(o) {
      ce(t, o);
    }
  };
}
function ri(e) {
  let t, n;
  return t = new jo({
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
      ue(t.$$.fragment);
    },
    m(o, i) {
      ae(t, o, i), n = !0;
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
      n || (V(t.$$.fragment, o), n = !0);
    },
    o(o) {
      G(t.$$.fragment, o), n = !1;
    },
    d(o) {
      ce(t, o);
    }
  };
}
function Pt(e) {
  let t, n, o, i;
  const s = [ri, si, ii], r = [];
  function a(l, u) {
    return (
      /*selector*/
      l[35].type === q.ELLIPSE ? 0 : (
        /*selector*/
        l[35].type === q.RECTANGLE ? 1 : (
          /*selector*/
          l[35].type === q.POLYGON ? 2 : -1
        )
      )
    );
  }
  return ~(t = a(e)) && (n = r[t] = s[t](e)), {
    c() {
      n && n.c(), o = le();
    },
    m(l, u) {
      ~t && r[t].m(l, u), v(l, o, u), i = !0;
    },
    p(l, u) {
      let m = t;
      t = a(l), t === m ? ~t && r[t].p(l, u) : (n && (se(), G(r[m], 1, 1, () => {
        r[m] = null;
      }), re()), ~t ? (n = r[t], n ? n.p(l, u) : (n = r[t] = s[t](l), n.c()), V(n, 1), n.m(o.parentNode, o)) : n = null);
    },
    i(l) {
      i || (V(n), i = !0);
    },
    o(l) {
      G(n), i = !1;
    },
    d(l) {
      ~t && r[t].d(l), l && k(o);
    }
  };
}
function Yt(e) {
  let t = !/*isEditable*/
  e[7](
    /*annotation*/
    e[32]
  ), n, o, i = t && Bt(xe(e));
  return {
    c() {
      i && i.c(), n = le();
    },
    m(s, r) {
      i && i.m(s, r), v(s, n, r), o = !0;
    },
    p(s, r) {
      r[0] & /*isEditable, $store*/
      8320 && (t = !/*isEditable*/
      s[7](
        /*annotation*/
        s[32]
      )), t ? i ? (i.p(xe(s), r), r[0] & /*isEditable, $store*/
      8320 && V(i, 1)) : (i = Bt(xe(s)), i.c(), V(i, 1), i.m(n.parentNode, n)) : i && (se(), G(i, 1, 1, () => {
        i = null;
      }), re());
    },
    i(s) {
      o || (V(i), o = !0);
    },
    o(s) {
      G(i), o = !1;
    },
    d(s) {
      i && i.d(s), s && k(n);
    }
  };
}
function Xt(e) {
  let t, n, o, i;
  const s = [ai, li], r = [];
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
  return ~(t = a(e)) && (n = r[t] = s[t](e)), {
    c() {
      n && n.c(), o = le();
    },
    m(l, u) {
      ~t && r[t].m(l, u), v(l, o, u), i = !0;
    },
    p(l, u) {
      let m = t;
      t = a(l), t === m ? ~t && r[t].p(l, u) : (n && (se(), G(r[m], 1, 1, () => {
        r[m] = null;
      }), re()), ~t ? (n = r[t], n ? n.p(l, u) : (n = r[t] = s[t](l), n.c()), V(n, 1), n.m(o.parentNode, o)) : n = null);
    },
    i(l) {
      i || (V(n), i = !0);
    },
    o(l) {
      G(n), i = !1;
    },
    d(l) {
      ~t && r[t].d(l), l && k(o);
    }
  };
}
function li(e) {
  let t = (
    /*toolName*/
    e[2]
  ), n, o, i = Dt(e);
  return {
    c() {
      i.c(), n = le();
    },
    m(s, r) {
      i.m(s, r), v(s, n, r), o = !0;
    },
    p(s, r) {
      r[0] & /*toolName*/
      4 && Z(t, t = /*toolName*/
      s[2]) ? (se(), G(i, 1, 1, z), re(), i = Dt(s), i.c(), V(i, 1), i.m(n.parentNode, n)) : i.p(s, r);
    },
    i(s) {
      o || (V(i), o = !0);
    },
    o(s) {
      G(i), o = !1;
    },
    d(s) {
      s && k(n), i.d(s);
    }
  };
}
function ai(e) {
  let t, n, o = (
    /*editableAnnotations*/
    e[6]
  ), i = [];
  for (let r = 0; r < o.length; r += 1)
    i[r] = Ct(vt(e, o, r));
  const s = (r) => G(i[r], 1, 1, () => {
    i[r] = null;
  });
  return {
    c() {
      for (let r = 0; r < i.length; r += 1)
        i[r].c();
      t = le();
    },
    m(r, a) {
      for (let l = 0; l < i.length; l += 1)
        i[l] && i[l].m(r, a);
      v(r, t, a), n = !0;
    },
    p(r, a) {
      if (a[0] & /*editableAnnotations, drawingEl, style, transform, $scale, onChangeSelected*/
      279634) {
        o = /*editableAnnotations*/
        r[6];
        let l;
        for (l = 0; l < o.length; l += 1) {
          const u = vt(r, o, l);
          i[l] ? (i[l].p(u, a), V(i[l], 1)) : (i[l] = Ct(u), i[l].c(), V(i[l], 1), i[l].m(t.parentNode, t));
        }
        for (se(), l = o.length; l < i.length; l += 1)
          s(l);
        re();
      }
    },
    i(r) {
      if (!n) {
        for (let a = 0; a < o.length; a += 1)
          V(i[a]);
        n = !0;
      }
    },
    o(r) {
      i = i.filter(Boolean);
      for (let a = 0; a < i.length; a += 1)
        G(i[a]);
      n = !1;
    },
    d(r) {
      st(i, r), r && k(t);
    }
  };
}
function Dt(e) {
  let t, n;
  return t = new ko({
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
      ue(t.$$.fragment);
    },
    m(o, i) {
      ae(t, o, i), n = !0;
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
      n || (V(t.$$.fragment, o), n = !0);
    },
    o(o) {
      G(t.$$.fragment, o), n = !1;
    },
    d(o) {
      ce(t, o);
    }
  };
}
function Rt(e) {
  let t, n;
  return t = new Lo({
    props: {
      target: (
        /*drawingEl*/
        e[4]
      ),
      editor: Tt(
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
    H(
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
      ue(t.$$.fragment);
    },
    m(o, i) {
      ae(t, o, i), n = !0;
    },
    p(o, i) {
      e = o;
      const s = {};
      i[0] & /*drawingEl*/
      16 && (s.target = /*drawingEl*/
      e[4]), i[0] & /*editableAnnotations*/
      64 && (s.editor = Tt(
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
      n || (V(t.$$.fragment, o), n = !0);
    },
    o(o) {
      G(t.$$.fragment, o), n = !1;
    },
    d(o) {
      ce(t, o);
    }
  };
}
function Ct(e) {
  let t = (
    /*editable*/
    e[29].id
  ), n, o, i = Rt(e);
  return {
    c() {
      i.c(), n = le();
    },
    m(s, r) {
      i.m(s, r), v(s, n, r), o = !0;
    },
    p(s, r) {
      r[0] & /*editableAnnotations*/
      64 && Z(t, t = /*editable*/
      s[29].id) ? (se(), G(i, 1, 1, z), re(), i = Rt(s), i.c(), V(i, 1), i.m(n.parentNode, n)) : i.p(s, r);
    },
    i(s) {
      o || (V(i), o = !0);
    },
    o(s) {
      G(i), o = !1;
    },
    d(s) {
      s && k(n), i.d(s);
    }
  };
}
function ci(e) {
  let t, n, o, i, s, r, a = (
    /*$store*/
    e[13]
  ), l = [];
  for (let f = 0; f < a.length; f += 1)
    l[f] = Yt(It(e, a, f));
  const u = (f) => G(l[f], 1, 1, () => {
    l[f] = null;
  });
  let m = (
    /*drawingEl*/
    e[4] && Xt(e)
  );
  return {
    c() {
      t = D("svg"), n = D("g");
      for (let f = 0; f < l.length; f += 1)
        l[f].c();
      o = D("g"), m && m.c(), c(o, "class", "drawing"), c(t, "class", "a9s-annotationlayer"), mt(
        t,
        "drawing",
        /*tool*/
        e[12]
      );
    },
    m(f, h) {
      v(f, t, h), fe(t, n);
      for (let d = 0; d < l.length; d += 1)
        l[d] && l[d].m(n, null);
      fe(t, o), m && m.m(o, null), e[25](o), e[26](t), i = !0, s || (r = [
        F(t, "pointerup", function() {
          H(
            /*onPointerUp*/
            e[8]
          ) && e[8].apply(this, arguments);
        }),
        F(t, "pointerdown", function() {
          H(
            /*onPointerDown*/
            e[9]
          ) && e[9].apply(this, arguments);
        })
      ], s = !0);
    },
    p(f, h) {
      if (e = f, h[0] & /*$store, style, isEditable*/
      8322) {
        a = /*$store*/
        e[13];
        let d;
        for (d = 0; d < a.length; d += 1) {
          const g = It(e, a, d);
          l[d] ? (l[d].p(g, h), V(l[d], 1)) : (l[d] = Yt(g), l[d].c(), V(l[d], 1), l[d].m(n, null));
        }
        for (se(), d = a.length; d < l.length; d += 1)
          u(d);
        re();
      }
      /*drawingEl*/
      e[4] ? m ? (m.p(e, h), h[0] & /*drawingEl*/
      16 && V(m, 1)) : (m = Xt(e), m.c(), V(m, 1), m.m(o, null)) : m && (se(), G(m, 1, 1, () => {
        m = null;
      }), re()), (!i || h[0] & /*tool*/
      4096) && mt(
        t,
        "drawing",
        /*tool*/
        e[12]
      );
    },
    i(f) {
      if (!i) {
        for (let h = 0; h < a.length; h += 1)
          V(l[h]);
        V(m), i = !0;
      }
    },
    o(f) {
      l = l.filter(Boolean);
      for (let h = 0; h < l.length; h += 1)
        G(l[h]);
      G(m), i = !1;
    },
    d(f) {
      f && k(t), st(l, f), m && m.d(), e[25](null), e[26](null), s = !1, oe(r);
    }
  };
}
function fi(e, t, n) {
  let o, i, s, r, a, l, u, m, f, h, d = z, g = () => (d(), d = Ht(p, (P) => n(14, h = P)), p);
  e.$$.on_destroy.push(() => d());
  let { drawingEnabled: b } = t, { image: T } = t, { preferredDrawingMode: w } = t, { state: y } = t, { style: A = void 0 } = t, { toolName: S = it().length > 0 ? it()[0] : void 0 } = t, { user: O } = t, Y, N, p;
  Me(() => g(n(5, p = Xo(T, N))));
  const { selection: _, store: E } = y;
  ht(e, _, (P) => n(24, m = P)), ht(e, E, (P) => n(13, f = P));
  let M = null, B = null;
  const C = (P) => {
    E.unobserve(M);
    const Q = P.filter(({ editable: K }) => K).map(({ id: K }) => K);
    Q.length > 0 ? (n(6, B = Q.map((K) => E.getAnnotation(K))), M = (K) => {
      const { updated: de } = K.changes;
      n(6, B = de.map((W) => W.newValue));
    }, E.observe(M, { annotations: Q })) : n(6, B = null);
  }, U = (P) => {
    const Q = Wt(), K = {
      id: Q,
      bodies: [],
      target: {
        annotation: Q,
        selector: P.detail,
        creator: O,
        created: /* @__PURE__ */ new Date()
      }
    };
    E.addAnnotation(K), _.setSelected(K.id);
  }, X = (P) => (Q) => {
    var he;
    const { target: K } = P, de = 10 * 60 * 1e3, W = ((he = K.creator) == null ? void 0 : he.id) !== O.id || !K.created || (/* @__PURE__ */ new Date()).getTime() - K.created.getTime() > de;
    E.updateTarget({
      ...K,
      selector: Q.detail,
      created: W ? K.created : /* @__PURE__ */ new Date(),
      updated: W ? /* @__PURE__ */ new Date() : null,
      updatedBy: W ? O : null
    });
  };
  function _e(P) {
    Pe[P ? "unshift" : "push"](() => {
      Y = P, n(4, Y);
    });
  }
  function Le(P) {
    Pe[P ? "unshift" : "push"](() => {
      N = P, n(3, N);
    });
  }
  return e.$$set = (P) => {
    "drawingEnabled" in P && n(0, b = P.drawingEnabled), "image" in P && n(19, T = P.image), "preferredDrawingMode" in P && n(20, w = P.preferredDrawingMode), "state" in P && n(21, y = P.state), "style" in P && n(1, A = P.style), "toolName" in P && n(2, S = P.toolName), "user" in P && n(22, O = P.user);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*toolName*/
    4 && n(12, { tool: o, opts: i } = $t(S), o, (n(23, i), n(2, S))), e.$$.dirty[0] & /*opts, preferredDrawingMode*/
    9437184 && n(11, s = (i == null ? void 0 : i.drawingMode) || w), e.$$.dirty[0] & /*svgEl*/
    8 && n(10, r = ei(N)), e.$$.dirty[0] & /*svgEl*/
    8 && n(9, { onPointerDown: a, onPointerUp: l } = ni(N, E), a, (n(8, l), n(3, N))), e.$$.dirty[0] & /*$selection*/
    16777216 && n(7, u = (P) => m.selected.find((Q) => Q.id === P.id && Q.editable)), e.$$.dirty[0] & /*$selection*/
    16777216 && C(m.selected);
  }, [
    b,
    A,
    S,
    N,
    Y,
    p,
    B,
    u,
    l,
    a,
    r,
    s,
    o,
    f,
    h,
    _,
    E,
    U,
    X,
    T,
    w,
    y,
    O,
    i,
    m,
    _e,
    Le
  ];
}
class ui extends ne {
  constructor(t) {
    super(), te(
      this,
      t,
      fi,
      ci,
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
function di(e, t, n, o, i) {
  en(e, t, n || 0, o || e.length - 1, i || hi);
}
function en(e, t, n, o, i) {
  for (; o > n; ) {
    if (o - n > 600) {
      var s = o - n + 1, r = t - n + 1, a = Math.log(s), l = 0.5 * Math.exp(2 * a / 3), u = 0.5 * Math.sqrt(a * l * (s - l) / s) * (r - s / 2 < 0 ? -1 : 1), m = Math.max(n, Math.floor(t - r * l / s + u)), f = Math.min(o, Math.floor(t + (s - r) * l / s + u));
      en(e, t, m, f, i);
    }
    var h = e[t], d = n, g = o;
    for (Oe(e, n, t), i(e[o], h) > 0 && Oe(e, n, o); d < g; ) {
      for (Oe(e, d, g), d++, g--; i(e[d], h) < 0; )
        d++;
      for (; i(e[g], h) > 0; )
        g--;
    }
    i(e[n], h) === 0 ? Oe(e, n, g) : (g++, Oe(e, g, o)), g <= t && (n = g + 1), t <= g && (o = g - 1);
  }
}
function Oe(e, t, n) {
  var o = e[t];
  e[t] = e[n], e[n] = o;
}
function hi(e, t) {
  return e < t ? -1 : e > t ? 1 : 0;
}
class mi {
  constructor(t = 9) {
    this._maxEntries = Math.max(4, t), this._minEntries = Math.max(2, Math.ceil(this._maxEntries * 0.4)), this.clear();
  }
  all() {
    return this._all(this.data, []);
  }
  search(t) {
    let n = this.data;
    const o = [];
    if (!Ve(t, n))
      return o;
    const i = this.toBBox, s = [];
    for (; n; ) {
      for (let r = 0; r < n.children.length; r++) {
        const a = n.children[r], l = n.leaf ? i(a) : a;
        Ve(t, l) && (n.leaf ? o.push(a) : et(t, l) ? this._all(a, o) : s.push(a));
      }
      n = s.pop();
    }
    return o;
  }
  collides(t) {
    let n = this.data;
    if (!Ve(t, n))
      return !1;
    const o = [];
    for (; n; ) {
      for (let i = 0; i < n.children.length; i++) {
        const s = n.children[i], r = n.leaf ? this.toBBox(s) : s;
        if (Ve(t, r)) {
          if (n.leaf || et(t, r))
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
    return this.data = Te([]), this;
  }
  remove(t, n) {
    if (!t)
      return this;
    let o = this.data;
    const i = this.toBBox(t), s = [], r = [];
    let a, l, u;
    for (; o || s.length; ) {
      if (o || (o = s.pop(), l = s[s.length - 1], a = r.pop(), u = !0), o.leaf) {
        const m = gi(t, o.children, n);
        if (m !== -1)
          return o.children.splice(m, 1), s.push(o), this._condense(s), this;
      }
      !u && !o.leaf && et(o, i) ? (s.push(o), r.push(a), a = 0, l = o, o = o.children[0]) : l ? (a++, o = l.children[a], u = !1) : o = null;
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
    let r = this._maxEntries, a;
    if (s <= r)
      return a = Te(t.slice(n, o + 1)), Ee(a, this.toBBox), a;
    i || (i = Math.ceil(Math.log(s) / Math.log(r)), r = Math.ceil(s / Math.pow(r, i - 1))), a = Te([]), a.leaf = !1, a.height = i;
    const l = Math.ceil(s / r), u = l * Math.ceil(Math.sqrt(r));
    Ut(t, n, o, u, this.compareMinX);
    for (let m = n; m <= o; m += u) {
      const f = Math.min(m + u - 1, o);
      Ut(t, m, f, l, this.compareMinY);
      for (let h = m; h <= f; h += l) {
        const d = Math.min(h + l - 1, f);
        a.children.push(this._build(t, h, d, i - 1));
      }
    }
    return Ee(a, this.toBBox), a;
  }
  _chooseSubtree(t, n, o, i) {
    for (; i.push(n), !(n.leaf || i.length - 1 === o); ) {
      let s = 1 / 0, r = 1 / 0, a;
      for (let l = 0; l < n.children.length; l++) {
        const u = n.children[l], m = $e(u), f = yi(t, u) - m;
        f < r ? (r = f, s = m < s ? m : s, a = u) : f === r && m < s && (s = m, a = u);
      }
      n = a || n.children[0];
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
    const r = this._chooseSplitIndex(o, s, i), a = Te(o.children.splice(r, o.children.length - r));
    a.height = o.height, a.leaf = o.leaf, Ee(o, this.toBBox), Ee(a, this.toBBox), n ? t[n - 1].children.push(a) : this._splitRoot(o, a);
  }
  _splitRoot(t, n) {
    this.data = Te([t, n]), this.data.height = t.height + 1, this.data.leaf = !1, Ee(this.data, this.toBBox);
  }
  _chooseSplitIndex(t, n, o) {
    let i, s = 1 / 0, r = 1 / 0;
    for (let a = n; a <= o - n; a++) {
      const l = ke(t, 0, a, this.toBBox), u = ke(t, a, o, this.toBBox), m = wi(l, u), f = $e(l) + $e(u);
      m < s ? (s = m, i = a, r = f < r ? f : r) : m === s && f < r && (r = f, i = a);
    }
    return i || o - n;
  }
  // sorts node children by the best axis for split
  _chooseSplitAxis(t, n, o) {
    const i = t.leaf ? this.compareMinX : pi, s = t.leaf ? this.compareMinY : _i, r = this._allDistMargin(t, n, o, i), a = this._allDistMargin(t, n, o, s);
    r < a && t.children.sort(i);
  }
  // total margin of all possible split distributions where each node is at least m full
  _allDistMargin(t, n, o, i) {
    t.children.sort(i);
    const s = this.toBBox, r = ke(t, 0, n, s), a = ke(t, o - n, o, s);
    let l = Ne(r) + Ne(a);
    for (let u = n; u < o - n; u++) {
      const m = t.children[u];
      ve(r, t.leaf ? s(m) : m), l += Ne(r);
    }
    for (let u = o - n - 1; u >= n; u--) {
      const m = t.children[u];
      ve(a, t.leaf ? s(m) : m), l += Ne(a);
    }
    return l;
  }
  _adjustParentBBoxes(t, n, o) {
    for (let i = o; i >= 0; i--)
      ve(n[i], t);
  }
  _condense(t) {
    for (let n = t.length - 1, o; n >= 0; n--)
      t[n].children.length === 0 ? n > 0 ? (o = t[n - 1].children, o.splice(o.indexOf(t[n]), 1)) : this.clear() : Ee(t[n], this.toBBox);
  }
}
function gi(e, t, n) {
  if (!n)
    return t.indexOf(e);
  for (let o = 0; o < t.length; o++)
    if (n(e, t[o]))
      return o;
  return -1;
}
function Ee(e, t) {
  ke(e, 0, e.children.length, t, e);
}
function ke(e, t, n, o, i) {
  i || (i = Te(null)), i.minX = 1 / 0, i.minY = 1 / 0, i.maxX = -1 / 0, i.maxY = -1 / 0;
  for (let s = t; s < n; s++) {
    const r = e.children[s];
    ve(i, e.leaf ? o(r) : r);
  }
  return i;
}
function ve(e, t) {
  return e.minX = Math.min(e.minX, t.minX), e.minY = Math.min(e.minY, t.minY), e.maxX = Math.max(e.maxX, t.maxX), e.maxY = Math.max(e.maxY, t.maxY), e;
}
function pi(e, t) {
  return e.minX - t.minX;
}
function _i(e, t) {
  return e.minY - t.minY;
}
function $e(e) {
  return (e.maxX - e.minX) * (e.maxY - e.minY);
}
function Ne(e) {
  return e.maxX - e.minX + (e.maxY - e.minY);
}
function yi(e, t) {
  return (Math.max(t.maxX, e.maxX) - Math.min(t.minX, e.minX)) * (Math.max(t.maxY, e.maxY) - Math.min(t.minY, e.minY));
}
function wi(e, t) {
  const n = Math.max(e.minX, t.minX), o = Math.max(e.minY, t.minY), i = Math.min(e.maxX, t.maxX), s = Math.min(e.maxY, t.maxY);
  return Math.max(0, i - n) * Math.max(0, s - o);
}
function et(e, t) {
  return e.minX <= t.minX && e.minY <= t.minY && t.maxX <= e.maxX && t.maxY <= e.maxY;
}
function Ve(e, t) {
  return t.minX <= e.maxX && t.minY <= e.maxY && t.maxX >= e.minX && t.maxY >= e.minY;
}
function Te(e) {
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
function Ut(e, t, n, o, i) {
  const s = [t, n];
  for (; s.length; ) {
    if (n = s.pop(), t = s.pop(), n - t <= o)
      continue;
    const r = t + Math.ceil((n - t) / o / 2) * o;
    di(e, r, t, n, i), s.push(t, r, r, n);
  }
}
const bi = () => {
  const e = new mi(), t = /* @__PURE__ */ new Map(), n = () => [...t.values()], o = () => {
    e.clear(), t.clear();
  }, i = (f) => {
    const { minX: h, minY: d, maxX: g, maxY: b } = f.selector.geometry.bounds, T = { minX: h, minY: d, maxX: g, maxY: b, target: f };
    e.insert(T), t.set(f.annotation, T);
  }, s = (f) => {
    const h = t.get(f.annotation);
    e.remove(h), t.delete(f.annotation);
  };
  return {
    all: n,
    clear: o,
    getAt: (f, h) => {
      const g = e.search({
        minX: f,
        minY: h,
        maxX: f,
        maxY: h
      }).map((b) => b.target).filter((b) => b.selector.type === q.RECTANGLE || gn(b.selector, f, h));
      if (g.length > 0)
        return g.sort((b, T) => ot(b.selector) - ot(T.selector)), g[0];
    },
    getIntersecting: (f, h, d, g) => e.search({
      minX: f,
      minY: h,
      maxX: f + d,
      maxY: h + g
    }).map((b) => b.target),
    insert: i,
    remove: s,
    set: (f, h = !0) => {
      h && o();
      const d = f.map((g) => {
        const { minX: b, minY: T, maxX: w, maxY: y } = g.selector.geometry.bounds;
        return { minX: b, minY: T, maxX: w, maxY: y, target: g };
      });
      d.forEach((g) => t.set(g.target.annotation, g)), e.load(d);
    },
    size: () => e.all().length,
    update: (f, h) => {
      s(f), i(h);
    }
  };
}, Ei = (e) => {
  const t = Fn(), n = bi(), o = Yn(t, e.pointerSelectAction), i = Pn(t), s = Wn();
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
    viewport: s
  };
}, Ai = (e) => {
  const t = Ei(e);
  return {
    ...t,
    store: zn(t.store)
  };
}, Ti = (e) => {
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
      const r = Math.round(s * t.width / 10), a = Math.round(i * t.height / 10), l = n.getImageData(r, a, 1, 1).data, u = (0.299 * l[0] + 0.587 * l[1] + 0.114 * l[2]) / 255;
      o += u;
    }
  return o / 81;
}, Si = (e) => {
  const t = Ti(e), n = t > 0.6 ? "dark" : "light";
  return console.log(`[Annotorious] Image brightness: ${t.toFixed(1)}. Setting ${n} theme.`), n;
}, Nt = (e, t, n) => t.setAttribute("data-theme", n === "auto" ? Si(e) : n), Mi = (e, t) => ({
  ...e,
  drawingEnabled: e.drawingEnabled === void 0 ? t.drawingEnabled : e.drawingEnabled,
  drawingMode: e.drawingMode || t.drawingMode,
  pointerSelectAction: e.pointerSelectAction || t.pointerSelectAction,
  theme: e.theme || t.theme
}), Vt = navigator.userAgent.indexOf("Mac OS X") !== -1, Li = (e, t) => {
  const n = t || document, o = (r) => {
    r.key === "Z" && r.ctrlKey ? e.undo() : r.key === "Y" && r.ctrlKey && e.redo();
  }, i = (r) => {
    r.key === "z" && r.metaKey && (r.shiftKey ? e.redo() : e.undo());
  }, s = () => {
    Vt ? n.removeEventListener("keydown", i) : n.removeEventListener("keydown", o);
  };
  return Vt ? n.addEventListener("keydown", i) : n.addEventListener("keydown", o), {
    destroy: s
  };
};
const Ii = (e, t = {}) => {
  if (!e)
    throw "Missing argument: image";
  const n = typeof e == "string" ? document.getElementById(e) : e, o = Mi(t, {
    drawingEnabled: !0,
    drawingMode: "drag",
    pointerSelectAction: Jt.EDIT,
    theme: "light"
  }), i = Ai(o), { selection: s, store: r } = i, a = qn(r), l = Jn(
    i,
    a,
    o.adapter,
    o.autoSave
  ), u = document.createElement("DIV");
  u.style.position = "relative", u.style.display = "inline-block", n.style.display = "block", n.parentNode.insertBefore(u, n), u.appendChild(n);
  const m = Li(a);
  let f = no();
  Nt(n, u, o.theme);
  const h = new ui({
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
  h.$on("click", (p) => {
    const { originalEvent: _, annotation: E } = p.detail;
    E ? s.clickSelect(E.id, _) : s.isEmpty() || s.clear();
  });
  const d = Qn(i, a, o.adapter), g = () => {
    h.$destroy(), u.parentNode.insertBefore(n, u), u.parentNode.removeChild(u), m.destroy(), a.destroy();
  }, b = () => f, T = (p, _, E) => Ho(p, _, E), w = (p, _) => Eo(p, _), y = (p) => {
    if (!$t(p))
      throw `No drawing tool named ${p}`;
    h.$set({ toolName: p });
  }, A = (p) => h.$set({ drawingEnabled: p }), S = (p) => {
    console.warn("Filter not implemented yet");
  }, O = (p) => h.$set({ style: p }), Y = (p) => Nt(n, u, p), N = (p) => {
    f = p, h.$set({ user: p });
  };
  return {
    ...d,
    destroy: g,
    getUser: b,
    listDrawingTools: it,
    on: l.on,
    off: l.off,
    registerDrawingTool: T,
    registerShapeEditor: w,
    setDrawingEnabled: A,
    setDrawingTool: y,
    setFilter: S,
    setStyle: O,
    setTheme: Y,
    setUser: N,
    state: i
  };
};
export {
  ct as Editor,
  Lo as EditorMount,
  bo as EllipseEditor,
  L as Handle,
  vi as IdentityTransform,
  uo as PolygonEditor,
  po as RectangleEditor,
  yn as RectangleUtil,
  Bo as RubberbandRectangle,
  ui as SVGAnnotationLayer,
  q as ShapeType,
  ko as ToolMount,
  Oi as W3CImageFormat,
  ni as addEventListeners,
  He as boundsFromPoints,
  ot as computeArea,
  Ii as createImageAnnotator,
  Ei as createImageAnnotatorState,
  ei as createSVGTransform,
  Ai as createSvelteImageAnnotatorState,
  Si as detectTheme,
  Ze as distance,
  Xo as enableResponsive,
  Mi as fillDefaults,
  Tt as getEditor,
  $t as getTool,
  Li as initKeyboardCommands,
  gn as intersects,
  ki as isTouch,
  it as listDrawingTools,
  wn as parseFragmentSelector,
  Mn as parseSVGSelector,
  ro as parseW3CImageAnnotation,
  Eo as registerEditor,
  lt as registerShapeUtil,
  Ho as registerTool,
  Ti as sampleBrightness,
  bn as serializeFragmentSelector,
  Ln as serializeSVGSelector,
  lo as serializeW3CImageAnnotation,
  Nt as setTheme
};
//# sourceMappingURL=annotorious.es.js.map
