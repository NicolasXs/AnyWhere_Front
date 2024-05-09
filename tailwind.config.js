/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customCiano: "#DAFAFC",
        customVermelho: "#FF3E30",
        customAzul: "#176BEF",
        cinzaOpacidadeBaixa: "#636364",
        azulLogo: "#176BEF"
      },
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      }
    },
  },
  fontFamily: {
    'poppins': ['Poppins'],
    'inter': ['Inter'],
  },
  plugins: [],
};
