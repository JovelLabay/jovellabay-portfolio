export const site = {
  url: "https://jovellabay.vercel.app",
  title: "Jovel Labay | Lead Full-Stack Engineer",
  description:
    "Lead full-stack engineer and product builder in Cagayan de Oro. 5+ years leading web and mobile platforms, including a live POS, an e-commerce store, and a system used across 2,000+ branches.",
  github: "https://github.com/JovelLabay",
  resume: "/jovel-labay-resume.pdf",
};

export const profile = {
  name: "Jovel Labay",
  role: "Lead Full-Stack Engineer",
  focus: "Technical product ownership for web and mobile",
  location: "Cagayan de Oro City, Philippines",
  email: "jovellabay@gmail.com",
  phone: "+63 939 771 5303",
  phoneHref: "tel:+639397715303",
  summary:
    "Full-stack engineer and product builder with 5+ years leading the architecture and delivery of web and mobile platforms. I connect the build with the product decision: a tablet POS in live merchant pilots, a Philippine e-commerce store, and an enterprise template used across 2,000+ branches. I modernize legacy systems, deploy on cloud infrastructure, and have mentored junior engineering teams.",
};

export const facts = [
  { value: "5 yrs", label: "Production web and mobile" },
  { value: "4", label: "Projects led at Hatchit" },
  { value: "2", label: "Products built and still running" },
];

export const work = [
  {
    name: "Billouvent",
    href: "https://billouvent.com",
    period: "2025 — Present",
    kind: "Independent product",
    role: "Founder & Product Engineer",
    summary:
      "Side venture. Serverless tablet POS for retail, café, and service shops on Android tablet and iPad.",
    highlights: [
      "Owned the product solo and finished closed testing with 5 merchants in 4 months.",
      "Shipped cash and GCash QR checkout, inventory, and a kitchen queue.",
      "Architected a 3-tier sync system on the Google Sheets API, with no hosting fee.",
    ],
    details: [
      "Designed the POS so a shop can run the register on an Android tablet or iPad without paying for a server.",
      "Checkout supports cash and a GCash QR. Staff manage inventory, and café orders are sent to a kitchen queue.",
      "Local sync keeps the shop working on the device. Remote Monitoring lets an owner watch the shop from somewhere else. Multi-Device keeps more than one tablet on the same Google Sheet.",
      "Built the product alone in 4 months, then distributed test builds to 5 merchants and ran them in live shops.",
      "Play Store release is waiting on Google Cloud API approval.",
    ],
  },
  {
    name: "Moto Factory",
    href: "https://www.motofactory.store",
    period: "Jun 2025 — Present",
    kind: "Independent product",
    role: "Founder & Product Engineer",
    summary:
      "Side venture. Live motorcycle-parts store for riders across the Philippines.",
    highlights: [
      "Owned architecture, development, deployment, and admin for a Cagayan de Oro business.",
      "Launched a 60+ product catalog with checkout, order tracking, and buyer accounts.",
      "Integrated PayMongo for QRPh, GCash, Maya, and COD. Live since June 2025.",
    ],
    details: [
      "Sole engineer for a Cagayan de Oro motorcycle-parts business selling to riders across the Philippines.",
      "Own the architecture, storefront, deployment, and the admin used to run the catalog.",
      "Buyers get accounts, checkout, and order tracking across a catalog of 60+ products.",
      "Integrated PayMongo so customers can pay with QRPh, GCash, Maya, or cash on delivery.",
      "The full storefront has been live at www.motofactory.store since June 2025.",
    ],
  },
];

export const experience = [
  {
    period: "Feb 2024 — Present",
    role: "React.js / React Native Developer",
    org: "Arizto Real Estate · ShoreAgents Inc.",
    summary:
      "Web and mobile features for real-estate agents and admins in New Zealand.",
    highlights: [
      "Architected dashboard modules for leaderboards, property listings, and CRM used by New Zealand agents.",
      "Built iOS widgets that sync React Native state into SwiftUI.",
      "Owned the App v2 upgrade and triaged production crashes in Sentry.",
    ],
    details: [
      "Architected dashboard modules for New Zealand agents and admins, including leaderboards, property listings, and CRM integrations.",
      "Shipped 8+ web features: a sole agreement generator, sales and purchase checklists, and a history table revamp.",
      "Built native iOS widgets and SwiftUI components inside the React Native app, kept in sync with live app state.",
      "Worked with backend developers on API specifications so the UI stayed stable when the API changed.",
      "Led the App v2 upgrade, resolving package dependency conflicts and moving the app onto newer libraries.",
      "Released mobile builds through Xcode and TestFlight, and triaged production issues in Sentry, including build errors, bundle problems, and asset loading.",
    ],
  },
  {
    period: "May 2024 — Aug 2025",
    role: "Full-Stack Developer",
    org: "Zylun Philippines / CoDev · Sureel AI & Digital Champs",
    summary: "Two products: a Next.js rewrite, and APIs for an AI product.",
    highlights: [
      "Led the re-engineering of a class-based React system into Next.js.",
      "Designed Fastify APIs and OAuth for Sureel AI, signed off by the product owner.",
      "Owned frontend components tied to backend logic through sprint delivery.",
    ],
    details: [
      "Digital Champs: the class-based React app could not run on modern Next.js. Planned the migration, then rewrote the frontend with hooks, Redux, and components.",
      "Sureel AI: built lightweight Fastify APIs, OAuth, and the payload schemas for new frontend features on the AI product.",
      "Owned React components that depended on backend logic, and aligned API specs with the frontend team so both sides stayed consistent.",
      "Cleared legacy backend bugs and added endpoints as requirements changed during sprints.",
      "Joined sprint planning to scope the work. The product owner signed off on the architecture.",
    ],
  },
  {
    period: "Mar 2022 — Feb 2024",
    role: "Full-Stack Developer / Tech Lead",
    org: "Hatchit Solutions",
    summary:
      "Tech lead on enterprise templates, plus client web and mobile delivery.",
    highlights: [
      "Spearheaded the M Lhuillier POS/QCL/BCA template and deployed it across 2,000+ branches locally and internationally.",
      "Shipped the jewellery site redesign in under a week.",
      "Drove SurgeTech from stack choice to a React Native launch, and mentored three junior teams.",
    ],
    details: [
      "Led M Lhuillier POS, QCL, and BCA: UI, architecture, and a Next.js, TypeScript, and Sequelize template scaled to 2,000+ branches locally and internationally, matched to the client’s IT setup.",
      "Designed the M Lhuillier Payroll system architecture on Next.js and Node.js.",
      "Built the ML Loans web app on the MERN stack and connected it to the company mobile wallet.",
      "Delivered the M Lhuillier Jewellery site revamp in under a week on a modern JavaScript stack.",
      "Ran headless CMS builds for Amehan and Southgate with Next.js and WordPress, and contributed to a Sweden-based Next.js and WordPress site for Michael Burglund.",
      "Built the SurgeTech React Native app from scratch, including the stack choice and the first deployment plan.",
      "Guided three teams of junior developers, then left documentation and stayed on as technical consultancy through delivery.",
    ],
  },
  {
    period: "Jul 2022 — Feb 2023",
    role: "Full-Stack Developer",
    org: "OpenGov Asia · Part-time, 4 hrs/day",
    summary: "Internal tools and UI work, four hours a day.",
    highlights: [
      "Built an internal leave management system used by 20 staff and deployed it on Azure.",
      "Led BluaArt maintenance, performance work, and new features from stakeholder feedback.",
    ],
    details: [
      "Designed the internal Leave Management System used by 20 staff.",
      "Deployed and maintained it on AWS EC2 and Azure, with MySQL and cloud storage.",
      "Set up GitHub Actions pipelines so deploys and version control ran automatically.",
      "Led BluaArt performance optimization, maintenance, and features requested by stakeholders.",
      "Built the OpenGov ChatGPT tool, which uses internal datasets and the OpenAI API to summarize articles, events, and company updates.",
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
    label: "Databases & DevOps",
    items: [
      "MongoDB",
      "MySQL",
      "Firebase",
      "Supabase",
      "GCP",
      "Azure",
      "AWS",
      "GitHub Actions",
    ],
  },
  {
    label: "Domains",
    items: [
      "E-commerce",
      "Paymongo: QRPh, GCash, Maya, COD",
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
    credential: "Information Communication Technology",
    school: "Liceo de Cagayan University",
    period: "2016 — 2018",
  },
  {
    credential: "NCII Computer Systems Servicing",
    school: "Crossroads Training Institute",
    period: "T E S D A",
  },
];

export const nav = [
  { href: "#work", label: "Products" },
  { href: "#experience", label: "Experience" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];
