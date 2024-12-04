/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/pug/**/*.{pug,js}", "./src/js/**/*.{pug,js}"],
  theme: {
      screens: {
          'xxl': {'max': '1980px'},
          'lg': {'max': '1379px'},
          'md': {'max': '979px'},
          'sm': {'max': '639px'},
          'l': {'max': '575px'},
          'xs': {'max': '320px'},
          // 'xl': '1440px',
          // 'lg': '1280px',
          // 'md': '1024px',
          // 'sm': '768px',
      },
      fontFamily: {
          'hn': ['"Helvetica Neue"', 'sans-serif'],
          'ns': ['"Neo Sans Arabic"', 'sans-serif']
      },
      container: {
          center: true,
          padding: {
              DEFAULT: '20px',
              'l': '20px',
              'sm': '20px',
              'md': '20px',
              'lg': '20px',
              'xxl': '20px', 
          },
          screens: {
              'l': '100%',
              'sm': '768px',
              'md': '1024px',
              'lg': '100%',
              'xxl': '1280px',
          }
      },
  
      extend: {
          spacing: {
              "def": '30px'
          },
          lineHeight: {
              "def150": '150%',
              "def140": '140%',
              "def120": '120%',
          },
          colors: {
            ddgreen: '#093324',
            lgreen: '#96C369',
            lgreend9: '#E2EBD9',
            dgreen: '#25926E',
            green5d: '#27A65D',
            green7a: '#32807A',
            dark: '#2D2D2D',
            body: '#3A3A3A',
          },
      }
  },
  plugins: [],
};

