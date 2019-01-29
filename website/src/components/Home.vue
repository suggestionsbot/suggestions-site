<template>
    <div>
        <section class="section">
            <div class="container">
                <img alt="Vue logo" src="../assets/logo.png">
                <h1 class="title">{{ siteName }}</h1>
                <h2 class="subtitle">
                    {{ siteDescription }}
                </h2>
                <h2 class="subtitle">
                    <strong>Author:</strong> {{ siteAuthor }}
                </h2>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'Main',
    data: function() {
        return {
            siteName: 'Suggestions',
            siteAuthor: 'anthony#8577',
            siteDescription: 'The only suggestions bot you\'ll ever need. Simple usage and management of suggestions for public and staff use.'
        };
    }
}
</script>

<style scoped>

</style>
