/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "stackline-navy-blue": "rgb(5, 40, 73)",
      },
    },
  },
  plugins: [],
};
