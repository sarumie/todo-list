module.exports = {
  darkMode: "class",
  content: ["index.html"],
  theme: {
    extend: {
      screens: {
        "smx": {
          "raw": "(max-height: 639px),(min-width: 100px)"
        }
      },
      backgroundImage: {
        "background": "url('/src/img/bg.jpg')",
      },
      colors: {
        "base-white": "#BBBBBB",
        "base-black": "#1C1E26",
        "base-gray": "#242731",
        "base-orange": "#DB886F",
        "base-red": "#C84C6B",
        "base-green": "#4ade80",
        "base-yellow": "#deb44a",
      }
    },
    fontFamily: {
      "sans": "JetBrains Mono"
    }
  },
  plugins: [],
}