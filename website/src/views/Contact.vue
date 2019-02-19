<template>
    <div>
        <div class="columns is-centered contactPage">
            <div class="column is-half">
                <section class="section">
                    <div class="container">
                        <h1 class="title">{{ contactTitle }}</h1>
                        <h2 class="subtitle">
                            For general support, you should join our <a :href=supportDiscord>Support Discord</a>
                        </h2>
                        <h2 class="subtitle">
                            For any other inquiries, contact us at <a :href=inquiryEmailLink>{{ inquiryEmail }}</a>
                        </h2>
                    </div>
                </section>
            </div>
            <div class="column">
                <a class="discord-widget" :href=supportDiscord title="Join us on Discord">
                    <img src="https://discordapp.com/api/guilds/480231440932667393/widget.png?style=banner4">
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Contact',
    metaInfo: function() {
        return {
            title: 'Contact',
            meta: [
                { name: 'description', content: 'Find where to get support or contact us.' }
            ]
        }
    },
    data: function() {
        return {
            contactTitle: 'Contact us',
            supportDiscord: 'https://discord.gg/g7wr8xb ',
            inquiryEmail: 'contact@thenerdcave.us',
            inquiryEmailLink: 'mailto:contact@thenerdcave.us'
        }
    }    
}
</script>

<style lang="scss">
$primary: #dd9323;

@import '~bulma/bulma.sass';

.contactPage {
    padding: 30px;

    a {
        color: $primary !important;
    }
}
</style>
