function j() {
}
function En(e, t) {
  for (const n in t)
    e[n] = t[n];
  return e;
}
function sn(e) {
  return e();
}
function St() {
  return /* @__PURE__ */ Object.create(null);
}
function de(e) {
  e.forEach(sn);
}
function W(e) {
  return typeof e == "function";
}
function x(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function An(e) {
  return Object.keys(e).length === 0;
}
function ln(e, ...t) {
  if (e == null)
    return j;
  const n = e.subscribe(...t);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function Tt(e, t, n) {
  e.$$.on_destroy.push(ln(t, n));
}
function Sn(e, t, n, o) {
  if (e) {
    const i = an(e, t, n, o);
    return e[0](i);
  }
}
function an(e, t, n, o) {
  return e[1] && o ? En(n.ctx.slice(), e[1](o(t))) : n.ctx;
}
function Tn(e, t, n, o) {
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
function Mn(e, t, n, o, i, r) {
  if (i) {
    const s = an(t, n, o, r);
    e.p(s, i);
  }
}
function Ln(e) {
  if (e.ctx.length > 32) {
    const t = [], n = e.ctx.length / 32;
    for (let o = 0; o < n; o++)
      t[o] = -1;
    return t;
  }
  return -1;
}
function _e(e, t) {
  e.appendChild(t);
}
function I(e, t, n) {
  e.insertBefore(t, n || null);
}
function O(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function _t(e, t) {
  for (let n = 0; n < e.length; n += 1)
    e[n] && e[n].d(t);
}
function C(e) {
  return document.createElementNS("http://www.w3.org/2000/svg", e);
}
function cn(e) {
  return document.createTextNode(e);
}
function te() {
  return cn(" ");
}
function he() {
  return cn("");
}
function Z(e, t, n, o) {
  return e.addEventListener(t, n, o), () => e.removeEventListener(t, n, o);
}
function c(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function vn(e) {
  return Array.from(e.childNodes);
}
function Mt(e, t, n) {
  e.classList[n ? "add" : "remove"](t);
}
function kn(e, t, { bubbles: n = !1, cancelable: o = !1 } = {}) {
  const i = document.createEvent("CustomEvent");
  return i.initCustomEvent(e, n, o, t), i;
}
let qe;
function je(e) {
  qe = e;
}
function fn() {
  if (!qe)
    throw new Error("Function called outside component initialization");
  return qe;
}
function Le(e) {
  fn().$$.on_mount.push(e);
}
function Ee() {
  const e = fn();
  return (t, n, { cancelable: o = !1 } = {}) => {
    const i = e.$$.callbacks[t];
    if (i) {
      const r = kn(t, n, { cancelable: o });
      return i.slice().forEach((s) => {
        s.call(e, r);
      }), !r.defaultPrevented;
    }
    return !0;
  };
}
function re(e, t) {
  const n = e.$$.callbacks[t.type];
  n && n.slice().forEach((o) => o.call(this, t));
}
const Xe = [], Ke = [];
let Ne = [];
const Lt = [], On = /* @__PURE__ */ Promise.resolve();
let dt = !1;
function In() {
  dt || (dt = !0, On.then(un));
}
function ht(e) {
  Ne.push(e);
}
const ot = /* @__PURE__ */ new Set();
let Pe = 0;
function un() {
  if (Pe !== 0)
    return;
  const e = qe;
  do {
    try {
      for (; Pe < Xe.length; ) {
        const t = Xe[Pe];
        Pe++, je(t), Pn(t.$$);
      }
    } catch (t) {
      throw Xe.length = 0, Pe = 0, t;
    }
    for (je(null), Xe.length = 0, Pe = 0; Ke.length; )
      Ke.pop()();
    for (let t = 0; t < Ne.length; t += 1) {
      const n = Ne[t];
      ot.has(n) || (ot.add(n), n());
    }
    Ne.length = 0;
  } while (Xe.length);
  for (; Lt.length; )
    Lt.pop()();
  dt = !1, ot.clear(), je(e);
}
function Pn(e) {
  if (e.fragment !== null) {
    e.update(), de(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(ht);
  }
}
function Bn(e) {
  const t = [], n = [];
  Ne.forEach((o) => e.indexOf(o) === -1 ? t.push(o) : n.push(o)), n.forEach((o) => o()), Ne = t;
}
const et = /* @__PURE__ */ new Set();
let Se;
function ye() {
  Se = {
    r: 0,
    c: [],
    p: Se
    // parent group
  };
}
function we() {
  Se.r || de(Se.c), Se = Se.p;
}
function F(e, t) {
  e && e.i && (et.delete(e), e.i(t));
}
function z(e, t, n, o) {
  if (e && e.o) {
    if (et.has(e))
      return;
    et.add(e), Se.c.push(() => {
      et.delete(e), o && (n && e.d(1), o());
    }), e.o(t);
  } else
    o && o();
}
function me(e) {
  e && e.c();
}
function fe(e, t, n, o) {
  const { fragment: i, after_update: r } = e.$$;
  i && i.m(t, n), o || ht(() => {
    const s = e.$$.on_mount.map(sn).filter(W);
    e.$$.on_destroy ? e.$$.on_destroy.push(...s) : de(s), e.$$.on_mount = [];
  }), r.forEach(ht);
}
function ue(e, t) {
  const n = e.$$;
  n.fragment !== null && (Bn(n.after_update), de(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Dn(e, t) {
  e.$$.dirty[0] === -1 && (Xe.push(e), In(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function ne(e, t, n, o, i, r, s, a = [-1]) {
  const l = qe;
  je(e);
  const u = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: r,
    update: j,
    not_equal: i,
    bound: St(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (l ? l.$$.context : [])),
    // everything else
    callbacks: St(),
    dirty: a,
    skip_bound: !1,
    root: t.target || l.$$.root
  };
  s && s(u.root);
  let m = !1;
  if (u.ctx = n ? n(e, t.props || {}, (f, h, ...d) => {
    const g = d.length ? d[0] : h;
    return u.ctx && i(u.ctx[f], u.ctx[f] = g) && (!u.skip_bound && u.bound[f] && u.bound[f](g), m && Dn(e, f)), h;
  }) : [], u.update(), m = !0, de(u.before_update), u.fragment = o ? o(u.ctx) : !1, t.target) {
    if (t.hydrate) {
      const f = vn(t.target);
      u.fragment && u.fragment.l(f), f.forEach(O);
    } else
      u.fragment && u.fragment.c();
    t.intro && F(e.$$.fragment), fe(e, t.target, t.anchor, t.customElement), un();
  }
  je(l);
}
class oe {
  $destroy() {
    ue(this, 1), this.$destroy = j;
  }
  $on(t, n) {
    if (!W(n))
      return j;
    const o = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return o.push(n), () => {
      const i = o.indexOf(n);
      i !== -1 && o.splice(i, 1);
    };
  }
  $set(t) {
    this.$$set && !An(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
var q = /* @__PURE__ */ ((e) => (e.ELLIPSE = "ELLIPSE", e.POLYGON = "POLYGON", e.RECTANGLE = "RECTANGLE", e.FREEHAND = "FREEHAND", e))(q || {});
const yt = {}, wt = (e, t) => yt[e] = t, mt = (e) => yt[e.type].area(e), Yn = (e, t, n) => yt[e.type].intersects(e, t, n), Me = (e) => {
  let t = 1 / 0, n = 1 / 0, o = -1 / 0, i = -1 / 0;
  return e.forEach(([r, s]) => {
    t = Math.min(t, r), n = Math.min(n, s), o = Math.max(o, r), i = Math.max(i, s);
  }), { minX: t, minY: n, maxX: o, maxY: i };
}, Rn = {
  area: (e) => Math.PI * e.geometry.rx * e.geometry.ry,
  intersects: (e, t, n) => {
    const { cx: o, cy: i, rx: r, ry: s } = e.geometry, a = 0, l = Math.cos(a), u = Math.sin(a), m = t - o, f = n - i, h = l * m + u * f, d = u * m - l * f;
    return h * h / (r * r) + d * d / (s * s) <= 1;
  }
};
wt(q.ELLIPSE, Rn);
const Xn = {
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
wt(q.POLYGON, Xn);
const Cn = {
  area: (e) => e.geometry.w * e.geometry.h,
  intersects: (e, t, n) => t >= e.geometry.x && t <= e.geometry.x + e.geometry.w && n >= e.geometry.y && n <= e.geometry.y + e.geometry.h
};
wt(q.RECTANGLE, Cn);
const Nn = (e, t = !1) => {
  const n = typeof e == "string" ? e : e.value, o = /^(xywh)=(pixel|percent)?:?(.+?),(.+?),(.+?),(.+)*/g, i = [...n.matchAll(o)][0], [r, s, a, l, u, m, f] = i;
  if (s !== "xywh")
    throw new Error("Unsupported MediaFragment: " + n);
  if (a && a !== "pixel")
    throw new Error(`Unsupported MediaFragment unit: ${a}`);
  const [h, d, g, y] = [l, u, m, f].map(parseFloat);
  return {
    type: q.RECTANGLE,
    geometry: {
      x: h,
      y: d,
      w: g,
      h: y,
      bounds: {
        minX: h,
        minY: t ? d - y : d,
        maxX: h + g,
        maxY: t ? d : d + y
      }
    }
  };
}, Un = (e) => {
  const { x: t, y: n, w: o, h: i } = e;
  return {
    type: "FragmentSelector",
    conformsTo: "http://www.w3.org/TR/media-frags/",
    value: `xywh=pixel:${t},${n},${o},${i}`
  };
}, dn = "http://www.w3.org/2000/svg", vt = (e) => {
  const t = (o) => {
    Array.from(o.attributes).forEach((i) => {
      i.name.startsWith("on") && o.removeAttribute(i.name);
    });
  }, n = e.getElementsByTagName("script");
  return Array.from(n).reverse().forEach((o) => o.parentNode.removeChild(o)), Array.from(e.querySelectorAll("*")).forEach(t), e;
}, Vn = (e) => {
  const o = new XMLSerializer().serializeToString(e.documentElement).replace("<svg>", `<svg xmlns="${dn}">`);
  return new DOMParser().parseFromString(o, "image/svg+xml").documentElement;
};
function kt(e, t, n, o = (i) => i) {
  return e * o(0.5 - t * (0.5 - n));
}
function Gn(e) {
  return [-e[0], -e[1]];
}
function ce(e, t) {
  return [e[0] + t[0], e[1] + t[1]];
}
function ie(e, t) {
  return [e[0] - t[0], e[1] - t[1]];
}
function ae(e, t) {
  return [e[0] * t, e[1] * t];
}
function Hn(e, t) {
  return [e[0] / t, e[1] / t];
}
function Ue(e) {
  return [e[1], -e[0]];
}
function Ot(e, t) {
  return e[0] * t[0] + e[1] * t[1];
}
function Fn(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}
function zn(e) {
  return Math.hypot(e[0], e[1]);
}
function jn(e) {
  return e[0] * e[0] + e[1] * e[1];
}
function It(e, t) {
  return jn(ie(e, t));
}
function hn(e) {
  return Hn(e, zn(e));
}
function qn(e, t) {
  return Math.hypot(e[1] - t[1], e[0] - t[0]);
}
function Ve(e, t, n) {
  let o = Math.sin(n), i = Math.cos(n), r = e[0] - t[0], s = e[1] - t[1], a = r * i - s * o, l = r * o + s * i;
  return [a + t[0], l + t[1]];
}
function gt(e, t, n) {
  return ce(e, ae(ie(t, e), n));
}
function Pt(e, t, n) {
  return ce(e, ae(t, n));
}
var { min: Be, PI: Kn } = Math, Bt = 0.275, Ge = Kn + 1e-4;
function Wn(e, t = {}) {
  let { size: n = 16, smoothing: o = 0.5, thinning: i = 0.5, simulatePressure: r = !0, easing: s = (H) => H, start: a = {}, end: l = {}, last: u = !1 } = t, { cap: m = !0, easing: f = (H) => H * (2 - H) } = a, { cap: h = !0, easing: d = (H) => --H * H * H + 1 } = l;
  if (e.length === 0 || n <= 0)
    return [];
  let g = e[e.length - 1].runningLength, y = a.taper === !1 ? 0 : a.taper === !0 ? Math.max(n, g) : a.taper, S = l.taper === !1 ? 0 : l.taper === !0 ? Math.max(n, g) : l.taper, b = Math.pow(n * o, 2), p = [], A = [], T = e.slice(0, 10).reduce((H, k) => {
    let V = k.pressure;
    if (r) {
      let N = Be(1, k.distance / n), le = Be(1, 1 - N);
      V = Be(1, H + (le - H) * (N * Bt));
    }
    return (H + V) / 2;
  }, e[0].pressure), M = kt(n, i, e[e.length - 1].pressure, s), D, U = e[0].vector, _ = e[0].point, w = _, E = _, L = w, P = !1;
  for (let H = 0; H < e.length; H++) {
    let { pressure: k } = e[H], { point: V, vector: N, distance: le, runningLength: K } = e[H];
    if (H < e.length - 1 && g - K < 3)
      continue;
    if (i) {
      if (r) {
        let J = Be(1, le / n), be = Be(1, 1 - J);
        k = Be(1, T + (be - T) * (J * Bt));
      }
      M = kt(n, i, k, s);
    } else
      M = n / 2;
    D === void 0 && (D = M);
    let ge = K < y ? f(K / y) : 1, ve = g - K < S ? d((g - K) / S) : 1;
    M = Math.max(0.01, M * Math.min(ge, ve));
    let ke = (H < e.length - 1 ? e[H + 1] : e[H]).vector, $ = H < e.length - 1 ? Ot(N, ke) : 1, Oe = Ot(N, U) < 0 && !P, Ae = $ !== null && $ < 0;
    if (Oe || Ae) {
      let J = ae(Ue(U), M);
      for (let be = 1 / 13, pe = 0; pe <= 1; pe += be)
        E = Ve(ie(V, J), V, Ge * pe), p.push(E), L = Ve(ce(V, J), V, Ge * -pe), A.push(L);
      _ = E, w = L, Ae && (P = !0);
      continue;
    }
    if (P = !1, H === e.length - 1) {
      let J = ae(Ue(N), M);
      p.push(ie(V, J)), A.push(ce(V, J));
      continue;
    }
    let Ie = ae(Ue(gt(ke, N, $)), M);
    E = ie(V, Ie), (H <= 1 || It(_, E) > b) && (p.push(E), _ = E), L = ce(V, Ie), (H <= 1 || It(w, L) > b) && (A.push(L), w = L), T = k, U = N;
  }
  let Y = e[0].point.slice(0, 2), R = e.length > 1 ? e[e.length - 1].point.slice(0, 2) : ce(e[0].point, [1, 1]), X = [], se = [];
  if (e.length === 1) {
    if (!(y || S) || u) {
      let H = Pt(Y, hn(Ue(ie(Y, R))), -(D || M)), k = [];
      for (let V = 1 / 13, N = V; N <= 1; N += V)
        k.push(Ve(H, Y, Ge * 2 * N));
      return k;
    }
  } else {
    if (!(y || S && e.length === 1))
      if (m)
        for (let k = 1 / 13, V = k; V <= 1; V += k) {
          let N = Ve(A[0], Y, Ge * V);
          X.push(N);
        }
      else {
        let k = ie(p[0], A[0]), V = ae(k, 0.5), N = ae(k, 0.51);
        X.push(ie(Y, V), ie(Y, N), ce(Y, N), ce(Y, V));
      }
    let H = Ue(Gn(e[e.length - 1].vector));
    if (S || y && e.length === 1)
      se.push(R);
    else if (h) {
      let k = Pt(R, H, M);
      for (let V = 1 / 29, N = V; N < 1; N += V)
        se.push(Ve(k, R, Ge * 3 * N));
    } else
      se.push(ce(R, ae(H, M)), ce(R, ae(H, M * 0.99)), ie(R, ae(H, M * 0.99)), ie(R, ae(H, M)));
  }
  return p.concat(se, A.reverse(), X);
}
function Zn(e, t = {}) {
  var n;
  let { streamline: o = 0.5, size: i = 16, last: r = !1 } = t;
  if (e.length === 0)
    return [];
  let s = 0.15 + (1 - o) * 0.85, a = Array.isArray(e[0]) ? e : e.map(({ x: d, y: g, pressure: y = 0.5 }) => [d, g, y]);
  if (a.length === 2) {
    let d = a[1];
    a = a.slice(0, -1);
    for (let g = 1; g < 5; g++)
      a.push(gt(a[0], d, g / 4));
  }
  a.length === 1 && (a = [...a, [...ce(a[0], [1, 1]), ...a[0].slice(2)]]);
  let l = [{ point: [a[0][0], a[0][1]], pressure: a[0][2] >= 0 ? a[0][2] : 0.25, vector: [1, 1], distance: 0, runningLength: 0 }], u = !1, m = 0, f = l[0], h = a.length - 1;
  for (let d = 1; d < a.length; d++) {
    let g = r && d === h ? a[d].slice(0, 2) : gt(f.point, a[d], s);
    if (Fn(f.point, g))
      continue;
    let y = qn(g, f.point);
    if (m += y, d < h && !u) {
      if (m < i)
        continue;
      u = !0;
    }
    f = { point: g, pressure: a[d][2] >= 0 ? a[d][2] : 0.5, vector: hn(ie(f.point, g)), distance: y, runningLength: m }, l.push(f);
  }
  return l[0].vector = ((n = l[1]) == null ? void 0 : n.vector) || [0, 0], l;
}
function Jn(e, t = {}) {
  return Wn(Zn(e, t), t);
}
const We = {
  size: 6,
  thinning: 0.5,
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
function Qn(e) {
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
function Ze(e, t) {
  const n = Jn(e, t);
  return Qn(n);
}
const xn = (e) => {
  const n = new DOMParser().parseFromString(e, "image/svg+xml"), o = n.lookupPrefix(dn), i = n.lookupNamespaceURI(null);
  return o || i ? vt(n).firstChild : vt(Vn(n)).firstChild;
}, $n = (e) => {
  const [t, n, o] = e.match(/(<path d=["|'])([^("|')]*)/) || [];
  if (!o)
    return;
  const i = /([MQZT])([^MQZT]*)/g, s = Array.from(o.matchAll(i)).map((a) => (a[1], a[2].trim().split(/\s+/).map(parseFloat)));
  return {
    type: q.FREEHAND,
    geometry: {
      points: s,
      bounds: Me(s)
    }
  };
}, eo = (e) => {
  const [t, n, o] = e.match(/(<polygon points=["|'])([^("|')]*)/) || [];
  if (!o)
    return;
  const i = o.split(" ").map((r) => r.split(",").map(parseFloat));
  return {
    type: q.POLYGON,
    geometry: {
      points: i,
      bounds: Me(i)
    }
  };
}, to = (e) => {
  const t = xn(e), n = parseFloat(t.getAttribute("cx")), o = parseFloat(t.getAttribute("cy")), i = parseFloat(t.getAttribute("rx")), r = parseFloat(t.getAttribute("ry")), s = {
    minX: n - i,
    minY: o - r,
    maxX: n + i,
    maxY: o + r
  };
  return {
    type: q.ELLIPSE,
    geometry: {
      cx: n,
      cy: o,
      rx: i,
      ry: r,
      bounds: s
    }
  };
}, no = (e) => {
  const t = typeof e == "string" ? e : e.value;
  if (t.includes("<polygon points="))
    return eo(t);
  if (t.includes("<path d="))
    return $n(t);
  if (t.includes("<ellipse "))
    return to(t);
}, oo = (e) => {
  let t;
  if (e.type === q.POLYGON) {
    const n = e.geometry, { points: o } = n;
    t = `<svg><polygon points="${o.map((i) => i.join(",")).join(" ")}" /></svg>`;
  } else if (e.type === q.FREEHAND) {
    const n = e.geometry;
    t = `<svg><path d="${Ze(n.points, We)}"/></svg>`;
  } else if (e.type === q.ELLIPSE) {
    const n = e.geometry;
    t = `<svg><ellipse cx="${n.cx}" cy="${n.cy}" rx="${n.rx}" ry="${n.ry}" /></svg>`;
  }
  if (t)
    return { type: "SvgSelector", value: t };
  throw `Unsupported shape type: ${e.type}`;
};
let Qe;
const io = new Uint8Array(16);
function ro() {
  if (!Qe && (Qe = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Qe))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Qe(io);
}
const ee = [];
for (let e = 0; e < 256; ++e)
  ee.push((e + 256).toString(16).slice(1));
function so(e, t = 0) {
  return ee[e[t + 0]] + ee[e[t + 1]] + ee[e[t + 2]] + ee[e[t + 3]] + "-" + ee[e[t + 4]] + ee[e[t + 5]] + "-" + ee[e[t + 6]] + ee[e[t + 7]] + "-" + ee[e[t + 8]] + ee[e[t + 9]] + "-" + ee[e[t + 10]] + ee[e[t + 11]] + ee[e[t + 12]] + ee[e[t + 13]] + ee[e[t + 14]] + ee[e[t + 15]];
}
const lo = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Dt = {
  randomUUID: lo
};
function mn(e, t, n) {
  if (Dt.randomUUID && !t && !e)
    return Dt.randomUUID();
  e = e || {};
  const o = e.random || (e.rng || ro)();
  if (o[6] = o[6] & 15 | 64, o[8] = o[8] & 63 | 128, t) {
    n = n || 0;
    for (let i = 0; i < 16; ++i)
      t[n + i] = o[i];
    return t;
  }
  return so(o);
}
var Yt = Object.prototype.hasOwnProperty;
function Te(e, t) {
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
        for (; o-- && Te(e[o], t[o]); )
          ;
      return o === -1;
    }
    if (!n || typeof e == "object") {
      o = 0;
      for (n in e)
        if (Yt.call(e, n) && ++o && !Yt.call(t, n) || !(n in t) || !Te(e[n], t[n]))
          return !1;
      return Object.keys(t).length === o;
    }
  }
  return e !== e && t !== t;
}
function it() {
}
function ao(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
const De = [];
function bt(e, t = it) {
  let n;
  const o = /* @__PURE__ */ new Set();
  function i(a) {
    if (ao(e, a) && (e = a, n)) {
      const l = !De.length;
      for (const u of o)
        u[1](), De.push(u, e);
      if (l) {
        for (let u = 0; u < De.length; u += 2)
          De[u][0](De[u + 1]);
        De.length = 0;
      }
    }
  }
  function r(a) {
    i(a(e));
  }
  function s(a, l = it) {
    const u = [a, l];
    return o.add(u), o.size === 1 && (n = t(i) || it), a(e), () => {
      o.delete(u), o.size === 0 && n && (n(), n = null);
    };
  }
  return { set: i, update: r, subscribe: s };
}
const co = (e) => {
  const { subscribe: t, set: n } = bt(null);
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
var gn = /* @__PURE__ */ ((e) => (e.EDIT = "EDIT", e.SELECT = "SELECT", e.NONE = "NONE", e))(gn || {});
const rt = { selected: [] }, fo = (e, t = "EDIT") => {
  const { subscribe: n, set: o } = bt(rt);
  let i = rt;
  n((f) => i = f);
  const r = () => o(rt), s = () => {
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
      const g = uo(d, t);
      o(g === "EDIT" ? { selected: [{ id: f, editable: !0 }], pointerEvent: h } : g === "SELECT" ? { selected: [{ id: f }], pointerEvent: h } : { selected: [], pointerEvent: h });
    } else
      console.warn("Invalid selection: " + f);
  }, u = (f, h = !0) => {
    const d = Array.isArray(f) ? f : [f], g = d.map((y) => e.getAnnotation(y)).filter((y) => y);
    o({ selected: g.map(({ id: y }) => ({ id: y, editable: h })) }), g.length !== d.length && console.warn("Invalid selection", f);
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
}, uo = (e, t) => typeof t == "function" ? t(e) || "EDIT" : t || "EDIT", ho = [];
for (let e = 0; e < 256; ++e)
  ho.push((e + 256).toString(16).slice(1));
typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const mo = (e, t) => {
  const n = new Set(e.bodies.map((o) => o.id));
  return t.bodies.filter((o) => !n.has(o.id));
}, go = (e, t) => {
  const n = new Set(t.bodies.map((o) => o.id));
  return e.bodies.filter((o) => !n.has(o.id));
}, po = (e, t) => t.bodies.map((n) => {
  const o = e.bodies.find((i) => i.id === n.id);
  return { newBody: n, oldBody: o && !Te(o, n) ? o : void 0 };
}).filter(({ oldBody: n }) => n), _o = (e, t) => !Te(e.target, t.target), pn = (e, t) => {
  const n = mo(e, t), o = go(e, t), i = po(e, t);
  return {
    oldValue: e,
    newValue: t,
    bodiesCreated: n.length > 0 ? n : void 0,
    bodiesDeleted: o.length > 0 ? o : void 0,
    bodiesUpdated: i.length > 0 ? i : void 0,
    targetUpdated: _o(e, t) ? { oldTarget: e.target, newTarget: t.target } : void 0
  };
};
var Q = /* @__PURE__ */ ((e) => (e.LOCAL = "LOCAL", e.REMOTE = "REMOTE", e))(Q || {});
const yo = (e, t) => {
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
}, wo = (e, t) => {
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
        const g = t.updated.find((y) => y.oldValue.id === d.id).newValue;
        return pn(h, g);
      } else
        return f;
    }),
    ...(t.updated || []).filter(({ oldValue: f }) => !a.has(f.id))
  ];
  return { created: l, deleted: u, updated: m };
}, bo = (e) => e.id !== void 0, Eo = () => {
  const e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map(), n = [], o = (_, w = {}) => n.push({ onChange: _, options: w }), i = (_) => {
    const w = n.findIndex((E) => E.onChange == _);
    w > -1 && n.splice(w, 1);
  }, r = (_, w) => {
    const E = {
      origin: _,
      changes: {
        created: w.created || [],
        updated: w.updated || [],
        deleted: w.deleted || []
      },
      state: [...e.values()]
    };
    n.forEach((L) => {
      yo(L, E) && L.onChange(E);
    });
  }, s = (_, w = Q.LOCAL) => {
    if (e.get(_.id))
      throw Error(`Cannot add annotation ${_.id} - exists already`);
    e.set(_.id, _), _.bodies.forEach((E) => t.set(E.id, _.id)), r(w, { created: [_] });
  }, a = (_, w) => {
    const E = typeof _ == "string" ? w : _, L = typeof _ == "string" ? _ : _.id, P = e.get(L);
    if (P) {
      const Y = pn(P, E);
      return L === E.id ? e.set(L, E) : (e.delete(L), e.set(E.id, E)), P.bodies.forEach((R) => t.delete(R.id)), E.bodies.forEach((R) => t.set(R.id, E.id)), Y;
    } else
      console.warn(`Cannot update annotation ${L} - does not exist`);
  }, l = (_, w = Q.LOCAL, E = Q.LOCAL) => {
    const L = bo(w) ? E : w, P = a(_, w);
    P && r(L, { updated: [P] });
  }, u = (_, w = Q.LOCAL) => {
    const E = _.reduce((L, P) => {
      const Y = a(P);
      return Y ? [...L, Y] : L;
    }, []);
    E.length > 0 && r(w, { updated: E });
  }, m = (_, w = Q.LOCAL) => {
    const E = e.get(_.annotation);
    if (E) {
      const L = {
        ...E,
        bodies: [...E.bodies, _]
      };
      e.set(E.id, L), t.set(_.id, L.id), r(w, { updated: [{
        oldValue: E,
        newValue: L,
        bodiesCreated: [_]
      }] });
    } else
      console.warn(`Attempt to add body to missing annotation: ${_.annotation}`);
  }, f = () => [...e.values()], h = (_ = Q.LOCAL) => {
    const w = [...e.values()];
    e.clear(), t.clear(), r(_, { deleted: w });
  }, d = (_, w = !0, E = Q.LOCAL) => {
    if (w) {
      const L = [...e.values()];
      e.clear(), t.clear(), _.forEach((P) => {
        e.set(P.id, P), P.bodies.forEach((Y) => t.set(Y.id, P.id));
      }), r(E, { created: _, deleted: L });
    } else {
      const L = _.reduce((P, Y) => {
        const R = e.get(Y.id);
        return R ? [...P, R] : P;
      }, []);
      if (L.length > 0)
        throw Error(`Bulk insert would overwrite the following annotations: ${L.map((P) => P.id).join(", ")}`);
      _.forEach((P) => {
        e.set(P.id, P), P.bodies.forEach((Y) => t.set(Y.id, P.id));
      }), r(E, { created: _ });
    }
  }, g = (_) => {
    const w = typeof _ == "string" ? _ : _.id, E = e.get(w);
    if (E)
      return e.delete(w), E.bodies.forEach((L) => t.delete(L.id)), E;
    console.warn(`Attempt to delete missing annotation: ${w}`);
  }, y = (_, w = Q.LOCAL) => {
    const E = g(_);
    E && r(w, { deleted: [E] });
  }, S = (_, w = Q.LOCAL) => {
    const E = _.reduce((L, P) => {
      const Y = g(P);
      return Y ? [...L, Y] : L;
    }, []);
    E.length > 0 && r(w, { deleted: E });
  }, b = (_, w = Q.LOCAL) => {
    const E = e.get(_.annotation);
    if (E) {
      const L = E.bodies.find((P) => P.id === _.id);
      if (L) {
        t.delete(L.id);
        const P = {
          ...E,
          bodies: E.bodies.filter((Y) => Y.id !== _.id)
        };
        e.set(E.id, P), r(w, { updated: [{
          oldValue: E,
          newValue: P,
          bodiesDeleted: [L]
        }] });
      } else
        console.warn(`Attempt to delete missing body ${_.id} from annotation ${_.annotation}`);
    } else
      console.warn(`Attempt to delete body from missing annotation ${_.annotation}`);
  }, p = (_) => {
    const w = e.get(_);
    return w ? { ...w } : void 0;
  }, A = (_) => {
    const w = t.get(_);
    if (w) {
      const E = p(w).bodies.find((L) => L.id === _);
      if (E)
        return E;
      console.error(`Store integrity error: body ${_} in index, but not in annotation`);
    } else
      console.warn(`Attempt to retrieve missing body: ${_}`);
  }, T = (_, w) => {
    if (_.annotation !== w.annotation)
      throw "Annotation integrity violation: annotation ID must be the same when updating bodies";
    const E = e.get(_.annotation);
    if (E) {
      const L = E.bodies.find((Y) => Y.id === _.id), P = {
        ...E,
        bodies: E.bodies.map((Y) => Y.id === L.id ? w : Y)
      };
      return e.set(E.id, P), L.id !== w.id && (t.delete(L.id), t.set(w.id, P.id)), {
        oldValue: E,
        newValue: P,
        bodiesUpdated: [{ oldBody: L, newBody: w }]
      };
    } else
      console.warn(`Attempt to add body to missing annotation ${_.annotation}`);
  }, M = (_, w, E = Q.LOCAL) => {
    const L = T(_, w);
    r(E, { updated: [L] });
  }, D = (_, w = Q.LOCAL) => {
    const E = _.map((L) => T({ id: L.id, annotation: L.annotation }, L));
    r(w, { updated: E });
  }, U = (_) => {
    const w = e.get(_.annotation);
    if (w) {
      const E = {
        ...w,
        target: {
          ...w.target,
          ..._
        }
      };
      return e.set(w.id, E), {
        oldValue: w,
        newValue: E,
        targetUpdated: {
          oldTarget: w.target,
          newTarget: _
        }
      };
    } else
      console.warn(`Attempt to update target on missing annotation: ${_.annotation}`);
  };
  return {
    addAnnotation: s,
    addBody: m,
    all: f,
    bulkAddAnnotation: d,
    bulkDeleteAnnotation: S,
    bulkUpdateAnnotation: u,
    bulkUpdateBodies: D,
    bulkUpdateTargets: (_, w = Q.LOCAL) => {
      const E = _.map(U).filter((L) => L);
      E.length > 0 && r(w, { updated: E });
    },
    clear: h,
    deleteAnnotation: y,
    deleteBody: b,
    getAnnotation: p,
    getBody: A,
    observe: o,
    unobserve: i,
    updateAnnotation: l,
    updateBody: M,
    updateTarget: (_, w = Q.LOCAL) => {
      const E = U(_);
      E && r(w, { updated: [E] });
    }
  };
}, Ao = (e) => ({
  ...e,
  subscribe: (t) => {
    const n = (o) => t(o.state);
    return e.observe(n), t(e.all()), () => e.unobserve(n);
  }
});
let So = () => ({
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
const To = 250, Mo = (e) => {
  const t = So(), n = [];
  let o = -1, i = !1, r = 0;
  const s = (d) => {
    if (!i) {
      const { changes: g } = d, y = performance.now();
      if (y - r > To)
        n.splice(o + 1), n.push(g), o = n.length - 1;
      else {
        const S = n.length - 1;
        n[S] = wo(n[S], g);
      }
      r = y;
    }
    i = !1;
  };
  e.observe(s, { origin: Q.LOCAL });
  const a = (d) => (d == null ? void 0 : d.length) > 0 && e.bulkDeleteAnnotation(d), l = (d) => (d == null ? void 0 : d.length) > 0 && e.bulkAddAnnotation(d, !1), u = (d) => (d == null ? void 0 : d.length) > 0 && e.bulkUpdateAnnotation(d.map(({ oldValue: g }) => g)), m = (d) => (d == null ? void 0 : d.length) > 0 && e.bulkUpdateAnnotation(d.map(({ newValue: g }) => g)), f = (d) => (d == null ? void 0 : d.length) > 0 && e.bulkAddAnnotation(d, !1), h = (d) => (d == null ? void 0 : d.length) > 0 && e.bulkDeleteAnnotation(d);
  return {
    canRedo: () => n.length - 1 > o,
    canUndo: () => o > -1,
    destroy: () => e.unobserve(s),
    on: (d, g) => t.on(d, g),
    redo: () => {
      if (n.length - 1 > o) {
        i = !0;
        const { created: d, updated: g, deleted: y } = n[o + 1];
        l(d), m(g), h(y), t.emit("redo", n[o + 1]), o += 1;
      }
    },
    undo: () => {
      if (o > -1) {
        i = !0;
        const { created: d, updated: g, deleted: y } = n[o];
        a(d), u(g), f(y), t.emit("undo", n[o]), o -= 1;
      }
    }
  };
}, Lo = () => {
  const { subscribe: e, set: t } = bt([]);
  return {
    subscribe: e,
    set: t
  };
}, vo = (e, t, n, o) => {
  const { store: i, selection: r, hover: s, viewport: a } = e, l = /* @__PURE__ */ new Map();
  let u = [], m, f;
  const h = (b, p) => {
    l.has(b) ? l.get(b).push(p) : l.set(b, [p]);
  }, d = (b, p) => {
    const A = l.get(b);
    A && A.indexOf(p) > 0 && A.splice(A.indexOf(p), 1);
  }, g = (b, p, A) => {
    l.has(b) && setTimeout(() => {
      l.get(b).forEach((T) => {
        if (n) {
          const M = Array.isArray(p) ? p.map((U) => n.serialize(U)) : n.serialize(p), D = A ? A instanceof PointerEvent ? A : n.serialize(A) : void 0;
          T(M, D);
        } else
          T(p, A);
      });
    }, 1);
  }, y = () => {
    const { selected: b } = r, p = b.map(({ id: A }) => i.getAnnotation(A));
    p.forEach((A) => {
      const T = u.find((M) => M.id === A.id);
      (!T || !Te(T, A)) && g("updateAnnotation", A, T);
    }), u = u.map((A) => p.find(({ id: M }) => M === A.id) || A);
  };
  r.subscribe(({ selected: b }) => {
    if (!(u.length === 0 && b.length === 0)) {
      if (u.length === 0 && b.length > 0)
        u = b.map(({ id: p }) => i.getAnnotation(p));
      else if (u.length > 0 && b.length === 0)
        u.forEach((p) => {
          const A = i.getAnnotation(p.id);
          A && !Te(A, p) && g("updateAnnotation", A, p);
        }), u = [];
      else {
        const p = new Set(u.map((T) => T.id)), A = new Set(b.map(({ id: T }) => T));
        u.filter((T) => !A.has(T.id)).forEach((T) => {
          const M = i.getAnnotation(T.id);
          M && !Te(M, T) && g("updateAnnotation", M, T);
        }), u = [
          // Remove annotations that were deselected
          ...u.filter((T) => A.has(T.id)),
          // Add editable annotations that were selected
          ...b.filter(({ id: T }) => !p.has(T)).map(({ id: T }) => i.getAnnotation(T))
        ];
      }
      g("selectionChanged", u);
    }
  }), s.subscribe((b) => {
    !m && b ? g("mouseEnterAnnotation", i.getAnnotation(b)) : m && !b ? g("mouseLeaveAnnotation", i.getAnnotation(m)) : m && b && (g("mouseLeaveAnnotation", i.getAnnotation(m)), g("mouseEnterAnnotation", i.getAnnotation(b))), m = b;
  }), a == null || a.subscribe((b) => g("viewportIntersect", b.map(i.getAnnotation))), i.observe((b) => {
    o && (f && clearTimeout(f), f = setTimeout(y, 1e3));
    const { created: p, deleted: A } = b.changes;
    p.forEach((T) => g("createAnnotation", T)), A.forEach((T) => g("deleteAnnotation", T)), b.changes.updated.filter((T) => [
      ...T.bodiesCreated || [],
      ...T.bodiesDeleted || [],
      ...T.bodiesUpdated || []
    ].length > 0).forEach(({ oldValue: T, newValue: M }) => {
      const D = u.find((U) => U.id === T.id) || T;
      u = u.map((U) => U.id === T.id ? M : U), g("updateAnnotation", M, D);
    });
  }, { origin: Q.LOCAL }), i.observe((b) => {
    if (u) {
      const p = new Set(u.map((T) => T.id)), A = b.changes.updated.filter(({ newValue: T }) => p.has(T.id)).map(({ newValue: T }) => T);
      A.length > 0 && (u = u.map((T) => A.find((D) => D.id === T.id) || T));
    }
  }, { origin: Q.REMOTE });
  const S = (b) => (p) => {
    const { created: A, deleted: T, updated: M } = p;
    A.forEach((D) => g("createAnnotation", D)), T.forEach((D) => g("deleteAnnotation", D)), b ? M.forEach((D) => g("updateAnnotation", D.oldValue, D.newValue)) : M.forEach((D) => g("updateAnnotation", D.newValue, D.oldValue));
  };
  return t.on("undo", S(!0)), t.on("redo", S(!1)), { on: h, off: d, emit: g };
}, ko = (e) => (t) => t.reduce((n, o) => {
  const { parsed: i, error: r } = e.parse(o);
  return r ? {
    parsed: n.parsed,
    failed: [...n.failed, o]
  } : {
    parsed: [...n.parsed, i],
    failed: n.failed
  };
}, { parsed: [], failed: [] }), Oo = (e, t, n) => {
  const { store: o, selection: i } = e, r = (S) => {
    if (n) {
      const { parsed: b, error: p } = n.parse(S);
      b ? o.addAnnotation(b, Q.REMOTE) : console.error(p);
    } else
      o.addAnnotation(S, Q.REMOTE);
  }, s = () => i.clear(), a = () => o.clear(), l = (S) => {
    const b = o.getAnnotation(S);
    return n && b ? n.serialize(b) : b;
  }, u = () => n ? o.all().map(n.serialize) : o.all(), m = () => {
    var S;
    const b = (((S = i.selected) == null ? void 0 : S.map((p) => p.id)) || []).map((p) => o.getAnnotation(p));
    return n ? b.map(n.serialize) : b;
  }, f = (S) => fetch(S).then((b) => b.json()).then((b) => (d(b), b)), h = (S) => {
    if (typeof S == "string") {
      const b = o.getAnnotation(S);
      return o.deleteAnnotation(S), n ? n.serialize(b) : b;
    } else {
      const b = n ? n.parse(S).parsed : S;
      return o.deleteAnnotation(b), S;
    }
  }, d = (S) => {
    if (n) {
      const { parsed: b, failed: p } = ko(n)(S);
      p.length > 0 && console.warn(`Discarded ${p.length} invalid annotations`, p), o.bulkAddAnnotation(b, !0, Q.REMOTE);
    } else
      o.bulkAddAnnotation(S, !0, Q.REMOTE);
  }, g = (S) => {
    S ? i.setSelected(S) : i.clear();
  }, y = (S) => {
    if (n) {
      const b = n.parse(S).parsed, p = n.serialize(o.getAnnotation(b.id));
      return o.updateAnnotation(b), p;
    } else {
      const b = o.getAnnotation(S.id);
      return o.updateAnnotation(S), b;
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
    setSelected: g,
    undo: t.undo,
    updateAnnotation: y
  };
};
let Io = (e) => crypto.getRandomValues(new Uint8Array(e)), Po = (e, t, n) => {
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
}, Bo = (e, t = 21) => Po(e, t, Io), Do = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
const Yo = () => ({ isGuest: !0, id: Bo("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_", 20)() }), Ro = (e) => {
  const t = JSON.stringify(e);
  let n = 0;
  for (let o = 0, i = t.length; o < i; o++) {
    let r = t.charCodeAt(o);
    n = (n << 5) - n + r, n |= 0;
  }
  return `${n}`;
}, _n = (e) => e ? typeof e == "object" ? { ...e } : e : void 0, Xo = (e, t) => (Array.isArray(e) ? e : [e]).map((n) => {
  const { id: o, type: i, purpose: r, value: s, created: a, creator: l, ...u } = n;
  return {
    id: o || `temp-${Ro(n)}`,
    annotation: t,
    type: i,
    purpose: r,
    value: s,
    created: a ? new Date(a) : void 0,
    creator: _n(l),
    ...u
  };
}), Co = (e) => e.map((t) => {
  var n;
  const o = { ...t };
  return delete o.annotation, (n = o.id) != null && n.startsWith("temp-") && delete o.id, o;
});
Do();
const gr = (e, t = !1) => ({ parse: (i) => No(i, t), serialize: (i) => Uo(i, e) }), No = (e, t = !1) => {
  const n = e.id || mn(), {
    creator: o,
    created: i,
    updatedBy: r,
    updated: s,
    body: a,
    ...l
  } = e, u = Xo(a, n), m = Array.isArray(e.target) ? e.target[0] : e.target, f = Array.isArray(m.selector) ? m.selector[0] : m.selector, h = f.type === "FragmentSelector" ? Nn(f, t) : f.type === "SvgSelector" ? no(f) : void 0;
  return h ? {
    parsed: {
      ...l,
      id: n,
      bodies: u,
      target: {
        created: i ? new Date(i) : void 0,
        creator: _n(o),
        ...l.target,
        annotation: n,
        selector: h
      }
    }
  } : {
    error: Error(`Unknown selector type: ${f.type}`)
  };
}, Uo = (e, t) => {
  const {
    selector: n,
    creator: o,
    created: i,
    updated: r,
    updatedBy: s,
    ...a
  } = e.target, l = n.type == q.RECTANGLE ? Un(n.geometry) : oo(n);
  return {
    ...e,
    "@context": "http://www.w3.org/ns/anno.jsonld",
    id: e.id,
    type: "Annotation",
    body: Co(e.bodies),
    creator: o,
    created: i == null ? void 0 : i.toISOString(),
    target: {
      ...a,
      source: t,
      selector: l
    }
  };
};
function Rt(e, t, n) {
  const o = e.slice();
  return o[11] = t[n], o[13] = n, o;
}
function Xt(e) {
  let t, n, o, i, r;
  return {
    c() {
      t = C("rect"), c(t, "class", "a9s-corner-handle"), c(t, "x", n = /*point*/
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
      I(s, t, a), i || (r = Z(t, "pointerdown", function() {
        W(
          /*grab*/
          e[10](v(
            /*idx*/
            e[13]
          ))
        ) && e[10](v(
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
function Vo(e) {
  let t, n, o, i, r, s, a, l, u, m, f = (
    /*geom*/
    e[4].points
  ), h = [];
  for (let d = 0; d < f.length; d += 1)
    h[d] = Xt(Rt(e, f, d));
  return {
    c() {
      t = C("polygon"), i = te(), r = C("polygon"), a = te();
      for (let d = 0; d < h.length; d += 1)
        h[d].c();
      l = he(), c(t, "class", "a9s-outer"), c(t, "style", n = /*computedStyle*/
      e[1] ? "display:none;" : void 0), c(t, "points", o = /*geom*/
      e[4].points.map(Ct).join(" ")), c(r, "class", "a9s-inner a9s-shape-handle"), c(
        r,
        "style",
        /*computedStyle*/
        e[1]
      ), c(r, "points", s = /*geom*/
      e[4].points.map(Nt).join(" "));
    },
    m(d, g) {
      I(d, t, g), I(d, i, g), I(d, r, g), I(d, a, g);
      for (let y = 0; y < h.length; y += 1)
        h[y] && h[y].m(d, g);
      I(d, l, g), u || (m = [
        Z(t, "pointerdown", function() {
          W(
            /*grab*/
            e[10](v.SHAPE)
          ) && e[10](v.SHAPE).apply(this, arguments);
        }),
        Z(r, "pointerdown", function() {
          W(
            /*grab*/
            e[10](v.SHAPE)
          ) && e[10](v.SHAPE).apply(this, arguments);
        })
      ], u = !0);
    },
    p(d, g) {
      if (e = d, g & /*computedStyle*/
      2 && n !== (n = /*computedStyle*/
      e[1] ? "display:none;" : void 0) && c(t, "style", n), g & /*geom*/
      16 && o !== (o = /*geom*/
      e[4].points.map(Ct).join(" ")) && c(t, "points", o), g & /*computedStyle*/
      2 && c(
        r,
        "style",
        /*computedStyle*/
        e[1]
      ), g & /*geom*/
      16 && s !== (s = /*geom*/
      e[4].points.map(Nt).join(" ")) && c(r, "points", s), g & /*geom, handleSize, grab, Handle*/
      1048) {
        f = /*geom*/
        e[4].points;
        let y;
        for (y = 0; y < f.length; y += 1) {
          const S = Rt(e, f, y);
          h[y] ? h[y].p(S, g) : (h[y] = Xt(S), h[y].c(), h[y].m(l.parentNode, l));
        }
        for (; y < h.length; y += 1)
          h[y].d(1);
        h.length = f.length;
      }
    },
    d(d) {
      d && O(t), d && O(i), d && O(r), d && O(a), _t(h, d), d && O(l), u = !1, de(m);
    }
  };
}
function Go(e) {
  let t, n;
  return t = new tt({
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
          Vo,
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
      me(t.$$.fragment);
    },
    m(o, i) {
      fe(t, o, i), n = !0;
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
      z(t.$$.fragment, o), n = !1;
    },
    d(o) {
      ue(t, o);
    }
  };
}
const Ct = (e) => e.join(","), Nt = (e) => e.join(",");
function Ho(e, t, n) {
  let o, i, { shape: r } = t, { computedStyle: s = void 0 } = t, { transform: a } = t, { viewportScale: l = 1 } = t;
  const u = (d, g, y) => {
    let S;
    g === v.SHAPE ? S = d.geometry.points.map(([p, A]) => [p + y[0], A + y[1]]) : S = d.geometry.points.map(([p, A], T) => g === v(T) ? [p + y[0], A + y[1]] : [p, A]);
    const b = Me(S);
    return { ...d, geometry: { points: S, bounds: b } };
  };
  function m(d) {
    re.call(this, e, d);
  }
  function f(d) {
    re.call(this, e, d);
  }
  function h(d) {
    re.call(this, e, d);
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
class Fo extends oe {
  constructor(t) {
    super(), ne(this, t, Ho, Go, x, {
      shape: 0,
      computedStyle: 1,
      transform: 2,
      viewportScale: 6
    });
  }
}
function zo(e) {
  let t, n, o, i, r, s, a, l, u, m, f, h, d, g, y, S, b, p, A, T, M, D, U, _, w, E, L, P, Y, R, X, se, H, k, V, N, le, K, ge, ve, ke, $, Oe, Ae, Ie, J, be, pe, nt, At;
  return {
    c() {
      t = C("rect"), a = te(), l = C("rect"), d = te(), g = C("rect"), p = te(), A = C("rect"), U = te(), _ = C("rect"), P = te(), Y = C("rect"), H = te(), k = C("rect"), le = te(), K = C("rect"), ke = te(), $ = C("rect"), Ie = te(), J = C("rect"), c(t, "class", "a9s-outer"), c(t, "style", n = /*computedStyle*/
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
      e[4].h), c(g, "class", "a9s-edge-handle a9s-edge-handle-top"), c(g, "x", y = /*geom*/
      e[4].x), c(g, "y", S = /*geom*/
      e[4].y), c(g, "height", 1), c(g, "width", b = /*geom*/
      e[4].w), c(A, "class", "a9s-edge-handle a9s-edge-handle-right"), c(A, "x", T = /*geom*/
      e[4].x + /*geom*/
      e[4].w), c(A, "y", M = /*geom*/
      e[4].y), c(A, "height", D = /*geom*/
      e[4].h), c(A, "width", 1), c(_, "class", "a9s-edge-handle a9s-edge-handle-bottom"), c(_, "x", w = /*geom*/
      e[4].x), c(_, "y", E = /*geom*/
      e[4].y + /*geom*/
      e[4].h), c(_, "height", 1), c(_, "width", L = /*geom*/
      e[4].w), c(Y, "class", "a9s-edge-handle a9s-edge-handle-left"), c(Y, "x", R = /*geom*/
      e[4].x), c(Y, "y", X = /*geom*/
      e[4].y), c(Y, "height", se = /*geom*/
      e[4].h), c(Y, "width", 1), c(k, "class", "a9s-corner-handle a9s-corner-handle-topleft"), c(k, "x", V = /*geom*/
      e[4].x - /*handleSize*/
      e[3] / 2), c(k, "y", N = /*geom*/
      e[4].y - /*handleSize*/
      e[3] / 2), c(
        k,
        "height",
        /*handleSize*/
        e[3]
      ), c(
        k,
        "width",
        /*handleSize*/
        e[3]
      ), c(K, "class", "a9s-corner-handle a9s-corner-handle-topright"), c(K, "x", ge = /*geom*/
      e[4].x + /*geom*/
      e[4].w - /*handleSize*/
      e[3] / 2), c(K, "y", ve = /*geom*/
      e[4].y - /*handleSize*/
      e[3] / 2), c(
        K,
        "height",
        /*handleSize*/
        e[3]
      ), c(
        K,
        "width",
        /*handleSize*/
        e[3]
      ), c($, "class", "a9s-corner-handle a9s-corner-handle-bottomright"), c($, "x", Oe = /*geom*/
      e[4].x + /*geom*/
      e[4].w - /*handleSize*/
      e[3] / 2), c($, "y", Ae = /*geom*/
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
      ), c(J, "class", "a9s-corner-handle a9s-corner-handle-bottomleft"), c(J, "x", be = /*geom*/
      e[4].x - /*handleSize*/
      e[3] / 2), c(J, "y", pe = /*geom*/
      e[4].y + /*geom*/
      e[4].h - /*handleSize*/
      e[3] / 2), c(
        J,
        "height",
        /*handleSize*/
        e[3]
      ), c(
        J,
        "width",
        /*handleSize*/
        e[3]
      );
    },
    m(G, B) {
      I(G, t, B), I(G, a, B), I(G, l, B), I(G, d, B), I(G, g, B), I(G, p, B), I(G, A, B), I(G, U, B), I(G, _, B), I(G, P, B), I(G, Y, B), I(G, H, B), I(G, k, B), I(G, le, B), I(G, K, B), I(G, ke, B), I(G, $, B), I(G, Ie, B), I(G, J, B), nt || (At = [
        Z(t, "pointerdown", function() {
          W(
            /*grab*/
            e[10](v.SHAPE)
          ) && e[10](v.SHAPE).apply(this, arguments);
        }),
        Z(l, "pointerdown", function() {
          W(
            /*grab*/
            e[10](v.SHAPE)
          ) && e[10](v.SHAPE).apply(this, arguments);
        }),
        Z(g, "pointerdown", function() {
          W(
            /*grab*/
            e[10](v.TOP)
          ) && e[10](v.TOP).apply(this, arguments);
        }),
        Z(A, "pointerdown", function() {
          W(
            /*grab*/
            e[10](v.RIGHT)
          ) && e[10](v.RIGHT).apply(this, arguments);
        }),
        Z(_, "pointerdown", function() {
          W(
            /*grab*/
            e[10](v.BOTTOM)
          ) && e[10](v.BOTTOM).apply(this, arguments);
        }),
        Z(Y, "pointerdown", function() {
          W(
            /*grab*/
            e[10](v.LEFT)
          ) && e[10](v.LEFT).apply(this, arguments);
        }),
        Z(k, "pointerdown", function() {
          W(
            /*grab*/
            e[10](v.TOP_LEFT)
          ) && e[10](v.TOP_LEFT).apply(this, arguments);
        }),
        Z(K, "pointerdown", function() {
          W(
            /*grab*/
            e[10](v.TOP_RIGHT)
          ) && e[10](v.TOP_RIGHT).apply(this, arguments);
        }),
        Z($, "pointerdown", function() {
          W(
            /*grab*/
            e[10](v.BOTTOM_RIGHT)
          ) && e[10](v.BOTTOM_RIGHT).apply(this, arguments);
        }),
        Z(J, "pointerdown", function() {
          W(
            /*grab*/
            e[10](v.BOTTOM_LEFT)
          ) && e[10](v.BOTTOM_LEFT).apply(this, arguments);
        })
      ], nt = !0);
    },
    p(G, B) {
      e = G, B & /*computedStyle*/
      2 && n !== (n = /*computedStyle*/
      e[1] ? "display:none;" : void 0) && c(t, "style", n), B & /*geom*/
      16 && o !== (o = /*geom*/
      e[4].x) && c(t, "x", o), B & /*geom*/
      16 && i !== (i = /*geom*/
      e[4].y) && c(t, "y", i), B & /*geom*/
      16 && r !== (r = /*geom*/
      e[4].w) && c(t, "width", r), B & /*geom*/
      16 && s !== (s = /*geom*/
      e[4].h) && c(t, "height", s), B & /*computedStyle*/
      2 && c(
        l,
        "style",
        /*computedStyle*/
        e[1]
      ), B & /*geom*/
      16 && u !== (u = /*geom*/
      e[4].x) && c(l, "x", u), B & /*geom*/
      16 && m !== (m = /*geom*/
      e[4].y) && c(l, "y", m), B & /*geom*/
      16 && f !== (f = /*geom*/
      e[4].w) && c(l, "width", f), B & /*geom*/
      16 && h !== (h = /*geom*/
      e[4].h) && c(l, "height", h), B & /*geom*/
      16 && y !== (y = /*geom*/
      e[4].x) && c(g, "x", y), B & /*geom*/
      16 && S !== (S = /*geom*/
      e[4].y) && c(g, "y", S), B & /*geom*/
      16 && b !== (b = /*geom*/
      e[4].w) && c(g, "width", b), B & /*geom*/
      16 && T !== (T = /*geom*/
      e[4].x + /*geom*/
      e[4].w) && c(A, "x", T), B & /*geom*/
      16 && M !== (M = /*geom*/
      e[4].y) && c(A, "y", M), B & /*geom*/
      16 && D !== (D = /*geom*/
      e[4].h) && c(A, "height", D), B & /*geom*/
      16 && w !== (w = /*geom*/
      e[4].x) && c(_, "x", w), B & /*geom*/
      16 && E !== (E = /*geom*/
      e[4].y + /*geom*/
      e[4].h) && c(_, "y", E), B & /*geom*/
      16 && L !== (L = /*geom*/
      e[4].w) && c(_, "width", L), B & /*geom*/
      16 && R !== (R = /*geom*/
      e[4].x) && c(Y, "x", R), B & /*geom*/
      16 && X !== (X = /*geom*/
      e[4].y) && c(Y, "y", X), B & /*geom*/
      16 && se !== (se = /*geom*/
      e[4].h) && c(Y, "height", se), B & /*geom, handleSize*/
      24 && V !== (V = /*geom*/
      e[4].x - /*handleSize*/
      e[3] / 2) && c(k, "x", V), B & /*geom, handleSize*/
      24 && N !== (N = /*geom*/
      e[4].y - /*handleSize*/
      e[3] / 2) && c(k, "y", N), B & /*handleSize*/
      8 && c(
        k,
        "height",
        /*handleSize*/
        e[3]
      ), B & /*handleSize*/
      8 && c(
        k,
        "width",
        /*handleSize*/
        e[3]
      ), B & /*geom, handleSize*/
      24 && ge !== (ge = /*geom*/
      e[4].x + /*geom*/
      e[4].w - /*handleSize*/
      e[3] / 2) && c(K, "x", ge), B & /*geom, handleSize*/
      24 && ve !== (ve = /*geom*/
      e[4].y - /*handleSize*/
      e[3] / 2) && c(K, "y", ve), B & /*handleSize*/
      8 && c(
        K,
        "height",
        /*handleSize*/
        e[3]
      ), B & /*handleSize*/
      8 && c(
        K,
        "width",
        /*handleSize*/
        e[3]
      ), B & /*geom, handleSize*/
      24 && Oe !== (Oe = /*geom*/
      e[4].x + /*geom*/
      e[4].w - /*handleSize*/
      e[3] / 2) && c($, "x", Oe), B & /*geom, handleSize*/
      24 && Ae !== (Ae = /*geom*/
      e[4].y + /*geom*/
      e[4].h - /*handleSize*/
      e[3] / 2) && c($, "y", Ae), B & /*handleSize*/
      8 && c(
        $,
        "height",
        /*handleSize*/
        e[3]
      ), B & /*handleSize*/
      8 && c(
        $,
        "width",
        /*handleSize*/
        e[3]
      ), B & /*geom, handleSize*/
      24 && be !== (be = /*geom*/
      e[4].x - /*handleSize*/
      e[3] / 2) && c(J, "x", be), B & /*geom, handleSize*/
      24 && pe !== (pe = /*geom*/
      e[4].y + /*geom*/
      e[4].h - /*handleSize*/
      e[3] / 2) && c(J, "y", pe), B & /*handleSize*/
      8 && c(
        J,
        "height",
        /*handleSize*/
        e[3]
      ), B & /*handleSize*/
      8 && c(
        J,
        "width",
        /*handleSize*/
        e[3]
      );
    },
    d(G) {
      G && O(t), G && O(a), G && O(l), G && O(d), G && O(g), G && O(p), G && O(A), G && O(U), G && O(_), G && O(P), G && O(Y), G && O(H), G && O(k), G && O(le), G && O(K), G && O(ke), G && O($), G && O(Ie), G && O(J), nt = !1, de(At);
    }
  };
}
function jo(e) {
  let t, n;
  return t = new tt({
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
      me(t.$$.fragment);
    },
    m(o, i) {
      fe(t, o, i), n = !0;
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
      z(t.$$.fragment, o), n = !1;
    },
    d(o) {
      ue(t, o);
    }
  };
}
function qo(e, t, n) {
  let o, i, { shape: r } = t, { computedStyle: s = void 0 } = t, { transform: a } = t, { viewportScale: l = 1 } = t;
  const u = (d, g, y) => {
    const S = d.geometry.bounds;
    let [b, p] = [S.minX, S.minY], [A, T] = [S.maxX, S.maxY];
    const [M, D] = y;
    if (g === v.SHAPE)
      b += M, A += M, p += D, T += D;
    else {
      switch (g) {
        case v.TOP:
        case v.TOP_LEFT:
        case v.TOP_RIGHT: {
          p += D;
          break;
        }
        case v.BOTTOM:
        case v.BOTTOM_LEFT:
        case v.BOTTOM_RIGHT: {
          T += D;
          break;
        }
      }
      switch (g) {
        case v.LEFT:
        case v.TOP_LEFT:
        case v.BOTTOM_LEFT: {
          b += M;
          break;
        }
        case v.RIGHT:
        case v.TOP_RIGHT:
        case v.BOTTOM_RIGHT: {
          A += M;
          break;
        }
      }
    }
    const U = Math.min(b, A), _ = Math.min(p, T), w = Math.abs(A - b), E = Math.abs(T - p);
    return {
      ...d,
      geometry: {
        x: U,
        y: _,
        w,
        h: E,
        bounds: {
          minX: U,
          minY: _,
          maxX: U + w,
          maxY: _ + E
        }
      }
    };
  };
  function m(d) {
    re.call(this, e, d);
  }
  function f(d) {
    re.call(this, e, d);
  }
  function h(d) {
    re.call(this, e, d);
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
class Ko extends oe {
  constructor(t) {
    super(), ne(this, t, qo, jo, x, {
      shape: 0,
      computedStyle: 1,
      transform: 2,
      viewportScale: 6
    });
  }
}
function Wo(e) {
  let t, n, o, i, r, s, a, l, u, m, f, h, d, g, y, S, b, p, A, T, M, D, U, _, w, E, L, P, Y;
  return {
    c() {
      t = C("ellipse"), s = te(), a = C("ellipse"), h = te(), d = C("rect"), S = te(), b = C("rect"), T = te(), M = C("rect"), _ = te(), w = C("rect"), c(t, "class", "a9s-outer"), c(t, "cx", n = /*geom*/
      e[3].cx), c(t, "cy", o = /*geom*/
      e[3].cy), c(t, "rx", i = /*geom*/
      e[3].rx), c(t, "ry", r = /*geom*/
      e[3].ry), c(a, "class", "a9s-inner a9s-shape-handle"), c(a, "cx", l = /*geom*/
      e[3].cx), c(a, "cy", u = /*geom*/
      e[3].cy), c(a, "rx", m = /*geom*/
      e[3].rx), c(a, "ry", f = /*geom*/
      e[3].ry), c(d, "class", "a9s-corner-handle a9s-corner-top"), c(d, "x", g = /*geom*/
      e[3].cx - /*handleSize*/
      e[2] / 2), c(d, "y", y = /*geom*/
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
      e[2] / 2), c(b, "y", A = /*geom*/
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
      ), c(M, "class", "a9s-corner-handle a9s-corner-handle-bottom"), c(M, "x", D = /*geom*/
      e[3].cx - /*handleSize*/
      e[2] / 2), c(M, "y", U = /*geom*/
      e[3].cy + /*geom*/
      e[3].ry - /*handleSize*/
      e[2] / 2), c(
        M,
        "height",
        /*handleSize*/
        e[2]
      ), c(
        M,
        "width",
        /*handleSize*/
        e[2]
      ), c(w, "class", "a9s-corner-handle a9s-corner-handle-left"), c(w, "x", E = /*geom*/
      e[3].cx - /*geom*/
      e[3].rx - /*handleSize*/
      e[2] / 2), c(w, "y", L = /*geom*/
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
      );
    },
    m(R, X) {
      I(R, t, X), I(R, s, X), I(R, a, X), I(R, h, X), I(R, d, X), I(R, S, X), I(R, b, X), I(R, T, X), I(R, M, X), I(R, _, X), I(R, w, X), P || (Y = [
        Z(t, "pointerdown", function() {
          W(
            /*grab*/
            e[9](v.SHAPE)
          ) && e[9](v.SHAPE).apply(this, arguments);
        }),
        Z(a, "pointerdown", function() {
          W(
            /*grab*/
            e[9](v.SHAPE)
          ) && e[9](v.SHAPE).apply(this, arguments);
        }),
        Z(d, "pointerdown", function() {
          W(
            /*grab*/
            e[9](v.TOP)
          ) && e[9](v.TOP).apply(this, arguments);
        }),
        Z(b, "pointerdown", function() {
          W(
            /*grab*/
            e[9](v.RIGHT)
          ) && e[9](v.RIGHT).apply(this, arguments);
        }),
        Z(M, "pointerdown", function() {
          W(
            /*grab*/
            e[9](v.BOTTOM)
          ) && e[9](v.BOTTOM).apply(this, arguments);
        }),
        Z(w, "pointerdown", function() {
          W(
            /*grab*/
            e[9](v.LEFT)
          ) && e[9](v.LEFT).apply(this, arguments);
        })
      ], P = !0);
    },
    p(R, X) {
      e = R, X & /*geom*/
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
      12 && g !== (g = /*geom*/
      e[3].cx - /*handleSize*/
      e[2] / 2) && c(d, "x", g), X & /*geom, handleSize*/
      12 && y !== (y = /*geom*/
      e[3].cy - /*handleSize*/
      e[2] / 2 - /*geom*/
      e[3].ry) && c(d, "y", y), X & /*handleSize*/
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
      12 && p !== (p = /*geom*/
      e[3].cx + /*geom*/
      e[3].rx - /*handleSize*/
      e[2] / 2) && c(b, "x", p), X & /*geom, handleSize*/
      12 && A !== (A = /*geom*/
      e[3].cy - /*handleSize*/
      e[2] / 2) && c(b, "y", A), X & /*handleSize*/
      4 && c(
        b,
        "height",
        /*handleSize*/
        e[2]
      ), X & /*handleSize*/
      4 && c(
        b,
        "width",
        /*handleSize*/
        e[2]
      ), X & /*geom, handleSize*/
      12 && D !== (D = /*geom*/
      e[3].cx - /*handleSize*/
      e[2] / 2) && c(M, "x", D), X & /*geom, handleSize*/
      12 && U !== (U = /*geom*/
      e[3].cy + /*geom*/
      e[3].ry - /*handleSize*/
      e[2] / 2) && c(M, "y", U), X & /*handleSize*/
      4 && c(
        M,
        "height",
        /*handleSize*/
        e[2]
      ), X & /*handleSize*/
      4 && c(
        M,
        "width",
        /*handleSize*/
        e[2]
      ), X & /*geom, handleSize*/
      12 && E !== (E = /*geom*/
      e[3].cx - /*geom*/
      e[3].rx - /*handleSize*/
      e[2] / 2) && c(w, "x", E), X & /*geom, handleSize*/
      12 && L !== (L = /*geom*/
      e[3].cy - /*handleSize*/
      e[2] / 2) && c(w, "y", L), X & /*handleSize*/
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
      );
    },
    d(R) {
      R && O(t), R && O(s), R && O(a), R && O(h), R && O(d), R && O(S), R && O(b), R && O(T), R && O(M), R && O(_), R && O(w), P = !1, de(Y);
    }
  };
}
function Zo(e) {
  let t, n;
  return t = new tt({
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
          Wo,
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
      me(t.$$.fragment);
    },
    m(o, i) {
      fe(t, o, i), n = !0;
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
      z(t.$$.fragment, o), n = !1;
    },
    d(o) {
      ue(t, o);
    }
  };
}
function Jo(e, t, n) {
  let o, i, { shape: r } = t, { transform: s } = t, { viewportScale: a = 1 } = t;
  const l = (h, d, g) => {
    const y = h.geometry.bounds;
    let [S, b] = [y.minX, y.minY], [p, A] = [y.maxX, y.maxY];
    const [T, M] = g;
    if (d === v.SHAPE)
      S += T, p += T, b += M, A += M;
    else
      switch (d) {
        case v.TOP: {
          b += M;
          break;
        }
        case v.BOTTOM: {
          A += M;
          break;
        }
        case v.LEFT: {
          S += T;
          break;
        }
        case v.RIGHT: {
          p += T;
          break;
        }
      }
    const D = Math.min(S, p), U = Math.min(b, A), _ = Math.abs(p - S), w = Math.abs(A - b), E = (S + p) / 2, L = (b + A) / 2, P = _ / 2, Y = w / 2;
    return {
      ...h,
      geometry: {
        ...h.geometry,
        cx: E,
        cy: L,
        rx: P,
        ry: Y,
        bounds: {
          minX: D,
          minY: U,
          maxX: D + _,
          maxY: U + w
        }
      }
    };
  };
  function u(h) {
    re.call(this, e, h);
  }
  function m(h) {
    re.call(this, e, h);
  }
  function f(h) {
    re.call(this, e, h);
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
class Qo extends oe {
  constructor(t) {
    super(), ne(this, t, Jo, Zo, x, { shape: 0, transform: 1, viewportScale: 5 });
  }
}
function xo(e) {
  let t, n, o, i;
  return {
    c() {
      t = C("path"), c(t, "class", "a9s-inner a9s-shape-handle"), c(
        t,
        "style",
        /*computedStyle*/
        e[1]
      ), c(t, "d", n = Ze(
        /*geom*/
        e[3].points,
        We
      ));
    },
    m(r, s) {
      I(r, t, s), o || (i = Z(t, "pointerdown", function() {
        W(
          /*grab*/
          e[10](v.SHAPE)
        ) && e[10](v.SHAPE).apply(this, arguments);
      }), o = !0);
    },
    p(r, s) {
      e = r, s & /*computedStyle*/
      2 && c(
        t,
        "style",
        /*computedStyle*/
        e[1]
      ), s & /*geom*/
      8 && n !== (n = Ze(
        /*geom*/
        e[3].points,
        We
      )) && c(t, "d", n);
    },
    d(r) {
      r && O(t), o = !1, i();
    }
  };
}
function $o(e) {
  let t, n;
  return t = new tt({
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
        e[4]
      ),
      $$slots: {
        default: [
          xo,
          ({ grab: o }) => ({ 10: o }),
          ({ grab: o }) => o ? 1024 : 0
        ]
      },
      $$scope: { ctx: e }
    }
  }), t.$on(
    "change",
    /*change_handler*/
    e[6]
  ), t.$on(
    "grab",
    /*grab_handler*/
    e[7]
  ), t.$on(
    "release",
    /*release_handler*/
    e[8]
  ), {
    c() {
      me(t.$$.fragment);
    },
    m(o, i) {
      fe(t, o, i), n = !0;
    },
    p(o, [i]) {
      const r = {};
      i & /*shape*/
      1 && (r.shape = /*shape*/
      o[0]), i & /*transform*/
      4 && (r.transform = /*transform*/
      o[2]), i & /*$$scope, computedStyle, geom, grab*/
      3082 && (r.$$scope = { dirty: i, ctx: o }), t.$set(r);
    },
    i(o) {
      n || (F(t.$$.fragment, o), n = !0);
    },
    o(o) {
      z(t.$$.fragment, o), n = !1;
    },
    d(o) {
      ue(t, o);
    }
  };
}
function ei(e, t, n) {
  let o, { shape: i } = t, { computedStyle: r = void 0 } = t, { transform: s } = t, { viewportScale: a = 1 } = t;
  const l = (h, d, g) => {
    let y;
    d === v.SHAPE && (y = h.geometry.points.map(([b, p, A]) => [b + g[0], p + g[1], A]));
    const S = Me(y.map((b) => [b[0], b[1]]));
    return { ...h, geometry: { points: y, bounds: S } };
  };
  function u(h) {
    re.call(this, e, h);
  }
  function m(h) {
    re.call(this, e, h);
  }
  function f(h) {
    re.call(this, e, h);
  }
  return e.$$set = (h) => {
    "shape" in h && n(0, i = h.shape), "computedStyle" in h && n(1, r = h.computedStyle), "transform" in h && n(2, s = h.transform), "viewportScale" in h && n(5, a = h.viewportScale);
  }, e.$$.update = () => {
    e.$$.dirty & /*shape*/
    1 && n(3, o = i.geometry), e.$$.dirty & /*viewportScale*/
    32;
  }, [
    i,
    r,
    s,
    o,
    l,
    a,
    u,
    m,
    f
  ];
}
class ti extends oe {
  constructor(t) {
    super(), ne(this, t, ei, $o, x, {
      shape: 0,
      computedStyle: 1,
      transform: 2,
      viewportScale: 5
    });
  }
}
const yn = /* @__PURE__ */ new Map([
  [q.RECTANGLE, Ko],
  [q.POLYGON, Fo],
  [q.ELLIPSE, Qo],
  [q.FREEHAND, ti]
]), Ut = (e) => yn.get(e.type), ni = (e, t) => yn.set(e, t), v = (e) => `HANDLE-${e}`;
v.SHAPE = "SHAPE";
v.TOP = "TOP";
v.RIGHT = "RIGHT";
v.BOTTOM = "BOTTOM";
v.LEFT = "LEFT";
v.TOP_LEFT = "TOP_LEFT";
v.TOP_RIGHT = "TOP_RIGHT";
v.BOTTOM_RIGHT = "BOTTOM_RIGHT";
v.BOTTOM_LEFT = "BOTTOM_LEFT";
const oi = (e) => ({}), Vt = (e) => ({ grab: (
  /*onGrab*/
  e[0]
) });
function ii(e) {
  let t, n, o, i;
  const r = (
    /*#slots*/
    e[7].default
  ), s = Sn(
    r,
    e,
    /*$$scope*/
    e[6],
    Vt
  );
  return {
    c() {
      t = C("g"), s && s.c(), c(t, "class", "a9s-annotation selected");
    },
    m(a, l) {
      I(a, t, l), s && s.m(t, null), n = !0, o || (i = [
        Z(
          t,
          "pointerup",
          /*onRelease*/
          e[2]
        ),
        Z(
          t,
          "pointermove",
          /*onPointerMove*/
          e[1]
        )
      ], o = !0);
    },
    p(a, [l]) {
      s && s.p && (!n || l & /*$$scope*/
      64) && Mn(
        s,
        r,
        a,
        /*$$scope*/
        a[6],
        n ? Tn(
          r,
          /*$$scope*/
          a[6],
          l,
          oi
        ) : Ln(
          /*$$scope*/
          a[6]
        ),
        Vt
      );
    },
    i(a) {
      n || (F(s, a), n = !0);
    },
    o(a) {
      z(s, a), n = !1;
    },
    d(a) {
      a && O(t), s && s.d(a), o = !1, de(i);
    }
  };
}
function ri(e, t, n) {
  let { $$slots: o = {}, $$scope: i } = t;
  const r = Ee();
  let { shape: s } = t, { editor: a } = t, { transform: l } = t, u = null, m, f = null;
  const h = (y) => (S) => {
    u = y, m = l.elementToImage(S.offsetX, S.offsetY), f = s, S.target.setPointerCapture(S.pointerId), r("grab");
  }, d = (y) => {
    if (u) {
      const [S, b] = l.elementToImage(y.offsetX, y.offsetY), p = [S - m[0], b - m[1]];
      n(3, s = a(f, u, p)), r("change", s);
    }
  }, g = (y) => {
    y.target.releasePointerCapture(y.pointerId), u = null, f = s, r("release");
  };
  return e.$$set = (y) => {
    "shape" in y && n(3, s = y.shape), "editor" in y && n(4, a = y.editor), "transform" in y && n(5, l = y.transform), "$$scope" in y && n(6, i = y.$$scope);
  }, [h, d, g, s, a, l, i, o];
}
class tt extends oe {
  constructor(t) {
    super(), ne(this, t, ri, ii, x, { shape: 3, editor: 4, transform: 5 });
  }
}
const Je = (e, t) => {
  const n = typeof t == "function" ? t(e) : t;
  if (n) {
    const { fill: o, fillOpacity: i } = n;
    let r = "";
    return o && (r += `fill:${o};stroke:${o};`), r += `fill-opacity:${i || "0.25"};`, r;
  }
};
function si(e, t, n) {
  let o;
  const i = Ee();
  let { annotation: r } = t, { editor: s } = t, { style: a = void 0 } = t, { target: l } = t, { transform: u } = t, { viewportScale: m } = t, f;
  return Le(() => (n(6, f = new s({
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
    5 && (o = Je(r, a)), e.$$.dirty & /*annotation, editorComponent*/
    65 && r && (f == null || f.$set({ shape: r.target.selector })), e.$$.dirty & /*editorComponent, transform*/
    80 && f && f.$set({ transform: u }), e.$$.dirty & /*editorComponent, viewportScale*/
    96 && f && f.$set({ viewportScale: m });
  }, [r, s, a, l, u, m, f];
}
class li extends oe {
  constructor(t) {
    super(), ne(this, t, si, null, x, {
      annotation: 0,
      editor: 1,
      style: 2,
      target: 3,
      transform: 4,
      viewportScale: 5
    });
  }
}
function ai(e, t, n) {
  const o = Ee();
  let { drawingMode: i } = t, { target: r } = t, { tool: s } = t, { transform: a } = t, { viewportScale: l } = t, u;
  return Le(() => {
    const m = r.closest("svg"), f = [], h = (d, g, y) => {
      m.addEventListener(d, g, y), f.push(() => m.removeEventListener(d, g, y));
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
class ci extends oe {
  constructor(t) {
    super(), ne(this, t, ai, null, x, {
      drawingMode: 0,
      target: 1,
      tool: 2,
      transform: 3,
      viewportScale: 4
    });
  }
}
function Gt(e) {
  let t, n;
  return {
    c() {
      t = C("rect"), n = C("rect"), c(t, "class", "a9s-outer"), c(
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
      I(o, t, i), I(o, n, i);
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
function fi(e) {
  let t, n = (
    /*origin*/
    e[0] && Gt(e)
  );
  return {
    c() {
      t = C("g"), n && n.c(), c(t, "class", "a9s-annotation a9s-rubberband");
    },
    m(o, i) {
      I(o, t, i), n && n.m(t, null);
    },
    p(o, [i]) {
      /*origin*/
      o[0] ? n ? n.p(o, i) : (n = Gt(o), n.c(), n.m(t, null)) : n && (n.d(1), n = null);
    },
    i: j,
    o: j,
    d(o) {
      o && O(t), n && n.d();
    }
  };
}
function ui(e, t, n) {
  const o = Ee();
  let { addEventListener: i } = t, { drawingMode: r } = t, { transform: s } = t, a, l, u, m, f, h, d;
  const g = (p) => {
    a = performance.now(), r === "drag" && (n(0, l = s.elementToImage(p.offsetX, p.offsetY)), u = l, n(1, m = l[0]), n(2, f = l[1]), n(3, h = 1), n(4, d = 1));
  }, y = (p) => {
    l && (u = s.elementToImage(p.offsetX, p.offsetY), n(1, m = Math.min(u[0], l[0])), n(2, f = Math.min(u[1], l[1])), n(3, h = Math.abs(u[0] - l[0])), n(4, d = Math.abs(u[1] - l[1])));
  }, S = (p) => {
    const A = performance.now() - a;
    if (r === "click") {
      if (A > 300)
        return;
      p.stopPropagation(), l ? b() : (n(0, l = s.elementToImage(p.offsetX, p.offsetY)), u = l, n(1, m = l[0]), n(2, f = l[1]), n(3, h = 1), n(4, d = 1));
    } else
      l && (A > 300 || h * d > 100 ? (p.stopPropagation(), b()) : (n(0, l = null), u = null));
  }, b = () => {
    if (h * d > 15) {
      const p = {
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
      o("create", p);
    }
    n(0, l = null), u = null;
  };
  return Le(() => {
    i("pointerdown", g), i("pointermove", y), i("pointerup", S, !0);
  }), e.$$set = (p) => {
    "addEventListener" in p && n(5, i = p.addEventListener), "drawingMode" in p && n(6, r = p.drawingMode), "transform" in p && n(7, s = p.transform);
  }, [l, m, f, h, d, i, r, s];
}
class di extends oe {
  constructor(t) {
    super(), ne(this, t, ui, fi, x, {
      addEventListener: 5,
      drawingMode: 6,
      transform: 7
    });
  }
}
const st = (e, t) => {
  const n = Math.abs(t[0] - e[0]), o = Math.abs(t[1] - e[1]);
  return Math.sqrt(Math.pow(n, 2) + Math.pow(o, 2));
}, Ye = [];
function hi(e, t = j) {
  let n;
  const o = /* @__PURE__ */ new Set();
  function i(a) {
    if (x(e, a) && (e = a, n)) {
      const l = !Ye.length;
      for (const u of o)
        u[1](), Ye.push(u, e);
      if (l) {
        for (let u = 0; u < Ye.length; u += 2)
          Ye[u][0](Ye[u + 1]);
        Ye.length = 0;
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
const mi = (e, t) => {
  const { naturalWidth: n, naturalHeight: o } = e;
  if (!n && !o) {
    const { width: i, height: r } = e;
    t.setAttribute("viewBox", `0 0 ${i} ${r}`), e.addEventListener("load", (s) => {
      const a = s.target;
      t.setAttribute("viewBox", `0 0 ${a.naturalWidth} ${a.naturalHeight}`);
    });
  } else
    t.setAttribute("viewBox", `0 0 ${n} ${o}`);
}, gi = (e, t) => {
  mi(e, t);
  const { subscribe: n, set: o } = hi(1);
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
}, pr = "ontouchstart" in window || navigator.maxTouchPoints > 0;
function lt(e) {
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
function Ht(e) {
  let t, n, o, i, r, s = (
    /*isClosable*/
    e[2] && Ft(e)
  );
  return {
    c() {
      t = C("polygon"), o = C("polygon"), s && s.c(), r = he(), c(t, "class", "a9s-outer"), c(t, "points", n = /*coords*/
      e[15]), c(o, "class", "a9s-inner"), c(o, "points", i = /*coords*/
      e[15]);
    },
    m(a, l) {
      I(a, t, l), I(a, o, l), s && s.m(a, l), I(a, r, l);
    },
    p(a, l) {
      l & /*isClosable, points, cursor*/
      7 && n !== (n = /*coords*/
      a[15]) && c(t, "points", n), l & /*isClosable, points, cursor*/
      7 && i !== (i = /*coords*/
      a[15]) && c(o, "points", i), /*isClosable*/
      a[2] ? s ? s.p(a, l) : (s = Ft(a), s.c(), s.m(r.parentNode, r)) : s && (s.d(1), s = null);
    },
    d(a) {
      a && O(t), a && O(o), s && s.d(a), a && O(r);
    }
  };
}
function Ft(e) {
  let t, n, o;
  return {
    c() {
      t = C("rect"), c(t, "class", "a9s-corner-handle"), c(t, "x", n = /*points*/
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
      I(i, t, r);
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
function pi(e) {
  let t, n = (
    /*cursor*/
    e[1] && Ht(lt(e))
  );
  return {
    c() {
      t = C("g"), n && n.c(), c(t, "class", "a9s-annotation a9s-rubberband");
    },
    m(o, i) {
      I(o, t, i), n && n.m(t, null);
    },
    p(o, [i]) {
      /*cursor*/
      o[1] ? n ? n.p(lt(o), i) : (n = Ht(lt(o)), n.c(), n.m(t, null)) : n && (n.d(1), n = null);
    },
    i: j,
    o: j,
    d(o) {
      o && O(t), n && n.d();
    }
  };
}
const _i = 20;
function yi(e, t, n) {
  let o;
  const i = Ee();
  let { addEventListener: r } = t, { drawingMode: s } = t, { transform: a } = t, { viewportScale: l = 1 } = t, u, m = [], f = null, h = !1;
  const d = (p) => {
    const { timeStamp: A, offsetX: T, offsetY: M } = p;
    if (u = { timeStamp: A, offsetX: T, offsetY: M }, s === "drag" && m.length === 0) {
      const D = a.elementToImage(p.offsetX, p.offsetY);
      m.push(D), n(1, f = D);
    }
  }, g = (p) => {
    if (m.length > 0 && (n(1, f = a.elementToImage(p.offsetX, p.offsetY)), m.length > 2)) {
      const A = st(f, m[0]) * l;
      n(2, h = A < _i);
    }
  }, y = (p) => {
    if (s === "click") {
      const A = p.timeStamp - u.timeStamp, T = st([u.offsetX, u.offsetY], [p.offsetX, p.offsetY]);
      if (A > 300 || T > 15)
        return;
      if (h)
        b();
      else if (m.length === 0) {
        const M = a.elementToImage(p.offsetX, p.offsetY);
        m.push(M), n(1, f = M);
      } else
        m.push(f);
    } else {
      if (m.length === 1 && st(m[0], f) <= 4) {
        n(0, m = []), n(1, f = null);
        return;
      }
      p.stopImmediatePropagation(), h ? b() : m.push(f);
    }
  }, S = () => {
    const p = [...m, f], A = {
      type: q.POLYGON,
      geometry: { bounds: Me(p), points: p }
    };
    mt(A) > 4 && (n(0, m = []), n(1, f = null), i("create", A));
  }, b = () => {
    const p = {
      type: q.POLYGON,
      geometry: {
        bounds: Me(m),
        points: [...m]
      }
    };
    n(0, m = []), n(1, f = null), i("create", p);
  };
  return Le(() => {
    r("pointerdown", d, !0), r("pointermove", g), r("pointerup", y, !0), r("dblclick", S, !0);
  }), e.$$set = (p) => {
    "addEventListener" in p && n(4, r = p.addEventListener), "drawingMode" in p && n(5, s = p.drawingMode), "transform" in p && n(6, a = p.transform), "viewportScale" in p && n(7, l = p.viewportScale);
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
class wi extends oe {
  constructor(t) {
    super(), ne(this, t, yi, pi, x, {
      addEventListener: 4,
      drawingMode: 5,
      transform: 6,
      viewportScale: 7
    });
  }
}
function zt(e) {
  let t, n, o, i, r, s, a, l, u, m;
  return {
    c() {
      t = C("ellipse"), s = C("ellipse"), c(t, "class", "a9s-outer"), c(t, "cx", n = /*x*/
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
      I(f, t, h), I(f, s, h);
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
function bi(e) {
  let t, n = (
    /*origin*/
    e[1] && zt(e)
  );
  return {
    c() {
      t = C("g"), n && n.c(), c(t, "class", "a9s-annotation a9s-rubberband");
    },
    m(o, i) {
      I(o, t, i), n && n.m(t, null), e[9](t);
    },
    p(o, [i]) {
      /*origin*/
      o[1] ? n ? n.p(o, i) : (n = zt(o), n.c(), n.m(t, null)) : n && (n.d(1), n = null);
    },
    i: j,
    o: j,
    d(o) {
      o && O(t), n && n.d(), e[9](null);
    }
  };
}
function Ei(e, t, n) {
  const o = Ee();
  let { addEventListener: i } = t, { drawingMode: r } = t, { transform: s } = t, a, l, u, m, f, h, d, g = !1, y = !1, S, b;
  const p = (w) => {
    S = performance.now(), r === "drag" && (n(1, l = s.elementToImage(w.offsetX, w.offsetY)), u = l, n(2, m = l[0]), n(3, f = l[1]), n(4, h = 1), n(5, d = 1));
  }, A = (w) => {
    const E = w || b;
    if (l)
      if (u = s.elementToImage(E.offsetX, E.offsetY), y) {
        const L = 2 * Math.abs(u[0] - l[0]), P = 2 * Math.abs(u[1] - l[1]);
        n(4, h = g ? Math.max(L, P) : L), n(5, d = g ? h : P), n(2, m = Math.min(u[0], l[0] - h / 2)), n(3, f = Math.min(u[1], l[1] - d / 2));
      } else {
        const L = Math.abs(u[0] - l[0]), P = Math.abs(u[1] - l[1]);
        n(4, h = g ? Math.max(L, P) : L), n(5, d = g ? h : P), n(2, m = Math.min(u[0], l[0])), n(3, f = Math.min(u[1], l[1]));
      }
    w && (b = w);
  }, T = (w) => {
    r === "click" && w.stopImmediatePropagation();
    const E = performance.now() - S;
    if (r === "click") {
      if (E > 300)
        return;
      w.stopPropagation(), l ? M() : (n(1, l = s.elementToImage(w.offsetX, w.offsetY)), u = l, n(2, m = l[0]), n(3, f = l[1]), n(4, h = 1), n(5, d = 1));
    } else
      l && (E > 300 || h * d > 100 ? (w.stopPropagation(), M()) : (n(1, l = null), u = null, b = void 0));
  }, M = () => {
    if (h * d > 15) {
      const w = {
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
      o("create", w);
    }
    n(1, l = null), u = null, b = void 0;
  }, D = (w) => {
    w.key === "Shift" && (g = !0, A()), w.key === "Control" && (y = !0, A());
  }, U = (w) => {
    w.key === "Shift" && (g = !1, A()), w.key === "Control" && (y = !1, A());
  };
  Le(() => (document.addEventListener("keyup", U), document.addEventListener("keydown", D), i("pointerdown", p), i("pointermove", A), i("pointerup", T), () => {
    document.removeEventListener("keyup", U), document.removeEventListener("keydown", D);
  }));
  function _(w) {
    Ke[w ? "unshift" : "push"](() => {
      a = w, n(0, a);
    });
  }
  return e.$$set = (w) => {
    "addEventListener" in w && n(6, i = w.addEventListener), "drawingMode" in w && n(7, r = w.drawingMode), "transform" in w && n(8, s = w.transform);
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
    _
  ];
}
class Ai extends oe {
  constructor(t) {
    super(), ne(this, t, Ei, bi, x, {
      addEventListener: 6,
      drawingMode: 7,
      transform: 8
    });
  }
}
function at(e) {
  const t = e.slice(), n = Ze(
    /*points*/
    t[0],
    We
  );
  return t[13] = n, t;
}
function jt(e) {
  let t, n = (
    /*points*/
    e[0].length > 0 && qt(at(e))
  );
  return {
    c() {
      n && n.c(), t = he();
    },
    m(o, i) {
      n && n.m(o, i), I(o, t, i);
    },
    p(o, i) {
      /*points*/
      o[0].length > 0 ? n ? n.p(at(o), i) : (n = qt(at(o)), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
    },
    d(o) {
      n && n.d(o), o && O(t);
    }
  };
}
function qt(e) {
  let t, n;
  return {
    c() {
      t = C("path"), c(t, "class", "a9s-inner"), c(t, "d", n = /*pathData*/
      e[13]);
    },
    m(o, i) {
      I(o, t, i);
    },
    p(o, i) {
      i & /*points*/
      1 && n !== (n = /*pathData*/
      o[13]) && c(t, "d", n);
    },
    d(o) {
      o && O(t);
    }
  };
}
function Si(e) {
  let t, n = (
    /*cursor*/
    e[1] && jt(e)
  );
  return {
    c() {
      t = C("g"), n && n.c(), c(t, "class", "a9s-annotation a9s-rubberband");
    },
    m(o, i) {
      I(o, t, i), n && n.m(t, null);
    },
    p(o, [i]) {
      /*cursor*/
      o[1] ? n ? n.p(o, i) : (n = jt(o), n.c(), n.m(t, null)) : n && (n.d(1), n = null);
    },
    i: j,
    o: j,
    d(o) {
      o && O(t), n && n.d();
    }
  };
}
function Ti(e, t, n) {
  const o = Ee();
  let { addEventListener: i } = t, { drawingMode: r } = t, { transform: s } = t, { viewportScale: a = 1 } = t, l = [], u = null;
  const m = (g) => {
    if (r === "drag" && l.length === 0) {
      const y = s.elementToImage(g.offsetX, g.offsetY);
      l.push([...y, g.pressure]), n(1, u = y);
    }
  }, f = (g) => {
    const y = s.elementToImage(g.offsetX, g.offsetY);
    n(0, l = [...l, [...y, g.pressure]]);
  }, h = (g) => {
    g.stopImmediatePropagation(), d();
  }, d = () => {
    const g = {
      type: q.FREEHAND,
      geometry: {
        bounds: Me(l.map((y) => [y[0], y[1]])),
        points: l
      }
    };
    n(0, l = []), n(1, u = null), o("create", g);
  };
  return Le(() => {
    i("pointerdown", m, !0), i("pointermove", f), i("pointerup", h, !0);
  }), e.$$set = (g) => {
    "addEventListener" in g && n(2, i = g.addEventListener), "drawingMode" in g && n(3, r = g.drawingMode), "transform" in g && n(4, s = g.transform), "viewportScale" in g && n(5, a = g.viewportScale);
  }, e.$$.update = () => {
    e.$$.dirty & /*viewportScale*/
    32;
  }, [l, u, i, r, s, a];
}
class Mi extends oe {
  constructor(t) {
    super(), ne(this, t, Ti, Si, x, {
      addEventListener: 2,
      drawingMode: 3,
      transform: 4,
      viewportScale: 5
    });
  }
}
const Et = /* @__PURE__ */ new Map([
  ["rectangle", { tool: di }],
  ["polygon", { tool: wi }],
  ["ellipse", { tool: Ai }],
  ["freehand", { tool: Mi }]
]), pt = () => [...Et.keys()], wn = (e) => Et.get(e), Li = (e, t, n) => Et.set(e, { tool: t, opts: n });
function vi(e) {
  let t, n, o, i, r;
  return {
    c() {
      t = C("g"), n = C("ellipse"), i = C("ellipse"), c(n, "class", "a9s-outer"), c(n, "style", o = /*computedStyle*/
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
      I(s, t, a), _e(t, n), _e(t, i);
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
    i: j,
    o: j,
    d(s) {
      s && O(t);
    }
  };
}
function ki(e, t, n) {
  let o, { annotation: i } = t, { geom: r } = t, { style: s = void 0 } = t;
  const { cx: a, cy: l, rx: u, ry: m } = r;
  return e.$$set = (f) => {
    "annotation" in f && n(0, i = f.annotation), "geom" in f && n(6, r = f.geom), "style" in f && n(7, s = f.style);
  }, e.$$.update = () => {
    e.$$.dirty & /*annotation, style*/
    129 && n(1, o = Je(i, s));
  }, [i, o, a, l, u, m, r, s];
}
class Oi extends oe {
  constructor(t) {
    super(), ne(this, t, ki, vi, x, { annotation: 0, geom: 6, style: 7 });
  }
}
function Ii(e) {
  let t, n, o, i, r;
  return {
    c() {
      t = C("g"), n = C("polygon"), i = C("polygon"), c(n, "class", "a9s-outer"), c(n, "style", o = /*computedStyle*/
      e[1] ? "display:none;" : void 0), c(
        n,
        "points",
        /*points*/
        e[2].map(Pi).join(" ")
      ), c(i, "class", "a9s-inner"), c(
        i,
        "style",
        /*computedStyle*/
        e[1]
      ), c(
        i,
        "points",
        /*points*/
        e[2].map(Bi).join(" ")
      ), c(t, "data-id", r = /*annotation*/
      e[0].id);
    },
    m(s, a) {
      I(s, t, a), _e(t, n), _e(t, i);
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
    i: j,
    o: j,
    d(s) {
      s && O(t);
    }
  };
}
const Pi = (e) => e.join(","), Bi = (e) => e.join(",");
function Di(e, t, n) {
  let o, { annotation: i } = t, { geom: r } = t, { style: s = void 0 } = t;
  const { points: a } = r;
  return e.$$set = (l) => {
    "annotation" in l && n(0, i = l.annotation), "geom" in l && n(3, r = l.geom), "style" in l && n(4, s = l.style);
  }, e.$$.update = () => {
    e.$$.dirty & /*annotation, style*/
    17 && n(1, o = Je(i, s));
  }, [i, o, a, r, s];
}
class Yi extends oe {
  constructor(t) {
    super(), ne(this, t, Di, Ii, x, { annotation: 0, geom: 3, style: 4 });
  }
}
function Ri(e) {
  let t, n, o, i, r;
  return {
    c() {
      t = C("g"), n = C("rect"), i = C("rect"), c(n, "class", "a9s-outer"), c(n, "style", o = /*computedStyle*/
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
      I(s, t, a), _e(t, n), _e(t, i);
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
    i: j,
    o: j,
    d(s) {
      s && O(t);
    }
  };
}
function Xi(e, t, n) {
  let o, i, r, s, a, { annotation: l } = t, { geom: u } = t, { style: m = void 0 } = t;
  return e.$$set = (f) => {
    "annotation" in f && n(0, l = f.annotation), "geom" in f && n(6, u = f.geom), "style" in f && n(7, m = f.style);
  }, e.$$.update = () => {
    e.$$.dirty & /*annotation, style*/
    129 && n(5, o = Je(l, m)), e.$$.dirty & /*geom*/
    64 && n(4, { x: i, y: r, w: s, h: a } = u, i, (n(3, r), n(6, u)), (n(2, s), n(6, u)), (n(1, a), n(6, u)));
  }, [l, a, s, r, i, o, u, m];
}
class Ci extends oe {
  constructor(t) {
    super(), ne(this, t, Xi, Ri, x, { annotation: 0, geom: 6, style: 7 });
  }
}
function Ni(e) {
  let t, n, o;
  return {
    c() {
      t = C("g"), n = C("path"), c(n, "class", "a9s-inner"), c(
        n,
        "style",
        /*computedStyle*/
        e[1]
      ), c(n, "d", Ze(
        /*points*/
        e[2],
        We
      )), c(t, "data-id", o = /*annotation*/
      e[0].id);
    },
    m(i, r) {
      I(i, t, r), _e(t, n);
    },
    p(i, [r]) {
      r & /*computedStyle*/
      2 && c(
        n,
        "style",
        /*computedStyle*/
        i[1]
      ), r & /*annotation*/
      1 && o !== (o = /*annotation*/
      i[0].id) && c(t, "data-id", o);
    },
    i: j,
    o: j,
    d(i) {
      i && O(t);
    }
  };
}
function Ui(e, t, n) {
  let o, { annotation: i } = t, { geom: r } = t, { style: s = void 0 } = t;
  const { points: a } = r;
  return e.$$set = (l) => {
    "annotation" in l && n(0, i = l.annotation), "geom" in l && n(3, r = l.geom), "style" in l && n(4, s = l.style);
  }, e.$$.update = () => {
    e.$$.dirty & /*annotation, style*/
    17 && n(1, o = Je(i, s));
  }, [i, o, a, r, s];
}
class Vi extends oe {
  constructor(t) {
    super(), ne(this, t, Ui, Ni, x, { annotation: 0, geom: 3, style: 4 });
  }
}
const _r = {
  elementToImage: (e, t) => [e, t]
}, Gi = (e) => ({
  elementToImage: (t, n) => {
    const o = e.getBoundingClientRect(), i = e.createSVGPoint();
    i.x = t + o.x, i.y = n + o.y;
    const { x: r, y: s } = i.matrixTransform(e.getScreenCTM().inverse());
    return [r, s];
  }
}), Hi = 250, Fi = (e, t) => {
  const n = Ee();
  let o;
  return { onPointerDown: () => o = performance.now(), onPointerUp: (s) => {
    if (performance.now() - o < Hi) {
      const { x: l, y: u } = zi(s, e), m = t.getAt(l, u);
      m ? n("click", { originalEvent: s, annotation: m }) : n("click", { originalEvent: s });
    }
  } };
}, zi = (e, t) => {
  const n = t.createSVGPoint(), o = t.getBoundingClientRect(), i = e.clientX - o.x, r = e.clientY - o.y, { left: s, top: a } = t.getBoundingClientRect();
  return n.x = i + s, n.y = r + a, n.matrixTransform(t.getScreenCTM().inverse());
};
function Kt(e, t, n) {
  const o = e.slice();
  return o[29] = t[n], o;
}
function Wt(e, t, n) {
  const o = e.slice();
  return o[32] = t[n], o;
}
function ct(e) {
  const t = e.slice(), n = (
    /*annotation*/
    t[32].target.selector
  );
  return t[35] = n, t;
}
function Zt(e) {
  let t = (
    /*annotation*/
    e[32].id
  ), n, o, i = Jt(e);
  return {
    c() {
      i.c(), n = he();
    },
    m(r, s) {
      i.m(r, s), I(r, n, s), o = !0;
    },
    p(r, s) {
      s[0] & /*$store*/
      8192 && x(t, t = /*annotation*/
      r[32].id) ? (ye(), z(i, 1, 1, j), we(), i = Jt(r), i.c(), F(i, 1), i.m(n.parentNode, n)) : i.p(r, s);
    },
    i(r) {
      o || (F(i), o = !0);
    },
    o(r) {
      z(i), o = !1;
    },
    d(r) {
      r && O(n), i.d(r);
    }
  };
}
function ji(e) {
  let t, n;
  return t = new Vi({
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
      me(t.$$.fragment);
    },
    m(o, i) {
      fe(t, o, i), n = !0;
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
      z(t.$$.fragment, o), n = !1;
    },
    d(o) {
      ue(t, o);
    }
  };
}
function qi(e) {
  let t, n;
  return t = new Yi({
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
      me(t.$$.fragment);
    },
    m(o, i) {
      fe(t, o, i), n = !0;
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
      z(t.$$.fragment, o), n = !1;
    },
    d(o) {
      ue(t, o);
    }
  };
}
function Ki(e) {
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
      me(t.$$.fragment);
    },
    m(o, i) {
      fe(t, o, i), n = !0;
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
      z(t.$$.fragment, o), n = !1;
    },
    d(o) {
      ue(t, o);
    }
  };
}
function Wi(e) {
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
      me(t.$$.fragment);
    },
    m(o, i) {
      fe(t, o, i), n = !0;
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
      z(t.$$.fragment, o), n = !1;
    },
    d(o) {
      ue(t, o);
    }
  };
}
function Jt(e) {
  let t, n, o, i;
  const r = [Wi, Ki, qi, ji], s = [];
  function a(l, u) {
    return (
      /*selector*/
      l[35].type === q.ELLIPSE ? 0 : (
        /*selector*/
        l[35].type === q.RECTANGLE ? 1 : (
          /*selector*/
          l[35].type === q.POLYGON ? 2 : (
            /*selector*/
            l[35].type === q.FREEHAND ? 3 : -1
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
      ~t && s[t].m(l, u), I(l, o, u), i = !0;
    },
    p(l, u) {
      let m = t;
      t = a(l), t === m ? ~t && s[t].p(l, u) : (n && (ye(), z(s[m], 1, 1, () => {
        s[m] = null;
      }), we()), ~t ? (n = s[t], n ? n.p(l, u) : (n = s[t] = r[t](l), n.c()), F(n, 1), n.m(o.parentNode, o)) : n = null);
    },
    i(l) {
      i || (F(n), i = !0);
    },
    o(l) {
      z(n), i = !1;
    },
    d(l) {
      ~t && s[t].d(l), l && O(o);
    }
  };
}
function Qt(e) {
  let t = !/*isEditable*/
  e[7](
    /*annotation*/
    e[32]
  ), n, o, i = t && Zt(ct(e));
  return {
    c() {
      i && i.c(), n = he();
    },
    m(r, s) {
      i && i.m(r, s), I(r, n, s), o = !0;
    },
    p(r, s) {
      s[0] & /*isEditable, $store*/
      8320 && (t = !/*isEditable*/
      r[7](
        /*annotation*/
        r[32]
      )), t ? i ? (i.p(ct(r), s), s[0] & /*isEditable, $store*/
      8320 && F(i, 1)) : (i = Zt(ct(r)), i.c(), F(i, 1), i.m(n.parentNode, n)) : i && (ye(), z(i, 1, 1, () => {
        i = null;
      }), we());
    },
    i(r) {
      o || (F(i), o = !0);
    },
    o(r) {
      z(i), o = !1;
    },
    d(r) {
      i && i.d(r), r && O(n);
    }
  };
}
function xt(e) {
  let t, n, o, i;
  const r = [Ji, Zi], s = [];
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
      ~t && s[t].m(l, u), I(l, o, u), i = !0;
    },
    p(l, u) {
      let m = t;
      t = a(l), t === m ? ~t && s[t].p(l, u) : (n && (ye(), z(s[m], 1, 1, () => {
        s[m] = null;
      }), we()), ~t ? (n = s[t], n ? n.p(l, u) : (n = s[t] = r[t](l), n.c()), F(n, 1), n.m(o.parentNode, o)) : n = null);
    },
    i(l) {
      i || (F(n), i = !0);
    },
    o(l) {
      z(n), i = !1;
    },
    d(l) {
      ~t && s[t].d(l), l && O(o);
    }
  };
}
function Zi(e) {
  let t = (
    /*toolName*/
    e[2]
  ), n, o, i = $t(e);
  return {
    c() {
      i.c(), n = he();
    },
    m(r, s) {
      i.m(r, s), I(r, n, s), o = !0;
    },
    p(r, s) {
      s[0] & /*toolName*/
      4 && x(t, t = /*toolName*/
      r[2]) ? (ye(), z(i, 1, 1, j), we(), i = $t(r), i.c(), F(i, 1), i.m(n.parentNode, n)) : i.p(r, s);
    },
    i(r) {
      o || (F(i), o = !0);
    },
    o(r) {
      z(i), o = !1;
    },
    d(r) {
      r && O(n), i.d(r);
    }
  };
}
function Ji(e) {
  let t, n, o = (
    /*editableAnnotations*/
    e[6]
  ), i = [];
  for (let s = 0; s < o.length; s += 1)
    i[s] = tn(Kt(e, o, s));
  const r = (s) => z(i[s], 1, 1, () => {
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
      I(s, t, a), n = !0;
    },
    p(s, a) {
      if (a[0] & /*editableAnnotations, drawingEl, style, transform, $scale, onChangeSelected*/
      279634) {
        o = /*editableAnnotations*/
        s[6];
        let l;
        for (l = 0; l < o.length; l += 1) {
          const u = Kt(s, o, l);
          i[l] ? (i[l].p(u, a), F(i[l], 1)) : (i[l] = tn(u), i[l].c(), F(i[l], 1), i[l].m(t.parentNode, t));
        }
        for (ye(), l = o.length; l < i.length; l += 1)
          r(l);
        we();
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
        z(i[a]);
      n = !1;
    },
    d(s) {
      _t(i, s), s && O(t);
    }
  };
}
function $t(e) {
  let t, n;
  return t = new ci({
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
      me(t.$$.fragment);
    },
    m(o, i) {
      fe(t, o, i), n = !0;
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
      z(t.$$.fragment, o), n = !1;
    },
    d(o) {
      ue(t, o);
    }
  };
}
function en(e) {
  let t, n;
  return t = new li({
    props: {
      target: (
        /*drawingEl*/
        e[4]
      ),
      editor: Ut(
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
    W(
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
      me(t.$$.fragment);
    },
    m(o, i) {
      fe(t, o, i), n = !0;
    },
    p(o, i) {
      e = o;
      const r = {};
      i[0] & /*drawingEl*/
      16 && (r.target = /*drawingEl*/
      e[4]), i[0] & /*editableAnnotations*/
      64 && (r.editor = Ut(
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
      z(t.$$.fragment, o), n = !1;
    },
    d(o) {
      ue(t, o);
    }
  };
}
function tn(e) {
  let t = (
    /*editable*/
    e[29].id
  ), n, o, i = en(e);
  return {
    c() {
      i.c(), n = he();
    },
    m(r, s) {
      i.m(r, s), I(r, n, s), o = !0;
    },
    p(r, s) {
      s[0] & /*editableAnnotations*/
      64 && x(t, t = /*editable*/
      r[29].id) ? (ye(), z(i, 1, 1, j), we(), i = en(r), i.c(), F(i, 1), i.m(n.parentNode, n)) : i.p(r, s);
    },
    i(r) {
      o || (F(i), o = !0);
    },
    o(r) {
      z(i), o = !1;
    },
    d(r) {
      r && O(n), i.d(r);
    }
  };
}
function Qi(e) {
  let t, n, o, i, r, s, a = (
    /*$store*/
    e[13]
  ), l = [];
  for (let f = 0; f < a.length; f += 1)
    l[f] = Qt(Wt(e, a, f));
  const u = (f) => z(l[f], 1, 1, () => {
    l[f] = null;
  });
  let m = (
    /*drawingEl*/
    e[4] && xt(e)
  );
  return {
    c() {
      t = C("svg"), n = C("g");
      for (let f = 0; f < l.length; f += 1)
        l[f].c();
      o = C("g"), m && m.c(), c(o, "class", "drawing"), c(t, "class", "a9s-annotationlayer"), Mt(
        t,
        "drawing",
        /*tool*/
        e[12]
      );
    },
    m(f, h) {
      I(f, t, h), _e(t, n);
      for (let d = 0; d < l.length; d += 1)
        l[d] && l[d].m(n, null);
      _e(t, o), m && m.m(o, null), e[25](o), e[26](t), i = !0, r || (s = [
        Z(t, "pointerup", function() {
          W(
            /*onPointerUp*/
            e[8]
          ) && e[8].apply(this, arguments);
        }),
        Z(t, "pointerdown", function() {
          W(
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
          const g = Wt(e, a, d);
          l[d] ? (l[d].p(g, h), F(l[d], 1)) : (l[d] = Qt(g), l[d].c(), F(l[d], 1), l[d].m(n, null));
        }
        for (ye(), d = a.length; d < l.length; d += 1)
          u(d);
        we();
      }
      /*drawingEl*/
      e[4] ? m ? (m.p(e, h), h[0] & /*drawingEl*/
      16 && F(m, 1)) : (m = xt(e), m.c(), F(m, 1), m.m(o, null)) : m && (ye(), z(m, 1, 1, () => {
        m = null;
      }), we()), (!i || h[0] & /*tool*/
      4096) && Mt(
        t,
        "drawing",
        /*tool*/
        e[12]
      );
    },
    i(f) {
      if (!i) {
        for (let h = 0; h < a.length; h += 1)
          F(l[h]);
        F(m), i = !0;
      }
    },
    o(f) {
      l = l.filter(Boolean);
      for (let h = 0; h < l.length; h += 1)
        z(l[h]);
      z(m), i = !1;
    },
    d(f) {
      f && O(t), _t(l, f), m && m.d(), e[25](null), e[26](null), r = !1, de(s);
    }
  };
}
function xi(e, t, n) {
  let o, i, r, s, a, l, u, m, f, h, d = j, g = () => (d(), d = ln(_, (k) => n(14, h = k)), _);
  e.$$.on_destroy.push(() => d());
  let { drawingEnabled: y } = t, { image: S } = t, { preferredDrawingMode: b } = t, { state: p } = t, { style: A = void 0 } = t, { toolName: T = pt().length > 0 ? pt()[0] : void 0 } = t, { user: M } = t, D, U, _;
  Le(() => g(n(5, _ = gi(S, U))));
  const { selection: w, store: E } = p;
  Tt(e, w, (k) => n(24, m = k)), Tt(e, E, (k) => n(13, f = k));
  let L = null, P = null;
  const Y = (k) => {
    E.unobserve(L);
    const V = k.filter(({ editable: N }) => N).map(({ id: N }) => N);
    V.length > 0 ? (n(6, P = V.map((N) => E.getAnnotation(N))), L = (N) => {
      const { updated: le } = N.changes;
      n(6, P = le.map((K) => K.newValue));
    }, E.observe(L, { annotations: V })) : n(6, P = null);
  }, R = (k) => {
    const V = mn(), N = {
      id: V,
      bodies: [],
      target: {
        annotation: V,
        selector: k.detail,
        creator: M,
        created: /* @__PURE__ */ new Date()
      }
    };
    E.addAnnotation(N), w.setSelected(N.id);
  }, X = (k) => (V) => {
    var ge;
    const { target: N } = k, le = 10 * 60 * 1e3, K = ((ge = N.creator) == null ? void 0 : ge.id) !== M.id || !N.created || (/* @__PURE__ */ new Date()).getTime() - N.created.getTime() > le;
    E.updateTarget({
      ...N,
      selector: V.detail,
      created: K ? N.created : /* @__PURE__ */ new Date(),
      updated: K ? /* @__PURE__ */ new Date() : null,
      updatedBy: K ? M : null
    });
  };
  function se(k) {
    Ke[k ? "unshift" : "push"](() => {
      D = k, n(4, D);
    });
  }
  function H(k) {
    Ke[k ? "unshift" : "push"](() => {
      U = k, n(3, U);
    });
  }
  return e.$$set = (k) => {
    "drawingEnabled" in k && n(0, y = k.drawingEnabled), "image" in k && n(19, S = k.image), "preferredDrawingMode" in k && n(20, b = k.preferredDrawingMode), "state" in k && n(21, p = k.state), "style" in k && n(1, A = k.style), "toolName" in k && n(2, T = k.toolName), "user" in k && n(22, M = k.user);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*toolName*/
    4 && n(12, { tool: o, opts: i } = wn(T), o, (n(23, i), n(2, T))), e.$$.dirty[0] & /*opts, preferredDrawingMode*/
    9437184 && n(11, r = (i == null ? void 0 : i.drawingMode) || b), e.$$.dirty[0] & /*svgEl*/
    8 && n(10, s = Gi(U)), e.$$.dirty[0] & /*svgEl*/
    8 && n(9, { onPointerDown: a, onPointerUp: l } = Fi(U, E), a, (n(8, l), n(3, U))), e.$$.dirty[0] & /*$selection*/
    16777216 && n(7, u = (k) => m.selected.find((V) => V.id === k.id && V.editable)), e.$$.dirty[0] & /*$selection*/
    16777216 && Y(m.selected);
  }, [
    y,
    A,
    T,
    U,
    D,
    _,
    P,
    u,
    l,
    a,
    s,
    r,
    o,
    f,
    h,
    w,
    E,
    R,
    X,
    S,
    b,
    p,
    M,
    i,
    m,
    se,
    H
  ];
}
class $i extends oe {
  constructor(t) {
    super(), ne(
      this,
      t,
      xi,
      Qi,
      x,
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
function er(e, t, n, o, i) {
  bn(e, t, n || 0, o || e.length - 1, i || tr);
}
function bn(e, t, n, o, i) {
  for (; o > n; ) {
    if (o - n > 600) {
      var r = o - n + 1, s = t - n + 1, a = Math.log(r), l = 0.5 * Math.exp(2 * a / 3), u = 0.5 * Math.sqrt(a * l * (r - l) / r) * (s - r / 2 < 0 ? -1 : 1), m = Math.max(n, Math.floor(t - s * l / r + u)), f = Math.min(o, Math.floor(t + (r - s) * l / r + u));
      bn(e, t, m, f, i);
    }
    var h = e[t], d = n, g = o;
    for (He(e, n, t), i(e[o], h) > 0 && He(e, n, o); d < g; ) {
      for (He(e, d, g), d++, g--; i(e[d], h) < 0; )
        d++;
      for (; i(e[g], h) > 0; )
        g--;
    }
    i(e[n], h) === 0 ? He(e, n, g) : (g++, He(e, g, o)), g <= t && (n = g + 1), t <= g && (o = g - 1);
  }
}
function He(e, t, n) {
  var o = e[t];
  e[t] = e[n], e[n] = o;
}
function tr(e, t) {
  return e < t ? -1 : e > t ? 1 : 0;
}
class nr {
  constructor(t = 9) {
    this._maxEntries = Math.max(4, t), this._minEntries = Math.max(2, Math.ceil(this._maxEntries * 0.4)), this.clear();
  }
  all() {
    return this._all(this.data, []);
  }
  search(t) {
    let n = this.data;
    const o = [];
    if (!$e(t, n))
      return o;
    const i = this.toBBox, r = [];
    for (; n; ) {
      for (let s = 0; s < n.children.length; s++) {
        const a = n.children[s], l = n.leaf ? i(a) : a;
        $e(t, l) && (n.leaf ? o.push(a) : ut(t, l) ? this._all(a, o) : r.push(a));
      }
      n = r.pop();
    }
    return o;
  }
  collides(t) {
    let n = this.data;
    if (!$e(t, n))
      return !1;
    const o = [];
    for (; n; ) {
      for (let i = 0; i < n.children.length; i++) {
        const r = n.children[i], s = n.leaf ? this.toBBox(r) : r;
        if ($e(t, s)) {
          if (n.leaf || ut(t, s))
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
    return this.data = Ce([]), this;
  }
  remove(t, n) {
    if (!t)
      return this;
    let o = this.data;
    const i = this.toBBox(t), r = [], s = [];
    let a, l, u;
    for (; o || r.length; ) {
      if (o || (o = r.pop(), l = r[r.length - 1], a = s.pop(), u = !0), o.leaf) {
        const m = or(t, o.children, n);
        if (m !== -1)
          return o.children.splice(m, 1), r.push(o), this._condense(r), this;
      }
      !u && !o.leaf && ut(o, i) ? (r.push(o), s.push(a), a = 0, l = o, o = o.children[0]) : l ? (a++, o = l.children[a], u = !1) : o = null;
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
      return a = Ce(t.slice(n, o + 1)), Re(a, this.toBBox), a;
    i || (i = Math.ceil(Math.log(r) / Math.log(s)), s = Math.ceil(r / Math.pow(s, i - 1))), a = Ce([]), a.leaf = !1, a.height = i;
    const l = Math.ceil(r / s), u = l * Math.ceil(Math.sqrt(s));
    nn(t, n, o, u, this.compareMinX);
    for (let m = n; m <= o; m += u) {
      const f = Math.min(m + u - 1, o);
      nn(t, m, f, l, this.compareMinY);
      for (let h = m; h <= f; h += l) {
        const d = Math.min(h + l - 1, f);
        a.children.push(this._build(t, h, d, i - 1));
      }
    }
    return Re(a, this.toBBox), a;
  }
  _chooseSubtree(t, n, o, i) {
    for (; i.push(n), !(n.leaf || i.length - 1 === o); ) {
      let r = 1 / 0, s = 1 / 0, a;
      for (let l = 0; l < n.children.length; l++) {
        const u = n.children[l], m = ft(u), f = sr(t, u) - m;
        f < s ? (s = f, r = m < r ? m : r, a = u) : f === s && m < r && (r = m, a = u);
      }
      n = a || n.children[0];
    }
    return n;
  }
  _insert(t, n, o) {
    const i = o ? t : this.toBBox(t), r = [], s = this._chooseSubtree(i, this.data, n, r);
    for (s.children.push(t), ze(s, i); n >= 0 && r[n].children.length > this._maxEntries; )
      this._split(r, n), n--;
    this._adjustParentBBoxes(i, r, n);
  }
  // split overflowed node into two
  _split(t, n) {
    const o = t[n], i = o.children.length, r = this._minEntries;
    this._chooseSplitAxis(o, r, i);
    const s = this._chooseSplitIndex(o, r, i), a = Ce(o.children.splice(s, o.children.length - s));
    a.height = o.height, a.leaf = o.leaf, Re(o, this.toBBox), Re(a, this.toBBox), n ? t[n - 1].children.push(a) : this._splitRoot(o, a);
  }
  _splitRoot(t, n) {
    this.data = Ce([t, n]), this.data.height = t.height + 1, this.data.leaf = !1, Re(this.data, this.toBBox);
  }
  _chooseSplitIndex(t, n, o) {
    let i, r = 1 / 0, s = 1 / 0;
    for (let a = n; a <= o - n; a++) {
      const l = Fe(t, 0, a, this.toBBox), u = Fe(t, a, o, this.toBBox), m = lr(l, u), f = ft(l) + ft(u);
      m < r ? (r = m, i = a, s = f < s ? f : s) : m === r && f < s && (s = f, i = a);
    }
    return i || o - n;
  }
  // sorts node children by the best axis for split
  _chooseSplitAxis(t, n, o) {
    const i = t.leaf ? this.compareMinX : ir, r = t.leaf ? this.compareMinY : rr, s = this._allDistMargin(t, n, o, i), a = this._allDistMargin(t, n, o, r);
    s < a && t.children.sort(i);
  }
  // total margin of all possible split distributions where each node is at least m full
  _allDistMargin(t, n, o, i) {
    t.children.sort(i);
    const r = this.toBBox, s = Fe(t, 0, n, r), a = Fe(t, o - n, o, r);
    let l = xe(s) + xe(a);
    for (let u = n; u < o - n; u++) {
      const m = t.children[u];
      ze(s, t.leaf ? r(m) : m), l += xe(s);
    }
    for (let u = o - n - 1; u >= n; u--) {
      const m = t.children[u];
      ze(a, t.leaf ? r(m) : m), l += xe(a);
    }
    return l;
  }
  _adjustParentBBoxes(t, n, o) {
    for (let i = o; i >= 0; i--)
      ze(n[i], t);
  }
  _condense(t) {
    for (let n = t.length - 1, o; n >= 0; n--)
      t[n].children.length === 0 ? n > 0 ? (o = t[n - 1].children, o.splice(o.indexOf(t[n]), 1)) : this.clear() : Re(t[n], this.toBBox);
  }
}
function or(e, t, n) {
  if (!n)
    return t.indexOf(e);
  for (let o = 0; o < t.length; o++)
    if (n(e, t[o]))
      return o;
  return -1;
}
function Re(e, t) {
  Fe(e, 0, e.children.length, t, e);
}
function Fe(e, t, n, o, i) {
  i || (i = Ce(null)), i.minX = 1 / 0, i.minY = 1 / 0, i.maxX = -1 / 0, i.maxY = -1 / 0;
  for (let r = t; r < n; r++) {
    const s = e.children[r];
    ze(i, e.leaf ? o(s) : s);
  }
  return i;
}
function ze(e, t) {
  return e.minX = Math.min(e.minX, t.minX), e.minY = Math.min(e.minY, t.minY), e.maxX = Math.max(e.maxX, t.maxX), e.maxY = Math.max(e.maxY, t.maxY), e;
}
function ir(e, t) {
  return e.minX - t.minX;
}
function rr(e, t) {
  return e.minY - t.minY;
}
function ft(e) {
  return (e.maxX - e.minX) * (e.maxY - e.minY);
}
function xe(e) {
  return e.maxX - e.minX + (e.maxY - e.minY);
}
function sr(e, t) {
  return (Math.max(t.maxX, e.maxX) - Math.min(t.minX, e.minX)) * (Math.max(t.maxY, e.maxY) - Math.min(t.minY, e.minY));
}
function lr(e, t) {
  const n = Math.max(e.minX, t.minX), o = Math.max(e.minY, t.minY), i = Math.min(e.maxX, t.maxX), r = Math.min(e.maxY, t.maxY);
  return Math.max(0, i - n) * Math.max(0, r - o);
}
function ut(e, t) {
  return e.minX <= t.minX && e.minY <= t.minY && t.maxX <= e.maxX && t.maxY <= e.maxY;
}
function $e(e, t) {
  return t.minX <= e.maxX && t.minY <= e.maxY && t.maxX >= e.minX && t.maxY >= e.minY;
}
function Ce(e) {
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
function nn(e, t, n, o, i) {
  const r = [t, n];
  for (; r.length; ) {
    if (n = r.pop(), t = r.pop(), n - t <= o)
      continue;
    const s = t + Math.ceil((n - t) / o / 2) * o;
    er(e, s, t, n, i), r.push(t, s, s, n);
  }
}
const ar = () => {
  const e = new nr(), t = /* @__PURE__ */ new Map(), n = () => [...t.values()], o = () => {
    e.clear(), t.clear();
  }, i = (f) => {
    const { minX: h, minY: d, maxX: g, maxY: y } = f.selector.geometry.bounds, S = { minX: h, minY: d, maxX: g, maxY: y, target: f };
    e.insert(S), t.set(f.annotation, S);
  }, r = (f) => {
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
      }).map((y) => y.target).filter((y) => y.selector.type === q.RECTANGLE || Yn(y.selector, f, h));
      if (g.length > 0)
        return g.sort((y, S) => mt(y.selector) - mt(S.selector)), g[0];
    },
    getIntersecting: (f, h, d, g) => e.search({
      minX: f,
      minY: h,
      maxX: f + d,
      maxY: h + g
    }).map((y) => y.target),
    insert: i,
    remove: r,
    set: (f, h = !0) => {
      h && o();
      const d = f.map((g) => {
        const { minX: y, minY: S, maxX: b, maxY: p } = g.selector.geometry.bounds;
        return { minX: y, minY: S, maxX: b, maxY: p, target: g };
      });
      d.forEach((g) => t.set(g.target.annotation, g)), e.load(d);
    },
    size: () => e.all().length,
    update: (f, h) => {
      r(f), i(h);
    }
  };
}, cr = (e) => {
  const t = Eo(), n = ar(), o = fo(t, e.pointerSelectAction), i = co(t), r = Lo();
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
}, fr = (e) => {
  const t = cr(e);
  return {
    ...t,
    store: Ao(t.store)
  };
}, ur = (e) => {
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
}, dr = (e) => {
  const t = ur(e), n = t > 0.6 ? "dark" : "light";
  return console.log(`[Annotorious] Image brightness: ${t.toFixed(1)}. Setting ${n} theme.`), n;
}, on = (e, t, n) => t.setAttribute("data-theme", n === "auto" ? dr(e) : n), hr = (e, t) => ({
  ...e,
  drawingEnabled: e.drawingEnabled === void 0 ? t.drawingEnabled : e.drawingEnabled,
  drawingMode: e.drawingMode || t.drawingMode,
  pointerSelectAction: e.pointerSelectAction || t.pointerSelectAction,
  theme: e.theme || t.theme
}), rn = navigator.userAgent.indexOf("Mac OS X") !== -1, mr = (e, t) => {
  const n = t || document, o = (s) => {
    s.key === "Z" && s.ctrlKey ? e.undo() : s.key === "Y" && s.ctrlKey && e.redo();
  }, i = (s) => {
    s.key === "z" && s.metaKey && (s.shiftKey ? e.redo() : e.undo());
  }, r = () => {
    rn ? n.removeEventListener("keydown", i) : n.removeEventListener("keydown", o);
  };
  return rn ? n.addEventListener("keydown", i) : n.addEventListener("keydown", o), {
    destroy: r
  };
};
const yr = (e, t = {}) => {
  if (!e)
    throw "Missing argument: image";
  const n = typeof e == "string" ? document.getElementById(e) : e, o = hr(t, {
    drawingEnabled: !0,
    drawingMode: "drag",
    pointerSelectAction: gn.EDIT,
    theme: "light"
  }), i = fr(o), { selection: r, store: s } = i, a = Mo(s), l = vo(
    i,
    a,
    o.adapter,
    o.autoSave
  ), u = document.createElement("DIV");
  u.style.position = "relative", u.style.display = "inline-block", n.style.display = "block", n.parentNode.insertBefore(u, n), u.appendChild(n);
  const m = mr(a);
  let f = Yo();
  on(n, u, o.theme);
  const h = new $i({
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
  h.$on("click", (_) => {
    const { originalEvent: w, annotation: E } = _.detail;
    E ? r.clickSelect(E.id, w) : r.isEmpty() || r.clear();
  });
  const d = Oo(i, a, o.adapter), g = () => {
    h.$destroy(), u.parentNode.insertBefore(n, u), u.parentNode.removeChild(u), m.destroy(), a.destroy();
  }, y = () => f, S = (_, w, E) => Li(_, w, E), b = (_, w) => ni(_, w), p = (_) => {
    if (!wn(_))
      throw `No drawing tool named ${_}`;
    h.$set({ toolName: _ });
  }, A = (_) => h.$set({ drawingEnabled: _ }), T = (_) => {
    console.warn("Filter not implemented yet");
  }, M = (_) => h.$set({ style: _ }), D = (_) => on(n, u, _), U = (_) => {
    f = _, h.$set({ user: _ });
  };
  return {
    ...d,
    destroy: g,
    getUser: y,
    listDrawingTools: pt,
    on: l.on,
    off: l.off,
    registerDrawingTool: S,
    registerShapeEditor: b,
    setDrawingEnabled: A,
    setDrawingTool: p,
    setFilter: T,
    setStyle: M,
    setTheme: D,
    setUser: U,
    state: i
  };
};
export {
  tt as Editor,
  li as EditorMount,
  Qo as EllipseEditor,
  ti as FreehandEditor,
  v as Handle,
  _r as IdentityTransform,
  Fo as PolygonEditor,
  Ko as RectangleEditor,
  Cn as RectangleUtil,
  di as RubberbandRectangle,
  $i as SVGAnnotationLayer,
  q as ShapeType,
  ci as ToolMount,
  gr as W3CImageFormat,
  Fi as addEventListeners,
  Me as boundsFromPoints,
  mt as computeArea,
  yr as createImageAnnotator,
  cr as createImageAnnotatorState,
  Gi as createSVGTransform,
  fr as createSvelteImageAnnotatorState,
  dr as detectTheme,
  st as distance,
  gi as enableResponsive,
  hr as fillDefaults,
  Ut as getEditor,
  wn as getTool,
  mr as initKeyboardCommands,
  Yn as intersects,
  pr as isTouch,
  pt as listDrawingTools,
  Nn as parseFragmentSelector,
  no as parseSVGSelector,
  No as parseW3CImageAnnotation,
  ni as registerEditor,
  wt as registerShapeUtil,
  Li as registerTool,
  ur as sampleBrightness,
  Un as serializeFragmentSelector,
  oo as serializeSVGSelector,
  Uo as serializeW3CImageAnnotation,
  on as setTheme
};
//# sourceMappingURL=annotorious.es.js.map
