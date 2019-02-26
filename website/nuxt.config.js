// const pkg = require('./package')

module.exports = {
  mode: 'universal',
  server: {
    host: '0.0.0.0'
  },
  /*
  ** Headers of the page
  */
  head: {
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#dd9323' },

  /*
  ** Global CSS
  */
  css: [
  ],
  styleResources: {
    scss: [
      'assets/scss/_variables.scss'
    ]
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
    '@nuxtjs/pwa',
    'nuxt-sass-resources-loader',
    '@nuxtjs/style-resources',
    'nuxt-device-detect'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  route: {
    mode: 'history'
  },
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
