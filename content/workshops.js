
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
      "This workshop, facilitated at the NexTCity Summer School 2026, introduced the H3 hexagonal grid, an open, hierarchical geospatial indexing system, and explored why hexagonal tiling is such a useful way to represent space.",
      "The workshop combined a theoretical introduction to the H3 system, with a crafty hands-on workshop to understand in practice how hexagons are used to map the world, and a python-based exercises' session to learn how to use the h3-py library to generate and manipulate H3 grids, and to perform spatial analysis on real-world datasets.",
    ],
    link: {
      label: "Access the workshop materials",
      url: "https://github.com/novacidade-org/H3_Workshop_SS",
    },
    image: "/images/h3-hero.jpg",
    gallery: ["/images/h3-1.jpg", "/images/h3-2.jpg", "/images/h3-3.jpg"],
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

    image: "/images/collective-mapping-geomundus-hero.jpg",
  },
  
];
