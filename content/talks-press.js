
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
];


export const talksPress = [
  {
    slug: "keynote-cities-of-tomorrow",
    title: "aa",
    description:
      "aa",
    date: "2024",
    category: "Invited Talks",
    tags: ["Keynote", "Urban Innovation"],
    facts: [
      { label: "Event", value: "aa" },
      { label: "Location", value: "aa" },
    ],
    body: [
      "aa.",
    ],
    link: { label: "Watch", url: "#" },
  },
  
  {
    slug: "icuf-participatory-platforms",
    title: "Participatory Platforms and Their Limits",
    description:
      "Conference paper presenting a five-city comparison of digital engagement tools.",
    date: "2023",
    category: "Conference Presentations",
    tags: ["Participation", "Research"],
    facts: [
      { label: "Conference", value: "Intl. Conference on Urban Futures" },
      { label: "Location", value: "Vienna" },
    ],
    body: [
      "This presentation shared findings from a comparative study of online participation platforms, highlighting where digital tools widen — and where they narrow — civic engagement.",
    ],
    link: { label: "Slides", url: "#" },
  },
  
  {
    slug: "panel-equitable-smart-cities",
    title: "Panel: Who Owns the Smart City?",
    description:
      "Public panel on data ownership, equity, and the politics of urban technology.",
    date: "2024",
    category: "Panels & Public Events",
    tags: ["Panel", "Equity"],
    facts: [
      { label: "Venue", value: "Smart City Expo World Congress" },
      { label: "Location", value: "Barcelona" },
    ],
    body: [
      "A public panel debating who benefits from urban technology and how cities can keep data accountable to residents.",
    ],
  },
  
  {
    slug: "press-guardian-fifteen-minute",
    title: "Feature: Rethinking the Fifteen-Minute City",
    description:
      "Quoted in a long-form feature on proximity-based urban planning.",
    date: "2023",
    category: "Media & Press",
    tags: ["Feature", "Mobility"],
    facts: [{ label: "Outlet", value: "International Daily" }],
    body: [
      "A feature article on the promise and pitfalls of the fifteen-minute city, with commentary on implementation and equity.",
    ],
    link: { label: "Read article", url: "#" },
  },
  
  {
    slug: "podcast-future-of-planning",
    title: "Podcast: The Future of Planning",
    description:
      "A conversation on research, practice, and the changing role of the planner.",
    date: "2024",
    category: "Interviews / Podcasts",
    tags: ["Podcast", "Practice"],
    facts: [{ label: "Show", value: "The Urbanist" }],
    body: [
      "A wide-ranging interview on moving between academia and practice, and what it means to plan for uncertainty.",
    ],
    link: { label: "Listen", url: "#" },
  },
 
];
