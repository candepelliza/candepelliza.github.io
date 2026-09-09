import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";

/**
 * Reveals its children when they scroll into view: a short fade plus a
 * small upward move, with an optional stagger step so the lines of an
 * index row appear in reading order (index/date → title → meta → body).
 *
 * Honours `prefers-reduced-motion` (see `.reveal` in styles.css): the
 * movement is dropped and only opacity cross-fades.
 */
export function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  className,
}: {
  children: ReactNode;
  as?: ElementType;
  /** Stagger step index (0, 1, 2 …) — 70ms apart. */
  delay?: number;
  className?: string;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <Tag
      ref={ref}
      className={cn("reveal", inView && "is-revealed", className)}
      style={{ transitionDelay: `${delay * 70}ms` }}
    >
      {children}
    </Tag>
  );
}
