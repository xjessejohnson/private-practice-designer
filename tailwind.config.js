/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./dist/**/*.html",
    "./*.html"
  ],
  theme: {
    extend: {
      colors: {
        // Background light grey & text darker gray
        bglight: '#EAEFE9',
        textdark: '#2B302C',
        
        // Private Practice Designer comparison box: light green
        boxgreen: {
          50: '#F0F5F1',
          100: '#E1EFE3',
          200: '#C3DFCA',
          600: '#3A6B47',
          700: '#2C5236'
        },
        
        // Monthly/Annual rent, light blue
        rentblue: '#3A86B2',
        rentbluelight: '#E6F0F7',
        
        // Supporting matching tones for the rest of the site
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
