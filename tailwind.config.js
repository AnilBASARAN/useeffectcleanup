/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust this path as necessary
  ],
  theme: {
    extend: {

        fontFamily: {
          tiny: ["tiny5"]
        }

    },
  },
  plugins: [],
}
