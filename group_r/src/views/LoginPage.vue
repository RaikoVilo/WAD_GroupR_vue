<template>
 <div class="wrapper">
      <div class="container">
          <div class="login_welcome">
              <label>Welcome to PostIt</label>
          </div>
          <div class="login_black_text">
              <label>Create an account</label>
          </div>

          <div class="login_input_text">
              <input class="input_class" type="Email" id="email" placeholder="Email" name="email" required><br>
              <input class="input_class" type="Password" id="password" placeholder="Password" name="password" required><br>
              <a id="submit" >
                <input @click="() => checkPassword()"  type="submit" id="submit" value="Signup"/>
              </a>

          </div>
          <div class="log_in_button">
              
          </div>

      </div>
  </div>
</template>

<script>

export default {
  name: "password",
  methods: {
    checkPassword() {
      
      if(document.getElementById("password").value.match(/(?=.*\d)(?=(.*[a-z]){2,})(?=.*[A-Z])(?=.*[_])(?=.*[0-9]).{8,15}/g) && 
        document.getElementById("password").value.length < 15 &&
        document.getElementById("password").value[0] !== document.getElementById("password").value[0].toLowerCase()) {

        window.location="index.html";
      }
      else {
        alert("This password is not valid \n The password needs to: \n * Be at least 8 and less than 15 chars \n * Include at least one uppercase alphabet character \n * Include at least two lowercase alphabet characters \n * Include at least one numeric value \n * Start with an uppercase alphabet \n * Include the character '_' ");
      }
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



