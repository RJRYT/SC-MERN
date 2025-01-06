const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'custom-dark-purple': 'RGB(29, 31, 42)', // Replace this with your desired color value
      },
    },
  },
  plugins: [],
});
