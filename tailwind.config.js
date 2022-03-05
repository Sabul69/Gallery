module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: "#FFFFFF",
      yellow: "#F0A500",
      light_blue: "#334756",
      main_blue: "#082032",
      black: "#000000",
      white_bg: "#F2F2F2",
      pink: "#ff416c",
      red: "#ff416c",
      color1: "#27296D",
      color2: "#5E63B6",
      color3: "#A393EB",
      color4: "#F5C7F7",
      color5:"#000000",
      color6:"#ffffff",
      color7:"#A6AAAD"
    },
    fontFamily:{
      'play':'Playfair Display',
      'Raleway':'Raleway'
    },
    screens: {
      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px"
      // => @media (min-width: 1280px) { ... }
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
};
