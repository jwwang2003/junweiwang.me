module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
  },
  corePlugins: {},
  plugins: [
    require('tw-elements/dist/plugin'),
  ],
};
