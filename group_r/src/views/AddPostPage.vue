<template>
  <div class="addPost-wrapper"> 
    <div class="addPost">
      <label>Add post</label>
      <form>
        <div class="post-body-textarea">
          <label>Title</label>
          <textarea id="title" name="title" cols="25" rows="1" placeholder="title" v-model="title" ></textarea>
        </div>
        <div class="post-body-textarea">
          <label>Body</label>
          <textarea id="textarea" name="textarea" cols="25" rows="8" placeholder="body" v-model="body"></textarea>
        </div>
      </form>
      <button @click="addPost" type="button" id="add">Add</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddPost",
  data() {
    return {
      title: "",
      body: "",
    };
  },
  methods: {
    addPost() {
      const currentdate = new Date()
      const newDate = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
      const payload = {
        title: this.title,
        body: this.body,
        date: newDate,
      };
      console.log(payload)
      fetch("http://localhost:3000/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })
      .then((response) => {
        console.log(response.data);
        this.$router.push("/");
      })
      .catch((e) => {
        console.log(e);
        console.log("error");
      });
    },
  },
};
</script>


<style scoped>
.addPost-wrapper {
  display: flex;
  justify-content: center;
  height: 100%;
}
.addPost {
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