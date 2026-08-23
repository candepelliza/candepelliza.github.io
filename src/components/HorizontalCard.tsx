import { Link } from "@tanstack/react-router";
import type { CardEntry } from "@/content/types";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { TagList } from "./TagList";

/**
 * Editorial card for CARD-based collections.
 * Small image on the LEFT, text on the right. Title is the dominant
 * element. The entire card is a single link to the detail page.
 */
export function HorizontalCard({
  to,
  params,
  entry,
}: {
  /** Route path, e.g. "/selected-works/$slug". */
  to: string;
  params: Record<string, string>;
  entry: CardEntry;
  /** Accepted for call-site compatibility; no longer rendered. */
  index?: number;
}) {
  return (
    <Link
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      to={to as any}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      params={params as any}
      className="group block border-b border-foreground py-7 first:border-t md:py-8"
    >
      <article className="grid grid-cols-[6.5rem_1fr] gap-5 md:grid-cols-[12rem_1fr] md:gap-10">
        <div>
          <ImagePlaceholder
            src={entry.image}
            alt={entry.title}
            label={entry.category ?? "Plate"}
            className="aspect-[4/5] w-full grayscale transition-opacity duration-300 group-hover:opacity-90"
          />
        </div>

        <div className="flex flex-col">
          <h3 className="display-type text-2xl lowercase leading-[0.95] tracking-tight transition-colors group-hover:text-accent md:text-3xl lg:text-4xl">
            {entry.title}
          </h3>
          <p className="mt-3 max-w-xl text-[0.95rem] leading-relaxed text-foreground/75">
            {entry.description}
          </p>
          <div className="mt-auto pt-5">
            <TagList tags={entry.tags} />
          </div>
        </div>
      </article>
    </Link>
  );
}
