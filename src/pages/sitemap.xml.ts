import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site, url }) => {
  const target = new URL("/sitemap-index.xml", site ?? url);

  return new Response(null, {
    status: 301,
    headers: {
      Location: target.toString(),
    },
  });
};
