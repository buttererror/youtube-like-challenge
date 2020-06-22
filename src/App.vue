<template>
     <div id="app">
          <header-layout></header-layout>
          <content-layout></content-layout>
          <mobile-loader v-if="windowWidth <= 630"></mobile-loader>
     </div>
</template>

<script>

   import ContentLayout from "./layout/ContentLayout";
   import HeaderLayout from "./layout/HeaderLayout";
   import MobileLoader from "./components/mobile-loader";

   export default {
      name: 'app',
      components: {
         MobileLoader,
         ContentLayout,
         HeaderLayout
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
     @import "sass/index";
</style>
