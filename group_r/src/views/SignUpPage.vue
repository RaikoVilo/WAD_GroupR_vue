<template>
 <div class="wrapper">
      <div class="container">
          <div class="login_welcome">
              <label>Welcome to PostIt</label>
          </div>
          <div class="login_black_text">
              <label>Login to your account</label>
          </div>

          <div class="login_input_text">
            <label for="email">Email</label>
            <input type="email" name="email" required v-model="email">
            <label for="password">Password</label>
            <input type="password" name="password" required v-model="password">
            <button @click="SignUp" class="SignUp">SignUp</button>
          </div>
      </div>
  </div>
</template>

<script>

export default {
  name: "password",
  methods: {
    SignUp() {
        var data = {email: this.email, password: this.password};
        fetch("http://localhost:3000/auth/signup", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        credentials: 'include', // Don't forget to specify this if you need cookies
        body: JSON.stringify(data)})
        .then((response) => response.json())
        .then(() => {
        location.assign("/");})
        .catch((e) => {
        console.log("error");});
    }
  }
}
  

</script>


<style scoped>

 .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

 .container{
    height: wrap;
    width: max-content;
    background-color: #dfc2a3;
    border-radius: 12px;
    margin: 10px;
    font-size: xx-large;
    text-align: center;
    padding: 20px;
  }
  .login_blue_text{
    color: rgb(0, 191, 255);
  }
  .login_input_text{
    resize: none;
    padding: 0.5rem;
    margin: 10px;
  }
  .login_welcome{
    font-weight: bold;
  }
  .log_in_button{
    margin-bottom: 10px;
    width: 100%;
    justify-items: flex-start;
    align-items: center;
  }
  #submit{
    background-color: #c97878;
    color:#ffffff;
    border-radius: 12px;
    border: unset;
    padding: 0.5rem;
    font-size: x-large;
    width: fit-content;
    margin: 10px;
    cursor: pointer;
  }

  .input_class:invalid ~  a {
    pointer-events: none;
  }

  .input_class:valid ~ a {
    pointer-events: fill;
  }
</style>