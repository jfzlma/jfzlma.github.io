// @ts-check
import { defineConfig } from "astro/config";

// Canonical origin used for Open Graph URLs and the sitemap.
// Override at build time: SITE_URL=https://example.com npm run build
export default defineConfig({
  site: process.env.SITE_URL ?? "https://jfzlma.github.io",
  output: "static",
  trailingSlash: "ignore",
  devToolbar: { enabled: false },
});
