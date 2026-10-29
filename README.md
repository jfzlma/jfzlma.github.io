# jafsal — CV site

A single-page developer CV built with [Astro](https://astro.build), TypeScript and plain CSS.
Static output, no backend, no analytics. All content lives in [`content/`](./content) and is
validated with Zod at build time.

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # type-check + static build into dist/
npm run preview  # serve dist/ locally
```

Requires Node 22.12+.

> Astro 7's `astro dev` runs as a background daemon. Stop it with `npx astro dev stop`.

## Editing content

| What               | Where                                        |
| ------------------ | -------------------------------------------- |
| Name, headline, summary, links, email | `content/profile.yml`     |
| Jobs               | `content/experience/*.md` (one file per role) |
| Projects           | `content/projects/*.md` (one file per project) |
| Skills             | `content/skills.yml`                         |
| Education, publications | `content/education.yml`                 |
| Resume PDF         | `public/resume/jafsal-m-a-resume.pdf` (path set by `resume:` in `profile.yml`) |

Sections render automatically from these files. You never need to edit a component to add content.
The schemas are in [`src/content.config.ts`](./src/content.config.ts). A malformed entry
fails `npm run build` with a message naming the file and field, e.g.

```
[InvalidContentEntryDataError] experience → shopalyst data does not match collection schema.
  start: Use a YYYY-MM date, e.g. 2024-02
```

### Add a skill

Add one line under the right category in `content/skills.yml`:

```yaml
  - name: Infrastructure & DataOps
    skills:
      - Docker
      - Terraform                          # plain name
      - { name: Kubernetes, level: Intermediate, years: 1 }   # optional level / years
```

A new category is a new `- name: … / skills: […]` block. An optional `note:` field renders after the list.

### Add a project

Drop a new Markdown file into `content/projects/`, e.g. `content/projects/my-tool.md`:

```md
---
title: My Tool
description: One or two sentences on what it does and why it matters.
stack: [Python, Playwright]
links:
  - label: github.com/jfzlma/my-tool
    url: https://github.com/jfzlma/my-tool
status: active        # optional: active | maintained | completed | archived
featured: true        # optional, default false
date: 2026-09         # optional, YYYY-MM
---
```

Projects sort by `featured` first, then by `date` (newest first; undated last), then by title.

### Add a job

Drop a new file into `content/experience/`. Bullets go in the body as a Markdown list:

```md
---
company: Example GmbH
role: Senior Data Engineer
location: Berlin, Germany (Remote)
start: 2026-11
# end: 2027-12   ← omit for a current role ("Present")
---

- What you built, with the number that proves it
- Another achievement
```

Roles sort newest first by `start`.

## Changing the accent color

The palette is monochrome plus one accent. In [`src/styles/global.css`](./src/styles/global.css),
edit the two lines at the top:

```css
--accent-light: #0f766e;  /* used on the light background */
--accent-dark:  #5eead4;  /* used on the dark background */
```

Keep at least 4.5:1 contrast against `--bg` (`#fbfbf9` light / `#121413` dark) for AA. The favicon
(`public/favicon.svg`) and Open Graph image (`public/og.png`) use the dark-mode accent too. Update
them if you want them to match.

## Theme and print

- Light/dark follows `prefers-color-scheme`. The `◐` button in the header overrides it and
  remembers the choice in `localStorage`.
- `Ctrl/Cmd + P` prints a plain black-on-white CV (two pages on A4 or US Letter). The theme toggle,
  terminal prompt and PDF link are hidden. The contact section is dropped because the header
  already has those details.

## Deploying

`npm run build` writes a fully static site to `dist/`. Set `SITE_URL` to the final origin so the
canonical URL, Open Graph tags, sitemap and robots.txt point at it:

```sh
SITE_URL=https://jafsal.dev npm run build
```

It defaults to `https://jfzlma.github.io`.

### GitHub Pages (current setup)

`.github/workflows/deploy.yml` builds and deploys on every push to `main`. One-time setup: in
**Settings → Pages**, set **Source** to **GitHub Actions**.

### Firebase Hosting

`firebase.json` is included (serves `dist/`, long-caches hashed assets).

```sh
npm install -g firebase-tools
firebase login
firebase use --add            # pick or create the project
SITE_URL=https://<project>.web.app npm run build
firebase deploy --only hosting
```

### Vercel

Import the repo at vercel.com/new. Vercel detects Astro automatically
(build `npm run build`, output `dist`). Add `SITE_URL` under **Settings → Environment Variables**.
Or from the CLI: `npx vercel --prod`.

### Netlify

Import the repo at app.netlify.com. Use build command `npm run build` and publish directory `dist`,
and add a `SITE_URL` environment variable. Or from the CLI:
`npm run build && npx netlify-cli deploy --prod --dir dist`.

## Project layout

```
content/                 data only. Edit these.
src/content.config.ts    Zod schemas for every content file
src/lib/yaml-loader.ts   loads single YAML docs; fails the build on syntax errors
src/components/          Section, Entry, TagList, ProjectCard, ThemeToggle
src/pages/index.astro    page assembly + sorting
src/styles/global.css    tokens, layout, print stylesheet
public/                  favicon, OG image, resume PDF
```

## Dependencies

| Package | Why |
| --- | --- |
| `astro` | Static site generator. Content collections give typed, Zod-validated Markdown/YAML, and the page ships no framework JS. Zod comes with Astro (`astro/zod`). |
| `yaml` | Parses the single-document YAML files. Astro's built-in `file()` loader logs YAML syntax errors without failing the build, so a small custom loader uses this instead. Astro already depends on it, so it adds no new code to the install. |
| `@fontsource/jetbrains-mono`, `@fontsource/ibm-plex-sans` | Self-hosted fonts (Latin subset, two weights each). No Google Fonts request and no third-party tracking. |
| `@astrojs/check`, `typescript`, `@types/node` (dev) | `astro check` type-checks `.astro` and `.ts` files as part of `npm run build`. |

No UI library, CMS, database or analytics.
