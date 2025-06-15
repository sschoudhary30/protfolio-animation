const heroui = require("@heroui/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // enable class‑based dark mode
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@heroui/theme/dist/components/toggle.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [heroui], // ← pass the plugin directly
};
