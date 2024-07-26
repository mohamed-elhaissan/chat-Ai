/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],

  theme: {
    extend: {
      fontFamily :{
        'poppins' : ['Poppins', 'sans-serif'],
        'jakarta' : ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors:{
        'primary' : '#4A25E1',
        'secondary' : '#CACAFF',
        'third':'#7B5AFF',
        'Gray':"#718096",
      }
    },
  },
  plugins: [],
}

