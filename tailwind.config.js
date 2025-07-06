/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    screens: {
      mobile: '320px',
      tablet: '640px',
      desktop: '1200px',
    },
    extend: {
      //  додаткові кастомні стилі туть писать
    },
  },
  plugins: [],
};
