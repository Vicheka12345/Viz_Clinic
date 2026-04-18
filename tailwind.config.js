/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      hanuman: ["Hanuman", "serif"],
      khmer: ["Poppins", "Hanuman", "sans-serif"],
    },
    },
  },
  plugins: [],
}
