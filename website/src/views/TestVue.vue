<template>
    <div>
        <section class="section">
            <div class="container">
                <h1 class="title">Test Vue</h1>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat beatae dolor eum quasi eos animi
                    voluptatibus dolore distinctio exercitationem illum?</p>
            </div>

            <div class="suggestion">
                <Suggestion />
            </div>
        </section>
    </div>
</template>

<script>
import Suggestion from '@/components/Suggestion';

export default {
    name: 'Test',
    metaInfo: function () {
        return {
            title: 'Test'
        }; 
    },
    data: function() {
        return {

        };
    },
    components: {
        Suggestion
    }
}
</script>

<style lang="scss">
$card-background-color: #2e3131;

@import '~bulma/bulma.sass';

.container {
    max-width: 750px;

    a:hover {
        text-decoration: underline;
    }
}

.suggestionTitle, .suggestionUser, .suggestionFooter {
    color: $lightergrey !important;
}
</style>
