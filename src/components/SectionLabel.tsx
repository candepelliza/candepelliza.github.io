import { cn } from "@/lib/utils";

/** Red bracketed mono label. */
export function SectionLabel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
  /** Accepted for call-site compatibility; no longer rendered. */
  marker?: boolean;
}) {
  return (
    <p className={cn("mono-type text-accent", className)}>[ {children} ]</p>
  );
}
