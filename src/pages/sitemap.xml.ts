import type { APIRoute } from "astro";

export const prerender = true;

export const GET: APIRoute = ({ site, url }) => {
  const baseUrl = site ?? new URL(url.origin);
  const sitemapUrl = new URL("/sitemap-0.xml", baseUrl).toString();
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${sitemapUrl}</loc>
  </sitemap>
</sitemapindex>`;

  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};
