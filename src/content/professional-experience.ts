import type { StaticEntry } from "./types";

// ABOUT → Professional Experience
// Add a new role by appending an object. Newest first.
export const professionalExperience: StaticEntry[] = [
  {
    period: "Sep. 2024 — Present",
    title: "Research Assistant and Project Management Coordinator",
    meta: "NOVA Cidade Urban Analytics Lab (NOVA IMS), Lisbon (PT)",
    description:
      "Led activities development in EU-funded and national research consortiums on digital twins and decarbonisation. Designed and applied research methodologies combining statistical analysis, geospatial methods, and AI to investigate urban dynamics, people-centered cities and governance implications of data-driven urban systems. Led the development of funding applications, proposals, research deliverables, co-creation and capacity-building activities.",
    link: {
      label: "NOVA Cidade Urban Analytics Lab",
      url: "https://novacidade.pt/",
    },
  },
  {
    period: "Feb. 2025 — Present",
    title: "Invited Assistant Professor",
    meta: "NOVA Information Management School, Lisbon (PT)",
    description:
      "Bachelor and Master Courses 'Smart and Sustainable Cities' and 'Geospatial Intelligence'.",
    link: { label: "NOVA IMS", url: "https://www.novaims.unl.pt/" },
  },
  {
    period: "May 2022 — Present",
    title: "Geospatial Expert Consultant",
    meta: "NECTURE GMBH, Remote work for Vienna (AT)",
    description:
      "Developed and maintained custom GIS grids for 10+ European cities, designing algorithms and automated workflows for urban data acquisition and processing using Python, FME, and GIS tools to translate urban systems knowledge into rule-based technical solutions for urban mobility applications.",
    link: { label: "Necture", url: "https://www.necture.com/" },
  },
  {
    period: "Dec. 2023 — Mar. 2024",
    title: "Urban Data Scientist — Contractor",
    meta: "State of Place, Remote work for US",
    description:
      "Developed statistical models for transportation, walkability, demographics, and real estate across 100+ US neighborhoods, automating data acquisition, processing, analysis, visualization and reporting workflows for spatial data at scale.",
    link: { label: "State of Place", url: "https://stateofplace.co/" },
  },
  {
    period: "Jul. 2019 — Sep. 2022",
    title: "Architect and Project Manager",
    meta: "Freelance, Mendoza (ARG)",
    description:
      "Developed architecture, urbanism, and interior design projects in collaboration with multiple design offices, creating technical and graphic communications for diverse stakeholders. Managed project design, documentation, and contractor coordination end-to-end.",
  },
];
