import type { APIRoute } from "astro";

// Single-page site, so the sitemap is one URL. Add paths here if pages are added.
const paths = ["/"];

export const GET: APIRoute = ({ site }) => {
  const urls = paths.map((path) => `  <url><loc>${new URL(path, site)}</loc></url>`).join("\n");
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    { headers: { "Content-Type": "application/xml" } },
  );
};
