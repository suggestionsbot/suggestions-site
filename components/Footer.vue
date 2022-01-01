<template>
  <div>
    <footer class="footer">
      <div class="content has-text-centered footerLinks">
        <!-- eslint-disable-next-line -->
        <p id="footerLinks" v-html="combinedLinks"></p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      links: [
        {
          name: '© 2022 Anthony Collier',
          url: 'https://acollier.dev',
          external: true
        },
        {
          name: 'Privacy Policy',
          url: '/privacy'
        },
        {
          name: 'Terms of Service',
          url: '/terms'
        },
        {
          name: 'Contact',
          url: '/contact',
          external: true
        }
      ]
    }
  },
  computed: {
    combinedLinks () {
      const links = this.links.map(link => {
        if (link.external) { return `<a href="${link.url}" target="_blank">${link.name}</a>`; } else { return `<a href="${link.url}">${link.name}</a>`; }
      });

      return links.join(' | ');
    }
  }
}
</script>

<style lang="scss">
$primary: #dd9323;

.footer {
    background-color: inherit !important;
}

.footerLinks {
    a {
        color: $primary;
    }
}
</style>
