/** @type {import('tailwindcss').Config} */
export default {
  content: ["src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      primary: ["Agbalumo"],
      secondary: ["ABeeZee"],
      custom1: ["quesha"],
    },
    extend: {},
  },
  plugins: [],
};
