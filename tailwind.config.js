/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        black:"#000",
        grey:"#5A5959",
        yellow:"#FFEAAE",
        orange:"#F6820C",
        "dark-yellow":"#FCCA3F",
        
      }
    },
  },
  plugins: [],
}