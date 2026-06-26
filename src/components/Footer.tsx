import Link from "next/link";

const productLinks = [
  { href: "/nucrm", label: "NuCRM" },
  { href: "/leadgenius", label: "LeadGenius" },
  { href: "/agent-fleet", label: "AW Agent Fleet" },
  { href: "/digital-services", label: "Digital Services" },
];

const serviceLinks = [
  { href: "/digital-services#web-development", label: "Web Development" },
  { href: "/digital-services#seo", label: "SEO & Marketing" },
  { href: "/digital-services#consulting", label: "Business Consulting" },
  { href: "/digital-services#ai-solutions", label: "AI Solutions" },
];

const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
  { href: "/digital-services", label: "Services" },
  { href: "/#", label: "Privacy Policy" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-white/80">
      <div className="container-main py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="size-8 rounded-lg gradient-bg flex items-center justify-center text-white font-bold text-sm">
                AW
              </div>
              <span className="text-lg font-semibold tracking-tight text-text-primary">
                Abet <span className="text-primary">Works</span>
              </span>
            </Link>
            <p className="text-sm text-text-secondary leading-relaxed mb-6">
              Enterprise-grade AI solutions for modern businesses. 
              Powering sales, outreach, automation, and digital growth.
            </p>
            <div className="flex gap-3">
              {["twitter", "linkedin", "youtube", "facebook"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="size-9 rounded-lg bg-black/[0.03] border border-border flex items-center justify-center text-text-muted hover:text-primary hover:border-primary/20 transition-all duration-200"
                >
                  <span className="text-xs font-medium uppercase tracking-wider">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-4 uppercase tracking-wider">Products</h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-text-secondary hover:text-primary transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-4 uppercase tracking-wider">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-text-secondary hover:text-primary transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-4 uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-text-secondary hover:text-primary transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 rounded-xl glass-card">
              <p className="text-xs text-text-muted mb-1">Get in touch</p>
              <a href="mailto:hello@abetworks.in" className="text-sm text-text-secondary hover:text-primary transition-colors">
                hello@abetworks.in
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">© {new Date().getFullYear()} Abet Works. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-text-muted hover:text-text-secondary transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-text-muted hover:text-text-secondary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
