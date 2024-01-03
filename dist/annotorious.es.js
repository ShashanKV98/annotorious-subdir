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
function se(e) {
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
function cn(e, t, n, o) {
  if (e) {
    const i = Wt(e, t, n, o);
    return e[0](i);
  }
}
function Wt(e, t, n, o) {
  return e[1] && o ? an(n.ctx.slice(), e[1](o(t))) : n.ctx;
}
function un(e, t, n, o) {
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
function dn(e, t, n, o, i, r) {
  if (i) {
    const s = Wt(t, n, o, r);
    e.p(s, i);
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
function B(e) {
  return document.createElementNS("http://www.w3.org/2000/svg", e);
}
function Zt(e) {
  return document.createTextNode(e);
}
function J() {
  return Zt(" ");
}
function ue() {
  return Zt("");
}
function j(e, t, n, o) {
  return e.addEventListener(t, n, o), () => e.removeEventListener(t, n, o);
}
function f(e, t, n) {
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
      const r = gn(t, n, { cancelable: o });
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
let Oe = [];
const _t = [], pn = /* @__PURE__ */ Promise.resolve();
let it = !1;
function yn() {
  it || (it = !0, pn.then(Qt));
}
function rt(e) {
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
    e.update(), se(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(rt);
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
function ce() {
  pe.r || se(pe.c), pe = pe.p;
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
  const { fragment: i, after_update: r } = e.$$;
  i && i.m(t, n), o || rt(() => {
    const s = e.$$.on_mount.map(qt).filter(V);
    e.$$.on_destroy ? e.$$.on_destroy.push(...s) : se(s), e.$$.on_mount = [];
  }), r.forEach(rt);
}
function re(e, t) {
  const n = e.$$;
  n.fragment !== null && (wn(n.after_update), se(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function bn(e, t) {
  e.$$.dirty[0] === -1 && (Te.push(e), yn(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
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
  if (u.ctx = n ? n(e, t.props || {}, (c, m, ...d) => {
    const g = d.length ? d[0] : m;
    return u.ctx && i(u.ctx[c], u.ctx[c] = g) && (!u.skip_bound && u.bound[c] && u.bound[c](g), h && bn(e, c)), m;
  }) : [], u.update(), h = !0, se(u.before_update), u.fragment = o ? o(u.ctx) : !1, t.target) {
    if (t.hydrate) {
      const c = mn(t.target);
      u.fragment && u.fragment.l(c), c.forEach(O);
    } else
      u.fragment && u.fragment.c();
    t.intro && H(e.$$.fragment), ie(e, t.target, t.anchor, t.customElement), Qt();
  }
  De(l);
}
class x {
  $destroy() {
    re(this, 1), this.$destroy = z;
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
const ct = {}, Re = (e, t) => ct[e] = t, st = (e) => ct[e.type].area(e), En = (e, t, n) => ct[e.type].intersects(e, t, n), _e = (e) => {
  let t = 1 / 0, n = 1 / 0, o = -1 / 0, i = -1 / 0;
  return e.forEach(([r, s]) => {
    t = Math.min(t, r), n = Math.min(n, s), o = Math.max(o, r), i = Math.max(i, s);
  }), { minX: t, minY: n, maxX: o, maxY: i };
}, An = {
  area: (e) => Math.PI * e.geometry.rx * e.geometry.ry,
  intersects: (e, t, n) => {
    const { cx: o, cy: i, rx: r, ry: s } = e.geometry, a = 0, l = Math.cos(a), u = Math.sin(a), h = t - o, c = n - i, m = l * h + u * c, d = u * h - l * c;
    return m * m / (r * r) + d * d / (s * s) <= 1;
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
    for (let r = 0, s = o.length - 1; r < o.length; s = r++) {
      const a = o[r][0], l = o[r][1], u = o[s][0], h = o[s][1];
      l > n != h > n && t < (u - a) * (n - l) / (h - l) + a && (i = !i);
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
    for (let r = 0, s = o.length - 1; r < o.length; s = r++) {
      const a = o[r][0], l = o[r][1], u = o[s][0], h = o[s][1];
      l > n != h > n && t < (u - a) * (n - l) / (h - l) + a && (i = !i);
    }
    return i;
  }
};
Re(F.FREEHAND, Tn);
const Ln = {
  area: (e) => 0,
  intersects: (e, t, n) => {
    const o = e.geometry.x1, i = e.geometry.x2, r = e.geometry.y1, s = e.geometry.y2;
    var a = Math.sqrt(Math.pow(t - o, 2) + Math.pow(n - r, 2)), l = Math.sqrt(Math.pow(t - i, 2) + Math.pow(n - s, 2)), u = Math.sqrt(Math.pow(i - o, 2) + Math.pow(s - r, 2)), h = a + l;
    return Math.abs(h - u) <= 0.1;
  }
};
Re(F.LINE, Ln);
const On = (e, t = !1) => {
  const n = typeof e == "string" ? e : e.value, o = /^(xywh)=(pixel|percent)?:?(.+?),(.+?),(.+?),(.+)*/g, i = [...n.matchAll(o)][0], [r, s, a, l, u, h, c] = i;
  if (s !== "xywh")
    throw new Error("Unsupported MediaFragment: " + n);
  if (a && a !== "pixel")
    throw new Error(`Unsupported MediaFragment unit: ${a}`);
  const [m, d, g, S] = [l, u, h, c].map(parseFloat);
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
}, vn = (e) => {
  const o = new XMLSerializer().serializeToString(e.documentElement).replace("<svg>", `<svg xmlns="${xt}">`);
  return new DOMParser().parseFromString(o, "image/svg+xml").documentElement;
};
function Pn(e, t) {
  var n = e[0] - t[0], o = e[1] - t[1];
  return n * n + o * o;
}
function In(e, t, n) {
  var o = t[0], i = t[1], r = n[0] - o, s = n[1] - i;
  if (r !== 0 || s !== 0) {
    var a = ((e[0] - o) * r + (e[1] - i) * s) / (r * r + s * s);
    a > 1 ? (o = n[0], i = n[1]) : a > 0 && (o += r * a, i += s * a);
  }
  return r = e[0] - o, s = e[1] - i, r * r + s * s;
}
function Dn(e, t) {
  for (var n = e[0], o = [n], i, r = 1, s = e.length; r < s; r++)
    i = e[r], Pn(i, n) > t && (o.push(i), n = i);
  return n !== i && o.push(i), o;
}
function lt(e, t, n, o, i) {
  for (var r = o, s, a = t + 1; a < n; a++) {
    var l = In(e[a], e[t], e[n]);
    l > r && (s = a, r = l);
  }
  r > o && (s - t > 1 && lt(e, t, s, o, i), i.push(e[s]), n - s > 1 && lt(e, s, n, o, i));
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
function Xn(e) {
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
  return Xn(
    n ? Yn(e, 1) : e
  );
}
const $t = (e) => {
  const n = new DOMParser().parseFromString(e, "image/svg+xml"), o = n.lookupPrefix(xt), i = n.lookupNamespaceURI(null);
  return o || i ? wt(n).firstChild : wt(vn(n)).firstChild;
}, Rn = (e) => {
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
}, Nn = (e) => {
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
}, Cn = (e) => {
  const t = $t(e), n = parseFloat(t.getAttribute("cx")), o = parseFloat(t.getAttribute("cy")), i = parseFloat(t.getAttribute("rx")), r = parseFloat(t.getAttribute("ry")), s = {
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
}, Un = (e) => {
  const t = $t(e), n = parseFloat(t.getAttribute("x1")), o = parseFloat(t.getAttribute("x2")), i = parseFloat(t.getAttribute("y1")), r = parseFloat(t.getAttribute("y2")), s = {
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
  function i(a) {
    if (qn(e, a) && (e = a, n)) {
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
const Kn = (e) => {
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
var tn = /* @__PURE__ */ ((e) => (e.EDIT = "EDIT", e.SELECT = "SELECT", e.NONE = "NONE", e))(tn || {});
const xe = { selected: [] }, Wn = (e, t = "EDIT") => {
  const { subscribe: n, set: o } = dt(xe);
  let i = xe;
  n((c) => i = c);
  const r = () => o(xe), s = () => {
    var c;
    return ((c = i.selected) == null ? void 0 : c.length) === 0;
  }, a = (c) => {
    if (i.selected.length === 0)
      return !1;
    const m = typeof c == "string" ? c : c.id;
    return i.selected.some((d) => d.id === m);
  }, l = (c, m) => {
    const d = e.getAnnotation(c);
    if (d) {
      const g = Zn(d, t);
      o(g === "EDIT" ? { selected: [{ id: c, editable: !0 }], pointerEvent: m } : g === "SELECT" ? { selected: [{ id: c }], pointerEvent: m } : { selected: [], pointerEvent: m });
    } else
      console.warn("Invalid selection: " + c);
  }, u = (c, m = !0) => {
    const d = Array.isArray(c) ? c : [c], g = d.map((S) => e.getAnnotation(S)).filter((S) => S);
    o({ selected: g.map(({ id: S }) => ({ id: S, editable: m })) }), g.length !== d.length && console.warn("Invalid selection", c);
  }, h = (c) => {
    if (i.selected.length === 0)
      return !1;
    const { selected: m } = i;
    m.filter(({ id: d }) => c.includes(d)).length > 0 && o({ selected: m.filter(({ id: d }) => !c.includes(d)) });
  };
  return e.observe(({ changes: c }) => h(c.deleted.map((m) => m.id))), {
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
}, no = (e, t) => {
  const n = new Set((e.created || []).map((c) => c.id)), o = new Set((e.updated || []).map(({ newValue: c }) => c.id)), i = new Set((t.created || []).map((c) => c.id)), r = new Set((t.deleted || []).map((c) => c.id)), s = new Set((t.updated || []).map(({ oldValue: c }) => c.id)), a = new Set((t.updated || []).filter(({ oldValue: c }) => n.has(c.id) || o.has(c.id)).map(({ oldValue: c }) => c.id)), l = [
    ...(e.created || []).filter((c) => !r.has(c.id)).map((c) => s.has(c.id) ? t.updated.find(({ oldValue: m }) => m.id === c.id).newValue : c),
    ...t.created || []
  ], u = [
    ...(e.deleted || []).filter((c) => !i.has(c.id)),
    ...(t.deleted || []).filter((c) => !n.has(c.id))
  ], h = [
    ...(e.updated || []).filter(({ newValue: c }) => !r.has(c.id)).map((c) => {
      const { oldValue: m, newValue: d } = c;
      if (s.has(d.id)) {
        const g = t.updated.find((S) => S.oldValue.id === d.id).newValue;
        return nn(m, g);
      } else
        return c;
    }),
    ...(t.updated || []).filter(({ oldValue: c }) => !a.has(c.id))
  ];
  return { created: l, deleted: u, updated: h };
}, oo = (e) => e.id !== void 0, io = () => {
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
    n.forEach((v) => {
      to(v, E) && v.onChange(E);
    });
  }, s = (b, y = q.LOCAL) => {
    if (e.get(b.id))
      throw Error(`Cannot add annotation ${b.id} - exists already`);
    e.set(b.id, b), b.bodies.forEach((E) => t.set(E.id, b.id)), r(y, { created: [b] });
  }, a = (b, y) => {
    const E = typeof b == "string" ? y : b, v = typeof b == "string" ? b : b.id, I = e.get(v);
    if (I) {
      const C = nn(I, E);
      return v === E.id ? e.set(v, E) : (e.delete(v), e.set(E.id, E)), I.bodies.forEach((U) => t.delete(U.id)), E.bodies.forEach((U) => t.set(U.id, E.id)), C;
    } else
      console.warn(`Cannot update annotation ${v} - does not exist`);
  }, l = (b, y = q.LOCAL, E = q.LOCAL) => {
    const v = oo(y) ? E : y, I = a(b, y);
    I && r(v, { updated: [I] });
  }, u = (b, y = q.LOCAL) => {
    const E = b.reduce((v, I) => {
      const C = a(I);
      return C ? [...v, C] : v;
    }, []);
    E.length > 0 && r(y, { updated: E });
  }, h = (b, y = q.LOCAL) => {
    const E = e.get(b.annotation);
    if (E) {
      const v = {
        ...E,
        bodies: [...E.bodies, b]
      };
      e.set(E.id, v), t.set(b.id, v.id), r(y, { updated: [{
        oldValue: E,
        newValue: v,
        bodiesCreated: [b]
      }] });
    } else
      console.warn(`Attempt to add body to missing annotation: ${b.annotation}`);
  }, c = () => [...e.values()], m = (b = q.LOCAL) => {
    const y = [...e.values()];
    e.clear(), t.clear(), r(b, { deleted: y });
  }, d = (b, y = !0, E = q.LOCAL) => {
    if (y) {
      const v = [...e.values()];
      e.clear(), t.clear(), b.forEach((I) => {
        e.set(I.id, I), I.bodies.forEach((C) => t.set(C.id, I.id));
      }), r(E, { created: b, deleted: v });
    } else {
      const v = b.reduce((I, C) => {
        const U = e.get(C.id);
        return U ? [...I, U] : I;
      }, []);
      if (v.length > 0)
        throw Error(`Bulk insert would overwrite the following annotations: ${v.map((I) => I.id).join(", ")}`);
      b.forEach((I) => {
        e.set(I.id, I), I.bodies.forEach((C) => t.set(C.id, I.id));
      }), r(E, { created: b });
    }
  }, g = (b) => {
    const y = typeof b == "string" ? b : b.id, E = e.get(y);
    if (E)
      return e.delete(y), E.bodies.forEach((v) => t.delete(v.id)), E;
    console.warn(`Attempt to delete missing annotation: ${y}`);
  }, S = (b, y = q.LOCAL) => {
    const E = g(b);
    E && r(y, { deleted: [E] });
  }, A = (b, y = q.LOCAL) => {
    const E = b.reduce((v, I) => {
      const C = g(I);
      return C ? [...v, C] : v;
    }, []);
    E.length > 0 && r(y, { deleted: E });
  }, w = (b, y = q.LOCAL) => {
    const E = e.get(b.annotation);
    if (E) {
      const v = E.bodies.find((I) => I.id === b.id);
      if (v) {
        t.delete(v.id);
        const I = {
          ...E,
          bodies: E.bodies.filter((C) => C.id !== b.id)
        };
        e.set(E.id, I), r(y, { updated: [{
          oldValue: E,
          newValue: I,
          bodiesDeleted: [v]
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
      const E = p(y).bodies.find((v) => v.id === b);
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
      const v = E.bodies.find((C) => C.id === b.id), I = {
        ...E,
        bodies: E.bodies.map((C) => C.id === v.id ? y : C)
      };
      return e.set(E.id, I), v.id !== y.id && (t.delete(v.id), t.set(y.id, I.id)), {
        oldValue: E,
        newValue: I,
        bodiesUpdated: [{ oldBody: v, newBody: y }]
      };
    } else
      console.warn(`Attempt to add body to missing annotation ${b.annotation}`);
  }, L = (b, y, E = q.LOCAL) => {
    const v = M(b, y);
    r(E, { updated: [v] });
  }, D = (b, y = q.LOCAL) => {
    const E = b.map((v) => M({ id: v.id, annotation: v.annotation }, v));
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
    all: c,
    bulkAddAnnotation: d,
    bulkDeleteAnnotation: A,
    bulkUpdateAnnotation: u,
    bulkUpdateBodies: D,
    bulkUpdateTargets: (b, y = q.LOCAL) => {
      const E = b.map(X).filter((v) => v);
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
}, ro = (e) => ({
  ...e,
  subscribe: (t) => {
    const n = (o) => t(o.state);
    return e.observe(n), t(e.all()), () => e.unobserve(n);
  }
});
let so = () => ({
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
  const t = so(), n = [];
  let o = -1, i = !1, r = 0;
  const s = (d) => {
    if (!i) {
      const { changes: g } = d, S = performance.now();
      if (S - r > lo)
        n.splice(o + 1), n.push(g), o = n.length - 1;
      else {
        const A = n.length - 1;
        n[A] = no(n[A], g);
      }
      r = S;
    }
    i = !1;
  };
  e.observe(s, { origin: q.LOCAL });
  const a = (d) => (d == null ? void 0 : d.length) > 0 && e.bulkDeleteAnnotation(d), l = (d) => (d == null ? void 0 : d.length) > 0 && e.bulkAddAnnotation(d, !1), u = (d) => (d == null ? void 0 : d.length) > 0 && e.bulkUpdateAnnotation(d.map(({ oldValue: g }) => g)), h = (d) => (d == null ? void 0 : d.length) > 0 && e.bulkUpdateAnnotation(d.map(({ newValue: g }) => g)), c = (d) => (d == null ? void 0 : d.length) > 0 && e.bulkAddAnnotation(d, !1), m = (d) => (d == null ? void 0 : d.length) > 0 && e.bulkDeleteAnnotation(d);
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
        a(d), u(g), c(S), t.emit("undo", n[o]), o -= 1;
      }
    }
  };
}, fo = () => {
  const { subscribe: e, set: t } = dt([]);
  return {
    subscribe: e,
    set: t
  };
}, co = (e, t, n, o) => {
  const { store: i, selection: r, hover: s, viewport: a } = e, l = /* @__PURE__ */ new Map();
  let u = [], h, c;
  const m = (w, p) => {
    l.has(w) ? l.get(w).push(p) : l.set(w, [p]);
  }, d = (w, p) => {
    const _ = l.get(w);
    _ && _.indexOf(p) > 0 && _.splice(_.indexOf(p), 1);
  }, g = (w, p, _) => {
    l.has(w) && setTimeout(() => {
      l.get(w).forEach((M) => {
        if (n) {
          const L = Array.isArray(p) ? p.map((X) => n.serialize(X)) : n.serialize(p), D = _ ? _ instanceof PointerEvent ? _ : n.serialize(_) : void 0;
          M(L, D);
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
    o && (c && clearTimeout(c), c = setTimeout(S, 1e3));
    const { created: p, deleted: _ } = w.changes;
    p.forEach((M) => g("createAnnotation", M)), _.forEach((M) => g("deleteAnnotation", M)), w.changes.updated.filter((M) => [
      ...M.bodiesCreated || [],
      ...M.bodiesDeleted || [],
      ...M.bodiesUpdated || []
    ].length > 0).forEach(({ oldValue: M, newValue: L }) => {
      const D = u.find((X) => X.id === M.id) || M;
      u = u.map((X) => X.id === M.id ? L : X), g("updateAnnotation", L, D);
    });
  }, { origin: q.LOCAL }), i.observe((w) => {
    if (u) {
      const p = new Set(u.map((M) => M.id)), _ = w.changes.updated.filter(({ newValue: M }) => p.has(M.id)).map(({ newValue: M }) => M);
      _.length > 0 && (u = u.map((M) => _.find((D) => D.id === M.id) || M));
    }
  }, { origin: q.REMOTE });
  const A = (w) => (p) => {
    const { created: _, deleted: M, updated: L } = p;
    _.forEach((D) => g("createAnnotation", D)), M.forEach((D) => g("deleteAnnotation", D)), w ? L.forEach((D) => g("updateAnnotation", D.oldValue, D.newValue)) : L.forEach((D) => g("updateAnnotation", D.newValue, D.oldValue));
  };
  return t.on("undo", A(!0)), t.on("redo", A(!1)), { on: m, off: d, emit: g };
}, uo = (e) => (t) => t.reduce((n, o) => {
  const { parsed: i, error: r } = e.parse(o);
  return r ? {
    parsed: n.parsed,
    failed: [...n.failed, o]
  } : {
    parsed: [...n.parsed, i],
    failed: n.failed
  };
}, { parsed: [], failed: [] }), ho = (e, t, n) => {
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
  }, c = (A) => fetch(A).then((w) => w.json()).then((w) => (d(w), w)), m = (A) => {
    if (typeof A == "string") {
      const w = o.getAnnotation(A);
      return o.deleteAnnotation(A), n ? n.serialize(w) : w;
    } else {
      const w = n ? n.parse(A).parsed : A;
      return o.deleteAnnotation(w), A;
    }
  }, d = (A) => {
    if (n) {
      const { parsed: w, failed: p } = uo(n)(A);
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
    loadAnnotations: c,
    redo: t.redo,
    removeAnnotation: m,
    setAnnotations: d,
    setSelected: g,
    undo: t.undo,
    updateAnnotation: S
  };
};
let mo = (e) => crypto.getRandomValues(new Uint8Array(e)), go = (e, t, n) => {
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
}, po = (e, t = 21) => go(e, t, mo), yo = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
const _o = () => ({ isGuest: !0, id: po("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_", 20)() }), wo = (e) => {
  const t = JSON.stringify(e);
  let n = 0;
  for (let o = 0, i = t.length; o < i; o++) {
    let r = t.charCodeAt(o);
    n = (n << 5) - n + r, n |= 0;
  }
  return `${n}`;
}, on = (e) => e ? typeof e == "object" ? { ...e } : e : void 0, bo = (e, t) => (Array.isArray(e) ? e : [e]).map((n) => {
  const { id: o, type: i, purpose: r, value: s, created: a, creator: l, ...u } = n;
  return {
    id: o || `temp-${wo(n)}`,
    annotation: t,
    type: i,
    purpose: r,
    value: s,
    created: a ? new Date(a) : void 0,
    creator: on(l),
    ...u
  };
}), Eo = (e) => e.map((t) => {
  var n;
  const o = { ...t };
  return delete o.annotation, (n = o.id) != null && n.startsWith("temp-") && delete o.id, o;
});
yo();
const sr = (e, t = !1) => ({ parse: (i) => Ao(i, t), serialize: (i) => So(i, e) }), Ao = (e, t = !1) => {
  const n = e.id || en(), {
    creator: o,
    created: i,
    updatedBy: r,
    updated: s,
    body: a,
    ...l
  } = e, u = bo(a, n), h = Array.isArray(e.target) ? e.target[0] : e.target, c = Array.isArray(h.selector) ? h.selector[0] : h.selector, m = c.type === "FragmentSelector" ? On(c, t) : c.type === "SvgSelector" ? Hn(c) : void 0;
  return m ? {
    parsed: {
      ...l,
      id: n,
      bodies: u,
      target: {
        created: i ? new Date(i) : void 0,
        creator: on(o),
        ...l.target,
        annotation: n,
        selector: m
      }
    }
  } : {
    error: Error(`Unknown selector type: ${c.type}`)
  };
}, So = (e, t) => {
  const {
    selector: n,
    creator: o,
    created: i,
    updated: r,
    updatedBy: s,
    ...a
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
      t = B("rect"), f(t, "class", "a9s-corner-handle"), f(t, "x", n = /*point*/
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
      k(s, t, a), i || (r = j(t, "pointerdown", function() {
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
      s && O(t), i = !1, r();
    }
  };
}
function Mo(e) {
  let t, n, o, i, r, s, a, l, u, h, c = (
    /*geom*/
    e[4].points
  ), m = [];
  for (let d = 0; d < c.length; d += 1)
    m[d] = St(At(e, c, d));
  return {
    c() {
      t = B("polygon"), i = J(), r = B("polygon"), a = J();
      for (let d = 0; d < m.length; d += 1)
        m[d].c();
      l = ue(), f(t, "class", "a9s-outer"), f(t, "style", n = /*computedStyle*/
      e[1] ? "display:none;" : void 0), f(t, "points", o = /*geom*/
      e[4].points.map(Mt).join(" ")), f(r, "class", "a9s-inner a9s-shape-handle"), f(
        r,
        "style",
        /*computedStyle*/
        e[1]
      ), f(r, "points", s = /*geom*/
      e[4].points.map(Tt).join(" "));
    },
    m(d, g) {
      k(d, t, g), k(d, i, g), k(d, r, g), k(d, a, g);
      for (let S = 0; S < m.length; S += 1)
        m[S] && m[S].m(d, g);
      k(d, l, g), u || (h = [
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
      e[1] ? "display:none;" : void 0) && f(t, "style", n), g & /*geom*/
      16 && o !== (o = /*geom*/
      e[4].points.map(Mt).join(" ")) && f(t, "points", o), g & /*computedStyle*/
      2 && f(
        r,
        "style",
        /*computedStyle*/
        e[1]
      ), g & /*geom*/
      16 && s !== (s = /*geom*/
      e[4].points.map(Tt).join(" ")) && f(r, "points", s), g & /*geom, handleSize, grab, Handle*/
      1048) {
        c = /*geom*/
        e[4].points;
        let S;
        for (S = 0; S < c.length; S += 1) {
          const A = At(e, c, S);
          m[S] ? m[S].p(A, g) : (m[S] = St(A), m[S].c(), m[S].m(l.parentNode, l));
        }
        for (; S < m.length; S += 1)
          m[S].d(1);
        m.length = c.length;
      }
    },
    d(d) {
      d && O(t), d && O(i), d && O(r), d && O(a), ft(m, d), d && O(l), u = !1, se(h);
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
      re(t, o);
    }
  };
}
const Mt = (e) => e.join(","), Tt = (e) => e.join(",");
function Lo(e, t, n) {
  let o, i, { shape: r } = t, { computedStyle: s = void 0 } = t, { transform: a } = t, { viewportScale: l = 1 } = t;
  const u = (d, g, S) => {
    let A;
    g === T.SHAPE ? A = d.geometry.points.map(([p, _]) => [p + S[0], _ + S[1]]) : A = d.geometry.points.map(([p, _], M) => g === T(M) ? [p + S[0], _ + S[1]] : [p, _]);
    const w = _e(A);
    return { ...d, geometry: { points: A, bounds: w } };
  };
  function h(d) {
    te.call(this, e, d);
  }
  function c(d) {
    te.call(this, e, d);
  }
  function m(d) {
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
    h,
    c,
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
  let t, n, o, i, r, s, a, l, u, h, c, m, d, g, S, A, w, p, _, M, L, D, X, b, y, E, v, I, C, U, R, be, ke, Y, ee, W, me, Z, ge, Ce, Ke, ne, Ue, He, We, oe, Fe, Ge, Ze, mt;
  return {
    c() {
      t = B("rect"), a = J(), l = B("rect"), d = J(), g = B("rect"), p = J(), _ = B("rect"), X = J(), b = B("rect"), I = J(), C = B("rect"), ke = J(), Y = B("rect"), me = J(), Z = B("rect"), Ke = J(), ne = B("rect"), We = J(), oe = B("rect"), f(t, "class", "a9s-outer"), f(t, "style", n = /*computedStyle*/
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
      e[4].x), f(l, "y", h = /*geom*/
      e[4].y), f(l, "width", c = /*geom*/
      e[4].w), f(l, "height", m = /*geom*/
      e[4].h), f(g, "class", "a9s-edge-handle a9s-edge-handle-top"), f(g, "x", S = /*geom*/
      e[4].x), f(g, "y", A = /*geom*/
      e[4].y), f(g, "height", 1), f(g, "width", w = /*geom*/
      e[4].w), f(_, "class", "a9s-edge-handle a9s-edge-handle-right"), f(_, "x", M = /*geom*/
      e[4].x + /*geom*/
      e[4].w), f(_, "y", L = /*geom*/
      e[4].y), f(_, "height", D = /*geom*/
      e[4].h), f(_, "width", 1), f(b, "class", "a9s-edge-handle a9s-edge-handle-bottom"), f(b, "x", y = /*geom*/
      e[4].x), f(b, "y", E = /*geom*/
      e[4].y + /*geom*/
      e[4].h), f(b, "height", 1), f(b, "width", v = /*geom*/
      e[4].w), f(C, "class", "a9s-edge-handle a9s-edge-handle-left"), f(C, "x", U = /*geom*/
      e[4].x), f(C, "y", R = /*geom*/
      e[4].y), f(C, "height", be = /*geom*/
      e[4].h), f(C, "width", 1), f(Y, "class", "a9s-corner-handle a9s-corner-handle-topleft"), f(Y, "x", ee = /*geom*/
      e[4].x - /*handleSize*/
      e[3] / 2), f(Y, "y", W = /*geom*/
      e[4].y - /*handleSize*/
      e[3] / 2), f(
        Y,
        "height",
        /*handleSize*/
        e[3]
      ), f(
        Y,
        "width",
        /*handleSize*/
        e[3]
      ), f(Z, "class", "a9s-corner-handle a9s-corner-handle-topright"), f(Z, "x", ge = /*geom*/
      e[4].x + /*geom*/
      e[4].w - /*handleSize*/
      e[3] / 2), f(Z, "y", Ce = /*geom*/
      e[4].y - /*handleSize*/
      e[3] / 2), f(
        Z,
        "height",
        /*handleSize*/
        e[3]
      ), f(
        Z,
        "width",
        /*handleSize*/
        e[3]
      ), f(ne, "class", "a9s-corner-handle a9s-corner-handle-bottomright"), f(ne, "x", Ue = /*geom*/
      e[4].x + /*geom*/
      e[4].w - /*handleSize*/
      e[3] / 2), f(ne, "y", He = /*geom*/
      e[4].y + /*geom*/
      e[4].h - /*handleSize*/
      e[3] / 2), f(
        ne,
        "height",
        /*handleSize*/
        e[3]
      ), f(
        ne,
        "width",
        /*handleSize*/
        e[3]
      ), f(oe, "class", "a9s-corner-handle a9s-corner-handle-bottomleft"), f(oe, "x", Fe = /*geom*/
      e[4].x - /*handleSize*/
      e[3] / 2), f(oe, "y", Ge = /*geom*/
      e[4].y + /*geom*/
      e[4].h - /*handleSize*/
      e[3] / 2), f(
        oe,
        "height",
        /*handleSize*/
        e[3]
      ), f(
        oe,
        "width",
        /*handleSize*/
        e[3]
      );
    },
    m(N, P) {
      k(N, t, P), k(N, a, P), k(N, l, P), k(N, d, P), k(N, g, P), k(N, p, P), k(N, _, P), k(N, X, P), k(N, b, P), k(N, I, P), k(N, C, P), k(N, ke, P), k(N, Y, P), k(N, me, P), k(N, Z, P), k(N, Ke, P), k(N, ne, P), k(N, We, P), k(N, oe, P), Ze || (mt = [
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
    p(N, P) {
      e = N, P & /*computedStyle*/
      2 && n !== (n = /*computedStyle*/
      e[1] ? "display:none;" : void 0) && f(t, "style", n), P & /*geom*/
      16 && o !== (o = /*geom*/
      e[4].x) && f(t, "x", o), P & /*geom*/
      16 && i !== (i = /*geom*/
      e[4].y) && f(t, "y", i), P & /*geom*/
      16 && r !== (r = /*geom*/
      e[4].w) && f(t, "width", r), P & /*geom*/
      16 && s !== (s = /*geom*/
      e[4].h) && f(t, "height", s), P & /*computedStyle*/
      2 && f(
        l,
        "style",
        /*computedStyle*/
        e[1]
      ), P & /*geom*/
      16 && u !== (u = /*geom*/
      e[4].x) && f(l, "x", u), P & /*geom*/
      16 && h !== (h = /*geom*/
      e[4].y) && f(l, "y", h), P & /*geom*/
      16 && c !== (c = /*geom*/
      e[4].w) && f(l, "width", c), P & /*geom*/
      16 && m !== (m = /*geom*/
      e[4].h) && f(l, "height", m), P & /*geom*/
      16 && S !== (S = /*geom*/
      e[4].x) && f(g, "x", S), P & /*geom*/
      16 && A !== (A = /*geom*/
      e[4].y) && f(g, "y", A), P & /*geom*/
      16 && w !== (w = /*geom*/
      e[4].w) && f(g, "width", w), P & /*geom*/
      16 && M !== (M = /*geom*/
      e[4].x + /*geom*/
      e[4].w) && f(_, "x", M), P & /*geom*/
      16 && L !== (L = /*geom*/
      e[4].y) && f(_, "y", L), P & /*geom*/
      16 && D !== (D = /*geom*/
      e[4].h) && f(_, "height", D), P & /*geom*/
      16 && y !== (y = /*geom*/
      e[4].x) && f(b, "x", y), P & /*geom*/
      16 && E !== (E = /*geom*/
      e[4].y + /*geom*/
      e[4].h) && f(b, "y", E), P & /*geom*/
      16 && v !== (v = /*geom*/
      e[4].w) && f(b, "width", v), P & /*geom*/
      16 && U !== (U = /*geom*/
      e[4].x) && f(C, "x", U), P & /*geom*/
      16 && R !== (R = /*geom*/
      e[4].y) && f(C, "y", R), P & /*geom*/
      16 && be !== (be = /*geom*/
      e[4].h) && f(C, "height", be), P & /*geom, handleSize*/
      24 && ee !== (ee = /*geom*/
      e[4].x - /*handleSize*/
      e[3] / 2) && f(Y, "x", ee), P & /*geom, handleSize*/
      24 && W !== (W = /*geom*/
      e[4].y - /*handleSize*/
      e[3] / 2) && f(Y, "y", W), P & /*handleSize*/
      8 && f(
        Y,
        "height",
        /*handleSize*/
        e[3]
      ), P & /*handleSize*/
      8 && f(
        Y,
        "width",
        /*handleSize*/
        e[3]
      ), P & /*geom, handleSize*/
      24 && ge !== (ge = /*geom*/
      e[4].x + /*geom*/
      e[4].w - /*handleSize*/
      e[3] / 2) && f(Z, "x", ge), P & /*geom, handleSize*/
      24 && Ce !== (Ce = /*geom*/
      e[4].y - /*handleSize*/
      e[3] / 2) && f(Z, "y", Ce), P & /*handleSize*/
      8 && f(
        Z,
        "height",
        /*handleSize*/
        e[3]
      ), P & /*handleSize*/
      8 && f(
        Z,
        "width",
        /*handleSize*/
        e[3]
      ), P & /*geom, handleSize*/
      24 && Ue !== (Ue = /*geom*/
      e[4].x + /*geom*/
      e[4].w - /*handleSize*/
      e[3] / 2) && f(ne, "x", Ue), P & /*geom, handleSize*/
      24 && He !== (He = /*geom*/
      e[4].y + /*geom*/
      e[4].h - /*handleSize*/
      e[3] / 2) && f(ne, "y", He), P & /*handleSize*/
      8 && f(
        ne,
        "height",
        /*handleSize*/
        e[3]
      ), P & /*handleSize*/
      8 && f(
        ne,
        "width",
        /*handleSize*/
        e[3]
      ), P & /*geom, handleSize*/
      24 && Fe !== (Fe = /*geom*/
      e[4].x - /*handleSize*/
      e[3] / 2) && f(oe, "x", Fe), P & /*geom, handleSize*/
      24 && Ge !== (Ge = /*geom*/
      e[4].y + /*geom*/
      e[4].h - /*handleSize*/
      e[3] / 2) && f(oe, "y", Ge), P & /*handleSize*/
      8 && f(
        oe,
        "height",
        /*handleSize*/
        e[3]
      ), P & /*handleSize*/
      8 && f(
        oe,
        "width",
        /*handleSize*/
        e[3]
      );
    },
    d(N) {
      N && O(t), N && O(a), N && O(l), N && O(d), N && O(g), N && O(p), N && O(_), N && O(X), N && O(b), N && O(I), N && O(C), N && O(ke), N && O(Y), N && O(me), N && O(Z), N && O(Ke), N && O(ne), N && O(We), N && O(oe), Ze = !1, se(mt);
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
      re(t, o);
    }
  };
}
function Po(e, t, n) {
  let o, i, { shape: r } = t, { computedStyle: s = void 0 } = t, { transform: a } = t, { viewportScale: l = 1 } = t;
  const u = (d, g, S) => {
    const A = d.geometry.bounds;
    let [w, p] = [A.minX, A.minY], [_, M] = [A.maxX, A.maxY];
    const [L, D] = S;
    if (g === T.SHAPE)
      w += L, _ += L, p += D, M += D;
    else {
      switch (g) {
        case T.TOP:
        case T.TOP_LEFT:
        case T.TOP_RIGHT: {
          p += D;
          break;
        }
        case T.BOTTOM:
        case T.BOTTOM_LEFT:
        case T.BOTTOM_RIGHT: {
          M += D;
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
    te.call(this, e, d);
  }
  function c(d) {
    te.call(this, e, d);
  }
  function m(d) {
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
    h,
    c,
    m
  ];
}
class Io extends x {
  constructor(t) {
    super(), Q(this, t, Po, vo, K, {
      shape: 0,
      computedStyle: 1,
      transform: 2,
      viewportScale: 6
    });
  }
}
function Do(e) {
  let t, n, o, i, r, s, a, l, u, h, c, m, d, g, S, A, w, p, _, M, L, D, X, b, y, E, v, I, C;
  return {
    c() {
      t = B("ellipse"), s = J(), a = B("ellipse"), m = J(), d = B("rect"), A = J(), w = B("rect"), M = J(), L = B("rect"), b = J(), y = B("rect"), f(t, "class", "a9s-outer"), f(t, "cx", n = /*geom*/
      e[3].cx), f(t, "cy", o = /*geom*/
      e[3].cy), f(t, "rx", i = /*geom*/
      e[3].rx), f(t, "ry", r = /*geom*/
      e[3].ry), f(a, "class", "a9s-inner a9s-shape-handle"), f(a, "cx", l = /*geom*/
      e[3].cx), f(a, "cy", u = /*geom*/
      e[3].cy), f(a, "rx", h = /*geom*/
      e[3].rx), f(a, "ry", c = /*geom*/
      e[3].ry), f(d, "class", "a9s-corner-handle a9s-corner-top"), f(d, "x", g = /*geom*/
      e[3].cx - /*handleSize*/
      e[2] / 2), f(d, "y", S = /*geom*/
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
      ), f(w, "class", "a9s-corner-handle a9s-corner-handle-right"), f(w, "x", p = /*geom*/
      e[3].cx + /*geom*/
      e[3].rx - /*handleSize*/
      e[2] / 2), f(w, "y", _ = /*geom*/
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
      ), f(L, "class", "a9s-corner-handle a9s-corner-handle-bottom"), f(L, "x", D = /*geom*/
      e[3].cx - /*handleSize*/
      e[2] / 2), f(L, "y", X = /*geom*/
      e[3].cy + /*geom*/
      e[3].ry - /*handleSize*/
      e[2] / 2), f(
        L,
        "height",
        /*handleSize*/
        e[2]
      ), f(
        L,
        "width",
        /*handleSize*/
        e[2]
      ), f(y, "class", "a9s-corner-handle a9s-corner-handle-left"), f(y, "x", E = /*geom*/
      e[3].cx - /*geom*/
      e[3].rx - /*handleSize*/
      e[2] / 2), f(y, "y", v = /*geom*/
      e[3].cy - /*handleSize*/
      e[2] / 2), f(
        y,
        "height",
        /*handleSize*/
        e[2]
      ), f(
        y,
        "width",
        /*handleSize*/
        e[2]
      );
    },
    m(U, R) {
      k(U, t, R), k(U, s, R), k(U, a, R), k(U, m, R), k(U, d, R), k(U, A, R), k(U, w, R), k(U, M, R), k(U, L, R), k(U, b, R), k(U, y, R), I || (C = [
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
      ], I = !0);
    },
    p(U, R) {
      e = U, R & /*geom*/
      8 && n !== (n = /*geom*/
      e[3].cx) && f(t, "cx", n), R & /*geom*/
      8 && o !== (o = /*geom*/
      e[3].cy) && f(t, "cy", o), R & /*geom*/
      8 && i !== (i = /*geom*/
      e[3].rx) && f(t, "rx", i), R & /*geom*/
      8 && r !== (r = /*geom*/
      e[3].ry) && f(t, "ry", r), R & /*geom*/
      8 && l !== (l = /*geom*/
      e[3].cx) && f(a, "cx", l), R & /*geom*/
      8 && u !== (u = /*geom*/
      e[3].cy) && f(a, "cy", u), R & /*geom*/
      8 && h !== (h = /*geom*/
      e[3].rx) && f(a, "rx", h), R & /*geom*/
      8 && c !== (c = /*geom*/
      e[3].ry) && f(a, "ry", c), R & /*geom, handleSize*/
      12 && g !== (g = /*geom*/
      e[3].cx - /*handleSize*/
      e[2] / 2) && f(d, "x", g), R & /*geom, handleSize*/
      12 && S !== (S = /*geom*/
      e[3].cy - /*handleSize*/
      e[2] / 2 - /*geom*/
      e[3].ry) && f(d, "y", S), R & /*handleSize*/
      4 && f(
        d,
        "height",
        /*handleSize*/
        e[2]
      ), R & /*handleSize*/
      4 && f(
        d,
        "width",
        /*handleSize*/
        e[2]
      ), R & /*geom, handleSize*/
      12 && p !== (p = /*geom*/
      e[3].cx + /*geom*/
      e[3].rx - /*handleSize*/
      e[2] / 2) && f(w, "x", p), R & /*geom, handleSize*/
      12 && _ !== (_ = /*geom*/
      e[3].cy - /*handleSize*/
      e[2] / 2) && f(w, "y", _), R & /*handleSize*/
      4 && f(
        w,
        "height",
        /*handleSize*/
        e[2]
      ), R & /*handleSize*/
      4 && f(
        w,
        "width",
        /*handleSize*/
        e[2]
      ), R & /*geom, handleSize*/
      12 && D !== (D = /*geom*/
      e[3].cx - /*handleSize*/
      e[2] / 2) && f(L, "x", D), R & /*geom, handleSize*/
      12 && X !== (X = /*geom*/
      e[3].cy + /*geom*/
      e[3].ry - /*handleSize*/
      e[2] / 2) && f(L, "y", X), R & /*handleSize*/
      4 && f(
        L,
        "height",
        /*handleSize*/
        e[2]
      ), R & /*handleSize*/
      4 && f(
        L,
        "width",
        /*handleSize*/
        e[2]
      ), R & /*geom, handleSize*/
      12 && E !== (E = /*geom*/
      e[3].cx - /*geom*/
      e[3].rx - /*handleSize*/
      e[2] / 2) && f(y, "x", E), R & /*geom, handleSize*/
      12 && v !== (v = /*geom*/
      e[3].cy - /*handleSize*/
      e[2] / 2) && f(y, "y", v), R & /*handleSize*/
      4 && f(
        y,
        "height",
        /*handleSize*/
        e[2]
      ), R & /*handleSize*/
      4 && f(
        y,
        "width",
        /*handleSize*/
        e[2]
      );
    },
    d(U) {
      U && O(t), U && O(s), U && O(a), U && O(m), U && O(d), U && O(A), U && O(w), U && O(M), U && O(L), U && O(b), U && O(y), I = !1, se(C);
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
      re(t, o);
    }
  };
}
function Yo(e, t, n) {
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
    const D = Math.min(A, p), X = Math.min(w, _), b = Math.abs(p - A), y = Math.abs(_ - w), E = (A + p) / 2, v = (w + _) / 2, I = b / 2, C = y / 2;
    return {
      ...m,
      geometry: {
        ...m.geometry,
        cx: E,
        cy: v,
        rx: I,
        ry: C,
        bounds: {
          minX: D,
          minY: X,
          maxX: D + b,
          maxY: X + y
        }
      }
    };
  };
  function u(m) {
    te.call(this, e, m);
  }
  function h(m) {
    te.call(this, e, m);
  }
  function c(m) {
    te.call(this, e, m);
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
    c
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
    const { fill: i, fillOpacity: r } = o;
    let s = "", a;
    return i && (s += `fill:${i};stroke:${i};`), n && (a = n.fillOpacity), s += `fill-opacity:${a || r || "0.25"};`, s;
  }
};
function Ro(e) {
  let t, n, o;
  return {
    c() {
      t = B("path"), f(t, "class", "a9s-shape-handle"), f(
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
      k(i, t, r), n || (o = j(t, "pointerdown", function() {
        V(
          /*grab*/
          e[14](T.SHAPE)
        ) && e[14](T.SHAPE).apply(this, arguments);
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
      re(t, o);
    }
  };
}
function Co(e, t, n) {
  let o, i, r, { shape: s } = t, { annotation: a } = t, { transform: l } = t, { viewportScale: u = 1 } = t, { style: h = void 0 } = t, c = { fillOpacity: 1 };
  const m = (A, w, p) => {
    let _;
    w === T.SHAPE && (_ = A.geometry.points.map(([L, D, X]) => [L + p[0], D + p[1], X]));
    const M = _e(_.map((L) => [L[0], L[1]]));
    return { ...A, geometry: { points: _, bounds: M } };
  };
  function d(A) {
    te.call(this, e, A);
  }
  function g(A) {
    te.call(this, e, A);
  }
  function S(A) {
    te.call(this, e, A);
  }
  return e.$$set = (A) => {
    "shape" in A && n(0, s = A.shape), "annotation" in A && n(5, a = A.annotation), "transform" in A && n(1, l = A.transform), "viewportScale" in A && n(6, u = A.viewportScale), "style" in A && n(7, h = A.style);
  }, e.$$.update = () => {
    e.$$.dirty & /*shape*/
    1 && n(8, o = s.geometry), e.$$.dirty & /*viewportScale*/
    64, e.$$.dirty & /*annotation, style*/
    160 && n(3, i = we(a, h, c)), e.$$.dirty & /*geom*/
    256 && n(2, r = Xe(o.points, ut, !0));
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
  let t, n, o, i, r, s, a, l, u, h, c, m, d, g, S, A, w, p, _, M, L, D, X, b;
  return {
    c() {
      t = B("line"), a = J(), l = B("line"), d = J(), g = B("circle"), p = J(), _ = B("circle"), f(t, "class", "a9s-outer"), f(t, "style", n = /*computedStyle*/
      e[1] ? "display:none;" : void 0), f(t, "x1", o = /*geom*/
      e[4].x1), f(t, "y1", i = /*geom*/
      e[4].y1), f(t, "x2", r = /*geom*/
      e[4].x2), f(t, "y2", s = /*geom*/
      e[4].y2), f(l, "class", "a9s-inner a9s-shape-handle"), f(
        l,
        "style",
        /*computedStyle*/
        e[1]
      ), f(l, "x1", u = /*geom*/
      e[4].x1), f(l, "y1", h = /*geom*/
      e[4].y1), f(l, "x2", c = /*geom*/
      e[4].x2), f(l, "y2", m = /*geom*/
      e[4].y2), f(g, "class", "a9s-corner-handle a9s-shape-handle"), f(g, "cx", S = /*geom*/
      e[4].x1 - /*handleSize*/
      e[3] / 2), f(g, "cy", A = /*geom*/
      e[4].y1 - /*handleSize*/
      e[3] / 2), f(g, "r", w = /*handleSize*/
      e[3] / 2), f(_, "class", "a9s-corner-handle a9s-shape-handle"), f(_, "cx", M = /*geom*/
      e[4].x2 - /*handleSize*/
      e[3] / 2), f(_, "cy", L = /*geom*/
      e[4].y2 - /*handleSize*/
      e[3] / 2), f(_, "r", D = /*handleSize*/
      e[3] / 2);
    },
    m(y, E) {
      k(y, t, E), k(y, a, E), k(y, l, E), k(y, d, E), k(y, g, E), k(y, p, E), k(y, _, E), X || (b = [
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
      e[1] ? "display:none;" : void 0) && f(t, "style", n), E & /*geom*/
      16 && o !== (o = /*geom*/
      e[4].x1) && f(t, "x1", o), E & /*geom*/
      16 && i !== (i = /*geom*/
      e[4].y1) && f(t, "y1", i), E & /*geom*/
      16 && r !== (r = /*geom*/
      e[4].x2) && f(t, "x2", r), E & /*geom*/
      16 && s !== (s = /*geom*/
      e[4].y2) && f(t, "y2", s), E & /*computedStyle*/
      2 && f(
        l,
        "style",
        /*computedStyle*/
        e[1]
      ), E & /*geom*/
      16 && u !== (u = /*geom*/
      e[4].x1) && f(l, "x1", u), E & /*geom*/
      16 && h !== (h = /*geom*/
      e[4].y1) && f(l, "y1", h), E & /*geom*/
      16 && c !== (c = /*geom*/
      e[4].x2) && f(l, "x2", c), E & /*geom*/
      16 && m !== (m = /*geom*/
      e[4].y2) && f(l, "y2", m), E & /*geom, handleSize*/
      24 && S !== (S = /*geom*/
      e[4].x1 - /*handleSize*/
      e[3] / 2) && f(g, "cx", S), E & /*geom, handleSize*/
      24 && A !== (A = /*geom*/
      e[4].y1 - /*handleSize*/
      e[3] / 2) && f(g, "cy", A), E & /*handleSize*/
      8 && w !== (w = /*handleSize*/
      e[3] / 2) && f(g, "r", w), E & /*geom, handleSize*/
      24 && M !== (M = /*geom*/
      e[4].x2 - /*handleSize*/
      e[3] / 2) && f(_, "cx", M), E & /*geom, handleSize*/
      24 && L !== (L = /*geom*/
      e[4].y2 - /*handleSize*/
      e[3] / 2) && f(_, "cy", L), E & /*handleSize*/
      8 && D !== (D = /*handleSize*/
      e[3] / 2) && f(_, "r", D);
    },
    d(y) {
      y && O(t), y && O(a), y && O(l), y && O(d), y && O(g), y && O(p), y && O(_), X = !1, se(b);
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
      re(t, o);
    }
  };
}
function Go(e, t, n) {
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
    te.call(this, e, d);
  }
  function c(d) {
    te.call(this, e, d);
  }
  function m(d) {
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
    h,
    c,
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
const rn = /* @__PURE__ */ new Map([
  [F.RECTANGLE, Io],
  [F.POLYGON, Oo],
  [F.ELLIPSE, Xo],
  [F.FREEHAND, Uo],
  [F.LINE, Vo]
]), Lt = (e) => rn.get(e.type), zo = (e, t) => rn.set(e, t), T = (e) => `HANDLE-${e}`;
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
const jo = (e) => ({}), Ot = (e) => ({ grab: (
  /*onGrab*/
  e[0]
) });
function qo(e) {
  let t, n, o, i;
  const r = (
    /*#slots*/
    e[7].default
  ), s = cn(
    r,
    e,
    /*$$scope*/
    e[6],
    Ot
  );
  return {
    c() {
      t = B("g"), s && s.c(), f(t, "class", "a9s-annotation selected");
    },
    m(a, l) {
      k(a, t, l), s && s.m(t, null), n = !0, o || (i = [
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
      64) && dn(
        s,
        r,
        a,
        /*$$scope*/
        a[6],
        n ? un(
          r,
          /*$$scope*/
          a[6],
          l,
          jo
        ) : hn(
          /*$$scope*/
          a[6]
        ),
        Ot
      );
    },
    i(a) {
      n || (H(s, a), n = !0);
    },
    o(a) {
      G(s, a), n = !1;
    },
    d(a) {
      a && O(t), s && s.d(a), o = !1, se(i);
    }
  };
}
function Ko(e, t, n) {
  let { $$slots: o = {}, $$scope: i } = t;
  const r = de();
  let { shape: s } = t, { editor: a } = t, { transform: l } = t, u = null, h, c = null;
  const m = (S) => (A) => {
    u = S, h = l.elementToImage(A.offsetX, A.offsetY), c = s, A.target.setPointerCapture(A.pointerId), r("grab");
  }, d = (S) => {
    if (u) {
      const [A, w] = l.elementToImage(S.offsetX, S.offsetY), p = [A - h[0], w - h[1]];
      n(3, s = a(c, u, p)), r("change", s);
    }
  }, g = (S) => {
    S.target.releasePointerCapture(S.pointerId), u = null, c = s, r("release");
  };
  return e.$$set = (S) => {
    "shape" in S && n(3, s = S.shape), "editor" in S && n(4, a = S.editor), "transform" in S && n(5, l = S.transform), "$$scope" in S && n(6, i = S.$$scope);
  }, [m, d, g, s, a, l, i, o];
}
class Ne extends x {
  constructor(t) {
    super(), Q(this, t, Ko, qo, K, { shape: 3, editor: 4, transform: 5 });
  }
}
function Wo(e, t, n) {
  let o;
  const i = de();
  let { annotation: r } = t, { editor: s } = t, { style: a = void 0 } = t, { target: l } = t, { transform: u } = t, { viewportScale: h } = t, c;
  return he(() => (n(6, c = new s({
    target: l,
    props: {
      shape: r.target.selector,
      computedStyle: o,
      transform: u,
      viewportScale: h
    }
  })), c.$on("change", (m) => {
    c.$$set({ shape: m.detail }), i("change", m.detail);
  }), c.$on("grab", (m) => i("grab", m.detail)), c.$on("release", (m) => i("release", m.detail)), () => {
    c.$destroy();
  })), e.$$set = (m) => {
    "annotation" in m && n(0, r = m.annotation), "editor" in m && n(1, s = m.editor), "style" in m && n(2, a = m.style), "target" in m && n(3, l = m.target), "transform" in m && n(4, u = m.transform), "viewportScale" in m && n(5, h = m.viewportScale);
  }, e.$$.update = () => {
    e.$$.dirty & /*annotation, style*/
    5 && (o = we(r, a)), e.$$.dirty & /*annotation, editorComponent*/
    65 && r && (c == null || c.$set({ shape: r.target.selector })), e.$$.dirty & /*editorComponent, transform*/
    80 && c && c.$set({ transform: u }), e.$$.dirty & /*editorComponent, viewportScale*/
    96 && c && c.$set({ viewportScale: h });
  }, [r, s, a, l, u, h, c];
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
  let { drawingMode: i } = t, { target: r } = t, { tool: s } = t, { transform: a } = t, { viewportScale: l } = t, u;
  return he(() => {
    const h = r.closest("svg"), c = [], m = (d, g, S) => {
      h.addEventListener(d, g, S), c.push(() => h.removeEventListener(d, g, S));
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
      c.forEach((d) => d()), u.$destroy();
    };
  }), e.$$set = (h) => {
    "drawingMode" in h && n(0, i = h.drawingMode), "target" in h && n(1, r = h.target), "tool" in h && n(2, s = h.tool), "transform" in h && n(3, a = h.transform), "viewportScale" in h && n(4, l = h.viewportScale);
  }, e.$$.update = () => {
    e.$$.dirty & /*toolComponent, transform*/
    40 && u && u.$set({ transform: a }), e.$$.dirty & /*toolComponent, viewportScale*/
    48 && u && u.$set({ viewportScale: l });
  }, [i, r, s, a, l, u];
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
      t = B("rect"), n = B("rect"), f(t, "class", "a9s-outer"), f(
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
      k(o, t, i), k(o, n, i);
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
      t = B("g"), n && n.c(), f(t, "class", "a9s-annotation a9s-rubberband");
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
  let { addEventListener: i } = t, { drawingMode: r } = t, { transform: s } = t, a, l, u, h, c, m, d;
  const g = (p) => {
    a = performance.now(), r === "drag" && (n(0, l = s.elementToImage(p.offsetX, p.offsetY)), u = l, n(1, h = l[0]), n(2, c = l[1]), n(3, m = 1), n(4, d = 1));
  }, S = (p) => {
    l && (u = s.elementToImage(p.offsetX, p.offsetY), n(1, h = Math.min(u[0], l[0])), n(2, c = Math.min(u[1], l[1])), n(3, m = Math.abs(u[0] - l[0])), n(4, d = Math.abs(u[1] - l[1])));
  }, A = (p) => {
    const _ = performance.now() - a;
    if (r === "click") {
      if (_ > 300)
        return;
      p.stopPropagation(), l ? w() : (n(0, l = s.elementToImage(p.offsetX, p.offsetY)), u = l, n(1, h = l[0]), n(2, c = l[1]), n(3, m = 1), n(4, d = 1));
    } else
      l && (_ > 300 || m * d > 100 ? (p.stopPropagation(), w()) : (n(0, l = null), u = null));
  }, w = () => {
    if (m * d > 15) {
      const p = {
        type: F.RECTANGLE,
        geometry: {
          bounds: {
            minX: h,
            minY: c,
            maxX: h + m,
            maxY: c + d
          },
          x: h,
          y: c,
          w: m,
          h: d
        }
      };
      o("create", p);
    }
    n(0, l = null), u = null;
  };
  return he(() => {
    i("pointerdown", g), i("pointermove", S), i("pointerup", A, !0);
  }), e.$$set = (p) => {
    "addEventListener" in p && n(5, i = p.addEventListener), "drawingMode" in p && n(6, r = p.drawingMode), "transform" in p && n(7, s = p.transform);
  }, [l, h, c, m, d, i, r, s];
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
const ni = (e, t) => {
  const { naturalWidth: n, naturalHeight: o } = e;
  if (!n && !o) {
    const { width: i, height: r } = e;
    t.setAttribute("viewBox", `0 0 ${i} ${r}`), e.addEventListener("load", (s) => {
      const a = s.target;
      t.setAttribute("viewBox", `0 0 ${a.naturalWidth} ${a.naturalHeight}`);
    });
  } else
    t.setAttribute("viewBox", `0 0 ${n} ${o}`);
}, oi = (e, t) => {
  ni(e, t);
  const { subscribe: n, set: o } = ti(1);
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
}, lr = "ontouchstart" in window || navigator.maxTouchPoints > 0;
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
      t = B("polygon"), o = B("polygon"), s && s.c(), r = ue(), f(t, "class", "a9s-outer"), f(t, "points", n = /*coords*/
      e[15]), f(o, "class", "a9s-inner"), f(o, "points", i = /*coords*/
      e[15]);
    },
    m(a, l) {
      k(a, t, l), k(a, o, l), s && s.m(a, l), k(a, r, l);
    },
    p(a, l) {
      l & /*isClosable, points, cursor*/
      7 && n !== (n = /*coords*/
      a[15]) && f(t, "points", n), l & /*isClosable, points, cursor*/
      7 && i !== (i = /*coords*/
      a[15]) && f(o, "points", i), /*isClosable*/
      a[2] ? s ? s.p(a, l) : (s = Pt(a), s.c(), s.m(r.parentNode, r)) : s && (s.d(1), s = null);
    },
    d(a) {
      a && O(t), a && O(o), s && s.d(a), a && O(r);
    }
  };
}
function Pt(e) {
  let t, n, o;
  return {
    c() {
      t = B("rect"), f(t, "class", "a9s-corner-handle"), f(t, "x", n = /*points*/
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
      k(i, t, r);
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
      i && O(t);
    }
  };
}
function ii(e) {
  let t, n = (
    /*cursor*/
    e[1] && vt(et(e))
  );
  return {
    c() {
      t = B("g"), n && n.c(), f(t, "class", "a9s-annotation a9s-rubberband");
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
      o && O(t), n && n.d();
    }
  };
}
const ri = 20;
function si(e, t, n) {
  let o;
  const i = de();
  let { addEventListener: r } = t, { drawingMode: s } = t, { transform: a } = t, { viewportScale: l = 1 } = t, u, h = [], c = null, m = !1;
  const d = (p) => {
    const { timeStamp: _, offsetX: M, offsetY: L } = p;
    if (u = { timeStamp: _, offsetX: M, offsetY: L }, s === "drag" && h.length === 0) {
      const D = a.elementToImage(p.offsetX, p.offsetY);
      h.push(D), n(1, c = D);
    }
  }, g = (p) => {
    if (h.length > 0 && (n(1, c = a.elementToImage(p.offsetX, p.offsetY)), h.length > 2)) {
      const _ = $e(c, h[0]) * l;
      n(2, m = _ < ri);
    }
  }, S = (p) => {
    if (s === "click") {
      const _ = p.timeStamp - u.timeStamp, M = $e([u.offsetX, u.offsetY], [p.offsetX, p.offsetY]);
      if (_ > 300 || M > 15)
        return;
      if (m)
        w();
      else if (h.length === 0) {
        const L = a.elementToImage(p.offsetX, p.offsetY);
        h.push(L), n(1, c = L);
      } else
        h.push(c);
    } else {
      if (h.length === 1 && $e(h[0], c) <= 4) {
        n(0, h = []), n(1, c = null);
        return;
      }
      p.stopImmediatePropagation(), m ? w() : h.push(c);
    }
  }, A = () => {
    const p = [...h, c], _ = {
      type: F.POLYGON,
      geometry: { bounds: _e(p), points: p }
    };
    st(_) > 4 && (n(0, h = []), n(1, c = null), i("create", _));
  }, w = () => {
    const p = {
      type: F.POLYGON,
      geometry: {
        bounds: _e(h),
        points: [...h]
      }
    };
    n(0, h = []), n(1, c = null), i("create", p);
  };
  return he(() => {
    r("pointerdown", d, !0), r("pointermove", g), r("pointerup", S, !0), r("dblclick", A, !0);
  }), e.$$set = (p) => {
    "addEventListener" in p && n(4, r = p.addEventListener), "drawingMode" in p && n(5, s = p.drawingMode), "transform" in p && n(6, a = p.transform), "viewportScale" in p && n(7, l = p.viewportScale);
  }, e.$$.update = () => {
    e.$$.dirty & /*viewportScale*/
    128 && n(3, o = 10 / l);
  }, [
    h,
    c,
    m,
    o,
    r,
    s,
    a,
    l
  ];
}
class li extends x {
  constructor(t) {
    super(), Q(this, t, si, ii, K, {
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
      t = B("ellipse"), s = B("ellipse"), f(t, "class", "a9s-outer"), f(t, "cx", n = /*x*/
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
      e[4] / 2), f(s, "ry", h = /*h*/
      e[5] / 2);
    },
    m(c, m) {
      k(c, t, m), k(c, s, m);
    },
    p(c, m) {
      m & /*x, w*/
      20 && n !== (n = /*x*/
      c[2] + /*w*/
      c[4] / 2) && f(t, "cx", n), m & /*y, h*/
      40 && o !== (o = /*y*/
      c[3] + /*h*/
      c[5] / 2) && f(t, "cy", o), m & /*w*/
      16 && i !== (i = /*w*/
      c[4] / 2) && f(t, "rx", i), m & /*h*/
      32 && r !== (r = /*h*/
      c[5] / 2) && f(t, "ry", r), m & /*x, w*/
      20 && a !== (a = /*x*/
      c[2] + /*w*/
      c[4] / 2) && f(s, "cx", a), m & /*y, h*/
      40 && l !== (l = /*y*/
      c[3] + /*h*/
      c[5] / 2) && f(s, "cy", l), m & /*w*/
      16 && u !== (u = /*w*/
      c[4] / 2) && f(s, "rx", u), m & /*h*/
      32 && h !== (h = /*h*/
      c[5] / 2) && f(s, "ry", h);
    },
    d(c) {
      c && O(t), c && O(s);
    }
  };
}
function ai(e) {
  let t, n = (
    /*origin*/
    e[1] && It(e)
  );
  return {
    c() {
      t = B("g"), n && n.c(), f(t, "class", "a9s-annotation a9s-rubberband");
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
      o && O(t), n && n.d(), e[9](null);
    }
  };
}
function fi(e, t, n) {
  const o = de();
  let { addEventListener: i } = t, { drawingMode: r } = t, { transform: s } = t, a, l, u, h, c, m, d, g = !1, S = !1, A, w;
  const p = (y) => {
    A = performance.now(), r === "drag" && (n(1, l = s.elementToImage(y.offsetX, y.offsetY)), u = l, n(2, h = l[0]), n(3, c = l[1]), n(4, m = 1), n(5, d = 1));
  }, _ = (y) => {
    const E = y || w;
    if (l)
      if (u = s.elementToImage(E.offsetX, E.offsetY), S) {
        const v = 2 * Math.abs(u[0] - l[0]), I = 2 * Math.abs(u[1] - l[1]);
        n(4, m = g ? Math.max(v, I) : v), n(5, d = g ? m : I), n(2, h = Math.min(u[0], l[0] - m / 2)), n(3, c = Math.min(u[1], l[1] - d / 2));
      } else {
        const v = Math.abs(u[0] - l[0]), I = Math.abs(u[1] - l[1]);
        n(4, m = g ? Math.max(v, I) : v), n(5, d = g ? m : I), n(2, h = Math.min(u[0], l[0])), n(3, c = Math.min(u[1], l[1]));
      }
    y && (w = y);
  }, M = (y) => {
    r === "click" && y.stopImmediatePropagation();
    const E = performance.now() - A;
    if (r === "click") {
      if (E > 300)
        return;
      y.stopPropagation(), l ? L() : (n(1, l = s.elementToImage(y.offsetX, y.offsetY)), u = l, n(2, h = l[0]), n(3, c = l[1]), n(4, m = 1), n(5, d = 1));
    } else
      l && (E > 300 || m * d > 100 ? (y.stopPropagation(), L()) : (n(1, l = null), u = null, w = void 0));
  }, L = () => {
    if (m * d > 15) {
      const y = {
        type: F.ELLIPSE,
        geometry: {
          bounds: {
            minX: h,
            minY: c,
            maxX: h + m,
            maxY: c + d
          },
          cx: h + m / 2,
          cy: c + d / 2,
          rx: m / 2,
          ry: d / 2
        }
      };
      o("create", y);
    }
    n(1, l = null), u = null, w = void 0;
  }, D = (y) => {
    y.key === "Shift" && (g = !0, _()), y.key === "Control" && (S = !0, _());
  }, X = (y) => {
    y.key === "Shift" && (g = !1, _()), y.key === "Control" && (S = !1, _());
  };
  he(() => (document.addEventListener("keyup", X), document.addEventListener("keydown", D), i("pointerdown", p), i("pointermove", _), i("pointerup", M), () => {
    document.removeEventListener("keyup", X), document.removeEventListener("keydown", D);
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
    c,
    m,
    d,
    i,
    r,
    s,
    b
  ];
}
class ci extends x {
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
      t = B("path"), f(
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
      k(n, t, o);
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
      n && O(t);
    }
  };
}
function ui(e) {
  let t, n = (
    /*isDrawing*/
    e[1] && Dt(e)
  );
  return {
    c() {
      t = B("g"), n && n.c(), f(t, "class", "a9s-annotation a9s-rubberband");
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
  let { addEventListener: r } = t, { drawingMode: s } = t, { annotation: a } = t, { transform: l } = t, { viewportScale: u = 1 } = t, { style: h = void 0 } = t, c = { fillOpacity: 1 }, m = [], d = "", g = !1;
  const S = (_) => {
    if (s === "drag" && m.length === 0) {
      n(1, g = !0);
      const M = l.elementToImage(_.offsetX, _.offsetY);
      m.push([...M, _.pressure]), n(0, d = Xe(m));
    }
  }, A = (_) => {
    if (g) {
      const M = l.elementToImage(_.offsetX, _.offsetY);
      m.push([...M, _.pressure]), n(0, d = Xe(m, ut, !0));
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
  return he(() => {
    r("pointerdown", S, !0), r("pointermove", A), r("pointerup", w, !0);
  }), e.$$set = (_) => {
    "addEventListener" in _ && n(3, r = _.addEventListener), "drawingMode" in _ && n(4, s = _.drawingMode), "annotation" in _ && n(5, a = _.annotation), "transform" in _ && n(6, l = _.transform), "viewportScale" in _ && n(7, u = _.viewportScale), "style" in _ && n(8, h = _.style);
  }, e.$$.update = () => {
    e.$$.dirty & /*viewportScale*/
    128, e.$$.dirty & /*annotation, style*/
    288 && n(2, o = we(a, h, c));
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
class hi extends x {
  constructor(t) {
    super(), Q(this, t, di, ui, K, {
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
      t = B("line"), n = B("line"), f(t, "class", "a9s-outer"), f(
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
      k(o, t, i), k(o, n, i);
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
      t = B("g"), n && n.c(), f(t, "class", "a9s-annotation a9s-rubberband");
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
  let { addEventListener: i } = t, { drawingMode: r } = t, { transform: s } = t, a, l, u, h, c, m, d;
  const g = (p) => {
    a = performance.now(), r === "drag" && (n(0, l = s.elementToImage(p.offsetX, p.offsetY)), u = l, n(1, h = l[0]), n(2, c = l[1]), n(3, m = l[0] + 1), n(4, d = l[1] + 1));
  }, S = (p) => {
    l && (u = s.elementToImage(p.offsetX, p.offsetY), n(3, m = u[0]), n(4, d = u[1]));
  }, A = (p) => {
    const _ = performance.now() - a;
    if (r === "click") {
      if (_ > 300)
        return;
      p.stopPropagation(), l ? w() : (n(0, l = s.elementToImage(p.offsetX, p.offsetY)), u = l, n(1, h = l[0]), n(2, c = l[1]), n(3, m = l[0] + 1), n(4, d = l[1] + 1));
    } else
      l && (_ > 300 || Math.sqrt(Math.pow(m - h, 2) + Math.pow(d - c, 2)) > 8 ? (p.stopPropagation(), w()) : (n(0, l = null), u = null));
  }, w = () => {
    if (Math.sqrt(Math.pow(m - h, 2) + Math.pow(d - c, 2)) > 8) {
      const p = {
        type: F.LINE,
        geometry: {
          bounds: {
            minX: Math.min(h, m),
            minY: Math.min(c, d),
            maxX: Math.max(h, m),
            maxY: Math.max(c, d)
          },
          x1: h,
          y1: c,
          x2: m,
          y2: d
        }
      };
      o("create", p);
    }
    n(0, l = null), u = null;
  };
  return he(() => {
    i("pointerdown", g), i("pointermove", S), i("pointerup", A, !0);
  }), e.$$set = (p) => {
    "addEventListener" in p && n(5, i = p.addEventListener), "drawingMode" in p && n(6, r = p.drawingMode), "transform" in p && n(7, s = p.transform);
  }, [l, h, c, m, d, i, r, s];
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
  ["ellipse", { tool: ci }],
  ["freehand", { tool: hi }],
  ["line", { tool: pi }]
]), at = () => [...ht.keys()], sn = (e) => ht.get(e), yi = (e, t, n) => ht.set(e, { tool: t, opts: n });
function _i(e) {
  let t, n, o, i, r;
  return {
    c() {
      t = B("g"), n = B("ellipse"), i = B("ellipse"), f(n, "class", "a9s-outer"), f(n, "style", o = /*computedStyle*/
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
      k(s, t, a), ae(t, n), ae(t, i);
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
    i: z,
    o: z,
    d(s) {
      s && O(t);
    }
  };
}
function wi(e, t, n) {
  let o, { annotation: i } = t, { geom: r } = t, { style: s = void 0 } = t;
  const { cx: a, cy: l, rx: u, ry: h } = r;
  return e.$$set = (c) => {
    "annotation" in c && n(0, i = c.annotation), "geom" in c && n(6, r = c.geom), "style" in c && n(7, s = c.style);
  }, e.$$.update = () => {
    e.$$.dirty & /*annotation, style*/
    129 && n(1, o = we(i, s));
  }, [i, o, a, l, u, h, r, s];
}
class bi extends x {
  constructor(t) {
    super(), Q(this, t, wi, _i, K, { annotation: 0, geom: 6, style: 7 });
  }
}
function Ei(e) {
  let t, n, o, i, r;
  return {
    c() {
      t = B("g"), n = B("polygon"), i = B("polygon"), f(n, "class", "a9s-outer"), f(n, "style", o = /*computedStyle*/
      e[1] ? "display:none;" : void 0), f(
        n,
        "points",
        /*points*/
        e[2].map(Ai).join(" ")
      ), f(i, "class", "a9s-inner"), f(
        i,
        "style",
        /*computedStyle*/
        e[1]
      ), f(
        i,
        "points",
        /*points*/
        e[2].map(Si).join(" ")
      ), f(t, "data-id", r = /*annotation*/
      e[0].id);
    },
    m(s, a) {
      k(s, t, a), ae(t, n), ae(t, i);
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
    i: z,
    o: z,
    d(s) {
      s && O(t);
    }
  };
}
const Ai = (e) => e.join(","), Si = (e) => e.join(",");
function Mi(e, t, n) {
  let o, { annotation: i } = t, { geom: r } = t, { style: s = void 0 } = t;
  const { points: a } = r;
  return e.$$set = (l) => {
    "annotation" in l && n(0, i = l.annotation), "geom" in l && n(3, r = l.geom), "style" in l && n(4, s = l.style);
  }, e.$$.update = () => {
    e.$$.dirty & /*annotation, style*/
    17 && n(1, o = we(i, s));
  }, [i, o, a, r, s];
}
class Ti extends x {
  constructor(t) {
    super(), Q(this, t, Mi, Ei, K, { annotation: 0, geom: 3, style: 4 });
  }
}
function Li(e) {
  let t, n, o, i, r;
  return {
    c() {
      t = B("g"), n = B("rect"), i = B("rect"), f(n, "class", "a9s-outer"), f(n, "style", o = /*computedStyle*/
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
      k(s, t, a), ae(t, n), ae(t, i);
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
    i: z,
    o: z,
    d(s) {
      s && O(t);
    }
  };
}
function Oi(e, t, n) {
  let o, i, r, s, a, { annotation: l } = t, { geom: u } = t, { style: h = void 0 } = t;
  return e.$$set = (c) => {
    "annotation" in c && n(0, l = c.annotation), "geom" in c && n(6, u = c.geom), "style" in c && n(7, h = c.style);
  }, e.$$.update = () => {
    e.$$.dirty & /*annotation, style*/
    129 && n(5, o = we(l, h)), e.$$.dirty & /*geom*/
    64 && n(4, { x: i, y: r, w: s, h: a } = u, i, (n(3, r), n(6, u)), (n(2, s), n(6, u)), (n(1, a), n(6, u)));
  }, [l, a, s, r, i, o, u, h];
}
class ki extends x {
  constructor(t) {
    super(), Q(this, t, Oi, Li, K, { annotation: 0, geom: 6, style: 7 });
  }
}
function vi(e) {
  let t, n, o;
  return {
    c() {
      t = B("g"), n = B("path"), f(
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
      k(i, t, r), ae(t, n);
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
    i: z,
    o: z,
    d(i) {
      i && O(t);
    }
  };
}
function Pi(e, t, n) {
  let o, i, { annotation: r } = t, { geom: s } = t, { style: a = void 0 } = t, l = { fillOpacity: 1 };
  const { points: u } = s;
  return e.$$set = (h) => {
    "annotation" in h && n(0, r = h.annotation), "geom" in h && n(3, s = h.geom), "style" in h && n(4, a = h.style);
  }, e.$$.update = () => {
    e.$$.dirty & /*annotation, style*/
    17 && n(2, o = we(r, a, l));
  }, n(1, i = Xe(u, ut, !0)), [r, i, o, s, a];
}
class Ii extends x {
  constructor(t) {
    super(), Q(this, t, Pi, vi, K, { annotation: 0, geom: 3, style: 4 });
  }
}
const ar = {
  elementToImage: (e, t) => [e, t]
}, Di = (e) => ({
  elementToImage: (t, n) => {
    const o = e.getBoundingClientRect(), i = e.createSVGPoint();
    i.x = t + o.x, i.y = n + o.y;
    const { x: r, y: s } = i.matrixTransform(e.getScreenCTM().inverse());
    return [r, s];
  }
}), Bi = 250, Yi = (e, t) => {
  const n = de();
  let o;
  return { onPointerDown: () => o = performance.now(), onPointerUp: (s) => {
    if (performance.now() - o < Bi) {
      const { x: l, y: u } = Xi(s, e), h = t.getAt(l, u);
      h ? n("click", { originalEvent: s, annotation: h }) : n("click", { originalEvent: s });
    }
  } };
}, Xi = (e, t) => {
  const n = t.createSVGPoint(), o = t.getBoundingClientRect(), i = e.clientX - o.x, r = e.clientY - o.y, { left: s, top: a } = t.getBoundingClientRect();
  return n.x = i + s, n.y = r + a, n.matrixTransform(t.getScreenCTM().inverse());
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
      i.c(), n = ue();
    },
    m(r, s) {
      i.m(r, s), k(r, n, s), o = !0;
    },
    p(r, s) {
      s[0] & /*$store*/
      8192 && K(t, t = /*annotation*/
      r[32].id) ? (fe(), G(i, 1, 1, z), ce(), i = Nt(r), i.c(), H(i, 1), i.m(n.parentNode, n)) : i.p(r, s);
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
function Ri(e) {
  let t, n;
  return t = new Ii({
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
      n || (H(t.$$.fragment, o), n = !0);
    },
    o(o) {
      G(t.$$.fragment, o), n = !1;
    },
    d(o) {
      re(t, o);
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
      re(t, o);
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
      re(t, o);
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
      re(t, o);
    }
  };
}
function Nt(e) {
  let t, n, o, i;
  const r = [Ui, Ci, Ni, Ri], s = [];
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
      n && n.c(), o = ue();
    },
    m(l, u) {
      ~t && s[t].m(l, u), k(l, o, u), i = !0;
    },
    p(l, u) {
      let h = t;
      t = a(l), t === h ? ~t && s[t].p(l, u) : (n && (fe(), G(s[h], 1, 1, () => {
        s[h] = null;
      }), ce()), ~t ? (n = s[t], n ? n.p(l, u) : (n = s[t] = r[t](l), n.c()), H(n, 1), n.m(o.parentNode, o)) : n = null);
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
      i && i.m(r, s), k(r, n, s), o = !0;
    },
    p(r, s) {
      s[0] & /*isEditable, $store*/
      8320 && (t = !/*isEditable*/
      r[7](
        /*annotation*/
        r[32]
      )), t ? i ? (i.p(tt(r), s), s[0] & /*isEditable, $store*/
      8320 && H(i, 1)) : (i = Rt(tt(r)), i.c(), H(i, 1), i.m(n.parentNode, n)) : i && (fe(), G(i, 1, 1, () => {
        i = null;
      }), ce());
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
function Ut(e) {
  let t, n, o, i;
  const r = [Fi, Hi], s = [];
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
      ~t && s[t].m(l, u), k(l, o, u), i = !0;
    },
    p(l, u) {
      let h = t;
      t = a(l), t === h ? ~t && s[t].p(l, u) : (n && (fe(), G(s[h], 1, 1, () => {
        s[h] = null;
      }), ce()), ~t ? (n = s[t], n ? n.p(l, u) : (n = s[t] = r[t](l), n.c()), H(n, 1), n.m(o.parentNode, o)) : n = null);
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
function Hi(e) {
  let t = (
    /*toolName*/
    e[2]
  ), n, o, i = Ht(e);
  return {
    c() {
      i.c(), n = ue();
    },
    m(r, s) {
      i.m(r, s), k(r, n, s), o = !0;
    },
    p(r, s) {
      s[0] & /*toolName*/
      4 && K(t, t = /*toolName*/
      r[2]) ? (fe(), G(i, 1, 1, z), ce(), i = Ht(r), i.c(), H(i, 1), i.m(n.parentNode, n)) : i.p(r, s);
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
function Fi(e) {
  let t, n, o = (
    /*editableAnnotations*/
    e[6]
  ), i = [];
  for (let s = 0; s < o.length; s += 1)
    i[s] = Gt(Yt(e, o, s));
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
      k(s, t, a), n = !0;
    },
    p(s, a) {
      if (a[0] & /*editableAnnotations, drawingEl, style, transform, $scale, onChangeSelected*/
      279634) {
        o = /*editableAnnotations*/
        s[6];
        let l;
        for (l = 0; l < o.length; l += 1) {
          const u = Yt(s, o, l);
          i[l] ? (i[l].p(u, a), H(i[l], 1)) : (i[l] = Gt(u), i[l].c(), H(i[l], 1), i[l].m(t.parentNode, t));
        }
        for (fe(), l = o.length; l < i.length; l += 1)
          r(l);
        ce();
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
      ft(i, s), s && O(t);
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
      re(t, o);
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
      n || (H(t.$$.fragment, o), n = !0);
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
  ), n, o, i = Ft(e);
  return {
    c() {
      i.c(), n = ue();
    },
    m(r, s) {
      i.m(r, s), k(r, n, s), o = !0;
    },
    p(r, s) {
      s[0] & /*editableAnnotations*/
      64 && K(t, t = /*editable*/
      r[29].id) ? (fe(), G(i, 1, 1, z), ce(), i = Ft(r), i.c(), H(i, 1), i.m(n.parentNode, n)) : i.p(r, s);
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
function Gi(e) {
  let t, n, o, i, r, s, a = (
    /*$store*/
    e[13]
  ), l = [];
  for (let c = 0; c < a.length; c += 1)
    l[c] = Ct(Xt(e, a, c));
  const u = (c) => G(l[c], 1, 1, () => {
    l[c] = null;
  });
  let h = (
    /*drawingEl*/
    e[4] && Ut(e)
  );
  return {
    c() {
      t = B("svg"), n = B("g");
      for (let c = 0; c < l.length; c += 1)
        l[c].c();
      o = B("g"), h && h.c(), f(o, "class", "drawing"), f(t, "class", "a9s-annotationlayer"), yt(
        t,
        "drawing",
        /*tool*/
        e[12]
      );
    },
    m(c, m) {
      k(c, t, m), ae(t, n);
      for (let d = 0; d < l.length; d += 1)
        l[d] && l[d].m(n, null);
      ae(t, o), h && h.m(o, null), e[25](o), e[26](t), i = !0, r || (s = [
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
    p(c, m) {
      if (e = c, m[0] & /*$store, style, isEditable*/
      8322) {
        a = /*$store*/
        e[13];
        let d;
        for (d = 0; d < a.length; d += 1) {
          const g = Xt(e, a, d);
          l[d] ? (l[d].p(g, m), H(l[d], 1)) : (l[d] = Ct(g), l[d].c(), H(l[d], 1), l[d].m(n, null));
        }
        for (fe(), d = a.length; d < l.length; d += 1)
          u(d);
        ce();
      }
      /*drawingEl*/
      e[4] ? h ? (h.p(e, m), m[0] & /*drawingEl*/
      16 && H(h, 1)) : (h = Ut(e), h.c(), H(h, 1), h.m(o, null)) : h && (fe(), G(h, 1, 1, () => {
        h = null;
      }), ce()), (!i || m[0] & /*tool*/
      4096) && yt(
        t,
        "drawing",
        /*tool*/
        e[12]
      );
    },
    i(c) {
      if (!i) {
        for (let m = 0; m < a.length; m += 1)
          H(l[m]);
        H(h), i = !0;
      }
    },
    o(c) {
      l = l.filter(Boolean);
      for (let m = 0; m < l.length; m += 1)
        G(l[m]);
      G(h), i = !1;
    },
    d(c) {
      c && O(t), ft(l, c), h && h.d(), e[25](null), e[26](null), r = !1, se(s);
    }
  };
}
function Vi(e, t, n) {
  let o, i, r, s, a, l, u, h, c, m, d = z, g = () => (d(), d = Kt(b, (Y) => n(14, m = Y)), b);
  e.$$.on_destroy.push(() => d());
  let { drawingEnabled: S } = t, { image: A } = t, { preferredDrawingMode: w } = t, { state: p } = t, { style: _ = void 0 } = t, { toolName: M = at().length > 0 ? at()[0] : void 0 } = t, { user: L } = t, D, X, b;
  he(() => g(n(5, b = oi(A, X))));
  const { selection: y, store: E } = p;
  pt(e, y, (Y) => n(24, h = Y)), pt(e, E, (Y) => n(13, c = Y));
  let v = null, I = null;
  const C = (Y) => {
    E.unobserve(v);
    const ee = Y.filter(({ editable: W }) => W).map(({ id: W }) => W);
    ee.length > 0 ? (n(6, I = ee.map((W) => E.getAnnotation(W))), v = (W) => {
      const { updated: me } = W.changes;
      n(6, I = me.map((Z) => Z.newValue));
    }, E.observe(v, { annotations: ee })) : n(6, I = null);
  }, U = (Y) => {
    const ee = en(), W = {
      id: ee,
      bodies: [],
      target: {
        annotation: ee,
        selector: Y.detail,
        creator: L,
        created: /* @__PURE__ */ new Date()
      }
    };
    E.addAnnotation(W), y.setSelected(W.id);
  }, R = (Y) => (ee) => {
    var ge;
    const { target: W } = Y, me = 10 * 60 * 1e3, Z = ((ge = W.creator) == null ? void 0 : ge.id) !== L.id || !W.created || (/* @__PURE__ */ new Date()).getTime() - W.created.getTime() > me;
    E.updateTarget({
      ...W,
      selector: ee.detail,
      created: Z ? W.created : /* @__PURE__ */ new Date(),
      updated: Z ? /* @__PURE__ */ new Date() : null,
      updatedBy: Z ? L : null
    });
  };
  function be(Y) {
    Ye[Y ? "unshift" : "push"](() => {
      D = Y, n(4, D);
    });
  }
  function ke(Y) {
    Ye[Y ? "unshift" : "push"](() => {
      X = Y, n(3, X);
    });
  }
  return e.$$set = (Y) => {
    "drawingEnabled" in Y && n(0, S = Y.drawingEnabled), "image" in Y && n(19, A = Y.image), "preferredDrawingMode" in Y && n(20, w = Y.preferredDrawingMode), "state" in Y && n(21, p = Y.state), "style" in Y && n(1, _ = Y.style), "toolName" in Y && n(2, M = Y.toolName), "user" in Y && n(22, L = Y.user);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*toolName*/
    4 && n(12, { tool: o, opts: i } = sn(M), o, (n(23, i), n(2, M))), e.$$.dirty[0] & /*opts, preferredDrawingMode*/
    9437184 && n(11, r = (i == null ? void 0 : i.drawingMode) || w), e.$$.dirty[0] & /*svgEl*/
    8 && n(10, s = Di(X)), e.$$.dirty[0] & /*svgEl*/
    8 && n(9, { onPointerDown: a, onPointerUp: l } = Yi(X, E), a, (n(8, l), n(3, X))), e.$$.dirty[0] & /*$selection*/
    16777216 && n(7, u = (Y) => h.selected.find((ee) => ee.id === Y.id && ee.editable)), e.$$.dirty[0] & /*$selection*/
    16777216 && C(h.selected);
  }, [
    S,
    _,
    M,
    X,
    D,
    b,
    I,
    u,
    l,
    a,
    s,
    r,
    o,
    c,
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
      var r = o - n + 1, s = t - n + 1, a = Math.log(r), l = 0.5 * Math.exp(2 * a / 3), u = 0.5 * Math.sqrt(a * l * (r - l) / r) * (s - r / 2 < 0 ? -1 : 1), h = Math.max(n, Math.floor(t - s * l / r + u)), c = Math.min(o, Math.floor(t + (r - s) * l / r + u));
      ln(e, t, h, c, i);
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
    const i = this.toBBox, r = [];
    for (; n; ) {
      for (let s = 0; s < n.children.length; s++) {
        const a = n.children[s], l = n.leaf ? i(a) : a;
        je(t, l) && (n.leaf ? o.push(a) : ot(t, l) ? this._all(a, o) : r.push(a));
      }
      n = r.pop();
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
        const r = n.children[i], s = n.leaf ? this.toBBox(r) : r;
        if (je(t, s)) {
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
        const h = Wi(t, o.children, n);
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
      return a = Le(t.slice(n, o + 1)), Me(a, this.toBBox), a;
    i || (i = Math.ceil(Math.log(r) / Math.log(s)), s = Math.ceil(r / Math.pow(s, i - 1))), a = Le([]), a.leaf = !1, a.height = i;
    const l = Math.ceil(r / s), u = l * Math.ceil(Math.sqrt(s));
    Vt(t, n, o, u, this.compareMinX);
    for (let h = n; h <= o; h += u) {
      const c = Math.min(h + u - 1, o);
      Vt(t, h, c, l, this.compareMinY);
      for (let m = h; m <= c; m += l) {
        const d = Math.min(m + l - 1, c);
        a.children.push(this._build(t, m, d, i - 1));
      }
    }
    return Me(a, this.toBBox), a;
  }
  _chooseSubtree(t, n, o, i) {
    for (; i.push(n), !(n.leaf || i.length - 1 === o); ) {
      let r = 1 / 0, s = 1 / 0, a;
      for (let l = 0; l < n.children.length; l++) {
        const u = n.children[l], h = nt(u), c = Qi(t, u) - h;
        c < s ? (s = c, r = h < r ? h : r, a = u) : c === s && h < r && (r = h, a = u);
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
      const l = Pe(t, 0, a, this.toBBox), u = Pe(t, a, o, this.toBBox), h = xi(l, u), c = nt(l) + nt(u);
      h < r ? (r = h, i = a, s = c < s ? c : s) : h === r && c < s && (s = c, i = a);
    }
    return i || o - n;
  }
  // sorts node children by the best axis for split
  _chooseSplitAxis(t, n, o) {
    const i = t.leaf ? this.compareMinX : Zi, r = t.leaf ? this.compareMinY : Ji, s = this._allDistMargin(t, n, o, i), a = this._allDistMargin(t, n, o, r);
    s < a && t.children.sort(i);
  }
  // total margin of all possible split distributions where each node is at least m full
  _allDistMargin(t, n, o, i) {
    t.children.sort(i);
    const r = this.toBBox, s = Pe(t, 0, n, r), a = Pe(t, o - n, o, r);
    let l = ze(s) + ze(a);
    for (let u = n; u < o - n; u++) {
      const h = t.children[u];
      Ie(s, t.leaf ? r(h) : h), l += ze(s);
    }
    for (let u = o - n - 1; u >= n; u--) {
      const h = t.children[u];
      Ie(a, t.leaf ? r(h) : h), l += ze(a);
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
function Wi(e, t, n) {
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
  const n = Math.max(e.minX, t.minX), o = Math.max(e.minY, t.minY), i = Math.min(e.maxX, t.maxX), r = Math.min(e.maxY, t.maxY);
  return Math.max(0, i - n) * Math.max(0, r - o);
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
  const r = [t, n];
  for (; r.length; ) {
    if (n = r.pop(), t = r.pop(), n - t <= o)
      continue;
    const s = t + Math.ceil((n - t) / o / 2) * o;
    ji(e, s, t, n, i), r.push(t, s, s, n);
  }
}
const $i = () => {
  const e = new Ki(), t = /* @__PURE__ */ new Map(), n = () => [...t.values()], o = () => {
    e.clear(), t.clear();
  }, i = (c) => {
    const { minX: m, minY: d, maxX: g, maxY: S } = c.selector.geometry.bounds, A = { minX: m, minY: d, maxX: g, maxY: S, target: c };
    e.insert(A), t.set(c.annotation, A);
  }, r = (c) => {
    const m = t.get(c.annotation);
    e.remove(m), t.delete(c.annotation);
  };
  return {
    all: n,
    clear: o,
    getAt: (c, m) => {
      const g = e.search({
        minX: c,
        minY: m,
        maxX: c,
        maxY: m
      }).map((S) => S.target).filter((S) => S.selector.type === F.RECTANGLE || En(S.selector, c, m));
      if (g.length > 0)
        return g.sort((S, A) => st(S.selector) - st(A.selector)), g[0];
    },
    getIntersecting: (c, m, d, g) => e.search({
      minX: c,
      minY: m,
      maxX: c + d,
      maxY: m + g
    }).map((S) => S.target),
    insert: i,
    remove: r,
    set: (c, m = !0) => {
      m && o();
      const d = c.map((g) => {
        const { minX: S, minY: A, maxX: w, maxY: p } = g.selector.geometry.bounds;
        return { minX: S, minY: A, maxX: w, maxY: p, target: g };
      });
      d.forEach((g) => t.set(g.target.annotation, g)), e.load(d);
    },
    size: () => e.all().length,
    update: (c, m) => {
      r(c), i(m);
    }
  };
}, er = (e) => {
  const t = io(), n = $i(), o = Wn(t, e.pointerSelectAction), i = Kn(t), r = fo();
  return t.observe(({ changes: l }) => {
    n.set(l.created.map((u) => u.target), !1), l.deleted.forEach((u) => n.remove(u.target)), l.updated.forEach(({ oldValue: u, newValue: h }) => n.update(u.target, h.target));
  }), {
    store: {
      ...t,
      getAt: (l, u) => {
        const h = n.getAt(l, u);
        return h ? t.getAnnotation(h.annotation) : void 0;
      },
      getIntersecting: (l, u, h, c) => n.getIntersecting(l, u, h, c).map((m) => t.getAnnotation(m.annotation))
    },
    selection: o,
    hover: i,
    viewport: r
  };
}, tr = (e) => {
  const t = er(e);
  return {
    ...t,
    store: ro(t.store)
  };
}, nr = (e) => {
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
}, or = (e) => {
  const t = nr(e), n = t > 0.6 ? "dark" : "light";
  return console.log(`[Annotorious] Image brightness: ${t.toFixed(1)}. Setting ${n} theme.`), n;
}, zt = (e, t, n) => t.setAttribute("data-theme", n === "auto" ? or(e) : n), ir = (e, t) => ({
  ...e,
  drawingEnabled: e.drawingEnabled === void 0 ? t.drawingEnabled : e.drawingEnabled,
  drawingMode: e.drawingMode || t.drawingMode,
  pointerSelectAction: e.pointerSelectAction || t.pointerSelectAction,
  theme: e.theme || t.theme
}), jt = navigator.userAgent.indexOf("Mac OS X") !== -1, rr = (e, t) => {
  const n = t || document, o = (s) => {
    s.key === "Z" && s.ctrlKey ? e.undo() : s.key === "Y" && s.ctrlKey && e.redo();
  }, i = (s) => {
    s.key === "z" && s.metaKey && (s.shiftKey ? e.redo() : e.undo());
  }, r = () => {
    jt ? n.removeEventListener("keydown", i) : n.removeEventListener("keydown", o);
  };
  return jt ? n.addEventListener("keydown", i) : n.addEventListener("keydown", o), {
    destroy: r
  };
};
const fr = (e, t = {}) => {
  if (!e)
    throw "Missing argument: image";
  const n = typeof e == "string" ? document.getElementById(e) : e, o = ir(t, {
    drawingEnabled: !0,
    drawingMode: "drag",
    pointerSelectAction: tn.EDIT,
    theme: "light"
  }), i = tr(o), { selection: r, store: s } = i, a = ao(s), l = co(
    i,
    a,
    o.adapter,
    o.autoSave
  ), u = document.createElement("DIV");
  u.style.position = "relative", u.style.display = "inline-block", n.style.display = "block", n.parentNode.insertBefore(u, n), u.appendChild(n);
  const h = rr(a);
  let c = _o();
  zt(n, u, o.theme);
  const m = new zi({
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
  m.$on("click", (b) => {
    const { originalEvent: y, annotation: E } = b.detail;
    E ? r.clickSelect(E.id, y) : r.isEmpty() || r.clear();
  });
  const d = ho(i, a, o.adapter), g = () => {
    m.$destroy(), u.parentNode.insertBefore(n, u), u.parentNode.removeChild(u), h.destroy(), a.destroy();
  }, S = () => c, A = (b, y, E) => yi(b, y, E), w = (b, y) => zo(b, y), p = (b) => {
    if (!sn(b))
      throw `No drawing tool named ${b}`;
    m.$set({ toolName: b });
  }, _ = (b) => m.$set({ drawingEnabled: b }), M = (b) => {
    console.warn("Filter not implemented yet");
  }, L = (b) => m.$set({ style: b }), D = (b) => zt(n, u, b), X = (b) => {
    c = b, m.$set({ user: b });
  };
  return {
    ...d,
    destroy: g,
    getUser: S,
    listDrawingTools: at,
    on: l.on,
    off: l.off,
    registerDrawingTool: A,
    registerShapeEditor: w,
    setDrawingEnabled: _,
    setDrawingTool: p,
    setFilter: M,
    setStyle: L,
    setTheme: D,
    setUser: X,
    state: i
  };
};
export {
  Ne as Editor,
  Zo as EditorMount,
  Xo as EllipseEditor,
  Uo as FreehandEditor,
  T as Handle,
  ar as IdentityTransform,
  Vo as LineEditor,
  Ln as LineUtil,
  Oo as PolygonEditor,
  Io as RectangleEditor,
  Mn as RectangleUtil,
  ei as RubberbandRectangle,
  zi as SVGAnnotationLayer,
  F as ShapeType,
  Qo as ToolMount,
  sr as W3CImageFormat,
  Yi as addEventListeners,
  _e as boundsFromPoints,
  st as computeArea,
  fr as createImageAnnotator,
  er as createImageAnnotatorState,
  Di as createSVGTransform,
  tr as createSvelteImageAnnotatorState,
  or as detectTheme,
  $e as distance,
  oi as enableResponsive,
  ir as fillDefaults,
  Lt as getEditor,
  sn as getTool,
  rr as initKeyboardCommands,
  En as intersects,
  lr as isTouch,
  at as listDrawingTools,
  On as parseFragmentSelector,
  Hn as parseSVGSelector,
  Ao as parseW3CImageAnnotation,
  zo as registerEditor,
  Re as registerShapeUtil,
  yi as registerTool,
  nr as sampleBrightness,
  kn as serializeFragmentSelector,
  Fn as serializeSVGSelector,
  So as serializeW3CImageAnnotation,
  zt as setTheme
};
//# sourceMappingURL=annotorious.es.js.map
