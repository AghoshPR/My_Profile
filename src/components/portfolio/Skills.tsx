import { motion } from "framer-motion";
import { Database, Globe, Server, Cloud, Radio, Code2, Wrench, Plug, Lightbulb, Search } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { skillCategories } from "./data";

const icons = [Code2, Server, Globe, Database, Cloud, Radio, Search, Plug, Wrench, Lightbulb];

export function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-20 py-24">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 -left-32 h-80 w-80 rounded-full bg-primary/15 blur-[120px]" />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading kicker="Skills" title="Technologies I work with" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={cat.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="glass-card h-full rounded-2xl p-6"
                >
                  <div className="mb-5 flex items-center gap-3">
                    <div className="bg-gradient-primary rounded-lg p-2.5 text-primary-foreground">
                      <Icon className="h-4 w-4" />
                    </div>
                    <h3 className="font-semibold">{cat.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((s, j) => (
                      <motion.span
                        key={s}
                        initial={{ opacity: 0, scale: 0.7 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.12, y: -2 }}
                        transition={{ type: "spring", stiffness: 320, damping: 18, delay: j * 0.04 }}
                        className="cursor-default rounded-full border border-glass-border bg-secondary/60 px-3 py-1 text-xs font-medium text-secondary-foreground transition-colors hover:border-primary/50"
                      >
                        {s}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}