"use client";

import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Network,
  Brain,
  Workflow,
  BarChart3,
  Shield,
  CheckCircle2,
  Zap,
  Layers,
  Globe,
  MessageSquare,
  Code2,
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/Badge";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { StatsCounter } from "@/components/ui/StatsCounter";

const features = [
  {
    icon: Network,
    title: "Multi-Agent Orchestration",
    description: "Deploy teams of specialized AI agents that collaborate autonomously — sales, support, research, and operations working together.",
  },
  {
    icon: Brain,
    title: "Autonomous Decision-Making",
    description: "Agents analyze context, make decisions, and execute actions without human intervention. Self-correcting via built-in reflection loops.",
  },
  {
    icon: Workflow,
    title: "Visual Agent Builder",
    description: "Design agent workflows with a drag-and-drop interface. Define triggers, actions, and handoff conditions without code.",
  },
  {
    icon: MessageSquare,
    title: "Human Handoff",
    description: "Seamless escalation to humans when agents reach confidence thresholds. Full conversation context preserved across handoffs.",
  },
  {
    icon: BarChart3,
    title: "Agent Analytics",
    description: "Monitor agent performance, cost per task, success rates, and ROI. Real-time dashboards for every agent in your fleet.",
  },
  {
    icon: Shield,
    title: "Guardrails & Safety",
    description: "Configurable safety constraints, content filters, rate limits, and approval workflows. Enterprise-grade governance built in.",
  },
];

const stats = [
  { value: 99.9, suffix: "%", label: "Task Completion Rate", prefix: "" },
  { value: 80, suffix: "%", label: "Cost Reduction", prefix: "up to " },
  { value: 24, suffix: "/7", label: "Continuous Operation" },
  { value: 15, suffix: "+", label: "Pre-Built Agent Types", prefix: "" },
];

export default function AgentFleetPage() {
  return (
    <div className="overflow-hidden">
      {/* ==================== HERO ==================== */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-bg-dark to-bg-dark" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/3 size-[450px] rounded-full bg-secondary/10 blur-[140px] animate-pulse-glow" />
          <div className="absolute bottom-1/4 left-1/3 size-[350px] rounded-full bg-accent-orange/10 blur-[100px] animate-float-slow" />
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
              <Badge variant="default" className="mb-6 border-secondary/30 text-secondary">
                <Bot className="size-3" /> Autonomous Platform
              </Badge>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] mb-6">
                AW Agent Fleet
                <br />
                <span className="gradient-text-warm">Multi-Agent AI Workforce</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <p className="text-lg md:text-xl text-text-secondary max-w-2xl mb-8 leading-relaxed">
                Deploy autonomous AI agents that work 24/7. Sales, support, research, and operations —
                orchestrated as a coordinated team that delivers results while you sleep.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-orange to-secondary px-8 py-3.5 text-base font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-secondary/25 hover:scale-[1.02]"
                >
                  Deploy Your Fleet
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full bg-bg-card text-text-primary border border-border px-8 py-3.5 text-base font-medium hover:border-secondary/30 transition-all duration-300"
                >
                  See Demo
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

      {/* ==================== PLATFORM OVERVIEW ==================== */}
      <section className="py-24 relative">
        <div className="container-main">
          <AnimatedSection className="text-center mb-16">
            <Badge variant="default" className="mb-4 border-secondary/30 text-secondary">Platform</Badge>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Agents That <span className="gradient-text-warm">Work Together</span>
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              Not single-purpose bots — a coordinated workforce.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Sales Agent",
                desc: "Qualifies leads, books meetings, sends follow-ups, and manages pipeline. Integrates with NuCRM for seamless handoff.",
                icon: Zap,
                agents: ["Lead Qualifier", "Meeting Booker", "Follow-Up Specialist", "Pipeline Manager"],
                gradient: "from-primary/10 to-primary/5",
                border: "border-primary/20",
              },
              {
                title: "Support Agent",
                desc: "Handles Tier 1-2 support tickets autonomously. Escalates complex issues with full context. 24/7 availability.",
                icon: MessageSquare,
                agents: ["Ticket Handler", "FAQ Responder", "Escalation Manager", "Satisfaction Surveyor"],
                gradient: "from-accent/10 to-accent/5",
                border: "border-accent/20",
              },
              {
                title: "Research Agent",
                desc: "Monitors competitors, gathers market intelligence, analyzes trends, and generates reports. Runs continuously in the background.",
                icon: Brain,
                agents: ["Competitor Tracker", "Market Analyst", "Trend Spotter", "Report Generator"],
                gradient: "from-secondary/10 to-secondary/5",
                border: "border-secondary/20",
              },
              {
                title: "Operations Agent",
                desc: "Automates data entry, report generation, invoice processing, and workflow approvals. Reduces ops overhead by 80%.",
                icon: Layers,
                agents: ["Data Processor", "Report Runner", "Invoice Handler", "Approval Manager"],
                gradient: "from-accent-orange/10 to-accent-orange/5",
                border: "border-accent-orange/20",
              },
            ].map((category, i) => (
              <AnimatedSection key={category.title} delay={i * 120}>
                <div className={`rounded-2xl border ${category.border} bg-gradient-to-br ${category.gradient} p-8 h-full`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="size-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                      <category.icon className="size-5 text-text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>
                  <p className="text-text-secondary text-sm mb-5 leading-relaxed">{category.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {category.agents.map((agent) => (
                      <span key={agent} className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-text-muted">
                        {agent}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FEATURES ==================== */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/[0.02] to-transparent" />
        <div className="container-main relative">
          <AnimatedSection className="text-center mb-16">
            <Badge variant="default" className="mb-4 border-secondary/30 text-secondary">Features</Badge>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Enterprise <span className="gradient-text-warm">Agent Infrastructure</span>
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              Built for reliability at scale.
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

      {/* ==================== AGENT ARCHITECTURE ==================== */}
      <section className="py-24 relative">
        <div className="container-main">
          <AnimatedSection className="text-center mb-16">
            <Badge variant="default" className="mb-4 border-secondary/30 text-secondary">Architecture</Badge>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              How the Fleet <span className="gradient-text-warm">Orchestrates</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-4 gap-4">
            {[
              { step: "Trigger", desc: "Event, schedule, or API call activates the fleet" },
              { step: "Orchestrate", desc: "Coordinator agent selects and tasks the right agents" },
              { step: "Execute", desc: "Agents work in parallel, sharing context and results" },
              { step: "Deliver", desc: "Output is verified, logged, and delivered to target" },
            ].map((item, i) => (
              <AnimatedSection key={item.step} delay={i * 100}>
                <div className="relative rounded-2xl border border-border/50 bg-bg-card p-6 text-center group hover:border-secondary/20 transition-all duration-500">
                  <div className="text-3xl font-bold gradient-text-warm/40 mb-2">{String(i + 1).padStart(2, "0")}</div>
                  <h4 className="font-semibold mb-2">{item.step}</h4>
                  <p className="text-xs text-text-secondary">{item.desc}</p>
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
            <Badge variant="default" className="mb-4 border-secondary/30 text-secondary">Pricing</Badge>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Scale Your <span className="gradient-text-warm">Workforce</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                name: "Starter",
                price: "$49",
                period: "/mo",
                desc: "For teams exploring AI agents",
                features: ["3 agent types", "1,000 tasks/mo", "Pre-built templates", "Email support", "Community access"],
                featured: false,
              },
              {
                name: "Professional",
                price: "$149",
                period: "/mo",
                desc: "For growing operations",
                features: ["10 agent types", "10,000 tasks/mo", "Visual agent builder", "Custom integrations", "Agent analytics", "Priority support", "Slack/Microsoft Teams integration"],
                featured: true,
              },
              {
                name: "Enterprise",
                price: "$499",
                period: "/mo",
                desc: "For large-scale deployments",
                features: ["Unlimited agent types", "Unlimited tasks", "Custom agent development", "On-premise option", "SSO + SAML", "Dedicated support", "SLA guarantee", "Training & onboarding"],
                featured: false,
              },
            ].map((tier, i) => (
              <AnimatedSection key={tier.name} delay={i * 100}>
                <div className={`relative rounded-2xl border p-8 h-full flex flex-col ${
                  tier.featured
                    ? "border-secondary/30 bg-gradient-to-b from-secondary/5 to-bg-card shadow-lg shadow-secondary/10"
                    : "border-border/50 bg-bg-card"
                }`}>
                  {tier.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge variant="default" className="border-secondary/30 text-secondary">Most Popular</Badge>
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
                        <CheckCircle2 className="size-4 text-secondary mt-0.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="#"
                    className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ${
                      tier.featured
                        ? "bg-gradient-to-r from-accent-orange to-secondary text-white hover:shadow-lg hover:shadow-secondary/25"
                        : "bg-bg-card-hover text-text-primary border border-border hover:border-secondary/30"
                    }`}
                  >
                    Deploy Now <ArrowRight className="size-4" />
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
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[500px] rounded-full bg-gradient-to-r from-secondary/10 to-accent-orange/10 blur-[120px]" />
        </div>
        <div className="container-main relative text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Build Your <span className="gradient-text-warm">Agent Workforce</span>
            </h2>
            <p className="text-text-secondary max-w-lg mx-auto mb-8">
              Deploy in minutes. Start seeing results in hours.
            </p>
            <Link
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-orange to-secondary px-8 py-3.5 text-base font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-secondary/25 hover:scale-[1.02]"
            >
              Deploy Your Fleet
              <ArrowRight className="size-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
