# Dhana Sri Rongali — Dev Terminal Neon 3D Portfolio

A production-ready, high-performance 3D portfolio for **Dhana Sri Rongali**, Software Engineer. Built with **Next.js 15 (App Router)**, **Tailwind CSS v4**, **React Three Fiber (Three.js)**, **Framer Motion**, and **Lenis** smooth scrolling.

![Dev Terminal Neon Preview](public/file.svg)

---

## ⚡ Tech Stack & Design System

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router, static export friendly, React 19)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with custom `@theme` tokens
- **3D Graphics**: [React Three Fiber](https://r3f.docs.pmnd.rs/) + [@react-three/drei](https://github.com/pmndrs/drei) + [Three.js](https://threejs.org/)
- **Animations & Reveals**: [Framer Motion](https://www.framer.com/motion/)
- **Smooth Scrolling**: [Lenis](https://lenis.darkroom.engineering/) with `prefers-reduced-motion` detection
- **Typography**: `JetBrains Mono` (headings, terminal, code) and `Inter` (body) via `next/font/google`
- **Tooling**: TypeScript, ESLint 9 (Flat Config), Prettier, pnpm

### Visual Direction: "Dev Terminal Neon"

- **Background**: `#05060A` with subtle terminal grid overlay
- **Surface**: `#0D1018`
- **Borders**: `#232938`
- **Primary Neon Lime**: `#C6FF3D`
- **Secondary Blue-Violet**: `#5A6EFF`
- **Text Main**: `#E6EAF0`
- **Text Muted**: `#A3ACBD`

---

## 🚀 Quickstart & Local Development

### Prerequisites

- Node.js `20.x` or `22.x`
- `pnpm` (v10+ or v12+)

```bash
# 1. Clone the repository
git clone https://github.com/[YOUR_USERNAME]/dhana.git
cd dhana

# 2. Install dependencies with pnpm
pnpm install

# 3. Start local development server
pnpm dev

# 4. Open http://localhost:3000 in your browser
```

### Production Build & Linting

```bash
# Run production build (validates static generation & zero warnings)
pnpm build

# Run production server locally
pnpm start

# Run ESLint validation
pnpm lint

# Format code with Prettier
pnpm format

# Verify formatting
pnpm format:check
```

---

## 📁 Project Architecture

```
├── app/
│   ├── globals.css          # Tailwind CSS v4 @theme, custom scanline, ambient glows, focus rings
│   ├── layout.tsx           # Fonts, SEO metadata, JSON-LD Person schema, SmoothScroll, Navbar, Footer
│   ├── opengraph-image.tsx  # Dynamic 1200x630 Open Graph preview with next/og
│   ├── page.tsx             # Main page: Hero, /projects, /expertise, /education, ClosingCTA
│   ├── robots.ts            # Crawler indexation directives
│   └── sitemap.ts           # Dynamic sitemap with priorities
├── components/
│   ├── Hero.tsx             # Hero with headline, blinking cursor, tag pills, CTAs
│   ├── Hero3D/
│   │   ├── Hero3DScene.tsx     # R3F Canvas: rotating wireframe cube, tilted code window, mouse parallax
│   │   ├── Hero3DFallback.tsx  # High-performance CSS/SVG terminal fallback for mobile & low-power
│   │   └── Hero3DWrapper.tsx   # Dynamic import (ssr: false), viewport detection & 3D/2D switcher
│   ├── TiltCard.tsx         # 3D cursor-driven tilt cards for /projects (rotateX/Y, spotlight, stack chips)
│   ├── ExpertiseRow.tsx     # Numbered 01-04 rows with thin dividers, details, and skill chips
│   ├── EducationSection.tsx # EPITA Paris MSc degree record with verified modules & coordinates
│   ├── ClosingCTA.tsx       # Dashed lime border block, send_message() mailto, copy_email utility
│   ├── Navbar.tsx           # Sticky blurred navbar with ~/dhanasri logo, status badge, mobile drawer
│   ├── Section.tsx          # Reusable counted section wrapper (/projects, /expertise, /education)
│   ├── SmoothScroll.tsx     # Lenis smooth scroll container respecting prefers-reduced-motion
│   ├── Footer.tsx           # Copyright, stack credits, return_to_top()
│   └── Icons.tsx            # Clean SVGs for GitHub and LinkedIn
├── data/
│   └── portfolio.ts         # ⭐ SINGLE SOURCE OF TRUTH: All personal info, projects, skills, and links
└── lib/
    └── utils.ts             # Tailwind merge & clsx helper
```

---

## 🎨 Single Source of Truth: How to Edit `/data/portfolio.ts`

ALL content is isolated in `data/portfolio.ts`. To customize any aspect of the portfolio, edit that file:

```typescript
// data/portfolio.ts
export const portfolioData = {
  personal: {
    name: "Dhana Sri Rongali",
    title: "Software Engineer",
    headline: "Bold code, better systems",
    // Update your bio, location, and tag pills
  },
  social: {
    email: "contact@dhanasri.dev",
    github: "https://github.com/dhanasri",
    linkedin: "https://linkedin.com/in/dhanasri",
  },
  projects: [
    {
      id: "project-01",
      number: "01",
      title: "Your Project Name",
      summary: "One-line summary of problem, role, and outcome.",
      problem: "Challenge solved",
      role: "Your role (e.g. Lead Full-Stack)",
      result: "Measurable impact",
      stack: ["Next.js", "TypeScript", "AWS"],
      githubUrl: "https://github.com/...",
      liveUrl: "https://...",
      status: "completed",
    },
    // ...
  ],
  education: [
    // EPITA Paris details
  ],
  expertise: [
    // 01-04 rows and skill chips
  ],
};
```

---

## 📋 Checklist of Placeholders to Fill In

Before public promotion, replace the `[PLACEHOLDER]` values marked in `data/portfolio.ts`:

- [ ] **Email Address**: Replace `[PLACEHOLDER_EMAIL: contact@dhanasri.dev]` with your verified email address.
- [ ] **GitHub Profile**: Replace `https://github.com/[PLACEHOLDER_GITHUB_USERNAME]` with your actual GitHub username.
- [ ] **LinkedIn Profile**: Replace `https://linkedin.com/in/[PLACEHOLDER_LINKEDIN_USERNAME]` with your LinkedIn handle.
- [ ] **Twitter / X (Optional)**: Replace `https://x.com/[PLACEHOLDER_TWITTER_USERNAME]` or remove if not desired.
- [ ] **Project 01**: Replace `[PLACEHOLDER: Cloud Microservices Platform]` with your real project name, summary, problem, role, result, and repository URL.
- [ ] **Project 02**: Replace `[PLACEHOLDER: Enterprise Analytics Dashboard]` with your real project details.
- [ ] **Project 03**: Replace `[PLACEHOLDER: Automated CI/CD Cloud Pipeline]` with your real project details.
- [ ] **Project 04**: Replace `[PLACEHOLDER: High-Throughput REST & GraphQL Gateway]` with your real project details.

---

## 🌐 Deploying to Vercel (Auto-deploy on Git Push)

### Method 1: GitHub Push & Vercel Auto-Deploy (Recommended)

1. **Create a new GitHub repository**:

   ```bash
   # Create repository on GitHub (via web or gh CLI)
   git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/dhanasri-portfolio.git
   git branch -M main
   git push -u origin main
   ```

2. **Import to Vercel**:
   - Go to [vercel.com/new](https://vercel.com/new).
   - Select your GitHub repository `dhanasri-portfolio`.
   - Framework Preset: **Next.js** (automatically detected).
   - Root Directory: `./`.
   - Build Command: `pnpm build` (automatically detected).
   - Output Directory: `.next` (default).
   - Click **Deploy**.

Every commit pushed to the `main` branch will trigger an automated build and zero-downtime deployment.

### Method 2: Deploying via Vercel CLI

```bash
# Login to Vercel
vercel login

# Link and deploy to production
vercel --prod
```

---

## 🔗 Adding a Custom Domain (e.g. `dhanasri.dev`)

1. Open your project on the [Vercel Dashboard](https://vercel.com/dashboard).
2. Navigate to **Settings > Domains**.
3. Enter your domain (e.g., `dhanasri.dev` or `www.dhanasri.dev`) and click **Add**.
4. Configure the DNS records at your domain registrar:
   - **Apex domain (`dhanasri.dev`)**:
     - Type: `A`
     - Name: `@`
     - Value: `76.76.21.21`
   - **Subdomain (`www.dhanasri.dev`)**:
     - Type: `CNAME`
     - Name: `www`
     - Value: `cname.vercel-dns.com`
5. Vercel automatically generates and provisions free, auto-renewing SSL/TLS certificates.

---

## ♿ Accessibility & Performance Guarantees

- **Lighthouse Score Target**: 90+ on mobile.
- **Dynamic 3D Lazy Loading**: The Three.js WebGL canvas is dynamically imported with `{ ssr: false }`, ensuring zero layout shift (CLS: 0). On mobile viewports (< 768px), low-power devices, or when motion is reduced, the page automatically serves a static CSS/SVG terminal fallback.
- **Prefers Reduced Motion**: Automatically disables 3D rotations, Lenis smooth scrolling, and cursor tilt when `prefers-reduced-motion: reduce` is detected.
- **Contrast & Semantic HTML**: All text elements meet or exceed WCAG AA (4.5:1) contrast against the `#05060A` background.
- **Keyboard Navigation**: Dedicated skip-to-content link, visible neon lime `:focus-visible` outlines, and ARIA attributes for all interactive elements.
