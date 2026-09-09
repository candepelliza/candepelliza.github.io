import { Container } from "./Container";
import { Reveal } from "./Reveal";

/** Oversized uppercase editorial page title. */
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
    <header className="border-b border-foreground pb-8 pt-8 md:pb-10 md:pt-12">
      <Container>
        <div className="grid grid-cols-1 items-end gap-x-12 gap-y-6 lg:grid-cols-[1fr_auto]">
          <Reveal
            as="h1"
            delay={1}
            className="display-type text-[15vw] uppercase leading-[0.84] sm:text-[11vw] md:text-[8.5vw] lg:text-[7rem]"
          >
            {title}
          </Reveal>
          {intro && (
            <Reveal
              as="p"
              delay={2}
              className="max-w-md text-base leading-relaxed text-foreground/80 md:text-lg lg:pb-3 lg:text-right"
            >
              {intro}
            </Reveal>
          )}
        </div>
      </Container>
    </header>
  );
}
