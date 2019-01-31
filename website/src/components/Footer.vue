<template>
    <div>
        <footer class="footer">
            <div class="content has-text-centered footerLinks">
                <p v-html="combinedLinks"></p>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            links: [
                { name: '© 2019 Nerd Cave Development', url: 'https://thenerdcave.us' },
                { name: 'Privacy Policy', url: '/privacy' },
                { name: 'Terms of Service', url: '/terms' },
                { name: 'Contact', url: '/contact' }
            ]
        };
    },
    computed: {
        combinedLinks: function() {
            let links = this.links.map(link => {
                return `<a href="${link.url}">${link.name}</a>`;
            });

            return links.join(' | ');
        }
    }
}
</script>

<style lang="scss">
$primary: #dd9323;

@import '~bulma/bulma.sass';

.footerLinks {
    a {
        color: $primary;
    }
}
</style>
