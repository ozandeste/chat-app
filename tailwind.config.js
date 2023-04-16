/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "purple-dark-300": "#110e17",
        "purple-dark-200": "#14101f",
        "purple-dark-100": "#1c1625",

        "purple-100": "#1c1334",
        "purple-90": "#8d64e0",
        "purple-80": "#8d63df",
        "purple-60": "#4e38a3",
        "purple-40": "#6545de",
        "purple-20": "#504a64",

        "back-color": "#2b1f38",


        "gray-100": "#828284",
        "gray-200": "#1d1929",
        "blue-100": "#121929",
        "blue-50": "#469ff0",
      }
    },
  },
  plugins: [],
}