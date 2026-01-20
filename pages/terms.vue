<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 class="title ">Terms of Service</h1>
        <h2 class="subtitle">Last updated: January 20, 2026</h2>

        <p>Welcome to Suggestions! These Terms of Service ("TOS") govern your use of the Suggestions Bot (known on Discord as "Suggestions#2602" with the user ID "474051954998509571") and our websites located at <a href="https://suggestions.gg">https://suggestions.gg</a>, <a href="https://suggestions.bot">https://suggestions.bot</a> and <a href="https://suggestionsbot.com">https://suggestionsbot.com</a> (collectively, the "Service"), which are operated by Oof Software Limited ("we", "us", or "our"). By accessing or using the Service, you agree to be bound by the TOS. If you disagree with any part of the terms, please do not use our Service.</p>

        <h2 class="subtitle is-4">1. Acceptance of Terms</h2>
        <p>By using the Service, you agree to these Terms. If you are using this application on behalf of an organization, you are agreeing to these Terms for that organization and ensuring that your organization will adhere to the TOS.</p>

        <h2 class="subtitle is-4">2. Changes to Terms</h2>
        <p>Oof Software Limited reserve the right to modify or replace the TOS at any time at our sole discretion. Any Changes to the TOS will be communicated through our Discord Server.</p>

        <h2 class="subtitle is-4">3. Use of the Service</h2>

        <h3 class="subtitle is-5">3.1 Content Submission</h3>
        <p>Any content uploaded to Suggestion bot or any of its affiliated services is subject to Discord's Terms of Service and Community Guidelines. Users are solely responsible for the content they submit.</p>

        <h3 class="subtitle is-5">3.2 Intellectual Property</h3>
        <p>The Service and its original content (excluding content provided by users), features, and functionality, including but not limited to the Suggestions Bot name, logo, and other branding elements, are and will remain the exclusive property of Oof Software Limited and its licensors.</p>

        <h2 class="subtitle is-4">4. User Feedback</h2>
        <p>Any feedback, comments, ideas, improvements, or suggestions (collectively, "Feedback") provided by you to us with respect to the Service shall remain the sole and exclusive property of Oof Software Limited. Oof Software Limited shall be free to use, copy, modify, publish, or redistribute Feedback for any purpose and in any way without any credit or compensation.</p>

        <h2 class="subtitle is-4">5. Privacy Policy</h2>
        <p>Use of the Service is governed by the Privacy Policy, which is incorporated into the TOS. Please read our Privacy Policy carefully for information relating to our collection, use, and disclosure of your personal information.</p>

        <h2 class="subtitle is-4">6. Limitation of Liability</h2>
        <p>To the fullest extent permitted by applicable law, Oof Software Limited shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from (a) your access to, use of or inability to access or use the Service; (b) any conduct or content of any third party on the Service.</p>

        <h2 class="subtitle is-4">7. Governing Law</h2>
        <p>These Terms shall be governed and construed in accordance with the laws of New Zealand.</p>

        <h2 class="subtitle is-4">8. Contact Us</h2>
        <p>If you have any questions about the Terms of Service, please contact us.</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Terms',
  data () {
    return {
      contactLink: 'mailto:hello@suggestions.gg?subject=Terms%20of%20Service'
    };
  },
  head () {
    return {
      title: 'Terms of Service',
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Terms of Service'
        },
        {
          hid: 'description',
          name: 'description',
          content: 'View the Terms of Service for the Suggestions bot.'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'View the Terms of Service for the Suggestions bot.'
        }
      ]
    };
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
