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
