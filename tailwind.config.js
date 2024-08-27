/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        'main' : '#475569',
        'primary' : '#4F46E5',
          'backgroundColor' : '#F8FAFC'
      }
    },
  },
  plugins: [],
}

