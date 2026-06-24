# Existing Code & Demo Analysis

## Repos found in coding4vinayak (AW-related)

### Directly Usable Assets

| Repo | What's Valuable |
|------|-----------------|
| **aw-tools-next** | Full Next.js 16 + React 19 + Tailwind 4 setup — can reuse as foundation for new site. Has tools listing page, product cards, search, categories |
| **aw-tools-free** | 100+ free tool implementations (HTML templates, API backends). Can reference for tool integrations |
| **aw-agent-fleet** | AI agent platform UI/UX patterns, documentation structure |
| **aw-enterprise-sales-agent** | Enterprise product structure, React frontend patterns |
| **lead-genius-pre-** | Turborepo monorepo structure, could be reference architecture |

### Previously Built Demo Website (June 12, 2026 session)
- **What:** Single-page modern HTML/CSS site built from scraped abetworks.in content
- **Features:** Hero, About, Services, Portfolio, Blog, Contact, Footer
- **Style:** Glassmorphism, gradients, dark/light mode, scroll animations
- **Status:** Was served via localhost.run tunnel, NOT permanently deployed
- **Relevance:** Good reference for design direction but will be superseded

### Previously Built WordPress Plan (June 14 session)
- **What:** Tech News AI as content arm of Abet Works
- **Status:** Planned but not built
- **Insights:** User decided AI should control all content generation

## Current Site Inventory

### Pages Working
- https://abetworks.in/ — Homepage (slow, Bootstrap)
- https://abetworks.in/blogs/ — WordPress blog
- https://abetworks.in/services/aboutus.html — About page
- https://tools.abetworks.in/ — Free tools platform (Next.js)

### Pages Returning 404 / Broken
- https://abetworks.in/blog — Redirects (should be /blogs/)
- https://abetworks.in/tools — 404 (should link to tools.abetworks.in)
- https://abetworks.in/services/Services.html — 404
- https://abetworks.in/services/Data_Analytics.html — 404
- https://abetworks.in/services/ai.html — 404
- https://abetworks.in/services/digital_services.html — 404
- https://abetworks.in/services/Bussiness_consultancy.html — 404
- https://abetworks.in/services/contact.html — 404

## Design Notes from Previous Session
The previously built demo (June 12) used:
- Dark gradient hero with animated background
- "Abet Works" logo as text with dot accent
- Section cards with glassmorphism (backdrop-filter blur)
- Service cards with hover lift effect
- Portfolio image grid with overlay on hover
- Blog cards with image + excerpt
- Contact form with social links
- Dark/light theme toggle
- Smooth scroll navigation
- Stats counter section (50+ Projects, 100% Satisfaction)
