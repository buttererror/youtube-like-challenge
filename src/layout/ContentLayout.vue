<template>
     <main class="l-content">
          <div class="l-contentHeader center">
               <div>{{totalResults}} results</div>
               <div>
                    <i class="material-icons">filter_list</i>
               </div>
          </div>
          <router-view></router-view>
     </main>
</template>

<script>

   import {mapState} from "vuex";

   export default {
      name: "ContentLayout",
      computed: {
         ...mapState({
            totalResults: state => state.totalResults,
         })
      }
   }
</script>

<style lang="scss">
</style>