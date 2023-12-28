/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#10104F",
          secondary: "#00274A",
          accent: "#F86222",
          colors: {
            'blue': '#00274A',
            'blue-dark':'#10104F',
            'orange': '#f86222',
            'orange-light': '#fc783f',
            'gray-dark': '#273444',
            'gray': '#8492a6',
            'gray-light': '#d3dce6',
          },
        },
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          primary: "#10104F",
          secondary: "#00274A",
          accent: "#F86222",
          colors: {
            'blue': '#00274A',
            'blue-dark':'#10104F',
            'orange': '#f86222',
            'orange-light': '#fc783f',
            'gray-dark': '#273444',
            'gray': '#8492a6',
            'gray-light': '#d3dce6',
          },
        },
      }, 
    ]
  },
}