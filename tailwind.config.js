const colors = require('tailwindcss/colors');

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
        'primary-stokerie': '#e75c1a',
      },
      fontFamily: {
        sans: ['Montserrat', 'Verdana', 'sans-serif'],
        handwriting: [
          '"Kaisei Opti"',
          'Montserrat',
          'Verdana',
          'sans-serif',
        ],
      },
      cursor: {
        'zoom-in': 'zoom-in',
      },
    },
  },
  variants: {
    extend: {
      borderRadius: ['hover', 'focus'],
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
};
