/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkGreen: '#003B44',
        darkGray: '#3D3D3D',
        lightGray: '#EFEFEF',
        lighterGray: '#E3E3E3',
        lightestGray: '#C4C4C4',
        lightestGray1: '#FAFAFA',
        mediumGray: '#B7B7B7',
        gray: '#A3A3A3',
        green: '#059411',
        blue: '#0072D1',
        darkSilver: '#7A7A7A',
        skyBlue: '#00A3FF', 
      },
      boxShadow: {
        'custom': 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
      },
    },
  },
  plugins: [],
}