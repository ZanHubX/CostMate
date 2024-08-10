/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        default: "#1B2838",
      },
      fontFamily: {
        logo: ["Lexend Peta", "sans-serif"],
        myanmar: ["Padauk", "monospace"],
      },
    },
  },
  plugins: [],
};
