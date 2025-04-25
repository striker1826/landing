/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",

    "./pages/**/*.{js,ts,jsx,tsx,mdx}",

    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "1024px",
      md: "1440px",
      lg: "1920px",
    },

    extend: {
      colors: {
        black: "#202020",
        purple: "#A054FF",
      },
      fontFamily: {
        pretendard: ["Pretendard-Regular", "sans-serif"],
      },
    },
  },

  plugins: [],
};
