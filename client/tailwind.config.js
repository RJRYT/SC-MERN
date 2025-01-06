import withMT from "@material-tailwind/react/utils/withMT";

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        titillium: ["Titillium Web", "sans-serif"],
        jost: ['Jost', 'serif'],
        mulish: ['mulish', 'serif'],
        nano: ['Noto Sans', 'serif'],
      },
    },
  },
  plugins: [],
});
