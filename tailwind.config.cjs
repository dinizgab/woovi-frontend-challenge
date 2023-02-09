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
        "green-hover": "#10E4AB",
        "green-bg": "#F4FBF9",
        "blue": "#133A6F",
        "blue-hover": "#1E5DB2"
      },
      fontFamily: {
        nunito: ["Nunito"]
      }
    },
  },
  plugins: [],
}
