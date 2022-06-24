/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        "amazon-orange":'#FF9900',
        "amazon-nav-bg":"#232F3E"
      }
    },
  },
  plugins: [ require('tailwind-scrollbar-hide')],
}
