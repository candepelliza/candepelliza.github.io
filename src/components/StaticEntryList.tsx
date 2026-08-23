import { cn } from "@/lib/utils";
import type { StaticEntry } from "@/content/types";
import { TagList } from "./TagList";

/**
 * Editorial list for STATIC content collections.
 * Fully left-aligned rows: date line → title/position → org & place →
 * description → tags. A thin black hairline divides each entry.
 */
export function StaticEntryList({ entries }: { entries: StaticEntry[] }) {
  return (
    <ul>
      {entries.map((entry, i) => (
        <li
          key={`${entry.title}-${i}`}
          className={cn(
            "pb-8 pt-8 first:pt-0",
            i < entries.length - 1 && "border-b border-foreground",
          )}
        >
          {entry.period && (
            <p className="text-sm font-light lowercase tracking-tight text-foreground">
              {entry.period}
            </p>
          )}

          <h3 className="mt-2 text-xl font-bold leading-tight tracking-tight md:text-2xl">
            {entry.title}
          </h3>

          {entry.meta && (
            <p className="mt-1 text-base font-medium text-foreground/70">
              {entry.meta}
            </p>
          )}

          {entry.description && (
            <p className="mt-3 max-w-2xl text-[0.95rem] leading-relaxed text-foreground/75">
              {entry.description}
            </p>
          )}

          {(entry.tags?.length || entry.link) && (
            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2">
              <TagList tags={entry.tags} />
              {entry.link && (
                <a
                  href={entry.link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="label-type text-foreground underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-accent"
                >
                  {entry.link.label} →
                </a>
              )}
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}
