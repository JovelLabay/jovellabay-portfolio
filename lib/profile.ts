export const profile = {
  name: "Jovel Labay",
  role: "Full-Stack JavaScript Developer",
  location: "Cagayan de Oro City, Philippines",
  email: "jovellabay@gmail.com",
  phone: "+63 939 771 5303",
  phoneHref: "tel:+639397715303",
  summary:
    "I ship production web and mobile products with React, Next.js, React Native, Node.js, and TypeScript across fintech, real estate, and enterprise. Recent work includes a tablet POS in live merchant pilots, a Philippine e-commerce store, and an enterprise system scaled to 2,000+ branches.",
};

export const facts = [
  { value: "5 yrs", label: "Production web and mobile" },
  { value: "2,000+", label: "Branches on one enterprise system" },
  { value: "2", label: "Products built and still running" },
];

export const work = [
  {
    name: "Billouvent",
    href: "https://billouvent.com",
    period: "2025 — Present",
    role: "Founder & Full-Stack Engineer",
    summary:
      "Serverless tablet POS for retail, café, and service shops on Android tablet and iPad.",
    points: [
      "Built solo in 4 months. Closed Android testing with 5 local merchants using distributed builds in live shops. Play Store release is waiting on Google Cloud API approval.",
      "Cash and GCash QR checkout, inventory, a kitchen queue, and 3 sync tiers — Local, Remote Monitoring, and Multi-Device — to Google Sheets, with no hosting fee.",
    ],
  },
  {
    name: "Moto Factory",
    href: "https://motofactory.store",
    period: "Jun 2025 — Present",
    role: "Founder & Full-Stack Engineer",
    summary: "Live motorcycle-parts store for riders across the Philippines.",
    points: [
      "Own architecture, development, deployment, and admin for a 60+ product catalog with checkout, order tracking, and buyer accounts.",
      "PayMongo payments: QRPh, GCash, Maya, and COD. Storefront live since June 2025.",
    ],
  },
];

export const experience = [
  {
    period: "Feb 2024 — Present",
    role: "React.js / React Native Developer",
    org: "Arizto Real Estate · ShoreAgents Inc.",
    points: [
      "Shipped a mobile leaderboard, iOS widgets (SwiftUI with live React Native state sync), and 8+ web dashboard features, including a sole agreement generator, sales and purchase checklists, and a history table revamp for agents and admins in New Zealand.",
      "Led the App v2 dependency upgrade and triaged production crashes in Sentry.",
    ],
  },
  {
    period: "May 2024 — Aug 2025",
    role: "Full-Stack Developer",
    org: "Zylun Philippines / CoDev · Sureel AI & Digital Champs",
    points: [
      "Digital Champs: rewrote a class-based React codebase to Next.js with hooks, Redux, and components after the legacy code could not run on modern Next.js.",
      "Sureel AI: built Fastify REST endpoints and payload schemas for new frontend features, with full-stack ownership and PO-approved architecture.",
    ],
  },
  {
    period: "Mar 2022 — Feb 2024",
    role: "Full-Stack Developer / Tech Lead",
    org: "Hatchit Solutions",
    points: [
      "Tech lead on M Lhuillier POS/QCL/BCA. Architected a Next.js, TypeScript, and Sequelize template that scaled to 2,000+ branches and matched the client’s IT setup.",
      "Delivered a jewellery site design revamp in under a week, built the SurgeTech React Native app from scratch, and guided junior developers across client projects.",
    ],
  },
  {
    period: "Jul 2022 — Feb 2023",
    role: "Full-Stack Developer",
    org: "OpenGov Asia · Part-time, 4 hrs/day",
    points: [
      "Built an internal leave management system used by 20 staff and deployed it on Azure.",
      "Consulted on BlueArt UI planning and led UI enhancements and QA support.",
    ],
  },
];

export const skillGroups = [
  {
    label: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "WordPress",
      "Sanity",
    ],
  },
  {
    label: "Mobile",
    items: ["React Native", "Expo", "iOS Widgets", "SwiftUI", "Sentry"],
  },
  {
    label: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "Fastify",
      "PHP",
      "REST APIs",
      "OAuth",
      "PayMongo",
    ],
  },
  {
    label: "Data & Cloud",
    items: [
      "MongoDB",
      "MySQL",
      "Firebase",
      "Supabase",
      "Google Sheets API",
      "Azure",
      "AWS",
      "GitHub Actions",
    ],
  },
  {
    label: "Domains",
    items: [
      "E-commerce",
      "QRPh, GCash, Maya, COD",
      "POS & inventory",
      "Fintech",
      "CRM",
    ],
  },
];

export const education = [
  {
    credential: "B.S. Information Technology",
    school: "Xavier University – Ateneo de Cagayan",
    period: "2018 — 2023",
  },
  {
    credential: "ICT · Academic Awardee",
    school: "Liceo de Cagayan University",
    period: "2016 — 2018",
  },
  {
    credential: "NCII Computer Systems Servicing",
    school: "Liceo de Cagayan University",
    period: "TESDA",
  },
];

export const nav = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];
