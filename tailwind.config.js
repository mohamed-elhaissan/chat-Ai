/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: '480px',
      md: '640px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        main: "#475569",
        primary: "#4F46E5",
        backgroundColor: "#F8FAFC",
      },
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
