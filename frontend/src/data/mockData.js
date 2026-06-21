// Centralized mock content for the dashboard listing pages.
// Each item carries enough fields to render both the compact card
// and the expanded detail view without changing visual design.

export const events = [
  {
    id: "evt-1",
    name: "Global AI Summit",
    badgeText: "Official Event",
    bannerText: "AI NEXT",
    timeAgo: "5h ago",
    description:
      "Join 5,000+ developers for a 48-hour deep dive into the next generation of Large Language Models. Keynotes from industry leaders, hands-on workshops, and a massive coding sprint.",
    venue: "San Francisco, CA + Online",
    date: "12 Jul 2026",
    organizer: "Global AI Summit Committee",
    attendees: "5,021 registered",
    likes: "1.2k",
    tags: ["AI", "LLM", "Keynote"],
  },
  {
    id: "evt-2",
    name: "Web3 Buildathon",
    badgeText: "Live Now",
    bannerText: "WEB3",
    timeAgo: "1d ago",
    description:
      "A 72-hour buildathon for decentralized apps, smart contracts, and tooling. Mentors from top protocols on-site, with a $50k prize pool across five tracks.",
    venue: "Online",
    date: "Ongoing — ends in 2d",
    organizer: "Web3 Buildathon DAO",
    attendees: "2,401 participants",
    likes: "842",
    tags: ["Web3", "Hackathon", "Solidity"],
  },
  {
    id: "evt-3",
    name: "Space Apps Challenge",
    badgeText: "Starts in 2d",
    bannerText: "SPACE",
    timeAgo: "2d ago",
    description:
      "NASA's global hackathon returns. Teams build tools using open space data to solve real-world challenges across climate, exploration, and accessibility.",
    venue: "Hybrid — 200+ cities",
    date: "20 Jul 2026",
    organizer: "NASA Space Apps",
    attendees: "850 participants",
    likes: "510",
    tags: ["Space", "OpenData", "Hackathon"],
  },
];

export const teammates = [
  {
    id: "tm-1",
    name: "Sam Coder",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD6Deqb1xcp_7LTg2GpnjquDvqZfTFp73MsMO3e5s5dgceiTNIlmJBZyHNfGAr-IdXYgTXFyK1kBrONZjBMM6z0kiTEPpTDeYiJTlvUuMFH8R7mcIMI8jvojqjpaz8mQSgv10AjUOUOocfYse2njLqNGmijBUmnu_WmxPcWTs03ZZOdhM3UsGuJh50GDz_9iN-jorZy2V1Qyp5EIm6Xhr1lbOgLE-9j9HKd_5Rc8xDB1n6DUznHr-msfXrdAIMcyC_Q9dj1Dx9OULc",
    subtitle: "Looking for a team",
    timeAgo: "2h ago",
    description:
      "Gearing up for the NeoHacks winter edition next weekend. We have a solid backend dev and a UI designer. Looking for someone strong in WebGL or Three.js to help build an immersive data viz dashboard. Hit me up if interested!",
    tags: ["WebGL", "Hackathon", "Frontend"],
    teamSize: "2/4 filled",
    mode: "Online",
    likes: 24,
    comments: 5,
  },
  {
    id: "tm-2",
    name: "Priya Nair",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBxRcKNoDu5e2SzrYRh_RDU5-gTUXdZykEetsK1TDaFHMUsSmefOL4LRT38fKHQ5Ed9iiimZCJClybB0nHWhMKp9J7a4t_oHa-9Y8WZQgOOVJCeUpqoX554_PD6Tf__Rx9QahtHt9Z1AEKKfiqNmIVrv14wWDduYx1TaMhMH3xfU3Aaw_UTYyi_9hJ_vnfxJNzzcrCYEBpD3s1_j8HmPeey9r6PynJOCA6qam6PIgLt7jYzuFQ5kxDtjqD-x-Y_22t7TZwLMlyMXsU",
    subtitle: "Building a dev-tools startup",
    timeAgo: "6h ago",
    description:
      "Working on an open-source CLI for monorepo dependency graphs. Need a Rust developer comfortable with parsers and a designer for the docs site. Equity + credit on launch.",
    tags: ["Rust", "OpenSource", "DevTools"],
    teamSize: "1/3 filled",
    mode: "Offline — Bengaluru",
    likes: 31,
    comments: 9,
  },
  {
    id: "tm-3",
    name: "Marcus Lee",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD6Deqb1xcp_7LTg2GpnjquDvqZfTFp73MsMO3e5s5dgceiTNIlmJBZyHNfGAr-IdXYgTXFyK1kBrONZjBMM6z0kiTEPpTDeYiJTlvUuMFH8R7mcIMI8jvojqjpaz8mQSgv10AjUOUOocfYse2njLqNGmijBUmnu_WmxPcWTs03ZZOdhM3UsGuJh50GDz_9iN-jorZy2V1Qyp5EIm6Xhr1lbOgLE-9j9HKd_5Rc8xDB1n6DUznHr-msfXrdAIMcyC_Q9dj1Dx9OULc",
    subtitle: "NeoHacks team — final spot open",
    timeAgo: "1d ago",
    description:
      "Three of us are locked in for NeoHacks. Need a product-minded designer who can move fast in Figma and isn't afraid to write a bit of CSS during crunch.",
    tags: ["Figma", "Design", "Hackathon"],
    teamSize: "3/4 filled",
    mode: "Online",
    likes: 18,
    comments: 4,
  },
];

export const buddies = [
  {
    id: "bd-1",
    name: "Wei Zhang",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD6Deqb1xcp_7LTg2GpnjquDvqZfTFp73MsMO3e5s5dgceiTNIlmJBZyHNfGAr-IdXYgTXFyK1kBrONZjBMM6z0kiTEPpTDeYiJTlvUuMFH8R7mcIMI8jvojqjpaz8mQSgv10AjUOUOocfYse2njLqNGmijBUmnu_WmxPcWTs03ZZOdhM3UsGuJh50GDz_9iN-jorZy2V1Qyp5EIm6Xhr1lbOgLE-9j9HKd_5Rc8xDB1n6DUznHr-msfXrdAIMcyC_Q9dj1Dx9OULc",
    subtitle: "Learning systems programming",
    timeAgo: "3h ago",
    description:
      "Halfway through a Rust book and want an accountability buddy for daily 1-hour sessions. Evenings IST work best. Happy to pair on small CLI projects.",
    tags: ["Rust", "Beginner", "Evenings"],
    level: "Beginner",
    availability: "Evenings, IST",
    likes: 12,
    comments: 3,
  },
  {
    id: "bd-2",
    name: "Aisha Bello",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBxRcKNoDu5e2SzrYRh_RDU5-gTUXdZykEetsK1TDaFHMUsSmefOL4LRT38fKHQ5Ed9iiimZCJClybB0nHWhMKp9J7a4t_oHa-9Y8WZQgOOVJCeUpqoX554_PD6Tf__Rx9QahtHt9Z1AEKKfiqNmIVrv14wWDduYx1TaMhMH3xfU3Aaw_UTYyi_9hJ_vnfxJNzzcrCYEBpD3s1_j8HmPeey9r6PynJOCA6qam6PIgLt7jYzuFQ5kxDtjqD-x-Y_22t7TZwLMlyMXsU",
    subtitle: "Prepping for backend interviews",
    timeAgo: "8h ago",
    description:
      "Grinding system design and SQL this month. Looking for someone at a similar level to mock-interview each other twice a week.",
    tags: ["SystemDesign", "SQL", "Interviews"],
    level: "Intermediate",
    availability: "Weekends",
    likes: 20,
    comments: 7,
  },
];

export const projects = [
  {
    id: "pr-1",
    name: "OpenGraph CLI",
    bannerText: "CLI",
    timeAgo: "1d ago",
    description:
      "A zero-config CLI that visualizes monorepo dependency graphs as interactive SVGs. Looking for contributors to help with the plugin API.",
    tags: ["Rust", "OpenSource", "CLI"],
    stars: "342",
    contributors: 8,
    status: "Active",
  },
  {
    id: "pr-2",
    name: "PeerConnect Mobile",
    bannerText: "RN",
    timeAgo: "3d ago",
    description:
      "React Native companion app for kNITTEd — push notifications for team invites and event reminders. Early alpha, looking for testers and a Lottie animator.",
    tags: ["ReactNative", "MobileApp"],
    stars: "98",
    contributors: 4,
    status: "Alpha",
  },
  {
    id: "pr-3",
    name: "DataViz Dashboard",
    bannerText: "WebGL",
    timeAgo: "5d ago",
    description:
      "A WebGL-powered dashboard for streaming large-scale sensor data with sub-100ms render updates. Built for the NeoHacks demo, now open-sourcing the core renderer.",
    tags: ["WebGL", "ThreeJS", "DataViz"],
    stars: "521",
    contributors: 12,
    status: "Active",
  },
];

export const discussions = [
  {
    id: "ds-1",
    title: "Optimizing React re-renders in large scale data grids?",
    timeAgo: "4h ago",
    comments: 42,
    description:
      "We're rendering a 10k-row virtualized grid and seeing jank on scroll whenever a single cell updates. Tried memoizing rows, but the parent context still triggers a full re-render. Anyone solved this with signals or a custom reconciler?",
    tags: ["React", "Performance"],
  },
  {
    id: "ds-2",
    title: "Thoughts on the new Bun 1.0 release for backend services.",
    timeAgo: "9h ago",
    comments: 128,
    description:
      "Bun 1.0 promises Node compatibility plus a much faster runtime. Curious if anyone has migrated a production API and run into native module issues, or if it's smooth sailing now.",
    tags: ["Bun", "Backend", "Node"],
  },
  {
    id: "ds-3",
    title: "Best practices for structuring a Tailwind v4 design system?",
    timeAgo: "1d ago",
    comments: 37,
    description:
      "With v4 moving config into CSS via @theme, what's the cleanest way to keep a large token set (colors, type scale, spacing) organized across a multi-app monorepo?",
    tags: ["Tailwind", "DesignSystem"],
  },
];
