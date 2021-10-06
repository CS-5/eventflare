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
        "theme-secondary": colors.red[800],
        "theme-neutral": colors.gray[500],
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
  plugins: [require("@tailwindcss/forms")],
};
