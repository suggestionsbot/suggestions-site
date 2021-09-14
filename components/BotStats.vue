<template>
  <div>
    <nav class="level">
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Guilds</p>
          <p class="title">{{ guildCount }}</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Users</p>
          <p class="title">123</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Channel</p>
          <p class="title">456K</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Uptime</p>
          <p class="title">789</p>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'BotStats',
  data () {
    return {
      apiURL: 'https://discordapp.com/api/v6',
      guildCount: ''
    };
  },
  async created () {
    const guilds = await this.$axios.get(`${this.apiURL}/users/@me/guilds`, {
      headers: {
        Authorization: `Bot ${process.env.DISCORD_TOKEN}`
      }
    });

    this.guildCount = guilds.data.length;
  }
}
</script>

<style lang="scss" scoped>

</style>
