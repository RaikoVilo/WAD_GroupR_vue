<template>
  <header>
    <h1>Group R WAD project</h1>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/login">Log in</router-link>
    </nav>
  </header>
</template>

<style scoped>

h1 {
  margin: unset;
  padding-top: 20px;
}

header {
  background-color: #886F61;
  color: #DFC2A3;
  border-radius: 20px;
  align-items: center;
  height: 30%;
  margin: 10px;
}


nav {
  align-items: center;
  padding: 20px;
  margin: 0 0 15px 0;
  color: rgb(0, 191, 255);
}

nav p {
  margin: 0 5px;
}

nav a:hover {
  border-radius: 20px;
  padding: 5px;
  background-color: #C97878;
}
</style>