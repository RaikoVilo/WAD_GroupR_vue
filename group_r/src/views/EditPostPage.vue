<template>
  <div class="editPost-wrapper"> 
    <div class="editPost">
      <label>Edit post</label>
      <form>
        <div class="post-body-textarea">
          <label>Title</label>
          <textarea id="title" name="title" cols="25" rows="1" v-model="title"></textarea>
        </div>
        <div class="post-body-textarea">
          <label>Body</label>
          <textarea id="textarea" name="textarea" cols="25" rows="8" v-model="body"></textarea>
        </div>
      </form> 
      <button @click="updatePost" type="button" id="update">Update</button>
      <button @click="deletePost" type="button" id="delete">Delete</button>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      id: Number,
      title: String,
      body: String,
    }
  },
  methods: {
    loadPost() {
      fetch(`http://localhost:3000/api/posts/${this.$route.params.id}`)
      .then((response) => response.json())
      .then((data) => {
        this.title = data.title
        this.body = data.body
        this.id = this.$route.params.id
      })

    },
    deletePost() {
      fetch(`http://localhost:3000/api/posts/${this.id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
      })
      .then((response) => {
        this.$router.push('/')
      })
      .catch((err) => {
        console.log(err.message)
      })
    },
    updatePost() {
      const currentdate = new Date()
      const newDate = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();

      fetch(`http://localhost:3000/api/posts/${this.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: this.title, body: this.body, date: newDate })
      })
      .then((response) => {
        this.$router.push('/')
      })
      .catch((err) => {
        console.log(err.message)
      })
    }
  },
  mounted() {
    this.loadPost()
  }
}
</script>


<style scoped>
.editPost-wrapper {
  display: flex;
  justify-content: center;
  height: 100%;
}
.editPost {
  background-color: #DFC2A3;
  border-radius: 12px;
  font-size: xx-large;
  padding: 10px;
}
.post-body-textarea {
  display: flex;
  align-items: flex-start;
  align-self: start;
  margin: 5px;
}
label {
  width: 100px;
}
textarea {
  resize: none;
  padding: 0.5rem;
}
button {
  background-color: #C97878;
  color: #fff;
  border-radius: 12px;
  border: unset;
  font-size: x-large;
  padding: 10px;
  margin: 5px;
}
</style>