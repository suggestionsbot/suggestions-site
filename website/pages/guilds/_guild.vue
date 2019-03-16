<template>
  <div>
    <div class="container">
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
                <img :src=currentGuild.icon :alt="`${currentGuild.guildName}'s avatar`" v-if="currentUser.avatarCheck">
                <img :src=defaultIcon :alt="`${currentGuild.guildName}'s icon`" v-else>
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">{{ currentGuild.guildName }}</p>
              <p class="subtitle is-6">
                View all your suggestions in {{ currentGuild.guildName }} and manage various aspect of suggestions.
              </p>
            </div>
          </div>
        </div>
      </div>

      <nav class="level">
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Members</p>
            <p class="title">{{ guildData.memberCount.toLocaleString() }}</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Text Channels</p>
            <p class="title">{{ guildData.textChannels }}</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Voice Channels</p>
            <p class="title">{{ guildData.voiceChannels }}</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Category Channels</p>
            <p class="title">{{ guildData.categoryChannels }}</p>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import dotenv from 'dotenv';
dotenv.config();

export default {
  name: 'Guild',
  middleware: 'auth',
  meta() {
    return {
      title: this.guildData.name,
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.guildData.name
        },
        {
          hid: 'description',
          name: 'description',
          content: `Information of the Suggestions bot in ${this.guildData.name}.`
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: `Information of the Suggestions bot in ${this.guildData.name}.`
        }
      ]
    };
  },
  components: {},
  data() {
    return {
      guildData: {},
      defaultIcon: require('../../static/nerd-cave-development.png')
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
    },
    currentGuild() {
      return {
        guildName: this.guildData.name,
        id: this.guildData.id,
        iconCheck: this.guildData.icon,
        icon: `https://cdn.discordapp.com/icons/${this.guildData.id}/${this.guildData.icon}.png`
      };
    }
  },
  async asyncData({ $axios, params }) {
    const url = process.env.NODE_ENV === 'production' ? `suggestionsbot.com` : `http://${process.env.NUXT_HOST}:${process.env.NUXT_PORT}`;

    const { data } = await $axios.get(`${url}/client/guilds/${params.guild}`);
    return { guildData: data };
  }
}
</script>

<style lang="scss" scoped>
$card-background-color: #2e3131;

@import '~bulma/bulma.sass';

.container {
    margin-top: 60px;
    max-width: 750px;
}
</style>
