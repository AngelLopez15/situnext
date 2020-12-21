module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'guinda': '#691c32',
        'verdef': '#10312b',
        'verdec': '#325b4e',
        'dorado': '#bc955c',
        'rojo': '#9f2241',
        'crema': '#ddc9a3',
        'grisf': '#6f7271',
        'grisc': '#98989a',
        'navsitu': '#0A0023',
      },
      fontFamily: {
        'Montserrat': ['Montserrat']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
