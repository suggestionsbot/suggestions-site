<template>
  <div>
    <section class="section">
      <div class="container featureTitle">
        <h1 class="title">Features</h1>
        <h2 class="subtitle">
          Get the most out of the Suggestions bot in your server. The features available are some of the best and are built on
          top and towards the best user experience. Read more today.
        </h2>
      </div>
    </section>
    <section class="section" id="featuresContainer">
      <div class="features">
        <article class="message is-info">
          <div class="message-header">
            <p>💼 Management</p>
          </div>
          <div class="message-body">
            <p>Organization will not be an issue with the Suggestions bot. Interact with suggestions in various ways.</p>

            <p>Need to clarify something to the community? Add a note using the <code>note</code> command. Add as many
              as you need.
              The bot will update the message with the newest note. See all notes of a suggestion via the dashboard*!</p>
            <figure>
              <img :src=images.suggestionNotes alt="Suggestion notes">
              <figcaption class="caption">A suggestion note.</figcaption>
            </figure>

            <p>Implemented a new suggestion? Or did the suggestion not fit the prerequisites or downvoted by the
              community?
              Manage these suggestions with the <code>approve</code> or <code>reject</code> commands so you and the
              community
              know what is and isn't going on.
            </p>
            <figure>
              <img :src=images.suggestionApproved alt="Approved suggestion">
              <figcaption class="caption">An approved suggestion.</figcaption>
            </figure>
            <em style="font-size: 14px;">* The dashboard is still a work in progress.</em>
          </div>
        </article>

        <article class="message">
          <div class="message-header">
            <p>🎨 Customization</p>
          </div>
          <div class="message-body">
            <p>With the Suggestions bot, we try to unpack features that allow you as a server owner or administrator to
              customize features of the bot you and your community's liking. Keep reading for some examples of what
              can be customized.
            </p>

            <p>Want to change what emojis are added to suggestions? Us too, sometimes. Simply use the <code>setvotes</code>
              command to do that!</p>
            <figure>
              <img :src=images.voteEmojis alt="Emoji sets">
              <figcaption class="caption">Various emoji sets to choose from.</figcaption>
            </figure>

            <p>What about the prefix? Or the suggestions channel? Don't worry. We have that covered 👍. You can use
              commands like <code>setprefix</code> and <code>setchannel</code> to do that.

              And there's one more thing... you can add/remove any roles you want to manage suggestions. Check out
              the <code>role</code> command as well as the <code>roles</code> command if you want to view who can
              manage suggestions.
            </p>
            <figure>
              <img :src=images.suggestionRoles alt="Suggestions bot roles and admins">
              <figcaption class="caption">Suggestions bot roles and admins in a guild.</figcaption>
            </figure>
          </div>
        </article>

        <article class="message is-link">
          <div class="message-header">
            <p>📊 Statistics</p>
          </div>
          <div class="message-body">
            <p>Over the past several months, the Suggestions bot has been collecting statistics of different areas of
              the bot.
              And don't worry. Your information is secured! Check out the <a href="/privacy" target="_blank">Privacy
                Policy</a> for more information.

              Information such as how many suggestions have been submitted, approved, rejected,
              etc. is tracked and
              can be viewed in Discord or on the dashboard*.
            </p>

            <figure>
              <img :src=images.suggestionServerStats alt="A guild's server stats">
              <figcaption class="caption">Statistics for a specific guild.</figcaption>
            </figure>

            <p>Want to view your own statistics? Or another member's statistics? That's easy. Just use the <code>suggestions</code>
              command.
              Simply mention another user to view their information.</p>

            <figure>
              <img :src=images.suggestionMemberStats alt="A member's statistics">
              <figcaption class="caption">View a specific member's statistics.</figcaption>
            </figure>

            <p>Learn about more statistics by viewing the <a :href=docs target="_blank">documentation</a>!</p>

            <em style="font-size: 14px;">* The dashboard is still a work in progress.</em>
          </div>
        </article>

        <article class="message is-success">
          <div class="message-header">
            <p>🔖 Documentation</p>
          </div>
          <div class="message-body">
            <p>Want to unlock the full potential of the Suggestions bot and become a power user? It's recommended to
              check out
              the documentation where you can find everything you need regarding the bot's usage. From setting up staff
              roles
              to creating a staff-only suggestions channel. Check it out below!
            </p>
            <a :href=docs target="_blank" class="button is-success">Click me!</a>
          </div>
        </article>

        <article class="message">
          <div class="message-header is-primary">
            <p>❗ Get Started</p>
          </div>
          <div class="message-body">
            <p>What are you waiting for? Like what you see? Start below! Want to see more commands? Check out the documentation!</p>
            <a :href=botInvite class="button is-link">
              <i class="fab fa-discord"></i>
              <p><strong>Add the Suggestions Bot</strong></p>
            </a>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Features',
  head() {
    return {
      title: 'Features',
      meta: [
        {
          name: 'description',
          content: 'Get the moust of the Suggestions bot in your server with a powerful feature set.'
        }
      ]
    };
  },
  data() {
    return {
      botInvite: 'https://discordapp.com/oauth2/authorize?client_id=474051954998509571&scope=bot&permissions=93248',
      docs: 'https://docs.suggestionsbot.com',
      images: {
        voteEmojis: require('../static/homepage-voteEmojis.png'),
        suggestionNotes: require('../static/homepage-suggestionNotes.png'),
        suggestionApproved: require('../static/homepage-approvedSuggestion.png'),
        suggestionRoles: require('../static/homepage-suggestionRoles.png'),
        suggestionServerStats: require('../static/homepage-serverStats.png'),
        suggestionMemberStats: require('../static/homepage-memberStats.png')
      }
    };
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
