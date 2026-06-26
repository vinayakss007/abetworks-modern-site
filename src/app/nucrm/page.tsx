"use client";

import Link from "next/link";
import {
  ArrowRight,
  Zap,
  Users,
  Bot,
  BarChart3,
  Clock,
  Brain,
  Shield,
  CheckCircle2,
  TrendingUp,
  MessageSquare,
  Globe,
  Layers,
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/Badge";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { StatsCounter } from "@/components/ui/StatsCounter";

const features = [
  {
    icon: Brain,
    title: "Real-Time AI Scoring",
    description: "Every lead interaction updates scores instantly. Intent classification with 94% accuracy, updating every 30 seconds.",
  },
  {
    icon: Zap,
    title: "Intelligent Routing",
    description: "Skill-based, capacity-weighted routing. Enterprise leads go to senior reps. Urgent leads bypass the queue entirely.",
  },
  {
    icon: MessageSquare,
    title: "Multi-Channel Inbox",
    description: "Email, WhatsApp, and live chat in one unified inbox. Never switch tabs again.",
  },
  {
    icon: Bot,
    title: "AI Agent Assist",
    description: "AI suggests next actions, drafts replies, and surfaces lead insights automatically as you work.",
  },
  {
    icon: BarChart3,
    title: "Predictive Analytics",
    description: "Forecast revenue, identify at-risk deals, and spot trends before they happen with ML-powered predictions.",
  },
  {
    icon: Layers,
    title: "Pipeline Automation",
    description: "Automate follow-ups, task creation, deal stage progression, and reporting with visual workflow builder.",
  },
];

const stats = [
  { value: 34, suffix: "%", label: "Avg. Conversion Boost", prefix: "+" },
  { value: 4.2, suffix: " min", label: "Avg. Response Time" },
  { value: 94, suffix: "%", label: "Intent Accuracy" },
  { value: 89, suffix: "/day", label: "Leads per Agent" },
];

export default function NuCRMPage() {
  return (
    <div className="overflow-hidden">
      {/* ==================== HERO ==================== */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-bg-dark to-bg-dark" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 size-[500px] rounded-full bg-primary/10 blur-[150px] animate-pulse-glow" />
          <div className="absolute bottom-1/4 left-1/4 size-[300px] rounded-full bg-secondary/10 blur-[100px] animate-float-slow" />
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
              <Badge variant="primary" className="mb-6">
                <Zap className="size-3" /> Flagship Product
              </Badge>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] mb-6">
                NuCRM
                <br />
                <span className="gradient-text">AI-Powered CRM</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <p className="text-lg md:text-xl text-text-secondary max-w-2xl mb-8 leading-relaxed">
                The CRM that thinks in real time. NuCRM scores, routes, and nurtures leads automatically
                — turning every interaction into revenue.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full gradient-bg px-8 py-3.5 text-base font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:scale-[1.02]"
                >
                  Start Free Trial
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full bg-bg-card text-text-primary border border-border px-8 py-3.5 text-base font-medium hover:border-primary/30 transition-all duration-300"
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
                    value={parseFloat(String(stat.value))}
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
            <Badge variant="primary" className="mb-4">How It Works</Badge>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Real-Time Pipeline in <span className="gradient-text">Action</span>
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              From signal to sale in seconds.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Capture",
                desc: "Lead signals from email, chat, website visits, and WhatsApp flow into a unified stream in real time.",
                color: "border-primary/30",
              },
              {
                step: "02",
                title: "Score & Route",
                desc: "AI classifies intent with 94% accuracy in 80ms. Enterprise leads go to senior reps instantly.",
                color: "border-secondary/30",
              },
              {
                step: "03",
                title: "Engage & Close",
                desc: "Agents get AI-suggested replies, smart follow-up reminders, and real-time deal intelligence.",
                color: "border-accent/30",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.step} delay={i * 150}>
                <div className={`relative rounded-2xl border ${item.color} bg-bg-card p-8 h-full`}>
                  <div className="text-5xl font-bold gradient-text/30 mb-4">{item.step}</div>
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
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
        <div className="container-main relative">
          <AnimatedSection className="text-center mb-16">
            <Badge variant="primary" className="mb-4">Features</Badge>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Everything a Modern <span className="gradient-text">Sales Team</span> Needs
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              Not just a database — an AI co-pilot for every sales rep.
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

      {/* ==================== PERFORMANCE TABLE ==================== */}
      <section className="py-24 relative">
        <div className="container-main">
          <AnimatedSection className="text-center mb-16">
            <Badge variant="primary" className="mb-4">Performance</Badge>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Numbers That <span className="gradient-text">Speak</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection>
            <div className="rounded-2xl border border-border/50 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border/50 bg-bg-card">
                      <th className="text-left py-4 px-6 font-semibold text-text-primary">Metric</th>
                      <th className="text-left py-4 px-6 font-semibold text-text-muted">Industry Average</th>
                      <th className="text-left py-4 px-6 font-semibold text-primary">NuCRM</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/30">
                    {[
                      { metric: "Response Time", industry: "18 hours", nucrm: "4.2 minutes" },
                      { metric: "Conversion Rate", industry: "8%", nucrm: "34%" },
                      { metric: "Deals Closed/Month", industry: "47", nucrm: "186" },
                      { metric: "Agent Efficiency", industry: "23 leads/day", nucrm: "89 leads/day" },
                      { metric: "Lead Response SLA", industry: "24 hours", nucrm: "Instant (< 30s)" },
                    ].map((row) => (
                      <tr key={row.metric} className="hover:bg-white/[0.02] transition-colors">
                        <td className="py-4 px-6 font-medium">{row.metric}</td>
                        <td className="py-4 px-6 text-text-muted">{row.industry}</td>
                        <td className="py-4 px-6 text-primary font-semibold">{row.nucrm}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ==================== PRICING TIERS ==================== */}
      <section className="py-24 relative">
        <div className="container-main">
          <AnimatedSection className="text-center mb-16">
            <Badge variant="primary" className="mb-4">Pricing</Badge>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Simple, <span className="gradient-text">Transparent</span> Pricing
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              Start free. Scale as you grow.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                name: "Starter",
                price: "Free",
                desc: "For small teams getting started",
                features: ["3 users", "1,000 leads", "Basic scoring", "Email inbox", "Community support"],
                featured: false,
              },
              {
                name: "Growth",
                price: "$29",
                period: "/user/mo",
                desc: "For growing sales teams",
                features: ["Unlimited users", "50,000 leads", "Real-time AI scoring", "WhatsApp + Email", "AI Agent Assist", "Advanced analytics", "Priority support"],
                featured: true,
              },
              {
                name: "Enterprise",
                price: "$199",
                period: "/mo",
                desc: "For large organizations",
                features: ["Everything in Growth", "Unlimited leads", "Custom AI models", "SSO + SAML", "Dedicated support", "SLA guarantee", "On-premise option"],
                featured: false,
              },
            ].map((tier, i) => (
              <AnimatedSection key={tier.name} delay={i * 100}>
                <div className={`relative rounded-2xl border p-8 h-full flex flex-col ${
                  tier.featured
                    ? "border-primary/30 bg-gradient-to-b from-primary/5 to-bg-card shadow-lg shadow-primary/10"
                    : "border-border/50 bg-bg-card"
                }`}>
                  {tier.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge variant="primary">Most Popular</Badge>
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
                        <CheckCircle2 className="size-4 text-primary mt-0.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="#"
                    className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ${
                      tier.featured
                        ? "gradient-bg text-white hover:shadow-lg hover:shadow-primary/25"
                        : "bg-bg-card-hover text-text-primary border border-border hover:border-primary/30"
                    }`}
                  >
                    {tier.name === "Starter" ? "Get Started" : "Start Trial"}
                    <ArrowRight className="size-4" />
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
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[500px] rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 blur-[120px]" />
        </div>
        <div className="container-main relative text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Ready to <span className="gradient-text">Close More Deals</span>?
            </h2>
            <p className="text-text-secondary max-w-lg mx-auto mb-8">
              Join 5,000+ sales teams using NuCRM to win faster.
            </p>
            <Link
              href="#"
              className="inline-flex items-center gap-2 rounded-full gradient-bg px-8 py-3.5 text-base font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:scale-[1.02]"
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
