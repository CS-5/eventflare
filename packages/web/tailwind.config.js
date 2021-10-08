const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  darkMode: "media",
  theme: {
    extend: {
      fontFamily: {
        "theme-primary": ["Oswald", "sans-serif"],
        "theme-secondary": ["Roboto", "sans-serif"],
      },
      colors: {
        "theme-primary": colors.orange[500],
        "theme-accent": colors.blue[500],
        "theme-gray": colors.gray[700],
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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-textshadow")],
};
