<template>
  <div>
    <Navbar />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default {
  name: 'Default',
  head() {
    return {
      // title: 'Suggestions',
      // titleTemplate: '%s | Suggestions',
      // meta: [
      //   {
      //     name: 'theme-color',
      //     content: '#dd9323'
      //   },
      //   {
      //     property: 'og:image',
      //     content: '/static/logo.png'
      //   }
      // ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://use.fontawesome.com/releases/v5.2.0/css/all.css'
        },
        {
          rel: 'stylesheet',
          href: 'https://cdn.materialdesignicons.com/2.5.94/css/materialdesignicons.min.css'
        }
      ]
    }
  },
  components: {
    Navbar,
    Footer
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/_variables.scss';
@import '@/assets/scss/styles.scss';
</style>
