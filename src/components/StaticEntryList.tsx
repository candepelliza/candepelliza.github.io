import type { StaticEntry } from "@/content/types";
import { IndexRow } from "./IndexRow";

/**
 * Editorial INDEX LIST for static content collections.
 * Numbered rows: red [ nn ] + date → uppercase title → mono org/place →
 * description → tags. Entries that carry an `image` also get a plate in
 * the right column; entries without one keep the text full width.
 * Everything reveals as you scroll.
 */
export function StaticEntryList({ entries }: { entries: StaticEntry[] }) {
  return (
    <div className="border-b border-foreground">
      {entries.map((entry, i) => (
        <IndexRow
          key={`${entry.title}-${i}`}
          index={i + 1}
          period={entry.period}
          title={entry.title}
          meta={entry.meta}
          description={entry.description}
          tags={entry.tags}
          image={entry.image}
          details={
            entry.link && (
              <a
                href={entry.link.url}
                target="_blank"
                rel="noreferrer"
                className="mono-type text-foreground underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-accent"
              >
                {entry.link.label} →
              </a>
            )
          }
        />
      ))}
    </div>
  );
}
