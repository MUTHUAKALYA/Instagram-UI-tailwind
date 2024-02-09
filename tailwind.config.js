/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html","./light.html","./viewall.html","./lightviewall.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        roboto:['Roboto','sans-serif']
      }
    },
  },
  plugins: [],
}

