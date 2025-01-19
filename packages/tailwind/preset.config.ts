import {
  Config
} from 'tailwindcss'

export const config: Partial<Config>  = {
  theme: {
    extend: {
      colors: {
        primary: {
          1: '#000000',
        },
        secondary: {
          blue: '#377DFF',
          green: '#38CB89',
          orange: '#FFAB00',
          red: '#FF5630',
        },
        neutral: {
          '07': '#141718',
          '06': '#232627',
          '05': '#343839',
          '04': '#6C7275',
          '03': '#E8ECEF',
          '02': '#F3F5F7',
          '01': '#FEFEFE',
        }
      },
      fontSize() {
        return {
          hero: '96px',
          h1: '80px',
          h2: '72px',
          h3: '54px',
          h4: '40px',
          h5: '32px',
          h6: '28px',
          h7: '20px',
          'body-26': '26px',
          'body-22': '22px',
          'body-20': '20px',
          'body-18': '18px',
          'body-16': '16px',
          'body-14': '14px',
          'body-12': '12px',
          'button-xl': '26px',
          'button-lg': '22px',
          'button-md': '18px',
          'button-sm': '16px',
          'button-xs': '14px',
        }
      },
    }
  }
}

