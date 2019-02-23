<template>
    <div>
        <div class="container">

            <nav class="level">
                <div class="level-left">
                    <div class="level-item">
                        <h1 class="title">Contact us</h1>
                        <!-- <h2 class="subtitle">
                            For general support, you should join our <a :href=supportDiscord>Support Discord</a>
                        </h2>
                        <h2 class="subtitle">
                            For any other inquiries, contact us at <a :href=inquiryEmailLink>{{ inquiryEmail }}</a>
                        </h2> -->
                    </div>
                </div>
                <div class="level-right">
                    <div class="level-item">
                        <a class="discord-widget" :href=supportDiscord title="Join us on Discord">
                            <img src="https://discordapp.com/api/guilds/480231440932667393/widget.png?style=banner4">
                        </a>
                    </div>
                </div>
            </nav>
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
            supportDiscord: 'https://discord.gg/g7wr8xb ',
            inquiryEmail: 'contact@thenerdcave.us',
            inquiryEmailLink: 'mailto:contact@thenerdcave.us'
        }
    }    
}
</script>

<style lang="scss">
.container {
    padding: 30px;

    a:hover {
        text-decoration: underline;
    }
}

.center {
    max-width: 750px;
    margin: auto;
    width: 50%;
}
</style>
