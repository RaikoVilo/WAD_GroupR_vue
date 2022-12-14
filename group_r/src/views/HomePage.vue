<template>
  <div class="post-list-wrapper">
    <div class="left"></div>
    <div class="post-wrapper">
      <div v-for="item in postList" :key="item.id" class="post">
        <Post 
          :id="item.id"
          :created="item.created" 
          :title="item.title" 
          :body="item.body" 
          :picture="item.picture"
          :like="item.likes"
        />
      </div>
      <button id="reset-button" @click="() => resetLikes()">Reset likes</button>
      <button id="add-post-button" @click="() => addPost()">Add post</button>
      <button id="delete-all-button" @click="() => deleteAll()">Delete all</button>
    </div>
    <div class="right"></div>
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
      return this.$store.getters.getPosts
    }
  },
  methods: {
    resetLikes() {
      this.$store.dispatch("resetLikesAct")
    },
    addPost() {
      this.$store.dispatch("addPostAct")
    },
    deleteAll() {
      this.$store.dispatch("DeleteAllAct")
    }
  }
}
</script>

<style scoped>

.post-list-wrapper{
  display: flex;
  flex-direction: row;
  height: 100%;
}

.post-wrapper {
  width: 70%;
}
.left,
.right {
  width: 100%;
  background-color: #886F61;
  margin: 0 10px;
  border-radius: 12px;
}

#reset-button {
  background-color: rgb(0, 191, 255);
  color: white;
  border-radius: 12px;
  border: unset;
  padding: 0.5rem;
  font-size: x-large;
  width: fit-content;
  margin: 10px;
  cursor: pointer;
}
</style>