import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/content/site";
import { publications } from "@/content/publications";
import { thesisSupervisions } from "@/content/thesis-supervisions";
import { researchProjects } from "@/content/research-projects";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { StaticEntryList } from "@/components/StaticEntryList";
import type { StaticEntry } from "@/content/types";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: `Research — ${site.name}` },
      {
        name: "description",
        content:
          "Academic publications, thesis supervisions, and research projects on urban innovation, data, and participation.",
      },
      { property: "og:title", content: `Research — ${site.name}` },
      {
        property: "og:description",
        content: "Publications, supervisions, and research projects.",
      },
      { property: "og:url", content: "/research" },
    ],
    links: [{ rel: "canonical", href: "/research" }],
  }),
  component: ResearchPage,
});

function Section({
  title,
  index,
  entries,
}: {
  title: string;
  index: string;
  entries: StaticEntry[];
}) {
  return (
    <section className="py-10 md:py-14">
      <Container>
        <SectionHeading title={title} index={index} count={entries.length} />
        <div className="mt-8">
          <StaticEntryList entries={entries} />
        </div>
      </Container>
    </section>
  );
}

function ResearchPage() {
  return (
    <>
      <PageHeader
        title="research"
        label="Academic work"
        index="03"
        intro="Peer-reviewed publications, graduate supervision, and funded research projects exploring data, participation, and the future of cities."
      />
      <Section title="Academic Publications" index="01" entries={publications} />
      <Section title="Thesis Supervisions" index="02" entries={thesisSupervisions} />
      <Section title="Research Projects" index="03" entries={researchProjects} />
    </>
  );
}

