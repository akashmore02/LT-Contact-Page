/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        assign: "0 6px 6px 25px #0a0af57a",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "3rem",
      },
    },
  },
  plugins: [],
};
