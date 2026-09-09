import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

/**
 * Editorial subsection heading rendered ABOVE its content: an oversized
 * uppercase grotesk title in the accent colour.
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
    <Reveal className={cn("block", className)}>
      <h2 className="display-type text-[13vw] uppercase leading-[0.84] text-accent sm:text-6xl md:text-7xl lg:text-[5.5rem]">
        {title}
      </h2>
    </Reveal>
  );
}
