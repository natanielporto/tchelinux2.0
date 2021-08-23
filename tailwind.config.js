const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./components/**/*.tsx', './pages/**/*.tsx', './public/**/*.html'],
  theme: {
    extend: {
      colors: {
        'tche-red': '#FF0000',
        'tche-less-red': '#D30447',
        'tche-dark-gray': '#4D4D4D',
      },
      fontFamily: {
        lemon: ["'lemon'", ...defaultTheme.fontFamily.sans],
        poppins: ["'poppins'", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        live: '3.5rem',
      },
      inset: {
        liveIconRight: '11.5rem',
        liveIconTop: '-1.95rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
