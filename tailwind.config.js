/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#ff9910",
      },
      textColor: {
        primary: "#000",
      },
      borderRadius: {
        small: "8px",
        medium: "12px",
        large: "16px",
      },
      colors: {},
      fontSize: {},
    },
  },
  plugins: [],
};
