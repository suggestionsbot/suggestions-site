<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
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
        { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.2.0/css/all.css' },
        { rel: 'stylesheet', href: 'https://cdn.materialdesignicons.com/2.5.94/css/materialdesignicons.min.css' }
        ]
    }
  }
};
</script>

<style lang="scss">
$primary: #dd9323;
$dark: #151515;
$modal-content-width: 1300px !important;
$body-background-color: $dark !important;

@import '~bulma/bulma.sass';

.is-primary {
  background-color: $primary !important;
}

a {
  color: $primary;
}
</style>
