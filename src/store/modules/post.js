export default {
  actions: {
    async fetchPosts(ctx, limit = 3) {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=0' + limit);
      const posts = await res.json();
      ctx.commit('updatePost', posts)
    }
  },
  mutations: {
    updatePost(state, posts) {
      state.posts = posts
    },
    createPost(state, newPost) {
      state.posts.unshift(newPost)
    }
  },
  state: {
    posts: []
  },
  getters: {
    validPost(state) {
      return state.posts.filter(p => {
        return p.title && p.body
      })
    },
    allPosts(state) {
      return state.posts
    },
    postsCount(state, getters) {
      return getters.validPost.length
      // return state.allPost.length
    }
  },
}