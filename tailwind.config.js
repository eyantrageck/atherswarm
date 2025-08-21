/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to left, #b1ece6, #a0d8d3, #8dc6c1, #7bb4b0)',
      },
    },
  },
  plugins: [],
}
