import { createFileRoute, Link } from "@tanstack/react-router";
import { site } from "@/content/site";
import { selectedWorks } from "@/content/selected-works";
import { talksPress } from "@/content/talks-press";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { HorizontalCard } from "@/components/HorizontalCard";
import { ContactForm } from "@/components/ContactForm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${site.name} — ${site.role}` },
      { name: "description", content: site.metaDescription },
      { property: "og:title", content: `${site.name} — ${site.role}` },
      { property: "og:description", content: site.metaDescription },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  const featuredWorks = selectedWorks.slice(0, 3);
  const featuredTalks = talksPress.slice(0, 5);

  return (
    <>
      {/* Cover */}
      <section className="border-b border-foreground pb-8 pt-6 md:pb-10 md:pt-8">
        <Container>
          {/* name + portrait */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_19rem] lg:items-end lg:gap-12">
            <div>
              <h1 className="display-type text-[13vw] lowercase leading-[0.86] tracking-tight md:text-[8.5vw] lg:text-[6rem]">
                candela sol
                <br />
                pelliza<span className="text-accent">.</span>
              </h1>



              <p className="mt-7 max-w-xl text-lg leading-relaxed text-foreground/80 md:text-xl">
                {site.tagline}
              </p>

              <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2">
                <a
                  href={`mailto:${site.email}`}
                  className="label-type text-foreground underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-accent"
                >
                  {site.email}
                </a>
                {site.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="label-type text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="lg:pb-2">
              <ImagePlaceholder
                src={site.portraitImage}
                alt={`Portrait of ${site.name}`}
                label="Portrait"
                className="aspect-[3/4] w-full max-w-sm lg:max-w-none"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* About preview */}
      <section className="border-b border-border py-10 md:py-14">
        <Container>
          <SectionHeading title="About" index="01" />
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <p className="max-w-3xl text-lg leading-relaxed text-foreground/80 md:text-xl">
              {site.aboutPreview}
            </p>
            <Link
              to="/about"
              className="label-type whitespace-nowrap text-foreground underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-accent"
            >
              More about me →
            </Link>
          </div>
        </Container>
      </section>

      {/* Featured Selected Works */}
      <section className="border-b border-border py-10 md:py-14">
        <Container>
          <SectionHeading title="Selected Works" index="02" />
          <div className="mb-2 mt-6 flex justify-end">
            <Link
              to="/selected-works"
              className="label-type text-muted-foreground transition-colors hover:text-accent"
            >
              View all →
            </Link>
          </div>
          <div>
            {featuredWorks.map((entry, i) => (
              <HorizontalCard
                key={entry.slug}
                to="/selected-works/$slug"
                params={{ slug: entry.slug }}
                entry={entry}
                index={i}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Featured Talks & Press */}
      <section className="border-b border-border py-10 md:py-14">
        <Container>
          <SectionHeading title="Talks & Press" index="03" />
          <ul className="mt-6">
            {featuredTalks.map((entry) => (
              <li key={entry.slug}>
                <Link
                  to="/talks-press/$slug"
                  params={{ slug: entry.slug }}
                  className="group grid grid-cols-1 gap-1 border-b border-border py-4 transition-colors first:border-t md:grid-cols-[11rem_1fr] md:items-baseline md:gap-8"
                >
                  <span className="meta-type text-muted-foreground">
                    {entry.category}
                  </span>
                  <span className="text-base font-semibold lowercase leading-snug tracking-tight transition-colors group-hover:text-accent md:text-lg">
                    {entry.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex justify-end">
            <Link
              to="/talks-press"
              className="label-type text-muted-foreground transition-colors hover:text-accent"
            >
              View all →
            </Link>
          </div>
        </Container>
      </section>

      {/* Contact */}
      <section className="py-12 md:py-16">
        <Container>
          <SectionHeading title="Contact" index="04" />
          <div className="mt-7 grid grid-cols-1 gap-8 md:grid-cols-[auto_1fr] md:gap-16">
            <h2 className="display-type text-[12vw] leading-[0.86] md:text-[4.5rem]">
              let&apos;s
              <br />
              talk<span className="text-accent">.</span>
            </h2>
            <div>
              <p className="mb-8 max-w-xl text-base text-muted-foreground md:text-lg">
                For collaborations, commissions, talks, or research enquiries,
                send a message below.
              </p>
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
