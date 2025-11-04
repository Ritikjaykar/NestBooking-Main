/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
    "./app/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7065F0", // main purple
        secondary: "#000929", // dark navy
        accent: "#384046", // neutral dark
        background: "#FFFFFF",
        foreground: "#000929",

        // Shades of purple
        purple50: "#F7F7FD",
        purple100: "#F0EFFB",
        purple200: "#EBE6F9",
        purple300: "#E0DEF7",
        purple400: "#DBD6F5",

        // Greyscale
        gray50: "#F9FAFB",
        gray100: "#F4F4F6",
        gray200: "#E5E6EB",
        gray300: "#D3D5DA",
        gray400: "#9EA3AE",
        gray500: "#6C727F",
        gray600: "#4D5461",
        gray700: "#394150",
        gray800: "#212936",
        gray900: "#161D21",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
