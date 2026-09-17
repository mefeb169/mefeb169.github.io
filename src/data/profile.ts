/**
 * Single source of content for the portfolio site.
 *
 * Every value here traces back to `profile.md` at the repo root (the reconciled,
 * live-verified professional record — see its Reconciliation log for how each fact was
 * confirmed). Do not hardcode content in section components; import it from here instead,
 * so a future `profile.md` update only means editing this one file.
 *
 * Confidentiality rules carried forward from `profile.md`'s "Project source material"
 * section — do not violate these when editing this file:
 *   - Never write the name "WALI" anywhere. That project ships only as
 *     "Confidential Client Application".
 *   - The BNP/WFP dashboard has no public URL (built for upper management at BISP).
 *   - No repository links, ever — only production/company URLs.
 */

export type SocialLink = {
  label: string;
  href: string;
  icon: "linkedin" | "github" | "mail";
};

export const identity = {
  name: "Usama",
  headline: "Full Stack Developer",
  company: "DevMechanix",
  tagline:
    "I build end-to-end products — from the data layer and APIs to polished, responsive UIs — across the .NET and JavaScript/TypeScript ecosystems.",
  location: "Islamabad, Pakistan",
  experienceYears: "3+",
  availability: "Open to opportunities",
} as const;

// LinkedIn's own "Open to work" toggle is currently off (confirmed live, task 4) — the
// availability badge above reflects the About section's own closing line, not that toggle.

export const social: SocialLink[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/engrosama29", icon: "linkedin" },
  { label: "GitHub", href: "https://github.com/mefeb169", icon: "github" },
  { label: "Email", href: "mailto:engrosama29@outlook.com", icon: "mail" },
];

export const contactEmail = "engrosama29@outlook.com";

// No Twitter/X account is on record — omitted rather than linking to "#".

export type Stat = { label: string; value: string };

export const stats: Stat[] = [
  { label: "Years Experience", value: "3+" }, // Apr 2023 (Binary Bridges) -> present
  { label: "Projects Delivered", value: "6" }, // BNP/WFP, Confidential app, HJI, AutoPost, Write Engine, TEA
  { label: "Technologies", value: "50" }, // profile.md's reconciled Skills master list
  { label: "Companies", value: "3" }, // DevMechanix, Fiverr (freelance), Binary Bridges
];

export type Role = {
  title: string;
  company: string;
  dates: string;
  location?: string;
  description: string;
};

// Newest first — matches ScrollTimeline's rendering order. Dates are the task-5
// live-verified values; do not use any older task's dates.
export const experience: Role[] = [
  {
    title: "Software Engineer",
    company: "DevMechanix",
    dates: "Dec 2025 – Present",
    location: "Islamabad, Pakistan · Hybrid",
    description:
      "Promoted to Software Engineer, working across enterprise and product engineering in both the .NET and React/TypeScript ecosystems. Built the WFP Management Dashboard for the Benazir Nashonuma Programme — ASP.NET Core 8, Clean Architecture, CQRS, EF Core on Oracle 19c, Razor Pages with interactive Leaflet maps, OAuth-based multi-tenant access, IIS deployment. Sole developer on a confidential client application — a NestJS (TypeScript) monorepo with Passport JWT auth, Drizzle ORM on PostgreSQL, BullMQ/Redis job queues, and a React 19 + Vite + Tailwind frontend. Continues to maintain HealthJobsIndex and AutoPost.",
  },
  {
    title: "Junior Software Engineer",
    company: "DevMechanix",
    dates: "Jan 2025 – Nov 2025",
    description:
      "Built AutoPost, an AI-assisted résumé builder, LinkedIn profile-improvement tool, and post scheduler — a pnpm + Turborepo monorepo with an Express/Passport JWT API, a standalone mailer service, and a React + Vite UI backed by PostgreSQL via Drizzle ORM. Began building and maintaining HealthJobsIndex, a production healthcare job-aggregation platform.",
  },
  {
    title: "Intern Software Engineer",
    company: "DevMechanix",
    dates: "Oct 2024 – Dec 2024",
    description:
      "Joined DevMechanix as an intern, contributing to Write Engine — an AI-first tool for generating job proposals, cover letters, and content humanization. Built with a Vue 3 + Vite frontend and a Laravel (PHP) backend, with n8n workflows driving the AI content-generation pipeline.",
  },
  {
    title: "Freelance Software Engineer",
    company: "Fiverr",
    dates: "Jan 2024 – Dec 2025",
    location: "Multan, Pakistan · Hybrid",
    description:
      "Independent software engineer delivering custom .NET and web solutions for international clients. Engagements ranged from short tasks to a multi-year agreement with a US client (SiiSol) to build their Techno-Economic Analysis software suite for green-hydrogen and industrial energy systems.",
  },
  {
    title: "Dotnet Developer",
    company: "Binary Bridges",
    dates: "Apr 2023 – Dec 2023",
    location: "Multan, Pakistan · Hybrid",
    description:
      "Worked across two projects: an oil-distribution web application (ASP.NET MVC + Web API, EF Core over MySQL) for Ahmed Shah & Co., and a fintech NDA platform authoring pure MS SQL queries and .NET Web APIs for a money-flow system, using ADO.NET and Microsoft Identity.",
  },
];

export type EducationEntry = {
  degree: string;
  school: string;
  dates?: string;
  grade?: string;
};

export const education: EducationEntry[] = [
  {
    degree: "BS, Computer Engineering",
    school: "Bahauddin Zakariya University",
    dates: "Oct 2019 – May 2024",
    grade: "GPA 3.1",
  },
  {
    degree: "Higher Secondary, Pre-Engineering",
    school: "Punjab Group of Colleges",
    dates: "2017 – 2019",
    grade: "75%",
  },
  {
    degree: "Matriculation",
    school: "Govt High School, Ashaba",
    grade: "85%",
  },
];

export type Project = {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  /** null = internal/NDA, genuinely has no public URL. */
  url: string | null;
  /** Shown in place of a link when url is null. */
  accessNote?: string;
  gradient: string; // CSS gradient token for the generated card visual (no stock photography)
};

export const projects: Project[] = [
  {
    title: "WFP Management Dashboard",
    subtitle: "Benazir Nashonuma Programme (BNP)",
    description:
      "Management dashboard for the World Food Programme's Benazir Nashonuma Programme, supporting pregnant and lactating women — built while embedded on-site at BISP. Clean Architecture / CQRS backend on ASP.NET Core 8, EF Core over Oracle 19c with OLTP/OLAP query optimization, OAuth-based role/permission/group access, and Razor Pages with interactive Leaflet maps.",
    tech: ["ASP.NET Core 8", "EF Core", "Oracle 19c", "CQRS", "Razor Pages", "Leaflet", "IIS"],
    url: null,
    accessNote: "Internal — built for upper management, not public",
    gradient: "from-emerald-500/25 via-teal-500/15 to-cyan-500/10",
  },
  {
    title: "Confidential Client Application",
    subtitle: "NDA engagement",
    description:
      "Sole developer of a full-stack platform end-to-end (client and domain under NDA). NestJS monorepo with Passport JWT/local auth, Drizzle ORM on PostgreSQL, BullMQ + Redis job queues, and a React 19 + Vite + Tailwind frontend with MapLibre GL maps and TanStack Table data grids.",
    tech: ["NestJS", "Drizzle ORM", "PostgreSQL", "BullMQ", "Redis", "React 19", "MapLibre GL"],
    url: null,
    accessNote: "Confidential — client and domain under NDA",
    gradient: "from-violet-500/25 via-indigo-500/15 to-purple-500/10",
  },
  {
    title: "HealthJobsIndex",
    subtitle: "Healthcare job aggregation platform",
    description:
      "Production platform aggregating UK healthcare job listings and emailing tailored alerts to subscribers — built largely solo. Semi-microservices monorepo (API, mailer, scraper) with n8n-scheduled scrapers, a React + TypeScript SPA, and an admin panel for user and job management.",
    tech: ["React", "TypeScript", "Express", "PostgreSQL", "Drizzle ORM", "n8n", "CI/CD"],
    url: "https://healthjobsindex.com",
    gradient: "from-sky-500/25 via-blue-500/15 to-indigo-500/10",
  },
  {
    title: "AutoPost",
    subtitle: "AI résumé & LinkedIn automation",
    description:
      "AI-assisted résumé builder, LinkedIn profile-improvement suggestions, and post scheduler. A pnpm + Turborepo monorepo with an Express/Passport JWT API, a standalone mailer service, and a React + Vite web UI sharing Zod-validated types.",
    tech: ["TypeScript", "Express", "React", "Vite", "Drizzle ORM", "Turborepo"],
    url: "https://autopost.apps.devmechanix.com",
    gradient: "from-fuchsia-500/25 via-pink-500/15 to-rose-500/10",
  },
  {
    title: "Write Engine",
    subtitle: "AI proposal & content generation",
    description:
      "AI-first application for generating job proposals, cover letters, and content humanization. Vue 3 + Vite frontend with a Laravel (PHP) backend, AI content generation orchestrated through n8n workflows.",
    tech: ["Vue 3", "Laravel", "PHP", "MySQL", "n8n"],
    url: "https://writeengine.apps.devmechanix.com",
    gradient: "from-amber-500/25 via-orange-500/15 to-red-500/10",
  },
  {
    title: "TEA Solution",
    subtitle: "Techno-Economic Analysis software",
    description:
      "A multi-year freelance engagement building techno-economic analysis software for green-hydrogen and industrial energy systems — financial modeling, sensitivity analysis, and solar/wind land sizing, delivered milestone by milestone for a US client.",
    tech: ["C#", "WinForms", "DevExpress", ".NET 8", "EF Core", "Clean Architecture"],
    url: "https://siisol.com",
    gradient: "from-lime-500/25 via-green-500/15 to-emerald-500/10",
  },
];

export type SkillGroup = { category: string; skills: string[] };

// Verbatim from profile.md's Skills master list — 50 skills across 10 categories.
export const skillGroups: SkillGroup[] = [
  { category: "Languages", skills: ["C#", "TypeScript", "JavaScript", "SQL", "HTML"] },
  {
    category: "Backend & APIs",
    skills: [
      "ASP.NET Core",
      "ASP.NET Web API",
      "ASP.NET MVC",
      "NestJS",
      "Node.js",
      "Express.js",
      "Razor Pages",
      "REST APIs",
      "Clean Architecture",
      "CQRS",
      "Dependency Injection",
      "Microservices",
    ],
  },
  { category: "Frontend", skills: ["React.js", "Vue.js", "Angular", "AngularJS", "Tailwind CSS", "Vite"] },
  {
    category: "Databases & ORMs",
    skills: [
      "Microsoft SQL Server",
      "Oracle Database",
      "PostgreSQL",
      "Supabase",
      "MySQL",
      "Entity Framework Core",
      "Drizzle ORM",
      "Query Optimization",
    ],
  },
  {
    category: "Cloud, DevOps & Tools",
    skills: ["CI/CD", "Turborepo", "Redis", "Internet Information Services (IIS)", "Git", "n8n"],
  },
  { category: "Auth & Security", skills: ["OAuth", "JSON Web Token (JWT)", "Passport.js"] },
  { category: "Desktop", skills: ["Windows Forms (WinForms)", "DevExpress", ".NET Framework"] },
  { category: "Backend (other)", skills: ["Laravel", "PHP"] },
  {
    category: "Practices & Domain",
    skills: ["AI Pair Programming / AI-Assisted Programming", "Software Architecture", "Financial Modeling"],
  },
  { category: "Soft Skills", skills: ["Communication", "Team Collaboration"] },
];

export const topSkills = ["Full-Stack Development", "ASP.NET Core", "React.js"] as const;

export type Service = { title: string; description: string; icon: "code" | "layers" | "cpu" | "workflow" };

export const services: Service[] = [
  {
    icon: "code",
    title: "Full-Stack .NET Engineering",
    description:
      "ASP.NET Core APIs built on Clean Architecture and CQRS, with EF Core data access across Oracle, SQL Server, and MySQL — delivered on projects like the BNP dashboard, Binary Bridges, and TEA Solution.",
  },
  {
    icon: "layers",
    title: "React & TypeScript Frontends",
    description:
      "Responsive, accessible interfaces with React 19 and Vite, from public-facing SPAs (HealthJobsIndex) to internal tools and confidential client platforms.",
  },
  {
    icon: "cpu",
    title: "API & Data Architecture",
    description:
      "RESTful API design, query optimization across OLTP/OLAP workloads, and data modeling with EF Core, Drizzle ORM, and raw SQL, depending on what the system actually needs.",
  },
  {
    icon: "workflow",
    title: "AI-Assisted Delivery & DevOps",
    description:
      "n8n automation pipelines, CI/CD ownership, and production deployment (IIS, PM2) — using AI tooling to accelerate research and prototyping while owning architecture and quality.",
  },
];

export type Recommendation = { name: string; role: string; quote: string };

// Intentionally empty — no real LinkedIn recommendations exist yet (confirmed with the
// user, task 6). The Testimonials section renders nothing while this stays empty; add real,
// attributed quotes here (and nowhere else) once they exist. Never fill this with invented
// endorsements.
export const recommendations: Recommendation[] = [];
