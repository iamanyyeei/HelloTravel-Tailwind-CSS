/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundColor: theme => ({ 
        ...theme('colors'),
        'primary': '#CC2D4A',
        'secondary': '#8FA206',
        'tertiary': '#61AEC9',
      }),
      textColor: theme => ({ 
        ...theme('colors'),
        'primary': '#CC2D4A',
        'secondary': '#8FA206',
        'tertiary': '#61AEC9',
      }),
      backgroundImage: {
        'caracas' : "url('/docs/img/caracas.jpg')",
        'machu-picchu' : "url('/docs/img/machu-picchu.jpg')",
        'mexico-city' : "url('/docs/img/mexico-city.jpg')",
        'miami' : "url('/docs/img/miami.jpg')",
        'panama-city' : "url('/docs/img/panama-city.jpg')",
        'roma' : "url('/docs/img/roma.jpg')",
        'salto-angel' : "url('/docs/img/salto-angel.jpg')",
        'vegas' : "url('/docs/img/vegas.jpg')",
        'venecia' : "url('/docs/img/venecia.jpg')",

        'estancia1' : "url('/docs/img/estancias/estancia1.jpg')",
        'estancia2' : "url('/docs/img/estancias/estancia2.jpg')",
        'estancia3' : "url('/docs/img/estancias/estancia3.jpg')",
        'estancia4' : "url('/docs/img/estancias/estancia4.jpg')",
      },
    },
  },
  plugins: [],
}
