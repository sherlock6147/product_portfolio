/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '*.{html,js}',
    './accounts/**/*.{html,js}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'comfortaa': ["Comfortaa", "Roboto", 'sans-serif']
      }
    },
  },
  plugins: [],
}
