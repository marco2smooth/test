(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7639, 7042],
  {
    99405: function (e, i, l) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/company",
        function () {
          return l(52833);
        },
      ]);
    },
    57042: function (e, i, l) {
      "use strict";
      l.r(i);
      var t = l(52322),
        a = l(39097),
        n = l.n(a),
        s = l(44382),
        r = l(29982);
      i.default = (e) => {
        let { darkerBg: i, className: l } = e;
        return (0, t.jsxs)("div", {
          className: (0, s.cn)(
            "bg-background grid grid-cols-12 items-center gap-4 border-t py-32 text-center px-16",
            i && "bg-alternative",
            l
          ),
          children: [
            (0, t.jsx)("div", {
              className: "col-span-12",
              children: (0, t.jsxs)("h2", {
                className: "h2",
                children: [
                  (0, t.jsx)("span", {
                    className: "text-foreground-lighter",
                    children: "Build in a weekend,",
                  }),
                  (0, t.jsx)("span", {
                    className: "text-foreground block sm:inline",
                    children: " scale to millions",
                  }),
                ],
              }),
            }),
            (0, t.jsxs)("div", {
              className:
                "flex items-center justify-center gap-2 col-span-12 mt-4",
              children: [
                (0, t.jsx)(r.z, {
                  asChild: !0,
                  size: "medium",
                  children: (0, t.jsx)(n(), {
                    href: "https://supabase.com/dashboard",
                    children: "Start your project",
                  }),
                }),
                (0, t.jsx)(r.z, {
                  asChild: !0,
                  size: "medium",
                  type: "default",
                  children: (0, t.jsx)(n(), {
                    href: "/contact/sales",
                    children: "Request a demossss",
                  }),
                }),
              ],
            }),
          ],
        });
      };
    },
    99678: function (e, i, l) {
      "use strict";
      var t = l(52322),
        a = l(96577),
        n = l.n(a),
        s = l(39097),
        r = l.n(s),
        o = l(5126),
        d = l(44382);
      i.Z = (e) => {
        let {
            images: i,
            smCols: l = 3,
            mdCols: a = 6,
            lgCols: s = 8,
            padding: c = 8,
            className: m,
            animated: g = !1,
            removeFilter: u = !1,
            bg: p = !0,
          } = e,
          h = { 6: "h-6 ", 8: "h-8 ", 12: "h-12 " };
        return (0, t.jsx)("div", {
          className:
            "grid \n      gap-0.5 rounded-lg overflow-hidden\n      items-center\n    	"
              .concat(
                {
                  2: "grid-cols-2",
                  3: "grid-cols-3",
                  4: "grid-cols-4",
                  5: "grid-cols-5",
                  6: "grid-cols-6",
                  8: "grid-cols-8",
                }[l],
                "\n      "
              )
              .concat(
                {
                  2: "md:grid-cols-2",
                  3: "md:grid-cols-3",
                  4: "md:grid-cols-4",
                  5: "md:grid-cols-5",
                  6: "md:grid-cols-6",
                  8: "md:grid-cols-8",
                }[a],
                "\n      "
              )
              .concat(
                {
                  2: "lg:grid-cols-2",
                  3: "lg:grid-cols-3",
                  4: "lg:grid-cols-4",
                  5: "lg:grid-cols-5",
                  6: "lg:grid-cols-6",
                  8: "lg:grid-cols-8",
                }[s],
                "\n    "
              ),
          children: i.map((e, i) =>
            (0, t.jsx)(
              (i) => {
                let { children: l, link: a } = i;
                return e.link
                  ? (0, t.jsx)(r(), {
                      href: a,
                      children: (0, t.jsx)("div", {
                        className:
                          "scale-100 transform cursor-pointer duration-100 ease-in-out hover:shadow-sm",
                        children: l,
                      }),
                    })
                  : l;
              },
              {
                link: e.link,
                children: (0, t.jsx)(
                  (e) => {
                    let { children: l, ...a } = e;
                    return g
                      ? (0, t.jsx)(o.E.div, {
                          initial: { opacity: 0, y: 20 },
                          animate: {
                            opacity: 1,
                            y: 0,
                            transition: { delay: i / 10 },
                          },
                          ...a,
                          children: l,
                        })
                      : (0, t.jsx)("div", { ...a, children: l });
                  },
                  {
                    className: (0, d.cn)(
                      p && "bg-surface-200",
                      "w-full",
                      "col-span-1 flex items-center justify-center \n                  "
                        .concat(
                          e.link && "hover:bg-overlay-hover",
                          "\n                  p-8 "
                        )
                        .concat(m)
                    ),
                    children: (0, t.jsx)("div", {
                      className: "relative h-8 w-full overflow-auto ".concat(
                        h[c]
                      ),
                      children: (0, t.jsx)(n(), {
                        src: e.image,
                        alt: "".concat(e.name, " logo"),
                        fill: !0,
                        sizes: "100%",
                        className: (0, d.cn)(
                          "object-scale-down object-center bg-no-repeat",
                          !u && "contrast-0 filter opacity-50"
                        ),
                      }),
                    }),
                  },
                  "".concat(e.name, "-").concat(i)
                ),
              },
              i
            )
          ),
        });
      };
    },
    29455: function (e, i, l) {
      "use strict";
      var t = l(52322);
      i.Z = (e) =>
        (0, t.jsxs)("div", {
          className: e.className,
          children: [
            (0, t.jsxs)("div", {
              className: "space-y-4",
              children: [
                (0, t.jsx)("span", {
                  className:
                    "text-foreground-lighter block font-mono text-xs uppercase tracking-widest",
                  children: e.subtitle,
                }),
                (0, t.jsxs)("h3", {
                  className: "h2 lg:max-w-md",
                  children: [
                    (0, t.jsx)("span", { children: e.title }),
                    e.title_alt &&
                      (0, t.jsx)("span", {
                        className: "text-foreground-light inline",
                        children: e.title_alt,
                      }),
                  ],
                }),
              ],
            }),
            e.paragraph &&
              (0, t.jsx)("p", {
                className: "text-foreground-lighter max-w-3xl text-lg sm:mt-4",
                children: e.paragraph,
              }),
          ],
        });
    },
    52833: function (e, i, l) {
      "use strict";
      l.r(i),
        l.d(i, {
          default: function () {
            return S;
          },
        });
      var t = l(52322),
        a = l(5632),
        n = l(27478),
        s = l(29455),
        r = l(57042),
        o = l(99678),
        d = l(37637),
        c = [
          {
            type: "article",
            href: "https://techcrunch.com/2022/05/10/supabase-raises-80m-series-b-for-its-open-source-firebase-alternative/",
            title:
              "Supabase raises $80M Series B for its open source Firebase alternative",
            publisher: "TechCrunch",
          },
          {
            type: "article",
            href: "https://www.prnewswire.com/news-releases/supabase-announces-80-million-series-b-led-by-felicis-301544453.html",
            title: "Supabase Announces $80 Million Series B Led by Felicis",
            publisher: "PR Newswire",
          },
          {
            type: "article",
            href: "https://medium.com/lightspeedindia/our-investment-in-supabase-2f443ff55aad",
            title: "Our investment in Supabase",
            publisher: "Medium",
          },
          {
            type: "podcast",
            href: "https://podcasts.apple.com/us/podcast/73-elixir-at-supabase-with-paul-copplestone/id1516100616?i=1000542087899",
            title: "Elixir at Supabase with Paul Copplestone",
            publisher: "Thinking Elixir Podcast",
          },
          {
            type: "podcast",
            href: "https://podcasts.apple.com/us/podcast/73-elixir-at-supabase-with-paul-copplestone/id1516100616?i=1000542087899",
            title: "Ant Wilson on Supabase ",
            publisher: "Software Engineering Radio",
          },
          {
            type: "podcast",
            href: "https://podcasts.apple.com/us/podcast/78-logflare-with-chase-granberry/id1516100616?i=1000545628124",
            title: "Logflare with Chase Granberry",
            publisher: "Thinking Elixir Podcast",
          },
          {
            type: "podcast",
            href: "https://stackoverflow.blog/2022/05/17/open-source-is-winning-over-developers-and-investors-ep-442/",
            title: "Open-source is winning over developers and investors",
            publisher: "Stackoverflow",
          },
          {
            type: "podcast",
            href: "https://changelog.com/podcast/476",
            title: "Supabase is all in on Postgres",
            publisher: "changelog",
          },
          {
            type: "podcast",
            href: "https://fsjam.org/episodes/episode-33-supabase-with-paul-copplestone",
            title: "Supabase with Paul Copplestone",
            publisher: "FS Jam",
          },
          {
            type: "podcast",
            href: "https://www.heavybit.com/library/podcasts/jamstack-radio/ep-71-open-source-firebase-alternative-with-paul-copplestone-of-supabase/",
            title:
              "Open Source Firebase Alternative with Paul Copplestone of Supabase",
            publisher: "Jamstack",
          },
          {
            type: "podcast",
            href: "https://podrocket.logrocket.com/9",
            title: "Supabase with Paul Copplestone",
            publisher: "Podrocket",
          },
        ],
        m = [
          {
            title: "Vercel",
            img: "https://tailwindui.com/img/logos/mirage-logo-gray-400.svg",
          },
          {
            title: "Netlify",
            img: "https://tailwindui.com/img/logos/mirage-logo-gray-400.svg",
          },
          {
            title: "Vercel",
            img: "https://tailwindui.com/img/logos/mirage-logo-gray-400.svg",
          },
          {
            title: "Netlify",
            img: "https://tailwindui.com/img/logos/mirage-logo-gray-400.svg",
          },
          {
            title: "Vercel",
            img: "https://tailwindui.com/img/logos/mirage-logo-gray-400.svg",
          },
          {
            title: "Netlify",
            img: "https://tailwindui.com/img/logos/mirage-logo-gray-400.svg",
          },
          {
            title: "Vercel",
            img: "https://tailwindui.com/img/logos/mirage-logo-gray-400.svg",
          },
          {
            title: "Netlify",
            img: "https://tailwindui.com/img/logos/mirage-logo-gray-400.svg",
          },
          {
            title: "Vercel",
            img: "https://tailwindui.com/img/logos/mirage-logo-gray-400.svg",
          },
          {
            title: "Netlify",
            img: "https://tailwindui.com/img/logos/mirage-logo-gray-400.svg",
          },
          {
            title: "Vercel",
            img: "https://tailwindui.com/img/logos/mirage-logo-gray-400.svg",
          },
          {
            title: "Netlify",
            img: "https://tailwindui.com/img/logos/mirage-logo-gray-400.svg",
          },
        ],
        g = [
          {
            title: "Developers",
            stat: "450,000+",
            statLabel: "Registered developers",
            img: "supabase.png",
            detail: () =>
              (0, t.jsx)("div", {
                className:
                  "mx-auto mt-5 grid max-w-lg gap-0 overflow-hidden rounded-lg border border-dashed text-center sm:grid-cols-3 lg:max-w-none lg:grid-cols-4 ",
                children: m.map((e) =>
                  (0, t.jsx)(
                    "div",
                    {
                      className:
                        "col-span-1 flex justify-center border border-dashed py-8 px-8",
                      children: (0, t.jsx)(
                        "img",
                        { className: "max-h-12", src: e.img, alt: e.title },
                        e.title
                      ),
                    },
                    e.title
                  )
                ),
              }),
          },
          {
            title: "GitHub",
            stat: "58,000+",
            statLabel: "GitHub stars",
            img: "github.png",
            invertImgDarkMode: !0,
            detail: () =>
              (0, t.jsx)("div", {
                children: (0, t.jsx)("p", { children: "Some growth chart?" }),
              }),
          },
          {
            title: "Twitter",
            stat: "100,000+",
            statLabel: "Followers",
            img: "twitter.png",
            detail: () =>
              (0, t.jsx)("div", {
                children: (0, t.jsx)("p", {
                  children: "Some twitter callouts",
                }),
              }),
          },
          {
            title: "Discord",
            stat: "17,000+",
            statLabel: "SupaTroopers",
            img: "discord.png",
            detail: () =>
              (0, t.jsx)("div", {
                children: (0, t.jsx)("p", { children: "Something great" }),
              }),
          },
        ],
        u = [
          {
            name: "wells-fargo",
            image: "/images/company/companies-using-supabase/wells-fargo.png",
          },
          {
            name: "under-armour",
            image: "/images/company/companies-using-supabase/under-armour.png",
          },
          {
            name: "audi-logo",
            image: "/images/company/companies-using-supabase/audi-logo.png",
          },
          {
            name: "capitalone",
            image: "/images/company/companies-using-supabase/capitalone.png",
          },
          {
            name: "coinbase",
            image: "/images/company/companies-using-supabase/coinbase.png",
          },
          {
            name: "facebook",
            image: "/images/company/companies-using-supabase/facebook.png",
          },
          {
            name: "github",
            image: "/images/company/companies-using-supabase/github.png",
          },
          {
            name: "google",
            image: "/images/company/companies-using-supabase/google.png",
          },
          {
            name: "gsk",
            image: "/images/company/companies-using-supabase/gsk.png",
          },
          {
            name: "hewlett-packard",
            image:
              "/images/company/companies-using-supabase/hewlett-packard.png",
          },
          {
            name: "hubspot",
            image: "/images/company/companies-using-supabase/hubspot.png",
          },
          {
            name: "ibm",
            image: "/images/company/companies-using-supabase/ibm.png",
          },
          {
            name: "instagram",
            image: "/images/company/companies-using-supabase/instagram.png",
          },
          {
            name: "linkedin",
            image: "/images/company/companies-using-supabase/linkedin.png",
          },
          {
            name: "microsoft",
            image: "/images/company/companies-using-supabase/microsoft.png",
          },
          {
            name: "netflix",
            image: "/images/company/companies-using-supabase/netflix.png",
          },
          {
            name: "notion",
            image: "/images/company/companies-using-supabase/notion.png",
          },
          {
            name: "red-hat",
            image: "/images/company/companies-using-supabase/red-hat.png",
          },
          {
            name: "robinhood",
            image: "/images/company/companies-using-supabase/robinhood.png",
          },
          {
            name: "salesforce",
            image: "/images/company/companies-using-supabase/salesforce.png",
          },
          {
            name: "santander",
            image: "/images/company/companies-using-supabase/santander.png",
          },
          {
            name: "shopify",
            image: "/images/company/companies-using-supabase/shopify.png",
          },
          {
            name: "squarespace",
            image: "/images/company/companies-using-supabase/squarespace.png",
          },
          {
            name: "twitter",
            image: "/images/company/companies-using-supabase/twitter.png",
          },
        ],
        p = [
          {
            name: "Coatue",
            round: "SEED",
            title: "Coatue Growth Fund",
            img: "/images/logos/coatue.png",
            lead: !0,
            twitter: null,
            linkedIn: null,
          },
          {
            name: "Mozilla",
            round: "SEED",
            title: "Mozilla",
            img: "/images/logos/mozilla--grey.png",
            lead: !0,
            twitter: null,
            linkedIn: null,
          },
          {
            name: "Y Combinator",
            round: "A",
            title: "Y Combinator",
            img: "/images/logos/yc--grey.png",
            lead: !0,
            twitter: null,
            linkedIn: null,
          },
          {
            name: "Felicis",
            round: "B",
            title: "Felicis",
            img: "/images/logos/felicis.png",
            lead: !0,
            twitter: null,
            linkedIn: null,
          },
          {
            name: "Tom Preston-Werner",
            round: "A",
            title: "GitHub Cofounder",
            img: "",
            lead: !1,
            twitter: null,
            linkedIn: null,
          },
          {
            name: "Solomon Hykes",
            round: "A",
            title: "Docker Cofounder",
            img: "",
            lead: !1,
            twitter: null,
            linkedIn: null,
          },
          {
            name: "Guillermo Rauch",
            round: "A",
            title: "Vercel Founder",
            img: "",
            lead: !1,
            twitter: null,
            linkedIn: null,
          },
          {
            name: "Alex Solomon",
            round: "A",
            title: "PagerDuty Cofounder",
            img: "",
            lead: !1,
            twitter: null,
            linkedIn: null,
          },
          {
            name: "Kurt Mackey",
            round: "A",
            title: "Fly Founder",
            img: "",
            lead: !1,
            twitter: null,
            linkedIn: null,
          },
          {
            name: "Alana Anderson",
            round: "A",
            title: "Base Case Capital",
            img: "",
            lead: !1,
            twitter: null,
            linkedIn: null,
          },
          {
            name: "Lee Robinson",
            round: "A",
            title: "Vercel DevRel",
            img: "",
            lead: !1,
            twitter: null,
            linkedIn: null,
          },
          {
            name: "Kevin van Gundy",
            round: "A",
            title: "Vercel CRO",
            img: "",
            lead: !1,
            twitter: null,
            linkedIn: null,
          },
          {
            name: "Pedro Canahuati",
            round: "A",
            title: "1Password CTO, Ex-Facebook",
            img: "",
            lead: !1,
            twitter: null,
            linkedIn: null,
          },
          {
            name: "Tyler McGinnis",
            round: "A",
            title: "UI.dev Cofounder",
            img: "",
            lead: !1,
            twitter: null,
            linkedIn: null,
          },
          {
            name: "Piruze Sabuncu",
            round: "A",
            title: "Stripe",
            img: "",
            lead: !1,
            twitter: null,
            linkedIn: null,
          },
          {
            name: "Astasia Myers",
            round: "A",
            title: "Quiet Capital",
            img: "",
            lead: !1,
            twitter: null,
            linkedIn: null,
          },
          {
            name: "Chris Nguyen",
            round: "A",
            title: "LogDNA Founder",
            img: "",
            lead: !1,
            twitter: null,
            linkedIn: null,
          },
          {
            name: "Tod Sacerdoti",
            round: "A",
            title: "Pipedream Founder",
            img: "",
            lead: !1,
            twitter: null,
            linkedIn: null,
          },
          {
            name: "Harold Gim\xe9nez",
            round: "A",
            title: "HashiCorp - VP Eng",
            img: "",
            lead: !1,
            twitter: null,
            linkedIn: null,
          },
          {
            name: "Mike Krieger",
            round: "SEED",
            title: "Instagram Cofounder",
            img: "",
            lead: !1,
            twitter: null,
            linkedIn: null,
          },
          {
            name: "Cassidy Williams",
            round: "SEED",
            title: "Netlify DevRel",
            img: "",
            lead: !1,
            twitter: null,
            linkedIn: null,
          },
          {
            name: "Mathias Biilmann Christensen",
            round: "SEED",
            title: "Netlify Cofounder",
            img: "",
            lead: !1,
            twitter: null,
            linkedIn: null,
          },
          {
            name: "Christian Bach",
            round: "SEED",
            title: "Netlify Cofounder",
            img: "",
            lead: !1,
            twitter: null,
            linkedIn: null,
          },
          {
            name: "Chris Golda",
            round: "SEED",
            title: "Rogue Capital",
            img: "",
            lead: !1,
            twitter: null,
            linkedIn: null,
          },
          {
            name: "Ben Tossell",
            round: "SEED",
            title: "Makerpad Founder",
            img: "",
            lead: !1,
            twitter: null,
            linkedIn: null,
          },
          {
            name: "Jason Warner",
            round: "SEED",
            title: "GitHub CTO",
            img: "",
            lead: !1,
            twitter: null,
            linkedIn: null,
          },
          {
            name: "Shawn Wang",
            round: "SEED",
            title: "Temporal DevRel",
            img: "",
            lead: !1,
            twitter: null,
            linkedIn: null,
          },
          {
            name: "Brian Douglas",
            round: "SEED",
            title: "GitHub DevRel",
            img: "",
            lead: !1,
            twitter: null,
            linkedIn: null,
          },
          {
            name: "Thorsten Schaeff",
            round: "SEED",
            title: "Stripe DevRel",
            img: "",
            lead: !1,
            twitter: null,
            linkedIn: null,
          },
          {
            name: "Justin Gage",
            round: "SEED",
            title: "Retool DevRel",
            img: "",
            lead: !1,
            twitter: null,
            linkedIn: null,
          },
          {
            name: "Zach Waterfield",
            round: "SEED",
            title: "On Deck",
            img: "",
            lead: !1,
            twitter: null,
            linkedIn: null,
          },
          {
            name: "Yuri Sagalov",
            round: "SEED",
            title: "Wayfinder Ventures",
            img: "",
            lead: !1,
            twitter: null,
            linkedIn: null,
          },
          {
            name: "Jeff Morris Jr.",
            round: "SEED",
            title: "Chapter One",
            img: "",
            lead: !1,
            twitter: null,
            linkedIn: null,
          },
          {
            name: "Todd and Rahul Angel Fund",
            round: "SEED",
            title: "Todd and Rahul Angel Fund",
            img: "",
            lead: !1,
            twitter: null,
            linkedIn: null,
          },
          {
            name: "Ram Parami",
            round: "A",
            title: "Customer Strategy at Blend",
            img: "",
            lead: !1,
            twitter: null,
            linkedIn: null,
          },
          {
            name: "Elad Gill",
            round: "A",
            title: "Investor",
            img: "",
            lead: !1,
            twitter: null,
            linkedIn: null,
          },
          {
            name: "Brianne Kimmel",
            round: "SEED",
            title: "Worklife VC",
            img: "",
            lead: !1,
            twitter: null,
            linkedIn: null,
          },
          {
            name: "Aron Korenblit",
            round: "A",
            title: "Education at Airtable",
            img: "",
            lead: !1,
            twitter: null,
            linkedIn: null,
          },
          {
            name: "Ankit Jain",
            round: "A",
            title: "Infinitus Founder",
            img: "",
            lead: !1,
            twitter: null,
            linkedIn: null,
          },
        ],
        h = l(96577),
        x = l.n(h),
        f = l(39097),
        b = l.n(f),
        j = l(29982);
      l(2784);
      var y = l(1903);
      function w(e) {
        let { children: i, className: l, tag: a = "div", style: n } = e;
        return (0, t.jsx)("".concat(a), { style: n, children: i });
      }
      function v(e) {
        let {
            children: i,
            className: l,
            cover: a,
            hoverable: n,
            style: s,
            title: r,
            titleExtra: o,
          } = e,
          d = (0, y.Z)("card"),
          c = [d.base];
        return (
          n && c.push(d.hoverable),
          l && c.push(l),
          (0, t.jsxs)("div", {
            className: c.join(" "),
            style: s,
            children: [
              r &&
                (0, t.jsxs)("div", {
                  className: d.head,
                  children: [
                    (0, t.jsx)(w.Text, { style: { margin: 0 }, children: r }),
                    (0, t.jsx)(w.Link, { style: { margin: 0 }, children: o }),
                  ],
                }),
              a,
              (0, t.jsx)("div", { className: d.content, children: i }),
            ],
          })
        );
      }
      (w.Title = function (e) {
        let { className: i, level: l = 1, children: a, style: n } = e;
        return (0, t.jsx)("h".concat(l), { style: n, children: a });
      }),
        (w.Text = function (e) {
          let {
            className: i,
            children: l,
            style: a,
            type: n,
            disabled: s,
            mark: r,
            code: o,
            keyboard: d,
            underline: c,
            strikethrough: m,
            strong: g,
            small: u,
          } = e;
          return o
            ? (0, t.jsx)("code", { style: a, children: l })
            : r
            ? (0, t.jsx)("mark", { style: a, children: l })
            : d
            ? (0, t.jsx)("kbd", { style: a, children: l })
            : g
            ? (0, t.jsx)("strong", { style: a, children: l })
            : (0, t.jsx)("span", { style: a, children: l });
        }),
        (w.Link = function (e) {
          let {
            children: i,
            target: l = "_blank",
            href: a,
            className: n,
            onClick: s,
            style: r,
          } = e;
          return (0, t.jsx)("a", {
            onClick: s,
            href: a,
            target: l,
            rel: "noopener noreferrer",
            style: r,
            children: i,
          });
        }),
        (v.Meta = function (e) {
          let { title: i, description: l, style: a, className: n } = e;
          return (0, t.jsxs)("div", {
            style: a,
            className: n,
            children: [
              (0, t.jsx)(w.Title, {
                style: { margin: "0" },
                level: 5,
                children: i,
              }),
              (0, t.jsx)("div", {
                children: (0, t.jsx)(w.Text, {
                  type: "secondary",
                  children: l,
                }),
              }),
            ],
          });
        });
      var k = l(74719),
        N = l(55351),
        S = (e) => {
          let {} = e,
            i = (0, a.useRouter)(),
            l =
              "One of the world's fastest-growing open source communities | Supabase",
            s =
              "Supabase is the community that builds the infrastructure for your applications. Build using Supabase for any size project—from a new startup to even large growing companies";
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(N.PB, {
                title: l,
                description: s,
                openGraph: {
                  title: l,
                  description: s,
                  url: "https://supabase.com/".concat(i.pathname),
                  images: [
                    { url: "https://supabase.com/images/og/supabase-og.png" },
                  ],
                },
              }),
              (0, t.jsxs)(n.default, {
                children: [
                  (0, t.jsx)(E, {}),
                  (0, t.jsx)(C, {}),
                  (0, t.jsx)(A, {}),
                  (0, t.jsx)(D, {}),
                  (0, t.jsx)(I, {}),
                  (0, t.jsx)(r.default, {}),
                ],
              }),
            ],
          });
        };
      let E = () =>
          (0, t.jsx)(t.Fragment, {
            children: (0, t.jsx)("div", {
              className:
                " sm:py-18 container relative mx-auto px-6 py-16 text-center md:py-24 lg:px-16 lg:py-24 xl:px-20",
              children: (0, t.jsx)("h1", {
                className: "text-foreground text-5xl",
                children:
                  "Join one of the world's fastest growing open source communities.",
              }),
            }),
          }),
        I = () =>
          (0, t.jsx)("div", {
            className: "border-t border-default",
            children: (0, t.jsxs)(d.default, {
              children: [
                (0, t.jsx)(s.Z, {
                  title: "Team",
                  paragraph: (0, t.jsx)("div", {}),
                }),
                (0, t.jsxs)("div", {
                  className: "grid grid-cols-2 md:grid-cols-12",
                  children: [
                    (0, t.jsx)("div", {
                      className: "col-span-8 ",
                      children: (0, t.jsx)("p", {
                        children: (0, t.jsx)("p", {
                          className: "text-foreground text-lg",
                          children:
                            "Supabase is fully remote, with a strong affinity for open source maintainers and ex-Founders. Our engineering team is made up of developers from AWS, Google, Palantir, Stripe, and other YC companies.",
                        }),
                      }),
                    }),
                    (0, t.jsx)("div", {
                      className: " col-span-4 pt-8 md:mt-0 md:text-right",
                      children: (0, t.jsx)("a", {
                        href: "https://supabase.com/careers",
                        children: (0, t.jsx)(j.z, {
                          size: "medium",
                          className: "text-white",
                          children: "Join the team",
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        C = () => {
          let { basePath: e } = (0, a.useRouter)();
          return (0, t.jsx)(d.default, {
            className: "pt-0 lg:pt-0",
            children: (0, t.jsxs)("div", {
              className: "space-y-16",
              children: [
                (0, t.jsx)("div", {
                  className:
                    "relative grid max-w-5xl grid-cols-2 gap-8 lg:grid-cols-4 ",
                  children: g.map((i, l) =>
                    (0, t.jsxs)(
                      "div",
                      {
                        className:
                          "\n              space-y-4 text-center lg:text-left\n              "
                            .concat(
                              l !== g.length - 1
                                ? "border-default lg:border-r"
                                : "",
                              "\n              "
                            )
                            .concat(
                              1 === l
                                ? "border-default md:border-0 lg:border-r "
                                : "",
                              "\n          "
                            ),
                        children: [
                          (0, t.jsx)("div", {
                            className:
                              "relative mx-auto h-7 w-7 lg:mx-0 ".concat(
                                i.invertImgDarkMode
                                  ? " dark:invert dark:filter"
                                  : ""
                              ),
                            children: (0, t.jsx)(x(), {
                              layout: "fill",
                              alt: "".concat(i.title, " logo"),
                              src: ""
                                .concat(e, "/images/company/community/")
                                .concat(i.img),
                              objectFit: "scale-down",
                              objectPosition: "center",
                              className: " bg-no-repeat ",
                            }),
                          }),
                          (0, t.jsxs)("div", {
                            children: [
                              (0, t.jsx)("h1", {
                                className: "text-foreground mb-0 text-4xl",
                                children: i.stat,
                              }),
                              (0, t.jsx)("p", {
                                className: "text-foreground-light text-sm",
                                children: i.statLabel,
                              }),
                            ],
                          }),
                        ],
                      },
                      i.title
                    )
                  ),
                }),
                (0, t.jsxs)("div", {
                  className: "space-y-8",
                  children: [
                    (0, t.jsx)("div", {
                      className: "max-w-3xl",
                      children: (0, t.jsx)("p", {
                        className: "text-foreground-light text-sm",
                        children:
                          "With developer signups from the world's leading brands.",
                      }),
                    }),
                    (0, t.jsx)(o.Z, { images: u }),
                  ],
                }),
              ],
            }),
          });
        },
        A = () =>
          (0, t.jsxs)(d.default, {
            className: "pt-0 lg:pt-0",
            children: [
              (0, t.jsx)("div", {
                id: "investors",
                children: (0, t.jsx)(s.Z, {
                  title: "Our investors",
                  paragraph: (0, t.jsx)(t.Fragment, {
                    children: (0, t.jsx)("p", {
                      children: (0, t.jsx)("p", {
                        className: "text-lg",
                        children:
                          "We've raised over $116 million in funding, backed by some of the world's leading investors.",
                      }),
                    }),
                  }),
                }),
              }),
              (0, t.jsx)("div", {
                className:
                  "mx-auto mt-5 mb-16 grid max-w-lg gap-0.5 lg:max-w-none lg:grid-cols-4",
                children: p
                  .filter((e) => !0 === e.lead)
                  .map((e) =>
                    (0, t.jsx)(
                      "div",
                      {
                        children: (0, t.jsx)("div", {
                          className:
                            " bg-surface-100 col-span-1 flex h-32 content-end items-center justify-center",
                          children: (0, t.jsx)("div", {
                            className: "relative h-8 w-full overflow-auto",
                            children: (0, t.jsx)(x(), {
                              layout: "fill",
                              src: "".concat(e.img),
                              alt: e.name,
                              objectFit: "scale-down",
                              objectPosition: "center",
                              className: " opacity-50 contrast-0 filter ",
                            }),
                          }),
                        }),
                      },
                      e.name
                    )
                  ),
              }),
              (0, t.jsx)("h2", {
                className: "text-foreground text-2xl",
                children: "Individual investors",
              }),
              (0, t.jsx)("div", {
                className:
                  "mx-auto mt-5 grid grid-cols-2 gap-5 lg:max-w-none lg:grid-cols-4",
                children: p
                  .filter((e) => !1 === e.lead)
                  .sort((e, i) => e.name.localeCompare(i.name))
                  .map((e) =>
                    (0, t.jsxs)(
                      "div",
                      {
                        children: [
                          e.img &&
                            (0, t.jsx)("img", { src: e.img, alt: e.name }),
                          (0, t.jsx)("div", {
                            className: "flex flex-col justify-center space-y-2",
                            children: (0, t.jsxs)("div", {
                              children: [
                                (0, t.jsx)("h1", {
                                  className: "text-foreground mb-0 text-base",
                                  children: e.name,
                                }),
                                (0, t.jsx)("p", {
                                  className:
                                    "text-foreground-lighter mb-0 text-xs",
                                  children: e.title,
                                }),
                              ],
                            }),
                          }),
                        ],
                      },
                      e.name
                    )
                  ),
              }),
            ],
          }),
        D = () =>
          (0, t.jsxs)(d.default, {
            className: "pt-0 lg:pt-0",
            children: [
              (0, t.jsx)("div", {
                children: (0, t.jsx)(s.Z, { title: "Press" }),
              }),
              (0, t.jsx)("div", {
                className:
                  "mx-auto mt-5 grid gap-5 lg:max-w-none lg:grid-cols-3",
                children: c
                  .filter((e) => "article" == e.type)
                  .map((e) =>
                    (0, t.jsx)(
                      b(),
                      {
                        href: e.href,
                        target: "_blank",
                        children: (0, t.jsx)(
                          v,
                          {
                            hoverable: !0,
                            className: "h-36",
                            children: (0, t.jsx)(k.Z, {
                              className: "h-40 justify-between",
                              direction: "vertical",
                              children: (0, t.jsxs)("div", {
                                children: [
                                  (0, t.jsx)("h1", {
                                    className: "text-foreground text-xl",
                                    children: e.type.toUpperCase(),
                                  }),
                                  (0, t.jsx)("p", {
                                    className:
                                      "text-foreground-light line-clamp block h-12 overflow-hidden text-ellipsis text-base",
                                    children: e.title,
                                  }),
                                ],
                              }),
                            }),
                          },
                          "press_".concat(e.href)
                        ),
                      },
                      e.href
                    )
                  ),
              }),
              (0, t.jsx)("div", {
                className:
                  "mx-auto mt-5 grid gap-5 sm:grid-cols-2 lg:max-w-none lg:grid-cols-4",
                children: c
                  .filter((e) => "podcast" == e.type)
                  .map((e) =>
                    (0, t.jsx)(
                      b(),
                      {
                        href: e.href,
                        target: "_blank",
                        children: (0, t.jsx)(
                          v,
                          {
                            hoverable: !0,
                            className: "h-36",
                            children: (0, t.jsx)(k.Z, {
                              className: "h-40 justify-between",
                              direction: "vertical",
                              children: (0, t.jsxs)("div", {
                                children: [
                                  (0, t.jsx)("h1", {
                                    className: "text-foreground text-xl",
                                    children: e.type.toUpperCase(),
                                  }),
                                  (0, t.jsx)("p", {
                                    className:
                                      "text-foreground-light line-clamp block h-12 overflow-hidden text-ellipsis text-base",
                                    children: e.title,
                                  }),
                                ],
                              }),
                            }),
                          },
                          "press_".concat(e.href)
                        ),
                      },
                      e.href
                    )
                  ),
              }),
            ],
          });
    },
    74719: function (e, i, l) {
      "use strict";
      var t = l(52322);
      l(2784),
        (i.Z = function (e) {
          let {
            direction: i,
            size: l = 2,
            className: a,
            block: n,
            style: s,
            minus: r,
            children: o,
          } = e;
          return (0, t.jsx)("div", { className: a, style: s, children: o });
        });
    },
  },
  function (e) {
    e.O(
      0,
      [5126, 2787, 2251, 4697, 977, 7478, 6999, 2888, 9774, 179],
      function () {
        return e((e.s = 99405));
      }
    ),
      (_N_E = e.O());
  },
]);
