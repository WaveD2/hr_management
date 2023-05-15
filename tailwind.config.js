/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        formBoxShadow: " 0px 10px 25px rgba(215, 219, 223, 0.5);",
      },
    },
  },
  plugins: [],
};
