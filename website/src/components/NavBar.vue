<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <!-- <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"> -->
          <img src="../assets/navbar-logo.png" width="112" height="28">
        </a>

        <a class="navbar-burger burger" @click="showNav = !showNav" :class="{ 'is-active': showNav }">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': showNav }">

        <div class="navbar-start" v-for="(link, index) in mainLinks" :key="index">
          <a :href=link.link class="navbar-item"><strong>{{ link.name }}</strong></a>
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
export default {
    name: 'NavBar',
    data: function() {
        return {
            showNav: false,
            showMore: false,
            mainLinks: [
              { name: 'Home', link: '/' },
              { name: 'About', link: '/about'},
              { name: 'Documentation', link: 'https://docs.suggestionsbot.com'},
              { name: 'Discord', link: 'https://discord.gg/g7wr8xb' },
              { name: 'Patreon', link: 'https://patreon.com/acollierr17'},
              { name: 'Partners', link: '/partners'},
            ],
            moreLinks: [
              { name: 'Terms of Service', link: '/terms' },
              { name: 'Privacy Policy', link: '/privacy' },
              { name: 'Contact', link: '/contact' }
            ]
        };
    },
}
</script>

<style lang="scss">
$primary: #dd9323;

@import '~bulma/bulma.sass';

.navbar-start {
  margin-right: inherit !important;

  a:hover {
    color: $primary !important;
  }
}

.navbar-item, .has-dropdown, .is-hoverable {
  a:hover {
    color: $primary !important;
  }

  .navbar-link::after {
      border-color: $primary !important;
  }

  .navbar-dropdown {
    a:hover {
      color: $primary !important;
    }
  }
}

i {
    padding-right: 5px;
}
</style>
