import SkillCategory from "./SkillCategory";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, Building2, Award } from "lucide-react";
import { MagicCard } from "../lightswind/magic-card";
import { education } from "../../data/profile";

export const EducationSection = () => {
  return (
    <section id="education" className="max-w-7xl mx-auto px-6 py-24 space-y-20">
      {/* Education Header & Cards */}
      <div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-3">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/25 flex items-center justify-center text-primary shadow-md">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              Academic <span className="text-gradient-primary">Background</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl">
            The formal foundation underneath the day-to-day engineering work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <MagicCard
                className="h-full p-8 rounded-[2.25rem] border border-border/80 bg-card/80 shadow-xl"
                gradientSize={300}
                gradientColor="rgba(139, 92, 246, 0.12)"
                gradientFrom="#8b5cf6"
                gradientTo="#38bdf8"
              >
                <div className="flex flex-col h-full justify-between gap-6">
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/25 text-primary flex items-center justify-center shadow-sm mb-6">
                      <GraduationCap className="w-7 h-7 text-primary" />
                    </div>

                    <h3 className="text-xl font-extrabold text-foreground tracking-tight mb-2">
                      {edu.degree}
                    </h3>

                    <div className="flex flex-col gap-2 text-xs font-semibold text-muted-foreground pb-4 border-b border-border/60">
                      <span className="flex items-center gap-1.5 text-foreground font-bold">
                        <Building2 className="w-3.5 h-3.5 text-primary" /> {edu.school}
                      </span>
                      {edu.dates && (
                        <span className="flex items-center gap-1.5 font-mono text-primary font-bold">
                          <Calendar className="w-3.5 h-3.5" /> {edu.dates}
                        </span>
                      )}
                      {edu.grade && (
                        <span className="flex items-center gap-1.5">
                          <Award className="w-3.5 h-3.5 text-primary" /> {edu.grade}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </MagicCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Expertise & Skills Component */}
      <div>
        <SkillCategory />
      </div>
    </section>
  );
};
