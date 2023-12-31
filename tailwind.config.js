/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { },
  },
  daisyui: {
    themes: ["pastel"],
  },
  plugins: [require("@tailwindcss/typography"),require('@tailwindcss/forms'), require("daisyui")],
}

