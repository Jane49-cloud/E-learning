/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FFA500", // Orange
          light: "#FFC04D", // Light Orange
          dark: "#FF8000", // Dark Orange
        },
        secondary: {
          DEFAULT: "#FF4500", // Secondary Orange
          light: "#FF6D33", // Light Secondary Orange
          dark: "#E63900", // Dark Secondary Orange
        },
        gray: {
          // Shades of gray here...
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
