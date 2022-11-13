

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // сорри за нелепые названия, каждый раз как пытаюсь изменить ключ -сразу все крашется
      //'343':'343px',
      width: {
        pagination: '515px',
        lg: '1430px',
        '1430': '1430px',
        '343':'343px',
        md: '1070px',
        jobMobile: '396px',
        sm: '830px',
        description: '775px',
        descriptionMobile: '620px',
        '500':'430px',
        map: '400px'
      },
      colors: {
        'main': '#3A4562',
        'bgMobile': '#EFF0F5',
        'second': '#878D9D',
        'page': '#70778B',
        'pageActive': '#5876C5',
        'button' : '#a1b1db',
        'buttonYellow' : '#fff8d9',
        'buttonBorder': '#ccd2e2',
        'buttonBorderYellow': '#FFCF00',
        'yellow': '#988B49',
      },

      lineHeight: {
        14: '47px'
      },
      screens: {
        small: '480px',
        mid: '768px',
        large: '1028px',
        xl: '1200px',
        '2xl': '1440px'

      },

      boxShadow: {
        '3xl': '2px 1px 7px rgba(0, 0, 0, 0.08), 0px 2px 1px -1px rgba(0, 0, 0, 0.04), 0px 1px 3px rgba(0, 0, 0, 0.12)'
      }
      
      
    },

  },
  plugins: [],
}