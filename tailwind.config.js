/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        awiapurple: "#7300e0",
        offwhite: "#ebeaf4",
        bgleft: "#e3e8e9",
        bgright: "#fcf6f1",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
