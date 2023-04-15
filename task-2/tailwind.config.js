/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sulphur': ['Sulphur Point', 'sans-serif'],
      },
      colors: {
        'lavender': '#D4D4FC',
      },
    },
  },
  plugins: [],
}