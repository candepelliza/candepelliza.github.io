import { cn } from "@/lib/utils";

/** Uppercase tracked label with a small accent marker. */
export function SectionLabel({
  children,
  className,
  marker = true,
}: {
  children: React.ReactNode;
  className?: string;
  marker?: boolean;
}) {
  return (
    <p className={cn("label-type flex items-center gap-2 text-muted-foreground", className)}>
      {marker && <span className="inline-block h-2 w-2 bg-accent" aria-hidden />}
      {children}
    </p>
  );
}
