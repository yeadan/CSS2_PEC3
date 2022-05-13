const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    fontFamily: {
      'georgia': ['Georgia', 'serif'],
    },
    extend: {
      spacing: {
        p15: '15%',
        p2h: '2.5%',
      },
      colors: {
        accent: "#cc5801",
        block: "#f1efe6",
      }
    },
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.presentation': {
          paddingLeft: theme('spacing.p15'),
          paddingRight: theme('spacing.p15'),
          paddingTop: theme('spacing.p2h'),
          paddingBottom: theme('spacing.p2h'),
          marginTop: theme('spacing.0'),
          text: theme('text-justify'),
        },
      })
    })]
}
