/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": '#068937',
        "dark": '#1B1B1B',
        "light":"#6F6F6F"
      }
    },
  },
  plugins: [],
}

