/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.html"],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        "h1": ["32px", "1.5"]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}