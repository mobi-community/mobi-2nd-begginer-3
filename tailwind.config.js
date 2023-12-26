/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        mint: "#68D6B5",
        dark_mint: "#49e6c1",
        gray100: "#DDDDDD",
        gray200: "#FFFDFD",
        error: "#F26060",
      },
    },
  },
  plugins: [],
};
