"use client";

import Link from "next/link";
import {
  ArrowRight, Target, Lightbulb, Shield, Zap,
  BarChart3, Bot, Globe, Code2, TrendingUp,
  CheckCircle2, Sparkles, Building2, Users,
  Award, Heart, Quote,
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { StatsCounter } from "@/components/ui/StatsCounter";

const values = [
  {
    icon: Zap, title: "Innovation First",
    desc: "We don't follow trends — we set them. Every solution is built with cutting-edge technology and a forward-thinking approach.",
    accent: "text-primary", bg: "bg-primary/5",
  },
  {
    icon: Shield, title: "Integrity & Trust",
    desc: "Transparent partnerships built on honesty. We deliver what we promise, on time and on budget.",
    accent: "text-accent", bg: "bg-accent/5",
  },
  {
    icon: Users, title: "Client-Centric",
    desc: "Your success is our success. We invest deeply in understanding your business, your challenges, and your goals.",
    accent: "text-secondary", bg: "bg-secondary/5",
  },
  {
    icon: Award, title: "Excellence Always",
    desc: "Mediocrity isn't an option. From pixel-perfect designs to robust backend architecture — we demand excellence.",
    accent: "text-warm", bg: "bg-warm/5",
  },
  {
    icon: Heart, title: "Passion for Impact",
    desc: "We build technology that makes a real difference — automating the tedious, enabling the impossible, scaling the ambitious.",
    accent: "text-rose", bg: "bg-rose/5",
  },
  {
    icon: TrendingUp, title: "Growth Mindset",
    desc: "We continuously learn, adapt, and improve. Our clients grow because we never stop evolving.",
    accent: "text-emerald", bg: "bg-emerald/5",
  },
];

const offerings = [
  { icon: BarChart3, title: "Data Analytics", desc: "Transform raw data into actionable intelligence that drives smarter decisions and measurable growth.", accent: "text-primary", bg: "bg-primary/5" },
  { icon: Bot, title: "Artificial Intelligence", desc: "Integrate AI into every layer of your business — from chatbots to predictive models to autonomous agents.", accent: "text-secondary", bg: "bg-secondary/5" },
  { icon: Globe, title: "Digital Services", desc: "Modern web development, SEO, and digital strategy that puts you ahead of the competition.", accent: "text-accent", bg: "bg-accent/5" },
  { icon: Lightbulb, title: "Business Consulting", desc: "Strategic guidance on transformation, growth, and operational efficiency for the modern enterprise.", accent: "text-warm", bg: "bg-warm/5" },
];

const partners = [
  "AWS", "Salesforce", "OpenAI", "Meta",
  "Mailchimp", "Microsoft", "Google", "TensorFlow",
];

export default function AboutPage() {
  return (
    <div className="overflow-hidden">
      {/* ============ HERO ============ */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden pt-20 bg-gradient-to-b from-primary/[0.04] via-white to-white">
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
                <Building2 className="size-3.5" />
                About Abet Works
              </div>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] mb-6 text-text-primary">
                Empowering Businesses
                <br />
                <span className="gradient-text">Through Innovation</span>
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <p className="text-lg md:text-xl text-text-secondary max-w-2xl mb-10 leading-relaxed">
                At Abet Works, we combine deep technical expertise with a passion for innovation 
                to deliver cutting-edge digital solutions. From AI to analytics, we help businesses 
                thrive in a competitive landscape.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contact" className="group inline-flex items-center gap-2 rounded-full gradient-bg px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:scale-[1.02]">
                  Get in Touch
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link href="/digital-services" className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-text-secondary border border-border hover:border-text-muted/30 hover:text-text-primary glass-card transition-all duration-300">
                  Our Services
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ============ STATS ============ */}
      <section className="py-16 relative">
        <div className="container-main">
          <div className="rounded-3xl glass-card p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: 50, suffix: "+", label: "Projects Delivered" },
                { value: 100, suffix: "%", label: "Client Satisfaction", prefix: "" },
                { value: 5, suffix: "+", label: "Years Experience" },
                { value: 4, suffix: "", label: "Core Services" },
              ].map((s, i) => (
                <AnimatedSection key={s.label} delay={i * 100}>
                  <StatsCounter value={s.value} suffix={s.suffix} label={s.label} prefix={s.prefix || ""} />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ MISSION ============ */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-primary/[0.015] to-white pointer-events-none" />
        <div className="container-main relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-xs text-primary font-medium tracking-wide mb-4">
                <Target className="size-3.5" />
                Our Mission
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-text-primary">
                Building the Future of <span className="gradient-text">Business Technology</span>
              </h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                We believe technology should empower, not overwhelm. Our mission is to make 
                enterprise-grade AI, automation, and digital solutions accessible to businesses 
                of every size.
              </p>
              <p className="text-text-secondary leading-relaxed">
                From custom software development to AI-powered lead generation, we build 
                solutions that streamline operations, drive growth, and create lasting impact. 
                Our team of engineers, strategists, and creatives work as an extension of 
                your business — because your success is ours.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="glass-card rounded-3xl p-8 lg:p-10 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="size-11 rounded-2xl bg-primary/5 text-primary flex items-center justify-center shrink-0">
                    <Quote className="size-5" />
                  </div>
                  <div>
                    <p className="text-text-primary font-semibold leading-relaxed">
                      &ldquo;We don&apos;t just build software — we build partnerships. Every line of code, 
                      every strategy, every pixel is crafted with our clients&apos; success in mind.&rdquo;
                    </p>
                    <p className="text-sm text-text-muted mt-3">— Abet Works Team</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-2">
                  {["Custom Software", "AI & Automation", "Data Analytics", "Digital Strategy"].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-text-secondary">
                      <CheckCircle2 className="size-4 text-primary shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ============ OFFERINGS ============ */}
      <section className="py-24 relative overflow-hidden">
        <div className="container-main">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-xs text-primary font-medium tracking-wide mb-4">
              <Zap className="size-3.5" />
              What We Do
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-text-primary">
              Four Pillars of <span className="gradient-text">Impact</span>
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              Our expertise spans across four interconnected domains.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {offerings.map((o, i) => (
              <AnimatedSection key={o.title} delay={i * 80}>
                <div className="glass-card rounded-2xl p-7 hover:glass-strong hover:shadow-md transition-all duration-500 group h-full">
                  <div className={`size-11 rounded-xl ${o.bg} ${o.accent} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <o.icon className="size-5" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-text-primary">{o.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{o.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ============ VALUES ============ */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-accent/[0.015] to-white pointer-events-none" />
        <div className="container-main relative">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-xs text-accent font-medium tracking-wide mb-4">
              <Heart className="size-3.5" />
              Our Values
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-text-primary">
              What <span className="gradient-text-accent">Drives Us</span>
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              The principles that guide every project, partnership, and decision.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 60}>
                <div className="glass-card rounded-2xl p-6 h-full hover:glass-strong hover:shadow-md transition-all duration-500">
                  <div className={`size-10 rounded-xl ${v.bg} ${v.accent} flex items-center justify-center mb-3`}>
                    <v.icon className="size-5" />
                  </div>
                  <h3 className="font-semibold mb-2 text-text-primary">{v.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PARTNERS ============ */}
      <section className="py-20 relative">
        <div className="container-main">
          <AnimatedSection className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-xs text-text-muted font-medium tracking-wide mb-4">
              <Award className="size-3.5" />
              Technology Partners
            </div>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-text-primary">
              Built on <span className="gradient-text">Best-in-Class</span> Platforms
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="glass-card rounded-3xl p-8 md:p-10">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {partners.map((p) => (
                  <div key={p} className="flex items-center justify-center p-4 rounded-xl bg-white/70 border border-border/50 hover:border-primary/20 transition-all duration-300">
                    <span className="text-sm font-semibold text-text-primary tracking-tight">{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
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
              <Sparkles className="size-3.5" />
              Let&apos;s Build Together
            </div>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-text-primary">
              Ready to Transform
              <br />
              <span className="gradient-text">Your Business?</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="text-text-secondary max-w-lg mx-auto mb-10">
              Free 30-minute consultation. No pitch — just real advice from people who build
              what they sell.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={300}>
            <Link href="/contact" className="group inline-flex items-center gap-2 rounded-full gradient-bg px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:scale-[1.02]">
              Start the Conversation
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
