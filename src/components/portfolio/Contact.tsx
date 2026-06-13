import { useState } from "react";
import { z } from "zod";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { toast } from "sonner";
import { submitContactMessage } from "@/lib/contact.functions";
import { Reveal, SectionHeading } from "./Reveal";
import { socials } from "./data";

const schema = z.object({
  name: z.string().trim().nonempty("Name is required").max(100, "Name is too long"),
  email: z.string().trim().email("Enter a valid email").max(255),
  message: z.string().trim().nonempty("Message is required").max(1000, "Message is too long"),
});

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = schema.safeParse(form);
    if (!res.success) {
      const errs: Record<string, string> = {};
      for (const issue of res.error.issues) errs[issue.path[0] as string] = issue.message;
      setErrors(errs);
      return;
    }
    setErrors({});
    setSending(true);
    try {
      const result = await submitContactMessage(res.data);
      if (result.success) {
        toast.success("Thank you for reaching out. Your message has been sent successfully.");
        setForm({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send message. Please try again later.");
      }
    } catch {
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setSending(false);
    }
  };

  const inputCls =
    "w-full rounded-xl border border-glass-border bg-secondary/40 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary";

  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-24 sm:px-6">
      <SectionHeading kicker="Contact" title="Let's build something together" />
      <div className="grid gap-10 lg:grid-cols-5">
        <Reveal className="lg:col-span-2">
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Open to full-time roles, freelance projects, and collaborations. Drop a message and I'll
              respond within a day.
            </p>
            {[
              { icon: Mail, label: "Email", href: socials.email, text: "aghoshpr03@gmail.com" },
              { icon: Linkedin, label: "LinkedIn", href: socials.linkedin, text: "Connect on LinkedIn" },
              { icon: Github, label: "GitHub", href: socials.github, text: "View my code" },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="glass-card flex items-center gap-4 rounded-2xl p-4 transition-transform hover:-translate-y-0.5"
              >
                <div className="bg-gradient-primary rounded-lg p-2.5 text-primary-foreground">
                  <c.icon className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold">{c.label}</p>
                  <p className="text-sm text-muted-foreground">{c.text}</p>
                </div>
              </a>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-3">
          <form onSubmit={onSubmit} className="glass-card space-y-4 rounded-2xl p-6 sm:p-8" noValidate>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium">Name</label>
                <input
                  id="name"
                  className={inputCls}
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium">Email</label>
                <input
                  id="email"
                  type="email"
                  className={inputCls}
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
              </div>
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium">Message</label>
              <textarea
                id="message"
                rows={5}
                className={inputCls}
                placeholder="Tell me about your project or opportunity..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
              {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
            </div>
            <button
              type="submit"
              disabled={sending}
              className="bg-gradient-primary shadow-glow shine-on-hover inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105 disabled:opacity-60"
            >
              {sending ? "Sending..." : "Send Message"} <Send className="h-4 w-4" />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}