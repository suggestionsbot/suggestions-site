<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 class="title">Privacy Policy</h1>
        <h2 class="subtitle">Last updated: January 1, 2026</h2>

        <p>Welcome to Suggestions! This Privacy Policy outlines how we, Suggestions Bot (known on Discord as
          "Suggestions#2602" with the user ID "474051954998509571"), collect, use, share, and protect the information
          about you in connection with our Discord bot and websites located at <a href="https://suggestions.gg">https://suggestions.gg</a>,
          <a href="https://suggestions.bot">https://suggestions.bot</a> and <a href="https://suggestionsbot.com">https://suggestionsbot.com</a>
          (&quot;Service&quot;). By using the Service, you agree to the collection and use of information in accordance
          with this policy.</p>
        <p>
          Our sites and services may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.
        </p>

        <h2 class="subtitle is-4">1. Information We Collect</h2>

        <h3 class="subtitle is-5">1.1 Data Provided by You</h3>
        <ul>
          <li><strong>Discord User ID</strong>: Collected when you interact with the Suggestions Bot.</li>
          <li><strong>Command Execution Data</strong>: We collect the date, time, and your Discord User ID each time you
            execute a command with the Suggestions Bot.
          </li>
          <li><strong>Discord Guild ID and Channel ID</strong>: Collected from the Discord guilds and channels where the
            Suggestions Bot is used.
          </li>
          <li><strong>User-Submitted Content</strong>: Stored content that you submit through user-invoked commands,
            including text and image URLs.
          </li>
        </ul>

        <h3 class="subtitle is-5">1.2 Analytics and Website Data</h3>
        <ul>
          <li><strong>Fathom Analytics</strong>: Aggregate data such as visit frequency and page views is collected for
            website analytics. Personal information like IP addresses is stored securely and in compliance with Fathom
            Analytics&#39; privacy policies.
          </li>
          <li><strong>Website Hosting</strong>: Our website is hosted on CloudFlare, and we adhere to their data protection and privacy policies.
          </li>
          <li><strong>Application Hosting</strong>: Our servers are hosted on Hetzner with data stored in Europe.
          </li>
        </ul>

        <h2 class="subtitle is-4">2. Use of Information</h2>
        <ul>
          <li>Provide, maintain, and improve the Suggestions Bot and website.</li>
          <li>Respond to user requests and provide customer service.</li>
          <li>Analyze and understand Service usage for improvement.</li>
        </ul>

        <h2 class="subtitle is-4">3. Sharing of Information</h2>
        <p>We do not share personal information with third parties, except as required by law.</p>

        <h2 class="subtitle is-4">4. Data Retention and Access</h2>
        <p>Information is retained as long as necessary to provide the Service. Users can request data removal via email
          or our official Discord support server (<a href="https://discord.gg/suggestions">https://discord.gg/suggestions</a>).
        </p>

        <h2 class="subtitle is-4">5. Security</h2>
        <p>We use secured and recommended procedures to protect user data and prevent unauthorized access, disclosure,
          alteration, and destruction.</p>

        <h2 class="subtitle is-4">6. International Data Transfers</h2>
        <p>Data transfers across international borders comply with the policies of services we use, such as Discord and
          Vercel.</p>

        <h2 class="subtitle is-4">7. Changes to This Privacy Policy</h2>
        <p>We may update this policy and will notify users of any changes by posting the new Privacy Policy on this
          page.</p>

        <h2 class="subtitle is-4">8. Contact Us</h2>
        <p>For questions about this Privacy Policy, please <a :href=contactLink target="_blank">contact us</a>.</p>

        <p><em>AI Transparency</em><br>
          This document has been produced partially using AI/GPT software. Please note that it has not been reviewed by
          legal counsel. We recommend consulting with a qualified legal professional for advice specific to your
          situation.</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Privacy',
  data () {
    return {
      contactLink: 'mailto:hello@suggestions.gg?subject=Privacy%20Policy'
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
