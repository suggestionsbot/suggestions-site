<template>
    <div>
        <footer class="footer">
            <div class="content has-text-centered">
                <p>
                    <strong><a :href=footerText.url>{{ footerText.name }}</a></strong>
                </p>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            footerText: {
                name: '© 2019 Nerd Cave Development',
                url: 'https://thenerdcave.us'
            }
        };
    }
}
</script>

<style scoped>

</style>
