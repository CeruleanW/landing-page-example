const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  variants: {
    extend: {},
  },
  plugins: [],
}

// const defaultTheme = require("tailwindcss/defaultTheme")

// module.exports = {
//   purge: [
//     "./src/pages/**/*.{js,ts,jsx,tsx}",
//     "./src/components/**/*.{js,ts,jsx,tsx}",
//   ],
//   darkMode: false, // or 'media' or 'class'
//   theme: {
//     extend: {
//       fontFamily: {
//         sans: ["Inter", ...defaultTheme.fontFamily.sans],
//       },
//     },
//   },
//   variants: {
//     extend: {},
//   },
//   // eslint-disable-next-line global-require
//   plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
// }