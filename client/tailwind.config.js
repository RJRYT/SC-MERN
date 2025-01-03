const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        jost: ['Jost', 'serif'],
        mulish: ['mulish', 'serif'],
        nano: ['Noto Sans', 'serif'],
      },
    },
  },
  plugins: [],
});
