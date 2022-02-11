module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'prepaid-blue': '#002DBB',
        'prepaid-green':'#00D2A0',
        'prepaid-red' : '#C40D42',
        'w20-blue': '#1B1B5E',
        'w20-red': '#FF032D',
      },
      fontFamily: {
        'Roboto': ['Roboto-Regular'],
        'Roboto-Black': ['Roboto-Black'],
        'Roboto-Medium': ['Roboto-Medium'],
        'Roboto-Thin': ['Roboto-Thin'],
        'Roboto-Bold': ['Roboto-Bold'],
      },
    },
    container: {
      screens: {
         sm: "100%",
         md: "100%",
         lg: "1024px",
         xl: "1280px",
         screens: {
          'tablet': '360px',
          // => @media (min-width: 640px) { ... }
    
          'laptop': '1024px',
          // => @media (min-width: 1024px) { ... }
    
          'desktop': '1280px',
          // => @media (min-width: 1280px) { ... }
        },
      }
    },
  },
  plugins: [],
}
