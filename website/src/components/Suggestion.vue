<template>
    <div>
        <div class="notification is-danger" v-if="error">
            <button class="delete"></button>
            {{ error }}
        </div>
        <hr>
        <div class="suggestions">
            <div class="card" v-for="(suggestion, index) in suggestions" :key="index">
                <div class="card-content">
                    <div class="media">
                    <div class="media-left">
                        <figure class="image is-48x48">
                        <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                        </figure>
                    </div>
                    <div class="media-content">
                        <p class="title is-4 suggestionTitle">{{ suggestion.username }}</p>
                        <p class="subtitle is-6 suggestionUser">{{ suggestion.userID }}</p>
                    </div>
                    </div>

                    <div class="content suggestionFooter">
                    {{ suggestion.suggestion }}
                    <br>
                    <time datetime="2016-1-1 12:15:15">{{ suggestion.time }}</time>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import SuggestionService from '../SuggestionService';

export default {
    name: 'SuggestionComponent',
    data: function() {
        return {
            suggestions: [],
            error: ''
        };
    },
    async created() {
        try {
            this.suggestions = await SuggestionService.getSuggestions();

        } catch (error) {
            this.error = error.message;
        }
    }
}
</script>

<style lang="scss">


</style>