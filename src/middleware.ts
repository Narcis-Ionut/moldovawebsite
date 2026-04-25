import { defineMiddleware } from "astro:middleware";

const legacyRedirects = new Map<string, string>([
  ["/sitemap.xml", "/sitemap-index.xml"],
  ["/ru/главная", "/ru/"],
  ["/ru/главная.html", "/ru/"],
  ["/ru/цены", "/ru/preturi/"],
  ["/ru/цены.html", "/ru/preturi/"],
  ["/ru/контакты", "/ru/contact/"],
  ["/ru/контакты.html", "/ru/contact/"],
  ["/ru/условия", "/ru/termeni/"],
  ["/ru/условия.html", "/ru/termeni/"],
  ["/ru/политика-конфиденциальности", "/ru/politica-confidentialitate/"],
  ["/ru/политика-конфиденциальности.html", "/ru/politica-confidentialitate/"],
  ["/serviciiblog/дизайн-веб", "/ru/serviciiBlog/design-web/"],
  ["/serviciiblog/дизайн-веб.html", "/ru/serviciiBlog/design-web/"],
  ["/serviciiblog/веб-разработка", "/ru/serviciiBlog/dezvoltare-web/"],
  ["/serviciiblog/веб-разработка.html", "/ru/serviciiBlog/dezvoltare-web/"],
  ["/serviciiblog/seo-оптимизация", "/ru/serviciiBlog/seo-on-page/"],
  ["/serviciiblog/seo-оптимизация.html", "/ru/serviciiBlog/seo-on-page/"],
  ["/serviciiblog/интернет-магазин", "/ru/serviciiBlog/magazin-online/"],
  ["/serviciiblog/интернет-магазин.html", "/ru/serviciiBlog/magazin-online/"],
  ["/serviciiblog/техническая-поддержка", "/ru/serviciiBlog/mentenanta/"],
  ["/serviciiblog/техническая-поддержка.html", "/ru/serviciiBlog/mentenanta/"],
  ["/ru/%d0%b3%d0%bb%d0%b0%d0%b2%d0%bd%d0%b0%d1%8f", "/ru/"],
  ["/ru/%d0%b3%d0%bb%d0%b0%d0%b2%d0%bd%d0%b0%d1%8f.html", "/ru/"],
  ["/ru/главная", "/ru/"],
  ["/ru/главная.html", "/ru/"],
  ["/ru/%d1%86%d0%b5%d0%bd%d1%8b", "/ru/preturi/"],
  ["/ru/%d1%86%d0%b5%d0%bd%d1%8b.html", "/ru/preturi/"],
  ["/ru/цены", "/ru/preturi/"],
  ["/ru/цены.html", "/ru/preturi/"],
  ["/ru/prices", "/ru/preturi/"],
  ["/ru/prices/", "/ru/preturi/"],
  ["/ru/%d0%ba%d0%be%d0%bd%d1%82%d0%b0%d0%ba%d1%82%d1%8b", "/ru/contact/"],
  ["/ru/%d0%ba%d0%be%d0%bd%d1%82%d0%b0%d0%ba%d1%82%d1%8b.html", "/ru/contact/"],
  ["/ru/контакты", "/ru/contact/"],
  ["/ru/контакты.html", "/ru/contact/"],
  ["/ru/%d1%83%d1%81%d0%bb%d0%be%d0%b2%d0%b8%d1%8f", "/ru/termeni/"],
  ["/ru/%d1%83%d1%81%d0%bb%d0%be%d0%b2%d0%b8%d1%8f.html", "/ru/termeni/"],
  ["/ru/условия", "/ru/termeni/"],
  ["/ru/условия.html", "/ru/termeni/"],
  [
    "/ru/%d0%bf%d0%be%d0%bb%d0%b8%d1%82%d0%b8%d0%ba%d0%b0-%d0%ba%d0%be%d0%bd%d1%84%d0%b8%d0%b4%d0%b5%d0%bd%d1%86%d0%b8%d0%b0%d0%bb%d1%8c%d0%bd%d0%be%d1%81%d1%82%d0%b8",
    "/ru/politica-confidentialitate/",
  ],
  [
    "/ru/%d0%bf%d0%be%d0%bb%d0%b8%d1%82%d0%b8%d0%ba%d0%b0-%d0%ba%d0%be%d0%bd%d1%84%d0%b8%d0%b4%d0%b5%d0%bd%d1%86%d0%b8%d0%b0%d0%bb%d1%8c%d0%bd%d0%be%d1%81%d1%82%d0%b8.html",
    "/ru/politica-confidentialitate/",
  ],
  [
    "/ru/политика-конфиденциальности",
    "/ru/politica-confidentialitate/",
  ],
  [
    "/ru/политика-конфиденциальности.html",
    "/ru/politica-confidentialitate/",
  ],
  [
    "/serviciiblog/%d0%b2%d0%b5%d0%b1-%d1%80%d0%b0%d0%b7%d1%80%d0%b0%d0%b1%d0%be%d1%82%d0%ba%d0%b0",
    "/ru/serviciiBlog/dezvoltare-web/",
  ],
  [
    "/serviciiblog/%d0%b2%d0%b5%d0%b1-%d1%80%d0%b0%d0%b7%d1%80%d0%b0%d0%b1%d0%be%d1%82%d0%ba%d0%b0.html",
    "/ru/serviciiBlog/dezvoltare-web/",
  ],
  ["/serviciiblog/веб-разработка", "/ru/serviciiBlog/dezvoltare-web/"],
  ["/serviciiblog/веб-разработка.html", "/ru/serviciiBlog/dezvoltare-web/"],
  [
    "/serviciiblog/seo-%d0%be%d0%bf%d1%82%d0%b8%d0%bc%d0%b8%d0%b7%d0%b0%d1%86%d0%b8%d1%8f",
    "/ru/serviciiBlog/seo-on-page/",
  ],
  [
    "/serviciiblog/seo-%d0%be%d0%bf%d1%82%d0%b8%d0%bc%d0%b8%d0%b7%d0%b0%d1%86%d0%b8%d1%8f.html",
    "/ru/serviciiBlog/seo-on-page/",
  ],
  ["/serviciiblog/seo-оптимизация", "/ru/serviciiBlog/seo-on-page/"],
  ["/serviciiblog/seo-оптимизация.html", "/ru/serviciiBlog/seo-on-page/"],
  [
    "/serviciiblog/%d0%b8%d0%bd%d1%82%d0%b5%d1%80%d0%bd%d0%b5%d1%82-%d0%bc%d0%b0%d0%b3%d0%b0%d0%b7%d0%b8%d0%bd",
    "/ru/serviciiBlog/magazin-online/",
  ],
  [
    "/serviciiblog/%d0%b8%d0%bd%d1%82%d0%b5%d1%80%d0%bd%d0%b5%d1%82-%d0%bc%d0%b0%d0%b3%d0%b0%d0%b7%d0%b8%d0%bd.html",
    "/ru/serviciiBlog/magazin-online/",
  ],
  ["/serviciiblog/интернет-магазин", "/ru/serviciiBlog/magazin-online/"],
  [
    "/serviciiblog/интернет-магазин.html",
    "/ru/serviciiBlog/magazin-online/",
  ],
  [
    "/serviciiblog/%d1%82%d0%b5%d1%85%d0%bd%d0%b8%d1%87%d0%b5%d1%81%d0%ba%d0%b0%d1%8f-%d0%bf%d0%be%d0%b4%d0%b4%d0%b5%d1%80%d0%b6%d0%ba%d0%b0",
    "/ru/serviciiBlog/mentenanta/",
  ],
  [
    "/serviciiblog/%d1%82%d0%b5%d1%85%d0%bd%d0%b8%d1%87%d0%b5%d1%81%d0%ba%d0%b0%d1%8f-%d0%bf%d0%be%d0%b4%d0%b4%d0%b5%d1%80%d0%b6%d0%ba%d0%b0.html",
    "/ru/serviciiBlog/mentenanta/",
  ],
  ["/serviciiblog/техническая-поддержка", "/ru/serviciiBlog/mentenanta/"],
  [
    "/serviciiblog/техническая-поддержка.html",
    "/ru/serviciiBlog/mentenanta/",
  ],
]);

function appendSearch(pathname: string, search: string) {
  return `${pathname}${search}`;
}

export const onRequest = defineMiddleware((context, next) => {
  const pathname = context.url.pathname;
  const search = context.url.search;
  const normalizedPath =
    pathname.length > 1 && pathname.endsWith("/")
      ? pathname.slice(0, -1)
      : pathname;
  const decodedPath = decodeURIComponent(normalizedPath);
  const legacyTarget =
    legacyRedirects.get(normalizedPath.toLowerCase()) ??
    legacyRedirects.get(decodedPath.toLowerCase());

  if (legacyTarget) {
    return new Response(null, {
      status: 301,
      headers: {
        Location: appendSearch(legacyTarget, search),
      },
    });
  }

  const shouldAddSlash =
    pathname !== "/" &&
    !pathname.endsWith("/") &&
    !pathname.includes(".") &&
    !pathname.startsWith("/api/") &&
    pathname !== "/api";

  if (shouldAddSlash) {
    return new Response(null, {
      status: 308,
      headers: {
        Location: appendSearch(`${pathname}/`, search),
      },
    });
  }

  return next();
});
