import { motion, AnimatePresence } from "framer-motion";
import { Code2, Layers, Sparkles, Star } from "lucide-react";
import { skillGroups, topSkills } from "../../data/profile";

// Categories rendered as the "Technical Arsenal" column vs. the "Practices & Traits" column,
// split the same way profile.md's Skills section groups them.
const traitCategories = new Set(["Practices & Domain", "Soft Skills"]);

export default function SkillCategory() {
  const technicalGroups = skillGroups.filter((g) => !traitCategories.has(g.category));
  const traitGroups = skillGroups.filter((g) => traitCategories.has(g.category));

  return (
    <motion.section
      id="skills"
      className="space-y-8"
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: { staggerChildren: 0.2, delayChildren: 0.3 },
      }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
          <Code2 className="w-5 h-5" />
        </div>
        <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">Skills</h3>
      </div>

      {/* Top 3 — pinned, matches the LinkedIn profile's pinned skills */}
      <div className="flex flex-wrap items-center gap-3">
        {topSkills.map((skill) => (
          <span
            key={skill}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary/15 border border-primary/40 text-primary text-sm font-bold shadow-sm"
          >
            <Star className="w-3.5 h-3.5 fill-primary" /> {skill}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Technical categories */}
        <div className="glass-panel p-8 rounded-[2rem] border border-foreground/15 shadow-xl relative overflow-hidden">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-border/60">
            <h4 className="text-xl font-bold text-foreground flex items-center gap-2">
              <Layers className="w-5 h-5 text-primary" /> Technical
            </h4>
          </div>

          <div className="space-y-5">
            {technicalGroups.map((group, i) => (
              <div key={group.category}>
                <h5 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2.5">
                  {group.category}
                </h5>
                <div className="flex flex-wrap gap-2">
                  <AnimatePresence>
                    {group.skills.map((skill, j) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.85 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ type: "spring", stiffness: 220, damping: 16, delay: i * 0.05 + j * 0.02 }}
                        viewport={{ once: true }}
                        className="px-3 py-1.5 rounded-full bg-foreground/5 border border-foreground/10 text-foreground/90 text-xs font-semibold hover:border-primary/40 hover:bg-primary/5 transition-colors cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Practices & Soft Skills */}
        <div className="glass-panel p-8 rounded-[2rem] border border-foreground/15 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-border/60">
              <h4 className="text-xl font-bold text-foreground flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" /> Practices & Traits
              </h4>
            </div>

            <div className="space-y-5">
              {traitGroups.map((group, i) => (
                <div key={group.category}>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2.5">
                    {group.category}
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, j) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.85 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ type: "spring", stiffness: 220, damping: 16, delay: i * 0.05 + j * 0.05 }}
                        viewport={{ once: true }}
                        className="px-3.5 py-2 rounded-2xl border border-primary/25 bg-primary/10 text-primary text-sm font-semibold shadow-sm hover:scale-105 transition-transform cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-border/60">
            <div className="p-4 rounded-2xl bg-gradient-to-r from-primary/10 via-purple-500/5 to-transparent border border-primary/20 flex items-start gap-3.5 shadow-sm">
              <div className="p-2 rounded-xl bg-primary/20 text-primary shrink-0 mt-0.5">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <strong className="text-foreground font-bold text-sm block mb-0.5">
                  AI-Empowered Development
                </strong>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  I use AI tooling to accelerate research, prototyping, code generation, and
                  debugging — while owning the architecture and quality of what ships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
