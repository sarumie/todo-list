module.exports = {
  darkMode: 'class',
  content: ["./index.html"],
  theme: {
    screens: {
      'smx': {
        'raw': '(max-height: 639px),(min-width: 100px)'
      }
    },
    extend: {
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