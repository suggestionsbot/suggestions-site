<template>
    <div>

        <section class="section">
            <div class="container" id="homeContainer">
                <img alt="Vue logo" src="../assets/logo.png">
                <h1 class="title">{{ siteName }}</h1>
                <h2 class="subtitle">
                    {{ siteDescription }}
                    <br />
                    <br />
                    While the site is under construction, feel free to add the bot to your server, check out the
                    documentation or the video below!
                </h2>
                <div class="links">
                    <a :href=botInvite class="button is-primary">
                        <i class="fab fa-discord"></i>
                        <p>Add to your server</p>
                    </a>
                    <a class="button is-link" @click="toggle()">
                        <i class="fab fa-youtube"></i>
                        <p>Watch this video to pass time</p>
                    </a>
                    <a href="https://docs.suggestionsbot.com" target="_blank" class="button is-info">
                        <i class="fas fa-file-alt"></i>
                        <p>Check out the documentation</p>
                    </a>
                </div>
            </div>
        </section>

        <image-modal :visible="isVideoDisplayed">
            <modal-content>
                <youtube :video-id="videoID" player-height="720" player-width="1280" :player-vars="{ origin: 'http://localhost:8080', autoplay: 1, controls: 0, disablekb: 0, fs: 0, loop: 1, rel: 0 }"></youtube>
            </modal-content>
        </image-modal>

    </div>
</template>

<script>
import { ImageModal } from 'vue-bulma-modal';

export default {
    name: 'TBD',
    metaInfo: function() {
        return {
            title: 'Home',
            meta: [
                { name: 'description', content: 'The only suggestions bot you\'ll ever need. Simple usage and management of suggestions for public and staff use.' }
            ]
        };
    },
    data: function() {
        return {
            siteName: 'Suggestions',
            siteAuthor: 'anthony#8577',
            siteDescription: 'The only suggestions bot you\'ll ever need. Simple usage and management of suggestions for public and staff use.',
            botInvite: 'https://discordapp.com/oauth2/authorize?client_id=474051954998509571&scope=bot&permissions=93248',
            videoID: '1npzZu83AfU',
            isVideoDisplayed: false
        };
    },
    methods: {
        toggle: function() {
            this.isVideoDisplayed = !this.isVideoDisplayed
        },
    },
    components: {
        ImageModal
    }
}
</script>

<style lang="scss" scoped>
$modal-z: 100 !important;

@import '~bulma/bulma.sass';

#homeContainer {
    text-align: center;
    margin-top: 60px;

    .button {
        margin: 6px;
    }
}

i {
    padding-right: 5px;
}

h1, h2 {
    color: lightgrey;
}
</style>
