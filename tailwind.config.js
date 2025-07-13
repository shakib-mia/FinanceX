/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./*.js", "./public/*.html"],
  theme: {
    container: {
      padding: "1rem",
      center: true,
      screens: {
        sm: "100%",
        md: "768px",
        lg: "1000px",
        xl: "1200px",
      },
    },
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
