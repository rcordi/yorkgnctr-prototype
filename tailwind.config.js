// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D24901",
        secondary: "#FF6A00",
        accent: "#FFB347",
        light: "#FFFFFF",
        dark: "#222222",
      },
      keyframes: {
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        slideDown: "slideDown 0.3s ease-out forwards",
      },
    },
  },
  plugins: [],
};
