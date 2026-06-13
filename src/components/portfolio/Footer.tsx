import { Github, Linkedin, Code2, Mail } from "lucide-react";
import { socials } from "./data";

const nav = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-glass-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-10 sm:px-6 md:flex-row md:justify-between">
        <a href="#top" className="font-display text-lg font-bold">
          <span className="text-gradient">AGHOSH</span>
          <span className="text-muted-foreground">.PR</span>
        </a>
        <nav className="flex flex-wrap justify-center gap-5">
          {nav.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          {[
            { icon: Github, href: socials.github, label: "GitHub" },
            { icon: Linkedin, href: socials.linkedin, label: "LinkedIn" },
            { icon: Code2, href: socials.leetcode, label: "LeetCode" },
            { icon: Mail, href: socials.email, label: "Email" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              target={s.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <s.icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
      <p className="pb-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Aghosh PR. Built with React &amp; Python passion.
      </p>
    </footer>
  );
}