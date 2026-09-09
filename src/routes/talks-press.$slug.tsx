import { createFileRoute, notFound } from "@tanstack/react-router";
import { site } from "@/content/site";
import { talksPress } from "@/content/talks-press";
import { CardDetail } from "@/components/CardDetail";

export const Route = createFileRoute("/talks-press/$slug")({
  loader: ({ params }) => {
    const entry = talksPress.find((p) => p.slug === params.slug);
    if (!entry) throw notFound();
    return { entry };
  },
  head: ({ loaderData }) => {
    const entry = loaderData?.entry;
    if (!entry) return {};
    return {
      meta: [
        { title: `${entry.title} — ${site.name}` },
        { name: "description", content: entry.description },
        { property: "og:title", content: entry.title },
        { property: "og:description", content: entry.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/talks-press/${entry.slug}` },
      ],
      links: [{ rel: "canonical", href: `/talks-press/${entry.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: entry.title,
            description: entry.description,
            dateCreated: entry.date,
            author: { "@type": "Person", name: site.name },
            keywords: entry.tags.join(", "),
          }),
        },
      ],
    };
  },
  component: TalkPressDetailPage,
  notFoundComponent: () => (
    <div className="px-6 py-32 text-center">
      <h1 className="display-type text-5xl">not found</h1>
      <p className="mt-4 text-muted-foreground">This entry could not be found.</p>
    </div>
  ),
});

function TalkPressDetailPage() {
  const { entry } = Route.useLoaderData();
  return (
    <CardDetail entry={entry} backTo="/talks-press" backLabel="Talks & Press" />
  );
}
