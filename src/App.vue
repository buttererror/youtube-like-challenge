<template>
  <div id="app">
       <layout></layout>
       <mobile-loader v-if="windowWidth <= 630"></mobile-loader>
  </div>
</template>

<script>

import Layout from "./components/layout";
import MobileLoader from "./components/mobile-loader";
export default {
  name: 'app',
  components: {
     MobileLoader,
     Layout
  },
   mounted() {
     this.windowWidth = window.innerWidth;
      window.addEventListener("resize", (e) => {
         this.windowWidth = e.target.innerWidth;
      });
   },
   computed: {
     windowWidth: {
        get() {
           return this.$store.state.windowWidth;
        },
        set(width) {
           this.$store.commit("updateWindowWidth", width);
        }
     }
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
