/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      serif: ["PP Grafier", "sans-serif"],
    },
    fontSize: {
      // Multiple by .9
      xs: [14 * 0.9, 1.6],
      sm: [16 * 0.9, 1.6],
      base: [18 * 0.9, 1.6],
      lg: [20 * 0.9, 1.6],
      xl: [26 * 0.9, 1.6],
      "2xl": [34 * 0.9, 1.3],
      "3xl": [42 * 0.9, 1.3],
      "4xl": [49 * 0.9, 1.3],
    },
    colors: {
      background: "#fffffc",
      foreground: "#1b1b1b",
      neutral: {
        50: "#fafaf7",
        100: "#f7f7f4",
        200: "#eaeae8",
        300: "#dadad8",
        400: "#a8a8a7",
        500: "#787876",
        600: "#585857",
        700: "#454544",
        800: "#2b2b2b",
        900: "#1b1b1b",
      },
      green: {
        DEFAULT: "#4eb677",
        50: "#edfdf3",
        100: "#d6f9e0",
        200: "#b2f2c8",
        300: "#85e5ac",
        400: "#60d08d",
        500: "#4eb677",
        600: "#399460",
        700: "#29774f",
        800: "#1d5e3f",
        900: "#144e35",
      },
      blue: {
        DEFAULT: "#5c6fff",
        50: "#edf2ff",
        100: "#e2eaff",
        200: "#c9d8ff",
        300: "#a6bcff",
        400: "#7e95ff",
        500: "#5c6fff",
        600: "#454def",
        700: "#393ed1",
        800: "#2e34a6",
        900: "#2a3082",
      },
      orange: {
        DEFAULT: "#f4d276",
        50: "#fffbed",
        100: "#fef2ca",
        200: "#fae49a",
        300: "#f4d276",
        400: "#f2c05a",
        500: "#eca145",
        600: "#d27a32",
        700: "#b05622",
        800: "#904119",
        900: "#783413",
      },
    },
  },
  plugins: [],
};
