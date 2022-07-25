<template>
  <div>
    <p>Check out the bots future features <a href="https://docs.suggestionsbot.gg/coming-soon">here</a></p>
  </div>
</template>

<script>
export default {
  name: 'Features',
  data () {},
  head () {
    return {
      title: 'Features',
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Features'
        },
        {
          hid: 'description',
          name: 'description',
          content: 'Get the most of the Suggestions bot in your server with a powerful feature set.'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Get the most of the Suggestions bot in your server with a powerful feature set.'
        }
      ]
    };
  },
  computed: {
    docButton () {
      if (this.$device.isDesktop) { return 'Click me!'; } else { return 'Tap me!'; }
    }
  }
}
</script>

<style lang="scss" scoped>
.features {
  margin: 10px;
  max-width: 1080px;
  display: block;
  padding-top: 30px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: auto;
}

.featureTitle {
  text-align: center;
  margin-bottom: -75px;
}

.managementHero {
  .title, .subtitle {
    color: #fff !important;
  }
}
</style>
