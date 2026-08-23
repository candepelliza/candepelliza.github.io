// ---------------------------------------------------------------------------
// Static site generator — zero dependencies. Run: `node generate.mjs`
//
// Reads the plain-JS data in /content and writes ready-to-serve HTML into
// /docs (the folder GitHub Pages publishes). Every page uses RELATIVE links,
// so the output works at a project URL (user.github.io/repo), a user site,
// or a custom domain with no configuration.
//
// To edit CONTENT: change the files in /content, then re-run this script.
// To edit DESIGN: change /public/styles.css.
// ---------------------------------------------------------------------------

import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import fs from "node:fs";

import { site, navItems } from "./content/site.js";
import { selectedWorks } from "./content/selected-works.js";
import { talksPress, talksPressCategories } from "./content/talks-press.js";
import { professionalExperience } from "./content/professional-experience.js";
import { education } from "./content/education.js";
import { awards } from "./content/awards.js";
import { professionalDevelopment } from "./content/professional-development.js";
import { publications } from "./content/publications.js";
import { thesisSupervisions } from "./content/thesis-supervisions.js";
import { researchProjects } from "./content/research-projects.js";
import { courses } from "./content/courses.js";
import { workshops } from "./content/workshops.js";
import { guestLectures } from "./content/guest-lectures.js";
import { teachingMaterials } from "./content/teaching-materials.js";

// OPTIONAL: set your final public URL (e.g. "https://candelapelliza.com")
// to emit absolute <link rel="canonical"> + og:url tags. Leave "" to skip.
const SITE_URL = "";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "docs");
const PUBLIC = join(__dirname, "public");
const YEAR = new Date().getFullYear();

// ---------- helpers ----------
const esc = (s = "") =>
  String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

// Relative path prefix for a page at the given directory depth.
const pfx = (depth) => (depth === 0 ? "" : "../".repeat(depth));

// Turn a root path ("/about") into a relative link for the current depth.
const linkTo = (path, depth) => {
  const p = pfx(depth);
  if (path === "/") return p === "" ? "./" : p;
  return p + path.replace(/^\//, "").replace(/\/?$/, "/");
};

// Resolve an asset or content URL (image, pdf, external, or #anchor).
const resolveUrl = (url, depth) => {
  if (!url) return "#";
  if (/^(https?:|mailto:|#)/.test(url)) return url;
  if (url.startsWith("/")) return pfx(depth) + url.replace(/^\//, "");
  return url;
};

const isExternal = (url) => /^(https?:|mailto:)/.test(url || "");

// ---------- shared partials ----------
function tagList(tags) {
  if (!tags || tags.length === 0) return "";
  const items = tags
    .map(
      (t, i) =>
        `<li>${i > 0 ? '<span class="tag-sep" aria-hidden="true">/</span>' : ""}<span class="tag">${esc(t)}</span></li>`
    )
    .join("");
  return `<ul class="taglist">${items}</ul>`;
}

function imageSlot({ src, alt, label, ratio, depth, wrapClass = "" }) {
  if (src) {
    return `<div class="frame ${ratio} ${wrapClass}"><img src="${resolveUrl(src, depth)}" alt="${esc(alt)}" loading="lazy"></div>`;
  }
  return `<div class="placeholder ${ratio} ${wrapClass}" role="img" aria-label="${esc(alt)}">
      <span class="ph-tl label-type">Fig.</span>
      <span class="ph-br meta-type">\u25CB ${esc(label || "Image")}</span>
      <span class="ph-c label-type">${esc(label || "Image")}</span>
    </div>`;
}

function header(active, depth) {
  const nav = navItems
    .map((item) => {
      const cls = item.to === active ? "is-active" : "";
      return `<a href="${linkTo(item.to, depth)}" class="${cls}">${esc(item.label)}</a>`;
    })
    .join("");
  const mobile = navItems
    .map((item) => {
      const cls = item.to === active ? "is-active" : "";
      return `<a href="${linkTo(item.to, depth)}" class="${cls}">${esc(item.label)}</a>`;
    })
    .join("");
  return `<header class="site-header">
    <div class="container">
      <a href="${linkTo("/", depth)}" class="logo" aria-label="${esc(site.name)} — home">
        <span class="logo-text">${esc(site.name.toLowerCase())}</span>
        <span class="accent-square" aria-hidden="true"></span>
      </a>
      <nav class="main-nav">${nav}</nav>
      <button type="button" class="nav-toggle label-type" data-nav-toggle aria-label="Toggle menu" aria-expanded="false">Menu</button>
    </div>
    <nav class="mobile-nav" data-mobile-nav>
      <div class="container">${mobile}</div>
    </nav>
  </header>`;
}

function footer(depth) {
  const nav = navItems
    .map((i) => `<a href="${linkTo(i.to, depth)}">${esc(i.label)}</a>`)
    .join("");
  const socials = site.socials
    .map(
      (s) =>
        `<a href="${esc(s.url)}" target="_blank" rel="noreferrer">${esc(s.label)}</a>`
    )
    .join("");
  return `<footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <p class="label-type footer-label">Get in touch</p>
          <a href="mailto:${esc(site.email)}" class="footer-email">${esc(site.email)}</a>
          <p class="footer-location">${esc(site.location)}</p>
        </div>
        <div class="footer-cols">
          <nav class="footer-col">
            <p class="label-type footer-label">Navigate</p>
            ${nav}
          </nav>
          <div class="footer-col">
            <p class="label-type footer-label">Elsewhere</p>
            ${socials}
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>\u00A9 ${YEAR} ${esc(site.name)}. All rights reserved.</p>
        <p>${esc(site.role)}</p>
      </div>
    </div>
  </footer>`;
}

function layout({ title, description, path, depth, active, body, jsonLd = [] }) {
  const canonical =
    SITE_URL && path ? SITE_URL.replace(/\/$/, "") + path : "";
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    description: site.metaDescription,
    email: `mailto:${site.email}`,
    address: site.location,
    sameAs: site.socials.map((s) => s.url),
  };
  const ld = [person, ...jsonLd]
    .map(
      (obj) =>
        `<script type="application/ld+json">${JSON.stringify(obj)}</script>`
    )
    .join("\n    ");

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${esc(title)}</title>
    <meta name="description" content="${esc(description)}" />
    <meta name="author" content="${esc(site.name)}" />
    <meta property="og:title" content="${esc(title)}" />
    <meta property="og:description" content="${esc(description)}" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="${esc(site.name)}" />
    <meta name="twitter:card" content="summary" />
    ${canonical ? `<link rel="canonical" href="${esc(canonical)}" />\n    <meta property="og:url" content="${esc(canonical)}" />` : ""}
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@300;400;500;600;700;800;900&display=swap" />
    <link rel="stylesheet" href="${pfx(depth)}styles.css" />
    ${ld}
  </head>
  <body>
    <div class="app">
      ${header(active, depth)}
      <main>
${body}
      </main>
      ${footer(depth)}
    </div>
    <script src="${pfx(depth)}main.js" defer></script>
  </body>
</html>`;
}

// ---------- reusable blocks ----------
function horizontalCard(entry, section, depth) {
  const href = linkTo(`${section}/${entry.slug}`, depth);
  return `<a href="${href}" class="hcard">
    <article class="hcard-grid">
      ${imageSlot({ src: entry.image, alt: entry.title, label: entry.category || "Plate", ratio: "ratio-4x5", depth })}
      <div class="hcard-body">
        <h3 class="hcard-title">${esc(entry.title)}</h3>
        <p class="hcard-desc">${esc(entry.description)}</p>
        <div class="hcard-foot">${tagList(entry.tags)}</div>
      </div>
    </article>
  </a>`;
}

function staticEntryList(entries, depth) {
  const rows = entries
    .map((entry) => {
      const period = entry.period
        ? `<p class="entry-period">${esc(entry.period)}</p>`
        : "";
      const meta = entry.meta
        ? `<p class="entry-meta">${esc(entry.meta)}</p>`
        : "";
      const desc = entry.description
        ? `<p class="entry-desc">${esc(entry.description)}</p>`
        : "";
      let foot = "";
      if ((entry.tags && entry.tags.length) || entry.link) {
        const link = entry.link
          ? `<a href="${resolveUrl(entry.link.url, depth)}" ${isExternal(entry.link.url) ? 'target="_blank" rel="noreferrer"' : ""} class="label-type link-underline">${esc(entry.link.label)} \u2192</a>`
          : "";
        foot = `<div class="entry-foot">${tagList(entry.tags)}${link}</div>`;
      }
      return `<li class="entry">${period}<h3 class="entry-title">${esc(entry.title)}</h3>${meta}${desc}${foot}</li>`;
    })
    .join("");
  return `<ul class="entry-list">${rows}</ul>`;
}

function sectionBlock(title, entries, depth) {
  return `<section class="section">
    <div class="container">
      <h2 class="section-heading">${esc(title)}</h2>
      ${staticEntryList(entries, depth)}
    </div>
  </section>`;
}

function pageHeader(title, intro) {
  return `<header class="page-header">
    <div class="container">
      <div class="page-header-grid">
        <h1 class="page-title">${esc(title)}</h1>
        ${intro ? `<p class="page-intro">${esc(intro)}</p>` : ""}
      </div>
    </div>
  </header>`;
}

function cardDetail(entry, { backTo, backLabel, label }, depth) {
  const gallery =
    entry.gallery && entry.gallery.length
      ? `<div class="detail-gallery">${entry.gallery
          .map((src, i) =>
            imageSlot({
              src,
              alt: `${entry.title} — image ${i + 1}`,
              label: `Fig. ${i + 1}`,
              ratio: "ratio-16x10",
              depth,
            })
          )
          .join("")}</div>`
      : "";
  const body = entry.body.map((p) => `<p>${esc(p)}</p>`).join("");
  const link = entry.link
    ? `<a href="${resolveUrl(entry.link.url, depth)}" ${isExternal(entry.link.url) ? 'target="_blank" rel="noreferrer"' : ""} class="label-type link-underline detail-link">${esc(entry.link.label)} \u2192</a>`
    : "";
  const facts =
    entry.facts && entry.facts.length
      ? `<aside class="facts"><hr /><dl>${entry.facts
          .map(
            (f) =>
              `<div class="fact"><dt class="label-type">${esc(f.label)}</dt><dd>${esc(f.value)}</dd></div>`
          )
          .join("")}</dl></aside>`
      : "";
  return `<article class="detail">
    <header class="detail-header">
      <div class="container">
        <div class="detail-topbar">
          <a href="${linkTo(backTo, depth)}" class="label-type back-link"><span class="accent-square" aria-hidden="true"></span>${esc(backLabel)}</a>
          <p class="meta-type" style="color:var(--muted-foreground)">${esc(label || entry.category || "")}</p>
        </div>
        <h1 class="detail-title">${esc(entry.title)}</h1>
        <p class="detail-desc">${esc(entry.description)}</p>
      </div>
    </header>
    <div class="container">
      <div class="detail-hero">${imageSlot({ src: entry.image, alt: entry.title, label: entry.category || "Plate", ratio: "ratio-16x9", depth })}</div>
      ${gallery}
      <div class="detail-body-grid">
        <div class="detail-body">
          ${body}
          ${tagList(entry.tags)}
          ${link}
        </div>
        ${facts}
      </div>
    </div>
  </article>`;
}

// ---------- page bodies ----------
function homeBody(depth) {
  const featuredWorks = selectedWorks.slice(0, 3);
  const featuredTalks = talksPress.slice(0, 5);
  const words = site.name.split(" ");
  const line1 = words.slice(0, -1).join(" ").toLowerCase();
  const line2 = words.slice(-1).join(" ").toLowerCase();

  const heroLinks = [
    `<a href="mailto:${esc(site.email)}" class="label-type link-underline">${esc(site.email)}</a>`,
    ...site.socials.map(
      (s) =>
        `<a href="${esc(s.url)}" target="_blank" rel="noreferrer" class="label-type link-muted">${esc(s.label)}</a>`
    ),
  ].join("");

  const worksCards = featuredWorks
    .map((e) => horizontalCard(e, "/selected-works", depth))
    .join("");

  const talkRows = featuredTalks
    .map(
      (e) =>
        `<a href="${linkTo(`/talks-press/${e.slug}`, depth)}" class="talk-row">
          <span class="meta-type talk-cat">${esc(e.category || "")}</span>
          <span class="talk-title">${esc(e.title)}</span>
        </a>`
    )
    .join("");

  return `<section class="hero">
    <div class="container">
      <div class="hero-grid">
        <div>
          <h1 class="hero-name">${esc(line1)}<br />${esc(line2)}<span class="accent-dot">.</span></h1>
          <p class="hero-tagline">${esc(site.tagline)}</p>
          <div class="hero-links">${heroLinks}</div>
        </div>
        <div>
          ${imageSlot({ src: site.portraitImage, alt: `Portrait of ${site.name}`, label: "Portrait", ratio: "ratio-3x4", depth, wrapClass: "portrait-slot" })}
        </div>
      </div>
    </div>
  </section>

  <section class="section rule">
    <div class="container">
      <h2 class="section-heading">About</h2>
      <div class="about-grid">
        <p class="about-text">${esc(site.aboutPreview)}</p>
        <a href="${linkTo("/about", depth)}" class="label-type link-underline nowrap">More about me \u2192</a>
      </div>
    </div>
  </section>

  <section class="section rule">
    <div class="container">
      <h2 class="section-heading">Selected Works</h2>
      <div class="viewall" style="margin:1.5rem 0 0.5rem">
        <a href="${linkTo("/selected-works", depth)}" class="label-type link-muted">View all \u2192</a>
      </div>
      <div>${worksCards}</div>
    </div>
  </section>

  <section class="section rule">
    <div class="container">
      <h2 class="section-heading">Talks &amp; Press</h2>
      <div class="talks-list">${talkRows}</div>
      <div class="viewall" style="margin-top:1.25rem">
        <a href="${linkTo("/talks-press", depth)}" class="label-type link-muted">View all \u2192</a>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <h2 class="section-heading">Contact</h2>
      <div class="contact-grid">
        <h3 class="contact-title">let&#39;s<br />talk<span class="accent-dot">.</span></h3>
        <div>
          <p class="contact-lead">For collaborations, commissions, talks, or research enquiries, send a message below.</p>
          <form class="form" data-contact-form data-email="${esc(site.email)}">
            <div class="form-row">
              <div class="form-field">
                <label for="cf-name">Name</label>
                <input id="cf-name" type="text" required placeholder="Your name" />
              </div>
              <div class="form-field">
                <label for="cf-email">Email</label>
                <input id="cf-email" type="email" required placeholder="you@email.com" />
              </div>
            </div>
            <div class="form-block">
              <div class="form-field">
                <label for="cf-message">Message</label>
                <textarea id="cf-message" rows="4" required placeholder="Tell me about your project or enquiry\u2026"></textarea>
              </div>
            </div>
            <button type="submit" class="btn"><span class="label-type">Send message</span></button>
          </form>
        </div>
      </div>
    </div>
  </section>`;
}

function talksIndexBody(depth) {
  return talksPressCategories
    .map((category, ci) => {
      const entries = talksPress.filter((e) => e.category === category);
      if (entries.length === 0) return "";
      const cards = entries
        .map((e) => horizontalCard(e, "/talks-press", depth))
        .join("");
      return `<section class="section">
        <div class="container">
          <h2 class="section-heading">${esc(category)}</h2>
          <div style="margin-top:2rem">${cards}</div>
        </div>
      </section>`;
    })
    .join("");
}

// ---------- write helpers ----------
function writePage(relDir, html) {
  const dir = join(OUT, relDir);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(join(dir, "index.html"), html, "utf8");
}

// ---------- build ----------
fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });
// copy all static assets (styles.css, main.js, images/, files/) into /docs
fs.cpSync(PUBLIC, OUT, { recursive: true });

// Home (depth 0)
writePage(
  ".",
  layout({
    title: `${site.name} — ${site.role}`,
    description: site.metaDescription,
    path: "/",
    depth: 0,
    active: "/",
    body: homeBody(0),
  })
);

// About (depth 1)
writePage(
  "about",
  layout({
    title: `About — ${site.name}`,
    description:
      "Professional experience, education, awards, and development of Candela Sol Pelliza — urban planner and researcher.",
    path: "/about",
    depth: 1,
    active: "/about",
    body:
      pageHeader("about", site.aboutPreview) +
      sectionBlock("Professional Experience", professionalExperience, 1) +
      sectionBlock("Education", education, 1) +
      sectionBlock("Awards", awards, 1) +
      sectionBlock("Academic & Professional Development", professionalDevelopment, 1),
  })
);

// Research (depth 1)
writePage(
  "research",
  layout({
    title: `Research — ${site.name}`,
    description:
      "Academic publications, thesis supervisions, and research projects on urban innovation, data, and participation.",
    path: "/research",
    depth: 1,
    active: "/research",
    body:
      pageHeader(
        "research",
        "Peer-reviewed publications, graduate supervision, and funded research projects exploring data, participation, and the future of cities."
      ) +
      sectionBlock("Academic Publications", publications, 1) +
      sectionBlock("Thesis Supervisions", thesisSupervisions, 1) +
      sectionBlock("Research Projects", researchProjects, 1),
  })
);

// Capacity Building (depth 1)
writePage(
  "capacity-building",
  layout({
    title: `Capacity Building — ${site.name}`,
    description:
      "Academic courses, workshops, guest lectures, and teaching materials on urban planning and innovation.",
    path: "/capacity-building",
    depth: 1,
    active: "/capacity-building",
    body:
      pageHeader(
        "capacity building",
        "Courses, workshops, and lectures that share methods and tools for more participatory, data-informed urban practice."
      ) +
      sectionBlock("Academic Courses", courses, 1) +
      sectionBlock("Workshops", workshops, 1) +
      sectionBlock("Guest Lectures", guestLectures, 1) +
      sectionBlock("Teaching Materials", teachingMaterials, 1),
  })
);

// Selected Works index (depth 1)
writePage(
  "selected-works",
  layout({
    title: `Selected Works — ${site.name}`,
    description:
      "Selected projects in urban planning, urban innovation, technology, and consultancy by Candela Sol Pelliza.",
    path: "/selected-works",
    depth: 1,
    active: "/selected-works",
    body:
      pageHeader(
        "selected works",
        "A selection of projects spanning master planning, urban innovation, technology, and consultancy."
      ) +
      `<section class="section"><div class="container">${selectedWorks
        .map((e) => horizontalCard(e, "/selected-works", 1))
        .join("")}</div></section>`,
  })
);

// Selected Works detail pages (depth 2)
for (const project of selectedWorks) {
  writePage(
    `selected-works/${project.slug}`,
    layout({
      title: `${project.title} — ${site.name}`,
      description: project.description,
      path: `/selected-works/${project.slug}`,
      depth: 2,
      active: "/selected-works",
      body: cardDetail(
        project,
        { backTo: "/selected-works", backLabel: "Selected Works", label: "Project" },
        2
      ),
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: project.title,
          description: project.description,
          dateCreated: project.date,
          author: { "@type": "Person", name: site.name },
          keywords: project.tags.join(", "),
        },
      ],
    })
  );
}

// Talks & Press index (depth 1)
writePage(
  "talks-press",
  layout({
    title: `Talks & Press — ${site.name}`,
    description:
      "Invited talks, conference presentations, panels, media, press, and interviews by Candela Sol Pelliza.",
    path: "/talks-press",
    depth: 1,
    active: "/talks-press",
    body:
      pageHeader(
        "talks & press",
        "Invited talks, conference presentations, panels and public events, media appearances, and interviews."
      ) + talksIndexBody(1),
  })
);

// Talks & Press detail pages (depth 2)
for (const entry of talksPress) {
  writePage(
    `talks-press/${entry.slug}`,
    layout({
      title: `${entry.title} — ${site.name}`,
      description: entry.description,
      path: `/talks-press/${entry.slug}`,
      depth: 2,
      active: "/talks-press",
      body: cardDetail(
        entry,
        { backTo: "/talks-press", backLabel: "Talks & Press" },
        2
      ),
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: entry.title,
          description: entry.description,
          dateCreated: entry.date,
          author: { "@type": "Person", name: site.name },
          keywords: entry.tags.join(", "),
        },
      ],
    })
  );
}

// 404 page (served by GitHub Pages for unknown paths — depth 0 relative links)
fs.writeFileSync(
  join(OUT, "404.html"),
  layout({
    title: `Page not found — ${site.name}`,
    description: "The page you're looking for doesn't exist or has been moved.",
    path: "",
    depth: 0,
    active: "",
    body: `<div class="notfound"><div>
      <h1>404</h1>
      <p>The page you're looking for doesn't exist or has been moved.</p>
      <p style="margin-top:1.5rem"><a href="${linkTo("/", 0)}" class="btn"><span class="label-type">Go home</span></a></p>
    </div></div>`,
  }),
  "utf8"
);

// Prevent GitHub Pages from running Jekyll over the output.
fs.writeFileSync(join(OUT, ".nojekyll"), "", "utf8");

// ---------- report ----------
const pageCount =
  6 + selectedWorks.length + talksPress.length + 1; // fixed pages + details + 404
console.log(`Built ${pageCount} pages into /docs`);
console.log(`  • Home, About, Selected Works, Research, Capacity Building, Talks & Press`);
console.log(`  • ${selectedWorks.length} project pages, ${talksPress.length} talks/press pages, 404`);
if (!SITE_URL) {
  console.log("Note: SITE_URL is empty — canonical/og:url tags omitted (optional).");
}
