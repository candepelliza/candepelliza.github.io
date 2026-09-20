// Global site content: identity, navigation, links.
// Edit these values to update the header, footer, home hero, and SEO.
export const site = {
  name: "Candela Sol Pelliza",
  role: "Urban Innovator, Researcher, and Consultant",
  /** Short tagline shown on the home hero. */
  tagline:
    "Working at the intersection of urban innovation, sustainability, technology, and research, aiming to contribute to more livable, resilient, equitable, and innovative cities.",
  /** Short About-me preview shown on the home page. */
  aboutPreview:
    "I am an urban planner, researcher, and consultant focused on urban innovation, liveable cities and the role of technology in shaping cities. Over the past years I have coordinated international research projects, led geospatial projects, taught at universities, published academic work andadvised public and private institutions. My work moves between practice and academia, bridging policy, design, and coommunities.",
  /** Used as the default meta description across the site. */
  metaDescription:
    "Candela Sol Pelliza — urban planner and researcher working across urban innovation, technology, consultancy, and academic work.",
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
