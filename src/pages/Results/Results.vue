<template>
     <div class="card card-vertical" v-if="items">
          <result
                    v-for="(item, index) in items"
                    :key="index"
                    :item="item"
          ></result>
     </div>
</template>

<script>
   import Result from "./components/result";
   import {mapState} from 'vuex';

   export default {
      name: "Results",
      components: {
         Result
      },
      computed: {
         ...mapState({
            items: state => state.items,
            windowWidth: state => state.windowWidth
         })
      }
   }
</script>

<style scoped>

</style>