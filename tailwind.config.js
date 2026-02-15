const { safeList } = require("./dist/js/utils/safelist.js");

/** @type {import('tailwindcss').Config} */
module.exports = {
  safelist: process.env.NODE_ENV === "production" ? safeList : [],
  content: ["./components/**/*.{html,js,css}", "./experiments/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [require("./dist/js")],
};
