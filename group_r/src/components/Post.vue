<template>
  <div @click="editPost" class="post post1">
    <div class="post-body">
      <span>{{ date }}</span>
      <h1>{{ title }}</h1>
      <p>{{ body }}</p>
    </div>
  </div>
</template>

<script>
import router from '@/router';

export default {
  name: 'Post',
  props: {
    id: Number,
    title: String,
    body: String,
    date: String,
  },
  methods: {
    editPost() {
      this.$router.push(`/edit/${this.id}`)
    }
  }
}

</script>

<style scoped>
.post {
    padding: 10px;
    height: auto;
    border: 1px solid #5C4E46;
    border-radius: 20px;
    margin: 0 10px 15px 10px;
    background-color: #DFC2A3;
    justify-content: center;
    flex: 1;
    font-size: large;
}

.post-body {
  display: flex;
  flex-direction: column;
  text-align: flex-start;
}

.post-profile {
  display: flex;
  justify-content: space-between;
}

#profile-image {
  height: 50px;
  width: 50px;
}

#like-image {
  height: auto;
  width: 50px;
}

</style>