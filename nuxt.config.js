// @ts-check

require('dotenv').config();

const metaDefaults = {
  description: 'The only suggestions bot you\'ll ever need. Simple usage and management of suggestions for public and staff use.'
}

module.exports = {
  target: 'static',
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
      { hid: 'description', name: 'description', content: metaDefaults.description },
      { hid: 'og:description', property: 'og:description', content: metaDefaults.description },
      { name: 'theme-color', content: '#dd9323' }
    ]
  },
  pwa: {
    icon: {
      fileName: 'logo.png'
    },
    meta: {
      name: 'Suggestions',
      description: metaDefaults.description,
      theme_color: '#dd9323',
      ogHost: process.env.NODE_ENV === 'production' ? 'https://suggestionsbot.com' : 'https://suggestionsdev.ngrok.io',
      twiterCard: 'summary_large_image',
      twitterSite: '@suggestions_bot',
      twitterCreator: '@suggestions_bot'
    },
    manifest: {
      name: 'Suggestions',
      short_name: 'S',
      description: metaDefaults.description,
      lang: 'en',
      backgroundColor: '#636e72',
      useWebManifestExtension: true
    }
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
  plugins: ['~/plugins/fathom.client.js'],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
    '@nuxtjs/pwa',
    'nuxt-sass-resources-loader',
    '@nuxtjs/style-resources',
    'nuxt-device-detect',
    '@nuxtjs/dotenv'
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
    extend (config, ctx) {
      // To address fs dependency issue with dotenv
      config.node = {
        fs: 'empty'
      };

      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }

      // Load Fathom Analytics in production
      if (!ctx.isDev && ctx.isClient) {
        config.plugins.push({ src: '~/plugins/fathom.client.js', ssr: false })
      }
    }
  }
}
