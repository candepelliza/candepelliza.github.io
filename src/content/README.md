# Adding and managing images

All portfolio content is stored in the TypeScript files in this folder. Images are not embedded in the code; they are referenced by path and served from the `public/` folder at the root of the project.

## Where to put image files

1. Add your images to `public/images/` (create the folder if it does not exist).
2. Reference each image with a root-relative path, e.g. `/images/portrait.jpg`.
3. You can also use an external URL, e.g. `https://example.com/photo.jpg`.

## Image types

Use `.jpg`, `.png`, `.webp`, or `.avif`. For photographs, `.jpg` or `.webp` is recommended.

## Where images appear

### 1. Home portrait

Edit `src/content/site.ts`:

```ts
portraitImage: "/images/portrait.jpg",
```

Leave it as `undefined` to keep the neutral hatched placeholder.

### 2. Selected Works and Talks & Press cards

Each card entry has an optional `image` field. This image is used:

- as the small thumbnail on the listing card, and
- as the large hero image at the top of the detail page.

Example in `src/content/selected-works.ts`:

```ts
{
  slug: "riverside-regeneration",
  title: "Riverside Regeneration Master Plan",
  description: "...",
  date: "2023",
  tags: ["Master Planning", "Climate", "Public Space"],
  image: "/images/riverside-regeneration-hero.jpg",
  // ...
}
```

The same pattern works in `src/content/talks-press.ts`.

### 3. Project / talk detail-page galleries

Add a `gallery` array to show extra images below the hero on the detail page:

```ts
{
  slug: "riverside-regeneration",
  title: "Riverside Regeneration Master Plan",
  image: "/images/riverside-regeneration-hero.jpg",
  gallery: [
    "/images/riverside-regeneration-plan.jpg",
    "/images/riverside-regeneration-section.jpg",
    "/images/riverside-regeneration-workshop.jpg",
  ],
  // ...
}
```

Gallery images are rendered in a two-column grid on desktop and a single column on mobile.

## Placeholders

If you leave `image` and `gallery` undefined, the site shows a deliberate editorial placeholder: a thin black frame with a subtle diagonal hatch pattern and a small corner caption. This is intentional and keeps the design consistent until real images are added.

## Tips

- Keep file names simple, lowercase, and without spaces: `project-name-01.jpg`.
- Resize large images before uploading. Hero images work well around 1600–2400 px wide; card thumbnails around 800–1200 px wide.
- The design applies a grayscale filter to all images for the monochrome editorial look.
