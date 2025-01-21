/** @type {import('tailwindcss').Config} */
export default {
  content: [ './index.html',
    './src/**/*.{js,ts,jsx,tsx}',],
  theme: {
    extend: {
      colors: {
        primaryGray: "#807144", // Azul Marino
        secondaryYellow: "#FFC107", // Amarillo Mostaza
        accentGreen: "#4CAF50", // Verde Esmeralda
        lightGray: "#F5F5F5", // Gris Claro
        darkGray: "#757575", // Gris Oscuro
        white: "#FFFFFF", // Blanco
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        lato: ["Lato", "sans-serif"], // Agregamos Poppins como fuente personalizada
      },
    },
  },
  plugins: [],
}

