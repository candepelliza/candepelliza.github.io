import { cn } from "@/lib/utils";

/**
 * Editorial subsection heading rendered ABOVE its content. Large, bold,
 * sentence-case (first letter capital, rest lower) — reads like a title.
 * No rule above the heading.
 */
export function SectionHeading({
  title,
  className,
}: {
  title: string;
  /** Accepted for call-site compatibility; no longer rendered. */
  index?: string;
  /** Accepted for call-site compatibility; no longer rendered. */
  count?: number;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "display-type text-3xl lowercase first-letter:uppercase leading-[0.95] tracking-tight md:text-4xl lg:text-5xl",
        className,
      )}
    >
      {title}
    </h2>
  );
}
