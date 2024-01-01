function q() {
}
function En(e, t) {
  for (const n in t)
    e[n] = t[n];
  return e;
}
function sn(e) {
  return e();
}
function Tt() {
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
    return q;
  const n = e.subscribe(...t);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function Mt(e, t, n) {
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
      for (let l = 0; l < s; l += 1)
        r[l] = t.dirty[l] | i[l];
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
function pe(e, t) {
  e.appendChild(t);
}
function P(e, t, n) {
  e.insertBefore(t, n || null);
}
function k(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function wt(e, t) {
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
function we() {
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
function Lt(e, t, n) {
  e.classList[n ? "add" : "remove"](t);
}
function On(e, t, { bubbles: n = !1, cancelable: o = !1 } = {}) {
  const i = document.createEvent("CustomEvent");
  return i.initCustomEvent(e, n, o, t), i;
}
let Ke;
function qe(e) {
  Ke = e;
}
function fn() {
  if (!Ke)
    throw new Error("Function called outside component initialization");
  return Ke;
}
function Le(e) {
  fn().$$.on_mount.push(e);
}
function Ee() {
  const e = fn();
  return (t, n, { cancelable: o = !1 } = {}) => {
    const i = e.$$.callbacks[t];
    if (i) {
      const r = On(t, n, { cancelable: o });
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
const Ce = [], We = [];
let Ue = [];
const vt = [], kn = /* @__PURE__ */ Promise.resolve();
let ht = !1;
function Pn() {
  ht || (ht = !0, kn.then(un));
}
function mt(e) {
  Ue.push(e);
}
const rt = /* @__PURE__ */ new Set();
let De = 0;
function un() {
  if (De !== 0)
    return;
  const e = Ke;
  do {
    try {
      for (; De < Ce.length; ) {
        const t = Ce[De];
        De++, qe(t), In(t.$$);
      }
    } catch (t) {
      throw Ce.length = 0, De = 0, t;
    }
    for (qe(null), Ce.length = 0, De = 0; We.length; )
      We.pop()();
    for (let t = 0; t < Ue.length; t += 1) {
      const n = Ue[t];
      rt.has(n) || (rt.add(n), n());
    }
    Ue.length = 0;
  } while (Ce.length);
  for (; vt.length; )
    vt.pop()();
  ht = !1, rt.clear(), qe(e);
}
function In(e) {
  if (e.fragment !== null) {
    e.update(), de(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(mt);
  }
}
function Dn(e) {
  const t = [], n = [];
  Ue.forEach((o) => e.indexOf(o) === -1 ? t.push(o) : n.push(o)), n.forEach((o) => o()), Ue = t;
}
const tt = /* @__PURE__ */ new Set();
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
function H(e, t) {
  e && e.i && (tt.delete(e), e.i(t));
}
function z(e, t, n, o) {
  if (e && e.o) {
    if (tt.has(e))
      return;
    tt.add(e), Se.c.push(() => {
      tt.delete(e), o && (n && e.d(1), o());
    }), e.o(t);
  } else
    o && o();
}
function he(e) {
  e && e.c();
}
function fe(e, t, n, o) {
  const { fragment: i, after_update: r } = e.$$;
  i && i.m(t, n), o || mt(() => {
    const s = e.$$.on_mount.map(sn).filter(W);
    e.$$.on_destroy ? e.$$.on_destroy.push(...s) : de(s), e.$$.on_mount = [];
  }), r.forEach(mt);
}
function ue(e, t) {
  const n = e.$$;
  n.fragment !== null && (Dn(n.after_update), de(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Bn(e, t) {
  e.$$.dirty[0] === -1 && (Ce.push(e), Pn(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function ne(e, t, n, o, i, r, s, l = [-1]) {
  const a = Ke;
  qe(e);
  const u = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: r,
    update: q,
    not_equal: i,
    bound: Tt(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (a ? a.$$.context : [])),
    // everything else
    callbacks: Tt(),
    dirty: l,
    skip_bound: !1,
    root: t.target || a.$$.root
  };
  s && s(u.root);
  let h = !1;
  if (u.ctx = n ? n(e, t.props || {}, (f, m, ...d) => {
    const g = d.length ? d[0] : m;
    return u.ctx && i(u.ctx[f], u.ctx[f] = g) && (!u.skip_bound && u.bound[f] && u.bound[f](g), h && Bn(e, f)), m;
  }) : [], u.update(), h = !0, de(u.before_update), u.fragment = o ? o(u.ctx) : !1, t.target) {
    if (t.hydrate) {
      const f = vn(t.target);
      u.fragment && u.fragment.l(f), f.forEach(k);
    } else
      u.fragment && u.fragment.c();
    t.intro && H(e.$$.fragment), fe(e, t.target, t.anchor, t.customElement), un();
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
    this.$$set && !An(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
var j = /* @__PURE__ */ ((e) => (e.ELLIPSE = "ELLIPSE", e.POLYGON = "POLYGON", e.RECTANGLE = "RECTANGLE", e.FREEHAND = "FREEHAND", e))(j || {});
const bt = {}, nt = (e, t) => bt[e] = t, gt = (e) => bt[e.type].area(e), Yn = (e, t, n) => bt[e.type].intersects(e, t, n), Me = (e) => {
  let t = 1 / 0, n = 1 / 0, o = -1 / 0, i = -1 / 0;
  return e.forEach(([r, s]) => {
    t = Math.min(t, r), n = Math.min(n, s), o = Math.max(o, r), i = Math.max(i, s);
  }), { minX: t, minY: n, maxX: o, maxY: i };
}, Rn = {
  area: (e) => Math.PI * e.geometry.rx * e.geometry.ry,
  intersects: (e, t, n) => {
    const { cx: o, cy: i, rx: r, ry: s } = e.geometry, l = 0, a = Math.cos(l), u = Math.sin(l), h = t - o, f = n - i, m = a * h + u * f, d = u * h - a * f;
    return m * m / (r * r) + d * d / (s * s) <= 1;
  }
};
nt(j.ELLIPSE, Rn);
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
      const l = o[r][0], a = o[r][1], u = o[s][0], h = o[s][1];
      a > n != h > n && t < (u - l) * (n - a) / (h - a) + l && (i = !i);
    }
    return i;
  }
};
nt(j.POLYGON, Xn);
const Cn = {
  area: (e) => e.geometry.w * e.geometry.h,
  intersects: (e, t, n) => t >= e.geometry.x && t <= e.geometry.x + e.geometry.w && n >= e.geometry.y && n <= e.geometry.y + e.geometry.h
};
nt(j.RECTANGLE, Cn);
const Nn = {
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
      const l = o[r][0], a = o[r][1], u = o[s][0], h = o[s][1];
      a > n != h > n && t < (u - l) * (n - a) / (h - a) + l && (i = !i);
    }
    return i;
  }
};
nt(j.FREEHAND, Nn);
const Un = (e, t = !1) => {
  const n = typeof e == "string" ? e : e.value, o = /^(xywh)=(pixel|percent)?:?(.+?),(.+?),(.+?),(.+)*/g, i = [...n.matchAll(o)][0], [r, s, l, a, u, h, f] = i;
  if (s !== "xywh")
    throw new Error("Unsupported MediaFragment: " + n);
  if (l && l !== "pixel")
    throw new Error(`Unsupported MediaFragment unit: ${l}`);
  const [m, d, g, b] = [a, u, h, f].map(parseFloat);
  return {
    type: j.RECTANGLE,
    geometry: {
      x: m,
      y: d,
      w: g,
      h: b,
      bounds: {
        minX: m,
        minY: t ? d - b : d,
        maxX: m + g,
        maxY: t ? d : d + b
      }
    }
  };
}, Fn = (e) => {
  const { x: t, y: n, w: o, h: i } = e;
  return {
    type: "FragmentSelector",
    conformsTo: "http://www.w3.org/TR/media-frags/",
    value: `xywh=pixel:${t},${n},${o},${i}`
  };
}, dn = "http://www.w3.org/2000/svg", Ot = (e) => {
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
function Fe(e) {
  return [e[1], -e[0]];
}
function Pt(e, t) {
  return e[0] * t[0] + e[1] * t[1];
}
function zn(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}
function jn(e) {
  return Math.hypot(e[0], e[1]);
}
function qn(e) {
  return e[0] * e[0] + e[1] * e[1];
}
function It(e, t) {
  return qn(ie(e, t));
}
function hn(e) {
  return Hn(e, jn(e));
}
function Kn(e, t) {
  return Math.hypot(e[1] - t[1], e[0] - t[0]);
}
function Ve(e, t, n) {
  let o = Math.sin(n), i = Math.cos(n), r = e[0] - t[0], s = e[1] - t[1], l = r * i - s * o, a = r * o + s * i;
  return [l + t[0], a + t[1]];
}
function pt(e, t, n) {
  return ce(e, ae(ie(t, e), n));
}
function Dt(e, t, n) {
  return ce(e, ae(t, n));
}
var { min: Be, PI: Wn } = Math, Bt = 0.275, Ge = Wn + 1e-4;
function Zn(e, t = {}) {
  let { size: n = 16, smoothing: o = 0.5, thinning: i = 0.5, simulatePressure: r = !0, easing: s = (G) => G, start: l = {}, end: a = {}, last: u = !1 } = t, { cap: h = !0, easing: f = (G) => G * (2 - G) } = l, { cap: m = !0, easing: d = (G) => --G * G * G + 1 } = a;
  if (e.length === 0 || n <= 0)
    return [];
  let g = e[e.length - 1].runningLength, b = l.taper === !1 ? 0 : l.taper === !0 ? Math.max(n, g) : l.taper, A = a.taper === !1 ? 0 : a.taper === !0 ? Math.max(n, g) : a.taper, E = Math.pow(n * o, 2), p = [], w = [], T = e.slice(0, 10).reduce((G, O) => {
    let F = O.pressure;
    if (r) {
      let U = Be(1, O.distance / n), le = Be(1, 1 - U);
      F = Be(1, G + (le - G) * (U * Bt));
    }
    return (G + F) / 2;
  }, e[0].pressure), M = kt(n, i, e[e.length - 1].pressure, s), B, N = e[0].vector, y = e[0].point, _ = y, S = y, L = _, I = !1;
  for (let G = 0; G < e.length; G++) {
    let { pressure: O } = e[G], { point: F, vector: U, distance: le, runningLength: K } = e[G];
    if (G < e.length - 1 && g - K < 3)
      continue;
    if (i) {
      if (r) {
        let J = Be(1, le / n), be = Be(1, 1 - J);
        O = Be(1, T + (be - T) * (J * Bt));
      }
      M = kt(n, i, O, s);
    } else
      M = n / 2;
    B === void 0 && (B = M);
    let me = K < b ? f(K / b) : 1, Oe = g - K < A ? d((g - K) / A) : 1;
    M = Math.max(0.01, M * Math.min(me, Oe));
    let ke = (G < e.length - 1 ? e[G + 1] : e[G]).vector, $ = G < e.length - 1 ? Pt(U, ke) : 1, Pe = Pt(U, N) < 0 && !I, Ae = $ !== null && $ < 0;
    if (Pe || Ae) {
      let J = ae(Fe(N), M);
      for (let be = 1 / 13, ge = 0; ge <= 1; ge += be)
        S = Ve(ie(F, J), F, Ge * ge), p.push(S), L = Ve(ce(F, J), F, Ge * -ge), w.push(L);
      y = S, _ = L, Ae && (I = !0);
      continue;
    }
    if (I = !1, G === e.length - 1) {
      let J = ae(Fe(U), M);
      p.push(ie(F, J)), w.push(ce(F, J));
      continue;
    }
    let Ie = ae(Fe(pt(ke, U, $)), M);
    S = ie(F, Ie), (G <= 1 || It(y, S) > E) && (p.push(S), y = S), L = ce(F, Ie), (G <= 1 || It(_, L) > E) && (w.push(L), _ = L), T = O, N = U;
  }
  let Y = e[0].point.slice(0, 2), R = e.length > 1 ? e[e.length - 1].point.slice(0, 2) : ce(e[0].point, [1, 1]), X = [], se = [];
  if (e.length === 1) {
    if (!(b || A) || u) {
      let G = Dt(Y, hn(Fe(ie(Y, R))), -(B || M)), O = [];
      for (let F = 1 / 13, U = F; U <= 1; U += F)
        O.push(Ve(G, Y, Ge * 2 * U));
      return O;
    }
  } else {
    if (!(b || A && e.length === 1))
      if (h)
        for (let O = 1 / 13, F = O; F <= 1; F += O) {
          let U = Ve(w[0], Y, Ge * F);
          X.push(U);
        }
      else {
        let O = ie(p[0], w[0]), F = ae(O, 0.5), U = ae(O, 0.51);
        X.push(ie(Y, F), ie(Y, U), ce(Y, U), ce(Y, F));
      }
    let G = Fe(Gn(e[e.length - 1].vector));
    if (A || b && e.length === 1)
      se.push(R);
    else if (m) {
      let O = Dt(R, G, M);
      for (let F = 1 / 29, U = F; U < 1; U += F)
        se.push(Ve(O, R, Ge * 3 * U));
    } else
      se.push(ce(R, ae(G, M)), ce(R, ae(G, M * 0.99)), ie(R, ae(G, M * 0.99)), ie(R, ae(G, M)));
  }
  return p.concat(se, w.reverse(), X);
}
function Jn(e, t = {}) {
  var n;
  let { streamline: o = 0.5, size: i = 16, last: r = !1 } = t;
  if (e.length === 0)
    return [];
  let s = 0.15 + (1 - o) * 0.85, l = Array.isArray(e[0]) ? e : e.map(({ x: d, y: g, pressure: b = 0.5 }) => [d, g, b]);
  if (l.length === 2) {
    let d = l[1];
    l = l.slice(0, -1);
    for (let g = 1; g < 5; g++)
      l.push(pt(l[0], d, g / 4));
  }
  l.length === 1 && (l = [...l, [...ce(l[0], [1, 1]), ...l[0].slice(2)]]);
  let a = [{ point: [l[0][0], l[0][1]], pressure: l[0][2] >= 0 ? l[0][2] : 0.25, vector: [1, 1], distance: 0, runningLength: 0 }], u = !1, h = 0, f = a[0], m = l.length - 1;
  for (let d = 1; d < l.length; d++) {
    let g = r && d === m ? l[d].slice(0, 2) : pt(f.point, l[d], s);
    if (zn(f.point, g))
      continue;
    let b = Kn(g, f.point);
    if (h += b, d < m && !u) {
      if (h < i)
        continue;
      u = !0;
    }
    f = { point: g, pressure: l[d][2] >= 0 ? l[d][2] : 0.5, vector: hn(ie(f.point, g)), distance: b, runningLength: h }, a.push(f);
  }
  return a[0].vector = ((n = a[1]) == null ? void 0 : n.vector) || [0, 0], a;
}
function Qn(e, t = {}) {
  return Zn(Jn(e, t), t);
}
function xn(e, t) {
  var n = e[0] - t[0], o = e[1] - t[1];
  return n * n + o * o;
}
function $n(e, t, n) {
  var o = t[0], i = t[1], r = n[0] - o, s = n[1] - i;
  if (r !== 0 || s !== 0) {
    var l = ((e[0] - o) * r + (e[1] - i) * s) / (r * r + s * s);
    l > 1 ? (o = n[0], i = n[1]) : l > 0 && (o += r * l, i += s * l);
  }
  return r = e[0] - o, s = e[1] - i, r * r + s * s;
}
function eo(e, t) {
  for (var n = e[0], o = [n], i, r = 1, s = e.length; r < s; r++)
    i = e[r], xn(i, n) > t && (o.push(i), n = i);
  return n !== i && o.push(i), o;
}
function yt(e, t, n, o, i) {
  for (var r = o, s, l = t + 1; l < n; l++) {
    var a = $n(e[l], e[t], e[n]);
    a > r && (s = l, r = a);
  }
  r > o && (s - t > 1 && yt(e, t, s, o, i), i.push(e[s]), n - s > 1 && yt(e, s, n, o, i));
}
function to(e, t) {
  var n = e.length - 1, o = [e[0]];
  return yt(e, 0, n, t, o), o.push(e[n]), o;
}
function no(e, t, n) {
  if (e.length <= 2)
    return e;
  var o = t !== void 0 ? t * t : 1;
  return e = n ? e : eo(e, o), e = to(e, o), e;
}
const Ze = {
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
}, Qe = (e, t) => (e + t) / 2;
function oo(e, t = !0) {
  const n = e.length;
  if (n < 4)
    return "";
  let o = e[0], i = e[1];
  const r = e[2];
  let s = `M${o[0].toFixed(2)},${o[1].toFixed(2)} Q${i[0].toFixed(
    2
  )},${i[1].toFixed(2)} ${Qe(i[0], r[0]).toFixed(2)},${Qe(
    i[1],
    r[1]
  ).toFixed(2)} T`;
  for (let l = 2, a = n - 1; l < a; l++)
    o = e[l], i = e[l + 1], s += `${Qe(o[0], i[0]).toFixed(2)},${Qe(o[1], i[1]).toFixed(
      2
    )} `;
  return t && (s += "Z"), s;
}
function Je(e, t, n = !1) {
  const o = Qn(e, t);
  return oo(
    n ? no(o, 0.25) : o
  );
}
const io = (e) => {
  const n = new DOMParser().parseFromString(e, "image/svg+xml"), o = n.lookupPrefix(dn), i = n.lookupNamespaceURI(null);
  return o || i ? Ot(n).firstChild : Ot(Vn(n)).firstChild;
}, ro = (e) => {
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
}, so = (e) => {
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
}, lo = (e) => {
  const t = io(e), n = parseFloat(t.getAttribute("cx")), o = parseFloat(t.getAttribute("cy")), i = parseFloat(t.getAttribute("rx")), r = parseFloat(t.getAttribute("ry")), s = {
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
}, ao = (e) => {
  const t = typeof e == "string" ? e : e.value;
  if (t.includes("<polygon points="))
    return so(t);
  if (t.includes("<path d="))
    return ro(t);
  if (t.includes("<ellipse "))
    return lo(t);
}, co = (e) => {
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
let xe;
const fo = new Uint8Array(16);
function uo() {
  if (!xe && (xe = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !xe))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return xe(fo);
}
const ee = [];
for (let e = 0; e < 256; ++e)
  ee.push((e + 256).toString(16).slice(1));
function ho(e, t = 0) {
  return ee[e[t + 0]] + ee[e[t + 1]] + ee[e[t + 2]] + ee[e[t + 3]] + "-" + ee[e[t + 4]] + ee[e[t + 5]] + "-" + ee[e[t + 6]] + ee[e[t + 7]] + "-" + ee[e[t + 8]] + ee[e[t + 9]] + "-" + ee[e[t + 10]] + ee[e[t + 11]] + ee[e[t + 12]] + ee[e[t + 13]] + ee[e[t + 14]] + ee[e[t + 15]];
}
const mo = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Yt = {
  randomUUID: mo
};
function mn(e, t, n) {
  if (Yt.randomUUID && !t && !e)
    return Yt.randomUUID();
  e = e || {};
  const o = e.random || (e.rng || uo)();
  if (o[6] = o[6] & 15 | 64, o[8] = o[8] & 63 | 128, t) {
    n = n || 0;
    for (let i = 0; i < 16; ++i)
      t[n + i] = o[i];
    return t;
  }
  return ho(o);
}
var Rt = Object.prototype.hasOwnProperty;
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
        if (Rt.call(e, n) && ++o && !Rt.call(t, n) || !(n in t) || !Te(e[n], t[n]))
          return !1;
      return Object.keys(t).length === o;
    }
  }
  return e !== e && t !== t;
}
function st() {
}
function go(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
const Ye = [];
function Et(e, t = st) {
  let n;
  const o = /* @__PURE__ */ new Set();
  function i(l) {
    if (go(e, l) && (e = l, n)) {
      const a = !Ye.length;
      for (const u of o)
        u[1](), Ye.push(u, e);
      if (a) {
        for (let u = 0; u < Ye.length; u += 2)
          Ye[u][0](Ye[u + 1]);
        Ye.length = 0;
      }
    }
  }
  function r(l) {
    i(l(e));
  }
  function s(l, a = st) {
    const u = [l, a];
    return o.add(u), o.size === 1 && (n = t(i) || st), l(e), () => {
      o.delete(u), o.size === 0 && n && (n(), n = null);
    };
  }
  return { set: i, update: r, subscribe: s };
}
const po = (e) => {
  const { subscribe: t, set: n } = Et(null);
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
const lt = { selected: [] }, yo = (e, t = "EDIT") => {
  const { subscribe: n, set: o } = Et(lt);
  let i = lt;
  n((f) => i = f);
  const r = () => o(lt), s = () => {
    var f;
    return ((f = i.selected) == null ? void 0 : f.length) === 0;
  }, l = (f) => {
    if (i.selected.length === 0)
      return !1;
    const m = typeof f == "string" ? f : f.id;
    return i.selected.some((d) => d.id === m);
  }, a = (f, m) => {
    const d = e.getAnnotation(f);
    if (d) {
      const g = _o(d, t);
      o(g === "EDIT" ? { selected: [{ id: f, editable: !0 }], pointerEvent: m } : g === "SELECT" ? { selected: [{ id: f }], pointerEvent: m } : { selected: [], pointerEvent: m });
    } else
      console.warn("Invalid selection: " + f);
  }, u = (f, m = !0) => {
    const d = Array.isArray(f) ? f : [f], g = d.map((b) => e.getAnnotation(b)).filter((b) => b);
    o({ selected: g.map(({ id: b }) => ({ id: b, editable: m })) }), g.length !== d.length && console.warn("Invalid selection", f);
  }, h = (f) => {
    if (i.selected.length === 0)
      return !1;
    const { selected: m } = i;
    m.filter(({ id: d }) => f.includes(d)).length > 0 && o({ selected: m.filter(({ id: d }) => !f.includes(d)) });
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
    setSelected: u,
    subscribe: n
  };
}, _o = (e, t) => typeof t == "function" ? t(e) || "EDIT" : t || "EDIT", wo = [];
for (let e = 0; e < 256; ++e)
  wo.push((e + 256).toString(16).slice(1));
typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const bo = (e, t) => {
  const n = new Set(e.bodies.map((o) => o.id));
  return t.bodies.filter((o) => !n.has(o.id));
}, Eo = (e, t) => {
  const n = new Set(t.bodies.map((o) => o.id));
  return e.bodies.filter((o) => !n.has(o.id));
}, Ao = (e, t) => t.bodies.map((n) => {
  const o = e.bodies.find((i) => i.id === n.id);
  return { newBody: n, oldBody: o && !Te(o, n) ? o : void 0 };
}).filter(({ oldBody: n }) => n), So = (e, t) => !Te(e.target, t.target), pn = (e, t) => {
  const n = bo(e, t), o = Eo(e, t), i = Ao(e, t);
  return {
    oldValue: e,
    newValue: t,
    bodiesCreated: n.length > 0 ? n : void 0,
    bodiesDeleted: o.length > 0 ? o : void 0,
    bodiesUpdated: i.length > 0 ? i : void 0,
    targetUpdated: So(e, t) ? { oldTarget: e.target, newTarget: t.target } : void 0
  };
};
var Q = /* @__PURE__ */ ((e) => (e.LOCAL = "LOCAL", e.REMOTE = "REMOTE", e))(Q || {});
const To = (e, t) => {
  var n, o;
  const { changes: i, origin: r } = t;
  if (!(!e.options.origin || e.options.origin === r))
    return !1;
  if (e.options.ignore) {
    const { ignore: s } = e.options, l = (a) => (a == null ? void 0 : a.length) > 0;
    if (!(l(i.created) || l(i.deleted))) {
      const a = (n = i.updated) == null ? void 0 : n.some((h) => l(h.bodiesCreated) || l(h.bodiesDeleted) || l(h.bodiesUpdated)), u = (o = i.updated) == null ? void 0 : o.some((h) => h.targetUpdated);
      if (s === "BODY_ONLY" && a && !u || s === "TARGET_ONLY" && u && !a)
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
}, Mo = (e, t) => {
  const n = new Set((e.created || []).map((f) => f.id)), o = new Set((e.updated || []).map(({ newValue: f }) => f.id)), i = new Set((t.created || []).map((f) => f.id)), r = new Set((t.deleted || []).map((f) => f.id)), s = new Set((t.updated || []).map(({ oldValue: f }) => f.id)), l = new Set((t.updated || []).filter(({ oldValue: f }) => n.has(f.id) || o.has(f.id)).map(({ oldValue: f }) => f.id)), a = [
    ...(e.created || []).filter((f) => !r.has(f.id)).map((f) => s.has(f.id) ? t.updated.find(({ oldValue: m }) => m.id === f.id).newValue : f),
    ...t.created || []
  ], u = [
    ...(e.deleted || []).filter((f) => !i.has(f.id)),
    ...(t.deleted || []).filter((f) => !n.has(f.id))
  ], h = [
    ...(e.updated || []).filter(({ newValue: f }) => !r.has(f.id)).map((f) => {
      const { oldValue: m, newValue: d } = f;
      if (s.has(d.id)) {
        const g = t.updated.find((b) => b.oldValue.id === d.id).newValue;
        return pn(m, g);
      } else
        return f;
    }),
    ...(t.updated || []).filter(({ oldValue: f }) => !l.has(f.id))
  ];
  return { created: a, deleted: u, updated: h };
}, Lo = (e) => e.id !== void 0, vo = () => {
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
    n.forEach((L) => {
      To(L, S) && L.onChange(S);
    });
  }, s = (y, _ = Q.LOCAL) => {
    if (e.get(y.id))
      throw Error(`Cannot add annotation ${y.id} - exists already`);
    e.set(y.id, y), y.bodies.forEach((S) => t.set(S.id, y.id)), r(_, { created: [y] });
  }, l = (y, _) => {
    const S = typeof y == "string" ? _ : y, L = typeof y == "string" ? y : y.id, I = e.get(L);
    if (I) {
      const Y = pn(I, S);
      return L === S.id ? e.set(L, S) : (e.delete(L), e.set(S.id, S)), I.bodies.forEach((R) => t.delete(R.id)), S.bodies.forEach((R) => t.set(R.id, S.id)), Y;
    } else
      console.warn(`Cannot update annotation ${L} - does not exist`);
  }, a = (y, _ = Q.LOCAL, S = Q.LOCAL) => {
    const L = Lo(_) ? S : _, I = l(y, _);
    I && r(L, { updated: [I] });
  }, u = (y, _ = Q.LOCAL) => {
    const S = y.reduce((L, I) => {
      const Y = l(I);
      return Y ? [...L, Y] : L;
    }, []);
    S.length > 0 && r(_, { updated: S });
  }, h = (y, _ = Q.LOCAL) => {
    const S = e.get(y.annotation);
    if (S) {
      const L = {
        ...S,
        bodies: [...S.bodies, y]
      };
      e.set(S.id, L), t.set(y.id, L.id), r(_, { updated: [{
        oldValue: S,
        newValue: L,
        bodiesCreated: [y]
      }] });
    } else
      console.warn(`Attempt to add body to missing annotation: ${y.annotation}`);
  }, f = () => [...e.values()], m = (y = Q.LOCAL) => {
    const _ = [...e.values()];
    e.clear(), t.clear(), r(y, { deleted: _ });
  }, d = (y, _ = !0, S = Q.LOCAL) => {
    if (_) {
      const L = [...e.values()];
      e.clear(), t.clear(), y.forEach((I) => {
        e.set(I.id, I), I.bodies.forEach((Y) => t.set(Y.id, I.id));
      }), r(S, { created: y, deleted: L });
    } else {
      const L = y.reduce((I, Y) => {
        const R = e.get(Y.id);
        return R ? [...I, R] : I;
      }, []);
      if (L.length > 0)
        throw Error(`Bulk insert would overwrite the following annotations: ${L.map((I) => I.id).join(", ")}`);
      y.forEach((I) => {
        e.set(I.id, I), I.bodies.forEach((Y) => t.set(Y.id, I.id));
      }), r(S, { created: y });
    }
  }, g = (y) => {
    const _ = typeof y == "string" ? y : y.id, S = e.get(_);
    if (S)
      return e.delete(_), S.bodies.forEach((L) => t.delete(L.id)), S;
    console.warn(`Attempt to delete missing annotation: ${_}`);
  }, b = (y, _ = Q.LOCAL) => {
    const S = g(y);
    S && r(_, { deleted: [S] });
  }, A = (y, _ = Q.LOCAL) => {
    const S = y.reduce((L, I) => {
      const Y = g(I);
      return Y ? [...L, Y] : L;
    }, []);
    S.length > 0 && r(_, { deleted: S });
  }, E = (y, _ = Q.LOCAL) => {
    const S = e.get(y.annotation);
    if (S) {
      const L = S.bodies.find((I) => I.id === y.id);
      if (L) {
        t.delete(L.id);
        const I = {
          ...S,
          bodies: S.bodies.filter((Y) => Y.id !== y.id)
        };
        e.set(S.id, I), r(_, { updated: [{
          oldValue: S,
          newValue: I,
          bodiesDeleted: [L]
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
      const S = p(_).bodies.find((L) => L.id === y);
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
      const L = S.bodies.find((Y) => Y.id === y.id), I = {
        ...S,
        bodies: S.bodies.map((Y) => Y.id === L.id ? _ : Y)
      };
      return e.set(S.id, I), L.id !== _.id && (t.delete(L.id), t.set(_.id, I.id)), {
        oldValue: S,
        newValue: I,
        bodiesUpdated: [{ oldBody: L, newBody: _ }]
      };
    } else
      console.warn(`Attempt to add body to missing annotation ${y.annotation}`);
  }, M = (y, _, S = Q.LOCAL) => {
    const L = T(y, _);
    r(S, { updated: [L] });
  }, B = (y, _ = Q.LOCAL) => {
    const S = y.map((L) => T({ id: L.id, annotation: L.annotation }, L));
    r(_, { updated: S });
  }, N = (y) => {
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
    bulkUpdateBodies: B,
    bulkUpdateTargets: (y, _ = Q.LOCAL) => {
      const S = y.map(N).filter((L) => L);
      S.length > 0 && r(_, { updated: S });
    },
    clear: m,
    deleteAnnotation: b,
    deleteBody: E,
    getAnnotation: p,
    getBody: w,
    observe: o,
    unobserve: i,
    updateAnnotation: a,
    updateBody: M,
    updateTarget: (y, _ = Q.LOCAL) => {
      const S = N(y);
      S && r(_, { updated: [S] });
    }
  };
}, Oo = (e) => ({
  ...e,
  subscribe: (t) => {
    const n = (o) => t(o.state);
    return e.observe(n), t(e.all()), () => e.unobserve(n);
  }
});
let ko = () => ({
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
const Po = 250, Io = (e) => {
  const t = ko(), n = [];
  let o = -1, i = !1, r = 0;
  const s = (d) => {
    if (!i) {
      const { changes: g } = d, b = performance.now();
      if (b - r > Po)
        n.splice(o + 1), n.push(g), o = n.length - 1;
      else {
        const A = n.length - 1;
        n[A] = Mo(n[A], g);
      }
      r = b;
    }
    i = !1;
  };
  e.observe(s, { origin: Q.LOCAL });
  const l = (d) => (d == null ? void 0 : d.length) > 0 && e.bulkDeleteAnnotation(d), a = (d) => (d == null ? void 0 : d.length) > 0 && e.bulkAddAnnotation(d, !1), u = (d) => (d == null ? void 0 : d.length) > 0 && e.bulkUpdateAnnotation(d.map(({ oldValue: g }) => g)), h = (d) => (d == null ? void 0 : d.length) > 0 && e.bulkUpdateAnnotation(d.map(({ newValue: g }) => g)), f = (d) => (d == null ? void 0 : d.length) > 0 && e.bulkAddAnnotation(d, !1), m = (d) => (d == null ? void 0 : d.length) > 0 && e.bulkDeleteAnnotation(d);
  return {
    canRedo: () => n.length - 1 > o,
    canUndo: () => o > -1,
    destroy: () => e.unobserve(s),
    on: (d, g) => t.on(d, g),
    redo: () => {
      if (n.length - 1 > o) {
        i = !0;
        const { created: d, updated: g, deleted: b } = n[o + 1];
        a(d), h(g), m(b), t.emit("redo", n[o + 1]), o += 1;
      }
    },
    undo: () => {
      if (o > -1) {
        i = !0;
        const { created: d, updated: g, deleted: b } = n[o];
        l(d), u(g), f(b), t.emit("undo", n[o]), o -= 1;
      }
    }
  };
}, Do = () => {
  const { subscribe: e, set: t } = Et([]);
  return {
    subscribe: e,
    set: t
  };
}, Bo = (e, t, n, o) => {
  const { store: i, selection: r, hover: s, viewport: l } = e, a = /* @__PURE__ */ new Map();
  let u = [], h, f;
  const m = (E, p) => {
    a.has(E) ? a.get(E).push(p) : a.set(E, [p]);
  }, d = (E, p) => {
    const w = a.get(E);
    w && w.indexOf(p) > 0 && w.splice(w.indexOf(p), 1);
  }, g = (E, p, w) => {
    a.has(E) && setTimeout(() => {
      a.get(E).forEach((T) => {
        if (n) {
          const M = Array.isArray(p) ? p.map((N) => n.serialize(N)) : n.serialize(p), B = w ? w instanceof PointerEvent ? w : n.serialize(w) : void 0;
          T(M, B);
        } else
          T(p, w);
      });
    }, 1);
  }, b = () => {
    const { selected: E } = r, p = E.map(({ id: w }) => i.getAnnotation(w));
    p.forEach((w) => {
      const T = u.find((M) => M.id === w.id);
      (!T || !Te(T, w)) && g("updateAnnotation", w, T);
    }), u = u.map((w) => p.find(({ id: M }) => M === w.id) || w);
  };
  r.subscribe(({ selected: E }) => {
    if (!(u.length === 0 && E.length === 0)) {
      if (u.length === 0 && E.length > 0)
        u = E.map(({ id: p }) => i.getAnnotation(p));
      else if (u.length > 0 && E.length === 0)
        u.forEach((p) => {
          const w = i.getAnnotation(p.id);
          w && !Te(w, p) && g("updateAnnotation", w, p);
        }), u = [];
      else {
        const p = new Set(u.map((T) => T.id)), w = new Set(E.map(({ id: T }) => T));
        u.filter((T) => !w.has(T.id)).forEach((T) => {
          const M = i.getAnnotation(T.id);
          M && !Te(M, T) && g("updateAnnotation", M, T);
        }), u = [
          // Remove annotations that were deselected
          ...u.filter((T) => w.has(T.id)),
          // Add editable annotations that were selected
          ...E.filter(({ id: T }) => !p.has(T)).map(({ id: T }) => i.getAnnotation(T))
        ];
      }
      g("selectionChanged", u);
    }
  }), s.subscribe((E) => {
    !h && E ? g("mouseEnterAnnotation", i.getAnnotation(E)) : h && !E ? g("mouseLeaveAnnotation", i.getAnnotation(h)) : h && E && (g("mouseLeaveAnnotation", i.getAnnotation(h)), g("mouseEnterAnnotation", i.getAnnotation(E))), h = E;
  }), l == null || l.subscribe((E) => g("viewportIntersect", E.map(i.getAnnotation))), i.observe((E) => {
    o && (f && clearTimeout(f), f = setTimeout(b, 1e3));
    const { created: p, deleted: w } = E.changes;
    p.forEach((T) => g("createAnnotation", T)), w.forEach((T) => g("deleteAnnotation", T)), E.changes.updated.filter((T) => [
      ...T.bodiesCreated || [],
      ...T.bodiesDeleted || [],
      ...T.bodiesUpdated || []
    ].length > 0).forEach(({ oldValue: T, newValue: M }) => {
      const B = u.find((N) => N.id === T.id) || T;
      u = u.map((N) => N.id === T.id ? M : N), g("updateAnnotation", M, B);
    });
  }, { origin: Q.LOCAL }), i.observe((E) => {
    if (u) {
      const p = new Set(u.map((T) => T.id)), w = E.changes.updated.filter(({ newValue: T }) => p.has(T.id)).map(({ newValue: T }) => T);
      w.length > 0 && (u = u.map((T) => w.find((B) => B.id === T.id) || T));
    }
  }, { origin: Q.REMOTE });
  const A = (E) => (p) => {
    const { created: w, deleted: T, updated: M } = p;
    w.forEach((B) => g("createAnnotation", B)), T.forEach((B) => g("deleteAnnotation", B)), E ? M.forEach((B) => g("updateAnnotation", B.oldValue, B.newValue)) : M.forEach((B) => g("updateAnnotation", B.newValue, B.oldValue));
  };
  return t.on("undo", A(!0)), t.on("redo", A(!1)), { on: m, off: d, emit: g };
}, Yo = (e) => (t) => t.reduce((n, o) => {
  const { parsed: i, error: r } = e.parse(o);
  return r ? {
    parsed: n.parsed,
    failed: [...n.failed, o]
  } : {
    parsed: [...n.parsed, i],
    failed: n.failed
  };
}, { parsed: [], failed: [] }), Ro = (e, t, n) => {
  const { store: o, selection: i } = e, r = (A) => {
    if (n) {
      const { parsed: E, error: p } = n.parse(A);
      E ? o.addAnnotation(E, Q.REMOTE) : console.error(p);
    } else
      o.addAnnotation(A, Q.REMOTE);
  }, s = () => i.clear(), l = () => o.clear(), a = (A) => {
    const E = o.getAnnotation(A);
    return n && E ? n.serialize(E) : E;
  }, u = () => n ? o.all().map(n.serialize) : o.all(), h = () => {
    var A;
    const E = (((A = i.selected) == null ? void 0 : A.map((p) => p.id)) || []).map((p) => o.getAnnotation(p));
    return n ? E.map(n.serialize) : E;
  }, f = (A) => fetch(A).then((E) => E.json()).then((E) => (d(E), E)), m = (A) => {
    if (typeof A == "string") {
      const E = o.getAnnotation(A);
      return o.deleteAnnotation(A), n ? n.serialize(E) : E;
    } else {
      const E = n ? n.parse(A).parsed : A;
      return o.deleteAnnotation(E), A;
    }
  }, d = (A) => {
    if (n) {
      const { parsed: E, failed: p } = Yo(n)(A);
      p.length > 0 && console.warn(`Discarded ${p.length} invalid annotations`, p), o.bulkAddAnnotation(E, !0, Q.REMOTE);
    } else
      o.bulkAddAnnotation(A, !0, Q.REMOTE);
  }, g = (A) => {
    A ? i.setSelected(A) : i.clear();
  }, b = (A) => {
    if (n) {
      const E = n.parse(A).parsed, p = n.serialize(o.getAnnotation(E.id));
      return o.updateAnnotation(E), p;
    } else {
      const E = o.getAnnotation(A.id);
      return o.updateAnnotation(A), E;
    }
  };
  return {
    addAnnotation: r,
    cancelSelected: s,
    canRedo: t.canRedo,
    canUndo: t.canUndo,
    clearAnnotations: l,
    getAnnotationById: a,
    getAnnotations: u,
    getSelected: h,
    loadAnnotations: f,
    redo: t.redo,
    removeAnnotation: m,
    setAnnotations: d,
    setSelected: g,
    undo: t.undo,
    updateAnnotation: b
  };
};
let Xo = (e) => crypto.getRandomValues(new Uint8Array(e)), Co = (e, t, n) => {
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
}, No = (e, t = 21) => Co(e, t, Xo), Uo = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
const Fo = () => ({ isGuest: !0, id: No("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_", 20)() }), Vo = (e) => {
  const t = JSON.stringify(e);
  let n = 0;
  for (let o = 0, i = t.length; o < i; o++) {
    let r = t.charCodeAt(o);
    n = (n << 5) - n + r, n |= 0;
  }
  return `${n}`;
}, yn = (e) => e ? typeof e == "object" ? { ...e } : e : void 0, Go = (e, t) => (Array.isArray(e) ? e : [e]).map((n) => {
  const { id: o, type: i, purpose: r, value: s, created: l, creator: a, ...u } = n;
  return {
    id: o || `temp-${Vo(n)}`,
    annotation: t,
    type: i,
    purpose: r,
    value: s,
    created: l ? new Date(l) : void 0,
    creator: yn(a),
    ...u
  };
}), Ho = (e) => e.map((t) => {
  var n;
  const o = { ...t };
  return delete o.annotation, (n = o.id) != null && n.startsWith("temp-") && delete o.id, o;
});
Uo();
const Er = (e, t = !1) => ({ parse: (i) => zo(i, t), serialize: (i) => jo(i, e) }), zo = (e, t = !1) => {
  const n = e.id || mn(), {
    creator: o,
    created: i,
    updatedBy: r,
    updated: s,
    body: l,
    ...a
  } = e, u = Go(l, n), h = Array.isArray(e.target) ? e.target[0] : e.target, f = Array.isArray(h.selector) ? h.selector[0] : h.selector, m = f.type === "FragmentSelector" ? Un(f, t) : f.type === "SvgSelector" ? ao(f) : void 0;
  return m ? {
    parsed: {
      ...a,
      id: n,
      bodies: u,
      target: {
        created: i ? new Date(i) : void 0,
        creator: yn(o),
        ...a.target,
        annotation: n,
        selector: m
      }
    }
  } : {
    error: Error(`Unknown selector type: ${f.type}`)
  };
}, jo = (e, t) => {
  const {
    selector: n,
    creator: o,
    created: i,
    updated: r,
    updatedBy: s,
    ...l
  } = e.target, a = n.type == j.RECTANGLE ? Fn(n.geometry) : co(n);
  return {
    ...e,
    "@context": "http://www.w3.org/ns/anno.jsonld",
    id: e.id,
    type: "Annotation",
    body: Ho(e.bodies),
    creator: o,
    created: i == null ? void 0 : i.toISOString(),
    target: {
      ...l,
      source: t,
      selector: a
    }
  };
};
function Xt(e, t, n) {
  const o = e.slice();
  return o[11] = t[n], o[13] = n, o;
}
function Ct(e) {
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
      P(s, t, l), i || (r = Z(t, "pointerdown", function() {
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
function qo(e) {
  let t, n, o, i, r, s, l, a, u, h, f = (
    /*geom*/
    e[4].points
  ), m = [];
  for (let d = 0; d < f.length; d += 1)
    m[d] = Ct(Xt(e, f, d));
  return {
    c() {
      t = C("polygon"), i = te(), r = C("polygon"), l = te();
      for (let d = 0; d < m.length; d += 1)
        m[d].c();
      a = we(), c(t, "class", "a9s-outer"), c(t, "style", n = /*computedStyle*/
      e[1] ? "display:none;" : void 0), c(t, "points", o = /*geom*/
      e[4].points.map(Nt).join(" ")), c(r, "class", "a9s-inner a9s-shape-handle"), c(
        r,
        "style",
        /*computedStyle*/
        e[1]
      ), c(r, "points", s = /*geom*/
      e[4].points.map(Ut).join(" "));
    },
    m(d, g) {
      P(d, t, g), P(d, i, g), P(d, r, g), P(d, l, g);
      for (let b = 0; b < m.length; b += 1)
        m[b] && m[b].m(d, g);
      P(d, a, g), u || (h = [
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
      e[4].points.map(Nt).join(" ")) && c(t, "points", o), g & /*computedStyle*/
      2 && c(
        r,
        "style",
        /*computedStyle*/
        e[1]
      ), g & /*geom*/
      16 && s !== (s = /*geom*/
      e[4].points.map(Ut).join(" ")) && c(r, "points", s), g & /*geom, handleSize, grab, Handle*/
      1048) {
        f = /*geom*/
        e[4].points;
        let b;
        for (b = 0; b < f.length; b += 1) {
          const A = Xt(e, f, b);
          m[b] ? m[b].p(A, g) : (m[b] = Ct(A), m[b].c(), m[b].m(a.parentNode, a));
        }
        for (; b < m.length; b += 1)
          m[b].d(1);
        m.length = f.length;
      }
    },
    d(d) {
      d && k(t), d && k(i), d && k(r), d && k(l), wt(m, d), d && k(a), u = !1, de(h);
    }
  };
}
function Ko(e) {
  let t, n;
  return t = new ot({
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
          qo,
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
      n || (H(t.$$.fragment, o), n = !0);
    },
    o(o) {
      z(t.$$.fragment, o), n = !1;
    },
    d(o) {
      ue(t, o);
    }
  };
}
const Nt = (e) => e.join(","), Ut = (e) => e.join(",");
function Wo(e, t, n) {
  let o, i, { shape: r } = t, { computedStyle: s = void 0 } = t, { transform: l } = t, { viewportScale: a = 1 } = t;
  const u = (d, g, b) => {
    let A;
    g === v.SHAPE ? A = d.geometry.points.map(([p, w]) => [p + b[0], w + b[1]]) : A = d.geometry.points.map(([p, w], T) => g === v(T) ? [p + b[0], w + b[1]] : [p, w]);
    const E = Me(A);
    return { ...d, geometry: { points: A, bounds: E } };
  };
  function h(d) {
    re.call(this, e, d);
  }
  function f(d) {
    re.call(this, e, d);
  }
  function m(d) {
    re.call(this, e, d);
  }
  return e.$$set = (d) => {
    "shape" in d && n(0, r = d.shape), "computedStyle" in d && n(1, s = d.computedStyle), "transform" in d && n(2, l = d.transform), "viewportScale" in d && n(6, a = d.viewportScale);
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
    u,
    a,
    h,
    f,
    m
  ];
}
class Zo extends oe {
  constructor(t) {
    super(), ne(this, t, Wo, Ko, x, {
      shape: 0,
      computedStyle: 1,
      transform: 2,
      viewportScale: 6
    });
  }
}
function Jo(e) {
  let t, n, o, i, r, s, l, a, u, h, f, m, d, g, b, A, E, p, w, T, M, B, N, y, _, S, L, I, Y, R, X, se, G, O, F, U, le, K, me, Oe, ke, $, Pe, Ae, Ie, J, be, ge, it, St;
  return {
    c() {
      t = C("rect"), l = te(), a = C("rect"), d = te(), g = C("rect"), p = te(), w = C("rect"), N = te(), y = C("rect"), I = te(), Y = C("rect"), G = te(), O = C("rect"), le = te(), K = C("rect"), ke = te(), $ = C("rect"), Ie = te(), J = C("rect"), c(t, "class", "a9s-outer"), c(t, "style", n = /*computedStyle*/
      e[1] ? "display:none;" : void 0), c(t, "x", o = /*geom*/
      e[4].x), c(t, "y", i = /*geom*/
      e[4].y), c(t, "width", r = /*geom*/
      e[4].w), c(t, "height", s = /*geom*/
      e[4].h), c(a, "class", "a9s-inner a9s-shape-handle"), c(
        a,
        "style",
        /*computedStyle*/
        e[1]
      ), c(a, "x", u = /*geom*/
      e[4].x), c(a, "y", h = /*geom*/
      e[4].y), c(a, "width", f = /*geom*/
      e[4].w), c(a, "height", m = /*geom*/
      e[4].h), c(g, "class", "a9s-edge-handle a9s-edge-handle-top"), c(g, "x", b = /*geom*/
      e[4].x), c(g, "y", A = /*geom*/
      e[4].y), c(g, "height", 1), c(g, "width", E = /*geom*/
      e[4].w), c(w, "class", "a9s-edge-handle a9s-edge-handle-right"), c(w, "x", T = /*geom*/
      e[4].x + /*geom*/
      e[4].w), c(w, "y", M = /*geom*/
      e[4].y), c(w, "height", B = /*geom*/
      e[4].h), c(w, "width", 1), c(y, "class", "a9s-edge-handle a9s-edge-handle-bottom"), c(y, "x", _ = /*geom*/
      e[4].x), c(y, "y", S = /*geom*/
      e[4].y + /*geom*/
      e[4].h), c(y, "height", 1), c(y, "width", L = /*geom*/
      e[4].w), c(Y, "class", "a9s-edge-handle a9s-edge-handle-left"), c(Y, "x", R = /*geom*/
      e[4].x), c(Y, "y", X = /*geom*/
      e[4].y), c(Y, "height", se = /*geom*/
      e[4].h), c(Y, "width", 1), c(O, "class", "a9s-corner-handle a9s-corner-handle-topleft"), c(O, "x", F = /*geom*/
      e[4].x - /*handleSize*/
      e[3] / 2), c(O, "y", U = /*geom*/
      e[4].y - /*handleSize*/
      e[3] / 2), c(
        O,
        "height",
        /*handleSize*/
        e[3]
      ), c(
        O,
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
      ), c($, "class", "a9s-corner-handle a9s-corner-handle-bottomright"), c($, "x", Pe = /*geom*/
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
    m(V, D) {
      P(V, t, D), P(V, l, D), P(V, a, D), P(V, d, D), P(V, g, D), P(V, p, D), P(V, w, D), P(V, N, D), P(V, y, D), P(V, I, D), P(V, Y, D), P(V, G, D), P(V, O, D), P(V, le, D), P(V, K, D), P(V, ke, D), P(V, $, D), P(V, Ie, D), P(V, J, D), it || (St = [
        Z(t, "pointerdown", function() {
          W(
            /*grab*/
            e[10](v.SHAPE)
          ) && e[10](v.SHAPE).apply(this, arguments);
        }),
        Z(a, "pointerdown", function() {
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
        Z(w, "pointerdown", function() {
          W(
            /*grab*/
            e[10](v.RIGHT)
          ) && e[10](v.RIGHT).apply(this, arguments);
        }),
        Z(y, "pointerdown", function() {
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
        Z(O, "pointerdown", function() {
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
      ], it = !0);
    },
    p(V, D) {
      e = V, D & /*computedStyle*/
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
        a,
        "style",
        /*computedStyle*/
        e[1]
      ), D & /*geom*/
      16 && u !== (u = /*geom*/
      e[4].x) && c(a, "x", u), D & /*geom*/
      16 && h !== (h = /*geom*/
      e[4].y) && c(a, "y", h), D & /*geom*/
      16 && f !== (f = /*geom*/
      e[4].w) && c(a, "width", f), D & /*geom*/
      16 && m !== (m = /*geom*/
      e[4].h) && c(a, "height", m), D & /*geom*/
      16 && b !== (b = /*geom*/
      e[4].x) && c(g, "x", b), D & /*geom*/
      16 && A !== (A = /*geom*/
      e[4].y) && c(g, "y", A), D & /*geom*/
      16 && E !== (E = /*geom*/
      e[4].w) && c(g, "width", E), D & /*geom*/
      16 && T !== (T = /*geom*/
      e[4].x + /*geom*/
      e[4].w) && c(w, "x", T), D & /*geom*/
      16 && M !== (M = /*geom*/
      e[4].y) && c(w, "y", M), D & /*geom*/
      16 && B !== (B = /*geom*/
      e[4].h) && c(w, "height", B), D & /*geom*/
      16 && _ !== (_ = /*geom*/
      e[4].x) && c(y, "x", _), D & /*geom*/
      16 && S !== (S = /*geom*/
      e[4].y + /*geom*/
      e[4].h) && c(y, "y", S), D & /*geom*/
      16 && L !== (L = /*geom*/
      e[4].w) && c(y, "width", L), D & /*geom*/
      16 && R !== (R = /*geom*/
      e[4].x) && c(Y, "x", R), D & /*geom*/
      16 && X !== (X = /*geom*/
      e[4].y) && c(Y, "y", X), D & /*geom*/
      16 && se !== (se = /*geom*/
      e[4].h) && c(Y, "height", se), D & /*geom, handleSize*/
      24 && F !== (F = /*geom*/
      e[4].x - /*handleSize*/
      e[3] / 2) && c(O, "x", F), D & /*geom, handleSize*/
      24 && U !== (U = /*geom*/
      e[4].y - /*handleSize*/
      e[3] / 2) && c(O, "y", U), D & /*handleSize*/
      8 && c(
        O,
        "height",
        /*handleSize*/
        e[3]
      ), D & /*handleSize*/
      8 && c(
        O,
        "width",
        /*handleSize*/
        e[3]
      ), D & /*geom, handleSize*/
      24 && me !== (me = /*geom*/
      e[4].x + /*geom*/
      e[4].w - /*handleSize*/
      e[3] / 2) && c(K, "x", me), D & /*geom, handleSize*/
      24 && Oe !== (Oe = /*geom*/
      e[4].y - /*handleSize*/
      e[3] / 2) && c(K, "y", Oe), D & /*handleSize*/
      8 && c(
        K,
        "height",
        /*handleSize*/
        e[3]
      ), D & /*handleSize*/
      8 && c(
        K,
        "width",
        /*handleSize*/
        e[3]
      ), D & /*geom, handleSize*/
      24 && Pe !== (Pe = /*geom*/
      e[4].x + /*geom*/
      e[4].w - /*handleSize*/
      e[3] / 2) && c($, "x", Pe), D & /*geom, handleSize*/
      24 && Ae !== (Ae = /*geom*/
      e[4].y + /*geom*/
      e[4].h - /*handleSize*/
      e[3] / 2) && c($, "y", Ae), D & /*handleSize*/
      8 && c(
        $,
        "height",
        /*handleSize*/
        e[3]
      ), D & /*handleSize*/
      8 && c(
        $,
        "width",
        /*handleSize*/
        e[3]
      ), D & /*geom, handleSize*/
      24 && be !== (be = /*geom*/
      e[4].x - /*handleSize*/
      e[3] / 2) && c(J, "x", be), D & /*geom, handleSize*/
      24 && ge !== (ge = /*geom*/
      e[4].y + /*geom*/
      e[4].h - /*handleSize*/
      e[3] / 2) && c(J, "y", ge), D & /*handleSize*/
      8 && c(
        J,
        "height",
        /*handleSize*/
        e[3]
      ), D & /*handleSize*/
      8 && c(
        J,
        "width",
        /*handleSize*/
        e[3]
      );
    },
    d(V) {
      V && k(t), V && k(l), V && k(a), V && k(d), V && k(g), V && k(p), V && k(w), V && k(N), V && k(y), V && k(I), V && k(Y), V && k(G), V && k(O), V && k(le), V && k(K), V && k(ke), V && k($), V && k(Ie), V && k(J), it = !1, de(St);
    }
  };
}
function Qo(e) {
  let t, n;
  return t = new ot({
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
          Jo,
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
      n || (H(t.$$.fragment, o), n = !0);
    },
    o(o) {
      z(t.$$.fragment, o), n = !1;
    },
    d(o) {
      ue(t, o);
    }
  };
}
function xo(e, t, n) {
  let o, i, { shape: r } = t, { computedStyle: s = void 0 } = t, { transform: l } = t, { viewportScale: a = 1 } = t;
  const u = (d, g, b) => {
    const A = d.geometry.bounds;
    let [E, p] = [A.minX, A.minY], [w, T] = [A.maxX, A.maxY];
    const [M, B] = b;
    if (g === v.SHAPE)
      E += M, w += M, p += B, T += B;
    else {
      switch (g) {
        case v.TOP:
        case v.TOP_LEFT:
        case v.TOP_RIGHT: {
          p += B;
          break;
        }
        case v.BOTTOM:
        case v.BOTTOM_LEFT:
        case v.BOTTOM_RIGHT: {
          T += B;
          break;
        }
      }
      switch (g) {
        case v.LEFT:
        case v.TOP_LEFT:
        case v.BOTTOM_LEFT: {
          E += M;
          break;
        }
        case v.RIGHT:
        case v.TOP_RIGHT:
        case v.BOTTOM_RIGHT: {
          w += M;
          break;
        }
      }
    }
    const N = Math.min(E, w), y = Math.min(p, T), _ = Math.abs(w - E), S = Math.abs(T - p);
    return {
      ...d,
      geometry: {
        x: N,
        y,
        w: _,
        h: S,
        bounds: {
          minX: N,
          minY: y,
          maxX: N + _,
          maxY: y + S
        }
      }
    };
  };
  function h(d) {
    re.call(this, e, d);
  }
  function f(d) {
    re.call(this, e, d);
  }
  function m(d) {
    re.call(this, e, d);
  }
  return e.$$set = (d) => {
    "shape" in d && n(0, r = d.shape), "computedStyle" in d && n(1, s = d.computedStyle), "transform" in d && n(2, l = d.transform), "viewportScale" in d && n(6, a = d.viewportScale);
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
    u,
    a,
    h,
    f,
    m
  ];
}
class $o extends oe {
  constructor(t) {
    super(), ne(this, t, xo, Qo, x, {
      shape: 0,
      computedStyle: 1,
      transform: 2,
      viewportScale: 6
    });
  }
}
function ei(e) {
  let t, n, o, i, r, s, l, a, u, h, f, m, d, g, b, A, E, p, w, T, M, B, N, y, _, S, L, I, Y;
  return {
    c() {
      t = C("ellipse"), s = te(), l = C("ellipse"), m = te(), d = C("rect"), A = te(), E = C("rect"), T = te(), M = C("rect"), y = te(), _ = C("rect"), c(t, "class", "a9s-outer"), c(t, "cx", n = /*geom*/
      e[3].cx), c(t, "cy", o = /*geom*/
      e[3].cy), c(t, "rx", i = /*geom*/
      e[3].rx), c(t, "ry", r = /*geom*/
      e[3].ry), c(l, "class", "a9s-inner a9s-shape-handle"), c(l, "cx", a = /*geom*/
      e[3].cx), c(l, "cy", u = /*geom*/
      e[3].cy), c(l, "rx", h = /*geom*/
      e[3].rx), c(l, "ry", f = /*geom*/
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
      ), c(E, "class", "a9s-corner-handle a9s-corner-handle-right"), c(E, "x", p = /*geom*/
      e[3].cx + /*geom*/
      e[3].rx - /*handleSize*/
      e[2] / 2), c(E, "y", w = /*geom*/
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
      ), c(M, "class", "a9s-corner-handle a9s-corner-handle-bottom"), c(M, "x", B = /*geom*/
      e[3].cx - /*handleSize*/
      e[2] / 2), c(M, "y", N = /*geom*/
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
      ), c(_, "class", "a9s-corner-handle a9s-corner-handle-left"), c(_, "x", S = /*geom*/
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
      P(R, t, X), P(R, s, X), P(R, l, X), P(R, m, X), P(R, d, X), P(R, A, X), P(R, E, X), P(R, T, X), P(R, M, X), P(R, y, X), P(R, _, X), I || (Y = [
        Z(t, "pointerdown", function() {
          W(
            /*grab*/
            e[9](v.SHAPE)
          ) && e[9](v.SHAPE).apply(this, arguments);
        }),
        Z(l, "pointerdown", function() {
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
        Z(E, "pointerdown", function() {
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
        Z(_, "pointerdown", function() {
          W(
            /*grab*/
            e[9](v.LEFT)
          ) && e[9](v.LEFT).apply(this, arguments);
        })
      ], I = !0);
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
      8 && u !== (u = /*geom*/
      e[3].cy) && c(l, "cy", u), X & /*geom*/
      8 && h !== (h = /*geom*/
      e[3].rx) && c(l, "rx", h), X & /*geom*/
      8 && f !== (f = /*geom*/
      e[3].ry) && c(l, "ry", f), X & /*geom, handleSize*/
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
      12 && p !== (p = /*geom*/
      e[3].cx + /*geom*/
      e[3].rx - /*handleSize*/
      e[2] / 2) && c(E, "x", p), X & /*geom, handleSize*/
      12 && w !== (w = /*geom*/
      e[3].cy - /*handleSize*/
      e[2] / 2) && c(E, "y", w), X & /*handleSize*/
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
      12 && B !== (B = /*geom*/
      e[3].cx - /*handleSize*/
      e[2] / 2) && c(M, "x", B), X & /*geom, handleSize*/
      12 && N !== (N = /*geom*/
      e[3].cy + /*geom*/
      e[3].ry - /*handleSize*/
      e[2] / 2) && c(M, "y", N), X & /*handleSize*/
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
      12 && S !== (S = /*geom*/
      e[3].cx - /*geom*/
      e[3].rx - /*handleSize*/
      e[2] / 2) && c(_, "x", S), X & /*geom, handleSize*/
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
      R && k(t), R && k(s), R && k(l), R && k(m), R && k(d), R && k(A), R && k(E), R && k(T), R && k(M), R && k(y), R && k(_), I = !1, de(Y);
    }
  };
}
function ti(e) {
  let t, n;
  return t = new ot({
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
          ei,
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
      n || (H(t.$$.fragment, o), n = !0);
    },
    o(o) {
      z(t.$$.fragment, o), n = !1;
    },
    d(o) {
      ue(t, o);
    }
  };
}
function ni(e, t, n) {
  let o, i, { shape: r } = t, { transform: s } = t, { viewportScale: l = 1 } = t;
  const a = (m, d, g) => {
    const b = m.geometry.bounds;
    let [A, E] = [b.minX, b.minY], [p, w] = [b.maxX, b.maxY];
    const [T, M] = g;
    if (d === v.SHAPE)
      A += T, p += T, E += M, w += M;
    else
      switch (d) {
        case v.TOP: {
          E += M;
          break;
        }
        case v.BOTTOM: {
          w += M;
          break;
        }
        case v.LEFT: {
          A += T;
          break;
        }
        case v.RIGHT: {
          p += T;
          break;
        }
      }
    const B = Math.min(A, p), N = Math.min(E, w), y = Math.abs(p - A), _ = Math.abs(w - E), S = (A + p) / 2, L = (E + w) / 2, I = y / 2, Y = _ / 2;
    return {
      ...m,
      geometry: {
        ...m.geometry,
        cx: S,
        cy: L,
        rx: I,
        ry: Y,
        bounds: {
          minX: B,
          minY: N,
          maxX: B + y,
          maxY: N + _
        }
      }
    };
  };
  function u(m) {
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
    u,
    h,
    f
  ];
}
class oi extends oe {
  constructor(t) {
    super(), ne(this, t, ni, ti, x, { shape: 0, transform: 1, viewportScale: 5 });
  }
}
const ve = (e, t, n) => {
  const o = typeof t == "function" ? t(e) : t;
  if (o) {
    const { fill: i, fillOpacity: r } = o;
    let s = "", l;
    return i && (s += `fill:${i};stroke:${i};`), n && (l = n.fillOpacity), s += `fill-opacity:${l || r || "0.25"};`, s;
  }
};
function ii(e) {
  let t, n, o;
  return {
    c() {
      t = C("path"), c(t, "class", "a9s-shape-handle"), c(
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
      P(i, t, r), n || (o = Z(t, "pointerdown", function() {
        W(
          /*grab*/
          e[14](v.SHAPE)
        ) && e[14](v.SHAPE).apply(this, arguments);
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
function ri(e) {
  let t, n;
  return t = new ot({
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
          ii,
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
      o[1]), i & /*$$scope, computedStyle, pathData, grab*/
      49164 && (r.$$scope = { dirty: i, ctx: o }), t.$set(r);
    },
    i(o) {
      n || (H(t.$$.fragment, o), n = !0);
    },
    o(o) {
      z(t.$$.fragment, o), n = !1;
    },
    d(o) {
      ue(t, o);
    }
  };
}
function si(e, t, n) {
  let o, i, r, { shape: s } = t, { annotation: l } = t, { transform: a } = t, { viewportScale: u = 1 } = t, { style: h = void 0 } = t, f = { fillOpacity: 1 };
  const m = (A, E, p) => {
    let w;
    E === v.SHAPE && (w = A.geometry.points.map(([M, B, N]) => [M + p[0], B + p[1], N]));
    const T = Me(w.map((M) => [M[0], M[1]]));
    return { ...A, geometry: { points: w, bounds: T } };
  };
  function d(A) {
    re.call(this, e, A);
  }
  function g(A) {
    re.call(this, e, A);
  }
  function b(A) {
    re.call(this, e, A);
  }
  return e.$$set = (A) => {
    "shape" in A && n(0, s = A.shape), "annotation" in A && n(5, l = A.annotation), "transform" in A && n(1, a = A.transform), "viewportScale" in A && n(6, u = A.viewportScale), "style" in A && n(7, h = A.style);
  }, e.$$.update = () => {
    e.$$.dirty & /*shape*/
    1 && n(8, o = s.geometry), e.$$.dirty & /*viewportScale*/
    64, e.$$.dirty & /*annotation, style*/
    160 && n(3, i = ve(l, h, f)), e.$$.dirty & /*geom*/
    256 && n(2, r = Je(o.points, Ze, !0));
  }, [
    s,
    a,
    r,
    i,
    m,
    l,
    u,
    h,
    o,
    d,
    g,
    b
  ];
}
class li extends oe {
  constructor(t) {
    super(), ne(this, t, si, ri, x, {
      shape: 0,
      annotation: 5,
      transform: 1,
      viewportScale: 6,
      style: 7
    });
  }
}
const _n = /* @__PURE__ */ new Map([
  [j.RECTANGLE, $o],
  [j.POLYGON, Zo],
  [j.ELLIPSE, oi],
  [j.FREEHAND, li]
]), Ft = (e) => _n.get(e.type), ai = (e, t) => _n.set(e, t), v = (e) => `HANDLE-${e}`;
v.SHAPE = "SHAPE";
v.TOP = "TOP";
v.RIGHT = "RIGHT";
v.BOTTOM = "BOTTOM";
v.LEFT = "LEFT";
v.TOP_LEFT = "TOP_LEFT";
v.TOP_RIGHT = "TOP_RIGHT";
v.BOTTOM_RIGHT = "BOTTOM_RIGHT";
v.BOTTOM_LEFT = "BOTTOM_LEFT";
const ci = (e) => ({}), Vt = (e) => ({ grab: (
  /*onGrab*/
  e[0]
) });
function fi(e) {
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
    m(l, a) {
      P(l, t, a), s && s.m(t, null), n = !0, o || (i = [
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
      64) && Mn(
        s,
        r,
        l,
        /*$$scope*/
        l[6],
        n ? Tn(
          r,
          /*$$scope*/
          l[6],
          a,
          ci
        ) : Ln(
          /*$$scope*/
          l[6]
        ),
        Vt
      );
    },
    i(l) {
      n || (H(s, l), n = !0);
    },
    o(l) {
      z(s, l), n = !1;
    },
    d(l) {
      l && k(t), s && s.d(l), o = !1, de(i);
    }
  };
}
function ui(e, t, n) {
  let { $$slots: o = {}, $$scope: i } = t;
  const r = Ee();
  let { shape: s } = t, { editor: l } = t, { transform: a } = t, u = null, h, f = null;
  const m = (b) => (A) => {
    u = b, h = a.elementToImage(A.offsetX, A.offsetY), f = s, A.target.setPointerCapture(A.pointerId), r("grab");
  }, d = (b) => {
    if (u) {
      const [A, E] = a.elementToImage(b.offsetX, b.offsetY), p = [A - h[0], E - h[1]];
      n(3, s = l(f, u, p)), r("change", s);
    }
  }, g = (b) => {
    b.target.releasePointerCapture(b.pointerId), u = null, f = s, r("release");
  };
  return e.$$set = (b) => {
    "shape" in b && n(3, s = b.shape), "editor" in b && n(4, l = b.editor), "transform" in b && n(5, a = b.transform), "$$scope" in b && n(6, i = b.$$scope);
  }, [m, d, g, s, l, a, i, o];
}
class ot extends oe {
  constructor(t) {
    super(), ne(this, t, ui, fi, x, { shape: 3, editor: 4, transform: 5 });
  }
}
function di(e, t, n) {
  let o;
  const i = Ee();
  let { annotation: r } = t, { editor: s } = t, { style: l = void 0 } = t, { target: a } = t, { transform: u } = t, { viewportScale: h } = t, f;
  return Le(() => (n(6, f = new s({
    target: a,
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
    "annotation" in m && n(0, r = m.annotation), "editor" in m && n(1, s = m.editor), "style" in m && n(2, l = m.style), "target" in m && n(3, a = m.target), "transform" in m && n(4, u = m.transform), "viewportScale" in m && n(5, h = m.viewportScale);
  }, e.$$.update = () => {
    e.$$.dirty & /*annotation, style*/
    5 && (o = ve(r, l)), e.$$.dirty & /*annotation, editorComponent*/
    65 && r && (f == null || f.$set({ shape: r.target.selector })), e.$$.dirty & /*editorComponent, transform*/
    80 && f && f.$set({ transform: u }), e.$$.dirty & /*editorComponent, viewportScale*/
    96 && f && f.$set({ viewportScale: h });
  }, [r, s, l, a, u, h, f];
}
class hi extends oe {
  constructor(t) {
    super(), ne(this, t, di, null, x, {
      annotation: 0,
      editor: 1,
      style: 2,
      target: 3,
      transform: 4,
      viewportScale: 5
    });
  }
}
function mi(e, t, n) {
  const o = Ee();
  let { drawingMode: i } = t, { target: r } = t, { tool: s } = t, { transform: l } = t, { viewportScale: a } = t, u;
  return Le(() => {
    const h = r.closest("svg"), f = [], m = (d, g, b) => {
      h.addEventListener(d, g, b), f.push(() => h.removeEventListener(d, g, b));
    };
    return n(5, u = new s({
      target: r,
      props: {
        addEventListener: m,
        drawingMode: i,
        transform: l,
        viewportScale: a
      }
    })), u.$on("create", (d) => o("create", d.detail)), () => {
      f.forEach((d) => d()), u.$destroy();
    };
  }), e.$$set = (h) => {
    "drawingMode" in h && n(0, i = h.drawingMode), "target" in h && n(1, r = h.target), "tool" in h && n(2, s = h.tool), "transform" in h && n(3, l = h.transform), "viewportScale" in h && n(4, a = h.viewportScale);
  }, e.$$.update = () => {
    e.$$.dirty & /*toolComponent, transform*/
    40 && u && u.$set({ transform: l }), e.$$.dirty & /*toolComponent, viewportScale*/
    48 && u && u.$set({ viewportScale: a });
  }, [i, r, s, l, a, u];
}
class gi extends oe {
  constructor(t) {
    super(), ne(this, t, mi, null, x, {
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
      P(o, t, i), P(o, n, i);
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
function pi(e) {
  let t, n = (
    /*origin*/
    e[0] && Gt(e)
  );
  return {
    c() {
      t = C("g"), n && n.c(), c(t, "class", "a9s-annotation a9s-rubberband");
    },
    m(o, i) {
      P(o, t, i), n && n.m(t, null);
    },
    p(o, [i]) {
      /*origin*/
      o[0] ? n ? n.p(o, i) : (n = Gt(o), n.c(), n.m(t, null)) : n && (n.d(1), n = null);
    },
    i: q,
    o: q,
    d(o) {
      o && k(t), n && n.d();
    }
  };
}
function yi(e, t, n) {
  const o = Ee();
  let { addEventListener: i } = t, { drawingMode: r } = t, { transform: s } = t, l, a, u, h, f, m, d;
  const g = (p) => {
    l = performance.now(), r === "drag" && (n(0, a = s.elementToImage(p.offsetX, p.offsetY)), u = a, n(1, h = a[0]), n(2, f = a[1]), n(3, m = 1), n(4, d = 1));
  }, b = (p) => {
    a && (u = s.elementToImage(p.offsetX, p.offsetY), n(1, h = Math.min(u[0], a[0])), n(2, f = Math.min(u[1], a[1])), n(3, m = Math.abs(u[0] - a[0])), n(4, d = Math.abs(u[1] - a[1])));
  }, A = (p) => {
    const w = performance.now() - l;
    if (r === "click") {
      if (w > 300)
        return;
      p.stopPropagation(), a ? E() : (n(0, a = s.elementToImage(p.offsetX, p.offsetY)), u = a, n(1, h = a[0]), n(2, f = a[1]), n(3, m = 1), n(4, d = 1));
    } else
      a && (w > 300 || m * d > 100 ? (p.stopPropagation(), E()) : (n(0, a = null), u = null));
  }, E = () => {
    if (m * d > 15) {
      const p = {
        type: j.RECTANGLE,
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
    n(0, a = null), u = null;
  };
  return Le(() => {
    i("pointerdown", g), i("pointermove", b), i("pointerup", A, !0);
  }), e.$$set = (p) => {
    "addEventListener" in p && n(5, i = p.addEventListener), "drawingMode" in p && n(6, r = p.drawingMode), "transform" in p && n(7, s = p.transform);
  }, [a, h, f, m, d, i, r, s];
}
class _i extends oe {
  constructor(t) {
    super(), ne(this, t, yi, pi, x, {
      addEventListener: 5,
      drawingMode: 6,
      transform: 7
    });
  }
}
const at = (e, t) => {
  const n = Math.abs(t[0] - e[0]), o = Math.abs(t[1] - e[1]);
  return Math.sqrt(Math.pow(n, 2) + Math.pow(o, 2));
}, Re = [];
function wi(e, t = q) {
  let n;
  const o = /* @__PURE__ */ new Set();
  function i(l) {
    if (x(e, l) && (e = l, n)) {
      const a = !Re.length;
      for (const u of o)
        u[1](), Re.push(u, e);
      if (a) {
        for (let u = 0; u < Re.length; u += 2)
          Re[u][0](Re[u + 1]);
        Re.length = 0;
      }
    }
  }
  function r(l) {
    i(l(e));
  }
  function s(l, a = q) {
    const u = [l, a];
    return o.add(u), o.size === 1 && (n = t(i) || q), l(e), () => {
      o.delete(u), o.size === 0 && n && (n(), n = null);
    };
  }
  return { set: i, update: r, subscribe: s };
}
const bi = (e, t) => {
  const { naturalWidth: n, naturalHeight: o } = e;
  if (!n && !o) {
    const { width: i, height: r } = e;
    t.setAttribute("viewBox", `0 0 ${i} ${r}`), e.addEventListener("load", (s) => {
      const l = s.target;
      t.setAttribute("viewBox", `0 0 ${l.naturalWidth} ${l.naturalHeight}`);
    });
  } else
    t.setAttribute("viewBox", `0 0 ${n} ${o}`);
}, Ei = (e, t) => {
  bi(e, t);
  const { subscribe: n, set: o } = wi(1);
  let i;
  return window.ResizeObserver && (i = new ResizeObserver(() => {
    const s = t.getBoundingClientRect(), { width: l, height: a } = t.viewBox.baseVal, u = Math.max(
      s.width / l,
      s.height / a
    );
    o(u);
  }), i.observe(t.parentElement)), { destroy: () => {
    i && i.disconnect();
  }, subscribe: n };
}, Ar = "ontouchstart" in window || navigator.maxTouchPoints > 0;
function ct(e) {
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
    e[2] && zt(e)
  );
  return {
    c() {
      t = C("polygon"), o = C("polygon"), s && s.c(), r = we(), c(t, "class", "a9s-outer"), c(t, "points", n = /*coords*/
      e[15]), c(o, "class", "a9s-inner"), c(o, "points", i = /*coords*/
      e[15]);
    },
    m(l, a) {
      P(l, t, a), P(l, o, a), s && s.m(l, a), P(l, r, a);
    },
    p(l, a) {
      a & /*isClosable, points, cursor*/
      7 && n !== (n = /*coords*/
      l[15]) && c(t, "points", n), a & /*isClosable, points, cursor*/
      7 && i !== (i = /*coords*/
      l[15]) && c(o, "points", i), /*isClosable*/
      l[2] ? s ? s.p(l, a) : (s = zt(l), s.c(), s.m(r.parentNode, r)) : s && (s.d(1), s = null);
    },
    d(l) {
      l && k(t), l && k(o), s && s.d(l), l && k(r);
    }
  };
}
function zt(e) {
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
      P(i, t, r);
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
function Ai(e) {
  let t, n = (
    /*cursor*/
    e[1] && Ht(ct(e))
  );
  return {
    c() {
      t = C("g"), n && n.c(), c(t, "class", "a9s-annotation a9s-rubberband");
    },
    m(o, i) {
      P(o, t, i), n && n.m(t, null);
    },
    p(o, [i]) {
      /*cursor*/
      o[1] ? n ? n.p(ct(o), i) : (n = Ht(ct(o)), n.c(), n.m(t, null)) : n && (n.d(1), n = null);
    },
    i: q,
    o: q,
    d(o) {
      o && k(t), n && n.d();
    }
  };
}
const Si = 20;
function Ti(e, t, n) {
  let o;
  const i = Ee();
  let { addEventListener: r } = t, { drawingMode: s } = t, { transform: l } = t, { viewportScale: a = 1 } = t, u, h = [], f = null, m = !1;
  const d = (p) => {
    const { timeStamp: w, offsetX: T, offsetY: M } = p;
    if (u = { timeStamp: w, offsetX: T, offsetY: M }, s === "drag" && h.length === 0) {
      const B = l.elementToImage(p.offsetX, p.offsetY);
      h.push(B), n(1, f = B);
    }
  }, g = (p) => {
    if (h.length > 0 && (n(1, f = l.elementToImage(p.offsetX, p.offsetY)), h.length > 2)) {
      const w = at(f, h[0]) * a;
      n(2, m = w < Si);
    }
  }, b = (p) => {
    if (s === "click") {
      const w = p.timeStamp - u.timeStamp, T = at([u.offsetX, u.offsetY], [p.offsetX, p.offsetY]);
      if (w > 300 || T > 15)
        return;
      if (m)
        E();
      else if (h.length === 0) {
        const M = l.elementToImage(p.offsetX, p.offsetY);
        h.push(M), n(1, f = M);
      } else
        h.push(f);
    } else {
      if (h.length === 1 && at(h[0], f) <= 4) {
        n(0, h = []), n(1, f = null);
        return;
      }
      p.stopImmediatePropagation(), m ? E() : h.push(f);
    }
  }, A = () => {
    const p = [...h, f], w = {
      type: j.POLYGON,
      geometry: { bounds: Me(p), points: p }
    };
    gt(w) > 4 && (n(0, h = []), n(1, f = null), i("create", w));
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
    r("pointerdown", d, !0), r("pointermove", g), r("pointerup", b, !0), r("dblclick", A, !0);
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
class Mi extends oe {
  constructor(t) {
    super(), ne(this, t, Ti, Ai, x, {
      addEventListener: 4,
      drawingMode: 5,
      transform: 6,
      viewportScale: 7
    });
  }
}
function jt(e) {
  let t, n, o, i, r, s, l, a, u, h;
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
      e[5] / 2), c(s, "rx", u = /*w*/
      e[4] / 2), c(s, "ry", h = /*h*/
      e[5] / 2);
    },
    m(f, m) {
      P(f, t, m), P(f, s, m);
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
function Li(e) {
  let t, n = (
    /*origin*/
    e[1] && jt(e)
  );
  return {
    c() {
      t = C("g"), n && n.c(), c(t, "class", "a9s-annotation a9s-rubberband");
    },
    m(o, i) {
      P(o, t, i), n && n.m(t, null), e[9](t);
    },
    p(o, [i]) {
      /*origin*/
      o[1] ? n ? n.p(o, i) : (n = jt(o), n.c(), n.m(t, null)) : n && (n.d(1), n = null);
    },
    i: q,
    o: q,
    d(o) {
      o && k(t), n && n.d(), e[9](null);
    }
  };
}
function vi(e, t, n) {
  const o = Ee();
  let { addEventListener: i } = t, { drawingMode: r } = t, { transform: s } = t, l, a, u, h, f, m, d, g = !1, b = !1, A, E;
  const p = (_) => {
    A = performance.now(), r === "drag" && (n(1, a = s.elementToImage(_.offsetX, _.offsetY)), u = a, n(2, h = a[0]), n(3, f = a[1]), n(4, m = 1), n(5, d = 1));
  }, w = (_) => {
    const S = _ || E;
    if (a)
      if (u = s.elementToImage(S.offsetX, S.offsetY), b) {
        const L = 2 * Math.abs(u[0] - a[0]), I = 2 * Math.abs(u[1] - a[1]);
        n(4, m = g ? Math.max(L, I) : L), n(5, d = g ? m : I), n(2, h = Math.min(u[0], a[0] - m / 2)), n(3, f = Math.min(u[1], a[1] - d / 2));
      } else {
        const L = Math.abs(u[0] - a[0]), I = Math.abs(u[1] - a[1]);
        n(4, m = g ? Math.max(L, I) : L), n(5, d = g ? m : I), n(2, h = Math.min(u[0], a[0])), n(3, f = Math.min(u[1], a[1]));
      }
    _ && (E = _);
  }, T = (_) => {
    r === "click" && _.stopImmediatePropagation();
    const S = performance.now() - A;
    if (r === "click") {
      if (S > 300)
        return;
      _.stopPropagation(), a ? M() : (n(1, a = s.elementToImage(_.offsetX, _.offsetY)), u = a, n(2, h = a[0]), n(3, f = a[1]), n(4, m = 1), n(5, d = 1));
    } else
      a && (S > 300 || m * d > 100 ? (_.stopPropagation(), M()) : (n(1, a = null), u = null, E = void 0));
  }, M = () => {
    if (m * d > 15) {
      const _ = {
        type: j.ELLIPSE,
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
    n(1, a = null), u = null, E = void 0;
  }, B = (_) => {
    _.key === "Shift" && (g = !0, w()), _.key === "Control" && (b = !0, w());
  }, N = (_) => {
    _.key === "Shift" && (g = !1, w()), _.key === "Control" && (b = !1, w());
  };
  Le(() => (document.addEventListener("keyup", N), document.addEventListener("keydown", B), i("pointerdown", p), i("pointermove", w), i("pointerup", T), () => {
    document.removeEventListener("keyup", N), document.removeEventListener("keydown", B);
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
    d,
    i,
    r,
    s,
    y
  ];
}
class Oi extends oe {
  constructor(t) {
    super(), ne(this, t, vi, Li, x, {
      addEventListener: 6,
      drawingMode: 7,
      transform: 8
    });
  }
}
function qt(e) {
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
      P(n, t, o);
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
function ki(e) {
  let t, n = (
    /*isDrawing*/
    e[1] && qt(e)
  );
  return {
    c() {
      t = C("g"), n && n.c(), c(t, "class", "a9s-annotation a9s-rubberband");
    },
    m(o, i) {
      P(o, t, i), n && n.m(t, null);
    },
    p(o, [i]) {
      /*isDrawing*/
      o[1] ? n ? n.p(o, i) : (n = qt(o), n.c(), n.m(t, null)) : n && (n.d(1), n = null);
    },
    i: q,
    o: q,
    d(o) {
      o && k(t), n && n.d();
    }
  };
}
function Pi(e, t, n) {
  let o;
  const i = Ee();
  let { addEventListener: r } = t, { drawingMode: s } = t, { annotation: l } = t, { transform: a } = t, { viewportScale: u = 1 } = t, { style: h = void 0 } = t, f = { fillOpacity: 1 }, m = [], d = "", g = !1;
  const b = (w) => {
    if (s === "drag" && m.length === 0) {
      n(1, g = !0);
      const T = a.elementToImage(w.offsetX, w.offsetY);
      m.push([...T, w.pressure]), n(0, d = Je(m, Ze));
    }
  }, A = (w) => {
    if (g) {
      const T = a.elementToImage(w.offsetX, w.offsetY);
      m.push([...T, w.pressure]), n(0, d = Je(m, Ze));
    }
  }, E = (w) => {
    g && p();
  }, p = () => {
    const w = {
      type: j.FREEHAND,
      geometry: {
        bounds: Me(m.map((T) => [T[0], T[1]])),
        points: m
      }
    };
    n(1, g = !1), m = [], i("create", w);
  };
  return Le(() => {
    r("pointerdown", b, !0), r("pointermove", A), r("pointerup", E, !0);
  }), e.$$set = (w) => {
    "addEventListener" in w && n(3, r = w.addEventListener), "drawingMode" in w && n(4, s = w.drawingMode), "annotation" in w && n(5, l = w.annotation), "transform" in w && n(6, a = w.transform), "viewportScale" in w && n(7, u = w.viewportScale), "style" in w && n(8, h = w.style);
  }, e.$$.update = () => {
    e.$$.dirty & /*viewportScale*/
    128, e.$$.dirty & /*annotation, style*/
    288 && n(2, o = ve(l, h, f));
  }, [
    d,
    g,
    o,
    r,
    s,
    l,
    a,
    u,
    h
  ];
}
class Ii extends oe {
  constructor(t) {
    super(), ne(this, t, Pi, ki, x, {
      addEventListener: 3,
      drawingMode: 4,
      annotation: 5,
      transform: 6,
      viewportScale: 7,
      style: 8
    });
  }
}
const At = /* @__PURE__ */ new Map([
  ["rectangle", { tool: _i }],
  ["polygon", { tool: Mi }],
  ["ellipse", { tool: Oi }],
  ["freehand", { tool: Ii }]
]), _t = () => [...At.keys()], wn = (e) => At.get(e), Di = (e, t, n) => At.set(e, { tool: t, opts: n });
function Bi(e) {
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
      P(s, t, l), pe(t, n), pe(t, i);
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
function Yi(e, t, n) {
  let o, { annotation: i } = t, { geom: r } = t, { style: s = void 0 } = t;
  const { cx: l, cy: a, rx: u, ry: h } = r;
  return e.$$set = (f) => {
    "annotation" in f && n(0, i = f.annotation), "geom" in f && n(6, r = f.geom), "style" in f && n(7, s = f.style);
  }, e.$$.update = () => {
    e.$$.dirty & /*annotation, style*/
    129 && n(1, o = ve(i, s));
  }, [i, o, l, a, u, h, r, s];
}
class Ri extends oe {
  constructor(t) {
    super(), ne(this, t, Yi, Bi, x, { annotation: 0, geom: 6, style: 7 });
  }
}
function Xi(e) {
  let t, n, o, i, r;
  return {
    c() {
      t = C("g"), n = C("polygon"), i = C("polygon"), c(n, "class", "a9s-outer"), c(n, "style", o = /*computedStyle*/
      e[1] ? "display:none;" : void 0), c(
        n,
        "points",
        /*points*/
        e[2].map(Ci).join(" ")
      ), c(i, "class", "a9s-inner"), c(
        i,
        "style",
        /*computedStyle*/
        e[1]
      ), c(
        i,
        "points",
        /*points*/
        e[2].map(Ni).join(" ")
      ), c(t, "data-id", r = /*annotation*/
      e[0].id);
    },
    m(s, l) {
      P(s, t, l), pe(t, n), pe(t, i);
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
const Ci = (e) => e.join(","), Ni = (e) => e.join(",");
function Ui(e, t, n) {
  let o, { annotation: i } = t, { geom: r } = t, { style: s = void 0 } = t;
  const { points: l } = r;
  return e.$$set = (a) => {
    "annotation" in a && n(0, i = a.annotation), "geom" in a && n(3, r = a.geom), "style" in a && n(4, s = a.style);
  }, e.$$.update = () => {
    e.$$.dirty & /*annotation, style*/
    17 && n(1, o = ve(i, s));
  }, [i, o, l, r, s];
}
class Fi extends oe {
  constructor(t) {
    super(), ne(this, t, Ui, Xi, x, { annotation: 0, geom: 3, style: 4 });
  }
}
function Vi(e) {
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
      P(s, t, l), pe(t, n), pe(t, i);
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
function Gi(e, t, n) {
  let o, i, r, s, l, { annotation: a } = t, { geom: u } = t, { style: h = void 0 } = t;
  return e.$$set = (f) => {
    "annotation" in f && n(0, a = f.annotation), "geom" in f && n(6, u = f.geom), "style" in f && n(7, h = f.style);
  }, e.$$.update = () => {
    e.$$.dirty & /*annotation, style*/
    129 && n(5, o = ve(a, h)), e.$$.dirty & /*geom*/
    64 && n(4, { x: i, y: r, w: s, h: l } = u, i, (n(3, r), n(6, u)), (n(2, s), n(6, u)), (n(1, l), n(6, u)));
  }, [a, l, s, r, i, o, u, h];
}
class Hi extends oe {
  constructor(t) {
    super(), ne(this, t, Gi, Vi, x, { annotation: 0, geom: 6, style: 7 });
  }
}
function zi(e) {
  let t, n, o;
  return {
    c() {
      t = C("g"), n = C("path"), c(
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
      P(i, t, r), pe(t, n);
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
function ji(e, t, n) {
  let o, i, { annotation: r } = t, { geom: s } = t, { style: l = void 0 } = t, a = { fillOpacity: 1 };
  const { points: u } = s;
  return e.$$set = (h) => {
    "annotation" in h && n(0, r = h.annotation), "geom" in h && n(3, s = h.geom), "style" in h && n(4, l = h.style);
  }, e.$$.update = () => {
    e.$$.dirty & /*annotation, style*/
    17 && n(2, o = ve(r, l, a));
  }, n(1, i = Je(u, Ze, !0)), [r, i, o, s, l];
}
class qi extends oe {
  constructor(t) {
    super(), ne(this, t, ji, zi, x, { annotation: 0, geom: 3, style: 4 });
  }
}
const Sr = {
  elementToImage: (e, t) => [e, t]
}, Ki = (e) => ({
  elementToImage: (t, n) => {
    const o = e.getBoundingClientRect(), i = e.createSVGPoint();
    i.x = t + o.x, i.y = n + o.y;
    const { x: r, y: s } = i.matrixTransform(e.getScreenCTM().inverse());
    return [r, s];
  }
}), Wi = 250, Zi = (e, t) => {
  const n = Ee();
  let o;
  return { onPointerDown: () => o = performance.now(), onPointerUp: (s) => {
    if (performance.now() - o < Wi) {
      const { x: a, y: u } = Ji(s, e), h = t.getAt(a, u);
      h ? n("click", { originalEvent: s, annotation: h }) : n("click", { originalEvent: s });
    }
  } };
}, Ji = (e, t) => {
  const n = t.createSVGPoint(), o = t.getBoundingClientRect(), i = e.clientX - o.x, r = e.clientY - o.y, { left: s, top: l } = t.getBoundingClientRect();
  return n.x = i + s, n.y = r + l, n.matrixTransform(t.getScreenCTM().inverse());
};
function Kt(e, t, n) {
  const o = e.slice();
  return o[29] = t[n], o;
}
function Wt(e, t, n) {
  const o = e.slice();
  return o[32] = t[n], o;
}
function ft(e) {
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
      i.c(), n = we();
    },
    m(r, s) {
      i.m(r, s), P(r, n, s), o = !0;
    },
    p(r, s) {
      s[0] & /*$store*/
      8192 && x(t, t = /*annotation*/
      r[32].id) ? (ye(), z(i, 1, 1, q), _e(), i = Jt(r), i.c(), H(i, 1), i.m(n.parentNode, n)) : i.p(r, s);
    },
    i(r) {
      o || (H(i), o = !0);
    },
    o(r) {
      z(i), o = !1;
    },
    d(r) {
      r && k(n), i.d(r);
    }
  };
}
function Qi(e) {
  let t, n;
  return t = new qi({
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
      n || (H(t.$$.fragment, o), n = !0);
    },
    o(o) {
      z(t.$$.fragment, o), n = !1;
    },
    d(o) {
      ue(t, o);
    }
  };
}
function xi(e) {
  let t, n;
  return t = new Fi({
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
      n || (H(t.$$.fragment, o), n = !0);
    },
    o(o) {
      z(t.$$.fragment, o), n = !1;
    },
    d(o) {
      ue(t, o);
    }
  };
}
function $i(e) {
  let t, n;
  return t = new Hi({
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
      n || (H(t.$$.fragment, o), n = !0);
    },
    o(o) {
      z(t.$$.fragment, o), n = !1;
    },
    d(o) {
      ue(t, o);
    }
  };
}
function er(e) {
  let t, n;
  return t = new Ri({
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
      n || (H(t.$$.fragment, o), n = !0);
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
  const r = [er, $i, xi, Qi], s = [];
  function l(a, u) {
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
    m(a, u) {
      ~t && s[t].m(a, u), P(a, o, u), i = !0;
    },
    p(a, u) {
      let h = t;
      t = l(a), t === h ? ~t && s[t].p(a, u) : (n && (ye(), z(s[h], 1, 1, () => {
        s[h] = null;
      }), _e()), ~t ? (n = s[t], n ? n.p(a, u) : (n = s[t] = r[t](a), n.c()), H(n, 1), n.m(o.parentNode, o)) : n = null);
    },
    i(a) {
      i || (H(n), i = !0);
    },
    o(a) {
      z(n), i = !1;
    },
    d(a) {
      ~t && s[t].d(a), a && k(o);
    }
  };
}
function Qt(e) {
  let t = !/*isEditable*/
  e[7](
    /*annotation*/
    e[32]
  ), n, o, i = t && Zt(ft(e));
  return {
    c() {
      i && i.c(), n = we();
    },
    m(r, s) {
      i && i.m(r, s), P(r, n, s), o = !0;
    },
    p(r, s) {
      s[0] & /*isEditable, $store*/
      8320 && (t = !/*isEditable*/
      r[7](
        /*annotation*/
        r[32]
      )), t ? i ? (i.p(ft(r), s), s[0] & /*isEditable, $store*/
      8320 && H(i, 1)) : (i = Zt(ft(r)), i.c(), H(i, 1), i.m(n.parentNode, n)) : i && (ye(), z(i, 1, 1, () => {
        i = null;
      }), _e());
    },
    i(r) {
      o || (H(i), o = !0);
    },
    o(r) {
      z(i), o = !1;
    },
    d(r) {
      i && i.d(r), r && k(n);
    }
  };
}
function xt(e) {
  let t, n, o, i;
  const r = [nr, tr], s = [];
  function l(a, u) {
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
    m(a, u) {
      ~t && s[t].m(a, u), P(a, o, u), i = !0;
    },
    p(a, u) {
      let h = t;
      t = l(a), t === h ? ~t && s[t].p(a, u) : (n && (ye(), z(s[h], 1, 1, () => {
        s[h] = null;
      }), _e()), ~t ? (n = s[t], n ? n.p(a, u) : (n = s[t] = r[t](a), n.c()), H(n, 1), n.m(o.parentNode, o)) : n = null);
    },
    i(a) {
      i || (H(n), i = !0);
    },
    o(a) {
      z(n), i = !1;
    },
    d(a) {
      ~t && s[t].d(a), a && k(o);
    }
  };
}
function tr(e) {
  let t = (
    /*toolName*/
    e[2]
  ), n, o, i = $t(e);
  return {
    c() {
      i.c(), n = we();
    },
    m(r, s) {
      i.m(r, s), P(r, n, s), o = !0;
    },
    p(r, s) {
      s[0] & /*toolName*/
      4 && x(t, t = /*toolName*/
      r[2]) ? (ye(), z(i, 1, 1, q), _e(), i = $t(r), i.c(), H(i, 1), i.m(n.parentNode, n)) : i.p(r, s);
    },
    i(r) {
      o || (H(i), o = !0);
    },
    o(r) {
      z(i), o = !1;
    },
    d(r) {
      r && k(n), i.d(r);
    }
  };
}
function nr(e) {
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
      t = we();
    },
    m(s, l) {
      for (let a = 0; a < i.length; a += 1)
        i[a] && i[a].m(s, l);
      P(s, t, l), n = !0;
    },
    p(s, l) {
      if (l[0] & /*editableAnnotations, drawingEl, style, transform, $scale, onChangeSelected*/
      279634) {
        o = /*editableAnnotations*/
        s[6];
        let a;
        for (a = 0; a < o.length; a += 1) {
          const u = Kt(s, o, a);
          i[a] ? (i[a].p(u, l), H(i[a], 1)) : (i[a] = tn(u), i[a].c(), H(i[a], 1), i[a].m(t.parentNode, t));
        }
        for (ye(), a = o.length; a < i.length; a += 1)
          r(a);
        _e();
      }
    },
    i(s) {
      if (!n) {
        for (let l = 0; l < o.length; l += 1)
          H(i[l]);
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
      wt(i, s), s && k(t);
    }
  };
}
function $t(e) {
  let t, n;
  return t = new gi({
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
      n || (H(t.$$.fragment, o), n = !0);
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
  return t = new hi({
    props: {
      target: (
        /*drawingEl*/
        e[4]
      ),
      editor: Ft(
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
      64 && (r.editor = Ft(
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
      i.c(), n = we();
    },
    m(r, s) {
      i.m(r, s), P(r, n, s), o = !0;
    },
    p(r, s) {
      s[0] & /*editableAnnotations*/
      64 && x(t, t = /*editable*/
      r[29].id) ? (ye(), z(i, 1, 1, q), _e(), i = en(r), i.c(), H(i, 1), i.m(n.parentNode, n)) : i.p(r, s);
    },
    i(r) {
      o || (H(i), o = !0);
    },
    o(r) {
      z(i), o = !1;
    },
    d(r) {
      r && k(n), i.d(r);
    }
  };
}
function or(e) {
  let t, n, o, i, r, s, l = (
    /*$store*/
    e[13]
  ), a = [];
  for (let f = 0; f < l.length; f += 1)
    a[f] = Qt(Wt(e, l, f));
  const u = (f) => z(a[f], 1, 1, () => {
    a[f] = null;
  });
  let h = (
    /*drawingEl*/
    e[4] && xt(e)
  );
  return {
    c() {
      t = C("svg"), n = C("g");
      for (let f = 0; f < a.length; f += 1)
        a[f].c();
      o = C("g"), h && h.c(), c(o, "class", "drawing"), c(t, "class", "a9s-annotationlayer"), Lt(
        t,
        "drawing",
        /*tool*/
        e[12]
      );
    },
    m(f, m) {
      P(f, t, m), pe(t, n);
      for (let d = 0; d < a.length; d += 1)
        a[d] && a[d].m(n, null);
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
        let d;
        for (d = 0; d < l.length; d += 1) {
          const g = Wt(e, l, d);
          a[d] ? (a[d].p(g, m), H(a[d], 1)) : (a[d] = Qt(g), a[d].c(), H(a[d], 1), a[d].m(n, null));
        }
        for (ye(), d = l.length; d < a.length; d += 1)
          u(d);
        _e();
      }
      /*drawingEl*/
      e[4] ? h ? (h.p(e, m), m[0] & /*drawingEl*/
      16 && H(h, 1)) : (h = xt(e), h.c(), H(h, 1), h.m(o, null)) : h && (ye(), z(h, 1, 1, () => {
        h = null;
      }), _e()), (!i || m[0] & /*tool*/
      4096) && Lt(
        t,
        "drawing",
        /*tool*/
        e[12]
      );
    },
    i(f) {
      if (!i) {
        for (let m = 0; m < l.length; m += 1)
          H(a[m]);
        H(h), i = !0;
      }
    },
    o(f) {
      a = a.filter(Boolean);
      for (let m = 0; m < a.length; m += 1)
        z(a[m]);
      z(h), i = !1;
    },
    d(f) {
      f && k(t), wt(a, f), h && h.d(), e[25](null), e[26](null), r = !1, de(s);
    }
  };
}
function ir(e, t, n) {
  let o, i, r, s, l, a, u, h, f, m, d = q, g = () => (d(), d = ln(y, (O) => n(14, m = O)), y);
  e.$$.on_destroy.push(() => d());
  let { drawingEnabled: b } = t, { image: A } = t, { preferredDrawingMode: E } = t, { state: p } = t, { style: w = void 0 } = t, { toolName: T = _t().length > 0 ? _t()[0] : void 0 } = t, { user: M } = t, B, N, y;
  Le(() => g(n(5, y = Ei(A, N))));
  const { selection: _, store: S } = p;
  Mt(e, _, (O) => n(24, h = O)), Mt(e, S, (O) => n(13, f = O));
  let L = null, I = null;
  const Y = (O) => {
    S.unobserve(L);
    const F = O.filter(({ editable: U }) => U).map(({ id: U }) => U);
    F.length > 0 ? (n(6, I = F.map((U) => S.getAnnotation(U))), L = (U) => {
      const { updated: le } = U.changes;
      n(6, I = le.map((K) => K.newValue));
    }, S.observe(L, { annotations: F })) : n(6, I = null);
  }, R = (O) => {
    const F = mn(), U = {
      id: F,
      bodies: [],
      target: {
        annotation: F,
        selector: O.detail,
        creator: M,
        created: /* @__PURE__ */ new Date()
      }
    };
    S.addAnnotation(U), _.setSelected(U.id);
  }, X = (O) => (F) => {
    var me;
    const { target: U } = O, le = 10 * 60 * 1e3, K = ((me = U.creator) == null ? void 0 : me.id) !== M.id || !U.created || (/* @__PURE__ */ new Date()).getTime() - U.created.getTime() > le;
    S.updateTarget({
      ...U,
      selector: F.detail,
      created: K ? U.created : /* @__PURE__ */ new Date(),
      updated: K ? /* @__PURE__ */ new Date() : null,
      updatedBy: K ? M : null
    });
  };
  function se(O) {
    We[O ? "unshift" : "push"](() => {
      B = O, n(4, B);
    });
  }
  function G(O) {
    We[O ? "unshift" : "push"](() => {
      N = O, n(3, N);
    });
  }
  return e.$$set = (O) => {
    "drawingEnabled" in O && n(0, b = O.drawingEnabled), "image" in O && n(19, A = O.image), "preferredDrawingMode" in O && n(20, E = O.preferredDrawingMode), "state" in O && n(21, p = O.state), "style" in O && n(1, w = O.style), "toolName" in O && n(2, T = O.toolName), "user" in O && n(22, M = O.user);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*toolName*/
    4 && n(12, { tool: o, opts: i } = wn(T), o, (n(23, i), n(2, T))), e.$$.dirty[0] & /*opts, preferredDrawingMode*/
    9437184 && n(11, r = (i == null ? void 0 : i.drawingMode) || E), e.$$.dirty[0] & /*svgEl*/
    8 && n(10, s = Ki(N)), e.$$.dirty[0] & /*svgEl*/
    8 && n(9, { onPointerDown: l, onPointerUp: a } = Zi(N, S), l, (n(8, a), n(3, N))), e.$$.dirty[0] & /*$selection*/
    16777216 && n(7, u = (O) => h.selected.find((F) => F.id === O.id && F.editable)), e.$$.dirty[0] & /*$selection*/
    16777216 && Y(h.selected);
  }, [
    b,
    w,
    T,
    N,
    B,
    y,
    I,
    u,
    a,
    l,
    s,
    r,
    o,
    f,
    m,
    _,
    S,
    R,
    X,
    A,
    E,
    p,
    M,
    i,
    h,
    se,
    G
  ];
}
class rr extends oe {
  constructor(t) {
    super(), ne(
      this,
      t,
      ir,
      or,
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
function sr(e, t, n, o, i) {
  bn(e, t, n || 0, o || e.length - 1, i || lr);
}
function bn(e, t, n, o, i) {
  for (; o > n; ) {
    if (o - n > 600) {
      var r = o - n + 1, s = t - n + 1, l = Math.log(r), a = 0.5 * Math.exp(2 * l / 3), u = 0.5 * Math.sqrt(l * a * (r - a) / r) * (s - r / 2 < 0 ? -1 : 1), h = Math.max(n, Math.floor(t - s * a / r + u)), f = Math.min(o, Math.floor(t + (r - s) * a / r + u));
      bn(e, t, h, f, i);
    }
    var m = e[t], d = n, g = o;
    for (He(e, n, t), i(e[o], m) > 0 && He(e, n, o); d < g; ) {
      for (He(e, d, g), d++, g--; i(e[d], m) < 0; )
        d++;
      for (; i(e[g], m) > 0; )
        g--;
    }
    i(e[n], m) === 0 ? He(e, n, g) : (g++, He(e, g, o)), g <= t && (n = g + 1), t <= g && (o = g - 1);
  }
}
function He(e, t, n) {
  var o = e[t];
  e[t] = e[n], e[n] = o;
}
function lr(e, t) {
  return e < t ? -1 : e > t ? 1 : 0;
}
class ar {
  constructor(t = 9) {
    this._maxEntries = Math.max(4, t), this._minEntries = Math.max(2, Math.ceil(this._maxEntries * 0.4)), this.clear();
  }
  all() {
    return this._all(this.data, []);
  }
  search(t) {
    let n = this.data;
    const o = [];
    if (!et(t, n))
      return o;
    const i = this.toBBox, r = [];
    for (; n; ) {
      for (let s = 0; s < n.children.length; s++) {
        const l = n.children[s], a = n.leaf ? i(l) : l;
        et(t, a) && (n.leaf ? o.push(l) : dt(t, a) ? this._all(l, o) : r.push(l));
      }
      n = r.pop();
    }
    return o;
  }
  collides(t) {
    let n = this.data;
    if (!et(t, n))
      return !1;
    const o = [];
    for (; n; ) {
      for (let i = 0; i < n.children.length; i++) {
        const r = n.children[i], s = n.leaf ? this.toBBox(r) : r;
        if (et(t, s)) {
          if (n.leaf || dt(t, s))
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
    return this.data = Ne([]), this;
  }
  remove(t, n) {
    if (!t)
      return this;
    let o = this.data;
    const i = this.toBBox(t), r = [], s = [];
    let l, a, u;
    for (; o || r.length; ) {
      if (o || (o = r.pop(), a = r[r.length - 1], l = s.pop(), u = !0), o.leaf) {
        const h = cr(t, o.children, n);
        if (h !== -1)
          return o.children.splice(h, 1), r.push(o), this._condense(r), this;
      }
      !u && !o.leaf && dt(o, i) ? (r.push(o), s.push(l), l = 0, a = o, o = o.children[0]) : a ? (l++, o = a.children[l], u = !1) : o = null;
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
      return l = Ne(t.slice(n, o + 1)), Xe(l, this.toBBox), l;
    i || (i = Math.ceil(Math.log(r) / Math.log(s)), s = Math.ceil(r / Math.pow(s, i - 1))), l = Ne([]), l.leaf = !1, l.height = i;
    const a = Math.ceil(r / s), u = a * Math.ceil(Math.sqrt(s));
    nn(t, n, o, u, this.compareMinX);
    for (let h = n; h <= o; h += u) {
      const f = Math.min(h + u - 1, o);
      nn(t, h, f, a, this.compareMinY);
      for (let m = h; m <= f; m += a) {
        const d = Math.min(m + a - 1, f);
        l.children.push(this._build(t, m, d, i - 1));
      }
    }
    return Xe(l, this.toBBox), l;
  }
  _chooseSubtree(t, n, o, i) {
    for (; i.push(n), !(n.leaf || i.length - 1 === o); ) {
      let r = 1 / 0, s = 1 / 0, l;
      for (let a = 0; a < n.children.length; a++) {
        const u = n.children[a], h = ut(u), f = dr(t, u) - h;
        f < s ? (s = f, r = h < r ? h : r, l = u) : f === s && h < r && (r = h, l = u);
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
    const s = this._chooseSplitIndex(o, r, i), l = Ne(o.children.splice(s, o.children.length - s));
    l.height = o.height, l.leaf = o.leaf, Xe(o, this.toBBox), Xe(l, this.toBBox), n ? t[n - 1].children.push(l) : this._splitRoot(o, l);
  }
  _splitRoot(t, n) {
    this.data = Ne([t, n]), this.data.height = t.height + 1, this.data.leaf = !1, Xe(this.data, this.toBBox);
  }
  _chooseSplitIndex(t, n, o) {
    let i, r = 1 / 0, s = 1 / 0;
    for (let l = n; l <= o - n; l++) {
      const a = ze(t, 0, l, this.toBBox), u = ze(t, l, o, this.toBBox), h = hr(a, u), f = ut(a) + ut(u);
      h < r ? (r = h, i = l, s = f < s ? f : s) : h === r && f < s && (s = f, i = l);
    }
    return i || o - n;
  }
  // sorts node children by the best axis for split
  _chooseSplitAxis(t, n, o) {
    const i = t.leaf ? this.compareMinX : fr, r = t.leaf ? this.compareMinY : ur, s = this._allDistMargin(t, n, o, i), l = this._allDistMargin(t, n, o, r);
    s < l && t.children.sort(i);
  }
  // total margin of all possible split distributions where each node is at least m full
  _allDistMargin(t, n, o, i) {
    t.children.sort(i);
    const r = this.toBBox, s = ze(t, 0, n, r), l = ze(t, o - n, o, r);
    let a = $e(s) + $e(l);
    for (let u = n; u < o - n; u++) {
      const h = t.children[u];
      je(s, t.leaf ? r(h) : h), a += $e(s);
    }
    for (let u = o - n - 1; u >= n; u--) {
      const h = t.children[u];
      je(l, t.leaf ? r(h) : h), a += $e(l);
    }
    return a;
  }
  _adjustParentBBoxes(t, n, o) {
    for (let i = o; i >= 0; i--)
      je(n[i], t);
  }
  _condense(t) {
    for (let n = t.length - 1, o; n >= 0; n--)
      t[n].children.length === 0 ? n > 0 ? (o = t[n - 1].children, o.splice(o.indexOf(t[n]), 1)) : this.clear() : Xe(t[n], this.toBBox);
  }
}
function cr(e, t, n) {
  if (!n)
    return t.indexOf(e);
  for (let o = 0; o < t.length; o++)
    if (n(e, t[o]))
      return o;
  return -1;
}
function Xe(e, t) {
  ze(e, 0, e.children.length, t, e);
}
function ze(e, t, n, o, i) {
  i || (i = Ne(null)), i.minX = 1 / 0, i.minY = 1 / 0, i.maxX = -1 / 0, i.maxY = -1 / 0;
  for (let r = t; r < n; r++) {
    const s = e.children[r];
    je(i, e.leaf ? o(s) : s);
  }
  return i;
}
function je(e, t) {
  return e.minX = Math.min(e.minX, t.minX), e.minY = Math.min(e.minY, t.minY), e.maxX = Math.max(e.maxX, t.maxX), e.maxY = Math.max(e.maxY, t.maxY), e;
}
function fr(e, t) {
  return e.minX - t.minX;
}
function ur(e, t) {
  return e.minY - t.minY;
}
function ut(e) {
  return (e.maxX - e.minX) * (e.maxY - e.minY);
}
function $e(e) {
  return e.maxX - e.minX + (e.maxY - e.minY);
}
function dr(e, t) {
  return (Math.max(t.maxX, e.maxX) - Math.min(t.minX, e.minX)) * (Math.max(t.maxY, e.maxY) - Math.min(t.minY, e.minY));
}
function hr(e, t) {
  const n = Math.max(e.minX, t.minX), o = Math.max(e.minY, t.minY), i = Math.min(e.maxX, t.maxX), r = Math.min(e.maxY, t.maxY);
  return Math.max(0, i - n) * Math.max(0, r - o);
}
function dt(e, t) {
  return e.minX <= t.minX && e.minY <= t.minY && t.maxX <= e.maxX && t.maxY <= e.maxY;
}
function et(e, t) {
  return t.minX <= e.maxX && t.minY <= e.maxY && t.maxX >= e.minX && t.maxY >= e.minY;
}
function Ne(e) {
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
    sr(e, s, t, n, i), r.push(t, s, s, n);
  }
}
const mr = () => {
  const e = new ar(), t = /* @__PURE__ */ new Map(), n = () => [...t.values()], o = () => {
    e.clear(), t.clear();
  }, i = (f) => {
    const { minX: m, minY: d, maxX: g, maxY: b } = f.selector.geometry.bounds, A = { minX: m, minY: d, maxX: g, maxY: b, target: f };
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
      }).map((b) => b.target).filter((b) => b.selector.type === j.RECTANGLE || Yn(b.selector, f, m));
      if (g.length > 0)
        return g.sort((b, A) => gt(b.selector) - gt(A.selector)), g[0];
    },
    getIntersecting: (f, m, d, g) => e.search({
      minX: f,
      minY: m,
      maxX: f + d,
      maxY: m + g
    }).map((b) => b.target),
    insert: i,
    remove: r,
    set: (f, m = !0) => {
      m && o();
      const d = f.map((g) => {
        const { minX: b, minY: A, maxX: E, maxY: p } = g.selector.geometry.bounds;
        return { minX: b, minY: A, maxX: E, maxY: p, target: g };
      });
      d.forEach((g) => t.set(g.target.annotation, g)), e.load(d);
    },
    size: () => e.all().length,
    update: (f, m) => {
      r(f), i(m);
    }
  };
}, gr = (e) => {
  const t = vo(), n = mr(), o = yo(t, e.pointerSelectAction), i = po(t), r = Do();
  return t.observe(({ changes: a }) => {
    n.set(a.created.map((u) => u.target), !1), a.deleted.forEach((u) => n.remove(u.target)), a.updated.forEach(({ oldValue: u, newValue: h }) => n.update(u.target, h.target));
  }), {
    store: {
      ...t,
      getAt: (a, u) => {
        const h = n.getAt(a, u);
        return h ? t.getAnnotation(h.annotation) : void 0;
      },
      getIntersecting: (a, u, h, f) => n.getIntersecting(a, u, h, f).map((m) => t.getAnnotation(m.annotation))
    },
    selection: o,
    hover: i,
    viewport: r
  };
}, pr = (e) => {
  const t = gr(e);
  return {
    ...t,
    store: Oo(t.store)
  };
}, yr = (e) => {
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
      const s = Math.round(r * t.width / 10), l = Math.round(i * t.height / 10), a = n.getImageData(s, l, 1, 1).data, u = (0.299 * a[0] + 0.587 * a[1] + 0.114 * a[2]) / 255;
      o += u;
    }
  return o / 81;
}, _r = (e) => {
  const t = yr(e), n = t > 0.6 ? "dark" : "light";
  return console.log(`[Annotorious] Image brightness: ${t.toFixed(1)}. Setting ${n} theme.`), n;
}, on = (e, t, n) => t.setAttribute("data-theme", n === "auto" ? _r(e) : n), wr = (e, t) => ({
  ...e,
  drawingEnabled: e.drawingEnabled === void 0 ? t.drawingEnabled : e.drawingEnabled,
  drawingMode: e.drawingMode || t.drawingMode,
  pointerSelectAction: e.pointerSelectAction || t.pointerSelectAction,
  theme: e.theme || t.theme
}), rn = navigator.userAgent.indexOf("Mac OS X") !== -1, br = (e, t) => {
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
const Tr = (e, t = {}) => {
  if (!e)
    throw "Missing argument: image";
  const n = typeof e == "string" ? document.getElementById(e) : e, o = wr(t, {
    drawingEnabled: !0,
    drawingMode: "drag",
    pointerSelectAction: gn.EDIT,
    theme: "light"
  }), i = pr(o), { selection: r, store: s } = i, l = Io(s), a = Bo(
    i,
    l,
    o.adapter,
    o.autoSave
  ), u = document.createElement("DIV");
  u.style.position = "relative", u.style.display = "inline-block", n.style.display = "block", n.parentNode.insertBefore(u, n), u.appendChild(n);
  const h = br(l);
  let f = Fo();
  on(n, u, o.theme);
  const m = new rr({
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
  const d = Ro(i, l, o.adapter), g = () => {
    m.$destroy(), u.parentNode.insertBefore(n, u), u.parentNode.removeChild(u), h.destroy(), l.destroy();
  }, b = () => f, A = (y, _, S) => Di(y, _, S), E = (y, _) => ai(y, _), p = (y) => {
    if (!wn(y))
      throw `No drawing tool named ${y}`;
    m.$set({ toolName: y });
  }, w = (y) => m.$set({ drawingEnabled: y }), T = (y) => {
    console.warn("Filter not implemented yet");
  }, M = (y) => m.$set({ style: y }), B = (y) => on(n, u, y), N = (y) => {
    f = y, m.$set({ user: y });
  };
  return {
    ...d,
    destroy: g,
    getUser: b,
    listDrawingTools: _t,
    on: a.on,
    off: a.off,
    registerDrawingTool: A,
    registerShapeEditor: E,
    setDrawingEnabled: w,
    setDrawingTool: p,
    setFilter: T,
    setStyle: M,
    setTheme: B,
    setUser: N,
    state: i
  };
};
export {
  ot as Editor,
  hi as EditorMount,
  oi as EllipseEditor,
  li as FreehandEditor,
  v as Handle,
  Sr as IdentityTransform,
  Zo as PolygonEditor,
  $o as RectangleEditor,
  Cn as RectangleUtil,
  _i as RubberbandRectangle,
  rr as SVGAnnotationLayer,
  j as ShapeType,
  gi as ToolMount,
  Er as W3CImageFormat,
  Zi as addEventListeners,
  Me as boundsFromPoints,
  gt as computeArea,
  Tr as createImageAnnotator,
  gr as createImageAnnotatorState,
  Ki as createSVGTransform,
  pr as createSvelteImageAnnotatorState,
  _r as detectTheme,
  at as distance,
  Ei as enableResponsive,
  wr as fillDefaults,
  Ft as getEditor,
  wn as getTool,
  br as initKeyboardCommands,
  Yn as intersects,
  Ar as isTouch,
  _t as listDrawingTools,
  Un as parseFragmentSelector,
  ao as parseSVGSelector,
  zo as parseW3CImageAnnotation,
  ai as registerEditor,
  nt as registerShapeUtil,
  Di as registerTool,
  yr as sampleBrightness,
  Fn as serializeFragmentSelector,
  co as serializeSVGSelector,
  jo as serializeW3CImageAnnotation,
  on as setTheme
};
//# sourceMappingURL=annotorious.es.js.map
