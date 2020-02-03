<template>
     <div class="vld-parent">
          <loading :active.sync="isLoading"
                   :is-full-page="fullPage"></loading>
     </div>

</template>

<script>
   import Loading from 'vue-loading-overlay';
   import 'vue-loading-overlay/dist/vue-loading.css';

   export default {
      name: "mobile-loader",
      data() {
         return {
            fullPage: true
         }
      },
      components: {
         Loading
      },
      computed: {
         isLoading() {
            return this.$store.state.isLoading;
         }
      }

   }
</script>

<style scoped>

</style>