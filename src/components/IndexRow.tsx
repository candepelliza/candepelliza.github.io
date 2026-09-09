import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { Reveal } from "./Reveal";
import { TagList } from "./TagList";

export interface IndexRowProps {
  /** Accepted for call-site compatibility; no longer rendered. */
  index?: number;
  /** Mono date / period line, shown above the title. */
  period?: string;
  /** Uppercase grotesk title. */
  title: string;
  /** Mono organisation / place / category line. */
  meta?: string;
  description?: string;
  tags?: string[];
  /** Right-column image. When absent the text column runs full width. */
  image?: string;
  /** Force the right-hand plate even without an image (hatched placeholder). */
  plate?: boolean;
  /** Extra detail lines revealed with the row (facts, links). */
  details?: ReactNode;
  /** Big titles for card collections, tighter titles for static lists. */
  size?: "lg" | "md";
  className?: string;
}

/**
 * One row of an editorial index list.
 *
 * Text on the left, an image plate on the right when the entry has one.
 * Everything fades in as the row enters view, and the row nearest the
 * reading position becomes the "active" one: full black ink, red index,
 * image at full opacity, while its neighbours sit back slightly.
 */
export function IndexRow({
  period,
  title,
  meta,
  description,
  tags,
  image,
  plate = false,
  details,
  size = "md",
  className,
}: IndexRowProps) {
  // Centred band → whichever row you are reading is the active one.
  const { ref, inView: active } = useInView<HTMLDivElement>({
    rootMargin: "-42% 0px -42% 0px",
    threshold: 0,
    once: false,
  });

  const hasPlate = Boolean(image) || plate;

  return (
    <div
      ref={ref}
      data-active={active ? "true" : "false"}
      className={cn(
        "index-row grid grid-cols-1 gap-x-10 gap-y-5 border-t border-foreground py-8 md:py-10",
        hasPlate && "md:grid-cols-[1fr_18rem] lg:grid-cols-[1fr_21rem]",
        className,
      )}
    >
      <div className="min-w-0">
        {period && (
          <Reveal className="mono-type flex flex-wrap items-center gap-x-3 gap-y-1 text-accent">
            <span>{period}</span>
          </Reveal>
        )}

        <Reveal
          as="h3"
          delay={1}
          className={cn(
            "index-row-title display-type mt-3 uppercase",
            size === "lg"
              ? "text-[10vw] leading-[0.86] sm:text-4xl md:text-5xl lg:text-[3.6rem]"
              : "text-2xl leading-[0.92] md:text-3xl lg:text-[2.4rem]",
          )}
        >
          {title}
        </Reveal>

        {meta && (
          <Reveal as="p" delay={2} className="mono-type mt-3 text-foreground">
            {meta}
          </Reveal>
        )}

        {description && (
          <Reveal
            as="p"
            delay={3}
            className="mt-3 max-w-2xl text-[0.95rem] leading-relaxed text-foreground/80"
          >
            {description}
          </Reveal>
        )}

        {(tags?.length || details) && (
          <Reveal delay={4} className="mt-5 flex flex-wrap items-center gap-x-8 gap-y-3">
            <TagList tags={tags} />
            {details}
          </Reveal>
        )}
      </div>

      {hasPlate && (
        <Reveal delay={1} className="index-row-plate">
          <ImagePlaceholder
            src={image}
            alt={title}
            label="Plate"
            className="aspect-[4/3] w-full grayscale md:aspect-[4/3]"
          />
        </Reveal>
      )}
    </div>
  );
}
