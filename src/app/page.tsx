"use client";

import Link from "next/link";
import {
  Zap,
  Users,
  Bot,
  Globe,
  ArrowRight,
  TrendingUp,
  Shield,
  MessageSquare,
  BarChart3,
  Target,
  Layers,
  Workflow,
  Sparkles,
  Building2,
  Rocket,
  ChevronRight,
  Star,
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/Badge";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { StatsCounter } from "@/components/ui/StatsCounter";

const products = [
  {
    href: "/nucrm",
    badge: "Flagship",
    badgeColor: "primary",
    icon: Users,
    title: "NuCRM",
    subtitle: "AI-Powered CRM",
    desc: "Real-time AI lead scoring, intelligent routing, and multi-channel inbox. Convert 34% more leads.",
    feature: "AI scores every 30s",
    gradient: "from-primary/20 via-primary/5 to-transparent",
    border: "hover:border-primary/30",
    glow: "group-hover:shadow-primary/10",
    accent: "text-primary",
    iconBg: "gradient-bg",
  },
  {
    href: "/leadgenius",
    badge: "Outreach",
    badgeColor: "accent",
    icon: Target,
    title: "LeadGenius",
    subtitle: "Multi-Channel Outreach",
    desc: "97.2% inbox placement. Email + WhatsApp at scale. AI handles 85% of leads autonomously.",
    feature: "97.2% deliverability",
    gradient: "from-accent/20 via-accent/5 to-transparent",
    border: "hover:border-accent/30",
    glow: "group-hover:shadow-accent/10",
    accent: "text-accent",
    iconBg: "gradient-bg-accent",
  },
  {
    href: "/agent-fleet",
    badge: "Autonomous",
    badgeColor: "secondary",
    icon: Bot,
    title: "AW Agent Fleet",
    subtitle: "Multi-Agent AI Workforce",
    desc: "Deploy autonomous agents for sales, support, research, and operations. Self-orchestrating teams.",
    feature: "24/7 autonomous ops",
    gradient: "from-secondary/20 via-secondary/5 to-transparent",
    border: "hover:border-secondary/30",
    glow: "group-hover:shadow-secondary/10",
    accent: "text-secondary-light",
    iconBg: "gradient-bg-warm",
  },
  {
    href: "/digital-services",
    badge: "Agency",
    badgeColor: "warm",
    icon: Globe,
    title: "Digital Services",
    subtitle: "Web + SEO + Consulting",
    desc: "Modern web dev, SEO optimization, AI consulting, and digital strategy. From concept to scale.",
    feature: "Full-stack agency",
    gradient: "from-warm/20 via-warm/5 to-transparent",
    border: "hover:border-warm/30",
    glow: "group-hover:shadow-warm/10",
    accent: "text-warm",
    iconBg: "bg-warm/20 border border-warm/30",
  },
];

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* ============================
          HERO
          ============================ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Deep background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.08] via-bg-dark via-[40%] to-bg-dark" />

        {/* Animated blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/5 size-[500px] rounded-full bg-gradient-to-br from-primary/15 to-secondary/10 blur-[130px] animate-float-slow" style={{ animationDelay: "0s" }} />
          <div className="absolute bottom-1/4 right-1/6 size-[450px] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] bg-gradient-to-tr from-accent/10 via-secondary/10 to-transparent blur-[100px] animate-morph" style={{ animationDelay: "-4s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[300px] rounded-full bg-gradient-to-r from-primary/5 via-warm/5 to-rose/5 blur-[120px] animate-pulse-glow" />
          <div className="absolute top-[60%] left-[10%] size-[200px] rounded-full bg-accent/10 blur-[90px] animate-drift" style={{ animationDuration: "30s" }} />
        </div>

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />

        <div className="container-main relative z-10 pt-28 pb-20">
          <div className="max-w-5xl mx-auto text-center">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/[0.04] text-xs text-primary-light font-medium tracking-wide mb-8">
                <Sparkles className="size-3.5" />
                AI-Powered Business Suite
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight leading-[0.85] mb-6">
                <span className="block">Power Your</span>
                <span className="block">
                  Business <span className="gradient-text-premium">With AI</span>
                </span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <p className="text-base sm:text-lg md:text-xl text-text-secondary/90 max-w-2xl mx-auto mb-10 leading-relaxed">
                Enterprise-grade CRM, multichannel outreach, autonomous AI agents,
                and digital services — engineered to transform how you work.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/nucrm"
                  className="group relative inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-base font-medium text-white overflow-hidden transition-all duration-500 hover:scale-[1.03]"
                >
                  <span className="absolute inset-0 gradient-bg-premium rounded-full" />
                  <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="relative flex items-center gap-2">
                    Explore Products
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
                <Link
                  href="/digital-services"
                  className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-base font-medium text-text-primary border border-border/60 hover:border-primary/40 bg-bg-card/50 hover:bg-bg-card transition-all duration-300"
                >
                  <Building2 className="size-4" />
                  Our Services
                </Link>
              </div>
            </AnimatedSection>

            {/* Stats — redesigned with glass cards */}
            <AnimatedSection delay={400}>
              <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                {[
                  { value: 5000, suffix: "+", label: "Active Users" },
                  { value: 99.9, suffix: "%", label: "Uptime", prefix: "" },
                  { value: 34, suffix: "%", label: "Conversion Boost", prefix: "+" },
                  { value: 50, suffix: "+", label: "Enterprise Clients" },
                ].map((stat, i) => (
                  <div key={stat.label} className="glass-light rounded-2xl p-5 text-center group hover:border-primary/20 transition-all duration-300">
                    <StatsCounter
                      value={typeof stat.value === "number" ? stat.value : parseFloat(stat.value)}
                      suffix={stat.suffix}
                      label={stat.label}
                      prefix={stat.prefix || ""}
                    />
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted/60">
          <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
          <div className="size-4 rounded-full border border-text-muted/40 flex items-center justify-center">
            <div className="size-1 rounded-full bg-text-muted/60 animate-bounce" />
          </div>
        </div>
      </section>

      {/* ============================
          PRODUCTS
          ============================ */}
      <section className="py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] via-60% to-transparent pointer-events-none" />
        <div className="container-main relative">
          <AnimatedSection className="text-center mb-16">
            <Badge variant="primary" className="mb-4">Products</Badge>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              Everything You Need to <span className="gradient-text-premium">Scale</span>
            </h2>
            <p className="text-text-secondary/80 max-w-xl mx-auto text-lg">
              Four integrated solutions that work as one unified platform.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
            {products.map((p, i) => (
              <AnimatedSection key={p.title} delay={60 * (i + 1)}>
                <Link
                  href={p.href}
                  className={`group relative block overflow-hidden rounded-3xl border border-border/40 ${p.border} bg-bg-card/60 hover:bg-bg-card transition-all duration-500 p-7 lg:p-9 ${p.glow}`}
                >
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                  {/* Corner glow */}
                  <div className={`absolute -top-20 -right-20 size-40 rounded-full bg-gradient-to-br ${p.gradient} blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000`} />

                  <div className="relative">
                    {/* Badge + Feature tag */}
                    <div className="flex items-center justify-between mb-5">
                      <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider ${
                        p.badgeColor === "accent" ? "bg-accent/10 text-accent border border-accent/20" :
                        p.badgeColor === "secondary" ? "bg-secondary/10 text-secondary-light border border-secondary/20" :
                        p.badgeColor === "warm" ? "bg-warm/10 text-warm border border-warm/20" :
                        "bg-primary/10 text-primary-light border border-primary/20"
                      }`}>
                        <Star className="size-3" />
                        {p.badge}
                      </div>
                      <span className={`text-[11px] font-medium ${p.accent} opacity-0 group-hover:opacity-100 transition-opacity`}>
                        {p.feature}
                      </span>
                    </div>

                    {/* Icon + Title row */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`size-14 shrink-0 rounded-2xl ${p.iconBg} flex items-center justify-center shadow-lg shadow-black/20`}>
                        <p.icon className="size-6 text-white" />
                      </div>
                      <div className="pt-1">
                        <h3 className="text-2xl font-bold tracking-tight">{p.title}</h3>
                        <p className="text-sm text-text-secondary/80">{p.subtitle}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-text-secondary/70 text-sm leading-relaxed mb-6 line-clamp-2">
                      {p.desc}
                    </p>

                    {/* CTA */}
                    <div className={`flex items-center gap-1.5 text-sm font-semibold ${p.accent} group-hover:gap-3 transition-all duration-300`}>
                      Learn more <ChevronRight className="size-4" />
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ============================
          WHY ABET WORKS
          ============================ */}
      <section className="py-28 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.015] to-transparent" />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 size-[600px] rounded-full bg-gradient-to-r from-primary/[0.03] to-transparent blur-[120px]" />

        <div className="container-main relative">
          <AnimatedSection className="text-center mb-16">
            <Badge variant="default" className="border-accent/20 text-accent mb-4">Why Abet Works</Badge>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              Built for <span className="gradient-text-accent">Performance</span>
            </h2>
            <p className="text-text-secondary/80 max-w-xl mx-auto text-lg">
              Enterprise infrastructure, consumer-grade experience.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {[
              { icon: Zap, title: "Real-Time AI", desc: "Live scoring and routing every 30 seconds. Not batch — instant intelligence.", gradient: "from-primary/10 to-primary/5", border: "hover:border-primary/20" },
              { icon: Shield, title: "Enterprise Security", desc: "SOC 2 compliant, end-to-end encryption, RBAC. Your data stays yours.", gradient: "from-accent/10 to-accent/5", border: "hover:border-accent/20" },
              { icon: BarChart3, title: "Actionable Analytics", desc: "Real-time dashboards, predictive insights, and custom reports that drive decisions.", gradient: "from-secondary/10 to-secondary/5", border: "hover:border-secondary/20" },
              { icon: Layers, title: "Seamless Integration", desc: "Connect your stack via API, webhooks, and native integrations. No code required.", gradient: "from-warm/10 to-warm/5", border: "hover:border-warm/20" },
              { icon: MessageSquare, title: "Multi-Channel", desc: "Meet customers everywhere — email, WhatsApp, live chat, SMS, and social.", gradient: "from-rose/10 to-rose/5", border: "hover:border-rose/20" },
              { icon: Workflow, title: "Automated Workflows", desc: "Drag-and-drop automation builder. AI handles the heavy lifting, you handle strategy.", gradient: "from-emerald/10 to-emerald/5", border: "hover:border-emerald/20" },
            ].map((f, i) => (
              <AnimatedSection key={f.title} delay={i * 80}>
                <div className={`group rounded-2xl border border-border/40 ${f.border} bg-bg-card/40 hover:bg-bg-card/80 transition-all duration-500 p-7 h-full`}>
                  <div className={`size-11 rounded-xl bg-gradient-to-br ${f.gradient} border border-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <f.icon className="size-5 text-text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                  <p className="text-sm text-text-secondary/70 leading-relaxed">{f.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ============================
          CTA
          ============================ */}
      <section className="py-28 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[700px] rounded-full bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 blur-[160px]" />
          <div className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,.1) 1px, transparent 0)`,
              backgroundSize: "30px 30px",
            }}
          />
        </div>

        <div className="container-main relative text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-warm/20 bg-warm/[0.04] text-xs text-warm font-medium tracking-wide mb-8">
              <Rocket className="size-3.5" />
              Get Started
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              Ready to Transform
              <br />
              <span className="gradient-text-warm">Your Business?</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <p className="text-text-secondary/80 max-w-lg mx-auto mb-10 text-lg">
              Start with a free consultation. No commitment, no pitch — just real solutions
              from people who build what they sell.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/nucrm"
                className="group relative inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-base font-medium text-white overflow-hidden transition-all duration-500 hover:scale-[1.03]"
              >
                <span className="absolute inset-0 gradient-bg-premium rounded-full" />
                <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative flex items-center gap-2">
                  Start Free Trial
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
              <Link
                href="/digital-services"
                className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-base font-medium text-text-primary border border-border/60 hover:border-warm/40 bg-bg-card/50 hover:bg-bg-card transition-all duration-300"
              >
                Book Consultation
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
