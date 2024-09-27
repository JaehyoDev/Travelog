/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        login: "url('./assets/images/background-night-view.jpg')",
      },
      colors: {
        primary: "var(--primary-color)",
        kakao: "#FEE500",
        link: "#6BB7FF",
      },
    },
  },
  plugins: [],
};
