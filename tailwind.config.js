/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,js}", 
    "./public/**/*.{html,js}", 
  ],
  theme: {
    theme: {
      colors: {
        'deepBleu': '#ff77e9',
      },
    },
    extend: {},
  },
  plugins: [],
}

