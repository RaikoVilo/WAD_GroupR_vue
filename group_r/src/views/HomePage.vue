<template>
  <div class="post-list-wrapper">
    <div class="left"></div>
    <div class="post-wrapper">
      <div v-for="item in posts" :key="item.id" class="post">
        <Post 
          :id="item.id"
          :title="item.title" 
          :date="item.date" 
          :body="item.body"
        />
      </div>
      <button id="add-post-button" @click="addPost">Add post</button>
      <button id="delete-all-button" @click="deleteAll">Delete all</button>
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
  data() {
    return {
      posts: [],
    }
  },
  methods: {
    fetchPosts() {
      fetch('http://localhost:3000/api/posts')
        .then((response) => response.json())
        .then((data) => {
          (this.posts = data)
          console.log(data)
        })
        .catch((err) => console.log(err.message))
    },
    deleteAll() {
      fetch('http://localhost:3000/api/posts', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
      })
        .then((response) => {
          this.$router.go()
        })
        .catch((err) => {
          console.log(err.message)
        })
    },
    logout() {
      fetch('http://localhost:3000/auth/logout', {
        credentials: "include",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("logged out")
          location.assign("/")
        })
        .catch((e) => {
          console.log("log out error")
        })
    },
    addPost() {
      this.$router.push('/add')
    }
  },
  mounted() {
    this.fetchPosts()
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
  width: 80%;
}
.left,
.right {
  width: 20%;
  background-color: #886F61;
  margin: 0 10px;
  border-radius: 12px;
}

button {
  background-color: rgb(0, 191, 255);
  color: white;
  border-radius: 12px;
  border: unset;
  padding: 0.5rem;
  font-size: x-large;
  width: fit-content;
  margin: 10px;
  margin-left: 100px;
  margin-right: 100px;
  cursor: pointer;
}
</style>