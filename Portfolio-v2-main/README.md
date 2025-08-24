# Shai Batonya — Developer Portfolio

[![Live](https://img.shields.io/badge/Live-shaibatonya.vercel.app-000?labelColor=000)](https://shaibatonya.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-14-000?logo=nextdotjs)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=fff)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-06B6D4?logo=tailwindcss&logoColor=fff)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000?logo=vercel&logoColor=fff)](https://vercel.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-000)](#license)

A premium, performance-focused portfolio showcasing production-grade UX/UI craft, accessible patterns, and real projects.

> **Live demo:** https://shaibatonya.vercel.app

---

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Projects](#projects)
- [Performance & Accessibility](#performance--accessibility)
- [Screenshots](#screenshots)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Roadmap](#roadmap)
- [Contact](#contact)
- [License](#license)

---

## Features
- **Modern design, Vercel/GitHub feel** — clean typography, elegant depth, micro-interactions.
- **Responsive project cards** — equal heights, in-card mini-carousel (16:9), dots/arrows, touch & keyboard support.
- **Smart images** — skeleton + fade-in, `fetchpriority`/`priority` for above-the-fold, zero CLS.
- **Accessibility panel (♿)** — High Contrast, Reduce Motion, Text Scale, Underline Links, Dyslexia-friendly font, Pause background, Strong focus outlines (prefs persisted).
- **Luxury black theme** — animated mesh background with toggle (Black/Gray).
- **Premium scrollbar** — subtle accent + glow, cross-browser (WebKit + Firefox).
- **Keyboard shortcuts** — `g p` → Projects, `g c` → Contact.
- **SEO/OG** — sensible title, description, and share cards.

---

## Tech Stack
- **Framework:** Next.js (TypeScript)
- **Styling:** TailwindCSS + handcrafted CSS tokens
- **State/UI:** Lightweight React components (no heavy UI libs)
- **Build/Deploy:** Vercel (Production / Preview)
- **CI (optional):** GitHub Actions (typecheck, lint, build)

---

## Projects
- **AgentCraft** — production-grade AI chat (Google OAuth2 + JWT, persistent threads, resilient error boundaries).  
  _Stack:_ React, TypeScript, Zustand, Vite, Tailwind, Node/Express, MongoDB, Docker.  
  _Live:_ Render • _Repo:_ GitHub.
- **EstateExplorer** — modern real-estate experience with refined UI and fast search.
- **Shopfinity** — e-commerce flows with micro-interactions and responsive product UI.
- **TextGrindas** — content/AI tooling with elegant primitives.

> Each card includes a crisp gallery, concise summary, tech tags, and CTAs (GitHub / Live).

---

## Performance & Accessibility
- **LCP:** hero/first project image uses `priority` + `fetchpriority="high"` and responsive `sizes`.
- **Rendering:** `content-visibility` + intrinsic sizing for below-the-fold sections.
- **Motion:** GPU-only transforms; snappy durations; respects `prefers-reduced-motion`.
- **A11y panel:** preferences saved to `localStorage` and reflected via `<html data-a11y-*>` + CSS variables.
- **Focus/Targets:** strong focus rings, minimum 44px targets for interactive controls.

---

## Screenshots
> Replace with real captures from your site (or remove this section).

- **Hero + CTA**  
  `public/og-image.png` (add an image and link it here)

- **Projects Grid**  
  `public/og-projects.png` (add an image and link it here)

---

## Getting Started

```bash
# 1) Clone
git clone https://github.com/ShaiBatonya/portfolio.git
cd portfolio

# 2) Install
npm install

# 3) Dev server
npm run dev

# 4) Open
http://localhost:3000
```

Node 18+ recommended.

## Available Scripts

```bash
npm run dev        # start dev server
npm run build      # production build
npm run start      # start production server (Next.js)
npm run lint       # eslint (if configured)
npm run typecheck  # tsc --noEmit (if configured)
```

## Project Structure

```
.
├─ public/                # static assets (og-image, icons, etc.)
├─ src/
│  ├─ components/
│  │  ├─ Hero/
│  │  ├─ Projects/
│  │  ├─ ui/
│  │  │  ├─ Button.tsx
│  │  │  └─ SmartImage.tsx
│  │  └─ AccessibilityButton.tsx
│  ├─ a11y/
│  │  └─ A11yProvider.tsx
│  ├─ hooks/
│  │  ├─ useReveal.ts
│  │  └─ useInViewport.ts
│  ├─ config/
│  │  ├─ links.ts
│  │  └─ images.ts
│  └─ pages|app/          # Next.js routes
├─ .github/workflows/ci.yml  # (optional) CI build/typecheck
└─ README.md
```

## Deployment
- **Vercel:** pushes to `main` automatically trigger Production.
- **Preview deployments** for feature branches (e.g., `feat/ux-refresh`).
- **Custom domain:** point your domain to this Vercel project if desired.

## Roadmap
- [ ] Multi-language (Hebrew/English) with RTL-safe components
- [ ] Blog/Notes with MDX
- [ ] Deeper case-study writeups (metrics, before/after)

## Contact
- **Email:** shai.batonya@gmail.com
- **GitHub:** [@ShaiBatonya](https://github.com/ShaiBatonya)
- **Live:** https://shaibatonya.vercel.app

## License
MIT © Shai Batonya