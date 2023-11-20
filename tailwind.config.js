/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./*.js", "./public/*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#CBFC01",
        secondary: "#151515",
        white: "#ffffff",
        light: "#FFFFFFB2",
        dark: {
          DEFAULT: "#212121",
          secondary: "#2E2E2E",
        },
        black: {
          DEFAULT: "#000000",
          secondary: "#000000b2",
        },
      },
    },
  },
  plugins: [],
};
