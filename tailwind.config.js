/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        titillium: ["Titillium Web", "sans-serif"]
      },
      colors: {
        theme: {
          conduit: "#5CB85C"
        }
      },
      spacing: {
        navItem: "0.425rem"
      }
    },
  },
  plugins: [],
}
