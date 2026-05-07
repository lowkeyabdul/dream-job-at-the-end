/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Lato', 'system-ui', 'sans-serif'],
        accent: ['Dancing Script', 'cursive'],
      },
      colors: {
        cream: {
          50: '#fefdf8',
          100: '#fdf9ee',
          200: '#f9f0d4',
          300: '#f3e4b0',
          400: '#eacc7a',
          500: '#e0b44a',
        },
        warm: {
          50: '#fdf6f0',
          100: '#fae8d8',
          200: '#f4c9a5',
          300: '#eca472',
          400: '#e07840',
          500: '#c85a20',
          600: '#a04018',
          700: '#7a2e10',
        },
        mocha: {
          100: '#e8ddd5',
          200: '#c9b5a5',
          300: '#a88b78',
          400: '#7d5f4a',
          500: '#5c3d28',
          600: '#3e2518',
          700: '#241408',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: { from: { opacity: 0 }, to: { opacity: 1 } },
        slideUp: { from: { opacity: 0, transform: 'translateY(20px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-8px)' } },
      },
      backdropBlur: { xs: '2px' },
    },
  },
  plugins: [],
}
