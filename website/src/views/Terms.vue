<template>
    <div>
        <section class="section">
            <div class="container">
                <h1 class="title">{{ termsTitle }}</h1>
                <h2 class="subtitle" v-html="termsText"></h2>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'Terms',
    metaInfo: function() {
        return {
            title: 'Terms of Service',
            meta: [
                { name: 'description', content: 'View the Terms of Service for the Suggestions bot.' }
            ]
        }
    },
    data: function() {
        return {
            termsTitle: 'Terms of Service',
            termsText: `
            <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam saepe eos voluptatibus quod est voluptate eaque cupiditate asperiores beatae soluta eius, quia ducimus hic temporibus expedita molestias voluptas! Quo, quis quaerat. Quis magni corporis voluptatibus quod numquam harum reprehenderit atque?
            `
        }
    }    
}
</script>

<style scoped>

</style>
