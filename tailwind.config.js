const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./public/index.html', './src/**/*.js', './src/**/*.svelte'],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        up: 'up 0.1s ease-in-out',
      },
      keyframes: {
        up: {
          '0%': { bottom: '0rem' },
          '100%': { transform: '3rem' },
        }
      },
      transitionProperty: {
        'width': 'width',
        'borderWidth': 'borderWidth',
        'letterSpacing': 'letterSpacing',
      },
      colors: {
        primary: {
          light: colors.yellow[300],
          DEFAULT: colors.yellow[500],
          dark: colors.yellow[600],
        },
        secondary: {
          light: "#2EAADC",
          DEFAULT: "#186A8B",
          dark: "#030D11",
        },
        orange: { ...colors.orange }
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}