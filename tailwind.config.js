/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: "#FFFFFF",
          muted: "#F7F5F2",
          subtle: "#EFEBE6",
        },
        ink: {
          DEFAULT: "#141414",
          secondary: "#5A5A5A",
          muted: "#9A9A9A",
        },
        accent: {
          DEFAULT: "#1A2E35",
          light: "#E8EDEF",
          dark: "#0F1C21",
        },
        gold: {
          DEFAULT: "#B8956A",
          light: "#F5F0E8",
          dark: "#96784F",
        },
        border: {
          DEFAULT: "#E5E0DA",
          light: "#F0ECE7",
        },
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
        display: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px 0 rgb(20 20 20 / 0.04), 0 4px 16px -2px rgb(20 20 20 / 0.06)",
        "card-hover":
          "0 8px 32px -4px rgb(20 20 20 / 0.1), 0 2px 8px -2px rgb(20 20 20 / 0.04)",
        nav: "0 1px 0 0 rgb(20 20 20 / 0.06)",
        hero: "0 24px 64px -12px rgb(20 20 20 / 0.12)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out forwards",
        "fade-in": "fadeIn 0.9s ease-out 0.2s forwards",
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
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
