module.exports = {
  content: [
    './index.html',
    './src/components/**/*.jsx'
  ],
  theme: {
    screens: {
      'sm': {'max': '639px'},
      'md': {'min': '639px'},
    },   
    extend: {
      colors: {

        'my-color-two' : '#EAF3EF',
        'my-color-three' : '#0D1321',
        'my-color-four' : '#BA1200',
        'my-color-five' : '#FCA311'
        
      }
    },
  },
  plugins: [],
}
