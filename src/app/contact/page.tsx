"use client";

import Link from "next/link";
import {
  ArrowRight, Mail, MapPin, Send,
  MessageSquare, Sparkles, CheckCircle2, Building2,
  Linkedin, Twitter, Globe, Youtube,
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const contactMethods = [
  {
    icon: Mail, title: "Email Us",
    value: "hello@abetworks.in",
    href: "mailto:hello@abetworks.in",
    accent: "text-primary", bg: "bg-primary/5",
    desc: "We typically respond within 24 hours.",
  },
  {
    icon: MapPin, title: "Our Location",
    value: "India",
    href: "#",
    accent: "text-secondary", bg: "bg-secondary/5",
    desc: "Available for remote collaboration worldwide.",
  },
];

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: "#", accent: "text-primary", bg: "bg-primary/5" },
  { icon: Twitter, label: "Twitter / X", href: "#", accent: "text-accent", bg: "bg-accent/5" },
  { icon: Youtube, label: "YouTube", href: "#", accent: "text-rose", bg: "bg-rose/5" },
  { icon: Globe, label: "Website", href: "https://abetworks.in", accent: "text-warm", bg: "bg-warm/5" },
];

const faqs = [
  {
    q: "What services does Abet Works provide?",
    a: "We offer AI solutions, data analytics, modern web development, SEO optimization, and business consulting — all tailored to your specific needs.",
  },
  {
    q: "How quickly can you start a project?",
    a: "Most projects kick off within a week of the initial consultation. We follow an agile methodology for rapid delivery.",
  },
  {
    q: "Do you work with startups or only enterprises?",
    a: "Both. We work with businesses of all sizes — from early-stage startups to established enterprises. Every client gets the same commitment to quality.",
  },
  {
    q: "What is your pricing model?",
    a: "We offer flexible engagement models: fixed-price for well-defined projects, retainer for ongoing work, and milestone-based for larger initiatives.",
  },
];

export default function ContactPage() {
  return (
    <div className="overflow-hidden">
      {/* ============ HERO ============ */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-20 bg-gradient-to-b from-primary/[0.04] via-white to-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 size-[500px] rounded-full bg-primary/[0.05] blur-[130px]" />
          <div className="absolute -bottom-40 left-1/3 size-[400px] rounded-full bg-secondary/[0.04] blur-[110px]" />
        </div>
        <div className="absolute inset-0 opacity-[0.4]"
          style={{ backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.06) 1px, transparent 0)`, backgroundSize: "24px 24px" }}
        />
        <div className="container-main relative z-10 pt-12">
          <div className="max-w-4xl">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-xs text-primary font-medium tracking-wide mb-6">
                <MessageSquare className="size-3.5" />
                Get in Touch
              </div>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] mb-6 text-text-primary">
                Let&apos;s Build
                <br />
                <span className="gradient-text">Something Great</span>
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <p className="text-lg md:text-xl text-text-secondary max-w-2xl mb-8 leading-relaxed">
                Have a project in mind? Want to learn more about our solutions? 
                We&apos;d love to hear from you. Reach out and let&apos;s talk.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ============ CONTACT + FORM ============ */}
      <section className="py-16 relative">
        <div className="container-main">
          <div className="grid lg:grid-cols-5 gap-6">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-4">
              {contactMethods.map((m, i) => (
                <AnimatedSection key={m.title} delay={i * 80}>
                  <a
                    href={m.href}
                    className="flex items-start gap-4 glass-card rounded-2xl p-6 hover:glass-strong hover:shadow-md transition-all duration-500 group"
                  >
                    <div className={`size-11 rounded-xl ${m.bg} ${m.accent} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                      <m.icon className="size-5" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-text-muted mb-0.5">{m.title}</p>
                      <p className="font-semibold text-text-primary text-sm">{m.value}</p>
                      <p className="text-xs text-text-secondary mt-1">{m.desc}</p>
                    </div>
                  </a>
                </AnimatedSection>
              ))}

              {/* Social Links */}
              <AnimatedSection delay={300}>
                <div className="glass-card rounded-2xl p-6">
                  <p className="text-xs uppercase tracking-wider text-text-muted mb-4">Connect With Us</p>
                  <div className="flex gap-2">
                    {socialLinks.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        className={`size-11 rounded-xl ${s.bg} ${s.accent} flex items-center justify-center hover:scale-110 transition-transform`}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={s.label}
                      >
                        <s.icon className="size-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <AnimatedSection delay={100}>
                <div className="glass-card rounded-3xl p-8 lg:p-10">
                  <h3 className="text-2xl font-bold tracking-tight text-text-primary mb-1">Send Us a Message</h3>
                  <p className="text-sm text-text-secondary mb-8">Fill out the form and we&apos;ll get back to you within 24 hours.</p>

                  <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-xs uppercase tracking-wider text-text-muted block mb-2">Full Name</label>
                        <input
                          type="text"
                          placeholder="John Doe"
                          className="w-full px-4 py-3 rounded-xl border border-border bg-white/70 text-text-primary text-sm focus:outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/5 transition-all placeholder:text-text-muted/60"
                        />
                      </div>
                      <div>
                        <label className="text-xs uppercase tracking-wider text-text-muted block mb-2">Email</label>
                        <input
                          type="email"
                          placeholder="john@example.com"
                          className="w-full px-4 py-3 rounded-xl border border-border bg-white/70 text-text-primary text-sm focus:outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/5 transition-all placeholder:text-text-muted/60"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs uppercase tracking-wider text-text-muted block mb-2">Subject</label>
                      <input
                        type="text"
                        placeholder="How can we help you?"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-white/70 text-text-primary text-sm focus:outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/5 transition-all placeholder:text-text-muted/60"
                      />
                    </div>
                    <div>
                      <label className="text-xs uppercase tracking-wider text-text-muted block mb-2">Message</label>
                      <textarea
                        rows={6}
                        placeholder="Tell us about your project..."
                        className="w-full px-4 py-3 rounded-xl border border-border bg-white/70 text-text-primary text-sm focus:outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/5 transition-all placeholder:text-text-muted/60 resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 rounded-full gradient-bg px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:scale-[1.02]"
                    >
                      Send Message <Send className="size-4" />
                    </button>
                  </form>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-accent/[0.015] to-white pointer-events-none" />
        <div className="container-main relative">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-xs text-accent font-medium tracking-wide mb-4">
              <Sparkles className="size-3.5" />
              FAQ
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-text-primary">
              Frequently Asked <span className="gradient-text-accent">Questions</span>
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              Quick answers to common questions. Don&apos;t see yours? Reach out directly.
            </p>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((f, i) => (
              <AnimatedSection key={f.q} delay={i * 80}>
                <details className="glass-card rounded-2xl p-6 group open:glass-strong transition-all duration-300">
                  <summary className="cursor-pointer flex items-center justify-between text-text-primary font-medium text-sm list-none">
                    {f.q}
                    <span className="text-text-muted text-xl transition-transform duration-300 group-open:rotate-45 shrink-0 ml-4">+</span>
                  </summary>
                  <p className="text-sm text-text-secondary mt-4 leading-relaxed border-t border-border pt-4">{f.a}</p>
                </details>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="py-24 relative">
        <div className="absolute inset-0 overflow-hidden bg-gradient-to-b from-white via-primary/[0.02] to-white">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[500px] rounded-full bg-gradient-to-r from-primary/[0.04] via-accent/[0.03] to-secondary/[0.04] blur-[120px]" />
        </div>
        <div className="container-main relative text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-xs text-primary font-medium tracking-wide mb-6">
              <Building2 className="size-3.5" />
              Start Your Journey
            </div>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-text-primary">
              Prefer a Quick Call?
              <br />
              <span className="gradient-text">Book a Free Consultation</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="text-text-secondary max-w-lg mx-auto mb-10">
              30 minutes. No pitch. Just real advice on how we can help transform your digital presence.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={300}>
            <Link href="mailto:hello@abetworks.in" className="group inline-flex items-center gap-2 rounded-full gradient-bg px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:scale-[1.02]">
              Email Us Directly
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
