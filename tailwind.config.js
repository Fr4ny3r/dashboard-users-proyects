// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      screens: {
        'xs': '480px', // Nuevo punto de interrupción
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        'my-custom-breakpoint': {'min': '1280px'}, // Ejemplo de max-width
      }
    }
  },
  plugins: [],
}