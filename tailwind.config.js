/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('images/gradient_background.png')",
      },
      gridTemplateRows: {
        "hero-rows": "2.5rem auto 2.5rem",
        "form-input": "auto auto auto auto",
        "dashboard": "10% 80% 10%"
      }
  },
    colors: {
      primary: "#6e6e6e",
      secondary: "#545454",
      alt: "#bcfd4c",
      white: "#f2f2f2",
      test: "#bababa"
    },
    fontFamily: {
      primary: "'Ubuntu', sans-serif"
    }
  },
  plugins: [],
}

