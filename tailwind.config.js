/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html"
  ],
  theme: {
    extend: {
      colors: {
        bglight: '#EAEFE9',
        textdark: '#2B302C',
        boxgreen: {
          50: '#F0F5F1',
          100: '#E1EFE3',
          200: '#C3DFCA',
          600: '#3A6B47',
          700: '#2C5236'
        },
        rentblue: '#3A86B2',
        rentbluelight: '#E6F0F7',
        siteaccent: '#4A7C59',
        sitetonal: '#D5DFD7',
        panelbg: 'rgba(255, 255, 255, 0.78)'
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      }
    }
  },
  plugins: [],
}
