/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      
      colors: {
        dark: {
          950: '#0e1012',
          900: '#19181F',
          800: '#1E1B24',
          700: '#23202A',
          600: '#333139',
          500: '#4f4d55',
          400: '#999cb4',
          300: '#C2C6DD',
          200: '#d3d2d4',
          100: '#e9e9ea',
        },
        custom: {
          yellow: '#FBFF4E',
          lime: '#BBDA4E',
          green: '#32651C',
          gray: {
            100: '#F8F9FA',
            200: '#DDE2E5',
            300: '#ACB5BD',
            400: '#495057',
          },

          black: {
            DEFAULT: '#212429',
          },
          orange: {
            100: '#FFA500',
            200: '#FFCB6D',
            300: '#FFE2AD'
          },
        },
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        md: '4rem',
        xl: '8rem',
        '2xl': '10rem',
      },
    },
  },
};
