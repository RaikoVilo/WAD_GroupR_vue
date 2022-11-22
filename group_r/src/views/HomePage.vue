<template>
  <div>siin</div>
  <div v-for="item in postList" class="posts">
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
  data: {
    postList: {}
  },
  computed: {
    postListStore() {
      this.postList = this.$store.dispatch("getPost")
    }
  }
}
</script>
