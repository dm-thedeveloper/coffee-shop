/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cofeeColor: "var(--cofee-color)",
        yeloshColor: "var(--yelosh-color)",
        blackColor: "var(--black-color)",
      },
      fontFamily:{
         stylishFont: "var(--stylish-font)",
        commonFont: "var(--commin-font)",
      }
    },
  },
  plugins: [],
};
