/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sansbold: ["Poppins", "sans-serif"],
      sans: ["Work Sans", "sans-serif"],
    },
    extend: {
      colors: {
        lightgrey: "lightgrey",
        white: "white",
        yellowgreen: "#d4ff38",
        lightblue: "#195dd8",
        darkblue: "#153687",
      },
    },
  },
  plugins: [],
};
