/** @type {import('tailwindcss').Config} */
module.exports = {
  // CRITICAL: Enable dark mode with class strategy
  darkMode: 'class',  
  
  // 1. Tell Tailwind where to look for your CSS classes
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Include this if you have a src folder
  ],
  
  theme: {
    extend: {
      // 2. Map the shadcn/ui custom variable so "border-border" works
      colors: {
        border: "hsl(var(--border) / <alpha-value>)",
        input: "hsl(var(--input) / <alpha-value>)",
        ring: "hsl(var(--ring) / <alpha-value>)",
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        dark: {
          bg: "var(--theme-bg)",
          card: "var(--theme-card)",
          accent: "var(--theme-accent)",
          accentHover: "var(--theme-accent-hover)",
          textMain: "var(--theme-text-main)",
          textMuted: "var(--theme-text-muted)",
          borderGlow: "var(--theme-border-glow)",
        }
      },
      animation: {
        // Your existing animations (kept exactly as they were)
        'gradient': 'gradient 3s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        
        // NEW: Added for the Hero component background
        'blob': 'blob 7s infinite', 
      },
      keyframes: {
        // Your existing keyframes
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        
        // NEW: Added for the Hero component background
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
      },
    },
  },
  plugins: [],
}