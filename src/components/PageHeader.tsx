import { Container } from "./Container";

/** Oversized editorial page title. */
export function PageHeader({
  title,
  intro,
}: {
  title: string;
  intro?: string;
  /** Accepted for call-site compatibility; no longer rendered. */
  label?: string;
  /** Accepted for call-site compatibility; no longer rendered. */
  index?: string;
}) {
  return (
    <header className="border-b border-foreground pb-6 pt-8 md:pb-8 md:pt-12">
      <Container>
        <div className="grid grid-cols-1 items-end gap-x-12 gap-y-6 lg:grid-cols-[1fr_auto]">
          <h1 className="display-type text-[16vw] lowercase leading-[0.82] sm:text-[12vw] md:text-[9vw] lg:text-[7.5rem]">
            {title}
          </h1>
          {intro && (
            <p className="max-w-md text-base leading-relaxed text-foreground/75 md:text-lg lg:pb-3 lg:text-right">
              {intro}
            </p>
          )}
        </div>
      </Container>
    </header>
  );
}
