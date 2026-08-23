import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/content/site";
import { professionalExperience } from "@/content/professional-experience";
import { education } from "@/content/education";
import { awards } from "@/content/awards";
import { professionalDevelopment } from "@/content/professional-development";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { StaticEntryList } from "@/components/StaticEntryList";
import type { StaticEntry } from "@/content/types";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About — ${site.name}` },
      {
        name: "description",
        content:
          "Professional experience, education, awards, and development of Candela Sol Pelliza — urban planner and researcher.",
      },
      { property: "og:title", content: `About — ${site.name}` },
      {
        property: "og:description",
        content: "Experience, education, awards and development.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
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

function AboutPage() {
  return (
    <>
      <PageHeader title="about" label="Who I am" index="01" intro={site.aboutPreview} />
      <Section title="Professional Experience" index="01" entries={professionalExperience} />
      <Section title="Education" index="02" entries={education} />
      <Section title="Awards" index="03" entries={awards} />
      <Section
        title="Academic & Professional Development"
        index="04"
        entries={professionalDevelopment}
      />
    </>
  );
}

