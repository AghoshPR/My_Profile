import { motion } from "framer-motion";
import { CheckCircle2, Sparkles, ExternalLink } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { projects } from "./data";

export function Projects() {
  const flagship = projects.find((p) => p.flagship)!;
  const rest = projects.filter((p) => !p.flagship);

  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-24 sm:px-6">
      <SectionHeading kicker="Portfolio" title="Featured Projects" />

      <Reveal>
        <div className="glass-card shadow-glow overflow-hidden rounded-3xl lg:grid lg:grid-cols-2">
          <div className="relative">
            <img
              src={flagship.image}
              alt="LearnBridge e-learning platform dashboard"
              width={1280}
              height={800}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="p-8 lg:p-10">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary">
              <Sparkles className="h-3.5 w-3.5" /> Flagship Project
            </div>
            <h3 className="text-2xl font-bold">{flagship.name}</h3>
            <p className="mt-1 text-muted-foreground">{flagship.tagline}</p>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {flagship.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {f}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              {flagship.tech.map((t) => (
                <span key={t} className="rounded-full border border-glass-border bg-secondary/60 px-3 py-1 text-xs font-medium">
                  {t}
                </span>
              ))}
            </div>
            {flagship.liveUrl && (
              <a
                href={flagship.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                referrerPolicy="no-referrer"
                className="bg-gradient-primary shadow-glow mt-6 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
              >
                Visit Live Site <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {rest.map((p, i) => (
          <Reveal key={p.name} delay={(i % 3) * 0.08}>
            <motion.article
              whileHover={{ y: -8, rotateX: 2, rotateY: -2, scale: 1.015 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              style={{ transformPerspective: 1000 }}
              className="glass-card flex h-full flex-col overflow-hidden rounded-2xl"
            >
              {p.image && (
                <img
                  src={p.image}
                  alt={`${p.name} interface`}
                  width={1280}
                  height={800}
                  loading="lazy"
                  className="aspect-video w-full object-cover"
                />
              )}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.tagline}</p>
                <ul className="mt-4 space-y-1.5">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-wrap gap-2 pt-5">
                  {p.tech.map((t) => (
                    <span key={t} className="rounded-full border border-glass-border bg-secondary/60 px-2.5 py-0.5 text-xs font-medium">
                      {t}
                    </span>
                  ))}
                </div>
                {p.liveUrl && (
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    referrerPolicy="no-referrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-accent"
                  >
                    Live Demo <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}