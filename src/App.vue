<template>
  <div id="app">
    <header>
  header
    </header>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <footer>
      footer
    </footer>
  </div>
</template>

<script>
import HelloWorld from './components/BlogList.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss">
@import "~@/assets/scss/vendors/bootstrap-vue/index";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background: #F8F8F8;
}
</style>
