<template>
  <div class="post post1">
    <div class="post-body">
      <div class="post-profile">
        <img id="profile-image" src="@/assets/profile_filler.png"/>
        <span>{{ created }}</span>
      </div>
      <h1>{{ title }}</h1>
      <p>{{ body }}</p>
      <img id="post-image" v-if="picture" :src="picture"/>
      <img id="like-image" @click="() => increaseLikes()" src="@/assets/like.png"/>
      <span>{{like}} likes</span>
    </div>
  </div>
</template>

<script>
import { CLOSING } from 'ws';

export default {
  name: 'Post',
  props: {
    id: Number,
    author: String,
    created: String,
    title: String,
    body: String,
    picture: String,
    like: Number
  },
  methods: {
    increaseLikes() {
      this.$store.dispatch("increaseLikesAct", { id: this.id })
    },
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