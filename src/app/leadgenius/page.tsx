"use client";

import Link from "next/link";
import {
  ArrowRight,
  Target,
  Mail,
  MessageSquare,
  Bot,
  BarChart3,
  TrendingUp,
  Shield,
  CheckCircle2,
  Globe,
  Zap,
  Brain,
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { StatsCounter } from "@/components/ui/StatsCounter";

const features = [
  {
    icon: Mail,
    title: "97.2% Inbox Placement",
    description: "Warm domain infrastructure with graduated ramp-up. Per-recipient send-time optimization based on historical patterns.",
    accent: "text-accent",
    bg: "bg-accent/5",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Integration",
    description: "15 phone number rotation pool, pre-approved templates, 24-hour free-form reply window with auto media compression.",
    accent: "text-primary",
    bg: "bg-primary/5",
  },
  {
    icon: Bot,
    title: "AI Agent Conversations",
    description: "Autonomous AI handles 85% of leads without human handoff. 2-3 week training period for optimal performance.",
    accent: "text-secondary",
    bg: "bg-secondary/5",
  },
  {
    icon: Brain,
    title: "Smart Sequencing",
    description: "Multi-step sequences across email and WhatsApp. Automatic pause on reply, smart re-engagement for cold leads.",
    accent: "text-accent",
    bg: "bg-accent/5",
  },
  {
    icon: BarChart3,
    title: "Deliverability Monitoring",
    description: "Real-time inbox placement tracking, spam score alerts, domain reputation monitoring across all sending accounts.",
    accent: "text-primary",
    bg: "bg-primary/5",
  },
  {
    icon: Shield,
    title: "Compliance Built-In",
    description: "CAN-SPAM, GDPR, and CASL compliant. Automatic unsubscribe handling, opt-in verification, and suppression list management.",
    accent: "text-secondary",
    bg: "bg-secondary/5",
  },
];

const stats = [
  { value: 97.2, suffix: "%", label: "Inbox Placement", prefix: "" },
  { value: 1.2, suffix: "M/mo", label: "Emails Sent" },
  { value: 200, suffix: "K/mo", label: "WhatsApp Messages" },
  { value: 85, suffix: "%", label: "AI Auto-Handled" },
];

export default function LeadGeniusPage() {
  return (
    <div className="overflow-hidden">
      {/* ==================== HERO ==================== */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Pearl white background */}
        <div className="absolute inset-0 bg-gradient-to-b from-accent/[0.03] via-white to-white" />

        {/* Ambient blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 left-1/4 size-[400px] rounded-full bg-accent/[0.06] blur-[120px] animate-pulse-glow" />
          <div className="absolute bottom-1/3 right-1/4 size-[300px] rounded-full bg-primary/[0.05] blur-[100px] animate-float-slow" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[250px] rounded-full bg-secondary/[0.04] blur-[90px]" />
        </div>

        {/* Dot pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.06) 1px, transparent 0)`,
            backgroundSize: "24px 24px",
          }}
        />

        <div className="container-main relative z-10 pt-28 pb-20">
          <div className="max-w-4xl">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-xs text-accent font-medium tracking-wide mb-6">
                <Target className="size-3.5" />
                Outreach Engine
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] mb-6 text-text-primary">
                LeadGenius
                <br />
                <span className="gradient-text-accent">Multi-Channel Outreach</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <p className="text-lg md:text-xl text-text-secondary max-w-2xl mb-8 leading-relaxed">
                Email + WhatsApp outreach at enterprise scale. 97.2% inbox placement, AI agents that handle 85% of conversations,
                and intelligent sequencing that converts.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#"
                  className="group inline-flex items-center gap-2 rounded-full gradient-bg-accent px-8 py-3.5 text-base font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 hover:scale-[1.02]"
                >
                  Start Free Trial
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-base font-medium text-text-secondary border border-border hover:border-accent/30 hover:text-text-primary glass-card transition-all duration-300"
                >
                  Book Demo
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ==================== STATS ==================== */}
      <section className="py-16 relative">
        <div className="container-main">
          <div className="glass-card rounded-3xl p-8 md:p-12">
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

      {/* ==================== HOW IT WORKS ==================== */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-accent/[0.02] to-white pointer-events-none" />
        <div className="container-main relative">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-xs text-accent font-medium tracking-wide mb-4">
              How It Works
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-text-primary">
              Outreach Engine <span className="gradient-text-accent">Architecture</span>
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              Technical infrastructure that delivers.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Warm Domain Ramp-Up",
                desc: "Day 1-7: 50 emails/day. Day 8-14: ramp 20% daily based on engagement. Day 15+: full volume with real-time feedback loop monitoring.",
                color: "border-accent/20",
                iconColor: "text-accent",
                iconBg: "bg-accent/5",
              },
              {
                step: "02",
                title: "Send-Time Optimization",
                desc: "Per-recipient scheduling based on historical open patterns, preferred device, and previous response latency — not a generic 'best time.'",
                color: "border-primary/20",
                iconColor: "text-primary",
                iconBg: "bg-primary/5",
              },
              {
                step: "03",
                title: "AI Agent Nurturing",
                desc: "Autonomous conversations across email and WhatsApp. AI handles Q&A, objections, and qualifying — only escalates hot leads to humans.",
                color: "border-secondary/20",
                iconColor: "text-secondary",
                iconBg: "bg-secondary/5",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.step} delay={i * 150}>
                <div className={`relative glass-card rounded-2xl p-8 h-full hover:glass-strong hover:shadow-md transition-all duration-500 border ${item.color}`}>
                  <div className="text-5xl font-bold text-accent/20 mb-4">{item.step}</div>
                  <h3 className="text-xl font-semibold mb-3 text-text-primary">{item.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FEATURES ==================== */}
      <section className="py-24 relative">
        <div className="container-main">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-xs text-accent font-medium tracking-wide mb-4">
              Features
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-text-primary">
              Enterprise Outreach <span className="gradient-text-accent">Infrastructure</span>
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              Built for deliverability. Designed for scale.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <AnimatedSection key={feature.title} delay={i * 80}>
                <div className="group rounded-2xl glass-card p-7 h-full hover:glass-strong hover:shadow-md transition-all duration-500">
                  <div className={`size-11 rounded-xl ${feature.bg} border border-accent/10 flex items-center justify-center mb-4 ${feature.accent} group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="size-5" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-text-primary">{feature.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{feature.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== EMAIL INFRASTRUCTURE DETAIL ==================== */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-accent/[0.02] to-white pointer-events-none" />
        <div className="container-main relative">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-xs text-accent font-medium tracking-wide mb-4">
              Infrastructure
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-text-primary">
              Warm Domain <span className="gradient-text-accent">System</span>
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              The secret behind 97.2% inbox placement.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "50+ Warm Domains",
                desc: "Graduated ramp-up per domain. Each domain sends from low volume to full capacity over 14 days, building sender reputation naturally.",
                icon: Globe,
                accent: "text-accent",
                bg: "bg-accent/5",
              },
              {
                title: "Real-Time Monitoring",
                desc: "Every send is tracked — inbox vs spam placement, bounce rates, engagement metrics. Automatic pause if any domain shows negative signals.",
                icon: BarChart3,
                accent: "text-primary",
                bg: "bg-primary/5",
              },
              {
                title: "Smart Rotation",
                desc: "Messages are automatically distributed across domains to maintain consistent volume. If one domain underperforms, traffic shifts to healthier domains.",
                icon: TrendingUp,
                accent: "text-secondary",
                bg: "bg-secondary/5",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 120}>
                <div className="group rounded-2xl glass-card p-8 h-full hover:glass-strong hover:shadow-md transition-all duration-500">
                  <div className={`size-12 rounded-xl ${item.bg} border border-accent/10 flex items-center justify-center mb-4 ${item.accent}`}>
                    <item.icon className="size-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-text-primary">{item.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== PRICING ==================== */}
      <section className="py-24 relative">
        <div className="container-main">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-xs text-accent font-medium tracking-wide mb-4">
              Pricing
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-text-primary">
              Scale Your <span className="gradient-text-accent">Outreach</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                name: "Starter",
                price: "$29",
                period: "/mo",
                desc: "For small outreach teams",
                features: ["100 leads/mo", "1 sending domain", "Email only", "Basic sequences", "Email support"],
                featured: false,
              },
              {
                name: "Growth",
                price: "$99",
                period: "/mo",
                desc: "For growing sales teams",
                features: ["5,000 leads/mo", "5 warm domains", "Email + WhatsApp", "AI agent (basic)", "Advanced sequences", "Deliverability monitoring", "Priority support"],
                featured: true,
              },
              {
                name: "Scale",
                price: "$299",
                period: "/mo",
                desc: "For high-volume outreach",
                features: ["Unlimited leads", "50+ warm domains", "Full AI agent suite", "WhatsApp rotation pool", "Custom integrations", "Dedicated IPs", "SLA guarantee", "Dedicated support"],
                featured: false,
              },
            ].map((tier, i) => (
              <AnimatedSection key={tier.name} delay={i * 100}>
                <div className={`relative rounded-2xl p-8 h-full flex flex-col transition-all duration-500 ${
                  tier.featured
                    ? "glass-card border-accent/30 shadow-lg shadow-accent/10 hover:shadow-xl hover:shadow-accent/15"
                    : "glass-card hover:glass-strong hover:shadow-md"
                }`}>
                  {tier.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <div className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium bg-accent/10 text-accent border border-accent/20 glass-card">
                        Most Popular
                      </div>
                    </div>
                  )}
                  <h3 className="text-xl font-bold mb-1 text-text-primary">{tier.name}</h3>
                  <p className="text-sm text-text-secondary mb-4">{tier.desc}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-text-primary">{tier.price}</span>
                    {tier.period && <span className="text-text-muted text-sm">{tier.period}</span>}
                  </div>
                  <ul className="space-y-3 mb-8 flex-1">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-text-secondary">
                        <CheckCircle2 className="size-4 text-accent mt-0.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="#"
                    className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ${
                      tier.featured
                        ? "gradient-bg-accent text-white hover:shadow-lg hover:shadow-accent/25"
                        : "glass-card text-text-secondary border border-border hover:border-accent/30 hover:text-text-primary"
                    }`}
                  >
                    Start Trial <ArrowRight className="size-4" />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="py-24 relative">
        <div className="absolute inset-0 overflow-hidden bg-gradient-to-b from-white via-accent/[0.02] to-white">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[500px] rounded-full bg-gradient-to-r from-accent/[0.06] to-primary/[0.04] blur-[140px]" />
        </div>
        <div className="container-main relative text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-xs text-accent font-medium tracking-wide mb-6">
              <Zap className="size-3.5" />
              Get Started
            </div>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-text-primary">
              Hit Every <span className="gradient-text-accent">Inbox</span>
            </h2>
            <p className="text-text-secondary max-w-lg mx-auto mb-8">
              Stop landing in spam. Start closing deals.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="#"
                className="group inline-flex items-center gap-2 rounded-full gradient-bg-accent px-8 py-3.5 text-base font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 hover:scale-[1.02]"
              >
                Start Free Trial
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="#"
                className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-base font-medium text-text-secondary border border-border hover:border-accent/30 hover:text-text-primary glass-card transition-all duration-300"
              >
                Book Demo
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
