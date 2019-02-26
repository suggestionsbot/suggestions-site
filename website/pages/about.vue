<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 class="title">About Suggestions</h1>

        <p>The Suggestions bot is created with the purpose of having an easy to use, but powerful tool and user
          experience designed for all. It's meant to be one of the essentials bots one could need in
          their Discord server.</p>

        <p>The bot started out with the idea to solve a simple problem. In a Discord server where a suggestions
          channel existed and people constantly suggesting ideas, there was a problem. Lack of organization
          and managing new ideas. No way to keep track of what is or isn't an idea because anyone could
          submit a message or add reactions. With a solution in mind, the Suggestions bot came to be in early
          August of 2018.</p>

        <p>Whether you are a YouTuber, e-Sports Team Owner, an owner of a game server, or someone who wants to
          have friends suggest new ideas in your new guild, this bot <em>will</em> and is <em>meant</em> to
          meet the needs of your Discord.</p>

        <p>The developer, <strong>anthony#8577</strong>, is constantly updating the Suggestions bot and
          actively communicates with his user base. He's listening to the ideas <em>you</em> have and
          making the bot better all the time. So know you know more about the bot. But if you haven't
          invited it yet, what are you doing? Join us today!</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'About',
  head() {
    return {
      title: 'About',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Read more about the Suggestions bot and how it came to be.'
        }
      ]
    }
  },
  data() {
    return {};
  }
}
</script>

<style lang="scss" scoped>
.container {
    max-width: 750px;

    a:hover {
        text-decoration: underline;
    }
}
</style>
