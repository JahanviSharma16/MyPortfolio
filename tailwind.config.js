/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: "#FFFFFF",
          muted: "#FAF7F2",
          subtle: "#F3EDE4",
        },
        ink: {
          DEFAULT: "#1A1816",
          secondary: "#5C5650",
          muted: "#9A948C",
        },
        accent: {
          DEFAULT: "#1A1816",
          light: "#F0EBE3",
          dark: "#0F0E0D",
        },
        highlight: {
          DEFAULT: "#B8945F",
          light: "#F7F0E4",
          dark: "#947648",
        },
        border: {
          DEFAULT: "#E5DDD3",
          light: "#EFE9E1",
        },
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
        display: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px 0 rgb(26 24 22 / 0.03), 0 8px 28px -4px rgb(26 24 22 / 0.07)",
        "card-hover":
          "0 16px 48px -12px rgb(26 24 22 / 0.12), 0 4px 16px -4px rgb(184 148 95 / 0.08)",
        nav: "0 1px 0 0 rgb(26 24 22 / 0.05)",
        hero: "0 28px 72px -16px rgb(26 24 22 / 0.14)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out forwards",
        "fade-in": "fadeIn 0.9s ease-out 0.2s forwards",
        "fade-in-short": "fadeInShort 0.35s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInShort: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
