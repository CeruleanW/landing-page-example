const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  // theme: {
  //   extend: {},
  //   colors: {
  //     white: '#FFFFFF',
  //     black: '#0B0B0B',
  //     purple: '#5E33D1',
  //     yellow: '#FFB33F',
  //     blue: '#1FE1E9',
  //     red: '#D34848',
  //     pink: colors.fuchsia,
  //   },
  //   textColor: {
  //     'primary': '#FFFFFF',
  //     'secondary': '#ffed4a',
  //     'danger': '#e3342f',
  //   }
  // },
  variants: {
    extend: {},
  },
  plugins: [],
}
