<template>
  <div>
    <div class="container notFound">
      <img :src=notFoundText alt="404 Not Found">
      <br />
      <a class="button is-link is-medium" @click="$router.go(-1)">{{ notFoundButton }}</a>
      <br />
      <img :src=notFoundImage alt="404 Not Found">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error404',
  metaInfo () {
    return {
      title: 'Not Found'
    };
  },
  data () {
    return {
      notFoundImage: require('../../static/404Image.png'),
      notFoundText: require('../../static/NotFoundText.png'),
      error: {}
    };
  },
  computed: {
    notFoundButton () {
      if (this.$device.isDesktop) { return 'Click to go back'; } else { return 'Tap to go back'; }
    }
  }
}
</script>

<style lang="scss" scoped>
.notFound, img {
    padding-top: 30px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: 100%;
    width: auto;
    text-align: center;
}
</style>
