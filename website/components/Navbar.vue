<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img :src=navbarLogo width="112" height="28">
        </a>

        <a class="navbar-burger burger" @click="showNav = !showNav" :class="{ 'is-active': showNav }">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': showNav }">
        <div class="navbar-start" v-for="(link, index) in mainLinks" :key="index">
          <a :href=link.link target="_blank" class="navbar-item" v-if="link.external"><strong>{{ link.name }}</strong></a>
          <a :href=link.link class="navbar-item" v-else><strong>{{ link.name }}</strong></a>
        </div>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link"><strong>More</strong></a>
          <div class="navbar-dropdown">
            <div v-for="(link, index) in moreLinks" :key="index">
              <a :href=link.link class="navbar-item">{{ link.name }}</a>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary" disabled>
                <i class="fab fa-discord"></i> Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
// Navbar comment to fix renamed component
export default {
  name: 'NavBar',
  data: function () {
    return {
      showNav: false,
      navbarLogo: require('../static/navbar-logo.png'),
      mainLinks: [
        {
          name: 'Home',
          link: '/'
        },
        {
          name: 'About',
          link: '/about'
        },
        {
          name: 'Documentation',
          link: 'https://docs.suggestionsbot.com',
          external: true
        },
        {
          name: 'Discord',
          link: 'https://discord.gg/g7wr8xb',
          external: true
        },
        {
          name: 'Patreon',
          link: 'https://patreon.com/acollierr17',
          external: true
        },
        {
          name: 'Partners',
          link: '/partners'
        }
      ],
      moreLinks: [
        {
          name: 'Terms of Service',
          link: '/terms'
        },
        {
          name: 'Privacy Policy',
          link: '/privacy'
        },
        {
          name: 'Contact',
          link: 'https://discord.gg/g7wr8xb',
          external: true
        }
      ]
    };
  }
}
</script>

<style lang="scss">
$navbar-background-color: $darkergrey !important;
$navbar-item-color: $lightergrey !important;
$navbar-item-hover-background-color: transparent !important;
$navbar-item-hover-color: $primary !important;
$navbar-burger-color: $primary !important;
$navbar-dropdown-background-color: $darkergrey !important;

@import '~bulma/bulma.sass';

.navbar-start {
  margin-right: inherit !important;
}

i {
    padding-right: 5px;
}
</style>
