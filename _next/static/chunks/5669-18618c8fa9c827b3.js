(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5669],
  {
    99: function (t, e, i) {
      "use strict";
      i.d(e, {
        Z: function () {
          return n;
        },
      });
      let n = (0, i(55132).Z)("ArrowUpRight", [
        ["path", { d: "M7 7h10v10", key: "1tivn9" }],
        ["path", { d: "M7 17 17 7", key: "1vkiza" }],
      ]);
    },
    96813: function () {},
    72170: function (t, e, i) {
      "use strict";
      i.d(e, {
        Z: function () {
          return D;
        },
      });
      var n = i(2784),
        o = i(28316);
      let a = (t, e) => t === e?.tagName?.toUpperCase?.(),
        r = (t) => a("DIV", t) || a("SPAN", t),
        s = (t) => a("IMG", t),
        h = (t) => t.complete && 0 !== t.naturalHeight,
        l = (t) => a("SVG", t),
        d = ({ height: t, offset: e, width: i }) =>
          Math.min(
            (window.innerWidth - 2 * e) / i,
            (window.innerHeight - 2 * e) / t
          ),
        c = ({
          containerHeight: t,
          containerWidth: e,
          offset: i,
          targetHeight: n,
          targetWidth: o,
        }) => {
          let a = d({ height: n, offset: i, width: o }),
            r = o > n ? o / e : n / t;
          return a > 1 ? r : a * r;
        },
        m = ({
          containerHeight: t,
          containerWidth: e,
          hasScalableSrc: i,
          offset: n,
          targetHeight: o,
          targetWidth: a,
        }) =>
          t && e
            ? !i && o && a
              ? c({
                  containerHeight: t,
                  containerWidth: e,
                  offset: n,
                  targetHeight: o,
                  targetWidth: a,
                })
              : d({ height: t, offset: n, width: e })
            : 1,
        u = /url(?:\(['"]?)(.*?)(?:['"]?\))/,
        g = (t) => {
          if (t) {
            if (s(t)) return t.currentSrc;
            if (r(t)) {
              let e = window.getComputedStyle(t).backgroundImage;
              if (e) return u.exec(e)?.[1];
            }
          }
        },
        v = (t) => {
          if (t)
            return s(t)
              ? t.alt ?? void 0
              : t.getAttribute("aria-label") ?? void 0;
        },
        p = ({
          containerHeight: t,
          containerLeft: e,
          containerTop: i,
          containerWidth: n,
          hasScalableSrc: o,
          offset: a,
          targetHeight: r,
          targetWidth: s,
        }) => {
          let h = m({
            containerHeight: t,
            containerWidth: n,
            hasScalableSrc: o,
            offset: a,
            targetHeight: r,
            targetWidth: s,
          });
          return {
            top: i,
            left: e,
            width: n * h,
            height: t * h,
            transform: `translate(0,0) scale(${1 / h})`,
          };
        },
        f = ({ position: t, relativeNum: e }) => {
          let i = parseFloat(t);
          return t.endsWith("%") ? (e * i) / 100 : i;
        },
        w = ({
          containerHeight: t,
          containerLeft: e,
          containerTop: i,
          containerWidth: n,
          hasScalableSrc: o,
          objectFit: a,
          objectPosition: r,
          offset: s,
          targetHeight: h,
          targetWidth: l,
        }) => {
          if (
            ("scale-down" === a && (a = l <= n && h <= t ? "none" : "contain"),
            "cover" === a || "contain" === a)
          ) {
            let d = n / l,
              c = t / h,
              u = "cover" === a ? Math.max(d, c) : Math.min(d, c),
              [g = "50%", v = "50%"] = r.split(" "),
              p = f({ position: g, relativeNum: n - l * u }),
              w = f({ position: v, relativeNum: t - h * u }),
              E = m({
                containerHeight: h * u,
                containerWidth: l * u,
                hasScalableSrc: o,
                offset: s,
                targetHeight: h,
                targetWidth: l,
              });
            return {
              top: i + w,
              left: e + p,
              width: l * u * E,
              height: h * u * E,
              transform: `translate(0,0) scale(${1 / E})`,
            };
          }
          if ("none" === a) {
            let [a = "50%", d = "50%"] = r.split(" "),
              c = f({ position: a, relativeNum: n - l }),
              u = f({ position: d, relativeNum: t - h }),
              g = m({
                containerHeight: h,
                containerWidth: l,
                hasScalableSrc: o,
                offset: s,
                targetHeight: h,
                targetWidth: l,
              });
            return {
              top: i + u,
              left: e + c,
              width: l * g,
              height: h * g,
              transform: `translate(0,0) scale(${1 / g})`,
            };
          }
          if ("fill" !== a) return {};
          {
            let e = Math.max(n / l, t / h),
              i = m({
                containerHeight: h * e,
                containerWidth: l * e,
                hasScalableSrc: o,
                offset: s,
                targetHeight: h,
                targetWidth: l,
              });
            return {
              width: n * i,
              height: t * i,
              transform: `translate(0,0) scale(${1 / i})`,
            };
          }
        },
        E = ({
          backgroundPosition: t,
          backgroundSize: e,
          containerHeight: i,
          containerLeft: n,
          containerTop: o,
          containerWidth: a,
          hasScalableSrc: r,
          offset: s,
          targetHeight: h,
          targetWidth: l,
        }) => {
          if ("cover" === e || "contain" === e) {
            let d = a / l,
              c = i / h,
              u = "cover" === e ? Math.max(d, c) : Math.min(d, c),
              [g = "50%", v = "50%"] = t.split(" "),
              p = f({ position: g, relativeNum: a - l * u }),
              w = f({ position: v, relativeNum: i - h * u }),
              E = m({
                containerHeight: h * u,
                containerWidth: l * u,
                hasScalableSrc: r,
                offset: s,
                targetHeight: h,
                targetWidth: l,
              });
            return {
              top: o + w,
              left: n + p,
              width: l * u * E,
              height: h * u * E,
              transform: `translate(0,0) scale(${1 / E})`,
            };
          }
          if ("auto" === e) {
            let [e = "50%", d = "50%"] = t.split(" "),
              c = f({ position: e, relativeNum: a - l }),
              u = f({ position: d, relativeNum: i - h }),
              g = m({
                containerHeight: h,
                containerWidth: l,
                hasScalableSrc: r,
                offset: s,
                targetHeight: h,
                targetWidth: l,
              });
            return {
              top: o + u,
              left: n + c,
              width: l * g,
              height: h * g,
              transform: `translate(0,0) scale(${1 / g})`,
            };
          }
          {
            let [d = "50%", c = "50%"] = e.split(" "),
              u = Math.min(
                f({ position: d, relativeNum: a }) / l,
                f({ position: c, relativeNum: i }) / h
              ),
              [g = "50%", v = "50%"] = t.split(" "),
              p = f({ position: g, relativeNum: a - l * u }),
              w = f({ position: v, relativeNum: i - h * u }),
              E = m({
                containerHeight: h * u,
                containerWidth: l * u,
                hasScalableSrc: r,
                offset: s,
                targetHeight: h,
                targetWidth: l,
              });
            return {
              top: o + w,
              left: n + p,
              width: l * u * E,
              height: h * u * E,
              transform: `translate(0,0) scale(${1 / E})`,
            };
          }
        },
        L = /\.svg$/i,
        b = ({
          hasZoomImg: t,
          imgSrc: e,
          isSvg: i,
          isZoomed: n,
          loadedImgEl: o,
          offset: a,
          shouldRefresh: s,
          targetEl: h,
        }) => {
          let l =
              i ||
              e?.slice?.(0, 18) === "data:image/svg+xml" ||
              t ||
              !!(e && L.test(e)),
            d = h.getBoundingClientRect(),
            c = window.getComputedStyle(h),
            m = null != o && r(h),
            u = Object.assign(
              {},
              p({
                containerHeight: d.height,
                containerLeft: d.left,
                containerTop: d.top,
                containerWidth: d.width,
                hasScalableSrc: l,
                offset: a,
                targetHeight: o?.naturalHeight ?? d.height,
                targetWidth: o?.naturalWidth ?? d.width,
              }),
              null == o || m
                ? void 0
                : w({
                    containerHeight: d.height,
                    containerLeft: d.left,
                    containerTop: d.top,
                    containerWidth: d.width,
                    hasScalableSrc: l,
                    objectFit: c.objectFit,
                    objectPosition: c.objectPosition,
                    offset: a,
                    targetHeight: o.naturalHeight,
                    targetWidth: o.naturalWidth,
                  }),
              m
                ? E({
                    backgroundPosition: c.backgroundPosition,
                    backgroundSize: c.backgroundSize,
                    containerHeight: d.height,
                    containerLeft: d.left,
                    containerTop: d.top,
                    containerWidth: d.width,
                    hasScalableSrc: l,
                    offset: a,
                    targetHeight: o.naturalHeight,
                    targetWidth: o.naturalWidth,
                  })
                : void 0
            );
          if (n) {
            let t = window.innerWidth / 2,
              e = window.innerHeight / 2,
              i =
                parseFloat(String(u.left || 0)) +
                parseFloat(String(u.width || 0)) / 2,
              n =
                parseFloat(String(u.top || 0)) +
                parseFloat(String(u.height || 0)) / 2;
            s && (u.transitionDuration = "0.01ms"),
              (u.transform = `translate(${t - i}px,${e - n}px) scale(1)`);
          }
          return u;
        },
        S = (t) => {
          if (!t) return {};
          if (!l(t))
            return {
              height: t.offsetHeight,
              left: t.offsetLeft,
              width: t.offsetWidth,
              top: t.offsetTop,
            };
          {
            let e = t.parentElement,
              i = t.getBoundingClientRect();
            if (!e)
              return {
                height: i.height,
                left: i.left,
                width: i.width,
                top: i.top,
              };
            {
              let t = e.getBoundingClientRect();
              return {
                height: i.height,
                left: t.left - i.left,
                top: t.top - i.top,
                width: i.width,
              };
            }
          }
        },
        y = (t) => {
          let e = "-zoom",
            i = [
              "clip-path",
              "fill",
              "mask",
              "marker-start",
              "marker-mid",
              "marker-end",
            ],
            n = new Map();
          if (t.hasAttribute("id")) {
            let i = t.id,
              o = i + e;
            n.set(i, o), (t.id = o);
          }
          t.querySelectorAll("[id]").forEach((t) => {
            let i = t.id,
              o = i + e;
            n.set(i, o), (t.id = o);
          }),
            n.forEach((e, n) => {
              let o = `url(#${n})`,
                a = `url(#${e})`,
                r = i.map((t) => `[${t}="${o}"]`).join(", ");
              t.querySelectorAll(r).forEach((t) => {
                i.forEach((e) => {
                  t.getAttribute(e) === o && t.setAttribute(e, a);
                });
              });
            }),
            t.querySelectorAll("style").forEach((t) => {
              n.forEach((e, i) => {
                t.textContent &&
                  (t.textContent = t.textContent.replaceAll(`#${i}`, `#${e}`));
              });
            });
        },
        z = ["img", "svg", '[role="img"]', "[data-zoom]"]
          .map((t) => `${t}:not([aria-hidden="true"])`)
          .join(","),
        I = { overflow: "", width: "" };
      function M(t) {
        return n.createElement(C, { ...t });
      }
      class C extends n.Component {
        constructor() {
          super(...arguments),
            (this.state = {
              id: "",
              isZoomImgLoaded: !1,
              loadedImgEl: void 0,
              modalState: "UNLOADED",
              shouldRefresh: !1,
            }),
            (this.refContent = n.createRef()),
            (this.refDialog = n.createRef()),
            (this.refModalContent = n.createRef()),
            (this.refModalImg = n.createRef()),
            (this.refWrap = n.createRef()),
            (this.imgEl = null),
            (this.isScaling = !1),
            (this.prevBodyAttrs = I),
            (this.styleModalImg = {}),
            (this.getDialogContainer = () => {
              let t = document.querySelector("[data-rmiz-portal]");
              return (
                null == t &&
                  ((t = document.createElement("div")).setAttribute(
                    "data-rmiz-portal",
                    ""
                  ),
                  document.body.appendChild(t)),
                t
              );
            }),
            (this.setId = () => {
              let t = () => Math.random().toString(16).slice(-4);
              this.setState({ id: t() + t() + t() });
            }),
            (this.setAndTrackImg = () => {
              let t = this.refContent.current;
              t &&
                ((this.imgEl = t.querySelector(z)),
                this.imgEl
                  ? (this.changeObserver?.disconnect?.(),
                    this.imgEl?.addEventListener?.("load", this.handleImgLoad),
                    this.imgEl?.addEventListener?.("click", this.handleZoom),
                    this.state.loadedImgEl || this.handleImgLoad(),
                    (this.imgElObserver = new ResizeObserver((t) => {
                      let e = t[0];
                      e?.target && ((this.imgEl = e.target), this.setState({}));
                    })),
                    this.imgElObserver.observe(this.imgEl))
                  : this.changeObserver ||
                    ((this.changeObserver = new MutationObserver(
                      this.setAndTrackImg
                    )),
                    this.changeObserver.observe(t, {
                      childList: !0,
                      subtree: !0,
                    })));
            }),
            (this.handleIfZoomChanged = (t) => {
              let { isZoomed: e } = this.props;
              !t && e ? this.zoom() : t && !e && this.unzoom();
            }),
            (this.handleImgLoad = () => {
              let { imgEl: t } = this,
                e = g(t);
              if (!e) return;
              let i = new Image();
              s(t) && ((i.sizes = t.sizes), (i.srcset = t.srcset)), (i.src = e);
              let n = () => {
                this.setState({ loadedImgEl: i });
              };
              i.decode()
                .then(n)
                .catch(() => {
                  if (h(i)) {
                    n();
                    return;
                  }
                  i.onload = n;
                });
            }),
            (this.handleZoom = () => {
              this.hasImage() && this.props.onZoomChange?.(!0);
            }),
            (this.handleUnzoom = () => {
              this.props.onZoomChange?.(!1);
            }),
            (this.handleDialogCancel = (t) => {
              t.preventDefault();
            }),
            (this.handleDialogClick = (t) => {
              (t.target === this.refModalContent.current ||
                t.target === this.refModalImg.current) &&
                this.handleUnzoom();
            }),
            (this.handleKeyDown = (t) => {
              ("Escape" === t.key || 27 === t.keyCode) &&
                (t.preventDefault(), t.stopPropagation(), this.handleUnzoom());
            }),
            (this.handleWheel = (t) => {
              t.ctrlKey ||
                (t.stopPropagation(),
                queueMicrotask(() => {
                  this.handleUnzoom();
                }));
            }),
            (this.handleTouchStart = (t) => {
              if (t.touches.length > 1) {
                this.isScaling = !0;
                return;
              }
              1 === t.changedTouches.length &&
                t.changedTouches[0] &&
                (this.touchYStart = t.changedTouches[0].screenY);
            }),
            (this.handleTouchMove = (t) => {
              let e = window.visualViewport?.scale ?? 1;
              this.props.canSwipeToUnzoom &&
                !this.isScaling &&
                e <= 1 &&
                null != this.touchYStart &&
                t.changedTouches[0] &&
                ((this.touchYEnd = t.changedTouches[0].screenY),
                Math.abs(
                  Math.max(this.touchYStart, this.touchYEnd) -
                    Math.min(this.touchYStart, this.touchYEnd)
                ) > this.props.swipeToUnzoomThreshold &&
                  ((this.touchYStart = void 0),
                  (this.touchYEnd = void 0),
                  this.handleUnzoom()));
            }),
            (this.handleTouchEnd = () => {
              (this.isScaling = !1),
                (this.touchYStart = void 0),
                (this.touchYEnd = void 0);
            }),
            (this.handleTouchCancel = () => {
              (this.isScaling = !1),
                (this.touchYStart = void 0),
                (this.touchYEnd = void 0);
            }),
            (this.handleResize = () => {
              this.setState({ shouldRefresh: !0 });
            }),
            (this.hasImage = () =>
              this.imgEl &&
              (this.state.loadedImgEl || l(this.imgEl)) &&
              "none" !== window.getComputedStyle(this.imgEl).display),
            (this.zoom = () => {
              this.bodyScrollDisable(),
                this.refDialog.current?.showModal?.(),
                this.setState({ modalState: "LOADING" }),
                this.loadZoomImg(),
                window.addEventListener("wheel", this.handleWheel, {
                  passive: !0,
                }),
                window.addEventListener("touchstart", this.handleTouchStart, {
                  passive: !0,
                }),
                window.addEventListener("touchmove", this.handleTouchMove, {
                  passive: !0,
                }),
                window.addEventListener("touchend", this.handleTouchEnd, {
                  passive: !0,
                }),
                window.addEventListener("touchcancel", this.handleTouchCancel, {
                  passive: !0,
                }),
                document.addEventListener("keydown", this.handleKeyDown, !0),
                this.refModalImg.current?.addEventListener?.(
                  "transitionend",
                  this.handleZoomEnd,
                  { once: !0 }
                );
            }),
            (this.handleZoomEnd = () => {
              setTimeout(() => {
                this.setState({ modalState: "LOADED" }),
                  window.addEventListener("resize", this.handleResize, {
                    passive: !0,
                  });
              }, 0);
            }),
            (this.unzoom = () => {
              this.setState({ modalState: "UNLOADING" }),
                window.removeEventListener("wheel", this.handleWheel),
                window.removeEventListener("touchstart", this.handleTouchStart),
                window.removeEventListener("touchmove", this.handleTouchMove),
                window.removeEventListener("touchend", this.handleTouchEnd),
                window.removeEventListener(
                  "touchcancel",
                  this.handleTouchCancel
                ),
                document.removeEventListener("keydown", this.handleKeyDown, !0),
                this.refModalImg.current?.addEventListener?.(
                  "transitionend",
                  this.handleUnzoomEnd,
                  { once: !0 }
                );
            }),
            (this.handleUnzoomEnd = () => {
              setTimeout(() => {
                window.removeEventListener("resize", this.handleResize),
                  this.setState({ shouldRefresh: !1, modalState: "UNLOADED" }),
                  this.refDialog.current?.close?.(),
                  this.bodyScrollEnable();
              }, 0);
            }),
            (this.bodyScrollDisable = () => {
              this.prevBodyAttrs = {
                overflow: document.body.style.overflow,
                width: document.body.style.width,
              };
              let t = document.body.clientWidth;
              (document.body.style.overflow = "hidden"),
                (document.body.style.width = `${t}px`);
            }),
            (this.bodyScrollEnable = () => {
              (document.body.style.width = this.prevBodyAttrs.width),
                (document.body.style.overflow = this.prevBodyAttrs.overflow),
                (this.prevBodyAttrs = I);
            }),
            (this.loadZoomImg = () => {
              let {
                  props: { zoomImg: t },
                } = this,
                e = t?.src;
              if (e) {
                let i = new Image();
                (i.sizes = t?.sizes ?? ""),
                  (i.srcset = t?.srcSet ?? ""),
                  (i.src = e);
                let n = () => {
                  this.setState({ isZoomImgLoaded: !0 });
                };
                i.decode()
                  .then(n)
                  .catch(() => {
                    if (h(i)) {
                      n();
                      return;
                    }
                    i.onload = n;
                  });
              }
            }),
            (this.UNSAFE_handleSvg = () => {
              let { imgEl: t, refModalImg: e, styleModalImg: i } = this;
              if (l(t)) {
                let n = t.cloneNode(!0);
                y(n),
                  (n.style.width = `${i.width || 0}px`),
                  (n.style.height = `${i.height || 0}px`),
                  n.addEventListener("click", this.handleUnzoom),
                  e.current?.firstChild?.remove?.(),
                  e.current?.appendChild?.(n);
              }
            });
        }
        render() {
          let {
              handleDialogCancel: t,
              handleDialogClick: e,
              handleUnzoom: i,
              handleZoom: a,
              imgEl: h,
              props: {
                a11yNameButtonUnzoom: d,
                a11yNameButtonZoom: c,
                children: m,
                classDialog: u,
                IconUnzoom: p,
                IconZoom: f,
                isZoomed: w,
                wrapElement: E,
                ZoomContent: L,
                zoomImg: y,
                zoomMargin: z,
              },
              refContent: I,
              refDialog: M,
              refModalContent: C,
              refModalImg: D,
              refWrap: T,
              state: {
                id: A,
                isZoomImgLoaded: N,
                loadedImgEl: k,
                modalState: U,
                shouldRefresh: W,
              },
            } = this,
            Z = `rmiz-modal-${A}`,
            $ = `rmiz-modal-img-${A}`,
            O = r(h),
            x = s(h),
            H = l(h),
            R = v(h),
            Y = g(h),
            B = x ? h.sizes : void 0,
            F = x ? h.srcset : void 0,
            P = !!y?.src,
            j = this.hasImage(),
            _ = R ? `${c}: ${R}` : c,
            q = "LOADING" === U || "LOADED" === U,
            G = j ? "found" : "not-found",
            K = "UNLOADED" === U || "UNLOADING" === U ? "hidden" : "visible",
            V = S(h);
          this.styleModalImg = j
            ? b({
                hasZoomImg: P,
                imgSrc: Y,
                isSvg: H,
                isZoomed: w && q,
                loadedImgEl: k,
                offset: z,
                shouldRefresh: W,
                targetEl: h,
              })
            : {};
          let J = null;
          if (j) {
            let t =
                x || O
                  ? n.createElement("img", {
                      alt: R,
                      sizes: B,
                      src: Y,
                      srcSet: F,
                      ...(N && "LOADED" === U ? y : {}),
                      "data-rmiz-modal-img": "",
                      height: this.styleModalImg.height || void 0,
                      id: $,
                      ref: D,
                      style: this.styleModalImg,
                      width: this.styleModalImg.width || void 0,
                    })
                  : H
                  ? n.createElement("div", {
                      "data-rmiz-modal-img": !0,
                      ref: D,
                      style: this.styleModalImg,
                    })
                  : null,
              e = n.createElement(
                "button",
                {
                  "aria-label": d,
                  "data-rmiz-btn-unzoom": "",
                  onClick: i,
                  type: "button",
                },
                n.createElement(p, null)
              );
            J = L
              ? n.createElement(L, {
                  buttonUnzoom: e,
                  modalState: U,
                  img: t,
                  onUnzoom: i,
                })
              : n.createElement(n.Fragment, null, t, e);
          }
          return n.createElement(
            E,
            { "aria-owns": Z, "data-rmiz": "", ref: T },
            n.createElement(
              E,
              {
                "data-rmiz-content": G,
                ref: I,
                style: { visibility: "UNLOADED" === U ? "visible" : "hidden" },
              },
              m
            ),
            j &&
              n.createElement(
                E,
                { "data-rmiz-ghost": "", style: V },
                n.createElement(
                  "button",
                  {
                    "aria-label": _,
                    "data-rmiz-btn-zoom": "",
                    onClick: a,
                    type: "button",
                  },
                  n.createElement(f, null)
                )
              ),
            j &&
              o.createPortal(
                n.createElement(
                  "dialog",
                  {
                    "aria-labelledby": $,
                    "aria-modal": "true",
                    className: u,
                    "data-rmiz-modal": "",
                    id: Z,
                    onClick: e,
                    onClose: i,
                    onCancel: t,
                    ref: M,
                    role: "dialog",
                  },
                  n.createElement("div", { "data-rmiz-modal-overlay": K }),
                  n.createElement(
                    "div",
                    { "data-rmiz-modal-content": "", ref: C },
                    J
                  )
                ),
                this.getDialogContainer()
              )
          );
        }
        componentDidMount() {
          this.setId(),
            this.setAndTrackImg(),
            this.handleImgLoad(),
            this.UNSAFE_handleSvg();
        }
        componentWillUnmount() {
          "UNLOADED" !== this.state.modalState && this.bodyScrollEnable(),
            this.changeObserver?.disconnect?.(),
            this.imgElObserver?.disconnect?.(),
            this.imgEl?.removeEventListener?.("load", this.handleImgLoad),
            this.imgEl?.removeEventListener?.("click", this.handleZoom),
            this.refModalImg.current?.removeEventListener?.(
              "transitionend",
              this.handleZoomEnd
            ),
            this.refModalImg.current?.removeEventListener?.(
              "transitionend",
              this.handleUnzoomEnd
            ),
            window.removeEventListener("wheel", this.handleWheel),
            window.removeEventListener("touchstart", this.handleTouchStart),
            window.removeEventListener("touchmove", this.handleTouchMove),
            window.removeEventListener("touchend", this.handleTouchEnd),
            window.removeEventListener("touchcancel", this.handleTouchCancel),
            window.removeEventListener("resize", this.handleResize),
            document.removeEventListener("keydown", this.handleKeyDown, !0);
        }
        componentDidUpdate(t) {
          this.UNSAFE_handleSvg(), this.handleIfZoomChanged(t.isZoomed);
        }
      }
      function D(t) {
        let [e, i] = n.useState(!1);
        return n.createElement(M, { ...t, isZoomed: e, onZoomChange: i });
      }
      C.defaultProps = {
        a11yNameButtonUnzoom: "Minimize image",
        a11yNameButtonZoom: "Expand image",
        canSwipeToUnzoom: !0,
        IconUnzoom: function () {
          return n.createElement(
            "svg",
            {
              "aria-hidden": "true",
              "data-rmiz-btn-unzoom-icon": !0,
              fill: "currentColor",
              focusable: "false",
              viewBox: "0 0 16 16",
              xmlns: "http://www.w3.org/2000/svg",
            },
            n.createElement("path", {
              d: "M 14.144531 1.148438 L 9 6.292969 L 9 3 L 8 3 L 8 8 L 13 8 L 13 7 L 9.707031 7 L 14.855469 1.851563 Z M 8 8 L 3 8 L 3 9 L 6.292969 9 L 1.148438 14.144531 L 1.851563 14.855469 L 7 9.707031 L 7 13 L 8 13 Z",
            })
          );
        },
        IconZoom: function () {
          return n.createElement(
            "svg",
            {
              "aria-hidden": "true",
              "data-rmiz-btn-zoom-icon": !0,
              fill: "currentColor",
              focusable: "false",
              viewBox: "0 0 16 16",
              xmlns: "http://www.w3.org/2000/svg",
            },
            n.createElement("path", {
              d: "M 9 1 L 9 2 L 12.292969 2 L 2 12.292969 L 2 9 L 1 9 L 1 14 L 6 14 L 6 13 L 2.707031 13 L 13 2.707031 L 13 6 L 14 6 L 14 1 Z",
            })
          );
        },
        swipeToUnzoomThreshold: 10,
        wrapElement: "div",
        zoomMargin: 0,
      };
    },
  },
]);
