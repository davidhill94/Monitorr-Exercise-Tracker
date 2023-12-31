/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      "ph": "425px",
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1536px",
    },
    extend: {
      backgroundImage: {
        'hero': "url('images/gradient_background.png')",
        "bannerHero": "url('images/banner_one.jpg')",
        "dashboard": "url('images/banner_two.jpg')",
        "create-exercise": "url('images/banner_four.jpg')",
        "add-users": "url('images/banner_three.jpg')",
        "stats-hero": "url('images/background_one.png')"
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
      primary: "#1e1e1e",
      secondary: "#333333",
      alt: "#bcfd4c",
      white: "#f2f2f2",
    },
    fontFamily: {
      primary: "'Ubuntu', sans-serif"
    },
    boxShadow: {
      card: "0px 2px 4px rgba(0, 0, 0, 0.2)"
    }
  },
  plugins: [],
}

