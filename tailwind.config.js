/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        acorn: ['"Acorn-Regular"', "sans-serif"],
        acorn_b: ['"Acorn-Bold"', "sans-serif"],
        acorn_sb: ['"Acorn-SemiBold"', "sans-serif"],
        acorn_l: ['"Acorn-Light"', "sans-serif"],
        poppins: ['"Poppins"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
