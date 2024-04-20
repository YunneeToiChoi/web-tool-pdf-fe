/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      'hover-btn-nav':'#242424',
      'primary-home':'#7961f2',
    },
    extend: {
      animation: {
        'spin-slow': 'spin 6s linear infinite',
        'fadeIn':'fadeIn 0.2s ease-in',
        'fadeOut':'fadeOut 0.2s ease-in',
        'fadeInRight':'fadeInRight 0.2s ease-in',
        'fadeOutRight':'fadeOutRight 0.2s ease-in'
      },
      keyframes:
      {
        fadeIn:{
          'from': { opacity: 0},
          'to': {  opacity: 1},
        },

        fadeOut:{
          'from': { opacity: 1},
          'to': {  opacity: 2},
        },

        fadeInRight: { 
          'from': { opacity:0, transform: 'translate3d(100%, 0, 0)'},
          'to': { opacity:1, transform: 'translate3d(0, 0, 0)'},
        },
        fadeOutRight: { 
          'from':{opacity:1},
          'to': {opacity:0, transform: 'translate3d(100%, 0, 0)'},
        },
      }
    },
  },
  plugins: [],
}



