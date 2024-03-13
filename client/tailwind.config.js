/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**'
  ],

  daisyui: {
    themes: ["dark", "cyberpunk", "aqua", "nord"],
  },

  plugins: [require("daisyui")],
}

