<template>
  <div class="editPost-wrapper"> 
    <div class="editPost">
      <label>A post</label>
      <form>
        <div class="post-body-textarea">
          <label>Body</label>
          <textarea id="textarea" name="textarea" cols="25" rows="8" placeholder="textarea"></textarea>
        </div>
      </form> 
      <button type="button" id="update">Update</button>
      <button type="button" id="delete">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  
  },
  computed: {
  },
  methods: {
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
}
.post-body-textarea {
  align-items: flex-start;
}
label {
  padding: 0.5rem;
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
  padding: 0.5rem;
}
</style>