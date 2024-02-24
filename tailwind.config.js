// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], // Archivos que Tailwind CSS debe analizar para encontrar clases utilizadas
  darkMode: false, // Habilita el modo oscuro
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'Arial', 'sans-serif'], // Ejemplo de agregar una fuente personalizada
      },
      colors: {
        primary: '#ff6600', // Ejemplo de agregar un color personalizado
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
