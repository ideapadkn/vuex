<template>
  <div id="app">
    <post-form />
    <h1>{{ postsCount }}</h1>
    <div class="post" v-for="post in validPost" :key="post.id">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import PostForm from './components/PostForm.vue';
export default {
  name: 'App',
  computed: mapGetters(['allPosts', 'postsCount']),
  methods: mapActions(['fetchPosts']),
  components: {
    PostForm
  },
  async mounted() {
    // this.$store.dispatch('fetchPosts')
    this.fetchPosts();
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
  margin: 60px auto;
  width: 400px;
}
.post {
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 1rem;
}
</style>
