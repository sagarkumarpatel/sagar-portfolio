# 🚀 Sagar Kumar Patel — Full Stack Developer Portfolio

<div align="center">

[![Live Demo](https://img.shields.io/badge/Live_Demo-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://sagar-patel-portfolio.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-14.1.0-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.x-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.x-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)

**🌐 Live Site:** [https://sagar-patel-portfolio.vercel.app](https://sagar-patel-portfolio.vercel.app)

</div>

---

## 📋 About

A modern, premium-quality **personal portfolio website** built with **Next.js 14 App Router** and **TypeScript**. It features a fully responsive dark/light theme system, 3D WebGL skill visualization, Vanta.js animated backgrounds, Framer Motion scroll animations, a working EmailJS contact form, and a fully automated GitHub Actions CI/CD pipeline deploying to Vercel.

---

## 🏆 Key Achievements Showcased

| Achievement | Details |
|---|---|
| 🥇 Tech Expo 2026 | Winner — IIT Hyderabad |
| 🥇 AIML Hackathon | Winner — 5-Hour Sprint |
| 💻 LeetCode Rating | **1928** (Top 11% globally) |
| 📊 LeetCode Problems | **600+** solved |
| 📈 SkillRack Problems | **1430+** solved |
| 🚀 Projects Completed | **8+** full-stack projects |

---

## ✨ Features

### 🎨 Design & UI
- **Premium Dark / Light Mode** — CSS variable–based runtime theme switching with a coral accent (`#FF5733`) and smooth transitions
- **Vanta.js Clouds Animation** — WebGL-powered animated sky background on the About section, with graceful fallback (CDN timeout, WebGL block, runtime error handling)
- **3D Skills Visualization** — Interactive Three.js / React Three Fiber globe in the Skills section
- **Framer Motion Animations** — Scroll-triggered fade/slide animations on every section
- **Custom Cursor** — Stylized cursor component for desktop
- **Floating Social Links** — Quick-access sidebar for GitHub, LinkedIn, Instagram

### 📱 Sections
| Section | Description |
|---|---|
| **Hero** | Animated intro with coral gradient text, CTA buttons, and particle background |
| **About** | Bio, career objective, animated stats counters, Vanta.js cloud background |
| **Skills** | Filterable skill grid + 3D interactive globe |
| **Projects** | Filterable project cards with live & GitHub links, image gallery |
| **Experience** | Timeline-style work experience layout |
| **Education** | Education cards with CGPA and score highlights |
| **Achievements** | Award cards + lightbox-style certificate gallery |
| **Contact** | EmailJS-powered contact form with live status feedback |

### ⚡ Performance & SEO
- **Static Generation** — All pages pre-rendered for maximum speed
- **Optimized Fonts** — Inter, Plus Jakarta Sans, Space Grotesk, Orbitron, Poppins via `next/font`
- **Sitemap** — Auto-generated `/sitemap.xml`
- **Open Graph & Twitter Cards** — Full social media preview metadata
- **Semantic HTML** — Single `<h1>` per page, proper heading hierarchy

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| **Framework** | Next.js 14 (App Router) |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS 3 + Vanilla CSS Variables |
| **Animations** | Framer Motion 12 |
| **3D / WebGL** | Three.js, React Three Fiber, React Three Drei, Vanta.js |
| **Icons** | React Icons 5 |
| **Particles** | tsParticles (Slim) |
| **Email** | EmailJS Browser SDK (`@emailjs/browser`) |
| **Hosting** | Vercel |
| **CI/CD** | GitHub Actions |

---

## 📁 Project Structure

```
sagar-patel-portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions CI/CD (build → Vercel deploy)
├── app/
│   ├── components/
│   │   └── ui/
│   │       ├── AnimatedSection.tsx
│   │       ├── Badge.tsx
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── Counter.tsx     # Animated number counter
│   │       ├── CustomCursor.tsx
│   │       ├── FloatingSocial.tsx
│   │       ├── ParticleBackground.tsx
│   │       └── ThemProvider.tsx  # Dark/Light theme context
│   ├── layouts/
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── MobileNav.tsx
│   │   └── ThemeToggle.tsx
│   ├── lib/
│   │   ├── data.ts             # All portfolio content (single source of truth)
│   │   ├── emailjs.ts          # EmailJS config (reads from env vars)
│   │   └── types.ts            # TypeScript interfaces
│   ├── sections/
│   │   ├── About.tsx           # Vanta.js clouds + bio + stats
│   │   ├── AchievementGallery.tsx
│   │   ├── Achievements.tsx
│   │   ├── Contact.tsx         # EmailJS contact form
│   │   ├── Education.tsx
│   │   ├── Experience.tsx
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   └── Skills3D.tsx        # Three.js interactive globe
│   ├── globals.css             # CSS variable theme system + global styles
│   ├── layout.tsx              # Root layout (fonts, scripts, providers)
│   ├── loading.tsx
│   ├── not-found.tsx
│   ├── page.tsx                # Main page (assembles all sections)
│   ├── providers.tsx           # Wraps app with ThemeProvider
│   └── sitemap.ts
├── public/
│   ├── projects/               # Project screenshot images
│   └── achievements/           # Certificate images
├── tailwind.config.js          # Custom Tailwind theme (CSS variable–based colors)
├── next.config.js
├── tsconfig.json
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18+
- **npm** 9+
- **Git**

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/sagarkumarpatel/sagar-portfolio.git
cd sagar-patel-portfolio

# 2. Install dependencies
npm install

# 3. Set up environment variables (see below)
cp .env.example .env.local   # or create .env.local manually

# 4. Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔐 Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

### Setting up EmailJS

1. Create a free account at [EmailJS.com](https://www.emailjs.com/)
2. Create an **Email Service** (Gmail, Outlook, etc.)
3. Create an **Email Template** using these exact variable names:

```
{{user_name}}    → sender's name
{{user_email}}   → sender's email
{{subject}}      → message subject
{{message}}      → message body
```

4. Copy your **Service ID**, **Template ID**, and **Public Key** into `.env.local`

---

## 🔧 Available Scripts

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Build optimized production bundle
npm start        # Start production server
npm run lint     # Run ESLint
```

---

## 🚢 Deployment (CI/CD)

This project uses **GitHub Actions** for automated deployments to **Vercel**.

### How it works

```
Push to main → GitHub Actions → npm install → npm run build → vercel deploy --prod
```

### GitHub Secrets required

Set these in your repo under **Settings → Secrets and variables → Actions**:

| Secret | Description |
|---|---|
| `VERCEL_TOKEN` | Vercel personal access token |
| `VERCEL_ORG_ID` | Vercel organization/team ID |
| `VERCEL_PROJECT_ID` | Vercel project ID |
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | EmailJS Service ID |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | EmailJS Template ID |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | EmailJS Public Key |

> **Note:** The EmailJS secrets are passed at build time via `--build-env` flags so Vercel bakes them into the static output.

---

## 🎨 Theming System

The app uses a **CSS variable–based dual-theme system** instead of Tailwind's `dark:` prefix:

```css
/* globals.css */
:root {
  --theme-bg: #F8F9FA;        /* Light background */
  --theme-text-main: #111827; /* Dark text */
  --theme-accent: #FF5733;    /* Coral accent */
  /* ... */
}

.dark {
  --theme-bg: #121212;        /* Dark background */
  --theme-text-main: #FFFFFF; /* White text */
  --theme-accent: #FF5733;    /* Same coral accent */
  /* ... */
}
```

Tailwind picks these up via `tailwind.config.js`:
```js
colors: {
  dark: {
    bg: "var(--theme-bg)",
    textMain: "var(--theme-text-main)",
    accent: "var(--theme-accent)",
    // ...
  }
}
```

Theme state is managed by `ThemeProvider` (Context API), which toggles the `.dark` class on `<html>`.

---

## 📝 Customizing Content

All portfolio content lives in a **single file** — [`app/lib/data.ts`](app/lib/data.ts). To update the portfolio:

- **Personal info, social links, resume URL** → `personalInfo`
- **Skills & proficiency levels** → `skills[]`
- **Projects (title, tech stack, images, links)** → `projects[]`
- **Work experience** → `experience[]`
- **Education** → `education[]`
- **Achievements & certificates** → `achievements[]`
- **Coding stats** → `codingStats`

---

## 📄 License

This project is open source under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- [Framer Motion](https://www.framer.com/motion/) — Scroll animations
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) — 3D skills globe
- [Vanta.js](https://www.vantajs.com/) — Animated cloud background
- [EmailJS](https://www.emailjs.com/) — Contact form without a backend
- [React Icons](https://react-icons.github.io/react-icons/) — Icon library
- [Vercel](https://vercel.com/) — Hosting & deployment

---

<div align="center">

⭐ **Star this repository if you find it helpful!**

Made with ❤️ by **[Sagar Kumar Patel](https://github.com/sagarkumarpatel)**

</div>