/** Inline row of small editorial tags, separated by an accent slash. */
export function TagList({ tags }: { tags?: string[] }) {
  if (!tags || tags.length === 0) return null;
  return (
    <ul className="flex flex-wrap items-center gap-x-2 gap-y-1">
      {tags.map((tag, i) => (
        <li key={tag} className="flex items-center gap-2">
          {i > 0 && (
            <span className="text-accent" aria-hidden>
              /
            </span>
          )}
          <span className="mono-type text-foreground">{tag}</span>
        </li>
      ))}
    </ul>
  );
}
