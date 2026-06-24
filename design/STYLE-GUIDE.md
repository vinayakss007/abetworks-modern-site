# 🎨 Design Principles & Style Guide

## Brand Identity
- **Name:** Abet Works
- **Tagline:** Powerful Digital Solutions With AI
- **Colors:** Tech Blue (#0066FF) → Deep Purple (#7C3AED) gradient
- **Font:** Inter (headings + body), JetBrains Mono (code)
- **Logo:** "Abet Works" wordmark with dot accent

## Apple/Stripe/Linear Design Principles

### From Apple
- **Large hero imagery** — full-bleed product screenshots/mockups
- **Minimal copy** — bold H1, short descriptor, 2 CTAs max
- **Product isolation** — one hero per product, no clutter
- **Typography hierarchy** — massive H1, medium H2, small body
- **Natural navigation** — products as nav items, not services
- **Footer density** — lots of organized links

### From Stripe
- **Trust signals** — big stats numbers, client logos running continuously
- **Expandable content** — accordion sections for feature details
- **Testimonial cards** — real names, titles, company logos
- **Dual CTAs** — primary action + secondary (less committal)
- **Product-first navigation** — products/solutions/developers

### From Linear
- **Dark mode by default** — especially for tech/AI products
- **Morphing gradients** — subtle animated backgrounds
- **Micro-interactions** — button hovers, card lifts, smooth transitions
- **Edge-to-edge content** — no boxed layouts, full-width sections

## Design System Tokens

### Colors
```
--primary:        #0066FF     (Tech Blue)
--primary-dark:   #0052CC
--secondary:      #7C3AED     (Purple)
--accent:         #00D4AA     (Teal for accents)
--gradient-main:  linear-gradient(135deg, #0066FF, #7C3AED)
--gradient-cta:   linear-gradient(135deg, #0066FF, #00D4AA)
--bg-dark:        #0A0A0F     (Near-black)
--bg-card:        #111118
--bg-card-hover:  #1A1A24
--text-primary:   #FFFFFF
--text-secondary: #A0A0B8
--text-muted:     #6B6B80
--border:         #1E1E2E
--success:        #10B981
--warning:        #F59E0B
--error:          #EF4444
```

### Typography
```
--font-heading:    'Inter', sans-serif
--font-body:       'Inter', sans-serif
--font-mono:       'JetBrains Mono', monospace

--h1-size:         4rem (64px) hero
--h2-size:         2.5rem (40px) section
--h3-size:         1.5rem (24px) card
--body-size:       1rem (16px)
--small-size:      0.875rem (14px)

--font-weight-h1:  700 (bold)
--font-weight-h2:  600 (semibold)
--font-weight-body: 400 (regular)
```

### Spacing
```
--section-padding:   6rem 0
--container-max:     1280px
--card-gap:          1.5rem
--grid-gap:          2rem
```

### Components
| Component | Style |
|-----------|-------|
| **Buttons** | Pill-shaped, gradient fill, md padding, 12px border-radius |
| **Cards** | Dark bg with subtle border, 16px radius, hover lift (translateY -4px) |
| **Nav** | Fixed top, blur backdrop, dark glass |
| **Hero** | Full viewport, gradient/particle bg, centered content |
| **Footer** | Dark section, multi-column links, social icons |
| **Inputs** | Dark fill, rounded, subtle border, focus-ring blue |
| **Tags** | Small pill, subtle bg, muted text |

## Page Component Architecture
```
layout/
├── root-layout.tsx        — HTML, fonts, metadata
├── header.tsx             — Fixed nav, mobile menu
├── footer.tsx             — Multi-column footer
└── providers.tsx          — Theme, analytics, etc.

sections/
├── hero.tsx               — Full-viewport hero
├── product-grid.tsx       — Product card grid
├── stats-bar.tsx          — Impact numbers
├── testimonials.tsx       — Client quotes
├── cta-section.tsx        — Call to action
├── social-proof.tsx       — Logo carousel
├── features.tsx           — Feature cards
└── pricing-cards.tsx      — Pricing tiers

ui/
├── button.tsx             — Primary, secondary, ghost
├── card.tsx               — Product/service card
├── badge.tsx              — Category/tag badge
├── input.tsx              — Form inputs
├── select.tsx             — Dropdowns
└── dialog.tsx             — Modal windows
```

## Animation Guidelines
- **Page transitions:** Fade + slide up (300ms ease-out)
- **Scroll reveals:** Stagger children up (Intersection Observer)
- **Card hover:** Lift translateY(-4px) + shadow increase (200ms)
- **Button hover:** Slight scale(1.02) + gradient shift
- **Nav scroll:** Background opacity change on scroll
- **Logo carousel:** Continuous horizontal scroll (CSS animation)
- **Hero background:** Slow parallax drift or particle animation
