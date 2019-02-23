<template>
    <div>
        <div class="container notFound">
            <img :src=notFoundText alt="404 Not Found" >
            <br />
            <a class="button is-link is-medium" @click="$router.go(-1)">Click to go back.</a>
            <br />
            <img :src=notFoundImage alt="404 Not Found" >
        </div>
    </div>
</template>

<script>
export default {
    name: 'NotFound',
    metaInfo: function() {
        return {
            title: 'Not Found'
        };
    },
    data: function() {
        return {
            notFoundImage: require('../assets/404Image.png'),
            notFoundText: require('../assets/NotFoundText.png')
        };
    }
}
</script>

<style lang="scss">
.notFound, img {
    padding-top: 30px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: 100%;
    width: auto;
    text-align: center;
}
</style>