/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'darkBlue': 'rgb(3,37,65)',
      'white': '#ffffff',
      'lightBlue': 'rgb(1,180,228)',
      'lightGreen': 'rgb(30,213,169)',
      'darkRed': '#b91c1c',
      'green': '#bbf7d0',
      'black': '#000000',
      'slate400': '#94a3b8'
    },
    fontFamily:{
      // Array format:
      'sans': ['Helvetica', 'Arial', 'sans-serif'],

      // Comma-delimited format:
      'sans': 'Helvetica, Arial, sans-serif',
    },
    backgroundImage:{
      banner: 'linear-gradient(to right, rgba(3,37,65, 0.8) 0%, rgba(3,37,65, 0) 100%), url("https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/kSNojkWwSZWsYv0Xj1gcq88okzY.jpg")'
    },
    variants:{
      extend:{
        display: ['group-focus']
      },
    },
    extend: {},
  },
  plugins: [],
}
