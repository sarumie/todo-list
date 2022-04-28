module.exports = {
  darkMode: 'class',
  content: ['index.html'],
  theme: {
    extend: {
      screens: {
        'smx': {
          'raw': '(max-height: 639px),(min-width: 100px)'
        }
      },
      backgroundImage: {
        'background': "url('/src/img/bg.jpg')",
      }
    },
    fontFamily: {
      'sans': 'JetBrains Mono'
    }
  },
  plugins: [],
}