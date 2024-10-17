"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5126],
  {
    56099: function (t, e, n) {
      n.d(e, {
        y: function () {
          return O;
        },
      });
      var i = n(31632);
      let r = (t, e, n) =>
        (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t;
      function s(t, e, n, s) {
        if (t === e && n === s) return i.Z;
        let o = (e) =>
          (function (t, e, n, i, s) {
            let o, a;
            let l = 0;
            do (o = r((a = e + (n - e) / 2), i, s) - t) > 0 ? (n = a) : (e = a);
            while (Math.abs(o) > 1e-7 && ++l < 12);
            return a;
          })(e, 0, 1, t, n);
        return (t) => (0 === t || 1 === t ? t : r(o(t), e, s));
      }
      let o = s(0.42, 0, 1, 1),
        a = s(0, 0, 0.58, 1),
        l = s(0.42, 0, 0.58, 1),
        u = (t) => Array.isArray(t) && "number" != typeof t[0];
      var h = n(18358),
        c = n(71655),
        d = n(53273),
        p = n(96340);
      let f = s(0.33, 1.53, 0.69, 0.99),
        m = (0, p.M)(f),
        v = (0, d.o)(m),
        g = {
          linear: i.Z,
          easeIn: o,
          easeInOut: l,
          easeOut: a,
          circIn: c.Z7,
          circInOut: c.X7,
          circOut: c.Bn,
          backIn: m,
          backInOut: v,
          backOut: f,
          anticipate: (t) =>
            (t *= 2) < 1 ? 0.5 * m(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))),
        },
        y = (t) => {
          if (Array.isArray(t)) {
            (0, h.k)(
              4 === t.length,
              "Cubic bezier arrays must contain four numerical values."
            );
            let [e, n, i, r] = t;
            return s(e, n, i, r);
          }
          return "string" == typeof t
            ? ((0, h.k)(void 0 !== g[t], `Invalid easing type '${t}'`), g[t])
            : t;
        };
      var x = n(79286),
        P = n(31947);
      function b({
        duration: t = 300,
        keyframes: e,
        times: n,
        ease: i = "easeInOut",
      }) {
        let r = u(i) ? i.map(y) : y(i),
          s = { done: !1, value: e[0] },
          o = (n && n.length === e.length ? n : (0, P.Y)(e)).map((e) => e * t),
          a = (0, x.s)(o, e, {
            ease: Array.isArray(r)
              ? r
              : e.map(() => r || l).splice(0, e.length - 1),
          });
        return {
          calculatedDuration: t,
          next: (e) => ((s.value = a(e)), (s.done = e >= t), s),
        };
      }
      var w = n(41643),
        A = n(22305);
      function T(t, e, n) {
        let i = Math.max(e - 5, 0);
        return (0, A.R)(n - t(i), e - i);
      }
      var S = n(40867);
      function C(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      let V = ["duration", "bounce"],
        E = ["stiffness", "damping", "mass"];
      function k(t, e) {
        return e.some((e) => void 0 !== t[e]);
      }
      function M({ keyframes: t, restDelta: e, restSpeed: n, ...i }) {
        let r;
        let s = t[0],
          o = t[t.length - 1],
          a = { done: !1, value: s },
          {
            stiffness: l,
            damping: u,
            mass: c,
            duration: d,
            velocity: p,
            isResolvedFromDuration: f,
          } = (function (t) {
            let e = {
              velocity: 0,
              stiffness: 100,
              damping: 10,
              mass: 1,
              isResolvedFromDuration: !1,
              ...t,
            };
            if (!k(t, E) && k(t, V)) {
              let n = (function ({
                duration: t = 800,
                bounce: e = 0.25,
                velocity: n = 0,
                mass: i = 1,
              }) {
                let r, s;
                (0, h.K)(
                  t <= (0, w.w)(10),
                  "Spring duration must be 10 seconds or less"
                );
                let o = 1 - e;
                (o = (0, S.u)(0.05, 1, o)),
                  (t = (0, S.u)(0.01, 10, (0, w.X)(t))),
                  o < 1
                    ? ((r = (e) => {
                        let i = e * o,
                          r = i * t;
                        return 0.001 - ((i - n) / C(e, o)) * Math.exp(-r);
                      }),
                      (s = (e) => {
                        let i = e * o * t,
                          s = Math.pow(o, 2) * Math.pow(e, 2) * t,
                          a = C(Math.pow(e, 2), o);
                        return (
                          ((i * n + n - s) *
                            Math.exp(-i) *
                            (-r(e) + 0.001 > 0 ? -1 : 1)) /
                          a
                        );
                      }))
                    : ((r = (e) =>
                        -0.001 + Math.exp(-e * t) * ((e - n) * t + 1)),
                      (s = (e) => t * t * (n - e) * Math.exp(-e * t)));
                let a = (function (t, e, n) {
                  let i = n;
                  for (let n = 1; n < 12; n++) i -= t(i) / e(i);
                  return i;
                })(r, s, 5 / t);
                if (((t = (0, w.w)(t)), isNaN(a)))
                  return { stiffness: 100, damping: 10, duration: t };
                {
                  let e = Math.pow(a, 2) * i;
                  return {
                    stiffness: e,
                    damping: 2 * o * Math.sqrt(i * e),
                    duration: t,
                  };
                }
              })(t);
              (e = { ...e, ...n, mass: 1 }).isResolvedFromDuration = !0;
            }
            return e;
          })({ ...i, velocity: -(0, w.X)(i.velocity || 0) }),
          m = p || 0,
          v = u / (2 * Math.sqrt(l * c)),
          g = o - s,
          y = (0, w.X)(Math.sqrt(l / c)),
          x = 5 > Math.abs(g);
        if ((n || (n = x ? 0.01 : 2), e || (e = x ? 0.005 : 0.5), v < 1)) {
          let t = C(y, v);
          r = (e) =>
            o -
            Math.exp(-v * y * e) *
              (((m + v * y * g) / t) * Math.sin(t * e) + g * Math.cos(t * e));
        } else if (1 === v)
          r = (t) => o - Math.exp(-y * t) * (g + (m + y * g) * t);
        else {
          let t = y * Math.sqrt(v * v - 1);
          r = (e) => {
            let n = Math.exp(-v * y * e),
              i = Math.min(t * e, 300);
            return (
              o -
              (n * ((m + v * y * g) * Math.sinh(i) + t * g * Math.cosh(i))) / t
            );
          };
        }
        return {
          calculatedDuration: (f && d) || null,
          next: (t) => {
            let i = r(t);
            if (f) a.done = t >= d;
            else {
              let s = m;
              0 !== t && (s = v < 1 ? T(r, t, i) : 0);
              let l = Math.abs(s) <= n,
                u = Math.abs(o - i) <= e;
              a.done = l && u;
            }
            return (a.value = a.done ? o : i), a;
          },
        };
      }
      function D({
        keyframes: t,
        velocity: e = 0,
        power: n = 0.8,
        timeConstant: i = 325,
        bounceDamping: r = 10,
        bounceStiffness: s = 500,
        modifyTarget: o,
        min: a,
        max: l,
        restDelta: u = 0.5,
        restSpeed: h,
      }) {
        let c, d;
        let p = t[0],
          f = { done: !1, value: p },
          m = (t) => (void 0 !== a && t < a) || (void 0 !== l && t > l),
          v = (t) =>
            void 0 === a
              ? l
              : void 0 === l
              ? a
              : Math.abs(a - t) < Math.abs(l - t)
              ? a
              : l,
          g = n * e,
          y = p + g,
          x = void 0 === o ? y : o(y);
        x !== y && (g = x - p);
        let P = (t) => -g * Math.exp(-t / i),
          b = (t) => x + P(t),
          w = (t) => {
            let e = P(t),
              n = b(t);
            (f.done = Math.abs(e) <= u), (f.value = f.done ? x : n);
          },
          A = (t) => {
            m(f.value) &&
              ((c = t),
              (d = M({
                keyframes: [f.value, v(f.value)],
                velocity: T(b, t, f.value),
                damping: r,
                stiffness: s,
                restDelta: u,
                restSpeed: h,
              })));
          };
        return (
          A(0),
          {
            calculatedDuration: null,
            next: (t) => {
              let e = !1;
              return (d || void 0 !== c || ((e = !0), w(t), A(t)),
              void 0 !== c && t > c)
                ? d.next(t - c)
                : (e || w(t), f);
            },
          }
        );
      }
      var R = n(88882),
        L = n(24581);
      let j = (t) => {
        let e = ({ timestamp: e }) => t(e);
        return {
          start: () => L.Wi.update(e, !0),
          stop: () => (0, L.Pn)(e),
          now: () =>
            L.frameData.isProcessing ? L.frameData.timestamp : R.X.now(),
        };
      };
      function F(t) {
        let e = 0,
          n = t.next(e);
        for (; !n.done && e < 2e4; ) (e += 50), (n = t.next(e));
        return e >= 2e4 ? 1 / 0 : e;
      }
      let B = { decay: D, inertia: D, tween: b, keyframes: b, spring: M };
      function O({
        autoplay: t = !0,
        delay: e = 0,
        driver: n = j,
        keyframes: i,
        type: r = "keyframes",
        repeat: s = 0,
        repeatDelay: o = 0,
        repeatType: a = "loop",
        onPlay: l,
        onStop: u,
        onComplete: h,
        onUpdate: c,
        ...d
      }) {
        let p,
          f,
          m,
          v,
          g,
          y = 1,
          P = !1,
          A = () => {
            f = new Promise((t) => {
              p = t;
            });
          };
        A();
        let T = B[r] || b;
        T !== b &&
          "number" != typeof i[0] &&
          ((v = (0, x.s)([0, 100], i, { clamp: !1 })), (i = [0, 100]));
        let C = T({ ...d, keyframes: i });
        "mirror" === a &&
          (g = T({
            ...d,
            keyframes: [...i].reverse(),
            velocity: -(d.velocity || 0),
          }));
        let V = "idle",
          E = null,
          k = null,
          M = null;
        null === C.calculatedDuration && s && (C.calculatedDuration = F(C));
        let { calculatedDuration: D } = C,
          R = 1 / 0,
          L = 1 / 0;
        null !== D && (L = (R = D + o) * (s + 1) - o);
        let O = 0,
          U = (t) => {
            if (null === k) return;
            y > 0 && (k = Math.min(k, t)),
              y < 0 && (k = Math.min(t - L / y, k));
            let n =
                (O = null !== E ? E : Math.round(t - k) * y) -
                e * (y >= 0 ? 1 : -1),
              r = y >= 0 ? n < 0 : n > L;
            (O = Math.max(n, 0)), "finished" === V && null === E && (O = L);
            let l = O,
              u = C;
            if (s) {
              let t = Math.min(O, L) / R,
                e = Math.floor(t),
                n = t % 1;
              !n && t >= 1 && (n = 1),
                1 === n && e--,
                (e = Math.min(e, s + 1)) % 2 &&
                  ("reverse" === a
                    ? ((n = 1 - n), o && (n -= o / R))
                    : "mirror" === a && (u = g)),
                (l = (0, S.u)(0, 1, n) * R);
            }
            let h = r ? { done: !1, value: i[0] } : u.next(l);
            v && (h.value = v(h.value));
            let { done: d } = h;
            r || null === D || (d = y >= 0 ? O >= L : O <= 0);
            let p = null === E && ("finished" === V || ("running" === V && d));
            return c && c(h.value), p && $(), h;
          },
          I = () => {
            m && m.stop(), (m = void 0);
          },
          W = () => {
            (V = "idle"), I(), p(), A(), (k = M = null);
          },
          $ = () => {
            (V = "finished"), h && h(), I(), p();
          },
          N = () => {
            if (P) return;
            m || (m = n(U));
            let t = m.now();
            l && l(),
              null !== E ? (k = t - E) : (k && "finished" !== V) || (k = t),
              "finished" === V && A(),
              (M = k),
              (E = null),
              (V = "running"),
              m.start();
          };
        t && N();
        let H = {
          then: (t, e) => f.then(t, e),
          get time() {
            return (0, w.X)(O);
          },
          set time(newTime) {
            (O = newTime = (0, w.w)(newTime)),
              null === E && m && 0 !== y
                ? (k = m.now() - newTime / y)
                : (E = newTime);
          },
          get duration() {
            let t = null === C.calculatedDuration ? F(C) : C.calculatedDuration;
            return (0, w.X)(t);
          },
          get speed() {
            return y;
          },
          set speed(newSpeed) {
            if (newSpeed === y || !m) return;
            (y = newSpeed), (H.time = (0, w.X)(O));
          },
          get state() {
            return V;
          },
          play: N,
          pause: () => {
            (V = "paused"), (E = O);
          },
          stop: () => {
            (P = !0), "idle" !== V && ((V = "idle"), u && u(), W());
          },
          cancel: () => {
            null !== M && U(M), W();
          },
          complete: () => {
            V = "finished";
          },
          sample: (t) => ((k = 0), U(t)),
        };
        return H;
      }
    },
    59753: function (t, e, n) {
      let i;
      n.d(e, {
        v: function () {
          return k;
        },
      });
      var r,
        s = n(18358),
        o = n(41643);
      let a = { current: !1 },
        l = (t) => Array.isArray(t) && "number" == typeof t[0],
        u = ([t, e, n, i]) => `cubic-bezier(${t}, ${e}, ${n}, ${i})`,
        h = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: u([0, 0.65, 0.55, 1]),
          circOut: u([0.55, 0, 1, 0.45]),
          backIn: u([0.31, 0.01, 0.66, -0.59]),
          backOut: u([0.33, 1.53, 0.69, 0.99]),
        };
      var c = n(56099),
        d = n(31632),
        p = n(24581);
      let f =
          ((r = () => Object.hasOwnProperty.call(Element.prototype, "animate")),
          () => (void 0 === i && (i = r()), i)),
        m = new Set([
          "opacity",
          "clipPath",
          "filter",
          "transform",
          "backgroundColor",
        ]),
        v = (t, e) =>
          "spring" === e.type ||
          "backgroundColor" === t ||
          !(function t(e) {
            return !!(
              !e ||
              ("string" == typeof e && h[e]) ||
              l(e) ||
              (Array.isArray(e) && e.every(t))
            );
          })(e.ease);
      var g = n(84163);
      let y = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        x = (t) => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === t ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        P = { type: "keyframes", duration: 0.8 },
        b = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        w = (t, { keyframes: e }) =>
          e.length > 2
            ? P
            : g.G.has(t)
            ? t.startsWith("scale")
              ? x(e[1])
              : y
            : b;
      var A = n(47721);
      let T = (t, e) =>
        "zIndex" !== t &&
        !!(
          "number" == typeof e ||
          Array.isArray(e) ||
          ("string" == typeof e &&
            (A.P.test(e) || "0" === e) &&
            !e.startsWith("url("))
        );
      var S = n(32487),
        C = n(93984),
        V = n(5398),
        E = n(82341);
      let k =
        (t, e, n, i = {}) =>
        (r) => {
          let g = (0, V.e)(i, t) || {},
            y = g.delay || i.delay || 0,
            { elapsed: x = 0 } = i;
          x -= (0, o.w)(y);
          let P = (function (t, e, n, i) {
              let r, s;
              let o = T(e, n);
              r = Array.isArray(n) ? [...n] : [null, n];
              let a = void 0 !== i.from ? i.from : t.get(),
                l = [];
              for (let t = 0; t < r.length; t++) {
                var u;
                null === r[t] && (r[t] = 0 === t ? a : r[t - 1]),
                  ("number" == typeof (u = r[t])
                    ? 0 === u
                    : null !== u
                    ? "none" === u || "0" === u || (0, C.W)(u)
                    : void 0) && l.push(t),
                  "string" == typeof r[t] &&
                    "none" !== r[t] &&
                    "0" !== r[t] &&
                    (s = r[t]);
              }
              if (o && l.length && s)
                for (let t = 0; t < l.length; t++) r[l[t]] = (0, S.T)(e, s);
              return r;
            })(e, t, n, g),
            b = P[0],
            A = P[P.length - 1],
            k = T(t, b),
            M = T(t, A);
          (0, s.K)(
            k === M,
            `You are trying to animate ${t} from "${b}" to "${A}". ${b} is not an animatable value - to enable this animation set ${b} to a value animatable to ${A} via the \`style\` property.`
          );
          let D = {
            keyframes: P,
            velocity: e.getVelocity(),
            ease: "easeOut",
            ...g,
            delay: -x,
            onUpdate: (t) => {
              e.set(t), g.onUpdate && g.onUpdate(t);
            },
            onComplete: () => {
              r(), g.onComplete && g.onComplete();
            },
          };
          if (
            ((0, V.r)(g) || (D = { ...D, ...w(t, D) }),
            D.duration && (D.duration = (0, o.w)(D.duration)),
            D.repeatDelay && (D.repeatDelay = (0, o.w)(D.repeatDelay)),
            !k || !M || a.current || !1 === g.type || E.c.skipAnimations)
          )
            return (function ({
              keyframes: t,
              delay: e,
              onUpdate: n,
              onComplete: i,
            }) {
              let r = () => (
                n && n(t[t.length - 1]),
                i && i(),
                {
                  time: 0,
                  speed: 1,
                  duration: 0,
                  play: d.Z,
                  pause: d.Z,
                  stop: d.Z,
                  then: (t) => (t(), Promise.resolve()),
                  cancel: d.Z,
                  complete: d.Z,
                }
              );
              return e
                ? (0, c.y)({
                    keyframes: [0, 1],
                    duration: 0,
                    delay: e,
                    onComplete: r,
                  })
                : r();
            })(a.current ? { ...D, delay: 0 } : D);
          if (
            !i.isHandoff &&
            e.owner &&
            e.owner.current instanceof HTMLElement &&
            !e.owner.getProps().onUpdate
          ) {
            let n = (function (t, e, { onUpdate: n, onComplete: i, ...r }) {
              let s, a;
              if (
                !(
                  f() &&
                  m.has(e) &&
                  !r.repeatDelay &&
                  "mirror" !== r.repeatType &&
                  0 !== r.damping &&
                  "inertia" !== r.type
                )
              )
                return !1;
              let g = !1,
                y = !1,
                x = () => {
                  a = new Promise((t) => {
                    s = t;
                  });
                };
              x();
              let { keyframes: P, duration: b = 300, ease: w, times: A } = r;
              if (v(e, r)) {
                let t = (0, c.y)({ ...r, repeat: 0, delay: 0 }),
                  e = { done: !1, value: P[0] },
                  n = [],
                  i = 0;
                for (; !e.done && i < 2e4; )
                  (e = t.sample(i)), n.push(e.value), (i += 10);
                (A = void 0), (P = n), (b = i - 10), (w = "linear");
              }
              let T = (function (
                  t,
                  e,
                  n,
                  {
                    delay: i = 0,
                    duration: r,
                    repeat: s = 0,
                    repeatType: o = "loop",
                    ease: a,
                    times: c,
                  } = {}
                ) {
                  let d = { [e]: n };
                  c && (d.offset = c);
                  let p = (function t(e) {
                    if (e)
                      return l(e) ? u(e) : Array.isArray(e) ? e.map(t) : h[e];
                  })(a);
                  return (
                    Array.isArray(p) && (d.easing = p),
                    t.animate(d, {
                      delay: i,
                      duration: r,
                      easing: Array.isArray(p) ? "linear" : p,
                      fill: "both",
                      iterations: s + 1,
                      direction: "reverse" === o ? "alternate" : "normal",
                    })
                  );
                })(t.owner.current, e, P, {
                  ...r,
                  duration: b,
                  ease: w,
                  times: A,
                }),
                S = () => {
                  (y = !1), T.cancel();
                },
                C = () => {
                  (y = !0), p.Wi.update(S), s(), x();
                };
              return (
                (T.onfinish = () => {
                  y ||
                    (t.set(
                      (function (t, { repeat: e, repeatType: n = "loop" }) {
                        let i =
                          e && "loop" !== n && e % 2 == 1 ? 0 : t.length - 1;
                        return t[i];
                      })(P, r)
                    ),
                    i && i(),
                    C());
                }),
                {
                  then: (t, e) => a.then(t, e),
                  attachTimeline: (t) => (
                    (T.timeline = t), (T.onfinish = null), d.Z
                  ),
                  get time() {
                    return (0, o.X)(T.currentTime || 0);
                  },
                  set time(newTime) {
                    T.currentTime = (0, o.w)(newTime);
                  },
                  get speed() {
                    return T.playbackRate;
                  },
                  set speed(newSpeed) {
                    T.playbackRate = newSpeed;
                  },
                  get duration() {
                    return (0, o.X)(b);
                  },
                  play: () => {
                    g || (T.play(), (0, p.Pn)(S));
                  },
                  pause: () => T.pause(),
                  stop: () => {
                    if (((g = !0), "idle" === T.playState)) return;
                    let { currentTime: e } = T;
                    if (e) {
                      let n = (0, c.y)({ ...r, autoplay: !1 });
                      t.setWithVelocity(
                        n.sample(e - 10).value,
                        n.sample(e).value,
                        10
                      );
                    }
                    C();
                  },
                  complete: () => {
                    y || T.finish();
                  },
                  cancel: C,
                }
              );
            })(e, t, D);
            if (n) return n;
          }
          return (0, c.y)(D);
        };
    },
    21448: function (t, e, n) {
      n.d(e, {
        d: function () {
          return f;
        },
      });
      var i = n(95731),
        r = n(84163),
        s = n(77116),
        o = n(59753),
        a = n(94102),
        l = n(38809),
        u = n(5398),
        h = n(24581);
      function c(t, e, { delay: n = 0, transitionOverride: i, type: c } = {}) {
        let {
            transition: d = t.getDefaultTransition(),
            transitionEnd: p,
            ...f
          } = t.makeTargetAnimatable(e),
          m = t.getValue("willChange");
        i && (d = i);
        let v = [],
          g = c && t.animationState && t.animationState.getState()[c];
        for (let e in f) {
          let i = t.getValue(e),
            l = f[e];
          if (
            !i ||
            void 0 === l ||
            (g &&
              (function ({ protectedKeys: t, needsAnimating: e }, n) {
                let i = t.hasOwnProperty(n) && !0 !== e[n];
                return (e[n] = !1), i;
              })(g, e))
          )
            continue;
          let c = { delay: n, elapsed: 0, ...(0, u.e)(d || {}, e) };
          if (window.HandoffAppearAnimations) {
            let n = t.getProps()[s.M];
            if (n) {
              let t = window.HandoffAppearAnimations(n, e, i, h.Wi);
              null !== t && ((c.elapsed = t), (c.isHandoff = !0));
            }
          }
          let p =
            !c.isHandoff &&
            !(function (t, e) {
              let n = t.get();
              if (!Array.isArray(e)) return n !== e;
              for (let t = 0; t < e.length; t++) if (e[t] !== n) return !0;
            })(i, l);
          if (
            ("spring" === c.type && (i.getVelocity() || c.velocity) && (p = !1),
            i.animation && (p = !1),
            p)
          )
            continue;
          i.start(
            (0, o.v)(
              e,
              i,
              l,
              t.shouldReduceMotion && r.G.has(e) ? { type: !1 } : c
            )
          );
          let y = i.animation;
          (0, a.L)(m) && (m.add(e), y.then(() => m.remove(e))), v.push(y);
        }
        return (
          p &&
            Promise.all(v).then(() => {
              p && (0, l.CD)(t, p);
            }),
          v
        );
      }
      function d(t, e, n = {}) {
        let r = (0, i.x)(t, e, n.custom),
          { transition: s = t.getDefaultTransition() || {} } = r || {};
        n.transitionOverride && (s = n.transitionOverride);
        let o = r ? () => Promise.all(c(t, r, n)) : () => Promise.resolve(),
          a =
            t.variantChildren && t.variantChildren.size
              ? (i = 0) => {
                  let {
                    delayChildren: r = 0,
                    staggerChildren: o,
                    staggerDirection: a,
                  } = s;
                  return (function (t, e, n = 0, i = 0, r = 1, s) {
                    let o = [],
                      a = (t.variantChildren.size - 1) * i,
                      l = 1 === r ? (t = 0) => t * i : (t = 0) => a - t * i;
                    return (
                      Array.from(t.variantChildren)
                        .sort(p)
                        .forEach((t, i) => {
                          t.notify("AnimationStart", e),
                            o.push(
                              d(t, e, { ...s, delay: n + l(i) }).then(() =>
                                t.notify("AnimationComplete", e)
                              )
                            );
                        }),
                      Promise.all(o)
                    );
                  })(t, e, r + i, o, a, n);
                }
              : () => Promise.resolve(),
          { when: l } = s;
        if (!l) return Promise.all([o(), a(n.delay)]);
        {
          let [t, e] = "beforeChildren" === l ? [o, a] : [a, o];
          return t().then(() => e());
        }
      }
      function p(t, e) {
        return t.sortNodePosition(e);
      }
      function f(t, e, n = {}) {
        let r;
        if ((t.notify("AnimationStart", e), Array.isArray(e)))
          r = Promise.all(e.map((e) => d(t, e, n)));
        else if ("string" == typeof e) r = d(t, e, n);
        else {
          let s = "function" == typeof e ? (0, i.x)(t, e, n.custom) : e;
          r = Promise.all(c(t, s, n));
        }
        return r.then(() => t.notify("AnimationComplete", e));
      }
    },
    77116: function (t, e, n) {
      n.d(e, {
        M: function () {
          return i;
        },
      });
      let i = "data-" + (0, n(51838).D)("framerAppearId");
    },
    16827: function (t, e, n) {
      n.d(e, {
        H: function () {
          return i;
        },
      });
      function i(t) {
        return (
          null !== t && "object" == typeof t && "function" == typeof t.start
        );
      }
    },
    39958: function (t, e, n) {
      n.d(e, {
        C: function () {
          return i;
        },
      });
      let i = (t) => Array.isArray(t);
    },
    5398: function (t, e, n) {
      function i({
        when: t,
        delay: e,
        delayChildren: n,
        staggerChildren: i,
        staggerDirection: r,
        repeat: s,
        repeatType: o,
        repeatDelay: a,
        from: l,
        elapsed: u,
        ...h
      }) {
        return !!Object.keys(h).length;
      }
      function r(t, e) {
        return t[e] || t.default || t;
      }
      n.d(e, {
        e: function () {
          return r;
        },
        r: function () {
          return i;
        },
      });
    },
    96179: function (t, e, n) {
      n.d(e, {
        p: function () {
          return i;
        },
      });
      let i = (0, n(2784).createContext)({});
    },
    73612: function (t, e, n) {
      n.d(e, {
        u: function () {
          return i;
        },
      });
      let i = (0, n(2784).createContext)({ strict: !1 });
    },
    87649: function (t, e, n) {
      n.d(e, {
        _: function () {
          return i;
        },
      });
      let i = (0, n(2784).createContext)({
        transformPagePoint: (t) => t,
        isStatic: !1,
        reducedMotion: "never",
      });
    },
    29031: function (t, e, n) {
      n.d(e, {
        v: function () {
          return i;
        },
      });
      let i = (0, n(2784).createContext)({});
    },
    38168: function (t, e, n) {
      n.d(e, {
        O: function () {
          return i;
        },
      });
      let i = (0, n(2784).createContext)(null);
    },
    54578: function (t, e, n) {
      n.d(e, {
        g: function () {
          return i;
        },
      });
      let i = (0, n(2784).createContext)({});
    },
    71655: function (t, e, n) {
      n.d(e, {
        Bn: function () {
          return o;
        },
        X7: function () {
          return a;
        },
        Z7: function () {
          return s;
        },
      });
      var i = n(53273),
        r = n(96340);
      let s = (t) => 1 - Math.sin(Math.acos(t)),
        o = (0, r.M)(s),
        a = (0, i.o)(s);
    },
    53273: function (t, e, n) {
      n.d(e, {
        o: function () {
          return i;
        },
      });
      let i = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2;
    },
    96340: function (t, e, n) {
      n.d(e, {
        M: function () {
          return i;
        },
      });
      let i = (t) => (e) => 1 - t(1 - e);
    },
    86971: function (t, e, n) {
      n.d(e, {
        E: function () {
          return i;
        },
      });
      function i(t, e, n, i = { passive: !0 }) {
        return t.addEventListener(e, n, i), () => t.removeEventListener(e, n);
      }
    },
    63011: function (t, e, n) {
      n.d(e, {
        a: function () {
          return s;
        },
      });
      var i = n(86971),
        r = n(23760);
      function s(t, e, n, s) {
        return (0, i.E)(t, e, (0, r.s)(n), s);
      }
    },
    23760: function (t, e, n) {
      n.d(e, {
        Q: function () {
          return r;
        },
        s: function () {
          return s;
        },
      });
      var i = n(8342);
      function r(t, e = "page") {
        return { point: { x: t[e + "X"], y: t[e + "Y"] } };
      }
      let s = (t) => (e) => (0, i.D)(e) && t(e, r(e));
    },
    8342: function (t, e, n) {
      n.d(e, {
        D: function () {
          return i;
        },
      });
      let i = (t) =>
        "mouse" === t.pointerType
          ? "number" != typeof t.button || t.button <= 0
          : !1 !== t.isPrimary;
    },
    93023: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return o;
        },
      });
      var i = n(82341);
      class r {
        constructor() {
          (this.order = []), (this.scheduled = new Set());
        }
        add(t) {
          if (!this.scheduled.has(t))
            return this.scheduled.add(t), this.order.push(t), !0;
        }
        remove(t) {
          let e = this.order.indexOf(t);
          -1 !== e && (this.order.splice(e, 1), this.scheduled.delete(t));
        }
        clear() {
          (this.order.length = 0), this.scheduled.clear();
        }
      }
      let s = [
        "prepare",
        "read",
        "update",
        "preRender",
        "render",
        "postRender",
      ];
      function o(t, e) {
        let n = !1,
          o = !0,
          a = { delta: 0, timestamp: 0, isProcessing: !1 },
          l = s.reduce(
            (t, e) => (
              (t[e] = (function (t) {
                let e = new r(),
                  n = new r(),
                  i = 0,
                  s = !1,
                  o = !1,
                  a = new WeakSet(),
                  l = {
                    schedule: (t, r = !1, o = !1) => {
                      let l = o && s,
                        u = l ? e : n;
                      return (
                        r && a.add(t),
                        u.add(t) && l && s && (i = e.order.length),
                        t
                      );
                    },
                    cancel: (t) => {
                      n.remove(t), a.delete(t);
                    },
                    process: (r) => {
                      if (s) {
                        o = !0;
                        return;
                      }
                      if (
                        ((s = !0),
                        ([e, n] = [n, e]),
                        n.clear(),
                        (i = e.order.length))
                      )
                        for (let n = 0; n < i; n++) {
                          let i = e.order[n];
                          a.has(i) && (l.schedule(i), t()), i(r);
                        }
                      (s = !1), o && ((o = !1), l.process(r));
                    },
                  };
                return l;
              })(() => (n = !0))),
              t
            ),
            {}
          ),
          u = (t) => {
            l[t].process(a);
          },
          h = () => {
            let r = i.c.useManualTiming ? a.timestamp : performance.now();
            (n = !1),
              (a.delta = o
                ? 1e3 / 60
                : Math.max(Math.min(r - a.timestamp, 40), 1)),
              (a.timestamp = r),
              (a.isProcessing = !0),
              s.forEach(u),
              (a.isProcessing = !1),
              n && e && ((o = !1), t(h));
          },
          c = () => {
            (n = !0), (o = !0), a.isProcessing || t(h);
          };
        return {
          schedule: s.reduce((t, e) => {
            let i = l[e];
            return (
              (t[e] = (t, e = !1, r = !1) => (n || c(), i.schedule(t, e, r))), t
            );
          }, {}),
          cancel: (t) => s.forEach((e) => l[e].cancel(t)),
          state: a,
          steps: l,
        };
      }
    },
    24581: function (t, e, n) {
      n.d(e, {
        Pn: function () {
          return s;
        },
        S6: function () {
          return a;
        },
        Wi: function () {
          return r;
        },
        frameData: function () {
          return o;
        },
      });
      var i = n(31632);
      let {
        schedule: r,
        cancel: s,
        state: o,
        steps: a,
      } = (0, n(93023).Z)(
        "undefined" != typeof requestAnimationFrame
          ? requestAnimationFrame
          : i.Z,
        !0
      );
    },
    4723: function (t, e, n) {
      n.d(e, {
        g: function () {
          return i;
        },
      });
      let { schedule: i, cancel: r } = (0, n(93023).Z)(queueMicrotask, !1);
    },
    88882: function (t, e, n) {
      let i;
      n.d(e, {
        X: function () {
          return a;
        },
      });
      var r = n(82341),
        s = n(24581);
      function o() {
        i = void 0;
      }
      let a = {
        now: () => (
          void 0 === i &&
            a.set(
              s.frameData.isProcessing || r.c.useManualTiming
                ? s.frameData.timestamp
                : performance.now()
            ),
          i
        ),
        set: (t) => {
          (i = t), queueMicrotask(o);
        },
      };
    },
    73249: function (t, e, n) {
      function i(t) {
        let e = null;
        return () =>
          null === e &&
          ((e = t),
          () => {
            e = null;
          });
      }
      n.d(e, {
        fJ: function () {
          return o;
        },
        gD: function () {
          return a;
        },
      });
      let r = i("dragHorizontal"),
        s = i("dragVertical");
      function o(t) {
        let e = !1;
        if ("y" === t) e = s();
        else if ("x" === t) e = r();
        else {
          let t = r(),
            n = s();
          t && n
            ? (e = () => {
                t(), n();
              })
            : (t && t(), n && n());
        }
        return e;
      }
      function a() {
        let t = o(!0);
        return !t || (t(), !1);
      }
    },
    4350: function (t, e, n) {
      n.d(e, {
        L: function () {
          return i;
        },
      });
      class i {
        constructor(t) {
          (this.isMounted = !1), (this.node = t);
        }
        update() {}
      }
    },
    97489: function (t, e, n) {
      n.d(e, {
        s: function () {
          return g;
        },
      });
      var i = n(16827),
        r = n(39958);
      function s(t, e) {
        if (!Array.isArray(e)) return !1;
        let n = e.length;
        if (n !== t.length) return !1;
        for (let i = 0; i < n; i++) if (e[i] !== t[i]) return !1;
        return !0;
      }
      var o = n(76624),
        a = n(95731),
        l = n(74680),
        u = n(21448);
      let h = [...l.e].reverse(),
        c = l.e.length;
      function d(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      var p = n(4350);
      class f extends p.L {
        constructor(t) {
          super(t),
            t.animationState ||
              (t.animationState = (function (t) {
                let e = (e) =>
                    Promise.all(
                      e.map(({ animation: e, options: n }) => (0, u.d)(t, e, n))
                    ),
                  n = {
                    animate: d(!0),
                    whileInView: d(),
                    whileHover: d(),
                    whileTap: d(),
                    whileDrag: d(),
                    whileFocus: d(),
                    exit: d(),
                  },
                  l = !0,
                  p = (e, n) => {
                    let i = (0, a.x)(t, n);
                    if (i) {
                      let { transition: t, transitionEnd: n, ...r } = i;
                      e = { ...e, ...r, ...n };
                    }
                    return e;
                  };
                function f(a, u) {
                  let d = t.getProps(),
                    f = t.getVariantContext(!0) || {},
                    m = [],
                    v = new Set(),
                    g = {},
                    y = 1 / 0;
                  for (let e = 0; e < c; e++) {
                    var x;
                    let c = h[e],
                      P = n[c],
                      b = void 0 !== d[c] ? d[c] : f[c],
                      w = (0, o.$)(b),
                      A = c === u ? P.isActive : null;
                    !1 === A && (y = e);
                    let T = b === f[c] && b !== d[c] && w;
                    if (
                      (T && l && t.manuallyAnimateOnMount && (T = !1),
                      (P.protectedKeys = { ...g }),
                      (!P.isActive && null === A) ||
                        (!b && !P.prevProp) ||
                        (0, i.H)(b) ||
                        "boolean" == typeof b)
                    )
                      continue;
                    let S =
                        ((x = P.prevProp),
                        ("string" == typeof b
                          ? b !== x
                          : !!Array.isArray(b) && !s(b, x)) ||
                          (c === u && P.isActive && !T && w) ||
                          (e > y && w)),
                      C = !1,
                      V = Array.isArray(b) ? b : [b],
                      E = V.reduce(p, {});
                    !1 === A && (E = {});
                    let { prevResolvedValues: k = {} } = P,
                      M = { ...k, ...E },
                      D = (t) => {
                        (S = !0),
                          v.has(t) && ((C = !0), v.delete(t)),
                          (P.needsAnimating[t] = !0);
                      };
                    for (let t in M) {
                      let e = E[t],
                        n = k[t];
                      if (!g.hasOwnProperty(t))
                        ((0, r.C)(e) && (0, r.C)(n) ? s(e, n) : e === n)
                          ? void 0 !== e && v.has(t)
                            ? D(t)
                            : (P.protectedKeys[t] = !0)
                          : void 0 !== e
                          ? D(t)
                          : v.add(t);
                    }
                    (P.prevProp = b),
                      (P.prevResolvedValues = E),
                      P.isActive && (g = { ...g, ...E }),
                      l && t.blockInitialAnimation && (S = !1),
                      S &&
                        (!T || C) &&
                        m.push(
                          ...V.map((t) => ({
                            animation: t,
                            options: { type: c, ...a },
                          }))
                        );
                  }
                  if (v.size) {
                    let e = {};
                    v.forEach((n) => {
                      let i = t.getBaseTarget(n);
                      void 0 !== i && (e[n] = i);
                    }),
                      m.push({ animation: e });
                  }
                  let P = !!m.length;
                  return (
                    l &&
                      (!1 === d.initial || d.initial === d.animate) &&
                      !t.manuallyAnimateOnMount &&
                      (P = !1),
                    (l = !1),
                    P ? e(m) : Promise.resolve()
                  );
                }
                return {
                  animateChanges: f,
                  setActive: function (e, i, r) {
                    var s;
                    if (n[e].isActive === i) return Promise.resolve();
                    null === (s = t.variantChildren) ||
                      void 0 === s ||
                      s.forEach((t) => {
                        var n;
                        return null === (n = t.animationState) || void 0 === n
                          ? void 0
                          : n.setActive(e, i);
                      }),
                      (n[e].isActive = i);
                    let o = f(r, e);
                    for (let t in n) n[t].protectedKeys = {};
                    return o;
                  },
                  setAnimateFunction: function (n) {
                    e = n(t);
                  },
                  getState: () => n,
                };
              })(t));
        }
        updateAnimationControlsSubscription() {
          let { animate: t } = this.node.getProps();
          this.unmount(),
            (0, i.H)(t) && (this.unmount = t.subscribe(this.node));
        }
        mount() {
          this.updateAnimationControlsSubscription();
        }
        update() {
          let { animate: t } = this.node.getProps(),
            { animate: e } = this.node.prevProps || {};
          t !== e && this.updateAnimationControlsSubscription();
        }
        unmount() {}
      }
      let m = 0;
      class v extends p.L {
        constructor() {
          super(...arguments), (this.id = m++);
        }
        update() {
          if (!this.node.presenceContext) return;
          let {
              isPresent: t,
              onExitComplete: e,
              custom: n,
            } = this.node.presenceContext,
            { isPresent: i } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || t === i) return;
          let r = this.node.animationState.setActive("exit", !t, {
            custom: null != n ? n : this.node.getProps().custom,
          });
          e && !t && r.then(() => e(this.id));
        }
        mount() {
          let { register: t } = this.node.presenceContext || {};
          t && (this.unmount = t(this.id));
        }
        unmount() {}
      }
      let g = { animation: { Feature: f }, exit: { Feature: v } };
    },
    10664: function (t, e, n) {
      n.d(e, {
        A: function () {
          return r;
        },
      });
      let i = {
          animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
          ],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"],
        },
        r = {};
      for (let t in i) r[t] = { isEnabled: (e) => i[t].some((t) => !!e[t]) };
    },
    1788: function (t, e, n) {
      n.d(e, {
        E: function () {
          return A;
        },
      });
      var i = n(63011),
        r = n(74757),
        s = n(73249),
        o = n(4350),
        a = n(24581);
      function l(t, e) {
        let n = "onHover" + (e ? "Start" : "End");
        return (0, i.a)(
          t.current,
          "pointer" + (e ? "enter" : "leave"),
          (i, r) => {
            if ("touch" === i.pointerType || (0, s.gD)()) return;
            let o = t.getProps();
            t.animationState &&
              o.whileHover &&
              t.animationState.setActive("whileHover", e),
              o[n] && a.Wi.update(() => o[n](i, r));
          },
          { passive: !t.getProps()[n] }
        );
      }
      class u extends o.L {
        mount() {
          this.unmount = (0, r.z)(l(this.node, !0), l(this.node, !1));
        }
        unmount() {}
      }
      var h = n(86971);
      class c extends o.L {
        constructor() {
          super(...arguments), (this.isActive = !1);
        }
        onFocus() {
          let t = !1;
          try {
            t = this.node.current.matches(":focus-visible");
          } catch (e) {
            t = !0;
          }
          t &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !0),
            (this.isActive = !0));
        }
        onBlur() {
          this.isActive &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !1),
            (this.isActive = !1));
        }
        mount() {
          this.unmount = (0, r.z)(
            (0, h.E)(this.node.current, "focus", () => this.onFocus()),
            (0, h.E)(this.node.current, "blur", () => this.onBlur())
          );
        }
        unmount() {}
      }
      var d = n(23760);
      let p = (t, e) => !!e && (t === e || p(t, e.parentElement));
      var f = n(31632);
      function m(t, e) {
        if (!e) return;
        let n = new PointerEvent("pointer" + t);
        e(n, (0, d.Q)(n));
      }
      class v extends o.L {
        constructor() {
          super(...arguments),
            (this.removeStartListeners = f.Z),
            (this.removeEndListeners = f.Z),
            (this.removeAccessibleListeners = f.Z),
            (this.startPointerPress = (t, e) => {
              if (this.isPressing) return;
              this.removeEndListeners();
              let n = this.node.getProps(),
                s = (0, i.a)(
                  window,
                  "pointerup",
                  (t, e) => {
                    if (!this.checkPressEnd()) return;
                    let {
                      onTap: n,
                      onTapCancel: i,
                      globalTapTarget: r,
                    } = this.node.getProps();
                    a.Wi.update(() => {
                      r || p(this.node.current, t.target)
                        ? n && n(t, e)
                        : i && i(t, e);
                    });
                  },
                  { passive: !(n.onTap || n.onPointerUp) }
                ),
                o = (0, i.a)(
                  window,
                  "pointercancel",
                  (t, e) => this.cancelPress(t, e),
                  { passive: !(n.onTapCancel || n.onPointerCancel) }
                );
              (this.removeEndListeners = (0, r.z)(s, o)), this.startPress(t, e);
            }),
            (this.startAccessiblePress = () => {
              let t = (0, h.E)(this.node.current, "keydown", (t) => {
                  "Enter" !== t.key ||
                    this.isPressing ||
                    (this.removeEndListeners(),
                    (this.removeEndListeners = (0, h.E)(
                      this.node.current,
                      "keyup",
                      (t) => {
                        "Enter" === t.key &&
                          this.checkPressEnd() &&
                          m("up", (t, e) => {
                            let { onTap: n } = this.node.getProps();
                            n && a.Wi.update(() => n(t, e));
                          });
                      }
                    )),
                    m("down", (t, e) => {
                      this.startPress(t, e);
                    }));
                }),
                e = (0, h.E)(this.node.current, "blur", () => {
                  this.isPressing &&
                    m("cancel", (t, e) => this.cancelPress(t, e));
                });
              this.removeAccessibleListeners = (0, r.z)(t, e);
            });
        }
        startPress(t, e) {
          this.isPressing = !0;
          let { onTapStart: n, whileTap: i } = this.node.getProps();
          i &&
            this.node.animationState &&
            this.node.animationState.setActive("whileTap", !0),
            n && a.Wi.update(() => n(t, e));
        }
        checkPressEnd() {
          return (
            this.removeEndListeners(),
            (this.isPressing = !1),
            this.node.getProps().whileTap &&
              this.node.animationState &&
              this.node.animationState.setActive("whileTap", !1),
            !(0, s.gD)()
          );
        }
        cancelPress(t, e) {
          if (!this.checkPressEnd()) return;
          let { onTapCancel: n } = this.node.getProps();
          n && a.Wi.update(() => n(t, e));
        }
        mount() {
          let t = this.node.getProps(),
            e = (0, i.a)(
              t.globalTapTarget ? window : this.node.current,
              "pointerdown",
              this.startPointerPress,
              { passive: !(t.onTapStart || t.onPointerStart) }
            ),
            n = (0, h.E)(this.node.current, "focus", this.startAccessiblePress);
          this.removeStartListeners = (0, r.z)(e, n);
        }
        unmount() {
          this.removeStartListeners(),
            this.removeEndListeners(),
            this.removeAccessibleListeners();
        }
      }
      let g = new WeakMap(),
        y = new WeakMap(),
        x = (t) => {
          let e = g.get(t.target);
          e && e(t);
        },
        P = (t) => {
          t.forEach(x);
        },
        b = { some: 0, all: 1 };
      class w extends o.L {
        constructor() {
          super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
        }
        startObserver() {
          this.unmount();
          let { viewport: t = {} } = this.node.getProps(),
            { root: e, margin: n, amount: i = "some", once: r } = t,
            s = {
              root: e ? e.current : void 0,
              rootMargin: n,
              threshold: "number" == typeof i ? i : b[i],
            };
          return (function (t, e, n) {
            let i = (function ({ root: t, ...e }) {
              let n = t || document;
              y.has(n) || y.set(n, {});
              let i = y.get(n),
                r = JSON.stringify(e);
              return (
                i[r] || (i[r] = new IntersectionObserver(P, { root: t, ...e })),
                i[r]
              );
            })(e);
            return (
              g.set(t, n),
              i.observe(t),
              () => {
                g.delete(t), i.unobserve(t);
              }
            );
          })(this.node.current, s, (t) => {
            let { isIntersecting: e } = t;
            if (
              this.isInView === e ||
              ((this.isInView = e), r && !e && this.hasEnteredView)
            )
              return;
            e && (this.hasEnteredView = !0),
              this.node.animationState &&
                this.node.animationState.setActive("whileInView", e);
            let { onViewportEnter: n, onViewportLeave: i } =
                this.node.getProps(),
              s = e ? n : i;
            s && s(t);
          });
        }
        mount() {
          this.startObserver();
        }
        update() {
          if ("undefined" == typeof IntersectionObserver) return;
          let { props: t, prevProps: e } = this.node;
          ["amount", "margin", "root"].some(
            (function ({ viewport: t = {} }, { viewport: e = {} } = {}) {
              return (n) => t[n] !== e[n];
            })(t, e)
          ) && this.startObserver();
        }
        unmount() {}
      }
      let A = {
        inView: { Feature: w },
        tap: { Feature: v },
        focus: { Feature: c },
        hover: { Feature: u },
      };
    },
    84593: function (t, e, n) {
      n.d(e, {
        K: function () {
          return r;
        },
      });
      var i = n(10664);
      function r(t) {
        for (let e in t) i.A[e] = { ...i.A[e], ...t[e] };
      }
    },
    43946: function (t, e, n) {
      n.d(e, {
        j: function () {
          return s;
        },
      });
      var i = n(97244),
        r = n(84163);
      function s(t, { layout: e, layoutId: n }) {
        return (
          r.G.has(t) ||
          t.startsWith("origin") ||
          ((e || void 0 !== n) && (!!i.P[t] || "opacity" === t))
        );
      }
    },
    9149: function (t, e, n) {
      function i({ top: t, left: e, right: n, bottom: i }) {
        return { x: { min: e, max: n }, y: { min: t, max: i } };
      }
      function r({ x: t, y: e }) {
        return { top: e.min, right: t.max, bottom: e.max, left: t.min };
      }
      function s(t, e) {
        if (!e) return t;
        let n = e({ x: t.left, y: t.top }),
          i = e({ x: t.right, y: t.bottom });
        return { top: n.y, left: n.x, bottom: i.y, right: i.x };
      }
      n.d(e, {
        d7: function () {
          return s;
        },
        i8: function () {
          return i;
        },
        z2: function () {
          return r;
        },
      });
    },
    41723: function (t, e, n) {
      n.d(e, {
        D2: function () {
          return m;
        },
        YY: function () {
          return u;
        },
        am: function () {
          return c;
        },
        o2: function () {
          return l;
        },
        q2: function () {
          return s;
        },
      });
      var i = n(78583),
        r = n(45153);
      function s(t, e, n) {
        return n + e * (t - n);
      }
      function o(t, e, n, i, r) {
        return void 0 !== r && (t = i + r * (t - i)), i + n * (t - i) + e;
      }
      function a(t, e = 0, n = 1, i, r) {
        (t.min = o(t.min, e, n, i, r)), (t.max = o(t.max, e, n, i, r));
      }
      function l(t, { x: e, y: n }) {
        a(t.x, e.translate, e.scale, e.originPoint),
          a(t.y, n.translate, n.scale, n.originPoint);
      }
      function u(t, e, n, i = !1) {
        let s, o;
        let a = n.length;
        if (a) {
          e.x = e.y = 1;
          for (let u = 0; u < a; u++) {
            o = (s = n[u]).projectionDelta;
            let a = s.instance;
            (!a || !a.style || "contents" !== a.style.display) &&
              (i &&
                s.options.layoutScroll &&
                s.scroll &&
                s !== s.root &&
                m(t, { x: -s.scroll.offset.x, y: -s.scroll.offset.y }),
              o && ((e.x *= o.x.scale), (e.y *= o.y.scale), l(t, o)),
              i && (0, r.ud)(s.latestValues) && m(t, s.latestValues));
          }
          (e.x = h(e.x)), (e.y = h(e.y));
        }
      }
      function h(t) {
        return Number.isInteger(t)
          ? t
          : t > 1.0000000000001 || t < 0.999999999999
          ? t
          : 1;
      }
      function c(t, e) {
        (t.min = t.min + e), (t.max = t.max + e);
      }
      function d(t, e, [n, r, s]) {
        let o = void 0 !== e[s] ? e[s] : 0.5,
          l = (0, i.C)(t.min, t.max, o);
        a(t, e[n], e[r], l, e.scale);
      }
      let p = ["x", "scaleX", "originX"],
        f = ["y", "scaleY", "originY"];
      function m(t, e) {
        d(t.x, e, p), d(t.y, e, f);
      }
    },
    1202: function (t, e, n) {
      n.d(e, {
        dO: function () {
          return o;
        },
        wc: function () {
          return r;
        },
      });
      let i = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        r = () => ({ x: i(), y: i() }),
        s = () => ({ min: 0, max: 0 }),
        o = () => ({ x: s(), y: s() });
    },
    97244: function (t, e, n) {
      n.d(e, {
        B: function () {
          return r;
        },
        P: function () {
          return i;
        },
      });
      let i = {};
      function r(t) {
        Object.assign(i, t);
      }
    },
    45153: function (t, e, n) {
      function i(t) {
        return void 0 === t || 1 === t;
      }
      function r({ scale: t, scaleX: e, scaleY: n }) {
        return !i(t) || !i(e) || !i(n);
      }
      function s(t) {
        return r(t) || o(t) || t.z || t.rotate || t.rotateX || t.rotateY;
      }
      function o(t) {
        var e, n;
        return ((e = t.x) && "0%" !== e) || ((n = t.y) && "0%" !== n);
      }
      n.d(e, {
        D_: function () {
          return o;
        },
        Lj: function () {
          return r;
        },
        ud: function () {
          return s;
        },
      });
    },
    76292: function (t, e, n) {
      n.d(e, {
        J: function () {
          return s;
        },
        z: function () {
          return o;
        },
      });
      var i = n(9149),
        r = n(41723);
      function s(t, e) {
        return (0, i.i8)((0, i.d7)(t.getBoundingClientRect(), e));
      }
      function o(t, e, n) {
        let i = s(t, n),
          { scroll: o } = e;
        return o && ((0, r.am)(i.x, o.offset.x), (0, r.am)(i.y, o.offset.y)), i;
      }
    },
    49538: function (t, e, n) {
      n.d(e, {
        b: function () {
          return tl;
        },
      });
      var i = n(17670),
        r = n(1297),
        s = n(84163),
        o = n(61533),
        a = n(12161),
        l = n(68687),
        u = n(76292),
        h = n(38809),
        c = n(18358),
        d = n(38477);
      let p = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
      function f(t, e, n = 1) {
        (0, c.k)(
          n <= 4,
          `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`
        );
        let [i, s] = (function (t) {
          let e = p.exec(t);
          if (!e) return [,];
          let [, n, i] = e;
          return [n, i];
        })(t);
        if (!i) return;
        let o = window.getComputedStyle(e).getPropertyValue(i);
        if (o) {
          let t = o.trim();
          return (0, d.P)(t) ? parseFloat(t) : t;
        }
        return (0, r.tm)(s) ? f(s, e, n + 1) : s;
      }
      var m = n(39958),
        v = n(91323),
        g = n(47976),
        y = n(95832),
        x = n(70526);
      let P = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
          "translateX",
          "translateY",
        ]),
        b = (t) => P.has(t),
        w = (t) => Object.keys(t).some(b),
        A = (t) => t === y.Rx || t === x.px,
        T = (t, e) => parseFloat(t.split(", ")[e]),
        S =
          (t, e) =>
          (n, { transform: i }) => {
            if ("none" === i || !i) return 0;
            let r = i.match(/^matrix3d\((.+)\)$/);
            if (r) return T(r[1], e);
            {
              let e = i.match(/^matrix\((.+)\)$/);
              return e ? T(e[1], t) : 0;
            }
          },
        C = new Set(["x", "y", "z"]),
        V = s._.filter((t) => !C.has(t)),
        E = {
          width: ({ x: t }, { paddingLeft: e = "0", paddingRight: n = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(n),
          height: ({ y: t }, { paddingTop: e = "0", paddingBottom: n = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(n),
          top: (t, { top: e }) => parseFloat(e),
          left: (t, { left: e }) => parseFloat(e),
          bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
          right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
          x: S(4, 13),
          y: S(5, 14),
        };
      (E.translateX = E.x), (E.translateY = E.y);
      let k = (t, e, n) => {
          let i = e.measureViewportBox(),
            r = getComputedStyle(e.current),
            { display: s } = r,
            o = {};
          "none" === s && e.setStaticValue("display", t.display || "block"),
            n.forEach((t) => {
              o[t] = E[t](i, r);
            }),
            e.render();
          let a = e.measureViewportBox();
          return (
            n.forEach((n) => {
              let i = e.getValue(n);
              i && i.jump(o[n]), (t[n] = E[n](a, r));
            }),
            t
          );
        },
        M = (t, e, n = {}, i = {}) => {
          (e = { ...e }), (i = { ...i });
          let r = Object.keys(e).filter(b),
            s = [],
            o = !1,
            a = [];
          if (
            (r.forEach((r) => {
              let l;
              let u = t.getValue(r);
              if (!t.hasValue(r)) return;
              let h = n[r],
                d = (0, v.C)(h),
                p = e[r];
              if ((0, m.C)(p)) {
                let t = p.length,
                  e = null === p[0] ? 1 : 0;
                (h = p[e]), (d = (0, v.C)(h));
                for (let n = e; n < t && null !== p[n]; n++)
                  l
                    ? (0, c.k)(
                        (0, v.C)(p[n]) === l,
                        "All keyframes must be of the same type"
                      )
                    : ((l = (0, v.C)(p[n])),
                      (0, c.k)(
                        l === d || (A(d) && A(l)),
                        "Keyframes must be of the same dimension as the current value"
                      ));
              } else l = (0, v.C)(p);
              if (d !== l) {
                if (A(d) && A(l)) {
                  let t = u.get();
                  "string" == typeof t && u.set(parseFloat(t)),
                    "string" == typeof p
                      ? (e[r] = parseFloat(p))
                      : Array.isArray(p) &&
                        l === x.px &&
                        (e[r] = p.map(parseFloat));
                } else
                  (null == d ? void 0 : d.transform) &&
                  (null == l ? void 0 : l.transform) &&
                  (0 === h || 0 === p)
                    ? 0 === h
                      ? u.set(l.transform(h))
                      : (e[r] = d.transform(p))
                    : (o ||
                        ((s = (function (t) {
                          let e = [];
                          return (
                            V.forEach((n) => {
                              let i = t.getValue(n);
                              void 0 !== i &&
                                (e.push([n, i.get()]),
                                i.set(n.startsWith("scale") ? 1 : 0));
                            }),
                            e.length && t.render(),
                            e
                          );
                        })(t)),
                        (o = !0)),
                      a.push(r),
                      (i[r] = void 0 !== i[r] ? i[r] : e[r]),
                      u.jump(p));
              }
            }),
            !a.length)
          )
            return { target: e, transitionEnd: i };
          {
            let n = a.indexOf("height") >= 0 ? window.pageYOffset : null,
              r = k(e, t, a);
            return (
              s.length &&
                s.forEach(([e, n]) => {
                  t.getValue(e).set(n);
                }),
              t.render(),
              g.j && null !== n && window.scrollTo({ top: n }),
              { target: r, transitionEnd: i }
            );
          }
        },
        D = (t, e, n, i) => {
          var s, o;
          let a = (function (t, { ...e }, n) {
            let i = t.current;
            if (!(i instanceof Element)) return { target: e, transitionEnd: n };
            for (let s in (n && (n = { ...n }),
            t.values.forEach((t) => {
              let e = t.get();
              if (!(0, r.tm)(e)) return;
              let n = f(e, i);
              n && t.set(n);
            }),
            e)) {
              let t = e[s];
              if (!(0, r.tm)(t)) continue;
              let o = f(t, i);
              o && ((e[s] = o), n || (n = {}), void 0 === n[s] && (n[s] = t));
            }
            return { target: e, transitionEnd: n };
          })(t, e, i);
          return (
            (e = a.target),
            (i = a.transitionEnd),
            (s = e),
            (o = i),
            w(s) ? M(t, s, n, o) : { target: s, transitionEnd: o }
          );
        };
      var R = n(1202),
        L = n(8746);
      let j = { current: null },
        F = { current: !1 };
      var B = n(10496),
        O = n(31464),
        U = n(94102),
        I = n(3145),
        W = n(2029),
        $ = n(76624),
        N = n(3988),
        H = n(10664),
        X = n(74680);
      let z = new WeakMap();
      var Y = n(24581);
      let Z = Object.keys(H.A),
        q = Z.length,
        G = [
          "AnimationStart",
          "AnimationComplete",
          "Update",
          "BeforeLayoutMeasure",
          "LayoutMeasure",
          "LayoutAnimationStart",
          "LayoutAnimationComplete",
        ],
        K = X.V.length;
      class _ {
        constructor(
          {
            parent: t,
            props: e,
            presenceContext: n,
            reducedMotionConfig: i,
            visualState: r,
          },
          s = {}
        ) {
          (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify("Update", this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection
                ));
            }),
            (this.scheduleRender = () => Y.Wi.render(this.render, !1, !0));
          let { latestValues: o, renderState: a } = r;
          (this.latestValues = o),
            (this.baseTarget = { ...o }),
            (this.initialValues = e.initial ? { ...o } : {}),
            (this.renderState = a),
            (this.parent = t),
            (this.props = e),
            (this.presenceContext = n),
            (this.depth = t ? t.depth + 1 : 0),
            (this.reducedMotionConfig = i),
            (this.options = s),
            (this.isControllingVariants = (0, W.G)(e)),
            (this.isVariantNode = (0, W.M)(e)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(t && t.current));
          let { willChange: l, ...u } = this.scrapeMotionValuesFromProps(e, {});
          for (let t in u) {
            let e = u[t];
            void 0 !== o[t] &&
              (0, I.i)(e) &&
              (e.set(o[t], !1), (0, U.L)(l) && l.add(t));
          }
        }
        scrapeMotionValuesFromProps(t, e) {
          return {};
        }
        mount(t) {
          (this.current = t),
            z.set(t, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(t),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((t, e) => this.bindToMotionValue(e, t)),
            F.current ||
              (function () {
                if (((F.current = !0), g.j)) {
                  if (window.matchMedia) {
                    let t = window.matchMedia("(prefers-reduced-motion)"),
                      e = () => (j.current = t.matches);
                    t.addListener(e), e();
                  } else j.current = !1;
                }
              })(),
            (this.shouldReduceMotion =
              "never" !== this.reducedMotionConfig &&
              ("always" === this.reducedMotionConfig || j.current)),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext);
        }
        unmount() {
          for (let t in (z.delete(this.current),
          this.projection && this.projection.unmount(),
          (0, Y.Pn)(this.notifyUpdate),
          (0, Y.Pn)(this.render),
          this.valueSubscriptions.forEach((t) => t()),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent && this.parent.children.delete(this),
          this.events))
            this.events[t].clear();
          for (let t in this.features) this.features[t].unmount();
          this.current = null;
        }
        bindToMotionValue(t, e) {
          let n = s.G.has(t),
            i = e.on("change", (e) => {
              (this.latestValues[t] = e),
                this.props.onUpdate && Y.Wi.update(this.notifyUpdate, !1, !0),
                n && this.projection && (this.projection.isTransformDirty = !0);
            }),
            r = e.on("renderRequest", this.scheduleRender);
          this.valueSubscriptions.set(t, () => {
            i(), r();
          });
        }
        sortNodePosition(t) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === t.type
            ? this.sortInstanceNodePosition(this.current, t.current)
            : 0;
        }
        loadFeatures({ children: t, ...e }, n, i, r) {
          let s, o;
          for (let t = 0; t < q; t++) {
            let n = Z[t],
              {
                isEnabled: i,
                Feature: r,
                ProjectionNode: a,
                MeasureLayout: l,
              } = H.A[n];
            a && (s = a),
              i(e) &&
                (!this.features[n] && r && (this.features[n] = new r(this)),
                l && (o = l));
          }
          if (
            ("html" === this.type || "svg" === this.type) &&
            !this.projection &&
            s
          ) {
            this.projection = new s(
              this.latestValues,
              this.parent && this.parent.projection
            );
            let {
              layoutId: t,
              layout: n,
              drag: i,
              dragConstraints: o,
              layoutScroll: a,
              layoutRoot: l,
            } = e;
            this.projection.setOptions({
              layoutId: t,
              layout: n,
              alwaysMeasureLayout: !!i || (o && (0, L.I)(o)),
              visualElement: this,
              scheduleRender: () => this.scheduleRender(),
              animationType: "string" == typeof n ? n : "both",
              initialPromotionConfig: r,
              layoutScroll: a,
              layoutRoot: l,
            });
          }
          return o;
        }
        updateFeatures() {
          for (let t in this.features) {
            let e = this.features[t];
            e.isMounted ? e.update() : (e.mount(), (e.isMounted = !0));
          }
        }
        triggerBuild() {
          this.build(
            this.renderState,
            this.latestValues,
            this.options,
            this.props
          );
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : (0, R.dO)();
        }
        getStaticValue(t) {
          return this.latestValues[t];
        }
        setStaticValue(t, e) {
          this.latestValues[t] = e;
        }
        makeTargetAnimatable(t, e = !0) {
          return this.makeTargetAnimatableFromInstance(t, e);
        }
        update(t, e) {
          (t.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = t),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = e);
          for (let e = 0; e < G.length; e++) {
            let n = G[e];
            this.propEventSubscriptions[n] &&
              (this.propEventSubscriptions[n](),
              delete this.propEventSubscriptions[n]);
            let i = t["on" + n];
            i && (this.propEventSubscriptions[n] = this.on(n, i));
          }
          (this.prevMotionValues = (function (t, e, n) {
            let { willChange: i } = e;
            for (let r in e) {
              let s = e[r],
                o = n[r];
              if ((0, I.i)(s)) t.addValue(r, s), (0, U.L)(i) && i.add(r);
              else if ((0, I.i)(o))
                t.addValue(r, (0, O.BX)(s, { owner: t })),
                  (0, U.L)(i) && i.remove(r);
              else if (o !== s) {
                if (t.hasValue(r)) {
                  let e = t.getValue(r);
                  e.hasAnimated || e.set(s);
                } else {
                  let e = t.getStaticValue(r);
                  t.addValue(r, (0, O.BX)(void 0 !== e ? e : s, { owner: t }));
                }
              }
            }
            for (let i in n) void 0 === e[i] && t.removeValue(i);
            return e;
          })(
            this,
            this.scrapeMotionValuesFromProps(t, this.prevProps),
            this.prevMotionValues
          )),
            this.handleChildMotionValue && this.handleChildMotionValue();
        }
        getProps() {
          return this.props;
        }
        getVariant(t) {
          return this.props.variants ? this.props.variants[t] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode
            ? this
            : this.parent
            ? this.parent.getClosestVariantNode()
            : void 0;
        }
        getVariantContext(t = !1) {
          if (t) return this.parent ? this.parent.getVariantContext() : void 0;
          if (!this.isControllingVariants) {
            let t = (this.parent && this.parent.getVariantContext()) || {};
            return (
              void 0 !== this.props.initial && (t.initial = this.props.initial),
              t
            );
          }
          let e = {};
          for (let t = 0; t < K; t++) {
            let n = X.V[t],
              i = this.props[n];
            ((0, $.$)(i) || !1 === i) && (e[n] = i);
          }
          return e;
        }
        addVariantChild(t) {
          let e = this.getClosestVariantNode();
          if (e)
            return (
              e.variantChildren && e.variantChildren.add(t),
              () => e.variantChildren.delete(t)
            );
        }
        addValue(t, e) {
          e !== this.values.get(t) &&
            (this.removeValue(t), this.bindToMotionValue(t, e)),
            this.values.set(t, e),
            (this.latestValues[t] = e.get());
        }
        removeValue(t) {
          this.values.delete(t);
          let e = this.valueSubscriptions.get(t);
          e && (e(), this.valueSubscriptions.delete(t)),
            delete this.latestValues[t],
            this.removeValueFromRenderState(t, this.renderState);
        }
        hasValue(t) {
          return this.values.has(t);
        }
        getValue(t, e) {
          if (this.props.values && this.props.values[t])
            return this.props.values[t];
          let n = this.values.get(t);
          return (
            void 0 === n &&
              void 0 !== e &&
              ((n = (0, O.BX)(e, { owner: this })), this.addValue(t, n)),
            n
          );
        }
        readValue(t) {
          var e;
          return void 0 === this.latestValues[t] && this.current
            ? null !== (e = this.getBaseTargetFromProps(this.props, t)) &&
              void 0 !== e
              ? e
              : this.readValueFromInstance(this.current, t, this.options)
            : this.latestValues[t];
        }
        setBaseTarget(t, e) {
          this.baseTarget[t] = e;
        }
        getBaseTarget(t) {
          var e;
          let { initial: n } = this.props,
            i =
              "string" == typeof n || "object" == typeof n
                ? null === (e = (0, N.o)(this.props, n)) || void 0 === e
                  ? void 0
                  : e[t]
                : void 0;
          if (n && void 0 !== i) return i;
          let r = this.getBaseTargetFromProps(this.props, t);
          return void 0 === r || (0, I.i)(r)
            ? void 0 !== this.initialValues[t] && void 0 === i
              ? void 0
              : this.baseTarget[t]
            : r;
        }
        on(t, e) {
          return (
            this.events[t] || (this.events[t] = new B.L()),
            this.events[t].add(e)
          );
        }
        notify(t, ...e) {
          this.events[t] && this.events[t].notify(...e);
        }
      }
      class J extends _ {
        sortInstanceNodePosition(t, e) {
          return 2 & t.compareDocumentPosition(e) ? 1 : -1;
        }
        getBaseTargetFromProps(t, e) {
          return t.style ? t.style[e] : void 0;
        }
        removeValueFromRenderState(t, { vars: e, style: n }) {
          delete e[t], delete n[t];
        }
        makeTargetAnimatableFromInstance(
          { transition: t, transitionEnd: e, ...n },
          i
        ) {
          let r = (0, h.P$)(n, t || {}, this);
          if (i) {
            (0, h.GJ)(this, n, r);
            let t = D(this, n, r, e);
            (e = t.transitionEnd), (n = t.target);
          }
          return { transition: t, transitionEnd: e, ...n };
        }
      }
      class Q extends J {
        constructor() {
          super(...arguments), (this.type = "html");
        }
        readValueFromInstance(t, e) {
          if (s.G.has(e)) {
            let t = (0, l.A)(e);
            return (t && t.default) || 0;
          }
          {
            let n = window.getComputedStyle(t),
              i = ((0, r.f9)(e) ? n.getPropertyValue(e) : n[e]) || 0;
            return "string" == typeof i ? i.trim() : i;
          }
        }
        measureInstanceViewportBox(t, { transformPagePoint: e }) {
          return (0, u.J)(t, e);
        }
        build(t, e, n, r) {
          (0, i.r)(t, e, n, r.transformTemplate);
        }
        scrapeMotionValuesFromProps(t, e) {
          return (0, o.U)(t, e);
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
          let { children: t } = this.props;
          (0, I.i)(t) &&
            (this.childSubscription = t.on("change", (t) => {
              this.current && (this.current.textContent = `${t}`);
            }));
        }
        renderInstance(t, e, n, i) {
          (0, a.N)(t, e, n, i);
        }
      }
      var tt = n(7228),
        te = n(38800),
        tn = n(51838),
        ti = n(36882),
        tr = n(994),
        ts = n(66840);
      class to extends J {
        constructor() {
          super(...arguments), (this.type = "svg"), (this.isSVGTag = !1);
        }
        getBaseTargetFromProps(t, e) {
          return t[e];
        }
        readValueFromInstance(t, e) {
          if (s.G.has(e)) {
            let t = (0, l.A)(e);
            return (t && t.default) || 0;
          }
          return (e = ti.s.has(e) ? e : (0, tn.D)(e)), t.getAttribute(e);
        }
        measureInstanceViewportBox() {
          return (0, R.dO)();
        }
        scrapeMotionValuesFromProps(t, e) {
          return (0, tt.U)(t, e);
        }
        build(t, e, n, i) {
          (0, te.i)(t, e, n, this.isSVGTag, i.transformTemplate);
        }
        renderInstance(t, e, n, i) {
          (0, tr.K)(t, e, n, i);
        }
        mount(t) {
          (this.isSVGTag = (0, ts.a)(t.tagName)), super.mount(t);
        }
      }
      var ta = n(44983);
      let tl = (t, e) =>
        (0, ta.q)(t)
          ? new to(e, { enableHardwareAcceleration: !1 })
          : new Q(e, { enableHardwareAcceleration: !0 });
    },
    20430: function (t, e, n) {
      n.d(e, {
        D: function () {
          return P;
        },
      });
      var i = n(2784),
        r = n(87649),
        s = n(29031),
        o = n(38168),
        a = n(54283),
        l = n(73612),
        u = n(77116),
        h = n(4723),
        c = n(8746),
        d = n(76624),
        p = n(2029);
      function f(t) {
        return Array.isArray(t) ? t.join(" ") : t;
      }
      var m = n(84593),
        v = n(47976),
        g = n(96179),
        y = n(54578);
      let x = Symbol.for("motionComponentSymbol");
      function P(t) {
        function e(e, n = {}) {
          return (function ({
            preloadedFeatures: t,
            createVisualElement: e,
            useRender: n,
            useVisualState: P,
            Component: b,
          }) {
            t && (0, m.K)(t);
            let w = (0, i.forwardRef)(function (m, x) {
              var w;
              let A;
              let T = {
                  ...(0, i.useContext)(r._),
                  ...m,
                  layoutId: (function ({ layoutId: t }) {
                    let e = (0, i.useContext)(g.p).id;
                    return e && void 0 !== t ? e + "-" + t : t;
                  })(m),
                },
                { isStatic: S } = T,
                C = (function (t) {
                  let { initial: e, animate: n } = (function (t, e) {
                    if ((0, p.G)(t)) {
                      let { initial: e, animate: n } = t;
                      return {
                        initial: !1 === e || (0, d.$)(e) ? e : void 0,
                        animate: (0, d.$)(n) ? n : void 0,
                      };
                    }
                    return !1 !== t.inherit ? e : {};
                  })(t, (0, i.useContext)(s.v));
                  return (0, i.useMemo)(
                    () => ({ initial: e, animate: n }),
                    [f(e), f(n)]
                  );
                })(m),
                V = P(m, S);
              if (!S && v.j) {
                C.visualElement = (function (t, e, n, c) {
                  let { visualElement: d } = (0, i.useContext)(s.v),
                    p = (0, i.useContext)(l.u),
                    f = (0, i.useContext)(o.O),
                    m = (0, i.useContext)(r._).reducedMotion,
                    v = (0, i.useRef)();
                  (c = c || p.renderer),
                    !v.current &&
                      c &&
                      (v.current = c(t, {
                        visualState: e,
                        parent: d,
                        props: n,
                        presenceContext: f,
                        blockInitialAnimation: !!f && !1 === f.initial,
                        reducedMotionConfig: m,
                      }));
                  let g = v.current;
                  (0, i.useInsertionEffect)(() => {
                    g && g.update(n, f);
                  });
                  let y = (0, i.useRef)(!!(n[u.M] && !window.HandoffComplete));
                  return (
                    (0, a.L)(() => {
                      g &&
                        (h.g.postRender(g.render),
                        y.current &&
                          g.animationState &&
                          g.animationState.animateChanges());
                    }),
                    (0, i.useEffect)(() => {
                      g &&
                        (g.updateFeatures(),
                        !y.current &&
                          g.animationState &&
                          g.animationState.animateChanges(),
                        y.current &&
                          ((y.current = !1), (window.HandoffComplete = !0)));
                    }),
                    g
                  );
                })(b, V, T, e);
                let n = (0, i.useContext)(y.g),
                  c = (0, i.useContext)(l.u).strict;
                C.visualElement &&
                  (A = C.visualElement.loadFeatures(T, c, t, n));
              }
              return i.createElement(
                s.v.Provider,
                { value: C },
                A && C.visualElement
                  ? i.createElement(A, { visualElement: C.visualElement, ...T })
                  : null,
                n(
                  b,
                  m,
                  ((w = C.visualElement),
                  (0, i.useCallback)(
                    (t) => {
                      t && V.mount && V.mount(t),
                        w && (t ? w.mount(t) : w.unmount()),
                        x &&
                          ("function" == typeof x
                            ? x(t)
                            : (0, c.I)(x) && (x.current = t));
                    },
                    [w]
                  )),
                  V,
                  S,
                  C.visualElement
                )
              );
            });
            return (w[x] = b), w;
          })(t(e, n));
        }
        if ("undefined" == typeof Proxy) return e;
        let n = new Map();
        return new Proxy(e, {
          get: (t, i) => (n.has(i) || n.set(i, e(i)), n.get(i)),
        });
      }
    },
    5126: function (t, e, n) {
      n.d(e, {
        E: function () {
          return ec;
        },
      });
      var i = n(20430),
        r = n(20038),
        s = n(1788),
        o = n(97489),
        a = n(4350),
        l = n(31632),
        u = n(18358),
        h = n(23760),
        c = n(41643),
        d = n(63011),
        p = n(74757);
      let f = (t, e) => Math.abs(t - e);
      var m = n(8342),
        v = n(24581);
      class g {
        constructor(
          t,
          e,
          {
            transformPagePoint: n,
            contextWindow: i,
            dragSnapToOrigin: r = !1,
          } = {}
        ) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.contextWindow = window),
            (this.updatePoint = () => {
              var t, e;
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              let n = P(this.lastMoveEventInfo, this.history),
                i = null !== this.startEvent,
                r =
                  ((t = n.offset),
                  (e = { x: 0, y: 0 }),
                  Math.sqrt(f(t.x, e.x) ** 2 + f(t.y, e.y) ** 2) >= 3);
              if (!i && !r) return;
              let { point: s } = n,
                { timestamp: o } = v.frameData;
              this.history.push({ ...s, timestamp: o });
              let { onStart: a, onMove: l } = this.handlers;
              i ||
                (a && a(this.lastMoveEvent, n),
                (this.startEvent = this.lastMoveEvent)),
                l && l(this.lastMoveEvent, n);
            }),
            (this.handlePointerMove = (t, e) => {
              (this.lastMoveEvent = t),
                (this.lastMoveEventInfo = y(e, this.transformPagePoint)),
                v.Wi.update(this.updatePoint, !0);
            }),
            (this.handlePointerUp = (t, e) => {
              this.end();
              let {
                onEnd: n,
                onSessionEnd: i,
                resumeAnimation: r,
              } = this.handlers;
              if (
                (this.dragSnapToOrigin && r && r(),
                !(this.lastMoveEvent && this.lastMoveEventInfo))
              )
                return;
              let s = P(
                "pointercancel" === t.type
                  ? this.lastMoveEventInfo
                  : y(e, this.transformPagePoint),
                this.history
              );
              this.startEvent && n && n(t, s), i && i(t, s);
            }),
            !(0, m.D)(t))
          )
            return;
          (this.dragSnapToOrigin = r),
            (this.handlers = e),
            (this.transformPagePoint = n),
            (this.contextWindow = i || window);
          let s = y((0, h.Q)(t), this.transformPagePoint),
            { point: o } = s,
            { timestamp: a } = v.frameData;
          this.history = [{ ...o, timestamp: a }];
          let { onSessionStart: l } = e;
          l && l(t, P(s, this.history)),
            (this.removeListeners = (0, p.z)(
              (0, d.a)(
                this.contextWindow,
                "pointermove",
                this.handlePointerMove
              ),
              (0, d.a)(this.contextWindow, "pointerup", this.handlePointerUp),
              (0, d.a)(
                this.contextWindow,
                "pointercancel",
                this.handlePointerUp
              )
            ));
        }
        updateHandlers(t) {
          this.handlers = t;
        }
        end() {
          this.removeListeners && this.removeListeners(),
            (0, v.Pn)(this.updatePoint);
        }
      }
      function y(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function x(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function P({ point: t }, e) {
        return {
          point: t,
          delta: x(t, b(e)),
          offset: x(t, e[0]),
          velocity: (function (t, e) {
            if (t.length < 2) return { x: 0, y: 0 };
            let n = t.length - 1,
              i = null,
              r = b(t);
            for (
              ;
              n >= 0 &&
              ((i = t[n]), !(r.timestamp - i.timestamp > (0, c.w)(0.1)));

            )
              n--;
            if (!i) return { x: 0, y: 0 };
            let s = (0, c.X)(r.timestamp - i.timestamp);
            if (0 === s) return { x: 0, y: 0 };
            let o = { x: (r.x - i.x) / s, y: (r.y - i.y) / s };
            return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
          })(e, 0),
        };
      }
      function b(t) {
        return t[t.length - 1];
      }
      var w = n(73249),
        A = n(8746),
        T = n(3477),
        S = n(78583);
      function C(t) {
        return t.max - t.min;
      }
      function V(t, e = 0, n = 0.01) {
        return Math.abs(t - e) <= n;
      }
      function E(t, e, n, i = 0.5) {
        (t.origin = i),
          (t.originPoint = (0, S.C)(e.min, e.max, t.origin)),
          (t.scale = C(n) / C(e)),
          (V(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1),
          (t.translate = (0, S.C)(n.min, n.max, t.origin) - t.originPoint),
          (V(t.translate) || isNaN(t.translate)) && (t.translate = 0);
      }
      function k(t, e, n, i) {
        E(t.x, e.x, n.x, i ? i.originX : void 0),
          E(t.y, e.y, n.y, i ? i.originY : void 0);
      }
      function M(t, e, n) {
        (t.min = n.min + e.min), (t.max = t.min + C(e));
      }
      function D(t, e, n) {
        (t.min = e.min - n.min), (t.max = t.min + C(e));
      }
      function R(t, e, n) {
        D(t.x, e.x, n.x), D(t.y, e.y, n.y);
      }
      var L = n(40867);
      function j(t, e, n) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== n ? t.max + n - (t.max - t.min) : void 0,
        };
      }
      function F(t, e) {
        let n = e.min - t.min,
          i = e.max - t.max;
        return (
          e.max - e.min < t.max - t.min && ([n, i] = [i, n]), { min: n, max: i }
        );
      }
      function B(t, e, n) {
        return { min: O(t, e), max: O(t, n) };
      }
      function O(t, e) {
        return "number" == typeof t ? t : t[e] || 0;
      }
      var U = n(1202);
      function I(t) {
        return [t("x"), t("y")];
      }
      var W = n(76292),
        $ = n(9149),
        N = n(86971),
        H = n(70526),
        X = n(59753);
      let z = ({ current: t }) => (t ? t.ownerDocument.defaultView : null),
        Y = new WeakMap();
      class Z {
        constructor(t) {
          (this.openGlobalLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = (0, U.dO)()),
            (this.visualElement = t);
        }
        start(t, { snapToCursor: e = !1 } = {}) {
          let { presenceContext: n } = this.visualElement;
          if (n && !1 === n.isPresent) return;
          let { dragSnapToOrigin: i } = this.getProps();
          this.panSession = new g(
            t,
            {
              onSessionStart: (t) => {
                let { dragSnapToOrigin: n } = this.getProps();
                n ? this.pauseAnimation() : this.stopAnimation(),
                  e && this.snapToCursor((0, h.Q)(t, "page").point);
              },
              onStart: (t, e) => {
                let {
                  drag: n,
                  dragPropagation: i,
                  onDragStart: r,
                } = this.getProps();
                if (
                  n &&
                  !i &&
                  (this.openGlobalLock && this.openGlobalLock(),
                  (this.openGlobalLock = (0, w.fJ)(n)),
                  !this.openGlobalLock)
                )
                  return;
                (this.isDragging = !0),
                  (this.currentDirection = null),
                  this.resolveConstraints(),
                  this.visualElement.projection &&
                    ((this.visualElement.projection.isAnimationBlocked = !0),
                    (this.visualElement.projection.target = void 0)),
                  I((t) => {
                    let e = this.getAxisMotionValue(t).get() || 0;
                    if (H.aQ.test(e)) {
                      let { projection: n } = this.visualElement;
                      if (n && n.layout) {
                        let i = n.layout.layoutBox[t];
                        if (i) {
                          let t = C(i);
                          e = (parseFloat(e) / 100) * t;
                        }
                      }
                    }
                    this.originPoint[t] = e;
                  }),
                  r && v.Wi.update(() => r(t, e), !1, !0);
                let { animationState: s } = this.visualElement;
                s && s.setActive("whileDrag", !0);
              },
              onMove: (t, e) => {
                let {
                  dragPropagation: n,
                  dragDirectionLock: i,
                  onDirectionLock: r,
                  onDrag: s,
                } = this.getProps();
                if (!n && !this.openGlobalLock) return;
                let { offset: o } = e;
                if (i && null === this.currentDirection) {
                  (this.currentDirection = (function (t, e = 10) {
                    let n = null;
                    return (
                      Math.abs(t.y) > e
                        ? (n = "y")
                        : Math.abs(t.x) > e && (n = "x"),
                      n
                    );
                  })(o)),
                    null !== this.currentDirection &&
                      r &&
                      r(this.currentDirection);
                  return;
                }
                this.updateAxis("x", e.point, o),
                  this.updateAxis("y", e.point, o),
                  this.visualElement.render(),
                  s && s(t, e);
              },
              onSessionEnd: (t, e) => this.stop(t, e),
              resumeAnimation: () =>
                I((t) => {
                  var e;
                  return (
                    "paused" === this.getAnimationState(t) &&
                    (null === (e = this.getAxisMotionValue(t).animation) ||
                    void 0 === e
                      ? void 0
                      : e.play())
                  );
                }),
            },
            {
              transformPagePoint: this.visualElement.getTransformPagePoint(),
              dragSnapToOrigin: i,
              contextWindow: z(this.visualElement),
            }
          );
        }
        stop(t, e) {
          let n = this.isDragging;
          if ((this.cancel(), !n)) return;
          let { velocity: i } = e;
          this.startAnimation(i);
          let { onDragEnd: r } = this.getProps();
          r && v.Wi.update(() => r(t, e));
        }
        cancel() {
          this.isDragging = !1;
          let { projection: t, animationState: e } = this.visualElement;
          t && (t.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            (this.panSession = void 0);
          let { dragPropagation: n } = this.getProps();
          !n &&
            this.openGlobalLock &&
            (this.openGlobalLock(), (this.openGlobalLock = null)),
            e && e.setActive("whileDrag", !1);
        }
        updateAxis(t, e, n) {
          let { drag: i } = this.getProps();
          if (!n || !q(t, i, this.currentDirection)) return;
          let r = this.getAxisMotionValue(t),
            s = this.originPoint[t] + n[t];
          this.constraints &&
            this.constraints[t] &&
            (s = (function (t, { min: e, max: n }, i) {
              return (
                void 0 !== e && t < e
                  ? (t = i ? (0, S.C)(e, t, i.min) : Math.max(t, e))
                  : void 0 !== n &&
                    t > n &&
                    (t = i ? (0, S.C)(n, t, i.max) : Math.min(t, n)),
                t
              );
            })(s, this.constraints[t], this.elastic[t])),
            r.set(s);
        }
        resolveConstraints() {
          var t;
          let { dragConstraints: e, dragElastic: n } = this.getProps(),
            i =
              this.visualElement.projection &&
              !this.visualElement.projection.layout
                ? this.visualElement.projection.measure(!1)
                : null === (t = this.visualElement.projection) || void 0 === t
                ? void 0
                : t.layout,
            r = this.constraints;
          e && (0, A.I)(e)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : e && i
            ? (this.constraints = (function (
                t,
                { top: e, left: n, bottom: i, right: r }
              ) {
                return { x: j(t.x, n, r), y: j(t.y, e, i) };
              })(i.layoutBox, e))
            : (this.constraints = !1),
            (this.elastic = (function (t = 0.35) {
              return (
                !1 === t ? (t = 0) : !0 === t && (t = 0.35),
                { x: B(t, "left", "right"), y: B(t, "top", "bottom") }
              );
            })(n)),
            r !== this.constraints &&
              i &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              I((t) => {
                this.getAxisMotionValue(t) &&
                  (this.constraints[t] = (function (t, e) {
                    let n = {};
                    return (
                      void 0 !== e.min && (n.min = e.min - t.min),
                      void 0 !== e.max && (n.max = e.max - t.min),
                      n
                    );
                  })(i.layoutBox[t], this.constraints[t]));
              });
        }
        resolveRefConstraints() {
          var t;
          let { dragConstraints: e, onMeasureDragConstraints: n } =
            this.getProps();
          if (!e || !(0, A.I)(e)) return !1;
          let i = e.current;
          (0, u.k)(
            null !== i,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
          );
          let { projection: r } = this.visualElement;
          if (!r || !r.layout) return !1;
          let s = (0, W.z)(
              i,
              r.root,
              this.visualElement.getTransformPagePoint()
            ),
            o = { x: F((t = r.layout.layoutBox).x, s.x), y: F(t.y, s.y) };
          if (n) {
            let t = n((0, $.z2)(o));
            (this.hasMutatedConstraints = !!t), t && (o = (0, $.i8)(t));
          }
          return o;
        }
        startAnimation(t) {
          let {
              drag: e,
              dragMomentum: n,
              dragElastic: i,
              dragTransition: r,
              dragSnapToOrigin: s,
              onDragTransitionEnd: o,
            } = this.getProps(),
            a = this.constraints || {};
          return Promise.all(
            I((o) => {
              if (!q(o, e, this.currentDirection)) return;
              let l = (a && a[o]) || {};
              s && (l = { min: 0, max: 0 });
              let u = {
                type: "inertia",
                velocity: n ? t[o] : 0,
                bounceStiffness: i ? 200 : 1e6,
                bounceDamping: i ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...r,
                ...l,
              };
              return this.startAxisValueAnimation(o, u);
            })
          ).then(o);
        }
        startAxisValueAnimation(t, e) {
          let n = this.getAxisMotionValue(t);
          return n.start((0, X.v)(t, n, 0, e));
        }
        stopAnimation() {
          I((t) => this.getAxisMotionValue(t).stop());
        }
        pauseAnimation() {
          I((t) => {
            var e;
            return null === (e = this.getAxisMotionValue(t).animation) ||
              void 0 === e
              ? void 0
              : e.pause();
          });
        }
        getAnimationState(t) {
          var e;
          return null === (e = this.getAxisMotionValue(t).animation) ||
            void 0 === e
            ? void 0
            : e.state;
        }
        getAxisMotionValue(t) {
          let e = "_drag" + t.toUpperCase(),
            n = this.visualElement.getProps();
          return (
            n[e] ||
            this.visualElement.getValue(
              t,
              (n.initial ? n.initial[t] : void 0) || 0
            )
          );
        }
        snapToCursor(t) {
          I((e) => {
            let { drag: n } = this.getProps();
            if (!q(e, n, this.currentDirection)) return;
            let { projection: i } = this.visualElement,
              r = this.getAxisMotionValue(e);
            if (i && i.layout) {
              let { min: n, max: s } = i.layout.layoutBox[e];
              r.set(t[e] - (0, S.C)(n, s, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: t, dragConstraints: e } = this.getProps(),
            { projection: n } = this.visualElement;
          if (!(0, A.I)(e) || !n || !this.constraints) return;
          this.stopAnimation();
          let i = { x: 0, y: 0 };
          I((t) => {
            let e = this.getAxisMotionValue(t);
            if (e) {
              let n = e.get();
              i[t] = (function (t, e) {
                let n = 0.5,
                  i = C(t),
                  r = C(e);
                return (
                  r > i
                    ? (n = (0, T.Y)(e.min, e.max - i, t.min))
                    : i > r && (n = (0, T.Y)(t.min, t.max - r, e.min)),
                  (0, L.u)(0, 1, n)
                );
              })({ min: n, max: n }, this.constraints[t]);
            }
          });
          let { transformTemplate: r } = this.visualElement.getProps();
          (this.visualElement.current.style.transform = r ? r({}, "") : "none"),
            n.root && n.root.updateScroll(),
            n.updateLayout(),
            this.resolveConstraints(),
            I((e) => {
              if (!q(e, t, null)) return;
              let n = this.getAxisMotionValue(e),
                { min: r, max: s } = this.constraints[e];
              n.set((0, S.C)(r, s, i[e]));
            });
        }
        addListeners() {
          if (!this.visualElement.current) return;
          Y.set(this.visualElement, this);
          let t = this.visualElement.current,
            e = (0, d.a)(t, "pointerdown", (t) => {
              let { drag: e, dragListener: n = !0 } = this.getProps();
              e && n && this.start(t);
            }),
            n = () => {
              let { dragConstraints: t } = this.getProps();
              (0, A.I)(t) && (this.constraints = this.resolveRefConstraints());
            },
            { projection: i } = this.visualElement,
            r = i.addEventListener("measure", n);
          i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
            n();
          let s = (0, N.E)(window, "resize", () =>
              this.scalePositionWithinConstraints()
            ),
            o = i.addEventListener(
              "didUpdate",
              ({ delta: t, hasLayoutChanged: e }) => {
                this.isDragging &&
                  e &&
                  (I((e) => {
                    let n = this.getAxisMotionValue(e);
                    n &&
                      ((this.originPoint[e] += t[e].translate),
                      n.set(n.get() + t[e].translate));
                  }),
                  this.visualElement.render());
              }
            );
          return () => {
            s(), e(), r(), o && o();
          };
        }
        getProps() {
          let t = this.visualElement.getProps(),
            {
              drag: e = !1,
              dragDirectionLock: n = !1,
              dragPropagation: i = !1,
              dragConstraints: r = !1,
              dragElastic: s = 0.35,
              dragMomentum: o = !0,
            } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: n,
            dragPropagation: i,
            dragConstraints: r,
            dragElastic: s,
            dragMomentum: o,
          };
        }
      }
      function q(t, e, n) {
        return (!0 === e || e === t) && (null === n || n === t);
      }
      class G extends a.L {
        constructor(t) {
          super(t),
            (this.removeGroupControls = l.Z),
            (this.removeListeners = l.Z),
            (this.controls = new Z(t));
        }
        mount() {
          let { dragControls: t } = this.node.getProps();
          t && (this.removeGroupControls = t.subscribe(this.controls)),
            (this.removeListeners = this.controls.addListeners() || l.Z);
        }
        unmount() {
          this.removeGroupControls(), this.removeListeners();
        }
      }
      let K = (t) => (e, n) => {
        t && v.Wi.update(() => t(e, n));
      };
      class _ extends a.L {
        constructor() {
          super(...arguments), (this.removePointerDownListener = l.Z);
        }
        onPointerDown(t) {
          this.session = new g(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: z(this.node),
          });
        }
        createPanHandlers() {
          let {
            onPanSessionStart: t,
            onPanStart: e,
            onPan: n,
            onPanEnd: i,
          } = this.node.getProps();
          return {
            onSessionStart: K(t),
            onStart: K(e),
            onMove: n,
            onEnd: (t, e) => {
              delete this.session, i && v.Wi.update(() => i(t, e));
            },
          };
        }
        mount() {
          this.removePointerDownListener = (0, d.a)(
            this.node.current,
            "pointerdown",
            (t) => this.onPointerDown(t)
          );
        }
        update() {
          this.session && this.session.updateHandlers(this.createPanHandlers());
        }
        unmount() {
          this.removePointerDownListener(), this.session && this.session.end();
        }
      }
      var J = n(2784),
        Q = n(38168),
        tt = n(96179),
        te = n(54578);
      let tn = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function ti(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
      }
      let tr = {
        correct: (t, e) => {
          if (!e.target) return t;
          if ("string" == typeof t) {
            if (!H.px.test(t)) return t;
            t = parseFloat(t);
          }
          let n = ti(t, e.target.x),
            i = ti(t, e.target.y);
          return `${n}% ${i}%`;
        },
      };
      var ts = n(47721),
        to = n(97244),
        ta = n(4723);
      class tl extends J.Component {
        componentDidMount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: n,
              layoutId: i,
            } = this.props,
            { projection: r } = t;
          (0, to.B)(th),
            r &&
              (e.group && e.group.add(r),
              n && n.register && i && n.register(r),
              r.root.didUpdate(),
              r.addEventListener("animationComplete", () => {
                this.safeToRemove();
              }),
              r.setOptions({
                ...r.options,
                onExitComplete: () => this.safeToRemove(),
              })),
            (tn.hasEverUpdated = !0);
        }
        getSnapshotBeforeUpdate(t) {
          let {
              layoutDependency: e,
              visualElement: n,
              drag: i,
              isPresent: r,
            } = this.props,
            s = n.projection;
          return (
            s &&
              ((s.isPresent = r),
              i || t.layoutDependency !== e || void 0 === e
                ? s.willUpdate()
                : this.safeToRemove(),
              t.isPresent === r ||
                (r
                  ? s.promote()
                  : s.relegate() ||
                    v.Wi.postRender(() => {
                      let t = s.getStack();
                      (t && t.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { projection: t } = this.props.visualElement;
          t &&
            (t.root.didUpdate(),
            ta.g.postRender(() => {
              !t.currentAnimation && t.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: n,
            } = this.props,
            { projection: i } = t;
          i &&
            (i.scheduleCheckAfterUnmount(),
            e && e.group && e.group.remove(i),
            n && n.deregister && n.deregister(i));
        }
        safeToRemove() {
          let { safeToRemove: t } = this.props;
          t && t();
        }
        render() {
          return null;
        }
      }
      function tu(t) {
        let [e, n] = (function () {
            let t = (0, J.useContext)(Q.O);
            if (null === t) return [!0, null];
            let { isPresent: e, onExitComplete: n, register: i } = t,
              r = (0, J.useId)();
            return (
              (0, J.useEffect)(() => i(r), []),
              !e && n ? [!1, () => n && n(r)] : [!0]
            );
          })(),
          i = (0, J.useContext)(tt.p);
        return J.createElement(tl, {
          ...t,
          layoutGroup: i,
          switchLayoutGroup: (0, J.useContext)(te.g),
          isPresent: e,
          safeToRemove: n,
        });
      }
      let th = {
        borderRadius: {
          ...tr,
          applyTo: [
            "borderTopLeftRadius",
            "borderTopRightRadius",
            "borderBottomLeftRadius",
            "borderBottomRightRadius",
          ],
        },
        borderTopLeftRadius: tr,
        borderTopRightRadius: tr,
        borderBottomLeftRadius: tr,
        borderBottomRightRadius: tr,
        boxShadow: {
          correct: (t, { treeScale: e, projectionDelta: n }) => {
            let i = ts.P.parse(t);
            if (i.length > 5) return t;
            let r = ts.P.createTransformer(t),
              s = "number" != typeof i[0] ? 1 : 0,
              o = n.x.scale * e.x,
              a = n.y.scale * e.y;
            (i[0 + s] /= o), (i[1 + s] /= a);
            let l = (0, S.C)(o, a, 0.5);
            return (
              "number" == typeof i[2 + s] && (i[2 + s] /= l),
              "number" == typeof i[3 + s] && (i[3 + s] /= l),
              r(i)
            );
          },
        },
      };
      var tc = n(10496),
        td = n(71655);
      let tp = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        tf = tp.length,
        tm = (t) => ("string" == typeof t ? parseFloat(t) : t),
        tv = (t) => "number" == typeof t || H.px.test(t);
      function tg(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius;
      }
      let ty = tP(0, 0.5, td.Bn),
        tx = tP(0.5, 0.95, l.Z);
      function tP(t, e, n) {
        return (i) => (i < t ? 0 : i > e ? 1 : n((0, T.Y)(t, e, i)));
      }
      function tb(t, e) {
        (t.min = e.min), (t.max = e.max);
      }
      function tw(t, e) {
        tb(t.x, e.x), tb(t.y, e.y);
      }
      var tA = n(41723);
      function tT(t, e, n, i, r) {
        return (
          (t -= e),
          (t = (0, tA.q2)(t, 1 / n, i)),
          void 0 !== r && (t = (0, tA.q2)(t, 1 / r, i)),
          t
        );
      }
      function tS(t, e, [n, i, r], s, o) {
        !(function (t, e = 0, n = 1, i = 0.5, r, s = t, o = t) {
          if (
            (H.aQ.test(e) &&
              ((e = parseFloat(e)),
              (e = (0, S.C)(o.min, o.max, e / 100) - o.min)),
            "number" != typeof e)
          )
            return;
          let a = (0, S.C)(s.min, s.max, i);
          t === s && (a -= e),
            (t.min = tT(t.min, e, n, a, r)),
            (t.max = tT(t.max, e, n, a, r));
        })(t, e[n], e[i], e[r], e.scale, s, o);
      }
      let tC = ["x", "scaleX", "originX"],
        tV = ["y", "scaleY", "originY"];
      function tE(t, e, n, i) {
        tS(t.x, e, tC, n ? n.x : void 0, i ? i.x : void 0),
          tS(t.y, e, tV, n ? n.y : void 0, i ? i.y : void 0);
      }
      var tk = n(5398);
      function tM(t) {
        return 0 === t.translate && 1 === t.scale;
      }
      function tD(t) {
        return tM(t.x) && tM(t.y);
      }
      function tR(t, e) {
        return (
          Math.round(t.x.min) === Math.round(e.x.min) &&
          Math.round(t.x.max) === Math.round(e.x.max) &&
          Math.round(t.y.min) === Math.round(e.y.min) &&
          Math.round(t.y.max) === Math.round(e.y.max)
        );
      }
      function tL(t) {
        return C(t.x) / C(t.y);
      }
      var tj = n(57610);
      class tF {
        constructor() {
          this.members = [];
        }
        add(t) {
          (0, tj.y4)(this.members, t), t.scheduleRender();
        }
        remove(t) {
          if (
            ((0, tj.cl)(this.members, t),
            t === this.prevLead && (this.prevLead = void 0),
            t === this.lead)
          ) {
            let t = this.members[this.members.length - 1];
            t && this.promote(t);
          }
        }
        relegate(t) {
          let e;
          let n = this.members.findIndex((e) => t === e);
          if (0 === n) return !1;
          for (let t = n; t >= 0; t--) {
            let n = this.members[t];
            if (!1 !== n.isPresent) {
              e = n;
              break;
            }
          }
          return !!e && (this.promote(e), !0);
        }
        promote(t, e) {
          let n = this.lead;
          if (t !== n && ((this.prevLead = n), (this.lead = t), t.show(), n)) {
            n.instance && n.scheduleRender(),
              t.scheduleRender(),
              (t.resumeFrom = n),
              e && (t.resumeFrom.preserveOpacity = !0),
              n.snapshot &&
                ((t.snapshot = n.snapshot),
                (t.snapshot.latestValues =
                  n.animationValues || n.latestValues)),
              t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            let { crossfade: i } = t.options;
            !1 === i && n.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((t) => {
            let { options: e, resumingFrom: n } = t;
            e.onExitComplete && e.onExitComplete(),
              n && n.options.onExitComplete && n.options.onExitComplete();
          });
        }
        scheduleRender() {
          this.members.forEach((t) => {
            t.instance && t.scheduleRender(!1);
          });
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
      }
      function tB(t, e, n) {
        let i = "",
          r = t.x.translate / e.x,
          s = t.y.translate / e.y;
        if (
          ((r || s) && (i = `translate3d(${r}px, ${s}px, 0) `),
          (1 !== e.x || 1 !== e.y) && (i += `scale(${1 / e.x}, ${1 / e.y}) `),
          n)
        ) {
          let { rotate: t, rotateX: e, rotateY: r } = n;
          t && (i += `rotate(${t}deg) `),
            e && (i += `rotateX(${e}deg) `),
            r && (i += `rotateY(${r}deg) `);
        }
        let o = t.x.scale * e.x,
          a = t.y.scale * e.y;
        return (1 !== o || 1 !== a) && (i += `scale(${o}, ${a})`), i || "none";
      }
      var tO = n(45153);
      let tU = (t, e) => t.depth - e.depth;
      class tI {
        constructor() {
          (this.children = []), (this.isDirty = !1);
        }
        add(t) {
          (0, tj.y4)(this.children, t), (this.isDirty = !0);
        }
        remove(t) {
          (0, tj.cl)(this.children, t), (this.isDirty = !0);
        }
        forEach(t) {
          this.isDirty && this.children.sort(tU),
            (this.isDirty = !1),
            this.children.forEach(t);
        }
      }
      var tW = n(97981),
        t$ = n(88882),
        tN = n(31464),
        tH = n(3145);
      let tX = ["", "X", "Y", "Z"],
        tz = { visibility: "hidden" },
        tY = 0,
        tZ = {
          type: "projectionFrame",
          totalNodes: 0,
          resolvedTargetDeltas: 0,
          recalculatedProjection: 0,
        };
      function tq({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: n,
        checkIsScrollRoot: i,
        resetTransform: r,
      }) {
        return class {
          constructor(t = {}, n = null == e ? void 0 : e()) {
            (this.id = tY++),
              (this.animationId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isProjectionDirty = !1),
              (this.isSharedProjectionDirty = !1),
              (this.isTransformDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.hasTreeAnimated = !1),
              (this.updateScheduled = !1),
              (this.projectionUpdateScheduled = !1),
              (this.checkUpdateFailed = () => {
                this.isUpdating &&
                  ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                (this.projectionUpdateScheduled = !1),
                  (tZ.totalNodes =
                    tZ.resolvedTargetDeltas =
                    tZ.recalculatedProjection =
                      0),
                  this.nodes.forEach(t_),
                  this.nodes.forEach(t4),
                  this.nodes.forEach(t8),
                  this.nodes.forEach(tJ),
                  window.MotionDebug && window.MotionDebug.record(tZ);
              }),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = t),
              (this.root = n ? n.root || n : this),
              (this.path = n ? [...n.path, n] : []),
              (this.parent = n),
              (this.depth = n ? n.depth + 1 : 0);
            for (let t = 0; t < this.path.length; t++)
              this.path[t].shouldResetTransform = !0;
            this.root === this && (this.nodes = new tI());
          }
          addEventListener(t, e) {
            return (
              this.eventHandlers.has(t) ||
                this.eventHandlers.set(t, new tc.L()),
              this.eventHandlers.get(t).add(e)
            );
          }
          notifyListeners(t, ...e) {
            let n = this.eventHandlers.get(t);
            n && n.notify(...e);
          }
          hasListeners(t) {
            return this.eventHandlers.has(t);
          }
          mount(e, n = this.root.hasTreeAnimated) {
            if (this.instance) return;
            (this.isSVG = e instanceof SVGElement && "svg" !== e.tagName),
              (this.instance = e);
            let { layoutId: i, layout: r, visualElement: s } = this.options;
            if (
              (s && !s.current && s.mount(e),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              n && (r || i) && (this.isLayoutDirty = !0),
              t)
            ) {
              let n;
              let i = () => (this.root.updateBlockedByResize = !1);
              t(e, () => {
                (this.root.updateBlockedByResize = !0),
                  n && n(),
                  (n = (function (t, e) {
                    let n = t$.X.now(),
                      i = ({ timestamp: e }) => {
                        let r = e - n;
                        r >= 250 && ((0, v.Pn)(i), t(r - 250));
                      };
                    return v.Wi.read(i, !0), () => (0, v.Pn)(i);
                  })(i, 0)),
                  tn.hasAnimatedSinceResize &&
                    ((tn.hasAnimatedSinceResize = !1), this.nodes.forEach(t2));
              });
            }
            i && this.root.registerSharedNode(i, this),
              !1 !== this.options.animate &&
                s &&
                (i || r) &&
                this.addEventListener(
                  "didUpdate",
                  ({
                    delta: t,
                    hasLayoutChanged: e,
                    hasRelativeTargetChanged: n,
                    layout: i,
                  }) => {
                    if (this.isTreeAnimationBlocked()) {
                      (this.target = void 0), (this.relativeTarget = void 0);
                      return;
                    }
                    let r =
                        this.options.transition ||
                        s.getDefaultTransition() ||
                        ee,
                      {
                        onLayoutAnimationStart: o,
                        onLayoutAnimationComplete: a,
                      } = s.getProps(),
                      l = !this.targetLayout || !tR(this.targetLayout, i) || n,
                      u = !e && n;
                    if (
                      this.options.layoutRoot ||
                      (this.resumeFrom && this.resumeFrom.instance) ||
                      u ||
                      (e && (l || !this.currentAnimation))
                    ) {
                      this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0)),
                        this.setAnimationOrigin(t, u);
                      let e = {
                        ...(0, tk.e)(r, "layout"),
                        onPlay: o,
                        onComplete: a,
                      };
                      (s.shouldReduceMotion || this.options.layoutRoot) &&
                        ((e.delay = 0), (e.type = !1)),
                        this.startAnimation(e);
                    } else
                      e || t2(this),
                        this.isLead() &&
                          this.options.onExitComplete &&
                          this.options.onExitComplete();
                    this.targetLayout = i;
                  }
                );
          }
          unmount() {
            this.options.layoutId && this.willUpdate(),
              this.root.nodes.remove(this);
            let t = this.getStack();
            t && t.remove(this),
              this.parent && this.parent.children.delete(this),
              (this.instance = void 0),
              (0, v.Pn)(this.updateProjection);
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0;
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1;
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }
          isTreeAnimationBlocked() {
            return (
              this.isAnimationBlocked ||
              (this.parent && this.parent.isTreeAnimationBlocked()) ||
              !1
            );
          }
          startUpdate() {
            !this.isUpdateBlocked() &&
              ((this.isUpdating = !0),
              this.nodes && this.nodes.forEach(t5),
              this.animationId++);
          }
          getTransformTemplate() {
            let { visualElement: t } = this.options;
            return t && t.getProps().transformTemplate;
          }
          willUpdate(t = !0) {
            if (
              ((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())
            ) {
              this.options.onExitComplete && this.options.onExitComplete();
              return;
            }
            if (
              (this.root.isUpdating || this.root.startUpdate(),
              this.isLayoutDirty)
            )
              return;
            this.isLayoutDirty = !0;
            for (let t = 0; t < this.path.length; t++) {
              let e = this.path[t];
              (e.shouldResetTransform = !0),
                e.updateScroll("snapshot"),
                e.options.layoutRoot && e.willUpdate(!1);
            }
            let { layoutId: e, layout: n } = this.options;
            if (void 0 === e && !n) return;
            let i = this.getTransformTemplate();
            (this.prevTransformTemplateValue = i
              ? i(this.latestValues, "")
              : void 0),
              this.updateSnapshot(),
              t && this.notifyListeners("willUpdate");
          }
          update() {
            if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
              this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(t0);
              return;
            }
            this.isUpdating || this.nodes.forEach(t1),
              (this.isUpdating = !1),
              this.nodes.forEach(t3),
              this.nodes.forEach(tG),
              this.nodes.forEach(tK),
              this.clearAllSnapshots();
            let t = t$.X.now();
            (v.frameData.delta = (0, L.u)(
              0,
              1e3 / 60,
              t - v.frameData.timestamp
            )),
              (v.frameData.timestamp = t),
              (v.frameData.isProcessing = !0),
              v.S6.update.process(v.frameData),
              v.S6.preRender.process(v.frameData),
              v.S6.render.process(v.frameData),
              (v.frameData.isProcessing = !1);
          }
          didUpdate() {
            this.updateScheduled ||
              ((this.updateScheduled = !0), ta.g.read(() => this.update()));
          }
          clearAllSnapshots() {
            this.nodes.forEach(tQ), this.sharedNodes.forEach(t7);
          }
          scheduleUpdateProjection() {
            this.projectionUpdateScheduled ||
              ((this.projectionUpdateScheduled = !0),
              v.Wi.preRender(this.updateProjection, !1, !0));
          }
          scheduleCheckAfterUnmount() {
            v.Wi.postRender(() => {
              this.isLayoutDirty
                ? this.root.didUpdate()
                : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            !this.snapshot && this.instance && (this.snapshot = this.measure());
          }
          updateLayout() {
            if (
              !this.instance ||
              (this.updateScroll(),
              !(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty)
            )
              return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let t = 0; t < this.path.length; t++)
                this.path[t].updateScroll();
            let t = this.layout;
            (this.layout = this.measure(!1)),
              (this.layoutCorrected = (0, U.dO)()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners("measure", this.layout.layoutBox);
            let { visualElement: e } = this.options;
            e &&
              e.notify(
                "LayoutMeasure",
                this.layout.layoutBox,
                t ? t.layoutBox : void 0
              );
          }
          updateScroll(t = "measure") {
            let e = !!(this.options.layoutScroll && this.instance);
            this.scroll &&
              this.scroll.animationId === this.root.animationId &&
              this.scroll.phase === t &&
              (e = !1),
              e &&
                (this.scroll = {
                  animationId: this.root.animationId,
                  phase: t,
                  isRoot: i(this.instance),
                  offset: n(this.instance),
                });
          }
          resetTransform() {
            if (!r) return;
            let t = this.isLayoutDirty || this.shouldResetTransform,
              e = this.projectionDelta && !tD(this.projectionDelta),
              n = this.getTransformTemplate(),
              i = n ? n(this.latestValues, "") : void 0,
              s = i !== this.prevTransformTemplateValue;
            t &&
              (e || (0, tO.ud)(this.latestValues) || s) &&
              (r(this.instance, i),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure(t = !0) {
            var e;
            let n = this.measurePageBox(),
              i = this.removeElementScroll(n);
            return (
              t && (i = this.removeTransform(i)),
              er((e = i).x),
              er(e.y),
              {
                animationId: this.root.animationId,
                measuredBox: n,
                layoutBox: i,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            let { visualElement: t } = this.options;
            if (!t) return (0, U.dO)();
            let e = t.measureViewportBox(),
              { scroll: n } = this.root;
            return (
              n && ((0, tA.am)(e.x, n.offset.x), (0, tA.am)(e.y, n.offset.y)), e
            );
          }
          removeElementScroll(t) {
            let e = (0, U.dO)();
            tw(e, t);
            for (let n = 0; n < this.path.length; n++) {
              let i = this.path[n],
                { scroll: r, options: s } = i;
              if (i !== this.root && r && s.layoutScroll) {
                if (r.isRoot) {
                  tw(e, t);
                  let { scroll: n } = this.root;
                  n &&
                    ((0, tA.am)(e.x, -n.offset.x),
                    (0, tA.am)(e.y, -n.offset.y));
                }
                (0, tA.am)(e.x, r.offset.x), (0, tA.am)(e.y, r.offset.y);
              }
            }
            return e;
          }
          applyTransform(t, e = !1) {
            let n = (0, U.dO)();
            tw(n, t);
            for (let t = 0; t < this.path.length; t++) {
              let i = this.path[t];
              !e &&
                i.options.layoutScroll &&
                i.scroll &&
                i !== i.root &&
                (0, tA.D2)(n, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
                (0, tO.ud)(i.latestValues) && (0, tA.D2)(n, i.latestValues);
            }
            return (
              (0, tO.ud)(this.latestValues) && (0, tA.D2)(n, this.latestValues),
              n
            );
          }
          removeTransform(t) {
            let e = (0, U.dO)();
            tw(e, t);
            for (let t = 0; t < this.path.length; t++) {
              let n = this.path[t];
              if (!n.instance || !(0, tO.ud)(n.latestValues)) continue;
              (0, tO.Lj)(n.latestValues) && n.updateSnapshot();
              let i = (0, U.dO)();
              tw(i, n.measurePageBox()),
                tE(
                  e,
                  n.latestValues,
                  n.snapshot ? n.snapshot.layoutBox : void 0,
                  i
                );
            }
            return (0, tO.ud)(this.latestValues) && tE(e, this.latestValues), e;
          }
          setTargetDelta(t) {
            (this.targetDelta = t),
              this.root.scheduleUpdateProjection(),
              (this.isProjectionDirty = !0);
          }
          setOptions(t) {
            this.options = {
              ...this.options,
              ...t,
              crossfade: void 0 === t.crossfade || t.crossfade,
            };
          }
          clearMeasurements() {
            (this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1);
          }
          forceRelativeParentToResolveTarget() {
            this.relativeParent &&
              this.relativeParent.resolvedRelativeTargetAt !==
                v.frameData.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta(t = !1) {
            var e, n, i, r;
            let s = this.getLead();
            this.isProjectionDirty ||
              (this.isProjectionDirty = s.isProjectionDirty),
              this.isTransformDirty ||
                (this.isTransformDirty = s.isTransformDirty),
              this.isSharedProjectionDirty ||
                (this.isSharedProjectionDirty = s.isSharedProjectionDirty);
            let o = !!this.resumingFrom || this !== s;
            if (
              !(
                t ||
                (o && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                (null === (e = this.parent) || void 0 === e
                  ? void 0
                  : e.isProjectionDirty) ||
                this.attemptToResolveRelativeTarget
              )
            )
              return;
            let { layout: a, layoutId: l } = this.options;
            if (this.layout && (a || l)) {
              if (
                ((this.resolvedRelativeTargetAt = v.frameData.timestamp),
                !this.targetDelta && !this.relativeTarget)
              ) {
                let t = this.getClosestProjectingParent();
                t && t.layout && 1 !== this.animationProgress
                  ? ((this.relativeParent = t),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = (0, U.dO)()),
                    (this.relativeTargetOrigin = (0, U.dO)()),
                    R(
                      this.relativeTargetOrigin,
                      this.layout.layoutBox,
                      t.layout.layoutBox
                    ),
                    tw(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (this.relativeTarget || this.targetDelta) {
                if (
                  ((this.target ||
                    ((this.target = (0, U.dO)()),
                    (this.targetWithTransforms = (0, U.dO)())),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.relativeParent &&
                    this.relativeParent.target)
                    ? (this.forceRelativeParentToResolveTarget(),
                      (n = this.target),
                      (i = this.relativeTarget),
                      (r = this.relativeParent.target),
                      M(n.x, i.x, r.x),
                      M(n.y, i.y, r.y))
                    : this.targetDelta
                    ? (this.resumingFrom
                        ? (this.target = this.applyTransform(
                            this.layout.layoutBox
                          ))
                        : tw(this.target, this.layout.layoutBox),
                      (0, tA.o2)(this.target, this.targetDelta))
                    : tw(this.target, this.layout.layoutBox),
                  this.attemptToResolveRelativeTarget)
                ) {
                  this.attemptToResolveRelativeTarget = !1;
                  let t = this.getClosestProjectingParent();
                  t &&
                  !!t.resumingFrom == !!this.resumingFrom &&
                  !t.options.layoutScroll &&
                  t.target &&
                  1 !== this.animationProgress
                    ? ((this.relativeParent = t),
                      this.forceRelativeParentToResolveTarget(),
                      (this.relativeTarget = (0, U.dO)()),
                      (this.relativeTargetOrigin = (0, U.dO)()),
                      R(this.relativeTargetOrigin, this.target, t.target),
                      tw(this.relativeTarget, this.relativeTargetOrigin))
                    : (this.relativeParent = this.relativeTarget = void 0);
                }
                tZ.resolvedTargetDeltas++;
              }
            }
          }
          getClosestProjectingParent() {
            return !this.parent ||
              (0, tO.Lj)(this.parent.latestValues) ||
              (0, tO.D_)(this.parent.latestValues)
              ? void 0
              : this.parent.isProjecting()
              ? this.parent
              : this.parent.getClosestProjectingParent();
          }
          isProjecting() {
            return !!(
              (this.relativeTarget ||
                this.targetDelta ||
                this.options.layoutRoot) &&
              this.layout
            );
          }
          calcProjection() {
            var t;
            let e = this.getLead(),
              n = !!this.resumingFrom || this !== e,
              i = !0;
            if (
              ((this.isProjectionDirty ||
                (null === (t = this.parent) || void 0 === t
                  ? void 0
                  : t.isProjectionDirty)) &&
                (i = !1),
              n &&
                (this.isSharedProjectionDirty || this.isTransformDirty) &&
                (i = !1),
              this.resolvedRelativeTargetAt === v.frameData.timestamp &&
                (i = !1),
              i)
            )
              return;
            let { layout: r, layoutId: s } = this.options;
            if (
              ((this.isTreeAnimating = !!(
                (this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(r || s))
            )
              return;
            tw(this.layoutCorrected, this.layout.layoutBox);
            let o = this.treeScale.x,
              a = this.treeScale.y;
            (0, tA.YY)(this.layoutCorrected, this.treeScale, this.path, n),
              e.layout &&
                !e.target &&
                (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
                ((e.target = e.layout.layoutBox),
                (e.targetWithTransforms = (0, U.dO)()));
            let { target: l } = e;
            if (!l) {
              this.projectionTransform &&
                ((this.projectionDelta = (0, U.wc)()),
                (this.projectionTransform = "none"),
                this.scheduleRender());
              return;
            }
            this.projectionDelta ||
              ((this.projectionDelta = (0, U.wc)()),
              (this.projectionDeltaWithTransform = (0, U.wc)()));
            let u = this.projectionTransform;
            k(this.projectionDelta, this.layoutCorrected, l, this.latestValues),
              (this.projectionTransform = tB(
                this.projectionDelta,
                this.treeScale
              )),
              (this.projectionTransform !== u ||
                this.treeScale.x !== o ||
                this.treeScale.y !== a) &&
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", l)),
              tZ.recalculatedProjection++;
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender(t = !0) {
            if (
              (this.options.scheduleRender && this.options.scheduleRender(), t)
            ) {
              let t = this.getStack();
              t && t.scheduleRender();
            }
            this.resumingFrom &&
              !this.resumingFrom.instance &&
              (this.resumingFrom = void 0);
          }
          setAnimationOrigin(t, e = !1) {
            let n;
            let i = this.snapshot,
              r = i ? i.latestValues : {},
              s = { ...this.latestValues },
              o = (0, U.wc)();
            (this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !e);
            let a = (0, U.dO)(),
              l =
                (i ? i.source : void 0) !==
                (this.layout ? this.layout.source : void 0),
              u = this.getStack(),
              h = !u || u.members.length <= 1,
              c = !!(
                l &&
                !h &&
                !0 === this.options.crossfade &&
                !this.path.some(et)
              );
            (this.animationProgress = 0),
              (this.mixTargetDelta = (e) => {
                let i = e / 1e3;
                if (
                  (t9(o.x, t.x, i),
                  t9(o.y, t.y, i),
                  this.setTargetDelta(o),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout)
                ) {
                  var u, d, p, f;
                  R(
                    a,
                    this.layout.layoutBox,
                    this.relativeParent.layout.layoutBox
                  ),
                    (p = this.relativeTarget),
                    (f = this.relativeTargetOrigin),
                    t6(p.x, f.x, a.x, i),
                    t6(p.y, f.y, a.y, i),
                    n &&
                      ((u = this.relativeTarget),
                      (d = n),
                      u.x.min === d.x.min &&
                        u.x.max === d.x.max &&
                        u.y.min === d.y.min &&
                        u.y.max === d.y.max) &&
                      (this.isProjectionDirty = !1),
                    n || (n = (0, U.dO)()),
                    tw(n, this.relativeTarget);
                }
                l &&
                  ((this.animationValues = s),
                  (function (t, e, n, i, r, s) {
                    r
                      ? ((t.opacity = (0, S.C)(
                          0,
                          void 0 !== n.opacity ? n.opacity : 1,
                          ty(i)
                        )),
                        (t.opacityExit = (0, S.C)(
                          void 0 !== e.opacity ? e.opacity : 1,
                          0,
                          tx(i)
                        )))
                      : s &&
                        (t.opacity = (0, S.C)(
                          void 0 !== e.opacity ? e.opacity : 1,
                          void 0 !== n.opacity ? n.opacity : 1,
                          i
                        ));
                    for (let r = 0; r < tf; r++) {
                      let s = `border${tp[r]}Radius`,
                        o = tg(e, s),
                        a = tg(n, s);
                      (void 0 !== o || void 0 !== a) &&
                        (o || (o = 0),
                        a || (a = 0),
                        0 === o || 0 === a || tv(o) === tv(a)
                          ? ((t[s] = Math.max((0, S.C)(tm(o), tm(a), i), 0)),
                            (H.aQ.test(a) || H.aQ.test(o)) && (t[s] += "%"))
                          : (t[s] = a));
                    }
                    (e.rotate || n.rotate) &&
                      (t.rotate = (0, S.C)(e.rotate || 0, n.rotate || 0, i));
                  })(s, r, this.latestValues, i, c, h)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = i);
              }),
              this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
          }
          startAnimation(t) {
            this.notifyListeners("animationStart"),
              this.currentAnimation && this.currentAnimation.stop(),
              this.resumingFrom &&
                this.resumingFrom.currentAnimation &&
                this.resumingFrom.currentAnimation.stop(),
              this.pendingAnimation &&
                ((0, v.Pn)(this.pendingAnimation),
                (this.pendingAnimation = void 0)),
              (this.pendingAnimation = v.Wi.update(() => {
                (tn.hasAnimatedSinceResize = !0),
                  (this.currentAnimation = (function (t, e, n) {
                    let i = (0, tH.i)(0) ? 0 : (0, tN.BX)(0);
                    return i.start((0, X.v)("", i, 1e3, n)), i.animation;
                  })(0, 0, {
                    ...t,
                    onUpdate: (e) => {
                      this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e);
                    },
                    onComplete: () => {
                      t.onComplete && t.onComplete(), this.completeAnimation();
                    },
                  })),
                  this.resumingFrom &&
                    (this.resumingFrom.currentAnimation =
                      this.currentAnimation),
                  (this.pendingAnimation = void 0);
              }));
          }
          completeAnimation() {
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0));
            let t = this.getStack();
            t && t.exitAnimationComplete(),
              (this.resumingFrom =
                this.currentAnimation =
                this.animationValues =
                  void 0),
              this.notifyListeners("animationComplete");
          }
          finishAnimation() {
            this.currentAnimation &&
              (this.mixTargetDelta && this.mixTargetDelta(1e3),
              this.currentAnimation.stop()),
              this.completeAnimation();
          }
          applyTransformsToTarget() {
            let t = this.getLead(),
              {
                targetWithTransforms: e,
                target: n,
                layout: i,
                latestValues: r,
              } = t;
            if (e && n && i) {
              if (
                this !== t &&
                this.layout &&
                i &&
                es(
                  this.options.animationType,
                  this.layout.layoutBox,
                  i.layoutBox
                )
              ) {
                n = this.target || (0, U.dO)();
                let e = C(this.layout.layoutBox.x);
                (n.x.min = t.target.x.min), (n.x.max = n.x.min + e);
                let i = C(this.layout.layoutBox.y);
                (n.y.min = t.target.y.min), (n.y.max = n.y.min + i);
              }
              tw(e, n),
                (0, tA.D2)(e, r),
                k(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  e,
                  r
                );
            }
          }
          registerSharedNode(t, e) {
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new tF()),
              this.sharedNodes.get(t).add(e);
            let n = e.options.initialPromotionConfig;
            e.promote({
              transition: n ? n.transition : void 0,
              preserveFollowOpacity:
                n && n.shouldPreserveFollowOpacity
                  ? n.shouldPreserveFollowOpacity(e)
                  : void 0,
            });
          }
          isLead() {
            let t = this.getStack();
            return !t || t.lead === this;
          }
          getLead() {
            var t;
            let { layoutId: e } = this.options;
            return (
              (e &&
                (null === (t = this.getStack()) || void 0 === t
                  ? void 0
                  : t.lead)) ||
              this
            );
          }
          getPrevLead() {
            var t;
            let { layoutId: e } = this.options;
            return e
              ? null === (t = this.getStack()) || void 0 === t
                ? void 0
                : t.prevLead
              : void 0;
          }
          getStack() {
            let { layoutId: t } = this.options;
            if (t) return this.root.sharedNodes.get(t);
          }
          promote({
            needsReset: t,
            transition: e,
            preserveFollowOpacity: n,
          } = {}) {
            let i = this.getStack();
            i && i.promote(this, n),
              t && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              e && this.setOptions({ transition: e });
          }
          relegate() {
            let t = this.getStack();
            return !!t && t.relegate(this);
          }
          resetRotation() {
            let { visualElement: t } = this.options;
            if (!t) return;
            let e = !1,
              { latestValues: n } = t;
            if (
              ((n.rotate || n.rotateX || n.rotateY || n.rotateZ) && (e = !0),
              !e)
            )
              return;
            let i = {};
            for (let e = 0; e < tX.length; e++) {
              let r = "rotate" + tX[e];
              n[r] && ((i[r] = n[r]), t.setStaticValue(r, 0));
            }
            for (let e in (t.render(), i)) t.setStaticValue(e, i[e]);
            t.scheduleRender();
          }
          getProjectionStyles(t) {
            var e, n;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return tz;
            let i = { visibility: "" },
              r = this.getTransformTemplate();
            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (i.opacity = ""),
                (i.pointerEvents =
                  (0, tW.b)(null == t ? void 0 : t.pointerEvents) || ""),
                (i.transform = r ? r(this.latestValues, "") : "none"),
                i
              );
            let s = this.getLead();
            if (!this.projectionDelta || !this.layout || !s.target) {
              let e = {};
              return (
                this.options.layoutId &&
                  ((e.opacity =
                    void 0 !== this.latestValues.opacity
                      ? this.latestValues.opacity
                      : 1),
                  (e.pointerEvents =
                    (0, tW.b)(null == t ? void 0 : t.pointerEvents) || "")),
                this.hasProjected &&
                  !(0, tO.ud)(this.latestValues) &&
                  ((e.transform = r ? r({}, "") : "none"),
                  (this.hasProjected = !1)),
                e
              );
            }
            let o = s.animationValues || s.latestValues;
            this.applyTransformsToTarget(),
              (i.transform = tB(
                this.projectionDeltaWithTransform,
                this.treeScale,
                o
              )),
              r && (i.transform = r(o, i.transform));
            let { x: a, y: l } = this.projectionDelta;
            for (let t in ((i.transformOrigin = `${100 * a.origin}% ${
              100 * l.origin
            }% 0`),
            s.animationValues
              ? (i.opacity =
                  s === this
                    ? null !==
                        (n =
                          null !== (e = o.opacity) && void 0 !== e
                            ? e
                            : this.latestValues.opacity) && void 0 !== n
                      ? n
                      : 1
                    : this.preserveOpacity
                    ? this.latestValues.opacity
                    : o.opacityExit)
              : (i.opacity =
                  s === this
                    ? void 0 !== o.opacity
                      ? o.opacity
                      : ""
                    : void 0 !== o.opacityExit
                    ? o.opacityExit
                    : 0),
            to.P)) {
              if (void 0 === o[t]) continue;
              let { correct: e, applyTo: n } = to.P[t],
                r = "none" === i.transform ? o[t] : e(o[t], s);
              if (n) {
                let t = n.length;
                for (let e = 0; e < t; e++) i[n[e]] = r;
              } else i[t] = r;
            }
            return (
              this.options.layoutId &&
                (i.pointerEvents =
                  s === this
                    ? (0, tW.b)(null == t ? void 0 : t.pointerEvents) || ""
                    : "none"),
              i
            );
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            this.root.nodes.forEach((t) => {
              var e;
              return null === (e = t.currentAnimation) || void 0 === e
                ? void 0
                : e.stop();
            }),
              this.root.nodes.forEach(t0),
              this.root.sharedNodes.clear();
          }
        };
      }
      function tG(t) {
        t.updateLayout();
      }
      function tK(t) {
        var e;
        let n =
          (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) ||
          t.snapshot;
        if (t.isLead() && t.layout && n && t.hasListeners("didUpdate")) {
          let { layoutBox: e, measuredBox: i } = t.layout,
            { animationType: r } = t.options,
            s = n.source !== t.layout.source;
          "size" === r
            ? I((t) => {
                let i = s ? n.measuredBox[t] : n.layoutBox[t],
                  r = C(i);
                (i.min = e[t].min), (i.max = i.min + r);
              })
            : es(r, n.layoutBox, e) &&
              I((i) => {
                let r = s ? n.measuredBox[i] : n.layoutBox[i],
                  o = C(e[i]);
                (r.max = r.min + o),
                  t.relativeTarget &&
                    !t.currentAnimation &&
                    ((t.isProjectionDirty = !0),
                    (t.relativeTarget[i].max = t.relativeTarget[i].min + o));
              });
          let o = (0, U.wc)();
          k(o, e, n.layoutBox);
          let a = (0, U.wc)();
          s
            ? k(a, t.applyTransform(i, !0), n.measuredBox)
            : k(a, e, n.layoutBox);
          let l = !tD(o),
            u = !1;
          if (!t.resumeFrom) {
            let i = t.getClosestProjectingParent();
            if (i && !i.resumeFrom) {
              let { snapshot: r, layout: s } = i;
              if (r && s) {
                let o = (0, U.dO)();
                R(o, n.layoutBox, r.layoutBox);
                let a = (0, U.dO)();
                R(a, e, s.layoutBox),
                  tR(o, a) || (u = !0),
                  i.options.layoutRoot &&
                    ((t.relativeTarget = a),
                    (t.relativeTargetOrigin = o),
                    (t.relativeParent = i));
              }
            }
          }
          t.notifyListeners("didUpdate", {
            layout: e,
            snapshot: n,
            delta: a,
            layoutDelta: o,
            hasLayoutChanged: l,
            hasRelativeTargetChanged: u,
          });
        } else if (t.isLead()) {
          let { onExitComplete: e } = t.options;
          e && e();
        }
        t.options.transition = void 0;
      }
      function t_(t) {
        tZ.totalNodes++,
          t.parent &&
            (t.isProjecting() ||
              (t.isProjectionDirty = t.parent.isProjectionDirty),
            t.isSharedProjectionDirty ||
              (t.isSharedProjectionDirty = !!(
                t.isProjectionDirty ||
                t.parent.isProjectionDirty ||
                t.parent.isSharedProjectionDirty
              )),
            t.isTransformDirty ||
              (t.isTransformDirty = t.parent.isTransformDirty));
      }
      function tJ(t) {
        t.isProjectionDirty =
          t.isSharedProjectionDirty =
          t.isTransformDirty =
            !1;
      }
      function tQ(t) {
        t.clearSnapshot();
      }
      function t0(t) {
        t.clearMeasurements();
      }
      function t1(t) {
        t.isLayoutDirty = !1;
      }
      function t3(t) {
        let { visualElement: e } = t.options;
        e &&
          e.getProps().onBeforeLayoutMeasure &&
          e.notify("BeforeLayoutMeasure"),
          t.resetTransform();
      }
      function t2(t) {
        t.finishAnimation(),
          (t.targetDelta = t.relativeTarget = t.target = void 0),
          (t.isProjectionDirty = !0);
      }
      function t4(t) {
        t.resolveTargetDelta();
      }
      function t8(t) {
        t.calcProjection();
      }
      function t5(t) {
        t.resetRotation();
      }
      function t7(t) {
        t.removeLeadSnapshot();
      }
      function t9(t, e, n) {
        (t.translate = (0, S.C)(e.translate, 0, n)),
          (t.scale = (0, S.C)(e.scale, 1, n)),
          (t.origin = e.origin),
          (t.originPoint = e.originPoint);
      }
      function t6(t, e, n, i) {
        (t.min = (0, S.C)(e.min, n.min, i)),
          (t.max = (0, S.C)(e.max, n.max, i));
      }
      function et(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit;
      }
      let ee = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
        en = (t) =>
          "undefined" != typeof navigator &&
          navigator.userAgent.toLowerCase().includes(t),
        ei = en("applewebkit/") && !en("chrome/") ? Math.round : l.Z;
      function er(t) {
        (t.min = ei(t.min)), (t.max = ei(t.max));
      }
      function es(t, e, n) {
        return (
          "position" === t || ("preserve-aspect" === t && !V(tL(e), tL(n), 0.2))
        );
      }
      let eo = tq({
          attachResizeListener: (t, e) => (0, N.E)(t, "resize", e),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        ea = { current: void 0 },
        el = tq({
          measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
          defaultParent: () => {
            if (!ea.current) {
              let t = new eo({});
              t.mount(window),
                t.setOptions({ layoutScroll: !0 }),
                (ea.current = t);
            }
            return ea.current;
          },
          resetTransform: (t, e) => {
            t.style.transform = void 0 !== e ? e : "none";
          },
          checkIsScrollRoot: (t) =>
            "fixed" === window.getComputedStyle(t).position,
        });
      var eu = n(49538);
      let eh = {
          ...o.s,
          ...s.E,
          pan: { Feature: _ },
          drag: { Feature: G, ProjectionNode: el, MeasureLayout: tu },
          layout: { ProjectionNode: el, MeasureLayout: tu },
        },
        ec = (0, i.D)((t, e) => (0, r.w)(t, e, eh, eu.b));
    },
    51838: function (t, e, n) {
      n.d(e, {
        D: function () {
          return i;
        },
      });
      let i = (t) => t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
    },
    20038: function (t, e, n) {
      n.d(e, {
        w: function () {
          return M;
        },
      });
      var i,
        r = n(44983),
        s = n(2784),
        o = n(43946),
        a = n(3145),
        l = n(17670);
      let u = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {},
      });
      function h(t, e, n) {
        for (let i in e) (0, a.i)(e[i]) || (0, o.j)(i, n) || (t[i] = e[i]);
      }
      let c = new Set([
        "animate",
        "exit",
        "variants",
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "custom",
        "inherit",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "_dragX",
        "_dragY",
        "onHoverStart",
        "onHoverEnd",
        "onViewportEnter",
        "onViewportLeave",
        "globalTapTarget",
        "ignoreStrict",
        "viewport",
      ]);
      function d(t) {
        return (
          t.startsWith("while") ||
          (t.startsWith("drag") && "draggable" !== t) ||
          t.startsWith("layout") ||
          t.startsWith("onTap") ||
          t.startsWith("onPan") ||
          t.startsWith("onLayout") ||
          c.has(t)
        );
      }
      let p = (t) => !d(t);
      try {
        (i = n(79138).Z) && (p = (t) => (t.startsWith("on") ? !d(t) : i(t)));
      } catch (t) {}
      var f = n(38800);
      let m = () => ({ ...u(), attrs: {} });
      var v = n(66840),
        g = n(994),
        y = n(7228),
        x = n(16827),
        P = n(38168),
        b = n(3988),
        w = n(16770),
        A = n(97981),
        T = n(29031),
        S = n(2029);
      let C = (t) => (e, n) => {
        let i = (0, s.useContext)(T.v),
          r = (0, s.useContext)(P.O),
          o = () =>
            (function (
              {
                scrapeMotionValuesFromProps: t,
                createRenderState: e,
                onMount: n,
              },
              i,
              r,
              s
            ) {
              let o = {
                latestValues: (function (t, e, n, i) {
                  let r = {},
                    s = i(t, {});
                  for (let t in s) r[t] = (0, A.b)(s[t]);
                  let { initial: o, animate: a } = t,
                    l = (0, S.G)(t),
                    u = (0, S.M)(t);
                  e &&
                    u &&
                    !l &&
                    !1 !== t.inherit &&
                    (void 0 === o && (o = e.initial),
                    void 0 === a && (a = e.animate));
                  let h = !!n && !1 === n.initial,
                    c = (h = h || !1 === o) ? a : o;
                  return (
                    c &&
                      "boolean" != typeof c &&
                      !(0, x.H)(c) &&
                      (Array.isArray(c) ? c : [c]).forEach((e) => {
                        let n = (0, b.o)(t, e);
                        if (!n) return;
                        let { transitionEnd: i, transition: s, ...o } = n;
                        for (let t in o) {
                          let e = o[t];
                          if (Array.isArray(e)) {
                            let t = h ? e.length - 1 : 0;
                            e = e[t];
                          }
                          null !== e && (r[t] = e);
                        }
                        for (let t in i) r[t] = i[t];
                      }),
                    r
                  );
                })(i, r, s, t),
                renderState: e(),
              };
              return n && (o.mount = (t) => n(i, t, o)), o;
            })(t, e, i, r);
        return n ? o() : (0, w.h)(o);
      };
      var V = n(24581);
      let E = {
          useVisualState: C({
            scrapeMotionValuesFromProps: y.U,
            createRenderState: m,
            onMount: (t, e, { renderState: n, latestValues: i }) => {
              V.Wi.read(() => {
                try {
                  n.dimensions =
                    "function" == typeof e.getBBox
                      ? e.getBBox()
                      : e.getBoundingClientRect();
                } catch (t) {
                  n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
                }
              }),
                V.Wi.render(() => {
                  (0, f.i)(
                    n,
                    i,
                    { enableHardwareAcceleration: !1 },
                    (0, v.a)(e.tagName),
                    t.transformTemplate
                  ),
                    (0, g.K)(e, n);
                });
            },
          }),
        },
        k = {
          useVisualState: C({
            scrapeMotionValuesFromProps: n(61533).U,
            createRenderState: u,
          }),
        };
      function M(t, { forwardMotionProps: e = !1 }, n, i) {
        return {
          ...((0, r.q)(t) ? E : k),
          preloadedFeatures: n,
          useRender: (function (t = !1) {
            return (e, n, i, { latestValues: o }, c) => {
              let g = (
                  (0, r.q)(e)
                    ? function (t, e, n, i) {
                        let r = (0, s.useMemo)(() => {
                          let n = m();
                          return (
                            (0, f.i)(
                              n,
                              e,
                              { enableHardwareAcceleration: !1 },
                              (0, v.a)(i),
                              t.transformTemplate
                            ),
                            { ...n.attrs, style: { ...n.style } }
                          );
                        }, [e]);
                        if (t.style) {
                          let e = {};
                          h(e, t.style, t), (r.style = { ...e, ...r.style });
                        }
                        return r;
                      }
                    : function (t, e, n) {
                        let i = {},
                          r = (function (t, e, n) {
                            let i = t.style || {},
                              r = {};
                            return (
                              h(r, i, t),
                              Object.assign(
                                r,
                                (function ({ transformTemplate: t }, e, n) {
                                  return (0, s.useMemo)(() => {
                                    let i = u();
                                    return (
                                      (0, l.r)(
                                        i,
                                        e,
                                        { enableHardwareAcceleration: !n },
                                        t
                                      ),
                                      Object.assign({}, i.vars, i.style)
                                    );
                                  }, [e]);
                                })(t, e, n)
                              ),
                              r
                            );
                          })(t, e, n);
                        return (
                          t.drag &&
                            !1 !== t.dragListener &&
                            ((i.draggable = !1),
                            (r.userSelect =
                              r.WebkitUserSelect =
                              r.WebkitTouchCallout =
                                "none"),
                            (r.touchAction =
                              !0 === t.drag
                                ? "none"
                                : `pan-${"x" === t.drag ? "y" : "x"}`)),
                          void 0 === t.tabIndex &&
                            (t.onTap || t.onTapStart || t.whileTap) &&
                            (i.tabIndex = 0),
                          (i.style = r),
                          i
                        );
                      }
                )(n, o, c, e),
                y = {
                  ...(function (t, e, n) {
                    let i = {};
                    for (let r in t)
                      ("values" !== r || "object" != typeof t.values) &&
                        (p(r) ||
                          (!0 === n && d(r)) ||
                          (!e && !d(r)) ||
                          (t.draggable && r.startsWith("onDrag"))) &&
                        (i[r] = t[r]);
                    return i;
                  })(n, "string" == typeof e, t),
                  ...g,
                  ref: i,
                },
                { children: x } = n,
                P = (0, s.useMemo)(() => ((0, a.i)(x) ? x.get() : x), [x]);
              return (0, s.createElement)(e, { ...y, children: P });
            };
          })(e),
          createVisualElement: i,
          Component: t,
        };
      }
    },
    1297: function (t, e, n) {
      n.d(e, {
        Xp: function () {
          return o;
        },
        f9: function () {
          return r;
        },
        tm: function () {
          return s;
        },
      });
      let i = (t) => (e) => "string" == typeof e && e.startsWith(t),
        r = i("--"),
        s = i("var(--"),
        o =
          /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g;
    },
    44983: function (t, e, n) {
      n.d(e, {
        q: function () {
          return r;
        },
      });
      let i = [
        "animate",
        "circle",
        "defs",
        "desc",
        "ellipse",
        "g",
        "image",
        "line",
        "filter",
        "marker",
        "mask",
        "metadata",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "rect",
        "stop",
        "switch",
        "symbol",
        "svg",
        "text",
        "tspan",
        "use",
        "view",
      ];
      function r(t) {
        if ("string" != typeof t || t.includes("-"));
        else if (i.indexOf(t) > -1 || /[A-Z]/.test(t)) return !0;
        return !1;
      }
    },
    32487: function (t, e, n) {
      n.d(e, {
        T: function () {
          return o;
        },
      });
      var i = n(47721),
        r = n(21759),
        s = n(68687);
      function o(t, e) {
        let n = (0, s.A)(t);
        return (
          n !== r.h && (n = i.P),
          n.getAnimatableNone ? n.getAnimatableNone(e) : void 0
        );
      }
    },
    68687: function (t, e, n) {
      n.d(e, {
        A: function () {
          return o;
        },
      });
      var i = n(88223),
        r = n(21759);
      let s = {
          ...n(11205).j,
          color: i.$,
          backgroundColor: i.$,
          outlineColor: i.$,
          fill: i.$,
          stroke: i.$,
          borderColor: i.$,
          borderTopColor: i.$,
          borderRightColor: i.$,
          borderBottomColor: i.$,
          borderLeftColor: i.$,
          filter: r.h,
          WebkitFilter: r.h,
        },
        o = (t) => s[t];
    },
    91323: function (t, e, n) {
      n.d(e, {
        $: function () {
          return o;
        },
        C: function () {
          return a;
        },
      });
      var i = n(95832),
        r = n(70526),
        s = n(38572);
      let o = [
          i.Rx,
          r.px,
          r.aQ,
          r.RW,
          r.vw,
          r.vh,
          { test: (t) => "auto" === t, parse: (t) => t },
        ],
        a = (t) => o.find((0, s.l)(t));
    },
    11205: function (t, e, n) {
      n.d(e, {
        j: function () {
          return o;
        },
      });
      var i = n(95832),
        r = n(70526);
      let s = { ...i.Rx, transform: Math.round },
        o = {
          borderWidth: r.px,
          borderTopWidth: r.px,
          borderRightWidth: r.px,
          borderBottomWidth: r.px,
          borderLeftWidth: r.px,
          borderRadius: r.px,
          radius: r.px,
          borderTopLeftRadius: r.px,
          borderTopRightRadius: r.px,
          borderBottomRightRadius: r.px,
          borderBottomLeftRadius: r.px,
          width: r.px,
          maxWidth: r.px,
          height: r.px,
          maxHeight: r.px,
          size: r.px,
          top: r.px,
          right: r.px,
          bottom: r.px,
          left: r.px,
          padding: r.px,
          paddingTop: r.px,
          paddingRight: r.px,
          paddingBottom: r.px,
          paddingLeft: r.px,
          margin: r.px,
          marginTop: r.px,
          marginRight: r.px,
          marginBottom: r.px,
          marginLeft: r.px,
          rotate: r.RW,
          rotateX: r.RW,
          rotateY: r.RW,
          rotateZ: r.RW,
          scale: i.bA,
          scaleX: i.bA,
          scaleY: i.bA,
          scaleZ: i.bA,
          skew: r.RW,
          skewX: r.RW,
          skewY: r.RW,
          distance: r.px,
          translateX: r.px,
          translateY: r.px,
          translateZ: r.px,
          x: r.px,
          y: r.px,
          z: r.px,
          perspective: r.px,
          transformPerspective: r.px,
          opacity: i.Fq,
          originX: r.$C,
          originY: r.$C,
          originZ: r.px,
          zIndex: s,
          fillOpacity: i.Fq,
          strokeOpacity: i.Fq,
          numOctaves: s,
        };
    },
    38572: function (t, e, n) {
      n.d(e, {
        l: function () {
          return i;
        },
      });
      let i = (t) => (e) => e.test(t);
    },
    17670: function (t, e, n) {
      n.d(e, {
        r: function () {
          return u;
        },
      });
      var i = n(84163);
      let r = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        s = i._.length;
      var o = n(1297);
      let a = (t, e) => (e && "number" == typeof t ? e.transform(t) : t);
      var l = n(11205);
      function u(t, e, n, u) {
        let { style: h, vars: c, transform: d, transformOrigin: p } = t,
          f = !1,
          m = !1,
          v = !0;
        for (let t in e) {
          let n = e[t];
          if ((0, o.f9)(t)) {
            c[t] = n;
            continue;
          }
          let r = l.j[t],
            s = a(n, r);
          if (i.G.has(t)) {
            if (((f = !0), (d[t] = s), !v)) continue;
            n !== (r.default || 0) && (v = !1);
          } else t.startsWith("origin") ? ((m = !0), (p[t] = s)) : (h[t] = s);
        }
        if (
          (!e.transform &&
            (f || u
              ? (h.transform = (function (
                  t,
                  {
                    enableHardwareAcceleration: e = !0,
                    allowTransformNone: n = !0,
                  },
                  o,
                  a
                ) {
                  let l = "";
                  for (let e = 0; e < s; e++) {
                    let n = i._[e];
                    if (void 0 !== t[n]) {
                      let e = r[n] || n;
                      l += `${e}(${t[n]}) `;
                    }
                  }
                  return (
                    e && !t.z && (l += "translateZ(0)"),
                    (l = l.trim()),
                    a ? (l = a(t, o ? "" : l)) : n && o && (l = "none"),
                    l
                  );
                })(t.transform, n, v, u))
              : h.transform && (h.transform = "none")),
          m)
        ) {
          let { originX: t = "50%", originY: e = "50%", originZ: n = 0 } = p;
          h.transformOrigin = `${t} ${e} ${n}`;
        }
      }
    },
    12161: function (t, e, n) {
      n.d(e, {
        N: function () {
          return i;
        },
      });
      function i(t, { style: e, vars: n }, i, r) {
        for (let s in (Object.assign(t.style, e, r && r.getProjectionStyles(i)),
        n))
          t.style.setProperty(s, n[s]);
      }
    },
    61533: function (t, e, n) {
      n.d(e, {
        U: function () {
          return s;
        },
      });
      var i = n(43946),
        r = n(3145);
      function s(t, e) {
        let { style: n } = t,
          s = {};
        for (let o in n)
          ((0, r.i)(n[o]) ||
            (e.style && (0, r.i)(e.style[o])) ||
            (0, i.j)(o, t)) &&
            (s[o] = n[o]);
        return s;
      }
    },
    84163: function (t, e, n) {
      n.d(e, {
        G: function () {
          return r;
        },
        _: function () {
          return i;
        },
      });
      let i = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        r = new Set(i);
    },
    38800: function (t, e, n) {
      n.d(e, {
        i: function () {
          return l;
        },
      });
      var i = n(17670),
        r = n(70526);
      function s(t, e, n) {
        return "string" == typeof t ? t : r.px.transform(e + n * t);
      }
      let o = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        a = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function l(
        t,
        {
          attrX: e,
          attrY: n,
          attrScale: l,
          originX: u,
          originY: h,
          pathLength: c,
          pathSpacing: d = 1,
          pathOffset: p = 0,
          ...f
        },
        m,
        v,
        g
      ) {
        if (((0, i.r)(t, f, m, g), v)) {
          t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
          return;
        }
        (t.attrs = t.style), (t.style = {});
        let { attrs: y, style: x, dimensions: P } = t;
        y.transform && (P && (x.transform = y.transform), delete y.transform),
          P &&
            (void 0 !== u || void 0 !== h || x.transform) &&
            (x.transformOrigin = (function (t, e, n) {
              let i = s(e, t.x, t.width),
                r = s(n, t.y, t.height);
              return `${i} ${r}`;
            })(P, void 0 !== u ? u : 0.5, void 0 !== h ? h : 0.5)),
          void 0 !== e && (y.x = e),
          void 0 !== n && (y.y = n),
          void 0 !== l && (y.scale = l),
          void 0 !== c &&
            (function (t, e, n = 1, i = 0, s = !0) {
              t.pathLength = 1;
              let l = s ? o : a;
              t[l.offset] = r.px.transform(-i);
              let u = r.px.transform(e),
                h = r.px.transform(n);
              t[l.array] = `${u} ${h}`;
            })(y, c, d, p, !1);
      }
    },
    36882: function (t, e, n) {
      n.d(e, {
        s: function () {
          return i;
        },
      });
      let i = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]);
    },
    66840: function (t, e, n) {
      n.d(e, {
        a: function () {
          return i;
        },
      });
      let i = (t) => "string" == typeof t && "svg" === t.toLowerCase();
    },
    994: function (t, e, n) {
      n.d(e, {
        K: function () {
          return o;
        },
      });
      var i = n(51838),
        r = n(12161),
        s = n(36882);
      function o(t, e, n, o) {
        for (let n in ((0, r.N)(t, e, void 0, o), e.attrs))
          t.setAttribute(s.s.has(n) ? n : (0, i.D)(n), e.attrs[n]);
      }
    },
    7228: function (t, e, n) {
      n.d(e, {
        U: function () {
          return o;
        },
      });
      var i = n(3145),
        r = n(61533),
        s = n(84163);
      function o(t, e) {
        let n = (0, r.U)(t, e);
        for (let r in t)
          ((0, i.i)(t[r]) || (0, i.i)(e[r])) &&
            (n[
              -1 !== s._.indexOf(r)
                ? "attr" + r.charAt(0).toUpperCase() + r.substring(1)
                : r
            ] = t[r]);
        return n;
      }
    },
    2029: function (t, e, n) {
      n.d(e, {
        G: function () {
          return o;
        },
        M: function () {
          return a;
        },
      });
      var i = n(16827),
        r = n(76624),
        s = n(74680);
      function o(t) {
        return (0, i.H)(t.animate) || s.V.some((e) => (0, r.$)(t[e]));
      }
      function a(t) {
        return !!(o(t) || t.variants);
      }
    },
    76624: function (t, e, n) {
      n.d(e, {
        $: function () {
          return i;
        },
      });
      function i(t) {
        return "string" == typeof t || Array.isArray(t);
      }
    },
    95731: function (t, e, n) {
      n.d(e, {
        x: function () {
          return r;
        },
      });
      var i = n(3988);
      function r(t, e, n) {
        let r = t.getProps();
        return (0, i.o)(
          r,
          e,
          void 0 !== n ? n : r.custom,
          (function (t) {
            let e = {};
            return t.values.forEach((t, n) => (e[n] = t.get())), e;
          })(t),
          (function (t) {
            let e = {};
            return t.values.forEach((t, n) => (e[n] = t.getVelocity())), e;
          })(t)
        );
      }
    },
    3988: function (t, e, n) {
      n.d(e, {
        o: function () {
          return i;
        },
      });
      function i(t, e, n, i = {}, r = {}) {
        return (
          "function" == typeof e && (e = e(void 0 !== n ? n : t.custom, i, r)),
          "string" == typeof e && (e = t.variants && t.variants[e]),
          "function" == typeof e && (e = e(void 0 !== n ? n : t.custom, i, r)),
          e
        );
      }
    },
    38809: function (t, e, n) {
      n.d(e, {
        GJ: function () {
          return y;
        },
        P$: function () {
          return x;
        },
        CD: function () {
          return m;
        },
        gg: function () {
          return g;
        },
      });
      var i = n(38477),
        r = n(93984),
        s = n(69406),
        o = n(31464),
        a = n(47721),
        l = n(32487),
        u = n(88223),
        h = n(91323),
        c = n(38572);
      let d = [...h.$, u.$, a.P],
        p = (t) => d.find((0, c.l)(t));
      var f = n(95731);
      function m(t, e) {
        let n = (0, f.x)(t, e),
          {
            transitionEnd: i = {},
            transition: r = {},
            ...a
          } = n ? t.makeTargetAnimatable(n, !1) : {};
        for (let e in (a = { ...a, ...i })) {
          let n = (0, s.Y)(a[e]);
          t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, (0, o.BX)(n));
        }
      }
      function v(t, e) {
        [...e].reverse().forEach((n) => {
          let i = t.getVariant(n);
          i && m(t, i),
            t.variantChildren &&
              t.variantChildren.forEach((t) => {
                v(t, e);
              });
        });
      }
      function g(t, e) {
        return Array.isArray(e)
          ? v(t, e)
          : "string" == typeof e
          ? v(t, [e])
          : void m(t, e);
      }
      function y(t, e, n) {
        var s, u;
        let h = Object.keys(e).filter((e) => !t.hasValue(e)),
          c = h.length;
        if (c)
          for (let d = 0; d < c; d++) {
            let c = h[d],
              f = e[c],
              m = null;
            Array.isArray(f) && (m = f[0]),
              null === m &&
                (m =
                  null !==
                    (u =
                      null !== (s = n[c]) && void 0 !== s
                        ? s
                        : t.readValue(c)) && void 0 !== u
                    ? u
                    : e[c]),
              null != m &&
                ("string" == typeof m && ((0, i.P)(m) || (0, r.W)(m))
                  ? (m = parseFloat(m))
                  : !p(m) && a.P.test(f) && (m = (0, l.T)(c, f)),
                t.addValue(c, (0, o.BX)(m, { owner: t })),
                void 0 === n[c] && (n[c] = m),
                null !== m && t.setBaseTarget(c, m));
          }
      }
      function x(t, e, n) {
        let i = {};
        for (let r in t) {
          let t = (function (t, e) {
            if (e) return (e[t] || e.default || e).from;
          })(r, e);
          if (void 0 !== t) i[r] = t;
          else {
            let t = n.getValue(r);
            t && (i[r] = t.get());
          }
        }
        return i;
      }
    },
    74680: function (t, e, n) {
      n.d(e, {
        V: function () {
          return r;
        },
        e: function () {
          return i;
        },
      });
      let i = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        r = ["initial", ...i];
    },
    82341: function (t, e, n) {
      n.d(e, {
        c: function () {
          return i;
        },
      });
      let i = { skipAnimations: !1, useManualTiming: !1 };
    },
    57610: function (t, e, n) {
      function i(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function r(t, e) {
        let n = t.indexOf(e);
        n > -1 && t.splice(n, 1);
      }
      n.d(e, {
        cl: function () {
          return r;
        },
        y4: function () {
          return i;
        },
      });
    },
    40867: function (t, e, n) {
      n.d(e, {
        u: function () {
          return i;
        },
      });
      let i = (t, e, n) => Math.min(Math.max(n, t), e);
    },
    18358: function (t, e, n) {
      n.d(e, {
        K: function () {
          return r;
        },
        k: function () {
          return s;
        },
      });
      var i = n(31632);
      let r = i.Z,
        s = i.Z;
    },
    79286: function (t, e, n) {
      n.d(e, {
        s: function () {
          return C;
        },
      });
      var i = n(18358),
        r = n(88223),
        s = n(40867),
        o = n(78583);
      function a(t, e, n) {
        return (n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6)
          ? t + (e - t) * 6 * n
          : n < 0.5
          ? e
          : n < 2 / 3
          ? t + (e - t) * (2 / 3 - n) * 6
          : t;
      }
      var l = n(34285),
        u = n(42555),
        h = n(35454);
      let c = (t, e, n) => {
          let i = t * t;
          return Math.sqrt(Math.max(0, n * (e * e - i) + i));
        },
        d = [l.$, u.m, h.J],
        p = (t) => d.find((e) => e.test(t));
      function f(t) {
        let e = p(t);
        (0, i.k)(
          !!e,
          `'${t}' is not an animatable color. Use the equivalent color code instead.`
        );
        let n = e.parse(t);
        return (
          e === h.J &&
            (n = (function ({ hue: t, saturation: e, lightness: n, alpha: i }) {
              (t /= 360), (n /= 100);
              let r = 0,
                s = 0,
                o = 0;
              if ((e /= 100)) {
                let i = n < 0.5 ? n * (1 + e) : n + e - n * e,
                  l = 2 * n - i;
                (r = a(l, i, t + 1 / 3)),
                  (s = a(l, i, t)),
                  (o = a(l, i, t - 1 / 3));
              } else r = s = o = n;
              return {
                red: Math.round(255 * r),
                green: Math.round(255 * s),
                blue: Math.round(255 * o),
                alpha: i,
              };
            })(n)),
          n
        );
      }
      let m = (t, e) => {
        let n = f(t),
          i = f(e),
          r = { ...n };
        return (t) => (
          (r.red = c(n.red, i.red, t)),
          (r.green = c(n.green, i.green, t)),
          (r.blue = c(n.blue, i.blue, t)),
          (r.alpha = (0, o.C)(n.alpha, i.alpha, t)),
          u.m.transform(r)
        );
      };
      var v = n(74757),
        g = n(47721);
      let y = (t, e) => (n) => `${n > 0 ? e : t}`;
      function x(t, e) {
        return "number" == typeof t
          ? (n) => (0, o.C)(t, e, n)
          : r.$.test(t)
          ? m(t, e)
          : t.startsWith("var(")
          ? y(t, e)
          : w(t, e);
      }
      let P = (t, e) => {
          let n = [...t],
            i = n.length,
            r = t.map((t, n) => x(t, e[n]));
          return (t) => {
            for (let e = 0; e < i; e++) n[e] = r[e](t);
            return n;
          };
        },
        b = (t, e) => {
          let n = { ...t, ...e },
            i = {};
          for (let r in n)
            void 0 !== t[r] && void 0 !== e[r] && (i[r] = x(t[r], e[r]));
          return (t) => {
            for (let e in i) n[e] = i[e](t);
            return n;
          };
        },
        w = (t, e) => {
          let n = g.P.createTransformer(e),
            r = (0, g.V)(t),
            s = (0, g.V)(e);
          return r.numVars === s.numVars &&
            r.numColors === s.numColors &&
            r.numNumbers >= s.numNumbers
            ? (0, v.z)(P(r.values, s.values), n)
            : ((0, i.K)(
                !0,
                `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
              ),
              y(t, e));
        };
      var A = n(3477),
        T = n(31632);
      let S = (t, e) => (n) => (0, o.C)(t, e, n);
      function C(t, e, { clamp: n = !0, ease: o, mixer: a } = {}) {
        let l = t.length;
        if (
          ((0, i.k)(
            l === e.length,
            "Both input and output ranges must be the same length"
          ),
          1 === l)
        )
          return () => e[0];
        t[0] > t[l - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
        let u = (function (t, e, n) {
            let i = [],
              s =
                n ||
                (function (t) {
                  if ("number" == typeof t);
                  else if ("string" == typeof t) return r.$.test(t) ? m : w;
                  else if (Array.isArray(t)) return P;
                  else if ("object" == typeof t) return b;
                  return S;
                })(t[0]),
              o = t.length - 1;
            for (let n = 0; n < o; n++) {
              let r = s(t[n], t[n + 1]);
              if (e) {
                let t = Array.isArray(e) ? e[n] || T.Z : e;
                r = (0, v.z)(t, r);
              }
              i.push(r);
            }
            return i;
          })(e, o, a),
          h = u.length,
          c = (e) => {
            let n = 0;
            if (h > 1) for (; n < t.length - 2 && !(e < t[n + 1]); n++);
            let i = (0, A.Y)(t[n], t[n + 1], e);
            return u[n](i);
          };
        return n ? (e) => c((0, s.u)(t[0], t[l - 1], e)) : c;
      }
    },
    47976: function (t, e, n) {
      n.d(e, {
        j: function () {
          return i;
        },
      });
      let i = "undefined" != typeof document;
    },
    38477: function (t, e, n) {
      n.d(e, {
        P: function () {
          return i;
        },
      });
      let i = (t) => /^\-?\d*\.?\d+$/.test(t);
    },
    8746: function (t, e, n) {
      n.d(e, {
        I: function () {
          return i;
        },
      });
      function i(t) {
        return (
          t &&
          "object" == typeof t &&
          Object.prototype.hasOwnProperty.call(t, "current")
        );
      }
    },
    93984: function (t, e, n) {
      n.d(e, {
        W: function () {
          return i;
        },
      });
      let i = (t) => /^0[^.\s]+$/.test(t);
    },
    78583: function (t, e, n) {
      n.d(e, {
        C: function () {
          return i;
        },
      });
      let i = (t, e, n) => -n * t + n * e + t;
    },
    31632: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return i;
        },
      });
      let i = (t) => t;
    },
    31947: function (t, e, n) {
      n.d(e, {
        Y: function () {
          return s;
        },
      });
      var i = n(78583),
        r = n(3477);
      function s(t) {
        let e = [0];
        return (
          !(function (t, e) {
            let n = t[t.length - 1];
            for (let s = 1; s <= e; s++) {
              let o = (0, r.Y)(0, e, s);
              t.push((0, i.C)(n, 1, o));
            }
          })(e, t.length - 1),
          e
        );
      }
    },
    74757: function (t, e, n) {
      n.d(e, {
        z: function () {
          return r;
        },
      });
      let i = (t, e) => (n) => e(t(n)),
        r = (...t) => t.reduce(i);
    },
    3477: function (t, e, n) {
      n.d(e, {
        Y: function () {
          return i;
        },
      });
      let i = (t, e, n) => {
        let i = e - t;
        return 0 === i ? 1 : (n - t) / i;
      };
    },
    69406: function (t, e, n) {
      n.d(e, {
        Y: function () {
          return s;
        },
        p: function () {
          return r;
        },
      });
      var i = n(39958);
      let r = (t) => !!(t && "object" == typeof t && t.mix && t.toValue),
        s = (t) => ((0, i.C)(t) ? t[t.length - 1] || 0 : t);
    },
    10496: function (t, e, n) {
      n.d(e, {
        L: function () {
          return r;
        },
      });
      var i = n(57610);
      class r {
        constructor() {
          this.subscriptions = [];
        }
        add(t) {
          return (
            (0, i.y4)(this.subscriptions, t),
            () => (0, i.cl)(this.subscriptions, t)
          );
        }
        notify(t, e, n) {
          let i = this.subscriptions.length;
          if (i) {
            if (1 === i) this.subscriptions[0](t, e, n);
            else
              for (let r = 0; r < i; r++) {
                let i = this.subscriptions[r];
                i && i(t, e, n);
              }
          }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
    },
    41643: function (t, e, n) {
      n.d(e, {
        X: function () {
          return r;
        },
        w: function () {
          return i;
        },
      });
      let i = (t) => 1e3 * t,
        r = (t) => t / 1e3;
    },
    16770: function (t, e, n) {
      n.d(e, {
        h: function () {
          return r;
        },
      });
      var i = n(2784);
      function r(t) {
        let e = (0, i.useRef)(null);
        return null === e.current && (e.current = t()), e.current;
      }
    },
    54283: function (t, e, n) {
      n.d(e, {
        L: function () {
          return r;
        },
      });
      var i = n(2784);
      let r = n(47976).j ? i.useLayoutEffect : i.useEffect;
    },
    22305: function (t, e, n) {
      n.d(e, {
        R: function () {
          return i;
        },
      });
      function i(t, e) {
        return e ? (1e3 / e) * t : 0;
      }
    },
    31464: function (t, e, n) {
      n.d(e, {
        BX: function () {
          return h;
        },
        S1: function () {
          return l;
        },
      });
      var i = n(10496),
        r = n(22305),
        s = n(88882),
        o = n(24581);
      let a = (t) => !isNaN(parseFloat(t)),
        l = { current: void 0 };
      class u {
        constructor(t, e = {}) {
          (this.version = "11.0.3"),
            (this.canTrackVelocity = !1),
            (this.events = {}),
            (this.updateAndNotify = (t, e = !0) => {
              let n = s.X.now();
              this.updatedAt !== n && this.setPrevFrameValue(),
                (this.prev = this.current),
                this.setCurrent(t),
                this.current !== this.prev &&
                  this.events.change &&
                  this.events.change.notify(this.current),
                e &&
                  this.events.renderRequest &&
                  this.events.renderRequest.notify(this.current);
            }),
            (this.hasAnimated = !1),
            this.setCurrent(t),
            (this.canTrackVelocity = a(this.current)),
            (this.owner = e.owner);
        }
        setCurrent(t) {
          (this.current = t), (this.updatedAt = s.X.now());
        }
        setPrevFrameValue(t = this.current) {
          (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
        }
        onChange(t) {
          return this.on("change", t);
        }
        on(t, e) {
          this.events[t] || (this.events[t] = new i.L());
          let n = this.events[t].add(e);
          return "change" === t
            ? () => {
                n(),
                  o.Wi.read(() => {
                    this.events.change.getSize() || this.stop();
                  });
              }
            : n;
        }
        clearListeners() {
          for (let t in this.events) this.events[t].clear();
        }
        attach(t, e) {
          (this.passiveEffect = t), (this.stopPassiveEffect = e);
        }
        set(t, e = !0) {
          e && this.passiveEffect
            ? this.passiveEffect(t, this.updateAndNotify)
            : this.updateAndNotify(t, e);
        }
        setWithVelocity(t, e, n) {
          this.set(e),
            (this.prev = void 0),
            (this.prevFrameValue = t),
            (this.prevUpdatedAt = this.updatedAt - n);
        }
        jump(t) {
          this.updateAndNotify(t),
            (this.prev = t),
            (this.prevUpdatedAt = this.prevFrameValue = void 0),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
        get() {
          return l.current && l.current.push(this), this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          let t = s.X.now();
          if (
            !this.canTrackVelocity ||
            void 0 === this.prevFrameValue ||
            t - this.updatedAt > 30
          )
            return 0;
          let e = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
          return (0, r.R)(
            parseFloat(this.current) - parseFloat(this.prevFrameValue),
            e
          );
        }
        start(t) {
          return (
            this.stop(),
            new Promise((e) => {
              (this.hasAnimated = !0),
                (this.animation = t(e)),
                this.events.animationStart &&
                  this.events.animationStart.notify();
            }).then(() => {
              this.events.animationComplete &&
                this.events.animationComplete.notify(),
                this.clearAnimation();
            })
          );
        }
        stop() {
          this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation();
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
      }
      function h(t, e) {
        return new u(t, e);
      }
    },
    34285: function (t, e, n) {
      n.d(e, {
        $: function () {
          return r;
        },
      });
      var i = n(42555);
      let r = {
        test: (0, n(43992).i)("#"),
        parse: function (t) {
          let e = "",
            n = "",
            i = "",
            r = "";
          return (
            t.length > 5
              ? ((e = t.substring(1, 3)),
                (n = t.substring(3, 5)),
                (i = t.substring(5, 7)),
                (r = t.substring(7, 9)))
              : ((e = t.substring(1, 2)),
                (n = t.substring(2, 3)),
                (i = t.substring(3, 4)),
                (r = t.substring(4, 5)),
                (e += e),
                (n += n),
                (i += i),
                (r += r)),
            {
              red: parseInt(e, 16),
              green: parseInt(n, 16),
              blue: parseInt(i, 16),
              alpha: r ? parseInt(r, 16) / 255 : 1,
            }
          );
        },
        transform: i.m.transform,
      };
    },
    35454: function (t, e, n) {
      n.d(e, {
        J: function () {
          return a;
        },
      });
      var i = n(95832),
        r = n(70526),
        s = n(39493),
        o = n(43992);
      let a = {
        test: (0, o.i)("hsl", "hue"),
        parse: (0, o.d)("hue", "saturation", "lightness"),
        transform: ({ hue: t, saturation: e, lightness: n, alpha: o = 1 }) =>
          "hsla(" +
          Math.round(t) +
          ", " +
          r.aQ.transform((0, s.Nw)(e)) +
          ", " +
          r.aQ.transform((0, s.Nw)(n)) +
          ", " +
          (0, s.Nw)(i.Fq.transform(o)) +
          ")",
      };
    },
    88223: function (t, e, n) {
      n.d(e, {
        $: function () {
          return a;
        },
      });
      var i = n(39493),
        r = n(34285),
        s = n(35454),
        o = n(42555);
      let a = {
        test: (t) => o.m.test(t) || r.$.test(t) || s.J.test(t),
        parse: (t) =>
          o.m.test(t)
            ? o.m.parse(t)
            : s.J.test(t)
            ? s.J.parse(t)
            : r.$.parse(t),
        transform: (t) =>
          (0, i.HD)(t)
            ? t
            : t.hasOwnProperty("red")
            ? o.m.transform(t)
            : s.J.transform(t),
      };
    },
    42555: function (t, e, n) {
      n.d(e, {
        m: function () {
          return u;
        },
      });
      var i = n(40867),
        r = n(95832),
        s = n(39493),
        o = n(43992);
      let a = (t) => (0, i.u)(0, 255, t),
        l = { ...r.Rx, transform: (t) => Math.round(a(t)) },
        u = {
          test: (0, o.i)("rgb", "red"),
          parse: (0, o.d)("red", "green", "blue"),
          transform: ({ red: t, green: e, blue: n, alpha: i = 1 }) =>
            "rgba(" +
            l.transform(t) +
            ", " +
            l.transform(e) +
            ", " +
            l.transform(n) +
            ", " +
            (0, s.Nw)(r.Fq.transform(i)) +
            ")",
        };
    },
    43992: function (t, e, n) {
      n.d(e, {
        d: function () {
          return s;
        },
        i: function () {
          return r;
        },
      });
      var i = n(39493);
      let r = (t, e) => (n) =>
          !!(
            ((0, i.HD)(n) && i.mj.test(n) && n.startsWith(t)) ||
            (e && Object.prototype.hasOwnProperty.call(n, e))
          ),
        s = (t, e, n) => (r) => {
          if (!(0, i.HD)(r)) return r;
          let [s, o, a, l] = r.match(i.KP);
          return {
            [t]: parseFloat(s),
            [e]: parseFloat(o),
            [n]: parseFloat(a),
            alpha: void 0 !== l ? parseFloat(l) : 1,
          };
        };
    },
    21759: function (t, e, n) {
      n.d(e, {
        h: function () {
          return l;
        },
      });
      var i = n(47721),
        r = n(39493);
      let s = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function o(t) {
        let [e, n] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        let [i] = n.match(r.KP) || [];
        if (!i) return t;
        let o = n.replace(i, ""),
          a = s.has(e) ? 1 : 0;
        return i !== n && (a *= 100), e + "(" + a + o + ")";
      }
      let a = /([a-z-]*)\(.*?\)/g,
        l = {
          ...i.P,
          getAnimatableNone: (t) => {
            let e = t.match(a);
            return e ? e.map(o).join(" ") : t;
          },
        };
    },
    47721: function (t, e, n) {
      n.d(e, {
        P: function () {
          return v;
        },
        V: function () {
          return d;
        },
      });
      var i = n(1297),
        r = n(31632),
        s = n(88223),
        o = n(95832),
        a = n(39493);
      let l = { regex: i.Xp, countKey: "Vars", token: "${v}", parse: r.Z },
        u = {
          regex: a.dA,
          countKey: "Colors",
          token: "${c}",
          parse: s.$.parse,
        },
        h = {
          regex: a.KP,
          countKey: "Numbers",
          token: "${n}",
          parse: o.Rx.parse,
        };
      function c(t, { regex: e, countKey: n, token: i, parse: r }) {
        let s = t.tokenised.match(e);
        s &&
          ((t["num" + n] = s.length),
          (t.tokenised = t.tokenised.replace(e, i)),
          t.values.push(...s.map(r)));
      }
      function d(t) {
        let e = t.toString(),
          n = {
            value: e,
            tokenised: e,
            values: [],
            numVars: 0,
            numColors: 0,
            numNumbers: 0,
          };
        return n.value.includes("var(--") && c(n, l), c(n, u), c(n, h), n;
      }
      function p(t) {
        return d(t).values;
      }
      function f(t) {
        let { values: e, numColors: n, numVars: i, tokenised: r } = d(t),
          o = e.length;
        return (t) => {
          let e = r;
          for (let r = 0; r < o; r++)
            e =
              r < i
                ? e.replace(l.token, t[r])
                : r < i + n
                ? e.replace(u.token, s.$.transform(t[r]))
                : e.replace(h.token, (0, a.Nw)(t[r]));
          return e;
        };
      }
      let m = (t) => ("number" == typeof t ? 0 : t),
        v = {
          test: function (t) {
            var e, n;
            return (
              isNaN(t) &&
              (0, a.HD)(t) &&
              ((null === (e = t.match(a.KP)) || void 0 === e
                ? void 0
                : e.length) || 0) +
                ((null === (n = t.match(a.dA)) || void 0 === n
                  ? void 0
                  : n.length) || 0) >
                0
            );
          },
          parse: p,
          createTransformer: f,
          getAnimatableNone: function (t) {
            let e = p(t);
            return f(t)(e.map(m));
          },
        };
    },
    95832: function (t, e, n) {
      n.d(e, {
        Fq: function () {
          return s;
        },
        Rx: function () {
          return r;
        },
        bA: function () {
          return o;
        },
      });
      var i = n(40867);
      let r = {
          test: (t) => "number" == typeof t,
          parse: parseFloat,
          transform: (t) => t,
        },
        s = { ...r, transform: (t) => (0, i.u)(0, 1, t) },
        o = { ...r, default: 1 };
    },
    70526: function (t, e, n) {
      n.d(e, {
        $C: function () {
          return h;
        },
        RW: function () {
          return s;
        },
        aQ: function () {
          return o;
        },
        px: function () {
          return a;
        },
        vh: function () {
          return l;
        },
        vw: function () {
          return u;
        },
      });
      var i = n(39493);
      let r = (t) => ({
          test: (e) =>
            (0, i.HD)(e) && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: (e) => `${e}${t}`,
        }),
        s = r("deg"),
        o = r("%"),
        a = r("px"),
        l = r("vh"),
        u = r("vw"),
        h = {
          ...o,
          parse: (t) => o.parse(t) / 100,
          transform: (t) => o.transform(100 * t),
        };
    },
    39493: function (t, e, n) {
      n.d(e, {
        HD: function () {
          return a;
        },
        KP: function () {
          return r;
        },
        Nw: function () {
          return i;
        },
        dA: function () {
          return s;
        },
        mj: function () {
          return o;
        },
      });
      let i = (t) => Math.round(1e5 * t) / 1e5,
        r = /(-)?([\d]*\.?[\d])+/g,
        s =
          /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
        o =
          /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
      function a(t) {
        return "string" == typeof t;
      }
    },
    94102: function (t, e, n) {
      n.d(e, {
        L: function () {
          return r;
        },
      });
      var i = n(3145);
      function r(t) {
        return !!((0, i.i)(t) && t.add);
      }
    },
    3145: function (t, e, n) {
      n.d(e, {
        i: function () {
          return i;
        },
      });
      let i = (t) => !!(t && t.getVelocity);
    },
    97981: function (t, e, n) {
      n.d(e, {
        b: function () {
          return s;
        },
      });
      var i = n(69406),
        r = n(3145);
      function s(t) {
        let e = (0, r.i)(t) ? t.get() : t;
        return (0, i.p)(e) ? e.toValue() : e;
      }
    },
    79138: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return o;
        },
      });
      var i,
        r,
        s =
          /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
        o =
          ((i = function (t) {
            return (
              s.test(t) ||
              (111 === t.charCodeAt(0) &&
                110 === t.charCodeAt(1) &&
                91 > t.charCodeAt(2))
            );
          }),
          (r = {}),
          function (t) {
            return void 0 === r[t] && (r[t] = i(t)), r[t];
          });
    },
  },
]);
