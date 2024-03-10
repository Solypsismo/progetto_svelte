/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**'
  ],

  daisyui: {
    themes: ["cupcake", "dark", "cmyk", "lemonade", "cyberpunk", "valentine"],
  },

  plugins: [require("daisyui")],
}

