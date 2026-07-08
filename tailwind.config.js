/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        "soft-red": "hsl(7, 99%, 70%)",
        yellow: "hsl(51, 100%, 49%)",
        "graphic-design": "hsl(167, 40%, 24%)",
        "photography": "hsl(198, 62%, 26%)",
        "footer-green": "hsl(167, 34%, 41%)",
        "dark-blue": "hsl(212, 27%, 19%)",
        "very-dark-grayish-blue": "hsl(213, 9%, 39%)",
        "dark-grayish-blue": "hsl(232, 10%, 55%)",
        "grayish-blue": "hsl(210, 4%, 67%)",
      },
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        fraunces: ["Fraunces", "serif"],
      },
    },
  },
  plugins: [],
};