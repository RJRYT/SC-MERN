import withMT from "@material-tailwind/react/utils/withMT";

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        titillium: ["Titillium Web", "sans-serif"],
        jost: ["Jost", "serif"],
        mulish: ["mulish", "serif"],
        nano: ["Noto Sans", "serif"],
      },
      colors: {
        primary: "#1d1f2a",
        background: "#d9d9db",
        secondary: "#736a68",
        'custom-dark-purple': '#1d1f2a',
          "dark-purple": "#1d1f2a",
        "gray-bg":"#d9d9db",
        "nav-white":"#ffffff",
        "background-color":"#d9d9db",
        "card-color":"#137518",
        "cross-color":"#b3b3b3",
        "side-color":"#c1bbec",
        "btn-color":"#736a68"

        
      },
        boxShadow: {
        'custom-dark': '0 4px 8px rgba(0, 0, 0, 0.5)',
      },
      screens: { 
        'mobile-320': '320px', 
         'sm-only': { 'max': '639px' },
      },
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
