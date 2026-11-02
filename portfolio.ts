// All site copy lives here. Edit this file to update the site.
import {
  EarlierWorkType,
  EngagementType,
  ExperienceType,
  FeedbackType,
  ProcessStepType,
  ProfileType,
  SEODataType,
  ServiceType,
  SocialLinksType,
  WorkType,
} from "./types/sections";

export const profile: ProfileType = {
  name: "Christian Ngubana",
  role: "Full-stack product engineer",
  location: "South Africa · works remotely (UTC+2)",
  email: "christiangubana@gmail.com",
  avatar: "https://avatars.githubusercontent.com/u/101836990?v=4",
  resumeLink: "/img/icons/common/pdf/christiangubana-resume.pdf",
  availability: "Open to remote roles & projects",
};

export const socialLinks: SocialLinksType = {
  email: "mailto:christiangubana@gmail.com?subject=Project%20enquiry",
  linkedin: "https://www.linkedin.com/in/christiangubana/",
  github: "https://github.com/christiangubana",
  twitter: "https://x.com/Christiangubana",
};

export const hero = {
  eyebrow: "TypeScript · React · Next.js · Node.js · NestJS · PostgreSQL · Prisma · Supabase · Stripe · AWS · Docker",
  title: "I help founders, agencies and growing businesses ship production software.",
  lead: "I'm a full-stack engineer with 5+ years of experience. I can join your team as an extra engineer, or take a feature or a whole product from first commit to production. Right now I'm building FloorTick, a multi-tenant compliance platform. In 2025-2026 I led development of three platforms used by thousands of people.",
};

export const work: WorkType[] = [
  {
    name: "FloorTick",
    summary: "Multi-tenant compliance platform for manufacturing",
    desc: "Replaces the paper records used on factory floors with configurable digital checklists, aligned with the FSSC 22000 v7 food-safety standard. Each customer organisation gets its own isolated workspace.",
    role: "Lead engineer · client product",
    period: "In active development",
    stack: ["TypeScript", "NestJS", "Next.js", "PostgreSQL", "Prisma", "Vercel"],
    highlights: [
      "Multi-tenant data model with per-organisation isolation",
      "Configurable checklist engine: customers define their own forms and workflows",
      "Authentication, account recovery and tenant onboarding",
    ],
    link: "https://www.floortick.com/",
    featured: true,
  },
  {
    name: "ShareSpaceNow",
    summary: "Marketplace for flexible warehouse and storage space",
    desc: "Property owners list unused warehouse capacity, and businesses book it by the pallet or bay. Hosts are identity-verified and payments run through Stripe.",
    role: "Led development",
    period: "2025-2026",
    stack: ["React", "Vite", "Supabase", "Stripe", "Cloudflare"],
    link: "https://sharespacenow.com/",
  },
  {
    name: "CampusLush",
    summary: "Events and opportunities platform for students",
    desc: "A platform where students discover campus events and opportunities, sign up and take part.",
    role: "Led development",
    period: "2025-2026",
    stack: ["Next.js", "React", "AWS CloudFront"],
    link: "https://campuslush.com/",
  },
  {
    name: "FatAllan",
    summary: "Restaurant discovery platform",
    desc: "Helps diners discover and compare the best restaurants in town.",
    role: "Led development",
    period: "2025-2026",
    stack: ["React", "AWS S3", "CloudFront"],
    link: "https://www.fatallan.com/",
  },
  {
    name: "Mrukumeta Trading",
    summary: "Online store with PayFast checkout",
    desc: "An online store for a Cape Town motorbike parts, tyres and repairs business, with a PayFast checkout so customers can order and pay online.",
    role: "Built the store and payments Integration",
    stack: ["Next.js", "PayFast", "Cloudinary", "Vercel"],
    link: "https://www.mrukumetatrading.com/",
  },
  {
    name: "Seneca.js",
    summary: "Open-source contributor",
    desc: "Merged contributions to the Seneca.js ecosystem, an MIT-licensed microservices toolkit for Node.js. My work covers example services and a Meetup API provider, including tests and documentation.",
    role: "Contributor",
    stack: ["Node.js", "Microservices"],
    link: "https://github.com/search?q=org%3Asenecajs+author%3Achristiangubana&type=pullrequests",
    linkLabel: "View pull requests",
  },
];

export const earlierWork: EarlierWorkType[] = [
  {
    name: "Gibeo",
    desc: "Podcast publishing and monetisation platform with HandCash (BitcoinSV) payments.",
    link: "https://gibeo.io/",
  },
  {
    name: "O Mejor Oferta",
    desc: "Location-based mobile marketplace on Google Play, with 1,000+ downloads.",
    link: "https://play.google.com/store/apps/details?id=com.duseca.mejor_oferta",
  },
  {
    name: "Hooligan Culture",
    desc: "E-commerce store with cryptocurrency checkout.",
    link: "https://hooliganculture.com/",
  },
];

export const services: ServiceType[] = [
  {
    title: "An extra engineer on your product",
    forWho: "Founders, startups and tech leads",
    desc: "You have a product and a roadmap, but not enough people to build it. I work in your repo, your stand-ups and your tools, and I ship from the first week.",
    examples: ["New features across frontend and API", "Clearing the backlog before a launch", "Pairing with your existing developers"],
  },
  {
    title: "Overflow capacity for agencies",
    forWho: "Agencies and small software companies",
    desc: "You've won more client work than your team can deliver. I can work white-label under your process and your client relationship, and I hand back clean, documented code.",
    examples: ["Fixed-scope client builds", "Taking over a project mid-flight", "Short-term cover for a team member"],
  },
  {
    title: "End-to-end ownership",
    forWho: "Startups and product teams",
    desc: "Give me a problem rather than a list of tickets. I'll scope it, build it, test it and get it into production, and send written updates along the way.",
    examples: ["MVPs and v1 products", "Multi-tenant SaaS foundations", "Payments, billing and onboarding flows"],
  },
  {
    title: "Internal tools and automation",
    forWho: "Established businesses",
    desc: "Your team is stuck with spreadsheets, copy-pasting and systems that don't talk to each other. I build the dashboards, integrations and automations that take over that manual work.",
    examples: ["Admin panels and dashboards", "API and payment integrations (Stripe, PayFast)", "Replacing paper and spreadsheet processes"],
  },
];

export const processSteps: ProcessStepType[] = [
  {
    title: "Intro call",
    desc: "30 minutes on what you're building, where it's stuck and what \"done\" looks like. No charge.",
  },
  {
    title: "Written plan",
    desc: "A short document covering scope, approach, estimate and the risks I can see, so you know exactly what you're agreeing to.",
  },
  {
    title: "Build in the open",
    desc: "I work in your repository with small pull requests, a weekly demo and written progress updates. You won't have to chase me for a status report.",
  },
  {
    title: "Clean handover",
    desc: "Documentation, tests and deployment notes. Nothing is left that only I understand.",
  },
];

export const engagements: EngagementType[] = [
  { title: "Fixed-scope project", desc: "A clear deliverable at an agreed price. Best for MVPs, integrations and internal tools." },
  { title: "Monthly retainer", desc: "Part-time or full-time capacity on your team, renewed month to month." },
  { title: "Embedded contract", desc: "I join your team for a set period at a day rate. Best for agencies and teams that need cover." },
  { title: "Full-time remote role", desc: "For the right product and team, I'm open to joining full-time, remotely." },
];

export const experience: ExperienceType[] = [
  {
    role: "Independent product engineer",
    company: "Client work",
    date: "2026 - Present",
    desc: "Building and leading delivery of production platforms for clients, including FloorTick, ShareSpaceNow, CampusLush, FatAllan and Mrukumeta Trading.",
  },
  {
    role: "Full-Stack Software Developer",
    company: "Meyk",
    date: "Jan 2025 - Mar 2026",
    desc: "Built APIs and services with NestJS and TypeScript, product UI with Next.js and React, and PostgreSQL schemas for complex data relationships.",
  },
  {
    role: "Frontend Developer",
    company: "Injozi",
    date: "Jan 2023 - Dec 2023",
    desc: "Built a reusable React component library for a fintech platform, improved page-load performance and Core Web Vitals, and mentored junior developers.",
  },
  {
    role: "Software Developer",
    company: "Platform45",
    date: "Nov 2021 - Oct 2022",
    desc: "Delivered 10+ client projects for international clients using React, Next.js and Node.js, including payment, analytics and authentication integrations.",
  },
  {
    role: "Junior Developer",
    company: "Code Collective",
    date: "2019 - 2020",
    desc: "Shipped client features for small businesses and startups using Web APIs, C#/.NET and SQL Server.",
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: "Andre Vermeulen",
    role: "CTO, projectcodex.co",
    feedback:
      "Christian is a highly motivated individual with a genuine passion for computer programming. His dedicated work ethic reflects a commendable drive to excel in the field.",
  },
  {
    name: "De Wet Blomerus",
    role: "Software Engineering Lead, SalesLoft",
    feedback:
      "I had the privilege of introducing him to computer programming in 2015, and since then his enthusiasm for honing his craft has been evident. His passion is a testament to his talent and commitment to growth.",
  },
  {
    name: "Steve Barnett",
    role: "Frontend consultant",
    feedback:
      "Christian invests a significant amount of his time in the tech community, mentoring new students and collaborating with fellow learners, which shows his dedication to collective growth and knowledge-sharing.",
  },
];

export const contactCopy = {
  title: "Got something that needs building?",
  desc: "Send a few lines covering what you're building, where it's stuck and when you need it. I reply within one working day.",
};

export const seoData: SEODataType = {
  title: "Christian Ngubana: Full-stack product engineer for founders, agencies and businesses",
  description:
    "Full-stack engineer (TypeScript, NestJS, Next.js, PostgreSQL) who builds and ships production software: SaaS platforms, marketplaces, payment integrations and internal tools. Available for contract and project work.",
  author: "Christian Ngubana",
  image: "https://avatars.githubusercontent.com/u/101836990?v=4",
  url: "https://christiangubana.github.io/",
  keywords: [
    "Christian Ngubana",
    "freelance full-stack developer",
    "contract software engineer",
    "NestJS developer",
    "Next.js developer",
    "PostgreSQL",
    "Prisma",
    "multi-tenant SaaS",
    "PayFast integration",
    "Stripe integration",
    "South Africa software developer",
    "remote software engineer",
  ],
};
