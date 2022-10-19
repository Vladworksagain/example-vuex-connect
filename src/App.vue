<template>
  <div id="app">
    {{ allPosts }}
    {{ allExample }}
  </div>
</template>

<script>

export default {
  name: 'App',
  computed: {
    allPosts() {
      return this.$store.getters.getPosts
    },
    allExample() {
      return this.$store.getters.getExample
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
