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
    colors: {
      prime1: "#44403c",
      prime2: "#a8a29e",
      second1: "#92400e",
      second2: "#c2410c",
      yellow1: "#fcd34d",
      grey1: "#e5e5e5",
      white: "#ffffff",
      dark: "#000000",
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
