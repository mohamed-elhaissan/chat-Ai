/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],

  theme: {
    extend: {
      fontFamily :{
        'sans' : ['Inter', 'sans-serif'],
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

