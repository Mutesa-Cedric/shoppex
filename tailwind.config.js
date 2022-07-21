/***/
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        quicksand: 'Quicksand, sans-serif',
      },
      colors: {
        'primary': '#F9A109',
        "secondary": "#FFF0DE"
      },
      screens: {
        '3xl': '2000px'
      }
    }
  },
  plugins: [],
}
