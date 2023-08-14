/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "black": " var(--black)",
        "black2": "var(--black2)",
        "black3": "var(--black3)",
        "black-lighter": "var(--black-lighter)",
        "black-light": "var(--black-light)",
        "pink": "var(--pink)",
        "orange": "var(--orange)",
        "gradient": "var(--gradient)",
      },
    },
  },
  plugins: [],
};
