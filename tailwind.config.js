/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto Slab", "serif"],
      },
      animation: {
        growShrink: "growShrink 3s infinite",
      },
      keyframes: {
        growShrink: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(0.9)" },
          "100%": { transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
});
