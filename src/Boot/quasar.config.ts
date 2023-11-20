
const { configure } = require('quasar/wrappers')

module.exports = configure(function (ctx: { mode: { pwa: any } }) {
  /* configuration options */
  console.log(ctx, 'que es esto'),
  [
    ctx.mode.pwa // we're adding only if working on a PWA
      ? 'roboto-font'
      : null
  ]

  return {
    framework: {
        config: {
          brand: {
            primary: '#1976d2',
            secondary: '#26A69A',
            accent: '#9C27B0',
    
            dark: '#1d1d1d',
            'dark-page': '#121212',
    
            positive: '#21BA45',
            negative: '#C10015',
            info: '#31CCEC',
            warning: '#F2C037'
          }
        }
      },
    supportTS: {
        tsCheckerConfig: {
          eslint: {
            enabled: true,
            files: './src/**/*.{ts,tsx,js,jsx,vue}'
          }
        }
      },
    // ...
  }
})
