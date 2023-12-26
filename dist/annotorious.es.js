var on = Object.defineProperty;
var sn = (e, t, n) => t in e ? on(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Je = (e, t, n) => (sn(e, typeof t != "symbol" ? t + "" : t, n), n);
function z() {
}
function rn(e, t) {
  for (const n in t)
    e[n] = t[n];
  return (
    /** @type {T & S} */
    e
  );
}
function Ft(e) {
  return e();
}
function mt() {
  return /* @__PURE__ */ Object.create(null);
}
function oe(e) {
  e.forEach(Ft);
}
function G(e) {
  return typeof e == "function";
}
function Z(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function ln(e) {
  return Object.keys(e).length === 0;
}
function zt(e, ...t) {
  if (e == null) {
    for (const o of t)
      o(void 0);
    return z;
  }
  const n = e.subscribe(...t);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function gt(e, t, n) {
  e.$$.on_destroy.push(zt(t, n));
}
function an(e, t, n, o) {
  if (e) {
    const i = jt(e, t, n, o);
    return e[0](i);
  }
}
function jt(e, t, n, o) {
  return e[1] && o ? rn(n.ctx.slice(), e[1](o(t))) : n.ctx;
}
function cn(e, t, n, o) {
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
function fn(e, t, n, o, i, s) {
  if (i) {
    const r = jt(t, n, o, s);
    e.p(r, i);
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
function fe(e, t) {
  e.appendChild(t);
}
function k(e, t, n) {
  e.insertBefore(t, n || null);
}
function v(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function lt(e, t) {
  for (let n = 0; n < e.length; n += 1)
    e[n] && e[n].d(t);
}
function D(e) {
  return document.createElementNS("http://www.w3.org/2000/svg", e);
}
function Kt(e) {
  return document.createTextNode(e);
}
function x() {
  return Kt(" ");
}
function le() {
  return Kt("");
}
function F(e, t, n, o) {
  return e.addEventListener(t, n, o), () => e.removeEventListener(t, n, o);
}
function c(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function dn(e) {
  return Array.from(e.childNodes);
}
function pt(e, t, n) {
  e.classList.toggle(t, !!n);
}
function hn(e, t, { bubbles: n = !1, cancelable: o = !1 } = {}) {
  return new CustomEvent(e, { detail: t, bubbles: n, cancelable: o });
}
let Pe;
function Be(e) {
  Pe = e;
}
function qt() {
  if (!Pe)
    throw new Error("Function called outside component initialization");
  return Pe;
}
function Le(e) {
  qt().$$.on_mount.push(e);
}
function pe() {
  const e = qt();
  return (t, n, { cancelable: o = !1 } = {}) => {
    const i = e.$$.callbacks[t];
    if (i) {
      const s = hn(
        /** @type {string} */
        t,
        n,
        { cancelable: o }
      );
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
const Ae = [], Ye = [];
let Se = [];
const yt = [], mn = /* @__PURE__ */ Promise.resolve();
let it = !1;
function gn() {
  it || (it = !0, mn.then(Wt));
}
function st(e) {
  Se.push(e);
}
const Ze = /* @__PURE__ */ new Set();
let _e = 0;
function Wt() {
  if (_e !== 0)
    return;
  const e = Pe;
  do {
    try {
      for (; _e < Ae.length; ) {
        const t = Ae[_e];
        _e++, Be(t), pn(t.$$);
      }
    } catch (t) {
      throw Ae.length = 0, _e = 0, t;
    }
    for (Be(null), Ae.length = 0, _e = 0; Ye.length; )
      Ye.pop()();
    for (let t = 0; t < Se.length; t += 1) {
      const n = Se[t];
      Ze.has(n) || (Ze.add(n), n());
    }
    Se.length = 0;
  } while (Ae.length);
  for (; yt.length; )
    yt.pop()();
  it = !1, Ze.clear(), Be(e);
}
function pn(e) {
  if (e.fragment !== null) {
    e.update(), oe(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(st);
  }
}
function yn(e) {
  const t = [], n = [];
  Se.forEach((o) => e.indexOf(o) === -1 ? t.push(o) : n.push(o)), n.forEach((o) => o()), Se = t;
}
const He = /* @__PURE__ */ new Set();
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
function U(e, t) {
  e && e.i && (He.delete(e), e.i(t));
}
function V(e, t, n, o) {
  if (e && e.o) {
    if (He.has(e))
      return;
    He.add(e), me.c.push(() => {
      He.delete(e), o && (n && e.d(1), o());
    }), e.o(t);
  } else
    o && o();
}
function Me(e) {
  return (e == null ? void 0 : e.length) !== void 0 ? e : Array.from(e);
}
function ue(e) {
  e && e.c();
}
function ae(e, t, n) {
  const { fragment: o, after_update: i } = e.$$;
  o && o.m(t, n), st(() => {
    const s = e.$$.on_mount.map(Ft).filter(G);
    e.$$.on_destroy ? e.$$.on_destroy.push(...s) : oe(s), e.$$.on_mount = [];
  }), i.forEach(st);
}
function ce(e, t) {
  const n = e.$$;
  n.fragment !== null && (yn(n.after_update), oe(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function _n(e, t) {
  e.$$.dirty[0] === -1 && (Ae.push(e), gn(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function te(e, t, n, o, i, s, r = null, a = [-1]) {
  const l = Pe;
  Be(e);
  const u = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: s,
    update: z,
    not_equal: i,
    bound: mt(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (l ? l.$$.context : [])),
    // everything else
    callbacks: mt(),
    dirty: a,
    skip_bound: !1,
    root: t.target || l.$$.root
  };
  r && r(u.root);
  let m = !1;
  if (u.ctx = n ? n(e, t.props || {}, (f, h, ...d) => {
    const g = d.length ? d[0] : h;
    return u.ctx && i(u.ctx[f], u.ctx[f] = g) && (!u.skip_bound && u.bound[f] && u.bound[f](g), m && _n(e, f)), h;
  }) : [], u.update(), m = !0, oe(u.before_update), u.fragment = o ? o(u.ctx) : !1, t.target) {
    if (t.hydrate) {
      const f = dn(t.target);
      u.fragment && u.fragment.l(f), f.forEach(v);
    } else
      u.fragment && u.fragment.c();
    t.intro && U(e.$$.fragment), ae(e, t.target, t.anchor), Wt();
  }
  Be(l);
}
class ne {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Je(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Je(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    ce(this, 1), this.$destroy = z;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(t, n) {
    if (!G(n))
      return z;
    const o = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return o.push(n), () => {
      const i = o.indexOf(n);
      i !== -1 && o.splice(i, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(t) {
    this.$$set && !ln(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
const wn = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(wn);
var q = /* @__PURE__ */ ((e) => (e.ELLIPSE = "ELLIPSE", e.POLYGON = "POLYGON", e.RECTANGLE = "RECTANGLE", e.FREEHAND = "FREEHAND", e))(q || {});
const at = {}, ct = (e, t) => at[e] = t, rt = (e) => at[e.type].area(e), bn = (e, t, n) => at[e.type].intersects(e, t, n), Fe = (e) => {
  let t = 1 / 0, n = 1 / 0, o = -1 / 0, i = -1 / 0;
  return e.forEach(([s, r]) => {
    t = Math.min(t, s), n = Math.min(n, r), o = Math.max(o, s), i = Math.max(i, r);
  }), { minX: t, minY: n, maxX: o, maxY: i };
}, En = {
  area: (e) => Math.PI * e.geometry.rx * e.geometry.ry,
  intersects: (e, t, n) => {
    const { cx: o, cy: i, rx: s, ry: r } = e.geometry, a = 0, l = Math.cos(a), u = Math.sin(a), m = t - o, f = n - i, h = l * m + u * f, d = u * m - l * f;
    return h * h / (s * s) + d * d / (r * r) <= 1;
  }
};
ct(q.ELLIPSE, En);
const An = {
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
ct(q.POLYGON, An);
const Tn = {
  area: (e) => e.geometry.w * e.geometry.h,
  intersects: (e, t, n) => t >= e.geometry.x && t <= e.geometry.x + e.geometry.w && n >= e.geometry.y && n <= e.geometry.y + e.geometry.h
};
ct(q.RECTANGLE, Tn);
const Sn = (e, t = !1) => {
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
}, Mn = (e) => {
  const { x: t, y: n, w: o, h: i } = e;
  return {
    type: "FragmentSelector",
    conformsTo: "http://www.w3.org/TR/media-frags/",
    value: `xywh=pixel:${t},${n},${o},${i}`
  };
}, Jt = "http://www.w3.org/2000/svg", _t = (e) => {
  const t = (o) => {
    Array.from(o.attributes).forEach((i) => {
      i.name.startsWith("on") && o.removeAttribute(i.name);
    });
  }, n = e.getElementsByTagName("script");
  return Array.from(n).reverse().forEach((o) => o.parentNode.removeChild(o)), Array.from(e.querySelectorAll("*")).forEach(t), e;
}, Ln = (e) => {
  const o = new XMLSerializer().serializeToString(e.documentElement).replace("<svg>", `<svg xmlns="${Jt}">`);
  return new DOMParser().parseFromString(o, "image/svg+xml").documentElement;
}, On = (e) => {
  const n = new DOMParser().parseFromString(e, "image/svg+xml"), o = n.lookupPrefix(Jt), i = n.lookupNamespaceURI(null);
  return o || i ? _t(n).firstChild : _t(Ln(n)).firstChild;
}, vn = (e) => {
  const [t, n, o] = e.match(/(<polygon points=["|'])([^("|')]*)/) || [];
  if (!o)
    return;
  const i = o.split(" ").map((s) => s.split(",").map(parseFloat));
  return {
    type: q.POLYGON,
    geometry: {
      points: i,
      bounds: Fe(i)
    }
  };
}, kn = (e) => {
  const t = On(e), n = parseFloat(t.getAttribute("cx")), o = parseFloat(t.getAttribute("cy")), i = parseFloat(t.getAttribute("rx")), s = parseFloat(t.getAttribute("ry")), r = {
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
}, In = (e) => {
  const t = typeof e == "string" ? e : e.value;
  if (t.includes("<polygon points="))
    return vn(t);
  if (t.includes("<ellipse "))
    return kn(t);
}, Bn = (e) => {
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
let Ne;
const Pn = new Uint8Array(16);
function Yn() {
  if (!Ne && (Ne = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Ne))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Ne(Pn);
}
const J = [];
for (let e = 0; e < 256; ++e)
  J.push((e + 256).toString(16).slice(1));
function Xn(e, t = 0) {
  return J[e[t + 0]] + J[e[t + 1]] + J[e[t + 2]] + J[e[t + 3]] + "-" + J[e[t + 4]] + J[e[t + 5]] + "-" + J[e[t + 6]] + J[e[t + 7]] + "-" + J[e[t + 8]] + J[e[t + 9]] + "-" + J[e[t + 10]] + J[e[t + 11]] + J[e[t + 12]] + J[e[t + 13]] + J[e[t + 14]] + J[e[t + 15]];
}
const Dn = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), wt = {
  randomUUID: Dn
};
function Zt(e, t, n) {
  if (wt.randomUUID && !t && !e)
    return wt.randomUUID();
  e = e || {};
  const o = e.random || (e.rng || Yn)();
  if (o[6] = o[6] & 15 | 64, o[8] = o[8] & 63 | 128, t) {
    n = n || 0;
    for (let i = 0; i < 16; ++i)
      t[n + i] = o[i];
    return t;
  }
  return Xn(o);
}
var bt = Object.prototype.hasOwnProperty;
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
        if (bt.call(e, n) && ++o && !bt.call(t, n) || !(n in t) || !ge(e[n], t[n]))
          return !1;
      return Object.keys(t).length === o;
    }
  }
  return e !== e && t !== t;
}
function Qe() {
}
function Rn(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
const we = [];
function ft(e, t = Qe) {
  let n;
  const o = /* @__PURE__ */ new Set();
  function i(a) {
    if (Rn(e, a) && (e = a, n)) {
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
  function r(a, l = Qe) {
    const u = [a, l];
    return o.add(u), o.size === 1 && (n = t(i) || Qe), a(e), () => {
      o.delete(u), o.size === 0 && n && (n(), n = null);
    };
  }
  return { set: i, update: s, subscribe: r };
}
const Cn = (e) => {
  const { subscribe: t, set: n } = ft(null);
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
var Qt = /* @__PURE__ */ ((e) => (e.EDIT = "EDIT", e.SELECT = "SELECT", e.NONE = "NONE", e))(Qt || {});
const xe = { selected: [] }, Un = (e, t = "EDIT") => {
  const { subscribe: n, set: o } = ft(xe);
  let i = xe;
  n((f) => i = f);
  const s = () => o(xe), r = () => {
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
      const g = Nn(d, t);
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
}, Nn = (e, t) => typeof t == "function" ? t(e) || "EDIT" : t || "EDIT", Vn = [];
for (let e = 0; e < 256; ++e)
  Vn.push((e + 256).toString(16).slice(1));
typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const Gn = (e, t) => {
  const n = new Set(e.bodies.map((o) => o.id));
  return t.bodies.filter((o) => !n.has(o.id));
}, Hn = (e, t) => {
  const n = new Set(t.bodies.map((o) => o.id));
  return e.bodies.filter((o) => !n.has(o.id));
}, Fn = (e, t) => t.bodies.map((n) => {
  const o = e.bodies.find((i) => i.id === n.id);
  return { newBody: n, oldBody: o && !ge(o, n) ? o : void 0 };
}).filter(({ oldBody: n }) => n), zn = (e, t) => !ge(e.target, t.target), xt = (e, t) => {
  const n = Gn(e, t), o = Hn(e, t), i = Fn(e, t);
  return {
    oldValue: e,
    newValue: t,
    bodiesCreated: n.length > 0 ? n : void 0,
    bodiesDeleted: o.length > 0 ? o : void 0,
    bodiesUpdated: i.length > 0 ? i : void 0,
    targetUpdated: zn(e, t) ? { oldTarget: e.target, newTarget: t.target } : void 0
  };
};
var j = /* @__PURE__ */ ((e) => (e.LOCAL = "LOCAL", e.REMOTE = "REMOTE", e))(j || {});
const jn = (e, t) => {
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
}, Kn = (e, t) => {
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
        return xt(h, g);
      } else
        return f;
    }),
    ...(t.updated || []).filter(({ oldValue: f }) => !a.has(f.id))
  ];
  return { created: l, deleted: u, updated: m };
}, qn = (e) => e.id !== void 0, Wn = () => {
  const e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map(), n = [], o = (y, p = {}) => n.push({ onChange: y, options: p }), i = (y) => {
    const p = n.findIndex((E) => E.onChange == y);
    p > -1 && n.splice(p, 1);
  }, s = (y, p) => {
    const E = {
      origin: y,
      changes: {
        created: p.created || [],
        updated: p.updated || [],
        deleted: p.deleted || []
      },
      state: [...e.values()]
    };
    n.forEach((M) => {
      jn(M, E) && M.onChange(E);
    });
  }, r = (y, p = j.LOCAL) => {
    if (e.get(y.id))
      throw Error(`Cannot add annotation ${y.id} - exists already`);
    e.set(y.id, y), y.bodies.forEach((E) => t.set(E.id, y.id)), s(p, { created: [y] });
  }, a = (y, p) => {
    const E = typeof y == "string" ? p : y, M = typeof y == "string" ? y : y.id, B = e.get(M);
    if (B) {
      const R = xt(B, E);
      return M === E.id ? e.set(M, E) : (e.delete(M), e.set(E.id, E)), B.bodies.forEach((N) => t.delete(N.id)), E.bodies.forEach((N) => t.set(N.id, E.id)), R;
    } else
      console.warn(`Cannot update annotation ${M} - does not exist`);
  }, l = (y, p = j.LOCAL, E = j.LOCAL) => {
    const M = qn(p) ? E : p, B = a(y, p);
    B && s(M, { updated: [B] });
  }, u = (y, p = j.LOCAL) => {
    const E = y.reduce((M, B) => {
      const R = a(B);
      return R ? [...M, R] : M;
    }, []);
    E.length > 0 && s(p, { updated: E });
  }, m = (y, p = j.LOCAL) => {
    const E = e.get(y.annotation);
    if (E) {
      const M = {
        ...E,
        bodies: [...E.bodies, y]
      };
      e.set(E.id, M), t.set(y.id, M.id), s(p, { updated: [{
        oldValue: E,
        newValue: M,
        bodiesCreated: [y]
      }] });
    } else
      console.warn(`Attempt to add body to missing annotation: ${y.annotation}`);
  }, f = () => [...e.values()], h = (y = j.LOCAL) => {
    const p = [...e.values()];
    e.clear(), t.clear(), s(y, { deleted: p });
  }, d = (y, p = !0, E = j.LOCAL) => {
    if (p) {
      const M = [...e.values()];
      e.clear(), t.clear(), y.forEach((B) => {
        e.set(B.id, B), B.bodies.forEach((R) => t.set(R.id, B.id));
      }), s(E, { created: y, deleted: M });
    } else {
      const M = y.reduce((B, R) => {
        const N = e.get(R.id);
        return N ? [...B, N] : B;
      }, []);
      if (M.length > 0)
        throw Error(`Bulk insert would overwrite the following annotations: ${M.map((B) => B.id).join(", ")}`);
      y.forEach((B) => {
        e.set(B.id, B), B.bodies.forEach((R) => t.set(R.id, B.id));
      }), s(E, { created: y });
    }
  }, g = (y) => {
    const p = typeof y == "string" ? y : y.id, E = e.get(p);
    if (E)
      return e.delete(p), E.bodies.forEach((M) => t.delete(M.id)), E;
    console.warn(`Attempt to delete missing annotation: ${p}`);
  }, b = (y, p = j.LOCAL) => {
    const E = g(y);
    E && s(p, { deleted: [E] });
  }, T = (y, p = j.LOCAL) => {
    const E = y.reduce((M, B) => {
      const R = g(B);
      return R ? [...M, R] : M;
    }, []);
    E.length > 0 && s(p, { deleted: E });
  }, w = (y, p = j.LOCAL) => {
    const E = e.get(y.annotation);
    if (E) {
      const M = E.bodies.find((B) => B.id === y.id);
      if (M) {
        t.delete(M.id);
        const B = {
          ...E,
          bodies: E.bodies.filter((R) => R.id !== y.id)
        };
        e.set(E.id, B), s(p, { updated: [{
          oldValue: E,
          newValue: B,
          bodiesDeleted: [M]
        }] });
      } else
        console.warn(`Attempt to delete missing body ${y.id} from annotation ${y.annotation}`);
    } else
      console.warn(`Attempt to delete body from missing annotation ${y.annotation}`);
  }, _ = (y) => {
    const p = e.get(y);
    return p ? { ...p } : void 0;
  }, A = (y) => {
    const p = t.get(y);
    if (p) {
      const E = _(p).bodies.find((M) => M.id === y);
      if (E)
        return E;
      console.error(`Store integrity error: body ${y} in index, but not in annotation`);
    } else
      console.warn(`Attempt to retrieve missing body: ${y}`);
  }, S = (y, p) => {
    if (y.annotation !== p.annotation)
      throw "Annotation integrity violation: annotation ID must be the same when updating bodies";
    const E = e.get(y.annotation);
    if (E) {
      const M = E.bodies.find((R) => R.id === y.id), B = {
        ...E,
        bodies: E.bodies.map((R) => R.id === M.id ? p : R)
      };
      return e.set(E.id, B), M.id !== p.id && (t.delete(M.id), t.set(p.id, B.id)), {
        oldValue: E,
        newValue: B,
        bodiesUpdated: [{ oldBody: M, newBody: p }]
      };
    } else
      console.warn(`Attempt to add body to missing annotation ${y.annotation}`);
  }, O = (y, p, E = j.LOCAL) => {
    const M = S(y, p);
    s(E, { updated: [M] });
  }, Y = (y, p = j.LOCAL) => {
    const E = y.map((M) => S({ id: M.id, annotation: M.annotation }, M));
    s(p, { updated: E });
  }, C = (y) => {
    const p = e.get(y.annotation);
    if (p) {
      const E = {
        ...p,
        target: {
          ...p.target,
          ...y
        }
      };
      return e.set(p.id, E), {
        oldValue: p,
        newValue: E,
        targetUpdated: {
          oldTarget: p.target,
          newTarget: y
        }
      };
    } else
      console.warn(`Attempt to update target on missing annotation: ${y.annotation}`);
  };
  return {
    addAnnotation: r,
    addBody: m,
    all: f,
    bulkAddAnnotation: d,
    bulkDeleteAnnotation: T,
    bulkUpdateAnnotation: u,
    bulkUpdateBodies: Y,
    bulkUpdateTargets: (y, p = j.LOCAL) => {
      const E = y.map(C).filter((M) => M);
      E.length > 0 && s(p, { updated: E });
    },
    clear: h,
    deleteAnnotation: b,
    deleteBody: w,
    getAnnotation: _,
    getBody: A,
    observe: o,
    unobserve: i,
    updateAnnotation: l,
    updateBody: O,
    updateTarget: (y, p = j.LOCAL) => {
      const E = C(y);
      E && s(p, { updated: [E] });
    }
  };
}, Jn = (e) => ({
  ...e,
  subscribe: (t) => {
    const n = (o) => t(o.state);
    return e.observe(n), t(e.all()), () => e.unobserve(n);
  }
});
let Zn = () => ({
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
const Qn = 250, xn = (e) => {
  const t = Zn(), n = [];
  let o = -1, i = !1, s = 0;
  const r = (d) => {
    if (!i) {
      const { changes: g } = d, b = performance.now();
      if (b - s > Qn)
        n.splice(o + 1), n.push(g), o = n.length - 1;
      else {
        const T = n.length - 1;
        n[T] = Kn(n[T], g);
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
}, $n = () => {
  const { subscribe: e, set: t } = ft([]);
  return {
    subscribe: e,
    set: t
  };
}, eo = (e, t, n, o) => {
  const { store: i, selection: s, hover: r, viewport: a } = e, l = /* @__PURE__ */ new Map();
  let u = [], m, f;
  const h = (w, _) => {
    l.has(w) ? l.get(w).push(_) : l.set(w, [_]);
  }, d = (w, _) => {
    const A = l.get(w);
    A && A.indexOf(_) > 0 && A.splice(A.indexOf(_), 1);
  }, g = (w, _, A) => {
    l.has(w) && setTimeout(() => {
      l.get(w).forEach((S) => {
        if (n) {
          const O = Array.isArray(_) ? _.map((C) => n.serialize(C)) : n.serialize(_), Y = A ? A instanceof PointerEvent ? A : n.serialize(A) : void 0;
          S(O, Y);
        } else
          S(_, A);
      });
    }, 1);
  }, b = () => {
    const { selected: w } = s, _ = w.map(({ id: A }) => i.getAnnotation(A));
    _.forEach((A) => {
      const S = u.find((O) => O.id === A.id);
      (!S || !ge(S, A)) && g("updateAnnotation", A, S);
    }), u = u.map((A) => _.find(({ id: O }) => O === A.id) || A);
  };
  s.subscribe(({ selected: w }) => {
    if (!(u.length === 0 && w.length === 0)) {
      if (u.length === 0 && w.length > 0)
        u = w.map(({ id: _ }) => i.getAnnotation(_));
      else if (u.length > 0 && w.length === 0)
        u.forEach((_) => {
          const A = i.getAnnotation(_.id);
          A && !ge(A, _) && g("updateAnnotation", A, _);
        }), u = [];
      else {
        const _ = new Set(u.map((S) => S.id)), A = new Set(w.map(({ id: S }) => S));
        u.filter((S) => !A.has(S.id)).forEach((S) => {
          const O = i.getAnnotation(S.id);
          O && !ge(O, S) && g("updateAnnotation", O, S);
        }), u = [
          // Remove annotations that were deselected
          ...u.filter((S) => A.has(S.id)),
          // Add editable annotations that were selected
          ...w.filter(({ id: S }) => !_.has(S)).map(({ id: S }) => i.getAnnotation(S))
        ];
      }
      g("selectionChanged", u);
    }
  }), r.subscribe((w) => {
    !m && w ? g("mouseEnterAnnotation", i.getAnnotation(w)) : m && !w ? g("mouseLeaveAnnotation", i.getAnnotation(m)) : m && w && (g("mouseLeaveAnnotation", i.getAnnotation(m)), g("mouseEnterAnnotation", i.getAnnotation(w))), m = w;
  }), a == null || a.subscribe((w) => g("viewportIntersect", w.map(i.getAnnotation))), i.observe((w) => {
    o && (f && clearTimeout(f), f = setTimeout(b, 1e3));
    const { created: _, deleted: A } = w.changes;
    _.forEach((S) => g("createAnnotation", S)), A.forEach((S) => g("deleteAnnotation", S)), w.changes.updated.filter((S) => [
      ...S.bodiesCreated || [],
      ...S.bodiesDeleted || [],
      ...S.bodiesUpdated || []
    ].length > 0).forEach(({ oldValue: S, newValue: O }) => {
      const Y = u.find((C) => C.id === S.id) || S;
      u = u.map((C) => C.id === S.id ? O : C), g("updateAnnotation", O, Y);
    });
  }, { origin: j.LOCAL }), i.observe((w) => {
    if (u) {
      const _ = new Set(u.map((S) => S.id)), A = w.changes.updated.filter(({ newValue: S }) => _.has(S.id)).map(({ newValue: S }) => S);
      A.length > 0 && (u = u.map((S) => A.find((Y) => Y.id === S.id) || S));
    }
  }, { origin: j.REMOTE });
  const T = (w) => (_) => {
    const { created: A, deleted: S, updated: O } = _;
    A.forEach((Y) => g("createAnnotation", Y)), S.forEach((Y) => g("deleteAnnotation", Y)), w ? O.forEach((Y) => g("updateAnnotation", Y.oldValue, Y.newValue)) : O.forEach((Y) => g("updateAnnotation", Y.newValue, Y.oldValue));
  };
  return t.on("undo", T(!0)), t.on("redo", T(!1)), { on: h, off: d, emit: g };
}, to = (e) => (t) => t.reduce((n, o) => {
  const { parsed: i, error: s } = e.parse(o);
  return s ? {
    parsed: n.parsed,
    failed: [...n.failed, o]
  } : {
    parsed: [...n.parsed, i],
    failed: n.failed
  };
}, { parsed: [], failed: [] }), no = (e, t, n) => {
  const { store: o, selection: i } = e, s = (T) => {
    if (n) {
      const { parsed: w, error: _ } = n.parse(T);
      w ? o.addAnnotation(w, j.REMOTE) : console.error(_);
    } else
      o.addAnnotation(T, j.REMOTE);
  }, r = () => i.clear(), a = () => o.clear(), l = (T) => {
    const w = o.getAnnotation(T);
    return n && w ? n.serialize(w) : w;
  }, u = () => n ? o.all().map(n.serialize) : o.all(), m = () => {
    var T;
    const w = (((T = i.selected) == null ? void 0 : T.map((_) => _.id)) || []).map((_) => o.getAnnotation(_));
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
      const { parsed: w, failed: _ } = to(n)(T);
      _.length > 0 && console.warn(`Discarded ${_.length} invalid annotations`, _), o.bulkAddAnnotation(w, !0, j.REMOTE);
    } else
      o.bulkAddAnnotation(T, !0, j.REMOTE);
  }, g = (T) => {
    T ? i.setSelected(T) : i.clear();
  }, b = (T) => {
    if (n) {
      const w = n.parse(T).parsed, _ = n.serialize(o.getAnnotation(w.id));
      return o.updateAnnotation(w), _;
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
let oo = (e) => crypto.getRandomValues(new Uint8Array(e)), io = (e, t, n) => {
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
}, so = (e, t = 21) => io(e, t, oo), ro = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
const lo = () => ({ isGuest: !0, id: so("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_", 20)() }), ao = (e) => {
  const t = JSON.stringify(e);
  let n = 0;
  for (let o = 0, i = t.length; o < i; o++) {
    let s = t.charCodeAt(o);
    n = (n << 5) - n + s, n |= 0;
  }
  return `${n}`;
}, $t = (e) => e ? typeof e == "object" ? { ...e } : e : void 0, co = (e, t) => (Array.isArray(e) ? e : [e]).map((n) => {
  const { id: o, type: i, purpose: s, value: r, created: a, creator: l, ...u } = n;
  return {
    id: o || `temp-${ao(n)}`,
    annotation: t,
    type: i,
    purpose: s,
    value: r,
    created: a ? new Date(a) : void 0,
    creator: $t(l),
    ...u
  };
}), fo = (e) => e.map((t) => {
  var n;
  const o = { ...t };
  return delete o.annotation, (n = o.id) != null && n.startsWith("temp-") && delete o.id, o;
});
ro();
const Yi = (e, t = !1) => ({ parse: (i) => uo(i, t), serialize: (i) => ho(i, e) }), uo = (e, t = !1) => {
  const n = e.id || Zt(), {
    creator: o,
    created: i,
    updatedBy: s,
    updated: r,
    body: a,
    ...l
  } = e, u = co(a, n), m = Array.isArray(e.target) ? e.target[0] : e.target, f = Array.isArray(m.selector) ? m.selector[0] : m.selector, h = f.type === "FragmentSelector" ? Sn(f, t) : f.type === "SvgSelector" ? In(f) : void 0;
  return h ? {
    parsed: {
      ...l,
      id: n,
      bodies: u,
      target: {
        created: i ? new Date(i) : void 0,
        creator: $t(o),
        ...l.target,
        annotation: n,
        selector: h
      }
    }
  } : {
    error: Error(`Unknown selector type: ${f.type}`)
  };
}, ho = (e, t) => {
  const {
    selector: n,
    creator: o,
    created: i,
    updated: s,
    updatedBy: r,
    ...a
  } = e.target, l = n.type == q.RECTANGLE ? Mn(n.geometry) : Bn(n);
  return {
    ...e,
    "@context": "http://www.w3.org/ns/anno.jsonld",
    id: e.id,
    type: "Annotation",
    body: fo(e.bodies),
    creator: o,
    created: i == null ? void 0 : i.toISOString(),
    target: {
      ...a,
      source: t,
      selector: l
    }
  };
};
function Et(e, t, n) {
  const o = e.slice();
  return o[11] = t[n], o[13] = n, o;
}
function At(e) {
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
      k(r, t, a), i || (s = F(t, "pointerdown", function() {
        G(
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
      r && v(t), i = !1, s();
    }
  };
}
function mo(e) {
  let t, n, o, i, s, r, a, l, u, m, f = Me(
    /*geom*/
    e[4].points
  ), h = [];
  for (let d = 0; d < f.length; d += 1)
    h[d] = At(Et(e, f, d));
  return {
    c() {
      t = D("polygon"), i = x(), s = D("polygon"), a = x();
      for (let d = 0; d < h.length; d += 1)
        h[d].c();
      l = le(), c(t, "class", "a9s-outer"), c(t, "style", n = /*computedStyle*/
      e[1] ? "display:none;" : void 0), c(t, "points", o = /*geom*/
      e[4].points.map(Tt).join(" ")), c(s, "class", "a9s-inner a9s-shape-handle"), c(
        s,
        "style",
        /*computedStyle*/
        e[1]
      ), c(s, "points", r = /*geom*/
      e[4].points.map(St).join(" "));
    },
    m(d, g) {
      k(d, t, g), k(d, i, g), k(d, s, g), k(d, a, g);
      for (let b = 0; b < h.length; b += 1)
        h[b] && h[b].m(d, g);
      k(d, l, g), u || (m = [
        F(t, "pointerdown", function() {
          G(
            /*grab*/
            e[10](L.SHAPE)
          ) && e[10](L.SHAPE).apply(this, arguments);
        }),
        F(s, "pointerdown", function() {
          G(
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
      e[4].points.map(Tt).join(" ")) && c(t, "points", o), g & /*computedStyle*/
      2 && c(
        s,
        "style",
        /*computedStyle*/
        e[1]
      ), g & /*geom*/
      16 && r !== (r = /*geom*/
      e[4].points.map(St).join(" ")) && c(s, "points", r), g & /*geom, handleSize, grab*/
      1048) {
        f = Me(
          /*geom*/
          e[4].points
        );
        let b;
        for (b = 0; b < f.length; b += 1) {
          const T = Et(e, f, b);
          h[b] ? h[b].p(T, g) : (h[b] = At(T), h[b].c(), h[b].m(l.parentNode, l));
        }
        for (; b < h.length; b += 1)
          h[b].d(1);
        h.length = f.length;
      }
    },
    d(d) {
      d && (v(t), v(i), v(s), v(a), v(l)), lt(h, d), u = !1, oe(m);
    }
  };
}
function go(e) {
  let t, n;
  return t = new ut({
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
          mo,
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
      n || (U(t.$$.fragment, o), n = !0);
    },
    o(o) {
      V(t.$$.fragment, o), n = !1;
    },
    d(o) {
      ce(t, o);
    }
  };
}
const Tt = (e) => e.join(","), St = (e) => e.join(",");
function po(e, t, n) {
  let o, i, { shape: s } = t, { computedStyle: r = void 0 } = t, { transform: a } = t, { viewportScale: l = 1 } = t;
  const u = (d, g, b) => {
    let T;
    g === L.SHAPE ? T = d.geometry.points.map(([_, A]) => [_ + b[0], A + b[1]]) : T = d.geometry.points.map(([_, A], S) => g === L(S) ? [_ + b[0], A + b[1]] : [_, A]);
    const w = Fe(T);
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
class yo extends ne {
  constructor(t) {
    super(), te(this, t, po, go, Z, {
      shape: 0,
      computedStyle: 1,
      transform: 2,
      viewportScale: 6
    });
  }
}
function _o(e) {
  let t, n, o, i, s, r, a, l, u, m, f, h, d, g, b, T, w, _, A, S, O, Y, C, y, p, E, M, B, R, N, X, ye, Oe, P, Q, K, de, W, he, Xe, Ke, $, De, Re, qe, ee, Ce, Ue, We, ht;
  return {
    c() {
      t = D("rect"), a = x(), l = D("rect"), d = x(), g = D("rect"), _ = x(), A = D("rect"), C = x(), y = D("rect"), B = x(), R = D("rect"), Oe = x(), P = D("rect"), de = x(), W = D("rect"), Ke = x(), $ = D("rect"), qe = x(), ee = D("rect"), c(t, "class", "a9s-outer"), c(t, "style", n = /*computedStyle*/
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
      e[4].h), c(A, "width", 1), c(y, "class", "a9s-edge-handle a9s-edge-handle-bottom"), c(y, "x", p = /*geom*/
      e[4].x), c(y, "y", E = /*geom*/
      e[4].y + /*geom*/
      e[4].h), c(y, "height", 1), c(y, "width", M = /*geom*/
      e[4].w), c(R, "class", "a9s-edge-handle a9s-edge-handle-left"), c(R, "x", N = /*geom*/
      e[4].x), c(R, "y", X = /*geom*/
      e[4].y), c(R, "height", ye = /*geom*/
      e[4].h), c(R, "width", 1), c(P, "class", "a9s-corner-handle a9s-corner-handle-topleft"), c(P, "x", Q = /*geom*/
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
      e[3] / 2), c(W, "y", Xe = /*geom*/
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
      ), c($, "class", "a9s-corner-handle a9s-corner-handle-bottomright"), c($, "x", De = /*geom*/
      e[4].x + /*geom*/
      e[4].w - /*handleSize*/
      e[3] / 2), c($, "y", Re = /*geom*/
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
      ), c(ee, "class", "a9s-corner-handle a9s-corner-handle-bottomleft"), c(ee, "x", Ce = /*geom*/
      e[4].x - /*handleSize*/
      e[3] / 2), c(ee, "y", Ue = /*geom*/
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
    m(H, I) {
      k(H, t, I), k(H, a, I), k(H, l, I), k(H, d, I), k(H, g, I), k(H, _, I), k(H, A, I), k(H, C, I), k(H, y, I), k(H, B, I), k(H, R, I), k(H, Oe, I), k(H, P, I), k(H, de, I), k(H, W, I), k(H, Ke, I), k(H, $, I), k(H, qe, I), k(H, ee, I), We || (ht = [
        F(t, "pointerdown", function() {
          G(
            /*grab*/
            e[10](L.SHAPE)
          ) && e[10](L.SHAPE).apply(this, arguments);
        }),
        F(l, "pointerdown", function() {
          G(
            /*grab*/
            e[10](L.SHAPE)
          ) && e[10](L.SHAPE).apply(this, arguments);
        }),
        F(g, "pointerdown", function() {
          G(
            /*grab*/
            e[10](L.TOP)
          ) && e[10](L.TOP).apply(this, arguments);
        }),
        F(A, "pointerdown", function() {
          G(
            /*grab*/
            e[10](L.RIGHT)
          ) && e[10](L.RIGHT).apply(this, arguments);
        }),
        F(y, "pointerdown", function() {
          G(
            /*grab*/
            e[10](L.BOTTOM)
          ) && e[10](L.BOTTOM).apply(this, arguments);
        }),
        F(R, "pointerdown", function() {
          G(
            /*grab*/
            e[10](L.LEFT)
          ) && e[10](L.LEFT).apply(this, arguments);
        }),
        F(P, "pointerdown", function() {
          G(
            /*grab*/
            e[10](L.TOP_LEFT)
          ) && e[10](L.TOP_LEFT).apply(this, arguments);
        }),
        F(W, "pointerdown", function() {
          G(
            /*grab*/
            e[10](L.TOP_RIGHT)
          ) && e[10](L.TOP_RIGHT).apply(this, arguments);
        }),
        F($, "pointerdown", function() {
          G(
            /*grab*/
            e[10](L.BOTTOM_RIGHT)
          ) && e[10](L.BOTTOM_RIGHT).apply(this, arguments);
        }),
        F(ee, "pointerdown", function() {
          G(
            /*grab*/
            e[10](L.BOTTOM_LEFT)
          ) && e[10](L.BOTTOM_LEFT).apply(this, arguments);
        })
      ], We = !0);
    },
    p(H, I) {
      e = H, I & /*computedStyle*/
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
      16 && p !== (p = /*geom*/
      e[4].x) && c(y, "x", p), I & /*geom*/
      16 && E !== (E = /*geom*/
      e[4].y + /*geom*/
      e[4].h) && c(y, "y", E), I & /*geom*/
      16 && M !== (M = /*geom*/
      e[4].w) && c(y, "width", M), I & /*geom*/
      16 && N !== (N = /*geom*/
      e[4].x) && c(R, "x", N), I & /*geom*/
      16 && X !== (X = /*geom*/
      e[4].y) && c(R, "y", X), I & /*geom*/
      16 && ye !== (ye = /*geom*/
      e[4].h) && c(R, "height", ye), I & /*geom, handleSize*/
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
      24 && Xe !== (Xe = /*geom*/
      e[4].y - /*handleSize*/
      e[3] / 2) && c(W, "y", Xe), I & /*handleSize*/
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
      24 && De !== (De = /*geom*/
      e[4].x + /*geom*/
      e[4].w - /*handleSize*/
      e[3] / 2) && c($, "x", De), I & /*geom, handleSize*/
      24 && Re !== (Re = /*geom*/
      e[4].y + /*geom*/
      e[4].h - /*handleSize*/
      e[3] / 2) && c($, "y", Re), I & /*handleSize*/
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
      24 && Ce !== (Ce = /*geom*/
      e[4].x - /*handleSize*/
      e[3] / 2) && c(ee, "x", Ce), I & /*geom, handleSize*/
      24 && Ue !== (Ue = /*geom*/
      e[4].y + /*geom*/
      e[4].h - /*handleSize*/
      e[3] / 2) && c(ee, "y", Ue), I & /*handleSize*/
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
    d(H) {
      H && (v(t), v(a), v(l), v(d), v(g), v(_), v(A), v(C), v(y), v(B), v(R), v(Oe), v(P), v(de), v(W), v(Ke), v($), v(qe), v(ee)), We = !1, oe(ht);
    }
  };
}
function wo(e) {
  let t, n;
  return t = new ut({
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
          _o,
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
      n || (U(t.$$.fragment, o), n = !0);
    },
    o(o) {
      V(t.$$.fragment, o), n = !1;
    },
    d(o) {
      ce(t, o);
    }
  };
}
function bo(e, t, n) {
  let o, i, { shape: s } = t, { computedStyle: r = void 0 } = t, { transform: a } = t, { viewportScale: l = 1 } = t;
  const u = (d, g, b) => {
    const T = d.geometry.bounds;
    let [w, _] = [T.minX, T.minY], [A, S] = [T.maxX, T.maxY];
    const [O, Y] = b;
    if (g === L.SHAPE)
      w += O, A += O, _ += Y, S += Y;
    else {
      switch (g) {
        case L.TOP:
        case L.TOP_LEFT:
        case L.TOP_RIGHT: {
          _ += Y;
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
    const C = Math.min(w, A), y = Math.min(_, S), p = Math.abs(A - w), E = Math.abs(S - _);
    return {
      ...d,
      geometry: {
        x: C,
        y,
        w: p,
        h: E,
        bounds: {
          minX: C,
          minY: y,
          maxX: C + p,
          maxY: y + E
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
class Eo extends ne {
  constructor(t) {
    super(), te(this, t, bo, wo, Z, {
      shape: 0,
      computedStyle: 1,
      transform: 2,
      viewportScale: 6
    });
  }
}
function Ao(e) {
  let t, n, o, i, s, r, a, l, u, m, f, h, d, g, b, T, w, _, A, S, O, Y, C, y, p, E, M, B, R;
  return {
    c() {
      t = D("ellipse"), r = x(), a = D("ellipse"), h = x(), d = D("rect"), T = x(), w = D("rect"), S = x(), O = D("rect"), y = x(), p = D("rect"), c(t, "class", "a9s-outer"), c(t, "cx", n = /*geom*/
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
      ), c(w, "class", "a9s-corner-handle a9s-corner-handle-right"), c(w, "x", _ = /*geom*/
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
      e[2] / 2), c(O, "y", C = /*geom*/
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
      ), c(p, "class", "a9s-corner-handle a9s-corner-handle-left"), c(p, "x", E = /*geom*/
      e[3].cx - /*geom*/
      e[3].rx - /*handleSize*/
      e[2] / 2), c(p, "y", M = /*geom*/
      e[3].cy - /*handleSize*/
      e[2] / 2), c(
        p,
        "height",
        /*handleSize*/
        e[2]
      ), c(
        p,
        "width",
        /*handleSize*/
        e[2]
      );
    },
    m(N, X) {
      k(N, t, X), k(N, r, X), k(N, a, X), k(N, h, X), k(N, d, X), k(N, T, X), k(N, w, X), k(N, S, X), k(N, O, X), k(N, y, X), k(N, p, X), B || (R = [
        F(t, "pointerdown", function() {
          G(
            /*grab*/
            e[9](L.SHAPE)
          ) && e[9](L.SHAPE).apply(this, arguments);
        }),
        F(a, "pointerdown", function() {
          G(
            /*grab*/
            e[9](L.SHAPE)
          ) && e[9](L.SHAPE).apply(this, arguments);
        }),
        F(d, "pointerdown", function() {
          G(
            /*grab*/
            e[9](L.TOP)
          ) && e[9](L.TOP).apply(this, arguments);
        }),
        F(w, "pointerdown", function() {
          G(
            /*grab*/
            e[9](L.RIGHT)
          ) && e[9](L.RIGHT).apply(this, arguments);
        }),
        F(O, "pointerdown", function() {
          G(
            /*grab*/
            e[9](L.BOTTOM)
          ) && e[9](L.BOTTOM).apply(this, arguments);
        }),
        F(p, "pointerdown", function() {
          G(
            /*grab*/
            e[9](L.LEFT)
          ) && e[9](L.LEFT).apply(this, arguments);
        })
      ], B = !0);
    },
    p(N, X) {
      e = N, X & /*geom*/
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
      12 && _ !== (_ = /*geom*/
      e[3].cx + /*geom*/
      e[3].rx - /*handleSize*/
      e[2] / 2) && c(w, "x", _), X & /*geom, handleSize*/
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
      12 && C !== (C = /*geom*/
      e[3].cy + /*geom*/
      e[3].ry - /*handleSize*/
      e[2] / 2) && c(O, "y", C), X & /*handleSize*/
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
      e[2] / 2) && c(p, "x", E), X & /*geom, handleSize*/
      12 && M !== (M = /*geom*/
      e[3].cy - /*handleSize*/
      e[2] / 2) && c(p, "y", M), X & /*handleSize*/
      4 && c(
        p,
        "height",
        /*handleSize*/
        e[2]
      ), X & /*handleSize*/
      4 && c(
        p,
        "width",
        /*handleSize*/
        e[2]
      );
    },
    d(N) {
      N && (v(t), v(r), v(a), v(h), v(d), v(T), v(w), v(S), v(O), v(y), v(p)), B = !1, oe(R);
    }
  };
}
function To(e) {
  let t, n;
  return t = new ut({
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
          Ao,
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
      n || (U(t.$$.fragment, o), n = !0);
    },
    o(o) {
      V(t.$$.fragment, o), n = !1;
    },
    d(o) {
      ce(t, o);
    }
  };
}
function So(e, t, n) {
  let o, i, { shape: s } = t, { transform: r } = t, { viewportScale: a = 1 } = t;
  const l = (h, d, g) => {
    const b = h.geometry.bounds;
    let [T, w] = [b.minX, b.minY], [_, A] = [b.maxX, b.maxY];
    const [S, O] = g;
    if (d === L.SHAPE)
      T += S, _ += S, w += O, A += O;
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
          _ += S;
          break;
        }
      }
    const Y = Math.min(T, _), C = Math.min(w, A), y = Math.abs(_ - T), p = Math.abs(A - w), E = (T + _) / 2, M = (w + A) / 2, B = y / 2, R = p / 2;
    return {
      ...h,
      geometry: {
        ...h.geometry,
        cx: E,
        cy: M,
        rx: B,
        ry: R,
        bounds: {
          minX: Y,
          minY: C,
          maxX: Y + y,
          maxY: C + p
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
class Mo extends ne {
  constructor(t) {
    super(), te(this, t, So, To, Z, { shape: 0, transform: 1, viewportScale: 5 });
  }
}
const en = /* @__PURE__ */ new Map([
  [q.RECTANGLE, Eo],
  [q.POLYGON, yo],
  [q.ELLIPSE, Mo]
]), Mt = (e) => en.get(e.type), Lo = (e, t) => en.set(e, t), L = (e) => `HANDLE-${e}`;
L.SHAPE = "SHAPE";
L.TOP = "TOP";
L.RIGHT = "RIGHT";
L.BOTTOM = "BOTTOM";
L.LEFT = "LEFT";
L.TOP_LEFT = "TOP_LEFT";
L.TOP_RIGHT = "TOP_RIGHT";
L.BOTTOM_RIGHT = "BOTTOM_RIGHT";
L.BOTTOM_LEFT = "BOTTOM_LEFT";
const Oo = (e) => ({}), Lt = (e) => ({ grab: (
  /*onGrab*/
  e[0]
) });
function vo(e) {
  let t, n, o, i;
  const s = (
    /*#slots*/
    e[7].default
  ), r = an(
    s,
    e,
    /*$$scope*/
    e[6],
    Lt
  );
  return {
    c() {
      t = D("g"), r && r.c(), c(t, "class", "a9s-annotation selected");
    },
    m(a, l) {
      k(a, t, l), r && r.m(t, null), n = !0, o || (i = [
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
      64) && fn(
        r,
        s,
        a,
        /*$$scope*/
        a[6],
        n ? cn(
          s,
          /*$$scope*/
          a[6],
          l,
          Oo
        ) : un(
          /*$$scope*/
          a[6]
        ),
        Lt
      );
    },
    i(a) {
      n || (U(r, a), n = !0);
    },
    o(a) {
      V(r, a), n = !1;
    },
    d(a) {
      a && v(t), r && r.d(a), o = !1, oe(i);
    }
  };
}
function ko(e, t, n) {
  let { $$slots: o = {}, $$scope: i } = t;
  const s = pe();
  let { shape: r } = t, { editor: a } = t, { transform: l } = t, u = null, m, f = null;
  const h = (b) => (T) => {
    u = b, m = l.elementToImage(T.offsetX, T.offsetY), f = r, T.target.setPointerCapture(T.pointerId), s("grab");
  }, d = (b) => {
    if (u) {
      const [T, w] = l.elementToImage(b.offsetX, b.offsetY), _ = [T - m[0], w - m[1]];
      n(3, r = a(f, u, _)), s("change", r);
    }
  }, g = (b) => {
    b.target.releasePointerCapture(b.pointerId), u = null, f = r, s("release");
  };
  return e.$$set = (b) => {
    "shape" in b && n(3, r = b.shape), "editor" in b && n(4, a = b.editor), "transform" in b && n(5, l = b.transform), "$$scope" in b && n(6, i = b.$$scope);
  }, [h, d, g, r, a, l, i, o];
}
class ut extends ne {
  constructor(t) {
    super(), te(this, t, ko, vo, Z, { shape: 3, editor: 4, transform: 5 });
  }
}
const je = (e, t) => {
  const n = typeof t == "function" ? t(e) : t;
  if (n) {
    const { fill: o, fillOpacity: i } = n;
    let s = "";
    return o && (s += `fill:${o};stroke:${o};`), s += `fill-opacity:${i || "0.25"};`, s;
  }
};
function Io(e, t, n) {
  let o;
  const i = pe();
  let { annotation: s } = t, { editor: r } = t, { style: a = void 0 } = t, { target: l } = t, { transform: u } = t, { viewportScale: m } = t, f;
  return Le(() => (n(6, f = new r({
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
    5 && (o = je(s, a)), e.$$.dirty & /*annotation, editorComponent*/
    65 && s && (f == null || f.$set({ shape: s.target.selector })), e.$$.dirty & /*editorComponent, transform*/
    80 && f && f.$set({ transform: u }), e.$$.dirty & /*editorComponent, viewportScale*/
    96 && f && f.$set({ viewportScale: m });
  }, [s, r, a, l, u, m, f];
}
class Bo extends ne {
  constructor(t) {
    super(), te(this, t, Io, null, Z, {
      annotation: 0,
      editor: 1,
      style: 2,
      target: 3,
      transform: 4,
      viewportScale: 5
    });
  }
}
function Po(e, t, n) {
  const o = pe();
  let { drawingMode: i } = t, { target: s } = t, { tool: r } = t, { transform: a } = t, { viewportScale: l } = t, u;
  return Le(() => {
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
class Yo extends ne {
  constructor(t) {
    super(), te(this, t, Po, null, Z, {
      drawingMode: 0,
      target: 1,
      tool: 2,
      transform: 3,
      viewportScale: 4
    });
  }
}
function Ot(e) {
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
      k(o, t, i), k(o, n, i);
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
      o && (v(t), v(n));
    }
  };
}
function Xo(e) {
  let t, n = (
    /*origin*/
    e[0] && Ot(e)
  );
  return {
    c() {
      t = D("g"), n && n.c(), c(t, "class", "a9s-annotation a9s-rubberband");
    },
    m(o, i) {
      k(o, t, i), n && n.m(t, null);
    },
    p(o, [i]) {
      /*origin*/
      o[0] ? n ? n.p(o, i) : (n = Ot(o), n.c(), n.m(t, null)) : n && (n.d(1), n = null);
    },
    i: z,
    o: z,
    d(o) {
      o && v(t), n && n.d();
    }
  };
}
function Do(e, t, n) {
  const o = pe();
  let { addEventListener: i } = t, { drawingMode: s } = t, { transform: r } = t, a, l, u, m, f, h, d;
  const g = (_) => {
    a = performance.now(), s === "drag" && (n(0, l = r.elementToImage(_.offsetX, _.offsetY)), u = l, n(1, m = l[0]), n(2, f = l[1]), n(3, h = 1), n(4, d = 1));
  }, b = (_) => {
    l && (u = r.elementToImage(_.offsetX, _.offsetY), n(1, m = Math.min(u[0], l[0])), n(2, f = Math.min(u[1], l[1])), n(3, h = Math.abs(u[0] - l[0])), n(4, d = Math.abs(u[1] - l[1])));
  }, T = (_) => {
    const A = performance.now() - a;
    if (s === "click") {
      if (A > 300)
        return;
      _.stopPropagation(), l ? w() : (n(0, l = r.elementToImage(_.offsetX, _.offsetY)), u = l, n(1, m = l[0]), n(2, f = l[1]), n(3, h = 1), n(4, d = 1));
    } else
      l && (A > 300 || h * d > 100 ? (_.stopPropagation(), w()) : (n(0, l = null), u = null));
  }, w = () => {
    if (h * d > 15) {
      const _ = {
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
      o("create", _);
    }
    n(0, l = null), u = null;
  };
  return Le(() => {
    i("pointerdown", g), i("pointermove", b), i("pointerup", T, !0);
  }), e.$$set = (_) => {
    "addEventListener" in _ && n(5, i = _.addEventListener), "drawingMode" in _ && n(6, s = _.drawingMode), "transform" in _ && n(7, r = _.transform);
  }, [l, m, f, h, d, i, s, r];
}
class Ro extends ne {
  constructor(t) {
    super(), te(this, t, Do, Xo, Z, {
      addEventListener: 5,
      drawingMode: 6,
      transform: 7
    });
  }
}
const $e = (e, t) => {
  const n = Math.abs(t[0] - e[0]), o = Math.abs(t[1] - e[1]);
  return Math.sqrt(Math.pow(n, 2) + Math.pow(o, 2));
}, be = [];
function Co(e, t = z) {
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
    return o.add(u), o.size === 1 && (n = t(i, s) || z), a(e), () => {
      o.delete(u), o.size === 0 && n && (n(), n = null);
    };
  }
  return { set: i, update: s, subscribe: r };
}
const Uo = (e, t) => {
  const { naturalWidth: n, naturalHeight: o } = e;
  if (!n && !o) {
    const { width: i, height: s } = e;
    t.setAttribute("viewBox", `0 0 ${i} ${s}`), e.addEventListener("load", (r) => {
      const a = r.target;
      t.setAttribute("viewBox", `0 0 ${a.naturalWidth} ${a.naturalHeight}`);
    });
  } else
    t.setAttribute("viewBox", `0 0 ${n} ${o}`);
}, No = (e, t) => {
  Uo(e, t);
  const { subscribe: n, set: o } = Co(1);
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
}, Xi = "ontouchstart" in window || navigator.maxTouchPoints > 0;
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
  let t, n, o, i, s, r = (
    /*isClosable*/
    e[2] && kt(e)
  );
  return {
    c() {
      t = D("polygon"), o = D("polygon"), r && r.c(), s = le(), c(t, "class", "a9s-outer"), c(t, "points", n = /*coords*/
      e[15]), c(o, "class", "a9s-inner"), c(o, "points", i = /*coords*/
      e[15]);
    },
    m(a, l) {
      k(a, t, l), k(a, o, l), r && r.m(a, l), k(a, s, l);
    },
    p(a, l) {
      l & /*isClosable, points, cursor*/
      7 && n !== (n = /*coords*/
      a[15]) && c(t, "points", n), l & /*isClosable, points, cursor*/
      7 && i !== (i = /*coords*/
      a[15]) && c(o, "points", i), /*isClosable*/
      a[2] ? r ? r.p(a, l) : (r = kt(a), r.c(), r.m(s.parentNode, s)) : r && (r.d(1), r = null);
    },
    d(a) {
      a && (v(t), v(o), v(s)), r && r.d(a);
    }
  };
}
function kt(e) {
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
      k(i, t, s);
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
      i && v(t);
    }
  };
}
function Vo(e) {
  let t, n = (
    /*cursor*/
    e[1] && vt(et(e))
  );
  return {
    c() {
      t = D("g"), n && n.c(), c(t, "class", "a9s-annotation a9s-rubberband");
    },
    m(o, i) {
      k(o, t, i), n && n.m(t, null);
    },
    p(o, [i]) {
      /*cursor*/
      o[1] ? n ? n.p(et(o), i) : (n = vt(et(o)), n.c(), n.m(t, null)) : n && (n.d(1), n = null);
    },
    i: z,
    o: z,
    d(o) {
      o && v(t), n && n.d();
    }
  };
}
const Go = 20;
function Ho(e, t, n) {
  let o;
  const i = pe();
  let { addEventListener: s } = t, { drawingMode: r } = t, { transform: a } = t, { viewportScale: l = 1 } = t, u, m = [], f = null, h = !1;
  const d = (_) => {
    const { timeStamp: A, offsetX: S, offsetY: O } = _;
    if (u = { timeStamp: A, offsetX: S, offsetY: O }, r === "drag" && m.length === 0) {
      const Y = a.elementToImage(_.offsetX, _.offsetY);
      m.push(Y), n(1, f = Y);
    }
  }, g = (_) => {
    if (m.length > 0 && (n(1, f = a.elementToImage(_.offsetX, _.offsetY)), m.length > 2)) {
      const A = $e(f, m[0]) * l;
      n(2, h = A < Go);
    }
  }, b = (_) => {
    if (r === "click") {
      const A = _.timeStamp - u.timeStamp, S = $e([u.offsetX, u.offsetY], [_.offsetX, _.offsetY]);
      if (A > 300 || S > 15)
        return;
      if (h)
        w();
      else if (m.length === 0) {
        const O = a.elementToImage(_.offsetX, _.offsetY);
        m.push(O), n(1, f = O);
      } else
        m.push(f);
    } else {
      if (m.length === 1 && $e(m[0], f) <= 4) {
        n(0, m = []), n(1, f = null);
        return;
      }
      _.stopImmediatePropagation(), h ? w() : m.push(f);
    }
  }, T = () => {
    const _ = [...m, f], A = {
      type: q.POLYGON,
      geometry: { bounds: Fe(_), points: _ }
    };
    rt(A) > 4 && (n(0, m = []), n(1, f = null), i("create", A));
  }, w = () => {
    const _ = {
      type: q.POLYGON,
      geometry: {
        bounds: Fe(m),
        points: [...m]
      }
    };
    n(0, m = []), n(1, f = null), i("create", _);
  };
  return Le(() => {
    s("pointerdown", d, !0), s("pointermove", g), s("pointerup", b, !0), s("dblclick", T, !0);
  }), e.$$set = (_) => {
    "addEventListener" in _ && n(4, s = _.addEventListener), "drawingMode" in _ && n(5, r = _.drawingMode), "transform" in _ && n(6, a = _.transform), "viewportScale" in _ && n(7, l = _.viewportScale);
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
class Fo extends ne {
  constructor(t) {
    super(), te(this, t, Ho, Vo, Z, {
      addEventListener: 4,
      drawingMode: 5,
      transform: 6,
      viewportScale: 7
    });
  }
}
function It(e) {
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
      k(f, t, h), k(f, r, h);
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
      f && (v(t), v(r));
    }
  };
}
function zo(e) {
  let t, n = (
    /*origin*/
    e[1] && It(e)
  );
  return {
    c() {
      t = D("g"), n && n.c(), c(t, "class", "a9s-annotation a9s-rubberband");
    },
    m(o, i) {
      k(o, t, i), n && n.m(t, null), e[9](t);
    },
    p(o, [i]) {
      /*origin*/
      o[1] ? n ? n.p(o, i) : (n = It(o), n.c(), n.m(t, null)) : n && (n.d(1), n = null);
    },
    i: z,
    o: z,
    d(o) {
      o && v(t), n && n.d(), e[9](null);
    }
  };
}
function jo(e, t, n) {
  const o = pe();
  let { addEventListener: i } = t, { drawingMode: s } = t, { transform: r } = t, a, l, u, m, f, h, d, g = !1, b = !1, T, w;
  const _ = (p) => {
    T = performance.now(), s === "drag" && (n(1, l = r.elementToImage(p.offsetX, p.offsetY)), u = l, n(2, m = l[0]), n(3, f = l[1]), n(4, h = 1), n(5, d = 1));
  }, A = (p) => {
    const E = p || w;
    if (l)
      if (u = r.elementToImage(E.offsetX, E.offsetY), b) {
        const M = 2 * Math.abs(u[0] - l[0]), B = 2 * Math.abs(u[1] - l[1]);
        n(4, h = g ? Math.max(M, B) : M), n(5, d = g ? h : B), n(2, m = Math.min(u[0], l[0] - h / 2)), n(3, f = Math.min(u[1], l[1] - d / 2));
      } else {
        const M = Math.abs(u[0] - l[0]), B = Math.abs(u[1] - l[1]);
        n(4, h = g ? Math.max(M, B) : M), n(5, d = g ? h : B), n(2, m = Math.min(u[0], l[0])), n(3, f = Math.min(u[1], l[1]));
      }
    p && (w = p);
  }, S = (p) => {
    s === "click" && p.stopImmediatePropagation();
    const E = performance.now() - T;
    if (s === "click") {
      if (E > 300)
        return;
      p.stopPropagation(), l ? O() : (n(1, l = r.elementToImage(p.offsetX, p.offsetY)), u = l, n(2, m = l[0]), n(3, f = l[1]), n(4, h = 1), n(5, d = 1));
    } else
      l && (E > 300 || h * d > 100 ? (p.stopPropagation(), O()) : (n(1, l = null), u = null, w = void 0));
  }, O = () => {
    if (h * d > 15) {
      const p = {
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
      o("create", p);
    }
    n(1, l = null), u = null, w = void 0;
  }, Y = (p) => {
    p.key === "Shift" && (g = !0, A()), p.key === "Control" && (b = !0, A());
  }, C = (p) => {
    p.key === "Shift" && (g = !1, A()), p.key === "Control" && (b = !1, A());
  };
  Le(() => (document.addEventListener("keyup", C), document.addEventListener("keydown", Y), i("pointerdown", _), i("pointermove", A), i("pointerup", S), () => {
    document.removeEventListener("keyup", C), document.removeEventListener("keydown", Y);
  }));
  function y(p) {
    Ye[p ? "unshift" : "push"](() => {
      a = p, n(0, a);
    });
  }
  return e.$$set = (p) => {
    "addEventListener" in p && n(6, i = p.addEventListener), "drawingMode" in p && n(7, s = p.drawingMode), "transform" in p && n(8, r = p.transform);
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
    y
  ];
}
class Ko extends ne {
  constructor(t) {
    super(), te(this, t, jo, zo, Z, {
      addEventListener: 6,
      drawingMode: 7,
      transform: 8
    });
  }
}
const dt = /* @__PURE__ */ new Map([
  ["rectangle", { tool: Ro }],
  ["polygon", { tool: Fo }],
  ["ellipse", { tool: Ko }]
]), ze = () => [...dt.keys()], tn = (e) => dt.get(e), qo = (e, t, n) => dt.set(e, { tool: t, opts: n });
function Wo(e) {
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
      k(r, t, a), fe(t, n), fe(t, i);
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
      r && v(t);
    }
  };
}
function Jo(e, t, n) {
  let o, { annotation: i } = t, { geom: s } = t, { style: r = void 0 } = t;
  const { cx: a, cy: l, rx: u, ry: m } = s;
  return e.$$set = (f) => {
    "annotation" in f && n(0, i = f.annotation), "geom" in f && n(6, s = f.geom), "style" in f && n(7, r = f.style);
  }, e.$$.update = () => {
    e.$$.dirty & /*annotation, style*/
    129 && n(1, o = je(i, r));
  }, [i, o, a, l, u, m, s, r];
}
class Zo extends ne {
  constructor(t) {
    super(), te(this, t, Jo, Wo, Z, { annotation: 0, geom: 6, style: 7 });
  }
}
function Qo(e) {
  let t, n, o, i, s;
  return {
    c() {
      t = D("g"), n = D("polygon"), i = D("polygon"), c(n, "class", "a9s-outer"), c(n, "style", o = /*computedStyle*/
      e[1] ? "display:none;" : void 0), c(
        n,
        "points",
        /*points*/
        e[2].map(xo).join(" ")
      ), c(i, "class", "a9s-inner"), c(
        i,
        "style",
        /*computedStyle*/
        e[1]
      ), c(
        i,
        "points",
        /*points*/
        e[2].map($o).join(" ")
      ), c(t, "data-id", s = /*annotation*/
      e[0].id);
    },
    m(r, a) {
      k(r, t, a), fe(t, n), fe(t, i);
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
      r && v(t);
    }
  };
}
const xo = (e) => e.join(","), $o = (e) => e.join(",");
function ei(e, t, n) {
  let o, { annotation: i } = t, { geom: s } = t, { style: r = void 0 } = t;
  const { points: a } = s;
  return e.$$set = (l) => {
    "annotation" in l && n(0, i = l.annotation), "geom" in l && n(3, s = l.geom), "style" in l && n(4, r = l.style);
  }, e.$$.update = () => {
    e.$$.dirty & /*annotation, style*/
    17 && n(1, o = je(i, r));
  }, [i, o, a, s, r];
}
class ti extends ne {
  constructor(t) {
    super(), te(this, t, ei, Qo, Z, { annotation: 0, geom: 3, style: 4 });
  }
}
function ni(e) {
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
      k(r, t, a), fe(t, n), fe(t, i);
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
      r && v(t);
    }
  };
}
function oi(e, t, n) {
  let o, i, s, r, a, { annotation: l } = t, { geom: u } = t, { style: m = void 0 } = t;
  return e.$$set = (f) => {
    "annotation" in f && n(0, l = f.annotation), "geom" in f && n(6, u = f.geom), "style" in f && n(7, m = f.style);
  }, e.$$.update = () => {
    e.$$.dirty & /*annotation, style*/
    129 && n(5, o = je(l, m)), e.$$.dirty & /*geom*/
    64 && n(4, { x: i, y: s, w: r, h: a } = u, i, (n(3, s), n(6, u)), (n(2, r), n(6, u)), (n(1, a), n(6, u)));
  }, [l, a, r, s, i, o, u, m];
}
class ii extends ne {
  constructor(t) {
    super(), te(this, t, oi, ni, Z, { annotation: 0, geom: 6, style: 7 });
  }
}
const Di = {
  elementToImage: (e, t) => [e, t]
}, si = (e) => ({
  elementToImage: (t, n) => {
    const o = e.getBoundingClientRect(), i = e.createSVGPoint();
    i.x = t + o.x, i.y = n + o.y;
    const { x: s, y: r } = i.matrixTransform(e.getScreenCTM().inverse());
    return [s, r];
  }
}), ri = 250, li = (e, t) => {
  const n = pe();
  let o;
  return { onPointerDown: () => o = performance.now(), onPointerUp: (r) => {
    if (performance.now() - o < ri) {
      const { x: l, y: u } = ai(r, e), m = t.getAt(l, u);
      m ? n("click", { originalEvent: r, annotation: m }) : n("click", { originalEvent: r });
    }
  } };
}, ai = (e, t) => {
  const n = t.createSVGPoint(), o = t.getBoundingClientRect(), i = e.clientX - o.x, s = e.clientY - o.y, { left: r, top: a } = t.getBoundingClientRect();
  return n.x = i + r, n.y = s + a, n.matrixTransform(t.getScreenCTM().inverse());
};
function Bt(e, t, n) {
  const o = e.slice();
  return o[29] = t[n], o;
}
function Pt(e, t, n) {
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
function Yt(e) {
  let t = (
    /*annotation*/
    e[32].id
  ), n, o, i = Xt(e);
  return {
    c() {
      i.c(), n = le();
    },
    m(s, r) {
      i.m(s, r), k(s, n, r), o = !0;
    },
    p(s, r) {
      r[0] & /*$store*/
      8192 && Z(t, t = /*annotation*/
      s[32].id) ? (se(), V(i, 1, 1, z), re(), i = Xt(s), i.c(), U(i, 1), i.m(n.parentNode, n)) : i.p(s, r);
    },
    i(s) {
      o || (U(i), o = !0);
    },
    o(s) {
      V(i), o = !1;
    },
    d(s) {
      s && v(n), i.d(s);
    }
  };
}
function ci(e) {
  let t, n;
  return t = new ti({
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
      n || (U(t.$$.fragment, o), n = !0);
    },
    o(o) {
      V(t.$$.fragment, o), n = !1;
    },
    d(o) {
      ce(t, o);
    }
  };
}
function fi(e) {
  let t, n;
  return t = new ii({
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
      n || (U(t.$$.fragment, o), n = !0);
    },
    o(o) {
      V(t.$$.fragment, o), n = !1;
    },
    d(o) {
      ce(t, o);
    }
  };
}
function ui(e) {
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
      n || (U(t.$$.fragment, o), n = !0);
    },
    o(o) {
      V(t.$$.fragment, o), n = !1;
    },
    d(o) {
      ce(t, o);
    }
  };
}
function Xt(e) {
  let t, n, o, i;
  const s = [ui, fi, ci], r = [];
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
      ~t && r[t].m(l, u), k(l, o, u), i = !0;
    },
    p(l, u) {
      let m = t;
      t = a(l), t === m ? ~t && r[t].p(l, u) : (n && (se(), V(r[m], 1, 1, () => {
        r[m] = null;
      }), re()), ~t ? (n = r[t], n ? n.p(l, u) : (n = r[t] = s[t](l), n.c()), U(n, 1), n.m(o.parentNode, o)) : n = null);
    },
    i(l) {
      i || (U(n), i = !0);
    },
    o(l) {
      V(n), i = !1;
    },
    d(l) {
      l && v(o), ~t && r[t].d(l);
    }
  };
}
function Dt(e) {
  let t = !/*isEditable*/
  e[7](
    /*annotation*/
    e[32]
  ), n, o, i = t && Yt(tt(e));
  return {
    c() {
      i && i.c(), n = le();
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
      8320 && U(i, 1)) : (i = Yt(tt(s)), i.c(), U(i, 1), i.m(n.parentNode, n)) : i && (se(), V(i, 1, 1, () => {
        i = null;
      }), re());
    },
    i(s) {
      o || (U(i), o = !0);
    },
    o(s) {
      V(i), o = !1;
    },
    d(s) {
      s && v(n), i && i.d(s);
    }
  };
}
function Rt(e) {
  let t, n, o, i;
  const s = [hi, di], r = [];
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
      ~t && r[t].m(l, u), k(l, o, u), i = !0;
    },
    p(l, u) {
      let m = t;
      t = a(l), t === m ? ~t && r[t].p(l, u) : (n && (se(), V(r[m], 1, 1, () => {
        r[m] = null;
      }), re()), ~t ? (n = r[t], n ? n.p(l, u) : (n = r[t] = s[t](l), n.c()), U(n, 1), n.m(o.parentNode, o)) : n = null);
    },
    i(l) {
      i || (U(n), i = !0);
    },
    o(l) {
      V(n), i = !1;
    },
    d(l) {
      l && v(o), ~t && r[t].d(l);
    }
  };
}
function di(e) {
  let t = (
    /*toolName*/
    e[2]
  ), n, o, i = Ct(e);
  return {
    c() {
      i.c(), n = le();
    },
    m(s, r) {
      i.m(s, r), k(s, n, r), o = !0;
    },
    p(s, r) {
      r[0] & /*toolName*/
      4 && Z(t, t = /*toolName*/
      s[2]) ? (se(), V(i, 1, 1, z), re(), i = Ct(s), i.c(), U(i, 1), i.m(n.parentNode, n)) : i.p(s, r);
    },
    i(s) {
      o || (U(i), o = !0);
    },
    o(s) {
      V(i), o = !1;
    },
    d(s) {
      s && v(n), i.d(s);
    }
  };
}
function hi(e) {
  let t, n, o = Me(
    /*editableAnnotations*/
    e[6]
  ), i = [];
  for (let r = 0; r < o.length; r += 1)
    i[r] = Nt(Bt(e, o, r));
  const s = (r) => V(i[r], 1, 1, () => {
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
      k(r, t, a), n = !0;
    },
    p(r, a) {
      if (a[0] & /*editableAnnotations, drawingEl, style, transform, $scale, onChangeSelected*/
      279634) {
        o = Me(
          /*editableAnnotations*/
          r[6]
        );
        let l;
        for (l = 0; l < o.length; l += 1) {
          const u = Bt(r, o, l);
          i[l] ? (i[l].p(u, a), U(i[l], 1)) : (i[l] = Nt(u), i[l].c(), U(i[l], 1), i[l].m(t.parentNode, t));
        }
        for (se(), l = o.length; l < i.length; l += 1)
          s(l);
        re();
      }
    },
    i(r) {
      if (!n) {
        for (let a = 0; a < o.length; a += 1)
          U(i[a]);
        n = !0;
      }
    },
    o(r) {
      i = i.filter(Boolean);
      for (let a = 0; a < i.length; a += 1)
        V(i[a]);
      n = !1;
    },
    d(r) {
      r && v(t), lt(i, r);
    }
  };
}
function Ct(e) {
  let t, n;
  return t = new Yo({
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
      n || (U(t.$$.fragment, o), n = !0);
    },
    o(o) {
      V(t.$$.fragment, o), n = !1;
    },
    d(o) {
      ce(t, o);
    }
  };
}
function Ut(e) {
  let t, n;
  return t = new Bo({
    props: {
      target: (
        /*drawingEl*/
        e[4]
      ),
      editor: Mt(
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
    G(
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
      64 && (s.editor = Mt(
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
      n || (U(t.$$.fragment, o), n = !0);
    },
    o(o) {
      V(t.$$.fragment, o), n = !1;
    },
    d(o) {
      ce(t, o);
    }
  };
}
function Nt(e) {
  let t = (
    /*editable*/
    e[29].id
  ), n, o, i = Ut(e);
  return {
    c() {
      i.c(), n = le();
    },
    m(s, r) {
      i.m(s, r), k(s, n, r), o = !0;
    },
    p(s, r) {
      r[0] & /*editableAnnotations*/
      64 && Z(t, t = /*editable*/
      s[29].id) ? (se(), V(i, 1, 1, z), re(), i = Ut(s), i.c(), U(i, 1), i.m(n.parentNode, n)) : i.p(s, r);
    },
    i(s) {
      o || (U(i), o = !0);
    },
    o(s) {
      V(i), o = !1;
    },
    d(s) {
      s && v(n), i.d(s);
    }
  };
}
function mi(e) {
  let t, n, o, i, s, r, a = Me(
    /*$store*/
    e[13]
  ), l = [];
  for (let f = 0; f < a.length; f += 1)
    l[f] = Dt(Pt(e, a, f));
  const u = (f) => V(l[f], 1, 1, () => {
    l[f] = null;
  });
  let m = (
    /*drawingEl*/
    e[4] && Rt(e)
  );
  return {
    c() {
      t = D("svg"), n = D("g");
      for (let f = 0; f < l.length; f += 1)
        l[f].c();
      o = D("g"), m && m.c(), c(o, "class", "drawing"), c(t, "class", "a9s-annotationlayer"), pt(
        t,
        "drawing",
        /*tool*/
        e[12]
      );
    },
    m(f, h) {
      k(f, t, h), fe(t, n);
      for (let d = 0; d < l.length; d += 1)
        l[d] && l[d].m(n, null);
      fe(t, o), m && m.m(o, null), e[25](o), e[26](t), i = !0, s || (r = [
        F(t, "pointerup", function() {
          G(
            /*onPointerUp*/
            e[8]
          ) && e[8].apply(this, arguments);
        }),
        F(t, "pointerdown", function() {
          G(
            /*onPointerDown*/
            e[9]
          ) && e[9].apply(this, arguments);
        })
      ], s = !0);
    },
    p(f, h) {
      if (e = f, h[0] & /*$store, style, isEditable*/
      8322) {
        a = Me(
          /*$store*/
          e[13]
        );
        let d;
        for (d = 0; d < a.length; d += 1) {
          const g = Pt(e, a, d);
          l[d] ? (l[d].p(g, h), U(l[d], 1)) : (l[d] = Dt(g), l[d].c(), U(l[d], 1), l[d].m(n, null));
        }
        for (se(), d = a.length; d < l.length; d += 1)
          u(d);
        re();
      }
      /*drawingEl*/
      e[4] ? m ? (m.p(e, h), h[0] & /*drawingEl*/
      16 && U(m, 1)) : (m = Rt(e), m.c(), U(m, 1), m.m(o, null)) : m && (se(), V(m, 1, 1, () => {
        m = null;
      }), re()), (!i || h[0] & /*tool*/
      4096) && pt(
        t,
        "drawing",
        /*tool*/
        e[12]
      );
    },
    i(f) {
      if (!i) {
        for (let h = 0; h < a.length; h += 1)
          U(l[h]);
        U(m), i = !0;
      }
    },
    o(f) {
      l = l.filter(Boolean);
      for (let h = 0; h < l.length; h += 1)
        V(l[h]);
      V(m), i = !1;
    },
    d(f) {
      f && v(t), lt(l, f), m && m.d(), e[25](null), e[26](null), s = !1, oe(r);
    }
  };
}
function gi(e, t, n) {
  let o, i, s, r, a, l, u, m, f, h, d = z, g = () => (d(), d = zt(y, (P) => n(14, h = P)), y);
  e.$$.on_destroy.push(() => d());
  let { drawingEnabled: b } = t, { image: T } = t, { preferredDrawingMode: w } = t, { state: _ } = t, { style: A = void 0 } = t, { toolName: S = ze().length > 0 ? ze()[0] : void 0 } = t, { user: O } = t, Y, C, y;
  Le(() => g(n(5, y = No(T, C))));
  const { selection: p, store: E } = _;
  gt(e, p, (P) => n(24, m = P)), gt(e, E, (P) => n(13, f = P));
  let M = null, B = null;
  const R = (P) => {
    E.unobserve(M);
    const Q = P.filter(({ editable: K }) => K).map(({ id: K }) => K);
    Q.length > 0 ? (n(6, B = Q.map((K) => E.getAnnotation(K))), M = (K) => {
      const { updated: de } = K.changes;
      n(6, B = de.map((W) => W.newValue));
    }, E.observe(M, { annotations: Q })) : n(6, B = null);
  }, N = (P) => {
    const Q = Zt(), K = {
      id: Q,
      bodies: [],
      target: {
        annotation: Q,
        selector: P.detail,
        creator: O,
        created: /* @__PURE__ */ new Date()
      }
    };
    E.addAnnotation(K), p.setSelected(K.id);
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
  function ye(P) {
    Ye[P ? "unshift" : "push"](() => {
      Y = P, n(4, Y);
    });
  }
  function Oe(P) {
    Ye[P ? "unshift" : "push"](() => {
      C = P, n(3, C);
    });
  }
  return e.$$set = (P) => {
    "drawingEnabled" in P && n(0, b = P.drawingEnabled), "image" in P && n(19, T = P.image), "preferredDrawingMode" in P && n(20, w = P.preferredDrawingMode), "state" in P && n(21, _ = P.state), "style" in P && n(1, A = P.style), "toolName" in P && n(2, S = P.toolName), "user" in P && n(22, O = P.user);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*toolName*/
    4 && n(12, { tool: o, opts: i } = tn(S), o, (n(23, i), n(2, S))), e.$$.dirty[0] & /*opts, preferredDrawingMode*/
    9437184 && n(11, s = (i == null ? void 0 : i.drawingMode) || w), e.$$.dirty[0] & /*svgEl*/
    8 && n(10, r = si(C)), e.$$.dirty[0] & /*svgEl*/
    8 && n(9, { onPointerDown: a, onPointerUp: l } = li(C, E), a, (n(8, l), n(3, C))), e.$$.dirty[0] & /*$selection*/
    16777216 && n(7, u = (P) => m.selected.find((Q) => Q.id === P.id && Q.editable)), e.$$.dirty[0] & /*$selection*/
    16777216 && R(m.selected);
  }, [
    b,
    A,
    S,
    C,
    Y,
    y,
    B,
    u,
    l,
    a,
    r,
    s,
    o,
    f,
    h,
    p,
    E,
    N,
    X,
    T,
    w,
    _,
    O,
    i,
    m,
    ye,
    Oe
  ];
}
class pi extends ne {
  constructor(t) {
    super(), te(
      this,
      t,
      gi,
      mi,
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
function yi(e, t, n, o, i) {
  nn(e, t, n || 0, o || e.length - 1, i || _i);
}
function nn(e, t, n, o, i) {
  for (; o > n; ) {
    if (o - n > 600) {
      var s = o - n + 1, r = t - n + 1, a = Math.log(s), l = 0.5 * Math.exp(2 * a / 3), u = 0.5 * Math.sqrt(a * l * (s - l) / s) * (r - s / 2 < 0 ? -1 : 1), m = Math.max(n, Math.floor(t - r * l / s + u)), f = Math.min(o, Math.floor(t + (s - r) * l / s + u));
      nn(e, t, m, f, i);
    }
    var h = e[t], d = n, g = o;
    for (ve(e, n, t), i(e[o], h) > 0 && ve(e, n, o); d < g; ) {
      for (ve(e, d, g), d++, g--; i(e[d], h) < 0; )
        d++;
      for (; i(e[g], h) > 0; )
        g--;
    }
    i(e[n], h) === 0 ? ve(e, n, g) : (g++, ve(e, g, o)), g <= t && (n = g + 1), t <= g && (o = g - 1);
  }
}
function ve(e, t, n) {
  var o = e[t];
  e[t] = e[n], e[n] = o;
}
function _i(e, t) {
  return e < t ? -1 : e > t ? 1 : 0;
}
class wi {
  constructor(t = 9) {
    this._maxEntries = Math.max(4, t), this._minEntries = Math.max(2, Math.ceil(this._maxEntries * 0.4)), this.clear();
  }
  all() {
    return this._all(this.data, []);
  }
  search(t) {
    let n = this.data;
    const o = [];
    if (!Ge(t, n))
      return o;
    const i = this.toBBox, s = [];
    for (; n; ) {
      for (let r = 0; r < n.children.length; r++) {
        const a = n.children[r], l = n.leaf ? i(a) : a;
        Ge(t, l) && (n.leaf ? o.push(a) : ot(t, l) ? this._all(a, o) : s.push(a));
      }
      n = s.pop();
    }
    return o;
  }
  collides(t) {
    let n = this.data;
    if (!Ge(t, n))
      return !1;
    const o = [];
    for (; n; ) {
      for (let i = 0; i < n.children.length; i++) {
        const s = n.children[i], r = n.leaf ? this.toBBox(s) : s;
        if (Ge(t, r)) {
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
        const m = bi(t, o.children, n);
        if (m !== -1)
          return o.children.splice(m, 1), s.push(o), this._condense(s), this;
      }
      !u && !o.leaf && ot(o, i) ? (s.push(o), r.push(a), a = 0, l = o, o = o.children[0]) : l ? (a++, o = l.children[a], u = !1) : o = null;
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
    Vt(t, n, o, u, this.compareMinX);
    for (let m = n; m <= o; m += u) {
      const f = Math.min(m + u - 1, o);
      Vt(t, m, f, l, this.compareMinY);
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
        const u = n.children[l], m = nt(u), f = Ti(t, u) - m;
        f < r ? (r = f, s = m < s ? m : s, a = u) : f === r && m < s && (s = m, a = u);
      }
      n = a || n.children[0];
    }
    return n;
  }
  _insert(t, n, o) {
    const i = o ? t : this.toBBox(t), s = [], r = this._chooseSubtree(i, this.data, n, s);
    for (r.children.push(t), Ie(r, i); n >= 0 && s[n].children.length > this._maxEntries; )
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
      const l = ke(t, 0, a, this.toBBox), u = ke(t, a, o, this.toBBox), m = Si(l, u), f = nt(l) + nt(u);
      m < s ? (s = m, i = a, r = f < r ? f : r) : m === s && f < r && (r = f, i = a);
    }
    return i || o - n;
  }
  // sorts node children by the best axis for split
  _chooseSplitAxis(t, n, o) {
    const i = t.leaf ? this.compareMinX : Ei, s = t.leaf ? this.compareMinY : Ai, r = this._allDistMargin(t, n, o, i), a = this._allDistMargin(t, n, o, s);
    r < a && t.children.sort(i);
  }
  // total margin of all possible split distributions where each node is at least m full
  _allDistMargin(t, n, o, i) {
    t.children.sort(i);
    const s = this.toBBox, r = ke(t, 0, n, s), a = ke(t, o - n, o, s);
    let l = Ve(r) + Ve(a);
    for (let u = n; u < o - n; u++) {
      const m = t.children[u];
      Ie(r, t.leaf ? s(m) : m), l += Ve(r);
    }
    for (let u = o - n - 1; u >= n; u--) {
      const m = t.children[u];
      Ie(a, t.leaf ? s(m) : m), l += Ve(a);
    }
    return l;
  }
  _adjustParentBBoxes(t, n, o) {
    for (let i = o; i >= 0; i--)
      Ie(n[i], t);
  }
  _condense(t) {
    for (let n = t.length - 1, o; n >= 0; n--)
      t[n].children.length === 0 ? n > 0 ? (o = t[n - 1].children, o.splice(o.indexOf(t[n]), 1)) : this.clear() : Ee(t[n], this.toBBox);
  }
}
function bi(e, t, n) {
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
    Ie(i, e.leaf ? o(r) : r);
  }
  return i;
}
function Ie(e, t) {
  return e.minX = Math.min(e.minX, t.minX), e.minY = Math.min(e.minY, t.minY), e.maxX = Math.max(e.maxX, t.maxX), e.maxY = Math.max(e.maxY, t.maxY), e;
}
function Ei(e, t) {
  return e.minX - t.minX;
}
function Ai(e, t) {
  return e.minY - t.minY;
}
function nt(e) {
  return (e.maxX - e.minX) * (e.maxY - e.minY);
}
function Ve(e) {
  return e.maxX - e.minX + (e.maxY - e.minY);
}
function Ti(e, t) {
  return (Math.max(t.maxX, e.maxX) - Math.min(t.minX, e.minX)) * (Math.max(t.maxY, e.maxY) - Math.min(t.minY, e.minY));
}
function Si(e, t) {
  const n = Math.max(e.minX, t.minX), o = Math.max(e.minY, t.minY), i = Math.min(e.maxX, t.maxX), s = Math.min(e.maxY, t.maxY);
  return Math.max(0, i - n) * Math.max(0, s - o);
}
function ot(e, t) {
  return e.minX <= t.minX && e.minY <= t.minY && t.maxX <= e.maxX && t.maxY <= e.maxY;
}
function Ge(e, t) {
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
function Vt(e, t, n, o, i) {
  const s = [t, n];
  for (; s.length; ) {
    if (n = s.pop(), t = s.pop(), n - t <= o)
      continue;
    const r = t + Math.ceil((n - t) / o / 2) * o;
    yi(e, r, t, n, i), s.push(t, r, r, n);
  }
}
const Mi = () => {
  const e = new wi(), t = /* @__PURE__ */ new Map(), n = () => [...t.values()], o = () => {
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
      }).map((b) => b.target).filter((b) => b.selector.type === q.RECTANGLE || bn(b.selector, f, h));
      if (g.length > 0)
        return g.sort((b, T) => rt(b.selector) - rt(T.selector)), g[0];
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
        const { minX: b, minY: T, maxX: w, maxY: _ } = g.selector.geometry.bounds;
        return { minX: b, minY: T, maxX: w, maxY: _, target: g };
      });
      d.forEach((g) => t.set(g.target.annotation, g)), e.load(d);
    },
    size: () => e.all().length,
    update: (f, h) => {
      s(f), i(h);
    }
  };
}, Li = (e) => {
  const t = Wn(), n = Mi(), o = Un(t, e.pointerSelectAction), i = Cn(t), s = $n();
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
}, Oi = (e) => {
  const t = Li(e);
  return {
    ...t,
    store: Jn(t.store)
  };
}, vi = (e) => {
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
}, ki = (e) => {
  const t = vi(e), n = t > 0.6 ? "dark" : "light";
  return console.log(`[Annotorious] Image brightness: ${t.toFixed(1)}. Setting ${n} theme.`), n;
}, Gt = (e, t, n) => t.setAttribute("data-theme", n === "auto" ? ki(e) : n), Ii = (e, t) => ({
  ...e,
  drawingEnabled: e.drawingEnabled === void 0 ? t.drawingEnabled : e.drawingEnabled,
  drawingMode: e.drawingMode || t.drawingMode,
  pointerSelectAction: e.pointerSelectAction || t.pointerSelectAction,
  theme: e.theme || t.theme
}), Ht = navigator.userAgent.indexOf("Mac OS X") !== -1, Bi = (e, t) => {
  const n = t || document, o = (r) => {
    r.key === "Z" && r.ctrlKey ? e.undo() : r.key === "Y" && r.ctrlKey && e.redo();
  }, i = (r) => {
    r.key === "z" && r.metaKey && (r.shiftKey ? e.redo() : e.undo());
  }, s = () => {
    Ht ? n.removeEventListener("keydown", i) : n.removeEventListener("keydown", o);
  };
  return Ht ? n.addEventListener("keydown", i) : n.addEventListener("keydown", o), {
    destroy: s
  };
}, Ri = (e, t = {}) => {
  if (!e)
    throw "Missing argument: image";
  const n = typeof e == "string" ? document.getElementById(e) : e, o = Ii(t, {
    drawingEnabled: !0,
    drawingMode: "drag",
    pointerSelectAction: Qt.EDIT,
    theme: "light"
  }), i = Oi(o), { selection: s, store: r } = i, a = xn(r), l = eo(
    i,
    a,
    o.adapter,
    o.autoSave
  ), u = document.createElement("DIV");
  u.style.position = "relative", u.style.display = "inline-block", n.style.display = "block", n.parentNode.insertBefore(u, n), u.appendChild(n);
  const m = Bi(a);
  let f = lo();
  Gt(n, u, o.theme);
  const h = new pi({
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
  h.$on("click", (y) => {
    const { originalEvent: p, annotation: E } = y.detail;
    E ? s.clickSelect(E.id, p) : s.isEmpty() || s.clear();
  });
  const d = no(i, a, o.adapter), g = () => {
    h.$destroy(), u.parentNode.insertBefore(n, u), u.parentNode.removeChild(u), m.destroy(), a.destroy();
  }, b = () => f, T = (y, p, E) => qo(y, p, E), w = (y, p) => Lo(y, p), _ = (y) => {
    console.log(ze());
    const p = tn(y);
    if (console.log(p), !p)
      throw `No such tool named ${y}`;
    h.$set({ toolName: y });
  }, A = (y) => h.$set({ drawingEnabled: y }), S = (y) => {
    console.warn("Filter not implemented yet");
  }, O = (y) => h.$set({ style: y }), Y = (y) => Gt(n, u, y), C = (y) => {
    f = y, h.$set({ user: y });
  };
  return {
    ...d,
    destroy: g,
    getUser: b,
    listDrawingTools: ze,
    on: l.on,
    off: l.off,
    registerDrawingTool: T,
    registerShapeEditor: w,
    setDrawingEnabled: A,
    setDrawingTool: _,
    setFilter: S,
    setStyle: O,
    setTheme: Y,
    setUser: C,
    state: i
  };
};
export {
  ut as Editor,
  Bo as EditorMount,
  Mo as EllipseEditor,
  L as Handle,
  Di as IdentityTransform,
  yo as PolygonEditor,
  Eo as RectangleEditor,
  Tn as RectangleUtil,
  Ro as RubberbandRectangle,
  pi as SVGAnnotationLayer,
  q as ShapeType,
  Yo as ToolMount,
  Yi as W3CImageFormat,
  li as addEventListeners,
  Fe as boundsFromPoints,
  rt as computeArea,
  Ri as createImageAnnotator,
  Li as createImageAnnotatorState,
  si as createSVGTransform,
  Oi as createSvelteImageAnnotatorState,
  ki as detectTheme,
  $e as distance,
  No as enableResponsive,
  Ii as fillDefaults,
  Mt as getEditor,
  tn as getTool,
  Bi as initKeyboardCommands,
  bn as intersects,
  Xi as isTouch,
  ze as listDrawingTools,
  Sn as parseFragmentSelector,
  In as parseSVGSelector,
  uo as parseW3CImageAnnotation,
  Lo as registerEditor,
  ct as registerShapeUtil,
  qo as registerTool,
  vi as sampleBrightness,
  Mn as serializeFragmentSelector,
  Bn as serializeSVGSelector,
  ho as serializeW3CImageAnnotation,
  Gt as setTheme
};
//# sourceMappingURL=annotorious.es.js.map
