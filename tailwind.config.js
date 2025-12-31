/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html',
    './src/**/*.{js,ts,jsx,tsx}',],
  theme: {
    extend: {
      colors: {
        // Identidad de marca - Verde primario
        primary: "#4CAF50",        // Verde principal
        primaryDark: "#388E3C",    // Verde oscuro para hover
        primaryLight: "#81C784",   // Verde claro para fondos

        // Acentos
        accent: "#FFC107",         // Amarillo para CTAs importantes
        accentDark: "#FFA000",     // Amarillo oscuro para hover

        // Neutrales
        gray: {
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#EEEEEE",
          600: "#757575",
          900: "#212121"
        },

        // Estados
        success: "#4CAF50",
        warning: "#FF9800",
        error: "#F44336",

        // Compatibilidad con código existente (deprecated)
        secondaryYellow: "#FFC107",
        accentGreen: "#4CAF50",
        heroText: "#4CAF50",
        lightGray: "#F5F5F5",
        darkGray: "#757575",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
}

