/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%, 20%": { opacity: "0" },
          "25%, 45%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        slideTop: {
          "0%, 20%": { opacity: "0", transform: "translateY(-100%)" },
          "25%, 45%": { opacity: "1", transform: "translateY(0)" },
          "50%, 100%": { opacity: "0" },
        },
        slideLeft: {
          "0%, 45%": { opacity: "0", transform: "translateX(-100%)" },
          "50%, 70%": { opacity: "1", transform: "translateX(0)" },
          "75%, 100%": { opacity: "0" },
        },
        zoomIn: {
          "0%, 70%": { opacity: "0", transform: "scale(0.8)" },
          "75%, 95%": { opacity: "1", transform: "scale(1)" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        fadeIn: "fadeIn 16s infinite",
        slideTop: "slideTop 16s infinite",
        slideLeft: "slideLeft 16s infinite",
        zoomIn: "zoomIn 16s infinite",
      },
    },
  },
  plugins: [],
};
