<template>
  <div>
    <section class="section">
      <div class="container userCard">
        <article class="message is-warning">
          <div class="message-body">
            The dashboard is still a work in progress! Some features may be disabled. Please join the <n-link to="/contact" target="_blank">Support
              Discord</n-link> for updates.
          </div>
        </article>
        <div class="card">
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-96x96" id="discordAvatar">
                  <img :src=currentUser.avatar :alt="`${currentUser.fullName}'s avatar`" v-if="currentUser.avatarCheck">
                  <img :src=defaultIcon :alt="`${currentUser.fullName}'s icon`" v-else>
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">{{ currentUser.fullName }}</p>
                <p class="subtitle is-6">
                  View suggestions for any of your guilds below or invite the bot to a guild you own or manage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="userGuilds">
        <section class="section partners">
          <div class="container" v-for="(guild, index) in userGuilds" :key="index">
            <div class="card">
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-128x128">
                      <img :src="`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`" :alt="`${guild.name}'s icon`" v-if="guild.icon">
                      <img :src=defaultIcon :alt="`${guild.name}'s icon`" v-else>
                    </figure>
                  </div>
                  <div class="media-content">
                    <p class="title is-4">{{ guild.name }}</p>
                    <n-link to="/invite" alt="Suggetions bot invite link" target="_blank" class="button is-link" v-if="!guild.available">Invite</n-link>
                    <n-link :to="`/guilds/${guild.id}`" class="button is-dark" v-else>View More</n-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  middleware: 'auth',
  head() {
    return {
      title: 'Guilds',
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Profile'
        },
        {
          hid: 'description',
          name: 'description',
          content: 'An overview of your guilds where the Suggestions bot is present.'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'An overview of your guilds where the Suggestions bot is present.'
        }
      ]
    }
  },
  data() {
    return {
      defaultIcon: require('../../static/nerd-cave-development.png'),
      userGuilds: []
    };
  },
  computed: {
    currentUser() {
      const authUser = this.$store.state.authUser;
      return {
        fullName: `${authUser.username}#${authUser.discriminator}`,
        id: authUser.id,
        avatarCheck: authUser.avatar,
        avatar: `https://cdn.discordapp.com/avatars/${authUser.id}/${authUser.avatar}.png`
      };
    }
  },
  async asyncData({ $axios }) {
    const url = process.env.NODE_ENV === 'production' ? `https://suggestionsbot.com` : `http://${process.env.NUXT_HOST}:${process.env.NUXT_PORT}`;

    const { data } = await $axios.get(`${url}/client/guilds`);
    return { userGuilds: data };
  }
}
</script>

<style lang="scss" scoped>
$card-background-color: #2e3131;

@import '~bulma/bulma.sass';

.container {
    max-width: 750px;
}

.userCard {
  a:hover {
    text-decoration: underline;
  }
}
</style>
