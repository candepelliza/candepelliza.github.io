import { cn } from "@/lib/utils";

/**
 * Editorial image slot. With `src` it renders the image inside a thin
 * black frame; otherwise it shows a deliberate hatched plate (never a
 * flat gray box) with a small corner caption.
 */
export function ImagePlaceholder({
  src,
  alt,
  className,
  label,
}: {
  src?: string;
  alt: string;
  className?: string;
  label?: string;
}) {
  if (src) {
    return (
      <div className={cn("border border-foreground", className)}>
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={alt}
      className={cn("image-frame relative flex items-center justify-center", className)}
    >
      {/* corner caption */}
      <span className="absolute left-2 top-2 label-type text-[0.58rem] text-foreground/70">
        Fig.
      </span>
      <span className="absolute bottom-2 right-2 meta-type text-[0.6rem] text-foreground/55">
        ○ {label ?? "Image"}
      </span>
      <span className="label-type text-[0.62rem] text-foreground/40">
        {label ?? "Image"}
      </span>
    </div>
  );
}
