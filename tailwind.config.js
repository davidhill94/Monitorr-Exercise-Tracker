/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('images/gradient_background.png')",
        "bannerHero": "url('images/banner_one.jpg')",
        "dashboard": "url('images/banner_two.jpg')",
        "create-exercise": "url('images/banner_four.jpg')"
      },
      gridTemplateRows: {
        "hero-rows": "2.5rem auto 2.5rem",
        "form-input": "auto auto auto auto",
        "dashboard": "auto auto auto",
        "info": "20% 20% 40% 20%",
        "container": "8rem auto",
        "container-tablet": "6rem auto",
        "statistics:": "auto auto"
      },
      gridTemplateColumns: {
        "statistics": "auto auto",
        "info": "50% 50%",
        "pageHeader": "25% 25% 25% 25%",
        "container": "repeat(12, minmax(0, 1fr))"
      },
      fontSize: {
        "16": "16px"
      }
  },
    colors: {
      primary: "#6e6e6e",
      secondary: "#545454",
      alt: "#bcfd4c",
      white: "#f2f2f2",
      black: "#000",
      test: "#bababa"
    },
    fontFamily: {
      primary: "'Ubuntu', sans-serif"
    }
  },
  plugins: [],
}

