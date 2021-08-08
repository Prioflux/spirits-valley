const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        gray: colors.warmGray,
      },
      fontFamily: {
        serif: ['"Crimson Pro"', 'Montserrat', 'serif'],
        handwriting: ['"Satisfy"', '"Crimson Pro"', 'Montserrat', 'serif']
      },
      cursor: {
        'zoom-in': 'zoom-in'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
}
