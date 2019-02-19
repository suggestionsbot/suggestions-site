<template>
    <div>
        <section class="section">
            <div class="container" id="homeContainer">
                <img alt="Vue logo" src="../assets/logo.png">
                <br />
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
                    <a href="https://docs.suggestionsbot.com" target="_blank" class="button is-info">
                        <i class="fas fa-file-alt"></i>
                        <p>Check out the documentation</p>
                    </a>
                    <a class="button is-link" @click="toggleVideo">
                        <i class="fab fa-youtube"></i>
                        <p>Watch this video to pass time</p>
                    </a>

                    <image-modal :visible="video.isVideoDisplayed">
                        <div class="player-container">
                            <youtube :video-id="video.id" :player-width="video.width" :player-height="video.height" :player-vars="video.vars"></youtube>
                        </div>
                    </image-modal>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { ImageModal } from 'vue-bulma-modal';

export default {
    name: 'TBD',
    metaInfo: function() {
        return {
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
            video: {
                id: '1npzZu83AfU',
                width: 1280,
                height: 960,
                isVideoDisplayed: false,
                vars: {
                    host: this.getOriginURL,
                    autoplay: 1,
                    controls: 0,
                    disablekb: 1,
                    fs: 0,
                    loop: 1,
                    modestbranding: 1,
                    enablejsapi: 1
                },
            }
        };
    },
    methods: {
        mobileCheck: function() {
            let check = false;
            // eslint-disable-next-line
            (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
            return check;
        },
        getOriginURL: function() {
            if (process.env.NODE_ENV === 'production') return process.env.VUE_APP_YT_ORIGIN_URL;
            else return 'http://localhost:8080'
        },
        toggleVideo: function() {
            if (!this.mobileCheck()) this.video.isVideoDisplayed = !this.video.isVideoDisplayed;
            else window.open(`https://youtu.be/${this.video.id}`, '_blank');
        },
    },
    components: {
        ImageModal
    }
}
</script>

<style lang="scss">
#homeContainer {
    text-align: center;
    margin-top: 60px;

    .button {
        margin: 6px;
    }
}

.player-container {
    padding-bottom: 69.5%;
    padding-top: 30px;
    height: 0;
    position: relative;
}

.player-container iframe,
.player-container object,
.player-container embed {
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100% !important;
}

i {
    padding-right: 5px !important;
}

h1, h2 {
    color: lightgrey !important;
}
</style>
