<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
        </a>

        <a class="navbar-burger burger" @click="showNav = !showNav" :class="{ 'is-active': showNav }">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': showNav }">
        
        <div class="navbar-start" v-for="(link, index) in mainLinks" :key="index">
          <a :href=link.link class="navbar-item">{{ link.name }}</a>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a class="button is-light">
                Log in
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
              { name: 'Panel', link: '/' },
              { name: 'Documentation', link: 'https://docs.suggestionsbot.com'},
              { name: 'Discord', link: 'https://discord.gg/g7wr8xb' },
              { name: 'Patreon', link: 'https://patreon.com/acollierr17'},
            ]
        };
    },
}
</script>

<style scoped>

</style>
