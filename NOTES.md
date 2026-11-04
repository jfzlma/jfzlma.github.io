# Content notes

How the site content in `content/` was assembled from the resume corpus, written 29 Oct 2026.
Review this when updating content.

## Sources read

- **`/opt/personal/git-repos/career-ops/output/`**: all 99 HTML files (96 CVs, 3 cover letters)
  and all 106 PDFs (CVs, dated re-renders, cover letters, and the copies in `discovered/`,
  `gsstech/`, `mindrift/`, `starlink-qatar/`). HTML was parsed section by section. PDF text was
  extracted with macOS PDFKit and diffed against the HTML corpus. Every PDF line not found
  verbatim in some HTML was a rewording of an existing statement, not a new fact.
- **`/opt/personal/git-repos/career-ops/cv.md`**: the brief pointed to `career-ops/cv/md`, which
  doesn't exist. `cv.md` is the canonical master resume. It was last edited 23 Oct 2026, newer
  than every general-purpose (non-tailored) resume, so it is treated as the most recent source.
- `output/parsewave-application-answers-2026-10-06.md`: an application draft, used only to
  corroborate the Appium work (see below).
- No `./resumes` folder exists.

All 96 CVs agree on name, employers, titles, locations and dates. Most differences are
role-specific rewording. Where wording differed, the most specific version was kept, and any
version that carries a metric beats one that doesn't.

## Conflicts and how they were resolved

1. **Airflow and PySpark: production experience or "learning"?** About 20 older tailored CVs
   (late Sep to mid Oct) list *PySpark* and *Apache Airflow* under "Actively Learning".
   `cv.md` and every CV from 18 Oct onward state production use: "Orchestrated ETL workflows
   with Apache Airflow" (PST.AG) and "Used Apache Spark (PySpark) for distributed data
   processing" (Shopalyst). **Used the newer statements.** ⚠️ Please confirm, since this is the
   one place where the sources materially disagree.
2. **Headline.** There are about 40 role-specific headlines ("Senior Data Engineer | Technical
   Lead", "Senior Web Scraping Engineer | …", etc.). **Used `cv.md`'s headline**, as you chose:
   *Senior Python Developer · Technical Lead · Data Engineering & Web Scraping*.
3. **Appium bullet (Shopalyst).** "Built Appium crawlers … 5-6 mobile apps … across 10-12
   locations" appears in only one CV (`cv-jafsal-m-a-yipitdata.html`, 6 Oct) plus the Parsewave
   draft. It is not in `cv.md`. **Included, as you chose**, and Appium was added to the
   Web & Parsing skills. The downloadable PDF doesn't contain it (see "Resume PDF" below).
4. **Project count at PST.AG.** Every resume says **100+** production projects. The previous
   static site in this repo (`index.html` in git history) said 250+. That claim has no resume
   source, so **100+** is used.
5. **Education dates.** CVs show "Aug 2014 – Jul 2018", "2014 – 2018" or just "2018".
   **Used the most specific version: Aug 2014 – Jul 2018.**
6. **Food-ordering project title.** `cv.md` calls it "Rapid Prototyping & AI-Assisted Tooling
   (Vibe Coding)". Eight CVs call it "Full-Stack Food Ordering Web App". **Used the descriptive
   title.** Firebase Studio and Antigravity are listed as its stack because the sources name
   them as the tools. No runtime framework is inferred.
7. **NiFi and Airflow bullet.** `cv.md` has two bullets ("Designed and operated ETL workflows
   using Apache NiFi …" and "Orchestrated ETL workflows with Apache Airflow"). 25+ CVs merge them
   into one. **Merged**, with no change in meaning.
8. **Email.** One HENNGE cover-letter PDF uses `jfzlma+1@gmail.com`. Every CV uses
   `jfzlma@gmail.com`. **Used the latter.**

## Omitted on purpose

- **Phone number** (+91-9633062855): left off the web page, as you chose. It is still in the
  downloadable PDF.
- **Relocation and availability text.** About 25 CVs append "open to relocation to …" to the
  location. Removed per the brief: no availability messaging.
- **"Core Competencies" tag grids.** Per-application rephrasings of the skills list. The
  canonical grouped skills list from `cv.md` is used instead.
- **Cover letters** and anything only they contain.
- **Project dates and status.** No resume gives a date or status for any project, so those
  optional fields are left empty. The SHM project is an undergraduate project (2014–2018), and
  a related paper appeared in Aug 2018, but the sources never date the project itself.
- **Tag filtering on projects.** There are only three projects, so a filter would add JS and UI
  for no benefit. It's easy to add later if the list grows.

## Assumptions

- **Featured projects.** The food-ordering app and the Structural Health Monitoring system are
  marked `featured: true`. "Web Applications Portfolio" isn't, because it is a list of
  sites rather than a single project. This is an editorial choice; flip the flag to change it.
- **Skills added beyond `cv.md`'s skills list**, each backed by experience bullets:
  *Apache Spark (PySpark)*, *Android app reverse-engineering* (also in 8 CV skill lists) and
  *Appium*.
- **Publication** ("Different Approaches To Crack Monitoring of Buildings Using IoT", IJRASET,
  Aug 2018) appears under Education, as in about 30 CVs, because the requested section order
  has no Publications section. No DOI or URL is given in any source, so it isn't linked.
- **Spoken languages** (English, Malayalam, Tamil) appear as a skills category with level.
- **`jafsal.dev`** is listed as "Website" because every resume links it. If this site will be
  served *at* jafsal.dev, remove that link from `content/profile.yml` and build with
  `SITE_URL=https://jafsal.dev`.
- **Canonical URL** defaults to `https://jfzlma.github.io` (this repo's name). Override it with
  `SITE_URL`.
- **"Present" for PST.AG** is correct as of Oct 2026.

## Resume PDF

`public/resume/jafsal-m-a-resume.pdf` is an unchanged copy of
`output/cv-jafsal-m-a-base-2026-10-18.pdf` (SHA-256 `727e3977…a5b5cc3`). It is the newest
general-purpose CV, and its content matches `cv.md`. Differences from the website:

- it includes the phone number;
- it does not include the Appium bullet or the merged NiFi/Airflow wording.

To make the PDF match the site exactly, regenerate it from career-ops after adding the Appium
bullet to `cv.md`, then replace the file. Alternatively, print the site with Ctrl/Cmd+P.

## 2026-11-04 sync

`cv.md` was edited again (23 Oct → 4 Nov 2026). Diffed the new version against the content below
and merged in what was new, keeping everything added since 29 Oct that `cv.md` doesn't contradict
(Appium bullet, merged NiFi/Airflow wording, Apache Spark/Android-reverse-engineering skills,
Web Applications Portfolio project).

- **Experience**: added the trade-compliance datasets bullet (SAP/E4H/S4H) to PST.AG; added two
  Shopalyst bullets (brand landing pages + insights dashboard; catalog/product/review/SOV crawls
  across web, mobile web, native) ahead of the existing Appium bullet, which was kept since it's
  more specific and isn't contradicted; added the Damen vessel-systems bullet to the TCS IoT Edge
  role; replaced the TCS System Engineer's first bullet with `cv.md`'s more specific
  Grainger.com/Zoro.com wording.
- **Skills**: added a new "Traffic Analysis & API Tooling" category (Fiddler, mitmproxy, Burp
  Suite, Postman, HTTPie, BrowserStack, LambdaTest); added `AWS (EC2, IoT Greengrass)` to Cloud &
  Platforms; widened the CI/CD entry to `(GitLab, GitHub Actions, Jenkins, Azure DevOps
  Pipelines)`.
- **Projects**: added four projects from `cv.md` that weren't on the site yet — `curl-to-scrapy`,
  `crawlops`, `scrapy-legacy-ssl`, `tv-tools` (all link to their GitHub repos; none marked
  featured). Updated the food-ordering-app link from `dev.theplato.in` to `theplato.in` per
  `cv.md`. Left "Web Applications Portfolio" in place even though `cv.md` no longer lists it —
  it predates `cv.md`'s project list (see "Assumptions" above) and nothing said to remove it;
  revisit if that project should actually come down.
- **Not touched**: `public/resume/jafsal-m-a-resume.pdf` is still the 18 Oct base PDF. No newer
  general-purpose (non-tailored) PDF exists in `career-ops/output/` as of this sync — only
  role-tailored re-renders. Regenerate it from career-ops once a new base PDF exists.

## 2026-11-04: GitHub Pages source was set to the legacy Jekyll branch build

`https://jfzlma.github.io/` was serving the repo's `README.md` (rendered by Jekyll) instead of
this site. Pages was configured with `build_type: "legacy"` (deploy from the `main` branch root),
even though `.github/workflows/deploy.yml` already builds and uploads the Astro `dist/` as a Pages
artifact. Fixed by setting the Pages source to `build_type: "workflow"` via the API
(`gh api -X PUT repos/jfzlma/jfzlma.github.io/pages -f build_type=workflow`) and re-running the
workflow. If this ever regresses, check **Settings → Pages → Build and deployment → Source** is
"GitHub Actions", not "Deploy from a branch".

## 2026-11-04: moved the canonical domain to jafsal.dev

`jafsal.dev` was previously a *different*, already-live site — a Next.js app on Firebase Hosting
(A record `199.36.158.100`, Cloudflare-managed DNS, TXT `hosting-site=jafsal-dev`). At the user's
explicit choice, this CV now takes over that domain:

- Added `public/CNAME` (`jafsal.dev`) so it ships in every build's `dist/`.
- `astro.config.mjs` default `site` and `.github/workflows/deploy.yml`'s `SITE_URL` both changed
  from `https://jfzlma.github.io` to `https://jafsal.dev`.
- Removed the self-referential "Website → jafsal.dev" link from `content/profile.yml` (the site
  itself is now served there, so linking to it from its own header no longer makes sense).
- Set the custom domain on the GitHub Pages config via
  `gh api -X PUT repos/jfzlma/jfzlma.github.io/pages -f cname=jafsal.dev`.
- DNS still needs to be repointed at Cloudflare from Firebase's IP to GitHub Pages' IPs (see the
  user-facing instructions given at the time; not duplicated here). Once that propagates and
  GitHub finishes issuing the TLS cert, `https_enforced` should be turned back on for the custom
  domain.
- The old Next.js/Firebase site at `jafsal.dev` stops being reachable at that domain once DNS
  cuts over — it wasn't deleted anywhere, just no longer pointed to from this domain.
- `firebase.json` in this repo is unrelated: it's a generic Firebase Hosting config for optionally
  deploying *this* Astro site's `dist/` elsewhere, not the config for the old Next.js site (which
  lives in a different, separate codebase/Firebase project).
