module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xsonly: "280px",
        xs: { min: "280px", max: "480px" },
        sm: "360px",
        sm2: { min: "400px", max: "480px" },
        md: "480px",
        lg: "768px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
