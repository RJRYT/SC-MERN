const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-purple": "#1d1f2a",
        "gray-bg":"#d9d9db",
      },
      boxShadow: {
        'custom-dark': '0 4px 8px rgba(0, 0, 0, 0.5)',
      },
    },
    screens: {
      'sm-only': { 'max': '639px' },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.scrollbar-hide': {
          //  Hide scrollbar for Chrome
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          //  Hide scrollbar for IE, Edge and Firefox 
          '-ms-overflow-style': 'none',  // IE and Edge 
          'scrollbar-width': 'none',  // Firefox 
        },
      };

      addUtilities(newUtilities, ['responsive']);
    },
  ],
});
