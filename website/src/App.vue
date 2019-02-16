<template>
  <div id="app">

    <!-- <NavBar /> -->

    <router-view />

    <!-- <Footer /> -->
   </div>
</template>

<script>
// import NavBar from './components/NavBar.vue';
// import Footer from './components/Footer.vue';

export default {
  name: 'App',
  metaInfo: function() {
    return {
      title: 'Suggestions',
      titleTemplate: '%s / Suggestions',
      meta: [
        { name: 'theme-color', content: '#dd9323' },
        { property: 'og:image', content: '/public/logo.png' }
      ],
      link: [
        // { rel: 'stylesheet', href: 'https://jenil.github.io/bulmaswatch/darkly/bulmaswatch.min.css' },
        { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.2.0/css/all.css' },
        { rel: 'stylesheet', href: 'https://cdn.materialdesignicons.com/2.5.94/css/materialdesignicons.min.css' }
      ]
    }
  },
  components: {
    // NavBar,
    // Footer
  },
};
</script>

<style lang="scss">
$primary: #dd9323;

@import '~bulma/bulma.sass';

.is-primary {
  background-color: $primary !important;
}

a {
  color: $primary;
}

html {
    background-color: #202225 !important;
}
</style>
