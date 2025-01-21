/** @type {import('tailwindcss').Config} */
export default {
  content: [ './index.html',
    './src/**/*.{js,ts,jsx,tsx}',],
  theme: {
    extend: {
      colors: {
        primaryBlue: "#0D47A1", // Azul Marino
        secondaryYellow: "#FFC107", // Amarillo Mostaza
        accentGreen: "#4CAF50", // Verde Esmeralda
        lightGray: "#F5F5F5", // Gris Claro
        darkGray: "#757575", // Gris Oscuro
        white: "#FFFFFF", // Blanco
      },
    },
  },
  plugins: [],
}

