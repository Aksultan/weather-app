module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        'fit-content': 'fit-content'
      },
      width: {
        'fit-content': 'fit-content'
      },
      screens: {
        xs: '425px'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
