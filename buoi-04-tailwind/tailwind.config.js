/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "**/*.html"
  ],
  theme: {
    container: {
      center: true
    },
    extend: {
      boxShadow: {
        '3xl': '0px 1px 0px #E5E9F2',
      },
      fontSize: {
        h1: ['72px', '80px']
      },
      colors: {
        brand: '#ffce00'
      },
      fontFamily: {
        "body": "'Inter', sans-serif"
      }
    },
  },
  plugins: [],
}
