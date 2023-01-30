import { ref } from "vue";

const fetchPosts = () => {
    const posts = ref([]);
    const error = ref(null);
    const load = async () => {
        try {
            let data = await fetch("http://localhost:3000/posts");
            if (!data.ok) {
                throw Error("Unable to fetch data");
            }
            posts.value = await data.json();
        } catch (err) {
            error.value = err.message;
        }
    }

    return { posts, error, load };
}

export default fetchPosts;

