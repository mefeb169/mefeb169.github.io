import { motion } from "framer-motion";
import { recommendations } from "../../data/profile";

/**
 * Renders nothing while `recommendations` is empty (see src/data/profile.ts) — no
 * invented client quotes ship on this site. Add real, attributed LinkedIn recommendations
 * to that array and this section appears automatically.
 */
const TestimonialsSection = () => {
  if (recommendations.length === 0) return null;

  return (
    <section id="testimonials" className="max-w-7xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="mb-16 text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          What People <span className="text-gradient-primary">Say</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Recommendations from colleagues and clients I've worked with.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recommendations.map((rec, i) => (
          <motion.div
            key={rec.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="glass-panel p-8 rounded-3xl border border-foreground/10 flex flex-col relative overflow-hidden group hover:border-primary/30 transition-colors duration-500"
          >
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/10 rounded-full blur-[40px] group-hover:bg-primary/20 transition-colors duration-500 pointer-events-none" />

            <div className="absolute top-6 right-8 text-primary/10 select-none">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 11l-2 2v-3H4V4h6v7zm10 0l-2 2v-3h-4V4h6v7z" />
              </svg>
            </div>

            <p className="text-muted-foreground leading-relaxed flex-grow relative z-10 italic mb-8">
              "{rec.quote}"
            </p>

            <div className="flex items-center gap-4 relative z-10 mt-auto">
              <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold">
                {rec.name.charAt(0)}
              </div>
              <div>
                <h4 className="text-foreground font-bold text-sm">{rec.name}</h4>
                <p className="text-primary text-xs font-medium">{rec.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
