import { createFileRoute, notFound } from "@tanstack/react-router";
import { site } from "@/content/site";
import { workshops } from "@/content/workshops";
import { CardDetail } from "@/components/CardDetail";

export const Route = createFileRoute("/workshops/$slug")({
  loader: ({ params }) => {
    const workshop = workshops.find((w) => w.slug === params.slug);
    if (!workshop) throw notFound();
    return { workshop };
  },
  head: ({ loaderData }) => {
    const workshop = loaderData?.workshop;
    if (!workshop) return {};
    return {
      meta: [
        { title: `${workshop.title} — ${site.name}` },
        { name: "description", content: workshop.description },
        { property: "og:title", content: workshop.title },
        { property: "og:description", content: workshop.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/workshops/${workshop.slug}` },
      ],
      links: [{ rel: "canonical", href: `/workshops/${workshop.slug}` }],
    };
  },
  component: WorkshopDetailPage,
  notFoundComponent: () => (
    <div className="px-6 py-32 text-center">
      <h1 className="display-type text-5xl">not found</h1>
      <p className="mt-4 text-muted-foreground">
        This workshop could not be found.
      </p>
    </div>
  ),
});

function WorkshopDetailPage() {
  const { workshop } = Route.useLoaderData();
  return (
    <CardDetail
      entry={workshop}
      backTo="/capacity-building"
      backLabel="Capacity Building"
      label="Workshop"
    />
  );
}
