import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Server, Cloud, Layers, Zap } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1400;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - start) / dur, 1);
      setVal(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target]);

  return (
    <span ref={ref} className="text-gradient font-display text-4xl font-bold">
      {val}
      {suffix}
    </span>
  );
}

const highlights = [
  {
    icon: Server,
    title: "Backend Engineering",
    text: "Secure REST APIs with Django REST Framework and FastAPI — JWT, OAuth, and role-based access baked in.",
  },
  {
    icon: Zap,
    title: "Async & Realtime",
    text: "WebSockets, Django Channels, Celery, and Redis for live classes, chat, and high-throughput background jobs.",
  },
  {
    icon: Cloud,
    title: "Cloud Deployment",
    text: "Production deployments with Docker, AWS EC2/S3/RDS, and automated CI/CD pipelines.",
  },
  {
    icon: Layers,
    title: "Clean Architecture",
    text: "Maintainable, testable codebases with clear separation of concerns and scalable data models.",
  },
];

const stats = [
  { target: 6, suffix: "+", label: "Projects Built" },
  { target: 15, suffix: "+", label: "Technologies" },
  { target: 2, suffix: "", label: "Payment Gateways Integrated" },
  { target: 100, suffix: "%", label: "Production-Ready Mindset" },
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-24 sm:px-6">
      <SectionHeading kicker="About" title="Engineering for scale and reliability" />
      <Reveal>
        <p className="mx-auto max-w-3xl text-center text-lg text-muted-foreground">
          Python Full Stack Developer with hands-on experience building scalable web applications using
          Django, FastAPI, and React. Strong in developing secure REST APIs, real-time features using
          WebSockets, and asynchronous systems with Celery, Redis, and aiohttp. Experienced in integrating
          payment gateways and deploying production applications using Docker and AWS.
        </p>
      </Reveal>
      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {highlights.map((h, i) => (
          <Reveal key={h.title} delay={i * 0.08}>
            <motion.div
              whileHover={{ y: -8, scale: 1.015 }}
              transition={{ type: "spring", stiffness: 280, damping: 20 }}
              className="glass-card group h-full rounded-2xl p-6"
            >
              <motion.div
                whileHover={{ rotate: -8, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="bg-gradient-primary mb-4 inline-flex rounded-xl p-3 text-primary-foreground"
              >
                <h.icon className="h-5 w-5" />
              </motion.div>
              <h3 className="mb-2 text-lg font-semibold">{h.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{h.text}</p>
            </motion.div>
          </Reveal>
        ))}
      </div>
      <div className="mt-14 grid grid-cols-2 gap-6 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 280, damping: 20 }}
              className="glass-card rounded-2xl p-6 text-center"
            >
              <Counter target={s.target} suffix={s.suffix} />
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}