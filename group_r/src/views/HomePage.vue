<template>
  <div v-for="item in postList" :key="item.id" class="posts">
    <Post 
      :created="item.created" 
      :title="item.title" 
      :body="item.body" 
      :picture="item.picture"
    />
  </div>
</template>

<script>
import Post from '@/components/Post.vue'

export default {
  components: {
    Post
  },
  computed: {
    postList() {
      console.log("siin")
      return this.$store.getters.getPosts
    }
  },
  mounted() {
    this.postList = this.postListStore
  },
}
</script>
