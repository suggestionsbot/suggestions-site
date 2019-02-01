<template>
    <div>
        <section class="section">
            <div class="container">
                <h1 class="title">{{ partnersTitle }}</h1>
                <h2 class="subtitle" v-html="partnersInformation"></h2>
            </div>
        </section>
        <section class="section partners">
            <div class="container" v-for="(partner, index) in partners" :key="index">
                <div class="card">
                    <div class="card-content">
                        <div class="media">
                            <div class="media-left">
                                <figure class="image is-128x128">
                                    <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                                </figure>
                            </div>
                            <div class="media-content">
                                <p class="title is-4">{{ partner.partner }}</p>
                                <p class="subtitle is-6"><a>@{{ partner.partnerMention }}</a></p>
                                {{ partner.description }}
                            </div>
                        </div>

                        <div class="content">
                            <time datetime="2016-1-1">{{ partner.dateAdded }}</time>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'Partners',
    metaInfo: function() {
        return {
            title: 'Partners',
            meta: [
                { name: 'description', content: 'View partners of the Suggestions bot and Nerd Cave Development.' }
            ]
        }
    },
    data: function() {
        return {
            partnersTitle: 'Partners',
            partnersInformation: `
            <br />
            <p>Check out our partners of the Suggestions bot and Nerd Cave Development!</p>
            <br />
            <p>Want to become a partner? Join our <a href="${this.supportDiscord}">Support Discord</a> today and speak with <strong>anthony#8577</strong> for partnership inquiries.</p>
            `,
            supportDiscord: 'https://discord.gg/g7wr8xb',
            partners: [
                { 
                    partner: 'Partner 1', 
                    partnerMention: 'partner1', 
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, omnis eum dolorem iusto nesciunt ipsa!', 
                    link: 'a link here',
                    dateAdded: new Date().toString() 
                },
                { 
                    partner: 'Partner 2', 
                    partnerMention: 'partner2', 
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, omnis eum dolorem iusto nesciunt ipsa!', 
                    link: 'a link here',
                    dateAdded: new Date().toString() 
                    
                },
                { 
                    partner: 'Partner 3', 
                    partnerMention: 'partner3', 
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, omnis eum dolorem iusto nesciunt ipsa!', 
                    link: 'a link here',
                    dateAdded: new Date().toString() 
                },
            ]
        }
    }
}
</script>

<style lang="scss">
$primary: #dd9323;

@import '~bulma/bulma.sass';

.centerContact {
    padding: 30px;
}

a {
    color: $primary;
}

.section, .partners {
    margin-bottom: -50px;
}
</style>
