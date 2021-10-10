const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  darkMode: "media",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      ...colors,
    },
    extend: {
      fontFamily: {
        "theme-primary": ["Inter", "sans-serif"],
        "theme-secondary": ["Oswald", "sans-serif"],
      },
      colors: {
        "theme-primary": colors.orange[500],
        "theme-accent": colors.blue[500],
        "theme-gray": colors.gray[700],
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
  variants: {},
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-textshadow")],
};
