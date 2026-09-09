import { Link } from "@tanstack/react-router";
import type { CardEntry } from "@/content/types";
import { IndexRow } from "./IndexRow";

/**
 * Index-list row for CARD-based collections. The whole row links to the
 * detail page: year on top, oversized uppercase title, location line,
 * description, tags, and the entry image as a plate in the right column.
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
  const location = entry.facts?.find((f) =>
    ["location", "place", "venue", "city"].includes(f.label.toLowerCase()),
  )?.value;

  return (
    <Link
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      to={to as any}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      params={params as any}
      className="group block"
    >
      <IndexRow
        period={entry.date}
        title={entry.title}
        meta={location ?? entry.category}
        description={entry.description}
        tags={entry.tags}
        image={entry.image}
        plate
        size="lg"
        details={
          <span className="mono-type text-accent opacity-0 transition-opacity group-hover:opacity-100">
            Read →
          </span>
        }
      />
    </Link>
  );
}
