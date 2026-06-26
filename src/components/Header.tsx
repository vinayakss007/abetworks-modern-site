"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/nucrm", label: "NuCRM" },
  { href: "/leadgenius", label: "LeadGenius" },
  { href: "/agent-fleet", label: "Agent Fleet" },
  { href: "/digital-services", label: "Digital Services" },
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
          ? "glass border-b border-border/50 shadow-lg shadow-black/10"
          : "bg-transparent"
      )}
    >
      <div className="container-main flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="size-8 rounded-lg gradient-bg flex items-center justify-center text-white font-bold text-sm transition-transform duration-300 group-hover:scale-105">
            AW
          </div>
          <span className="text-lg font-semibold tracking-tight">
            Abet <span className="gradient-text">Works</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative px-4 py-2 text-sm text-text-secondary hover:text-text-primary transition-colors duration-200 rounded-lg hover:bg-white/5"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/contact"
            className="text-sm text-text-secondary hover:text-text-primary transition-colors"
          >
            Contact
          </Link>
          <Link
            href="/nucrm"
            className="inline-flex items-center gap-2 rounded-full gradient-bg px-5 py-2 text-sm font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:scale-[1.02]"
          >
            Get Started
            <svg className="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="md:hidden p-2 text-text-secondary hover:text-text-primary transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileOpen && (
        <div className="md:hidden glass border-t border-border/50">
          <div className="container-main py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className="block px-4 py-3 text-sm text-text-secondary hover:text-text-primary hover:bg-white/5 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <hr className="border-border my-3" />
            <Link
              href="/nucrm"
              onClick={() => setIsMobileOpen(false)}
              className="block text-center rounded-full gradient-bg px-5 py-3 text-sm font-medium text-white"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
