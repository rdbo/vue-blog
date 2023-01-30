<template>
    <div v-if="post" class="post">
        <h1>{{ post.title }}</h1>
        <p>{{ post.body }}</p>
    </div>
    <div v-else-if="error">
        <p>{{ error }}</p>
    </div>
    <div v-else>
        <p>Loading...</p>
    </div>
</template>

<script>
import { computed, ref, watch, watchEffect } from "vue";
import fetchPost from '../composables/fetchPost';

export default {
    name: 'PostView',
    props: ["id"],
    setup(props) {
        const { post, error, load } = fetchPost(props.id);
        load();

        return { post, error };
    }
}
</script>
