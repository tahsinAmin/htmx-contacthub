/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './contacts/templates/**/*.{html,js}',
    './contacts/forsm.py',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}

