# SMILES Lab website

The website for the **S**ecure **M**odeling and **I**ntelligent **L**earning in
**E**ngineering **S**ystems lab at the University of Michigan–Flint.

Built with [Astro](https://astro.build). Every page is static HTML, so the whole
site is indexable by search engines and ships almost no JavaScript.

**Live at:** https://smileslab.github.io

---

## Running it locally

You need Node 20 or newer.

```bash
npm install
npm run dev          # http://localhost:4321
```

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the built site locally |
| `npm run check` | Type-check components and validate all content frontmatter |

Run `npm run check` before pushing — it is the same check CI runs, and it
catches bad frontmatter (a missing date, a malformed URL) before it reaches
the site.

---

## Deploying

**Just push to `main`.** GitHub Actions builds the site and publishes it.

There is no `gh-pages` branch to manage and no build output committed to the
repo — the old manual "build, switch branches, commit `public/`" process is
gone. You can watch a deploy in the repo's **Actions** tab, or re-run one with
**Run workflow**.

> **One-time setup:** in the repo's Settings → Pages, set **Source** to
> **GitHub Actions**. The old `gh-pages` branch can then be deleted.

---

## Adding content

All content lives in `src/content/` as Markdown. You do not need to touch any
components to add a person, a project or a post.

### Writing a news post or blog entry

Create a file in `src/content/news/`. The filename becomes the URL, so
`2026-09-nsf-award.md` publishes at `/news/2026-09-nsf-award`.

```markdown
---
title: We received an NSF award for deepfake detection
date: 2026-09-15
description: One or two sentences. Shown on the news card and used as the page description in Google results.
kind: news        # "news" for announcements, "blog" for long-form posts
tags:
  - awards
author: Khalid Malik   # optional
draft: false      # true keeps it out of the built site
---

Write the post here in Markdown.
```

`src/content/news/_template.md` is a ready-made starting point. **Files
beginning with `_` are ignored by the build**, so templates never publish.

Optional frontmatter:

- `cover:` / `coverAlt:` — a header image, e.g. `../../assets/lab/lab-2.jpeg`
- `externalUrl:` — link straight out to a press article instead of writing a
  full post

### Adding a team member

Create a file in `src/content/team/`:

```markdown
---
name: Jane Doe
role: PhD Student, Computer Science
group: phd        # faculty | postdoc | phd | ms | undergrad | collaborator
photo: ../../assets/people/jane-doe.jpg
order: 25         # lower sorts first within the group
researchAreas:
  - Computer vision
  - Multimedia forensics
links:
  scholar: https://scholar.google.com/citations?user=...
  linkedin: https://www.linkedin.com/in/...
  website: https://example.com
---

An optional short biography. If you leave the body empty, the card simply
shows the role and research areas.
```

Put the photo in `src/assets/people/`. Any size works — Astro resizes and
converts it automatically, and the original never reaches the browser. Roughly
square images look best.

### Moving someone to alumni

Move their file from `src/content/team/` to `src/content/alumni/`, then swap
`group:` for `years:` and `now:`:

```yaml
years: 2020–2026
now: Research Scientist at Example Corp
```

### Adding a research project

Create a file in `src/content/projects/`. See any existing file for the shape.
`featured: true` promotes it to the home page.

### Adding publications

Publications live in `src/data/publications.json`:

```json
{
  "title": "Paper title",
  "authors": "First Author, Second Author",
  "venue": "IEEE Transactions on Information Forensics and Security",
  "year": 2026,
  "ifValue": "8.1",
  "link": "https://doi.org/..."
}
```

`year` is optional but worth filling in: once more than one publication has a
year, a **year filter appears automatically** on the publications page, and
papers can be sorted chronologically. Most existing entries do not have one
yet.

---

## Project layout

```
src/
├─ pages/           one file per route
│  ├─ index.astro                → /
│  ├─ team.astro                 → /team
│  ├─ publications.astro         → /publications
│  ├─ research/[...slug].astro   → /research/<project>
│  └─ news/[...slug].astro       → /news/<post>
├─ content/         all editable content (Markdown)
│  ├─ news/  team/  alumni/  projects/
├─ data/
│  ├─ site.ts       nav, contact details, SEO strings — edit here to change
│  │                the header, footer and contact page at once
│  └─ publications.json
├─ components/      reusable UI
├─ layouts/Base.astro   <head>, SEO tags, header and footer
├─ assets/          images processed and optimized at build time
└─ styles/global.css    design tokens — colours, type scale, spacing
```

`public/` is served verbatim at the site root (the PI's CV, favicon,
`robots.txt`).

## Changing the design

`src/styles/global.css` holds every colour, font size and spacing value as a
custom property. Changing `--accent` there re-themes the entire site, in both
light and dark mode.

The dark theme is defined in the same file as a token swap. It follows the
reader's operating system preference and can be overridden with the toggle in
the header.
