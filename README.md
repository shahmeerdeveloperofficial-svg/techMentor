# Tech Mentors — Premium Software House & Digital Solutions Studio
### Approved Design: Option 3 — Dark Purple Premium Tech Studio

A production-ready, high-performance, multipage web application built with **React, TypeScript, Tailwind CSS, and Vite**, embodying the **Dark Purple Premium Tech Studio** design standard.

---

## 🎨 Visual Identity & Color Palette

The design is engineered around the approved Dark Purple palette:

| Element | Color Hex | Description |
|---|---|---|
| Primary Background | `#101018` | Deep Obsidian Charcoal |
| Secondary Background | `#191824` | Midnight Studio Dark |
| Card Background | `#211F30` | Elevated Charcoal Studio Surface |
| Card Border | `#383348` | Muted Indigo Slate Border |
| Primary Purple | `#8746F5` | Brand Highlight & Active Accent |
| Bright Violet | `#A66BFF` | Gradient Mid-Stop & Icon Hue |
| Soft Lavender | `#C7A7FF` | High-Contrast Accent & Link State |
| Primary Text | `#F8F7FC` | Bright White / Off-White Headline |
| Secondary Text | `#A9A7BA` | Cool Slate Body Typography |
| Light Section BG | `#F8F7FC` | High-Legibility Light Section Accent |
| Dark Text (on light) | `#171526` | Deep Ink Primary |

**Primary Gradient:** `linear-gradient(110deg, #6D35DB 0%, #A257F7 100%)`

---

## 🚀 Website Architecture & Pages

The application is a full multipage website with dedicated routing and custom layouts for every page:

1. **Home (`/`)**
   - Section 01: Sticky 80px Navigation Header with Dropdown & Brand Logo
   - Section 02: 2-Column Hero Banner with purple-gradient highlighted heading, verified trust points, and live telemetry browser mockup
   - Section 03: Horizontal Technology Expertise Strip (React, Next.js, Node.js, Laravel, etc.)
   - Section 04: Our Services (Responsive 4-column card grid with hover lifts)
   - Section 05: About the Company (Split layout with Studio Hub showcase)
   - Section 06: Why Tech Mentors (6 verified value pillars)
   - Section 07: Development Process (4-step horizontal/vertical responsive workflow)
   - Section 08: Selected Work (Showcase cards with live-in-production mockups)
   - Section 09: Industries We Serve (Domain knowledge cards)
   - Section 10: Non-Negotiable Software Quality Commitments (Factual assurance)
   - Section 11: Frequently Asked Questions (Accessible interactive accordion)
   - Section 12: Final Conversion Banner (High-impact CTA)
   - Section 13: 4-Column Responsive Footer
2. **About Us (`/about`)**
   - Compact page hero & breadcrumbs
   - Studio philosophy & 4 Pillars (Learn, Practice, Build, Grow)
   - Mission & Vision
   - Light Accent Section: Core Engineering Values (WCAG contrast compliant)
   - Engineering Mentorship & Architecture Review model
3. **Services (`/services`)**
   - Comprehensive overview of all 8 software practices
   - Detailed capabilities, technology tags, and direct detail links
   - Engagement delivery models (Fixed-Scope, Dedicated Squads, SLA Retainers)
4. **Individual Service Detail Pages (`/services/:slug`)**
   - `/services/web-development`
   - `/services/mobile-app-development`
   - `/services/custom-software-development`
   - `/services/ui-ux-design`
   - `/services/erp-crm-solutions`
   - `/services/api-system-integration`
   - `/services/cloud-solutions`
   - `/services/software-maintenance`
   *(Includes dedicated hero, full description, 6 capabilities, 4 business use cases, 4-step workflow, related case studies, and service FAQs)*
5. **Portfolio & Case Studies (`/portfolio`)**
   - Interactive category filter tabs (All, Custom Software, Web Application, Web & Mobile)
   - Responsive grid of verified project showcases
6. **Individual Project Pages (`/portfolio/:slug`)**
   - `/portfolio/enterprise-workflow-suite`
   - `/portfolio/telehealth-connect-platform`
   - `/portfolio/supplyflow-logistics-portal`
   - `/portfolio/finwise-analytics-dashboard`
   - `/portfolio/edumentor-lms-engine`
   - `/portfolio/omnistore-b2b-commerce`
   *(Includes business challenge, engineered solution, key functionality, architecture highlight, metrics, and live mockup)*
7. **Our Process (`/process`)**
   - Comprehensive 8-phase engineering methodology
   - Execution deliverables per phase
   - Agile sprint rhythm & transparent communication commitments
8. **Technologies (`/technologies`)**
   - Categorized by Frontend, Backend, Mobile, Databases, Cloud/DevOps, and UI/UX Architecture
   - Detailed rationale of how each tool ensures production stability
   - Selection principles eliminating vendor lock-in
9. **Careers & Mentorship (`/careers`)**
   - Engineering culture pillars
   - Open positions with detailed requirements & direct mailto application triggers
   - General inquiry option for senior architects and developers
10. **Contact Us (`/contact`)**
    - Fully functional contact form with client-side regex validation, honeypot spam protection, inquiry reference generation, and reset states
    - Direct communication channels (email, phone, address, business hours)
    - Social links (GitHub, LinkedIn, Twitter/X, YouTube)
    - Consultation guarantees (NDA, honest feasibility)
11. **Privacy Policy (`/privacy`)**
    - Complete policy clauses covering data handling, encryption, and NDAs
12. **Terms & Conditions (`/terms`)**
    - Complete clauses covering 100% intellectual property ownership, milestone payments, and post-launch warranties
13. **404 Not Found (`*`)**
    - Elegant error view redirecting users back to home or services

---

## 🛠️ Technology Stack

- **Framework:** React 19 + TypeScript
- **Bundler / Tooling:** Vite 8 (`@vitejs/plugin-react`)
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`)
- **Routing:** React Router v7 (`react-router-dom`)
- **Icons:** Lucide React (`lucide-react`) + custom SVG social icons
- **SEO & Structured Data:** Open Graph, Twitter Cards, Schema.org `ProfessionalService` JSON-LD, `sitemap.xml`, and `robots.txt`

---

## 💻 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 3. Build for Production
```bash
npm run build
```
The optimized, minified production assets will be generated in the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 📁 Project Structure

```
├── public/
│   ├── images/
│   │   └── logo.png              # Official Tech Mentors 3D Emblem Logo
│   ├── favicon.svg
│   ├── robots.txt                # Search engine crawler instructions
│   └── sitemap.xml               # Complete XML sitemap with all routes
├── src/
│   ├── components/
│   │   ├── Breadcrumbs.tsx       # Accessible breadcrumb trail
│   │   ├── BrowserMockup.tsx     # High-fidelity dark software telemetry mockup
│   │   ├── ContactForm.tsx       # Validated contact form with honeypot & feedback
│   │   ├── ConversionBanner.tsx  # High-impact dark purple CTA banner
│   │   ├── FaqAccordion.tsx      # Accessible keyboard-controlled FAQ accordion
│   │   ├── Footer.tsx            # 5-column responsive studio footer
│   │   ├── Navbar.tsx            # Sticky navigation with service dropdown & mobile drawer
│   │   ├── ProjectCard.tsx       # Reusable portfolio case study card
│   │   ├── ScrollToTop.tsx       # Auto-scroll on route changes
│   │   ├── SectionHeading.tsx    # Standardized section headings with gradient accents
│   │   ├── ServiceCard.tsx       # Reusable service card with 2-4px lift
│   │   └── SocialIcons.tsx       # Clean vector icons (GitHub, LinkedIn, X, YouTube)
│   ├── data/
│   │   └── companyConfig.ts      # Centralized company info, services, projects, tech, FAQs
│   ├── pages/
│   │   ├── About.tsx
│   │   ├── Careers.tsx
│   │   ├── Contact.tsx
│   │   ├── Home.tsx
│   │   ├── NotFound.tsx
│   │   ├── Portfolio.tsx
│   │   ├── Privacy.tsx
│   │   ├── Process.tsx
│   │   ├── ProjectDetail.tsx
│   │   ├── ServiceDetail.tsx
│   │   ├── Services.tsx
│   │   ├── Technologies.tsx
│   │   └── Terms.tsx
│   ├── App.tsx                   # Central router & layout assembly
│   ├── index.css                 # Tailwind v4 theme, design tokens, & studio styles
│   └── main.tsx                  # React DOM mount
├── index.html                    # SEO meta, JSON-LD schema, Inter font preloads
├── package.json
├── tsconfig.json
├── tsconfig.app.json
└── vite.config.ts
```

---

## 🔒 Accessibility (WCAG 2.2 AA) & Performance Highlights

- **Reduced Motion Support:** `@media (prefers-reduced-motion: reduce)` automatically disables transitions and smooth scrolling.
- **Focus Rings & Keyboard Navigation:** All interactive elements feature visible focus rings with keyboard accessibility.
- **Contrast Ratios:** Contrast ratios between text (`#F8F7FC` / `#A9A7BA`) and dark background (`#101018` / `#191824` / `#211F30`) comfortably exceed WCAG 2.2 AA (4.5:1 for normal text, 3:1 for large headers).
- **Fast First Paint:** Clean zero-bloat CSS and no heavy 3D/particle dependencies ensure near-instantaneous load times.
