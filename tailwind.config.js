const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  darkMode: "media",
  theme: {
    extend: {
      fontFamily: {
        serif: ["Inter", ...defaultTheme.fontFamily.serif],
        "theme-secondary": ["Oswald", "sans-serif"],
      },
      colors: {
        "theme-primary": colors.orange[500],
        "theme-accent": colors.blue[500],
        "theme-gray": colors.gray[700],
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-textshadow")],
};
