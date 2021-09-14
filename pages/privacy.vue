<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 class="title">Privacy Policy</h1>
        <h2 class="subtitle">Last updated: January 29, 2019</h2>

        <p>This document entails the privacy policy and agreement that you accept when adding the <strong>Suggestions</strong>#2602
          (474051954998509571) bot to a guild, or as a member of such a guild. This also includes the website
          <a href="https://suggestionsbot.com">suggestionsbot.com</a> and all of its subdomains. This document does not
          supersede the
          <a href="https://discordapp.com/developers/docs/legal">Developer Terms of Service</a>.</p>

        <h2 class="subtitle is-4">Disclaimer</h2>

        <p>This document was inspired and forked from a publicly visible privacy policy by jagrosh. For the
          original version, <a href="https://gist.github.com/jagrosh/f1df4441f94ca06274fa78db7cc3c526">click
            here</a>.</p>

        <h2 class="subtitle is-4">Terminology</h2>

        <ul>
          <li><strong>Guild</strong> - Refers to a Discord guild or server.</li>
          <li><strong>Guild Administrator</strong> - Anyone who has the ability to add a bot to a guild or
            configure the bot for the guild. This is usually an administrator or moderator (or someone who
            has the <code>MANAGE_GUILD</code> or <code>ADMINISTRATOR</code> permission)</li>
          <li><strong>Guild Member</strong> - Anyone who is a member of the guild to which the Suggestions
            bot has been added</li>
          <li><strong>Service User</strong> - Anyone who authorizes an application (logs in) for a scope that
            provides additional information</li>
        </ul>

        <h2 class="subtitle is-4">Data Collected By Command</h2>

        <p>The following items are collected and stored when intentionally provided by a user (usually by means
          of a command). This data will not be collected automatically. When providing data in this way, you
          forego any rights to the content of the data provided.</p>

        <p>The following items may be collected and stored when intentionally provided by a user (usually by
          means of a command). This data will not be collected automatically. When providing data in this
          way, you forego any rights to the content of the data provided.</p>

        <ul>
          <li>Guild configurations (staff roles, suggestions channel, etc)</li>
          <li>Suggestions, suggestion notes, suggestion approval/rejection messages, blacklist reasons</li>
          <li>Data for command usage</li>
        </ul>

        <h2 class="subtitle is-4">Data Collected Automatically</h2>

        <p>This data is collected and used to provide statistics or history data. This data is necessary for
          the functionality of the bot.</p>
        <ul>
          <li>Guild Name</li>
          <li>Guild ID</li>
          <li>Guild Owner ID</li>
          <li>Any data needed for standard operation of Discord bots, such as guild permissions (this data is
            stored in cache only while the bot is running)</li>
        </ul>

        <h2 class="subtitle is-4">Data Collected via Authorization</h2>

        <p>This data may be collected when authorizing an application, such as when logging in to a site via
          Discord Oauth2. This data is also outlined on the authorization page.</p>
        <ul>
          <li>Username, Discord ID, Avatar Data</li>
          <li>List of guilds your account is connected to</li>
        </ul>

        <h2 class="subtitle is-4">Data Storage</h2>

        <p>All stored data is kept on protected servers. While storage methods vary, most data is kept within
          password-protected databases such as <a href="https://www.mongodb.com">MongoDB</a>. Please keep in
          mind that even with these protections, no data can ever be 100% secure. All efforts are taken to
          keep your data secure and private, but its absolute security cannot be guaranteed.</p>

        <h2 class="subtitle is-4">Feedback</h2>

        <p>Feedback on the Suggestion's Bot is appreciated. When you submit comments, suggestions, bug reports,
          and any other forms of feedback, you forego any rights to the content, title, intent of the
          provided feedback. Additionally, the feedback may be utilized in any way.</p>

        <h2 class="subtitle is-4">Agreement</h2>

        <p>By adding the Suggestion's Bot to your guild or using its services in any way, you are consenting to
          the policies outlined in this document. In addition, you (the guild administrator) are agreeing to
          inform your members of the <a href="https://discordapp.com/developers/docs/legal">Developer Terms
            of Service</a> and the contents of this document. If you, the guild administrator, do not agree
          to this document, you may remove the bot from the guild. If you, the guild member, do not agree to
          this document, you may leave the guild that contains the bot. If you, the service user, do not
          agree to this document, you may revoke authorization of the application in your "Authorized
          Apps" menu.</p>

        <h2 class="subtitle is-4">Contact Us</h2>

        <p>If you have any questions about the Privacy Policy, please <a :href=contactLink target="_blank">contact
          us</a>.</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Privacy',
  data () {
    return {
      contactLink: 'mailto:hello@suggestions.gg'
    };
  },
  head () {
    return {
      title: 'Privacy Policy',
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Privacy Policy'
        },
        {
          hid: 'description',
          name: 'description',
          content: 'View the Privacy Policy for the Suggestions bot.'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'View the Privacy Policy for the Suggestions bot.'
        }
      ]
    }
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
