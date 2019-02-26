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
          <a :href=botInvite class="button is-medium is-link">
            <span class="icon is-medium">
              <i class="fab fa-discord"></i>
            </span>
            <p><strong>Add to Discord</strong></p>
          </a>

          <a href="/features" class="button is-medium is-info">
            <span class="icon is-medium">
              <i class="fas fa-info-circle"></i>
            </span>
            <p>Learn More</p>
          </a>

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
  head() {
    return {
      title: 'Home',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'The only suggestions bot you\'ll ever need. Simple usage and management of suggestions for public and staff use.'
        }
      ]
    }
  },
  data() {
    return {
      botInvite: 'https://discordapp.com/oauth2/authorize?client_id=474051954998509571&scope=bot&permissions=93248',
      docCommands: 'https://docs.suggestionsbot.com/docs/commands.html',
      images: {
        logo: require('../static/logo.png')
      }
    };
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
