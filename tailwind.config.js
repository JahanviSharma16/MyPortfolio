/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: "#111827",
          muted: "#090B10",
          subtle: "#161B22",
        },
        ink: {
          DEFAULT: "#F9FAFB",
          secondary: "#9CA3AF",
          muted: "#6B7280",
        },
        accent: {
          DEFAULT: "#060812",
          light: "#0E121D",
          dark: "#030408",
        },
        highlight: {
          DEFAULT: "#818CF8",
          light: "#1A1F35",
          dark: "#A5B4FC",
        },
        border: {
          DEFAULT: "#1E2538",
          light: "#161D30",
        },
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
        display: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 0 0 1px rgb(255 255 255 / 0.04), 0 4px 24px -4px rgb(0 0 0 / 0.4)",
        "card-hover":
          "0 0 0 1px rgb(129 140 248 / 0.15), 0 8px 32px -8px rgb(0 0 0 / 0.5)",
        nav: "0 1px 0 0 rgb(255 255 255 / 0.05)",
        hero: "0 24px 64px -16px rgb(0 0 0 / 0.6)",
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
