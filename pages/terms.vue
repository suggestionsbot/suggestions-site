<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 class="title ">Terms of Service</h1>
        <h2 class="subtitle">Last updated: December 16, 2023</h2>

        <p>Welcome to Suggestions! These Terms of Service (&quot;Terms&quot;) govern your use of the Suggestions Bot (known on Discord as "Suggestions#2602" with the user ID "474051954998509571") and our website located at <a href="https://suggestions.gg">https://suggestions.gg</a> (collectively, the &quot;Service&quot;), which are operated by Suggestions Bot (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, please do not use our Service.</p>

        <h2 class="subtitle is-4">1. Acceptance of Terms</h2>
        <p>By using the Service, you agree to these Terms. If you are using the Service on behalf of an organization, you are agreeing to these Terms for that organization and promising that you have the authority to bind that organization to these terms.</p>

        <h2 class="subtitle is-4">2. Changes to Terms</h2>
        <p>We reserve the right to modify or replace these Terms at any time at our sole discretion. We will strive to provide at least 30 days&#39; notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>

        <h2 class="subtitle is-4">3. Use of the Service</h2>

        <h3 class="subtitle is-5">3.1 Content Submission</h3>
        <p>Users can upload content through the Suggestions Bot. However, such content is subject to Discord&#39;s Terms of Service and Community Guidelines. Users are solely responsible for the content they submit.</p>

        <h3 class="subtitle is-5">3.2 Intellectual Property</h3>
        <p>The Service and its original content (excluding content provided by users), features, and functionality, including but not limited to the Suggestions Bot name, logo, and other branding elements, are and will remain the exclusive property of Suggestions Bot and its licensors.</p>

        <h2 class="subtitle is-4">4. User Feedback</h2>
        <p>Any feedback, comments, ideas, improvements, or suggestions (collectively, &quot;Feedback&quot;) provided by you to us with respect to the Service shall remain the sole and exclusive property of Suggestions Bot. We shall be free to use, copy, modify, publish, or redistribute the Feedback for any purpose and in any way without any credit or any compensation to you.</p>

        <h2 class="subtitle is-4">5. Privacy Policy</h2>
        <p>Your use of the Service is also governed by our Privacy Policy, which is incorporated by reference into these Terms. Please read our Privacy Policy carefully for information relating to our collection, use, and disclosure of your personal information.</p>

        <h2 class="subtitle is-4">6. Limitation of Liability</h2>
        <p>To the fullest extent permitted by applicable law, Suggestions Bot shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from (a) your access to or use of or inability to access or use the Service; (b) any conduct or content of any third party on the Service.</p>

        <h2 class="subtitle is-4">7. Governing Law</h2>
        <p>These Terms shall be governed and construed in accordance with the laws of the State of Ohio, United States, without regard to its conflict of law provisions.</p>

        <h2 class="subtitle is-4">8. Contact Us</h2>
        <p>If you have any questions about the Terms of Service, please <a :href=contactLink target="_blank">contact
          us</a>.</p>

        <p><em>AI Transparency</em><br>
          This document has been produced partially using AI/GPT software. Please note that it has not been reviewed by legal counsel. We recommend consulting with a qualified legal professional for advice specific to your situation.</p>
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
