/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        char1: "url('~/assets/Character/character1.png')",
        char2: "url('~/assets/Character/bgchar2.png')",
      },
    },
  },
  plugins: [],
};
