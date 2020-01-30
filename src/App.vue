<template>
  <div id="app">
       <layout></layout>
  </div>
</template>

<script>

import Layout from "./components/layout";
export default {
  name: 'app',
  components: {
     Layout
  }
}
</script>

<style lang="scss">
     @import "css/app.scss";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
