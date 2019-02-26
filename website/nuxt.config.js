module.exports = {
  mode: 'universal',
  server: {
    host: '0.0.0.0'
  },
  /*
   ** Headers of the page
   */
  head: {
    title: 'Suggestions',
    titleTemplate: '%s | Suggestions',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: 'suggestions bot, discord suggestions bot, suggestions discord' },
      { hid: 'description', name: 'description', content: 'The only suggestions bot you\'ll ever need. Simple usage and management of suggestions for public and staff use.' },
      { hid: 'og:description', property: 'og:description', content: 'The only suggestions bot you\'ll ever need. Simple usage and management of suggestions for public and staff use.' },
      { name: 'theme-color', content: '#dd9323' },
      { property: 'og:image', content: 'static/logo.png' }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#dd9323'
  },

  /*
   ** Global CSS
   */
  css: [
    '@/assets/scss/styles.scss'
  ],
  styleResources: {
    scss: [
      'assets/scss/_variables.scss'
    ]
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

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
