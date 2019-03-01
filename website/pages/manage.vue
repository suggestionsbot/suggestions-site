<template>
  <div>
    <section class="section">
      <div class="container">
        <article class="message is-warning">
          <div class="message-body">
            The dashboard is still a work in progress! Some features may be disabled. Please join the <a :href=supportDiscord>Support
              Discord</a> for updates.
          </div>
        </article>
        <div class="card">
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-96x96" id="discordAvatar">
                  <img :src=currentUser.avatar :alt="`${currentUser.fullName}'s avatar`">
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">{{ currentUser.fullName }}</p>
                <p class="subtitle is-6">Current Guilds: {{ currentUser.guilds.length }}</p>
              </div>
            </div>
          </div>
        </div>
        <div id="userGuilds"></div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Manage',
  middleware: 'auth',
  head() {
    return {
      title: 'Manage',
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Manage'
        },
        {
          hid: 'description',
          name: 'description',
          content: 'Manage various aspects of the Suggestions bot in your guild.'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Manage various aspects of the Suggestions bot in your guild.'
        }
      ]
    }
  },
  data() {
    return {
      authUser: this.$store.state.authUser,
      supportDiscord: 'https://discord.gg/g7wr8xb'
    };
  },
  computed: {
    currentUser() {
      return {
        fullName: `${this.authUser.username}#${this.authUser.discriminator}`,
        id: this.authUser.id,
        avatar: `https://cdn.discordapp.com/avatars/${this.authUser.id}/${this.authUser.avatar}.png`,
        guilds: this.authUser.guilds
      };
    }
  }
}
</script>

<style lang="scss" scoped>
$card-background-color: #2e3131;

@import '~bulma/bulma.sass';

.container {
    max-width: 750px;

    a:hover {
        text-decoration: underline;
    }
}
</style>
