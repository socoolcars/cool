module.exports = {
  content: [ 
    "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
],
  theme: { 
    extend: {
      fontFamily: {
        mont: ["Montserrat", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        
    },
    backgroundImage: {
      'hero-lg': "url('/public/futuristic.jpg')",
      'hero-sm': "url('/storage/img/sys/sm-hero.jpg')",
  },
  },
  },
  plugins: [],
}
