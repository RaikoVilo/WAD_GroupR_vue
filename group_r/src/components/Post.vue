<template>
    <div class="post post1">
        <div class="post-body">
            <div class="post-profile">
            <img src="group_r\src\assets\profile_filler.png"
                height="50px"
                width="50px"
            />
            <span>{{ created }}</span>
            </div>
            <h1>{{ title }}</h1>
            <p>{{ body }}</p>
            <img  v-if="picture" :src="picture" />
            <img @click="() => increaseLikes()" src="group_r\src\assets\like.png" height="auto" width="30px" />
        </div>
    </div>
</template>

<script>
export default {
  name: 'Post',
  props: {
    author: String,
    created: String,
    title: String,
    body: String,
    picture: String
  },
  methods: {
    increaseLikes() {
        this.$store.dispatch("increaseLikes")
    },
    resetLikes() {
        this.$store.dispatch("resetLikes")
    }
  }
}

</script>

<style scoped>
.post {
    padding: 10px;
    height: auto;
    border: 1px solid var(--brown);
    border-radius: 20px;
    margin: 0 40px 15px 40px;
    background-color: var(--beige);
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
</style>