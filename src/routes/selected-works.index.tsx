import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/content/site";
import { selectedWorks } from "@/content/selected-works";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/Container";
import { HorizontalCard } from "@/components/HorizontalCard";

export const Route = createFileRoute("/selected-works/")({
  head: () => ({
    meta: [
      { title: `Selected Works — ${site.name}` },
      {
        name: "description",
        content:
          "Selected projects in urban planning, urban innovation, technology, and consultancy by Candela Sol Pelliza.",
      },
      { property: "og:title", content: `Selected Works — ${site.name}` },
      {
        property: "og:description",
        content: "Selected projects across planning, innovation, and research.",
      },
      { property: "og:url", content: "/selected-works" },
    ],
    links: [{ rel: "canonical", href: "/selected-works" }],
  }),
  component: SelectedWorksPage,
});

function SelectedWorksPage() {
  return (
    <>
      <PageHeader
        title="selected works"
        label="Projects"
        index="02"
        intro="A selection of projects spanning master planning, urban innovation, technology, and consultancy."
      />
      <section className="py-8 md:py-12">
        <Container>
          {selectedWorks.map((entry, i) => (
            <HorizontalCard
              key={entry.slug}
              to="/selected-works/$slug"
              params={{ slug: entry.slug }}
              entry={entry}
              index={i}
            />
          ))}
        </Container>
      </section>
    </>
  );
}
