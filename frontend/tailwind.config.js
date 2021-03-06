module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "logo-header": "#005590",
        primary: "#005fa0",
        dark: "#004373",
      },
    },
    minWidth: {
      0: "0",
      "1/6": "15%",
      "1/4": "25%",
      "1/2": "50%",
      "2/3": "66%",
      "3/4": "75%",
      full: "100%",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
