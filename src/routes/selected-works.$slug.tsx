import { createFileRoute, notFound } from "@tanstack/react-router";
import { site } from "@/content/site";
import { selectedWorks } from "@/content/selected-works";
import { CardDetail } from "@/components/CardDetail";

export const Route = createFileRoute("/selected-works/$slug")({
  loader: ({ params }) => {
    const project = selectedWorks.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const project = loaderData?.project;
    if (!project) return {};
    return {
      meta: [
        { title: `${project.title} — ${site.name}` },
        { name: "description", content: project.description },
        { property: "og:title", content: project.title },
        { property: "og:description", content: project.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/selected-works/${project.slug}` },
      ],
      links: [
        { rel: "canonical", href: `/selected-works/${project.slug}` },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: project.title,
            description: project.description,
            dateCreated: project.date,
            author: { "@type": "Person", name: site.name },
            keywords: project.tags.join(", "),
          }),
        },
      ],
    };
  },
  component: ProjectDetailPage,
  notFoundComponent: () => (
    <div className="px-6 py-32 text-center">
      <h1 className="display-type text-5xl">not found</h1>
      <p className="mt-4 text-muted-foreground">
        This project could not be found.
      </p>
    </div>
  ),
});

function ProjectDetailPage() {
  const { project } = Route.useLoaderData();
  return (
    <CardDetail
      entry={project}
      backTo="/selected-works"
      backLabel="Selected Works"
      label="Project"
    />
  );
}
