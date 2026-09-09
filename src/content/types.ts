// Shared content types for the portfolio.
// Edit content in the individual files in this folder — not in the page layouts.

/**
 * A static editorial entry. Rendered inline as a list/timeline row.
 * Does NOT create a detail page.
 */
export interface StaticEntry {
  /** Optional left-column marker: a year, a range, or a short label. */
  period?: string;
  /** Main line. */
  title: string;
  /** Secondary line under the title (e.g. organisation, journal, venue). */
  meta?: string;
  /** Optional descriptive paragraph. */
  description?: string;
  /** Optional small tags. */
  tags?: string[];
  /** Optional external link (e.g. DOI, publisher, project site). */
  link?: { label: string; url: string };
  /**
   * Optional image for this row, shown as a plate in the right column of
   * the index list. Place files in /public (e.g. "/images/course-01.jpg").
   * Omit it and the row keeps the text column full width.
   */
  image?: string;
}

/**
 * A card-based entry. Renders as a full-width horizontal card and
 * AUTO-GENERATES a detail page at /<collection>/<slug>.
 */
export interface CardEntry {
  /** URL slug — must be unique within its collection, lowercase-with-dashes. */
  slug: string;
  title: string;
  /** Short blurb shown on the card. */
  description: string;
  /** Year or date shown on the card and detail page. */
  date: string;
  /** Grouping label (used by Talks & Press). */
  category?: string;
  tags: string[];
  /**
   * Optional thumbnail image path. Used on the card and as the hero image
   * on the detail page. Leave undefined to show a neutral placeholder.
   * Place files in /public (e.g. "/images/project-01.jpg").
   */
  image?: string;
  /**
   * Optional array of additional images for the detail page gallery.
   * Place files in /public (e.g. ["/images/project-01-plan.jpg", ...]).
   */
  gallery?: string[];
  /** Long-form paragraphs for the detail page. */
  body: string[];
  /** Optional facts shown on the detail page. */
  facts?: { label: string; value: string }[];
  /** Optional external link shown on the detail page. */
  link?: { label: string; url: string };
}
