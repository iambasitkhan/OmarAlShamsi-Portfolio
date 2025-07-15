// tailwind.config.js
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#ef4444", // Tailwind's red-500
          light: "#f87171", // red-400
          dark: "#b91c1c", // red-700
        },
        desert: "#EDC9AF",
      },
    },
  },
  plugins: [],
};
