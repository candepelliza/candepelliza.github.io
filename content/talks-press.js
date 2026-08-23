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
        title: "Keynote: Cities of Tomorrow",
        description: "Opening keynote on technology, equity, and the future of urban governance.",
        date: "2024",
        category: "Invited Talks",
        tags: ["Keynote", "Urban Innovation"],
        facts: [
            { label: "Event", value: "Cities of Tomorrow Summit" },
            { label: "Location", value: "Amsterdam" },
        ],
        body: [
            "This keynote argued that the next decade of urban innovation must centre public value rather than technological novelty.",
            "Drawing on field research, it offered a framework for cities to govern data, participation, and infrastructure in the public interest.",
        ],
        link: { label: "Watch", url: "#" },
    },
    {
        slug: "lecture-public-interest-tech",
        title: "Public-Interest Technology in Planning",
        description: "Invited lecture on building civic technology that serves communities first.",
        date: "2023",
        category: "Invited Talks",
        tags: ["Civic Tech", "Lecture"],
        facts: [{ label: "Host", value: "TU Delft" }],
        body: [
            "An invited lecture exploring how planners can commission and design technology that strengthens, rather than bypasses, democratic processes.",
        ],
    },
    {
        slug: "icuf-participatory-platforms",
        title: "Participatory Platforms and Their Limits",
        description: "Conference paper presenting a five-city comparison of digital engagement tools.",
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
        slug: "aesop-data-commons",
        title: "Towards Urban Data Commons",
        description: "Conference presentation on public-interest data infrastructures for cities.",
        date: "2022",
        category: "Conference Presentations",
        tags: ["Data", "Governance"],
        facts: [{ label: "Conference", value: "AESOP Annual Congress" }],
        body: [
            "A presentation outlining the concept of urban data commons and early results from a cross-city research programme.",
        ],
    },
    {
        slug: "panel-equitable-smart-cities",
        title: "Panel: Who Owns the Smart City?",
        description: "Public panel on data ownership, equity, and the politics of urban technology.",
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
        slug: "public-event-night-of-ideas",
        title: "Night of Ideas: Reclaiming the Street",
        description: "Public talk and discussion on streets as shared civic infrastructure.",
        date: "2022",
        category: "Panels & Public Events",
        tags: ["Public Space"],
        facts: [{ label: "Venue", value: "Municipal Library, Lisbon" }],
        body: [
            "An evening talk inviting citizens to reimagine streets as places for people, not just movement.",
        ],
    },
    {
        slug: "press-guardian-fifteen-minute",
        title: "Feature: Rethinking the Fifteen-Minute City",
        description: "Quoted in a long-form feature on proximity-based urban planning.",
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
        slug: "press-op-ed-data-rights",
        title: "Op-ed: Cities Need a Right to Data",
        description: "Opinion piece on public ownership of urban information infrastructures.",
        date: "2022",
        category: "Media & Press",
        tags: ["Op-ed", "Data"],
        facts: [{ label: "Outlet", value: "Urban Affairs Review (online)" }],
        body: [
            "An op-ed making the case for treating urban data as public infrastructure governed in the common interest.",
        ],
        link: { label: "Read op-ed", url: "#" },
    },
    {
        slug: "podcast-future-of-planning",
        title: "Podcast: The Future of Planning",
        description: "A conversation on research, practice, and the changing role of the planner.",
        date: "2024",
        category: "Interviews / Podcasts",
        tags: ["Podcast", "Practice"],
        facts: [{ label: "Show", value: "The Urbanist" }],
        body: [
            "A wide-ranging interview on moving between academia and practice, and what it means to plan for uncertainty.",
        ],
        link: { label: "Listen", url: "#" },
    },
    {
        slug: "interview-civic-tech",
        title: "Interview: Designing Civic Technology",
        description: "An interview on building digital tools that strengthen local democracy.",
        date: "2023",
        category: "Interviews / Podcasts",
        tags: ["Interview", "Civic Tech"],
        facts: [{ label: "Publication", value: "Design & Society" }],
        body: [
            "An interview discussing principles for human-centred, accountable civic technology.",
        ],
    },
];
