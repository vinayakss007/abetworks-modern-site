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
  Users,
  Brain,
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/Badge";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { StatsCounter } from "@/components/ui/StatsCounter";

const features = [
  {
    icon: Mail,
    title: "97.2% Inbox Placement",
    description: "Warm domain infrastructure with graduated ramp-up. Per-recipient send-time optimization based on historical patterns.",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Integration",
    description: "15 phone number rotation pool, pre-approved templates, 24-hour free-form reply window with auto media compression.",
  },
  {
    icon: Bot,
    title: "AI Agent Conversations",
    description: "Autonomous AI handles 85% of leads without human handoff. 2-3 week training period for optimal performance.",
  },
  {
    icon: Brain,
    title: "Smart Sequencing",
    description: "Multi-step sequences across email and WhatsApp. Automatic pause on reply, smart re-engagement for cold leads.",
  },
  {
    icon: BarChart3,
    title: "Deliverability Monitoring",
    description: "Real-time inbox placement tracking, spam score alerts, domain reputation monitoring across all sending accounts.",
  },
  {
    icon: Shield,
    title: "Compliance Built-In",
    description: "CAN-SPAM, GDPR, and CASL compliant. Automatic unsubscribe handling, opt-in verification, and suppression list management.",
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
      <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-bg-dark to-bg-dark" />
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 size-[400px] rounded-full bg-accent/10 blur-[120px] animate-pulse-glow" />
          <div className="absolute bottom-1/3 right-1/4 size-[300px] rounded-full bg-primary/10 blur-[100px] animate-float-slow" />
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
              <Badge variant="accent" className="mb-6">
                <Target className="size-3" /> Outreach Engine
              </Badge>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] mb-6">
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
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-primary px-8 py-3.5 text-base font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 hover:scale-[1.02]"
                >
                  Start Free Trial
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full bg-bg-card text-text-primary border border-border px-8 py-3.5 text-base font-medium hover:border-accent/30 transition-all duration-300"
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

      {/* ==================== HOW IT WORKS ==================== */}
      <section className="py-24 relative">
        <div className="container-main">
          <AnimatedSection className="text-center mb-16">
            <Badge variant="accent" className="mb-4">How It Works</Badge>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
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
                color: "border-accent/30",
              },
              {
                step: "02",
                title: "Send-Time Optimization",
                desc: "Per-recipient scheduling based on historical open patterns, preferred device, and previous response latency — not a generic 'best time.'",
                color: "border-primary/30",
              },
              {
                step: "03",
                title: "AI Agent Nurturing",
                desc: "Autonomous conversations across email and WhatsApp. AI handles Q&A, objections, and qualifying — only escalates hot leads to humans.",
                color: "border-secondary/30",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.step} delay={i * 150}>
                <div className={`relative rounded-2xl border ${item.color} bg-bg-card p-8 h-full`}>
                  <div className="text-5xl font-bold text-accent/30 mb-4">{item.step}</div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FEATURES ==================== */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent" />
        <div className="container-main relative">
          <AnimatedSection className="text-center mb-16">
            <Badge variant="accent" className="mb-4">Features</Badge>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Enterprise Outreach <span className="gradient-text-accent">Infrastructure</span>
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              Built for deliverability. Designed for scale.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <AnimatedSection key={feature.title} delay={i * 80}>
                <FeatureCard {...feature} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== EMAIL INFRASTRUCTURE DETAIL ==================== */}
      <section className="py-24 relative">
        <div className="container-main">
          <AnimatedSection className="text-center mb-16">
            <Badge variant="accent" className="mb-4">Infrastructure</Badge>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
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
              },
              {
                title: "Real-Time Monitoring",
                desc: "Every send is tracked — inbox vs spam placement, bounce rates, engagement metrics. Automatic pause if any domain shows negative signals.",
                icon: BarChart3,
              },
              {
                title: "Smart Rotation",
                desc: "Messages are automatically distributed across domains to maintain consistent volume. If one domain underperforms, traffic shifts to healthier domains.",
                icon: TrendingUp,
              },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 120}>
                <div className="rounded-2xl border border-border/50 bg-bg-card p-8 h-full group hover:border-accent/20 transition-all duration-500">
                  <div className="size-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4">
                    <item.icon className="size-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
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
            <Badge variant="accent" className="mb-4">Pricing</Badge>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
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
                <div className={`relative rounded-2xl border p-8 h-full flex flex-col ${
                  tier.featured
                    ? "border-accent/30 bg-gradient-to-b from-accent/5 to-bg-card shadow-lg shadow-accent/10"
                    : "border-border/50 bg-bg-card"
                }`}>
                  {tier.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge variant="accent">Most Popular</Badge>
                    </div>
                  )}
                  <h3 className="text-xl font-bold mb-1">{tier.name}</h3>
                  <p className="text-sm text-text-secondary mb-4">{tier.desc}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">{tier.price}</span>
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
                        ? "bg-gradient-to-r from-accent to-primary text-white hover:shadow-lg hover:shadow-accent/25"
                        : "bg-bg-card-hover text-text-primary border border-border hover:border-accent/30"
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

      {/* CTA */}
      <section className="py-24 relative">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[500px] rounded-full bg-gradient-to-r from-accent/10 to-primary/10 blur-[120px]" />
        </div>
        <div className="container-main relative text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Hit Every <span className="gradient-text-accent">Inbox</span>
            </h2>
            <p className="text-text-secondary max-w-lg mx-auto mb-8">
              Stop landing in spam. Start closing deals.
            </p>
            <Link
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-primary px-8 py-3.5 text-base font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 hover:scale-[1.02]"
            >
              Start Free Trial
              <ArrowRight className="size-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
