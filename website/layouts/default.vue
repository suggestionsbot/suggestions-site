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
      meta: [
        { hid: 'og:site_name', property: 'og:site_name', content: 'Suggestions' },
        { hid: 'og:type', property: 'og:type', content: 'Suggestions' },
        { property: 'og:image', content: require('../static/logo.png') }
      ],
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
