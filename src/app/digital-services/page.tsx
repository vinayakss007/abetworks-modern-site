"use client";

import Link from "next/link";
import {
  ArrowRight,
  Globe,
  Search,
  BarChart3,
  Lightbulb,
  Code2,
  Megaphone,
  CheckCircle2,
  Zap,
  Users,
  Bot,
  TrendingUp,
  Palette,
  PenTool,
  Sparkles,
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/Badge";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { StatsCounter } from "@/components/ui/StatsCounter";

const services = [
  {
    id: "web-development",
    icon: Code2,
    title: "Web Development",
    desc: "Modern, high-performance websites built with Next.js, React, and Tailwind. Responsive, fast, and conversion-optimized.",
    features: [
      "Next.js 16 & React 19 applications",
      "Responsive, mobile-first design",
      "Sub-2 second load times",
      "SEO-optimized architecture",
      "CMS integration (Strapi, Sanity)",
      "CI/CD with Vercel or Netlify",
    ],
    accent: "text-primary",
    border: "border-primary/15",
    iconBg: "bg-primary/5 text-primary",
  },
  {
    id: "seo",
    icon: Search,
    title: "SEO & Content Marketing",
    desc: "Data-driven SEO strategies that get you found. Technical SEO, content strategy, and AI visibility optimization.",
    features: [
      "Technical SEO audit & fixes",
      "Content strategy & creation",
      "AI search optimization (llms.txt, schema)",
      "Backlink acquisition strategy",
      "Local SEO for service areas",
      "Monthly performance reporting",
    ],
    accent: "text-accent",
    border: "border-accent/15",
    iconBg: "bg-accent/5 text-accent",
  },
  {
    id: "ai-solutions",
    icon: Bot,
    title: "AI Solutions & Consulting",
    desc: "Custom AI implementations — chatbots, automation, lead scoring, and intelligent workflows tailored to your business.",
    features: [
      "Custom AI chatbot development",
      "Workflow automation with AI",
      "Lead scoring & predictive models",
      "Document processing & extraction",
      "AI agent deployment",
      "Legacy system AI integration",
    ],
    accent: "text-secondary",
    border: "border-secondary/15",
    iconBg: "bg-secondary/5 text-secondary",
  },
  {
    id: "consulting",
    icon: Lightbulb,
    title: "Business Consulting",
    desc: "Strategic guidance on digital transformation, growth strategy, and operational efficiency for modern businesses.",
    features: [
      "Digital transformation roadmap",
      "Process optimization & automation",
      "Growth strategy & planning",
      "Technology stack evaluation",
      "Scale planning & infrastructure",
      "Revenue operations review",
    ],
    accent: "text-warm",
    border: "border-warm/15",
    iconBg: "bg-warm/5 text-warm",
  },
];

const stats = [
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 100, suffix: "%", label: "Client Satisfaction", prefix: "" },
  { value: 40, suffix: "%", label: "Avg. Performance Gain", prefix: "+" },
  { value: 3, suffix: "x", label: "Traffic Increase Avg.", prefix: "" },
];

const process = [
  { step: "Discover", desc: "We audit your current state — tech, SEO, operations, and goals." },
  { step: "Strategize", desc: "A tailored roadmap with clear milestones, timelines, and KPIs." },
  { step: "Execute", desc: "Our team builds, optimizes, and implements with weekly updates." },
  { step: "Optimize", desc: "Post-launch monitoring, iteration, and continuous improvement." },
];

export default function DigitalServicesPage() {
  return (
    <div className="overflow-hidden">
      {/* ==================== HERO ==================== */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-20 bg-gradient-to-b from-warm/[0.04] via-white to-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 right-1/3 size-[400px] rounded-full bg-warm/[0.06] blur-[130px]" />
          <div className="absolute bottom-1/4 left-1/4 size-[300px] rounded-full bg-primary/[0.04] blur-[100px]" />
        </div>
        <div className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.06) 1px, transparent 0)`,
            backgroundSize: "24px 24px",
          }}
        />

        <div className="container-main relative z-10">
          <div className="max-w-4xl">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-xs text-warm font-medium tracking-wide mb-6">
                <Sparkles className="size-3.5" />
                Agency Services
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] mb-6 text-text-primary">
                Digital Services
                <br />
                <span className="gradient-text-warm">& Consultancy</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <p className="text-lg md:text-xl text-text-secondary max-w-2xl mb-8 leading-relaxed">
                From stunning websites to growth strategy — we build, optimize, and scale your 
                digital presence with modern technology and AI-powered approaches.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-full gradient-bg-warm px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-warm/20 hover:scale-[1.02]"
                >
                  Book Consultation
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="#services"
                  className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-text-secondary border border-border hover:border-text-muted/30 hover:text-text-primary glass-card transition-all duration-300"
                >
                  View Services
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ==================== STATS ==================== */}
      <section className="py-16 relative">
        <div className="container-main">
          <div className="rounded-3xl glass-card p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <AnimatedSection key={stat.label} delay={i * 100}>
                  <StatsCounter
                    value={typeof stat.value === "number" ? stat.value : parseFloat(stat.value)}
                    suffix={stat.suffix}
                    label={stat.label}
                    prefix={stat.prefix || ""}
                  />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SERVICES GRID ==================== */}
      <section id="services" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-warm/[0.015] to-white pointer-events-none" />
        <div className="container-main relative">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-xs text-warm font-medium tracking-wide mb-4">
              What We Do
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-text-primary">
              Full-Service Digital <span className="gradient-text-warm">Agency</span>
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              From concept to scale — we handle every layer of your digital presence.
            </p>
          </AnimatedSection>

          <div className="space-y-6">
            {services.map((service, i) => (
              <AnimatedSection key={service.id} delay={i * 100}>
                <div
                  id={service.id}
                  className={`rounded-3xl border ${service.border} glass-card hover:glass-strong p-8 lg:p-12 transition-all duration-500`}
                >
                  <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`size-13 rounded-2xl ${service.iconBg} flex items-center justify-center shadow-sm`}>
                          <service.icon className="size-6" />
                        </div>
                        <h3 className="text-2xl font-bold text-text-primary">{service.title}</h3>
                      </div>
                      <p className="text-text-secondary leading-relaxed mb-6">{service.desc}</p>
                      <Link
                        href="#contact"
                        className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold border border-current ${service.accent} hover:bg-black/[0.03] transition-all`}
                      >
                        Learn More <ArrowRight className="size-4" />
                      </Link>
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-widest text-text-muted mb-4">What&apos;s Included</h4>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {service.features.map((f) => (
                          <div key={f} className="flex items-start gap-2 text-sm text-text-secondary">
                            <CheckCircle2 className={`size-4 ${service.accent} mt-0.5 shrink-0`} />
                            {f}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== WHY CHOOSE US ==================== */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-warm/[0.015] to-white pointer-events-none" />
        <div className="container-main relative">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-xs text-warm font-medium tracking-wide mb-4">
              Why Us
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-text-primary">
              We Build What <span className="gradient-text-warm">Actually Works</span>
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              Not template sites. Not brochure pages. Real, modern, high-performance digital products.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Code2, title: "Modern Stack", desc: "Next.js, React, Tailwind — not WordPress templates. Your site loads in under 2 seconds.", accent: "text-primary", bg: "bg-primary/5" },
              { icon: Search, title: "SEO-First", desc: "Built for Google and AI search engines. Schema, llms.txt, structured data — all included.", accent: "text-accent", bg: "bg-accent/5" },
              { icon: TrendingUp, title: "Conversion Focused", desc: "Every pixel serves a purpose. Design decisions backed by data, not opinion.", accent: "text-secondary", bg: "bg-secondary/5" },
              { icon: Zap, title: "AI-Native", desc: "We integrate AI into your workflows, not as an afterthought but as a core capability.", accent: "text-warm", bg: "bg-warm/5" },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 100}>
                <div className="rounded-2xl glass-card p-6 text-center h-full hover:glass-strong hover:shadow-md transition-all duration-500">
                  <div className={`size-11 rounded-xl ${item.bg} ${item.accent} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <item.icon className="size-5" />
                  </div>
                  <h3 className="font-semibold mb-2 text-text-primary">{item.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== PROCESS ==================== */}
      <section className="py-24 relative">
        <div className="container-main">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-xs text-warm font-medium tracking-wide mb-4">
              Process
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-text-primary">
              How We <span className="gradient-text-warm">Work</span>
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              A proven 4-phase approach that delivers results.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {process.map((item, i) => (
              <AnimatedSection key={item.step} delay={i * 100}>
                <div className="rounded-2xl glass-card p-6 hover:glass-strong hover:shadow-md transition-all duration-500">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="size-10 rounded-full gradient-bg-warm flex items-center justify-center text-white font-bold text-sm shadow-sm">
                      {i + 1}
                    </div>
                    <h3 className="font-semibold text-text-primary">{item.step}</h3>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="py-24 relative">
        <div className="absolute inset-0 overflow-hidden bg-gradient-to-b from-white via-warm/[0.02] to-white">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[500px] rounded-full bg-gradient-to-r from-warm/[0.05] via-secondary/[0.04] to-primary/[0.04] blur-[120px]" />
        </div>
        <div className="container-main relative text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-xs text-warm font-medium tracking-wide mb-6">
              <Zap className="size-3.5" />
              Get Started
            </div>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-text-primary">
              Ready to Build <span className="gradient-text-warm">Something Great</span>?
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="text-text-secondary max-w-lg mx-auto mb-8">
              Free 30-minute consultation. No pitch — just real advice on your digital strategy.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={300}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="#"
                className="group inline-flex items-center gap-2 rounded-full gradient-bg-warm px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-warm/20 hover:scale-[1.02]"
              >
                Book Free Consultation
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="mailto:hello@abetworks.in"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-text-secondary border border-border hover:border-text-muted/30 hover:text-text-primary glass-card transition-all duration-300"
              >
                Email Us
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
