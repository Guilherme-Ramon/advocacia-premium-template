/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "primary-dark": "var(--color-primary-dark)",
                "accent-gold": "var(--color-accent-gold)",
                "light-bg": "var(--color-light-bg)",
            },
            fontFamily: {
                garamond: ["Cormorant Garamond", "serif"],
                roboto: ["Roboto", "sans-serif"],
            },
        },
    },
    plugins: [],
};
