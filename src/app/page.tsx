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
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { StatsCounter } from "@/components/ui/StatsCounter";

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-bg-dark to-bg-dark" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 size-72 rounded-full bg-primary/20 blur-[120px] animate-float-slow" />
          <div className="absolute bottom-1/4 right-1/4 size-96 rounded-full bg-secondary/15 blur-[150px] animate-float" style={{ animationDelay: "-3s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-48 rounded-full bg-accent/10 blur-[100px] animate-pulse-glow" />
        </div>

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="container-main relative z-10 pt-24 pb-16 text-center">
          <AnimatedSection>
            <Badge variant="primary" className="mb-6">
              <Zap className="size-3" />
              AI-Powered Business Suite
            </Badge>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] mb-6">
              Power Your Business
              <br />
              <span className="gradient-text">With AI</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
              Enterprise-grade CRM, multi-channel outreach, autonomous AI agents,
              and digital services — all designed to transform how you work.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/nucrm"
                className="inline-flex items-center gap-2 rounded-full gradient-bg px-8 py-3.5 text-base font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:scale-[1.02]"
              >
                Explore Products
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/digital-services"
                className="inline-flex items-center gap-2 rounded-full bg-bg-card text-text-primary border border-border px-8 py-3.5 text-base font-medium hover:border-primary/30 hover:bg-bg-card-hover transition-all duration-300"
              >
                Our Services
              </Link>
            </div>
          </AnimatedSection>

          {/* Stats */}
          <AnimatedSection delay={400}>
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              <StatsCounter value={5000} suffix="+" label="Active Users" />
              <StatsCounter value={99.9} suffix="%" label="Uptime" prefix="" />
              <StatsCounter value={34} suffix="%" label="Avg. Conversion Boost" prefix="+" />
              <StatsCounter value={50} suffix="+" label="Enterprise Clients" />
            </div>
          </AnimatedSection>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted animate-float">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="size-5 rounded-full border-2 border-text-muted flex items-center justify-center">
            <div className="size-1.5 rounded-full bg-text-muted animate-bounce" />
          </div>
        </div>
      </section>

      {/* ==================== PRODUCTS OVERVIEW ==================== */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
        <div className="container-main relative">
          <AnimatedSection className="text-center mb-16">
            <Badge variant="primary" className="mb-4">Our Products</Badge>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Everything You Need to <span className="gradient-text">Scale</span>
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              Four powerful solutions that work together seamlessly.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* NuCRM */}
            <AnimatedSection delay={100}>
              <Link href="/nucrm" className="group block relative overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-br from-bg-card to-bg-card-hover p-8 lg:p-10 transition-all duration-500 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
                <div className="absolute top-0 right-0 size-64 bg-primary/10 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <Badge variant="primary" className="mb-4">Flagship Product</Badge>
                <div className="flex items-center gap-3 mb-4">
                  <div className="size-12 rounded-xl gradient-bg flex items-center justify-center">
                    <Users className="size-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">NuCRM</h3>
                    <p className="text-sm text-text-secondary">AI-Powered CRM</p>
                  </div>
                </div>
                <p className="text-text-secondary mb-6 leading-relaxed">
                  Real-time AI lead scoring, intelligent routing, and multi-channel inbox.
                  Convert 34% more leads with AI that scores every 30 seconds.
                </p>
                <div className="flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                  Explore NuCRM <ArrowRight className="size-4" />
                </div>
              </Link>
            </AnimatedSection>

            {/* LeadGenius */}
            <AnimatedSection delay={200}>
              <Link href="/leadgenius" className="group block relative overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-br from-bg-card to-bg-card-hover p-8 lg:p-10 transition-all duration-500 hover:border-accent/20 hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-1">
                <div className="absolute top-0 right-0 size-64 bg-accent/10 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <Badge variant="accent" className="mb-4">Outreach Engine</Badge>
                <div className="flex items-center gap-3 mb-4">
                  <div className="size-12 rounded-xl gradient-bg-accent flex items-center justify-center">
                    <Target className="size-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">LeadGenius</h3>
                    <p className="text-sm text-text-secondary">Multi-Channel Outreach</p>
                  </div>
                </div>
                <p className="text-text-secondary mb-6 leading-relaxed">
                  97.2% inbox placement. Email + WhatsApp at scale. AI agents handle 85% of leads autonomously.
                </p>
                <div className="flex items-center gap-2 text-sm font-medium text-accent group-hover:gap-3 transition-all">
                  Explore LeadGenius <ArrowRight className="size-4" />
                </div>
              </Link>
            </AnimatedSection>

            {/* AW Agent Fleet */}
            <AnimatedSection delay={150}>
              <Link href="/agent-fleet" className="group block relative overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-br from-bg-card to-bg-card-hover p-8 lg:p-10 transition-all duration-500 hover:border-secondary/20 hover:shadow-xl hover:shadow-secondary/5 hover:-translate-y-1">
                <div className="absolute top-0 right-0 size-64 bg-secondary/10 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <Badge variant="default" className="mb-4 border-secondary/20 text-secondary">Autonomous</Badge>
                <div className="flex items-center gap-3 mb-4">
                  <div className="size-12 rounded-xl gradient-bg-warm flex items-center justify-center">
                    <Bot className="size-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">AW Agent Fleet</h3>
                    <p className="text-sm text-text-secondary">Multi-Agent AI Workforce</p>
                  </div>
                </div>
                <p className="text-text-secondary mb-6 leading-relaxed">
                  Deploy autonomous AI agents for sales, support, research, and operations. Self-orchestrating multi-agent teams.
                </p>
                <div className="flex items-center gap-2 text-sm font-medium gradient-text-warm group-hover:gap-3 transition-all">
                  Explore Agent Fleet <ArrowRight className="size-4" />
                </div>
              </Link>
            </AnimatedSection>

            {/* Digital Services */}
            <AnimatedSection delay={250}>
              <Link href="/digital-services" className="group block relative overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-br from-bg-card to-bg-card-hover p-8 lg:p-10 transition-all duration-500 hover:border-accent-orange/20 hover:shadow-xl hover:shadow-accent-orange/5 hover:-translate-y-1">
                <div className="absolute top-0 right-0 size-64 bg-accent-orange/10 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <Badge variant="warning" className="mb-4">Agency Services</Badge>
                <div className="flex items-center gap-3 mb-4">
                  <div className="size-12 rounded-xl bg-accent-orange/20 border border-accent-orange/30 flex items-center justify-center">
                    <Globe className="size-6 text-accent-orange" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Digital Services</h3>
                    <p className="text-sm text-text-secondary">Web + SEO + Consulting</p>
                  </div>
                </div>
                <p className="text-text-secondary mb-6 leading-relaxed">
                  Modern web development, SEO optimization, AI consulting, and digital strategy. From concept to scale.
                </p>
                <div className="flex items-center gap-2 text-sm font-medium text-accent-orange group-hover:gap-3 transition-all">
                  Explore Services <ArrowRight className="size-4" />
                </div>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ==================== WHY ABET WORKS ==================== */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
        <div className="container-main relative">
          <AnimatedSection className="text-center mb-16">
            <Badge variant="primary" className="mb-4">Why Abet Works</Badge>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Built for <span className="gradient-text">Performance</span>
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              Enterprise infrastructure, consumer-grade experience.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={Zap}
              title="Real-Time AI"
              description="Live scoring and routing every 30 seconds. Not batch processing — instant intelligence."
            />
            <FeatureCard
              icon={Shield}
              title="Enterprise Security"
              description="SOC 2 compliant, end-to-end encryption, role-based access control."
            />
            <FeatureCard
              icon={BarChart3}
              title="Actionable Analytics"
              description="Real-time dashboards, predictive insights, and custom reporting."
            />
            <FeatureCard
              icon={Layers}
              title="Seamless Integration"
              description="Connect with your existing tools via API, webhooks, and native integrations."
            />
            <FeatureCard
              icon={MessageSquare}
              title="Multi-Channel"
              description="Meet customers where they are — email, WhatsApp, live chat, and more."
            />
            <FeatureCard
              icon={Workflow}
              title="Automated Workflows"
              description="Build complex automations without code. AI handles the heavy lifting."
            />
          </div>
        </div>
      </section>

      {/* ==================== CTA SECTION ==================== */}
      <section className="py-24 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] rounded-full bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 blur-[150px]" />
        </div>
        <div className="container-main relative text-center">
          <AnimatedSection>
            <Badge variant="primary" className="mb-4">Get Started</Badge>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-text-secondary max-w-lg mx-auto mb-10">
              Start with a free consultation. No commitment, no sales pitch — just real solutions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/nucrm"
                className="inline-flex items-center gap-2 rounded-full gradient-bg px-8 py-3.5 text-base font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:scale-[1.02]"
              >
                Start Free Trial
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/digital-services"
                className="inline-flex items-center gap-2 rounded-full bg-bg-card text-text-primary border border-border px-8 py-3.5 text-base font-medium hover:border-primary/30 transition-all duration-300"
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
