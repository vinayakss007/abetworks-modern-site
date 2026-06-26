"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/nucrm", label: "NuCRM" },
  { href: "/leadgenius", label: "LeadGenius" },
  { href: "/agent-fleet", label: "Agent Fleet" },
  { href: "/digital-services", label: "Services" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "glass shadow-lg shadow-black/5 border-b border-white/[0.04]"
          : "bg-transparent"
      )}
    >
      <div className="container-main flex h-16 md:h-18 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="size-9 rounded-xl gradient-bg-premium flex items-center justify-center text-white font-extrabold text-sm tracking-tight transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-primary/20">
            AW
          </div>
          <span className="text-base md:text-lg font-semibold tracking-tight">
            Abet <span className="gradient-text-accent">Works</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-0.5 bg-white/[0.03] rounded-2xl px-1.5 py-1 border border-white/[0.05]">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative px-4 py-2 text-sm text-text-secondary/80 hover:text-text-primary transition-colors duration-200 rounded-xl hover:bg-white/[0.06]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/nucrm"
            className="relative inline-flex items-center gap-1.5 rounded-full px-5 py-2 text-sm font-medium text-white overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:scale-[1.02]"
          >
            <span className="absolute inset-0 gradient-bg-premium rounded-full" />
            <span className="relative flex items-center gap-1.5">
              Get Started <ArrowUpRight className="size-3.5" />
            </span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="md:hidden p-2.5 text-text-secondary hover:text-text-primary transition-colors bg-white/[0.04] rounded-xl border border-white/[0.06]"
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileOpen && (
        <div className="md:hidden border-t border-white/[0.06] bg-bg-card/95 backdrop-blur-2xl">
          <div className="container-main py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className="block px-4 py-3 text-sm text-text-secondary hover:text-text-primary hover:bg-white/[0.04] rounded-xl transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <hr className="border-white/[0.06] my-3" />
            <Link
              href="/nucrm"
              onClick={() => setIsMobileOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full gradient-bg-premium px-5 py-3 text-sm font-medium text-white"
            >
              Get Started <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
