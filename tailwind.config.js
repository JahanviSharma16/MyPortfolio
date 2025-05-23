/** @type {import('tailwindcss').Config} */
export default {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customDark: "#171719",
        customBlue: "#194BFD",
        customPurple: "#AD13FB"
      },
      boxShadow: {
        customShadow: "0px 0px 15px #194BFD",
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

