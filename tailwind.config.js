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
      colors: {
        primary: '#313237',
        secondary: '#89939a',
        icons: '#b4bdc3',
        elements: '#e2e6e9',
        hoverAndBg: '#fafbfc',
        green: '#27ae60',
        red: '#eb5757',
      },

      fontFamily: {
        mont: ['Mont', 'sans-serif'],
      },

      fontSize: {
        nav: ['12px', { lineHeight: '11px', letterSpacing: '0.04em' }],
        default: ['14px', { lineHeight: '21px' }],
        small: ['12px', { lineHeight: '1' }],
        price: ['22px', { lineHeight: '1' }],
      },
    },
  },
  plugins: [],
};
