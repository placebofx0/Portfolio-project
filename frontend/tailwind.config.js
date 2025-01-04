/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './composables/**/*.{js,vue,ts}',
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#430A5D',
        secondary: '#5F374B',
        tertiary: '#8C6A5D',
        quaternary: '#EEE4B1',
        'dark-primary': '#310845',
        'darker-primary': '#230530',
        grey: '#CCC',
        red: '#A10019',
        'dark-red': '#690010',
      },
      fontSize: {
        xs: '.75rem',
        sm: '.875rem',
        base: '1rem',
        lg: '1.25rem',
        xl: '1.5rem',
        '2xl': '2.25rem'
      }
    },
  },
  plugins: [],
}
