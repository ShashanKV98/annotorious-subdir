function q() {
}
function wn(e, t) {
  for (const n in t)
    e[n] = t[n];
  return e;
}
function on(e) {
  return e();
}
function At() {
  return /* @__PURE__ */ Object.create(null);
}
function de(e) {
  e.forEach(on);
}
function W(e) {
  return typeof e == "function";
}
function x(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function bn(e) {
  return Object.keys(e).length === 0;
}
function rn(e, ...t) {
  if (e == null)
    return q;
  const n = e.subscribe(...t);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function St(e, t, n) {
  e.$$.on_destroy.push(rn(t, n));
}
function En(e, t, n, o) {
  if (e) {
    const i = sn(e, t, n, o);
    return e[0](i);
  }
}
function sn(e, t, n, o) {
  return e[1] && o ? wn(n.ctx.slice(), e[1](o(t))) : n.ctx;
}
function An(e, t, n, o) {
  if (e[2] && o) {
    const i = e[2](o(n));
    if (t.dirty === void 0)
      return i;
    if (typeof i == "object") {
      const r = [], s = Math.max(t.dirty.length, i.length);
      for (let l = 0; l < s; l += 1)
        r[l] = t.dirty[l] | i[l];
      return r;
    }
    return t.dirty | i;
  }
  return t.dirty;
}
function Sn(e, t, n, o, i, r) {
  if (i) {
    const s = sn(t, n, o, r);
    e.p(s, i);
  }
}
function Tn(e) {
  if (e.ctx.length > 32) {
    const t = [], n = e.ctx.length / 32;
    for (let o = 0; o < n; o++)
      t[o] = -1;
    return t;
  }
  return -1;
}
function pe(e, t) {
  e.appendChild(t);
}
function I(e, t, n) {
  e.insertBefore(t, n || null);
}
function k(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function yt(e, t) {
  for (let n = 0; n < e.length; n += 1)
    e[n] && e[n].d(t);
}
function C(e) {
  return document.createElementNS("http://www.w3.org/2000/svg", e);
}
function ln(e) {
  return document.createTextNode(e);
}
function te() {
  return ln(" ");
}
function we() {
  return ln("");
}
function Z(e, t, n, o) {
  return e.addEventListener(t, n, o), () => e.removeEventListener(t, n, o);
}
function c(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function Mn(e) {
  return Array.from(e.childNodes);
}
function Tt(e, t, n) {
  e.classList[n ? "add" : "remove"](t);
}
function Ln(e, t, { bubbles: n = !1, cancelable: o = !1 } = {}) {
  const i = document.createEvent("CustomEvent");
  return i.initCustomEvent(e, n, o, t), i;
}
let Ke;
function qe(e) {
  Ke = e;
}
function an() {
  if (!Ke)
    throw new Error("Function called outside component initialization");
  return Ke;
}
function Le(e) {
  an().$$.on_mount.push(e);
}
function Ee() {
  const e = an();
  return (t, n, { cancelable: o = !1 } = {}) => {
    const i = e.$$.callbacks[t];
    if (i) {
      const r = Ln(t, n, { cancelable: o });
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
const Xe = [], We = [];
let Ne = [];
const Mt = [], On = /* @__PURE__ */ Promise.resolve();
let dt = !1;
function vn() {
  dt || (dt = !0, On.then(cn));
}
function ht(e) {
  Ne.push(e);
}
const it = /* @__PURE__ */ new Set();
let Pe = 0;
function cn() {
  if (Pe !== 0)
    return;
  const e = Ke;
  do {
    try {
      for (; Pe < Xe.length; ) {
        const t = Xe[Pe];
        Pe++, qe(t), kn(t.$$);
      }
    } catch (t) {
      throw Xe.length = 0, Pe = 0, t;
    }
    for (qe(null), Xe.length = 0, Pe = 0; We.length; )
      We.pop()();
    for (let t = 0; t < Ne.length; t += 1) {
      const n = Ne[t];
      it.has(n) || (it.add(n), n());
    }
    Ne.length = 0;
  } while (Xe.length);
  for (; Mt.length; )
    Mt.pop()();
  dt = !1, it.clear(), qe(e);
}
function kn(e) {
  if (e.fragment !== null) {
    e.update(), de(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(ht);
  }
}
function In(e) {
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
function _e() {
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
function he(e) {
  e && e.c();
}
function fe(e, t, n, o) {
  const { fragment: i, after_update: r } = e.$$;
  i && i.m(t, n), o || ht(() => {
    const s = e.$$.on_mount.map(on).filter(W);
    e.$$.on_destroy ? e.$$.on_destroy.push(...s) : de(s), e.$$.on_mount = [];
  }), r.forEach(ht);
}
function ue(e, t) {
  const n = e.$$;
  n.fragment !== null && (In(n.after_update), de(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Pn(e, t) {
  e.$$.dirty[0] === -1 && (Xe.push(e), vn(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function ne(e, t, n, o, i, r, s, l = [-1]) {
  const a = Ke;
  qe(e);
  const d = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: r,
    update: q,
    not_equal: i,
    bound: At(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (a ? a.$$.context : [])),
    // everything else
    callbacks: At(),
    dirty: l,
    skip_bound: !1,
    root: t.target || a.$$.root
  };
  s && s(d.root);
  let h = !1;
  if (d.ctx = n ? n(e, t.props || {}, (f, m, ...u) => {
    const g = u.length ? u[0] : m;
    return d.ctx && i(d.ctx[f], d.ctx[f] = g) && (!d.skip_bound && d.bound[f] && d.bound[f](g), h && Pn(e, f)), m;
  }) : [], d.update(), h = !0, de(d.before_update), d.fragment = o ? o(d.ctx) : !1, t.target) {
    if (t.hydrate) {
      const f = Mn(t.target);
      d.fragment && d.fragment.l(f), f.forEach(k);
    } else
      d.fragment && d.fragment.c();
    t.intro && F(e.$$.fragment), fe(e, t.target, t.anchor, t.customElement), cn();
  }
  qe(a);
}
class oe {
  $destroy() {
    ue(this, 1), this.$destroy = q;
  }
  $on(t, n) {
    if (!W(n))
      return q;
    const o = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return o.push(n), () => {
      const i = o.indexOf(n);
      i !== -1 && o.splice(i, 1);
    };
  }
  $set(t) {
    this.$$set && !bn(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
var j = /* @__PURE__ */ ((e) => (e.ELLIPSE = "ELLIPSE", e.POLYGON = "POLYGON", e.RECTANGLE = "RECTANGLE", e.FREEHAND = "FREEHAND", e))(j || {});
const _t = {}, tt = (e, t) => _t[e] = t, mt = (e) => _t[e.type].area(e), Bn = (e, t, n) => _t[e.type].intersects(e, t, n), Me = (e) => {
  let t = 1 / 0, n = 1 / 0, o = -1 / 0, i = -1 / 0;
  return e.forEach(([r, s]) => {
    t = Math.min(t, r), n = Math.min(n, s), o = Math.max(o, r), i = Math.max(i, s);
  }), { minX: t, minY: n, maxX: o, maxY: i };
}, Dn = {
  area: (e) => Math.PI * e.geometry.rx * e.geometry.ry,
  intersects: (e, t, n) => {
    const { cx: o, cy: i, rx: r, ry: s } = e.geometry, l = 0, a = Math.cos(l), d = Math.sin(l), h = t - o, f = n - i, m = a * h + d * f, u = d * h - a * f;
    return m * m / (r * r) + u * u / (s * s) <= 1;
  }
};
tt(j.ELLIPSE, Dn);
const Yn = {
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
      const l = o[r][0], a = o[r][1], d = o[s][0], h = o[s][1];
      a > n != h > n && t < (d - l) * (n - a) / (h - a) + l && (i = !i);
    }
    return i;
  }
};
tt(j.POLYGON, Yn);
const Rn = {
  area: (e) => e.geometry.w * e.geometry.h,
  intersects: (e, t, n) => t >= e.geometry.x && t <= e.geometry.x + e.geometry.w && n >= e.geometry.y && n <= e.geometry.y + e.geometry.h
};
tt(j.RECTANGLE, Rn);
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
      const l = o[r][0], a = o[r][1], d = o[s][0], h = o[s][1];
      a > n != h > n && t < (d - l) * (n - a) / (h - a) + l && (i = !i);
    }
    return i;
  }
};
tt(j.FREEHAND, Xn);
const Cn = (e, t = !1) => {
  const n = typeof e == "string" ? e : e.value, o = /^(xywh)=(pixel|percent)?:?(.+?),(.+?),(.+?),(.+)*/g, i = [...n.matchAll(o)][0], [r, s, l, a, d, h, f] = i;
  if (s !== "xywh")
    throw new Error("Unsupported MediaFragment: " + n);
  if (l && l !== "pixel")
    throw new Error(`Unsupported MediaFragment unit: ${l}`);
  const [m, u, g, w] = [a, d, h, f].map(parseFloat);
  return {
    type: j.RECTANGLE,
    geometry: {
      x: m,
      y: u,
      w: g,
      h: w,
      bounds: {
        minX: m,
        minY: t ? u - w : u,
        maxX: m + g,
        maxY: t ? u : u + w
      }
    }
  };
}, Nn = (e) => {
  const { x: t, y: n, w: o, h: i } = e;
  return {
    type: "FragmentSelector",
    conformsTo: "http://www.w3.org/TR/media-frags/",
    value: `xywh=pixel:${t},${n},${o},${i}`
  };
}, fn = "http://www.w3.org/2000/svg", Lt = (e) => {
  const t = (o) => {
    Array.from(o.attributes).forEach((i) => {
      i.name.startsWith("on") && o.removeAttribute(i.name);
    });
  }, n = e.getElementsByTagName("script");
  return Array.from(n).reverse().forEach((o) => o.parentNode.removeChild(o)), Array.from(e.querySelectorAll("*")).forEach(t), e;
}, Un = (e) => {
  const o = new XMLSerializer().serializeToString(e.documentElement).replace("<svg>", `<svg xmlns="${fn}">`);
  return new DOMParser().parseFromString(o, "image/svg+xml").documentElement;
};
function Ot(e, t, n, o = (i) => i) {
  return e * o(0.5 - t * (0.5 - n));
}
function Vn(e) {
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
function Gn(e, t) {
  return [e[0] / t, e[1] / t];
}
function Ve(e) {
  return [e[1], -e[0]];
}
function vt(e, t) {
  return e[0] * t[0] + e[1] * t[1];
}
function Hn(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}
function Fn(e) {
  return Math.hypot(e[0], e[1]);
}
function zn(e) {
  return e[0] * e[0] + e[1] * e[1];
}
function kt(e, t) {
  return zn(ie(e, t));
}
function un(e) {
  return Gn(e, Fn(e));
}
function jn(e, t) {
  return Math.hypot(e[1] - t[1], e[0] - t[0]);
}
function Ge(e, t, n) {
  let o = Math.sin(n), i = Math.cos(n), r = e[0] - t[0], s = e[1] - t[1], l = r * i - s * o, a = r * o + s * i;
  return [l + t[0], a + t[1]];
}
function gt(e, t, n) {
  return ce(e, ae(ie(t, e), n));
}
function It(e, t, n) {
  return ce(e, ae(t, n));
}
var { min: Be, PI: qn } = Math, Pt = 0.275, He = qn + 1e-4;
function Kn(e, t = {}) {
  let { size: n = 16, smoothing: o = 0.5, thinning: i = 0.5, simulatePressure: r = !0, easing: s = (H) => H, start: l = {}, end: a = {}, last: d = !1 } = t, { cap: h = !0, easing: f = (H) => H * (2 - H) } = l, { cap: m = !0, easing: u = (H) => --H * H * H + 1 } = a;
  if (e.length === 0 || n <= 0)
    return [];
  let g = e[e.length - 1].runningLength, w = l.taper === !1 ? 0 : l.taper === !0 ? Math.max(n, g) : l.taper, S = a.taper === !1 ? 0 : a.taper === !0 ? Math.max(n, g) : a.taper, E = Math.pow(n * o, 2), p = [], b = [], T = e.slice(0, 10).reduce((H, v) => {
    let V = v.pressure;
    if (r) {
      let N = Be(1, v.distance / n), le = Be(1, 1 - N);
      V = Be(1, H + (le - H) * (N * Pt));
    }
    return (H + V) / 2;
  }, e[0].pressure), M = Ot(n, i, e[e.length - 1].pressure, s), D, U = e[0].vector, y = e[0].point, _ = y, A = y, L = _, P = !1;
  for (let H = 0; H < e.length; H++) {
    let { pressure: v } = e[H], { point: V, vector: N, distance: le, runningLength: K } = e[H];
    if (H < e.length - 1 && g - K < 3)
      continue;
    if (i) {
      if (r) {
        let J = Be(1, le / n), be = Be(1, 1 - J);
        v = Be(1, T + (be - T) * (J * Pt));
      }
      M = Ot(n, i, v, s);
    } else
      M = n / 2;
    D === void 0 && (D = M);
    let me = K < w ? f(K / w) : 1, Oe = g - K < S ? u((g - K) / S) : 1;
    M = Math.max(0.01, M * Math.min(me, Oe));
    let ve = (H < e.length - 1 ? e[H + 1] : e[H]).vector, $ = H < e.length - 1 ? vt(N, ve) : 1, ke = vt(N, U) < 0 && !P, Ae = $ !== null && $ < 0;
    if (ke || Ae) {
      let J = ae(Ve(U), M);
      for (let be = 1 / 13, ge = 0; ge <= 1; ge += be)
        A = Ge(ie(V, J), V, He * ge), p.push(A), L = Ge(ce(V, J), V, He * -ge), b.push(L);
      y = A, _ = L, Ae && (P = !0);
      continue;
    }
    if (P = !1, H === e.length - 1) {
      let J = ae(Ve(N), M);
      p.push(ie(V, J)), b.push(ce(V, J));
      continue;
    }
    let Ie = ae(Ve(gt(ve, N, $)), M);
    A = ie(V, Ie), (H <= 1 || kt(y, A) > E) && (p.push(A), y = A), L = ce(V, Ie), (H <= 1 || kt(_, L) > E) && (b.push(L), _ = L), T = v, U = N;
  }
  let Y = e[0].point.slice(0, 2), R = e.length > 1 ? e[e.length - 1].point.slice(0, 2) : ce(e[0].point, [1, 1]), X = [], se = [];
  if (e.length === 1) {
    if (!(w || S) || d) {
      let H = It(Y, un(Ve(ie(Y, R))), -(D || M)), v = [];
      for (let V = 1 / 13, N = V; N <= 1; N += V)
        v.push(Ge(H, Y, He * 2 * N));
      return v;
    }
  } else {
    if (!(w || S && e.length === 1))
      if (h)
        for (let v = 1 / 13, V = v; V <= 1; V += v) {
          let N = Ge(b[0], Y, He * V);
          X.push(N);
        }
      else {
        let v = ie(p[0], b[0]), V = ae(v, 0.5), N = ae(v, 0.51);
        X.push(ie(Y, V), ie(Y, N), ce(Y, N), ce(Y, V));
      }
    let H = Ve(Vn(e[e.length - 1].vector));
    if (S || w && e.length === 1)
      se.push(R);
    else if (m) {
      let v = It(R, H, M);
      for (let V = 1 / 29, N = V; N < 1; N += V)
        se.push(Ge(v, R, He * 3 * N));
    } else
      se.push(ce(R, ae(H, M)), ce(R, ae(H, M * 0.99)), ie(R, ae(H, M * 0.99)), ie(R, ae(H, M)));
  }
  return p.concat(se, b.reverse(), X);
}
function Wn(e, t = {}) {
  var n;
  let { streamline: o = 0.5, size: i = 16, last: r = !1 } = t;
  if (e.length === 0)
    return [];
  let s = 0.15 + (1 - o) * 0.85, l = Array.isArray(e[0]) ? e : e.map(({ x: u, y: g, pressure: w = 0.5 }) => [u, g, w]);
  if (l.length === 2) {
    let u = l[1];
    l = l.slice(0, -1);
    for (let g = 1; g < 5; g++)
      l.push(gt(l[0], u, g / 4));
  }
  l.length === 1 && (l = [...l, [...ce(l[0], [1, 1]), ...l[0].slice(2)]]);
  let a = [{ point: [l[0][0], l[0][1]], pressure: l[0][2] >= 0 ? l[0][2] : 0.25, vector: [1, 1], distance: 0, runningLength: 0 }], d = !1, h = 0, f = a[0], m = l.length - 1;
  for (let u = 1; u < l.length; u++) {
    let g = r && u === m ? l[u].slice(0, 2) : gt(f.point, l[u], s);
    if (Hn(f.point, g))
      continue;
    let w = jn(g, f.point);
    if (h += w, u < m && !d) {
      if (h < i)
        continue;
      d = !0;
    }
    f = { point: g, pressure: l[u][2] >= 0 ? l[u][2] : 0.5, vector: un(ie(f.point, g)), distance: w, runningLength: h }, a.push(f);
  }
  return a[0].vector = ((n = a[1]) == null ? void 0 : n.vector) || [0, 0], a;
}
function Zn(e, t = {}) {
  return Kn(Wn(e, t), t);
}
const Ze = {
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
function Jn(e) {
  if (!e.length)
    return "";
  const t = e.reduce(
    (n, [o, i], r, s) => {
      const [l, a] = s[(r + 1) % s.length];
      return n.push(o, i, (o + l) / 2, (i + a) / 2), n;
    },
    ["M", ...e[0], "Q"]
  );
  return t.push("Z"), t.join(" ");
}
function Je(e, t) {
  const n = Zn(e, t);
  return Jn(n);
}
const Qn = (e) => {
  const n = new DOMParser().parseFromString(e, "image/svg+xml"), o = n.lookupPrefix(fn), i = n.lookupNamespaceURI(null);
  return o || i ? Lt(n).firstChild : Lt(Un(n)).firstChild;
}, xn = (e) => {
  const [t, n, o] = e.match(/(<path d=["|'])([^("|')]*)/) || [];
  if (!o)
    return;
  const i = /([MQZT])([^MQZT]*)/g, s = Array.from(o.matchAll(i)).map((l) => (l[1], l[2].trim().split(/\s+/).map(parseFloat)));
  return {
    type: j.FREEHAND,
    geometry: {
      points: s,
      bounds: Me(s)
    }
  };
}, $n = (e) => {
  const [t, n, o] = e.match(/(<polygon points=["|'])([^("|')]*)/) || [];
  if (!o)
    return;
  const i = o.split(" ").map((r) => r.split(",").map(parseFloat));
  return {
    type: j.POLYGON,
    geometry: {
      points: i,
      bounds: Me(i)
    }
  };
}, eo = (e) => {
  const t = Qn(e), n = parseFloat(t.getAttribute("cx")), o = parseFloat(t.getAttribute("cy")), i = parseFloat(t.getAttribute("rx")), r = parseFloat(t.getAttribute("ry")), s = {
    minX: n - i,
    minY: o - r,
    maxX: n + i,
    maxY: o + r
  };
  return {
    type: j.ELLIPSE,
    geometry: {
      cx: n,
      cy: o,
      rx: i,
      ry: r,
      bounds: s
    }
  };
}, to = (e) => {
  const t = typeof e == "string" ? e : e.value;
  if (t.includes("<polygon points="))
    return $n(t);
  if (t.includes("<path d="))
    return xn(t);
  if (t.includes("<ellipse "))
    return eo(t);
}, no = (e) => {
  let t;
  if (e.type === j.POLYGON) {
    const n = e.geometry, { points: o } = n;
    t = `<svg><polygon points="${o.map((i) => i.join(",")).join(" ")}" /></svg>`;
  } else if (e.type === j.FREEHAND) {
    const n = e.geometry;
    t = `<svg><path d="${Je(n.points, Ze)}"/></svg>`;
  } else if (e.type === j.ELLIPSE) {
    const n = e.geometry;
    t = `<svg><ellipse cx="${n.cx}" cy="${n.cy}" rx="${n.rx}" ry="${n.ry}" /></svg>`;
  }
  if (t)
    return { type: "SvgSelector", value: t };
  throw `Unsupported shape type: ${e.type}`;
};
let Qe;
const oo = new Uint8Array(16);
function io() {
  if (!Qe && (Qe = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Qe))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Qe(oo);
}
const ee = [];
for (let e = 0; e < 256; ++e)
  ee.push((e + 256).toString(16).slice(1));
function ro(e, t = 0) {
  return ee[e[t + 0]] + ee[e[t + 1]] + ee[e[t + 2]] + ee[e[t + 3]] + "-" + ee[e[t + 4]] + ee[e[t + 5]] + "-" + ee[e[t + 6]] + ee[e[t + 7]] + "-" + ee[e[t + 8]] + ee[e[t + 9]] + "-" + ee[e[t + 10]] + ee[e[t + 11]] + ee[e[t + 12]] + ee[e[t + 13]] + ee[e[t + 14]] + ee[e[t + 15]];
}
const so = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Bt = {
  randomUUID: so
};
function dn(e, t, n) {
  if (Bt.randomUUID && !t && !e)
    return Bt.randomUUID();
  e = e || {};
  const o = e.random || (e.rng || io)();
  if (o[6] = o[6] & 15 | 64, o[8] = o[8] & 63 | 128, t) {
    n = n || 0;
    for (let i = 0; i < 16; ++i)
      t[n + i] = o[i];
    return t;
  }
  return ro(o);
}
var Dt = Object.prototype.hasOwnProperty;
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
        if (Dt.call(e, n) && ++o && !Dt.call(t, n) || !(n in t) || !Te(e[n], t[n]))
          return !1;
      return Object.keys(t).length === o;
    }
  }
  return e !== e && t !== t;
}
function rt() {
}
function lo(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
const De = [];
function wt(e, t = rt) {
  let n;
  const o = /* @__PURE__ */ new Set();
  function i(l) {
    if (lo(e, l) && (e = l, n)) {
      const a = !De.length;
      for (const d of o)
        d[1](), De.push(d, e);
      if (a) {
        for (let d = 0; d < De.length; d += 2)
          De[d][0](De[d + 1]);
        De.length = 0;
      }
    }
  }
  function r(l) {
    i(l(e));
  }
  function s(l, a = rt) {
    const d = [l, a];
    return o.add(d), o.size === 1 && (n = t(i) || rt), l(e), () => {
      o.delete(d), o.size === 0 && n && (n(), n = null);
    };
  }
  return { set: i, update: r, subscribe: s };
}
const ao = (e) => {
  const { subscribe: t, set: n } = wt(null);
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
var hn = /* @__PURE__ */ ((e) => (e.EDIT = "EDIT", e.SELECT = "SELECT", e.NONE = "NONE", e))(hn || {});
const st = { selected: [] }, co = (e, t = "EDIT") => {
  const { subscribe: n, set: o } = wt(st);
  let i = st;
  n((f) => i = f);
  const r = () => o(st), s = () => {
    var f;
    return ((f = i.selected) == null ? void 0 : f.length) === 0;
  }, l = (f) => {
    if (i.selected.length === 0)
      return !1;
    const m = typeof f == "string" ? f : f.id;
    return i.selected.some((u) => u.id === m);
  }, a = (f, m) => {
    const u = e.getAnnotation(f);
    if (u) {
      const g = fo(u, t);
      o(g === "EDIT" ? { selected: [{ id: f, editable: !0 }], pointerEvent: m } : g === "SELECT" ? { selected: [{ id: f }], pointerEvent: m } : { selected: [], pointerEvent: m });
    } else
      console.warn("Invalid selection: " + f);
  }, d = (f, m = !0) => {
    const u = Array.isArray(f) ? f : [f], g = u.map((w) => e.getAnnotation(w)).filter((w) => w);
    o({ selected: g.map(({ id: w }) => ({ id: w, editable: m })) }), g.length !== u.length && console.warn("Invalid selection", f);
  }, h = (f) => {
    if (i.selected.length === 0)
      return !1;
    const { selected: m } = i;
    m.filter(({ id: u }) => f.includes(u)).length > 0 && o({ selected: m.filter(({ id: u }) => !f.includes(u)) });
  };
  return e.observe(({ changes: f }) => h(f.deleted.map((m) => m.id))), {
    clear: r,
    clickSelect: a,
    get selected() {
      return i ? [...i.selected] : null;
    },
    get pointerEvent() {
      return i ? i.pointerEvent : null;
    },
    isEmpty: s,
    isSelected: l,
    setSelected: d,
    subscribe: n
  };
}, fo = (e, t) => typeof t == "function" ? t(e) || "EDIT" : t || "EDIT", uo = [];
for (let e = 0; e < 256; ++e)
  uo.push((e + 256).toString(16).slice(1));
typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const ho = (e, t) => {
  const n = new Set(e.bodies.map((o) => o.id));
  return t.bodies.filter((o) => !n.has(o.id));
}, mo = (e, t) => {
  const n = new Set(t.bodies.map((o) => o.id));
  return e.bodies.filter((o) => !n.has(o.id));
}, go = (e, t) => t.bodies.map((n) => {
  const o = e.bodies.find((i) => i.id === n.id);
  return { newBody: n, oldBody: o && !Te(o, n) ? o : void 0 };
}).filter(({ oldBody: n }) => n), po = (e, t) => !Te(e.target, t.target), mn = (e, t) => {
  const n = ho(e, t), o = mo(e, t), i = go(e, t);
  return {
    oldValue: e,
    newValue: t,
    bodiesCreated: n.length > 0 ? n : void 0,
    bodiesDeleted: o.length > 0 ? o : void 0,
    bodiesUpdated: i.length > 0 ? i : void 0,
    targetUpdated: po(e, t) ? { oldTarget: e.target, newTarget: t.target } : void 0
  };
};
var Q = /* @__PURE__ */ ((e) => (e.LOCAL = "LOCAL", e.REMOTE = "REMOTE", e))(Q || {});
const yo = (e, t) => {
  var n, o;
  const { changes: i, origin: r } = t;
  if (!(!e.options.origin || e.options.origin === r))
    return !1;
  if (e.options.ignore) {
    const { ignore: s } = e.options, l = (a) => (a == null ? void 0 : a.length) > 0;
    if (!(l(i.created) || l(i.deleted))) {
      const a = (n = i.updated) == null ? void 0 : n.some((h) => l(h.bodiesCreated) || l(h.bodiesDeleted) || l(h.bodiesUpdated)), d = (o = i.updated) == null ? void 0 : o.some((h) => h.targetUpdated);
      if (s === "BODY_ONLY" && a && !d || s === "TARGET_ONLY" && d && !a)
        return !1;
    }
  }
  if (e.options.annotations) {
    const s = /* @__PURE__ */ new Set([
      ...i.created.map((l) => l.id),
      ...i.deleted.map((l) => l.id),
      ...i.updated.map(({ oldValue: l }) => l.id)
    ]);
    return !!(Array.isArray(e.options.annotations) ? e.options.annotations : [e.options.annotations]).find((l) => s.has(l));
  } else
    return !0;
}, _o = (e, t) => {
  const n = new Set((e.created || []).map((f) => f.id)), o = new Set((e.updated || []).map(({ newValue: f }) => f.id)), i = new Set((t.created || []).map((f) => f.id)), r = new Set((t.deleted || []).map((f) => f.id)), s = new Set((t.updated || []).map(({ oldValue: f }) => f.id)), l = new Set((t.updated || []).filter(({ oldValue: f }) => n.has(f.id) || o.has(f.id)).map(({ oldValue: f }) => f.id)), a = [
    ...(e.created || []).filter((f) => !r.has(f.id)).map((f) => s.has(f.id) ? t.updated.find(({ oldValue: m }) => m.id === f.id).newValue : f),
    ...t.created || []
  ], d = [
    ...(e.deleted || []).filter((f) => !i.has(f.id)),
    ...(t.deleted || []).filter((f) => !n.has(f.id))
  ], h = [
    ...(e.updated || []).filter(({ newValue: f }) => !r.has(f.id)).map((f) => {
      const { oldValue: m, newValue: u } = f;
      if (s.has(u.id)) {
        const g = t.updated.find((w) => w.oldValue.id === u.id).newValue;
        return mn(m, g);
      } else
        return f;
    }),
    ...(t.updated || []).filter(({ oldValue: f }) => !l.has(f.id))
  ];
  return { created: a, deleted: d, updated: h };
}, wo = (e) => e.id !== void 0, bo = () => {
  const e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map(), n = [], o = (y, _ = {}) => n.push({ onChange: y, options: _ }), i = (y) => {
    const _ = n.findIndex((A) => A.onChange == y);
    _ > -1 && n.splice(_, 1);
  }, r = (y, _) => {
    const A = {
      origin: y,
      changes: {
        created: _.created || [],
        updated: _.updated || [],
        deleted: _.deleted || []
      },
      state: [...e.values()]
    };
    n.forEach((L) => {
      yo(L, A) && L.onChange(A);
    });
  }, s = (y, _ = Q.LOCAL) => {
    if (e.get(y.id))
      throw Error(`Cannot add annotation ${y.id} - exists already`);
    e.set(y.id, y), y.bodies.forEach((A) => t.set(A.id, y.id)), r(_, { created: [y] });
  }, l = (y, _) => {
    const A = typeof y == "string" ? _ : y, L = typeof y == "string" ? y : y.id, P = e.get(L);
    if (P) {
      const Y = mn(P, A);
      return L === A.id ? e.set(L, A) : (e.delete(L), e.set(A.id, A)), P.bodies.forEach((R) => t.delete(R.id)), A.bodies.forEach((R) => t.set(R.id, A.id)), Y;
    } else
      console.warn(`Cannot update annotation ${L} - does not exist`);
  }, a = (y, _ = Q.LOCAL, A = Q.LOCAL) => {
    const L = wo(_) ? A : _, P = l(y, _);
    P && r(L, { updated: [P] });
  }, d = (y, _ = Q.LOCAL) => {
    const A = y.reduce((L, P) => {
      const Y = l(P);
      return Y ? [...L, Y] : L;
    }, []);
    A.length > 0 && r(_, { updated: A });
  }, h = (y, _ = Q.LOCAL) => {
    const A = e.get(y.annotation);
    if (A) {
      const L = {
        ...A,
        bodies: [...A.bodies, y]
      };
      e.set(A.id, L), t.set(y.id, L.id), r(_, { updated: [{
        oldValue: A,
        newValue: L,
        bodiesCreated: [y]
      }] });
    } else
      console.warn(`Attempt to add body to missing annotation: ${y.annotation}`);
  }, f = () => [...e.values()], m = (y = Q.LOCAL) => {
    const _ = [...e.values()];
    e.clear(), t.clear(), r(y, { deleted: _ });
  }, u = (y, _ = !0, A = Q.LOCAL) => {
    if (_) {
      const L = [...e.values()];
      e.clear(), t.clear(), y.forEach((P) => {
        e.set(P.id, P), P.bodies.forEach((Y) => t.set(Y.id, P.id));
      }), r(A, { created: y, deleted: L });
    } else {
      const L = y.reduce((P, Y) => {
        const R = e.get(Y.id);
        return R ? [...P, R] : P;
      }, []);
      if (L.length > 0)
        throw Error(`Bulk insert would overwrite the following annotations: ${L.map((P) => P.id).join(", ")}`);
      y.forEach((P) => {
        e.set(P.id, P), P.bodies.forEach((Y) => t.set(Y.id, P.id));
      }), r(A, { created: y });
    }
  }, g = (y) => {
    const _ = typeof y == "string" ? y : y.id, A = e.get(_);
    if (A)
      return e.delete(_), A.bodies.forEach((L) => t.delete(L.id)), A;
    console.warn(`Attempt to delete missing annotation: ${_}`);
  }, w = (y, _ = Q.LOCAL) => {
    const A = g(y);
    A && r(_, { deleted: [A] });
  }, S = (y, _ = Q.LOCAL) => {
    const A = y.reduce((L, P) => {
      const Y = g(P);
      return Y ? [...L, Y] : L;
    }, []);
    A.length > 0 && r(_, { deleted: A });
  }, E = (y, _ = Q.LOCAL) => {
    const A = e.get(y.annotation);
    if (A) {
      const L = A.bodies.find((P) => P.id === y.id);
      if (L) {
        t.delete(L.id);
        const P = {
          ...A,
          bodies: A.bodies.filter((Y) => Y.id !== y.id)
        };
        e.set(A.id, P), r(_, { updated: [{
          oldValue: A,
          newValue: P,
          bodiesDeleted: [L]
        }] });
      } else
        console.warn(`Attempt to delete missing body ${y.id} from annotation ${y.annotation}`);
    } else
      console.warn(`Attempt to delete body from missing annotation ${y.annotation}`);
  }, p = (y) => {
    const _ = e.get(y);
    return _ ? { ..._ } : void 0;
  }, b = (y) => {
    const _ = t.get(y);
    if (_) {
      const A = p(_).bodies.find((L) => L.id === y);
      if (A)
        return A;
      console.error(`Store integrity error: body ${y} in index, but not in annotation`);
    } else
      console.warn(`Attempt to retrieve missing body: ${y}`);
  }, T = (y, _) => {
    if (y.annotation !== _.annotation)
      throw "Annotation integrity violation: annotation ID must be the same when updating bodies";
    const A = e.get(y.annotation);
    if (A) {
      const L = A.bodies.find((Y) => Y.id === y.id), P = {
        ...A,
        bodies: A.bodies.map((Y) => Y.id === L.id ? _ : Y)
      };
      return e.set(A.id, P), L.id !== _.id && (t.delete(L.id), t.set(_.id, P.id)), {
        oldValue: A,
        newValue: P,
        bodiesUpdated: [{ oldBody: L, newBody: _ }]
      };
    } else
      console.warn(`Attempt to add body to missing annotation ${y.annotation}`);
  }, M = (y, _, A = Q.LOCAL) => {
    const L = T(y, _);
    r(A, { updated: [L] });
  }, D = (y, _ = Q.LOCAL) => {
    const A = y.map((L) => T({ id: L.id, annotation: L.annotation }, L));
    r(_, { updated: A });
  }, U = (y) => {
    const _ = e.get(y.annotation);
    if (_) {
      const A = {
        ..._,
        target: {
          ..._.target,
          ...y
        }
      };
      return e.set(_.id, A), {
        oldValue: _,
        newValue: A,
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
    bulkAddAnnotation: u,
    bulkDeleteAnnotation: S,
    bulkUpdateAnnotation: d,
    bulkUpdateBodies: D,
    bulkUpdateTargets: (y, _ = Q.LOCAL) => {
      const A = y.map(U).filter((L) => L);
      A.length > 0 && r(_, { updated: A });
    },
    clear: m,
    deleteAnnotation: w,
    deleteBody: E,
    getAnnotation: p,
    getBody: b,
    observe: o,
    unobserve: i,
    updateAnnotation: a,
    updateBody: M,
    updateTarget: (y, _ = Q.LOCAL) => {
      const A = U(y);
      A && r(_, { updated: [A] });
    }
  };
}, Eo = (e) => ({
  ...e,
  subscribe: (t) => {
    const n = (o) => t(o.state);
    return e.observe(n), t(e.all()), () => e.unobserve(n);
  }
});
let Ao = () => ({
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
const So = 250, To = (e) => {
  const t = Ao(), n = [];
  let o = -1, i = !1, r = 0;
  const s = (u) => {
    if (!i) {
      const { changes: g } = u, w = performance.now();
      if (w - r > So)
        n.splice(o + 1), n.push(g), o = n.length - 1;
      else {
        const S = n.length - 1;
        n[S] = _o(n[S], g);
      }
      r = w;
    }
    i = !1;
  };
  e.observe(s, { origin: Q.LOCAL });
  const l = (u) => (u == null ? void 0 : u.length) > 0 && e.bulkDeleteAnnotation(u), a = (u) => (u == null ? void 0 : u.length) > 0 && e.bulkAddAnnotation(u, !1), d = (u) => (u == null ? void 0 : u.length) > 0 && e.bulkUpdateAnnotation(u.map(({ oldValue: g }) => g)), h = (u) => (u == null ? void 0 : u.length) > 0 && e.bulkUpdateAnnotation(u.map(({ newValue: g }) => g)), f = (u) => (u == null ? void 0 : u.length) > 0 && e.bulkAddAnnotation(u, !1), m = (u) => (u == null ? void 0 : u.length) > 0 && e.bulkDeleteAnnotation(u);
  return {
    canRedo: () => n.length - 1 > o,
    canUndo: () => o > -1,
    destroy: () => e.unobserve(s),
    on: (u, g) => t.on(u, g),
    redo: () => {
      if (n.length - 1 > o) {
        i = !0;
        const { created: u, updated: g, deleted: w } = n[o + 1];
        a(u), h(g), m(w), t.emit("redo", n[o + 1]), o += 1;
      }
    },
    undo: () => {
      if (o > -1) {
        i = !0;
        const { created: u, updated: g, deleted: w } = n[o];
        l(u), d(g), f(w), t.emit("undo", n[o]), o -= 1;
      }
    }
  };
}, Mo = () => {
  const { subscribe: e, set: t } = wt([]);
  return {
    subscribe: e,
    set: t
  };
}, Lo = (e, t, n, o) => {
  const { store: i, selection: r, hover: s, viewport: l } = e, a = /* @__PURE__ */ new Map();
  let d = [], h, f;
  const m = (E, p) => {
    a.has(E) ? a.get(E).push(p) : a.set(E, [p]);
  }, u = (E, p) => {
    const b = a.get(E);
    b && b.indexOf(p) > 0 && b.splice(b.indexOf(p), 1);
  }, g = (E, p, b) => {
    a.has(E) && setTimeout(() => {
      a.get(E).forEach((T) => {
        if (n) {
          const M = Array.isArray(p) ? p.map((U) => n.serialize(U)) : n.serialize(p), D = b ? b instanceof PointerEvent ? b : n.serialize(b) : void 0;
          T(M, D);
        } else
          T(p, b);
      });
    }, 1);
  }, w = () => {
    const { selected: E } = r, p = E.map(({ id: b }) => i.getAnnotation(b));
    p.forEach((b) => {
      const T = d.find((M) => M.id === b.id);
      (!T || !Te(T, b)) && g("updateAnnotation", b, T);
    }), d = d.map((b) => p.find(({ id: M }) => M === b.id) || b);
  };
  r.subscribe(({ selected: E }) => {
    if (!(d.length === 0 && E.length === 0)) {
      if (d.length === 0 && E.length > 0)
        d = E.map(({ id: p }) => i.getAnnotation(p));
      else if (d.length > 0 && E.length === 0)
        d.forEach((p) => {
          const b = i.getAnnotation(p.id);
          b && !Te(b, p) && g("updateAnnotation", b, p);
        }), d = [];
      else {
        const p = new Set(d.map((T) => T.id)), b = new Set(E.map(({ id: T }) => T));
        d.filter((T) => !b.has(T.id)).forEach((T) => {
          const M = i.getAnnotation(T.id);
          M && !Te(M, T) && g("updateAnnotation", M, T);
        }), d = [
          // Remove annotations that were deselected
          ...d.filter((T) => b.has(T.id)),
          // Add editable annotations that were selected
          ...E.filter(({ id: T }) => !p.has(T)).map(({ id: T }) => i.getAnnotation(T))
        ];
      }
      g("selectionChanged", d);
    }
  }), s.subscribe((E) => {
    !h && E ? g("mouseEnterAnnotation", i.getAnnotation(E)) : h && !E ? g("mouseLeaveAnnotation", i.getAnnotation(h)) : h && E && (g("mouseLeaveAnnotation", i.getAnnotation(h)), g("mouseEnterAnnotation", i.getAnnotation(E))), h = E;
  }), l == null || l.subscribe((E) => g("viewportIntersect", E.map(i.getAnnotation))), i.observe((E) => {
    o && (f && clearTimeout(f), f = setTimeout(w, 1e3));
    const { created: p, deleted: b } = E.changes;
    p.forEach((T) => g("createAnnotation", T)), b.forEach((T) => g("deleteAnnotation", T)), E.changes.updated.filter((T) => [
      ...T.bodiesCreated || [],
      ...T.bodiesDeleted || [],
      ...T.bodiesUpdated || []
    ].length > 0).forEach(({ oldValue: T, newValue: M }) => {
      const D = d.find((U) => U.id === T.id) || T;
      d = d.map((U) => U.id === T.id ? M : U), g("updateAnnotation", M, D);
    });
  }, { origin: Q.LOCAL }), i.observe((E) => {
    if (d) {
      const p = new Set(d.map((T) => T.id)), b = E.changes.updated.filter(({ newValue: T }) => p.has(T.id)).map(({ newValue: T }) => T);
      b.length > 0 && (d = d.map((T) => b.find((D) => D.id === T.id) || T));
    }
  }, { origin: Q.REMOTE });
  const S = (E) => (p) => {
    const { created: b, deleted: T, updated: M } = p;
    b.forEach((D) => g("createAnnotation", D)), T.forEach((D) => g("deleteAnnotation", D)), E ? M.forEach((D) => g("updateAnnotation", D.oldValue, D.newValue)) : M.forEach((D) => g("updateAnnotation", D.newValue, D.oldValue));
  };
  return t.on("undo", S(!0)), t.on("redo", S(!1)), { on: m, off: u, emit: g };
}, Oo = (e) => (t) => t.reduce((n, o) => {
  const { parsed: i, error: r } = e.parse(o);
  return r ? {
    parsed: n.parsed,
    failed: [...n.failed, o]
  } : {
    parsed: [...n.parsed, i],
    failed: n.failed
  };
}, { parsed: [], failed: [] }), vo = (e, t, n) => {
  const { store: o, selection: i } = e, r = (S) => {
    if (n) {
      const { parsed: E, error: p } = n.parse(S);
      E ? o.addAnnotation(E, Q.REMOTE) : console.error(p);
    } else
      o.addAnnotation(S, Q.REMOTE);
  }, s = () => i.clear(), l = () => o.clear(), a = (S) => {
    const E = o.getAnnotation(S);
    return n && E ? n.serialize(E) : E;
  }, d = () => n ? o.all().map(n.serialize) : o.all(), h = () => {
    var S;
    const E = (((S = i.selected) == null ? void 0 : S.map((p) => p.id)) || []).map((p) => o.getAnnotation(p));
    return n ? E.map(n.serialize) : E;
  }, f = (S) => fetch(S).then((E) => E.json()).then((E) => (u(E), E)), m = (S) => {
    if (typeof S == "string") {
      const E = o.getAnnotation(S);
      return o.deleteAnnotation(S), n ? n.serialize(E) : E;
    } else {
      const E = n ? n.parse(S).parsed : S;
      return o.deleteAnnotation(E), S;
    }
  }, u = (S) => {
    if (n) {
      const { parsed: E, failed: p } = Oo(n)(S);
      p.length > 0 && console.warn(`Discarded ${p.length} invalid annotations`, p), o.bulkAddAnnotation(E, !0, Q.REMOTE);
    } else
      o.bulkAddAnnotation(S, !0, Q.REMOTE);
  }, g = (S) => {
    S ? i.setSelected(S) : i.clear();
  }, w = (S) => {
    if (n) {
      const E = n.parse(S).parsed, p = n.serialize(o.getAnnotation(E.id));
      return o.updateAnnotation(E), p;
    } else {
      const E = o.getAnnotation(S.id);
      return o.updateAnnotation(S), E;
    }
  };
  return {
    addAnnotation: r,
    cancelSelected: s,
    canRedo: t.canRedo,
    canUndo: t.canUndo,
    clearAnnotations: l,
    getAnnotationById: a,
    getAnnotations: d,
    getSelected: h,
    loadAnnotations: f,
    redo: t.redo,
    removeAnnotation: m,
    setAnnotations: u,
    setSelected: g,
    undo: t.undo,
    updateAnnotation: w
  };
};
let ko = (e) => crypto.getRandomValues(new Uint8Array(e)), Io = (e, t, n) => {
  let o = (2 << Math.log(e.length - 1) / Math.LN2) - 1, i = -~(1.6 * o * t / e.length);
  return (r = t) => {
    let s = "";
    for (; ; ) {
      let l = n(i), a = i;
      for (; a--; )
        if (s += e[l[a] & o] || "", s.length === r)
          return s;
    }
  };
}, Po = (e, t = 21) => Io(e, t, ko), Bo = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
const Do = () => ({ isGuest: !0, id: Po("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_", 20)() }), Yo = (e) => {
  const t = JSON.stringify(e);
  let n = 0;
  for (let o = 0, i = t.length; o < i; o++) {
    let r = t.charCodeAt(o);
    n = (n << 5) - n + r, n |= 0;
  }
  return `${n}`;
}, gn = (e) => e ? typeof e == "object" ? { ...e } : e : void 0, Ro = (e, t) => (Array.isArray(e) ? e : [e]).map((n) => {
  const { id: o, type: i, purpose: r, value: s, created: l, creator: a, ...d } = n;
  return {
    id: o || `temp-${Yo(n)}`,
    annotation: t,
    type: i,
    purpose: r,
    value: s,
    created: l ? new Date(l) : void 0,
    creator: gn(a),
    ...d
  };
}), Xo = (e) => e.map((t) => {
  var n;
  const o = { ...t };
  return delete o.annotation, (n = o.id) != null && n.startsWith("temp-") && delete o.id, o;
});
Bo();
const mr = (e, t = !1) => ({ parse: (i) => Co(i, t), serialize: (i) => No(i, e) }), Co = (e, t = !1) => {
  const n = e.id || dn(), {
    creator: o,
    created: i,
    updatedBy: r,
    updated: s,
    body: l,
    ...a
  } = e, d = Ro(l, n), h = Array.isArray(e.target) ? e.target[0] : e.target, f = Array.isArray(h.selector) ? h.selector[0] : h.selector, m = f.type === "FragmentSelector" ? Cn(f, t) : f.type === "SvgSelector" ? to(f) : void 0;
  return m ? {
    parsed: {
      ...a,
      id: n,
      bodies: d,
      target: {
        created: i ? new Date(i) : void 0,
        creator: gn(o),
        ...a.target,
        annotation: n,
        selector: m
      }
    }
  } : {
    error: Error(`Unknown selector type: ${f.type}`)
  };
}, No = (e, t) => {
  const {
    selector: n,
    creator: o,
    created: i,
    updated: r,
    updatedBy: s,
    ...l
  } = e.target, a = n.type == j.RECTANGLE ? Nn(n.geometry) : no(n);
  return {
    ...e,
    "@context": "http://www.w3.org/ns/anno.jsonld",
    id: e.id,
    type: "Annotation",
    body: Xo(e.bodies),
    creator: o,
    created: i == null ? void 0 : i.toISOString(),
    target: {
      ...l,
      source: t,
      selector: a
    }
  };
};
function Yt(e, t, n) {
  const o = e.slice();
  return o[11] = t[n], o[13] = n, o;
}
function Rt(e) {
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
    m(s, l) {
      I(s, t, l), i || (r = Z(t, "pointerdown", function() {
        W(
          /*grab*/
          e[10](O(
            /*idx*/
            e[13]
          ))
        ) && e[10](O(
          /*idx*/
          e[13]
        )).apply(this, arguments);
      }), i = !0);
    },
    p(s, l) {
      e = s, l & /*geom, handleSize*/
      24 && n !== (n = /*point*/
      e[11][0] - /*handleSize*/
      e[3] / 2) && c(t, "x", n), l & /*geom, handleSize*/
      24 && o !== (o = /*point*/
      e[11][1] - /*handleSize*/
      e[3] / 2) && c(t, "y", o), l & /*handleSize*/
      8 && c(
        t,
        "height",
        /*handleSize*/
        e[3]
      ), l & /*handleSize*/
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
function Uo(e) {
  let t, n, o, i, r, s, l, a, d, h, f = (
    /*geom*/
    e[4].points
  ), m = [];
  for (let u = 0; u < f.length; u += 1)
    m[u] = Rt(Yt(e, f, u));
  return {
    c() {
      t = C("polygon"), i = te(), r = C("polygon"), l = te();
      for (let u = 0; u < m.length; u += 1)
        m[u].c();
      a = we(), c(t, "class", "a9s-outer"), c(t, "style", n = /*computedStyle*/
      e[1] ? "display:none;" : void 0), c(t, "points", o = /*geom*/
      e[4].points.map(Xt).join(" ")), c(r, "class", "a9s-inner a9s-shape-handle"), c(
        r,
        "style",
        /*computedStyle*/
        e[1]
      ), c(r, "points", s = /*geom*/
      e[4].points.map(Ct).join(" "));
    },
    m(u, g) {
      I(u, t, g), I(u, i, g), I(u, r, g), I(u, l, g);
      for (let w = 0; w < m.length; w += 1)
        m[w] && m[w].m(u, g);
      I(u, a, g), d || (h = [
        Z(t, "pointerdown", function() {
          W(
            /*grab*/
            e[10](O.SHAPE)
          ) && e[10](O.SHAPE).apply(this, arguments);
        }),
        Z(r, "pointerdown", function() {
          W(
            /*grab*/
            e[10](O.SHAPE)
          ) && e[10](O.SHAPE).apply(this, arguments);
        })
      ], d = !0);
    },
    p(u, g) {
      if (e = u, g & /*computedStyle*/
      2 && n !== (n = /*computedStyle*/
      e[1] ? "display:none;" : void 0) && c(t, "style", n), g & /*geom*/
      16 && o !== (o = /*geom*/
      e[4].points.map(Xt).join(" ")) && c(t, "points", o), g & /*computedStyle*/
      2 && c(
        r,
        "style",
        /*computedStyle*/
        e[1]
      ), g & /*geom*/
      16 && s !== (s = /*geom*/
      e[4].points.map(Ct).join(" ")) && c(r, "points", s), g & /*geom, handleSize, grab, Handle*/
      1048) {
        f = /*geom*/
        e[4].points;
        let w;
        for (w = 0; w < f.length; w += 1) {
          const S = Yt(e, f, w);
          m[w] ? m[w].p(S, g) : (m[w] = Rt(S), m[w].c(), m[w].m(a.parentNode, a));
        }
        for (; w < m.length; w += 1)
          m[w].d(1);
        m.length = f.length;
      }
    },
    d(u) {
      u && k(t), u && k(i), u && k(r), u && k(l), yt(m, u), u && k(a), d = !1, de(h);
    }
  };
}
function Vo(e) {
  let t, n;
  return t = new nt({
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
          Uo,
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
      he(t.$$.fragment);
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
const Xt = (e) => e.join(","), Ct = (e) => e.join(",");
function Go(e, t, n) {
  let o, i, { shape: r } = t, { computedStyle: s = void 0 } = t, { transform: l } = t, { viewportScale: a = 1 } = t;
  const d = (u, g, w) => {
    let S;
    g === O.SHAPE ? S = u.geometry.points.map(([p, b]) => [p + w[0], b + w[1]]) : S = u.geometry.points.map(([p, b], T) => g === O(T) ? [p + w[0], b + w[1]] : [p, b]);
    const E = Me(S);
    return { ...u, geometry: { points: S, bounds: E } };
  };
  function h(u) {
    re.call(this, e, u);
  }
  function f(u) {
    re.call(this, e, u);
  }
  function m(u) {
    re.call(this, e, u);
  }
  return e.$$set = (u) => {
    "shape" in u && n(0, r = u.shape), "computedStyle" in u && n(1, s = u.computedStyle), "transform" in u && n(2, l = u.transform), "viewportScale" in u && n(6, a = u.viewportScale);
  }, e.$$.update = () => {
    e.$$.dirty & /*shape*/
    1 && n(4, o = r.geometry), e.$$.dirty & /*viewportScale*/
    64 && n(3, i = 10 / a);
  }, [
    r,
    s,
    l,
    i,
    o,
    d,
    a,
    h,
    f,
    m
  ];
}
class Ho extends oe {
  constructor(t) {
    super(), ne(this, t, Go, Vo, x, {
      shape: 0,
      computedStyle: 1,
      transform: 2,
      viewportScale: 6
    });
  }
}
function Fo(e) {
  let t, n, o, i, r, s, l, a, d, h, f, m, u, g, w, S, E, p, b, T, M, D, U, y, _, A, L, P, Y, R, X, se, H, v, V, N, le, K, me, Oe, ve, $, ke, Ae, Ie, J, be, ge, ot, Et;
  return {
    c() {
      t = C("rect"), l = te(), a = C("rect"), u = te(), g = C("rect"), p = te(), b = C("rect"), U = te(), y = C("rect"), P = te(), Y = C("rect"), H = te(), v = C("rect"), le = te(), K = C("rect"), ve = te(), $ = C("rect"), Ie = te(), J = C("rect"), c(t, "class", "a9s-outer"), c(t, "style", n = /*computedStyle*/
      e[1] ? "display:none;" : void 0), c(t, "x", o = /*geom*/
      e[4].x), c(t, "y", i = /*geom*/
      e[4].y), c(t, "width", r = /*geom*/
      e[4].w), c(t, "height", s = /*geom*/
      e[4].h), c(a, "class", "a9s-inner a9s-shape-handle"), c(
        a,
        "style",
        /*computedStyle*/
        e[1]
      ), c(a, "x", d = /*geom*/
      e[4].x), c(a, "y", h = /*geom*/
      e[4].y), c(a, "width", f = /*geom*/
      e[4].w), c(a, "height", m = /*geom*/
      e[4].h), c(g, "class", "a9s-edge-handle a9s-edge-handle-top"), c(g, "x", w = /*geom*/
      e[4].x), c(g, "y", S = /*geom*/
      e[4].y), c(g, "height", 1), c(g, "width", E = /*geom*/
      e[4].w), c(b, "class", "a9s-edge-handle a9s-edge-handle-right"), c(b, "x", T = /*geom*/
      e[4].x + /*geom*/
      e[4].w), c(b, "y", M = /*geom*/
      e[4].y), c(b, "height", D = /*geom*/
      e[4].h), c(b, "width", 1), c(y, "class", "a9s-edge-handle a9s-edge-handle-bottom"), c(y, "x", _ = /*geom*/
      e[4].x), c(y, "y", A = /*geom*/
      e[4].y + /*geom*/
      e[4].h), c(y, "height", 1), c(y, "width", L = /*geom*/
      e[4].w), c(Y, "class", "a9s-edge-handle a9s-edge-handle-left"), c(Y, "x", R = /*geom*/
      e[4].x), c(Y, "y", X = /*geom*/
      e[4].y), c(Y, "height", se = /*geom*/
      e[4].h), c(Y, "width", 1), c(v, "class", "a9s-corner-handle a9s-corner-handle-topleft"), c(v, "x", V = /*geom*/
      e[4].x - /*handleSize*/
      e[3] / 2), c(v, "y", N = /*geom*/
      e[4].y - /*handleSize*/
      e[3] / 2), c(
        v,
        "height",
        /*handleSize*/
        e[3]
      ), c(
        v,
        "width",
        /*handleSize*/
        e[3]
      ), c(K, "class", "a9s-corner-handle a9s-corner-handle-topright"), c(K, "x", me = /*geom*/
      e[4].x + /*geom*/
      e[4].w - /*handleSize*/
      e[3] / 2), c(K, "y", Oe = /*geom*/
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
      ), c($, "class", "a9s-corner-handle a9s-corner-handle-bottomright"), c($, "x", ke = /*geom*/
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
      e[3] / 2), c(J, "y", ge = /*geom*/
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
      I(G, t, B), I(G, l, B), I(G, a, B), I(G, u, B), I(G, g, B), I(G, p, B), I(G, b, B), I(G, U, B), I(G, y, B), I(G, P, B), I(G, Y, B), I(G, H, B), I(G, v, B), I(G, le, B), I(G, K, B), I(G, ve, B), I(G, $, B), I(G, Ie, B), I(G, J, B), ot || (Et = [
        Z(t, "pointerdown", function() {
          W(
            /*grab*/
            e[10](O.SHAPE)
          ) && e[10](O.SHAPE).apply(this, arguments);
        }),
        Z(a, "pointerdown", function() {
          W(
            /*grab*/
            e[10](O.SHAPE)
          ) && e[10](O.SHAPE).apply(this, arguments);
        }),
        Z(g, "pointerdown", function() {
          W(
            /*grab*/
            e[10](O.TOP)
          ) && e[10](O.TOP).apply(this, arguments);
        }),
        Z(b, "pointerdown", function() {
          W(
            /*grab*/
            e[10](O.RIGHT)
          ) && e[10](O.RIGHT).apply(this, arguments);
        }),
        Z(y, "pointerdown", function() {
          W(
            /*grab*/
            e[10](O.BOTTOM)
          ) && e[10](O.BOTTOM).apply(this, arguments);
        }),
        Z(Y, "pointerdown", function() {
          W(
            /*grab*/
            e[10](O.LEFT)
          ) && e[10](O.LEFT).apply(this, arguments);
        }),
        Z(v, "pointerdown", function() {
          W(
            /*grab*/
            e[10](O.TOP_LEFT)
          ) && e[10](O.TOP_LEFT).apply(this, arguments);
        }),
        Z(K, "pointerdown", function() {
          W(
            /*grab*/
            e[10](O.TOP_RIGHT)
          ) && e[10](O.TOP_RIGHT).apply(this, arguments);
        }),
        Z($, "pointerdown", function() {
          W(
            /*grab*/
            e[10](O.BOTTOM_RIGHT)
          ) && e[10](O.BOTTOM_RIGHT).apply(this, arguments);
        }),
        Z(J, "pointerdown", function() {
          W(
            /*grab*/
            e[10](O.BOTTOM_LEFT)
          ) && e[10](O.BOTTOM_LEFT).apply(this, arguments);
        })
      ], ot = !0);
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
        a,
        "style",
        /*computedStyle*/
        e[1]
      ), B & /*geom*/
      16 && d !== (d = /*geom*/
      e[4].x) && c(a, "x", d), B & /*geom*/
      16 && h !== (h = /*geom*/
      e[4].y) && c(a, "y", h), B & /*geom*/
      16 && f !== (f = /*geom*/
      e[4].w) && c(a, "width", f), B & /*geom*/
      16 && m !== (m = /*geom*/
      e[4].h) && c(a, "height", m), B & /*geom*/
      16 && w !== (w = /*geom*/
      e[4].x) && c(g, "x", w), B & /*geom*/
      16 && S !== (S = /*geom*/
      e[4].y) && c(g, "y", S), B & /*geom*/
      16 && E !== (E = /*geom*/
      e[4].w) && c(g, "width", E), B & /*geom*/
      16 && T !== (T = /*geom*/
      e[4].x + /*geom*/
      e[4].w) && c(b, "x", T), B & /*geom*/
      16 && M !== (M = /*geom*/
      e[4].y) && c(b, "y", M), B & /*geom*/
      16 && D !== (D = /*geom*/
      e[4].h) && c(b, "height", D), B & /*geom*/
      16 && _ !== (_ = /*geom*/
      e[4].x) && c(y, "x", _), B & /*geom*/
      16 && A !== (A = /*geom*/
      e[4].y + /*geom*/
      e[4].h) && c(y, "y", A), B & /*geom*/
      16 && L !== (L = /*geom*/
      e[4].w) && c(y, "width", L), B & /*geom*/
      16 && R !== (R = /*geom*/
      e[4].x) && c(Y, "x", R), B & /*geom*/
      16 && X !== (X = /*geom*/
      e[4].y) && c(Y, "y", X), B & /*geom*/
      16 && se !== (se = /*geom*/
      e[4].h) && c(Y, "height", se), B & /*geom, handleSize*/
      24 && V !== (V = /*geom*/
      e[4].x - /*handleSize*/
      e[3] / 2) && c(v, "x", V), B & /*geom, handleSize*/
      24 && N !== (N = /*geom*/
      e[4].y - /*handleSize*/
      e[3] / 2) && c(v, "y", N), B & /*handleSize*/
      8 && c(
        v,
        "height",
        /*handleSize*/
        e[3]
      ), B & /*handleSize*/
      8 && c(
        v,
        "width",
        /*handleSize*/
        e[3]
      ), B & /*geom, handleSize*/
      24 && me !== (me = /*geom*/
      e[4].x + /*geom*/
      e[4].w - /*handleSize*/
      e[3] / 2) && c(K, "x", me), B & /*geom, handleSize*/
      24 && Oe !== (Oe = /*geom*/
      e[4].y - /*handleSize*/
      e[3] / 2) && c(K, "y", Oe), B & /*handleSize*/
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
      24 && ke !== (ke = /*geom*/
      e[4].x + /*geom*/
      e[4].w - /*handleSize*/
      e[3] / 2) && c($, "x", ke), B & /*geom, handleSize*/
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
      24 && ge !== (ge = /*geom*/
      e[4].y + /*geom*/
      e[4].h - /*handleSize*/
      e[3] / 2) && c(J, "y", ge), B & /*handleSize*/
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
      G && k(t), G && k(l), G && k(a), G && k(u), G && k(g), G && k(p), G && k(b), G && k(U), G && k(y), G && k(P), G && k(Y), G && k(H), G && k(v), G && k(le), G && k(K), G && k(ve), G && k($), G && k(Ie), G && k(J), ot = !1, de(Et);
    }
  };
}
function zo(e) {
  let t, n;
  return t = new nt({
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
          Fo,
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
      he(t.$$.fragment);
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
function jo(e, t, n) {
  let o, i, { shape: r } = t, { computedStyle: s = void 0 } = t, { transform: l } = t, { viewportScale: a = 1 } = t;
  const d = (u, g, w) => {
    const S = u.geometry.bounds;
    let [E, p] = [S.minX, S.minY], [b, T] = [S.maxX, S.maxY];
    const [M, D] = w;
    if (g === O.SHAPE)
      E += M, b += M, p += D, T += D;
    else {
      switch (g) {
        case O.TOP:
        case O.TOP_LEFT:
        case O.TOP_RIGHT: {
          p += D;
          break;
        }
        case O.BOTTOM:
        case O.BOTTOM_LEFT:
        case O.BOTTOM_RIGHT: {
          T += D;
          break;
        }
      }
      switch (g) {
        case O.LEFT:
        case O.TOP_LEFT:
        case O.BOTTOM_LEFT: {
          E += M;
          break;
        }
        case O.RIGHT:
        case O.TOP_RIGHT:
        case O.BOTTOM_RIGHT: {
          b += M;
          break;
        }
      }
    }
    const U = Math.min(E, b), y = Math.min(p, T), _ = Math.abs(b - E), A = Math.abs(T - p);
    return {
      ...u,
      geometry: {
        x: U,
        y,
        w: _,
        h: A,
        bounds: {
          minX: U,
          minY: y,
          maxX: U + _,
          maxY: y + A
        }
      }
    };
  };
  function h(u) {
    re.call(this, e, u);
  }
  function f(u) {
    re.call(this, e, u);
  }
  function m(u) {
    re.call(this, e, u);
  }
  return e.$$set = (u) => {
    "shape" in u && n(0, r = u.shape), "computedStyle" in u && n(1, s = u.computedStyle), "transform" in u && n(2, l = u.transform), "viewportScale" in u && n(6, a = u.viewportScale);
  }, e.$$.update = () => {
    e.$$.dirty & /*shape*/
    1 && n(4, o = r.geometry), e.$$.dirty & /*viewportScale*/
    64 && n(3, i = 10 / a);
  }, [
    r,
    s,
    l,
    i,
    o,
    d,
    a,
    h,
    f,
    m
  ];
}
class qo extends oe {
  constructor(t) {
    super(), ne(this, t, jo, zo, x, {
      shape: 0,
      computedStyle: 1,
      transform: 2,
      viewportScale: 6
    });
  }
}
function Ko(e) {
  let t, n, o, i, r, s, l, a, d, h, f, m, u, g, w, S, E, p, b, T, M, D, U, y, _, A, L, P, Y;
  return {
    c() {
      t = C("ellipse"), s = te(), l = C("ellipse"), m = te(), u = C("rect"), S = te(), E = C("rect"), T = te(), M = C("rect"), y = te(), _ = C("rect"), c(t, "class", "a9s-outer"), c(t, "cx", n = /*geom*/
      e[3].cx), c(t, "cy", o = /*geom*/
      e[3].cy), c(t, "rx", i = /*geom*/
      e[3].rx), c(t, "ry", r = /*geom*/
      e[3].ry), c(l, "class", "a9s-inner a9s-shape-handle"), c(l, "cx", a = /*geom*/
      e[3].cx), c(l, "cy", d = /*geom*/
      e[3].cy), c(l, "rx", h = /*geom*/
      e[3].rx), c(l, "ry", f = /*geom*/
      e[3].ry), c(u, "class", "a9s-corner-handle a9s-corner-top"), c(u, "x", g = /*geom*/
      e[3].cx - /*handleSize*/
      e[2] / 2), c(u, "y", w = /*geom*/
      e[3].cy - /*handleSize*/
      e[2] / 2 - /*geom*/
      e[3].ry), c(
        u,
        "height",
        /*handleSize*/
        e[2]
      ), c(
        u,
        "width",
        /*handleSize*/
        e[2]
      ), c(E, "class", "a9s-corner-handle a9s-corner-handle-right"), c(E, "x", p = /*geom*/
      e[3].cx + /*geom*/
      e[3].rx - /*handleSize*/
      e[2] / 2), c(E, "y", b = /*geom*/
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
      ), c(_, "class", "a9s-corner-handle a9s-corner-handle-left"), c(_, "x", A = /*geom*/
      e[3].cx - /*geom*/
      e[3].rx - /*handleSize*/
      e[2] / 2), c(_, "y", L = /*geom*/
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
    m(R, X) {
      I(R, t, X), I(R, s, X), I(R, l, X), I(R, m, X), I(R, u, X), I(R, S, X), I(R, E, X), I(R, T, X), I(R, M, X), I(R, y, X), I(R, _, X), P || (Y = [
        Z(t, "pointerdown", function() {
          W(
            /*grab*/
            e[9](O.SHAPE)
          ) && e[9](O.SHAPE).apply(this, arguments);
        }),
        Z(l, "pointerdown", function() {
          W(
            /*grab*/
            e[9](O.SHAPE)
          ) && e[9](O.SHAPE).apply(this, arguments);
        }),
        Z(u, "pointerdown", function() {
          W(
            /*grab*/
            e[9](O.TOP)
          ) && e[9](O.TOP).apply(this, arguments);
        }),
        Z(E, "pointerdown", function() {
          W(
            /*grab*/
            e[9](O.RIGHT)
          ) && e[9](O.RIGHT).apply(this, arguments);
        }),
        Z(M, "pointerdown", function() {
          W(
            /*grab*/
            e[9](O.BOTTOM)
          ) && e[9](O.BOTTOM).apply(this, arguments);
        }),
        Z(_, "pointerdown", function() {
          W(
            /*grab*/
            e[9](O.LEFT)
          ) && e[9](O.LEFT).apply(this, arguments);
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
      8 && a !== (a = /*geom*/
      e[3].cx) && c(l, "cx", a), X & /*geom*/
      8 && d !== (d = /*geom*/
      e[3].cy) && c(l, "cy", d), X & /*geom*/
      8 && h !== (h = /*geom*/
      e[3].rx) && c(l, "rx", h), X & /*geom*/
      8 && f !== (f = /*geom*/
      e[3].ry) && c(l, "ry", f), X & /*geom, handleSize*/
      12 && g !== (g = /*geom*/
      e[3].cx - /*handleSize*/
      e[2] / 2) && c(u, "x", g), X & /*geom, handleSize*/
      12 && w !== (w = /*geom*/
      e[3].cy - /*handleSize*/
      e[2] / 2 - /*geom*/
      e[3].ry) && c(u, "y", w), X & /*handleSize*/
      4 && c(
        u,
        "height",
        /*handleSize*/
        e[2]
      ), X & /*handleSize*/
      4 && c(
        u,
        "width",
        /*handleSize*/
        e[2]
      ), X & /*geom, handleSize*/
      12 && p !== (p = /*geom*/
      e[3].cx + /*geom*/
      e[3].rx - /*handleSize*/
      e[2] / 2) && c(E, "x", p), X & /*geom, handleSize*/
      12 && b !== (b = /*geom*/
      e[3].cy - /*handleSize*/
      e[2] / 2) && c(E, "y", b), X & /*handleSize*/
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
      12 && A !== (A = /*geom*/
      e[3].cx - /*geom*/
      e[3].rx - /*handleSize*/
      e[2] / 2) && c(_, "x", A), X & /*geom, handleSize*/
      12 && L !== (L = /*geom*/
      e[3].cy - /*handleSize*/
      e[2] / 2) && c(_, "y", L), X & /*handleSize*/
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
    d(R) {
      R && k(t), R && k(s), R && k(l), R && k(m), R && k(u), R && k(S), R && k(E), R && k(T), R && k(M), R && k(y), R && k(_), P = !1, de(Y);
    }
  };
}
function Wo(e) {
  let t, n;
  return t = new nt({
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
          Ko,
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
      he(t.$$.fragment);
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
function Zo(e, t, n) {
  let o, i, { shape: r } = t, { transform: s } = t, { viewportScale: l = 1 } = t;
  const a = (m, u, g) => {
    const w = m.geometry.bounds;
    let [S, E] = [w.minX, w.minY], [p, b] = [w.maxX, w.maxY];
    const [T, M] = g;
    if (u === O.SHAPE)
      S += T, p += T, E += M, b += M;
    else
      switch (u) {
        case O.TOP: {
          E += M;
          break;
        }
        case O.BOTTOM: {
          b += M;
          break;
        }
        case O.LEFT: {
          S += T;
          break;
        }
        case O.RIGHT: {
          p += T;
          break;
        }
      }
    const D = Math.min(S, p), U = Math.min(E, b), y = Math.abs(p - S), _ = Math.abs(b - E), A = (S + p) / 2, L = (E + b) / 2, P = y / 2, Y = _ / 2;
    return {
      ...m,
      geometry: {
        ...m.geometry,
        cx: A,
        cy: L,
        rx: P,
        ry: Y,
        bounds: {
          minX: D,
          minY: U,
          maxX: D + y,
          maxY: U + _
        }
      }
    };
  };
  function d(m) {
    re.call(this, e, m);
  }
  function h(m) {
    re.call(this, e, m);
  }
  function f(m) {
    re.call(this, e, m);
  }
  return e.$$set = (m) => {
    "shape" in m && n(0, r = m.shape), "transform" in m && n(1, s = m.transform), "viewportScale" in m && n(5, l = m.viewportScale);
  }, e.$$.update = () => {
    e.$$.dirty & /*shape*/
    1 && n(3, o = r.geometry), e.$$.dirty & /*viewportScale*/
    32 && n(2, i = 10 / l);
  }, [
    r,
    s,
    i,
    o,
    a,
    l,
    d,
    h,
    f
  ];
}
class Jo extends oe {
  constructor(t) {
    super(), ne(this, t, Zo, Wo, x, { shape: 0, transform: 1, viewportScale: 5 });
  }
}
function Qo(e) {
  let t, n, o;
  return {
    c() {
      t = C("path"), c(t, "class", "a9s-inner a9s-shape-handle"), c(
        t,
        "style",
        /*computedStyle*/
        e[1]
      ), c(
        t,
        "d",
        /*pathData*/
        e[3]
      );
    },
    m(i, r) {
      I(i, t, r), n || (o = Z(t, "pointerdown", function() {
        W(
          /*grab*/
          e[11](O.SHAPE)
        ) && e[11](O.SHAPE).apply(this, arguments);
      }), n = !0);
    },
    p(i, r) {
      e = i, r & /*computedStyle*/
      2 && c(
        t,
        "style",
        /*computedStyle*/
        e[1]
      ), r & /*pathData*/
      8 && c(
        t,
        "d",
        /*pathData*/
        e[3]
      );
    },
    d(i) {
      i && k(t), n = !1, o();
    }
  };
}
function xo(e) {
  let t, n;
  return t = new nt({
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
          Qo,
          ({ grab: o }) => ({ 11: o }),
          ({ grab: o }) => o ? 2048 : 0
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
      he(t.$$.fragment);
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
      o[2]), i & /*$$scope, computedStyle, pathData, grab*/
      6154 && (r.$$scope = { dirty: i, ctx: o }), t.$set(r);
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
function $o(e, t, n) {
  let o, i, { shape: r } = t, { computedStyle: s = void 0 } = t, { transform: l } = t, { viewportScale: a = 1 } = t;
  const d = (u, g, w) => {
    let S;
    g === O.SHAPE && (S = u.geometry.points.map(([p, b, T]) => [p + w[0], b + w[1], T]));
    const E = Me(S.map((p) => [p[0], p[1]]));
    return { ...u, geometry: { points: S, bounds: E } };
  };
  function h(u) {
    re.call(this, e, u);
  }
  function f(u) {
    re.call(this, e, u);
  }
  function m(u) {
    re.call(this, e, u);
  }
  return e.$$set = (u) => {
    "shape" in u && n(0, r = u.shape), "computedStyle" in u && n(1, s = u.computedStyle), "transform" in u && n(2, l = u.transform), "viewportScale" in u && n(5, a = u.viewportScale);
  }, e.$$.update = () => {
    e.$$.dirty & /*shape*/
    1 && n(6, o = r.geometry), e.$$.dirty & /*viewportScale*/
    32, e.$$.dirty & /*geom*/
    64 && n(3, i = Je(o.points, Ze));
  }, [
    r,
    s,
    l,
    i,
    d,
    a,
    o,
    h,
    f,
    m
  ];
}
class ei extends oe {
  constructor(t) {
    super(), ne(this, t, $o, xo, x, {
      shape: 0,
      computedStyle: 1,
      transform: 2,
      viewportScale: 5
    });
  }
}
const pn = /* @__PURE__ */ new Map([
  [j.RECTANGLE, qo],
  [j.POLYGON, Ho],
  [j.ELLIPSE, Jo],
  [j.FREEHAND, ei]
]), Nt = (e) => pn.get(e.type), ti = (e, t) => pn.set(e, t), O = (e) => `HANDLE-${e}`;
O.SHAPE = "SHAPE";
O.TOP = "TOP";
O.RIGHT = "RIGHT";
O.BOTTOM = "BOTTOM";
O.LEFT = "LEFT";
O.TOP_LEFT = "TOP_LEFT";
O.TOP_RIGHT = "TOP_RIGHT";
O.BOTTOM_RIGHT = "BOTTOM_RIGHT";
O.BOTTOM_LEFT = "BOTTOM_LEFT";
const ni = (e) => ({}), Ut = (e) => ({ grab: (
  /*onGrab*/
  e[0]
) });
function oi(e) {
  let t, n, o, i;
  const r = (
    /*#slots*/
    e[7].default
  ), s = En(
    r,
    e,
    /*$$scope*/
    e[6],
    Ut
  );
  return {
    c() {
      t = C("g"), s && s.c(), c(t, "class", "a9s-annotation selected");
    },
    m(l, a) {
      I(l, t, a), s && s.m(t, null), n = !0, o || (i = [
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
    p(l, [a]) {
      s && s.p && (!n || a & /*$$scope*/
      64) && Sn(
        s,
        r,
        l,
        /*$$scope*/
        l[6],
        n ? An(
          r,
          /*$$scope*/
          l[6],
          a,
          ni
        ) : Tn(
          /*$$scope*/
          l[6]
        ),
        Ut
      );
    },
    i(l) {
      n || (F(s, l), n = !0);
    },
    o(l) {
      z(s, l), n = !1;
    },
    d(l) {
      l && k(t), s && s.d(l), o = !1, de(i);
    }
  };
}
function ii(e, t, n) {
  let { $$slots: o = {}, $$scope: i } = t;
  const r = Ee();
  let { shape: s } = t, { editor: l } = t, { transform: a } = t, d = null, h, f = null;
  const m = (w) => (S) => {
    d = w, h = a.elementToImage(S.offsetX, S.offsetY), f = s, S.target.setPointerCapture(S.pointerId), r("grab");
  }, u = (w) => {
    if (d) {
      const [S, E] = a.elementToImage(w.offsetX, w.offsetY), p = [S - h[0], E - h[1]];
      n(3, s = l(f, d, p)), r("change", s);
    }
  }, g = (w) => {
    w.target.releasePointerCapture(w.pointerId), d = null, f = s, r("release");
  };
  return e.$$set = (w) => {
    "shape" in w && n(3, s = w.shape), "editor" in w && n(4, l = w.editor), "transform" in w && n(5, a = w.transform), "$$scope" in w && n(6, i = w.$$scope);
  }, [m, u, g, s, l, a, i, o];
}
class nt extends oe {
  constructor(t) {
    super(), ne(this, t, ii, oi, x, { shape: 3, editor: 4, transform: 5 });
  }
}
const Ue = (e, t, n) => {
  const o = typeof t == "function" ? t(e) : t;
  if (o) {
    const { fill: i, fillOpacity: r } = o;
    let s = "", l;
    return i && (s += `fill:${i};stroke:${i};`), n && (l = n.fillOpacity), s += `fill-opacity:${l || r || "0.25"};`, s;
  }
};
function ri(e, t, n) {
  let o;
  const i = Ee();
  let { annotation: r } = t, { editor: s } = t, { style: l = void 0 } = t, { target: a } = t, { transform: d } = t, { viewportScale: h } = t, f;
  return Le(() => (n(6, f = new s({
    target: a,
    props: {
      shape: r.target.selector,
      computedStyle: o,
      transform: d,
      viewportScale: h
    }
  })), f.$on("change", (m) => {
    f.$$set({ shape: m.detail }), i("change", m.detail);
  }), f.$on("grab", (m) => i("grab", m.detail)), f.$on("release", (m) => i("release", m.detail)), () => {
    f.$destroy();
  })), e.$$set = (m) => {
    "annotation" in m && n(0, r = m.annotation), "editor" in m && n(1, s = m.editor), "style" in m && n(2, l = m.style), "target" in m && n(3, a = m.target), "transform" in m && n(4, d = m.transform), "viewportScale" in m && n(5, h = m.viewportScale);
  }, e.$$.update = () => {
    e.$$.dirty & /*annotation, style*/
    5 && (o = Ue(r, l)), e.$$.dirty & /*annotation, editorComponent*/
    65 && r && (f == null || f.$set({ shape: r.target.selector })), e.$$.dirty & /*editorComponent, transform*/
    80 && f && f.$set({ transform: d }), e.$$.dirty & /*editorComponent, viewportScale*/
    96 && f && f.$set({ viewportScale: h });
  }, [r, s, l, a, d, h, f];
}
class si extends oe {
  constructor(t) {
    super(), ne(this, t, ri, null, x, {
      annotation: 0,
      editor: 1,
      style: 2,
      target: 3,
      transform: 4,
      viewportScale: 5
    });
  }
}
function li(e, t, n) {
  const o = Ee();
  let { drawingMode: i } = t, { target: r } = t, { tool: s } = t, { transform: l } = t, { viewportScale: a } = t, d;
  return Le(() => {
    const h = r.closest("svg"), f = [], m = (u, g, w) => {
      h.addEventListener(u, g, w), f.push(() => h.removeEventListener(u, g, w));
    };
    return n(5, d = new s({
      target: r,
      props: {
        addEventListener: m,
        drawingMode: i,
        transform: l,
        viewportScale: a
      }
    })), d.$on("create", (u) => o("create", u.detail)), () => {
      f.forEach((u) => u()), d.$destroy();
    };
  }), e.$$set = (h) => {
    "drawingMode" in h && n(0, i = h.drawingMode), "target" in h && n(1, r = h.target), "tool" in h && n(2, s = h.tool), "transform" in h && n(3, l = h.transform), "viewportScale" in h && n(4, a = h.viewportScale);
  }, e.$$.update = () => {
    e.$$.dirty & /*toolComponent, transform*/
    40 && d && d.$set({ transform: l }), e.$$.dirty & /*toolComponent, viewportScale*/
    48 && d && d.$set({ viewportScale: a });
  }, [i, r, s, l, a, d];
}
class ai extends oe {
  constructor(t) {
    super(), ne(this, t, li, null, x, {
      drawingMode: 0,
      target: 1,
      tool: 2,
      transform: 3,
      viewportScale: 4
    });
  }
}
function Vt(e) {
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
      o && k(t), o && k(n);
    }
  };
}
function ci(e) {
  let t, n = (
    /*origin*/
    e[0] && Vt(e)
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
      o[0] ? n ? n.p(o, i) : (n = Vt(o), n.c(), n.m(t, null)) : n && (n.d(1), n = null);
    },
    i: q,
    o: q,
    d(o) {
      o && k(t), n && n.d();
    }
  };
}
function fi(e, t, n) {
  const o = Ee();
  let { addEventListener: i } = t, { drawingMode: r } = t, { transform: s } = t, l, a, d, h, f, m, u;
  const g = (p) => {
    l = performance.now(), r === "drag" && (n(0, a = s.elementToImage(p.offsetX, p.offsetY)), d = a, n(1, h = a[0]), n(2, f = a[1]), n(3, m = 1), n(4, u = 1));
  }, w = (p) => {
    a && (d = s.elementToImage(p.offsetX, p.offsetY), n(1, h = Math.min(d[0], a[0])), n(2, f = Math.min(d[1], a[1])), n(3, m = Math.abs(d[0] - a[0])), n(4, u = Math.abs(d[1] - a[1])));
  }, S = (p) => {
    const b = performance.now() - l;
    if (r === "click") {
      if (b > 300)
        return;
      p.stopPropagation(), a ? E() : (n(0, a = s.elementToImage(p.offsetX, p.offsetY)), d = a, n(1, h = a[0]), n(2, f = a[1]), n(3, m = 1), n(4, u = 1));
    } else
      a && (b > 300 || m * u > 100 ? (p.stopPropagation(), E()) : (n(0, a = null), d = null));
  }, E = () => {
    if (m * u > 15) {
      const p = {
        type: j.RECTANGLE,
        geometry: {
          bounds: {
            minX: h,
            minY: f,
            maxX: h + m,
            maxY: f + u
          },
          x: h,
          y: f,
          w: m,
          h: u
        }
      };
      o("create", p);
    }
    n(0, a = null), d = null;
  };
  return Le(() => {
    i("pointerdown", g), i("pointermove", w), i("pointerup", S, !0);
  }), e.$$set = (p) => {
    "addEventListener" in p && n(5, i = p.addEventListener), "drawingMode" in p && n(6, r = p.drawingMode), "transform" in p && n(7, s = p.transform);
  }, [a, h, f, m, u, i, r, s];
}
class ui extends oe {
  constructor(t) {
    super(), ne(this, t, fi, ci, x, {
      addEventListener: 5,
      drawingMode: 6,
      transform: 7
    });
  }
}
const lt = (e, t) => {
  const n = Math.abs(t[0] - e[0]), o = Math.abs(t[1] - e[1]);
  return Math.sqrt(Math.pow(n, 2) + Math.pow(o, 2));
}, Ye = [];
function di(e, t = q) {
  let n;
  const o = /* @__PURE__ */ new Set();
  function i(l) {
    if (x(e, l) && (e = l, n)) {
      const a = !Ye.length;
      for (const d of o)
        d[1](), Ye.push(d, e);
      if (a) {
        for (let d = 0; d < Ye.length; d += 2)
          Ye[d][0](Ye[d + 1]);
        Ye.length = 0;
      }
    }
  }
  function r(l) {
    i(l(e));
  }
  function s(l, a = q) {
    const d = [l, a];
    return o.add(d), o.size === 1 && (n = t(i) || q), l(e), () => {
      o.delete(d), o.size === 0 && n && (n(), n = null);
    };
  }
  return { set: i, update: r, subscribe: s };
}
const hi = (e, t) => {
  const { naturalWidth: n, naturalHeight: o } = e;
  if (!n && !o) {
    const { width: i, height: r } = e;
    t.setAttribute("viewBox", `0 0 ${i} ${r}`), e.addEventListener("load", (s) => {
      const l = s.target;
      t.setAttribute("viewBox", `0 0 ${l.naturalWidth} ${l.naturalHeight}`);
    });
  } else
    t.setAttribute("viewBox", `0 0 ${n} ${o}`);
}, mi = (e, t) => {
  hi(e, t);
  const { subscribe: n, set: o } = di(1);
  let i;
  return window.ResizeObserver && (i = new ResizeObserver(() => {
    const s = t.getBoundingClientRect(), { width: l, height: a } = t.viewBox.baseVal, d = Math.max(
      s.width / l,
      s.height / a
    );
    o(d);
  }), i.observe(t.parentElement)), { destroy: () => {
    i && i.disconnect();
  }, subscribe: n };
}, gr = "ontouchstart" in window || navigator.maxTouchPoints > 0;
function at(e) {
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
function Gt(e) {
  let t, n, o, i, r, s = (
    /*isClosable*/
    e[2] && Ht(e)
  );
  return {
    c() {
      t = C("polygon"), o = C("polygon"), s && s.c(), r = we(), c(t, "class", "a9s-outer"), c(t, "points", n = /*coords*/
      e[15]), c(o, "class", "a9s-inner"), c(o, "points", i = /*coords*/
      e[15]);
    },
    m(l, a) {
      I(l, t, a), I(l, o, a), s && s.m(l, a), I(l, r, a);
    },
    p(l, a) {
      a & /*isClosable, points, cursor*/
      7 && n !== (n = /*coords*/
      l[15]) && c(t, "points", n), a & /*isClosable, points, cursor*/
      7 && i !== (i = /*coords*/
      l[15]) && c(o, "points", i), /*isClosable*/
      l[2] ? s ? s.p(l, a) : (s = Ht(l), s.c(), s.m(r.parentNode, r)) : s && (s.d(1), s = null);
    },
    d(l) {
      l && k(t), l && k(o), s && s.d(l), l && k(r);
    }
  };
}
function Ht(e) {
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
      i && k(t);
    }
  };
}
function gi(e) {
  let t, n = (
    /*cursor*/
    e[1] && Gt(at(e))
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
      o[1] ? n ? n.p(at(o), i) : (n = Gt(at(o)), n.c(), n.m(t, null)) : n && (n.d(1), n = null);
    },
    i: q,
    o: q,
    d(o) {
      o && k(t), n && n.d();
    }
  };
}
const pi = 20;
function yi(e, t, n) {
  let o;
  const i = Ee();
  let { addEventListener: r } = t, { drawingMode: s } = t, { transform: l } = t, { viewportScale: a = 1 } = t, d, h = [], f = null, m = !1;
  const u = (p) => {
    const { timeStamp: b, offsetX: T, offsetY: M } = p;
    if (d = { timeStamp: b, offsetX: T, offsetY: M }, s === "drag" && h.length === 0) {
      const D = l.elementToImage(p.offsetX, p.offsetY);
      h.push(D), n(1, f = D);
    }
  }, g = (p) => {
    if (h.length > 0 && (n(1, f = l.elementToImage(p.offsetX, p.offsetY)), h.length > 2)) {
      const b = lt(f, h[0]) * a;
      n(2, m = b < pi);
    }
  }, w = (p) => {
    if (s === "click") {
      const b = p.timeStamp - d.timeStamp, T = lt([d.offsetX, d.offsetY], [p.offsetX, p.offsetY]);
      if (b > 300 || T > 15)
        return;
      if (m)
        E();
      else if (h.length === 0) {
        const M = l.elementToImage(p.offsetX, p.offsetY);
        h.push(M), n(1, f = M);
      } else
        h.push(f);
    } else {
      if (h.length === 1 && lt(h[0], f) <= 4) {
        n(0, h = []), n(1, f = null);
        return;
      }
      p.stopImmediatePropagation(), m ? E() : h.push(f);
    }
  }, S = () => {
    const p = [...h, f], b = {
      type: j.POLYGON,
      geometry: { bounds: Me(p), points: p }
    };
    mt(b) > 4 && (n(0, h = []), n(1, f = null), i("create", b));
  }, E = () => {
    const p = {
      type: j.POLYGON,
      geometry: {
        bounds: Me(h),
        points: [...h]
      }
    };
    n(0, h = []), n(1, f = null), i("create", p);
  };
  return Le(() => {
    r("pointerdown", u, !0), r("pointermove", g), r("pointerup", w, !0), r("dblclick", S, !0);
  }), e.$$set = (p) => {
    "addEventListener" in p && n(4, r = p.addEventListener), "drawingMode" in p && n(5, s = p.drawingMode), "transform" in p && n(6, l = p.transform), "viewportScale" in p && n(7, a = p.viewportScale);
  }, e.$$.update = () => {
    e.$$.dirty & /*viewportScale*/
    128 && n(3, o = 10 / a);
  }, [
    h,
    f,
    m,
    o,
    r,
    s,
    l,
    a
  ];
}
class _i extends oe {
  constructor(t) {
    super(), ne(this, t, yi, gi, x, {
      addEventListener: 4,
      drawingMode: 5,
      transform: 6,
      viewportScale: 7
    });
  }
}
function Ft(e) {
  let t, n, o, i, r, s, l, a, d, h;
  return {
    c() {
      t = C("ellipse"), s = C("ellipse"), c(t, "class", "a9s-outer"), c(t, "cx", n = /*x*/
      e[2] + /*w*/
      e[4] / 2), c(t, "cy", o = /*y*/
      e[3] + /*h*/
      e[5] / 2), c(t, "rx", i = /*w*/
      e[4] / 2), c(t, "ry", r = /*h*/
      e[5] / 2), c(s, "class", "a9s-inner"), c(s, "cx", l = /*x*/
      e[2] + /*w*/
      e[4] / 2), c(s, "cy", a = /*y*/
      e[3] + /*h*/
      e[5] / 2), c(s, "rx", d = /*w*/
      e[4] / 2), c(s, "ry", h = /*h*/
      e[5] / 2);
    },
    m(f, m) {
      I(f, t, m), I(f, s, m);
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
      20 && l !== (l = /*x*/
      f[2] + /*w*/
      f[4] / 2) && c(s, "cx", l), m & /*y, h*/
      40 && a !== (a = /*y*/
      f[3] + /*h*/
      f[5] / 2) && c(s, "cy", a), m & /*w*/
      16 && d !== (d = /*w*/
      f[4] / 2) && c(s, "rx", d), m & /*h*/
      32 && h !== (h = /*h*/
      f[5] / 2) && c(s, "ry", h);
    },
    d(f) {
      f && k(t), f && k(s);
    }
  };
}
function wi(e) {
  let t, n = (
    /*origin*/
    e[1] && Ft(e)
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
      o[1] ? n ? n.p(o, i) : (n = Ft(o), n.c(), n.m(t, null)) : n && (n.d(1), n = null);
    },
    i: q,
    o: q,
    d(o) {
      o && k(t), n && n.d(), e[9](null);
    }
  };
}
function bi(e, t, n) {
  const o = Ee();
  let { addEventListener: i } = t, { drawingMode: r } = t, { transform: s } = t, l, a, d, h, f, m, u, g = !1, w = !1, S, E;
  const p = (_) => {
    S = performance.now(), r === "drag" && (n(1, a = s.elementToImage(_.offsetX, _.offsetY)), d = a, n(2, h = a[0]), n(3, f = a[1]), n(4, m = 1), n(5, u = 1));
  }, b = (_) => {
    const A = _ || E;
    if (a)
      if (d = s.elementToImage(A.offsetX, A.offsetY), w) {
        const L = 2 * Math.abs(d[0] - a[0]), P = 2 * Math.abs(d[1] - a[1]);
        n(4, m = g ? Math.max(L, P) : L), n(5, u = g ? m : P), n(2, h = Math.min(d[0], a[0] - m / 2)), n(3, f = Math.min(d[1], a[1] - u / 2));
      } else {
        const L = Math.abs(d[0] - a[0]), P = Math.abs(d[1] - a[1]);
        n(4, m = g ? Math.max(L, P) : L), n(5, u = g ? m : P), n(2, h = Math.min(d[0], a[0])), n(3, f = Math.min(d[1], a[1]));
      }
    _ && (E = _);
  }, T = (_) => {
    r === "click" && _.stopImmediatePropagation();
    const A = performance.now() - S;
    if (r === "click") {
      if (A > 300)
        return;
      _.stopPropagation(), a ? M() : (n(1, a = s.elementToImage(_.offsetX, _.offsetY)), d = a, n(2, h = a[0]), n(3, f = a[1]), n(4, m = 1), n(5, u = 1));
    } else
      a && (A > 300 || m * u > 100 ? (_.stopPropagation(), M()) : (n(1, a = null), d = null, E = void 0));
  }, M = () => {
    if (m * u > 15) {
      const _ = {
        type: j.ELLIPSE,
        geometry: {
          bounds: {
            minX: h,
            minY: f,
            maxX: h + m,
            maxY: f + u
          },
          cx: h + m / 2,
          cy: f + u / 2,
          rx: m / 2,
          ry: u / 2
        }
      };
      o("create", _);
    }
    n(1, a = null), d = null, E = void 0;
  }, D = (_) => {
    _.key === "Shift" && (g = !0, b()), _.key === "Control" && (w = !0, b());
  }, U = (_) => {
    _.key === "Shift" && (g = !1, b()), _.key === "Control" && (w = !1, b());
  };
  Le(() => (document.addEventListener("keyup", U), document.addEventListener("keydown", D), i("pointerdown", p), i("pointermove", b), i("pointerup", T), () => {
    document.removeEventListener("keyup", U), document.removeEventListener("keydown", D);
  }));
  function y(_) {
    We[_ ? "unshift" : "push"](() => {
      l = _, n(0, l);
    });
  }
  return e.$$set = (_) => {
    "addEventListener" in _ && n(6, i = _.addEventListener), "drawingMode" in _ && n(7, r = _.drawingMode), "transform" in _ && n(8, s = _.transform);
  }, [
    l,
    a,
    h,
    f,
    m,
    u,
    i,
    r,
    s,
    y
  ];
}
class Ei extends oe {
  constructor(t) {
    super(), ne(this, t, bi, wi, x, {
      addEventListener: 6,
      drawingMode: 7,
      transform: 8
    });
  }
}
function zt(e) {
  let t;
  return {
    c() {
      t = C("path"), c(
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
      I(n, t, o);
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
function Ai(e) {
  let t, n = (
    /*isDrawing*/
    e[1] && zt(e)
  );
  return {
    c() {
      t = C("g"), n && n.c(), c(t, "class", "a9s-annotation a9s-rubberband");
    },
    m(o, i) {
      I(o, t, i), n && n.m(t, null);
    },
    p(o, [i]) {
      /*isDrawing*/
      o[1] ? n ? n.p(o, i) : (n = zt(o), n.c(), n.m(t, null)) : n && (n.d(1), n = null);
    },
    i: q,
    o: q,
    d(o) {
      o && k(t), n && n.d();
    }
  };
}
function Si(e, t, n) {
  let o;
  const i = Ee();
  let { addEventListener: r } = t, { drawingMode: s } = t, { annotation: l } = t, { transform: a } = t, { viewportScale: d = 1 } = t, { style: h = void 0 } = t, f = { fillOpacity: 1 }, m = [], u = "", g = !1;
  const w = (b) => {
    if (s === "drag" && m.length === 0) {
      n(1, g = !0);
      const T = a.elementToImage(b.offsetX, b.offsetY);
      m.push([...T, b.pressure]), n(0, u = Je(m, Ze));
    }
  }, S = (b) => {
    if (g) {
      const T = a.elementToImage(b.offsetX, b.offsetY);
      m.push([...T, b.pressure]), n(0, u = Je(m, Ze));
    }
  }, E = (b) => {
    g && p();
  }, p = () => {
    const b = {
      type: j.FREEHAND,
      geometry: {
        bounds: Me(m.map((T) => [T[0], T[1]])),
        points: m
      }
    };
    n(1, g = !1), m = [], i("create", b);
  };
  return Le(() => {
    r("pointerdown", w, !0), r("pointermove", S), r("pointerup", E, !0);
  }), e.$$set = (b) => {
    "addEventListener" in b && n(3, r = b.addEventListener), "drawingMode" in b && n(4, s = b.drawingMode), "annotation" in b && n(5, l = b.annotation), "transform" in b && n(6, a = b.transform), "viewportScale" in b && n(7, d = b.viewportScale), "style" in b && n(8, h = b.style);
  }, e.$$.update = () => {
    e.$$.dirty & /*viewportScale*/
    128, e.$$.dirty & /*annotation, style*/
    288 && n(2, o = Ue(l, h, f));
  }, [
    u,
    g,
    o,
    r,
    s,
    l,
    a,
    d,
    h
  ];
}
class Ti extends oe {
  constructor(t) {
    super(), ne(this, t, Si, Ai, x, {
      addEventListener: 3,
      drawingMode: 4,
      annotation: 5,
      transform: 6,
      viewportScale: 7,
      style: 8
    });
  }
}
const bt = /* @__PURE__ */ new Map([
  ["rectangle", { tool: ui }],
  ["polygon", { tool: _i }],
  ["ellipse", { tool: Ei }],
  ["freehand", { tool: Ti }]
]), pt = () => [...bt.keys()], yn = (e) => bt.get(e), Mi = (e, t, n) => bt.set(e, { tool: t, opts: n });
function Li(e) {
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
    m(s, l) {
      I(s, t, l), pe(t, n), pe(t, i);
    },
    p(s, [l]) {
      l & /*computedStyle*/
      2 && o !== (o = /*computedStyle*/
      s[1] ? "display:none;" : void 0) && c(n, "style", o), l & /*computedStyle*/
      2 && c(
        i,
        "style",
        /*computedStyle*/
        s[1]
      ), l & /*annotation*/
      1 && r !== (r = /*annotation*/
      s[0].id) && c(t, "data-id", r);
    },
    i: q,
    o: q,
    d(s) {
      s && k(t);
    }
  };
}
function Oi(e, t, n) {
  let o, { annotation: i } = t, { geom: r } = t, { style: s = void 0 } = t;
  const { cx: l, cy: a, rx: d, ry: h } = r;
  return e.$$set = (f) => {
    "annotation" in f && n(0, i = f.annotation), "geom" in f && n(6, r = f.geom), "style" in f && n(7, s = f.style);
  }, e.$$.update = () => {
    e.$$.dirty & /*annotation, style*/
    129 && n(1, o = Ue(i, s));
  }, [i, o, l, a, d, h, r, s];
}
class vi extends oe {
  constructor(t) {
    super(), ne(this, t, Oi, Li, x, { annotation: 0, geom: 6, style: 7 });
  }
}
function ki(e) {
  let t, n, o, i, r;
  return {
    c() {
      t = C("g"), n = C("polygon"), i = C("polygon"), c(n, "class", "a9s-outer"), c(n, "style", o = /*computedStyle*/
      e[1] ? "display:none;" : void 0), c(
        n,
        "points",
        /*points*/
        e[2].map(Ii).join(" ")
      ), c(i, "class", "a9s-inner"), c(
        i,
        "style",
        /*computedStyle*/
        e[1]
      ), c(
        i,
        "points",
        /*points*/
        e[2].map(Pi).join(" ")
      ), c(t, "data-id", r = /*annotation*/
      e[0].id);
    },
    m(s, l) {
      I(s, t, l), pe(t, n), pe(t, i);
    },
    p(s, [l]) {
      l & /*computedStyle*/
      2 && o !== (o = /*computedStyle*/
      s[1] ? "display:none;" : void 0) && c(n, "style", o), l & /*computedStyle*/
      2 && c(
        i,
        "style",
        /*computedStyle*/
        s[1]
      ), l & /*annotation*/
      1 && r !== (r = /*annotation*/
      s[0].id) && c(t, "data-id", r);
    },
    i: q,
    o: q,
    d(s) {
      s && k(t);
    }
  };
}
const Ii = (e) => e.join(","), Pi = (e) => e.join(",");
function Bi(e, t, n) {
  let o, { annotation: i } = t, { geom: r } = t, { style: s = void 0 } = t;
  const { points: l } = r;
  return e.$$set = (a) => {
    "annotation" in a && n(0, i = a.annotation), "geom" in a && n(3, r = a.geom), "style" in a && n(4, s = a.style);
  }, e.$$.update = () => {
    e.$$.dirty & /*annotation, style*/
    17 && n(1, o = Ue(i, s));
  }, [i, o, l, r, s];
}
class Di extends oe {
  constructor(t) {
    super(), ne(this, t, Bi, ki, x, { annotation: 0, geom: 3, style: 4 });
  }
}
function Yi(e) {
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
    m(s, l) {
      I(s, t, l), pe(t, n), pe(t, i);
    },
    p(s, [l]) {
      l & /*computedStyle*/
      32 && o !== (o = /*computedStyle*/
      s[5] ? "display:none;" : void 0) && c(n, "style", o), l & /*x*/
      16 && c(
        n,
        "x",
        /*x*/
        s[4]
      ), l & /*y*/
      8 && c(
        n,
        "y",
        /*y*/
        s[3]
      ), l & /*w*/
      4 && c(
        n,
        "width",
        /*w*/
        s[2]
      ), l & /*h*/
      2 && c(
        n,
        "height",
        /*h*/
        s[1]
      ), l & /*computedStyle*/
      32 && c(
        i,
        "style",
        /*computedStyle*/
        s[5]
      ), l & /*x*/
      16 && c(
        i,
        "x",
        /*x*/
        s[4]
      ), l & /*y*/
      8 && c(
        i,
        "y",
        /*y*/
        s[3]
      ), l & /*w*/
      4 && c(
        i,
        "width",
        /*w*/
        s[2]
      ), l & /*h*/
      2 && c(
        i,
        "height",
        /*h*/
        s[1]
      ), l & /*annotation*/
      1 && r !== (r = /*annotation*/
      s[0].id) && c(t, "data-id", r);
    },
    i: q,
    o: q,
    d(s) {
      s && k(t);
    }
  };
}
function Ri(e, t, n) {
  let o, i, r, s, l, { annotation: a } = t, { geom: d } = t, { style: h = void 0 } = t;
  return e.$$set = (f) => {
    "annotation" in f && n(0, a = f.annotation), "geom" in f && n(6, d = f.geom), "style" in f && n(7, h = f.style);
  }, e.$$.update = () => {
    e.$$.dirty & /*annotation, style*/
    129 && n(5, o = Ue(a, h)), e.$$.dirty & /*geom*/
    64 && n(4, { x: i, y: r, w: s, h: l } = d, i, (n(3, r), n(6, d)), (n(2, s), n(6, d)), (n(1, l), n(6, d)));
  }, [a, l, s, r, i, o, d, h];
}
class Xi extends oe {
  constructor(t) {
    super(), ne(this, t, Ri, Yi, x, { annotation: 0, geom: 6, style: 7 });
  }
}
function Ci(e) {
  let t, n, o;
  return {
    c() {
      t = C("g"), n = C("path"), c(n, "class", "a9s-outer"), c(
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
      I(i, t, r), pe(t, n);
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
    i: q,
    o: q,
    d(i) {
      i && k(t);
    }
  };
}
function Ni(e, t, n) {
  let o, i, { annotation: r } = t, { geom: s } = t, { style: l = void 0 } = t, a = { fillOpacity: 1 };
  const { points: d } = s;
  return e.$$set = (h) => {
    "annotation" in h && n(0, r = h.annotation), "geom" in h && n(3, s = h.geom), "style" in h && n(4, l = h.style);
  }, e.$$.update = () => {
    e.$$.dirty & /*annotation, style*/
    17 && n(2, o = Ue(r, l, a));
  }, n(1, i = Je(d, Ze)), [r, i, o, s, l];
}
class Ui extends oe {
  constructor(t) {
    super(), ne(this, t, Ni, Ci, x, { annotation: 0, geom: 3, style: 4 });
  }
}
const pr = {
  elementToImage: (e, t) => [e, t]
}, Vi = (e) => ({
  elementToImage: (t, n) => {
    const o = e.getBoundingClientRect(), i = e.createSVGPoint();
    i.x = t + o.x, i.y = n + o.y;
    const { x: r, y: s } = i.matrixTransform(e.getScreenCTM().inverse());
    return [r, s];
  }
}), Gi = 250, Hi = (e, t) => {
  const n = Ee();
  let o;
  return { onPointerDown: () => o = performance.now(), onPointerUp: (s) => {
    if (performance.now() - o < Gi) {
      const { x: a, y: d } = Fi(s, e), h = t.getAt(a, d);
      h ? n("click", { originalEvent: s, annotation: h }) : n("click", { originalEvent: s });
    }
  } };
}, Fi = (e, t) => {
  const n = t.createSVGPoint(), o = t.getBoundingClientRect(), i = e.clientX - o.x, r = e.clientY - o.y, { left: s, top: l } = t.getBoundingClientRect();
  return n.x = i + s, n.y = r + l, n.matrixTransform(t.getScreenCTM().inverse());
};
function jt(e, t, n) {
  const o = e.slice();
  return o[29] = t[n], o;
}
function qt(e, t, n) {
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
function Kt(e) {
  let t = (
    /*annotation*/
    e[32].id
  ), n, o, i = Wt(e);
  return {
    c() {
      i.c(), n = we();
    },
    m(r, s) {
      i.m(r, s), I(r, n, s), o = !0;
    },
    p(r, s) {
      s[0] & /*$store*/
      8192 && x(t, t = /*annotation*/
      r[32].id) ? (ye(), z(i, 1, 1, q), _e(), i = Wt(r), i.c(), F(i, 1), i.m(n.parentNode, n)) : i.p(r, s);
    },
    i(r) {
      o || (F(i), o = !0);
    },
    o(r) {
      z(i), o = !1;
    },
    d(r) {
      r && k(n), i.d(r);
    }
  };
}
function zi(e) {
  let t, n;
  return t = new Ui({
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
      he(t.$$.fragment);
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
function ji(e) {
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
      he(t.$$.fragment);
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
      he(t.$$.fragment);
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
      he(t.$$.fragment);
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
function Wt(e) {
  let t, n, o, i;
  const r = [Ki, qi, ji, zi], s = [];
  function l(a, d) {
    return (
      /*selector*/
      a[35].type === j.ELLIPSE ? 0 : (
        /*selector*/
        a[35].type === j.RECTANGLE ? 1 : (
          /*selector*/
          a[35].type === j.POLYGON ? 2 : (
            /*selector*/
            a[35].type === j.FREEHAND ? 3 : -1
          )
        )
      )
    );
  }
  return ~(t = l(e)) && (n = s[t] = r[t](e)), {
    c() {
      n && n.c(), o = we();
    },
    m(a, d) {
      ~t && s[t].m(a, d), I(a, o, d), i = !0;
    },
    p(a, d) {
      let h = t;
      t = l(a), t === h ? ~t && s[t].p(a, d) : (n && (ye(), z(s[h], 1, 1, () => {
        s[h] = null;
      }), _e()), ~t ? (n = s[t], n ? n.p(a, d) : (n = s[t] = r[t](a), n.c()), F(n, 1), n.m(o.parentNode, o)) : n = null);
    },
    i(a) {
      i || (F(n), i = !0);
    },
    o(a) {
      z(n), i = !1;
    },
    d(a) {
      ~t && s[t].d(a), a && k(o);
    }
  };
}
function Zt(e) {
  let t = !/*isEditable*/
  e[7](
    /*annotation*/
    e[32]
  ), n, o, i = t && Kt(ct(e));
  return {
    c() {
      i && i.c(), n = we();
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
      8320 && F(i, 1)) : (i = Kt(ct(r)), i.c(), F(i, 1), i.m(n.parentNode, n)) : i && (ye(), z(i, 1, 1, () => {
        i = null;
      }), _e());
    },
    i(r) {
      o || (F(i), o = !0);
    },
    o(r) {
      z(i), o = !1;
    },
    d(r) {
      i && i.d(r), r && k(n);
    }
  };
}
function Jt(e) {
  let t, n, o, i;
  const r = [Zi, Wi], s = [];
  function l(a, d) {
    return (
      /*editableAnnotations*/
      a[6] ? 0 : (
        /*tool*/
        a[12] && /*drawingEnabled*/
        a[0] ? 1 : -1
      )
    );
  }
  return ~(t = l(e)) && (n = s[t] = r[t](e)), {
    c() {
      n && n.c(), o = we();
    },
    m(a, d) {
      ~t && s[t].m(a, d), I(a, o, d), i = !0;
    },
    p(a, d) {
      let h = t;
      t = l(a), t === h ? ~t && s[t].p(a, d) : (n && (ye(), z(s[h], 1, 1, () => {
        s[h] = null;
      }), _e()), ~t ? (n = s[t], n ? n.p(a, d) : (n = s[t] = r[t](a), n.c()), F(n, 1), n.m(o.parentNode, o)) : n = null);
    },
    i(a) {
      i || (F(n), i = !0);
    },
    o(a) {
      z(n), i = !1;
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
  ), n, o, i = Qt(e);
  return {
    c() {
      i.c(), n = we();
    },
    m(r, s) {
      i.m(r, s), I(r, n, s), o = !0;
    },
    p(r, s) {
      s[0] & /*toolName*/
      4 && x(t, t = /*toolName*/
      r[2]) ? (ye(), z(i, 1, 1, q), _e(), i = Qt(r), i.c(), F(i, 1), i.m(n.parentNode, n)) : i.p(r, s);
    },
    i(r) {
      o || (F(i), o = !0);
    },
    o(r) {
      z(i), o = !1;
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
    i[s] = $t(jt(e, o, s));
  const r = (s) => z(i[s], 1, 1, () => {
    i[s] = null;
  });
  return {
    c() {
      for (let s = 0; s < i.length; s += 1)
        i[s].c();
      t = we();
    },
    m(s, l) {
      for (let a = 0; a < i.length; a += 1)
        i[a] && i[a].m(s, l);
      I(s, t, l), n = !0;
    },
    p(s, l) {
      if (l[0] & /*editableAnnotations, drawingEl, style, transform, $scale, onChangeSelected*/
      279634) {
        o = /*editableAnnotations*/
        s[6];
        let a;
        for (a = 0; a < o.length; a += 1) {
          const d = jt(s, o, a);
          i[a] ? (i[a].p(d, l), F(i[a], 1)) : (i[a] = $t(d), i[a].c(), F(i[a], 1), i[a].m(t.parentNode, t));
        }
        for (ye(), a = o.length; a < i.length; a += 1)
          r(a);
        _e();
      }
    },
    i(s) {
      if (!n) {
        for (let l = 0; l < o.length; l += 1)
          F(i[l]);
        n = !0;
      }
    },
    o(s) {
      i = i.filter(Boolean);
      for (let l = 0; l < i.length; l += 1)
        z(i[l]);
      n = !1;
    },
    d(s) {
      yt(i, s), s && k(t);
    }
  };
}
function Qt(e) {
  let t, n;
  return t = new ai({
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
      he(t.$$.fragment);
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
function xt(e) {
  let t, n;
  return t = new si({
    props: {
      target: (
        /*drawingEl*/
        e[4]
      ),
      editor: Nt(
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
      he(t.$$.fragment);
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
      64 && (r.editor = Nt(
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
function $t(e) {
  let t = (
    /*editable*/
    e[29].id
  ), n, o, i = xt(e);
  return {
    c() {
      i.c(), n = we();
    },
    m(r, s) {
      i.m(r, s), I(r, n, s), o = !0;
    },
    p(r, s) {
      s[0] & /*editableAnnotations*/
      64 && x(t, t = /*editable*/
      r[29].id) ? (ye(), z(i, 1, 1, q), _e(), i = xt(r), i.c(), F(i, 1), i.m(n.parentNode, n)) : i.p(r, s);
    },
    i(r) {
      o || (F(i), o = !0);
    },
    o(r) {
      z(i), o = !1;
    },
    d(r) {
      r && k(n), i.d(r);
    }
  };
}
function Ji(e) {
  let t, n, o, i, r, s, l = (
    /*$store*/
    e[13]
  ), a = [];
  for (let f = 0; f < l.length; f += 1)
    a[f] = Zt(qt(e, l, f));
  const d = (f) => z(a[f], 1, 1, () => {
    a[f] = null;
  });
  let h = (
    /*drawingEl*/
    e[4] && Jt(e)
  );
  return {
    c() {
      t = C("svg"), n = C("g");
      for (let f = 0; f < a.length; f += 1)
        a[f].c();
      o = C("g"), h && h.c(), c(o, "class", "drawing"), c(t, "class", "a9s-annotationlayer"), Tt(
        t,
        "drawing",
        /*tool*/
        e[12]
      );
    },
    m(f, m) {
      I(f, t, m), pe(t, n);
      for (let u = 0; u < a.length; u += 1)
        a[u] && a[u].m(n, null);
      pe(t, o), h && h.m(o, null), e[25](o), e[26](t), i = !0, r || (s = [
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
    p(f, m) {
      if (e = f, m[0] & /*$store, style, isEditable*/
      8322) {
        l = /*$store*/
        e[13];
        let u;
        for (u = 0; u < l.length; u += 1) {
          const g = qt(e, l, u);
          a[u] ? (a[u].p(g, m), F(a[u], 1)) : (a[u] = Zt(g), a[u].c(), F(a[u], 1), a[u].m(n, null));
        }
        for (ye(), u = l.length; u < a.length; u += 1)
          d(u);
        _e();
      }
      /*drawingEl*/
      e[4] ? h ? (h.p(e, m), m[0] & /*drawingEl*/
      16 && F(h, 1)) : (h = Jt(e), h.c(), F(h, 1), h.m(o, null)) : h && (ye(), z(h, 1, 1, () => {
        h = null;
      }), _e()), (!i || m[0] & /*tool*/
      4096) && Tt(
        t,
        "drawing",
        /*tool*/
        e[12]
      );
    },
    i(f) {
      if (!i) {
        for (let m = 0; m < l.length; m += 1)
          F(a[m]);
        F(h), i = !0;
      }
    },
    o(f) {
      a = a.filter(Boolean);
      for (let m = 0; m < a.length; m += 1)
        z(a[m]);
      z(h), i = !1;
    },
    d(f) {
      f && k(t), yt(a, f), h && h.d(), e[25](null), e[26](null), r = !1, de(s);
    }
  };
}
function Qi(e, t, n) {
  let o, i, r, s, l, a, d, h, f, m, u = q, g = () => (u(), u = rn(y, (v) => n(14, m = v)), y);
  e.$$.on_destroy.push(() => u());
  let { drawingEnabled: w } = t, { image: S } = t, { preferredDrawingMode: E } = t, { state: p } = t, { style: b = void 0 } = t, { toolName: T = pt().length > 0 ? pt()[0] : void 0 } = t, { user: M } = t, D, U, y;
  Le(() => g(n(5, y = mi(S, U))));
  const { selection: _, store: A } = p;
  St(e, _, (v) => n(24, h = v)), St(e, A, (v) => n(13, f = v));
  let L = null, P = null;
  const Y = (v) => {
    A.unobserve(L);
    const V = v.filter(({ editable: N }) => N).map(({ id: N }) => N);
    V.length > 0 ? (n(6, P = V.map((N) => A.getAnnotation(N))), L = (N) => {
      const { updated: le } = N.changes;
      n(6, P = le.map((K) => K.newValue));
    }, A.observe(L, { annotations: V })) : n(6, P = null);
  }, R = (v) => {
    const V = dn(), N = {
      id: V,
      bodies: [],
      target: {
        annotation: V,
        selector: v.detail,
        creator: M,
        created: /* @__PURE__ */ new Date()
      }
    };
    A.addAnnotation(N), _.setSelected(N.id);
  }, X = (v) => (V) => {
    var me;
    const { target: N } = v, le = 10 * 60 * 1e3, K = ((me = N.creator) == null ? void 0 : me.id) !== M.id || !N.created || (/* @__PURE__ */ new Date()).getTime() - N.created.getTime() > le;
    A.updateTarget({
      ...N,
      selector: V.detail,
      created: K ? N.created : /* @__PURE__ */ new Date(),
      updated: K ? /* @__PURE__ */ new Date() : null,
      updatedBy: K ? M : null
    });
  };
  function se(v) {
    We[v ? "unshift" : "push"](() => {
      D = v, n(4, D);
    });
  }
  function H(v) {
    We[v ? "unshift" : "push"](() => {
      U = v, n(3, U);
    });
  }
  return e.$$set = (v) => {
    "drawingEnabled" in v && n(0, w = v.drawingEnabled), "image" in v && n(19, S = v.image), "preferredDrawingMode" in v && n(20, E = v.preferredDrawingMode), "state" in v && n(21, p = v.state), "style" in v && n(1, b = v.style), "toolName" in v && n(2, T = v.toolName), "user" in v && n(22, M = v.user);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*toolName*/
    4 && n(12, { tool: o, opts: i } = yn(T), o, (n(23, i), n(2, T))), e.$$.dirty[0] & /*opts, preferredDrawingMode*/
    9437184 && n(11, r = (i == null ? void 0 : i.drawingMode) || E), e.$$.dirty[0] & /*svgEl*/
    8 && n(10, s = Vi(U)), e.$$.dirty[0] & /*svgEl*/
    8 && n(9, { onPointerDown: l, onPointerUp: a } = Hi(U, A), l, (n(8, a), n(3, U))), e.$$.dirty[0] & /*$selection*/
    16777216 && n(7, d = (v) => h.selected.find((V) => V.id === v.id && V.editable)), e.$$.dirty[0] & /*$selection*/
    16777216 && Y(h.selected);
  }, [
    w,
    b,
    T,
    U,
    D,
    y,
    P,
    d,
    a,
    l,
    s,
    r,
    o,
    f,
    m,
    _,
    A,
    R,
    X,
    S,
    E,
    p,
    M,
    i,
    h,
    se,
    H
  ];
}
class xi extends oe {
  constructor(t) {
    super(), ne(
      this,
      t,
      Qi,
      Ji,
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
function $i(e, t, n, o, i) {
  _n(e, t, n || 0, o || e.length - 1, i || er);
}
function _n(e, t, n, o, i) {
  for (; o > n; ) {
    if (o - n > 600) {
      var r = o - n + 1, s = t - n + 1, l = Math.log(r), a = 0.5 * Math.exp(2 * l / 3), d = 0.5 * Math.sqrt(l * a * (r - a) / r) * (s - r / 2 < 0 ? -1 : 1), h = Math.max(n, Math.floor(t - s * a / r + d)), f = Math.min(o, Math.floor(t + (r - s) * a / r + d));
      _n(e, t, h, f, i);
    }
    var m = e[t], u = n, g = o;
    for (Fe(e, n, t), i(e[o], m) > 0 && Fe(e, n, o); u < g; ) {
      for (Fe(e, u, g), u++, g--; i(e[u], m) < 0; )
        u++;
      for (; i(e[g], m) > 0; )
        g--;
    }
    i(e[n], m) === 0 ? Fe(e, n, g) : (g++, Fe(e, g, o)), g <= t && (n = g + 1), t <= g && (o = g - 1);
  }
}
function Fe(e, t, n) {
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
    if (!$e(t, n))
      return o;
    const i = this.toBBox, r = [];
    for (; n; ) {
      for (let s = 0; s < n.children.length; s++) {
        const l = n.children[s], a = n.leaf ? i(l) : l;
        $e(t, a) && (n.leaf ? o.push(l) : ut(t, a) ? this._all(l, o) : r.push(l));
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
    let l, a, d;
    for (; o || r.length; ) {
      if (o || (o = r.pop(), a = r[r.length - 1], l = s.pop(), d = !0), o.leaf) {
        const h = nr(t, o.children, n);
        if (h !== -1)
          return o.children.splice(h, 1), r.push(o), this._condense(r), this;
      }
      !d && !o.leaf && ut(o, i) ? (r.push(o), s.push(l), l = 0, a = o, o = o.children[0]) : a ? (l++, o = a.children[l], d = !1) : o = null;
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
    let s = this._maxEntries, l;
    if (r <= s)
      return l = Ce(t.slice(n, o + 1)), Re(l, this.toBBox), l;
    i || (i = Math.ceil(Math.log(r) / Math.log(s)), s = Math.ceil(r / Math.pow(s, i - 1))), l = Ce([]), l.leaf = !1, l.height = i;
    const a = Math.ceil(r / s), d = a * Math.ceil(Math.sqrt(s));
    en(t, n, o, d, this.compareMinX);
    for (let h = n; h <= o; h += d) {
      const f = Math.min(h + d - 1, o);
      en(t, h, f, a, this.compareMinY);
      for (let m = h; m <= f; m += a) {
        const u = Math.min(m + a - 1, f);
        l.children.push(this._build(t, m, u, i - 1));
      }
    }
    return Re(l, this.toBBox), l;
  }
  _chooseSubtree(t, n, o, i) {
    for (; i.push(n), !(n.leaf || i.length - 1 === o); ) {
      let r = 1 / 0, s = 1 / 0, l;
      for (let a = 0; a < n.children.length; a++) {
        const d = n.children[a], h = ft(d), f = rr(t, d) - h;
        f < s ? (s = f, r = h < r ? h : r, l = d) : f === s && h < r && (r = h, l = d);
      }
      n = l || n.children[0];
    }
    return n;
  }
  _insert(t, n, o) {
    const i = o ? t : this.toBBox(t), r = [], s = this._chooseSubtree(i, this.data, n, r);
    for (s.children.push(t), je(s, i); n >= 0 && r[n].children.length > this._maxEntries; )
      this._split(r, n), n--;
    this._adjustParentBBoxes(i, r, n);
  }
  // split overflowed node into two
  _split(t, n) {
    const o = t[n], i = o.children.length, r = this._minEntries;
    this._chooseSplitAxis(o, r, i);
    const s = this._chooseSplitIndex(o, r, i), l = Ce(o.children.splice(s, o.children.length - s));
    l.height = o.height, l.leaf = o.leaf, Re(o, this.toBBox), Re(l, this.toBBox), n ? t[n - 1].children.push(l) : this._splitRoot(o, l);
  }
  _splitRoot(t, n) {
    this.data = Ce([t, n]), this.data.height = t.height + 1, this.data.leaf = !1, Re(this.data, this.toBBox);
  }
  _chooseSplitIndex(t, n, o) {
    let i, r = 1 / 0, s = 1 / 0;
    for (let l = n; l <= o - n; l++) {
      const a = ze(t, 0, l, this.toBBox), d = ze(t, l, o, this.toBBox), h = sr(a, d), f = ft(a) + ft(d);
      h < r ? (r = h, i = l, s = f < s ? f : s) : h === r && f < s && (s = f, i = l);
    }
    return i || o - n;
  }
  // sorts node children by the best axis for split
  _chooseSplitAxis(t, n, o) {
    const i = t.leaf ? this.compareMinX : or, r = t.leaf ? this.compareMinY : ir, s = this._allDistMargin(t, n, o, i), l = this._allDistMargin(t, n, o, r);
    s < l && t.children.sort(i);
  }
  // total margin of all possible split distributions where each node is at least m full
  _allDistMargin(t, n, o, i) {
    t.children.sort(i);
    const r = this.toBBox, s = ze(t, 0, n, r), l = ze(t, o - n, o, r);
    let a = xe(s) + xe(l);
    for (let d = n; d < o - n; d++) {
      const h = t.children[d];
      je(s, t.leaf ? r(h) : h), a += xe(s);
    }
    for (let d = o - n - 1; d >= n; d--) {
      const h = t.children[d];
      je(l, t.leaf ? r(h) : h), a += xe(l);
    }
    return a;
  }
  _adjustParentBBoxes(t, n, o) {
    for (let i = o; i >= 0; i--)
      je(n[i], t);
  }
  _condense(t) {
    for (let n = t.length - 1, o; n >= 0; n--)
      t[n].children.length === 0 ? n > 0 ? (o = t[n - 1].children, o.splice(o.indexOf(t[n]), 1)) : this.clear() : Re(t[n], this.toBBox);
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
function Re(e, t) {
  ze(e, 0, e.children.length, t, e);
}
function ze(e, t, n, o, i) {
  i || (i = Ce(null)), i.minX = 1 / 0, i.minY = 1 / 0, i.maxX = -1 / 0, i.maxY = -1 / 0;
  for (let r = t; r < n; r++) {
    const s = e.children[r];
    je(i, e.leaf ? o(s) : s);
  }
  return i;
}
function je(e, t) {
  return e.minX = Math.min(e.minX, t.minX), e.minY = Math.min(e.minY, t.minY), e.maxX = Math.max(e.maxX, t.maxX), e.maxY = Math.max(e.maxY, t.maxY), e;
}
function or(e, t) {
  return e.minX - t.minX;
}
function ir(e, t) {
  return e.minY - t.minY;
}
function ft(e) {
  return (e.maxX - e.minX) * (e.maxY - e.minY);
}
function xe(e) {
  return e.maxX - e.minX + (e.maxY - e.minY);
}
function rr(e, t) {
  return (Math.max(t.maxX, e.maxX) - Math.min(t.minX, e.minX)) * (Math.max(t.maxY, e.maxY) - Math.min(t.minY, e.minY));
}
function sr(e, t) {
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
function en(e, t, n, o, i) {
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
  }, i = (f) => {
    const { minX: m, minY: u, maxX: g, maxY: w } = f.selector.geometry.bounds, S = { minX: m, minY: u, maxX: g, maxY: w, target: f };
    e.insert(S), t.set(f.annotation, S);
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
      }).map((w) => w.target).filter((w) => w.selector.type === j.RECTANGLE || Bn(w.selector, f, m));
      if (g.length > 0)
        return g.sort((w, S) => mt(w.selector) - mt(S.selector)), g[0];
    },
    getIntersecting: (f, m, u, g) => e.search({
      minX: f,
      minY: m,
      maxX: f + u,
      maxY: m + g
    }).map((w) => w.target),
    insert: i,
    remove: r,
    set: (f, m = !0) => {
      m && o();
      const u = f.map((g) => {
        const { minX: w, minY: S, maxX: E, maxY: p } = g.selector.geometry.bounds;
        return { minX: w, minY: S, maxX: E, maxY: p, target: g };
      });
      u.forEach((g) => t.set(g.target.annotation, g)), e.load(u);
    },
    size: () => e.all().length,
    update: (f, m) => {
      r(f), i(m);
    }
  };
}, ar = (e) => {
  const t = bo(), n = lr(), o = co(t, e.pointerSelectAction), i = ao(t), r = Mo();
  return t.observe(({ changes: a }) => {
    n.set(a.created.map((d) => d.target), !1), a.deleted.forEach((d) => n.remove(d.target)), a.updated.forEach(({ oldValue: d, newValue: h }) => n.update(d.target, h.target));
  }), {
    store: {
      ...t,
      getAt: (a, d) => {
        const h = n.getAt(a, d);
        return h ? t.getAnnotation(h.annotation) : void 0;
      },
      getIntersecting: (a, d, h, f) => n.getIntersecting(a, d, h, f).map((m) => t.getAnnotation(m.annotation))
    },
    selection: o,
    hover: i,
    viewport: r
  };
}, cr = (e) => {
  const t = ar(e);
  return {
    ...t,
    store: Eo(t.store)
  };
}, fr = (e) => {
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
      const s = Math.round(r * t.width / 10), l = Math.round(i * t.height / 10), a = n.getImageData(s, l, 1, 1).data, d = (0.299 * a[0] + 0.587 * a[1] + 0.114 * a[2]) / 255;
      o += d;
    }
  return o / 81;
}, ur = (e) => {
  const t = fr(e), n = t > 0.6 ? "dark" : "light";
  return console.log(`[Annotorious] Image brightness: ${t.toFixed(1)}. Setting ${n} theme.`), n;
}, tn = (e, t, n) => t.setAttribute("data-theme", n === "auto" ? ur(e) : n), dr = (e, t) => ({
  ...e,
  drawingEnabled: e.drawingEnabled === void 0 ? t.drawingEnabled : e.drawingEnabled,
  drawingMode: e.drawingMode || t.drawingMode,
  pointerSelectAction: e.pointerSelectAction || t.pointerSelectAction,
  theme: e.theme || t.theme
}), nn = navigator.userAgent.indexOf("Mac OS X") !== -1, hr = (e, t) => {
  const n = t || document, o = (s) => {
    s.key === "Z" && s.ctrlKey ? e.undo() : s.key === "Y" && s.ctrlKey && e.redo();
  }, i = (s) => {
    s.key === "z" && s.metaKey && (s.shiftKey ? e.redo() : e.undo());
  }, r = () => {
    nn ? n.removeEventListener("keydown", i) : n.removeEventListener("keydown", o);
  };
  return nn ? n.addEventListener("keydown", i) : n.addEventListener("keydown", o), {
    destroy: r
  };
};
const yr = (e, t = {}) => {
  if (!e)
    throw "Missing argument: image";
  const n = typeof e == "string" ? document.getElementById(e) : e, o = dr(t, {
    drawingEnabled: !0,
    drawingMode: "drag",
    pointerSelectAction: hn.EDIT,
    theme: "light"
  }), i = cr(o), { selection: r, store: s } = i, l = To(s), a = Lo(
    i,
    l,
    o.adapter,
    o.autoSave
  ), d = document.createElement("DIV");
  d.style.position = "relative", d.style.display = "inline-block", n.style.display = "block", n.parentNode.insertBefore(d, n), d.appendChild(n);
  const h = hr(l);
  let f = Do();
  tn(n, d, o.theme);
  const m = new xi({
    target: d,
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
    const { originalEvent: _, annotation: A } = y.detail;
    A ? r.clickSelect(A.id, _) : r.isEmpty() || r.clear();
  });
  const u = vo(i, l, o.adapter), g = () => {
    m.$destroy(), d.parentNode.insertBefore(n, d), d.parentNode.removeChild(d), h.destroy(), l.destroy();
  }, w = () => f, S = (y, _, A) => Mi(y, _, A), E = (y, _) => ti(y, _), p = (y) => {
    if (!yn(y))
      throw `No drawing tool named ${y}`;
    m.$set({ toolName: y });
  }, b = (y) => m.$set({ drawingEnabled: y }), T = (y) => {
    console.warn("Filter not implemented yet");
  }, M = (y) => m.$set({ style: y }), D = (y) => tn(n, d, y), U = (y) => {
    f = y, m.$set({ user: y });
  };
  return {
    ...u,
    destroy: g,
    getUser: w,
    listDrawingTools: pt,
    on: a.on,
    off: a.off,
    registerDrawingTool: S,
    registerShapeEditor: E,
    setDrawingEnabled: b,
    setDrawingTool: p,
    setFilter: T,
    setStyle: M,
    setTheme: D,
    setUser: U,
    state: i
  };
};
export {
  nt as Editor,
  si as EditorMount,
  Jo as EllipseEditor,
  ei as FreehandEditor,
  O as Handle,
  pr as IdentityTransform,
  Ho as PolygonEditor,
  qo as RectangleEditor,
  Rn as RectangleUtil,
  ui as RubberbandRectangle,
  xi as SVGAnnotationLayer,
  j as ShapeType,
  ai as ToolMount,
  mr as W3CImageFormat,
  Hi as addEventListeners,
  Me as boundsFromPoints,
  mt as computeArea,
  yr as createImageAnnotator,
  ar as createImageAnnotatorState,
  Vi as createSVGTransform,
  cr as createSvelteImageAnnotatorState,
  ur as detectTheme,
  lt as distance,
  mi as enableResponsive,
  dr as fillDefaults,
  Nt as getEditor,
  yn as getTool,
  hr as initKeyboardCommands,
  Bn as intersects,
  gr as isTouch,
  pt as listDrawingTools,
  Cn as parseFragmentSelector,
  to as parseSVGSelector,
  Co as parseW3CImageAnnotation,
  ti as registerEditor,
  tt as registerShapeUtil,
  Mi as registerTool,
  fr as sampleBrightness,
  Nn as serializeFragmentSelector,
  no as serializeSVGSelector,
  No as serializeW3CImageAnnotation,
  tn as setTheme
};
//# sourceMappingURL=annotorious.es.js.map
