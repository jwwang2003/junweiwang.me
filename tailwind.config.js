module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#27C4CB',
        secondary: '#16B7BB',
      },
    },

  },
  corePlugins: {},
  plugins: [
    require('tw-elements/dist/plugin'),
  ],
};
