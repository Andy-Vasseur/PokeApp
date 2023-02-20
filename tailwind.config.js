/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pokered: "#FB1B1B",
        pokeblack: "#000000",
        pokeyellow: "#FFCC00",
        pokeblue: "#0075BE",
        pokebg: "#658DD1",
      },
    },
  },
  plugins: [],
}