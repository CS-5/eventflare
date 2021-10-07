const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        "theme-primary": ["Merriweather", "serif"],
        "theme-secondary": ["Dancing Script", "cursive"],
      },
      colors: {
        "theme-primary": colors.yellow[500],
        "theme-accent": colors.blue[600],
        "theme-gray": colors.gray[500],
        "theme-white": colors.white,
      },
      backgroundImage: {
        "theme-background": "url('/image/background.jpg')",
      },
      width: {
        "48rem": "48rem",
      },
      borderRadius: {
        "6xl": "3rem",
      },
      dropShadow: {
        "4xl": "--tw-drop-shadow: drop-shadow(0 35px 35px rgba(0, 0, 0, 0.2));",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
