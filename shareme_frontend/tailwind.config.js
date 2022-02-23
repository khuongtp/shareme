module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#FBF8F9",
        secondary: "#F0F0F0",
      },
      animation: {
        "slide-in": "slide-in 0.5s ease-out",
      },
      keyframes: {
        "slide-in": {
          from: {
            transform: "translateX(-200px)",
          },
          to: {
            transform: "translateX(0px)",
          },
        },
        "slide-fwd": {
          from: {
            transform: "translateZ(0px)",
          },
          to: {
            transform: "translateZ(160px)",
          },
        },
      },
    },
  },
  plugins: [],
};
