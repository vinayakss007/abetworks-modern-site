"use client";

import Link from "next/link";
import {
  Zap, Users, Bot, Globe, ArrowRight, TrendingUp,
  Shield, MessageSquare, BarChart3, Target, Layers,
  Workflow, Sparkles, Building2, Rocket, ChevronRight,
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/Badge";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { StatsCounter } from "@/components/ui/StatsCounter";

const products = [
  {
    href: "/nucrm", badge: "Flagship", badgeColor: "primary",
    icon: Users, title: "NuCRM", subtitle: "AI-Powered CRM",
    desc: "Real-time AI lead scoring, intelligent routing, and multi-channel inbox. Convert 34% more leads.",
    feature: "AI scores every 30s",
    accent: "text-primary", iconBg: "gradient-bg",
  },
  {
    href: "/leadgenius", badge: "Outreach", badgeColor: "accent",
    icon: Target, title: "LeadGenius", subtitle: "Multi-Channel Outreach",
    desc: "97.2% inbox placement. Email + WhatsApp at scale. AI handles 85% of leads autonomously.",
    feature: "97.2% deliverability",
    accent: "text-accent", iconBg: "gradient-bg-accent",
  },
  {
    href: "/agent-fleet", badge: "Autonomous", badgeColor: "secondary",
    icon: Bot, title: "AW Agent Fleet", subtitle: "Multi-Agent AI Workforce",
    desc: "Deploy autonomous agents for sales, support, research, and operations. Self-orchestrating teams.",
    feature: "24/7 autonomous ops",
    accent: "text-secondary", iconBg: "gradient-bg-warm",
  },
  {
    href: "/digital-services", badge: "Agency", badgeColor: "warm",
    icon: Globe, title: "Digital Services", subtitle: "Web + SEO + Consulting",
    desc: "Modern web dev, SEO optimization, AI consulting, and digital strategy.",
    feature: "Full-stack agency",
    accent: "text-warm", iconBg: "bg-warm/10",
  },
];

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* ============ HERO ============ */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-primary/[0.03] via-white to-white">
        {/* Gentle ambient blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 size-[600px] rounded-full bg-primary/[0.04] blur-[130px]" />
          <div className="absolute -bottom-40 -left-40 size-[500px] rounded-full bg-secondary/[0.04] blur-[120px]" />
          <div className="absolute top-1/3 left-1/2 size-[300px] rounded-full bg-accent/[0.03] blur-[100px]" />
        </div>

        {/* Subtle dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.06) 1px, transparent 0)`,
            backgroundSize: "24px 24px",
          }}
        />

        <div className="container-main relative z-10 pt-28 pb-20">
          <div className="max-w-5xl mx-auto text-center">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-xs text-primary font-medium tracking-wide mb-8">
                <Sparkles className="size-3.5" />
                AI-Powered Business Suite
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] mb-6 text-text-primary">
                <span className="block">Power Your</span>
                <span className="block">
                  Business <span className="gradient-text-premium">With AI</span>
                </span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <p className="text-base sm:text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
                Enterprise-grade CRM, multichannel outreach, autonomous AI agents,
                and digital services — engineered to transform how you work.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  href="/nucrm"
                  className="group inline-flex items-center gap-2 rounded-full gradient-bg px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:scale-[1.02]"
                >
                  Explore Products
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/digital-services"
                  className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-text-secondary border border-border hover:border-text-muted/30 hover:text-text-primary glass-card transition-all duration-300"
                >
                  <Building2 className="size-4" />
                  Our Services
                </Link>
              </div>
            </AnimatedSection>

            {/* Stats */}
            <AnimatedSection delay={400}>
              <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
                {[
                  { value: 5000, suffix: "+", label: "Active Users" },
                  { value: 99.9, suffix: "%", label: "Uptime", prefix: "" },
                  { value: 34, suffix: "%", label: "Conversion Boost", prefix: "+" },
                  { value: 50, suffix: "+", label: "Enterprise Clients" },
                ].map((s) => (
                  <div key={s.label} className="glass-card rounded-2xl p-5 text-center hover:shadow-md transition-all duration-300">
                    <StatsCounter value={typeof s.value === "number" ? s.value : parseFloat(s.value)} suffix={s.suffix} label={s.label} prefix={s.prefix || ""} />
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted/60">
          <span className="text-[10px] uppercase tracking-[0.25em]">Scroll</span>
          <div className="size-4 rounded-full border border-text-muted/30 flex items-center justify-center">
            <div className="size-1 rounded-full bg-text-muted/60 animate-bounce" />
          </div>
        </div>
      </section>

      {/* ============ PRODUCTS ============ */}
      <section className="py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-secondary/[0.02] to-white pointer-events-none" />
        <div className="container-main relative">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-xs text-primary font-medium tracking-wide mb-4">
              Products
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-text-primary">
              Everything You Need to <span className="gradient-text-premium">Scale</span>
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              Four integrated solutions that work as one unified platform.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-4">
            {products.map((p, i) => (
              <AnimatedSection key={p.title} delay={60 * (i + 1)}>
                <Link
                  href={p.href}
                  className="group block relative overflow-hidden rounded-3xl glass-card hover:glass-strong p-8 transition-all duration-500 hover:shadow-xl hover:-translate-y-0.5"
                >
                  {/* Top accent line */}
                  <div className={`absolute top-0 left-8 right-8 h-0.5 rounded-full bg-gradient-to-r ${p.iconBg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  <div className="flex items-start gap-4 mb-4">
                    <div className={`size-13 shrink-0 rounded-2xl ${p.iconBg} flex items-center justify-center shadow-sm`}>
                      <p.icon className="size-6 text-white" />
                    </div>
                    <div className="pt-0.5 flex-1">
                      <div className="flex items-center gap-3 mb-0.5">
                        <h3 className="text-2xl font-bold tracking-tight">{p.title}</h3>
                        <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${
                          p.badgeColor === "accent" ? "bg-accent/5 text-accent border-accent/15" :
                          p.badgeColor === "secondary" ? "bg-secondary/5 text-secondary border-secondary/15" :
                          p.badgeColor === "warm" ? "bg-warm/5 text-warm border-warm/15" :
                          "bg-primary/5 text-primary border-primary/15"
                        }`}>{p.badge}</span>
                      </div>
                      <p className="text-sm text-text-secondary/80">{p.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-text-secondary text-sm leading-relaxed mb-5">
                    {p.desc}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-medium ${p.accent} flex items-center gap-1`}>
                      <span className="size-1.5 rounded-full bg-current" />
                      {p.feature}
                    </span>
                    <span className={`text-sm font-semibold ${p.accent} inline-flex items-center gap-1 group-hover:gap-2 transition-all`}>
                      Learn more <ChevronRight className="size-4" />
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FEATURES ============ */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-primary/[0.02] to-white" />
        <div className="container-main relative">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-xs text-accent font-medium tracking-wide mb-4">
              Why Abet Works
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-text-primary">
              Built for <span className="gradient-text-accent">Performance</span>
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              Enterprise infrastructure, consumer-grade experience.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: Zap, title: "Real-Time AI", desc: "Live scoring and routing every 30 seconds — instant intelligence, not batch.", accent: "text-primary", bg: "bg-primary/5" },
              { icon: Shield, title: "Enterprise Security", desc: "SOC 2 compliant, end-to-end encryption, RBAC. Your data stays yours.", accent: "text-accent", bg: "bg-accent/5" },
              { icon: BarChart3, title: "Actionable Analytics", desc: "Real-time dashboards, predictive insights, and custom reports.", accent: "text-secondary", bg: "bg-secondary/5" },
              { icon: Layers, title: "Seamless Integration", desc: "Connect your stack via API, webhooks, and native integrations.", accent: "text-warm", bg: "bg-warm/5" },
              { icon: MessageSquare, title: "Multi-Channel", desc: "Meet customers everywhere — email, WhatsApp, live chat, SMS.", accent: "text-rose", bg: "bg-rose/5" },
              { icon: Workflow, title: "Automated Workflows", desc: "Drag-and-drop automation builder. AI handles the heavy lifting.", accent: "text-emerald", bg: "bg-emerald/5" },
            ].map((f, i) => (
              <AnimatedSection key={f.title} delay={i * 80}>
                <div className="group rounded-2xl glass-card p-7 h-full hover:glass-strong hover:shadow-md transition-all duration-500">
                  <div className={`size-10 rounded-xl ${f.bg} flex items-center justify-center mb-4 ${f.accent} group-hover:scale-110 transition-transform duration-300`}>
                    <f.icon className="size-5" />
                  </div>
                  <h3 className="text-base font-semibold mb-2 text-text-primary">{f.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{f.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="py-28 relative">
        <div className="absolute inset-0 overflow-hidden bg-gradient-to-b from-white via-primary/[0.02] to-white">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] rounded-full bg-gradient-to-r from-primary/[0.04] via-accent/[0.03] to-secondary/[0.04] blur-[140px]" />
        </div>
        <div className="container-main relative text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-xs text-warm font-medium tracking-wide mb-6">
              <Rocket className="size-3.5" />
              Get Started
            </div>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-text-primary">
              Ready to Transform
              <br />
              <span className="gradient-text-warm">Your Business?</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="text-text-secondary max-w-lg mx-auto mb-10">
              Start with a free consultation. No commitment, no pitch — just real solutions
              from people who build what they sell.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={300}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/nucrm"
                className="group inline-flex items-center gap-2 rounded-full gradient-bg px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:scale-[1.02]"
              >
                Start Free Trial
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/digital-services"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-text-secondary border border-border hover:border-text-muted/30 hover:text-text-primary glass-card transition-all duration-300"
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
