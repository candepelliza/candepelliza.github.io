import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/content/site";
import { courses } from "@/content/courses";
import { workshops } from "@/content/workshops";
import { guestLectures } from "@/content/guest-lectures";
import { teachingMaterials } from "@/content/teaching-materials";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { StaticEntryList } from "@/components/StaticEntryList";
import type { StaticEntry } from "@/content/types";

export const Route = createFileRoute("/capacity-building")({
  head: () => ({
    meta: [
      { title: `Capacity Building — ${site.name}` },
      {
        name: "description",
        content:
          "Academic courses, workshops, guest lectures, and teaching materials on urban planning and innovation.",
      },
      { property: "og:title", content: `Capacity Building — ${site.name}` },
      {
        property: "og:description",
        content: "Courses, workshops, guest lectures, and teaching materials.",
      },
      { property: "og:url", content: "/capacity-building" },
    ],
    links: [{ rel: "canonical", href: "/capacity-building" }],
  }),
  component: CapacityBuildingPage,
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

function CapacityBuildingPage() {
  return (
    <>
      <PageHeader
        title="capacity building"
        label="Teaching & training"
        index="05"
        intro="Courses, workshops, and lectures that share methods and tools for more participatory, data-informed urban practice."
      />
      <Section title="Academic Courses" index="01" entries={courses} />
      <Section title="Workshops" index="02" entries={workshops} />
      <Section title="Guest Lectures" index="03" entries={guestLectures} />
      <Section title="Teaching Materials" index="04" entries={teachingMaterials} />
    </>
  );
}

