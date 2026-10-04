
// TALKS & PRESS (card-based → generates /talks-press/<slug>)
// Group is set by `category`. Keep categories consistent with the list below.
//
// IMAGES:
// - Add image files to the /public folder (e.g. /public/images/talk-01.jpg).
// - Reference them with a root-relative path: image: "/images/talk-01.jpg".
// - `image` is the thumbnail used on the card and as the detail-page hero.
// - `gallery` is an optional array of extra images shown on the detail page.
// - Leave `image` (and `gallery`) undefined to keep the neutral hatched placeholder.
export const talksPressCategories = [
  "Invited Talks",
  "Conference Presentations",
  "Panels & Public Events",
  "Media & Press",
  "Interviews / Podcasts",
  "Panel Moderator",
];


export const talksPress = [

    {
    slug: "smartcitiessummit-smart-port-lx",
    title: "Smart Port Lx: Opportunities and Challenges in the Port-City Relationship ",
    description:
      "Roundtable: Smart Port Lx: Smart Port, Intelligent City – Opportunities and Challenges in the Port-City Relationship",
    date: "2026",
    category: "Panel Moderator",
    tags: ["Smart City", "Smart Port"],
    facts: [
      { label: "Event", value: "Smart Cities Summit Portugal 2026" },
      { label: "Location", value: "Lisbon (PT)" },
    ],
    body: [
      "Panel moderator of the discussion regarding the role of the Smart port Lx project as a catalyzer for the development of the city of Lisbon and its port, and the opportunities and challenges of the port-city relationship.",
    ],
    image: "/images/smartport-rt-hero.jpg",
    gallery: ["/images/smartport-rt-01.jpg"],
   
  },

      {
    slug: "data-dts-urbandecision",
    title: "Data, Digital Twins & Urban Decision Support ",
    description:
      "Roundtable: 'Data, Digital Twins & Urban Decision Support'",
    date: "2026",
    category: "Panel Moderator",
    tags: ["Digital Twins", "NexTCity"],
    facts: [
      { label: "Event", value: "NexTCity Networking Event 2026" },
      { label: "Location", value: "Lisbon (PT)" },
    ],
    body: [
      "Panel moderator of the roundtable held in the context of the NexTCity Networking Event 2026, discussing the role of geographic data and digital twins in supporting urban decision-making and planning processes.",
    ],
    image: "/images/rt-dts-hero.jpg",
    gallery: ["/images/rt-dts-1.jpg", "/images/rt-dts-2.jpg", "/images/rt-dts-3.jpg"],
   
  },

  {
    slug: "roundtable-social-environmental-innovation",
    title: "Roundtable: Social & Environmental Innovation in the Digital Era",
    description:
      "Participant of the roundtable discussion about Social & Environmental Innovation in the Digital Era",
    date: "2025",
    category: "Invited Talks",
    tags: ["Roundtable", "Urban Innovation"],
    facts: [
      { label: "Event", value: "IBS Anniversary" },
      { label: "Location", value: "Universidade do Minho, Braga (PT)" },
    ],
    body: [
      "Participant of the roundtable discussion about Social & Environmental Innovation in the Digital Era, presenting the role of Urban Digital Twins in shaping the future of cities.",
    ],
    link: { label: "Digital twins", url: "Urban innovation" },
  },

   {
    slug: "smartcitybcn-2025",
    title: "Building the Future of Urban Intelligence with Digital Twins",
    description: "Presenting the City4Climate project advancements",
    date: "2025", // congress took place 4–6 November 2025
    category: "Invited Talks",
    tags: ["Digital Twins", "Decarbonization"],
    facts: [
      { label: "Event", value: "Smart City Expo World Congress 2025" },
      { label: "Date", value: "4–6 November 2025" },
      { label: "Location", value: "Barcelona (ES)" },
      { label: "Format", value: "Roundtable" },
      { label: "Project", value: "City4Climate" },
      {
        label: "Participants",
        value:
          "Candela Sol Pelliza (NOVA Cidade, NOVA IMS); Ana Pereira (Ubiwhere); Nuno Soares (CCG/ZGDV Institute); João Bastos (Porto Digital)",
      },
      { label: "Moderator", value: "Adeeb Sidani" },
    ],
    body: [
      "The Smart City Expo World Congress is one of the leading international events on smart cities, urban innovation and sustainability. The 2025 edition brought together 1,100 exhibitors and 27,000 participants from 143 countries.",
      "Within the City4Climate project, coordinated by NOVA Cidade – Urban Analytics Lab (NOVA IMS), a roundtable was held on climate governance and the role of digital twins. Partners Ubiwhere, CCG/ZGDV Institute and Porto Digital joined the discussion.",
      "The session focused on three themes. The first was digital twins as tools to support local climate governance. The second was system architecture and data integration through open standards such as NGSI-LD and FIWARE. The third was Climate City Contracts as a strategic instrument for local decarbonisation, in line with the EU Cities Mission.",
      "The project's progress was presented in three areas: the development of the system architecture, the implementation of Climate City Contracts in Porto, Lisbon and Guimarães, and early results in the integration, simulation and visualisation of urban data.",
      "A dedicated stand showcased early versions of the open-source digital twin framework, along with real-time dashboards and analytical tools.",
    ],
    image: "/images/c4c-scexpo-hero.jpg",
    gallery: ["/images/c4c-scexpo-01.jpg", "/images/c4c-scexpo-02.jpg"],
  },

 
];
