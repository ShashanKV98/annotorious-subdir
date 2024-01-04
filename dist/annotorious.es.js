function q() {
}
function Ln(e, t) {
  for (const n in t)
    e[n] = t[n];
  return e;
}
function cn(e) {
  return e();
}
function kt() {
  return /* @__PURE__ */ Object.create(null);
}
function pe(e) {
  e.forEach(cn);
}
function K(e) {
  return typeof e == "function";
}
function Z(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function kn(e) {
  return Object.keys(e).length === 0;
}
function un(e, ...t) {
  if (e == null)
    return q;
  const n = e.subscribe(...t);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function vt(e, t, n) {
  e.$$.on_destroy.push(un(t, n));
}
function vn(e, t, n, o) {
  if (e) {
    const i = dn(e, t, n, o);
    return e[0](i);
  }
}
function dn(e, t, n, o) {
  return e[1] && o ? Ln(n.ctx.slice(), e[1](o(t))) : n.ctx;
}
function On(e, t, n, o) {
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
function Pn(e, t, n, o, i, r) {
  if (i) {
    const s = dn(t, n, o, r);
    e.p(s, i);
  }
}
function In(e) {
  if (e.ctx.length > 32) {
    const t = [], n = e.ctx.length / 32;
    for (let o = 0; o < n; o++)
      t[o] = -1;
    return t;
  }
  return -1;
}
function re(e, t) {
  e.appendChild(t);
}
function O(e, t, n) {
  e.insertBefore(t, n || null);
}
function v(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function At(e, t) {
  for (let n = 0; n < e.length; n += 1)
    e[n] && e[n].d(t);
}
function I(e) {
  return document.createElementNS("http://www.w3.org/2000/svg", e);
}
function hn(e) {
  return document.createTextNode(e);
}
function Q() {
  return hn(" ");
}
function we() {
  return hn("");
}
function W(e, t, n, o) {
  return e.addEventListener(t, n, o), () => e.removeEventListener(t, n, o);
}
function f(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function Dn(e) {
  return Array.from(e.childNodes);
}
function Ot(e, t, n) {
  e.classList[n ? "add" : "remove"](t);
}
function Bn(e, t, { bubbles: n = !1, cancelable: o = !1 } = {}) {
  const i = document.createEvent("CustomEvent");
  return i.initCustomEvent(e, n, o, t), i;
}
let We;
function Ke(e) {
  We = e;
}
function mn() {
  if (!We)
    throw new Error("Function called outside component initialization");
  return We;
}
function Se(e) {
  mn().$$.on_mount.push(e);
}
function be() {
  const e = mn();
  return (t, n, { cancelable: o = !1 } = {}) => {
    const i = e.$$.callbacks[t];
    if (i) {
      const r = Bn(t, n, { cancelable: o });
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
const Ne = [], Ze = [];
let Ue = [];
const Pt = [], Yn = /* @__PURE__ */ Promise.resolve();
let pt = !1;
function Xn() {
  pt || (pt = !0, Yn.then(gn));
}
function yt(e) {
  Ue.push(e);
}
const at = /* @__PURE__ */ new Set();
let De = 0;
function gn() {
  if (De !== 0)
    return;
  const e = We;
  do {
    try {
      for (; De < Ne.length; ) {
        const t = Ne[De];
        De++, Ke(t), Rn(t.$$);
      }
    } catch (t) {
      throw Ne.length = 0, De = 0, t;
    }
    for (Ke(null), Ne.length = 0, De = 0; Ze.length; )
      Ze.pop()();
    for (let t = 0; t < Ue.length; t += 1) {
      const n = Ue[t];
      at.has(n) || (at.add(n), n());
    }
    Ue.length = 0;
  } while (Ne.length);
  for (; Pt.length; )
    Pt.pop()();
  pt = !1, at.clear(), Ke(e);
}
function Rn(e) {
  if (e.fragment !== null) {
    e.update(), pe(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(yt);
  }
}
function Nn(e) {
  const t = [], n = [];
  Ue.forEach((o) => e.indexOf(o) === -1 ? t.push(o) : n.push(o)), n.forEach((o) => o()), Ue = t;
}
const st = /* @__PURE__ */ new Set();
let ve;
function ye() {
  ve = {
    r: 0,
    c: [],
    p: ve
    // parent group
  };
}
function _e() {
  ve.r || pe(ve.c), ve = ve.p;
}
function V(e, t) {
  e && e.i && (st.delete(e), e.i(t));
}
function j(e, t, n, o) {
  if (e && e.o) {
    if (st.has(e))
      return;
    st.add(e), ve.c.push(() => {
      st.delete(e), o && (n && e.d(1), o());
    }), e.o(t);
  } else
    o && o();
}
function ue(e) {
  e && e.c();
}
function le(e, t, n, o) {
  const { fragment: i, after_update: r } = e.$$;
  i && i.m(t, n), o || yt(() => {
    const s = e.$$.on_mount.map(cn).filter(K);
    e.$$.on_destroy ? e.$$.on_destroy.push(...s) : pe(s), e.$$.on_mount = [];
  }), r.forEach(yt);
}
function ae(e, t) {
  const n = e.$$;
  n.fragment !== null && (Nn(n.after_update), pe(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Cn(e, t) {
  e.$$.dirty[0] === -1 && (Ne.push(e), Xn(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function x(e, t, n, o, i, r, s, a = [-1]) {
  const l = We;
  Ke(e);
  const u = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: r,
    update: q,
    not_equal: i,
    bound: kt(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (l ? l.$$.context : [])),
    // everything else
    callbacks: kt(),
    dirty: a,
    skip_bound: !1,
    root: t.target || l.$$.root
  };
  s && s(u.root);
  let h = !1;
  if (u.ctx = n ? n(e, t.props || {}, (c, m, ...d) => {
    const g = d.length ? d[0] : m;
    return u.ctx && i(u.ctx[c], u.ctx[c] = g) && (!u.skip_bound && u.bound[c] && u.bound[c](g), h && Cn(e, c)), m;
  }) : [], u.update(), h = !0, pe(u.before_update), u.fragment = o ? o(u.ctx) : !1, t.target) {
    if (t.hydrate) {
      const c = Dn(t.target);
      u.fragment && u.fragment.l(c), c.forEach(v);
    } else
      u.fragment && u.fragment.c();
    t.intro && V(e.$$.fragment), le(e, t.target, t.anchor, t.customElement), gn();
  }
  Ke(l);
}
class $ {
  $destroy() {
    ae(this, 1), this.$destroy = q;
  }
  $on(t, n) {
    if (!K(n))
      return q;
    const o = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return o.push(n), () => {
      const i = o.indexOf(n);
      i !== -1 && o.splice(i, 1);
    };
  }
  $set(t) {
    this.$$set && !kn(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
var z = /* @__PURE__ */ ((e) => (e.ELLIPSE = "ELLIPSE", e.POLYGON = "POLYGON", e.RECTANGLE = "RECTANGLE", e.FREEHAND = "FREEHAND", e.LINE = "LINE", e))(z || {});
const Mt = {}, xe = (e, t) => Mt[e] = t, _t = (e) => Mt[e.type].area(e), Un = (e, t, n) => Mt[e.type].intersects(e, t, n), Pe = (e) => {
  let t = 1 / 0, n = 1 / 0, o = -1 / 0, i = -1 / 0;
  return e.forEach(([r, s]) => {
    t = Math.min(t, r), n = Math.min(n, s), o = Math.max(o, r), i = Math.max(i, s);
  }), { minX: t, minY: n, maxX: o, maxY: i };
}, Hn = {
  area: (e) => Math.PI * e.geometry.rx * e.geometry.ry,
  intersects: (e, t, n) => {
    const { cx: o, cy: i, rx: r, ry: s } = e.geometry, a = 0, l = Math.cos(a), u = Math.sin(a), h = t - o, c = n - i, m = l * h + u * c, d = u * h - l * c;
    return m * m / (r * r) + d * d / (s * s) <= 1;
  }
};
xe(z.ELLIPSE, Hn);
const Fn = {
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
xe(z.POLYGON, Fn);
const Gn = {
  area: (e) => e.geometry.w * e.geometry.h,
  intersects: (e, t, n) => t >= e.geometry.x && t <= e.geometry.x + e.geometry.w && n >= e.geometry.y && n <= e.geometry.y + e.geometry.h
};
xe(z.RECTANGLE, Gn);
const Vn = {
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
xe(z.FREEHAND, Vn);
const zn = {
  area: (e) => 0,
  intersects: (e, t, n) => {
    const o = e.geometry.x1, i = e.geometry.x2, r = e.geometry.y1, s = e.geometry.y2;
    var a = Math.sqrt(Math.pow(t - o, 2) + Math.pow(n - r, 2)), l = Math.sqrt(Math.pow(t - i, 2) + Math.pow(n - s, 2)), u = Math.sqrt(Math.pow(i - o, 2) + Math.pow(s - r, 2)), h = a + l;
    return Math.abs(h - u) <= 0.1;
  }
};
xe(z.LINE, zn);
const jn = (e, t = !1) => {
  const n = typeof e == "string" ? e : e.value, o = /^(xywh)=(pixel|percent)?:?(.+?),(.+?),(.+?),(.+)*/g, i = [...n.matchAll(o)][0], [r, s, a, l, u, h, c] = i;
  if (s !== "xywh")
    throw new Error("Unsupported MediaFragment: " + n);
  if (a && a !== "pixel")
    throw new Error(`Unsupported MediaFragment unit: ${a}`);
  const [m, d, g, A] = [l, u, h, c].map(parseFloat);
  return {
    type: z.RECTANGLE,
    geometry: {
      x: m,
      y: d,
      w: g,
      h: A,
      bounds: {
        minX: m,
        minY: t ? d - A : d,
        maxX: m + g,
        maxY: t ? d : d + A
      }
    }
  };
}, qn = (e) => {
  const { x: t, y: n, w: o, h: i } = e;
  return {
    type: "FragmentSelector",
    conformsTo: "http://www.w3.org/TR/media-frags/",
    value: `xywh=pixel:${t},${n},${o},${i}`
  };
}, pn = "http://www.w3.org/2000/svg", It = (e) => {
  const t = (o) => {
    Array.from(o.attributes).forEach((i) => {
      i.name.startsWith("on") && o.removeAttribute(i.name);
    });
  }, n = e.getElementsByTagName("script");
  return Array.from(n).reverse().forEach((o) => o.parentNode.removeChild(o)), Array.from(e.querySelectorAll("*")).forEach(t), e;
}, Kn = (e) => {
  const o = new XMLSerializer().serializeToString(e.documentElement).replace("<svg>", `<svg xmlns="${pn}">`);
  return new DOMParser().parseFromString(o, "image/svg+xml").documentElement;
};
function Dt(e, t, n, o = (i) => i) {
  return e * o(0.5 - t * (0.5 - n));
}
function Wn(e) {
  return [-e[0], -e[1]];
}
function ge(e, t) {
  return [e[0] + t[0], e[1] + t[1]];
}
function ce(e, t) {
  return [e[0] - t[0], e[1] - t[1]];
}
function me(e, t) {
  return [e[0] * t, e[1] * t];
}
function Zn(e, t) {
  return [e[0] / t, e[1] / t];
}
function Fe(e) {
  return [e[1], -e[0]];
}
function Bt(e, t) {
  return e[0] * t[0] + e[1] * t[1];
}
function Jn(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}
function Qn(e) {
  return Math.hypot(e[0], e[1]);
}
function xn(e) {
  return e[0] * e[0] + e[1] * e[1];
}
function Yt(e, t) {
  return xn(ce(e, t));
}
function yn(e) {
  return Zn(e, Qn(e));
}
function $n(e, t) {
  return Math.hypot(e[1] - t[1], e[0] - t[0]);
}
function Ge(e, t, n) {
  let o = Math.sin(n), i = Math.cos(n), r = e[0] - t[0], s = e[1] - t[1], a = r * i - s * o, l = r * o + s * i;
  return [a + t[0], l + t[1]];
}
function wt(e, t, n) {
  return ge(e, me(ce(t, e), n));
}
function Xt(e, t, n) {
  return ge(e, me(t, n));
}
var { min: Be, PI: eo } = Math, Rt = 0.275, Ve = eo + 1e-4;
function to(e, t = {}) {
  let { size: n = 16, smoothing: o = 0.5, thinning: i = 0.5, simulatePressure: r = !0, easing: s = (G) => G, start: a = {}, end: l = {}, last: u = !1 } = t, { cap: h = !0, easing: c = (G) => G * (2 - G) } = a, { cap: m = !0, easing: d = (G) => --G * G * G + 1 } = l;
  if (e.length === 0 || n <= 0)
    return [];
  let g = e[e.length - 1].runningLength, A = a.taper === !1 ? 0 : a.taper === !0 ? Math.max(n, g) : a.taper, M = l.taper === !1 ? 0 : l.taper === !0 ? Math.max(n, g) : l.taper, w = Math.pow(n * o, 2), p = [], _ = [], S = e.slice(0, 10).reduce((G, P) => {
    let H = P.pressure;
    if (r) {
      let U = Be(1, P.distance / n), fe = Be(1, 1 - U);
      H = Be(1, G + (fe - G) * (U * Rt));
    }
    return (G + H) / 2;
  }, e[0].pressure), T = Dt(n, i, e[e.length - 1].pressure, s), B, R = e[0].vector, b = e[0].point, y = b, E = b, k = y, D = !1;
  for (let G = 0; G < e.length; G++) {
    let { pressure: P } = e[G], { point: H, vector: U, distance: fe, runningLength: ne } = e[G];
    if (G < e.length - 1 && g - ne < 3)
      continue;
    if (i) {
      if (r) {
        let se = Be(1, fe / n), Ae = Be(1, 1 - se);
        P = Be(1, S + (Ae - S) * (se * Rt));
      }
      T = Dt(n, i, P, s);
    } else
      T = n / 2;
    B === void 0 && (B = T);
    let te = ne < A ? c(ne / A) : 1, Ie = g - ne < M ? d((g - ne) / M) : 1;
    T = Math.max(0.01, T * Math.min(te, Ie));
    let Le = (G < e.length - 1 ? e[G + 1] : e[G]).vector, Ee = G < e.length - 1 ? Bt(U, Le) : 1, He = Bt(U, R) < 0 && !D, ie = Ee !== null && Ee < 0;
    if (He || ie) {
      let se = me(Fe(R), T);
      for (let Ae = 1 / 13, Me = 0; Me <= 1; Me += Ae)
        E = Ge(ce(H, se), H, Ve * Me), p.push(E), k = Ge(ge(H, se), H, Ve * -Me), _.push(k);
      b = E, y = k, ie && (D = !0);
      continue;
    }
    if (D = !1, G === e.length - 1) {
      let se = me(Fe(U), T);
      p.push(ce(H, se)), _.push(ge(H, se));
      continue;
    }
    let ke = me(Fe(wt(Le, U, Ee)), T);
    E = ce(H, ke), (G <= 1 || Yt(b, E) > w) && (p.push(E), b = E), k = ge(H, ke), (G <= 1 || Yt(y, k) > w) && (_.push(k), y = k), S = P, R = U;
  }
  let X = e[0].point.slice(0, 2), N = e.length > 1 ? e[e.length - 1].point.slice(0, 2) : ge(e[0].point, [1, 1]), C = [], de = [];
  if (e.length === 1) {
    if (!(A || M) || u) {
      let G = Xt(X, yn(Fe(ce(X, N))), -(B || T)), P = [];
      for (let H = 1 / 13, U = H; U <= 1; U += H)
        P.push(Ge(G, X, Ve * 2 * U));
      return P;
    }
  } else {
    if (!(A || M && e.length === 1))
      if (h)
        for (let P = 1 / 13, H = P; H <= 1; H += P) {
          let U = Ge(_[0], X, Ve * H);
          C.push(U);
        }
      else {
        let P = ce(p[0], _[0]), H = me(P, 0.5), U = me(P, 0.51);
        C.push(ce(X, H), ce(X, U), ge(X, U), ge(X, H));
      }
    let G = Fe(Wn(e[e.length - 1].vector));
    if (M || A && e.length === 1)
      de.push(N);
    else if (m) {
      let P = Xt(N, G, T);
      for (let H = 1 / 29, U = H; U < 1; U += H)
        de.push(Ge(P, N, Ve * 3 * U));
    } else
      de.push(ge(N, me(G, T)), ge(N, me(G, T * 0.99)), ce(N, me(G, T * 0.99)), ce(N, me(G, T)));
  }
  return p.concat(de, _.reverse(), C);
}
function no(e, t = {}) {
  var n;
  let { streamline: o = 0.5, size: i = 16, last: r = !1 } = t;
  if (e.length === 0)
    return [];
  let s = 0.15 + (1 - o) * 0.85, a = Array.isArray(e[0]) ? e : e.map(({ x: d, y: g, pressure: A = 0.5 }) => [d, g, A]);
  if (a.length === 2) {
    let d = a[1];
    a = a.slice(0, -1);
    for (let g = 1; g < 5; g++)
      a.push(wt(a[0], d, g / 4));
  }
  a.length === 1 && (a = [...a, [...ge(a[0], [1, 1]), ...a[0].slice(2)]]);
  let l = [{ point: [a[0][0], a[0][1]], pressure: a[0][2] >= 0 ? a[0][2] : 0.25, vector: [1, 1], distance: 0, runningLength: 0 }], u = !1, h = 0, c = l[0], m = a.length - 1;
  for (let d = 1; d < a.length; d++) {
    let g = r && d === m ? a[d].slice(0, 2) : wt(c.point, a[d], s);
    if (Jn(c.point, g))
      continue;
    let A = $n(g, c.point);
    if (h += A, d < m && !u) {
      if (h < i)
        continue;
      u = !0;
    }
    c = { point: g, pressure: a[d][2] >= 0 ? a[d][2] : 0.5, vector: yn(ce(c.point, g)), distance: A, runningLength: h }, l.push(c);
  }
  return l[0].vector = ((n = l[1]) == null ? void 0 : n.vector) || [0, 0], l;
}
function oo(e, t = {}) {
  return to(no(e, t), t);
}
function io(e, t) {
  var n = e[0] - t[0], o = e[1] - t[1];
  return n * n + o * o;
}
function ro(e, t, n) {
  var o = t[0], i = t[1], r = n[0] - o, s = n[1] - i;
  if (r !== 0 || s !== 0) {
    var a = ((e[0] - o) * r + (e[1] - i) * s) / (r * r + s * s);
    a > 1 ? (o = n[0], i = n[1]) : a > 0 && (o += r * a, i += s * a);
  }
  return r = e[0] - o, s = e[1] - i, r * r + s * s;
}
function so(e, t) {
  for (var n = e[0], o = [n], i, r = 1, s = e.length; r < s; r++)
    i = e[r], io(i, n) > t && (o.push(i), n = i);
  return n !== i && o.push(i), o;
}
function bt(e, t, n, o, i) {
  for (var r = o, s, a = t + 1; a < n; a++) {
    var l = ro(e[a], e[t], e[n]);
    l > r && (s = a, r = l);
  }
  r > o && (s - t > 1 && bt(e, t, s, o, i), i.push(e[s]), n - s > 1 && bt(e, s, n, o, i));
}
function lo(e, t) {
  var n = e.length - 1, o = [e[0]];
  return bt(e, 0, n, t, o), o.push(e[n]), o;
}
function ao(e, t, n) {
  if (e.length <= 2)
    return e;
  var o = t !== void 0 ? t * t : 1;
  return e = n ? e : so(e, o), e = lo(e, o), e;
}
const Je = {
  size: 2,
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
function fo(e) {
  if (!e.length)
    return "";
  const t = e.reduce(
    (n, [o, i], r, s) => {
      const [a, l] = s[(r + 1) % s.length];
      return n.push(o, i, a, l), n;
    },
    ["M", ...e[0], "L"]
  );
  return t.push("Z"), t.join(" ");
}
function Qe(e, t, n = !1) {
  const o = oo(e, t);
  return fo(
    n ? ao(o, 0.2) : o
  );
}
const _n = (e) => {
  const n = new DOMParser().parseFromString(e, "image/svg+xml"), o = n.lookupPrefix(pn), i = n.lookupNamespaceURI(null);
  return o || i ? It(n).firstChild : It(Kn(n)).firstChild;
}, co = (e) => {
  const [t, n, o] = e.match(/(<path d=["|'])([^("|')]*)/) || [];
  if (!o)
    return;
  const i = /([MQZT])([^MQZT]*)/g, s = Array.from(o.matchAll(i)).map((a) => (a[1], a[2].trim().split(/\s+/).map(parseFloat)));
  return {
    type: z.FREEHAND,
    geometry: {
      points: s,
      bounds: Pe(s)
    }
  };
}, uo = (e) => {
  const [t, n, o] = e.match(/(<polygon points=["|'])([^("|')]*)/) || [];
  if (!o)
    return;
  const i = o.split(" ").map((r) => r.split(",").map(parseFloat));
  return {
    type: z.POLYGON,
    geometry: {
      points: i,
      bounds: Pe(i)
    }
  };
}, ho = (e) => {
  const t = _n(e), n = parseFloat(t.getAttribute("cx")), o = parseFloat(t.getAttribute("cy")), i = parseFloat(t.getAttribute("rx")), r = parseFloat(t.getAttribute("ry")), s = {
    minX: n - i,
    minY: o - r,
    maxX: n + i,
    maxY: o + r
  };
  return {
    type: z.ELLIPSE,
    geometry: {
      cx: n,
      cy: o,
      rx: i,
      ry: r,
      bounds: s
    }
  };
}, mo = (e) => {
  const t = _n(e), n = parseFloat(t.getAttribute("x1")), o = parseFloat(t.getAttribute("x2")), i = parseFloat(t.getAttribute("y1")), r = parseFloat(t.getAttribute("y2")), s = {
    minX: Math.min(n, o),
    minY: Math.min(i, r),
    maxX: Math.max(n, o),
    maxY: Math.max(i, r)
  };
  return {
    type: z.LINE,
    geometry: {
      x1: n,
      x2: o,
      y1: i,
      y2: r,
      bounds: s
    }
  };
}, go = (e) => {
  const t = typeof e == "string" ? e : e.value;
  if (t.includes("<polygon points="))
    return uo(t);
  if (t.includes("<path d="))
    return co(t);
  if (t.includes("<ellipse "))
    return ho(t);
  if (t.includes("<line "))
    return mo(t);
}, po = (e) => {
  let t;
  if (e.type === z.POLYGON) {
    const n = e.geometry, { points: o } = n;
    t = `<svg><polygon points="${o.map((i) => i.join(",")).join(" ")}" /></svg>`;
  } else if (e.type === z.FREEHAND) {
    const n = e.geometry;
    t = `<svg><path d="${Qe(n.points, Je)}"/></svg>`;
  } else if (e.type === z.ELLIPSE) {
    const n = e.geometry;
    t = `<svg><ellipse cx="${n.cx}" cy="${n.cy}" rx="${n.rx}" ry="${n.ry}" /></svg>`;
  } else if (e.type === z.LINE) {
    const n = e.geometry;
    t = `<svg><line x1="${n.x1}" x2="${n.x2}" y1="${n.y1}" y2="${n.y2}" /></svg>`;
  }
  if (t)
    return { type: "SvgSelector", value: t };
  throw `Unsupported shape type: ${e.type}`;
};
let ot;
const yo = new Uint8Array(16);
function _o() {
  if (!ot && (ot = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !ot))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return ot(yo);
}
const ee = [];
for (let e = 0; e < 256; ++e)
  ee.push((e + 256).toString(16).slice(1));
function wo(e, t = 0) {
  return ee[e[t + 0]] + ee[e[t + 1]] + ee[e[t + 2]] + ee[e[t + 3]] + "-" + ee[e[t + 4]] + ee[e[t + 5]] + "-" + ee[e[t + 6]] + ee[e[t + 7]] + "-" + ee[e[t + 8]] + ee[e[t + 9]] + "-" + ee[e[t + 10]] + ee[e[t + 11]] + ee[e[t + 12]] + ee[e[t + 13]] + ee[e[t + 14]] + ee[e[t + 15]];
}
const bo = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Nt = {
  randomUUID: bo
};
function wn(e, t, n) {
  if (Nt.randomUUID && !t && !e)
    return Nt.randomUUID();
  e = e || {};
  const o = e.random || (e.rng || _o)();
  if (o[6] = o[6] & 15 | 64, o[8] = o[8] & 63 | 128, t) {
    n = n || 0;
    for (let i = 0; i < 16; ++i)
      t[n + i] = o[i];
    return t;
  }
  return wo(o);
}
var Ct = Object.prototype.hasOwnProperty;
function Oe(e, t) {
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
        for (; o-- && Oe(e[o], t[o]); )
          ;
      return o === -1;
    }
    if (!n || typeof e == "object") {
      o = 0;
      for (n in e)
        if (Ct.call(e, n) && ++o && !Ct.call(t, n) || !(n in t) || !Oe(e[n], t[n]))
          return !1;
      return Object.keys(t).length === o;
    }
  }
  return e !== e && t !== t;
}
function ft() {
}
function Eo(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
const Ye = [];
function St(e, t = ft) {
  let n;
  const o = /* @__PURE__ */ new Set();
  function i(a) {
    if (Eo(e, a) && (e = a, n)) {
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
  function s(a, l = ft) {
    const u = [a, l];
    return o.add(u), o.size === 1 && (n = t(i) || ft), a(e), () => {
      o.delete(u), o.size === 0 && n && (n(), n = null);
    };
  }
  return { set: i, update: r, subscribe: s };
}
const Ao = (e) => {
  const { subscribe: t, set: n } = St(null);
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
var bn = /* @__PURE__ */ ((e) => (e.EDIT = "EDIT", e.SELECT = "SELECT", e.NONE = "NONE", e))(bn || {});
const ct = { selected: [] }, Mo = (e, t = "EDIT") => {
  const { subscribe: n, set: o } = St(ct);
  let i = ct;
  n((c) => i = c);
  const r = () => o(ct), s = () => {
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
      const g = So(d, t);
      o(g === "EDIT" ? { selected: [{ id: c, editable: !0 }], pointerEvent: m } : g === "SELECT" ? { selected: [{ id: c }], pointerEvent: m } : { selected: [], pointerEvent: m });
    } else
      console.warn("Invalid selection: " + c);
  }, u = (c, m = !0) => {
    const d = Array.isArray(c) ? c : [c], g = d.map((A) => e.getAnnotation(A)).filter((A) => A);
    o({ selected: g.map(({ id: A }) => ({ id: A, editable: m })) }), g.length !== d.length && console.warn("Invalid selection", c);
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
}, So = (e, t) => typeof t == "function" ? t(e) || "EDIT" : t || "EDIT", To = [];
for (let e = 0; e < 256; ++e)
  To.push((e + 256).toString(16).slice(1));
typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const Lo = (e, t) => {
  const n = new Set(e.bodies.map((o) => o.id));
  return t.bodies.filter((o) => !n.has(o.id));
}, ko = (e, t) => {
  const n = new Set(t.bodies.map((o) => o.id));
  return e.bodies.filter((o) => !n.has(o.id));
}, vo = (e, t) => t.bodies.map((n) => {
  const o = e.bodies.find((i) => i.id === n.id);
  return { newBody: n, oldBody: o && !Oe(o, n) ? o : void 0 };
}).filter(({ oldBody: n }) => n), Oo = (e, t) => !Oe(e.target, t.target), En = (e, t) => {
  const n = Lo(e, t), o = ko(e, t), i = vo(e, t);
  return {
    oldValue: e,
    newValue: t,
    bodiesCreated: n.length > 0 ? n : void 0,
    bodiesDeleted: o.length > 0 ? o : void 0,
    bodiesUpdated: i.length > 0 ? i : void 0,
    targetUpdated: Oo(e, t) ? { oldTarget: e.target, newTarget: t.target } : void 0
  };
};
var J = /* @__PURE__ */ ((e) => (e.LOCAL = "LOCAL", e.REMOTE = "REMOTE", e))(J || {});
const Po = (e, t) => {
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
}, Io = (e, t) => {
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
        const g = t.updated.find((A) => A.oldValue.id === d.id).newValue;
        return En(m, g);
      } else
        return c;
    }),
    ...(t.updated || []).filter(({ oldValue: c }) => !a.has(c.id))
  ];
  return { created: l, deleted: u, updated: h };
}, Do = (e) => e.id !== void 0, Bo = () => {
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
    n.forEach((k) => {
      Po(k, E) && k.onChange(E);
    });
  }, s = (b, y = J.LOCAL) => {
    if (e.get(b.id))
      throw Error(`Cannot add annotation ${b.id} - exists already`);
    e.set(b.id, b), b.bodies.forEach((E) => t.set(E.id, b.id)), r(y, { created: [b] });
  }, a = (b, y) => {
    const E = typeof b == "string" ? y : b, k = typeof b == "string" ? b : b.id, D = e.get(k);
    if (D) {
      const X = En(D, E);
      return k === E.id ? e.set(k, E) : (e.delete(k), e.set(E.id, E)), D.bodies.forEach((N) => t.delete(N.id)), E.bodies.forEach((N) => t.set(N.id, E.id)), X;
    } else
      console.warn(`Cannot update annotation ${k} - does not exist`);
  }, l = (b, y = J.LOCAL, E = J.LOCAL) => {
    const k = Do(y) ? E : y, D = a(b, y);
    D && r(k, { updated: [D] });
  }, u = (b, y = J.LOCAL) => {
    const E = b.reduce((k, D) => {
      const X = a(D);
      return X ? [...k, X] : k;
    }, []);
    E.length > 0 && r(y, { updated: E });
  }, h = (b, y = J.LOCAL) => {
    const E = e.get(b.annotation);
    if (E) {
      const k = {
        ...E,
        bodies: [...E.bodies, b]
      };
      e.set(E.id, k), t.set(b.id, k.id), r(y, { updated: [{
        oldValue: E,
        newValue: k,
        bodiesCreated: [b]
      }] });
    } else
      console.warn(`Attempt to add body to missing annotation: ${b.annotation}`);
  }, c = () => [...e.values()], m = (b = J.LOCAL) => {
    const y = [...e.values()];
    e.clear(), t.clear(), r(b, { deleted: y });
  }, d = (b, y = !0, E = J.LOCAL) => {
    if (y) {
      const k = [...e.values()];
      e.clear(), t.clear(), b.forEach((D) => {
        e.set(D.id, D), D.bodies.forEach((X) => t.set(X.id, D.id));
      }), r(E, { created: b, deleted: k });
    } else {
      const k = b.reduce((D, X) => {
        const N = e.get(X.id);
        return N ? [...D, N] : D;
      }, []);
      if (k.length > 0)
        throw Error(`Bulk insert would overwrite the following annotations: ${k.map((D) => D.id).join(", ")}`);
      b.forEach((D) => {
        e.set(D.id, D), D.bodies.forEach((X) => t.set(X.id, D.id));
      }), r(E, { created: b });
    }
  }, g = (b) => {
    const y = typeof b == "string" ? b : b.id, E = e.get(y);
    if (E)
      return e.delete(y), E.bodies.forEach((k) => t.delete(k.id)), E;
    console.warn(`Attempt to delete missing annotation: ${y}`);
  }, A = (b, y = J.LOCAL) => {
    const E = g(b);
    E && r(y, { deleted: [E] });
  }, M = (b, y = J.LOCAL) => {
    const E = b.reduce((k, D) => {
      const X = g(D);
      return X ? [...k, X] : k;
    }, []);
    E.length > 0 && r(y, { deleted: E });
  }, w = (b, y = J.LOCAL) => {
    const E = e.get(b.annotation);
    if (E) {
      const k = E.bodies.find((D) => D.id === b.id);
      if (k) {
        t.delete(k.id);
        const D = {
          ...E,
          bodies: E.bodies.filter((X) => X.id !== b.id)
        };
        e.set(E.id, D), r(y, { updated: [{
          oldValue: E,
          newValue: D,
          bodiesDeleted: [k]
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
      const E = p(y).bodies.find((k) => k.id === b);
      if (E)
        return E;
      console.error(`Store integrity error: body ${b} in index, but not in annotation`);
    } else
      console.warn(`Attempt to retrieve missing body: ${b}`);
  }, S = (b, y) => {
    if (b.annotation !== y.annotation)
      throw "Annotation integrity violation: annotation ID must be the same when updating bodies";
    const E = e.get(b.annotation);
    if (E) {
      const k = E.bodies.find((X) => X.id === b.id), D = {
        ...E,
        bodies: E.bodies.map((X) => X.id === k.id ? y : X)
      };
      return e.set(E.id, D), k.id !== y.id && (t.delete(k.id), t.set(y.id, D.id)), {
        oldValue: E,
        newValue: D,
        bodiesUpdated: [{ oldBody: k, newBody: y }]
      };
    } else
      console.warn(`Attempt to add body to missing annotation ${b.annotation}`);
  }, T = (b, y, E = J.LOCAL) => {
    const k = S(b, y);
    r(E, { updated: [k] });
  }, B = (b, y = J.LOCAL) => {
    const E = b.map((k) => S({ id: k.id, annotation: k.annotation }, k));
    r(y, { updated: E });
  }, R = (b) => {
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
    bulkDeleteAnnotation: M,
    bulkUpdateAnnotation: u,
    bulkUpdateBodies: B,
    bulkUpdateTargets: (b, y = J.LOCAL) => {
      const E = b.map(R).filter((k) => k);
      E.length > 0 && r(y, { updated: E });
    },
    clear: m,
    deleteAnnotation: A,
    deleteBody: w,
    getAnnotation: p,
    getBody: _,
    observe: o,
    unobserve: i,
    updateAnnotation: l,
    updateBody: T,
    updateTarget: (b, y = J.LOCAL) => {
      const E = R(b);
      E && r(y, { updated: [E] });
    }
  };
}, Yo = (e) => ({
  ...e,
  subscribe: (t) => {
    const n = (o) => t(o.state);
    return e.observe(n), t(e.all()), () => e.unobserve(n);
  }
});
let Xo = () => ({
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
const Ro = 250, No = (e) => {
  const t = Xo(), n = [];
  let o = -1, i = !1, r = 0;
  const s = (d) => {
    if (!i) {
      const { changes: g } = d, A = performance.now();
      if (A - r > Ro)
        n.splice(o + 1), n.push(g), o = n.length - 1;
      else {
        const M = n.length - 1;
        n[M] = Io(n[M], g);
      }
      r = A;
    }
    i = !1;
  };
  e.observe(s, { origin: J.LOCAL });
  const a = (d) => (d == null ? void 0 : d.length) > 0 && e.bulkDeleteAnnotation(d), l = (d) => (d == null ? void 0 : d.length) > 0 && e.bulkAddAnnotation(d, !1), u = (d) => (d == null ? void 0 : d.length) > 0 && e.bulkUpdateAnnotation(d.map(({ oldValue: g }) => g)), h = (d) => (d == null ? void 0 : d.length) > 0 && e.bulkUpdateAnnotation(d.map(({ newValue: g }) => g)), c = (d) => (d == null ? void 0 : d.length) > 0 && e.bulkAddAnnotation(d, !1), m = (d) => (d == null ? void 0 : d.length) > 0 && e.bulkDeleteAnnotation(d);
  return {
    canRedo: () => n.length - 1 > o,
    canUndo: () => o > -1,
    destroy: () => e.unobserve(s),
    on: (d, g) => t.on(d, g),
    redo: () => {
      if (n.length - 1 > o) {
        i = !0;
        const { created: d, updated: g, deleted: A } = n[o + 1];
        l(d), h(g), m(A), t.emit("redo", n[o + 1]), o += 1;
      }
    },
    undo: () => {
      if (o > -1) {
        i = !0;
        const { created: d, updated: g, deleted: A } = n[o];
        a(d), u(g), c(A), t.emit("undo", n[o]), o -= 1;
      }
    }
  };
}, Co = () => {
  const { subscribe: e, set: t } = St([]);
  return {
    subscribe: e,
    set: t
  };
}, Uo = (e, t, n, o) => {
  const { store: i, selection: r, hover: s, viewport: a } = e, l = /* @__PURE__ */ new Map();
  let u = [], h, c;
  const m = (w, p) => {
    l.has(w) ? l.get(w).push(p) : l.set(w, [p]);
  }, d = (w, p) => {
    const _ = l.get(w);
    _ && _.indexOf(p) > 0 && _.splice(_.indexOf(p), 1);
  }, g = (w, p, _) => {
    l.has(w) && setTimeout(() => {
      l.get(w).forEach((S) => {
        if (n) {
          const T = Array.isArray(p) ? p.map((R) => n.serialize(R)) : n.serialize(p), B = _ ? _ instanceof PointerEvent ? _ : n.serialize(_) : void 0;
          S(T, B);
        } else
          S(p, _);
      });
    }, 1);
  }, A = () => {
    const { selected: w } = r, p = w.map(({ id: _ }) => i.getAnnotation(_));
    p.forEach((_) => {
      const S = u.find((T) => T.id === _.id);
      (!S || !Oe(S, _)) && g("updateAnnotation", _, S);
    }), u = u.map((_) => p.find(({ id: T }) => T === _.id) || _);
  };
  r.subscribe(({ selected: w }) => {
    if (!(u.length === 0 && w.length === 0)) {
      if (u.length === 0 && w.length > 0)
        u = w.map(({ id: p }) => i.getAnnotation(p));
      else if (u.length > 0 && w.length === 0)
        u.forEach((p) => {
          const _ = i.getAnnotation(p.id);
          _ && !Oe(_, p) && g("updateAnnotation", _, p);
        }), u = [];
      else {
        const p = new Set(u.map((S) => S.id)), _ = new Set(w.map(({ id: S }) => S));
        u.filter((S) => !_.has(S.id)).forEach((S) => {
          const T = i.getAnnotation(S.id);
          T && !Oe(T, S) && g("updateAnnotation", T, S);
        }), u = [
          // Remove annotations that were deselected
          ...u.filter((S) => _.has(S.id)),
          // Add editable annotations that were selected
          ...w.filter(({ id: S }) => !p.has(S)).map(({ id: S }) => i.getAnnotation(S))
        ];
      }
      g("selectionChanged", u);
    }
  }), s.subscribe((w) => {
    !h && w ? g("mouseEnterAnnotation", i.getAnnotation(w)) : h && !w ? g("mouseLeaveAnnotation", i.getAnnotation(h)) : h && w && (g("mouseLeaveAnnotation", i.getAnnotation(h)), g("mouseEnterAnnotation", i.getAnnotation(w))), h = w;
  }), a == null || a.subscribe((w) => g("viewportIntersect", w.map(i.getAnnotation))), i.observe((w) => {
    o && (c && clearTimeout(c), c = setTimeout(A, 1e3));
    const { created: p, deleted: _ } = w.changes;
    p.forEach((S) => g("createAnnotation", S)), _.forEach((S) => g("deleteAnnotation", S)), w.changes.updated.filter((S) => [
      ...S.bodiesCreated || [],
      ...S.bodiesDeleted || [],
      ...S.bodiesUpdated || []
    ].length > 0).forEach(({ oldValue: S, newValue: T }) => {
      const B = u.find((R) => R.id === S.id) || S;
      u = u.map((R) => R.id === S.id ? T : R), g("updateAnnotation", T, B);
    });
  }, { origin: J.LOCAL }), i.observe((w) => {
    if (u) {
      const p = new Set(u.map((S) => S.id)), _ = w.changes.updated.filter(({ newValue: S }) => p.has(S.id)).map(({ newValue: S }) => S);
      _.length > 0 && (u = u.map((S) => _.find((B) => B.id === S.id) || S));
    }
  }, { origin: J.REMOTE });
  const M = (w) => (p) => {
    const { created: _, deleted: S, updated: T } = p;
    _.forEach((B) => g("createAnnotation", B)), S.forEach((B) => g("deleteAnnotation", B)), w ? T.forEach((B) => g("updateAnnotation", B.oldValue, B.newValue)) : T.forEach((B) => g("updateAnnotation", B.newValue, B.oldValue));
  };
  return t.on("undo", M(!0)), t.on("redo", M(!1)), { on: m, off: d, emit: g };
}, Ho = (e) => (t) => t.reduce((n, o) => {
  const { parsed: i, error: r } = e.parse(o);
  return r ? {
    parsed: n.parsed,
    failed: [...n.failed, o]
  } : {
    parsed: [...n.parsed, i],
    failed: n.failed
  };
}, { parsed: [], failed: [] }), Fo = (e, t, n) => {
  const { store: o, selection: i } = e, r = (M) => {
    if (n) {
      const { parsed: w, error: p } = n.parse(M);
      w ? o.addAnnotation(w, J.REMOTE) : console.error(p);
    } else
      o.addAnnotation(M, J.REMOTE);
  }, s = () => i.clear(), a = () => o.clear(), l = (M) => {
    const w = o.getAnnotation(M);
    return n && w ? n.serialize(w) : w;
  }, u = () => n ? o.all().map(n.serialize) : o.all(), h = () => {
    var M;
    const w = (((M = i.selected) == null ? void 0 : M.map((p) => p.id)) || []).map((p) => o.getAnnotation(p));
    return n ? w.map(n.serialize) : w;
  }, c = (M) => fetch(M).then((w) => w.json()).then((w) => (d(w), w)), m = (M) => {
    if (typeof M == "string") {
      const w = o.getAnnotation(M);
      return o.deleteAnnotation(M), n ? n.serialize(w) : w;
    } else {
      const w = n ? n.parse(M).parsed : M;
      return o.deleteAnnotation(w), M;
    }
  }, d = (M) => {
    if (n) {
      const { parsed: w, failed: p } = Ho(n)(M);
      p.length > 0 && console.warn(`Discarded ${p.length} invalid annotations`, p), o.bulkAddAnnotation(w, !0, J.REMOTE);
    } else
      o.bulkAddAnnotation(M, !0, J.REMOTE);
  }, g = (M) => {
    M ? i.setSelected(M) : i.clear();
  }, A = (M) => {
    if (n) {
      const w = n.parse(M).parsed, p = n.serialize(o.getAnnotation(w.id));
      return o.updateAnnotation(w), p;
    } else {
      const w = o.getAnnotation(M.id);
      return o.updateAnnotation(M), w;
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
    updateAnnotation: A
  };
};
let Go = (e) => crypto.getRandomValues(new Uint8Array(e)), Vo = (e, t, n) => {
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
}, zo = (e, t = 21) => Vo(e, t, Go), jo = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
const qo = () => ({ isGuest: !0, id: zo("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_", 20)() }), Ko = (e) => {
  const t = JSON.stringify(e);
  let n = 0;
  for (let o = 0, i = t.length; o < i; o++) {
    let r = t.charCodeAt(o);
    n = (n << 5) - n + r, n |= 0;
  }
  return `${n}`;
}, An = (e) => e ? typeof e == "object" ? { ...e } : e : void 0, Wo = (e, t) => (Array.isArray(e) ? e : [e]).map((n) => {
  const { id: o, type: i, purpose: r, value: s, created: a, creator: l, ...u } = n;
  return {
    id: o || `temp-${Ko(n)}`,
    annotation: t,
    type: i,
    purpose: r,
    value: s,
    created: a ? new Date(a) : void 0,
    creator: An(l),
    ...u
  };
}), Zo = (e) => e.map((t) => {
  var n;
  const o = { ...t };
  return delete o.annotation, (n = o.id) != null && n.startsWith("temp-") && delete o.id, o;
});
jo();
const Cr = (e, t = !1) => ({ parse: (i) => Jo(i, t), serialize: (i) => Qo(i, e) }), Jo = (e, t = !1) => {
  const n = e.id || wn(), {
    creator: o,
    created: i,
    updatedBy: r,
    updated: s,
    body: a,
    ...l
  } = e, u = Wo(a, n), h = Array.isArray(e.target) ? e.target[0] : e.target, c = Array.isArray(h.selector) ? h.selector[0] : h.selector, m = c.type === "FragmentSelector" ? jn(c, t) : c.type === "SvgSelector" ? go(c) : void 0;
  return m ? {
    parsed: {
      ...l,
      id: n,
      bodies: u,
      target: {
        created: i ? new Date(i) : void 0,
        creator: An(o),
        ...l.target,
        annotation: n,
        selector: m
      }
    }
  } : {
    error: Error(`Unknown selector type: ${c.type}`)
  };
}, Qo = (e, t) => {
  const {
    selector: n,
    creator: o,
    created: i,
    updated: r,
    updatedBy: s,
    ...a
  } = e.target, l = n.type == z.RECTANGLE ? qn(n.geometry) : po(n);
  return {
    ...e,
    "@context": "http://www.w3.org/ns/anno.jsonld",
    id: e.id,
    type: "Annotation",
    body: Zo(e.bodies),
    creator: o,
    created: i == null ? void 0 : i.toISOString(),
    target: {
      ...a,
      source: t,
      selector: l
    }
  };
};
function Ut(e, t, n) {
  const o = e.slice();
  return o[11] = t[n], o[13] = n, o;
}
function Ht(e) {
  let t, n, o, i, r;
  return {
    c() {
      t = I("rect"), f(t, "class", "a9s-corner-handle"), f(t, "x", n = /*point*/
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
      O(s, t, a), i || (r = W(t, "pointerdown", function() {
        K(
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
      s && v(t), i = !1, r();
    }
  };
}
function xo(e) {
  let t, n, o, i, r, s, a, l, u, h, c = (
    /*geom*/
    e[4].points
  ), m = [];
  for (let d = 0; d < c.length; d += 1)
    m[d] = Ht(Ut(e, c, d));
  return {
    c() {
      t = I("polygon"), i = Q(), r = I("polygon"), a = Q();
      for (let d = 0; d < m.length; d += 1)
        m[d].c();
      l = we(), f(t, "class", "a9s-outer"), f(t, "style", n = /*computedStyle*/
      e[1] ? "display:none;" : void 0), f(t, "points", o = /*geom*/
      e[4].points.map(Ft).join(" ")), f(r, "class", "a9s-inner a9s-shape-handle"), f(
        r,
        "style",
        /*computedStyle*/
        e[1]
      ), f(r, "points", s = /*geom*/
      e[4].points.map(Gt).join(" "));
    },
    m(d, g) {
      O(d, t, g), O(d, i, g), O(d, r, g), O(d, a, g);
      for (let A = 0; A < m.length; A += 1)
        m[A] && m[A].m(d, g);
      O(d, l, g), u || (h = [
        W(t, "pointerdown", function() {
          K(
            /*grab*/
            e[10](L.SHAPE)
          ) && e[10](L.SHAPE).apply(this, arguments);
        }),
        W(r, "pointerdown", function() {
          K(
            /*grab*/
            e[10](L.SHAPE)
          ) && e[10](L.SHAPE).apply(this, arguments);
        })
      ], u = !0);
    },
    p(d, g) {
      if (e = d, g & /*computedStyle*/
      2 && n !== (n = /*computedStyle*/
      e[1] ? "display:none;" : void 0) && f(t, "style", n), g & /*geom*/
      16 && o !== (o = /*geom*/
      e[4].points.map(Ft).join(" ")) && f(t, "points", o), g & /*computedStyle*/
      2 && f(
        r,
        "style",
        /*computedStyle*/
        e[1]
      ), g & /*geom*/
      16 && s !== (s = /*geom*/
      e[4].points.map(Gt).join(" ")) && f(r, "points", s), g & /*geom, handleSize, grab, Handle*/
      1048) {
        c = /*geom*/
        e[4].points;
        let A;
        for (A = 0; A < c.length; A += 1) {
          const M = Ut(e, c, A);
          m[A] ? m[A].p(M, g) : (m[A] = Ht(M), m[A].c(), m[A].m(l.parentNode, l));
        }
        for (; A < m.length; A += 1)
          m[A].d(1);
        m.length = c.length;
      }
    },
    d(d) {
      d && v(t), d && v(i), d && v(r), d && v(a), At(m, d), d && v(l), u = !1, pe(h);
    }
  };
}
function $o(e) {
  let t, n;
  return t = new $e({
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
      le(t, o, i), n = !0;
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
      j(t.$$.fragment, o), n = !1;
    },
    d(o) {
      ae(t, o);
    }
  };
}
const Ft = (e) => e.join(","), Gt = (e) => e.join(",");
function ei(e, t, n) {
  let o, i, { shape: r } = t, { computedStyle: s = void 0 } = t, { transform: a } = t, { viewportScale: l = 1 } = t;
  const u = (d, g, A) => {
    let M;
    g === L.SHAPE ? M = d.geometry.points.map(([p, _]) => [p + A[0], _ + A[1]]) : M = d.geometry.points.map(([p, _], S) => g === L(S) ? [p + A[0], _ + A[1]] : [p, _]);
    const w = Pe(M);
    return { ...d, geometry: { points: M, bounds: w } };
  };
  function h(d) {
    oe.call(this, e, d);
  }
  function c(d) {
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
    c,
    m
  ];
}
class ti extends $ {
  constructor(t) {
    super(), x(this, t, ei, $o, Z, {
      shape: 0,
      computedStyle: 1,
      transform: 2,
      viewportScale: 6
    });
  }
}
function ni(e) {
  let t, n, o, i, r, s, a, l, u, h, c, m, d, g, A, M, w, p, _, S, T, B, R, b, y, E, k, D, X, N, C, de, G, P, H, U, fe, ne, te, Ie, Le, Ee, He, ie, ke, se, Ae, Me, he, et, tt, nt, lt, Lt;
  return {
    c() {
      t = I("rect"), a = Q(), l = I("rect"), d = Q(), g = I("rect"), p = Q(), _ = I("rect"), R = Q(), b = I("rect"), D = Q(), X = I("rect"), G = Q(), P = I("circle"), ne = Q(), te = I("circle"), He = Q(), ie = I("circle"), Me = Q(), he = I("circle"), f(t, "class", "a9s-outer"), f(t, "style", n = /*computedStyle*/
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
      e[4].h), f(g, "class", "a9s-edge-handle a9s-edge-handle-top"), f(g, "x", A = /*geom*/
      e[4].x), f(g, "y", M = /*geom*/
      e[4].y), f(g, "height", 1), f(g, "width", w = /*geom*/
      e[4].w), f(_, "class", "a9s-edge-handle a9s-edge-handle-right"), f(_, "x", S = /*geom*/
      e[4].x + /*geom*/
      e[4].w), f(_, "y", T = /*geom*/
      e[4].y), f(_, "height", B = /*geom*/
      e[4].h), f(_, "width", 1), f(b, "class", "a9s-edge-handle a9s-edge-handle-bottom"), f(b, "x", y = /*geom*/
      e[4].x), f(b, "y", E = /*geom*/
      e[4].y + /*geom*/
      e[4].h), f(b, "height", 1), f(b, "width", k = /*geom*/
      e[4].w), f(X, "class", "a9s-edge-handle a9s-edge-handle-left"), f(X, "x", N = /*geom*/
      e[4].x), f(X, "y", C = /*geom*/
      e[4].y), f(X, "height", de = /*geom*/
      e[4].h), f(X, "width", 1), f(P, "class", "a9s-corner-handle a9s-corner-handle-topleft"), f(P, "cx", H = /*geom*/
      e[4].x), f(P, "cy", U = /*geom*/
      e[4].y), f(P, "r", fe = /*handleSize*/
      e[3] / 2), f(te, "class", "a9s-corner-handle a9s-corner-handle-topright"), f(te, "cx", Ie = /*geom*/
      e[4].x + /*geom*/
      e[4].w), f(te, "cy", Le = /*geom*/
      e[4].y), f(te, "r", Ee = /*handleSize*/
      e[3] / 2), f(ie, "class", "a9s-corner-handle a9s-corner-handle-bottomright"), f(ie, "cx", ke = /*geom*/
      e[4].x + /*geom*/
      e[4].w), f(ie, "cy", se = /*geom*/
      e[4].y + /*geom*/
      e[4].h), f(ie, "r", Ae = /*handleSize*/
      e[3] / 2), f(he, "class", "a9s-corner-handle a9s-corner-handle-bottomleft"), f(he, "cx", et = /*geom*/
      e[4].x), f(he, "cy", tt = /*geom*/
      e[4].y + /*geom*/
      e[4].h), f(he, "r", nt = /*handleSize*/
      e[3] / 2);
    },
    m(F, Y) {
      O(F, t, Y), O(F, a, Y), O(F, l, Y), O(F, d, Y), O(F, g, Y), O(F, p, Y), O(F, _, Y), O(F, R, Y), O(F, b, Y), O(F, D, Y), O(F, X, Y), O(F, G, Y), O(F, P, Y), O(F, ne, Y), O(F, te, Y), O(F, He, Y), O(F, ie, Y), O(F, Me, Y), O(F, he, Y), lt || (Lt = [
        W(t, "pointerdown", function() {
          K(
            /*grab*/
            e[10](L.SHAPE)
          ) && e[10](L.SHAPE).apply(this, arguments);
        }),
        W(l, "pointerdown", function() {
          K(
            /*grab*/
            e[10](L.SHAPE)
          ) && e[10](L.SHAPE).apply(this, arguments);
        }),
        W(g, "pointerdown", function() {
          K(
            /*grab*/
            e[10](L.TOP)
          ) && e[10](L.TOP).apply(this, arguments);
        }),
        W(_, "pointerdown", function() {
          K(
            /*grab*/
            e[10](L.RIGHT)
          ) && e[10](L.RIGHT).apply(this, arguments);
        }),
        W(b, "pointerdown", function() {
          K(
            /*grab*/
            e[10](L.BOTTOM)
          ) && e[10](L.BOTTOM).apply(this, arguments);
        }),
        W(X, "pointerdown", function() {
          K(
            /*grab*/
            e[10](L.LEFT)
          ) && e[10](L.LEFT).apply(this, arguments);
        }),
        W(P, "pointerdown", function() {
          K(
            /*grab*/
            e[10](L.TOP_LEFT)
          ) && e[10](L.TOP_LEFT).apply(this, arguments);
        }),
        W(te, "pointerdown", function() {
          K(
            /*grab*/
            e[10](L.TOP_RIGHT)
          ) && e[10](L.TOP_RIGHT).apply(this, arguments);
        }),
        W(ie, "pointerdown", function() {
          K(
            /*grab*/
            e[10](L.BOTTOM_RIGHT)
          ) && e[10](L.BOTTOM_RIGHT).apply(this, arguments);
        }),
        W(he, "pointerdown", function() {
          K(
            /*grab*/
            e[10](L.BOTTOM_LEFT)
          ) && e[10](L.BOTTOM_LEFT).apply(this, arguments);
        })
      ], lt = !0);
    },
    p(F, Y) {
      e = F, Y & /*computedStyle*/
      2 && n !== (n = /*computedStyle*/
      e[1] ? "display:none;" : void 0) && f(t, "style", n), Y & /*geom*/
      16 && o !== (o = /*geom*/
      e[4].x) && f(t, "x", o), Y & /*geom*/
      16 && i !== (i = /*geom*/
      e[4].y) && f(t, "y", i), Y & /*geom*/
      16 && r !== (r = /*geom*/
      e[4].w) && f(t, "width", r), Y & /*geom*/
      16 && s !== (s = /*geom*/
      e[4].h) && f(t, "height", s), Y & /*computedStyle*/
      2 && f(
        l,
        "style",
        /*computedStyle*/
        e[1]
      ), Y & /*geom*/
      16 && u !== (u = /*geom*/
      e[4].x) && f(l, "x", u), Y & /*geom*/
      16 && h !== (h = /*geom*/
      e[4].y) && f(l, "y", h), Y & /*geom*/
      16 && c !== (c = /*geom*/
      e[4].w) && f(l, "width", c), Y & /*geom*/
      16 && m !== (m = /*geom*/
      e[4].h) && f(l, "height", m), Y & /*geom*/
      16 && A !== (A = /*geom*/
      e[4].x) && f(g, "x", A), Y & /*geom*/
      16 && M !== (M = /*geom*/
      e[4].y) && f(g, "y", M), Y & /*geom*/
      16 && w !== (w = /*geom*/
      e[4].w) && f(g, "width", w), Y & /*geom*/
      16 && S !== (S = /*geom*/
      e[4].x + /*geom*/
      e[4].w) && f(_, "x", S), Y & /*geom*/
      16 && T !== (T = /*geom*/
      e[4].y) && f(_, "y", T), Y & /*geom*/
      16 && B !== (B = /*geom*/
      e[4].h) && f(_, "height", B), Y & /*geom*/
      16 && y !== (y = /*geom*/
      e[4].x) && f(b, "x", y), Y & /*geom*/
      16 && E !== (E = /*geom*/
      e[4].y + /*geom*/
      e[4].h) && f(b, "y", E), Y & /*geom*/
      16 && k !== (k = /*geom*/
      e[4].w) && f(b, "width", k), Y & /*geom*/
      16 && N !== (N = /*geom*/
      e[4].x) && f(X, "x", N), Y & /*geom*/
      16 && C !== (C = /*geom*/
      e[4].y) && f(X, "y", C), Y & /*geom*/
      16 && de !== (de = /*geom*/
      e[4].h) && f(X, "height", de), Y & /*geom*/
      16 && H !== (H = /*geom*/
      e[4].x) && f(P, "cx", H), Y & /*geom*/
      16 && U !== (U = /*geom*/
      e[4].y) && f(P, "cy", U), Y & /*handleSize*/
      8 && fe !== (fe = /*handleSize*/
      e[3] / 2) && f(P, "r", fe), Y & /*geom*/
      16 && Ie !== (Ie = /*geom*/
      e[4].x + /*geom*/
      e[4].w) && f(te, "cx", Ie), Y & /*geom*/
      16 && Le !== (Le = /*geom*/
      e[4].y) && f(te, "cy", Le), Y & /*handleSize*/
      8 && Ee !== (Ee = /*handleSize*/
      e[3] / 2) && f(te, "r", Ee), Y & /*geom*/
      16 && ke !== (ke = /*geom*/
      e[4].x + /*geom*/
      e[4].w) && f(ie, "cx", ke), Y & /*geom*/
      16 && se !== (se = /*geom*/
      e[4].y + /*geom*/
      e[4].h) && f(ie, "cy", se), Y & /*handleSize*/
      8 && Ae !== (Ae = /*handleSize*/
      e[3] / 2) && f(ie, "r", Ae), Y & /*geom*/
      16 && et !== (et = /*geom*/
      e[4].x) && f(he, "cx", et), Y & /*geom*/
      16 && tt !== (tt = /*geom*/
      e[4].y + /*geom*/
      e[4].h) && f(he, "cy", tt), Y & /*handleSize*/
      8 && nt !== (nt = /*handleSize*/
      e[3] / 2) && f(he, "r", nt);
    },
    d(F) {
      F && v(t), F && v(a), F && v(l), F && v(d), F && v(g), F && v(p), F && v(_), F && v(R), F && v(b), F && v(D), F && v(X), F && v(G), F && v(P), F && v(ne), F && v(te), F && v(He), F && v(ie), F && v(Me), F && v(he), lt = !1, pe(Lt);
    }
  };
}
function oi(e) {
  let t, n;
  return t = new $e({
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
          ni,
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
      le(t, o, i), n = !0;
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
      j(t.$$.fragment, o), n = !1;
    },
    d(o) {
      ae(t, o);
    }
  };
}
function ii(e, t, n) {
  let o, i, { shape: r } = t, { computedStyle: s = void 0 } = t, { transform: a } = t, { viewportScale: l = 1 } = t;
  const u = (d, g, A) => {
    const M = d.geometry.bounds;
    let [w, p] = [M.minX, M.minY], [_, S] = [M.maxX, M.maxY];
    const [T, B] = A;
    if (g === L.SHAPE)
      w += T, _ += T, p += B, S += B;
    else {
      switch (g) {
        case L.TOP:
        case L.TOP_LEFT:
        case L.TOP_RIGHT: {
          p += B;
          break;
        }
        case L.BOTTOM:
        case L.BOTTOM_LEFT:
        case L.BOTTOM_RIGHT: {
          S += B;
          break;
        }
      }
      switch (g) {
        case L.LEFT:
        case L.TOP_LEFT:
        case L.BOTTOM_LEFT: {
          w += T;
          break;
        }
        case L.RIGHT:
        case L.TOP_RIGHT:
        case L.BOTTOM_RIGHT: {
          _ += T;
          break;
        }
      }
    }
    const R = Math.min(w, _), b = Math.min(p, S), y = Math.abs(_ - w), E = Math.abs(S - p);
    return {
      ...d,
      geometry: {
        x: R,
        y: b,
        w: y,
        h: E,
        bounds: {
          minX: R,
          minY: b,
          maxX: R + y,
          maxY: b + E
        }
      }
    };
  };
  function h(d) {
    oe.call(this, e, d);
  }
  function c(d) {
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
    c,
    m
  ];
}
class ri extends $ {
  constructor(t) {
    super(), x(this, t, ii, oi, Z, {
      shape: 0,
      computedStyle: 1,
      transform: 2,
      viewportScale: 6
    });
  }
}
function si(e) {
  let t, n, o, i, r, s, a, l, u, h, c, m, d, g, A, M, w, p, _, S, T, B, R, b, y, E, k, D, X;
  return {
    c() {
      t = I("ellipse"), s = Q(), a = I("ellipse"), m = Q(), d = I("rect"), M = Q(), w = I("rect"), S = Q(), T = I("rect"), b = Q(), y = I("rect"), f(t, "class", "a9s-outer"), f(t, "cx", n = /*geom*/
      e[3].cx), f(t, "cy", o = /*geom*/
      e[3].cy), f(t, "rx", i = /*geom*/
      e[3].rx), f(t, "ry", r = /*geom*/
      e[3].ry), f(a, "class", "a9s-inner a9s-shape-handle"), f(a, "cx", l = /*geom*/
      e[3].cx), f(a, "cy", u = /*geom*/
      e[3].cy), f(a, "rx", h = /*geom*/
      e[3].rx), f(a, "ry", c = /*geom*/
      e[3].ry), f(d, "class", "a9s-corner-handle a9s-corner-top"), f(d, "x", g = /*geom*/
      e[3].cx - /*handleSize*/
      e[2] / 2), f(d, "y", A = /*geom*/
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
      ), f(T, "class", "a9s-corner-handle a9s-corner-handle-bottom"), f(T, "x", B = /*geom*/
      e[3].cx - /*handleSize*/
      e[2] / 2), f(T, "y", R = /*geom*/
      e[3].cy + /*geom*/
      e[3].ry - /*handleSize*/
      e[2] / 2), f(
        T,
        "height",
        /*handleSize*/
        e[2]
      ), f(
        T,
        "width",
        /*handleSize*/
        e[2]
      ), f(y, "class", "a9s-corner-handle a9s-corner-handle-left"), f(y, "x", E = /*geom*/
      e[3].cx - /*geom*/
      e[3].rx - /*handleSize*/
      e[2] / 2), f(y, "y", k = /*geom*/
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
    m(N, C) {
      O(N, t, C), O(N, s, C), O(N, a, C), O(N, m, C), O(N, d, C), O(N, M, C), O(N, w, C), O(N, S, C), O(N, T, C), O(N, b, C), O(N, y, C), D || (X = [
        W(t, "pointerdown", function() {
          K(
            /*grab*/
            e[9](L.SHAPE)
          ) && e[9](L.SHAPE).apply(this, arguments);
        }),
        W(a, "pointerdown", function() {
          K(
            /*grab*/
            e[9](L.SHAPE)
          ) && e[9](L.SHAPE).apply(this, arguments);
        }),
        W(d, "pointerdown", function() {
          K(
            /*grab*/
            e[9](L.TOP)
          ) && e[9](L.TOP).apply(this, arguments);
        }),
        W(w, "pointerdown", function() {
          K(
            /*grab*/
            e[9](L.RIGHT)
          ) && e[9](L.RIGHT).apply(this, arguments);
        }),
        W(T, "pointerdown", function() {
          K(
            /*grab*/
            e[9](L.BOTTOM)
          ) && e[9](L.BOTTOM).apply(this, arguments);
        }),
        W(y, "pointerdown", function() {
          K(
            /*grab*/
            e[9](L.LEFT)
          ) && e[9](L.LEFT).apply(this, arguments);
        })
      ], D = !0);
    },
    p(N, C) {
      e = N, C & /*geom*/
      8 && n !== (n = /*geom*/
      e[3].cx) && f(t, "cx", n), C & /*geom*/
      8 && o !== (o = /*geom*/
      e[3].cy) && f(t, "cy", o), C & /*geom*/
      8 && i !== (i = /*geom*/
      e[3].rx) && f(t, "rx", i), C & /*geom*/
      8 && r !== (r = /*geom*/
      e[3].ry) && f(t, "ry", r), C & /*geom*/
      8 && l !== (l = /*geom*/
      e[3].cx) && f(a, "cx", l), C & /*geom*/
      8 && u !== (u = /*geom*/
      e[3].cy) && f(a, "cy", u), C & /*geom*/
      8 && h !== (h = /*geom*/
      e[3].rx) && f(a, "rx", h), C & /*geom*/
      8 && c !== (c = /*geom*/
      e[3].ry) && f(a, "ry", c), C & /*geom, handleSize*/
      12 && g !== (g = /*geom*/
      e[3].cx - /*handleSize*/
      e[2] / 2) && f(d, "x", g), C & /*geom, handleSize*/
      12 && A !== (A = /*geom*/
      e[3].cy - /*handleSize*/
      e[2] / 2 - /*geom*/
      e[3].ry) && f(d, "y", A), C & /*handleSize*/
      4 && f(
        d,
        "height",
        /*handleSize*/
        e[2]
      ), C & /*handleSize*/
      4 && f(
        d,
        "width",
        /*handleSize*/
        e[2]
      ), C & /*geom, handleSize*/
      12 && p !== (p = /*geom*/
      e[3].cx + /*geom*/
      e[3].rx - /*handleSize*/
      e[2] / 2) && f(w, "x", p), C & /*geom, handleSize*/
      12 && _ !== (_ = /*geom*/
      e[3].cy - /*handleSize*/
      e[2] / 2) && f(w, "y", _), C & /*handleSize*/
      4 && f(
        w,
        "height",
        /*handleSize*/
        e[2]
      ), C & /*handleSize*/
      4 && f(
        w,
        "width",
        /*handleSize*/
        e[2]
      ), C & /*geom, handleSize*/
      12 && B !== (B = /*geom*/
      e[3].cx - /*handleSize*/
      e[2] / 2) && f(T, "x", B), C & /*geom, handleSize*/
      12 && R !== (R = /*geom*/
      e[3].cy + /*geom*/
      e[3].ry - /*handleSize*/
      e[2] / 2) && f(T, "y", R), C & /*handleSize*/
      4 && f(
        T,
        "height",
        /*handleSize*/
        e[2]
      ), C & /*handleSize*/
      4 && f(
        T,
        "width",
        /*handleSize*/
        e[2]
      ), C & /*geom, handleSize*/
      12 && E !== (E = /*geom*/
      e[3].cx - /*geom*/
      e[3].rx - /*handleSize*/
      e[2] / 2) && f(y, "x", E), C & /*geom, handleSize*/
      12 && k !== (k = /*geom*/
      e[3].cy - /*handleSize*/
      e[2] / 2) && f(y, "y", k), C & /*handleSize*/
      4 && f(
        y,
        "height",
        /*handleSize*/
        e[2]
      ), C & /*handleSize*/
      4 && f(
        y,
        "width",
        /*handleSize*/
        e[2]
      );
    },
    d(N) {
      N && v(t), N && v(s), N && v(a), N && v(m), N && v(d), N && v(M), N && v(w), N && v(S), N && v(T), N && v(b), N && v(y), D = !1, pe(X);
    }
  };
}
function li(e) {
  let t, n;
  return t = new $e({
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
          si,
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
      le(t, o, i), n = !0;
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
      j(t.$$.fragment, o), n = !1;
    },
    d(o) {
      ae(t, o);
    }
  };
}
function ai(e, t, n) {
  let o, i, { shape: r } = t, { transform: s } = t, { viewportScale: a = 1 } = t;
  const l = (m, d, g) => {
    const A = m.geometry.bounds;
    let [M, w] = [A.minX, A.minY], [p, _] = [A.maxX, A.maxY];
    const [S, T] = g;
    if (d === L.SHAPE)
      M += S, p += S, w += T, _ += T;
    else
      switch (d) {
        case L.TOP: {
          w += T;
          break;
        }
        case L.BOTTOM: {
          _ += T;
          break;
        }
        case L.LEFT: {
          M += S;
          break;
        }
        case L.RIGHT: {
          p += S;
          break;
        }
      }
    const B = Math.min(M, p), R = Math.min(w, _), b = Math.abs(p - M), y = Math.abs(_ - w), E = (M + p) / 2, k = (w + _) / 2, D = b / 2, X = y / 2;
    return {
      ...m,
      geometry: {
        ...m.geometry,
        cx: E,
        cy: k,
        rx: D,
        ry: X,
        bounds: {
          minX: B,
          minY: R,
          maxX: B + b,
          maxY: R + y
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
  function c(m) {
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
    c
  ];
}
class fi extends $ {
  constructor(t) {
    super(), x(this, t, ai, li, Z, { shape: 0, transform: 1, viewportScale: 5 });
  }
}
const Te = (e, t, n) => {
  const o = typeof t == "function" ? t(e) : t;
  if (o) {
    const { fill: i, fillOpacity: r } = o;
    let s = "", a;
    return i && (s += `fill:${i};stroke:${i};`), n && (a = n.fillOpacity), s += `fill-opacity:${a || r || "0.25"};`, s;
  }
};
function ci(e) {
  let t, n, o;
  return {
    c() {
      t = I("path"), f(t, "class", "a9s-shape-handle"), f(
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
      O(i, t, r), n || (o = W(t, "pointerdown", function() {
        K(
          /*grab*/
          e[14](L.SHAPE)
        ) && e[14](L.SHAPE).apply(this, arguments);
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
      i && v(t), n = !1, o();
    }
  };
}
function ui(e) {
  let t, n;
  return t = new $e({
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
          ci,
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
      ue(t.$$.fragment);
    },
    m(o, i) {
      le(t, o, i), n = !0;
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
      j(t.$$.fragment, o), n = !1;
    },
    d(o) {
      ae(t, o);
    }
  };
}
function di(e, t, n) {
  let o, i, r, { shape: s } = t, { annotation: a } = t, { transform: l } = t, { viewportScale: u = 1 } = t, { style: h = void 0 } = t, c = { fillOpacity: 1 };
  const m = (M, w, p) => {
    let _;
    w === L.SHAPE && (_ = M.geometry.points.map(([T, B, R]) => [T + p[0], B + p[1], R]));
    const S = Pe(_.map((T) => [T[0], T[1]]));
    return { ...M, geometry: { points: _, bounds: S } };
  };
  function d(M) {
    oe.call(this, e, M);
  }
  function g(M) {
    oe.call(this, e, M);
  }
  function A(M) {
    oe.call(this, e, M);
  }
  return e.$$set = (M) => {
    "shape" in M && n(0, s = M.shape), "annotation" in M && n(5, a = M.annotation), "transform" in M && n(1, l = M.transform), "viewportScale" in M && n(6, u = M.viewportScale), "style" in M && n(7, h = M.style);
  }, e.$$.update = () => {
    e.$$.dirty & /*shape*/
    1 && n(8, o = s.geometry), e.$$.dirty & /*viewportScale*/
    64, e.$$.dirty & /*annotation, style*/
    160 && n(3, i = Te(a, h, c)), e.$$.dirty & /*geom*/
    256 && n(2, r = Qe(o.points, Je, !0));
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
    A
  ];
}
class hi extends $ {
  constructor(t) {
    super(), x(this, t, di, ui, Z, {
      shape: 0,
      annotation: 5,
      transform: 1,
      viewportScale: 6,
      style: 7
    });
  }
}
function mi(e) {
  let t, n, o, i, r, s, a, l, u, h, c, m, d, g, A, M, w, p, _, S, T, B, R, b;
  return {
    c() {
      t = I("line"), a = Q(), l = I("line"), d = Q(), g = I("circle"), p = Q(), _ = I("circle"), f(t, "class", "a9s-outer"), f(t, "stroke-linecap", "round"), f(t, "stroke-linejoin", "round"), f(t, "style", n = /*computedStyle*/
      e[1] ? "display:none;" : void 0), f(t, "x1", o = /*geom*/
      e[4].x1), f(t, "y1", i = /*geom*/
      e[4].y1), f(t, "x2", r = /*geom*/
      e[4].x2), f(t, "y2", s = /*geom*/
      e[4].y2), f(t, "marker-end", "url(#arrow)"), f(l, "class", "a9s-inner a9s-shape-handle"), f(
        l,
        "style",
        /*computedStyle*/
        e[1]
      ), f(l, "stroke-linecap", "round"), f(l, "stroke-linejoin", "round"), f(l, "marker-end", "url(#arrow)"), f(l, "x1", u = /*geom*/
      e[4].x1), f(l, "y1", h = /*geom*/
      e[4].y1), f(l, "x2", c = /*geom*/
      e[4].x2), f(l, "y2", m = /*geom*/
      e[4].y2), f(g, "class", "a9s-corner-handle"), f(g, "cx", A = /*geom*/
      e[4].x1), f(g, "cy", M = /*geom*/
      e[4].y1), f(g, "r", w = /*handleSize*/
      e[3] / 2), f(_, "class", "a9s-corner-handle"), f(_, "cx", S = /*geom*/
      e[4].x2), f(_, "cy", T = /*geom*/
      e[4].y2), f(_, "r", B = /*handleSize*/
      e[3] / 2);
    },
    m(y, E) {
      O(y, t, E), O(y, a, E), O(y, l, E), O(y, d, E), O(y, g, E), O(y, p, E), O(y, _, E), R || (b = [
        W(t, "pointerdown", function() {
          K(
            /*grab*/
            e[10](L.SHAPE)
          ) && e[10](L.SHAPE).apply(this, arguments);
        }),
        W(l, "pointerdown", function() {
          K(
            /*grab*/
            e[10](L.SHAPE)
          ) && e[10](L.SHAPE).apply(this, arguments);
        }),
        W(g, "pointerdown", function() {
          K(
            /*grab*/
            e[10](L.LEFT)
          ) && e[10](L.LEFT).apply(this, arguments);
        }),
        W(_, "pointerdown", function() {
          K(
            /*grab*/
            e[10](L.RIGHT)
          ) && e[10](L.RIGHT).apply(this, arguments);
        })
      ], R = !0);
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
      e[4].y2) && f(l, "y2", m), E & /*geom*/
      16 && A !== (A = /*geom*/
      e[4].x1) && f(g, "cx", A), E & /*geom*/
      16 && M !== (M = /*geom*/
      e[4].y1) && f(g, "cy", M), E & /*handleSize*/
      8 && w !== (w = /*handleSize*/
      e[3] / 2) && f(g, "r", w), E & /*geom*/
      16 && S !== (S = /*geom*/
      e[4].x2) && f(_, "cx", S), E & /*geom*/
      16 && T !== (T = /*geom*/
      e[4].y2) && f(_, "cy", T), E & /*handleSize*/
      8 && B !== (B = /*handleSize*/
      e[3] / 2) && f(_, "r", B);
    },
    d(y) {
      y && v(t), y && v(a), y && v(l), y && v(d), y && v(g), y && v(p), y && v(_), R = !1, pe(b);
    }
  };
}
function gi(e) {
  let t, n;
  return t = new $e({
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
          mi,
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
      le(t, o, i), n = !0;
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
      j(t.$$.fragment, o), n = !1;
    },
    d(o) {
      ae(t, o);
    }
  };
}
function pi(e, t, n) {
  let o, i, { shape: r } = t, { computedStyle: s = void 0 } = t, { transform: a } = t, { viewportScale: l = 1 } = t;
  const u = (d, g, A) => {
    d.geometry.bounds;
    let M = d.geometry.x1, w = d.geometry.x2, p = d.geometry.y1, _ = d.geometry.y2;
    const [S, T] = A;
    if (g === L.SHAPE)
      M += S, w += S, p += T, _ += T;
    else
      switch (g) {
        case L.LEFT: {
          M += S, p += T;
          break;
        }
        case L.RIGHT: {
          w += S, _ += T;
          break;
        }
      }
    return {
      ...d,
      geometry: {
        x1: M,
        y1: p,
        x2: w,
        y2: _,
        bounds: {
          minX: Math.min(M, w),
          minY: Math.min(p, _),
          maxX: Math.max(M, w),
          maxY: Math.max(p, _)
        }
      }
    };
  };
  function h(d) {
    oe.call(this, e, d);
  }
  function c(d) {
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
    c,
    m
  ];
}
class yi extends $ {
  constructor(t) {
    super(), x(this, t, pi, gi, Z, {
      shape: 0,
      computedStyle: 1,
      transform: 2,
      viewportScale: 6
    });
  }
}
const Mn = /* @__PURE__ */ new Map([
  [z.RECTANGLE, ri],
  [z.POLYGON, ti],
  [z.ELLIPSE, fi],
  [z.FREEHAND, hi],
  [z.LINE, yi]
]), Vt = (e) => Mn.get(e.type), _i = (e, t) => Mn.set(e, t), L = (e) => `HANDLE-${e}`;
L.SHAPE = "SHAPE";
L.TOP = "TOP";
L.RIGHT = "RIGHT";
L.BOTTOM = "BOTTOM";
L.LEFT = "LEFT";
L.TOP_LEFT = "TOP_LEFT";
L.TOP_RIGHT = "TOP_RIGHT";
L.BOTTOM_RIGHT = "BOTTOM_RIGHT";
L.BOTTOM_LEFT = "BOTTOM_LEFT";
L.START = "START";
L.END = "END";
const wi = (e) => ({}), zt = (e) => ({ grab: (
  /*onGrab*/
  e[0]
) });
function bi(e) {
  let t, n, o, i;
  const r = (
    /*#slots*/
    e[7].default
  ), s = vn(
    r,
    e,
    /*$$scope*/
    e[6],
    zt
  );
  return {
    c() {
      t = I("g"), s && s.c(), f(t, "class", "a9s-annotation selected");
    },
    m(a, l) {
      O(a, t, l), s && s.m(t, null), n = !0, o || (i = [
        W(
          t,
          "pointerup",
          /*onRelease*/
          e[2]
        ),
        W(
          t,
          "pointermove",
          /*onPointerMove*/
          e[1]
        )
      ], o = !0);
    },
    p(a, [l]) {
      s && s.p && (!n || l & /*$$scope*/
      64) && Pn(
        s,
        r,
        a,
        /*$$scope*/
        a[6],
        n ? On(
          r,
          /*$$scope*/
          a[6],
          l,
          wi
        ) : In(
          /*$$scope*/
          a[6]
        ),
        zt
      );
    },
    i(a) {
      n || (V(s, a), n = !0);
    },
    o(a) {
      j(s, a), n = !1;
    },
    d(a) {
      a && v(t), s && s.d(a), o = !1, pe(i);
    }
  };
}
function Ei(e, t, n) {
  let { $$slots: o = {}, $$scope: i } = t;
  const r = be();
  let { shape: s } = t, { editor: a } = t, { transform: l } = t, u = null, h, c = null;
  const m = (A) => (M) => {
    u = A, h = l.elementToImage(M.offsetX, M.offsetY), c = s, M.target.setPointerCapture(M.pointerId), r("grab");
  }, d = (A) => {
    if (u) {
      const [M, w] = l.elementToImage(A.offsetX, A.offsetY), p = [M - h[0], w - h[1]];
      n(3, s = a(c, u, p)), r("change", s);
    }
  }, g = (A) => {
    A.target.releasePointerCapture(A.pointerId), u = null, c = s, r("release");
  };
  return e.$$set = (A) => {
    "shape" in A && n(3, s = A.shape), "editor" in A && n(4, a = A.editor), "transform" in A && n(5, l = A.transform), "$$scope" in A && n(6, i = A.$$scope);
  }, [m, d, g, s, a, l, i, o];
}
class $e extends $ {
  constructor(t) {
    super(), x(this, t, Ei, bi, Z, { shape: 3, editor: 4, transform: 5 });
  }
}
function Ai(e, t, n) {
  let o;
  const i = be();
  let { annotation: r } = t, { editor: s } = t, { style: a = void 0 } = t, { target: l } = t, { transform: u } = t, { viewportScale: h } = t, c;
  return Se(() => (n(6, c = new s({
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
    5 && (o = Te(r, a)), e.$$.dirty & /*annotation, editorComponent*/
    65 && r && (c == null || c.$set({ shape: r.target.selector })), e.$$.dirty & /*editorComponent, transform*/
    80 && c && c.$set({ transform: u }), e.$$.dirty & /*editorComponent, viewportScale*/
    96 && c && c.$set({ viewportScale: h });
  }, [r, s, a, l, u, h, c];
}
class Mi extends $ {
  constructor(t) {
    super(), x(this, t, Ai, null, Z, {
      annotation: 0,
      editor: 1,
      style: 2,
      target: 3,
      transform: 4,
      viewportScale: 5
    });
  }
}
function Si(e, t, n) {
  const o = be();
  let { drawingMode: i } = t, { target: r } = t, { tool: s } = t, { transform: a } = t, { viewportScale: l } = t, u;
  return Se(() => {
    const h = r.closest("svg"), c = [], m = (d, g, A) => {
      h.addEventListener(d, g, A), c.push(() => h.removeEventListener(d, g, A));
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
class Ti extends $ {
  constructor(t) {
    super(), x(this, t, Si, null, Z, {
      drawingMode: 0,
      target: 1,
      tool: 2,
      transform: 3,
      viewportScale: 4
    });
  }
}
function jt(e) {
  let t, n;
  return {
    c() {
      t = I("rect"), n = I("rect"), f(t, "class", "a9s-outer"), f(
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
      O(o, t, i), O(o, n, i);
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
      o && v(t), o && v(n);
    }
  };
}
function Li(e) {
  let t, n = (
    /*origin*/
    e[0] && jt(e)
  );
  return {
    c() {
      t = I("g"), n && n.c(), f(t, "class", "a9s-annotation a9s-rubberband");
    },
    m(o, i) {
      O(o, t, i), n && n.m(t, null);
    },
    p(o, [i]) {
      /*origin*/
      o[0] ? n ? n.p(o, i) : (n = jt(o), n.c(), n.m(t, null)) : n && (n.d(1), n = null);
    },
    i: q,
    o: q,
    d(o) {
      o && v(t), n && n.d();
    }
  };
}
function ki(e, t, n) {
  const o = be();
  let { addEventListener: i } = t, { drawingMode: r } = t, { transform: s } = t, a, l, u, h, c, m, d;
  const g = (p) => {
    a = performance.now(), r === "drag" && (n(0, l = s.elementToImage(p.offsetX, p.offsetY)), u = l, n(1, h = l[0]), n(2, c = l[1]), n(3, m = 1), n(4, d = 1));
  }, A = (p) => {
    l && (u = s.elementToImage(p.offsetX, p.offsetY), n(1, h = Math.min(u[0], l[0])), n(2, c = Math.min(u[1], l[1])), n(3, m = Math.abs(u[0] - l[0])), n(4, d = Math.abs(u[1] - l[1])));
  }, M = (p) => {
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
        type: z.RECTANGLE,
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
  return Se(() => {
    i("pointerdown", g), i("pointermove", A), i("pointerup", M, !0);
  }), e.$$set = (p) => {
    "addEventListener" in p && n(5, i = p.addEventListener), "drawingMode" in p && n(6, r = p.drawingMode), "transform" in p && n(7, s = p.transform);
  }, [l, h, c, m, d, i, r, s];
}
class vi extends $ {
  constructor(t) {
    super(), x(this, t, ki, Li, Z, {
      addEventListener: 5,
      drawingMode: 6,
      transform: 7
    });
  }
}
const ut = (e, t) => {
  const n = Math.abs(t[0] - e[0]), o = Math.abs(t[1] - e[1]);
  return Math.sqrt(Math.pow(n, 2) + Math.pow(o, 2));
}, Xe = [];
function Oi(e, t = q) {
  let n;
  const o = /* @__PURE__ */ new Set();
  function i(a) {
    if (Z(e, a) && (e = a, n)) {
      const l = !Xe.length;
      for (const u of o)
        u[1](), Xe.push(u, e);
      if (l) {
        for (let u = 0; u < Xe.length; u += 2)
          Xe[u][0](Xe[u + 1]);
        Xe.length = 0;
      }
    }
  }
  function r(a) {
    i(a(e));
  }
  function s(a, l = q) {
    const u = [a, l];
    return o.add(u), o.size === 1 && (n = t(i) || q), a(e), () => {
      o.delete(u), o.size === 0 && n && (n(), n = null);
    };
  }
  return { set: i, update: r, subscribe: s };
}
const Pi = (e, t) => {
  const { naturalWidth: n, naturalHeight: o } = e;
  if (!n && !o) {
    const { width: i, height: r } = e;
    t.setAttribute("viewBox", `0 0 ${i} ${r}`), e.addEventListener("load", (s) => {
      const a = s.target;
      t.setAttribute("viewBox", `0 0 ${a.naturalWidth} ${a.naturalHeight}`);
    });
  } else
    t.setAttribute("viewBox", `0 0 ${n} ${o}`);
}, Ii = (e, t) => {
  Pi(e, t);
  const { subscribe: n, set: o } = Oi(1);
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
}, Ur = "ontouchstart" in window || navigator.maxTouchPoints > 0;
function dt(e) {
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
function qt(e) {
  let t, n, o, i, r, s = (
    /*isClosable*/
    e[2] && Kt(e)
  );
  return {
    c() {
      t = I("polygon"), o = I("polygon"), s && s.c(), r = we(), f(t, "class", "a9s-outer"), f(t, "points", n = /*coords*/
      e[15]), f(o, "class", "a9s-inner"), f(o, "points", i = /*coords*/
      e[15]);
    },
    m(a, l) {
      O(a, t, l), O(a, o, l), s && s.m(a, l), O(a, r, l);
    },
    p(a, l) {
      l & /*isClosable, points, cursor*/
      7 && n !== (n = /*coords*/
      a[15]) && f(t, "points", n), l & /*isClosable, points, cursor*/
      7 && i !== (i = /*coords*/
      a[15]) && f(o, "points", i), /*isClosable*/
      a[2] ? s ? s.p(a, l) : (s = Kt(a), s.c(), s.m(r.parentNode, r)) : s && (s.d(1), s = null);
    },
    d(a) {
      a && v(t), a && v(o), s && s.d(a), a && v(r);
    }
  };
}
function Kt(e) {
  let t, n, o;
  return {
    c() {
      t = I("rect"), f(t, "class", "a9s-corner-handle"), f(t, "x", n = /*points*/
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
      O(i, t, r);
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
      i && v(t);
    }
  };
}
function Di(e) {
  let t, n = (
    /*cursor*/
    e[1] && qt(dt(e))
  );
  return {
    c() {
      t = I("g"), n && n.c(), f(t, "class", "a9s-annotation a9s-rubberband");
    },
    m(o, i) {
      O(o, t, i), n && n.m(t, null);
    },
    p(o, [i]) {
      /*cursor*/
      o[1] ? n ? n.p(dt(o), i) : (n = qt(dt(o)), n.c(), n.m(t, null)) : n && (n.d(1), n = null);
    },
    i: q,
    o: q,
    d(o) {
      o && v(t), n && n.d();
    }
  };
}
const Bi = 20;
function Yi(e, t, n) {
  let o;
  const i = be();
  let { addEventListener: r } = t, { drawingMode: s } = t, { transform: a } = t, { viewportScale: l = 1 } = t, u, h = [], c = null, m = !1;
  const d = (p) => {
    const { timeStamp: _, offsetX: S, offsetY: T } = p;
    if (u = { timeStamp: _, offsetX: S, offsetY: T }, s === "drag" && h.length === 0) {
      const B = a.elementToImage(p.offsetX, p.offsetY);
      h.push(B), n(1, c = B);
    }
  }, g = (p) => {
    if (h.length > 0 && (n(1, c = a.elementToImage(p.offsetX, p.offsetY)), h.length > 2)) {
      const _ = ut(c, h[0]) * l;
      n(2, m = _ < Bi);
    }
  }, A = (p) => {
    if (s === "click") {
      const _ = p.timeStamp - u.timeStamp, S = ut([u.offsetX, u.offsetY], [p.offsetX, p.offsetY]);
      if (_ > 300 || S > 15)
        return;
      if (m)
        w();
      else if (h.length === 0) {
        const T = a.elementToImage(p.offsetX, p.offsetY);
        h.push(T), n(1, c = T);
      } else
        h.push(c);
    } else {
      if (h.length === 1 && ut(h[0], c) <= 4) {
        n(0, h = []), n(1, c = null);
        return;
      }
      p.stopImmediatePropagation(), m ? w() : h.push(c);
    }
  }, M = () => {
    const p = [...h, c], _ = {
      type: z.POLYGON,
      geometry: { bounds: Pe(p), points: p }
    };
    _t(_) > 4 && (n(0, h = []), n(1, c = null), i("create", _));
  }, w = () => {
    const p = {
      type: z.POLYGON,
      geometry: {
        bounds: Pe(h),
        points: [...h]
      }
    };
    n(0, h = []), n(1, c = null), i("create", p);
  };
  return Se(() => {
    r("pointerdown", d, !0), r("pointermove", g), r("pointerup", A, !0), r("dblclick", M, !0);
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
class Xi extends $ {
  constructor(t) {
    super(), x(this, t, Yi, Di, Z, {
      addEventListener: 4,
      drawingMode: 5,
      transform: 6,
      viewportScale: 7
    });
  }
}
function Wt(e) {
  let t, n, o, i, r, s, a, l, u, h;
  return {
    c() {
      t = I("ellipse"), s = I("ellipse"), f(t, "class", "a9s-outer"), f(t, "cx", n = /*x*/
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
      O(c, t, m), O(c, s, m);
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
      c && v(t), c && v(s);
    }
  };
}
function Ri(e) {
  let t, n = (
    /*origin*/
    e[1] && Wt(e)
  );
  return {
    c() {
      t = I("g"), n && n.c(), f(t, "class", "a9s-annotation a9s-rubberband");
    },
    m(o, i) {
      O(o, t, i), n && n.m(t, null), e[9](t);
    },
    p(o, [i]) {
      /*origin*/
      o[1] ? n ? n.p(o, i) : (n = Wt(o), n.c(), n.m(t, null)) : n && (n.d(1), n = null);
    },
    i: q,
    o: q,
    d(o) {
      o && v(t), n && n.d(), e[9](null);
    }
  };
}
function Ni(e, t, n) {
  const o = be();
  let { addEventListener: i } = t, { drawingMode: r } = t, { transform: s } = t, a, l, u, h, c, m, d, g = !1, A = !1, M, w;
  const p = (y) => {
    M = performance.now(), r === "drag" && (n(1, l = s.elementToImage(y.offsetX, y.offsetY)), u = l, n(2, h = l[0]), n(3, c = l[1]), n(4, m = 1), n(5, d = 1));
  }, _ = (y) => {
    const E = y || w;
    if (l)
      if (u = s.elementToImage(E.offsetX, E.offsetY), A) {
        const k = 2 * Math.abs(u[0] - l[0]), D = 2 * Math.abs(u[1] - l[1]);
        n(4, m = g ? Math.max(k, D) : k), n(5, d = g ? m : D), n(2, h = Math.min(u[0], l[0] - m / 2)), n(3, c = Math.min(u[1], l[1] - d / 2));
      } else {
        const k = Math.abs(u[0] - l[0]), D = Math.abs(u[1] - l[1]);
        n(4, m = g ? Math.max(k, D) : k), n(5, d = g ? m : D), n(2, h = Math.min(u[0], l[0])), n(3, c = Math.min(u[1], l[1]));
      }
    y && (w = y);
  }, S = (y) => {
    r === "click" && y.stopImmediatePropagation();
    const E = performance.now() - M;
    if (r === "click") {
      if (E > 300)
        return;
      y.stopPropagation(), l ? T() : (n(1, l = s.elementToImage(y.offsetX, y.offsetY)), u = l, n(2, h = l[0]), n(3, c = l[1]), n(4, m = 1), n(5, d = 1));
    } else
      l && (E > 300 || m * d > 100 ? (y.stopPropagation(), T()) : (n(1, l = null), u = null, w = void 0));
  }, T = () => {
    if (m * d > 15) {
      const y = {
        type: z.ELLIPSE,
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
  }, B = (y) => {
    y.key === "Shift" && (g = !0, _()), y.key === "Control" && (A = !0, _());
  }, R = (y) => {
    y.key === "Shift" && (g = !1, _()), y.key === "Control" && (A = !1, _());
  };
  Se(() => (document.addEventListener("keyup", R), document.addEventListener("keydown", B), i("pointerdown", p), i("pointermove", _), i("pointerup", S), () => {
    document.removeEventListener("keyup", R), document.removeEventListener("keydown", B);
  }));
  function b(y) {
    Ze[y ? "unshift" : "push"](() => {
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
class Ci extends $ {
  constructor(t) {
    super(), x(this, t, Ni, Ri, Z, {
      addEventListener: 6,
      drawingMode: 7,
      transform: 8
    });
  }
}
function Zt(e) {
  let t;
  return {
    c() {
      t = I("path"), f(
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
      O(n, t, o);
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
      n && v(t);
    }
  };
}
function Ui(e) {
  let t, n = (
    /*isDrawing*/
    e[1] && Zt(e)
  );
  return {
    c() {
      t = I("g"), n && n.c(), f(t, "class", "a9s-annotation a9s-rubberband");
    },
    m(o, i) {
      O(o, t, i), n && n.m(t, null);
    },
    p(o, [i]) {
      /*isDrawing*/
      o[1] ? n ? n.p(o, i) : (n = Zt(o), n.c(), n.m(t, null)) : n && (n.d(1), n = null);
    },
    i: q,
    o: q,
    d(o) {
      o && v(t), n && n.d();
    }
  };
}
function Hi(e, t, n) {
  let o;
  const i = be();
  let { addEventListener: r } = t, { drawingMode: s } = t, { annotation: a } = t, { transform: l } = t, { viewportScale: u = 1 } = t, { style: h = void 0 } = t, c = { fillOpacity: 1 }, m = [], d = "", g = !1;
  const A = (_) => {
    if (s === "drag" && m.length === 0) {
      n(1, g = !0);
      const S = l.elementToImage(_.offsetX, _.offsetY);
      m.push([...S, _.pressure]), n(0, d = Qe(m, Je));
    }
  }, M = (_) => {
    if (g) {
      const S = l.elementToImage(_.offsetX, _.offsetY);
      m.push([...S, _.pressure]), n(0, d = Qe(m, Je, !0));
    }
  }, w = (_) => {
    g && p();
  }, p = () => {
    const _ = {
      type: z.FREEHAND,
      geometry: {
        bounds: Pe(m.map((S) => [S[0], S[1]])),
        points: m
      }
    };
    n(1, g = !1), m = [], i("create", _);
  };
  return Se(() => {
    r("pointerdown", A, !0), r("pointermove", M), r("pointerup", w, !0);
  }), e.$$set = (_) => {
    "addEventListener" in _ && n(3, r = _.addEventListener), "drawingMode" in _ && n(4, s = _.drawingMode), "annotation" in _ && n(5, a = _.annotation), "transform" in _ && n(6, l = _.transform), "viewportScale" in _ && n(7, u = _.viewportScale), "style" in _ && n(8, h = _.style);
  }, e.$$.update = () => {
    e.$$.dirty & /*viewportScale*/
    128, e.$$.dirty & /*annotation, style*/
    288 && n(2, o = Te(a, h, c));
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
class Fi extends $ {
  constructor(t) {
    super(), x(this, t, Hi, Ui, Z, {
      addEventListener: 3,
      drawingMode: 4,
      annotation: 5,
      transform: 6,
      viewportScale: 7,
      style: 8
    });
  }
}
function Jt(e) {
  let t, n;
  return {
    c() {
      t = I("line"), n = I("line"), f(t, "class", "a9s-outer"), f(
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
      ), f(t, "stroke-linecap", "round"), f(t, "stroke-linejoin", "round"), f(n, "class", "a9s-inner"), f(
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
      ), f(n, "stroke-linecap", "round"), f(n, "stroke-linejoin", "round");
    },
    m(o, i) {
      O(o, t, i), O(o, n, i);
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
      o && v(t), o && v(n);
    }
  };
}
function Gi(e) {
  let t, n = (
    /*origin*/
    e[0] && Jt(e)
  );
  return {
    c() {
      t = I("g"), n && n.c(), f(t, "class", "a9s-annotation a9s-rubberband");
    },
    m(o, i) {
      O(o, t, i), n && n.m(t, null);
    },
    p(o, [i]) {
      /*origin*/
      o[0] ? n ? n.p(o, i) : (n = Jt(o), n.c(), n.m(t, null)) : n && (n.d(1), n = null);
    },
    i: q,
    o: q,
    d(o) {
      o && v(t), n && n.d();
    }
  };
}
function Vi(e, t, n) {
  const o = be();
  let { addEventListener: i } = t, { drawingMode: r } = t, { transform: s } = t, a, l, u, h, c, m, d;
  const g = (p) => {
    a = performance.now(), r === "drag" && (n(0, l = s.elementToImage(p.offsetX, p.offsetY)), u = l, n(1, h = l[0]), n(2, c = l[1]), n(3, m = l[0] + 1), n(4, d = l[1] + 1));
  }, A = (p) => {
    l && (u = s.elementToImage(p.offsetX, p.offsetY), n(3, m = u[0]), n(4, d = u[1]));
  }, M = (p) => {
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
        type: z.LINE,
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
  return Se(() => {
    i("pointerdown", g), i("pointermove", A), i("pointerup", M, !0);
  }), e.$$set = (p) => {
    "addEventListener" in p && n(5, i = p.addEventListener), "drawingMode" in p && n(6, r = p.drawingMode), "transform" in p && n(7, s = p.transform);
  }, [l, h, c, m, d, i, r, s];
}
class zi extends $ {
  constructor(t) {
    super(), x(this, t, Vi, Gi, Z, {
      addEventListener: 5,
      drawingMode: 6,
      transform: 7
    });
  }
}
const Tt = /* @__PURE__ */ new Map([
  ["rectangle", { tool: vi }],
  ["polygon", { tool: Xi }],
  ["ellipse", { tool: Ci }],
  ["freehand", { tool: Fi }],
  ["line", { tool: zi }]
]), Et = () => [...Tt.keys()], Sn = (e) => Tt.get(e), ji = (e, t, n) => Tt.set(e, { tool: t, opts: n });
function qi(e) {
  let t, n, o, i, r;
  return {
    c() {
      t = I("g"), n = I("ellipse"), i = I("ellipse"), f(n, "class", "a9s-outer"), f(n, "style", o = /*computedStyle*/
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
      O(s, t, a), re(t, n), re(t, i);
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
    i: q,
    o: q,
    d(s) {
      s && v(t);
    }
  };
}
function Ki(e, t, n) {
  let o, { annotation: i } = t, { geom: r } = t, { style: s = void 0 } = t;
  const { cx: a, cy: l, rx: u, ry: h } = r;
  return e.$$set = (c) => {
    "annotation" in c && n(0, i = c.annotation), "geom" in c && n(6, r = c.geom), "style" in c && n(7, s = c.style);
  }, e.$$.update = () => {
    e.$$.dirty & /*annotation, style*/
    129 && n(1, o = Te(i, s));
  }, [i, o, a, l, u, h, r, s];
}
class Wi extends $ {
  constructor(t) {
    super(), x(this, t, Ki, qi, Z, { annotation: 0, geom: 6, style: 7 });
  }
}
function Zi(e) {
  let t, n, o, i, r;
  return {
    c() {
      t = I("g"), n = I("polygon"), i = I("polygon"), f(n, "class", "a9s-outer"), f(n, "style", o = /*computedStyle*/
      e[1] ? "display:none;" : void 0), f(
        n,
        "points",
        /*points*/
        e[2].map(Ji).join(" ")
      ), f(i, "class", "a9s-inner"), f(
        i,
        "style",
        /*computedStyle*/
        e[1]
      ), f(
        i,
        "points",
        /*points*/
        e[2].map(Qi).join(" ")
      ), f(t, "data-id", r = /*annotation*/
      e[0].id);
    },
    m(s, a) {
      O(s, t, a), re(t, n), re(t, i);
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
    i: q,
    o: q,
    d(s) {
      s && v(t);
    }
  };
}
const Ji = (e) => e.join(","), Qi = (e) => e.join(",");
function xi(e, t, n) {
  let o, { annotation: i } = t, { geom: r } = t, { style: s = void 0 } = t;
  const { points: a } = r;
  return e.$$set = (l) => {
    "annotation" in l && n(0, i = l.annotation), "geom" in l && n(3, r = l.geom), "style" in l && n(4, s = l.style);
  }, e.$$.update = () => {
    e.$$.dirty & /*annotation, style*/
    17 && n(1, o = Te(i, s));
  }, [i, o, a, r, s];
}
class $i extends $ {
  constructor(t) {
    super(), x(this, t, xi, Zi, Z, { annotation: 0, geom: 3, style: 4 });
  }
}
function er(e) {
  let t, n, o, i, r;
  return {
    c() {
      t = I("g"), n = I("rect"), i = I("rect"), f(n, "class", "a9s-outer"), f(n, "style", o = /*computedStyle*/
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
      O(s, t, a), re(t, n), re(t, i);
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
    i: q,
    o: q,
    d(s) {
      s && v(t);
    }
  };
}
function tr(e, t, n) {
  let o, i, r, s, a, { annotation: l } = t, { geom: u } = t, { style: h = void 0 } = t;
  return e.$$set = (c) => {
    "annotation" in c && n(0, l = c.annotation), "geom" in c && n(6, u = c.geom), "style" in c && n(7, h = c.style);
  }, e.$$.update = () => {
    e.$$.dirty & /*annotation, style*/
    129 && n(5, o = Te(l, h)), e.$$.dirty & /*geom*/
    64 && n(4, { x: i, y: r, w: s, h: a } = u, i, (n(3, r), n(6, u)), (n(2, s), n(6, u)), (n(1, a), n(6, u)));
  }, [l, a, s, r, i, o, u, h];
}
class nr extends $ {
  constructor(t) {
    super(), x(this, t, tr, er, Z, { annotation: 0, geom: 6, style: 7 });
  }
}
function or(e) {
  let t, n, o;
  return {
    c() {
      t = I("g"), n = I("path"), f(
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
      O(i, t, r), re(t, n);
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
    i: q,
    o: q,
    d(i) {
      i && v(t);
    }
  };
}
function ir(e, t, n) {
  let o, i, { annotation: r } = t, { geom: s } = t, { style: a = void 0 } = t, l = { fillOpacity: 1 };
  const { points: u } = s;
  return e.$$set = (h) => {
    "annotation" in h && n(0, r = h.annotation), "geom" in h && n(3, s = h.geom), "style" in h && n(4, a = h.style);
  }, e.$$.update = () => {
    e.$$.dirty & /*annotation, style*/
    17 && n(2, o = Te(r, a, l));
  }, n(1, i = Qe(u, Je, !0)), [r, i, o, s, a];
}
class rr extends $ {
  constructor(t) {
    super(), x(this, t, ir, or, Z, { annotation: 0, geom: 3, style: 4 });
  }
}
function sr(e) {
  let t, n, o, i, r, s, a, l, u;
  return {
    c() {
      t = I("g"), n = I("defs"), o = I("marker"), i = I("path"), r = I("line"), a = I("line"), f(i, "stroke-linecap", "round"), f(i, "stroke-linejoin", "round"), f(i, "d", "M 0 0 L 10 5 L 0 10 z"), f(o, "id", "arrow"), f(o, "viewBox", "0 0 10 10"), f(o, "refX", "9"), f(o, "refY", "5"), f(o, "markerWidth", "6"), f(o, "markerHeight", "6"), f(o, "orient", "auto-start-reverse"), f(r, "class", "a9s-outer"), f(r, "style", s = /*computedStyle*/
      e[5] ? "display:none;" : "stroke-width: 3"), f(
        r,
        "x1",
        /*x1*/
        e[4]
      ), f(
        r,
        "y1",
        /*y1*/
        e[3]
      ), f(
        r,
        "x2",
        /*x2*/
        e[2]
      ), f(
        r,
        "y2",
        /*y2*/
        e[1]
      ), f(r, "stroke-linecap", "round"), f(r, "stroke-linejoin", "round"), f(r, "marker-end", "url(#arrow)"), f(a, "class", "a9s-inner"), f(a, "style", l = /*computedStyle*/
      e[5] || "stroke-width: 3"), f(
        a,
        "x1",
        /*x1*/
        e[4]
      ), f(
        a,
        "y1",
        /*y1*/
        e[3]
      ), f(
        a,
        "x2",
        /*x2*/
        e[2]
      ), f(
        a,
        "y2",
        /*y2*/
        e[1]
      ), f(a, "stroke-linecap", "round"), f(a, "stroke-linejoin", "round"), f(a, "marker-end", "url(#arrow)"), f(t, "data-id", u = /*annotation*/
      e[0].id);
    },
    m(h, c) {
      O(h, t, c), re(t, n), re(n, o), re(o, i), re(t, r), re(t, a);
    },
    p(h, [c]) {
      c & /*computedStyle*/
      32 && s !== (s = /*computedStyle*/
      h[5] ? "display:none;" : "stroke-width: 3") && f(r, "style", s), c & /*x1*/
      16 && f(
        r,
        "x1",
        /*x1*/
        h[4]
      ), c & /*y1*/
      8 && f(
        r,
        "y1",
        /*y1*/
        h[3]
      ), c & /*x2*/
      4 && f(
        r,
        "x2",
        /*x2*/
        h[2]
      ), c & /*y2*/
      2 && f(
        r,
        "y2",
        /*y2*/
        h[1]
      ), c & /*computedStyle*/
      32 && l !== (l = /*computedStyle*/
      h[5] || "stroke-width: 3") && f(a, "style", l), c & /*x1*/
      16 && f(
        a,
        "x1",
        /*x1*/
        h[4]
      ), c & /*y1*/
      8 && f(
        a,
        "y1",
        /*y1*/
        h[3]
      ), c & /*x2*/
      4 && f(
        a,
        "x2",
        /*x2*/
        h[2]
      ), c & /*y2*/
      2 && f(
        a,
        "y2",
        /*y2*/
        h[1]
      ), c & /*annotation*/
      1 && u !== (u = /*annotation*/
      h[0].id) && f(t, "data-id", u);
    },
    i: q,
    o: q,
    d(h) {
      h && v(t);
    }
  };
}
function lr(e, t, n) {
  let o, i, r, s, a, { annotation: l } = t, { geom: u } = t, { style: h = void 0 } = t;
  return e.$$set = (c) => {
    "annotation" in c && n(0, l = c.annotation), "geom" in c && n(6, u = c.geom), "style" in c && n(7, h = c.style);
  }, e.$$.update = () => {
    e.$$.dirty & /*annotation, style*/
    129 && n(5, o = Te(l, h)), e.$$.dirty & /*geom*/
    64 && n(4, { x1: i, y1: r, x2: s, y2: a } = u, i, (n(3, r), n(6, u)), (n(2, s), n(6, u)), (n(1, a), n(6, u)));
  }, [l, a, s, r, i, o, u, h];
}
class ar extends $ {
  constructor(t) {
    super(), x(this, t, lr, sr, Z, { annotation: 0, geom: 6, style: 7 });
  }
}
const Hr = {
  elementToImage: (e, t) => [e, t]
}, fr = (e) => ({
  elementToImage: (t, n) => {
    const o = e.getBoundingClientRect(), i = e.createSVGPoint();
    i.x = t + o.x, i.y = n + o.y;
    const { x: r, y: s } = i.matrixTransform(e.getScreenCTM().inverse());
    return [r, s];
  }
}), cr = 250, ur = (e, t) => {
  const n = be();
  let o;
  return { onPointerDown: () => o = performance.now(), onPointerUp: (s) => {
    if (performance.now() - o < cr) {
      const { x: l, y: u } = dr(s, e), h = t.getAt(l, u);
      h ? n("click", { originalEvent: s, annotation: h }) : n("click", { originalEvent: s });
    }
  } };
}, dr = (e, t) => {
  const n = t.createSVGPoint(), o = t.getBoundingClientRect(), i = e.clientX - o.x, r = e.clientY - o.y, { left: s, top: a } = t.getBoundingClientRect();
  return n.x = i + s, n.y = r + a, n.matrixTransform(t.getScreenCTM().inverse());
};
function Qt(e, t, n) {
  const o = e.slice();
  return o[29] = t[n], o;
}
function xt(e, t, n) {
  const o = e.slice();
  return o[32] = t[n], o;
}
function ht(e) {
  const t = e.slice(), n = (
    /*annotation*/
    t[32].target.selector
  );
  return t[35] = n, t;
}
function $t(e) {
  let t = (
    /*annotation*/
    e[32].id
  ), n, o, i = en(e);
  return {
    c() {
      i.c(), n = we();
    },
    m(r, s) {
      i.m(r, s), O(r, n, s), o = !0;
    },
    p(r, s) {
      s[0] & /*$store*/
      8192 && Z(t, t = /*annotation*/
      r[32].id) ? (ye(), j(i, 1, 1, q), _e(), i = en(r), i.c(), V(i, 1), i.m(n.parentNode, n)) : i.p(r, s);
    },
    i(r) {
      o || (V(i), o = !0);
    },
    o(r) {
      j(i), o = !1;
    },
    d(r) {
      r && v(n), i.d(r);
    }
  };
}
function hr(e) {
  let t, n;
  return t = new ar({
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
      le(t, o, i), n = !0;
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
      j(t.$$.fragment, o), n = !1;
    },
    d(o) {
      ae(t, o);
    }
  };
}
function mr(e) {
  let t, n;
  return t = new rr({
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
      le(t, o, i), n = !0;
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
      j(t.$$.fragment, o), n = !1;
    },
    d(o) {
      ae(t, o);
    }
  };
}
function gr(e) {
  let t, n;
  return t = new $i({
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
      le(t, o, i), n = !0;
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
      j(t.$$.fragment, o), n = !1;
    },
    d(o) {
      ae(t, o);
    }
  };
}
function pr(e) {
  let t, n;
  return t = new nr({
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
      le(t, o, i), n = !0;
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
      j(t.$$.fragment, o), n = !1;
    },
    d(o) {
      ae(t, o);
    }
  };
}
function yr(e) {
  let t, n;
  return t = new Wi({
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
      le(t, o, i), n = !0;
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
      j(t.$$.fragment, o), n = !1;
    },
    d(o) {
      ae(t, o);
    }
  };
}
function en(e) {
  let t, n, o, i;
  const r = [
    yr,
    pr,
    gr,
    mr,
    hr
  ], s = [];
  function a(l, u) {
    return (
      /*selector*/
      l[35].type === z.ELLIPSE ? 0 : (
        /*selector*/
        l[35].type === z.RECTANGLE ? 1 : (
          /*selector*/
          l[35].type === z.POLYGON ? 2 : (
            /*selector*/
            l[35].type === z.FREEHAND ? 3 : (
              /*selector*/
              l[35].type === z.LINE ? 4 : -1
            )
          )
        )
      )
    );
  }
  return ~(t = a(e)) && (n = s[t] = r[t](e)), {
    c() {
      n && n.c(), o = we();
    },
    m(l, u) {
      ~t && s[t].m(l, u), O(l, o, u), i = !0;
    },
    p(l, u) {
      let h = t;
      t = a(l), t === h ? ~t && s[t].p(l, u) : (n && (ye(), j(s[h], 1, 1, () => {
        s[h] = null;
      }), _e()), ~t ? (n = s[t], n ? n.p(l, u) : (n = s[t] = r[t](l), n.c()), V(n, 1), n.m(o.parentNode, o)) : n = null);
    },
    i(l) {
      i || (V(n), i = !0);
    },
    o(l) {
      j(n), i = !1;
    },
    d(l) {
      ~t && s[t].d(l), l && v(o);
    }
  };
}
function tn(e) {
  let t = !/*isEditable*/
  e[7](
    /*annotation*/
    e[32]
  ), n, o, i = t && $t(ht(e));
  return {
    c() {
      i && i.c(), n = we();
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
      )), t ? i ? (i.p(ht(r), s), s[0] & /*isEditable, $store*/
      8320 && V(i, 1)) : (i = $t(ht(r)), i.c(), V(i, 1), i.m(n.parentNode, n)) : i && (ye(), j(i, 1, 1, () => {
        i = null;
      }), _e());
    },
    i(r) {
      o || (V(i), o = !0);
    },
    o(r) {
      j(i), o = !1;
    },
    d(r) {
      i && i.d(r), r && v(n);
    }
  };
}
function nn(e) {
  let t, n, o, i;
  const r = [wr, _r], s = [];
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
      n && n.c(), o = we();
    },
    m(l, u) {
      ~t && s[t].m(l, u), O(l, o, u), i = !0;
    },
    p(l, u) {
      let h = t;
      t = a(l), t === h ? ~t && s[t].p(l, u) : (n && (ye(), j(s[h], 1, 1, () => {
        s[h] = null;
      }), _e()), ~t ? (n = s[t], n ? n.p(l, u) : (n = s[t] = r[t](l), n.c()), V(n, 1), n.m(o.parentNode, o)) : n = null);
    },
    i(l) {
      i || (V(n), i = !0);
    },
    o(l) {
      j(n), i = !1;
    },
    d(l) {
      ~t && s[t].d(l), l && v(o);
    }
  };
}
function _r(e) {
  let t = (
    /*toolName*/
    e[2]
  ), n, o, i = on(e);
  return {
    c() {
      i.c(), n = we();
    },
    m(r, s) {
      i.m(r, s), O(r, n, s), o = !0;
    },
    p(r, s) {
      s[0] & /*toolName*/
      4 && Z(t, t = /*toolName*/
      r[2]) ? (ye(), j(i, 1, 1, q), _e(), i = on(r), i.c(), V(i, 1), i.m(n.parentNode, n)) : i.p(r, s);
    },
    i(r) {
      o || (V(i), o = !0);
    },
    o(r) {
      j(i), o = !1;
    },
    d(r) {
      r && v(n), i.d(r);
    }
  };
}
function wr(e) {
  let t, n, o = (
    /*editableAnnotations*/
    e[6]
  ), i = [];
  for (let s = 0; s < o.length; s += 1)
    i[s] = sn(Qt(e, o, s));
  const r = (s) => j(i[s], 1, 1, () => {
    i[s] = null;
  });
  return {
    c() {
      for (let s = 0; s < i.length; s += 1)
        i[s].c();
      t = we();
    },
    m(s, a) {
      for (let l = 0; l < i.length; l += 1)
        i[l] && i[l].m(s, a);
      O(s, t, a), n = !0;
    },
    p(s, a) {
      if (a[0] & /*editableAnnotations, drawingEl, style, transform, $scale, onChangeSelected*/
      279634) {
        o = /*editableAnnotations*/
        s[6];
        let l;
        for (l = 0; l < o.length; l += 1) {
          const u = Qt(s, o, l);
          i[l] ? (i[l].p(u, a), V(i[l], 1)) : (i[l] = sn(u), i[l].c(), V(i[l], 1), i[l].m(t.parentNode, t));
        }
        for (ye(), l = o.length; l < i.length; l += 1)
          r(l);
        _e();
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
        j(i[a]);
      n = !1;
    },
    d(s) {
      At(i, s), s && v(t);
    }
  };
}
function on(e) {
  let t, n;
  return t = new Ti({
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
      le(t, o, i), n = !0;
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
      j(t.$$.fragment, o), n = !1;
    },
    d(o) {
      ae(t, o);
    }
  };
}
function rn(e) {
  let t, n;
  return t = new Mi({
    props: {
      target: (
        /*drawingEl*/
        e[4]
      ),
      editor: Vt(
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
    K(
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
      le(t, o, i), n = !0;
    },
    p(o, i) {
      e = o;
      const r = {};
      i[0] & /*drawingEl*/
      16 && (r.target = /*drawingEl*/
      e[4]), i[0] & /*editableAnnotations*/
      64 && (r.editor = Vt(
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
      j(t.$$.fragment, o), n = !1;
    },
    d(o) {
      ae(t, o);
    }
  };
}
function sn(e) {
  let t = (
    /*editable*/
    e[29].id
  ), n, o, i = rn(e);
  return {
    c() {
      i.c(), n = we();
    },
    m(r, s) {
      i.m(r, s), O(r, n, s), o = !0;
    },
    p(r, s) {
      s[0] & /*editableAnnotations*/
      64 && Z(t, t = /*editable*/
      r[29].id) ? (ye(), j(i, 1, 1, q), _e(), i = rn(r), i.c(), V(i, 1), i.m(n.parentNode, n)) : i.p(r, s);
    },
    i(r) {
      o || (V(i), o = !0);
    },
    o(r) {
      j(i), o = !1;
    },
    d(r) {
      r && v(n), i.d(r);
    }
  };
}
function br(e) {
  let t, n, o, i, r, s, a = (
    /*$store*/
    e[13]
  ), l = [];
  for (let c = 0; c < a.length; c += 1)
    l[c] = tn(xt(e, a, c));
  const u = (c) => j(l[c], 1, 1, () => {
    l[c] = null;
  });
  let h = (
    /*drawingEl*/
    e[4] && nn(e)
  );
  return {
    c() {
      t = I("svg"), n = I("g");
      for (let c = 0; c < l.length; c += 1)
        l[c].c();
      o = I("g"), h && h.c(), f(o, "class", "drawing"), f(t, "class", "a9s-annotationlayer"), Ot(
        t,
        "drawing",
        /*tool*/
        e[12]
      );
    },
    m(c, m) {
      O(c, t, m), re(t, n);
      for (let d = 0; d < l.length; d += 1)
        l[d] && l[d].m(n, null);
      re(t, o), h && h.m(o, null), e[25](o), e[26](t), i = !0, r || (s = [
        W(t, "pointerup", function() {
          K(
            /*onPointerUp*/
            e[8]
          ) && e[8].apply(this, arguments);
        }),
        W(t, "pointerdown", function() {
          K(
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
          const g = xt(e, a, d);
          l[d] ? (l[d].p(g, m), V(l[d], 1)) : (l[d] = tn(g), l[d].c(), V(l[d], 1), l[d].m(n, null));
        }
        for (ye(), d = a.length; d < l.length; d += 1)
          u(d);
        _e();
      }
      /*drawingEl*/
      e[4] ? h ? (h.p(e, m), m[0] & /*drawingEl*/
      16 && V(h, 1)) : (h = nn(e), h.c(), V(h, 1), h.m(o, null)) : h && (ye(), j(h, 1, 1, () => {
        h = null;
      }), _e()), (!i || m[0] & /*tool*/
      4096) && Ot(
        t,
        "drawing",
        /*tool*/
        e[12]
      );
    },
    i(c) {
      if (!i) {
        for (let m = 0; m < a.length; m += 1)
          V(l[m]);
        V(h), i = !0;
      }
    },
    o(c) {
      l = l.filter(Boolean);
      for (let m = 0; m < l.length; m += 1)
        j(l[m]);
      j(h), i = !1;
    },
    d(c) {
      c && v(t), At(l, c), h && h.d(), e[25](null), e[26](null), r = !1, pe(s);
    }
  };
}
function Er(e, t, n) {
  let o, i, r, s, a, l, u, h, c, m, d = q, g = () => (d(), d = un(b, (P) => n(14, m = P)), b);
  e.$$.on_destroy.push(() => d());
  let { drawingEnabled: A } = t, { image: M } = t, { preferredDrawingMode: w } = t, { state: p } = t, { style: _ = void 0 } = t, { toolName: S = Et().length > 0 ? Et()[0] : void 0 } = t, { user: T } = t, B, R, b;
  Se(() => g(n(5, b = Ii(M, R))));
  const { selection: y, store: E } = p;
  vt(e, y, (P) => n(24, h = P)), vt(e, E, (P) => n(13, c = P));
  let k = null, D = null;
  const X = (P) => {
    E.unobserve(k);
    const H = P.filter(({ editable: U }) => U).map(({ id: U }) => U);
    H.length > 0 ? (n(6, D = H.map((U) => E.getAnnotation(U))), k = (U) => {
      const { updated: fe } = U.changes;
      n(6, D = fe.map((ne) => ne.newValue));
    }, E.observe(k, { annotations: H })) : n(6, D = null);
  }, N = (P) => {
    const H = wn(), U = {
      id: H,
      bodies: [],
      target: {
        annotation: H,
        selector: P.detail,
        creator: T,
        created: /* @__PURE__ */ new Date()
      }
    };
    E.addAnnotation(U), y.setSelected(U.id);
  }, C = (P) => (H) => {
    var te;
    const { target: U } = P, fe = 10 * 60 * 1e3, ne = ((te = U.creator) == null ? void 0 : te.id) !== T.id || !U.created || (/* @__PURE__ */ new Date()).getTime() - U.created.getTime() > fe;
    E.updateTarget({
      ...U,
      selector: H.detail,
      created: ne ? U.created : /* @__PURE__ */ new Date(),
      updated: ne ? /* @__PURE__ */ new Date() : null,
      updatedBy: ne ? T : null
    });
  };
  function de(P) {
    Ze[P ? "unshift" : "push"](() => {
      B = P, n(4, B);
    });
  }
  function G(P) {
    Ze[P ? "unshift" : "push"](() => {
      R = P, n(3, R);
    });
  }
  return e.$$set = (P) => {
    "drawingEnabled" in P && n(0, A = P.drawingEnabled), "image" in P && n(19, M = P.image), "preferredDrawingMode" in P && n(20, w = P.preferredDrawingMode), "state" in P && n(21, p = P.state), "style" in P && n(1, _ = P.style), "toolName" in P && n(2, S = P.toolName), "user" in P && n(22, T = P.user);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*toolName*/
    4 && n(12, { tool: o, opts: i } = Sn(S), o, (n(23, i), n(2, S))), e.$$.dirty[0] & /*opts, preferredDrawingMode*/
    9437184 && n(11, r = (i == null ? void 0 : i.drawingMode) || w), e.$$.dirty[0] & /*svgEl*/
    8 && n(10, s = fr(R)), e.$$.dirty[0] & /*svgEl*/
    8 && n(9, { onPointerDown: a, onPointerUp: l } = ur(R, E), a, (n(8, l), n(3, R))), e.$$.dirty[0] & /*$selection*/
    16777216 && n(7, u = (P) => h.selected.find((H) => H.id === P.id && H.editable)), e.$$.dirty[0] & /*$selection*/
    16777216 && X(h.selected);
  }, [
    A,
    _,
    S,
    R,
    B,
    b,
    D,
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
    N,
    C,
    M,
    w,
    p,
    T,
    i,
    h,
    de,
    G
  ];
}
class Ar extends $ {
  constructor(t) {
    super(), x(
      this,
      t,
      Er,
      br,
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
function Mr(e, t, n, o, i) {
  Tn(e, t, n || 0, o || e.length - 1, i || Sr);
}
function Tn(e, t, n, o, i) {
  for (; o > n; ) {
    if (o - n > 600) {
      var r = o - n + 1, s = t - n + 1, a = Math.log(r), l = 0.5 * Math.exp(2 * a / 3), u = 0.5 * Math.sqrt(a * l * (r - l) / r) * (s - r / 2 < 0 ? -1 : 1), h = Math.max(n, Math.floor(t - s * l / r + u)), c = Math.min(o, Math.floor(t + (r - s) * l / r + u));
      Tn(e, t, h, c, i);
    }
    var m = e[t], d = n, g = o;
    for (ze(e, n, t), i(e[o], m) > 0 && ze(e, n, o); d < g; ) {
      for (ze(e, d, g), d++, g--; i(e[d], m) < 0; )
        d++;
      for (; i(e[g], m) > 0; )
        g--;
    }
    i(e[n], m) === 0 ? ze(e, n, g) : (g++, ze(e, g, o)), g <= t && (n = g + 1), t <= g && (o = g - 1);
  }
}
function ze(e, t, n) {
  var o = e[t];
  e[t] = e[n], e[n] = o;
}
function Sr(e, t) {
  return e < t ? -1 : e > t ? 1 : 0;
}
class Tr {
  constructor(t = 9) {
    this._maxEntries = Math.max(4, t), this._minEntries = Math.max(2, Math.ceil(this._maxEntries * 0.4)), this.clear();
  }
  all() {
    return this._all(this.data, []);
  }
  search(t) {
    let n = this.data;
    const o = [];
    if (!rt(t, n))
      return o;
    const i = this.toBBox, r = [];
    for (; n; ) {
      for (let s = 0; s < n.children.length; s++) {
        const a = n.children[s], l = n.leaf ? i(a) : a;
        rt(t, l) && (n.leaf ? o.push(a) : gt(t, l) ? this._all(a, o) : r.push(a));
      }
      n = r.pop();
    }
    return o;
  }
  collides(t) {
    let n = this.data;
    if (!rt(t, n))
      return !1;
    const o = [];
    for (; n; ) {
      for (let i = 0; i < n.children.length; i++) {
        const r = n.children[i], s = n.leaf ? this.toBBox(r) : r;
        if (rt(t, s)) {
          if (n.leaf || gt(t, s))
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
        const h = Lr(t, o.children, n);
        if (h !== -1)
          return o.children.splice(h, 1), r.push(o), this._condense(r), this;
      }
      !u && !o.leaf && gt(o, i) ? (r.push(o), s.push(a), a = 0, l = o, o = o.children[0]) : l ? (a++, o = l.children[a], u = !1) : o = null;
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
    ln(t, n, o, u, this.compareMinX);
    for (let h = n; h <= o; h += u) {
      const c = Math.min(h + u - 1, o);
      ln(t, h, c, l, this.compareMinY);
      for (let m = h; m <= c; m += l) {
        const d = Math.min(m + l - 1, c);
        a.children.push(this._build(t, m, d, i - 1));
      }
    }
    return Re(a, this.toBBox), a;
  }
  _chooseSubtree(t, n, o, i) {
    for (; i.push(n), !(n.leaf || i.length - 1 === o); ) {
      let r = 1 / 0, s = 1 / 0, a;
      for (let l = 0; l < n.children.length; l++) {
        const u = n.children[l], h = mt(u), c = Or(t, u) - h;
        c < s ? (s = c, r = h < r ? h : r, a = u) : c === s && h < r && (r = h, a = u);
      }
      n = a || n.children[0];
    }
    return n;
  }
  _insert(t, n, o) {
    const i = o ? t : this.toBBox(t), r = [], s = this._chooseSubtree(i, this.data, n, r);
    for (s.children.push(t), qe(s, i); n >= 0 && r[n].children.length > this._maxEntries; )
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
      const l = je(t, 0, a, this.toBBox), u = je(t, a, o, this.toBBox), h = Pr(l, u), c = mt(l) + mt(u);
      h < r ? (r = h, i = a, s = c < s ? c : s) : h === r && c < s && (s = c, i = a);
    }
    return i || o - n;
  }
  // sorts node children by the best axis for split
  _chooseSplitAxis(t, n, o) {
    const i = t.leaf ? this.compareMinX : kr, r = t.leaf ? this.compareMinY : vr, s = this._allDistMargin(t, n, o, i), a = this._allDistMargin(t, n, o, r);
    s < a && t.children.sort(i);
  }
  // total margin of all possible split distributions where each node is at least m full
  _allDistMargin(t, n, o, i) {
    t.children.sort(i);
    const r = this.toBBox, s = je(t, 0, n, r), a = je(t, o - n, o, r);
    let l = it(s) + it(a);
    for (let u = n; u < o - n; u++) {
      const h = t.children[u];
      qe(s, t.leaf ? r(h) : h), l += it(s);
    }
    for (let u = o - n - 1; u >= n; u--) {
      const h = t.children[u];
      qe(a, t.leaf ? r(h) : h), l += it(a);
    }
    return l;
  }
  _adjustParentBBoxes(t, n, o) {
    for (let i = o; i >= 0; i--)
      qe(n[i], t);
  }
  _condense(t) {
    for (let n = t.length - 1, o; n >= 0; n--)
      t[n].children.length === 0 ? n > 0 ? (o = t[n - 1].children, o.splice(o.indexOf(t[n]), 1)) : this.clear() : Re(t[n], this.toBBox);
  }
}
function Lr(e, t, n) {
  if (!n)
    return t.indexOf(e);
  for (let o = 0; o < t.length; o++)
    if (n(e, t[o]))
      return o;
  return -1;
}
function Re(e, t) {
  je(e, 0, e.children.length, t, e);
}
function je(e, t, n, o, i) {
  i || (i = Ce(null)), i.minX = 1 / 0, i.minY = 1 / 0, i.maxX = -1 / 0, i.maxY = -1 / 0;
  for (let r = t; r < n; r++) {
    const s = e.children[r];
    qe(i, e.leaf ? o(s) : s);
  }
  return i;
}
function qe(e, t) {
  return e.minX = Math.min(e.minX, t.minX), e.minY = Math.min(e.minY, t.minY), e.maxX = Math.max(e.maxX, t.maxX), e.maxY = Math.max(e.maxY, t.maxY), e;
}
function kr(e, t) {
  return e.minX - t.minX;
}
function vr(e, t) {
  return e.minY - t.minY;
}
function mt(e) {
  return (e.maxX - e.minX) * (e.maxY - e.minY);
}
function it(e) {
  return e.maxX - e.minX + (e.maxY - e.minY);
}
function Or(e, t) {
  return (Math.max(t.maxX, e.maxX) - Math.min(t.minX, e.minX)) * (Math.max(t.maxY, e.maxY) - Math.min(t.minY, e.minY));
}
function Pr(e, t) {
  const n = Math.max(e.minX, t.minX), o = Math.max(e.minY, t.minY), i = Math.min(e.maxX, t.maxX), r = Math.min(e.maxY, t.maxY);
  return Math.max(0, i - n) * Math.max(0, r - o);
}
function gt(e, t) {
  return e.minX <= t.minX && e.minY <= t.minY && t.maxX <= e.maxX && t.maxY <= e.maxY;
}
function rt(e, t) {
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
function ln(e, t, n, o, i) {
  const r = [t, n];
  for (; r.length; ) {
    if (n = r.pop(), t = r.pop(), n - t <= o)
      continue;
    const s = t + Math.ceil((n - t) / o / 2) * o;
    Mr(e, s, t, n, i), r.push(t, s, s, n);
  }
}
const Ir = () => {
  const e = new Tr(), t = /* @__PURE__ */ new Map(), n = () => [...t.values()], o = () => {
    e.clear(), t.clear();
  }, i = (c) => {
    const { minX: m, minY: d, maxX: g, maxY: A } = c.selector.geometry.bounds, M = { minX: m, minY: d, maxX: g, maxY: A, target: c };
    e.insert(M), t.set(c.annotation, M);
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
      }).map((A) => A.target).filter((A) => A.selector.type === z.RECTANGLE || Un(A.selector, c, m));
      if (g.length > 0)
        return g.sort((A, M) => _t(A.selector) - _t(M.selector)), g[0];
    },
    getIntersecting: (c, m, d, g) => e.search({
      minX: c,
      minY: m,
      maxX: c + d,
      maxY: m + g
    }).map((A) => A.target),
    insert: i,
    remove: r,
    set: (c, m = !0) => {
      m && o();
      const d = c.map((g) => {
        const { minX: A, minY: M, maxX: w, maxY: p } = g.selector.geometry.bounds;
        return { minX: A, minY: M, maxX: w, maxY: p, target: g };
      });
      d.forEach((g) => t.set(g.target.annotation, g)), e.load(d);
    },
    size: () => e.all().length,
    update: (c, m) => {
      r(c), i(m);
    }
  };
}, Dr = (e) => {
  const t = Bo(), n = Ir(), o = Mo(t, e.pointerSelectAction), i = Ao(t), r = Co();
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
}, Br = (e) => {
  const t = Dr(e);
  return {
    ...t,
    store: Yo(t.store)
  };
}, Yr = (e) => {
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
}, Xr = (e) => {
  const t = Yr(e), n = t > 0.6 ? "dark" : "light";
  return console.log(`[Annotorious] Image brightness: ${t.toFixed(1)}. Setting ${n} theme.`), n;
}, an = (e, t, n) => t.setAttribute("data-theme", n === "auto" ? Xr(e) : n), Rr = (e, t) => ({
  ...e,
  drawingEnabled: e.drawingEnabled === void 0 ? t.drawingEnabled : e.drawingEnabled,
  drawingMode: e.drawingMode || t.drawingMode,
  pointerSelectAction: e.pointerSelectAction || t.pointerSelectAction,
  theme: e.theme || t.theme
}), fn = navigator.userAgent.indexOf("Mac OS X") !== -1, Nr = (e, t) => {
  const n = t || document, o = (s) => {
    s.key === "Z" && s.ctrlKey ? e.undo() : s.key === "Y" && s.ctrlKey && e.redo();
  }, i = (s) => {
    s.key === "z" && s.metaKey && (s.shiftKey ? e.redo() : e.undo());
  }, r = () => {
    fn ? n.removeEventListener("keydown", i) : n.removeEventListener("keydown", o);
  };
  return fn ? n.addEventListener("keydown", i) : n.addEventListener("keydown", o), {
    destroy: r
  };
};
const Fr = (e, t = {}) => {
  if (!e)
    throw "Missing argument: image";
  const n = typeof e == "string" ? document.getElementById(e) : e, o = Rr(t, {
    drawingEnabled: !0,
    drawingMode: "drag",
    pointerSelectAction: bn.EDIT,
    theme: "light"
  }), i = Br(o), { selection: r, store: s } = i, a = No(s), l = Uo(
    i,
    a,
    o.adapter,
    o.autoSave
  ), u = document.createElement("DIV");
  u.style.position = "relative", u.style.display = "inline-block", n.style.display = "block", n.parentNode.insertBefore(u, n), u.appendChild(n);
  const h = Nr(a);
  let c = qo();
  an(n, u, o.theme);
  const m = new Ar({
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
  const d = Fo(i, a, o.adapter), g = () => {
    m.$destroy(), u.parentNode.insertBefore(n, u), u.parentNode.removeChild(u), h.destroy(), a.destroy();
  }, A = () => c, M = (b, y, E) => ji(b, y, E), w = (b, y) => _i(b, y), p = (b) => {
    if (!Sn(b))
      throw `No drawing tool named ${b}`;
    m.$set({ toolName: b });
  }, _ = (b) => m.$set({ drawingEnabled: b }), S = (b) => {
    console.warn("Filter not implemented yet");
  }, T = (b) => m.$set({ style: b }), B = (b) => an(n, u, b), R = (b) => {
    c = b, m.$set({ user: b });
  };
  return {
    ...d,
    destroy: g,
    getUser: A,
    listDrawingTools: Et,
    on: l.on,
    off: l.off,
    registerDrawingTool: M,
    registerShapeEditor: w,
    setDrawingEnabled: _,
    setDrawingTool: p,
    setFilter: S,
    setStyle: T,
    setTheme: B,
    setUser: R,
    state: i
  };
};
export {
  $e as Editor,
  Mi as EditorMount,
  fi as EllipseEditor,
  hi as FreehandEditor,
  L as Handle,
  Hr as IdentityTransform,
  yi as LineEditor,
  zn as LineUtil,
  ti as PolygonEditor,
  ri as RectangleEditor,
  Gn as RectangleUtil,
  vi as RubberbandRectangle,
  Ar as SVGAnnotationLayer,
  z as ShapeType,
  Ti as ToolMount,
  Cr as W3CImageFormat,
  ur as addEventListeners,
  Pe as boundsFromPoints,
  _t as computeArea,
  Fr as createImageAnnotator,
  Dr as createImageAnnotatorState,
  fr as createSVGTransform,
  Br as createSvelteImageAnnotatorState,
  Xr as detectTheme,
  ut as distance,
  Ii as enableResponsive,
  Rr as fillDefaults,
  Vt as getEditor,
  Sn as getTool,
  Nr as initKeyboardCommands,
  Un as intersects,
  Ur as isTouch,
  Et as listDrawingTools,
  jn as parseFragmentSelector,
  go as parseSVGSelector,
  Jo as parseW3CImageAnnotation,
  _i as registerEditor,
  xe as registerShapeUtil,
  ji as registerTool,
  Yr as sampleBrightness,
  qn as serializeFragmentSelector,
  po as serializeSVGSelector,
  Qo as serializeW3CImageAnnotation,
  an as setTheme
};
//# sourceMappingURL=annotorious.es.js.map
