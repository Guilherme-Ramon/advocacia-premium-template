/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/sections/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        garamond: ["Cormorant Garamond", "serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        "primary-dark": "#0A1931",
        "accent-gold": "#C8A97E",
        "light-bg": "#F8F9FA",
      },
    },
  },
  plugins: [],
};
