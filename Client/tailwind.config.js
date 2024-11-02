const { lightBlue } = require('@mui/material/colors');
const { light } = require('@mui/material/styles/createPalette');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      main: "#e002a2",
      black: "#212121",
      white: "#ffffff",
      gray: "#808080e2",
      backgroundMain: "#f0f2ff",
      mainText: "#3f53d8",
      textGrey: "#646468",
      headerUnderline: "#d3d3d3",
      lightBlue:"#57b9ff",
      deepViolet:"#6e41c6",
      lightGrey:"#f2f2f2",
    },
    fontFamily: {
      poppins: "Poppins",
    },
  },
  plugins: [],
};
