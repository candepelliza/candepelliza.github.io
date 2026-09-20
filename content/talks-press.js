
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
    description:
      "Presenting the City4Climate project advancements",
    date: "2026",
    category: "Invited Talks",
    tags: ["Digital Twins", "Decarbonization"],
    facts: [
      { label: "Event", value: "Smart City World Congress 2025" },
      { label: "Location", value: "Barcelona (ES)" },
    ],
    body: [
      "Presentation of the City4Climate project advancements, focusing on the role of Digital Twins in shaping the future of urban intelligence and decarbonization.",
    ],
    image: "/images/smartexpo-smart-port-lx-hero.jpg",
    gallery: ["/images/smartexpo-smart-port-lx-01.jpg"],

  },
  

 
];
