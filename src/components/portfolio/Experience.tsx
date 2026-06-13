import { GraduationCap, BookOpen } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

export function Experience() {
  return (
    <section id="experience" className="relative scroll-mt-20 py-24">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-32 top-1/4 h-72 w-72 rounded-full bg-accent/15 blur-[110px]" />
      </div>
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading kicker="Journey" title="Experience & Education" />
        <div className="relative ml-4 space-y-10 border-l border-glass-border pl-8 sm:ml-8">
          <Reveal>
            <div className="relative">
              <span className="bg-gradient-primary shadow-glow absolute -left-[45px] top-1 flex h-7 w-7 items-center justify-center rounded-full text-primary-foreground sm:-left-[46px]">
                <GraduationCap className="h-3.5 w-3.5" />
              </span>
              <div className="glass-card rounded-2xl p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-accent">Intensive Training</p>
                <h3 className="mt-1 text-xl font-semibold">Python Full Stack Development</h3>
                <p className="mt-1 text-sm text-muted-foreground">Brototype — Trivandrum, Kerala</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Self-driven, project-based training program covering the complete Python full stack —
                  Django, FastAPI, React, databases, async systems, and AWS deployment. Built and shipped
                  multiple production-grade applications including a full e-learning platform and an
                  e-commerce store with live payment integrations.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative">
              <span className="bg-gradient-primary shadow-glow absolute -left-[45px] top-1 flex h-7 w-7 items-center justify-center rounded-full text-primary-foreground sm:-left-[46px]">
                <BookOpen className="h-3.5 w-3.5" />
              </span>
              <div className="glass-card rounded-2xl p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-accent">Education · 2021 – 2024</p>
                <h3 className="mt-1 text-xl font-semibold">Bachelor of Computer Application (BCA)</h3>
                <p className="mt-1 text-sm text-muted-foreground">Mother Arts and Science College — Thrissur, Kerala</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Built a strong foundation in computer science fundamentals — data structures, OOP,
                  databases, and software engineering principles that underpin my full stack work today.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}