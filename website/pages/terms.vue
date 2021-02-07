<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 class="title ">Terms of Service</h1>
        <h2 class="subtitle">Last updated: February 23, 2019</h2>

        <p>Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the
          <a href="https://suggestionsbot.com">https://suggestionsbot.com</a> website (the "Service") operated by
          Suggestion's Bot ("us", "we", or
          "our").</p>

        <p>Your access to and use of the Service is conditioned on your acceptance of and compliance with these
          Terms. These Terms apply to all visitors, users and others who access or use the Service.</p>

        <p>By accessing or using the Service you agree to be bound by these Terms. If you disagree with any
          part of the terms then you may not access the Service.</p>

        <h2 class="subtitle is-4">Links To Other Web Sites</h2>

        <p>Our Service may contain links to third-party web sites or services that are not owned or controlled
          by Suggestion's Bot.</p>

        <p>Suggestion's Bot has no control over, and assumes no responsibility for, the content, privacy
          policies, or practices of any third party web sites or services. You further acknowledge and agree
          that Suggestion's Bot shall not be responsible or liable, directly or indirectly, for any damage or
          loss caused or alleged to be caused by or in connection with use of or reliance on any such
          content, goods or services available on or through any such web sites or services.</p>

        <p>We strongly advise you to read the terms and conditions and privacy policies of any third-party web
          sites or services that you visit.</p>

        <h2 class="subtitle is-4">Termination</h2>

        <p>We may terminate or suspend access to our Service immediately, without prior notice or liability,
          for any reason whatsoever, including without limitation if you breach the Terms.</p>

        <p>All provisions of the Terms which by their nature should survive termination shall survive
          termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity
          and limitations of liability.</p>

        <p>We may terminate or suspend your account immediately, without prior notice or liability, for any
          reason whatsoever, including without limitation if you breach the Terms.</p>

        <p>Upon termination, your right to use the Service will immediately cease. If you wish to terminate
          your account, you may simply discontinue using the Service.</p>

        <p>All provisions of the Terms which by their nature should survive termination shall survive
          termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity
          and limitations of liability.</p>

        <h2 class="subtitle is-4">Governing Law</h2>

        <p>These Terms shall be governed and construed in accordance with the laws of Ohio, United States,
          without regard to its conflict of law provisions.</p>

        <p>Our failure to enforce any right or provision of these Terms will not be considered a waiver of
          those rights. If any provision of these Terms is held to be invalid or unenforceable by a court,
          the remaining provisions of these Terms will remain in effect. These Terms constitute the entire
          agreement between us regarding our Service, and supersede and replace any prior agreements we might
          have between us regarding the Service.</p>

        <h2 class="subtitle is-4">Accuracy of materials</h2>

        <p>The materials appearing on Suggestion's Bot's website could include technical, typographical, or
          photographic errors. Suggestion's Bot does not warrant that any of the materials on its website
          are accurate, complete or current. Suggestion's Bot may make changes to the materials contained
          on its website at any time without notice. However Suggestion's Bot does not make any commitment
          to update the materials.</p>

        <h2 class="subtitle is-4">Changes</h2>

        <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a
          revision is material we will try to provide at least 30 days notice prior to any new terms taking
          effect. What constitutes a material change will be determined at our sole discretion.</p>

        <p>By continuing to access or use our Service after those revisions become effective, you agree to be
          bound by the revised terms. If you do not agree to the new terms, please stop using the Service.</p>

        <h2 class="subtitle is-4">Contact Us</h2>

        <p>If you have any questions about the Terms of Service, please <a :href=contactLink target="_blank">contact
          us</a>.</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Terms',
  head() {
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
  },
  data() {
    return {
      contactLink: 'mailto:hello@suggestions.gg'
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
