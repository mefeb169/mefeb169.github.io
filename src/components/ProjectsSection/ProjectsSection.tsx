import { motion } from "framer-motion";
import { ArrowUpRight, Lock } from "lucide-react";
import { projects } from "../../data/profile";

// 12-column bento layout — alternates wide/narrow cards like the original template,
// just sized to however many real projects exist.
const gridClasses = [
  "md:col-span-7 h-[420px]",
  "md:col-span-5 h-[420px]",
  "md:col-span-5 h-[360px]",
  "md:col-span-7 h-[360px]",
  "md:col-span-6 h-[360px]",
  "md:col-span-6 h-[360px]",
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="w-full max-w-7xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="mb-12 md:mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-center md:text-left">
          Selected <span className="text-gradient-primary">Work</span>
        </h2>
        <p className="text-muted-foreground text-center md:text-left max-w-2xl text-lg">
          Systems I've designed, built, and shipped — from internal enterprise dashboards to
          public production platforms.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full">
        {projects.map((project, i) => {
          const Wrapper = project.url ? motion.a : motion.div;
          return (
            <Wrapper
              key={project.title}
              {...(project.url ? { href: project.url, target: "_blank", rel: "noreferrer" } : {})}
              className={`group relative overflow-hidden rounded-[2.25rem] block shadow-xl border border-foreground/10 ${gridClasses[i % gridClasses.length]}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              {/* Generated gradient background — no stock photography, nothing implies a screenshot */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} bg-neutral-950`}>
                <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between pointer-events-none">
                <div className="flex justify-end">
                  {!project.url && (
                    <span className="z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white/90 text-[11px] font-semibold uppercase tracking-wide">
                      <Lock className="w-3 h-3" /> {project.accessNote}
                    </span>
                  )}
                </div>

                <div className="flex items-end justify-between gap-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300 transform-gpu">
                  <div className="z-10 max-w-lg">
                    <p className="text-xs font-bold uppercase tracking-widest text-white/60 mb-1">
                      {project.subtitle}
                    </p>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2 tracking-tight drop-shadow-md">
                      {project.title}
                    </h3>
                    <p className="text-sm md:text-base font-medium text-white/80 opacity-90 group-hover:opacity-100 transition-opacity duration-300 mb-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.slice(0, 5).map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded-full bg-white/10 border border-white/20 text-white/80 text-[10px] font-semibold"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {project.url && (
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shrink-0 opacity-80 group-hover:opacity-100 group-hover:bg-white group-hover:text-black transition-all duration-300 rotate-45 group-hover:rotate-0 z-10 shadow-lg pointer-events-none">
                      <ArrowUpRight className="w-6 h-6 text-white group-hover:text-black transition-colors" />
                    </div>
                  )}
                </div>
              </div>
            </Wrapper>
          );
        })}
      </div>
    </section>
  );
};
