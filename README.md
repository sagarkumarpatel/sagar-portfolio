# 🚀 Sagar Kumar Patel - Full Stack Developer Portfolio

[![Live Demo](https://img.shields.io/badge/Live_Demo-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://sagar-patel-portfolio.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-14.1.0-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)

## 🌐 Live Demo

**Visit my portfolio:** [https://sagar-patel-portfolio.vercel.app](https://sagar-patel-portfolio.vercel.app)

---

## 📋 About This Project

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features include dark/light mode, smooth animations, contact form with EmailJS, and CI/CD pipeline with GitHub Actions.

### 🎯 Key Achievements Showcased
- 🏆 Winner - Tech Expo 2026 at IIT Hyderabad
- 🏆 Winner - 5Hrs AIML Hackathon
- 💻 LeetCode Rating: 1928 (Top 11% globally)
- 📊 400+ Problems Solved on LeetCode
- 📈 1430+ Problems Solved on SkillRack

---

## ✨ Features

### 🎨 Frontend
| Feature | Description |
|---------|-------------|
| Responsive Design | Perfect on desktop, tablet, and mobile |
| Dark/Light Mode | Smooth theme switching with persistence |
| Smooth Animations | Framer Motion powered scroll effects |
| Particle Background | Interactive background effect |
| Floating Social Links | Quick access to social profiles |

### 📱 Functionality
| Feature | Description |
|---------|-------------|
| Contact Form | EmailJS integration for messages |
| Project Gallery | Filterable projects by category |
| Achievement Gallery | Visual proof of certifications |
| Skill Progress | Animated circular progress indicators |
| Resume Download | One-click PDF download |

### 🚀 Performance
| Metric | Score |
|--------|-------|
| Lighthouse Performance | 95+ |
| Accessibility | 100 |
| SEO | 100 |

---

## 🛠️ Tech Stack

| Category | Technologies |
|----------|--------------|
| **Framework** | Next.js 14 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS |
| **Animations** | Framer Motion |
| **Icons** | React Icons |
| **Email Service** | EmailJS |
| **Hosting** | Vercel |
| **CI/CD** | GitHub Actions |

---

## 📁 Project Structure
sagar-portfolio/
├── src/
│ ├── app/
│ │ ├── layout.tsx # Root layout
│ │ ├── page.tsx # Home page
│ │ ├── globals.css # Global styles
│ │ ├── loading.tsx # Loading animation
│ │ └── not-found.tsx # 404 page
│ ├── components/
│ │ ├── layout/ # Header, Footer, MobileNav
│ │ ├── sections/ # Hero, About, Skills, Projects
│ │ └── ui/ # Button, Counter, ThemeToggle
│ └── lib/
│ ├── data.ts # Portfolio data
│ └── types.ts # TypeScript interfaces
├── public/ # Static assets
├── .github/workflows/ # CI/CD pipeline
└──配置文件 # Next.js, Tailwind, TypeScript


---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/sagarkumarpatel/sagar-portfolio.git
cd sagar-portfolio

# Install dependencies
npm install

# Run development server
npm run dev
Open http://localhost:3000

Building for Production
npm run build
npm start

📧 Contact Form Setup
To make the contact form work, you need:
1.Create a free account at EmailJS.com
2.Create an Email Service (Gmail, Outlook, etc.)
3.Create an Email Template with these variables:
    {{user_name}}
    {{user_email}}
    {{subject}}
    {{message}}
4.Get your credentials:
    Service ID
    Template ID
    Public Key
    Then add them to your environment variables.

🔧 Deployment
This project uses GitHub Actions for CI/CD. Every push to main branch automatically deploys to Vercel.

Deployment Process:
1.Push code to GitHub
2.GitHub Actions runs build
3.Automatically deploys to Vercel
4.Site goes live in ~2 minutes

Live URL:
https://sagar-patel-portfolio.vercel.app

📊 GitHub Actions CI/CD
The workflow (.github/workflows/deploy.yml):
Runs on every push to main branch
Installs dependencies
Builds the project
Deploys to Vercel

📝 License
This project is open source under the MIT License.

🙏 Acknowledgments
Icons from React Icons
Animations by Framer Motion
Hosting by Vercel

⭐ Star this repository if you find it helpful!
Made with ❤️ by Sagar Kumar Patel