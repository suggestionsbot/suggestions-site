<template>
    <div>
        <section class="section">
            <div class="container" id="homeContainer">
                <img alt="Vue logo" src="../assets/logo.png">
                <h1 class="title">{{ siteName }}</h1>
                <h2 class="subtitle">
                    {{ siteDescription }}
                </h2>
                <a class="button is-primary">
                    <i class="fab fa-discord"></i>
                    <p>Add to your server</p>
                </a>
            </div>
        </section>
        <section class="section">
            <div class="container" id="featuresContainer">
                <h1 class="title">Features</h1>
                <h2 class="subtitle">
                    Powerful features to help you get the most out of your Discord with the Suggestions bot.
                </h2>
            </div>
            <br />
            <div class="tile is-ancestor">
                <div class="tile is-vertical is-8">
                    <div class="tile">
                        <div class="tile is-parent is-vertical">
                            <article class="tile is-child notification is-primary">
                                <p class="title">Emoji sets</p>
                                <p class="subtitle">
                                    Take control of customization by choosing what reactions get added to suggestions and the ability to suggest new emoji sets 
                                    as you please.
                                </p>
                                <figure class="image is-4by3">
                                    <img src="https://bulma.io/images/placeholders/640x480.png">
                                </figure>
                            </article>
                            <article class="tile is-child notification is-warning">
                                <p class="title">Easy as 1 2 3!</p>
                                <p class="subtitle">
                                    There shouldn't be a hassle when setting up a simple bot. There are only a few easy steps to follow before you get going!
                                </p>
                            </article>
                        </div>
                        <div class="tile is-parent">
                            <article class="tile is-child notification is-info">
                                <p class="title">Middle tile</p>
                                <p class="subtitle">With an image</p>
                                <figure class="image is-4by3">
                                    <img src="https://bulma.io/images/placeholders/640x480.png">
                                </figure>
                            </article>
                        </div>
                    </div>
                    <div class="tile is-parent">
                        <article class="tile is-child notification is-danger">
                            <p class="title">Constant updates</p>
                            <p class="subtitle">
                                Placeholder.
                            </p>
                            <div class="content">
                                <!-- Content -->
                                <!-- The bot is always being updated. Feedback from the people who use the bot daily and ideas from the developer is what keeps this
                                project alive! -->
                            </div>
                        </article>
                    </div>
                </div>
                <div class="tile is-parent">
                    <article class="tile is-child notification is-success">
                        <div class="content">
                            <p class="title">Suggestion management</p>
                            <p class="subtitle">
                                Allow your staff members to deal with suggestions without hassle.
                            </p>
                            <div class="content">
                                <!-- Content -->
                                <!-- Approve, reject and add notes to suggestions. Every good Discord
                                community is based on good communication. -->
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'Home',
    metaInfo: function() {
        return {
            title: 'Home',
            meta: [
                { name: 'description', content: this.siteDescription }
            ]
            
        }
    },
    data: function() {
        return {
            siteName: 'Suggestions',
            siteAuthor: 'anthony#8577',
            siteDescription: 'The only suggestions bot you\'ll ever need. Simple usage and management of suggestions for public and staff use.',
            botInvite: 'https://discordapp.com/oauth2/authorize?client_id=474051954998509571&scope=bot&permissions=93248'
        };
    }
}
</script>

<style scoped>
#homeContainer, #featuresContainer {
    text-align: center;
    margin-top: 60px;
}

i {
    padding-right: 5px;
}
</style>
