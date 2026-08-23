// SELECTED WORKS (card-based → generates /selected-works/<slug>)
// Add a project by appending an object. Each needs a unique `slug`.
//
// IMAGES:
// - Image files live in /public/images and are referenced with a
//   root-relative path, e.g. image: "/images/estrela-hero.png".
// - `image` is the thumbnail used on the card and as the detail-page hero.
// - `gallery` is an optional array of extra images shown on the detail page.
// - Downloadable files (PDFs) live in /public/files.
export const selectedWorks = [
    {
        slug: "virarua",
        title: "ViraRUA: Turning the Street into an Active Urban Refuge",
        description: "A tactical, low-cost intervention reclaiming a residual street corner in Olaias as a small neighbourhood square.",
        date: "2026",
        tags: ["Tactical Urbanism", "Public Space", "Urban Design"],
        image: "/images/virarua-hero.png",
        facts: [
            { label: "Role", value: "Concept, urban diagnosis & spatial design" },
            { label: "Context", value: "‘Ideias para Mudar’ competition" },
            { label: "Location", value: "Olaias, Lisbon" },
        ],
        body: [
            "ViraRUA proposes a temporary, low-cost urban intervention for Olaias, developed for the ‘Ideias para Mudar’ competition, which called for ideas capable of transforming a concrete space in Lisbon through simple but meaningful actions. It focuses on reclaiming an underused street corner — currently occupied by informal car parking — and converting it into a small neighbourhood square that responds to the lack of comfortable public places to sit, meet, play, and park bicycles.",
            "The site is a residual corner near the Mercado de Alfacinha, the local church, ecopoints, existing trees, and a frequent micromobility parking point. Although part of the street, its dimensions exceed what vehicle circulation requires, leaving an ambiguous space used mainly for informal parking. Rather than relying on heavy construction, the proposal uses pavement paint to mark a new collective area within the existing road surface, transforming the perception of the corner so it reads as a place for people rather than parked cars.",
            "A linear piece of urban furniture combining a bench and a bicycle rack defines a soft boundary with the street: a place to pause and gather that also organises active mobility and reinforces the corner's role as a micromobility node. Following a tactical urbanism approach — site observation, spatial analysis, and visual simulation — the project translates the competition's principles into a neighbourhood-scale intervention that is temporary, replicable, low-cost, and grounded in everyday urban life, showing how small changes in street design can challenge car-dominated residual spaces and create more human-centred public environments.",
        ],
        link: { label: "Read the proposal (PDF)", url: "/files/virarua-proposal.pdf" },
    },
    {
        slug: "estrela-pela-felicidade",
        title: "Estrela pela Felicidade — A Happiness Indicator for Estrela Parish",
        description: "A multidimensional happiness and quality-of-life indicator combining objective data with a survey of 400 residents.",
        date: "2025",
        tags: ["Urban Analytics", "Wellbeing", "Data Visualization"],
        image: "/images/estrela-hero.png",
        gallery: ["/images/estrela-dashboard.png"],
        facts: [
            { label: "Role", value: "Coordination, methodology, survey & dashboards" },
            { label: "Context", value: "NOVA Cidade — Urban Analytics Lab, NOVA IMS" },
            { label: "Client", value: "Junta de Freguesia de Estrela" },
            { label: "Recognition", value: "Prémios Autarquia do Ano 2025 — honourable mention" },
        ],
        body: [
            "Estrela pela Felicidade assesses happiness and quality of life in Estrela Parish through a multidimensional indicator that combines objective and subjective data. The goal was to support local decision-making by identifying territorial inequalities, the key drivers of happiness, and priority areas for public action. The project received an honourable mention at the ‘Prémios Autarquia do Ano 2025’ in the ‘Public wellbeing promotion’ category, and was covered in the press, including Time Out Lisboa.",
            "The work required developing a specific methodology to measure happiness at the parish level, integrating objective indicators from open and acquired data sources with subjective indicators collected through a survey. The survey reached 400 residents and included questions on self-perceived happiness as well as perceptions of the different dimensions and factors shaping everyday life in the parish.",
            "It produced three main outputs: an analytical dashboard visualising objective and subjective scores for each dimension and factor across the parish's neighbourhoods; a predictive tool estimating how changes in selected objective factors could affect overall happiness; and a final report presenting the methodology, key findings, territorial patterns, and specific areas for action, including how variables affected happiness across demographic groups.",
        ],
        link: { label: "Read the full report (PDF)", url: "/files/estrela-report.pdf" },
    },
    {
        slug: "collective-mapping-geomundus",
        title: "Collective Mapping for Smarter Cities",
        description: "A hands-on GeoMundus 2025 workshop on collective and collaborative mapping for more equitable, sustainable cities.",
        date: "2025",
        tags: ["Collective Mapping", "Workshop", "Participation"],
        image: "/images/collective-mapping-geomundus-hero.jpg",
        facts: [
            { label: "Role", value: "Workshop design & facilitation" },
            { label: "Context", value: "GeoMundus Conference 2025" },
        ],
        body: [
            "This workshop, taught during the GeoMundus Conference 2025, introduced collective and collaborative mapping as tools for building smarter, more equitable, and more sustainable cities. It explored how community knowledge, citizen-generated data, and digital technologies can be combined to better understand urban experiences and territorial issues.",
            "The session framed collective mapping as both a process of co-creating horizontal knowledge and a collaborative way of gathering spatial data. It addressed the role of maps as social artifacts — how they can make territorial issues visible, support debate and consensus-building, and include bottom-up perspectives often absent from official representations. It also introduced forms of collaborative urban data collection, from volunteered geographic information and crowdsourced platforms to citizen reporting tools and ‘citizens as sensors’ approaches, drawing on examples such as OpenStreetMap, Mapillary, and biodiversity sensing initiatives.",
            "As a hands-on exercise, participants mapped their perceptions of the university campus — the paths they followed or avoided, places chosen for resting, and areas perceived as less comfortable or accessible — using ArcGIS Survey123 to experience first-hand how collective mapping can surface a shared, lived reading of space.",
        ],
    },
    {
        slug: "portugal-distante",
        title: "Portugal Distante — Accessibility Analysis for Expresso",
        description: "A geospatial study of territorial inequalities in access to essential services across mainland Portugal, for Expresso's investigative series.",
        date: "2025",
        tags: ["Accessibility", "Geospatial Analysis", "Data Journalism"],
        image: "/images/portugal-distante-hero.png",
        facts: [
            { label: "Role", value: "Coordination, methodology & geospatial analysis" },
            { label: "Context", value: "NOVA Cidade — Urban Analytics Lab, NOVA IMS" },
            { label: "Partner", value: "Expresso newspaper" },
        ],
        body: [
            "Portugal Distante analyses territorial inequalities in access to basic services across mainland Portugal. Developed in partnership with the Expresso newspaper, the analysis supported a journalistic series examining accessibility to essential services such as healthcare, education, culture, and ATMs.",
            "The work designed and implemented a geospatial accessibility methodology to measure both distance and real travel time by car from each statistical subsection in mainland Portugal to the nearest service location. Working from geolocated datasets, it generated accessibility indicators for hospitals and emergency services, schools, cultural facilities, and ATMs, making spatial patterns of isolation and unequal service provision visible.",
            "My contribution spanned coordinating the analytical workflow, developing the methodology, writing and running the geospatial code, validating the data, and producing the accessibility results behind the published pages. These were interpreted together with the journalist to identify the most critical areas and shape the narrative. The series had national visibility, showing how geographic distance and travel time drive unequal access to essential services across the country.",
        ],
        link: {
            label: "Read the series (Expresso)",
            url: "https://multimedia.expresso.pt/portugaldistantesaude/",
        },
    },
    {
        slug: "mapping-sexist-violence",
        title: "Mapping the Sexist Violence",
        description: "A live, participatory mapping action during the 8M march in Mendoza, making everyday experiences of gender-based violence in urban space visible.",
        date: "2020",
        tags: ["Participatory Mapping", "Gender", "Activism"],
        image: "/images/mapping-sexist-violence-hero.png",
        gallery: ["/images/mapping-sexist-violence-map.png"],
        facts: [
            { label: "Role", value: "Activity co-design & digital mapping" },
            { label: "Context", value: "Habitat Sur — feminist collective" },
            { label: "Location", value: "Mendoza, Argentina" },
        ],
        body: [
            "Mapping the Sexist Violence made the everyday experiences of sexist violence in urban space visible through a collective, participatory mapping action. Implemented during the 8M (International Women's Day) march in Mendoza, Argentina, it created a public space for women to identify, share, and locate areas of the city where they had experienced different forms of gender-based violence.",
            "The action took place in the city's central square during the march. A schematic map of Mendoza was drawn directly on the ground, inviting women to interact with a representation of the city in a simple, accessible way. Participants placed coloured paper markers on specific areas — each colour representing a different type of sexist violence — and were invited to write short testimonies if they wished to add context.",
            "After the march, the information gathered through the physical exercise was systematised and translated into a digital map, preserving the collective input so it could be analysed and communicated beyond the event. The project worked both as a public awareness action and as a preliminary diagnostic tool for identifying critical areas of the city where experiences of gender-based violence were concentrated.",
        ],
        link: {
            label: "View the collective map",
            url: "https://www.google.com/maps/d/viewer?mid=1x62AIrMQmdQ0AzggwLYSIPGOV1xoNSAw",
        },
    },
];
