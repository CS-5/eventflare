module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      cursive: ["Dancing Script", "cursive"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      backgroundImage: {
        main: "url('/image/background.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
