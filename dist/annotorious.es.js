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
let qe;
function je(e) {
  qe = e;
}
function an() {
  if (!qe)
    throw new Error("Function called outside component initialization");
  return qe;
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
const Xe = [], Ke = [];
let Ne = [];
const Mt = [], vn = /* @__PURE__ */ Promise.resolve();
let dt = !1;
function On() {
  dt || (dt = !0, vn.then(cn));
}
function ht(e) {
  Ne.push(e);
}
const it = /* @__PURE__ */ new Set();
let Pe = 0;
function cn() {
  if (Pe !== 0)
    return;
  const e = qe;
  do {
    try {
      for (; Pe < Xe.length; ) {
        const t = Xe[Pe];
        Pe++, je(t), kn(t.$$);
      }
    } catch (t) {
      throw Xe.length = 0, Pe = 0, t;
    }
    for (je(null), Xe.length = 0, Pe = 0; Ke.length; )
      Ke.pop()();
    for (let t = 0; t < Ne.length; t += 1) {
      const n = Ne[t];
      it.has(n) || (it.add(n), n());
    }
    Ne.length = 0;
  } while (Xe.length);
  for (; Mt.length; )
    Mt.pop()();
  dt = !1, it.clear(), je(e);
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
const xe = /* @__PURE__ */ new Set();
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
  e && e.i && (xe.delete(e), e.i(t));
}
function z(e, t, n, o) {
  if (e && e.o) {
    if (xe.has(e))
      return;
    xe.add(e), Se.c.push(() => {
      xe.delete(e), o && (n && e.d(1), o());
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
  e.$$.dirty[0] === -1 && (Xe.push(e), On(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function ne(e, t, n, o, i, r, s, l = [-1]) {
  const a = qe;
  je(e);
  const u = e.$$ = {
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
  s && s(u.root);
  let h = !1;
  if (u.ctx = n ? n(e, t.props || {}, (f, m, ...d) => {
    const g = d.length ? d[0] : m;
    return u.ctx && i(u.ctx[f], u.ctx[f] = g) && (!u.skip_bound && u.bound[f] && u.bound[f](g), h && Pn(e, f)), m;
  }) : [], u.update(), h = !0, de(u.before_update), u.fragment = o ? o(u.ctx) : !1, t.target) {
    if (t.hydrate) {
      const f = Mn(t.target);
      u.fragment && u.fragment.l(f), f.forEach(k);
    } else
      u.fragment && u.fragment.c();
    t.intro && F(e.$$.fragment), fe(e, t.target, t.anchor, t.customElement), cn();
  }
  je(a);
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
const _t = {}, $e = (e, t) => _t[e] = t, mt = (e) => _t[e.type].area(e), Bn = (e, t, n) => _t[e.type].intersects(e, t, n), Me = (e) => {
  let t = 1 / 0, n = 1 / 0, o = -1 / 0, i = -1 / 0;
  return e.forEach(([r, s]) => {
    t = Math.min(t, r), n = Math.min(n, s), o = Math.max(o, r), i = Math.max(i, s);
  }), { minX: t, minY: n, maxX: o, maxY: i };
}, Dn = {
  area: (e) => Math.PI * e.geometry.rx * e.geometry.ry,
  intersects: (e, t, n) => {
    const { cx: o, cy: i, rx: r, ry: s } = e.geometry, l = 0, a = Math.cos(l), u = Math.sin(l), h = t - o, f = n - i, m = a * h + u * f, d = u * h - a * f;
    return m * m / (r * r) + d * d / (s * s) <= 1;
  }
};
$e(j.ELLIPSE, Dn);
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
      const l = o[r][0], a = o[r][1], u = o[s][0], h = o[s][1];
      a > n != h > n && t < (u - l) * (n - a) / (h - a) + l && (i = !i);
    }
    return i;
  }
};
$e(j.POLYGON, Yn);
const Rn = {
  area: (e) => e.geometry.w * e.geometry.h,
  intersects: (e, t, n) => t >= e.geometry.x && t <= e.geometry.x + e.geometry.w && n >= e.geometry.y && n <= e.geometry.y + e.geometry.h
};
$e(j.RECTANGLE, Rn);
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
$e(j.FREEHAND, Xn);
const Cn = (e, t = !1) => {
  const n = typeof e == "string" ? e : e.value, o = /^(xywh)=(pixel|percent)?:?(.+?),(.+?),(.+?),(.+)*/g, i = [...n.matchAll(o)][0], [r, s, l, a, u, h, f] = i;
  if (s !== "xywh")
    throw new Error("Unsupported MediaFragment: " + n);
  if (l && l !== "pixel")
    throw new Error(`Unsupported MediaFragment unit: ${l}`);
  const [m, d, g, p] = [a, u, h, f].map(parseFloat);
  return {
    type: j.RECTANGLE,
    geometry: {
      x: m,
      y: d,
      w: g,
      h: p,
      bounds: {
        minX: m,
        minY: t ? d - p : d,
        maxX: m + g,
        maxY: t ? d : d + p
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
function vt(e, t, n, o = (i) => i) {
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
function Ue(e) {
  return [e[1], -e[0]];
}
function Ot(e, t) {
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
function Ve(e, t, n) {
  let o = Math.sin(n), i = Math.cos(n), r = e[0] - t[0], s = e[1] - t[1], l = r * i - s * o, a = r * o + s * i;
  return [l + t[0], a + t[1]];
}
function gt(e, t, n) {
  return ce(e, ae(ie(t, e), n));
}
function It(e, t, n) {
  return ce(e, ae(t, n));
}
var { min: Be, PI: qn } = Math, Pt = 0.275, Ge = qn + 1e-4;
function Kn(e, t = {}) {
  let { size: n = 16, smoothing: o = 0.5, thinning: i = 0.5, simulatePressure: r = !0, easing: s = (H) => H, start: l = {}, end: a = {}, last: u = !1 } = t, { cap: h = !0, easing: f = (H) => H * (2 - H) } = l, { cap: m = !0, easing: d = (H) => --H * H * H + 1 } = a;
  if (e.length === 0 || n <= 0)
    return [];
  let g = e[e.length - 1].runningLength, p = l.taper === !1 ? 0 : l.taper === !0 ? Math.max(n, g) : l.taper, A = a.taper === !1 ? 0 : a.taper === !0 ? Math.max(n, g) : a.taper, b = Math.pow(n * o, 2), y = [], S = [], T = e.slice(0, 10).reduce((H, O) => {
    let V = O.pressure;
    if (r) {
      let N = Be(1, O.distance / n), le = Be(1, 1 - N);
      V = Be(1, H + (le - H) * (N * Pt));
    }
    return (H + V) / 2;
  }, e[0].pressure), M = vt(n, i, e[e.length - 1].pressure, s), D, U = e[0].vector, _ = e[0].point, w = _, E = _, L = w, P = !1;
  for (let H = 0; H < e.length; H++) {
    let { pressure: O } = e[H], { point: V, vector: N, distance: le, runningLength: K } = e[H];
    if (H < e.length - 1 && g - K < 3)
      continue;
    if (i) {
      if (r) {
        let J = Be(1, le / n), be = Be(1, 1 - J);
        O = Be(1, T + (be - T) * (J * Pt));
      }
      M = vt(n, i, O, s);
    } else
      M = n / 2;
    D === void 0 && (D = M);
    let me = K < p ? f(K / p) : 1, ve = g - K < A ? d((g - K) / A) : 1;
    M = Math.max(0.01, M * Math.min(me, ve));
    let Oe = (H < e.length - 1 ? e[H + 1] : e[H]).vector, $ = H < e.length - 1 ? Ot(N, Oe) : 1, ke = Ot(N, U) < 0 && !P, Ae = $ !== null && $ < 0;
    if (ke || Ae) {
      let J = ae(Ue(U), M);
      for (let be = 1 / 13, ge = 0; ge <= 1; ge += be)
        E = Ve(ie(V, J), V, Ge * ge), y.push(E), L = Ve(ce(V, J), V, Ge * -ge), S.push(L);
      _ = E, w = L, Ae && (P = !0);
      continue;
    }
    if (P = !1, H === e.length - 1) {
      let J = ae(Ue(N), M);
      y.push(ie(V, J)), S.push(ce(V, J));
      continue;
    }
    let Ie = ae(Ue(gt(Oe, N, $)), M);
    E = ie(V, Ie), (H <= 1 || kt(_, E) > b) && (y.push(E), _ = E), L = ce(V, Ie), (H <= 1 || kt(w, L) > b) && (S.push(L), w = L), T = O, U = N;
  }
  let Y = e[0].point.slice(0, 2), R = e.length > 1 ? e[e.length - 1].point.slice(0, 2) : ce(e[0].point, [1, 1]), X = [], se = [];
  if (e.length === 1) {
    if (!(p || A) || u) {
      let H = It(Y, un(Ue(ie(Y, R))), -(D || M)), O = [];
      for (let V = 1 / 13, N = V; N <= 1; N += V)
        O.push(Ve(H, Y, Ge * 2 * N));
      return O;
    }
  } else {
    if (!(p || A && e.length === 1))
      if (h)
        for (let O = 1 / 13, V = O; V <= 1; V += O) {
          let N = Ve(S[0], Y, Ge * V);
          X.push(N);
        }
      else {
        let O = ie(y[0], S[0]), V = ae(O, 0.5), N = ae(O, 0.51);
        X.push(ie(Y, V), ie(Y, N), ce(Y, N), ce(Y, V));
      }
    let H = Ue(Vn(e[e.length - 1].vector));
    if (A || p && e.length === 1)
      se.push(R);
    else if (m) {
      let O = It(R, H, M);
      for (let V = 1 / 29, N = V; N < 1; N += V)
        se.push(Ve(O, R, Ge * 3 * N));
    } else
      se.push(ce(R, ae(H, M)), ce(R, ae(H, M * 0.99)), ie(R, ae(H, M * 0.99)), ie(R, ae(H, M)));
  }
  return y.concat(se, S.reverse(), X);
}
function Wn(e, t = {}) {
  var n;
  let { streamline: o = 0.5, size: i = 16, last: r = !1 } = t;
  if (e.length === 0)
    return [];
  let s = 0.15 + (1 - o) * 0.85, l = Array.isArray(e[0]) ? e : e.map(({ x: d, y: g, pressure: p = 0.5 }) => [d, g, p]);
  if (l.length === 2) {
    let d = l[1];
    l = l.slice(0, -1);
    for (let g = 1; g < 5; g++)
      l.push(gt(l[0], d, g / 4));
  }
  l.length === 1 && (l = [...l, [...ce(l[0], [1, 1]), ...l[0].slice(2)]]);
  let a = [{ point: [l[0][0], l[0][1]], pressure: l[0][2] >= 0 ? l[0][2] : 0.25, vector: [1, 1], distance: 0, runningLength: 0 }], u = !1, h = 0, f = a[0], m = l.length - 1;
  for (let d = 1; d < l.length; d++) {
    let g = r && d === m ? l[d].slice(0, 2) : gt(f.point, l[d], s);
    if (Hn(f.point, g))
      continue;
    let p = jn(g, f.point);
    if (h += p, d < m && !u) {
      if (h < i)
        continue;
      u = !0;
    }
    f = { point: g, pressure: l[d][2] >= 0 ? l[d][2] : 0.5, vector: un(ie(f.point, g)), distance: p, runningLength: h }, a.push(f);
  }
  return a[0].vector = ((n = a[1]) == null ? void 0 : n.vector) || [0, 0], a;
}
function Zn(e, t = {}) {
  return Kn(Wn(e, t), t);
}
const et = {
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
function tt(e, t) {
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
    t = `<svg><path d="${tt(n.points, et)}"/></svg>`;
  } else if (e.type === j.ELLIPSE) {
    const n = e.geometry;
    t = `<svg><ellipse cx="${n.cx}" cy="${n.cy}" rx="${n.rx}" ry="${n.ry}" /></svg>`;
  }
  if (t)
    return { type: "SvgSelector", value: t };
  throw `Unsupported shape type: ${e.type}`;
};
let Ze;
const oo = new Uint8Array(16);
function io() {
  if (!Ze && (Ze = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Ze))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Ze(oo);
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
      for (const u of o)
        u[1](), De.push(u, e);
      if (a) {
        for (let u = 0; u < De.length; u += 2)
          De[u][0](De[u + 1]);
        De.length = 0;
      }
    }
  }
  function r(l) {
    i(l(e));
  }
  function s(l, a = rt) {
    const u = [l, a];
    return o.add(u), o.size === 1 && (n = t(i) || rt), l(e), () => {
      o.delete(u), o.size === 0 && n && (n(), n = null);
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
    return i.selected.some((d) => d.id === m);
  }, a = (f, m) => {
    const d = e.getAnnotation(f);
    if (d) {
      const g = fo(d, t);
      o(g === "EDIT" ? { selected: [{ id: f, editable: !0 }], pointerEvent: m } : g === "SELECT" ? { selected: [{ id: f }], pointerEvent: m } : { selected: [], pointerEvent: m });
    } else
      console.warn("Invalid selection: " + f);
  }, u = (f, m = !0) => {
    const d = Array.isArray(f) ? f : [f], g = d.map((p) => e.getAnnotation(p)).filter((p) => p);
    o({ selected: g.map(({ id: p }) => ({ id: p, editable: m })) }), g.length !== d.length && console.warn("Invalid selection", f);
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
}, _o = (e, t) => {
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
        const g = t.updated.find((p) => p.oldValue.id === d.id).newValue;
        return mn(m, g);
      } else
        return f;
    }),
    ...(t.updated || []).filter(({ oldValue: f }) => !l.has(f.id))
  ];
  return { created: a, deleted: u, updated: h };
}, wo = (e) => e.id !== void 0, bo = () => {
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
  }, l = (_, w) => {
    const E = typeof _ == "string" ? w : _, L = typeof _ == "string" ? _ : _.id, P = e.get(L);
    if (P) {
      const Y = mn(P, E);
      return L === E.id ? e.set(L, E) : (e.delete(L), e.set(E.id, E)), P.bodies.forEach((R) => t.delete(R.id)), E.bodies.forEach((R) => t.set(R.id, E.id)), Y;
    } else
      console.warn(`Cannot update annotation ${L} - does not exist`);
  }, a = (_, w = Q.LOCAL, E = Q.LOCAL) => {
    const L = wo(w) ? E : w, P = l(_, w);
    P && r(L, { updated: [P] });
  }, u = (_, w = Q.LOCAL) => {
    const E = _.reduce((L, P) => {
      const Y = l(P);
      return Y ? [...L, Y] : L;
    }, []);
    E.length > 0 && r(w, { updated: E });
  }, h = (_, w = Q.LOCAL) => {
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
  }, f = () => [...e.values()], m = (_ = Q.LOCAL) => {
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
  }, p = (_, w = Q.LOCAL) => {
    const E = g(_);
    E && r(w, { deleted: [E] });
  }, A = (_, w = Q.LOCAL) => {
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
  }, y = (_) => {
    const w = e.get(_);
    return w ? { ...w } : void 0;
  }, S = (_) => {
    const w = t.get(_);
    if (w) {
      const E = y(w).bodies.find((L) => L.id === _);
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
    addBody: h,
    all: f,
    bulkAddAnnotation: d,
    bulkDeleteAnnotation: A,
    bulkUpdateAnnotation: u,
    bulkUpdateBodies: D,
    bulkUpdateTargets: (_, w = Q.LOCAL) => {
      const E = _.map(U).filter((L) => L);
      E.length > 0 && r(w, { updated: E });
    },
    clear: m,
    deleteAnnotation: p,
    deleteBody: b,
    getAnnotation: y,
    getBody: S,
    observe: o,
    unobserve: i,
    updateAnnotation: a,
    updateBody: M,
    updateTarget: (_, w = Q.LOCAL) => {
      const E = U(_);
      E && r(w, { updated: [E] });
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
  const s = (d) => {
    if (!i) {
      const { changes: g } = d, p = performance.now();
      if (p - r > So)
        n.splice(o + 1), n.push(g), o = n.length - 1;
      else {
        const A = n.length - 1;
        n[A] = _o(n[A], g);
      }
      r = p;
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
        const { created: d, updated: g, deleted: p } = n[o + 1];
        a(d), h(g), m(p), t.emit("redo", n[o + 1]), o += 1;
      }
    },
    undo: () => {
      if (o > -1) {
        i = !0;
        const { created: d, updated: g, deleted: p } = n[o];
        l(d), u(g), f(p), t.emit("undo", n[o]), o -= 1;
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
  let u = [], h, f;
  const m = (b, y) => {
    a.has(b) ? a.get(b).push(y) : a.set(b, [y]);
  }, d = (b, y) => {
    const S = a.get(b);
    S && S.indexOf(y) > 0 && S.splice(S.indexOf(y), 1);
  }, g = (b, y, S) => {
    a.has(b) && setTimeout(() => {
      a.get(b).forEach((T) => {
        if (n) {
          const M = Array.isArray(y) ? y.map((U) => n.serialize(U)) : n.serialize(y), D = S ? S instanceof PointerEvent ? S : n.serialize(S) : void 0;
          T(M, D);
        } else
          T(y, S);
      });
    }, 1);
  }, p = () => {
    const { selected: b } = r, y = b.map(({ id: S }) => i.getAnnotation(S));
    y.forEach((S) => {
      const T = u.find((M) => M.id === S.id);
      (!T || !Te(T, S)) && g("updateAnnotation", S, T);
    }), u = u.map((S) => y.find(({ id: M }) => M === S.id) || S);
  };
  r.subscribe(({ selected: b }) => {
    if (!(u.length === 0 && b.length === 0)) {
      if (u.length === 0 && b.length > 0)
        u = b.map(({ id: y }) => i.getAnnotation(y));
      else if (u.length > 0 && b.length === 0)
        u.forEach((y) => {
          const S = i.getAnnotation(y.id);
          S && !Te(S, y) && g("updateAnnotation", S, y);
        }), u = [];
      else {
        const y = new Set(u.map((T) => T.id)), S = new Set(b.map(({ id: T }) => T));
        u.filter((T) => !S.has(T.id)).forEach((T) => {
          const M = i.getAnnotation(T.id);
          M && !Te(M, T) && g("updateAnnotation", M, T);
        }), u = [
          // Remove annotations that were deselected
          ...u.filter((T) => S.has(T.id)),
          // Add editable annotations that were selected
          ...b.filter(({ id: T }) => !y.has(T)).map(({ id: T }) => i.getAnnotation(T))
        ];
      }
      g("selectionChanged", u);
    }
  }), s.subscribe((b) => {
    !h && b ? g("mouseEnterAnnotation", i.getAnnotation(b)) : h && !b ? g("mouseLeaveAnnotation", i.getAnnotation(h)) : h && b && (g("mouseLeaveAnnotation", i.getAnnotation(h)), g("mouseEnterAnnotation", i.getAnnotation(b))), h = b;
  }), l == null || l.subscribe((b) => g("viewportIntersect", b.map(i.getAnnotation))), i.observe((b) => {
    o && (f && clearTimeout(f), f = setTimeout(p, 1e3));
    const { created: y, deleted: S } = b.changes;
    y.forEach((T) => g("createAnnotation", T)), S.forEach((T) => g("deleteAnnotation", T)), b.changes.updated.filter((T) => [
      ...T.bodiesCreated || [],
      ...T.bodiesDeleted || [],
      ...T.bodiesUpdated || []
    ].length > 0).forEach(({ oldValue: T, newValue: M }) => {
      const D = u.find((U) => U.id === T.id) || T;
      u = u.map((U) => U.id === T.id ? M : U), g("updateAnnotation", M, D);
    });
  }, { origin: Q.LOCAL }), i.observe((b) => {
    if (u) {
      const y = new Set(u.map((T) => T.id)), S = b.changes.updated.filter(({ newValue: T }) => y.has(T.id)).map(({ newValue: T }) => T);
      S.length > 0 && (u = u.map((T) => S.find((D) => D.id === T.id) || T));
    }
  }, { origin: Q.REMOTE });
  const A = (b) => (y) => {
    const { created: S, deleted: T, updated: M } = y;
    S.forEach((D) => g("createAnnotation", D)), T.forEach((D) => g("deleteAnnotation", D)), b ? M.forEach((D) => g("updateAnnotation", D.oldValue, D.newValue)) : M.forEach((D) => g("updateAnnotation", D.newValue, D.oldValue));
  };
  return t.on("undo", A(!0)), t.on("redo", A(!1)), { on: m, off: d, emit: g };
}, vo = (e) => (t) => t.reduce((n, o) => {
  const { parsed: i, error: r } = e.parse(o);
  return r ? {
    parsed: n.parsed,
    failed: [...n.failed, o]
  } : {
    parsed: [...n.parsed, i],
    failed: n.failed
  };
}, { parsed: [], failed: [] }), Oo = (e, t, n) => {
  const { store: o, selection: i } = e, r = (A) => {
    if (n) {
      const { parsed: b, error: y } = n.parse(A);
      b ? o.addAnnotation(b, Q.REMOTE) : console.error(y);
    } else
      o.addAnnotation(A, Q.REMOTE);
  }, s = () => i.clear(), l = () => o.clear(), a = (A) => {
    const b = o.getAnnotation(A);
    return n && b ? n.serialize(b) : b;
  }, u = () => n ? o.all().map(n.serialize) : o.all(), h = () => {
    var A;
    const b = (((A = i.selected) == null ? void 0 : A.map((y) => y.id)) || []).map((y) => o.getAnnotation(y));
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
      const { parsed: b, failed: y } = vo(n)(A);
      y.length > 0 && console.warn(`Discarded ${y.length} invalid annotations`, y), o.bulkAddAnnotation(b, !0, Q.REMOTE);
    } else
      o.bulkAddAnnotation(A, !0, Q.REMOTE);
  }, g = (A) => {
    A ? i.setSelected(A) : i.clear();
  }, p = (A) => {
    if (n) {
      const b = n.parse(A).parsed, y = n.serialize(o.getAnnotation(b.id));
      return o.updateAnnotation(b), y;
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
    updateAnnotation: p
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
  const { id: o, type: i, purpose: r, value: s, created: l, creator: a, ...u } = n;
  return {
    id: o || `temp-${Yo(n)}`,
    annotation: t,
    type: i,
    purpose: r,
    value: s,
    created: l ? new Date(l) : void 0,
    creator: gn(a),
    ...u
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
  } = e, u = Ro(l, n), h = Array.isArray(e.target) ? e.target[0] : e.target, f = Array.isArray(h.selector) ? h.selector[0] : h.selector, m = f.type === "FragmentSelector" ? Cn(f, t) : f.type === "SvgSelector" ? to(f) : void 0;
  return m ? {
    parsed: {
      ...a,
      id: n,
      bodies: u,
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
function Uo(e) {
  let t, n, o, i, r, s, l, a, u, h, f = (
    /*geom*/
    e[4].points
  ), m = [];
  for (let d = 0; d < f.length; d += 1)
    m[d] = Rt(Yt(e, f, d));
  return {
    c() {
      t = C("polygon"), i = te(), r = C("polygon"), l = te();
      for (let d = 0; d < m.length; d += 1)
        m[d].c();
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
    m(d, g) {
      I(d, t, g), I(d, i, g), I(d, r, g), I(d, l, g);
      for (let p = 0; p < m.length; p += 1)
        m[p] && m[p].m(d, g);
      I(d, a, g), u || (h = [
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
        let p;
        for (p = 0; p < f.length; p += 1) {
          const A = Yt(e, f, p);
          m[p] ? m[p].p(A, g) : (m[p] = Rt(A), m[p].c(), m[p].m(a.parentNode, a));
        }
        for (; p < m.length; p += 1)
          m[p].d(1);
        m.length = f.length;
      }
    },
    d(d) {
      d && k(t), d && k(i), d && k(r), d && k(l), yt(m, d), d && k(a), u = !1, de(h);
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
  const u = (d, g, p) => {
    let A;
    g === v.SHAPE ? A = d.geometry.points.map(([y, S]) => [y + p[0], S + p[1]]) : A = d.geometry.points.map(([y, S], T) => g === v(T) ? [y + p[0], S + p[1]] : [y, S]);
    const b = Me(A);
    return { ...d, geometry: { points: A, bounds: b } };
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
  let t, n, o, i, r, s, l, a, u, h, f, m, d, g, p, A, b, y, S, T, M, D, U, _, w, E, L, P, Y, R, X, se, H, O, V, N, le, K, me, ve, Oe, $, ke, Ae, Ie, J, be, ge, ot, Et;
  return {
    c() {
      t = C("rect"), l = te(), a = C("rect"), d = te(), g = C("rect"), y = te(), S = C("rect"), U = te(), _ = C("rect"), P = te(), Y = C("rect"), H = te(), O = C("rect"), le = te(), K = C("rect"), Oe = te(), $ = C("rect"), Ie = te(), J = C("rect"), c(t, "class", "a9s-outer"), c(t, "style", n = /*computedStyle*/
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
      e[4].h), c(g, "class", "a9s-edge-handle a9s-edge-handle-top"), c(g, "x", p = /*geom*/
      e[4].x), c(g, "y", A = /*geom*/
      e[4].y), c(g, "height", 1), c(g, "width", b = /*geom*/
      e[4].w), c(S, "class", "a9s-edge-handle a9s-edge-handle-right"), c(S, "x", T = /*geom*/
      e[4].x + /*geom*/
      e[4].w), c(S, "y", M = /*geom*/
      e[4].y), c(S, "height", D = /*geom*/
      e[4].h), c(S, "width", 1), c(_, "class", "a9s-edge-handle a9s-edge-handle-bottom"), c(_, "x", w = /*geom*/
      e[4].x), c(_, "y", E = /*geom*/
      e[4].y + /*geom*/
      e[4].h), c(_, "height", 1), c(_, "width", L = /*geom*/
      e[4].w), c(Y, "class", "a9s-edge-handle a9s-edge-handle-left"), c(Y, "x", R = /*geom*/
      e[4].x), c(Y, "y", X = /*geom*/
      e[4].y), c(Y, "height", se = /*geom*/
      e[4].h), c(Y, "width", 1), c(O, "class", "a9s-corner-handle a9s-corner-handle-topleft"), c(O, "x", V = /*geom*/
      e[4].x - /*handleSize*/
      e[3] / 2), c(O, "y", N = /*geom*/
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
      I(G, t, B), I(G, l, B), I(G, a, B), I(G, d, B), I(G, g, B), I(G, y, B), I(G, S, B), I(G, U, B), I(G, _, B), I(G, P, B), I(G, Y, B), I(G, H, B), I(G, O, B), I(G, le, B), I(G, K, B), I(G, Oe, B), I(G, $, B), I(G, Ie, B), I(G, J, B), ot || (Et = [
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
        Z(S, "pointerdown", function() {
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
      16 && u !== (u = /*geom*/
      e[4].x) && c(a, "x", u), B & /*geom*/
      16 && h !== (h = /*geom*/
      e[4].y) && c(a, "y", h), B & /*geom*/
      16 && f !== (f = /*geom*/
      e[4].w) && c(a, "width", f), B & /*geom*/
      16 && m !== (m = /*geom*/
      e[4].h) && c(a, "height", m), B & /*geom*/
      16 && p !== (p = /*geom*/
      e[4].x) && c(g, "x", p), B & /*geom*/
      16 && A !== (A = /*geom*/
      e[4].y) && c(g, "y", A), B & /*geom*/
      16 && b !== (b = /*geom*/
      e[4].w) && c(g, "width", b), B & /*geom*/
      16 && T !== (T = /*geom*/
      e[4].x + /*geom*/
      e[4].w) && c(S, "x", T), B & /*geom*/
      16 && M !== (M = /*geom*/
      e[4].y) && c(S, "y", M), B & /*geom*/
      16 && D !== (D = /*geom*/
      e[4].h) && c(S, "height", D), B & /*geom*/
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
      e[3] / 2) && c(O, "x", V), B & /*geom, handleSize*/
      24 && N !== (N = /*geom*/
      e[4].y - /*handleSize*/
      e[3] / 2) && c(O, "y", N), B & /*handleSize*/
      8 && c(
        O,
        "height",
        /*handleSize*/
        e[3]
      ), B & /*handleSize*/
      8 && c(
        O,
        "width",
        /*handleSize*/
        e[3]
      ), B & /*geom, handleSize*/
      24 && me !== (me = /*geom*/
      e[4].x + /*geom*/
      e[4].w - /*handleSize*/
      e[3] / 2) && c(K, "x", me), B & /*geom, handleSize*/
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
      G && k(t), G && k(l), G && k(a), G && k(d), G && k(g), G && k(y), G && k(S), G && k(U), G && k(_), G && k(P), G && k(Y), G && k(H), G && k(O), G && k(le), G && k(K), G && k(Oe), G && k($), G && k(Ie), G && k(J), ot = !1, de(Et);
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
  const u = (d, g, p) => {
    const A = d.geometry.bounds;
    let [b, y] = [A.minX, A.minY], [S, T] = [A.maxX, A.maxY];
    const [M, D] = p;
    if (g === v.SHAPE)
      b += M, S += M, y += D, T += D;
    else {
      switch (g) {
        case v.TOP:
        case v.TOP_LEFT:
        case v.TOP_RIGHT: {
          y += D;
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
          S += M;
          break;
        }
      }
    }
    const U = Math.min(b, S), _ = Math.min(y, T), w = Math.abs(S - b), E = Math.abs(T - y);
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
  let t, n, o, i, r, s, l, a, u, h, f, m, d, g, p, A, b, y, S, T, M, D, U, _, w, E, L, P, Y;
  return {
    c() {
      t = C("ellipse"), s = te(), l = C("ellipse"), m = te(), d = C("rect"), A = te(), b = C("rect"), T = te(), M = C("rect"), _ = te(), w = C("rect"), c(t, "class", "a9s-outer"), c(t, "cx", n = /*geom*/
      e[3].cx), c(t, "cy", o = /*geom*/
      e[3].cy), c(t, "rx", i = /*geom*/
      e[3].rx), c(t, "ry", r = /*geom*/
      e[3].ry), c(l, "class", "a9s-inner a9s-shape-handle"), c(l, "cx", a = /*geom*/
      e[3].cx), c(l, "cy", u = /*geom*/
      e[3].cy), c(l, "rx", h = /*geom*/
      e[3].rx), c(l, "ry", f = /*geom*/
      e[3].ry), c(d, "class", "a9s-corner-handle a9s-corner-top"), c(d, "x", g = /*geom*/
      e[3].cx - /*handleSize*/
      e[2] / 2), c(d, "y", p = /*geom*/
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
      ), c(b, "class", "a9s-corner-handle a9s-corner-handle-right"), c(b, "x", y = /*geom*/
      e[3].cx + /*geom*/
      e[3].rx - /*handleSize*/
      e[2] / 2), c(b, "y", S = /*geom*/
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
      I(R, t, X), I(R, s, X), I(R, l, X), I(R, m, X), I(R, d, X), I(R, A, X), I(R, b, X), I(R, T, X), I(R, M, X), I(R, _, X), I(R, w, X), P || (Y = [
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
      12 && p !== (p = /*geom*/
      e[3].cy - /*handleSize*/
      e[2] / 2 - /*geom*/
      e[3].ry) && c(d, "y", p), X & /*handleSize*/
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
      e[2] / 2) && c(b, "x", y), X & /*geom, handleSize*/
      12 && S !== (S = /*geom*/
      e[3].cy - /*handleSize*/
      e[2] / 2) && c(b, "y", S), X & /*handleSize*/
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
      R && k(t), R && k(s), R && k(l), R && k(m), R && k(d), R && k(A), R && k(b), R && k(T), R && k(M), R && k(_), R && k(w), P = !1, de(Y);
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
  const a = (m, d, g) => {
    const p = m.geometry.bounds;
    let [A, b] = [p.minX, p.minY], [y, S] = [p.maxX, p.maxY];
    const [T, M] = g;
    if (d === v.SHAPE)
      A += T, y += T, b += M, S += M;
    else
      switch (d) {
        case v.TOP: {
          b += M;
          break;
        }
        case v.BOTTOM: {
          S += M;
          break;
        }
        case v.LEFT: {
          A += T;
          break;
        }
        case v.RIGHT: {
          y += T;
          break;
        }
      }
    const D = Math.min(A, y), U = Math.min(b, S), _ = Math.abs(y - A), w = Math.abs(S - b), E = (A + y) / 2, L = (b + S) / 2, P = _ / 2, Y = w / 2;
    return {
      ...m,
      geometry: {
        ...m.geometry,
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
class Jo extends oe {
  constructor(t) {
    super(), ne(this, t, Zo, Wo, x, { shape: 0, transform: 1, viewportScale: 5 });
  }
}
function Qo(e) {
  let t, n, o, i;
  return {
    c() {
      t = C("path"), c(t, "class", "a9s-inner a9s-shape-handle"), c(t, "style", n = /*computedStyle*/
      e[1] ? null : "fill: black"), c(
        t,
        "d",
        /*pathData*/
        e[3]
      );
    },
    m(r, s) {
      I(r, t, s), o || (i = Z(t, "pointerdown", function() {
        W(
          /*grab*/
          e[11](v.SHAPE)
        ) && e[11](v.SHAPE).apply(this, arguments);
      }), o = !0);
    },
    p(r, s) {
      e = r, s & /*computedStyle*/
      2 && n !== (n = /*computedStyle*/
      e[1] ? null : "fill: black") && c(t, "style", n), s & /*pathData*/
      8 && c(
        t,
        "d",
        /*pathData*/
        e[3]
      );
    },
    d(r) {
      r && k(t), o = !1, i();
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
  const u = (d, g, p) => {
    let A;
    g === v.SHAPE && (A = d.geometry.points.map(([y, S, T]) => [y + p[0], S + p[1], T]));
    const b = Me(A.map((y) => [y[0], y[1]]));
    return { ...d, geometry: { points: A, bounds: b } };
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
    "shape" in d && n(0, r = d.shape), "computedStyle" in d && n(1, s = d.computedStyle), "transform" in d && n(2, l = d.transform), "viewportScale" in d && n(5, a = d.viewportScale);
  }, e.$$.update = () => {
    e.$$.dirty & /*shape*/
    1 && n(6, o = r.geometry), e.$$.dirty & /*viewportScale*/
    32, e.$$.dirty & /*geom*/
    64 && n(3, i = tt(o.points, et));
  }, [
    r,
    s,
    l,
    i,
    u,
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
]), Nt = (e) => pn.get(e.type), ti = (e, t) => pn.set(e, t), v = (e) => `HANDLE-${e}`;
v.SHAPE = "SHAPE";
v.TOP = "TOP";
v.RIGHT = "RIGHT";
v.BOTTOM = "BOTTOM";
v.LEFT = "LEFT";
v.TOP_LEFT = "TOP_LEFT";
v.TOP_RIGHT = "TOP_RIGHT";
v.BOTTOM_RIGHT = "BOTTOM_RIGHT";
v.BOTTOM_LEFT = "BOTTOM_LEFT";
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
  let { shape: s } = t, { editor: l } = t, { transform: a } = t, u = null, h, f = null;
  const m = (p) => (A) => {
    u = p, h = a.elementToImage(A.offsetX, A.offsetY), f = s, A.target.setPointerCapture(A.pointerId), r("grab");
  }, d = (p) => {
    if (u) {
      const [A, b] = a.elementToImage(p.offsetX, p.offsetY), y = [A - h[0], b - h[1]];
      n(3, s = l(f, u, y)), r("change", s);
    }
  }, g = (p) => {
    p.target.releasePointerCapture(p.pointerId), u = null, f = s, r("release");
  };
  return e.$$set = (p) => {
    "shape" in p && n(3, s = p.shape), "editor" in p && n(4, l = p.editor), "transform" in p && n(5, a = p.transform), "$$scope" in p && n(6, i = p.$$scope);
  }, [m, d, g, s, l, a, i, o];
}
class nt extends oe {
  constructor(t) {
    super(), ne(this, t, ii, oi, x, { shape: 3, editor: 4, transform: 5 });
  }
}
const We = (e, t, n) => {
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
    5 && (o = We(r, l)), e.$$.dirty & /*annotation, editorComponent*/
    65 && r && (f == null || f.$set({ shape: r.target.selector })), e.$$.dirty & /*editorComponent, transform*/
    80 && f && f.$set({ transform: u }), e.$$.dirty & /*editorComponent, viewportScale*/
    96 && f && f.$set({ viewportScale: h });
  }, [r, s, l, a, u, h, f];
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
  let { drawingMode: i } = t, { target: r } = t, { tool: s } = t, { transform: l } = t, { viewportScale: a } = t, u;
  return Le(() => {
    const h = r.closest("svg"), f = [], m = (d, g, p) => {
      h.addEventListener(d, g, p), f.push(() => h.removeEventListener(d, g, p));
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
  let { addEventListener: i } = t, { drawingMode: r } = t, { transform: s } = t, l, a, u, h, f, m, d;
  const g = (y) => {
    l = performance.now(), r === "drag" && (n(0, a = s.elementToImage(y.offsetX, y.offsetY)), u = a, n(1, h = a[0]), n(2, f = a[1]), n(3, m = 1), n(4, d = 1));
  }, p = (y) => {
    a && (u = s.elementToImage(y.offsetX, y.offsetY), n(1, h = Math.min(u[0], a[0])), n(2, f = Math.min(u[1], a[1])), n(3, m = Math.abs(u[0] - a[0])), n(4, d = Math.abs(u[1] - a[1])));
  }, A = (y) => {
    const S = performance.now() - l;
    if (r === "click") {
      if (S > 300)
        return;
      y.stopPropagation(), a ? b() : (n(0, a = s.elementToImage(y.offsetX, y.offsetY)), u = a, n(1, h = a[0]), n(2, f = a[1]), n(3, m = 1), n(4, d = 1));
    } else
      a && (S > 300 || m * d > 100 ? (y.stopPropagation(), b()) : (n(0, a = null), u = null));
  }, b = () => {
    if (m * d > 15) {
      const y = {
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
      o("create", y);
    }
    n(0, a = null), u = null;
  };
  return Le(() => {
    i("pointerdown", g), i("pointermove", p), i("pointerup", A, !0);
  }), e.$$set = (y) => {
    "addEventListener" in y && n(5, i = y.addEventListener), "drawingMode" in y && n(6, r = y.drawingMode), "transform" in y && n(7, s = y.transform);
  }, [a, h, f, m, d, i, r, s];
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
  function s(l, a = q) {
    const u = [l, a];
    return o.add(u), o.size === 1 && (n = t(i) || q), l(e), () => {
      o.delete(u), o.size === 0 && n && (n(), n = null);
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
    const s = t.getBoundingClientRect(), { width: l, height: a } = t.viewBox.baseVal, u = Math.max(
      s.width / l,
      s.height / a
    );
    o(u);
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
  let { addEventListener: r } = t, { drawingMode: s } = t, { transform: l } = t, { viewportScale: a = 1 } = t, u, h = [], f = null, m = !1;
  const d = (y) => {
    const { timeStamp: S, offsetX: T, offsetY: M } = y;
    if (u = { timeStamp: S, offsetX: T, offsetY: M }, s === "drag" && h.length === 0) {
      const D = l.elementToImage(y.offsetX, y.offsetY);
      h.push(D), n(1, f = D);
    }
  }, g = (y) => {
    if (h.length > 0 && (n(1, f = l.elementToImage(y.offsetX, y.offsetY)), h.length > 2)) {
      const S = lt(f, h[0]) * a;
      n(2, m = S < pi);
    }
  }, p = (y) => {
    if (s === "click") {
      const S = y.timeStamp - u.timeStamp, T = lt([u.offsetX, u.offsetY], [y.offsetX, y.offsetY]);
      if (S > 300 || T > 15)
        return;
      if (m)
        b();
      else if (h.length === 0) {
        const M = l.elementToImage(y.offsetX, y.offsetY);
        h.push(M), n(1, f = M);
      } else
        h.push(f);
    } else {
      if (h.length === 1 && lt(h[0], f) <= 4) {
        n(0, h = []), n(1, f = null);
        return;
      }
      y.stopImmediatePropagation(), m ? b() : h.push(f);
    }
  }, A = () => {
    const y = [...h, f], S = {
      type: j.POLYGON,
      geometry: { bounds: Me(y), points: y }
    };
    mt(S) > 4 && (n(0, h = []), n(1, f = null), i("create", S));
  }, b = () => {
    const y = {
      type: j.POLYGON,
      geometry: {
        bounds: Me(h),
        points: [...h]
      }
    };
    n(0, h = []), n(1, f = null), i("create", y);
  };
  return Le(() => {
    r("pointerdown", d, !0), r("pointermove", g), r("pointerup", p, !0), r("dblclick", A, !0);
  }), e.$$set = (y) => {
    "addEventListener" in y && n(4, r = y.addEventListener), "drawingMode" in y && n(5, s = y.drawingMode), "transform" in y && n(6, l = y.transform), "viewportScale" in y && n(7, a = y.viewportScale);
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
  let { addEventListener: i } = t, { drawingMode: r } = t, { transform: s } = t, l, a, u, h, f, m, d, g = !1, p = !1, A, b;
  const y = (w) => {
    A = performance.now(), r === "drag" && (n(1, a = s.elementToImage(w.offsetX, w.offsetY)), u = a, n(2, h = a[0]), n(3, f = a[1]), n(4, m = 1), n(5, d = 1));
  }, S = (w) => {
    const E = w || b;
    if (a)
      if (u = s.elementToImage(E.offsetX, E.offsetY), p) {
        const L = 2 * Math.abs(u[0] - a[0]), P = 2 * Math.abs(u[1] - a[1]);
        n(4, m = g ? Math.max(L, P) : L), n(5, d = g ? m : P), n(2, h = Math.min(u[0], a[0] - m / 2)), n(3, f = Math.min(u[1], a[1] - d / 2));
      } else {
        const L = Math.abs(u[0] - a[0]), P = Math.abs(u[1] - a[1]);
        n(4, m = g ? Math.max(L, P) : L), n(5, d = g ? m : P), n(2, h = Math.min(u[0], a[0])), n(3, f = Math.min(u[1], a[1]));
      }
    w && (b = w);
  }, T = (w) => {
    r === "click" && w.stopImmediatePropagation();
    const E = performance.now() - A;
    if (r === "click") {
      if (E > 300)
        return;
      w.stopPropagation(), a ? M() : (n(1, a = s.elementToImage(w.offsetX, w.offsetY)), u = a, n(2, h = a[0]), n(3, f = a[1]), n(4, m = 1), n(5, d = 1));
    } else
      a && (E > 300 || m * d > 100 ? (w.stopPropagation(), M()) : (n(1, a = null), u = null, b = void 0));
  }, M = () => {
    if (m * d > 15) {
      const w = {
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
      o("create", w);
    }
    n(1, a = null), u = null, b = void 0;
  }, D = (w) => {
    w.key === "Shift" && (g = !0, S()), w.key === "Control" && (p = !0, S());
  }, U = (w) => {
    w.key === "Shift" && (g = !1, S()), w.key === "Control" && (p = !1, S());
  };
  Le(() => (document.addEventListener("keyup", U), document.addEventListener("keydown", D), i("pointerdown", y), i("pointermove", S), i("pointerup", T), () => {
    document.removeEventListener("keyup", U), document.removeEventListener("keydown", D);
  }));
  function _(w) {
    Ke[w ? "unshift" : "push"](() => {
      l = w, n(0, l);
    });
  }
  return e.$$set = (w) => {
    "addEventListener" in w && n(6, i = w.addEventListener), "drawingMode" in w && n(7, r = w.drawingMode), "transform" in w && n(8, s = w.transform);
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
    _
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
      t = C("path"), c(t, "class", "a9s-outer"), c(
        t,
        "d",
        /*pathData*/
        e[1]
      );
    },
    m(n, o) {
      I(n, t, o);
    },
    p(n, o) {
      o & /*pathData*/
      2 && c(
        t,
        "d",
        /*pathData*/
        n[1]
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
    e[0] && zt(e)
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
      o[0] ? n ? n.p(o, i) : (n = zt(o), n.c(), n.m(t, null)) : n && (n.d(1), n = null);
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
  let { addEventListener: r } = t, { drawingMode: s } = t, { transform: l } = t, { viewportScale: a = 1 } = t, u = [], h = !1;
  const f = (p) => {
    if (s === "drag" && u.length === 0) {
      n(0, h = !0);
      const A = l.elementToImage(p.offsetX, p.offsetY);
      u.push([...A, p.pressure]);
    }
  }, m = (p) => {
    if (h) {
      const A = l.elementToImage(p.offsetX, p.offsetY);
      u.push([...A, p.pressure]);
    }
  }, d = (p) => {
    h && g();
  }, g = () => {
    const p = {
      type: j.FREEHAND,
      geometry: {
        bounds: Me(u.map((A) => [A[0], A[1]])),
        points: u
      }
    };
    n(0, h = !1), n(6, u = []), n(1, o = null), i("create", p);
  };
  return Le(() => {
    r("pointerdown", f, !0), r("pointermove", m), r("pointerup", d, !0);
  }), e.$$set = (p) => {
    "addEventListener" in p && n(2, r = p.addEventListener), "drawingMode" in p && n(3, s = p.drawingMode), "transform" in p && n(4, l = p.transform), "viewportScale" in p && n(5, a = p.viewportScale);
  }, e.$$.update = () => {
    e.$$.dirty & /*viewportScale*/
    32, e.$$.dirty & /*points*/
    64 && n(1, o = tt(u, et));
  }, [
    h,
    o,
    r,
    s,
    l,
    a,
    u
  ];
}
class Ti extends oe {
  constructor(t) {
    super(), ne(this, t, Si, Ai, x, {
      addEventListener: 2,
      drawingMode: 3,
      transform: 4,
      viewportScale: 5
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
function vi(e, t, n) {
  let o, { annotation: i } = t, { geom: r } = t, { style: s = void 0 } = t;
  const { cx: l, cy: a, rx: u, ry: h } = r;
  return e.$$set = (f) => {
    "annotation" in f && n(0, i = f.annotation), "geom" in f && n(6, r = f.geom), "style" in f && n(7, s = f.style);
  }, e.$$.update = () => {
    e.$$.dirty & /*annotation, style*/
    129 && n(1, o = We(i, s));
  }, [i, o, l, a, u, h, r, s];
}
class Oi extends oe {
  constructor(t) {
    super(), ne(this, t, vi, Li, x, { annotation: 0, geom: 6, style: 7 });
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
    17 && n(1, o = We(i, s));
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
  let o, i, r, s, l, { annotation: a } = t, { geom: u } = t, { style: h = void 0 } = t;
  return e.$$set = (f) => {
    "annotation" in f && n(0, a = f.annotation), "geom" in f && n(6, u = f.geom), "style" in f && n(7, h = f.style);
  }, e.$$.update = () => {
    e.$$.dirty & /*annotation, style*/
    129 && n(5, o = We(a, h)), e.$$.dirty & /*geom*/
    64 && n(4, { x: i, y: r, w: s, h: l } = u, i, (n(3, r), n(6, u)), (n(2, s), n(6, u)), (n(1, l), n(6, u)));
  }, [a, l, s, r, i, o, u, h];
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
      t = C("g"), n = C("path"), c(n, "class", "a9s-inner"), c(
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
  const { points: u } = s;
  return e.$$set = (h) => {
    "annotation" in h && n(0, r = h.annotation), "geom" in h && n(3, s = h.geom), "style" in h && n(4, l = h.style);
  }, e.$$.update = () => {
    e.$$.dirty & /*annotation, style*/
    17 && n(2, o = We(r, l, a));
  }, n(1, i = tt(u, et)), [r, i, o, s, l];
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
      const { x: a, y: u } = Fi(s, e), h = t.getAt(a, u);
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
      ~t && s[t].m(a, u), I(a, o, u), i = !0;
    },
    p(a, u) {
      let h = t;
      t = l(a), t === h ? ~t && s[t].p(a, u) : (n && (ye(), z(s[h], 1, 1, () => {
        s[h] = null;
      }), _e()), ~t ? (n = s[t], n ? n.p(a, u) : (n = s[t] = r[t](a), n.c()), F(n, 1), n.m(o.parentNode, o)) : n = null);
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
      ~t && s[t].m(a, u), I(a, o, u), i = !0;
    },
    p(a, u) {
      let h = t;
      t = l(a), t === h ? ~t && s[t].p(a, u) : (n && (ye(), z(s[h], 1, 1, () => {
        s[h] = null;
      }), _e()), ~t ? (n = s[t], n ? n.p(a, u) : (n = s[t] = r[t](a), n.c()), F(n, 1), n.m(o.parentNode, o)) : n = null);
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
          const u = jt(s, o, a);
          i[a] ? (i[a].p(u, l), F(i[a], 1)) : (i[a] = $t(u), i[a].c(), F(i[a], 1), i[a].m(t.parentNode, t));
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
  const u = (f) => z(a[f], 1, 1, () => {
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
          const g = qt(e, l, d);
          a[d] ? (a[d].p(g, m), F(a[d], 1)) : (a[d] = Zt(g), a[d].c(), F(a[d], 1), a[d].m(n, null));
        }
        for (ye(), d = l.length; d < a.length; d += 1)
          u(d);
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
  let o, i, r, s, l, a, u, h, f, m, d = q, g = () => (d(), d = rn(_, (O) => n(14, m = O)), _);
  e.$$.on_destroy.push(() => d());
  let { drawingEnabled: p } = t, { image: A } = t, { preferredDrawingMode: b } = t, { state: y } = t, { style: S = void 0 } = t, { toolName: T = pt().length > 0 ? pt()[0] : void 0 } = t, { user: M } = t, D, U, _;
  Le(() => g(n(5, _ = mi(A, U))));
  const { selection: w, store: E } = y;
  St(e, w, (O) => n(24, h = O)), St(e, E, (O) => n(13, f = O));
  let L = null, P = null;
  const Y = (O) => {
    E.unobserve(L);
    const V = O.filter(({ editable: N }) => N).map(({ id: N }) => N);
    V.length > 0 ? (n(6, P = V.map((N) => E.getAnnotation(N))), L = (N) => {
      const { updated: le } = N.changes;
      n(6, P = le.map((K) => K.newValue));
    }, E.observe(L, { annotations: V })) : n(6, P = null);
  }, R = (O) => {
    const V = dn(), N = {
      id: V,
      bodies: [],
      target: {
        annotation: V,
        selector: O.detail,
        creator: M,
        created: /* @__PURE__ */ new Date()
      }
    };
    E.addAnnotation(N), w.setSelected(N.id);
  }, X = (O) => (V) => {
    var me;
    const { target: N } = O, le = 10 * 60 * 1e3, K = ((me = N.creator) == null ? void 0 : me.id) !== M.id || !N.created || (/* @__PURE__ */ new Date()).getTime() - N.created.getTime() > le;
    E.updateTarget({
      ...N,
      selector: V.detail,
      created: K ? N.created : /* @__PURE__ */ new Date(),
      updated: K ? /* @__PURE__ */ new Date() : null,
      updatedBy: K ? M : null
    });
  };
  function se(O) {
    Ke[O ? "unshift" : "push"](() => {
      D = O, n(4, D);
    });
  }
  function H(O) {
    Ke[O ? "unshift" : "push"](() => {
      U = O, n(3, U);
    });
  }
  return e.$$set = (O) => {
    "drawingEnabled" in O && n(0, p = O.drawingEnabled), "image" in O && n(19, A = O.image), "preferredDrawingMode" in O && n(20, b = O.preferredDrawingMode), "state" in O && n(21, y = O.state), "style" in O && n(1, S = O.style), "toolName" in O && n(2, T = O.toolName), "user" in O && n(22, M = O.user);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*toolName*/
    4 && n(12, { tool: o, opts: i } = yn(T), o, (n(23, i), n(2, T))), e.$$.dirty[0] & /*opts, preferredDrawingMode*/
    9437184 && n(11, r = (i == null ? void 0 : i.drawingMode) || b), e.$$.dirty[0] & /*svgEl*/
    8 && n(10, s = Vi(U)), e.$$.dirty[0] & /*svgEl*/
    8 && n(9, { onPointerDown: l, onPointerUp: a } = Hi(U, E), l, (n(8, a), n(3, U))), e.$$.dirty[0] & /*$selection*/
    16777216 && n(7, u = (O) => h.selected.find((V) => V.id === O.id && V.editable)), e.$$.dirty[0] & /*$selection*/
    16777216 && Y(h.selected);
  }, [
    p,
    S,
    T,
    U,
    D,
    _,
    P,
    u,
    a,
    l,
    s,
    r,
    o,
    f,
    m,
    w,
    E,
    R,
    X,
    A,
    b,
    y,
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
      var r = o - n + 1, s = t - n + 1, l = Math.log(r), a = 0.5 * Math.exp(2 * l / 3), u = 0.5 * Math.sqrt(l * a * (r - a) / r) * (s - r / 2 < 0 ? -1 : 1), h = Math.max(n, Math.floor(t - s * a / r + u)), f = Math.min(o, Math.floor(t + (r - s) * a / r + u));
      _n(e, t, h, f, i);
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
    if (!Qe(t, n))
      return o;
    const i = this.toBBox, r = [];
    for (; n; ) {
      for (let s = 0; s < n.children.length; s++) {
        const l = n.children[s], a = n.leaf ? i(l) : l;
        Qe(t, a) && (n.leaf ? o.push(l) : ut(t, a) ? this._all(l, o) : r.push(l));
      }
      n = r.pop();
    }
    return o;
  }
  collides(t) {
    let n = this.data;
    if (!Qe(t, n))
      return !1;
    const o = [];
    for (; n; ) {
      for (let i = 0; i < n.children.length; i++) {
        const r = n.children[i], s = n.leaf ? this.toBBox(r) : r;
        if (Qe(t, s)) {
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
    let l, a, u;
    for (; o || r.length; ) {
      if (o || (o = r.pop(), a = r[r.length - 1], l = s.pop(), u = !0), o.leaf) {
        const h = nr(t, o.children, n);
        if (h !== -1)
          return o.children.splice(h, 1), r.push(o), this._condense(r), this;
      }
      !u && !o.leaf && ut(o, i) ? (r.push(o), s.push(l), l = 0, a = o, o = o.children[0]) : a ? (l++, o = a.children[l], u = !1) : o = null;
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
    const a = Math.ceil(r / s), u = a * Math.ceil(Math.sqrt(s));
    en(t, n, o, u, this.compareMinX);
    for (let h = n; h <= o; h += u) {
      const f = Math.min(h + u - 1, o);
      en(t, h, f, a, this.compareMinY);
      for (let m = h; m <= f; m += a) {
        const d = Math.min(m + a - 1, f);
        l.children.push(this._build(t, m, d, i - 1));
      }
    }
    return Re(l, this.toBBox), l;
  }
  _chooseSubtree(t, n, o, i) {
    for (; i.push(n), !(n.leaf || i.length - 1 === o); ) {
      let r = 1 / 0, s = 1 / 0, l;
      for (let a = 0; a < n.children.length; a++) {
        const u = n.children[a], h = ft(u), f = rr(t, u) - h;
        f < s ? (s = f, r = h < r ? h : r, l = u) : f === s && h < r && (r = h, l = u);
      }
      n = l || n.children[0];
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
    const s = this._chooseSplitIndex(o, r, i), l = Ce(o.children.splice(s, o.children.length - s));
    l.height = o.height, l.leaf = o.leaf, Re(o, this.toBBox), Re(l, this.toBBox), n ? t[n - 1].children.push(l) : this._splitRoot(o, l);
  }
  _splitRoot(t, n) {
    this.data = Ce([t, n]), this.data.height = t.height + 1, this.data.leaf = !1, Re(this.data, this.toBBox);
  }
  _chooseSplitIndex(t, n, o) {
    let i, r = 1 / 0, s = 1 / 0;
    for (let l = n; l <= o - n; l++) {
      const a = Fe(t, 0, l, this.toBBox), u = Fe(t, l, o, this.toBBox), h = sr(a, u), f = ft(a) + ft(u);
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
    const r = this.toBBox, s = Fe(t, 0, n, r), l = Fe(t, o - n, o, r);
    let a = Je(s) + Je(l);
    for (let u = n; u < o - n; u++) {
      const h = t.children[u];
      ze(s, t.leaf ? r(h) : h), a += Je(s);
    }
    for (let u = o - n - 1; u >= n; u--) {
      const h = t.children[u];
      ze(l, t.leaf ? r(h) : h), a += Je(l);
    }
    return a;
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
function nr(e, t, n) {
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
function or(e, t) {
  return e.minX - t.minX;
}
function ir(e, t) {
  return e.minY - t.minY;
}
function ft(e) {
  return (e.maxX - e.minX) * (e.maxY - e.minY);
}
function Je(e) {
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
function Qe(e, t) {
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
    const { minX: m, minY: d, maxX: g, maxY: p } = f.selector.geometry.bounds, A = { minX: m, minY: d, maxX: g, maxY: p, target: f };
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
      }).map((p) => p.target).filter((p) => p.selector.type === j.RECTANGLE || Bn(p.selector, f, m));
      if (g.length > 0)
        return g.sort((p, A) => mt(p.selector) - mt(A.selector)), g[0];
    },
    getIntersecting: (f, m, d, g) => e.search({
      minX: f,
      minY: m,
      maxX: f + d,
      maxY: m + g
    }).map((p) => p.target),
    insert: i,
    remove: r,
    set: (f, m = !0) => {
      m && o();
      const d = f.map((g) => {
        const { minX: p, minY: A, maxX: b, maxY: y } = g.selector.geometry.bounds;
        return { minX: p, minY: A, maxX: b, maxY: y, target: g };
      });
      d.forEach((g) => t.set(g.target.annotation, g)), e.load(d);
    },
    size: () => e.all().length,
    update: (f, m) => {
      r(f), i(m);
    }
  };
}, ar = (e) => {
  const t = bo(), n = lr(), o = co(t, e.pointerSelectAction), i = ao(t), r = Mo();
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
      const s = Math.round(r * t.width / 10), l = Math.round(i * t.height / 10), a = n.getImageData(s, l, 1, 1).data, u = (0.299 * a[0] + 0.587 * a[1] + 0.114 * a[2]) / 255;
      o += u;
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
  ), u = document.createElement("DIV");
  u.style.position = "relative", u.style.display = "inline-block", n.style.display = "block", n.parentNode.insertBefore(u, n), u.appendChild(n);
  const h = hr(l);
  let f = Do();
  tn(n, u, o.theme);
  const m = new xi({
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
  m.$on("click", (_) => {
    const { originalEvent: w, annotation: E } = _.detail;
    E ? r.clickSelect(E.id, w) : r.isEmpty() || r.clear();
  });
  const d = Oo(i, l, o.adapter), g = () => {
    m.$destroy(), u.parentNode.insertBefore(n, u), u.parentNode.removeChild(u), h.destroy(), l.destroy();
  }, p = () => f, A = (_, w, E) => Mi(_, w, E), b = (_, w) => ti(_, w), y = (_) => {
    if (!yn(_))
      throw `No drawing tool named ${_}`;
    m.$set({ toolName: _ });
  }, S = (_) => m.$set({ drawingEnabled: _ }), T = (_) => {
    console.warn("Filter not implemented yet");
  }, M = (_) => m.$set({ style: _ }), D = (_) => tn(n, u, _), U = (_) => {
    f = _, m.$set({ user: _ });
  };
  return {
    ...d,
    destroy: g,
    getUser: p,
    listDrawingTools: pt,
    on: a.on,
    off: a.off,
    registerDrawingTool: A,
    registerShapeEditor: b,
    setDrawingEnabled: S,
    setDrawingTool: y,
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
  v as Handle,
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
  $e as registerShapeUtil,
  Mi as registerTool,
  fr as sampleBrightness,
  Nn as serializeFragmentSelector,
  no as serializeSVGSelector,
  No as serializeW3CImageAnnotation,
  tn as setTheme
};
//# sourceMappingURL=annotorious.es.js.map
