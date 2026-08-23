# Editorial Studio — static site

Your portfolio as a set of plain data files plus a tiny generator. Edit the
content, run one command, commit. GitHub Pages serves the result. No frameworks,
no build tooling — just Node to run the generator.

## How it fits together

```
content/        ← YOUR CONTENT lives here (plain .js data files). Edit these.
public/         ← static assets copied verbatim into the site
  images/       ← project images (referenced as "/images/…")
  files/        ← downloadable PDFs (referenced as "/files/…")
  styles.css    ← the single stylesheet (edit to change the design)
  main.js       ← tiny script: mobile menu + contact form
generate.mjs    ← the generator. Reads content/, writes docs/
docs/           ← GENERATED output. This is what GitHub Pages publishes.
                  Don't edit by hand — it's overwritten on every build.
```

## Editing content

All content is in `content/`. Each file maps to a section of the site and is a
simple list of objects. To change something, edit the object and rebuild.

- `site.js` — name, role, tagline, email, location, nav, social links
- `selected-works.js` — projects (each becomes its own page)
- `talks-press.js` — talks/press (grouped by `category`; each becomes a page)
- `about`: `professional-experience.js`, `education.js`, `awards.js`,
  `professional-development.js`
- `research`: `publications.js`, `thesis-supervisions.js`, `research-projects.js`
- `capacity-building`: `courses.js`, `workshops.js`, `guest-lectures.js`,
  `teaching-materials.js`

> Note: `about`, `research`, and `capacity-building` currently hold the original
> placeholder content. Replace those objects with your real information the same
> way Selected Works was done.

### Adding a project

Append an object to the `selectedWorks` array in `content/selected-works.js`:

```js
{
  slug: "my-project",                 // unique, lowercase-with-dashes → the URL
  title: "My Project",
  description: "One-line blurb for the card.",
  date: "2026",
  tags: ["Tag A", "Tag B"],
  image: "/images/my-project-hero.jpg",     // optional; omit for a placeholder
  gallery: ["/images/my-project-2.jpg"],    // optional extra images
  body: ["First paragraph.", "Second paragraph."],
  facts: [{ label: "Role", value: "Lead" }],// optional sidebar
  link: { label: "Read more", url: "https://…" }, // optional
}
```

### Adding images

Put the file in `public/images/`, then reference it with a root-relative path
starting with `/images/…`. PDFs go in `public/files/` and are referenced as
`/files/…`. All images are shown in grayscale by design.

## Build

```bash
node generate.mjs        # or: npm run build
```

This regenerates `docs/`. Re-run it after every content or design change.

## Preview locally

Open `docs/index.html` in a browser, or run a tiny local server so links behave
exactly like they will online:

```bash
npm run serve            # serves docs/ at http://localhost:3000
```

## Publish on GitHub Pages

1. Create a GitHub repo and push this folder:
   ```bash
   git init
   git add .
   git commit -m "Portfolio site"
   git branch -M main
   git remote add origin https://github.com/<you>/<repo>.git
   git push -u origin main
   ```
2. On GitHub: **Settings → Pages**.
3. Under **Build and deployment**, set **Source: Deploy from a branch**.
4. Choose **Branch: `main`** and **Folder: `/docs`**, then **Save**.
5. Wait ~1 minute. Your site is live at `https://<you>.github.io/<repo>/`.

Every time you push, GitHub Pages redeploys automatically. So the loop is:
edit content → `node generate.mjs` → `git commit` → `git push` → live.

Links are all relative, so the site works at a project URL
(`<you>.github.io/<repo>`), a user site (`<you>.github.io`), or a custom domain
with no changes.

### Optional: nicer SEO tags

If you have a final domain, open `generate.mjs` and set:

```js
const SITE_URL = "https://your-domain.com";
```

Rebuild, and each page gets an absolute `canonical` + `og:url`. Leaving it empty
is fine — those tags are simply omitted.

### Optional: custom domain

In **Settings → Pages → Custom domain**, add your domain and create the DNS
records GitHub shows you. (You can also add a `public/CNAME` file containing just
your domain so it survives rebuilds.)
