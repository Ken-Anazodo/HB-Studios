/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./public/*.html"],
  theme: {
    screens: {
      'xs': '321px',
      ...defaultTheme.screens,
    },
    extend: {},
  },
  plugins: [],
}

