const { lightBlue } = require('@mui/material/colors');

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
      lightBlue:"#57b9ff"
    },
    fontFamily: {
      poppins: "Poppins",
    },
  },
  plugins: [],
};
