/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: {
          50: '#f0f5ec',
          100: '#e8f2e1',
          200: '#d4e3cc',
          300: '#AFD991',
          400: '#8cc26b',
          500: '#6BA641',
          600: '#6BA641',
          700: '#5A8C37',
          800: '#48722c',
          900: '#355520',
        },
      },
    },
  },
  plugins: [],
}
