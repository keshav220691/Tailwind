/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
          'primary':"#464af3"
      },
      fontFamily:
      {
        'display':["popins" , "inter", "sans-sarif"],
        'body':["inter" , "sans-sarif"]
      }
    },
  },
  plugins: [],
}

