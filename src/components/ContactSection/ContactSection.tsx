import { motion } from "framer-motion";
import { Send, MapPin, Github, Linkedin, Mail } from "lucide-react";
import { identity, social, contactEmail } from "../../data/profile";

const iconMap = { linkedin: Linkedin, github: Github, mail: Mail } as const;

export const ContactSection = () => {
  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="glass-panel p-8 md:p-12 rounded-[3rem] border border-foreground/10 relative overflow-hidden"
      >
        {/* Background Gradients */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row gap-12 md:gap-24">
          {/* Contact Info */}
          <div className="flex-1 space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Let's <span className="text-gradient-primary">Connect</span>
              </h2>
              <p className="text-muted-foreground">
                {identity.availability} — full-stack .NET/React roles, remote or based in{" "}
                {identity.location}. The fastest way to reach me is email or LinkedIn.
              </p>
            </div>

            <div className="space-y-6">
              {social.map((s) => {
                const Icon = iconMap[s.icon];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.icon === "mail" ? undefined : "_blank"}
                    rel={s.icon === "mail" ? undefined : "noreferrer"}
                    className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-medium">
                      {s.icon === "mail" ? contactEmail : s.href.replace("https://", "")}
                    </span>
                  </a>
                );
              })}
              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="font-medium">{identity.location}</span>
              </div>
            </div>
          </div>

          {/* Direct contact panel — no form: this is a static site with nowhere to submit to */}
          <div className="flex-1 glass-panel p-8 rounded-[2rem] border border-foreground/10 relative flex flex-col justify-center items-center text-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/25 text-primary flex items-center justify-center">
              <Send className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">Have a role or a project in mind?</h3>
              <p className="text-sm text-muted-foreground max-w-xs">
                Send a direct email and I'll get back to you — no forms, no middlemen.
              </p>
            </div>
            <a
              href={`mailto:${contactEmail}`}
              className="w-full rounded-xl bg-primary text-primary-foreground font-bold shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] h-12 flex items-center justify-center gap-2 transition-shadow"
            >
              Email {identity.name.split(" ")[0]} <Send className="w-4 h-4" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
