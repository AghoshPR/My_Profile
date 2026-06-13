import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Github, Linkedin, Code2, Braces, Cloud, Database } from "lucide-react";
import { ParticleBackground } from "./ParticleBackground";
import { socials } from "./data";
import portraitAsset from "@/assets/Photo.jpeg";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.6, 0.35, 1] as const } },
};

const wordContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18, delayChildren: 0.15 } },
};
const wordItem = {
  hidden: { opacity: 0, y: 20, x: -8, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: [0.21, 0.6, 0.35, 1] as const },
  },
};

function AnimatedHeading() {
  const parts: { text: string; gradient?: boolean }[] = [
    { text: "Hi," },
    { text: "I'm" },
    { text: "Aghosh", gradient: true },
    { text: "PR", gradient: true },
    { text: "—" },
    { text: "Python" },
    { text: "Full" },
    { text: "Stack" },
    { text: "Developer" },
  ];
  return (
    <motion.h1
      variants={wordContainer}
      initial="hidden"
      animate="show"
      className="max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-6xl"
    >
      {parts.map((p, i) => (
        <motion.span
          key={i}
          variants={wordItem}
          className={`mr-3 inline-block ${p.gradient ? "text-gradient" : ""}`}
        >
          {p.text}
        </motion.span>
      ))}
    </motion.h1>
  );
}

const floatBadges = [
  { icon: Braces, label: "Python", className: "-left-4 top-8 sm:-left-8", delay: 0 },
  { icon: Database, label: "Django & FastAPI", className: "-right-2 top-1/3 sm:-right-10", delay: 1.2 },
  { icon: Cloud, label: "Docker & AWS", className: "-left-2 bottom-10 sm:-left-10", delay: 2.4 },
];

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-primary/25 blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, -30, 25, 0], y: [0, 20, -15, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-1/5 bottom-0 h-80 w-80 rounded-full bg-accent/20 blur-[110px]"
        />
      </div>
      <ParticleBackground />
      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-14 px-4 pt-28 pb-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item}>
            <AnimatedHeading />
          </motion.div>
          <motion.p variants={item} className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Building Scalable Full Stack Applications with Python, Django, FastAPI &amp; React.
          </motion.p>
          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="bg-gradient-primary shadow-glow shine-on-hover inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              View Projects <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={socials.resume}
              download="AGHOSH_PR.pdf"
              className="glass-card inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:scale-105"
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="h-4 w-4" /> Contact Me
            </a>
          </motion.div>
          <motion.div variants={item} className="mt-12 flex items-center gap-4">
            {[
              { icon: Github, href: socials.github, label: "GitHub" },
              { icon: Linkedin, href: socials.linkedin, label: "LinkedIn" },
              { icon: Code2, href: socials.leetcode, label: "LeetCode" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="glass-card rounded-full p-3 text-muted-foreground transition-all hover:scale-110 hover:text-foreground"
              >
                <s.icon className="h-5 w-5" />
              </a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.21, 0.6, 0.35, 1] }}
          className="relative mx-auto w-full max-w-xs sm:max-w-sm lg:justify-self-end"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <motion.div
              aria-hidden
              animate={{ opacity: [0.45, 0.75, 0.45] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-1.5 rounded-[2rem]"
              style={{
                background:
                  "linear-gradient(135deg, hsl(245 80% 62%), hsl(190 90% 55%))",
                filter: "blur(14px)",
              }}
            />
            <motion.div
              whileHover={{ rotate: 1.5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="glass-card relative overflow-hidden rounded-[2rem] p-2"
            >
              <img
                src={portraitAsset}
                alt="Aghosh PR — Python Full Stack Developer"
                width={640}
                height={853}
                loading="eager"
                className="aspect-[3/4] w-full rounded-[1.6rem] object-cover object-top"
              />
              <div className="pointer-events-none absolute inset-2 rounded-[1.6rem] bg-gradient-to-t from-background/50 via-transparent to-transparent" />
            </motion.div>
            {floatBadges.map((b) => (
              <motion.div
                key={b.label}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: b.delay }}
                className={`glass-card absolute flex items-center gap-2 rounded-full px-3.5 py-2 text-xs font-semibold shadow-glow ${b.className}`}
              >
                <b.icon className="h-3.5 w-3.5 text-accent" />
                {b.label}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}