import type { CardEntry } from "./types";

// SELECTED WORKS (card-based → generates /selected-works/<slug>)
// Add a project by appending an object. Each needs a unique `slug`.
//
// IMAGES:
// - Add image files to the /public folder (e.g. /public/images/project-01.jpg).
// - Reference them with a root-relative path: image: "/images/project-01.jpg".
// - `image` is the thumbnail used on the card and as the detail-page hero.
// - `gallery` is an optional array of extra images shown on the detail page.
// - Leave `image` (and `gallery`) undefined to keep the neutral hatched placeholder.
export const selectedWorks: CardEntry[] = [
  {
    slug: "riverside-regeneration",
    title: "Riverside Regeneration Master Plan",
    description:
      "A long-term framework transforming a post-industrial waterfront into a mixed-use, climate-resilient district.",
    date: "2023",
    tags: ["Master Planning", "Climate", "Public Space"],
    // Example image paths (uncomment and replace with real files in /public/images):
    // image: "/images/riverside-regeneration-hero.jpg",
    // gallery: [
    //   "/images/riverside-regeneration-plan.jpg",
    //   "/images/riverside-regeneration-section.jpg",
    //   "/images/riverside-regeneration-workshop.jpg",
    // ],
    facts: [
      { label: "Role", value: "Lead Planner" },
      { label: "Client", value: "Metropolitan Authority" },
      { label: "Location", value: "Porto, Portugal" },
      { label: "Scale", value: "42 hectares" },
    ],
    body: [
      "The Riverside Regeneration Master Plan reimagines a neglected industrial waterfront as a connected, walkable, and flood-resilient district. The strategy balances new housing and public amenities with extensive green infrastructure.",
      "Developed through an 18-month process, the plan combined hydrological modelling, participatory workshops, and phased delivery to ensure both environmental performance and community ownership.",
      "The framework is now guiding a series of pilot interventions, including a linear park, adaptive reuse of warehouses, and a new pedestrian network linking the river to the historic centre.",
    ],
    link: { label: "Project site", url: "#" },
  },
  {
    slug: "civic-data-platform",
    title: "Civic Data Platform",
    description:
      "An open platform giving residents transparent access to neighbourhood-level public service data.",
    date: "2022",
    tags: ["Technology", "Data", "Participation"],
    facts: [
      { label: "Role", value: "Project Director" },
      { label: "Partners", value: "City of Lisbon, Civic Tech NGO" },
      { label: "Status", value: "Live pilot" },
    ],
    body: [
      "The Civic Data Platform makes municipal data legible to the people it affects. Residents can explore service performance, planning applications, and environmental indicators for their own street and neighbourhood.",
      "We designed the platform around plain-language explanations, accessibility, and open data standards, co-developing the interface with community groups in peripheral districts.",
      "The pilot demonstrated measurable increases in awareness of local services and informed two subsequent participatory budgeting cycles.",
    ],
    link: { label: "View platform", url: "#" },
  },
  {
    slug: "fifteen-minute-district",
    title: "The Fifteen-Minute District",
    description:
      "A mobility and land-use strategy reorganising daily life around proximity and active travel.",
    date: "2021",
    tags: ["Mobility", "Strategy", "Urban Innovation"],
    facts: [
      { label: "Role", value: "Strategy Lead" },
      { label: "Client", value: "District Council" },
      { label: "Location", value: "Paris, France" },
    ],
    body: [
      "This strategy translated the fifteen-minute city concept into a concrete spatial and policy framework for a dense inner-city district.",
      "Combining accessibility analysis with street-level design proposals, the work prioritised schools, green space, and local services within walking and cycling distance of every home.",
      "The recommendations fed directly into the district's mobility plan and a programme of tactical street redesigns.",
    ],
  },
  {
    slug: "housing-futures-study",
    title: "Housing Futures Study",
    description:
      "A research-led consultancy project exploring affordable and adaptable housing models for the next decade.",
    date: "2020",
    tags: ["Housing", "Research", "Consultancy"],
    facts: [
      { label: "Role", value: "Lead Consultant" },
      { label: "Client", value: "National Housing Agency" },
    ],
    body: [
      "The Housing Futures Study assessed emerging models of affordable, flexible, and community-led housing against demographic and climate pressures.",
      "Through scenario analysis and stakeholder interviews, the study produced a set of policy pathways and design principles for resilient housing delivery.",
      "Its recommendations informed a national consultation on housing reform.",
    ],
  },
];
