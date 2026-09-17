import { motion } from "framer-motion";
import { Code2, Cpu, Layers, Sparkles } from "lucide-react";
import { stats } from "../../data/profile";

const statIcons = [Layers, Code2, Cpu, Sparkles];

export const AboutSection = () => {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-24">
      <motion.div
        className="flex flex-col md:flex-row gap-16 items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="flex-1 space-y-8">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Building with <span className="text-gradient-primary">Clean Architecture</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a Full-Stack Developer working comfortably on both sides of the stack — designing
              RESTful APIs with ASP.NET Core, Clean Architecture, and CQRS on one project, and
              shipping React + TypeScript SPAs backed by Node.js/Express microservices on another.
              My experience spans enterprise dashboards for international organizations, a
              production job-aggregation platform, and financial modeling software for the
              green-hydrogen sector — with AI tooling woven into how I research, prototype, and
              debug along the way.
            </p>
          </div>
        </div>

        <div className="flex-1 grid grid-cols-2 gap-4 w-full">
          {stats.map((stat, i) => {
            const Icon = statIcons[i % statIcons.length];
            return (
              <motion.div
                key={stat.label}
                className="glass-panel p-6 rounded-2xl border border-foreground/10 hover:border-primary/50 transition-colors group relative overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="absolute -right-6 -top-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors" />
                <div className="text-primary mb-4 p-3 bg-primary/10 w-max rounded-xl">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-1">{stat.value}</h3>
                <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};
