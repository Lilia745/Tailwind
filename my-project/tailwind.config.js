/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        brandDark:"#0b0b0b",
        brandBlue:"#125795",
      },
      fontFamily:{
        merriweather:["Merriweather","serif"],
        montserrat:["Montserrat","sans-serif"],
      },
      container:{
        center:true,
        padding:{
          DEFAULT:"4px",
          sm:"8px",
          md:"12px",
          lg:"16px",
          xl:"20px",
          "2xl":"24px"
        },
      },
    },
  },
  plugins: [],
}

