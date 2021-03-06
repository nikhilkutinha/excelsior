const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: colors.indigo,
        secondary: colors.gray,
        danger: colors.red,
        warning: colors.yellow,
        success: colors.green,
        info: colors.blue,
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/aspect-ratio')],
};
