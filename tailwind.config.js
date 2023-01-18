/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*/*.{html,js}"],
    theme: {
      extend: {
        colors: {
          "textbox-dark": 'rgb(40, 40, 40)'
        }
      },
    },
    variants: {
      extend: {
        transform: ['disabled']
      }
    },
  plugins: []
}

// dev: npx tailwindcss -i ./src/css/styles.css -o ./out/output.css
