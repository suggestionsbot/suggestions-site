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
                    <i class="fab fa-discord"></i> <p>Add to your server</p>
                </a>
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
#homeContainer {
    text-align: center;
    margin-top: 60px;
}

i {
    padding-right: 5px;
}
</style>
