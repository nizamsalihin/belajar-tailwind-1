/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter : ['Inter']
      },
      colors: {
        wpu: '#bada55',
        kopi: '#c0ffee',
      },
      minWidth: {
        '1/2': '50%'
      }
      
    },
  },
  plugins: [],
}
