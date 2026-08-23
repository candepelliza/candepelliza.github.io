import { Link } from "@tanstack/react-router";
import type { CardEntry } from "@/content/types";
import { Container } from "./Container";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { TagList } from "./TagList";
import { Divider } from "./Divider";

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
              className="label-type flex items-center gap-2 text-foreground transition-colors hover:text-accent"
            >
              <span className="inline-block h-1.5 w-1.5 bg-accent" aria-hidden />
              {backLabel}
            </Link>
            <p className="meta-type text-muted-foreground">
              {label ?? entry.category}
            </p>
          </div>
          <h1 className="display-type mt-6 text-[12vw] lowercase leading-[0.86] tracking-tight md:text-[5.5rem]">
            {entry.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-foreground/75">
            {entry.description}
          </p>
        </Container>
      </header>

      <Container className="mt-8">
        <ImagePlaceholder
          src={entry.image}
          alt={entry.title}
          label={entry.category ?? "Plate"}
          className="aspect-[16/9] w-full grayscale"
        />

        {entry.gallery && entry.gallery.length > 0 && (
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
            {entry.gallery.map((src, i) => (
              <ImagePlaceholder
                key={i}
                src={src}
                alt={`${entry.title} — image ${i + 1}`}
                label={`Fig. ${i + 1}`}
                className="aspect-[16/10] w-full grayscale"
              />
            ))}
          </div>
        )}

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-[1fr_18rem] md:gap-16">
          <div className="max-w-2xl space-y-5 text-base leading-relaxed text-foreground/85 md:text-lg">
            {entry.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <div className="pt-2">
              <TagList tags={entry.tags} />
            </div>
            {entry.link && (
              <a
                href={entry.link.url}
                target="_blank"
                rel="noreferrer"
                className="label-type inline-block text-foreground underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-accent"
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
                  <div key={fact.label}>
                    <dt className="label-type text-muted-foreground">
                      {fact.label}
                    </dt>
                    <dd className="mt-1 text-base font-semibold">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          )}
        </div>
      </Container>
    </article>
  );
}
