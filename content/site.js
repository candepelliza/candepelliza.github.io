// Global site content: identity, navigation, links.
// Edit these values to update the header, footer, home hero, and SEO.
export const site = {
  name: "Candela Sol Pelliza",
  role: "Urban Planner & Researcher",
  /** Short tagline shown on the home hero. */
  tagline:
    "Working at the intersection of urban planning, technology, and research — designing more livable, equitable, and innovative cities.",
  /** Short About-me preview shown on the home page. */
  aboutPreview:
    "I am an urban planner, researcher, and consultant focused on urban innovation and the role of technology in shaping cities. Over the past decade I have led planning strategies, taught at universities, advised public institutions, and published research on participatory and data-driven urbanism. My work moves between practice and academia — bridging policy, design, and people.",
  /** Used as the default meta description across the site. */
  metaDescription:
    "Editorial portfolio of Candela Sol Pelliza — urban planner and researcher working across urban innovation, technology, consultancy, and academic work.",
  location: "Lisbon, Portugal",
  portraitImage: "/images/portrait.jpg",
  socials: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/candelasolpelliza/" },
    {
      label: "Google Scholar",
      url: "https://scholar.google.com/citations?user=DWlb0d8AAAAJ&hl=en",
    },
    { label: "GitHub", url: "https://github.com/candepelliza" },
  ],
};

export const navItems = [
  { label: "Home", to: "/" },
  { label: "CV", to: "/cv" },
  { label: "Selected Works", to: "/selected-works" },
  { label: "Research", to: "/research" },
  { label: "Capacity Building", to: "/capacity-building" },
  { label: "Talks & Press", to: "/talks-press" },
];
