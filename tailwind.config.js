/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx}"
  ],
  theme: {
    extend: {
      colors : {
        basic : '#1a4470',
        paragraph : '#94a1b2',
        bg1 : '#16161a',
        headline:'#fffffe',
        card:'#242629',
        cardImg:'#72757e'
      }
    },
    fontFamily: {
      'poppins': ['poppins'],
      'quicksand': ['Quicksand'],
      'exo': ['Exo 2'],
      'roboto': ['Roboto', 'sans-serif'],
      'mono': ["ui-monospace", "SFMono-Regular", 'Menlo', "Monaco", "Consolas", "Liberation Mono", "Courier New", 'monospace'],
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

