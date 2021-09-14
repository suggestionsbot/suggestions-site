<template>
  <div>
    <section class="section guilds">
      <!-- <div class="container" v-for="(partner, index) in guilds" :key="index">
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
      </div> -->
      <ul>
        <li v-for="(partner, index) in partners" :key="index">
          <input type="checkbox" :checked="partner.done" @change="toggle(partner)">
          <span :class="{ done: partner.done }">{{ partner.partner }}</span>
        </li>

        <div class="field">
          <label class="label">Who needs to be added?</label>
          <div class="control">
            <input class="input" type="text" @keyup.enter="addPartner">
          </div>
        </div>
      </ul>
    </section>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  computed: {
    partners () {
      return this.$store.state.partners.partners
    }
  },
  methods: {
    addPartner (e) {
      this.$store.commit('partners/add', e.target.value);
      e.target.value = '';
    },
    ...mapMutations({
      toggle: 'partners/toggle'
    })
  }
}
</script>

<style lang="scss" scoped>
// $card-background-color: #2e3131;

// @import '~bulma/bulma.sass';

.container {
    max-width: 750px;

    a:hover {
        text-decoration: underline;
    }
}

.done {
  text-decoration: line-through;
}
</style>
