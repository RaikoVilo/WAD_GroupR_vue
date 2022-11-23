<template>
  <Header />
  <router-view/>
  <Footer />
</template>

<script>
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #5C4E46;
  flex-direction: column;
  height: 100%;
}

nav a {
  font-weight: bold;
  color: #DFC2A3;
}

nav a.router-link-exact-active {
  color: rgb(0, 191, 255);
}
</style>
