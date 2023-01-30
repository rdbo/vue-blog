<template>
    <div class="home">
        <h1>Home</h1>
        <div v-if="error">{{ error }}</div>
        <PostList v-else-if="posts.length" :posts="posts"/>
        <div v-else>
            Loading...
        </div>
    </div>
</template>

<script>
import { computed, ref, watch, watchEffect } from "vue";
import PostList from "../components/PostList.vue";
import fetchPosts from "../composables/fetchPosts";

export default {
    name: 'HomeView',
    components : { PostList },
    setup() {
        const { posts, error, load } = fetchPosts();

        load();

        return { posts, error };
    }
}
</script>
