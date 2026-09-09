import { Link } from "@tanstack/react-router";
import type { CardEntry } from "@/content/types";
import { Container } from "./Container";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { TagList } from "./TagList";
import { Divider } from "./Divider";
import { Reveal } from "./Reveal";

/** Shared detail-page template for Selected Works and Talks & Press. */
export function CardDetail({
  entry,
  backTo,
  backLabel,
  label,
}: {
  entry: CardEntry;
  backTo: string;
  backLabel: string;
  label?: string;
}) {
  return (
    <article className="pb-20">
      <header className="border-b border-foreground pb-8 pt-8 md:pt-12">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-2 border-b border-border pb-4">
            <Link
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              to={backTo as any}
              className="mono-type flex items-center gap-2 text-accent transition-colors hover:text-foreground"
            >
              <span className="inline-block h-1.5 w-1.5 bg-accent" aria-hidden />
              {backLabel}
            </Link>
            <p className="mono-type text-foreground">
              {label ?? entry.category}
            </p>
          </div>
          <h1 className="display-type mt-6 text-[13vw] uppercase leading-[0.84] md:text-[6rem]">
            {entry.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-foreground/75">
            {entry.description}
          </p>
        </Container>
      </header>

      <Container className="mt-8">
        <Reveal>
          <ImagePlaceholder
            src={entry.image}
          alt={entry.title}
          label={entry.category ?? "Plate"}
            className="aspect-[16/9] w-full"
          />
        </Reveal>

        {entry.gallery && entry.gallery.length > 0 && (
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
            {entry.gallery.map((src, i) => (
              <Reveal key={i} delay={i % 2}>
                <ImagePlaceholder
                src={src}
                alt={`${entry.title} — image ${i + 1}`}
                label={`Fig. ${i + 1}`}
                  className="aspect-[16/10] w-full"
                />
              </Reveal>
            ))}
          </div>
        )}

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-[1fr_18rem] md:gap-16">
          <div className="max-w-2xl space-y-5 text-base leading-relaxed text-foreground/85 md:text-lg">
            {entry.body.map((p, i) => (
              <Reveal as="p" key={i} delay={i % 3}>
                {p}
              </Reveal>
            ))}
            <div className="pt-2">
              <TagList tags={entry.tags} />
            </div>
            {entry.link && (
              <a
                href={entry.link.url}
                target="_blank"
                rel="noreferrer"
                className="mono-type inline-block text-foreground underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-accent"
              >
                {entry.link.label} →
              </a>
            )}
          </div>

          {entry.facts && entry.facts.length > 0 && (
            <aside>
              <Divider className="border-foreground" />
              <dl className="mt-5 space-y-4">
                {entry.facts.map((fact) => (
                  <Reveal key={fact.label}>
                    <dt className="mono-type text-accent">
                      {fact.label}
                    </dt>
                    <dd className="mt-1 text-base font-semibold">{fact.value}</dd>
                  </Reveal>
                ))}
              </dl>
            </aside>
          )}
        </div>
      </Container>
    </article>
  );
}
