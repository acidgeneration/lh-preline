/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './node_modules/preline/dist/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3e82af',
        secondary: '#fba02f',
        dark: '#141414', // Or use a Tailwind gray like gray-900
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
} 