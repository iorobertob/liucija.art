import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: "#F5EDD8",
        "parchment-dark": "#EAD9BB",
        ink: "#1A1A18",
        "ink-light": "#3A3A36",
        moss: "#4A7C59",
        "moss-light": "#6FA882",
        "moss-dark": "#2D5237",
        terracotta: "#C4623A",
        "terracotta-light": "#D9896A",
        ochre: "#D4A843",
        "ochre-light": "#E8C878",
        forest: "#0D1F14",
        "forest-mid": "#1A3323",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display": ["clamp(2.5rem, 6vw, 5rem)", { lineHeight: "1.1" }],
        "heading": ["clamp(1.8rem, 4vw, 3rem)", { lineHeight: "1.2" }],
        "subheading": ["clamp(1.2rem, 2.5vw, 1.8rem)", { lineHeight: "1.35" }],
        "body": ["clamp(1rem, 1.5vw, 1.125rem)", { lineHeight: "1.8" }],
      },
      spacing: {
        "page": "clamp(1.5rem, 5vw, 5rem)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-in": "slideIn 0.5s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(2rem)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
