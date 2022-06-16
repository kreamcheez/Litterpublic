module.exports = {
  content: ["./pages/*.{html,js}", "./comps/*.{html,js}"],
  theme: {
    extend: {
      maxWidth: {
        '8xl': '88rem'
      },
      fontFamily: {
        minecraft: ["Minecraft"]
      },
      colors: {
        'darkpurp': '#23122E',
        'lightpurp': '#2E163E'
      },
      backgroundColor: {
        'darkpurp': '#23122E',
        'lightpurp': '#2E163E',
        'footerpurp': '#EC5972',
      },
      minWidth: {
        '160': '160px'
      },
      fontSize: {
        'massive': ['20rem', {
          lineHeight: '1'
        }]
      },
      height: {
        '160': '40rem'
      }
    },
  },
  plugins: [],
}
