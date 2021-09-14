<template>
  <div class="home">
    <section class="section">
      <div class="container" id="homeContainer">
        <img alt="Suggestions bot logo" :src=images.logo>
        <h1 class="title">Suggestions</h1>
        <h2 class="subtitle">
          The only suggestions bot you'll ever need. Simple usage and management of suggestions for public and staff
          use.
        </h2>
        <div class="homePageButtons">
          <n-link to="/invite" class="button is-medium is-link" target="_blank">
            <span class="icon is-medium">
              <i class="fab fa-discord"></i>
            </span>
            <p><strong>Add to Discord</strong></p>
          </n-link>

          <n-link to="/features" class="button is-medium is-info">
            <span class="icon is-medium">
              <i class="fas fa-info-circle"></i>
            </span>
            <p>Learn More</p>
          </n-link>

          <a :href=docCommands class="button is-medium is-success">
            <span class="icon is-medium">
              <i class="fas fa-file-alt"></i>
            </span>
            <p>View Commands</p>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      docCommands: 'https://docs.suggestionsbot.com/docs/commands.html',
      images: {
        logo: require('../static/logo.png')
      }
    };
  },
  head () {
    return {
      title: 'Home',
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Home'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
#homeContainer, #featuresContainer {
    text-align: center;
    margin-top: 60px;
}

.homePageButtons {
  a {
    margin: 3px;
  }
}
</style>
