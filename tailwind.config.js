/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
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
        'caracas' : "url('/public/img/caracas.jpg')",
        'machu-picchu' : "url('/public/img/machu-picchu.jpg')",
        'mexico-city' : "url('/public/img/mexico-city.jpg')",
        'miami' : "url('/public/img/miami.jpg')",
        'panama-city' : "url('/public/img/panama-city.jpg')",
        'roma' : "url('/public/img/roma.jpg')",
        'salto-angel' : "url('/public/img/salto-angel.jpg')",
        'vegas' : "url('/public/img/vegas.jpg')",
        'venecia' : "url('/public/img/venecia.jpg')",
      }
    },
  },
  plugins: [],
}

