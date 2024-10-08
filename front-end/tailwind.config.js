/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        login: "url('./assets/images/background-night-view.jpg')",
      },
      colors: {
        kakao: "var(--kakao-color)",
        primary: "var(--primary-color)",
        header: "var(--header-color)",
        sidebar: "var(--sidebar-color)",
        background: "var(--background-color)",
        link: "var(--link-color)",
      },
      height: {
        map: "calc(100% - 3rem)",
        sidebar: "calc(100% - 3rem)",
      },
      width: {
        map: "calc(100% - 9rem)",
      },
    },
  },
  plugins: [],
};
