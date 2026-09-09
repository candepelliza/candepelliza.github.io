
// CAPACITY BUILDING → Workshops (card-based → generates /workshops/<slug>)
//
// IMAGES:
// - Add image files to the /public folder (e.g. /public/images/workshop-01.jpg).
// - Reference them with a root-relative path: image: "/images/workshop-01.jpg".
// - `gallery` is an optional array of extra images shown on the detail page.
export const workshops = [
  {
    slug: "h3-hexagons-mapping",
    title:
      "H3: Why hexagons are so cool and how we can use them to map the world",
    description:
      "A hands-on workshop on the H3 hexagonal grid system and how to use it to map and analyse the world.",
    date: "Apr. 2026",
    tags: ["H3", "Geospatial", "Workshop"],
    facts: [
      { label: "Role", value: "Workshop facilitator" },
      { label: "Context", value: "NexTCity Summer School 2026" },
      { label: "Location", value: "Lisbon (PT)" },
    ],
    body: [
      "This workshop, facilitated at the NexTCity Summer School 2026, introduced the H3 hexagonal grid — an open, hierarchical geospatial indexing system — and explored why hexagonal tiling is such a useful way to represent space.",
      "Through hands-on exercises, participants worked with H3 to aggregate, analyse, and map spatial data across different scales, building an intuition for how the grid can support urban analytics and city-scale mapping.",
    ],
    link: {
      label: "Access the workshop materials",
      url: "https://github.com/novacidade-org/H3_Workshop_SS",
    },
  },
  {
    slug: "participatory-mapping-smarter-cities",
    title: "Participatory Mapping for Smarter Cities",
    description:
      "A workshop on participatory and collective mapping as a tool for building smarter, more inclusive cities.",
    date: "Oct. 2025",
    tags: ["Participatory Mapping", "Participation", "Workshop"],
    facts: [
      { label: "Role", value: "Workshop facilitator" },
      { label: "Context", value: "GeoMundus Conference 2025" },
      { label: "Location", value: "Lisbon (PT)" },
    ],
    body: [
      "Facilitated at the GeoMundus Conference 2025, this workshop explored participatory and collective mapping as an approach to building smarter, more equitable, and more inclusive cities.",
      "It combined community knowledge and citizen-generated data with digital mapping tools, giving participants a hands-on introduction to how collaborative mapping can surface a shared, lived reading of urban space.",
    ],
  },
  
];
