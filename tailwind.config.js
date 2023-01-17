/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: { 950: "#1F273A" },
        gray: { 350: "#84a4b8" },
      },
    },
  },
  plugins: [],
};
