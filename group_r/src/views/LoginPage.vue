<template>
 <div class="wrapper">
      <div class="container">
          <div class="login_welcome">
              <label>Welcome to PostIt</label>
          </div>
          <div class="login_blue_text">
              <label>Create an account</label>
          </div>
          <div class="login_black_text">
              <label>or<br>
              Please log in</label>
          </div>
          <div class="login_input_text">
              <input class="input_class" type="Email" id="email" placeholder="Email" name="email" required><br>
              <input class="input_class" type="Password" id="password" placeholder="Password" name="password" required><br>
              <a id="submit" >
                <input @click="() => checkPassword()"  type="submit" id="submit" value="Log in"/>
              </a>

          </div>
          <div class="log_in_button">
              
          </div>
          <div class="login_blue_text">
              <label>Forget password</label>
          </div>
      </div>
  </div>
</template>

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

<script>

export default {
  name: "password",
  methods: {
    checkPassword() {
      if(document.getElementById("password").value.match(/(?=.*\d)(?=(.*[a-z]){2,})(?=.*[A-Z])(?=.*[_])(?=.*[0-9]).{8,15}/g)) {
        window.location="index.html";
      }
      else {
        alert("This password is not valid");
      }
    }
  }
}
  

</script>


