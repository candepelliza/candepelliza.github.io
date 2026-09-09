# Bold Grotesk Editorial — index-list redesign

Adopt the index-list direction across the whole site: every collection becomes a numbered index list where each row reveals its image and details progressively as you scroll, while the aesthetic moves to warm paper, uppercase grotesk titles, mono microtype, and red accents.

## Visual system

- Background warms from `#f5f5f3` to `#f7f3ea`; image/detail plates on `#ece7dc`. Ink stays near-black, accent stays `#FF4E4E`.
- Titles: Hanken Grotesk 800, UPPERCASE, tight tracking, much larger than today. No italic serif accent.
- Microtype (indices, dates, categories, places, fact labels, nav, footer): JetBrains Mono uppercase, wide letter-spacing.
- Red is used for: bracketed indices `[ 01 ]`, section labels `[ SELECTED WORKS ]`, dates/periods, fact labels, back links, active nav. Body copy, titles, and tag chips stay black.
- Hairlines stay near-black; no grey dividers, no light greys.

## Index list behaviour (the core of this direction)

Every list — static collections and card collections alike — renders as rows in a two-column grid: text left, a right-hand column reserved for the row's plate.

- **Rows with an image** show that image in the right column. It fades and slides in when the row scrolls into view, and stays aligned to the row.
- **Rows with details** (facts, meta, links, longer description) reveal those details in the same staggered way as the row enters view: index and date first, then title, then meta, then description, then tags/facts.
- **Rows without an image** keep the left text column full-width — no empty plate, no placeholder box. Rows without details simply show fewer lines.
- On the index pages for Selected Works and Talks & Press, the active row (the one nearest the reading position) is full black with a red index and its image at full opacity; rows above/below dim slightly. Hover has the same effect.
- Mobile: single column, image appears inline under the row's metadata, same reveal on entry.
- `prefers-reduced-motion`: opacity-only cross-fade, no movement, everything visible.

## Pages

- **Home** — oversized two-line uppercase name, red role label, two short intro columns plus a portrait plate, then the Selected Works index list with images on the right.
- **Static sections** (about, research, capacity building) — uppercase page title, red bracketed section labels, index rows with red `[ nn ]` + date line, uppercase position/title, mono organisation/place line, description, tags. Right column carries an image only for entries that have one.
- **Index pages** (selected works, talks & press) — full index list, scroll-reactive image + detail reveal, whole row clickable through to the detail page.
- **Detail pages** — red `[ 01 / 04 ]` counter, large uppercase title, mono metadata line, intro paragraph, tags, a red-labelled fact row, then hero image plus gallery, all revealing on scroll.

## Technical notes

- Update tokens in `src/styles.css` (background, plate colour, mono font family) and add the JetBrains Mono `<link>` in `src/routes/__root.tsx` next to Hanken Grotesk.
- Add a small reveal primitive (`src/components/Reveal.tsx`) built on `IntersectionObserver` — no new dependency — plus an `useActiveRow` hook for the active/dimmed index state.
- Extend `StaticEntry` in `src/content/types.ts` with optional `image?: string` so static rows can carry a plate; existing entries without it keep the single-column layout.
- Rework `StaticEntryList`, `HorizontalCard` (into an index row), `SectionHeading`, `SectionLabel`, `PageHeader`, `CardDetail`, `Header`, `Footer` for the new typography and grid. Routes, content files, and the URL structure stay exactly as they are.
- Keep the red dot cursor and the hatch `image-frame` treatment for missing images.
- No changes to the GitHub Pages / static-export question in this pass.
