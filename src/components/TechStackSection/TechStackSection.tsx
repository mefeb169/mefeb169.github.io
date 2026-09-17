import { motion } from "framer-motion";

// Only technologies actually used in delivered work (per profile.md). Each `icon` slug is a
// verified-live devicon path; entries with no devicon icon (n8n, Drizzle ORM, EF Core,
// DevExpress, Supabase, Turborepo) render as text-only pills instead of a broken image.
const technologies = [
  { name: "C#", icon: "csharp/csharp-original" },
  { name: "ASP.NET Core", icon: "dotnetcore/dotnetcore-original" },
  { name: "React", icon: "react/react-original" },
  { name: "TypeScript", icon: "typescript/typescript-original" },
  { name: "Node.js", icon: "nodejs/nodejs-original" },
  { name: "Express", icon: "express/express-original" },
  { name: "NestJS", icon: "nestjs/nestjs-original" },
  { name: "Vue.js", icon: "vuejs/vuejs-original" },
  { name: "Laravel", icon: "laravel/laravel-original" },
  { name: "PHP", icon: "php/php-original" },
  { name: "Tailwind CSS", icon: "tailwindcss/tailwindcss-original" },
  { name: "PostgreSQL", icon: "postgresql/postgresql-original" },
  { name: "MySQL", icon: "mysql/mysql-original" },
  { name: "Oracle", icon: "oracle/oracle-original" },
  { name: "MS SQL Server", icon: "microsoftsqlserver/microsoftsqlserver-original" },
  { name: "Redis", icon: "redis/redis-original" },
  { name: "Angular", icon: "angular/angular-original" },
  { name: "Git", icon: "git/git-original" },
  { name: "n8n", icon: null },
  { name: "Drizzle ORM", icon: null },
  { name: "EF Core", icon: null },
  { name: "DevExpress", icon: null },
  { name: "Supabase", icon: null },
  { name: "Turborepo", icon: null },
] as const;

const TechStackSection = () => {
  return (
    <div className="w-full py-6 border-t border-b border-foreground/10 bg-foreground/[0.02] flex flex-col items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full overflow-hidden relative flex items-center"
      >
        {/* Gradients to fade edges */}
        <div className="absolute left-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Marquee Animation */}
        <div className="flex w-max animate-[marquee_45s_linear_infinite] whitespace-nowrap items-center hover:[animation-play-state:paused] py-1">
          {[...technologies, ...technologies].map((tech, i) => (
            <div
              key={`${tech.name}-${i}`}
              className="mx-3 px-5 py-2.5 rounded-full border border-foreground/10 bg-background/80 text-foreground font-medium text-sm flex items-center gap-3 transition-all hover:scale-105 hover:border-primary/50 hover:bg-foreground/5 cursor-default shadow-sm group shrink-0"
            >
              {tech.icon && (
                <img
                  src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tech.icon}.svg`}
                  alt=""
                  aria-hidden="true"
                  className="w-5 h-5 object-contain group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                  decoding="async"
                />
              )}
              <span className="tracking-wide text-xs md:text-sm">{tech.name}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-\\[marquee_45s_linear_infinite\\] { animation: none; }
        }
      `}} />
    </div>
  );
};

export default TechStackSection;
