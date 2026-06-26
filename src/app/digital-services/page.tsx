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
    gradient: "from-primary/10 to-primary/5",
    border: "border-primary/20",
    accent: "text-primary",
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
    gradient: "from-accent/10 to-accent/5",
    border: "border-accent/20",
    accent: "text-accent",
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
    gradient: "from-secondary/10 to-secondary/5",
    border: "border-secondary/20",
    accent: "text-secondary",
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
    gradient: "from-accent-orange/10 to-accent-orange/5",
    border: "border-accent-orange/20",
    accent: "text-accent-orange",
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
      <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-orange/10 via-bg-dark to-bg-dark" />
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/3 size-[400px] rounded-full bg-accent-orange/10 blur-[130px] animate-pulse-glow" />
          <div className="absolute bottom-1/4 left-1/4 size-[300px] rounded-full bg-primary/10 blur-[100px] animate-float-slow" />
        </div>
        <div className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,.1) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="container-main relative z-10">
          <div className="max-w-4xl">
            <AnimatedSection>
              <Badge variant="warning" className="mb-6">
                <Zap className="size-3" /> Agency Services
              </Badge>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] mb-6">
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
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-orange to-secondary px-8 py-3.5 text-base font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-accent-orange/25 hover:scale-[1.02]"
                >
                  Book Consultation
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="#services"
                  className="inline-flex items-center gap-2 rounded-full bg-bg-card text-text-primary border border-border px-8 py-3.5 text-base font-medium hover:border-accent-orange/30 transition-all duration-300"
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
          <div className="rounded-3xl border border-border/50 bg-gradient-to-br from-bg-card to-bg-card-hover p-8 md:p-12">
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
        <div className="container-main">
          <AnimatedSection className="text-center mb-16">
            <Badge variant="warning" className="mb-4">What We Do</Badge>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Full-Service Digital <span className="gradient-text-warm">Agency</span>
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              From concept to scale — we handle every layer of your digital presence.
            </p>
          </AnimatedSection>

          <div className="space-y-8">
            {services.map((service, i) => (
              <AnimatedSection key={service.id} delay={i * 100}>
                <div
                  id={service.id}
                  className={`rounded-3xl border ${service.border} bg-gradient-to-br ${service.gradient} p-8 lg:p-12`}
                >
                  <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`size-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center`}>
                          <service.icon className={`size-6 ${service.accent}`} />
                        </div>
                        <h3 className="text-2xl font-bold">{service.title}</h3>
                      </div>
                      <p className="text-text-secondary leading-relaxed mb-6">{service.desc}</p>
                      <Link
                        href="#contact"
                        className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium border border-current ${service.accent} hover:bg-white/5 transition-all`}
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
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-orange/[0.02] to-transparent" />
        <div className="container-main relative">
          <AnimatedSection className="text-center mb-16">
            <Badge variant="warning" className="mb-4">Why Us</Badge>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              We Build What <span className="gradient-text-warm">Actually Works</span>
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              Not template sites. Not brochure pages. Real, modern, high-performance digital products.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Code2,
                title: "Modern Stack",
                desc: "Next.js, React, Tailwind — not WordPress templates. Your site loads in under 2 seconds.",
              },
              {
                icon: Search,
                title: "SEO-First",
                desc: "Built for Google and AI search engines. Schema, llms.txt, structured data — all included.",
              },
              {
                icon: TrendingUp,
                title: "Conversion Focused",
                desc: "Every pixel serves a purpose. Design decisions backed by data, not opinion.",
              },
              {
                icon: Zap,
                title: "AI-Native",
                desc: "We integrate AI into your workflows, not as an afterthought but as a core capability.",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 100}>
                <div className="rounded-2xl border border-border/50 bg-bg-card p-6 text-center h-full group hover:border-accent-orange/20 transition-all duration-500">
                  <div className="size-12 rounded-xl bg-accent-orange/10 border border-accent-orange/20 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="size-6 text-accent-orange" />
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
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
            <Badge variant="warning" className="mb-4">Process</Badge>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              How We <span className="gradient-text-warm">Work</span>
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              A proven 4-phase approach that delivers results.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, i) => (
              <AnimatedSection key={item.step} delay={i * 100}>
                <div className="relative rounded-2xl border border-border/50 bg-bg-card p-6 group hover:border-accent-orange/20 transition-all duration-500">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="size-10 rounded-full gradient-bg-warm flex items-center justify-center text-white font-bold text-sm">
                      {i + 1}
                    </div>
                    <h3 className="font-semibold">{item.step}</h3>
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
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[500px] rounded-full bg-gradient-to-r from-accent-orange/10 via-secondary/10 to-primary/10 blur-[120px]" />
        </div>
        <div className="container-main relative text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Ready to Build <span className="gradient-text-warm">Something Great</span>?
            </h2>
            <p className="text-text-secondary max-w-lg mx-auto mb-8">
              Free 30-minute consultation. No pitch — just real advice on your digital strategy.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="#"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-orange to-secondary px-8 py-3.5 text-base font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-accent-orange/25 hover:scale-[1.02]"
              >
                Book Free Consultation
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="mailto:hello@abetworks.in"
                className="inline-flex items-center gap-2 rounded-full bg-bg-card text-text-primary border border-border px-8 py-3.5 text-base font-medium hover:border-accent-orange/30 transition-all duration-300"
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
