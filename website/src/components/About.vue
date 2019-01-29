<template>
    <div>
        <section class="section">
            <div class="container">
                <h1 class="title">{{ aboutTitle }}</h1>
                <br />
                <h2 class="subtitle" v-html="aboutMessage">
                </h2>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'About',
    data: function() {
        return {
            siteName: 'Suggestions',
            aboutTitle: 'About Suggestions',
            aboutMessage: `
            <p>The Suggestions bot is created with the purpose of having an easy to use, but a powerful user experience
            and tool for all to use. It's meant to be one of the essential bots one could need in their
            Discord server.</p>
            </br>
            <p>Whether you're a YouTuber, e-Sports Team Owner, Minecraft server owner or someone who wants to easily
            have friends in your guild suggest different ideas, this bot <em>will</em> meet the needs of your
            Discord.</p>
            <br />
            <p>With constant updates and a developer who is actively communicating with his user base, Suggestions is an ever-growing project. Easy to use commands and customization, it only takes a few simple steps to get
            started with suggestions.</p>
            `
        };
    },
}
</script>

<style scoped>

</style>
