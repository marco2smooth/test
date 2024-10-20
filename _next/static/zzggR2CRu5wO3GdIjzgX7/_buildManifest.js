(self.__BUILD_MANIFEST = (function (
  s,
  a,
  e,
  c,
  t,
  n,
  i,
  u,
  r,
  b,
  d,
  g,
  h,
  p,
  f,
  o,
  k,
  j,
  l,
  w,
  m,
  y,
  v,
  x,
  _,
  I,
  B,
  F,
  q
) {
  return {
    __rewrites: {
      afterFiles: [
        { has: u, source: v, destination: v },
        { has: u, source: "/dashboard", destination: u },
        { has: u, source: "/dashboard/:path*", destination: u },
        { has: u, source: "/docs", destination: u },
        { has: u, source: "/docs/", destination: u },
        { has: u, source: "/docs/:path*", destination: u },
        { has: u, source: "/new-docs", destination: u },
        { has: u, source: "/new-docs/", destination: u },
        { has: u, source: "/new-docs/:path*", destination: u },
        { has: u, source: "/humans.txt", destination: u },
        { has: u, source: "/lawyers.txt", destination: u },
        { has: u, source: "/.well-known/security.txt", destination: u },
        { has: u, source: "/feed.xml", destination: "/rss.xml" },
      ],
      beforeFiles: [],
      fallback: [],
    },
    "/": [c, t, s, n, a, i, e, "static/chunks/pages/index-7cbddcd402f09596.js"],
    "/404": [
      c,
      t,
      s,
      n,
      a,
      i,
      e,
      "static/chunks/pages/404-99f41b551a622c54.js",
    ],
    "/_error": ["static/chunks/pages/_error-29151b8311ee5445.js"],
    "/alternatives/[slug]": [
      h,
      c,
      t,
      s,
      n,
      a,
      b,
      d,
      g,
      r,
      p,
      o,
      k,
      i,
      e,
      j,
      f,
      "static/chunks/pages/alternatives/[slug]-b0b0d920fbba96ad.js",
    ],
    "/aup": [
      h,
      c,
      t,
      s,
      n,
      a,
      b,
      d,
      g,
      r,
      p,
      o,
      k,
      i,
      e,
      j,
      f,
      "static/chunks/pages/aup-2d25967b8a2939e6.js",
    ],
    "/auth": [
      c,
      t,
      s,
      n,
      a,
      r,
      i,
      e,
      f,
      "static/chunks/pages/auth-e24613d4d0454f4f.js",
    ],
    "/beta": [
      c,
      t,
      s,
      n,
      a,
      p,
      i,
      e,
      "static/chunks/pages/beta-6e1e020cf25939f1.js",
    ],
    "/blog": [
      c,
      t,
      s,
      n,
      a,
      w,
      i,
      e,
      "static/chunks/pages/blog-b85ae7a7ba2c06d0.js",
    ],
    "/blog/categories/[category]": [
      c,
      t,
      s,
      n,
      a,
      w,
      i,
      e,
      "static/chunks/pages/blog/categories/[category]-a96314a7b0310afe.js",
    ],
    "/blog/tags/[tag]": [
      c,
      t,
      s,
      n,
      a,
      w,
      i,
      e,
      "static/chunks/pages/blog/tags/[tag]-ad83e7a010846e35.js",
    ],
    "/blog/[slug]": [
      h,
      c,
      t,
      s,
      n,
      a,
      b,
      d,
      g,
      r,
      p,
      o,
      k,
      i,
      e,
      j,
      x,
      _,
      I,
      B,
      "static/chunks/7566-954b00aea7077fb7.js",
      f,
      "static/chunks/pages/blog/[slug]-004ee55fdcb283ee.js",
    ],
    "/brand-assets": [
      c,
      t,
      s,
      n,
      a,
      i,
      e,
      "static/chunks/pages/brand-assets-7a3400cd9f152738.js",
    ],
    "/careerss": [
      c,
      t,
      s,
      n,
      a,
      d,
      g,
      i,
      e,
      "static/css/161cde6039999090.css",
      "static/chunks/pages/careers-cb1b0f0685bf0fdd.js",
    ],
    "/changelog": [
      h,
      c,
      t,
      s,
      n,
      a,
      b,
      d,
      g,
      r,
      p,
      o,
      k,
      i,
      e,
      j,
      f,
      "static/chunks/pages/changelog-e425054a92130135.js",
    ],
    "/company": [
      c,
      t,
      s,
      n,
      a,
      i,
      e,
      "static/chunks/pages/company-d588b5c70d1b5642.js",
    ],
    "/contact/sales": [
      c,
      t,
      s,
      n,
      a,
      i,
      e,
      F,
      "static/chunks/pages/contact/sales-e73b72e3eacf6cfa.js",
    ],
    "/customers": [
      c,
      t,
      s,
      n,
      a,
      i,
      e,
      "static/css/f16e82db8347c0c8.css",
      "static/chunks/pages/customers-6000b31f2fb97412.js",
    ],
    "/customers/[slug]": [
      h,
      c,
      t,
      s,
      n,
      a,
      b,
      d,
      g,
      r,
      p,
      o,
      k,
      i,
      e,
      j,
      f,
      "static/chunks/pages/customers/[slug]-a41e6938ea7285a7.js",
    ],
    "/database": [
      s,
      a,
      l,
      r,
      e,
      "static/css/af29afcd53f0145d.css",
      "static/chunks/pages/database-fe0bc51f72cc457e.js",
    ],
    "/edge-functions": [
      c,
      t,
      s,
      n,
      a,
      i,
      e,
      "static/chunks/pages/edge-functions-61a1296d7ac4d14d.js",
    ],
    "/enterprise": [
      c,
      t,
      s,
      n,
      a,
      i,
      e,
      F,
      "static/chunks/pages/enterprise-5e8fffedb5300712.js",
    ],
    "/events": [
      c,
      t,
      s,
      n,
      a,
      w,
      i,
      e,
      "static/chunks/pages/events-7ee318688ebc8a50.js",
    ],
    "/events/[slug]": [
      h,
      c,
      t,
      s,
      n,
      a,
      b,
      d,
      g,
      r,
      p,
      o,
      k,
      i,
      e,
      j,
      B,
      f,
      "static/chunks/pages/events/[slug]-2c67139e522642a1.js",
    ],
    "/ga": [
      c,
      t,
      s,
      n,
      a,
      d,
      g,
      i,
      e,
      "static/chunks/pages/ga-63cb5f677eaebf06.js",
    ],
    "/ga-week": [
      c,
      t,
      s,
      n,
      a,
      y,
      "static/chunks/8826-f56c81bc8ed8fcb3.js",
      i,
      e,
      I,
      "static/chunks/pages/ga-week-17fe7e59f1904f62.js",
    ],
    "/launch-week": [
      c,
      t,
      s,
      n,
      a,
      y,
      i,
      e,
      x,
      "static/chunks/pages/launch-week-d96f27f84b16a4a9.js",
    ],
    "/launch-week/6": [
      c,
      t,
      s,
      n,
      a,
      i,
      e,
      "static/css/c75e1624db165b6b.css",
      "static/chunks/pages/launch-week/6-d8a7db74bf70508b.js",
    ],
    "/launch-week/7": [
      c,
      t,
      s,
      n,
      a,
      i,
      e,
      "static/css/d93acd02dcde7a1e.css",
      "static/chunks/pages/launch-week/7-a7107038f854355d.js",
    ],
    "/launch-week/8": [
      "static/chunks/020d8314-9eb4e9e44ced1e64.js",
      c,
      t,
      s,
      n,
      a,
      "static/chunks/8295-d0873bbfc777b4db.js",
      i,
      e,
      m,
      "static/chunks/pages/launch-week/8-a3c2bb1c7529ec65.js",
    ],
    "/launch-week/tickets/[username]": [
      c,
      t,
      s,
      n,
      a,
      i,
      e,
      "static/chunks/pages/launch-week/tickets/[username]-c2cd152d71ea1366.js",
    ],
    "/launch-week/x": [
      c,
      t,
      s,
      n,
      a,
      y,
      i,
      e,
      _,
      "static/chunks/pages/launch-week/x-7659cf27edb6bcc7.js",
    ],
    "/legal/dpa": [
      c,
      t,
      s,
      n,
      a,
      "static/chunks/9372-d8fe3ba9c374e173.js",
      i,
      e,
      "static/chunks/pages/legal/dpa-9bf57485d9f7eb95.js",
    ],
    "/nextjs": ["static/chunks/pages/nextjs-15b3034c770ff9d1.js"],
    "/open-source": [
      c,
      t,
      s,
      n,
      a,
      l,
      i,
      e,
      "static/css/34e260538d292b9f.css",
      "static/chunks/pages/open-source-e17869039828664f.js",
    ],
    "/open-source/contributing/supasquad": [
      h,
      c,
      t,
      s,
      n,
      a,
      b,
      d,
      g,
      r,
      p,
      o,
      k,
      i,
      e,
      j,
      f,
      "static/chunks/pages/open-source/contributing/supasquad-6fe67abf1c47b1c5.js",
    ],
    "/partners": [
      c,
      t,
      s,
      n,
      a,
      i,
      e,
      "static/css/7f9dcaa0c00c18b2.css",
      "static/chunks/pages/partners-ba197cdf726f2a16.js",
    ],
    "/partners/experts": [
      c,
      t,
      s,
      n,
      a,
      i,
      e,
      "static/chunks/pages/partners/experts-2c395e15d4572820.js",
    ],
    "/partners/experts/[slug]": [
      c,
      t,
      s,
      n,
      a,
      l,
      i,
      e,
      m,
      "static/chunks/pages/partners/experts/[slug]-ca87ded91466875f.js",
    ],
    "/partners/integrations": [
      c,
      t,
      s,
      n,
      a,
      i,
      e,
      "static/chunks/pages/partners/integrations-e8752f66a9c87434.js",
    ],
    "/partners/integrations/[slug]": [
      h,
      c,
      t,
      s,
      n,
      a,
      l,
      i,
      e,
      m,
      "static/chunks/pages/partners/integrations/[slug]-43c7f089e9d63856.js",
    ],
    "/partners/[slug]": [
      c,
      t,
      s,
      n,
      a,
      i,
      e,
      "static/chunks/pages/partners/[slug]-99ecc28d249bff0e.js",
    ],
    "/pricing": [
      c,
      t,
      s,
      n,
      a,
      "static/chunks/3710-dbcae875bf65176e.js",
      "static/chunks/9736-43d6f1da8e4991f7.js",
      i,
      e,
      "static/css/c61bfa50fa822b60.css",
      "static/chunks/pages/pricing-809e8a23ea08a1bb.js",
    ],
    "/privacy": [
      h,
      c,
      t,
      s,
      n,
      a,
      b,
      d,
      g,
      r,
      p,
      o,
      k,
      i,
      e,
      j,
      f,
      "static/chunks/pages/privacy-a596c6f3677f6318.js",
    ],
    "/privacy-240804": [
      h,
      c,
      t,
      s,
      n,
      a,
      b,
      d,
      g,
      r,
      p,
      o,
      k,
      i,
      e,
      j,
      f,
      "static/chunks/pages/privacy-240804-3f1b5cf02e54dbe9.js",
    ],
    "/realtime": [
      c,
      t,
      s,
      n,
      a,
      b,
      l,
      r,
      i,
      e,
      q,
      "static/css/5650657c6db0c5ad.css",
      "static/chunks/pages/realtime-4137baa226c8de7d.js",
    ],
    "/security": [
      h,
      c,
      t,
      s,
      n,
      a,
      b,
      d,
      g,
      r,
      p,
      o,
      k,
      i,
      e,
      j,
      f,
      "static/chunks/pages/security-83daf890d9e31777.js",
    ],
    "/sla": [
      h,
      c,
      t,
      s,
      n,
      a,
      b,
      d,
      g,
      r,
      p,
      o,
      k,
      i,
      e,
      j,
      f,
      "static/chunks/pages/sla-fde7fa4caa3ed2ca.js",
    ],
    "/storage": [
      c,
      t,
      s,
      n,
      a,
      b,
      l,
      r,
      i,
      e,
      "static/chunks/1553-062e0f365b5d341e.js",
      q,
      "static/css/1ac6262071a975ba.css",
      "static/chunks/pages/storage-607daea68f2bde0f.js",
    ],
    "/support": [
      c,
      t,
      s,
      n,
      a,
      "static/chunks/9517-417f504b271cc3ea.js",
      i,
      e,
      "static/chunks/pages/support-3ec00cda4cf49df7.js",
    ],
    "/support-policy": [
      h,
      c,
      t,
      s,
      n,
      a,
      b,
      d,
      g,
      r,
      p,
      o,
      k,
      i,
      e,
      j,
      f,
      "static/chunks/pages/support-policy-85f82a8afdaed08f.js",
    ],
    "/terms": [
      h,
      c,
      t,
      s,
      n,
      a,
      b,
      d,
      g,
      r,
      p,
      o,
      k,
      i,
      e,
      j,
      f,
      "static/chunks/pages/terms-7ff5bb18b28190e5.js",
    ],
    "/vector": [
      c,
      t,
      s,
      n,
      a,
      i,
      e,
      m,
      "static/chunks/pages/vector-2d12807ab7d38424.js",
    ],
    sortedPages: [
      "/",
      "/404",
      "/_app",
      "/_error",
      "/alternatives/[slug]",
      "/aup",
      "/auth",
      "/beta",
      "/blog",
      "/blog/categories/[category]",
      "/blog/tags/[tag]",
      "/blog/[slug]",
      "/brand-assets",
      "/careerss",
      "/changelog",
      "/company",
      "/contact/sales",
      "/customers",
      "/customers/[slug]",
      "/database",
      "/edge-functions",
      "/enterprise",
      "/events",
      "/events/[slug]",
      "/ga",
      "/ga-week",
      "/launch-week",
      "/launch-week/6",
      "/launch-week/7",
      "/launch-week/8",
      "/launch-week/tickets/[username]",
      "/launch-week/x",
      "/legal/dpa",
      "/nextjs",
      "/open-source",
      "/open-source/contributing/supasquad",
      "/partners",
      "/partners/experts",
      "/partners/experts/[slug]",
      "/partners/integrations",
      "/partners/integrations/[slug]",
      "/partners/[slug]",
      "/pricing",
      "/privacy",
      "/privacy-240804",
      "/realtime",
      "/security",
      "/sla",
      "/storage",
      "/support",
      "/support-policy",
      "/terms",
      "/vector",
    ],
  };
})(
  "static/chunks/2251-213530d2f4249af9.js",
  "static/chunks/977-a6176846a4c4fb36.js",
  "static/chunks/6999-0aa924a2c605895b.js",
  "static/chunks/5126-a4cebbfb50f4f254.js",
  "static/chunks/2787-369baa42faf8b052.js",
  "static/chunks/4697-6ca83f98b24a61c1.js",
  "static/chunks/7478-b70f6b07f996ec23.js",
  void 0,
  "static/chunks/5669-18618c8fa9c827b3.js",
  "static/chunks/9573-b179858297d23b8c.js",
  "static/chunks/4525-3681cc7bff605f7e.js",
  "static/chunks/8147-49daa797c27209a2.js",
  "static/chunks/65a8b803-28cd820d250990b1.js",
  "static/chunks/7198-ebce9e0e6bae7eea.js",
  "static/css/e17a2d343a76bee3.css",
  "static/chunks/4526-b50f2bf45de77b14.js",
  "static/chunks/4123-589f0810af716807.js",
  "static/chunks/3880-1bd804265055a73d.js",
  "static/chunks/1401-efc8b06ccfa5f713.js",
  "static/chunks/8149-c905f8a644b8e9de.js",
  "static/css/46d2f1b70d0e73f2.css",
  "static/chunks/4777-7de1c29609cbf67b.js",
  "/:path*",
  "static/chunks/1028-0b4abdc9cbe59635.js",
  "static/chunks/9289-bd53e42088850117.js",
  "static/chunks/369-e5ab17b3b57fb765.js",
  "static/chunks/1935-97f4eb508bbdb1b1.js",
  "static/chunks/4729-537217cde6dcbc4d.js",
  "static/chunks/6176-f7af65bde61c7080.js"
)),
  self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();
