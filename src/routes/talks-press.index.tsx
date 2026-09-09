import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/content/site";
import {
  talksPress,
  talksPressCategories,
} from "@/content/talks-press";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { HorizontalCard } from "@/components/HorizontalCard";

export const Route = createFileRoute("/talks-press/")({
  head: () => ({
    meta: [
      { title: `Talks & Press — ${site.name}` },
      {
        name: "description",
        content:
          "Invited talks, conference presentations, panels, media, press, and interviews by Candela Sol Pelliza.",
      },
      { property: "og:title", content: `Talks & Press — ${site.name}` },
      {
        property: "og:description",
        content: "Talks, panels, media, press, and interviews.",
      },
      { property: "og:url", content: "/talks-press" },
    ],
    links: [{ rel: "canonical", href: "/talks-press" }],
  }),
  component: TalksPressPage,
});

function TalksPressPage() {
  return (
    <>
      <PageHeader
        title="talks & press"
        label="Public engagement"
        index="06"
        intro="Invited talks, conference presentations, panels and public events, media appearances, and interviews."
      />
      {talksPressCategories.map((category, ci) => {
        const entries = talksPress.filter((e) => e.category === category);
        if (entries.length === 0) return null;
        return (
          <section key={category} className="py-10 md:py-14">
            <Container>
              <SectionHeading
                title={category}
                index={String(ci + 1).padStart(2, "0")}
                count={entries.length}
              />
              <div className="mt-8">

                {entries.map((entry, i) => (
                  <HorizontalCard
                    key={entry.slug}
                    to="/talks-press/$slug"
                    params={{ slug: entry.slug }}
                    entry={entry}
                    index={i}
                  />
                ))}
              </div>
            </Container>
          </section>
        );
      })}
    </>
  );
}

