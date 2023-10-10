/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ws}", "./public/index.html"],
  theme: {
    extend: {
      backgroundColor: {
        "main-100": "#E7ECEC",
        "main-200": "#DDE4E4",
        "main-300": "#CED9D9",
        "main-400": "#C0D8D8",
        "main-500": "#0E8080",
      },
      flex: {
        4: "4 4 0%",
      },
    },

    screen: {
      1600: "1600px",
    },
    keyframes: {
      "slide-right": {
        "0%": {
          "-webkit-transform": "translateX(500px);",
          transform: "translate(-500px);",
        },
        "100%": {
          "-webkit-transform": "translateX(0);",
          transform: "translate(0)",
        },
      },
      "slider-left": {
        "0%": {
          "-webkit-transform": "translateX(500px);",
          transform: "translate(500px);",
        },
        "100%": {
          "-webkit-transform": "translateX(0);",
          transform: "translate(0)",
        },
      },
      "rotate-center": {
        "0%": {
          "-webkit-transform": "rotate(0);",
          transform: "rotate(0);",
        },
        "100%": {
          "-webkit-transform": "rotate(360deg);",
          transform: "rotate(360deg);",
        },
      },
    },
    animation: {
      "rotate-center": "rotate-center 15s linear infinite ;",
    },
  },
  plugins: [],
};
