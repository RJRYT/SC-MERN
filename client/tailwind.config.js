const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'custom-dark-purple': '#1d1f2a',
      },
      screens: { 
        'mobile-320': '320px', 
      },
    },
  },
  plugins: [],
});
