<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 class="title">Partners</h1>

        <p>Check out our partners of the Suggestions bot and Nerd Cave Development!</p>

        <p>Want to become a partner? Join our <a :href=supportDiscord>Support Discord</a> today and speak with
          <strong>anthony#8577</strong> for partnership inquiries.</p>
      </div>
    </section>
    <section class="section partners">
      <div class="container" v-for="(partner, index) in partners" :key="index">
        <div class="card">
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-128x128">
                  <img :src=partner.image :alt=partner.imageAlt>
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">{{ partner.name }}</p>
                <p class="subtitle is-6"><i class="fab fa-discord"></i><a :href=partner.discord>{{ partner.discord }}</a></p>
                <p class="partnerDescription">{{ partner.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Partners',
  head() {
    return {
      title: 'Partners',
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Partners'
        },
        {
          hid: 'description',
          name: 'description',
          content: 'View partners of the Suggestions bot and Nerd Cave Development.'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'View partners of the Suggestions bot and Nerd Cave Development.'
        }
      ]
    }
  },
  data() {
    return {
      supportDiscord: 'https://discord.gg/g7wr8xb',
      newPartner: {
        name: 'Partner',
        discord: 'Discord invite',
        description: 'Information about the partner.',
        image: 'Link to server image.'
      },
      partners: [
        {
          name: 'No Partners 😔',
          discord: 'https://discord.gg/g7wr8xb',
          description: 'Currently, we do not have any partners. But that can change. Read above for more information!',
          image: require('../static/nerd-cave-development.png'),
          imageAlt: 'Nerd Cave Development logo'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
$card-background-color: #2e3131;

@import '~bulma/bulma.sass';

.container {
    max-width: 750px;

    a:hover {
        text-decoration: underline;
    }
}

.section, .partners {
    margin-bottom: -50px;
}

.partnerDescription, .partnerAdded {
    color: $lightergrey !important;
}
</style>
