<template>
    <div>
        <section class="section">
            <div class="container">
                <h1 class="title">{{ aboutTitle }}</h1>
                <h2 class="subtitle" v-html="aboutMessage"></h2>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'About',
    metaInfo: function() {
        return {
            title: 'About',
            meta: [
                { name: 'description', content: 'Read more about the Suggestions bot and how it came to be.' }
            ]
        }
    },
    data: function() {
        return {
            aboutTitle: 'About Suggestions',
            aboutMessage: `
            <br />
            <p>The Suggestions bot is created with the purpose of having an easy to use, but powerful tool and user experience designed for all. It&#39;s meant to be one of the essentials bots one could need in their Discord server.</p>
            <br />
            <p>The bot started out with the idea to solve a simple problem. In a Discord server where a suggestions channel existed and people constantly suggesting ideas, there was a problem. Lack of organization and managing new ideas. No way to keep track of what is or isn&#39;t an idea because anyone could submit a message or add reactions. With the need for a solution, the Suggestions bot came to be in early August of 2018.</p>
            <br />
            <p>Whether you are a YouTuber, e-Sports Team Owner, an owner of a game server, or someone who wants to have friends suggest new ideas in your new guild, this bot <em>will</em> and is <em>meant</em> to meet the needs of your Discord.</p>
            <br />
            <p>The developer, <strong>anthony#8577</strong>, is constantly updating the Suggestions bot and actively communicates with his user base. He&#39;s listening to the ideas <em>you</em> have and making the bot better all the time. So know you know more about the bot. But if you haven&#39;t invited it yet, what are you doing? Join us today!</p>
            `
        };
    }
}
</script>

<style scoped>

</style>
