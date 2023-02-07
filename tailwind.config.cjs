/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "base-text": "#4D4D4D",
        "gray": "#E5E5E5",
        "gray-text": "#AFAFAF",
        "green": "#03D69D",
        "blue": "#133A6F"
      },
      fontFamily: {
        sans: ["nunito"]
      }
    },
  },
  plugins: [],
}
